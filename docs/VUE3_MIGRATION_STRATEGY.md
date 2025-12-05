# Vue 3 Migration Strategy

**Created:** 2025-12-05
**Status:** Phase 0 - Planning Complete
**Vue 2 EOL:** December 31, 2023

## Executive Summary

This document outlines a phased approach to migrating the vue-basics repository from Vue 2 to Vue 3. The repository contains multiple independent projects ranging from basic HTML examples to full-stack applications. Given Vue 2's end-of-life status, this migration is essential for security, performance, and maintainability.

## Repository Audit

### Current State

**✅ Already Migrated to Vue 3:**
- [showcase/concrete-calculator-v3](../showcase/concrete-calculator-v3) - Vue 3.5.24 + Vite + Composition API

**🔴 Vue 2 Projects Requiring Migration:**

#### Showcase Projects (Priority: High)
1. **[showcase/stock-trader](../showcase/stock-trader)** - Vue 2.2.6 + Webpack 2
   - Stock trading simulator with Vuex state management
   - Uses vue-resource (deprecated), vue-router 2, Vuex 2
   - Pug templates, SASS, animate.css

2. **[showcase/vue-shop](../showcase/vue-shop)** - Vue 2.7.16 (latest Vue 2)
   - Full MEVN stack e-commerce app
   - Frontend: Vue 2.7.16 + vue-router 3 + vee-validate 2
   - Already using newer tooling (Webpack 5)
   - Good migration candidate (already on Vue 2.7)

3. **[showcase/manager-app](../showcase/manager-app)** - Vue 2.2.6 + Firebase
   - Task manager with Firebase/Vuefire integration
   - Uses vue-router 2, Vuefire 1 (needs update to VueFire 3)
   - Pug templates, SASS

4. **[showcase/unsplash-app](../showcase/unsplash-app)** - Vue 2.2.6 + Axios
   - Image gallery with Unsplash API
   - Uses Bulma CSS, axios
   - No router/state management (simpler migration)

#### Legacy Projects (Priority: Medium)
5. **[archive/legacy-projects/todo-app](../archive/legacy-projects/todo-app)** - Vue 2.x + Webpack
   - Full Vue CLI project with unit tests (Karma/Mocha) and e2e tests (Nightwatch)
   - Good candidate for demonstrating testing migration

6. **[archive/legacy-projects/vue-cli-webpack-project](../archive/legacy-projects/vue-cli-webpack-project)** - Vue 2.x + Jest
   - Standard Vue CLI project structure
   - Jest testing setup (easier to migrate than Karma)

7. **[archive/legacy-projects/axios](../archive/legacy-projects/axios)** - Vue 2.x + Laravel
   - Laravel Mix + Vue integration example
   - Demonstrates backend integration patterns

8. **[archive/legacy-projects/twitter](../archive/legacy-projects/twitter)** - Vue 2.x
   - Twitter-style interface

9. **[archive/legacy-projects/drag-and-drop](../archive/legacy-projects/drag-and-drop)** - Vue 2.x
   - Custom directive implementation

#### Basic Concept Examples (Priority: Low)
Located in [archive/basic-concepts](../archive/basic-concepts):
- `attribute-and-class-binding/` - v-bind examples
- `components/` - Basic component patterns
- `computed-properties/` - Computed properties
- `event-listeners/` - v-on directive
- `v-for-and-lists/` - List rendering
- `v-model-basic-data-binding/` - Two-way binding
- `component-*` folders - Modal, tabs, nested components

#### Ready-VueJS Demos (Priority: Low - Archive)
Located in [archive/ready-vuejs-demos](../archive/ready-vuejs-demos):
- Multiple calculator apps (concrete, brick, loan, credit, fuel, weight)
- API integrations (Firebase, axios, SoundCloud, Yandex, currency)
- Misc apps (meetup, photo, movies, notemaster, etc.)

## Migration Phases

### Phase 1: Foundation & Tooling Setup (Week 1-2)

