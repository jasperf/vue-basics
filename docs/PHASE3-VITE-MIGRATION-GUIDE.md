# Phase 3: Vite Migration Guide

**Status:** 📋 Planning & Documentation
**Date:** November 13, 2025

## Overview

This guide provides a comprehensive approach to migrating Vue.js projects from Webpack to Vite, eliminating Babel 6 vulnerabilities and dramatically improving development experience.

## Why Vite?

### Performance Benefits
- ⚡ **10-100x faster** cold server start
- ⚡ **Instant HMR** (Hot Module Replacement) in milliseconds
- ⚡ **Faster builds** using esbuild (10-100x faster than Babel)
- ⚡ **On-demand compilation** - only compiles imported modules

### Developer Experience
- 🎯 **Zero config** for most projects
- 🎯 **Native ESM** - no bundling during development
- 🎯 **Built-in TypeScript** support
- 🎯 **CSS pre-processors** out of the box
- 🎯 **Official Vue recommendation**

### Security & Maintenance
- 🔒 **Eliminates Babel 6 vulnerabilities** (200+ critical issues)
- 🔒 **Active maintenance** by Vue core team
- 🔒 **Modern dependencies** with regular updates
- 🔒 **Smaller attack surface** - simpler toolchain

## Migration Strategy

### Project Prioritization

Based on complexity and benefit, migrate in this order:

#### Tier 1: Simple Projects (Start Here) ⭐
**Time:** 1-2 hours each
**Benefit:** High (eliminate all Babel 6 issues)

1. **twitter** - Single component, basic setup
2. **Basic examples** - v-bind, v-for, components folders
3. **Calculator apps** in ready-vuejs

**Why start here:**
- Quick wins build confidence
- Learn Vite patterns on simple projects
- Prove the migration process works

#### Tier 2: Medium Complexity 🔶
**Time:** 3-6 hours each
**Benefit:** High

1. **todo-app** - Full test suite needs migration
2. **drag-and-drop** - Custom directive to rewrite
3. **Simple ready-vuejs apps** - Single-page apps

**Considerations:**
- Test frameworks need updating (Karma → Vitest)
- E2E tests need updating (Nightwatch → Playwright)
- More components to verify

#### Tier 3: Complex Projects 🔴
**Time:** 1-2 days each
**Benefit:** Very High (production readiness)

1. **vue-shop/frontend** - Webpack 5 + validation + router
2. **vue-cli-webpack-project** - Full webpack setup + tests
3. **Firebase apps** - External service integration

**Considerations:**
- Requires thorough testing
- May have custom webpack plugins
- Production deployment changes

## Step-by-Step Migration: twitter Project

### Current State Analysis

**twitter project structure:**
```
twitter/
├── src/
│   └── main.js          # Vue instance
├── scss/
│   └── twitter.scss     # Styles
├── dist/                # Build output
├── index.html           # Entry HTML
├── package.json         # Dependencies
└── webpack.config.js    # Build config
```

**Current Dependencies (Babel 6):**
```json
{
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "node-sass": "^4.12.0",
    "nodemon": "^1.19.0"
  }
}
```

### Step 1: Install Vite & Dependencies

```bash
cd twitter

# Remove old dependencies
npm uninstall babel-cli babel-preset-env node-sass nodemon

# Install Vite and Vue plugin
npm install -D vite @vitejs/plugin-vue

# Install Vue 2.7 if not already
npm install vue@^2.7.16

# Install sass (modern replacement for node-sass)
npm install -D sass
```

### Step 2: Create vite.config.js

Create `vite.config.js` in the project root:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2' // Note: use plugin-vue2 for Vue 2.7

export default defineConfig({
  plugins: [vue()],

  // Build output configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },

  // Development server
  server: {
    port: 3000,
    open: true
  },

  // CSS preprocessing
  css: {
    preprocessorOptions: {
      scss: {
        // Add global SCSS imports if needed
      }
    }
  }
})
```

### Step 3: Update index.html

Vite uses `index.html` as the entry point. Update it:

**Before (Webpack):**
```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://unpkg.com/vue"></script>
  <script src="./dist/main.js" type="text/javascript" charset="utf-8" async defer></script>
  <link rel="stylesheet" href="./dist/twitter.css">
