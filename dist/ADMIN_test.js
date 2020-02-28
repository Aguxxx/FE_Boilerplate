(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = this["Vue"]; }());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function() { module.exports = this["Vuetify"]; }());

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function() { module.exports = this["axios"]; }());

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(0);
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: external "Vuetify"
var external_Vuetify_ = __webpack_require__(1);
var external_Vuetify_default = /*#__PURE__*/__webpack_require__.n(external_Vuetify_);

// CONCATENATED MODULE: ./dev/Main.ts
var VUETIFY_CONFIG = {
    icons: {
        iconfont: 'fa',
    },
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#AE3B00',
                accent: '#BE4343',
                secondary: '#714D02',
                success: '#407842',
                info: '#94B3CB',
                warning: '#E7FF00',
                error: '#C31414'
            },
            light: {
                primary: '#AE3B00',
                accent: '#C63B3B',
                secondary: '#714D02',
                success: '#407842',
                info: '#94B3CB',
                warning: '#FFEC00',
                error: '#DB0000'
            }
        }
    }
};

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin.vue?vue&type=template&id=068d6f84&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "debug" },
    [
      _c(
        "admin-template",
        [
          _c(
            "v-row",
            [
              _c("v-col", { attrs: { sm: "6" } }, [_c("card")], 1),
              _vm._v(" "),
              _c("v-col", { attrs: { sm: "6" } }, [_c("card")], 1)
            ],
            1
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "ma-4" }, [_c("login")], 1),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ma-2",
              attrs: { color: "primary" },
              on: { click: _vm.ApiCall }
            },
            [_vm._v("Trigger Modal")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ma-2",
              attrs: { color: "primary" },
              on: { click: _vm.ApiCall }
            },
            [_vm._v("Trigger Popup")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ma-2",
              attrs: { color: "primary" },
              on: { click: _vm.ApiCall }
            },
            [_vm._v("Trigger Dialog")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ma-2",
              attrs: { color: "primary" },
              on: { click: _vm.ApiCall }
            },
            [_vm._v("Trigger Working Bar")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ma-2",
              attrs: { color: "primary" },
              on: { click: _vm.ApiCall }
            },
            [_vm._v("Trigger API call")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./components/Admin.vue?vue&type=template&id=068d6f84&

// CONCATENATED MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm.js
/**
  * vue-class-component v7.2.3
  * (c) 2015-present Evan You
  * @license MIT
  */


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return external_Vue_default.a.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      if (key.charAt(0) !== '_') {
        Object.defineProperty(_this, key, {
          get: function get() {
            return vm[key];
          },
          set: function set(value) {
            vm[key] = value;
          },
          configurable: true
        });
      }
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (false) {}

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof external_Vue_default.a ? superProto.constructor : external_Vue_default.a;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if (false) {}

    Object.defineProperty(Extended, key, descriptor);
  });
}

function vue_class_component_esm_Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

vue_class_component_esm_Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/* harmony default export */ var vue_class_component_esm = (vue_class_component_esm_Component);


// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/AdminTemplate.vue?vue&type=template&id=1ec1d1c4&
var AdminTemplatevue_type_template_id_1ec1d1c4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "debug" },
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: { absolute: "", temporary: "" },
          model: {
            value: _vm.ShowDrawer,
            callback: function($$v) {
              _vm.ShowDrawer = $$v
            },
            expression: "ShowDrawer"
          }
        },
        [
          _c(
            "v-list-item",
            [
              _c(
                "v-list-item-content",
                [
                  _c("v-list-item-title", { staticClass: "title" }, [
                    _vm._v(_vm._s(_vm.PersonName))
                  ]),
                  _vm._v(" "),
                  _c("v-list-item-subtitle", [
                    _vm.IsAdmin ? _c("kbd", [_vm._v("ADMIN")]) : _vm._e()
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _c(
                "v-list-item",
                { attrs: { href: _vm.Paths.Account.V } },
                [
                  _c(
                    "v-list-item-content",
                    [_c("v-list-item-title", [_vm._v("Manage your Account")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.MenuItems, function(item) {
                return _c(
                  "v-list-item",
                  {
                    key: item,
                    attrs: { link: "" },
                    on: {
                      click: function($event) {
                        return _vm.GoTo(item)
                      }
                    }
                  },
                  [
                    _c(
                      "v-list-item-content",
                      [_c("v-list-item-title", [_vm._v(_vm._s(item.N))])],
                      1
                    )
                  ],
                  1
                )
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "fill-height", attrs: { fluid: "", tile: "" } },
        [
          _c(
            "v-app-bar",
            { attrs: { color: "secondary", dark: "" } },
            [
              _c("v-app-bar-nav-icon", {
                on: {
                  click: function($event) {
                    _vm.ShowDrawer = true
                  }
                }
              }),
              _vm._v(" "),
              _c("v-toolbar-title", [_vm._v("MTC USA • ADMIN")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    icon: "",
                    href: _vm.Paths.Account.V,
                    title: "Manage your User Account"
                  }
                },
                [_c("v-icon", [_vm._v("fas fa-user-circle")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { icon: "" }, on: { click: _vm.Logout } },
                [_c("v-icon", [_vm._v("fas fa-power-off")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-sheet",
            [
              _c(
                "v-container",
                [_vm._t("default", [_vm._v("Content slot")])],
                2
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var AdminTemplatevue_type_template_id_1ec1d1c4_staticRenderFns = []
AdminTemplatevue_type_template_id_1ec1d1c4_render._withStripped = true


// CONCATENATED MODULE: ./components/AdminTemplate.vue?vue&type=template&id=1ec1d1c4&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./components/AdminTemplate.vue?vue&type=script&lang=ts&
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminTemplatevue_type_script_lang_ts_BOILERPLATE_COMPONENT = /** @class */ (function (_super) {
    __extends(BOILERPLATE_COMPONENT, _super);
    function BOILERPLATE_COMPONENT() {
        var _this = _super.call(this) || this;
        // created(){}
        /* PROPS VARIABLES, They have to be lower case, or first capital only,
              otherwise they will fail ! */
        // @Prop()
        // public cfg: any;
        /* PRIVATE VARIABLES, __ POSTFIXED */
        // private myVar__: any;
        /* VUE DATA */
        _this.ShowDrawer = false;
        _this.MenuItems = [];
        _this.PersonName = 'Lorem Ipsum';
        _this.IsAdmin = true;
        _this.Paths = {};
        _this.Paths.Account = {
            N: 'Link1',
            V: '#',
        };
        _this.MenuItems.push({
            N: 'Link1',
            V: '#',
        });
        _this.MenuItems.push({
            N: 'Link1',
            V: '#',
        });
        return _this;
    }
    /* LIFECYCLE METHODS */
    BOILERPLATE_COMPONENT.prototype.mounted = function () {
    };
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
    BOILERPLATE_COMPONENT.prototype.Logout = function () {
        alert('do logout');
    };
    BOILERPLATE_COMPONENT = __decorate([
        vue_class_component_esm({
            components: {}
        }),
        __metadata("design:paramtypes", [])
    ], BOILERPLATE_COMPONENT);
    return BOILERPLATE_COMPONENT;
}(external_Vue_default.a));
/* harmony default export */ var AdminTemplatevue_type_script_lang_ts_ = (AdminTemplatevue_type_script_lang_ts_BOILERPLATE_COMPONENT);

// CONCATENATED MODULE: ./components/AdminTemplate.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_AdminTemplatevue_type_script_lang_ts_ = (AdminTemplatevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./components/AdminTemplate.vue





/* normalize component */

var component = normalizeComponent(
  components_AdminTemplatevue_type_script_lang_ts_,
  AdminTemplatevue_type_template_id_1ec1d1c4_render,
  AdminTemplatevue_type_template_id_1ec1d1c4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/AdminTemplate.vue"
/* harmony default export */ var AdminTemplate = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=template&id=f883d62a&
var Cardvue_type_template_id_f883d62a_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-card", [_c("v-card-title", [_vm._v("Título")])], 1)
}
var Cardvue_type_template_id_f883d62a_staticRenderFns = []
Cardvue_type_template_id_f883d62a_render._withStripped = true


// CONCATENATED MODULE: ./components/Card.vue?vue&type=template&id=f883d62a&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=script&lang=ts&
var Cardvue_type_script_lang_ts_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cardvue_type_script_lang_ts_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Cardvue_type_script_lang_ts_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import axios from "axios";
// import * as CL from "../Mtc_classes";
// import { MtcADMIN } from "../Mtc";
// import AdminTemplate from "../../../dev/Components/AdminTemplate.vue";
// import AdminTitles from "../../../dev/Components/AdminTitles.vue";
var Cardvue_type_script_lang_ts_Card = /** @class */ (function (_super) {
    Cardvue_type_script_lang_ts_extends(Card, _super);
    function Card() {
        return _super.call(this) || this;
    }
    Card = Cardvue_type_script_lang_ts_decorate([
        vue_class_component_esm({
            components: {}
        }),
        Cardvue_type_script_lang_ts_metadata("design:paramtypes", [])
    ], Card);
    return Card;
}(external_Vue_default.a));
/* harmony default export */ var Cardvue_type_script_lang_ts_ = (Cardvue_type_script_lang_ts_Card);

// CONCATENATED MODULE: ./components/Card.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Cardvue_type_script_lang_ts_ = (Cardvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/Card.vue





/* normalize component */

var Card_component = normalizeComponent(
  components_Cardvue_type_script_lang_ts_,
  Cardvue_type_template_id_f883d62a_render,
  Cardvue_type_template_id_f883d62a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Card_api; }
Card_component.options.__file = "components/Card.vue"
/* harmony default export */ var components_Card = (Card_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=template&id=c27482c4&
var Loginvue_type_template_id_c27482c4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "display-1" }, [_vm._v("Login")]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { sm: "12" } },
            [_c("v-text-field", { attrs: { label: "Username" } })],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { sm: "12" } },
            [
              _c("v-text-field", {
                attrs: { label: "Password", type: "password" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { sm: "12" } },
            [
              _c(
                "v-btn",
                { attrs: { "x-large": "" }, on: { click: _vm.LogUserIn } },
                [_vm._v("Login")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var Loginvue_type_template_id_c27482c4_staticRenderFns = []
Loginvue_type_template_id_c27482c4_render._withStripped = true


// CONCATENATED MODULE: ./components/Login.vue?vue&type=template&id=c27482c4&

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=script&lang=ts&
var Loginvue_type_script_lang_ts_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Loginvue_type_script_lang_ts_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Loginvue_type_script_lang_ts_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Loginvue_type_script_lang_ts_Login = /** @class */ (function (_super) {
    Loginvue_type_script_lang_ts_extends(Login, _super);
    function Login() {
        return _super.call(this) || this;
    }
    Login = Loginvue_type_script_lang_ts_decorate([
        vue_class_component_esm({
            components: {}
        }),
        Loginvue_type_script_lang_ts_metadata("design:paramtypes", [])
    ], Login);
    return Login;
}(external_Vue_default.a));
/* harmony default export */ var Loginvue_type_script_lang_ts_ = (Loginvue_type_script_lang_ts_Login);

// CONCATENATED MODULE: ./components/Login.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Loginvue_type_script_lang_ts_ = (Loginvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/Login.vue





/* normalize component */

var Login_component = normalizeComponent(
  components_Loginvue_type_script_lang_ts_,
  Loginvue_type_template_id_c27482c4_render,
  Loginvue_type_template_id_c27482c4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Login_api; }
Login_component.options.__file = "components/Login.vue"
/* harmony default export */ var components_Login = (Login_component.exports);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./components/Admin.vue?vue&type=script&lang=ts&
var Adminvue_type_script_lang_ts_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Adminvue_type_script_lang_ts_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Adminvue_type_script_lang_ts_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Adminvue_type_script_lang_ts_Admin = /** @class */ (function (_super) {
    Adminvue_type_script_lang_ts_extends(Admin, _super);
    function Admin() {
        return _super.call(this) || this;
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
    Admin.prototype.ApiCall = function () {
        console.log("Triggering API call");
        external_axios_default.a
            .post("/specdev/vonclutch/api.aspx", {})
            .then(function (resp) {
            console.log("response obtained: ", resp);
        })
            .catch(function (reason) {
            if (!reason) {
                console.log("HTTP error");
                return;
            }
            console.log(reason.message);
        });
    };
    Admin = Adminvue_type_script_lang_ts_decorate([
        vue_class_component_esm({
            components: { AdminTemplate: AdminTemplate, Card: components_Card, Login: components_Login }
        }),
        Adminvue_type_script_lang_ts_metadata("design:paramtypes", [])
    ], Admin);
    return Admin;
}(external_Vue_default.a));
/* harmony default export */ var Adminvue_type_script_lang_ts_ = (Adminvue_type_script_lang_ts_Admin);

// CONCATENATED MODULE: ./components/Admin.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Adminvue_type_script_lang_ts_ = (Adminvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./components/Admin.vue





/* normalize component */

var Admin_component = normalizeComponent(
  components_Adminvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Admin_api; }
Admin_component.options.__file = "components/Admin.vue"
/* harmony default export */ var components_Admin = (Admin_component.exports);
// CONCATENATED MODULE: ./dev/AdminStart.ts




function HelloWorld() {
    console.log("Hello World");
    /* HIDING THE LOADING-BAR */
    $(".pre-loader").fadeOut();
    /* DECLARE VUETIFY */
    var vtf = new external_Vuetify_default.a(VUETIFY_CONFIG);
    new external_Vue_default.a({
        el: '#app-main',
        data: {},
        components: {
            Admin: components_Admin
        },
        /* ASSIGN VUETIFY */
        vuetify: vtf
    });
}
$(document).ready(function () {
    HelloWorld();
});


/***/ })
/******/ ])));
//# sourceMappingURL=ADMIN_test.js.map