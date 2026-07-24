IRYSS Content Platform — YouTube-Style
Content Library for IRYSS
1. What the IRYSS Content Platform Is
The IRYSS Content Platform is the YouTube-style content sharing application for IRYSS,
built to give brands and IRYSS structured media channels where content can be uploaded,
organized, watched, shared, downloaded by resellers, and linked to live marketplace
products. It is accessed through the Brand Portal, Reseller Portal, and Admin Portal, with
each user type seeing the correct content, permissions, and management tools for their role.
Brands use the platform through the Brand Portal to manage their own channels, upload
product-linked and general content, organize playlists and collections, configure channel
presentation, and publish content for reseller use. Resellers use the platform through the
Reseller Portal to browse brand and IRYSS channels, watch approved content, download
available assets, and access product-linked media connected to the products they are allowed
to use. Admins use the platform through the Admin Portal to manage governance, visibility,
reporting, settings, IRYSS-owned content, and brand channel oversight.
The application supports both product-linked content and general channel content. Product-
linked content connects a video or media item to a live marketplace product. The viewer can
move from the content into the existing product page, B2B journey, reseller journey, cart
flow, or export flow. General channel content supports brand storytelling, campaigns,
lookbooks, editorial content, platform content, curated collections, and reseller-facing media
that is not tied to one specific product.
Marketplace product imagery remains part of the marketplace product model. Images and
approved product media used on product pages, product listings, storefronts, B2B pages, and
export paths are still managed as product media for the marketplace. If that same approved
media also appears inside the IRYSS Content Platform’s channel experience, the content
platform should reference the existing approved media record. It should not create a second
upload path for the same product media.
The IRYSS Content Platform makes media usable, discoverable, distributable, and
measurable across the brand, reseller, admin, marketplace, and Shopify Connector
workflows. It owns the channel experience, video workflow, reseller-facing media access
rules, product-linked content flow, and analytics for how content is watched, downloaded,
shared, and used.
2. Portal-Embedded Application Architecture
The IRYSS Content Platform is its own content application. It provides the backend
functionality for the content library, including channels, video management, publishing,
search, downloads, analytics, Bunny media handling, and product-linked media. Its frontend
screens are built into the Brand Portal, Reseller Portal, and Admin Portal as part of the
marketplace and portal build.
Application backend
The backend is the main IRYSS Content Platform build. It stores the content records,
manages the video system, connects to Bunny, prepares content for search and analytics, and
applies the permissions configured through the Admin Portal and Brand Portal. It manages
brand channels, the IRYSS channel, video records, playlists, collections, channel media,
product-linked media, publishing status, playback data, analytics data, search data, and
Bunny asset references.
Settings, access, and permissions
Settings and permissions are configured through the Admin Portal and Brand Portal under the
universal access and permissions model. Admin users control the platform-level settings,
governance rules, IRYSS-owned content, global visibility options, content quality review,
and reporting permissions. Brand users control the settings available to them for their own
channel, uploaded content, product-linked media, publishing, and download access.
The content platform backend stores and applies the configured settings when content is
watched, downloaded, published, searched, or retrieved by the Shopify Connector. The
frontend is where the permissions are managed. The backend is where those permissions are
applied during actual use.
Portal screens
The portal screens are the working screens for the content application. The Brand Portal
provides the brand-side content screens for upload, channel management, product-linked
media, playlists, collections, publishing, visibility, downloads, and performance reporting.
The Reseller Portal provides the reseller-side content screens for browsing channels,
watching videos, searching content, downloading approved assets, and using product-linked
media. The Admin Portal provides the IRYSS operating screens for IRYSS-owned content,
brand oversight, settings, governance, visibility, quality review, analytics, and platform
reporting.
Video processing and background work
The application connects to Bunny for video upload, processing, playback preparation,
delivery, and controlled playback or download access. Bunny receives the video file, prepares
the playable asset, and sends processing updates back to the content platform. The content
platform stores the Bunny asset reference against the video record and uses that reference for
playback, download access, and Shopify Connector retrieval.
Background workers handle work that happens after the user action has been submitted.
These workers receive Bunny processing updates, update video status, handle failed upload
or processing cases, run retry tasks, prepare OpenSearch indexing, and batch analytics events.
Search and analytics
OpenSearch provides search and discovery for the content application. The content platform
decides which video records should be indexed based on publishing status and the access
rules configured through Admin Portal and Brand Portal. OpenSearch then supports content
search, autocomplete, channel browsing, and related-content suggestions.
PostHog and Bunny analytics support the reporting layer. The content platform sends
business events into PostHog, including video views, product clicks, saves, downloads, and
shares. Bunny provides playback and delivery performance. The Admin Portal and Brand
Portal display the relevant analytics through their reporting screens.
Marketplace connection
The IRYSS Marketplace Middleware is used when the content application needs product or
reseller information. Product-linked video is stored as a content record inside the IRYSS
Content Platform. The product remains a marketplace record. The content platform stores the
product reference so the video can be connected to the correct marketplace product.
When the content platform needs product availability, reseller product access, or product-
linked download access, it requests that information through the IRYSS Marketplace
Middleware. When the Shopify Connector needs approved product-linked media for a
reseller product, it calls the content platform with the product or content reference. The
content platform checks the saved content rule, checks the product reference, confirms the
required marketplace access, and returns the controlled Bunny asset path when the request is
allowed.
3. Platform Records and Marketplace Data
The IRYSS Content Platform stores the records needed to run the YouTube-style content
application. These records include brand channels, the IRYSS channel, videos, playlists,
collections, content categories, channel media, publishing status, visibility settings, download
settings, playback data, analytics records, and Bunny asset references.
The marketplace stores the commerce records. These include the product record, product
price, stock, availability, customer account, cart, checkout, order record, reseller product
access, and marketplace product context.
Product-linked content is the connection point between the content application and the
marketplace. The video remains inside the content platform as a media record. The product
remains inside the marketplace as a commerce record. The content platform stores the
product reference so the video can be attached to the correct live product without moving
commerce data into the content application.
When the content platform needs live product or reseller information, it uses the IRYSS
Marketplace Middleware. This allows the content platform to show the correct product
connection, check whether the reseller can access the linked product, and return the correct
approved media for marketplace or Shopify Connector use.
4. Channel and Content Model
The platform is organized around channels. A channel is the main content area for a brand or
for IRYSS. It can contain videos, playlists, collections, product-linked content, general brand
content, campaign content, and reseller-facing media.
A brand channel is created when a brand is approved. The brand then configures the channel
inside the Brand Portal by styling the channel, organizing content, creating playlists, adding
product-linked media, adding general channel content, and preparing metadata. The channel
becomes visible to resellers after the brand publishes it.
IRYSS has its own channel using the same content model. IRYSS-owned content is managed
through the Admin Portal and can be used for editorial content, platform campaigns, curated
content, marketplace-wide media, promotional content, and reseller education.
Product-linked video is video connected to a live marketplace product. The content
platform stores the video record, Bunny asset reference, and product reference. The brand
manages the video from the Brand Portal. Resellers can watch or download it where access is
allowed. The Shopify Connector can retrieve it when the approved product media is needed
for a reseller product.
General brand video is video that belongs to a brand channel but is not tied to one
product. This includes campaign videos, styling content, brand storytelling, seasonal edits,
tutorials, lookbooks, and reseller-facing media.
IRYSS-owned content is content published by IRYSS through its own channel. It is
managed through the Admin Portal and can support platform campaigns, curated edits,
reseller education, editorial features, and marketplace-wide content.
Channel image and media content is media used inside the YouTube-style channel
experience. Where the media is already approved product media, the content platform should
reference the existing approved product media record instead of creating a separate duplicate
upload. Catalogue product imagery remains in the marketplace product model.
5. Content Lifecycle
Each video follows a controlled lifecycle inside the IRYSS Content Platform. The lifecycle
explains how a video moves from a brand or admin draft into an uploaded Bunny asset, then
into a live channel item that can be watched or downloaded by the correct users. It also
explains what happens when an upload fails or when a published item is taken out of active
use.
There is no separate manual approval or publish step for each individual video once the
channel is already published. If the video finishes Bunny processing successfully and the
required metadata, product reference, visibility setting, and access settings are present, the
content platform can move the video into the live published state automatically.
Lifecycle sequence:
1. Draft
The video record is created before the content is live. The brand or admin can prepare
the metadata, choose the channel placement, connect the video to a product, set
visibility, and set the download rule. Draft content stays inside the Brand Portal or
Admin Portal management area.
2. Uploading
The video file is transferred through the Bunny/TUS upload process. The portal
shows upload progress while the file is moving to Bunny. The content record already
exists at this stage, but Bunny has not yet prepared the video for playback or
download.
3. Processing
Bunny prepares the uploaded video for streaming and delivery. Bunny sends
processing updates back to the content platform. The content platform workers
receive those updates and update the video status shown in the portal.
4. Ready
Bunny processing is complete and the video asset is technically available for playback
or download. If the channel is already published and the required video data is
complete, the content platform moves the video into the published state automatically.
If required data is missing, the video remains available in management screens for
correction before it can go live.
5. Published
The video is live in the relevant brand or IRYSS channel. Resellers can watch or
download the video only where the visibility rule and access rule allow it. Product-
linked published video can also be used by the Shopify Connector when the reseller is
allowed to receive that product media.
6. Failed
The upload or processing process has failed. The video stays in the Brand Portal or
Admin Portal management area. The brand or admin can correct the issue, replace the
file, or restart the upload.
7. Unpublished
The video remains stored inside the Content Platform but is taken out of active use. It
can be edited, corrected, reorganized, or prepared for publishing again.
6. Video Engine, Upload Process, and Player
Bunny Stream provides the video infrastructure for V1. It handles video upload, transcoding,
adaptive playback, CDN delivery, processing updates, and video delivery paths.
IRYSS builds the content application around Bunny. The IRYSS build covers the portal
screens, channel structure, video records, product linking, playlist structure, content rules,
player integration, analytics, and download access.
Upload Process
V1 uses resumable upload through Bunny/TUS. The Brand Portal starts the upload process
and the content platform creates the video record. That record stores the video metadata,
channel placement, product reference, visibility setting, and download rule.
Bunny receives the video file and prepares it for playback. When Bunny updates the
processing status, the content platform workers update the video record. The portal then
shows the correct status to the brand or admin.
When Bunny marks the video as ready, the content platform updates the video record for
playback. If the channel is published and the required video data is complete, the item can
become live automatically. If required data is missing, it stays in management until corrected.
Player
Video.js is used for the player interface inside the IRYSS portal design. Bunny provides the
processed video stream and delivery path.
The V1 player supports:
• adaptive playback;
• thumbnails;
• chapters;
• adjustable playback speed;
• hover-scrub timeline previews;
• product-link interface;
• up-next suggestions.
Hover-scrub previews use Bunny-generated preview assets with a Video.js integration step.
Whisper captions are V2. V1 search and SEO use title, description, category, channel, and
product tags. In V2, Whisper generates captions and transcripts automatically from video
audio. Captions can be edited after generation.
7. Technology Stack
The platform follows the existing IRYSS technical standards.
Application stack
• Next.js for the portal-embedded content platform screens.
• NestJS on Node.js and TypeScript for the content platform backend.
• Dedicated PostgreSQL database for content-platform and video records.
• Shared Aiven Redis/Valkey for background work and caching where required, with
separate namespaces and queues for video jobs so video processing does not collide
with marketplace jobs.
• Same Turborepo workspace as the wider IRYSS platform.
• Own Dockerfile and Cloud Run deployment for the content platform services.
• Existing shared UI package for portal screens.
Media stack
• Bunny Stream for upload, processing, transcoding, adaptive playback, CDN
delivery, and processing updates.
• Video.js for the custom player interface.
• Bunny delivery paths for streaming and controlled downloads.
Search and analytics stack
• OpenSearch for indexing and discovery.
• PostHog for business-context analytics and user behavior.
• Bunny analytics for video performance data.
8. V1 Scope
V1 is the first working version of the IRYSS Content Platform. It covers the core content
library that brands and IRYSS need to publish video, and it covers the reseller experience
needed to watch, search, and download approved content. V1 also connects product-linked
video to the marketplace and Shopify Connector where product media needs to be used
outside the content library.
8.1 Uploading and Organization
Brands upload video through the Brand Portal. A product-linked video is connected to a SKU
or product reference. A general brand video is placed inside the brand channel without a
product link. The brand can organize content by channel, playlist, collection, category, and
product relationship.
V1 includes:
• product-linked video upload;
• general channel video upload;
• SKU-based organization;
• brand channel organization;
• video metadata;
• video quality standards;
• format validation;
• processing status;
• Content Issues integration.
Video quality checks include minimum resolution, accepted formats, and basic quality
validation. These checks use the same issue model already used for content quality problems.
Relevant flags include Low Quality Media and Wrong Format.
The quality standards apply before content is approved for marketplace or reseller product-
content use. Once a reseller receives an approved video for their Shopify store, the reseller
can use that video in the same approved product-media process used for product image
assets.
8.2 Processing and Publishing
Bunny sends processing updates back to the content platform. The Brand Portal or Admin
Portal shows the current upload and processing status.
A brand channel is created automatically when a brand is approved. The brand still needs to
configure and publish the channel before resellers can see it.
After the channel has been published, individual videos do not require a separate manual
publish action. A video goes live automatically when Bunny processing is complete and the
required video data is present. The required data should include the title, channel placement,
visibility setting, and any product link required for product-linked content.
If Bunny processing fails or required data is missing, the video stays in the management area
until the issue is corrected.
8.3 Channel Browsing and Discovery
The content library is organized by channel, category, collection, and playlist. Brand channels
contain product-linked content and general channel content. IRYSS has its own channel for
IRYSS-managed content.
V1 discovery includes:
• channel browsing;
• category browsing;
• collection browsing;
• playlist browsing;
• curated brand playlists;
• most-watched sorting;
• autocomplete search;
• OpenSearch indexing with video as its own content type;
• simple related-content rules for up-next suggestions.
8.4 OpenSearch Indexing
OpenSearch powers search and discovery inside the content platform. The search index
should be built from video records that are published and available to the viewer making the
search request.
Admin search can include a wider set of records because Admin needs management access.
Brand search can include the brand’s own management records. Reseller search should return
content that the reseller is allowed to view.
The video search record includes:
• video title;
• description;
• channel;
• brand reference;
• category;
• collection;
• playlist relationship;
• product links;
• visibility state;
• processing state;
• viewer access data.
V1 search uses metadata and product associations. Transcript text is added in V2 when
Whisper is added.
8.5 Watching
A published video can be watched inside the content platform by users who meet the video’s
visibility and access rules.
The player supports adaptive playback, thumbnails, chapters, adjustable speed, hover-scrub
timeline previews, and up-next suggestions.
The up-next queue uses simple related-content rules. These can be based on the same brand,
category, collection, or tagged products.
8.6 Product Linking
A video can be connected to the real products shown in it. The content platform stores the
product reference against the video record.
When a viewer clicks a tagged product, the content platform sends the viewer to the live
marketplace product page. Any shopping, B2B ordering, reseller action, cart action, or export
action then happens inside the existing marketplace experience.
Price, stock, and availability come from the marketplace through the IRYSS Marketplace
Middleware.
Timestamped product hotspots are V2.
8.7 Sharing
V1 supports interactive sharing from the content item.
Mobile sharing can use the device share sheet. Desktop sharing can use supported platform
share dialogs. Shared links include the correct title, preview image, and metadata.
Scheduled or background publishing to connected social channels is V2.
8.8 Downloads and Reseller Access
V1 supports single download and bulk download. A single download returns one approved
asset. Bulk download returns multiple selected assets through separate Bunny download
paths.
Downloaded files use readable names based on the product or video title. The reseller should
not receive files named only by internal IDs.
For product-linked video, download access is checked against the video’s download rule and
the reseller’s access to the linked product. If the reseller must have product access before
downloading the video, the content platform confirms that access through the IRYSS
Marketplace Middleware.
When access is valid, the content platform returns the controlled Bunny download path.
General channel video uses its own per-video download setting. Download settings are
managed through the Brand Portal and Admin Portal under the universal access and
permissions model. The exact options should follow the platform’s permission structure
where relevant.
8.9 Security
V1 video playback should happen through IRYSS-controlled pages. This allows the platform
to check the viewer’s access before showing the player.
Protected videos should use Bunny tokenized playback and domain restrictions. This makes
sure the stream is delivered through approved IRYSS access paths.
8.10 Analytics
The Content Platform emits named video events into PostHog. These events track how users
watch, save, download, share, and click from video into product pages.
V1 events are:
• video_viewed;
• video_watch_progress;
• video_completed;
• video_product_clicked;
• video_saved;
• video_downloaded;
• video_shared.
Bunny provides playback and delivery performance. This includes plays, watch time,
bandwidth, CDN performance, and available video performance metrics.
Brand Portal reporting shows brand-level and video-level performance. Admin Portal
reporting shows consolidated performance across brands. Reseller-facing watch pages can
show the public view count for the video.
9. Marketplace and Shopify Connector Integration
The IRYSS Content Platform connects product-linked content to marketplace products
through the IRYSS Marketplace Middleware.
The marketplace remains the source for product records, price, stock, availability, cart,
checkout, orders, and reseller product access. The content platform stores the video record
and the product reference needed to connect the media item to the correct product.
A signed-in marketplace user can also be recognized inside the content platform. This allows
the content platform to apply the correct access rules when that user watches or downloads
product-linked content.
Video activity should feed into the same behavioural data model used by the marketplace.
This allows analytics to connect content activity with product, brand, and reseller behaviour.
Shopify Connector Retrieval
The Brand Portal upload creates the video record inside the IRYSS Content Platform and
stores the Bunny asset reference.
If the video is linked to a product, the content record also stores the product reference used to
connect the media item to the marketplace product.
When the Shopify Connector needs a product-linked video, it calls the content platform with
the product or content reference. The content platform checks whether the video is approved
for connector use and whether the reseller is allowed to receive that product-linked asset.
When the request is valid, the content platform returns the controlled Bunny asset path. The
Shopify Connector retrieves the approved product video through that path and includes it in
the product content available to the reseller.
10. V2 Scope
V2 covers advanced video features that depend on additional processing, automation, or user-
behaviour data.
V2 includes:
• Live streaming
Bunny supports live ingest. Latency, moderation, recording, and pricing must be
confirmed before implementation is locked.
• Whisper captions and transcript-powered search
Whisper generates captions and transcripts automatically from video audio. This
enables search by spoken words.
• AI-suggested chapter markers
Chapter suggestions are generated from the V2 transcript. The brand needs an editing
or acceptance step before those chapters become live.
• Timestamped product hotspots
Product links appear at the exact moment a product appears in the video.
• Automatic vertical or square reframing
Social-format video generation for platforms that need vertical or square assets.
• Scheduled social publishing
Scheduled or background publishing of content to connected social channels using the
platform’s existing social account connection model where relevant.
• Request-access downloads
A brand can approve individual requests before someone downloads certain content.
This requires workflow state and notifications.
• DRM
Stronger content protection if required.
• Personalized video feed
Built after real watch-behavior data exists.
• Predictive analytics
Trend detection and likely-to-convert signals once there is enough data.
• Bunny AI content-tagging investigation
Review whether Bunny’s AI tagging is useful, redundant, or complementary.
11. Team and Timeline
The IRYSS Content Platform is built by three senior full-stack developers moving directly
from the marketplace build.
The same team already knows the portal structure, shared UI library, Turborepo workspace,
deployment pipeline, testing approach, marketplace integration pattern, and Bunny usage
from the marketplace image layer.
Developer allocation
• Dev 1 — Backend and Bunny Integration
Owns the NestJS backend, Bunny upload, Bunny webhook handling, HLS wiring,
background workers, video quality validation, and Shopify Connector retrieval
endpoint.
• Dev 2 — Frontend and Player
Owns the watch UI, browse UI, library UI, Video.js player, Bunny HLS playback,
chapters, scrubbing thumbnails, product-tag overlay, and up-next queue.
• Dev 3 — Integration, Analytics, and Portal Screens
Owns the marketplace integration points, Bunny/PostHog analytics blending, Admin
dashboard screens, Brand dashboard screens, settings screens, integration testing, and
cross-system testing.
Dev 3 can also absorb sharing, playlists, sorting, or autocomplete if Dev 2’s player and
browsing work becomes heavier.
V1 timeline
• Week 1
Bunny Stream library setup, NestJS backend scaffold, marketplace integration
contract, Video.js-to-Bunny-HLS wiring, and portal screens using the existing design
system and shared components.
• Week 2
TUS upload process, webhook-driven status, product tagging, marketplace data
integration, video quality validation, download access, permission rules, and
OpenSearch video content type.
• Week 3
Analytics blending, Brand/Admin dashboard screens, sharing, playlists, most-watched
sorting, autocomplete, Shopify Connector retrieval endpoint, and integration testing.
V1 timeline: 2.5–3 weeks.
V2 timeline
V2 includes live streaming, Whisper captions, transcript-powered search, AI-suggested
chapters, timestamped product hotspots, automated social reframing, scheduled social
publishing, request-access downloads, DRM, and predictive analytics.
V2 timeline: 5.5–6.5 weeks.
Total timeline for both phases: 8–9.5 weeks.