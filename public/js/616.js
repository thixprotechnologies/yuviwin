/*! For license information please see 616.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[616],{503:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(3645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".otp-input-container{display:flex;justify-content:center}.newotpinput{border:1.3px solid #6283b0;border-radius:8px!important;font-size:1.2rem;height:40px;width:40px}.newotpinput,.newotpinput:focus{background:transparent;color:var(--white-color)}.newotpinput:focus{border:1.4px solid var(--white-color);box-shadow:none;box-shadow:0 0 5px #fff,0 0 25px #fff,0 0 50px #fff,0 0 100px #fff}.login-box1-btn .active{background:var(--yellow-color)!important}",""]);const i=o},9616:(t,e,n)=>{n.r(e),n.d(e,{default:()=>I});var r=n(821);var o={class:"home-section"},i={class:"center"},a={class:"login-form",style:{padding:"0 2.8%"}},u={class:"otp-box"},s=(0,r._)("img",{src:"/images/otp-box-img.png?1ff85157947202a7e84cb086cbac3d8f"},null,-1),c=(0,r._)("h4",null,"OTP Verification",-1),l=(0,r._)("p",null,"Enter your 6 digit verification code that we have sent on your email",-1),p={method:"post"},f={class:"otp-verification-text"},h={id:"timeotp"},d={class:"login-box1-btn"};function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(){m=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),u=new T(r||[]);return o(a,"_invoke",{value:S(t,n,u)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",y="completed",g={};function w(){}function b(){}function x(){}var L={};c(L,a,(function(){return this}));var E=Object.getPrototypeOf,I=E&&E(E(N([])));I&&I!==n&&r.call(I,a)&&(L=I);var O=x.prototype=w.prototype=Object.create(L);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,i,a,u){var s=p(t[o],t,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==v(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(l).then((function(t){c.value=t,a(c)}),(function(t){return n("throw",t,a,u)}))}u(s.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function S(e,n,r){var o=f;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var s=C(u,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var c=p(e,n,r);if("normal"===c.type){if(o=r.done?y:h,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=y,r.method="throw",r.arg=c.arg)}}}function C(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,C(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=p(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(v(e)+" is not iterable")}return b.prototype=x,o(O,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=c(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,c(t,s,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},_(k.prototype),c(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new k(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(O),c(O,s,"Generator"),c(O,a,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=N,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return u.type="throw",u.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function y(t,e,n,r,o,i,a){try{var u=t[i](a),s=u.value}catch(t){return void n(t)}u.done?e(s):Promise.resolve(s).then(r,o)}function g(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){y(i,r,o,a,u,"next",t)}function u(t){y(i,r,o,a,u,"throw",t)}a(void 0)}))}}const w={props:{user:{type:String,required:!0},type:{type:String,required:!0}},data:function(){return{otpValue:"",otp:"",intervalId:null,countdown:120}},created:function(){this.user&&this.type||this.$router.go(-1)},mounted:function(){var t=parseInt(sessionStorage.getItem("countdown"));isNaN(t)||0==t||(this.countdown=t),this.startCountdown()},beforeDestroy:function(){clearInterval(this.intervalId),sessionStorage.removeItem("countdown")},computed:{formattedTime:function(){var t=Math.floor(this.countdown/60),e=this.countdown%60;return"".concat(t.toString().padStart(2,"0"),":").concat(e.toString().padStart(2,"0"))}},watch:{countdown:function(t){sessionStorage.setItem("countdown",t)},otp:function(t){6==t.length?document.getElementById("submitotp").classList.add("active"):document.getElementById("submitotp").classList.remove("active")}},methods:{startCountdown:function(){var t=this;this.intervalId=setInterval((function(){t.countdown>0?t.countdown--:clearInterval(t.intervalId)}),1e3)},handleOnComplete:function(t){document.getElementById("submitotp").classList.add("active")},handleOnChange:function(t){6==t.length?(this.otp=t,document.getElementById("submitotp").classList.add("active")):document.getElementById("submitotp").classList.remove("active")},onInput:function(t){this.inputs[t].value&&t<this.inputs.length-1&&this.$refs.otpInputs[t+1].focus(),null!==this.inputs[t].value&&this.inputs[t].value>9&&(this.inputs[t].value=Math.floor(this.inputs[t].value/10)),!this.inputs[t].value&&t>0&&this.$refs.otpInputs[t-1].focus(),this.inputs.map((function(t){return t.value})).join("").length===this.inputs.length?document.getElementById("submitotp").classList.add("active"):document.getElementById("submitotp").classList.remove("active")},shouldDisable:function(t){return 0!==t&&!this.inputs[t-1].value&&!this.inputs[t].value},verifyOtp:function(){var t=this;return g(m().mark((function e(){var n,r,o;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(6!==t.otp.length){e.next=11;break}return(n=new FormData).append("username",t.user),n.append("type",t.type),n.append("otp",t.otp),e.next=7,t.callApi("post","/api/user/v1/otp/verify",n);case 7:if(200===(r=e.sent).status)r.data.status?"forgot-Password"==r.data.type?t.$router.push({name:"ChangePassword",query:{user:r.data.user}}):"account-verify"==r.data.type?(t.salert("Account Created Successfully"),t.$router.push({name:"Login"})):"login"==r.data.type&&(localStorage.setItem("ruser",r.data.user),localStorage.setItem("systoken",r.data.token),t.salert(r.data.msg),setTimeout((function(){localStorage.removeItem("ruser")}),36e5),t.$router.push({name:"Home"})):t.ialert(r.data.msg);else if(400===r.status)t.ialert(r.data.msg);else if(422==r.status)for(o in r.data.errors)t.ealert(r.data.errors[o][0]);else t.swralert();e.next=12;break;case 11:document.getElementById("submitotp").classList.remove("active");case 12:case"end":return e.stop()}}),e)})))()},resendOtp:function(){var t=this;return g(m().mark((function e(){var n,r,o;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("username",t.user),n.append("type",t.type),e.next=5,t.callApi("post","/api/user/v1/otp/resend",n);case 5:if(200===(r=e.sent).status)r.data.status?(t.salert(r.data.msg),t.countdown=120):t.ialert(r.data.msg);else if(400===r.status)t.ialert(r.data.msg);else if(422==r.status)for(o in r.data.errors)t.ealert(r.data.errors[o][0]);else t.swralert();case 7:case"end":return e.stop()}}),e)})))()}}};var b=n(3379),x=n.n(b),L=n(503),E={insert:"head",singleton:!1};x()(L.Z,E);L.Z.locals;const I=(0,n(3744).Z)(w,[["render",function(t,e,n,v,m,y){var g=(0,r.up)("v-otp-input");return(0,r.wg)(),(0,r.iD)("section",o,[(0,r._)("div",i,[(0,r._)("form",a,[(0,r._)("div",u,[s,c,l,(0,r._)("form",p,[(0,r.Wm)(g,{ref:"otpInput","input-classes":"newotpinput text-center rounded",separator:"-",inputType:"number","num-inputs":6,value:m.otpValue,"should-auto-focus":!0,"should-focus-order":!0,onOnChange:y.handleOnChange,onOnComplete:y.handleOnComplete},null,8,["value","onOnChange","onOnComplete"]),(0,r._)("div",f,[(0,r._)("h5",null,[(0,r.Uk)("Didn't received the Code "),(0,r._)("span",h,(0,r.zw)(y.formattedTime),1)]),0==m.countdown?((0,r.wg)(),(0,r.iD)("a",{key:0,href:"javascript:void(0)",onClick:e[0]||(e[0]=function(t){return y.resendOtp()})},"Resend OTP?")):(0,r.kq)("",!0)]),(0,r._)("div",d,[(0,r._)("button",{type:"button",id:"submitotp",onClick:e[1]||(e[1]=function(t){return y.verifyOtp()})},"Verify Now")])])])])])])}]])}}]);