exports.ids = [19,5,6,7,8,9,10,11];
exports.modules = Array(20).concat([
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("e67e980c", content, true, context)
};

/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MButtonNav_vue_vue_type_style_index_0_id_f779fd46_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MButtonNav_vue_vue_type_style_index_0_id_f779fd46_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MButtonNav_vue_vue_type_style_index_0_id_f779fd46_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MButtonNav_vue_vue_type_style_index_0_id_f779fd46_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MButtonNav_vue_vue_type_style_index_0_id_f779fd46_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".boton__menu[data-v-f779fd46]{width:50px;height:50px;position:absolute;top:0;right:25px;display:none}@media(max-width:800px){.boton__menu[data-v-f779fd46]{display:block}menu[data-v-f779fd46]{border:none;cursor:pointer;display:flex;padding:0}.line[data-v-f779fd46]{fill:none;transition:stroke-dasharray .6s cubic-bezier(.4,0,.2,1),stroke-dashoffset .6s cubic-bezier(.4,0,.2,1)}.line[data-v-f779fd46],.line1[data-v-f779fd46]{stroke-width:6}.line1[data-v-f779fd46]{stroke-dasharray:60 207}.line2[data-v-f779fd46]{stroke-dasharray:60 60}.line2[data-v-f779fd46],.line3[data-v-f779fd46]{stroke-width:6}.line3[data-v-f779fd46]{stroke-dasharray:60 207}.opened .line1[data-v-f779fd46]{stroke-dasharray:90 207;stroke-dashoffset:-134;stroke-width:6}.opened .line2[data-v-f779fd46]{stroke-dasharray:1 60;stroke-dashoffset:-30;stroke-width:6}.opened .line3[data-v-f779fd46]{stroke-dasharray:90 207;stroke-dashoffset:-134;stroke-width:6}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MNavbarMenu.vue?vue&type=template&id=0b4ad77a&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"navbar__menu"},_vm._l((_vm.items),function(i){return _vm._ssrNode("<li class=\"navbar__list\">","</li>",[_vm._ssrNode("<div"+(_vm._ssrClass("nav-menu-animation",_vm.isNavOnTop ? 'nav-menu-animation-w' : 'nav-menu-animation-b'))+"></div>"),_c('nuxt-link',{staticClass:"navbar__link",class:_vm.isNavOnTop ? 'colornavOn' : 'colornavOff',attrs:{"to":i.route}},[_vm._v(_vm._s(i.name))])],2)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MNavbarMenu.vue?vue&type=template&id=0b4ad77a&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MNavbarMenu.vue?vue&type=script&lang=js&
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
/* harmony default export */ var MNavbarMenuvue_type_script_lang_js_ = ({
  props: {
    isNavOnTop: {
      type: Boolean
    }
  },

  data() {
    return {
      items: [{
        name: "Home",
        route: "/"
      }, {
        name: "Proyects",
        route: "/proyects"
      }, {
        name: "Blog",
        route: "/blog"
      }, {
        name: "Gallery",
        route: "/gallery"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/MNavbarMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MNavbarMenuvue_type_script_lang_js_ = (MNavbarMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MNavbarMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MNavbarMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0c29d0ed"
  
)

/* harmony default export */ var MNavbarMenu = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MButtonNav.vue?vue&type=template&id=f779fd46&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"boton__menu",on:{"click":_vm.toggleOpen}},[_vm._ssrNode("<div onclick=\"this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))\" aria-label=\"Main Menu\" class=\"menu\" data-v-f779fd46><svg width=\"50\" height=\"50\" viewBox=\"0 0 100 100\" data-v-f779fd46><path"+(_vm._ssrAttr("stroke",_vm.color))+" d=\"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058\" class=\"line line1\" data-v-f779fd46></path> <path"+(_vm._ssrAttr("stroke",_vm.color))+" d=\"M 20,50 H 80\" class=\"line line2\" data-v-f779fd46></path> <path"+(_vm._ssrAttr("stroke",_vm.color))+" d=\"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942\" class=\"line line3\" data-v-f779fd46></path></svg></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MButtonNav.vue?vue&type=template&id=f779fd46&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MButtonNav.vue?vue&type=script&lang=js&
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
/* harmony default export */ var MButtonNavvue_type_script_lang_js_ = ({
  props: {
    isOpen: Boolean,
    color: {
      type: String,
      default: "#fff"
    }
  },

  data() {
    return {};
  },

  methods: {
    toggleOpen() {
      this.$emit('toggleOpen');
    }

  }
});
// CONCATENATED MODULE: ./components/MButtonNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MButtonNavvue_type_script_lang_js_ = (MButtonNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MButtonNav.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(22)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MButtonNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f779fd46",
  "3f5e34ba"
  
)

/* harmony default export */ var MButtonNav = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MHeaderSvg_vue_vue_type_style_index_0_id_57cf60c2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MHeaderSvg_vue_vue_type_style_index_0_id_57cf60c2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MHeaderSvg_vue_vue_type_style_index_0_id_57cf60c2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MHeaderSvg_vue_vue_type_style_index_0_id_57cf60c2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MHeaderSvg_vue_vue_type_style_index_0_id_57cf60c2_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".path1[data-v-57cf60c2]{fill:#8526dd;-webkit-animation:pathUno-data-v-57cf60c2 6s linear infinite;animation:pathUno-data-v-57cf60c2 6s linear infinite;-webkit-animation-direction:alternate;animation-direction:alternate}.path2[data-v-57cf60c2]{fill:#fff;-webkit-animation:pathUno-data-v-57cf60c2 6s linear infinite;animation:pathUno-data-v-57cf60c2 6s linear infinite;animation-direction:alternate-reverse}@-webkit-keyframes pathUno-data-v-57cf60c2{0%{fill:#1d557a;transform:translate(0)}to{fill:#2c7eb6;transform:translate(100px,100px)}}@keyframes pathUno-data-v-57cf60c2{0%{fill:#1d557a;transform:translate(0)}to{fill:#2c7eb6;transform:translate(100px,100px)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MNavbar.vue?vue&type=template&id=6fc187e8&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar",class:[_vm.isNavOnTop ? 'navOn' : 'navOff']},[_vm._ssrNode("<div class=\"navbar__title\">","</div>",[_c('nuxt-link',{staticClass:"navbar__link-home link",class:_vm.isNavOnTop ? 'navbar__title-b' : 'navbar__title-w',attrs:{"to":"/"}},[_vm._v("MayderC ")])],1),_c('m-navbar-menu',{class:[_vm.isNavOnTop ? 'navOn' : 'navOff', _vm.isMenuOpen ? 'showMenuMovil' : 'hideMenuMovil'],attrs:{"isNavOnTop":_vm.isNavOnTop}}),_c('m-button-nav',{attrs:{"isOpen":_vm.isMenuOpen,"color":_vm.colorButton},on:{"toggleOpen":_vm.show}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MNavbar.vue?vue&type=template&id=6fc187e8&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MNavbar.vue?vue&type=script&lang=js&
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
/* harmony default export */ var MNavbarvue_type_script_lang_js_ = ({
  data() {
    return {
      isNavOnTop: true,
      isMenuOpen: false,
      colorButton: "#fff"
    };
  },

  mounted() {
    if (false) {}
  },

  methods: {
    onScrollNavbarColor() {
      if (window.scrollY > 95) {
        this.isNavOnTop = false;
        this.colorButton = "#222222";
      } else {
        this.isNavOnTop = true;
        this.colorButton = "#fff";
      }
    },

    show() {
      this.isMenuOpen = !this.isMenuOpen;
    }

  }
});
// CONCATENATED MODULE: ./components/MNavbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MNavbarvue_type_script_lang_js_ = (MNavbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MNavbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MNavbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "68d88c24"
  
)

/* harmony default export */ var MNavbar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MNavbarMenu: __webpack_require__(24).default,MButtonNav: __webpack_require__(25).default})


/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/as.30a2952.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fly.328cd78.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/html.71184de.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0iIzIxOTZGMyIgZD0iTTEgMGwxLjI3NSAxNC40TDggMTZsNS43MjMtMS41OTlMMTUgMHoiLz48cGF0aCBmaWxsPSIjRkFGQUZBIiBkPSJNMTIuMjc0IDQuNzA5bC0uMTYxIDEuODA5LS40ODYgNS40MjNMOCAxMi45NDRsLS4wMDMuMDAxLTMuNjI1LTEuMDA0LS4yNTMtMi44MzZoMS43NzZsLjEzMiAxLjQ3MSAxLjk3MS41MzIuMDAxLS4wMDEgMS45NzQtLjUzMi4yNjktMi40NTEtNi4yMDguMDE3LS4xNzYtMS42NzYgNi41MzMtLjA3Ny4xMzItMS43OTQtNi44NC4wMTktLjExNS0xLjY2OWg4Ljg2NHoiLz48L3N2Zz4="

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/javascript.fd46ca4.svg";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjIyMXB4IiB2aWV3Qm94PSIwIDAgMjU2IDIyMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjA0LjgsMCBMMjU2LDAgTDEyOCwyMjAuOCBMMCwwIEw1MC41NiwwIEw5Ny45MiwwIEwxMjgsNTEuMiBMMTU3LjQ0LDAgTDIwNC44LDAgWiIgZmlsbD0iIzQxQjg4MyI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0wLDAgTDEyOCwyMjAuOCBMMjU2LDAgTDIwNC44LDAgTDEyOCwxMzIuNDggTDUwLjU2LDAgTDAsMCBaIiBmaWxsPSIjNDFCODgzIj48L3BhdGg+CgkJPHBhdGggZD0iTTUwLjU2LDAgTDEyOCwxMzMuMTIgTDIwNC44LDAgTDE1Ny40NCwwIEwxMjgsNTEuMiBMOTcuOTIsMCBMNTAuNTYsMCBaIiBmaWxsPSIjMzU0OTVFIj48L3BhdGg+Cgk8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/git-icon.fd38164.svg";

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("5a723dec", content, true, context)
};

/***/ }),
/* 39 */
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


/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/youtube-icon.761cc90.svg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/github-octocat.8c28466.svg";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/linkedin-icon.9bd7e64.svg";

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MFooter_vue_vue_type_style_index_0_id_3153d0de_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MFooter_vue_vue_type_style_index_0_id_3153d0de_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MFooter_vue_vue_type_style_index_0_id_3153d0de_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MFooter_vue_vue_type_style_index_0_id_3153d0de_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MFooter_vue_vue_type_style_index_0_id_3153d0de_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".footer[data-v-3153d0de]{background-color:#f5f4fd;margin-top:90px;border-top:5px solid #2975a8}.text--top[data-v-3153d0de]{font-weight:700;font-size:16px}.text--bottom[data-v-3153d0de],.text--top[data-v-3153d0de]{text-align:center;padding:10px}.footer__container[data-v-3153d0de]{display:flex;justify-content:space-evenly}.footer__item[data-v-3153d0de]{width:50px}.footer__item>img[data-v-3153d0de]{max-width:100%;transition:.2s}.footer__item:hover img[data-v-3153d0de]{transform:translateY(-10px);transition:.2s}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("a26901dc", content, true, context)
};

/***/ }),
/* 53 */,
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MFooter.vue?vue&type=template&id=3153d0de&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_vm._ssrNode("<div class=\"footer__text text--top\" data-v-3153d0de><p data-v-3153d0de>dcybmay@gmail.com</p></div><div class=\"footer__container\" data-v-3153d0de><a href class=\"footer__item\" data-v-3153d0de><img"+(_vm._ssrAttr("src",__webpack_require__(47)))+" alt data-v-3153d0de></a><a href class=\"footer__item\" data-v-3153d0de><img"+(_vm._ssrAttr("src",__webpack_require__(48)))+" alt data-v-3153d0de></a><a href class=\"footer__item\" data-v-3153d0de><img"+(_vm._ssrAttr("src",__webpack_require__(49)))+" alt data-v-3153d0de></a></div><div class=\"footer__text text--bottom\" data-v-3153d0de><p data-v-3153d0de>Desarrollada por MayderC usando Nuxtjs</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MFooter.vue?vue&type=template&id=3153d0de&scoped=true&lang=pug&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MFooter.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3153d0de",
  "2ce195f9"
  
)

