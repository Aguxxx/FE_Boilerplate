

<template>
  <div>
    <div class='display-1'>Login</div>

    <v-row>
      <v-col sm='12'>
        <v-text-field label='Username'></v-text-field>
      </v-col>
      <v-col sm='12'>
        <v-text-field label='Password' type='password'></v-text-field>
      </v-col>
      <v-col sm='12'>
        <v-btn x-large v-on:click='LogUserIn'>Login</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
	





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Login extends Vue {
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


