import type { MedusaNextFunction, MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

/**
 * RBAC enforcement middleware (placeholder).
 *
 * Will check the authenticated user's roles/permissions against the
 * required permission for the current route and return 403 if denied.
 */
export async function rbac(
  _req: MedusaRequest,
  _res: MedusaResponse,
  next: MedusaNextFunction
) {
  // TODO: implement role-based access control checks
  next()
}
