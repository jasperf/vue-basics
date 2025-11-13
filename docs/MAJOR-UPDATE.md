# Major Update Plan

This document outlines the strategy for modernizing the vue-basics repository, addressing security vulnerabilities, updating dependencies, and migrating to Vue 3.

## Current State Assessment

### Issues Identified
1. **Outdated Dependencies**: Most projects use Vue 2.x with outdated npm packages
2. **Security Vulnerabilities**: Multiple known vulnerabilities in dependencies (webpack, express, etc.)
3. **Legacy Build Tools**: Using Webpack 2/3 and older Vue CLI versions
4. **Vue 2 End of Life**: Vue 2 reached EOL on December 31, 2023
5. **Node Version**: Projects target older Node versions (>= 4.0.0, >= 6.0.0)

### Project Categories

#### Category A: Basic Concept Examples (Low Priority)
Simple HTML/JS examples that can remain as-is or be updated to Vue 3 CDN:
- `attribute-and-class-binding/`
- `components/`
- `computed-properties/`
- `event-listeners/`
- `v-for-and-lists/`
- `v-model-basic-data-binding/`
- `component-*` folders

#### Category B: Vue CLI 2 Projects (High Priority - Security)
Projects with significant dependencies and security concerns:
- `todo-app/`
- `vue-cli-webpack-project/`
- `twitter/`
- `drag-and-drop/`
- `vue-shop/frontend/`
- Most `ready-vuejs/*` projects

#### Category C: Full-Stack Projects (Critical Priority)
Backend security vulnerabilities pose the highest risk:
- `axios/` (Laravel backend)
- `vue-shop/backend/` (Express + MongoDB)
- `ready-vuejs/firebase-vuejs/`

## Update Strategy

### Phase 1: Security Triage (Immediate)

#### 1.1 Document Current Vulnerabilities
For each project with a package.json:
```bash
cd <project-directory>
npm audit
```

#### 1.2 Critical Backend Updates
**Priority: CRITICAL**

Update backend projects first as they have the highest security risk:

