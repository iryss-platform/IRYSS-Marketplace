/**
 * bundle-dashboards.mjs
 *
 * After `medusa build` produces the server bundle in .medusa/server,
 * this script copies the pre-built admin and vendor dashboard apps
 * into .medusa/server/dashboards/ so the Mercur UI modules can serve
 * them at runtime without a separate dev server.
 *
 * Adapted from the Mercur scaffold for @iryss.
 */

import { existsSync, mkdirSync, cpSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const root = join(__dirname, '..')

const serverDir = join(root, '.medusa', 'server')
const dashboardsOut = join(serverDir, 'dashboards')

/**
 * Resolve a dashboard app directory.
 * Looks for a local build first (apps/<name>/dist), then falls back to the
 * workspace package build directory.
 */
function resolveDashboardDir(name) {
  // Option 1: monorepo apps/<name>/dist (produced by turbo build)
  const appsDist = join(root, '..', '..', 'apps', name, 'dist')
  if (existsSync(appsDist)) return appsDist

  // Option 2: workspace package via node_modules (devDependency)
  try {
    const pkgName = `@iryss/${name}`
    const pkgJson = join(root, 'node_modules', pkgName, 'package.json')
    if (existsSync(pkgJson)) {
      const pkgDir = dirname(pkgJson)
      const distDir = join(pkgDir, 'dist')
      if (existsSync(distDir)) return distDir
      return pkgDir
    }
  } catch {
    // ignore
  }

  return null
}

function copyDashboard(name) {
  const src = resolveDashboardDir(name)
  if (!src) {
    console.warn(`⚠  Dashboard "${name}" not found — skipping. Build the @iryss/${name} package first.`)
    return
  }

  const dest = join(dashboardsOut, name)
  mkdirSync(dest, { recursive: true })
  cpSync(src, dest, { recursive: true })
  console.log(`✓  Bundled dashboard "${name}" from ${src}`)
}

// ------------------------------------------------------------------
// Main
// ------------------------------------------------------------------

if (!existsSync(serverDir)) {
  console.error('ERROR: .medusa/server does not exist. Run `medusa build` first.')
  process.exit(1)
}

mkdirSync(dashboardsOut, { recursive: true })

copyDashboard('admin')
copyDashboard('vendor')

console.log('\nDashboard bundling complete.')
