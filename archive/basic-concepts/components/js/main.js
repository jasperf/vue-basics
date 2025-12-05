// Component must be registered before Vue instance
const { createApp } = Vue;

const app = createApp({});

// Register components on the app instance
app.component('task-list', {
	template: '<ul><slot></slot></ul>'
	// data Must Be a Function
});

app.component('task', {
	template: '<li><slot></slot></li>'
	// data Must Be a Function
});

app.mount('#root');