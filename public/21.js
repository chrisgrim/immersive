(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{229:function(t,e,s){var a={"./af":94,"./af.js":94,"./ar":95,"./ar-dz":96,"./ar-dz.js":96,"./ar-kw":97,"./ar-kw.js":97,"./ar-ly":98,"./ar-ly.js":98,"./ar-ma":99,"./ar-ma.js":99,"./ar-sa":100,"./ar-sa.js":100,"./ar-tn":101,"./ar-tn.js":101,"./ar.js":95,"./az":102,"./az.js":102,"./be":103,"./be.js":103,"./bg":104,"./bg.js":104,"./bm":105,"./bm.js":105,"./bn":106,"./bn.js":106,"./bo":107,"./bo.js":107,"./br":108,"./br.js":108,"./bs":109,"./bs.js":109,"./ca":110,"./ca.js":110,"./cs":111,"./cs.js":111,"./cv":112,"./cv.js":112,"./cy":113,"./cy.js":113,"./da":114,"./da.js":114,"./de":115,"./de-at":116,"./de-at.js":116,"./de-ch":117,"./de-ch.js":117,"./de.js":115,"./dv":118,"./dv.js":118,"./el":119,"./el.js":119,"./en-SG":120,"./en-SG.js":120,"./en-au":121,"./en-au.js":121,"./en-ca":122,"./en-ca.js":122,"./en-gb":123,"./en-gb.js":123,"./en-ie":124,"./en-ie.js":124,"./en-il":125,"./en-il.js":125,"./en-nz":126,"./en-nz.js":126,"./eo":127,"./eo.js":127,"./es":128,"./es-do":129,"./es-do.js":129,"./es-us":130,"./es-us.js":130,"./es.js":128,"./et":131,"./et.js":131,"./eu":132,"./eu.js":132,"./fa":133,"./fa.js":133,"./fi":134,"./fi.js":134,"./fo":135,"./fo.js":135,"./fr":136,"./fr-ca":137,"./fr-ca.js":137,"./fr-ch":138,"./fr-ch.js":138,"./fr.js":136,"./fy":139,"./fy.js":139,"./ga":140,"./ga.js":140,"./gd":141,"./gd.js":141,"./gl":142,"./gl.js":142,"./gom-latn":143,"./gom-latn.js":143,"./gu":144,"./gu.js":144,"./he":145,"./he.js":145,"./hi":146,"./hi.js":146,"./hr":147,"./hr.js":147,"./hu":148,"./hu.js":148,"./hy-am":149,"./hy-am.js":149,"./id":150,"./id.js":150,"./is":151,"./is.js":151,"./it":152,"./it-ch":153,"./it-ch.js":153,"./it.js":152,"./ja":154,"./ja.js":154,"./jv":155,"./jv.js":155,"./ka":156,"./ka.js":156,"./kk":157,"./kk.js":157,"./km":158,"./km.js":158,"./kn":159,"./kn.js":159,"./ko":160,"./ko.js":160,"./ku":161,"./ku.js":161,"./ky":162,"./ky.js":162,"./lb":163,"./lb.js":163,"./lo":164,"./lo.js":164,"./lt":165,"./lt.js":165,"./lv":166,"./lv.js":166,"./me":167,"./me.js":167,"./mi":168,"./mi.js":168,"./mk":169,"./mk.js":169,"./ml":170,"./ml.js":170,"./mn":171,"./mn.js":171,"./mr":172,"./mr.js":172,"./ms":173,"./ms-my":174,"./ms-my.js":174,"./ms.js":173,"./mt":175,"./mt.js":175,"./my":176,"./my.js":176,"./nb":177,"./nb.js":177,"./ne":178,"./ne.js":178,"./nl":179,"./nl-be":180,"./nl-be.js":180,"./nl.js":179,"./nn":181,"./nn.js":181,"./pa-in":182,"./pa-in.js":182,"./pl":183,"./pl.js":183,"./pt":184,"./pt-br":185,"./pt-br.js":185,"./pt.js":184,"./ro":186,"./ro.js":186,"./ru":187,"./ru.js":187,"./sd":188,"./sd.js":188,"./se":189,"./se.js":189,"./si":190,"./si.js":190,"./sk":191,"./sk.js":191,"./sl":192,"./sl.js":192,"./sq":193,"./sq.js":193,"./sr":194,"./sr-cyrl":195,"./sr-cyrl.js":195,"./sr.js":194,"./ss":196,"./ss.js":196,"./sv":197,"./sv.js":197,"./sw":198,"./sw.js":198,"./ta":199,"./ta.js":199,"./te":200,"./te.js":200,"./tet":201,"./tet.js":201,"./tg":202,"./tg.js":202,"./th":203,"./th.js":203,"./tl-ph":204,"./tl-ph.js":204,"./tlh":205,"./tlh.js":205,"./tr":206,"./tr.js":206,"./tzl":207,"./tzl.js":207,"./tzm":208,"./tzm-latn":209,"./tzm-latn.js":209,"./tzm.js":208,"./ug-cn":210,"./ug-cn.js":210,"./uk":211,"./uk.js":211,"./ur":212,"./ur.js":212,"./uz":213,"./uz-latn":214,"./uz-latn.js":214,"./uz.js":213,"./vi":215,"./vi.js":215,"./x-pseudo":216,"./x-pseudo.js":216,"./yo":217,"./yo.js":217,"./zh-cn":218,"./zh-cn.js":218,"./zh-hk":219,"./zh-hk.js":219,"./zh-tw":220,"./zh-tw.js":220};function i(t){var e=n(t);return s(e)}function n(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id=229},278:function(t,e,s){"use strict";s.r(e);s(85);var a=s(86),i=s(84),n=s.n(i),r=s(78),o=s(87),l=s(80),c=s.n(l),u={props:["loaduser","events","loc","auth"],components:{Multiselect:n.a,ImageUpload:a.default,CubeSpinner:o.a},computed:{locationPlaceholder:function(){return this.location.city?this.location.city+", "+this.location.country:this.location.region?this.location.region:this.location.country?" the "+this.location.country:void 0}},data:function(){return{user:this.loaduser,avatar:this.loaduser.image_path?'url("/storage/'.concat(this.loaduser.image_path,'")'):'url("/storage/website-files/default-user-icon.jpg")',location:this.loc[0]?this.loc[0]:{},gettingLocation:!1,errorStr:"",finalImage:"",activeItem:null,isLoading:!1,onUserEdit:!1,onUpClass:!1,validationErrors:"",color:"#"+Math.floor(16777215*Math.random()).toString(16)}},methods:{userEdit:function(){this.onUserEdit=!0,this.validationErrors=""},onImageUpload:function(t){if(this.finalImage=t.file,this.finalImage.width=t.width,this.finalImage.height=t.height,this.validationErrors="",this.$v.$touch(),this.$v.$invalid)return!1;this.onUpClass=!0,this.avatar=t.src,this.addImage(t)},setPlace:function(){var t=this.autocomplete.getPlace();this.center=L.latLng(t.geometry.location.lat(),t.geometry.location.lng()),this.getAddressObject(t.address_components,t.geometry.location.lat(),t.geometry.location.lng())},addImage:function(t){var e=this;this.isLoading=!0,this.dis=!0,console.log(t);var s=new FormData;s.append("image",this.finalImage),s.append("_method","PATCH"),axios.post("/users/".concat(this.user.id),s).then((function(t){e.isLoading=!1,e.onUpClass=!1,e.dis=!1,console.log(t.data)})).catch((function(t){console.log(t.data),t.data?e.validationErrors=t.response.data.errors:e.validationErrors={wrong:"sorry! something has gone wrong"},e.avatar="/storage/website-files/default-user-icon.jpg",e.isLoading=!1,e.onUpClass=!1,e.dis=!1}))},submitUser:function(){var t=this;if(this.$v.$touch(),this.$v.$invalid)return!1;var e={name:this.user.name,location:this.location};axios.patch("/users/".concat(this.user.id),e).then((function(e){console.log(e.data),t.onUserEdit=!1})).catch((function(e){t.validationErrors=e.response.data.errors}))},getAddressObject:function(t,e,s){var a=this,i={home:["street_number"],postal_code:["postal_code"],street:["street_address","route"],region:["administrative_area_level_1","administrative_area_level_2","administrative_area_level_3","administrative_area_level_4","administrative_area_level_5"],city:["locality","sublocality","sublocality_level_1","sublocality_level_2","sublocality_level_3","sublocality_level_4"],country:["country"]};this.location={home:"",postal_code:"",street:"",region:"",city:"",country:"",latitude:e,longitude:s},t.forEach((function(t){for(var e in i)-1!==i[e].indexOf(t.types[0])&&(a.location[e]="country"===e?t.short_name:t.long_name)}))}},mounted:function(){this.autocomplete=new google.maps.places.Autocomplete(this.$refs.autocomplete,{types:["geocode"]}),this.autocomplete.addListener("place_changed",this.setPlace),console.log(parseFloat(this.auth)!==this.user.id?"yes":"no")},filters:{formatDate:function(t){return t?c()(String(t)).format("MMM YYYY"):""}},validations:{avatar:{fileSize:function(){return!this.finalImage||this.finalImage.size<20971520},fileType:function(){return!this.finalImage||["image/jpeg","image/png","image/gif"].includes(this.finalImage.type)},imageRatio:function(){return!this.finalImage||this.finalImage.width>500&&this.finalImage.height>500},auth:function(){return!this.auth||this.auth!==this.user.id}},user:{name:{required:r.required,maxLength:Object(r.maxLength)(50),auth:function(){return!this.auth||this.auth!==this.user.id}}}}},d=s(81),v=Object(d.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile"},[s("div",{staticClass:"body"},[s("div",{staticClass:"left"},[parseFloat(this.auth)!==t.user.id?s("div",{staticClass:"image"},[this.loaduser.image_path?s("img",{attrs:{src:""+(t.avatar?t.avatar:""),alt:""}}):s("h2",[t._v(t._s(t.loaduser.name.charAt(0)))])]):t._e(),t._v(" "),parseFloat(this.auth)==t.user.id?s("div",{staticClass:"image"},[this.loaduser.image_path?t._e():s("div",{staticClass:"icontext"},[s("h2",[t._v(t._s(t.loaduser.name.charAt(0)))])]),t._v(" "),s("label",{staticClass:"wrapper",class:{imageloaded:t.avatar,imageloading:t.onUpClass},style:"background:"+(t.avatar?t.color:"")},[s("image-upload",{on:{loaded:t.onImageUpload}}),t._v(" "),s("CubeSpinner",{attrs:{loading:t.isLoading}}),t._v(" "),s("span",{staticClass:"text"},[t.onUpClass?s("p",[t._v("Loading")]):s("p",[t._v("Update")]),t._v(" "),t.validationErrors.wrong?s("p",{staticClass:"error",domProps:{textContent:t._s(t.validationErrors.wrong)}}):t._e()])],1),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.avatar,expression:"avatar"}],attrs:{type:"hidden",name:"profileImagePath"},domProps:{value:t.avatar},on:{input:[function(e){e.target.composing||(t.avatar=e.target.value)},function(e){return t.$v.avatar.$touch()}]}}),t._v(" "),t.$v.avatar.$error?s("div",{staticClass:"validation-error"},[t.$v.avatar.fileSize?t._e():s("p",{staticClass:"error"},[t._v("Image size is over 20MB")]),t._v(" "),t.$v.finalImage.fileType?t._e():s("p",{staticClass:"error"},[t._v("Needs to be a Jpg, Png or Gif")]),t._v(" "),t.$v.finalImage.imageRatio?t._e():s("p",{staticClass:"error"},[t._v("Needs to be at least 400 x 400")]),t._v(" "),t.$v.finalImage.auth?t._e():s("p",{staticClass:"error"},[t._v("you don't have permission to edit")])]):t._e()]):t._e()]),t._v(" "),s("div",{staticClass:"right"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.onUserEdit,expression:"onUserEdit"}]},[s("div",{staticClass:"field"},[s("div",{staticClass:"text"},[s("div",{staticClass:"field"},[s("label",[t._v("User Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],class:{active:"user"==t.activeItem,error:t.$v.user.name.$error},attrs:{type:"text"},domProps:{value:t.user.name},on:{click:function(e){t.activeItem="website"},blur:function(e){t.activeItem=null},input:[function(e){e.target.composing||t.$set(t.user,"name",e.target.value)},t.$v.user.name.$touch]}}),t._v(" "),t.$v.user.name.$error?s("div",{staticClass:"validation-error"},[t.$v.user.name.required?t._e():s("p",{staticClass:"error"},[t._v("Must have a name")]),t._v(" "),t.$v.user.name.maxLength?t._e():s("p",{staticClass:"error"},[t._v("Can't be more than 50 characters")]),t._v(" "),t.$v.user.name.auth?t._e():s("p",{staticClass:"error"},[t._v("You don't have permission to edit")])]):t._e()]),t._v(" "),s("div",{staticClass:"field"},[s("label",[t._v(" Location ")]),t._v(" "),s("input",{ref:"autocomplete",class:{active:"location"==t.activeItem},attrs:{placeholder:t.locationPlaceholder,autocomplete:"false",onfocus:"value = ''",type:"text"},on:{click:function(e){t.activeItem="location"},blur:function(e){t.activeItem=null}}})]),t._v(" "),s("div",{},[s("button",{staticClass:"save",on:{click:function(e){return e.preventDefault(),t.submitUser()}}},[t._v(" Save ")]),t._v(" "),s("button",{staticClass:"cancel",on:{click:function(e){e.preventDefault(),t.onUserEdit=!1}}},[t._v(" Cancel ")])])])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.onUserEdit,expression:"!onUserEdit"}]},[s("div",{staticClass:"name"},[s("h2",[t._v(t._s(t.user.name))])]),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"age"},[t._v("\n                        Member since "+t._s(t._f("formatDate")(t.user.created_at))+"\n                    ")]),t._v(" "),parseFloat(this.auth)==t.user.id?s("div",{staticClass:"edit",on:{click:t.userEdit}},[t._v("\n                        Edit profile\n                    ")]):t._e()]),t._v(" "),s("div",{staticClass:"loc"},[s("div",[t._v("\n                        Lives Near "+t._s(t.locationPlaceholder)+"\n                    ")])])]),t._v(" "),s("div",{staticClass:"favorites"},[t._m(0),t._v(" "),s("div",{attrs:{id:"grid"}},t._l(t.events,(function(e){return s("div",[s("event-listing-item",{attrs:{user:t.auth,event:e}})],1)})),0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v("Your Favorited Events")])])}],!1,null,null,null);e.default=v.exports},86:function(t,e,s){"use strict";s.r(e);var a={methods:{onChange:function(t){var e=this;if(t.target.files.length){var s=t.target.files[0],a=new FileReader;a.readAsDataURL(s),a.onload=function(t){var a=t.target.result,i=new Image;i.onload=function(){e.$emit("loaded",{src:a,file:s,width:i.width,height:i.height})},i.onerror=function(){e.$emit("error")},i.src=a}}}}},i=s(81),n=Object(i.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("input",{staticClass:"fileinput",attrs:{type:"file",accept:"image/*"},on:{change:this.onChange}})}),[],!1,null,null,null);e.default=n.exports},87:function(t,e,s){"use strict";var a={props:{loading:{type:Boolean,default:!0}},data:function(){return{styles:{width:this.width+"px",height:this.height+"px"}}},name:"CubeSpinner"},i=s(81),n=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return this.loading?e("div",{staticClass:"spinner"},[this._m(0),this._v(" "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[e("defs",[e("filter",{attrs:{id:"goo"}},[e("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"10",result:"blur"}}),this._v(" "),e("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"}})],1)])])]):this._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"area"},[e("div",{staticClass:"dot dot-1"}),this._v(" "),e("div",{staticClass:"dot dot-2"}),this._v(" "),e("div",{staticClass:"dot dot-3"})])}],!1,null,null,null);e.a=n.exports}}]);