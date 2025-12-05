# Vue Basics Repository - Maintenance & Migration Plan

**Last Updated:** 2025-12-05
**Status:** Phase 1 - Archive & Consolidation

## Executive Summary

This repository contains 40+ Vue.js learning projects. This plan outlines:
- Archiving basic learning examples (served their educational purpose)
- Identifying 3-5 showcase projects for active maintenance
- Vue 2 → Vue 3 migration roadmap for showcase projects
- Dependabot PR cleanup strategy

---

## Project Classification Matrix

### 🎯 **SHOWCASE PROJECTS** (Active Maintenance)

| Project | Vue Version | Tech Stack | Portfolio Value | Migration Priority | Complexity |
|---------|-------------|------------|-----------------|-------------------|------------|
| **concrete-calculator-v3** | ✅ Vue 3.5 | Vite, Tailwind, DaisyUI, vee-validate 4, Yup | ⭐⭐⭐⭐⭐ Modern | N/A (Complete) | Low |
| **vue-shop** | Vue 2.7 | MEVN Stack (MongoDB, Express, Vue, Node), vue-router, vee-validate | ⭐⭐⭐⭐⭐ Full-stack | HIGH | High |
| **manager-app** | Vue 2.2 | Firebase, Vuefire, vue-router, Pug, SASS | ⭐⭐⭐⭐ Real-time DB | MEDIUM | Medium |
| **stock-trader** | Vue 2.2 | Vuex, vue-router, vue-resource, Pug, SASS, animations | ⭐⭐⭐⭐ State mgmt | MEDIUM | Medium |
| **unsplash-app** | Vue 2.2 | Axios, Bulma, API integration | ⭐⭐⭐ API demo | LOW | Low |

**Total Showcase Projects:** 5 (1 Vue 3, 4 Vue 2)

---

### 📦 **ARCHIVE** (Educational Value Only - No Maintenance)

#### Basic Concept Examples (Root Level)
- `attribute-and-class-binding/` - v-bind directive
- `components/` - Basic component patterns
- `computed-properties/` - Computed properties
- `event-listeners/` - v-on directive
- `v-for-and-lists/` - List rendering
- `v-model-basic-data-binding/` - Two-way binding
- `component-modal/` - Modal component
- `component-tabs/` - Tabs component
- `component-w-message/` - Component messaging
- `component-in-component/` - Nested components

#### Legacy/Incomplete Projects
- `todo-app/` - Basic todo app (Vue 2.7, Karma tests)
- `twitter/` - Twitter interface demo (Vue 2.7)
- `drag-and-drop/` - Drag & drop directive (standalone)
- `axios/` - Laravel + Vue integration example (Vue 2.7)
- `vue-cli-webpack-project/` - Generic webpack project (Vue 2.7)

#### ready-vuejs/ Simple Demos (Educational)
- **Calculators:** `concrete-calculator` (Vue 2.3), `brick-calculator`, `loan-calculator`, `credit-calculator`, `weight-calc`, `fuel-consumption`, `electric-app`
- **API Demos:** `axios-vuejs`, `yandex-translator`, `soundcloud-player`, `movies-app`, `bitcoin-app`, `currency`
- **Firebase:** `firebase-vuejs` (separate from manager-app)
- **Misc:** `photo-app`, `punch-app`, `notemaster`, `spa-simple`, `app-cleaner`, `starbase-app`, `vk-app`, `validate-form-quasar`, `material-design`, `meetup-app`

**Total Archive Projects:** 35+

---

## Migration Roadmap

### Phase 1: Archive & Cleanup ✅ (Current)
**Timeline:** Week 1 (Dec 5-11, 2025)

- [x] Create MAINTENANCE-PLAN.md
- [ ] Create `archive/` directory structure
- [ ] Move basic concept folders to `archive/basic-concepts/`
- [ ] Move legacy projects to `archive/legacy-projects/`
- [ ] Move ready-vuejs demos to `archive/ready-vuejs-demos/`
- [ ] Bulk close 2022 Dependabot PRs with standardized message
- [ ] Update main README.md with new structure
- [ ] Create archive/README.md explaining archived content

**Dependabot Cleanup:**
```bash
# Close all PRs from 2022 (40+ PRs)
# Message: "Closing in favor of repository reorganization and Vue 3 migration strategy. See MAINTENANCE-PLAN.md"
```

---

