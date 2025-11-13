# Phase 4: Vue 3 Migration Roadmap

This document tracks the implementation of Phase 4 from the Major Update Plan - migrating projects from Vue 2 to Vue 3.

## Overview

Phase 4 focuses on migrating all Vue projects to Vue 3, addressing breaking changes, updating dependencies, and modernizing the codebase with Vue 3 features like the Composition API.

## Prerequisites

Before starting Phase 4:
- ✅ Phase 1: Security patches completed
- ✅ Phase 2: Vue 2.7 migration completed
- ✅ Phase 3: Build tool modernization completed (Vite migration)
- All projects should be on Vue 2.7 with modern build tools

## Migration Strategy

### Three-Tier Approach

Projects are categorized by complexity to ensure we tackle easier migrations first and learn lessons that apply to more complex projects.

**Tier 1 - Simple Projects (Weeks 1-2)**
Basic concept examples with minimal dependencies and simple component structures.

**Tier 2 - Medium Complexity (Weeks 3-4)**
Projects with moderate component trees, custom directives, or specific library integrations.

**Tier 3 - Complex Projects (Weeks 5-8)**
Full-featured applications with routing, state management, testing suites, and backend integrations.

## Project Categorization

### Tier 1: Basic Concept Examples

These are simple HTML/JS examples that demonstrate specific Vue features. Migration approach: Convert to Vue 3 CDN or create Vite builds.

- [ ] `attribute-and-class-binding/` - v-bind directive examples
- [ ] `components/` - Basic component patterns
- [ ] `computed-properties/` - Computed properties
- [ ] `event-listeners/` - Event handling with v-on
- [ ] `v-for-and-lists/` - List rendering
- [ ] `v-model-basic-data-binding/` - Two-way data binding
- [ ] `component-communication/` - Parent-child communication
- [ ] `component-modal/` - Modal component pattern
- [ ] `component-nested/` - Nested components
- [ ] `component-tabs/` - Tab interface

**Migration Steps for Tier 1:**
1. Update CDN links to Vue 3
2. Change `new Vue()` to `createApp()`
3. Update v-model prop/event names if custom components
4. Test functionality
5. Update README with Vue 3 information

**Estimated Time:** 1-2 hours per project

### Tier 2: Medium Complexity Projects

Projects with more advanced features but manageable scope.

#### ready-vuejs Calculator Apps
- [ ] `ready-vuejs/concrete-calculator/`
- [ ] `ready-vuejs/brick-calculator/`
- [ ] `ready-vuejs/loan-calculator/`
- [ ] `ready-vuejs/credit-calculator/`
- [ ] `ready-vuejs/weight-calc/`
- [ ] `ready-vuejs/fuel-consumption/`

**Key Changes:**
- Update to Vue 3 + Vite
- Update event emitters from `this.$emit('input')` to `this.$emit('update:modelValue')`
- Update any filter usage to computed properties or methods
- Update testing if present

**Estimated Time:** 3-4 hours per project

#### Standalone Projects
- [ ] `drag-and-drop/` - **CRITICAL**: Custom directive needs complete rewrite for Vue 3
- [ ] `twitter/` - Twitter-style interface with components

**Key Changes for drag-and-drop:**
- Rewrite custom directive using Vue 3 directive hooks: `beforeMount`, `mounted`, `beforeUpdate`, `updated`, `beforeUnmount`, `unmounted`
- Old hooks: `bind` → `beforeMount`, `inserted` → `mounted`, `unbind` → `unmounted`
- Consider using Vue Draggable Plus library as alternative

**Estimated Time:** 6-8 hours for drag-and-drop, 4-5 hours for twitter

### Tier 3: Complex Projects

Full-featured applications requiring careful migration and extensive testing.

#### Vue CLI Projects with Routing
- [ ] `vue-cli-webpack-project/` - Vue Router integration
  - Update vue-router 3.x → 4.x
  - Router API changes: `mode: 'history'` → `history: createWebHistory()`
  - Update router-link and router-view usage
  - Update navigation guards

