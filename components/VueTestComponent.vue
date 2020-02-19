

<template>
  <div>
    This is a VUE component
    <hr />

    <v-btn
      v-on:click='ApiCall' color='primary'>Trigger Modal</v-btn>
    <br />
    <v-btn
      v-on:click='ApiCall' color='primary'>Trigger Popup</v-btn>
    <br />
    <v-btn
      v-on:click='ApiCall' color='primary'>Trigger Dialog</v-btn>
    <br />
    <v-btn
      v-on:click='ApiCall' color='primary'>Trigger Working Bar</v-btn>
    <br />
    <v-btn
      v-on:click='ApiCall' color='primary'>Trigger API call</v-btn>
    <br />
  </div>
</template>
	




<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";

import axios, { AxiosError } from "axios";

@Component({
  components: {}
})
export default class TestComponent extends Vue {
  constructor() {
    super();
  }

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