### Phase 2: Vue Shop Migration (MEVN Stack) 🔄
**Timeline:** Weeks 2-4 (Dec 12 - Jan 1, 2026)
**Priority:** HIGH (Most complex, best portfolio value)

**Frontend Migration:**
- [ ] Audit dependencies and create compatibility matrix
- [ ] Vue 2.7 → Vue 3.5
- [ ] Webpack → Vite
- [ ] vee-validate 2 → vee-validate 4
- [ ] vue-router 3 → vue-router 4
- [ ] Update component syntax (Options API → Composition API preferred)
- [ ] Replace deprecated features (`$listeners`, `$attrs`, filters)
- [ ] Update tests

**Backend Maintenance:**
- [ ] Update Express dependencies
- [ ] Upgrade Mongoose to latest
- [ ] Review security vulnerabilities
- [ ] Update Node.js version requirement (≥18 → ≥20)

**Build System:**
- [ ] Convert webpack config to Vite
- [ ] Update ESLint to flat config
- [ ] Modernize build scripts
- [ ] Update Bulma/styling framework

---

### Phase 3: Manager App Migration (Firebase) 🔄
**Timeline:** Weeks 5-6 (Jan 2-15, 2026)
**Priority:** MEDIUM

**Changes:**
- [ ] Vue 2.2 → Vue 3.5
- [ ] Firebase 3.x → Firebase 10.x (BREAKING: modular SDK)
- [ ] Vuefire 1.x → VueFire 3.x (complete rewrite)
- [ ] vue-router 2 → vue-router 4
- [ ] Webpack → Vite
- [ ] Update Pug templates
- [ ] Modernize SASS/SCSS

**Challenges:**
- Firebase SDK is completely different (compat vs modular)
- VueFire API changed significantly

---

### Phase 4: Stock Trader Migration (Vuex) 🔄
**Timeline:** Weeks 7-8 (Jan 16-29, 2026)
**Priority:** MEDIUM

**Changes:**
- [ ] Vue 2.2 → Vue 3.5
- [ ] Vuex 2 → Pinia (recommended) or Vuex 4
- [ ] vue-router 2 → vue-router 4
- [ ] vue-resource → axios (vue-resource is abandoned)
- [ ] Webpack → Vite
- [ ] Update Pug templates
- [ ] Modernize animations (animate.css)

---

### Phase 5: Unsplash App Migration (Simple API) 🔄
**Timeline:** Week 9 (Jan 30 - Feb 5, 2026)
**Priority:** LOW (Simple, good learning project)

**Changes:**
- [ ] Vue 2.2 → Vue 3.5
- [ ] Update Axios
- [ ] Webpack → Vite
- [ ] Update Bulma
- [ ] Modernize component structure

---

### Phase 6: Final Cleanup & Documentation 📝
**Timeline:** Week 10 (Feb 6-12, 2026)
**Priority:** HIGH

- [ ] Update all README files
- [ ] Create deployment guides
- [ ] Add screenshots/demos to showcase projects
- [ ] Create consolidated package.json scripts
- [ ] Final Dependabot PR review and merge
- [ ] Tag releases for each migrated project

---

## Vue 2 → Vue 3 Migration Checklist Template

### Breaking Changes to Address:
- [ ] **Global API:** `new Vue()` → `createApp()`
- [ ] **Component Registration:** Update global component registration
- [ ] **v-model:** Update custom v-model (breaking change)
- [ ] **Filters:** Replace filters with computed or methods
- [ ] **$listeners:** Merge with `$attrs`
- [ ] **Functional Components:** Update syntax
- [ ] **Router:** vue-router 3 → 4 (new API)
- [ ] **State Management:** Vuex → Pinia (recommended)

### Package Upgrades:
- [ ] Vue 2.x → 3.5+
- [ ] vue-router 3.x → 4.x
- [ ] Vuex 2/3 → Pinia 2.x
- [ ] vee-validate 2/3 → 4.x
- [ ] Build tool: Webpack → Vite
- [ ] ESLint: Update plugins for Vue 3

### Code Modernization:
- [ ] Options API → Composition API (where beneficial)
- [ ] Update TypeScript types (if applicable)
- [ ] Use `<script setup>` syntax
- [ ] Replace event bus with provide/inject or Pinia
- [ ] Update lifecycle hooks (`beforeDestroy` → `beforeUnmount`)

---

## Dependency Management Strategy

### Showcase Projects
- **Review Dependabot PRs:** Merge security fixes only
- **Manual Updates:** Major version upgrades as part of Vue 3 migration
- **Lock Files:** Use package-lock.json, commit to repo

