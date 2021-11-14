exports.ids = [20,1,2,3,4,5,7,8,9,10,11,12,13];
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("aaaf5430", content, true, context)
};

/***/ }),
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("785f80b2", content, true, context)
};

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HandLink_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HandLink_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HandLink_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HandLink_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HandLink_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".link__emoji{color:#fff;font-size:17px;text-align:center;font-weight:700;cursor:pointer}.link__emoji>a{text-decoration:none;color:#65a6f0;color:hiherit}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
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
/* 44 */
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("59afa1fc", content, true, context)
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("78d3d440", content, true, context)
};

/***/ }),
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
/* 52 */,
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HandLink.vue?vue&type=template&id=0f90b269&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"link__emoji"},[_vm._ssrNode("<span style=\"font-size:20px;\">👉</span> <a"+(_vm._ssrAttr("href",_vm.href))+" target=\"_blank\">"+_vm._ssrEscape(_vm._s(_vm.text))+"</a>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HandLink.vue?vue&type=template&id=0f90b269&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HandLink.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var HandLinkvue_type_script_lang_js_ = ({
  name: 'HandLink',
  props: {
    text: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/HandLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HandLinkvue_type_script_lang_js_ = (HandLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HandLink.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HandLinkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3e8eff48"
  
)

/* harmony default export */ var HandLink = __webpack_exports__["default"] = (component.exports);

/***/ }),
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProyectCard_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProyectCard_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProyectCard_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProyectCard_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProyectCard_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card__proyect{width:600px;background-color:#191919;overflow:hidden;box-shadow:10px 10px 25px rgba(0,0,0,.5)}.card__proyect img{max-width:100%}.card__footer{display:flex;justify-content:space-around;grid-gap:30px;gap:30px;height:50px;align-items:center}@media(max-width:800px){.card__proyect{width:300px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneAnimated_vue_vue_type_style_index_0_id_71796eba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneAnimated_vue_vue_type_style_index_0_id_71796eba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneAnimated_vue_vue_type_style_index_0_id_71796eba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneAnimated_vue_vue_type_style_index_0_id_71796eba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhoneAnimated_vue_vue_type_style_index_0_id_71796eba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".phone[data-v-71796eba]{position:relative}.corner[data-v-71796eba],.layer10[data-v-71796eba],.layer-0[data-v-71796eba],.layer-1[data-v-71796eba],.layer-2[data-v-71796eba],.layer-3[data-v-71796eba],.layer-4[data-v-71796eba],.layer-5[data-v-71796eba],.layer-6[data-v-71796eba],.layer-7[data-v-71796eba],.layer-8[data-v-71796eba],.layer-9[data-v-71796eba]{position:absolute}.main[data-v-71796eba]{height:270px;width:160px}.phone[data-v-71796eba]{height:270px;min-width:160px;background:#702eaf;border:5px solid #2d2d2d;border-radius:20px;box-shadow:15px 20px 28px rgba(0,0,0,.5),0 0 20px rgba(0,0,0,.5);transition:1s;overflow:hidden;z-index:-1}.layer-0[data-v-71796eba]{background:#ff0;width:60px;height:60px;border-radius:50%;left:-10px;top:-10px;-webkit-animation:pulse-sun-data-v-71796eba 1s infinite;animation:pulse-sun-data-v-71796eba 1s infinite;-webkit-animation-direction:alternate;animation-direction:alternate;z-index:0}@-webkit-keyframes pulse-sun-data-v-71796eba{0%{opacity:.1}to{box-shadow:10px 10px 80px #ff0,-10px -10px 80px #ff0;transform:translatez(10px)}}@keyframes pulse-sun-data-v-71796eba{0%{opacity:.1}to{box-shadow:10px 10px 80px #ff0,-10px -10px 80px #ff0;transform:translatez(10px)}}.layer-1[data-v-71796eba]{position:absolute;left:55%;z-index:1}.layer-1[data-v-71796eba],.layer-2[data-v-71796eba]{width:80px;height:90px;bottom:430px}.layer-2[data-v-71796eba]{right:55%;z-index:2}.layer-3[data-v-71796eba]{background:#ae5621;width:160px;height:150px;left:50%;transform:translate(-50%);bottom:0;border-top-left-radius:15px;border-top-right-radius:15px;box-shadow:inset 10px 0 20px rgba(0,0,0,.3),inset -10px 0 20px rgba(0,0,0,.3),inset 0 20px 1px #138c24,10px 0 20px rgba(0,0,0,.4),-10px 0 20px rgba(0,0,0,.4);-webkit-animation:down-data-v-71796eba 1s infinite;animation:down-data-v-71796eba 1s infinite;-webkit-animation-direction:alternate;animation-direction:alternate;z-index:3}@-webkit-keyframes down-data-v-71796eba{to{height:105px}}@keyframes down-data-v-71796eba{to{height:105px}}.layer-4[data-v-71796eba]{width:80px;height:120px;left:60px;bottom:320px;z-index:4}.layer-5[data-v-71796eba]{width:100px;height:105px;background:#ae5621;bottom:0;border-top-left-radius:15px;border-top-right-radius:15px;box-shadow:inset 10px 0 20px rgba(0,0,0,.3),inset -10px 0 20px rgba(0,0,0,.3),inset 0 20px 1px #138c24,10px 0 20px rgba(0,0,0,.4),-10px 0 20px rgba(0,0,0,.4);-webkit-animation:move-2-data-v-71796eba 1.5s cubic-bezier(.11,.01,.67,-.11) infinite;animation:move-2-data-v-71796eba 1.5s cubic-bezier(.11,.01,.67,-.11) infinite;-webkit-animation-direction:alternate;animation-direction:alternate;z-index:5}@-webkit-keyframes move-2-data-v-71796eba{to{transform:translatex(50%)}}@keyframes move-2-data-v-71796eba{to{transform:translatex(50%)}}.layer-6[data-v-71796eba]{width:80px;height:90px;right:60px;bottom:210px;z-index:6}.layer-7[data-v-71796eba]{background:#ae5621;width:100px;height:70px;right:-1px;bottom:0;border-top-left-radius:20px;border-top-right-radius:20px;box-shadow:inset 10px 0 20px rgba(0,0,0,.4),inset -10px 0 20px rgba(0,0,0,.4),inset 0 20px 1px #138c24,10px 0 20px rgba(0,0,0,.4),-10px 0 20px rgba(0,0,0,.4);-webkit-animation:move-3-data-v-71796eba 1.5s cubic-bezier(.11,.01,.67,-.11) infinite;animation:move-3-data-v-71796eba 1.5s cubic-bezier(.11,.01,.67,-.11) infinite;-webkit-animation-direction:alternate;animation-direction:alternate;z-index:7}@-webkit-keyframes move-3-data-v-71796eba{to{transform:translate(-50%)}}@keyframes move-3-data-v-71796eba{to{transform:translate(-50%)}}.layer-8[data-v-71796eba]{background:#fff;width:90px;height:90px;border-radius:50%;box-shadow:inset 0 10px 10px rgba(0,0,0,.4);right:70px;bottom:60px;transform:translatex(30px) translatey(30px);z-index:8;display:none}.layer-8[data-v-71796eba]:after{left:47px;box-shadow:inset -10px 0 10px rgba(0,0,0,.4)}.layer-8[data-v-71796eba]:after,.layer-8[data-v-71796eba]:before{position:absolute;content:\"\";background:#fff;width:100px;height:100px;top:50px;border-radius:50%}.layer-8[data-v-71796eba]:before{left:-50px;box-shadow:inset 10px 0 10px rgba(0,0,0,.4)}.layer-9[data-v-71796eba]{background:#fff;width:90px;height:90px;border-radius:50%;box-shadow:inset 0 10px 10px rgba(0,0,0,.4);left:5px;bottom:10px;z-index:8;display:none}.layer-9[data-v-71796eba]:after{left:47px;box-shadow:inset -10px 0 10px rgba(0,0,0,.4)}.layer-9[data-v-71796eba]:after,.layer-9[data-v-71796eba]:before{position:absolute;content:\"\";background:#fff;width:100px;height:100px;top:50px;border-radius:50%}.layer-9[data-v-71796eba]:before{left:-50px;box-shadow:inset 10px 0 10px rgba(0,0,0,.4)}.layer-10[data-v-71796eba]{z-index:10}.main[data-v-71796eba]{position:relative}.phone[data-v-71796eba]{position:absolute;transform:perspective(1500px) rotateY(40deg) rotateX(30deg);transform-style:preserve-3d;transition:.5s}.main:hover .phone[data-v-71796eba]{transform:perspective(1500px) rotateY(0deg) rotateX(0deg);overflow:hidden}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleJump_vue_vue_type_style_index_0_id_9fb77718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleJump_vue_vue_type_style_index_0_id_9fb77718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleJump_vue_vue_type_style_index_0_id_9fb77718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleJump_vue_vue_type_style_index_0_id_9fb77718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleJump_vue_vue_type_style_index_0_id_9fb77718_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body[data-v-9fb77718]{background:#5043a7;width:100%;height:100vh;padding:0;margin:0}.container[data-v-9fb77718],body[data-v-9fb77718]{display:flex;justify-content:center;align-items:center}.container[data-v-9fb77718]{width:250px;height:200px;border-radius:15px;grid-gap:15px;gap:15px}.item[data-v-9fb77718]{background:#000;width:25px;height:25px;transform:translatey(10px);border-radius:50%;box-shadow:10px 10px 20px rgba(0,0,0,.5)}.item-1[data-v-9fb77718]{background-color:#ff3854}.item-1[data-v-9fb77718],.item-2[data-v-9fb77718]{-webkit-animation:jump-data-v-9fb77718 1.3s cubic-bezier(.79,.06,.28,1) infinite;animation:jump-data-v-9fb77718 1.3s cubic-bezier(.79,.06,.28,1) infinite}.item-2[data-v-9fb77718]{background-color:#fff852;-webkit-animation-delay:.1s;animation-delay:.1s}.item-3[data-v-9fb77718]{background-color:#1fb8ff;-webkit-animation:jump-data-v-9fb77718 1.3s cubic-bezier(.79,.06,.28,1) infinite;animation:jump-data-v-9fb77718 1.3s cubic-bezier(.79,.06,.28,1) infinite;-webkit-animation-delay:.2s;animation-delay:.2s}.item-4[data-v-9fb77718]{background-color:#1e84b3;-webkit-animation:jump-data-v-9fb77718 1.3s cubic-bezier(.79,.06,.28,1) infinite;animation:jump-data-v-9fb77718 1.3s cubic-bezier(.79,.06,.28,1) infinite;-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes jump-data-v-9fb77718{40%{transform:translatey(-70px)}60%{transform:translatey(10px)}70%{transform:translatey(0)}80%{transform:translatey(10px)}90%{transform:translatey(5px)}to{transform:translatey(10px)}}@keyframes jump-data-v-9fb77718{40%{transform:translatey(-70px)}60%{transform:translatey(10px)}70%{transform:translatey(0)}80%{transform:translatey(10px)}90%{transform:translatey(5px)}to{transform:translatey(10px)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarLoading_vue_vue_type_style_index_0_id_4ab4bac6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarLoading_vue_vue_type_style_index_0_id_4ab4bac6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarLoading_vue_vue_type_style_index_0_id_4ab4bac6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarLoading_vue_vue_type_style_index_0_id_4ab4bac6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BarLoading_vue_vue_type_style_index_0_id_4ab4bac6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body[data-v-4ab4bac6]{margin:0;height:100vh;background:#4b8fe6;align-items:center}.container[data-v-4ab4bac6],body[data-v-4ab4bac6]{display:flex;justify-content:center}.container[data-v-4ab4bac6]{width:200px;height:150px;position:relative;align-items:flex-end;grid-gap:5px;gap:5px;padding:20px}.layer-0[data-v-4ab4bac6]{background:#d1b347}.layer-0[data-v-4ab4bac6],.layer-1[data-v-4ab4bac6]{width:10px;height:10px;border-radius:50%;-webkit-animation:bar-anim-data-v-4ab4bac6 1s cubic-bezier(.25,.52,.8,.53) infinite alternate;animation:bar-anim-data-v-4ab4bac6 1s cubic-bezier(.25,.52,.8,.53) infinite alternate}.layer-1[data-v-4ab4bac6]{background:#d13232;-webkit-animation-delay:.1s;animation-delay:.1s}.layer-2[data-v-4ab4bac6]{background:#1dd150;-webkit-animation:bar-anim-data-v-4ab4bac6 .7s cubic-bezier(.25,.52,.8,.53) infinite alternate;animation:bar-anim-data-v-4ab4bac6 .7s cubic-bezier(.25,.52,.8,.53) infinite alternate;-webkit-animation-delay:.2s;animation-delay:.2s}.layer-2[data-v-4ab4bac6],.layer-3[data-v-4ab4bac6]{width:10px;height:10px;border-radius:50%}.layer-3[data-v-4ab4bac6]{background:#2837d1;-webkit-animation:bar-anim-data-v-4ab4bac6 1s cubic-bezier(.25,.52,.8,.53) infinite alternate;animation:bar-anim-data-v-4ab4bac6 1s cubic-bezier(.25,.52,.8,.53) infinite alternate;-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes bar-anim-data-v-4ab4bac6{to{border-radius:50px;height:100px}}@keyframes bar-anim-data-v-4ab4bac6{to{border-radius:50px;height:100px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGithubProyects_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGithubProyects_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGithubProyects_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGithubProyects_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGithubProyects_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card__repo{background-color:#fff;min-width:260px;height:370px;background-image:linear-gradient(0deg,#5f72bd 0,#9b23ea);background-image:linear-gradient(0deg,#5f72bd 0,#23eae1);background-image:linear-gradient(0deg,#1d557a 0,#2c7eb6);box-shadow:10px 10px 25px rgba(0,0,0,.5);background:#fff;padding:10px;border-radius:5px;transition:.2s}.card__repo p,h4{color:#242424;text-align:center}.card__body{height:calc(100% - 50px);width:100%;display:flex;justify-content:center;align-items:center}.card__body canvas{max-height:90%;max-width:90%}.card__title{height:50px;display:grid;align-items:center;justify-items:center;place-items:center}.card__link{text-decoration:none}.card__link:hover .card__repo{transform:rotate(3deg);transition:.2s}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProyectCard.vue?vue&type=template&id=11e627e8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"card__proyect"},[_vm._ssrNode("<div class=\"card__item\"><img"+(_vm._ssrAttr("src",_vm.img))+" alt></div> "),_vm._ssrNode("<div class=\"card__footer\">","</div>",[_c('hand-link',{staticClass:"card__footer__item",attrs:{"href":_vm.github,"text":"GitHub"}}),_vm._ssrNode(" "),_c('hand-link',{staticClass:"card__footer__item",attrs:{"href":_vm.live,"text":"Online"}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProyectCard.vue?vue&type=template&id=11e627e8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProyectCard.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ProyectCardvue_type_script_lang_js_ = ({
  name: 'ProyectCard',
  props: {
    img: {
      type: String,
      default: ''
    },
    live: {
      type: String,
      default: ''
    },
    github: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/ProyectCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProyectCardvue_type_script_lang_js_ = (ProyectCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ProyectCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProyectCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1b169a2a"
  
)

/* harmony default export */ var ProyectCard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HandLink: __webpack_require__(53).default})


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardGithubProyects.vue?vue&type=template&id=38f0f658&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"card__link",attrs:{"href":("https://github.com/MayderC/" + (_vm.repo.name)),"target":"_blank"}},[_vm._ssrNode("<section class=\"card__repo\"><div class=\"card__title\"><h4>"+_vm._ssrEscape(_vm._s(_vm.repo.name))+"</h4></div><div class=\"card__body\"><canvas"+(_vm._ssrAttr("id",_vm.repo.name))+" width=\"260\" height=\"340\"></canvas></div></section>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CardGithubProyects.vue?vue&type=template&id=38f0f658&lang=pug&

// EXTERNAL MODULE: external "chart.js"
var external_chart_js_ = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CardGithubProyects.vue?vue&type=script&lang=js&
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

/* harmony default export */ var CardGithubProyectsvue_type_script_lang_js_ = ({
  name: 'CardGithubProyects',
  props: {
    repo: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      colors: []
    };
  },

  mounted() {
    this.printChart();
  },

  methods: {
    getColorFrom(n) {
      const simbolos = "0123456789ABCDEF";
      let color = "#";
      const colors = [];

      for (let i = 0; i < n; i++) {
        color = "#";

        for (let j = 0; j < 6; j++) {
          color = color + simbolos[Math.floor(Math.random() * 16)];
        }

        colors.push(color);
      }

      return colors;
    },

    printChart() {
      const values = Object.values(this.repo.data).length;
      const colors = this.getColorFrom(values);
      this.colors = colors;
      this.generateChart();
    },

    generateChart() {
      const ctx = document.getElementById(this.repo.name).getContext('2d');
      const myChart = new external_chart_js_["Chart"](ctx, {
        type: 'doughnut',
        data: {
          labels: Object.keys(this.repo.data),
          datasets: [{
            data: Object.values(this.repo.data),
            backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)', 'rgba(255, 159, 64, 0.5)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              labels: {
                // This more specific font property overrides the global property
                font: {
                  size: 20
                }
              }
            },
            title: {
              text: "HOLLAA"
            }
          }
        }
      });
      console.log(myChart);
      return myChart;
    }

  }
});
// CONCATENATED MODULE: ./components/CardGithubProyects.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CardGithubProyectsvue_type_script_lang_js_ = (CardGithubProyectsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CardGithubProyects.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CardGithubProyectsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ae06358a"
  
)

