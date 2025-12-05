# Vue 3 Basics

This folder contains fundamental Vue 3 examples demonstrating core concepts. All examples use Vue 3 with the CDN build and can be opened directly in a browser.

## 📚 Core Concepts

### Data Binding & Reactivity
- **[attribute-and-class-binding](./attribute-and-class-binding/)** - Using `v-bind` (`:`) to bind data to HTML attributes
- **[v-model-basic-data-binding](./v-model-basic-data-binding/)** - Two-way data binding with `v-model`

### Computed & Methods
- **[computed-properties](./computed-properties/)** - Cached computed properties for derived data
- **[event-listeners](./event-listeners/)** - Event handling with `v-on` (`@click`, etc.)

### Lists & Iteration
- **[v-for-and-lists](./v-for-and-lists/)** - Rendering lists with `v-for` directive

### Components
- **[components](./components/)** - Basic component registration and slots
- **[component-in-component](./component-in-component/)** - Nested components with data
- **[component-w-message](./component-w-message/)** - Component props and methods
- **[component-modal](./component-modal/)** - Modal component with event emitting
- **[component-tabs](./component-tabs/)** - Tab system with provide/inject pattern

### Advanced Patterns
- **[composition-api-examples](./composition-api-examples/)** - Modern Composition API patterns (ref, reactive, computed, etc.)

## 🚀 Quick Start

1. Navigate to any example folder
2. Open `index.html` in your browser
3. Open browser DevTools console to experiment

### Example: Try in Console
```javascript
// Most examples mount to #root and expose the app
// You can interact with the Vue app from console:
app._instance.data.message = 'Changed from console!'
```

## 📖 Learning Path

**Recommended order for beginners:**

1. **attribute-and-class-binding** - Start here: basic data binding
2. **v-model-basic-data-binding** - Two-way binding
3. **computed-properties** - Computed values
4. **event-listeners** - Click handlers and events
5. **v-for-and-lists** - Rendering lists
6. **components** - Basic components
7. **component-w-message** - Props and component communication
8. **component-modal** - Events and component interaction
9. **component-tabs** - Complex component patterns
10. **composition-api-examples** - Modern Vue 3 patterns

## 🔄 Vue 3 Features Used

These examples demonstrate Vue 3 syntax:

### Application Instance
```javascript
const { createApp } = Vue
const app = createApp({ ... })
app.mount('#root')
```

### Component Registration
```javascript
app.component('my-component', { ... })
```

### Provide/Inject (Vue 3 Pattern)
The `component-tabs` example shows provide/inject, which replaces `$children` from Vue 2:

```javascript
// Parent provides
provide() {
  return {
    addTab: this.addTab
  }
}

// Child injects
inject: ['addTab']
```

## 🎨 API Styles

These examples use the **Options API** (data, methods, computed, etc.), which is:
- Familiar to Vue 2 developers
- Easy for beginners
- Still fully supported in Vue 3

For modern **Composition API** examples, see the [composition-api-examples](./composition-api-examples/) folder.

## 🔧 Technologies Used

- **Vue 3** (CDN build)
- **Bulma CSS** (some examples)
- Plain HTML, CSS, and JavaScript
- No build tools required

## 📝 Notes

- All examples use ES6+ syntax (arrow functions, destructuring, template literals)
- Data must always be a function in components
- Props are immutable - use events to communicate changes to parent
- Vue 3 removes `$children`, `$on`, `$off` - use provide/inject or props/events instead

## 🔗 Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
- [Composition API Guide](https://vuejs.org/guide/extras/composition-api-faq.html)
- [Vue 3 Examples](https://vuejs.org/examples/)

## 🎯 Next Steps

After mastering these basics, explore:

1. **Single File Components** (.vue files)
2. **Build tools** (Vite, Vue CLI)
3. **Vue Router** (client-side routing)
4. **Pinia** (state management)
5. **TypeScript integration**

Check out the [showcase](../showcase/) folder for complete applications using these concepts.

---

**Status:** ✅ All examples migrated to Vue 3
**Last Updated:** 2025-12-05
