exports.ids = [8,9];
exports.modules = {

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("791485aa", content, true, context)
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MHeaderSvg_vue_vue_type_style_index_0_id_57cf60c2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MHeaderSvg_vue_vue_type_style_index_0_id_57cf60c2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MHeaderSvg_vue_vue_type_style_index_0_id_57cf60c2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MHeaderSvg_vue_vue_type_style_index_0_id_57cf60c2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MHeaderSvg_vue_vue_type_style_index_0_id_57cf60c2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".path1[data-v-57cf60c2]{fill:#8526dd;-webkit-animation:pathUno-data-v-57cf60c2 6s linear infinite;animation:pathUno-data-v-57cf60c2 6s linear infinite;-webkit-animation-direction:alternate;animation-direction:alternate}.path2[data-v-57cf60c2]{fill:#fff;-webkit-animation:pathUno-data-v-57cf60c2 6s linear infinite;animation:pathUno-data-v-57cf60c2 6s linear infinite;animation-direction:alternate-reverse}@-webkit-keyframes pathUno-data-v-57cf60c2{0%{fill:#1d557a;transform:translate(0)}to{fill:#2c7eb6;transform:translate(100px,100px)}}@keyframes pathUno-data-v-57cf60c2{0%{fill:#1d557a;transform:translate(0)}to{fill:#2c7eb6;transform:translate(100px,100px)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MHeaderSvg.vue?vue&type=template&id=57cf60c2&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"svg1",staticStyle:{"transform":"rotate(180deg)","transition":"0.3s"},attrs:{"id":"wave","xlink":"http://www.w3.org/1999/xlink","viewBox":"100 -130 1920 600","version":"1.1","xmlns":"http://www.w3.org/2000/svg"}},[_vm._ssrNode("<defs data-v-57cf60c2>","</defs>",[_c('linearGradient',{attrs:{"id":"sw-gradient-0","x1":"0","x2":"0","y1":"1","y2":"0"}})],1),_vm._ssrNode("<path d=\"M0,343L80,351.2C160,359,320,376,480,326.7C640,278,800,163,960,171.5C1120,180,1280,310,1440,302.2C1600,294,1760,147,1920,73.5C2080,0,2240,0,2400,16.3C2560,33,2720,65,2880,138.8C3040,212,3200,327,3360,351.2C3520,376,3680,310,3840,261.3C4000,212,4160,180,4320,212.3C4480,245,4640,343,4800,318.5C4960,294,5120,147,5280,81.7C5440,16,5600,33,5760,40.8C5920,49,6080,49,6240,49C6400,49,6560,49,6720,65.3C6880,82,7040,114,7200,171.5C7360,229,7520,310,7680,302.2C7840,294,8000,196,8160,130.7C8320,65,8480,33,8640,65.3C8800,98,8960,196,9120,253.2C9280,310,9440,327,9600,334.8C9760,343,9920,343,10080,351.2C10240,359,10400,376,10560,326.7C10720,278,10880,163,11040,106.2C11200,49,11360,49,11440,49L11520,49L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z\" class=\"path1\" style=\"transform: translate(0px, 0px); opacity: 1\" data-v-57cf60c2></path>"),_vm._ssrNode("<defs data-v-57cf60c2>","</defs>",[_c('linearGradient',{attrs:{"id":"sw-gradient-1","x1":"0","x2":"0","y1":"1","y2":"0"}})],1),_vm._ssrNode("<path d=\"M0,343L80,334.8C160,327,320,310,480,261.3C640,212,800,131,960,122.5C1120,114,1280,180,1440,245C1600,310,1760,376,1920,375.7C2080,376,2240,310,2400,269.5C2560,229,2720,212,2880,187.8C3040,163,3200,131,3360,106.2C3520,82,3680,65,3840,89.8C4000,114,4160,180,4320,179.7C4480,180,4640,114,4800,130.7C4960,147,5120,245,5280,310.3C5440,376,5600,408,5760,400.2C5920,392,6080,343,6240,302.2C6400,261,6560,229,6720,228.7C6880,229,7040,261,7200,236.8C7360,212,7520,131,7680,114.3C7840,98,8000,147,8160,155.2C8320,163,8480,131,8640,114.3C8800,98,8960,98,9120,138.8C9280,180,9440,261,9600,261.3C9760,261,9920,180,10080,196C10240,212,10400,327,10560,318.5C10720,310,10880,180,11040,163.3C11200,147,11360,245,11440,294L11520,343L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z\" class=\"path2\" style=\"transform: translate(0, 0px); opacity: 0.9\" data-v-57cf60c2></path>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MHeaderSvg.vue?vue&type=template&id=57cf60c2&scoped=true&lang=pug&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MHeaderSvg.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "57cf60c2",
  "a9db6aae"
  
)

