(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"KHd+":function(t,e,n){"use strict";function s(t,e,n,s,a,i,o,r){var c,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=n,d._compiled=!0),s&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=c):a&&(c=r?function(){a.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(d.functional){d._injectStyles=c;var l=d.render;d.render=function(t,e){return c.call(e),l(t,e)}}else{var v=d.beforeCreate;d.beforeCreate=v?[].concat(v,c):[c]}return{exports:t,options:d}}n.d(e,"a",(function(){return s}))},Osfp:function(t,e,n){"use strict";n.r(e);var s={data:function(){return{events:"",eventList:"",pagination:{paginate:10}}},computed:{},methods:{loadEvents:function(){var t=this;axios.post("/admin/boneyard/fetch",this.pagination).then((function(e){console.log(e.data),t.events=e.data})).catch((function(e){t.serverErrors=e.response.data.errors}))},asyncGenerateEventList:function(t){var e=this;axios.get("/api/admin/search/boneyard",{params:{keywords:t}}).then((function(t){console.log(t.data),e.events=t.data}))},loadMore:function(){this.pagination.paginate+=10,this.loadEvents()}},created:function(){this.loadEvents()}},a=n("KHd+"),i=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin-events"},[t._m(0),t._v(" "),n("div",{staticClass:"field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.eventList,expression:"eventList"}],staticClass:"general",attrs:{placeholder:"Filter by event name",type:"text"},domProps:{value:t.eventList},on:{keyup:function(e){return t.asyncGenerateEventList(t.eventList)},input:function(e){e.target.composing||(t.eventList=e.target.value)}}})]),t._v(" "),t._l(t.events,(function(e,s){return n("div",{staticClass:"list"},[n("div",[n("img",{staticStyle:{height:"40px",width:"40px","object-fit":"cover"},attrs:{src:"/storage/"+e.thumbImagePath,alt:""}})]),t._v(" "),n("div",[t._v("\n            "+t._s(e.name)+"\n        ")])])})),t._v(" "),n("div",{staticClass:"pagination-button"},[n("button",{staticClass:"default",on:{click:t.loadMore}},[t._v("Load more")])])],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("div",{staticClass:"admin-events__title"},[e("h1",[this._v("Boneyard")])])])}],!1,null,null,null);e.default=i.exports}}]);