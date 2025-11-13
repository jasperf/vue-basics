# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a learning repository containing multiple Vue.js projects, ranging from basic Vue concepts to full-stack applications. The repository serves as a collection of educational examples and demonstrations built while learning Vue.js through Laracasts and other online workshops.

## Repository Structure

The repository is organized into three main categories:

### 1. Basic Concept Examples (Root Level)
Individual folders demonstrating specific Vue.js features:
- `attribute-and-class-binding/` - v-bind directive examples
- `components/` - Basic component patterns
- `computed-properties/` - Computed properties and caching
- `event-listeners/` - v-on directive and event handling
- `v-for-and-lists/` - List rendering
- `v-model-basic-data-binding/` - Two-way data binding
- `component-*` folders - Various component patterns (modal, tabs, nested components)

### 2. Standalone Projects
Self-contained applications:
- `todo-app/` - Full Vue CLI webpack project with unit/e2e tests
- `twitter/` - Twitter-style interface
- `drag-and-drop/` - Drag and drop directive implementation
- `axios/` - Laravel backend with Vue frontend demonstrating HTTP requests

### 3. Ready-VueJS Apps (`ready-vuejs/`)
Collection of complete Vue.js applications including calculators, Firebase integration, API integrations, and more:
- Calculator apps: `concrete-calculator`, `brick-calculator`, `loan-calculator`, `credit-calculator`, `weight-calc`, `fuel-consumption`
- API integrations: `firebase-vuejs`, `axios-vuejs`, `soundcloud-player`, `yandex-translator`, `unsplash-app`
- Full apps: `manager-app`, `meetup-app`, `stock-trader`, `photo-app`, `movies-app`

### 4. Full-Stack Projects
- `vue-shop/` - MEVN stack (MongoDB, Express, Vue, Node) e-commerce application
  - `backend/` - Express.js API with MongoDB/Mongoose
  - `frontend/` - Vue.js with vue-router and vee-validate

## Common Development Commands

### Vue CLI Projects (todo-app, vue-cli-webpack-project, vue-shop/frontend, ready-vuejs/*)
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

### Core Technologies
- **Vue.js 2.x** - All projects use Vue 2
- **Webpack** - Module bundler for Vue CLI projects
- **Babel** - ES6+ transpilation

### Common Libraries
- **axios** - HTTP client for API requests
- **vue-router** - Client-side routing
- **vee-validate** - Form validation (vue-shop)
- **sweetalert** - Alerts/modals (todo-app)
- **Firebase/Vuefire** - Real-time database integration

### Backend Technologies
- **Laravel** + Laravel Mix (axios project)
- **Express.js** + MongoDB + Mongoose (vue-shop backend)

### Testing
- **Jest** - Unit testing (vue-cli-webpack-project)
- **Karma + Mocha + Chai** - Unit testing (todo-app)
- **Nightwatch** - E2e testing
- **Selenium** - Browser automation

## Important Patterns

### Component Registration
Vue CLI projects use component imports in main.js:
```javascript
Vue.component('example', require('./components/Example.vue'));
```

### Data Functions
Components require data to be a function returning an object:
```javascript
data() {
  return {
    items: []
  }
}
```

### Props Are Immutable
Child components receive props but should not mutate them directly. Use events to communicate changes to parent.

### ES6 Arrow Functions
Code extensively uses ES6 syntax including arrow functions, template literals, and destructuring.

## Development Notes

- Node version requirements vary by project (>= 4.0.0 or >= 6.0.0)
- Browser targets: Modern browsers, excludes IE <= 8
- Bulma CSS framework is commonly used for styling
- Some projects use Pug templates and SASS/SCSS
- ready-vuejs projects may have deployment configurations for Heroku
