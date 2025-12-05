const { createApp } = Vue;

const app = createApp({});

app.component('tabs', {
	// Vue.component(tagName, options)
	// Should be initiated before Vue instance -> top bottom approach
	template: `
		<div>
			<div class="tabs">
			  <ul>
			    <!--
			    // data below not needed now that we load the data using
			    // functions below
			    // <li class="is-active"><a>Pictures</a></li>
			    // <li><a>Music</a></li>
			    // <li><a>Videos</a></li>
			    // <li><a>Documents</a></li>
			    -->
			    <li v-for="tab in tabs" :key="tab.name" :class="{ 'is-active' : tab.isActive }">
				    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
			    </li>
			    <!-- // v-for to loop through the tab names
			    // also using :class for class binding briefly with if statement using second ':'
			    // @click binding to new method to trigger selected tab state
			    // event tab or argument tab is added to pass through the current tab
			    // -->
			  </ul>
			</div>

			<div class="tab-details">
				<slot></slot>
				<!-- // to load the tabs content
				// v-show only when tab header isActive
				-->
			</div>
		</div> <!-- // needed to satisfy the one root element inside component -->
		`,

		// mounted () {
		// 	console.log(this.$children); // $children is removed in Vue 3
		// 	// Vue 3 uses provide/inject pattern instead
		// }

		data () {
			return { tabs: [] };
			// needs to be added to tell the component what data it
			// is working with before we assign something in created()
			// or mounted() like we do with tabs here
		},

		// Vue 3: Provide a method for child tabs to register themselves
		provide() {
			return {
				addTab: this.addTab
			}
		},

		methods: {
			addTab(tab) {
				this.tabs.push(tab);
			},

			selectTab (selectedTab) {
				// alert('Tab selected!');
				this.tabs.forEach(tab => {
					// tab.selected = (tab.name = selectedTab.name)
					// Vue does not like this usage of property 'selected' as it does
					// not wanted you to change properties as they should be immutable
					// otherwise they will get overwritten
					tab.isActive = (tab.name == selectedTab.name)
				})
			}
		}
})

app.component('tab', { // was the missing "unknown custom element tab"
	template: `
		<div v-show="isActive"><slot></slot></div>
	`,

	props: {
		name: {required: true },
		// without the prop the looping through each name or title
		// on index would fail as it is only known there and not in the
		// component.
		selected: {default: false } // default state
	},

	// Vue 3: Inject the addTab method from parent
	inject: ['addTab'],

	data () {
		return {
			isActive : false
		}
	},
	computed: {
		href () {
			// return 'foobar'
			return '#' + this.name.toLowerCase().replace(/ /g, '-')
			// '/ /' means search for empty space and 'g' globally and then replace
			// it by
			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
		}
	},

	mounted () {
		this.isActive = this.selected;
		// Vue 3: Register this tab with parent
		this.addTab(this);
	}
})

app.mount('#root');