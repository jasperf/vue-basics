# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a learning repository containing multiple Vue.js projects, ranging from basic Vue concepts to full-stack applications. The repository serves as a collection of educational examples and demonstrations built while learning Vue.js through Laracasts and other online workshops.

**Current Migration Status:** Actively migrating from Vue 2 to Vue 3 (Phase 2 Complete - Basic Examples)

## Repository Structure

The repository is organized into four main categories:

### 1. Vue 3 Basics (`basics/`) ✅ COMPLETE
Fundamental Vue 3 examples using CDN (no build tools required):

**Core Concepts:**
- `attribute-and-class-binding/` - v-bind directive examples
- `components/` - Basic component patterns
- `computed-properties/` - Computed properties and caching
- `event-listeners/` - v-on directive and event handling
- `v-for-and-lists/` - List rendering
- `v-model-basic-data-binding/` - Two-way data binding

**Component Patterns:**
- `component-modal/` - Modal with event emitting
- `component-tabs/` - Tab system with provide/inject
- `component-in-component/` - Nested components
- `component-w-message/` - Props and methods

**Modern Vue 3:**
- `composition-api-examples/` - Composition API demonstrations
  - ref() and reactive() for state
  - computed() and watch()
  - Lifecycle hooks (onMounted, etc.)
  - Composables (reusable logic)

**All use Vue 3 CDN - open HTML files directly in browser**

### 2. Showcase Projects (`showcase/`)
Production-quality applications demonstrating complete features:

**Vue 3 Projects:** ✅
- `concrete-calculator-v3/` - Vue 3.5.24 + Vite + Tailwind + DaisyUI

**Vue 2 Projects:** ⏳ Migration Pending
- `stock-trader/` - Stock trading app (Vue 2.2.6 + Vuex + vue-router)
- `vue-shop/` - Full MEVN stack e-commerce (Vue 2.7.16 + Express + MongoDB)
- `manager-app/` - Task manager with Firebase (Vue 2.2.6 + Vuefire)
- `unsplash-app/` - Image gallery with Unsplash API (Vue 2.2.6 + axios)

### 3. Archive (`archive/`)
Legacy projects preserved for reference:

**Legacy Projects:**
- `todo-app/` - Full Vue CLI webpack project with unit/e2e tests
- `twitter/` - Twitter-style interface
- `drag-and-drop/` - Drag and drop directive implementation
- `axios/` - Laravel backend with Vue frontend
- `vue-cli-webpack-project/` - Standard Vue CLI structure

**Ready-VueJS Demos:**
- 20+ calculator, API integration, and example apps
- All Vue 2, archived for reference

### 4. Documentation (`docs/`)
Migration guides and planning documents:
- `VUE3_MIGRATION_STRATEGY.md` - Complete 9-phase migration plan
- `VUE3_MIGRATION_CHECKLIST.md` - Quick reference for Vue 2 → 3 changes
- Various phase roadmaps and progress reports

## Common Development Commands

### Vue 3 + Vite Projects (showcase/concrete-calculator-v3)
```bash
npm install        # Install dependencies
npm run dev        # Start Vite dev server (instant HMR)
npm run build      # Production build
npm run preview    # Preview production build
```

### Vue 2 CLI Projects (archive/*, showcase/* Vue 2 projects)
```bash
npm install        # Install dependencies
npm run dev        # Start development server
npm start          # Alias for dev
npm run build      # Production build
npm run lint       # Run ESLint
```

### Testing (where available)
```bash
npm run unit       # Run unit tests (Jest or Karma)
npm run e2e        # Run end-to-end tests (Nightwatch)
npm test           # Run all tests
```

### Laravel Mix Projects (axios)
```bash
npm run dev        # Development build
npm run watch      # Watch for changes
npm run hot        # Hot module replacement
npm run production # Production build
```

### Backend (vue-shop/backend)
```bash
npm start          # Start Express server (node ./bin/www)
```

### PHP Development Server (axios Laravel backend)
```bash
cd axios/public && php -S localhost:8000
```

## Architecture Notes

### Multi-Project Repository Pattern
This is not a monorepo in the traditional sense - each folder is an independent project with its own package.json and dependencies. When working on a specific project, navigate to its directory first.

### Vue CLI Project Structure
Most projects follow the standard Vue CLI structure:
- `src/` - Application source code
  - `main.js` - Vue instance entry point
  - `App.vue` - Root component
  - `components/` - Reusable components
  - `router/` (if vue-router is used) - Route definitions
- `build/` - Webpack build configuration
- `test/` - Unit and e2e tests

### Laravel Integration (axios)
The axios project demonstrates Vue integration with Laravel:
- Laravel routes serve JSON data (`routes/web.php`)
- Vue components make Axios calls to Laravel endpoints
- Blade templates (`resources/views/`) load Vue components
- Laravel Mix compiles Vue components (`resources/assets/js/`)

### MEVN Stack (vue-shop)
Full-stack separation with independent frontend/backend:
- Backend: Express.js REST API with MongoDB via Mongoose
- Frontend: Standard Vue CLI app consuming the API
- Both have separate package.json files and run independently

## Technology Stack

### Vue 3 Projects
- **Vue 3.5.x** - Modern framework with Composition API
- **Vite** - Next-generation build tool (instant HMR)
- **Tailwind CSS** + DaisyUI - Utility-first CSS framework
- **VeeValidate 4** + Yup - Form validation with schema

