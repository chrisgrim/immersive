(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{255:function(t,e,s){"use strict";s.r(e);var i={data:function(){return{password:"",email:"",name:"",passwordConfirm:"",login:!0}},methods:{onClickOutside:function(t){var e=this.$refs.myDiv;e&&!e.contains(t.target)&&this.$emit("close",!1)},onLogin:function(){var t=this,e={type:"axios",email:this.email,password:this.password};axios.post("/login",e).then((function(t){location.reload()})).catch((function(e){t.validationErrors=e.response.data.errors}))},onRegister:function(){var t=this,e={type:"axios",email:this.email,password:this.password,name:this.name,password_confirmation:this.passwordConfirm};axios.post("/register",e).then((function(t){location.reload()})).catch((function(e){t.validationErrors=e.response.data.errors}))}},mounted:function(){var t=this;setTimeout((function(){return document.addEventListener("click",t.onClickOutside)}),200)},beforeDestroy:function(){document.removeEventListener("click",this.onClickOutside)}},a=s(81),o=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"vlogin"},[s("div",{ref:"myDiv",staticClass:"body-log"},[s("div",{staticClass:"left-log"},[t.login?s("div",[t._m(0),t._v(" "),s("div",{},[s("div",{staticClass:"create-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"email",attrs:{id:"email",type:"email",required:"",placeholder:"email",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"create-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"pass",attrs:{id:"password",type:"password",required:"",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"forgot"},[t._v("\n                            Forgot your password?\n                        ")]),t._v(" "),s("div",[s("button",{staticClass:"signin",on:{click:t.onLogin}},[t._v(" Sign In ")])]),t._v(" "),s("div",{staticClass:"forgot"},[t._v("\n                            Remember Me\n                        ")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("button",{staticClass:"join",on:{click:function(e){e.preventDefault(),t.login=!t.login}}},[t._v("Join Now")])])]):s("div",[t._m(3),t._v(" "),s("div",{},[s("div",{staticClass:"create-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{id:"name",type:"name",required:"",placeholder:"name",autofocus:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"create-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{id:"email",type:"email",required:"",placeholder:"email",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"create-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"pass",attrs:{id:"password",type:"password",required:"",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"create-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirm,expression:"passwordConfirm"}],staticClass:"pass",attrs:{id:"password",type:"password",required:"",placeholder:"password"},domProps:{value:t.passwordConfirm},on:{input:function(e){e.target.composing||(t.passwordConfirm=e.target.value)}}})]),t._v(" "),s("button",{staticClass:"signin",on:{click:t.onRegister}},[t._v(" Register ")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("button",{staticClass:"join",on:{click:function(e){e.preventDefault(),t.login=!t.login}}},[t._v("Sign In Now")])])])]),t._v(" "),t._m(6)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h3",[this._v("Hello There!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list"},[e("div",{staticClass:"social"},[e("p",[this._v("Or connect with")])]),this._v(" "),e("div",{staticClass:"icon"},[e("img",{attrs:{src:"/storage/website-files/facebook.png",alt:""}})]),this._v(" "),e("div",{staticClass:"icon"},[e("img",{attrs:{src:"/storage/website-files/facebook.png",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"join"},[e("h4",[this._v("New To Everything Immersive?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h3",[this._v("Sign Up!")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list"},[e("div",{staticClass:"social"},[e("p",[this._v("Or connect with")])]),this._v(" "),e("div",{staticClass:"icon"},[e("img",{attrs:{src:"/storage/website-files/facebook.png",alt:""}})]),this._v(" "),e("div",{staticClass:"icon"},[e("img",{attrs:{src:"/storage/website-files/facebook.png",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"join"},[e("h4",[this._v("Already have an account?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rightimg"},[e("img",{attrs:{src:"/storage/website-files/create-background.jpg",alt:""}})])}],!1,null,null,null);e.default=o.exports},81:function(t,e,s){"use strict";function i(t,e,s,i,a,o,n,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),n?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=l):a&&(l=r?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var v=c.beforeCreate;c.beforeCreate=v?[].concat(v,l):[l]}return{exports:t,options:c}}s.d(e,"a",(function(){return i}))}}]);