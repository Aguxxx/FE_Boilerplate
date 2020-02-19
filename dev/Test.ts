
import Vue from "vue";
import VueTestComponent from "../components/VueTestComponent.vue";
import vuetify from "vuetify"
import { VUETIFY_CONFIG } from "./Main";

declare var $: any;

function HelloWorld(): void {

	console.log("Hello World");

	/* HIDING THE LOADING-BAR */
	$(".pre-loader").fadeOut();


	/* DECLARE VUETIFY */
	const vtf = new vuetify(VUETIFY_CONFIG);


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

	console.log("inducing delay of 2 secs...");
	
	setTimeout(() => {
		HelloWorld();
	}, 2000);
})


