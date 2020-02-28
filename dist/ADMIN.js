!function(t,e){for(var n in e)t[n]=e[n]}(this,function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=3)}([function(t,e){!function(){t.exports=this.Vue}()},function(t,e){!function(){t.exports=this.Vuetify}()},function(t,e){!function(){t.exports=this.axios}()},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),c=n.n(i),a={icons:{iconfont:"fa"},theme:{dark:!0,themes:{dark:{primary:"#AE3B00",accent:"#BE4343",secondary:"#714D02",success:"#407842",info:"#94B3CB",warning:"#E7FF00",error:"#C31414"},light:{primary:"#AE3B00",accent:"#C63B3B",secondary:"#714D02",success:"#407842",info:"#94B3CB",warning:"#FFEC00",error:"#DB0000"}}}},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"debug"},[n("admin-template",[n("v-row",[n("v-col",{attrs:{sm:"6"}},[n("card")],1),t._v(" "),n("v-col",{attrs:{sm:"6"}},[n("card")],1)],1),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"ma-4"},[n("login")],1),t._v(" "),n("hr"),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{color:"primary"},on:{click:t.ApiCall}},[t._v("Trigger Modal")]),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{color:"primary"},on:{click:t.ApiCall}},[t._v("Trigger Popup")]),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{color:"primary"},on:{click:t.ApiCall}},[t._v("Trigger Dialog")]),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{color:"primary"},on:{click:t.ApiCall}},[t._v("Trigger Working Bar")]),t._v(" "),n("v-btn",{staticClass:"ma-2",attrs:{color:"primary"},on:{click:t.ApiCall}},[t._v("Trigger API call")])],1)],1)};
/**
  * vue-class-component v7.2.3
  * (c) 2015-present Evan You
  * @license MIT
  */
