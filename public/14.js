(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{224:function(e,t,a){"use strict";a.r(t);var s={methods:{onChange:function(e){var t=this;if(e.target.files.length){var a=e.target.files[0],s=new FileReader;s.readAsDataURL(a),s.onload=function(e){var s=e.target.result,i=new Image;i.onload=function(){t.$emit("loaded",{src:s,file:a,width:i.width,height:i.height})},i.onerror=function(){t.$emit("error")},i.src=s}}}}},i=a(80),n=Object(i.a)(s,(function(){var e=this.$createElement;return(this._self._c||e)("input",{staticClass:"fileinput",attrs:{type:"file",accept:"image/*"},on:{change:this.onChange}})}),[],!1,null,null,null);t.default=n.exports},232:function(e,t,a){var s={"./af":92,"./af.js":92,"./ar":93,"./ar-dz":94,"./ar-dz.js":94,"./ar-kw":95,"./ar-kw.js":95,"./ar-ly":96,"./ar-ly.js":96,"./ar-ma":97,"./ar-ma.js":97,"./ar-sa":98,"./ar-sa.js":98,"./ar-tn":99,"./ar-tn.js":99,"./ar.js":93,"./az":100,"./az.js":100,"./be":101,"./be.js":101,"./bg":102,"./bg.js":102,"./bm":103,"./bm.js":103,"./bn":104,"./bn.js":104,"./bo":105,"./bo.js":105,"./br":106,"./br.js":106,"./bs":107,"./bs.js":107,"./ca":108,"./ca.js":108,"./cs":109,"./cs.js":109,"./cv":110,"./cv.js":110,"./cy":111,"./cy.js":111,"./da":112,"./da.js":112,"./de":113,"./de-at":114,"./de-at.js":114,"./de-ch":115,"./de-ch.js":115,"./de.js":113,"./dv":116,"./dv.js":116,"./el":117,"./el.js":117,"./en-au":118,"./en-au.js":118,"./en-ca":119,"./en-ca.js":119,"./en-gb":120,"./en-gb.js":120,"./en-ie":121,"./en-ie.js":121,"./en-il":122,"./en-il.js":122,"./en-in":123,"./en-in.js":123,"./en-nz":124,"./en-nz.js":124,"./en-sg":125,"./en-sg.js":125,"./eo":126,"./eo.js":126,"./es":127,"./es-do":128,"./es-do.js":128,"./es-us":129,"./es-us.js":129,"./es.js":127,"./et":130,"./et.js":130,"./eu":131,"./eu.js":131,"./fa":132,"./fa.js":132,"./fi":133,"./fi.js":133,"./fil":134,"./fil.js":134,"./fo":135,"./fo.js":135,"./fr":136,"./fr-ca":137,"./fr-ca.js":137,"./fr-ch":138,"./fr-ch.js":138,"./fr.js":136,"./fy":139,"./fy.js":139,"./ga":140,"./ga.js":140,"./gd":141,"./gd.js":141,"./gl":142,"./gl.js":142,"./gom-deva":143,"./gom-deva.js":143,"./gom-latn":144,"./gom-latn.js":144,"./gu":145,"./gu.js":145,"./he":146,"./he.js":146,"./hi":147,"./hi.js":147,"./hr":148,"./hr.js":148,"./hu":149,"./hu.js":149,"./hy-am":150,"./hy-am.js":150,"./id":151,"./id.js":151,"./is":152,"./is.js":152,"./it":153,"./it-ch":154,"./it-ch.js":154,"./it.js":153,"./ja":155,"./ja.js":155,"./jv":156,"./jv.js":156,"./ka":157,"./ka.js":157,"./kk":158,"./kk.js":158,"./km":159,"./km.js":159,"./kn":160,"./kn.js":160,"./ko":161,"./ko.js":161,"./ku":162,"./ku.js":162,"./ky":163,"./ky.js":163,"./lb":164,"./lb.js":164,"./lo":165,"./lo.js":165,"./lt":166,"./lt.js":166,"./lv":167,"./lv.js":167,"./me":168,"./me.js":168,"./mi":169,"./mi.js":169,"./mk":170,"./mk.js":170,"./ml":171,"./ml.js":171,"./mn":172,"./mn.js":172,"./mr":173,"./mr.js":173,"./ms":174,"./ms-my":175,"./ms-my.js":175,"./ms.js":174,"./mt":176,"./mt.js":176,"./my":177,"./my.js":177,"./nb":178,"./nb.js":178,"./ne":179,"./ne.js":179,"./nl":180,"./nl-be":181,"./nl-be.js":181,"./nl.js":180,"./nn":182,"./nn.js":182,"./oc-lnc":183,"./oc-lnc.js":183,"./pa-in":184,"./pa-in.js":184,"./pl":185,"./pl.js":185,"./pt":186,"./pt-br":187,"./pt-br.js":187,"./pt.js":186,"./ro":188,"./ro.js":188,"./ru":189,"./ru.js":189,"./sd":190,"./sd.js":190,"./se":191,"./se.js":191,"./si":192,"./si.js":192,"./sk":193,"./sk.js":193,"./sl":194,"./sl.js":194,"./sq":195,"./sq.js":195,"./sr":196,"./sr-cyrl":197,"./sr-cyrl.js":197,"./sr.js":196,"./ss":198,"./ss.js":198,"./sv":199,"./sv.js":199,"./sw":200,"./sw.js":200,"./ta":201,"./ta.js":201,"./te":202,"./te.js":202,"./tet":203,"./tet.js":203,"./tg":204,"./tg.js":204,"./th":205,"./th.js":205,"./tl-ph":206,"./tl-ph.js":206,"./tlh":207,"./tlh.js":207,"./tr":208,"./tr.js":208,"./tzl":209,"./tzl.js":209,"./tzm":210,"./tzm-latn":211,"./tzm-latn.js":211,"./tzm.js":210,"./ug-cn":212,"./ug-cn.js":212,"./uk":213,"./uk.js":213,"./ur":214,"./ur.js":214,"./uz":215,"./uz-latn":216,"./uz-latn.js":216,"./uz.js":215,"./vi":217,"./vi.js":217,"./x-pseudo":218,"./x-pseudo.js":218,"./yo":219,"./yo.js":219,"./zh-cn":220,"./zh-cn.js":220,"./zh-hk":221,"./zh-hk.js":221,"./zh-mo":222,"./zh-mo.js":222,"./zh-tw":223,"./zh-tw.js":223};function i(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=n,e.exports=i,i.id=232},265:function(e,t,a){"use strict";a.r(t);a(83);var s=a(224),i=a(77),n=a(87),o=a(79),r=a.n(o);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c={props:["loaduser","events","auth"],mixins:[{methods:{setPlace:function(){var e=this.autocomplete.getPlace();this.updateLats(e),this.getAddressObject(e.address_components)},updateLats:function(e){this.location.latitude=e.geometry.location.lat(),this.location.longitude=e.geometry.location.lng()},getAddressObject:function(e){var t={postal_code:["postal_code"],region:["administrative_area_level_1","administrative_area_level_2","administrative_area_level_3","administrative_area_level_4","administrative_area_level_5"],city:["locality","sublocality","sublocality_level_1","sublocality_level_2","sublocality_level_3","sublocality_level_4"],country:["country"]},a={postal_code:"",region:"",city:"",country:""};e.forEach((function(e){for(var s in t)-1!==t[s].indexOf(e.types[0])&&(a[s]="country"===s?e.short_name:e.long_name)})),this.updateLocationFields(a)},updateLocationFields:function(e){null!==e&&"object"===l(e)&&null!==e.id&&(this.location=_.extend(this.location,e))}}},a(81).a],components:{ImageUpload:s.default,CubeSpinner:n.a},computed:{locationPlaceholder:function(){return this.location.city?this.location.city+", "+this.location.country:this.location.region?this.location.region:this.location.country?" the "+this.location.country:void 0},userOwnsPage:function(){return parseFloat(this.auth)==this.loaduser.id},canEditPage:function(){return this.userOwnsPage&&this.user.email_verified_at},submitObject:function(){return{name:this.user.name,location:this.location,email:this.user.email}},endPoint:function(){return"/users/".concat(this.user.id)}},data:function(){return{user:this.loaduser,avatar:this.loaduser.thumbImagePath?this.loaduser.thumbImagePath:"",location:this.loaduser.location?this.loaduser.location:this.initializeLocationObject(),imageFile:"",active:null,loading:!1,serverErrors:[],onEditUser:!1,uploading:!1,onSent:!1,disabled:!1,webp:"",formData:new FormData}},methods:{initializeLocationObject:function(){return{street:"",city:"",region:"",country:"",postal_code:"",hiddenLocation:"",hiddenLocationToggle:0,latitude:"",longitude:"",home:""}},logout:function(){axios.post("/logout").then((function(e){e.status,window.location.href="/"})).catch((function(e){}))},resend:function(){var e=this;this.disabled=!0,axios.post("/email/resend").then((function(t){e.onSent=!0,e.disabled=!1,console.log(t.data)})).catch((function(e){console.log(e.data)}))},onImageUpload:function(e){if(this.imageFile=e,this.$v.$touch(),this.$v.$invalid)return!1;this.onAddImage()},onAddImage:function(){this.onToggle(),this.formData.append("image",this.imageFile.file),this.formData.append("_method","PATCH"),axios.post(this.endPoint,this.formData).then((function(e){location.reload()})).catch((function(e){console.log(e)}))},onSubmit:function(){var e=this;if(this.checkVuelidate())return!1;axios.patch(this.endPoint,this.submitObject).then((function(t){e.onEditUser=!1,e.disabled=!1})).catch((function(t){e.onErrors(t)}))},onToggle:function(){this.uploading=!0,this.loading=!0,this.disabled=!0},canUseWebP:function(){var e=0==document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp");return this.loaduser.thumbImagePath&&e?this.avatar=this.loaduser.thumbImagePath:this.loaduser.thumbImagePath?this.avatar="".concat(this.loaduser.thumbImagePath.slice(0,-4),"jpg"):void 0}},mounted:function(){this.autocomplete=new google.maps.places.Autocomplete(this.$refs.autocomplete,{types:["geocode"]}),this.autocomplete.addListener("place_changed",this.setPlace),this.canUseWebP()},filters:{formatDate:function(e){return e?r()(String(e)).format("MMM YYYY"):""}},validations:{imageFile:{fileSize:function(){return!this.imageFile||this.imageFile.file.size<20971520},fileType:function(){return!this.imageFile||["image/jpeg","image/png","image/gif"].includes(this.imageFile.file.type)},imageRatio:function(){return!this.imageFile||this.imageFile.width>500&&this.imageFile.height>500},auth:function(){return!this.auth||this.auth!==this.user.id}},user:{name:{required:i.required,maxLength:Object(i.maxLength)(50),auth:function(){return!this.auth||this.auth!==this.user.id}},email:{required:i.required,email:i.email,auth:function(){return!this.auth||this.auth!==this.user.id}}}}},u=a(80),d=Object(u.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-profile grid"},[a("section",{staticClass:"user-profile-image"},[e.canEditPage?a("div",{staticClass:"user-profile-image"},[e.avatar?a("label",{staticClass:"user-profile-image__wrapper",class:{imageloaded:e.avatar,imageloading:e.uploading},style:"background:url('/storage/"+e.avatar+"')"},[a("image-upload",{on:{loaded:e.onImageUpload}}),e._v(" "),a("CubeSpinner",{attrs:{loading:e.loading}}),e._v(" "),a("span",{staticClass:"user-profile-image__update-text"},[e.uploading?a("p",[e._v("Loading")]):a("p",[e._v("Update")])])],1):e.user.gravatar?a("label",{staticClass:"user-profile-image__wrapper",class:{imageloaded:e.avatar,imageloading:e.uploading},style:"background:url('"+e.user.gravatar+"')center no-repeat;background-size: cover;"},[a("image-upload",{on:{loaded:e.onImageUpload}}),e._v(" "),a("CubeSpinner",{attrs:{loading:e.loading}}),e._v(" "),a("span",{staticClass:"user-profile-image__update-text"},[e.uploading?a("p",[e._v("Loading")]):a("p",[e._v("Update")])])],1):a("div",{staticClass:"user-profile-image"},[a("div",{staticClass:"user-profile-noimage__text",style:"background:"+e.user.hexColor},[a("h2",[e._v(e._s(e.loaduser.name.charAt(0)))])]),e._v(" "),a("label",{staticClass:"profile-wrapper",class:{imageloaded:e.avatar,imageloading:e.uploading}},[a("image-upload",{on:{loaded:e.onImageUpload}}),e._v(" "),a("CubeSpinner",{attrs:{loading:e.loading}}),e._v(" "),a("span",{staticClass:"user-profile-image__update-text"},[e.uploading?a("p",[e._v("Loading")]):a("p",[e._v("Update")])])],1)]),e._v(" "),e.$v.imageFile.$error?a("div",{staticClass:"validation-error"},[e.$v.imageFile.fileSize?e._e():a("p",{staticClass:"error"},[e._v("Image size is over 20MB")]),e._v(" "),e.$v.imageFile.fileType?e._e():a("p",{staticClass:"error"},[e._v("Needs to be a Jpg, Png or Gif")]),e._v(" "),e.$v.imageFile.imageRatio?e._e():a("p",{staticClass:"error"},[e._v("Needs to be at least 400 x 400")]),e._v(" "),e.$v.imageFile.auth?e._e():a("p",{staticClass:"error"},[e._v("you don't have permission to edit")])]):e._e()]):a("div",[e.avatar?a("div",[a("picture",[a("source",{attrs:{type:"image/webp",srcset:"/storage/"+e.avatar}}),e._v(" "),a("img",{staticClass:"user-profile-image",attrs:{src:"/storage/"+e.avatar.slice(0,-4)+"jpg",alt:""+e.loaduser.name}})])]):e.user.gravatar?a("div",[a("picture",[a("img",{staticClass:"user-profile-image",attrs:{src:e.user.gravatar,alt:""+e.loaduser.name}})])]):a("div",{staticClass:"user-profile-noimage__text",style:"background:"+e.user.hexColor},[a("h2",[e._v(e._s(e.loaduser.name.charAt(0)))])])])]),e._v(" "),a("section",{staticClass:"user-enter-profile"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.onEditUser,expression:"onEditUser"}]},[a("div",{staticClass:"field"},[a("div",{staticClass:"text"},[a("div",{staticClass:"field"},[a("label",[e._v("User Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],class:{active:"user"==e.active,error:e.$v.user.name.$error},attrs:{type:"text"},domProps:{value:e.user.name},on:{click:function(t){e.active="website"},blur:function(t){e.active=null},input:[function(t){t.target.composing||e.$set(e.user,"name",t.target.value)},e.$v.user.name.$touch]}}),e._v(" "),e.$v.user.name.$error?a("div",{staticClass:"validation-error"},[e.$v.user.name.required?e._e():a("p",{staticClass:"error"},[e._v("Must have a name")]),e._v(" "),e.$v.user.name.maxLength?e._e():a("p",{staticClass:"error"},[e._v("Can't be more than 50 characters")]),e._v(" "),e.$v.user.name.auth?e._e():a("p",{staticClass:"error"},[e._v("You don't have permission to edit")])]):e._e()]),e._v(" "),a("div",{staticClass:"field"},[a("label",[e._v(" Location ")]),e._v(" "),a("input",{ref:"autocomplete",class:{active:"location"==e.active},attrs:{placeholder:e.locationPlaceholder?e.locationPlaceholder:"Choose your location",autocomplete:"false",onfocus:"value = ''",type:"text"},on:{click:function(t){e.active="location"},blur:function(t){e.active=null}}})]),e._v(" "),a("div",{staticClass:"field"},[a("label",[e._v(" Email ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],class:{active:"email"==e.active,error:e.$v.user.email.$error},attrs:{type:"email"},domProps:{value:e.user.email},on:{click:function(t){e.active="email"},blur:function(t){e.active=null},input:[function(t){t.target.composing||e.$set(e.user,"email",t.target.value)},e.$v.user.email.$touch]}}),e._v(" "),e.$v.user.email.$error?a("div",{staticClass:"validation-error"},[e.$v.user.email.required?e._e():a("p",{staticClass:"error"},[e._v("Must have an email")]),e._v(" "),e.$v.user.email.email?e._e():a("p",{staticClass:"error"},[e._v("Must be a valid email")]),e._v(" "),e.$v.user.email.auth?e._e():a("p",{staticClass:"error"},[e._v("You don't have permission to edit")])]):e._e()]),e._v(" "),a("div",{},[a("button",{staticClass:"save",attrs:{disabled:e.disabled},on:{click:function(t){return t.preventDefault(),e.onSubmit()}}},[e._v(" Save ")]),e._v(" "),a("button",{staticClass:"cancel",on:{click:function(t){t.preventDefault(),e.onEditUser=!1}}},[e._v(" Cancel ")])])])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.onEditUser,expression:"!onEditUser"}]},[a("div",{staticClass:"profile-user-name"},[a("h1",[e._v(e._s(e.user.name))])]),e._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"profile-user-info"},[e._v("\n                    Member since "+e._s(e._f("formatDate")(e.user.created_at))+"\n                ")]),e._v(" "),e.canEditPage?a("div",{staticClass:"profile-user-edit",on:{click:function(t){e.onEditUser=!0}}},[e._v("\n                    Edit profile\n                ")]):e._e(),e._v(" "),!e.userOwnsPage||e.user.email_verified_at||e.onSent?e._e():a("button",{staticClass:"verify-email",attrs:{disabled:e.disabled},on:{click:function(t){return t.preventDefault(),e.resend(t)}}},[e._v("\n                    Please verify your account.\n                ")]),e._v(" "),e.userOwnsPage&&!e.user.email_verified_at&&e.onSent?a("div",{staticClass:"ver a"},[e._v("\n                    Please check your email.\n                ")]):e._e()]),e._v(" "),e.location.latitude?a("div",{staticClass:"profile-user-info"},[a("div",[e._v("\n                    Lives near "),a("span",{staticStyle:{"font-weight":"600",color:"#616161"}},[e._v(e._s(e.locationPlaceholder))])])]):e._e()]),e._v(" "),a("div",{staticClass:"logout mobile"},[a("button",{on:{click:function(t){return t.preventDefault(),e.logout()}}},[e._v("Log out")])])])])}),[],!1,null,null,null);t.default=d.exports},81:function(e,t,a){"use strict";t.a={methods:{checkVuelidate:function(){return this.$v.$touch(),!this.$v.$invalid&&(this.disabled=!0),this.$v.$invalid},onErrors:function(e){e&&(this.serverErrors=e.response.data.errors),this.disabled=!1},onBackInitial:function(){return window.location.href="/create-event/edit/"},onBack:function(e){return window.location.href="/create-event/".concat(this.event.slug,"/").concat(e)},onFetch:function(e){return"/create-event/".concat(this.event.slug,"/").concat(e,"/fetch?timestamp=").concat((new Date).getTime())},onForward:function(e){return window.location.href="/create-event/".concat(this.event.slug,"/").concat(e)},onRegistered:function(){return window.location.href="/email/verify"},onFinishOrganizer:function(e){return window.location.href=e}}}},87:function(e,t,a){"use strict";var s={props:{loading:{type:Boolean,default:!0}},data:function(){return{styles:{width:this.width+"px",height:this.height+"px"}}},name:"CubeSpinner"},i=a(80),n=Object(i.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return this.loading?t("div",{staticClass:"spinner"},[this._m(0),this._v(" "),t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[t("defs",[t("filter",{attrs:{id:"goo"}},[t("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"10",result:"blur"}}),this._v(" "),t("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"}})],1)])])]):this._e()}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"area"},[t("div",{staticClass:"dot dot-1"}),this._v(" "),t("div",{staticClass:"dot dot-2"}),this._v(" "),t("div",{staticClass:"dot dot-3"})])}],!1,null,null,null);t.a=n.exports}}]);