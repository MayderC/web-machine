exports.ids = [12];
exports.modules = {

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("170fa759", content, true, context)
};

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneAnimated_vue_vue_type_style_index_0_id_71796eba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneAnimated_vue_vue_type_style_index_0_id_71796eba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneAnimated_vue_vue_type_style_index_0_id_71796eba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneAnimated_vue_vue_type_style_index_0_id_71796eba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneAnimated_vue_vue_type_style_index_0_id_71796eba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".phone[data-v-71796eba]{position:relative}.corner[data-v-71796eba],.layer10[data-v-71796eba],.layer-0[data-v-71796eba],.layer-1[data-v-71796eba],.layer-2[data-v-71796eba],.layer-3[data-v-71796eba],.layer-4[data-v-71796eba],.layer-5[data-v-71796eba],.layer-6[data-v-71796eba],.layer-7[data-v-71796eba],.layer-8[data-v-71796eba],.layer-9[data-v-71796eba]{position:absolute}.main[data-v-71796eba]{height:270px;width:160px}.phone[data-v-71796eba]{height:270px;min-width:160px;background:#702eaf;border:5px solid #2d2d2d;border-radius:20px;box-shadow:15px 20px 28px rgba(0,0,0,.5),0 0 20px rgba(0,0,0,.5);transition:1s;overflow:hidden;z-index:-1}.layer-0[data-v-71796eba]{background:#ff0;width:60px;height:60px;border-radius:50%;left:-10px;top:-10px;-webkit-animation:pulse-sun-data-v-71796eba 1s infinite;animation:pulse-sun-data-v-71796eba 1s infinite;-webkit-animation-direction:alternate;animation-direction:alternate;z-index:0}@-webkit-keyframes pulse-sun-data-v-71796eba{0%{opacity:.1}to{box-shadow:10px 10px 80px #ff0,-10px -10px 80px #ff0;transform:translatez(10px)}}@keyframes pulse-sun-data-v-71796eba{0%{opacity:.1}to{box-shadow:10px 10px 80px #ff0,-10px -10px 80px #ff0;transform:translatez(10px)}}.layer-1[data-v-71796eba]{position:absolute;left:55%;z-index:1}.layer-1[data-v-71796eba],.layer-2[data-v-71796eba]{width:80px;height:90px;bottom:430px}.layer-2[data-v-71796eba]{right:55%;z-index:2}.layer-3[data-v-71796eba]{background:#ae5621;width:160px;height:150px;left:50%;transform:translate(-50%);bottom:0;border-top-left-radius:15px;border-top-right-radius:15px;box-shadow:inset 10px 0 20px rgba(0,0,0,.3),inset -10px 0 20px rgba(0,0,0,.3),inset 0 20px 1px #138c24,10px 0 20px rgba(0,0,0,.4),-10px 0 20px rgba(0,0,0,.4);-webkit-animation:down-data-v-71796eba 1s infinite;animation:down-data-v-71796eba 1s infinite;-webkit-animation-direction:alternate;animation-direction:alternate;z-index:3}@-webkit-keyframes down-data-v-71796eba{to{height:105px}}@keyframes down-data-v-71796eba{to{height:105px}}.layer-4[data-v-71796eba]{width:80px;height:120px;left:60px;bottom:320px;z-index:4}.layer-5[data-v-71796eba]{width:100px;height:105px;background:#ae5621;bottom:0;border-top-left-radius:15px;border-top-right-radius:15px;box-shadow:inset 10px 0 20px rgba(0,0,0,.3),inset -10px 0 20px rgba(0,0,0,.3),inset 0 20px 1px #138c24,10px 0 20px rgba(0,0,0,.4),-10px 0 20px rgba(0,0,0,.4);-webkit-animation:move-2-data-v-71796eba 1.5s cubic-bezier(.11,.01,.67,-.11) infinite;animation:move-2-data-v-71796eba 1.5s cubic-bezier(.11,.01,.67,-.11) infinite;-webkit-animation-direction:alternate;animation-direction:alternate;z-index:5}@-webkit-keyframes move-2-data-v-71796eba{to{transform:translatex(50%)}}@keyframes move-2-data-v-71796eba{to{transform:translatex(50%)}}.layer-6[data-v-71796eba]{width:80px;height:90px;right:60px;bottom:210px;z-index:6}.layer-7[data-v-71796eba]{background:#ae5621;width:100px;height:70px;right:-1px;bottom:0;border-top-left-radius:20px;border-top-right-radius:20px;box-shadow:inset 10px 0 20px rgba(0,0,0,.4),inset -10px 0 20px rgba(0,0,0,.4),inset 0 20px 1px #138c24,10px 0 20px rgba(0,0,0,.4),-10px 0 20px rgba(0,0,0,.4);-webkit-animation:move-3-data-v-71796eba 1.5s cubic-bezier(.11,.01,.67,-.11) infinite;animation:move-3-data-v-71796eba 1.5s cubic-bezier(.11,.01,.67,-.11) infinite;-webkit-animation-direction:alternate;animation-direction:alternate;z-index:7}@-webkit-keyframes move-3-data-v-71796eba{to{transform:translate(-50%)}}@keyframes move-3-data-v-71796eba{to{transform:translate(-50%)}}.layer-8[data-v-71796eba]{background:#fff;width:90px;height:90px;border-radius:50%;box-shadow:inset 0 10px 10px rgba(0,0,0,.4);right:70px;bottom:60px;transform:translatex(30px) translatey(30px);z-index:8;display:none}.layer-8[data-v-71796eba]:after{left:47px;box-shadow:inset -10px 0 10px rgba(0,0,0,.4)}.layer-8[data-v-71796eba]:after,.layer-8[data-v-71796eba]:before{position:absolute;content:\"\";background:#fff;width:100px;height:100px;top:50px;border-radius:50%}.layer-8[data-v-71796eba]:before{left:-50px;box-shadow:inset 10px 0 10px rgba(0,0,0,.4)}.layer-9[data-v-71796eba]{background:#fff;width:90px;height:90px;border-radius:50%;box-shadow:inset 0 10px 10px rgba(0,0,0,.4);left:5px;bottom:10px;z-index:8;display:none}.layer-9[data-v-71796eba]:after{left:47px;box-shadow:inset -10px 0 10px rgba(0,0,0,.4)}.layer-9[data-v-71796eba]:after,.layer-9[data-v-71796eba]:before{position:absolute;content:\"\";background:#fff;width:100px;height:100px;top:50px;border-radius:50%}.layer-9[data-v-71796eba]:before{left:-50px;box-shadow:inset 10px 0 10px rgba(0,0,0,.4)}.layer-10[data-v-71796eba]{z-index:10}.main[data-v-71796eba]{position:relative}.phone[data-v-71796eba]{position:absolute;transform:perspective(1500px) rotateY(40deg) rotateX(30deg);transform-style:preserve-3d;transition:.5s}.main:hover .phone[data-v-71796eba]{transform:perspective(1500px) rotateY(0deg) rotateX(0deg);overflow:hidden}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PhoneAnimated.vue?vue&type=template&id=71796eba&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_vm._ssrNode("<div class=\"phone\" data-v-71796eba><div class=\"layer-0\" data-v-71796eba></div><div class=\"layer-1\" data-v-71796eba><div class=\"rabbit-1\" data-v-71796eba></div></div><div class=\"layer-2\" data-v-71796eba><div class=\"rabbit-2\" data-v-71796eba></div></div><div class=\"layer-3\" data-v-71796eba></div><div class=\"layer-4\" data-v-71796eba><div class=\"rabbit-3\" data-v-71796eba></div></div><div class=\"layer-5\" data-v-71796eba></div><div class=\"layer-6\" data-v-71796eba><div class=\"rabbit-4\" data-v-71796eba></div></div><div class=\"layer-7\" data-v-71796eba></div><div class=\"layer-8\" data-v-71796eba></div><div class=\"layer-9\" data-v-71796eba></div><div class=\"layer-10\" data-v-71796eba></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PhoneAnimated.vue?vue&type=template&id=71796eba&scoped=true&lang=pug&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PhoneAnimated.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "71796eba",
  "1c2dcb82"
  
)

/* harmony default export */ var PhoneAnimated = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=phone-animated.js.map