</head>
<body>
  <div id="twitterVue">
    <!-- App content -->
  </div>
</body>
</html>
```

**After (Vite):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Twitter Vue App</title>
  <link rel="stylesheet" href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css">
</head>
<body class="flex items-center justify-center vh-100">
  <div id="app"></div>
  <!-- Vite entry point -->
  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

### Step 4: Update src/main.js

Convert to modern Vue setup:

**Before:**
```javascript
new Vue({
  el: '#twitterVue',
  data: {
    tweet: ''
  },
  computed: {
    tweetIsEmpty: function() {
      return this.tweet.length == 0;
    }
  }
});
```

**After:**
```javascript
import { createApp } from 'vue'
import './scss/twitter.scss' // Import SCSS directly

const app = createApp({
  data() {
    return {
      tweet: ''
    }
  },
  computed: {
    tweetIsEmpty() {
      return this.tweet.length === 0
    }
  },
  template: `
    <div class="w-75 center ba b--black-10">
      <div class="pv2 tc bb b--black-10">
        <h1 class="ma0 f5 normal">Compose New Tweet</h1>
      </div>
      <div class="bg-near-white pa3">
        <textarea
          placeholder="Write your tweet here"
          v-model="tweet"
          rows="3"
          class="w-100 br2 ba b--black-10 pa2"
        ></textarea>
        <div class="mt3 tr">
          <button
            :disabled="tweetIsEmpty"
            class="button-reset bg-blue bn white f6 fw5 pv2 ph3 br2 dim"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  `
})

app.mount('#app')
```

### Step 5: Update package.json Scripts

```json
{
  "name": "twitter-vue-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^2.7.16"
  },
  "devDependencies": {
    "@vitejs/plugin-vue2": "^2.3.1",
    "sass": "^1.82.0",
    "vite": "^6.0.1"
  }
}
```

### Step 6: Test & Verify

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Step 7: Clean Up

```bash
# Remove old build artifacts
rm -rf dist/
rm -rf node_modules/
rm webpack.config.js
rm .babelrc

# Reinstall with new dependencies
npm install
```

## Migration Checklist

Use this checklist for each project migration:

### Pre-Migration
- [ ] Review current project structure
- [ ] Document custom webpack plugins/loaders
- [ ] Note any special build requirements
- [ ] Check for environment variables
- [ ] Identify third-party integrations

### Migration Steps
- [ ] Install Vite and @vitejs/plugin-vue2
- [ ] Create vite.config.js
- [ ] Update index.html (add `<script type="module">`)
- [ ] Update main.js imports
- [ ] Convert .babelrc settings to vite.config.js if needed
- [ ] Update package.json scripts
- [ ] Update CSS/SCSS imports
- [ ] Update public assets paths

### Post-Migration
- [ ] Test development server (`npm run dev`)
- [ ] Test production build (`npm run build`)
- [ ] Verify all features work
- [ ] Run tests (if applicable)
- [ ] Update documentation
- [ ] Remove old webpack/babel files
- [ ] Commit changes

### Testing Verification
- [ ] All pages load correctly
- [ ] Hot reload works instantly
- [ ] Production build completes
- [ ] Build size is reasonable
- [ ] No console errors
- [ ] All routes work (if using router)

## Common Migration Issues & Solutions

### Issue 1: Global Vue Access

**Problem:** Code expects `Vue` to be global
```javascript
// Old code
Vue.component('my-component', {...})
```

**Solution:** Import and use `defineComponent`
```javascript
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyComponent',
  // ...
})
```

### Issue 2: require() Statements

**Problem:** Vite uses ESM, not CommonJS
```javascript
// Old code
const MyComponent = require('./MyComponent.vue')
```

**Solution:** Use ES6 imports
```javascript
import MyComponent from './MyComponent.vue'
```

### Issue 3: process.env Variables

**Problem:** Webpack's `process.env` not available
```javascript
// Old code
if (process.env.NODE_ENV === 'production') {
```

**Solution:** Use Vite's import.meta.env
```javascript
if (import.meta.env.PROD) {
```

### Issue 4: Absolute Imports

**Problem:** Webpack aliases don't work
```javascript
// Old code
import Foo from '@/components/Foo'
```

**Solution:** Configure in vite.config.js
```javascript
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

### Issue 5: Dynamic Imports

**Problem:** Webpack's dynamic import syntax
```javascript
// Old code
const view = () => import(`@/views/${name}.vue`)
```

**Solution:** Use Vite's glob imports
```javascript
const modules = import.meta.glob('@/views/*.vue')
const view = modules[`/src/views/${name}.vue`]
```

## Performance Comparison

### Before: Webpack + Babel 6

```bash
# Cold start
$ npm run dev
webpack building... ⏰ 15-30 seconds

# Hot reload
File change detected... ⏰ 2-5 seconds

# Production build
$ npm run build
Building for production... ⏰ 30-60 seconds
```

### After: Vite

```bash
# Cold start
$ npm run dev
Server ready ⚡ 200-500ms

# Hot reload
File change detected... ⚡ <100ms

# Production build
$ npm run build
Building for production... ⚡ 5-15 seconds
```

**Result:** 30-100x faster development experience!

## Vite Configuration Examples

### Basic Vue 2.7 Project

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  plugins: [vue()]
})
```

### With Router & Vuex

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './node_modules')
    }
  }
})
```