**Goal:** Establish modern Vue 3 development environment and migration patterns

**Tasks:**
1. Document Vue 3 migration checklist and breaking changes
2. Create Vue 3 + Vite project template
3. Set up migration testing checklist
4. Update repository documentation structure

**Deliverables:**
- Migration checklist document
- Vite + Vue 3 project template
- Updated CLAUDE.md with Vue 3 guidance

---

### Phase 2: Basic Concept Examples (Week 2-3)

**Goal:** Migrate simple HTML/CDN examples to Vue 3 CDN

**Priority:** Low complexity, high educational value

**Projects:**
- All folders in `archive/basic-concepts/`

**Migration Approach:**
- Update CDN links from Vue 2 to Vue 3
- Convert to Vue 3 createApp() syntax
- Keep as simple HTML + CDN (no build tools)
- Add notes about Options API vs Composition API

**Breaking Changes to Address:**
- `new Vue()` → `Vue.createApp()`
- Global API changes (Vue.component → app.component)
- v-model changes for custom components
- Event handling ($on/$off removed)

**Estimated Effort:** 1-2 days (10 simple examples)

---

### Phase 3: Simple Showcase Project (Week 3-4)

**Goal:** Complete first full showcase project migration

**Target:** [showcase/unsplash-app](../showcase/unsplash-app)

**Why This One First:**
- No router or state management complexity
- Simple API integration (axios)
- Single component structure
- Good learning baseline

**Migration Steps:**
1. Create new Vite + Vue 3 project structure
2. Migrate single App.vue component
3. Update axios integration
4. Replace Bulma with modern CSS framework (optional: keep Bulma)
5. Add both Options API and Composition API versions
6. Update build configuration
7. Test functionality

**Key Changes:**
- Vite replaces Webpack
- Update axios usage patterns
- Demonstrate Composition API with `<script setup>`

**Estimated Effort:** 3-4 days

---

### Phase 4: Router + State Management Project (Week 4-6)

**Goal:** Migrate project with vue-router and Vuex

**Target:** [showcase/stock-trader](../showcase/stock-trader)

**Complexity Factors:**
- vue-router 2 → vue-router 4 (breaking changes)
- Vuex 2 → Pinia (recommended over Vuex)
- vue-resource → axios (vue-resource deprecated)
- Old Webpack 2 → Vite

**Migration Steps:**
1. Set up Vite + Vue 3 project
2. Migrate router configuration (createRouter syntax)
3. Convert Vuex store to Pinia
4. Replace vue-resource with axios
5. Migrate all components (Options API first)
6. Create Composition API alternative version
7. Update animations (animate.css still compatible)
8. Test all routes and state management

**Key Decisions:**
- **Pinia vs Vuex 4:** Recommend Pinia (official Vue 3 state management)
- **Styling:** Keep Pug + SASS or migrate to modern solution?

**Estimated Effort:** 1 week

---

### Phase 5: Firebase Integration Project (Week 6-7)

**Goal:** Migrate Firebase-dependent project

**Target:** [showcase/manager-app](../showcase/manager-app)

**Complexity Factors:**
- Vuefire 1 → VueFire 3 (complete rewrite)
- Firebase SDK updates
- vue-router migration
- Real-time data binding changes

**Migration Steps:**
1. Update Firebase SDK to v9+ (modular)
2. Migrate Vuefire bindings to VueFire 3
3. Update vue-router to v4
4. Migrate components to Vue 3
5. Update real-time data patterns
6. Test Firebase CRUD operations

**Resources Needed:**
- VueFire 3 documentation
- Firebase v9+ migration guide

**Estimated Effort:** 1 week

---

### Phase 6: Full-Stack MEVN Project (Week 7-9)

**Goal:** Migrate complex full-stack application

**Target:** [showcase/vue-shop](../showcase/vue-shop)

