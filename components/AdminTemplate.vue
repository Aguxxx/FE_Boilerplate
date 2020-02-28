

<template>
  <div class='debug'
	>
			<v-navigation-drawer
				v-model='ShowDrawer'
				absolute
				temporary
			>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title class='title'>{{ PersonName }}</v-list-item-title>
						<v-list-item-subtitle>
							<kbd v-if='IsAdmin'>ADMIN</kbd>
						</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>

				<v-divider></v-divider>

				<v-list dense>
					<v-list-item :href='Paths.Account.V'>
						<v-list-item-content>
							<v-list-item-title>Manage your Account</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item
						v-for='item in MenuItems'
						:key='item'
						link
						@click='GoTo(item)'
					>
						<v-list-item-content>
							<v-list-item-title>{{ item.N }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-navigation-drawer>

			<v-card class='fill-height' fluid tile>
				<v-app-bar color='secondary' dark>
					<v-app-bar-nav-icon @click='ShowDrawer=true'></v-app-bar-nav-icon>

					<v-toolbar-title>MTC USA • ADMIN</v-toolbar-title>

					<v-spacer></v-spacer>

					<v-btn
						icon
						:href='Paths.Account.V'
						title='Manage your User Account'
					>
						<v-icon>fas fa-user-circle</v-icon>
					</v-btn>
					<v-btn icon @click='Logout'>
						<v-icon>fas fa-power-off</v-icon>
					</v-btn>
				</v-app-bar>

				<v-sheet>
					<v-container>
						<slot>Content slot</slot>
					</v-container>
				</v-sheet>
			</v-card>



  </div>
</template>
	





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class BOILERPLATE_COMPONENT extends Vue {
  constructor() {
		super();
				this.Paths.Account = {
				N : 'Link1',
				V: '#',
		};

		this.MenuItems.push({
				N: 'Link1',
				V: '#',
		});
		this.MenuItems.push({
				N: 'Link1',
				V: '#',
		});

  }

  /* LIFECYCLE METHODS */
  mounted(){
	}
  // created(){}

  /* PROPS VARIABLES, They have to be lower case, or first capital only, 
		otherwise they will fail ! */
  // @Prop()
  // public cfg: any;

  /* PRIVATE VARIABLES, __ POSTFIXED */
  // private myVar__: any;

  /* VUE DATA */
	public ShowDrawer: boolean=false;
	public MenuItems: any[] = [];
	public PersonName: string = 'Lorem Ipsum';
	public IsAdmin: boolean=true;
	public Paths: any = {};

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
	public Logout():void{
		alert('do logout');
	}
}
</script>


