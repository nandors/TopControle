webpackJsonp([9],{

/***/ 195:
/*!************************************!*\
  !*** ./src/components/Landing.vue ***!
  \************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Landing_vue__ = __webpack_require__(/*! !babel-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./Landing.vue */ 238);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18728ab7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Landing_vue__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-18728ab7","hasScoped":false,"buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./Landing.vue */ 248);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Landing_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18728ab7_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Landing_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\Landing.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18728ab7", Component.options)
  } else {
    hotAPI.reload("data-v-18728ab7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 238:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Landing.vue ***!
  \**********************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 248:
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-18728ab7","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Landing.vue ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        [_c("h3", [_vm._v("Bem vindo ao sistema Top Control")])]
      ),
      _vm._v(" "),
      _c(
        "v-flex",
        { attrs: { xs12: "", sm6: "", "offset-sm3": "", "mt-3": "" } },
        [_c("blockquote")]
      ),
      _vm._v(" "),
      _c(
        "v-flex",
        { staticClass: "text-xs-center", attrs: { "mt-5": "" } },
        [
          _c("v-btn", { attrs: { primary: "", to: "/signup" } }, [
            _vm._v("Cadastrar")
          ]),
          _vm._v(" "),
          _c("v-btn", { attrs: { to: "/signin" } }, [_vm._v("Entrar")])
        ],
        1
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
    require("vue-hot-reload-api")      .rerender("data-v-18728ab7", esExports)
  }
}

/***/ })

});