import type { MedusaNextFunction, MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

/**
 * Storefront context middleware (placeholder).
 *
 * Will resolve the active storefront / sales channel from the
 * incoming request (e.g. via publishable API key or host header)
 * and attach it to `req.scope`.
 */
export async function storefrontContext(
  req: MedusaRequest,
  _res: MedusaResponse,
  next: MedusaNextFunction
) {
  // TODO: resolve storefront from publishable API key or host header
  // and register it on the request scope.
  next()
}