**Estimated Time:** 8-10 hours

#### Full Testing Suite
- [ ] `todo-app/` - Complete unit and e2e test coverage
  - Update @vue/test-utils 1.x → 2.x
  - Rewrite all unit tests for new testing API
  - Update e2e tests for Vue 3 changes
  - Update Karma/Jest configuration
  - Migrate from Nightwatch to Playwright/Cypress

**Estimated Time:** 12-15 hours

#### API Integration Projects
- [ ] `axios/` - Laravel backend + Vue frontend
  - Update Vue 3 in Laravel Mix
  - Update component registration patterns
  - Test all API endpoints
  - Consider migrating to Laravel 10 with Vite

**Estimated Time:** 8-10 hours

#### ready-vuejs Full Applications
- [ ] `ready-vuejs/axios-vuejs/` - Axios integration patterns
- [ ] `ready-vuejs/yandex-translator/` - API integration
- [ ] `ready-vuejs/unsplash-app/` - Unsplash API
- [ ] `ready-vuejs/soundcloud-player/` - Soundcloud API
- [ ] `ready-vuejs/manager-app/` - Management interface
- [ ] `ready-vuejs/meetup-app/` - Meetup organization
- [ ] `ready-vuejs/stock-trader/` - Stock trading simulation
- [ ] `ready-vuejs/photo-app/` - Photo management
- [ ] `ready-vuejs/movies-app/` - Movie database

**Estimated Time:** 5-8 hours per project

#### Firebase Integration
- [ ] `ready-vuejs/firebase-vuejs/` - **CRITICAL**: Major library updates
  - Firebase SDK 9.15.0 → latest modular SDK
  - Vuefire 1.x → 3.x (complete rewrite)
  - Update auth patterns
  - Update database patterns (rtdb/firestore)
  - Rewrite all Firebase integration code

**Estimated Time:** 15-20 hours

#### MEVN Full-Stack
- [ ] `vue-shop/frontend/` - E-commerce frontend
  - Update vue-router 3.x → 4.x
  - Update vee-validate 2.x → 4.x (major breaking changes)
  - Update all form validation patterns
  - Test cart functionality
  - Test checkout flow
  - Coordinate with backend API

**Estimated Time:** 20-25 hours

## Breaking Changes Checklist

For each project, verify these Vue 3 breaking changes are addressed:

### Global API Changes
- [ ] `new Vue()` → `createApp()`
- [ ] `Vue.component()` → `app.component()`
- [ ] `Vue.directive()` → `app.directive()`
- [ ] `Vue.mixin()` → `app.mixin()`
- [ ] `Vue.use()` → `app.use()`
- [ ] `Vue.prototype` → `app.config.globalProperties`

### Component API Changes
- [ ] `v-model` prop: `value` → `modelValue`
- [ ] `v-model` event: `input` → `update:modelValue`
- [ ] Remove all filters, replace with computed properties or methods
- [ ] Replace `$children` with refs or provide/inject
- [ ] Update `$listeners` usage (merged into `$attrs`)
- [ ] Update `.sync` modifier to `v-model:propName`

### Directive Changes
- [ ] `v-bind` merge behavior changes
- [ ] `v-if` vs `v-for` precedence (v-if now has higher precedence)
- [ ] Custom directive hooks renamed

### Router Changes (if vue-router used)
- [ ] Import: `import VueRouter from 'vue-router'` → `import { createRouter } from 'vue-router'`
- [ ] `mode: 'history'` → `history: createWebHistory()`
- [ ] `mode: 'hash'` → `history: createWebHashHistory()`
- [ ] `base` option → first argument to history function
- [ ] `scrollBehavior` return value changes

