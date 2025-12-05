# Vue 3 Migration Checklist

This checklist covers the essential changes needed when migrating from Vue 2 to Vue 3.

## Quick Reference: Most Common Changes

### 1. Application Instance
```javascript
// Vue 2
new Vue({
  el: '#app',
  data: { ... },
  methods: { ... }
})

// Vue 3
const { createApp } = Vue
createApp({
  data() {
    return { ... }
  },
  methods: { ... }
}).mount('#app')
```

### 2. CDN Links
```html
<!-- Vue 2 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>

<!-- Vue 3 -->
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
```

### 3. Data Must Be a Function
```javascript
// Vue 2 - root instance (allowed)
new Vue({
  data: { count: 0 }
})

// Vue 3 - always function
createApp({
  data() {
    return { count: 0 }
  }
})
```

### 4. Global API → Application API
```javascript
// Vue 2
Vue.component('my-component', { ... })
Vue.directive('my-directive', { ... })
Vue.mixin({ ... })

// Vue 3
const app = createApp({ ... })
app.component('my-component', { ... })
app.directive('my-directive', { ... })
app.mixin({ ... })
app.mount('#app')
```

### 5. Event Emitters ($on/$off/$once removed)
```javascript
// Vue 2 - Event bus
const eventBus = new Vue()
eventBus.$on('event', handler)
eventBus.$emit('event', data)

// Vue 3 - Use external library or provide/inject
import mitt from 'mitt'
const emitter = mitt()
emitter.on('event', handler)
emitter.emit('event', data)
```

### 6. v-model Changes (Custom Components)
```html
<!-- Vue 2 -->
<my-component v-model="value"></my-component>
<!-- emits 'input' event, receives 'value' prop -->

<!-- Vue 3 -->
<my-component v-model="value"></my-component>
<!-- emits 'update:modelValue' event, receives 'modelValue' prop -->
```

### 7. Multiple v-models
```html
<!-- Vue 2 - using .sync -->
<my-component :title.sync="title" :content.sync="content"></my-component>

<!-- Vue 3 - multiple v-models -->
<my-component v-model:title="title" v-model:content="content"></my-component>
```

### 8. Async Components
```javascript
// Vue 2
const AsyncComponent = () => import('./AsyncComponent.vue')

// Vue 3
import { defineAsyncComponent } from 'vue'
const AsyncComponent = defineAsyncComponent(() =>
  import('./AsyncComponent.vue')
)
```

### 9. Functional Components
```javascript
// Vue 2
export default {
  functional: true,
  render(h, context) {
    return h('div', context.data, context.children)
  }
}

// Vue 3
export default function MyComponent(props, { slots, attrs, emit }) {
  return h('div', attrs, slots.default())
}
```

### 10. Lifecycle Hooks
```javascript
// Vue 2
beforeDestroy() { }
destroyed() { }

// Vue 3
beforeUnmount() { }
unmounted() { }
```

### 11. Filters (Removed)
```html
<!-- Vue 2 -->
{{ message | capitalize }}

<!-- Vue 3 - Use method or computed -->
{{ capitalize(message) }}
```

### 12. $attrs and $listeners
```javascript
// Vue 2
this.$listeners // separate from $attrs

// Vue 3
this.$attrs // includes event listeners
// $listeners removed, merged into $attrs
```

## HTML/CDN Migration Checklist

For simple HTML examples (like our basic-concepts):

- [ ] Update CDN link to Vue 3
- [ ] Change `new Vue()` to `createApp()`
- [ ] Change `el:` to `.mount()`
- [ ] Ensure `data` is a function (not object)
- [ ] Update any component registrations
- [ ] Check for event bus usage ($on/$off)
- [ ] Update lifecycle hooks if used
- [ ] Test functionality

## Build Tool Migration Checklist

For Vue CLI/Webpack projects:

- [ ] Update package.json dependencies
  - [ ] `vue` → `^3.5.0`
  - [ ] `vue-router` → `^4.0.0` (if used)
  - [ ] `vuex` → `^4.0.0` or migrate to Pinia
  - [ ] `@vue/test-utils` → `^2.0.0` (if testing)
  - [ ] Remove `vue-template-compiler`
  - [ ] Add `@vitejs/plugin-vue` (if using Vite)
- [ ] Update main.js/main.ts
- [ ] Update router configuration
- [ ] Update store configuration
- [ ] Update component registrations
- [ ] Update all components
- [ ] Update tests
- [ ] Test build process

## Composition API (Optional)

These are NOT required for migration but can be added:

```javascript
// Options API (still works in Vue 3)
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}

// Composition API (new in Vue 3)
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value++
    }
    return { count, increment }
  }
}

// Composition API with <script setup> (most concise)
<script setup>
import { ref } from 'vue'
const count = ref(0)
const increment = () => {
  count.value++
}
</script>
```

## Breaking Changes by Category

### Template Syntax
- ✅ Most directives unchanged (v-if, v-for, v-show, v-bind, v-on)
- ⚠️ v-model prop/event names changed for custom components
- ⚠️ v-for with ref now creates array of refs
- ⚠️ .sync modifier removed (use v-model:propName)
- ⚠️ v-on.native removed (all events in $attrs)

### Component API
- ⚠️ data must always be function
- ⚠️ $listeners removed (merged into $attrs)
- ⚠️ $children removed (use refs or provide/inject)
- ⚠️ Functional components are plain functions
- ✅ Props, computed, watch mostly unchanged
- ✅ Slots API mostly unchanged

### Global API
- ⚠️ All Vue.* methods → app.* methods
- ⚠️ Vue.config → app.config
- ⚠️ Vue.use → app.use
- ❌ Vue.extend removed
- ❌ Vue.filter removed

### Instance API
- ❌ $on, $off, $once removed
- ❌ $destroy → use unmount()
- ⚠️ $mount now on app, not instance
- ✅ $emit still works
- ✅ $nextTick still works

### Lifecycle
- ⚠️ beforeDestroy → beforeUnmount
- ⚠️ destroyed → unmounted
- ✅ All other hooks unchanged

## Common Patterns & Solutions

### Pattern: Event Bus
```javascript
// Vue 2
const bus = new Vue()
bus.$on('event', handler)
bus.$emit('event', data)

// Vue 3 - Option 1: mitt library
import mitt from 'mitt'
const emitter = mitt()
emitter.on('event', handler)
emitter.emit('event', data)

// Vue 3 - Option 2: provide/inject
// Parent
provide('emitter', {
  on: (event, handler) => { /* ... */ },
  emit: (event, data) => { /* ... */ }
})
// Child
const emitter = inject('emitter')
```

### Pattern: Global Properties
```javascript
// Vue 2
Vue.prototype.$http = axios

// Vue 3
app.config.globalProperties.$http = axios
```

### Pattern: Root Instance Access
```javascript
// Vue 2
this.$root.someProperty

// Vue 3 - Still works, but consider provide/inject instead
```

### Pattern: Dynamic Components
```html
<!-- Vue 2 & Vue 3 - Same syntax -->
<component :is="currentComponent"></component>
```

## Testing Changes

### Vue Test Utils
```javascript
// Vue 2
import { shallowMount } from '@vue/test-utils'
const wrapper = shallowMount(Component)

// Vue 3 - Almost identical
import { shallowMount } from '@vue/test-utils'
const wrapper = shallowMount(Component)
// But may need to update some options
```

## Resources

- [Official Migration Guide](https://v3-migration.vuejs.org/)
- [Breaking Changes](https://v3-migration.vuejs.org/breaking-changes/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Composition API RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0013-composition-api.md)

---

**Last Updated:** 2025-12-05
