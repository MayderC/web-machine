exports.ids = [10,5,11];
exports.modules = {

/***/ 20:
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

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MButtonNav_vue_vue_type_style_index_0_id_f779fd46_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MButtonNav_vue_vue_type_style_index_0_id_f779fd46_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MButtonNav_vue_vue_type_style_index_0_id_f779fd46_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MButtonNav_vue_vue_type_style_index_0_id_f779fd46_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MButtonNav_vue_vue_type_style_index_0_id_f779fd46_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".boton__menu[data-v-f779fd46]{width:50px;height:50px;position:absolute;top:0;right:25px;display:none}@media(max-width:800px){.boton__menu[data-v-f779fd46]{display:block}menu[data-v-f779fd46]{border:none;cursor:pointer;display:flex;padding:0}.line[data-v-f779fd46]{fill:none;transition:stroke-dasharray .6s cubic-bezier(.4,0,.2,1),stroke-dashoffset .6s cubic-bezier(.4,0,.2,1)}.line[data-v-f779fd46],.line1[data-v-f779fd46]{stroke-width:6}.line1[data-v-f779fd46]{stroke-dasharray:60 207}.line2[data-v-f779fd46]{stroke-dasharray:60 60}.line2[data-v-f779fd46],.line3[data-v-f779fd46]{stroke-width:6}.line3[data-v-f779fd46]{stroke-dasharray:60 207}.opened .line1[data-v-f779fd46]{stroke-dasharray:90 207;stroke-dashoffset:-134;stroke-width:6}.opened .line2[data-v-f779fd46]{stroke-dasharray:1 60;stroke-dashoffset:-30;stroke-width:6}.opened .line3[data-v-f779fd46]{stroke-dasharray:90 207;stroke-dashoffset:-134;stroke-width:6}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 24:
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

/***/ 25:
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

/***/ 28:
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


/***/ })

};;
//# sourceMappingURL=m-navbar.js.map