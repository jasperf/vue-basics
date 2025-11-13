// Component must be registered before Vue instance
const { createApp } = Vue;

const app = createApp({
	data() {
		return {
			showModal: false
		}
	}
});

app.component('modal', {
	// props: ['title', 'body'],
	// data() {
	// 	return {
	// 	isVisible: true
	// };
	// },
	template: `
		<div class="modal is-active">
		  <div class="modal-background"></div>
			<div class="modal-content">
				<div class="box">
				    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				    consequat. An event is <b>emitted</b> to another scope outside the component's scope telling the Vue instance
			that the modal is closed. This way the state can be changed to false.</p>
			    </div>
			</div>
			<button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
		</div>
	`
});

app.mount('#root');