function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function v(t,e){d(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(n){d(t.prototype,e.prototype,n)})),Object.getOwnPropertyNames(e).forEach((function(n){d(t,e,n)}))}function d(t,e,n){(n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e)).forEach((function(r){var o=n?Reflect.getOwnMetadata(r,e,n):Reflect.getOwnMetadata(r,e);n?Reflect.defineMetadata(r,o,t,n):Reflect.defineMetadata(r,o,t)}))}s._withStripped=!0;var y={__proto__:[]}instanceof Array;function _(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||n.push(r);n.forEach((function(n){"_"!==n.charAt(0)&&Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var r=new e;e.prototype._init=n;var o={};return Object.keys(r).forEach((function(t){void 0!==r[t]&&(o[t]=r[t])})),o}var m=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(m.indexOf(t)>-1)e[t]=n[t];else{var r=Object.getOwnPropertyDescriptor(n,t);void 0!==r.value?"function"==typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){return l({},t,r.value)}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return _(this,t)}});var r=t.__decorators__;r&&(r.forEach((function(t){return t(e)})),delete t.__decorators__);var i=Object.getPrototypeOf(t.prototype),c=i instanceof o.a?i.constructor:o.a,a=c.extend(e);return g(a,t,c),p()&&v(a,t),a}var b={prototype:!0,arguments:!0,callee:!0,caller:!0};function g(t,e,n){Object.getOwnPropertyNames(e).forEach((function(r){if(!b[r]){var o=Object.getOwnPropertyDescriptor(t,r);if(!o||o.configurable){var i,c,a=Object.getOwnPropertyDescriptor(e,r);if(!y){if("cid"===r)return;var s=Object.getOwnPropertyDescriptor(n,r);if(i=a.value,c=f(i),null!=i&&("object"===c||"function"===c)&&s&&s.value===a.value)return}0,Object.defineProperty(t,r,a)}}}))}function O(t){return"function"==typeof t?h(t):function(e){return h(e,t)}}O.registerHooks=function(t){m.push.apply(m,u(t))};var w=O,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"debug"},[n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.ShowDrawer,callback:function(e){t.ShowDrawer=e},expression:"ShowDrawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(t._s(t.PersonName))]),t._v(" "),n("v-list-item-subtitle",[t.IsAdmin?n("kbd",[t._v("ADMIN")]):t._e()])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{href:t.Paths.Account.V}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Manage your Account")])],1)],1),t._v(" "),t._l(t.MenuItems,(function(e){return n("v-list-item",{key:e,attrs:{link:""},on:{click:function(n){return t.GoTo(e)}}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.N))])],1)],1)}))],2)],1),t._v(" "),n("v-card",{staticClass:"fill-height",attrs:{fluid:"",tile:""}},[n("v-app-bar",{attrs:{color:"secondary",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.ShowDrawer=!0}}}),t._v(" "),n("v-toolbar-title",[t._v("MTC USA • ADMIN")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",href:t.Paths.Account.V,title:"Manage your User Account"}},[n("v-icon",[t._v("fas fa-user-circle")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:t.Logout}},[n("v-icon",[t._v("fas fa-power-off")])],1)],1),t._v(" "),n("v-sheet",[n("v-container",[t._t("default",[t._v("Content slot")])],2)],1)],1)],1)};j._withStripped=!0;var P,R=(P=function(t,e){return(P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}P(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),C=function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},A=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};function x(t,e,n,r,o,i,c,a){var s,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),c?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},f._ssrRegister=s):o&&(s=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(f.functional){f._injectStyles=s;var l=f.render;f.render=function(t,e){return s.call(e),l(t,e)}}else{var u=f.beforeCreate;f.beforeCreate=u?[].concat(u,s):[s]}return{exports:t,options:f}}var S=x(function(t){function e(){var e=t.call(this)||this;return e.ShowDrawer=!1,e.MenuItems=[],e.PersonName="Lorem Ipsum",e.IsAdmin=!0,e.Paths={},e.Paths.Account={N:"Link1",V:"#"},e.MenuItems.push({N:"Link1",V:"#"}),e.MenuItems.push({N:"Link1",V:"#"}),e}return R(e,t),e.prototype.mounted=function(){},e.prototype.Logout=function(){alert("do logout")},e=C([w({components:{}}),A("design:paramtypes",[])],e)}(o.a),j,[],!1,null,null,null);S.options.__file="components/AdminTemplate.vue";var M=S.exports,k=function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",[e("v-card-title",[this._v("Título")])],1)};k._withStripped=!0;var E=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),T=function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},D=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},N=x(function(t){function e(){return t.call(this)||this}return E(e,t),e=T([w({components:{}}),D("design:paramtypes",[])],e)}(o.a),k,[],!1,null,null,null);N.options.__file="components/Card.vue";var I=N.exports,B=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"display-1"},[this._v("Login")]),this._v(" "),e("v-row",[e("v-col",{attrs:{sm:"12"}},[e("v-text-field",{attrs:{label:"Username"}})],1),this._v(" "),e("v-col",{attrs:{sm:"12"}},[e("v-text-field",{attrs:{label:"Password",type:"password"}})],1),this._v(" "),e("v-col",{attrs:{sm:"12"}},[e("v-btn",{attrs:{"x-large":""},on:{click:this.LogUserIn}},[this._v("Login")])],1)],1)],1)};B._withStripped=!0;var L=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),V=function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},U=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},F=x(function(t){function e(){return t.call(this)||this}return L(e,t),e=V([w({components:{}}),U("design:paramtypes",[])],e)}(o.a),B,[],!1,null,null,null);F.options.__file="components/Login.vue";var H=F.exports,K=n(2),W=n.n(K),X=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),G=function(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},q=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},z=x(function(t){function e(){return t.call(this)||this}return X(e,t),e.prototype.ApiCall=function(){console.log("Triggering API call"),W.a.post("/specdev/vonclutch/api.aspx",{}).then((function(t){console.log("response obtained: ",t)})).catch((function(t){t?console.log(t.message):console.log("HTTP error")}))},e=G([w({components:{AdminTemplate:M,Card:I,Login:H}}),q("design:paramtypes",[])],e)}(o.a),s,[],!1,null,null,null);z.options.__file="components/Admin.vue";var J=z.exports;$(document).ready((function(){!function(){console.log("Hello World"),$(".pre-loader").fadeOut();var t=new c.a(a);new o.a({el:"#app-main",data:{},components:{Admin:J},vuetify:t})}()}))}]));