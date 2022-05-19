(self["webpackChunkstoredown"]=self["webpackChunkstoredown"]||[]).push([[141],{4070:function(t){
/*!
 * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(e,n){t.exports=n()}(0,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=n(1),i=n(7),s=i.get,c=(i.deepValue,i.isArray),l=function(){function t(e,n){var r=n.location,o=void 0===r?0:r,a=n.distance,i=void 0===a?100:a,c=n.threshold,l=void 0===c?.6:c,h=n.maxPatternLength,u=void 0===h?32:h,f=n.caseSensitive,d=void 0!==f&&f,p=n.tokenSeparator,v=void 0===p?/ +/g:p,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m,b=n.id,w=void 0===b?null:b,x=n.keys,_=void 0===x?[]:x,S=n.shouldSort,M=void 0===S||S,C=n.getFn,L=void 0===C?s:C,A=n.sortFn,O=void 0===A?function(t,e){return t.score-e.score}:A,P=n.tokenize,E=void 0!==P&&P,j=n.matchAllTokens,I=void 0!==j&&j,Z=n.includeMatches,T=void 0!==Z&&Z,D=n.includeScore,$=void 0!==D&&D,F=n.verbose,N=void 0!==F&&F;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options={location:o,distance:i,threshold:l,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:v,findAllMatches:y,minMatchCharLength:k,id:w,keys:_,includeMatches:T,includeScore:$,shouldSort:M,getFn:L,sortFn:O,verbose:N,tokenize:E,matchAllTokens:I},this.setCollection(e),this._processKeys(_)}var e,n,i;return e=t,(n=[{key:"setCollection",value:function(t){return this.list=t,t}},{key:"_processKeys",value:function(t){if(this._keyWeights={},this._keyNames=[],t.length&&"string"==typeof t[0])for(var e=0,n=t.length;e<n;e+=1){var r=t[e];this._keyWeights[r]=1,this._keyNames.push(r)}else{for(var o=null,a=null,i=0,s=0,c=t.length;s<c;s+=1){var l=t[s];if(!l.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var h=l.name;if(this._keyNames.push(h),!l.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var u=l.weight;if(u<0||u>1)throw new Error('"weight" property in key must bein the range of [0, 1)');a=null==a?u:Math.max(a,u),o=null==o?u:Math.min(o,u),this._keyWeights[h]=u,i+=u}if(i>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(t,'"'));var n=this._prepareSearchers(t),r=n.tokenSearchers,o=n.fullSearcher,a=this._search(r,o);return this._computeScore(a),this.options.shouldSort&&this._sort(a),e.limit&&"number"==typeof e.limit&&(a=a.slice(0,e.limit)),this._format(a)}},{key:"_prepareSearchers",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=[];if(this.options.tokenize)for(var n=t.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)e.push(new a(n[r],this.options));return{tokenSearchers:e,fullSearcher:new a(t,this.options)}}},{key:"_search",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var a=0,i=n.length;a<i;a+=1)this._analyze({key:"",value:n[a],record:a,index:a},{resultMap:r,results:o,tokenSearchers:t,fullSearcher:e});return o}for(var s=0,c=n.length;s<c;s+=1)for(var l=n[s],h=0,u=this._keyNames.length;h<u;h+=1){var f=this._keyNames[h];this._analyze({key:f,value:this.options.getFn(l,f),record:l,index:s},{resultMap:r,results:o,tokenSearchers:t,fullSearcher:e})}return o}},{key:"_analyze",value:function(t,e){var n=this,r=t.key,o=t.arrayIndex,a=void 0===o?-1:o,i=t.value,s=t.record,l=t.index,h=e.tokenSearchers,u=void 0===h?[]:h,f=e.fullSearcher,d=e.resultMap,p=void 0===d?{}:d,v=e.results,g=void 0===v?[]:v;!function t(e,o,a,i){if(null!=o)if("string"==typeof o){var s=!1,l=-1,h=0;n._log("\nKey: ".concat(""===r?"--":r));var d=f.search(o);if(n._log('Full text: "'.concat(o,'", score: ').concat(d.score)),n.options.tokenize){for(var v=o.split(n.options.tokenSeparator),y=v.length,m=[],k=0,b=u.length;k<b;k+=1){var w=u[k];n._log('\nPattern: "'.concat(w.pattern,'"'));for(var x=!1,_=0;_<y;_+=1){var S=v[_],M=w.search(S),C={};M.isMatch?(C[S]=M.score,s=!0,x=!0,m.push(M.score)):(C[S]=1,n.options.matchAllTokens||m.push(1)),n._log('Token: "'.concat(S,'", score: ').concat(C[S]))}x&&(h+=1)}l=m[0];for(var L=m.length,A=1;A<L;A+=1)l+=m[A];l/=L,n._log("Token score average:",l)}var O=d.score;l>-1&&(O=(O+l)/2),n._log("Score average:",O);var P=!n.options.tokenize||!n.options.matchAllTokens||h>=u.length;if(n._log("\nCheck Matches: ".concat(P)),(s||d.isMatch)&&P){var E={key:r,arrayIndex:e,value:o,score:O};n.options.includeMatches&&(E.matchedIndices=d.matchedIndices);var j=p[i];j?j.output.push(E):(p[i]={item:a,output:[E]},g.push(p[i]))}}else if(c(o))for(var I=0,Z=o.length;I<Z;I+=1)t(I,o[I],a,i)}(a,i,s,l)}},{key:"_computeScore",value:function(t){this._log("\n\nComputing score:\n");for(var e=this._keyWeights,n=!!Object.keys(e).length,r=0,o=t.length;r<o;r+=1){for(var a=t[r],i=a.output,s=i.length,c=1,l=0;l<s;l+=1){var h=i[l],u=h.key,f=n?e[u]:1,d=0===h.score&&e&&e[u]>0?Number.EPSILON:h.score;c*=Math.pow(d,f)}a.score=c,this._log(a)}}},{key:"_sort",value:function(t){this._log("\n\nSorting...."),t.sort(this.options.sortFn)}},{key:"_format",value:function(t){var e=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(t,(function(t,e){if("object"===r(e)&&null!==e){if(-1!==n.indexOf(e))return;n.push(e)}return e}),2)),n=null}var o=[];this.options.includeMatches&&o.push((function(t,e){var n=t.output;e.matches=[];for(var r=0,o=n.length;r<o;r+=1){var a=n[r];if(0!==a.matchedIndices.length){var i={indices:a.matchedIndices,value:a.value};a.key&&(i.key=a.key),a.hasOwnProperty("arrayIndex")&&a.arrayIndex>-1&&(i.arrayIndex=a.arrayIndex),e.matches.push(i)}}})),this.options.includeScore&&o.push((function(t,e){e.score=t.score}));for(var a=0,i=t.length;a<i;a+=1){var s=t[a];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},l=0,h=o.length;l<h;l+=1)o[l](s,c);e.push(c)}else e.push(s.item)}return e}},{key:"_log",value:function(){var t;this.options.verbose&&(t=console).log.apply(t,arguments)}}])&&o(e.prototype,n),i&&o(e,i),t}();t.exports=l},function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=n(2),a=n(3),i=n(6),s=function(){function t(e,n){var r=n.location,o=void 0===r?0:r,a=n.distance,s=void 0===a?100:a,c=n.threshold,l=void 0===c?.6:c,h=n.maxPatternLength,u=void 0===h?32:h,f=n.isCaseSensitive,d=void 0!==f&&f,p=n.tokenSeparator,v=void 0===p?/ +/g:p,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m,b=n.includeMatches,w=void 0!==b&&b;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options={location:o,distance:s,threshold:l,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:v,findAllMatches:y,includeMatches:w,minMatchCharLength:k},this.pattern=d?e:e.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=i(this.pattern))}var e,n,s;return e=t,(n=[{key:"search",value:function(t){var e=this.options,n=e.isCaseSensitive,r=e.includeMatches;if(n||(t=t.toLowerCase()),this.pattern===t){var i={isMatch:!0,score:0};return r&&(i.matchedIndices=[[0,t.length-1]]),i}var s=this.options,c=s.maxPatternLength,l=s.tokenSeparator;if(this.pattern.length>c)return o(t,this.pattern,l);var h=this.options,u=h.location,f=h.distance,d=h.threshold,p=h.findAllMatches,v=h.minMatchCharLength;return a(t,this.pattern,this.patternAlphabet,{location:u,distance:f,threshold:d,findAllMatches:p,minMatchCharLength:v,includeMatches:r})}}])&&r(e.prototype,n),s&&r(e,s),t}();t.exports=s},function(t,e){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;t.exports=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(e.replace(n,"\\$&").replace(r,"|")),a=t.match(o),i=!!a,s=[];if(i)for(var c=0,l=a.length;c<l;c+=1){var h=a[c];s.push([t.indexOf(h),h.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:s}}},function(t,e,n){var r=n(4),o=n(5);t.exports=function(t,e,n,a){for(var i=a.location,s=void 0===i?0:i,c=a.distance,l=void 0===c?100:c,h=a.threshold,u=void 0===h?.6:h,f=a.findAllMatches,d=void 0!==f&&f,p=a.minMatchCharLength,v=void 0===p?1:p,g=a.includeMatches,y=void 0!==g&&g,m=s,k=t.length,b=u,w=t.indexOf(e,m),x=e.length,_=[],S=0;S<k;S+=1)_[S]=0;if(-1!==w){var M=r(e,{errors:0,currentLocation:w,expectedLocation:m,distance:l});if(b=Math.min(M,b),-1!==(w=t.lastIndexOf(e,m+x))){var C=r(e,{errors:0,currentLocation:w,expectedLocation:m,distance:l});b=Math.min(C,b)}}w=-1;for(var L=[],A=1,O=x+k,P=1<<(x<=31?x-1:30),E=0;E<x;E+=1){for(var j=0,I=O;j<I;)r(e,{errors:E,currentLocation:m+I,expectedLocation:m,distance:l})<=b?j=I:O=I,I=Math.floor((O-j)/2+j);O=I;var Z=Math.max(1,m-I+1),T=d?k:Math.min(m+I,k)+x,D=Array(T+2);D[T+1]=(1<<E)-1;for(var $=T;$>=Z;$-=1){var F=$-1,N=n[t.charAt(F)];if(N&&(_[F]=1),D[$]=(D[$+1]<<1|1)&N,0!==E&&(D[$]|=(L[$+1]|L[$])<<1|1|L[$+1]),D[$]&P&&(A=r(e,{errors:E,currentLocation:F,expectedLocation:m,distance:l}))<=b){if(b=A,(w=F)<=m)break;Z=Math.max(1,2*m-w)}}if(r(e,{errors:E+1,currentLocation:m,expectedLocation:m,distance:l})>b)break;L=D}var z={isMatch:w>=0,score:0===A?.001:A};return y&&(z.matchedIndices=o(_,v)),z}},function(t,e){t.exports=function(t,e){var n=e.errors,r=void 0===n?0:n,o=e.currentLocation,a=void 0===o?0:o,i=e.expectedLocation,s=void 0===i?0:i,c=e.distance,l=void 0===c?100:c,h=r/t.length,u=Math.abs(s-a);return l?h+u/l:u?1:h}},function(t,e){t.exports=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,a=0,i=t.length;a<i;a+=1){var s=t[a];s&&-1===r?r=a:s||-1===r||((o=a-1)-r+1>=e&&n.push([r,o]),r=-1)}return t[a-1]&&a-r>=e&&n.push([r,a-1]),n}},function(t,e){t.exports=function(t){for(var e={},n=t.length,r=0;r<n;r+=1)e[t.charAt(r)]=0;for(var o=0;o<n;o+=1)e[t.charAt(o)]|=1<<n-o-1;return e}},function(t,e){var n=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},r=function(t){return null==t?"":function(t){if("string"==typeof t)return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(t)},o=function(t){return"string"==typeof t},a=function(t){return"number"==typeof t};t.exports={get:function(t,e){var i=[];return function t(e,s){if(s){var c=s.indexOf("."),l=s,h=null;-1!==c&&(l=s.slice(0,c),h=s.slice(c+1));var u=e[l];if(null!=u)if(h||!o(u)&&!a(u))if(n(u))for(var f=0,d=u.length;f<d;f+=1)t(u[f],h);else h&&t(u,h);else i.push(r(u))}else i.push(e)}(t,e),i},isArray:n,isString:o,isNum:a,toString:r}}])}))},4661:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",{attrs:{xs12:""}},[n("v-data-table",{attrs:{headers:t.headers,pagination:t.pagination,items:t.data.rows,loading:t.loading,"total-items":t.data.total_rows,"rows-per-page-items":[10,50,100,1e3]},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("ListColumnTypes",{attrs:{props:e,headers:t.headers,rowClick:t.rowClick}})]}},{key:"no-data",fn:function(){return[n("v-alert",{attrs:{value:!t.loading,color:"error"}},[t._v(" No data was found. ")])]},proxy:!0}])})],1)],1)},o=[],a=n(8560),i={components:{ListColumnTypes:a.Z},props:{headers:Array,rowClick:Function,loadData:Function},watch:{pagination:{handler(){this.getData()},deep:!0},$route(t,e){this.getData()}},data:()=>({pagination:{},loading:!1,data:{}}),methods:{getData:function(){this.loading=!0,this.data.rows=[];let t=(this.pagination.page-1)*this.pagination.rowsPerPage;this.loadData(t,this.pagination.rowsPerPage).then((t=>{this.data=t,this.loading=!1})).catch((t=>{404===t.status||this.$toasted.info(`Error ${t}`)}))}}},s=i,c=n(1001),l=n(3453),h=n.n(l),u=n(6965),f=n(848),d=n(683),p=n(9456),v=(0,c.Z)(s,r,o,!1,null,null,null),g=v.exports;h()(v,{VAlert:u.Z,VDataTable:f.Z,VFlex:d.Z,VLayout:p.Z})},8267:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return b}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-lg":"",fluid:""}},[n("v-layout",[n("v-flex",{attrs:{xs6:""}},[n("h4",{staticClass:"display-1"},[t._v("Search results")])])],1),n("List",{attrs:{headers:t.headers,loadData:t.loadData,rowClick:t.rowClick}})],1)},o=[],a=n(8300),i=n(8955),s=n(4070),c=n.n(s),l=n(4661);const h=1e4;var u={components:{List:l.Z},data:()=>({DatabaseService:(0,i.Z)(),headers:[]}),watch:{$route(t,e){}},mounted(){this.loadHeaders()},methods:{loadHeaders:function(){(0,i.Z)()&&a.E.getConfigObject().then((t=>{t.dataDefinition.forEach((t=>{t.fields.forEach((t=>{this.headers.push({text:t.displayName,value:t.name,align:"left",item:t,sortable:!1})}))}))})).catch((t=>{404===t.status||this.$toasted.info(`Error ${t}`)}))},loadData:function(t=0,e=100){return new Promise(((n,r)=>{if(!(0,i.Z)())return r(new Error("Database is not setup"));a.E.getConfigObject().then((o=>{let a=[],s=[],l=0,u=0,f=this.$route.query.query;o.dataDefinition.forEach((t=>{t.fields.forEach((t=>{a.push(t.name)}))}));let d={threshold:.3,keys:a},p=()=>{(0,i.Z)().getAllItems({skip:u,limit:h}).then((r=>{u+=r.rows.length||10,s=s.concat(new(c())(r.rows,d).search(f));let o=t-l;if(o>0&&(l+=Math.min(o,s.length),s=o<=s.length?s.slice(o):[]),s.length<e&&u<r.total_rows)return p();let a=s.length+l;return u+10<r.total_rows&&(a+=1),s=s.slice(0,e),n({total_rows:a,rows:s})})).catch(r)};p()})).catch(r)}))},rowClick:function(t){return this.$router.push(`/entry/${t.item._id}`)}}},f=u,d=n(1001),p=n(3453),v=n.n(p),g=n(6530),y=n(683),m=n(9456),k=(0,d.Z)(f,r,o,!1,null,null,null),b=k.exports;v()(k,{VContainer:g.Z,VFlex:y.Z,VLayout:m.Z})}}]);
//# sourceMappingURL=141-legacy.82295f8a.js.map