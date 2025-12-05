# Archive - Educational Vue.js Projects

**Status:** 📦 Archived - Reference Only
**Last Updated:** 2025-12-05

## About This Archive

This directory contains 35+ Vue.js learning projects that served their educational purpose during my Vue.js learning journey. These projects are **preserved for reference** but are **no longer actively maintained**.

All projects use **Vue 2.x** and older tooling (Webpack 2-5, Babel 6, etc.). For modern, actively maintained projects, see the [`/showcase`](../showcase/) directory.

---

## Directory Structure

```
archive/
├── basic-concepts/           # Fundamental Vue 2 concepts (10 projects)
├── legacy-projects/          # Older learning projects (5 projects)
└── ready-vuejs-demos/        # Collection of demo apps (20+ projects)
    ├── calculators/          # Calculator applications
    ├── api-integrations/     # API integration demos
    └── misc/                 # Miscellaneous demos
```

---

## Basic Concepts

**Purpose:** Demonstrate individual Vue.js features in isolation
**Tech Stack:** Standalone HTML files with CDN Vue.js

| Project | Concept Demonstrated |
|---------|---------------------|
| `attribute-and-class-binding/` | v-bind directive, dynamic attributes |
| `components/` | Basic component registration and props |
| `computed-properties/` | Computed properties and caching |
| `event-listeners/` | v-on directive and event handling |
| `v-for-and-lists/` | List rendering with v-for |
| `v-model-basic-data-binding/` | Two-way data binding |
| `component-modal/` | Modal component pattern |
| `component-tabs/` | Tab component implementation |
| `component-w-message/` | Parent-child component messaging |
| `component-in-component/` | Nested component architecture |

**Usage:** Open `index.html` files directly in browser. No build step required.

---

## Legacy Projects

**Purpose:** Complete Vue CLI 2.x applications with testing
**Tech Stack:** Vue 2.x, Webpack, Babel 6, Karma/Mocha/Nightwatch

| Project | Description | Notable Features |
|---------|-------------|------------------|
| `todo-app/` | Full Vue CLI project with unit/e2e tests | Karma, Mocha, Chai, Nightwatch, SweetAlert |
| `twitter/` | Twitter-style interface | Vue 2.7, component architecture |
| `drag-and-drop/` | Drag & drop directive implementation | Custom directives |
| `axios/` | Laravel backend + Vue frontend | Laravel Mix, PHP integration |
| `vue-cli-webpack-project/` | Generic Vue CLI webpack template | Standard project structure |

**Running Projects:**
```bash
cd archive/legacy-projects/[project-name]
npm install
npm run dev
```

---

## Ready-VueJS Demos

**Source:** Collection built while following online workshops
**Tech Stack:** Vue 2.2-2.7, Webpack 2-3, Babel 6, various libraries

### Calculators (7 projects)

Practical calculator applications with form validation:

- `concrete-calculator/` - Foundation concrete volume calculator (Vue 2.3, Pug)
- `brick-calculator/` - Brick quantity calculator (Vue 2.4)
- `loan-calculator/` - Loan payment calculator (Vue 2.3)
- `credit-calculator/` - Credit calculator with validation (Vue 2.4, Pug)
- `weight-calc/` - Weight conversion calculator (Vue 2.3)
- `fuel-consumption/` - Fuel consumption tracker (Vue 2.3, Pug)
- `electric-app/` - Electrical calculations (Vue 2.3)

### API Integrations (9 projects)

Demonstrations of third-party API integrations:

- `axios-vuejs/` - Basic Axios HTTP client usage (Vue 2.2)
- `yandex-translator/` - Yandex Translate API integration (Vue 2.2)
- `soundcloud-player/` - SoundCloud API music player (Vue 2.3, node-sass)
- `movies-app/` - Movie database API with routing (Vue 2.2, vue-router, Bulma)
- `firebase-vuejs/` - Firebase realtime database (Firebase 9.x, Vuefire)
- `bitcoin-app/` - Cryptocurrency API integration
- `currency/` - Currency conversion API (Vue 2.5)

### Miscellaneous (10 projects)

Various demo applications:

- `photo-app/` - Photo gallery application (Vue 2.3)
- `punch-app/` - Time tracking punch clock (Vue 2.3)
- `notemaster/` - Note-taking application (Vue 2.2)
- `spa-simple/` - Simple SPA routing demo (Vue 2.2, vue-router)
- `app-cleaner/` - Utility application (Vue 2.3, node-sass)
- `starbase-app/` - Space-themed demo (Vue 2.2, Pug)
- `vk-app/` - VK social network integration (Vue 2.2)
- `validate-form-quasar/` - Quasar framework form validation (Vue 2.3, Quasar)
- `material-design/` - Material Design components (Vue 2.2, Vuetify)
- `meetup-app/` - Meetup event management (Vue 2.4, Vuex)

**Running Projects:**
```bash
cd archive/ready-vuejs-demos/[category]/[project-name]
npm install
npm run dev    # or npm start
```

---

## Technology Overview

### Common Dependencies (Archived Versions)
- **Vue:** 2.2.2 - 2.7.16
- **vue-router:** 2.x - 3.x
- **Webpack:** 2.x - 5.x
- **Babel:** 6.x - 7.x
- **Node:** ≥4.0.0 (very old)

### Common Libraries Used
- **Styling:** Bulma, Vuetify, custom SASS/SCSS
- **Templates:** Pug (some projects)
- **HTTP:** Axios 0.16-0.18, vue-resource
- **State:** Vuex 2.x (limited projects)
- **Database:** Firebase 3.x-9.x, Vuefire 1.x
- **Testing:** Jest, Karma, Mocha, Chai, Nightwatch

---

## Security Notice

⚠️ **These projects contain outdated dependencies with known security vulnerabilities.**

- Many dependencies are 5-7 years old
- Multiple CVEs in Webpack, Babel, and other tools
- **Do NOT deploy these projects to production**
- **Do NOT install dependencies on untrusted systems**

These projects are **for reference and learning purposes only**.

---

## Why These Were Archived

1. **Educational Purpose Served** - Basic concepts can be learned from modern docs
2. **Outdated Dependencies** - Upgrading 35+ projects is not cost-effective
3. **Focus on Quality** - Maintain 5 showcase projects instead of 40 outdated ones
4. **Vue 3 Migration** - Effort focused on migrating select projects to Vue 3

---

## Migration Path

If you want to modernize any of these projects:

1. See [MAINTENANCE-PLAN.md](../MAINTENANCE-PLAN.md) for Vue 2→3 migration guide
2. Use [`concrete-calculator-v3`](../showcase/concrete-calculator-v3/) as a reference (Vue 3 migration)
3. Consider using [Vue 3 Migration Build](https://v3-migration.vuejs.org/)
4. Replace Webpack with Vite for faster builds

---

## Resources

### Learning Resources
- [Vue 3 Official Docs](https://vuejs.org/)
- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
- [Laracasts Vue Series](https://laracasts.com/series/learn-vue-2-step-by-step) (original learning source)

### Showcase Projects
- See [`/showcase`](../showcase/) for modern, maintained Vue projects
- [`concrete-calculator-v3`](../showcase/concrete-calculator-v3/) - Vue 3 reference implementation

---

## Preservation Policy

- ✅ **Kept in Git History** - All code preserved
- ✅ **No Deletions** - Projects remain accessible
- ❌ **No Dependency Updates** - Archived as-is
- ❌ **No Security Patches** - Reference only
- ❌ **No Bug Fixes** - Not actively maintained

---

**For actively maintained projects, visit [`/showcase`](../showcase/)**
