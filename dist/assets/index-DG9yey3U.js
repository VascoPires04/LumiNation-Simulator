(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function kv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var B0={exports:{}},Hc={},k0={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),zv=Symbol.for("react.portal"),Gv=Symbol.for("react.fragment"),Vv=Symbol.for("react.strict_mode"),Hv=Symbol.for("react.profiler"),Wv=Symbol.for("react.provider"),Xv=Symbol.for("react.context"),jv=Symbol.for("react.forward_ref"),Yv=Symbol.for("react.suspense"),$v=Symbol.for("react.memo"),qv=Symbol.for("react.lazy"),Tp=Symbol.iterator;function Kv(t){return t===null||typeof t!="object"?null:(t=Tp&&t[Tp]||t["@@iterator"],typeof t=="function"?t:null)}var z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G0=Object.assign,V0={};function Uo(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||z0}Uo.prototype.isReactComponent={};Uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function H0(){}H0.prototype=Uo.prototype;function lh(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||z0}var ch=lh.prototype=new H0;ch.constructor=lh;G0(ch,Uo.prototype);ch.isPureReactComponent=!0;var Ap=Array.isArray,W0=Object.prototype.hasOwnProperty,uh={current:null},X0={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)W0.call(e,i)&&!X0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:za,type:t,key:s,ref:o,props:r,_owner:uh.current}}function Zv(t,e){return{$$typeof:za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fh(t){return typeof t=="object"&&t!==null&&t.$$typeof===za}function Qv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rp=/\/+/g;function du(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Qv(""+t.key):e.toString(36)}function jl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case za:case zv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+du(o,0):i,Ap(r)?(n="",t!=null&&(n=t.replace(Rp,"$&/")+"/"),jl(r,e,n,"",function(c){return c})):r!=null&&(fh(r)&&(r=Zv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Rp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ap(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+du(s,a);o+=jl(s,e,n,l,r)}else if(l=Kv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+du(s,a++),o+=jl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tl(t,e,n){if(t==null)return t;var i=[],r=0;return jl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Jv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wn={current:null},Yl={transition:null},ex={ReactCurrentDispatcher:Wn,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:uh};function Y0(){throw Error("act(...) is not supported in production builds of React.")}vt.Children={map:tl,forEach:function(t,e,n){tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tl(t,function(){e++}),e},toArray:function(t){return tl(t,function(e){return e})||[]},only:function(t){if(!fh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};vt.Component=Uo;vt.Fragment=Gv;vt.Profiler=Hv;vt.PureComponent=lh;vt.StrictMode=Vv;vt.Suspense=Yv;vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ex;vt.act=Y0;vt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=G0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=uh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)W0.call(e,l)&&!X0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:za,type:t.type,key:r,ref:s,props:i,_owner:o}};vt.createContext=function(t){return t={$$typeof:Xv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Wv,_context:t},t.Consumer=t};vt.createElement=j0;vt.createFactory=function(t){var e=j0.bind(null,t);return e.type=t,e};vt.createRef=function(){return{current:null}};vt.forwardRef=function(t){return{$$typeof:jv,render:t}};vt.isValidElement=fh;vt.lazy=function(t){return{$$typeof:qv,_payload:{_status:-1,_result:t},_init:Jv}};vt.memo=function(t,e){return{$$typeof:$v,type:t,compare:e===void 0?null:e}};vt.startTransition=function(t){var e=Yl.transition;Yl.transition={};try{t()}finally{Yl.transition=e}};vt.unstable_act=Y0;vt.useCallback=function(t,e){return Wn.current.useCallback(t,e)};vt.useContext=function(t){return Wn.current.useContext(t)};vt.useDebugValue=function(){};vt.useDeferredValue=function(t){return Wn.current.useDeferredValue(t)};vt.useEffect=function(t,e){return Wn.current.useEffect(t,e)};vt.useId=function(){return Wn.current.useId()};vt.useImperativeHandle=function(t,e,n){return Wn.current.useImperativeHandle(t,e,n)};vt.useInsertionEffect=function(t,e){return Wn.current.useInsertionEffect(t,e)};vt.useLayoutEffect=function(t,e){return Wn.current.useLayoutEffect(t,e)};vt.useMemo=function(t,e){return Wn.current.useMemo(t,e)};vt.useReducer=function(t,e,n){return Wn.current.useReducer(t,e,n)};vt.useRef=function(t){return Wn.current.useRef(t)};vt.useState=function(t){return Wn.current.useState(t)};vt.useSyncExternalStore=function(t,e,n){return Wn.current.useSyncExternalStore(t,e,n)};vt.useTransition=function(){return Wn.current.useTransition()};vt.version="18.3.1";k0.exports=vt;var it=k0.exports;const tx=kv(it);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nx=it,ix=Symbol.for("react.element"),rx=Symbol.for("react.fragment"),sx=Object.prototype.hasOwnProperty,ox=nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ax={key:!0,ref:!0,__self:!0,__source:!0};function $0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)sx.call(e,i)&&!ax.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ix,type:t,key:s,ref:o,props:r,_owner:ox.current}}Hc.Fragment=rx;Hc.jsx=$0;Hc.jsxs=$0;B0.exports=Hc;var fe=B0.exports,Mf={},q0={exports:{}},di={},K0={exports:{}},Z0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,te){var ce=j.length;j.push(te);e:for(;0<ce;){var Ee=ce-1>>>1,Ce=j[Ee];if(0<r(Ce,te))j[Ee]=te,j[ce]=Ce,ce=Ee;else break e}}function n(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var te=j[0],ce=j.pop();if(ce!==te){j[0]=ce;e:for(var Ee=0,Ce=j.length,st=Ce>>>1;Ee<st;){var at=2*(Ee+1)-1,$e=j[at],se=at+1,Re=j[se];if(0>r($e,ce))se<Ce&&0>r(Re,$e)?(j[Ee]=Re,j[se]=ce,Ee=se):(j[Ee]=$e,j[at]=ce,Ee=at);else if(se<Ce&&0>r(Re,ce))j[Ee]=Re,j[se]=ce,Ee=se;else break e}}return te}function r(j,te){var ce=j.sortIndex-te.sortIndex;return ce!==0?ce:j.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,p=null,f=3,g=!1,y=!1,w=!1,v=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(j){for(var te=n(c);te!==null;){if(te.callback===null)i(c);else if(te.startTime<=j)i(c),te.sortIndex=te.expirationTime,e(l,te);else break;te=n(c)}}function E(j){if(w=!1,S(j),!y)if(n(l)!==null)y=!0,$(C);else{var te=n(c);te!==null&&Y(E,te.startTime-j)}}function C(j,te){y=!1,w&&(w=!1,u(x),x=-1),g=!0;var ce=f;try{for(S(te),p=n(l);p!==null&&(!(p.expirationTime>te)||j&&!I());){var Ee=p.callback;if(typeof Ee=="function"){p.callback=null,f=p.priorityLevel;var Ce=Ee(p.expirationTime<=te);te=t.unstable_now(),typeof Ce=="function"?p.callback=Ce:p===n(l)&&i(l),S(te)}else i(l);p=n(l)}if(p!==null)var st=!0;else{var at=n(c);at!==null&&Y(E,at.startTime-te),st=!1}return st}finally{p=null,f=ce,g=!1}}var A=!1,b=null,x=-1,R=5,D=-1;function I(){return!(t.unstable_now()-D<R)}function k(){if(b!==null){var j=t.unstable_now();D=j;var te=!0;try{te=b(!0,j)}finally{te?ee():(A=!1,b=null)}}else A=!1}var ee;if(typeof h=="function")ee=function(){h(k)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,B=J.port2;J.port1.onmessage=k,ee=function(){B.postMessage(null)}}else ee=function(){v(k,0)};function $(j){b=j,A||(A=!0,ee())}function Y(j,te){x=v(function(){j(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,$(C))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(j){switch(f){case 1:case 2:case 3:var te=3;break;default:te=f}var ce=f;f=te;try{return j()}finally{f=ce}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,te){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var ce=f;f=j;try{return te()}finally{f=ce}},t.unstable_scheduleCallback=function(j,te,ce){var Ee=t.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?Ee+ce:Ee):ce=Ee,j){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=ce+Ce,j={id:d++,callback:te,priorityLevel:j,startTime:ce,expirationTime:Ce,sortIndex:-1},ce>Ee?(j.sortIndex=ce,e(c,j),n(l)===null&&j===n(c)&&(w?(u(x),x=-1):w=!0,Y(E,ce-Ee))):(j.sortIndex=Ce,e(l,j),y||g||(y=!0,$(C))),j},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(j){var te=f;return function(){var ce=f;f=te;try{return j.apply(this,arguments)}finally{f=ce}}}})(Z0);K0.exports=Z0;var lx=K0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cx=it,fi=lx;function xe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q0=new Set,Sa={};function Fs(t,e){wo(t,e),wo(t+"Capture",e)}function wo(t,e){for(Sa[t]=e,t=0;t<e.length;t++)Q0.add(e[t])}var Mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ef=Object.prototype.hasOwnProperty,ux=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cp={},bp={};function fx(t){return Ef.call(bp,t)?!0:Ef.call(Cp,t)?!1:ux.test(t)?bp[t]=!0:(Cp[t]=!0,!1)}function dx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hx(t,e,n,i){if(e===null||typeof e>"u"||dx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Tn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Tn[t]=new Xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Tn[e]=new Xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Tn[t]=new Xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Tn[t]=new Xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Tn[t]=new Xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Tn[t]=new Xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Tn[t]=new Xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Tn[t]=new Xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Tn[t]=new Xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var dh=/[\-:]([a-z])/g;function hh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dh,hh);Tn[e]=new Xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dh,hh);Tn[e]=new Xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dh,hh);Tn[e]=new Xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Tn[t]=new Xn(t,1,!1,t.toLowerCase(),null,!1,!1)});Tn.xlinkHref=new Xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Tn[t]=new Xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ph(t,e,n,i){var r=Tn.hasOwnProperty(e)?Tn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hx(e,n,r,i)&&(n=null),i||r===null?fx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Cr=cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nl=Symbol.for("react.element"),io=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),mh=Symbol.for("react.strict_mode"),wf=Symbol.for("react.profiler"),J0=Symbol.for("react.provider"),eg=Symbol.for("react.context"),gh=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),Af=Symbol.for("react.suspense_list"),_h=Symbol.for("react.memo"),Br=Symbol.for("react.lazy"),tg=Symbol.for("react.offscreen"),Pp=Symbol.iterator;function Vo(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var Yt=Object.assign,hu;function sa(t){if(hu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hu=e&&e[1]||""}return`
`+hu+t}var pu=!1;function mu(t,e){if(!t||pu)return"";pu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{pu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sa(t):""}function px(t){switch(t.tag){case 5:return sa(t.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return t=mu(t.type,!1),t;case 11:return t=mu(t.type.render,!1),t;case 1:return t=mu(t.type,!0),t;default:return""}}function Rf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ro:return"Fragment";case io:return"Portal";case wf:return"Profiler";case mh:return"StrictMode";case Tf:return"Suspense";case Af:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case eg:return(t.displayName||"Context")+".Consumer";case J0:return(t._context.displayName||"Context")+".Provider";case gh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _h:return e=t.displayName||null,e!==null?e:Rf(t.type)||"Memo";case Br:e=t._payload,t=t._init;try{return Rf(t(e))}catch{}}return null}function mx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rf(e);case 8:return e===mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function es(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ng(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gx(t){var e=ng(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function il(t){t._valueTracker||(t._valueTracker=gx(t))}function ig(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ng(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function uc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cf(t,e){var n=e.checked;return Yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=es(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rg(t,e){e=e.checked,e!=null&&ph(t,"checked",e,!1)}function bf(t,e){rg(t,e);var n=es(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pf(t,e.type,es(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pf(t,e,n){(e!=="number"||uc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oa=Array.isArray;function go(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+es(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Lf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(xe(91));return Yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ip(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(xe(92));if(oa(n)){if(1<n.length)throw Error(xe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:es(n)}}function sg(t,e){var n=es(e.value),i=es(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Np(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function og(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?og(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rl,ag=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(rl=rl||document.createElement("div"),rl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=rl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_x=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){_x.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function lg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function cg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=lg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var vx=Yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function If(t,e){if(e){if(vx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(xe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(xe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(xe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(xe(62))}}function Nf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uf=null;function vh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ff=null,_o=null,vo=null;function Up(t){if(t=Ha(t)){if(typeof Ff!="function")throw Error(xe(280));var e=t.stateNode;e&&(e=$c(e),Ff(t.stateNode,t.type,e))}}function ug(t){_o?vo?vo.push(t):vo=[t]:_o=t}function fg(){if(_o){var t=_o,e=vo;if(vo=_o=null,Up(t),e)for(t=0;t<e.length;t++)Up(e[t])}}function dg(t,e){return t(e)}function hg(){}var gu=!1;function pg(t,e,n){if(gu)return t(e,n);gu=!0;try{return dg(t,e,n)}finally{gu=!1,(_o!==null||vo!==null)&&(hg(),fg())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var i=$c(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(xe(231,e,typeof n));return n}var Of=!1;if(Mr)try{var Ho={};Object.defineProperty(Ho,"passive",{get:function(){Of=!0}}),window.addEventListener("test",Ho,Ho),window.removeEventListener("test",Ho,Ho)}catch{Of=!1}function xx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var da=!1,fc=null,dc=!1,Bf=null,Sx={onError:function(t){da=!0,fc=t}};function yx(t,e,n,i,r,s,o,a,l){da=!1,fc=null,xx.apply(Sx,arguments)}function Mx(t,e,n,i,r,s,o,a,l){if(yx.apply(this,arguments),da){if(da){var c=fc;da=!1,fc=null}else throw Error(xe(198));dc||(dc=!0,Bf=c)}}function Os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fp(t){if(Os(t)!==t)throw Error(xe(188))}function Ex(t){var e=t.alternate;if(!e){if(e=Os(t),e===null)throw Error(xe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Fp(r),t;if(s===i)return Fp(r),e;s=s.sibling}throw Error(xe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(xe(189))}}if(n.alternate!==i)throw Error(xe(190))}if(n.tag!==3)throw Error(xe(188));return n.stateNode.current===n?t:e}function gg(t){return t=Ex(t),t!==null?_g(t):null}function _g(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_g(t);if(e!==null)return e;t=t.sibling}return null}var vg=fi.unstable_scheduleCallback,Op=fi.unstable_cancelCallback,wx=fi.unstable_shouldYield,Tx=fi.unstable_requestPaint,en=fi.unstable_now,Ax=fi.unstable_getCurrentPriorityLevel,xh=fi.unstable_ImmediatePriority,xg=fi.unstable_UserBlockingPriority,hc=fi.unstable_NormalPriority,Rx=fi.unstable_LowPriority,Sg=fi.unstable_IdlePriority,Wc=null,tr=null;function Cx(t){if(tr&&typeof tr.onCommitFiberRoot=="function")try{tr.onCommitFiberRoot(Wc,t,void 0,(t.current.flags&128)===128)}catch{}}var Ui=Math.clz32?Math.clz32:Lx,bx=Math.log,Px=Math.LN2;function Lx(t){return t>>>=0,t===0?32:31-(bx(t)/Px|0)|0}var sl=64,ol=4194304;function aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=aa(a):(s&=o,s!==0&&(i=aa(s)))}else o=n&~r,o!==0?i=aa(o):s!==0&&(i=aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ui(e),r=1<<n,i|=t[n],e&=~r;return i}function Dx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ix(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ui(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Dx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function kf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yg(){var t=sl;return sl<<=1,!(sl&4194240)&&(sl=64),t}function _u(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ui(e),t[e]=n}function Nx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ui(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Sh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ui(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var bt=0;function Mg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Eg,yh,wg,Tg,Ag,zf=!1,al=[],jr=null,Yr=null,$r=null,Ea=new Map,wa=new Map,zr=[],Ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bp(t,e){switch(t){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Yr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function Wo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ha(e),e!==null&&yh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Fx(t,e,n,i,r){switch(e){case"focusin":return jr=Wo(jr,t,e,n,i,r),!0;case"dragenter":return Yr=Wo(Yr,t,e,n,i,r),!0;case"mouseover":return $r=Wo($r,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ea.set(s,Wo(Ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,wa.set(s,Wo(wa.get(s)||null,t,e,n,i,r)),!0}return!1}function Rg(t){var e=Ms(t.target);if(e!==null){var n=Os(e);if(n!==null){if(e=n.tag,e===13){if(e=mg(n),e!==null){t.blockedOn=e,Ag(t.priority,function(){wg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Uf=i,n.target.dispatchEvent(i),Uf=null}else return e=Ha(n),e!==null&&yh(e),t.blockedOn=n,!1;e.shift()}return!0}function kp(t,e,n){$l(t)&&n.delete(e)}function Ox(){zf=!1,jr!==null&&$l(jr)&&(jr=null),Yr!==null&&$l(Yr)&&(Yr=null),$r!==null&&$l($r)&&($r=null),Ea.forEach(kp),wa.forEach(kp)}function Xo(t,e){t.blockedOn===e&&(t.blockedOn=null,zf||(zf=!0,fi.unstable_scheduleCallback(fi.unstable_NormalPriority,Ox)))}function Ta(t){function e(r){return Xo(r,t)}if(0<al.length){Xo(al[0],t);for(var n=1;n<al.length;n++){var i=al[n];i.blockedOn===t&&(i.blockedOn=null)}}for(jr!==null&&Xo(jr,t),Yr!==null&&Xo(Yr,t),$r!==null&&Xo($r,t),Ea.forEach(e),wa.forEach(e),n=0;n<zr.length;n++)i=zr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<zr.length&&(n=zr[0],n.blockedOn===null);)Rg(n),n.blockedOn===null&&zr.shift()}var xo=Cr.ReactCurrentBatchConfig,mc=!0;function Bx(t,e,n,i){var r=bt,s=xo.transition;xo.transition=null;try{bt=1,Mh(t,e,n,i)}finally{bt=r,xo.transition=s}}function kx(t,e,n,i){var r=bt,s=xo.transition;xo.transition=null;try{bt=4,Mh(t,e,n,i)}finally{bt=r,xo.transition=s}}function Mh(t,e,n,i){if(mc){var r=Gf(t,e,n,i);if(r===null)Ru(t,e,i,gc,n),Bp(t,i);else if(Fx(r,t,e,n,i))i.stopPropagation();else if(Bp(t,i),e&4&&-1<Ux.indexOf(t)){for(;r!==null;){var s=Ha(r);if(s!==null&&Eg(s),s=Gf(t,e,n,i),s===null&&Ru(t,e,i,gc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ru(t,e,i,null,n)}}var gc=null;function Gf(t,e,n,i){if(gc=null,t=vh(i),t=Ms(t),t!==null)if(e=Os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gc=t,null}function Cg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ax()){case xh:return 1;case xg:return 4;case hc:case Rx:return 16;case Sg:return 536870912;default:return 16}default:return 16}}var Hr=null,Eh=null,ql=null;function bg(){if(ql)return ql;var t,e=Eh,n=e.length,i,r="value"in Hr?Hr.value:Hr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ql=r.slice(t,1<i?1-i:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function zp(){return!1}function hi(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ll:zp,this.isPropagationStopped=zp,this}return Yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),e}var Fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wh=hi(Fo),Va=Yt({},Fo,{view:0,detail:0}),zx=hi(Va),vu,xu,jo,Xc=Yt({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Th,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jo&&(jo&&t.type==="mousemove"?(vu=t.screenX-jo.screenX,xu=t.screenY-jo.screenY):xu=vu=0,jo=t),vu)},movementY:function(t){return"movementY"in t?t.movementY:xu}}),Gp=hi(Xc),Gx=Yt({},Xc,{dataTransfer:0}),Vx=hi(Gx),Hx=Yt({},Va,{relatedTarget:0}),Su=hi(Hx),Wx=Yt({},Fo,{animationName:0,elapsedTime:0,pseudoElement:0}),Xx=hi(Wx),jx=Yt({},Fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yx=hi(jx),$x=Yt({},Fo,{data:0}),Vp=hi($x),qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Zx[t])?!!e[t]:!1}function Th(){return Qx}var Jx=Yt({},Va,{key:function(t){if(t.key){var e=qx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Th,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eS=hi(Jx),tS=Yt({},Xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hp=hi(tS),nS=Yt({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Th}),iS=hi(nS),rS=Yt({},Fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),sS=hi(rS),oS=Yt({},Xc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aS=hi(oS),lS=[9,13,27,32],Ah=Mr&&"CompositionEvent"in window,ha=null;Mr&&"documentMode"in document&&(ha=document.documentMode);var cS=Mr&&"TextEvent"in window&&!ha,Pg=Mr&&(!Ah||ha&&8<ha&&11>=ha),Wp=" ",Xp=!1;function Lg(t,e){switch(t){case"keyup":return lS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var so=!1;function uS(t,e){switch(t){case"compositionend":return Dg(e);case"keypress":return e.which!==32?null:(Xp=!0,Wp);case"textInput":return t=e.data,t===Wp&&Xp?null:t;default:return null}}function fS(t,e){if(so)return t==="compositionend"||!Ah&&Lg(t,e)?(t=bg(),ql=Eh=Hr=null,so=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pg&&e.locale!=="ko"?null:e.data;default:return null}}var dS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dS[t.type]:e==="textarea"}function Ig(t,e,n,i){ug(i),e=_c(e,"onChange"),0<e.length&&(n=new wh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var pa=null,Aa=null;function hS(t){Wg(t,0)}function jc(t){var e=lo(t);if(ig(e))return t}function pS(t,e){if(t==="change")return e}var Ng=!1;if(Mr){var yu;if(Mr){var Mu="oninput"in document;if(!Mu){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),Mu=typeof Yp.oninput=="function"}yu=Mu}else yu=!1;Ng=yu&&(!document.documentMode||9<document.documentMode)}function $p(){pa&&(pa.detachEvent("onpropertychange",Ug),Aa=pa=null)}function Ug(t){if(t.propertyName==="value"&&jc(Aa)){var e=[];Ig(e,Aa,t,vh(t)),pg(hS,e)}}function mS(t,e,n){t==="focusin"?($p(),pa=e,Aa=n,pa.attachEvent("onpropertychange",Ug)):t==="focusout"&&$p()}function gS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jc(Aa)}function _S(t,e){if(t==="click")return jc(e)}function vS(t,e){if(t==="input"||t==="change")return jc(e)}function xS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bi=typeof Object.is=="function"?Object.is:xS;function Ra(t,e){if(Bi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ef.call(e,r)||!Bi(t[r],e[r]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,e){var n=qp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qp(n)}}function Fg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Og(){for(var t=window,e=uc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=uc(t.document)}return e}function Rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function SS(t){var e=Og(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fg(n.ownerDocument.documentElement,n)){if(i!==null&&Rh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Kp(n,s);var o=Kp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yS=Mr&&"documentMode"in document&&11>=document.documentMode,oo=null,Vf=null,ma=null,Hf=!1;function Zp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hf||oo==null||oo!==uc(i)||(i=oo,"selectionStart"in i&&Rh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&Ra(ma,i)||(ma=i,i=_c(Vf,"onSelect"),0<i.length&&(e=new wh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=oo)))}function cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ao={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},Eu={},Bg={};Mr&&(Bg=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function Yc(t){if(Eu[t])return Eu[t];if(!ao[t])return t;var e=ao[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bg)return Eu[t]=e[n];return t}var kg=Yc("animationend"),zg=Yc("animationiteration"),Gg=Yc("animationstart"),Vg=Yc("transitionend"),Hg=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rs(t,e){Hg.set(t,e),Fs(e,[t])}for(var wu=0;wu<Qp.length;wu++){var Tu=Qp[wu],MS=Tu.toLowerCase(),ES=Tu[0].toUpperCase()+Tu.slice(1);rs(MS,"on"+ES)}rs(kg,"onAnimationEnd");rs(zg,"onAnimationIteration");rs(Gg,"onAnimationStart");rs("dblclick","onDoubleClick");rs("focusin","onFocus");rs("focusout","onBlur");rs(Vg,"onTransitionEnd");wo("onMouseEnter",["mouseout","mouseover"]);wo("onMouseLeave",["mouseout","mouseover"]);wo("onPointerEnter",["pointerout","pointerover"]);wo("onPointerLeave",["pointerout","pointerover"]);Fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wS=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function Jp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Mx(i,e,void 0,t),t.currentTarget=null}function Wg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,a,c),s=l}}}if(dc)throw t=Bf,dc=!1,Bf=null,t}function kt(t,e){var n=e[$f];n===void 0&&(n=e[$f]=new Set);var i=t+"__bubble";n.has(i)||(Xg(e,t,2,!1),n.add(i))}function Au(t,e,n){var i=0;e&&(i|=4),Xg(n,t,i,e)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[ul]){t[ul]=!0,Q0.forEach(function(n){n!=="selectionchange"&&(wS.has(n)||Au(n,!1,t),Au(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ul]||(e[ul]=!0,Au("selectionchange",!1,e))}}function Xg(t,e,n,i){switch(Cg(e)){case 1:var r=Bx;break;case 4:r=kx;break;default:r=Mh}n=r.bind(null,e,n,t),r=void 0,!Of||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ru(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ms(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}pg(function(){var c=s,d=vh(n),p=[];e:{var f=Hg.get(t);if(f!==void 0){var g=wh,y=t;switch(t){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":g=eS;break;case"focusin":y="focus",g=Su;break;case"focusout":y="blur",g=Su;break;case"beforeblur":case"afterblur":g=Su;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=iS;break;case kg:case zg:case Gg:g=Xx;break;case Vg:g=sS;break;case"scroll":g=zx;break;case"wheel":g=aS;break;case"copy":case"cut":case"paste":g=Yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Hp}var w=(e&4)!==0,v=!w&&t==="scroll",u=w?f!==null?f+"Capture":null:f;w=[];for(var h=c,S;h!==null;){S=h;var E=S.stateNode;if(S.tag===5&&E!==null&&(S=E,u!==null&&(E=Ma(h,u),E!=null&&w.push(ba(h,E,S)))),v)break;h=h.return}0<w.length&&(f=new g(f,y,null,n,d),p.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Uf&&(y=n.relatedTarget||n.fromElement)&&(Ms(y)||y[Er]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?Ms(y):null,y!==null&&(v=Os(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(w=Gp,E="onMouseLeave",u="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(w=Hp,E="onPointerLeave",u="onPointerEnter",h="pointer"),v=g==null?f:lo(g),S=y==null?f:lo(y),f=new w(E,h+"leave",g,n,d),f.target=v,f.relatedTarget=S,E=null,Ms(d)===c&&(w=new w(u,h+"enter",y,n,d),w.target=S,w.relatedTarget=v,E=w),v=E,g&&y)t:{for(w=g,u=y,h=0,S=w;S;S=Gs(S))h++;for(S=0,E=u;E;E=Gs(E))S++;for(;0<h-S;)w=Gs(w),h--;for(;0<S-h;)u=Gs(u),S--;for(;h--;){if(w===u||u!==null&&w===u.alternate)break t;w=Gs(w),u=Gs(u)}w=null}else w=null;g!==null&&em(p,f,g,w,!1),y!==null&&v!==null&&em(p,v,y,w,!0)}}e:{if(f=c?lo(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var C=pS;else if(jp(f))if(Ng)C=vS;else{C=gS;var A=mS}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=_S);if(C&&(C=C(t,c))){Ig(p,C,n,d);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Pf(f,"number",f.value)}switch(A=c?lo(c):window,t){case"focusin":(jp(A)||A.contentEditable==="true")&&(oo=A,Vf=c,ma=null);break;case"focusout":ma=Vf=oo=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,Zp(p,n,d);break;case"selectionchange":if(yS)break;case"keydown":case"keyup":Zp(p,n,d)}var b;if(Ah)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else so?Lg(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Pg&&n.locale!=="ko"&&(so||x!=="onCompositionStart"?x==="onCompositionEnd"&&so&&(b=bg()):(Hr=d,Eh="value"in Hr?Hr.value:Hr.textContent,so=!0)),A=_c(c,x),0<A.length&&(x=new Vp(x,t,null,n,d),p.push({event:x,listeners:A}),b?x.data=b:(b=Dg(n),b!==null&&(x.data=b)))),(b=cS?uS(t,n):fS(t,n))&&(c=_c(c,"onBeforeInput"),0<c.length&&(d=new Vp("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=b))}Wg(p,e)})}function ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _c(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ma(t,n),s!=null&&i.unshift(ba(t,s,r)),s=Ma(t,e),s!=null&&i.push(ba(t,s,r))),t=t.return}return i}function Gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function em(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ma(n,s),l!=null&&o.unshift(ba(n,l,a))):r||(l=Ma(n,s),l!=null&&o.push(ba(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TS=/\r\n?/g,AS=/\u0000|\uFFFD/g;function tm(t){return(typeof t=="string"?t:""+t).replace(TS,`
`).replace(AS,"")}function fl(t,e,n){if(e=tm(e),tm(t)!==e&&n)throw Error(xe(425))}function vc(){}var Wf=null,Xf=null;function jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yf=typeof setTimeout=="function"?setTimeout:void 0,RS=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,CS=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(t){return nm.resolve(null).then(t).catch(bS)}:Yf;function bS(t){setTimeout(function(){throw t})}function Cu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ta(e)}function qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function im(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Oo=Math.random().toString(36).slice(2),Zi="__reactFiber$"+Oo,Pa="__reactProps$"+Oo,Er="__reactContainer$"+Oo,$f="__reactEvents$"+Oo,PS="__reactListeners$"+Oo,LS="__reactHandles$"+Oo;function Ms(t){var e=t[Zi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Er]||n[Zi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=im(t);t!==null;){if(n=t[Zi])return n;t=im(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){return t=t[Zi]||t[Er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function lo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(xe(33))}function $c(t){return t[Pa]||null}var qf=[],co=-1;function ss(t){return{current:t}}function zt(t){0>co||(t.current=qf[co],qf[co]=null,co--)}function Ot(t,e){co++,qf[co]=t.current,t.current=e}var ts={},Un=ss(ts),Kn=ss(!1),bs=ts;function To(t,e){var n=t.type.contextTypes;if(!n)return ts;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Zn(t){return t=t.childContextTypes,t!=null}function xc(){zt(Kn),zt(Un)}function rm(t,e,n){if(Un.current!==ts)throw Error(xe(168));Ot(Un,e),Ot(Kn,n)}function jg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(xe(108,mx(t)||"Unknown",r));return Yt({},n,i)}function Sc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ts,bs=Un.current,Ot(Un,t),Ot(Kn,Kn.current),!0}function sm(t,e,n){var i=t.stateNode;if(!i)throw Error(xe(169));n?(t=jg(t,e,bs),i.__reactInternalMemoizedMergedChildContext=t,zt(Kn),zt(Un),Ot(Un,t)):zt(Kn),Ot(Kn,n)}var mr=null,qc=!1,bu=!1;function Yg(t){mr===null?mr=[t]:mr.push(t)}function DS(t){qc=!0,Yg(t)}function os(){if(!bu&&mr!==null){bu=!0;var t=0,e=bt;try{var n=mr;for(bt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mr=null,qc=!1}catch(r){throw mr!==null&&(mr=mr.slice(t+1)),vg(xh,os),r}finally{bt=e,bu=!1}}return null}var uo=[],fo=0,yc=null,Mc=0,vi=[],xi=0,Ps=null,gr=1,_r="";function ps(t,e){uo[fo++]=Mc,uo[fo++]=yc,yc=t,Mc=e}function $g(t,e,n){vi[xi++]=gr,vi[xi++]=_r,vi[xi++]=Ps,Ps=t;var i=gr;t=_r;var r=32-Ui(i)-1;i&=~(1<<r),n+=1;var s=32-Ui(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,gr=1<<32-Ui(e)+r|n<<r|i,_r=s+t}else gr=1<<s|n<<r|i,_r=t}function Ch(t){t.return!==null&&(ps(t,1),$g(t,1,0))}function bh(t){for(;t===yc;)yc=uo[--fo],uo[fo]=null,Mc=uo[--fo],uo[fo]=null;for(;t===Ps;)Ps=vi[--xi],vi[xi]=null,_r=vi[--xi],vi[xi]=null,gr=vi[--xi],vi[xi]=null}var ui=null,ci=null,Vt=!1,Di=null;function qg(t,e){var n=Si(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function om(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ui=t,ci=qr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ui=t,ci=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ps!==null?{id:gr,overflow:_r}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Si(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ui=t,ci=null,!0):!1;default:return!1}}function Kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zf(t){if(Vt){var e=ci;if(e){var n=e;if(!om(t,e)){if(Kf(t))throw Error(xe(418));e=qr(n.nextSibling);var i=ui;e&&om(t,e)?qg(i,n):(t.flags=t.flags&-4097|2,Vt=!1,ui=t)}}else{if(Kf(t))throw Error(xe(418));t.flags=t.flags&-4097|2,Vt=!1,ui=t}}}function am(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ui=t}function dl(t){if(t!==ui)return!1;if(!Vt)return am(t),Vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jf(t.type,t.memoizedProps)),e&&(e=ci)){if(Kf(t))throw Kg(),Error(xe(418));for(;e;)qg(t,e),e=qr(e.nextSibling)}if(am(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(xe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ci=qr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ci=null}}else ci=ui?qr(t.stateNode.nextSibling):null;return!0}function Kg(){for(var t=ci;t;)t=qr(t.nextSibling)}function Ao(){ci=ui=null,Vt=!1}function Ph(t){Di===null?Di=[t]:Di.push(t)}var IS=Cr.ReactCurrentBatchConfig;function Yo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(xe(309));var i=n.stateNode}if(!i)throw Error(xe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(xe(284));if(!n._owner)throw Error(xe(290,t))}return t}function hl(t,e){throw t=Object.prototype.toString.call(e),Error(xe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lm(t){var e=t._init;return e(t._payload)}function Zg(t){function e(u,h){if(t){var S=u.deletions;S===null?(u.deletions=[h],u.flags|=16):S.push(h)}}function n(u,h){if(!t)return null;for(;h!==null;)e(u,h),h=h.sibling;return null}function i(u,h){for(u=new Map;h!==null;)h.key!==null?u.set(h.key,h):u.set(h.index,h),h=h.sibling;return u}function r(u,h){return u=Jr(u,h),u.index=0,u.sibling=null,u}function s(u,h,S){return u.index=S,t?(S=u.alternate,S!==null?(S=S.index,S<h?(u.flags|=2,h):S):(u.flags|=2,h)):(u.flags|=1048576,h)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,h,S,E){return h===null||h.tag!==6?(h=Fu(S,u.mode,E),h.return=u,h):(h=r(h,S),h.return=u,h)}function l(u,h,S,E){var C=S.type;return C===ro?d(u,h,S.props.children,E,S.key):h!==null&&(h.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Br&&lm(C)===h.type)?(E=r(h,S.props),E.ref=Yo(u,h,S),E.return=u,E):(E=ic(S.type,S.key,S.props,null,u.mode,E),E.ref=Yo(u,h,S),E.return=u,E)}function c(u,h,S,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==S.containerInfo||h.stateNode.implementation!==S.implementation?(h=Ou(S,u.mode,E),h.return=u,h):(h=r(h,S.children||[]),h.return=u,h)}function d(u,h,S,E,C){return h===null||h.tag!==7?(h=Cs(S,u.mode,E,C),h.return=u,h):(h=r(h,S),h.return=u,h)}function p(u,h,S){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Fu(""+h,u.mode,S),h.return=u,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case nl:return S=ic(h.type,h.key,h.props,null,u.mode,S),S.ref=Yo(u,null,h),S.return=u,S;case io:return h=Ou(h,u.mode,S),h.return=u,h;case Br:var E=h._init;return p(u,E(h._payload),S)}if(oa(h)||Vo(h))return h=Cs(h,u.mode,S,null),h.return=u,h;hl(u,h)}return null}function f(u,h,S,E){var C=h!==null?h.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return C!==null?null:a(u,h,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case nl:return S.key===C?l(u,h,S,E):null;case io:return S.key===C?c(u,h,S,E):null;case Br:return C=S._init,f(u,h,C(S._payload),E)}if(oa(S)||Vo(S))return C!==null?null:d(u,h,S,E,null);hl(u,S)}return null}function g(u,h,S,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(S)||null,a(h,u,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case nl:return u=u.get(E.key===null?S:E.key)||null,l(h,u,E,C);case io:return u=u.get(E.key===null?S:E.key)||null,c(h,u,E,C);case Br:var A=E._init;return g(u,h,S,A(E._payload),C)}if(oa(E)||Vo(E))return u=u.get(S)||null,d(h,u,E,C,null);hl(h,E)}return null}function y(u,h,S,E){for(var C=null,A=null,b=h,x=h=0,R=null;b!==null&&x<S.length;x++){b.index>x?(R=b,b=null):R=b.sibling;var D=f(u,b,S[x],E);if(D===null){b===null&&(b=R);break}t&&b&&D.alternate===null&&e(u,b),h=s(D,h,x),A===null?C=D:A.sibling=D,A=D,b=R}if(x===S.length)return n(u,b),Vt&&ps(u,x),C;if(b===null){for(;x<S.length;x++)b=p(u,S[x],E),b!==null&&(h=s(b,h,x),A===null?C=b:A.sibling=b,A=b);return Vt&&ps(u,x),C}for(b=i(u,b);x<S.length;x++)R=g(b,u,x,S[x],E),R!==null&&(t&&R.alternate!==null&&b.delete(R.key===null?x:R.key),h=s(R,h,x),A===null?C=R:A.sibling=R,A=R);return t&&b.forEach(function(I){return e(u,I)}),Vt&&ps(u,x),C}function w(u,h,S,E){var C=Vo(S);if(typeof C!="function")throw Error(xe(150));if(S=C.call(S),S==null)throw Error(xe(151));for(var A=C=null,b=h,x=h=0,R=null,D=S.next();b!==null&&!D.done;x++,D=S.next()){b.index>x?(R=b,b=null):R=b.sibling;var I=f(u,b,D.value,E);if(I===null){b===null&&(b=R);break}t&&b&&I.alternate===null&&e(u,b),h=s(I,h,x),A===null?C=I:A.sibling=I,A=I,b=R}if(D.done)return n(u,b),Vt&&ps(u,x),C;if(b===null){for(;!D.done;x++,D=S.next())D=p(u,D.value,E),D!==null&&(h=s(D,h,x),A===null?C=D:A.sibling=D,A=D);return Vt&&ps(u,x),C}for(b=i(u,b);!D.done;x++,D=S.next())D=g(b,u,x,D.value,E),D!==null&&(t&&D.alternate!==null&&b.delete(D.key===null?x:D.key),h=s(D,h,x),A===null?C=D:A.sibling=D,A=D);return t&&b.forEach(function(k){return e(u,k)}),Vt&&ps(u,x),C}function v(u,h,S,E){if(typeof S=="object"&&S!==null&&S.type===ro&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case nl:e:{for(var C=S.key,A=h;A!==null;){if(A.key===C){if(C=S.type,C===ro){if(A.tag===7){n(u,A.sibling),h=r(A,S.props.children),h.return=u,u=h;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Br&&lm(C)===A.type){n(u,A.sibling),h=r(A,S.props),h.ref=Yo(u,A,S),h.return=u,u=h;break e}n(u,A);break}else e(u,A);A=A.sibling}S.type===ro?(h=Cs(S.props.children,u.mode,E,S.key),h.return=u,u=h):(E=ic(S.type,S.key,S.props,null,u.mode,E),E.ref=Yo(u,h,S),E.return=u,u=E)}return o(u);case io:e:{for(A=S.key;h!==null;){if(h.key===A)if(h.tag===4&&h.stateNode.containerInfo===S.containerInfo&&h.stateNode.implementation===S.implementation){n(u,h.sibling),h=r(h,S.children||[]),h.return=u,u=h;break e}else{n(u,h);break}else e(u,h);h=h.sibling}h=Ou(S,u.mode,E),h.return=u,u=h}return o(u);case Br:return A=S._init,v(u,h,A(S._payload),E)}if(oa(S))return y(u,h,S,E);if(Vo(S))return w(u,h,S,E);hl(u,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,h!==null&&h.tag===6?(n(u,h.sibling),h=r(h,S),h.return=u,u=h):(n(u,h),h=Fu(S,u.mode,E),h.return=u,u=h),o(u)):n(u,h)}return v}var Ro=Zg(!0),Qg=Zg(!1),Ec=ss(null),wc=null,ho=null,Lh=null;function Dh(){Lh=ho=wc=null}function Ih(t){var e=Ec.current;zt(Ec),t._currentValue=e}function Qf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function So(t,e){wc=t,Lh=ho=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qn=!0),t.firstContext=null)}function Mi(t){var e=t._currentValue;if(Lh!==t)if(t={context:t,memoizedValue:e,next:null},ho===null){if(wc===null)throw Error(xe(308));ho=t,wc.dependencies={lanes:0,firstContext:t}}else ho=ho.next=t;return e}var Es=null;function Nh(t){Es===null?Es=[t]:Es.push(t)}function Jg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Nh(e)):(n.next=r.next,r.next=n),e.interleaved=n,wr(t,i)}function wr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kr=!1;function Uh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Kr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,wt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,wr(t,n)}return r=i.interleaved,r===null?(e.next=e,Nh(i)):(e.next=r.next,r.next=e),i.interleaved=e,wr(t,n)}function Zl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sh(t,n)}}function cm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tc(t,e,n,i){var r=t.updateQueue;kr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(f=e,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(g,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(g,p,f):y,f==null)break e;p=Yt({},p,f);break e;case 2:kr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=p):d=d.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ds|=o,t.lanes=o,t.memoizedState=p}}function um(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(xe(191,r));r.call(i)}}}var Wa={},nr=ss(Wa),La=ss(Wa),Da=ss(Wa);function ws(t){if(t===Wa)throw Error(xe(174));return t}function Fh(t,e){switch(Ot(Da,e),Ot(La,t),Ot(nr,Wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Df(e,t)}zt(nr),Ot(nr,e)}function Co(){zt(nr),zt(La),zt(Da)}function t_(t){ws(Da.current);var e=ws(nr.current),n=Df(e,t.type);e!==n&&(Ot(La,t),Ot(nr,n))}function Oh(t){La.current===t&&(zt(nr),zt(La))}var Wt=ss(0);function Ac(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pu=[];function Bh(){for(var t=0;t<Pu.length;t++)Pu[t]._workInProgressVersionPrimary=null;Pu.length=0}var Ql=Cr.ReactCurrentDispatcher,Lu=Cr.ReactCurrentBatchConfig,Ls=0,Xt=null,fn=null,gn=null,Rc=!1,ga=!1,Ia=0,NS=0;function Rn(){throw Error(xe(321))}function kh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bi(t[n],e[n]))return!1;return!0}function zh(t,e,n,i,r,s){if(Ls=s,Xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=t===null||t.memoizedState===null?BS:kS,t=n(i,r),ga){s=0;do{if(ga=!1,Ia=0,25<=s)throw Error(xe(301));s+=1,gn=fn=null,e.updateQueue=null,Ql.current=zS,t=n(i,r)}while(ga)}if(Ql.current=Cc,e=fn!==null&&fn.next!==null,Ls=0,gn=fn=Xt=null,Rc=!1,e)throw Error(xe(300));return t}function Gh(){var t=Ia!==0;return Ia=0,t}function qi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Xt.memoizedState=gn=t:gn=gn.next=t,gn}function Ei(){if(fn===null){var t=Xt.alternate;t=t!==null?t.memoizedState:null}else t=fn.next;var e=gn===null?Xt.memoizedState:gn.next;if(e!==null)gn=e,fn=t;else{if(t===null)throw Error(xe(310));fn=t,t={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},gn===null?Xt.memoizedState=gn=t:gn=gn.next=t}return gn}function Na(t,e){return typeof e=="function"?e(t):e}function Du(t){var e=Ei(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=fn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ls&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,Xt.lanes|=d,Ds|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Bi(i,e.memoizedState)||(qn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Xt.lanes|=s,Ds|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Iu(t){var e=Ei(),n=e.queue;if(n===null)throw Error(xe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Bi(s,e.memoizedState)||(qn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function n_(){}function i_(t,e){var n=Xt,i=Ei(),r=e(),s=!Bi(i.memoizedState,r);if(s&&(i.memoizedState=r,qn=!0),i=i.queue,Vh(o_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||gn!==null&&gn.memoizedState.tag&1){if(n.flags|=2048,Ua(9,s_.bind(null,n,i,r,e),void 0,null),_n===null)throw Error(xe(349));Ls&30||r_(n,e,r)}return r}function r_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function s_(t,e,n,i){e.value=n,e.getSnapshot=i,a_(e)&&l_(t)}function o_(t,e,n){return n(function(){a_(e)&&l_(t)})}function a_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bi(t,n)}catch{return!0}}function l_(t){var e=wr(t,1);e!==null&&Fi(e,t,1,-1)}function fm(t){var e=qi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},e.queue=t,t=t.dispatch=OS.bind(null,Xt,t),[e.memoizedState,t]}function Ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Xt.updateQueue,e===null?(e={lastEffect:null,stores:null},Xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function c_(){return Ei().memoizedState}function Jl(t,e,n,i){var r=qi();Xt.flags|=t,r.memoizedState=Ua(1|e,n,void 0,i===void 0?null:i)}function Kc(t,e,n,i){var r=Ei();i=i===void 0?null:i;var s=void 0;if(fn!==null){var o=fn.memoizedState;if(s=o.destroy,i!==null&&kh(i,o.deps)){r.memoizedState=Ua(e,n,s,i);return}}Xt.flags|=t,r.memoizedState=Ua(1|e,n,s,i)}function dm(t,e){return Jl(8390656,8,t,e)}function Vh(t,e){return Kc(2048,8,t,e)}function u_(t,e){return Kc(4,2,t,e)}function f_(t,e){return Kc(4,4,t,e)}function d_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function h_(t,e,n){return n=n!=null?n.concat([t]):null,Kc(4,4,d_.bind(null,e,t),n)}function Hh(){}function p_(t,e){var n=Ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function m_(t,e){var n=Ei();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function g_(t,e,n){return Ls&21?(Bi(n,e)||(n=yg(),Xt.lanes|=n,Ds|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qn=!0),t.memoizedState=n)}function US(t,e){var n=bt;bt=n!==0&&4>n?n:4,t(!0);var i=Lu.transition;Lu.transition={};try{t(!1),e()}finally{bt=n,Lu.transition=i}}function __(){return Ei().memoizedState}function FS(t,e,n){var i=Qr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},v_(t))x_(e,n);else if(n=Jg(t,e,n,i),n!==null){var r=Hn();Fi(n,t,i,r),S_(n,e,i)}}function OS(t,e,n){var i=Qr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(v_(t))x_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Bi(a,o)){var l=e.interleaved;l===null?(r.next=r,Nh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Jg(t,e,r,i),n!==null&&(r=Hn(),Fi(n,t,i,r),S_(n,e,i))}}function v_(t){var e=t.alternate;return t===Xt||e!==null&&e===Xt}function x_(t,e){ga=Rc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sh(t,n)}}var Cc={readContext:Mi,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},BS={readContext:Mi,useCallback:function(t,e){return qi().memoizedState=[t,e===void 0?null:e],t},useContext:Mi,useEffect:dm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4194308,4,d_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jl(4,2,t,e)},useMemo:function(t,e){var n=qi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=FS.bind(null,Xt,t),[i.memoizedState,t]},useRef:function(t){var e=qi();return t={current:t},e.memoizedState=t},useState:fm,useDebugValue:Hh,useDeferredValue:function(t){return qi().memoizedState=t},useTransition:function(){var t=fm(!1),e=t[0];return t=US.bind(null,t[1]),qi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Xt,r=qi();if(Vt){if(n===void 0)throw Error(xe(407));n=n()}else{if(n=e(),_n===null)throw Error(xe(349));Ls&30||r_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,dm(o_.bind(null,i,s,t),[t]),i.flags|=2048,Ua(9,s_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qi(),e=_n.identifierPrefix;if(Vt){var n=_r,i=gr;n=(i&~(1<<32-Ui(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kS={readContext:Mi,useCallback:p_,useContext:Mi,useEffect:Vh,useImperativeHandle:h_,useInsertionEffect:u_,useLayoutEffect:f_,useMemo:m_,useReducer:Du,useRef:c_,useState:function(){return Du(Na)},useDebugValue:Hh,useDeferredValue:function(t){var e=Ei();return g_(e,fn.memoizedState,t)},useTransition:function(){var t=Du(Na)[0],e=Ei().memoizedState;return[t,e]},useMutableSource:n_,useSyncExternalStore:i_,useId:__,unstable_isNewReconciler:!1},zS={readContext:Mi,useCallback:p_,useContext:Mi,useEffect:Vh,useImperativeHandle:h_,useInsertionEffect:u_,useLayoutEffect:f_,useMemo:m_,useReducer:Iu,useRef:c_,useState:function(){return Iu(Na)},useDebugValue:Hh,useDeferredValue:function(t){var e=Ei();return fn===null?e.memoizedState=t:g_(e,fn.memoizedState,t)},useTransition:function(){var t=Iu(Na)[0],e=Ei().memoizedState;return[t,e]},useMutableSource:n_,useSyncExternalStore:i_,useId:__,unstable_isNewReconciler:!1};function Pi(t,e){if(t&&t.defaultProps){e=Yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?Os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Hn(),r=Qr(t),s=xr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Kr(t,s,r),e!==null&&(Fi(e,t,r,i),Zl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Hn(),r=Qr(t),s=xr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Kr(t,s,r),e!==null&&(Fi(e,t,r,i),Zl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Hn(),i=Qr(t),r=xr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Kr(t,r,i),e!==null&&(Fi(e,t,i,n),Zl(e,t,i))}};function hm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ra(n,i)||!Ra(r,s):!0}function y_(t,e,n){var i=!1,r=ts,s=e.contextType;return typeof s=="object"&&s!==null?s=Mi(s):(r=Zn(e)?bs:Un.current,i=e.contextTypes,s=(i=i!=null)?To(t,r):ts),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function pm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function ed(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Uh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Mi(s):(s=Zn(e)?bs:Un.current,r.context=To(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zc.enqueueReplaceState(r,r.state,null),Tc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bo(t,e){try{var n="",i=e;do n+=px(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function td(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GS=typeof WeakMap=="function"?WeakMap:Map;function M_(t,e,n){n=xr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Pc||(Pc=!0,fd=i),td(t,e)},n}function E_(t,e,n){n=xr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){td(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){td(t,e),typeof i!="function"&&(Zr===null?Zr=new Set([this]):Zr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new GS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=ty.bind(null,t,e,n),e.then(t,t))}function gm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _m(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xr(-1,1),e.tag=2,Kr(n,e,1))),n.lanes|=1),t)}var VS=Cr.ReactCurrentOwner,qn=!1;function Vn(t,e,n,i){e.child=t===null?Qg(e,null,n,i):Ro(e,t.child,n,i)}function vm(t,e,n,i,r){n=n.render;var s=e.ref;return So(e,r),i=zh(t,e,n,i,s,r),n=Gh(),t!==null&&!qn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Tr(t,e,r)):(Vt&&n&&Ch(e),e.flags|=1,Vn(t,e,i,r),e.child)}function xm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Zh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,w_(t,e,s,i,r)):(t=ic(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(o,i)&&t.ref===e.ref)return Tr(t,e,r)}return e.flags|=1,t=Jr(s,i),t.ref=e.ref,t.return=e,e.child=t}function w_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ra(s,i)&&t.ref===e.ref)if(qn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(qn=!0);else return e.lanes=t.lanes,Tr(t,e,r)}return nd(t,e,n,i,r)}function T_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(mo,oi),oi|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ot(mo,oi),oi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ot(mo,oi),oi|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ot(mo,oi),oi|=i;return Vn(t,e,r,n),e.child}function A_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nd(t,e,n,i,r){var s=Zn(n)?bs:Un.current;return s=To(e,s),So(e,r),n=zh(t,e,n,i,s,r),i=Gh(),t!==null&&!qn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Tr(t,e,r)):(Vt&&i&&Ch(e),e.flags|=1,Vn(t,e,n,r),e.child)}function Sm(t,e,n,i,r){if(Zn(n)){var s=!0;Sc(e)}else s=!1;if(So(e,r),e.stateNode===null)ec(t,e),y_(e,n,i),ed(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Mi(c):(c=Zn(n)?bs:Un.current,c=To(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&pm(e,o,i,c),kr=!1;var f=e.memoizedState;o.state=f,Tc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Kn.current||kr?(typeof d=="function"&&(Jf(e,n,d,i),l=e.memoizedState),(a=kr||hm(e,n,a,i,f,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,e_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Pi(e.type,a),o.props=c,p=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mi(l):(l=Zn(n)?bs:Un.current,l=To(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||f!==l)&&pm(e,o,i,l),kr=!1,f=e.memoizedState,o.state=f,Tc(e,i,o,r);var y=e.memoizedState;a!==p||f!==y||Kn.current||kr?(typeof g=="function"&&(Jf(e,n,g,i),y=e.memoizedState),(c=kr||hm(e,n,c,i,f,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return id(t,e,n,i,s,r)}function id(t,e,n,i,r,s){A_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&sm(e,n,!1),Tr(t,e,s);i=e.stateNode,VS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ro(e,t.child,null,s),e.child=Ro(e,null,a,s)):Vn(t,e,a,s),e.memoizedState=i.state,r&&sm(e,n,!0),e.child}function R_(t){var e=t.stateNode;e.pendingContext?rm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rm(t,e.context,!1),Fh(t,e.containerInfo)}function ym(t,e,n,i,r){return Ao(),Ph(r),e.flags|=256,Vn(t,e,n,i),e.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function C_(t,e,n){var i=e.pendingProps,r=Wt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ot(Wt,r&1),t===null)return Zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=eu(o,i,0,null),t=Cs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sd(n),e.memoizedState=rd,t):Wh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return HS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Jr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Jr(a,s):(s=Cs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?sd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rd,i}return s=t.child,t=s.sibling,i=Jr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wh(t,e){return e=eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pl(t,e,n,i){return i!==null&&Ph(i),Ro(e,t.child,null,n),t=Wh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Nu(Error(xe(422))),pl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=eu({mode:"visible",children:i.children},r,0,null),s=Cs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ro(e,t.child,null,o),e.child.memoizedState=sd(o),e.memoizedState=rd,s);if(!(e.mode&1))return pl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(xe(419)),i=Nu(s,i,void 0),pl(t,e,o,i)}if(a=(o&t.childLanes)!==0,qn||a){if(i=_n,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,wr(t,r),Fi(i,t,r,-1))}return Kh(),i=Nu(Error(xe(421))),pl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ny.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ci=qr(r.nextSibling),ui=e,Vt=!0,Di=null,t!==null&&(vi[xi++]=gr,vi[xi++]=_r,vi[xi++]=Ps,gr=t.id,_r=t.overflow,Ps=e),e=Wh(e,i.children),e.flags|=4096,e)}function Mm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Qf(t.return,e,n)}function Uu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function b_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vn(t,e,i.children,n),i=Wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mm(t,n,e);else if(t.tag===19)Mm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ot(Wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ac(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Uu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ac(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Uu(e,!0,n,null,s);break;case"together":Uu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ec(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ds|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(xe(153));if(e.child!==null){for(t=e.child,n=Jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WS(t,e,n){switch(e.tag){case 3:R_(e),Ao();break;case 5:t_(e);break;case 1:Zn(e.type)&&Sc(e);break;case 4:Fh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ot(Ec,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ot(Wt,Wt.current&1),e.flags|=128,null):n&e.child.childLanes?C_(t,e,n):(Ot(Wt,Wt.current&1),t=Tr(t,e,n),t!==null?t.sibling:null);Ot(Wt,Wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return b_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ot(Wt,Wt.current),i)break;return null;case 22:case 23:return e.lanes=0,T_(t,e,n)}return Tr(t,e,n)}var P_,od,L_,D_;P_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};od=function(){};L_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ws(nr.current);var s=null;switch(n){case"input":r=Cf(t,r),i=Cf(t,i),s=[];break;case"select":r=Yt({},r,{value:void 0}),i=Yt({},i,{value:void 0}),s=[];break;case"textarea":r=Lf(t,r),i=Lf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vc)}If(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&kt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};D_=function(t,e,n,i){n!==i&&(e.flags|=4)};function $o(t,e){if(!Vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Cn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function XS(t,e,n){var i=e.pendingProps;switch(bh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(e),null;case 1:return Zn(e.type)&&xc(),Cn(e),null;case 3:return i=e.stateNode,Co(),zt(Kn),zt(Un),Bh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Di!==null&&(pd(Di),Di=null))),od(t,e),Cn(e),null;case 5:Oh(e);var r=ws(Da.current);if(n=e.type,t!==null&&e.stateNode!=null)L_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(xe(166));return Cn(e),null}if(t=ws(nr.current),dl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Zi]=e,i[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":kt("cancel",i),kt("close",i);break;case"iframe":case"object":case"embed":kt("load",i);break;case"video":case"audio":for(r=0;r<la.length;r++)kt(la[r],i);break;case"source":kt("error",i);break;case"img":case"image":case"link":kt("error",i),kt("load",i);break;case"details":kt("toggle",i);break;case"input":Lp(i,s),kt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},kt("invalid",i);break;case"textarea":Ip(i,s),kt("invalid",i)}If(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&fl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fl(i.textContent,a,t),r=["children",""+a]):Sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&kt("scroll",i)}switch(n){case"input":il(i),Dp(i,s,!0);break;case"textarea":il(i),Np(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=og(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Zi]=e,t[Pa]=i,P_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nf(n,i),n){case"dialog":kt("cancel",t),kt("close",t),r=i;break;case"iframe":case"object":case"embed":kt("load",t),r=i;break;case"video":case"audio":for(r=0;r<la.length;r++)kt(la[r],t);r=i;break;case"source":kt("error",t),r=i;break;case"img":case"image":case"link":kt("error",t),kt("load",t),r=i;break;case"details":kt("toggle",t),r=i;break;case"input":Lp(t,i),r=Cf(t,i),kt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Yt({},i,{value:void 0}),kt("invalid",t);break;case"textarea":Ip(t,i),r=Lf(t,i),kt("invalid",t);break;default:r=i}If(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?cg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ag(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ya(t,l):typeof l=="number"&&ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&kt("scroll",t):l!=null&&ph(t,s,l,o))}switch(n){case"input":il(t),Dp(t,i,!1);break;case"textarea":il(t),Np(t);break;case"option":i.value!=null&&t.setAttribute("value",""+es(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?go(t,!!i.multiple,s,!1):i.defaultValue!=null&&go(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Cn(e),null;case 6:if(t&&e.stateNode!=null)D_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(xe(166));if(n=ws(Da.current),ws(nr.current),dl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Zi]=e,(s=i.nodeValue!==n)&&(t=ui,t!==null))switch(t.tag){case 3:fl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Zi]=e,e.stateNode=i}return Cn(e),null;case 13:if(zt(Wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Vt&&ci!==null&&e.mode&1&&!(e.flags&128))Kg(),Ao(),e.flags|=98560,s=!1;else if(s=dl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(xe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(xe(317));s[Zi]=e}else Ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Cn(e),s=!1}else Di!==null&&(pd(Di),Di=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Wt.current&1?dn===0&&(dn=3):Kh())),e.updateQueue!==null&&(e.flags|=4),Cn(e),null);case 4:return Co(),od(t,e),t===null&&Ca(e.stateNode.containerInfo),Cn(e),null;case 10:return Ih(e.type._context),Cn(e),null;case 17:return Zn(e.type)&&xc(),Cn(e),null;case 19:if(zt(Wt),s=e.memoizedState,s===null)return Cn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)$o(s,!1);else{if(dn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ac(t),o!==null){for(e.flags|=128,$o(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ot(Wt,Wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&en()>Po&&(e.flags|=128,i=!0,$o(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ac(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Vt)return Cn(e),null}else 2*en()-s.renderingStartTime>Po&&n!==1073741824&&(e.flags|=128,i=!0,$o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=en(),e.sibling=null,n=Wt.current,Ot(Wt,i?n&1|2:n&1),e):(Cn(e),null);case 22:case 23:return qh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?oi&1073741824&&(Cn(e),e.subtreeFlags&6&&(e.flags|=8192)):Cn(e),null;case 24:return null;case 25:return null}throw Error(xe(156,e.tag))}function jS(t,e){switch(bh(e),e.tag){case 1:return Zn(e.type)&&xc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Co(),zt(Kn),zt(Un),Bh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Oh(e),null;case 13:if(zt(Wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(xe(340));Ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return zt(Wt),null;case 4:return Co(),null;case 10:return Ih(e.type._context),null;case 22:case 23:return qh(),null;case 24:return null;default:return null}}var ml=!1,Dn=!1,YS=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function po(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){qt(t,e,i)}else n.current=null}function ad(t,e,n){try{n()}catch(i){qt(t,e,i)}}var Em=!1;function $S(t,e){if(Wf=mc,t=Og(),Rh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,p=t,f=null;t:for(;;){for(var g;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xf={focusedElem:t,selectionRange:n},mc=!1,Fe=e;Fe!==null;)if(e=Fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Fe=t;else for(;Fe!==null;){e=Fe;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,v=y.memoizedState,u=e.stateNode,h=u.getSnapshotBeforeUpdate(e.elementType===e.type?w:Pi(e.type,w),v);u.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(xe(163))}}catch(E){qt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Fe=t;break}Fe=e.return}return y=Em,Em=!1,y}function _a(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ad(e,n,s)}r=r.next}while(r!==i)}}function Qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ld(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function I_(t){var e=t.alternate;e!==null&&(t.alternate=null,I_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zi],delete e[Pa],delete e[$f],delete e[PS],delete e[LS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N_(t){return t.tag===5||t.tag===3||t.tag===4}function wm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vc));else if(i!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}function ud(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}var yn=null,Li=!1;function Lr(t,e,n){for(n=n.child;n!==null;)U_(t,e,n),n=n.sibling}function U_(t,e,n){if(tr&&typeof tr.onCommitFiberUnmount=="function")try{tr.onCommitFiberUnmount(Wc,n)}catch{}switch(n.tag){case 5:Dn||po(n,e);case 6:var i=yn,r=Li;yn=null,Lr(t,e,n),yn=i,Li=r,yn!==null&&(Li?(t=yn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):yn.removeChild(n.stateNode));break;case 18:yn!==null&&(Li?(t=yn,n=n.stateNode,t.nodeType===8?Cu(t.parentNode,n):t.nodeType===1&&Cu(t,n),Ta(t)):Cu(yn,n.stateNode));break;case 4:i=yn,r=Li,yn=n.stateNode.containerInfo,Li=!0,Lr(t,e,n),yn=i,Li=r;break;case 0:case 11:case 14:case 15:if(!Dn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ad(n,e,o),r=r.next}while(r!==i)}Lr(t,e,n);break;case 1:if(!Dn&&(po(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){qt(n,e,a)}Lr(t,e,n);break;case 21:Lr(t,e,n);break;case 22:n.mode&1?(Dn=(i=Dn)||n.memoizedState!==null,Lr(t,e,n),Dn=i):Lr(t,e,n);break;default:Lr(t,e,n)}}function Tm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YS),e.forEach(function(i){var r=iy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ti(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:yn=a.stateNode,Li=!1;break e;case 3:yn=a.stateNode.containerInfo,Li=!0;break e;case 4:yn=a.stateNode.containerInfo,Li=!0;break e}a=a.return}if(yn===null)throw Error(xe(160));U_(s,o,r),yn=null,Li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){qt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F_(e,t),e=e.sibling}function F_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ti(e,t),ji(t),i&4){try{_a(3,t,t.return),Qc(3,t)}catch(w){qt(t,t.return,w)}try{_a(5,t,t.return)}catch(w){qt(t,t.return,w)}}break;case 1:Ti(e,t),ji(t),i&512&&n!==null&&po(n,n.return);break;case 5:if(Ti(e,t),ji(t),i&512&&n!==null&&po(n,n.return),t.flags&32){var r=t.stateNode;try{ya(r,"")}catch(w){qt(t,t.return,w)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rg(r,s),Nf(a,o);var c=Nf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],p=l[o+1];d==="style"?cg(r,p):d==="dangerouslySetInnerHTML"?ag(r,p):d==="children"?ya(r,p):ph(r,d,p,c)}switch(a){case"input":bf(r,s);break;case"textarea":sg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?go(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?go(r,!!s.multiple,s.defaultValue,!0):go(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(w){qt(t,t.return,w)}}break;case 6:if(Ti(e,t),ji(t),i&4){if(t.stateNode===null)throw Error(xe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(w){qt(t,t.return,w)}}break;case 3:if(Ti(e,t),ji(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(w){qt(t,t.return,w)}break;case 4:Ti(e,t),ji(t);break;case 13:Ti(e,t),ji(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Yh=en())),i&4&&Tm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Dn=(c=Dn)||d,Ti(e,t),Dn=c):Ti(e,t),ji(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Fe=t,d=t.child;d!==null;){for(p=Fe=d;Fe!==null;){switch(f=Fe,g=f.child,f.tag){case 0:case 11:case 14:case 15:_a(4,f,f.return);break;case 1:po(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){qt(i,n,w)}}break;case 5:po(f,f.return);break;case 22:if(f.memoizedState!==null){Rm(p);continue}}g!==null?(g.return=f,Fe=g):Rm(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lg("display",o))}catch(w){qt(t,t.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){qt(t,t.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ti(e,t),ji(t),i&4&&Tm(t);break;case 21:break;default:Ti(e,t),ji(t)}}function ji(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N_(n)){var i=n;break e}n=n.return}throw Error(xe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ya(r,""),i.flags&=-33);var s=wm(t);ud(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=wm(t);cd(t,a,o);break;default:throw Error(xe(161))}}catch(l){qt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qS(t,e,n){Fe=t,O_(t)}function O_(t,e,n){for(var i=(t.mode&1)!==0;Fe!==null;){var r=Fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ml;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Dn;a=ml;var c=Dn;if(ml=o,(Dn=l)&&!c)for(Fe=r;Fe!==null;)o=Fe,l=o.child,o.tag===22&&o.memoizedState!==null?Cm(r):l!==null?(l.return=o,Fe=l):Cm(r);for(;s!==null;)Fe=s,O_(s),s=s.sibling;Fe=r,ml=a,Dn=c}Am(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Fe=s):Am(t)}}function Am(t){for(;Fe!==null;){var e=Fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Dn||Qc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Dn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&um(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}um(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ta(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(xe(163))}Dn||e.flags&512&&ld(e)}catch(f){qt(e,e.return,f)}}if(e===t){Fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Fe=n;break}Fe=e.return}}function Rm(t){for(;Fe!==null;){var e=Fe;if(e===t){Fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Fe=n;break}Fe=e.return}}function Cm(t){for(;Fe!==null;){var e=Fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qc(4,e)}catch(l){qt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){qt(e,r,l)}}var s=e.return;try{ld(e)}catch(l){qt(e,s,l)}break;case 5:var o=e.return;try{ld(e)}catch(l){qt(e,o,l)}}}catch(l){qt(e,e.return,l)}if(e===t){Fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Fe=a;break}Fe=e.return}}var KS=Math.ceil,bc=Cr.ReactCurrentDispatcher,Xh=Cr.ReactCurrentOwner,yi=Cr.ReactCurrentBatchConfig,wt=0,_n=null,an=null,En=0,oi=0,mo=ss(0),dn=0,Fa=null,Ds=0,Jc=0,jh=0,va=null,$n=null,Yh=0,Po=1/0,pr=null,Pc=!1,fd=null,Zr=null,gl=!1,Wr=null,Lc=0,xa=0,dd=null,tc=-1,nc=0;function Hn(){return wt&6?en():tc!==-1?tc:tc=en()}function Qr(t){return t.mode&1?wt&2&&En!==0?En&-En:IS.transition!==null?(nc===0&&(nc=yg()),nc):(t=bt,t!==0||(t=window.event,t=t===void 0?16:Cg(t.type)),t):1}function Fi(t,e,n,i){if(50<xa)throw xa=0,dd=null,Error(xe(185));Ga(t,n,i),(!(wt&2)||t!==_n)&&(t===_n&&(!(wt&2)&&(Jc|=n),dn===4&&Gr(t,En)),Qn(t,i),n===1&&wt===0&&!(e.mode&1)&&(Po=en()+500,qc&&os()))}function Qn(t,e){var n=t.callbackNode;Ix(t,e);var i=pc(t,t===_n?En:0);if(i===0)n!==null&&Op(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Op(n),e===1)t.tag===0?DS(bm.bind(null,t)):Yg(bm.bind(null,t)),CS(function(){!(wt&6)&&os()}),n=null;else{switch(Mg(i)){case 1:n=xh;break;case 4:n=xg;break;case 16:n=hc;break;case 536870912:n=Sg;break;default:n=hc}n=X_(n,B_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function B_(t,e){if(tc=-1,nc=0,wt&6)throw Error(xe(327));var n=t.callbackNode;if(yo()&&t.callbackNode!==n)return null;var i=pc(t,t===_n?En:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dc(t,i);else{e=i;var r=wt;wt|=2;var s=z_();(_n!==t||En!==e)&&(pr=null,Po=en()+500,Rs(t,e));do try{JS();break}catch(a){k_(t,a)}while(!0);Dh(),bc.current=s,wt=r,an!==null?e=0:(_n=null,En=0,e=dn)}if(e!==0){if(e===2&&(r=kf(t),r!==0&&(i=r,e=hd(t,r))),e===1)throw n=Fa,Rs(t,0),Gr(t,i),Qn(t,en()),n;if(e===6)Gr(t,i);else{if(r=t.current.alternate,!(i&30)&&!ZS(r)&&(e=Dc(t,i),e===2&&(s=kf(t),s!==0&&(i=s,e=hd(t,s))),e===1))throw n=Fa,Rs(t,0),Gr(t,i),Qn(t,en()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(xe(345));case 2:ms(t,$n,pr);break;case 3:if(Gr(t,i),(i&130023424)===i&&(e=Yh+500-en(),10<e)){if(pc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Yf(ms.bind(null,t,$n,pr),e);break}ms(t,$n,pr);break;case 4:if(Gr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ui(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=en()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*KS(i/1960))-i,10<i){t.timeoutHandle=Yf(ms.bind(null,t,$n,pr),i);break}ms(t,$n,pr);break;case 5:ms(t,$n,pr);break;default:throw Error(xe(329))}}}return Qn(t,en()),t.callbackNode===n?B_.bind(null,t):null}function hd(t,e){var n=va;return t.current.memoizedState.isDehydrated&&(Rs(t,e).flags|=256),t=Dc(t,e),t!==2&&(e=$n,$n=n,e!==null&&pd(e)),t}function pd(t){$n===null?$n=t:$n.push.apply($n,t)}function ZS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Bi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gr(t,e){for(e&=~jh,e&=~Jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ui(e),i=1<<n;t[n]=-1,e&=~i}}function bm(t){if(wt&6)throw Error(xe(327));yo();var e=pc(t,0);if(!(e&1))return Qn(t,en()),null;var n=Dc(t,e);if(t.tag!==0&&n===2){var i=kf(t);i!==0&&(e=i,n=hd(t,i))}if(n===1)throw n=Fa,Rs(t,0),Gr(t,e),Qn(t,en()),n;if(n===6)throw Error(xe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ms(t,$n,pr),Qn(t,en()),null}function $h(t,e){var n=wt;wt|=1;try{return t(e)}finally{wt=n,wt===0&&(Po=en()+500,qc&&os())}}function Is(t){Wr!==null&&Wr.tag===0&&!(wt&6)&&yo();var e=wt;wt|=1;var n=yi.transition,i=bt;try{if(yi.transition=null,bt=1,t)return t()}finally{bt=i,yi.transition=n,wt=e,!(wt&6)&&os()}}function qh(){oi=mo.current,zt(mo)}function Rs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RS(n)),an!==null)for(n=an.return;n!==null;){var i=n;switch(bh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xc();break;case 3:Co(),zt(Kn),zt(Un),Bh();break;case 5:Oh(i);break;case 4:Co();break;case 13:zt(Wt);break;case 19:zt(Wt);break;case 10:Ih(i.type._context);break;case 22:case 23:qh()}n=n.return}if(_n=t,an=t=Jr(t.current,null),En=oi=e,dn=0,Fa=null,jh=Jc=Ds=0,$n=va=null,Es!==null){for(e=0;e<Es.length;e++)if(n=Es[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Es=null}return t}function k_(t,e){do{var n=an;try{if(Dh(),Ql.current=Cc,Rc){for(var i=Xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rc=!1}if(Ls=0,gn=fn=Xt=null,ga=!1,Ia=0,Xh.current=null,n===null||n.return===null){dn=1,Fa=e,an=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=En,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=gm(o);if(g!==null){g.flags&=-257,_m(g,o,a,s,e),g.mode&1&&mm(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){mm(s,c,e),Kh();break e}l=Error(xe(426))}}else if(Vt&&a.mode&1){var v=gm(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),_m(v,o,a,s,e),Ph(bo(l,a));break e}}s=l=bo(l,a),dn!==4&&(dn=2),va===null?va=[s]:va.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=M_(s,l,e);cm(s,u);break e;case 1:a=l;var h=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Zr===null||!Zr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=E_(s,a,e);cm(s,E);break e}}s=s.return}while(s!==null)}V_(n)}catch(C){e=C,an===n&&n!==null&&(an=n=n.return);continue}break}while(!0)}function z_(){var t=bc.current;return bc.current=Cc,t===null?Cc:t}function Kh(){(dn===0||dn===3||dn===2)&&(dn=4),_n===null||!(Ds&268435455)&&!(Jc&268435455)||Gr(_n,En)}function Dc(t,e){var n=wt;wt|=2;var i=z_();(_n!==t||En!==e)&&(pr=null,Rs(t,e));do try{QS();break}catch(r){k_(t,r)}while(!0);if(Dh(),wt=n,bc.current=i,an!==null)throw Error(xe(261));return _n=null,En=0,dn}function QS(){for(;an!==null;)G_(an)}function JS(){for(;an!==null&&!wx();)G_(an)}function G_(t){var e=W_(t.alternate,t,oi);t.memoizedProps=t.pendingProps,e===null?V_(t):an=e,Xh.current=null}function V_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jS(n,e),n!==null){n.flags&=32767,an=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{dn=6,an=null;return}}else if(n=XS(n,e,oi),n!==null){an=n;return}if(e=e.sibling,e!==null){an=e;return}an=e=t}while(e!==null);dn===0&&(dn=5)}function ms(t,e,n){var i=bt,r=yi.transition;try{yi.transition=null,bt=1,ey(t,e,n,i)}finally{yi.transition=r,bt=i}return null}function ey(t,e,n,i){do yo();while(Wr!==null);if(wt&6)throw Error(xe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(xe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Nx(t,s),t===_n&&(an=_n=null,En=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gl||(gl=!0,X_(hc,function(){return yo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yi.transition,yi.transition=null;var o=bt;bt=1;var a=wt;wt|=4,Xh.current=null,$S(t,n),F_(n,t),SS(Xf),mc=!!Wf,Xf=Wf=null,t.current=n,qS(n),Tx(),wt=a,bt=o,yi.transition=s}else t.current=n;if(gl&&(gl=!1,Wr=t,Lc=r),s=t.pendingLanes,s===0&&(Zr=null),Cx(n.stateNode),Qn(t,en()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Pc)throw Pc=!1,t=fd,fd=null,t;return Lc&1&&t.tag!==0&&yo(),s=t.pendingLanes,s&1?t===dd?xa++:(xa=0,dd=t):xa=0,os(),null}function yo(){if(Wr!==null){var t=Mg(Lc),e=yi.transition,n=bt;try{if(yi.transition=null,bt=16>t?16:t,Wr===null)var i=!1;else{if(t=Wr,Wr=null,Lc=0,wt&6)throw Error(xe(331));var r=wt;for(wt|=4,Fe=t.current;Fe!==null;){var s=Fe,o=s.child;if(Fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Fe=c;Fe!==null;){var d=Fe;switch(d.tag){case 0:case 11:case 15:_a(8,d,s)}var p=d.child;if(p!==null)p.return=d,Fe=p;else for(;Fe!==null;){d=Fe;var f=d.sibling,g=d.return;if(I_(d),d===c){Fe=null;break}if(f!==null){f.return=g,Fe=f;break}Fe=g}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var v=w.sibling;w.sibling=null,w=v}while(w!==null)}}Fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Fe=o;else e:for(;Fe!==null;){if(s=Fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_a(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Fe=u;break e}Fe=s.return}}var h=t.current;for(Fe=h;Fe!==null;){o=Fe;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,Fe=S;else e:for(o=h;Fe!==null;){if(a=Fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qc(9,a)}}catch(C){qt(a,a.return,C)}if(a===o){Fe=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Fe=E;break e}Fe=a.return}}if(wt=r,os(),tr&&typeof tr.onPostCommitFiberRoot=="function")try{tr.onPostCommitFiberRoot(Wc,t)}catch{}i=!0}return i}finally{bt=n,yi.transition=e}}return!1}function Pm(t,e,n){e=bo(n,e),e=M_(t,e,1),t=Kr(t,e,1),e=Hn(),t!==null&&(Ga(t,1,e),Qn(t,e))}function qt(t,e,n){if(t.tag===3)Pm(t,t,n);else for(;e!==null;){if(e.tag===3){Pm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zr===null||!Zr.has(i))){t=bo(n,t),t=E_(e,t,1),e=Kr(e,t,1),t=Hn(),e!==null&&(Ga(e,1,t),Qn(e,t));break}}e=e.return}}function ty(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Hn(),t.pingedLanes|=t.suspendedLanes&n,_n===t&&(En&n)===n&&(dn===4||dn===3&&(En&130023424)===En&&500>en()-Yh?Rs(t,0):jh|=n),Qn(t,e)}function H_(t,e){e===0&&(t.mode&1?(e=ol,ol<<=1,!(ol&130023424)&&(ol=4194304)):e=1);var n=Hn();t=wr(t,e),t!==null&&(Ga(t,e,n),Qn(t,n))}function ny(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),H_(t,n)}function iy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(xe(314))}i!==null&&i.delete(e),H_(t,n)}var W_;W_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kn.current)qn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qn=!1,WS(t,e,n);qn=!!(t.flags&131072)}else qn=!1,Vt&&e.flags&1048576&&$g(e,Mc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ec(t,e),t=e.pendingProps;var r=To(e,Un.current);So(e,n),r=zh(null,e,i,t,r,n);var s=Gh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zn(i)?(s=!0,Sc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Uh(e),r.updater=Zc,e.stateNode=r,r._reactInternals=e,ed(e,i,t,n),e=id(null,e,i,!0,s,n)):(e.tag=0,Vt&&s&&Ch(e),Vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ec(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sy(i),t=Pi(i,t),r){case 0:e=nd(null,e,i,t,n);break e;case 1:e=Sm(null,e,i,t,n);break e;case 11:e=vm(null,e,i,t,n);break e;case 14:e=xm(null,e,i,Pi(i.type,t),n);break e}throw Error(xe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pi(i,r),nd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pi(i,r),Sm(t,e,i,r,n);case 3:e:{if(R_(e),t===null)throw Error(xe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,e_(t,e),Tc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bo(Error(xe(423)),e),e=ym(t,e,i,n,r);break e}else if(i!==r){r=bo(Error(xe(424)),e),e=ym(t,e,i,n,r);break e}else for(ci=qr(e.stateNode.containerInfo.firstChild),ui=e,Vt=!0,Di=null,n=Qg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ao(),i===r){e=Tr(t,e,n);break e}Vn(t,e,i,n)}e=e.child}return e;case 5:return t_(e),t===null&&Zf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,jf(i,r)?o=null:s!==null&&jf(i,s)&&(e.flags|=32),A_(t,e),Vn(t,e,o,n),e.child;case 6:return t===null&&Zf(e),null;case 13:return C_(t,e,n);case 4:return Fh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ro(e,null,i,n):Vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pi(i,r),vm(t,e,i,r,n);case 7:return Vn(t,e,e.pendingProps,n),e.child;case 8:return Vn(t,e,e.pendingProps.children,n),e.child;case 12:return Vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ot(Ec,i._currentValue),i._currentValue=o,s!==null)if(Bi(s.value,o)){if(s.children===r.children&&!Kn.current){e=Tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=xr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(xe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,So(e,n),r=Mi(r),i=i(r),e.flags|=1,Vn(t,e,i,n),e.child;case 14:return i=e.type,r=Pi(i,e.pendingProps),r=Pi(i.type,r),xm(t,e,i,r,n);case 15:return w_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pi(i,r),ec(t,e),e.tag=1,Zn(i)?(t=!0,Sc(e)):t=!1,So(e,n),y_(e,i,r),ed(e,i,r,n),id(null,e,i,!0,t,n);case 19:return b_(t,e,n);case 22:return T_(t,e,n)}throw Error(xe(156,e.tag))};function X_(t,e){return vg(t,e)}function ry(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(t,e,n,i){return new ry(t,e,n,i)}function Zh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sy(t){if(typeof t=="function")return Zh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gh)return 11;if(t===_h)return 14}return 2}function Jr(t,e){var n=t.alternate;return n===null?(n=Si(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ic(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Zh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ro:return Cs(n.children,r,s,e);case mh:o=8,r|=8;break;case wf:return t=Si(12,n,e,r|2),t.elementType=wf,t.lanes=s,t;case Tf:return t=Si(13,n,e,r),t.elementType=Tf,t.lanes=s,t;case Af:return t=Si(19,n,e,r),t.elementType=Af,t.lanes=s,t;case tg:return eu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J0:o=10;break e;case eg:o=9;break e;case gh:o=11;break e;case _h:o=14;break e;case Br:o=16,i=null;break e}throw Error(xe(130,t==null?t:typeof t,""))}return e=Si(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cs(t,e,n,i){return t=Si(7,t,i,e),t.lanes=n,t}function eu(t,e,n,i){return t=Si(22,t,i,e),t.elementType=tg,t.lanes=n,t.stateNode={isHidden:!1},t}function Fu(t,e,n){return t=Si(6,t,null,e),t.lanes=n,t}function Ou(t,e,n){return e=Si(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_u(0),this.expirationTimes=_u(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_u(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Qh(t,e,n,i,r,s,o,a,l){return t=new oy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Si(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uh(s),t}function ay(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:io,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function j_(t){if(!t)return ts;t=t._reactInternals;e:{if(Os(t)!==t||t.tag!==1)throw Error(xe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(xe(171))}if(t.tag===1){var n=t.type;if(Zn(n))return jg(t,n,e)}return e}function Y_(t,e,n,i,r,s,o,a,l){return t=Qh(n,i,!0,t,r,s,o,a,l),t.context=j_(null),n=t.current,i=Hn(),r=Qr(n),s=xr(i,r),s.callback=e??null,Kr(n,s,r),t.current.lanes=r,Ga(t,r,i),Qn(t,i),t}function tu(t,e,n,i){var r=e.current,s=Hn(),o=Qr(r);return n=j_(n),e.context===null?e.context=n:e.pendingContext=n,e=xr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Kr(r,e,o),t!==null&&(Fi(t,r,o,s),Zl(t,r,o)),o}function Ic(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jh(t,e){Lm(t,e),(t=t.alternate)&&Lm(t,e)}function ly(){return null}var $_=typeof reportError=="function"?reportError:function(t){console.error(t)};function ep(t){this._internalRoot=t}nu.prototype.render=ep.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(xe(409));tu(t,e,null,null)};nu.prototype.unmount=ep.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Is(function(){tu(null,t,null,null)}),e[Er]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zr.length&&e!==0&&e<zr[n].priority;n++);zr.splice(n,0,t),n===0&&Rg(t)}};function tp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function cy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ic(o);s.call(c)}}var o=Y_(e,i,t,0,null,!1,!1,"",Dm);return t._reactRootContainer=o,t[Er]=o.current,Ca(t.nodeType===8?t.parentNode:t),Is(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ic(l);a.call(c)}}var l=Qh(t,0,!1,null,null,!1,!1,"",Dm);return t._reactRootContainer=l,t[Er]=l.current,Ca(t.nodeType===8?t.parentNode:t),Is(function(){tu(e,l,n,i)}),l}function ru(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ic(o);a.call(l)}}tu(e,o,t,r)}else o=cy(n,e,t,r,i);return Ic(o)}Eg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=aa(e.pendingLanes);n!==0&&(Sh(e,n|1),Qn(e,en()),!(wt&6)&&(Po=en()+500,os()))}break;case 13:Is(function(){var i=wr(t,1);if(i!==null){var r=Hn();Fi(i,t,1,r)}}),Jh(t,1)}};yh=function(t){if(t.tag===13){var e=wr(t,134217728);if(e!==null){var n=Hn();Fi(e,t,134217728,n)}Jh(t,134217728)}};wg=function(t){if(t.tag===13){var e=Qr(t),n=wr(t,e);if(n!==null){var i=Hn();Fi(n,t,e,i)}Jh(t,e)}};Tg=function(){return bt};Ag=function(t,e){var n=bt;try{return bt=t,e()}finally{bt=n}};Ff=function(t,e,n){switch(e){case"input":if(bf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=$c(i);if(!r)throw Error(xe(90));ig(i),bf(i,r)}}}break;case"textarea":sg(t,n);break;case"select":e=n.value,e!=null&&go(t,!!n.multiple,e,!1)}};dg=$h;hg=Is;var uy={usingClientEntryPoint:!1,Events:[Ha,lo,$c,ug,fg,$h]},qo={findFiberByHostInstance:Ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fy={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gg(t),t===null?null:t.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||ly,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Wc=_l.inject(fy),tr=_l}catch{}}di.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uy;di.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tp(e))throw Error(xe(200));return ay(t,e,null,n)};di.createRoot=function(t,e){if(!tp(t))throw Error(xe(299));var n=!1,i="",r=$_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Qh(t,1,!1,null,null,n,!1,i,r),t[Er]=e.current,Ca(t.nodeType===8?t.parentNode:t),new ep(e)};di.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(xe(188)):(t=Object.keys(t).join(","),Error(xe(268,t)));return t=gg(e),t=t===null?null:t.stateNode,t};di.flushSync=function(t){return Is(t)};di.hydrate=function(t,e,n){if(!iu(e))throw Error(xe(200));return ru(null,t,e,!0,n)};di.hydrateRoot=function(t,e,n){if(!tp(t))throw Error(xe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=$_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Y_(e,null,t,1,n??null,r,!1,s,o),t[Er]=e.current,Ca(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nu(e)};di.render=function(t,e,n){if(!iu(e))throw Error(xe(200));return ru(null,t,e,!1,n)};di.unmountComponentAtNode=function(t){if(!iu(t))throw Error(xe(40));return t._reactRootContainer?(Is(function(){ru(null,null,t,!1,function(){t._reactRootContainer=null,t[Er]=null})}),!0):!1};di.unstable_batchedUpdates=$h;di.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!iu(n))throw Error(xe(200));if(t==null||t._reactInternals===void 0)throw Error(xe(38));return ru(t,e,n,!1,i)};di.version="18.3.1-next-f1338f8080-20240426";function q_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q_)}catch(t){console.error(t)}}q_(),q0.exports=di;var dy=q0.exports,Im=dy;Mf.createRoot=Im.createRoot,Mf.hydrateRoot=Im.hydrateRoot;function K_(t=768){const[e,n]=it.useState(()=>typeof window<"u"?window.matchMedia(`(max-width: ${t}px)`).matches:!1);return it.useEffect(()=>{const i=window.matchMedia(`(max-width: ${t}px)`),r=s=>n(s.matches);return i.addEventListener("change",r),()=>i.removeEventListener("change",r)},[t]),e}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="184",hy=0,Nm=1,py=2,rc=1,Z_=2,ca=3,ns=0,Jn=1,Qi=2,Sr=0,Mo=1,vs=2,Um=3,Fm=4,my=5,xs=100,gy=101,_y=102,vy=103,xy=104,Sy=200,yy=201,My=202,Ey=203,md=204,gd=205,wy=206,Ty=207,Ay=208,Ry=209,Cy=210,by=211,Py=212,Ly=213,Dy=214,_d=0,vd=1,xd=2,Lo=3,Sd=4,yd=5,Md=6,Ed=7,Q_=0,Iy=1,Ny=2,ir=0,J_=1,ip=2,ev=3,tv=4,nv=5,iv=6,rv=7,sv=300,Ns=301,Do=302,Bu=303,ku=304,su=306,wd=1e3,vr=1001,Td=1002,Mn=1003,Uy=1004,vl=1005,In=1006,zu=1007,Ts=1008,li=1009,ov=1010,av=1011,Oa=1012,rp=1013,sr=1014,Ji=1015,Ar=1016,sp=1017,op=1018,Ba=1020,lv=35902,cv=35899,uv=1021,fv=1022,Ni=1023,Rr=1026,As=1027,dv=1028,ap=1029,Us=1030,lp=1031,cp=1033,sc=33776,oc=33777,ac=33778,lc=33779,Ad=35840,Rd=35841,Cd=35842,bd=35843,Pd=36196,Ld=37492,Dd=37496,Id=37488,Nd=37489,Nc=37490,Ud=37491,Fd=37808,Od=37809,Bd=37810,kd=37811,zd=37812,Gd=37813,Vd=37814,Hd=37815,Wd=37816,Xd=37817,jd=37818,Yd=37819,$d=37820,qd=37821,Kd=36492,Zd=36494,Qd=36495,Jd=36283,eh=36284,Uc=36285,th=36286,Fy=3200,nh=0,Oy=1,Vr="",_i="srgb",Fc="srgb-linear",Oc="linear",Ct="srgb",Vs=7680,Om=519,By=512,ky=513,zy=514,up=515,Gy=516,Vy=517,fp=518,Hy=519,Bm=35044,km="300 es",er=2e3,ka=2001;function Wy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Xy(){const t=Bc("canvas");return t.style.display="block",t}const zm={};function Gm(...t){const e="THREE."+t.shift();console.log(e,...t)}function hv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function tt(...t){t=hv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Et(...t){t=hv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ih(...t){const e=t.join(" ");e in zm||(zm[e]=!0,tt(...t))}function jy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Yy={[_d]:vd,[xd]:Md,[Sd]:Ed,[Lo]:yd,[vd]:_d,[Md]:xd,[Ed]:Sd,[yd]:Lo};class Bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gu=Math.PI/180,rh=180/Math.PI;function Xa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[t&255]+bn[t>>8&255]+bn[t>>16&255]+bn[t>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[n&63|128]+bn[n>>8&255]+"-"+bn[n>>16&255]+bn[n>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function yt(t,e,n){return Math.max(e,Math.min(n,t))}function $y(t,e){return(t%e+e)%e}function Vu(t,e,n){return(1-n)*t+n*e}function Ko(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const vp=class vp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vp.prototype.isVector2=!0;let Mt=vp;class Bo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],p=i[r+3],f=s[o+0],g=s[o+1],y=s[o+2],w=s[o+3];if(p!==w||l!==f||c!==g||d!==y){let v=l*f+c*g+d*y+p*w;v<0&&(f=-f,g=-g,y=-y,w=-w,v=-v);let u=1-a;if(v<.9995){const h=Math.acos(v),S=Math.sin(h);u=Math.sin(u*h)/S,a=Math.sin(a*h)/S,l=l*u+f*a,c=c*u+g*a,d=d*u+y*a,p=p*u+w*a}else{l=l*u+f*a,c=c*u+g*a,d=d*u+y*a,p=p*u+w*a;const h=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=h,c*=h,d*=h,p*=h}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],p=s[o],f=s[o+1],g=s[o+2],y=s[o+3];return e[n]=a*y+d*p+l*g-c*f,e[n+1]=l*y+d*f+c*p-a*g,e[n+2]=c*y+d*g+a*f-l*p,e[n+3]=d*y-a*p-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),p=a(s/2),f=l(i/2),g=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=f*d*p+c*g*y,this._y=c*g*p-f*d*y,this._z=c*d*y+f*g*p,this._w=c*d*p-f*g*y;break;case"YXZ":this._x=f*d*p+c*g*y,this._y=c*g*p-f*d*y,this._z=c*d*y-f*g*p,this._w=c*d*p+f*g*y;break;case"ZXY":this._x=f*d*p-c*g*y,this._y=c*g*p+f*d*y,this._z=c*d*y+f*g*p,this._w=c*d*p-f*g*y;break;case"ZYX":this._x=f*d*p-c*g*y,this._y=c*g*p+f*d*y,this._z=c*d*y-f*g*p,this._w=c*d*p+f*g*y;break;case"YZX":this._x=f*d*p+c*g*y,this._y=c*g*p+f*d*y,this._z=c*d*y-f*g*p,this._w=c*d*p-f*g*y;break;case"XZY":this._x=f*d*p-c*g*y,this._y=c*g*p-f*d*y,this._z=c*d*y+f*g*p,this._w=c*d*p+f*g*y;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],p=n[10],f=i+a+p;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>p){const g=2*Math.sqrt(1+i-a-p);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>p){const g=2*Math.sqrt(1+a-i-p);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+p-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xp=class xp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*d,this.y=i+l*d+a*c-s*p,this.z=r+l*p+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xp.prototype.isVector3=!0;let X=xp;const Hu=new X,Vm=new Bo,Sp=class Sp{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],p=i[7],f=i[2],g=i[5],y=i[8],w=r[0],v=r[3],u=r[6],h=r[1],S=r[4],E=r[7],C=r[2],A=r[5],b=r[8];return s[0]=o*w+a*h+l*C,s[3]=o*v+a*S+l*A,s[6]=o*u+a*E+l*b,s[1]=c*w+d*h+p*C,s[4]=c*v+d*S+p*A,s[7]=c*u+d*E+p*b,s[2]=f*w+g*h+y*C,s[5]=f*v+g*S+y*A,s[8]=f*u+g*E+y*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=d*o-a*c,f=a*l-d*s,g=c*s-o*l,y=n*p+i*f+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=p*w,e[1]=(r*c-d*i)*w,e[2]=(a*i-r*o)*w,e[3]=f*w,e[4]=(d*n-r*l)*w,e[5]=(r*s-a*n)*w,e[6]=g*w,e[7]=(i*l-c*n)*w,e[8]=(o*n-i*s)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Wu.makeScale(e,n)),this}rotate(e){return this.premultiply(Wu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sp.prototype.isMatrix3=!0;let rt=Sp;const Wu=new rt,Hm=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wm=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qy(){const t={enabled:!0,workingColorSpace:Fc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ct&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(r.r=Eo(r.r),r.g=Eo(r.g),r.b=Eo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vr?Oc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ih("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ih("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Fc]:{primaries:e,whitePoint:i,transfer:Oc,toXYZ:Hm,fromXYZ:Wm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:i,transfer:Ct,toXYZ:Hm,fromXYZ:Wm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),t}const St=qy();function yr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Eo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hs;class Ky{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hs===void 0&&(Hs=Bc("canvas")),Hs.width=e.width,Hs.height=e.height;const r=Hs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(yr(n[i]/255)*255):n[i]=yr(n[i]);return{data:n,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zy=0;class dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xu(r[o].image)):s.push(Xu(r[o]))}else s=Xu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ky.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let Qy=0;const ju=new X;class Nn extends Bs{constructor(e=Nn.DEFAULT_IMAGE,n=Nn.DEFAULT_MAPPING,i=vr,r=vr,s=In,o=Ts,a=Ni,l=li,c=Nn.DEFAULT_ANISOTROPY,d=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Xa(),this.name="",this.source=new dp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ju).x}get height(){return this.source.getSize(ju).y}get depth(){return this.source.getSize(ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){tt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){tt(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wd:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wd:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=sv;Nn.DEFAULT_ANISOTROPY=1;const yp=class yp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],p=l[8],f=l[1],g=l[5],y=l[9],w=l[2],v=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-w)<.01&&Math.abs(y-v)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+w)<.1&&Math.abs(y+v)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,E=(g+1)/2,C=(u+1)/2,A=(d+f)/4,b=(p+w)/4,x=(y+v)/4;return S>E&&S>C?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=A/i,s=b/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=x/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=x/s),this.set(i,r,s,n),this}let h=Math.sqrt((v-y)*(v-y)+(p-w)*(p-w)+(f-d)*(f-d));return Math.abs(h)<.001&&(h=1),this.x=(v-y)/h,this.y=(p-w)/h,this.z=(f-d)/h,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this.w=yt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this.w=yt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yp.prototype.isVector4=!0;let Kt=yp;class Jy extends Bs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Kt(0,0,e,n),this.scissorTest=!1,this.viewport=new Kt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Nn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new dp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends Jy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class pv extends Nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eM extends Nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vc=class Vc{constructor(e,n,i,r,s,o,a,l,c,d,p,f,g,y,w,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,p,f,g,y,w,v)}set(e,n,i,r,s,o,a,l,c,d,p,f,g,y,w,v){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=p,u[14]=f,u[3]=g,u[7]=y,u[11]=w,u[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ws.setFromMatrixColumn(e,0).length(),s=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=o*d,g=o*p,y=a*d,w=a*p;n[0]=l*d,n[4]=-l*p,n[8]=c,n[1]=g+y*c,n[5]=f-w*c,n[9]=-a*l,n[2]=w-f*c,n[6]=y+g*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,g=l*p,y=c*d,w=c*p;n[0]=f+w*a,n[4]=y*a-g,n[8]=o*c,n[1]=o*p,n[5]=o*d,n[9]=-a,n[2]=g*a-y,n[6]=w+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,g=l*p,y=c*d,w=c*p;n[0]=f-w*a,n[4]=-o*p,n[8]=y+g*a,n[1]=g+y*a,n[5]=o*d,n[9]=w-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,g=o*p,y=a*d,w=a*p;n[0]=l*d,n[4]=y*c-g,n[8]=f*c+w,n[1]=l*p,n[5]=w*c+f,n[9]=g*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*c,y=a*l,w=a*c;n[0]=l*d,n[4]=w-f*p,n[8]=y*p+g,n[1]=p,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*p+y,n[10]=f-w*p}else if(e.order==="XZY"){const f=o*l,g=o*c,y=a*l,w=a*c;n[0]=l*d,n[4]=-p,n[8]=c*d,n[1]=f*p+w,n[5]=o*d,n[9]=g*p-y,n[2]=y*p-g,n[6]=a*d,n[10]=w*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tM,e,nM)}lookAt(e,n,i){const r=this.elements;return ii.subVectors(e,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Dr.crossVectors(i,ii),Dr.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Dr.crossVectors(i,ii)),Dr.normalize(),xl.crossVectors(ii,Dr),r[0]=Dr.x,r[4]=xl.x,r[8]=ii.x,r[1]=Dr.y,r[5]=xl.y,r[9]=ii.y,r[2]=Dr.z,r[6]=xl.z,r[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],p=i[5],f=i[9],g=i[13],y=i[2],w=i[6],v=i[10],u=i[14],h=i[3],S=i[7],E=i[11],C=i[15],A=r[0],b=r[4],x=r[8],R=r[12],D=r[1],I=r[5],k=r[9],ee=r[13],J=r[2],B=r[6],$=r[10],Y=r[14],j=r[3],te=r[7],ce=r[11],Ee=r[15];return s[0]=o*A+a*D+l*J+c*j,s[4]=o*b+a*I+l*B+c*te,s[8]=o*x+a*k+l*$+c*ce,s[12]=o*R+a*ee+l*Y+c*Ee,s[1]=d*A+p*D+f*J+g*j,s[5]=d*b+p*I+f*B+g*te,s[9]=d*x+p*k+f*$+g*ce,s[13]=d*R+p*ee+f*Y+g*Ee,s[2]=y*A+w*D+v*J+u*j,s[6]=y*b+w*I+v*B+u*te,s[10]=y*x+w*k+v*$+u*ce,s[14]=y*R+w*ee+v*Y+u*Ee,s[3]=h*A+S*D+E*J+C*j,s[7]=h*b+S*I+E*B+C*te,s[11]=h*x+S*k+E*$+C*ce,s[15]=h*R+S*ee+E*Y+C*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],p=e[6],f=e[10],g=e[14],y=e[3],w=e[7],v=e[11],u=e[15],h=l*g-c*f,S=a*g-c*p,E=a*f-l*p,C=o*g-c*d,A=o*f-l*d,b=o*p-a*d;return n*(w*h-v*S+u*E)-i*(y*h-v*C+u*A)+r*(y*S-w*C+u*b)-s*(y*E-w*A+v*b)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=e[9],f=e[10],g=e[11],y=e[12],w=e[13],v=e[14],u=e[15],h=n*a-i*o,S=n*l-r*o,E=n*c-s*o,C=i*l-r*a,A=i*c-s*a,b=r*c-s*l,x=d*w-p*y,R=d*v-f*y,D=d*u-g*y,I=p*v-f*w,k=p*u-g*w,ee=f*u-g*v,J=h*ee-S*k+E*I+C*D-A*R+b*x;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/J;return e[0]=(a*ee-l*k+c*I)*B,e[1]=(r*k-i*ee-s*I)*B,e[2]=(w*b-v*A+u*C)*B,e[3]=(f*A-p*b-g*C)*B,e[4]=(l*D-o*ee-c*R)*B,e[5]=(n*ee-r*D+s*R)*B,e[6]=(v*E-y*b-u*S)*B,e[7]=(d*b-f*E+g*S)*B,e[8]=(o*k-a*D+c*x)*B,e[9]=(i*D-n*k-s*x)*B,e[10]=(y*A-w*E+u*h)*B,e[11]=(p*E-d*A-g*h)*B,e[12]=(a*R-o*I-l*x)*B,e[13]=(n*I-i*R+r*x)*B,e[14]=(w*S-y*C-v*h)*B,e[15]=(d*C-p*S+f*h)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,p=a+a,f=s*c,g=s*d,y=s*p,w=o*d,v=o*p,u=a*p,h=l*c,S=l*d,E=l*p,C=i.x,A=i.y,b=i.z;return r[0]=(1-(w+u))*C,r[1]=(g+E)*C,r[2]=(y-S)*C,r[3]=0,r[4]=(g-E)*A,r[5]=(1-(f+u))*A,r[6]=(v+h)*A,r[7]=0,r[8]=(y+S)*b,r[9]=(v-h)*b,r[10]=(1-(f+w))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Ws.set(r[0],r[1],r[2]).length();const a=Ws.set(r[4],r[5],r[6]).length(),l=Ws.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ai.copy(this);const c=1/o,d=1/a,p=1/l;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=d,Ai.elements[5]*=d,Ai.elements[6]*=d,Ai.elements[8]*=p,Ai.elements[9]*=p,Ai.elements[10]*=p,n.setFromRotationMatrix(Ai),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=er,l=!1){const c=this.elements,d=2*s/(n-e),p=2*s/(i-r),f=(n+e)/(n-e),g=(i+r)/(i-r);let y,w;if(l)y=s/(o-s),w=o*s/(o-s);else if(a===er)y=-(o+s)/(o-s),w=-2*o*s/(o-s);else if(a===ka)y=-o/(o-s),w=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=er,l=!1){const c=this.elements,d=2/(n-e),p=2/(i-r),f=-(n+e)/(n-e),g=-(i+r)/(i-r);let y,w;if(l)y=1/(o-s),w=o/(o-s);else if(a===er)y=-2/(o-s),w=-(o+s)/(o-s);else if(a===ka)y=-1/(o-s),w=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=y,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Vc.prototype.isMatrix4=!0;let jt=Vc;const Ws=new X,Ai=new jt,tM=new X(0,0,0),nM=new X(1,1,1),Dr=new X,xl=new X,ii=new X,Xm=new jt,jm=new Bo;class is{constructor(e=0,n=0,i=0,r=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],p=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jm.setFromEuler(this),this.setFromQuaternion(jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class mv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iM=0;const Ym=new X,Xs=new Bo,cr=new jt,Sl=new X,Zo=new X,rM=new X,sM=new Bo,$m=new X(1,0,0),qm=new X(0,1,0),Km=new X(0,0,1),Zm={type:"added"},oM={type:"removed"},js={type:"childadded",child:null},Yu={type:"childremoved",child:null};class wn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new X,n=new is,i=new Bo,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new rt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xs.setFromAxisAngle(e,n),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,n){return Xs.setFromAxisAngle(e,n),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(qm,e)}rotateZ(e){return this.rotateOnAxis(Km,e)}translateOnAxis(e,n){return Ym.copy(e).applyQuaternion(this.quaternion),this.position.add(Ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(qm,e)}translateZ(e){return this.translateOnAxis(Km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Sl.copy(e):Sl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(Zo,Sl,this.up):cr.lookAt(Sl,Zo,this.up),this.quaternion.setFromRotationMatrix(cr),r&&(cr.extractRotation(r.matrixWorld),Xs.setFromRotationMatrix(cr),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zm),js.child=e,this.dispatchEvent(js),js.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(oM),Yu.child=e,this.dispatchEvent(Yu),Yu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zm),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,rM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,sM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),p=o(e.shapes),f=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wn.DEFAULT_UP=new X(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gt extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aM={type:"move"};class $u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const w of e.hand.values()){const v=n.getJointPose(w,i),u=this._getHandJoint(c,w);v!==null&&(u.matrix.fromArray(v.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=v.radius),u.visible=v!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=d.position.distanceTo(p.position),g=.02,y=.005;c.inputState.pinching&&f>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Gt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},yl={h:0,s:0,l:0};function qu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ht{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=St.workingColorSpace){return this.r=e,this.g=n,this.b=i,St.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=St.workingColorSpace){if(e=$y(e,1),n=yt(n,0,1),i=yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=qu(o,s,e+1/3),this.g=qu(o,s,e),this.b=qu(o,s,e-1/3)}return St.colorSpaceToWorking(this,r),this}setStyle(e,n=_i){function i(s){s!==void 0&&parseFloat(s)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:tt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_i){const i=gv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return St.workingToColorSpace(Pn.copy(this),e),Math.round(yt(Pn.r*255,0,255))*65536+Math.round(yt(Pn.g*255,0,255))*256+Math.round(yt(Pn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.workingToColorSpace(Pn.copy(this),n);const i=Pn.r,r=Pn.g,s=Pn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=d<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=St.workingColorSpace){return St.workingToColorSpace(Pn.copy(this),n),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=_i){St.workingToColorSpace(Pn.copy(this),e);const n=Pn.r,i=Pn.g,r=Pn.b;return e!==_i?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+n,Ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ir),e.getHSL(yl);const i=Vu(Ir.h,yl.h,n),r=Vu(Ir.s,yl.s,n),s=Vu(Ir.l,yl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new ht;ht.NAMES=gv;class hp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ht(e),this.density=n}clone(){return new hp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class lM extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ri=new X,ur=new X,Ku=new X,fr=new X,Ys=new X,$s=new X,Qm=new X,Zu=new X,Qu=new X,Ju=new X,ef=new Kt,tf=new Kt,nf=new Kt;class Ii{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ri.subVectors(e,n),r.cross(Ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ri.subVectors(r,n),ur.subVectors(i,n),Ku.subVectors(e,n);const o=Ri.dot(Ri),a=Ri.dot(ur),l=Ri.dot(Ku),c=ur.dot(ur),d=ur.dot(Ku),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const f=1/p,g=(c*l-a*d)*f,y=(o*d-a*l)*f;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,fr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fr.x),l.addScaledVector(o,fr.y),l.addScaledVector(a,fr.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ef.setScalar(0),tf.setScalar(0),nf.setScalar(0),ef.fromBufferAttribute(e,n),tf.fromBufferAttribute(e,i),nf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ef,s.x),o.addScaledVector(tf,s.y),o.addScaledVector(nf,s.z),o}static isFrontFacing(e,n,i,r){return Ri.subVectors(i,n),ur.subVectors(e,n),Ri.cross(ur).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Ri.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ys.subVectors(r,i),$s.subVectors(s,i),Zu.subVectors(e,i);const l=Ys.dot(Zu),c=$s.dot(Zu);if(l<=0&&c<=0)return n.copy(i);Qu.subVectors(e,r);const d=Ys.dot(Qu),p=$s.dot(Qu);if(d>=0&&p<=d)return n.copy(r);const f=l*p-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Ys,o);Ju.subVectors(e,s);const g=Ys.dot(Ju),y=$s.dot(Ju);if(y>=0&&g<=y)return n.copy(s);const w=g*c-l*y;if(w<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector($s,a);const v=d*y-g*p;if(v<=0&&p-d>=0&&g-y>=0)return Qm.subVectors(s,r),a=(p-d)/(p-d+(g-y)),n.copy(r).addScaledVector(Qm,a);const u=1/(v+w+f);return o=w*u,a=f*u,n.copy(i).addScaledVector(Ys,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ja{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ci):Ci.fromBufferAttribute(s,o),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ml.copy(i.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),El.subVectors(this.max,Qo),qs.subVectors(e.a,Qo),Ks.subVectors(e.b,Qo),Zs.subVectors(e.c,Qo),Nr.subVectors(Ks,qs),Ur.subVectors(Zs,Ks),us.subVectors(qs,Zs);let n=[0,-Nr.z,Nr.y,0,-Ur.z,Ur.y,0,-us.z,us.y,Nr.z,0,-Nr.x,Ur.z,0,-Ur.x,us.z,0,-us.x,-Nr.y,Nr.x,0,-Ur.y,Ur.x,0,-us.y,us.x,0];return!rf(n,qs,Ks,Zs,El)||(n=[1,0,0,0,1,0,0,0,1],!rf(n,qs,Ks,Zs,El))?!1:(wl.crossVectors(Nr,Ur),n=[wl.x,wl.y,wl.z],rf(n,qs,Ks,Zs,El))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dr=[new X,new X,new X,new X,new X,new X,new X,new X],Ci=new X,Ml=new ja,qs=new X,Ks=new X,Zs=new X,Nr=new X,Ur=new X,us=new X,Qo=new X,El=new X,wl=new X,fs=new X;function rf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){fs.fromArray(t,s);const a=r.x*Math.abs(fs.x)+r.y*Math.abs(fs.y)+r.z*Math.abs(fs.z),l=e.dot(fs),c=n.dot(fs),d=i.dot(fs);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const on=new X,Tl=new Mt;let cM=0;class Oi extends Bs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Bm,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Tl.fromBufferAttribute(this,n),Tl.applyMatrix3(e),this.setXY(n,Tl.x,Tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyMatrix3(e),this.setXYZ(n,on.x,on.y,on.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyMatrix4(e),this.setXYZ(n,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyNormalMatrix(e),this.setXYZ(n,on.x,on.y,on.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.transformDirection(e),this.setXYZ(n,on.x,on.y,on.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ko(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ko(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ko(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ko(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ko(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yn(n,this.array),i=Yn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yn(n,this.array),i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yn(n,this.array),i=Yn(i,this.array),r=Yn(r,this.array),s=Yn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class _v extends Oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class vv extends Oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ln extends Oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const uM=new ja,Jo=new X,sf=new X;class Ya{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const n=Jo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Jo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(sf)),this.expandByPoint(Jo.copy(e.center).sub(sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let fM=0;const gi=new jt,of=new wn,Qs=new X,ri=new ja,ea=new ja,mn=new X;class Fn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wy(e)?vv:_v)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,n,i){return gi.makeTranslation(e,n,i),this.applyMatrix4(gi),this}scale(e,n,i){return gi.makeScale(e,n,i),this.applyMatrix4(gi),this}lookAt(e){return of.lookAt(e),of.updateMatrix(),this.applyMatrix4(of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ln(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ea.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(ri.min,ea.min),ri.expandByPoint(mn),mn.addVectors(ri.max,ea.max),ri.expandByPoint(mn)):(ri.expandByPoint(ea.min),ri.expandByPoint(ea.max))}ri.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)mn.fromBufferAttribute(a,c),l&&(Qs.fromBufferAttribute(e,c),mn.add(Qs)),r=Math.max(r,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new X,l[x]=new X;const c=new X,d=new X,p=new X,f=new Mt,g=new Mt,y=new Mt,w=new X,v=new X;function u(x,R,D){c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,R),p.fromBufferAttribute(i,D),f.fromBufferAttribute(s,x),g.fromBufferAttribute(s,R),y.fromBufferAttribute(s,D),d.sub(c),p.sub(c),g.sub(f),y.sub(f);const I=1/(g.x*y.y-y.x*g.y);isFinite(I)&&(w.copy(d).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(I),v.copy(p).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(I),a[x].add(w),a[R].add(w),a[D].add(w),l[x].add(v),l[R].add(v),l[D].add(v))}let h=this.groups;h.length===0&&(h=[{start:0,count:e.count}]);for(let x=0,R=h.length;x<R;++x){const D=h[x],I=D.start,k=D.count;for(let ee=I,J=I+k;ee<J;ee+=3)u(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const S=new X,E=new X,C=new X,A=new X;function b(x){C.fromBufferAttribute(r,x),A.copy(C);const R=a[x];S.copy(R),S.sub(C.multiplyScalar(C.dot(R))).normalize(),E.crossVectors(A,R);const I=E.dot(l[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,I)}for(let x=0,R=h.length;x<R;++x){const D=h[x],I=D.start,k=D.count;for(let ee=I,J=I+k;ee<J;ee+=3)b(e.getX(ee+0)),b(e.getX(ee+1)),b(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,d=new X,p=new X;if(e)for(let f=0,g=e.count;f<g;f+=3){const y=e.getX(f+0),w=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,w),o.fromBufferAttribute(n,v),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,v),a.add(d),l.add(d),c.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)mn.fromBufferAttribute(e,n),mn.normalize(),e.setXYZ(n,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,p=a.normalized,f=new c.constructor(l.length*d);let g=0,y=0;for(let w=0,v=l.length;w<v;w++){a.isInterleavedBufferAttribute?g=l[w]*a.data.stride+a.offset:g=l[w]*d;for(let u=0;u<d;u++)f[y++]=c[g++]}return new Oi(f,d,p)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,p=c.length;d<p;d++){const f=c[d],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,f=c.length;p<f;p++){const g=c[p];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],p=s[c];for(let f=0,g=p.length;f<g;f++)d.push(p[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let dM=0;class ks extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=Mo,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){tt(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){tt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mo&&(i.blending=this.blending),this.side!==ns&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==md&&(i.blendSrc=this.blendSrc),this.blendDst!==gd&&(i.blendDst=this.blendDst),this.blendEquation!==xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Om&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hr=new X,af=new X,Al=new X,Fr=new X,lf=new X,Rl=new X,cf=new X;class pp{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,n),hr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){af.copy(e).add(n).multiplyScalar(.5),Al.copy(n).sub(e).normalize(),Fr.copy(this.origin).sub(af);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Al),a=Fr.dot(this.direction),l=-Fr.dot(Al),c=Fr.lengthSq(),d=Math.abs(1-o*o);let p,f,g,y;if(d>0)if(p=o*l-a,f=o*a-l,y=s*d,p>=0)if(f>=-y)if(f<=y){const w=1/d;p*=w,f*=w,g=p*(p+o*f+2*a)+f*(o*p+f+2*l)+c}else f=s,p=Math.max(0,-(o*f+a)),g=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(o*f+a)),g=-p*p+f*(f+2*l)+c;else f<=-y?(p=Math.max(0,-(-o*s+a)),f=p>0?-s:Math.min(Math.max(-s,-l),s),g=-p*p+f*(f+2*l)+c):f<=y?(p=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(p=Math.max(0,-(o*s+a)),f=p>0?s:Math.min(Math.max(-s,-l),s),g=-p*p+f*(f+2*l)+c);else f=o>0?-s:s,p=Math.max(0,-(o*f+a)),g=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(af).addScaledVector(Al,f),g}intersectSphere(e,n){hr.subVectors(e.center,this.origin);const i=hr.dot(this.direction),r=hr.dot(hr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(a=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,n,i,r,s){lf.subVectors(n,e),Rl.subVectors(i,e),cf.crossVectors(lf,Rl);let o=this.direction.dot(cf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fr.subVectors(this.origin,e);const l=a*this.direction.dot(Rl.crossVectors(Fr,Rl));if(l<0)return null;const c=a*this.direction.dot(lf.cross(Fr));if(c<0||l+c>o)return null;const d=-a*Fr.dot(cf);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class si extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=Q_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jm=new jt,ds=new pp,Cl=new Ya,e0=new X,bl=new X,Pl=new X,Ll=new X,uf=new X,Dl=new X,t0=new X,Il=new X;class le extends wn{constructor(e=new Fn,n=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Dl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],p=s[l];d!==0&&(uf.fromBufferAttribute(p,e),o?Dl.addScaledVector(uf,d):Dl.addScaledVector(uf.sub(n),d))}n.add(Dl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(s),ds.copy(e.ray).recast(e.near),!(Cl.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Cl,e0)===null||ds.origin.distanceToSquared(e0)>(e.far-e.near)**2))&&(Jm.copy(s).invert(),ds.copy(e.ray).applyMatrix4(Jm),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ds)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,w=f.length;y<w;y++){const v=f[y],u=o[v.materialIndex],h=Math.max(v.start,g.start),S=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let E=h,C=S;E<C;E+=3){const A=a.getX(E),b=a.getX(E+1),x=a.getX(E+2);r=Nl(this,u,e,i,c,d,p,A,b,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),w=Math.min(a.count,g.start+g.count);for(let v=y,u=w;v<u;v+=3){const h=a.getX(v),S=a.getX(v+1),E=a.getX(v+2);r=Nl(this,o,e,i,c,d,p,h,S,E),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,w=f.length;y<w;y++){const v=f[y],u=o[v.materialIndex],h=Math.max(v.start,g.start),S=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let E=h,C=S;E<C;E+=3){const A=E,b=E+1,x=E+2;r=Nl(this,u,e,i,c,d,p,A,b,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),w=Math.min(l.count,g.start+g.count);for(let v=y,u=w;v<u;v+=3){const h=v,S=v+1,E=v+2;r=Nl(this,o,e,i,c,d,p,h,S,E),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function hM(t,e,n,i,r,s,o,a){let l;if(e.side===Jn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ns,a),l===null)return null;Il.copy(a),Il.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Il);return c<n.near||c>n.far?null:{distance:c,point:Il.clone(),object:t}}function Nl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,bl),t.getVertexPosition(l,Pl),t.getVertexPosition(c,Ll);const d=hM(t,e,n,i,bl,Pl,Ll,t0);if(d){const p=new X;Ii.getBarycoord(t0,bl,Pl,Ll,p),r&&(d.uv=Ii.getInterpolatedAttribute(r,a,l,c,p,new Mt)),s&&(d.uv1=Ii.getInterpolatedAttribute(s,a,l,c,p,new Mt)),o&&(d.normal=Ii.getInterpolatedAttribute(o,a,l,c,p,new X),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};Ii.getNormal(bl,Pl,Ll,f.normal),d.face=f,d.barycoord=p}return d}class pM extends Nn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Mn,d=Mn,p,f){super(null,o,a,l,c,d,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ff=new X,mM=new X,gM=new rt;class gs{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ff.subVectors(i,n).cross(mM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(ff),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gM.getNormalMatrix(e),r=this.coplanarPoint(ff).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new Ya,_M=new Mt(.5,.5),Ul=new X;class mp{constructor(e=new gs,n=new gs,i=new gs,r=new gs,s=new gs,o=new gs){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=er,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],p=s[5],f=s[6],g=s[7],y=s[8],w=s[9],v=s[10],u=s[11],h=s[12],S=s[13],E=s[14],C=s[15];if(r[0].setComponents(c-o,g-d,u-y,C-h).normalize(),r[1].setComponents(c+o,g+d,u+y,C+h).normalize(),r[2].setComponents(c+a,g+p,u+w,C+S).normalize(),r[3].setComponents(c-a,g-p,u-w,C-S).normalize(),i)r[4].setComponents(l,f,v,E).normalize(),r[5].setComponents(c-l,g-f,u-v,C-E).normalize();else if(r[4].setComponents(c-l,g-f,u-v,C-E).normalize(),n===er)r[5].setComponents(c+l,g+f,u+v,C+E).normalize();else if(n===ka)r[5].setComponents(l,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const n=_M.distanceTo(e.center);return hs.radius=.7071067811865476+n,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ul.x=r.normal.x>0?e.max.x:e.min.x,Ul.y=r.normal.y>0?e.max.y:e.min.y,Ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xv extends ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kc=new X,zc=new X,n0=new jt,ta=new pp,Fl=new Ya,df=new X,i0=new X;class vM extends wn{constructor(e=new Fn,n=new xv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)kc.fromBufferAttribute(n,r-1),zc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=kc.distanceTo(zc);e.setAttribute("lineDistance",new ln(i,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(r),Fl.radius+=s,e.ray.intersectsSphere(Fl)===!1)return;n0.copy(r).invert(),ta.copy(e.ray).applyMatrix4(n0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const g=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let w=g,v=y-1;w<v;w+=c){const u=d.getX(w),h=d.getX(w+1),S=Ol(this,e,ta,l,u,h,w);S&&n.push(S)}if(this.isLineLoop){const w=d.getX(y-1),v=d.getX(g),u=Ol(this,e,ta,l,w,v,y-1);u&&n.push(u)}}else{const g=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let w=g,v=y-1;w<v;w+=c){const u=Ol(this,e,ta,l,w,w+1,w);u&&n.push(u)}if(this.isLineLoop){const w=Ol(this,e,ta,l,y-1,g,y-1);w&&n.push(w)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ol(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(kc.fromBufferAttribute(a,r),zc.fromBufferAttribute(a,s),n.distanceSqToSegment(kc,zc,df,i0)>i)return;df.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(df);if(!(c<e.near||c>e.far))return{distance:c,point:i0.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class Sv extends ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const r0=new jt,sh=new pp,Bl=new Ya,kl=new X;class xM extends wn{constructor(e=new Fn,n=new Sv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(r),Bl.radius+=s,e.ray.intersectsSphere(Bl)===!1)return;r0.copy(r).invert(),sh.copy(e.ray).applyMatrix4(r0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,p=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let y=f,w=g;y<w;y++){const v=c.getX(y);kl.fromBufferAttribute(p,v),s0(kl,v,l,r,e,n,this)}}else{const f=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let y=f,w=g;y<w;y++)kl.fromBufferAttribute(p,y),s0(kl,y,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function s0(t,e,n,i,r,s,o){const a=sh.distanceSqToPoint(t);if(a<n){const l=new X;sh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class yv extends Nn{constructor(e=[],n=Ns,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SM extends Nn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Io extends Nn{constructor(e,n,i=sr,r,s,o,a=Mn,l=Mn,c,d=Rr,p=1){if(d!==Rr&&d!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:p};super(f,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class yM extends Io{constructor(e,n=sr,i=Ns,r,s,o=Mn,a=Mn,l,c=Rr){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,n,i,r,s,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mv extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qe extends Fn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],p=[];let f=0,g=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(d,3)),this.setAttribute("uv",new ln(p,2));function y(w,v,u,h,S,E,C,A,b,x,R){const D=E/b,I=C/x,k=E/2,ee=C/2,J=A/2,B=b+1,$=x+1;let Y=0,j=0;const te=new X;for(let ce=0;ce<$;ce++){const Ee=ce*I-ee;for(let Ce=0;Ce<B;Ce++){const st=Ce*D-k;te[w]=st*h,te[v]=Ee*S,te[u]=J,c.push(te.x,te.y,te.z),te[w]=0,te[v]=0,te[u]=A>0?1:-1,d.push(te.x,te.y,te.z),p.push(Ce/b),p.push(1-ce/x),Y+=1}}for(let ce=0;ce<x;ce++)for(let Ee=0;Ee<b;Ee++){const Ce=f+Ee+B*ce,st=f+Ee+B*(ce+1),at=f+(Ee+1)+B*(ce+1),$e=f+(Ee+1)+B*ce;l.push(Ce,st,$e),l.push(st,at,$e),j+=6}a.addGroup(g,j,R),g+=j,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jt extends Fn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],p=[],f=[],g=[];let y=0;const w=[],v=i/2;let u=0;h(),o===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new ln(p,3)),this.setAttribute("normal",new ln(f,3)),this.setAttribute("uv",new ln(g,2));function h(){const E=new X,C=new X;let A=0;const b=(n-e)/i;for(let x=0;x<=s;x++){const R=[],D=x/s,I=D*(n-e)+e;for(let k=0;k<=r;k++){const ee=k/r,J=ee*l+a,B=Math.sin(J),$=Math.cos(J);C.x=I*B,C.y=-D*i+v,C.z=I*$,p.push(C.x,C.y,C.z),E.set(B,b,$).normalize(),f.push(E.x,E.y,E.z),g.push(ee,1-D),R.push(y++)}w.push(R)}for(let x=0;x<r;x++)for(let R=0;R<s;R++){const D=w[R][x],I=w[R+1][x],k=w[R+1][x+1],ee=w[R][x+1];(e>0||R!==0)&&(d.push(D,I,ee),A+=3),(n>0||R!==s-1)&&(d.push(I,k,ee),A+=3)}c.addGroup(u,A,0),u+=A}function S(E){const C=y,A=new Mt,b=new X;let x=0;const R=E===!0?e:n,D=E===!0?1:-1;for(let k=1;k<=r;k++)p.push(0,v*D,0),f.push(0,D,0),g.push(.5,.5),y++;const I=y;for(let k=0;k<=r;k++){const J=k/r*l+a,B=Math.cos(J),$=Math.sin(J);b.x=R*$,b.y=v*D,b.z=R*B,p.push(b.x,b.y,b.z),f.push(0,D,0),A.x=B*.5+.5,A.y=$*.5*D+.5,g.push(A.x,A.y),y++}for(let k=0;k<r;k++){const ee=C+k,J=I+k;E===!0?d.push(J,J+1,ee):d.push(J+1,J,ee),x+=3}c.addGroup(u,x,E===!0?1:2),u+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gc extends Jt{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Gc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gp extends Fn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new ln(s,3)),this.setAttribute("normal",new ln(s.slice(),3)),this.setAttribute("uv",new ln(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(h){const S=new X,E=new X,C=new X;for(let A=0;A<n.length;A+=3)g(n[A+0],S),g(n[A+1],E),g(n[A+2],C),l(S,E,C,h)}function l(h,S,E,C){const A=C+1,b=[];for(let x=0;x<=A;x++){b[x]=[];const R=h.clone().lerp(E,x/A),D=S.clone().lerp(E,x/A),I=A-x;for(let k=0;k<=I;k++)k===0&&x===A?b[x][k]=R:b[x][k]=R.clone().lerp(D,k/I)}for(let x=0;x<A;x++)for(let R=0;R<2*(A-x)-1;R++){const D=Math.floor(R/2);R%2===0?(f(b[x][D+1]),f(b[x+1][D]),f(b[x][D])):(f(b[x][D+1]),f(b[x+1][D+1]),f(b[x+1][D]))}}function c(h){const S=new X;for(let E=0;E<s.length;E+=3)S.x=s[E+0],S.y=s[E+1],S.z=s[E+2],S.normalize().multiplyScalar(h),s[E+0]=S.x,s[E+1]=S.y,s[E+2]=S.z}function d(){const h=new X;for(let S=0;S<s.length;S+=3){h.x=s[S+0],h.y=s[S+1],h.z=s[S+2];const E=v(h)/2/Math.PI+.5,C=u(h)/Math.PI+.5;o.push(E,1-C)}y(),p()}function p(){for(let h=0;h<o.length;h+=6){const S=o[h+0],E=o[h+2],C=o[h+4],A=Math.max(S,E,C),b=Math.min(S,E,C);A>.9&&b<.1&&(S<.2&&(o[h+0]+=1),E<.2&&(o[h+2]+=1),C<.2&&(o[h+4]+=1))}}function f(h){s.push(h.x,h.y,h.z)}function g(h,S){const E=h*3;S.x=e[E+0],S.y=e[E+1],S.z=e[E+2]}function y(){const h=new X,S=new X,E=new X,C=new X,A=new Mt,b=new Mt,x=new Mt;for(let R=0,D=0;R<s.length;R+=9,D+=6){h.set(s[R+0],s[R+1],s[R+2]),S.set(s[R+3],s[R+4],s[R+5]),E.set(s[R+6],s[R+7],s[R+8]),A.set(o[D+0],o[D+1]),b.set(o[D+2],o[D+3]),x.set(o[D+4],o[D+5]),C.copy(h).add(S).add(E).divideScalar(3);const I=v(C);w(A,D+0,h,I),w(b,D+2,S,I),w(x,D+4,E,I)}}function w(h,S,E,C){C<0&&h.x===1&&(o[S]=h.x-1),E.x===0&&E.z===0&&(o[S]=C/2/Math.PI+.5)}function v(h){return Math.atan2(h.z,-h.x)}function u(h){return Math.atan2(-h.y,Math.sqrt(h.x*h.x+h.z*h.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gp(e.vertices,e.indices,e.radius,e.detail)}}class Ss extends gp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ss(e.radius,e.detail)}}class Sn extends Fn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,p=e/a,f=n/l,g=[],y=[],w=[],v=[];for(let u=0;u<d;u++){const h=u*f-o;for(let S=0;S<c;S++){const E=S*p-s;y.push(E,-h,0),w.push(0,0,1),v.push(S/a),v.push(1-u/l)}}for(let u=0;u<l;u++)for(let h=0;h<a;h++){const S=h+c*u,E=h+c*(u+1),C=h+1+c*(u+1),A=h+1+c*u;g.push(S,E,A),g.push(E,C,A)}this.setIndex(g),this.setAttribute("position",new ln(y,3)),this.setAttribute("normal",new ln(w,3)),this.setAttribute("uv",new ln(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ln extends Fn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],p=new X,f=new X,g=[],y=[],w=[],v=[];for(let u=0;u<=i;u++){const h=[],S=u/i;let E=0;u===0&&o===0?E=.5/n:u===i&&l===Math.PI&&(E=-.5/n);for(let C=0;C<=n;C++){const A=C/n;p.x=-e*Math.cos(r+A*s)*Math.sin(o+S*a),p.y=e*Math.cos(o+S*a),p.z=e*Math.sin(r+A*s)*Math.sin(o+S*a),y.push(p.x,p.y,p.z),f.copy(p).normalize(),w.push(f.x,f.y,f.z),v.push(A+E,1-S),h.push(c++)}d.push(h)}for(let u=0;u<i;u++)for(let h=0;h<n;h++){const S=d[u][h+1],E=d[u][h],C=d[u+1][h],A=d[u+1][h+1];(u!==0||o>0)&&g.push(S,E,A),(u!==i-1||l<Math.PI)&&g.push(E,C,A)}this.setIndex(g),this.setAttribute("position",new ln(y,3)),this.setAttribute("normal",new ln(w,3)),this.setAttribute("uv",new ln(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function No(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(o0(r))r.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(o0(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Gn(t){const e={};for(let n=0;n<t.length;n++){const i=No(t[n]);for(const r in i)e[r]=i[r]}return e}function o0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function MM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ev(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const EM={clone:No,merge:Gn};var wM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=MM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class AM extends or{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class et extends ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class RM extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CM extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _p extends wn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class bM extends _p{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const hf=new jt,a0=new X,l0=new X;class PM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;a0.setFromMatrixPosition(e.matrixWorld),n.position.copy(a0),l0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(l0),n.updateMatrixWorld(),hf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hf,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ka||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zl=new X,Gl=new Bo,Yi=new X;class wv extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=er,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zl,Gl,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Gl,Yi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(zl,Gl,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Gl,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Or=new X,c0=new Mt,u0=new Mt;class ai extends wv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rh*2*Math.atan(Math.tan(Gu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Or.x,Or.y).multiplyScalar(-e/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Or.x,Or.y).multiplyScalar(-e/Or.z)}getViewSize(e,n){return this.getViewBounds(e,c0,u0),n.subVectors(u0,c0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class LM extends PM{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0}}class Vl extends _p{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new LM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Tv extends wv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class DM extends _p{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Js=-90,eo=1;class IM extends wn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ai(Js,eo,e,n);r.layers=this.layers,this.add(r);const s=new ai(Js,eo,e,n);s.layers=this.layers,this.add(s);const o=new ai(Js,eo,e,n);o.layers=this.layers,this.add(o);const a=new ai(Js,eo,e,n);a.layers=this.layers,this.add(a);const l=new ai(Js,eo,e,n);l.layers=this.layers,this.add(l);const c=new ai(Js,eo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===er)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ka)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(p,f,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class NM extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Mp=class Mp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Mp.prototype.isMatrix2=!0;let f0=Mp;function d0(t,e,n,i){const r=UM(i);switch(n){case uv:return t*e;case dv:return t*e/r.components*r.byteLength;case ap:return t*e/r.components*r.byteLength;case Us:return t*e*2/r.components*r.byteLength;case lp:return t*e*2/r.components*r.byteLength;case fv:return t*e*3/r.components*r.byteLength;case Ni:return t*e*4/r.components*r.byteLength;case cp:return t*e*4/r.components*r.byteLength;case sc:case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ac:case lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rd:case bd:return Math.max(t,16)*Math.max(e,8)/4;case Ad:case Cd:return Math.max(t,8)*Math.max(e,8)/2;case Pd:case Ld:case Id:case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dd:case Nc:case Ud:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case jd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case $d:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Kd:case Zd:case Qd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Jd:case eh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Uc:case th:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function UM(t){switch(t){case li:case ov:return{byteLength:1,components:1};case Oa:case av:case Ar:return{byteLength:2,components:1};case sp:case op:return{byteLength:2,components:4};case sr:case rp:case Ji:return{byteLength:4,components:1};case lv:case cv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Av(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function FM(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,p=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const d=l.array,p=l.updateRanges;if(t.bindBuffer(c,a),p.length===0)t.bufferSubData(c,0,d);else{p.sort((g,y)=>g.start-y.start);let f=0;for(let g=1;g<p.length;g++){const y=p[f],w=p[g];w.start<=y.start+y.count+1?y.count=Math.max(y.count,w.start+w.count-y.start):(++f,p[f]=w)}p.length=f+1;for(let g=0,y=p.length;g<y;g++){const w=p[g];t.bufferSubData(c,w.start*d.BYTES_PER_ELEMENT,d,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var OM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BM=`#ifdef USE_ALPHAHASH
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
#endif`,kM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HM=`#ifdef USE_AOMAP
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
#endif`,WM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XM=`#ifdef USE_BATCHING
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
#endif`,jM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KM=`#ifdef USE_IRIDESCENCE
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
#endif`,ZM=`#ifdef USE_BUMPMAP
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
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,o1=`#define PI 3.141592653589793
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
} // validated`,a1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l1=`vec3 transformedNormal = objectNormal;
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
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h1="gl_FragColor = linearToOutputTexel( gl_FragColor );",p1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
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
#endif`,S1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w1=`#ifdef USE_GRADIENTMAP
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
}`,T1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,b1=`#ifdef USE_ENVMAP
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
#endif`,P1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N1=`PhysicalMaterial material;
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
#endif`,U1=`uniform sampler2D dfgLUT;
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
}`,F1=`
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
#endif`,O1=`#if defined( RE_IndirectDiffuse )
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
#endif`,B1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y1=`#if defined( USE_POINTS_UV )
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
#endif`,$1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J1=`#ifdef USE_MORPHTARGETS
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
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oE=`#ifdef USE_NORMALMAP
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
#endif`,aE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ME=`float getShadowMask() {
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
}`,EE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wE=`#ifdef USE_SKINNING
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
#endif`,TE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AE=`#ifdef USE_SKINNING
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
#endif`,RE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LE=`#ifdef USE_TRANSMISSION
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
#endif`,DE=`#ifdef USE_TRANSMISSION
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
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BE=`uniform sampler2D t2D;
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
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`#include <common>
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
}`,WE=`#if DEPTH_PACKING == 3200
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
}`,XE=`#define DISTANCE
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
}`,jE=`#define DISTANCE
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
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`uniform float scale;
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
}`,KE=`uniform vec3 diffuse;
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
}`,ZE=`#include <common>
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
}`,QE=`uniform vec3 diffuse;
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
}`,JE=`#define LAMBERT
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
}`,ew=`#define LAMBERT
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
}`,tw=`#define MATCAP
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
}`,nw=`#define MATCAP
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
}`,iw=`#define NORMAL
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
}`,rw=`#define NORMAL
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
}`,sw=`#define PHONG
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
}`,ow=`#define PHONG
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
}`,aw=`#define STANDARD
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
}`,lw=`#define STANDARD
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
}`,cw=`#define TOON
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
}`,uw=`#define TOON
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
}`,fw=`uniform float size;
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
}`,dw=`uniform vec3 diffuse;
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
}`,hw=`#include <common>
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
}`,pw=`uniform vec3 color;
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
}`,mw=`uniform float rotation;
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
}`,gw=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:OM,alphahash_pars_fragment:BM,alphamap_fragment:kM,alphamap_pars_fragment:zM,alphatest_fragment:GM,alphatest_pars_fragment:VM,aomap_fragment:HM,aomap_pars_fragment:WM,batching_pars_vertex:XM,batching_vertex:jM,begin_vertex:YM,beginnormal_vertex:$M,bsdfs:qM,iridescence_fragment:KM,bumpmap_pars_fragment:ZM,clipping_planes_fragment:QM,clipping_planes_pars_fragment:JM,clipping_planes_pars_vertex:e1,clipping_planes_vertex:t1,color_fragment:n1,color_pars_fragment:i1,color_pars_vertex:r1,color_vertex:s1,common:o1,cube_uv_reflection_fragment:a1,defaultnormal_vertex:l1,displacementmap_pars_vertex:c1,displacementmap_vertex:u1,emissivemap_fragment:f1,emissivemap_pars_fragment:d1,colorspace_fragment:h1,colorspace_pars_fragment:p1,envmap_fragment:m1,envmap_common_pars_fragment:g1,envmap_pars_fragment:_1,envmap_pars_vertex:v1,envmap_physical_pars_fragment:b1,envmap_vertex:x1,fog_vertex:S1,fog_pars_vertex:y1,fog_fragment:M1,fog_pars_fragment:E1,gradientmap_pars_fragment:w1,lightmap_pars_fragment:T1,lights_lambert_fragment:A1,lights_lambert_pars_fragment:R1,lights_pars_begin:C1,lights_toon_fragment:P1,lights_toon_pars_fragment:L1,lights_phong_fragment:D1,lights_phong_pars_fragment:I1,lights_physical_fragment:N1,lights_physical_pars_fragment:U1,lights_fragment_begin:F1,lights_fragment_maps:O1,lights_fragment_end:B1,lightprobes_pars_fragment:k1,logdepthbuf_fragment:z1,logdepthbuf_pars_fragment:G1,logdepthbuf_pars_vertex:V1,logdepthbuf_vertex:H1,map_fragment:W1,map_pars_fragment:X1,map_particle_fragment:j1,map_particle_pars_fragment:Y1,metalnessmap_fragment:$1,metalnessmap_pars_fragment:q1,morphinstance_vertex:K1,morphcolor_vertex:Z1,morphnormal_vertex:Q1,morphtarget_pars_vertex:J1,morphtarget_vertex:eE,normal_fragment_begin:tE,normal_fragment_maps:nE,normal_pars_fragment:iE,normal_pars_vertex:rE,normal_vertex:sE,normalmap_pars_fragment:oE,clearcoat_normal_fragment_begin:aE,clearcoat_normal_fragment_maps:lE,clearcoat_pars_fragment:cE,iridescence_pars_fragment:uE,opaque_fragment:fE,packing:dE,premultiplied_alpha_fragment:hE,project_vertex:pE,dithering_fragment:mE,dithering_pars_fragment:gE,roughnessmap_fragment:_E,roughnessmap_pars_fragment:vE,shadowmap_pars_fragment:xE,shadowmap_pars_vertex:SE,shadowmap_vertex:yE,shadowmask_pars_fragment:ME,skinbase_vertex:EE,skinning_pars_vertex:wE,skinning_vertex:TE,skinnormal_vertex:AE,specularmap_fragment:RE,specularmap_pars_fragment:CE,tonemapping_fragment:bE,tonemapping_pars_fragment:PE,transmission_fragment:LE,transmission_pars_fragment:DE,uv_pars_fragment:IE,uv_pars_vertex:NE,uv_vertex:UE,worldpos_vertex:FE,background_vert:OE,background_frag:BE,backgroundCube_vert:kE,backgroundCube_frag:zE,cube_vert:GE,cube_frag:VE,depth_vert:HE,depth_frag:WE,distance_vert:XE,distance_frag:jE,equirect_vert:YE,equirect_frag:$E,linedashed_vert:qE,linedashed_frag:KE,meshbasic_vert:ZE,meshbasic_frag:QE,meshlambert_vert:JE,meshlambert_frag:ew,meshmatcap_vert:tw,meshmatcap_frag:nw,meshnormal_vert:iw,meshnormal_frag:rw,meshphong_vert:sw,meshphong_frag:ow,meshphysical_vert:aw,meshphysical_frag:lw,meshtoon_vert:cw,meshtoon_frag:uw,points_vert:fw,points_frag:dw,shadow_vert:hw,shadow_frag:pw,sprite_vert:mw,sprite_frag:gw},De={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Ki={basic:{uniforms:Gn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Gn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Gn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Gn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Gn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ht(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Gn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Gn([De.points,De.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Gn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Gn([De.common,De.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Gn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Gn([De.sprite,De.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:Gn([De.common,De.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:Gn([De.lights,De.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ki.physical={uniforms:Gn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Hl={r:0,b:0,g:0},_w=new jt,Rv=new rt;Rv.set(-1,0,0,0,1,0,0,0,1);function vw(t,e,n,i,r,s){const o=new ht(0);let a=r===!0?0:1,l,c,d=null,p=0,f=null;function g(h){let S=h.isScene===!0?h.background:null;if(S&&S.isTexture){const E=h.backgroundBlurriness>0;S=e.get(S,E)}return S}function y(h){let S=!1;const E=g(h);E===null?v(o,a):E&&E.isColor&&(v(E,1),S=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function w(h,S){const E=g(S);E&&(E.isCubeTexture||E.mapping===su)?(c===void 0&&(c=new le(new Qe(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:No(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_w.makeRotationFromEuler(S.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rv),c.material.toneMapped=St.getTransfer(E.colorSpace)!==Ct,(d!==E||p!==E.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,d=E,p=E.version,f=t.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new le(new Sn(2,2),new or({name:"BackgroundMaterial",uniforms:No(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=St.getTransfer(E.colorSpace)!==Ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||p!==E.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,d=E,p=E.version,f=t.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function v(h,S){h.getRGB(Hl,Ev(t)),n.buffers.color.setClear(Hl.r,Hl.g,Hl.b,S,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(h,S=1){o.set(h),a=S,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(h){a=h,v(o,a)},render:y,addToRenderList:w,dispose:u}}function xw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(I,k,ee,J,B){let $=!1;const Y=p(I,J,ee,k);s!==Y&&(s=Y,c(s.object)),$=g(I,J,ee,B),$&&y(I,J,ee,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,E(I,k,ee,J),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function d(I){return t.deleteVertexArray(I)}function p(I,k,ee,J){const B=J.wireframe===!0;let $=i[k.id];$===void 0&&($={},i[k.id]=$);const Y=I.isInstancedMesh===!0?I.id:0;let j=$[Y];j===void 0&&(j={},$[Y]=j);let te=j[ee.id];te===void 0&&(te={},j[ee.id]=te);let ce=te[B];return ce===void 0&&(ce=f(l()),te[B]=ce),ce}function f(I){const k=[],ee=[],J=[];for(let B=0;B<n;B++)k[B]=0,ee[B]=0,J[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ee,attributeDivisors:J,object:I,attributes:{},index:null}}function g(I,k,ee,J){const B=s.attributes,$=k.attributes;let Y=0;const j=ee.getAttributes();for(const te in j)if(j[te].location>=0){const Ee=B[te];let Ce=$[te];if(Ce===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(Ce=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(Ce=I.instanceColor)),Ee===void 0||Ee.attribute!==Ce||Ce&&Ee.data!==Ce.data)return!0;Y++}return s.attributesNum!==Y||s.index!==J}function y(I,k,ee,J){const B={},$=k.attributes;let Y=0;const j=ee.getAttributes();for(const te in j)if(j[te].location>=0){let Ee=$[te];Ee===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(Ee=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(Ee=I.instanceColor));const Ce={};Ce.attribute=Ee,Ee&&Ee.data&&(Ce.data=Ee.data),B[te]=Ce,Y++}s.attributes=B,s.attributesNum=Y,s.index=J}function w(){const I=s.newAttributes;for(let k=0,ee=I.length;k<ee;k++)I[k]=0}function v(I){u(I,0)}function u(I,k){const ee=s.newAttributes,J=s.enabledAttributes,B=s.attributeDivisors;ee[I]=1,J[I]===0&&(t.enableVertexAttribArray(I),J[I]=1),B[I]!==k&&(t.vertexAttribDivisor(I,k),B[I]=k)}function h(){const I=s.newAttributes,k=s.enabledAttributes;for(let ee=0,J=k.length;ee<J;ee++)k[ee]!==I[ee]&&(t.disableVertexAttribArray(ee),k[ee]=0)}function S(I,k,ee,J,B,$,Y){Y===!0?t.vertexAttribIPointer(I,k,ee,B,$):t.vertexAttribPointer(I,k,ee,J,B,$)}function E(I,k,ee,J){w();const B=J.attributes,$=ee.getAttributes(),Y=k.defaultAttributeValues;for(const j in $){const te=$[j];if(te.location>=0){let ce=B[j];if(ce===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),ce!==void 0){const Ee=ce.normalized,Ce=ce.itemSize,st=e.get(ce);if(st===void 0)continue;const at=st.buffer,$e=st.type,se=st.bytesPerElement,Re=$e===t.INT||$e===t.UNSIGNED_INT||ce.gpuType===rp;if(ce.isInterleavedBufferAttribute){const we=ce.data,je=we.stride,Je=ce.offset;if(we.isInstancedInterleavedBuffer){for(let Ye=0;Ye<te.locationSize;Ye++)u(te.location+Ye,we.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Ye=0;Ye<te.locationSize;Ye++)v(te.location+Ye);t.bindBuffer(t.ARRAY_BUFFER,at);for(let Ye=0;Ye<te.locationSize;Ye++)S(te.location+Ye,Ce/te.locationSize,$e,Ee,je*se,(Je+Ce/te.locationSize*Ye)*se,Re)}else{if(ce.isInstancedBufferAttribute){for(let we=0;we<te.locationSize;we++)u(te.location+we,ce.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let we=0;we<te.locationSize;we++)v(te.location+we);t.bindBuffer(t.ARRAY_BUFFER,at);for(let we=0;we<te.locationSize;we++)S(te.location+we,Ce/te.locationSize,$e,Ee,Ce*se,Ce/te.locationSize*we*se,Re)}}else if(Y!==void 0){const Ee=Y[j];if(Ee!==void 0)switch(Ee.length){case 2:t.vertexAttrib2fv(te.location,Ee);break;case 3:t.vertexAttrib3fv(te.location,Ee);break;case 4:t.vertexAttrib4fv(te.location,Ee);break;default:t.vertexAttrib1fv(te.location,Ee)}}}}h()}function C(){R();for(const I in i){const k=i[I];for(const ee in k){const J=k[ee];for(const B in J){const $=J[B];for(const Y in $)d($[Y].object),delete $[Y];delete J[B]}}delete i[I]}}function A(I){if(i[I.id]===void 0)return;const k=i[I.id];for(const ee in k){const J=k[ee];for(const B in J){const $=J[B];for(const Y in $)d($[Y].object),delete $[Y];delete J[B]}}delete i[I.id]}function b(I){for(const k in i){const ee=i[k];for(const J in ee){const B=ee[J];if(B[I.id]===void 0)continue;const $=B[I.id];for(const Y in $)d($[Y].object),delete $[Y];delete B[I.id]}}}function x(I){for(const k in i){const ee=i[k],J=I.isInstancedMesh===!0?I.id:0,B=ee[J];if(B!==void 0){for(const $ in B){const Y=B[$];for(const j in Y)d(Y[j].object),delete Y[j];delete B[$]}delete ee[J],Object.keys(ee).length===0&&delete i[k]}}}function R(){D(),o=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:w,enableAttribute:v,disableUnusedAttributes:h}}function Sw(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function a(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let g=0;g<d;g++)f+=c[g];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function yw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Ni&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const x=b===Ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==li&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ji&&!x)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(tt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:v,maxAttributes:u,maxVertexUniforms:h,maxVaryings:S,maxFragmentUniforms:E,maxSamples:C,samples:A}}function Mw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new gs,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const g=p.length!==0||f||i!==0||r;return r=f,i=p.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=d(p,f,0)},this.setState=function(p,f,g){const y=p.clippingPlanes,w=p.clipIntersection,v=p.clipShadows,u=t.get(p);if(!r||y===null||y.length===0||s&&!v)s?d(null):c();else{const h=s?0:i,S=h*4;let E=u.clippingState||null;l.value=E,E=d(y,f,S,g);for(let C=0;C!==S;++C)E[C]=n[C];u.clippingState=E,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=h}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,f,g,y){const w=p!==null?p.length:0;let v=null;if(w!==0){if(v=l.value,y!==!0||v===null){const u=g+w*4,h=f.matrixWorldInverse;a.getNormalMatrix(h),(v===null||v.length<u)&&(v=new Float32Array(u));for(let S=0,E=g;S!==w;++S,E+=4)o.copy(p[S]).applyMatrix4(h,a),o.normal.toArray(v,E),v[E+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,v}}const Xr=4,h0=[.125,.215,.35,.446,.526,.582],ys=20,Ew=256,na=new Tv,p0=new ht;let pf=null,mf=0,gf=0,_f=!1;const ww=new X;class m0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=ww}=s;pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pf,mf,gf),this._renderer.xr.enabled=_f,e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ns||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ar,format:Ni,colorSpace:Fc,depthBuffer:!1},r=g0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Tw(s)),this._blurMaterial=Rw(s,e,n),this._ggxMaterial=Aw(s,e,n)}return r}_compileMaterial(e){const n=new le(new Fn,e);this._renderer.compile(n,na)}_sceneToCubeUV(e,n,i,r,s){const l=new ai(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,g=p.toneMapping;p.getClearColor(p0),p.toneMapping=ir,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new le(new Qe,new si({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,v=w.material;let u=!1;const h=e.background;h?h.isColor&&(v.color.copy(h),e.background=null,u=!0):(v.color.copy(p0),u=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[S],s.y,s.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[S]));const C=this._cubeSize;to(r,E*C,S>2?C:0,C,C),p.setRenderTarget(r),u&&p.render(w,l),p.render(e,l)}p.toneMapping=g,p.autoClear=f,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ns||e.mapping===Do;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=v0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;to(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,na)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),f=0+c*1.25,g=p*f,{_lodMax:y}=this,w=this._sizeLods[i],v=3*w*(i>y-Xr?i-y+Xr:0),u=4*(this._cubeSize-w);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=y-n,to(s,v,u,3*w,2*w),r.setRenderTarget(s),r.render(a,na),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=y-i,to(e,v,u,3*w,2*w),r.setRenderTarget(e),r.render(a,na)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[r];p.material=c;const f=c.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ys-1),w=s/y,v=isFinite(s)?1+Math.floor(d*w):ys;v>ys&&tt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${ys}`);const u=[];let h=0;for(let b=0;b<ys;++b){const x=b/w,R=Math.exp(-x*x/2);u.push(R),b===0?h+=R:b<v&&(h+=2*R)}for(let b=0;b<u.length;b++)u[b]=u[b]/h;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=y,f.mipInt.value=S-i;const E=this._sizeLods[r],C=3*E*(r>S-Xr?r-S+Xr:0),A=4*(this._cubeSize-E);to(n,C,A,3*E,2*E),l.setRenderTarget(n),l.render(p,na)}}function Tw(t){const e=[],n=[],i=[];let r=t;const s=t-Xr+1+h0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Xr?l=h0[o-t+Xr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,p=1+c,f=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,y=6,w=3,v=2,u=1,h=new Float32Array(w*y*g),S=new Float32Array(v*y*g),E=new Float32Array(u*y*g);for(let A=0;A<g;A++){const b=A%3*2/3-1,x=A>2?0:-1,R=[b,x,0,b+2/3,x,0,b+2/3,x+1,0,b,x,0,b+2/3,x+1,0,b,x+1,0];h.set(R,w*y*A),S.set(f,v*y*A);const D=[A,A,A,A,A,A];E.set(D,u*y*A)}const C=new Fn;C.setAttribute("position",new Oi(h,w)),C.setAttribute("uv",new Oi(S,v)),C.setAttribute("faceIndex",new Oi(E,u)),i.push(new le(C,null)),r>Xr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function g0(t,e,n){const i=new rr(t,e,n);return i.texture.mapping=su,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function to(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Aw(t,e,n){return new or({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ew,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Rw(t,e,n){const i=new Float32Array(ys),r=new X(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function _0(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function v0(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function ou(){return`

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
	`}class Cv extends rr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qe(5,5,5),s=new or({name:"CubemapFromEquirect",uniforms:No(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:Sr});s.uniforms.tEquirect.value=n;const o=new le(r,s),a=n.minFilter;return n.minFilter===Ts&&(n.minFilter=In),new IM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function Cw(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,g=!1){return f==null?null:g?o(f):s(f)}function s(f){if(f&&f.isTexture){const g=f.mapping;if(g===Bu||g===ku)if(e.has(f)){const y=e.get(f).texture;return a(y,f.mapping)}else{const y=f.image;if(y&&y.height>0){const w=new Cv(y.height);return w.fromEquirectangularTexture(t,f),e.set(f,w),f.addEventListener("dispose",c),a(w.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const g=f.mapping,y=g===Bu||g===ku,w=g===Ns||g===Do;if(y||w){let v=n.get(f);const u=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return i===null&&(i=new m0(t)),v=y?i.fromEquirectangular(f,v):i.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,n.set(f,v),v.texture;if(v!==void 0)return v.texture;{const h=f.image;return y&&h&&h.height>0||w&&h&&l(h)?(i===null&&(i=new m0(t)),v=y?i.fromEquirectangular(f):i.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,n.set(f,v),f.addEventListener("dispose",d),v.texture):null}}}return f}function a(f,g){return g===Bu?f.mapping=Ns:g===ku&&(f.mapping=Do),f}function l(f){let g=0;const y=6;for(let w=0;w<y;w++)f[w]!==void 0&&g++;return g===y}function c(f){const g=f.target;g.removeEventListener("dispose",c);const y=e.get(g);y!==void 0&&(e.delete(g),y.dispose())}function d(f){const g=f.target;g.removeEventListener("dispose",d);const y=n.get(g);y!==void 0&&(n.delete(g),y.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function bw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ih("WebGLRenderer: "+i+" extension not supported."),r}}}function Pw(t,e,n,i){const r={},s=new WeakMap;function o(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(p,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER)}function c(p){const f=[],g=p.index,y=p.attributes.position;let w=0;if(y===void 0)return;if(g!==null){const h=g.array;w=g.version;for(let S=0,E=h.length;S<E;S+=3){const C=h[S+0],A=h[S+1],b=h[S+2];f.push(C,A,A,b,b,C)}}else{const h=y.array;w=y.version;for(let S=0,E=h.length/3-1;S<E;S+=3){const C=S+0,A=S+1,b=S+2;f.push(C,A,A,b,b,C)}}const v=new(y.count>=65535?vv:_v)(f,1);v.version=w;const u=s.get(p);u&&e.remove(u),s.set(p,v)}function d(p){const f=s.get(p);if(f){const g=p.index;g!==null&&f.version<g.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:d}}function Lw(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,f){t.drawElements(i,f,s,p*o),n.update(f,i,1)}function c(p,f,g){g!==0&&(t.drawElementsInstanced(i,f,s,p*o,g),n.update(f,i,g))}function d(p,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,g);let w=0;for(let v=0;v<g;v++)w+=f[v];n.update(w,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Dw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Et("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Iw(t,e,n){const i=new WeakMap,r=new Kt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==p){let D=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",D)};var g=D;f!==void 0&&f.texture.dispose();const y=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let E=0;y===!0&&(E=1),w===!0&&(E=2),v===!0&&(E=3);let C=a.attributes.position.count*E,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*A*4*p),x=new pv(b,C,A,p);x.type=Ji,x.needsUpdate=!0;const R=E*4;for(let I=0;I<p;I++){const k=u[I],ee=h[I],J=S[I],B=C*A*4*I;for(let $=0;$<k.count;$++){const Y=$*R;y===!0&&(r.fromBufferAttribute(k,$),b[B+Y+0]=r.x,b[B+Y+1]=r.y,b[B+Y+2]=r.z,b[B+Y+3]=0),w===!0&&(r.fromBufferAttribute(ee,$),b[B+Y+4]=r.x,b[B+Y+5]=r.y,b[B+Y+6]=r.z,b[B+Y+7]=0),v===!0&&(r.fromBufferAttribute(J,$),b[B+Y+8]=r.x,b[B+Y+9]=r.y,b[B+Y+10]=r.z,b[B+Y+11]=J.itemSize===4?r.w:1)}}f={count:p,texture:x,size:new Mt(C,A)},i.set(a,f),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let y=0;for(let v=0;v<c.length;v++)y+=c[v];const w=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",w),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function Nw(t,e,n,i,r){let s=new WeakMap;function o(c){const d=r.render.frame,p=c.geometry,f=e.get(c,p);if(s.get(f)!==d&&(e.update(f),s.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const g=c.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return f}function a(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:o,dispose:a}}const Uw={[J_]:"LINEAR_TONE_MAPPING",[ip]:"REINHARD_TONE_MAPPING",[ev]:"CINEON_TONE_MAPPING",[tv]:"ACES_FILMIC_TONE_MAPPING",[iv]:"AGX_TONE_MAPPING",[rv]:"NEUTRAL_TONE_MAPPING",[nv]:"CUSTOM_TONE_MAPPING"};function Fw(t,e,n,i,r){const s=new rr(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Io(e,n):void 0}),o=new rr(e,n,{type:Ar,depthBuffer:!1,stencilBuffer:!1}),a=new Fn;a.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ln([0,2,0,0,2,0],2));const l=new AM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new le(a,l),d=new Tv(-1,1,1,-1,0,1);let p=null,f=null,g=!1,y,w=null,v=[],u=!1;this.setSize=function(h,S){s.setSize(h,S),o.setSize(h,S);for(let E=0;E<v.length;E++){const C=v[E];C.setSize&&C.setSize(h,S)}},this.setEffects=function(h){v=h,u=v.length>0&&v[0].isRenderPass===!0;const S=s.width,E=s.height;for(let C=0;C<v.length;C++){const A=v[C];A.setSize&&A.setSize(S,E)}},this.begin=function(h,S){if(g||h.toneMapping===ir&&v.length===0)return!1;if(w=S,S!==null){const E=S.width,C=S.height;(s.width!==E||s.height!==C)&&this.setSize(E,C)}return u===!1&&h.setRenderTarget(s),y=h.toneMapping,h.toneMapping=ir,!0},this.hasRenderPass=function(){return u},this.end=function(h,S){h.toneMapping=y,g=!0;let E=s,C=o;for(let A=0;A<v.length;A++){const b=v[A];if(b.enabled!==!1&&(b.render(h,C,E,S),b.needsSwap!==!1)){const x=E;E=C,C=x}}if(p!==h.outputColorSpace||f!==h.toneMapping){p=h.outputColorSpace,f=h.toneMapping,l.defines={},St.getTransfer(p)===Ct&&(l.defines.SRGB_TRANSFER="");const A=Uw[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,h.setRenderTarget(w),h.render(c,d),w=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const bv=new Nn,oh=new Io(1,1),Pv=new pv,Lv=new eM,Dv=new yv,x0=[],S0=[],y0=new Float32Array(16),M0=new Float32Array(9),E0=new Float32Array(4);function ko(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=x0[r];if(s===void 0&&(s=new Float32Array(r),x0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function hn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function pn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function au(t,e){let n=S0[e];n===void 0&&(n=new Int32Array(e),S0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ow(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(hn(n,e))return;t.uniform2fv(this.addr,e),pn(n,e)}}function kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(hn(n,e))return;t.uniform3fv(this.addr,e),pn(n,e)}}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(hn(n,e))return;t.uniform4fv(this.addr,e),pn(n,e)}}function Gw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(hn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),pn(n,e)}else{if(hn(n,i))return;E0.set(i),t.uniformMatrix2fv(this.addr,!1,E0),pn(n,i)}}function Vw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(hn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),pn(n,e)}else{if(hn(n,i))return;M0.set(i),t.uniformMatrix3fv(this.addr,!1,M0),pn(n,i)}}function Hw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(hn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),pn(n,e)}else{if(hn(n,i))return;y0.set(i),t.uniformMatrix4fv(this.addr,!1,y0),pn(n,i)}}function Ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(hn(n,e))return;t.uniform2iv(this.addr,e),pn(n,e)}}function jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(hn(n,e))return;t.uniform3iv(this.addr,e),pn(n,e)}}function Yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(hn(n,e))return;t.uniform4iv(this.addr,e),pn(n,e)}}function $w(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(hn(n,e))return;t.uniform2uiv(this.addr,e),pn(n,e)}}function Kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(hn(n,e))return;t.uniform3uiv(this.addr,e),pn(n,e)}}function Zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(hn(n,e))return;t.uniform4uiv(this.addr,e),pn(n,e)}}function Qw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(oh.compareFunction=n.isReversedDepthBuffer()?fp:up,s=oh):s=bv,n.setTexture2D(e||s,r)}function Jw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Lv,r)}function eT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Dv,r)}function tT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Pv,r)}function nT(t){switch(t){case 5126:return Ow;case 35664:return Bw;case 35665:return kw;case 35666:return zw;case 35674:return Gw;case 35675:return Vw;case 35676:return Hw;case 5124:case 35670:return Ww;case 35667:case 35671:return Xw;case 35668:case 35672:return jw;case 35669:case 35673:return Yw;case 5125:return $w;case 36294:return qw;case 36295:return Kw;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return tT}}function iT(t,e){t.uniform1fv(this.addr,e)}function rT(t,e){const n=ko(e,this.size,2);t.uniform2fv(this.addr,n)}function sT(t,e){const n=ko(e,this.size,3);t.uniform3fv(this.addr,n)}function oT(t,e){const n=ko(e,this.size,4);t.uniform4fv(this.addr,n)}function aT(t,e){const n=ko(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lT(t,e){const n=ko(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cT(t,e){const n=ko(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uT(t,e){t.uniform1iv(this.addr,e)}function fT(t,e){t.uniform2iv(this.addr,e)}function dT(t,e){t.uniform3iv(this.addr,e)}function hT(t,e){t.uniform4iv(this.addr,e)}function pT(t,e){t.uniform1uiv(this.addr,e)}function mT(t,e){t.uniform2uiv(this.addr,e)}function gT(t,e){t.uniform3uiv(this.addr,e)}function _T(t,e){t.uniform4uiv(this.addr,e)}function vT(t,e,n){const i=this.cache,r=e.length,s=au(n,r);hn(i,s)||(t.uniform1iv(this.addr,s),pn(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=oh:o=bv;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function xT(t,e,n){const i=this.cache,r=e.length,s=au(n,r);hn(i,s)||(t.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Lv,s[o])}function ST(t,e,n){const i=this.cache,r=e.length,s=au(n,r);hn(i,s)||(t.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Dv,s[o])}function yT(t,e,n){const i=this.cache,r=e.length,s=au(n,r);hn(i,s)||(t.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Pv,s[o])}function MT(t){switch(t){case 5126:return iT;case 35664:return rT;case 35665:return sT;case 35666:return oT;case 35674:return aT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return dT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return yT}}class ET{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=nT(n.type)}}class wT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=MT(n.type)}}class TT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const vf=/(\w+)(\])?(\[|\.)?/g;function w0(t,e){t.seq.push(e),t.map[e.id]=e}function AT(t,e,n){const i=t.name,r=i.length;for(vf.lastIndex=0;;){const s=vf.exec(i),o=vf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){w0(n,c===void 0?new ET(a,t,e):new wT(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new TT(a),w0(n,p)),n=p}}}class cc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);AT(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function T0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const RT=37297;let CT=0;function bT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const A0=new rt;function PT(t){St._getMatrix(A0,St.workingColorSpace,t);const e=`mat3( ${A0.elements.map(n=>n.toFixed(4))} )`;switch(St.getTransfer(t)){case Oc:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function R0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+bT(t.getShaderSource(e),a)}else return s}function LT(t,e){const n=PT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const DT={[J_]:"Linear",[ip]:"Reinhard",[ev]:"Cineon",[tv]:"ACESFilmic",[iv]:"AgX",[rv]:"Neutral",[nv]:"Custom"};function IT(t,e){const n=DT[e];return n===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wl=new X;function NT(){St.getLuminanceCoefficients(Wl);const t=Wl.x.toFixed(4),e=Wl.y.toFixed(4),n=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function FT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function OT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ua(t){return t!==""}function C0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function b0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(t){return t.replace(BT,zT)}const kT=new Map;function zT(t,e){let n=ut[e];if(n===void 0){const i=kT.get(e);if(i!==void 0)n=ut[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ah(n)}const GT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P0(t){return t.replace(GT,VT)}function VT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function L0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const HT={[rc]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function WT(t){return HT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const XT={[Ns]:"ENVMAP_TYPE_CUBE",[Do]:"ENVMAP_TYPE_CUBE",[su]:"ENVMAP_TYPE_CUBE_UV"};function jT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":XT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const YT={[Do]:"ENVMAP_MODE_REFRACTION"};function $T(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":YT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qT={[Q_]:"ENVMAP_BLENDING_MULTIPLY",[Iy]:"ENVMAP_BLENDING_MIX",[Ny]:"ENVMAP_BLENDING_ADD"};function KT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":qT[t.combine]||"ENVMAP_BLENDING_NONE"}function ZT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function QT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=WT(n),c=jT(n),d=$T(n),p=KT(n),f=ZT(n),g=UT(n),y=FT(s),w=r.createProgram();let v,u,h=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ua).join(`
`),v.length>0&&(v+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ua).join(`
`),u.length>0&&(u+=`
`)):(v=[L0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),u=[L0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ir?"#define TONE_MAPPING":"",n.toneMapping!==ir?ut.tonemapping_pars_fragment:"",n.toneMapping!==ir?IT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,LT("linearToOutputTexel",n.outputColorSpace),NT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ua).join(`
`)),o=ah(o),o=C0(o,n),o=b0(o,n),a=ah(a),a=C0(a,n),a=b0(a,n),o=P0(o),a=P0(a),n.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,v=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,u=["#define varying in",n.glslVersion===km?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=h+v+o,E=h+u+a,C=T0(r,r.VERTEX_SHADER,S),A=T0(r,r.FRAGMENT_SHADER,E);r.attachShader(w,C),r.attachShader(w,A),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function b(I){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(w)||"",ee=r.getShaderInfoLog(C)||"",J=r.getShaderInfoLog(A)||"",B=k.trim(),$=ee.trim(),Y=J.trim();let j=!0,te=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,w,C,A);else{const ce=R0(r,C,"vertex"),Ee=R0(r,A,"fragment");Et("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+ce+`
`+Ee)}else B!==""?tt("WebGLProgram: Program Info Log:",B):($===""||Y==="")&&(te=!1);te&&(I.diagnostics={runnable:j,programLog:B,vertexShader:{log:$,prefix:v},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(C),r.deleteShader(A),x=new cc(r,w),R=OT(r,w)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let R;this.getAttributes=function(){return R===void 0&&b(this),R};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(w,RT)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=C,this.fragmentShader=A,this}let JT=0;class eA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new tA(e),n.set(e,i)),i}}class tA{constructor(e){this.id=JT++,this.code=e,this.usedTimes=0}}function nA(t){return t===Us||t===Nc||t===Uc}function iA(t,e,n,i,r,s){const o=new mv,a=new eA,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(x){return l.add(x),x===0?"uv":`uv${x}`}function w(x,R,D,I,k,ee){const J=I.fog,B=k.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||$,Y),te=j&&j.mapping===su?j.image.height:null,ce=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&tt("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const Ee=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ce=Ee!==void 0?Ee.length:0;let st=0;B.morphAttributes.position!==void 0&&(st=1),B.morphAttributes.normal!==void 0&&(st=2),B.morphAttributes.color!==void 0&&(st=3);let at,$e,se,Re;if(ce){const ke=Ki[ce];at=ke.vertexShader,$e=ke.fragmentShader}else at=x.vertexShader,$e=x.fragmentShader,a.update(x),se=a.getVertexShaderID(x),Re=a.getFragmentShaderID(x);const we=t.getRenderTarget(),je=t.state.buffers.depth.getReversed(),Je=k.isInstancedMesh===!0,Ye=k.isBatchedMesh===!0,At=!!x.map,ct=!!x.matcap,Tt=!!j,Rt=!!x.aoMap,ot=!!x.lightMap,Nt=!!x.bumpMap,_=!!x.normalMap,Q=!!x.displacementMap,L=!!x.emissiveMap,Te=!!x.metalnessMap,ue=!!x.roughnessMap,ye=x.anisotropy>0,re=x.clearcoat>0,Le=x.dispersion>0,T=x.iridescence>0,m=x.sheen>0,F=x.transmission>0,G=ye&&!!x.anisotropyMap,W=re&&!!x.clearcoatMap,ae=re&&!!x.clearcoatNormalMap,me=re&&!!x.clearcoatRoughnessMap,P=T&&!!x.iridescenceMap,z=T&&!!x.iridescenceThicknessMap,de=m&&!!x.sheenColorMap,he=m&&!!x.sheenRoughnessMap,pe=!!x.specularMap,_e=!!x.specularColorMap,Xe=!!x.specularIntensityMap,Ke=F&&!!x.transmissionMap,Oe=F&&!!x.thicknessMap,O=!!x.gradientMap,q=!!x.alphaMap,K=x.alphaTest>0,Ae=!!x.alphaHash,ge=!!x.extensions;let oe=ir;x.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(oe=t.toneMapping);const Ne={shaderID:ce,shaderType:x.type,shaderName:x.name,vertexShader:at,fragmentShader:$e,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:Re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ye,batchingColor:Ye&&k._colorsTexture!==null,instancing:Je,instancingColor:Je&&k.instanceColor!==null,instancingMorph:Je&&k.morphTexture!==null,outputColorSpace:we===null?t.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:St.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:At,matcap:ct,envMap:Tt,envMapMode:Tt&&j.mapping,envMapCubeUVHeight:te,aoMap:Rt,lightMap:ot,bumpMap:Nt,normalMap:_,displacementMap:Q,emissiveMap:L,normalMapObjectSpace:_&&x.normalMapType===Oy,normalMapTangentSpace:_&&x.normalMapType===nh,packedNormalMap:_&&x.normalMapType===nh&&nA(x.normalMap.format),metalnessMap:Te,roughnessMap:ue,anisotropy:ye,anisotropyMap:G,clearcoat:re,clearcoatMap:W,clearcoatNormalMap:ae,clearcoatRoughnessMap:me,dispersion:Le,iridescence:T,iridescenceMap:P,iridescenceThicknessMap:z,sheen:m,sheenColorMap:de,sheenRoughnessMap:he,specularMap:pe,specularColorMap:_e,specularIntensityMap:Xe,transmission:F,transmissionMap:Ke,thicknessMap:Oe,gradientMap:O,opaque:x.transparent===!1&&x.blending===Mo&&x.alphaToCoverage===!1,alphaMap:q,alphaTest:K,alphaHash:Ae,combine:x.combine,mapUv:At&&y(x.map.channel),aoMapUv:Rt&&y(x.aoMap.channel),lightMapUv:ot&&y(x.lightMap.channel),bumpMapUv:Nt&&y(x.bumpMap.channel),normalMapUv:_&&y(x.normalMap.channel),displacementMapUv:Q&&y(x.displacementMap.channel),emissiveMapUv:L&&y(x.emissiveMap.channel),metalnessMapUv:Te&&y(x.metalnessMap.channel),roughnessMapUv:ue&&y(x.roughnessMap.channel),anisotropyMapUv:G&&y(x.anisotropyMap.channel),clearcoatMapUv:W&&y(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&y(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&y(x.clearcoatRoughnessMap.channel),iridescenceMapUv:P&&y(x.iridescenceMap.channel),iridescenceThicknessMapUv:z&&y(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&y(x.sheenColorMap.channel),sheenRoughnessMapUv:he&&y(x.sheenRoughnessMap.channel),specularMapUv:pe&&y(x.specularMap.channel),specularColorMapUv:_e&&y(x.specularColorMap.channel),specularIntensityMapUv:Xe&&y(x.specularIntensityMap.channel),transmissionMapUv:Ke&&y(x.transmissionMap.channel),thicknessMapUv:Oe&&y(x.thicknessMap.channel),alphaMapUv:q&&y(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(_||ye),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(At||q),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&_===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:je,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:st,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:oe,decodeVideoTexture:At&&x.map.isVideoTexture===!0&&St.getTransfer(x.map.colorSpace)===Ct,decodeVideoTextureEmissive:L&&x.emissiveMap.isVideoTexture===!0&&St.getTransfer(x.emissiveMap.colorSpace)===Ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qi,flipSided:x.side===Jn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ge&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&x.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function v(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)R.push(D),R.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(u(R,x),h(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function u(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function h(x,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function S(x){const R=g[x.type];let D;if(R){const I=Ki[R];D=EM.clone(I.uniforms)}else D=x.uniforms;return D}function E(x,R){let D=d.get(R);return D!==void 0?++D.usedTimes:(D=new QT(t,R,x,r),c.push(D),d.set(R,D)),D}function C(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function b(){a.dispose()}return{getParameters:w,getProgramCacheKey:v,getUniforms:S,acquireProgram:E,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:b}}function rA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function sA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function D0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function I0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function a(f,g,y,w,v,u){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:g,material:y,materialVariant:o(f),groupOrder:w,renderOrder:f.renderOrder,z:v,group:u},t[e]=h):(h.id=f.id,h.object=f,h.geometry=g,h.material=y,h.materialVariant=o(f),h.groupOrder=w,h.renderOrder=f.renderOrder,h.z=v,h.group=u),e++,h}function l(f,g,y,w,v,u){const h=a(f,g,y,w,v,u);y.transmission>0?i.push(h):y.transparent===!0?r.push(h):n.push(h)}function c(f,g,y,w,v,u){const h=a(f,g,y,w,v,u);y.transmission>0?i.unshift(h):y.transparent===!0?r.unshift(h):n.unshift(h)}function d(f,g){n.length>1&&n.sort(f||sA),i.length>1&&i.sort(g||D0),r.length>1&&r.sort(g||D0)}function p(){for(let f=e,g=t.length;f<g;f++){const y=t[f];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:d}}function oA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new I0,t.set(i,[o])):r>=s.length?(o=new I0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function aA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new ht};break;case"SpotLight":n={position:new X,direction:new X,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new ht,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":n={color:new ht,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function lA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let cA=0;function uA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function fA(t){const e=new aA,n=lA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new jt,o=new jt;function a(c){let d=0,p=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let g=0,y=0,w=0,v=0,u=0,h=0,S=0,E=0,C=0,A=0,b=0;c.sort(uA);for(let R=0,D=c.length;R<D;R++){const I=c[R],k=I.color,ee=I.intensity,J=I.distance;let B=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Us?B=I.shadow.map.texture:B=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=k.r*ee,p+=k.g*ee,f+=k.b*ee;else if(I.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(I.sh.coefficients[$],ee);b++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Y=I.shadow,j=n.get(I);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,i.directionalShadow[g]=j,i.directionalShadowMap[g]=B,i.directionalShadowMatrix[g]=I.shadow.matrix,h++}i.directional[g]=$,g++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(k).multiplyScalar(ee),$.distance=J,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,i.spot[w]=$;const Y=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,Y.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[w]=Y.matrix,I.castShadow){const j=n.get(I);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,i.spotShadow[w]=j,i.spotShadowMap[w]=B,E++}w++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(k).multiplyScalar(ee),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=$,v++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const Y=I.shadow,j=n.get(I);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,i.pointShadow[y]=j,i.pointShadowMap[y]=B,i.pointShadowMatrix[y]=I.shadow.matrix,S++}i.point[y]=$,y++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(ee),$.groundColor.copy(I.groundColor).multiplyScalar(ee),i.hemi[u]=$,u++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==g||x.pointLength!==y||x.spotLength!==w||x.rectAreaLength!==v||x.hemiLength!==u||x.numDirectionalShadows!==h||x.numPointShadows!==S||x.numSpotShadows!==E||x.numSpotMaps!==C||x.numLightProbes!==b)&&(i.directional.length=g,i.spot.length=w,i.rectArea.length=v,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,x.directionalLength=g,x.pointLength=y,x.spotLength=w,x.rectAreaLength=v,x.hemiLength=u,x.numDirectionalShadows=h,x.numPointShadows=S,x.numSpotShadows=E,x.numSpotMaps=C,x.numLightProbes=b,i.version=cA++)}function l(c,d){let p=0,f=0,g=0,y=0,w=0;const v=d.matrixWorldInverse;for(let u=0,h=c.length;u<h;u++){const S=c[u];if(S.isDirectionalLight){const E=i.directional[p];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(v),p++}else if(S.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(v),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(v),g++}else if(S.isRectAreaLight){const E=i.rectArea[y];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(v),o.identity(),s.copy(S.matrixWorld),s.premultiply(v),o.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(v),f++}else if(S.isHemisphereLight){const E=i.hemi[w];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(v),w++}}}return{setup:a,setupView:l,state:i}}function N0(t){const e=new fA(t),n=[],i=[],r=[];function s(f){p.camera=f,n.length=0,i.length=0,r.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function d(f){e.setupView(n,f)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function dA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new N0(t),e.set(r,[a])):s>=o.length?(a=new N0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const hA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pA=`uniform sampler2D shadow_pass;
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
}`,mA=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],gA=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],U0=new jt,ia=new X,xf=new X;function _A(t,e,n){let i=new mp;const r=new Mt,s=new Mt,o=new Kt,a=new RM,l=new CM,c={},d=n.maxTextureSize,p={[ns]:Jn,[Jn]:ns,[Qi]:Qi},f=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:hA,fragmentShader:pA}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const y=new Fn;y.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new le(y,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc;let u=this.type;this.render=function(A,b,x){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;this.type===Z_&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=rc);const R=t.getRenderTarget(),D=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Sr),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const ee=u!==this.type;ee&&b.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(B=>B.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,B=A.length;J<B;J++){const $=A[J],Y=$.shadow;if(Y===void 0){tt("WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const j=Y.getFrameExtents();r.multiply(j),s.copy(Y.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/j.x),r.x=s.x*j.x,Y.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/j.y),r.y=s.y*j.y,Y.mapSize.y=s.y));const te=t.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=te,Y.map===null||ee===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===ca){if($.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new rr(r.x,r.y,{format:Us,type:Ar,minFilter:In,magFilter:In,generateMipmaps:!1}),Y.map.texture.name=$.name+".shadowMap",Y.map.depthTexture=new Io(r.x,r.y,Ji),Y.map.depthTexture.name=$.name+".shadowMapDepth",Y.map.depthTexture.format=Rr,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Mn,Y.map.depthTexture.magFilter=Mn}else $.isPointLight?(Y.map=new Cv(r.x),Y.map.depthTexture=new yM(r.x,sr)):(Y.map=new rr(r.x,r.y),Y.map.depthTexture=new Io(r.x,r.y,sr)),Y.map.depthTexture.name=$.name+".shadowMap",Y.map.depthTexture.format=Rr,this.type===rc?(Y.map.depthTexture.compareFunction=te?fp:up,Y.map.depthTexture.minFilter=In,Y.map.depthTexture.magFilter=In):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Mn,Y.map.depthTexture.magFilter=Mn);Y.camera.updateProjectionMatrix()}const ce=Y.map.isWebGLCubeRenderTarget?6:1;for(let Ee=0;Ee<ce;Ee++){if(Y.map.isWebGLCubeRenderTarget)t.setRenderTarget(Y.map,Ee),t.clear();else{Ee===0&&(t.setRenderTarget(Y.map),t.clear());const Ce=Y.getViewport(Ee);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),k.viewport(o)}if($.isPointLight){const Ce=Y.camera,st=Y.matrix,at=$.distance||Ce.far;at!==Ce.far&&(Ce.far=at,Ce.updateProjectionMatrix()),ia.setFromMatrixPosition($.matrixWorld),Ce.position.copy(ia),xf.copy(Ce.position),xf.add(mA[Ee]),Ce.up.copy(gA[Ee]),Ce.lookAt(xf),Ce.updateMatrixWorld(),st.makeTranslation(-ia.x,-ia.y,-ia.z),U0.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(U0,Ce.coordinateSystem,Ce.reversedDepth)}else Y.updateMatrices($);i=Y.getFrustum(),E(b,x,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===ca&&h(Y,x),Y.needsUpdate=!1}u=this.type,v.needsUpdate=!1,t.setRenderTarget(R,D,I)};function h(A,b){const x=e.update(w);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new rr(r.x,r.y,{format:Us,type:Ar})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,x,f,w,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,x,g,w,null)}function S(A,b,x,R){let D=null;const I=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)D=I;else if(D=x.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const k=D.uuid,ee=b.uuid;let J=c[k];J===void 0&&(J={},c[k]=J);let B=J[ee];B===void 0&&(B=D.clone(),J[ee]=B,b.addEventListener("dispose",C)),D=B}if(D.visible=b.visible,D.wireframe=b.wireframe,R===ca?D.side=b.shadowSide!==null?b.shadowSide:b.side:D.side=b.shadowSide!==null?b.shadowSide:p[b.side],D.alphaMap=b.alphaMap,D.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,D.map=b.map,D.clipShadows=b.clipShadows,D.clippingPlanes=b.clippingPlanes,D.clipIntersection=b.clipIntersection,D.displacementMap=b.displacementMap,D.displacementScale=b.displacementScale,D.displacementBias=b.displacementBias,D.wireframeLinewidth=b.wireframeLinewidth,D.linewidth=b.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const k=t.properties.get(D);k.light=x}return D}function E(A,b,x,R,D){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===ca)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const ee=e.update(A),J=A.material;if(Array.isArray(J)){const B=ee.groups;for(let $=0,Y=B.length;$<Y;$++){const j=B[$],te=J[j.materialIndex];if(te&&te.visible){const ce=S(A,te,R,D);A.onBeforeShadow(t,A,b,x,ee,ce,j),t.renderBufferDirect(x,null,ee,ce,A,j),A.onAfterShadow(t,A,b,x,ee,ce,j)}}}else if(J.visible){const B=S(A,J,R,D);A.onBeforeShadow(t,A,b,x,ee,B,null),t.renderBufferDirect(x,null,ee,B,A,null),A.onAfterShadow(t,A,b,x,ee,B,null)}}const k=A.children;for(let ee=0,J=k.length;ee<J;ee++)E(k[ee],b,x,R,D)}function C(A){A.target.removeEventListener("dispose",C);for(const x in c){const R=c[x],D=A.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}function vA(t,e){function n(){let O=!1;const q=new Kt;let K=null;const Ae=new Kt(0,0,0,0);return{setMask:function(ge){K!==ge&&!O&&(t.colorMask(ge,ge,ge,ge),K=ge)},setLocked:function(ge){O=ge},setClear:function(ge,oe,Ne,ke,gt){gt===!0&&(ge*=ke,oe*=ke,Ne*=ke),q.set(ge,oe,Ne,ke),Ae.equals(q)===!1&&(t.clearColor(ge,oe,Ne,ke),Ae.copy(q))},reset:function(){O=!1,K=null,Ae.set(-1,0,0,0)}}}function i(){let O=!1,q=!1,K=null,Ae=null,ge=null;return{setReversed:function(oe){if(q!==oe){const Ne=e.get("EXT_clip_control");oe?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),q=oe;const ke=ge;ge=null,this.setClear(ke)}},getReversed:function(){return q},setTest:function(oe){oe?we(t.DEPTH_TEST):je(t.DEPTH_TEST)},setMask:function(oe){K!==oe&&!O&&(t.depthMask(oe),K=oe)},setFunc:function(oe){if(q&&(oe=Yy[oe]),Ae!==oe){switch(oe){case _d:t.depthFunc(t.NEVER);break;case vd:t.depthFunc(t.ALWAYS);break;case xd:t.depthFunc(t.LESS);break;case Lo:t.depthFunc(t.LEQUAL);break;case Sd:t.depthFunc(t.EQUAL);break;case yd:t.depthFunc(t.GEQUAL);break;case Md:t.depthFunc(t.GREATER);break;case Ed:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ae=oe}},setLocked:function(oe){O=oe},setClear:function(oe){ge!==oe&&(ge=oe,q&&(oe=1-oe),t.clearDepth(oe))},reset:function(){O=!1,K=null,Ae=null,ge=null,q=!1}}}function r(){let O=!1,q=null,K=null,Ae=null,ge=null,oe=null,Ne=null,ke=null,gt=null;return{setTest:function(xt){O||(xt?we(t.STENCIL_TEST):je(t.STENCIL_TEST))},setMask:function(xt){q!==xt&&!O&&(t.stencilMask(xt),q=xt)},setFunc:function(xt,Bt,ft){(K!==xt||Ae!==Bt||ge!==ft)&&(t.stencilFunc(xt,Bt,ft),K=xt,Ae=Bt,ge=ft)},setOp:function(xt,Bt,ft){(oe!==xt||Ne!==Bt||ke!==ft)&&(t.stencilOp(xt,Bt,ft),oe=xt,Ne=Bt,ke=ft)},setLocked:function(xt){O=xt},setClear:function(xt){gt!==xt&&(t.clearStencil(xt),gt=xt)},reset:function(){O=!1,q=null,K=null,Ae=null,ge=null,oe=null,Ne=null,ke=null,gt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},p={},f={},g=new WeakMap,y=[],w=null,v=!1,u=null,h=null,S=null,E=null,C=null,A=null,b=null,x=new ht(0,0,0),R=0,D=!1,I=null,k=null,ee=null,J=null,B=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(te)[1]),Y=j>=1):te.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),Y=j>=2);let ce=null,Ee={};const Ce=t.getParameter(t.SCISSOR_BOX),st=t.getParameter(t.VIEWPORT),at=new Kt().fromArray(Ce),$e=new Kt().fromArray(st);function se(O,q,K,Ae){const ge=new Uint8Array(4),oe=t.createTexture();t.bindTexture(O,oe),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<K;Ne++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(q,0,t.RGBA,1,1,Ae,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(q+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return oe}const Re={};Re[t.TEXTURE_2D]=se(t.TEXTURE_2D,t.TEXTURE_2D,1),Re[t.TEXTURE_CUBE_MAP]=se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[t.TEXTURE_2D_ARRAY]=se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Re[t.TEXTURE_3D]=se(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),we(t.DEPTH_TEST),o.setFunc(Lo),Nt(!1),_(Nm),we(t.CULL_FACE),Rt(Sr);function we(O){d[O]!==!0&&(t.enable(O),d[O]=!0)}function je(O){d[O]!==!1&&(t.disable(O),d[O]=!1)}function Je(O,q){return f[O]!==q?(t.bindFramebuffer(O,q),f[O]=q,O===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=q),O===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=q),!0):!1}function Ye(O,q){let K=y,Ae=!1;if(O){K=g.get(q),K===void 0&&(K=[],g.set(q,K));const ge=O.textures;if(K.length!==ge.length||K[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,Ne=ge.length;oe<Ne;oe++)K[oe]=t.COLOR_ATTACHMENT0+oe;K.length=ge.length,Ae=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,Ae=!0);Ae&&t.drawBuffers(K)}function At(O){return w!==O?(t.useProgram(O),w=O,!0):!1}const ct={[xs]:t.FUNC_ADD,[gy]:t.FUNC_SUBTRACT,[_y]:t.FUNC_REVERSE_SUBTRACT};ct[vy]=t.MIN,ct[xy]=t.MAX;const Tt={[Sy]:t.ZERO,[yy]:t.ONE,[My]:t.SRC_COLOR,[md]:t.SRC_ALPHA,[Cy]:t.SRC_ALPHA_SATURATE,[Ay]:t.DST_COLOR,[wy]:t.DST_ALPHA,[Ey]:t.ONE_MINUS_SRC_COLOR,[gd]:t.ONE_MINUS_SRC_ALPHA,[Ry]:t.ONE_MINUS_DST_COLOR,[Ty]:t.ONE_MINUS_DST_ALPHA,[by]:t.CONSTANT_COLOR,[Py]:t.ONE_MINUS_CONSTANT_COLOR,[Ly]:t.CONSTANT_ALPHA,[Dy]:t.ONE_MINUS_CONSTANT_ALPHA};function Rt(O,q,K,Ae,ge,oe,Ne,ke,gt,xt){if(O===Sr){v===!0&&(je(t.BLEND),v=!1);return}if(v===!1&&(we(t.BLEND),v=!0),O!==my){if(O!==u||xt!==D){if((h!==xs||C!==xs)&&(t.blendEquation(t.FUNC_ADD),h=xs,C=xs),xt)switch(O){case Mo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vs:t.blendFunc(t.ONE,t.ONE);break;case Um:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Et("WebGLState: Invalid blending: ",O);break}else switch(O){case Mo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Um:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fm:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",O);break}S=null,E=null,A=null,b=null,x.set(0,0,0),R=0,u=O,D=xt}return}ge=ge||q,oe=oe||K,Ne=Ne||Ae,(q!==h||ge!==C)&&(t.blendEquationSeparate(ct[q],ct[ge]),h=q,C=ge),(K!==S||Ae!==E||oe!==A||Ne!==b)&&(t.blendFuncSeparate(Tt[K],Tt[Ae],Tt[oe],Tt[Ne]),S=K,E=Ae,A=oe,b=Ne),(ke.equals(x)===!1||gt!==R)&&(t.blendColor(ke.r,ke.g,ke.b,gt),x.copy(ke),R=gt),u=O,D=!1}function ot(O,q){O.side===Qi?je(t.CULL_FACE):we(t.CULL_FACE);let K=O.side===Jn;q&&(K=!K),Nt(K),O.blending===Mo&&O.transparent===!1?Rt(Sr):Rt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Ae=O.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),L(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?we(t.SAMPLE_ALPHA_TO_COVERAGE):je(t.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(O){I!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),I=O)}function _(O){O!==hy?(we(t.CULL_FACE),O!==k&&(O===Nm?t.cullFace(t.BACK):O===py?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):je(t.CULL_FACE),k=O}function Q(O){O!==ee&&(Y&&t.lineWidth(O),ee=O)}function L(O,q,K){O?(we(t.POLYGON_OFFSET_FILL),(J!==q||B!==K)&&(J=q,B=K,o.getReversed()&&(q=-q),t.polygonOffset(q,K))):je(t.POLYGON_OFFSET_FILL)}function Te(O){O?we(t.SCISSOR_TEST):je(t.SCISSOR_TEST)}function ue(O){O===void 0&&(O=t.TEXTURE0+$-1),ce!==O&&(t.activeTexture(O),ce=O)}function ye(O,q,K){K===void 0&&(ce===null?K=t.TEXTURE0+$-1:K=ce);let Ae=Ee[K];Ae===void 0&&(Ae={type:void 0,texture:void 0},Ee[K]=Ae),(Ae.type!==O||Ae.texture!==q)&&(ce!==K&&(t.activeTexture(K),ce=K),t.bindTexture(O,q||Re[O]),Ae.type=O,Ae.texture=q)}function re(){const O=Ee[ce];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Le(){try{t.compressedTexImage2D(...arguments)}catch(O){Et("WebGLState:",O)}}function T(){try{t.compressedTexImage3D(...arguments)}catch(O){Et("WebGLState:",O)}}function m(){try{t.texSubImage2D(...arguments)}catch(O){Et("WebGLState:",O)}}function F(){try{t.texSubImage3D(...arguments)}catch(O){Et("WebGLState:",O)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(O){Et("WebGLState:",O)}}function W(){try{t.compressedTexSubImage3D(...arguments)}catch(O){Et("WebGLState:",O)}}function ae(){try{t.texStorage2D(...arguments)}catch(O){Et("WebGLState:",O)}}function me(){try{t.texStorage3D(...arguments)}catch(O){Et("WebGLState:",O)}}function P(){try{t.texImage2D(...arguments)}catch(O){Et("WebGLState:",O)}}function z(){try{t.texImage3D(...arguments)}catch(O){Et("WebGLState:",O)}}function de(O){return p[O]!==void 0?p[O]:t.getParameter(O)}function he(O,q){p[O]!==q&&(t.pixelStorei(O,q),p[O]=q)}function pe(O){at.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),at.copy(O))}function _e(O){$e.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),$e.copy(O))}function Xe(O,q){let K=c.get(q);K===void 0&&(K=new WeakMap,c.set(q,K));let Ae=K.get(O);Ae===void 0&&(Ae=t.getUniformBlockIndex(q,O.name),K.set(O,Ae))}function Ke(O,q){const Ae=c.get(q).get(O);l.get(q)!==Ae&&(t.uniformBlockBinding(q,Ae,O.__bindingPointIndex),l.set(q,Ae))}function Oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},ce=null,Ee={},f={},g=new WeakMap,y=[],w=null,v=!1,u=null,h=null,S=null,E=null,C=null,A=null,b=null,x=new ht(0,0,0),R=0,D=!1,I=null,k=null,ee=null,J=null,B=null,at.set(0,0,t.canvas.width,t.canvas.height),$e.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:we,disable:je,bindFramebuffer:Je,drawBuffers:Ye,useProgram:At,setBlending:Rt,setMaterial:ot,setFlipSided:Nt,setCullFace:_,setLineWidth:Q,setPolygonOffset:L,setScissorTest:Te,activeTexture:ue,bindTexture:ye,unbindTexture:re,compressedTexImage2D:Le,compressedTexImage3D:T,texImage2D:P,texImage3D:z,pixelStorei:he,getParameter:de,updateUBOMapping:Xe,uniformBlockBinding:Ke,texStorage2D:ae,texStorage3D:me,texSubImage2D:m,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:W,scissor:pe,viewport:_e,reset:Oe}}function xA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,d=new WeakMap,p=new Set;let f;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(T,m){return y?new OffscreenCanvas(T,m):Bc("canvas")}function v(T,m,F){let G=1;const W=Le(T);if((W.width>F||W.height>F)&&(G=F/Math.max(W.width,W.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ae=Math.floor(G*W.width),me=Math.floor(G*W.height);f===void 0&&(f=w(ae,me));const P=m?w(ae,me):f;return P.width=ae,P.height=me,P.getContext("2d").drawImage(T,0,0,ae,me),tt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ae+"x"+me+")."),P}else return"data"in T&&tt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),T;return T}function u(T){return T.generateMipmaps}function h(T){t.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(T,m,F,G,W,ae=!1){if(T!==null){if(t[T]!==void 0)return t[T];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let me;G&&(me=e.get("EXT_texture_norm16"),me||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let P=m;if(m===t.RED&&(F===t.FLOAT&&(P=t.R32F),F===t.HALF_FLOAT&&(P=t.R16F),F===t.UNSIGNED_BYTE&&(P=t.R8),F===t.UNSIGNED_SHORT&&me&&(P=me.R16_EXT),F===t.SHORT&&me&&(P=me.R16_SNORM_EXT)),m===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(P=t.R8UI),F===t.UNSIGNED_SHORT&&(P=t.R16UI),F===t.UNSIGNED_INT&&(P=t.R32UI),F===t.BYTE&&(P=t.R8I),F===t.SHORT&&(P=t.R16I),F===t.INT&&(P=t.R32I)),m===t.RG&&(F===t.FLOAT&&(P=t.RG32F),F===t.HALF_FLOAT&&(P=t.RG16F),F===t.UNSIGNED_BYTE&&(P=t.RG8),F===t.UNSIGNED_SHORT&&me&&(P=me.RG16_EXT),F===t.SHORT&&me&&(P=me.RG16_SNORM_EXT)),m===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(P=t.RG8UI),F===t.UNSIGNED_SHORT&&(P=t.RG16UI),F===t.UNSIGNED_INT&&(P=t.RG32UI),F===t.BYTE&&(P=t.RG8I),F===t.SHORT&&(P=t.RG16I),F===t.INT&&(P=t.RG32I)),m===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(P=t.RGB8UI),F===t.UNSIGNED_SHORT&&(P=t.RGB16UI),F===t.UNSIGNED_INT&&(P=t.RGB32UI),F===t.BYTE&&(P=t.RGB8I),F===t.SHORT&&(P=t.RGB16I),F===t.INT&&(P=t.RGB32I)),m===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(P=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(P=t.RGBA16UI),F===t.UNSIGNED_INT&&(P=t.RGBA32UI),F===t.BYTE&&(P=t.RGBA8I),F===t.SHORT&&(P=t.RGBA16I),F===t.INT&&(P=t.RGBA32I)),m===t.RGB&&(F===t.UNSIGNED_SHORT&&me&&(P=me.RGB16_EXT),F===t.SHORT&&me&&(P=me.RGB16_SNORM_EXT),F===t.UNSIGNED_INT_5_9_9_9_REV&&(P=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(P=t.R11F_G11F_B10F)),m===t.RGBA){const z=ae?Oc:St.getTransfer(W);F===t.FLOAT&&(P=t.RGBA32F),F===t.HALF_FLOAT&&(P=t.RGBA16F),F===t.UNSIGNED_BYTE&&(P=z===Ct?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT&&me&&(P=me.RGBA16_EXT),F===t.SHORT&&me&&(P=me.RGBA16_SNORM_EXT),F===t.UNSIGNED_SHORT_4_4_4_4&&(P=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(P=t.RGB5_A1)}return(P===t.R16F||P===t.R32F||P===t.RG16F||P===t.RG32F||P===t.RGBA16F||P===t.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function C(T,m){let F;return T?m===null||m===sr||m===Ba?F=t.DEPTH24_STENCIL8:m===Ji?F=t.DEPTH32F_STENCIL8:m===Oa&&(F=t.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===sr||m===Ba?F=t.DEPTH_COMPONENT24:m===Ji?F=t.DEPTH_COMPONENT32F:m===Oa&&(F=t.DEPTH_COMPONENT16),F}function A(T,m){return u(T)===!0||T.isFramebufferTexture&&T.minFilter!==Mn&&T.minFilter!==In?Math.log2(Math.max(m.width,m.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?m.mipmaps.length:1}function b(T){const m=T.target;m.removeEventListener("dispose",b),R(m),m.isVideoTexture&&d.delete(m),m.isHTMLTexture&&p.delete(m)}function x(T){const m=T.target;m.removeEventListener("dispose",x),I(m)}function R(T){const m=i.get(T);if(m.__webglInit===void 0)return;const F=T.source,G=g.get(F);if(G){const W=G[m.__cacheKey];W.usedTimes--,W.usedTimes===0&&D(T),Object.keys(G).length===0&&g.delete(F)}i.remove(T)}function D(T){const m=i.get(T);t.deleteTexture(m.__webglTexture);const F=T.source,G=g.get(F);delete G[m.__cacheKey],o.memory.textures--}function I(T){const m=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(m.__webglFramebuffer[G]))for(let W=0;W<m.__webglFramebuffer[G].length;W++)t.deleteFramebuffer(m.__webglFramebuffer[G][W]);else t.deleteFramebuffer(m.__webglFramebuffer[G]);m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer[G])}else{if(Array.isArray(m.__webglFramebuffer))for(let G=0;G<m.__webglFramebuffer.length;G++)t.deleteFramebuffer(m.__webglFramebuffer[G]);else t.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&t.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let G=0;G<m.__webglColorRenderbuffer.length;G++)m.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(m.__webglColorRenderbuffer[G]);m.__webglDepthRenderbuffer&&t.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const F=T.textures;for(let G=0,W=F.length;G<W;G++){const ae=i.get(F[G]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(F[G])}i.remove(T)}let k=0;function ee(){k=0}function J(){return k}function B(T){k=T}function $(){const T=k;return T>=r.maxTextures&&tt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),k+=1,T}function Y(T){const m=[];return m.push(T.wrapS),m.push(T.wrapT),m.push(T.wrapR||0),m.push(T.magFilter),m.push(T.minFilter),m.push(T.anisotropy),m.push(T.internalFormat),m.push(T.format),m.push(T.type),m.push(T.generateMipmaps),m.push(T.premultiplyAlpha),m.push(T.flipY),m.push(T.unpackAlignment),m.push(T.colorSpace),m.join()}function j(T,m){const F=i.get(T);if(T.isVideoTexture&&ye(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const G=T.image;if(G===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{je(F,T,m);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+m)}function te(T,m){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){je(F,T,m);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+m)}function ce(T,m){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){je(F,T,m);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+m)}function Ee(T,m){const F=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&F.__version!==T.version){Je(F,T,m);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+m)}const Ce={[wd]:t.REPEAT,[vr]:t.CLAMP_TO_EDGE,[Td]:t.MIRRORED_REPEAT},st={[Mn]:t.NEAREST,[Uy]:t.NEAREST_MIPMAP_NEAREST,[vl]:t.NEAREST_MIPMAP_LINEAR,[In]:t.LINEAR,[zu]:t.LINEAR_MIPMAP_NEAREST,[Ts]:t.LINEAR_MIPMAP_LINEAR},at={[By]:t.NEVER,[Hy]:t.ALWAYS,[ky]:t.LESS,[up]:t.LEQUAL,[zy]:t.EQUAL,[fp]:t.GEQUAL,[Gy]:t.GREATER,[Vy]:t.NOTEQUAL};function $e(T,m){if(m.type===Ji&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===In||m.magFilter===zu||m.magFilter===vl||m.magFilter===Ts||m.minFilter===In||m.minFilter===zu||m.minFilter===vl||m.minFilter===Ts)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,Ce[m.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,Ce[m.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,Ce[m.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,st[m.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,st[m.minFilter]),m.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,at[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Mn||m.minFilter!==vl&&m.minFilter!==Ts||m.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function se(T,m){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,m.addEventListener("dispose",b));const G=m.source;let W=g.get(G);W===void 0&&(W={},g.set(G,W));const ae=Y(m);if(ae!==T.__cacheKey){W[ae]===void 0&&(W[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),W[ae].usedTimes++;const me=W[T.__cacheKey];me!==void 0&&(W[T.__cacheKey].usedTimes--,me.usedTimes===0&&D(m)),T.__cacheKey=ae,T.__webglTexture=W[ae].texture}return F}function Re(T,m,F){return Math.floor(Math.floor(T/F)/m)}function we(T,m,F,G){const ae=T.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,m.width,m.height,F,G,m.data);else{ae.sort((he,pe)=>he.start-pe.start);let me=0;for(let he=1;he<ae.length;he++){const pe=ae[me],_e=ae[he],Xe=pe.start+pe.count,Ke=Re(_e.start,m.width,4),Oe=Re(pe.start,m.width,4);_e.start<=Xe+1&&Ke===Oe&&Re(_e.start+_e.count-1,m.width,4)===Ke?pe.count=Math.max(pe.count,_e.start+_e.count-pe.start):(++me,ae[me]=_e)}ae.length=me+1;const P=n.getParameter(t.UNPACK_ROW_LENGTH),z=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,m.width);for(let he=0,pe=ae.length;he<pe;he++){const _e=ae[he],Xe=Math.floor(_e.start/4),Ke=Math.ceil(_e.count/4),Oe=Xe%m.width,O=Math.floor(Xe/m.width),q=Ke,K=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,Oe,O,q,K,F,G,m.data)}T.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,P),n.pixelStorei(t.UNPACK_SKIP_PIXELS,z),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function je(T,m,F){let G=t.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),m.isData3DTexture&&(G=t.TEXTURE_3D);const W=se(T,m),ae=m.source;n.bindTexture(G,T.__webglTexture,t.TEXTURE0+F);const me=i.get(ae);if(ae.version!==me.__version||W===!0){if(n.activeTexture(t.TEXTURE0+F),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){const K=St.getPrimaries(St.workingColorSpace),Ae=m.colorSpace===Vr?null:St.getPrimaries(m.colorSpace),ge=m.colorSpace===Vr||K===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment);let z=v(m.image,!1,r.maxTextureSize);z=re(m,z);const de=s.convert(m.format,m.colorSpace),he=s.convert(m.type);let pe=E(m.internalFormat,de,he,m.normalized,m.colorSpace,m.isVideoTexture);$e(G,m);let _e;const Xe=m.mipmaps,Ke=m.isVideoTexture!==!0,Oe=me.__version===void 0||W===!0,O=ae.dataReady,q=A(m,z);if(m.isDepthTexture)pe=C(m.format===As,m.type),Oe&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,pe,z.width,z.height):n.texImage2D(t.TEXTURE_2D,0,pe,z.width,z.height,0,de,he,null));else if(m.isDataTexture)if(Xe.length>0){Ke&&Oe&&n.texStorage2D(t.TEXTURE_2D,q,pe,Xe[0].width,Xe[0].height);for(let K=0,Ae=Xe.length;K<Ae;K++)_e=Xe[K],Ke?O&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,_e.width,_e.height,de,he,_e.data):n.texImage2D(t.TEXTURE_2D,K,pe,_e.width,_e.height,0,de,he,_e.data);m.generateMipmaps=!1}else Ke?(Oe&&n.texStorage2D(t.TEXTURE_2D,q,pe,z.width,z.height),O&&we(m,z,de,he)):n.texImage2D(t.TEXTURE_2D,0,pe,z.width,z.height,0,de,he,z.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ke&&Oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,q,pe,Xe[0].width,Xe[0].height,z.depth);for(let K=0,Ae=Xe.length;K<Ae;K++)if(_e=Xe[K],m.format!==Ni)if(de!==null)if(Ke){if(O)if(m.layerUpdates.size>0){const ge=d0(_e.width,_e.height,m.format,m.type);for(const oe of m.layerUpdates){const Ne=_e.data.subarray(oe*ge/_e.data.BYTES_PER_ELEMENT,(oe+1)*ge/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,oe,_e.width,_e.height,1,de,Ne)}m.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,_e.width,_e.height,z.depth,de,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,pe,_e.width,_e.height,z.depth,0,_e.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,_e.width,_e.height,z.depth,de,he,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,pe,_e.width,_e.height,z.depth,0,de,he,_e.data)}else{Ke&&Oe&&n.texStorage2D(t.TEXTURE_2D,q,pe,Xe[0].width,Xe[0].height);for(let K=0,Ae=Xe.length;K<Ae;K++)_e=Xe[K],m.format!==Ni?de!==null?Ke?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,_e.width,_e.height,de,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,K,pe,_e.width,_e.height,0,_e.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?O&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,_e.width,_e.height,de,he,_e.data):n.texImage2D(t.TEXTURE_2D,K,pe,_e.width,_e.height,0,de,he,_e.data)}else if(m.isDataArrayTexture)if(Ke){if(Oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,q,pe,z.width,z.height,z.depth),O)if(m.layerUpdates.size>0){const K=d0(z.width,z.height,m.format,m.type);for(const Ae of m.layerUpdates){const ge=z.data.subarray(Ae*K/z.data.BYTES_PER_ELEMENT,(Ae+1)*K/z.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ae,z.width,z.height,1,de,he,ge)}m.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,de,he,z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,z.width,z.height,z.depth,0,de,he,z.data);else if(m.isData3DTexture)Ke?(Oe&&n.texStorage3D(t.TEXTURE_3D,q,pe,z.width,z.height,z.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,de,he,z.data)):n.texImage3D(t.TEXTURE_3D,0,pe,z.width,z.height,z.depth,0,de,he,z.data);else if(m.isFramebufferTexture){if(Oe)if(Ke)n.texStorage2D(t.TEXTURE_2D,q,pe,z.width,z.height);else{let K=z.width,Ae=z.height;for(let ge=0;ge<q;ge++)n.texImage2D(t.TEXTURE_2D,ge,pe,K,Ae,0,de,he,null),K>>=1,Ae>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in t){const K=t.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),z.parentNode!==K){K.appendChild(z),p.add(m),K.onpaint=ke=>{const gt=ke.changedElements;for(const xt of p)gt.includes(xt.image)&&(xt.needsUpdate=!0)},K.requestPaint();return}const Ae=0,ge=t.RGBA,oe=t.RGBA,Ne=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,Ae,ge,oe,Ne,z),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(Ke&&Oe){const K=Le(Xe[0]);n.texStorage2D(t.TEXTURE_2D,q,pe,K.width,K.height)}for(let K=0,Ae=Xe.length;K<Ae;K++)_e=Xe[K],Ke?O&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,de,he,_e):n.texImage2D(t.TEXTURE_2D,K,pe,de,he,_e);m.generateMipmaps=!1}else if(Ke){if(Oe){const K=Le(z);n.texStorage2D(t.TEXTURE_2D,q,pe,K.width,K.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,he,z)}else n.texImage2D(t.TEXTURE_2D,0,pe,de,he,z);u(m)&&h(G),me.__version=ae.version,m.onUpdate&&m.onUpdate(m)}T.__version=m.version}function Je(T,m,F){if(m.image.length!==6)return;const G=se(T,m),W=m.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+F);const ae=i.get(W);if(W.version!==ae.__version||G===!0){n.activeTexture(t.TEXTURE0+F);const me=St.getPrimaries(St.workingColorSpace),P=m.colorSpace===Vr?null:St.getPrimaries(m.colorSpace),z=m.colorSpace===Vr||me===P?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);const de=m.isCompressedTexture||m.image[0].isCompressedTexture,he=m.image[0]&&m.image[0].isDataTexture,pe=[];for(let oe=0;oe<6;oe++)!de&&!he?pe[oe]=v(m.image[oe],!0,r.maxCubemapSize):pe[oe]=he?m.image[oe].image:m.image[oe],pe[oe]=re(m,pe[oe]);const _e=pe[0],Xe=s.convert(m.format,m.colorSpace),Ke=s.convert(m.type),Oe=E(m.internalFormat,Xe,Ke,m.normalized,m.colorSpace),O=m.isVideoTexture!==!0,q=ae.__version===void 0||G===!0,K=W.dataReady;let Ae=A(m,_e);$e(t.TEXTURE_CUBE_MAP,m);let ge;if(de){O&&q&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Oe,_e.width,_e.height);for(let oe=0;oe<6;oe++){ge=pe[oe].mipmaps;for(let Ne=0;Ne<ge.length;Ne++){const ke=ge[Ne];m.format!==Ni?Xe!==null?O?K&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,0,0,ke.width,ke.height,Xe,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,Oe,ke.width,ke.height,0,ke.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,0,0,ke.width,ke.height,Xe,Ke,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne,Oe,ke.width,ke.height,0,Xe,Ke,ke.data)}}}else{if(ge=m.mipmaps,O&&q){ge.length>0&&Ae++;const oe=Le(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ae,Oe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(he){O?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,pe[oe].width,pe[oe].height,Xe,Ke,pe[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Oe,pe[oe].width,pe[oe].height,0,Xe,Ke,pe[oe].data);for(let Ne=0;Ne<ge.length;Ne++){const gt=ge[Ne].image[oe].image;O?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,0,0,gt.width,gt.height,Xe,Ke,gt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,Oe,gt.width,gt.height,0,Xe,Ke,gt.data)}}else{O?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Xe,Ke,pe[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Oe,Xe,Ke,pe[oe]);for(let Ne=0;Ne<ge.length;Ne++){const ke=ge[Ne];O?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,0,0,Xe,Ke,ke.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ne+1,Oe,Xe,Ke,ke.image[oe])}}}u(m)&&h(t.TEXTURE_CUBE_MAP),ae.__version=W.version,m.onUpdate&&m.onUpdate(m)}T.__version=m.version}function Ye(T,m,F,G,W,ae){const me=s.convert(F.format,F.colorSpace),P=s.convert(F.type),z=E(F.internalFormat,me,P,F.normalized,F.colorSpace),de=i.get(m),he=i.get(F);if(he.__renderTarget=m,!de.__hasExternalTextures){const pe=Math.max(1,m.width>>ae),_e=Math.max(1,m.height>>ae);W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY?n.texImage3D(W,ae,z,pe,_e,m.depth,0,me,P,null):n.texImage2D(W,ae,z,pe,_e,0,me,P,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),ue(m)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,W,he.__webglTexture,0,Te(m)):(W===t.TEXTURE_2D||W>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,W,he.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function At(T,m,F){if(t.bindRenderbuffer(t.RENDERBUFFER,T),m.depthBuffer){const G=m.depthTexture,W=G&&G.isDepthTexture?G.type:null,ae=C(m.stencilBuffer,W),me=m.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ue(m)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te(m),ae,m.width,m.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te(m),ae,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,ae,m.width,m.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,T)}else{const G=m.textures;for(let W=0;W<G.length;W++){const ae=G[W],me=s.convert(ae.format,ae.colorSpace),P=s.convert(ae.type),z=E(ae.internalFormat,me,P,ae.normalized,ae.colorSpace);ue(m)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te(m),z,m.width,m.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te(m),z,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,z,m.width,m.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ct(T,m,F){const G=m.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(m.depthTexture);if(W.__renderTarget=m,(!W.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),G){if(W.__webglInit===void 0&&(W.__webglInit=!0,m.depthTexture.addEventListener("dispose",b)),W.__webglTexture===void 0){W.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),$e(t.TEXTURE_CUBE_MAP,m.depthTexture);const de=s.convert(m.depthTexture.format),he=s.convert(m.depthTexture.type);let pe;m.depthTexture.format===Rr?pe=t.DEPTH_COMPONENT24:m.depthTexture.format===As&&(pe=t.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,pe,m.width,m.height,0,de,he,null)}}else j(m.depthTexture,0);const ae=W.__webglTexture,me=Te(m),P=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,z=m.depthTexture.format===As?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(m.depthTexture.format===Rr)ue(m)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,z,P,ae,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,z,P,ae,0);else if(m.depthTexture.format===As)ue(m)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,z,P,ae,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,z,P,ae,0);else throw new Error("Unknown depthTexture format")}function Tt(T){const m=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==T.depthTexture){const G=T.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),G){const W=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,G.removeEventListener("dispose",W)};G.addEventListener("dispose",W),m.__depthDisposeCallback=W}m.__boundDepthTexture=G}if(T.depthTexture&&!m.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)ct(m.__webglFramebuffer[G],T,G);else{const G=T.texture.mipmaps;G&&G.length>0?ct(m.__webglFramebuffer[0],T,0):ct(m.__webglFramebuffer,T,0)}else if(F){m.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[G]),m.__webglDepthbuffer[G]===void 0)m.__webglDepthbuffer[G]=t.createRenderbuffer(),At(m.__webglDepthbuffer[G],T,!1);else{const W=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=m.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,ae)}}else{const G=T.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=t.createRenderbuffer(),At(m.__webglDepthbuffer,T,!1);else{const W=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=m.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Rt(T,m,F){const G=i.get(T);m!==void 0&&Ye(G.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Tt(T)}function ot(T){const m=T.texture,F=i.get(T),G=i.get(m);T.addEventListener("dispose",x);const W=T.textures,ae=T.isWebGLCubeRenderTarget===!0,me=W.length>1;if(me||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=m.version,o.memory.textures++),ae){F.__webglFramebuffer=[];for(let P=0;P<6;P++)if(m.mipmaps&&m.mipmaps.length>0){F.__webglFramebuffer[P]=[];for(let z=0;z<m.mipmaps.length;z++)F.__webglFramebuffer[P][z]=t.createFramebuffer()}else F.__webglFramebuffer[P]=t.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){F.__webglFramebuffer=[];for(let P=0;P<m.mipmaps.length;P++)F.__webglFramebuffer[P]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(me)for(let P=0,z=W.length;P<z;P++){const de=i.get(W[P]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&ue(T)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let P=0;P<W.length;P++){const z=W[P];F.__webglColorRenderbuffer[P]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[P]);const de=s.convert(z.format,z.colorSpace),he=s.convert(z.type),pe=E(z.internalFormat,de,he,z.normalized,z.colorSpace,T.isXRRenderTarget===!0),_e=Te(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,pe,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+P,t.RENDERBUFFER,F.__webglColorRenderbuffer[P])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),At(F.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),$e(t.TEXTURE_CUBE_MAP,m);for(let P=0;P<6;P++)if(m.mipmaps&&m.mipmaps.length>0)for(let z=0;z<m.mipmaps.length;z++)Ye(F.__webglFramebuffer[P][z],T,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+P,z);else Ye(F.__webglFramebuffer[P],T,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);u(m)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let P=0,z=W.length;P<z;P++){const de=W[P],he=i.get(de);let pe=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,he.__webglTexture),$e(pe,de),Ye(F.__webglFramebuffer,T,de,t.COLOR_ATTACHMENT0+P,pe,0),u(de)&&h(pe)}n.unbindTexture()}else{let P=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(P=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(P,G.__webglTexture),$e(P,m),m.mipmaps&&m.mipmaps.length>0)for(let z=0;z<m.mipmaps.length;z++)Ye(F.__webglFramebuffer[z],T,m,t.COLOR_ATTACHMENT0,P,z);else Ye(F.__webglFramebuffer,T,m,t.COLOR_ATTACHMENT0,P,0);u(m)&&h(P),n.unbindTexture()}T.depthBuffer&&Tt(T)}function Nt(T){const m=T.textures;for(let F=0,G=m.length;F<G;F++){const W=m[F];if(u(W)){const ae=S(T),me=i.get(W).__webglTexture;n.bindTexture(ae,me),h(ae),n.unbindTexture()}}}const _=[],Q=[];function L(T){if(T.samples>0){if(ue(T)===!1){const m=T.textures,F=T.width,G=T.height;let W=t.COLOR_BUFFER_BIT;const ae=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(T),P=m.length>1;if(P)for(let de=0;de<m.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const z=T.texture.mipmaps;z&&z.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let de=0;de<m.length;de++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(W|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(W|=t.STENCIL_BUFFER_BIT)),P){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[de]);const he=i.get(m[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,F,G,0,0,F,G,W,t.NEAREST),l===!0&&(_.length=0,Q.length=0,_.push(t.COLOR_ATTACHMENT0+de),T.depthBuffer&&T.resolveDepthBuffer===!1&&(_.push(ae),Q.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Q)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),P)for(let de=0;de<m.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,me.__webglColorRenderbuffer[de]);const he=i.get(m[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,he,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const m=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[m])}}}function Te(T){return Math.min(r.maxSamples,T.samples)}function ue(T){const m=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function ye(T){const m=o.render.frame;d.get(T)!==m&&(d.set(T,m),T.update())}function re(T,m){const F=T.colorSpace,G=T.format,W=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Fc&&F!==Vr&&(St.getTransfer(F)===Ct?(G!==Ni||W!==li)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",F)),m}function Le(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=ee,this.getTextureUnits=J,this.setTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=te,this.setTexture3D=ce,this.setTextureCube=Ee,this.rebindTextures=Rt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function SA(t,e){function n(i,r=Vr){let s;const o=St.getTransfer(r);if(i===li)return t.UNSIGNED_BYTE;if(i===sp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===op)return t.UNSIGNED_SHORT_5_5_5_1;if(i===lv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===cv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ov)return t.BYTE;if(i===av)return t.SHORT;if(i===Oa)return t.UNSIGNED_SHORT;if(i===rp)return t.INT;if(i===sr)return t.UNSIGNED_INT;if(i===Ji)return t.FLOAT;if(i===Ar)return t.HALF_FLOAT;if(i===uv)return t.ALPHA;if(i===fv)return t.RGB;if(i===Ni)return t.RGBA;if(i===Rr)return t.DEPTH_COMPONENT;if(i===As)return t.DEPTH_STENCIL;if(i===dv)return t.RED;if(i===ap)return t.RED_INTEGER;if(i===Us)return t.RG;if(i===lp)return t.RG_INTEGER;if(i===cp)return t.RGBA_INTEGER;if(i===sc||i===oc||i===ac||i===lc)if(o===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ac)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ad||i===Rd||i===Cd||i===bd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ad)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pd||i===Ld||i===Dd||i===Id||i===Nd||i===Nc||i===Ud)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Pd||i===Ld)return o===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Dd)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Id)return s.COMPRESSED_R11_EAC;if(i===Nd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Nc)return s.COMPRESSED_RG11_EAC;if(i===Ud)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fd||i===Od||i===Bd||i===kd||i===zd||i===Gd||i===Vd||i===Hd||i===Wd||i===Xd||i===jd||i===Yd||i===$d||i===qd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fd)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Od)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bd)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kd)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zd)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gd)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vd)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hd)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wd)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xd)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jd)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yd)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$d)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qd)return o===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Kd||i===Zd||i===Qd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Kd)return o===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jd||i===eh||i===Uc||i===th)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===eh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===th)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ba?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const yA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MA=`
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

}`;class EA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Mv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new or({vertexShader:yA,fragmentShader:MA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new le(new Sn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wA extends Bs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,p=null,f=null,g=null,y=null;const w=typeof XRWebGLBinding<"u",v=new EA,u={},h=n.getContextAttributes();let S=null,E=null;const C=[],A=[],b=new Mt;let x=null;const R=new ai;R.viewport=new Kt;const D=new ai;D.viewport=new Kt;const I=[R,D],k=new NM;let ee=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Re=C[se];return Re===void 0&&(Re=new $u,C[se]=Re),Re.getTargetRaySpace()},this.getControllerGrip=function(se){let Re=C[se];return Re===void 0&&(Re=new $u,C[se]=Re),Re.getGripSpace()},this.getHand=function(se){let Re=C[se];return Re===void 0&&(Re=new $u,C[se]=Re),Re.getHandSpace()};function B(se){const Re=A.indexOf(se.inputSource);if(Re===-1)return;const we=C[Re];we!==void 0&&(we.update(se.inputSource,se.frame,c||o),we.dispatchEvent({type:se.type,data:se.inputSource}))}function $(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Y);for(let se=0;se<C.length;se++){const Re=A[se];Re!==null&&(A[se]=null,C[se].disconnect(Re))}ee=null,J=null,v.reset();for(const se in u)delete u[se];e.setRenderTarget(S),g=null,f=null,p=null,r=null,E=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return p===null&&w&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Y),h.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,je=null,Je=null;h.depth&&(Je=h.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=h.stencil?As:Rr,je=h.stencil?Ba:sr);const Ye={colorFormat:n.RGBA8,depthFormat:Je,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Ye),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new rr(f.textureWidth,f.textureHeight,{format:Ni,type:li,depthTexture:new Io(f.textureWidth,f.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const we={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,we),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),E=new rr(g.framebufferWidth,g.framebufferHeight,{format:Ni,type:li,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(se){for(let Re=0;Re<se.removed.length;Re++){const we=se.removed[Re],je=A.indexOf(we);je>=0&&(A[je]=null,C[je].disconnect(we))}for(let Re=0;Re<se.added.length;Re++){const we=se.added[Re];let je=A.indexOf(we);if(je===-1){for(let Ye=0;Ye<C.length;Ye++)if(Ye>=A.length){A.push(we),je=Ye;break}else if(A[Ye]===null){A[Ye]=we,je=Ye;break}if(je===-1)break}const Je=C[je];Je&&Je.connect(we)}}const j=new X,te=new X;function ce(se,Re,we){j.setFromMatrixPosition(Re.matrixWorld),te.setFromMatrixPosition(we.matrixWorld);const je=j.distanceTo(te),Je=Re.projectionMatrix.elements,Ye=we.projectionMatrix.elements,At=Je[14]/(Je[10]-1),ct=Je[14]/(Je[10]+1),Tt=(Je[9]+1)/Je[5],Rt=(Je[9]-1)/Je[5],ot=(Je[8]-1)/Je[0],Nt=(Ye[8]+1)/Ye[0],_=At*ot,Q=At*Nt,L=je/(-ot+Nt),Te=L*-ot;if(Re.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Te),se.translateZ(L),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Je[10]===-1)se.projectionMatrix.copy(Re.projectionMatrix),se.projectionMatrixInverse.copy(Re.projectionMatrixInverse);else{const ue=At+L,ye=ct+L,re=_-Te,Le=Q+(je-Te),T=Tt*ct/ye*ue,m=Rt*ct/ye*ue;se.projectionMatrix.makePerspective(re,Le,T,m,ue,ye),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function Ee(se,Re){Re===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Re.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let Re=se.near,we=se.far;v.texture!==null&&(v.depthNear>0&&(Re=v.depthNear),v.depthFar>0&&(we=v.depthFar)),k.near=D.near=R.near=Re,k.far=D.far=R.far=we,(ee!==k.near||J!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),ee=k.near,J=k.far),k.layers.mask=se.layers.mask|6,R.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;const je=se.parent,Je=k.cameras;Ee(k,je);for(let Ye=0;Ye<Je.length;Ye++)Ee(Je[Ye],je);Je.length===2?ce(k,R,D):k.projectionMatrix.copy(R.projectionMatrix),Ce(se,k,je)};function Ce(se,Re,we){we===null?se.matrix.copy(Re.matrixWorld):(se.matrix.copy(we.matrixWorld),se.matrix.invert(),se.matrix.multiply(Re.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Re.projectionMatrix),se.projectionMatrixInverse.copy(Re.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=rh*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=se)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(k)},this.getCameraTexture=function(se){return u[se]};let st=null;function at(se,Re){if(d=Re.getViewerPose(c||o),y=Re,d!==null){const we=d.views;g!==null&&(e.setRenderTargetFramebuffer(E,g.framebuffer),e.setRenderTarget(E));let je=!1;we.length!==k.cameras.length&&(k.cameras.length=0,je=!0);for(let ct=0;ct<we.length;ct++){const Tt=we[ct];let Rt=null;if(g!==null)Rt=g.getViewport(Tt);else{const Nt=p.getViewSubImage(f,Tt);Rt=Nt.viewport,ct===0&&(e.setRenderTargetTextures(E,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(E))}let ot=I[ct];ot===void 0&&(ot=new ai,ot.layers.enable(ct),ot.viewport=new Kt,I[ct]=ot),ot.matrix.fromArray(Tt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Tt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),ct===0&&(k.matrix.copy(ot.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),je===!0&&k.cameras.push(ot)}const Je=r.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){p=i.getBinding();const ct=p.getDepthInformation(we[0]);ct&&ct.isValid&&ct.texture&&v.init(ct,r.renderState)}if(Je&&Je.includes("camera-access")&&w){e.state.unbindTexture(),p=i.getBinding();for(let ct=0;ct<we.length;ct++){const Tt=we[ct].camera;if(Tt){let Rt=u[Tt];Rt||(Rt=new Mv,u[Tt]=Rt);const ot=p.getCameraImage(Tt);Rt.sourceTexture=ot}}}}for(let we=0;we<C.length;we++){const je=A[we],Je=C[we];je!==null&&Je!==void 0&&Je.update(je,Re,c||o)}st&&st(se,Re),Re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Re}),y=null}const $e=new Av;$e.setAnimationLoop(at),this.setAnimationLoop=function(se){st=se},this.dispose=function(){}}}const TA=new jt,Iv=new rt;Iv.set(-1,0,0,0,1,0,0,0,1);function AA(t,e){function n(v,u){v.matrixAutoUpdate===!0&&v.updateMatrix(),u.value.copy(v.matrix)}function i(v,u){u.color.getRGB(v.fogColor.value,Ev(t)),u.isFog?(v.fogNear.value=u.near,v.fogFar.value=u.far):u.isFogExp2&&(v.fogDensity.value=u.density)}function r(v,u,h,S,E){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(v,u):u.isMeshLambertMaterial?(s(v,u),u.envMap&&(v.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(v,u),p(v,u)):u.isMeshPhongMaterial?(s(v,u),d(v,u),u.envMap&&(v.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(v,u),f(v,u),u.isMeshPhysicalMaterial&&g(v,u,E)):u.isMeshMatcapMaterial?(s(v,u),y(v,u)):u.isMeshDepthMaterial?s(v,u):u.isMeshDistanceMaterial?(s(v,u),w(v,u)):u.isMeshNormalMaterial?s(v,u):u.isLineBasicMaterial?(o(v,u),u.isLineDashedMaterial&&a(v,u)):u.isPointsMaterial?l(v,u,h,S):u.isSpriteMaterial?c(v,u):u.isShadowMaterial?(v.color.value.copy(u.color),v.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(v,u){v.opacity.value=u.opacity,u.color&&v.diffuse.value.copy(u.color),u.emissive&&v.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.bumpMap&&(v.bumpMap.value=u.bumpMap,n(u.bumpMap,v.bumpMapTransform),v.bumpScale.value=u.bumpScale,u.side===Jn&&(v.bumpScale.value*=-1)),u.normalMap&&(v.normalMap.value=u.normalMap,n(u.normalMap,v.normalMapTransform),v.normalScale.value.copy(u.normalScale),u.side===Jn&&v.normalScale.value.negate()),u.displacementMap&&(v.displacementMap.value=u.displacementMap,n(u.displacementMap,v.displacementMapTransform),v.displacementScale.value=u.displacementScale,v.displacementBias.value=u.displacementBias),u.emissiveMap&&(v.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,v.emissiveMapTransform)),u.specularMap&&(v.specularMap.value=u.specularMap,n(u.specularMap,v.specularMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest);const h=e.get(u),S=h.envMap,E=h.envMapRotation;S&&(v.envMap.value=S,v.envMapRotation.value.setFromMatrix4(TA.makeRotationFromEuler(E)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Iv),v.reflectivity.value=u.reflectivity,v.ior.value=u.ior,v.refractionRatio.value=u.refractionRatio),u.lightMap&&(v.lightMap.value=u.lightMap,v.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,v.lightMapTransform)),u.aoMap&&(v.aoMap.value=u.aoMap,v.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,v.aoMapTransform))}function o(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform))}function a(v,u){v.dashSize.value=u.dashSize,v.totalSize.value=u.dashSize+u.gapSize,v.scale.value=u.scale}function l(v,u,h,S){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.size.value=u.size*h,v.scale.value=S*.5,u.map&&(v.map.value=u.map,n(u.map,v.uvTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function c(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.rotation.value=u.rotation,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function d(v,u){v.specular.value.copy(u.specular),v.shininess.value=Math.max(u.shininess,1e-4)}function p(v,u){u.gradientMap&&(v.gradientMap.value=u.gradientMap)}function f(v,u){v.metalness.value=u.metalness,u.metalnessMap&&(v.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,v.metalnessMapTransform)),v.roughness.value=u.roughness,u.roughnessMap&&(v.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,v.roughnessMapTransform)),u.envMap&&(v.envMapIntensity.value=u.envMapIntensity)}function g(v,u,h){v.ior.value=u.ior,u.sheen>0&&(v.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),v.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(v.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,v.sheenColorMapTransform)),u.sheenRoughnessMap&&(v.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,v.sheenRoughnessMapTransform))),u.clearcoat>0&&(v.clearcoat.value=u.clearcoat,v.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(v.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,v.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(v.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Jn&&v.clearcoatNormalScale.value.negate())),u.dispersion>0&&(v.dispersion.value=u.dispersion),u.iridescence>0&&(v.iridescence.value=u.iridescence,v.iridescenceIOR.value=u.iridescenceIOR,v.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(v.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,v.iridescenceMapTransform)),u.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),u.transmission>0&&(v.transmission.value=u.transmission,v.transmissionSamplerMap.value=h.texture,v.transmissionSamplerSize.value.set(h.width,h.height),u.transmissionMap&&(v.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,v.transmissionMapTransform)),v.thickness.value=u.thickness,u.thicknessMap&&(v.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=u.attenuationDistance,v.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(v.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(v.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=u.specularIntensity,v.specularColor.value.copy(u.specularColor),u.specularColorMap&&(v.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,v.specularColorMapTransform)),u.specularIntensityMap&&(v.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,u){u.matcap&&(v.matcap.value=u.matcap)}function w(v,u){const h=e.get(u).light;v.referencePosition.value.setFromMatrixPosition(h.matrixWorld),v.nearDistance.value=h.shadow.camera.near,v.farDistance.value=h.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(h,S){const E=S.program;i.uniformBlockBinding(h,E)}function c(h,S){let E=r[h.id];E===void 0&&(y(h),E=d(h),r[h.id]=E,h.addEventListener("dispose",v));const C=S.program;i.updateUBOMapping(h,C);const A=e.render.frame;s[h.id]!==A&&(f(h),s[h.id]=A)}function d(h){const S=p();h.__bindingPointIndex=S;const E=t.createBuffer(),C=h.__size,A=h.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,E),E}function p(){for(let h=0;h<a;h++)if(o.indexOf(h)===-1)return o.push(h),h;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(h){const S=r[h.id],E=h.uniforms,C=h.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let A=0,b=E.length;A<b;A++){const x=Array.isArray(E[A])?E[A]:[E[A]];for(let R=0,D=x.length;R<D;R++){const I=x[R];if(g(I,A,R,C)===!0){const k=I.__offset,ee=Array.isArray(I.value)?I.value:[I.value];let J=0;for(let B=0;B<ee.length;B++){const $=ee[B],Y=w($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,k+J,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):ArrayBuffer.isView($)?I.__data.set(new $.constructor($.buffer,$.byteOffset,I.__data.length)):($.toArray(I.__data,J),J+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(h,S,E,C){const A=h.value,b=S+"_"+E;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:ArrayBuffer.isView(A)?C[b]=A.slice():C[b]=A.clone(),!0;{const x=C[b];if(typeof A=="number"||typeof A=="boolean"){if(x!==A)return C[b]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(x.equals(A)===!1)return x.copy(A),!0}}return!1}function y(h){const S=h.uniforms;let E=0;const C=16;for(let b=0,x=S.length;b<x;b++){const R=Array.isArray(S[b])?S[b]:[S[b]];for(let D=0,I=R.length;D<I;D++){const k=R[D],ee=Array.isArray(k.value)?k.value:[k.value];for(let J=0,B=ee.length;J<B;J++){const $=ee[J],Y=w($),j=E%C,te=j%Y.boundary,ce=j+te;E+=te,ce!==0&&C-ce<Y.storage&&(E+=C-ce),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=Y.storage}}}const A=E%C;return A>0&&(E+=C-A),h.__size=E,h.__cache={},this}function w(h){const S={boundary:0,storage:0};return typeof h=="number"||typeof h=="boolean"?(S.boundary=4,S.storage=4):h.isVector2?(S.boundary=8,S.storage=8):h.isVector3||h.isColor?(S.boundary=16,S.storage=12):h.isVector4?(S.boundary=16,S.storage=16):h.isMatrix3?(S.boundary=48,S.storage=48):h.isMatrix4?(S.boundary=64,S.storage=64):h.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(h)?(S.boundary=16,S.storage=h.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",h),S}function v(h){const S=h.target;S.removeEventListener("dispose",v);const E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function u(){for(const h in r)t.deleteBuffer(r[h]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}const CA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function bA(){return $i===null&&($i=new pM(CA,16,16,Us,Ar),$i.name="DFG_LUT",$i.minFilter=In,$i.magFilter=In,$i.wrapS=vr,$i.wrapT=vr,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class PA{constructor(e={}){const{canvas:n=Xy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:g=li}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=o;const w=g,v=new Set([cp,lp,ap]),u=new Set([li,sr,Oa,Ba,sp,op]),h=new Uint32Array(4),S=new Int32Array(4),E=new X;let C=null,A=null;const b=[],x=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let I=!1,k=null;this._outputColorSpace=_i;let ee=0,J=0,B=null,$=-1,Y=null;const j=new Kt,te=new Kt;let ce=null;const Ee=new ht(0);let Ce=0,st=n.width,at=n.height,$e=1,se=null,Re=null;const we=new Kt(0,0,st,at),je=new Kt(0,0,st,at);let Je=!1;const Ye=new mp;let At=!1,ct=!1;const Tt=new jt,Rt=new X,ot=new Kt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _=!1;function Q(){return B===null?$e:1}let L=i;function Te(M,N){return n.getContext(M,N)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${np}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",Ne,!1),n.addEventListener("webglcontextcreationerror",ke,!1),L===null){const N="webgl2";if(L=Te(N,M),L===null)throw Te(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Et("WebGLRenderer: "+M.message),M}let ue,ye,re,Le,T,m,F,G,W,ae,me,P,z,de,he,pe,_e,Xe,Ke,Oe,O,q,K;function Ae(){ue=new bw(L),ue.init(),O=new SA(L,ue),ye=new yw(L,ue,e,O),re=new vA(L,ue),ye.reversedDepthBuffer&&f&&re.buffers.depth.setReversed(!0),Le=new Dw(L),T=new rA,m=new xA(L,ue,re,T,ye,O,Le),F=new Cw(D),G=new FM(L),q=new xw(L,G),W=new Pw(L,G,Le,q),ae=new Nw(L,W,G,q,Le),Xe=new Iw(L,ye,m),he=new Mw(T),me=new iA(D,F,ue,ye,q,he),P=new AA(D,T),z=new oA,de=new dA(ue),_e=new vw(D,F,re,ae,y,l),pe=new _A(D,ae,ye),K=new RA(L,Le,ye,re),Ke=new Sw(L,ue,Le),Oe=new Lw(L,ue,Le),Le.programs=me.programs,D.capabilities=ye,D.extensions=ue,D.properties=T,D.renderLists=z,D.shadowMap=pe,D.state=re,D.info=Le}Ae(),w!==li&&(R=new Fw(w,n.width,n.height,r,s));const ge=new wA(D,L);this.xr=ge,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=ue.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ue.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $e},this.setPixelRatio=function(M){M!==void 0&&($e=M,this.setSize(st,at,!1))},this.getSize=function(M){return M.set(st,at)},this.setSize=function(M,N,V=!0){if(ge.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}st=M,at=N,n.width=Math.floor(M*$e),n.height=Math.floor(N*$e),V===!0&&(n.style.width=M+"px",n.style.height=N+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(st*$e,at*$e).floor()},this.setDrawingBufferSize=function(M,N,V){st=M,at=N,$e=V,n.width=Math.floor(M*V),n.height=Math.floor(N*V),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(w===li){Et("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){tt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(j)},this.getViewport=function(M){return M.copy(we)},this.setViewport=function(M,N,V,U){M.isVector4?we.set(M.x,M.y,M.z,M.w):we.set(M,N,V,U),re.viewport(j.copy(we).multiplyScalar($e).round())},this.getScissor=function(M){return M.copy(je)},this.setScissor=function(M,N,V,U){M.isVector4?je.set(M.x,M.y,M.z,M.w):je.set(M,N,V,U),re.scissor(te.copy(je).multiplyScalar($e).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(M){re.setScissorTest(Je=M)},this.setOpaqueSort=function(M){se=M},this.setTransparentSort=function(M){Re=M},this.getClearColor=function(M){return M.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,V=!0){let U=0;if(M){let H=!1;if(B!==null){const ie=B.texture.format;H=v.has(ie)}if(H){const ie=B.texture.type,ne=u.has(ie),Se=_e.getClearColor(),Me=_e.getClearAlpha(),Ie=Se.r,Ge=Se.g,Ue=Se.b;ne?(h[0]=Ie,h[1]=Ge,h[2]=Ue,h[3]=Me,L.clearBufferuiv(L.COLOR,0,h)):(S[0]=Ie,S[1]=Ge,S[2]=Ue,S[3]=Me,L.clearBufferiv(L.COLOR,0,S))}else U|=L.COLOR_BUFFER_BIT}N&&(U|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(U|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),k=M},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",Ne,!1),n.removeEventListener("webglcontextcreationerror",ke,!1),_e.dispose(),z.dispose(),de.dispose(),T.dispose(),F.dispose(),ae.dispose(),q.dispose(),K.dispose(),me.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",$t),ge.removeEventListener("sessionend",pi),Pt.stop()};function oe(M){M.preventDefault(),Gm("WebGLRenderer: Context Lost."),I=!0}function Ne(){Gm("WebGLRenderer: Context Restored."),I=!1;const M=Le.autoReset,N=pe.enabled,V=pe.autoUpdate,U=pe.needsUpdate,H=pe.type;Ae(),Le.autoReset=M,pe.enabled=N,pe.autoUpdate=V,pe.needsUpdate=U,pe.type=H}function ke(M){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function gt(M){const N=M.target;N.removeEventListener("dispose",gt),xt(N)}function xt(M){Bt(M),T.remove(M)}function Bt(M){const N=T.get(M).programs;N!==void 0&&(N.forEach(function(V){me.releaseProgram(V)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,V,U,H,ie){N===null&&(N=Nt);const ne=H.isMesh&&H.matrixWorld.determinant()<0,Se=nn(M,N,V,U,H);re.setMaterial(U,ne);let Me=V.index,Ie=1;if(U.wireframe===!0){if(Me=W.getWireframeAttribute(V),Me===void 0)return;Ie=2}const Ge=V.drawRange,Ue=V.attributes.position;let Z=Ge.start*Ie,Pe=(Ge.start+Ge.count)*Ie;ie!==null&&(Z=Math.max(Z,ie.start*Ie),Pe=Math.min(Pe,(ie.start+ie.count)*Ie)),Me!==null?(Z=Math.max(Z,0),Pe=Math.min(Pe,Me.count)):Ue!=null&&(Z=Math.max(Z,0),Pe=Math.min(Pe,Ue.count));const ze=Pe-Z;if(ze<0||ze===1/0)return;q.setup(H,U,Se,V,Me);let Ve,Be=Ke;if(Me!==null&&(Ve=G.get(Me),Be=Oe,Be.setIndex(Ve)),H.isMesh)U.wireframe===!0?(re.setLineWidth(U.wireframeLinewidth*Q()),Be.setMode(L.LINES)):Be.setMode(L.TRIANGLES);else if(H.isLine){let Ze=U.linewidth;Ze===void 0&&(Ze=1),re.setLineWidth(Ze*Q()),H.isLineSegments?Be.setMode(L.LINES):H.isLineLoop?Be.setMode(L.LINE_LOOP):Be.setMode(L.LINE_STRIP)}else H.isPoints?Be.setMode(L.POINTS):H.isSprite&&Be.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))Be.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ze=H._multiDrawStarts,ve=H._multiDrawCounts,dt=H._multiDrawCount,He=Me?G.get(Me).bytesPerElement:1,Lt=T.get(U).currentProgram.getUniforms();for(let lt=0;lt<dt;lt++)Lt.setValue(L,"_gl_DrawID",lt),Be.render(Ze[lt]/He,ve[lt])}else if(H.isInstancedMesh)Be.renderInstances(Z,ze,H.count);else if(V.isInstancedBufferGeometry){const Ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ve=Math.min(V.instanceCount,Ze);Be.renderInstances(Z,ze,ve)}else Be.render(Z,ze)};function ft(M,N,V){M.transparent===!0&&M.side===Qi&&M.forceSinglePass===!1?(M.side=Jn,M.needsUpdate=!0,tn(M,N,V),M.side=ns,M.needsUpdate=!0,tn(M,N,V),M.side=Qi):tn(M,N,V)}this.compile=function(M,N,V=null){V===null&&(V=M),A=de.get(V),A.init(N),x.push(A),V.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),M!==V&&M.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(A.pushLight(H),H.castShadow&&A.pushShadow(H))}),A.setupLights();const U=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ie=H.material;if(ie)if(Array.isArray(ie))for(let ne=0;ne<ie.length;ne++){const Se=ie[ne];ft(Se,V,H),U.add(Se)}else ft(ie,V,H),U.add(ie)}),A=x.pop(),U},this.compileAsync=function(M,N,V=null){const U=this.compile(M,N,V);return new Promise(H=>{function ie(){if(U.forEach(function(ne){T.get(ne).currentProgram.isReady()&&U.delete(ne)}),U.size===0){H(M);return}setTimeout(ie,10)}ue.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Ut=null;function Zt(M){Ut&&Ut(M)}function $t(){Pt.stop()}function pi(){Pt.start()}const Pt=new Av;Pt.setAnimationLoop(Zt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(M){Ut=M,ge.setAnimationLoop(M),M===null?Pt.stop():Pt.start()},ge.addEventListener("sessionstart",$t),ge.addEventListener("sessionend",pi),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;k!==null&&k.renderStart(M,N);const V=ge.enabled===!0&&ge.isPresenting===!0,U=R!==null&&(B===null||V)&&R.begin(D,B);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(N),N=ge.getCamera()),M.isScene===!0&&M.onBeforeRender(D,M,N,B),A=de.get(M,x.length),A.init(N),A.state.textureUnits=m.getTextureUnits(),x.push(A),Tt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ye.setFromProjectionMatrix(Tt,er,N.reversedDepth),ct=this.localClippingEnabled,At=he.init(this.clippingPlanes,ct),C=z.get(M,b.length),C.init(),b.push(C),ge.enabled===!0&&ge.isPresenting===!0){const ne=D.xr.getDepthSensingMesh();ne!==null&&Ht(ne,N,-1/0,D.sortObjects)}Ht(M,N,0,D.sortObjects),C.finish(),D.sortObjects===!0&&C.sort(se,Re),_=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,_&&_e.addToRenderList(C,M),this.info.render.frame++,At===!0&&he.beginShadows();const H=A.state.shadowsArray;if(pe.render(H,M,N),At===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(U&&R.hasRenderPass())===!1){const ne=C.opaque,Se=C.transmissive;if(A.setupLights(),N.isArrayCamera){const Me=N.cameras;if(Se.length>0)for(let Ie=0,Ge=Me.length;Ie<Ge;Ie++){const Ue=Me[Ie];Qt(ne,Se,M,Ue)}_&&_e.render(M);for(let Ie=0,Ge=Me.length;Ie<Ge;Ie++){const Ue=Me[Ie];cn(C,M,Ue,Ue.viewport)}}else Se.length>0&&Qt(ne,Se,M,N),_&&_e.render(M),cn(C,M,N)}B!==null&&J===0&&(m.updateMultisampleRenderTarget(B),m.updateRenderTargetMipmap(B)),U&&R.end(D),M.isScene===!0&&M.onAfterRender(D,M,N),q.resetDefaultState(),$=-1,Y=null,x.pop(),x.length>0?(A=x[x.length-1],m.setTextureUnits(A.state.textureUnits),At===!0&&he.setGlobalState(D.clippingPlanes,A.state.camera)):A=null,b.pop(),b.length>0?C=b[b.length-1]:C=null,k!==null&&k.renderEnd()};function Ht(M,N,V,U){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ye.intersectsSprite(M)){U&&ot.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Tt);const ne=ae.update(M),Se=M.material;Se.visible&&C.push(M,ne,Se,V,ot.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ye.intersectsObject(M))){const ne=ae.update(M),Se=M.material;if(U&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ot.copy(M.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),ot.copy(ne.boundingSphere.center)),ot.applyMatrix4(M.matrixWorld).applyMatrix4(Tt)),Array.isArray(Se)){const Me=ne.groups;for(let Ie=0,Ge=Me.length;Ie<Ge;Ie++){const Ue=Me[Ie],Z=Se[Ue.materialIndex];Z&&Z.visible&&C.push(M,ne,Z,V,ot.z,Ue)}}else Se.visible&&C.push(M,ne,Se,V,ot.z,null)}}const ie=M.children;for(let ne=0,Se=ie.length;ne<Se;ne++)Ht(ie[ne],N,V,U)}function cn(M,N,V,U){const{opaque:H,transmissive:ie,transparent:ne}=M;A.setupLightsView(V),At===!0&&he.setGlobalState(D.clippingPlanes,V),U&&re.viewport(j.copy(U)),H.length>0&&un(H,N,V),ie.length>0&&un(ie,N,V),ne.length>0&&un(ne,N,V),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Qt(M,N,V,U){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[U.id]===void 0){const Z=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[U.id]=new rr(1,1,{generateMipmaps:!0,type:Z?Ar:li,minFilter:Ts,samples:Math.max(4,ye.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace})}const ie=A.state.transmissionRenderTarget[U.id],ne=U.viewport||j;ie.setSize(ne.z*D.transmissionResolutionScale,ne.w*D.transmissionResolutionScale);const Se=D.getRenderTarget(),Me=D.getActiveCubeFace(),Ie=D.getActiveMipmapLevel();D.setRenderTarget(ie),D.getClearColor(Ee),Ce=D.getClearAlpha(),Ce<1&&D.setClearColor(16777215,.5),D.clear(),_&&_e.render(V);const Ge=D.toneMapping;D.toneMapping=ir;const Ue=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),A.setupLightsView(U),At===!0&&he.setGlobalState(D.clippingPlanes,U),un(M,V,U),m.updateMultisampleRenderTarget(ie),m.updateRenderTargetMipmap(ie),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Z=!1;for(let Pe=0,ze=N.length;Pe<ze;Pe++){const Ve=N[Pe],{object:Be,geometry:Ze,material:ve,group:dt}=Ve;if(ve.side===Qi&&Be.layers.test(U.layers)){const He=ve.side;ve.side=Jn,ve.needsUpdate=!0,Dt(Be,V,U,Ze,ve,dt),ve.side=He,ve.needsUpdate=!0,Z=!0}}Z===!0&&(m.updateMultisampleRenderTarget(ie),m.updateRenderTargetMipmap(ie))}D.setRenderTarget(Se,Me,Ie),D.setClearColor(Ee,Ce),Ue!==void 0&&(U.viewport=Ue),D.toneMapping=Ge}function un(M,N,V){const U=N.isScene===!0?N.overrideMaterial:null;for(let H=0,ie=M.length;H<ie;H++){const ne=M[H],{object:Se,geometry:Me,group:Ie}=ne;let Ge=ne.material;Ge.allowOverride===!0&&U!==null&&(Ge=U),Se.layers.test(V.layers)&&Dt(Se,N,V,Me,Ge,Ie)}}function Dt(M,N,V,U,H,ie){M.onBeforeRender(D,N,V,U,H,ie),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(D,N,V,U,M,ie),H.transparent===!0&&H.side===Qi&&H.forceSinglePass===!1?(H.side=Jn,H.needsUpdate=!0,D.renderBufferDirect(V,N,U,H,M,ie),H.side=ns,H.needsUpdate=!0,D.renderBufferDirect(V,N,U,H,M,ie),H.side=Qi):D.renderBufferDirect(V,N,U,H,M,ie),M.onAfterRender(D,N,V,U,H,ie)}function tn(M,N,V){N.isScene!==!0&&(N=Nt);const U=T.get(M),H=A.state.lights,ie=A.state.shadowsArray,ne=H.state.version,Se=me.getParameters(M,H.state,ie,N,V,A.state.lightProbeGridArray),Me=me.getProgramCacheKey(Se);let Ie=U.programs;U.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,U.fog=N.fog;const Ge=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;U.envMap=F.get(M.envMap||U.environment,Ge),U.envMapRotation=U.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",gt),Ie=new Map,U.programs=Ie);let Ue=Ie.get(Me);if(Ue!==void 0){if(U.currentProgram===Ue&&U.lightsStateVersion===ne)return vn(M,Se),Ue}else Se.uniforms=me.getUniforms(M),k!==null&&M.isNodeMaterial&&k.build(M,V,Se),M.onBeforeCompile(Se,D),Ue=me.acquireProgram(Se,Me),Ie.set(Me,Ue),U.uniforms=Se.uniforms;const Z=U.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Z.clippingPlanes=he.uniform),vn(M,Se),U.needsLights=ni(M),U.lightsStateVersion=ne,U.needsLights&&(Z.ambientLightColor.value=H.state.ambient,Z.lightProbe.value=H.state.probe,Z.directionalLights.value=H.state.directional,Z.directionalLightShadows.value=H.state.directionalShadow,Z.spotLights.value=H.state.spot,Z.spotLightShadows.value=H.state.spotShadow,Z.rectAreaLights.value=H.state.rectArea,Z.ltc_1.value=H.state.rectAreaLTC1,Z.ltc_2.value=H.state.rectAreaLTC2,Z.pointLights.value=H.state.point,Z.pointLightShadows.value=H.state.pointShadow,Z.hemisphereLights.value=H.state.hemi,Z.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Z.spotLightMatrix.value=H.state.spotLightMatrix,Z.spotLightMap.value=H.state.spotLightMap,Z.pointShadowMatrix.value=H.state.pointShadowMatrix),U.lightProbeGrid=A.state.lightProbeGridArray.length>0,U.currentProgram=Ue,U.uniformsList=null,Ue}function An(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=cc.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function vn(M,N){const V=T.get(M);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function ei(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;E.setFromMatrixPosition(N.matrixWorld);for(let V=0,U=M.length;V<U;V++){const H=M[V];if(H.texture!==null&&H.boundingBox.containsPoint(E))return H}return null}function nn(M,N,V,U,H){N.isScene!==!0&&(N=Nt),m.resetTextureUnits();const ie=N.fog,ne=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?N.environment:null,Se=B===null?D.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:St.workingColorSpace,Me=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Ie=F.get(U.envMap||ne,Me),Ge=U.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ue=!!V.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Z=!!V.morphAttributes.position,Pe=!!V.morphAttributes.normal,ze=!!V.morphAttributes.color;let Ve=ir;U.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const Be=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ze=Be!==void 0?Be.length:0,ve=T.get(U),dt=A.state.lights;if(At===!0&&(ct===!0||M!==Y)){const nt=M===Y&&U.id===$;he.setState(U,M,nt)}let He=!1;U.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==dt.state.version||ve.outputColorSpace!==Se||H.isBatchedMesh&&ve.batching===!1||!H.isBatchedMesh&&ve.batching===!0||H.isBatchedMesh&&ve.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ve.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ve.instancing===!1||!H.isInstancedMesh&&ve.instancing===!0||H.isSkinnedMesh&&ve.skinning===!1||!H.isSkinnedMesh&&ve.skinning===!0||H.isInstancedMesh&&ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ve.instancingMorph===!1&&H.morphTexture!==null||ve.envMap!==Ie||U.fog===!0&&ve.fog!==ie||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==he.numPlanes||ve.numIntersection!==he.numIntersection)||ve.vertexAlphas!==Ge||ve.vertexTangents!==Ue||ve.morphTargets!==Z||ve.morphNormals!==Pe||ve.morphColors!==ze||ve.toneMapping!==Ve||ve.morphTargetsCount!==Ze||!!ve.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(He=!0):(He=!0,ve.__version=U.version);let Lt=ve.currentProgram;He===!0&&(Lt=tn(U,N,H),k&&U.isNodeMaterial&&k.onUpdateProgram(U,Lt,ve));let lt=!1,rn=!1,On=!1;const We=Lt.getUniforms(),qe=ve.uniforms;if(re.useProgram(Lt.program)&&(lt=!0,rn=!0,On=!0),U.id!==$&&($=U.id,rn=!0),ve.needsLights){const nt=ei(A.state.lightProbeGridArray,H);ve.lightProbeGrid!==nt&&(ve.lightProbeGrid=nt,rn=!0)}if(lt||Y!==M){re.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),We.setValue(L,"projectionMatrix",M.projectionMatrix),We.setValue(L,"viewMatrix",M.matrixWorldInverse);const It=We.map.cameraPosition;It!==void 0&&It.setValue(L,Rt.setFromMatrixPosition(M.matrixWorld)),ye.logarithmicDepthBuffer&&We.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&We.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),Y!==M&&(Y=M,rn=!0,On=!0)}if(ve.needsLights&&(dt.state.directionalShadowMap.length>0&&We.setValue(L,"directionalShadowMap",dt.state.directionalShadowMap,m),dt.state.spotShadowMap.length>0&&We.setValue(L,"spotShadowMap",dt.state.spotShadowMap,m),dt.state.pointShadowMap.length>0&&We.setValue(L,"pointShadowMap",dt.state.pointShadowMap,m)),H.isSkinnedMesh){We.setOptional(L,H,"bindMatrix"),We.setOptional(L,H,"bindMatrixInverse");const nt=H.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),We.setValue(L,"boneTexture",nt.boneTexture,m))}H.isBatchedMesh&&(We.setOptional(L,H,"batchingTexture"),We.setValue(L,"batchingTexture",H._matricesTexture,m),We.setOptional(L,H,"batchingIdTexture"),We.setValue(L,"batchingIdTexture",H._indirectTexture,m),We.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&We.setValue(L,"batchingColorTexture",H._colorsTexture,m));const pt=V.morphAttributes;if((pt.position!==void 0||pt.normal!==void 0||pt.color!==void 0)&&Xe.update(H,V,Lt),(rn||ve.receiveShadow!==H.receiveShadow)&&(ve.receiveShadow=H.receiveShadow,We.setValue(L,"receiveShadow",H.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&N.environment!==null&&(qe.envMapIntensity.value=N.environmentIntensity),qe.dfgLUT!==void 0&&(qe.dfgLUT.value=bA()),rn){if(We.setValue(L,"toneMappingExposure",D.toneMappingExposure),ve.needsLights&&ti(qe,On),ie&&U.fog===!0&&P.refreshFogUniforms(qe,ie),P.refreshMaterialUniforms(qe,U,$e,at,A.state.transmissionRenderTarget[M.id]),ve.needsLights&&ve.lightProbeGrid){const nt=ve.lightProbeGrid;qe.probesSH.value=nt.texture,qe.probesMin.value.copy(nt.boundingBox.min),qe.probesMax.value.copy(nt.boundingBox.max),qe.probesResolution.value.copy(nt.resolution)}cc.upload(L,An(ve),qe,m)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(cc.upload(L,An(ve),qe,m),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&We.setValue(L,"center",H.center),We.setValue(L,"modelViewMatrix",H.modelViewMatrix),We.setValue(L,"normalMatrix",H.normalMatrix),We.setValue(L,"modelMatrix",H.matrixWorld),U.uniformsGroups!==void 0){const nt=U.uniformsGroups;for(let It=0,mt=nt.length;It<mt;It++){const _t=nt[It];K.update(_t,Lt),K.bind(_t,Lt)}}return Lt}function ti(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function ni(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,N,V){const U=T.get(M);U.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),T.get(M.texture).__webglTexture=N,T.get(M.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:V,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const V=T.get(M);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const ki=L.createFramebuffer();this.setRenderTarget=function(M,N=0,V=0){B=M,ee=N,J=V;let U=null,H=!1,ie=!1;if(M){const Se=T.get(M);if(Se.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(L.FRAMEBUFFER,Se.__webglFramebuffer),j.copy(M.viewport),te.copy(M.scissor),ce=M.scissorTest,re.viewport(j),re.scissor(te),re.setScissorTest(ce),$=-1;return}else if(Se.__webglFramebuffer===void 0)m.setupRenderTarget(M);else if(Se.__hasExternalTextures)m.rebindTextures(M,T.get(M.texture).__webglTexture,T.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ge=M.depthTexture;if(Se.__boundDepthTexture!==Ge){if(Ge!==null&&T.has(Ge)&&(M.width!==Ge.image.width||M.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");m.setupDepthRenderbuffer(M)}}const Me=M.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ie=!0);const Ie=T.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[N])?U=Ie[N][V]:U=Ie[N],H=!0):M.samples>0&&m.useMultisampledRTT(M)===!1?U=T.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[V]:U=Ie,j.copy(M.viewport),te.copy(M.scissor),ce=M.scissorTest}else j.copy(we).multiplyScalar($e).floor(),te.copy(je).multiplyScalar($e).floor(),ce=Je;if(V!==0&&(U=ki),re.bindFramebuffer(L.FRAMEBUFFER,U)&&re.drawBuffers(M,U),re.viewport(j),re.scissor(te),re.setScissorTest(ce),H){const Se=T.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Se.__webglTexture,V)}else if(ie){const Se=N;for(let Me=0;Me<M.textures.length;Me++){const Ie=T.get(M.textures[Me]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Me,Ie.__webglTexture,V,Se)}}else if(M!==null&&V!==0){const Se=T.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Se.__webglTexture,V)}$=-1},this.readRenderTargetPixels=function(M,N,V,U,H,ie,ne,Se=0){if(!(M&&M.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=T.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ne!==void 0&&(Me=Me[ne]),Me){re.bindFramebuffer(L.FRAMEBUFFER,Me);try{const Ie=M.textures[Se],Ge=Ie.format,Ue=Ie.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Se),!ye.textureFormatReadable(Ge)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Ue)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-U&&V>=0&&V<=M.height-H&&L.readPixels(N,V,U,H,O.convert(Ge),O.convert(Ue),ie)}finally{const Ie=B!==null?T.get(B).__webglFramebuffer:null;re.bindFramebuffer(L.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,N,V,U,H,ie,ne,Se=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=T.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ne!==void 0&&(Me=Me[ne]),Me)if(N>=0&&N<=M.width-U&&V>=0&&V<=M.height-H){re.bindFramebuffer(L.FRAMEBUFFER,Me);const Ie=M.textures[Se],Ge=Ie.format,Ue=Ie.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Se),!ye.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Z=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Z),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),L.readPixels(N,V,U,H,O.convert(Ge),O.convert(Ue),0);const Pe=B!==null?T.get(B).__webglFramebuffer:null;re.bindFramebuffer(L.FRAMEBUFFER,Pe);const ze=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await jy(L,ze,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Z),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie),L.deleteBuffer(Z),L.deleteSync(ze),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,V=0){const U=Math.pow(2,-V),H=Math.floor(M.image.width*U),ie=Math.floor(M.image.height*U),ne=N!==null?N.x:0,Se=N!==null?N.y:0;m.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,ne,Se,H,ie),re.unbindTexture()};const $a=L.createFramebuffer(),be=L.createFramebuffer();this.copyTextureToTexture=function(M,N,V=null,U=null,H=0,ie=0){let ne,Se,Me,Ie,Ge,Ue,Z,Pe,ze;const Ve=M.isCompressedTexture?M.mipmaps[ie]:M.image;if(V!==null)ne=V.max.x-V.min.x,Se=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,Ie=V.min.x,Ge=V.min.y,Ue=V.isBox3?V.min.z:0;else{const qe=Math.pow(2,-H);ne=Math.floor(Ve.width*qe),Se=Math.floor(Ve.height*qe),M.isDataArrayTexture?Me=Ve.depth:M.isData3DTexture?Me=Math.floor(Ve.depth*qe):Me=1,Ie=0,Ge=0,Ue=0}U!==null?(Z=U.x,Pe=U.y,ze=U.z):(Z=0,Pe=0,ze=0);const Be=O.convert(N.format),Ze=O.convert(N.type);let ve;N.isData3DTexture?(m.setTexture3D(N,0),ve=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(m.setTexture2DArray(N,0),ve=L.TEXTURE_2D_ARRAY):(m.setTexture2D(N,0),ve=L.TEXTURE_2D),re.activeTexture(L.TEXTURE0),re.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),re.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),re.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const dt=re.getParameter(L.UNPACK_ROW_LENGTH),He=re.getParameter(L.UNPACK_IMAGE_HEIGHT),Lt=re.getParameter(L.UNPACK_SKIP_PIXELS),lt=re.getParameter(L.UNPACK_SKIP_ROWS),rn=re.getParameter(L.UNPACK_SKIP_IMAGES);re.pixelStorei(L.UNPACK_ROW_LENGTH,Ve.width),re.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ve.height),re.pixelStorei(L.UNPACK_SKIP_PIXELS,Ie),re.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),re.pixelStorei(L.UNPACK_SKIP_IMAGES,Ue);const On=M.isDataArrayTexture||M.isData3DTexture,We=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const qe=T.get(M),pt=T.get(N),nt=T.get(qe.__renderTarget),It=T.get(pt.__renderTarget);re.bindFramebuffer(L.READ_FRAMEBUFFER,nt.__webglFramebuffer),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let mt=0;mt<Me;mt++)On&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,T.get(M).__webglTexture,H,Ue+mt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,T.get(N).__webglTexture,ie,ze+mt)),L.blitFramebuffer(Ie,Ge,ne,Se,Z,Pe,ne,Se,L.DEPTH_BUFFER_BIT,L.NEAREST);re.bindFramebuffer(L.READ_FRAMEBUFFER,null),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||T.has(M)){const qe=T.get(M),pt=T.get(N);re.bindFramebuffer(L.READ_FRAMEBUFFER,$a),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,be);for(let nt=0;nt<Me;nt++)On?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,qe.__webglTexture,H,Ue+nt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,qe.__webglTexture,H),We?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.__webglTexture,ie,ze+nt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pt.__webglTexture,ie),H!==0?L.blitFramebuffer(Ie,Ge,ne,Se,Z,Pe,ne,Se,L.COLOR_BUFFER_BIT,L.NEAREST):We?L.copyTexSubImage3D(ve,ie,Z,Pe,ze+nt,Ie,Ge,ne,Se):L.copyTexSubImage2D(ve,ie,Z,Pe,Ie,Ge,ne,Se);re.bindFramebuffer(L.READ_FRAMEBUFFER,null),re.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else We?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(ve,ie,Z,Pe,ze,ne,Se,Me,Be,Ze,Ve.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(ve,ie,Z,Pe,ze,ne,Se,Me,Be,Ve.data):L.texSubImage3D(ve,ie,Z,Pe,ze,ne,Se,Me,Be,Ze,Ve):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,Z,Pe,ne,Se,Be,Ze,Ve.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,Z,Pe,Ve.width,Ve.height,Be,Ve.data):L.texSubImage2D(L.TEXTURE_2D,ie,Z,Pe,ne,Se,Be,Ze,Ve);re.pixelStorei(L.UNPACK_ROW_LENGTH,dt),re.pixelStorei(L.UNPACK_IMAGE_HEIGHT,He),re.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),re.pixelStorei(L.UNPACK_SKIP_ROWS,lt),re.pixelStorei(L.UNPACK_SKIP_IMAGES,rn),ie===0&&N.generateMipmaps&&L.generateMipmap(ve),re.unbindTexture()},this.initRenderTarget=function(M){T.get(M).__webglFramebuffer===void 0&&m.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?m.setTextureCube(M,0):M.isData3DTexture?m.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?m.setTexture2DArray(M,0):m.setTexture2D(M,0),re.unbindTexture()},this.resetState=function(){ee=0,J=0,B=null,re.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=St._getDrawingBufferColorSpace(e),n.unpackColorSpace=St._getUnpackColorSpace()}}const ra=.85,Sf=1.4,F0=.35;function no(t){let e=(t+1)*2654435761>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967295)}function LA({lampsRef:t,trackedRef:e,lookaheadRef:n,baselineRef:i,agentsRef:r,pausedRef:s,spawnPed:o}){const a=K_(),l=it.useRef(null),[c,d]=it.useState(1),[p,f]=it.useState(1.4),[g,y]=it.useState(24),w=it.useRef(1),v=u=>{d(u),w.current=u};return it.useEffect(()=>{const u=l.current,h=u.clientWidth,S=u.clientHeight;function E(be){const M=75*Math.PI/180,N=2*Math.atan(Math.tan(M/2)/be)*180/Math.PI;return Math.max(72,Math.min(120,N))}const C={Shift:!1},A=be=>{be.key==="Shift"&&(C.Shift=!0,w.current=3,d(3))},b=be=>{be.key==="Shift"&&(C.Shift=!1,w.current=1,d(1))};window.addEventListener("keydown",A),window.addEventListener("keyup",b);const x=new lM;x.background=new ht(329744),x.fog=new hp(660520,.006);const R=new ai(E(h/S),h/S,.1,300);R.position.set(0,1.7,0),R.lookAt(0,1.7,-100);const D=new PA({antialias:!0});D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.setSize(h,S),D.shadowMap.enabled=!0,D.shadowMap.type=Z_,D.toneMapping=ip,D.toneMappingExposure=1,u.appendChild(D.domElement),x.add(new bM(1713472,657670,1.2)),x.add(new DM(658450,.3));const I=new et({color:921102,roughness:.95,metalness:0}),k=new le(new Sn(8,800),I);k.rotation.x=-Math.PI/2,k.position.set(0,0,-100),k.receiveShadow=!0,x.add(k);const ee=new et({color:1579030,roughness:.92}),J=new le(new Sn(4.5,800),ee);J.rotation.x=-Math.PI/2,J.position.set(-6.25,.005,-100),J.receiveShadow=!0,x.add(J);const B=new le(new Sn(4.5,800),ee);B.rotation.x=-Math.PI/2,B.position.set(6.25,.005,-100),B.receiveShadow=!0,x.add(B);const $=new et({color:2763304}),Y=new Qe(.14,.14,800),j=new le(Y,$);j.position.set(-4.06,.07,-100),x.add(j);const te=new le(Y,$);te.position.set(4.06,.07,-100),x.add(te);const ce=63,Ee=8,Ce=new si({color:15263976}),st=new Qe(.12,.01,3.2),at=[];for(let be=0;be<ce;be++){const M=new le(st,Ce);M.position.set(0,.01,-be*Ee+200),x.add(M),at.push(M)}const $e=new Fn,se=[],Re=no(777);for(let be=0;be<280;be++){const M=Re()*Math.PI*2,N=Re()*Math.PI*.48,V=180;se.push(V*Math.sin(N)*Math.cos(M),V*Math.cos(N)+30,V*Math.sin(N)*Math.sin(M))}$e.setAttribute("position",new ln(se,3));const we=new Sv({color:16777215,size:1.4,sizeAttenuation:!1,fog:!1});x.add(new xM($e,we));const je=23,Je=22,Ye=14,At=11,ct=-12.5,Tt=12.5,Rt=[],ot=[],Nt=[],_=new et({color:3022101,roughness:.92}),Q=new et({color:667154,roughness:.88}),L=new et({color:8947864,roughness:.6}),Te=new et({color:7829384,roughness:.6}),ue=new et({color:4473941,roughness:.5}),ye=new et({emissive:new ht(16772795),emissiveIntensity:3,color:1118481});function re(){const be=document.createElement("canvas");be.width=128,be.height=128;const M=be.getContext("2d"),N=M.createRadialGradient(64,64,0,64,64,64);return N.addColorStop(0,"rgba(255, 220, 100, 0.85)"),N.addColorStop(.25,"rgba(255, 200, 80,  0.45)"),N.addColorStop(.55,"rgba(250, 175, 55,  0.14)"),N.addColorStop(.8,"rgba(250, 155, 30,  0.04)"),N.addColorStop(1,"rgba(250, 140, 20,  0)"),M.fillStyle=N,M.fillRect(0,0,128,128),new SM(be)}const Le=re(),T=[12367790,11183516,10195849,5789268,3290427,9132610,4873550,10779733,2768458,6508359],m=[12064800,1723050,1734704,8930304,6953610,1599608],F=new et({color:11565136,roughness:.8}),G=new et({color:1708040,roughness:.9}),W=new et({color:2765381,roughness:.92}),ae=new et({color:1974320,roughness:.95}),me=new si({color:525316}),P=new et({color:7031856,roughness:.88});function z(be,M){const N=new le(new Ln(.138,7,5),G);N.scale.y=.58,N.position.set(0,M+.042,.01),be.add(N);const V=new Ln(.022,4,3),U=new le(V,me);U.position.set(-.046,M+.005,-.12),be.add(U);const H=new le(V,me);H.position.set(.046,M+.005,-.12),be.add(H);const ie=new le(new Qe(.018,.02,.03),F);ie.position.set(0,M-.018,-.128),be.add(ie)}function de(){const be=new Gt,M=new le(new Ln(.13,7,6),F);M.position.set(0,1.63,0),be.add(M),z(be,1.63);const N=new le(new Qe(.36,.5,.2),W);N.position.set(0,1.16,0),be.add(N);function V(Ue,Z,Pe,ze,Ve){const Be=new Gt;Be.position.set(Z,Ue,0);const Ze=new le(Pe,ze);return Ze.position.set(0,Ve,0),Be.add(Ze),Be}const U=new Qe(.14,.52,.16),H=V(.9,-.1,U,ae,-.26),ie=V(.9,.1,U,ae,-.26);be.add(H),be.add(ie);const ne=new Qe(.11,.26,.13),Se=new Qe(.09,.22,.11);function Me(Ue){const Z=new Gt;Z.position.set(Ue*.245,1.38,0);const Pe=new le(ne,W);Pe.position.set(0,-.13,0),Z.add(Pe);const ze=new le(Se,F);return ze.position.set(0,-.35,0),Z.add(ze),Z}const Ie=Me(-1),Ge=Me(1);return be.add(Ie),be.add(Ge),{group:be,limbs:{armL:Ie,armR:Ge,legL:H,legR:ie}}}const he=new et({color:16762220,roughness:.3,metalness:0,emissive:new ht(16747546),emissiveIntensity:1.5}),pe=new et({color:658448,roughness:.05,metalness:.9}),_e=new Sn(.8,1.2);function Xe(be,M){const N=no(M*73+(be==="left"?0:333)),V=no(M*131+(be==="left"?0:700)),U=new Gt,H=be==="left",ie=H?At/2:-At/2,ne=H?1:-1,Se=N();let Me="building";if(M>0&&M<je-1){const Z=no((M-1)*73+(be==="left"?0:333))();M-1>0&&Z<.3||(Se<.1?Me="park":Se<.22?Me="playground":Se<.3&&(Me="parking"))}if(Me==="building"){const Ue=6+N()*4,Z=Ue,Pe=Ye-Ue,ze=7+N()*16,Ve=6+N()*14,Be=T[Math.floor(N()*T.length)],Ze=T[Math.floor(N()*T.length)],ve=-Ye/2+Z/2,dt=Ye/2-Pe/2,He=(We,qe,pt,nt,It)=>{const mt=new et({color:pt,roughness:.88,metalness:.03}),_t=new Qe(At,We,qe),Ft=new le(_t,mt);Ft.castShadow=!0,Ft.receiveShadow=!0,Ft.position.set(0,We/2,nt),U.add(Ft);const zi=no(It),Bn=Math.max(2,Math.round(qe/2.8)),sn=Math.max(2,Math.round((We-3.5)/3)),br=qe/Bn*.52,wi=(We-3.5)/sn*.55,kn=H?Math.PI/2:-Math.PI/2;for(let jn=0;jn<Bn;jn++)for(let xn=0;xn<sn;xn++){const Gi=zi()<.18,mi=new le(new Sn(wi,br),Gi?he:pe);mi.rotation.y=kn;const zn=nt-qe/2+(jn+.5)*(qe/Bn),Vi=3.5+(xn+.5)*((We-3.5)/sn);mi.position.set(ie+ne*.06,Vi,zn),U.add(mi)}};He(ze,Z,Be,ve,M*17+(be==="left"?0:500)),He(Ve,Pe,Ze,dt,M*31+(be==="left"?100:600));const Lt=We=>{const qe=[2757126,921632,925712,1705992],pt=new et({color:qe[Math.floor(V()*qe.length)],roughness:.85}),nt=new le(new Qe(.08,2.3,1.1),pt);nt.position.set(ie+ne*.04,1.15,We),U.add(nt);const It=new et({color:3354664,roughness:.7}),mt=new le(new Qe(.06,2.45,1.3),It);mt.position.set(ie+ne*.03,1.225,We),U.add(mt);const _t=new et({color:13148208,roughness:.2,metalness:.95}),Ft=new le(new Ln(.055,7,5),_t);Ft.position.set(ie+ne*.1,1.05,We+.28),U.add(Ft)};Lt(ve),Lt(dt);const lt=V()<.4;if(lt){const We=new et({color:791840,roughness:.05,metalness:.6,transparent:!0,opacity:.55}),qe=Z*.6,pt=new le(new Qe(.07,2.5,qe),We);pt.position.set(ie+ne*.035,1.25,ve),U.add(pt)}if(V()<.38){const We=new et({color:m[Math.floor(V()*m.length)],roughness:.95,side:Qi}),qe=Pe*.65,pt=new le(new Qe(.07,1.1,qe),We);pt.rotation.z=ne*.38,pt.position.set(ie+ne*.65,3.05,dt),U.add(pt)}if(lt&&V()<.4){const We=new et({color:1708552,roughness:.85});for(let qe=0;qe<2;qe++){const pt=ve+(qe-.5)*3.2,nt=new le(new Qe(.65,.055,.65),We);nt.position.set(ie+ne*.45,.74,pt),U.add(nt);const It=new le(new Jt(.035,.035,.74,5),We);It.position.set(ie+ne*.45,.37,pt),U.add(It);for(const mt of[-.5,.5]){const _t=new le(new Qe(.38,.055,.38),We);_t.position.set(ie+ne*.45,.44,pt+mt),U.add(_t);const Ft=new le(new Qe(.38,.42,.055),We);Ft.position.set(ie+ne*.45,.66,pt+mt+(mt>0?.16:-.16)),U.add(Ft)}}}}else if(Me==="park"){const Ue=new et({color:1719326,roughness:.95}),Z=new Qe(30,.04,10),Pe=new le(Z,Ue);Pe.position.set(ne*-10,.02,0),Pe.receiveShadow=!0,U.add(Pe);const ze=new et({color:4011317,roughness:.88,metalness:.03}),Ve=new Qe(30,14,9.8),Be=new le(Ve,ze);Be.position.set(ne*-10,7,-9.9),Be.castShadow=!0,Be.receiveShadow=!0,U.add(Be);const Ze=new le(Ve,ze);Ze.position.set(ne*-10,7,9.9),Ze.castShadow=!0,Ze.receiveShadow=!0,U.add(Ze);for(const kn of[ne*-2,ne*-6])for(const jn of[3.2,7.2]){const xn=new le(_e,V()<.25?he:pe);xn.position.set(kn,jn,-4.99),U.add(xn)}for(const kn of[ne*-2,ne*-6])for(const jn of[3.2,7.2]){const xn=new le(_e,V()<.25?he:pe);xn.rotation.y=Math.PI,xn.position.set(kn,jn,4.99),U.add(xn)}const ve=new Gt,dt=new le(new Jt(.05,.08,1.6,5),_);dt.position.set(0,.8,0),dt.castShadow=!0,dt.receiveShadow=!0,ve.add(dt);const He=new le(new Ss(.65,1),Q);He.position.set(0,1.9,0),He.castShadow=!0,He.receiveShadow=!0,ve.add(He);const Lt=new le(new Ss(.5,1),Q);Lt.position.set(.04,2.35,0),Lt.castShadow=!0,Lt.receiveShadow=!0,ve.add(Lt),ve.position.set(ne*-2.5,0,2),U.add(ve);const lt=new Gt,rn=new et({color:6045747,roughness:.9}),On=new et({color:1710618,roughness:.6}),We=new le(new Qe(.6,.05,1.8),rn);We.position.set(0,.45,0),We.castShadow=!0,We.receiveShadow=!0,lt.add(We);const qe=new le(new Qe(.05,.4,1.8),rn);qe.position.set(ne*-.28,.7,0),qe.castShadow=!0,qe.receiveShadow=!0,lt.add(qe);const pt=new Qe(.06,.45,.6),nt=new le(pt,On);nt.position.set(0,.225,-.8),nt.castShadow=!0,lt.add(nt);const It=new le(pt,On);It.position.set(0,.225,.8),It.castShadow=!0,lt.add(It),lt.position.set(ne*2,0,-1.8),lt.rotation.y=H?-Math.PI/2:Math.PI/2,U.add(lt);const mt=new Gt,_t=new le(new Qe(.5,.08,.08),ue);_t.position.set(0,0,.25),mt.add(_t);const Ft=new le(new Qe(.3,.1,.3),ue);Ft.position.set(0,-.05,.45),mt.add(Ft);const zi=new si({color:16771743,transparent:!0,opacity:1}),Bn=new le(new Sn(.22,.22),zi);Bn.rotation.x=Math.PI/2,Bn.position.set(0,-.11,.45),mt.add(Bn);const sn=new Vl(16756800,15,12,2);sn.position.set(0,-.15,.45),mt.add(sn);const br=new si({map:Le,transparent:!0,opacity:.7,depthWrite:!1,blending:vs}),wi=new le(new Sn(9,9),br);wi.rotation.x=-Math.PI/2,wi.position.set(0,-4.38,.45),mt.add(wi),mt.position.set(ne*-2,4.4,-4.95),U.add(mt),Nt.push({point:sn,ledMesh:Bn,pool:wi,parentGroup:U,localZOffset:-4.5,maxIntensity:15,maxPoolOpacity:.7})}else if(Me==="playground"){const Ue=new et({color:2046755,roughness:.95}),Z=new Qe(30,.04,10),Pe=new le(Z,Ue);Pe.position.set(ne*-10,.02,0),Pe.receiveShadow=!0,U.add(Pe);const ze=new et({color:4011317,roughness:.88,metalness:.03}),Ve=new Qe(30,14,9.8),Be=new le(Ve,ze);Be.position.set(ne*-10,7,-9.9),Be.castShadow=!0,Be.receiveShadow=!0,U.add(Be);const Ze=new le(Ve,ze);Ze.position.set(ne*-10,7,9.9),Ze.castShadow=!0,Ze.receiveShadow=!0,U.add(Ze);for(const ar of[ne*-2,ne*-6])for(const lr of[3.2,7.2]){const Xi=new le(_e,V()<.25?he:pe);Xi.position.set(ar,lr,-4.99),U.add(Xi)}for(const ar of[ne*-2,ne*-6])for(const lr of[3.2,7.2]){const Xi=new le(_e,V()<.25?he:pe);Xi.rotation.y=Math.PI,Xi.position.set(ar,lr,4.99),U.add(Xi)}const ve=new et({color:13421772,roughness:.5,metalness:.7}),dt=new le(new Qe(.04,.08,9.8),ve);dt.position.set(ne*-4.8,.45,0),dt.castShadow=!0,U.add(dt);const He=new le(new Qe(.04,.08,9.8),ve);He.position.set(ne*-4.8,.95,0),He.castShadow=!0,U.add(He);const Lt=new Jt(.03,.03,1.2,6);for(let ar=-4.5;ar<=4.5;ar+=2.25){const lr=new le(Lt,ve);lr.position.set(ne*-4.8,.6,ar),lr.castShadow=!0,U.add(lr)}const lt=new Gt,rn=new et({color:9132587,roughness:.85}),On=new et({color:14537387,roughness:.95}),We=new le(new Qe(1.6,.1,1.6),On);We.position.set(0,.05,0),We.receiveShadow=!0,lt.add(We);const qe=.1,pt=.16,nt=1.8,It=new Qe(nt,pt,qe),mt=new le(It,rn);mt.position.set(0,pt/2,(nt-qe)/2),mt.castShadow=!0,mt.receiveShadow=!0,lt.add(mt);const _t=new le(It,rn);_t.position.set(0,pt/2,-1.7/2),_t.castShadow=!0,_t.receiveShadow=!0,lt.add(_t);const Ft=new Qe(qe,pt,nt-qe*2),zi=new le(Ft,rn);zi.position.set((nt-qe)/2,pt/2,0),zi.castShadow=!0,zi.receiveShadow=!0,lt.add(zi);const Bn=new le(Ft,rn);Bn.position.set(-1.7/2,pt/2,0),Bn.castShadow=!0,Bn.receiveShadow=!0,lt.add(Bn),lt.position.set(ne*-1.8,0,2),U.add(lt);const sn=new Gt,br=new et({color:6045747,roughness:.9}),wi=new et({color:1710618,roughness:.6}),kn=new le(new Qe(.6,.05,1.8),br);kn.position.set(0,.45,0),kn.castShadow=!0,kn.receiveShadow=!0,sn.add(kn);const jn=new le(new Qe(.05,.4,1.8),br);jn.position.set(ne*-.28,.7,0),jn.castShadow=!0,jn.receiveShadow=!0,sn.add(jn);const xn=new Qe(.06,.45,.6),Gi=new le(xn,wi);Gi.position.set(0,.225,-.8),Gi.castShadow=!0,sn.add(Gi);const mi=new le(xn,wi);mi.position.set(0,.225,.8),mi.castShadow=!0,sn.add(mi),sn.position.set(ne*2,0,-2),sn.rotation.y=H?-Math.PI/2:Math.PI/2,U.add(sn);const zn=new Gt,Vi=new et({color:2664261,roughness:.8}),as=new et({color:14431557,roughness:.7}),ls=new le(new Qe(.8,1,.8),Vi);ls.position.set(0,.5,0),ls.castShadow=!0,ls.receiveShadow=!0,zn.add(ls);const Hi=new et({color:13421772,roughness:.4,metalness:.8});for(let ar of[-.35,.35])for(let lr of[-.35,.35]){const Xi=new le(new Jt(.015,.015,.8,4),Hi);Xi.position.set(ar,1.4,lr),Xi.castShadow=!0,zn.add(Xi)}const cs=new le(new Gc(.65,.4,4),as);cs.rotation.y=Math.PI/4,cs.position.set(0,1.9,0),cs.castShadow=!0,zn.add(cs);const Pr=new le(new Qe(2,.06,.6),as);Pr.rotation.z=-ne*.4,Pr.position.set(ne*.85,.5,0),Pr.castShadow=!0,Pr.receiveShadow=!0,zn.add(Pr);const zo=new le(new Qe(.8,.3,.3),Vi);zo.position.set(0,.15,-.55),zo.castShadow=!0,zn.add(zo);const Go=new le(new Qe(.8,.6,.3),Vi);Go.position.set(0,.3,-.85),Go.castShadow=!0,zn.add(Go),zn.position.set(ne*-2.4,0,-2),U.add(zn);const Wi=new Gt,Fv=new et({color:16761095,roughness:.8}),qa=new le(new Jt(.025,.025,2,4),Hi);qa.rotation.z=.22,qa.position.set(-.2,.95,-.9),qa.castShadow=!0,Wi.add(qa);const Ka=new le(new Jt(.025,.025,2,4),Hi);Ka.rotation.z=-.22,Ka.position.set(.2,.95,-.9),Ka.castShadow=!0,Wi.add(Ka);const Za=new le(new Jt(.025,.025,2,4),Hi);Za.rotation.z=.22,Za.position.set(-.2,.95,.9),Za.castShadow=!0,Wi.add(Za);const Qa=new le(new Jt(.025,.025,2,4),Hi);Qa.rotation.z=-.22,Qa.position.set(.2,.95,.9),Qa.castShadow=!0,Wi.add(Qa);const lu=new le(new Qe(.06,.06,2),Fv);lu.position.set(0,1.9,0),lu.castShadow=!0,Wi.add(lu);const Ov=new et({color:14431557,roughness:.9}),Ja=new le(new Qe(.24,.02,.38),Ov);Ja.position.set(0,.45,0),Ja.castShadow=!0,Ja.receiveShadow=!0,Wi.add(Ja);const Ep=new le(new Jt(.005,.005,1.45,4),Hi);Ep.position.set(0,1.175,-.12),Wi.add(Ep);const wp=new le(new Jt(.005,.005,1.45,4),Hi);wp.position.set(0,1.175,.12),Wi.add(wp),Wi.position.set(ne*.5,0,0),U.add(Wi);const zs=new Gt,cu=new le(new Jt(.045,.055,3.2,6),new et({color:1548984,roughness:.6}));cu.position.set(0,1.6,0),cu.castShadow=!0,zs.add(cu);const uu=new le(new Ln(.18,8,8),new et({emissive:new ht(16773296),emissiveIntensity:3,color:2236962}));uu.position.set(0,3.2,0),zs.add(uu);const fu=new Vl(16771743,10,9,2);fu.position.set(0,3.2,0),zs.add(fu);const Bv=new si({map:Le,transparent:!0,opacity:.6,depthWrite:!1,blending:vs}),el=new le(new Sn(8,8),Bv);el.rotation.x=-Math.PI/2,el.position.set(0,.022,0),zs.add(el),zs.position.set(ne*-1.5,0,1.5),U.add(zs),Nt.push({point:fu,bulb:uu,pool:el,parentGroup:U,localZOffset:1.5,maxIntensity:10,maxPoolOpacity:.6})}else if(Me==="parking"){const Ue=new et({color:1118483,roughness:.92}),Z=new Qe(30,.02,10),Pe=new le(Z,Ue);Pe.position.set(ne*-10,.01,0),Pe.receiveShadow=!0,U.add(Pe);const ze=new et({color:4011317,roughness:.88,metalness:.03}),Ve=new Qe(30,14,9.8),Be=new le(Ve,ze);Be.position.set(ne*-10,7,-9.9),Be.castShadow=!0,Be.receiveShadow=!0,U.add(Be);const Ze=new le(Ve,ze);Ze.position.set(ne*-10,7,9.9),Ze.castShadow=!0,Ze.receiveShadow=!0,U.add(Ze);for(const mt of[ne*-2,ne*-6])for(const _t of[3.2,7.2]){const Ft=new le(_e,V()<.25?he:pe);Ft.position.set(mt,_t,-4.99),U.add(Ft)}for(const mt of[ne*-2,ne*-6])for(const _t of[3.2,7.2]){const Ft=new le(_e,V()<.25?he:pe);Ft.rotation.y=Math.PI,Ft.position.set(mt,_t,4.99),U.add(Ft)}const ve=new si({color:16777215,transparent:!0,opacity:.7}),dt=new Sn(6,.12),He=[-4.5,-1.5,1.5,4.5];for(const mt of He){const _t=new le(dt,ve);_t.rotation.x=-Math.PI/2,_t.position.set(0,.015,mt),U.add(_t)}const Lt=[-3,0,3];for(let mt=0;mt<Lt.length;mt++){if(V()<.2)continue;const _t=new Gt,Ft=[10230300,1720476,2236962,8028304,4880988,13935475],zi=Ft[Math.floor(V()*Ft.length)],Bn=new et({color:zi,roughness:.2,metalness:.8}),sn=new et({color:1118481,roughness:.9}),br=new et({color:1053206,roughness:.05,metalness:.9}),wi=new Qe(1.8,.6,3.8),kn=new le(wi,Bn);kn.position.set(0,.55,0),kn.castShadow=!0,kn.receiveShadow=!0,_t.add(kn);const jn=new Qe(1.6,.55,2.2),xn=new le(jn,br);xn.position.set(0,1.05,-.2),xn.castShadow=!0,_t.add(xn);const Gi=new Jt(.28,.28,.25,8),mi=new le(Gi,sn);mi.rotation.z=Math.PI/2,mi.position.set(-.9,.28,1),mi.castShadow=!0,_t.add(mi);const zn=new le(Gi,sn);zn.rotation.z=Math.PI/2,zn.position.set(.9,.28,1),zn.castShadow=!0,_t.add(zn);const Vi=new le(Gi,sn);Vi.rotation.z=Math.PI/2,Vi.position.set(-.9,.28,-1),Vi.castShadow=!0,_t.add(Vi);const as=new le(Gi,sn);as.rotation.z=Math.PI/2,as.position.set(.9,.28,-1),as.castShadow=!0,_t.add(as);const ls=new Ln(.08,6,6),Hi=new si({color:16773296}),cs=new le(ls,Hi);cs.position.set(-.6,.55,1.9),_t.add(cs);const Pr=new le(ls,Hi);Pr.position.set(.6,.55,1.9),_t.add(Pr);const zo=H?Math.PI/2:-Math.PI/2;_t.rotation.y=zo+(V()*.1-.05);const Go=V()*.6-.3;_t.position.set(ne*-1+Go,0,Lt[mt]),U.add(_t)}const lt=new Gt,rn=new le(new Qe(.5,.08,.08),ue);rn.position.set(0,0,.25),lt.add(rn);const On=new le(new Qe(.3,.1,.3),ue);On.position.set(0,-.05,.45),lt.add(On);const We=new si({color:16771743,transparent:!0,opacity:1}),qe=new le(new Sn(.22,.22),We);qe.rotation.x=Math.PI/2,qe.position.set(0,-.11,.45),lt.add(qe);const pt=new Vl(16756800,15,12,2);pt.position.set(0,-.15,.45),lt.add(pt);const nt=new si({map:Le,transparent:!0,opacity:.7,depthWrite:!1,blending:vs}),It=new le(new Sn(9,9),nt);It.rotation.x=-Math.PI/2,It.position.set(0,-4.38,.45),lt.add(It),lt.position.set(ne*-2,4.4,-4.95),U.add(lt),Nt.push({point:pt,ledMesh:qe,pool:It,parentGroup:U,localZOffset:-4.5,maxIntensity:15,maxPoolOpacity:.7})}let Ie=[];if(Me==="park"||Me==="playground"?Ie=[-5.5,-2.5,0,2.5,5.5]:Me==="parking"?Ie=[-5.5,5.5]:Ie=[-5.5,5.5],Ie.length>0){const Ue=new et({color:13684944,roughness:.9,metalness:.05}),Z=new Jt(.07,.07,.65,8),Pe=new Jt(.07,.07,.08,8),ze=new Ln(.07,8,6,0,Math.PI*2,0,Math.PI/2),Ve=ne*8.24;for(const Be of Ie){const Ze=new Gt,ve=new le(Z,Ue);ve.position.set(0,.325,0),ve.castShadow=!0,ve.receiveShadow=!0,Ze.add(ve);const dt=new le(Pe,Ue);dt.position.set(0,.68,0),dt.castShadow=!0,Ze.add(dt);const He=new le(ze,Ue);He.position.set(0,.72,0),He.castShadow=!0,Ze.add(He),Ze.position.set(Ve,.02,Be),U.add(Ze)}}const Ge=be==="left"?ct:Tt;return U.position.set(Ge,0,-M*Je-Ye/2+200),x.add(U),{group:U,index:M}}for(let be=0;be<je;be++)Rt.push(Xe("left",be)),ot.push(Xe("right",be));const Ke=1.1,Oe=[],O=no(4242),q=[-35,-145,-270],K=[1,-1,1];for(let be=0;be<3;be++){const M=new Gt,N=be===1,V=K[be]*5.2,{group:U,limbs:H}=de();M.add(U);let ie=null,ne=null;const Se=[];if(N){ie=new Gt;const Me=new le(new Ln(.16,8,6),P);Me.scale.set(1,.85,1.45),Me.position.set(0,.32,0),ie.add(Me);const Ie=new le(new Ln(.11,7,6),P);Ie.position.set(0,.44,.24),ie.add(Ie);const Ge=new le(new Ln(.065,6,4),P);Ge.scale.set(.9,.7,.9),Ge.position.set(0,.4,.33),ie.add(Ge);const Ue=new et({color:1707786,roughness:.6}),Z=new le(new Ln(.022,5,4),Ue);Z.position.set(0,.415,.365),ie.add(Z);for(const ve of[-.085,.085]){const dt=new le(new Ln(.055,6,4),P);dt.scale.set(.6,1.1,.55),dt.rotation.z=ve<0?.4:-.4,dt.position.set(ve,.52,.21),ie.add(dt)}const Pe=new le(new Jt(.012,.028,.2,5),P);Pe.rotation.x=-1.1,Pe.position.set(0,.42,-.23),ie.add(Pe);const ze=[[-.09,.14],[.09,.14],[-.09,-.14],[.09,-.14]];for(const[ve,dt]of ze){const He=new Gt;He.position.set(ve,.28,dt);const Lt=new le(new Jt(.022,.016,.24,5),P);Lt.position.set(0,-.12,0),He.add(Lt);const lt=new le(new Ln(.03,5,4),P);lt.scale.set(1.1,.6,1.3),lt.position.set(0,-.24,.01),He.add(lt),ie.add(He),Se.push(He)}ie.rotation.y=Math.PI,ie.position.set(K[be]*.5,0,-1.3),M.add(ie);const Ve=new Float32Array([K[be]*.2,.9,-.05,K[be]*.5,.4,-1.3]),Be=new Fn;ne=new Oi(Ve,3),Be.setAttribute("position",ne);const Ze=new vM(Be,new xv({color:4866112}));M.add(Ze)}M.position.set(V,0,q[be]),M.rotation.y=Math.PI,x.add(M),Oe.push({group:M,isDogWalker:N,walkerLimbs:H,stridePhase:O()*Math.PI*2,dogGroup:ie,dogLegs:Se,leashPosAttr:ne,dogSniffOffset:O()*Math.PI*2})}const Ae=320,ge=11,oe=48,Ne=[],ke=[];function gt(be,M){const N=be==="left",V=N?-5.3:5.3,U=new Gt,H=new le(new Jt(.07,.11,2,5),_);H.position.set(0,1,0),H.castShadow=!0,H.receiveShadow=!0,U.add(H);const ie=new le(new Ss(.85,1),Q);ie.position.set(0,2.3,0),ie.castShadow=!0,ie.receiveShadow=!0,U.add(ie);const ne=new le(new Ss(.72,1),Q);ne.position.set(N?.05:-.05,2.9,0),ne.castShadow=!0,ne.receiveShadow=!0,U.add(ne);const Se=new le(new Ss(.55,1),Q);Se.position.set(0,3.4,0),Se.castShadow=!0,Se.receiveShadow=!0,U.add(Se);const Me=be==="right"?oe/2:0;return U.position.set(V,0,-M*oe-Me-4+200),x.add(U),{group:U,index:M,side:be}}for(let be=0;be<ge;be++)Ne.push(gt("left",be)),ke.push(gt("right",be));const xt=46,Bt=11,ft=6,Ut=1.4,Zt=[],$t=[];function pi(be,M){const N=be==="left",V=N?-4.35:4.35,U=N?Ut:-Ut,H=V+U,ie=new Gt,ne=new le(new Jt(.045,.065,ft,6),L);ne.position.set(V,ft/2,0),ne.castShadow=!0,ie.add(ne);const Se=new le(new Qe(Math.abs(U),.06,.06),Te);Se.position.set(V+U/2,ft+.05,0),ie.add(Se);const Me=new le(new Gc(.22,.22,8),ue);Me.rotation.x=Math.PI,Me.position.set(H,ft-.1,0),ie.add(Me);const Ie=ye.clone(),Ge=new le(new Ln(.08,8,6),Ie);Ge.position.set(H,ft,0),ie.add(Ge);const Ue=new Vl(16765024,18,13,2);Ue.position.set(H,ft,0),Ue.castShadow=!0,Ue.shadow.mapSize.width=128,Ue.shadow.mapSize.height=128,ie.add(Ue);const Z=new si({map:Le,transparent:!0,opacity:.75,depthWrite:!1,blending:vs}),Pe=new le(new Sn(14,14),Z);Pe.rotation.x=-Math.PI/2,Pe.position.set(H*.3,.012,0),ie.add(Pe);const ze=new si({map:Le,transparent:!0,opacity:.28,depthWrite:!1,blending:vs}),Ve=new le(new Sn(26,26),ze);Ve.rotation.x=-Math.PI/2,Ve.position.set(H*.25,.011,0),ie.add(Ve);const Be=be==="right"?Bt/2:0;return ie.position.set(0,0,-M*Bt-Be-8+200),x.add(ie),{group:ie,point:Ue,bulb:Ge,pool:Pe,poolOuter:Ve,index:M,side:be}}for(let be=0;be<xt;be++)Zt.push(pi("left",be)),$t.push(pi("right",be));const Pt=document.createElement("div");Pt.style.cssText=`
      position:absolute;bottom:28px;left:0;right:0;text-align:center;
      color:rgba(255,255,255,0.45);font:12px/1 Inter,sans-serif;
      pointer-events:none;letter-spacing:0.04em;
    `,Pt.textContent="the corridor stays ahead — the citizen never notices",u.style.position="relative",u.appendChild(Pt);const Ht=new ResizeObserver(()=>{const be=u.clientWidth,M=u.clientHeight;R.aspect=be/M,R.fov=E(be/M),R.updateProjectionMatrix(),D.setSize(be,M)});Ht.observe(u);const cn=[...Zt,...$t],Qt=[...Rt,...ot],un=[...Ne,...ke],Dt=xt*Bt,tn=je*Je,An=ge*oe;let vn=0,ei=performance.now(),nn=1,ti=1,ni=1.4,ki=24;function $a(){vn=requestAnimationFrame($a);const be=performance.now(),M=Math.min((be-ei)/1e3,.05);ei=be,e.current||(e.current=r.current.find(Z=>Z.type==="ped")||o());const N=e.current;let V=w.current;if(C.Shift&&(V=3),nn+=(V-nn)*.08,N){const Z=N.vx===0?0:Math.sign(N.vx),Pe=N.vy===0?0:Math.sign(N.vy);N.vx=Z*Sf*nn,N.vy=Pe*Sf*nn}const ie=(N?Math.max(.1,Math.hypot(N.vx,N.vy)):Sf)/F0*F0,ne=((N==null?void 0:N.stride)??0)*(nn>1.2?1.4:1);s.current,R.position.y=1.7+Math.sin(ne)*.04,R.position.x=Math.sin(ne*.5)*.012,ti+=(nn-ti)*.012;const Me=Math.max(10,n.current*8)*ti,Ie=10,Ge=i.current*ra;Math.abs(ie-ni)>.05&&(f(ie),ni=ie),Math.abs(Me-ki)>.5&&(y(Me),ki=Me);function Ue(Z){if(Z<=0){const Ve=Math.abs(Z);if(Ve<=12)return ra;const Be=Ve-12,Ze=Math.min(1,Be/10);return ra*(1-Ze)+Ge*Ze}if(Z<=Me)return ra;const Pe=Z-Me,ze=Math.min(1,Pe/Ie);return ra*(1-ze)+Ge*ze}for(const Z of cn){s.current||(Z.group.position.z+=ie*M),Z.group.position.z>240&&(Z.group.position.z-=Dt);const Pe=-Z.group.position.z,ze=Ue(Pe);Z.point.intensity=ze*16,Z.bulb.material.emissiveIntensity=ze*4.5,Z.pool.material.opacity=ze*.7,Z.poolOuter.material.opacity=ze*.25,Z.point.castShadow=Pe<14&&Pe>-2}for(const Z of Qt)s.current||(Z.group.position.z+=ie*M),Z.group.position.z>240&&(Z.group.position.z-=tn);for(const Z of Nt){const ze=-(Z.parentGroup.position.z+Z.localZOffset),Ve=Ue(ze);Z.point.intensity=Ve*Z.maxIntensity,Z.bulb&&(Z.bulb.material.emissiveIntensity=Ve*4.5),Z.ledMesh&&(Z.ledMesh.material.opacity=.3+Ve*.7),Z.pool.material.opacity=Ve*Z.maxPoolOpacity}for(const Z of un)s.current||(Z.group.position.z+=ie*M),Z.group.position.z>240&&(Z.group.position.z-=An);for(const Z of Oe){if(s.current||(Z.group.position.z+=(ie+Ke)*M,Z.stridePhase+=Ke/.75*M,Z.dogSniffOffset+=2.1*M),Z.group.position.z>6&&(Z.group.position.z-=Ae),Z.group.position.y=Math.sin(Z.stridePhase*Math.PI*2)*.022,Z.walkerLimbs){const Pe=Z.stridePhase*Math.PI*2,ze=.52,Ve=.38;Z.walkerLimbs.legL.rotation.x=Math.sin(Pe)*ze,Z.walkerLimbs.legR.rotation.x=-Math.sin(Pe)*ze,Z.walkerLimbs.armL.rotation.x=-Math.sin(Pe)*Ve,Z.walkerLimbs.armR.rotation.x=Math.sin(Pe)*Ve}if(Z.dogGroup&&Z.leashPosAttr){const Pe=Math.sin(Z.dogSniffOffset*1.3)*.12,ze=Math.abs(Math.sin(Z.dogSniffOffset*1.8))*.06;if(Z.dogGroup.position.z=-1.3+Pe,Z.dogGroup.position.y=ze,Z.dogLegs.length===4){const Be=Z.stridePhase*Math.PI*2,Ze=.45;Z.dogLegs[0].rotation.x=Math.sin(Be)*Ze,Z.dogLegs[1].rotation.x=-Math.sin(Be)*Ze,Z.dogLegs[2].rotation.x=-Math.sin(Be)*Ze,Z.dogLegs[3].rotation.x=Math.sin(Be)*Ze}const Ve=Z.group.position.x<0?-1:1;Z.leashPosAttr.setXYZ(1,Ve*.5,.4+ze,-1.3+Pe),Z.leashPosAttr.needsUpdate=!0}}for(const Z of at)s.current||(Z.position.z+=ie*M),Z.position.z>240&&(Z.position.z-=ce*Ee);D.render(x,R)}return $a(),()=>{cancelAnimationFrame(vn),Ht.disconnect(),D.dispose(),window.removeEventListener("keydown",A),window.removeEventListener("keyup",b),u.contains(D.domElement)&&u.removeChild(D.domElement),u.contains(Pt)&&u.removeChild(Pt)}},[]),fe.jsxs("div",{style:{position:"absolute",inset:0,width:"100%",height:"100%"},children:[fe.jsx("div",{ref:l,style:{position:"absolute",inset:0,width:"100%",height:"100%"}}),fe.jsxs("div",{className:"fpv-overlay",children:[fe.jsxs("div",{className:"fpv-card",children:[fe.jsx("div",{className:"fpv-card-title",children:"🏃 Citizen Dashboard"}),fe.jsxs("div",{className:"fpv-stat-row",children:[fe.jsx("span",{className:"fpv-stat-label",children:"Velocity"}),fe.jsxs("span",{className:"fpv-stat-value",children:[p.toFixed(1)," m/s (",Math.round(p*3.6)," km/h)"]})]}),fe.jsxs("div",{className:"fpv-stat-row",children:[fe.jsx("span",{className:"fpv-stat-label",children:"Lookahead Corridor"}),fe.jsxs("span",{className:"fpv-stat-value",children:[g.toFixed(0)," meters"]})]}),fe.jsxs("div",{className:"fpv-stat-row",children:[fe.jsx("span",{className:"fpv-stat-label",children:"Light Frequency"}),fe.jsx("span",{className:"fpv-stat-value",style:{color:c>1.5?"#f59e0b":"#3b82f6"},children:c>1.5?"⚡ HIGH (Running Mode)":"🚶 NORMAL (Walking Mode)"})]}),fe.jsxs("div",{className:"fpv-stat-row",style:{fontSize:"11px",color:"rgba(255,255,255,0.4)",marginTop:4},children:[fe.jsx("span",{children:"* Warning Constant"}),fe.jsx("span",{style:{color:"#f59e0b"},children:"17.1 seconds"})]})]}),fe.jsxs("div",{className:"fpv-card",style:a?void 0:{minWidth:"300px"},children:[fe.jsx("div",{className:"fpv-card-title",children:"⚙️ Citizen Controls"}),fe.jsxs("div",{className:"fpv-button-group",children:[fe.jsx("button",{className:`fpv-btn ${c===1?"active":""}`,onClick:()=>v(1),children:"🚶 Walk (1.0x)"}),fe.jsx("button",{className:`fpv-btn ${c===2?"active":""}`,onClick:()=>v(2),children:"🏃 Jog (2.0x)"}),fe.jsx("button",{className:`fpv-btn ${c===3?"active":""}`,onClick:()=>v(3),children:"⚡ Sprint (3.0x)"})]}),!a&&fe.jsxs("div",{style:{fontSize:"10px",color:"rgba(255,255,255,0.4)",textAlign:"center",marginTop:4},children:["Pro Tip: Hold ",fe.jsx("b",{children:"SHIFT"})," to sprint on keyboard!"]})]})]})]})}const yf=80,DA=.15,IA=.13,NA=4100,UA=1.4,FA=11,Xl=.35,OA=180,BA=300,kA=260,zA=200,bi=.85,Nv=1,Uv=2,O0=["#3a6fb5","#a83232","#2c8a4a","#5a4a8a","#c47a1a"];function _s(t){let e=(t+1)*2654435761>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967295)}function GA(t,e){const n=[],r=[[0,.18*t-18],[.18*t+18,.5*t-18],[.5*t+18,.82*t-18],[.82*t+18,t]],s=[[0,.2*e-18],[.2*e+18,.5*e-18],[.5*e+18,.8*e-18],[.8*e+18,e]],o=["residential","commercial","office"];for(let a=0;a<4;a++)for(let l=0;l<4;l++){if(a===Nv&&l===Uv)continue;const c=o[(a+l)%3],[d,p]=r[a],[f,g]=s[l],y=p-d,w=g-f;if(y<12||w<12)continue;const v=_s(a*41+l*13+7),u=2+Math.floor(v()*2),h=2+Math.floor(v()*2);for(let S=0;S<u;S++)for(let E=0;E<h;E++){if(v()<.18)continue;const C=y/u,A=w/h,b=3,x=C-b*2,R=A-b*2;x>4&&R>4&&n.push({x:d+S*C+b,y:f+E*A+b,w:x,h:R,btype:c})}}return n}function VA({mode:t}){const e=it.useRef(null),n=it.useRef(null),i=K_(),r=it.useRef([]),s=it.useRef([]),o=it.useRef([]),a=it.useRef(null),l=it.useRef({W:0,H:0}),c=it.useRef(t);c.current=t;const[d,p]=it.useState(.3),[f,g]=it.useState(4),[y,w]=it.useState("manual"),[v,u]=it.useState(!1),[h,S]=it.useState("ped"),E=it.useRef("ped"),[C,A]=it.useState(!1),[b,x]=it.useState(!1),[R,D]=it.useState({powerNow:0,powerPct:0,kwhSaved:0,eurSaved:0,co2Saved:0,peds:0,cars:0,lampCount:0,fullPower:0}),I=it.useRef([]),k=it.useRef(0),ee=it.useRef(null);it.useEffect(()=>{const _=ee.current;if(!_)return;const Q=_.getContext("2d");if(!Q)return;const L=_.width,Te=_.height,ue=I.current;if(Q.clearRect(0,0,L,Te),ue.length<2)return;const ye=Math.max(...ue.map(m=>m.full),1),re=m=>Te-m/ye*Te*.88-Te*.06,Le=m=>m/(ue.length-1)*L;Q.strokeStyle="rgba(255,255,255,0.18)",Q.lineWidth=1,Q.setLineDash([3,4]),Q.beginPath(),ue.forEach((m,F)=>{F===0?Q.moveTo(Le(F),re(m.full)):Q.lineTo(Le(F),re(m.full))}),Q.stroke(),Q.setLineDash([]);const T=Q.createLinearGradient(0,0,0,Te);T.addColorStop(0,"rgba(250,199,117,0.28)"),T.addColorStop(1,"rgba(250,199,117,0.02)"),Q.beginPath(),ue.forEach((m,F)=>{F===0?Q.moveTo(Le(F),re(m.lumi)):Q.lineTo(Le(F),re(m.lumi))}),Q.lineTo(Le(ue.length-1),Te),Q.lineTo(0,Te),Q.closePath(),Q.fillStyle=T,Q.fill(),Q.strokeStyle="#FAC775",Q.lineWidth=1.5,Q.beginPath(),ue.forEach((m,F)=>{F===0?Q.moveTo(Le(F),re(m.lumi)):Q.lineTo(Le(F),re(m.lumi))}),Q.stroke()},[R]);const J=it.useRef(d);J.current=d;const B=it.useRef(f);B.current=f;const $=it.useRef(y);$.current=y;const Y=it.useRef(v);Y.current=v;const j=it.useRef(0),te=it.useRef(0),ce=it.useRef([]),Ee=it.useRef([]),Ce=it.useRef(null);function st(_,Q){const L=[],Te=[],ue=[.18,.5,.82];[.2,.5,.8].forEach(P=>{Te.push({ax:0,ay:P*Q,bx:_,by:P*Q,dir:"h"})}),ue.forEach(P=>{Te.push({ax:P*_,ay:0,bx:P*_,by:Q,dir:"v"})});const re=Math.min(_,Q)*.11;Te.forEach((P,z)=>{if(P.dir==="h")for(let de=re*.5;de<_;de+=re)L.push({x:de,y:P.ay-20,brightness:J.current,target:J.current,streetId:z,side:"top"}),L.push({x:de,y:P.ay+20,brightness:J.current,target:J.current,streetId:z,side:"bot"});else for(let de=re*.5;de<Q;de+=re)L.push({x:P.ax-20,y:de,brightness:J.current,target:J.current,streetId:z,side:"lft"}),L.push({x:P.ax+20,y:de,brightness:J.current,target:J.current,streetId:z,side:"rgt"})}),r.current=L,s.current=Te,ce.current=GA(_,Q);const Le=18,T=[[0,.18*_-Le],[.18*_+Le,.5*_-Le],[.5*_+Le,.82*_-Le],[.82*_+Le,_]],m=[[0,.2*Q-Le],[.2*Q+Le,.5*Q-Le],[.5*Q+Le,.8*Q-Le],[.8*Q+Le,Q]],[F,G]=T[Nv],[W,ae]=m[Uv];Ce.current={x:F,y:W,w:G-F,h:ae-W};const me=[];Te.forEach((P,z)=>{const de=_s(z*137+42);if(P.dir==="h")for(let he=re;he<_;he+=re)de()<.28&&me.push({x:he,y:P.ay-20}),de()<.2&&me.push({x:he,y:P.ay+20});else for(let he=re;he<Q;he+=re)de()<.24&&me.push({x:P.ax-20,y:he}),de()<.18&&me.push({x:P.ax+20,y:he})}),Ee.current=me}function at(_,Q){const{W:L,H:Te}=l.current;let ue=null,ye=1/0;for(const re of s.current){let Le,T;re.dir==="h"?(Le=Math.max(0,Math.min(L,_)),T=re.ay):(Le=re.ax,T=Math.max(0,Math.min(Te,Q)));const m=Math.hypot(_-Le,Q-T);m<ye&&(ye=m,ue={s:re,qx:Le,qy:T})}return ye<50?ue:null}function $e(_,Q,L){const Te=at(_,Q);if(!Te)return null;const{s:ue,qx:ye,qy:re}=Te,Le=L==="car"?FA:UA,T=Math.random()<.5?-1:1,m={x:ye,y:re,vx:ue.dir==="h"?T*Le:0,vy:ue.dir==="v"?T*Le:0,type:L,street:ue,t:0,stride:Math.random()*Math.PI*2,color:L==="car"?O0[Math.floor(Math.random()*O0.length)]:null};return o.current.push(m),m}function se(_){const{W:Q,H:L}=l.current,Te=s.current,ue=Te[Math.floor(Math.random()*Te.length)];if(ue.dir==="h"){const ye=Math.random()<.5;$e(ye?2:Q-2,ue.ay,_)}else{const ye=Math.random()<.5;$e(ue.ax,ye?2:L-2,_)}}function Re(_){const Q=o.current,{W:L,H:Te}=l.current;for(const m of Q)m.x+=m.vx*_/Xl,m.y+=m.vy*_/Xl,m.t+=_,m.stride+=_*(m.type==="car"?0:8);o.current=Q.filter(m=>m.x>-30&&m.x<L+30&&m.y>-30&&m.y<Te+30),a.current&&!o.current.includes(a.current)&&(a.current=o.current.find(m=>m.type==="ped")||null);for(const m of o.current)for(const F of s.current){if(F===m.street)continue;let G=!1;if(F.dir==="h"&&m.street.dir==="v"?Math.abs(m.y-F.ay)<4&&(G=!0):F.dir==="v"&&m.street.dir==="h"&&Math.abs(m.x-F.ax)<4&&(G=!0),G&&Math.random()<.012){const W=Math.hypot(m.vx,m.vy),ae=Math.random()<.5?-1:1;F.dir==="h"?(m.vx=ae*W,m.vy=0):(m.vx=0,m.vy=ae*W),m.street=F}}const ue=Math.min(1,l.current.W/960);for(const m of r.current)m.target=J.current;for(const m of o.current){const F=m.type==="car",G=F?BA:OA,W=(F?zA:kA)*ue,ae=Math.max(.1,Math.hypot(m.vx,m.vy)),me=m.vx/ae,P=m.vy/ae,z=ae*B.current/Xl;m.x+me*z,m.y+P*z;const de=s.current.indexOf(m.street);for(const he of r.current){if(!(he.streetId===de)){const Xe=Math.hypot(he.x-m.x,he.y-m.y);if(Xe<50){const Ke=1-Xe/50;he.target=Math.max(he.target,Ke)}continue}const _e=(he.x-m.x)*me+(he.y-m.y)*P;_e>=-W&&_e<=z+G&&(he.target=1)}}for(const m of r.current){const G=m.target>m.brightness?3.2:1.2,W=1-Math.exp(-_*G);m.brightness+=(m.target-m.brightness)*W,Math.abs(m.target-m.brightness)<.01&&(m.brightness=m.target)}const re=r.current.length*yf;let Le=0;for(const m of r.current)Le+=yf*m.brightness;const T=re-Le;return j.current+=T*_/36e5,{luminationPower:Le,fullPower:re}}function we(_,Q,L,Te,ue,ye){_.moveTo(Q+ye,L),_.arcTo(Q+Te,L,Q+Te,L+ue,ye),_.arcTo(Q+Te,L+ue,Q,L+ue,ye),_.arcTo(Q,L+ue,Q,L,ye),_.arcTo(Q,L,Q+Te,L,ye)}function je(_,Q,L){const Te=Math.sin(Q.stride)*2.5,ue=Math.cos(Q.stride)*1.8,ye=`rgba(240,200,160,${.6+.4*L})`,re=`rgba(200,210,230,${.55+.45*L})`;_.strokeStyle=re,_.lineWidth=1.4,_.beginPath(),_.moveTo(Q.x-3-Te*.4,Q.y),_.lineTo(Q.x+3+Te*.4,Q.y),_.stroke(),_.lineWidth=1.2,_.strokeStyle=`rgba(170,180,200,${.5+.5*L})`,_.beginPath(),_.moveTo(Q.x,Q.y+1),_.lineTo(Q.x+ue*.5,Q.y+4),_.moveTo(Q.x,Q.y+1),_.lineTo(Q.x-ue*.5,Q.y+4),_.stroke(),_.fillStyle=re,_.beginPath(),_.ellipse(Q.x,Q.y,2.4,2.8,0,0,Math.PI*2),_.fill(),_.fillStyle=ye,_.beginPath(),_.arc(Q.x,Q.y-1.5,1.8,0,Math.PI*2),_.fill()}function Je(_,Q,L){const Te=Math.atan2(Q.vy,Q.vx);_.save(),_.translate(Q.x,Q.y),_.rotate(Te);const ue=16,ye=8;_.fillStyle="rgba(0,0,0,0.45)",_.beginPath(),we(_,-ue/2+1,-ye/2+1.5,ue,ye,2),_.fill(),_.fillStyle=Q.color||"#888",_.beginPath(),we(_,-ue/2,-ye/2,ue,ye,2.2),_.fill(),_.fillStyle="rgba(255,255,255,0.18)",_.beginPath(),we(_,-ue/2+3,-ye/2+1.5,ue-8,ye-3,1.5),_.fill(),_.fillStyle=`rgba(180,210,240,${.35+.4*L})`,_.beginPath(),_.moveTo(ue/2-5,-ye/2+1.5),_.lineTo(ue/2-2.5,-ye/2+1.5),_.lineTo(ue/2-2.5,ye/2-1.5),_.lineTo(ue/2-5,ye/2-1.5),_.closePath(),_.fill();const re=_.createRadialGradient(ue/2+2,0,0,ue/2+2,0,28);re.addColorStop(0,`rgba(255,240,200,${.55*(.7+.3*L)})`),re.addColorStop(1,"rgba(255,240,200,0)"),_.fillStyle=re,_.beginPath(),_.moveTo(ue/2,-ye/2+1),_.lineTo(ue/2+28,-ye*1.2),_.lineTo(ue/2+28,ye*1.2),_.lineTo(ue/2,ye/2-1),_.closePath(),_.fill(),_.fillStyle="rgba(255,250,220,0.9)",_.beginPath(),_.arc(ue/2-.5,-ye/2+1.8,.9,0,Math.PI*2),_.fill(),_.beginPath(),_.arc(ue/2-.5,ye/2-1.8,.9,0,Math.PI*2),_.fill(),_.fillStyle="rgba(220,40,40,0.8)",_.beginPath(),_.arc(-ue/2+.5,-ye/2+1.8,.7,0,Math.PI*2),_.fill(),_.beginPath(),_.arc(-ue/2+.5,ye/2-1.8,.7,0,Math.PI*2),_.fill(),_.restore()}function Ye(_,Q){const{W:L,H:Te}=l.current,ue=Math.min(L,Te)*.14;let ye=0;for(const re of r.current){const Le=Math.hypot(re.x-_,re.y-Q);Le<ue&&(ye+=re.brightness*(1-Le/ue)*.4)}return Math.min(1,ye+.1)}function At(_,Q){const{W:L,H:Te}=l.current;_.fillStyle="#08080e",_.fillRect(0,0,L,Te);const ue=Ce.current;if(ue){const P=_.createLinearGradient(ue.x,ue.y,ue.x+ue.w,ue.y+ue.h);P.addColorStop(0,"#0a1e0c"),P.addColorStop(1,"#091508"),_.fillStyle=P,_.fillRect(ue.x,ue.y,ue.w,ue.h)}for(const P of ce.current)_.fillStyle="rgba(0, 0, 0, 0.62)",_.fillRect(P.x+4,P.y+4,P.w,P.h);for(const P of ce.current){const z=_.createLinearGradient(P.x,P.y,P.x+P.w,P.y+P.h);P.btype==="residential"?(z.addColorStop(0,"#1e1316"),z.addColorStop(1,"#281c22")):P.btype==="commercial"?(z.addColorStop(0,"#10152a"),z.addColorStop(1,"#171f38")):(z.addColorStop(0,"#111a18"),z.addColorStop(1,"#172420")),_.fillStyle=z,_.fillRect(P.x,P.y,P.w,P.h),_.fillStyle="rgba(255, 255, 255, 0.08)",_.fillRect(P.x,P.y,P.w,1.5),_.fillRect(P.x,P.y,1.5,P.h),_.fillStyle="rgba(0, 0, 0, 0.38)",_.fillRect(P.x+P.w-1.5,P.y,1.5,P.h),_.fillRect(P.x,P.y+P.h-1.5,P.w,1.5);const de=_s(P.x*13+P.y*31),he=2,pe=5,_e=Math.floor((P.w-6)/pe),Xe=Math.floor((P.h-6)/pe);if(_e>0&&Xe>0)for(let Ke=0;Ke<_e;Ke++)for(let Oe=0;Oe<Xe;Oe++)de()<.13&&(_.fillStyle="rgba(250, 199, 117, 0.25)",_.fillRect(P.x+4+Ke*pe,P.y+4+Oe*pe,he,he))}_.strokeStyle="#131420",_.lineWidth=44;for(const P of s.current)_.beginPath(),_.moveTo(P.ax,P.ay),_.lineTo(P.bx,P.by),_.stroke();_.strokeStyle="#0d0e17",_.lineWidth=30;for(const P of s.current)_.beginPath(),_.moveTo(P.ax,P.ay),_.lineTo(P.bx,P.by),_.stroke();_.strokeStyle="#111222",_.lineWidth=10;for(const P of s.current)_.beginPath(),_.moveTo(P.ax,P.ay),_.lineTo(P.bx,P.by),_.stroke();_.strokeStyle="#32324e",_.lineWidth=.8,_.setLineDash([6,8]);for(const P of s.current)_.beginPath(),_.moveTo(P.ax,P.ay),_.lineTo(P.bx,P.by),_.stroke();_.setLineDash([]);const ye=[.18,.5,.82],re=[.2,.5,.8];_.fillStyle="rgba(200, 205, 240, 0.14)",ye.forEach(P=>{re.forEach(z=>{const de=P*L,he=z*Te;for(let pe=0;pe<4;pe++)_.fillRect(de-34-pe*5,he-13,3,26),_.fillRect(de+28+pe*5,he-13,3,26),_.fillRect(de-13,he-34-pe*5,26,3),_.fillRect(de-13,he+28+pe*5,26,3)})});{const P=.5*L,z=.5*Te;_.strokeStyle="#1e2030",_.lineWidth=10,_.beginPath(),_.arc(P,z,19,0,Math.PI*2),_.stroke();const de=_.createRadialGradient(P,z,0,P,z,13);de.addColorStop(0,"#142a1a"),de.addColorStop(1,"#0a1510"),_.fillStyle=de,_.beginPath(),_.arc(P,z,13,0,Math.PI*2),_.fill(),_.fillStyle="rgba(15, 58, 20, 0.97)",_.beginPath(),_.arc(P,z,6,0,Math.PI*2),_.fill(),_.fillStyle="rgba(30, 95, 38, 0.65)",_.beginPath(),_.arc(P-1,z-1,3,0,Math.PI*2),_.fill()}for(const P of Ee.current)_.fillStyle="rgba(0, 0, 0, 0.42)",_.beginPath(),_.arc(P.x+2,P.y+2,8,0,Math.PI*2),_.fill(),_.fillStyle="rgba(8, 42, 11, 0.97)",_.beginPath(),_.arc(P.x,P.y,8,0,Math.PI*2),_.fill(),_.fillStyle="rgba(15, 65, 20, 0.88)",_.beginPath(),_.arc(P.x-1,P.y-1,5.5,0,Math.PI*2),_.fill(),_.fillStyle="rgba(26, 95, 34, 0.52)",_.beginPath(),_.arc(P.x-2,P.y-2,3,0,Math.PI*2),_.fill();_.lineWidth=1;const Le=new Map;r.current.forEach(P=>{const z=`${P.streetId}-${P.side}`;Le.has(z)||Le.set(z,[]),Le.get(z).push(P)}),Le.forEach(P=>{P.sort((z,de)=>z.x+z.y-(de.x+de.y));for(let z=0;z<P.length-1;z++){const de=Q?bi:Math.min(bi,(P[z].brightness+P[z+1].brightness)/2);_.strokeStyle=`rgba(250, 199, 117, ${.02+de*.08})`,_.beginPath(),_.moveTo(P[z].x,P[z].y),_.lineTo(P[z+1].x,P[z+1].y),_.stroke()}});const T=L*.5,m=Te*.5,F=40,G=r.current.filter(P=>Math.hypot(P.x-T,P.y-m)<F),W=G.length>0?Q?bi:Math.min(bi,G.reduce((P,z)=>P+z.brightness,0)/G.length):J.current,ae=Math.min(L,Te)/580;for(const P of r.current){if(Math.hypot(P.x-T,P.y-m)<F)continue;const z=Q?bi:Math.min(bi,P.brightness),de=(14+z*110)*ae,he=_.createRadialGradient(P.x,P.y,0,P.x,P.y,de);he.addColorStop(0,`rgba(255, 224, 155, ${.62*z})`),he.addColorStop(.15,`rgba(252, 208, 128, ${.4*z})`),he.addColorStop(.4,`rgba(250, 199, 117, ${.16*z})`),he.addColorStop(.7,`rgba(250, 199, 117, ${.05*z})`),he.addColorStop(1,"rgba(250, 199, 117, 0)"),_.fillStyle=he,_.beginPath(),_.arc(P.x,P.y,de,0,Math.PI*2),_.fill(),_.fillStyle=`rgba(255, 230, 170, ${.5+.5*z})`,_.beginPath(),_.arc(P.x,P.y,2.4,0,Math.PI*2),_.fill(),_.fillStyle="#22222a",_.beginPath(),_.arc(P.x,P.y,1,0,Math.PI*2),_.fill()}{const P=(14+W*110)*ae,z=_.createRadialGradient(T,m,0,T,m,P);z.addColorStop(0,`rgba(255, 224, 155, ${.62*W})`),z.addColorStop(.15,`rgba(252, 208, 128, ${.4*W})`),z.addColorStop(.4,`rgba(250, 199, 117, ${.16*W})`),z.addColorStop(.7,`rgba(250, 199, 117, ${.05*W})`),z.addColorStop(1,"rgba(250, 199, 117, 0)"),_.fillStyle=z,_.beginPath(),_.arc(T,m,P,0,Math.PI*2),_.fill(),_.fillStyle=`rgba(255, 230, 170, ${.5+.5*W})`,_.beginPath(),_.arc(T,m,2.4,0,Math.PI*2),_.fill(),_.fillStyle="#22222a",_.beginPath(),_.arc(T,m,1,0,Math.PI*2),_.fill()}for(const P of o.current){const z=Q?bi:Math.min(bi,Ye(P.x,P.y));P.type==="car"?Je(_,P,z):je(_,P,z)}const me=_.createRadialGradient(L/2,Te/2,L*.28,L/2,Te/2,L*.78);me.addColorStop(0,"rgba(0,0,0,0)"),me.addColorStop(1,"rgba(0,0,0,0.48)"),_.fillStyle=me,_.fillRect(0,0,L,Te)}function ct(_){const{W:Q,H:L}=l.current;if(!a.current&&(a.current=o.current.find(q=>q.type==="ped")||$e(Q*.5,L*.5,"ped"),!a.current))return;const Te=a.current,ue=Math.max(.1,Math.hypot(Te.vx,Te.vy)),ye=_.createLinearGradient(0,0,0,L*.45);ye.addColorStop(0,"#020205"),ye.addColorStop(1,"#0b0914"),_.fillStyle=ye,_.fillRect(0,0,Q,L);const re=_s(777);_.fillStyle="#ffffff";for(let q=0;q<40;q++){const K=re()*Q,Ae=re()*(L*.45-20),ge=.5+re()*1;_.globalAlpha=.15+re()*.7,_.fillRect(K,Ae,ge,ge)}_.globalAlpha=1;const Le=L*.45,T=Q/2,m=Math.sin(Te.stride*1)*3,F=.5,G=(q,K)=>{const Ae=1/K;return T+q*Ae*Q},W=(q,K)=>{const Ae=1/K;return Le-(q-F)*Ae*L+m},ae=60;_.fillStyle="#101018",_.beginPath(),_.moveTo(G(-.4,ae),W(0,ae)),_.lineTo(G(.4,ae),W(0,ae)),_.lineTo(G(.4,.3),W(0,.3)),_.lineTo(G(-.4,.3),W(0,.3)),_.closePath(),_.fill(),_.fillStyle="#151520",_.beginPath(),_.moveTo(G(-.65,ae),W(0,ae)),_.lineTo(G(-.4,ae),W(0,ae)),_.lineTo(G(-.4,.3),W(0,.3)),_.lineTo(G(-.65,.3),W(0,.3)),_.closePath(),_.fill(),_.fillStyle="#151520",_.beginPath(),_.moveTo(G(.4,ae),W(0,ae)),_.lineTo(G(.65,ae),W(0,ae)),_.lineTo(G(.65,.3),W(0,.3)),_.lineTo(G(.4,.3),W(0,.3)),_.closePath(),_.fill(),_.strokeStyle="#222232",_.lineWidth=1.5,_.beginPath(),_.moveTo(G(-.4,10),W(0,10)),_.lineTo(G(-.4,.3),W(0,.3)),_.moveTo(G(.4,10),W(0,10)),_.lineTo(G(.4,.3),W(0,.3)),_.stroke();const P=1.5/(Math.min(Q,L)*.11*1.2),z=Te.t*(ue/Xl)*P;_.strokeStyle="rgba(255, 255, 255, 0.03)",_.lineWidth=1;const de=(10-z%.5)%.5;for(let q=de;q<ae;q+=.5)q<.3||(_.beginPath(),_.moveTo(G(-.65,q),W(0,q)),_.lineTo(G(-.4,q),W(0,q)),_.stroke(),_.beginPath(),_.moveTo(G(.4,q),W(0,q)),_.lineTo(G(.65,q),W(0,q)),_.stroke());_.fillStyle="rgba(255, 255, 255, 0.22)";const he=(10-z%1)%1;for(let q=he;q<ae;q+=1)q<.3||(_.beginPath(),_.moveTo(G(-.012,q+.3),W(0,q+.3)),_.lineTo(G(.012,q+.3),W(0,q+.3)),_.lineTo(G(.012,q),W(0,q)),_.lineTo(G(-.012,q),W(0,q)),_.closePath(),_.fill());const pe=[],_e=Math.floor(z/1.5)-1;for(let q=0;q<40;q++){const K=_e+q,ge=K*1.5-z;ge>=.3&&ge<=60&&pe.push({type:"building",z:ge,bldIndex:K})}const Xe=1.6,Ke=Math.floor(z/Xe)-1;for(let q=0;q<30;q++){const K=Ke+q,ge=K*Xe-z;if(ge>=.3&&ge<=45){const oe=K%2===0?"left":"right";pe.push({type:"lamp",z:ge,lamp:r.current[0],relativeSide:oe})}}pe.sort((q,K)=>Math.abs(q.z-K.z)<.01?q.type==="lamp"?1:-1:K.z-q.z);const Oe=(q,K,Ae)=>({x:q.x+(K.x-q.x)*Ae,y:q.y+(K.y-q.y)*Ae});pe.forEach(q=>{if(q.type==="building"){const K=q.bldIndex||0,ge=3.5+_s(K*59+7)()*2.5,oe=q.z,Ne=q.z+1.5;{const Bt=ge,ft={x:G(-.45,oe),y:W(Bt,oe)},Ut={x:G(-.45,oe),y:W(0,oe)},Zt={x:G(-.45,Ne),y:W(Bt,Ne)},$t={x:G(-.45,Ne),y:W(0,Ne)},pi={x:G(-2.2,oe),y:W(Bt,oe)},Pt={x:G(-2.2,oe),y:W(0,oe)};_.fillStyle="#09080f",_.beginPath(),_.moveTo(ft.x,ft.y),_.lineTo(Zt.x,Zt.y),_.lineTo($t.x,$t.y),_.lineTo(Ut.x,Ut.y),_.closePath(),_.fill(),_.strokeStyle="rgba(255,255,255,0.02)",_.lineWidth=.5,_.stroke();const Ht=3,cn=5;for(let Qt=0;Qt<Ht;Qt++)for(let un=0;un<cn;un++){const Dt=(Qt+.25)/Ht,tn=(un+.22)/cn,An=.5/Ht,vn=.55/cn,ei=Oe(Oe(Ut,$t,Dt),Oe(ft,Zt,Dt),tn),nn=Oe(Oe(Ut,$t,Dt),Oe(ft,Zt,Dt),tn+vn),ti=Oe(Oe(Ut,$t,Dt+An),Oe(ft,Zt,Dt+An),tn+vn),ni=Oe(Oe(Ut,$t,Dt+An),Oe(ft,Zt,Dt+An),tn),ki=_s(K*47+Qt*13+un*19);_.fillStyle=ki()<.15?"rgba(250, 199, 117, 0.52)":"rgba(8, 8, 14, 0.8)",_.beginPath(),_.moveTo(ei.x,ei.y),_.lineTo(nn.x,nn.y),_.lineTo(ti.x,ti.y),_.lineTo(ni.x,ni.y),_.closePath(),_.fill()}_.fillStyle="#050508",_.beginPath(),_.moveTo(pi.x,pi.y),_.lineTo(ft.x,ft.y),_.lineTo(Ut.x,Ut.y),_.lineTo(Pt.x,Pt.y),_.closePath(),_.fill()}{const Bt=ge,ft={x:G(.45,oe),y:W(Bt,oe)},Ut={x:G(.45,oe),y:W(0,oe)},Zt={x:G(.45,Ne),y:W(Bt,Ne)},$t={x:G(.45,Ne),y:W(0,Ne)},pi={x:G(2.2,oe),y:W(Bt,oe)},Pt={x:G(2.2,oe),y:W(0,oe)};_.fillStyle="#09080f",_.beginPath(),_.moveTo(ft.x,ft.y),_.lineTo(Zt.x,Zt.y),_.lineTo($t.x,$t.y),_.lineTo(Ut.x,Ut.y),_.closePath(),_.fill(),_.strokeStyle="rgba(255,255,255,0.02)",_.lineWidth=.5,_.stroke();const Ht=3,cn=5;for(let Qt=0;Qt<Ht;Qt++)for(let un=0;un<cn;un++){const Dt=(Qt+.25)/Ht,tn=(un+.22)/cn,An=.5/Ht,vn=.55/cn,ei=Oe(Oe(Ut,$t,Dt),Oe(ft,Zt,Dt),tn),nn=Oe(Oe(Ut,$t,Dt),Oe(ft,Zt,Dt),tn+vn),ti=Oe(Oe(Ut,$t,Dt+An),Oe(ft,Zt,Dt+An),tn+vn),ni=Oe(Oe(Ut,$t,Dt+An),Oe(ft,Zt,Dt+An),tn),ki=_s(K*47+Qt*13+un*19+11);_.fillStyle=ki()<.15?"rgba(250, 199, 117, 0.52)":"rgba(8, 8, 14, 0.8)",_.beginPath(),_.moveTo(ei.x,ei.y),_.lineTo(nn.x,nn.y),_.lineTo(ti.x,ti.y),_.lineTo(ni.x,ni.y),_.closePath(),_.fill()}_.fillStyle="#050508",_.beginPath(),_.moveTo(ft.x,ft.y),_.lineTo(pi.x,pi.y),_.lineTo(Pt.x,Pt.y),_.lineTo(Ut.x,Ut.y),_.closePath(),_.fill()}}else if(q.type==="lamp"){const K=1/q.z,Ae=q.relativeSide;q.lamp;const ge=B.current*1.6,oe=Math.max(1.5,ge),Ne=1.2;let ke=bi;if(q.z>oe){const ti=q.z-oe,ni=Math.max(0,Math.min(1,ti/Ne)),ki=J.current*bi;ke=bi*(1-ni)+ki*ni}const gt=Math.max(.08,Math.min(1,4.5/q.z)),xt=Ae==="left",Bt=xt?-.38:.38,ft=G(Bt,q.z),Ut=W(0,q.z),Zt=1.8,$t=W(Zt,q.z);_.strokeStyle=`rgba(140, 140, 160, ${.6+.4*K})`,_.lineWidth=Math.max(2,4*K),_.beginPath(),_.moveTo(ft,Ut),_.lineTo(ft,$t),_.stroke();const Pt=G(Bt+(xt?.1:-.1),q.z),Ht=W(Zt+.04,q.z);_.beginPath(),_.moveTo(ft,$t),_.lineTo(Pt,Ht),_.stroke();const cn=G(Bt*.3,q.z),Qt=W(0,q.z),un=.22*K*Q,Dt=_.createLinearGradient(Pt,Ht,cn,Qt);Dt.addColorStop(0,`rgba(255, 235, 190, ${.45*ke*gt})`),Dt.addColorStop(.5,`rgba(250, 215, 150, ${.22*ke*gt})`),Dt.addColorStop(1,`rgba(250, 199, 117, ${.1*ke*gt})`),_.fillStyle=Dt,_.beginPath(),_.moveTo(Pt-2*K,Ht),_.lineTo(Pt+2*K,Ht),_.lineTo(cn+un,Qt),_.lineTo(cn-un,Qt),_.closePath(),_.fill();const tn=(.1+.36*ke)*K*Q,An=tn*.35,vn=_.createRadialGradient(cn,Qt,0,cn,Qt,tn);vn.addColorStop(0,`rgba(255, 224, 155, ${.7*ke*gt})`),vn.addColorStop(.3,`rgba(250, 199, 117, ${.4*ke*gt})`),vn.addColorStop(.7,`rgba(250, 199, 117, ${.12*ke*gt})`),vn.addColorStop(1,"rgba(250, 199, 117, 0)"),_.fillStyle=vn,_.beginPath(),_.ellipse(cn,Qt,tn,An,0,0,Math.PI*2),_.fill();const ei=(8+ke*32)*K,nn=_.createRadialGradient(Pt,Ht,0,Pt,Ht,ei);nn.addColorStop(0,`rgba(255, 240, 200, ${.95*ke*gt})`),nn.addColorStop(.2,`rgba(255, 224, 155, ${.55*ke*gt})`),nn.addColorStop(.5,`rgba(250, 199, 117, ${.18*ke*gt})`),nn.addColorStop(1,"rgba(250, 199, 117, 0)"),_.fillStyle=nn,_.beginPath(),_.arc(Pt,Ht,ei,0,Math.PI*2),_.fill(),_.fillStyle=`rgba(255, 250, 235, ${.7+.3*ke*gt})`,_.beginPath(),_.arc(Pt,Ht,Math.max(1.5,2.5*K),0,Math.PI*2),_.fill()}});const O=_.createRadialGradient(Q/2,L/2,Q*.35,Q/2,L/2,Q*.85);O.addColorStop(0,"rgba(0,0,0,0)"),O.addColorStop(1,"rgba(0,0,0,0.35)"),_.fillStyle=O,_.fillRect(0,0,Q,L),_.fillStyle="rgba(255,255,255,0.45)",_.font="12px sans-serif",_.textAlign="center",_.fillText("the corridor stays ahead — the citizen never notices",Q/2,L-24)}function Tt(_){const{W:Q,H:L}=l.current,Te=c.current;Te==="compare"?(_.save(),_.beginPath(),_.rect(0,0,Q/2,L),_.clip(),At(_,!0),_.restore(),_.save(),_.beginPath(),_.rect(Q/2,0,Q/2,L),_.clip(),At(_,!1),_.restore(),_.strokeStyle="rgba(255,255,255,0.18)",_.lineWidth=1,_.beginPath(),_.moveTo(Q/2,0),_.lineTo(Q/2,L),_.stroke()):Te==="fpv"?ct(_):At(_,Te==="baseline")}function Rt(_){$.current!=="manual"&&(te.current-=_,!(te.current>0)&&($.current==="quiet"?(te.current=4+Math.random()*5,se(Math.random()<.85?"ped":"car")):$.current==="busy"?(te.current=.4+Math.random()*.6,se(Math.random()<.55?"car":"ped")):$.current==="mixed"&&(te.current=1.2+Math.random()*1.5,se(Math.random()<.5?"car":"ped"))))}it.useEffect(()=>{const _=e.current,Q=n.current;if(!_||!Q)return;const L=_.getContext("2d"),Te=window.devicePixelRatio||1,ue=()=>{const F=Q.getBoundingClientRect(),G=F.width,W=F.height,{W:ae,H:me}=l.current;l.current={W:G,H:W},_.width=G*Te,_.height=W*Te,L.setTransform(Te,0,0,Te,0,0),(G!==ae||Math.abs(W-me)>20)&&st(G,W)};ue();const ye=new ResizeObserver(ue);ye.observe(Q);let re=performance.now(),Le=0,T=0;const m=F=>{Le=requestAnimationFrame(m);const G=Math.min(.1,(F-re)/1e3);if(re=F,Y.current)return;Rt(G);const W=Re(G);if(Tt(L),T+=G,T>.1){T=0;const ae=r.current.length,me=ae*yf,P=me>0?Math.round(W.luminationPower/me*100):0,de=(me-W.luminationPower)/1e3*NA;D({powerNow:Math.round(W.luminationPower),powerPct:P,kwhSaved:j.current,eurSaved:Math.round(de*DA),co2Saved:Math.round(de*IA),peds:o.current.filter(he=>he.type==="ped").length,cars:o.current.filter(he=>he.type==="car").length,lampCount:ae,fullPower:me})}if(k.current+=G,k.current>=.5){k.current=0;const ae=I.current;ae.push({lumi:W.luminationPower,full:W.fullPower}),ae.length>120&&ae.shift()}};return Le=requestAnimationFrame(m),()=>{cancelAnimationFrame(Le),ye.disconnect()}},[]);const ot=_=>{const Q=e.current.getBoundingClientRect(),L=_.clientX-Q.left,Te=_.clientY-Q.top,ue=_.shiftKey||E.current==="car",ye=$e(L,Te,ue?"car":"ped");ye&&ye.type==="ped"&&!a.current&&(a.current=ye)},Nt=_=>{_.preventDefault();const Q=_.changedTouches[0];if(!Q)return;const L=e.current.getBoundingClientRect(),Te=Q.clientX-L.left,ue=Q.clientY-L.top,ye=$e(Te,ue,E.current);ye&&ye.type==="ped"&&!a.current&&(a.current=ye)};return fe.jsxs("div",{className:"main",children:[fe.jsxs("div",{className:"stage",ref:n,children:[fe.jsx("canvas",{ref:e,onClick:ot,onTouchEnd:Nt,style:{display:t==="fpv"?"none":void 0,touchAction:"none"}}),t==="fpv"&&fe.jsx(LA,{lampsRef:r,trackedRef:a,lookaheadRef:B,baselineRef:J,agentsRef:o,pausedRef:Y,spawnPed:()=>{se("ped");const _=o.current;return _[_.length-1]??null}}),t==="compare"&&fe.jsxs("div",{className:"stage-label-row",children:[fe.jsx("span",{children:"Always-on"}),fe.jsx("span",{children:"LumiNation"})]}),t!=="fpv"&&fe.jsx("div",{className:"stage-hint",children:i?fe.jsxs(fe.Fragment,{children:[fe.jsx("button",{className:`spawn-toggle ${h==="ped"?"active":""}`,onTouchEnd:_=>{_.stopPropagation(),E.current="ped",S("ped")},onClick:()=>{E.current="ped",S("ped")},children:"🚶 Ped"}),fe.jsx("button",{className:`spawn-toggle ${h==="car"?"active":""}`,onTouchEnd:_=>{_.stopPropagation(),E.current="car",S("car")},onClick:()=>{E.current="car",S("car")},children:"🚗 Car"}),fe.jsx("span",{className:"spawn-hint-text",children:"tap a street to add"})]}):"click a street to add a pedestrian · shift+click for a car"})]}),fe.jsxs("aside",{className:"sidebar",children:[(()=>{const _=C?7e4/Math.max(R.lampCount,1):1,Q=R.powerNow*_,L=R.fullPower*_,Te=R.eurSaved*_,ue=R.co2Saved*_,ye=R.kwhSaved*_,re=m=>m>=1e6?(m/1e6).toFixed(2)+" MW":m>=1e3?(m/1e3).toFixed(1)+" kW":Math.round(m)+" W",Le=m=>m>=1e6?"€"+(m/1e6).toFixed(1)+"M":m>=1e3?"€"+(m/1e3).toFixed(0)+"k":"€"+Math.round(m).toLocaleString(),T=m=>m>=1e3?(m/1e3).toFixed(1)+" t CO₂/yr":Math.round(m).toLocaleString()+" kg CO₂/yr";return fe.jsxs(fe.Fragment,{children:[C&&fe.jsxs("div",{style:{background:"#FAC77522",border:"1px solid #FAC77566",borderRadius:8,padding:"6px 10px",marginBottom:6,fontSize:12,color:"#FAC775",display:"flex",alignItems:"center",gap:6},children:[fe.jsx("span",{style:{fontSize:15},children:"🏙"}),fe.jsxs("span",{children:[fe.jsx("strong",{children:"Lisbon scale"})," · 70,000 lamps"]})]}),fe.jsxs("div",{className:"card",children:[fe.jsx("div",{className:"card-label",children:"Power now"}),fe.jsxs("div",{className:"metric-row",children:[fe.jsx("span",{className:"metric-value",children:re(Q)}),fe.jsxs("span",{className:"metric-aux",children:[R.powerPct,"% of always-on",C?` (always-on = ${re(L)})`:""]})]})]}),fe.jsxs("div",{className:"card",children:[fe.jsx("div",{className:"card-label",children:"Agents"}),fe.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginTop:4},children:[fe.jsx("span",{children:"Pedestrians"}),fe.jsx("span",{style:{fontWeight:500},children:R.peds})]}),fe.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginTop:4},children:[fe.jsx("span",{children:"Vehicles"}),fe.jsx("span",{style:{fontWeight:500},children:R.cars})]})]}),fe.jsxs("div",{className:"card chart-card",style:{paddingBottom:4},children:[fe.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[fe.jsx("div",{className:"card-label",style:{marginBottom:0},children:"Power · last 60s"}),fe.jsxs("div",{style:{fontSize:10,color:"var(--text-muted)",display:"flex",gap:8},children:[fe.jsx("span",{style:{color:"#FAC775"},children:"— LumiNation"}),fe.jsx("span",{style:{color:"rgba(255,255,255,0.35)"},children:"- - Always-on"})]})]}),fe.jsx("canvas",{ref:ee,width:220,height:64,style:{width:"100%",height:64,marginTop:6,borderRadius:4}})]}),fe.jsxs("div",{className:"card",children:[fe.jsx("div",{className:"card-label",children:"Energy saved (session)"}),fe.jsxs("div",{className:"metric-row",children:[fe.jsx("span",{className:"metric-value",children:ye.toFixed(C?1:3)}),fe.jsx("span",{className:"metric-unit",children:"kWh"})]})]}),fe.jsxs("div",{className:"card",children:[fe.jsx("div",{className:"card-label",children:"Projected annual savings"}),fe.jsxs("div",{className:"metric-row",children:[fe.jsx("span",{className:"metric-value",children:Le(Te)}),fe.jsx("span",{className:"metric-aux",children:T(ue)})]})]})]})})(),fe.jsxs("div",{className:"card controls",children:[fe.jsxs("button",{className:"controls-toggle",onClick:()=>x(_=>!_),"aria-expanded":b,children:[fe.jsx("span",{className:"card-label",style:{marginBottom:0},children:"Controls"}),fe.jsx("span",{className:"controls-toggle-arrow",children:b?"▲":"▼"})]}),fe.jsxs("div",{className:`controls-body${b||!i?" controls-body--open":""}`,children:[fe.jsx("div",{className:"card-label",style:{marginBottom:6},children:"Scenario"}),fe.jsxs("select",{value:y,onChange:_=>w(_.target.value),children:[fe.jsx("option",{value:"manual",children:"Manual (click to add)"}),fe.jsx("option",{value:"quiet",children:"Quiet residential · 3am"}),fe.jsx("option",{value:"busy",children:"Busy avenue · 8pm"}),fe.jsx("option",{value:"mixed",children:"Mixed traffic · 11pm"})]}),fe.jsxs("div",{className:"row",children:[fe.jsx("span",{children:"Baseline brightness"}),fe.jsxs("span",{children:[Math.round(d*100),"%"]})]}),fe.jsx("input",{type:"range",min:15,max:100,step:1,value:Math.round(d*100),onChange:_=>p(parseInt(_.target.value,10)/100)}),fe.jsxs("div",{className:"row",children:[fe.jsx("span",{children:"Lookahead"}),fe.jsxs("span",{children:[f.toFixed(1),"s"]})]}),fe.jsx("input",{type:"range",min:20,max:80,step:1,value:Math.round(f*10),onChange:_=>g(parseInt(_.target.value,10)/10)}),fe.jsxs("div",{className:"button-row",children:[fe.jsx("button",{onClick:()=>{o.current=[],a.current=null,j.current=0,I.current=[]},children:"Clear"}),fe.jsx("button",{onClick:()=>u(_=>!_),children:v?"Resume":"Pause"})]}),fe.jsxs("button",{onClick:()=>A(_=>!_),style:{marginTop:8,width:"100%",padding:"7px 0",background:C?"#FAC775":"transparent",color:C?"#0a0a12":"#FAC775",border:"1px solid #FAC775",borderRadius:8,fontSize:12,fontWeight:600,cursor:"pointer",transition:"all 0.2s"},children:["🏙 ",C?"Lisbon scale ON · 70k lamps":"Lisbon scale (70,000 lamps)"]})]})]})]})]})}function HA(){const[t,e]=it.useState("lumination");return fe.jsxs("div",{className:"app",children:[fe.jsxs("header",{className:"topbar",children:[fe.jsxs("div",{className:"brand",children:[fe.jsx("div",{className:"brand-mark",children:"L"}),fe.jsxs("div",{children:[fe.jsx("div",{className:"brand-name",children:"LumiNation"}),fe.jsx("div",{className:"brand-tag",children:"The adaptive light corridor · live simulator"})]})]}),fe.jsxs("div",{className:"mode-bar",children:[fe.jsx("button",{className:t==="lumination"?"active":"",onClick:()=>e("lumination"),children:"LumiNation"}),fe.jsx("button",{className:t==="baseline"?"active":"",onClick:()=>e("baseline"),children:"Always-on"}),fe.jsx("button",{className:t==="compare"?"active":"",onClick:()=>e("compare"),children:"Compare"}),fe.jsx("button",{className:t==="fpv"?"active":"",onClick:()=>e("fpv"),children:"Citizen view"})]})]}),fe.jsx(VA,{mode:t}),fe.jsxs("footer",{className:"footer",children:[fe.jsx("span",{children:"LumiNation · Red Bull Basement Portugal 2026 · Instituto Superior Técnico"}),fe.jsx("span",{children:"v0.1 · early prototype"})]})]})}Mf.createRoot(document.getElementById("root")).render(fe.jsx(tx.StrictMode,{children:fe.jsx(HA,{})}));
