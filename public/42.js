(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{307:function(t,e,o){"use strict";o.r(e);var n=o(77),i={data:function(){return{remoteLocations:"",activeItem:"",remoteLocation:{name:"",description:""},isModalVisible:!1,isEditModalVisible:!1,modalDelete:""}},computed:{},methods:{submitNewLocation:function(){var t=this;if(this.$v.$touch(),this.$v.$invalid)return!1;var e={name:this.remoteLocation.name,description:this.remoteLocation.description};axios.post("/remotelocations",e).then((function(t){location.reload()})).catch((function(e){t.isModalVisible=!1}))},showModal:function(t){this.modalDelete=t,this.isEditModalVisible=!0},deleteLocation:function(t){var e=this;axios.delete("/remotelocations/".concat(t.id)).then((function(t){console.log(t.data),e.isEditModalVisible=!1,e.loadLocations()})).catch((function(t){e.serverErrors=t.response.data.errors}))},loadLocations:function(){var t=this;axios.get("/remotelocations").then((function(e){t.remoteLocations=e.data})).catch((function(e){t.serverErrors=e.response.data.errors}))},saveLocation:function(t){var e=this,o={name:t.name};axios.patch("/remotelocations/".concat(t.id),o).then((function(t){console.log(t.data),e.loadLocations()})).catch((function(t){e.serverErrors=t.response.data.errors}))},saveDescription:function(t){var e=this,o={description:t.description};axios.patch("/remotelocations/".concat(t.id),o).then((function(t){console.log(t.data)})).catch((function(t){e.serverErrors=t.response.data.errors}))},saveRank:function(t){var e=this,o={rank:t.rank};axios.patch("/remotelocations/".concat(t.id),o).then((function(t){console.log(t.data),e.loadLocations()})).catch((function(t){e.serverErrors=t.response.data.errors}))}},created:function(){this.loadLocations()},validations:{remoteLocation:{name:{required:n.required},description:{required:n.required}}}},a=o(80),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"genres"},[o("div",{},[o("div",{staticClass:"title"},[o("h1",[t._v("Remote Locations")]),t._v(" "),o("div",{staticClass:"add"},[o("button",{on:{click:function(e){e.preventDefault(),t.isModalVisible=!0}}},[o("p",[t._v("+")])])])])]),t._v(" "),t._l(t.remoteLocations,(function(e,n){return o("div",{staticClass:"list"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"remoteLocation.name"}],attrs:{type:"text",placeholder:"Remote Location"},domProps:{value:e.name},on:{blur:function(o){return t.saveLocation(e)},input:function(o){o.target.composing||t.$set(e,"name",o.target.value)}}}),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"remoteLocation.description"}],attrs:{type:"text",placeholder:"Remote location description"},domProps:{value:e.description},on:{blur:function(o){return t.saveDescription(e)},input:function(o){o.target.composing||t.$set(e,"description",o.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.rank,expression:"remoteLocation.rank"}],attrs:{type:"text",placeholder:"Remote Location"},domProps:{value:e.rank},on:{blur:function(o){return t.saveRank(e)},input:function(o){o.target.composing||t.$set(e,"rank",o.target.value)}}}),t._v(" "),o("button",{staticClass:"delete-circle",on:{click:function(o){return o.preventDefault(),t.showModal(e)}}},[o("p",[t._v("X")])])])})),t._v(" "),t.isEditModalVisible?o("modal",{on:{close:function(e){t.isEditModalVisible=!1}}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div",{staticClass:"circle del"},[o("p",[t._v("X")])])]),t._v(" "),o("div",{attrs:{slot:"body"},slot:"body"},[o("h3",[t._v("Are you sure?")]),t._v(" "),o("p",[t._v("You are deleting "+t._s(t.modalDelete.location)+".")])]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("button",{staticClass:"btn del",on:{click:function(e){return e.preventDefault(),t.deleteLocation(t.modalDelete)}}},[t._v("Delete")])])]):t._e(),t._v(" "),o("div",{staticClass:"pin noimg"},[t.isModalVisible?o("modal",{on:{close:function(e){t.isModalVisible=!1}}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("div")]),t._v(" "),o("div",{staticClass:"body",attrs:{slot:"body"},slot:"body"},[o("div",{staticClass:"text"},[o("div",{staticClass:"name"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.remoteLocation.name,expression:"remoteLocation.name"}],class:{active:t.activeItem="name"},attrs:{type:"text",placeholder:"Remote Location"},domProps:{value:t.remoteLocation.name},on:{click:function(e){t.activeItem="name"},blur:function(e){t.activeItem=null},input:[function(e){e.target.composing||t.$set(t.remoteLocation,"name",e.target.value)},t.$v.remoteLocation.name.$touch]}}),t._v(" "),t.$v.remoteLocation.name.$error?o("div",{staticClass:"validation-error"},[t.$v.remoteLocation.name.required?t._e():o("p",{staticClass:"error"},[t._v("Please Add Remote Location ")])]):t._e(),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.remoteLocation.description,expression:"remoteLocation.description"}],attrs:{type:"text",placeholder:"Remote location description"},domProps:{value:t.remoteLocation.description},on:{blur:function(e){return t.saveDescription(t.remoteLocation)},input:function(e){e.target.composing||t.$set(t.remoteLocation,"description",e.target.value)}}})])])]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"},[o("button",{staticClass:"btn sub",on:{click:function(e){return e.preventDefault(),t.submitNewLocation()}}},[t._v("Submit")])])]):t._e()],1)],2)}),[],!1,null,null,null);e.default=s.exports},80:function(t,e,o){"use strict";function n(t,e,o,n,i,a,s,r){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=o,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):i&&(c=r?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}o.d(e,"a",(function(){return n}))}}]);