(window.webpackJsonp=window.webpackJsonp||[]).push([[21,7,8,9,10,11,12,13],{202:function(t,e,n){var content=n(205);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("e67e980c",content,!0,{sourceMap:!1})},203:function(t,e,n){var content=n(209);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("791485aa",content,!0,{sourceMap:!1})},204:function(t,e,n){"use strict";n(202)},205:function(t,e,n){var r=n(111)(!1);r.push([t.i,".boton__menu[data-v-f779fd46]{width:50px;height:50px;position:absolute;top:0;right:25px;display:none}@media(max-width:800px){.boton__menu[data-v-f779fd46]{display:block}menu[data-v-f779fd46]{border:none;cursor:pointer;display:flex;padding:0}.line[data-v-f779fd46]{fill:none;transition:stroke-dasharray .6s cubic-bezier(.4,0,.2,1),stroke-dashoffset .6s cubic-bezier(.4,0,.2,1)}.line[data-v-f779fd46],.line1[data-v-f779fd46]{stroke-width:6}.line1[data-v-f779fd46]{stroke-dasharray:60 207}.line2[data-v-f779fd46]{stroke-dasharray:60 60}.line2[data-v-f779fd46],.line3[data-v-f779fd46]{stroke-width:6}.line3[data-v-f779fd46]{stroke-dasharray:60 207}.opened .line1[data-v-f779fd46]{stroke-dasharray:90 207;stroke-dashoffset:-134;stroke-width:6}.opened .line2[data-v-f779fd46]{stroke-dasharray:1 60;stroke-dashoffset:-30;stroke-width:6}.opened .line3[data-v-f779fd46]{stroke-dasharray:90 207;stroke-dashoffset:-134;stroke-width:6}}",""]),t.exports=r},206:function(t,e,n){"use strict";n.r(e);var r={props:{isNavOnTop:{type:Boolean}},data:function(){return{items:[{name:"Home",route:"/"},{name:"Proyects",route:"/proyects"},{name:"Blog",route:"/blog"},{name:"Gallery",route:"/gallery"}]}}},o=n(35),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"navbar__menu"},t._l(t.items,(function(i){return n("li",{staticClass:"navbar__list"},[n("div",{staticClass:"nav-menu-animation",class:t.isNavOnTop?"nav-menu-animation-w":"nav-menu-animation-b"}),n("nuxt-link",{staticClass:"navbar__link",class:t.isNavOnTop?"colornavOn":"colornavOff",attrs:{to:i.route}},[t._v(t._s(i.name))])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},207:function(t,e,n){"use strict";n.r(e);var r={props:{isOpen:Boolean,color:{type:String,default:"#fff"}},data:function(){return{}},methods:{toggleOpen:function(){this.$emit("toggleOpen")}}},o=(n(204),n(35)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"boton__menu",on:{click:t.toggleOpen}},[n("div",{staticClass:"menu",attrs:{onclick:"this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))","aria-label":"Main Menu"}},[n("svg",{attrs:{width:"50",height:"50",viewBox:"0 0 100 100"}},[n("path",{staticClass:"line line1",attrs:{stroke:t.color,d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}}),t._v(" "),n("path",{staticClass:"line line2",attrs:{stroke:t.color,d:"M 20,50 H 80"}}),t._v(" "),n("path",{staticClass:"line line3",attrs:{stroke:t.color,d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"}})])])])}),[],!1,null,"f779fd46",null);e.default=component.exports},208:function(t,e,n){"use strict";n(203)},209:function(t,e,n){var r=n(111)(!1);r.push([t.i,".path1[data-v-57cf60c2]{fill:#8526dd;-webkit-animation:pathUno-data-v-57cf60c2 6s linear infinite;animation:pathUno-data-v-57cf60c2 6s linear infinite;-webkit-animation-direction:alternate;animation-direction:alternate}.path2[data-v-57cf60c2]{fill:#fff;-webkit-animation:pathUno-data-v-57cf60c2 6s linear infinite;animation:pathUno-data-v-57cf60c2 6s linear infinite;animation-direction:alternate-reverse}@-webkit-keyframes pathUno-data-v-57cf60c2{0%{fill:#1d557a;transform:translate(0)}to{fill:#2c7eb6;transform:translate(100px,100px)}}@keyframes pathUno-data-v-57cf60c2{0%{fill:#1d557a;transform:translate(0)}to{fill:#2c7eb6;transform:translate(100px,100px)}}",""]),t.exports=r},210:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{isNavOnTop:!0,isMenuOpen:!1,colorButton:"#fff"}},mounted:function(){window.onscroll=this.onScrollNavbarColor},methods:{onScrollNavbarColor:function(){window.scrollY>95?(this.isNavOnTop=!1,this.colorButton="#222222"):(this.isNavOnTop=!0,this.colorButton="#fff")},show:function(){this.isMenuOpen=!this.isMenuOpen}}},o=n(35),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar",class:[t.isNavOnTop?"navOn":"navOff"]},[n("div",{staticClass:"navbar__title"},[n("nuxt-link",{staticClass:"navbar__link-home link",class:t.isNavOnTop?"navbar__title-b":"navbar__title-w",attrs:{to:"/"}},[t._v("MayderC ")])],1),n("m-navbar-menu",{class:[t.isNavOnTop?"navOn":"navOff",t.isMenuOpen?"showMenuMovil":"hideMenuMovil"],attrs:{isNavOnTop:t.isNavOnTop}}),n("m-button-nav",{attrs:{isOpen:t.isMenuOpen,color:t.colorButton},on:{toggleOpen:t.show}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MNavbarMenu:n(206).default,MButtonNav:n(207).default})},211:function(t,e,n){"use strict";n.r(e);n(208);var r=n(35),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"svg1",staticStyle:{transform:"rotate(180deg)",transition:"0.3s"},attrs:{id:"wave",xlink:"http://www.w3.org/1999/xlink",viewBox:"100 -130 1920 600",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[e("defs",[e("linearGradient",{attrs:{id:"sw-gradient-0",x1:"0",x2:"0",y1:"1",y2:"0"}})],1),e("path",{staticClass:"path1",staticStyle:{transform:"translate(0px, 0px)",opacity:"1"},attrs:{d:"M0,343L80,351.2C160,359,320,376,480,326.7C640,278,800,163,960,171.5C1120,180,1280,310,1440,302.2C1600,294,1760,147,1920,73.5C2080,0,2240,0,2400,16.3C2560,33,2720,65,2880,138.8C3040,212,3200,327,3360,351.2C3520,376,3680,310,3840,261.3C4000,212,4160,180,4320,212.3C4480,245,4640,343,4800,318.5C4960,294,5120,147,5280,81.7C5440,16,5600,33,5760,40.8C5920,49,6080,49,6240,49C6400,49,6560,49,6720,65.3C6880,82,7040,114,7200,171.5C7360,229,7520,310,7680,302.2C7840,294,8000,196,8160,130.7C8320,65,8480,33,8640,65.3C8800,98,8960,196,9120,253.2C9280,310,9440,327,9600,334.8C9760,343,9920,343,10080,351.2C10240,359,10400,376,10560,326.7C10720,278,10880,163,11040,106.2C11200,49,11360,49,11440,49L11520,49L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"}}),e("defs",[e("linearGradient",{attrs:{id:"sw-gradient-1",x1:"0",x2:"0",y1:"1",y2:"0"}})],1),e("path",{staticClass:"path2",staticStyle:{transform:"translate(0, 0px)",opacity:"0.9"},attrs:{d:"M0,343L80,334.8C160,327,320,310,480,261.3C640,212,800,131,960,122.5C1120,114,1280,180,1440,245C1600,310,1760,376,1920,375.7C2080,376,2240,310,2400,269.5C2560,229,2720,212,2880,187.8C3040,163,3200,131,3360,106.2C3520,82,3680,65,3840,89.8C4000,114,4160,180,4320,179.7C4480,180,4640,114,4800,130.7C4960,147,5120,245,5280,310.3C5440,376,5600,408,5760,400.2C5920,392,6080,343,6240,302.2C6400,261,6560,229,6720,228.7C6880,229,7040,261,7200,236.8C7360,212,7520,131,7680,114.3C7840,98,8000,147,8160,155.2C8320,163,8480,131,8640,114.3C8800,98,8960,98,9120,138.8C9280,180,9440,261,9600,261.3C9760,261,9920,180,10080,196C10240,212,10400,327,10560,318.5C10720,310,10880,180,11040,163.3C11200,147,11360,245,11440,294L11520,343L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"}})])}),[],!1,null,"57cf60c2",null);e.default=component.exports},212:function(t,e,n){t.exports=n.p+"img/as.30a2952.png"},213:function(t,e,n){t.exports=n.p+"img/fly.328cd78.png"},214:function(t,e,n){t.exports=n.p+"img/html.71184de.svg"},215:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0iIzIxOTZGMyIgZD0iTTEgMGwxLjI3NSAxNC40TDggMTZsNS43MjMtMS41OTlMMTUgMHoiLz48cGF0aCBmaWxsPSIjRkFGQUZBIiBkPSJNMTIuMjc0IDQuNzA5bC0uMTYxIDEuODA5LS40ODYgNS40MjNMOCAxMi45NDRsLS4wMDMuMDAxLTMuNjI1LTEuMDA0LS4yNTMtMi44MzZoMS43NzZsLjEzMiAxLjQ3MSAxLjk3MS41MzIuMDAxLS4wMDEgMS45NzQtLjUzMi4yNjktMi40NTEtNi4yMDguMDE3LS4xNzYtMS42NzYgNi41MzMtLjA3Ny4xMzItMS43OTQtNi44NC4wMTktLjExNS0xLjY2OWg4Ljg2NHoiLz48L3N2Zz4="},216:function(t,e,n){t.exports=n.p+"img/javascript.fd46ca4.svg"},217:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjIyMXB4IiB2aWV3Qm94PSIwIDAgMjU2IDIyMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjA0LjgsMCBMMjU2LDAgTDEyOCwyMjAuOCBMMCwwIEw1MC41NiwwIEw5Ny45MiwwIEwxMjgsNTEuMiBMMTU3LjQ0LDAgTDIwNC44LDAgWiIgZmlsbD0iIzQxQjg4MyI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0wLDAgTDEyOCwyMjAuOCBMMjU2LDAgTDIwNC44LDAgTDEyOCwxMzIuNDggTDUwLjU2LDAgTDAsMCBaIiBmaWxsPSIjNDFCODgzIj48L3BhdGg+CgkJPHBhdGggZD0iTTUwLjU2LDAgTDEyOCwxMzMuMTIgTDIwNC44LDAgTDE1Ny40NCwwIEwxMjgsNTEuMiBMOTcuOTIsMCBMNTAuNTYsMCBaIiBmaWxsPSIjMzU0OTVFIj48L3BhdGg+Cgk8L2c+Cjwvc3ZnPgo="},218:function(t,e,n){t.exports=n.p+"img/git-icon.fd38164.svg"},220:function(t,e,n){var content=n(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("5a723dec",content,!0,{sourceMap:!1})},221:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header__img_astro"},[e("img",{staticClass:"astro",attrs:{src:n(212)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header__img_p"},[e("img",{staticClass:"fly",attrs:{src:n(213)}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header__skills"},[r("div",{staticClass:"skills_text"},[r("p",[t._v("Conocimientos principales")])]),r("div",{staticClass:"skills__items"},[r("div",{staticClass:"skill__html skill"},[r("img",{attrs:{src:n(214)}}),r("p",[t._v("HTML")])]),r("div",{staticClass:"skill__css skill"},[r("img",{attrs:{src:n(215)}}),r("p",[t._v("CSS")])]),r("div",{staticClass:"skill__js skill"},[r("img",{attrs:{src:n(216)}}),r("p",[t._v("JavaScript")])]),r("div",{staticClass:"skill__vue skill"},[r("img",{attrs:{src:n(217)}}),r("p",[t._v("Vuejs")])]),r("div",{staticClass:"skill__git skill"},[r("img",{attrs:{src:n(218)}}),r("p",[t._v("Git")])])])])}],o={name:"MHeader",props:{title:{type:String,default:""},description:{type:String,default:""}}},c=n(35),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__item"},[n("h1",{staticClass:"header__title"},[t._v(t._s(t.title))]),n("p",{staticClass:"header__text"},[t._v(t._s(t.description))])]),t._m(0),t._m(1),t._m(2),n("m-header-svg",{staticClass:"header__img"})],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{MHeaderSvg:n(211).default})},222:function(t,e){function n(t,e,n,r,o,c,l){try{var d=t[c](l),f=d.value}catch(t){return void n(t)}d.done?e(f):Promise.resolve(f).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,c){var l=t.apply(e,r);function d(t){n(l,o,c,d,f,"next",t)}function f(t){n(l,o,c,d,f,"throw",t)}d(void 0)}))}},t.exports.default=t.exports,t.exports.__esModule=!0},230:function(t,e,n){t.exports=n.p+"img/youtube-icon.761cc90.svg"},231:function(t,e,n){t.exports=n.p+"img/github-octocat.8c28466.svg"},232:function(t,e,n){t.exports=n.p+"img/linkedin-icon.9bd7e64.svg"},233:function(t,e,n){"use strict";n(220)},234:function(t,e,n){var r=n(111)(!1);r.push([t.i,".footer[data-v-3153d0de]{background-color:#f5f4fd;margin-top:90px;border-top:5px solid #2975a8}.text--top[data-v-3153d0de]{font-weight:700;font-size:16px}.text--bottom[data-v-3153d0de],.text--top[data-v-3153d0de]{text-align:center;padding:10px}.footer__container[data-v-3153d0de]{display:flex;justify-content:space-evenly}.footer__item[data-v-3153d0de]{width:50px}.footer__item>img[data-v-3153d0de]{max-width:100%;transition:.2s}.footer__item:hover img[data-v-3153d0de]{transform:translateY(-10px);transition:.2s}",""]),t.exports=r},235:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("a26901dc",content,!0,{sourceMap:!1})},372:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"footer__text text--top"},[r("p",[t._v("dcybmay@gmail.com")])]),r("div",{staticClass:"footer__container"},[r("a",{staticClass:"footer__item",attrs:{href:""}},[r("img",{attrs:{src:n(230),alt:""}})]),r("a",{staticClass:"footer__item",attrs:{href:""}},[r("img",{attrs:{src:n(231),alt:""}})]),r("a",{staticClass:"footer__item",attrs:{href:""}},[r("img",{attrs:{src:n(232),alt:""}})])]),r("div",{staticClass:"footer__text text--bottom"},[r("p",[t._v("Desarrollada por MayderC usando Nuxtjs")])])])}],o=(n(233),n(35)),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,"3153d0de",null);e.default=component.exports},383:function(t,e,n){var r=n(222);n(44),n(12);var o="http://localhost:3000/api/contact",c=function(){var t=r(regeneratorRuntime.mark((function t(data){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=data.contact,t.next=3,fetch(o,{method:"POST",body:JSON.stringify({contact:e}),headers:{"Content-Type":"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=r(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(o);case 3:return e=t.sent,t.next=6,e.json();case 6:return t.abrupt("return",t.sent);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",!1);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t.exports={sendContactForm:c,getContacts:l}},384:function(t,e,n){"use strict";n(235)},385:function(t,e,n){var r=n(111),o=n(386),c=n(387),l=r(!1),d=o(c);l.push([t.i,"h2[data-v-f0c4cb18],p[data-v-f0c4cb18]{margin:0;color:#fff;text-align:center}.main[data-v-f0c4cb18]{justify-content:center}.form[data-v-f0c4cb18],.main[data-v-f0c4cb18]{display:flex}.form[data-v-f0c4cb18]{border-radius:10px;background:#f5f4fd;background-image:linear-gradient(-20deg,#2b5876,#4e4376);box-shadow:10px 10px 30px rgba(0,0,0,.5);width:750px;transition:.3s}.form__body[data-v-f0c4cb18]{display:flex;flex-direction:column;justify-content:space-between}.form__footer[data-v-f0c4cb18]{position:relative}.item[data-v-f0c4cb18]{padding:20px;transition:.3s}.item--img[data-v-f0c4cb18]{width:45%;background-image:url("+d+');background-size:cover;background-position:-60px;border-bottom-left-radius:10px;border-top-left-radius:10px;border-radius:10px;height:320px}.item--form[data-v-f0c4cb18]{width:55%;height:320px}.item__msg>p[data-v-f0c4cb18]{font-size:16px;color:#000;font-weight:700}.form__text[data-v-f0c4cb18]{box-sizing:border-box}textarea[data-v-f0c4cb18]{max-width:100%;box-sizing:border-box;background:rgba(0,0,0,.4);background:#f5f4fd;color:#f5f4fd;color:#000;padding:10px;font-family:"Quicksand",sans-serif}.submit[data-v-f0c4cb18],textarea[data-v-f0c4cb18]{font-size:16px;border-radius:10px;border:0}.submit[data-v-f0c4cb18]{background:#228d73;padding:8px 20px;outline:0;display:block;text-align:center;color:#f5f4fd;width:100%;cursor:pointer}.submit[data-v-f0c4cb18]:hover{background:#2ab493}#email[data-v-f0c4cb18],textarea[data-v-f0c4cb18]:focus{outline:none}#email[data-v-f0c4cb18]{background:#f5f4fd;box-sizing:border-box;border:0;padding:10px;border-radius:10px;width:100%;max-width:100%;font-size:16px}.section:hover .form[data-v-f0c4cb18]{transform:perspective(1500px) rotatex(0deg) rotatey(0deg)}.form__email[data-v-f0c4cb18],.form__footer[data-v-f0c4cb18]{padding:20px 0}@media (min-width:900px){.form[data-v-f0c4cb18]{transform:perspective(1500px) rotatey(30deg) rotatex(20deg)}}@media (max-width:900px){.main[data-v-f0c4cb18]{justify-content:center}.form[data-v-f0c4cb18],.main[data-v-f0c4cb18]{display:flex}.form[data-v-f0c4cb18]{flex-direction:column;width:400px}.form[data-v-f0c4cb18],.item[data-v-f0c4cb18]{transition:.3s}.item[data-v-f0c4cb18]{width:100%}}@media (max-width:520px){.form[data-v-f0c4cb18]{width:300px;transition:.3s}}',""]),t.exports=l},386:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},387:function(t,e,n){t.exports=n.p+"img/contact.e3dfd03.jpg"},391:function(t,e,n){var content=n(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("60835984",content,!0,{sourceMap:!1})},394:function(t,e,n){"use strict";n.r(e);n(57),n(58),n(59);var r=n(383),o={name:"MContact",data:function(){return{email:"",msg:"",statusForm:""}},methods:{sendData:function(){var t=this,body={contact:{email:this.email,msg:this.msg}};this.checkInputs()&&Object(r.sendContactForm)(body).then((function(e){e.error?t.printMsg("Error al enviar"):(t.printMsg("Enviado"),t.clearInputs())})).catch()},checkInputs:function(){return!(!this.isMSG()||!this.isEmail())||(this.isMSG()||this.printMsg("El mensaje es muy corto"),this.isEmail()||this.printMsg("El email no es valido"),!1)},isMSG:function(){return this.msg.length>5},isEmail:function(){return!(!this.email.includes("@")||!this.email.includes("."))},printMsg:function(text){var t=this;this.statusForm=text,setTimeout((function(){t.statusForm=""}),2500)},clearInputs:function(){this.msg="",this.email=""}}},c=(n(384),n(35)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main"},[n("section",{staticClass:"section"},[n("form",{staticClass:"form",attrs:{id:"form",action:""}},[n("div",{staticClass:"item  item--img"},[n("div",{staticClass:"item__msg"},[n("p",[t._v(" "+t._s(t.statusForm)+" ")])])]),t._v(" "),n("div",{staticClass:"item  item--form"},[n("div",{staticClass:"form__body"},[n("div",{staticClass:"form__email"},[n("label",{attrs:{for:"email"}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",type:"email",required:"",placeholder:"@Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form__text"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{id:"msg",name:"",required:"",cols:"45",rows:"6",placeholder:"Mensaje..."},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form__footer"},[n("span",{staticClass:"submit",attrs:{id:"enviar"},on:{click:t.sendData}},[t._v("Enviar")])])])])])])])}),[],!1,null,"f0c4cb18",null);e.default=component.exports},403:function(t,e,n){t.exports=n.p+"img/about.fb96777.svg"},404:function(t,e,n){t.exports=n.p+"img/nodejs.e555728.svg"},405:function(t,e,n){t.exports=n.p+"img/express.066f8b5.svg"},406:function(t,e,n){t.exports=n.p+"img/nuxt.5d1ebdf.svg"},407:function(t,e,n){t.exports=n.p+"img/mysql-1.836929c.svg"},408:function(t,e,n){t.exports=n.p+"img/mongodb.153b7b4.svg"},409:function(t,e,n){"use strict";n(391)},410:function(t,e,n){var r=n(111)(!1);r.push([t.i,'body{min-height:100vh;margin:0;font-family:"Quicksand",sans-serif;background:#242424}a,h1,h2,h3,h4,li,p,ul{margin:0;padding:0}*,:after,:before{box-sizing:border-box}.link{text-decoration:none}.navbar{height:50px;width:100%;display:flex;justify-content:space-between;align-items:center;padding:0 40px}.navbar__title{height:100%}.navbar__link-home{height:100%;display:flex;align-items:center}@media(max-width:800px){.navbar{display:block;padding:0 20px}}.navbar{position:fixed;z-index:1}.navOn{background:#222;color:#f6f8ff;transition:.2s}.navbar__title-b{color:#fff}.navOff{background:#f5f4fd;color:#2b2b2b;transition:.2s}.navbar__title-w{color:#000}.navbar__link-home{font-size:25px;font-weight:700}.navbar__menu{height:50px;display:flex}.navbar__list{list-style:none;position:relative;display:flex;justify-content:center}.navbar__link{display:flex;height:50px;align-items:center;text-decoration:none;padding:0 15px;transition:.2s;z-index:10}.nav-menu-animation{width:0;height:5px;position:absolute;top:40px;transition:.2s;-z-index:-10}.navbar__list:hover .nav-menu-animation{width:75%;transition:.2s}.navbar__list:hover .navbar__link{transition:.2s}@media(max-width:800px){.navbar__menu{display:flex;flex-direction:column;align-items:center;z-index:2;overflow:hidden;padding:0;border-radius:10px}.showMenuMovil{height:250px}.hideMenuMovil{height:0}}.navbar__link{font-size:23px;font-weight:700}.nav-menu-animation-w{background:#faf6f6;border-radius:5px}.nav-menu-animation-b{background:#252525;border-radius:5px}.colornavOff{color:#363636;transition:.2s}.colornavOn{color:#eee;transition:.2s}.header{height:100vh;position:relative;display:flex;justify-content:space-around;align-items:center;width:100%;overflow:hidden;flex-direction:column}.header__img_astro{position:absolute;z-index:1;width:150px;left:55%;-webkit-animation-name:astro;animation-name:astro;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;animation-direction:alternate-reverse}.header__img_astro .astro{transition:.5s}@-webkit-keyframes astro{0%{transform:translateY(-30px) rotate(-20deg) scale(1)}to{transform:translate(60px) rotate(3deg) scale(.8)}}@keyframes astro{0%{transform:translateY(-30px) rotate(-20deg) scale(1)}to{transform:translate(60px) rotate(3deg) scale(.8)}}.header__img_astro:hover .astro{transform:rotate(-180deg);transition:.5s}.astro{max-width:100%}.header__img_p{position:absolute;width:150px;-webkit-animation-name:fly;animation-name:fly;-webkit-animation-duration:10s;animation-duration:10s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;animation-direction:alternate-reverse}@-webkit-keyframes fly{0%{transform:scale(1)}10%{transform:scale(1.1) translate(-150px,-10px) rotate(0deg)}25%{transform:scale(1) translate(-200px,30px) rotate(15deg)}50%{transform:scale(.8) translate(-250px,-200px) rotate(-15deg)}75%{transform:scale(.8) translate(250px,-270px) rotate(-65deg)}to{transform:scale(.8) translate(-250px,170px) rotate(-165deg)}}@keyframes fly{0%{transform:scale(1)}10%{transform:scale(1.1) translate(-150px,-10px) rotate(0deg)}25%{transform:scale(1) translate(-200px,30px) rotate(15deg)}50%{transform:scale(.8) translate(-250px,-200px) rotate(-15deg)}75%{transform:scale(.8) translate(250px,-270px) rotate(-65deg)}to{transform:scale(.8) translate(-250px,170px) rotate(-165deg)}}.fly{max-width:100%}.header__text{font-size:1.5em;color:#fff;font-weight:700}.header__text,.header__title{text-align:center;text-shadow:10px 10px 25px #000}.header__title{color:#2e2e2e;color:#fff;font-size:4em}.header__img{position:absolute;-o-object-fit:cover;object-fit:cover;-o-object-position:left top;object-position:left top;z-index:-1;top:0}.header__skills{width:50%;align-self:self-start;box-sizing:border-box}.skills_text{color:#fff;font-weight:700;padding:20px;font-size:20px;text-align:center}.skills__items{display:flex;flex-wrap:wrap;justify-content:center;grid-gap:20px;gap:20px}.skill{min-width:60px;display:flex;flex-direction:column;align-items:center}.skill>img{height:30px;transition:.3s}.skill>p{color:#fff;font-weight:700;text-align:center;margin-top:15px}.skill:hover img{transform:translateY(-15px);transition:.3s}@media(min-width:800px){.header__img{max-width:100%}.header__skills{width:100%}}@media(max-width:800px){.header__img{height:50vh;left:0}.header__skills{width:100%}}.nav__ghost{height:50px}.skills__extras{margin-top:50px;display:flex;grid-gap:50px;gap:50px;background-color:#f5f4fd;padding:20px;border-radius:10px;flex-wrap:wrap;justify-content:center}.extra__section{width:90%;margin-left:auto;margin-right:auto;flex-direction:column;margin-top:90px}.extra,.extra__section{display:flex;align-items:center}.extra{justify-content:space-between;grid-gap:50px;gap:50px;height:50px}.extra>img{max-height:100%;transition:.3s}.extra>p{color:#222;font-size:1.5em;transition:.3s}.contact__section{margin-top:90px}.contacto__item{margin-top:90px;margin-bottom:90px}.extra:hover img,.extra:hover p{transform:translateY(-15px);transition:.3s}.about{width:90%;margin-left:auto;margin-right:auto}.subtitle{font-weight:700;font-size:2em}.sub__text,.subtitle{color:#fff;text-align:center}.sub__text{font-size:1.5em}.about__items{margin-top:50px;display:flex;flex-wrap:wrap;justify-content:center;grid-gap:50px;gap:50px}.about__item{width:45%;display:grid;align-items:center;justify-items:center;place-items:center}.about__img img{width:400px}.about__text{color:#fff;font-size:1.5em;text-align:center;width:70%}.about__description,.about__item{min-width:400px}.proyects{width:90%;margin:auto}.proyects__item{margin:90px 0}.proyects__item>section{margin-top:60px}.proyects__css{display:flex;justify-content:space-around;grid-gap:50px;gap:50px;min-width:200px;flex-wrap:wrap;margin:20px 0}.css__item{display:flex;align-items:center}.proyects__vue{grid-gap:60px;gap:60px;align-content:center}.proyects__github,.proyects__vue{display:flex;justify-content:center;flex-wrap:wrap}.proyects__github{grid-gap:40px;gap:40px}.subtitle-3{color:#fff;text-align:center;margin:30px}',""]),t.exports=r},413:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"about"},[r("h2",{staticClass:"subtitle"},[t._v("Acerca de mi")]),r("section",{staticClass:"about__items"},[r("article",{staticClass:"about__img about__item"},[r("img",{attrs:{src:n(403)}})]),r("article",{staticClass:"about__description about__item"},[r("p",{staticClass:"about__text"},[t._v('Soy un estudiante de TI "Tecnologías de información" que le gusta el desarrollo web. Estudio en la Universidad y aprendo diferentes tecnologias y lenguajes de programación.')])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"extra__section"},[r("h2",{staticClass:"subtitle"},[t._v("Otros Conocimientos")]),r("p",{staticClass:"sub__text"},[t._v("Basicos e intermedios")]),r("section",{staticClass:"skills__extras"},[r("article",{staticClass:"skill__Nodejs extra"},[r("img",{attrs:{src:n(404)}})]),r("article",{staticClass:"skill__Nodejs extra"},[r("img",{attrs:{src:n(405)}})]),r("article",{staticClass:"skill__Nodejs extra"},[r("img",{attrs:{src:n(406)}})]),r("article",{staticClass:"skill__Nodejs extra"},[r("img",{attrs:{src:n(407)}})]),r("article",{staticClass:"skill__Nodejs extra"},[r("img",{attrs:{src:n(408)}})])])])}],o={data:function(){return{name:""}}},c=(n(409),n(35)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("m-navbar"),n("div",{staticClass:"nav__ghost"}),n("m-header",{attrs:{title:"MayderC",description:"Frontend Developer Jr"}}),t._m(0),t._m(1),n("section",{staticClass:"contact__section"},[n("h2",{staticClass:"subtitle"},[t._v("Contacto")]),n("section",{staticClass:"contacto__item"},[n("m-contact")],1)]),n("m-footer")],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{MNavbar:n(210).default,MHeader:n(221).default,MContact:n(394).default,MFooter:n(372).default})}}]);