/* harmony default export */ var CardGithubProyects = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 73 */,
/* 74 */
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

/***/ }),
/* 75 */
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

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BarLoading.vue?vue&type=template&id=4ab4bac6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"item layer-0\" data-v-4ab4bac6></div> <div class=\"item layer-1\" data-v-4ab4bac6></div> <div class=\"item layer-2\" data-v-4ab4bac6></div> <div class=\"item layer-3\" data-v-4ab4bac6></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BarLoading.vue?vue&type=template&id=4ab4bac6&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BarLoading.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4ab4bac6",
  "6c80fe28"
  
)

/* harmony default export */ var BarLoading = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/task.781d038.png";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/devfinder.10213a9.png";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rick.87085ef.png";

/***/ }),
/* 80 */
/***/ (function(module, exports) {

async function getRepos(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const nameRepos = data.map(d => d.name);
    return nameRepos;
  } catch (error) {//  console.log(error)
  }
}

function preparePromise(name) {
  const arrayPromises = [];
  const url3 = 'https://api.github.com/repos/MayderC';

  for (const i in name) {
    arrayPromises.push(fetch(`${url3}/${name[i]}/languages`).then(response => response.json()));
  }

  return arrayPromises;
}

function JustMyRepos(n) {
  if (n !== "uptask" && n !== "MayderC" && n !== "33-js-concepts" && n !== "CSS2020" && n !== "AspNetCore-Developer-Roadmap" && n !== "faztware") {
    return n;
  }
}

async function getPercent(url) {
  try {
    const names = await getRepos(url);
    let namesToPromises = [];
    let promises = []; //  Filtro de repos a omitir

    namesToPromises = names.filter(n => JustMyRepos(n));
    promises = preparePromise(namesToPromises);
    return {
      promises,
      namesToPromises
    };
  } catch (error) {//  console.log(error)
  }
}

module.exports = {
  getPercent
};

/***/ }),
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/proyects.vue?vue&type=template&id=57eed0e6&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_c('m-navbar'),_vm._ssrNode("<div class=\"nav__ghost\"></div>"),_c('m-header',{attrs:{"title":"Proyects","description":"Mi lista de proyectos"}}),_vm._ssrNode("<section class=\"proyects\">","</section>",[_vm._ssrNode("<h2 class=\"subtitle\">Mis proyectos</h2>"),_vm._ssrNode("<article class=\"proyects__item\">","</article>",[_vm._ssrNode("<h3 class=\"subtitle-3\">Proyectos en VueJs</h3>"),_vm._ssrNode("<section class=\"proyects__vue\">","</section>",[_vm._ssrNode("<section class=\"vue__item\">","</section>",[_c('proyect-card',{attrs:{"img":_vm.task}})],1),_vm._ssrNode("<section class=\"vue__item\">","</section>",[_c('proyect-card',{attrs:{"img":_vm.dev}})],1),_vm._ssrNode("<section class=\"vue__item\">","</section>",[_c('proyect-card',{attrs:{"img":_vm.rick}})],1)])],2),_vm._ssrNode("<article class=\"proyects__item\">","</article>",[_vm._ssrNode("<h3 class=\"subtitle-3\">Animaciones CSS  </h3>"),_c('hand-link',{attrs:{"href":"https://codepen.io/mayderc/pens/","text":"Mi codepen Link"}}),_vm._ssrNode("<section class=\"proyects__css\">","</section>",[_vm._ssrNode("<section class=\"css__item anim--phone\">","</section>",[_c('phone-animated')],1),_vm._ssrNode("<section class=\"css__item anim--Jump\">","</section>",[_c('circle-jump')],1),_vm._ssrNode("<section class=\"css__item anim--loading\">","</section>",[_c('bar-loading')],1)])],2),_vm._ssrNode("<article class=\"proyects__item\">","</article>",[_vm._ssrNode("<h3 class=\"subtitle-3\">Proyectos en Github</h3>"),_c('hand-link',{attrs:{"href":"https://codepen.io/mayderc/pens/","text":"Mi GitHub Link"}}),_vm._ssrNode("<section class=\"proyects__github\">","</section>",_vm._l((_vm.data),function(d){return _c('card-github-proyects',{key:d.name,attrs:{"repo":d}})}),1)],2)],2),_c('m-footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/proyects.vue?vue&type=template&id=57eed0e6&lang=pug&

// EXTERNAL MODULE: ./static/img/task.png
var task = __webpack_require__(77);
var task_default = /*#__PURE__*/__webpack_require__.n(task);

// EXTERNAL MODULE: ./static/img/devfinder.png
var devfinder = __webpack_require__(78);
var devfinder_default = /*#__PURE__*/__webpack_require__.n(devfinder);

// EXTERNAL MODULE: ./static/img/rick.png
var rick = __webpack_require__(79);
var rick_default = /*#__PURE__*/__webpack_require__.n(rick);

// EXTERNAL MODULE: ./fetch-request/github.js
var github = __webpack_require__(80);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/proyects.vue?vue&type=script&lang=js&
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
//




/* harmony default export */ var proyectsvue_type_script_lang_js_ = ({
  name: 'Proyects',

  data() {
    return {
      task: task_default.a,
      dev: devfinder_default.a,
      rick: rick_default.a,
      data: [{
        "name": "Bot-ChuckNorris",
        "data": {
          "Python": 2571
        }
      }, {
        "name": "breadLib-api-rest",
        "data": {
          "JavaScript": 19229,
          "HTML": 2777,
          "CSS": 1072
        }
      }, {
        "name": "devfinder",
        "data": {
          "Vue": 12629,
          "Sass": 3282,
          "JavaScript": 1018,
          "HTML": 848
        }
      }, {
        "name": "exchange",
        "data": {
          "Vue": 41013,
          "JavaScript": 2066,
          "HTML": 621,
          "CSS": 94
        }
      }, {
        "name": "gd-gx-web",
        "data": {
          "JavaScript": 4191,
          "Sass": 3651,
          "HTML": 1721
        }
      }, {
        "name": "ip-addres-tracker",
        "data": {
          "JavaScript": 2391,
          "Pug": 1804,
          "CSS": 877
        }
      }, {
        "name": "profile-card-component",
        "data": {
          "CSS": 1844,
          "HTML": 1600
        }
      }, {
        "name": "register-vue-component",
        "data": {
          "Vue": 2576
        }
      }, {
        "name": "rick-morty-frontend-vue",
        "data": {
          "Vue": 11903,
          "JavaScript": 1961,
          "HTML": 609
        }
      }, {
        "name": "SIGU-SA",
        "data": {
          "HTML": 14969,
          "CSS": 7418,
          "JavaScript": 5160
        }
      }, {
        "name": "taskapp-backend",
        "data": {
          "JavaScript": 9162,
          "Shell": 89
        }
      }, {
        "name": "taskapp-frontend",
        "data": {
          "Vue": 21156,
          "JavaScript": 5933,
          "HTML": 848
        }
      }, {
        "name": "test-front",
        "data": {
          "JavaScript": 8946,
          "HTML": 4972,
          "CSS": 2559
        }
      }, {
        "name": "vuejs-shop-example",
        "data": {
          "JavaScript": 2499,
          "CSS": 1806,
          "HTML": 974
        }
      }, {
        "name": "web-machine",
        "data": {
          "HTML": 25649,
          "CSS": 16242,
          "JavaScript": 10038
        }
      }]
    };
  },

  mounted() {//  this.getData()
  },

  methods: {
    async getData() {
      const url = "https://api.github.com/users/MayderC/repos";

      try {
        const {
          promises,
          namesToPromises
        } = await Object(github["getPercent"])(url);
        const infoArray = [];
        Promise.all(promises).then(languages => {
          for (const i in languages) {
            infoArray.push({
              name: namesToPromises[i],
              data: languages[i]
            });
          }

          this.data = infoArray;
        });
      } catch (error) {}
    }

  }
});
// CONCATENATED MODULE: ./pages/proyects.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_proyectsvue_type_script_lang_js_ = (proyectsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/proyects.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_proyectsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5d7e7d1e"
  
)

/* harmony default export */ var proyects = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MNavbar: __webpack_require__(28).default,MHeader: __webpack_require__(39).default,ProyectCard: __webpack_require__(71).default,HandLink: __webpack_require__(53).default,PhoneAnimated: __webpack_require__(74).default,CircleJump: __webpack_require__(75).default,BarLoading: __webpack_require__(76).default,CardGithubProyects: __webpack_require__(72).default,MFooter: __webpack_require__(54).default})


/***/ })
]);;
//# sourceMappingURL=proyects.js.map