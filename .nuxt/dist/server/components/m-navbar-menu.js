exports.ids = [11];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=m-navbar-menu.js.map