### Testing Changes (if tests present)
- [ ] `@vue/test-utils` 1.x → 2.x
- [ ] `mount()` and `shallowMount()` API changes
- [ ] `wrapper.find()` returns `DOMWrapper` not `Wrapper`
- [ ] `wrapper.emitted()` returns object not array
- [ ] Update test configuration

## Dependencies to Update

### Core Vue Packages
```json
{
  "vue": "^3.4.0",
  "vue-router": "^4.2.0",  // if used
  "@vitejs/plugin-vue": "^5.0.0"
}
```

### Testing Packages
```json
{
  "@vue/test-utils": "^2.4.0",
  "vitest": "^1.0.0",  // if migrating from Jest/Karma
  "@playwright/test": "^1.40.0"  // if migrating e2e
}
```

### Form Validation (vue-shop)
```json
{
  "vee-validate": "^4.12.0"
}
```

### Firebase (firebase-vuejs)
```json
{
  "firebase": "^10.7.0",
  "vuefire": "^3.1.0"
}
```

## Migration Workflow per Project

### 1. Preparation
- [ ] Create feature branch: `git checkout -b migrate-<project-name>-vue3`
- [ ] Document current functionality (take screenshots if needed)
- [ ] Run existing tests and document baseline
- [ ] Backup package.json and package-lock.json

### 2. Dependency Updates
- [ ] Update Vue to 3.x
- [ ] Update vue-loader to 17.x (if webpack)
- [ ] Update @vitejs/plugin-vue (if Vite)
- [ ] Update vue-router to 4.x (if used)
- [ ] Update testing libraries
- [ ] Update other Vue ecosystem packages
- [ ] Run `npm install`

### 3. Code Migration
- [ ] Update main.js/app.js entry point
- [ ] Update global component registrations
- [ ] Update all component v-model usage
- [ ] Remove all filters
- [ ] Update custom directives
- [ ] Update router configuration (if present)
- [ ] Update Vuex/state management (if present)

### 4. Testing & Validation
- [ ] Fix build errors
- [ ] Run application and test all features manually
- [ ] Update and run unit tests
- [ ] Update and run e2e tests
- [ ] Check for console warnings
- [ ] Test in multiple browsers

### 5. Documentation
- [ ] Update README.md with Vue 3 information
- [ ] Document any major architectural changes
- [ ] Update code comments if needed
- [ ] Add migration notes to CHANGELOG

### 6. Merge
- [ ] Create pull request
- [ ] Review changes
- [ ] Merge to phase-4-vue3-migration branch
- [ ] Delete feature branch

## Timeline

### Week 1-2: Tier 1 Projects
**Goal:** Complete all basic concept examples

- Days 1-3: Migrate first 5 basic examples
- Days 4-5: Migrate remaining 5 basic examples
- Weekend: Testing and documentation

**Deliverables:**
- All Tier 1 projects on Vue 3
- Updated READMEs
- Lessons learned document

### Week 3-4: Tier 2 Projects (Part 1)
**Goal:** Complete calculator apps and twitter

- Week 3: All 6 calculator apps
- Week 4: twitter and drag-and-drop projects

**Deliverables:**
- Calculator apps on Vue 3
- twitter app on Vue 3
- drag-and-drop rewritten for Vue 3
- Document directive migration patterns

### Week 5-6: Tier 2 Projects (Part 2) & Tier 3 Start
**Goal:** Complete remaining medium projects, start complex ones

- Week 5: ready-vuejs API integration apps (axios, yandex, unsplash, soundcloud)
- Week 6: ready-vuejs management apps (manager, meetup, stock-trader, photo, movies)

**Deliverables:**
- All Tier 2 projects completed
- Document API integration patterns

### Week 7-8: Tier 3 Complex Projects
**Goal:** Migrate projects with routing and full test suites

- Week 7:
  - vue-cli-webpack-project (router migration)
  - axios Laravel project
- Week 8:
  - todo-app (extensive testing migration)

