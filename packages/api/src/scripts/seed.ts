import { ExecArgs } from "@medusajs/framework/types";
import {
  ContainerRegistrationKeys,
  Modules,
} from "@medusajs/framework/utils";
import { ProductStatus } from "@mercurjs/types";
import {
  approveSellerWorkflow,
  createOffersWorkflow,
  createProductsWorkflow,
  createSellerAccountWorkflow,
  createSellerShippingOptionsWorkflow,
  createSellerShippingProfilesWorkflow,
  createSellerStockLocationsWorkflow,
} from "@mercurjs/core/workflows";
import {
  createWorkflow,
  transform,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";
import {
  createApiKeysWorkflow,
  createLocationFulfillmentSetWorkflow,
  createProductCategoriesWorkflow,
  createRegionsWorkflow,
  createSalesChannelsWorkflow,
  createServiceZonesWorkflow,
  createTaxRegionsWorkflow,
  linkSalesChannelsToApiKeyWorkflow,
  linkSalesChannelsToStockLocationWorkflow,
  updateStoresStep,
  updateStoresWorkflow,
} from "@medusajs/medusa/core-flows";

const updateStoreCurrencies = createWorkflow(
  "update-store-currencies",
  (input: {
    supported_currencies: { currency_code: string; is_default?: boolean }[];
    store_id: string;
  }) => {
    const normalizedInput = transform({ input }, (data) => {
      return {
        selector: { id: data.input.store_id },
        update: {
          supported_currencies: data.input.supported_currencies.map(
            (currency) => {
              return {
                currency_code: currency.currency_code,
                is_default: currency.is_default ?? false,
              };
            }
          ),
        },
      };
    });

    const stores = updateStoresStep(normalizedInput);

    return new WorkflowResponse(stores);
  }
);

export default async function seedDemoData({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER);
  const link = container.resolve(ContainerRegistrationKeys.LINK);
  const query = container.resolve(ContainerRegistrationKeys.QUERY);
  const salesChannelModuleService = container.resolve(Modules.SALES_CHANNEL);
  const storeModuleService = container.resolve(Modules.STORE);

  const countries = ["gb", "de", "dk", "se", "fr", "es", "it"];

  logger.info("Seeding store data...");
  const [store] = await storeModuleService.listStores();
  let defaultSalesChannel = await salesChannelModuleService.listSalesChannels({
    name: "Default Sales Channel",
  });

  if (!defaultSalesChannel.length) {
    const { result: salesChannelResult } = await createSalesChannelsWorkflow(
      container
    ).run({
      input: {
        salesChannelsData: [
          {
            name: "Default Sales Channel",
          },
        ],
      },
    });
    defaultSalesChannel = salesChannelResult;
  }

  await updateStoreCurrencies(container).run({
    input: {
      store_id: store.id,
      supported_currencies: [
        {
          currency_code: "eur",
          is_default: true,
        },
        {
          currency_code: "usd",
        },
        {
          currency_code: "gbp",
        },
      ],
    },
  });

  await updateStoresWorkflow(container).run({
    input: {
      selector: { id: store.id },
      update: {
        name: "IRYSS Marketplace",
        default_sales_channel_id: defaultSalesChannel[0].id,
      },
    },
  });
  logger.info("Seeding region data...");
  const regionModuleService = container.resolve(Modules.REGION);

  const existingRegions = await regionModuleService.listRegions(
    {},
    {
      relations: ["countries"],
    }
  );

  const assignedCountries = new Set<string>();
  for (const r of existingRegions) {
    for (const c of r.countries || []) {
      assignedCountries.add(c.iso_2);
    }
  }

  const unassignedCountries = countries.filter(
    (c) => !assignedCountries.has(c)
  );

  let region;
  if (unassignedCountries.length === 0) {
    region =
      existingRegions.find((r) =>
        r.countries?.some((c) => countries.includes(c.iso_2))
      ) || existingRegions[0];
    logger.info(
      "Countries already assigned to a region, skipping region creation."
    );
  } else if (unassignedCountries.length < countries.length) {
    logger.info(
      `Some countries already assigned, creating region with: ${unassignedCountries.join(", ")}`
    );
    const { result: regionResult } = await createRegionsWorkflow(
      container
    ).run({
      input: {
        regions: [
          {
            name: "Europe",
            currency_code: "eur",
            countries: unassignedCountries,
            payment_providers: ["pp_system_default"],
          },
        ],
      },
    });
    region = regionResult[0];
  } else {
    const { result: regionResult } = await createRegionsWorkflow(
      container
    ).run({
      input: {
        regions: [
          {
            name: "Europe",
            currency_code: "eur",
            countries,
            payment_providers: ["pp_system_default"],
          },
        ],
      },
    });
    region = regionResult[0];
  }
  logger.info("Finished seeding regions.");

  logger.info("Seeding tax regions...");
  const taxModuleService = container.resolve(Modules.TAX);
  const existingTaxRegions = await taxModuleService.listTaxRegions();
  const existingCountryCodes = new Set(
    existingTaxRegions.map((tr) => tr.country_code)
  );
  const countriesToCreate = countries.filter(
    (c) => !existingCountryCodes.has(c)
  );

  if (countriesToCreate.length > 0) {
    await createTaxRegionsWorkflow(container).run({
      input: countriesToCreate.map((country_code) => ({
        country_code,
        provider_id: "tp_system",
      })),
    });
  } else {
    logger.info("Tax regions already exist, skipping.");
  }
  logger.info("Finished seeding tax regions.");

  logger.info("Seeding publishable API key data...");
  let publishableApiKey;
  const { data } = await query.graph({
    entity: "api_key",
    fields: ["id"],
    filters: {
      type: "publishable",
    },
  });

  publishableApiKey = data?.[0];

  if (!publishableApiKey) {
    const {
      result: [publishableApiKeyResult],
    } = await createApiKeysWorkflow(container).run({
      input: {
        api_keys: [
          {
            title: "IRYSS Storefront",
            type: "publishable",
            created_by: "",
          },
        ],
      },
    });

    publishableApiKey = publishableApiKeyResult;
  }

  try {
    await linkSalesChannelsToApiKeyWorkflow(container).run({
      input: {
        id: publishableApiKey.id,
        add: [defaultSalesChannel[0].id],
      },
    });
  } catch (error: unknown) {
    if (
      !(error instanceof Error && error.message.includes("already"))
    ) {
      throw error;
    }
    logger.info("Sales channel already linked to API key, skipping.");
  }
  logger.info("Finished seeding publishable API key data.");

  logger.info("Seeding product categories...");
  const productModule = container.resolve(Modules.PRODUCT);
  const categoryNames = ["Skincare", "Haircare", "Fragrance", "Makeup"];
  const existingCategories = await productModule.listProductCategories({
    name: categoryNames,
  });

  let categoryResult;
  if (existingCategories.length === categoryNames.length) {
    categoryResult = existingCategories;
    logger.info("Product categories already exist, skipping.");
  } else {
    const categoriesToCreate = categoryNames.filter(
      (name) => !existingCategories.find((c) => c.name === name)
    );
    const { result: newCategories } = await createProductCategoriesWorkflow(
      container
    ).run({
      input: {
        product_categories: categoriesToCreate.map((name) => ({
          name,
          is_active: true,
        })),
      },
    });
    categoryResult = [...existingCategories, ...newCategories];
  }
  logger.info("Finished seeding product categories.");

  const SELLER_EMAIL = "brand@iryss.dev";
  const SELLER_PASSWORD = "supersecret";

  const { data: existingSellers } = await query.graph({
    entity: "seller",
    fields: ["id"],
    filters: { email: SELLER_EMAIL },
  });

  if (existingSellers[0]) {
    logger.info(
      "Demo seller already exists, skipping seller, product and offer seeding."
    );
    logger.info("Finished seeding.");
    return;
  }

  logger.info("Seeding demo brand (seller)...");
  const authModuleService = container.resolve(Modules.AUTH);

  let authIdentityId: string;
  const registerResponse = await authModuleService.register("emailpass", {
    body: { email: SELLER_EMAIL, password: SELLER_PASSWORD },
  });

  if (registerResponse.success && registerResponse.authIdentity) {
    authIdentityId = registerResponse.authIdentity.id;
  } else {
    const [providerIdentity] =
      await authModuleService.listProviderIdentities({
        entity_id: SELLER_EMAIL,
        provider: "emailpass",
      });
    authIdentityId = providerIdentity.auth_identity_id!;
  }

  const { result: demoSeller } = await createSellerAccountWorkflow(
    container
  ).run({
    input: {
      auth_identity_id: authIdentityId,
      member_email: SELLER_EMAIL,
      first_name: "Demo",
      last_name: "Brand",
      seller: {
        name: "IRYSS Demo Brand",
        email: SELLER_EMAIL,
        currency_code: "eur",
        description:
          "A demo brand with sample products to verify the marketplace.",
      },
    },
  });

  await approveSellerWorkflow(container).run({
    input: { seller_id: demoSeller.id },
  });

  const { data: members } = await query.graph({
    entity: "member",
    fields: ["id"],
    filters: { email: SELLER_EMAIL },
  });
  const demoSellerMemberId = members[0].id;

  const { result: sellerStockLocations } =
    await createSellerStockLocationsWorkflow(container).run({
      input: {
        seller_id: demoSeller.id,
        locations: [
          {
            name: "Demo Brand Warehouse",
            address: {
              city: "Paris",
              country_code: "FR",
              address_1: "1 Rue de Rivoli",
            },
          },
        ],
      },
    });
  const sellerStockLocation = sellerStockLocations[0];

  await link.create({
    [Modules.STOCK_LOCATION]: {
      stock_location_id: sellerStockLocation.id,
    },
    [Modules.FULFILLMENT]: {
      fulfillment_provider_id: "manual_manual",
    },
  });

  await linkSalesChannelsToStockLocationWorkflow(container).run({
    input: {
      id: sellerStockLocation.id,
      add: [defaultSalesChannel[0].id],
    },
  });

  await updateStoresWorkflow(container).run({
    input: {
      selector: { id: store.id },
      update: {
        default_location_id: sellerStockLocation.id,
      },
    },
  });

  await createLocationFulfillmentSetWorkflow(container).run({
    input: {
      location_id: sellerStockLocation.id,
      fulfillment_set_data: {
        name: "Demo Brand delivery",
        type: "shipping",
      },
    },
  });

  const {
    data: [locationWithSet],
  } = await query.graph({
    entity: "stock_location",
    fields: ["id", "fulfillment_sets.id"],
    filters: { id: sellerStockLocation.id },
  });
  const sellerFulfillmentSetId = locationWithSet?.fulfillment_sets?.[0]?.id;
  if (!sellerFulfillmentSetId) {
    throw new Error("Seller fulfillment set was not created");
  }

  const { result: sellerServiceZones } = await createServiceZonesWorkflow(
    container
  ).run({
    input: {
      data: [
        {
          fulfillment_set_id: sellerFulfillmentSetId,
          name: "Europe",
          geo_zones: countries.map((country_code) => ({
            country_code,
            type: "country" as const,
          })),
        },
      ],
    },
  });
  const sellerServiceZoneId = sellerServiceZones[0].id;

  const { result: sellerShippingProfiles } =
    await createSellerShippingProfilesWorkflow(container).run({
      input: {
        seller_id: demoSeller.id,
        shipping_profiles: [
          { name: "Demo Brand Shipping", type: "default" },
        ],
      },
    });
  const sellerShippingProfileId = sellerShippingProfiles[0].id;

  await createSellerShippingOptionsWorkflow(container).run({
    input: {
      seller_id: demoSeller.id,
      shipping_options: [
        {
          name: "Standard Shipping",
          price_type: "flat",
          provider_id: "manual_manual",
          service_zone_id: sellerServiceZoneId,
          shipping_profile_id: sellerShippingProfileId,
          type: {
            label: "Standard",
            description: "Ship in 2-3 days.",
            code: "standard",
          },
          prices: [
            { currency_code: "usd", amount: 10 },
            { currency_code: "eur", amount: 10 },
            { currency_code: "gbp", amount: 8 },
            { region_id: region.id, amount: 10 },
          ],
          rules: [
            {
              attribute: "enabled_in_store",
              value: "true",
              operator: "eq",
            },
            { attribute: "is_return", value: "false", operator: "eq" },
          ],
        },
      ],
    },
  });
  logger.info("Finished seeding demo brand.");

  logger.info("Seeding product data...");

  await createProductsWorkflow(container).run({
    input: {
      created_by: demoSellerMemberId,
      products: [
        {
          title: "Radiance Serum",
          category_ids: [
            categoryResult.find(
              (cat: { name: string }) => cat.name === "Skincare"
            )!.id,
          ],
          description:
            "A lightweight serum with vitamin C and hyaluronic acid for radiant, hydrated skin.",
          handle: "radiance-serum",
          weight: 100,
          status: ProductStatus.PUBLISHED,
          seller_ids: [demoSeller.id],
          images: [
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",
            },
          ],
          attributes: [
            {
              title: "Size",
              values: ["30ml", "50ml"],
              is_variant_axis: true,
            },
          ],
          variants: [
            {
              title: "30ml",
              sku: "SERUM-30",
              options: { Size: "30ml" },
            },
            {
              title: "50ml",
              sku: "SERUM-50",
              options: { Size: "50ml" },
            },
          ],
        },
        {
          title: "Repair Hair Mask",
          category_ids: [
            categoryResult.find(
              (cat: { name: string }) => cat.name === "Haircare"
            )!.id,
          ],
          description:
            "Deep conditioning mask that restores damaged hair with natural oils.",
          handle: "repair-hair-mask",
          weight: 250,
          status: ProductStatus.PUBLISHED,
          seller_ids: [demoSeller.id],
          images: [
            {
              url: "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
            },
          ],
          attributes: [
            {
              title: "Size",
              values: ["200ml", "400ml"],
              is_variant_axis: true,
            },
          ],
          variants: [
            {
              title: "200ml",
              sku: "MASK-200",
              options: { Size: "200ml" },
            },
            {
              title: "400ml",
              sku: "MASK-400",
              options: { Size: "400ml" },
            },
          ],
        },
      ],
    },
  });
  logger.info("Finished seeding product data.");

  logger.info("Creating offers for the demo brand...");
  const { data: seededProducts } = await query.graph({
    entity: "product",
    fields: ["id", "variants.id", "variants.sku"],
    filters: {
      handle: ["radiance-serum", "repair-hair-mask"],
    },
  });

  const offers = seededProducts.flatMap((product) =>
    product.variants.map(
      (variant: { id: string; sku: string | null }) => ({
        seller_id: demoSeller.id,
        created_by: demoSellerMemberId,
        sku: `OFFER-${variant.sku}`,
        variant_id: variant.id,
        shipping_profile_id: sellerShippingProfileId,
        inventory_items: [
          {
            sku: `OFFER-${variant.sku}`,
            stock_levels: [
              {
                location_id: sellerStockLocation.id,
                stocked_quantity: 1000000,
              },
            ],
          },
        ],
        prices: [
          { amount: 3500, currency_code: "eur" },
          { amount: 3900, currency_code: "usd" },
          { amount: 3200, currency_code: "gbp" },
        ],
      })
    )
  );

  await createOffersWorkflow(container).run({ input: { offers } });
  logger.info("Finished creating offers for the demo brand.");

  logger.info("IRYSS marketplace seed complete!");
}
