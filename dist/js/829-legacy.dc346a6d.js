"use strict";(self["webpackChunkstoredown"]=self["webpackChunkstoredown"]||[]).push([[829],{9345:function(){},9829:function(t,e,i){i.r(e),i.d(e,{default:function(){return S}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"grid-list-lg":"",fluid:""}},[i("v-layout",[i("v-flex",{attrs:{xs9:""}},[i("h4",{staticClass:"display-1"},[t._v(" Configuration ")])]),i("v-flex",{attrs:{xs3:"","text-xs-right":""}},[i("v-btn",{attrs:{color:"success",depressed:""},on:{click:function(e){return e.stopPropagation(),t.save.apply(null,arguments)}}},[t._v(" Save ")])],1)],1),i("v-layout",[i("v-flex",{attrs:{xs12:""}},[i("v-card",{attrs:{flat:"","fill-height":""}},[i("v-card-actions",[i("v-container",{attrs:{fluid:""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-textarea",{attrs:{"auto-grow":"",flat:"",label:"Config YAML",hint:"StoreDown config"},model:{value:t.config.yml,callback:function(e){t.$set(t.config,"yml",e)},expression:"config.yml"}})],1)],1)],1)],1)],1)],1)],1)],1)},n=[],r=i(8300),a={data:()=>({config:{yml:""}}),mounted(){this.loadConfig()},methods:{loadConfig:function(){r.E.getConfig().then((t=>{this.config=t})).catch((t=>{404===t.status||this.$toasted.error(`Error: ${t.status}`)}))},save:function(){r.E.setConfig(this.config).then((t=>{this.loadConfig(),this.$toasted.info("Configuration saved")})).catch((t=>{this.$toasted.error(`Error: ${t.status}`)}))}}},o=a,c=i(1001),l=i(3453),h=i.n(l),u=i(4616),d=i(6063),g=i(3115),m=i(6530),p=i(683),f=i(9456),v=i(8108),y=(0,c.Z)(o,s,n,!1,null,null,null),S=y.exports;h()(y,{VBtn:u.Z,VCard:d.Z,VCardActions:g.h7,VContainer:m.Z,VFlex:p.Z,VLayout:f.Z,VTextarea:v.Z})},6063:function(t,e,i){i.d(e,{Z:function(){return p}});i(9345);var s=i(5766),n=i(144);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var a=n.Z.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation||0===this.computedElevation?r({},"elevation-"+this.computedElevation,!0):{}}}}),o=i(1585),c=i(5721),l=i(5530),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},u=(0,l.Z)(s.Z,a,o.Z,c.Z).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return h({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),d=u,g=i(3335),m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},p=(0,l.Z)(g.Z,d).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return m({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},d.options.computed.classes.call(this))},styles:function(){var t=m({},d.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,s=e.data;return s.style=this.styles,t(i,this.setBackgroundColor(this.color,s),this.$slots.default)}})},9418:function(t,e,i){var s=i(144);e["Z"]=s.Z.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var i=e.data,s=e.props,n=e.children;return i.staticClass=("v-card__title "+(i.staticClass||"")).trim(),s.primaryTitle&&(i.staticClass+=" v-card__title--primary"),t("div",i,n)}})},3115:function(t,e,i){i.d(e,{h7:function(){return g},ZB:function(){return m}});var s=i(8131),n=i(6063),r=i(1585),a=i(5530),o=(0,a.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=i(8219),h=c.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){(0,l.N6)("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){(0,l.Kd)("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var n=t.naturalHeight,r=t.naturalWidth;n||r?e.calculatedAspectRatio=r/n:null!=i&&setTimeout(s,i)};s()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}),u=h.extend({name:"v-card-media",mounted:function(){(0,l.Rn)("v-card-media",this.src?"v-img":"v-responsive",this)}}),d=i(9418),g=(0,s.Ji)("v-card__actions"),m=(0,s.Ji)("v-card__text");n.Z,d.Z},8108:function(t,e,i){i.d(e,{Z:function(){return a}});var s=i(1887),n=i(8219),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},a={name:"v-textarea",extends:s.Z,props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return r({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},s.Z.options.computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||s.Z.options.computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0),this.autoGrow&&this.noResize&&(0,n.zk)('"no-resize" is now implied when using "auto-grow", and can be removed',this)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height=0;var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=s.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){s.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}}},1585:function(t,e,i){var s=i(8131),n=i(144);e["Z"]=n.Z.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=(0,s.kb)(this.height),i=(0,s.kb)(this.minHeight),n=(0,s.kb)(this.minWidth),r=(0,s.kb)(this.maxHeight),a=(0,s.kb)(this.maxWidth),o=(0,s.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),r&&(t.maxHeight=r),a&&(t.maxWidth=a),o&&(t.width=o),t}}})}}]);
//# sourceMappingURL=829-legacy.dc346a6d.js.map