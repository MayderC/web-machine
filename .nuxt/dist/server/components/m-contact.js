exports.ids = [6];
exports.modules = {

/***/ 52:
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

/***/ 65:
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

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MContact_vue_vue_type_style_index_0_id_f0c4cb18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MContact_vue_vue_type_style_index_0_id_f0c4cb18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MContact_vue_vue_type_style_index_0_id_f0c4cb18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MContact_vue_vue_type_style_index_0_id_f0c4cb18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MContact_vue_vue_type_style_index_0_id_f0c4cb18_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 67:
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

/***/ 68:
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

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/contact.e3dfd03.jpg";

/***/ }),

/***/ 73:
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

/***/ })

};;
//# sourceMappingURL=m-contact.js.map