// Component must be registered before Vue instance
// top to bottom component nesting can be used where the top can
// use html tags introduced by the bottom
const { createApp } = Vue;

const app = createApp({});

app.component('task-list', {
	//[Vue warn]: Error compiling template:
	//<task v-for="task in tasks">{{task.taks}}</task>
	//- Cannot use v-for on stateful component root element because it renders multiple elements.
	//found in ---> <TaskList><Root> so use a root element dummy div
	template: `
		<div>
		<task v-for="task in tasks" :key="task.task">{{ task.task }}</task>
		</div>
		`,
	// data Must Be a Function

	data() {
		return {
			tasks: [ // an array of tasks
				{task: 'Go to the store', complete: true},
				{task: 'Check email', complete: false},
				{task: 'Go to work', complete: true},
				{task: 'Go to the farm', complete: false}
			]
		}
	}
});

app.component('task', {
	template: '<li><slot></slot></li>'
	// data Must Be a Function
});

app.mount('#root');