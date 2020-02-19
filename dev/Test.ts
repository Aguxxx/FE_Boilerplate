
import Vue from "vue";
import VueTestComponent from "../components/VueTestComponent.vue";
import vuetify from "vuetify"

declare var $: any;

function HelloWorld(): void {

	console.log("Hello World");


	/* DECLARE VUETIFY */
	const vtf = new vuetify();//VUETIFY_CONFIG);

	Vue.use(vuetify);


	new Vue({
		el: '#app-main',
		data: {
			MotivationalPhrase: 'You so can do it!',
		},
		components: {
			VueTestComponent
		},

		/* ASSIGN VUETIFY */
		vuetify: vtf
	})

}



$(document).ready(function () {
	HelloWorld();
})


