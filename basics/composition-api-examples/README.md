# Composition API Examples

This folder contains Vue 3 examples demonstrating the **Composition API**, which is an alternative to the Options API shown in the other basic-concepts folders.

## What is the Composition API?

The Composition API is a new way to organize component logic in Vue 3. It provides:

- **Better code organization** - Group related logic together
- **Better TypeScript support** - Improved type inference
- **Better code reuse** - Extract and reuse logic across components
- **More flexible** - Easier to compose complex logic

## Options API vs Composition API

Both APIs work in Vue 3. Choose based on your needs:

**Options API** (traditional Vue 2 style):
- Easier for beginners
- Familiar to Vue 2 developers
- Good for simple components
- Still fully supported in Vue 3

**Composition API** (new in Vue 3):
- Better for complex components
- Easier to extract and reuse logic
- Better TypeScript integration
- More flexible organization

## Examples in This Folder

1. **reactive-data.html** - Using `ref()` and `reactive()` for reactive state
2. **computed-and-watch.html** - Computed properties and watchers
3. **lifecycle-hooks.html** - Component lifecycle with Composition API
4. **components-and-props.html** - Components with props and emits
5. **composables.html** - Creating reusable composition functions

## Quick Comparison

### Counter Component

**Options API:**
```javascript
const app = Vue.createApp({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
})
```

**Composition API:**
```javascript
const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const count = ref(0)

    const increment = () => {
      count.value++
    }

    return { count, increment }
  }
})
```

**Composition API with `<script setup>` (Single File Components):**
```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => {
  count.value++
}
</script>
```

## Key Concepts

### `ref()` vs `reactive()`

**`ref()`** - For primitive values (numbers, strings, booleans):
```javascript
const count = ref(0)
console.log(count.value) // Access with .value
count.value++ // Modify with .value
```

**`reactive()`** - For objects:
```javascript
const state = reactive({
  count: 0,
  name: 'Vue'
})
console.log(state.count) // Direct access
state.count++ // Direct modification
```

### `computed()`

Create computed properties:
```javascript
const { ref, computed } = Vue

const firstName = ref('John')
const lastName = ref('Doe')
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})
```

### `watch()` and `watchEffect()`

Watch for changes:
```javascript
const { ref, watch } = Vue

const count = ref(0)

watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`)
})
```

### Lifecycle Hooks

```javascript
import { onMounted, onUpdated, onUnmounted } from 'vue'

onMounted(() => {
  console.log('Component mounted')
})

onUpdated(() => {
  console.log('Component updated')
})

onUnmounted(() => {
  console.log('Component unmounted')
})
```

## Resources

- [Vue 3 Composition API Guide](https://vuejs.org/guide/extras/composition-api-faq.html)
- [Composition API Reference](https://vuejs.org/api/composition-api-setup.html)
- [Reactivity API](https://vuejs.org/api/reactivity-core.html)
- [Lifecycle Hooks](https://vuejs.org/api/composition-api-lifecycle.html)

---

**Note:** These examples use the CDN build of Vue 3 for simplicity. In a real project with a build tool (Vite, Webpack), you would use Single File Components (.vue files) with `<script setup>`.