/* harmony default export */ var MFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, exports) {

const URL = 'http://localhost:3000/api/contact';

const sendContactForm = async data => {
  const {
    contact
  } = data;
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      contact
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
};

const getContacts = async () => {
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (error) {
    return false;
  }
};

module.exports = {
  sendContactForm,
  getContacts
};

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MContact_vue_vue_type_style_index_0_id_f0c4cb18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MContact_vue_vue_type_style_index_0_id_f0c4cb18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MContact_vue_vue_type_style_index_0_id_f0c4cb18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MContact_vue_vue_type_style_index_0_id_f0c4cb18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MContact_vue_vue_type_style_index_0_id_f0c4cb18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(68);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(69);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h2[data-v-f0c4cb18],p[data-v-f0c4cb18]{margin:0;color:#fff;text-align:center}.main[data-v-f0c4cb18]{justify-content:center}.form[data-v-f0c4cb18],.main[data-v-f0c4cb18]{display:flex}.form[data-v-f0c4cb18]{border-radius:10px;background:#f5f4fd;background-image:linear-gradient(-20deg,#2b5876,#4e4376);box-shadow:10px 10px 30px rgba(0,0,0,.5);width:750px;transition:.3s}.form__body[data-v-f0c4cb18]{display:flex;flex-direction:column;justify-content:space-between}.form__footer[data-v-f0c4cb18]{position:relative}.item[data-v-f0c4cb18]{padding:20px;transition:.3s}.item--img[data-v-f0c4cb18]{width:45%;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;background-position:-60px;border-bottom-left-radius:10px;border-top-left-radius:10px;border-radius:10px;height:320px}.item--form[data-v-f0c4cb18]{width:55%;height:320px}.item__msg>p[data-v-f0c4cb18]{font-size:16px;color:#000;font-weight:700}.form__text[data-v-f0c4cb18]{box-sizing:border-box}textarea[data-v-f0c4cb18]{max-width:100%;box-sizing:border-box;background:rgba(0,0,0,.4);background:#f5f4fd;color:#f5f4fd;color:#000;padding:10px;font-family:\"Quicksand\",sans-serif}.submit[data-v-f0c4cb18],textarea[data-v-f0c4cb18]{font-size:16px;border-radius:10px;border:0}.submit[data-v-f0c4cb18]{background:#228d73;padding:8px 20px;outline:0;display:block;text-align:center;color:#f5f4fd;width:100%;cursor:pointer}.submit[data-v-f0c4cb18]:hover{background:#2ab493}#email[data-v-f0c4cb18],textarea[data-v-f0c4cb18]:focus{outline:none}#email[data-v-f0c4cb18]{background:#f5f4fd;box-sizing:border-box;border:0;padding:10px;border-radius:10px;width:100%;max-width:100%;font-size:16px}.section:hover .form[data-v-f0c4cb18]{transform:perspective(1500px) rotatex(0deg) rotatey(0deg)}.form__email[data-v-f0c4cb18],.form__footer[data-v-f0c4cb18]{padding:20px 0}@media (min-width:900px){.form[data-v-f0c4cb18]{transform:perspective(1500px) rotatey(30deg) rotatex(20deg)}}@media (max-width:900px){.main[data-v-f0c4cb18]{justify-content:center}.form[data-v-f0c4cb18],.main[data-v-f0c4cb18]{display:flex}.form[data-v-f0c4cb18]{flex-direction:column;width:400px}.form[data-v-f0c4cb18],.item[data-v-f0c4cb18]{transition:.3s}.item[data-v-f0c4cb18]{width:100%}}@media (max-width:520px){.form[data-v-f0c4cb18]{width:300px;transition:.3s}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contact.e3dfd03.jpg";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("60835984", content, true, context)
};

/***/ }),
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MContact.vue?vue&type=template&id=f0c4cb18&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"main"},[_vm._ssrNode("<section class=\"section\" data-v-f0c4cb18><form id=\"form\" action class=\"form\" data-v-f0c4cb18><div class=\"item  item--img\" data-v-f0c4cb18><div class=\"item__msg\" data-v-f0c4cb18><p data-v-f0c4cb18>"+_vm._ssrEscape(" "+_vm._s(_vm.statusForm)+" ")+"</p></div></div> <div class=\"item  item--form\" data-v-f0c4cb18><div class=\"form__body\" data-v-f0c4cb18><div class=\"form__email\" data-v-f0c4cb18><label for=\"email\" data-v-f0c4cb18></label> <input id=\"email\" type=\"email\" required=\"required\" placeholder=\"@Email\""+(_vm._ssrAttr("value",(_vm.email)))+" data-v-f0c4cb18></div> <div class=\"form__text\" data-v-f0c4cb18><textarea id=\"msg\" name required=\"required\" cols=\"45\" rows=\"6\" placeholder=\"Mensaje...\" data-v-f0c4cb18>"+_vm._ssrEscape(_vm._s(_vm.msg))+"</textarea></div> <div class=\"form__footer\" data-v-f0c4cb18><span id=\"enviar\" class=\"submit\" data-v-f0c4cb18>Enviar</span></div></div></div></form></section>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MContact.vue?vue&type=template&id=f0c4cb18&scoped=true&

// EXTERNAL MODULE: ./fetch-request/index.js
var fetch_request = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MContact.vue?vue&type=script&lang=js&
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

/* harmony default export */ var MContactvue_type_script_lang_js_ = ({
  name: "MContact",

  data() {
    return {
      email: "",
      msg: "",
      statusForm: ""
    };
  },

  methods: {
    sendData() {
      const body = {
        contact: {
          email: this.email,
          msg: this.msg
        }
      };

      if (this.checkInputs()) {
        Object(fetch_request["sendContactForm"])(body).then(res => {
          if (res.error) {
            this.printMsg("Error al enviar");
            return;
          }

          this.printMsg("Enviado");
          this.clearInputs();
        }).catch();
      }
    },

    checkInputs() {
      if (this.isMSG() && this.isEmail()) {
        return true;
      } else {
        if (!this.isMSG()) {
          this.printMsg("El mensaje es muy corto");
        }

        if (!this.isEmail()) {
          this.printMsg("El email no es valido");
        }

        return false;
      }
    },

    isMSG() {
      if (this.msg.length > 5) {
        return true;
      } else {
        return false;
      }
    },

    isEmail() {
      if (!this.email.includes('@') || !this.email.includes('.')) {
        return false;
      } else {
        return true;
      }
    },

    printMsg(text) {
      this.statusForm = text;
      setTimeout(() => {
        this.statusForm = '';
      }, 2500);
    },

    clearInputs() {
      this.msg = '';
      this.email = '';
    }

  }
});
// CONCATENATED MODULE: ./components/MContact.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MContactvue_type_script_lang_js_ = (MContactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MContact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MContactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f0c4cb18",
  "32e6bc32"
  
)

/* harmony default export */ var MContact = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about.fb96777.svg";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nodejs.e555728.svg";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/express.066f8b5.svg";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nuxt.5d1ebdf.svg";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mysql-1.836929c.svg";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mongodb.153b7b4.svg";

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{min-height:100vh;margin:0;font-family:\"Quicksand\",sans-serif;background:#242424}a,h1,h2,h3,h4,li,p,ul{margin:0;padding:0}*,:after,:before{box-sizing:border-box}.link{text-decoration:none}.navbar{height:50px;width:100%;display:flex;justify-content:space-between;align-items:center;padding:0 40px}.navbar__title{height:100%}.navbar__link-home{height:100%;display:flex;align-items:center}@media(max-width:800px){.navbar{display:block;padding:0 20px}}.navbar{position:fixed;z-index:1}.navOn{background:#222;color:#f6f8ff;transition:.2s}.navbar__title-b{color:#fff}.navOff{background:#f5f4fd;color:#2b2b2b;transition:.2s}.navbar__title-w{color:#000}.navbar__link-home{font-size:25px;font-weight:700}.navbar__menu{height:50px;display:flex}.navbar__list{list-style:none;position:relative;display:flex;justify-content:center}.navbar__link{display:flex;height:50px;align-items:center;text-decoration:none;padding:0 15px;transition:.2s;z-index:10}.nav-menu-animation{width:0;height:5px;position:absolute;top:40px;transition:.2s;-z-index:-10}.navbar__list:hover .nav-menu-animation{width:75%;transition:.2s}.navbar__list:hover .navbar__link{transition:.2s}@media(max-width:800px){.navbar__menu{display:flex;flex-direction:column;align-items:center;z-index:2;overflow:hidden;padding:0;border-radius:10px}.showMenuMovil{height:250px}.hideMenuMovil{height:0}}.navbar__link{font-size:23px;font-weight:700}.nav-menu-animation-w{background:#faf6f6;border-radius:5px}.nav-menu-animation-b{background:#252525;border-radius:5px}.colornavOff{color:#363636;transition:.2s}.colornavOn{color:#eee;transition:.2s}.header{height:100vh;position:relative;display:flex;justify-content:space-around;align-items:center;width:100%;overflow:hidden;flex-direction:column}.header__img_astro{position:absolute;z-index:1;width:150px;left:55%;-webkit-animation-name:astro;animation-name:astro;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;animation-direction:alternate-reverse}.header__img_astro .astro{transition:.5s}@-webkit-keyframes astro{0%{transform:translateY(-30px) rotate(-20deg) scale(1)}to{transform:translate(60px) rotate(3deg) scale(.8)}}@keyframes astro{0%{transform:translateY(-30px) rotate(-20deg) scale(1)}to{transform:translate(60px) rotate(3deg) scale(.8)}}.header__img_astro:hover .astro{transform:rotate(-180deg);transition:.5s}.astro{max-width:100%}.header__img_p{position:absolute;width:150px;-webkit-animation-name:fly;animation-name:fly;-webkit-animation-duration:10s;animation-duration:10s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;animation-direction:alternate-reverse}@-webkit-keyframes fly{0%{transform:scale(1)}10%{transform:scale(1.1) translate(-150px,-10px) rotate(0deg)}25%{transform:scale(1) translate(-200px,30px) rotate(15deg)}50%{transform:scale(.8) translate(-250px,-200px) rotate(-15deg)}75%{transform:scale(.8) translate(250px,-270px) rotate(-65deg)}to{transform:scale(.8) translate(-250px,170px) rotate(-165deg)}}@keyframes fly{0%{transform:scale(1)}10%{transform:scale(1.1) translate(-150px,-10px) rotate(0deg)}25%{transform:scale(1) translate(-200px,30px) rotate(15deg)}50%{transform:scale(.8) translate(-250px,-200px) rotate(-15deg)}75%{transform:scale(.8) translate(250px,-270px) rotate(-65deg)}to{transform:scale(.8) translate(-250px,170px) rotate(-165deg)}}.fly{max-width:100%}.header__text{font-size:1.5em;color:#fff;font-weight:700}.header__text,.header__title{text-align:center;text-shadow:10px 10px 25px #000}.header__title{color:#2e2e2e;color:#fff;font-size:4em}.header__img{position:absolute;-o-object-fit:cover;object-fit:cover;-o-object-position:left top;object-position:left top;z-index:-1;top:0}.header__skills{width:50%;align-self:self-start;box-sizing:border-box}.skills_text{color:#fff;font-weight:700;padding:20px;font-size:20px;text-align:center}.skills__items{display:flex;flex-wrap:wrap;justify-content:center;grid-gap:20px;gap:20px}.skill{min-width:60px;display:flex;flex-direction:column;align-items:center}.skill>img{height:30px;transition:.3s}.skill>p{color:#fff;font-weight:700;text-align:center;margin-top:15px}.skill:hover img{transform:translateY(-15px);transition:.3s}@media(min-width:800px){.header__img{max-width:100%}.header__skills{width:100%}}@media(max-width:800px){.header__img{height:50vh;left:0}.header__skills{width:100%}}.nav__ghost{height:50px}.skills__extras{margin-top:50px;display:flex;grid-gap:50px;gap:50px;background-color:#f5f4fd;padding:20px;border-radius:10px;flex-wrap:wrap;justify-content:center}.extra__section{width:90%;margin-left:auto;margin-right:auto;flex-direction:column;margin-top:90px}.extra,.extra__section{display:flex;align-items:center}.extra{justify-content:space-between;grid-gap:50px;gap:50px;height:50px}.extra>img{max-height:100%;transition:.3s}.extra>p{color:#222;font-size:1.5em;transition:.3s}.contact__section{margin-top:90px}.contacto__item{margin-top:90px;margin-bottom:90px}.extra:hover img,.extra:hover p{transform:translateY(-15px);transition:.3s}.about{width:90%;margin-left:auto;margin-right:auto}.subtitle{font-weight:700;font-size:2em}.sub__text,.subtitle{color:#fff;text-align:center}.sub__text{font-size:1.5em}.about__items{margin-top:50px;display:flex;flex-wrap:wrap;justify-content:center;grid-gap:50px;gap:50px}.about__item{width:45%;display:grid;align-items:center;justify-items:center;place-items:center}.about__img img{width:400px}.about__text{color:#fff;font-size:1.5em;text-align:center;width:70%}.about__description,.about__item{min-width:400px}.proyects{width:90%;margin:auto}.proyects__item{margin:90px 0}.proyects__item>section{margin-top:60px}.proyects__css{display:flex;justify-content:space-around;grid-gap:50px;gap:50px;min-width:200px;flex-wrap:wrap;margin:20px 0}.css__item{display:flex;align-items:center}.proyects__vue{grid-gap:60px;gap:60px;align-content:center}.proyects__github,.proyects__vue{display:flex;justify-content:center;flex-wrap:wrap}.proyects__github{grid-gap:40px;gap:40px}.subtitle-3{color:#fff;text-align:center;margin:30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=57813fef&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_c('m-navbar'),_vm._ssrNode("<div class=\"nav__ghost\"></div>"),_c('m-header',{attrs:{"title":"MayderC","description":"Frontend Developer Jr"}}),_vm._ssrNode("<section class=\"about\"><h2 class=\"subtitle\">Acerca de mi</h2><section class=\"about__items\"><article class=\"about__img about__item\"><img"+(_vm._ssrAttr("src",__webpack_require__(81)))+"></article><article class=\"about__description about__item\"><p class=\"about__text\">Soy un estudiante de TI &quot;Tecnologías de información&quot; que le gusta el desarrollo web. Estudio en la Universidad y aprendo diferentes tecnologias y lenguajes de programación.</p></article></section></section><section class=\"extra__section\"><h2 class=\"subtitle\">Otros Conocimientos</h2><p class=\"sub__text\">Basicos e intermedios</p><section class=\"skills__extras\"><article class=\"skill__Nodejs extra\"><img"+(_vm._ssrAttr("src",__webpack_require__(82)))+"></article><article class=\"skill__Nodejs extra\"><img"+(_vm._ssrAttr("src",__webpack_require__(83)))+"></article><article class=\"skill__Nodejs extra\"><img"+(_vm._ssrAttr("src",__webpack_require__(84)))+"></article><article class=\"skill__Nodejs extra\"><img"+(_vm._ssrAttr("src",__webpack_require__(85)))+"></article><article class=\"skill__Nodejs extra\"><img"+(_vm._ssrAttr("src",__webpack_require__(86)))+"></article></section></section>"),_vm._ssrNode("<section class=\"contact__section\">","</section>",[_vm._ssrNode("<h2 class=\"subtitle\">Contacto</h2>"),_vm._ssrNode("<section class=\"contacto__item\">","</section>",[_c('m-contact')],1)],2),_c('m-footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=57813fef&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      name: ""
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0407a4e6"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MNavbar: __webpack_require__(28).default,MHeader: __webpack_require__(39).default,MContact: __webpack_require__(73).default,MFooter: __webpack_require__(54).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map