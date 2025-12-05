# Vue Basics - Learning Repository

A curated collection of Vue.js projects built while learning Vue through Laracasts and other online workshops.

**Last Updated:** 2025-12-05
**Repository Status:** Active - Focused on 5 showcase projects

---

## 🎯 Repository Structure

This repository has been reorganized to focus on **quality over quantity**:

```
vue-basics/
├── showcase/           # 5 actively maintained portfolio projects
├── archive/           # 35+ educational reference projects (Vue 2, no maintenance)
├── docs/              # Documentation
├── scripts/           # Utility scripts
├── MAINTENANCE-PLAN.md   # Migration roadmap
└── CLAUDE.md          # Development guidelines
```

---

## 🌟 Showcase Projects (Active)

These 5 projects are actively maintained and represent modern, portfolio-ready Vue.js applications.

### ✅ [Concrete Calculator v3](showcase/concrete-calculator-v3/)
**Status:** Vue 3 Complete ✅
**Stack:** Vue 3.5, Vite 7, Tailwind CSS, DaisyUI, vee-validate 4, Yup
**Description:** Modern foundation concrete volume calculator with form validation

```bash
cd showcase/concrete-calculator-v3
npm install
npm run dev
```

### 🔄 [Vue Shop](showcase/vue-shop/)
**Status:** Vue 2.7 → Vue 3 (Phase 2 - Planned)
**Stack:** MEVN (MongoDB, Express, Vue, Node), vue-router, vee-validate
**Description:** Full-stack e-commerce application with separate frontend/backend

**Frontend:**
```bash
cd showcase/vue-shop/frontend
npm install
npm run dev
```

**Backend:**
```bash
cd showcase/vue-shop/backend
npm install
npm start
```

### 🔄 [Manager App](showcase/manager-app/)
**Status:** Vue 2.2 → Vue 3 (Phase 3 - Planned)
**Stack:** Firebase, Vuefire, vue-router, Pug, SASS
**Description:** Real-time database manager with Firebase integration

```bash
cd showcase/manager-app
npm install
npm run dev
```

### 🔄 [Stock Trader](showcase/stock-trader/)
**Status:** Vue 2.2 → Vue 3 (Phase 4 - Planned)
**Stack:** Vuex (→Pinia), vue-router, Pug, SASS, Animate.css
**Description:** Stock trading simulator with state management

```bash
cd showcase/stock-trader
npm install
npm run dev
```

### 🔄 [Unsplash App](showcase/unsplash-app/)
**Status:** Vue 2.2 → Vue 3 (Phase 5 - Planned)
**Stack:** Axios, Bulma, Unsplash API
**Description:** Image search and gallery using Unsplash API

```bash
cd showcase/unsplash-app
npm install
npm run dev
```

---

## 📦 Archived Projects

**35+ educational projects** preserved for reference but no longer maintained.

- **[Basic Concepts](archive/basic-concepts/)** - 10 standalone Vue concept demos
- **[Legacy Projects](archive/legacy-projects/)** - 5 older Vue CLI projects
- **[Ready-VueJS Demos](archive/ready-vuejs-demos/)** - 20+ workshop demos
  - Calculators (7 projects)
  - API Integrations (9 projects)
  - Miscellaneous (10 projects)

⚠️ **Note:** Archived projects use outdated dependencies (Vue 2.2-2.7, Webpack 2-5) and are not maintained.

**[See Archive README](archive/README.md)** for full details.

---

## 🗺️ Migration Roadmap

See [MAINTENANCE-PLAN.md](MAINTENANCE-PLAN.md) for the complete Vue 2 → Vue 3 migration strategy.

### Phase 1: Archive & Cleanup ✅ (Complete)
- [x] Created `/showcase` and `/archive` directories
- [x] Moved 5 showcase projects
- [x] Moved 35+ archived projects
- [x] Created documentation

### Phase 2-5: Vue 3 Migrations 🔄 (Planned)
- **Phase 2 (Weeks 2-4):** vue-shop MEVN stack
- **Phase 3 (Weeks 5-6):** manager-app Firebase
- **Phase 4 (Weeks 7-8):** stock-trader Vuex→Pinia
- **Phase 5 (Week 9):** unsplash-app API demo

### Phase 6: Final Documentation 📝
- Updated READMEs and deployment guides
- Screenshots and demos
- Tagged releases

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
