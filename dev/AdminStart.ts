
import Vue from "vue";
import vuetify from "vuetify"
import { VUETIFY_CONFIG } from "./Main";

import Admin from "../components/Admin.vue";

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
		},
		components: {
			Admin
		},

		/* ASSIGN VUETIFY */
		vuetify: vtf
	})

}



$(document).ready(function () {
		HelloWorld();
})


