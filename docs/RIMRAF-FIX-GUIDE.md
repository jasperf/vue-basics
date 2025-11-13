# Rimraf 5.x API Migration Guide

**Issue:** Rimraf 5.x changed from callback-based to Promise-based API
**Affected Projects:** todo-app, vue-cli-webpack-project, and others using rimraf in build scripts

## The Problem

### Old API (Rimraf 2.x - 4.x)
```javascript
const rm = require('rimraf')

// Callback-based
rm('/some/path', (err) => {
  if (err) throw err
  console.log('Deleted!')
})
```

### New API (Rimraf 5.x+)
```javascript
import { rimraf } from 'rimraf'

// Promise-based
await rimraf('/some/path')
console.log('Deleted!')
```

## Solutions

### Option 1: Downgrade to Rimraf 3.x (Quick Fix)

**Pros:**
- No code changes required
- Immediate fix
- Known stable version

**Cons:**
- Sticks with older package
- Missing new features
- Still accumulating technical debt

**Implementation:**
```bash
npm install --save-dev rimraf@^3.0.2
```

### Option 2: Update Build Scripts (Proper Fix)

**Pros:**
- Uses modern rimraf API
- Prepares for future
- Cleaner async/await syntax

**Cons:**
- Requires code changes
- Need to test build scripts
- May reveal other issues

**Implementation:**

#### Before (todo-app/build/build.js):
```javascript
var rm = require('rimraf')
var path = require('path')
var config = require('../config')

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    // ... build logic
  })
})
```

#### After (Using Promise):
```javascript
import { rimraf } from 'rimraf'
import path from 'path'
import config from '../config/index.js'

async function build() {
  try {
    // Delete old assets
    await rimraf(path.join(config.build.assetsRoot, config.build.assetsSubDirectory))

    // Run webpack
    const stats = await new Promise((resolve, reject) => {
      webpack(webpackConfig, (err, stats) => {
        if (err) reject(err)
        else resolve(stats)
      })
    })

    // ... rest of build logic
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

build()
```

#### Alternative (Using fs.rm - Node 14.14+):
```javascript
import fs from 'fs/promises'
import path from 'path'
import config from '../config/index.js'

async function build() {
  try {
    // Delete old assets using Node's built-in fs.rm
    await fs.rm(
      path.join(config.build.assetsRoot, config.build.assetsSubDirectory),
      { recursive: true, force: true }
    )

    // Run webpack
    const stats = await new Promise((resolve, reject) => {
      webpack(webpackConfig, (err, stats) => {
        if (err) reject(err)
        else resolve(stats)
      })
    })

    // ... rest of build logic
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

build()
```

### Option 3: Migrate to Vite (Best Long-Term Solution)

**Pros:**
- Eliminates custom build scripts entirely
- Eliminates rimraf dependency
- Eliminates all Babel 6 vulnerabilities
- 10-100x faster builds

**Cons:**
- Requires more extensive migration
- Learning curve for Vite
- 1-2 days per project

**Why this is best:**
- Vite handles all build/clean tasks internally
- No need for custom build scripts
- Modern, maintained tooling
- Official Vue recommendation

See [PHASE3-VITE-MIGRATION-GUIDE.md](./PHASE3-VITE-MIGRATION-GUIDE.md) for details.

## Recommended Approach

### For Each Project:

1. **Immediate (if builds are broken):**
   - Downgrade to rimraf@^3.0.2
   - Verify builds work
   - Document as technical debt

2. **Short-term (next sprint):**
   - Evaluate if project is candidate for Vite migration
   - If yes → plan Vite migration (eliminates issue entirely)
   - If no → update build script to rimraf 5.x API

3. **Long-term:**
   - Migrate all projects to Vite
   - Remove all custom build scripts
   - Eliminate dependency on rimraf

## Quick Fix for All Projects

Run this script to downgrade rimraf across all affected projects:

```bash
#!/bin/bash
# Downgrade rimraf to 3.x for all projects

PROJECTS=(
  "todo-app"
  "vue-cli-webpack-project"
  "vue-shop/frontend"
)

for project in "${PROJECTS[@]}"; do
  if [ -f "$project/package.json" ]; then
    echo "Fixing $project..."
    cd "$project"
    npm install --save-dev rimraf@^3.0.2
    cd - > /dev/null
  fi
done

echo "Done! All projects now use rimraf 3.x"
```

Save as `scripts/fix-rimraf.sh` and run:
```bash
chmod +x scripts/fix-rimraf.sh
./scripts/fix-rimraf.sh
```

## Testing After Fix

### Test todo-app build:
```bash
cd todo-app
npm run build
```

Expected output:
```
✓ Build completed successfully
✓ Files generated in /dist/
```

### Test vue-cli-webpack-project build:
```bash
cd vue-cli-webpack-project
npm run build
```

Expected output:
```
✓ Build completed successfully
✓ Files generated in /dist/
```

## Summary

| Solution | Time | Pros | Cons | Recommendation |
|----------|------|------|------|----------------|
| **Option 1: Downgrade** | 5 min | Quick, no code changes | Technical debt | ⚠️ Immediate fix only |
| **Option 2: Update Scripts** | 1-2 hrs | Modern API, proper fix | Still using old tools | 🟡 If not migrating to Vite |
| **Option 3: Vite Migration** | 1-2 days | Eliminates issue, best DX | More work upfront | ✅ **Recommended** |

**Final Recommendation:**

1. **Now:** Downgrade to rimraf 3.x to unblock builds
2. **Next Sprint:** Start Vite migrations (see Phase 3 guide)
3. **Long-term:** All projects on Vite, no rimraf dependency

---

**Prepared by:** Claude Code
**Date:** November 13, 2025
**Phase:** 3 - Build Tool Modernization
