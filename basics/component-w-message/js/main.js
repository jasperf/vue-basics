// Component must be registered before Vue instance
const { createApp } = Vue;

const app = createApp({});

app.component('message', {
	props: ['title', 'body'],
	data() {
		return {
			isVisible: true
		};
	},
	// props here not inside the params for the component!
	//  As you can see you can use more custom tags this way
	//  No need to create one component per custom html tag
	template: `
		<article class="message" v-show="isVisible">
		  <div class="message-header">
		    {{title}}
		    <!-- @click is  a short version of v-on:click and you can add a method to be called -->
		    <button class="delete" @click="hideModal" aria-label="delete"></button>
		  </div>
		  <div class="message-body">
		  {{body}}
		  </div>
		</article>
	`,

	methods: {
		hideModal() {
			this.isVisible = false;
		}
	}
});

app.mount('#root');