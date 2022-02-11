(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0a06":function(t,e,r){"use strict";var n=r("c532"),o=r("30b5"),a=r("f6b4"),i=r("5270"),s=r("4a7b"),u=r("848b"),c=u.validators;function l(t){this.defaults=t,this.interceptors={request:new a,response:new a}}l.prototype.request=function(t,e){if("string"===typeof t?(e=e||{},e.url=t):e=t||{},!e.url)throw new Error("Provided config url is not valid");e=s(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var r=e.transitional;void 0!==r&&u.assertOptions(r,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(o=o&&t.synchronous,n.unshift(t.fulfilled,t.rejected))}));var a,l=[];if(this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)})),!o){var f=[i,void 0];Array.prototype.unshift.apply(f,n),f=f.concat(l),a=Promise.resolve(e);while(f.length)a=a.then(f.shift(),f.shift());return a}var d=e;while(n.length){var h=n.shift(),p=n.shift();try{d=h(d)}catch(m){p(m);break}}try{a=i(d)}catch(m){return Promise.reject(m)}while(l.length)a=a.then(l.shift(),l.shift());return a},l.prototype.getUri=function(t){if(!t.url)throw new Error("Provided config url is not valid");return t=s(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(t){l.prototype[t]=function(e,r){return this.request(s(r||{},{method:t,url:e,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(t){l.prototype[t]=function(e,r,n){return this.request(s(n||{},{method:t,url:e,data:r}))}})),t.exports=l},"0df6":function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"1aeb":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("DashboardCard"),r("h1",[t._v("Please wait while we create your Credit Card")]),t.card&&t.card.length?r("div",[r("router-link",{attrs:{to:{name:"dashboard"}}},[t._v("Dashboard")]),t._v(" | ")],1):t._e()],1)},o=[],a=r("1da1"),i=(r("96cf"),r("a949")),s={name:"CreateCard",data:function(){return{card:[],user:[],errors:[]}},created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].post("/auth/user",{token:localStorage.getItem("user")}).then((function(e){t.user=e.data.data})).catch((function(e){t.errors.push(e)}));case 2:return e.next=4,i["a"].post("/cards",{user:t.user._id}).then((function(e){t.card=e.data.data})).catch((function(e){t.errors.push(e)}));case 4:case"end":return e.stop()}}),e)})))()}},u=s,c=r("2877"),l=Object(c["a"])(u,n,o,!1,null,null,null);e["default"]=l.exports},"1d2b":function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,u,"next",t)}function u(t){n(i,o,a,s,u,"throw",t)}s(void 0)}))}}},2444:function(t,e,r){"use strict";(function(e){var n=r("c532"),o=r("c8af"),a=r("387f"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function u(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e))&&(t=r("b50d")),t}function c(t,e,r){if(n.isString(t))try{return(e||JSON.parse)(t),n.trim(t)}catch(o){if("SyntaxError"!==o.name)throw o}return(r||JSON.stringify)(t)}var l={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:u(),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)||e&&"application/json"===e["Content-Type"]?(s(e,"application/json"),c(t)):t}],transformResponse:[function(t){var e=this.transitional||l.transitional,r=e&&e.silentJSONParsing,o=e&&e.forcedJSONParsing,i=!r&&"json"===this.responseType;if(i||o&&n.isString(t)&&t.length)try{return JSON.parse(t)}catch(s){if(i){if("SyntaxError"===s.name)throw a(s,this,"E_JSON_PARSE");throw s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(t){l.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){l.headers[t]=n.merge(i)})),t.exports=l}).call(this,r("4362"))},"2d83":function(t,e,r){"use strict";var n=r("387f");t.exports=function(t,e,r,o,a){var i=new Error(t);return n(i,e,r,o,a)}},"2e67":function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,r){"use strict";var n=r("c532");function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var a;if(r)a=r(e);else if(n.isURLSearchParams(e))a=e.toString();else{var i=[];n.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),i.push(o(e)+"="+o(t))})))})),a=i.join("&")}if(a){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+a}return t}},"387f":function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},t}},3934:function(t,e,r){"use strict";var n=r("c532");t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(e){var r=n.isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return function(){return!0}}()},"467f":function(t,e,r){"use strict";var n=r("2d83");t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},"4a7b":function(t,e,r){"use strict";var n=r("c532");t.exports=function(t,e){e=e||{};var r={};function o(t,e){return n.isPlainObject(t)&&n.isPlainObject(e)?n.merge(t,e):n.isPlainObject(e)?n.merge({},e):n.isArray(e)?e.slice():e}function a(r){return n.isUndefined(e[r])?n.isUndefined(t[r])?void 0:o(void 0,t[r]):o(t[r],e[r])}function i(t){if(!n.isUndefined(e[t]))return o(void 0,e[t])}function s(r){return n.isUndefined(e[r])?n.isUndefined(t[r])?void 0:o(void 0,t[r]):o(void 0,e[r])}function u(r){return r in e?o(t[r],e[r]):r in t?o(void 0,t[r]):void 0}var c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u};return n.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=c[t]||a,o=e(t);n.isUndefined(o)&&e!==u||(r[t]=o)})),r}},5270:function(t,e,r){"use strict";var n=r("c532"),o=r("c401"),a=r("2e67"),i=r("2444"),s=r("7a77");function u(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new s("canceled")}t.exports=function(t){u(t),t.headers=t.headers||{},t.data=o.call(t,t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||i.adapter;return e(t).then((function(e){return u(t),e.data=o.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return a(e)||(u(t),e&&e.response&&(e.response.data=o.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},"5cce":function(t,e){t.exports={version:"0.25.0"}},"5f02":function(t,e,r){"use strict";var n=r("c532");t.exports=function(t){return n.isObject(t)&&!0===t.isAxiosError}},7277:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("DashboardCard"),r("b-container",{staticClass:"bv-example-row"},[r("b-row",[r("b-col",[r("h1",[t._v("Credit Card")]),r("UserCard")],1),r("b-col",[r("h1",[t._v("Transactions")]),r("TransactionsCard")],1)],1)],1),r("b-container",{staticClass:"bv-example-row"},[r("b-row",[r("b-col",[r("SimulatorCard")],1)],1)],1)],1)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-jumbotron",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Bitako.Cards")]},proxy:!0},{key:"lead",fn:function(){return[t._v(" A Credit Card Application developed with MongoDB, Express, Node and Vue JS. Cards are issued by "),r("a",{attrs:{href:"https://sudo.africa"}},[t._v("Sudo Africa")])]},proxy:!0}])},[r("hr",{staticClass:"my-4"})])],1)},i=[],s=r("1da1"),u=(r("96cf"),{name:"DashboardCard",created:function(){return Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=localStorage.getItem("user"),e||(window.location.href="./");case 2:case"end":return t.stop()}}),t)})))()}}),c=u,l=r("2877"),f=Object(l["a"])(c,a,i,!1,null,"0e4698cc",null),d=f.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card-group",{attrs:{deck:""}},[r("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h6",{staticClass:"mb-0"},[t._v(t._s(t.card.brand))])]},proxy:!0},{key:"footer",fn:function(){return[r("em",[t._v("Expiry: "+t._s(t.card.expiry))])]},proxy:!0}])},[r("b-card-text",[t._v(t._s(t.card.pan))]),t._l(t.card.channels,(function(e){return r("div",{key:e},[r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{attrs:{variant:"primary"}},[t._v("POS: "+t._s(e.pos))]),r("b-button",{attrs:{variant:"secondary"}},[t._v("Mobile: "+t._s(e.mobile))]),r("b-button",{attrs:{variant:"success"}},[t._v("ATM: "+t._s(e.atm))]),r("b-button",{attrs:{variant:"info"}},[t._v("WEB: "+t._s(e.web))])],1)],1)})),r("br"),r("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("Credit Used: "+t._s(t.card.usedCredit)+" | Max Credit: "+t._s(t.card.maxCredit))])],2)],1)],1)},p=[],m=r("a949"),v={name:"UserCard",data:function(){return{card:{_id:"620097893009a6707e9b850d",user:"62008a2d570cf79fed984866",cardId:"6200978951a3aca7f46d137b",customerId:"620095ab51a3aca7f46d133b",pan:"506300******0000",expiry:"00/00",brand:"Sudo",balance:0,maxCredit:0,active:!0,channels:[{atm:!1,pos:!1,web:!0,mobile:!0,_id:"620097893009a6707e9b850e"}],create_date:"2022-02-07T03:52:41.999Z",usedCredit:0},user:[],errors:[]}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["a"].post("/auth/user",{token:localStorage.getItem("user")}).then((function(e){t.user=e.data.data})).catch((function(e){t.errors.push(e)}));case 2:return e.next=4,m["a"].post("/cards/user/"+t.user._id).then((function(e){console.log(e.data),t.card=e.data.data})).catch((function(e){t.errors.push(e)}));case 4:case"end":return e.stop()}}),e)})))()}},b=v,g=Object(l["a"])(b,h,p,!1,null,"e1c4bca4",null),y=g.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-table",{attrs:{striped:"",hover:"",bordered:"",small:"","head-variant":"dark",items:t.items,fields:t.fields}})],1)},x=[],_={data:function(){return{fields:[{key:"cardPan"},{key:"amount",sortable:!1},{key:"channel",sortable:!1},{key:"create_date",label:"Transaction Date",sortable:!0}],items:[{cardPan:"5063********0000",amount:0,channel:"web purchase @ SUDO SIMULATOR",create_date:"2022-02-08T01:47:08.318Z"}],user:[],errors:[]}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["a"].post("/auth/user",{token:localStorage.getItem("user")}).then((function(e){t.user=e.data.data})).catch((function(e){t.errors.push(e)}));case 2:return e.next=4,m["a"].post("/transactions/user/"+t.user._id).then((function(e){t.items=e.data.data})).catch((function(e){t.errors.push(e)}));case 4:case"end":return e.stop()}}),e)})))()}},E=_,S=Object(l["a"])(E,w,x,!1,null,null,null),O=S.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{staticClass:"mt-3",attrs:{header:"Simulate Transaction"}},[t.show?r("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Amoun:","label-for":"amount",description:"Amount to charge on the card"}},[r("b-form-input",{attrs:{id:"amount",type:"number",placeholder:"Enter amount",required:""},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}})],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Transaction Type:","label-for":"input-3"}},[r("b-form-select",{attrs:{id:"input-3",options:t.type,required:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),r("b-form-group",{attrs:{id:"input-group-4"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.ariaDescribedby;return[r("b-form-radio-group",{attrs:{id:"radioes-4","aria-describedby":n},model:{value:t.form.channel,callback:function(e){t.$set(t.form,"channel",e)},expression:"form.channel"}},[r("b-form-radio",{attrs:{value:"web"}},[t._v("WEB")]),r("b-form-radio",{attrs:{value:"pos"}},[t._v("POS")]),r("b-form-radio",{attrs:{value:"atm"}},[t._v("ATM")]),r("b-form-radio",{attrs:{value:"mobile"}},[t._v("MOBILE")])],1)]}}],null,!1,3167828267)}),r("br"),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),r("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1):t._e()],1)],1)},j=[],k={name:"SimulateCard",data:function(){return{simulate:[],userCard:[],form:{amount:"",card:"",channel:null,type:[]},type:[{text:"Select One",value:null},"Purchase","Payment","Transfer","Withdrawal"],show:!0}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m["a"].post("/auth/user",{token:localStorage.getItem("user")}).then((function(e){t.user=e.data.data})).catch((function(e){t.errors.push(e)}));case 2:return e.next=4,m["a"].post("/cards/user/"+t.user._id).then((function(e){console.log(e.data),t.userCard=e.data.data})).catch((function(e){t.errors.push(e)}));case 4:case"end":return e.stop()}}),e)})))()},methods:{onSubmit:function(t){var e=this;t.preventDefault(),m["a"].post("/cards/simulate/"+this.userCard._id,this.form).then((function(t){e.simulate=t.data.data})).catch((function(t){e.errors.push(t)}))},onReset:function(t){var e=this;t.preventDefault(),this.form.amount="",this.form.card="",this.form.type=null,this.form.channel=[],this.show=!1,this.$nextTick((function(){e.show=!0}))}}},N=k,R=Object(l["a"])(N,C,j,!1,null,null,null),T=R.exports,L={name:"Dashboard",components:{DashboardCard:d,UserCard:y,TransactionsCard:O,SimulatorCard:T}},P=L,A=Object(l["a"])(P,n,o,!1,null,null,null);e["default"]=A.exports},"73cf":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("Regsiter page")]),r("RegisterForm")],1)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t.errors&&t.errors.length?r("ul",t._l(t.errors,(function(e){return r("li",{key:e},[t._v(" "+t._s(e.message)+" ")])})),0):t._e(),t.auth&&t.auth.length?r("div",[t._v(" "+t._s(t.auth.token)+" ")]):t._e(),t.show?r("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[r("b-form-group",{attrs:{id:"firstName",label:"Your firstName:","label-for":"firstName"}},[r("b-form-input",{attrs:{id:"firstName",type:"text",placeholder:"Enter firstName",required:""},model:{value:t.form.firstName,callback:function(e){t.$set(t.form,"firstName",e)},expression:"form.firstName"}})],1),r("b-form-group",{attrs:{id:"lastName",label:"Your lastName:","label-for":"lastName"}},[r("b-form-input",{attrs:{id:"lastName",type:"text",placeholder:"Enter lastName",required:""},model:{value:t.form.lastName,callback:function(e){t.$set(t.form,"lastName",e)},expression:"form.lastName"}})],1),r("b-form-group",{attrs:{id:"phone",label:"Your phoneNumber:","label-for":"phone"}},[r("b-form-input",{attrs:{id:"phone",type:"tel",placeholder:"Enter phone",required:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),r("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[r("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Enter email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Your Password:","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",type:"password",placeholder:"Enter password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),r("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1):t._e()],1)},i=[],s=r("a949"),u={name:"RegisterForm",data:function(){return{auth:"",form:{firstName:"",lastName:"",email:"",phone:"",password:""},errors:[],show:!0}},methods:{onSubmit:function(t){var e=this;t.preventDefault(),s["a"].post("/auth/register",this.form).then((function(t){e.auth=t.data,localStorage.setItem("user",t.data.token),e.$router.push("/card")})).catch((function(t){e.errors.push(t)}))},onReset:function(t){var e=this;t.preventDefault(),this.form.email="",this.form.password="",this.show=!1,this.$nextTick((function(){e.show=!0}))}}},c=u,l=r("2877"),f=Object(l["a"])(c,a,i,!1,null,null,null),d=f.exports,h={name:"Register",components:{RegisterForm:d}},p=h,m=Object(l["a"])(p,n,o,!1,null,null,null);e["default"]=m.exports},"7a77":function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},"7aac":function(t,e,r){"use strict";var n=r("c532");t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,a,i){var s=[];s.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(t,e,r){"use strict";var n=r("d925"),o=r("e683");t.exports=function(t,e){return t&&!n(e)?o(t,e):e}},"848b":function(t,e,r){"use strict";var n=r("5cce").version,o={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){o[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}}));var a={};function i(t,e,r){if("object"!==typeof t)throw new TypeError("options must be an object");var n=Object.keys(t),o=n.length;while(o-- >0){var a=n[o],i=e[a];if(i){var s=t[a],u=void 0===s||i(s,a,t);if(!0!==u)throw new TypeError("option "+a+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+a)}}o.transitional=function(t,e,r){function o(t,e){return"[Axios v"+n+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}return function(r,n,i){if(!1===t)throw new Error(o(n," has been removed"+(e?" in "+e:"")));return e&&!a[n]&&(a[n]=!0,console.warn(o(n," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,n,i)}},t.exports={assertOptions:i,validators:o}},"8df4":function(t,e,r){"use strict";var n=r("7a77");function o(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;this.promise.then((function(t){if(r._listeners){var e,n=r._listeners.length;for(e=0;e<n;e++)r._listeners[e](t);r._listeners=null}})),this.promise.then=function(t){var e,n=new Promise((function(t){r.subscribe(t),e=t})).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t((function(t){r.reason||(r.reason=new n(t),e(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},o.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},o.source=function(){var t,e=new o((function(e){t=e}));return{token:e,cancel:t}},t.exports=o},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(L){u=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=O(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=c;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",m={};function v(){}function b(){}function g(){}var y={};u(y,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(R([])));x&&x!==r&&n.call(x,a)&&(y=x);var _=g.prototype=v.prototype=Object.create(y);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,s){var u=l(t[o],t,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(f).then((function(t){c.value=t,i(c)}),(function(t){return r("throw",t,i,s)}))}s(u.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function O(t,e,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return T()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=C(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function R(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return b.prototype=g,u(_,"constructor",g),u(g,"constructor",b),b.displayName=u(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},E(S.prototype),u(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new S(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(_),u(_,s,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=R,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},a55b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("Login page")]),r("LoginForm")],1)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t.errors&&t.errors.length?r("ul",t._l(t.errors,(function(e){return r("li",{key:e},[t._v(" "+t._s(e.message)+" ")])})),0):t._e(),t.auth&&t.auth.length?r("div",[t._v(" "+t._s(t.auth.token)+" ")]):t._e(),t.show?r("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[r("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Enter email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Your Password:","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",type:"password",placeholder:"Enter password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),r("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1):t._e()],1)},i=[],s=r("a949"),u={name:"LoginForm",data:function(){return{auth:"",form:{email:"",password:""},errors:[],show:!0}},methods:{goToDashboard:function(){this.$router.push("/dashboard")},onSubmit:function(t){var e=this;t.preventDefault(),s["a"].post("/auth/login",this.form).then((function(t){e.auth=t.data,localStorage.setItem("user",t.data.token),e.goToDashboard()})).catch((function(t){e.errors.push(t)}))},onReset:function(t){var e=this;t.preventDefault(),this.form.email="",this.form.password="",this.show=!1,this.$nextTick((function(){e.show=!0}))}}},c=u,l=r("2877"),f=Object(l["a"])(c,a,i,!1,null,null,null),d=f.exports,h={name:"Login",components:{LoginForm:d}},p=h,m=Object(l["a"])(p,n,o,!1,null,null,null);e["default"]=m.exports},a949:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r("bc3a"),o=r.n(n),a=r("323e"),i=r.n(a),s=o.a.create({baseURL:"/api",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIwMWNlZWQ1MDUxOGMzN2Q5ZmMyNzgzIiwiaWF0IjoxNjQ0NTM2MjA0fQ.K5f2PoTP2jVeTL3YvzpFahuckUdhf5hkUjGAXgBSHSo"}});s.interceptors.request.use((function(t){return i.a.start(),t})),s.interceptors.response.use((function(t){return i.a.done(),t}))},b50d:function(t,e,r){"use strict";var n=r("c532"),o=r("467f"),a=r("7aac"),i=r("30b5"),s=r("83b9"),u=r("c345"),c=r("3934"),l=r("2d83"),f=r("2444"),d=r("7a77");t.exports=function(t){return new Promise((function(e,r){var h,p=t.data,m=t.headers,v=t.responseType;function b(){t.cancelToken&&t.cancelToken.unsubscribe(h),t.signal&&t.signal.removeEventListener("abort",h)}n.isFormData(p)&&delete m["Content-Type"];var g=new XMLHttpRequest;if(t.auth){var y=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";m.Authorization="Basic "+btoa(y+":"+w)}var x=s(t.baseURL,t.url);function _(){if(g){var n="getAllResponseHeaders"in g?u(g.getAllResponseHeaders()):null,a=v&&"text"!==v&&"json"!==v?g.response:g.responseText,i={data:a,status:g.status,statusText:g.statusText,headers:n,config:t,request:g};o((function(t){e(t),b()}),(function(t){r(t),b()}),i),g=null}}if(g.open(t.method.toUpperCase(),i(x,t.params,t.paramsSerializer),!0),g.timeout=t.timeout,"onloadend"in g?g.onloadend=_:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(_)},g.onabort=function(){g&&(r(l("Request aborted",t,"ECONNABORTED",g)),g=null)},g.onerror=function(){r(l("Network Error",t,null,g)),g=null},g.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||f.transitional;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(l(e,t,n.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",g)),g=null},n.isStandardBrowserEnv()){var E=(t.withCredentials||c(x))&&t.xsrfCookieName?a.read(t.xsrfCookieName):void 0;E&&(m[t.xsrfHeaderName]=E)}"setRequestHeader"in g&&n.forEach(m,(function(t,e){"undefined"===typeof p&&"content-type"===e.toLowerCase()?delete m[e]:g.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(g.withCredentials=!!t.withCredentials),v&&"json"!==v&&(g.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&g.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(h=function(t){g&&(r(!t||t&&t.type?new d("canceled"):t),g.abort(),g=null)},t.cancelToken&&t.cancelToken.subscribe(h),t.signal&&(t.signal.aborted?h():t.signal.addEventListener("abort",h))),p||(p=null),g.send(p)}))}},bc3a:function(t,e,r){t.exports=r("cee4")},c100:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("Logout page")])])}],a=r("1da1"),i=(r("96cf"),{name:"Logout",created:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("user");case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}}),s=i,u=r("2877"),c=Object(u["a"])(s,n,o,!1,null,null,null);e["default"]=c.exports},c345:function(t,e,r){"use strict";var n=r("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,a,i={};return t?(n.forEach(t.split("\n"),(function(t){if(a=t.indexOf(":"),e=n.trim(t.substr(0,a)).toLowerCase(),r=n.trim(t.substr(a+1)),e){if(i[e]&&o.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([r]):i[e]?i[e]+", "+r:r}})),i):i}},c401:function(t,e,r){"use strict";var n=r("c532"),o=r("2444");t.exports=function(t,e,r){var a=this||o;return n.forEach(r,(function(r){t=r.call(a,t,e)})),t}},c532:function(t,e,r){"use strict";var n=r("1d2b"),o=Object.prototype.toString;function a(t){return Array.isArray(t)}function i(t){return"undefined"===typeof t}function s(t){return null!==t&&!i(t)&&null!==t.constructor&&!i(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function u(t){return"[object ArrayBuffer]"===o.call(t)}function c(t){return"[object FormData]"===o.call(t)}function l(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&u(t.buffer),e}function f(t){return"string"===typeof t}function d(t){return"number"===typeof t}function h(t){return null!==t&&"object"===typeof t}function p(t){if("[object Object]"!==o.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function m(t){return"[object Date]"===o.call(t)}function v(t){return"[object File]"===o.call(t)}function b(t){return"[object Blob]"===o.call(t)}function g(t){return"[object Function]"===o.call(t)}function y(t){return h(t)&&g(t.pipe)}function w(t){return"[object URLSearchParams]"===o.call(t)}function x(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function _(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function E(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),a(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}function S(){var t={};function e(e,r){p(t[r])&&p(e)?t[r]=S(t[r],e):p(e)?t[r]=S({},e):a(e)?t[r]=e.slice():t[r]=e}for(var r=0,n=arguments.length;r<n;r++)E(arguments[r],e);return t}function O(t,e,r){return E(e,(function(e,o){t[o]=r&&"function"===typeof e?n(e,r):e})),t}function C(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}t.exports={isArray:a,isArrayBuffer:u,isBuffer:s,isFormData:c,isArrayBufferView:l,isString:f,isNumber:d,isObject:h,isPlainObject:p,isUndefined:i,isDate:m,isFile:v,isBlob:b,isFunction:g,isStream:y,isURLSearchParams:w,isStandardBrowserEnv:_,forEach:E,merge:S,extend:O,trim:x,stripBOM:C}},c8af:function(t,e,r){"use strict";var n=r("c532");t.exports=function(t,e){n.forEach(t,(function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])}))}},cee4:function(t,e,r){"use strict";var n=r("c532"),o=r("1d2b"),a=r("0a06"),i=r("4a7b"),s=r("2444");function u(t){var e=new a(t),r=o(a.prototype.request,e);return n.extend(r,a.prototype,e),n.extend(r,e),r.create=function(e){return u(i(t,e))},r}var c=u(s);c.Axios=a,c.Cancel=r("7a77"),c.CancelToken=r("8df4"),c.isCancel=r("2e67"),c.VERSION=r("5cce").version,c.all=function(t){return Promise.all(t)},c.spread=r("0df6"),c.isAxiosError=r("5f02"),t.exports=c,t.exports.default=c},d925:function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}},e683:function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},f6b4:function(t,e,r){"use strict";var n=r("c532");function o(){this.handlers=[]}o.prototype.use=function(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},f820:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("This is an about page")]),r("Users")],1)},o=[],a=r("2877"),i={},s=Object(a["a"])(i,n,o,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=about.b69d4072.js.map