**Why Last:**
- Most complex project
- Already on Vue 2.7 (easiest Vue 2 version to migrate)
- Has separate backend (no backend changes needed)
- Demonstrates complete real-world app

**Frontend Migration:**
1. Upgrade Vue 2.7 → Vue 3.5
2. Update vue-router 3 → vue-router 4
3. Update vee-validate 2 → vee-validate 4
4. Consider Webpack 5 → Vite (or keep Webpack)
5. Migrate all components and views
6. Update form validation patterns
7. Test complete e-commerce flows

**Backend:**
- No changes needed (Express + MongoDB unchanged)
- Ensure API compatibility

**Estimated Effort:** 2 weeks

---

### Phase 7: Testing & Legacy Projects (Week 9-11)

**Goal:** Migrate projects with testing setups

**Targets:**
- [archive/legacy-projects/todo-app](../archive/legacy-projects/todo-app) (Karma + Nightwatch)
- [archive/legacy-projects/vue-cli-webpack-project](../archive/legacy-projects/vue-cli-webpack-project) (Jest)

**Why Important:**
- Demonstrates testing migration patterns
- Karma → Vitest migration example
- Nightwatch → Cypress/Playwright example
- Jest still works but Vitest is recommended

**Migration Approach:**
1. Migrate todo-app with Vitest + Cypress
2. Migrate vue-cli-webpack-project keeping Jest (show compatibility)
3. Document testing migration strategies

**Estimated Effort:** 1 week

---

### Phase 8: Laravel Integration (Week 11-12)

**Goal:** Migrate Laravel + Vue project

**Target:** [archive/legacy-projects/axios](../archive/legacy-projects/axios)

**Complexity:**
- Laravel Mix → Vite Laravel Plugin
- Update Vue integration in Blade templates
- Update webpack config to Vite

**Estimated Effort:** 3-4 days

---

### Phase 9: Remaining Projects & Documentation (Week 12+)

**Lower Priority Projects:**
- [archive/legacy-projects/twitter](../archive/legacy-projects/twitter)
- [archive/legacy-projects/drag-and-drop](../archive/legacy-projects/drag-and-drop)
- [archive/ready-vuejs-demos](../archive/ready-vuejs-demos) (20+ small apps)

**Approach:**
- Migrate based on educational value
- Some may remain as Vue 2 examples (archived)
- Focus on most relevant patterns

**Documentation:**
1. Create migration guides for each pattern
2. Update CLAUDE.md
3. Create comparison docs (Vue 2 vs Vue 3)
4. Document Composition API patterns
5. Add TypeScript examples (optional)

---

## Key Technical Decisions

### 1. Build Tool: Vite vs Webpack
**Recommendation:** Vite for all new migrations
- Faster development
- Better DX (developer experience)
- Official Vue 3 recommendation
- Simpler configuration

**Exception:** vue-shop can stay on Webpack 5 if Vite migration is complex

### 2. State Management: Vuex vs Pinia
**Recommendation:** Pinia
- Official Vue 3 state management library
- Better TypeScript support
- Simpler API
- Smaller bundle size

### 3. API Style: Options API vs Composition API
**Recommendation:** Provide both
- Keep Options API for easier migration
- Add Composition API examples for learning
- Use `<script setup>` syntax for Composition API

### 4. Form Validation: vee-validate 2 → 4
**Changes:**
- Completely different API
- Use with Composition API
- Schema validation with Yup/Zod

### 5. Router: vue-router 2/3 → 4
**Breaking Changes:**
- createRouter instead of new VueRouter
- History modes API changed
- Navigation guards syntax updates

### 6. Testing: Karma/Jest → Vitest
**Recommendation:** Vitest
- Built for Vite
- Jest-compatible API
- Faster execution
- Better Vue 3 support

**Component Testing:** Cypress Component Testing or Vitest + @vue/test-utils

### 7. E2E Testing: Nightwatch → Cypress/Playwright
**Recommendation:** Playwright
- Better TypeScript support
- Faster
- Modern API
- Better debugging