### With Environment Variables

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {}
  },
  envPrefix: 'VUE_APP_'
})
```

### With Legacy Browser Support

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
})
```

## Benefits Summary

### Security
- ✅ **Eliminates 200+ Babel 6 vulnerabilities**
- ✅ **Removes deprecated webpack plugins**
- ✅ **Modern, maintained dependencies**
- ✅ **Smaller dependency tree**

### Performance
- ✅ **30-100x faster dev server start**
- ✅ **Instant hot reload (<100ms)**
- ✅ **3-5x faster production builds**
- ✅ **Better caching**

### Developer Experience
- ✅ **Zero config for most projects**
- ✅ **Better error messages**
- ✅ **Built-in TypeScript support**
- ✅ **Modern JavaScript features**

### Maintenance
- ✅ **Actively maintained by Vue team**
- ✅ **Regular security updates**
- ✅ **Future-proof architecture**
- ✅ **Growing ecosystem**

## Migration Timeline Estimate

| Project Type | Time Estimate | Difficulty |
|--------------|---------------|------------|
| Simple (twitter, examples) | 1-2 hours | 🟢 Easy |
| Medium (todo-app, simple apps) | 3-6 hours | 🟡 Moderate |
| Complex (vue-shop, full apps) | 1-2 days | 🔴 Hard |
| **Total for all projects** | **2-3 weeks** | |

## Rollback Plan

If migration encounters issues:

1. **Keep git history** - Create feature branch for Vite migration
2. **Parallel branches** - Keep webpack version working during migration
3. **Incremental migration** - Migrate one project at a time
4. **Documentation** - Document any project-specific issues

## Next Steps After Migration

Once Vite migration is complete:

### Phase 4: Vue 3 Migration
- Vite makes Vue 3 migration easier
- Many breaking changes already handled
- Better composition API support

### Phase 5: Testing Modernization
- Vitest (Vite-native testing)
- Playwright (modern E2E)
- Better integration with Vite

### Phase 6: TypeScript (Optional)
- Vite has built-in TypeScript support
- No additional configuration needed
- Better type checking

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [Vue 2.7 + Vite Guide](https://vitejs.dev/guide/)
- [@vitejs/plugin-vue2](https://github.com/vitejs/vite-plugin-vue2)
- [Vite Migration from Webpack](https://vitejs.dev/guide/migration.html)
- [Awesome Vite](https://github.com/vitejs/awesome-vite)

## Conclusion

Vite migration is the recommended path forward for this repository:

**Pros:**
- Eliminates all Babel 6 vulnerabilities immediately
- Dramatically improves development experience
- Official Vue recommendation
- Prepares for Vue 3 migration

**Cons:**
- Requires time investment (2-3 weeks for all projects)
- Some projects may need custom configurations
- Team needs to learn Vite patterns

**Recommendation:** ✅ **Proceed with Vite migration**

Start with simple projects (twitter, examples) to gain confidence, then tackle complex projects (vue-shop, todo-app).

---

**Prepared by:** Claude Code
**Date:** November 13, 2025
**Phase:** 3 - Build Tool Modernization