/* harmony default export */ var MHeaderSvg = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/as.30a2952.png";

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fly.328cd78.png";

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/html.71184de.svg";

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0iIzIxOTZGMyIgZD0iTTEgMGwxLjI3NSAxNC40TDggMTZsNS43MjMtMS41OTlMMTUgMHoiLz48cGF0aCBmaWxsPSIjRkFGQUZBIiBkPSJNMTIuMjc0IDQuNzA5bC0uMTYxIDEuODA5LS40ODYgNS40MjNMOCAxMi45NDRsLS4wMDMuMDAxLTMuNjI1LTEuMDA0LS4yNTMtMi44MzZoMS43NzZsLjEzMiAxLjQ3MSAxLjk3MS41MzIuMDAxLS4wMDEgMS45NzQtLjUzMi4yNjktMi40NTEtNi4yMDguMDE3LS4xNzYtMS42NzYgNi41MzMtLjA3Ny4xMzItMS43OTQtNi44NC4wMTktLjExNS0xLjY2OWg4Ljg2NHoiLz48L3N2Zz4="

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/javascript.fd46ca4.svg";

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjIyMXB4IiB2aWV3Qm94PSIwIDAgMjU2IDIyMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjA0LjgsMCBMMjU2LDAgTDEyOCwyMjAuOCBMMCwwIEw1MC41NiwwIEw5Ny45MiwwIEwxMjgsNTEuMiBMMTU3LjQ0LDAgTDIwNC44LDAgWiIgZmlsbD0iIzQxQjg4MyI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0wLDAgTDEyOCwyMjAuOCBMMjU2LDAgTDIwNC44LDAgTDEyOCwxMzIuNDggTDUwLjU2LDAgTDAsMCBaIiBmaWxsPSIjNDFCODgzIj48L3BhdGg+CgkJPHBhdGggZD0iTTUwLjU2LDAgTDEyOCwxMzMuMTIgTDIwNC44LDAgTDE1Ny40NCwwIEwxMjgsNTEuMiBMOTcuOTIsMCBMNTAuNTYsMCBaIiBmaWxsPSIjMzU0OTVFIj48L3BhdGg+Cgk8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/git-icon.fd38164.svg";

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MHeader.vue?vue&type=template&id=21d37508&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header"},[_vm._ssrNode("<div class=\"header__item\"><h1 class=\"header__title\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1><p class=\"header__text\">"+_vm._ssrEscape(_vm._s(_vm.description))+"</p></div><div class=\"header__img_astro\"><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" class=\"astro\"></div><div class=\"header__img_p\"><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" class=\"fly\"></div><div class=\"header__skills\"><div class=\"skills_text\"><p>Conocimientos principales</p></div><div class=\"skills__items\"><div class=\"skill__html skill\"><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+"><p>HTML</p></div><div class=\"skill__css skill\"><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+"><p>CSS</p></div><div class=\"skill__js skill\"><img"+(_vm._ssrAttr("src",__webpack_require__(34)))+"><p>JavaScript</p></div><div class=\"skill__vue skill\"><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+"><p>Vuejs</p></div><div class=\"skill__git skill\"><img"+(_vm._ssrAttr("src",__webpack_require__(36)))+"><p>Git</p></div></div></div>"),_c('m-header-svg',{staticClass:"header__img"})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MHeader.vue?vue&type=template&id=21d37508&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MHeader.vue?vue&type=script&lang=js&
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
/* harmony default export */ var MHeadervue_type_script_lang_js_ = ({
  name: 'MHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/MHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MHeadervue_type_script_lang_js_ = (MHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MHeader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4e13f9eb"
  
)

/* harmony default export */ var MHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MHeaderSvg: __webpack_require__(29).default})


/***/ })

};;
//# sourceMappingURL=m-header.js.map