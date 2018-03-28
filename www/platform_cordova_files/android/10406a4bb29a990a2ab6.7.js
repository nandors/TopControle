webpackJsonp([7],{

/***/ 199:
/*!***********************************!*\
  !*** ./src/components/Signin.vue ***!
  \***********************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Signin_vue__ = __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./Signin.vue */ 242);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eaa6a29c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Signin_vue__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-eaa6a29c","hasScoped":false,"buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./Signin.vue */ 252);
var disposed = false
var normalizeComponent = __webpack_require__(/*! ../../node_modules/vue-loader/lib/component-normalizer */ 45)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Signin_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eaa6a29c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Signin_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Signin.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eaa6a29c", Component.options)
  } else {
    hotAPI.reload("data-v-eaa6a29c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 242:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Signin.vue ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      email: '',
      password: '',
      alert: false
    };
  },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    loading() {
      return this.$store.getters.getLoading;
    }
  },
  watch: {
    error(value) {
      if (value) {
        this.alert = true;
      }
    },
    alert(value) {
      if (!value) {
        this.$store.dispatch('setError', false);
      }
    }
  },
  methods: {
    userSignIn() {
      this.$store.dispatch('userSignIn', { email: this.email, password: this.password });
    }
  }
});

/***/ }),

/***/ 252:
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-eaa6a29c","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Signin.vue ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { attrs: { column: "" } },
    [
      _c(
        "v-flex",
        { staticClass: "text-xs-center", attrs: { xs12: "", "mt-5": "" } },
        [_c("h3", [_vm._v("Login")])]
      ),
      _vm._v(" "),
      _c(
        "v-flex",
        { attrs: { xs12: "", sm6: "", "offset-sm3": "", "mt-3": "" } },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  _vm.userSignIn($event)
                }
              }
            },
            [
              _c(
                "v-layout",
                { attrs: { column: "" } },
                [
                  _c(
                    "v-flex",
                    [
                      _c(
                        "v-alert",
                        {
                          attrs: { error: "", dismissible: "" },
                          model: {
                            value: _vm.alert,
                            callback: function($$v) {
                              _vm.alert = $$v
                            },
                            expression: "alert"
                          }
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.error) +
                              "\n          "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    [
                      _c("v-text-field", {
                        attrs: {
                          name: "email",
                          label: "Email",
                          id: "email",
                          type: "email",
                          required: ""
                        },
                        model: {
                          value: _vm.email,
                          callback: function($$v) {
                            _vm.email = $$v
                          },
                          expression: "email"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    [
                      _c("v-text-field", {
                        attrs: {
                          name: "password",
                          label: "Password",
                          id: "password",
                          type: "password",
                          required: ""
                        },
                        model: {
                          value: _vm.password,
                          callback: function($$v) {
                            _vm.password = $$v
                          },
                          expression: "password"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { staticClass: "text-xs-center", attrs: { "mt-5": "" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            primary: "",
                            type: "submit",
                            disabled: _vm.loading
                          }
                        },
                        [_vm._v("Acessar")]
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
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-eaa6a29c", esExports)
  }
}

/***/ })

});