**vue-shop/backend/**
- Update Express.js from 4.16.3 → 4.18.x
- Update Mongoose from 5.2.18 → latest 8.x
- Update body-parser, cookie-parser, morgan
- Review and update all middleware

**axios/ (Laravel)**
- Update Laravel Mix to latest 6.x
- Update Express from 4.17.1 → 4.18.x
- Check Laravel framework version and update if needed

#### 1.3 Quick Wins - Dependency Updates
For projects still on Vue 2 (before Vue 3 migration):
- Update webpack to 5.x
- Update all webpack plugins and loaders
- Update babel to babel 7
- Update ESLint to latest
- Update testing libraries (Jest, Karma, Mocha)
- Update axios, vue-router

### Phase 2: Vue 2 → Vue 2.7 Migration (Transition)

**Why Vue 2.7?**
Vue 2.7 is the final minor release of Vue 2 and includes:
- Composition API backport from Vue 3
- Script setup syntax support
- Better TypeScript support
- Security patches until end of 2024 (extended support)

**Projects to update to Vue 2.7:**
- All Vue CLI projects
- All ready-vuejs projects

**Steps per project:**
```bash
npm install vue@^2.7.0 vue-template-compiler@^2.7.0
npm update
npm audit fix
```

### Phase 3: Build Tool Modernization

#### 3.1 Migrate to Vite (Recommended)
**Advantages:**
- Faster development server (HMR in milliseconds)
- Faster builds
- Better developer experience
- Modern ESM-based architecture
- Simpler configuration

**Projects suitable for Vite migration:**
- All Vue CLI webpack projects
- ready-vuejs apps

**Migration steps:**
1. Install Vite and plugins:
   ```bash
   npm install -D vite @vitejs/plugin-vue
   ```
2. Create `vite.config.js`
3. Update `index.html` to load main.js as module
4. Update `package.json` scripts
5. Remove webpack config files

#### 3.2 Alternative: Vue CLI 5 + Webpack 5
For projects that need to stay on webpack:
```bash
npm install -g @vue/cli@latest
vue upgrade
```

### Phase 4: Vue 3 Migration (Major)

#### 4.1 Migration Order (Easiest First)

**Tier 1 - Simple Projects (Start Here):**
- Basic concept examples (convert to CDN or single-file)
- Calculator apps in ready-vuejs
- Simple utility apps

**Tier 2 - Medium Complexity:**
- `drag-and-drop/` (directive needs rewrite for Vue 3)
- `twitter/`
- Apps with moderate component trees

**Tier 3 - Complex Projects:**
- `todo-app/` (full test suite to update)
- `vue-cli-webpack-project/` (with vue-router)
- `vue-shop/` (full-stack with validation)

#### 4.2 Breaking Changes to Address

**Global API Changes:**
```javascript
// Vue 2
import Vue from 'vue'
Vue.component('MyComponent', {...})
new Vue({...})

// Vue 3
import { createApp } from 'vue'
const app = createApp({...})
app.component('MyComponent', {...})
app.mount('#app')
```

**v-model Changes:**
```vue
<!-- Vue 2 -->
<MyComponent v-model="value" />
<!-- Props: value, Event: input -->

<!-- Vue 3 -->
<MyComponent v-model="value" />
<!-- Props: modelValue, Event: update:modelValue -->
```

**Filters Removed:**
- Replace with computed properties or methods
- Use libraries for formatting (date-fns, numeral.js)

**$children Removed:**
- Use refs or provide/inject instead
- Refactor component communication patterns

#### 4.3 Dependencies to Update/Replace

| Vue 2 Package | Vue 3 Replacement | Notes |
|---------------|-------------------|-------|
| `vue-router@3.x` | `vue-router@4.x` | Breaking changes in router API |
| `vuefire@1.x` | `vuefire@3.x` | Complete rewrite for Vue 3 |
| `vee-validate@2.x` | `vee-validate@4.x` | New composition API |
| `vue-loader@13-15` | `vue-loader@17` | For webpack projects |
| `@vue/test-utils@1.x` | `@vue/test-utils@2.x` | New testing API |

#### 4.4 Migration Tools

**Official Migration Build:**
```bash
npm install vue@^3.2.0 @vue/compat@^3.2.0
```
The compatibility build allows gradual migration with Vue 2 behavior + warnings.

**Migration Helper:**
```bash
npx @vue/cli-plugin-vue3-migration
```

**ESLint Plugin:**
```bash
npm install -D eslint-plugin-vue@latest
```
Use Vue 3 rules in `.eslintrc.js`

### Phase 5: Testing Updates

#### 5.1 Unit Tests
**Karma + Mocha → Vitest (Recommended)**
- Faster execution
- Better integration with Vite
- Jest-compatible API

**Alternative: Keep Jest**
- Update to Jest 29
- Update babel-jest
- Update @vue/test-utils to v2

#### 5.2 E2E Tests
**Nightwatch → Playwright or Cypress**
- Nightwatch is outdated
- Playwright: Official recommendation, fast, reliable
- Cypress: Popular, great DX

### Phase 6: TypeScript Migration (Optional)

After Vue 3 migration, consider TypeScript for larger projects:
- Better type safety
- Improved IDE support
- Easier refactoring

**Recommended for:**
- `vue-shop/` (both frontend and backend)
- `todo-app/`
- Any app intended for production use

## Implementation Roadmap

### Sprint 1: Security Patches (Week 1-2)
- [ ] Run `npm audit` on all projects
- [ ] Update all backend dependencies (vue-shop/backend, axios)
- [ ] Update critical frontend vulnerabilities
- [ ] Test all updated projects

### Sprint 2: Vue 2.7 + Modern Build Tools (Week 3-4)
- [ ] Update all projects to Vue 2.7
- [ ] Migrate 2-3 projects to Vite as proof of concept
- [ ] Document Vite migration process
- [ ] Update all testing dependencies

### Sprint 3: Basic Examples to Vue 3 (Week 5-6)
- [ ] Convert all basic concept examples to Vue 3
- [ ] Update to use Composition API where beneficial
- [ ] Create new index.html files with CDN or local builds

### Sprint 4: Simple Apps to Vue 3 (Week 7-8)
- [ ] Migrate calculator apps in ready-vuejs
- [ ] Migrate drag-and-drop with new Vue 3 directive API
- [ ] Update twitter app

### Sprint 5: Complex Apps to Vue 3 (Week 9-12)
- [ ] Migrate todo-app (update all tests)
- [ ] Migrate vue-cli-webpack-project
- [ ] Migrate vue-shop frontend and backend
- [ ] Update all E2E tests

### Sprint 6: Documentation & Cleanup (Week 13-14)
- [ ] Update all README files
- [ ] Update CLAUDE.md with Vue 3 information
- [ ] Create migration lessons learned document
- [ ] Archive or remove unmaintained projects
- [ ] Final security audit

## Project-Specific Notes

### axios/
- Laravel version needs checking (may be Laravel 5.x)
- Consider Laravel 10+ with Vite instead of Mix
- PHP version compatibility

### vue-shop/
- Backend: Express + MongoDB pattern is good, just needs updates
- Frontend: vee-validate 2→4 migration is significant
- Consider Pinia instead of Vuex if state management needed

### ready-vuejs/firebase-vuejs
- Firebase SDK 9.15.0 → latest (modular v9/v10)
- Vuefire 1.x → 3.x is a complete rewrite
- Firebase config and auth patterns changed

### drag-and-drop/
- Custom directive needs complete rewrite for Vue 3
- Consider using existing library like Vue Draggable Plus
- Mobile support still limited by HTML5 drag/drop API

## Resources

### Official Documentation
- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Vue Router 4 Migration](https://router.vuejs.org/guide/migration/)

### Tools
- [@vue/compat](https://v3-migration.vuejs.org/breaking-changes/migration-build.html) - Migration build
- [Vite](https://vitejs.dev/) - Next-generation build tool
- [Vitest](https://vitest.dev/) - Vite-native testing framework
- [Playwright](https://playwright.dev/) - Modern E2E testing

### Community Resources
- [Awesome Vue 3](https://github.com/vue3/awesome-vue-3)
- [Vue 3 Migration Discord](https://discord.com/invite/vue)

## Decision Log

### Build Tool Choice: Vite vs Webpack 5
**Decision:** Migrate to Vite for most projects
**Rationale:**
- Significantly faster development experience
- Simpler configuration
- Future-proof (official Vue team recommendation)
- Webpack 5 only if specific plugins required

### Testing: Vitest vs Jest
**Decision:** Vitest for new Vite projects
**Rationale:**
- Native Vite integration
- Faster execution
- Jest-compatible API (easy migration)
- Better watch mode

### State Management: Vuex vs Pinia
**Decision:** Pinia for any new state management needs
**Rationale:**
- Official recommendation for Vue 3
- Better TypeScript support
- Simpler API
- Vuex 4 works but Pinia is the future

## Risk Assessment

### High Risk
- **Breaking production sites**: If any ready-vuejs apps are deployed
- **Test suite failures**: Extensive test rewrites needed
- **Third-party integrations**: Firebase, APIs may have breaking changes

### Medium Risk
- **Learning curve**: Team needs to learn Vue 3 + Composition API
- **Time investment**: 3+ months for full migration
- **Incomplete migration**: Some projects may be abandoned

### Low Risk
- **Basic examples**: Simple to update, low complexity
- **Documentation**: Can be updated incrementally

## Success Criteria

- [ ] Zero critical security vulnerabilities in `npm audit`
- [ ] All projects on Vue 3.x
- [ ] All projects on Node 18+ LTS
- [ ] All tests passing
- [ ] Updated documentation
- [ ] Improved build times (target: 50% faster with Vite)
- [ ] Modern developer experience (HMR < 100ms)

## Maintenance Plan Post-Migration

1. **Dependency Updates**: Quarterly `npm update` and `npm audit`
2. **Node LTS**: Update to current Node LTS annually
3. **Vue Updates**: Follow Vue minor/patch releases
4. **Security Monitoring**: Set up Dependabot or Renovate Bot
5. **Archive Policy**: Archive projects not updated in 12 months
