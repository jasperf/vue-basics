# Vue Basics - Learning Repository

A curated collection of Vue.js projects built while learning Vue through Laracasts and other online workshops.

**Last Updated:** 2025-12-05
**Repository Status:** Active - Vue 3 Migration in Progress (Phase 2 Complete)

[![Vue 3](https://img.shields.io/badge/Vue-3.5-42b883?logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite)](https://vite.dev/)
[![Migration](https://img.shields.io/badge/Migration-Phase%202%20Complete-success)](#-vue-3-migration-status)

---

## 🎯 Repository Structure

This repository contains Vue.js projects from **basics to production-ready applications**, organized by complexity and migration status:

```
vue-basics/
├── basics/            # ✅ Vue 3 basic concepts (CDN, no build tools)
├── showcase/          # 🔄 5 actively maintained portfolio projects
├── archive/           # 📦 35+ educational reference projects (Vue 2)
├── docs/              # 📚 Migration guides and documentation
├── scripts/           # 🛠️ Utility scripts
├── CHANGELOG.md       # 📝 Detailed change history
└── CLAUDE.md          # 🤖 Development guidelines
```

---

## ✅ Vue 3 Basics (Complete!)

**10 fundamental Vue 3 examples** + **4 Composition API demos** - no build tools required!

### Core Concepts
- [attribute-and-class-binding](basics/attribute-and-class-binding/) - v-bind directive
- [components](basics/components/) - Component registration & slots
- [computed-properties](basics/computed-properties/) - Computed values
- [event-listeners](basics/event-listeners/) - Event handling
- [v-for-and-lists](basics/v-for-and-lists/) - List rendering
- [v-model-basic-data-binding](basics/v-model-basic-data-binding/) - Two-way binding

### Component Patterns
- [component-modal](basics/component-modal/) - Modal with events
- [component-tabs](basics/component-tabs/) - Tab system with provide/inject
- [component-in-component](basics/component-in-component/) - Nested components
- [component-w-message](basics/component-w-message/) - Props & methods

### Modern Vue 3 (Composition API)
- [01-reactive-data.html](basics/composition-api-examples/01-reactive-data.html) - ref() and reactive()
- [02-computed-and-watch.html](basics/composition-api-examples/02-computed-and-watch.html) - Computed & watchers
- [03-lifecycle-hooks.html](basics/composition-api-examples/03-lifecycle-hooks.html) - Lifecycle hooks
- [04-composables.html](basics/composition-api-examples/04-composables.html) - Reusable logic (composables)

**Quick Start:** Navigate to `basics/` and open any HTML file in your browser!

📖 **[Read the full basics guide](basics/README.md)**

## 🌟 Showcase Projects

5 production-ready applications demonstrating real-world Vue.js patterns.

| Project | Status | Stack | Description |
|---------|--------|-------|-------------|
| **[Concrete Calculator v3](showcase/concrete-calculator-v3/)** | ✅ Vue 3 | Vue 3.5, Vite, Tailwind, DaisyUI | Modern calculator with form validation |
| **[Unsplash App](showcase/unsplash-app/)** | ⏳ Vue 2.2.6 | Axios, Bulma, Unsplash API | Image search gallery - **Next to migrate** |
| **[Stock Trader](showcase/stock-trader/)** | ⏳ Vue 2.2.6 | Vuex, vue-router, Pug | Stock trading simulator |
| **[Manager App](showcase/manager-app/)** | ⏳ Vue 2.2.6 | Firebase, Vuefire, vue-router | Real-time database manager |
| **[Vue Shop](showcase/vue-shop/)** | ⏳ Vue 2.7.16 | MEVN Stack | Full-stack e-commerce app |

### Quick Start

**Vue 3 Projects:**
```bash
cd showcase/concrete-calculator-v3
npm install && npm run dev
```

**Vue 2 Projects:**
```bash
cd showcase/unsplash-app  # or any Vue 2 project
npm install && npm run dev
```

---

## 📦 Archived Projects

**35+ educational projects** preserved for reference but no longer actively maintained.

- **[Legacy Projects](archive/legacy-projects/)** - 5 older Vue CLI projects (todo-app, twitter, drag-and-drop, axios, vue-cli-webpack-project)
- **[Ready-VueJS Demos](archive/ready-vuejs-demos/)** - 20+ workshop demos
  - Calculators (7 projects)
  - API Integrations (9 projects)
  - Miscellaneous (10 projects)

⚠️ **Note:** Archived projects use outdated dependencies (Vue 2.2-2.7, Webpack 2-5) and are not maintained.

**[See Archive README](archive/README.md)** for full details.

---

## 🚀 Vue 3 Migration Status

Currently migrating all projects from Vue 2 to Vue 3. See [docs/VUE3_MIGRATION_STRATEGY.md](docs/VUE3_MIGRATION_STRATEGY.md) for the complete 9-phase plan.

### Migration Progress

| Phase | Target | Status | Completion |
|-------|--------|--------|------------|
| **Phase 1** | Foundation & Tooling | ✅ Complete | 100% |
| **Phase 2** | Basic Concepts (10 projects) | ✅ Complete | 100% |
| **Phase 3** | Unsplash App | ⏳ Next | 0% |
| **Phase 4** | Stock Trader (Pinia) | ⏳ Planned | 0% |
| **Phase 5** | Manager App (Firebase) | ⏳ Planned | 0% |
| **Phase 6** | Vue Shop (Full-Stack) | ⏳ Planned | 0% |
| **Phase 7** | Testing & Legacy | ⏳ Planned | 0% |
| **Phase 8** | Laravel Integration | ⏳ Planned | 0% |
| **Phase 9** | Documentation | ⏳ Planned | 0% |

**Overall Progress:** 2/9 phases complete (22%)

### What's Changed in Phase 2

✅ **Completed:**
- Moved all basic examples from `archive/basic-concepts/` to `basics/`
- Verified all 10 basic examples already using Vue 3
- Created 4 new Composition API examples (ref, reactive, computed, watch, composables)
- Comprehensive documentation created:
  - [VUE3_MIGRATION_STRATEGY.md](docs/VUE3_MIGRATION_STRATEGY.md)
  - [VUE3_MIGRATION_CHECKLIST.md](docs/VUE3_MIGRATION_CHECKLIST.md)
  - [basics/README.md](basics/README.md)
  - [basics/composition-api-examples/README.md](basics/composition-api-examples/README.md)

**Next Up:** Phase 3 - Migrate `showcase/unsplash-app` (estimated 3-4 days)

---

## 🛠️ Technology Stack

### Showcase Projects (Target Stack)

| Technology | Current | Target |
|------------|---------|--------|
| **Vue** | 2.2-2.7 | **3.5+** |
| **Build** | Webpack | **Vite 7** |
| **Router** | vue-router 2-3 | **vue-router 4** |
| **State** | Vuex 2 | **Pinia 2** |
| **Validation** | vee-validate 2 | **vee-validate 4** |
| **Node** | ≥4.0 | **≥20.0** |

---

## 📚 Learning Journey

This repository documents my Vue.js learning path:

1. **Basic Concepts** (CDN Vue) - Understanding fundamentals
2. **Component Patterns** - Reusable components, props, events
3. **Vue Router** - Single-page applications
4. **State Management** - Vuex for complex state
5. **API Integration** - Axios, Firebase, external APIs
6. **Full-Stack** - MEVN stack with MongoDB/Express
7. **Modern Tooling** - Vite, Composition API, TypeScript

### Key Concepts Covered

- ✅ v-bind, v-model, v-for, v-if directives
- ✅ Component communication (props, events, provide/inject)
- ✅ Computed properties and watchers
- ✅ Lifecycle hooks
- ✅ Vue Router (routing, navigation guards)
- ✅ Vuex/Pinia (state management)
- ✅ API integration (REST, Firebase)
- ✅ Form validation (vee-validate)
- ✅ Build tools (Webpack → Vite)
- 🔄 Composition API (in progress)
- 🔄 TypeScript integration (planned)

---

## 🚀 Quick Start

### Prerequisites

- Node.js ≥18.0 (≥20.0 recommended)
- npm ≥9.0

### For Showcase Projects

```bash
# Clone the repository
git clone https://github.com/jasperf/vue-basics.git
cd vue-basics

# Navigate to a showcase project
cd showcase/concrete-calculator-v3

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### For Archived Projects

See [archive/README.md](archive/README.md) for project-specific instructions.

⚠️ **Warning:** Archived projects have outdated dependencies. Use for reference only.

---

## 📖 Documentation

- **[MAINTENANCE-PLAN.md](MAINTENANCE-PLAN.md)** - Migration roadmap and project classifications
- **[CLAUDE.md](CLAUDE.md)** - Development guidelines and repository structure
- **[archive/README.md](archive/README.md)** - Archived projects documentation
- **[CHANGELOG.md](CHANGELOG.md)** - Version history

---

## 🎓 Learning Resources

### Official Documentation
- [Vue 3 Docs](https://vuejs.org/)
- [Vue Router Docs](https://router.vuejs.org/)
- [Pinia Docs](https://pinia.vuejs.org/)
- [Vite Docs](https://vitejs.dev/)

### Courses & Tutorials
- [Laracasts - Learn Vue](https://laracasts.com/series/learn-vue-2-step-by-step) (Original learning source)
- [Vue Mastery](https://www.vuemastery.com/)
- [Vue School](https://vueschool.io/)

### Migration Guides
- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
- [Vite Migration from Webpack](https://vitejs.dev/guide/migration.html)
- [Pinia vs Vuex](https://pinia.vuejs.org/introduction.html#comparison-with-vuex)

---

## 🤝 Contributing

This is a personal learning repository, but suggestions are welcome!

- Found a bug in a showcase project? Open an issue
- Have a Vue 3 migration tip? Share it
- Archived projects are reference-only (no PRs accepted)

---

## 📊 Repository Stats

- **Total Projects:** 40+
- **Showcase Projects:** 5 (1 Vue 3, 4 Vue 2)
- **Archived Projects:** 35+
- **Vue 3 Migrations:** 1 complete, 4 planned
- **Technologies:** Vue, Vite, Webpack, Firebase, MongoDB, Express, Tailwind, Bulma

---

## 📝 License

This is a personal learning repository. Individual projects may have their own licenses from original tutorial sources.

---

## 🙏 Acknowledgments

- **Jeffrey Way** ([Laracasts](https://laracasts.com/)) - Primary Vue.js learning resource
- **Vue.js Team** - Amazing framework and documentation
- **Open Source Community** - All the libraries and tools

---

**For detailed project information, see [MAINTENANCE-PLAN.md](MAINTENANCE-PLAN.md)**