### Archived Projects
- **No Maintenance:** Keep as-is in git history
- **Dependabot:** Disable for archived paths
- **Documentation:** Add "archived" badges to READMEs

---

## Directory Structure (After Phase 1)

```
vue-basics/
├── README.md                          # Updated overview
├── MAINTENANCE-PLAN.md                # This file
├── CLAUDE.md                          # Claude Code instructions
│
├── showcase/                          # 🎯 Active Projects
│   ├── concrete-calculator-v3/        # ✅ Vue 3 (complete)
│   ├── vue-shop/                      # Vue 2 → Vue 3 (Phase 2)
│   ├── manager-app/                   # Vue 2 → Vue 3 (Phase 3)
│   ├── stock-trader/                  # Vue 2 → Vue 3 (Phase 4)
│   └── unsplash-app/                  # Vue 2 → Vue 3 (Phase 5)
│
└── archive/                           # 📦 Educational Reference
    ├── README.md                      # Archive explanation
    ├── basic-concepts/                # Fundamental Vue 2 concepts
    │   ├── attribute-and-class-binding/
    │   ├── components/
    │   ├── computed-properties/
    │   ├── event-listeners/
    │   ├── v-for-and-lists/
    │   ├── v-model-basic-data-binding/
    │   ├── component-modal/
    │   ├── component-tabs/
    │   ├── component-w-message/
    │   └── component-in-component/
    │
    ├── legacy-projects/               # Older learning projects
    │   ├── todo-app/
    │   ├── twitter/
    │   ├── drag-and-drop/
    │   ├── axios/
    │   └── vue-cli-webpack-project/
    │
    └── ready-vuejs-demos/             # Simple demo apps
        ├── calculators/
        │   ├── concrete-calculator/
        │   ├── brick-calculator/
        │   ├── loan-calculator/
        │   ├── credit-calculator/
        │   ├── weight-calc/
        │   ├── fuel-consumption/
        │   └── electric-app/
        │
        ├── api-integrations/
        │   ├── axios-vuejs/
        │   ├── yandex-translator/
        │   ├── soundcloud-player/
        │   ├── movies-app/
        │   ├── bitcoin-app/
        │   ├── currency/
        │   └── firebase-vuejs/
        │
        └── misc/
            ├── photo-app/
            ├── punch-app/
            ├── notemaster/
            ├── spa-simple/
            ├── app-cleaner/
            ├── starbase-app/
            ├── vk-app/
            ├── validate-form-quasar/
            ├── material-design/
            └── meetup-app/
```

---

## Technology Stack Summary

### Showcase Projects (Target)

| Technology | Current (Vue 2) | Target (Vue 3) |
|------------|-----------------|----------------|
| **Vue** | 2.2-2.7 | 3.5+ |
| **Build Tool** | Webpack 2-5 | Vite 7+ |
| **Router** | vue-router 2-3 | vue-router 4 |
| **State** | Vuex 2 | Pinia 2 |
| **Validation** | vee-validate 2 | vee-validate 4 |
| **HTTP** | axios 0.16, vue-resource | axios 1.x |
| **Firebase** | Firebase 3.x | Firebase 10.x |
| **Node** | ≥4.0 | ≥20.0 |
| **Styling** | Bulma, custom SASS | Tailwind (preferred) or Bulma |
| **Templates** | Pug (some) | Standard or Pug |

---

## Success Metrics

### Phase 1 (Archive & Cleanup)
- ✅ All basic concepts moved to archive/
- ✅ Archive README created
- ✅ 40+ old Dependabot PRs closed
- ✅ Main README updated

### Phase 2-5 (Migrations)
- ✅ Each project builds successfully
- ✅ All features working in Vue 3
- ✅ Modern dependencies (no vulnerabilities)
- ✅ Updated documentation
- ✅ Working dev/build scripts

### Phase 6 (Completion)
- ✅ 5 showcase projects on Vue 3
- ✅ Clean Dependabot PR queue
- ✅ Professional portfolio-ready projects
- ✅ Clear documentation

---

## Risk Assessment

### High Risk
- **vue-shop backend:** MongoDB version compatibility, Mongoose breaking changes
- **manager-app:** Firebase modular SDK is completely different
- **stock-trader:** vue-resource is abandoned, needs replacement

### Medium Risk
- **Build systems:** Webpack → Vite requires config rewrite
- **Pug templates:** May have edge cases in Vue 3
- **Legacy dependencies:** Some may not have Vue 3 compatible versions

