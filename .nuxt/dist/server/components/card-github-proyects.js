exports.ids = [2];
exports.modules = {

/***/ 46:
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

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGithubProyects_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGithubProyects_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGithubProyects_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGithubProyects_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardGithubProyects_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card__repo{background-color:#fff;min-width:260px;height:370px;background-image:linear-gradient(0deg,#5f72bd 0,#9b23ea);background-image:linear-gradient(0deg,#5f72bd 0,#23eae1);background-image:linear-gradient(0deg,#1d557a 0,#2c7eb6);box-shadow:10px 10px 25px rgba(0,0,0,.5);background:#fff;padding:10px;border-radius:5px;transition:.2s}.card__repo p,h4{color:#242424;text-align:center}.card__body{height:calc(100% - 50px);width:100%;display:flex;justify-content:center;align-items:center}.card__body canvas{max-height:90%;max-width:90%}.card__title{height:50px;display:grid;align-items:center;justify-items:center;place-items:center}.card__link{text-decoration:none}.card__link:hover .card__repo{transform:rotate(3deg);transition:.2s}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 72:
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

/***/ })

};;
//# sourceMappingURL=card-github-proyects.js.map