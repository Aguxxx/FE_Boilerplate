<template>
  <v-card>
    <v-card-title>Título</v-card-title>
  </v-card>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";
// import axios from "axios";
// import * as CL from "../Mtc_classes";
// import { MtcADMIN } from "../Mtc";
// import AdminTemplate from "../../../dev/Components/AdminTemplate.vue";
// import AdminTitles from "../../../dev/Components/AdminTitles.vue";

@Component({
  components: {}
})
export default class Card extends Vue {
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
  // public DoNothing():void{}
}
</script>