### Vue 2 Projects (Being Migrated)
- **Vue 2.2-2.7** - Legacy framework versions
- **Webpack 2-5** - Module bundler for Vue CLI projects
- **Babel** - ES6+ transpilation
- **Vuex** - State management (will migrate to Pinia)
- **vue-router 2-3** - Client-side routing

### Common Libraries
- **axios** - HTTP client for API requests
- **Firebase/Vuefire** - Real-time database integration
- **sweetalert** - Alerts/modals
- **Bulma CSS** - CSS framework (some projects)

### Backend Technologies
- **Laravel** + Laravel Mix (axios project)
- **Express.js** + MongoDB + Mongoose (vue-shop backend)

### Testing (Legacy)
- **Jest** - Unit testing
- **Karma + Mocha + Chai** - Unit testing (old)
- **Nightwatch** - E2e testing (old)
- **Playwright** - Modern browser automation (for Vue 3)

## Important Patterns

### Vue 3 Patterns

#### Application Instance
```javascript
// Vue 3
const { createApp } = Vue
const app = createApp({
  data() {
    return { message: 'Hello' }
  }
})
app.mount('#app')
```

#### Component Registration
```javascript
// Vue 3
app.component('my-component', {
  template: '<div>{{ message }}</div>',
  data() {
    return { message: 'Hello' }
  }
})
```

#### Composition API (Modern Pattern)
```javascript
import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const double = computed(() => count.value * 2)

    const increment = () => {
      count.value++
    }

    return { count, double, increment }
  }
}
```

#### Provide/Inject (Replaces $children)
```javascript
// Parent
provide() {
  return {
    someMethod: this.someMethod
  }
}

// Child
inject: ['someMethod']
```

### Vue 2 Patterns (Legacy)

#### Component Registration
```javascript
// Vue 2
Vue.component('example', require('./components/Example.vue'))
```

#### Data Functions
```javascript
data() {
  return {
    items: []
  }
}
```

### Universal Patterns
- **Props Are Immutable** - Use events to communicate changes to parent
- **ES6+ Syntax** - Arrow functions, template literals, destructuring
- **Single File Components** - .vue files with template, script, style

## Development Notes

### Node.js Requirements
- **Vue 3 projects:** Node >= 18.0.0, npm >= 9.0.0
- **Vue 2 projects:** Node >= 4.0.0 (varies by project)
- **Recommended:** Node 18+ LTS for all development

### Browser Compatibility
- **Vue 3:** Modern browsers (ES2015+)
- **Vue 2:** Modern browsers, excludes IE <= 8

### Styling
- **Vue 3 projects:** Tailwind CSS + DaisyUI
- **Vue 2 projects:** Bulma CSS, custom CSS, some use Pug + SASS/SCSS

### Migration Priority
When working on Vue 3 migrations, follow this order:
1. ✅ **basics/** - Complete (10 examples + Composition API examples)
2. ⏳ **showcase/unsplash-app** - Next (simple, no router/state)
3. ⏳ **showcase/stock-trader** - Then (router + Vuex → Pinia)
4. ⏳ **showcase/manager-app** - Then (Firebase integration)
5. ⏳ **showcase/vue-shop** - Complex (full-stack MEVN)

## Vue 3 Migration Resources

### Documentation Created
- **[docs/VUE3_MIGRATION_STRATEGY.md](docs/VUE3_MIGRATION_STRATEGY.md)** - Complete 9-phase strategy
- **[docs/VUE3_MIGRATION_CHECKLIST.md](docs/VUE3_MIGRATION_CHECKLIST.md)** - Breaking changes reference
- **[basics/README.md](basics/README.md)** - Vue 3 basics learning guide
- **[basics/composition-api-examples/README.md](basics/composition-api-examples/README.md)** - Composition API guide

### Key Vue 3 Changes
- `new Vue()` → `createApp()`
- `Vue.component()` → `app.component()`
- `$children` removed → use provide/inject
- `$on/$off/$once` removed → use external event emitter or provide/inject
- `.sync` modifier removed → use `v-model:propName`
- Filters removed → use methods or computed
- Vuex → Pinia (recommended for new projects)
- vue-router 3 → vue-router 4
- Webpack → Vite (recommended)

## GitHub Labels

The repository uses the following labels for organization and automation:

- **dependencies** - Auto-applied to Dependabot PRs that update dependencies
- **showcase** - Issues/PRs related to actively maintained showcase projects
- **vue2-migration-pending** - Projects that need Vue 2 to Vue 3 migration
- **vue3-migration-complete** - Projects successfully migrated to Vue 3

These labels are referenced in `.github/dependabot.yml` and must exist for Dependabot to function properly.

## Quick Start for New Contributors

### Working with Vue 3 Basics
1. Navigate to `basics/` directory
2. Open any HTML file directly in browser (no build step needed)
3. Check browser console for Vue devtools

### Working with Showcase Projects
1. Navigate to project directory (e.g., `cd showcase/concrete-calculator-v3`)
2. Run `npm install`
3. Run `npm run dev`
4. Open browser to localhost URL shown

### Understanding Project Status
- **basics/** - All Vue 3, no build tools
- **showcase/concrete-calculator-v3** - Vue 3 + Vite, production ready
- **showcase/* (others)** - Vue 2, pending migration
- **archive/** - Legacy projects, preserved for reference
