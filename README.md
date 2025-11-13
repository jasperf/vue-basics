# VueJS Basics

In this repository I put all the Vue projects I worked on using Laracasts.com and other workshops on the web to learn Vue.js.

## 🎉 Vue 3 Migration Status

**12 projects migrated to Vue 3** with automated testing! See [CHANGELOG.md](CHANGELOG.md) for details.

### ✅ Vue 3 Ready (CDN-based)

- **Attribute and Class Binding** - v-bind directive (Vue 3)
- **Basic Data Binding** - v-model two-way binding (Vue 3)
- **Component within Component** - Nested components (Vue 3)
- **Component Modal** - Modal with events (Vue 3)
- **Component Tabs** - Tabs with provide/inject (Vue 3)
- **Component with Message** - Message component (Vue 3)
- **Components** - Basic component patterns (Vue 3)
- **Computed Properties** - Computed properties & caching (Vue 3)
- **Event Listeners** - v-on directive (Vue 3)
- **Lists** - v-for list rendering (Vue 3)
- **Twitter** - Twitter-style interface (Vue 3)
- **Drag and Drop** - Custom directive (Vue 3 + Vue 1.x)

### 🔧 Vue 2.7 (Webpack Projects)

- Axios - Promised Based HTTP and VueJS
- To Do App - Full Vue CLI project with tests
- Vue CLI Webpack Project - Router integration
- Vue Shop - MEVN stack e-commerce

### 📊 Project Status Summary

- **Vue 3:** 12 projects (all tested ✅)
- **Vue 2.7:** 4 major projects
- **Test Coverage:** 6 projects with Playwright tests
- **Pass Rate:** 100%

## Attribute and Class Binding - v-bind
In this workshop work with ```v-bind```. We use it to change the class and attributes of html tags to create new state.

## Axios
Basic Axios - Promised Based HTTP Client - Ajax call loading Json from Laravel Route with array. 

Vue is used to add the data or skills in this case to the DOM using an empty array. In `resources/assets/js/app.js` we require bootstrap and view and then import our Vue component using:
```
Vue.component('example', require('./components/Example.vue')); 
```

The component does a basic `mounted` test loading some data and recording a succes mount in the console.
### Laravel Backend
This demo uses Axios as part of a Laravel application So a full fledged Laravel setup is used here. Axios fills the array with data from the Larvel Route skills at `routes/web.php`:

```
Route::get('skills', function () {
    return ['Laravel', 'Vue', 'PHP', 'JavaScript', 'Tooling'];
});
```

`resources/views/welcome.blade.php` loads the vue data using:

```
<body>
        <div id="app">
            <ul>
                <li v-for="skill in skills">@{{skill}}</li>
            </ul>
        </div>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://unpkg.com/vue"></script>
        <script src="/js/app.js"" type="text/javascript" charset="utf-8" async defer></script>
    </body>
```

### PHP Server
You can run the app using Homestead of for a quick check the built in PHP server using:
```
jasper@/axios/public $ php -S localhost:8000
PHP 7.1.5 Development Server started at Fri Sep 15 12:13:49 2017
Listening on http://localhost:8000
Document root is /Users/jasper/webdesign/vue-basics/axios/public
Press Ctrl-C to quit.
[Fri Sep 15 12:13:52 2017] ::1:58449 [200]: /
[Fri Sep 15 12:13:52 2017] ::1:58454 [200]: /js/app.js
[Fri Sep 15 12:13:55 2017] ::1:58463 [200]: /skills
```
## Basic Databinding
Showing how you can reactively bind data to an input field using v-model as well as echoing the data using the moustache ```{{}}``` syntax.

This type of data binding using ```v-model``` is for input fields and text areas only. For binding of classes and styles ```v-bind``` is used.

## Components within Components
Basic example showing you how you can use html tags defined in one component:
```
<task v-for="task in tasks" :key="task.id">{{ task.task }}</task>
```
and reuse those in the second component. Do remember that Vue wants you do a top bottom approach so components at the top depend on the ones following them. And a new Vue instance follows at the end

## Component Modal

## Component Tabs

Tougher chapter dealing with adding a tabbed structure. CSS is based on a Bulma component again. As for dealing with the tab headers, body and selected states several directives have been used:
```
v-modal
v-bind or : 
v-show
v-on: or @click
v-for (loops)
```
Issues you bump into is 
- the fact that properties need to be immutable, 
- that children within components need to be registered as properties to manipulate them, 
- that custom tags in components not defined yet need a separate component or at least their own property (own component here).

You will also see ES6 used here again and that something like
```
$vm0.$children.forEach(tab => console.log(tab.name));
```
can be confusing due to ES6 syntax for the uninitiated.
**NB** Code has been commented extensively.

## Components with Message
Working with a component here in more detail using the properties:prop, extended template details as well as a method to show or hide a message block. Directive used here to work with the method to hide the message is ```v-show```. Bulma is used here it being Jeffrey Way,'' favorite CSS framework.

The `@click` used here is  a short version of `v-on:click` and you can add a method to be called. Also see [listening to events chapter at Vue](https://vuejs.org/v2/guide/events.html#Listening-to-Events)

## Event Listeners
In this workshop event listeners are setup. The example using vanilla JavaScript is used first and then commented out:
```
document.querySelector('#button').addEventListener('click', () => {
	let name = document.querySelector('#input');
	app.names.push(name.value);
	name.value = ''; //empty the field
});
```
This to show how event listeners are set up in Vue JS with a lot less code and way easier then using JavaScript or jQuery. The event listener is set up using the directive ```v-on:click``` . With it a method can be bound to it.

## To Do App
Todo app based on Jeremy Kithome's tutorial at Scotchbox [here](https://scotch.io/tutorials/build-a-to-do-app-with-vue-js-2). This app is made with the vue cli tool. You can install it using 
```
npm install --global vue-cli
```
Once installed you have the option to set up a 
- Webpack app, 
- webpack simple Webpack with Vue-loader,
-  Browserify - Browserify plus Vue-ify with hot-reload,
-  Browserify Simple - Borwserify + Vue-ify,
-  Simple - Vue using a single HTML file
For this app we use the full Webpack app:
```
vue init webpack todo-app
```
## Twitter

Twitter Tweet field in progress

## V-For and Lists
Wonderful basic example showing how you can use Vue's v-for loops. From within a component with a data function an array of data is loaded:
```
data: { // data
                names: ['Joe', 'Mary', 'John'] // array with elements
                //try app.names.push('Jeremiah')
            }
```
This array is loaded onto the page using:
```
<li v-for="name in names">{{ name }}</li>
```
The `{{}}` moustache curly braces are used here again to echo the actual name from the for loop.

