(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{268:function(e,t,s){"use strict";s.r(t);var r={props:{loaduser:{type:Object},username:{type:String},userid:{type:String},avatar:{type:String},usertype:{type:Object},createdevents:{type:String}},data:function(){return{user:this.loaduser?this.loaduser:"",page:""}},methods:{navType:function(){/events\/.*/.test(this.$router.currentRoute.path)&&(this.page="show"),/organizer\/.*/.test(this.$router.currentRoute.path)&&(this.page="org")}},mounted:function(){this.navType()}},a=s(81),n=Object(a.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.loaduser&&!e.loaduser.email_verified_at?s("vue-alert",{attrs:{message:"verify"}}):e._e(),e._v(" "),s("div",{staticClass:"head",class:e.page},[s("nav",{staticClass:"nav"},[e._m(0),e._v(" "),s("nav-search"),e._v(" "),s("div",{staticClass:"menu"},[s("div",{staticClass:"menu-nav"},[e.user?s("profile-button",{attrs:{user:e.user}}):e._e()],1),e._v(" "),e.user&&!e.user.hasCreatedOrganizers?s("div",{staticClass:"menu-nav"},[e._m(1)]):e._e(),e._v(" "),e.user&&e.user.hasCreatedOrganizers?s("div",{staticClass:"menu-nav"},[e._m(2)]):e._e(),e._v(" "),e.user&&e.loaduser.hasMessages?s("div",{staticClass:"menu-nav"},[s("a",{attrs:{href:"/messages"}},[e.user.has_unread?s("div",{staticClass:"active"},[s("p")]):e._e(),e._v(" "),s("div",[e._v("Messages")])])]):e._e(),e._v(" "),s("div",{staticClass:"menu-nav"},[e.user?e._e():s("a",{attrs:{href:"/login"}},[s("div",[e._v("Login")])])]),e._v(" "),s("div",{staticClass:"menu-nav"},[e.user?e._e():s("a",{attrs:{href:"/register"}},[s("div",[e._v("Register")])])]),e._v(" "),s("div",{staticClass:"menu-nav"},[e.user?e._e():s("a",{attrs:{href:"/register"}},[s("div",[e._v("Host an Experience")])])])])],1)])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo"},[t("a",{attrs:{href:"/"}},[t("h3",[this._v("EI")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"/events/create"}},[t("div",[this._v("Create Event")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"/create-event/edit"}},[t("div",[this._v("Your Events")])])}],!1,null,null,null);t.default=n.exports},81:function(e,t,s){"use strict";function r(e,t,s,r,a,n,i,o){var u,v="function"==typeof e?e.options:e;if(t&&(v.render=t,v.staticRenderFns=s,v._compiled=!0),r&&(v.functional=!0),n&&(v._scopeId="data-v-"+n),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},v._ssrRegister=u):a&&(u=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(v.functional){v._injectStyles=u;var c=v.render;v.render=function(e,t){return u.call(t),c(e,t)}}else{var _=v.beforeCreate;v.beforeCreate=_?[].concat(_,u):[u]}return{exports:e,options:v}}s.d(t,"a",(function(){return r}))}}]);