---

## Breaking Changes Checklist

### Global API
- ❌ `new Vue()` → ✅ `createApp()`
- ❌ `Vue.component()` → ✅ `app.component()`
- ❌ `Vue.directive()` → ✅ `app.directive()`
- ❌ `Vue.mixin()` → ✅ `app.mixin()`
- ❌ `Vue.use()` → ✅ `app.use()`

### Instance API
- ❌ `$on`, `$off`, `$once` → ✅ Use event bus library or provide/inject
- ❌ `$destroy` → ✅ `unmount()`
- ❌ `$children` → ✅ Use refs or provide/inject

### Templates
- ❌ `v-model` (custom components) → ✅ New syntax with modelValue/update:modelValue
- ❌ `.sync` modifier → ✅ Removed, use `v-model:propName`
- ❌ `v-for` with `ref` → ✅ Returns array of refs

### Components
- ❌ Functional components `functional: true` → ✅ Plain functions
- ❌ `$listeners` → ✅ Merged into `$attrs`
- ❌ `$scopedSlots` → ✅ Merged into `$slots`

### Lifecycle Hooks
- ❌ `beforeDestroy` → ✅ `beforeUnmount`
- ❌ `destroyed` → ✅ `unmounted`

### Deprecated Libraries
- ❌ vue-resource → ✅ axios
- ❌ Vuefire 1 → ✅ VueFire 3

---

## Risk Assessment

### High Risk
- **Firebase integration:** Vuefire API completely changed
- **Custom directives:** API changes may break functionality
- **Event bus patterns:** $on/$off removed, need alternative
- **Complex Vuex modules:** Pinia migration requires refactoring

### Medium Risk
- **Router guards:** Syntax changes may require updates
- **Form validation:** vee-validate 4 is a complete rewrite
- **Testing suites:** Karma/Nightwatch deprecated

### Low Risk
- **Basic components:** Most Options API code works with minimal changes
- **Computed properties:** No breaking changes
- **Watchers:** Syntax compatible
- **Templates:** Most directives unchanged

---

## Success Metrics

1. **All showcase projects** running on Vue 3 + Vite
2. **Test suites** migrated and passing
3. **Documentation** updated with Vue 3 examples
4. **No console warnings** in production builds
5. **Performance improvements** measured (Vite vs Webpack, Vue 3 vs Vue 2)
6. **Educational value** - both Options and Composition API examples

---

## Migration Resources

### Official Documentation
- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
- [Composition API Guide](https://vuejs.org/guide/extras/composition-api-faq.html)
- [Vue Router 4 Migration](https://router.vuejs.org/guide/migration/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vite Guide](https://vite.dev/guide/)
- [VueFire 3 Guide](https://vuefire.vuejs.org/)

### Tools
- [@vue/compat](https://www.npmjs.com/package/@vue/compat) - Migration build for gradual adoption
- [vue-codemod](https://github.com/vuejs/vue-codemod) - Automated migration scripts
- [eslint-plugin-vue](https://eslint.vuejs.org/) - Vue 3 rules

### Testing
- [Vitest](https://vitest.dev/)
- [@vue/test-utils](https://test-utils.vuejs.org/)
- [Cypress](https://www.cypress.io/)
- [Playwright](https://playwright.dev/)

---

## Next Steps

1. **Immediate:** Begin Phase 1 - Foundation & Tooling
2. **Week 2:** Start Phase 2 - Basic concepts migration
3. **Weekly reviews:** Assess progress and adjust timeline
4. **Document learnings:** Update this strategy as we discover issues

---

## Notes

- This is a learning repository, so migrations should demonstrate best practices
- Keep Vue 2 versions in git history for reference
- Consider creating comparison branches (vue2 vs vue3)
- Some projects may remain archived as Vue 2 examples
- Prioritize actively used showcase projects over archived demos

---

**Last Updated:** 2025-12-05
**Next Review:** After Phase 2 completion
