(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{275:function(e,t,s){"use strict";s.r(t);var n={props:["event","loadurl","color"],data:function(){return{showEventClass:"heart",url:this.loadurl?this.loadurl:"/events/"+this.event.slug,isDisabled:!1,imageWidth:""}},methods:{handleResize:function(){window.innerWidth<768&&(this.imageWidth=window.innerWidth/1.4)}},mounted:function(){window.addEventListener("resize",this.handleResize),this.handleResize()}},a=s(80),i=Object(a.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card",class:{dis:e.isDisabled,black:"black"==e.color}},[s("favorite",{attrs:{inputclass:e.showEventClass,event:e.event}}),e._v(" "),s("a",{staticClass:"url",attrs:{href:e.url}},[s("div",{staticClass:"card-image",style:"width:"+e.imageWidth+"px"},[s("picture",[s("source",{attrs:{type:"image/webp",srcset:"/storage/"+e.event.thumbImagePath}}),e._v(" "),s("img",{attrs:{src:"/storage/"+e.event.thumbImagePath.slice(0,-4)+"jpg",alt:e.event.name+" Immersive Event"}})])]),e._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"card-title"},[s("h3",{class:{black:"black"==e.color}},[e._v(e._s(e.event.name))])]),e._v(" "),s("div",{staticClass:"card-organizer"},[s("h3",{class:{black:"black"==e.color}},[e._v(e._s(e.event.organizer.name))])]),e._v(" "),s("div",{staticClass:"card-price"},[s("h4",{class:{black:"black"==e.color}},[e._v(e._s(e.event.price_range))])])])])],1)}),[],!1,null,null,null);t.default=i.exports},80:function(e,t,s){"use strict";function n(e,t,s,n,a,i,r,o){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=s,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=c):a&&(c=o?function(){a.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:l}}s.d(t,"a",(function(){return n}))}}]);