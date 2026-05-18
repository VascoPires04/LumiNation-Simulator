(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function X_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ym={exports:{}},cc={},qm={exports:{}},ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),j_=Symbol.for("react.portal"),Y_=Symbol.for("react.fragment"),q_=Symbol.for("react.strict_mode"),$_=Symbol.for("react.profiler"),K_=Symbol.for("react.provider"),Z_=Symbol.for("react.context"),Q_=Symbol.for("react.forward_ref"),J_=Symbol.for("react.suspense"),ev=Symbol.for("react.memo"),tv=Symbol.for("react.lazy"),Fh=Symbol.iterator;function nv(t){return t===null||typeof t!="object"?null:(t=Fh&&t[Fh]||t["@@iterator"],typeof t=="function"?t:null)}var $m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Km=Object.assign,Zm={};function po(t,e,n){this.props=t,this.context=e,this.refs=Zm,this.updater=n||$m}po.prototype.isReactComponent={};po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qm(){}Qm.prototype=po.prototype;function Ed(t,e,n){this.props=t,this.context=e,this.refs=Zm,this.updater=n||$m}var wd=Ed.prototype=new Qm;wd.constructor=Ed;Km(wd,po.prototype);wd.isPureReactComponent=!0;var Oh=Array.isArray,Jm=Object.prototype.hasOwnProperty,Td={current:null},e0={key:!0,ref:!0,__self:!0,__source:!0};function t0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jm.call(e,i)&&!e0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:_a,type:t,key:s,ref:o,props:r,_owner:Td.current}}function iv(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function rv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bh=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rv(""+t.key):e.toString(36)}function pl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case j_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+bc(o,0):i,Oh(r)?(n="",t!=null&&(n=t.replace(Bh,"$&/")+"/"),pl(r,e,n,"",function(c){return c})):r!=null&&(Ad(r)&&(r=iv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Bh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Oh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+bc(s,a);o+=pl(s,e,n,l,r)}else if(l=nv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+bc(s,a++),o+=pl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wa(t,e,n){if(t==null)return t;var i=[],r=0;return pl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function sv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nn={current:null},ml={transition:null},ov={ReactCurrentDispatcher:Nn,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Td};function n0(){throw Error("act(...) is not supported in production builds of React.")}ut.Children={map:wa,forEach:function(t,e,n){wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wa(t,function(){e++}),e},toArray:function(t){return wa(t,function(e){return e})||[]},only:function(t){if(!Ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ut.Component=po;ut.Fragment=Y_;ut.Profiler=$_;ut.PureComponent=Ed;ut.StrictMode=q_;ut.Suspense=J_;ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ov;ut.act=n0;ut.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Km({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Td.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Jm.call(e,l)&&!e0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:_a,type:t.type,key:r,ref:s,props:i,_owner:o}};ut.createContext=function(t){return t={$$typeof:Z_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:K_,_context:t},t.Consumer=t};ut.createElement=t0;ut.createFactory=function(t){var e=t0.bind(null,t);return e.type=t,e};ut.createRef=function(){return{current:null}};ut.forwardRef=function(t){return{$$typeof:Q_,render:t}};ut.isValidElement=Ad;ut.lazy=function(t){return{$$typeof:tv,_payload:{_status:-1,_result:t},_init:sv}};ut.memo=function(t,e){return{$$typeof:ev,type:t,compare:e===void 0?null:e}};ut.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};ut.unstable_act=n0;ut.useCallback=function(t,e){return Nn.current.useCallback(t,e)};ut.useContext=function(t){return Nn.current.useContext(t)};ut.useDebugValue=function(){};ut.useDeferredValue=function(t){return Nn.current.useDeferredValue(t)};ut.useEffect=function(t,e){return Nn.current.useEffect(t,e)};ut.useId=function(){return Nn.current.useId()};ut.useImperativeHandle=function(t,e,n){return Nn.current.useImperativeHandle(t,e,n)};ut.useInsertionEffect=function(t,e){return Nn.current.useInsertionEffect(t,e)};ut.useLayoutEffect=function(t,e){return Nn.current.useLayoutEffect(t,e)};ut.useMemo=function(t,e){return Nn.current.useMemo(t,e)};ut.useReducer=function(t,e,n){return Nn.current.useReducer(t,e,n)};ut.useRef=function(t){return Nn.current.useRef(t)};ut.useState=function(t){return Nn.current.useState(t)};ut.useSyncExternalStore=function(t,e,n){return Nn.current.useSyncExternalStore(t,e,n)};ut.useTransition=function(){return Nn.current.useTransition()};ut.version="18.3.1";qm.exports=ut;var wt=qm.exports;const av=X_(wt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv=wt,cv=Symbol.for("react.element"),uv=Symbol.for("react.fragment"),fv=Object.prototype.hasOwnProperty,dv=lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hv={key:!0,ref:!0,__self:!0,__source:!0};function i0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)fv.call(e,i)&&!hv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:cv,type:t,key:s,ref:o,props:r,_owner:dv.current}}cc.Fragment=uv;cc.jsx=i0;cc.jsxs=i0;Ym.exports=cc;var Be=Ym.exports,Fu={},r0={exports:{}},Jn={},s0={exports:{}},o0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,ee){var oe=G.length;G.push(ee);e:for(;0<oe;){var Ee=oe-1>>>1,be=G[Ee];if(0<r(be,ee))G[Ee]=ee,G[oe]=be,oe=Ee;else break e}}function n(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var ee=G[0],oe=G.pop();if(oe!==ee){G[0]=oe;e:for(var Ee=0,be=G.length,tt=be>>>1;Ee<tt;){var nt=2*(Ee+1)-1,qe=G[nt],d=nt+1,B=G[d];if(0>r(qe,oe))d<be&&0>r(B,qe)?(G[Ee]=B,G[d]=oe,Ee=d):(G[Ee]=qe,G[nt]=oe,Ee=nt);else if(d<be&&0>r(B,oe))G[Ee]=B,G[d]=oe,Ee=d;else break e}}return ee}function r(G,ee){var oe=G.sortIndex-ee.sortIndex;return oe!==0?oe:G.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],p=1,h=null,f=3,g=!1,S=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(G){for(var ee=n(c);ee!==null;){if(ee.callback===null)i(c);else if(ee.startTime<=G)i(c),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(c)}}function M(G){if(w=!1,v(G),!S)if(n(l)!==null)S=!0,$(b);else{var ee=n(c);ee!==null&&X(M,ee.startTime-G)}}function b(G,ee){S=!1,w&&(w=!1,u(x),x=-1),g=!0;var oe=f;try{for(v(ee),h=n(l);h!==null&&(!(h.expirationTime>ee)||G&&!D());){var Ee=h.callback;if(typeof Ee=="function"){h.callback=null,f=h.priorityLevel;var be=Ee(h.expirationTime<=ee);ee=t.unstable_now(),typeof be=="function"?h.callback=be:h===n(l)&&i(l),v(ee)}else i(l);h=n(l)}if(h!==null)var tt=!0;else{var nt=n(c);nt!==null&&X(M,nt.startTime-ee),tt=!1}return tt}finally{h=null,f=oe,g=!1}}var T=!1,P=null,x=-1,C=5,I=-1;function D(){return!(t.unstable_now()-I<C)}function O(){if(P!==null){var G=t.unstable_now();I=G;var ee=!0;try{ee=P(!0,G)}finally{ee?J():(T=!1,P=null)}}else T=!1}var J;if(typeof m=="function")J=function(){m(O)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,F=ne.port2;ne.port1.onmessage=O,J=function(){F.postMessage(null)}}else J=function(){_(O,0)};function $(G){P=G,T||(T=!0,J())}function X(G,ee){x=_(function(){G(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){S||g||(S=!0,$(b))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(G){switch(f){case 1:case 2:case 3:var ee=3;break;default:ee=f}var oe=f;f=ee;try{return G()}finally{f=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,ee){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var oe=f;f=G;try{return ee()}finally{f=oe}},t.unstable_scheduleCallback=function(G,ee,oe){var Ee=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Ee+oe:Ee):oe=Ee,G){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=oe+be,G={id:p++,callback:ee,priorityLevel:G,startTime:oe,expirationTime:be,sortIndex:-1},oe>Ee?(G.sortIndex=oe,e(c,G),n(l)===null&&G===n(c)&&(w?(u(x),x=-1):w=!0,X(M,oe-Ee))):(G.sortIndex=be,e(l,G),S||g||(S=!0,$(b))),G},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(G){var ee=f;return function(){var oe=f;f=ee;try{return G.apply(this,arguments)}finally{f=oe}}}})(o0);s0.exports=o0;var pv=s0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv=wt,Qn=pv;function ye(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a0=new Set,Zo={};function gs(t,e){no(t,e),no(t+"Capture",e)}function no(t,e){for(Zo[t]=e,t=0;t<e.length;t++)a0.add(e[t])}var or=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=Object.prototype.hasOwnProperty,gv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kh={},zh={};function _v(t){return Ou.call(zh,t)?!0:Ou.call(kh,t)?!1:gv.test(t)?zh[t]=!0:(kh[t]=!0,!1)}function vv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xv(t,e,n,i){if(e===null||typeof e>"u"||vv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Un(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var vn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){vn[t]=new Un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];vn[e]=new Un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){vn[t]=new Un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){vn[t]=new Un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){vn[t]=new Un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){vn[t]=new Un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){vn[t]=new Un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){vn[t]=new Un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){vn[t]=new Un(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rd=/[\-:]([a-z])/g;function Cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rd,Cd);vn[e]=new Un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rd,Cd);vn[e]=new Un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rd,Cd);vn[e]=new Un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){vn[t]=new Un(t,1,!1,t.toLowerCase(),null,!1,!1)});vn.xlinkHref=new Un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){vn[t]=new Un(t,1,!1,t.toLowerCase(),null,!0,!0)});function bd(t,e,n,i){var r=vn.hasOwnProperty(e)?vn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xv(e,n,r,i)&&(n=null),i||r===null?_v(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var dr=mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ta=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Fs=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),Bu=Symbol.for("react.profiler"),l0=Symbol.for("react.provider"),c0=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),Dd=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),u0=Symbol.for("react.offscreen"),Gh=Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=Gh&&t[Gh]||t["@@iterator"],typeof t=="function"?t:null)}var Ht=Object.assign,Pc;function Fo(t){if(Pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pc=e&&e[1]||""}return`
`+Pc+t}var Lc=!1;function Dc(t,e){if(!t||Lc)return"";Lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fo(t):""}function Sv(t){switch(t.tag){case 5:return Fo(t.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return t=Dc(t.type,!1),t;case 11:return t=Dc(t.type.render,!1),t;case 1:return t=Dc(t.type,!0),t;default:return""}}function Gu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fs:return"Fragment";case Us:return"Portal";case Bu:return"Profiler";case Pd:return"StrictMode";case ku:return"Suspense";case zu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case c0:return(t.displayName||"Context")+".Consumer";case l0:return(t._context.displayName||"Context")+".Provider";case Ld:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dd:return e=t.displayName||null,e!==null?e:Gu(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return Gu(t(e))}catch{}}return null}function yv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gu(e);case 8:return e===Pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function f0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mv(t){var e=f0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Aa(t){t._valueTracker||(t._valueTracker=Mv(t))}function d0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=f0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vu(t,e){var n=e.checked;return Ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function h0(t,e){e=e.checked,e!=null&&bd(t,"checked",e,!1)}function Hu(t,e){h0(t,e);var n=Fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wu(t,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wu(t,e,n){(e!=="number"||Dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oo=Array.isArray;function qs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ye(91));return Ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ye(92));if(Oo(n)){if(1<n.length)throw Error(ye(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fr(n)}}function p0(t,e){var n=Fr(e.value),i=Fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Xh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function m0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?m0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ra,g0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ev=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(t){Ev.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vo[e]=Vo[t]})});function _0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vo.hasOwnProperty(t)&&Vo[t]?(""+e).trim():e+"px"}function v0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=_0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var wv=Ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(t,e){if(e){if(wv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ye(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ye(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ye(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ye(62))}}function qu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function Id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ku=null,$s=null,Ks=null;function jh(t){if(t=Sa(t)){if(typeof Ku!="function")throw Error(ye(280));var e=t.stateNode;e&&(e=pc(e),Ku(t.stateNode,t.type,e))}}function x0(t){$s?Ks?Ks.push(t):Ks=[t]:$s=t}function S0(){if($s){var t=$s,e=Ks;if(Ks=$s=null,jh(t),e)for(t=0;t<e.length;t++)jh(e[t])}}function y0(t,e){return t(e)}function M0(){}var Ic=!1;function E0(t,e,n){if(Ic)return t(e,n);Ic=!0;try{return y0(t,e,n)}finally{Ic=!1,($s!==null||Ks!==null)&&(M0(),S0())}}function Jo(t,e){var n=t.stateNode;if(n===null)return null;var i=pc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ye(231,e,typeof n));return n}var Zu=!1;if(or)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Zu=!1}function Tv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var Ho=!1,Il=null,Nl=!1,Qu=null,Av={onError:function(t){Ho=!0,Il=t}};function Rv(t,e,n,i,r,s,o,a,l){Ho=!1,Il=null,Tv.apply(Av,arguments)}function Cv(t,e,n,i,r,s,o,a,l){if(Rv.apply(this,arguments),Ho){if(Ho){var c=Il;Ho=!1,Il=null}else throw Error(ye(198));Nl||(Nl=!0,Qu=c)}}function _s(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function w0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yh(t){if(_s(t)!==t)throw Error(ye(188))}function bv(t){var e=t.alternate;if(!e){if(e=_s(t),e===null)throw Error(ye(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Yh(r),t;if(s===i)return Yh(r),e;s=s.sibling}throw Error(ye(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ye(189))}}if(n.alternate!==i)throw Error(ye(190))}if(n.tag!==3)throw Error(ye(188));return n.stateNode.current===n?t:e}function T0(t){return t=bv(t),t!==null?A0(t):null}function A0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=A0(t);if(e!==null)return e;t=t.sibling}return null}var R0=Qn.unstable_scheduleCallback,qh=Qn.unstable_cancelCallback,Pv=Qn.unstable_shouldYield,Lv=Qn.unstable_requestPaint,Zt=Qn.unstable_now,Dv=Qn.unstable_getCurrentPriorityLevel,Nd=Qn.unstable_ImmediatePriority,C0=Qn.unstable_UserBlockingPriority,Ul=Qn.unstable_NormalPriority,Iv=Qn.unstable_LowPriority,b0=Qn.unstable_IdlePriority,uc=null,Bi=null;function Nv(t){if(Bi&&typeof Bi.onCommitFiberRoot=="function")try{Bi.onCommitFiberRoot(uc,t,void 0,(t.current.flags&128)===128)}catch{}}var Ti=Math.clz32?Math.clz32:Ov,Uv=Math.log,Fv=Math.LN2;function Ov(t){return t>>>=0,t===0?32:31-(Uv(t)/Fv|0)|0}var Ca=64,ba=4194304;function Bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Bo(a):(s&=o,s!==0&&(i=Bo(s)))}else o=n&~r,o!==0?i=Bo(o):s!==0&&(i=Bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ti(e),r=1<<n,i|=t[n],e&=~r;return i}function Bv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ti(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Bv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function P0(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function Nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ti(e),t[e]=n}function zv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ti(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ud(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var At=0;function L0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var D0,Fd,I0,N0,U0,ef=!1,Pa=[],Cr=null,br=null,Pr=null,ea=new Map,ta=new Map,Mr=[],Gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $h(t,e){switch(t){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function Mo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Sa(e),e!==null&&Fd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Vv(t,e,n,i,r){switch(e){case"focusin":return Cr=Mo(Cr,t,e,n,i,r),!0;case"dragenter":return br=Mo(br,t,e,n,i,r),!0;case"mouseover":return Pr=Mo(Pr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ea.set(s,Mo(ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ta.set(s,Mo(ta.get(s)||null,t,e,n,i,r)),!0}return!1}function F0(t){var e=ns(t.target);if(e!==null){var n=_s(e);if(n!==null){if(e=n.tag,e===13){if(e=w0(n),e!==null){t.blockedOn=e,U0(t.priority,function(){I0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$u=i,n.target.dispatchEvent(i),$u=null}else return e=Sa(n),e!==null&&Fd(e),t.blockedOn=n,!1;e.shift()}return!0}function Kh(t,e,n){gl(t)&&n.delete(e)}function Hv(){ef=!1,Cr!==null&&gl(Cr)&&(Cr=null),br!==null&&gl(br)&&(br=null),Pr!==null&&gl(Pr)&&(Pr=null),ea.forEach(Kh),ta.forEach(Kh)}function Eo(t,e){t.blockedOn===e&&(t.blockedOn=null,ef||(ef=!0,Qn.unstable_scheduleCallback(Qn.unstable_NormalPriority,Hv)))}function na(t){function e(r){return Eo(r,t)}if(0<Pa.length){Eo(Pa[0],t);for(var n=1;n<Pa.length;n++){var i=Pa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Cr!==null&&Eo(Cr,t),br!==null&&Eo(br,t),Pr!==null&&Eo(Pr,t),ea.forEach(e),ta.forEach(e),n=0;n<Mr.length;n++)i=Mr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Mr.length&&(n=Mr[0],n.blockedOn===null);)F0(n),n.blockedOn===null&&Mr.shift()}var Zs=dr.ReactCurrentBatchConfig,Ol=!0;function Wv(t,e,n,i){var r=At,s=Zs.transition;Zs.transition=null;try{At=1,Od(t,e,n,i)}finally{At=r,Zs.transition=s}}function Xv(t,e,n,i){var r=At,s=Zs.transition;Zs.transition=null;try{At=4,Od(t,e,n,i)}finally{At=r,Zs.transition=s}}function Od(t,e,n,i){if(Ol){var r=tf(t,e,n,i);if(r===null)Wc(t,e,i,Bl,n),$h(t,i);else if(Vv(r,t,e,n,i))i.stopPropagation();else if($h(t,i),e&4&&-1<Gv.indexOf(t)){for(;r!==null;){var s=Sa(r);if(s!==null&&D0(s),s=tf(t,e,n,i),s===null&&Wc(t,e,i,Bl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wc(t,e,i,null,n)}}var Bl=null;function tf(t,e,n,i){if(Bl=null,t=Id(i),t=ns(t),t!==null)if(e=_s(t),e===null)t=null;else if(n=e.tag,n===13){if(t=w0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bl=t,null}function O0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dv()){case Nd:return 1;case C0:return 4;case Ul:case Iv:return 16;case b0:return 536870912;default:return 16}default:return 16}}var Tr=null,Bd=null,_l=null;function B0(){if(_l)return _l;var t,e=Bd,n=e.length,i,r="value"in Tr?Tr.value:Tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return _l=r.slice(t,1<i?1-i:void 0)}function vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function La(){return!0}function Zh(){return!1}function ei(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?La:Zh,this.isPropagationStopped=Zh,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),e}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kd=ei(mo),xa=Ht({},mo,{view:0,detail:0}),jv=ei(xa),Uc,Fc,wo,fc=Ht({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(Uc=t.screenX-wo.screenX,Fc=t.screenY-wo.screenY):Fc=Uc=0,wo=t),Uc)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),Qh=ei(fc),Yv=Ht({},fc,{dataTransfer:0}),qv=ei(Yv),$v=Ht({},xa,{relatedTarget:0}),Oc=ei($v),Kv=Ht({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),Zv=ei(Kv),Qv=Ht({},mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jv=ei(Qv),ex=Ht({},mo,{data:0}),Jh=ei(ex),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ix[t])?!!e[t]:!1}function zd(){return rx}var sx=Ht({},xa,{key:function(t){if(t.key){var e=tx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ox=ei(sx),ax=Ht({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=ei(ax),lx=Ht({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),cx=ei(lx),ux=Ht({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=ei(ux),dx=Ht({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=ei(dx),px=[9,13,27,32],Gd=or&&"CompositionEvent"in window,Wo=null;or&&"documentMode"in document&&(Wo=document.documentMode);var mx=or&&"TextEvent"in window&&!Wo,k0=or&&(!Gd||Wo&&8<Wo&&11>=Wo),tp=" ",np=!1;function z0(t,e){switch(t){case"keyup":return px.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Os=!1;function gx(t,e){switch(t){case"compositionend":return G0(e);case"keypress":return e.which!==32?null:(np=!0,tp);case"textInput":return t=e.data,t===tp&&np?null:t;default:return null}}function _x(t,e){if(Os)return t==="compositionend"||!Gd&&z0(t,e)?(t=B0(),_l=Bd=Tr=null,Os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return k0&&e.locale!=="ko"?null:e.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vx[t.type]:e==="textarea"}function V0(t,e,n,i){x0(i),e=kl(e,"onChange"),0<e.length&&(n=new kd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Xo=null,ia=null;function xx(t){J0(t,0)}function dc(t){var e=zs(t);if(d0(e))return t}function Sx(t,e){if(t==="change")return e}var H0=!1;if(or){var Bc;if(or){var kc="oninput"in document;if(!kc){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),kc=typeof rp.oninput=="function"}Bc=kc}else Bc=!1;H0=Bc&&(!document.documentMode||9<document.documentMode)}function sp(){Xo&&(Xo.detachEvent("onpropertychange",W0),ia=Xo=null)}function W0(t){if(t.propertyName==="value"&&dc(ia)){var e=[];V0(e,ia,t,Id(t)),E0(xx,e)}}function yx(t,e,n){t==="focusin"?(sp(),Xo=e,ia=n,Xo.attachEvent("onpropertychange",W0)):t==="focusout"&&sp()}function Mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dc(ia)}function Ex(t,e){if(t==="click")return dc(e)}function wx(t,e){if(t==="input"||t==="change")return dc(e)}function Tx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ri=typeof Object.is=="function"?Object.is:Tx;function ra(t,e){if(Ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ou.call(e,r)||!Ri(t[r],e[r]))return!1}return!0}function op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ap(t,e){var n=op(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=op(n)}}function X0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?X0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function j0(){for(var t=window,e=Dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dl(t.document)}return e}function Vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ax(t){var e=j0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&X0(n.ownerDocument.documentElement,n)){if(i!==null&&Vd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ap(n,s);var o=ap(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Rx=or&&"documentMode"in document&&11>=document.documentMode,Bs=null,nf=null,jo=null,rf=!1;function lp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rf||Bs==null||Bs!==Dl(i)||(i=Bs,"selectionStart"in i&&Vd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jo&&ra(jo,i)||(jo=i,i=kl(nf,"onSelect"),0<i.length&&(e=new kd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Bs)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ks={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},zc={},Y0={};or&&(Y0=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function hc(t){if(zc[t])return zc[t];if(!ks[t])return t;var e=ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Y0)return zc[t]=e[n];return t}var q0=hc("animationend"),$0=hc("animationiteration"),K0=hc("animationstart"),Z0=hc("transitionend"),Q0=new Map,cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(t,e){Q0.set(t,e),gs(e,[t])}for(var Gc=0;Gc<cp.length;Gc++){var Vc=cp[Gc],Cx=Vc.toLowerCase(),bx=Vc[0].toUpperCase()+Vc.slice(1);zr(Cx,"on"+bx)}zr(q0,"onAnimationEnd");zr($0,"onAnimationIteration");zr(K0,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(Z0,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function up(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Cv(i,e,void 0,t),t.currentTarget=null}function J0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;up(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;up(r,a,c),s=l}}}if(Nl)throw t=Qu,Nl=!1,Qu=null,t}function Ut(t,e){var n=e[cf];n===void 0&&(n=e[cf]=new Set);var i=t+"__bubble";n.has(i)||(eg(e,t,2,!1),n.add(i))}function Hc(t,e,n){var i=0;e&&(i|=4),eg(n,t,i,e)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[Ia]){t[Ia]=!0,a0.forEach(function(n){n!=="selectionchange"&&(Px.has(n)||Hc(n,!1,t),Hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ia]||(e[Ia]=!0,Hc("selectionchange",!1,e))}}function eg(t,e,n,i){switch(O0(e)){case 1:var r=Wv;break;case 4:r=Xv;break;default:r=Od}n=r.bind(null,e,n,t),r=void 0,!Zu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Wc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ns(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}E0(function(){var c=s,p=Id(n),h=[];e:{var f=Q0.get(t);if(f!==void 0){var g=kd,S=t;switch(t){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":g=ox;break;case"focusin":S="focus",g=Oc;break;case"focusout":S="blur",g=Oc;break;case"beforeblur":case"afterblur":g=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=cx;break;case q0:case $0:case K0:g=Zv;break;case Z0:g=fx;break;case"scroll":g=jv;break;case"wheel":g=hx;break;case"copy":case"cut":case"paste":g=Jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ep}var w=(e&4)!==0,_=!w&&t==="scroll",u=w?f!==null?f+"Capture":null:f;w=[];for(var m=c,v;m!==null;){v=m;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=Jo(m,u),M!=null&&w.push(oa(m,M,v)))),_)break;m=m.return}0<w.length&&(f=new g(f,S,null,n,p),h.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==$u&&(S=n.relatedTarget||n.fromElement)&&(ns(S)||S[ar]))break e;if((g||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,g?(S=n.relatedTarget||n.toElement,g=c,S=S?ns(S):null,S!==null&&(_=_s(S),S!==_||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=c),g!==S)){if(w=Qh,M="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(w=ep,M="onPointerLeave",u="onPointerEnter",m="pointer"),_=g==null?f:zs(g),v=S==null?f:zs(S),f=new w(M,m+"leave",g,n,p),f.target=_,f.relatedTarget=v,M=null,ns(p)===c&&(w=new w(u,m+"enter",S,n,p),w.target=v,w.relatedTarget=_,M=w),_=M,g&&S)t:{for(w=g,u=S,m=0,v=w;v;v=Ss(v))m++;for(v=0,M=u;M;M=Ss(M))v++;for(;0<m-v;)w=Ss(w),m--;for(;0<v-m;)u=Ss(u),v--;for(;m--;){if(w===u||u!==null&&w===u.alternate)break t;w=Ss(w),u=Ss(u)}w=null}else w=null;g!==null&&fp(h,f,g,w,!1),S!==null&&_!==null&&fp(h,_,S,w,!0)}}e:{if(f=c?zs(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var b=Sx;else if(ip(f))if(H0)b=wx;else{b=Mx;var T=yx}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=Ex);if(b&&(b=b(t,c))){V0(h,b,n,p);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Wu(f,"number",f.value)}switch(T=c?zs(c):window,t){case"focusin":(ip(T)||T.contentEditable==="true")&&(Bs=T,nf=c,jo=null);break;case"focusout":jo=nf=Bs=null;break;case"mousedown":rf=!0;break;case"contextmenu":case"mouseup":case"dragend":rf=!1,lp(h,n,p);break;case"selectionchange":if(Rx)break;case"keydown":case"keyup":lp(h,n,p)}var P;if(Gd)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Os?z0(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(k0&&n.locale!=="ko"&&(Os||x!=="onCompositionStart"?x==="onCompositionEnd"&&Os&&(P=B0()):(Tr=p,Bd="value"in Tr?Tr.value:Tr.textContent,Os=!0)),T=kl(c,x),0<T.length&&(x=new Jh(x,t,null,n,p),h.push({event:x,listeners:T}),P?x.data=P:(P=G0(n),P!==null&&(x.data=P)))),(P=mx?gx(t,n):_x(t,n))&&(c=kl(c,"onBeforeInput"),0<c.length&&(p=new Jh("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=P))}J0(h,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Jo(t,n),s!=null&&i.unshift(oa(t,s,r)),s=Jo(t,e),s!=null&&i.push(oa(t,s,r))),t=t.return}return i}function Ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Jo(n,s),l!=null&&o.unshift(oa(n,l,a))):r||(l=Jo(n,s),l!=null&&o.push(oa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Lx=/\r\n?/g,Dx=/\u0000|\uFFFD/g;function dp(t){return(typeof t=="string"?t:""+t).replace(Lx,`
`).replace(Dx,"")}function Na(t,e,n){if(e=dp(e),dp(t)!==e&&n)throw Error(ye(425))}function zl(){}var sf=null,of=null;function af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lf=typeof setTimeout=="function"?setTimeout:void 0,Ix=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,Nx=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(t){return hp.resolve(null).then(t).catch(Ux)}:lf;function Ux(t){setTimeout(function(){throw t})}function Xc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);na(e)}function Lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var go=Math.random().toString(36).slice(2),Ni="__reactFiber$"+go,aa="__reactProps$"+go,ar="__reactContainer$"+go,cf="__reactEvents$"+go,Fx="__reactListeners$"+go,Ox="__reactHandles$"+go;function ns(t){var e=t[Ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ar]||n[Ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pp(t);t!==null;){if(n=t[Ni])return n;t=pp(t)}return e}t=n,n=t.parentNode}return null}function Sa(t){return t=t[Ni]||t[ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ye(33))}function pc(t){return t[aa]||null}var uf=[],Gs=-1;function Gr(t){return{current:t}}function Ft(t){0>Gs||(t.current=uf[Gs],uf[Gs]=null,Gs--)}function Dt(t,e){Gs++,uf[Gs]=t.current,t.current=e}var Or={},An=Gr(Or),zn=Gr(!1),cs=Or;function io(t,e){var n=t.type.contextTypes;if(!n)return Or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Gn(t){return t=t.childContextTypes,t!=null}function Gl(){Ft(zn),Ft(An)}function mp(t,e,n){if(An.current!==Or)throw Error(ye(168));Dt(An,e),Dt(zn,n)}function tg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ye(108,yv(t)||"Unknown",r));return Ht({},n,i)}function Vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,cs=An.current,Dt(An,t),Dt(zn,zn.current),!0}function gp(t,e,n){var i=t.stateNode;if(!i)throw Error(ye(169));n?(t=tg(t,e,cs),i.__reactInternalMemoizedMergedChildContext=t,Ft(zn),Ft(An),Dt(An,t)):Ft(zn),Dt(zn,n)}var Ji=null,mc=!1,jc=!1;function ng(t){Ji===null?Ji=[t]:Ji.push(t)}function Bx(t){mc=!0,ng(t)}function Vr(){if(!jc&&Ji!==null){jc=!0;var t=0,e=At;try{var n=Ji;for(At=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ji=null,mc=!1}catch(r){throw Ji!==null&&(Ji=Ji.slice(t+1)),R0(Nd,Vr),r}finally{At=e,jc=!1}}return null}var Vs=[],Hs=0,Hl=null,Wl=0,ai=[],li=0,us=null,er=1,tr="";function qr(t,e){Vs[Hs++]=Wl,Vs[Hs++]=Hl,Hl=t,Wl=e}function ig(t,e,n){ai[li++]=er,ai[li++]=tr,ai[li++]=us,us=t;var i=er;t=tr;var r=32-Ti(i)-1;i&=~(1<<r),n+=1;var s=32-Ti(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,er=1<<32-Ti(e)+r|n<<r|i,tr=s+t}else er=1<<s|n<<r|i,tr=t}function Hd(t){t.return!==null&&(qr(t,1),ig(t,1,0))}function Wd(t){for(;t===Hl;)Hl=Vs[--Hs],Vs[Hs]=null,Wl=Vs[--Hs],Vs[Hs]=null;for(;t===us;)us=ai[--li],ai[li]=null,tr=ai[--li],ai[li]=null,er=ai[--li],ai[li]=null}var Zn=null,Kn=null,kt=!1,Mi=null;function rg(t,e){var n=ci(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _p(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zn=t,Kn=Lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zn=t,Kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=us!==null?{id:er,overflow:tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ci(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Zn=t,Kn=null,!0):!1;default:return!1}}function ff(t){return(t.mode&1)!==0&&(t.flags&128)===0}function df(t){if(kt){var e=Kn;if(e){var n=e;if(!_p(t,e)){if(ff(t))throw Error(ye(418));e=Lr(n.nextSibling);var i=Zn;e&&_p(t,e)?rg(i,n):(t.flags=t.flags&-4097|2,kt=!1,Zn=t)}}else{if(ff(t))throw Error(ye(418));t.flags=t.flags&-4097|2,kt=!1,Zn=t}}}function vp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zn=t}function Ua(t){if(t!==Zn)return!1;if(!kt)return vp(t),kt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!af(t.type,t.memoizedProps)),e&&(e=Kn)){if(ff(t))throw sg(),Error(ye(418));for(;e;)rg(t,e),e=Lr(e.nextSibling)}if(vp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ye(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kn=Lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kn=null}}else Kn=Zn?Lr(t.stateNode.nextSibling):null;return!0}function sg(){for(var t=Kn;t;)t=Lr(t.nextSibling)}function ro(){Kn=Zn=null,kt=!1}function Xd(t){Mi===null?Mi=[t]:Mi.push(t)}var kx=dr.ReactCurrentBatchConfig;function To(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ye(309));var i=n.stateNode}if(!i)throw Error(ye(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ye(284));if(!n._owner)throw Error(ye(290,t))}return t}function Fa(t,e){throw t=Object.prototype.toString.call(e),Error(ye(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xp(t){var e=t._init;return e(t._payload)}function og(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=Ur(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,v,M){return m===null||m.tag!==6?(m=Jc(v,u.mode,M),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,M){var b=v.type;return b===Fs?p(u,m,v.props.children,M,v.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Sr&&xp(b)===m.type)?(M=r(m,v.props),M.ref=To(u,m,v),M.return=u,M):(M=Tl(v.type,v.key,v.props,null,u.mode,M),M.ref=To(u,m,v),M.return=u,M)}function c(u,m,v,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=eu(v,u.mode,M),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function p(u,m,v,M,b){return m===null||m.tag!==7?(m=ls(v,u.mode,M,b),m.return=u,m):(m=r(m,v),m.return=u,m)}function h(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Jc(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ta:return v=Tl(m.type,m.key,m.props,null,u.mode,v),v.ref=To(u,null,m),v.return=u,v;case Us:return m=eu(m,u.mode,v),m.return=u,m;case Sr:var M=m._init;return h(u,M(m._payload),v)}if(Oo(m)||So(m))return m=ls(m,u.mode,v,null),m.return=u,m;Fa(u,m)}return null}function f(u,m,v,M){var b=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(u,m,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ta:return v.key===b?l(u,m,v,M):null;case Us:return v.key===b?c(u,m,v,M):null;case Sr:return b=v._init,f(u,m,b(v._payload),M)}if(Oo(v)||So(v))return b!==null?null:p(u,m,v,M,null);Fa(u,v)}return null}function g(u,m,v,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,a(m,u,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ta:return u=u.get(M.key===null?v:M.key)||null,l(m,u,M,b);case Us:return u=u.get(M.key===null?v:M.key)||null,c(m,u,M,b);case Sr:var T=M._init;return g(u,m,v,T(M._payload),b)}if(Oo(M)||So(M))return u=u.get(v)||null,p(m,u,M,b,null);Fa(m,M)}return null}function S(u,m,v,M){for(var b=null,T=null,P=m,x=m=0,C=null;P!==null&&x<v.length;x++){P.index>x?(C=P,P=null):C=P.sibling;var I=f(u,P,v[x],M);if(I===null){P===null&&(P=C);break}t&&P&&I.alternate===null&&e(u,P),m=s(I,m,x),T===null?b=I:T.sibling=I,T=I,P=C}if(x===v.length)return n(u,P),kt&&qr(u,x),b;if(P===null){for(;x<v.length;x++)P=h(u,v[x],M),P!==null&&(m=s(P,m,x),T===null?b=P:T.sibling=P,T=P);return kt&&qr(u,x),b}for(P=i(u,P);x<v.length;x++)C=g(P,u,x,v[x],M),C!==null&&(t&&C.alternate!==null&&P.delete(C.key===null?x:C.key),m=s(C,m,x),T===null?b=C:T.sibling=C,T=C);return t&&P.forEach(function(D){return e(u,D)}),kt&&qr(u,x),b}function w(u,m,v,M){var b=So(v);if(typeof b!="function")throw Error(ye(150));if(v=b.call(v),v==null)throw Error(ye(151));for(var T=b=null,P=m,x=m=0,C=null,I=v.next();P!==null&&!I.done;x++,I=v.next()){P.index>x?(C=P,P=null):C=P.sibling;var D=f(u,P,I.value,M);if(D===null){P===null&&(P=C);break}t&&P&&D.alternate===null&&e(u,P),m=s(D,m,x),T===null?b=D:T.sibling=D,T=D,P=C}if(I.done)return n(u,P),kt&&qr(u,x),b;if(P===null){for(;!I.done;x++,I=v.next())I=h(u,I.value,M),I!==null&&(m=s(I,m,x),T===null?b=I:T.sibling=I,T=I);return kt&&qr(u,x),b}for(P=i(u,P);!I.done;x++,I=v.next())I=g(P,u,x,I.value,M),I!==null&&(t&&I.alternate!==null&&P.delete(I.key===null?x:I.key),m=s(I,m,x),T===null?b=I:T.sibling=I,T=I);return t&&P.forEach(function(O){return e(u,O)}),kt&&qr(u,x),b}function _(u,m,v,M){if(typeof v=="object"&&v!==null&&v.type===Fs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ta:e:{for(var b=v.key,T=m;T!==null;){if(T.key===b){if(b=v.type,b===Fs){if(T.tag===7){n(u,T.sibling),m=r(T,v.props.children),m.return=u,u=m;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Sr&&xp(b)===T.type){n(u,T.sibling),m=r(T,v.props),m.ref=To(u,T,v),m.return=u,u=m;break e}n(u,T);break}else e(u,T);T=T.sibling}v.type===Fs?(m=ls(v.props.children,u.mode,M,v.key),m.return=u,u=m):(M=Tl(v.type,v.key,v.props,null,u.mode,M),M.ref=To(u,m,v),M.return=u,u=M)}return o(u);case Us:e:{for(T=v.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=eu(v,u.mode,M),m.return=u,u=m}return o(u);case Sr:return T=v._init,_(u,m,T(v._payload),M)}if(Oo(v))return S(u,m,v,M);if(So(v))return w(u,m,v,M);Fa(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=Jc(v,u.mode,M),m.return=u,u=m),o(u)):n(u,m)}return _}var so=og(!0),ag=og(!1),Xl=Gr(null),jl=null,Ws=null,jd=null;function Yd(){jd=Ws=jl=null}function qd(t){var e=Xl.current;Ft(Xl),t._currentValue=e}function hf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){jl=t,jd=Ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kn=!0),t.firstContext=null)}function fi(t){var e=t._currentValue;if(jd!==t)if(t={context:t,memoizedValue:e,next:null},Ws===null){if(jl===null)throw Error(ye(308));Ws=t,jl.dependencies={lanes:0,firstContext:t}}else Ws=Ws.next=t;return e}var is=null;function $d(t){is===null?is=[t]:is.push(t)}function lg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,$d(e)):(n.next=r.next,r.next=n),e.interleaved=n,lr(t,i)}function lr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function Kd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ir(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,St&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,lr(t,n)}return r=i.interleaved,r===null?(e.next=e,$d(i)):(e.next=r.next,r.next=e),i.interleaved=e,lr(t,n)}function xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ud(t,n)}}function Sp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yl(t,e,n,i){var r=t.updateQueue;yr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==o&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,p=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){p!==null&&(p=p.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,w=a;switch(f=e,g=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){h=S.call(g,h,f);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,f=typeof S=="function"?S.call(g,h,f):S,f==null)break e;h=Ht({},h,f);break e;case 2:yr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=g,l=h):p=p.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(p===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ds|=o,t.lanes=o,t.memoizedState=h}}function yp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ye(191,r));r.call(i)}}}var ya={},ki=Gr(ya),la=Gr(ya),ca=Gr(ya);function rs(t){if(t===ya)throw Error(ye(174));return t}function Zd(t,e){switch(Dt(ca,e),Dt(la,t),Dt(ki,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ju(e,t)}Ft(ki),Dt(ki,e)}function oo(){Ft(ki),Ft(la),Ft(ca)}function ug(t){rs(ca.current);var e=rs(ki.current),n=ju(e,t.type);e!==n&&(Dt(la,t),Dt(ki,n))}function Qd(t){la.current===t&&(Ft(ki),Ft(la))}var Gt=Gr(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yc=[];function Jd(){for(var t=0;t<Yc.length;t++)Yc[t]._workInProgressVersionPrimary=null;Yc.length=0}var Sl=dr.ReactCurrentDispatcher,qc=dr.ReactCurrentBatchConfig,fs=0,Vt=null,nn=null,fn=null,$l=!1,Yo=!1,ua=0,zx=0;function xn(){throw Error(ye(321))}function eh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ri(t[n],e[n]))return!1;return!0}function th(t,e,n,i,r,s){if(fs=s,Vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sl.current=t===null||t.memoizedState===null?Wx:Xx,t=n(i,r),Yo){s=0;do{if(Yo=!1,ua=0,25<=s)throw Error(ye(301));s+=1,fn=nn=null,e.updateQueue=null,Sl.current=jx,t=n(i,r)}while(Yo)}if(Sl.current=Kl,e=nn!==null&&nn.next!==null,fs=0,fn=nn=Vt=null,$l=!1,e)throw Error(ye(300));return t}function nh(){var t=ua!==0;return ua=0,t}function Di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Vt.memoizedState=fn=t:fn=fn.next=t,fn}function di(){if(nn===null){var t=Vt.alternate;t=t!==null?t.memoizedState:null}else t=nn.next;var e=fn===null?Vt.memoizedState:fn.next;if(e!==null)fn=e,nn=t;else{if(t===null)throw Error(ye(310));nn=t,t={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},fn===null?Vt.memoizedState=fn=t:fn=fn.next=t}return fn}function fa(t,e){return typeof e=="function"?e(t):e}function $c(t){var e=di(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=nn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var p=c.lane;if((fs&p)===p)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Vt.lanes|=p,ds|=p}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ri(i,e.memoizedState)||(kn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Vt.lanes|=s,ds|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Kc(t){var e=di(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ri(s,e.memoizedState)||(kn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function fg(){}function dg(t,e){var n=Vt,i=di(),r=e(),s=!Ri(i.memoizedState,r);if(s&&(i.memoizedState=r,kn=!0),i=i.queue,ih(mg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||fn!==null&&fn.memoizedState.tag&1){if(n.flags|=2048,da(9,pg.bind(null,n,i,r,e),void 0,null),dn===null)throw Error(ye(349));fs&30||hg(n,e,r)}return r}function hg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Vt.updateQueue,e===null?(e={lastEffect:null,stores:null},Vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pg(t,e,n,i){e.value=n,e.getSnapshot=i,gg(e)&&_g(t)}function mg(t,e,n){return n(function(){gg(e)&&_g(t)})}function gg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ri(t,n)}catch{return!0}}function _g(t){var e=lr(t,1);e!==null&&Ai(e,t,1,-1)}function Mp(t){var e=Di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},e.queue=t,t=t.dispatch=Hx.bind(null,Vt,t),[e.memoizedState,t]}function da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Vt.updateQueue,e===null?(e={lastEffect:null,stores:null},Vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function vg(){return di().memoizedState}function yl(t,e,n,i){var r=Di();Vt.flags|=t,r.memoizedState=da(1|e,n,void 0,i===void 0?null:i)}function gc(t,e,n,i){var r=di();i=i===void 0?null:i;var s=void 0;if(nn!==null){var o=nn.memoizedState;if(s=o.destroy,i!==null&&eh(i,o.deps)){r.memoizedState=da(e,n,s,i);return}}Vt.flags|=t,r.memoizedState=da(1|e,n,s,i)}function Ep(t,e){return yl(8390656,8,t,e)}function ih(t,e){return gc(2048,8,t,e)}function xg(t,e){return gc(4,2,t,e)}function Sg(t,e){return gc(4,4,t,e)}function yg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mg(t,e,n){return n=n!=null?n.concat([t]):null,gc(4,4,yg.bind(null,e,t),n)}function rh(){}function Eg(t,e){var n=di();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&eh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function wg(t,e){var n=di();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&eh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Tg(t,e,n){return fs&21?(Ri(n,e)||(n=P0(),Vt.lanes|=n,ds|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kn=!0),t.memoizedState=n)}function Gx(t,e){var n=At;At=n!==0&&4>n?n:4,t(!0);var i=qc.transition;qc.transition={};try{t(!1),e()}finally{At=n,qc.transition=i}}function Ag(){return di().memoizedState}function Vx(t,e,n){var i=Nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Rg(t))Cg(e,n);else if(n=lg(t,e,n,i),n!==null){var r=Dn();Ai(n,t,i,r),bg(n,e,i)}}function Hx(t,e,n){var i=Nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rg(t))Cg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ri(a,o)){var l=e.interleaved;l===null?(r.next=r,$d(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=lg(t,e,r,i),n!==null&&(r=Dn(),Ai(n,t,i,r),bg(n,e,i))}}function Rg(t){var e=t.alternate;return t===Vt||e!==null&&e===Vt}function Cg(t,e){Yo=$l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function bg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ud(t,n)}}var Kl={readContext:fi,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},Wx={readContext:fi,useCallback:function(t,e){return Di().memoizedState=[t,e===void 0?null:e],t},useContext:fi,useEffect:Ep,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yl(4194308,4,yg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return yl(4,2,t,e)},useMemo:function(t,e){var n=Di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Vx.bind(null,Vt,t),[i.memoizedState,t]},useRef:function(t){var e=Di();return t={current:t},e.memoizedState=t},useState:Mp,useDebugValue:rh,useDeferredValue:function(t){return Di().memoizedState=t},useTransition:function(){var t=Mp(!1),e=t[0];return t=Gx.bind(null,t[1]),Di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Vt,r=Di();if(kt){if(n===void 0)throw Error(ye(407));n=n()}else{if(n=e(),dn===null)throw Error(ye(349));fs&30||hg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ep(mg.bind(null,i,s,t),[t]),i.flags|=2048,da(9,pg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Di(),e=dn.identifierPrefix;if(kt){var n=tr,i=er;n=(i&~(1<<32-Ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xx={readContext:fi,useCallback:Eg,useContext:fi,useEffect:ih,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:Sg,useMemo:wg,useReducer:$c,useRef:vg,useState:function(){return $c(fa)},useDebugValue:rh,useDeferredValue:function(t){var e=di();return Tg(e,nn.memoizedState,t)},useTransition:function(){var t=$c(fa)[0],e=di().memoizedState;return[t,e]},useMutableSource:fg,useSyncExternalStore:dg,useId:Ag,unstable_isNewReconciler:!1},jx={readContext:fi,useCallback:Eg,useContext:fi,useEffect:ih,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:Sg,useMemo:wg,useReducer:Kc,useRef:vg,useState:function(){return Kc(fa)},useDebugValue:rh,useDeferredValue:function(t){var e=di();return nn===null?e.memoizedState=t:Tg(e,nn.memoizedState,t)},useTransition:function(){var t=Kc(fa)[0],e=di().memoizedState;return[t,e]},useMutableSource:fg,useSyncExternalStore:dg,useId:Ag,unstable_isNewReconciler:!1};function Si(t,e){if(t&&t.defaultProps){e=Ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function pf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _c={isMounted:function(t){return(t=t._reactInternals)?_s(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Dn(),r=Nr(t),s=ir(i,r);s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,r),e!==null&&(Ai(e,t,r,i),xl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Dn(),r=Nr(t),s=ir(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dr(t,s,r),e!==null&&(Ai(e,t,r,i),xl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dn(),i=Nr(t),r=ir(n,i);r.tag=2,e!=null&&(r.callback=e),e=Dr(t,r,i),e!==null&&(Ai(e,t,i,n),xl(e,t,i))}};function wp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,i)||!ra(r,s):!0}function Pg(t,e,n){var i=!1,r=Or,s=e.contextType;return typeof s=="object"&&s!==null?s=fi(s):(r=Gn(e)?cs:An.current,i=e.contextTypes,s=(i=i!=null)?io(t,r):Or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_c,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_c.enqueueReplaceState(e,e.state,null)}function mf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Kd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=fi(s):(s=Gn(e)?cs:An.current,r.context=io(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_c.enqueueReplaceState(r,r.state,null),Yl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ao(t,e){try{var n="",i=e;do n+=Sv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Yx=typeof WeakMap=="function"?WeakMap:Map;function Lg(t,e,n){n=ir(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ql||(Ql=!0,Af=i),gf(t,e)},n}function Dg(t,e,n){n=ir(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){gf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gf(t,e),typeof i!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ap(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Yx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=aS.bind(null,t,e,n),e.then(t,t))}function Rp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ir(-1,1),e.tag=2,Dr(n,e,1))),n.lanes|=1),t)}var qx=dr.ReactCurrentOwner,kn=!1;function Ln(t,e,n,i){e.child=t===null?ag(e,null,n,i):so(e,t.child,n,i)}function bp(t,e,n,i,r){n=n.render;var s=e.ref;return Qs(e,r),i=th(t,e,n,i,s,r),n=nh(),t!==null&&!kn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,cr(t,e,r)):(kt&&n&&Hd(e),e.flags|=1,Ln(t,e,i,r),e.child)}function Pp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!dh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ig(t,e,s,i,r)):(t=Tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,i)&&t.ref===e.ref)return cr(t,e,r)}return e.flags|=1,t=Ur(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ig(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ra(s,i)&&t.ref===e.ref)if(kn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(kn=!0);else return e.lanes=t.lanes,cr(t,e,r)}return _f(t,e,n,i,r)}function Ng(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(js,Yn),Yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Dt(js,Yn),Yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Dt(js,Yn),Yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Dt(js,Yn),Yn|=i;return Ln(t,e,r,n),e.child}function Ug(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _f(t,e,n,i,r){var s=Gn(n)?cs:An.current;return s=io(e,s),Qs(e,r),n=th(t,e,n,i,s,r),i=nh(),t!==null&&!kn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,cr(t,e,r)):(kt&&i&&Hd(e),e.flags|=1,Ln(t,e,n,r),e.child)}function Lp(t,e,n,i,r){if(Gn(n)){var s=!0;Vl(e)}else s=!1;if(Qs(e,r),e.stateNode===null)Ml(t,e),Pg(e,n,i),mf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=fi(c):(c=Gn(n)?cs:An.current,c=io(e,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Tp(e,o,i,c),yr=!1;var f=e.memoizedState;o.state=f,Yl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||zn.current||yr?(typeof p=="function"&&(pf(e,n,p,i),l=e.memoizedState),(a=yr||wp(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,cg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Si(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=fi(l):(l=Gn(n)?cs:An.current,l=io(e,l));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Tp(e,o,i,l),yr=!1,f=e.memoizedState,o.state=f,Yl(e,i,o,r);var S=e.memoizedState;a!==h||f!==S||zn.current||yr?(typeof g=="function"&&(pf(e,n,g,i),S=e.memoizedState),(c=yr||wp(e,n,c,i,f,S,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=S),o.props=i,o.state=S,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return vf(t,e,n,i,s,r)}function vf(t,e,n,i,r,s){Ug(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&gp(e,n,!1),cr(t,e,s);i=e.stateNode,qx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=so(e,t.child,null,s),e.child=so(e,null,a,s)):Ln(t,e,a,s),e.memoizedState=i.state,r&&gp(e,n,!0),e.child}function Fg(t){var e=t.stateNode;e.pendingContext?mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mp(t,e.context,!1),Zd(t,e.containerInfo)}function Dp(t,e,n,i,r){return ro(),Xd(r),e.flags|=256,Ln(t,e,n,i),e.child}var xf={dehydrated:null,treeContext:null,retryLane:0};function Sf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Og(t,e,n){var i=e.pendingProps,r=Gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Dt(Gt,r&1),t===null)return df(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sc(o,i,0,null),t=ls(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sf(n),e.memoizedState=xf,t):sh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return $x(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ur(a,s):(s=ls(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Sf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xf,i}return s=t.child,t=s.sibling,i=Ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function sh(t,e){return e=Sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oa(t,e,n,i){return i!==null&&Xd(i),so(e,t.child,null,n),t=sh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $x(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Zc(Error(ye(422))),Oa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Sc({mode:"visible",children:i.children},r,0,null),s=ls(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&so(e,t.child,null,o),e.child.memoizedState=Sf(o),e.memoizedState=xf,s);if(!(e.mode&1))return Oa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ye(419)),i=Zc(s,i,void 0),Oa(t,e,o,i)}if(a=(o&t.childLanes)!==0,kn||a){if(i=dn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,lr(t,r),Ai(i,t,r,-1))}return fh(),i=Zc(Error(ye(421))),Oa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=lS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Kn=Lr(r.nextSibling),Zn=e,kt=!0,Mi=null,t!==null&&(ai[li++]=er,ai[li++]=tr,ai[li++]=us,er=t.id,tr=t.overflow,us=e),e=sh(e,i.children),e.flags|=4096,e)}function Ip(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hf(t.return,e,n)}function Qc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Bg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ln(t,e,i.children,n),i=Gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ip(t,n,e);else if(t.tag===19)Ip(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Dt(Gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Qc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ql(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Qc(e,!0,n,null,s);break;case"together":Qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ds|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ye(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Kx(t,e,n){switch(e.tag){case 3:Fg(e),ro();break;case 5:ug(e);break;case 1:Gn(e.type)&&Vl(e);break;case 4:Zd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Dt(Xl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Dt(Gt,Gt.current&1),e.flags|=128,null):n&e.child.childLanes?Og(t,e,n):(Dt(Gt,Gt.current&1),t=cr(t,e,n),t!==null?t.sibling:null);Dt(Gt,Gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Bg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Dt(Gt,Gt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ng(t,e,n)}return cr(t,e,n)}var kg,yf,zg,Gg;kg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yf=function(){};zg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,rs(ki.current);var s=null;switch(n){case"input":r=Vu(t,r),i=Vu(t,i),s=[];break;case"select":r=Ht({},r,{value:void 0}),i=Ht({},i,{value:void 0}),s=[];break;case"textarea":r=Xu(t,r),i=Xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=zl)}Yu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Gg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ao(t,e){if(!kt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Zx(t,e,n){var i=e.pendingProps;switch(Wd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(e),null;case 1:return Gn(e.type)&&Gl(),Sn(e),null;case 3:return i=e.stateNode,oo(),Ft(zn),Ft(An),Jd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ua(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mi!==null&&(bf(Mi),Mi=null))),yf(t,e),Sn(e),null;case 5:Qd(e);var r=rs(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)zg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ye(166));return Sn(e),null}if(t=rs(ki.current),Ua(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ni]=e,i[aa]=s,t=(e.mode&1)!==0,n){case"dialog":Ut("cancel",i),Ut("close",i);break;case"iframe":case"object":case"embed":Ut("load",i);break;case"video":case"audio":for(r=0;r<ko.length;r++)Ut(ko[r],i);break;case"source":Ut("error",i);break;case"img":case"image":case"link":Ut("error",i),Ut("load",i);break;case"details":Ut("toggle",i);break;case"input":Vh(i,s),Ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ut("invalid",i);break;case"textarea":Wh(i,s),Ut("invalid",i)}Yu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Na(i.textContent,a,t),r=["children",""+a]):Zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ut("scroll",i)}switch(n){case"input":Aa(i),Hh(i,s,!0);break;case"textarea":Aa(i),Xh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=m0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ni]=e,t[aa]=i,kg(t,e,!1,!1),e.stateNode=t;e:{switch(o=qu(n,i),n){case"dialog":Ut("cancel",t),Ut("close",t),r=i;break;case"iframe":case"object":case"embed":Ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<ko.length;r++)Ut(ko[r],t);r=i;break;case"source":Ut("error",t),r=i;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),r=i;break;case"details":Ut("toggle",t),r=i;break;case"input":Vh(t,i),r=Vu(t,i),Ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ht({},i,{value:void 0}),Ut("invalid",t);break;case"textarea":Wh(t,i),r=Xu(t,i),Ut("invalid",t);break;default:r=i}Yu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?v0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&g0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qo(t,l):typeof l=="number"&&Qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ut("scroll",t):l!=null&&bd(t,s,l,o))}switch(n){case"input":Aa(t),Hh(t,i,!1);break;case"textarea":Aa(t),Xh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?qs(t,!!i.multiple,s,!1):i.defaultValue!=null&&qs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Sn(e),null;case 6:if(t&&e.stateNode!=null)Gg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ye(166));if(n=rs(ca.current),rs(ki.current),Ua(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ni]=e,(s=i.nodeValue!==n)&&(t=Zn,t!==null))switch(t.tag){case 3:Na(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Na(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ni]=e,e.stateNode=i}return Sn(e),null;case 13:if(Ft(Gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&Kn!==null&&e.mode&1&&!(e.flags&128))sg(),ro(),e.flags|=98560,s=!1;else if(s=Ua(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ye(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ye(317));s[Ni]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Sn(e),s=!1}else Mi!==null&&(bf(Mi),Mi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Gt.current&1?rn===0&&(rn=3):fh())),e.updateQueue!==null&&(e.flags|=4),Sn(e),null);case 4:return oo(),yf(t,e),t===null&&sa(e.stateNode.containerInfo),Sn(e),null;case 10:return qd(e.type._context),Sn(e),null;case 17:return Gn(e.type)&&Gl(),Sn(e),null;case 19:if(Ft(Gt),s=e.memoizedState,s===null)return Sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ao(s,!1);else{if(rn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ql(t),o!==null){for(e.flags|=128,Ao(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Dt(Gt,Gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Zt()>lo&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304)}else{if(!i)if(t=ql(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!kt)return Sn(e),null}else 2*Zt()-s.renderingStartTime>lo&&n!==1073741824&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Zt(),e.sibling=null,n=Gt.current,Dt(Gt,i?n&1|2:n&1),e):(Sn(e),null);case 22:case 23:return uh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Yn&1073741824&&(Sn(e),e.subtreeFlags&6&&(e.flags|=8192)):Sn(e),null;case 24:return null;case 25:return null}throw Error(ye(156,e.tag))}function Qx(t,e){switch(Wd(e),e.tag){case 1:return Gn(e.type)&&Gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return oo(),Ft(zn),Ft(An),Jd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qd(e),null;case 13:if(Ft(Gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ye(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ft(Gt),null;case 4:return oo(),null;case 10:return qd(e.type._context),null;case 22:case 23:return uh(),null;case 24:return null;default:return null}}var Ba=!1,En=!1,Jx=typeof WeakSet=="function"?WeakSet:Set,He=null;function Xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){jt(t,e,i)}else n.current=null}function Mf(t,e,n){try{n()}catch(i){jt(t,e,i)}}var Np=!1;function eS(t,e){if(sf=Ol,t=j0(),Vd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,p=0,h=t,f=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++p===i&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(of={focusedElem:t,selectionRange:n},Ol=!1,He=e;He!==null;)if(e=He,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,He=t;else for(;He!==null;){e=He;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,_=S.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?w:Si(e.type,w),_);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ye(163))}}catch(M){jt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,He=t;break}He=e.return}return S=Np,Np=!1,S}function qo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Mf(e,n,s)}r=r.next}while(r!==i)}}function vc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ef(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vg(t){var e=t.alternate;e!==null&&(t.alternate=null,Vg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ni],delete e[aa],delete e[cf],delete e[Fx],delete e[Ox])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hg(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zl));else if(i!==4&&(t=t.child,t!==null))for(wf(t,e,n),t=t.sibling;t!==null;)wf(t,e,n),t=t.sibling}function Tf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Tf(t,e,n),t=t.sibling;t!==null;)Tf(t,e,n),t=t.sibling}var mn=null,yi=!1;function hr(t,e,n){for(n=n.child;n!==null;)Wg(t,e,n),n=n.sibling}function Wg(t,e,n){if(Bi&&typeof Bi.onCommitFiberUnmount=="function")try{Bi.onCommitFiberUnmount(uc,n)}catch{}switch(n.tag){case 5:En||Xs(n,e);case 6:var i=mn,r=yi;mn=null,hr(t,e,n),mn=i,yi=r,mn!==null&&(yi?(t=mn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mn.removeChild(n.stateNode));break;case 18:mn!==null&&(yi?(t=mn,n=n.stateNode,t.nodeType===8?Xc(t.parentNode,n):t.nodeType===1&&Xc(t,n),na(t)):Xc(mn,n.stateNode));break;case 4:i=mn,r=yi,mn=n.stateNode.containerInfo,yi=!0,hr(t,e,n),mn=i,yi=r;break;case 0:case 11:case 14:case 15:if(!En&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Mf(n,e,o),r=r.next}while(r!==i)}hr(t,e,n);break;case 1:if(!En&&(Xs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){jt(n,e,a)}hr(t,e,n);break;case 21:hr(t,e,n);break;case 22:n.mode&1?(En=(i=En)||n.memoizedState!==null,hr(t,e,n),En=i):hr(t,e,n);break;default:hr(t,e,n)}}function Fp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Jx),e.forEach(function(i){var r=cS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function mi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:mn=a.stateNode,yi=!1;break e;case 3:mn=a.stateNode.containerInfo,yi=!0;break e;case 4:mn=a.stateNode.containerInfo,yi=!0;break e}a=a.return}if(mn===null)throw Error(ye(160));Wg(s,o,r),mn=null,yi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){jt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xg(e,t),e=e.sibling}function Xg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mi(e,t),bi(t),i&4){try{qo(3,t,t.return),vc(3,t)}catch(w){jt(t,t.return,w)}try{qo(5,t,t.return)}catch(w){jt(t,t.return,w)}}break;case 1:mi(e,t),bi(t),i&512&&n!==null&&Xs(n,n.return);break;case 5:if(mi(e,t),bi(t),i&512&&n!==null&&Xs(n,n.return),t.flags&32){var r=t.stateNode;try{Qo(r,"")}catch(w){jt(t,t.return,w)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&h0(r,s),qu(a,o);var c=qu(a,s);for(o=0;o<l.length;o+=2){var p=l[o],h=l[o+1];p==="style"?v0(r,h):p==="dangerouslySetInnerHTML"?g0(r,h):p==="children"?Qo(r,h):bd(r,p,h,c)}switch(a){case"input":Hu(r,s);break;case"textarea":p0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?qs(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?qs(r,!!s.multiple,s.defaultValue,!0):qs(r,!!s.multiple,s.multiple?[]:"",!1))}r[aa]=s}catch(w){jt(t,t.return,w)}}break;case 6:if(mi(e,t),bi(t),i&4){if(t.stateNode===null)throw Error(ye(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(w){jt(t,t.return,w)}}break;case 3:if(mi(e,t),bi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(w){jt(t,t.return,w)}break;case 4:mi(e,t),bi(t);break;case 13:mi(e,t),bi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(lh=Zt())),i&4&&Fp(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(En=(c=En)||p,mi(e,t),En=c):mi(e,t),bi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(He=t,p=t.child;p!==null;){for(h=He=p;He!==null;){switch(f=He,g=f.child,f.tag){case 0:case 11:case 14:case 15:qo(4,f,f.return);break;case 1:Xs(f,f.return);var S=f.stateNode;if(typeof S.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(w){jt(i,n,w)}}break;case 5:Xs(f,f.return);break;case 22:if(f.memoizedState!==null){Bp(h);continue}}g!==null?(g.return=f,He=g):Bp(h)}p=p.sibling}e:for(p=null,h=t;;){if(h.tag===5){if(p===null){p=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_0("display",o))}catch(w){jt(t,t.return,w)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){jt(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:mi(e,t),bi(t),i&4&&Fp(t);break;case 21:break;default:mi(e,t),bi(t)}}function bi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hg(n)){var i=n;break e}n=n.return}throw Error(ye(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qo(r,""),i.flags&=-33);var s=Up(t);Tf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Up(t);wf(t,a,o);break;default:throw Error(ye(161))}}catch(l){jt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tS(t,e,n){He=t,jg(t)}function jg(t,e,n){for(var i=(t.mode&1)!==0;He!==null;){var r=He,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ba;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||En;a=Ba;var c=En;if(Ba=o,(En=l)&&!c)for(He=r;He!==null;)o=He,l=o.child,o.tag===22&&o.memoizedState!==null?kp(r):l!==null?(l.return=o,He=l):kp(r);for(;s!==null;)He=s,jg(s),s=s.sibling;He=r,Ba=a,En=c}Op(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,He=s):Op(t)}}function Op(t){for(;He!==null;){var e=He;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:En||vc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!En)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Si(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&na(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ye(163))}En||e.flags&512&&Ef(e)}catch(f){jt(e,e.return,f)}}if(e===t){He=null;break}if(n=e.sibling,n!==null){n.return=e.return,He=n;break}He=e.return}}function Bp(t){for(;He!==null;){var e=He;if(e===t){He=null;break}var n=e.sibling;if(n!==null){n.return=e.return,He=n;break}He=e.return}}function kp(t){for(;He!==null;){var e=He;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vc(4,e)}catch(l){jt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){jt(e,r,l)}}var s=e.return;try{Ef(e)}catch(l){jt(e,s,l)}break;case 5:var o=e.return;try{Ef(e)}catch(l){jt(e,o,l)}}}catch(l){jt(e,e.return,l)}if(e===t){He=null;break}var a=e.sibling;if(a!==null){a.return=e.return,He=a;break}He=e.return}}var nS=Math.ceil,Zl=dr.ReactCurrentDispatcher,oh=dr.ReactCurrentOwner,ui=dr.ReactCurrentBatchConfig,St=0,dn=null,Jt=null,_n=0,Yn=0,js=Gr(0),rn=0,ha=null,ds=0,xc=0,ah=0,$o=null,Bn=null,lh=0,lo=1/0,Qi=null,Ql=!1,Af=null,Ir=null,ka=!1,Ar=null,Jl=0,Ko=0,Rf=null,El=-1,wl=0;function Dn(){return St&6?Zt():El!==-1?El:El=Zt()}function Nr(t){return t.mode&1?St&2&&_n!==0?_n&-_n:kx.transition!==null?(wl===0&&(wl=P0()),wl):(t=At,t!==0||(t=window.event,t=t===void 0?16:O0(t.type)),t):1}function Ai(t,e,n,i){if(50<Ko)throw Ko=0,Rf=null,Error(ye(185));va(t,n,i),(!(St&2)||t!==dn)&&(t===dn&&(!(St&2)&&(xc|=n),rn===4&&Er(t,_n)),Vn(t,i),n===1&&St===0&&!(e.mode&1)&&(lo=Zt()+500,mc&&Vr()))}function Vn(t,e){var n=t.callbackNode;kv(t,e);var i=Fl(t,t===dn?_n:0);if(i===0)n!==null&&qh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qh(n),e===1)t.tag===0?Bx(zp.bind(null,t)):ng(zp.bind(null,t)),Nx(function(){!(St&6)&&Vr()}),n=null;else{switch(L0(i)){case 1:n=Nd;break;case 4:n=C0;break;case 16:n=Ul;break;case 536870912:n=b0;break;default:n=Ul}n=e_(n,Yg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yg(t,e){if(El=-1,wl=0,St&6)throw Error(ye(327));var n=t.callbackNode;if(Js()&&t.callbackNode!==n)return null;var i=Fl(t,t===dn?_n:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ec(t,i);else{e=i;var r=St;St|=2;var s=$g();(dn!==t||_n!==e)&&(Qi=null,lo=Zt()+500,as(t,e));do try{sS();break}catch(a){qg(t,a)}while(!0);Yd(),Zl.current=s,St=r,Jt!==null?e=0:(dn=null,_n=0,e=rn)}if(e!==0){if(e===2&&(r=Ju(t),r!==0&&(i=r,e=Cf(t,r))),e===1)throw n=ha,as(t,0),Er(t,i),Vn(t,Zt()),n;if(e===6)Er(t,i);else{if(r=t.current.alternate,!(i&30)&&!iS(r)&&(e=ec(t,i),e===2&&(s=Ju(t),s!==0&&(i=s,e=Cf(t,s))),e===1))throw n=ha,as(t,0),Er(t,i),Vn(t,Zt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ye(345));case 2:$r(t,Bn,Qi);break;case 3:if(Er(t,i),(i&130023424)===i&&(e=lh+500-Zt(),10<e)){if(Fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=lf($r.bind(null,t,Bn,Qi),e);break}$r(t,Bn,Qi);break;case 4:if(Er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ti(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Zt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nS(i/1960))-i,10<i){t.timeoutHandle=lf($r.bind(null,t,Bn,Qi),i);break}$r(t,Bn,Qi);break;case 5:$r(t,Bn,Qi);break;default:throw Error(ye(329))}}}return Vn(t,Zt()),t.callbackNode===n?Yg.bind(null,t):null}function Cf(t,e){var n=$o;return t.current.memoizedState.isDehydrated&&(as(t,e).flags|=256),t=ec(t,e),t!==2&&(e=Bn,Bn=n,e!==null&&bf(e)),t}function bf(t){Bn===null?Bn=t:Bn.push.apply(Bn,t)}function iS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~ah,e&=~xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ti(e),i=1<<n;t[n]=-1,e&=~i}}function zp(t){if(St&6)throw Error(ye(327));Js();var e=Fl(t,0);if(!(e&1))return Vn(t,Zt()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var i=Ju(t);i!==0&&(e=i,n=Cf(t,i))}if(n===1)throw n=ha,as(t,0),Er(t,e),Vn(t,Zt()),n;if(n===6)throw Error(ye(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$r(t,Bn,Qi),Vn(t,Zt()),null}function ch(t,e){var n=St;St|=1;try{return t(e)}finally{St=n,St===0&&(lo=Zt()+500,mc&&Vr())}}function hs(t){Ar!==null&&Ar.tag===0&&!(St&6)&&Js();var e=St;St|=1;var n=ui.transition,i=At;try{if(ui.transition=null,At=1,t)return t()}finally{At=i,ui.transition=n,St=e,!(St&6)&&Vr()}}function uh(){Yn=js.current,Ft(js)}function as(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ix(n)),Jt!==null)for(n=Jt.return;n!==null;){var i=n;switch(Wd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gl();break;case 3:oo(),Ft(zn),Ft(An),Jd();break;case 5:Qd(i);break;case 4:oo();break;case 13:Ft(Gt);break;case 19:Ft(Gt);break;case 10:qd(i.type._context);break;case 22:case 23:uh()}n=n.return}if(dn=t,Jt=t=Ur(t.current,null),_n=Yn=e,rn=0,ha=null,ah=xc=ds=0,Bn=$o=null,is!==null){for(e=0;e<is.length;e++)if(n=is[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}is=null}return t}function qg(t,e){do{var n=Jt;try{if(Yd(),Sl.current=Kl,$l){for(var i=Vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$l=!1}if(fs=0,fn=nn=Vt=null,Yo=!1,ua=0,oh.current=null,n===null||n.return===null){rn=1,ha=e,Jt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=_n,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,p=a,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=Rp(o);if(g!==null){g.flags&=-257,Cp(g,o,a,s,e),g.mode&1&&Ap(s,c,e),e=g,l=c;var S=e.updateQueue;if(S===null){var w=new Set;w.add(l),e.updateQueue=w}else S.add(l);break e}else{if(!(e&1)){Ap(s,c,e),fh();break e}l=Error(ye(426))}}else if(kt&&a.mode&1){var _=Rp(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Cp(_,o,a,s,e),Xd(ao(l,a));break e}}s=l=ao(l,a),rn!==4&&(rn=2),$o===null?$o=[s]:$o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Lg(s,l,e);Sp(s,u);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ir===null||!Ir.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Dg(s,a,e);Sp(s,M);break e}}s=s.return}while(s!==null)}Zg(n)}catch(b){e=b,Jt===n&&n!==null&&(Jt=n=n.return);continue}break}while(!0)}function $g(){var t=Zl.current;return Zl.current=Kl,t===null?Kl:t}function fh(){(rn===0||rn===3||rn===2)&&(rn=4),dn===null||!(ds&268435455)&&!(xc&268435455)||Er(dn,_n)}function ec(t,e){var n=St;St|=2;var i=$g();(dn!==t||_n!==e)&&(Qi=null,as(t,e));do try{rS();break}catch(r){qg(t,r)}while(!0);if(Yd(),St=n,Zl.current=i,Jt!==null)throw Error(ye(261));return dn=null,_n=0,rn}function rS(){for(;Jt!==null;)Kg(Jt)}function sS(){for(;Jt!==null&&!Pv();)Kg(Jt)}function Kg(t){var e=Jg(t.alternate,t,Yn);t.memoizedProps=t.pendingProps,e===null?Zg(t):Jt=e,oh.current=null}function Zg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Qx(n,e),n!==null){n.flags&=32767,Jt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rn=6,Jt=null;return}}else if(n=Zx(n,e,Yn),n!==null){Jt=n;return}if(e=e.sibling,e!==null){Jt=e;return}Jt=e=t}while(e!==null);rn===0&&(rn=5)}function $r(t,e,n){var i=At,r=ui.transition;try{ui.transition=null,At=1,oS(t,e,n,i)}finally{ui.transition=r,At=i}return null}function oS(t,e,n,i){do Js();while(Ar!==null);if(St&6)throw Error(ye(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ye(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zv(t,s),t===dn&&(Jt=dn=null,_n=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ka||(ka=!0,e_(Ul,function(){return Js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ui.transition,ui.transition=null;var o=At;At=1;var a=St;St|=4,oh.current=null,eS(t,n),Xg(n,t),Ax(of),Ol=!!sf,of=sf=null,t.current=n,tS(n),Lv(),St=a,At=o,ui.transition=s}else t.current=n;if(ka&&(ka=!1,Ar=t,Jl=r),s=t.pendingLanes,s===0&&(Ir=null),Nv(n.stateNode),Vn(t,Zt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ql)throw Ql=!1,t=Af,Af=null,t;return Jl&1&&t.tag!==0&&Js(),s=t.pendingLanes,s&1?t===Rf?Ko++:(Ko=0,Rf=t):Ko=0,Vr(),null}function Js(){if(Ar!==null){var t=L0(Jl),e=ui.transition,n=At;try{if(ui.transition=null,At=16>t?16:t,Ar===null)var i=!1;else{if(t=Ar,Ar=null,Jl=0,St&6)throw Error(ye(331));var r=St;for(St|=4,He=t.current;He!==null;){var s=He,o=s.child;if(He.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(He=c;He!==null;){var p=He;switch(p.tag){case 0:case 11:case 15:qo(8,p,s)}var h=p.child;if(h!==null)h.return=p,He=h;else for(;He!==null;){p=He;var f=p.sibling,g=p.return;if(Vg(p),p===c){He=null;break}if(f!==null){f.return=g,He=f;break}He=g}}}var S=s.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}He=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,He=o;else e:for(;He!==null;){if(s=He,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,He=u;break e}He=s.return}}var m=t.current;for(He=m;He!==null;){o=He;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,He=v;else e:for(o=m;He!==null;){if(a=He,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vc(9,a)}}catch(b){jt(a,a.return,b)}if(a===o){He=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,He=M;break e}He=a.return}}if(St=r,Vr(),Bi&&typeof Bi.onPostCommitFiberRoot=="function")try{Bi.onPostCommitFiberRoot(uc,t)}catch{}i=!0}return i}finally{At=n,ui.transition=e}}return!1}function Gp(t,e,n){e=ao(n,e),e=Lg(t,e,1),t=Dr(t,e,1),e=Dn(),t!==null&&(va(t,1,e),Vn(t,e))}function jt(t,e,n){if(t.tag===3)Gp(t,t,n);else for(;e!==null;){if(e.tag===3){Gp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ir===null||!Ir.has(i))){t=ao(n,t),t=Dg(e,t,1),e=Dr(e,t,1),t=Dn(),e!==null&&(va(e,1,t),Vn(e,t));break}}e=e.return}}function aS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Dn(),t.pingedLanes|=t.suspendedLanes&n,dn===t&&(_n&n)===n&&(rn===4||rn===3&&(_n&130023424)===_n&&500>Zt()-lh?as(t,0):ah|=n),Vn(t,e)}function Qg(t,e){e===0&&(t.mode&1?(e=ba,ba<<=1,!(ba&130023424)&&(ba=4194304)):e=1);var n=Dn();t=lr(t,e),t!==null&&(va(t,e,n),Vn(t,n))}function lS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qg(t,n)}function cS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ye(314))}i!==null&&i.delete(e),Qg(t,n)}var Jg;Jg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zn.current)kn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kn=!1,Kx(t,e,n);kn=!!(t.flags&131072)}else kn=!1,kt&&e.flags&1048576&&ig(e,Wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ml(t,e),t=e.pendingProps;var r=io(e,An.current);Qs(e,n),r=th(null,e,i,t,r,n);var s=nh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Gn(i)?(s=!0,Vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Kd(e),r.updater=_c,e.stateNode=r,r._reactInternals=e,mf(e,i,t,n),e=vf(null,e,i,!0,s,n)):(e.tag=0,kt&&s&&Hd(e),Ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=fS(i),t=Si(i,t),r){case 0:e=_f(null,e,i,t,n);break e;case 1:e=Lp(null,e,i,t,n);break e;case 11:e=bp(null,e,i,t,n);break e;case 14:e=Pp(null,e,i,Si(i.type,t),n);break e}throw Error(ye(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),_f(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),Lp(t,e,i,r,n);case 3:e:{if(Fg(e),t===null)throw Error(ye(387));i=e.pendingProps,s=e.memoizedState,r=s.element,cg(t,e),Yl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ao(Error(ye(423)),e),e=Dp(t,e,i,n,r);break e}else if(i!==r){r=ao(Error(ye(424)),e),e=Dp(t,e,i,n,r);break e}else for(Kn=Lr(e.stateNode.containerInfo.firstChild),Zn=e,kt=!0,Mi=null,n=ag(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),i===r){e=cr(t,e,n);break e}Ln(t,e,i,n)}e=e.child}return e;case 5:return ug(e),t===null&&df(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,af(i,r)?o=null:s!==null&&af(i,s)&&(e.flags|=32),Ug(t,e),Ln(t,e,o,n),e.child;case 6:return t===null&&df(e),null;case 13:return Og(t,e,n);case 4:return Zd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=so(e,null,i,n):Ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),bp(t,e,i,r,n);case 7:return Ln(t,e,e.pendingProps,n),e.child;case 8:return Ln(t,e,e.pendingProps.children,n),e.child;case 12:return Ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Dt(Xl,i._currentValue),i._currentValue=o,s!==null)if(Ri(s.value,o)){if(s.children===r.children&&!zn.current){e=cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ir(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?l.next=l:(l.next=p.next,p.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ye(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qs(e,n),r=fi(r),i=i(r),e.flags|=1,Ln(t,e,i,n),e.child;case 14:return i=e.type,r=Si(i,e.pendingProps),r=Si(i.type,r),Pp(t,e,i,r,n);case 15:return Ig(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Si(i,r),Ml(t,e),e.tag=1,Gn(i)?(t=!0,Vl(e)):t=!1,Qs(e,n),Pg(e,i,r),mf(e,i,r,n),vf(null,e,i,!0,t,n);case 19:return Bg(t,e,n);case 22:return Ng(t,e,n)}throw Error(ye(156,e.tag))};function e_(t,e){return R0(t,e)}function uS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,e,n,i){return new uS(t,e,n,i)}function dh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fS(t){if(typeof t=="function")return dh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ld)return 11;if(t===Dd)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=ci(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")dh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fs:return ls(n.children,r,s,e);case Pd:o=8,r|=8;break;case Bu:return t=ci(12,n,e,r|2),t.elementType=Bu,t.lanes=s,t;case ku:return t=ci(13,n,e,r),t.elementType=ku,t.lanes=s,t;case zu:return t=ci(19,n,e,r),t.elementType=zu,t.lanes=s,t;case u0:return Sc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case l0:o=10;break e;case c0:o=9;break e;case Ld:o=11;break e;case Dd:o=14;break e;case Sr:o=16,i=null;break e}throw Error(ye(130,t==null?t:typeof t,""))}return e=ci(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ls(t,e,n,i){return t=ci(7,t,i,e),t.lanes=n,t}function Sc(t,e,n,i){return t=ci(22,t,i,e),t.elementType=u0,t.lanes=n,t.stateNode={isHidden:!1},t}function Jc(t,e,n){return t=ci(6,t,null,e),t.lanes=n,t}function eu(t,e,n){return e=ci(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nc(0),this.expirationTimes=Nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hh(t,e,n,i,r,s,o,a,l){return t=new dS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ci(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kd(s),t}function hS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function t_(t){if(!t)return Or;t=t._reactInternals;e:{if(_s(t)!==t||t.tag!==1)throw Error(ye(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ye(171))}if(t.tag===1){var n=t.type;if(Gn(n))return tg(t,n,e)}return e}function n_(t,e,n,i,r,s,o,a,l){return t=hh(n,i,!0,t,r,s,o,a,l),t.context=t_(null),n=t.current,i=Dn(),r=Nr(n),s=ir(i,r),s.callback=e??null,Dr(n,s,r),t.current.lanes=r,va(t,r,i),Vn(t,i),t}function yc(t,e,n,i){var r=e.current,s=Dn(),o=Nr(r);return n=t_(n),e.context===null?e.context=n:e.pendingContext=n,e=ir(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Dr(r,e,o),t!==null&&(Ai(t,r,o,s),xl(t,r,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ph(t,e){Vp(t,e),(t=t.alternate)&&Vp(t,e)}function pS(){return null}var i_=typeof reportError=="function"?reportError:function(t){console.error(t)};function mh(t){this._internalRoot=t}Mc.prototype.render=mh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ye(409));yc(t,e,null,null)};Mc.prototype.unmount=mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hs(function(){yc(null,t,null,null)}),e[ar]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=N0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mr.length&&e!==0&&e<Mr[n].priority;n++);Mr.splice(n,0,t),n===0&&F0(t)}};function gh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function mS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tc(o);s.call(c)}}var o=n_(e,i,t,0,null,!1,!1,"",Hp);return t._reactRootContainer=o,t[ar]=o.current,sa(t.nodeType===8?t.parentNode:t),hs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tc(l);a.call(c)}}var l=hh(t,0,!1,null,null,!1,!1,"",Hp);return t._reactRootContainer=l,t[ar]=l.current,sa(t.nodeType===8?t.parentNode:t),hs(function(){yc(e,l,n,i)}),l}function wc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tc(o);a.call(l)}}yc(e,o,t,r)}else o=mS(n,e,t,r,i);return tc(o)}D0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bo(e.pendingLanes);n!==0&&(Ud(e,n|1),Vn(e,Zt()),!(St&6)&&(lo=Zt()+500,Vr()))}break;case 13:hs(function(){var i=lr(t,1);if(i!==null){var r=Dn();Ai(i,t,1,r)}}),ph(t,1)}};Fd=function(t){if(t.tag===13){var e=lr(t,134217728);if(e!==null){var n=Dn();Ai(e,t,134217728,n)}ph(t,134217728)}};I0=function(t){if(t.tag===13){var e=Nr(t),n=lr(t,e);if(n!==null){var i=Dn();Ai(n,t,e,i)}ph(t,e)}};N0=function(){return At};U0=function(t,e){var n=At;try{return At=t,e()}finally{At=n}};Ku=function(t,e,n){switch(e){case"input":if(Hu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=pc(i);if(!r)throw Error(ye(90));d0(i),Hu(i,r)}}}break;case"textarea":p0(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};y0=ch;M0=hs;var gS={usingClientEntryPoint:!1,Events:[Sa,zs,pc,x0,S0,ch]},Ro={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_S={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=T0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||pS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{uc=za.inject(_S),Bi=za}catch{}}Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gS;Jn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gh(e))throw Error(ye(200));return hS(t,e,null,n)};Jn.createRoot=function(t,e){if(!gh(t))throw Error(ye(299));var n=!1,i="",r=i_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hh(t,1,!1,null,null,n,!1,i,r),t[ar]=e.current,sa(t.nodeType===8?t.parentNode:t),new mh(e)};Jn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ye(188)):(t=Object.keys(t).join(","),Error(ye(268,t)));return t=T0(e),t=t===null?null:t.stateNode,t};Jn.flushSync=function(t){return hs(t)};Jn.hydrate=function(t,e,n){if(!Ec(e))throw Error(ye(200));return wc(null,t,e,!0,n)};Jn.hydrateRoot=function(t,e,n){if(!gh(t))throw Error(ye(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=i_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=n_(e,null,t,1,n??null,r,!1,s,o),t[ar]=e.current,sa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Mc(e)};Jn.render=function(t,e,n){if(!Ec(e))throw Error(ye(200));return wc(null,t,e,!1,n)};Jn.unmountComponentAtNode=function(t){if(!Ec(t))throw Error(ye(40));return t._reactRootContainer?(hs(function(){wc(null,null,t,!1,function(){t._reactRootContainer=null,t[ar]=null})}),!0):!1};Jn.unstable_batchedUpdates=ch;Jn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ec(n))throw Error(ye(200));if(t==null||t._reactInternals===void 0)throw Error(ye(38));return wc(t,e,n,!1,i)};Jn.version="18.3.1-next-f1338f8080-20240426";function r_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r_)}catch(t){console.error(t)}}r_(),r0.exports=Jn;var vS=r0.exports,Wp=vS;Fu.createRoot=Wp.createRoot,Fu.hydrateRoot=Wp.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _h="184",xS=0,Xp=1,SS=2,Al=1,s_=2,zo=3,Br=0,Hn=1,Ui=2,rr=0,eo=1,Qr=2,jp=3,Yp=4,yS=5,Jr=100,MS=101,ES=102,wS=103,TS=104,AS=200,RS=201,CS=202,bS=203,Pf=204,Lf=205,PS=206,LS=207,DS=208,IS=209,NS=210,US=211,FS=212,OS=213,BS=214,Df=0,If=1,Nf=2,co=3,Uf=4,Ff=5,Of=6,Bf=7,o_=0,kS=1,zS=2,zi=0,a_=1,vh=2,l_=3,c_=4,u_=5,f_=6,d_=7,h_=300,ps=301,uo=302,tu=303,nu=304,Tc=306,kf=1e3,nr=1001,zf=1002,gn=1003,GS=1004,Ga=1005,wn=1006,iu=1007,ss=1008,$n=1009,p_=1010,m_=1011,pa=1012,xh=1013,Hi=1014,Fi=1015,ur=1016,Sh=1017,yh=1018,ma=1020,g_=35902,__=35899,v_=1021,x_=1022,wi=1023,fr=1026,os=1027,S_=1028,Mh=1029,ms=1030,Eh=1031,wh=1033,Rl=33776,Cl=33777,bl=33778,Pl=33779,Gf=35840,Vf=35841,Hf=35842,Wf=35843,Xf=36196,jf=37492,Yf=37496,qf=37488,$f=37489,nc=37490,Kf=37491,Zf=37808,Qf=37809,Jf=37810,ed=37811,td=37812,nd=37813,id=37814,rd=37815,sd=37816,od=37817,ad=37818,ld=37819,cd=37820,ud=37821,fd=36492,dd=36494,hd=36495,pd=36283,md=36284,ic=36285,gd=36286,VS=3200,_d=0,HS=1,wr="",oi="srgb",rc="srgb-linear",sc="linear",Tt="srgb",ys=7680,qp=519,WS=512,XS=513,jS=514,Th=515,YS=516,qS=517,Ah=518,$S=519,$p=35044,Kp="300 es",Oi=2e3,ga=2001;function KS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function oc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ZS(){const t=oc("canvas");return t.style.display="block",t}const Zp={};function Qp(...t){const e="THREE."+t.shift();console.log(e,...t)}function y_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Qe(...t){t=y_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function xt(...t){t=y_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function vd(...t){const e=t.join(" ");e in Zp||(Zp[e]=!0,Qe(...t))}function QS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const JS={[Df]:If,[Nf]:Of,[Uf]:Bf,[co]:Ff,[If]:Df,[Of]:Nf,[Bf]:Uf,[Ff]:co};class vs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=Math.PI/180,xd=180/Math.PI;function Ma(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[t&255]+yn[t>>8&255]+yn[t>>16&255]+yn[t>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function ht(t,e,n){return Math.max(e,Math.min(n,t))}function ey(t,e){return(t%e+e)%e}function su(t,e,n){return(1-n)*t+n*e}function Co(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function On(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Lh=class Lh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lh.prototype.isVector2=!0;let pt=Lh;class _o{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],p=i[r+2],h=i[r+3],f=s[o+0],g=s[o+1],S=s[o+2],w=s[o+3];if(h!==w||l!==f||c!==g||p!==S){let _=l*f+c*g+p*S+h*w;_<0&&(f=-f,g=-g,S=-S,w=-w,_=-_);let u=1-a;if(_<.9995){const m=Math.acos(_),v=Math.sin(m);u=Math.sin(u*m)/v,a=Math.sin(a*m)/v,l=l*u+f*a,c=c*u+g*a,p=p*u+S*a,h=h*u+w*a}else{l=l*u+f*a,c=c*u+g*a,p=p*u+S*a,h=h*u+w*a;const m=1/Math.sqrt(l*l+c*c+p*p+h*h);l*=m,c*=m,p*=m,h*=m}}e[n]=l,e[n+1]=c,e[n+2]=p,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],p=i[r+3],h=s[o],f=s[o+1],g=s[o+2],S=s[o+3];return e[n]=a*S+p*h+l*g-c*f,e[n+1]=l*S+p*f+c*h-a*g,e[n+2]=c*S+p*g+a*f-l*h,e[n+3]=p*S-a*h-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),p=a(r/2),h=a(s/2),f=l(i/2),g=l(r/2),S=l(s/2);switch(o){case"XYZ":this._x=f*p*h+c*g*S,this._y=c*g*h-f*p*S,this._z=c*p*S+f*g*h,this._w=c*p*h-f*g*S;break;case"YXZ":this._x=f*p*h+c*g*S,this._y=c*g*h-f*p*S,this._z=c*p*S-f*g*h,this._w=c*p*h+f*g*S;break;case"ZXY":this._x=f*p*h-c*g*S,this._y=c*g*h+f*p*S,this._z=c*p*S+f*g*h,this._w=c*p*h-f*g*S;break;case"ZYX":this._x=f*p*h-c*g*S,this._y=c*g*h+f*p*S,this._z=c*p*S-f*g*h,this._w=c*p*h+f*g*S;break;case"YZX":this._x=f*p*h+c*g*S,this._y=c*g*h+f*p*S,this._z=c*p*S-f*g*h,this._w=c*p*h-f*g*S;break;case"XZY":this._x=f*p*h-c*g*S,this._y=c*g*h-f*p*S,this._z=c*p*S+f*g*h,this._w=c*p*h+f*g*S;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],p=n[6],h=n[10],f=i+a+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(p-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(p-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+p)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,p=n._w;return this._x=i*p+o*a+r*c-s*l,this._y=r*p+o*l+s*a-i*c,this._z=s*p+o*c+i*l-r*a,this._w=o*p-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),p=Math.sin(c);l=Math.sin(l*c)/p,n=Math.sin(n*c)/p,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Dh=class Dh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),p=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*p,this.y=i+l*p+a*c-s*h,this.z=r+l*h+s*p-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ou.copy(this).projectOnVector(e),this.sub(ou)}reflect(e){return this.sub(ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dh.prototype.isVector3=!0;let V=Dh;const ou=new V,Jp=new _o,Ih=class Ih{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const p=this.elements;return p[0]=e,p[1]=r,p[2]=a,p[3]=n,p[4]=s,p[5]=l,p[6]=i,p[7]=o,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],p=i[4],h=i[7],f=i[2],g=i[5],S=i[8],w=r[0],_=r[3],u=r[6],m=r[1],v=r[4],M=r[7],b=r[2],T=r[5],P=r[8];return s[0]=o*w+a*m+l*b,s[3]=o*_+a*v+l*T,s[6]=o*u+a*M+l*P,s[1]=c*w+p*m+h*b,s[4]=c*_+p*v+h*T,s[7]=c*u+p*M+h*P,s[2]=f*w+g*m+S*b,s[5]=f*_+g*v+S*T,s[8]=f*u+g*M+S*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],p=e[8];return n*o*p-n*a*c-i*s*p+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],p=e[8],h=p*o-a*c,f=a*l-p*s,g=c*s-o*l,S=n*h+i*f+r*g;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/S;return e[0]=h*w,e[1]=(r*c-p*i)*w,e[2]=(a*i-r*o)*w,e[3]=f*w,e[4]=(p*n-r*l)*w,e[5]=(r*s-a*n)*w,e[6]=g*w,e[7]=(i*l-c*n)*w,e[8]=(o*n-i*s)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(au.makeScale(e,n)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,n){return this.premultiply(au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ih.prototype.isMatrix3=!0;let it=Ih;const au=new it,em=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tm=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ty(){const t={enabled:!0,workingColorSpace:rc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Tt&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(r.r=to(r.r),r.g=to(r.g),r.b=to(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wr?sc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[rc]:{primaries:e,whitePoint:i,transfer:sc,toXYZ:em,fromXYZ:tm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:em,fromXYZ:tm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),t}const dt=ty();function sr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function to(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ms;class ny{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ms===void 0&&(Ms=oc("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ms}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=oc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=sr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(sr(n[i]/255)*255):n[i]=sr(n[i]);return{data:n,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iy=0;class Rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Ma(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lu(r[o].image)):s.push(lu(r[o]))}else s=lu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ny.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let ry=0;const cu=new V;class Tn extends vs{constructor(e=Tn.DEFAULT_IMAGE,n=Tn.DEFAULT_MAPPING,i=nr,r=nr,s=wn,o=ss,a=wi,l=$n,c=Tn.DEFAULT_ANISOTROPY,p=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Ma(),this.name="",this.source=new Rh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cu).x}get height(){return this.source.getSize(cu).y}get depth(){return this.source.getSize(cu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Qe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Qe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kf:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kf:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=h_;Tn.DEFAULT_ANISOTROPY=1;const Nh=class Nh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],p=l[4],h=l[8],f=l[1],g=l[5],S=l[9],w=l[2],_=l[6],u=l[10];if(Math.abs(p-f)<.01&&Math.abs(h-w)<.01&&Math.abs(S-_)<.01){if(Math.abs(p+f)<.1&&Math.abs(h+w)<.1&&Math.abs(S+_)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(g+1)/2,b=(u+1)/2,T=(p+f)/4,P=(h+w)/4,x=(S+_)/4;return v>M&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=P/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=x/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=P/s,r=x/s),this.set(i,r,s,n),this}let m=Math.sqrt((_-S)*(_-S)+(h-w)*(h-w)+(f-p)*(f-p));return Math.abs(m)<.001&&(m=1),this.x=(_-S)/m,this.y=(h-w)/m,this.z=(f-p)/m,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ht(this.x,e.x,n.x),this.y=ht(this.y,e.y,n.y),this.z=ht(this.z,e.z,n.z),this.w=ht(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ht(this.x,e,n),this.y=ht(this.y,e,n),this.z=ht(this.z,e,n),this.w=ht(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nh.prototype.isVector4=!0;let Yt=Nh;class sy extends vs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Yt(0,0,e,n),this.scissorTest=!1,this.viewport=new Yt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Tn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Rh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends sy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class M_ extends Tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oy extends Tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lc=class lc{constructor(e,n,i,r,s,o,a,l,c,p,h,f,g,S,w,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,p,h,f,g,S,w,_)}set(e,n,i,r,s,o,a,l,c,p,h,f,g,S,w,_){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=p,u[10]=h,u[14]=f,u[3]=g,u[7]=S,u[11]=w,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),p=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*p,g=o*h,S=a*p,w=a*h;n[0]=l*p,n[4]=-l*h,n[8]=c,n[1]=g+S*c,n[5]=f-w*c,n[9]=-a*l,n[2]=w-f*c,n[6]=S+g*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*p,g=l*h,S=c*p,w=c*h;n[0]=f+w*a,n[4]=S*a-g,n[8]=o*c,n[1]=o*h,n[5]=o*p,n[9]=-a,n[2]=g*a-S,n[6]=w+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*p,g=l*h,S=c*p,w=c*h;n[0]=f-w*a,n[4]=-o*h,n[8]=S+g*a,n[1]=g+S*a,n[5]=o*p,n[9]=w-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*p,g=o*h,S=a*p,w=a*h;n[0]=l*p,n[4]=S*c-g,n[8]=f*c+w,n[1]=l*h,n[5]=w*c+f,n[9]=g*c-S,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*c,S=a*l,w=a*c;n[0]=l*p,n[4]=w-f*h,n[8]=S*h+g,n[1]=h,n[5]=o*p,n[9]=-a*p,n[2]=-c*p,n[6]=g*h+S,n[10]=f-w*h}else if(e.order==="XZY"){const f=o*l,g=o*c,S=a*l,w=a*c;n[0]=l*p,n[4]=-h,n[8]=c*p,n[1]=f*h+w,n[5]=o*p,n[9]=g*h-S,n[2]=S*h-g,n[6]=a*p,n[10]=w*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ay,e,ly)}lookAt(e,n,i){const r=this.elements;return Xn.subVectors(e,n),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),pr.crossVectors(i,Xn),pr.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),pr.crossVectors(i,Xn)),pr.normalize(),Va.crossVectors(Xn,pr),r[0]=pr.x,r[4]=Va.x,r[8]=Xn.x,r[1]=pr.y,r[5]=Va.y,r[9]=Xn.y,r[2]=pr.z,r[6]=Va.z,r[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],p=i[1],h=i[5],f=i[9],g=i[13],S=i[2],w=i[6],_=i[10],u=i[14],m=i[3],v=i[7],M=i[11],b=i[15],T=r[0],P=r[4],x=r[8],C=r[12],I=r[1],D=r[5],O=r[9],J=r[13],ne=r[2],F=r[6],$=r[10],X=r[14],G=r[3],ee=r[7],oe=r[11],Ee=r[15];return s[0]=o*T+a*I+l*ne+c*G,s[4]=o*P+a*D+l*F+c*ee,s[8]=o*x+a*O+l*$+c*oe,s[12]=o*C+a*J+l*X+c*Ee,s[1]=p*T+h*I+f*ne+g*G,s[5]=p*P+h*D+f*F+g*ee,s[9]=p*x+h*O+f*$+g*oe,s[13]=p*C+h*J+f*X+g*Ee,s[2]=S*T+w*I+_*ne+u*G,s[6]=S*P+w*D+_*F+u*ee,s[10]=S*x+w*O+_*$+u*oe,s[14]=S*C+w*J+_*X+u*Ee,s[3]=m*T+v*I+M*ne+b*G,s[7]=m*P+v*D+M*F+b*ee,s[11]=m*x+v*O+M*$+b*oe,s[15]=m*C+v*J+M*X+b*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],p=e[2],h=e[6],f=e[10],g=e[14],S=e[3],w=e[7],_=e[11],u=e[15],m=l*g-c*f,v=a*g-c*h,M=a*f-l*h,b=o*g-c*p,T=o*f-l*p,P=o*h-a*p;return n*(w*m-_*v+u*M)-i*(S*m-_*b+u*T)+r*(S*v-w*b+u*P)-s*(S*M-w*T+_*P)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],p=e[8],h=e[9],f=e[10],g=e[11],S=e[12],w=e[13],_=e[14],u=e[15],m=n*a-i*o,v=n*l-r*o,M=n*c-s*o,b=i*l-r*a,T=i*c-s*a,P=r*c-s*l,x=p*w-h*S,C=p*_-f*S,I=p*u-g*S,D=h*_-f*w,O=h*u-g*w,J=f*u-g*_,ne=m*J-v*O+M*D+b*I-T*C+P*x;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/ne;return e[0]=(a*J-l*O+c*D)*F,e[1]=(r*O-i*J-s*D)*F,e[2]=(w*P-_*T+u*b)*F,e[3]=(f*T-h*P-g*b)*F,e[4]=(l*I-o*J-c*C)*F,e[5]=(n*J-r*I+s*C)*F,e[6]=(_*M-S*P-u*v)*F,e[7]=(p*P-f*M+g*v)*F,e[8]=(o*O-a*I+c*x)*F,e[9]=(i*I-n*O-s*x)*F,e[10]=(S*T-w*M+u*m)*F,e[11]=(h*M-p*T-g*m)*F,e[12]=(a*C-o*D-l*x)*F,e[13]=(n*D-i*C+r*x)*F,e[14]=(w*v-S*b-_*m)*F,e[15]=(p*b-h*v+f*m)*F,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,p=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,p*a+i,p*l-r*o,0,c*l-r*a,p*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,p=o+o,h=a+a,f=s*c,g=s*p,S=s*h,w=o*p,_=o*h,u=a*h,m=l*c,v=l*p,M=l*h,b=i.x,T=i.y,P=i.z;return r[0]=(1-(w+u))*b,r[1]=(g+M)*b,r[2]=(S-v)*b,r[3]=0,r[4]=(g-M)*T,r[5]=(1-(f+u))*T,r[6]=(_+m)*T,r[7]=0,r[8]=(S+v)*P,r[9]=(_-m)*P,r[10]=(1-(f+w))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Es.set(r[0],r[1],r[2]).length();const a=Es.set(r[4],r[5],r[6]).length(),l=Es.set(r[8],r[9],r[10]).length();s<0&&(o=-o),gi.copy(this);const c=1/o,p=1/a,h=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=p,gi.elements[5]*=p,gi.elements[6]*=p,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,n.setFromRotationMatrix(gi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Oi,l=!1){const c=this.elements,p=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),g=(i+r)/(i-r);let S,w;if(l)S=s/(o-s),w=o*s/(o-s);else if(a===Oi)S=-(o+s)/(o-s),w=-2*o*s/(o-s);else if(a===ga)S=-o/(o-s),w=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=p,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=S,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Oi,l=!1){const c=this.elements,p=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),g=-(i+r)/(i-r);let S,w;if(l)S=1/(o-s),w=o/(o-s);else if(a===Oi)S=-2/(o-s),w=-(o+s)/(o-s);else if(a===ga)S=-1/(o-s),w=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=p,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=S,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};lc.prototype.isMatrix4=!0;let qt=lc;const Es=new V,gi=new qt,ay=new V(0,0,0),ly=new V(1,1,1),pr=new V,Va=new V,Xn=new V,nm=new qt,im=new _o;class kr{constructor(e=0,n=0,i=0,r=kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],p=r[9],h=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-p,g),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return im.setFromEuler(this),this.setFromQuaternion(im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kr.DEFAULT_ORDER="XYZ";class E_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cy=0;const rm=new V,ws=new _o,Yi=new qt,Ha=new V,bo=new V,uy=new V,fy=new _o,sm=new V(1,0,0),om=new V(0,1,0),am=new V(0,0,1),lm={type:"added"},dy={type:"removed"},Ts={type:"childadded",child:null},uu={type:"childremoved",child:null};class In extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new V,n=new kr,i=new _o,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new it}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new E_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(sm,e)}rotateY(e){return this.rotateOnAxis(om,e)}rotateZ(e){return this.rotateOnAxis(am,e)}translateOnAxis(e,n){return rm.copy(e).applyQuaternion(this.quaternion),this.position.add(rm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sm,e)}translateY(e){return this.translateOnAxis(om,e)}translateZ(e){return this.translateOnAxis(am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ha.copy(e):Ha.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(bo,Ha,this.up):Yi.lookAt(Ha,bo,this.up),this.quaternion.setFromRotationMatrix(Yi),r&&(Yi.extractRotation(r.matrixWorld),ws.setFromRotationMatrix(Yi),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lm),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dy),uu.child=e,this.dispatchEvent(uu),uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lm),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,uy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,fy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),p=o(e.images),h=o(e.shapes),f=o(e.skeletons),g=o(e.animations),S=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),S.length>0&&(i.nodes=S)}return i.object=r,i;function o(a){const l=[];for(const c in a){const p=a[c];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}In.DEFAULT_UP=new V(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pn extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hy={type:"move"};class fu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const w of e.hand.values()){const _=n.getJointPose(w,i),u=this._getHandJoint(c,w);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const p=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=p.position.distanceTo(h.position),g=.02,S=.005;c.inputState.pinching&&f>g+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new pn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const w_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function du(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=dt.workingColorSpace){return this.r=e,this.g=n,this.b=i,dt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=dt.workingColorSpace){if(e=ey(e,1),n=ht(n,0,1),i=ht(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=du(o,s,e+1/3),this.g=du(o,s,e),this.b=du(o,s,e-1/3)}return dt.colorSpaceToWorking(this,r),this}setStyle(e,n=oi){function i(s){s!==void 0&&parseFloat(s)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=oi){const i=w_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return dt.workingToColorSpace(Mn.copy(this),e),Math.round(ht(Mn.r*255,0,255))*65536+Math.round(ht(Mn.g*255,0,255))*256+Math.round(ht(Mn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=dt.workingColorSpace){dt.workingToColorSpace(Mn.copy(this),n);const i=Mn.r,r=Mn.g,s=Mn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const p=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=p<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=p,e}getRGB(e,n=dt.workingColorSpace){return dt.workingToColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=oi){dt.workingToColorSpace(Mn.copy(this),e);const n=Mn.r,i=Mn.g,r=Mn.b;return e!==oi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(Wa);const i=su(mr.h,Wa.h,n),r=su(mr.s,Wa.s,n),s=su(mr.l,Wa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new ot;ot.NAMES=w_;class Ch{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(e),this.density=n}clone(){return new Ch(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class py extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kr,this.environmentIntensity=1,this.environmentRotation=new kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const _i=new V,qi=new V,hu=new V,$i=new V,As=new V,Rs=new V,cm=new V,pu=new V,mu=new V,gu=new V,_u=new Yt,vu=new Yt,xu=new Yt;class Ei{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),_i.subVectors(e,n),r.cross(_i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){_i.subVectors(r,n),qi.subVectors(i,n),hu.subVectors(e,n);const o=_i.dot(_i),a=_i.dot(qi),l=_i.dot(hu),c=qi.dot(qi),p=qi.dot(hu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,g=(c*l-a*p)*f,S=(o*p-a*l)*f;return s.set(1-g-S,S,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(o,$i.y),l.addScaledVector(a,$i.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return _u.setScalar(0),vu.setScalar(0),xu.setScalar(0),_u.fromBufferAttribute(e,n),vu.fromBufferAttribute(e,i),xu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(_u,s.x),o.addScaledVector(vu,s.y),o.addScaledVector(xu,s.z),o}static isFrontFacing(e,n,i,r){return _i.subVectors(i,n),qi.subVectors(e,n),_i.cross(qi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),_i.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;As.subVectors(r,i),Rs.subVectors(s,i),pu.subVectors(e,i);const l=As.dot(pu),c=Rs.dot(pu);if(l<=0&&c<=0)return n.copy(i);mu.subVectors(e,r);const p=As.dot(mu),h=Rs.dot(mu);if(p>=0&&h<=p)return n.copy(r);const f=l*h-p*c;if(f<=0&&l>=0&&p<=0)return o=l/(l-p),n.copy(i).addScaledVector(As,o);gu.subVectors(e,s);const g=As.dot(gu),S=Rs.dot(gu);if(S>=0&&g<=S)return n.copy(s);const w=g*c-l*S;if(w<=0&&c>=0&&S<=0)return a=c/(c-S),n.copy(i).addScaledVector(Rs,a);const _=p*S-g*h;if(_<=0&&h-p>=0&&g-S>=0)return cm.subVectors(s,r),a=(h-p)/(h-p+(g-S)),n.copy(r).addScaledVector(cm,a);const u=1/(_+w+f);return o=w*u,a=f*u,n.copy(i).addScaledVector(As,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ea{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(s,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xa.copy(i.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),ja.subVectors(this.max,Po),Cs.subVectors(e.a,Po),bs.subVectors(e.b,Po),Ps.subVectors(e.c,Po),gr.subVectors(bs,Cs),_r.subVectors(Ps,bs),Wr.subVectors(Cs,Ps);let n=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-Wr.z,Wr.y,gr.z,0,-gr.x,_r.z,0,-_r.x,Wr.z,0,-Wr.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-Wr.y,Wr.x,0];return!Su(n,Cs,bs,Ps,ja)||(n=[1,0,0,0,1,0,0,0,1],!Su(n,Cs,bs,Ps,ja))?!1:(Ya.crossVectors(gr,_r),n=[Ya.x,Ya.y,Ya.z],Su(n,Cs,bs,Ps,ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new V,new V,new V,new V,new V,new V,new V,new V],vi=new V,Xa=new Ea,Cs=new V,bs=new V,Ps=new V,gr=new V,_r=new V,Wr=new V,Po=new V,ja=new V,Ya=new V,Xr=new V;function Su(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Xr.fromArray(t,s);const a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),c=n.dot(Xr),p=i.dot(Xr);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>a)return!1}return!0}const Qt=new V,qa=new pt;let my=0;class Vi extends vs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:my++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$p,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)qa.fromBufferAttribute(this,n),qa.applyMatrix3(e),this.setXY(n,qa.x,qa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Co(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Co(n,this.array)),n}setX(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Co(n,this.array)),n}setY(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Co(n,this.array)),n}setZ(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Co(n,this.array)),n}setW(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),i=On(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),i=On(i,this.array),r=On(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),i=On(i,this.array),r=On(r,this.array),s=On(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$p&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class T_ extends Vi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class A_ extends Vi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class sn extends Vi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const gy=new Ea,Lo=new V,yu=new V;class Ac{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const n=Lo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(yu)),this.expandByPoint(Lo.copy(e.center).sub(yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _y=0;const ri=new qt,Mu=new In,Ls=new V,jn=new Ea,Do=new Ea,un=new V;class Wn extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(KS(e)?A_:T_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,n,i){return ri.makeTranslation(e,n,i),this.applyMatrix4(ri),this}scale(e,n,i){return ri.makeScale(e,n,i),this.applyMatrix4(ri),this}lookAt(e){return Mu.lookAt(e),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ac);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(jn.min,Do.min),jn.expandByPoint(un),un.addVectors(jn.max,Do.max),jn.expandByPoint(un)):(jn.expandByPoint(Do.min),jn.expandByPoint(Do.max))}jn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(un));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,p=a.count;c<p;c++)un.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(e,c),un.add(Ls)),r=Math.max(r,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new V,l[x]=new V;const c=new V,p=new V,h=new V,f=new pt,g=new pt,S=new pt,w=new V,_=new V;function u(x,C,I){c.fromBufferAttribute(i,x),p.fromBufferAttribute(i,C),h.fromBufferAttribute(i,I),f.fromBufferAttribute(s,x),g.fromBufferAttribute(s,C),S.fromBufferAttribute(s,I),p.sub(c),h.sub(c),g.sub(f),S.sub(f);const D=1/(g.x*S.y-S.x*g.y);isFinite(D)&&(w.copy(p).multiplyScalar(S.y).addScaledVector(h,-g.y).multiplyScalar(D),_.copy(h).multiplyScalar(g.x).addScaledVector(p,-S.x).multiplyScalar(D),a[x].add(w),a[C].add(w),a[I].add(w),l[x].add(_),l[C].add(_),l[I].add(_))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let x=0,C=m.length;x<C;++x){const I=m[x],D=I.start,O=I.count;for(let J=D,ne=D+O;J<ne;J+=3)u(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const v=new V,M=new V,b=new V,T=new V;function P(x){b.fromBufferAttribute(r,x),T.copy(b);const C=a[x];v.copy(C),v.sub(b.multiplyScalar(b.dot(C))).normalize(),M.crossVectors(T,C);const D=M.dot(l[x])<0?-1:1;o.setXYZW(x,v.x,v.y,v.z,D)}for(let x=0,C=m.length;x<C;++x){const I=m[x],D=I.start,O=I.count;for(let J=D,ne=D+O;J<ne;J+=3)P(e.getX(J+0)),P(e.getX(J+1)),P(e.getX(J+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,p=new V,h=new V;if(e)for(let f=0,g=e.count;f<g;f+=3){const S=e.getX(f+0),w=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(n,S),s.fromBufferAttribute(n,w),o.fromBufferAttribute(n,_),p.subVectors(o,s),h.subVectors(r,s),p.cross(h),a.fromBufferAttribute(i,S),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,_),a.add(p),l.add(p),c.add(p),i.setXYZ(S,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),p.subVectors(o,s),h.subVectors(r,s),p.cross(h),i.setXYZ(f+0,p.x,p.y,p.z),i.setXYZ(f+1,p.x,p.y,p.z),i.setXYZ(f+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)un.fromBufferAttribute(e,n),un.normalize(),e.setXYZ(n,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){const c=a.array,p=a.itemSize,h=a.normalized,f=new c.constructor(l.length*p);let g=0,S=0;for(let w=0,_=l.length;w<_;w++){a.isInterleavedBufferAttribute?g=l[w]*a.data.stride+a.offset:g=l[w]*p;for(let u=0;u<p;u++)f[S++]=c[g++]}return new Vi(f,p,h)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let p=0,h=c.length;p<h;p++){const f=c[p],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let h=0,f=c.length;h<f;h++){const g=c[h];p.push(g.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const p=r[c];this.setAttribute(c,p.clone(n))}const s=e.morphAttributes;for(const c in s){const p=[],h=s[c];for(let f=0,g=h.length;f<g;f++)p.push(h[f].clone(n));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,p=o.length;c<p;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let vy=0;class vo extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Ma(),this.name="",this.type="Material",this.blending=eo,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pf,this.blendDst=Lf,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Qe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Qe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pf&&(i.blendSrc=this.blendSrc),this.blendDst!==Lf&&(i.blendDst=this.blendDst),this.blendEquation!==Jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zi=new V,Eu=new V,$a=new V,vr=new V,wu=new V,Ka=new V,Tu=new V;class R_{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,n),Zi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Eu.copy(e).add(n).multiplyScalar(.5),$a.copy(n).sub(e).normalize(),vr.copy(this.origin).sub(Eu);const s=e.distanceTo(n)*.5,o=-this.direction.dot($a),a=vr.dot(this.direction),l=-vr.dot($a),c=vr.lengthSq(),p=Math.abs(1-o*o);let h,f,g,S;if(p>0)if(h=o*l-a,f=o*a-l,S=s*p,h>=0)if(f>=-S)if(f<=S){const w=1/p;h*=w,f*=w,g=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f<=-S?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c):f<=S?(h=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Eu).addScaledVector($a,f),g}intersectSphere(e,n){Zi.subVectors(e.center,this.origin);const i=Zi.dot(this.direction),r=Zi.dot(Zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,p=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),p>=0?(s=(e.min.y-f.y)*p,o=(e.max.y-f.y)*p):(s=(e.max.y-f.y)*p,o=(e.min.y-f.y)*p),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,n,i,r,s){wu.subVectors(n,e),Ka.subVectors(i,e),Tu.crossVectors(wu,Ka);let o=this.direction.dot(Tu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vr.subVectors(this.origin,e);const l=a*this.direction.dot(Ka.crossVectors(vr,Ka));if(l<0)return null;const c=a*this.direction.dot(wu.cross(vr));if(c<0||l+c>o)return null;const p=-a*vr.dot(Tu);return p<0?null:this.at(p/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class si extends vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kr,this.combine=o_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const um=new qt,jr=new R_,Za=new Ac,fm=new V,Qa=new V,Ja=new V,el=new V,Au=new V,tl=new V,dm=new V,nl=new V;class ge extends In{constructor(e=new Wn,n=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){tl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const p=a[l],h=s[l];p!==0&&(Au.fromBufferAttribute(h,e),o?tl.addScaledVector(Au,p):tl.addScaledVector(Au.sub(n),p))}n.add(tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(s),jr.copy(e.ray).recast(e.near),!(Za.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Za,fm)===null||jr.origin.distanceToSquared(fm)>(e.far-e.near)**2))&&(um.copy(s).invert(),jr.copy(e.ray).applyMatrix4(um),!(i.boundingBox!==null&&jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,p=s.attributes.uv1,h=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,w=f.length;S<w;S++){const _=f[S],u=o[_.materialIndex],m=Math.max(_.start,g.start),v=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let M=m,b=v;M<b;M+=3){const T=a.getX(M),P=a.getX(M+1),x=a.getX(M+2);r=il(this,u,e,i,c,p,h,T,P,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const S=Math.max(0,g.start),w=Math.min(a.count,g.start+g.count);for(let _=S,u=w;_<u;_+=3){const m=a.getX(_),v=a.getX(_+1),M=a.getX(_+2);r=il(this,o,e,i,c,p,h,m,v,M),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let S=0,w=f.length;S<w;S++){const _=f[S],u=o[_.materialIndex],m=Math.max(_.start,g.start),v=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=m,b=v;M<b;M+=3){const T=M,P=M+1,x=M+2;r=il(this,u,e,i,c,p,h,T,P,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const S=Math.max(0,g.start),w=Math.min(l.count,g.start+g.count);for(let _=S,u=w;_<u;_+=3){const m=_,v=_+1,M=_+2;r=il(this,o,e,i,c,p,h,m,v,M),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function xy(t,e,n,i,r,s,o,a){let l;if(e.side===Hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Br,a),l===null)return null;nl.copy(a),nl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(nl);return c<n.near||c>n.far?null:{distance:c,point:nl.clone(),object:t}}function il(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Qa),t.getVertexPosition(l,Ja),t.getVertexPosition(c,el);const p=xy(t,e,n,i,Qa,Ja,el,dm);if(p){const h=new V;Ei.getBarycoord(dm,Qa,Ja,el,h),r&&(p.uv=Ei.getInterpolatedAttribute(r,a,l,c,h,new pt)),s&&(p.uv1=Ei.getInterpolatedAttribute(s,a,l,c,h,new pt)),o&&(p.normal=Ei.getInterpolatedAttribute(o,a,l,c,h,new V),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new V,materialIndex:0};Ei.getNormal(Qa,Ja,el,f.normal),p.face=f,p.barycoord=h}return p}class Sy extends Tn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=gn,p=gn,h,f){super(null,o,a,l,c,p,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ru=new V,yy=new V,My=new it;class Kr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ru.subVectors(i,n).cross(yy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Ru),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||My.getNormalMatrix(e),r=this.coplanarPoint(Ru).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Ac,Ey=new pt(.5,.5),rl=new V;class bh{constructor(e=new Kr,n=new Kr,i=new Kr,r=new Kr,s=new Kr,o=new Kr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Oi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],p=s[4],h=s[5],f=s[6],g=s[7],S=s[8],w=s[9],_=s[10],u=s[11],m=s[12],v=s[13],M=s[14],b=s[15];if(r[0].setComponents(c-o,g-p,u-S,b-m).normalize(),r[1].setComponents(c+o,g+p,u+S,b+m).normalize(),r[2].setComponents(c+a,g+h,u+w,b+v).normalize(),r[3].setComponents(c-a,g-h,u-w,b-v).normalize(),i)r[4].setComponents(l,f,_,M).normalize(),r[5].setComponents(c-l,g-f,u-_,b-M).normalize();else if(r[4].setComponents(c-l,g-f,u-_,b-M).normalize(),n===Oi)r[5].setComponents(c+l,g+f,u+_,b+M).normalize();else if(n===ga)r[5].setComponents(l,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){Yr.center.set(0,0,0);const n=Ey.distanceTo(e.center);return Yr.radius=.7071067811865476+n,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C_ extends vo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hm=new qt,Sd=new R_,sl=new Ac,ol=new V;class wy extends In{constructor(e=new Wn,n=new C_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(r),sl.radius+=s,e.ray.intersectsSphere(sl)===!1)return;hm.copy(r).invert(),Sd.copy(e.ray).applyMatrix4(hm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let S=f,w=g;S<w;S++){const _=c.getX(S);ol.fromBufferAttribute(h,_),pm(ol,_,l,r,e,n,this)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let S=f,w=g;S<w;S++)ol.fromBufferAttribute(h,S),pm(ol,S,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function pm(t,e,n,i,r,s,o){const a=Sd.distanceSqToPoint(t);if(a<n){const l=new V;Sd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class b_ extends Tn{constructor(e=[],n=ps,i,r,s,o,a,l,c,p){super(e,n,i,r,s,o,a,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ty extends Tn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fo extends Tn{constructor(e,n,i=Hi,r,s,o,a=gn,l=gn,c,p=fr,h=1){if(p!==fr&&p!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,o,a,l,p,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ay extends fo{constructor(e,n=Hi,i=ps,r,s,o=gn,a=gn,l,c=fr){const p={width:e,height:e,depth:1},h=[p,p,p,p,p,p];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class P_ extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class et extends Wn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],p=[],h=[];let f=0,g=0;S("z","y","x",-1,-1,i,n,e,o,s,0),S("z","y","x",1,-1,i,n,-e,o,s,1),S("x","z","y",1,1,e,i,n,r,o,2),S("x","z","y",1,-1,e,i,-n,r,o,3),S("x","y","z",1,-1,e,n,i,r,s,4),S("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(p,3)),this.setAttribute("uv",new sn(h,2));function S(w,_,u,m,v,M,b,T,P,x,C){const I=M/P,D=b/x,O=M/2,J=b/2,ne=T/2,F=P+1,$=x+1;let X=0,G=0;const ee=new V;for(let oe=0;oe<$;oe++){const Ee=oe*D-J;for(let be=0;be<F;be++){const tt=be*I-O;ee[w]=tt*m,ee[_]=Ee*v,ee[u]=ne,c.push(ee.x,ee.y,ee.z),ee[w]=0,ee[_]=0,ee[u]=T>0?1:-1,p.push(ee.x,ee.y,ee.z),h.push(be/P),h.push(1-oe/x),X+=1}}for(let oe=0;oe<x;oe++)for(let Ee=0;Ee<P;Ee++){const be=f+Ee+F*oe,tt=f+Ee+F*(oe+1),nt=f+(Ee+1)+F*(oe+1),qe=f+(Ee+1)+F*oe;l.push(be,tt,qe),l.push(tt,nt,qe),G+=6}a.addGroup(g,G,C),g+=G,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new et(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hn extends Wn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const p=[],h=[],f=[],g=[];let S=0;const w=[],_=i/2;let u=0;m(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(p),this.setAttribute("position",new sn(h,3)),this.setAttribute("normal",new sn(f,3)),this.setAttribute("uv",new sn(g,2));function m(){const M=new V,b=new V;let T=0;const P=(n-e)/i;for(let x=0;x<=s;x++){const C=[],I=x/s,D=I*(n-e)+e;for(let O=0;O<=r;O++){const J=O/r,ne=J*l+a,F=Math.sin(ne),$=Math.cos(ne);b.x=D*F,b.y=-I*i+_,b.z=D*$,h.push(b.x,b.y,b.z),M.set(F,P,$).normalize(),f.push(M.x,M.y,M.z),g.push(J,1-I),C.push(S++)}w.push(C)}for(let x=0;x<r;x++)for(let C=0;C<s;C++){const I=w[C][x],D=w[C+1][x],O=w[C+1][x+1],J=w[C][x+1];(e>0||C!==0)&&(p.push(I,D,J),T+=3),(n>0||C!==s-1)&&(p.push(D,O,J),T+=3)}c.addGroup(u,T,0),u+=T}function v(M){const b=S,T=new pt,P=new V;let x=0;const C=M===!0?e:n,I=M===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,_*I,0),f.push(0,I,0),g.push(.5,.5),S++;const D=S;for(let O=0;O<=r;O++){const ne=O/r*l+a,F=Math.cos(ne),$=Math.sin(ne);P.x=C*$,P.y=_*I,P.z=C*F,h.push(P.x,P.y,P.z),f.push(0,I,0),T.x=F*.5+.5,T.y=$*.5*I+.5,g.push(T.x,T.y),S++}for(let O=0;O<r;O++){const J=b+O,ne=D+O;M===!0?p.push(ne,ne+1,J):p.push(ne+1,ne,J),x+=3}c.addGroup(u,x,M===!0?1:2),u+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ac extends hn{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ac(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ph extends Wn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),p(),this.setAttribute("position",new sn(s,3)),this.setAttribute("normal",new sn(s.slice(),3)),this.setAttribute("uv",new sn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const v=new V,M=new V,b=new V;for(let T=0;T<n.length;T+=3)g(n[T+0],v),g(n[T+1],M),g(n[T+2],b),l(v,M,b,m)}function l(m,v,M,b){const T=b+1,P=[];for(let x=0;x<=T;x++){P[x]=[];const C=m.clone().lerp(M,x/T),I=v.clone().lerp(M,x/T),D=T-x;for(let O=0;O<=D;O++)O===0&&x===T?P[x][O]=C:P[x][O]=C.clone().lerp(I,O/D)}for(let x=0;x<T;x++)for(let C=0;C<2*(T-x)-1;C++){const I=Math.floor(C/2);C%2===0?(f(P[x][I+1]),f(P[x+1][I]),f(P[x][I])):(f(P[x][I+1]),f(P[x+1][I+1]),f(P[x+1][I]))}}function c(m){const v=new V;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(m),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function p(){const m=new V;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const M=_(m)/2/Math.PI+.5,b=u(m)/Math.PI+.5;o.push(M,1-b)}S(),h()}function h(){for(let m=0;m<o.length;m+=6){const v=o[m+0],M=o[m+2],b=o[m+4],T=Math.max(v,M,b),P=Math.min(v,M,b);T>.9&&P<.1&&(v<.2&&(o[m+0]+=1),M<.2&&(o[m+2]+=1),b<.2&&(o[m+4]+=1))}}function f(m){s.push(m.x,m.y,m.z)}function g(m,v){const M=m*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function S(){const m=new V,v=new V,M=new V,b=new V,T=new pt,P=new pt,x=new pt;for(let C=0,I=0;C<s.length;C+=9,I+=6){m.set(s[C+0],s[C+1],s[C+2]),v.set(s[C+3],s[C+4],s[C+5]),M.set(s[C+6],s[C+7],s[C+8]),T.set(o[I+0],o[I+1]),P.set(o[I+2],o[I+3]),x.set(o[I+4],o[I+5]),b.copy(m).add(v).add(M).divideScalar(3);const D=_(b);w(T,I+0,m,D),w(P,I+2,v,D),w(x,I+4,M,D)}}function w(m,v,M,b){b<0&&m.x===1&&(o[v]=m.x-1),M.x===0&&M.z===0&&(o[v]=b/2/Math.PI+.5)}function _(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ph(e.vertices,e.indices,e.radius,e.detail)}}class es extends Ph{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new es(e.radius,e.detail)}}class tn extends Wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,p=l+1,h=e/a,f=n/l,g=[],S=[],w=[],_=[];for(let u=0;u<p;u++){const m=u*f-o;for(let v=0;v<c;v++){const M=v*h-s;S.push(M,-m,0),w.push(0,0,1),_.push(v/a),_.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const v=m+c*u,M=m+c*(u+1),b=m+1+c*(u+1),T=m+1+c*u;g.push(v,M,T),g.push(M,b,T)}this.setIndex(g),this.setAttribute("position",new sn(S,3)),this.setAttribute("normal",new sn(w,3)),this.setAttribute("uv",new sn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ys extends Wn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const p=[],h=new V,f=new V,g=[],S=[],w=[],_=[];for(let u=0;u<=i;u++){const m=[],v=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let b=0;b<=n;b++){const T=b/n;h.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),S.push(h.x,h.y,h.z),f.copy(h).normalize(),w.push(f.x,f.y,f.z),_.push(T+M,1-v),m.push(c++)}p.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const v=p[u][m+1],M=p[u][m],b=p[u+1][m],T=p[u+1][m+1];(u!==0||o>0)&&g.push(v,M,T),(u!==i-1||l<Math.PI)&&g.push(M,b,T)}this.setIndex(g),this.setAttribute("position",new sn(S,3)),this.setAttribute("normal",new sn(w,3)),this.setAttribute("uv",new sn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ho(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(mm(r))r.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(mm(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Pn(t){const e={};for(let n=0;n<t.length;n++){const i=ho(t[n]);for(const r in i)e[r]=i[r]}return e}function mm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Ry(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function L_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const Cy={clone:ho,merge:Pn};var by=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=by,this.fragmentShader=Py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=Ry(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ly extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Je extends vo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_d,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dy extends vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iy extends vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class D_ extends In{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Cu=new qt,gm=new V,_m=new V;class Ny{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bh,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;gm.setFromMatrixPosition(e.matrixWorld),n.position.copy(gm),_m.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(_m),n.updateMatrixWorld(),Cu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ga||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const al=new V,ll=new _o,Pi=new V;class I_ extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(al,ll,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ll,Pi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(al,ll,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ll,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new V,vm=new pt,xm=new pt;class qn extends I_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xd*2*Math.atan(Math.tan(ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,vm,xm),n.subVectors(xm,vm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ru*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Uy extends Ny{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class cl extends D_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Uy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class N_ extends I_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=p*this.view.offsetY,l=a-p*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Fy extends D_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ds=-90,Is=1;class Oy extends In{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(Ds,Is,e,n);r.layers=this.layers,this.add(r);const s=new qn(Ds,Is,e,n);s.layers=this.layers,this.add(s);const o=new qn(Ds,Is,e,n);o.layers=this.layers,this.add(o);const a=new qn(Ds,Is,e,n);a.layers=this.layers,this.add(a);const l=new qn(Ds,Is,e,n);l.layers=this.layers,this.add(l);const c=new qn(Ds,Is,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,p]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(h,f,g),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class By extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Uh=class Uh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Uh.prototype.isMatrix2=!0;let Sm=Uh;function ym(t,e,n,i){const r=ky(i);switch(n){case v_:return t*e;case S_:return t*e/r.components*r.byteLength;case Mh:return t*e/r.components*r.byteLength;case ms:return t*e*2/r.components*r.byteLength;case Eh:return t*e*2/r.components*r.byteLength;case x_:return t*e*3/r.components*r.byteLength;case wi:return t*e*4/r.components*r.byteLength;case wh:return t*e*4/r.components*r.byteLength;case Rl:case Cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bl:case Pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vf:case Wf:return Math.max(t,16)*Math.max(e,8)/4;case Gf:case Hf:return Math.max(t,8)*Math.max(e,8)/2;case Xf:case jf:case qf:case $f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yf:case nc:case Kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ed:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case nd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case id:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case rd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case sd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case od:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ad:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ld:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case cd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ud:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case fd:case dd:case hd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case pd:case md:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ic:case gd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ky(t){switch(t){case $n:case p_:return{byteLength:1,components:1};case pa:case m_:case ur:return{byteLength:2,components:1};case Sh:case yh:return{byteLength:2,components:4};case Hi:case xh:case Fi:return{byteLength:4,components:1};case g_:case __:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_h}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_h);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function U_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function zy(t){const e=new WeakMap;function n(a,l){const c=a.array,p=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,p),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const p=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,p);else{h.sort((g,S)=>g.start-S.start);let f=0;for(let g=1;g<h.length;g++){const S=h[f],w=h[g];w.start<=S.start+S.count+1?S.count=Math.max(S.count,w.start+w.count-S.start):(++f,h[f]=w)}h.length=f+1;for(let g=0,S=h.length;g<S;g++){const w=h[g];t.bufferSubData(c,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const p=e.get(a);(!p||p.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$y=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ky=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,uM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,IM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,WM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,r1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,w1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,A1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,U1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,K1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_E=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:Gy,alphahash_pars_fragment:Vy,alphamap_fragment:Hy,alphamap_pars_fragment:Wy,alphatest_fragment:Xy,alphatest_pars_fragment:jy,aomap_fragment:Yy,aomap_pars_fragment:qy,batching_pars_vertex:$y,batching_vertex:Ky,begin_vertex:Zy,beginnormal_vertex:Qy,bsdfs:Jy,iridescence_fragment:eM,bumpmap_pars_fragment:tM,clipping_planes_fragment:nM,clipping_planes_pars_fragment:iM,clipping_planes_pars_vertex:rM,clipping_planes_vertex:sM,color_fragment:oM,color_pars_fragment:aM,color_pars_vertex:lM,color_vertex:cM,common:uM,cube_uv_reflection_fragment:fM,defaultnormal_vertex:dM,displacementmap_pars_vertex:hM,displacementmap_vertex:pM,emissivemap_fragment:mM,emissivemap_pars_fragment:gM,colorspace_fragment:_M,colorspace_pars_fragment:vM,envmap_fragment:xM,envmap_common_pars_fragment:SM,envmap_pars_fragment:yM,envmap_pars_vertex:MM,envmap_physical_pars_fragment:IM,envmap_vertex:EM,fog_vertex:wM,fog_pars_vertex:TM,fog_fragment:AM,fog_pars_fragment:RM,gradientmap_pars_fragment:CM,lightmap_pars_fragment:bM,lights_lambert_fragment:PM,lights_lambert_pars_fragment:LM,lights_pars_begin:DM,lights_toon_fragment:NM,lights_toon_pars_fragment:UM,lights_phong_fragment:FM,lights_phong_pars_fragment:OM,lights_physical_fragment:BM,lights_physical_pars_fragment:kM,lights_fragment_begin:zM,lights_fragment_maps:GM,lights_fragment_end:VM,lightprobes_pars_fragment:HM,logdepthbuf_fragment:WM,logdepthbuf_pars_fragment:XM,logdepthbuf_pars_vertex:jM,logdepthbuf_vertex:YM,map_fragment:qM,map_pars_fragment:$M,map_particle_fragment:KM,map_particle_pars_fragment:ZM,metalnessmap_fragment:QM,metalnessmap_pars_fragment:JM,morphinstance_vertex:e1,morphcolor_vertex:t1,morphnormal_vertex:n1,morphtarget_pars_vertex:i1,morphtarget_vertex:r1,normal_fragment_begin:s1,normal_fragment_maps:o1,normal_pars_fragment:a1,normal_pars_vertex:l1,normal_vertex:c1,normalmap_pars_fragment:u1,clearcoat_normal_fragment_begin:f1,clearcoat_normal_fragment_maps:d1,clearcoat_pars_fragment:h1,iridescence_pars_fragment:p1,opaque_fragment:m1,packing:g1,premultiplied_alpha_fragment:_1,project_vertex:v1,dithering_fragment:x1,dithering_pars_fragment:S1,roughnessmap_fragment:y1,roughnessmap_pars_fragment:M1,shadowmap_pars_fragment:E1,shadowmap_pars_vertex:w1,shadowmap_vertex:T1,shadowmask_pars_fragment:A1,skinbase_vertex:R1,skinning_pars_vertex:C1,skinning_vertex:b1,skinnormal_vertex:P1,specularmap_fragment:L1,specularmap_pars_fragment:D1,tonemapping_fragment:I1,tonemapping_pars_fragment:N1,transmission_fragment:U1,transmission_pars_fragment:F1,uv_pars_fragment:O1,uv_pars_vertex:B1,uv_vertex:k1,worldpos_vertex:z1,background_vert:G1,background_frag:V1,backgroundCube_vert:H1,backgroundCube_frag:W1,cube_vert:X1,cube_frag:j1,depth_vert:Y1,depth_frag:q1,distance_vert:$1,distance_frag:K1,equirect_vert:Z1,equirect_frag:Q1,linedashed_vert:J1,linedashed_frag:eE,meshbasic_vert:tE,meshbasic_frag:nE,meshlambert_vert:iE,meshlambert_frag:rE,meshmatcap_vert:sE,meshmatcap_frag:oE,meshnormal_vert:aE,meshnormal_frag:lE,meshphong_vert:cE,meshphong_frag:uE,meshphysical_vert:fE,meshphysical_frag:dE,meshtoon_vert:hE,meshtoon_frag:pE,points_vert:mE,points_frag:gE,shadow_vert:_E,shadow_frag:vE,sprite_vert:xE,sprite_frag:SE},Ue={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Ii={basic:{uniforms:Pn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Pn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Pn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Pn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Pn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new ot(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Pn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Pn([Ue.points,Ue.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Pn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Pn([Ue.common,Ue.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Pn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Pn([Ue.sprite,Ue.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Pn([Ue.common,Ue.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Pn([Ue.lights,Ue.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Ii.physical={uniforms:Pn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const ul={r:0,b:0,g:0},yE=new qt,F_=new it;F_.set(-1,0,0,0,1,0,0,0,1);function ME(t,e,n,i,r,s){const o=new ot(0);let a=r===!0?0:1,l,c,p=null,h=0,f=null;function g(m){let v=m.isScene===!0?m.background:null;if(v&&v.isTexture){const M=m.backgroundBlurriness>0;v=e.get(v,M)}return v}function S(m){let v=!1;const M=g(m);M===null?_(o,a):M&&M.isColor&&(_(M,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function w(m,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===Tc)?(c===void 0&&(c=new ge(new et(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:ho(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yE.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(F_),c.material.toneMapped=dt.getTransfer(M.colorSpace)!==Tt,(p!==M||h!==M.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,p=M,h=M.version,f=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ge(new tn(2,2),new Wi({name:"BackgroundMaterial",uniforms:ho(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=dt.getTransfer(M.colorSpace)!==Tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||h!==M.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,p=M,h=M.version,f=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,v){m.getRGB(ul,L_(t)),n.buffers.color.setClear(ul.r,ul.g,ul.b,v,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,v=1){o.set(m),a=v,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,_(o,a)},render:S,addToRenderList:w,dispose:u}}function EE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(D,O,J,ne,F){let $=!1;const X=h(D,ne,J,O);s!==X&&(s=X,c(s.object)),$=g(D,ne,J,F),$&&S(D,ne,J,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(D,O,J,ne),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function p(D){return t.deleteVertexArray(D)}function h(D,O,J,ne){const F=ne.wireframe===!0;let $=i[O.id];$===void 0&&($={},i[O.id]=$);const X=D.isInstancedMesh===!0?D.id:0;let G=$[X];G===void 0&&(G={},$[X]=G);let ee=G[J.id];ee===void 0&&(ee={},G[J.id]=ee);let oe=ee[F];return oe===void 0&&(oe=f(l()),ee[F]=oe),oe}function f(D){const O=[],J=[],ne=[];for(let F=0;F<n;F++)O[F]=0,J[F]=0,ne[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:J,attributeDivisors:ne,object:D,attributes:{},index:null}}function g(D,O,J,ne){const F=s.attributes,$=O.attributes;let X=0;const G=J.getAttributes();for(const ee in G)if(G[ee].location>=0){const Ee=F[ee];let be=$[ee];if(be===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),Ee===void 0||Ee.attribute!==be||be&&Ee.data!==be.data)return!0;X++}return s.attributesNum!==X||s.index!==ne}function S(D,O,J,ne){const F={},$=O.attributes;let X=0;const G=J.getAttributes();for(const ee in G)if(G[ee].location>=0){let Ee=$[ee];Ee===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(Ee=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(Ee=D.instanceColor));const be={};be.attribute=Ee,Ee&&Ee.data&&(be.data=Ee.data),F[ee]=be,X++}s.attributes=F,s.attributesNum=X,s.index=ne}function w(){const D=s.newAttributes;for(let O=0,J=D.length;O<J;O++)D[O]=0}function _(D){u(D,0)}function u(D,O){const J=s.newAttributes,ne=s.enabledAttributes,F=s.attributeDivisors;J[D]=1,ne[D]===0&&(t.enableVertexAttribArray(D),ne[D]=1),F[D]!==O&&(t.vertexAttribDivisor(D,O),F[D]=O)}function m(){const D=s.newAttributes,O=s.enabledAttributes;for(let J=0,ne=O.length;J<ne;J++)O[J]!==D[J]&&(t.disableVertexAttribArray(J),O[J]=0)}function v(D,O,J,ne,F,$,X){X===!0?t.vertexAttribIPointer(D,O,J,F,$):t.vertexAttribPointer(D,O,J,ne,F,$)}function M(D,O,J,ne){w();const F=ne.attributes,$=J.getAttributes(),X=O.defaultAttributeValues;for(const G in $){const ee=$[G];if(ee.location>=0){let oe=F[G];if(oe===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),oe!==void 0){const Ee=oe.normalized,be=oe.itemSize,tt=e.get(oe);if(tt===void 0)continue;const nt=tt.buffer,qe=tt.type,d=tt.bytesPerElement,B=qe===t.INT||qe===t.UNSIGNED_INT||oe.gpuType===xh;if(oe.isInterleavedBufferAttribute){const Z=oe.data,fe=Z.stride,ce=oe.offset;if(Z.isInstancedInterleavedBuffer){for(let _e=0;_e<ee.locationSize;_e++)u(ee.location+_e,Z.meshPerAttribute);D.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let _e=0;_e<ee.locationSize;_e++)_(ee.location+_e);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let _e=0;_e<ee.locationSize;_e++)v(ee.location+_e,be/ee.locationSize,qe,Ee,fe*d,(ce+be/ee.locationSize*_e)*d,B)}else{if(oe.isInstancedBufferAttribute){for(let Z=0;Z<ee.locationSize;Z++)u(ee.location+Z,oe.meshPerAttribute);D.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Z=0;Z<ee.locationSize;Z++)_(ee.location+Z);t.bindBuffer(t.ARRAY_BUFFER,nt);for(let Z=0;Z<ee.locationSize;Z++)v(ee.location+Z,be/ee.locationSize,qe,Ee,be*d,be/ee.locationSize*Z*d,B)}}else if(X!==void 0){const Ee=X[G];if(Ee!==void 0)switch(Ee.length){case 2:t.vertexAttrib2fv(ee.location,Ee);break;case 3:t.vertexAttrib3fv(ee.location,Ee);break;case 4:t.vertexAttrib4fv(ee.location,Ee);break;default:t.vertexAttrib1fv(ee.location,Ee)}}}}m()}function b(){C();for(const D in i){const O=i[D];for(const J in O){const ne=O[J];for(const F in ne){const $=ne[F];for(const X in $)p($[X].object),delete $[X];delete ne[F]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const O=i[D.id];for(const J in O){const ne=O[J];for(const F in ne){const $=ne[F];for(const X in $)p($[X].object),delete $[X];delete ne[F]}}delete i[D.id]}function P(D){for(const O in i){const J=i[O];for(const ne in J){const F=J[ne];if(F[D.id]===void 0)continue;const $=F[D.id];for(const X in $)p($[X].object),delete $[X];delete F[D.id]}}}function x(D){for(const O in i){const J=i[O],ne=D.isInstancedMesh===!0?D.id:0,F=J[ne];if(F!==void 0){for(const $ in F){const X=F[$];for(const G in X)p(X[G].object),delete X[G];delete F[$]}delete J[ne],Object.keys(J).length===0&&delete i[O]}}}function C(){I(),o=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:_,disableUnusedAttributes:m}}function wE(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,p){p!==0&&(t.drawArraysInstanced(i,l,c,p),n.update(c,i,p))}function a(l,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,p);let f=0;for(let g=0;g<p;g++)f+=c[g];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function TE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==wi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const x=P===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==$n&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Fi&&!x)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const p=l(c);p!==c&&(Qe("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:S,maxTextureSize:w,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:M,maxSamples:b,samples:T}}function AE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Kr,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const g=h.length!==0||f||i!==0||r;return r=f,i=h.length,g},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=p(h,f,0)},this.setState=function(h,f,g){const S=h.clippingPlanes,w=h.clipIntersection,_=h.clipShadows,u=t.get(h);if(!r||S===null||S.length===0||s&&!_)s?p(null):c();else{const m=s?0:i,v=m*4;let M=u.clippingState||null;l.value=M,M=p(S,f,v,g);for(let b=0;b!==v;++b)M[b]=n[b];u.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(h,f,g,S){const w=h!==null?h.length:0;let _=null;if(w!==0){if(_=l.value,S!==!0||_===null){const u=g+w*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(_===null||_.length<u)&&(_=new Float32Array(u));for(let v=0,M=g;v!==w;++v,M+=4)o.copy(h[v]).applyMatrix4(m,a),o.normal.toArray(_,M),_[M+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}const Rr=4,Mm=[.125,.215,.35,.446,.526,.582],ts=20,RE=256,Io=new N_,Em=new ot;let bu=null,Pu=0,Lu=0,Du=!1;const CE=new V;class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=CE}=s;bu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel(),Du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Pu,Lu),this._renderer.xr.enabled=Du,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ps||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel(),Du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ur,format:wi,colorSpace:rc,depthBuffer:!1},r=Tm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bE(s)),this._blurMaterial=LE(s,e,n),this._ggxMaterial=PE(s,e,n)}return r}_compileMaterial(e){const n=new ge(new Wn,e);this._renderer.compile(n,Io)}_sceneToCubeUV(e,n,i,r,s){const l=new qn(90,1,n,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,g=h.toneMapping;h.getClearColor(Em),h.toneMapping=zi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ge(new et,new si({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,_=w.material;let u=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,u=!0):(_.color.copy(Em),u=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[v],s.y,s.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[v]));const b=this._cubeSize;Ns(r,M*b,v>2?b:0,b,b),h.setRenderTarget(r),u&&h.render(w,l),h.render(e,l)}h.toneMapping=g,h.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ps||e.mapping===uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ns(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Io)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),p=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-p*p),f=0+c*1.25,g=h*f,{_lodMax:S}=this,w=this._sizeLods[i],_=3*w*(i>S-Rr?i-S+Rr:0),u=4*(this._cubeSize-w);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=S-n,Ns(s,_,u,3*w,2*w),r.setRenderTarget(s),r.render(a,Io),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=S-i,Ns(e,_,u,3*w,2*w),r.setRenderTarget(e),r.render(a,Io)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&xt("blur direction must be either latitudinal or longitudinal!");const p=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,g=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ts-1),w=s/S,_=isFinite(s)?1+Math.floor(p*w):ts;_>ts&&Qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ts}`);const u=[];let m=0;for(let P=0;P<ts;++P){const x=P/w,C=Math.exp(-x*x/2);u.push(C),P===0?m+=C:P<_&&(m+=2*C)}for(let P=0;P<u.length;P++)u[P]=u[P]/m;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=S,f.mipInt.value=v-i;const M=this._sizeLods[r],b=3*M*(r>v-Rr?r-v+Rr:0),T=4*(this._cubeSize-M);Ns(n,b,T,3*M,2*M),l.setRenderTarget(n),l.render(h,Io)}}function bE(t){const e=[],n=[],i=[];let r=t;const s=t-Rr+1+Mm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Rr?l=Mm[o-t+Rr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),p=-c,h=1+c,f=[p,p,h,p,h,h,p,p,h,h,p,h],g=6,S=6,w=3,_=2,u=1,m=new Float32Array(w*S*g),v=new Float32Array(_*S*g),M=new Float32Array(u*S*g);for(let T=0;T<g;T++){const P=T%3*2/3-1,x=T>2?0:-1,C=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];m.set(C,w*S*T),v.set(f,_*S*T);const I=[T,T,T,T,T,T];M.set(I,u*S*T)}const b=new Wn;b.setAttribute("position",new Vi(m,w)),b.setAttribute("uv",new Vi(v,_)),b.setAttribute("faceIndex",new Vi(M,u)),i.push(new ge(b,null)),r>Rr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Tm(t,e,n){const i=new Gi(t,e,n);return i.texture.mapping=Tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function PE(t,e,n){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function LE(t,e,n){const i=new Float32Array(ts),r=new V(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Am(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Rm(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class O_ extends Gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new b_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new et(5,5,5),s=new Wi({name:"CubemapFromEquirect",uniforms:ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Hn,blending:rr});s.uniforms.tEquirect.value=n;const o=new ge(r,s),a=n.minFilter;return n.minFilter===ss&&(n.minFilter=wn),new Oy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function DE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,g=!1){return f==null?null:g?o(f):s(f)}function s(f){if(f&&f.isTexture){const g=f.mapping;if(g===tu||g===nu)if(e.has(f)){const S=e.get(f).texture;return a(S,f.mapping)}else{const S=f.image;if(S&&S.height>0){const w=new O_(S.height);return w.fromEquirectangularTexture(t,f),e.set(f,w),f.addEventListener("dispose",c),a(w.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const g=f.mapping,S=g===tu||g===nu,w=g===ps||g===uo;if(S||w){let _=n.get(f);const u=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return i===null&&(i=new wm(t)),_=S?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),_.texture;if(_!==void 0)return _.texture;{const m=f.image;return S&&m&&m.height>0||w&&m&&l(m)?(i===null&&(i=new wm(t)),_=S?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),f.addEventListener("dispose",p),_.texture):null}}}return f}function a(f,g){return g===tu?f.mapping=ps:g===nu&&(f.mapping=uo),f}function l(f){let g=0;const S=6;for(let w=0;w<S;w++)f[w]!==void 0&&g++;return g===S}function c(f){const g=f.target;g.removeEventListener("dispose",c);const S=e.get(g);S!==void 0&&(e.delete(g),S.dispose())}function p(f){const g=f.target;g.removeEventListener("dispose",p);const S=n.get(g);S!==void 0&&(n.delete(g),S.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function IE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&vd("WebGLRenderer: "+i+" extension not supported."),r}}}function NE(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const S in f.attributes)e.remove(f.attributes[S]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER)}function c(h){const f=[],g=h.index,S=h.attributes.position;let w=0;if(S===void 0)return;if(g!==null){const m=g.array;w=g.version;for(let v=0,M=m.length;v<M;v+=3){const b=m[v+0],T=m[v+1],P=m[v+2];f.push(b,T,T,P,P,b)}}else{const m=S.array;w=S.version;for(let v=0,M=m.length/3-1;v<M;v+=3){const b=v+0,T=v+1,P=v+2;f.push(b,T,T,P,P,b)}}const _=new(S.count>=65535?A_:T_)(f,1);_.version=w;const u=s.get(h);u&&e.remove(u),s.set(h,_)}function p(h){const f=s.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:p}}function UE(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){t.drawElements(i,f,s,h*o),n.update(f,i,1)}function c(h,f,g){g!==0&&(t.drawElementsInstanced(i,f,s,h*o,g),n.update(f,i,g))}function p(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let w=0;for(let _=0;_<g;_++)w+=f[_];n.update(w,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=p}function FE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:xt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function OE(t,e,n){const i=new WeakMap,r=new Yt;function s(o,a,l){const c=o.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=p!==void 0?p.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let I=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",I)};var g=I;f!==void 0&&f.texture.dispose();const S=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;S===!0&&(M=1),w===!0&&(M=2),_===!0&&(M=3);let b=a.attributes.position.count*M,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const P=new Float32Array(b*T*4*h),x=new M_(P,b,T,h);x.type=Fi,x.needsUpdate=!0;const C=M*4;for(let D=0;D<h;D++){const O=u[D],J=m[D],ne=v[D],F=b*T*4*D;for(let $=0;$<O.count;$++){const X=$*C;S===!0&&(r.fromBufferAttribute(O,$),P[F+X+0]=r.x,P[F+X+1]=r.y,P[F+X+2]=r.z,P[F+X+3]=0),w===!0&&(r.fromBufferAttribute(J,$),P[F+X+4]=r.x,P[F+X+5]=r.y,P[F+X+6]=r.z,P[F+X+7]=0),_===!0&&(r.fromBufferAttribute(ne,$),P[F+X+8]=r.x,P[F+X+9]=r.y,P[F+X+10]=r.z,P[F+X+11]=ne.itemSize===4?r.w:1)}}f={count:h,texture:x,size:new pt(b,T)},i.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let S=0;for(let _=0;_<c.length;_++)S+=c[_];const w=a.morphTargetsRelative?1:1-S;l.getUniforms().setValue(t,"morphTargetBaseInfluence",w),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function BE(t,e,n,i,r){let s=new WeakMap;function o(c){const p=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==p&&(e.update(f),s.set(f,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==p&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,p))),c.isSkinnedMesh){const g=c.skeleton;s.get(g)!==p&&(g.update(),s.set(g,p))}return f}function a(){s=new WeakMap}function l(c){const p=c.target;p.removeEventListener("dispose",l),i.releaseStatesOfObject(p),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:o,dispose:a}}const kE={[a_]:"LINEAR_TONE_MAPPING",[vh]:"REINHARD_TONE_MAPPING",[l_]:"CINEON_TONE_MAPPING",[c_]:"ACES_FILMIC_TONE_MAPPING",[f_]:"AGX_TONE_MAPPING",[d_]:"NEUTRAL_TONE_MAPPING",[u_]:"CUSTOM_TONE_MAPPING"};function zE(t,e,n,i,r){const s=new Gi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new fo(e,n):void 0}),o=new Gi(e,n,{type:ur,depthBuffer:!1,stencilBuffer:!1}),a=new Wn;a.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new sn([0,2,0,0,2,0],2));const l=new Ly({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ge(a,l),p=new N_(-1,1,1,-1,0,1);let h=null,f=null,g=!1,S,w=null,_=[],u=!1;this.setSize=function(m,v){s.setSize(m,v),o.setSize(m,v);for(let M=0;M<_.length;M++){const b=_[M];b.setSize&&b.setSize(m,v)}},this.setEffects=function(m){_=m,u=_.length>0&&_[0].isRenderPass===!0;const v=s.width,M=s.height;for(let b=0;b<_.length;b++){const T=_[b];T.setSize&&T.setSize(v,M)}},this.begin=function(m,v){if(g||m.toneMapping===zi&&_.length===0)return!1;if(w=v,v!==null){const M=v.width,b=v.height;(s.width!==M||s.height!==b)&&this.setSize(M,b)}return u===!1&&m.setRenderTarget(s),S=m.toneMapping,m.toneMapping=zi,!0},this.hasRenderPass=function(){return u},this.end=function(m,v){m.toneMapping=S,g=!0;let M=s,b=o;for(let T=0;T<_.length;T++){const P=_[T];if(P.enabled!==!1&&(P.render(m,b,M,v),P.needsSwap!==!1)){const x=M;M=b,b=x}}if(h!==m.outputColorSpace||f!==m.toneMapping){h=m.outputColorSpace,f=m.toneMapping,l.defines={},dt.getTransfer(h)===Tt&&(l.defines.SRGB_TRANSFER="");const T=kE[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,m.setRenderTarget(w),m.render(c,p),w=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const B_=new Tn,yd=new fo(1,1),k_=new M_,z_=new oy,G_=new b_,Cm=[],bm=[],Pm=new Float32Array(16),Lm=new Float32Array(9),Dm=new Float32Array(4);function xo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Cm[r];if(s===void 0&&(s=new Float32Array(r),Cm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function on(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function an(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Cc(t,e){let n=bm[e];n===void 0&&(n=new Int32Array(e),bm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;t.uniform2fv(this.addr,e),an(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(on(n,e))return;t.uniform3fv(this.addr,e),an(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;t.uniform4fv(this.addr,e),an(n,e)}}function XE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(on(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),an(n,e)}else{if(on(n,i))return;Dm.set(i),t.uniformMatrix2fv(this.addr,!1,Dm),an(n,i)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(on(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),an(n,e)}else{if(on(n,i))return;Lm.set(i),t.uniformMatrix3fv(this.addr,!1,Lm),an(n,i)}}function YE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(on(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),an(n,e)}else{if(on(n,i))return;Pm.set(i),t.uniformMatrix4fv(this.addr,!1,Pm),an(n,i)}}function qE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;t.uniform2iv(this.addr,e),an(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;t.uniform3iv(this.addr,e),an(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;t.uniform4iv(this.addr,e),an(n,e)}}function QE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;t.uniform2uiv(this.addr,e),an(n,e)}}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;t.uniform3uiv(this.addr,e),an(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;t.uniform4uiv(this.addr,e),an(n,e)}}function nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(yd.compareFunction=n.isReversedDepthBuffer()?Ah:Th,s=yd):s=B_,n.setTexture2D(e||s,r)}function iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||z_,r)}function rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||G_,r)}function sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||k_,r)}function ow(t){switch(t){case 5126:return GE;case 35664:return VE;case 35665:return HE;case 35666:return WE;case 35674:return XE;case 35675:return jE;case 35676:return YE;case 5124:case 35670:return qE;case 35667:case 35671:return $E;case 35668:case 35672:return KE;case 35669:case 35673:return ZE;case 5125:return QE;case 36294:return JE;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return sw}}function aw(t,e){t.uniform1fv(this.addr,e)}function lw(t,e){const n=xo(e,this.size,2);t.uniform2fv(this.addr,n)}function cw(t,e){const n=xo(e,this.size,3);t.uniform3fv(this.addr,n)}function uw(t,e){const n=xo(e,this.size,4);t.uniform4fv(this.addr,n)}function fw(t,e){const n=xo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function dw(t,e){const n=xo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hw(t,e){const n=xo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pw(t,e){t.uniform1iv(this.addr,e)}function mw(t,e){t.uniform2iv(this.addr,e)}function gw(t,e){t.uniform3iv(this.addr,e)}function _w(t,e){t.uniform4iv(this.addr,e)}function vw(t,e){t.uniform1uiv(this.addr,e)}function xw(t,e){t.uniform2uiv(this.addr,e)}function Sw(t,e){t.uniform3uiv(this.addr,e)}function yw(t,e){t.uniform4uiv(this.addr,e)}function Mw(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);on(i,s)||(t.uniform1iv(this.addr,s),an(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=yd:o=B_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function Ew(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);on(i,s)||(t.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||z_,s[o])}function ww(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);on(i,s)||(t.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||G_,s[o])}function Tw(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);on(i,s)||(t.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||k_,s[o])}function Aw(t){switch(t){case 5126:return aw;case 35664:return lw;case 35665:return cw;case 35666:return uw;case 35674:return fw;case 35675:return dw;case 35676:return hw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return gw;case 35669:case 35673:return _w;case 5125:return vw;case 36294:return xw;case 36295:return Sw;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Tw}}class Rw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ow(n.type)}}class Cw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Aw(n.type)}}class bw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Iu=/(\w+)(\])?(\[|\.)?/g;function Im(t,e){t.seq.push(e),t.map[e.id]=e}function Pw(t,e,n){const i=t.name,r=i.length;for(Iu.lastIndex=0;;){const s=Iu.exec(i),o=Iu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Im(n,c===void 0?new Rw(a,t,e):new Cw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new bw(a),Im(n,h)),n=h}}}class Ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);Pw(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Nm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Lw=37297;let Dw=0;function Iw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Um=new it;function Nw(t){dt._getMatrix(Um,dt.workingColorSpace,t);const e=`mat3( ${Um.elements.map(n=>n.toFixed(4))} )`;switch(dt.getTransfer(t)){case sc:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Fm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+Iw(t.getShaderSource(e),a)}else return s}function Uw(t,e){const n=Nw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Fw={[a_]:"Linear",[vh]:"Reinhard",[l_]:"Cineon",[c_]:"ACESFilmic",[f_]:"AgX",[d_]:"Neutral",[u_]:"Custom"};function Ow(t,e){const n=Fw[e];return n===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fl=new V;function Bw(){dt.getLuminanceCoefficients(fl);const t=fl.x.toFixed(4),e=fl.y.toFixed(4),n=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function zw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Gw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Go(t){return t!==""}function Om(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Md(t){return t.replace(Vw,Ww)}const Hw=new Map;function Ww(t,e){let n=at[e];if(n===void 0){const i=Hw.get(e);if(i!==void 0)n=at[i],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Md(n)}const Xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function km(t){return t.replace(Xw,jw)}function jw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Yw={[Al]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function qw(t){return Yw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $w={[ps]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE",[Tc]:"ENVMAP_TYPE_CUBE_UV"};function Kw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":$w[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Zw={[uo]:"ENVMAP_MODE_REFRACTION"};function Qw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Zw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jw={[o_]:"ENVMAP_BLENDING_MULTIPLY",[kS]:"ENVMAP_BLENDING_MIX",[zS]:"ENVMAP_BLENDING_ADD"};function eT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Jw[t.combine]||"ENVMAP_BLENDING_NONE"}function tT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function nT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=qw(n),c=Kw(n),p=Qw(n),h=eT(n),f=tT(n),g=kw(n),S=zw(s),w=r.createProgram();let _,u,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Go).join(`
`),_.length>0&&(_+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(Go).join(`
`),u.length>0&&(u+=`
`)):(_=[zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),u=[zm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+p:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==zi?"#define TONE_MAPPING":"",n.toneMapping!==zi?at.tonemapping_pars_fragment:"",n.toneMapping!==zi?Ow("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Uw("linearToOutputTexel",n.outputColorSpace),Bw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Go).join(`
`)),o=Md(o),o=Om(o,n),o=Bm(o,n),a=Md(a),a=Om(a,n),a=Bm(a,n),o=km(o),a=km(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,u=["#define varying in",n.glslVersion===Kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=m+_+o,M=m+u+a,b=Nm(r,r.VERTEX_SHADER,v),T=Nm(r,r.FRAGMENT_SHADER,M);r.attachShader(w,b),r.attachShader(w,T),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function P(D){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(w)||"",J=r.getShaderInfoLog(b)||"",ne=r.getShaderInfoLog(T)||"",F=O.trim(),$=J.trim(),X=ne.trim();let G=!0,ee=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,w,b,T);else{const oe=Fm(r,b,"vertex"),Ee=Fm(r,T,"fragment");xt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+oe+`
`+Ee)}else F!==""?Qe("WebGLProgram: Program Info Log:",F):($===""||X==="")&&(ee=!1);ee&&(D.diagnostics={runnable:G,programLog:F,vertexShader:{log:$,prefix:_},fragmentShader:{log:X,prefix:u}})}r.deleteShader(b),r.deleteShader(T),x=new Ll(r,w),C=Gw(r,w)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(w,Lw)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Dw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=b,this.fragmentShader=T,this}let iT=0;class rT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new sT(e),n.set(e,i)),i}}class sT{constructor(e){this.id=iT++,this.code=e,this.usedTimes=0}}function oT(t){return t===ms||t===nc||t===ic}function aT(t,e,n,i,r,s){const o=new E_,a=new rT,l=new Set,c=[],p=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(x){return l.add(x),x===0?"uv":`uv${x}`}function w(x,C,I,D,O,J){const ne=D.fog,F=O.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||$,X),ee=G&&G.mapping===Tc?G.image.height:null,oe=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Qe("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const Ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,be=Ee!==void 0?Ee.length:0;let tt=0;F.morphAttributes.position!==void 0&&(tt=1),F.morphAttributes.normal!==void 0&&(tt=2),F.morphAttributes.color!==void 0&&(tt=3);let nt,qe,d,B;if(oe){const Re=Ii[oe];nt=Re.vertexShader,qe=Re.fragmentShader}else nt=x.vertexShader,qe=x.fragmentShader,a.update(x),d=a.getVertexShaderID(x),B=a.getFragmentShaderID(x);const Z=t.getRenderTarget(),fe=t.state.buffers.depth.getReversed(),ce=O.isInstancedMesh===!0,_e=O.isBatchedMesh===!0,Ve=!!x.map,Ie=!!x.matcap,ue=!!G,je=!!x.aoMap,We=!!x.lightMap,Ae=!!x.bumpMap,Me=!!x.normalMap,rt=!!x.displacementMap,A=!!x.emissiveMap,ve=!!x.metalnessMap,De=!!x.roughnessMap,Le=x.anisotropy>0,he=x.clearcoat>0,ft=x.dispersion>0,R=x.iridescence>0,y=x.sheen>0,k=x.transmission>0,Q=Le&&!!x.anisotropyMap,pe=he&&!!x.clearcoatMap,q=he&&!!x.clearcoatNormalMap,ae=he&&!!x.clearcoatRoughnessMap,U=R&&!!x.iridescenceMap,H=R&&!!x.iridescenceThicknessMap,ie=y&&!!x.sheenColorMap,me=y&&!!x.sheenRoughnessMap,Y=!!x.specularMap,re=!!x.specularColorMap,Pe=!!x.specularIntensityMap,le=k&&!!x.transmissionMap,ke=k&&!!x.thicknessMap,L=!!x.gradientMap,de=!!x.alphaMap,K=x.alphaTest>0,xe=!!x.alphaHash,se=!!x.extensions;let te=zi;x.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(te=t.toneMapping);const we={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:nt,fragmentShader:qe,defines:x.defines,customVertexShaderID:d,customFragmentShaderID:B,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:_e,batchingColor:_e&&O._colorsTexture!==null,instancing:ce,instancingColor:ce&&O.instanceColor!==null,instancingMorph:ce&&O.morphTexture!==null,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ve,matcap:Ie,envMap:ue,envMapMode:ue&&G.mapping,envMapCubeUVHeight:ee,aoMap:je,lightMap:We,bumpMap:Ae,normalMap:Me,displacementMap:rt,emissiveMap:A,normalMapObjectSpace:Me&&x.normalMapType===HS,normalMapTangentSpace:Me&&x.normalMapType===_d,packedNormalMap:Me&&x.normalMapType===_d&&oT(x.normalMap.format),metalnessMap:ve,roughnessMap:De,anisotropy:Le,anisotropyMap:Q,clearcoat:he,clearcoatMap:pe,clearcoatNormalMap:q,clearcoatRoughnessMap:ae,dispersion:ft,iridescence:R,iridescenceMap:U,iridescenceThicknessMap:H,sheen:y,sheenColorMap:ie,sheenRoughnessMap:me,specularMap:Y,specularColorMap:re,specularIntensityMap:Pe,transmission:k,transmissionMap:le,thicknessMap:ke,gradientMap:L,opaque:x.transparent===!1&&x.blending===eo&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:K,alphaHash:xe,combine:x.combine,mapUv:Ve&&S(x.map.channel),aoMapUv:je&&S(x.aoMap.channel),lightMapUv:We&&S(x.lightMap.channel),bumpMapUv:Ae&&S(x.bumpMap.channel),normalMapUv:Me&&S(x.normalMap.channel),displacementMapUv:rt&&S(x.displacementMap.channel),emissiveMapUv:A&&S(x.emissiveMap.channel),metalnessMapUv:ve&&S(x.metalnessMap.channel),roughnessMapUv:De&&S(x.roughnessMap.channel),anisotropyMapUv:Q&&S(x.anisotropyMap.channel),clearcoatMapUv:pe&&S(x.clearcoatMap.channel),clearcoatNormalMapUv:q&&S(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&S(x.clearcoatRoughnessMap.channel),iridescenceMapUv:U&&S(x.iridescenceMap.channel),iridescenceThicknessMapUv:H&&S(x.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&S(x.sheenColorMap.channel),sheenRoughnessMapUv:me&&S(x.sheenRoughnessMap.channel),specularMapUv:Y&&S(x.specularMap.channel),specularColorMapUv:re&&S(x.specularColorMap.channel),specularIntensityMapUv:Pe&&S(x.specularIntensityMap.channel),transmissionMapUv:le&&S(x.transmissionMap.channel),thicknessMapUv:ke&&S(x.thicknessMap.channel),alphaMapUv:de&&S(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Me||Le),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(Ve||de),fog:!!ne,useFog:x.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&Me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:tt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:Ve&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===Tt,decodeVideoTextureEmissive:A&&x.emissiveMap.isVideoTexture===!0&&dt.getTransfer(x.emissiveMap.colorSpace)===Tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ui,flipSided:x.side===Hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:se&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&x.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function _(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const I in x.defines)C.push(I),C.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(u(C,x),m(C,x),C.push(t.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function u(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function m(x,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function v(x){const C=g[x.type];let I;if(C){const D=Ii[C];I=Cy.clone(D.uniforms)}else I=x.uniforms;return I}function M(x,C){let I=p.get(C);return I!==void 0?++I.usedTimes:(I=new nT(t,C,x,r),c.push(I),p.set(C,I)),I}function b(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),p.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function P(){a.dispose()}return{getParameters:w,getProgramCacheKey:_,getUniforms:v,acquireProgram:M,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:P}}function lT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function cT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Gm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Vm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function a(f,g,S,w,_,u){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:g,material:S,materialVariant:o(f),groupOrder:w,renderOrder:f.renderOrder,z:_,group:u},t[e]=m):(m.id=f.id,m.object=f,m.geometry=g,m.material=S,m.materialVariant=o(f),m.groupOrder=w,m.renderOrder=f.renderOrder,m.z=_,m.group=u),e++,m}function l(f,g,S,w,_,u){const m=a(f,g,S,w,_,u);S.transmission>0?i.push(m):S.transparent===!0?r.push(m):n.push(m)}function c(f,g,S,w,_,u){const m=a(f,g,S,w,_,u);S.transmission>0?i.unshift(m):S.transparent===!0?r.unshift(m):n.unshift(m)}function p(f,g){n.length>1&&n.sort(f||cT),i.length>1&&i.sort(g||Gm),r.length>1&&r.sort(g||Gm)}function h(){for(let f=e,g=t.length;f<g;f++){const S=t[f];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:p}}function uT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Vm,t.set(i,[o])):r>=s.length?(o=new Vm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function fT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new ot};break;case"SpotLight":n={position:new V,direction:new V,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function dT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let hT=0;function pT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mT(t){const e=new fT,n=dT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new qt,o=new qt;function a(c){let p=0,h=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let g=0,S=0,w=0,_=0,u=0,m=0,v=0,M=0,b=0,T=0,P=0;c.sort(pT);for(let C=0,I=c.length;C<I;C++){const D=c[C],O=D.color,J=D.intensity,ne=D.distance;let F=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ms?F=D.shadow.map.texture:F=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)p+=O.r*J,h+=O.g*J,f+=O.b*J;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],J);P++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,G=n.get(D);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.directionalShadow[g]=G,i.directionalShadowMap[g]=F,i.directionalShadowMatrix[g]=D.shadow.matrix,m++}i.directional[g]=$,g++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(O).multiplyScalar(J),$.distance=ne,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[w]=$;const X=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,X.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[w]=X.matrix,D.castShadow){const G=n.get(D);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,i.spotShadow[w]=G,i.spotShadowMap[w]=F,M++}w++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(O).multiplyScalar(J),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=$,_++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const X=D.shadow,G=n.get(D);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,i.pointShadow[S]=G,i.pointShadowMap[S]=F,i.pointShadowMatrix[S]=D.shadow.matrix,v++}i.point[S]=$,S++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(J),$.groundColor.copy(D.groundColor).multiplyScalar(J),i.hemi[u]=$,u++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=h,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==g||x.pointLength!==S||x.spotLength!==w||x.rectAreaLength!==_||x.hemiLength!==u||x.numDirectionalShadows!==m||x.numPointShadows!==v||x.numSpotShadows!==M||x.numSpotMaps!==b||x.numLightProbes!==P)&&(i.directional.length=g,i.spot.length=w,i.rectArea.length=_,i.point.length=S,i.hemi.length=u,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,x.directionalLength=g,x.pointLength=S,x.spotLength=w,x.rectAreaLength=_,x.hemiLength=u,x.numDirectionalShadows=m,x.numPointShadows=v,x.numSpotShadows=M,x.numSpotMaps=b,x.numLightProbes=P,i.version=hT++)}function l(c,p){let h=0,f=0,g=0,S=0,w=0;const _=p.matrixWorldInverse;for(let u=0,m=c.length;u<m;u++){const v=c[u];if(v.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),h++}else if(v.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const M=i.rectArea[S];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),o.identity(),s.copy(v.matrixWorld),s.premultiply(_),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),S++}else if(v.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),f++}else if(v.isHemisphereLight){const M=i.hemi[w];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(_),w++}}}return{setup:a,setupView:l,state:i}}function Hm(t){const e=new mT(t),n=[],i=[],r=[];function s(f){h.camera=f,n.length=0,i.length=0,r.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function p(f){e.setupView(n,f)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:p,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function gT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Hm(t),e.set(r,[a])):s>=o.length?(a=new Hm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const _T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xT=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],ST=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Wm=new qt,No=new V,Nu=new V;function yT(t,e,n){let i=new bh;const r=new pt,s=new pt,o=new Yt,a=new Dy,l=new Iy,c={},p=n.maxTextureSize,h={[Br]:Hn,[Hn]:Br,[Ui]:Ui},f=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:_T,fragmentShader:vT}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const S=new Wn;S.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ge(S,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let u=this.type;this.render=function(T,P,x){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===s_&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Al);const C=t.getRenderTarget(),I=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),O=t.state;O.setBlending(rr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const J=u!==this.type;J&&P.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(F=>F.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,F=T.length;ne<F;ne++){const $=T[ne],X=$.shadow;if(X===void 0){Qe("WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const G=X.getFrameExtents();r.multiply(G),s.copy(X.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/G.x),r.x=s.x*G.x,X.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/G.y),r.y=s.y*G.y,X.mapSize.y=s.y));const ee=t.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ee,X.map===null||J===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===zo){if($.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Gi(r.x,r.y,{format:ms,type:ur,minFilter:wn,magFilter:wn,generateMipmaps:!1}),X.map.texture.name=$.name+".shadowMap",X.map.depthTexture=new fo(r.x,r.y,Fi),X.map.depthTexture.name=$.name+".shadowMapDepth",X.map.depthTexture.format=fr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=gn,X.map.depthTexture.magFilter=gn}else $.isPointLight?(X.map=new O_(r.x),X.map.depthTexture=new Ay(r.x,Hi)):(X.map=new Gi(r.x,r.y),X.map.depthTexture=new fo(r.x,r.y,Hi)),X.map.depthTexture.name=$.name+".shadowMap",X.map.depthTexture.format=fr,this.type===Al?(X.map.depthTexture.compareFunction=ee?Ah:Th,X.map.depthTexture.minFilter=wn,X.map.depthTexture.magFilter=wn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=gn,X.map.depthTexture.magFilter=gn);X.camera.updateProjectionMatrix()}const oe=X.map.isWebGLCubeRenderTarget?6:1;for(let Ee=0;Ee<oe;Ee++){if(X.map.isWebGLCubeRenderTarget)t.setRenderTarget(X.map,Ee),t.clear();else{Ee===0&&(t.setRenderTarget(X.map),t.clear());const be=X.getViewport(Ee);o.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),O.viewport(o)}if($.isPointLight){const be=X.camera,tt=X.matrix,nt=$.distance||be.far;nt!==be.far&&(be.far=nt,be.updateProjectionMatrix()),No.setFromMatrixPosition($.matrixWorld),be.position.copy(No),Nu.copy(be.position),Nu.add(xT[Ee]),be.up.copy(ST[Ee]),be.lookAt(Nu),be.updateMatrixWorld(),tt.makeTranslation(-No.x,-No.y,-No.z),Wm.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Wm,be.coordinateSystem,be.reversedDepth)}else X.updateMatrices($);i=X.getFrustum(),M(P,x,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===zo&&m(X,x),X.needsUpdate=!1}u=this.type,_.needsUpdate=!1,t.setRenderTarget(C,I,D)};function m(T,P){const x=e.update(w);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Gi(r.x,r.y,{format:ms,type:ur})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(P,null,x,f,w,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(P,null,x,g,w,null)}function v(T,P,x,C){let I=null;const D=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)I=D;else if(I=x.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=I.uuid,J=P.uuid;let ne=c[O];ne===void 0&&(ne={},c[O]=ne);let F=ne[J];F===void 0&&(F=I.clone(),ne[J]=F,P.addEventListener("dispose",b)),I=F}if(I.visible=P.visible,I.wireframe=P.wireframe,C===zo?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:h[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const O=t.properties.get(I);O.light=x}return I}function M(T,P,x,C,I){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===zo)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const J=e.update(T),ne=T.material;if(Array.isArray(ne)){const F=J.groups;for(let $=0,X=F.length;$<X;$++){const G=F[$],ee=ne[G.materialIndex];if(ee&&ee.visible){const oe=v(T,ee,C,I);T.onBeforeShadow(t,T,P,x,J,oe,G),t.renderBufferDirect(x,null,J,oe,T,G),T.onAfterShadow(t,T,P,x,J,oe,G)}}}else if(ne.visible){const F=v(T,ne,C,I);T.onBeforeShadow(t,T,P,x,J,F,null),t.renderBufferDirect(x,null,J,F,T,null),T.onAfterShadow(t,T,P,x,J,F,null)}}const O=T.children;for(let J=0,ne=O.length;J<ne;J++)M(O[J],P,x,C,I)}function b(T){T.target.removeEventListener("dispose",b);for(const x in c){const C=c[x],I=T.target.uuid;I in C&&(C[I].dispose(),delete C[I])}}}function MT(t,e){function n(){let L=!1;const de=new Yt;let K=null;const xe=new Yt(0,0,0,0);return{setMask:function(se){K!==se&&!L&&(t.colorMask(se,se,se,se),K=se)},setLocked:function(se){L=se},setClear:function(se,te,we,Re,Se){Se===!0&&(se*=Re,te*=Re,we*=Re),de.set(se,te,we,Re),xe.equals(de)===!1&&(t.clearColor(se,te,we,Re),xe.copy(de))},reset:function(){L=!1,K=null,xe.set(-1,0,0,0)}}}function i(){let L=!1,de=!1,K=null,xe=null,se=null;return{setReversed:function(te){if(de!==te){const we=e.get("EXT_clip_control");te?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),de=te;const Re=se;se=null,this.setClear(Re)}},getReversed:function(){return de},setTest:function(te){te?Z(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(te){K!==te&&!L&&(t.depthMask(te),K=te)},setFunc:function(te){if(de&&(te=JS[te]),xe!==te){switch(te){case Df:t.depthFunc(t.NEVER);break;case If:t.depthFunc(t.ALWAYS);break;case Nf:t.depthFunc(t.LESS);break;case co:t.depthFunc(t.LEQUAL);break;case Uf:t.depthFunc(t.EQUAL);break;case Ff:t.depthFunc(t.GEQUAL);break;case Of:t.depthFunc(t.GREATER);break;case Bf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=te}},setLocked:function(te){L=te},setClear:function(te){se!==te&&(se=te,de&&(te=1-te),t.clearDepth(te))},reset:function(){L=!1,K=null,xe=null,se=null,de=!1}}}function r(){let L=!1,de=null,K=null,xe=null,se=null,te=null,we=null,Re=null,Se=null;return{setTest:function(Fe){L||(Fe?Z(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(Fe){de!==Fe&&!L&&(t.stencilMask(Fe),de=Fe)},setFunc:function(Fe,Ke,st){(K!==Fe||xe!==Ke||se!==st)&&(t.stencilFunc(Fe,Ke,st),K=Fe,xe=Ke,se=st)},setOp:function(Fe,Ke,st){(te!==Fe||we!==Ke||Re!==st)&&(t.stencilOp(Fe,Ke,st),te=Fe,we=Ke,Re=st)},setLocked:function(Fe){L=Fe},setClear:function(Fe){Se!==Fe&&(t.clearStencil(Fe),Se=Fe)},reset:function(){L=!1,de=null,K=null,xe=null,se=null,te=null,we=null,Re=null,Se=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let p={},h={},f={},g=new WeakMap,S=[],w=null,_=!1,u=null,m=null,v=null,M=null,b=null,T=null,P=null,x=new ot(0,0,0),C=0,I=!1,D=null,O=null,J=null,ne=null,F=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ee)[1]),X=G>=1):ee.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),X=G>=2);let oe=null,Ee={};const be=t.getParameter(t.SCISSOR_BOX),tt=t.getParameter(t.VIEWPORT),nt=new Yt().fromArray(be),qe=new Yt().fromArray(tt);function d(L,de,K,xe){const se=new Uint8Array(4),te=t.createTexture();t.bindTexture(L,te),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<K;we++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(de+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return te}const B={};B[t.TEXTURE_2D]=d(t.TEXTURE_2D,t.TEXTURE_2D,1),B[t.TEXTURE_CUBE_MAP]=d(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[t.TEXTURE_2D_ARRAY]=d(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),B[t.TEXTURE_3D]=d(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(t.DEPTH_TEST),o.setFunc(co),Ae(!1),Me(Xp),Z(t.CULL_FACE),je(rr);function Z(L){p[L]!==!0&&(t.enable(L),p[L]=!0)}function fe(L){p[L]!==!1&&(t.disable(L),p[L]=!1)}function ce(L,de){return f[L]!==de?(t.bindFramebuffer(L,de),f[L]=de,L===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=de),L===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=de),!0):!1}function _e(L,de){let K=S,xe=!1;if(L){K=g.get(de),K===void 0&&(K=[],g.set(de,K));const se=L.textures;if(K.length!==se.length||K[0]!==t.COLOR_ATTACHMENT0){for(let te=0,we=se.length;te<we;te++)K[te]=t.COLOR_ATTACHMENT0+te;K.length=se.length,xe=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,xe=!0);xe&&t.drawBuffers(K)}function Ve(L){return w!==L?(t.useProgram(L),w=L,!0):!1}const Ie={[Jr]:t.FUNC_ADD,[MS]:t.FUNC_SUBTRACT,[ES]:t.FUNC_REVERSE_SUBTRACT};Ie[wS]=t.MIN,Ie[TS]=t.MAX;const ue={[AS]:t.ZERO,[RS]:t.ONE,[CS]:t.SRC_COLOR,[Pf]:t.SRC_ALPHA,[NS]:t.SRC_ALPHA_SATURATE,[DS]:t.DST_COLOR,[PS]:t.DST_ALPHA,[bS]:t.ONE_MINUS_SRC_COLOR,[Lf]:t.ONE_MINUS_SRC_ALPHA,[IS]:t.ONE_MINUS_DST_COLOR,[LS]:t.ONE_MINUS_DST_ALPHA,[US]:t.CONSTANT_COLOR,[FS]:t.ONE_MINUS_CONSTANT_COLOR,[OS]:t.CONSTANT_ALPHA,[BS]:t.ONE_MINUS_CONSTANT_ALPHA};function je(L,de,K,xe,se,te,we,Re,Se,Fe){if(L===rr){_===!0&&(fe(t.BLEND),_=!1);return}if(_===!1&&(Z(t.BLEND),_=!0),L!==yS){if(L!==u||Fe!==I){if((m!==Jr||b!==Jr)&&(t.blendEquation(t.FUNC_ADD),m=Jr,b=Jr),Fe)switch(L){case eo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qr:t.blendFunc(t.ONE,t.ONE);break;case jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:xt("WebGLState: Invalid blending: ",L);break}else switch(L){case eo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case jp:xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yp:xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xt("WebGLState: Invalid blending: ",L);break}v=null,M=null,T=null,P=null,x.set(0,0,0),C=0,u=L,I=Fe}return}se=se||de,te=te||K,we=we||xe,(de!==m||se!==b)&&(t.blendEquationSeparate(Ie[de],Ie[se]),m=de,b=se),(K!==v||xe!==M||te!==T||we!==P)&&(t.blendFuncSeparate(ue[K],ue[xe],ue[te],ue[we]),v=K,M=xe,T=te,P=we),(Re.equals(x)===!1||Se!==C)&&(t.blendColor(Re.r,Re.g,Re.b,Se),x.copy(Re),C=Se),u=L,I=!1}function We(L,de){L.side===Ui?fe(t.CULL_FACE):Z(t.CULL_FACE);let K=L.side===Hn;de&&(K=!K),Ae(K),L.blending===eo&&L.transparent===!1?je(rr):je(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const xe=L.stencilWrite;a.setTest(xe),xe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),A(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(L){D!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),D=L)}function Me(L){L!==xS?(Z(t.CULL_FACE),L!==O&&(L===Xp?t.cullFace(t.BACK):L===SS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),O=L}function rt(L){L!==J&&(X&&t.lineWidth(L),J=L)}function A(L,de,K){L?(Z(t.POLYGON_OFFSET_FILL),(ne!==de||F!==K)&&(ne=de,F=K,o.getReversed()&&(de=-de),t.polygonOffset(de,K))):fe(t.POLYGON_OFFSET_FILL)}function ve(L){L?Z(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function De(L){L===void 0&&(L=t.TEXTURE0+$-1),oe!==L&&(t.activeTexture(L),oe=L)}function Le(L,de,K){K===void 0&&(oe===null?K=t.TEXTURE0+$-1:K=oe);let xe=Ee[K];xe===void 0&&(xe={type:void 0,texture:void 0},Ee[K]=xe),(xe.type!==L||xe.texture!==de)&&(oe!==K&&(t.activeTexture(K),oe=K),t.bindTexture(L,de||B[L]),xe.type=L,xe.texture=de)}function he(){const L=Ee[oe];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ft(){try{t.compressedTexImage2D(...arguments)}catch(L){xt("WebGLState:",L)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(L){xt("WebGLState:",L)}}function y(){try{t.texSubImage2D(...arguments)}catch(L){xt("WebGLState:",L)}}function k(){try{t.texSubImage3D(...arguments)}catch(L){xt("WebGLState:",L)}}function Q(){try{t.compressedTexSubImage2D(...arguments)}catch(L){xt("WebGLState:",L)}}function pe(){try{t.compressedTexSubImage3D(...arguments)}catch(L){xt("WebGLState:",L)}}function q(){try{t.texStorage2D(...arguments)}catch(L){xt("WebGLState:",L)}}function ae(){try{t.texStorage3D(...arguments)}catch(L){xt("WebGLState:",L)}}function U(){try{t.texImage2D(...arguments)}catch(L){xt("WebGLState:",L)}}function H(){try{t.texImage3D(...arguments)}catch(L){xt("WebGLState:",L)}}function ie(L){return h[L]!==void 0?h[L]:t.getParameter(L)}function me(L,de){h[L]!==de&&(t.pixelStorei(L,de),h[L]=de)}function Y(L){nt.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),nt.copy(L))}function re(L){qe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),qe.copy(L))}function Pe(L,de){let K=c.get(de);K===void 0&&(K=new WeakMap,c.set(de,K));let xe=K.get(L);xe===void 0&&(xe=t.getUniformBlockIndex(de,L.name),K.set(L,xe))}function le(L,de){const xe=c.get(de).get(L);l.get(de)!==xe&&(t.uniformBlockBinding(de,xe,L.__bindingPointIndex),l.set(de,xe))}function ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),p={},h={},oe=null,Ee={},f={},g=new WeakMap,S=[],w=null,_=!1,u=null,m=null,v=null,M=null,b=null,T=null,P=null,x=new ot(0,0,0),C=0,I=!1,D=null,O=null,J=null,ne=null,F=null,nt.set(0,0,t.canvas.width,t.canvas.height),qe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Z,disable:fe,bindFramebuffer:ce,drawBuffers:_e,useProgram:Ve,setBlending:je,setMaterial:We,setFlipSided:Ae,setCullFace:Me,setLineWidth:rt,setPolygonOffset:A,setScissorTest:ve,activeTexture:De,bindTexture:Le,unbindTexture:he,compressedTexImage2D:ft,compressedTexImage3D:R,texImage2D:U,texImage3D:H,pixelStorei:me,getParameter:ie,updateUBOMapping:Pe,uniformBlockBinding:le,texStorage2D:q,texStorage3D:ae,texSubImage2D:y,texSubImage3D:k,compressedTexSubImage2D:Q,compressedTexSubImage3D:pe,scissor:Y,viewport:re,reset:ke}}function ET(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,p=new WeakMap,h=new Set;let f;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(R,y){return S?new OffscreenCanvas(R,y):oc("canvas")}function _(R,y,k){let Q=1;const pe=ft(R);if((pe.width>k||pe.height>k)&&(Q=k/Math.max(pe.width,pe.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(Q*pe.width),ae=Math.floor(Q*pe.height);f===void 0&&(f=w(q,ae));const U=y?w(q,ae):f;return U.width=q,U.height=ae,U.getContext("2d").drawImage(R,0,0,q,ae),Qe("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+q+"x"+ae+")."),U}else return"data"in R&&Qe("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),R;return R}function u(R){return R.generateMipmaps}function m(R){t.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(R,y,k,Q,pe,q=!1){if(R!==null){if(t[R]!==void 0)return t[R];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae;Q&&(ae=e.get("EXT_texture_norm16"),ae||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=y;if(y===t.RED&&(k===t.FLOAT&&(U=t.R32F),k===t.HALF_FLOAT&&(U=t.R16F),k===t.UNSIGNED_BYTE&&(U=t.R8),k===t.UNSIGNED_SHORT&&ae&&(U=ae.R16_EXT),k===t.SHORT&&ae&&(U=ae.R16_SNORM_EXT)),y===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(U=t.R8UI),k===t.UNSIGNED_SHORT&&(U=t.R16UI),k===t.UNSIGNED_INT&&(U=t.R32UI),k===t.BYTE&&(U=t.R8I),k===t.SHORT&&(U=t.R16I),k===t.INT&&(U=t.R32I)),y===t.RG&&(k===t.FLOAT&&(U=t.RG32F),k===t.HALF_FLOAT&&(U=t.RG16F),k===t.UNSIGNED_BYTE&&(U=t.RG8),k===t.UNSIGNED_SHORT&&ae&&(U=ae.RG16_EXT),k===t.SHORT&&ae&&(U=ae.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(U=t.RG8UI),k===t.UNSIGNED_SHORT&&(U=t.RG16UI),k===t.UNSIGNED_INT&&(U=t.RG32UI),k===t.BYTE&&(U=t.RG8I),k===t.SHORT&&(U=t.RG16I),k===t.INT&&(U=t.RG32I)),y===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(U=t.RGB8UI),k===t.UNSIGNED_SHORT&&(U=t.RGB16UI),k===t.UNSIGNED_INT&&(U=t.RGB32UI),k===t.BYTE&&(U=t.RGB8I),k===t.SHORT&&(U=t.RGB16I),k===t.INT&&(U=t.RGB32I)),y===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(U=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(U=t.RGBA16UI),k===t.UNSIGNED_INT&&(U=t.RGBA32UI),k===t.BYTE&&(U=t.RGBA8I),k===t.SHORT&&(U=t.RGBA16I),k===t.INT&&(U=t.RGBA32I)),y===t.RGB&&(k===t.UNSIGNED_SHORT&&ae&&(U=ae.RGB16_EXT),k===t.SHORT&&ae&&(U=ae.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&(U=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(U=t.R11F_G11F_B10F)),y===t.RGBA){const H=q?sc:dt.getTransfer(pe);k===t.FLOAT&&(U=t.RGBA32F),k===t.HALF_FLOAT&&(U=t.RGBA16F),k===t.UNSIGNED_BYTE&&(U=H===Tt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&ae&&(U=ae.RGBA16_EXT),k===t.SHORT&&ae&&(U=ae.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&(U=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(U=t.RGB5_A1)}return(U===t.R16F||U===t.R32F||U===t.RG16F||U===t.RG32F||U===t.RGBA16F||U===t.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function b(R,y){let k;return R?y===null||y===Hi||y===ma?k=t.DEPTH24_STENCIL8:y===Fi?k=t.DEPTH32F_STENCIL8:y===pa&&(k=t.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Hi||y===ma?k=t.DEPTH_COMPONENT24:y===Fi?k=t.DEPTH_COMPONENT32F:y===pa&&(k=t.DEPTH_COMPONENT16),k}function T(R,y){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==wn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function P(R){const y=R.target;y.removeEventListener("dispose",P),C(y),y.isVideoTexture&&p.delete(y),y.isHTMLTexture&&h.delete(y)}function x(R){const y=R.target;y.removeEventListener("dispose",x),D(y)}function C(R){const y=i.get(R);if(y.__webglInit===void 0)return;const k=R.source,Q=g.get(k);if(Q){const pe=Q[y.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&I(R),Object.keys(Q).length===0&&g.delete(k)}i.remove(R)}function I(R){const y=i.get(R);t.deleteTexture(y.__webglTexture);const k=R.source,Q=g.get(k);delete Q[y.__cacheKey],o.memory.textures--}function D(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let pe=0;pe<y.__webglFramebuffer[Q].length;pe++)t.deleteFramebuffer(y.__webglFramebuffer[Q][pe]);else t.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)t.deleteFramebuffer(y.__webglFramebuffer[Q]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=R.textures;for(let Q=0,pe=k.length;Q<pe;Q++){const q=i.get(k[Q]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(k[Q])}i.remove(R)}let O=0;function J(){O=0}function ne(){return O}function F(R){O=R}function $(){const R=O;return R>=r.maxTextures&&Qe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function X(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function G(R,y){const k=i.get(R);if(R.isVideoTexture&&Le(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const Q=R.image;if(Q===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(k,R,y);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+y)}function ee(R,y){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){fe(k,R,y);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+y)}function oe(R,y){const k=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){fe(k,R,y);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+y)}function Ee(R,y){const k=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){ce(k,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+y)}const be={[kf]:t.REPEAT,[nr]:t.CLAMP_TO_EDGE,[zf]:t.MIRRORED_REPEAT},tt={[gn]:t.NEAREST,[GS]:t.NEAREST_MIPMAP_NEAREST,[Ga]:t.NEAREST_MIPMAP_LINEAR,[wn]:t.LINEAR,[iu]:t.LINEAR_MIPMAP_NEAREST,[ss]:t.LINEAR_MIPMAP_LINEAR},nt={[WS]:t.NEVER,[$S]:t.ALWAYS,[XS]:t.LESS,[Th]:t.LEQUAL,[jS]:t.EQUAL,[Ah]:t.GEQUAL,[YS]:t.GREATER,[qS]:t.NOTEQUAL};function qe(R,y){if(y.type===Fi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===wn||y.magFilter===iu||y.magFilter===Ga||y.magFilter===ss||y.minFilter===wn||y.minFilter===iu||y.minFilter===Ga||y.minFilter===ss)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,be[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,be[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,be[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,tt[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,tt[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,nt[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===gn||y.minFilter!==Ga&&y.minFilter!==ss||y.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function d(R,y){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",P));const Q=y.source;let pe=g.get(Q);pe===void 0&&(pe={},g.set(Q,pe));const q=X(y);if(q!==R.__cacheKey){pe[q]===void 0&&(pe[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),pe[q].usedTimes++;const ae=pe[R.__cacheKey];ae!==void 0&&(pe[R.__cacheKey].usedTimes--,ae.usedTimes===0&&I(y)),R.__cacheKey=q,R.__webglTexture=pe[q].texture}return k}function B(R,y,k){return Math.floor(Math.floor(R/k)/y)}function Z(R,y,k,Q){const q=R.updateRanges;if(q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,k,Q,y.data);else{q.sort((me,Y)=>me.start-Y.start);let ae=0;for(let me=1;me<q.length;me++){const Y=q[ae],re=q[me],Pe=Y.start+Y.count,le=B(re.start,y.width,4),ke=B(Y.start,y.width,4);re.start<=Pe+1&&le===ke&&B(re.start+re.count-1,y.width,4)===le?Y.count=Math.max(Y.count,re.start+re.count-Y.start):(++ae,q[ae]=re)}q.length=ae+1;const U=n.getParameter(t.UNPACK_ROW_LENGTH),H=n.getParameter(t.UNPACK_SKIP_PIXELS),ie=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let me=0,Y=q.length;me<Y;me++){const re=q[me],Pe=Math.floor(re.start/4),le=Math.ceil(re.count/4),ke=Pe%y.width,L=Math.floor(Pe/y.width),de=le,K=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,ke,L,de,K,k,Q,y.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,U),n.pixelStorei(t.UNPACK_SKIP_PIXELS,H),n.pixelStorei(t.UNPACK_SKIP_ROWS,ie)}}function fe(R,y,k){let Q=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=t.TEXTURE_3D);const pe=d(R,y),q=y.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+k);const ae=i.get(q);if(q.version!==ae.__version||pe===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const K=dt.getPrimaries(dt.workingColorSpace),xe=y.colorSpace===wr?null:dt.getPrimaries(y.colorSpace),se=y.colorSpace===wr||K===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,se)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let H=_(y.image,!1,r.maxTextureSize);H=he(y,H);const ie=s.convert(y.format,y.colorSpace),me=s.convert(y.type);let Y=M(y.internalFormat,ie,me,y.normalized,y.colorSpace,y.isVideoTexture);qe(Q,y);let re;const Pe=y.mipmaps,le=y.isVideoTexture!==!0,ke=ae.__version===void 0||pe===!0,L=q.dataReady,de=T(y,H);if(y.isDepthTexture)Y=b(y.format===os,y.type),ke&&(le?n.texStorage2D(t.TEXTURE_2D,1,Y,H.width,H.height):n.texImage2D(t.TEXTURE_2D,0,Y,H.width,H.height,0,ie,me,null));else if(y.isDataTexture)if(Pe.length>0){le&&ke&&n.texStorage2D(t.TEXTURE_2D,de,Y,Pe[0].width,Pe[0].height);for(let K=0,xe=Pe.length;K<xe;K++)re=Pe[K],le?L&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,re.width,re.height,ie,me,re.data):n.texImage2D(t.TEXTURE_2D,K,Y,re.width,re.height,0,ie,me,re.data);y.generateMipmaps=!1}else le?(ke&&n.texStorage2D(t.TEXTURE_2D,de,Y,H.width,H.height),L&&Z(y,H,ie,me)):n.texImage2D(t.TEXTURE_2D,0,Y,H.width,H.height,0,ie,me,H.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){le&&ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Y,Pe[0].width,Pe[0].height,H.depth);for(let K=0,xe=Pe.length;K<xe;K++)if(re=Pe[K],y.format!==wi)if(ie!==null)if(le){if(L)if(y.layerUpdates.size>0){const se=ym(re.width,re.height,y.format,y.type);for(const te of y.layerUpdates){const we=re.data.subarray(te*se/re.data.BYTES_PER_ELEMENT,(te+1)*se/re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,te,re.width,re.height,1,ie,we)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,re.width,re.height,H.depth,ie,re.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Y,re.width,re.height,H.depth,0,re.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,re.width,re.height,H.depth,ie,me,re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Y,re.width,re.height,H.depth,0,ie,me,re.data)}else{le&&ke&&n.texStorage2D(t.TEXTURE_2D,de,Y,Pe[0].width,Pe[0].height);for(let K=0,xe=Pe.length;K<xe;K++)re=Pe[K],y.format!==wi?ie!==null?le?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,re.width,re.height,ie,re.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Y,re.width,re.height,0,re.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?L&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,re.width,re.height,ie,me,re.data):n.texImage2D(t.TEXTURE_2D,K,Y,re.width,re.height,0,ie,me,re.data)}else if(y.isDataArrayTexture)if(le){if(ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Y,H.width,H.height,H.depth),L)if(y.layerUpdates.size>0){const K=ym(H.width,H.height,y.format,y.type);for(const xe of y.layerUpdates){const se=H.data.subarray(xe*K/H.data.BYTES_PER_ELEMENT,(xe+1)*K/H.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,xe,H.width,H.height,1,ie,me,se)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,ie,me,H.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Y,H.width,H.height,H.depth,0,ie,me,H.data);else if(y.isData3DTexture)le?(ke&&n.texStorage3D(t.TEXTURE_3D,de,Y,H.width,H.height,H.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,ie,me,H.data)):n.texImage3D(t.TEXTURE_3D,0,Y,H.width,H.height,H.depth,0,ie,me,H.data);else if(y.isFramebufferTexture){if(ke)if(le)n.texStorage2D(t.TEXTURE_2D,de,Y,H.width,H.height);else{let K=H.width,xe=H.height;for(let se=0;se<de;se++)n.texImage2D(t.TEXTURE_2D,se,Y,K,xe,0,ie,me,null),K>>=1,xe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const K=t.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),H.parentNode!==K){K.appendChild(H),h.add(y),K.onpaint=Re=>{const Se=Re.changedElements;for(const Fe of h)Se.includes(Fe.image)&&(Fe.needsUpdate=!0)},K.requestPaint();return}const xe=0,se=t.RGBA,te=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,xe,se,te,we,H),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(le&&ke){const K=ft(Pe[0]);n.texStorage2D(t.TEXTURE_2D,de,Y,K.width,K.height)}for(let K=0,xe=Pe.length;K<xe;K++)re=Pe[K],le?L&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ie,me,re):n.texImage2D(t.TEXTURE_2D,K,Y,ie,me,re);y.generateMipmaps=!1}else if(le){if(ke){const K=ft(H);n.texStorage2D(t.TEXTURE_2D,de,Y,K.width,K.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie,me,H)}else n.texImage2D(t.TEXTURE_2D,0,Y,ie,me,H);u(y)&&m(Q),ae.__version=q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ce(R,y,k){if(y.image.length!==6)return;const Q=d(R,y),pe=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const q=i.get(pe);if(pe.version!==q.__version||Q===!0){n.activeTexture(t.TEXTURE0+k);const ae=dt.getPrimaries(dt.workingColorSpace),U=y.colorSpace===wr?null:dt.getPrimaries(y.colorSpace),H=y.colorSpace===wr||ae===U?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);const ie=y.isCompressedTexture||y.image[0].isCompressedTexture,me=y.image[0]&&y.image[0].isDataTexture,Y=[];for(let te=0;te<6;te++)!ie&&!me?Y[te]=_(y.image[te],!0,r.maxCubemapSize):Y[te]=me?y.image[te].image:y.image[te],Y[te]=he(y,Y[te]);const re=Y[0],Pe=s.convert(y.format,y.colorSpace),le=s.convert(y.type),ke=M(y.internalFormat,Pe,le,y.normalized,y.colorSpace),L=y.isVideoTexture!==!0,de=q.__version===void 0||Q===!0,K=pe.dataReady;let xe=T(y,re);qe(t.TEXTURE_CUBE_MAP,y);let se;if(ie){L&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,ke,re.width,re.height);for(let te=0;te<6;te++){se=Y[te].mipmaps;for(let we=0;we<se.length;we++){const Re=se[we];y.format!==wi?Pe!==null?L?K&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Re.width,Re.height,Pe,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,ke,Re.width,Re.height,0,Re.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Re.width,Re.height,Pe,le,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,ke,Re.width,Re.height,0,Pe,le,Re.data)}}}else{if(se=y.mipmaps,L&&de){se.length>0&&xe++;const te=ft(Y[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,ke,te.width,te.height)}for(let te=0;te<6;te++)if(me){L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Y[te].width,Y[te].height,Pe,le,Y[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ke,Y[te].width,Y[te].height,0,Pe,le,Y[te].data);for(let we=0;we<se.length;we++){const Se=se[we].image[te].image;L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Se.width,Se.height,Pe,le,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,ke,Se.width,Se.height,0,Pe,le,Se.data)}}else{L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Pe,le,Y[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ke,Pe,le,Y[te]);for(let we=0;we<se.length;we++){const Re=se[we];L?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Pe,le,Re.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,ke,Pe,le,Re.image[te])}}}u(y)&&m(t.TEXTURE_CUBE_MAP),q.__version=pe.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function _e(R,y,k,Q,pe,q){const ae=s.convert(k.format,k.colorSpace),U=s.convert(k.type),H=M(k.internalFormat,ae,U,k.normalized,k.colorSpace),ie=i.get(y),me=i.get(k);if(me.__renderTarget=y,!ie.__hasExternalTextures){const Y=Math.max(1,y.width>>q),re=Math.max(1,y.height>>q);pe===t.TEXTURE_3D||pe===t.TEXTURE_2D_ARRAY?n.texImage3D(pe,q,H,Y,re,y.depth,0,ae,U,null):n.texImage2D(pe,q,H,Y,re,0,ae,U,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),De(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,pe,me.__webglTexture,0,ve(y)):(pe===t.TEXTURE_2D||pe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,pe,me.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(R,y,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer){const Q=y.depthTexture,pe=Q&&Q.isDepthTexture?Q.type:null,q=b(y.stencilBuffer,pe),ae=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;De(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve(y),q,y.width,y.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve(y),q,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,q,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,R)}else{const Q=y.textures;for(let pe=0;pe<Q.length;pe++){const q=Q[pe],ae=s.convert(q.format,q.colorSpace),U=s.convert(q.type),H=M(q.internalFormat,ae,U,q.normalized,q.colorSpace);De(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve(y),H,y.width,y.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve(y),H,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,H,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(R,y,k){const Q=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(y.depthTexture);if(pe.__renderTarget=y,(!pe.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,y.depthTexture.addEventListener("dispose",P)),pe.__webglTexture===void 0){pe.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,pe.__webglTexture),qe(t.TEXTURE_CUBE_MAP,y.depthTexture);const ie=s.convert(y.depthTexture.format),me=s.convert(y.depthTexture.type);let Y;y.depthTexture.format===fr?Y=t.DEPTH_COMPONENT24:y.depthTexture.format===os&&(Y=t.DEPTH24_STENCIL8);for(let re=0;re<6;re++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Y,y.width,y.height,0,ie,me,null)}}else G(y.depthTexture,0);const q=pe.__webglTexture,ae=ve(y),U=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,H=y.depthTexture.format===os?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===fr)De(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,U,q,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,H,U,q,0);else if(y.depthTexture.format===os)De(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,U,q,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,H,U,q,0);else throw new Error("Unknown depthTexture format")}function ue(R){const y=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const pe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",pe)};Q.addEventListener("dispose",pe),y.__depthDisposeCallback=pe}y.__boundDepthTexture=Q}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let Q=0;Q<6;Q++)Ie(y.__webglFramebuffer[Q],R,Q);else{const Q=R.texture.mipmaps;Q&&Q.length>0?Ie(y.__webglFramebuffer[0],R,0):Ie(y.__webglFramebuffer,R,0)}else if(k){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=t.createRenderbuffer(),Ve(y.__webglDepthbuffer[Q],R,!1);else{const pe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,q)}}else{const Q=R.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Ve(y.__webglDepthbuffer,R,!1);else{const pe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(R,y,k){const Q=i.get(R);y!==void 0&&_e(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&ue(R)}function We(R){const y=R.texture,k=i.get(R),Q=i.get(y);R.addEventListener("dispose",x);const pe=R.textures,q=R.isWebGLCubeRenderTarget===!0,ae=pe.length>1;if(ae||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=y.version,o.memory.textures++),q){k.__webglFramebuffer=[];for(let U=0;U<6;U++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[U]=[];for(let H=0;H<y.mipmaps.length;H++)k.__webglFramebuffer[U][H]=t.createFramebuffer()}else k.__webglFramebuffer[U]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let U=0;U<y.mipmaps.length;U++)k.__webglFramebuffer[U]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ae)for(let U=0,H=pe.length;U<H;U++){const ie=i.get(pe[U]);ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&De(R)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let U=0;U<pe.length;U++){const H=pe[U];k.__webglColorRenderbuffer[U]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[U]);const ie=s.convert(H.format,H.colorSpace),me=s.convert(H.type),Y=M(H.internalFormat,ie,me,H.normalized,H.colorSpace,R.isXRRenderTarget===!0),re=ve(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,re,Y,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+U,t.RENDERBUFFER,k.__webglColorRenderbuffer[U])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),Ve(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),qe(t.TEXTURE_CUBE_MAP,y);for(let U=0;U<6;U++)if(y.mipmaps&&y.mipmaps.length>0)for(let H=0;H<y.mipmaps.length;H++)_e(k.__webglFramebuffer[U][H],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+U,H);else _e(k.__webglFramebuffer[U],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);u(y)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let U=0,H=pe.length;U<H;U++){const ie=pe[U],me=i.get(ie);let Y=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,me.__webglTexture),qe(Y,ie),_e(k.__webglFramebuffer,R,ie,t.COLOR_ATTACHMENT0+U,Y,0),u(ie)&&m(Y)}n.unbindTexture()}else{let U=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(U=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(U,Q.__webglTexture),qe(U,y),y.mipmaps&&y.mipmaps.length>0)for(let H=0;H<y.mipmaps.length;H++)_e(k.__webglFramebuffer[H],R,y,t.COLOR_ATTACHMENT0,U,H);else _e(k.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,U,0);u(y)&&m(U),n.unbindTexture()}R.depthBuffer&&ue(R)}function Ae(R){const y=R.textures;for(let k=0,Q=y.length;k<Q;k++){const pe=y[k];if(u(pe)){const q=v(R),ae=i.get(pe).__webglTexture;n.bindTexture(q,ae),m(q),n.unbindTexture()}}}const Me=[],rt=[];function A(R){if(R.samples>0){if(De(R)===!1){const y=R.textures,k=R.width,Q=R.height;let pe=t.COLOR_BUFFER_BIT;const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(R),U=y.length>1;if(U)for(let ie=0;ie<y.length;ie++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const H=R.texture.mipmaps;H&&H.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ie=0;ie<y.length;ie++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(pe|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(pe|=t.STENCIL_BUFFER_BIT)),U){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[ie]);const me=i.get(y[ie]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,me,0)}t.blitFramebuffer(0,0,k,Q,0,0,k,Q,pe,t.NEAREST),l===!0&&(Me.length=0,rt.length=0,Me.push(t.COLOR_ATTACHMENT0+ie),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Me.push(q),rt.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,rt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Me))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),U)for(let ie=0;ie<y.length;ie++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,ae.__webglColorRenderbuffer[ie]);const me=i.get(y[ie]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function ve(R){return Math.min(r.maxSamples,R.samples)}function De(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Le(R){const y=o.render.frame;p.get(R)!==y&&(p.set(R,y),R.update())}function he(R,y){const k=R.colorSpace,Q=R.format,pe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==rc&&k!==wr&&(dt.getTransfer(k)===Tt?(Q!==wi||pe!==$n)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xt("WebGLTextures: Unsupported texture color space:",k)),y}function ft(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=J,this.getTextureUnits=ne,this.setTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=ee,this.setTexture3D=oe,this.setTextureCube=Ee,this.rebindTextures=je,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function wT(t,e){function n(i,r=wr){let s;const o=dt.getTransfer(r);if(i===$n)return t.UNSIGNED_BYTE;if(i===Sh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===yh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===g_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===__)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===p_)return t.BYTE;if(i===m_)return t.SHORT;if(i===pa)return t.UNSIGNED_SHORT;if(i===xh)return t.INT;if(i===Hi)return t.UNSIGNED_INT;if(i===Fi)return t.FLOAT;if(i===ur)return t.HALF_FLOAT;if(i===v_)return t.ALPHA;if(i===x_)return t.RGB;if(i===wi)return t.RGBA;if(i===fr)return t.DEPTH_COMPONENT;if(i===os)return t.DEPTH_STENCIL;if(i===S_)return t.RED;if(i===Mh)return t.RED_INTEGER;if(i===ms)return t.RG;if(i===Eh)return t.RG_INTEGER;if(i===wh)return t.RGBA_INTEGER;if(i===Rl||i===Cl||i===bl||i===Pl)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gf||i===Vf||i===Hf||i===Wf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xf||i===jf||i===Yf||i===qf||i===$f||i===nc||i===Kf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xf||i===jf)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yf)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===qf)return s.COMPRESSED_R11_EAC;if(i===$f)return s.COMPRESSED_SIGNED_R11_EAC;if(i===nc)return s.COMPRESSED_RG11_EAC;if(i===Kf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zf||i===Qf||i===Jf||i===ed||i===td||i===nd||i===id||i===rd||i===sd||i===od||i===ad||i===ld||i===cd||i===ud)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zf)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qf)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jf)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ed)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===td)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===id)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===od)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ad)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ld)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cd)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ud)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fd||i===dd||i===hd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fd)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pd||i===md||i===ic||i===gd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===pd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===md)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ma?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const TT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new P_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Wi({vertexShader:TT,fragmentShader:AT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ge(new tn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CT extends vs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,p=null,h=null,f=null,g=null,S=null;const w=typeof XRWebGLBinding<"u",_=new RT,u={},m=n.getContextAttributes();let v=null,M=null;const b=[],T=[],P=new pt;let x=null;const C=new qn;C.viewport=new Yt;const I=new qn;I.viewport=new Yt;const D=[C,I],O=new By;let J=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(d){let B=b[d];return B===void 0&&(B=new fu,b[d]=B),B.getTargetRaySpace()},this.getControllerGrip=function(d){let B=b[d];return B===void 0&&(B=new fu,b[d]=B),B.getGripSpace()},this.getHand=function(d){let B=b[d];return B===void 0&&(B=new fu,b[d]=B),B.getHandSpace()};function F(d){const B=T.indexOf(d.inputSource);if(B===-1)return;const Z=b[B];Z!==void 0&&(Z.update(d.inputSource,d.frame,c||o),Z.dispatchEvent({type:d.type,data:d.inputSource}))}function $(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",X);for(let d=0;d<b.length;d++){const B=T[d];B!==null&&(T[d]=null,b[d].disconnect(B))}J=null,ne=null,_.reset();for(const d in u)delete u[d];e.setRenderTarget(v),g=null,f=null,h=null,r=null,M=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(d){s=d,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(d){a=d,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(d){c=d},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h===null&&w&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(d){if(r=d,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",$),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,fe=null,ce=null;m.depth&&(ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=m.stencil?os:fr,fe=m.stencil?ma:Hi);const _e={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(_e),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Gi(f.textureWidth,f.textureHeight,{format:wi,type:$n,depthTexture:new fo(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new Gi(g.framebufferWidth,g.framebufferHeight,{format:wi,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(d){for(let B=0;B<d.removed.length;B++){const Z=d.removed[B],fe=T.indexOf(Z);fe>=0&&(T[fe]=null,b[fe].disconnect(Z))}for(let B=0;B<d.added.length;B++){const Z=d.added[B];let fe=T.indexOf(Z);if(fe===-1){for(let _e=0;_e<b.length;_e++)if(_e>=T.length){T.push(Z),fe=_e;break}else if(T[_e]===null){T[_e]=Z,fe=_e;break}if(fe===-1)break}const ce=b[fe];ce&&ce.connect(Z)}}const G=new V,ee=new V;function oe(d,B,Z){G.setFromMatrixPosition(B.matrixWorld),ee.setFromMatrixPosition(Z.matrixWorld);const fe=G.distanceTo(ee),ce=B.projectionMatrix.elements,_e=Z.projectionMatrix.elements,Ve=ce[14]/(ce[10]-1),Ie=ce[14]/(ce[10]+1),ue=(ce[9]+1)/ce[5],je=(ce[9]-1)/ce[5],We=(ce[8]-1)/ce[0],Ae=(_e[8]+1)/_e[0],Me=Ve*We,rt=Ve*Ae,A=fe/(-We+Ae),ve=A*-We;if(B.matrixWorld.decompose(d.position,d.quaternion,d.scale),d.translateX(ve),d.translateZ(A),d.matrixWorld.compose(d.position,d.quaternion,d.scale),d.matrixWorldInverse.copy(d.matrixWorld).invert(),ce[10]===-1)d.projectionMatrix.copy(B.projectionMatrix),d.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const De=Ve+A,Le=Ie+A,he=Me-ve,ft=rt+(fe-ve),R=ue*Ie/Le*De,y=je*Ie/Le*De;d.projectionMatrix.makePerspective(he,ft,R,y,De,Le),d.projectionMatrixInverse.copy(d.projectionMatrix).invert()}}function Ee(d,B){B===null?d.matrixWorld.copy(d.matrix):d.matrixWorld.multiplyMatrices(B.matrixWorld,d.matrix),d.matrixWorldInverse.copy(d.matrixWorld).invert()}this.updateCamera=function(d){if(r===null)return;let B=d.near,Z=d.far;_.texture!==null&&(_.depthNear>0&&(B=_.depthNear),_.depthFar>0&&(Z=_.depthFar)),O.near=I.near=C.near=B,O.far=I.far=C.far=Z,(J!==O.near||ne!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),J=O.near,ne=O.far),O.layers.mask=d.layers.mask|6,C.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;const fe=d.parent,ce=O.cameras;Ee(O,fe);for(let _e=0;_e<ce.length;_e++)Ee(ce[_e],fe);ce.length===2?oe(O,C,I):O.projectionMatrix.copy(C.projectionMatrix),be(d,O,fe)};function be(d,B,Z){Z===null?d.matrix.copy(B.matrixWorld):(d.matrix.copy(Z.matrixWorld),d.matrix.invert(),d.matrix.multiply(B.matrixWorld)),d.matrix.decompose(d.position,d.quaternion,d.scale),d.updateMatrixWorld(!0),d.projectionMatrix.copy(B.projectionMatrix),d.projectionMatrixInverse.copy(B.projectionMatrixInverse),d.isPerspectiveCamera&&(d.fov=xd*2*Math.atan(1/d.projectionMatrix.elements[5]),d.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(d){l=d,f!==null&&(f.fixedFoveation=d),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=d)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(O)},this.getCameraTexture=function(d){return u[d]};let tt=null;function nt(d,B){if(p=B.getViewerPose(c||o),S=B,p!==null){const Z=p.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let fe=!1;Z.length!==O.cameras.length&&(O.cameras.length=0,fe=!0);for(let Ie=0;Ie<Z.length;Ie++){const ue=Z[Ie];let je=null;if(g!==null)je=g.getViewport(ue);else{const Ae=h.getViewSubImage(f,ue);je=Ae.viewport,Ie===0&&(e.setRenderTargetTextures(M,Ae.colorTexture,Ae.depthStencilTexture),e.setRenderTarget(M))}let We=D[Ie];We===void 0&&(We=new qn,We.layers.enable(Ie),We.viewport=new Yt,D[Ie]=We),We.matrix.fromArray(ue.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(ue.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(je.x,je.y,je.width,je.height),Ie===0&&(O.matrix.copy(We.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),fe===!0&&O.cameras.push(We)}const ce=r.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){h=i.getBinding();const Ie=h.getDepthInformation(Z[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(Ie,r.renderState)}if(ce&&ce.includes("camera-access")&&w){e.state.unbindTexture(),h=i.getBinding();for(let Ie=0;Ie<Z.length;Ie++){const ue=Z[Ie].camera;if(ue){let je=u[ue];je||(je=new P_,u[ue]=je);const We=h.getCameraImage(ue);je.sourceTexture=We}}}}for(let Z=0;Z<b.length;Z++){const fe=T[Z],ce=b[Z];fe!==null&&ce!==void 0&&ce.update(fe,B,c||o)}tt&&tt(d,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),S=null}const qe=new U_;qe.setAnimationLoop(nt),this.setAnimationLoop=function(d){tt=d},this.dispose=function(){}}}const bT=new qt,V_=new it;V_.set(-1,0,0,0,1,0,0,0,1);function PT(t,e){function n(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function i(_,u){u.color.getRGB(_.fogColor.value,L_(t)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function r(_,u,m,v,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(_,u):u.isMeshLambertMaterial?(s(_,u),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(_,u),h(_,u)):u.isMeshPhongMaterial?(s(_,u),p(_,u),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(_,u),f(_,u),u.isMeshPhysicalMaterial&&g(_,u,M)):u.isMeshMatcapMaterial?(s(_,u),S(_,u)):u.isMeshDepthMaterial?s(_,u):u.isMeshDistanceMaterial?(s(_,u),w(_,u)):u.isMeshNormalMaterial?s(_,u):u.isLineBasicMaterial?(o(_,u),u.isLineDashedMaterial&&a(_,u)):u.isPointsMaterial?l(_,u,m,v):u.isSpriteMaterial?c(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,n(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===Hn&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,n(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===Hn&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,n(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,n(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const m=e.get(u),v=m.envMap,M=m.envMapRotation;v&&(_.envMap.value=v,_.envMapRotation.value.setFromMatrix4(bT.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(V_),_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,_.aoMapTransform))}function o(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform))}function a(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function l(_,u,m,v){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*m,_.scale.value=v*.5,u.map&&(_.map.value=u.map,n(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function c(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function p(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function h(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function f(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function g(_,u,m){_.ior.value=u.ior,u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Hn&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=m.texture,_.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,u){u.matcap&&(_.matcap.value=u.matcap)}function w(_,u){const m=e.get(u).light;_.referencePosition.value.setFromMatrixPosition(m.matrixWorld),_.nearDistance.value=m.shadow.camera.near,_.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function LT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,v){const M=v.program;i.uniformBlockBinding(m,M)}function c(m,v){let M=r[m.id];M===void 0&&(S(m),M=p(m),r[m.id]=M,m.addEventListener("dispose",_));const b=v.program;i.updateUBOMapping(m,b);const T=e.render.frame;s[m.id]!==T&&(f(m),s[m.id]=T)}function p(m){const v=h();m.__bindingPointIndex=v;const M=t.createBuffer(),b=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function h(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const v=r[m.id],M=m.uniforms,b=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,P=M.length;T<P;T++){const x=Array.isArray(M[T])?M[T]:[M[T]];for(let C=0,I=x.length;C<I;C++){const D=x[C];if(g(D,T,C,b)===!0){const O=D.__offset,J=Array.isArray(D.value)?D.value:[D.value];let ne=0;for(let F=0;F<J.length;F++){const $=J[F],X=w($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,O+ne,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):ArrayBuffer.isView($)?D.__data.set(new $.constructor($.buffer,$.byteOffset,D.__data.length)):($.toArray(D.__data,ne),ne+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,v,M,b){const T=m.value,P=v+"_"+M;if(b[P]===void 0)return typeof T=="number"||typeof T=="boolean"?b[P]=T:ArrayBuffer.isView(T)?b[P]=T.slice():b[P]=T.clone(),!0;{const x=b[P];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return b[P]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function S(m){const v=m.uniforms;let M=0;const b=16;for(let P=0,x=v.length;P<x;P++){const C=Array.isArray(v[P])?v[P]:[v[P]];for(let I=0,D=C.length;I<D;I++){const O=C[I],J=Array.isArray(O.value)?O.value:[O.value];for(let ne=0,F=J.length;ne<F;ne++){const $=J[ne],X=w($),G=M%b,ee=G%X.boundary,oe=G+ee;M+=ee,oe!==0&&b-oe<X.storage&&(M+=b-oe),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=X.storage}}}const T=M%b;return T>0&&(M+=b-T),m.__size=M,m.__cache={},this}function w(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(v.boundary=16,v.storage=m.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",m),v}function _(m){const v=m.target;v.removeEventListener("dispose",_);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}const DT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function IT(){return Li===null&&(Li=new Sy(DT,16,16,ms,ur),Li.name="DFG_LUT",Li.minFilter=wn,Li.magFilter=wn,Li.wrapS=nr,Li.wrapT=nr,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class NT{constructor(e={}){const{canvas:n=ZS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:g=$n}=e;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=o;const w=g,_=new Set([wh,Eh,Mh]),u=new Set([$n,Hi,pa,ma,Sh,yh]),m=new Uint32Array(4),v=new Int32Array(4),M=new V;let b=null,T=null;const P=[],x=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let D=!1,O=null;this._outputColorSpace=oi;let J=0,ne=0,F=null,$=-1,X=null;const G=new Yt,ee=new Yt;let oe=null;const Ee=new ot(0);let be=0,tt=n.width,nt=n.height,qe=1,d=null,B=null;const Z=new Yt(0,0,tt,nt),fe=new Yt(0,0,tt,nt);let ce=!1;const _e=new bh;let Ve=!1,Ie=!1;const ue=new qt,je=new V,We=new Yt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function rt(){return F===null?qe:1}let A=i;function ve(E,N){return n.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${_h}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",we,!1),n.addEventListener("webglcontextcreationerror",Re,!1),A===null){const N="webgl2";if(A=ve(N,E),A===null)throw ve(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw xt("WebGLRenderer: "+E.message),E}let De,Le,he,ft,R,y,k,Q,pe,q,ae,U,H,ie,me,Y,re,Pe,le,ke,L,de,K;function xe(){De=new IE(A),De.init(),L=new wT(A,De),Le=new TE(A,De,e,L),he=new MT(A,De),Le.reversedDepthBuffer&&f&&he.buffers.depth.setReversed(!0),ft=new FE(A),R=new lT,y=new ET(A,De,he,R,Le,L,ft),k=new DE(I),Q=new zy(A),de=new EE(A,Q),pe=new NE(A,Q,ft,de),q=new BE(A,pe,Q,de,ft),Pe=new OE(A,Le,y),me=new AE(R),ae=new aT(I,k,De,Le,de,me),U=new PT(I,R),H=new uT,ie=new gT(De),re=new ME(I,k,he,q,S,l),Y=new yT(I,q,Le),K=new LT(A,ft,Le,he),le=new wE(A,De,ft),ke=new UE(A,De,ft),ft.programs=ae.programs,I.capabilities=Le,I.extensions=De,I.properties=R,I.renderLists=H,I.shadowMap=Y,I.state=he,I.info=ft}xe(),w!==$n&&(C=new zE(w,n.width,n.height,r,s));const se=new CT(I,A);this.xr=se,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=De.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=De.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return qe},this.setPixelRatio=function(E){E!==void 0&&(qe=E,this.setSize(tt,nt,!1))},this.getSize=function(E){return E.set(tt,nt)},this.setSize=function(E,N,j=!0){if(se.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=E,nt=N,n.width=Math.floor(E*qe),n.height=Math.floor(N*qe),j===!0&&(n.style.width=E+"px",n.style.height=N+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(tt*qe,nt*qe).floor()},this.setDrawingBufferSize=function(E,N,j){tt=E,nt=N,qe=j,n.width=Math.floor(E*j),n.height=Math.floor(N*j),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(w===$n){xt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){Qe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(G)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,N,j,z){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,N,j,z),he.viewport(G.copy(Z).multiplyScalar(qe).round())},this.getScissor=function(E){return E.copy(fe)},this.setScissor=function(E,N,j,z){E.isVector4?fe.set(E.x,E.y,E.z,E.w):fe.set(E,N,j,z),he.scissor(ee.copy(fe).multiplyScalar(qe).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){he.setScissorTest(ce=E)},this.setOpaqueSort=function(E){d=E},this.setTransparentSort=function(E){B=E},this.getClearColor=function(E){return E.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,j=!0){let z=0;if(E){let W=!1;if(F!==null){const Te=F.texture.format;W=_.has(Te)}if(W){const Te=F.texture.type,Ne=u.has(Te),Ce=re.getClearColor(),ze=re.getClearAlpha(),Ge=Ce.r,$e=Ce.g,Ze=Ce.b;Ne?(m[0]=Ge,m[1]=$e,m[2]=Ze,m[3]=ze,A.clearBufferuiv(A.COLOR,0,m)):(v[0]=Ge,v[1]=$e,v[2]=Ze,v[3]=ze,A.clearBufferiv(A.COLOR,0,v))}else z|=A.COLOR_BUFFER_BIT}N&&(z|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&A.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",we,!1),n.removeEventListener("webglcontextcreationerror",Re,!1),re.dispose(),H.dispose(),ie.dispose(),R.dispose(),k.dispose(),q.dispose(),de.dispose(),K.dispose(),ae.dispose(),se.dispose(),se.removeEventListener("sessionstart",Pt),se.removeEventListener("sessionend",$t),Ye.stop()};function te(E){E.preventDefault(),Qp("WebGLRenderer: Context Lost."),D=!0}function we(){Qp("WebGLRenderer: Context Restored."),D=!1;const E=ft.autoReset,N=Y.enabled,j=Y.autoUpdate,z=Y.needsUpdate,W=Y.type;xe(),ft.autoReset=E,Y.enabled=N,Y.autoUpdate=j,Y.needsUpdate=z,Y.type=W}function Re(E){xt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Se(E){const N=E.target;N.removeEventListener("dispose",Se),Fe(N)}function Fe(E){Ke(E),R.remove(E)}function Ke(E){const N=R.get(E).programs;N!==void 0&&(N.forEach(function(j){ae.releaseProgram(j)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,j,z,W,Te){N===null&&(N=Ae);const Ne=W.isMesh&&W.matrixWorld.determinant()<0,Ce=ln(E,N,j,z,W);he.setMaterial(z,Ne);let ze=j.index,Ge=1;if(z.wireframe===!0){if(ze=pe.getWireframeAttribute(j),ze===void 0)return;Ge=2}const $e=j.drawRange,Ze=j.attributes.position;let Xe=$e.start*Ge,mt=($e.start+$e.count)*Ge;Te!==null&&(Xe=Math.max(Xe,Te.start*Ge),mt=Math.min(mt,(Te.start+Te.count)*Ge)),ze!==null?(Xe=Math.max(Xe,0),mt=Math.min(mt,ze.count)):Ze!=null&&(Xe=Math.max(Xe,0),mt=Math.min(mt,Ze.count));const Mt=mt-Xe;if(Mt<0||Mt===1/0)return;de.setup(W,z,Ce,j,ze);let Bt,Et=le;if(ze!==null&&(Bt=Q.get(ze),Et=ke,Et.setIndex(Bt)),W.isMesh)z.wireframe===!0?(he.setLineWidth(z.wireframeLinewidth*rt()),Et.setMode(A.LINES)):Et.setMode(A.TRIANGLES);else if(W.isLine){let Kt=z.linewidth;Kt===void 0&&(Kt=1),he.setLineWidth(Kt*rt()),W.isLineSegments?Et.setMode(A.LINES):W.isLineLoop?Et.setMode(A.LINE_LOOP):Et.setMode(A.LINE_STRIP)}else W.isPoints?Et.setMode(A.POINTS):W.isSprite&&Et.setMode(A.TRIANGLES);if(W.isBatchedMesh)if(De.get("WEBGL_multi_draw"))Et.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Kt=W._multiDrawStarts,Oe=W._multiDrawCounts,cn=W._multiDrawCount,ct=ze?Q.get(ze).bytesPerElement:1,Fn=R.get(z).currentProgram.getUniforms();for(let bn=0;bn<cn;bn++)Fn.setValue(A,"_gl_DrawID",bn),Et.render(Kt[bn]/ct,Oe[bn])}else if(W.isInstancedMesh)Et.renderInstances(Xe,Mt,W.count);else if(j.isInstancedBufferGeometry){const Kt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Oe=Math.min(j.instanceCount,Kt);Et.renderInstances(Xe,Mt,Oe)}else Et.render(Xe,Mt)};function st(E,N,j){E.transparent===!0&&E.side===Ui&&E.forceSinglePass===!1?(E.side=Hn,E.needsUpdate=!0,Xt(E,N,j),E.side=Br,E.needsUpdate=!0,Xt(E,N,j),E.side=Ui):Xt(E,N,j)}this.compile=function(E,N,j=null){j===null&&(j=E),T=ie.get(j),T.init(N),x.push(T),j.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),E!==j&&E.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights();const z=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Te=W.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const Ce=Te[Ne];st(Ce,j,W),z.add(Ce)}else st(Te,j,W),z.add(Te)}),T=x.pop(),z},this.compileAsync=function(E,N,j=null){const z=this.compile(E,N,j);return new Promise(W=>{function Te(){if(z.forEach(function(Ne){R.get(Ne).currentProgram.isReady()&&z.delete(Ne)}),z.size===0){W(E);return}setTimeout(Te,10)}De.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let yt=null;function Ot(E){yt&&yt(E)}function Pt(){Ye.stop()}function $t(){Ye.start()}const Ye=new U_;Ye.setAnimationLoop(Ot),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(E){yt=E,se.setAnimationLoop(E),E===null?Ye.stop():Ye.start()},se.addEventListener("sessionstart",Pt),se.addEventListener("sessionend",$t),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(E,N);const j=se.enabled===!0&&se.isPresenting===!0,z=C!==null&&(F===null||j)&&C.begin(I,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(N),N=se.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,N,F),T=ie.get(E,x.length),T.init(N),T.state.textureUnits=y.getTextureUnits(),x.push(T),ue.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),_e.setFromProjectionMatrix(ue,Oi,N.reversedDepth),Ie=this.localClippingEnabled,Ve=me.init(this.clippingPlanes,Ie),b=H.get(E,P.length),b.init(),P.push(b),se.enabled===!0&&se.isPresenting===!0){const Ne=I.xr.getDepthSensingMesh();Ne!==null&&lt(Ne,N,-1/0,I.sortObjects)}lt(E,N,0,I.sortObjects),b.finish(),I.sortObjects===!0&&b.sort(d,B),Me=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Me&&re.addToRenderList(b,E),this.info.render.frame++,Ve===!0&&me.beginShadows();const W=T.state.shadowsArray;if(Y.render(W,E,N),Ve===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&C.hasRenderPass())===!1){const Ne=b.opaque,Ce=b.transmissive;if(T.setupLights(),N.isArrayCamera){const ze=N.cameras;if(Ce.length>0)for(let Ge=0,$e=ze.length;Ge<$e;Ge++){const Ze=ze[Ge];Wt(Ne,Ce,E,Ze)}Me&&re.render(E);for(let Ge=0,$e=ze.length;Ge<$e;Ge++){const Ze=ze[Ge];Lt(b,E,Ze,Ze.viewport)}}else Ce.length>0&&Wt(Ne,Ce,E,N),Me&&re.render(E),Lt(b,E,N)}F!==null&&ne===0&&(y.updateMultisampleRenderTarget(F),y.updateRenderTargetMipmap(F)),z&&C.end(I),E.isScene===!0&&E.onAfterRender(I,E,N),de.resetDefaultState(),$=-1,X=null,x.pop(),x.length>0?(T=x[x.length-1],y.setTextureUnits(T.state.textureUnits),Ve===!0&&me.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?b=P[P.length-1]:b=null,O!==null&&O.renderEnd()};function lt(E,N,j,z){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||_e.intersectsSprite(E)){z&&We.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);const Ne=q.update(E),Ce=E.material;Ce.visible&&b.push(E,Ne,Ce,j,We.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||_e.intersectsObject(E))){const Ne=q.update(E),Ce=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),We.copy(E.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),We.copy(Ne.boundingSphere.center)),We.applyMatrix4(E.matrixWorld).applyMatrix4(ue)),Array.isArray(Ce)){const ze=Ne.groups;for(let Ge=0,$e=ze.length;Ge<$e;Ge++){const Ze=ze[Ge],Xe=Ce[Ze.materialIndex];Xe&&Xe.visible&&b.push(E,Ne,Xe,j,We.z,Ze)}}else Ce.visible&&b.push(E,Ne,Ce,j,We.z,null)}}const Te=E.children;for(let Ne=0,Ce=Te.length;Ne<Ce;Ne++)lt(Te[Ne],N,j,z)}function Lt(E,N,j,z){const{opaque:W,transmissive:Te,transparent:Ne}=E;T.setupLightsView(j),Ve===!0&&me.setGlobalState(I.clippingPlanes,j),z&&he.viewport(G.copy(z)),W.length>0&&Ct(W,N,j),Te.length>0&&Ct(Te,N,j),Ne.length>0&&Ct(Ne,N,j),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Wt(E,N,j,z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const Xe=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Gi(1,1,{generateMipmaps:!0,type:Xe?ur:$n,minFilter:ss,samples:Math.max(4,Le.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}const Te=T.state.transmissionRenderTarget[z.id],Ne=z.viewport||G;Te.setSize(Ne.z*I.transmissionResolutionScale,Ne.w*I.transmissionResolutionScale);const Ce=I.getRenderTarget(),ze=I.getActiveCubeFace(),Ge=I.getActiveMipmapLevel();I.setRenderTarget(Te),I.getClearColor(Ee),be=I.getClearAlpha(),be<1&&I.setClearColor(16777215,.5),I.clear(),Me&&re.render(j);const $e=I.toneMapping;I.toneMapping=zi;const Ze=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),Ve===!0&&me.setGlobalState(I.clippingPlanes,z),Ct(E,j,z),y.updateMultisampleRenderTarget(Te),y.updateRenderTargetMipmap(Te),De.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let mt=0,Mt=N.length;mt<Mt;mt++){const Bt=N[mt],{object:Et,geometry:Kt,material:Oe,group:cn}=Bt;if(Oe.side===Ui&&Et.layers.test(z.layers)){const ct=Oe.side;Oe.side=Hn,Oe.needsUpdate=!0,Rt(Et,j,z,Kt,Oe,cn),Oe.side=ct,Oe.needsUpdate=!0,Xe=!0}}Xe===!0&&(y.updateMultisampleRenderTarget(Te),y.updateRenderTargetMipmap(Te))}I.setRenderTarget(Ce,ze,Ge),I.setClearColor(Ee,be),Ze!==void 0&&(z.viewport=Ze),I.toneMapping=$e}function Ct(E,N,j){const z=N.isScene===!0?N.overrideMaterial:null;for(let W=0,Te=E.length;W<Te;W++){const Ne=E[W],{object:Ce,geometry:ze,group:Ge}=Ne;let $e=Ne.material;$e.allowOverride===!0&&z!==null&&($e=z),Ce.layers.test(j.layers)&&Rt(Ce,N,j,ze,$e,Ge)}}function Rt(E,N,j,z,W,Te){E.onBeforeRender(I,N,j,z,W,Te),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(I,N,j,z,E,Te),W.transparent===!0&&W.side===Ui&&W.forceSinglePass===!1?(W.side=Hn,W.needsUpdate=!0,I.renderBufferDirect(j,N,z,W,E,Te),W.side=Br,W.needsUpdate=!0,I.renderBufferDirect(j,N,z,W,E,Te),W.side=Ui):I.renderBufferDirect(j,N,z,W,E,Te),E.onAfterRender(I,N,j,z,W,Te)}function Xt(E,N,j){N.isScene!==!0&&(N=Ae);const z=R.get(E),W=T.state.lights,Te=T.state.shadowsArray,Ne=W.state.version,Ce=ae.getParameters(E,W.state,Te,N,j,T.state.lightProbeGridArray),ze=ae.getProgramCacheKey(Ce);let Ge=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;const $e=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=k.get(E.envMap||z.environment,$e),z.envMapRotation=z.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ge===void 0&&(E.addEventListener("dispose",Se),Ge=new Map,z.programs=Ge);let Ze=Ge.get(ze);if(Ze!==void 0){if(z.currentProgram===Ze&&z.lightsStateVersion===Ne)return bt(E,Ce),Ze}else Ce.uniforms=ae.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,j,Ce),E.onBeforeCompile(Ce,I),Ze=ae.acquireProgram(Ce,ze),Ge.set(ze,Ze),z.uniforms=Ce.uniforms;const Xe=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Xe.clippingPlanes=me.uniform),bt(E,Ce),z.needsLights=Rn(E),z.lightsStateVersion=Ne,z.needsLights&&(Xe.ambientLightColor.value=W.state.ambient,Xe.lightProbe.value=W.state.probe,Xe.directionalLights.value=W.state.directional,Xe.directionalLightShadows.value=W.state.directionalShadow,Xe.spotLights.value=W.state.spot,Xe.spotLightShadows.value=W.state.spotShadow,Xe.rectAreaLights.value=W.state.rectArea,Xe.ltc_1.value=W.state.rectAreaLTC1,Xe.ltc_2.value=W.state.rectAreaLTC2,Xe.pointLights.value=W.state.point,Xe.pointLightShadows.value=W.state.pointShadow,Xe.hemisphereLights.value=W.state.hemi,Xe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Xe.spotLightMatrix.value=W.state.spotLightMatrix,Xe.spotLightMap.value=W.state.spotLightMap,Xe.pointShadowMatrix.value=W.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=Ze,z.uniformsList=null,Ze}function It(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Ll.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function bt(E,N){const j=R.get(E);j.outputColorSpace=N.outputColorSpace,j.batching=N.batching,j.batchingColor=N.batchingColor,j.instancing=N.instancing,j.instancingColor=N.instancingColor,j.instancingMorph=N.instancingMorph,j.skinning=N.skinning,j.morphTargets=N.morphTargets,j.morphNormals=N.morphNormals,j.morphColors=N.morphColors,j.morphTargetsCount=N.morphTargetsCount,j.numClippingPlanes=N.numClippingPlanes,j.numIntersection=N.numClipIntersection,j.vertexAlphas=N.vertexAlphas,j.vertexTangents=N.vertexTangents,j.toneMapping=N.toneMapping}function _t(E,N){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(N.matrixWorld);for(let j=0,z=E.length;j<z;j++){const W=E[j];if(W.texture!==null&&W.boundingBox.containsPoint(M))return W}return null}function ln(E,N,j,z,W){N.isScene!==!0&&(N=Ae),y.resetTextureUnits();const Te=N.fog,Ne=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,Ce=F===null?I.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:dt.workingColorSpace,ze=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ge=k.get(z.envMap||Ne,ze),$e=z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ze=!!j.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Xe=!!j.morphAttributes.position,mt=!!j.morphAttributes.normal,Mt=!!j.morphAttributes.color;let Bt=zi;z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Bt=I.toneMapping);const Et=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Kt=Et!==void 0?Et.length:0,Oe=R.get(z),cn=T.state.lights;if(Ve===!0&&(Ie===!0||E!==X)){const vt=E===X&&z.id===$;me.setState(z,E,vt)}let ct=!1;z.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==cn.state.version||Oe.outputColorSpace!==Ce||W.isBatchedMesh&&Oe.batching===!1||!W.isBatchedMesh&&Oe.batching===!0||W.isBatchedMesh&&Oe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Oe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Oe.instancing===!1||!W.isInstancedMesh&&Oe.instancing===!0||W.isSkinnedMesh&&Oe.skinning===!1||!W.isSkinnedMesh&&Oe.skinning===!0||W.isInstancedMesh&&Oe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Oe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Oe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Oe.instancingMorph===!1&&W.morphTexture!==null||Oe.envMap!==Ge||z.fog===!0&&Oe.fog!==Te||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==me.numPlanes||Oe.numIntersection!==me.numIntersection)||Oe.vertexAlphas!==$e||Oe.vertexTangents!==Ze||Oe.morphTargets!==Xe||Oe.morphNormals!==mt||Oe.morphColors!==Mt||Oe.toneMapping!==Bt||Oe.morphTargetsCount!==Kt||!!Oe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Oe.__version=z.version);let Fn=Oe.currentProgram;ct===!0&&(Fn=Xt(z,N,W),O&&z.isNodeMaterial&&O.onUpdateProgram(z,Fn,Oe));let bn=!1,hi=!1,Xi=!1;const gt=Fn.getUniforms(),Nt=Oe.uniforms;if(he.useProgram(Fn.program)&&(bn=!0,hi=!0,Xi=!0),z.id!==$&&($=z.id,hi=!0),Oe.needsLights){const vt=_t(T.state.lightProbeGridArray,W);Oe.lightProbeGrid!==vt&&(Oe.lightProbeGrid=vt,hi=!0)}if(bn||X!==E){he.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),gt.setValue(A,"projectionMatrix",E.projectionMatrix),gt.setValue(A,"viewMatrix",E.matrixWorldInverse);const Ci=gt.map.cameraPosition;Ci!==void 0&&Ci.setValue(A,je.setFromMatrixPosition(E.matrixWorld)),Le.logarithmicDepthBuffer&&gt.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&gt.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,hi=!0,Xi=!0)}if(Oe.needsLights&&(cn.state.directionalShadowMap.length>0&&gt.setValue(A,"directionalShadowMap",cn.state.directionalShadowMap,y),cn.state.spotShadowMap.length>0&&gt.setValue(A,"spotShadowMap",cn.state.spotShadowMap,y),cn.state.pointShadowMap.length>0&&gt.setValue(A,"pointShadowMap",cn.state.pointShadowMap,y)),W.isSkinnedMesh){gt.setOptional(A,W,"bindMatrix"),gt.setOptional(A,W,"bindMatrixInverse");const vt=W.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),gt.setValue(A,"boneTexture",vt.boneTexture,y))}W.isBatchedMesh&&(gt.setOptional(A,W,"batchingTexture"),gt.setValue(A,"batchingTexture",W._matricesTexture,y),gt.setOptional(A,W,"batchingIdTexture"),gt.setValue(A,"batchingIdTexture",W._indirectTexture,y),gt.setOptional(A,W,"batchingColorTexture"),W._colorsTexture!==null&&gt.setValue(A,"batchingColorTexture",W._colorsTexture,y));const ni=j.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&Pe.update(W,j,Fn),(hi||Oe.receiveShadow!==W.receiveShadow)&&(Oe.receiveShadow=W.receiveShadow,gt.setValue(A,"receiveShadow",W.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(Nt.envMapIntensity.value=N.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=IT()),hi){if(gt.setValue(A,"toneMappingExposure",I.toneMappingExposure),Oe.needsLights&&en(Nt,Xi),Te&&z.fog===!0&&U.refreshFogUniforms(Nt,Te),U.refreshMaterialUniforms(Nt,z,qe,nt,T.state.transmissionRenderTarget[E.id]),Oe.needsLights&&Oe.lightProbeGrid){const vt=Oe.lightProbeGrid;Nt.probesSH.value=vt.texture,Nt.probesMin.value.copy(vt.boundingBox.min),Nt.probesMax.value.copy(vt.boundingBox.max),Nt.probesResolution.value.copy(vt.resolution)}Ll.upload(A,It(Oe),Nt,y)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ll.upload(A,It(Oe),Nt,y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&gt.setValue(A,"center",W.center),gt.setValue(A,"modelViewMatrix",W.modelViewMatrix),gt.setValue(A,"normalMatrix",W.normalMatrix),gt.setValue(A,"modelMatrix",W.matrixWorld),z.uniformsGroups!==void 0){const vt=z.uniformsGroups;for(let Ci=0,pi=vt.length;Ci<pi;Ci++){const ii=vt[Ci];K.update(ii,Fn),K.bind(ii,Fn)}}return Fn}function en(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Rn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,N,j){const z=R.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),R.get(E.texture).__webglTexture=N,R.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:j,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const j=R.get(E);j.__webglFramebuffer=N,j.__useDefaultFramebuffer=N===void 0};const zt=A.createFramebuffer();this.setRenderTarget=function(E,N=0,j=0){F=E,J=N,ne=j;let z=null,W=!1,Te=!1;if(E){const Ce=R.get(E);if(Ce.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(A.FRAMEBUFFER,Ce.__webglFramebuffer),G.copy(E.viewport),ee.copy(E.scissor),oe=E.scissorTest,he.viewport(G),he.scissor(ee),he.setScissorTest(oe),$=-1;return}else if(Ce.__webglFramebuffer===void 0)y.setupRenderTarget(E);else if(Ce.__hasExternalTextures)y.rebindTextures(E,R.get(E.texture).__webglTexture,R.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const $e=E.depthTexture;if(Ce.__boundDepthTexture!==$e){if($e!==null&&R.has($e)&&(E.width!==$e.image.width||E.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(E)}}const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Te=!0);const Ge=R.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ge[N])?z=Ge[N][j]:z=Ge[N],W=!0):E.samples>0&&y.useMultisampledRTT(E)===!1?z=R.get(E).__webglMultisampledFramebuffer:Array.isArray(Ge)?z=Ge[j]:z=Ge,G.copy(E.viewport),ee.copy(E.scissor),oe=E.scissorTest}else G.copy(Z).multiplyScalar(qe).floor(),ee.copy(fe).multiplyScalar(qe).floor(),oe=ce;if(j!==0&&(z=zt),he.bindFramebuffer(A.FRAMEBUFFER,z)&&he.drawBuffers(E,z),he.viewport(G),he.scissor(ee),he.setScissorTest(oe),W){const Ce=R.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ce.__webglTexture,j)}else if(Te){const Ce=N;for(let ze=0;ze<E.textures.length;ze++){const Ge=R.get(E.textures[ze]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+ze,Ge.__webglTexture,j,Ce)}}else if(E!==null&&j!==0){const Ce=R.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ce.__webglTexture,j)}$=-1},this.readRenderTargetPixels=function(E,N,j,z,W,Te,Ne,Ce=0){if(!(E&&E.isWebGLRenderTarget)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=R.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze){he.bindFramebuffer(A.FRAMEBUFFER,ze);try{const Ge=E.textures[Ce],$e=Ge.format,Ze=Ge.type;if(E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ce),!Le.textureFormatReadable($e)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Ze)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-z&&j>=0&&j<=E.height-W&&A.readPixels(N,j,z,W,L.convert($e),L.convert(Ze),Te)}finally{const Ge=F!==null?R.get(F).__webglFramebuffer:null;he.bindFramebuffer(A.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(E,N,j,z,W,Te,Ne,Ce=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=R.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne]),ze)if(N>=0&&N<=E.width-z&&j>=0&&j<=E.height-W){he.bindFramebuffer(A.FRAMEBUFFER,ze);const Ge=E.textures[Ce],$e=Ge.format,Ze=Ge.type;if(E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ce),!Le.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Xe),A.bufferData(A.PIXEL_PACK_BUFFER,Te.byteLength,A.STREAM_READ),A.readPixels(N,j,z,W,L.convert($e),L.convert(Ze),0);const mt=F!==null?R.get(F).__webglFramebuffer:null;he.bindFramebuffer(A.FRAMEBUFFER,mt);const Mt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await QS(A,Mt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Xe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Te),A.deleteBuffer(Xe),A.deleteSync(Mt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,j=0){const z=Math.pow(2,-j),W=Math.floor(E.image.width*z),Te=Math.floor(E.image.height*z),Ne=N!==null?N.x:0,Ce=N!==null?N.y:0;y.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,j,0,0,Ne,Ce,W,Te),he.unbindTexture()};const ti=A.createFramebuffer(),Cn=A.createFramebuffer();this.copyTextureToTexture=function(E,N,j=null,z=null,W=0,Te=0){let Ne,Ce,ze,Ge,$e,Ze,Xe,mt,Mt;const Bt=E.isCompressedTexture?E.mipmaps[Te]:E.image;if(j!==null)Ne=j.max.x-j.min.x,Ce=j.max.y-j.min.y,ze=j.isBox3?j.max.z-j.min.z:1,Ge=j.min.x,$e=j.min.y,Ze=j.isBox3?j.min.z:0;else{const Nt=Math.pow(2,-W);Ne=Math.floor(Bt.width*Nt),Ce=Math.floor(Bt.height*Nt),E.isDataArrayTexture?ze=Bt.depth:E.isData3DTexture?ze=Math.floor(Bt.depth*Nt):ze=1,Ge=0,$e=0,Ze=0}z!==null?(Xe=z.x,mt=z.y,Mt=z.z):(Xe=0,mt=0,Mt=0);const Et=L.convert(N.format),Kt=L.convert(N.type);let Oe;N.isData3DTexture?(y.setTexture3D(N,0),Oe=A.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(y.setTexture2DArray(N,0),Oe=A.TEXTURE_2D_ARRAY):(y.setTexture2D(N,0),Oe=A.TEXTURE_2D),he.activeTexture(A.TEXTURE0),he.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),he.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),he.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);const cn=he.getParameter(A.UNPACK_ROW_LENGTH),ct=he.getParameter(A.UNPACK_IMAGE_HEIGHT),Fn=he.getParameter(A.UNPACK_SKIP_PIXELS),bn=he.getParameter(A.UNPACK_SKIP_ROWS),hi=he.getParameter(A.UNPACK_SKIP_IMAGES);he.pixelStorei(A.UNPACK_ROW_LENGTH,Bt.width),he.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Bt.height),he.pixelStorei(A.UNPACK_SKIP_PIXELS,Ge),he.pixelStorei(A.UNPACK_SKIP_ROWS,$e),he.pixelStorei(A.UNPACK_SKIP_IMAGES,Ze);const Xi=E.isDataArrayTexture||E.isData3DTexture,gt=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const Nt=R.get(E),ni=R.get(N),vt=R.get(Nt.__renderTarget),Ci=R.get(ni.__renderTarget);he.bindFramebuffer(A.READ_FRAMEBUFFER,vt.__webglFramebuffer),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let pi=0;pi<ze;pi++)Xi&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,R.get(E).__webglTexture,W,Ze+pi),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,R.get(N).__webglTexture,Te,Mt+pi)),A.blitFramebuffer(Ge,$e,Ne,Ce,Xe,mt,Ne,Ce,A.DEPTH_BUFFER_BIT,A.NEAREST);he.bindFramebuffer(A.READ_FRAMEBUFFER,null),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||R.has(E)){const Nt=R.get(E),ni=R.get(N);he.bindFramebuffer(A.READ_FRAMEBUFFER,ti),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,Cn);for(let vt=0;vt<ze;vt++)Xi?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Nt.__webglTexture,W,Ze+vt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Nt.__webglTexture,W),gt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ni.__webglTexture,Te,Mt+vt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ni.__webglTexture,Te),W!==0?A.blitFramebuffer(Ge,$e,Ne,Ce,Xe,mt,Ne,Ce,A.COLOR_BUFFER_BIT,A.NEAREST):gt?A.copyTexSubImage3D(Oe,Te,Xe,mt,Mt+vt,Ge,$e,Ne,Ce):A.copyTexSubImage2D(Oe,Te,Xe,mt,Ge,$e,Ne,Ce);he.bindFramebuffer(A.READ_FRAMEBUFFER,null),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else gt?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(Oe,Te,Xe,mt,Mt,Ne,Ce,ze,Et,Kt,Bt.data):N.isCompressedArrayTexture?A.compressedTexSubImage3D(Oe,Te,Xe,mt,Mt,Ne,Ce,ze,Et,Bt.data):A.texSubImage3D(Oe,Te,Xe,mt,Mt,Ne,Ce,ze,Et,Kt,Bt):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Te,Xe,mt,Ne,Ce,Et,Kt,Bt.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Te,Xe,mt,Bt.width,Bt.height,Et,Bt.data):A.texSubImage2D(A.TEXTURE_2D,Te,Xe,mt,Ne,Ce,Et,Kt,Bt);he.pixelStorei(A.UNPACK_ROW_LENGTH,cn),he.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ct),he.pixelStorei(A.UNPACK_SKIP_PIXELS,Fn),he.pixelStorei(A.UNPACK_SKIP_ROWS,bn),he.pixelStorei(A.UNPACK_SKIP_IMAGES,hi),Te===0&&N.generateMipmaps&&A.generateMipmap(Oe),he.unbindTexture()},this.initRenderTarget=function(E){R.get(E).__webglFramebuffer===void 0&&y.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?y.setTextureCube(E,0):E.isData3DTexture?y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?y.setTexture2DArray(E,0):y.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){J=0,ne=0,F=null,he.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),n.unpackColorSpace=dt._getUnpackColorSpace()}}const dl=.85,UT=1.4,Xm=.35;function Uo(t){let e=(t+1)*2654435761>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967295)}function FT({lampsRef:t,trackedRef:e,lookaheadRef:n,baselineRef:i,agentsRef:r,pausedRef:s,spawnPed:o}){const a=wt.useRef(null);return wt.useEffect(()=>{const l=a.current,c=l.clientWidth,p=l.clientHeight,h=new py;h.background=new ot(131589),h.fog=new Ch(133656,.009);const f=new qn(72,c/p,.1,300);f.position.set(0,1.7,0),f.lookAt(0,1.7,-100);const g=new NT({antialias:!0});g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setSize(c,p),g.shadowMap.enabled=!0,g.shadowMap.type=s_,g.toneMapping=vh,g.toneMappingExposure=1,l.appendChild(g.domElement),h.add(new Fy(526348,.05));const S=new Je({color:921102,roughness:.95,metalness:0}),w=new ge(new tn(8,600),S);w.rotation.x=-Math.PI/2,w.position.set(0,0,-300),w.receiveShadow=!0,h.add(w);const _=new Je({color:1579030,roughness:.92}),u=new ge(new tn(4.5,600),_);u.rotation.x=-Math.PI/2,u.position.set(-6.25,.005,-300),u.receiveShadow=!0,h.add(u);const m=new ge(new tn(4.5,600),_);m.rotation.x=-Math.PI/2,m.position.set(6.25,.005,-300),m.receiveShadow=!0,h.add(m);const v=new Je({color:2763304}),M=new et(.14,.14,600),b=new ge(M,v);b.position.set(-4.06,.07,-300),h.add(b);const T=new ge(M,v);T.position.set(4.06,.07,-300),h.add(T);const P=40,x=8,C=new si({color:15263976}),I=new et(.12,.01,3.2),D=[];for(let U=0;U<P;U++){const H=new ge(I,C);H.position.set(0,.01,-U*x),h.add(H),D.push(H)}const O=new Wn,J=[],ne=Uo(777);for(let U=0;U<280;U++){const H=ne()*Math.PI*2,ie=ne()*Math.PI*.48,me=180;J.push(me*Math.sin(ie)*Math.cos(H),me*Math.cos(ie)+30,me*Math.sin(ie)*Math.sin(H)-80)}O.setAttribute("position",new sn(J,3));const F=new C_({color:16777215,size:1.4,sizeAttenuation:!1,fog:!1});h.add(new wy(O,F));const $=10,X=22,G=14,ee=11,oe=-12.5,Ee=12.5,be=[],tt=[],nt=[],qe=new Je({color:3022101,roughness:.92}),d=new Je({color:667154,roughness:.88}),B=new Je({color:8947864,roughness:.6}),Z=new Je({color:7829384,roughness:.6}),fe=new Je({color:4473941,roughness:.5}),ce=new Je({emissive:new ot(16772795),emissiveIntensity:3,color:1118481});function _e(){const U=document.createElement("canvas");U.width=128,U.height=128;const H=U.getContext("2d"),ie=H.createRadialGradient(64,64,0,64,64,64);return ie.addColorStop(0,"rgba(255, 220, 100, 0.85)"),ie.addColorStop(.25,"rgba(255, 200, 80,  0.45)"),ie.addColorStop(.55,"rgba(250, 175, 55,  0.14)"),ie.addColorStop(.8,"rgba(250, 155, 30,  0.04)"),ie.addColorStop(1,"rgba(250, 140, 20,  0)"),H.fillStyle=ie,H.fillRect(0,0,128,128),new Ty(U)}const Ve=_e(),Ie=[12367790,11183516,10195849,5789268,3290427,9132610,4873550,10779733,2768458,6508359],ue=[12064800,1723050,1734704,8930304,6953610,1599608];function je(U,H){const ie=Uo(H*73+(U==="left"?0:333)),me=Uo(H*131+(U==="left"?0:700)),Y=new pn,re=U==="left",Pe=re?ee/2:-ee/2,le=re?1:-1,ke=ie();let L="building";if(H>0&&H<$-1){const xe=Uo((H-1)*73+(U==="left"?0:333))();H-1>0&&xe<.3||(ke<.1?L="park":ke<.22?L="playground":ke<.3&&(L="parking"))}if(L==="building"){const K=6+ie()*4,xe=K,se=G-K,te=7+ie()*16,we=6+ie()*14,Re=Ie[Math.floor(ie()*Ie.length)],Se=Ie[Math.floor(ie()*Ie.length)],Fe=-G/2+xe/2,Ke=G/2-se/2,st=(Ye,lt,Lt,Wt,Ct)=>{const Rt=new Je({color:Lt,roughness:.88,metalness:.03}),Xt=new et(ee,Ye,lt),It=new ge(Xt,Rt);It.castShadow=!0,It.receiveShadow=!0,It.position.set(0,Ye/2,Wt),Y.add(It);const bt=Uo(Ct),_t=Math.max(2,Math.round(lt/2.8)),ln=Math.max(2,Math.round((Ye-3.5)/3)),en=lt/_t*.52,Rn=(Ye-3.5)/ln*.55,zt=re?Math.PI/2:-Math.PI/2;for(let ti=0;ti<_t;ti++)for(let Cn=0;Cn<ln;Cn++){const E=bt()<.18,N=new Je({color:E?16762220:658448,roughness:E?.3:.05,metalness:E?0:.9,emissive:E?new ot(16747546):new ot(0),emissiveIntensity:E?1.5:0}),j=new ge(new tn(Rn,en),N);j.rotation.y=zt;const z=Wt-lt/2+(ti+.5)*(lt/_t),W=3.5+(Cn+.5)*((Ye-3.5)/ln);j.position.set(Pe+le*.06,W,z),Y.add(j)}};st(te,xe,Re,Fe,H*17+(U==="left"?0:500)),st(we,se,Se,Ke,H*31+(U==="left"?100:600));const yt=Ye=>{const lt=[2757126,921632,925712,1705992],Lt=new Je({color:lt[Math.floor(me()*lt.length)],roughness:.85}),Wt=new ge(new et(.08,2.3,1.1),Lt);Wt.position.set(Pe+le*.04,1.15,Ye),Y.add(Wt);const Ct=new Je({color:3354664,roughness:.7}),Rt=new ge(new et(.06,2.45,1.3),Ct);Rt.position.set(Pe+le*.03,1.225,Ye),Y.add(Rt);const Xt=new Je({color:13148208,roughness:.2,metalness:.95}),It=new ge(new Ys(.055,7,5),Xt);It.position.set(Pe+le*.1,1.05,Ye+.28),Y.add(It)};yt(Fe),yt(Ke);const Ot=me()<.4;if(Ot){const Ye=new Je({color:791840,roughness:.05,metalness:.6,transparent:!0,opacity:.55}),lt=xe*.6,Lt=new ge(new et(.07,2.5,lt),Ye);Lt.position.set(Pe+le*.035,1.25,Fe),Y.add(Lt)}if(me()<.38){const Ye=new Je({color:ue[Math.floor(me()*ue.length)],roughness:.95,side:Ui}),lt=se*.65,Lt=new ge(new et(.07,1.1,lt),Ye);Lt.rotation.z=le*.38,Lt.position.set(Pe+le*.65,3.05,Ke),Y.add(Lt)}if(Ot&&me()<.4){const Ye=new Je({color:1708552,roughness:.85});for(let lt=0;lt<2;lt++){const Lt=Fe+(lt-.5)*3.2,Wt=new ge(new et(.65,.055,.65),Ye);Wt.position.set(Pe+le*.45,.74,Lt),Y.add(Wt);const Ct=new ge(new hn(.035,.035,.74,5),Ye);Ct.position.set(Pe+le*.45,.37,Lt),Y.add(Ct);for(const Rt of[-.5,.5]){const Xt=new ge(new et(.38,.055,.38),Ye);Xt.position.set(Pe+le*.45,.44,Lt+Rt),Y.add(Xt);const It=new ge(new et(.38,.42,.055),Ye);It.position.set(Pe+le*.45,.66,Lt+Rt+(Rt>0?.16:-.16)),Y.add(It)}}}}else if(L==="park"){const K=new Je({color:1719326,roughness:.95}),xe=new et(30,.04,10),se=new ge(xe,K);se.position.set(le*-10,.02,0),se.receiveShadow=!0,Y.add(se);const te=new Je({color:4011317,roughness:.88,metalness:.03}),we=new et(30,14,9.8),Re=new ge(we,te);Re.position.set(le*-10,7,-9.9),Re.castShadow=!0,Re.receiveShadow=!0,Y.add(Re);const Se=new ge(we,te);Se.position.set(le*-10,7,9.9),Se.castShadow=!0,Se.receiveShadow=!0,Y.add(Se);const Fe=new tn(.8,1.2),Ke=new Je({color:16762220,roughness:.3,emissive:new ot(16747546),emissiveIntensity:1.5}),st=new Je({color:658448,roughness:.05,metalness:.9});for(const E of[le*-2,le*-6])for(const N of[3.2,7.2]){const j=me()<.25,z=new ge(Fe,j?Ke:st);z.position.set(E,N,-4.99),Y.add(z)}for(const E of[le*-2,le*-6])for(const N of[3.2,7.2]){const j=me()<.25,z=new ge(Fe,j?Ke:st);z.rotation.y=Math.PI,z.position.set(E,N,4.99),Y.add(z)}const yt=new pn,Ot=new ge(new hn(.05,.08,1.6,5),qe);Ot.position.set(0,.8,0),Ot.castShadow=!0,Ot.receiveShadow=!0,yt.add(Ot);const Pt=new ge(new es(.65,1),d);Pt.position.set(0,1.9,0),Pt.castShadow=!0,Pt.receiveShadow=!0,yt.add(Pt);const $t=new ge(new es(.5,1),d);$t.position.set(.04,2.35,0),$t.castShadow=!0,$t.receiveShadow=!0,yt.add($t),yt.position.set(le*-2.5,0,2),Y.add(yt);const Ye=new pn,lt=new Je({color:6045747,roughness:.9}),Lt=new Je({color:1710618,roughness:.6}),Wt=new ge(new et(.6,.05,1.8),lt);Wt.position.set(0,.45,0),Wt.castShadow=!0,Wt.receiveShadow=!0,Ye.add(Wt);const Ct=new ge(new et(.05,.4,1.8),lt);Ct.position.set(le*-.28,.7,0),Ct.castShadow=!0,Ct.receiveShadow=!0,Ye.add(Ct);const Rt=new et(.06,.45,.6),Xt=new ge(Rt,Lt);Xt.position.set(0,.225,-.8),Xt.castShadow=!0,Ye.add(Xt);const It=new ge(Rt,Lt);It.position.set(0,.225,.8),It.castShadow=!0,Ye.add(It),Ye.position.set(le*2,0,-1.8),Ye.rotation.y=re?-Math.PI/2:Math.PI/2,Y.add(Ye);const bt=new pn,_t=new ge(new et(.5,.08,.08),fe);_t.position.set(0,0,.25),bt.add(_t);const ln=new ge(new et(.3,.1,.3),fe);ln.position.set(0,-.05,.45),bt.add(ln);const en=new si({color:16771743,transparent:!0,opacity:1}),Rn=new ge(new tn(.22,.22),en);Rn.rotation.x=Math.PI/2,Rn.position.set(0,-.11,.45),bt.add(Rn);const zt=new cl(16756800,15,12,2);zt.position.set(0,-.15,.45),zt.castShadow=!0,zt.shadow.mapSize.width=128,zt.shadow.mapSize.height=128,bt.add(zt);const ti=new si({map:Ve,transparent:!0,opacity:.7,depthWrite:!1,blending:Qr}),Cn=new ge(new tn(9,9),ti);Cn.rotation.x=-Math.PI/2,Cn.position.set(0,-4.38,.45),bt.add(Cn),bt.position.set(le*-2,4.4,-4.95),Y.add(bt),nt.push({point:zt,ledMesh:Rn,pool:Cn,parentGroup:Y,localZOffset:-4.5,maxIntensity:15,maxPoolOpacity:.7})}else if(L==="playground"){const K=new Je({color:2046755,roughness:.95}),xe=new et(30,.04,10),se=new ge(xe,K);se.position.set(le*-10,.02,0),se.receiveShadow=!0,Y.add(se);const te=new Je({color:4011317,roughness:.88,metalness:.03}),we=new et(30,14,9.8),Re=new ge(we,te);Re.position.set(le*-10,7,-9.9),Re.castShadow=!0,Re.receiveShadow=!0,Y.add(Re);const Se=new ge(we,te);Se.position.set(le*-10,7,9.9),Se.castShadow=!0,Se.receiveShadow=!0,Y.add(Se);const Fe=new tn(.8,1.2),Ke=new Je({color:16762220,roughness:.3,emissive:new ot(16747546),emissiveIntensity:1.5}),st=new Je({color:658448,roughness:.05,metalness:.9});for(const ii of[le*-2,le*-6])for(const ji of[3.2,7.2]){const Hr=me()<.25,xs=new ge(Fe,Hr?Ke:st);xs.position.set(ii,ji,-4.99),Y.add(xs)}for(const ii of[le*-2,le*-6])for(const ji of[3.2,7.2]){const Hr=me()<.25,xs=new ge(Fe,Hr?Ke:st);xs.rotation.y=Math.PI,xs.position.set(ii,ji,4.99),Y.add(xs)}const yt=new Je({color:13421772,roughness:.5,metalness:.7}),Ot=new ge(new et(.04,.08,9.8),yt);Ot.position.set(le*-4.8,.45,0),Ot.castShadow=!0,Y.add(Ot);const Pt=new ge(new et(.04,.08,9.8),yt);Pt.position.set(le*-4.8,.95,0),Pt.castShadow=!0,Y.add(Pt);const $t=new hn(.03,.03,1.2,6);for(let ii=-4.5;ii<=4.5;ii+=2.25){const ji=new ge($t,yt);ji.position.set(le*-4.8,.6,ii),ji.castShadow=!0,Y.add(ji)}const Ye=new pn,lt=new Je({color:9132587,roughness:.85}),Lt=new Je({color:14537387,roughness:.95}),Wt=new ge(new et(1.6,.1,1.6),Lt);Wt.position.set(0,.05,0),Wt.receiveShadow=!0,Ye.add(Wt);const Ct=.1,Rt=.16,Xt=1.8,It=new et(Xt,Rt,Ct),bt=new ge(It,lt);bt.position.set(0,Rt/2,(Xt-Ct)/2),bt.castShadow=!0,bt.receiveShadow=!0,Ye.add(bt);const _t=new ge(It,lt);_t.position.set(0,Rt/2,-1.7/2),_t.castShadow=!0,_t.receiveShadow=!0,Ye.add(_t);const ln=new et(Ct,Rt,Xt-Ct*2),en=new ge(ln,lt);en.position.set((Xt-Ct)/2,Rt/2,0),en.castShadow=!0,en.receiveShadow=!0,Ye.add(en);const Rn=new ge(ln,lt);Rn.position.set(-1.7/2,Rt/2,0),Rn.castShadow=!0,Rn.receiveShadow=!0,Ye.add(Rn),Ye.position.set(le*-1.8,0,2),Y.add(Ye);const zt=new pn,ti=new Je({color:6045747,roughness:.9}),Cn=new Je({color:1710618,roughness:.6}),E=new ge(new et(.6,.05,1.8),ti);E.position.set(0,.45,0),E.castShadow=!0,E.receiveShadow=!0,zt.add(E);const N=new ge(new et(.05,.4,1.8),ti);N.position.set(le*-.28,.7,0),N.castShadow=!0,N.receiveShadow=!0,zt.add(N);const j=new et(.06,.45,.6),z=new ge(j,Cn);z.position.set(0,.225,-.8),z.castShadow=!0,zt.add(z);const W=new ge(j,Cn);W.position.set(0,.225,.8),W.castShadow=!0,zt.add(W),zt.position.set(le*2,0,-2),zt.rotation.y=re?-Math.PI/2:Math.PI/2,Y.add(zt);const Te=new pn,Ne=new Je({color:2664261,roughness:.8}),Ce=new Je({color:14431557,roughness:.7}),ze=new ge(new et(.8,1,.8),Ne);ze.position.set(0,.5,0),ze.castShadow=!0,ze.receiveShadow=!0,Te.add(ze);const Ge=new Je({color:13421772,roughness:.4,metalness:.8});for(let ii of[-.35,.35])for(let ji of[-.35,.35]){const Hr=new ge(new hn(.015,.015,.8,4),Ge);Hr.position.set(ii,1.4,ji),Hr.castShadow=!0,Te.add(Hr)}const $e=new ge(new ac(.65,.4,4),Ce);$e.rotation.y=Math.PI/4,$e.position.set(0,1.9,0),$e.castShadow=!0,Te.add($e);const Ze=new ge(new et(2,.06,.6),Ce);Ze.rotation.z=-le*.4,Ze.position.set(le*.85,.5,0),Ze.castShadow=!0,Ze.receiveShadow=!0,Te.add(Ze);const Xe=new ge(new et(.8,.3,.3),Ne);Xe.position.set(0,.15,-.55),Xe.castShadow=!0,Te.add(Xe);const mt=new ge(new et(.8,.6,.3),Ne);mt.position.set(0,.3,-.85),mt.castShadow=!0,Te.add(mt),Te.position.set(le*-2.4,0,-2),Y.add(Te);const Mt=new pn,Bt=new Je({color:16761095,roughness:.8}),Et=new ge(new hn(.025,.025,2,4),Ge);Et.rotation.z=.22,Et.position.set(-.2,.95,-.9),Et.castShadow=!0,Mt.add(Et);const Kt=new ge(new hn(.025,.025,2,4),Ge);Kt.rotation.z=-.22,Kt.position.set(.2,.95,-.9),Kt.castShadow=!0,Mt.add(Kt);const Oe=new ge(new hn(.025,.025,2,4),Ge);Oe.rotation.z=.22,Oe.position.set(-.2,.95,.9),Oe.castShadow=!0,Mt.add(Oe);const cn=new ge(new hn(.025,.025,2,4),Ge);cn.rotation.z=-.22,cn.position.set(.2,.95,.9),cn.castShadow=!0,Mt.add(cn);const ct=new ge(new et(.06,.06,2),Bt);ct.position.set(0,1.9,0),ct.castShadow=!0,Mt.add(ct);const Fn=new Je({color:14431557,roughness:.9}),bn=new ge(new et(.24,.02,.38),Fn);bn.position.set(0,.45,0),bn.castShadow=!0,bn.receiveShadow=!0,Mt.add(bn);const hi=new ge(new hn(.005,.005,1.45,4),Ge);hi.position.set(0,1.175,-.12),Mt.add(hi);const Xi=new ge(new hn(.005,.005,1.45,4),Ge);Xi.position.set(0,1.175,.12),Mt.add(Xi),Mt.position.set(le*.5,0,0),Y.add(Mt);const gt=new pn,Nt=new ge(new hn(.045,.055,3.2,6),new Je({color:1548984,roughness:.6}));Nt.position.set(0,1.6,0),Nt.castShadow=!0,gt.add(Nt);const ni=new ge(new Ys(.18,8,8),new Je({emissive:new ot(16773296),emissiveIntensity:3,color:2236962}));ni.position.set(0,3.2,0),gt.add(ni);const vt=new cl(16771743,10,9,2);vt.position.set(0,3.2,0),vt.castShadow=!0,vt.shadow.mapSize.width=128,vt.shadow.mapSize.height=128,gt.add(vt);const Ci=new si({map:Ve,transparent:!0,opacity:.6,depthWrite:!1,blending:Qr}),pi=new ge(new tn(8,8),Ci);pi.rotation.x=-Math.PI/2,pi.position.set(0,.022,0),gt.add(pi),gt.position.set(le*-1.5,0,1.5),Y.add(gt),nt.push({point:vt,bulb:ni,pool:pi,parentGroup:Y,localZOffset:1.5,maxIntensity:10,maxPoolOpacity:.6})}else if(L==="parking"){const K=new Je({color:1118483,roughness:.92}),xe=new et(30,.02,10),se=new ge(xe,K);se.position.set(le*-10,.01,0),se.receiveShadow=!0,Y.add(se);const te=new Je({color:4011317,roughness:.88,metalness:.03}),we=new et(30,14,9.8),Re=new ge(we,te);Re.position.set(le*-10,7,-9.9),Re.castShadow=!0,Re.receiveShadow=!0,Y.add(Re);const Se=new ge(we,te);Se.position.set(le*-10,7,9.9),Se.castShadow=!0,Se.receiveShadow=!0,Y.add(Se);const Fe=new tn(.8,1.2),Ke=new Je({color:16762220,roughness:.3,emissive:new ot(16747546),emissiveIntensity:1.5}),st=new Je({color:658448,roughness:.05,metalness:.9});for(const bt of[le*-2,le*-6])for(const _t of[3.2,7.2]){const ln=me()<.25,en=new ge(Fe,ln?Ke:st);en.position.set(bt,_t,-4.99),Y.add(en)}for(const bt of[le*-2,le*-6])for(const _t of[3.2,7.2]){const ln=me()<.25,en=new ge(Fe,ln?Ke:st);en.rotation.y=Math.PI,en.position.set(bt,_t,4.99),Y.add(en)}const yt=new si({color:16777215,transparent:!0,opacity:.7}),Ot=new tn(6,.12),Pt=[-4.5,-1.5,1.5,4.5];for(const bt of Pt){const _t=new ge(Ot,yt);_t.rotation.x=-Math.PI/2,_t.position.set(0,.015,bt),Y.add(_t)}const $t=[-3,0,3];for(let bt=0;bt<$t.length;bt++){if(me()<.2)continue;const _t=new pn,ln=[10230300,1720476,2236962,8028304,4880988,13935475],en=ln[Math.floor(me()*ln.length)],Rn=new Je({color:en,roughness:.2,metalness:.8}),zt=new Je({color:1118481,roughness:.9}),ti=new Je({color:1053206,roughness:.05,metalness:.9}),Cn=new et(1.8,.6,3.8),E=new ge(Cn,Rn);E.position.set(0,.55,0),E.castShadow=!0,E.receiveShadow=!0,_t.add(E);const N=new et(1.6,.55,2.2),j=new ge(N,ti);j.position.set(0,1.05,-.2),j.castShadow=!0,_t.add(j);const z=new hn(.28,.28,.25,8),W=new ge(z,zt);W.rotation.z=Math.PI/2,W.position.set(-.9,.28,1),W.castShadow=!0,_t.add(W);const Te=new ge(z,zt);Te.rotation.z=Math.PI/2,Te.position.set(.9,.28,1),Te.castShadow=!0,_t.add(Te);const Ne=new ge(z,zt);Ne.rotation.z=Math.PI/2,Ne.position.set(-.9,.28,-1),Ne.castShadow=!0,_t.add(Ne);const Ce=new ge(z,zt);Ce.rotation.z=Math.PI/2,Ce.position.set(.9,.28,-1),Ce.castShadow=!0,_t.add(Ce);const ze=new Ys(.08,6,6),Ge=new si({color:16773296}),$e=new ge(ze,Ge);$e.position.set(-.6,.55,1.9),_t.add($e);const Ze=new ge(ze,Ge);Ze.position.set(.6,.55,1.9),_t.add(Ze);const Xe=re?Math.PI/2:-Math.PI/2;_t.rotation.y=Xe+(me()*.1-.05);const mt=me()*.6-.3;_t.position.set(le*-1+mt,0,$t[bt]),Y.add(_t)}const Ye=new pn,lt=new ge(new et(.5,.08,.08),fe);lt.position.set(0,0,.25),Ye.add(lt);const Lt=new ge(new et(.3,.1,.3),fe);Lt.position.set(0,-.05,.45),Ye.add(Lt);const Wt=new si({color:16771743,transparent:!0,opacity:1}),Ct=new ge(new tn(.22,.22),Wt);Ct.rotation.x=Math.PI/2,Ct.position.set(0,-.11,.45),Ye.add(Ct);const Rt=new cl(16756800,15,12,2);Rt.position.set(0,-.15,.45),Rt.castShadow=!0,Rt.shadow.mapSize.width=128,Rt.shadow.mapSize.height=128,Ye.add(Rt);const Xt=new si({map:Ve,transparent:!0,opacity:.7,depthWrite:!1,blending:Qr}),It=new ge(new tn(9,9),Xt);It.rotation.x=-Math.PI/2,It.position.set(0,-4.38,.45),Ye.add(It),Ye.position.set(le*-2,4.4,-4.95),Y.add(Ye),nt.push({point:Rt,ledMesh:Ct,pool:It,parentGroup:Y,localZOffset:-4.5,maxIntensity:15,maxPoolOpacity:.7})}const de=U==="left"?oe:Ee;return Y.position.set(de,0,-H*X-G/2),h.add(Y),{group:Y,index:H}}for(let U=0;U<$;U++)be.push(je("left",U)),tt.push(je("right",U));const We=8,Ae=48,Me=[],rt=[];function A(U,H){const ie=U==="left",me=ie?-5.3:5.3,Y=new pn,re=new ge(new hn(.07,.11,2,5),qe);re.position.set(0,1,0),re.castShadow=!0,re.receiveShadow=!0,Y.add(re);const Pe=new ge(new es(.85,1),d);Pe.position.set(0,2.3,0),Pe.castShadow=!0,Pe.receiveShadow=!0,Y.add(Pe);const le=new ge(new es(.72,1),d);le.position.set(ie?.05:-.05,2.9,0),le.castShadow=!0,le.receiveShadow=!0,Y.add(le);const ke=new ge(new es(.55,1),d);ke.position.set(0,3.4,0),ke.castShadow=!0,ke.receiveShadow=!0,Y.add(ke);const L=U==="right"?Ae/2:0;return Y.position.set(me,0,-H*Ae-L-4),h.add(Y),{group:Y,index:H,side:U}}for(let U=0;U<We;U++)Me.push(A("left",U)),rt.push(A("right",U));const ve=32,De=11,Le=6,he=1.4,ft=[],R=[];function y(U,H){const ie=U==="left",me=ie?-4.35:4.35,Y=ie?he:-he,re=me+Y,Pe=new pn,le=new ge(new hn(.045,.065,Le,6),B);le.position.set(me,Le/2,0),le.castShadow=!0,Pe.add(le);const ke=new ge(new et(Math.abs(Y),.06,.06),Z);ke.position.set(me+Y/2,Le+.05,0),Pe.add(ke);const L=new ge(new ac(.22,.22,8),fe);L.rotation.x=Math.PI,L.position.set(re,Le-.1,0),Pe.add(L);const de=ce.clone(),K=new ge(new Ys(.08,8,6),de);K.position.set(re,Le,0),Pe.add(K);const xe=new cl(16765024,18,13,2);xe.position.set(re,Le,0),xe.castShadow=!0,xe.shadow.mapSize.width=256,xe.shadow.mapSize.height=256,Pe.add(xe);const se=new si({map:Ve,transparent:!0,opacity:.75,depthWrite:!1,blending:Qr}),te=new ge(new tn(14,14),se);te.rotation.x=-Math.PI/2,te.position.set(re*.3,.012,0),Pe.add(te);const we=new si({map:Ve,transparent:!0,opacity:.28,depthWrite:!1,blending:Qr}),Re=new ge(new tn(26,26),we);Re.rotation.x=-Math.PI/2,Re.position.set(re*.25,.011,0),Pe.add(Re);const Se=U==="right"?De/2:0;return Pe.position.set(0,0,-H*De-Se-8),h.add(Pe),{group:Pe,point:xe,bulb:K,pool:te,poolOuter:Re,index:H,side:U}}for(let U=0;U<ve;U++)ft.push(y("left",U)),R.push(y("right",U));const k=document.createElement("div");k.style.cssText=`
      position:absolute;bottom:28px;left:0;right:0;text-align:center;
      color:rgba(255,255,255,0.45);font:12px/1 Inter,sans-serif;
      pointer-events:none;letter-spacing:0.04em;
    `,k.textContent="the corridor stays ahead — the citizen never notices",l.style.position="relative",l.appendChild(k);const Q=new ResizeObserver(()=>{const U=l.clientWidth,H=l.clientHeight;f.aspect=U/H,f.updateProjectionMatrix(),g.setSize(U,H)});Q.observe(l);let pe=0,q=performance.now();function ae(){pe=requestAnimationFrame(ae);const U=performance.now(),H=Math.min((U-q)/1e3,.05);q=U,e.current||(e.current=r.current.find(Se=>Se.type==="ped")||o());const ie=e.current,re=(ie?Math.max(.1,Math.hypot(ie.vx,ie.vy)):UT)/Xm*Xm,Pe=(ie==null?void 0:ie.stride)??0;s.current,f.position.y=1.7+Math.sin(Pe)*.04,f.position.x=Math.sin(Pe*.5)*.012;const le=Math.max(10,n.current*8),ke=10,L=i.current*dl;function de(Se){if(Se<=0){const st=Math.abs(Se),yt=Math.max(0,1-st/8);return L+(dl-L)*yt}if(Se<=le)return dl;const Fe=Se-le,Ke=Math.min(1,Fe/ke);return dl*(1-Ke)+L*Ke}const K=[...ft,...R],xe=ve*De;for(const Se of K){s.current||(Se.group.position.z+=re*H),Se.group.position.z>5&&(Se.group.position.z-=xe);const Fe=-Se.group.position.z,Ke=de(Fe);Se.point.intensity=Ke*16,Se.bulb.material.emissiveIntensity=Ke*4.5,Se.pool.material.opacity=Ke*.7,Se.poolOuter.material.opacity=Ke*.25,Se.point.castShadow=Fe<25&&Fe>-2}const se=[...be,...tt],te=$*X;for(const Se of se)s.current||(Se.group.position.z+=re*H),Se.group.position.z>12&&(Se.group.position.z-=te);for(const Se of nt){const Ke=-(Se.parentGroup.position.z+Se.localZOffset),st=de(Ke);Se.point.intensity=st*Se.maxIntensity,Se.bulb&&(Se.bulb.material.emissiveIntensity=st*4.5),Se.ledMesh&&(Se.ledMesh.material.opacity=.3+st*.7),Se.pool.material.opacity=st*Se.maxPoolOpacity,Se.point.castShadow=Ke<25&&Ke>-2}const we=[...Me,...rt],Re=We*Ae;for(const Se of we)s.current||(Se.group.position.z+=re*H),Se.group.position.z>8&&(Se.group.position.z-=Re);for(const Se of D)s.current||(Se.position.z+=re*H),Se.position.z>4&&(Se.position.z-=P*x);g.render(h,f)}return ae(),()=>{cancelAnimationFrame(pe),Q.disconnect(),g.dispose(),l.contains(g.domElement)&&l.removeChild(g.domElement),l.contains(k)&&l.removeChild(k)}},[]),Be.jsx("div",{ref:a,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})}const Uu=80,OT=.15,BT=.13,kT=4100,zT=1.4,GT=11,hl=.35,VT=180,HT=300,WT=260,XT=200,xi=.85,H_=1,W_=2,jm=["#3a6fb5","#a83232","#2c8a4a","#5a4a8a","#c47a1a"];function Zr(t){let e=(t+1)*2654435761>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967295)}function jT(t,e){const n=[],r=[[0,.18*t-18],[.18*t+18,.5*t-18],[.5*t+18,.82*t-18],[.82*t+18,t]],s=[[0,.2*e-18],[.2*e+18,.5*e-18],[.5*e+18,.8*e-18],[.8*e+18,e]],o=["residential","commercial","office"];for(let a=0;a<4;a++)for(let l=0;l<4;l++){if(a===H_&&l===W_)continue;const c=o[(a+l)%3],[p,h]=r[a],[f,g]=s[l],S=h-p,w=g-f;if(S<12||w<12)continue;const _=Zr(a*41+l*13+7),u=2+Math.floor(_()*2),m=2+Math.floor(_()*2);for(let v=0;v<u;v++)for(let M=0;M<m;M++){if(_()<.18)continue;const b=S/u,T=w/m,P=3,x=b-P*2,C=T-P*2;x>4&&C>4&&n.push({x:p+v*b+P,y:f+M*T+P,w:x,h:C,btype:c})}}return n}function YT({mode:t}){const e=wt.useRef(null),n=wt.useRef(null),i=wt.useRef([]),r=wt.useRef([]),s=wt.useRef([]),o=wt.useRef(null),a=wt.useRef({W:0,H:0}),l=wt.useRef(t);l.current=t;const[c,p]=wt.useState(.3),[h,f]=wt.useState(4),[g,S]=wt.useState("manual"),[w,_]=wt.useState(!1),[u,m]=wt.useState({powerNow:0,powerPct:0,kwhSaved:0,eurSaved:0,co2Saved:0,peds:0,cars:0}),v=wt.useRef(c);v.current=c;const M=wt.useRef(h);M.current=h;const b=wt.useRef(g);b.current=g;const T=wt.useRef(w);T.current=w;const P=wt.useRef(0),x=wt.useRef(0),C=wt.useRef([]),I=wt.useRef([]),D=wt.useRef(null);function O(d,B){const Z=[],fe=[],ce=[.18,.5,.82];[.2,.5,.8].forEach(ve=>{fe.push({ax:0,ay:ve*B,bx:d,by:ve*B,dir:"h"})}),ce.forEach(ve=>{fe.push({ax:ve*d,ay:0,bx:ve*d,by:B,dir:"v"})});const Ve=Math.min(d,B)*.11;fe.forEach((ve,De)=>{if(ve.dir==="h")for(let Le=Ve*.5;Le<d;Le+=Ve)Z.push({x:Le,y:ve.ay-20,brightness:v.current,target:v.current,streetId:De,side:"top"}),Z.push({x:Le,y:ve.ay+20,brightness:v.current,target:v.current,streetId:De,side:"bot"});else for(let Le=Ve*.5;Le<B;Le+=Ve)Z.push({x:ve.ax-20,y:Le,brightness:v.current,target:v.current,streetId:De,side:"lft"}),Z.push({x:ve.ax+20,y:Le,brightness:v.current,target:v.current,streetId:De,side:"rgt"})}),i.current=Z,r.current=fe,C.current=jT(d,B);const Ie=18,ue=[[0,.18*d-Ie],[.18*d+Ie,.5*d-Ie],[.5*d+Ie,.82*d-Ie],[.82*d+Ie,d]],je=[[0,.2*B-Ie],[.2*B+Ie,.5*B-Ie],[.5*B+Ie,.8*B-Ie],[.8*B+Ie,B]],[We,Ae]=ue[H_],[Me,rt]=je[W_];D.current={x:We,y:Me,w:Ae-We,h:rt-Me};const A=[];fe.forEach((ve,De)=>{const Le=Zr(De*137+42);if(ve.dir==="h")for(let he=Ve;he<d;he+=Ve)Le()<.28&&A.push({x:he,y:ve.ay-20}),Le()<.2&&A.push({x:he,y:ve.ay+20});else for(let he=Ve;he<B;he+=Ve)Le()<.24&&A.push({x:ve.ax-20,y:he}),Le()<.18&&A.push({x:ve.ax+20,y:he})}),I.current=A}function J(d,B){const{W:Z,H:fe}=a.current;let ce=null,_e=1/0;for(const Ve of r.current){let Ie,ue;Ve.dir==="h"?(Ie=Math.max(0,Math.min(Z,d)),ue=Ve.ay):(Ie=Ve.ax,ue=Math.max(0,Math.min(fe,B)));const je=Math.hypot(d-Ie,B-ue);je<_e&&(_e=je,ce={s:Ve,qx:Ie,qy:ue})}return _e<50?ce:null}function ne(d,B,Z){const fe=J(d,B);if(!fe)return null;const{s:ce,qx:_e,qy:Ve}=fe,Ie=Z==="car"?GT:zT,ue=Math.random()<.5?-1:1,je={x:_e,y:Ve,vx:ce.dir==="h"?ue*Ie:0,vy:ce.dir==="v"?ue*Ie:0,type:Z,street:ce,t:0,stride:Math.random()*Math.PI*2,color:Z==="car"?jm[Math.floor(Math.random()*jm.length)]:null};return s.current.push(je),je}function F(d){const{W:B,H:Z}=a.current,fe=r.current,ce=fe[Math.floor(Math.random()*fe.length)];if(ce.dir==="h"){const _e=Math.random()<.5;ne(_e?2:B-2,ce.ay,d)}else{const _e=Math.random()<.5;ne(ce.ax,_e?2:Z-2,d)}}function $(d){const B=s.current,{W:Z,H:fe}=a.current;for(const ue of B)ue.x+=ue.vx*d/hl,ue.y+=ue.vy*d/hl,ue.t+=d,ue.stride+=d*(ue.type==="car"?0:8);s.current=B.filter(ue=>ue.x>-30&&ue.x<Z+30&&ue.y>-30&&ue.y<fe+30),o.current&&!s.current.includes(o.current)&&(o.current=s.current.find(ue=>ue.type==="ped")||null);for(const ue of s.current)for(const je of r.current){if(je===ue.street)continue;let We=!1;if(je.dir==="h"&&ue.street.dir==="v"?Math.abs(ue.y-je.ay)<4&&(We=!0):je.dir==="v"&&ue.street.dir==="h"&&Math.abs(ue.x-je.ax)<4&&(We=!0),We&&Math.random()<.012){const Ae=Math.hypot(ue.vx,ue.vy),Me=Math.random()<.5?-1:1;je.dir==="h"?(ue.vx=Me*Ae,ue.vy=0):(ue.vx=0,ue.vy=Me*Ae),ue.street=je}}for(const ue of i.current)ue.target=v.current;for(const ue of s.current){const je=ue.type==="car",We=je?HT:VT,Ae=je?XT:WT,Me=Math.max(.1,Math.hypot(ue.vx,ue.vy)),rt=ue.vx/Me,A=ue.vy/Me,ve=Me*M.current/hl;ue.x+rt*ve,ue.y+A*ve;const De=r.current.indexOf(ue.street);for(const Le of i.current){if(!(Le.streetId===De)){const R=Math.hypot(Le.x-ue.x,Le.y-ue.y);if(R<50){const y=1-R/50;Le.target=Math.max(Le.target,y)}continue}const ft=(Le.x-ue.x)*rt+(Le.y-ue.y)*A;ft>=-Ae&&ft<=ve+We&&(Le.target=1)}}for(const ue of i.current){const We=ue.target>ue.brightness?3.2:1.2,Ae=1-Math.exp(-d*We);ue.brightness+=(ue.target-ue.brightness)*Ae,Math.abs(ue.target-ue.brightness)<.01&&(ue.brightness=ue.target)}const _e=i.current.length*Uu;let Ve=0;for(const ue of i.current)Ve+=Uu*ue.brightness;const Ie=_e-Ve;return P.current+=Ie*d/36e5,{luminationPower:Ve,fullPower:_e}}function X(d,B,Z,fe,ce,_e){d.moveTo(B+_e,Z),d.arcTo(B+fe,Z,B+fe,Z+ce,_e),d.arcTo(B+fe,Z+ce,B,Z+ce,_e),d.arcTo(B,Z+ce,B,Z,_e),d.arcTo(B,Z,B+fe,Z,_e)}function G(d,B,Z){const fe=Math.sin(B.stride)*2.5,ce=Math.cos(B.stride)*1.8,_e=`rgba(240,200,160,${.6+.4*Z})`,Ve=`rgba(200,210,230,${.55+.45*Z})`;d.strokeStyle=Ve,d.lineWidth=1.4,d.beginPath(),d.moveTo(B.x-3-fe*.4,B.y),d.lineTo(B.x+3+fe*.4,B.y),d.stroke(),d.lineWidth=1.2,d.strokeStyle=`rgba(170,180,200,${.5+.5*Z})`,d.beginPath(),d.moveTo(B.x,B.y+1),d.lineTo(B.x+ce*.5,B.y+4),d.moveTo(B.x,B.y+1),d.lineTo(B.x-ce*.5,B.y+4),d.stroke(),d.fillStyle=Ve,d.beginPath(),d.ellipse(B.x,B.y,2.4,2.8,0,0,Math.PI*2),d.fill(),d.fillStyle=_e,d.beginPath(),d.arc(B.x,B.y-1.5,1.8,0,Math.PI*2),d.fill()}function ee(d,B,Z){const fe=Math.atan2(B.vy,B.vx);d.save(),d.translate(B.x,B.y),d.rotate(fe);const ce=16,_e=8;d.fillStyle="rgba(0,0,0,0.45)",d.beginPath(),X(d,-ce/2+1,-_e/2+1.5,ce,_e,2),d.fill(),d.fillStyle=B.color||"#888",d.beginPath(),X(d,-ce/2,-_e/2,ce,_e,2.2),d.fill(),d.fillStyle="rgba(255,255,255,0.18)",d.beginPath(),X(d,-ce/2+3,-_e/2+1.5,ce-8,_e-3,1.5),d.fill(),d.fillStyle=`rgba(180,210,240,${.35+.4*Z})`,d.beginPath(),d.moveTo(ce/2-5,-_e/2+1.5),d.lineTo(ce/2-2.5,-_e/2+1.5),d.lineTo(ce/2-2.5,_e/2-1.5),d.lineTo(ce/2-5,_e/2-1.5),d.closePath(),d.fill();const Ve=d.createRadialGradient(ce/2+2,0,0,ce/2+2,0,28);Ve.addColorStop(0,`rgba(255,240,200,${.55*(.7+.3*Z)})`),Ve.addColorStop(1,"rgba(255,240,200,0)"),d.fillStyle=Ve,d.beginPath(),d.moveTo(ce/2,-_e/2+1),d.lineTo(ce/2+28,-_e*1.2),d.lineTo(ce/2+28,_e*1.2),d.lineTo(ce/2,_e/2-1),d.closePath(),d.fill(),d.fillStyle="rgba(255,250,220,0.9)",d.beginPath(),d.arc(ce/2-.5,-_e/2+1.8,.9,0,Math.PI*2),d.fill(),d.beginPath(),d.arc(ce/2-.5,_e/2-1.8,.9,0,Math.PI*2),d.fill(),d.fillStyle="rgba(220,40,40,0.8)",d.beginPath(),d.arc(-ce/2+.5,-_e/2+1.8,.7,0,Math.PI*2),d.fill(),d.beginPath(),d.arc(-ce/2+.5,_e/2-1.8,.7,0,Math.PI*2),d.fill(),d.restore()}function oe(d,B){let Z=0;for(const fe of i.current){const ce=Math.hypot(fe.x-d,fe.y-B);ce<80&&(Z+=fe.brightness*(1-ce/80)*.4)}return Math.min(1,Z+.1)}function Ee(d,B){const{W:Z,H:fe}=a.current;d.fillStyle="#08080e",d.fillRect(0,0,Z,fe);const ce=D.current;if(ce){const A=d.createLinearGradient(ce.x,ce.y,ce.x+ce.w,ce.y+ce.h);A.addColorStop(0,"#0a1e0c"),A.addColorStop(1,"#091508"),d.fillStyle=A,d.fillRect(ce.x,ce.y,ce.w,ce.h)}for(const A of C.current)d.fillStyle="rgba(0, 0, 0, 0.62)",d.fillRect(A.x+4,A.y+4,A.w,A.h);for(const A of C.current){const ve=d.createLinearGradient(A.x,A.y,A.x+A.w,A.y+A.h);A.btype==="residential"?(ve.addColorStop(0,"#1e1316"),ve.addColorStop(1,"#281c22")):A.btype==="commercial"?(ve.addColorStop(0,"#10152a"),ve.addColorStop(1,"#171f38")):(ve.addColorStop(0,"#111a18"),ve.addColorStop(1,"#172420")),d.fillStyle=ve,d.fillRect(A.x,A.y,A.w,A.h),d.fillStyle="rgba(255, 255, 255, 0.08)",d.fillRect(A.x,A.y,A.w,1.5),d.fillRect(A.x,A.y,1.5,A.h),d.fillStyle="rgba(0, 0, 0, 0.38)",d.fillRect(A.x+A.w-1.5,A.y,1.5,A.h),d.fillRect(A.x,A.y+A.h-1.5,A.w,1.5);const De=Zr(A.x*13+A.y*31),Le=2,he=5,ft=Math.floor((A.w-6)/he),R=Math.floor((A.h-6)/he);if(ft>0&&R>0)for(let y=0;y<ft;y++)for(let k=0;k<R;k++)De()<.13&&(d.fillStyle="rgba(250, 199, 117, 0.25)",d.fillRect(A.x+4+y*he,A.y+4+k*he,Le,Le))}d.strokeStyle="#131420",d.lineWidth=44;for(const A of r.current)d.beginPath(),d.moveTo(A.ax,A.ay),d.lineTo(A.bx,A.by),d.stroke();d.strokeStyle="#0d0e17",d.lineWidth=30;for(const A of r.current)d.beginPath(),d.moveTo(A.ax,A.ay),d.lineTo(A.bx,A.by),d.stroke();d.strokeStyle="#111222",d.lineWidth=10;for(const A of r.current)d.beginPath(),d.moveTo(A.ax,A.ay),d.lineTo(A.bx,A.by),d.stroke();d.strokeStyle="#32324e",d.lineWidth=.8,d.setLineDash([6,8]);for(const A of r.current)d.beginPath(),d.moveTo(A.ax,A.ay),d.lineTo(A.bx,A.by),d.stroke();d.setLineDash([]);const _e=[.18,.5,.82],Ve=[.2,.5,.8];d.fillStyle="rgba(200, 205, 240, 0.14)",_e.forEach(A=>{Ve.forEach(ve=>{const De=A*Z,Le=ve*fe;for(let he=0;he<4;he++)d.fillRect(De-34-he*5,Le-13,3,26),d.fillRect(De+28+he*5,Le-13,3,26),d.fillRect(De-13,Le-34-he*5,26,3),d.fillRect(De-13,Le+28+he*5,26,3)})});{const A=.5*Z,ve=.5*fe;d.strokeStyle="#1e2030",d.lineWidth=10,d.beginPath(),d.arc(A,ve,19,0,Math.PI*2),d.stroke();const De=d.createRadialGradient(A,ve,0,A,ve,13);De.addColorStop(0,"#142a1a"),De.addColorStop(1,"#0a1510"),d.fillStyle=De,d.beginPath(),d.arc(A,ve,13,0,Math.PI*2),d.fill(),d.fillStyle="rgba(15, 58, 20, 0.97)",d.beginPath(),d.arc(A,ve,6,0,Math.PI*2),d.fill(),d.fillStyle="rgba(30, 95, 38, 0.65)",d.beginPath(),d.arc(A-1,ve-1,3,0,Math.PI*2),d.fill()}for(const A of I.current)d.fillStyle="rgba(0, 0, 0, 0.42)",d.beginPath(),d.arc(A.x+2,A.y+2,8,0,Math.PI*2),d.fill(),d.fillStyle="rgba(8, 42, 11, 0.97)",d.beginPath(),d.arc(A.x,A.y,8,0,Math.PI*2),d.fill(),d.fillStyle="rgba(15, 65, 20, 0.88)",d.beginPath(),d.arc(A.x-1,A.y-1,5.5,0,Math.PI*2),d.fill(),d.fillStyle="rgba(26, 95, 34, 0.52)",d.beginPath(),d.arc(A.x-2,A.y-2,3,0,Math.PI*2),d.fill();d.lineWidth=1;const Ie=new Map;i.current.forEach(A=>{const ve=`${A.streetId}-${A.side}`;Ie.has(ve)||Ie.set(ve,[]),Ie.get(ve).push(A)}),Ie.forEach(A=>{A.sort((ve,De)=>ve.x+ve.y-(De.x+De.y));for(let ve=0;ve<A.length-1;ve++){const De=B?xi:Math.min(xi,(A[ve].brightness+A[ve+1].brightness)/2);d.strokeStyle=`rgba(250, 199, 117, ${.02+De*.08})`,d.beginPath(),d.moveTo(A[ve].x,A[ve].y),d.lineTo(A[ve+1].x,A[ve+1].y),d.stroke()}});const ue=Z*.5,je=fe*.5,We=40,Ae=i.current.filter(A=>Math.hypot(A.x-ue,A.y-je)<We),Me=Ae.length>0?B?xi:Math.min(xi,Ae.reduce((A,ve)=>A+ve.brightness,0)/Ae.length):v.current;for(const A of i.current){if(Math.hypot(A.x-ue,A.y-je)<We)continue;const ve=B?xi:Math.min(xi,A.brightness),De=14+ve*110,Le=d.createRadialGradient(A.x,A.y,0,A.x,A.y,De);Le.addColorStop(0,`rgba(255, 224, 155, ${.62*ve})`),Le.addColorStop(.15,`rgba(252, 208, 128, ${.4*ve})`),Le.addColorStop(.4,`rgba(250, 199, 117, ${.16*ve})`),Le.addColorStop(.7,`rgba(250, 199, 117, ${.05*ve})`),Le.addColorStop(1,"rgba(250, 199, 117, 0)"),d.fillStyle=Le,d.beginPath(),d.arc(A.x,A.y,De,0,Math.PI*2),d.fill(),d.fillStyle=`rgba(255, 230, 170, ${.5+.5*ve})`,d.beginPath(),d.arc(A.x,A.y,2.4,0,Math.PI*2),d.fill(),d.fillStyle="#22222a",d.beginPath(),d.arc(A.x,A.y,1,0,Math.PI*2),d.fill()}{const A=14+Me*110,ve=d.createRadialGradient(ue,je,0,ue,je,A);ve.addColorStop(0,`rgba(255, 224, 155, ${.62*Me})`),ve.addColorStop(.15,`rgba(252, 208, 128, ${.4*Me})`),ve.addColorStop(.4,`rgba(250, 199, 117, ${.16*Me})`),ve.addColorStop(.7,`rgba(250, 199, 117, ${.05*Me})`),ve.addColorStop(1,"rgba(250, 199, 117, 0)"),d.fillStyle=ve,d.beginPath(),d.arc(ue,je,A,0,Math.PI*2),d.fill(),d.fillStyle=`rgba(255, 230, 170, ${.5+.5*Me})`,d.beginPath(),d.arc(ue,je,2.4,0,Math.PI*2),d.fill(),d.fillStyle="#22222a",d.beginPath(),d.arc(ue,je,1,0,Math.PI*2),d.fill()}for(const A of s.current){const ve=B?xi:Math.min(xi,oe(A.x,A.y));A.type==="car"?ee(d,A,ve):G(d,A,ve)}const rt=d.createRadialGradient(Z/2,fe/2,Z*.28,Z/2,fe/2,Z*.78);rt.addColorStop(0,"rgba(0,0,0,0)"),rt.addColorStop(1,"rgba(0,0,0,0.48)"),d.fillStyle=rt,d.fillRect(0,0,Z,fe)}function be(d){const{W:B,H:Z}=a.current;if(!o.current&&(o.current=s.current.find(q=>q.type==="ped")||ne(B*.5,Z*.5,"ped"),!o.current))return;const fe=o.current,ce=Math.max(.1,Math.hypot(fe.vx,fe.vy)),_e=d.createLinearGradient(0,0,0,Z*.45);_e.addColorStop(0,"#020205"),_e.addColorStop(1,"#0b0914"),d.fillStyle=_e,d.fillRect(0,0,B,Z);const Ve=Zr(777);d.fillStyle="#ffffff";for(let q=0;q<40;q++){const ae=Ve()*B,U=Ve()*(Z*.45-20),H=.5+Ve()*1;d.globalAlpha=.15+Ve()*.7,d.fillRect(ae,U,H,H)}d.globalAlpha=1;const Ie=Z*.45,ue=B/2,je=Math.sin(fe.stride*1)*3,We=.5,Ae=(q,ae)=>{const U=1/ae;return ue+q*U*B},Me=(q,ae)=>{const U=1/ae;return Ie-(q-We)*U*Z+je},rt=60;d.fillStyle="#101018",d.beginPath(),d.moveTo(Ae(-.4,rt),Me(0,rt)),d.lineTo(Ae(.4,rt),Me(0,rt)),d.lineTo(Ae(.4,.3),Me(0,.3)),d.lineTo(Ae(-.4,.3),Me(0,.3)),d.closePath(),d.fill(),d.fillStyle="#151520",d.beginPath(),d.moveTo(Ae(-.65,rt),Me(0,rt)),d.lineTo(Ae(-.4,rt),Me(0,rt)),d.lineTo(Ae(-.4,.3),Me(0,.3)),d.lineTo(Ae(-.65,.3),Me(0,.3)),d.closePath(),d.fill(),d.fillStyle="#151520",d.beginPath(),d.moveTo(Ae(.4,rt),Me(0,rt)),d.lineTo(Ae(.65,rt),Me(0,rt)),d.lineTo(Ae(.65,.3),Me(0,.3)),d.lineTo(Ae(.4,.3),Me(0,.3)),d.closePath(),d.fill(),d.strokeStyle="#222232",d.lineWidth=1.5,d.beginPath(),d.moveTo(Ae(-.4,10),Me(0,10)),d.lineTo(Ae(-.4,.3),Me(0,.3)),d.moveTo(Ae(.4,10),Me(0,10)),d.lineTo(Ae(.4,.3),Me(0,.3)),d.stroke();const ve=1.5/(Math.min(B,Z)*.11*1.2),De=fe.t*(ce/hl)*ve;d.strokeStyle="rgba(255, 255, 255, 0.03)",d.lineWidth=1;const Le=(10-De%.5)%.5;for(let q=Le;q<rt;q+=.5)q<.3||(d.beginPath(),d.moveTo(Ae(-.65,q),Me(0,q)),d.lineTo(Ae(-.4,q),Me(0,q)),d.stroke(),d.beginPath(),d.moveTo(Ae(.4,q),Me(0,q)),d.lineTo(Ae(.65,q),Me(0,q)),d.stroke());d.fillStyle="rgba(255, 255, 255, 0.22)";const he=(10-De%1)%1;for(let q=he;q<rt;q+=1)q<.3||(d.beginPath(),d.moveTo(Ae(-.012,q+.3),Me(0,q+.3)),d.lineTo(Ae(.012,q+.3),Me(0,q+.3)),d.lineTo(Ae(.012,q),Me(0,q)),d.lineTo(Ae(-.012,q),Me(0,q)),d.closePath(),d.fill());const ft=[],R=Math.floor(De/1.5)-1;for(let q=0;q<40;q++){const ae=R+q,H=ae*1.5-De;H>=.3&&H<=60&&ft.push({type:"building",z:H,bldIndex:ae})}const y=1.6,k=Math.floor(De/y)-1;for(let q=0;q<30;q++){const ae=k+q,H=ae*y-De;if(H>=.3&&H<=45){const ie=ae%2===0?"left":"right";ft.push({type:"lamp",z:H,lamp:i.current[0],relativeSide:ie})}}ft.sort((q,ae)=>Math.abs(q.z-ae.z)<.01?q.type==="lamp"?1:-1:ae.z-q.z);const Q=(q,ae,U)=>({x:q.x+(ae.x-q.x)*U,y:q.y+(ae.y-q.y)*U});ft.forEach(q=>{if(q.type==="building"){const ae=q.bldIndex||0,H=3.5+Zr(ae*59+7)()*2.5,ie=q.z,me=q.z+1.5;{const le=H,ke={x:Ae(-.45,ie),y:Me(le,ie)},L={x:Ae(-.45,ie),y:Me(0,ie)},de={x:Ae(-.45,me),y:Me(le,me)},K={x:Ae(-.45,me),y:Me(0,me)},xe={x:Ae(-2.2,ie),y:Me(le,ie)},se={x:Ae(-2.2,ie),y:Me(0,ie)};d.fillStyle="#09080f",d.beginPath(),d.moveTo(ke.x,ke.y),d.lineTo(de.x,de.y),d.lineTo(K.x,K.y),d.lineTo(L.x,L.y),d.closePath(),d.fill(),d.strokeStyle="rgba(255,255,255,0.02)",d.lineWidth=.5,d.stroke();const te=3,we=5;for(let Re=0;Re<te;Re++)for(let Se=0;Se<we;Se++){const Fe=(Re+.25)/te,Ke=(Se+.22)/we,st=.5/te,yt=.55/we,Ot=Q(Q(L,K,Fe),Q(ke,de,Fe),Ke),Pt=Q(Q(L,K,Fe),Q(ke,de,Fe),Ke+yt),$t=Q(Q(L,K,Fe+st),Q(ke,de,Fe+st),Ke+yt),Ye=Q(Q(L,K,Fe+st),Q(ke,de,Fe+st),Ke),lt=Zr(ae*47+Re*13+Se*19);d.fillStyle=lt()<.15?"rgba(250, 199, 117, 0.52)":"rgba(8, 8, 14, 0.8)",d.beginPath(),d.moveTo(Ot.x,Ot.y),d.lineTo(Pt.x,Pt.y),d.lineTo($t.x,$t.y),d.lineTo(Ye.x,Ye.y),d.closePath(),d.fill()}d.fillStyle="#050508",d.beginPath(),d.moveTo(xe.x,xe.y),d.lineTo(ke.x,ke.y),d.lineTo(L.x,L.y),d.lineTo(se.x,se.y),d.closePath(),d.fill()}{const le=H,ke={x:Ae(.45,ie),y:Me(le,ie)},L={x:Ae(.45,ie),y:Me(0,ie)},de={x:Ae(.45,me),y:Me(le,me)},K={x:Ae(.45,me),y:Me(0,me)},xe={x:Ae(2.2,ie),y:Me(le,ie)},se={x:Ae(2.2,ie),y:Me(0,ie)};d.fillStyle="#09080f",d.beginPath(),d.moveTo(ke.x,ke.y),d.lineTo(de.x,de.y),d.lineTo(K.x,K.y),d.lineTo(L.x,L.y),d.closePath(),d.fill(),d.strokeStyle="rgba(255,255,255,0.02)",d.lineWidth=.5,d.stroke();const te=3,we=5;for(let Re=0;Re<te;Re++)for(let Se=0;Se<we;Se++){const Fe=(Re+.25)/te,Ke=(Se+.22)/we,st=.5/te,yt=.55/we,Ot=Q(Q(L,K,Fe),Q(ke,de,Fe),Ke),Pt=Q(Q(L,K,Fe),Q(ke,de,Fe),Ke+yt),$t=Q(Q(L,K,Fe+st),Q(ke,de,Fe+st),Ke+yt),Ye=Q(Q(L,K,Fe+st),Q(ke,de,Fe+st),Ke),lt=Zr(ae*47+Re*13+Se*19+11);d.fillStyle=lt()<.15?"rgba(250, 199, 117, 0.52)":"rgba(8, 8, 14, 0.8)",d.beginPath(),d.moveTo(Ot.x,Ot.y),d.lineTo(Pt.x,Pt.y),d.lineTo($t.x,$t.y),d.lineTo(Ye.x,Ye.y),d.closePath(),d.fill()}d.fillStyle="#050508",d.beginPath(),d.moveTo(ke.x,ke.y),d.lineTo(xe.x,xe.y),d.lineTo(se.x,se.y),d.lineTo(L.x,L.y),d.closePath(),d.fill()}}else if(q.type==="lamp"){const ae=1/q.z,U=q.relativeSide;q.lamp;const H=M.current*1.6,ie=Math.max(1.5,H),me=1.2;let Y=xi;if(q.z>ie){const $t=q.z-ie,Ye=Math.max(0,Math.min(1,$t/me)),lt=v.current*xi;Y=xi*(1-Ye)+lt*Ye}const re=Math.max(.08,Math.min(1,4.5/q.z)),Pe=U==="left",le=Pe?-.38:.38,ke=Ae(le,q.z),L=Me(0,q.z),de=1.8,K=Me(de,q.z);d.strokeStyle=`rgba(140, 140, 160, ${.6+.4*ae})`,d.lineWidth=Math.max(2,4*ae),d.beginPath(),d.moveTo(ke,L),d.lineTo(ke,K),d.stroke();const se=Ae(le+(Pe?.1:-.1),q.z),te=Me(de+.04,q.z);d.beginPath(),d.moveTo(ke,K),d.lineTo(se,te),d.stroke();const we=Ae(le*.3,q.z),Re=Me(0,q.z),Se=.22*ae*B,Fe=d.createLinearGradient(se,te,we,Re);Fe.addColorStop(0,`rgba(255, 235, 190, ${.45*Y*re})`),Fe.addColorStop(.5,`rgba(250, 215, 150, ${.22*Y*re})`),Fe.addColorStop(1,`rgba(250, 199, 117, ${.1*Y*re})`),d.fillStyle=Fe,d.beginPath(),d.moveTo(se-2*ae,te),d.lineTo(se+2*ae,te),d.lineTo(we+Se,Re),d.lineTo(we-Se,Re),d.closePath(),d.fill();const Ke=(.1+.36*Y)*ae*B,st=Ke*.35,yt=d.createRadialGradient(we,Re,0,we,Re,Ke);yt.addColorStop(0,`rgba(255, 224, 155, ${.7*Y*re})`),yt.addColorStop(.3,`rgba(250, 199, 117, ${.4*Y*re})`),yt.addColorStop(.7,`rgba(250, 199, 117, ${.12*Y*re})`),yt.addColorStop(1,"rgba(250, 199, 117, 0)"),d.fillStyle=yt,d.beginPath(),d.ellipse(we,Re,Ke,st,0,0,Math.PI*2),d.fill();const Ot=(8+Y*32)*ae,Pt=d.createRadialGradient(se,te,0,se,te,Ot);Pt.addColorStop(0,`rgba(255, 240, 200, ${.95*Y*re})`),Pt.addColorStop(.2,`rgba(255, 224, 155, ${.55*Y*re})`),Pt.addColorStop(.5,`rgba(250, 199, 117, ${.18*Y*re})`),Pt.addColorStop(1,"rgba(250, 199, 117, 0)"),d.fillStyle=Pt,d.beginPath(),d.arc(se,te,Ot,0,Math.PI*2),d.fill(),d.fillStyle=`rgba(255, 250, 235, ${.7+.3*Y*re})`,d.beginPath(),d.arc(se,te,Math.max(1.5,2.5*ae),0,Math.PI*2),d.fill()}});const pe=d.createRadialGradient(B/2,Z/2,B*.35,B/2,Z/2,B*.85);pe.addColorStop(0,"rgba(0,0,0,0)"),pe.addColorStop(1,"rgba(0,0,0,0.35)"),d.fillStyle=pe,d.fillRect(0,0,B,Z),d.fillStyle="rgba(255,255,255,0.45)",d.font="12px sans-serif",d.textAlign="center",d.fillText("the corridor stays ahead — the citizen never notices",B/2,Z-24)}function tt(d){const{W:B,H:Z}=a.current,fe=l.current;fe==="compare"?(d.save(),d.beginPath(),d.rect(0,0,B/2,Z),d.clip(),Ee(d,!0),d.restore(),d.save(),d.beginPath(),d.rect(B/2,0,B/2,Z),d.clip(),Ee(d,!1),d.restore(),d.strokeStyle="rgba(255,255,255,0.18)",d.lineWidth=1,d.beginPath(),d.moveTo(B/2,0),d.lineTo(B/2,Z),d.stroke()):fe==="fpv"?be(d):Ee(d,fe==="baseline")}function nt(d){b.current!=="manual"&&(x.current-=d,!(x.current>0)&&(b.current==="quiet"?(x.current=4+Math.random()*5,F(Math.random()<.85?"ped":"car")):b.current==="busy"?(x.current=.4+Math.random()*.6,F(Math.random()<.55?"car":"ped")):b.current==="mixed"&&(x.current=1.2+Math.random()*1.5,F(Math.random()<.5?"car":"ped"))))}wt.useEffect(()=>{const d=e.current,B=n.current;if(!d||!B)return;const Z=d.getContext("2d"),fe=window.devicePixelRatio||1,ce=()=>{const We=B.getBoundingClientRect(),Ae=We.width,Me=We.height;a.current={W:Ae,H:Me},d.width=Ae*fe,d.height=Me*fe,Z.setTransform(fe,0,0,fe,0,0),O(Ae,Me)};ce();const _e=new ResizeObserver(ce);_e.observe(B);let Ve=performance.now(),Ie=0,ue=0;const je=We=>{Ie=requestAnimationFrame(je);const Ae=Math.min(.1,(We-Ve)/1e3);if(Ve=We,T.current)return;nt(Ae);const Me=$(Ae);if(tt(Z),ue+=Ae,ue>.1){ue=0;const A=i.current.length*Uu,ve=A>0?Math.round(Me.luminationPower/A*100):0,Le=(A-Me.luminationPower)/1e3*kT;m({powerNow:Math.round(Me.luminationPower),powerPct:ve,kwhSaved:P.current,eurSaved:Math.round(Le*OT),co2Saved:Math.round(Le*BT),peds:s.current.filter(he=>he.type==="ped").length,cars:s.current.filter(he=>he.type==="car").length})}};return Ie=requestAnimationFrame(je),()=>{cancelAnimationFrame(Ie),_e.disconnect()}},[]);const qe=d=>{const B=e.current.getBoundingClientRect(),Z=d.clientX-B.left,fe=d.clientY-B.top,ce=ne(Z,fe,d.shiftKey?"car":"ped");ce&&ce.type==="ped"&&!o.current&&(o.current=ce)};return Be.jsxs("div",{className:"main",children:[Be.jsxs("div",{className:"stage",ref:n,children:[Be.jsx("canvas",{ref:e,onClick:qe,style:{display:t==="fpv"?"none":void 0}}),t==="fpv"&&Be.jsx(FT,{lampsRef:i,trackedRef:o,lookaheadRef:M,baselineRef:v,agentsRef:s,pausedRef:T,spawnPed:()=>{const{W:d,H:B}=a.current;return ne(d*.5,B*.5,"ped")}}),t==="compare"&&Be.jsxs("div",{className:"stage-label-row",children:[Be.jsx("span",{children:"Always-on"}),Be.jsx("span",{children:"LumiNation"})]}),t!=="fpv"&&Be.jsx("div",{className:"stage-hint",children:"click a street to add a pedestrian · shift+click for a car"})]}),Be.jsxs("aside",{className:"sidebar",children:[Be.jsxs("div",{className:"card",children:[Be.jsx("div",{className:"card-label",children:"Power now"}),Be.jsxs("div",{className:"metric-row",children:[Be.jsx("span",{className:"metric-value",children:u.powerNow.toLocaleString()}),Be.jsx("span",{className:"metric-unit",children:"W"}),Be.jsxs("span",{className:"metric-aux",children:[u.powerPct,"% of always-on"]})]})]}),Be.jsxs("div",{className:"card",children:[Be.jsx("div",{className:"card-label",children:"Energy saved (session)"}),Be.jsxs("div",{className:"metric-row",children:[Be.jsx("span",{className:"metric-value",children:u.kwhSaved.toFixed(3)}),Be.jsx("span",{className:"metric-unit",children:"kWh"})]})]}),Be.jsxs("div",{className:"card",children:[Be.jsx("div",{className:"card-label",children:"Projected annual savings"}),Be.jsxs("div",{className:"metric-row",children:[Be.jsx("span",{className:"metric-unit",children:"€"}),Be.jsx("span",{className:"metric-value",children:u.eurSaved.toLocaleString()}),Be.jsxs("span",{className:"metric-aux",children:[u.co2Saved.toLocaleString()," kg CO₂/yr"]})]})]}),Be.jsxs("div",{className:"card",children:[Be.jsx("div",{className:"card-label",children:"Agents"}),Be.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginTop:4},children:[Be.jsx("span",{children:"Pedestrians"}),Be.jsx("span",{style:{fontWeight:500},children:u.peds})]}),Be.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginTop:4},children:[Be.jsx("span",{children:"Vehicles"}),Be.jsx("span",{style:{fontWeight:500},children:u.cars})]})]}),Be.jsxs("div",{className:"card controls",children:[Be.jsx("div",{className:"card-label",children:"Scenario"}),Be.jsxs("select",{value:g,onChange:d=>S(d.target.value),children:[Be.jsx("option",{value:"manual",children:"Manual (click to add)"}),Be.jsx("option",{value:"quiet",children:"Quiet residential · 3am"}),Be.jsx("option",{value:"busy",children:"Busy avenue · 8pm"}),Be.jsx("option",{value:"mixed",children:"Mixed traffic · 11pm"})]}),Be.jsxs("div",{className:"row",children:[Be.jsx("span",{children:"Baseline brightness"}),Be.jsxs("span",{children:[Math.round(c*100),"%"]})]}),Be.jsx("input",{type:"range",min:15,max:100,step:1,value:Math.round(c*100),onChange:d=>p(parseInt(d.target.value,10)/100)}),Be.jsxs("div",{className:"row",children:[Be.jsx("span",{children:"Lookahead"}),Be.jsxs("span",{children:[h.toFixed(1),"s"]})]}),Be.jsx("input",{type:"range",min:20,max:80,step:1,value:Math.round(h*10),onChange:d=>f(parseInt(d.target.value,10)/10)}),Be.jsxs("div",{className:"button-row",children:[Be.jsx("button",{onClick:()=>{s.current=[],o.current=null,P.current=0},children:"Clear"}),Be.jsx("button",{onClick:()=>_(d=>!d),children:w?"Resume":"Pause"})]})]})]})]})}function qT(){const[t,e]=wt.useState("lumination");return Be.jsxs("div",{className:"app",children:[Be.jsxs("header",{className:"topbar",children:[Be.jsxs("div",{className:"brand",children:[Be.jsx("div",{className:"brand-mark",children:"L"}),Be.jsxs("div",{children:[Be.jsx("div",{className:"brand-name",children:"LumiNation"}),Be.jsx("div",{className:"brand-tag",children:"The adaptive light corridor · live simulator"})]})]}),Be.jsxs("div",{className:"mode-bar",children:[Be.jsx("button",{className:t==="lumination"?"active":"",onClick:()=>e("lumination"),children:"LumiNation"}),Be.jsx("button",{className:t==="baseline"?"active":"",onClick:()=>e("baseline"),children:"Always-on"}),Be.jsx("button",{className:t==="compare"?"active":"",onClick:()=>e("compare"),children:"Compare"}),Be.jsx("button",{className:t==="fpv"?"active":"",onClick:()=>e("fpv"),children:"Citizen view"})]})]}),Be.jsx(YT,{mode:t}),Be.jsxs("footer",{className:"footer",children:[Be.jsx("span",{children:"LumiNation · Red Bull Basement Portugal 2026 · Instituto Superior Técnico"}),Be.jsx("span",{children:"v0.1 · early prototype"})]})]})}Fu.createRoot(document.getElementById("root")).render(Be.jsx(av.StrictMode,{children:Be.jsx(qT,{})}));
