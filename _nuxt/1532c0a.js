(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4,5],{367:function(t,n,l){t.exports=l.p+"img/logo.c41297f.svg"},368:function(t,n,l){"use strict";l.r(n);l(23),l(2),l(1);var e={data:function(){return{navbar:[],isActive:!1,show_phone:!1}},mounted:function(){var t=this;this.$axios.get("header",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(n){t.navbar=n.data.menu}))},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},C=l(75),component=Object(C.a)(e,(function(){var t=this,n=t._self._c;return n("div",[n("div",{staticClass:"phone_navs",class:{active:t.show_phone}},[n("div",{staticClass:"logo_contener"},[n("div",[n("NuxtLink",{staticClass:"navbar-brand",attrs:{to:t.localePath("/"),href:"#"}},[n("img",{attrs:{src:l(367),alt:""}}),t._v(" "),n("div",{staticClass:"logo_text"},[n("div",{staticClass:"log_title"},[t._v("\n             O‘ZBEKISTON RESPUBLIKASI\n           ")]),t._v(" "),n("div",{staticClass:"log_description"},[t._v("\n             SPORTNI"),n("br"),t._v(" RIVOJLANTIRISH"),n("br"),t._v(" VAZIRLIGI\n           ")])])])],1),t._v(" "),n("div",[n("button",{on:{click:function(n){t.show_phone=!1}}},[n("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M13.913 1.02972L8.00002 6.94272L2.08702 1.02972C1.9448 0.899583 1.75785 0.82933 1.56513 0.8336C1.3724 0.837871 1.18875 0.916335 1.05244 1.05265C0.916126 1.18896 0.837662 1.37261 0.833392 1.56534C0.829121 1.75806 0.899374 1.94501 1.02952 2.08722L6.93952 8.00022L1.02802 13.9117C0.955794 13.9806 0.89806 14.0631 0.858209 14.1546C0.818357 14.246 0.797191 14.3445 0.795956 14.4443C0.79472 14.5441 0.81344 14.6431 0.851014 14.7355C0.888589 14.8279 0.944259 14.9119 1.01475 14.9825C1.08525 15.0531 1.16914 15.1089 1.26151 15.1466C1.35388 15.1843 1.45285 15.2031 1.55261 15.202C1.65237 15.2009 1.7509 15.1799 1.84242 15.1402C1.93393 15.1005 2.01659 15.0428 2.08552 14.9707L8.00002 9.05923L13.913 14.9722C14.0552 15.1024 14.2422 15.1726 14.4349 15.1683C14.6276 15.1641 14.8113 15.0856 14.9476 14.9493C15.0839 14.813 15.1624 14.6293 15.1666 14.4366C15.1709 14.2439 15.1007 14.0569 14.9705 13.9147L9.05752 8.00172L14.9705 2.08722C15.0427 2.0184 15.1005 1.93583 15.1403 1.84437C15.1802 1.75291 15.2013 1.6544 15.2026 1.55464C15.2038 1.45489 15.1851 1.35589 15.1475 1.26347C15.1099 1.17105 15.0543 1.08708 14.9838 1.01648C14.9133 0.945886 14.8294 0.890096 14.737 0.852391C14.6447 0.814686 14.5457 0.795826 14.4459 0.79692C14.3462 0.798014 14.2476 0.81904 14.1561 0.858762C14.0646 0.898484 13.9819 0.9561 13.913 1.02822V1.02972Z",fill:"#555555"}})])])])]),t._v(" "),n("div",{staticClass:"phone_nav_content"},[n("div",{staticClass:"search_phone"},[n("svg",{attrs:{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M16 0C10.4883 0 6 4.48828 6 10C6 12.3945 6.83984 14.5898 8.25 16.3125L0.28125 24.2812L1.71875 25.7188L9.6875 17.75C11.4102 19.1602 13.6055 20 16 20C21.5117 20 26 15.5117 26 10C26 4.48828 21.5117 0 16 0ZM16 2C20.4297 2 24 5.57031 24 10C24 14.4297 20.4297 18 16 18C11.5703 18 8 14.4297 8 10C8 5.57031 11.5703 2 16 2Z",fill:"#333333"}})]),t._v(" "),n("input",{attrs:{type:"text",placeholder:"Sayt bo’yicha qidiruv"}})]),t._v(" "),n("div",{staticClass:"phone_lang"},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{attrs:{"clip-path":"url(#clip0_749_19987)"}},[n("path",{attrs:{d:"M12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0ZM12 1.674C9.26137 1.674 6.63492 2.76191 4.69842 4.69842C2.76191 6.63492 1.674 9.26137 1.674 12C1.674 14.7386 2.76191 17.3651 4.69842 19.3016C6.63492 21.2381 9.26137 22.326 12 22.326C14.7386 22.326 17.3651 21.2381 19.3016 19.3016C21.2381 17.3651 22.326 14.7386 22.326 12C22.326 9.26137 21.2381 6.63492 19.3016 4.69842C17.3651 2.76191 14.7386 1.674 12 1.674ZM14.4576 4.1856C15.2378 4.48059 15.9673 4.89515 16.62 5.4144C16.77 5.5296 16.914 5.652 17.0556 5.7828C17.082 5.8056 17.1048 5.8296 17.13 5.8548C17.5236 6.2184 17.8812 6.6276 18.198 7.0668C18.2424 7.128 18.2892 7.1844 18.33 7.2432C18.4068 7.356 18.4788 7.4736 18.5508 7.5912C18.6746 7.78955 18.7888 7.99379 18.8928 8.2032C18.9564 8.3232 19.0128 8.454 19.0716 8.5812C19.1112 8.6688 19.1556 8.7588 19.1916 8.8524C19.2792 9.0708 19.3572 9.2904 19.428 9.5148C19.4508 9.5892 19.4688 9.6684 19.4904 9.7428C19.6121 10.1698 19.6984 10.606 19.7484 11.0472C19.7568 11.1264 19.7688 11.2104 19.7748 11.2884C19.7988 11.5464 19.8144 11.8068 19.8144 12.0684C19.8129 12.5796 19.7659 13.0896 19.674 13.5924C19.6572 13.68 19.6428 13.7688 19.626 13.8528C19.578 14.0808 19.5228 14.304 19.458 14.5248C18.8472 14.2452 18.1296 13.8336 17.9424 13.3812C17.6016 12.5652 16.6944 12.1572 16.3248 11.106C15.7164 9.366 16.524 9.4116 16.6368 8.3316C16.6896 7.8252 16.3248 7.7196 15.8436 7.926C14.7204 8.3976 14.34 8.2164 14.1132 7.3704C13.8864 6.5268 14.1132 6.2916 14.1132 6.2916C13.3476 6.3756 13.3188 5.4432 13.716 5.208C13.992 5.0496 14.226 4.5636 14.4576 4.1856ZM11.2488 9.3564C11.9568 9.0324 12.6108 8.916 12.5244 8.3592C12.4404 7.8084 12.2412 7.398 11.1348 7.398C10.0284 7.398 10.5108 8.916 9.6036 8.01C8.6964 7.11 9.8016 7.3428 10.2552 7.1376C10.71 6.9312 11.1636 6.0852 10.3692 6.0252C9.576 5.9688 9.7452 6.3756 9.1212 6.1452C8.4972 5.91 8.214 6.96 7.8156 6.8136C7.554 6.7152 6.852 6.1752 6.3864 5.6436C5.43632 6.46996 4.68418 7.49934 4.1856 8.6556C4.3212 10.224 5.1504 11.0472 5.1504 11.0472C5.1504 11.0472 5.5764 12.0684 8.13 13.3236C8.13 13.3236 8.61 13.3524 8.0436 12.7704C7.4772 12.186 6.852 11.4564 7.5612 11.0784C8.2692 10.6956 8.4696 10.728 8.64 11.43C8.8092 12.1308 9.378 11.718 9.4332 11.0472C9.4908 10.3788 10.5396 9.6792 11.2488 9.3552V9.3564ZM10.7088 12.8844C11.9304 12.8844 11.8164 13.2648 12.7812 14.1144C13.7448 14.9592 13.2348 15.8052 12.7512 16.4484C12.27 17.0892 11.844 17.8164 11.6172 19.134C11.3892 20.4468 10.794 19.5108 10.5972 19.1904C10.398 18.8676 10.086 18.5772 10.1724 17.2344C10.2564 15.8928 9.348 16.6824 9.0372 14.9304C8.7252 13.1808 9.4908 12.8856 10.71 12.8856L10.7088 12.8844ZM16.6812 14.0412C17.0064 13.8336 17.7852 14.3748 17.6172 14.9448C17.4456 15.5148 16.908 15.1932 16.638 14.9448C16.368 14.6976 16.3536 14.2452 16.6812 14.0412Z",fill:"black"}})]),t._v(" "),n("defs",[n("clipPath",{attrs:{id:"clip0_749_19987"}},[n("rect",{attrs:{width:"24",height:"24",fill:"white"}})])])]),t._v(" "),n("NuxtLink",{class:{active:"ru"==t.$i18n.locale},attrs:{to:t.switchLocalePath("ru")}},[t._v("Русский")]),t._v(" "),n("NuxtLink",{class:{active:"oz"==t.$i18n.locale},attrs:{to:t.switchLocalePath("oz")}},[t._v(" O’zbekcha")]),t._v(" "),n("NuxtLink",{class:{active:"en"==t.$i18n.locale},attrs:{to:t.switchLocalePath("en")}},[t._v("English")])],1),t._v(" "),n("div",{staticClass:"phone_links",attrs:{id:"myGroup"}},t._l(t.navbar,(function(nav,l){return n("div",{key:l},[n("button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse-".concat(l),expression:"`collapse-${ind}`"}]},[n("span",[t._v("\n            "+t._s(nav.title)+"\n          ")]),t._v(" "),n("svg",{attrs:{width:"14",height:"8",viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.645917 0.645917C0.692363 0.599354 0.747539 0.562411 0.808284 0.537204C0.869029 0.511998 0.93415 0.499023 0.999917 0.499023C1.06568 0.499023 1.13081 0.511998 1.19155 0.537204C1.2523 0.562411 1.30747 0.599354 1.35392 0.645917L6.99992 6.29292L12.6459 0.645917C12.6924 0.599429 12.7476 0.562553 12.8083 0.537394C12.8691 0.512234 12.9342 0.499285 12.9999 0.499285C13.0657 0.499285 13.1308 0.512234 13.1915 0.537394C13.2522 0.562553 13.3074 0.599429 13.3539 0.645917C13.4004 0.692405 13.4373 0.747594 13.4624 0.808333C13.4876 0.869073 13.5005 0.934173 13.5005 0.999917C13.5005 1.06566 13.4876 1.13076 13.4624 1.1915C13.4373 1.25224 13.4004 1.30743 13.3539 1.35392L7.35392 7.35392C7.30747 7.40048 7.2523 7.43742 7.19155 7.46263C7.13081 7.48784 7.06568 7.50081 6.99992 7.50081C6.93415 7.50081 6.86903 7.48784 6.80828 7.46263C6.74754 7.43742 6.69236 7.40048 6.64592 7.35392L0.645917 1.35392C0.599354 1.30747 0.562411 1.2523 0.537205 1.19155C0.511998 1.13081 0.499023 1.06568 0.499023 0.999917C0.499023 0.93415 0.511998 0.869028 0.537205 0.808283C0.562411 0.747538 0.599354 0.692363 0.645917 0.645917Z",fill:"black"}})])]),t._v(" "),n("b-collapse",{attrs:{id:"collapse-".concat(l),"data-bs-parent":"#myGroup",accordion:"my-accordion"}},t._l(nav.child,(function(l,e){return n("div",{key:e},[n("NuxtLink",{staticClass:"phone_main_links",attrs:{to:t.localePath("/".concat(l.url))}},[t._v(t._s(l.title))])],1)})),0)],1)})),0),t._v(" "),n("div",{staticClass:"phone_messengers"},[n("a",{attrs:{href:"#"}},[n("div",[n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4.49236 0.25C4.09978 0.25 3.71307 0.390625 3.3908 0.648438L3.34392 0.671875L3.32049 0.695313L0.976737 3.10938L1.00017 3.13281C0.276542 3.80078 0.0538858 4.7998 0.367363 5.66406C0.370292 5.66992 0.364433 5.68164 0.367363 5.6875C1.0031 7.50684 2.62908 11.0195 5.80486 14.1953C8.99236 17.3828 12.5519 18.9443 14.3127 19.6328H14.3361C15.2472 19.9375 16.2346 19.7207 16.9377 19.1172L19.3049 16.75C19.926 16.1289 19.926 15.0508 19.3049 14.4297L16.258 11.3828L16.2346 11.3359C15.6135 10.7148 14.5119 10.7148 13.8908 11.3359L12.3908 12.8359C11.8488 12.5752 10.5568 11.9072 9.32049 10.7266C8.09295 9.55469 7.466 8.20703 7.23455 7.67969L8.73455 6.17969C9.36443 5.54981 9.37615 4.50098 8.71111 3.88281L8.73455 3.85938L8.66424 3.78906L5.66424 0.695313L5.6408 0.671875L5.59392 0.648438C5.27166 0.390625 4.88494 0.25 4.49236 0.25ZM4.49236 1.75C4.54803 1.75 4.60369 1.77637 4.65642 1.82031L7.65642 4.89063L7.72674 4.96094C7.72088 4.95508 7.77068 5.03418 7.67986 5.125L5.80486 7L5.4533 7.32813L5.61736 7.79688C5.61736 7.79688 6.47869 10.1025 8.28924 11.8281L8.4533 11.9688C10.1965 13.5596 12.2502 14.4297 12.2502 14.4297L12.7189 14.6406L14.9455 12.4141C15.0744 12.2852 15.051 12.2852 15.1799 12.4141L18.2502 15.4844C18.3791 15.6133 18.3791 15.5664 18.2502 15.6953L15.9533 17.9922C15.6076 18.2881 15.2414 18.3496 14.8049 18.2031C13.1056 17.5352 9.80389 16.085 6.85955 13.1406C3.89178 10.1729 2.34197 6.80664 1.77361 5.17188C1.65935 4.86719 1.74139 4.41602 2.00799 4.1875L2.05486 4.14063L4.3283 1.82031C4.38103 1.77637 4.4367 1.75 4.49236 1.75Z",fill:"#2B5CA8"}})]),t._v("\n            +998 71 239 24 52\n          ")])]),t._v(" "),n("div",{staticClass:"f_social_media"},[n("a",{staticClass:"social_media",attrs:{href:"#"}},[n("span",[n("svg",{attrs:{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.23067 0.786376V2.86162L5.99899 2.86483C5.03354 2.86483 4.84751 3.3235 4.84751 3.99386V5.47892H7.14727L6.84898 7.80114H4.84751V13.844H2.44864V7.80114H0.44043V5.47892H2.44864V3.76613C2.44864 1.77749 3.66074 0.693359 5.43769 0.693359C6.28479 0.693359 7.01577 0.757509 7.23067 0.786376Z",fill:"#2B5CA8"}})])])]),t._v(" "),n("a",{staticClass:"social_media",attrs:{href:"#"}},[n("span",[n("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M7.26984 1.96492C8.99843 1.96492 9.20134 1.97263 9.88456 2.00345C10.5164 2.03171 10.858 2.13701 11.0866 2.22691C11.3897 2.34506 11.6055 2.48376 11.8315 2.70979C12.0575 2.93581 12.1988 3.15157 12.3144 3.45465C12.4017 3.68325 12.5096 4.02486 12.5378 4.65671C12.5686 5.33992 12.5763 5.54284 12.5763 7.27143C12.5763 9.00003 12.5686 9.20294 12.5378 9.88616C12.5096 10.518 12.4043 10.8596 12.3144 11.0882C12.1962 11.3913 12.0575 11.607 11.8315 11.8331C11.6055 12.0591 11.3897 12.2004 11.0866 12.316C10.858 12.4033 10.5164 12.5112 9.88456 12.5394C9.20134 12.5702 8.99843 12.5779 7.26984 12.5779C5.54124 12.5779 5.33833 12.5702 4.65511 12.5394C4.02326 12.5112 3.68165 12.4058 3.45306 12.316C3.14998 12.1978 2.93422 12.0591 2.70819 11.8331C2.48217 11.607 2.3409 11.3913 2.22532 11.0882C2.13799 10.8596 2.03011 10.518 2.00186 9.88616C1.97104 9.20294 1.96333 9.00003 1.96333 7.27143C1.96333 5.54284 1.97104 5.33992 2.00186 4.65671C2.03011 4.02486 2.13542 3.68325 2.22532 3.45465C2.34347 3.15157 2.48217 2.93581 2.70819 2.70979C2.93422 2.48376 3.14998 2.34249 3.45306 2.22691C3.68165 2.13958 4.02326 2.03171 4.65511 2.00345C5.33833 1.97006 5.54124 1.96492 7.26984 1.96492ZM7.26984 0.798828C5.51299 0.798828 5.2921 0.806534 4.60117 0.837356C3.91282 0.868177 3.44278 0.978623 3.03182 1.13787C2.60546 1.30225 2.24587 1.52571 1.88628 1.8853C1.52669 2.24489 1.3058 2.60705 1.13885 3.03085C0.979599 3.44181 0.869154 3.91184 0.838332 4.60277C0.80751 5.29112 0.799805 5.51201 0.799805 7.26886C0.799805 9.02571 0.80751 9.2466 0.838332 9.93753C0.869154 10.6259 0.979599 11.0959 1.13885 11.5094C1.30323 11.9358 1.52669 12.2954 1.88628 12.655C2.24587 13.0146 2.60802 13.2355 3.03182 13.4024C3.44278 13.5617 3.91282 13.6721 4.60374 13.7029C5.29467 13.7338 5.51299 13.7415 7.27241 13.7415C9.03182 13.7415 9.25014 13.7338 9.94107 13.7029C10.6294 13.6721 11.0995 13.5617 11.513 13.4024C11.9394 13.238 12.2989 13.0146 12.6585 12.655C13.0181 12.2954 13.239 11.9332 13.406 11.5094C13.5652 11.0985 13.6757 10.6285 13.7065 9.93753C13.7373 9.2466 13.745 9.02828 13.745 7.26886C13.745 5.50944 13.7373 5.29112 13.7065 4.6002C13.6757 3.91184 13.5652 3.44181 13.406 3.02828C13.2416 2.60191 13.0181 2.24232 12.6585 1.88273C12.2989 1.52314 11.9368 1.30225 11.513 1.1353C11.102 0.976054 10.632 0.865609 9.94107 0.834787C9.24758 0.806534 9.02669 0.798828 7.26984 0.798828Z",fill:"#2B5CA8"}}),t._v(" "),n("path",{attrs:{d:"M7.26992 3.94531C5.43602 3.94531 3.94629 5.43247 3.94629 7.26894C3.94629 9.10542 5.43602 10.5926 7.26992 10.5926C9.10382 10.5926 10.5936 9.10285 10.5936 7.26894C10.5936 5.43504 9.10382 3.94531 7.26992 3.94531ZM7.26992 9.42648C6.07814 9.42648 5.11239 8.46072 5.11239 7.26894C5.11239 6.07716 6.07814 5.11141 7.26992 5.11141C8.4617 5.11141 9.42745 6.07716 9.42745 7.26894C9.42745 8.46072 8.4617 9.42648 7.26992 9.42648Z",fill:"#2B5CA8"}}),t._v(" "),n("path",{attrs:{d:"M10.7259 4.59043C11.1543 4.59043 11.5016 4.24315 11.5016 3.81475C11.5016 3.38635 11.1543 3.03906 10.7259 3.03906C10.2975 3.03906 9.9502 3.38635 9.9502 3.81475C9.9502 4.24315 10.2975 4.59043 10.7259 4.59043Z",fill:"#2B5CA8"}})])])]),t._v(" "),n("a",{staticClass:"social_media",attrs:{href:"#"}},[n("span",[n("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{attrs:{"clip-path":"url(#clip0_749_20035)"}},[n("path",{attrs:{d:"M3.25062 8.10803L4.88621 12.197L7.0158 10.0673L10.6582 12.9626L13.3014 1.60547L0.125 6.89355L3.25062 8.10803ZM2.22292 6.88199L8.50351 4.36135L3.50898 7.38171L2.22292 6.88199ZM9.62269 4.58512L5.45409 8.39875L4.95266 10.2884L4.02529 7.97L9.62269 4.58512ZM5.76623 10.2271L6.01886 9.27496L6.40861 9.58468L5.76623 10.2271ZM10.1838 11.6012L6.39081 8.58624L12.1015 3.36179L10.1838 11.6012Z",fill:"#2B5CA8"}})]),t._v(" "),n("defs",[n("clipPath",{attrs:{id:"clip0_749_20035"}},[n("rect",{attrs:{width:"13.1764",height:"13.1507",fill:"white",transform:"translate(0.150391 0.693359)"}})])])])])])])])])]),t._v(" "),n("nav",{staticClass:"navbar navbar-expand-lg"},[n("NuxtLink",{staticClass:"navbar-brand",attrs:{to:t.localePath("/"),href:"#"}},[n("img",{attrs:{src:l(367),alt:""}}),t._v(" "),n("div",{staticClass:"logo_text"},[n("div",{staticClass:"log_title"},[t._v("\n          O‘ZBEKISTON RESPUBLIKASI\n        ")]),t._v(" "),n("div",{staticClass:"log_description"},[t._v("\n          SPORTNI"),n("br"),t._v(" RIVOJLANTIRISH"),n("br"),t._v(" VAZIRLIGI\n        ")])])]),t._v(" "),n("button",{staticClass:"navbar-toggler",attrs:{"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:function(n){t.show_phone=!0}}},[t._m(0)]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},t._l(t.navbar,(function(nav,l){return n("li",{key:l,staticClass:"nav-item dropdown"},[n("NuxtLink",{attrs:{to:t.localePath("/".concat(nav.url))}},[n("span",[t._v(t._s(nav.title))])]),t._v(" "),n("ul",t._l(nav.child,(function(l,e){return n("li",{key:e},[n("NuxtLink",{attrs:{to:t.localePath("/".concat(l.url))}},[t._v(t._s(l.title))])],1)})),0)],1)})),0),t._v(" "),n("form",{staticClass:"form-inline main_icon my-2 my-lg-0"},[n("a",{staticClass:"my-2 my-sm-0"},[n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M12.25 0.25C8.11621 0.25 4.75 3.61621 4.75 7.75C4.75 9.5459 5.37988 11.1924 6.4375 12.4844L0.460938 18.4609L1.53906 19.5391L7.51562 13.5625C8.80762 14.6201 10.4541 15.25 12.25 15.25C16.3838 15.25 19.75 11.8838 19.75 7.75C19.75 3.61621 16.3838 0.25 12.25 0.25ZM12.25 1.75C15.5723 1.75 18.25 4.42773 18.25 7.75C18.25 11.0723 15.5723 13.75 12.25 13.75C8.92773 13.75 6.25 11.0723 6.25 7.75C6.25 4.42773 8.92773 1.75 12.25 1.75Z",fill:"white"}})])])]),t._v(" "),n("a",{staticClass:"my-2 my-sm-0 main_icon"},[n("svg",{attrs:{width:"24",height:"16",viewBox:"0 0 24 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M3.79688 0.5L3.60938 0.992188L0.984375 8H0V9.5H0.75V11C0.75 13.4727 2.77734 15.5 5.25 15.5H6.75C9.22266 15.5 11.25 13.4727 11.25 11V8.75C11.25 8.3252 11.5752 8 12 8C12.4248 8 12.75 8.3252 12.75 8.75V11C12.75 13.4727 14.7773 15.5 17.25 15.5H18.75C21.2227 15.5 23.25 13.4727 23.25 11V9.5H24V8H23.0156L20.3906 0.992188L20.2031 0.5H18.75L18.5391 0.78125L16.6641 3.03125L17.8359 3.96875L19.2656 2.23438L21.4219 8H14.1094C13.7959 7.13281 12.9697 6.5 12 6.5C11.0303 6.5 10.2041 7.13281 9.89062 8H2.57812L4.73438 2.23438L6.16406 3.96875L7.33594 3.03125L5.46094 0.78125L5.25 0.5H3.79688ZM2.25 9.5H9.75V11C9.75 12.6523 8.40234 14 6.75 14H5.25C3.59766 14 2.25 12.6523 2.25 11V9.5ZM14.25 9.5H21.75V11C21.75 12.6523 20.4023 14 18.75 14H17.25C15.5977 14 14.25 12.6523 14.25 11V9.5Z",fill:"white"}})])]),t._v(" "),n("NuxtLink",{staticClass:"my-2 my-sm-0",attrs:{to:"/"}},[n("svg",{attrs:{width:"22",height:"18",viewBox:"0 0 22 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M8 0.75V6.75H10.25V8.25H2.75V11.25H0.5V17.25H6.5V11.25H4.25V9.75H10.25V11.25H8V17.25H14V11.25H11.75V9.75H17.75V11.25H15.5V17.25H21.5V11.25H19.25V8.25H11.75V6.75H14V0.75H8ZM9.5 2.25H12.5V5.25H9.5V2.25ZM2 12.75H5V15.75H2V12.75ZM9.5 12.75H12.5V15.75H9.5V12.75ZM17 12.75H20V15.75H17V12.75Z",fill:"white"}})])]),t._v(" "),n("div",{staticClass:"lang_f",class:{active:!t.isActive}},[n("ul",t._l(t.availableLocales,(function(l){return n("li",{key:l.code},[n("NuxtLink",{attrs:{to:t.switchLocalePath(l.code)}},[t._v(t._s(l.name))])],1)})),0),t._v(" "),n("button",{staticClass:"lang_btn",class:{active:t.isActive},on:{click:function(n){t.isActive=!t.isActive}}},[n("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M9 0C4.03711 0 0 4.03711 0 9C0 13.9629 4.03711 18 9 18C13.9629 18 18 13.9629 18 9C18 4.03711 13.9629 0 9 0ZM9 1.5C10.4766 1.5 11.8477 1.93945 13.0078 2.67188L12.3984 2.74219L12.5391 4.24219L11.7422 3.89062L11.0859 4.45312L11.2031 6L12.8203 5.48438L14.8359 6.14062L14.3203 7.07812L13.1016 6.32812L11.7891 6.51562L10.5 7.47656L9.77344 9.72656L11.2266 10.9219C11.2266 10.9219 12.7178 10.6641 12.7969 10.6641C12.876 10.6641 13.4297 12.0234 13.4297 12.0234L12.2344 15.7734C11.2588 16.2393 10.1572 16.5 9 16.5C8.7627 16.5 8.52832 16.4736 8.29688 16.4531L7.47656 15.0234L8.27344 12.0234L5.25 9.75H2.46094L1.73438 8.27344L3.75 6.67969L6.75 5.25L6.30469 3.25781L7.59375 2.97656L8.20312 3.82031L10.4531 3.39844L10.0547 1.66406L8.39062 1.54688C8.58984 1.53223 8.79492 1.5 9 1.5ZM8.15625 1.54688L6.98438 2.03906L6.42188 1.94531C6.97559 1.74316 7.5498 1.61426 8.15625 1.54688ZM1.54688 9.58594L2.27344 10.4297V11.9766L3.67969 13.5234H4.54688L6.67969 16.1484C3.84961 15.2314 1.78418 12.668 1.54688 9.58594Z",fill:"white"}})]),t._v(" "),"oz"==t.$i18n.locale?n("span",[t._v("O’zbekcha")]):t._e(),t._v(" "),"ru"==t.$i18n.locale?n("span",[t._v("Русский")]):t._e(),t._v(" "),"en"==t.$i18n.locale?n("span",[t._v("English")]):t._e(),t._v(" "),n("svg",{attrs:{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0.75 0.749999L5 5.25L9.25 0.75",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),t._v(" "),n("a",{staticClass:"tel_numbers",attrs:{href:"tel:+998712392452"}},[n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4.49212 0.25C4.09954 0.25 3.71282 0.390625 3.39056 0.648438L3.34368 0.671875L3.32024 0.695313L0.976493 3.10938L0.999931 3.13281C0.276298 3.80078 0.0536416 4.7998 0.367118 5.66406C0.370048 5.66992 0.364189 5.68164 0.367118 5.6875C1.00286 7.50684 2.62884 11.0195 5.80462 14.1953C8.99212 17.3828 12.5517 18.9443 14.3124 19.6328H14.3359C15.247 19.9375 16.2343 19.7207 16.9374 19.1172L19.3046 16.75C19.9257 16.1289 19.9257 15.0508 19.3046 14.4297L16.2577 11.3828L16.2343 11.3359C15.6132 10.7148 14.5117 10.7148 13.8906 11.3359L12.3906 12.8359C11.8486 12.5752 10.5566 11.9072 9.32024 10.7266C8.0927 9.55469 7.46575 8.20703 7.23431 7.67969L8.73431 6.17969C9.36419 5.54981 9.37591 4.50098 8.71087 3.88281L8.73431 3.85938L8.66399 3.78906L5.66399 0.695313L5.64056 0.671875L5.59368 0.648438C5.27142 0.390625 4.8847 0.25 4.49212 0.25ZM4.49212 1.75C4.54778 1.75 4.60345 1.77637 4.65618 1.82031L7.65618 4.89063L7.72649 4.96094C7.72063 4.95508 7.77044 5.03418 7.67962 5.125L5.80462 7L5.45306 7.32813L5.61712 7.79688C5.61712 7.79688 6.47845 10.1025 8.28899 11.8281L8.45306 11.9688C10.1962 13.5596 12.2499 14.4297 12.2499 14.4297L12.7187 14.6406L14.9452 12.4141C15.0742 12.2852 15.0507 12.2852 15.1796 12.4141L18.2499 15.4844C18.3788 15.6133 18.3788 15.5664 18.2499 15.6953L15.9531 17.9922C15.6074 18.2881 15.2411 18.3496 14.8046 18.2031C13.1054 17.5352 9.80364 16.085 6.85931 13.1406C3.89153 10.1729 2.34173 6.80664 1.77337 5.17188C1.65911 4.86719 1.74114 4.41602 2.00774 4.1875L2.05462 4.14063L4.32806 1.82031C4.38079 1.77637 4.43645 1.75 4.49212 1.75Z",fill:"white"}})]),t._v("\n        +998 71 239 24 52\n      ")])],1)],1)])}),[function(){var t=this,n=t._self._c;return n("div",[n("span"),t._v(" "),n("span"),t._v(" "),n("span")])}],!1,null,null,null);n.default=component.exports},369:function(t,n,l){"use strict";l.r(n);var e={data:function(){return{navbar:[]}},mounted:function(){var t=this;this.$axios.get("header").then((function(n){t.navbar=n.data.menu}))}},C=l(75),component=Object(C.a)(e,(function(){var t=this,n=t._self._c;return n("footer",[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-4 border_right"},[n("NuxtLink",{staticClass:"navbar-brand",attrs:{to:"/",href:"#"}},[n("img",{attrs:{src:l(367),alt:""}}),t._v(" "),n("div",{staticClass:"logo_text"},[n("div",{staticClass:"log_title"},[t._v("\n              O‘ZBEKISTON RESPUBLIKASI\n            ")]),t._v(" "),n("div",{staticClass:"log_description"},[t._v("\n              SPORTNI"),n("br"),t._v(" RIVOJLANTIRISH"),n("br"),t._v(" VAZIRLIGI\n            ")])])]),t._v(" "),n("div",{staticClass:"footer_desc"},[t._v("\n          Web saytimizda eʼlon qilingan materiallardan nusxa koʼchirish, tarqatish va boshqa shakllarda foydalanish faqat tahririyat yozma roziligi bilan amalga oshirilishi mumkin.\n        ")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"data_name"},[t._v("\n            www.minsport.uz © 2018-2022\n        ")])],1),t._v(" "),n("div",{staticClass:"col-xl-8"},[n("div",{staticClass:"footer_phone"},[n("div",{staticClass:"footer_navs"},[n("ul",t._l(t.navbar,(function(l,e){return n("li",{key:e},[n("NuxtLink",{attrs:{to:t.localePath("/".concat(l.url))}},[t._v(t._s(l.title))])],1)})),0)]),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"footer_connect"},[n("div",{staticClass:"footer_contact_title"},[t._v("\n            Ijtimoiy tarmoqlarimiz\n          ")]),t._v(" "),n("div",[n("ul",[n("li",[n("a",{attrs:{href:"#"}},[n("svg",{attrs:{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.23067 0.786865V2.86211L5.99899 2.86531C5.03354 2.86531 4.84751 3.32398 4.84751 3.99435V5.47941H7.14727L6.84898 7.80163H4.84751V13.8445H2.44864V7.80163H0.44043V5.47941H2.44864V3.76662C2.44864 1.77798 3.66074 0.693848 5.43769 0.693848C6.28479 0.693848 7.01577 0.757997 7.23067 0.786865Z",fill:"white"}})])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[n("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M7.26984 1.9659C8.99843 1.9659 9.20134 1.97361 9.88456 2.00443C10.5164 2.03268 10.858 2.13799 11.0866 2.22789C11.3897 2.34604 11.6055 2.48474 11.8315 2.71076C12.0575 2.93679 12.1988 3.15254 12.3144 3.45563C12.4017 3.68422 12.5096 4.02583 12.5378 4.65768C12.5686 5.3409 12.5763 5.54381 12.5763 7.27241C12.5763 9.001 12.5686 9.20391 12.5378 9.88713C12.5096 10.519 12.4043 10.8606 12.3144 11.0892C12.1962 11.3923 12.0575 11.608 11.8315 11.8341C11.6055 12.0601 11.3897 12.2013 11.0866 12.3169C10.858 12.4043 10.5164 12.5121 9.88456 12.5404C9.20134 12.5712 8.99843 12.5789 7.26984 12.5789C5.54124 12.5789 5.33833 12.5712 4.65511 12.5404C4.02326 12.5121 3.68165 12.4068 3.45306 12.3169C3.14998 12.1988 2.93422 12.0601 2.70819 11.8341C2.48217 11.608 2.3409 11.3923 2.22532 11.0892C2.13799 10.8606 2.03011 10.519 2.00186 9.88713C1.97104 9.20391 1.96333 9.001 1.96333 7.27241C1.96333 5.54381 1.97104 5.3409 2.00186 4.65768C2.03011 4.02583 2.13542 3.68422 2.22532 3.45563C2.34347 3.15254 2.48217 2.93679 2.70819 2.71076C2.93422 2.48474 3.14998 2.34347 3.45306 2.22789C3.68165 2.14056 4.02326 2.03268 4.65511 2.00443C5.33833 1.97104 5.54124 1.9659 7.26984 1.9659ZM7.26984 0.799805C5.51299 0.799805 5.2921 0.80751 4.60117 0.838332C3.91282 0.869154 3.44278 0.979599 3.03182 1.13885C2.60546 1.30323 2.24587 1.52669 1.88628 1.88628C1.52669 2.24587 1.3058 2.60802 1.13885 3.03183C0.979599 3.44278 0.869154 3.91282 0.838332 4.60374C0.80751 5.2921 0.799805 5.51299 0.799805 7.26984C0.799805 9.02669 0.80751 9.24758 0.838332 9.9385C0.869154 10.6269 0.979599 11.0969 1.13885 11.5104C1.30323 11.9368 1.52669 12.2964 1.88628 12.656C2.24587 13.0156 2.60802 13.2364 3.03182 13.4034C3.44278 13.5626 3.91282 13.6731 4.60374 13.7039C5.29467 13.7347 5.51299 13.7424 7.27241 13.7424C9.03182 13.7424 9.25014 13.7347 9.94107 13.7039C10.6294 13.6731 11.0995 13.5626 11.513 13.4034C11.9394 13.239 12.2989 13.0156 12.6585 12.656C13.0181 12.2964 13.239 11.9342 13.406 11.5104C13.5652 11.0995 13.6757 10.6294 13.7065 9.9385C13.7373 9.24758 13.745 9.02926 13.745 7.26984C13.745 5.51042 13.7373 5.2921 13.7065 4.60117C13.6757 3.91282 13.5652 3.44278 13.406 3.02926C13.2416 2.60289 13.0181 2.2433 12.6585 1.88371C12.2989 1.52412 11.9368 1.30323 11.513 1.13628C11.102 0.977031 10.632 0.866586 9.94107 0.835764C9.24758 0.80751 9.02669 0.799805 7.26984 0.799805Z",fill:"white"}}),t._v(" "),n("path",{attrs:{d:"M7.26992 3.94678C5.43602 3.94678 3.94629 5.43394 3.94629 7.27041C3.94629 9.10688 5.43602 10.594 7.26992 10.594C9.10382 10.594 10.5936 9.10431 10.5936 7.27041C10.5936 5.4365 9.10382 3.94678 7.26992 3.94678ZM7.26992 9.42794C6.07814 9.42794 5.11239 8.46219 5.11239 7.27041C5.11239 6.07863 6.07814 5.11287 7.26992 5.11287C8.4617 5.11287 9.42745 6.07863 9.42745 7.27041C9.42745 8.46219 8.4617 9.42794 7.26992 9.42794Z",fill:"white"}}),t._v(" "),n("path",{attrs:{d:"M10.7259 4.5919C11.1543 4.5919 11.5016 4.24461 11.5016 3.81621C11.5016 3.38781 11.1543 3.04053 10.7259 3.04053C10.2975 3.04053 9.9502 3.38781 9.9502 3.81621C9.9502 4.24461 10.2975 4.5919 10.7259 4.5919Z",fill:"white"}})])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[n("svg",{attrs:{width:"14",height:"12",viewBox:"0 0 14 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M3.25062 7.109L4.88621 11.198L7.0158 9.0683L10.6582 11.9636L13.3014 0.606445L0.125 5.89452L3.25062 7.109ZM2.22292 5.88296L8.50351 3.36232L3.50898 6.38269L2.22292 5.88296ZM9.62269 3.5861L5.45409 7.39973L4.95266 9.28936L4.02529 6.97098L9.62269 3.5861ZM5.76623 9.22803L6.01886 8.27593L6.40861 8.58566L5.76623 9.22803ZM10.1838 10.6022L6.39081 7.58721L12.1015 2.36277L10.1838 10.6022Z",fill:"white"}})])])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[n("svg",{attrs:{width:"14",height:"12",viewBox:"0 0 14 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M13.844 2.33735C13.0168 2.37547 13.0349 2.37236 12.9414 2.38019L13.4313 0.981061C13.4313 0.981061 11.902 1.54362 11.5143 1.64425C10.4962 0.729128 8.98277 0.688695 7.90079 1.35369C7.01476 1.89839 6.53919 2.83379 6.69781 3.9271C4.97341 3.68781 3.52051 2.87041 2.37341 1.49245L2.01061 1.05671L1.73952 1.55456C1.39689 2.18364 1.28311 2.90292 1.41906 3.57985C1.47484 3.85757 1.56966 4.12245 1.70099 4.37047L1.38976 4.24987L1.35284 4.76989C1.31542 5.29813 1.4913 5.91477 1.8234 6.41924C1.9169 6.56131 2.0373 6.71733 2.18991 6.87124L2.02908 6.84655L2.22532 7.44242C2.48328 8.22531 3.01905 8.83102 3.71435 9.16773C3.01995 9.4624 2.459 9.65042 1.53695 9.95373L0.693359 10.231L1.47254 10.6571C1.76962 10.8195 2.81939 11.362 3.85662 11.5247C6.16224 11.8863 8.75812 11.5918 10.5057 10.0179C11.9777 8.69226 12.4607 6.80652 12.3603 4.84413C12.3452 4.54705 12.4266 4.26351 12.5895 4.04589C12.9159 3.61015 13.842 2.34026 13.844 2.33735ZM11.9734 3.58437C11.7028 3.94566 11.5672 4.40709 11.5915 4.88346C11.6927 6.86291 11.1541 8.39798 9.9906 9.44585C8.63141 10.67 6.43906 11.1505 3.97591 10.7641C3.52984 10.6942 3.06881 10.5376 2.68725 10.3811C3.46031 10.1152 4.05728 9.87808 5.02137 9.42177L6.36722 8.78476L4.88131 8.68965C4.16955 8.6441 3.57689 8.29916 3.21259 7.73911C3.40603 7.72787 3.59255 7.69657 3.77826 7.64479L5.19545 7.25009L3.76642 6.90013C3.07202 6.73007 2.67622 6.3146 2.46642 5.99594C2.32867 5.78655 2.23867 5.57204 2.18469 5.37429C2.32796 5.41271 2.49502 5.4401 2.76441 5.46679L4.08708 5.59763L3.03912 4.78012C2.28402 4.19117 1.98142 3.30635 2.20325 2.45574C4.55984 4.90002 7.32679 4.71631 7.60531 4.78093C7.54401 4.18546 7.54241 4.18405 7.52635 4.12736C7.16967 2.8665 7.95136 2.22628 8.30392 2.00956C9.04036 1.55697 10.2093 1.48874 11.019 2.23441C11.1939 2.39534 11.4304 2.45865 11.6517 2.40366C11.8503 2.3543 12.0134 2.30203 12.173 2.24514L11.8407 3.19408L12.2649 3.19438C12.1849 3.30173 12.0888 3.43026 11.9734 3.58437Z",fill:"white"}})])])])])]),t._v(" "),n("SCRIPT",{attrs:{language:"javascript",type:"text/javascript"}},[t._v('\n          top_js="1.0";top_r="id=43293&r="+escape(document.referrer)+"&pg="+escape(window.location.href);document.cookie="smart_top=1; path=/"; top_r+="&c="+(document.cookie?"Y":"N")\n        ')]),t._v(" "),n("SCRIPT",{attrs:{language:"javascript1.1",type:"text/javascript"}},[t._v('\n            top_js="1.1";top_r+="&j="+(navigator.javaEnabled()?"Y":"N")\n          ')]),t._v(" "),n("SCRIPT",{attrs:{language:"javascript1.2",type:"text/javascript"}},[t._v('\n            top_js="1.2";top_r+="&wh="+screen.width+\'x\'+screen.height+"&px="+\n              (((navigator.appName.substring(0,3)=="Mic"))?screen.colorDepth:screen.pixelDepth)\n\n          ')]),t._v(" "),n("SCRIPT",{attrs:{language:"javascript1.3",type:"text/javascript"}},[t._v('\n           top_js="1.3";\n          ')]),t._v(" "),t._m(2),t._v(" "),n("NOSCRIPT",[n("a",{attrs:{href:"http://www.uz/ru/res/visitor/index?id=43293",target:"_top"}},[n("img",{attrs:{height:"31",src:"https://cnt0.www.uz/counter/collect?id=43293&pg=http%3A//uzinfocom.uz&&col=0063AF&t=ffffff&p=DD7900",width:"88",border:"0",alt:"Топ рейтинг www.uz"}})])])],1),t._v(" "),n("div",{staticClass:"footer_alert"},[t._v("\n          Saytda xato ko‘rgan bo’lsangiz, uni belgilab CTRL+ENTER (⌘+ENTER) ni bosing\n        ")]),t._v(" "),t._m(3)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"data_main"},[t("a",{attrs:{href:"#"}},[this._v("\n              Ma’lumotlardan foydalanish shartlari\n            ")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"footer_contact"},[n("ul",[n("li",[n("span",[t._v("Telefon")]),t._v(" "),n("br"),t._v("\n                +998 71 239-24-52\n              ")]),t._v(" "),n("li",{staticClass:"addres_footer"},[n("span",[t._v("Manzil")]),t._v(" "),n("br"),t._v("\n                Toshkent shahri, Abdulla Qodiriy ko‘chasi, Uy 2\n              ")]),t._v(" "),n("li",[n("span",[t._v("E-mail")]),t._v(" "),n("br"),t._v("\n                info@minsport.uz\n              ")]),t._v(" "),n("li",[n("span",[t._v("E-xat")]),t._v(" "),n("br"),t._v("\n                sport@exat.uz\n              ")])])])},function(){var t=this._self._c;return t("a",{attrs:{href:"http://www.uz/ru/res/visitor/index?id=43293",target:"_top"}},[t("img",{attrs:{height:"31",src:"https://cnt0.www.uz/counter/collect?id=43293&pg=http%3A//uzinfocom.uz&&col=0063AF&t=ffffff&p=DD7900",width:"88",border:"0",alt:"Топ рейтинг www.uz"}})])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"phone_data"},[n("div",{staticClass:"footer_desc"},[t._v("\n            Web saytimizda eʼlon qilingan materiallardan nusxa koʼchirish, tarqatish va boshqa shakllarda foydalanish faqat tahririyat yozma roziligi bilan amalga oshirilishi mumkin.\n          ")]),t._v(" "),n("div",{staticClass:"data_main"},[n("a",{attrs:{href:"#"}},[t._v("\n              Ma’lumotlardan foydalanish shartlari\n            ")])])])}],!1,null,null,null);n.default=component.exports},383:function(t,n,l){"use strict";l.r(n);var e=l(368),C={components:{Footer:l(369).default,Navbar:e.default},data:function(){return{navbar:[],isActive:!1,main_nav_menu:""}},mounted:function(){var t=this;this.$axios.get("header",{headers:{"Accept-Language":this.$i18n.locale}}).then((function(n){t.navbar=n.data.menu[0].child,t.main_nav_menu=n.data.menu[0].child[0].title}))}},r=l(75),component=Object(r.a)(C,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"abouts"},[n("Navbar"),t._v(" "),n("div",{staticClass:"abouts_data"},[n("div",{staticClass:"container"},[n("div",{staticClass:"main_abouts"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-3"},[n("div",{staticClass:"sub_menus"},[n("div",[n("NuxtLink",{attrs:{to:"/"}},[t._v("\n                  Asosiy\n                ")])],1),t._v(" "),n("div",{staticClass:"arrow_icons"},[n("svg",{attrs:{width:"6",height:"11",viewBox:"0 0 6 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0.0429687 9.91797L0.582031 10.457L5.26953 5.76953L5.52734 5.5L5.26953 5.23047L0.582031 0.542969L0.0429683 1.08203L4.46094 5.5L0.0429687 9.91797Z",fill:"#050038"}})])]),t._v(" "),n("div",[n("NuxtLink",{attrs:{to:"/"}},[t._v("\n                  Vazirlik\n                ")])],1),t._v(" "),n("div",{staticClass:"arrow_icons"},[n("svg",{attrs:{width:"6",height:"11",viewBox:"0 0 6 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0.0429687 9.91797L0.582031 10.457L5.26953 5.76953L5.52734 5.5L5.26953 5.23047L0.582031 0.542969L0.0429683 1.08203L4.46094 5.5L0.0429687 9.91797Z",fill:"#050038"}})])]),t._v(" "),n("div",[n("NuxtLink",{attrs:{to:"/"}},[t._v("\n                  "+t._s(t.main_nav_menu)+"\n                ")])],1)]),t._v(" "),n("div",{staticClass:"sub_menus_child"},[n("ul",t._l(t.navbar,(function(l,e){return n("li",{key:e},[n("NuxtLink",{attrs:{to:t.localePath("/".concat(l.url))}},[t._v(t._s(l.title))])],1)})),0)])]),t._v(" "),t._m(0)])])])]),t._v(" "),n("Footer")],1)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"col-xl-9"},[n("div",{staticClass:"about_title"},[t._v("\n              Sportni rivojlantirish vazirligi\n            ")]),t._v(" "),n("div",{staticClass:"about_description"},[t._v("\n              O‘zbekiston Respublikasi Prezidentining 2022-yil 18-fevraldagi “Turizm, madaniy meros va sport\n              sohalarida davlat boshqaruvini takomillashtirishga doir tashkiliy chora-tadbirlar to‘g‘risida”gi\n              PF–75-son farmoni hamda “Sportni rivojlantirish vazirligi faoliyatini tashkil etish to‘g‘risida”gi\n              PQ–136-son qaroriga muvofiq Sportni rivojlantirish vazirligi tashkil etildi.\n\n            ")])])}],!1,null,null,null);n.default=component.exports}}]);