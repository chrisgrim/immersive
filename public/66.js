(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{301:function(t,e,s){"use strict";s.r(e);var i={props:["user"],components:{},computed:{},data:function(){return{monthly:!0,updates:!0,messages:!0}},methods:{submit:function(){var t={monthly:this.monthly?this.monthly:"",updates:this.updates?this.updates:"",messages:this.messages?this.messages:""};axios.patch("/users/".concat(this.user.id),t).then((function(t){console.log(t.data)})).catch((function(t){console.log(t.response.data)}))},updateNews:function(){"n"==this.user.newsletter_type&&(this.monthly=!1,this.updates=!1),"a"==this.user.newsletter_type&&(this.monthly=!0,this.updates=!0),"m"==this.user.newsletter_type&&(this.monthly=!0,this.updates=!1),"u"==this.user.newsletter_type&&(this.monthly=!1,this.updates=!0),"y"==this.user.silence&&(this.messages=!1)}},watch:{monthly:function(){this.submit()},updates:function(){this.submit()},messages:function(){this.submit()}},mounted:function(){this.updateNews()}},n=s(80),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account-notifications"},[t._m(0),t._v(" "),s("section",{staticClass:"notifications grid"},[t._m(1),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"field"},[s("div",{attrs:{id:"cover"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.monthly,expression:"monthly"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.monthly)?t._i(t.monthly,null)>-1:t.monthly},on:{change:function(e){var s=t.monthly,i=e.target,n=!!i.checked;if(Array.isArray(s)){var a=t._i(s,null);i.checked?a<0&&(t.monthly=s.concat([null])):a>-1&&(t.monthly=s.slice(0,a).concat(s.slice(a+1)))}else t.monthly=n}}}),t._v(" "),s("div",{attrs:{id:"bar"}}),t._v(" "),s("div",{attrs:{id:"knob"}},[t.monthly?s("p",[t._v("Yes")]):s("p",[t._v("No")])])])])])]),t._v(" "),s("section",{staticClass:"notifications grid"},[t._m(2),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"field"},[s("div",{attrs:{id:"cover"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.updates,expression:"updates"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.updates)?t._i(t.updates,null)>-1:t.updates},on:{change:function(e){var s=t.updates,i=e.target,n=!!i.checked;if(Array.isArray(s)){var a=t._i(s,null);i.checked?a<0&&(t.updates=s.concat([null])):a>-1&&(t.updates=s.slice(0,a).concat(s.slice(a+1)))}else t.updates=n}}}),t._v(" "),s("div",{attrs:{id:"bar"}}),t._v(" "),s("div",{attrs:{id:"knob"}},[t.updates?s("p",[t._v("Yes")]):s("p",[t._v("No")])])])])])]),t._v(" "),s("section",{staticClass:"notifications grid"},[t._m(3),t._v(" "),s("div",{staticClass:"item"},[s("div",{staticClass:"field"},[s("div",{attrs:{id:"cover"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.messages,expression:"messages"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.messages)?t._i(t.messages,null)>-1:t.messages},on:{change:function(e){var s=t.messages,i=e.target,n=!!i.checked;if(Array.isArray(s)){var a=t._i(s,null);i.checked?a<0&&(t.messages=s.concat([null])):a>-1&&(t.messages=s.slice(0,a).concat(s.slice(a+1)))}else t.messages=n}}}),t._v(" "),s("div",{attrs:{id:"bar"}}),t._v(" "),s("div",{attrs:{id:"knob"}},[t.messages?s("p",[t._v("Yes")]):s("p",[t._v("No")])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"account-notifications_header"},[e("div",{staticClass:"account-notifications_breadcrumbs"},[e("a",{attrs:{href:"/account-settings"}},[this._v("Account")]),this._v(" > Notifications")]),this._v(" "),e("h2",[this._v("Notifications")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notifications_element"},[e("h4",[this._v("Subscribe to monthly newsletter")]),this._v(" "),e("p",[this._v("Get our monthly newsletters about the latest and greatest immersive events.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notifications_element"},[e("h4",[this._v("Subscribe to event update newsletters")]),this._v(" "),e("p",[this._v("Get the latest updates about the organizations and events you have liked on EI.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notifications_element"},[e("h4",[this._v("Messages")]),this._v(" "),e("p",[this._v("Get an email whenever a user or admin sends you a message")])])}],!1,null,null,null);e.default=a.exports},80:function(t,e,s){"use strict";function i(t,e,s,i,n,a,o,c){var r,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),i&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(r=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=r):n&&(r=c?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),r)if(l.functional){l._injectStyles=r;var d=l.render;l.render=function(t,e){return r.call(e),d(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,r):[r]}return{exports:t,options:l}}s.d(e,"a",(function(){return i}))}}]);