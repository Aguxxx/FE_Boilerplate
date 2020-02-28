

<template>
  <div class='debug'>
    <admin-template>
      <v-row>
        <v-col sm='6'>
          <card></card>
        </v-col>
        <v-col sm='6'>
          <card></card>
        </v-col>
      </v-row>


			<hr>

			<div class='ma-4'>
						<login></login>
			</div>

			<hr>

    <v-btn class='ma-2'
      v-on:click='ApiCall' color='primary'>Trigger Modal</v-btn>
    <v-btn class='ma-2'
      v-on:click='ApiCall' color='primary'>Trigger Popup</v-btn>
    <v-btn class='ma-2'
      v-on:click='ApiCall' color='primary'>Trigger Dialog</v-btn>
    <v-btn class='ma-2'
      v-on:click='ApiCall' color='primary'>Trigger Working Bar</v-btn>
    <v-btn class='ma-2'
      v-on:click='ApiCall' color='primary'>Trigger API call</v-btn>

    </admin-template>
  </div>
</template>
	





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";

import AdminTemplate from "../components/AdminTemplate.vue";
import Card from "../components/Card.vue";
import Login from "../components/Login.vue";

import axios, { AxiosError } from "axios";

@Component({
  components: { AdminTemplate, Card, Login }
})
export default class Admin extends Vue {
  constructor() {
    super();
  }

  /* LIFECYCLE METHODS */
  // mounted(){}
  // created(){}

  /* PROPS VARIABLES, They have to be lower case, or first capital only, 
		otherwise they will fail ! */
  // @Prop()
  // public cfg: any;

  /* PRIVATE VARIABLES, __ POSTFIXED */
  // private myVar__: any;

  /* VUE DATA */
  // public Name: string = 'my name';

  /* VUE WATCH */
  // @Watch("value")
  // onValueChanged(newVal: any, oldVal: any) {}

  /* VUE COMPUTED METHODS */
  // get date(): Date {
  //   return new Date();
  // }

  /* PRIVATE METHODS */
  // private MyFunction():void{}

  /* VUE METHODS */

  public ApiCall(): void {

    console.log("Triggering API call");
  
    axios
      .post("/specdev/vonclutch/api.aspx", {})
      .then((resp: any) => {
        console.log("response obtained: ", resp);
      })
      .catch((reason: any) => {
				if (!reason){
					console.log("HTTP error");
					return;
				}
				console.log(reason.message);
      });
	}

}
	
</script>


