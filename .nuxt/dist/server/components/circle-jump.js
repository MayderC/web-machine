exports.ids = [3];
exports.modules = {

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("d6a68bcc", content, true, context)
};

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleJump_vue_vue_type_style_index_0_id_9fb77718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleJump_vue_vue_type_style_index_0_id_9fb77718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleJump_vue_vue_type_style_index_0_id_9fb77718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleJump_vue_vue_type_style_index_0_id_9fb77718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleJump_vue_vue_type_style_index_0_id_9fb77718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body[data-v-9fb77718]{background:#5043a7;width:100%;height:100vh;padding:0;margin:0}.container[data-v-9fb77718],body[data-v-9fb77718]{display:flex;justify-content:center;align-items:center}.container[data-v-9fb77718]{width:250px;height:200px;border-radius:15px;grid-gap:15px;gap:15px}.item[data-v-9fb77718]{background:#000;width:25px;height:25px;transform:translatey(10px);border-radius:50%;box-shadow:10px 10px 20px rgba(0,0,0,.5)}.item-1[data-v-9fb77718]{background-color:#ff3854}.item-1[data-v-9fb77718],.item-2[data-v-9fb77718]{-webkit-animation:jump-data-v-9fb77718 1.3s cubic-bezier(.79,.06,.28,1) infinite;animation:jump-data-v-9fb77718 1.3s cubic-bezier(.79,.06,.28,1) infinite}.item-2[data-v-9fb77718]{background-color:#fff852;-webkit-animation-delay:.1s;animation-delay:.1s}.item-3[data-v-9fb77718]{background-color:#1fb8ff;-webkit-animation:jump-data-v-9fb77718 1.3s cubic-bezier(.79,.06,.28,1) infinite;animation:jump-data-v-9fb77718 1.3s cubic-bezier(.79,.06,.28,1) infinite;-webkit-animation-delay:.2s;animation-delay:.2s}.item-4[data-v-9fb77718]{background-color:#1e84b3;-webkit-animation:jump-data-v-9fb77718 1.3s cubic-bezier(.79,.06,.28,1) infinite;animation:jump-data-v-9fb77718 1.3s cubic-bezier(.79,.06,.28,1) infinite;-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes jump-data-v-9fb77718{40%{transform:translatey(-70px)}60%{transform:translatey(10px)}70%{transform:translatey(0)}80%{transform:translatey(10px)}90%{transform:translatey(5px)}to{transform:translatey(10px)}}@keyframes jump-data-v-9fb77718{40%{transform:translatey(-70px)}60%{transform:translatey(10px)}70%{transform:translatey(0)}80%{transform:translatey(10px)}90%{transform:translatey(5px)}to{transform:translatey(10px)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CircleJump.vue?vue&type=template&id=9fb77718&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"item item-1\" data-v-9fb77718></div> <div class=\"item item-2\" data-v-9fb77718></div> <div class=\"item item-3\" data-v-9fb77718></div> <div class=\"item item-4\" data-v-9fb77718></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CircleJump.vue?vue&type=template&id=9fb77718&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CircleJump.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9fb77718",
  "f822b1c6"
  
)

/* harmony default export */ var CircleJump = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=circle-jump.js.map