### Low Risk
- **concrete-calculator-v3:** Already complete ✅
- **unsplash-app:** Simple structure, straightforward migration

---

## Questions & Decisions Needed

1. **Move ready-vuejs to archive or keep at root?**
   Recommendation: Move to `archive/ready-vuejs-demos/` with subcategories

2. **Pinia vs Vuex 4 for stock-trader?**
   Recommendation: Pinia (official recommendation, better DX)

3. **Keep original concrete-calculator (Vue 2) in archive?**
   Recommendation: Yes, shows migration journey

4. **Styling framework for vue-shop?**
   Recommendation: Keep Bulma (less work) or migrate to Tailwind (modern)

5. **Deploy showcase projects?**
   Recommendation: Yes, Netlify/Vercel for frontend, Railway/Render for backend

---

## Notes

- All archived projects remain in git history
- No code deletion, just reorganization
- Can reference old code anytime via git
- Focus maintenance energy on 5 quality projects vs 40 mediocre ones
- Each migration is a learning opportunity to document

---

## Commands Reference

### Phase 1 Execution
```bash
# Create structure
mkdir -p archive/{basic-concepts,legacy-projects,ready-vuejs-demos/{calculators,api-integrations,misc}}
mkdir -p showcase

# Move showcase projects
git mv ready-vuejs/concrete-calculator-v3 showcase/
git mv vue-shop showcase/
git mv ready-vuejs/manager-app showcase/
git mv ready-vuejs/stock-trader showcase/
git mv ready-vuejs/unsplash-app showcase/

# Move basic concepts
git mv attribute-and-class-binding archive/basic-concepts/
git mv components archive/basic-concepts/
git mv computed-properties archive/basic-concepts/
git mv event-listeners archive/basic-concepts/
git mv v-for-and-lists archive/basic-concepts/
git mv v-model-basic-data-binding archive/basic-concepts/
git mv component-* archive/basic-concepts/

# Move legacy projects
git mv todo-app archive/legacy-projects/
git mv twitter archive/legacy-projects/
git mv drag-and-drop archive/legacy-projects/
git mv axios archive/legacy-projects/
git mv vue-cli-webpack-project archive/legacy-projects/

# Move ready-vuejs demos
git mv ready-vuejs/concrete-calculator archive/ready-vuejs-demos/calculators/
git mv ready-vuejs/brick-calculator archive/ready-vuejs-demos/calculators/
git mv ready-vuejs/loan-calculator archive/ready-vuejs-demos/calculators/
git mv ready-vuejs/credit-calculator archive/ready-vuejs-demos/calculators/
git mv ready-vuejs/weight-calc archive/ready-vuejs-demos/calculators/
git mv ready-vuejs/fuel-consumption archive/ready-vuejs-demos/calculators/
git mv ready-vuejs/electric-app archive/ready-vuejs-demos/calculators/

git mv ready-vuejs/axios-vuejs archive/ready-vuejs-demos/api-integrations/
git mv ready-vuejs/yandex-translator archive/ready-vuejs-demos/api-integrations/
git mv ready-vuejs/soundcloud-player archive/ready-vuejs-demos/api-integrations/
git mv ready-vuejs/movies-app archive/ready-vuejs-demos/api-integrations/
git mv ready-vuejs/bitcoin-app archive/ready-vuejs-demos/api-integrations/
git mv ready-vuejs/currency archive/ready-vuejs-demos/api-integrations/
git mv ready-vuejs/firebase-vuejs archive/ready-vuejs-demos/api-integrations/

git mv ready-vuejs/* archive/ready-vuejs-demos/misc/
rmdir ready-vuejs

# Close old Dependabot PRs
gh pr list --author app/dependabot --state open --json number,createdAt --jq '.[] | select(.createdAt < "2023-01-01") | .number' | xargs -I {} gh pr close {} --comment "Closing in favor of repository reorganization and Vue 3 migration strategy. See MAINTENANCE-PLAN.md"
```

### Migration Commands (Per Project)
```bash
# Vue 3 migration (example for vue-shop)
cd showcase/vue-shop/frontend
npm install vue@latest vue-router@latest
npm install -D @vitejs/plugin-vue vite
npm uninstall webpack webpack-cli webpack-dev-server

# Update vee-validate
npm install vee-validate@latest yup
```

---

**Next Steps:** Await approval for Phase 1 execution
