(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{321:function(e,t,n){"use strict";n.r(t);var i=n(81),a=n(82),o=n.n(a),s=n(77),r={props:["event","categories"],mixins:[i.a],components:{Multiselect:o.a},computed:{endpoint:function(){return"/create-event/".concat(this.event.slug,"/category")}},data:function(){return{selectedCategory:"",categoryOptions:this.categories,active:null,pageHeight:0,disabled:!1,serverErrors:""}},methods:{onSubmit:function(e){var t=this;if(this.checkVuelidate())return!1;axios.patch(this.endpoint,this.selectedCategory).then((function(n){"exit"==e?t.onBackInitial():t.onForward("shows")})).catch((function(e){t.onErrors(e)}))},handleResize:function(){this.pageHeight="height:calc(".concat(window.innerHeight,"px - 7rem)")},onLoad:function(){var e=this;axios.get(this.onFetch("category")).then((function(t){e.selectedCategory=t.data}))},selectCategoryType:function(){return this.event.hasLocation?this.categoryOptions=this.categories.filter((function(e){return 0==e.remote})):this.categoryOptions=this.categories.filter((function(e){return 1==e.remote}))}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize(),this.onLoad(),this.selectCategoryType()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},validations:{selectedCategory:{required:s.required}}},c=n(80),l=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"event-create__category grid"},[n("section",{staticClass:"event-enter-category"},[e._m(0),e._v(" "),n("multiselect",{directives:[{name:"show",rawName:"v-show",value:e.categories.length>0,expression:"categories.length > 0"}],class:{active:"category"==e.active,error:e.$v.selectedCategory.$error},attrs:{placeholder:"Select Category",label:"name","track-by":"name",deselectLabel:"","allow-empty":!1,options:e.categoryOptions,"open-direction":"bottom"},on:{input:e.$v.selectedCategory.$touch,click:function(t){e.active="category"},blur:function(t){e.active=null}},scopedSlots:e._u([{key:"option",fn:function(t){return[n("div",{staticClass:"option__desc"},[n("span",{staticClass:"option__title"},[e._v(e._s(t.option.name))])])]}}]),model:{value:e.selectedCategory,callback:function(t){e.selectedCategory=t},expression:"selectedCategory"}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedCategory,expression:"selectedCategory"}],attrs:{type:"hidden",name:"category"},domProps:{value:e.selectedCategory},on:{input:function(t){t.target.composing||(e.selectedCategory=t.target.value)}}}),e._v(" "),e.$v.selectedCategory.$error?n("div",{staticClass:"validation-error"},[e.$v.selectedCategory.required?e._e():n("p",{staticClass:"error"},[e._v("Please select your event's category")])]):e._e(),e._v(" "),n("div",[n("p",{domProps:{textContent:e._s(this.selectedCategory?e.selectedCategory.description:"")}})])],1),e._v(" "),e.selectedCategory?n("section",{staticClass:"event-show-category__image",style:e.pageHeight},[n("picture",[n("source",{attrs:{type:"image/webp",srcset:"/storage/"+e.selectedCategory.largeImagePath}}),e._v(" "),n("img",{attrs:{src:"/storage/"+e.selectedCategory.largeImagePath.slice(0,-4)+"jpg}"}})])]):e._e(),e._v(" "),n("div",{staticClass:"event-create__submit-button"},[n("button",{staticClass:"nav-back-button",attrs:{disabled:e.disabled},on:{click:function(t){return t.preventDefault(),e.onSubmit("exit")}}},[e._v(" Save and Exit ")])]),e._v(" "),n("div",{staticClass:"create-button__back"},[n("button",{staticClass:"create",attrs:{disabled:e.disabled},on:{click:function(t){return t.preventDefault(),e.onBack("location")}}},[e._v(" Back ")])]),e._v(" "),n("div",{staticClass:"create-button__forward"},[n("button",{staticClass:"create",attrs:{disabled:e.disabled},on:{click:function(t){return t.preventDefault(),e.onSubmit()}}},[e._v(" Save and Continue ")])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("h2",[this._v("Immersive Categories")])])}],!1,null,null,null);t.default=l.exports},81:function(e,t,n){"use strict";t.a={methods:{checkVuelidate:function(){return this.$v.$touch(),!this.$v.$invalid&&(this.disabled=!0),this.$v.$invalid},onErrors:function(e){e&&(this.serverErrors=e.response.data.errors),this.disabled=!1},onBackInitial:function(){return window.location.href="/create-event/edit/"},onBack:function(e){return window.location.href="/create-event/".concat(this.event.slug,"/").concat(e)},onFetch:function(e){return"/create-event/".concat(this.event.slug,"/").concat(e,"/fetch?timestamp=").concat((new Date).getTime())},onForward:function(e){return window.location.href="/create-event/".concat(this.event.slug,"/").concat(e)},onRegistered:function(){return window.location.href="/email/verify"},onFinishOrganizer:function(e){return window.location.href=e}}}}}]);