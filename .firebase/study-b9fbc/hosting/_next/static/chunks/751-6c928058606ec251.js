(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[751],{9247:function(t,e,r){"use strict";var n=r(8997);Object.defineProperty(e,"__esModule",{value:!0}),e.BroadcastChannel=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nextauth.message";return{receive:function(e){var r=function(r){if(r.key===t){var n,o=JSON.parse(null!==(n=r.newValue)&&void 0!==n?n:"{}");(null==o?void 0:o.event)==="session"&&null!=o&&o.data&&e(o)}};return window.addEventListener("storage",r),function(){return window.removeEventListener("storage",r)}},post:function(e){if("undefined"!=typeof window)try{localStorage.setItem(t,JSON.stringify(c(c({},e),{},{timestamp:f()})))}catch(t){}}}},e.apiBaseUrl=l,e.fetchData=function(t,e,r){return s.apply(this,arguments)},e.now=f;var o=n(r(4471)),a=n(r(1120)),u=n(r(6453));function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function s(){return(s=(0,u.default)(o.default.mark(function t(e,r,n){var a,u,i,s,f,p,d,v,h,y=arguments;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u=(a=y.length>3&&void 0!==y[3]?y[3]:{}).ctx,s=void 0===(i=a.req)?null==u?void 0:u.req:i,f="".concat(l(r),"/").concat(e),t.prev=2,d={headers:c({"Content-Type":"application/json"},null!=s&&null!==(p=s.headers)&&void 0!==p&&p.cookie?{cookie:s.headers.cookie}:{})},null!=s&&s.body&&(d.body=JSON.stringify(s.body),d.method="POST"),t.next=7,fetch(f,d);case 7:return v=t.sent,t.next=10,v.json();case 10:if(h=t.sent,v.ok){t.next=13;break}throw h;case 13:return t.abrupt("return",Object.keys(h).length>0?h:null);case 16:return t.prev=16,t.t0=t.catch(2),n.error("CLIENT_FETCH_ERROR",{error:t.t0,url:f}),t.abrupt("return",null);case 20:case"end":return t.stop()}},t,null,[[2,16]])}))).apply(this,arguments)}function l(t){return"undefined"==typeof window?"".concat(t.baseUrlServer).concat(t.basePathServer):t.basePath}function f(){return Math.floor(Date.now()/1e3)}},6334:function(t,e,r){"use strict";var n=r(8997);Object.defineProperty(e,"__esModule",{value:!0}),e.UnsupportedStrategy=e.UnknownError=e.OAuthCallbackError=e.MissingSecret=e.MissingAuthorize=e.MissingAdapterMethods=e.MissingAdapter=e.MissingAPIRoute=e.InvalidCallbackUrl=e.AccountNotLinkedError=void 0,e.adapterErrorHandler=function(t,e){if(t)return Object.keys(t).reduce(function(r,n){return r[n]=(0,a.default)(o.default.mark(function r(){var a,u,i,c,s,l=arguments;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:for(r.prev=0,u=Array(a=l.length),i=0;i<a;i++)u[i]=l[i];return e.debug("adapter_".concat(n),{args:u}),c=t[n],r.next=6,c.apply(void 0,u);case 6:return r.abrupt("return",r.sent);case 9:throw r.prev=9,r.t0=r.catch(0),e.error("adapter_error_".concat(n),r.t0),(s=new v(r.t0)).name="".concat(S(n),"Error"),s;case 15:case"end":return r.stop()}},r,null,[[0,9]])})),r},{})},e.capitalize=S,e.eventsErrorHandler=function(t,e){return Object.keys(t).reduce(function(r,n){return r[n]=(0,a.default)(o.default.mark(function r(){var a,u=arguments;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a=t[n],r.next=4,a.apply(void 0,u);case 4:return r.abrupt("return",r.sent);case 7:r.prev=7,r.t0=r.catch(0),e.error("".concat(E(n),"_EVENT_ERROR"),r.t0);case 10:case"end":return r.stop()}},r,null,[[0,7]])})),r},{})},e.upperSnake=E;var o=n(r(4471)),a=n(r(6453)),u=n(r(496)),i=n(r(1120)),c=n(r(5548)),s=n(r(6920)),l=n(r(6666)),f=n(r(6318)),p=n(r(8744));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n=(0,p.default)(t);if(e){var o=(0,p.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,f.default)(this,r)}}var v=function(t){(0,l.default)(r,t);var e=d(r);function r(t){var n,o;return(0,c.default)(this,r),(o=e.call(this,null!==(n=null==t?void 0:t.message)&&void 0!==n?n:t)).name="UnknownError",o.code=t.code,t instanceof Error&&(o.stack=t.stack),o}return(0,s.default)(r,[{key:"toJSON",value:function(){return{name:this.name,message:this.message,stack:this.stack}}}]),r}((0,n(r(2969)).default)(Error));e.UnknownError=v;var h=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","OAuthCallbackError"),t}return(0,s.default)(r)}(v);e.OAuthCallbackError=h;var y=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","AccountNotLinkedError"),t}return(0,s.default)(r)}(v);e.AccountNotLinkedError=y;var g=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","MissingAPIRouteError"),(0,i.default)((0,u.default)(t),"code","MISSING_NEXTAUTH_API_ROUTE_ERROR"),t}return(0,s.default)(r)}(v);e.MissingAPIRoute=g;var b=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","MissingSecretError"),(0,i.default)((0,u.default)(t),"code","NO_SECRET"),t}return(0,s.default)(r)}(v);e.MissingSecret=b;var x=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","MissingAuthorizeError"),(0,i.default)((0,u.default)(t),"code","CALLBACK_CREDENTIALS_HANDLER_ERROR"),t}return(0,s.default)(r)}(v);e.MissingAuthorize=x;var w=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","MissingAdapterError"),(0,i.default)((0,u.default)(t),"code","EMAIL_REQUIRES_ADAPTER_ERROR"),t}return(0,s.default)(r)}(v);e.MissingAdapter=w;var _=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","MissingAdapterMethodsError"),(0,i.default)((0,u.default)(t),"code","MISSING_ADAPTER_METHODS_ERROR"),t}return(0,s.default)(r)}(v);e.MissingAdapterMethods=_;var m=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","UnsupportedStrategyError"),(0,i.default)((0,u.default)(t),"code","CALLBACK_CREDENTIALS_JWT_ERROR"),t}return(0,s.default)(r)}(v);e.UnsupportedStrategy=m;var O=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","InvalidCallbackUrl"),(0,i.default)((0,u.default)(t),"code","INVALID_CALLBACK_URL_ERROR"),t}return(0,s.default)(r)}(v);function E(t){return t.replace(/([A-Z])/g,"_$1").toUpperCase()}function S(t){return"".concat(t[0].toUpperCase()).concat(t.slice(1))}e.InvalidCallbackUrl=O},4751:function(t,e,r){"use strict";var n,o,a,u,i,c=r(2040),s=r(8997),l=r(5630);Object.defineProperty(e,"__esModule",{value:!0});var f={SessionContext:!0,useSession:!0,getSession:!0,getCsrfToken:!0,getProviders:!0,signIn:!0,signOut:!0,SessionProvider:!0};e.SessionContext=void 0,e.SessionProvider=function(t){if(!L)throw Error("React Context is unavailable in Server Components");var e,r,n,o,a,u,i=t.children,c=t.basePath,s=t.refetchInterval,l=t.refetchWhenOffline;c&&(j.basePath=c);var f=void 0!==t.session;j._lastSync=f?(0,x.now)():0;var d=y.useState(function(){return f&&(j._session=t.session),t.session}),g=(0,h.default)(d,2),b=g[0],_=g[1],m=y.useState(!f),O=(0,h.default)(m,2),E=O[0],S=O[1];y.useEffect(function(){return j._getSession=(0,v.default)(p.default.mark(function t(){var e,r,n=arguments;return p.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(n.length>0&&void 0!==n[0]?n[0]:{}).event,t.prev=1,!((r="storage"===e)||void 0===j._session)){t.next=10;break}return j._lastSync=(0,x.now)(),t.next=7,R({broadcast:!r});case 7:return j._session=t.sent,_(j._session),t.abrupt("return");case 10:if(!(!e||null===j._session||(0,x.now)()<j._lastSync)){t.next=12;break}return t.abrupt("return");case 12:return j._lastSync=(0,x.now)(),t.next=15,R();case 15:j._session=t.sent,_(j._session),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(1),P.error("CLIENT_SESSION_ERROR",t.t0);case 22:return t.prev=22,S(!1),t.finish(22);case 25:case"end":return t.stop()}},t,null,[[1,19,22,25]])})),j._getSession(),function(){j._lastSync=0,j._session=void 0,j._getSession=function(){}}},[]),y.useEffect(function(){var t=k.receive(function(){return j._getSession({event:"storage"})});return function(){return t()}},[]),y.useEffect(function(){var e=t.refetchOnWindowFocus,r=void 0===e||e,n=function(){r&&"visible"===document.visibilityState&&j._getSession({event:"visibilitychange"})};return document.addEventListener("visibilitychange",n,!1),function(){return document.removeEventListener("visibilitychange",n,!1)}},[t.refetchOnWindowFocus]);var T=(e=y.useState("undefined"!=typeof navigator&&navigator.onLine),n=(r=(0,h.default)(e,2))[0],o=r[1],a=function(){return o(!0)},u=function(){return o(!1)},y.useEffect(function(){return window.addEventListener("online",a),window.addEventListener("offline",u),function(){window.removeEventListener("online",a),window.removeEventListener("offline",u)}},[]),n),A=!1!==l||T;y.useEffect(function(){if(s&&A){var t=setInterval(function(){j._session&&j._getSession({event:"poll"})},1e3*s);return function(){return clearInterval(t)}}},[s,A]);var U=y.useMemo(function(){return{data:b,status:E?"loading":b?"authenticated":"unauthenticated",update:function(t){return(0,v.default)(p.default.mark(function e(){var r;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(E||!b)){e.next=2;break}return e.abrupt("return");case 2:return S(!0),e.t0=x.fetchData,e.t1=j,e.t2=P,e.next=8,M();case 8:return e.t3=e.sent,e.t4=t,e.t5={csrfToken:e.t3,data:e.t4},e.t6={body:e.t5},e.t7={req:e.t6},e.next=15,(0,e.t0)("session",e.t1,e.t2,e.t7);case 15:return r=e.sent,S(!1),r&&(_(r),k.post({event:"session",data:{trigger:"getSession"}})),e.abrupt("return",r);case 19:case"end":return e.stop()}},e)}))()}}},[b,E]);return(0,w.jsx)(L.Provider,{value:U,children:i})},e.getCsrfToken=M,e.getProviders=U,e.getSession=R,e.signIn=function(t,e,r){return N.apply(this,arguments)},e.signOut=function(t){return I.apply(this,arguments)},e.useSession=function(t){if(!L)throw Error("React Context is unavailable in Server Components");var e=y.useContext(L),r=null!=t?t:{},n=r.required,o=r.onUnauthenticated,a=n&&"unauthenticated"===e.status;return(y.useEffect(function(){if(a){var t="/api/auth/signin?".concat(new URLSearchParams({error:"SessionRequired",callbackUrl:window.location.href}));o?o():window.location.href=t}},[a,o]),a)?{data:e.data,update:e.update,status:"loading"}:e};var p=s(r(4471)),d=s(r(1120)),v=s(r(6453)),h=s(r(7948)),y=O(r(6006)),g=O(r(6751)),b=s(r(2099)),x=r(9247),w=r(9268),_=r(9225);function m(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(m=function(t){return t?r:e})(t)}function O(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==l(t)&&"function"!=typeof t)return{default:t};var r=m(e);if(r&&r.has(t))return r.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var u=o?Object.getOwnPropertyDescriptor(t,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=t[a]}return n.default=t,r&&r.set(t,n),n}function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach(function(e){(0,d.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}Object.keys(_).forEach(function(t){!("default"===t||"__esModule"===t||Object.prototype.hasOwnProperty.call(f,t))&&(t in e&&e[t]===_[t]||Object.defineProperty(e,t,{enumerable:!0,get:function(){return _[t]}}))});var j={baseUrl:(0,b.default)(null!==(n=c.env.NEXTAUTH_URL)&&void 0!==n?n:c.env.VERCEL_URL).origin,basePath:(0,b.default)(c.env.NEXTAUTH_URL).path,baseUrlServer:(0,b.default)(null!==(o=null!==(a=c.env.NEXTAUTH_URL_INTERNAL)&&void 0!==a?a:c.env.NEXTAUTH_URL)&&void 0!==o?o:c.env.VERCEL_URL).origin,basePathServer:(0,b.default)(null!==(u=c.env.NEXTAUTH_URL_INTERNAL)&&void 0!==u?u:c.env.NEXTAUTH_URL).path,_lastSync:0,_session:void 0,_getSession:function(){}},k=(0,x.BroadcastChannel)(),P=(0,g.proxyLogger)(g.default,j.basePath),L=null===(i=y.createContext)||void 0===i?void 0:i.call(y,void 0);function R(t){return T.apply(this,arguments)}function T(){return(T=(0,v.default)(p.default.mark(function t(e){var r,n;return p.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,x.fetchData)("session",j,P,e);case 2:return n=t.sent,(null===(r=null==e?void 0:e.broadcast)||void 0===r||r)&&k.post({event:"session",data:{trigger:"getSession"}}),t.abrupt("return",n);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function M(t){return A.apply(this,arguments)}function A(){return(A=(0,v.default)(p.default.mark(function t(e){var r;return p.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,x.fetchData)("csrf",j,P,e);case 2:return r=t.sent,t.abrupt("return",null==r?void 0:r.csrfToken);case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)}function U(){return C.apply(this,arguments)}function C(){return(C=(0,v.default)(p.default.mark(function t(){return p.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,x.fetchData)("providers",j,P);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}function N(){return(N=(0,v.default)(p.default.mark(function t(e,r,n){var o,a,u,i,c,s,l,f,d,v,h,y,g,b,w,_,m;return p.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u=void 0===(a=(o=null!=r?r:{}).callbackUrl)?window.location.href:a,c=void 0===(i=o.redirect)||i,s=(0,x.apiBaseUrl)(j),t.next=4,U();case 4:if(l=t.sent){t.next=8;break}return window.location.href="".concat(s,"/error"),t.abrupt("return");case 8:if(!(!e||!(e in l))){t.next=11;break}return window.location.href="".concat(s,"/signin?").concat(new URLSearchParams({callbackUrl:u})),t.abrupt("return");case 11:return f="credentials"===l[e].type,d="email"===l[e].type,v=f||d,h="".concat(s,"/").concat(f?"callback":"signin","/").concat(e),y="".concat(h,"?").concat(new URLSearchParams(n)),t.t0=fetch,t.t1=y,t.t2={"Content-Type":"application/x-www-form-urlencoded"},t.t3=URLSearchParams,t.t4=S,t.t5=S({},r),t.t6={},t.next=25,M();case 25:return t.t7=t.sent,t.t8=u,t.t9={csrfToken:t.t7,callbackUrl:t.t8,json:!0},t.t10=(0,t.t4)(t.t5,t.t6,t.t9),t.t11=new t.t3(t.t10),t.t12={method:"post",headers:t.t2,body:t.t11},t.next=33,(0,t.t0)(t.t1,t.t12);case 33:return g=t.sent,t.next=36,g.json();case 36:if(b=t.sent,!(c||!v)){t.next=42;break}return _=null!==(w=b.url)&&void 0!==w?w:u,window.location.href=_,_.includes("#")&&window.location.reload(),t.abrupt("return");case 42:if(m=new URL(b.url).searchParams.get("error"),!g.ok){t.next=46;break}return t.next=46,j._getSession({event:"storage"});case 46:return t.abrupt("return",{error:m,status:g.status,ok:g.ok,url:m?null:b.url});case 47:case"end":return t.stop()}},t)}))).apply(this,arguments)}function I(){return(I=(0,v.default)(p.default.mark(function t(e){var r,n,o,a,u,i,c,s,l;return p.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=void 0===(n=(null!=e?e:{}).callbackUrl)?window.location.href:n,a=(0,x.apiBaseUrl)(j),t.t0={"Content-Type":"application/x-www-form-urlencoded"},t.t1=URLSearchParams,t.next=6,M();case 6:return t.t2=t.sent,t.t3=o,t.t4={csrfToken:t.t2,callbackUrl:t.t3,json:!0},t.t5=new t.t1(t.t4),u={method:"post",headers:t.t0,body:t.t5},t.next=13,fetch("".concat(a,"/signout"),u);case 13:return i=t.sent,t.next=16,i.json();case 16:if(c=t.sent,k.post({event:"session",data:{trigger:"signout"}}),!(null===(r=null==e?void 0:e.redirect)||void 0===r||r)){t.next=23;break}return l=null!==(s=c.url)&&void 0!==s?s:o,window.location.href=l,l.includes("#")&&window.location.reload(),t.abrupt("return");case 23:return t.next=25,j._getSession({event:"storage"});case 25:return t.abrupt("return",c);case 26:case"end":return t.stop()}},t)}))).apply(this,arguments)}e.SessionContext=L},9225:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},6751:function(t,e,r){"use strict";var n=r(8997);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.proxyLogger=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;try{if("undefined"==typeof window)return t;var r={},n=function(t){r[t]=function(r,n){c[t](r,n),"error"===t&&(n=i(n)),n.client=!0;var a="".concat(e,"/_log"),s=new URLSearchParams(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach(function(e){(0,o.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({level:t,code:r},n));return navigator.sendBeacon?navigator.sendBeacon(a,s):fetch(a,{method:"POST",body:s,keepalive:!0})}};for(var a in t)n(a);return r}catch(t){return c}},e.setLogger=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;e||(c.debug=function(){}),t.error&&(c.error=t.error),t.warn&&(c.warn=t.warn),t.debug&&(c.debug=t.debug)};var o=n(r(1120)),a=r(6334);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function i(t){var e;return t instanceof Error&&!(t instanceof a.UnknownError)?{message:t.message,stack:t.stack,name:t.name}:(null!=t&&t.error&&(t.error=i(t.error),t.message=null!==(e=t.message)&&void 0!==e?e:t.error.message),t)}var c={error:function(t,e){e=i(e),console.error("[next-auth][error][".concat(t,"]"),"\nhttps://next-auth.js.org/errors#".concat(t.toLowerCase()),e.message,e)},warn:function(t){console.warn("[next-auth][warn][".concat(t,"]"),"\nhttps://next-auth.js.org/warnings#".concat(t.toLowerCase()))},debug:function(t,e){console.log("[next-auth][debug][".concat(t,"]"),e)}};e.default=c},2099:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e;let r=new URL("http://localhost:3000/api/auth");t&&!t.startsWith("http")&&(t=`https://${t}`);let n=new URL(null!==(e=t)&&void 0!==e?e:r),o=("/"===n.pathname?r.pathname:n.pathname).replace(/\/$/,""),a=`${n.origin}${o}`;return{origin:n.origin,host:n.host,path:o,base:a,toString:()=>a}}},2040:function(t,e,r){"use strict";var n,o;t.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(6003)},6003:function(t){!function(){var e={229:function(t){var e,r,n,o=t.exports={};function a(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function i(t){if(e===setTimeout)return setTimeout(t,0);if((e===a||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:a}catch(t){e=a}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var c=[],s=!1,l=-1;function f(){s&&n&&(s=!1,n.length?c=n.concat(c):l=-1,c.length&&p())}function p(){if(!s){var t=i(f);s=!0;for(var e=c.length;e;){for(n=c,c=[];++l<e;)n&&n[l].run();l=-1,e=c.length}n=null,s=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new d(t,e)),1!==c.length||s||i(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}},u=!0;try{e[t](a,a.exports,n),u=!1}finally{u&&delete r[t]}return a.exports}n.ab="//";var o=n(229);t.exports=o}()},3177:function(t,e,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6006),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(t,e,r){var n,a={},s=null,l=null;for(n in void 0!==r&&(s=""+r),void 0!==e.key&&(s=""+e.key),void 0!==e.ref&&(l=e.ref),e)u.call(e,n)&&!c.hasOwnProperty(n)&&(a[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===a[n]&&(a[n]=e[n]);return{$$typeof:o,type:t,key:s,ref:l,props:a,_owner:i.current}}e.Fragment=a,e.jsx=s,e.jsxs=s},9268:function(t,e,r){"use strict";t.exports=r(3177)},3116:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},3183:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},496:function(t){t.exports=function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.__esModule=!0,t.exports.default=t.exports},6453:function(t){function e(t,e,r,n,o,a,u){try{var i=t[a](u),c=i.value}catch(t){r(t);return}i.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var r=this,n=arguments;return new Promise(function(o,a){var u=t.apply(r,n);function i(t){e(u,o,a,i,c,"next",t)}function c(t){e(u,o,a,i,c,"throw",t)}i(void 0)})}},t.exports.__esModule=!0,t.exports.default=t.exports},5548:function(t){t.exports=function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports.default=t.exports},4139:function(t,e,r){var n=r(8627),o=r(4990);function a(e,r,u){return o()?(t.exports=a=Reflect.construct.bind(),t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=a=function(t,e,r){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return r&&n(a,r.prototype),a},t.exports.__esModule=!0,t.exports.default=t.exports),a.apply(null,arguments)}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},6920:function(t,e,r){var n=r(8463);function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}t.exports=function(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports.default=t.exports},1120:function(t,e,r){var n=r(8463);t.exports=function(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},8744:function(t){function e(r){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},6666:function(t,e,r){var n=r(8627);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&n(t,e)},t.exports.__esModule=!0,t.exports.default=t.exports},8997:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},9075:function(t){t.exports=function(t){return -1!==Function.toString.call(t).indexOf("[native code]")},t.exports.__esModule=!0,t.exports.default=t.exports},4990:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},4959:function(t){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,u,i=[],c=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw o}}return i}},t.exports.__esModule=!0,t.exports.default=t.exports},7221:function(t){t.exports=function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},6318:function(t,e,r){var n=r(5630).default,o=r(496);t.exports=function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return o(t)},t.exports.__esModule=!0,t.exports.default=t.exports},2996:function(t,e,r){var n=r(5630).default;function o(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,u=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o,a,i=Object.create((e&&e.prototype instanceof h?e:h).prototype);return u(i,"_invoke",{value:(o=new j(n||[]),a="suspendedStart",function(e,n){if("executing"===a)throw Error("Generator is already running");if("completed"===a){if("throw"===e)throw n;return P()}for(o.method=e,o.arg=n;;){var u=o.delegate;if(u){var i=function t(e,r){var n=r.method,o=e.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=TypeError("The iterator does not provide a '"+n+"' method")),v;var a=d(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var u=a.arg;return u?u.done?(r[e.resultName]=u.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,v):u:(r.method="throw",r.arg=TypeError("iterator result is not an object"),r.delegate=null,v)}(u,o);if(i){if(i===v)continue;return i}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===a)throw a="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);a="executing";var c=d(t,r,o);if("normal"===c.type){if(a=o.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(a="completed",o.method="throw",o.arg=c.arg)}})}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var v={};function h(){}function y(){}function g(){}var b={};f(b,c,function(){return this});var x=Object.getPrototypeOf,w=x&&x(x(k([])));w&&w!==r&&a.call(w,c)&&(b=w);var _=g.prototype=h.prototype=Object.create(b);function m(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function O(t,e){var r;u(this,"_invoke",{value:function(o,u){function i(){return new e(function(r,i){!function r(o,u,i,c){var s=d(t[o],t,u);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return r("throw",t,i,c)})}c(s.arg)}(o,u,r,i)})}return r=r?r.then(i,i):i()}})}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=g,u(_,"constructor",{value:g,configurable:!0}),u(g,"constructor",{value:y,configurable:!0}),y.displayName=f(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},m(O.prototype),f(O.prototype,s,function(){return this}),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var u=new O(p(t,r,n,o),a);return e.isGeneratorFunction(r)?u:u.next().then(function(t){return t.done?t.value:u.next()})},m(_),f(_,l,"Generator"),f(_,c,function(){return this}),f(_,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return u.type="throw",u.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8627:function(t){function e(r,n){return t.exports=e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r,n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},7948:function(t,e,r){var n=r(3183),o=r(4959),a=r(3351),u=r(7221);t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||u()},t.exports.__esModule=!0,t.exports.default=t.exports},7927:function(t,e,r){var n=r(5630).default;t.exports=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},8463:function(t,e,r){var n=r(5630).default,o=r(7927);t.exports=function(t){var e=o(t,"string");return"symbol"===n(e)?e:String(e)},t.exports.__esModule=!0,t.exports.default=t.exports},5630:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},3351:function(t,e,r){var n=r(3116);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}},t.exports.__esModule=!0,t.exports.default=t.exports},2969:function(t,e,r){var n=r(8744),o=r(8627),a=r(9075),u=r(4139);function i(e){var r="function"==typeof Map?new Map:void 0;return t.exports=i=function(t){if(null===t||!a(t))return t;if("function"!=typeof t)throw TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return u(t,arguments,n(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},t.exports.__esModule=!0,t.exports.default=t.exports,i(e)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},4471:function(t,e,r){var n=r(2996)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);