**Deliverables:**
- Router migration patterns documented
- Testing migration patterns documented
- All standalone complex projects completed

### Week 9-10: Firebase Integration
**Goal:** Complete firebase-vuejs migration

- Week 9: Firebase SDK and Vuefire update research
- Week 10: Implementation and testing

**Deliverables:**
- firebase-vuejs on Vue 3 + Vuefire 3
- Firebase integration guide

### Week 11-12: MEVN Stack (vue-shop)
**Goal:** Complete full-stack e-commerce migration

- Week 11:
  - Frontend dependency updates
  - vee-validate 4 migration
  - Router updates
- Week 12:
  - Form validation rewrite
  - Full application testing
  - E2E testing

**Deliverables:**
- vue-shop frontend on Vue 3
- vee-validate migration guide
- Full application tested and working

### Week 13-14: Final Integration & Documentation
**Goal:** Merge everything, final testing, comprehensive documentation

- Week 13:
  - Integration testing across all projects
  - Fix any remaining issues
  - Performance benchmarking
- Week 14:
  - Update main README
  - Update CLAUDE.md
  - Create comprehensive migration guide
  - Final security audit

**Deliverables:**
- All projects on Vue 3
- Complete documentation
- Migration lessons learned
- Phase 4 completion report

## Success Criteria

- [ ] All projects successfully running on Vue 3.4+
- [ ] All existing functionality preserved
- [ ] All tests passing (updated for Vue 3)
- [ ] Zero Vue 2 compatibility warnings
- [ ] Documentation updated repository-wide
- [ ] Build times maintained or improved
- [ ] Bundle sizes maintained or reduced
- [ ] No console errors or warnings

## Risk Mitigation

### High-Risk Areas

1. **firebase-vuejs**: Complete library rewrites
   - Mitigation: Allocate extra time, consider proof-of-concept first

2. **vue-shop validation**: vee-validate 2→4 is major change
   - Mitigation: Study vee-validate 4 docs thoroughly, create test forms first

3. **todo-app testing**: Extensive test rewrites needed
   - Mitigation: Update a few tests first to establish patterns

4. **Custom directives**: Vue 3 directive API is different
   - Mitigation: Start with drag-and-drop early, learn patterns

### Rollback Plan

Each project migrated in feature branch allows easy rollback:
1. Keep Vue 2 version in separate branch
2. Can abandon migration if blocking issues found
3. Can defer complex projects to Phase 4.5 if needed

## Resources & References

### Official Documentation
- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [Vue Router 4 Migration](https://router.vuejs.org/guide/migration/)
- [VueUse](https://vueuse.org/) - Composition utilities

### Library-Specific Guides
- [vee-validate 4 Migration](https://vee-validate.logaretm.com/v4/guide/migration)
- [Vuefire 3 Documentation](https://vuefire.vuejs.org/)
- [Firebase Modular SDK](https://firebase.google.com/docs/web/modular-upgrade)

### Testing
- [@vue/test-utils Migration](https://test-utils.vuejs.org/migration/)
- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)

## Notes & Lessons Learned

_To be filled in during migration_

### Common Patterns

#### Pattern 1: Basic App Migration
_Document successful patterns here as we discover them_

#### Pattern 2: Router Migration
_Document router migration patterns_

#### Pattern 3: Form Validation
_Document vee-validate migration patterns_

### Gotchas & Solutions

_Document problems encountered and solutions_

### Performance Improvements

_Document any performance gains observed_

## Phase Completion Report

_To be completed at end of Phase 4_

### Statistics
- Total projects migrated: __/__
- Total time spent: __ hours
- Average time per Tier 1 project: __
- Average time per Tier 2 project: __
- Average time per Tier 3 project: __

### Outcomes
- Build time improvements: __%
- Bundle size changes: __%
- Test coverage maintained: __

### Recommendations for Future
_Recommendations for maintaining Vue 3 projects_
