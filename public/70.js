(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{W0bX:function(e,t,n){"use strict";n.r(t);var a,o=n("ta7f"),r=n("jl8+");function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=(s(a={components:{Multiselect:n.n(r).a},computed:{},data:function(){return{organizer:[],organizerList:[],initOrganizers:[],isModalVisible:!1,isEditModalVisible:!1,modalDelete:"",isLoading:"",selectedModal:"",modal:"",newOwner:"bob",user:"",users:[],changeName:!1,showEdit:!1,pagination:{paginate:10}}}},"computed",{organizers:function(){return this.organizerList.length?this.organizerList:this.initOrganizers}}),s(a,"methods",{showModal:function(e,t){this.selectedModal=e,this.modal=t},deleteOrg:function(e){var t=this;axios.delete("/organizer/".concat(this.selectedModal.slug)).then((function(e){t.events=e.data,t.selectedModal="",t.modal="",t.onLoad()})).catch((function(e){e.response.data.errors}))},loadMore:function(){this.pagination.paginate+=10,this.onLoad()},onLoad:function(){var e=this;axios.post("/admin/organizer/fetch",this.pagination).then((function(t){console.log(t.data),e.initOrganizers=t.data})).catch((function(t){e.serverErrors=t.res.data.errors}))},onChangeOwner:function(){var e=this;axios.post("/change/organizer/".concat(this.selectedModal.slug),this.user).then((function(t){console.log(t.data),e.modal="",e.onLoad()}))},asyncGenerateUserList:function(e){var t=this;axios.get("/api/search/user/list",{params:{keywords:e}}).then((function(e){t.users=e.data})).catch((function(e){t.loadUsers()}))},loadUsers:function(){var e=this;axios.get("/api/search/user/list").then((function(t){e.users=t.data})).catch((function(t){e.serverErrors=t.response.data.errors}))},onSaveUser:function(e){var t=this,n={user_id:e.user_id};axios.patch("/admin/organizer/".concat(e.slug),n).then((function(e){console.log(e.data),t.onLoad()})).catch((function(e){t.serverErrors=e.response.data.errors}))},onSaveName:function(e){var t=this,n={name:e.name};axios.patch("/admin/organizer/".concat(e.slug),n).then((function(e){console.log(e.data),t.onLoad()})).catch((function(e){t.serverErrors=e.res.data.errors}))},asyncGenerateOrganizerList:function(e){var t=this;axios.get("/api/search/organizer",{params:{keywords:e}}).then((function(e){console.log(e.data),t.organizerList=e.data}))}}),s(a,"created",(function(){this.onLoad(),this.loadUsers()})),s(a,"validations",{region:{required:o.required}}),a),l=n("KHd+"),c=Object(l.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"organizers"},[e._m(0),e._v(" "),n("div",{staticClass:"field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.organizer,expression:"organizer"}],staticClass:"general",attrs:{placeholder:"Filter by organization name",type:"text"},domProps:{value:e.organizer},on:{keyup:function(t){return e.asyncGenerateOrganizerList(e.organizer)},input:function(t){t.target.composing||(e.organizer=t.target.value)}}})]),e._v(" "),e._l(e.organizers,(function(t,a){return n("div",{staticClass:"list"},[e.changeName?e._e():n("div",[n("span",{on:{mouseover:function(t){e.showEdit=!0}}},[e._v("\n                "+e._s(t.name)+"\n            ")]),e._v(" "),e.showEdit?n("button",{staticClass:"default",on:{click:function(t){e.changeName=!0}}},[e._v("Edit")]):e._e()]),e._v(" "),e.changeName?n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"organizer.name"}],attrs:{type:"text",placeholder:"Organization"},domProps:{value:t.name},on:{blur:function(n){return e.onSaveName(t)},input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}}):e._e(),e._v(" "),n("div",[e._v("\n            "+e._s(t.user.email)+"\n        ")]),e._v(" "),n("div",[n("button",{on:{click:function(n){return n.preventDefault(),e.showModal(t,"changeOrg")}}},[e._v("Change Owner")])]),e._v(" "),n("button",{staticClass:"delete-circle",on:{click:function(n){return n.preventDefault(),e.showModal(t,"deleteOrg")}}},[n("p",[e._v("X")])])])})),e._v(" "),n("div",{staticClass:"pagination-button"},[n("button",{staticClass:"default",on:{click:e.loadMore}},[e._v("Load more")])]),e._v(" "),"deleteOrg"==e.modal?n("modal",{on:{close:function(t){e.modal=null}}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"circle del"},[n("p",[e._v("X")])])]),e._v(" "),n("div",{attrs:{slot:"body"},slot:"body"},[n("h3",[e._v("Are you sure?")]),e._v(" "),n("p",[e._v("You are deleting your "+e._s(e.selectedModal.name)+" organization.")])]),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("button",{staticClass:"btn del",on:{click:function(t){return e.deleteOrg()}}},[e._v("Delete")])])]):e._e(),e._v(" "),"changeOrg"==e.modal?n("modal",{on:{close:function(t){e.modal=null}}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"circle sub"},[n("p",[e._v("!")])])]),e._v(" "),n("div",{attrs:{slot:"body"},slot:"body"},[n("h3",[e._v("Change Organizer Owner")]),e._v(" "),n("multiselect",{attrs:{"deselect-label":"Can't remove this value","track-by":"email",label:"email",placeholder:"Select one",options:e.users},on:{input:function(t){return e.asyncGenerateUserList(e.user)}},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("button",{staticClass:"btn sub",on:{click:function(t){return e.onChangeOwner()}}},[e._v("Change Owner")])])]):e._e()],2)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("div",{staticClass:"title"},[t("h1",[this._v("Organizers")])])])}],!1,null,null,null);t.default=c.exports}}]);