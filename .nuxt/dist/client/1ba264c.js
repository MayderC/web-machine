(window.webpackJsonp=window.webpackJsonp||[]).push([[15,6],{219:function(t,e,r){var content=r(225);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(112).default)("aaaf5430",content,!0,{sourceMap:!1})},223:function(t,e,r){var content=r(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(112).default)("785f80b2",content,!0,{sourceMap:!1})},224:function(t,e,r){"use strict";r(219)},225:function(t,e,r){var n=r(111)(!1);n.push([t.i,".link__emoji{color:#fff;font-size:17px;text-align:center;font-weight:700;cursor:pointer}.link__emoji>a{text-decoration:none;color:#65a6f0;color:hiherit}",""]),t.exports=n},236:function(t,e,r){"use strict";r.r(e);var n={name:"HandLink",props:{text:{type:String,default:""},href:{type:String,default:""}}},o=(r(224),r(35)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"link__emoji"},[r("span",{staticStyle:{"font-size":"20px"}},[t._v("👉")]),t._v(" "),r("a",{attrs:{href:t.href,target:"_blank"}},[t._v(t._s(t.text))])])}),[],!1,null,null,null);e.default=component.exports},373:function(t,e,r){"use strict";r(223)},374:function(t,e,r){var n=r(111)(!1);n.push([t.i,".card__proyect{width:600px;background-color:#191919;overflow:hidden;box-shadow:10px 10px 25px rgba(0,0,0,.5)}.card__proyect img{max-width:100%}.card__footer{display:flex;justify-content:space-around;grid-gap:30px;gap:30px;height:50px;align-items:center}@media(max-width:800px){.card__proyect{width:300px}}",""]),t.exports=n},392:function(t,e,r){"use strict";r.r(e);var n={name:"ProyectCard",props:{img:{type:String,default:""},live:{type:String,default:""},github:{type:String,default:""}}},o=(r(373),r(35)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"card__proyect"},[r("div",{staticClass:"card__item"},[r("img",{attrs:{src:t.img,alt:""}})]),t._v(" "),r("div",{staticClass:"card__footer"},[r("hand-link",{staticClass:"card__footer__item",attrs:{href:t.github,text:"GitHub"}}),t._v(" "),r("hand-link",{staticClass:"card__footer__item",attrs:{href:t.live,text:"Online"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HandLink:r(236).default})}}]);