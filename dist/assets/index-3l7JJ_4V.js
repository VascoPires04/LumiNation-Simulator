(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function xv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var v0={exports:{}},Rc={},x0={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa=Symbol.for("react.element"),Sv=Symbol.for("react.portal"),yv=Symbol.for("react.fragment"),Mv=Symbol.for("react.strict_mode"),Ev=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),Tv=Symbol.for("react.context"),Av=Symbol.for("react.forward_ref"),Rv=Symbol.for("react.suspense"),Cv=Symbol.for("react.memo"),bv=Symbol.for("react.lazy"),ap=Symbol.iterator;function Pv(t){return t===null||typeof t!="object"?null:(t=ap&&t[ap]||t["@@iterator"],typeof t=="function"?t:null)}var S0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y0=Object.assign,M0={};function Mo(t,e,n){this.props=t,this.context=e,this.refs=M0,this.updater=n||S0}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function E0(){}E0.prototype=Mo.prototype;function jd(t,e,n){this.props=t,this.context=e,this.refs=M0,this.updater=n||S0}var Yd=jd.prototype=new E0;Yd.constructor=jd;y0(Yd,Mo.prototype);Yd.isPureReactComponent=!0;var lp=Array.isArray,w0=Object.prototype.hasOwnProperty,$d={current:null},T0={key:!0,ref:!0,__self:!0,__source:!0};function A0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)w0.call(e,i)&&!T0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Pa,type:t,key:s,ref:o,props:r,_owner:$d.current}}function Lv(t,e){return{$$typeof:Pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pa}function Dv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cp=/\/+/g;function Zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dv(""+t.key):e.toString(36)}function Dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pa:case Sv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Zc(o,0):i,lp(r)?(n="",t!=null&&(n=t.replace(cp,"$&/")+"/"),Dl(r,e,n,"",function(c){return c})):r!=null&&(qd(r)&&(r=Lv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(cp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",lp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Zc(s,a);o+=Dl(s,e,n,l,r)}else if(l=Pv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Zc(s,a++),o+=Dl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(t,e,n){if(t==null)return t;var i=[],r=0;return Dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Iv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Fn={current:null},Il={transition:null},Nv={ReactCurrentDispatcher:Fn,ReactCurrentBatchConfig:Il,ReactCurrentOwner:$d};function R0(){throw Error("act(...) is not supported in production builds of React.")}St.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};St.Component=Mo;St.Fragment=yv;St.Profiler=Ev;St.PureComponent=jd;St.StrictMode=Mv;St.Suspense=Rv;St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nv;St.act=R0;St.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=y0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$d.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)w0.call(e,l)&&!T0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Pa,type:t.type,key:r,ref:s,props:i,_owner:o}};St.createContext=function(t){return t={$$typeof:Tv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wv,_context:t},t.Consumer=t};St.createElement=A0;St.createFactory=function(t){var e=A0.bind(null,t);return e.type=t,e};St.createRef=function(){return{current:null}};St.forwardRef=function(t){return{$$typeof:Av,render:t}};St.isValidElement=qd;St.lazy=function(t){return{$$typeof:bv,_payload:{_status:-1,_result:t},_init:Iv}};St.memo=function(t,e){return{$$typeof:Cv,type:t,compare:e===void 0?null:e}};St.startTransition=function(t){var e=Il.transition;Il.transition={};try{t()}finally{Il.transition=e}};St.unstable_act=R0;St.useCallback=function(t,e){return Fn.current.useCallback(t,e)};St.useContext=function(t){return Fn.current.useContext(t)};St.useDebugValue=function(){};St.useDeferredValue=function(t){return Fn.current.useDeferredValue(t)};St.useEffect=function(t,e){return Fn.current.useEffect(t,e)};St.useId=function(){return Fn.current.useId()};St.useImperativeHandle=function(t,e,n){return Fn.current.useImperativeHandle(t,e,n)};St.useInsertionEffect=function(t,e){return Fn.current.useInsertionEffect(t,e)};St.useLayoutEffect=function(t,e){return Fn.current.useLayoutEffect(t,e)};St.useMemo=function(t,e){return Fn.current.useMemo(t,e)};St.useReducer=function(t,e,n){return Fn.current.useReducer(t,e,n)};St.useRef=function(t){return Fn.current.useRef(t)};St.useState=function(t){return Fn.current.useState(t)};St.useSyncExternalStore=function(t,e,n){return Fn.current.useSyncExternalStore(t,e,n)};St.useTransition=function(){return Fn.current.useTransition()};St.version="18.3.1";x0.exports=St;var gt=x0.exports;const Uv=xv(gt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=gt,Ov=Symbol.for("react.element"),Bv=Symbol.for("react.fragment"),kv=Object.prototype.hasOwnProperty,zv=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gv={key:!0,ref:!0,__self:!0,__source:!0};function C0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)kv.call(e,i)&&!Gv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ov,type:t,key:s,ref:o,props:r,_owner:zv.current}}Rc.Fragment=Bv;Rc.jsx=C0;Rc.jsxs=C0;v0.exports=Rc;var xe=v0.exports,of={},b0={exports:{}},ii={},P0={exports:{}},L0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,J){var te=H.length;H.push(J);e:for(;0<te;){var Ee=te-1>>>1,Ce=H[Ee];if(0<r(Ce,J))H[Ee]=J,H[te]=Ce,te=Ee;else break e}}function n(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var J=H[0],te=H.pop();if(te!==J){H[0]=te;e:for(var Ee=0,Ce=H.length,ot=Ce>>>1;Ee<ot;){var ft=2*(Ee+1)-1,et=H[ft],d=ft+1,k=H[d];if(0>r(et,te))d<Ce&&0>r(k,et)?(H[Ee]=k,H[d]=te,Ee=d):(H[Ee]=et,H[ft]=te,Ee=ft);else if(d<Ce&&0>r(k,te))H[Ee]=k,H[d]=te,Ee=d;else break e}}return J}function r(H,J){var te=H.sortIndex-J.sortIndex;return te!==0?te:H.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,m=null,f=3,g=!1,S=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(H){for(var J=n(c);J!==null;){if(J.callback===null)i(c);else if(J.startTime<=H)i(c),J.sortIndex=J.expirationTime,e(l,J);else break;J=n(c)}}function M(H){if(w=!1,v(H),!S)if(n(l)!==null)S=!0,Y(P);else{var J=n(c);J!==null&&V(M,J.startTime-H)}}function P(H,J){S=!1,w&&(w=!1,u(x),x=-1),g=!0;var te=f;try{for(v(J),m=n(l);m!==null&&(!(m.expirationTime>J)||H&&!D());){var Ee=m.callback;if(typeof Ee=="function"){m.callback=null,f=m.priorityLevel;var Ce=Ee(m.expirationTime<=J);J=t.unstable_now(),typeof Ce=="function"?m.callback=Ce:m===n(l)&&i(l),v(J)}else i(l);m=n(l)}if(m!==null)var ot=!0;else{var ft=n(c);ft!==null&&V(M,ft.startTime-J),ot=!1}return ot}finally{m=null,f=te,g=!1}}var T=!1,C=null,x=-1,b=5,L=-1;function D(){return!(t.unstable_now()-L<b)}function O(){if(C!==null){var H=t.unstable_now();L=H;var J=!0;try{J=C(!0,H)}finally{J?j():(T=!1,C=null)}}else T=!1}var j;if(typeof p=="function")j=function(){p(O)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,F=Q.port2;Q.port1.onmessage=O,j=function(){F.postMessage(null)}}else j=function(){_(O,0)};function Y(H){C=H,T||(T=!0,j())}function V(H,J){x=_(function(){H(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){S||g||(S=!0,Y(P))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(f){case 1:case 2:case 3:var J=3;break;default:J=f}var te=f;f=J;try{return H()}finally{f=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,J){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var te=f;f=H;try{return J()}finally{f=te}},t.unstable_scheduleCallback=function(H,J,te){var Ee=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Ee+te:Ee):te=Ee,H){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=te+Ce,H={id:h++,callback:J,priorityLevel:H,startTime:te,expirationTime:Ce,sortIndex:-1},te>Ee?(H.sortIndex=te,e(c,H),n(l)===null&&H===n(c)&&(w?(u(x),x=-1):w=!0,V(M,te-Ee))):(H.sortIndex=Ce,e(l,H),S||g||(S=!0,Y(P))),H},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(H){var J=f;return function(){var te=f;f=J;try{return H.apply(this,arguments)}finally{f=te}}}})(L0);P0.exports=L0;var Vv=P0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv=gt,ni=Vv;function ye(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D0=new Set,ua={};function Ts(t,e){uo(t,e),uo(t+"Capture",e)}function uo(t,e){for(ua[t]=e,t=0;t<e.length;t++)D0.add(e[t])}var ur=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),af=Object.prototype.hasOwnProperty,Wv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,up={},fp={};function Xv(t){return af.call(fp,t)?!0:af.call(up,t)?!1:Wv.test(t)?fp[t]=!0:(up[t]=!0,!1)}function jv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Yv(t,e,n,i){if(e===null||typeof e>"u"||jv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function On(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Sn[t]=new On(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Sn[e]=new On(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Sn[t]=new On(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Sn[t]=new On(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Sn[t]=new On(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Sn[t]=new On(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Sn[t]=new On(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Sn[t]=new On(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Sn[t]=new On(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kd=/[\-:]([a-z])/g;function Zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kd,Zd);Sn[e]=new On(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kd,Zd);Sn[e]=new On(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kd,Zd);Sn[e]=new On(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Sn[t]=new On(t,1,!1,t.toLowerCase(),null,!1,!1)});Sn.xlinkHref=new On("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Sn[t]=new On(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,i){var r=Sn.hasOwnProperty(e)?Sn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Yv(e,n,r,i)&&(n=null),i||r===null?Xv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gr=Hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),Ws=Symbol.for("react.portal"),Xs=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),lf=Symbol.for("react.profiler"),I0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),eh=Symbol.for("react.forward_ref"),cf=Symbol.for("react.suspense"),uf=Symbol.for("react.suspense_list"),th=Symbol.for("react.memo"),Tr=Symbol.for("react.lazy"),U0=Symbol.for("react.offscreen"),dp=Symbol.iterator;function Do(t){return t===null||typeof t!="object"?null:(t=dp&&t[dp]||t["@@iterator"],typeof t=="function"?t:null)}var Wt=Object.assign,Qc;function qo(t){if(Qc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qc=e&&e[1]||""}return`
`+Qc+t}var Jc=!1;function eu(t,e){if(!t||Jc)return"";Jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Jc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qo(t):""}function $v(t){switch(t.tag){case 5:return qo(t.type);case 16:return qo("Lazy");case 13:return qo("Suspense");case 19:return qo("SuspenseList");case 0:case 2:case 15:return t=eu(t.type,!1),t;case 11:return t=eu(t.type.render,!1),t;case 1:return t=eu(t.type,!0),t;default:return""}}function ff(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xs:return"Fragment";case Ws:return"Portal";case lf:return"Profiler";case Jd:return"StrictMode";case cf:return"Suspense";case uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N0:return(t.displayName||"Context")+".Consumer";case I0:return(t._context.displayName||"Context")+".Provider";case eh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case th:return e=t.displayName||null,e!==null?e:ff(t.type)||"Memo";case Tr:e=t._payload,t=t._init;try{return ff(t(e))}catch{}}return null}function qv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ff(e);case 8:return e===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function F0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Kv(t){var e=F0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=Kv(t))}function O0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=F0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function df(t,e){var n=e.checked;return Wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function B0(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function hf(t,e){B0(t,e);var n=Gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&pf(t,e.type,Gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pf(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ko=Array.isArray;function no(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function mf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ye(91));return Wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ye(92));if(Ko(n)){if(1<n.length)throw Error(ye(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gr(n)}}function k0(t,e){var n=Gr(e.value),i=Gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function z0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?z0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ja,G0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ja=ja||document.createElement("div"),ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zv=["Webkit","ms","Moz","O"];Object.keys(ta).forEach(function(t){Zv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ta[e]=ta[t]})});function V0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ta.hasOwnProperty(t)&&ta[t]?(""+e).trim():e+"px"}function H0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=V0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Qv=Wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _f(t,e){if(e){if(Qv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ye(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ye(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ye(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ye(62))}}function vf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xf=null;function nh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sf=null,io=null,ro=null;function _p(t){if(t=Ia(t)){if(typeof Sf!="function")throw Error(ye(280));var e=t.stateNode;e&&(e=Dc(e),Sf(t.stateNode,t.type,e))}}function W0(t){io?ro?ro.push(t):ro=[t]:io=t}function X0(){if(io){var t=io,e=ro;if(ro=io=null,_p(t),e)for(t=0;t<e.length;t++)_p(e[t])}}function j0(t,e){return t(e)}function Y0(){}var tu=!1;function $0(t,e,n){if(tu)return t(e,n);tu=!0;try{return j0(t,e,n)}finally{tu=!1,(io!==null||ro!==null)&&(Y0(),X0())}}function da(t,e){var n=t.stateNode;if(n===null)return null;var i=Dc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ye(231,e,typeof n));return n}var yf=!1;if(ur)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){yf=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{yf=!1}function Jv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var na=!1,Zl=null,Ql=!1,Mf=null,ex={onError:function(t){na=!0,Zl=t}};function tx(t,e,n,i,r,s,o,a,l){na=!1,Zl=null,Jv.apply(ex,arguments)}function nx(t,e,n,i,r,s,o,a,l){if(tx.apply(this,arguments),na){if(na){var c=Zl;na=!1,Zl=null}else throw Error(ye(198));Ql||(Ql=!0,Mf=c)}}function As(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function q0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vp(t){if(As(t)!==t)throw Error(ye(188))}function ix(t){var e=t.alternate;if(!e){if(e=As(t),e===null)throw Error(ye(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return vp(r),t;if(s===i)return vp(r),e;s=s.sibling}throw Error(ye(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ye(189))}}if(n.alternate!==i)throw Error(ye(190))}if(n.tag!==3)throw Error(ye(188));return n.stateNode.current===n?t:e}function K0(t){return t=ix(t),t!==null?Z0(t):null}function Z0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Z0(t);if(e!==null)return e;t=t.sibling}return null}var Q0=ni.unstable_scheduleCallback,xp=ni.unstable_cancelCallback,rx=ni.unstable_shouldYield,sx=ni.unstable_requestPaint,qt=ni.unstable_now,ox=ni.unstable_getCurrentPriorityLevel,ih=ni.unstable_ImmediatePriority,J0=ni.unstable_UserBlockingPriority,Jl=ni.unstable_NormalPriority,ax=ni.unstable_LowPriority,eg=ni.unstable_IdlePriority,Cc=null,Vi=null;function lx(t){if(Vi&&typeof Vi.onCommitFiberRoot=="function")try{Vi.onCommitFiberRoot(Cc,t,void 0,(t.current.flags&128)===128)}catch{}}var Ai=Math.clz32?Math.clz32:fx,cx=Math.log,ux=Math.LN2;function fx(t){return t>>>=0,t===0?32:31-(cx(t)/ux|0)|0}var Ya=64,$a=4194304;function Zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Zo(a):(s&=o,s!==0&&(i=Zo(s)))}else o=n&~r,o!==0?i=Zo(o):s!==0&&(i=Zo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ai(e),r=1<<n,i|=t[n],e&=~r;return i}function dx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ai(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=dx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ef(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tg(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function nu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function La(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ai(e),t[e]=n}function px(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var It=0;function ng(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ig,sh,rg,sg,og,wf=!1,qa=[],Ir=null,Nr=null,Ur=null,ha=new Map,pa=new Map,Rr=[],mx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sp(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(e.pointerId)}}function No(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ia(e),e!==null&&sh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function gx(t,e,n,i,r){switch(e){case"focusin":return Ir=No(Ir,t,e,n,i,r),!0;case"dragenter":return Nr=No(Nr,t,e,n,i,r),!0;case"mouseover":return Ur=No(Ur,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ha.set(s,No(ha.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,pa.set(s,No(pa.get(s)||null,t,e,n,i,r)),!0}return!1}function ag(t){var e=fs(t.target);if(e!==null){var n=As(e);if(n!==null){if(e=n.tag,e===13){if(e=q0(n),e!==null){t.blockedOn=e,og(t.priority,function(){rg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xf=i,n.target.dispatchEvent(i),xf=null}else return e=Ia(n),e!==null&&sh(e),t.blockedOn=n,!1;e.shift()}return!0}function yp(t,e,n){Nl(t)&&n.delete(e)}function _x(){wf=!1,Ir!==null&&Nl(Ir)&&(Ir=null),Nr!==null&&Nl(Nr)&&(Nr=null),Ur!==null&&Nl(Ur)&&(Ur=null),ha.forEach(yp),pa.forEach(yp)}function Uo(t,e){t.blockedOn===e&&(t.blockedOn=null,wf||(wf=!0,ni.unstable_scheduleCallback(ni.unstable_NormalPriority,_x)))}function ma(t){function e(r){return Uo(r,t)}if(0<qa.length){Uo(qa[0],t);for(var n=1;n<qa.length;n++){var i=qa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ir!==null&&Uo(Ir,t),Nr!==null&&Uo(Nr,t),Ur!==null&&Uo(Ur,t),ha.forEach(e),pa.forEach(e),n=0;n<Rr.length;n++)i=Rr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)ag(n),n.blockedOn===null&&Rr.shift()}var so=gr.ReactCurrentBatchConfig,tc=!0;function vx(t,e,n,i){var r=It,s=so.transition;so.transition=null;try{It=1,oh(t,e,n,i)}finally{It=r,so.transition=s}}function xx(t,e,n,i){var r=It,s=so.transition;so.transition=null;try{It=4,oh(t,e,n,i)}finally{It=r,so.transition=s}}function oh(t,e,n,i){if(tc){var r=Tf(t,e,n,i);if(r===null)du(t,e,i,nc,n),Sp(t,i);else if(gx(r,t,e,n,i))i.stopPropagation();else if(Sp(t,i),e&4&&-1<mx.indexOf(t)){for(;r!==null;){var s=Ia(r);if(s!==null&&ig(s),s=Tf(t,e,n,i),s===null&&du(t,e,i,nc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else du(t,e,i,null,n)}}var nc=null;function Tf(t,e,n,i){if(nc=null,t=nh(i),t=fs(t),t!==null)if(e=As(t),e===null)t=null;else if(n=e.tag,n===13){if(t=q0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nc=t,null}function lg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ox()){case ih:return 1;case J0:return 4;case Jl:case ax:return 16;case eg:return 536870912;default:return 16}default:return 16}}var Pr=null,ah=null,Ul=null;function cg(){if(Ul)return Ul;var t,e=ah,n=e.length,i,r="value"in Pr?Pr.value:Pr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ul=r.slice(t,1<i?1-i:void 0)}function Fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function Mp(){return!1}function ri(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:Mp,this.isPropagationStopped=Mp,this}return Wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lh=ri(Eo),Da=Wt({},Eo,{view:0,detail:0}),Sx=ri(Da),iu,ru,Fo,bc=Wt({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ch,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(iu=t.screenX-Fo.screenX,ru=t.screenY-Fo.screenY):ru=iu=0,Fo=t),iu)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),Ep=ri(bc),yx=Wt({},bc,{dataTransfer:0}),Mx=ri(yx),Ex=Wt({},Da,{relatedTarget:0}),su=ri(Ex),wx=Wt({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),Tx=ri(wx),Ax=Wt({},Eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rx=ri(Ax),Cx=Wt({},Eo,{data:0}),wp=ri(Cx),bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Lx[t])?!!e[t]:!1}function ch(){return Dx}var Ix=Wt({},Da,{key:function(t){if(t.key){var e=bx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Px[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ch,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Nx=ri(Ix),Ux=Wt({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=ri(Ux),Fx=Wt({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ch}),Ox=ri(Fx),Bx=Wt({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=ri(Bx),zx=Wt({},bc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gx=ri(zx),Vx=[9,13,27,32],uh=ur&&"CompositionEvent"in window,ia=null;ur&&"documentMode"in document&&(ia=document.documentMode);var Hx=ur&&"TextEvent"in window&&!ia,ug=ur&&(!uh||ia&&8<ia&&11>=ia),Ap=" ",Rp=!1;function fg(t,e){switch(t){case"keyup":return Vx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function Wx(t,e){switch(t){case"compositionend":return dg(e);case"keypress":return e.which!==32?null:(Rp=!0,Ap);case"textInput":return t=e.data,t===Ap&&Rp?null:t;default:return null}}function Xx(t,e){if(js)return t==="compositionend"||!uh&&fg(t,e)?(t=cg(),Ul=ah=Pr=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ug&&e.locale!=="ko"?null:e.data;default:return null}}var jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jx[t.type]:e==="textarea"}function hg(t,e,n,i){W0(i),e=ic(e,"onChange"),0<e.length&&(n=new lh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ra=null,ga=null;function Yx(t){wg(t,0)}function Pc(t){var e=qs(t);if(O0(e))return t}function $x(t,e){if(t==="change")return e}var pg=!1;if(ur){var ou;if(ur){var au="oninput"in document;if(!au){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),au=typeof bp.oninput=="function"}ou=au}else ou=!1;pg=ou&&(!document.documentMode||9<document.documentMode)}function Pp(){ra&&(ra.detachEvent("onpropertychange",mg),ga=ra=null)}function mg(t){if(t.propertyName==="value"&&Pc(ga)){var e=[];hg(e,ga,t,nh(t)),$0(Yx,e)}}function qx(t,e,n){t==="focusin"?(Pp(),ra=e,ga=n,ra.attachEvent("onpropertychange",mg)):t==="focusout"&&Pp()}function Kx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pc(ga)}function Zx(t,e){if(t==="click")return Pc(e)}function Qx(t,e){if(t==="input"||t==="change")return Pc(e)}function Jx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ci=typeof Object.is=="function"?Object.is:Jx;function _a(t,e){if(Ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!af.call(e,r)||!Ci(t[r],e[r]))return!1}return!0}function Lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dp(t,e){var n=Lp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lp(n)}}function gg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _g(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function eS(t){var e=_g(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gg(n.ownerDocument.documentElement,n)){if(i!==null&&fh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Dp(n,s);var o=Dp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tS=ur&&"documentMode"in document&&11>=document.documentMode,Ys=null,Af=null,sa=null,Rf=!1;function Ip(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rf||Ys==null||Ys!==Kl(i)||(i=Ys,"selectionStart"in i&&fh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),sa&&_a(sa,i)||(sa=i,i=ic(Af,"onSelect"),0<i.length&&(e=new lh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ys)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},lu={},vg={};ur&&(vg=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Lc(t){if(lu[t])return lu[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vg)return lu[t]=e[n];return t}var xg=Lc("animationend"),Sg=Lc("animationiteration"),yg=Lc("animationstart"),Mg=Lc("transitionend"),Eg=new Map,Np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(t,e){Eg.set(t,e),Ts(e,[t])}for(var cu=0;cu<Np.length;cu++){var uu=Np[cu],nS=uu.toLowerCase(),iS=uu[0].toUpperCase()+uu.slice(1);Xr(nS,"on"+iS)}Xr(xg,"onAnimationEnd");Xr(Sg,"onAnimationIteration");Xr(yg,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(Mg,"onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseover"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerover"]);Ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function Up(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,nx(i,e,void 0,t),t.currentTarget=null}function wg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Up(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Up(r,a,c),s=l}}}if(Ql)throw t=Mf,Ql=!1,Mf=null,t}function Ft(t,e){var n=e[Df];n===void 0&&(n=e[Df]=new Set);var i=t+"__bubble";n.has(i)||(Tg(e,t,2,!1),n.add(i))}function fu(t,e,n){var i=0;e&&(i|=4),Tg(n,t,i,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function va(t){if(!t[Qa]){t[Qa]=!0,D0.forEach(function(n){n!=="selectionchange"&&(rS.has(n)||fu(n,!1,t),fu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,fu("selectionchange",!1,e))}}function Tg(t,e,n,i){switch(lg(e)){case 1:var r=vx;break;case 4:r=xx;break;default:r=oh}n=r.bind(null,e,n,t),r=void 0,!yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function du(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=fs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}$0(function(){var c=s,h=nh(n),m=[];e:{var f=Eg.get(t);if(f!==void 0){var g=lh,S=t;switch(t){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":g=Nx;break;case"focusin":S="focus",g=su;break;case"focusout":S="blur",g=su;break;case"beforeblur":case"afterblur":g=su;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Ox;break;case xg:case Sg:case yg:g=Tx;break;case Mg:g=kx;break;case"scroll":g=Sx;break;case"wheel":g=Gx;break;case"copy":case"cut":case"paste":g=Rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Tp}var w=(e&4)!==0,_=!w&&t==="scroll",u=w?f!==null?f+"Capture":null:f;w=[];for(var p=c,v;p!==null;){v=p;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=da(p,u),M!=null&&w.push(xa(p,M,v)))),_)break;p=p.return}0<w.length&&(f=new g(f,S,null,n,h),m.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==xf&&(S=n.relatedTarget||n.fromElement)&&(fs(S)||S[fr]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(S=n.relatedTarget||n.toElement,g=c,S=S?fs(S):null,S!==null&&(_=As(S),S!==_||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=c),g!==S)){if(w=Ep,M="onMouseLeave",u="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Tp,M="onPointerLeave",u="onPointerEnter",p="pointer"),_=g==null?f:qs(g),v=S==null?f:qs(S),f=new w(M,p+"leave",g,n,h),f.target=_,f.relatedTarget=v,M=null,fs(h)===c&&(w=new w(u,p+"enter",S,n,h),w.target=v,w.relatedTarget=_,M=w),_=M,g&&S)t:{for(w=g,u=S,p=0,v=w;v;v=bs(v))p++;for(v=0,M=u;M;M=bs(M))v++;for(;0<p-v;)w=bs(w),p--;for(;0<v-p;)u=bs(u),v--;for(;p--;){if(w===u||u!==null&&w===u.alternate)break t;w=bs(w),u=bs(u)}w=null}else w=null;g!==null&&Fp(m,f,g,w,!1),S!==null&&_!==null&&Fp(m,_,S,w,!0)}}e:{if(f=c?qs(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var P=$x;else if(Cp(f))if(pg)P=Qx;else{P=Kx;var T=qx}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=Zx);if(P&&(P=P(t,c))){hg(m,P,n,h);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&pf(f,"number",f.value)}switch(T=c?qs(c):window,t){case"focusin":(Cp(T)||T.contentEditable==="true")&&(Ys=T,Af=c,sa=null);break;case"focusout":sa=Af=Ys=null;break;case"mousedown":Rf=!0;break;case"contextmenu":case"mouseup":case"dragend":Rf=!1,Ip(m,n,h);break;case"selectionchange":if(tS)break;case"keydown":case"keyup":Ip(m,n,h)}var C;if(uh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else js?fg(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(ug&&n.locale!=="ko"&&(js||x!=="onCompositionStart"?x==="onCompositionEnd"&&js&&(C=cg()):(Pr=h,ah="value"in Pr?Pr.value:Pr.textContent,js=!0)),T=ic(c,x),0<T.length&&(x=new wp(x,t,null,n,h),m.push({event:x,listeners:T}),C?x.data=C:(C=dg(n),C!==null&&(x.data=C)))),(C=Hx?Wx(t,n):Xx(t,n))&&(c=ic(c,"onBeforeInput"),0<c.length&&(h=new wp("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=C))}wg(m,e)})}function xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ic(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=da(t,n),s!=null&&i.unshift(xa(t,s,r)),s=da(t,e),s!=null&&i.push(xa(t,s,r))),t=t.return}return i}function bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=da(n,s),l!=null&&o.unshift(xa(n,l,a))):r||(l=da(n,s),l!=null&&o.push(xa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var sS=/\r\n?/g,oS=/\u0000|\uFFFD/g;function Op(t){return(typeof t=="string"?t:""+t).replace(sS,`
`).replace(oS,"")}function Ja(t,e,n){if(e=Op(e),Op(t)!==e&&n)throw Error(ye(425))}function rc(){}var Cf=null,bf=null;function Pf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lf=typeof setTimeout=="function"?setTimeout:void 0,aS=typeof clearTimeout=="function"?clearTimeout:void 0,Bp=typeof Promise=="function"?Promise:void 0,lS=typeof queueMicrotask=="function"?queueMicrotask:typeof Bp<"u"?function(t){return Bp.resolve(null).then(t).catch(cS)}:Lf;function cS(t){setTimeout(function(){throw t})}function hu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ma(e)}function Fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wo=Math.random().toString(36).slice(2),Bi="__reactFiber$"+wo,Sa="__reactProps$"+wo,fr="__reactContainer$"+wo,Df="__reactEvents$"+wo,uS="__reactListeners$"+wo,fS="__reactHandles$"+wo;function fs(t){var e=t[Bi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fr]||n[Bi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kp(t);t!==null;){if(n=t[Bi])return n;t=kp(t)}return e}t=n,n=t.parentNode}return null}function Ia(t){return t=t[Bi]||t[fr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ye(33))}function Dc(t){return t[Sa]||null}var If=[],Ks=-1;function jr(t){return{current:t}}function Ot(t){0>Ks||(t.current=If[Ks],If[Ks]=null,Ks--)}function Nt(t,e){Ks++,If[Ks]=t.current,t.current=e}var Vr={},Pn=jr(Vr),Vn=jr(!1),vs=Vr;function fo(t,e){var n=t.type.contextTypes;if(!n)return Vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Hn(t){return t=t.childContextTypes,t!=null}function sc(){Ot(Vn),Ot(Pn)}function zp(t,e,n){if(Pn.current!==Vr)throw Error(ye(168));Nt(Pn,e),Nt(Vn,n)}function Ag(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ye(108,qv(t)||"Unknown",r));return Wt({},n,i)}function oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,vs=Pn.current,Nt(Pn,t),Nt(Vn,Vn.current),!0}function Gp(t,e,n){var i=t.stateNode;if(!i)throw Error(ye(169));n?(t=Ag(t,e,vs),i.__reactInternalMemoizedMergedChildContext=t,Ot(Vn),Ot(Pn),Nt(Pn,t)):Ot(Vn),Nt(Vn,n)}var ir=null,Ic=!1,pu=!1;function Rg(t){ir===null?ir=[t]:ir.push(t)}function dS(t){Ic=!0,Rg(t)}function Yr(){if(!pu&&ir!==null){pu=!0;var t=0,e=It;try{var n=ir;for(It=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ir=null,Ic=!1}catch(r){throw ir!==null&&(ir=ir.slice(t+1)),Q0(ih,Yr),r}finally{It=e,pu=!1}}return null}var Zs=[],Qs=0,ac=null,lc=0,ui=[],fi=0,xs=null,rr=1,sr="";function ns(t,e){Zs[Qs++]=lc,Zs[Qs++]=ac,ac=t,lc=e}function Cg(t,e,n){ui[fi++]=rr,ui[fi++]=sr,ui[fi++]=xs,xs=t;var i=rr;t=sr;var r=32-Ai(i)-1;i&=~(1<<r),n+=1;var s=32-Ai(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,rr=1<<32-Ai(e)+r|n<<r|i,sr=s+t}else rr=1<<s|n<<r|i,sr=t}function dh(t){t.return!==null&&(ns(t,1),Cg(t,1,0))}function hh(t){for(;t===ac;)ac=Zs[--Qs],Zs[Qs]=null,lc=Zs[--Qs],Zs[Qs]=null;for(;t===xs;)xs=ui[--fi],ui[fi]=null,sr=ui[--fi],ui[fi]=null,rr=ui[--fi],ui[fi]=null}var ti=null,ei=null,zt=!1,Ei=null;function bg(t,e){var n=di(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ti=t,ei=Fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ti=t,ei=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xs!==null?{id:rr,overflow:sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=di(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ti=t,ei=null,!0):!1;default:return!1}}function Nf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uf(t){if(zt){var e=ei;if(e){var n=e;if(!Vp(t,e)){if(Nf(t))throw Error(ye(418));e=Fr(n.nextSibling);var i=ti;e&&Vp(t,e)?bg(i,n):(t.flags=t.flags&-4097|2,zt=!1,ti=t)}}else{if(Nf(t))throw Error(ye(418));t.flags=t.flags&-4097|2,zt=!1,ti=t}}}function Hp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ti=t}function el(t){if(t!==ti)return!1;if(!zt)return Hp(t),zt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pf(t.type,t.memoizedProps)),e&&(e=ei)){if(Nf(t))throw Pg(),Error(ye(418));for(;e;)bg(t,e),e=Fr(e.nextSibling)}if(Hp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ye(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ei=Fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ei=null}}else ei=ti?Fr(t.stateNode.nextSibling):null;return!0}function Pg(){for(var t=ei;t;)t=Fr(t.nextSibling)}function ho(){ei=ti=null,zt=!1}function ph(t){Ei===null?Ei=[t]:Ei.push(t)}var hS=gr.ReactCurrentBatchConfig;function Oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ye(309));var i=n.stateNode}if(!i)throw Error(ye(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ye(284));if(!n._owner)throw Error(ye(290,t))}return t}function tl(t,e){throw t=Object.prototype.toString.call(e),Error(ye(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wp(t){var e=t._init;return e(t._payload)}function Lg(t){function e(u,p){if(t){var v=u.deletions;v===null?(u.deletions=[p],u.flags|=16):v.push(p)}}function n(u,p){if(!t)return null;for(;p!==null;)e(u,p),p=p.sibling;return null}function i(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function r(u,p){return u=zr(u,p),u.index=0,u.sibling=null,u}function s(u,p,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<p?(u.flags|=2,p):v):(u.flags|=2,p)):(u.flags|=1048576,p)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,p,v,M){return p===null||p.tag!==6?(p=yu(v,u.mode,M),p.return=u,p):(p=r(p,v),p.return=u,p)}function l(u,p,v,M){var P=v.type;return P===Xs?h(u,p,v.props.children,M,v.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Tr&&Wp(P)===p.type)?(M=r(p,v.props),M.ref=Oo(u,p,v),M.return=u,M):(M=Hl(v.type,v.key,v.props,null,u.mode,M),M.ref=Oo(u,p,v),M.return=u,M)}function c(u,p,v,M){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Mu(v,u.mode,M),p.return=u,p):(p=r(p,v.children||[]),p.return=u,p)}function h(u,p,v,M,P){return p===null||p.tag!==7?(p=_s(v,u.mode,M,P),p.return=u,p):(p=r(p,v),p.return=u,p)}function m(u,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=yu(""+p,u.mode,v),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Wa:return v=Hl(p.type,p.key,p.props,null,u.mode,v),v.ref=Oo(u,null,p),v.return=u,v;case Ws:return p=Mu(p,u.mode,v),p.return=u,p;case Tr:var M=p._init;return m(u,M(p._payload),v)}if(Ko(p)||Do(p))return p=_s(p,u.mode,v,null),p.return=u,p;tl(u,p)}return null}function f(u,p,v,M){var P=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(u,p,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wa:return v.key===P?l(u,p,v,M):null;case Ws:return v.key===P?c(u,p,v,M):null;case Tr:return P=v._init,f(u,p,P(v._payload),M)}if(Ko(v)||Do(v))return P!==null?null:h(u,p,v,M,null);tl(u,v)}return null}function g(u,p,v,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,a(p,u,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Wa:return u=u.get(M.key===null?v:M.key)||null,l(p,u,M,P);case Ws:return u=u.get(M.key===null?v:M.key)||null,c(p,u,M,P);case Tr:var T=M._init;return g(u,p,v,T(M._payload),P)}if(Ko(M)||Do(M))return u=u.get(v)||null,h(p,u,M,P,null);tl(p,M)}return null}function S(u,p,v,M){for(var P=null,T=null,C=p,x=p=0,b=null;C!==null&&x<v.length;x++){C.index>x?(b=C,C=null):b=C.sibling;var L=f(u,C,v[x],M);if(L===null){C===null&&(C=b);break}t&&C&&L.alternate===null&&e(u,C),p=s(L,p,x),T===null?P=L:T.sibling=L,T=L,C=b}if(x===v.length)return n(u,C),zt&&ns(u,x),P;if(C===null){for(;x<v.length;x++)C=m(u,v[x],M),C!==null&&(p=s(C,p,x),T===null?P=C:T.sibling=C,T=C);return zt&&ns(u,x),P}for(C=i(u,C);x<v.length;x++)b=g(C,u,x,v[x],M),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?x:b.key),p=s(b,p,x),T===null?P=b:T.sibling=b,T=b);return t&&C.forEach(function(D){return e(u,D)}),zt&&ns(u,x),P}function w(u,p,v,M){var P=Do(v);if(typeof P!="function")throw Error(ye(150));if(v=P.call(v),v==null)throw Error(ye(151));for(var T=P=null,C=p,x=p=0,b=null,L=v.next();C!==null&&!L.done;x++,L=v.next()){C.index>x?(b=C,C=null):b=C.sibling;var D=f(u,C,L.value,M);if(D===null){C===null&&(C=b);break}t&&C&&D.alternate===null&&e(u,C),p=s(D,p,x),T===null?P=D:T.sibling=D,T=D,C=b}if(L.done)return n(u,C),zt&&ns(u,x),P;if(C===null){for(;!L.done;x++,L=v.next())L=m(u,L.value,M),L!==null&&(p=s(L,p,x),T===null?P=L:T.sibling=L,T=L);return zt&&ns(u,x),P}for(C=i(u,C);!L.done;x++,L=v.next())L=g(C,u,x,L.value,M),L!==null&&(t&&L.alternate!==null&&C.delete(L.key===null?x:L.key),p=s(L,p,x),T===null?P=L:T.sibling=L,T=L);return t&&C.forEach(function(O){return e(u,O)}),zt&&ns(u,x),P}function _(u,p,v,M){if(typeof v=="object"&&v!==null&&v.type===Xs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Wa:e:{for(var P=v.key,T=p;T!==null;){if(T.key===P){if(P=v.type,P===Xs){if(T.tag===7){n(u,T.sibling),p=r(T,v.props.children),p.return=u,u=p;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Tr&&Wp(P)===T.type){n(u,T.sibling),p=r(T,v.props),p.ref=Oo(u,T,v),p.return=u,u=p;break e}n(u,T);break}else e(u,T);T=T.sibling}v.type===Xs?(p=_s(v.props.children,u.mode,M,v.key),p.return=u,u=p):(M=Hl(v.type,v.key,v.props,null,u.mode,M),M.ref=Oo(u,p,v),M.return=u,u=M)}return o(u);case Ws:e:{for(T=v.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(u,p.sibling),p=r(p,v.children||[]),p.return=u,u=p;break e}else{n(u,p);break}else e(u,p);p=p.sibling}p=Mu(v,u.mode,M),p.return=u,u=p}return o(u);case Tr:return T=v._init,_(u,p,T(v._payload),M)}if(Ko(v))return S(u,p,v,M);if(Do(v))return w(u,p,v,M);tl(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(u,p.sibling),p=r(p,v),p.return=u,u=p):(n(u,p),p=yu(v,u.mode,M),p.return=u,u=p),o(u)):n(u,p)}return _}var po=Lg(!0),Dg=Lg(!1),cc=jr(null),uc=null,Js=null,mh=null;function gh(){mh=Js=uc=null}function _h(t){var e=cc.current;Ot(cc),t._currentValue=e}function Ff(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function oo(t,e){uc=t,mh=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Gn=!0),t.firstContext=null)}function pi(t){var e=t._currentValue;if(mh!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(uc===null)throw Error(ye(308));Js=t,uc.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var ds=null;function vh(t){ds===null?ds=[t]:ds.push(t)}function Ig(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,vh(e)):(n.next=r.next,r.next=n),e.interleaved=n,dr(t,i)}function dr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ar=!1;function xh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ng(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ar(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Or(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,dr(t,n)}return r=i.interleaved,r===null?(e.next=e,vh(i)):(e.next=r.next,r.next=e),i.interleaved=e,dr(t,n)}function Ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rh(t,n)}}function Xp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fc(t,e,n,i){var r=t.updateQueue;Ar=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var m=r.baseState;o=0,h=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,w=a;switch(f=e,g=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){m=S.call(g,m,f);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,f=typeof S=="function"?S.call(g,m,f):S,f==null)break e;m=Wt({},m,f);break e;case 2:Ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=m):h=h.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=m),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ys|=o,t.lanes=o,t.memoizedState=m}}function jp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ye(191,r));r.call(i)}}}var Na={},Hi=jr(Na),ya=jr(Na),Ma=jr(Na);function hs(t){if(t===Na)throw Error(ye(174));return t}function Sh(t,e){switch(Nt(Ma,e),Nt(ya,t),Nt(Hi,Na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gf(e,t)}Ot(Hi),Nt(Hi,e)}function mo(){Ot(Hi),Ot(ya),Ot(Ma)}function Ug(t){hs(Ma.current);var e=hs(Hi.current),n=gf(e,t.type);e!==n&&(Nt(ya,t),Nt(Hi,n))}function yh(t){ya.current===t&&(Ot(Hi),Ot(ya))}var Vt=jr(0);function dc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mu=[];function Mh(){for(var t=0;t<mu.length;t++)mu[t]._workInProgressVersionPrimary=null;mu.length=0}var Bl=gr.ReactCurrentDispatcher,gu=gr.ReactCurrentBatchConfig,Ss=0,Ht=null,sn=null,dn=null,hc=!1,oa=!1,Ea=0,pS=0;function En(){throw Error(ye(321))}function Eh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ci(t[n],e[n]))return!1;return!0}function wh(t,e,n,i,r,s){if(Ss=s,Ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bl.current=t===null||t.memoizedState===null?vS:xS,t=n(i,r),oa){s=0;do{if(oa=!1,Ea=0,25<=s)throw Error(ye(301));s+=1,dn=sn=null,e.updateQueue=null,Bl.current=SS,t=n(i,r)}while(oa)}if(Bl.current=pc,e=sn!==null&&sn.next!==null,Ss=0,dn=sn=Ht=null,hc=!1,e)throw Error(ye(300));return t}function Th(){var t=Ea!==0;return Ea=0,t}function Fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Ht.memoizedState=dn=t:dn=dn.next=t,dn}function mi(){if(sn===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=sn.next;var e=dn===null?Ht.memoizedState:dn.next;if(e!==null)dn=e,sn=t;else{if(t===null)throw Error(ye(310));sn=t,t={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},dn===null?Ht.memoizedState=dn=t:dn=dn.next=t}return dn}function wa(t,e){return typeof e=="function"?e(t):e}function _u(t){var e=mi(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=sn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Ss&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=m,o=i):l=l.next=m,Ht.lanes|=h,ys|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ci(i,e.memoizedState)||(Gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ht.lanes|=s,ys|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vu(t){var e=mi(),n=e.queue;if(n===null)throw Error(ye(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ci(s,e.memoizedState)||(Gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Fg(){}function Og(t,e){var n=Ht,i=mi(),r=e(),s=!Ci(i.memoizedState,r);if(s&&(i.memoizedState=r,Gn=!0),i=i.queue,Ah(zg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||dn!==null&&dn.memoizedState.tag&1){if(n.flags|=2048,Ta(9,kg.bind(null,n,i,r,e),void 0,null),hn===null)throw Error(ye(349));Ss&30||Bg(n,e,r)}return r}function Bg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kg(t,e,n,i){e.value=n,e.getSnapshot=i,Gg(e)&&Vg(t)}function zg(t,e,n){return n(function(){Gg(e)&&Vg(t)})}function Gg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ci(t,n)}catch{return!0}}function Vg(t){var e=dr(t,1);e!==null&&Ri(e,t,1,-1)}function Yp(t){var e=Fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:t},e.queue=t,t=t.dispatch=_S.bind(null,Ht,t),[e.memoizedState,t]}function Ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ht.updateQueue,e===null?(e={lastEffect:null,stores:null},Ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Hg(){return mi().memoizedState}function kl(t,e,n,i){var r=Fi();Ht.flags|=t,r.memoizedState=Ta(1|e,n,void 0,i===void 0?null:i)}function Nc(t,e,n,i){var r=mi();i=i===void 0?null:i;var s=void 0;if(sn!==null){var o=sn.memoizedState;if(s=o.destroy,i!==null&&Eh(i,o.deps)){r.memoizedState=Ta(e,n,s,i);return}}Ht.flags|=t,r.memoizedState=Ta(1|e,n,s,i)}function $p(t,e){return kl(8390656,8,t,e)}function Ah(t,e){return Nc(2048,8,t,e)}function Wg(t,e){return Nc(4,2,t,e)}function Xg(t,e){return Nc(4,4,t,e)}function jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yg(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4,4,jg.bind(null,e,t),n)}function Rh(){}function $g(t,e){var n=mi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Eh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function qg(t,e){var n=mi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Eh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Kg(t,e,n){return Ss&21?(Ci(n,e)||(n=tg(),Ht.lanes|=n,ys|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Gn=!0),t.memoizedState=n)}function mS(t,e){var n=It;It=n!==0&&4>n?n:4,t(!0);var i=gu.transition;gu.transition={};try{t(!1),e()}finally{It=n,gu.transition=i}}function Zg(){return mi().memoizedState}function gS(t,e,n){var i=kr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Qg(t))Jg(e,n);else if(n=Ig(t,e,n,i),n!==null){var r=Nn();Ri(n,t,i,r),e_(n,e,i)}}function _S(t,e,n){var i=kr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qg(t))Jg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ci(a,o)){var l=e.interleaved;l===null?(r.next=r,vh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ig(t,e,r,i),n!==null&&(r=Nn(),Ri(n,t,i,r),e_(n,e,i))}}function Qg(t){var e=t.alternate;return t===Ht||e!==null&&e===Ht}function Jg(t,e){oa=hc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function e_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rh(t,n)}}var pc={readContext:pi,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},vS={readContext:pi,useCallback:function(t,e){return Fi().memoizedState=[t,e===void 0?null:e],t},useContext:pi,useEffect:$p,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kl(4194308,4,jg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return kl(4,2,t,e)},useMemo:function(t,e){var n=Fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=gS.bind(null,Ht,t),[i.memoizedState,t]},useRef:function(t){var e=Fi();return t={current:t},e.memoizedState=t},useState:Yp,useDebugValue:Rh,useDeferredValue:function(t){return Fi().memoizedState=t},useTransition:function(){var t=Yp(!1),e=t[0];return t=mS.bind(null,t[1]),Fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ht,r=Fi();if(zt){if(n===void 0)throw Error(ye(407));n=n()}else{if(n=e(),hn===null)throw Error(ye(349));Ss&30||Bg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$p(zg.bind(null,i,s,t),[t]),i.flags|=2048,Ta(9,kg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Fi(),e=hn.identifierPrefix;if(zt){var n=sr,i=rr;n=(i&~(1<<32-Ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xS={readContext:pi,useCallback:$g,useContext:pi,useEffect:Ah,useImperativeHandle:Yg,useInsertionEffect:Wg,useLayoutEffect:Xg,useMemo:qg,useReducer:_u,useRef:Hg,useState:function(){return _u(wa)},useDebugValue:Rh,useDeferredValue:function(t){var e=mi();return Kg(e,sn.memoizedState,t)},useTransition:function(){var t=_u(wa)[0],e=mi().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Zg,unstable_isNewReconciler:!1},SS={readContext:pi,useCallback:$g,useContext:pi,useEffect:Ah,useImperativeHandle:Yg,useInsertionEffect:Wg,useLayoutEffect:Xg,useMemo:qg,useReducer:vu,useRef:Hg,useState:function(){return vu(wa)},useDebugValue:Rh,useDeferredValue:function(t){var e=mi();return sn===null?e.memoizedState=t:Kg(e,sn.memoizedState,t)},useTransition:function(){var t=vu(wa)[0],e=mi().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Zg,unstable_isNewReconciler:!1};function yi(t,e){if(t&&t.defaultProps){e=Wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Of(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Uc={isMounted:function(t){return(t=t._reactInternals)?As(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Nn(),r=kr(t),s=ar(i,r);s.payload=e,n!=null&&(s.callback=n),e=Or(t,s,r),e!==null&&(Ri(e,t,r,i),Ol(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Nn(),r=kr(t),s=ar(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Or(t,s,r),e!==null&&(Ri(e,t,r,i),Ol(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nn(),i=kr(t),r=ar(n,i);r.tag=2,e!=null&&(r.callback=e),e=Or(t,r,i),e!==null&&(Ri(e,t,i,n),Ol(e,t,i))}};function qp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!_a(n,i)||!_a(r,s):!0}function t_(t,e,n){var i=!1,r=Vr,s=e.contextType;return typeof s=="object"&&s!==null?s=pi(s):(r=Hn(e)?vs:Pn.current,i=e.contextTypes,s=(i=i!=null)?fo(t,r):Vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Uc.enqueueReplaceState(e,e.state,null)}function Bf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},xh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=pi(s):(s=Hn(e)?vs:Pn.current,r.context=fo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Of(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Uc.enqueueReplaceState(r,r.state,null),fc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e){try{var n="",i=e;do n+=$v(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function xu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yS=typeof WeakMap=="function"?WeakMap:Map;function n_(t,e,n){n=ar(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){gc||(gc=!0,qf=i),kf(t,e)},n}function i_(t,e,n){n=ar(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){kf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kf(t,e),typeof i!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new yS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=US.bind(null,t,e,n),e.then(t,t))}function Qp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ar(-1,1),e.tag=2,Or(n,e,1))),n.lanes|=1),t)}var MS=gr.ReactCurrentOwner,Gn=!1;function In(t,e,n,i){e.child=t===null?Dg(e,null,n,i):po(e,t.child,n,i)}function em(t,e,n,i,r){n=n.render;var s=e.ref;return oo(e,r),i=wh(t,e,n,i,s,r),n=Th(),t!==null&&!Gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hr(t,e,r)):(zt&&n&&dh(e),e.flags|=1,In(t,e,i,r),e.child)}function tm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Uh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,r_(t,e,s,i,r)):(t=Hl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(o,i)&&t.ref===e.ref)return hr(t,e,r)}return e.flags|=1,t=zr(s,i),t.ref=e.ref,t.return=e,e.child=t}function r_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(_a(s,i)&&t.ref===e.ref)if(Gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Gn=!0);else return e.lanes=t.lanes,hr(t,e,r)}return zf(t,e,n,i,r)}function s_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(to,Zn),Zn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Nt(to,Zn),Zn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Nt(to,Zn),Zn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Nt(to,Zn),Zn|=i;return In(t,e,r,n),e.child}function o_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zf(t,e,n,i,r){var s=Hn(n)?vs:Pn.current;return s=fo(e,s),oo(e,r),n=wh(t,e,n,i,s,r),i=Th(),t!==null&&!Gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,hr(t,e,r)):(zt&&i&&dh(e),e.flags|=1,In(t,e,n,r),e.child)}function nm(t,e,n,i,r){if(Hn(n)){var s=!0;oc(e)}else s=!1;if(oo(e,r),e.stateNode===null)zl(t,e),t_(e,n,i),Bf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=pi(c):(c=Hn(n)?vs:Pn.current,c=fo(e,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Kp(e,o,i,c),Ar=!1;var f=e.memoizedState;o.state=f,fc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Vn.current||Ar?(typeof h=="function"&&(Of(e,n,h,i),l=e.memoizedState),(a=Ar||qp(e,n,a,i,f,l,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ng(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:yi(e.type,a),o.props=c,m=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=pi(l):(l=Hn(n)?vs:Pn.current,l=fo(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||f!==l)&&Kp(e,o,i,l),Ar=!1,f=e.memoizedState,o.state=f,fc(e,i,o,r);var S=e.memoizedState;a!==m||f!==S||Vn.current||Ar?(typeof g=="function"&&(Of(e,n,g,i),S=e.memoizedState),(c=Ar||qp(e,n,c,i,f,S,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=S),o.props=i,o.state=S,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Gf(t,e,n,i,s,r)}function Gf(t,e,n,i,r,s){o_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Gp(e,n,!1),hr(t,e,s);i=e.stateNode,MS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=po(e,t.child,null,s),e.child=po(e,null,a,s)):In(t,e,a,s),e.memoizedState=i.state,r&&Gp(e,n,!0),e.child}function a_(t){var e=t.stateNode;e.pendingContext?zp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zp(t,e.context,!1),Sh(t,e.containerInfo)}function im(t,e,n,i,r){return ho(),ph(r),e.flags|=256,In(t,e,n,i),e.child}var Vf={dehydrated:null,treeContext:null,retryLane:0};function Hf(t){return{baseLanes:t,cachePool:null,transitions:null}}function l_(t,e,n){var i=e.pendingProps,r=Vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Nt(Vt,r&1),t===null)return Uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bc(o,i,0,null),t=_s(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hf(n),e.memoizedState=Vf,t):Ch(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ES(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=zr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=zr(a,s):(s=_s(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Hf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vf,i}return s=t.child,t=s.sibling,i=zr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ch(t,e){return e=Bc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function nl(t,e,n,i){return i!==null&&ph(i),po(e,t.child,null,n),t=Ch(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ES(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=xu(Error(ye(422))),nl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Bc({mode:"visible",children:i.children},r,0,null),s=_s(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&po(e,t.child,null,o),e.child.memoizedState=Hf(o),e.memoizedState=Vf,s);if(!(e.mode&1))return nl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ye(419)),i=xu(s,i,void 0),nl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Gn||a){if(i=hn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,dr(t,r),Ri(i,t,r,-1))}return Nh(),i=xu(Error(ye(421))),nl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=FS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ei=Fr(r.nextSibling),ti=e,zt=!0,Ei=null,t!==null&&(ui[fi++]=rr,ui[fi++]=sr,ui[fi++]=xs,rr=t.id,sr=t.overflow,xs=e),e=Ch(e,i.children),e.flags|=4096,e)}function rm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ff(t.return,e,n)}function Su(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function c_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(In(t,e,i.children,n),i=Vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rm(t,n,e);else if(t.tag===19)rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Nt(Vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&dc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Su(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&dc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Su(e,!0,n,null,s);break;case"together":Su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function hr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ys|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ye(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wS(t,e,n){switch(e.tag){case 3:a_(e),ho();break;case 5:Ug(e);break;case 1:Hn(e.type)&&oc(e);break;case 4:Sh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Nt(cc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Nt(Vt,Vt.current&1),e.flags|=128,null):n&e.child.childLanes?l_(t,e,n):(Nt(Vt,Vt.current&1),t=hr(t,e,n),t!==null?t.sibling:null);Nt(Vt,Vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return c_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Nt(Vt,Vt.current),i)break;return null;case 22:case 23:return e.lanes=0,s_(t,e,n)}return hr(t,e,n)}var u_,Wf,f_,d_;u_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wf=function(){};f_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,hs(Hi.current);var s=null;switch(n){case"input":r=df(t,r),i=df(t,i),s=[];break;case"select":r=Wt({},r,{value:void 0}),i=Wt({},i,{value:void 0}),s=[];break;case"textarea":r=mf(t,r),i=mf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=rc)}_f(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ua.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ua.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ft("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};d_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Bo(t,e){if(!zt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function wn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function TS(t,e,n){var i=e.pendingProps;switch(hh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(e),null;case 1:return Hn(e.type)&&sc(),wn(e),null;case 3:return i=e.stateNode,mo(),Ot(Vn),Ot(Pn),Mh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(el(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ei!==null&&(Qf(Ei),Ei=null))),Wf(t,e),wn(e),null;case 5:yh(e);var r=hs(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)f_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ye(166));return wn(e),null}if(t=hs(Hi.current),el(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Bi]=e,i[Sa]=s,t=(e.mode&1)!==0,n){case"dialog":Ft("cancel",i),Ft("close",i);break;case"iframe":case"object":case"embed":Ft("load",i);break;case"video":case"audio":for(r=0;r<Qo.length;r++)Ft(Qo[r],i);break;case"source":Ft("error",i);break;case"img":case"image":case"link":Ft("error",i),Ft("load",i);break;case"details":Ft("toggle",i);break;case"input":hp(i,s),Ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ft("invalid",i);break;case"textarea":mp(i,s),Ft("invalid",i)}_f(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,a,t),r=["children",""+a]):ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ft("scroll",i)}switch(n){case"input":Xa(i),pp(i,s,!0);break;case"textarea":Xa(i),gp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=rc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=z0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Bi]=e,t[Sa]=i,u_(t,e,!1,!1),e.stateNode=t;e:{switch(o=vf(n,i),n){case"dialog":Ft("cancel",t),Ft("close",t),r=i;break;case"iframe":case"object":case"embed":Ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qo.length;r++)Ft(Qo[r],t);r=i;break;case"source":Ft("error",t),r=i;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),r=i;break;case"details":Ft("toggle",t),r=i;break;case"input":hp(t,i),r=df(t,i),Ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Wt({},i,{value:void 0}),Ft("invalid",t);break;case"textarea":mp(t,i),r=mf(t,i),Ft("invalid",t);break;default:r=i}_f(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?H0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&G0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fa(t,l):typeof l=="number"&&fa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ft("scroll",t):l!=null&&Qd(t,s,l,o))}switch(n){case"input":Xa(t),pp(t,i,!1);break;case"textarea":Xa(t),gp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Gr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?no(t,!!i.multiple,s,!1):i.defaultValue!=null&&no(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=rc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wn(e),null;case 6:if(t&&e.stateNode!=null)d_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ye(166));if(n=hs(Ma.current),hs(Hi.current),el(e)){if(i=e.stateNode,n=e.memoizedProps,i[Bi]=e,(s=i.nodeValue!==n)&&(t=ti,t!==null))switch(t.tag){case 3:Ja(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Bi]=e,e.stateNode=i}return wn(e),null;case 13:if(Ot(Vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(zt&&ei!==null&&e.mode&1&&!(e.flags&128))Pg(),ho(),e.flags|=98560,s=!1;else if(s=el(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ye(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ye(317));s[Bi]=e}else ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wn(e),s=!1}else Ei!==null&&(Qf(Ei),Ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Vt.current&1?on===0&&(on=3):Nh())),e.updateQueue!==null&&(e.flags|=4),wn(e),null);case 4:return mo(),Wf(t,e),t===null&&va(e.stateNode.containerInfo),wn(e),null;case 10:return _h(e.type._context),wn(e),null;case 17:return Hn(e.type)&&sc(),wn(e),null;case 19:if(Ot(Vt),s=e.memoizedState,s===null)return wn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Bo(s,!1);else{if(on!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=dc(t),o!==null){for(e.flags|=128,Bo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Nt(Vt,Vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&qt()>_o&&(e.flags|=128,i=!0,Bo(s,!1),e.lanes=4194304)}else{if(!i)if(t=dc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!zt)return wn(e),null}else 2*qt()-s.renderingStartTime>_o&&n!==1073741824&&(e.flags|=128,i=!0,Bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qt(),e.sibling=null,n=Vt.current,Nt(Vt,i?n&1|2:n&1),e):(wn(e),null);case 22:case 23:return Ih(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Zn&1073741824&&(wn(e),e.subtreeFlags&6&&(e.flags|=8192)):wn(e),null;case 24:return null;case 25:return null}throw Error(ye(156,e.tag))}function AS(t,e){switch(hh(e),e.tag){case 1:return Hn(e.type)&&sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mo(),Ot(Vn),Ot(Pn),Mh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yh(e),null;case 13:if(Ot(Vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ye(340));ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ot(Vt),null;case 4:return mo(),null;case 10:return _h(e.type._context),null;case 22:case 23:return Ih(),null;case 24:return null;default:return null}}var il=!1,Rn=!1,RS=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function eo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){jt(t,e,i)}else n.current=null}function Xf(t,e,n){try{n()}catch(i){jt(t,e,i)}}var sm=!1;function CS(t,e){if(Cf=tc,t=_g(),fh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,m=t,f=null;t:for(;;){for(var g;m!==n||r!==0&&m.nodeType!==3||(a=o+r),m!==s||i!==0&&m.nodeType!==3||(l=o+i),m.nodeType===3&&(o+=m.nodeValue.length),(g=m.firstChild)!==null;)f=m,m=g;for(;;){if(m===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++h===i&&(l=o),(g=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bf={focusedElem:t,selectionRange:n},tc=!1,Oe=e;Oe!==null;)if(e=Oe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Oe=t;else for(;Oe!==null;){e=Oe;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,_=S.memoizedState,u=e.stateNode,p=u.getSnapshotBeforeUpdate(e.elementType===e.type?w:yi(e.type,w),_);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ye(163))}}catch(M){jt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Oe=t;break}Oe=e.return}return S=sm,sm=!1,S}function aa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xf(e,n,s)}r=r.next}while(r!==i)}}function Fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function jf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function h_(t){var e=t.alternate;e!==null&&(t.alternate=null,h_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bi],delete e[Sa],delete e[Df],delete e[uS],delete e[fS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p_(t){return t.tag===5||t.tag===3||t.tag===4}function om(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rc));else if(i!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}function $f(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for($f(t,e,n),t=t.sibling;t!==null;)$f(t,e,n),t=t.sibling}var _n=null,Mi=!1;function vr(t,e,n){for(n=n.child;n!==null;)m_(t,e,n),n=n.sibling}function m_(t,e,n){if(Vi&&typeof Vi.onCommitFiberUnmount=="function")try{Vi.onCommitFiberUnmount(Cc,n)}catch{}switch(n.tag){case 5:Rn||eo(n,e);case 6:var i=_n,r=Mi;_n=null,vr(t,e,n),_n=i,Mi=r,_n!==null&&(Mi?(t=_n,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_n.removeChild(n.stateNode));break;case 18:_n!==null&&(Mi?(t=_n,n=n.stateNode,t.nodeType===8?hu(t.parentNode,n):t.nodeType===1&&hu(t,n),ma(t)):hu(_n,n.stateNode));break;case 4:i=_n,r=Mi,_n=n.stateNode.containerInfo,Mi=!0,vr(t,e,n),_n=i,Mi=r;break;case 0:case 11:case 14:case 15:if(!Rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xf(n,e,o),r=r.next}while(r!==i)}vr(t,e,n);break;case 1:if(!Rn&&(eo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){jt(n,e,a)}vr(t,e,n);break;case 21:vr(t,e,n);break;case 22:n.mode&1?(Rn=(i=Rn)||n.memoizedState!==null,vr(t,e,n),Rn=i):vr(t,e,n);break;default:vr(t,e,n)}}function am(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RS),e.forEach(function(i){var r=OS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function gi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_n=a.stateNode,Mi=!1;break e;case 3:_n=a.stateNode.containerInfo,Mi=!0;break e;case 4:_n=a.stateNode.containerInfo,Mi=!0;break e}a=a.return}if(_n===null)throw Error(ye(160));m_(s,o,r),_n=null,Mi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){jt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g_(e,t),e=e.sibling}function g_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gi(e,t),Ii(t),i&4){try{aa(3,t,t.return),Fc(3,t)}catch(w){jt(t,t.return,w)}try{aa(5,t,t.return)}catch(w){jt(t,t.return,w)}}break;case 1:gi(e,t),Ii(t),i&512&&n!==null&&eo(n,n.return);break;case 5:if(gi(e,t),Ii(t),i&512&&n!==null&&eo(n,n.return),t.flags&32){var r=t.stateNode;try{fa(r,"")}catch(w){jt(t,t.return,w)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&B0(r,s),vf(a,o);var c=vf(a,s);for(o=0;o<l.length;o+=2){var h=l[o],m=l[o+1];h==="style"?H0(r,m):h==="dangerouslySetInnerHTML"?G0(r,m):h==="children"?fa(r,m):Qd(r,h,m,c)}switch(a){case"input":hf(r,s);break;case"textarea":k0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?no(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?no(r,!!s.multiple,s.defaultValue,!0):no(r,!!s.multiple,s.multiple?[]:"",!1))}r[Sa]=s}catch(w){jt(t,t.return,w)}}break;case 6:if(gi(e,t),Ii(t),i&4){if(t.stateNode===null)throw Error(ye(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(w){jt(t,t.return,w)}}break;case 3:if(gi(e,t),Ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(e.containerInfo)}catch(w){jt(t,t.return,w)}break;case 4:gi(e,t),Ii(t);break;case 13:gi(e,t),Ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Lh=qt())),i&4&&am(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Rn=(c=Rn)||h,gi(e,t),Rn=c):gi(e,t),Ii(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Oe=t,h=t.child;h!==null;){for(m=Oe=h;Oe!==null;){switch(f=Oe,g=f.child,f.tag){case 0:case 11:case 14:case 15:aa(4,f,f.return);break;case 1:eo(f,f.return);var S=f.stateNode;if(typeof S.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(w){jt(i,n,w)}}break;case 5:eo(f,f.return);break;case 22:if(f.memoizedState!==null){cm(m);continue}}g!==null?(g.return=f,Oe=g):cm(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{r=m.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=m.stateNode,l=m.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=V0("display",o))}catch(w){jt(t,t.return,w)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){jt(t,t.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:gi(e,t),Ii(t),i&4&&am(t);break;case 21:break;default:gi(e,t),Ii(t)}}function Ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p_(n)){var i=n;break e}n=n.return}throw Error(ye(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fa(r,""),i.flags&=-33);var s=om(t);$f(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=om(t);Yf(t,a,o);break;default:throw Error(ye(161))}}catch(l){jt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bS(t,e,n){Oe=t,__(t)}function __(t,e,n){for(var i=(t.mode&1)!==0;Oe!==null;){var r=Oe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||il;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Rn;a=il;var c=Rn;if(il=o,(Rn=l)&&!c)for(Oe=r;Oe!==null;)o=Oe,l=o.child,o.tag===22&&o.memoizedState!==null?um(r):l!==null?(l.return=o,Oe=l):um(r);for(;s!==null;)Oe=s,__(s),s=s.sibling;Oe=r,il=a,Rn=c}lm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Oe=s):lm(t)}}function lm(t){for(;Oe!==null;){var e=Oe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rn||Fc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:yi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&ma(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ye(163))}Rn||e.flags&512&&jf(e)}catch(f){jt(e,e.return,f)}}if(e===t){Oe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Oe=n;break}Oe=e.return}}function cm(t){for(;Oe!==null;){var e=Oe;if(e===t){Oe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Oe=n;break}Oe=e.return}}function um(t){for(;Oe!==null;){var e=Oe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fc(4,e)}catch(l){jt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){jt(e,r,l)}}var s=e.return;try{jf(e)}catch(l){jt(e,s,l)}break;case 5:var o=e.return;try{jf(e)}catch(l){jt(e,o,l)}}}catch(l){jt(e,e.return,l)}if(e===t){Oe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Oe=a;break}Oe=e.return}}var PS=Math.ceil,mc=gr.ReactCurrentDispatcher,bh=gr.ReactCurrentOwner,hi=gr.ReactCurrentBatchConfig,Rt=0,hn=null,Jt=null,xn=0,Zn=0,to=jr(0),on=0,Aa=null,ys=0,Oc=0,Ph=0,la=null,zn=null,Lh=0,_o=1/0,nr=null,gc=!1,qf=null,Br=null,rl=!1,Lr=null,_c=0,ca=0,Kf=null,Gl=-1,Vl=0;function Nn(){return Rt&6?qt():Gl!==-1?Gl:Gl=qt()}function kr(t){return t.mode&1?Rt&2&&xn!==0?xn&-xn:hS.transition!==null?(Vl===0&&(Vl=tg()),Vl):(t=It,t!==0||(t=window.event,t=t===void 0?16:lg(t.type)),t):1}function Ri(t,e,n,i){if(50<ca)throw ca=0,Kf=null,Error(ye(185));La(t,n,i),(!(Rt&2)||t!==hn)&&(t===hn&&(!(Rt&2)&&(Oc|=n),on===4&&Cr(t,xn)),Wn(t,i),n===1&&Rt===0&&!(e.mode&1)&&(_o=qt()+500,Ic&&Yr()))}function Wn(t,e){var n=t.callbackNode;hx(t,e);var i=ec(t,t===hn?xn:0);if(i===0)n!==null&&xp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&xp(n),e===1)t.tag===0?dS(fm.bind(null,t)):Rg(fm.bind(null,t)),lS(function(){!(Rt&6)&&Yr()}),n=null;else{switch(ng(i)){case 1:n=ih;break;case 4:n=J0;break;case 16:n=Jl;break;case 536870912:n=eg;break;default:n=Jl}n=T_(n,v_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function v_(t,e){if(Gl=-1,Vl=0,Rt&6)throw Error(ye(327));var n=t.callbackNode;if(ao()&&t.callbackNode!==n)return null;var i=ec(t,t===hn?xn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=vc(t,i);else{e=i;var r=Rt;Rt|=2;var s=S_();(hn!==t||xn!==e)&&(nr=null,_o=qt()+500,gs(t,e));do try{IS();break}catch(a){x_(t,a)}while(!0);gh(),mc.current=s,Rt=r,Jt!==null?e=0:(hn=null,xn=0,e=on)}if(e!==0){if(e===2&&(r=Ef(t),r!==0&&(i=r,e=Zf(t,r))),e===1)throw n=Aa,gs(t,0),Cr(t,i),Wn(t,qt()),n;if(e===6)Cr(t,i);else{if(r=t.current.alternate,!(i&30)&&!LS(r)&&(e=vc(t,i),e===2&&(s=Ef(t),s!==0&&(i=s,e=Zf(t,s))),e===1))throw n=Aa,gs(t,0),Cr(t,i),Wn(t,qt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ye(345));case 2:is(t,zn,nr);break;case 3:if(Cr(t,i),(i&130023424)===i&&(e=Lh+500-qt(),10<e)){if(ec(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Lf(is.bind(null,t,zn,nr),e);break}is(t,zn,nr);break;case 4:if(Cr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ai(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=qt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*PS(i/1960))-i,10<i){t.timeoutHandle=Lf(is.bind(null,t,zn,nr),i);break}is(t,zn,nr);break;case 5:is(t,zn,nr);break;default:throw Error(ye(329))}}}return Wn(t,qt()),t.callbackNode===n?v_.bind(null,t):null}function Zf(t,e){var n=la;return t.current.memoizedState.isDehydrated&&(gs(t,e).flags|=256),t=vc(t,e),t!==2&&(e=zn,zn=n,e!==null&&Qf(e)),t}function Qf(t){zn===null?zn=t:zn.push.apply(zn,t)}function LS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cr(t,e){for(e&=~Ph,e&=~Oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ai(e),i=1<<n;t[n]=-1,e&=~i}}function fm(t){if(Rt&6)throw Error(ye(327));ao();var e=ec(t,0);if(!(e&1))return Wn(t,qt()),null;var n=vc(t,e);if(t.tag!==0&&n===2){var i=Ef(t);i!==0&&(e=i,n=Zf(t,i))}if(n===1)throw n=Aa,gs(t,0),Cr(t,e),Wn(t,qt()),n;if(n===6)throw Error(ye(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,is(t,zn,nr),Wn(t,qt()),null}function Dh(t,e){var n=Rt;Rt|=1;try{return t(e)}finally{Rt=n,Rt===0&&(_o=qt()+500,Ic&&Yr())}}function Ms(t){Lr!==null&&Lr.tag===0&&!(Rt&6)&&ao();var e=Rt;Rt|=1;var n=hi.transition,i=It;try{if(hi.transition=null,It=1,t)return t()}finally{It=i,hi.transition=n,Rt=e,!(Rt&6)&&Yr()}}function Ih(){Zn=to.current,Ot(to)}function gs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,aS(n)),Jt!==null)for(n=Jt.return;n!==null;){var i=n;switch(hh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&sc();break;case 3:mo(),Ot(Vn),Ot(Pn),Mh();break;case 5:yh(i);break;case 4:mo();break;case 13:Ot(Vt);break;case 19:Ot(Vt);break;case 10:_h(i.type._context);break;case 22:case 23:Ih()}n=n.return}if(hn=t,Jt=t=zr(t.current,null),xn=Zn=e,on=0,Aa=null,Ph=Oc=ys=0,zn=la=null,ds!==null){for(e=0;e<ds.length;e++)if(n=ds[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ds=null}return t}function x_(t,e){do{var n=Jt;try{if(gh(),Bl.current=pc,hc){for(var i=Ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hc=!1}if(Ss=0,dn=sn=Ht=null,oa=!1,Ea=0,bh.current=null,n===null||n.return===null){on=1,Aa=e,Jt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=xn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Qp(o);if(g!==null){g.flags&=-257,Jp(g,o,a,s,e),g.mode&1&&Zp(s,c,e),e=g,l=c;var S=e.updateQueue;if(S===null){var w=new Set;w.add(l),e.updateQueue=w}else S.add(l);break e}else{if(!(e&1)){Zp(s,c,e),Nh();break e}l=Error(ye(426))}}else if(zt&&a.mode&1){var _=Qp(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Jp(_,o,a,s,e),ph(go(l,a));break e}}s=l=go(l,a),on!==4&&(on=2),la===null?la=[s]:la.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=n_(s,l,e);Xp(s,u);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Br===null||!Br.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=i_(s,a,e);Xp(s,M);break e}}s=s.return}while(s!==null)}M_(n)}catch(P){e=P,Jt===n&&n!==null&&(Jt=n=n.return);continue}break}while(!0)}function S_(){var t=mc.current;return mc.current=pc,t===null?pc:t}function Nh(){(on===0||on===3||on===2)&&(on=4),hn===null||!(ys&268435455)&&!(Oc&268435455)||Cr(hn,xn)}function vc(t,e){var n=Rt;Rt|=2;var i=S_();(hn!==t||xn!==e)&&(nr=null,gs(t,e));do try{DS();break}catch(r){x_(t,r)}while(!0);if(gh(),Rt=n,mc.current=i,Jt!==null)throw Error(ye(261));return hn=null,xn=0,on}function DS(){for(;Jt!==null;)y_(Jt)}function IS(){for(;Jt!==null&&!rx();)y_(Jt)}function y_(t){var e=w_(t.alternate,t,Zn);t.memoizedProps=t.pendingProps,e===null?M_(t):Jt=e,bh.current=null}function M_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AS(n,e),n!==null){n.flags&=32767,Jt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{on=6,Jt=null;return}}else if(n=TS(n,e,Zn),n!==null){Jt=n;return}if(e=e.sibling,e!==null){Jt=e;return}Jt=e=t}while(e!==null);on===0&&(on=5)}function is(t,e,n){var i=It,r=hi.transition;try{hi.transition=null,It=1,NS(t,e,n,i)}finally{hi.transition=r,It=i}return null}function NS(t,e,n,i){do ao();while(Lr!==null);if(Rt&6)throw Error(ye(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ye(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(px(t,s),t===hn&&(Jt=hn=null,xn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rl||(rl=!0,T_(Jl,function(){return ao(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=hi.transition,hi.transition=null;var o=It;It=1;var a=Rt;Rt|=4,bh.current=null,CS(t,n),g_(n,t),eS(bf),tc=!!Cf,bf=Cf=null,t.current=n,bS(n),sx(),Rt=a,It=o,hi.transition=s}else t.current=n;if(rl&&(rl=!1,Lr=t,_c=r),s=t.pendingLanes,s===0&&(Br=null),lx(n.stateNode),Wn(t,qt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(gc)throw gc=!1,t=qf,qf=null,t;return _c&1&&t.tag!==0&&ao(),s=t.pendingLanes,s&1?t===Kf?ca++:(ca=0,Kf=t):ca=0,Yr(),null}function ao(){if(Lr!==null){var t=ng(_c),e=hi.transition,n=It;try{if(hi.transition=null,It=16>t?16:t,Lr===null)var i=!1;else{if(t=Lr,Lr=null,_c=0,Rt&6)throw Error(ye(331));var r=Rt;for(Rt|=4,Oe=t.current;Oe!==null;){var s=Oe,o=s.child;if(Oe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Oe=c;Oe!==null;){var h=Oe;switch(h.tag){case 0:case 11:case 15:aa(8,h,s)}var m=h.child;if(m!==null)m.return=h,Oe=m;else for(;Oe!==null;){h=Oe;var f=h.sibling,g=h.return;if(h_(h),h===c){Oe=null;break}if(f!==null){f.return=g,Oe=f;break}Oe=g}}}var S=s.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}Oe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Oe=o;else e:for(;Oe!==null;){if(s=Oe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:aa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Oe=u;break e}Oe=s.return}}var p=t.current;for(Oe=p;Oe!==null;){o=Oe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Oe=v;else e:for(o=p;Oe!==null;){if(a=Oe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fc(9,a)}}catch(P){jt(a,a.return,P)}if(a===o){Oe=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Oe=M;break e}Oe=a.return}}if(Rt=r,Yr(),Vi&&typeof Vi.onPostCommitFiberRoot=="function")try{Vi.onPostCommitFiberRoot(Cc,t)}catch{}i=!0}return i}finally{It=n,hi.transition=e}}return!1}function dm(t,e,n){e=go(n,e),e=n_(t,e,1),t=Or(t,e,1),e=Nn(),t!==null&&(La(t,1,e),Wn(t,e))}function jt(t,e,n){if(t.tag===3)dm(t,t,n);else for(;e!==null;){if(e.tag===3){dm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Br===null||!Br.has(i))){t=go(n,t),t=i_(e,t,1),e=Or(e,t,1),t=Nn(),e!==null&&(La(e,1,t),Wn(e,t));break}}e=e.return}}function US(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Nn(),t.pingedLanes|=t.suspendedLanes&n,hn===t&&(xn&n)===n&&(on===4||on===3&&(xn&130023424)===xn&&500>qt()-Lh?gs(t,0):Ph|=n),Wn(t,e)}function E_(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=Nn();t=dr(t,e),t!==null&&(La(t,e,n),Wn(t,n))}function FS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),E_(t,n)}function OS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ye(314))}i!==null&&i.delete(e),E_(t,n)}var w_;w_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vn.current)Gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Gn=!1,wS(t,e,n);Gn=!!(t.flags&131072)}else Gn=!1,zt&&e.flags&1048576&&Cg(e,lc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;zl(t,e),t=e.pendingProps;var r=fo(e,Pn.current);oo(e,n),r=wh(null,e,i,t,r,n);var s=Th();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Hn(i)?(s=!0,oc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xh(e),r.updater=Uc,e.stateNode=r,r._reactInternals=e,Bf(e,i,t,n),e=Gf(null,e,i,!0,s,n)):(e.tag=0,zt&&s&&dh(e),In(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(zl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=kS(i),t=yi(i,t),r){case 0:e=zf(null,e,i,t,n);break e;case 1:e=nm(null,e,i,t,n);break e;case 11:e=em(null,e,i,t,n);break e;case 14:e=tm(null,e,i,yi(i.type,t),n);break e}throw Error(ye(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yi(i,r),zf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yi(i,r),nm(t,e,i,r,n);case 3:e:{if(a_(e),t===null)throw Error(ye(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ng(t,e),fc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=go(Error(ye(423)),e),e=im(t,e,i,n,r);break e}else if(i!==r){r=go(Error(ye(424)),e),e=im(t,e,i,n,r);break e}else for(ei=Fr(e.stateNode.containerInfo.firstChild),ti=e,zt=!0,Ei=null,n=Dg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ho(),i===r){e=hr(t,e,n);break e}In(t,e,i,n)}e=e.child}return e;case 5:return Ug(e),t===null&&Uf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Pf(i,r)?o=null:s!==null&&Pf(i,s)&&(e.flags|=32),o_(t,e),In(t,e,o,n),e.child;case 6:return t===null&&Uf(e),null;case 13:return l_(t,e,n);case 4:return Sh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=po(e,null,i,n):In(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yi(i,r),em(t,e,i,r,n);case 7:return In(t,e,e.pendingProps,n),e.child;case 8:return In(t,e,e.pendingProps.children,n),e.child;case 12:return In(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Nt(cc,i._currentValue),i._currentValue=o,s!==null)if(Ci(s.value,o)){if(s.children===r.children&&!Vn.current){e=hr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ar(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ff(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ye(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ff(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}In(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,oo(e,n),r=pi(r),i=i(r),e.flags|=1,In(t,e,i,n),e.child;case 14:return i=e.type,r=yi(i,e.pendingProps),r=yi(i.type,r),tm(t,e,i,r,n);case 15:return r_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:yi(i,r),zl(t,e),e.tag=1,Hn(i)?(t=!0,oc(e)):t=!1,oo(e,n),t_(e,i,r),Bf(e,i,r,n),Gf(null,e,i,!0,t,n);case 19:return c_(t,e,n);case 22:return s_(t,e,n)}throw Error(ye(156,e.tag))};function T_(t,e){return Q0(t,e)}function BS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(t,e,n,i){return new BS(t,e,n,i)}function Uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kS(t){if(typeof t=="function")return Uh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===eh)return 11;if(t===th)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=di(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Uh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xs:return _s(n.children,r,s,e);case Jd:o=8,r|=8;break;case lf:return t=di(12,n,e,r|2),t.elementType=lf,t.lanes=s,t;case cf:return t=di(13,n,e,r),t.elementType=cf,t.lanes=s,t;case uf:return t=di(19,n,e,r),t.elementType=uf,t.lanes=s,t;case U0:return Bc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I0:o=10;break e;case N0:o=9;break e;case eh:o=11;break e;case th:o=14;break e;case Tr:o=16,i=null;break e}throw Error(ye(130,t==null?t:typeof t,""))}return e=di(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function _s(t,e,n,i){return t=di(7,t,i,e),t.lanes=n,t}function Bc(t,e,n,i){return t=di(22,t,i,e),t.elementType=U0,t.lanes=n,t.stateNode={isHidden:!1},t}function yu(t,e,n){return t=di(6,t,null,e),t.lanes=n,t}function Mu(t,e,n){return e=di(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nu(0),this.expirationTimes=nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Fh(t,e,n,i,r,s,o,a,l){return t=new zS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=di(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xh(s),t}function GS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ws,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function A_(t){if(!t)return Vr;t=t._reactInternals;e:{if(As(t)!==t||t.tag!==1)throw Error(ye(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ye(171))}if(t.tag===1){var n=t.type;if(Hn(n))return Ag(t,n,e)}return e}function R_(t,e,n,i,r,s,o,a,l){return t=Fh(n,i,!0,t,r,s,o,a,l),t.context=A_(null),n=t.current,i=Nn(),r=kr(n),s=ar(i,r),s.callback=e??null,Or(n,s,r),t.current.lanes=r,La(t,r,i),Wn(t,i),t}function kc(t,e,n,i){var r=e.current,s=Nn(),o=kr(r);return n=A_(n),e.context===null?e.context=n:e.pendingContext=n,e=ar(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Or(r,e,o),t!==null&&(Ri(t,r,o,s),Ol(t,r,o)),o}function xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Oh(t,e){hm(t,e),(t=t.alternate)&&hm(t,e)}function VS(){return null}var C_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bh(t){this._internalRoot=t}zc.prototype.render=Bh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ye(409));kc(t,e,null,null)};zc.prototype.unmount=Bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ms(function(){kc(null,t,null,null)}),e[fr]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rr.length&&e!==0&&e<Rr[n].priority;n++);Rr.splice(n,0,t),n===0&&ag(t)}};function kh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pm(){}function HS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=xc(o);s.call(c)}}var o=R_(e,i,t,0,null,!1,!1,"",pm);return t._reactRootContainer=o,t[fr]=o.current,va(t.nodeType===8?t.parentNode:t),Ms(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=xc(l);a.call(c)}}var l=Fh(t,0,!1,null,null,!1,!1,"",pm);return t._reactRootContainer=l,t[fr]=l.current,va(t.nodeType===8?t.parentNode:t),Ms(function(){kc(e,l,n,i)}),l}function Vc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=xc(o);a.call(l)}}kc(e,o,t,r)}else o=HS(n,e,t,r,i);return xc(o)}ig=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zo(e.pendingLanes);n!==0&&(rh(e,n|1),Wn(e,qt()),!(Rt&6)&&(_o=qt()+500,Yr()))}break;case 13:Ms(function(){var i=dr(t,1);if(i!==null){var r=Nn();Ri(i,t,1,r)}}),Oh(t,1)}};sh=function(t){if(t.tag===13){var e=dr(t,134217728);if(e!==null){var n=Nn();Ri(e,t,134217728,n)}Oh(t,134217728)}};rg=function(t){if(t.tag===13){var e=kr(t),n=dr(t,e);if(n!==null){var i=Nn();Ri(n,t,e,i)}Oh(t,e)}};sg=function(){return It};og=function(t,e){var n=It;try{return It=t,e()}finally{It=n}};Sf=function(t,e,n){switch(e){case"input":if(hf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Dc(i);if(!r)throw Error(ye(90));O0(i),hf(i,r)}}}break;case"textarea":k0(t,n);break;case"select":e=n.value,e!=null&&no(t,!!n.multiple,e,!1)}};j0=Dh;Y0=Ms;var WS={usingClientEntryPoint:!1,Events:[Ia,qs,Dc,W0,X0,Dh]},ko={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XS={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=K0(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||VS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Cc=sl.inject(XS),Vi=sl}catch{}}ii.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WS;ii.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kh(e))throw Error(ye(200));return GS(t,e,null,n)};ii.createRoot=function(t,e){if(!kh(t))throw Error(ye(299));var n=!1,i="",r=C_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Fh(t,1,!1,null,null,n,!1,i,r),t[fr]=e.current,va(t.nodeType===8?t.parentNode:t),new Bh(e)};ii.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ye(188)):(t=Object.keys(t).join(","),Error(ye(268,t)));return t=K0(e),t=t===null?null:t.stateNode,t};ii.flushSync=function(t){return Ms(t)};ii.hydrate=function(t,e,n){if(!Gc(e))throw Error(ye(200));return Vc(null,t,e,!0,n)};ii.hydrateRoot=function(t,e,n){if(!kh(t))throw Error(ye(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=C_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=R_(e,null,t,1,n??null,r,!1,s,o),t[fr]=e.current,va(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zc(e)};ii.render=function(t,e,n){if(!Gc(e))throw Error(ye(200));return Vc(null,t,e,!1,n)};ii.unmountComponentAtNode=function(t){if(!Gc(t))throw Error(ye(40));return t._reactRootContainer?(Ms(function(){Vc(null,null,t,!1,function(){t._reactRootContainer=null,t[fr]=null})}),!0):!1};ii.unstable_batchedUpdates=Dh;ii.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Gc(n))throw Error(ye(200));if(t==null||t._reactInternals===void 0)throw Error(ye(38));return Vc(t,e,n,!1,i)};ii.version="18.3.1-next-f1338f8080-20240426";function b_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b_)}catch(t){console.error(t)}}b_(),b0.exports=ii;var jS=b0.exports,mm=jS;of.createRoot=mm.createRoot,of.hydrateRoot=mm.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zh="184",YS=0,gm=1,$S=2,Wl=1,P_=2,Jo=3,Hr=0,Xn=1,ki=2,lr=0,lo=1,os=2,_m=3,vm=4,qS=5,as=100,KS=101,ZS=102,QS=103,JS=104,ey=200,ty=201,ny=202,iy=203,Jf=204,ed=205,ry=206,sy=207,oy=208,ay=209,ly=210,cy=211,uy=212,fy=213,dy=214,td=0,nd=1,id=2,vo=3,rd=4,sd=5,od=6,ad=7,L_=0,hy=1,py=2,Wi=0,D_=1,Gh=2,I_=3,N_=4,U_=5,F_=6,O_=7,B_=300,Es=301,xo=302,Eu=303,wu=304,Hc=306,ld=1e3,or=1001,cd=1002,vn=1003,my=1004,ol=1005,Cn=1006,Tu=1007,ps=1008,Jn=1009,k_=1010,z_=1011,Ra=1012,Vh=1013,Yi=1014,zi=1015,pr=1016,Hh=1017,Wh=1018,Ca=1020,G_=35902,V_=35899,H_=1021,W_=1022,Ti=1023,mr=1026,ms=1027,X_=1028,Xh=1029,ws=1030,jh=1031,Yh=1033,Xl=33776,jl=33777,Yl=33778,$l=33779,ud=35840,fd=35841,dd=35842,hd=35843,pd=36196,md=37492,gd=37496,_d=37488,vd=37489,Sc=37490,xd=37491,Sd=37808,yd=37809,Md=37810,Ed=37811,wd=37812,Td=37813,Ad=37814,Rd=37815,Cd=37816,bd=37817,Pd=37818,Ld=37819,Dd=37820,Id=37821,Nd=36492,Ud=36494,Fd=36495,Od=36283,Bd=36284,yc=36285,kd=36286,gy=3200,zd=0,_y=1,br="",ci="srgb",Mc="srgb-linear",Ec="linear",Dt="srgb",Ps=7680,xm=519,vy=512,xy=513,Sy=514,$h=515,yy=516,My=517,qh=518,Ey=519,Sm=35044,ym="300 es",Gi=2e3,ba=2001;function wy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ty(){const t=wc("canvas");return t.style.display="block",t}const Mm={};function Em(...t){const e="THREE."+t.shift();console.log(e,...t)}function j_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function it(...t){t=j_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function At(...t){t=j_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Gd(...t){const e=t.join(" ");e in Mm||(Mm[e]=!0,it(...t))}function Ay(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Ry={[td]:nd,[id]:od,[rd]:ad,[vo]:sd,[nd]:td,[od]:id,[ad]:rd,[sd]:vo};class Rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Au=Math.PI/180,Vd=180/Math.PI;function Ua(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[t&255]+Tn[t>>8&255]+Tn[t>>16&255]+Tn[t>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[n&63|128]+Tn[n>>8&255]+"-"+Tn[n>>16&255]+Tn[n>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function wt(t,e,n){return Math.max(e,Math.min(n,t))}function Cy(t,e){return(t%e+e)%e}function Ru(t,e,n){return(1-n)*t+n*e}function zo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function kn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ep=class ep{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=wt(this.x,e.x,n.x),this.y=wt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=wt(this.x,e,n),this.y=wt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ep.prototype.isVector2=!0;let Tt=ep;class To{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],m=i[r+3],f=s[o+0],g=s[o+1],S=s[o+2],w=s[o+3];if(m!==w||l!==f||c!==g||h!==S){let _=l*f+c*g+h*S+m*w;_<0&&(f=-f,g=-g,S=-S,w=-w,_=-_);let u=1-a;if(_<.9995){const p=Math.acos(_),v=Math.sin(p);u=Math.sin(u*p)/v,a=Math.sin(a*p)/v,l=l*u+f*a,c=c*u+g*a,h=h*u+S*a,m=m*u+w*a}else{l=l*u+f*a,c=c*u+g*a,h=h*u+S*a,m=m*u+w*a;const p=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=p,c*=p,h*=p,m*=p}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],m=s[o],f=s[o+1],g=s[o+2],S=s[o+3];return e[n]=a*S+h*m+l*g-c*f,e[n+1]=l*S+h*f+c*m-a*g,e[n+2]=c*S+h*g+a*f-l*m,e[n+3]=h*S-a*m-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),m=a(s/2),f=l(i/2),g=l(r/2),S=l(s/2);switch(o){case"XYZ":this._x=f*h*m+c*g*S,this._y=c*g*m-f*h*S,this._z=c*h*S+f*g*m,this._w=c*h*m-f*g*S;break;case"YXZ":this._x=f*h*m+c*g*S,this._y=c*g*m-f*h*S,this._z=c*h*S-f*g*m,this._w=c*h*m+f*g*S;break;case"ZXY":this._x=f*h*m-c*g*S,this._y=c*g*m+f*h*S,this._z=c*h*S+f*g*m,this._w=c*h*m-f*g*S;break;case"ZYX":this._x=f*h*m-c*g*S,this._y=c*g*m+f*h*S,this._z=c*h*S-f*g*m,this._w=c*h*m+f*g*S;break;case"YZX":this._x=f*h*m+c*g*S,this._y=c*g*m+f*h*S,this._z=c*h*S-f*g*m,this._w=c*h*m-f*g*S;break;case"XZY":this._x=f*h*m-c*g*S,this._y=c*g*m-f*h*S,this._z=c*h*S+f*g*m,this._w=c*h*m+f*g*S;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],m=n[10],f=i+a+m;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>m){const g=2*Math.sqrt(1+i-a-m);this._w=(h-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>m){const g=2*Math.sqrt(1+a-i-m);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+m-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const tp=class tp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(wm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(wm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),m=2*(s*i-o*n);return this.x=n+l*c+o*m-a*h,this.y=i+l*h+a*c-s*m,this.z=r+l*m+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=wt(this.x,e.x,n.x),this.y=wt(this.y,e.y,n.y),this.z=wt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=wt(this.x,e,n),this.y=wt(this.y,e,n),this.z=wt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cu.copy(this).projectOnVector(e),this.sub(Cu)}reflect(e){return this.sub(Cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tp.prototype.isVector3=!0;let G=tp;const Cu=new G,wm=new To,np=class np{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],m=i[7],f=i[2],g=i[5],S=i[8],w=r[0],_=r[3],u=r[6],p=r[1],v=r[4],M=r[7],P=r[2],T=r[5],C=r[8];return s[0]=o*w+a*p+l*P,s[3]=o*_+a*v+l*T,s[6]=o*u+a*M+l*C,s[1]=c*w+h*p+m*P,s[4]=c*_+h*v+m*T,s[7]=c*u+h*M+m*C,s[2]=f*w+g*p+S*P,s[5]=f*_+g*v+S*T,s[8]=f*u+g*M+S*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],m=h*o-a*c,f=a*l-h*s,g=c*s-o*l,S=n*m+i*f+r*g;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/S;return e[0]=m*w,e[1]=(r*c-h*i)*w,e[2]=(a*i-r*o)*w,e[3]=f*w,e[4]=(h*n-r*l)*w,e[5]=(r*s-a*n)*w,e[6]=g*w,e[7]=(i*l-c*n)*w,e[8]=(o*n-i*s)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(bu.makeScale(e,n)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};np.prototype.isMatrix3=!0;let at=np;const bu=new at,Tm=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Am=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function by(){const t={enabled:!0,workingColorSpace:Mc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Dt&&(r.r=cr(r.r),r.g=cr(r.g),r.b=cr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Dt&&(r.r=co(r.r),r.g=co(r.g),r.b=co(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===br?Ec:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Gd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Gd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Mc]:{primaries:e,whitePoint:i,transfer:Ec,toXYZ:Tm,fromXYZ:Am,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:i,transfer:Dt,toXYZ:Tm,fromXYZ:Am,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),t}const Et=by();function cr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function co(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ls;class Py{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ls===void 0&&(Ls=wc("canvas")),Ls.width=e.width,Ls.height=e.height;const r=Ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ls}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(cr(n[i]/255)*255):n[i]=cr(n[i]);return{data:n,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ly=0;class Kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=Ua(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pu(r[o].image)):s.push(Pu(r[o]))}else s=Pu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Pu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Py.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let Dy=0;const Lu=new G;class bn extends Rs{constructor(e=bn.DEFAULT_IMAGE,n=bn.DEFAULT_MAPPING,i=or,r=or,s=Cn,o=ps,a=Ti,l=Jn,c=bn.DEFAULT_ANISOTROPY,h=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Ua(),this.name="",this.source=new Kh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lu).x}get height(){return this.source.getSize(Lu).y}get depth(){return this.source.getSize(Lu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){it(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){it(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ld:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ld:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=B_;bn.DEFAULT_ANISOTROPY=1;const ip=class ip{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],m=l[8],f=l[1],g=l[5],S=l[9],w=l[2],_=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(m-w)<.01&&Math.abs(S-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(m+w)<.1&&Math.abs(S+_)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(g+1)/2,P=(u+1)/2,T=(h+f)/4,C=(m+w)/4,x=(S+_)/4;return v>M&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=C/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=x/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=x/s),this.set(i,r,s,n),this}let p=Math.sqrt((_-S)*(_-S)+(m-w)*(m-w)+(f-h)*(f-h));return Math.abs(p)<.001&&(p=1),this.x=(_-S)/p,this.y=(m-w)/p,this.z=(f-h)/p,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=wt(this.x,e.x,n.x),this.y=wt(this.y,e.y,n.y),this.z=wt(this.z,e.z,n.z),this.w=wt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=wt(this.x,e,n),this.y=wt(this.y,e,n),this.z=wt(this.z,e,n),this.w=wt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(wt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ip.prototype.isVector4=!0;let Yt=ip;class Iy extends Rs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Yt(0,0,e,n),this.scissorTest=!1,this.viewport=new Yt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new bn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Kh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Iy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Y_ extends bn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ny extends bn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ac=class Ac{constructor(e,n,i,r,s,o,a,l,c,h,m,f,g,S,w,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,m,f,g,S,w,_)}set(e,n,i,r,s,o,a,l,c,h,m,f,g,S,w,_){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=m,u[14]=f,u[3]=g,u[7]=S,u[11]=w,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ac().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ds.setFromMatrixColumn(e,0).length(),s=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const f=o*h,g=o*m,S=a*h,w=a*m;n[0]=l*h,n[4]=-l*m,n[8]=c,n[1]=g+S*c,n[5]=f-w*c,n[9]=-a*l,n[2]=w-f*c,n[6]=S+g*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*h,g=l*m,S=c*h,w=c*m;n[0]=f+w*a,n[4]=S*a-g,n[8]=o*c,n[1]=o*m,n[5]=o*h,n[9]=-a,n[2]=g*a-S,n[6]=w+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*h,g=l*m,S=c*h,w=c*m;n[0]=f-w*a,n[4]=-o*m,n[8]=S+g*a,n[1]=g+S*a,n[5]=o*h,n[9]=w-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*h,g=o*m,S=a*h,w=a*m;n[0]=l*h,n[4]=S*c-g,n[8]=f*c+w,n[1]=l*m,n[5]=w*c+f,n[9]=g*c-S,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*c,S=a*l,w=a*c;n[0]=l*h,n[4]=w-f*m,n[8]=S*m+g,n[1]=m,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=g*m+S,n[10]=f-w*m}else if(e.order==="XZY"){const f=o*l,g=o*c,S=a*l,w=a*c;n[0]=l*h,n[4]=-m,n[8]=c*h,n[1]=f*m+w,n[5]=o*h,n[9]=g*m-S,n[2]=S*m-g,n[6]=a*h,n[10]=w*m+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uy,e,Fy)}lookAt(e,n,i){const r=this.elements;return qn.subVectors(e,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),xr.crossVectors(i,qn),xr.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),xr.crossVectors(i,qn)),xr.normalize(),al.crossVectors(qn,xr),r[0]=xr.x,r[4]=al.x,r[8]=qn.x,r[1]=xr.y,r[5]=al.y,r[9]=qn.y,r[2]=xr.z,r[6]=al.z,r[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],m=i[5],f=i[9],g=i[13],S=i[2],w=i[6],_=i[10],u=i[14],p=i[3],v=i[7],M=i[11],P=i[15],T=r[0],C=r[4],x=r[8],b=r[12],L=r[1],D=r[5],O=r[9],j=r[13],Q=r[2],F=r[6],Y=r[10],V=r[14],H=r[3],J=r[7],te=r[11],Ee=r[15];return s[0]=o*T+a*L+l*Q+c*H,s[4]=o*C+a*D+l*F+c*J,s[8]=o*x+a*O+l*Y+c*te,s[12]=o*b+a*j+l*V+c*Ee,s[1]=h*T+m*L+f*Q+g*H,s[5]=h*C+m*D+f*F+g*J,s[9]=h*x+m*O+f*Y+g*te,s[13]=h*b+m*j+f*V+g*Ee,s[2]=S*T+w*L+_*Q+u*H,s[6]=S*C+w*D+_*F+u*J,s[10]=S*x+w*O+_*Y+u*te,s[14]=S*b+w*j+_*V+u*Ee,s[3]=p*T+v*L+M*Q+P*H,s[7]=p*C+v*D+M*F+P*J,s[11]=p*x+v*O+M*Y+P*te,s[15]=p*b+v*j+M*V+P*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],m=e[6],f=e[10],g=e[14],S=e[3],w=e[7],_=e[11],u=e[15],p=l*g-c*f,v=a*g-c*m,M=a*f-l*m,P=o*g-c*h,T=o*f-l*h,C=o*m-a*h;return n*(w*p-_*v+u*M)-i*(S*p-_*P+u*T)+r*(S*v-w*P+u*C)-s*(S*M-w*T+_*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],m=e[9],f=e[10],g=e[11],S=e[12],w=e[13],_=e[14],u=e[15],p=n*a-i*o,v=n*l-r*o,M=n*c-s*o,P=i*l-r*a,T=i*c-s*a,C=r*c-s*l,x=h*w-m*S,b=h*_-f*S,L=h*u-g*S,D=m*_-f*w,O=m*u-g*w,j=f*u-g*_,Q=p*j-v*O+M*D+P*L-T*b+C*x;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/Q;return e[0]=(a*j-l*O+c*D)*F,e[1]=(r*O-i*j-s*D)*F,e[2]=(w*C-_*T+u*P)*F,e[3]=(f*T-m*C-g*P)*F,e[4]=(l*L-o*j-c*b)*F,e[5]=(n*j-r*L+s*b)*F,e[6]=(_*M-S*C-u*v)*F,e[7]=(h*C-f*M+g*v)*F,e[8]=(o*O-a*L+c*x)*F,e[9]=(i*L-n*O-s*x)*F,e[10]=(S*T-w*M+u*p)*F,e[11]=(m*M-h*T-g*p)*F,e[12]=(a*b-o*D-l*x)*F,e[13]=(n*D-i*b+r*x)*F,e[14]=(w*v-S*P-_*p)*F,e[15]=(h*P-m*v+f*p)*F,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,m=a+a,f=s*c,g=s*h,S=s*m,w=o*h,_=o*m,u=a*m,p=l*c,v=l*h,M=l*m,P=i.x,T=i.y,C=i.z;return r[0]=(1-(w+u))*P,r[1]=(g+M)*P,r[2]=(S-v)*P,r[3]=0,r[4]=(g-M)*T,r[5]=(1-(f+u))*T,r[6]=(_+p)*T,r[7]=0,r[8]=(S+v)*C,r[9]=(_-p)*C,r[10]=(1-(f+w))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Ds.set(r[0],r[1],r[2]).length();const a=Ds.set(r[4],r[5],r[6]).length(),l=Ds.set(r[8],r[9],r[10]).length();s<0&&(o=-o),_i.copy(this);const c=1/o,h=1/a,m=1/l;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=m,_i.elements[9]*=m,_i.elements[10]*=m,n.setFromRotationMatrix(_i),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Gi,l=!1){const c=this.elements,h=2*s/(n-e),m=2*s/(i-r),f=(n+e)/(n-e),g=(i+r)/(i-r);let S,w;if(l)S=s/(o-s),w=o*s/(o-s);else if(a===Gi)S=-(o+s)/(o-s),w=-2*o*s/(o-s);else if(a===ba)S=-o/(o-s),w=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=m,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=S,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Gi,l=!1){const c=this.elements,h=2/(n-e),m=2/(i-r),f=-(n+e)/(n-e),g=-(i+r)/(i-r);let S,w;if(l)S=1/(o-s),w=o/(o-s);else if(a===Gi)S=-2/(o-s),w=-(o+s)/(o-s);else if(a===ba)S=-1/(o-s),w=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=m,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=S,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Ac.prototype.isMatrix4=!0;let $t=Ac;const Ds=new G,_i=new $t,Uy=new G(0,0,0),Fy=new G(1,1,1),xr=new G,al=new G,qn=new G,Rm=new $t,Cm=new To;class Wr{constructor(e=0,n=0,i=0,r=Wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],m=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Cm.setFromEuler(this),this.setFromQuaternion(Cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wr.DEFAULT_ORDER="XYZ";class $_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Oy=0;const bm=new G,Is=new To,Zi=new $t,ll=new G,Go=new G,By=new G,ky=new To,Pm=new G(1,0,0),Lm=new G(0,1,0),Dm=new G(0,0,1),Im={type:"added"},zy={type:"removed"},Ns={type:"childadded",child:null},Du={type:"childremoved",child:null};class Un extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new G,n=new Wr,i=new To,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new at}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(Pm,e)}rotateY(e){return this.rotateOnAxis(Lm,e)}rotateZ(e){return this.rotateOnAxis(Dm,e)}translateOnAxis(e,n){return bm.copy(e).applyQuaternion(this.quaternion),this.position.add(bm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Pm,e)}translateY(e){return this.translateOnAxis(Lm,e)}translateZ(e){return this.translateOnAxis(Dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ll.copy(e):ll.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Go,ll,this.up):Zi.lookAt(ll,Go,this.up),this.quaternion.setFromRotationMatrix(Zi),r&&(Zi.extractRotation(r.matrixWorld),Is.setFromRotationMatrix(Zi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Im),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zy),Du.child=e,this.dispatchEvent(Du),Du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Im),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,By),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,ky,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const m=l[c];s(e.shapes,m)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),m=o(e.shapes),f=o(e.skeletons),g=o(e.animations),S=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),S.length>0&&(i.nodes=S)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Un.DEFAULT_UP=new G(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fn extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gy={type:"move"};class Iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const w of e.hand.values()){const _=n.getJointPose(w,i),u=this._getHandJoint(c,w);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],f=h.position.distanceTo(m.position),g=.02,S=.005;c.inputState.pinching&&f>g+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function Nu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class xt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Et.workingColorSpace){return this.r=e,this.g=n,this.b=i,Et.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Et.workingColorSpace){if(e=Cy(e,1),n=wt(n,0,1),i=wt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Nu(o,s,e+1/3),this.g=Nu(o,s,e),this.b=Nu(o,s,e-1/3)}return Et.colorSpaceToWorking(this,r),this}setStyle(e,n=ci){function i(s){s!==void 0&&parseFloat(s)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:it("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ci){const i=q_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return Et.workingToColorSpace(An.copy(this),e),Math.round(wt(An.r*255,0,255))*65536+Math.round(wt(An.g*255,0,255))*256+Math.round(wt(An.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.workingToColorSpace(An.copy(this),n);const i=An.r,r=An.g,s=An.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const m=o-a;switch(c=h<=.5?m/(o+a):m/(2-o-a),o){case i:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-i)/m+2;break;case s:l=(i-r)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=Et.workingColorSpace){return Et.workingToColorSpace(An.copy(this),n),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=ci){Et.workingToColorSpace(An.copy(this),e);const n=An.r,i=An.g,r=An.b;return e!==ci?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+n,Sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Sr),e.getHSL(cl);const i=Ru(Sr.h,cl.h,n),r=Ru(Sr.s,cl.s,n),s=Ru(Sr.l,cl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new xt;xt.NAMES=q_;class Zh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(e),this.density=n}clone(){return new Zh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vy extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wr,this.environmentIntensity=1,this.environmentRotation=new Wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const vi=new G,Qi=new G,Uu=new G,Ji=new G,Us=new G,Fs=new G,Nm=new G,Fu=new G,Ou=new G,Bu=new G,ku=new Yt,zu=new Yt,Gu=new Yt;class wi{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),vi.subVectors(e,n),r.cross(vi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){vi.subVectors(r,n),Qi.subVectors(i,n),Uu.subVectors(e,n);const o=vi.dot(vi),a=vi.dot(Qi),l=vi.dot(Uu),c=Qi.dot(Qi),h=Qi.dot(Uu),m=o*c-a*a;if(m===0)return s.set(0,0,0),null;const f=1/m,g=(c*l-a*h)*f,S=(o*h-a*l)*f;return s.set(1-g-S,S,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ku.setScalar(0),zu.setScalar(0),Gu.setScalar(0),ku.fromBufferAttribute(e,n),zu.fromBufferAttribute(e,i),Gu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ku,s.x),o.addScaledVector(zu,s.y),o.addScaledVector(Gu,s.z),o}static isFrontFacing(e,n,i,r){return vi.subVectors(i,n),Qi.subVectors(e,n),vi.cross(Qi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),vi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return wi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Us.subVectors(r,i),Fs.subVectors(s,i),Fu.subVectors(e,i);const l=Us.dot(Fu),c=Fs.dot(Fu);if(l<=0&&c<=0)return n.copy(i);Ou.subVectors(e,r);const h=Us.dot(Ou),m=Fs.dot(Ou);if(h>=0&&m<=h)return n.copy(r);const f=l*m-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Us,o);Bu.subVectors(e,s);const g=Us.dot(Bu),S=Fs.dot(Bu);if(S>=0&&g<=S)return n.copy(s);const w=g*c-l*S;if(w<=0&&c>=0&&S<=0)return a=c/(c-S),n.copy(i).addScaledVector(Fs,a);const _=h*S-g*m;if(_<=0&&m-h>=0&&g-S>=0)return Nm.subVectors(s,r),a=(m-h)/(m-h+(g-S)),n.copy(r).addScaledVector(Nm,a);const u=1/(_+w+f);return o=w*u,a=f*u,n.copy(i).addScaledVector(Us,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fa{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(xi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(xi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=xi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xi):xi.fromBufferAttribute(s,o),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ul.copy(i.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),fl.subVectors(this.max,Vo),Os.subVectors(e.a,Vo),Bs.subVectors(e.b,Vo),ks.subVectors(e.c,Vo),yr.subVectors(Bs,Os),Mr.subVectors(ks,Bs),Qr.subVectors(Os,ks);let n=[0,-yr.z,yr.y,0,-Mr.z,Mr.y,0,-Qr.z,Qr.y,yr.z,0,-yr.x,Mr.z,0,-Mr.x,Qr.z,0,-Qr.x,-yr.y,yr.x,0,-Mr.y,Mr.x,0,-Qr.y,Qr.x,0];return!Vu(n,Os,Bs,ks,fl)||(n=[1,0,0,0,1,0,0,0,1],!Vu(n,Os,Bs,ks,fl))?!1:(dl.crossVectors(yr,Mr),n=[dl.x,dl.y,dl.z],Vu(n,Os,Bs,ks,fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const er=[new G,new G,new G,new G,new G,new G,new G,new G],xi=new G,ul=new Fa,Os=new G,Bs=new G,ks=new G,yr=new G,Mr=new G,Qr=new G,Vo=new G,fl=new G,dl=new G,Jr=new G;function Vu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Jr.fromArray(t,s);const a=r.x*Math.abs(Jr.x)+r.y*Math.abs(Jr.y)+r.z*Math.abs(Jr.z),l=e.dot(Jr),c=n.dot(Jr),h=i.dot(Jr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Qt=new G,hl=new Tt;let Hy=0;class ji extends Rs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Sm,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=zo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zo(n,this.array)),n}setX(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zo(n,this.array)),n}setY(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zo(n,this.array)),n}setW(e,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=kn(n,this.array),i=kn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=kn(n,this.array),i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=kn(n,this.array),i=kn(i,this.array),r=kn(r,this.array),s=kn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class K_ extends ji{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Z_ extends ji{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class an extends ji{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Wy=new Fa,Ho=new G,Hu=new G;class Wc{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Wy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const n=Ho.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ho,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Hu)),this.expandByPoint(Ho.copy(e.center).sub(Hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Xy=0;const ai=new $t,Wu=new Un,zs=new G,Kn=new Fa,Wo=new Fa,un=new G;class jn extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wy(e)?Z_:K_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,n,i){return ai.makeTranslation(e,n,i),this.applyMatrix4(ai),this}scale(e,n,i){return ai.makeScale(e,n,i),this.applyMatrix4(ai),this}lookAt(e){return Wu.lookAt(e),Wu.updateMatrix(),this.applyMatrix4(Wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new an(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Kn.min,Wo.min),Kn.expandByPoint(un),un.addVectors(Kn.max,Wo.max),Kn.expandByPoint(un)):(Kn.expandByPoint(Wo.min),Kn.expandByPoint(Wo.max))}Kn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(un));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(zs.fromBufferAttribute(e,c),un.add(zs)),r=Math.max(r,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ji(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new G,l[x]=new G;const c=new G,h=new G,m=new G,f=new Tt,g=new Tt,S=new Tt,w=new G,_=new G;function u(x,b,L){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,b),m.fromBufferAttribute(i,L),f.fromBufferAttribute(s,x),g.fromBufferAttribute(s,b),S.fromBufferAttribute(s,L),h.sub(c),m.sub(c),g.sub(f),S.sub(f);const D=1/(g.x*S.y-S.x*g.y);isFinite(D)&&(w.copy(h).multiplyScalar(S.y).addScaledVector(m,-g.y).multiplyScalar(D),_.copy(m).multiplyScalar(g.x).addScaledVector(h,-S.x).multiplyScalar(D),a[x].add(w),a[b].add(w),a[L].add(w),l[x].add(_),l[b].add(_),l[L].add(_))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let x=0,b=p.length;x<b;++x){const L=p[x],D=L.start,O=L.count;for(let j=D,Q=D+O;j<Q;j+=3)u(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const v=new G,M=new G,P=new G,T=new G;function C(x){P.fromBufferAttribute(r,x),T.copy(P);const b=a[x];v.copy(b),v.sub(P.multiplyScalar(P.dot(b))).normalize(),M.crossVectors(T,b);const D=M.dot(l[x])<0?-1:1;o.setXYZW(x,v.x,v.y,v.z,D)}for(let x=0,b=p.length;x<b;++x){const L=p[x],D=L.start,O=L.count;for(let j=D,Q=D+O;j<Q;j+=3)C(e.getX(j+0)),C(e.getX(j+1)),C(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ji(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,h=new G,m=new G;if(e)for(let f=0,g=e.count;f<g;f+=3){const S=e.getX(f+0),w=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(n,S),s.fromBufferAttribute(n,w),o.fromBufferAttribute(n,_),h.subVectors(o,s),m.subVectors(r,s),h.cross(m),a.fromBufferAttribute(i,S),l.fromBufferAttribute(i,w),c.fromBufferAttribute(i,_),a.add(h),l.add(h),c.add(h),i.setXYZ(S,a.x,a.y,a.z),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),h.subVectors(o,s),m.subVectors(r,s),h.cross(m),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)un.fromBufferAttribute(e,n),un.normalize(),e.setXYZ(n,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,m=a.normalized,f=new c.constructor(l.length*h);let g=0,S=0;for(let w=0,_=l.length;w<_;w++){a.isInterleavedBufferAttribute?g=l[w]*a.data.stride+a.offset:g=l[w]*h;for(let u=0;u<h;u++)f[S++]=c[g++]}return new ji(f,h,m)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,m=c.length;h<m;h++){const f=c[h],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let m=0,f=c.length;m<f;m++){const g=c[m];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],m=s[c];for(let f=0,g=m.length;f<g;f++)h.push(m[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const m=o[c];this.addGroup(m.start,m.count,m.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let jy=0;class Ao extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Ua(),this.name="",this.type="Material",this.blending=lo,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jf,this.blendDst=ed,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){it(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){it(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(i.blending=this.blending),this.side!==Hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jf&&(i.blendSrc=this.blendSrc),this.blendDst!==ed&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const tr=new G,Xu=new G,pl=new G,Er=new G,ju=new G,ml=new G,Yu=new G;class Q_{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=tr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,n),tr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xu.copy(e).add(n).multiplyScalar(.5),pl.copy(n).sub(e).normalize(),Er.copy(this.origin).sub(Xu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(pl),a=Er.dot(this.direction),l=-Er.dot(pl),c=Er.lengthSq(),h=Math.abs(1-o*o);let m,f,g,S;if(h>0)if(m=o*l-a,f=o*a-l,S=s*h,m>=0)if(f>=-S)if(f<=S){const w=1/h;m*=w,f*=w,g=m*(m+o*f+2*a)+f*(o*m+f+2*l)+c}else f=s,m=Math.max(0,-(o*f+a)),g=-m*m+f*(f+2*l)+c;else f=-s,m=Math.max(0,-(o*f+a)),g=-m*m+f*(f+2*l)+c;else f<=-S?(m=Math.max(0,-(-o*s+a)),f=m>0?-s:Math.min(Math.max(-s,-l),s),g=-m*m+f*(f+2*l)+c):f<=S?(m=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(m=Math.max(0,-(o*s+a)),f=m>0?s:Math.min(Math.max(-s,-l),s),g=-m*m+f*(f+2*l)+c);else f=o>0?-s:s,m=Math.max(0,-(o*f+a)),g=-m*m+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Xu).addScaledVector(pl,f),g}intersectSphere(e,n){tr.subVectors(e.center,this.origin);const i=tr.dot(this.direction),r=tr.dot(tr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),m>=0?(a=(e.min.z-f.z)*m,l=(e.max.z-f.z)*m):(a=(e.max.z-f.z)*m,l=(e.min.z-f.z)*m),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,n,i,r,s){ju.subVectors(n,e),ml.subVectors(i,e),Yu.crossVectors(ju,ml);let o=this.direction.dot(Yu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Er.subVectors(this.origin,e);const l=a*this.direction.dot(ml.crossVectors(Er,ml));if(l<0)return null;const c=a*this.direction.dot(ju.cross(Er));if(c<0||l+c>o)return null;const h=-a*Er.dot(Yu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class li extends Ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Um=new $t,es=new Q_,gl=new Wc,Fm=new G,_l=new G,vl=new G,xl=new G,$u=new G,Sl=new G,Om=new G,yl=new G;class le extends Un{constructor(e=new jn,n=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Sl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],m=s[l];h!==0&&($u.fromBufferAttribute(m,e),o?Sl.addScaledVector($u,h):Sl.addScaledVector($u.sub(n),h))}n.add(Sl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gl.copy(i.boundingSphere),gl.applyMatrix4(s),es.copy(e.ray).recast(e.near),!(gl.containsPoint(es.origin)===!1&&(es.intersectSphere(gl,Fm)===null||es.origin.distanceToSquared(Fm)>(e.far-e.near)**2))&&(Um.copy(s).invert(),es.copy(e.ray).applyMatrix4(Um),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,es)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,m=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,w=f.length;S<w;S++){const _=f[S],u=o[_.materialIndex],p=Math.max(_.start,g.start),v=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let M=p,P=v;M<P;M+=3){const T=a.getX(M),C=a.getX(M+1),x=a.getX(M+2);r=Ml(this,u,e,i,c,h,m,T,C,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const S=Math.max(0,g.start),w=Math.min(a.count,g.start+g.count);for(let _=S,u=w;_<u;_+=3){const p=a.getX(_),v=a.getX(_+1),M=a.getX(_+2);r=Ml(this,o,e,i,c,h,m,p,v,M),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let S=0,w=f.length;S<w;S++){const _=f[S],u=o[_.materialIndex],p=Math.max(_.start,g.start),v=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=p,P=v;M<P;M+=3){const T=M,C=M+1,x=M+2;r=Ml(this,u,e,i,c,h,m,T,C,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const S=Math.max(0,g.start),w=Math.min(l.count,g.start+g.count);for(let _=S,u=w;_<u;_+=3){const p=_,v=_+1,M=_+2;r=Ml(this,o,e,i,c,h,m,p,v,M),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function Yy(t,e,n,i,r,s,o,a){let l;if(e.side===Xn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Hr,a),l===null)return null;yl.copy(a),yl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(yl);return c<n.near||c>n.far?null:{distance:c,point:yl.clone(),object:t}}function Ml(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,_l),t.getVertexPosition(l,vl),t.getVertexPosition(c,xl);const h=Yy(t,e,n,i,_l,vl,xl,Om);if(h){const m=new G;wi.getBarycoord(Om,_l,vl,xl,m),r&&(h.uv=wi.getInterpolatedAttribute(r,a,l,c,m,new Tt)),s&&(h.uv1=wi.getInterpolatedAttribute(s,a,l,c,m,new Tt)),o&&(h.normal=wi.getInterpolatedAttribute(o,a,l,c,m,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new G,materialIndex:0};wi.getNormal(_l,vl,xl,f.normal),h.face=f,h.barycoord=m}return h}class $y extends bn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=vn,h=vn,m,f){super(null,o,a,l,c,h,r,s,m,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qu=new G,qy=new G,Ky=new at;class rs{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qu.subVectors(i,n).cross(qy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(qu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ky.getNormalMatrix(e),r=this.coplanarPoint(qu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new Wc,Zy=new Tt(.5,.5),El=new G;class Qh{constructor(e=new rs,n=new rs,i=new rs,r=new rs,s=new rs,o=new rs){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Gi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],m=s[5],f=s[6],g=s[7],S=s[8],w=s[9],_=s[10],u=s[11],p=s[12],v=s[13],M=s[14],P=s[15];if(r[0].setComponents(c-o,g-h,u-S,P-p).normalize(),r[1].setComponents(c+o,g+h,u+S,P+p).normalize(),r[2].setComponents(c+a,g+m,u+w,P+v).normalize(),r[3].setComponents(c-a,g-m,u-w,P-v).normalize(),i)r[4].setComponents(l,f,_,M).normalize(),r[5].setComponents(c-l,g-f,u-_,P-M).normalize();else if(r[4].setComponents(c-l,g-f,u-_,P-M).normalize(),n===Gi)r[5].setComponents(c+l,g+f,u+_,P+M).normalize();else if(n===ba)r[5].setComponents(l,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const n=Zy.distanceTo(e.center);return ts.radius=.7071067811865476+n,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(El.x=r.normal.x>0?e.max.x:e.min.x,El.y=r.normal.y>0?e.max.y:e.min.y,El.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class J_ extends Ao{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bm=new $t,Hd=new Q_,wl=new Wc,Tl=new G;class Qy extends Un{constructor(e=new jn,n=new J_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(r),wl.radius+=s,e.ray.intersectsSphere(wl)===!1)return;Bm.copy(r).invert(),Hd.copy(e.ray).applyMatrix4(Bm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,m=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let S=f,w=g;S<w;S++){const _=c.getX(S);Tl.fromBufferAttribute(m,_),km(Tl,_,l,r,e,n,this)}}else{const f=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let S=f,w=g;S<w;S++)Tl.fromBufferAttribute(m,S),km(Tl,S,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function km(t,e,n,i,r,s,o){const a=Hd.distanceSqToPoint(t);if(a<n){const l=new G;Hd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ev extends bn{constructor(e=[],n=Es,i,r,s,o,a,l,c,h){super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jy extends bn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class So extends bn{constructor(e,n,i=Yi,r,s,o,a=vn,l=vn,c,h=mr,m=1){if(h!==mr&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:m};super(f,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class eM extends So{constructor(e,n=Yi,i=Es,r,s,o=vn,a=vn,l,c=mr){const h={width:e,height:e,depth:1},m=[h,h,h,h,h,h];super(e,e,n,i,r,s,o,a,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tv extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class st extends jn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],m=[];let f=0,g=0;S("z","y","x",-1,-1,i,n,e,o,s,0),S("z","y","x",1,-1,i,n,-e,o,s,1),S("x","z","y",1,1,e,i,n,r,o,2),S("x","z","y",1,-1,e,i,-n,r,o,3),S("x","y","z",1,-1,e,n,i,r,s,4),S("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(m,2));function S(w,_,u,p,v,M,P,T,C,x,b){const L=M/C,D=P/x,O=M/2,j=P/2,Q=T/2,F=C+1,Y=x+1;let V=0,H=0;const J=new G;for(let te=0;te<Y;te++){const Ee=te*D-j;for(let Ce=0;Ce<F;Ce++){const ot=Ce*L-O;J[w]=ot*p,J[_]=Ee*v,J[u]=Q,c.push(J.x,J.y,J.z),J[w]=0,J[_]=0,J[u]=T>0?1:-1,h.push(J.x,J.y,J.z),m.push(Ce/C),m.push(1-te/x),V+=1}}for(let te=0;te<x;te++)for(let Ee=0;Ee<C;Ee++){const Ce=f+Ee+F*te,ot=f+Ee+F*(te+1),ft=f+(Ee+1)+F*(te+1),et=f+(Ee+1)+F*te;l.push(Ce,ot,et),l.push(ot,ft,et),H+=6}a.addGroup(g,H,b),g+=H,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rn extends jn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],m=[],f=[],g=[];let S=0;const w=[],_=i/2;let u=0;p(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new an(m,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(g,2));function p(){const M=new G,P=new G;let T=0;const C=(n-e)/i;for(let x=0;x<=s;x++){const b=[],L=x/s,D=L*(n-e)+e;for(let O=0;O<=r;O++){const j=O/r,Q=j*l+a,F=Math.sin(Q),Y=Math.cos(Q);P.x=D*F,P.y=-L*i+_,P.z=D*Y,m.push(P.x,P.y,P.z),M.set(F,C,Y).normalize(),f.push(M.x,M.y,M.z),g.push(j,1-L),b.push(S++)}w.push(b)}for(let x=0;x<r;x++)for(let b=0;b<s;b++){const L=w[b][x],D=w[b+1][x],O=w[b+1][x+1],j=w[b][x+1];(e>0||b!==0)&&(h.push(L,D,j),T+=3),(n>0||b!==s-1)&&(h.push(D,O,j),T+=3)}c.addGroup(u,T,0),u+=T}function v(M){const P=S,T=new Tt,C=new G;let x=0;const b=M===!0?e:n,L=M===!0?1:-1;for(let O=1;O<=r;O++)m.push(0,_*L,0),f.push(0,L,0),g.push(.5,.5),S++;const D=S;for(let O=0;O<=r;O++){const Q=O/r*l+a,F=Math.cos(Q),Y=Math.sin(Q);C.x=b*Y,C.y=_*L,C.z=b*F,m.push(C.x,C.y,C.z),f.push(0,L,0),T.x=F*.5+.5,T.y=Y*.5*L+.5,g.push(T.x,T.y),S++}for(let O=0;O<r;O++){const j=P+O,Q=D+O;M===!0?h.push(Q,Q+1,j):h.push(Q+1,Q,j),x+=3}c.addGroup(u,x,M===!0?1:2),u+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tc extends rn{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Tc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jh extends jn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new an(s,3)),this.setAttribute("normal",new an(s.slice(),3)),this.setAttribute("uv",new an(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(p){const v=new G,M=new G,P=new G;for(let T=0;T<n.length;T+=3)g(n[T+0],v),g(n[T+1],M),g(n[T+2],P),l(v,M,P,p)}function l(p,v,M,P){const T=P+1,C=[];for(let x=0;x<=T;x++){C[x]=[];const b=p.clone().lerp(M,x/T),L=v.clone().lerp(M,x/T),D=T-x;for(let O=0;O<=D;O++)O===0&&x===T?C[x][O]=b:C[x][O]=b.clone().lerp(L,O/D)}for(let x=0;x<T;x++)for(let b=0;b<2*(T-x)-1;b++){const L=Math.floor(b/2);b%2===0?(f(C[x][L+1]),f(C[x+1][L]),f(C[x][L])):(f(C[x][L+1]),f(C[x+1][L+1]),f(C[x+1][L]))}}function c(p){const v=new G;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(p),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function h(){const p=new G;for(let v=0;v<s.length;v+=3){p.x=s[v+0],p.y=s[v+1],p.z=s[v+2];const M=_(p)/2/Math.PI+.5,P=u(p)/Math.PI+.5;o.push(M,1-P)}S(),m()}function m(){for(let p=0;p<o.length;p+=6){const v=o[p+0],M=o[p+2],P=o[p+4],T=Math.max(v,M,P),C=Math.min(v,M,P);T>.9&&C<.1&&(v<.2&&(o[p+0]+=1),M<.2&&(o[p+2]+=1),P<.2&&(o[p+4]+=1))}}function f(p){s.push(p.x,p.y,p.z)}function g(p,v){const M=p*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function S(){const p=new G,v=new G,M=new G,P=new G,T=new Tt,C=new Tt,x=new Tt;for(let b=0,L=0;b<s.length;b+=9,L+=6){p.set(s[b+0],s[b+1],s[b+2]),v.set(s[b+3],s[b+4],s[b+5]),M.set(s[b+6],s[b+7],s[b+8]),T.set(o[L+0],o[L+1]),C.set(o[L+2],o[L+3]),x.set(o[L+4],o[L+5]),P.copy(p).add(v).add(M).divideScalar(3);const D=_(P);w(T,L+0,p,D),w(C,L+2,v,D),w(x,L+4,M,D)}}function w(p,v,M,P){P<0&&p.x===1&&(o[v]=p.x-1),M.x===0&&M.z===0&&(o[v]=P/2/Math.PI+.5)}function _(p){return Math.atan2(p.z,-p.x)}function u(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jh(e.vertices,e.indices,e.radius,e.detail)}}class ls extends Jh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ls(e.radius,e.detail)}}class gn extends jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,m=e/a,f=n/l,g=[],S=[],w=[],_=[];for(let u=0;u<h;u++){const p=u*f-o;for(let v=0;v<c;v++){const M=v*m-s;S.push(M,-p,0),w.push(0,0,1),_.push(v/a),_.push(1-u/l)}}for(let u=0;u<l;u++)for(let p=0;p<a;p++){const v=p+c*u,M=p+c*(u+1),P=p+1+c*(u+1),T=p+1+c*u;g.push(v,M,T),g.push(M,P,T)}this.setIndex(g),this.setAttribute("position",new an(S,3)),this.setAttribute("normal",new an(w,3)),this.setAttribute("uv",new an(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.width,e.height,e.widthSegments,e.heightSegments)}}class cs extends jn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],m=new G,f=new G,g=[],S=[],w=[],_=[];for(let u=0;u<=i;u++){const p=[],v=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let P=0;P<=n;P++){const T=P/n;m.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),m.y=e*Math.cos(o+v*a),m.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),S.push(m.x,m.y,m.z),f.copy(m).normalize(),w.push(f.x,f.y,f.z),_.push(T+M,1-v),p.push(c++)}h.push(p)}for(let u=0;u<i;u++)for(let p=0;p<n;p++){const v=h[u][p+1],M=h[u][p],P=h[u+1][p],T=h[u+1][p+1];(u!==0||o>0)&&g.push(v,M,T),(u!==i-1||l<Math.PI)&&g.push(M,P,T)}this.setIndex(g),this.setAttribute("position",new an(S,3)),this.setAttribute("normal",new an(w,3)),this.setAttribute("uv",new an(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function yo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(zm(r))r.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(zm(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Dn(t){const e={};for(let n=0;n<t.length;n++){const i=yo(t[n]);for(const r in i)e[r]=i[r]}return e}function zm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function tM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function nv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const nM={clone:yo,merge:Dn};var iM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iM,this.fragmentShader=rM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=tM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class sM extends $i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ut extends Ao{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zd,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oM extends Ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aM extends Ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class iv extends Un{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Ku=new $t,Gm=new G,Vm=new G;class lM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qh,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Gm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gm),Vm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Vm),n.updateMatrixWorld(),Ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ba||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Al=new G,Rl=new To,Ni=new G;class rv extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Al,Rl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Rl,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Al,Rl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Al,Rl,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wr=new G,Hm=new Tt,Wm=new Tt;class Qn extends rv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vd*2*Math.atan(Math.tan(Au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,n){return this.getViewBounds(e,Hm,Wm),n.subVectors(Wm,Hm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Au*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class cM extends lM{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0}}class Cl extends iv{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new cM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class sv extends rv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class uM extends iv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gs=-90,Vs=1;class fM extends Un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qn(Gs,Vs,e,n);r.layers=this.layers,this.add(r);const s=new Qn(Gs,Vs,e,n);s.layers=this.layers,this.add(s);const o=new Qn(Gs,Vs,e,n);o.layers=this.layers,this.add(o);const a=new Qn(Gs,Vs,e,n);a.layers=this.layers,this.add(a);const l=new Qn(Gs,Vs,e,n);l.layers=this.layers,this.add(l);const c=new Qn(Gs,Vs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,m=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(m,f,g),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class dM extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const rp=class rp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};rp.prototype.isMatrix2=!0;let Xm=rp;function jm(t,e,n,i){const r=hM(i);switch(n){case H_:return t*e;case X_:return t*e/r.components*r.byteLength;case Xh:return t*e/r.components*r.byteLength;case ws:return t*e*2/r.components*r.byteLength;case jh:return t*e*2/r.components*r.byteLength;case W_:return t*e*3/r.components*r.byteLength;case Ti:return t*e*4/r.components*r.byteLength;case Yh:return t*e*4/r.components*r.byteLength;case Xl:case jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yl:case $l:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fd:case hd:return Math.max(t,16)*Math.max(e,8)/4;case ud:case dd:return Math.max(t,8)*Math.max(e,8)/2;case pd:case md:case _d:case vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gd:case Sc:case xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Md:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Td:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case bd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Id:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Nd:case Ud:case Fd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Od:case Bd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case yc:case kd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function hM(t){switch(t){case Jn:case k_:return{byteLength:1,components:1};case Ra:case z_:case pr:return{byteLength:2,components:1};case Hh:case Wh:return{byteLength:2,components:4};case Yi:case Vh:case zi:return{byteLength:4,components:1};case G_:case V_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ov(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function pM(t){const e=new WeakMap;function n(a,l){const c=a.array,h=a.usage,m=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:m}}function i(a,l,c){const h=l.array,m=l.updateRanges;if(t.bindBuffer(c,a),m.length===0)t.bufferSubData(c,0,h);else{m.sort((g,S)=>g.start-S.start);let f=0;for(let g=1;g<m.length;g++){const S=m[f],w=m[g];w.start<=S.start+S.count+1?S.count=Math.max(S.count,w.start+w.count-S.start):(++f,m[f]=w)}m.length=f+1;for(let g=0,S=m.length;g<S;g++){const w=m[g];t.bufferSubData(c,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var mM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gM=`#ifdef USE_ALPHAHASH
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
#endif`,_M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yM=`#ifdef USE_AOMAP
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
#endif`,MM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EM=`#ifdef USE_BATCHING
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
#endif`,wM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CM=`#ifdef USE_IRIDESCENCE
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
#endif`,bM=`#ifdef USE_BUMPMAP
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
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,UM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,FM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,BM=`#define PI 3.141592653589793
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
} // validated`,kM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zM=`vec3 transformedNormal = objectNormal;
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
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XM="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YM=`#ifdef USE_ENVMAP
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
#endif`,$M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n1=`#ifdef USE_GRADIENTMAP
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
}`,i1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,a1=`#ifdef USE_ENVMAP
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
#endif`,l1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d1=`PhysicalMaterial material;
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
#endif`,h1=`uniform sampler2D dfgLUT;
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
}`,p1=`
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
#endif`,m1=`#if defined( RE_IndirectDiffuse )
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
#endif`,g1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,v1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T1=`#if defined( USE_POINTS_UV )
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
#endif`,A1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L1=`#ifdef USE_MORPHTARGETS
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
#endif`,D1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B1=`#ifdef USE_NORMALMAP
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
#endif`,k1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eE=`float getShadowMask() {
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
}`,tE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nE=`#ifdef USE_SKINNING
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
#endif`,iE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rE=`#ifdef USE_SKINNING
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
#endif`,sE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cE=`#ifdef USE_TRANSMISSION
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
#endif`,uE=`#ifdef USE_TRANSMISSION
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
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gE=`uniform sampler2D t2D;
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
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`#include <common>
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
}`,ME=`#if DEPTH_PACKING == 3200
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
}`,EE=`#define DISTANCE
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
}`,wE=`#define DISTANCE
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
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`uniform float scale;
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
}`,CE=`uniform vec3 diffuse;
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
}`,bE=`#include <common>
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
}`,PE=`uniform vec3 diffuse;
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
}`,LE=`#define LAMBERT
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
}`,DE=`#define LAMBERT
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
}`,IE=`#define MATCAP
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
}`,NE=`#define MATCAP
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
}`,UE=`#define NORMAL
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
}`,FE=`#define NORMAL
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
}`,OE=`#define PHONG
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
}`,BE=`#define PHONG
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
}`,kE=`#define STANDARD
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
}`,zE=`#define STANDARD
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
}`,GE=`#define TOON
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
}`,VE=`#define TOON
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
}`,HE=`uniform float size;
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
}`,WE=`uniform vec3 diffuse;
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
}`,XE=`#include <common>
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
}`,jE=`uniform vec3 color;
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
}`,YE=`uniform float rotation;
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
}`,$E=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:mM,alphahash_pars_fragment:gM,alphamap_fragment:_M,alphamap_pars_fragment:vM,alphatest_fragment:xM,alphatest_pars_fragment:SM,aomap_fragment:yM,aomap_pars_fragment:MM,batching_pars_vertex:EM,batching_vertex:wM,begin_vertex:TM,beginnormal_vertex:AM,bsdfs:RM,iridescence_fragment:CM,bumpmap_pars_fragment:bM,clipping_planes_fragment:PM,clipping_planes_pars_fragment:LM,clipping_planes_pars_vertex:DM,clipping_planes_vertex:IM,color_fragment:NM,color_pars_fragment:UM,color_pars_vertex:FM,color_vertex:OM,common:BM,cube_uv_reflection_fragment:kM,defaultnormal_vertex:zM,displacementmap_pars_vertex:GM,displacementmap_vertex:VM,emissivemap_fragment:HM,emissivemap_pars_fragment:WM,colorspace_fragment:XM,colorspace_pars_fragment:jM,envmap_fragment:YM,envmap_common_pars_fragment:$M,envmap_pars_fragment:qM,envmap_pars_vertex:KM,envmap_physical_pars_fragment:a1,envmap_vertex:ZM,fog_vertex:QM,fog_pars_vertex:JM,fog_fragment:e1,fog_pars_fragment:t1,gradientmap_pars_fragment:n1,lightmap_pars_fragment:i1,lights_lambert_fragment:r1,lights_lambert_pars_fragment:s1,lights_pars_begin:o1,lights_toon_fragment:l1,lights_toon_pars_fragment:c1,lights_phong_fragment:u1,lights_phong_pars_fragment:f1,lights_physical_fragment:d1,lights_physical_pars_fragment:h1,lights_fragment_begin:p1,lights_fragment_maps:m1,lights_fragment_end:g1,lightprobes_pars_fragment:_1,logdepthbuf_fragment:v1,logdepthbuf_pars_fragment:x1,logdepthbuf_pars_vertex:S1,logdepthbuf_vertex:y1,map_fragment:M1,map_pars_fragment:E1,map_particle_fragment:w1,map_particle_pars_fragment:T1,metalnessmap_fragment:A1,metalnessmap_pars_fragment:R1,morphinstance_vertex:C1,morphcolor_vertex:b1,morphnormal_vertex:P1,morphtarget_pars_vertex:L1,morphtarget_vertex:D1,normal_fragment_begin:I1,normal_fragment_maps:N1,normal_pars_fragment:U1,normal_pars_vertex:F1,normal_vertex:O1,normalmap_pars_fragment:B1,clearcoat_normal_fragment_begin:k1,clearcoat_normal_fragment_maps:z1,clearcoat_pars_fragment:G1,iridescence_pars_fragment:V1,opaque_fragment:H1,packing:W1,premultiplied_alpha_fragment:X1,project_vertex:j1,dithering_fragment:Y1,dithering_pars_fragment:$1,roughnessmap_fragment:q1,roughnessmap_pars_fragment:K1,shadowmap_pars_fragment:Z1,shadowmap_pars_vertex:Q1,shadowmap_vertex:J1,shadowmask_pars_fragment:eE,skinbase_vertex:tE,skinning_pars_vertex:nE,skinning_vertex:iE,skinnormal_vertex:rE,specularmap_fragment:sE,specularmap_pars_fragment:oE,tonemapping_fragment:aE,tonemapping_pars_fragment:lE,transmission_fragment:cE,transmission_pars_fragment:uE,uv_pars_fragment:fE,uv_pars_vertex:dE,uv_vertex:hE,worldpos_vertex:pE,background_vert:mE,background_frag:gE,backgroundCube_vert:_E,backgroundCube_frag:vE,cube_vert:xE,cube_frag:SE,depth_vert:yE,depth_frag:ME,distance_vert:EE,distance_frag:wE,equirect_vert:TE,equirect_frag:AE,linedashed_vert:RE,linedashed_frag:CE,meshbasic_vert:bE,meshbasic_frag:PE,meshlambert_vert:LE,meshlambert_frag:DE,meshmatcap_vert:IE,meshmatcap_frag:NE,meshnormal_vert:UE,meshnormal_frag:FE,meshphong_vert:OE,meshphong_frag:BE,meshphysical_vert:kE,meshphysical_frag:zE,meshtoon_vert:GE,meshtoon_frag:VE,points_vert:HE,points_frag:WE,shadow_vert:XE,shadow_frag:jE,sprite_vert:YE,sprite_frag:$E},Ne={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Oi={basic:{uniforms:Dn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Dn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Dn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Dn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Dn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new xt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Dn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Dn([Ne.points,Ne.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Dn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Dn([Ne.common,Ne.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Dn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Dn([Ne.sprite,Ne.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Dn([Ne.common,Ne.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Dn([Ne.lights,Ne.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Oi.physical={uniforms:Dn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const bl={r:0,b:0,g:0},qE=new $t,av=new at;av.set(-1,0,0,0,1,0,0,0,1);function KE(t,e,n,i,r,s){const o=new xt(0);let a=r===!0?0:1,l,c,h=null,m=0,f=null;function g(p){let v=p.isScene===!0?p.background:null;if(v&&v.isTexture){const M=p.backgroundBlurriness>0;v=e.get(v,M)}return v}function S(p){let v=!1;const M=g(p);M===null?_(o,a):M&&M.isColor&&(_(M,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function w(p,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===Hc)?(c===void 0&&(c=new le(new st(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:yo(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qE.makeRotationFromEuler(v.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(av),c.material.toneMapped=Et.getTransfer(M.colorSpace)!==Dt,(h!==M||m!==M.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,m=M.version,f=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new le(new gn(2,2),new $i({name:"BackgroundMaterial",uniforms:yo(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Et.getTransfer(M.colorSpace)!==Dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||m!==M.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,h=M,m=M.version,f=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,v){p.getRGB(bl,nv(t)),n.buffers.color.setClear(bl.r,bl.g,bl.b,v,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),a=v,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,_(o,a)},render:S,addToRenderList:w,dispose:u}}function ZE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(D,O,j,Q,F){let Y=!1;const V=m(D,Q,j,O);s!==V&&(s=V,c(s.object)),Y=g(D,Q,j,F),Y&&S(D,Q,j,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,M(D,O,j,Q),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function h(D){return t.deleteVertexArray(D)}function m(D,O,j,Q){const F=Q.wireframe===!0;let Y=i[O.id];Y===void 0&&(Y={},i[O.id]=Y);const V=D.isInstancedMesh===!0?D.id:0;let H=Y[V];H===void 0&&(H={},Y[V]=H);let J=H[j.id];J===void 0&&(J={},H[j.id]=J);let te=J[F];return te===void 0&&(te=f(l()),J[F]=te),te}function f(D){const O=[],j=[],Q=[];for(let F=0;F<n;F++)O[F]=0,j[F]=0,Q[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:j,attributeDivisors:Q,object:D,attributes:{},index:null}}function g(D,O,j,Q){const F=s.attributes,Y=O.attributes;let V=0;const H=j.getAttributes();for(const J in H)if(H[J].location>=0){const Ee=F[J];let Ce=Y[J];if(Ce===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(Ce=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(Ce=D.instanceColor)),Ee===void 0||Ee.attribute!==Ce||Ce&&Ee.data!==Ce.data)return!0;V++}return s.attributesNum!==V||s.index!==Q}function S(D,O,j,Q){const F={},Y=O.attributes;let V=0;const H=j.getAttributes();for(const J in H)if(H[J].location>=0){let Ee=Y[J];Ee===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(Ee=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(Ee=D.instanceColor));const Ce={};Ce.attribute=Ee,Ee&&Ee.data&&(Ce.data=Ee.data),F[J]=Ce,V++}s.attributes=F,s.attributesNum=V,s.index=Q}function w(){const D=s.newAttributes;for(let O=0,j=D.length;O<j;O++)D[O]=0}function _(D){u(D,0)}function u(D,O){const j=s.newAttributes,Q=s.enabledAttributes,F=s.attributeDivisors;j[D]=1,Q[D]===0&&(t.enableVertexAttribArray(D),Q[D]=1),F[D]!==O&&(t.vertexAttribDivisor(D,O),F[D]=O)}function p(){const D=s.newAttributes,O=s.enabledAttributes;for(let j=0,Q=O.length;j<Q;j++)O[j]!==D[j]&&(t.disableVertexAttribArray(j),O[j]=0)}function v(D,O,j,Q,F,Y,V){V===!0?t.vertexAttribIPointer(D,O,j,F,Y):t.vertexAttribPointer(D,O,j,Q,F,Y)}function M(D,O,j,Q){w();const F=Q.attributes,Y=j.getAttributes(),V=O.defaultAttributeValues;for(const H in Y){const J=Y[H];if(J.location>=0){let te=F[H];if(te===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),te!==void 0){const Ee=te.normalized,Ce=te.itemSize,ot=e.get(te);if(ot===void 0)continue;const ft=ot.buffer,et=ot.type,d=ot.bytesPerElement,k=et===t.INT||et===t.UNSIGNED_INT||te.gpuType===Vh;if(te.isInterleavedBufferAttribute){const $=te.data,ce=$.stride,re=te.offset;if($.isInstancedInterleavedBuffer){for(let de=0;de<J.locationSize;de++)u(J.location+de,$.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<J.locationSize;de++)_(J.location+de);t.bindBuffer(t.ARRAY_BUFFER,ft);for(let de=0;de<J.locationSize;de++)v(J.location+de,Ce/J.locationSize,et,Ee,ce*d,(re+Ce/J.locationSize*de)*d,k)}else{if(te.isInstancedBufferAttribute){for(let $=0;$<J.locationSize;$++)u(J.location+$,te.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let $=0;$<J.locationSize;$++)_(J.location+$);t.bindBuffer(t.ARRAY_BUFFER,ft);for(let $=0;$<J.locationSize;$++)v(J.location+$,Ce/J.locationSize,et,Ee,Ce*d,Ce/J.locationSize*$*d,k)}}else if(V!==void 0){const Ee=V[H];if(Ee!==void 0)switch(Ee.length){case 2:t.vertexAttrib2fv(J.location,Ee);break;case 3:t.vertexAttrib3fv(J.location,Ee);break;case 4:t.vertexAttrib4fv(J.location,Ee);break;default:t.vertexAttrib1fv(J.location,Ee)}}}}p()}function P(){b();for(const D in i){const O=i[D];for(const j in O){const Q=O[j];for(const F in Q){const Y=Q[F];for(const V in Y)h(Y[V].object),delete Y[V];delete Q[F]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const O=i[D.id];for(const j in O){const Q=O[j];for(const F in Q){const Y=Q[F];for(const V in Y)h(Y[V].object),delete Y[V];delete Q[F]}}delete i[D.id]}function C(D){for(const O in i){const j=i[O];for(const Q in j){const F=j[Q];if(F[D.id]===void 0)continue;const Y=F[D.id];for(const V in Y)h(Y[V].object),delete Y[V];delete F[D.id]}}}function x(D){for(const O in i){const j=i[O],Q=D.isInstancedMesh===!0?D.id:0,F=j[Q];if(F!==void 0){for(const Y in F){const V=F[Y];for(const H in V)h(V[H].object),delete V[H];delete F[Y]}delete j[Q],Object.keys(j).length===0&&delete i[O]}}}function b(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:L,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:w,enableAttribute:_,disableUnusedAttributes:p}}function QE(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let g=0;g<h;g++)f+=c[g];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function JE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Ti&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const x=C===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Jn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zi&&!x)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(it("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const m=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:S,maxTextureSize:w,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:M,maxSamples:P,samples:T}}function ew(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new rs,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){const g=m.length!==0||f||i!==0||r;return r=f,i=m.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,f){n=h(m,f,0)},this.setState=function(m,f,g){const S=m.clippingPlanes,w=m.clipIntersection,_=m.clipShadows,u=t.get(m);if(!r||S===null||S.length===0||s&&!_)s?h(null):c();else{const p=s?0:i,v=p*4;let M=u.clippingState||null;l.value=M,M=h(S,f,v,g);for(let P=0;P!==v;++P)M[P]=n[P];u.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(m,f,g,S){const w=m!==null?m.length:0;let _=null;if(w!==0){if(_=l.value,S!==!0||_===null){const u=g+w*4,p=f.matrixWorldInverse;a.getNormalMatrix(p),(_===null||_.length<u)&&(_=new Float32Array(u));for(let v=0,M=g;v!==w;++v,M+=4)o.copy(m[v]).applyMatrix4(p,a),o.normal.toArray(_,M),_[M+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}const Dr=4,Ym=[.125,.215,.35,.446,.526,.582],us=20,tw=256,Xo=new sv,$m=new xt;let Zu=null,Qu=0,Ju=0,ef=!1;const nw=new G;class qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=nw}=s;Zu=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zu,Qu,Ju),this._renderer.xr.enabled=ef,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zu=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:pr,format:Ti,colorSpace:Mc,depthBuffer:!1},r=Km(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iw(s)),this._blurMaterial=sw(s,e,n),this._ggxMaterial=rw(s,e,n)}return r}_compileMaterial(e){const n=new le(new jn,e);this._renderer.compile(n,Xo)}_sceneToCubeUV(e,n,i,r,s){const l=new Qn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,f=m.autoClear,g=m.toneMapping;m.getClearColor($m),m.toneMapping=Wi,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new le(new st,new li({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,_=w.material;let u=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,u=!0):(_.color.copy($m),u=!0);for(let v=0;v<6;v++){const M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[v],s.y,s.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[v]));const P=this._cubeSize;Hs(r,M*P,v>2?P:0,P,P),m.setRenderTarget(r),u&&m.render(w,l),m.render(e,l)}m.toneMapping=g,m.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Es||e.mapping===xo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Hs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),m=Math.sqrt(c*c-h*h),f=0+c*1.25,g=m*f,{_lodMax:S}=this,w=this._sizeLods[i],_=3*w*(i>S-Dr?i-S+Dr:0),u=4*(this._cubeSize-w);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=S-n,Hs(s,_,u,3*w,2*w),r.setRenderTarget(s),r.render(a,Xo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=S-i,Hs(e,_,u,3*w,2*w),r.setRenderTarget(e),r.render(a,Xo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const h=3,m=this._lodMeshes[r];m.material=c;const f=c.uniforms,g=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*us-1),w=s/S,_=isFinite(s)?1+Math.floor(h*w):us;_>us&&it(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${us}`);const u=[];let p=0;for(let C=0;C<us;++C){const x=C/w,b=Math.exp(-x*x/2);u.push(b),C===0?p+=b:C<_&&(p+=2*b)}for(let C=0;C<u.length;C++)u[C]=u[C]/p;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=S,f.mipInt.value=v-i;const M=this._sizeLods[r],P=3*M*(r>v-Dr?r-v+Dr:0),T=4*(this._cubeSize-M);Hs(n,P,T,3*M,2*M),l.setRenderTarget(n),l.render(m,Xo)}}function iw(t){const e=[],n=[],i=[];let r=t;const s=t-Dr+1+Ym.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Dr?l=Ym[o-t+Dr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,m=1+c,f=[h,h,m,h,m,m,h,h,m,m,h,m],g=6,S=6,w=3,_=2,u=1,p=new Float32Array(w*S*g),v=new Float32Array(_*S*g),M=new Float32Array(u*S*g);for(let T=0;T<g;T++){const C=T%3*2/3-1,x=T>2?0:-1,b=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];p.set(b,w*S*T),v.set(f,_*S*T);const L=[T,T,T,T,T,T];M.set(L,u*S*T)}const P=new jn;P.setAttribute("position",new ji(p,w)),P.setAttribute("uv",new ji(v,_)),P.setAttribute("faceIndex",new ji(M,u)),i.push(new le(P,null)),r>Dr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Km(t,e,n){const i=new Xi(t,e,n);return i.texture.mapping=Hc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function rw(t,e,n){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function sw(t,e,n){const i=new Float32Array(us),r=new G(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Zm(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Qm(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}class lv extends Xi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ev(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new st(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xn,blending:lr});s.uniforms.tEquirect.value=n;const o=new le(r,s),a=n.minFilter;return n.minFilter===ps&&(n.minFilter=Cn),new fM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function ow(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,g=!1){return f==null?null:g?o(f):s(f)}function s(f){if(f&&f.isTexture){const g=f.mapping;if(g===Eu||g===wu)if(e.has(f)){const S=e.get(f).texture;return a(S,f.mapping)}else{const S=f.image;if(S&&S.height>0){const w=new lv(S.height);return w.fromEquirectangularTexture(t,f),e.set(f,w),f.addEventListener("dispose",c),a(w.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const g=f.mapping,S=g===Eu||g===wu,w=g===Es||g===xo;if(S||w){let _=n.get(f);const u=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return i===null&&(i=new qm(t)),_=S?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),_.texture;if(_!==void 0)return _.texture;{const p=f.image;return S&&p&&p.height>0||w&&p&&l(p)?(i===null&&(i=new qm(t)),_=S?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),f.addEventListener("dispose",h),_.texture):null}}}return f}function a(f,g){return g===Eu?f.mapping=Es:g===wu&&(f.mapping=xo),f}function l(f){let g=0;const S=6;for(let w=0;w<S;w++)f[w]!==void 0&&g++;return g===S}function c(f){const g=f.target;g.removeEventListener("dispose",c);const S=e.get(g);S!==void 0&&(e.delete(g),S.dispose())}function h(f){const g=f.target;g.removeEventListener("dispose",h);const S=n.get(g);S!==void 0&&(n.delete(g),S.dispose())}function m(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:m}}function aw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Gd("WebGLRenderer: "+i+" extension not supported."),r}}}function lw(t,e,n,i){const r={},s=new WeakMap;function o(m){const f=m.target;f.index!==null&&e.remove(f.index);for(const S in f.attributes)e.remove(f.attributes[S]);f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(m,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(m){const f=m.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER)}function c(m){const f=[],g=m.index,S=m.attributes.position;let w=0;if(S===void 0)return;if(g!==null){const p=g.array;w=g.version;for(let v=0,M=p.length;v<M;v+=3){const P=p[v+0],T=p[v+1],C=p[v+2];f.push(P,T,T,C,C,P)}}else{const p=S.array;w=S.version;for(let v=0,M=p.length/3-1;v<M;v+=3){const P=v+0,T=v+1,C=v+2;f.push(P,T,T,C,C,P)}}const _=new(S.count>=65535?Z_:K_)(f,1);_.version=w;const u=s.get(m);u&&e.remove(u),s.set(m,_)}function h(m){const f=s.get(m);if(f){const g=m.index;g!==null&&f.version<g.version&&c(m)}else c(m);return s.get(m)}return{get:a,update:l,getWireframeAttribute:h}}function cw(t,e,n){let i;function r(m){i=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function l(m,f){t.drawElements(i,f,s,m*o),n.update(f,i,1)}function c(m,f,g){g!==0&&(t.drawElementsInstanced(i,f,s,m*o,g),n.update(f,i,g))}function h(m,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,m,0,g);let w=0;for(let _=0;_<g;_++)w+=f[_];n.update(w,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function uw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:At("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function fw(t,e,n){const i=new WeakMap,r=new Yt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==m){let L=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",L)};var g=L;f!==void 0&&f.texture.dispose();const S=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;S===!0&&(M=1),w===!0&&(M=2),_===!0&&(M=3);let P=a.attributes.position.count*M,T=1;P>e.maxTextureSize&&(T=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const C=new Float32Array(P*T*4*m),x=new Y_(C,P,T,m);x.type=zi,x.needsUpdate=!0;const b=M*4;for(let D=0;D<m;D++){const O=u[D],j=p[D],Q=v[D],F=P*T*4*D;for(let Y=0;Y<O.count;Y++){const V=Y*b;S===!0&&(r.fromBufferAttribute(O,Y),C[F+V+0]=r.x,C[F+V+1]=r.y,C[F+V+2]=r.z,C[F+V+3]=0),w===!0&&(r.fromBufferAttribute(j,Y),C[F+V+4]=r.x,C[F+V+5]=r.y,C[F+V+6]=r.z,C[F+V+7]=0),_===!0&&(r.fromBufferAttribute(Q,Y),C[F+V+8]=r.x,C[F+V+9]=r.y,C[F+V+10]=r.z,C[F+V+11]=Q.itemSize===4?r.w:1)}}f={count:m,texture:x,size:new Tt(P,T)},i.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let S=0;for(let _=0;_<c.length;_++)S+=c[_];const w=a.morphTargetsRelative?1:1-S;l.getUniforms().setValue(t,"morphTargetBaseInfluence",w),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function dw(t,e,n,i,r){let s=new WeakMap;function o(c){const h=r.render.frame,m=c.geometry,f=e.get(c,m);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const g=c.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return f}function a(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}const hw={[D_]:"LINEAR_TONE_MAPPING",[Gh]:"REINHARD_TONE_MAPPING",[I_]:"CINEON_TONE_MAPPING",[N_]:"ACES_FILMIC_TONE_MAPPING",[F_]:"AGX_TONE_MAPPING",[O_]:"NEUTRAL_TONE_MAPPING",[U_]:"CUSTOM_TONE_MAPPING"};function pw(t,e,n,i,r){const s=new Xi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new So(e,n):void 0}),o=new Xi(e,n,{type:pr,depthBuffer:!1,stencilBuffer:!1}),a=new jn;a.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new an([0,2,0,0,2,0],2));const l=new sM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new le(a,l),h=new sv(-1,1,1,-1,0,1);let m=null,f=null,g=!1,S,w=null,_=[],u=!1;this.setSize=function(p,v){s.setSize(p,v),o.setSize(p,v);for(let M=0;M<_.length;M++){const P=_[M];P.setSize&&P.setSize(p,v)}},this.setEffects=function(p){_=p,u=_.length>0&&_[0].isRenderPass===!0;const v=s.width,M=s.height;for(let P=0;P<_.length;P++){const T=_[P];T.setSize&&T.setSize(v,M)}},this.begin=function(p,v){if(g||p.toneMapping===Wi&&_.length===0)return!1;if(w=v,v!==null){const M=v.width,P=v.height;(s.width!==M||s.height!==P)&&this.setSize(M,P)}return u===!1&&p.setRenderTarget(s),S=p.toneMapping,p.toneMapping=Wi,!0},this.hasRenderPass=function(){return u},this.end=function(p,v){p.toneMapping=S,g=!0;let M=s,P=o;for(let T=0;T<_.length;T++){const C=_[T];if(C.enabled!==!1&&(C.render(p,P,M,v),C.needsSwap!==!1)){const x=M;M=P,P=x}}if(m!==p.outputColorSpace||f!==p.toneMapping){m=p.outputColorSpace,f=p.toneMapping,l.defines={},Et.getTransfer(m)===Dt&&(l.defines.SRGB_TRANSFER="");const T=hw[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,p.setRenderTarget(w),p.render(c,h),w=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const cv=new bn,Wd=new So(1,1),uv=new Y_,fv=new Ny,dv=new ev,Jm=[],e0=[],t0=new Float32Array(16),n0=new Float32Array(9),i0=new Float32Array(4);function Ro(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Jm[r];if(s===void 0&&(s=new Float32Array(r),Jm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function ln(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function cn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function jc(t,e){let n=e0[e];n===void 0&&(n=new Int32Array(e),e0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ln(n,e))return;t.uniform2fv(this.addr,e),cn(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ln(n,e))return;t.uniform3fv(this.addr,e),cn(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ln(n,e))return;t.uniform4fv(this.addr,e),cn(n,e)}}function xw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ln(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),cn(n,e)}else{if(ln(n,i))return;i0.set(i),t.uniformMatrix2fv(this.addr,!1,i0),cn(n,i)}}function Sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ln(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),cn(n,e)}else{if(ln(n,i))return;n0.set(i),t.uniformMatrix3fv(this.addr,!1,n0),cn(n,i)}}function yw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ln(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),cn(n,e)}else{if(ln(n,i))return;t0.set(i),t.uniformMatrix4fv(this.addr,!1,t0),cn(n,i)}}function Mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ln(n,e))return;t.uniform2iv(this.addr,e),cn(n,e)}}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ln(n,e))return;t.uniform3iv(this.addr,e),cn(n,e)}}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ln(n,e))return;t.uniform4iv(this.addr,e),cn(n,e)}}function Aw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ln(n,e))return;t.uniform2uiv(this.addr,e),cn(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ln(n,e))return;t.uniform3uiv(this.addr,e),cn(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ln(n,e))return;t.uniform4uiv(this.addr,e),cn(n,e)}}function Pw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Wd.compareFunction=n.isReversedDepthBuffer()?qh:$h,s=Wd):s=cv,n.setTexture2D(e||s,r)}function Lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||fv,r)}function Dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||dv,r)}function Iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||uv,r)}function Nw(t){switch(t){case 5126:return mw;case 35664:return gw;case 35665:return _w;case 35666:return vw;case 35674:return xw;case 35675:return Sw;case 35676:return yw;case 5124:case 35670:return Mw;case 35667:case 35671:return Ew;case 35668:case 35672:return ww;case 35669:case 35673:return Tw;case 5125:return Aw;case 36294:return Rw;case 36295:return Cw;case 36296:return bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Pw;case 35679:case 36299:case 36307:return Lw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Iw}}function Uw(t,e){t.uniform1fv(this.addr,e)}function Fw(t,e){const n=Ro(e,this.size,2);t.uniform2fv(this.addr,n)}function Ow(t,e){const n=Ro(e,this.size,3);t.uniform3fv(this.addr,n)}function Bw(t,e){const n=Ro(e,this.size,4);t.uniform4fv(this.addr,n)}function kw(t,e){const n=Ro(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function zw(t,e){const n=Ro(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Gw(t,e){const n=Ro(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Vw(t,e){t.uniform1iv(this.addr,e)}function Hw(t,e){t.uniform2iv(this.addr,e)}function Ww(t,e){t.uniform3iv(this.addr,e)}function Xw(t,e){t.uniform4iv(this.addr,e)}function jw(t,e){t.uniform1uiv(this.addr,e)}function Yw(t,e){t.uniform2uiv(this.addr,e)}function $w(t,e){t.uniform3uiv(this.addr,e)}function qw(t,e){t.uniform4uiv(this.addr,e)}function Kw(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);ln(i,s)||(t.uniform1iv(this.addr,s),cn(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Wd:o=cv;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function Zw(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);ln(i,s)||(t.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||fv,s[o])}function Qw(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);ln(i,s)||(t.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||dv,s[o])}function Jw(t,e,n){const i=this.cache,r=e.length,s=jc(n,r);ln(i,s)||(t.uniform1iv(this.addr,s),cn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||uv,s[o])}function eT(t){switch(t){case 5126:return Uw;case 35664:return Fw;case 35665:return Ow;case 35666:return Bw;case 35674:return kw;case 35675:return zw;case 35676:return Gw;case 5124:case 35670:return Vw;case 35667:case 35671:return Hw;case 35668:case 35672:return Ww;case 35669:case 35673:return Xw;case 5125:return jw;case 36294:return Yw;case 36295:return $w;case 36296:return qw;case 35678:case 36198:case 36298:case 36306:case 35682:return Kw;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return Jw}}class tT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Nw(n.type)}}class nT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eT(n.type)}}class iT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function r0(t,e){t.seq.push(e),t.map[e.id]=e}function rT(t,e,n){const i=t.name,r=i.length;for(tf.lastIndex=0;;){const s=tf.exec(i),o=tf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){r0(n,c===void 0?new tT(a,t,e):new nT(a,t,e));break}else{let m=n.map[a];m===void 0&&(m=new iT(a),r0(n,m)),n=m}}}class ql{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);rT(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function s0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const sT=37297;let oT=0;function aT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const o0=new at;function lT(t){Et._getMatrix(o0,Et.workingColorSpace,t);const e=`mat3( ${o0.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(t)){case Ec:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function a0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+aT(t.getShaderSource(e),a)}else return s}function cT(t,e){const n=lT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const uT={[D_]:"Linear",[Gh]:"Reinhard",[I_]:"Cineon",[N_]:"ACESFilmic",[F_]:"AgX",[O_]:"Neutral",[U_]:"Custom"};function fT(t,e){const n=uT[e];return n===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Pl=new G;function dT(){Et.getLuminanceCoefficients(Pl);const t=Pl.x.toFixed(4),e=Pl.y.toFixed(4),n=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function pT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ea(t){return t!==""}function l0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function c0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(t){return t.replace(gT,vT)}const _T=new Map;function vT(t,e){let n=mt[e];if(n===void 0){const i=_T.get(e);if(i!==void 0)n=mt[i],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xd(n)}const xT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u0(t){return t.replace(xT,ST)}function ST(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function f0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const yT={[Wl]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function MT(t){return yT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ET={[Es]:"ENVMAP_TYPE_CUBE",[xo]:"ENVMAP_TYPE_CUBE",[Hc]:"ENVMAP_TYPE_CUBE_UV"};function wT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":ET[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const TT={[xo]:"ENVMAP_MODE_REFRACTION"};function AT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":TT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RT={[L_]:"ENVMAP_BLENDING_MULTIPLY",[hy]:"ENVMAP_BLENDING_MIX",[py]:"ENVMAP_BLENDING_ADD"};function CT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":RT[t.combine]||"ENVMAP_BLENDING_NONE"}function bT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function PT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=MT(n),c=wT(n),h=AT(n),m=CT(n),f=bT(n),g=hT(n),S=pT(s),w=r.createProgram();let _,u,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(ea).join(`
`),_.length>0&&(_+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(ea).join(`
`),u.length>0&&(u+=`
`)):(_=[f0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),u=[f0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?mt.tonemapping_pars_fragment:"",n.toneMapping!==Wi?fT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,cT("linearToOutputTexel",n.outputColorSpace),dT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ea).join(`
`)),o=Xd(o),o=l0(o,n),o=c0(o,n),a=Xd(a),a=l0(a,n),a=c0(a,n),o=u0(o),a=u0(a),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,u=["#define varying in",n.glslVersion===ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=p+_+o,M=p+u+a,P=s0(r,r.VERTEX_SHADER,v),T=s0(r,r.FRAGMENT_SHADER,M);r.attachShader(w,P),r.attachShader(w,T),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function C(D){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(w)||"",j=r.getShaderInfoLog(P)||"",Q=r.getShaderInfoLog(T)||"",F=O.trim(),Y=j.trim(),V=Q.trim();let H=!0,J=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,w,P,T);else{const te=a0(r,P,"vertex"),Ee=a0(r,T,"fragment");At("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+te+`
`+Ee)}else F!==""?it("WebGLProgram: Program Info Log:",F):(Y===""||V==="")&&(J=!1);J&&(D.diagnostics={runnable:H,programLog:F,vertexShader:{log:Y,prefix:_},fragmentShader:{log:V,prefix:u}})}r.deleteShader(P),r.deleteShader(T),x=new ql(r,w),b=mT(r,w)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(w,sT)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=oT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=T,this}let LT=0;class DT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new IT(e),n.set(e,i)),i}}class IT{constructor(e){this.id=LT++,this.code=e,this.usedTimes=0}}function NT(t){return t===ws||t===Sc||t===yc}function UT(t,e,n,i,r,s){const o=new $_,a=new DT,l=new Set,c=[],h=new Map,m=i.logarithmicDepthBuffer;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(x){return l.add(x),x===0?"uv":`uv${x}`}function w(x,b,L,D,O,j){const Q=D.fog,F=O.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||Y,V),J=H&&H.mapping===Hc?H.image.height:null,te=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&it("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const Ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ce=Ee!==void 0?Ee.length:0;let ot=0;F.morphAttributes.position!==void 0&&(ot=1),F.morphAttributes.normal!==void 0&&(ot=2),F.morphAttributes.color!==void 0&&(ot=3);let ft,et,d,k;if(te){const Be=Oi[te];ft=Be.vertexShader,et=Be.fragmentShader}else ft=x.vertexShader,et=x.fragmentShader,a.update(x),d=a.getVertexShaderID(x),k=a.getFragmentShaderID(x);const $=t.getRenderTarget(),ce=t.state.buffers.depth.getReversed(),re=O.isInstancedMesh===!0,de=O.isBatchedMesh===!0,Ve=!!x.map,Fe=!!x.matcap,se=!!H,We=!!x.aoMap,ze=!!x.lightMap,Ae=!!x.bumpMap,Me=!!x.normalMap,dt=!!x.displacementMap,A=!!x.emissiveMap,ge=!!x.metalnessMap,Le=!!x.roughnessMap,Ue=x.anisotropy>0,oe=x.clearcoat>0,Mt=x.dispersion>0,R=x.iridescence>0,y=x.sheen>0,z=x.transmission>0,Z=Ue&&!!x.anisotropyMap,ae=oe&&!!x.clearcoatMap,X=oe&&!!x.clearcoatNormalMap,ie=oe&&!!x.clearcoatRoughnessMap,q=R&&!!x.iridescenceMap,ee=R&&!!x.iridescenceThicknessMap,he=y&&!!x.sheenColorMap,be=y&&!!x.sheenRoughnessMap,pe=!!x.specularMap,fe=!!x.specularColorMap,Ze=!!x.specularIntensityMap,qe=z&&!!x.transmissionMap,$e=z&&!!x.thicknessMap,I=!!x.gradientMap,ue=!!x.alphaMap,K=x.alphaTest>0,Pe=!!x.alphaHash,_e=!!x.extensions;let ne=Wi;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ne=t.toneMapping);const De={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:ft,fragmentShader:et,defines:x.defines,customVertexShaderID:d,customFragmentShaderID:k,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:de,batchingColor:de&&O._colorsTexture!==null,instancing:re,instancingColor:re&&O.instanceColor!==null,instancingMorph:re&&O.morphTexture!==null,outputColorSpace:$===null?t.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ve,matcap:Fe,envMap:se,envMapMode:se&&H.mapping,envMapCubeUVHeight:J,aoMap:We,lightMap:ze,bumpMap:Ae,normalMap:Me,displacementMap:dt,emissiveMap:A,normalMapObjectSpace:Me&&x.normalMapType===_y,normalMapTangentSpace:Me&&x.normalMapType===zd,packedNormalMap:Me&&x.normalMapType===zd&&NT(x.normalMap.format),metalnessMap:ge,roughnessMap:Le,anisotropy:Ue,anisotropyMap:Z,clearcoat:oe,clearcoatMap:ae,clearcoatNormalMap:X,clearcoatRoughnessMap:ie,dispersion:Mt,iridescence:R,iridescenceMap:q,iridescenceThicknessMap:ee,sheen:y,sheenColorMap:he,sheenRoughnessMap:be,specularMap:pe,specularColorMap:fe,specularIntensityMap:Ze,transmission:z,transmissionMap:qe,thicknessMap:$e,gradientMap:I,opaque:x.transparent===!1&&x.blending===lo&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:K,alphaHash:Pe,combine:x.combine,mapUv:Ve&&S(x.map.channel),aoMapUv:We&&S(x.aoMap.channel),lightMapUv:ze&&S(x.lightMap.channel),bumpMapUv:Ae&&S(x.bumpMap.channel),normalMapUv:Me&&S(x.normalMap.channel),displacementMapUv:dt&&S(x.displacementMap.channel),emissiveMapUv:A&&S(x.emissiveMap.channel),metalnessMapUv:ge&&S(x.metalnessMap.channel),roughnessMapUv:Le&&S(x.roughnessMap.channel),anisotropyMapUv:Z&&S(x.anisotropyMap.channel),clearcoatMapUv:ae&&S(x.clearcoatMap.channel),clearcoatNormalMapUv:X&&S(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&S(x.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&S(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&S(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&S(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&S(x.sheenRoughnessMap.channel),specularMapUv:pe&&S(x.specularMap.channel),specularColorMapUv:fe&&S(x.specularColorMap.channel),specularIntensityMapUv:Ze&&S(x.specularIntensityMap.channel),transmissionMapUv:qe&&S(x.transmissionMap.channel),thicknessMapUv:$e&&S(x.thicknessMap.channel),alphaMapUv:ue&&S(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Me||Ue),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(Ve||ue),fog:!!Q,useFog:x.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&Me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ce,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:ot,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ve&&x.map.isVideoTexture===!0&&Et.getTransfer(x.map.colorSpace)===Dt,decodeVideoTextureEmissive:A&&x.emissiveMap.isVideoTexture===!0&&Et.getTransfer(x.emissiveMap.colorSpace)===Dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ki,flipSided:x.side===Xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_e&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&x.extensions.multiDraw===!0||de)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function _(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(u(b,x),p(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function u(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function p(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),x.push(o.mask)}function v(x){const b=g[x.type];let L;if(b){const D=Oi[b];L=nM.clone(D.uniforms)}else L=x.uniforms;return L}function M(x,b){let L=h.get(b);return L!==void 0?++L.usedTimes:(L=new PT(t,b,x,r),c.push(L),h.set(b,L)),L}function P(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function C(){a.dispose()}return{getParameters:w,getProgramCacheKey:_,getUniforms:v,acquireProgram:M,releaseProgram:P,releaseShaderCache:T,programs:c,dispose:C}}function FT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function OT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function d0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function h0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let g=0;return f.isInstancedMesh&&(g+=2),f.isSkinnedMesh&&(g+=1),g}function a(f,g,S,w,_,u){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:g,material:S,materialVariant:o(f),groupOrder:w,renderOrder:f.renderOrder,z:_,group:u},t[e]=p):(p.id=f.id,p.object=f,p.geometry=g,p.material=S,p.materialVariant=o(f),p.groupOrder=w,p.renderOrder=f.renderOrder,p.z=_,p.group=u),e++,p}function l(f,g,S,w,_,u){const p=a(f,g,S,w,_,u);S.transmission>0?i.push(p):S.transparent===!0?r.push(p):n.push(p)}function c(f,g,S,w,_,u){const p=a(f,g,S,w,_,u);S.transmission>0?i.unshift(p):S.transparent===!0?r.unshift(p):n.unshift(p)}function h(f,g){n.length>1&&n.sort(f||OT),i.length>1&&i.sort(g||d0),r.length>1&&r.sort(g||d0)}function m(){for(let f=e,g=t.length;f<g;f++){const S=t[f];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:m,sort:h}}function BT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new h0,t.set(i,[o])):r>=s.length?(o=new h0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function kT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new xt};break;case"SpotLight":n={position:new G,direction:new G,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function zT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let GT=0;function VT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function HT(t){const e=new kT,n=zT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new $t,o=new $t;function a(c){let h=0,m=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let g=0,S=0,w=0,_=0,u=0,p=0,v=0,M=0,P=0,T=0,C=0;c.sort(VT);for(let b=0,L=c.length;b<L;b++){const D=c[b],O=D.color,j=D.intensity,Q=D.distance;let F=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ws?F=D.shadow.map.texture:F=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*j,m+=O.g*j,f+=O.b*j;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],j);C++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const V=D.shadow,H=n.get(D);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,i.directionalShadow[g]=H,i.directionalShadowMap[g]=F,i.directionalShadowMatrix[g]=D.shadow.matrix,p++}i.directional[g]=Y,g++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(O).multiplyScalar(j),Y.distance=Q,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[w]=Y;const V=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,V.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[w]=V.matrix,D.castShadow){const H=n.get(D);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,i.spotShadow[w]=H,i.spotShadowMap[w]=F,M++}w++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(O).multiplyScalar(j),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=Y,_++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const V=D.shadow,H=n.get(D);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,i.pointShadow[S]=H,i.pointShadowMap[S]=F,i.pointShadowMatrix[S]=D.shadow.matrix,v++}i.point[S]=Y,S++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(j),Y.groundColor.copy(D.groundColor).multiplyScalar(j),i.hemi[u]=Y,u++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==g||x.pointLength!==S||x.spotLength!==w||x.rectAreaLength!==_||x.hemiLength!==u||x.numDirectionalShadows!==p||x.numPointShadows!==v||x.numSpotShadows!==M||x.numSpotMaps!==P||x.numLightProbes!==C)&&(i.directional.length=g,i.spot.length=w,i.rectArea.length=_,i.point.length=S,i.hemi.length=u,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,x.directionalLength=g,x.pointLength=S,x.spotLength=w,x.rectAreaLength=_,x.hemiLength=u,x.numDirectionalShadows=p,x.numPointShadows=v,x.numSpotShadows=M,x.numSpotMaps=P,x.numLightProbes=C,i.version=GT++)}function l(c,h){let m=0,f=0,g=0,S=0,w=0;const _=h.matrixWorldInverse;for(let u=0,p=c.length;u<p;u++){const v=c[u];if(v.isDirectionalLight){const M=i.directional[m];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),m++}else if(v.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const M=i.rectArea[S];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),o.identity(),s.copy(v.matrixWorld),s.premultiply(_),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),S++}else if(v.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),f++}else if(v.isHemisphereLight){const M=i.hemi[w];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(_),w++}}}return{setup:a,setupView:l,state:i}}function p0(t){const e=new HT(t),n=[],i=[],r=[];function s(f){m.camera=f,n.length=0,i.length=0,r.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function h(f){e.setupView(n,f)}const m={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:m,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function WT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new p0(t),e.set(r,[a])):s>=o.length?(a=new p0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const XT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jT=`uniform sampler2D shadow_pass;
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
}`,YT=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],$T=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],m0=new $t,jo=new G,nf=new G;function qT(t,e,n){let i=new Qh;const r=new Tt,s=new Tt,o=new Yt,a=new oM,l=new aM,c={},h=n.maxTextureSize,m={[Hr]:Xn,[Xn]:Hr,[ki]:ki},f=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:XT,fragmentShader:jT}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const S=new jn;S.setAttribute("position",new ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new le(S,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let u=this.type;this.render=function(T,C,x){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;this.type===P_&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wl);const b=t.getRenderTarget(),L=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),O=t.state;O.setBlending(lr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const j=u!==this.type;j&&C.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(F=>F.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,F=T.length;Q<F;Q++){const Y=T[Q],V=Y.shadow;if(V===void 0){it("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const H=V.getFrameExtents();r.multiply(H),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/H.x),r.x=s.x*H.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/H.y),r.y=s.y*H.y,V.mapSize.y=s.y));const J=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=J,V.map===null||j===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Jo){if(Y.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Xi(r.x,r.y,{format:ws,type:pr,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new So(r.x,r.y,zi),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=mr,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=vn,V.map.depthTexture.magFilter=vn}else Y.isPointLight?(V.map=new lv(r.x),V.map.depthTexture=new eM(r.x,Yi)):(V.map=new Xi(r.x,r.y),V.map.depthTexture=new So(r.x,r.y,Yi)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=mr,this.type===Wl?(V.map.depthTexture.compareFunction=J?qh:$h,V.map.depthTexture.minFilter=Cn,V.map.depthTexture.magFilter=Cn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=vn,V.map.depthTexture.magFilter=vn);V.camera.updateProjectionMatrix()}const te=V.map.isWebGLCubeRenderTarget?6:1;for(let Ee=0;Ee<te;Ee++){if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,Ee),t.clear();else{Ee===0&&(t.setRenderTarget(V.map),t.clear());const Ce=V.getViewport(Ee);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),O.viewport(o)}if(Y.isPointLight){const Ce=V.camera,ot=V.matrix,ft=Y.distance||Ce.far;ft!==Ce.far&&(Ce.far=ft,Ce.updateProjectionMatrix()),jo.setFromMatrixPosition(Y.matrixWorld),Ce.position.copy(jo),nf.copy(Ce.position),nf.add(YT[Ee]),Ce.up.copy($T[Ee]),Ce.lookAt(nf),Ce.updateMatrixWorld(),ot.makeTranslation(-jo.x,-jo.y,-jo.z),m0.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),V._frustum.setFromProjectionMatrix(m0,Ce.coordinateSystem,Ce.reversedDepth)}else V.updateMatrices(Y);i=V.getFrustum(),M(C,x,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Jo&&p(V,x),V.needsUpdate=!1}u=this.type,_.needsUpdate=!1,t.setRenderTarget(b,L,D)};function p(T,C){const x=e.update(w);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Xi(r.x,r.y,{format:ws,type:pr})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,x,f,w,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,x,g,w,null)}function v(T,C,x,b){let L=null;const D=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)L=D;else if(L=x.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=L.uuid,j=C.uuid;let Q=c[O];Q===void 0&&(Q={},c[O]=Q);let F=Q[j];F===void 0&&(F=L.clone(),Q[j]=F,C.addEventListener("dispose",P)),L=F}if(L.visible=C.visible,L.wireframe=C.wireframe,b===Jo?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:m[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const O=t.properties.get(L);O.light=x}return L}function M(T,C,x,b,L){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===Jo)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const j=e.update(T),Q=T.material;if(Array.isArray(Q)){const F=j.groups;for(let Y=0,V=F.length;Y<V;Y++){const H=F[Y],J=Q[H.materialIndex];if(J&&J.visible){const te=v(T,J,b,L);T.onBeforeShadow(t,T,C,x,j,te,H),t.renderBufferDirect(x,null,j,te,T,H),T.onAfterShadow(t,T,C,x,j,te,H)}}}else if(Q.visible){const F=v(T,Q,b,L);T.onBeforeShadow(t,T,C,x,j,F,null),t.renderBufferDirect(x,null,j,F,T,null),T.onAfterShadow(t,T,C,x,j,F,null)}}const O=T.children;for(let j=0,Q=O.length;j<Q;j++)M(O[j],C,x,b,L)}function P(T){T.target.removeEventListener("dispose",P);for(const x in c){const b=c[x],L=T.target.uuid;L in b&&(b[L].dispose(),delete b[L])}}}function KT(t,e){function n(){let I=!1;const ue=new Yt;let K=null;const Pe=new Yt(0,0,0,0);return{setMask:function(_e){K!==_e&&!I&&(t.colorMask(_e,_e,_e,_e),K=_e)},setLocked:function(_e){I=_e},setClear:function(_e,ne,De,Be,_t){_t===!0&&(_e*=Be,ne*=Be,De*=Be),ue.set(_e,ne,De,Be),Pe.equals(ue)===!1&&(t.clearColor(_e,ne,De,Be),Pe.copy(ue))},reset:function(){I=!1,K=null,Pe.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,K=null,Pe=null,_e=null;return{setReversed:function(ne){if(ue!==ne){const De=e.get("EXT_clip_control");ne?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),ue=ne;const Be=_e;_e=null,this.setClear(Be)}},getReversed:function(){return ue},setTest:function(ne){ne?$(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(ne){K!==ne&&!I&&(t.depthMask(ne),K=ne)},setFunc:function(ne){if(ue&&(ne=Ry[ne]),Pe!==ne){switch(ne){case td:t.depthFunc(t.NEVER);break;case nd:t.depthFunc(t.ALWAYS);break;case id:t.depthFunc(t.LESS);break;case vo:t.depthFunc(t.LEQUAL);break;case rd:t.depthFunc(t.EQUAL);break;case sd:t.depthFunc(t.GEQUAL);break;case od:t.depthFunc(t.GREATER);break;case ad:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Pe=ne}},setLocked:function(ne){I=ne},setClear:function(ne){_e!==ne&&(_e=ne,ue&&(ne=1-ne),t.clearDepth(ne))},reset:function(){I=!1,K=null,Pe=null,_e=null,ue=!1}}}function r(){let I=!1,ue=null,K=null,Pe=null,_e=null,ne=null,De=null,Be=null,_t=null;return{setTest:function(Ke){I||(Ke?$(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Ke){ue!==Ke&&!I&&(t.stencilMask(Ke),ue=Ke)},setFunc:function(Ke,Ut,Bt){(K!==Ke||Pe!==Ut||_e!==Bt)&&(t.stencilFunc(Ke,Ut,Bt),K=Ke,Pe=Ut,_e=Bt)},setOp:function(Ke,Ut,Bt){(ne!==Ke||De!==Ut||Be!==Bt)&&(t.stencilOp(Ke,Ut,Bt),ne=Ke,De=Ut,Be=Bt)},setLocked:function(Ke){I=Ke},setClear:function(Ke){_t!==Ke&&(t.clearStencil(Ke),_t=Ke)},reset:function(){I=!1,ue=null,K=null,Pe=null,_e=null,ne=null,De=null,Be=null,_t=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},m={},f={},g=new WeakMap,S=[],w=null,_=!1,u=null,p=null,v=null,M=null,P=null,T=null,C=null,x=new xt(0,0,0),b=0,L=!1,D=null,O=null,j=null,Q=null,F=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,H=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=H>=2);let te=null,Ee={};const Ce=t.getParameter(t.SCISSOR_BOX),ot=t.getParameter(t.VIEWPORT),ft=new Yt().fromArray(Ce),et=new Yt().fromArray(ot);function d(I,ue,K,Pe){const _e=new Uint8Array(4),ne=t.createTexture();t.bindTexture(I,ne),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let De=0;De<K;De++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,Pe,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(ue+De,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return ne}const k={};k[t.TEXTURE_2D]=d(t.TEXTURE_2D,t.TEXTURE_2D,1),k[t.TEXTURE_CUBE_MAP]=d(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[t.TEXTURE_2D_ARRAY]=d(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),k[t.TEXTURE_3D]=d(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(t.DEPTH_TEST),o.setFunc(vo),Ae(!1),Me(gm),$(t.CULL_FACE),We(lr);function $(I){h[I]!==!0&&(t.enable(I),h[I]=!0)}function ce(I){h[I]!==!1&&(t.disable(I),h[I]=!1)}function re(I,ue){return f[I]!==ue?(t.bindFramebuffer(I,ue),f[I]=ue,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ue),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function de(I,ue){let K=S,Pe=!1;if(I){K=g.get(ue),K===void 0&&(K=[],g.set(ue,K));const _e=I.textures;if(K.length!==_e.length||K[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,De=_e.length;ne<De;ne++)K[ne]=t.COLOR_ATTACHMENT0+ne;K.length=_e.length,Pe=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,Pe=!0);Pe&&t.drawBuffers(K)}function Ve(I){return w!==I?(t.useProgram(I),w=I,!0):!1}const Fe={[as]:t.FUNC_ADD,[KS]:t.FUNC_SUBTRACT,[ZS]:t.FUNC_REVERSE_SUBTRACT};Fe[QS]=t.MIN,Fe[JS]=t.MAX;const se={[ey]:t.ZERO,[ty]:t.ONE,[ny]:t.SRC_COLOR,[Jf]:t.SRC_ALPHA,[ly]:t.SRC_ALPHA_SATURATE,[oy]:t.DST_COLOR,[ry]:t.DST_ALPHA,[iy]:t.ONE_MINUS_SRC_COLOR,[ed]:t.ONE_MINUS_SRC_ALPHA,[ay]:t.ONE_MINUS_DST_COLOR,[sy]:t.ONE_MINUS_DST_ALPHA,[cy]:t.CONSTANT_COLOR,[uy]:t.ONE_MINUS_CONSTANT_COLOR,[fy]:t.CONSTANT_ALPHA,[dy]:t.ONE_MINUS_CONSTANT_ALPHA};function We(I,ue,K,Pe,_e,ne,De,Be,_t,Ke){if(I===lr){_===!0&&(ce(t.BLEND),_=!1);return}if(_===!1&&($(t.BLEND),_=!0),I!==qS){if(I!==u||Ke!==L){if((p!==as||P!==as)&&(t.blendEquation(t.FUNC_ADD),p=as,P=as),Ke)switch(I){case lo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case os:t.blendFunc(t.ONE,t.ONE);break;case _m:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:At("WebGLState: Invalid blending: ",I);break}else switch(I){case lo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case _m:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vm:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",I);break}v=null,M=null,T=null,C=null,x.set(0,0,0),b=0,u=I,L=Ke}return}_e=_e||ue,ne=ne||K,De=De||Pe,(ue!==p||_e!==P)&&(t.blendEquationSeparate(Fe[ue],Fe[_e]),p=ue,P=_e),(K!==v||Pe!==M||ne!==T||De!==C)&&(t.blendFuncSeparate(se[K],se[Pe],se[ne],se[De]),v=K,M=Pe,T=ne,C=De),(Be.equals(x)===!1||_t!==b)&&(t.blendColor(Be.r,Be.g,Be.b,_t),x.copy(Be),b=_t),u=I,L=!1}function ze(I,ue){I.side===ki?ce(t.CULL_FACE):$(t.CULL_FACE);let K=I.side===Xn;ue&&(K=!K),Ae(K),I.blending===lo&&I.transparent===!1?We(lr):We(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Pe=I.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),A(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?$(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(I){D!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),D=I)}function Me(I){I!==YS?($(t.CULL_FACE),I!==O&&(I===gm?t.cullFace(t.BACK):I===$S?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),O=I}function dt(I){I!==j&&(V&&t.lineWidth(I),j=I)}function A(I,ue,K){I?($(t.POLYGON_OFFSET_FILL),(Q!==ue||F!==K)&&(Q=ue,F=K,o.getReversed()&&(ue=-ue),t.polygonOffset(ue,K))):ce(t.POLYGON_OFFSET_FILL)}function ge(I){I?$(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function Le(I){I===void 0&&(I=t.TEXTURE0+Y-1),te!==I&&(t.activeTexture(I),te=I)}function Ue(I,ue,K){K===void 0&&(te===null?K=t.TEXTURE0+Y-1:K=te);let Pe=Ee[K];Pe===void 0&&(Pe={type:void 0,texture:void 0},Ee[K]=Pe),(Pe.type!==I||Pe.texture!==ue)&&(te!==K&&(t.activeTexture(K),te=K),t.bindTexture(I,ue||k[I]),Pe.type=I,Pe.texture=ue)}function oe(){const I=Ee[te];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Mt(){try{t.compressedTexImage2D(...arguments)}catch(I){At("WebGLState:",I)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(I){At("WebGLState:",I)}}function y(){try{t.texSubImage2D(...arguments)}catch(I){At("WebGLState:",I)}}function z(){try{t.texSubImage3D(...arguments)}catch(I){At("WebGLState:",I)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(I){At("WebGLState:",I)}}function ae(){try{t.compressedTexSubImage3D(...arguments)}catch(I){At("WebGLState:",I)}}function X(){try{t.texStorage2D(...arguments)}catch(I){At("WebGLState:",I)}}function ie(){try{t.texStorage3D(...arguments)}catch(I){At("WebGLState:",I)}}function q(){try{t.texImage2D(...arguments)}catch(I){At("WebGLState:",I)}}function ee(){try{t.texImage3D(...arguments)}catch(I){At("WebGLState:",I)}}function he(I){return m[I]!==void 0?m[I]:t.getParameter(I)}function be(I,ue){m[I]!==ue&&(t.pixelStorei(I,ue),m[I]=ue)}function pe(I){ft.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ft.copy(I))}function fe(I){et.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),et.copy(I))}function Ze(I,ue){let K=c.get(ue);K===void 0&&(K=new WeakMap,c.set(ue,K));let Pe=K.get(I);Pe===void 0&&(Pe=t.getUniformBlockIndex(ue,I.name),K.set(I,Pe))}function qe(I,ue){const Pe=c.get(ue).get(I);l.get(ue)!==Pe&&(t.uniformBlockBinding(ue,Pe,I.__bindingPointIndex),l.set(ue,Pe))}function $e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},m={},te=null,Ee={},f={},g=new WeakMap,S=[],w=null,_=!1,u=null,p=null,v=null,M=null,P=null,T=null,C=null,x=new xt(0,0,0),b=0,L=!1,D=null,O=null,j=null,Q=null,F=null,ft.set(0,0,t.canvas.width,t.canvas.height),et.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:$,disable:ce,bindFramebuffer:re,drawBuffers:de,useProgram:Ve,setBlending:We,setMaterial:ze,setFlipSided:Ae,setCullFace:Me,setLineWidth:dt,setPolygonOffset:A,setScissorTest:ge,activeTexture:Le,bindTexture:Ue,unbindTexture:oe,compressedTexImage2D:Mt,compressedTexImage3D:R,texImage2D:q,texImage3D:ee,pixelStorei:be,getParameter:he,updateUBOMapping:Ze,uniformBlockBinding:qe,texStorage2D:X,texStorage3D:ie,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:Z,compressedTexSubImage3D:ae,scissor:pe,viewport:fe,reset:$e}}function ZT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap,m=new Set;let f;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(R,y){return S?new OffscreenCanvas(R,y):wc("canvas")}function _(R,y,z){let Z=1;const ae=Mt(R);if((ae.width>z||ae.height>z)&&(Z=z/Math.max(ae.width,ae.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(Z*ae.width),ie=Math.floor(Z*ae.height);f===void 0&&(f=w(X,ie));const q=y?w(X,ie):f;return q.width=X,q.height=ie,q.getContext("2d").drawImage(R,0,0,X,ie),it("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+X+"x"+ie+")."),q}else return"data"in R&&it("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function u(R){return R.generateMipmaps}function p(R){t.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(R,y,z,Z,ae,X=!1){if(R!==null){if(t[R]!==void 0)return t[R];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie;Z&&(ie=e.get("EXT_texture_norm16"),ie||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=y;if(y===t.RED&&(z===t.FLOAT&&(q=t.R32F),z===t.HALF_FLOAT&&(q=t.R16F),z===t.UNSIGNED_BYTE&&(q=t.R8),z===t.UNSIGNED_SHORT&&ie&&(q=ie.R16_EXT),z===t.SHORT&&ie&&(q=ie.R16_SNORM_EXT)),y===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.R8UI),z===t.UNSIGNED_SHORT&&(q=t.R16UI),z===t.UNSIGNED_INT&&(q=t.R32UI),z===t.BYTE&&(q=t.R8I),z===t.SHORT&&(q=t.R16I),z===t.INT&&(q=t.R32I)),y===t.RG&&(z===t.FLOAT&&(q=t.RG32F),z===t.HALF_FLOAT&&(q=t.RG16F),z===t.UNSIGNED_BYTE&&(q=t.RG8),z===t.UNSIGNED_SHORT&&ie&&(q=ie.RG16_EXT),z===t.SHORT&&ie&&(q=ie.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RG8UI),z===t.UNSIGNED_SHORT&&(q=t.RG16UI),z===t.UNSIGNED_INT&&(q=t.RG32UI),z===t.BYTE&&(q=t.RG8I),z===t.SHORT&&(q=t.RG16I),z===t.INT&&(q=t.RG32I)),y===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RGB8UI),z===t.UNSIGNED_SHORT&&(q=t.RGB16UI),z===t.UNSIGNED_INT&&(q=t.RGB32UI),z===t.BYTE&&(q=t.RGB8I),z===t.SHORT&&(q=t.RGB16I),z===t.INT&&(q=t.RGB32I)),y===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),z===t.UNSIGNED_INT&&(q=t.RGBA32UI),z===t.BYTE&&(q=t.RGBA8I),z===t.SHORT&&(q=t.RGBA16I),z===t.INT&&(q=t.RGBA32I)),y===t.RGB&&(z===t.UNSIGNED_SHORT&&ie&&(q=ie.RGB16_EXT),z===t.SHORT&&ie&&(q=ie.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),y===t.RGBA){const ee=X?Ec:Et.getTransfer(ae);z===t.FLOAT&&(q=t.RGBA32F),z===t.HALF_FLOAT&&(q=t.RGBA16F),z===t.UNSIGNED_BYTE&&(q=ee===Dt?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&ie&&(q=ie.RGBA16_EXT),z===t.SHORT&&ie&&(q=ie.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function P(R,y){let z;return R?y===null||y===Yi||y===Ca?z=t.DEPTH24_STENCIL8:y===zi?z=t.DEPTH32F_STENCIL8:y===Ra&&(z=t.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Yi||y===Ca?z=t.DEPTH_COMPONENT24:y===zi?z=t.DEPTH_COMPONENT32F:y===Ra&&(z=t.DEPTH_COMPONENT16),z}function T(R,y){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==vn&&R.minFilter!==Cn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function C(R){const y=R.target;y.removeEventListener("dispose",C),b(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&m.delete(y)}function x(R){const y=R.target;y.removeEventListener("dispose",x),D(y)}function b(R){const y=i.get(R);if(y.__webglInit===void 0)return;const z=R.source,Z=g.get(z);if(Z){const ae=Z[y.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&L(R),Object.keys(Z).length===0&&g.delete(z)}i.remove(R)}function L(R){const y=i.get(R);t.deleteTexture(y.__webglTexture);const z=R.source,Z=g.get(z);delete Z[y.__cacheKey],o.memory.textures--}function D(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let ae=0;ae<y.__webglFramebuffer[Z].length;ae++)t.deleteFramebuffer(y.__webglFramebuffer[Z][ae]);else t.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)t.deleteFramebuffer(y.__webglFramebuffer[Z]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=R.textures;for(let Z=0,ae=z.length;Z<ae;Z++){const X=i.get(z[Z]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(z[Z])}i.remove(R)}let O=0;function j(){O=0}function Q(){return O}function F(R){O=R}function Y(){const R=O;return R>=r.maxTextures&&it("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function V(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function H(R,y){const z=i.get(R);if(R.isVideoTexture&&Ue(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const Z=R.image;if(Z===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(z,R,y);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+y)}function J(R,y){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){ce(z,R,y);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+y)}function te(R,y){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){ce(z,R,y);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+y)}function Ee(R,y){const z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){re(z,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+y)}const Ce={[ld]:t.REPEAT,[or]:t.CLAMP_TO_EDGE,[cd]:t.MIRRORED_REPEAT},ot={[vn]:t.NEAREST,[my]:t.NEAREST_MIPMAP_NEAREST,[ol]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[Tu]:t.LINEAR_MIPMAP_NEAREST,[ps]:t.LINEAR_MIPMAP_LINEAR},ft={[vy]:t.NEVER,[Ey]:t.ALWAYS,[xy]:t.LESS,[$h]:t.LEQUAL,[Sy]:t.EQUAL,[qh]:t.GEQUAL,[yy]:t.GREATER,[My]:t.NOTEQUAL};function et(R,y){if(y.type===zi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Cn||y.magFilter===Tu||y.magFilter===ol||y.magFilter===ps||y.minFilter===Cn||y.minFilter===Tu||y.minFilter===ol||y.minFilter===ps)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,Ce[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Ce[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Ce[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ot[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ot[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ft[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===vn||y.minFilter!==ol&&y.minFilter!==ps||y.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function d(R,y){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",C));const Z=y.source;let ae=g.get(Z);ae===void 0&&(ae={},g.set(Z,ae));const X=V(y);if(X!==R.__cacheKey){ae[X]===void 0&&(ae[X]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ae[X].usedTimes++;const ie=ae[R.__cacheKey];ie!==void 0&&(ae[R.__cacheKey].usedTimes--,ie.usedTimes===0&&L(y)),R.__cacheKey=X,R.__webglTexture=ae[X].texture}return z}function k(R,y,z){return Math.floor(Math.floor(R/z)/y)}function $(R,y,z,Z){const X=R.updateRanges;if(X.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,z,Z,y.data);else{X.sort((be,pe)=>be.start-pe.start);let ie=0;for(let be=1;be<X.length;be++){const pe=X[ie],fe=X[be],Ze=pe.start+pe.count,qe=k(fe.start,y.width,4),$e=k(pe.start,y.width,4);fe.start<=Ze+1&&qe===$e&&k(fe.start+fe.count-1,y.width,4)===qe?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++ie,X[ie]=fe)}X.length=ie+1;const q=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let be=0,pe=X.length;be<pe;be++){const fe=X[be],Ze=Math.floor(fe.start/4),qe=Math.ceil(fe.count/4),$e=Ze%y.width,I=Math.floor(Ze/y.width),ue=qe,K=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,$e),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,$e,I,ue,K,z,Z,y.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function ce(R,y,z){let Z=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=t.TEXTURE_3D);const ae=d(R,y),X=y.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+z);const ie=i.get(X);if(X.version!==ie.__version||ae===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const K=Et.getPrimaries(Et.workingColorSpace),Pe=y.colorSpace===br?null:Et.getPrimaries(y.colorSpace),_e=y.colorSpace===br||K===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let ee=_(y.image,!1,r.maxTextureSize);ee=oe(y,ee);const he=s.convert(y.format,y.colorSpace),be=s.convert(y.type);let pe=M(y.internalFormat,he,be,y.normalized,y.colorSpace,y.isVideoTexture);et(Z,y);let fe;const Ze=y.mipmaps,qe=y.isVideoTexture!==!0,$e=ie.__version===void 0||ae===!0,I=X.dataReady,ue=T(y,ee);if(y.isDepthTexture)pe=P(y.format===ms,y.type),$e&&(qe?n.texStorage2D(t.TEXTURE_2D,1,pe,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,pe,ee.width,ee.height,0,he,be,null));else if(y.isDataTexture)if(Ze.length>0){qe&&$e&&n.texStorage2D(t.TEXTURE_2D,ue,pe,Ze[0].width,Ze[0].height);for(let K=0,Pe=Ze.length;K<Pe;K++)fe=Ze[K],qe?I&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,fe.width,fe.height,he,be,fe.data):n.texImage2D(t.TEXTURE_2D,K,pe,fe.width,fe.height,0,he,be,fe.data);y.generateMipmaps=!1}else qe?($e&&n.texStorage2D(t.TEXTURE_2D,ue,pe,ee.width,ee.height),I&&$(y,ee,he,be)):n.texImage2D(t.TEXTURE_2D,0,pe,ee.width,ee.height,0,he,be,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qe&&$e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,pe,Ze[0].width,Ze[0].height,ee.depth);for(let K=0,Pe=Ze.length;K<Pe;K++)if(fe=Ze[K],y.format!==Ti)if(he!==null)if(qe){if(I)if(y.layerUpdates.size>0){const _e=jm(fe.width,fe.height,y.format,y.type);for(const ne of y.layerUpdates){const De=fe.data.subarray(ne*_e/fe.data.BYTES_PER_ELEMENT,(ne+1)*_e/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,ne,fe.width,fe.height,1,he,De)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,fe.width,fe.height,ee.depth,he,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,pe,fe.width,fe.height,ee.depth,0,fe.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,fe.width,fe.height,ee.depth,he,be,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,pe,fe.width,fe.height,ee.depth,0,he,be,fe.data)}else{qe&&$e&&n.texStorage2D(t.TEXTURE_2D,ue,pe,Ze[0].width,Ze[0].height);for(let K=0,Pe=Ze.length;K<Pe;K++)fe=Ze[K],y.format!==Ti?he!==null?qe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,fe.width,fe.height,he,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,K,pe,fe.width,fe.height,0,fe.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?I&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,fe.width,fe.height,he,be,fe.data):n.texImage2D(t.TEXTURE_2D,K,pe,fe.width,fe.height,0,he,be,fe.data)}else if(y.isDataArrayTexture)if(qe){if($e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,pe,ee.width,ee.height,ee.depth),I)if(y.layerUpdates.size>0){const K=jm(ee.width,ee.height,y.format,y.type);for(const Pe of y.layerUpdates){const _e=ee.data.subarray(Pe*K/ee.data.BYTES_PER_ELEMENT,(Pe+1)*K/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Pe,ee.width,ee.height,1,he,be,_e)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,be,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,ee.width,ee.height,ee.depth,0,he,be,ee.data);else if(y.isData3DTexture)qe?($e&&n.texStorage3D(t.TEXTURE_3D,ue,pe,ee.width,ee.height,ee.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,be,ee.data)):n.texImage3D(t.TEXTURE_3D,0,pe,ee.width,ee.height,ee.depth,0,he,be,ee.data);else if(y.isFramebufferTexture){if($e)if(qe)n.texStorage2D(t.TEXTURE_2D,ue,pe,ee.width,ee.height);else{let K=ee.width,Pe=ee.height;for(let _e=0;_e<ue;_e++)n.texImage2D(t.TEXTURE_2D,_e,pe,K,Pe,0,he,be,null),K>>=1,Pe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const K=t.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),ee.parentNode!==K){K.appendChild(ee),m.add(y),K.onpaint=Be=>{const _t=Be.changedElements;for(const Ke of m)_t.includes(Ke.image)&&(Ke.needsUpdate=!0)},K.requestPaint();return}const Pe=0,_e=t.RGBA,ne=t.RGBA,De=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,Pe,_e,ne,De,ee),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(qe&&$e){const K=Mt(Ze[0]);n.texStorage2D(t.TEXTURE_2D,ue,pe,K.width,K.height)}for(let K=0,Pe=Ze.length;K<Pe;K++)fe=Ze[K],qe?I&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,he,be,fe):n.texImage2D(t.TEXTURE_2D,K,pe,he,be,fe);y.generateMipmaps=!1}else if(qe){if($e){const K=Mt(ee);n.texStorage2D(t.TEXTURE_2D,ue,pe,K.width,K.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,be,ee)}else n.texImage2D(t.TEXTURE_2D,0,pe,he,be,ee);u(y)&&p(Z),ie.__version=X.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function re(R,y,z){if(y.image.length!==6)return;const Z=d(R,y),ae=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const X=i.get(ae);if(ae.version!==X.__version||Z===!0){n.activeTexture(t.TEXTURE0+z);const ie=Et.getPrimaries(Et.workingColorSpace),q=y.colorSpace===br?null:Et.getPrimaries(y.colorSpace),ee=y.colorSpace===br||ie===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const he=y.isCompressedTexture||y.image[0].isCompressedTexture,be=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let ne=0;ne<6;ne++)!he&&!be?pe[ne]=_(y.image[ne],!0,r.maxCubemapSize):pe[ne]=be?y.image[ne].image:y.image[ne],pe[ne]=oe(y,pe[ne]);const fe=pe[0],Ze=s.convert(y.format,y.colorSpace),qe=s.convert(y.type),$e=M(y.internalFormat,Ze,qe,y.normalized,y.colorSpace),I=y.isVideoTexture!==!0,ue=X.__version===void 0||Z===!0,K=ae.dataReady;let Pe=T(y,fe);et(t.TEXTURE_CUBE_MAP,y);let _e;if(he){I&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,$e,fe.width,fe.height);for(let ne=0;ne<6;ne++){_e=pe[ne].mipmaps;for(let De=0;De<_e.length;De++){const Be=_e[De];y.format!==Ti?Ze!==null?I?K&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,Be.width,Be.height,Ze,Be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,$e,Be.width,Be.height,0,Be.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,Be.width,Be.height,Ze,qe,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,$e,Be.width,Be.height,0,Ze,qe,Be.data)}}}else{if(_e=y.mipmaps,I&&ue){_e.length>0&&Pe++;const ne=Mt(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,$e,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(be){I?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,pe[ne].width,pe[ne].height,Ze,qe,pe[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,$e,pe[ne].width,pe[ne].height,0,Ze,qe,pe[ne].data);for(let De=0;De<_e.length;De++){const _t=_e[De].image[ne].image;I?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,_t.width,_t.height,Ze,qe,_t.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,$e,_t.width,_t.height,0,Ze,qe,_t.data)}}else{I?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ze,qe,pe[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,$e,Ze,qe,pe[ne]);for(let De=0;De<_e.length;De++){const Be=_e[De];I?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,Ze,qe,Be.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,$e,Ze,qe,Be.image[ne])}}}u(y)&&p(t.TEXTURE_CUBE_MAP),X.__version=ae.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function de(R,y,z,Z,ae,X){const ie=s.convert(z.format,z.colorSpace),q=s.convert(z.type),ee=M(z.internalFormat,ie,q,z.normalized,z.colorSpace),he=i.get(y),be=i.get(z);if(be.__renderTarget=y,!he.__hasExternalTextures){const pe=Math.max(1,y.width>>X),fe=Math.max(1,y.height>>X);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,X,ee,pe,fe,y.depth,0,ie,q,null):n.texImage2D(ae,X,ee,pe,fe,0,ie,q,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Le(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ae,be.__webglTexture,0,ge(y)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ae,be.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(R,y,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer){const Z=y.depthTexture,ae=Z&&Z.isDepthTexture?Z.type:null,X=P(y.stencilBuffer,ae),ie=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Le(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge(y),X,y.width,y.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge(y),X,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,X,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,R)}else{const Z=y.textures;for(let ae=0;ae<Z.length;ae++){const X=Z[ae],ie=s.convert(X.format,X.colorSpace),q=s.convert(X.type),ee=M(X.internalFormat,ie,q,X.normalized,X.colorSpace);Le(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge(y),ee,y.width,y.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge(y),ee,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ee,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Fe(R,y,z){const Z=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(y.depthTexture);if(ae.__renderTarget=y,(!ae.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),ae.__webglTexture===void 0){ae.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),et(t.TEXTURE_CUBE_MAP,y.depthTexture);const he=s.convert(y.depthTexture.format),be=s.convert(y.depthTexture.type);let pe;y.depthTexture.format===mr?pe=t.DEPTH_COMPONENT24:y.depthTexture.format===ms&&(pe=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,pe,y.width,y.height,0,he,be,null)}}else H(y.depthTexture,0);const X=ae.__webglTexture,ie=ge(y),q=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,ee=y.depthTexture.format===ms?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===mr)Le(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,q,X,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,ee,q,X,0);else if(y.depthTexture.format===ms)Le(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,q,X,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,ee,q,X,0);else throw new Error("Unknown depthTexture format")}function se(R){const y=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const ae=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",ae)};Z.addEventListener("dispose",ae),y.__depthDisposeCallback=ae}y.__boundDepthTexture=Z}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let Z=0;Z<6;Z++)Fe(y.__webglFramebuffer[Z],R,Z);else{const Z=R.texture.mipmaps;Z&&Z.length>0?Fe(y.__webglFramebuffer[0],R,0):Fe(y.__webglFramebuffer,R,0)}else if(z){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=t.createRenderbuffer(),Ve(y.__webglDepthbuffer[Z],R,!1);else{const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,X)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Ve(y.__webglDepthbuffer,R,!1);else{const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,X)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(R,y,z){const Z=i.get(R);y!==void 0&&de(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&se(R)}function ze(R){const y=R.texture,z=i.get(R),Z=i.get(y);R.addEventListener("dispose",x);const ae=R.textures,X=R.isWebGLCubeRenderTarget===!0,ie=ae.length>1;if(ie||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=y.version,o.memory.textures++),X){z.__webglFramebuffer=[];for(let q=0;q<6;q++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[q]=[];for(let ee=0;ee<y.mipmaps.length;ee++)z.__webglFramebuffer[q][ee]=t.createFramebuffer()}else z.__webglFramebuffer[q]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let q=0;q<y.mipmaps.length;q++)z.__webglFramebuffer[q]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(ie)for(let q=0,ee=ae.length;q<ee;q++){const he=i.get(ae[q]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Le(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let q=0;q<ae.length;q++){const ee=ae[q];z.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[q]);const he=s.convert(ee.format,ee.colorSpace),be=s.convert(ee.type),pe=M(ee.internalFormat,he,be,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),fe=ge(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,z.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Ve(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),et(t.TEXTURE_CUBE_MAP,y);for(let q=0;q<6;q++)if(y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)de(z.__webglFramebuffer[q][ee],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ee);else de(z.__webglFramebuffer[q],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);u(y)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){for(let q=0,ee=ae.length;q<ee;q++){const he=ae[q],be=i.get(he);let pe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,be.__webglTexture),et(pe,he),de(z.__webglFramebuffer,R,he,t.COLOR_ATTACHMENT0+q,pe,0),u(he)&&p(pe)}n.unbindTexture()}else{let q=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(q,Z.__webglTexture),et(q,y),y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)de(z.__webglFramebuffer[ee],R,y,t.COLOR_ATTACHMENT0,q,ee);else de(z.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,q,0);u(y)&&p(q),n.unbindTexture()}R.depthBuffer&&se(R)}function Ae(R){const y=R.textures;for(let z=0,Z=y.length;z<Z;z++){const ae=y[z];if(u(ae)){const X=v(R),ie=i.get(ae).__webglTexture;n.bindTexture(X,ie),p(X),n.unbindTexture()}}}const Me=[],dt=[];function A(R){if(R.samples>0){if(Le(R)===!1){const y=R.textures,z=R.width,Z=R.height;let ae=t.COLOR_BUFFER_BIT;const X=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=i.get(R),q=y.length>1;if(q)for(let he=0;he<y.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);const ee=R.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let he=0;he<y.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ie.__webglColorRenderbuffer[he]);const be=i.get(y[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,z,Z,0,0,z,Z,ae,t.NEAREST),l===!0&&(Me.length=0,dt.length=0,Me.push(t.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Me.push(X),dt.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,dt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Me))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let he=0;he<y.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,ie.__webglColorRenderbuffer[he]);const be=i.get(y[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function ge(R){return Math.min(r.maxSamples,R.samples)}function Le(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ue(R){const y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function oe(R,y){const z=R.colorSpace,Z=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Mc&&z!==br&&(Et.getTransfer(z)===Dt?(Z!==Ti||ae!==Jn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",z)),y}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=j,this.getTextureUnits=Q,this.setTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=J,this.setTexture3D=te,this.setTextureCube=Ee,this.rebindTextures=We,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function QT(t,e){function n(i,r=br){let s;const o=Et.getTransfer(r);if(i===Jn)return t.UNSIGNED_BYTE;if(i===Hh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Wh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===G_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===V_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===k_)return t.BYTE;if(i===z_)return t.SHORT;if(i===Ra)return t.UNSIGNED_SHORT;if(i===Vh)return t.INT;if(i===Yi)return t.UNSIGNED_INT;if(i===zi)return t.FLOAT;if(i===pr)return t.HALF_FLOAT;if(i===H_)return t.ALPHA;if(i===W_)return t.RGB;if(i===Ti)return t.RGBA;if(i===mr)return t.DEPTH_COMPONENT;if(i===ms)return t.DEPTH_STENCIL;if(i===X_)return t.RED;if(i===Xh)return t.RED_INTEGER;if(i===ws)return t.RG;if(i===jh)return t.RG_INTEGER;if(i===Yh)return t.RGBA_INTEGER;if(i===Xl||i===jl||i===Yl||i===$l)if(o===Dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$l)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ud||i===fd||i===dd||i===hd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ud)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pd||i===md||i===gd||i===_d||i===vd||i===Sc||i===xd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pd||i===md)return o===Dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===_d)return s.COMPRESSED_R11_EAC;if(i===vd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Sc)return s.COMPRESSED_RG11_EAC;if(i===xd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sd||i===yd||i===Md||i===Ed||i===wd||i===Td||i===Ad||i===Rd||i===Cd||i===bd||i===Pd||i===Ld||i===Dd||i===Id)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Md)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ed)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Td)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ad)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ld)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dd)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Id)return o===Dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nd||i===Ud||i===Fd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nd)return o===Dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ud)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Od||i===Bd||i===yc||i===kd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Od)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ca?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const JT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eA=`
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

}`;class tA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new tv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $i({vertexShader:JT,fragmentShader:eA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new le(new gn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nA extends Rs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,m=null,f=null,g=null,S=null;const w=typeof XRWebGLBinding<"u",_=new tA,u={},p=n.getContextAttributes();let v=null,M=null;const P=[],T=[],C=new Tt;let x=null;const b=new Qn;b.viewport=new Yt;const L=new Qn;L.viewport=new Yt;const D=[b,L],O=new dM;let j=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(d){let k=P[d];return k===void 0&&(k=new Iu,P[d]=k),k.getTargetRaySpace()},this.getControllerGrip=function(d){let k=P[d];return k===void 0&&(k=new Iu,P[d]=k),k.getGripSpace()},this.getHand=function(d){let k=P[d];return k===void 0&&(k=new Iu,P[d]=k),k.getHandSpace()};function F(d){const k=T.indexOf(d.inputSource);if(k===-1)return;const $=P[k];$!==void 0&&($.update(d.inputSource,d.frame,c||o),$.dispatchEvent({type:d.type,data:d.inputSource}))}function Y(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",V);for(let d=0;d<P.length;d++){const k=T[d];k!==null&&(T[d]=null,P[d].disconnect(k))}j=null,Q=null,_.reset();for(const d in u)delete u[d];e.setRenderTarget(v),g=null,f=null,m=null,r=null,M=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(d){s=d,i.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(d){a=d,i.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(d){c=d},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return m===null&&w&&(m=new XRWebGLBinding(r,n)),m},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(d){if(r=d,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,ce=null,re=null;p.depth&&(re=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=p.stencil?ms:mr,ce=p.stencil?Ca:Yi);const de={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};m=this.getBinding(),f=m.createProjectionLayer(de),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Xi(f.textureWidth,f.textureHeight,{format:Ti,type:Jn,depthTexture:new So(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const $={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,$),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new Xi(g.framebufferWidth,g.framebufferHeight,{format:Ti,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(d){for(let k=0;k<d.removed.length;k++){const $=d.removed[k],ce=T.indexOf($);ce>=0&&(T[ce]=null,P[ce].disconnect($))}for(let k=0;k<d.added.length;k++){const $=d.added[k];let ce=T.indexOf($);if(ce===-1){for(let de=0;de<P.length;de++)if(de>=T.length){T.push($),ce=de;break}else if(T[de]===null){T[de]=$,ce=de;break}if(ce===-1)break}const re=P[ce];re&&re.connect($)}}const H=new G,J=new G;function te(d,k,$){H.setFromMatrixPosition(k.matrixWorld),J.setFromMatrixPosition($.matrixWorld);const ce=H.distanceTo(J),re=k.projectionMatrix.elements,de=$.projectionMatrix.elements,Ve=re[14]/(re[10]-1),Fe=re[14]/(re[10]+1),se=(re[9]+1)/re[5],We=(re[9]-1)/re[5],ze=(re[8]-1)/re[0],Ae=(de[8]+1)/de[0],Me=Ve*ze,dt=Ve*Ae,A=ce/(-ze+Ae),ge=A*-ze;if(k.matrixWorld.decompose(d.position,d.quaternion,d.scale),d.translateX(ge),d.translateZ(A),d.matrixWorld.compose(d.position,d.quaternion,d.scale),d.matrixWorldInverse.copy(d.matrixWorld).invert(),re[10]===-1)d.projectionMatrix.copy(k.projectionMatrix),d.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const Le=Ve+A,Ue=Fe+A,oe=Me-ge,Mt=dt+(ce-ge),R=se*Fe/Ue*Le,y=We*Fe/Ue*Le;d.projectionMatrix.makePerspective(oe,Mt,R,y,Le,Ue),d.projectionMatrixInverse.copy(d.projectionMatrix).invert()}}function Ee(d,k){k===null?d.matrixWorld.copy(d.matrix):d.matrixWorld.multiplyMatrices(k.matrixWorld,d.matrix),d.matrixWorldInverse.copy(d.matrixWorld).invert()}this.updateCamera=function(d){if(r===null)return;let k=d.near,$=d.far;_.texture!==null&&(_.depthNear>0&&(k=_.depthNear),_.depthFar>0&&($=_.depthFar)),O.near=L.near=b.near=k,O.far=L.far=b.far=$,(j!==O.near||Q!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),j=O.near,Q=O.far),O.layers.mask=d.layers.mask|6,b.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;const ce=d.parent,re=O.cameras;Ee(O,ce);for(let de=0;de<re.length;de++)Ee(re[de],ce);re.length===2?te(O,b,L):O.projectionMatrix.copy(b.projectionMatrix),Ce(d,O,ce)};function Ce(d,k,$){$===null?d.matrix.copy(k.matrixWorld):(d.matrix.copy($.matrixWorld),d.matrix.invert(),d.matrix.multiply(k.matrixWorld)),d.matrix.decompose(d.position,d.quaternion,d.scale),d.updateMatrixWorld(!0),d.projectionMatrix.copy(k.projectionMatrix),d.projectionMatrixInverse.copy(k.projectionMatrixInverse),d.isPerspectiveCamera&&(d.fov=Vd*2*Math.atan(1/d.projectionMatrix.elements[5]),d.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(d){l=d,f!==null&&(f.fixedFoveation=d),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=d)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(O)},this.getCameraTexture=function(d){return u[d]};let ot=null;function ft(d,k){if(h=k.getViewerPose(c||o),S=k,h!==null){const $=h.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let ce=!1;$.length!==O.cameras.length&&(O.cameras.length=0,ce=!0);for(let Fe=0;Fe<$.length;Fe++){const se=$[Fe];let We=null;if(g!==null)We=g.getViewport(se);else{const Ae=m.getViewSubImage(f,se);We=Ae.viewport,Fe===0&&(e.setRenderTargetTextures(M,Ae.colorTexture,Ae.depthStencilTexture),e.setRenderTarget(M))}let ze=D[Fe];ze===void 0&&(ze=new Qn,ze.layers.enable(Fe),ze.viewport=new Yt,D[Fe]=ze),ze.matrix.fromArray(se.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(se.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(We.x,We.y,We.width,We.height),Fe===0&&(O.matrix.copy(ze.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),ce===!0&&O.cameras.push(ze)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){m=i.getBinding();const Fe=m.getDepthInformation($[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(Fe,r.renderState)}if(re&&re.includes("camera-access")&&w){e.state.unbindTexture(),m=i.getBinding();for(let Fe=0;Fe<$.length;Fe++){const se=$[Fe].camera;if(se){let We=u[se];We||(We=new tv,u[se]=We);const ze=m.getCameraImage(se);We.sourceTexture=ze}}}}for(let $=0;$<P.length;$++){const ce=T[$],re=P[$];ce!==null&&re!==void 0&&re.update(ce,k,c||o)}ot&&ot(d,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),S=null}const et=new ov;et.setAnimationLoop(ft),this.setAnimationLoop=function(d){ot=d},this.dispose=function(){}}}const iA=new $t,hv=new at;hv.set(-1,0,0,0,1,0,0,0,1);function rA(t,e){function n(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function i(_,u){u.color.getRGB(_.fogColor.value,nv(t)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function r(_,u,p,v,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(_,u):u.isMeshLambertMaterial?(s(_,u),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(_,u),m(_,u)):u.isMeshPhongMaterial?(s(_,u),h(_,u),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(_,u),f(_,u),u.isMeshPhysicalMaterial&&g(_,u,M)):u.isMeshMatcapMaterial?(s(_,u),S(_,u)):u.isMeshDepthMaterial?s(_,u):u.isMeshDistanceMaterial?(s(_,u),w(_,u)):u.isMeshNormalMaterial?s(_,u):u.isLineBasicMaterial?(o(_,u),u.isLineDashedMaterial&&a(_,u)):u.isPointsMaterial?l(_,u,p,v):u.isSpriteMaterial?c(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,n(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===Xn&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,n(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===Xn&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,n(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,n(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const p=e.get(u),v=p.envMap,M=p.envMapRotation;v&&(_.envMap.value=v,_.envMapRotation.value.setFromMatrix4(iA.makeRotationFromEuler(M)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(hv),_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,_.aoMapTransform))}function o(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform))}function a(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function l(_,u,p,v){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*p,_.scale.value=v*.5,u.map&&(_.map.value=u.map,n(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function c(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function h(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function m(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function f(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function g(_,u,p){_.ior.value=u.ior,u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Xn&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=p.texture,_.transmissionSamplerSize.value.set(p.width,p.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,u){u.matcap&&(_.matcap.value=u.matcap)}function w(_,u){const p=e.get(u).light;_.referencePosition.value.setFromMatrixPosition(p.matrixWorld),_.nearDistance.value=p.shadow.camera.near,_.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,v){const M=v.program;i.uniformBlockBinding(p,M)}function c(p,v){let M=r[p.id];M===void 0&&(S(p),M=h(p),r[p.id]=M,p.addEventListener("dispose",_));const P=v.program;i.updateUBOMapping(p,P);const T=e.render.frame;s[p.id]!==T&&(f(p),s[p.id]=T)}function h(p){const v=m();p.__bindingPointIndex=v;const M=t.createBuffer(),P=p.__size,T=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function m(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(p){const v=r[p.id],M=p.uniforms,P=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,C=M.length;T<C;T++){const x=Array.isArray(M[T])?M[T]:[M[T]];for(let b=0,L=x.length;b<L;b++){const D=x[b];if(g(D,T,b,P)===!0){const O=D.__offset,j=Array.isArray(D.value)?D.value:[D.value];let Q=0;for(let F=0;F<j.length;F++){const Y=j[F],V=w(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,O+Q,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):ArrayBuffer.isView(Y)?D.__data.set(new Y.constructor(Y.buffer,Y.byteOffset,D.__data.length)):(Y.toArray(D.__data,Q),Q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(p,v,M,P){const T=p.value,C=v+"_"+M;if(P[C]===void 0)return typeof T=="number"||typeof T=="boolean"?P[C]=T:ArrayBuffer.isView(T)?P[C]=T.slice():P[C]=T.clone(),!0;{const x=P[C];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return P[C]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function S(p){const v=p.uniforms;let M=0;const P=16;for(let C=0,x=v.length;C<x;C++){const b=Array.isArray(v[C])?v[C]:[v[C]];for(let L=0,D=b.length;L<D;L++){const O=b[L],j=Array.isArray(O.value)?O.value:[O.value];for(let Q=0,F=j.length;Q<F;Q++){const Y=j[Q],V=w(Y),H=M%P,J=H%V.boundary,te=H+J;M+=J,te!==0&&P-te<V.storage&&(M+=P-te),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=V.storage}}}const T=M%P;return T>0&&(M+=P-T),p.__size=M,p.__cache={},this}function w(p){const v={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(v.boundary=4,v.storage=4):p.isVector2?(v.boundary=8,v.storage=8):p.isVector3||p.isColor?(v.boundary=16,v.storage=12):p.isVector4?(v.boundary=16,v.storage=16):p.isMatrix3?(v.boundary=48,v.storage=48):p.isMatrix4?(v.boundary=64,v.storage=64):p.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(v.boundary=16,v.storage=p.byteLength):it("WebGLRenderer: Unsupported uniform value type.",p),v}function _(p){const v=p.target;v.removeEventListener("dispose",_);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const p in r)t.deleteBuffer(r[p]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}const oA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ui=null;function aA(){return Ui===null&&(Ui=new $y(oA,16,16,ws,pr),Ui.name="DFG_LUT",Ui.minFilter=Cn,Ui.magFilter=Cn,Ui.wrapS=or,Ui.wrapT=or,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}class lA{constructor(e={}){const{canvas:n=Ty(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:f=!1,outputBufferType:g=Jn}=e;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=o;const w=g,_=new Set([Yh,jh,Xh]),u=new Set([Jn,Yi,Ra,Ca,Hh,Wh]),p=new Uint32Array(4),v=new Int32Array(4),M=new G;let P=null,T=null;const C=[],x=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1,O=null;this._outputColorSpace=ci;let j=0,Q=0,F=null,Y=-1,V=null;const H=new Yt,J=new Yt;let te=null;const Ee=new xt(0);let Ce=0,ot=n.width,ft=n.height,et=1,d=null,k=null;const $=new Yt(0,0,ot,ft),ce=new Yt(0,0,ot,ft);let re=!1;const de=new Qh;let Ve=!1,Fe=!1;const se=new $t,We=new G,ze=new Yt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function dt(){return F===null?et:1}let A=i;function ge(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zh}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",Be,!1),A===null){const U="webgl2";if(A=ge(U,E),A===null)throw ge(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw At("WebGLRenderer: "+E.message),E}let Le,Ue,oe,Mt,R,y,z,Z,ae,X,ie,q,ee,he,be,pe,fe,Ze,qe,$e,I,ue,K;function Pe(){Le=new aw(A),Le.init(),I=new QT(A,Le),Ue=new JE(A,Le,e,I),oe=new KT(A,Le),Ue.reversedDepthBuffer&&f&&oe.buffers.depth.setReversed(!0),Mt=new uw(A),R=new FT,y=new ZT(A,Le,oe,R,Ue,I,Mt),z=new ow(L),Z=new pM(A),ue=new ZE(A,Z),ae=new lw(A,Z,Mt,ue),X=new dw(A,ae,Z,ue,Mt),Ze=new fw(A,Ue,y),be=new ew(R),ie=new UT(L,z,Le,Ue,ue,be),q=new rA(L,R),ee=new BT,he=new WT(Le),fe=new KE(L,z,oe,X,S,l),pe=new qT(L,X,Ue),K=new sA(A,Mt,Ue,oe),qe=new QE(A,Le,Mt),$e=new cw(A,Le,Mt),Mt.programs=ie.programs,L.capabilities=Ue,L.extensions=Le,L.properties=R,L.renderLists=ee,L.shadowMap=pe,L.state=oe,L.info=Mt}Pe(),w!==Jn&&(b=new pw(w,n.width,n.height,r,s));const _e=new nA(L,A);this.xr=_e,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=Le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(E){E!==void 0&&(et=E,this.setSize(ot,ft,!1))},this.getSize=function(E){return E.set(ot,ft)},this.setSize=function(E,U,W=!0){if(_e.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=E,ft=U,n.width=Math.floor(E*et),n.height=Math.floor(U*et),W===!0&&(n.style.width=E+"px",n.style.height=U+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(ot*et,ft*et).floor()},this.setDrawingBufferSize=function(E,U,W){ot=E,ft=U,et=W,n.width=Math.floor(E*W),n.height=Math.floor(U*W),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(w===Jn){At("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){it("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,U,W,N){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,U,W,N),oe.viewport(H.copy($).multiplyScalar(et).round())},this.getScissor=function(E){return E.copy(ce)},this.setScissor=function(E,U,W,N){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,U,W,N),oe.scissor(J.copy(ce).multiplyScalar(et).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(E){oe.setScissorTest(re=E)},this.setOpaqueSort=function(E){d=E},this.setTransparentSort=function(E){k=E},this.getClearColor=function(E){return E.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,W=!0){let N=0;if(E){let B=!1;if(F!==null){const me=F.texture.format;B=_.has(me)}if(B){const me=F.texture.type,Se=u.has(me),ve=fe.getClearColor(),Te=fe.getClearAlpha(),Ie=ve.r,Xe=ve.g,Qe=ve.b;Se?(p[0]=Ie,p[1]=Xe,p[2]=Qe,p[3]=Te,A.clearBufferuiv(A.COLOR,0,p)):(v[0]=Ie,v[1]=Xe,v[2]=Qe,v[3]=Te,A.clearBufferiv(A.COLOR,0,v))}else N|=A.COLOR_BUFFER_BIT}U&&(N|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(N|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&A.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",Be,!1),fe.dispose(),ee.dispose(),he.dispose(),R.dispose(),z.dispose(),X.dispose(),ue.dispose(),K.dispose(),ie.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",yn),_e.removeEventListener("sessionend",Yn),en.stop()};function ne(E){E.preventDefault(),Em("WebGLRenderer: Context Lost."),D=!0}function De(){Em("WebGLRenderer: Context Restored."),D=!1;const E=Mt.autoReset,U=pe.enabled,W=pe.autoUpdate,N=pe.needsUpdate,B=pe.type;Pe(),Mt.autoReset=E,pe.enabled=U,pe.autoUpdate=W,pe.needsUpdate=N,pe.type=B}function Be(E){At("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function _t(E){const U=E.target;U.removeEventListener("dispose",_t),Ke(U)}function Ke(E){Ut(E),R.remove(E)}function Ut(E){const U=R.get(E).programs;U!==void 0&&(U.forEach(function(W){ie.releaseProgram(W)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,W,N,B,me){U===null&&(U=Ae);const Se=B.isMesh&&B.matrixWorld.determinant()<0,ve=Kt(E,U,W,N,B);oe.setMaterial(N,Se);let Te=W.index,Ie=1;if(N.wireframe===!0){if(Te=ae.getWireframeAttribute(W),Te===void 0)return;Ie=2}const Xe=W.drawRange,Qe=W.attributes.position;let Re=Xe.start*Ie,pt=(Xe.start+Xe.count)*Ie;me!==null&&(Re=Math.max(Re,me.start*Ie),pt=Math.min(pt,(me.start+me.count)*Ie)),Te!==null?(Re=Math.max(Re,0),pt=Math.min(pt,Te.count)):Qe!=null&&(Re=Math.max(Re,0),pt=Math.min(pt,Qe.count));const Pt=pt-Re;if(Pt<0||Pt===1/0)return;ue.setup(B,N,ve,W,Te);let Je,je=qe;if(Te!==null&&(Je=Z.get(Te),je=$e,je.setIndex(Je)),B.isMesh)N.wireframe===!0?(oe.setLineWidth(N.wireframeLinewidth*dt()),je.setMode(A.LINES)):je.setMode(A.TRIANGLES);else if(B.isLine){let rt=N.linewidth;rt===void 0&&(rt=1),oe.setLineWidth(rt*dt()),B.isLineSegments?je.setMode(A.LINES):B.isLineLoop?je.setMode(A.LINE_LOOP):je.setMode(A.LINE_STRIP)}else B.isPoints?je.setMode(A.POINTS):B.isSprite&&je.setMode(A.TRIANGLES);if(B.isBatchedMesh)if(Le.get("WEBGL_multi_draw"))je.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const rt=B._multiDrawStarts,we=B._multiDrawCounts,Ct=B._multiDrawCount,ke=Te?Z.get(Te).bytesPerElement:1,nt=R.get(N).currentProgram.getUniforms();for(let vt=0;vt<Ct;vt++)nt.setValue(A,"_gl_DrawID",vt),je.render(rt[vt]/ke,we[vt])}else if(B.isInstancedMesh)je.renderInstances(Re,Pt,B.count);else if(W.isInstancedBufferGeometry){const rt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,we=Math.min(W.instanceCount,rt);je.renderInstances(Re,Pt,we)}else je.render(Re,Pt)};function Bt(E,U,W){E.transparent===!0&&E.side===ki&&E.forceSinglePass===!1?(E.side=Xn,E.needsUpdate=!0,lt(E,U,W),E.side=Hr,E.needsUpdate=!0,lt(E,U,W),E.side=ki):lt(E,U,W)}this.compile=function(E,U,W=null){W===null&&(W=E),T=he.get(W),T.init(U),x.push(T),W.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),E!==W&&E.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights();const N=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const me=B.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const ve=me[Se];Bt(ve,W,B),N.add(ve)}else Bt(me,W,B),N.add(me)}),T=x.pop(),N},this.compileAsync=function(E,U,W=null){const N=this.compile(E,U,W);return new Promise(B=>{function me(){if(N.forEach(function(Se){R.get(Se).currentProgram.isReady()&&N.delete(Se)}),N.size===0){B(E);return}setTimeout(me,10)}Le.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let pn=null;function si(E){pn&&pn(E)}function yn(){en.stop()}function Yn(){en.start()}const en=new ov;en.setAnimationLoop(si),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(E){pn=E,_e.setAnimationLoop(E),E===null?en.stop():en.start()},_e.addEventListener("sessionstart",yn),_e.addEventListener("sessionend",Yn),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(E,U);const W=_e.enabled===!0&&_e.isPresenting===!0,N=b!==null&&(F===null||W)&&b.begin(L,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(U),U=_e.getCamera()),E.isScene===!0&&E.onBeforeRender(L,E,U,F),T=he.get(E,x.length),T.init(U),T.state.textureUnits=y.getTextureUnits(),x.push(T),se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),de.setFromProjectionMatrix(se,Gi,U.reversedDepth),Fe=this.localClippingEnabled,Ve=be.init(this.clippingPlanes,Fe),P=ee.get(E,C.length),P.init(),C.push(P),_e.enabled===!0&&_e.isPresenting===!0){const Se=L.xr.getDepthSensingMesh();Se!==null&&Mn(Se,U,-1/0,L.sortObjects)}Mn(E,U,0,L.sortObjects),P.finish(),L.sortObjects===!0&&P.sort(d,k),Me=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Me&&fe.addToRenderList(P,E),this.info.render.frame++,Ve===!0&&be.beginShadows();const B=T.state.shadowsArray;if(pe.render(B,E,U),Ve===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(N&&b.hasRenderPass())===!1){const Se=P.opaque,ve=P.transmissive;if(T.setupLights(),U.isArrayCamera){const Te=U.cameras;if(ve.length>0)for(let Ie=0,Xe=Te.length;Ie<Xe;Ie++){const Qe=Te[Ie];bo(Se,ve,E,Qe)}Me&&fe.render(E);for(let Ie=0,Xe=Te.length;Ie<Xe;Ie++){const Qe=Te[Ie];Co(P,E,Qe,Qe.viewport)}}else ve.length>0&&bo(Se,ve,E,U),Me&&fe.render(E),Co(P,E,U)}F!==null&&Q===0&&(y.updateMultisampleRenderTarget(F),y.updateRenderTargetMipmap(F)),N&&b.end(L),E.isScene===!0&&E.onAfterRender(L,E,U),ue.resetDefaultState(),Y=-1,V=null,x.pop(),x.length>0?(T=x[x.length-1],y.setTextureUnits(T.state.textureUnits),Ve===!0&&be.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?P=C[C.length-1]:P=null,O!==null&&O.renderEnd()};function Mn(E,U,W,N){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||de.intersectsSprite(E)){N&&ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(se);const Se=X.update(E),ve=E.material;ve.visible&&P.push(E,Se,ve,W,ze.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||de.intersectsObject(E))){const Se=X.update(E),ve=E.material;if(N&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ze.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ze.copy(Se.boundingSphere.center)),ze.applyMatrix4(E.matrixWorld).applyMatrix4(se)),Array.isArray(ve)){const Te=Se.groups;for(let Ie=0,Xe=Te.length;Ie<Xe;Ie++){const Qe=Te[Ie],Re=ve[Qe.materialIndex];Re&&Re.visible&&P.push(E,Se,Re,W,ze.z,Qe)}}else ve.visible&&P.push(E,Se,ve,W,ze.z,null)}}const me=E.children;for(let Se=0,ve=me.length;Se<ve;Se++)Mn(me[Se],U,W,N)}function Co(E,U,W,N){const{opaque:B,transmissive:me,transparent:Se}=E;T.setupLightsView(W),Ve===!0&&be.setGlobalState(L.clippingPlanes,W),N&&oe.viewport(H.copy(N)),B.length>0&&$r(B,U,W),me.length>0&&$r(me,U,W),Se.length>0&&$r(Se,U,W),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function bo(E,U,W,N){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[N.id]===void 0){const Re=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[N.id]=new Xi(1,1,{generateMipmaps:!0,type:Re?pr:Jn,minFilter:ps,samples:Math.max(4,Ue.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const me=T.state.transmissionRenderTarget[N.id],Se=N.viewport||H;me.setSize(Se.z*L.transmissionResolutionScale,Se.w*L.transmissionResolutionScale);const ve=L.getRenderTarget(),Te=L.getActiveCubeFace(),Ie=L.getActiveMipmapLevel();L.setRenderTarget(me),L.getClearColor(Ee),Ce=L.getClearAlpha(),Ce<1&&L.setClearColor(16777215,.5),L.clear(),Me&&fe.render(W);const Xe=L.toneMapping;L.toneMapping=Wi;const Qe=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),T.setupLightsView(N),Ve===!0&&be.setGlobalState(L.clippingPlanes,N),$r(E,W,N),y.updateMultisampleRenderTarget(me),y.updateRenderTargetMipmap(me),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let pt=0,Pt=U.length;pt<Pt;pt++){const Je=U[pt],{object:je,geometry:rt,material:we,group:Ct}=Je;if(we.side===ki&&je.layers.test(N.layers)){const ke=we.side;we.side=Xn,we.needsUpdate=!0,Ye(je,W,N,rt,we,Ct),we.side=ke,we.needsUpdate=!0,Re=!0}}Re===!0&&(y.updateMultisampleRenderTarget(me),y.updateRenderTargetMipmap(me))}L.setRenderTarget(ve,Te,Ie),L.setClearColor(Ee,Ce),Qe!==void 0&&(N.viewport=Qe),L.toneMapping=Xe}function $r(E,U,W){const N=U.isScene===!0?U.overrideMaterial:null;for(let B=0,me=E.length;B<me;B++){const Se=E[B],{object:ve,geometry:Te,group:Ie}=Se;let Xe=Se.material;Xe.allowOverride===!0&&N!==null&&(Xe=N),ve.layers.test(W.layers)&&Ye(ve,U,W,Te,Xe,Ie)}}function Ye(E,U,W,N,B,me){E.onBeforeRender(L,U,W,N,B,me),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(L,U,W,N,E,me),B.transparent===!0&&B.side===ki&&B.forceSinglePass===!1?(B.side=Xn,B.needsUpdate=!0,L.renderBufferDirect(W,U,N,B,E,me),B.side=Hr,B.needsUpdate=!0,L.renderBufferDirect(W,U,N,B,E,me),B.side=ki):L.renderBufferDirect(W,U,N,B,E,me),E.onAfterRender(L,U,W,N,B,me)}function lt(E,U,W){U.isScene!==!0&&(U=Ae);const N=R.get(E),B=T.state.lights,me=T.state.shadowsArray,Se=B.state.version,ve=ie.getParameters(E,B.state,me,U,W,T.state.lightProbeGridArray),Te=ie.getProgramCacheKey(ve);let Ie=N.programs;N.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,N.fog=U.fog;const Xe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;N.envMap=z.get(E.envMap||N.environment,Xe),N.envMapRotation=N.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",_t),Ie=new Map,N.programs=Ie);let Qe=Ie.get(Te);if(Qe!==void 0){if(N.currentProgram===Qe&&N.lightsStateVersion===Se)return bt(E,ve),Qe}else ve.uniforms=ie.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,W,ve),E.onBeforeCompile(ve,L),Qe=ie.acquireProgram(ve,Te),Ie.set(Te,Qe),N.uniforms=ve.uniforms;const Re=N.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=be.uniform),bt(E,ve),N.needsLights=Ge(E),N.lightsStateVersion=Se,N.needsLights&&(Re.ambientLightColor.value=B.state.ambient,Re.lightProbe.value=B.state.probe,Re.directionalLights.value=B.state.directional,Re.directionalLightShadows.value=B.state.directionalShadow,Re.spotLights.value=B.state.spot,Re.spotLightShadows.value=B.state.spotShadow,Re.rectAreaLights.value=B.state.rectArea,Re.ltc_1.value=B.state.rectAreaLTC1,Re.ltc_2.value=B.state.rectAreaLTC2,Re.pointLights.value=B.state.point,Re.pointLightShadows.value=B.state.pointShadow,Re.hemisphereLights.value=B.state.hemi,Re.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Re.spotLightMatrix.value=B.state.spotLightMatrix,Re.spotLightMap.value=B.state.spotLightMap,Re.pointShadowMatrix.value=B.state.pointShadowMatrix),N.lightProbeGrid=T.state.lightProbeGridArray.length>0,N.currentProgram=Qe,N.uniformsList=null,Qe}function ht(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=ql.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function bt(E,U){const W=R.get(E);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function He(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let W=0,N=E.length;W<N;W++){const B=E[W];if(B.texture!==null&&B.boundingBox.containsPoint(M))return B}return null}function Kt(E,U,W,N,B){U.isScene!==!0&&(U=Ae),y.resetTextureUnits();const me=U.fog,Se=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?U.environment:null,ve=F===null?L.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Et.workingColorSpace,Te=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,Ie=z.get(N.envMap||Se,Te),Xe=N.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Qe=!!W.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Re=!!W.morphAttributes.position,pt=!!W.morphAttributes.normal,Pt=!!W.morphAttributes.color;let Je=Wi;N.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Je=L.toneMapping);const je=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rt=je!==void 0?je.length:0,we=R.get(N),Ct=T.state.lights;if(Ve===!0&&(Fe===!0||E!==V)){const ct=E===V&&N.id===Y;be.setState(N,E,ct)}let ke=!1;N.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ct.state.version||we.outputColorSpace!==ve||B.isBatchedMesh&&we.batching===!1||!B.isBatchedMesh&&we.batching===!0||B.isBatchedMesh&&we.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&we.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&we.instancing===!1||!B.isInstancedMesh&&we.instancing===!0||B.isSkinnedMesh&&we.skinning===!1||!B.isSkinnedMesh&&we.skinning===!0||B.isInstancedMesh&&we.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&we.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&we.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&we.instancingMorph===!1&&B.morphTexture!==null||we.envMap!==Ie||N.fog===!0&&we.fog!==me||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==be.numPlanes||we.numIntersection!==be.numIntersection)||we.vertexAlphas!==Xe||we.vertexTangents!==Qe||we.morphTargets!==Re||we.morphNormals!==pt||we.morphColors!==Pt||we.toneMapping!==Je||we.morphTargetsCount!==rt||!!we.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ke=!0):(ke=!0,we.__version=N.version);let nt=we.currentProgram;ke===!0&&(nt=lt(N,U,B),O&&N.isNodeMaterial&&O.onUpdateProgram(N,nt,we));let vt=!1,nn=!1,Xt=!1;const tt=nt.getUniforms(),Lt=we.uniforms;if(oe.useProgram(nt.program)&&(vt=!0,nn=!0,Xt=!0),N.id!==Y&&(Y=N.id,nn=!0),we.needsLights){const ct=He(T.state.lightProbeGridArray,B);we.lightProbeGrid!==ct&&(we.lightProbeGrid=ct,nn=!0)}if(vt||V!==E){oe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),tt.setValue(A,"projectionMatrix",E.projectionMatrix),tt.setValue(A,"viewMatrix",E.matrixWorldInverse);const Gt=tt.map.cameraPosition;Gt!==void 0&&Gt.setValue(A,We.setFromMatrixPosition(E.matrixWorld)),Ue.logarithmicDepthBuffer&&tt.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&tt.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,nn=!0,Xt=!0)}if(we.needsLights&&(Ct.state.directionalShadowMap.length>0&&tt.setValue(A,"directionalShadowMap",Ct.state.directionalShadowMap,y),Ct.state.spotShadowMap.length>0&&tt.setValue(A,"spotShadowMap",Ct.state.spotShadowMap,y),Ct.state.pointShadowMap.length>0&&tt.setValue(A,"pointShadowMap",Ct.state.pointShadowMap,y)),B.isSkinnedMesh){tt.setOptional(A,B,"bindMatrix"),tt.setOptional(A,B,"bindMatrixInverse");const ct=B.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),tt.setValue(A,"boneTexture",ct.boneTexture,y))}B.isBatchedMesh&&(tt.setOptional(A,B,"batchingTexture"),tt.setValue(A,"batchingTexture",B._matricesTexture,y),tt.setOptional(A,B,"batchingIdTexture"),tt.setValue(A,"batchingIdTexture",B._indirectTexture,y),tt.setOptional(A,B,"batchingColorTexture"),B._colorsTexture!==null&&tt.setValue(A,"batchingColorTexture",B._colorsTexture,y));const Zt=W.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&Ze.update(B,W,nt),(nn||we.receiveShadow!==B.receiveShadow)&&(we.receiveShadow=B.receiveShadow,tt.setValue(A,"receiveShadow",B.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&U.environment!==null&&(Lt.envMapIntensity.value=U.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=aA()),nn){if(tt.setValue(A,"toneMappingExposure",L.toneMappingExposure),we.needsLights&&yt(Lt,Xt),me&&N.fog===!0&&q.refreshFogUniforms(Lt,me),q.refreshMaterialUniforms(Lt,N,et,ft,T.state.transmissionRenderTarget[E.id]),we.needsLights&&we.lightProbeGrid){const ct=we.lightProbeGrid;Lt.probesSH.value=ct.texture,Lt.probesMin.value.copy(ct.boundingBox.min),Lt.probesMax.value.copy(ct.boundingBox.max),Lt.probesResolution.value.copy(ct.resolution)}ql.upload(A,ht(we),Lt,y)}if(N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ql.upload(A,ht(we),Lt,y),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&tt.setValue(A,"center",B.center),tt.setValue(A,"modelViewMatrix",B.modelViewMatrix),tt.setValue(A,"normalMatrix",B.normalMatrix),tt.setValue(A,"modelMatrix",B.matrixWorld),N.uniformsGroups!==void 0){const ct=N.uniformsGroups;for(let Gt=0,kt=ct.length;Gt<kt;Gt++){const $n=ct[Gt];K.update($n,nt),K.bind($n,nt)}}return nt}function yt(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Ge(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,U,W){const N=R.get(E);N.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),R.get(E.texture).__webglTexture=U,R.get(E.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:W,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const W=R.get(E);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const mn=A.createFramebuffer();this.setRenderTarget=function(E,U=0,W=0){F=E,j=U,Q=W;let N=null,B=!1,me=!1;if(E){const ve=R.get(E);if(ve.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(A.FRAMEBUFFER,ve.__webglFramebuffer),H.copy(E.viewport),J.copy(E.scissor),te=E.scissorTest,oe.viewport(H),oe.scissor(J),oe.setScissorTest(te),Y=-1;return}else if(ve.__webglFramebuffer===void 0)y.setupRenderTarget(E);else if(ve.__hasExternalTextures)y.rebindTextures(E,R.get(E.texture).__webglTexture,R.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Xe=E.depthTexture;if(ve.__boundDepthTexture!==Xe){if(Xe!==null&&R.has(Xe)&&(E.width!==Xe.image.width||E.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(me=!0);const Ie=R.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?N=Ie[U][W]:N=Ie[U],B=!0):E.samples>0&&y.useMultisampledRTT(E)===!1?N=R.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?N=Ie[W]:N=Ie,H.copy(E.viewport),J.copy(E.scissor),te=E.scissorTest}else H.copy($).multiplyScalar(et).floor(),J.copy(ce).multiplyScalar(et).floor(),te=re;if(W!==0&&(N=mn),oe.bindFramebuffer(A.FRAMEBUFFER,N)&&oe.drawBuffers(E,N),oe.viewport(H),oe.scissor(J),oe.setScissorTest(te),B){const ve=R.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,W)}else if(me){const ve=U;for(let Te=0;Te<E.textures.length;Te++){const Ie=R.get(E.textures[Te]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Te,Ie.__webglTexture,W,ve)}}else if(E!==null&&W!==0){const ve=R.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ve.__webglTexture,W)}Y=-1},this.readRenderTargetPixels=function(E,U,W,N,B,me,Se,ve=0){if(!(E&&E.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=R.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){oe.bindFramebuffer(A.FRAMEBUFFER,Te);try{const Ie=E.textures[ve],Xe=Ie.format,Qe=Ie.type;if(E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ve),!Ue.textureFormatReadable(Xe)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Qe)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-N&&W>=0&&W<=E.height-B&&A.readPixels(U,W,N,B,I.convert(Xe),I.convert(Qe),me)}finally{const Ie=F!==null?R.get(F).__webglFramebuffer:null;oe.bindFramebuffer(A.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,U,W,N,B,me,Se,ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=R.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te)if(U>=0&&U<=E.width-N&&W>=0&&W<=E.height-B){oe.bindFramebuffer(A.FRAMEBUFFER,Te);const Ie=E.textures[ve],Xe=Ie.format,Qe=Ie.type;if(E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ve),!Ue.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Re),A.bufferData(A.PIXEL_PACK_BUFFER,me.byteLength,A.STREAM_READ),A.readPixels(U,W,N,B,I.convert(Xe),I.convert(Qe),0);const pt=F!==null?R.get(F).__webglFramebuffer:null;oe.bindFramebuffer(A.FRAMEBUFFER,pt);const Pt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Ay(A,Pt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Re),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,me),A.deleteBuffer(Re),A.deleteSync(Pt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,W=0){const N=Math.pow(2,-W),B=Math.floor(E.image.width*N),me=Math.floor(E.image.height*N),Se=U!==null?U.x:0,ve=U!==null?U.y:0;y.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,W,0,0,Se,ve,B,me),oe.unbindTexture()};const tn=A.createFramebuffer(),Bn=A.createFramebuffer();this.copyTextureToTexture=function(E,U,W=null,N=null,B=0,me=0){let Se,ve,Te,Ie,Xe,Qe,Re,pt,Pt;const Je=E.isCompressedTexture?E.mipmaps[me]:E.image;if(W!==null)Se=W.max.x-W.min.x,ve=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,Ie=W.min.x,Xe=W.min.y,Qe=W.isBox3?W.min.z:0;else{const Lt=Math.pow(2,-B);Se=Math.floor(Je.width*Lt),ve=Math.floor(Je.height*Lt),E.isDataArrayTexture?Te=Je.depth:E.isData3DTexture?Te=Math.floor(Je.depth*Lt):Te=1,Ie=0,Xe=0,Qe=0}N!==null?(Re=N.x,pt=N.y,Pt=N.z):(Re=0,pt=0,Pt=0);const je=I.convert(U.format),rt=I.convert(U.type);let we;U.isData3DTexture?(y.setTexture3D(U,0),we=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(y.setTexture2DArray(U,0),we=A.TEXTURE_2D_ARRAY):(y.setTexture2D(U,0),we=A.TEXTURE_2D),oe.activeTexture(A.TEXTURE0),oe.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),oe.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),oe.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const Ct=oe.getParameter(A.UNPACK_ROW_LENGTH),ke=oe.getParameter(A.UNPACK_IMAGE_HEIGHT),nt=oe.getParameter(A.UNPACK_SKIP_PIXELS),vt=oe.getParameter(A.UNPACK_SKIP_ROWS),nn=oe.getParameter(A.UNPACK_SKIP_IMAGES);oe.pixelStorei(A.UNPACK_ROW_LENGTH,Je.width),oe.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Je.height),oe.pixelStorei(A.UNPACK_SKIP_PIXELS,Ie),oe.pixelStorei(A.UNPACK_SKIP_ROWS,Xe),oe.pixelStorei(A.UNPACK_SKIP_IMAGES,Qe);const Xt=E.isDataArrayTexture||E.isData3DTexture,tt=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Lt=R.get(E),Zt=R.get(U),ct=R.get(Lt.__renderTarget),Gt=R.get(Zt.__renderTarget);oe.bindFramebuffer(A.READ_FRAMEBUFFER,ct.__webglFramebuffer),oe.bindFramebuffer(A.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let kt=0;kt<Te;kt++)Xt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,R.get(E).__webglTexture,B,Qe+kt),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,R.get(U).__webglTexture,me,Pt+kt)),A.blitFramebuffer(Ie,Xe,Se,ve,Re,pt,Se,ve,A.DEPTH_BUFFER_BIT,A.NEAREST);oe.bindFramebuffer(A.READ_FRAMEBUFFER,null),oe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||R.has(E)){const Lt=R.get(E),Zt=R.get(U);oe.bindFramebuffer(A.READ_FRAMEBUFFER,tn),oe.bindFramebuffer(A.DRAW_FRAMEBUFFER,Bn);for(let ct=0;ct<Te;ct++)Xt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Lt.__webglTexture,B,Qe+ct):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Lt.__webglTexture,B),tt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Zt.__webglTexture,me,Pt+ct):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Zt.__webglTexture,me),B!==0?A.blitFramebuffer(Ie,Xe,Se,ve,Re,pt,Se,ve,A.COLOR_BUFFER_BIT,A.NEAREST):tt?A.copyTexSubImage3D(we,me,Re,pt,Pt+ct,Ie,Xe,Se,ve):A.copyTexSubImage2D(we,me,Re,pt,Ie,Xe,Se,ve);oe.bindFramebuffer(A.READ_FRAMEBUFFER,null),oe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else tt?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(we,me,Re,pt,Pt,Se,ve,Te,je,rt,Je.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(we,me,Re,pt,Pt,Se,ve,Te,je,Je.data):A.texSubImage3D(we,me,Re,pt,Pt,Se,ve,Te,je,rt,Je):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,me,Re,pt,Se,ve,je,rt,Je.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,me,Re,pt,Je.width,Je.height,je,Je.data):A.texSubImage2D(A.TEXTURE_2D,me,Re,pt,Se,ve,je,rt,Je);oe.pixelStorei(A.UNPACK_ROW_LENGTH,Ct),oe.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ke),oe.pixelStorei(A.UNPACK_SKIP_PIXELS,nt),oe.pixelStorei(A.UNPACK_SKIP_ROWS,vt),oe.pixelStorei(A.UNPACK_SKIP_IMAGES,nn),me===0&&U.generateMipmaps&&A.generateMipmap(we),oe.unbindTexture()},this.initRenderTarget=function(E){R.get(E).__webglFramebuffer===void 0&&y.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?y.setTextureCube(E,0):E.isData3DTexture?y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?y.setTexture2DArray(E,0):y.setTexture2D(E,0),oe.unbindTexture()},this.resetState=function(){j=0,Q=0,F=null,oe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}const Yo=.85,rf=1.4,g0=.35;function $o(t){let e=(t+1)*2654435761>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967295)}function cA({lampsRef:t,trackedRef:e,lookaheadRef:n,baselineRef:i,agentsRef:r,pausedRef:s,spawnPed:o}){const a=gt.useRef(null),[l,c]=gt.useState(1),[h,m]=gt.useState(1.4),[f,g]=gt.useState(24),[S,w]=gt.useState(!1),_=gt.useRef(1),u=gt.useRef(!1),p=gt.useRef(0),v=gt.useRef(0),M=gt.useRef(0),P=()=>{u.current||(w(!0),u.current=!0,p.current=Math.PI,M.current=2)},T=C=>{c(C),_.current=C};return gt.useEffect(()=>{const C=a.current,x=C.clientWidth,b=C.clientHeight,L={Shift:!1},D=Ye=>{Ye.key==="Shift"&&(L.Shift=!0,_.current=3,c(3)),(Ye.code==="Space"||Ye.key==="b"||Ye.key==="B")&&(Ye.preventDefault(),P())},O=Ye=>{Ye.key==="Shift"&&(L.Shift=!1,_.current=1,c(1))};window.addEventListener("keydown",D),window.addEventListener("keyup",O);const j=new Vy;j.background=new xt(131589),j.fog=new Zh(133656,.009);const Q=new Qn(72,x/b,.1,300);Q.position.set(0,1.7,0),Q.lookAt(0,1.7,-100);const F=new lA({antialias:!0});F.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.setSize(x,b),F.shadowMap.enabled=!0,F.shadowMap.type=P_,F.toneMapping=Gh,F.toneMappingExposure=1,C.appendChild(F.domElement),j.add(new uM(526348,.05));const Y=new ut({color:921102,roughness:.95,metalness:0}),V=new le(new gn(8,800),Y);V.rotation.x=-Math.PI/2,V.position.set(0,0,-100),V.receiveShadow=!0,j.add(V);const H=new ut({color:1579030,roughness:.92}),J=new le(new gn(4.5,800),H);J.rotation.x=-Math.PI/2,J.position.set(-6.25,.005,-100),J.receiveShadow=!0,j.add(J);const te=new le(new gn(4.5,800),H);te.rotation.x=-Math.PI/2,te.position.set(6.25,.005,-100),te.receiveShadow=!0,j.add(te);const Ee=new ut({color:2763304}),Ce=new st(.14,.14,800),ot=new le(Ce,Ee);ot.position.set(-4.06,.07,-100),j.add(ot);const ft=new le(Ce,Ee);ft.position.set(4.06,.07,-100),j.add(ft);const et=63,d=8,k=new li({color:15263976}),$=new st(.12,.01,3.2),ce=[];for(let Ye=0;Ye<et;Ye++){const lt=new le($,k);lt.position.set(0,.01,-Ye*d+200),j.add(lt),ce.push(lt)}const re=new jn,de=[],Ve=$o(777);for(let Ye=0;Ye<280;Ye++){const lt=Ve()*Math.PI*2,ht=Ve()*Math.PI*.48,bt=180;de.push(bt*Math.sin(ht)*Math.cos(lt),bt*Math.cos(ht)+30,bt*Math.sin(ht)*Math.sin(lt))}re.setAttribute("position",new an(de,3));const Fe=new J_({color:16777215,size:1.4,sizeAttenuation:!1,fog:!1});j.add(new Qy(re,Fe));const se=23,We=22,ze=14,Ae=11,Me=-12.5,dt=12.5,A=[],ge=[],Le=[],Ue=new ut({color:3022101,roughness:.92}),oe=new ut({color:667154,roughness:.88}),Mt=new ut({color:8947864,roughness:.6}),R=new ut({color:7829384,roughness:.6}),y=new ut({color:4473941,roughness:.5}),z=new ut({emissive:new xt(16772795),emissiveIntensity:3,color:1118481});function Z(){const Ye=document.createElement("canvas");Ye.width=128,Ye.height=128;const lt=Ye.getContext("2d"),ht=lt.createRadialGradient(64,64,0,64,64,64);return ht.addColorStop(0,"rgba(255, 220, 100, 0.85)"),ht.addColorStop(.25,"rgba(255, 200, 80,  0.45)"),ht.addColorStop(.55,"rgba(250, 175, 55,  0.14)"),ht.addColorStop(.8,"rgba(250, 155, 30,  0.04)"),ht.addColorStop(1,"rgba(250, 140, 20,  0)"),lt.fillStyle=ht,lt.fillRect(0,0,128,128),new Jy(Ye)}const ae=Z(),X=[12367790,11183516,10195849,5789268,3290427,9132610,4873550,10779733,2768458,6508359],ie=[12064800,1723050,1734704,8930304,6953610,1599608],q=new ut({color:16762220,roughness:.3,metalness:0,emissive:new xt(16747546),emissiveIntensity:1.5}),ee=new ut({color:658448,roughness:.05,metalness:.9}),he=new gn(.8,1.2);function be(Ye,lt){const ht=$o(lt*73+(Ye==="left"?0:333)),bt=$o(lt*131+(Ye==="left"?0:700)),He=new fn,Kt=Ye==="left",yt=Kt?Ae/2:-Ae/2,Ge=Kt?1:-1,mn=ht();let tn="building";if(lt>0&&lt<se-1){const W=$o((lt-1)*73+(Ye==="left"?0:333))();lt-1>0&&W<.3||(mn<.1?tn="park":mn<.22?tn="playground":mn<.3&&(tn="parking"))}if(tn==="building"){const U=6+ht()*4,W=U,N=ze-U,B=7+ht()*16,me=6+ht()*14,Se=X[Math.floor(ht()*X.length)],ve=X[Math.floor(ht()*X.length)],Te=-ze/2+W/2,Ie=ze/2-N/2,Xe=(Je,je,rt,we,Ct)=>{const ke=new ut({color:rt,roughness:.88,metalness:.03}),nt=new st(Ae,Je,je),vt=new le(nt,ke);vt.castShadow=!0,vt.receiveShadow=!0,vt.position.set(0,Je/2,we),He.add(vt);const nn=$o(Ct),Xt=Math.max(2,Math.round(je/2.8)),tt=Math.max(2,Math.round((Je-3.5)/3)),Lt=je/Xt*.52,Zt=(Je-3.5)/tt*.55,ct=Kt?Math.PI/2:-Math.PI/2;for(let Gt=0;Gt<Xt;Gt++)for(let kt=0;kt<tt;kt++){const $n=nn()<.18,oi=new le(new gn(Zt,Lt),$n?q:ee);oi.rotation.y=ct;const Ln=we-je/2+(Gt+.5)*(je/Xt),bi=3.5+(kt+.5)*((Je-3.5)/tt);oi.position.set(yt+Ge*.06,bi,Ln),He.add(oi)}};Xe(B,W,Se,Te,lt*17+(Ye==="left"?0:500)),Xe(me,N,ve,Ie,lt*31+(Ye==="left"?100:600));const Qe=Je=>{const je=[2757126,921632,925712,1705992],rt=new ut({color:je[Math.floor(bt()*je.length)],roughness:.85}),we=new le(new st(.08,2.3,1.1),rt);we.position.set(yt+Ge*.04,1.15,Je),He.add(we);const Ct=new ut({color:3354664,roughness:.7}),ke=new le(new st(.06,2.45,1.3),Ct);ke.position.set(yt+Ge*.03,1.225,Je),He.add(ke);const nt=new ut({color:13148208,roughness:.2,metalness:.95}),vt=new le(new cs(.055,7,5),nt);vt.position.set(yt+Ge*.1,1.05,Je+.28),He.add(vt)};Qe(Te),Qe(Ie);const Re=bt()<.4;if(Re){const Je=new ut({color:791840,roughness:.05,metalness:.6,transparent:!0,opacity:.55}),je=W*.6,rt=new le(new st(.07,2.5,je),Je);rt.position.set(yt+Ge*.035,1.25,Te),He.add(rt)}if(bt()<.38){const Je=new ut({color:ie[Math.floor(bt()*ie.length)],roughness:.95,side:ki}),je=N*.65,rt=new le(new st(.07,1.1,je),Je);rt.rotation.z=Ge*.38,rt.position.set(yt+Ge*.65,3.05,Ie),He.add(rt)}if(Re&&bt()<.4){const Je=new ut({color:1708552,roughness:.85});for(let je=0;je<2;je++){const rt=Te+(je-.5)*3.2,we=new le(new st(.65,.055,.65),Je);we.position.set(yt+Ge*.45,.74,rt),He.add(we);const Ct=new le(new rn(.035,.035,.74,5),Je);Ct.position.set(yt+Ge*.45,.37,rt),He.add(Ct);for(const ke of[-.5,.5]){const nt=new le(new st(.38,.055,.38),Je);nt.position.set(yt+Ge*.45,.44,rt+ke),He.add(nt);const vt=new le(new st(.38,.42,.055),Je);vt.position.set(yt+Ge*.45,.66,rt+ke+(ke>0?.16:-.16)),He.add(vt)}}}}else if(tn==="park"){const U=new ut({color:1719326,roughness:.95}),W=new st(30,.04,10),N=new le(W,U);N.position.set(Ge*-10,.02,0),N.receiveShadow=!0,He.add(N);const B=new ut({color:4011317,roughness:.88,metalness:.03}),me=new st(30,14,9.8),Se=new le(me,B);Se.position.set(Ge*-10,7,-9.9),Se.castShadow=!0,Se.receiveShadow=!0,He.add(Se);const ve=new le(me,B);ve.position.set(Ge*-10,7,9.9),ve.castShadow=!0,ve.receiveShadow=!0,He.add(ve);for(const ct of[Ge*-2,Ge*-6])for(const Gt of[3.2,7.2]){const kt=new le(he,bt()<.25?q:ee);kt.position.set(ct,Gt,-4.99),He.add(kt)}for(const ct of[Ge*-2,Ge*-6])for(const Gt of[3.2,7.2]){const kt=new le(he,bt()<.25?q:ee);kt.rotation.y=Math.PI,kt.position.set(ct,Gt,4.99),He.add(kt)}const Te=new fn,Ie=new le(new rn(.05,.08,1.6,5),Ue);Ie.position.set(0,.8,0),Ie.castShadow=!0,Ie.receiveShadow=!0,Te.add(Ie);const Xe=new le(new ls(.65,1),oe);Xe.position.set(0,1.9,0),Xe.castShadow=!0,Xe.receiveShadow=!0,Te.add(Xe);const Qe=new le(new ls(.5,1),oe);Qe.position.set(.04,2.35,0),Qe.castShadow=!0,Qe.receiveShadow=!0,Te.add(Qe),Te.position.set(Ge*-2.5,0,2),He.add(Te);const Re=new fn,pt=new ut({color:6045747,roughness:.9}),Pt=new ut({color:1710618,roughness:.6}),Je=new le(new st(.6,.05,1.8),pt);Je.position.set(0,.45,0),Je.castShadow=!0,Je.receiveShadow=!0,Re.add(Je);const je=new le(new st(.05,.4,1.8),pt);je.position.set(Ge*-.28,.7,0),je.castShadow=!0,je.receiveShadow=!0,Re.add(je);const rt=new st(.06,.45,.6),we=new le(rt,Pt);we.position.set(0,.225,-.8),we.castShadow=!0,Re.add(we);const Ct=new le(rt,Pt);Ct.position.set(0,.225,.8),Ct.castShadow=!0,Re.add(Ct),Re.position.set(Ge*2,0,-1.8),Re.rotation.y=Kt?-Math.PI/2:Math.PI/2,He.add(Re);const ke=new fn,nt=new le(new st(.5,.08,.08),y);nt.position.set(0,0,.25),ke.add(nt);const vt=new le(new st(.3,.1,.3),y);vt.position.set(0,-.05,.45),ke.add(vt);const nn=new li({color:16771743,transparent:!0,opacity:1}),Xt=new le(new gn(.22,.22),nn);Xt.rotation.x=Math.PI/2,Xt.position.set(0,-.11,.45),ke.add(Xt);const tt=new Cl(16756800,15,12,2);tt.position.set(0,-.15,.45),ke.add(tt);const Lt=new li({map:ae,transparent:!0,opacity:.7,depthWrite:!1,blending:os}),Zt=new le(new gn(9,9),Lt);Zt.rotation.x=-Math.PI/2,Zt.position.set(0,-4.38,.45),ke.add(Zt),ke.position.set(Ge*-2,4.4,-4.95),He.add(ke),Le.push({point:tt,ledMesh:Xt,pool:Zt,parentGroup:He,localZOffset:-4.5,maxIntensity:15,maxPoolOpacity:.7})}else if(tn==="playground"){const U=new ut({color:2046755,roughness:.95}),W=new st(30,.04,10),N=new le(W,U);N.position.set(Ge*-10,.02,0),N.receiveShadow=!0,He.add(N);const B=new ut({color:4011317,roughness:.88,metalness:.03}),me=new st(30,14,9.8),Se=new le(me,B);Se.position.set(Ge*-10,7,-9.9),Se.castShadow=!0,Se.receiveShadow=!0,He.add(Se);const ve=new le(me,B);ve.position.set(Ge*-10,7,9.9),ve.castShadow=!0,ve.receiveShadow=!0,He.add(ve);for(const qi of[Ge*-2,Ge*-6])for(const Ki of[3.2,7.2]){const Di=new le(he,bt()<.25?q:ee);Di.position.set(qi,Ki,-4.99),He.add(Di)}for(const qi of[Ge*-2,Ge*-6])for(const Ki of[3.2,7.2]){const Di=new le(he,bt()<.25?q:ee);Di.rotation.y=Math.PI,Di.position.set(qi,Ki,4.99),He.add(Di)}const Te=new ut({color:13421772,roughness:.5,metalness:.7}),Ie=new le(new st(.04,.08,9.8),Te);Ie.position.set(Ge*-4.8,.45,0),Ie.castShadow=!0,He.add(Ie);const Xe=new le(new st(.04,.08,9.8),Te);Xe.position.set(Ge*-4.8,.95,0),Xe.castShadow=!0,He.add(Xe);const Qe=new rn(.03,.03,1.2,6);for(let qi=-4.5;qi<=4.5;qi+=2.25){const Ki=new le(Qe,Te);Ki.position.set(Ge*-4.8,.6,qi),Ki.castShadow=!0,He.add(Ki)}const Re=new fn,pt=new ut({color:9132587,roughness:.85}),Pt=new ut({color:14537387,roughness:.95}),Je=new le(new st(1.6,.1,1.6),Pt);Je.position.set(0,.05,0),Je.receiveShadow=!0,Re.add(Je);const je=.1,rt=.16,we=1.8,Ct=new st(we,rt,je),ke=new le(Ct,pt);ke.position.set(0,rt/2,(we-je)/2),ke.castShadow=!0,ke.receiveShadow=!0,Re.add(ke);const nt=new le(Ct,pt);nt.position.set(0,rt/2,-1.7/2),nt.castShadow=!0,nt.receiveShadow=!0,Re.add(nt);const vt=new st(je,rt,we-je*2),nn=new le(vt,pt);nn.position.set((we-je)/2,rt/2,0),nn.castShadow=!0,nn.receiveShadow=!0,Re.add(nn);const Xt=new le(vt,pt);Xt.position.set(-1.7/2,rt/2,0),Xt.castShadow=!0,Xt.receiveShadow=!0,Re.add(Xt),Re.position.set(Ge*-1.8,0,2),He.add(Re);const tt=new fn,Lt=new ut({color:6045747,roughness:.9}),Zt=new ut({color:1710618,roughness:.6}),ct=new le(new st(.6,.05,1.8),Lt);ct.position.set(0,.45,0),ct.castShadow=!0,ct.receiveShadow=!0,tt.add(ct);const Gt=new le(new st(.05,.4,1.8),Lt);Gt.position.set(Ge*-.28,.7,0),Gt.castShadow=!0,Gt.receiveShadow=!0,tt.add(Gt);const kt=new st(.06,.45,.6),$n=new le(kt,Zt);$n.position.set(0,.225,-.8),$n.castShadow=!0,tt.add($n);const oi=new le(kt,Zt);oi.position.set(0,.225,.8),oi.castShadow=!0,tt.add(oi),tt.position.set(Ge*2,0,-2),tt.rotation.y=Kt?-Math.PI/2:Math.PI/2,He.add(tt);const Ln=new fn,bi=new ut({color:2664261,roughness:.8}),qr=new ut({color:14431557,roughness:.7}),Kr=new le(new st(.8,1,.8),bi);Kr.position.set(0,.5,0),Kr.castShadow=!0,Kr.receiveShadow=!0,Ln.add(Kr);const Pi=new ut({color:13421772,roughness:.4,metalness:.8});for(let qi of[-.35,.35])for(let Ki of[-.35,.35]){const Di=new le(new rn(.015,.015,.8,4),Pi);Di.position.set(qi,1.4,Ki),Di.castShadow=!0,Ln.add(Di)}const Zr=new le(new Tc(.65,.4,4),qr);Zr.rotation.y=Math.PI/4,Zr.position.set(0,1.9,0),Zr.castShadow=!0,Ln.add(Zr);const _r=new le(new st(2,.06,.6),qr);_r.rotation.z=-Ge*.4,_r.position.set(Ge*.85,.5,0),_r.castShadow=!0,_r.receiveShadow=!0,Ln.add(_r);const Po=new le(new st(.8,.3,.3),bi);Po.position.set(0,.15,-.55),Po.castShadow=!0,Ln.add(Po);const Lo=new le(new st(.8,.6,.3),bi);Lo.position.set(0,.3,-.85),Lo.castShadow=!0,Ln.add(Lo),Ln.position.set(Ge*-2.4,0,-2),He.add(Ln);const Li=new fn,gv=new ut({color:16761095,roughness:.8}),Oa=new le(new rn(.025,.025,2,4),Pi);Oa.rotation.z=.22,Oa.position.set(-.2,.95,-.9),Oa.castShadow=!0,Li.add(Oa);const Ba=new le(new rn(.025,.025,2,4),Pi);Ba.rotation.z=-.22,Ba.position.set(.2,.95,-.9),Ba.castShadow=!0,Li.add(Ba);const ka=new le(new rn(.025,.025,2,4),Pi);ka.rotation.z=.22,ka.position.set(-.2,.95,.9),ka.castShadow=!0,Li.add(ka);const za=new le(new rn(.025,.025,2,4),Pi);za.rotation.z=-.22,za.position.set(.2,.95,.9),za.castShadow=!0,Li.add(za);const Yc=new le(new st(.06,.06,2),gv);Yc.position.set(0,1.9,0),Yc.castShadow=!0,Li.add(Yc);const _v=new ut({color:14431557,roughness:.9}),Ga=new le(new st(.24,.02,.38),_v);Ga.position.set(0,.45,0),Ga.castShadow=!0,Ga.receiveShadow=!0,Li.add(Ga);const sp=new le(new rn(.005,.005,1.45,4),Pi);sp.position.set(0,1.175,-.12),Li.add(sp);const op=new le(new rn(.005,.005,1.45,4),Pi);op.position.set(0,1.175,.12),Li.add(op),Li.position.set(Ge*.5,0,0),He.add(Li);const Cs=new fn,$c=new le(new rn(.045,.055,3.2,6),new ut({color:1548984,roughness:.6}));$c.position.set(0,1.6,0),$c.castShadow=!0,Cs.add($c);const qc=new le(new cs(.18,8,8),new ut({emissive:new xt(16773296),emissiveIntensity:3,color:2236962}));qc.position.set(0,3.2,0),Cs.add(qc);const Kc=new Cl(16771743,10,9,2);Kc.position.set(0,3.2,0),Cs.add(Kc);const vv=new li({map:ae,transparent:!0,opacity:.6,depthWrite:!1,blending:os}),Va=new le(new gn(8,8),vv);Va.rotation.x=-Math.PI/2,Va.position.set(0,.022,0),Cs.add(Va),Cs.position.set(Ge*-1.5,0,1.5),He.add(Cs),Le.push({point:Kc,bulb:qc,pool:Va,parentGroup:He,localZOffset:1.5,maxIntensity:10,maxPoolOpacity:.6})}else if(tn==="parking"){const U=new ut({color:1118483,roughness:.92}),W=new st(30,.02,10),N=new le(W,U);N.position.set(Ge*-10,.01,0),N.receiveShadow=!0,He.add(N);const B=new ut({color:4011317,roughness:.88,metalness:.03}),me=new st(30,14,9.8),Se=new le(me,B);Se.position.set(Ge*-10,7,-9.9),Se.castShadow=!0,Se.receiveShadow=!0,He.add(Se);const ve=new le(me,B);ve.position.set(Ge*-10,7,9.9),ve.castShadow=!0,ve.receiveShadow=!0,He.add(ve);for(const ke of[Ge*-2,Ge*-6])for(const nt of[3.2,7.2]){const vt=new le(he,bt()<.25?q:ee);vt.position.set(ke,nt,-4.99),He.add(vt)}for(const ke of[Ge*-2,Ge*-6])for(const nt of[3.2,7.2]){const vt=new le(he,bt()<.25?q:ee);vt.rotation.y=Math.PI,vt.position.set(ke,nt,4.99),He.add(vt)}const Te=new li({color:16777215,transparent:!0,opacity:.7}),Ie=new gn(6,.12),Xe=[-4.5,-1.5,1.5,4.5];for(const ke of Xe){const nt=new le(Ie,Te);nt.rotation.x=-Math.PI/2,nt.position.set(0,.015,ke),He.add(nt)}const Qe=[-3,0,3];for(let ke=0;ke<Qe.length;ke++){if(bt()<.2)continue;const nt=new fn,vt=[10230300,1720476,2236962,8028304,4880988,13935475],nn=vt[Math.floor(bt()*vt.length)],Xt=new ut({color:nn,roughness:.2,metalness:.8}),tt=new ut({color:1118481,roughness:.9}),Lt=new ut({color:1053206,roughness:.05,metalness:.9}),Zt=new st(1.8,.6,3.8),ct=new le(Zt,Xt);ct.position.set(0,.55,0),ct.castShadow=!0,ct.receiveShadow=!0,nt.add(ct);const Gt=new st(1.6,.55,2.2),kt=new le(Gt,Lt);kt.position.set(0,1.05,-.2),kt.castShadow=!0,nt.add(kt);const $n=new rn(.28,.28,.25,8),oi=new le($n,tt);oi.rotation.z=Math.PI/2,oi.position.set(-.9,.28,1),oi.castShadow=!0,nt.add(oi);const Ln=new le($n,tt);Ln.rotation.z=Math.PI/2,Ln.position.set(.9,.28,1),Ln.castShadow=!0,nt.add(Ln);const bi=new le($n,tt);bi.rotation.z=Math.PI/2,bi.position.set(-.9,.28,-1),bi.castShadow=!0,nt.add(bi);const qr=new le($n,tt);qr.rotation.z=Math.PI/2,qr.position.set(.9,.28,-1),qr.castShadow=!0,nt.add(qr);const Kr=new cs(.08,6,6),Pi=new li({color:16773296}),Zr=new le(Kr,Pi);Zr.position.set(-.6,.55,1.9),nt.add(Zr);const _r=new le(Kr,Pi);_r.position.set(.6,.55,1.9),nt.add(_r);const Po=Kt?Math.PI/2:-Math.PI/2;nt.rotation.y=Po+(bt()*.1-.05);const Lo=bt()*.6-.3;nt.position.set(Ge*-1+Lo,0,Qe[ke]),He.add(nt)}const Re=new fn,pt=new le(new st(.5,.08,.08),y);pt.position.set(0,0,.25),Re.add(pt);const Pt=new le(new st(.3,.1,.3),y);Pt.position.set(0,-.05,.45),Re.add(Pt);const Je=new li({color:16771743,transparent:!0,opacity:1}),je=new le(new gn(.22,.22),Je);je.rotation.x=Math.PI/2,je.position.set(0,-.11,.45),Re.add(je);const rt=new Cl(16756800,15,12,2);rt.position.set(0,-.15,.45),Re.add(rt);const we=new li({map:ae,transparent:!0,opacity:.7,depthWrite:!1,blending:os}),Ct=new le(new gn(9,9),we);Ct.rotation.x=-Math.PI/2,Ct.position.set(0,-4.38,.45),Re.add(Ct),Re.position.set(Ge*-2,4.4,-4.95),He.add(Re),Le.push({point:rt,ledMesh:je,pool:Ct,parentGroup:He,localZOffset:-4.5,maxIntensity:15,maxPoolOpacity:.7})}let Bn=[];if(tn==="park"||tn==="playground"?Bn=[-3.5,0,3.5]:tn==="parking"&&(Bn=[-5.2,5.2]),Bn.length>0){const U=new ut({color:13684944,roughness:.9,metalness:.05}),W=new rn(.07,.07,.65,8),N=new rn(.07,.07,.08,8),B=new cs(.07,8,6,0,Math.PI*2,0,Math.PI/2),me=Ge*8.24;for(const Se of Bn){const ve=new fn,Te=new le(W,U);Te.position.set(0,.325,0),Te.castShadow=!0,Te.receiveShadow=!0,ve.add(Te);const Ie=new le(N,U);Ie.position.set(0,.68,0),Ie.castShadow=!0,ve.add(Ie);const Xe=new le(B,U);Xe.position.set(0,.72,0),Xe.castShadow=!0,ve.add(Xe),ve.position.set(me,.02,Se),He.add(ve)}}const E=Ye==="left"?Me:dt;return He.position.set(E,0,-lt*We-ze/2+200),j.add(He),{group:He,index:lt}}for(let Ye=0;Ye<se;Ye++)A.push(be("left",Ye)),ge.push(be("right",Ye));const pe=11,fe=48,Ze=[],qe=[];function $e(Ye,lt){const ht=Ye==="left",bt=ht?-5.3:5.3,He=new fn,Kt=new le(new rn(.07,.11,2,5),Ue);Kt.position.set(0,1,0),Kt.castShadow=!0,Kt.receiveShadow=!0,He.add(Kt);const yt=new le(new ls(.85,1),oe);yt.position.set(0,2.3,0),yt.castShadow=!0,yt.receiveShadow=!0,He.add(yt);const Ge=new le(new ls(.72,1),oe);Ge.position.set(ht?.05:-.05,2.9,0),Ge.castShadow=!0,Ge.receiveShadow=!0,He.add(Ge);const mn=new le(new ls(.55,1),oe);mn.position.set(0,3.4,0),mn.castShadow=!0,mn.receiveShadow=!0,He.add(mn);const tn=Ye==="right"?fe/2:0;return He.position.set(bt,0,-lt*fe-tn-4+200),j.add(He),{group:He,index:lt,side:Ye}}for(let Ye=0;Ye<pe;Ye++)Ze.push($e("left",Ye)),qe.push($e("right",Ye));const I=46,ue=11,K=6,Pe=1.4,_e=[],ne=[];function De(Ye,lt){const ht=Ye==="left",bt=ht?-4.35:4.35,He=ht?Pe:-Pe,Kt=bt+He,yt=new fn,Ge=new le(new rn(.045,.065,K,6),Mt);Ge.position.set(bt,K/2,0),Ge.castShadow=!0,yt.add(Ge);const mn=new le(new st(Math.abs(He),.06,.06),R);mn.position.set(bt+He/2,K+.05,0),yt.add(mn);const tn=new le(new Tc(.22,.22,8),y);tn.rotation.x=Math.PI,tn.position.set(Kt,K-.1,0),yt.add(tn);const Bn=z.clone(),E=new le(new cs(.08,8,6),Bn);E.position.set(Kt,K,0),yt.add(E);const U=new Cl(16765024,18,13,2);U.position.set(Kt,K,0),U.castShadow=!0,U.shadow.mapSize.width=128,U.shadow.mapSize.height=128,yt.add(U);const W=new li({map:ae,transparent:!0,opacity:.75,depthWrite:!1,blending:os}),N=new le(new gn(14,14),W);N.rotation.x=-Math.PI/2,N.position.set(Kt*.3,.012,0),yt.add(N);const B=new li({map:ae,transparent:!0,opacity:.28,depthWrite:!1,blending:os}),me=new le(new gn(26,26),B);me.rotation.x=-Math.PI/2,me.position.set(Kt*.25,.011,0),yt.add(me);const Se=Ye==="right"?ue/2:0;return yt.position.set(0,0,-lt*ue-Se-8+200),j.add(yt),{group:yt,point:U,bulb:E,pool:N,poolOuter:me,index:lt,side:Ye}}for(let Ye=0;Ye<I;Ye++)_e.push(De("left",Ye)),ne.push(De("right",Ye));const Be=document.createElement("div");Be.style.cssText=`
      position:absolute;bottom:28px;left:0;right:0;text-align:center;
      color:rgba(255,255,255,0.45);font:12px/1 Inter,sans-serif;
      pointer-events:none;letter-spacing:0.04em;
    `,Be.textContent="the corridor stays ahead — the citizen never notices",C.style.position="relative",C.appendChild(Be);const _t=new ResizeObserver(()=>{const Ye=C.clientWidth,lt=C.clientHeight;Q.aspect=Ye/lt,Q.updateProjectionMatrix(),F.setSize(Ye,lt)});_t.observe(C);const Ke=[..._e,...ne],Ut=[...A,...ge],Bt=[...Ze,...qe],pn=I*ue,si=se*We,yn=pe*fe;let Yn=0,en=performance.now(),Mn=1,Co=1.4,bo=24;function $r(){Yn=requestAnimationFrame($r);const Ye=performance.now(),lt=Math.min((Ye-en)/1e3,.05);en=Ye,e.current||(e.current=r.current.find(N=>N.type==="ped")||o());const ht=e.current;let bt=_.current;if(L.Shift&&(bt=3),Mn+=(bt-Mn)*.08,ht){const N=ht.vx===0?0:Math.sign(ht.vx),B=ht.vy===0?0:Math.sign(ht.vy);ht.vx=N*rf*Mn,ht.vy=B*rf*Mn}const yt=(ht?Math.max(.1,Math.hypot(ht.vx,ht.vy)):rf)/g0*g0,Ge=((ht==null?void 0:ht.stride)??0)*(Mn>1.2?1.4:1);s.current,Q.position.y=1.7+Math.sin(Ge)*.04,Q.position.x=Math.sin(Ge*.5)*.012;const mn=p.current-v.current;Math.abs(mn)<.01?v.current=p.current:v.current+=Math.sign(mn)*Math.min(Math.abs(mn),6*lt),Q.rotation.set(0,v.current,0),u.current&&(M.current-=lt,M.current<=0&&(u.current=!1,w(!1),p.current=0));const Bn=Math.max(10,n.current*8)*Mn,E=10,U=i.current*Yo;Math.abs(yt-Co)>.05&&(m(yt),Co=yt),Math.abs(Bn-bo)>.5&&(g(Bn),bo=Bn);function W(N){if(N<=0){const Se=Math.abs(N);if(Se<=12)return Yo;const ve=Se-12,Te=Math.min(1,ve/10);return Yo*(1-Te)+U*Te}if(N<=Bn)return Yo;const B=N-Bn,me=Math.min(1,B/E);return Yo*(1-me)+U*me}for(const N of Ke){s.current||(N.group.position.z+=yt*lt),N.group.position.z>240&&(N.group.position.z-=pn);const B=N.group.position.z*-Math.cos(v.current),me=W(B);N.point.intensity=me*16,N.bulb.material.emissiveIntensity=me*4.5,N.pool.material.opacity=me*.7,N.poolOuter.material.opacity=me*.25,N.point.castShadow=B<14&&B>-2}for(const N of Ut)s.current||(N.group.position.z+=yt*lt),N.group.position.z>240&&(N.group.position.z-=si);for(const N of Le){const me=(N.parentGroup.position.z+N.localZOffset)*-Math.cos(v.current),Se=W(me);N.point.intensity=Se*N.maxIntensity,N.bulb&&(N.bulb.material.emissiveIntensity=Se*4.5),N.ledMesh&&(N.ledMesh.material.opacity=.3+Se*.7),N.pool.material.opacity=Se*N.maxPoolOpacity}for(const N of Bt)s.current||(N.group.position.z+=yt*lt),N.group.position.z>240&&(N.group.position.z-=yn);for(const N of ce)s.current||(N.position.z+=yt*lt),N.position.z>240&&(N.position.z-=et*d);F.render(j,Q)}return $r(),()=>{cancelAnimationFrame(Yn),_t.disconnect(),F.dispose(),window.removeEventListener("keydown",D),window.removeEventListener("keyup",O),C.contains(F.domElement)&&C.removeChild(F.domElement),C.contains(Be)&&C.removeChild(Be)}},[]),xe.jsxs("div",{style:{position:"absolute",inset:0,width:"100%",height:"100%"},children:[xe.jsx("div",{ref:a,style:{position:"absolute",inset:0,width:"100%",height:"100%"}}),xe.jsxs("div",{className:"fpv-overlay",children:[xe.jsxs("div",{className:"fpv-card",children:[xe.jsx("div",{className:"fpv-card-title",children:"🏃 Citizen Dashboard"}),xe.jsxs("div",{className:"fpv-stat-row",children:[xe.jsx("span",{className:"fpv-stat-label",children:"Velocity"}),xe.jsxs("span",{className:"fpv-stat-value",children:[h.toFixed(1)," m/s (",Math.round(h*3.6)," km/h)"]})]}),xe.jsxs("div",{className:"fpv-stat-row",children:[xe.jsx("span",{className:"fpv-stat-label",children:"Lookahead Corridor"}),xe.jsxs("span",{className:"fpv-stat-value",children:[f.toFixed(0)," meters"]})]}),xe.jsxs("div",{className:"fpv-stat-row",children:[xe.jsx("span",{className:"fpv-stat-label",children:"Light Frequency"}),xe.jsx("span",{className:"fpv-stat-value",style:{color:l>1.5?"#f59e0b":"#3b82f6"},children:l>1.5?"⚡ HIGH (Running Mode)":"🚶 NORMAL (Walking Mode)"})]}),xe.jsxs("div",{className:"fpv-stat-row",style:{fontSize:"11px",color:"rgba(255,255,255,0.4)",marginTop:4},children:[xe.jsx("span",{children:"* Warning Constant"}),xe.jsx("span",{style:{color:"#f59e0b"},children:"17.1 seconds"})]})]}),xe.jsxs("div",{className:"fpv-card",style:{minWidth:"300px"},children:[xe.jsx("div",{className:"fpv-card-title",children:"⚙️ Citizen Controls"}),xe.jsxs("div",{className:"fpv-button-group",children:[xe.jsx("button",{className:`fpv-btn ${l===1?"active":""}`,onClick:()=>T(1),children:"🚶 Walk (1.0x)"}),xe.jsx("button",{className:`fpv-btn ${l===2?"active":""}`,onClick:()=>T(2),children:"🏃 Jog (2.0x)"}),xe.jsx("button",{className:`fpv-btn ${l===3?"active":""}`,onClick:()=>T(3),children:"⚡ Sprint (3.0x)"})]}),xe.jsx("button",{className:`fpv-btn ${S?"active fpv-btn-pulse":""}`,onClick:P,style:{width:"100%",marginTop:4},children:"🔄 Look Behind (SPACE)"}),xe.jsxs("div",{style:{fontSize:"10px",color:"rgba(255,255,255,0.4)",textAlign:"center",marginTop:4},children:["Pro Tip: Hold ",xe.jsx("b",{children:"SHIFT"})," to sprint on keyboard!"]})]})]})]})}const sf=80,uA=.15,fA=.13,dA=4100,hA=1.4,pA=11,Ll=.35,mA=180,gA=300,_A=260,vA=200,Si=.85,pv=1,mv=2,_0=["#3a6fb5","#a83232","#2c8a4a","#5a4a8a","#c47a1a"];function ss(t){let e=(t+1)*2654435761>>>0||1;return()=>(e^=e<<13,e^=e>>>17,e^=e<<5,(e>>>0)/4294967295)}function xA(t,e){const n=[],r=[[0,.18*t-18],[.18*t+18,.5*t-18],[.5*t+18,.82*t-18],[.82*t+18,t]],s=[[0,.2*e-18],[.2*e+18,.5*e-18],[.5*e+18,.8*e-18],[.8*e+18,e]],o=["residential","commercial","office"];for(let a=0;a<4;a++)for(let l=0;l<4;l++){if(a===pv&&l===mv)continue;const c=o[(a+l)%3],[h,m]=r[a],[f,g]=s[l],S=m-h,w=g-f;if(S<12||w<12)continue;const _=ss(a*41+l*13+7),u=2+Math.floor(_()*2),p=2+Math.floor(_()*2);for(let v=0;v<u;v++)for(let M=0;M<p;M++){if(_()<.18)continue;const P=S/u,T=w/p,C=3,x=P-C*2,b=T-C*2;x>4&&b>4&&n.push({x:h+v*P+C,y:f+M*T+C,w:x,h:b,btype:c})}}return n}function SA({mode:t}){const e=gt.useRef(null),n=gt.useRef(null),i=gt.useRef([]),r=gt.useRef([]),s=gt.useRef([]),o=gt.useRef(null),a=gt.useRef({W:0,H:0}),l=gt.useRef(t);l.current=t;const[c,h]=gt.useState(.3),[m,f]=gt.useState(4),[g,S]=gt.useState("manual"),[w,_]=gt.useState(!1),[u,p]=gt.useState({powerNow:0,powerPct:0,kwhSaved:0,eurSaved:0,co2Saved:0,peds:0,cars:0}),v=gt.useRef(c);v.current=c;const M=gt.useRef(m);M.current=m;const P=gt.useRef(g);P.current=g;const T=gt.useRef(w);T.current=w;const C=gt.useRef(0),x=gt.useRef(0),b=gt.useRef([]),L=gt.useRef([]),D=gt.useRef(null);function O(d,k){const $=[],ce=[],re=[.18,.5,.82];[.2,.5,.8].forEach(ge=>{ce.push({ax:0,ay:ge*k,bx:d,by:ge*k,dir:"h"})}),re.forEach(ge=>{ce.push({ax:ge*d,ay:0,bx:ge*d,by:k,dir:"v"})});const Ve=Math.min(d,k)*.11;ce.forEach((ge,Le)=>{if(ge.dir==="h")for(let Ue=Ve*.5;Ue<d;Ue+=Ve)$.push({x:Ue,y:ge.ay-20,brightness:v.current,target:v.current,streetId:Le,side:"top"}),$.push({x:Ue,y:ge.ay+20,brightness:v.current,target:v.current,streetId:Le,side:"bot"});else for(let Ue=Ve*.5;Ue<k;Ue+=Ve)$.push({x:ge.ax-20,y:Ue,brightness:v.current,target:v.current,streetId:Le,side:"lft"}),$.push({x:ge.ax+20,y:Ue,brightness:v.current,target:v.current,streetId:Le,side:"rgt"})}),i.current=$,r.current=ce,b.current=xA(d,k);const Fe=18,se=[[0,.18*d-Fe],[.18*d+Fe,.5*d-Fe],[.5*d+Fe,.82*d-Fe],[.82*d+Fe,d]],We=[[0,.2*k-Fe],[.2*k+Fe,.5*k-Fe],[.5*k+Fe,.8*k-Fe],[.8*k+Fe,k]],[ze,Ae]=se[pv],[Me,dt]=We[mv];D.current={x:ze,y:Me,w:Ae-ze,h:dt-Me};const A=[];ce.forEach((ge,Le)=>{const Ue=ss(Le*137+42);if(ge.dir==="h")for(let oe=Ve;oe<d;oe+=Ve)Ue()<.28&&A.push({x:oe,y:ge.ay-20}),Ue()<.2&&A.push({x:oe,y:ge.ay+20});else for(let oe=Ve;oe<k;oe+=Ve)Ue()<.24&&A.push({x:ge.ax-20,y:oe}),Ue()<.18&&A.push({x:ge.ax+20,y:oe})}),L.current=A}function j(d,k){const{W:$,H:ce}=a.current;let re=null,de=1/0;for(const Ve of r.current){let Fe,se;Ve.dir==="h"?(Fe=Math.max(0,Math.min($,d)),se=Ve.ay):(Fe=Ve.ax,se=Math.max(0,Math.min(ce,k)));const We=Math.hypot(d-Fe,k-se);We<de&&(de=We,re={s:Ve,qx:Fe,qy:se})}return de<50?re:null}function Q(d,k,$){const ce=j(d,k);if(!ce)return null;const{s:re,qx:de,qy:Ve}=ce,Fe=$==="car"?pA:hA,se=Math.random()<.5?-1:1,We={x:de,y:Ve,vx:re.dir==="h"?se*Fe:0,vy:re.dir==="v"?se*Fe:0,type:$,street:re,t:0,stride:Math.random()*Math.PI*2,color:$==="car"?_0[Math.floor(Math.random()*_0.length)]:null};return s.current.push(We),We}function F(d){const{W:k,H:$}=a.current,ce=r.current,re=ce[Math.floor(Math.random()*ce.length)];if(re.dir==="h"){const de=Math.random()<.5;Q(de?2:k-2,re.ay,d)}else{const de=Math.random()<.5;Q(re.ax,de?2:$-2,d)}}function Y(d){const k=s.current,{W:$,H:ce}=a.current;for(const se of k)se.x+=se.vx*d/Ll,se.y+=se.vy*d/Ll,se.t+=d,se.stride+=d*(se.type==="car"?0:8);s.current=k.filter(se=>se.x>-30&&se.x<$+30&&se.y>-30&&se.y<ce+30),o.current&&!s.current.includes(o.current)&&(o.current=s.current.find(se=>se.type==="ped")||null);for(const se of s.current)for(const We of r.current){if(We===se.street)continue;let ze=!1;if(We.dir==="h"&&se.street.dir==="v"?Math.abs(se.y-We.ay)<4&&(ze=!0):We.dir==="v"&&se.street.dir==="h"&&Math.abs(se.x-We.ax)<4&&(ze=!0),ze&&Math.random()<.012){const Ae=Math.hypot(se.vx,se.vy),Me=Math.random()<.5?-1:1;We.dir==="h"?(se.vx=Me*Ae,se.vy=0):(se.vx=0,se.vy=Me*Ae),se.street=We}}for(const se of i.current)se.target=v.current;for(const se of s.current){const We=se.type==="car",ze=We?gA:mA,Ae=We?vA:_A,Me=Math.max(.1,Math.hypot(se.vx,se.vy)),dt=se.vx/Me,A=se.vy/Me,ge=Me*M.current/Ll;se.x+dt*ge,se.y+A*ge;const Le=r.current.indexOf(se.street);for(const Ue of i.current){if(!(Ue.streetId===Le)){const R=Math.hypot(Ue.x-se.x,Ue.y-se.y);if(R<50){const y=1-R/50;Ue.target=Math.max(Ue.target,y)}continue}const Mt=(Ue.x-se.x)*dt+(Ue.y-se.y)*A;Mt>=-Ae&&Mt<=ge+ze&&(Ue.target=1)}}for(const se of i.current){const ze=se.target>se.brightness?3.2:1.2,Ae=1-Math.exp(-d*ze);se.brightness+=(se.target-se.brightness)*Ae,Math.abs(se.target-se.brightness)<.01&&(se.brightness=se.target)}const de=i.current.length*sf;let Ve=0;for(const se of i.current)Ve+=sf*se.brightness;const Fe=de-Ve;return C.current+=Fe*d/36e5,{luminationPower:Ve,fullPower:de}}function V(d,k,$,ce,re,de){d.moveTo(k+de,$),d.arcTo(k+ce,$,k+ce,$+re,de),d.arcTo(k+ce,$+re,k,$+re,de),d.arcTo(k,$+re,k,$,de),d.arcTo(k,$,k+ce,$,de)}function H(d,k,$){const ce=Math.sin(k.stride)*2.5,re=Math.cos(k.stride)*1.8,de=`rgba(240,200,160,${.6+.4*$})`,Ve=`rgba(200,210,230,${.55+.45*$})`;d.strokeStyle=Ve,d.lineWidth=1.4,d.beginPath(),d.moveTo(k.x-3-ce*.4,k.y),d.lineTo(k.x+3+ce*.4,k.y),d.stroke(),d.lineWidth=1.2,d.strokeStyle=`rgba(170,180,200,${.5+.5*$})`,d.beginPath(),d.moveTo(k.x,k.y+1),d.lineTo(k.x+re*.5,k.y+4),d.moveTo(k.x,k.y+1),d.lineTo(k.x-re*.5,k.y+4),d.stroke(),d.fillStyle=Ve,d.beginPath(),d.ellipse(k.x,k.y,2.4,2.8,0,0,Math.PI*2),d.fill(),d.fillStyle=de,d.beginPath(),d.arc(k.x,k.y-1.5,1.8,0,Math.PI*2),d.fill()}function J(d,k,$){const ce=Math.atan2(k.vy,k.vx);d.save(),d.translate(k.x,k.y),d.rotate(ce);const re=16,de=8;d.fillStyle="rgba(0,0,0,0.45)",d.beginPath(),V(d,-re/2+1,-de/2+1.5,re,de,2),d.fill(),d.fillStyle=k.color||"#888",d.beginPath(),V(d,-re/2,-de/2,re,de,2.2),d.fill(),d.fillStyle="rgba(255,255,255,0.18)",d.beginPath(),V(d,-re/2+3,-de/2+1.5,re-8,de-3,1.5),d.fill(),d.fillStyle=`rgba(180,210,240,${.35+.4*$})`,d.beginPath(),d.moveTo(re/2-5,-de/2+1.5),d.lineTo(re/2-2.5,-de/2+1.5),d.lineTo(re/2-2.5,de/2-1.5),d.lineTo(re/2-5,de/2-1.5),d.closePath(),d.fill();const Ve=d.createRadialGradient(re/2+2,0,0,re/2+2,0,28);Ve.addColorStop(0,`rgba(255,240,200,${.55*(.7+.3*$)})`),Ve.addColorStop(1,"rgba(255,240,200,0)"),d.fillStyle=Ve,d.beginPath(),d.moveTo(re/2,-de/2+1),d.lineTo(re/2+28,-de*1.2),d.lineTo(re/2+28,de*1.2),d.lineTo(re/2,de/2-1),d.closePath(),d.fill(),d.fillStyle="rgba(255,250,220,0.9)",d.beginPath(),d.arc(re/2-.5,-de/2+1.8,.9,0,Math.PI*2),d.fill(),d.beginPath(),d.arc(re/2-.5,de/2-1.8,.9,0,Math.PI*2),d.fill(),d.fillStyle="rgba(220,40,40,0.8)",d.beginPath(),d.arc(-re/2+.5,-de/2+1.8,.7,0,Math.PI*2),d.fill(),d.beginPath(),d.arc(-re/2+.5,de/2-1.8,.7,0,Math.PI*2),d.fill(),d.restore()}function te(d,k){let $=0;for(const ce of i.current){const re=Math.hypot(ce.x-d,ce.y-k);re<80&&($+=ce.brightness*(1-re/80)*.4)}return Math.min(1,$+.1)}function Ee(d,k){const{W:$,H:ce}=a.current;d.fillStyle="#08080e",d.fillRect(0,0,$,ce);const re=D.current;if(re){const A=d.createLinearGradient(re.x,re.y,re.x+re.w,re.y+re.h);A.addColorStop(0,"#0a1e0c"),A.addColorStop(1,"#091508"),d.fillStyle=A,d.fillRect(re.x,re.y,re.w,re.h)}for(const A of b.current)d.fillStyle="rgba(0, 0, 0, 0.62)",d.fillRect(A.x+4,A.y+4,A.w,A.h);for(const A of b.current){const ge=d.createLinearGradient(A.x,A.y,A.x+A.w,A.y+A.h);A.btype==="residential"?(ge.addColorStop(0,"#1e1316"),ge.addColorStop(1,"#281c22")):A.btype==="commercial"?(ge.addColorStop(0,"#10152a"),ge.addColorStop(1,"#171f38")):(ge.addColorStop(0,"#111a18"),ge.addColorStop(1,"#172420")),d.fillStyle=ge,d.fillRect(A.x,A.y,A.w,A.h),d.fillStyle="rgba(255, 255, 255, 0.08)",d.fillRect(A.x,A.y,A.w,1.5),d.fillRect(A.x,A.y,1.5,A.h),d.fillStyle="rgba(0, 0, 0, 0.38)",d.fillRect(A.x+A.w-1.5,A.y,1.5,A.h),d.fillRect(A.x,A.y+A.h-1.5,A.w,1.5);const Le=ss(A.x*13+A.y*31),Ue=2,oe=5,Mt=Math.floor((A.w-6)/oe),R=Math.floor((A.h-6)/oe);if(Mt>0&&R>0)for(let y=0;y<Mt;y++)for(let z=0;z<R;z++)Le()<.13&&(d.fillStyle="rgba(250, 199, 117, 0.25)",d.fillRect(A.x+4+y*oe,A.y+4+z*oe,Ue,Ue))}d.strokeStyle="#131420",d.lineWidth=44;for(const A of r.current)d.beginPath(),d.moveTo(A.ax,A.ay),d.lineTo(A.bx,A.by),d.stroke();d.strokeStyle="#0d0e17",d.lineWidth=30;for(const A of r.current)d.beginPath(),d.moveTo(A.ax,A.ay),d.lineTo(A.bx,A.by),d.stroke();d.strokeStyle="#111222",d.lineWidth=10;for(const A of r.current)d.beginPath(),d.moveTo(A.ax,A.ay),d.lineTo(A.bx,A.by),d.stroke();d.strokeStyle="#32324e",d.lineWidth=.8,d.setLineDash([6,8]);for(const A of r.current)d.beginPath(),d.moveTo(A.ax,A.ay),d.lineTo(A.bx,A.by),d.stroke();d.setLineDash([]);const de=[.18,.5,.82],Ve=[.2,.5,.8];d.fillStyle="rgba(200, 205, 240, 0.14)",de.forEach(A=>{Ve.forEach(ge=>{const Le=A*$,Ue=ge*ce;for(let oe=0;oe<4;oe++)d.fillRect(Le-34-oe*5,Ue-13,3,26),d.fillRect(Le+28+oe*5,Ue-13,3,26),d.fillRect(Le-13,Ue-34-oe*5,26,3),d.fillRect(Le-13,Ue+28+oe*5,26,3)})});{const A=.5*$,ge=.5*ce;d.strokeStyle="#1e2030",d.lineWidth=10,d.beginPath(),d.arc(A,ge,19,0,Math.PI*2),d.stroke();const Le=d.createRadialGradient(A,ge,0,A,ge,13);Le.addColorStop(0,"#142a1a"),Le.addColorStop(1,"#0a1510"),d.fillStyle=Le,d.beginPath(),d.arc(A,ge,13,0,Math.PI*2),d.fill(),d.fillStyle="rgba(15, 58, 20, 0.97)",d.beginPath(),d.arc(A,ge,6,0,Math.PI*2),d.fill(),d.fillStyle="rgba(30, 95, 38, 0.65)",d.beginPath(),d.arc(A-1,ge-1,3,0,Math.PI*2),d.fill()}for(const A of L.current)d.fillStyle="rgba(0, 0, 0, 0.42)",d.beginPath(),d.arc(A.x+2,A.y+2,8,0,Math.PI*2),d.fill(),d.fillStyle="rgba(8, 42, 11, 0.97)",d.beginPath(),d.arc(A.x,A.y,8,0,Math.PI*2),d.fill(),d.fillStyle="rgba(15, 65, 20, 0.88)",d.beginPath(),d.arc(A.x-1,A.y-1,5.5,0,Math.PI*2),d.fill(),d.fillStyle="rgba(26, 95, 34, 0.52)",d.beginPath(),d.arc(A.x-2,A.y-2,3,0,Math.PI*2),d.fill();d.lineWidth=1;const Fe=new Map;i.current.forEach(A=>{const ge=`${A.streetId}-${A.side}`;Fe.has(ge)||Fe.set(ge,[]),Fe.get(ge).push(A)}),Fe.forEach(A=>{A.sort((ge,Le)=>ge.x+ge.y-(Le.x+Le.y));for(let ge=0;ge<A.length-1;ge++){const Le=k?Si:Math.min(Si,(A[ge].brightness+A[ge+1].brightness)/2);d.strokeStyle=`rgba(250, 199, 117, ${.02+Le*.08})`,d.beginPath(),d.moveTo(A[ge].x,A[ge].y),d.lineTo(A[ge+1].x,A[ge+1].y),d.stroke()}});const se=$*.5,We=ce*.5,ze=40,Ae=i.current.filter(A=>Math.hypot(A.x-se,A.y-We)<ze),Me=Ae.length>0?k?Si:Math.min(Si,Ae.reduce((A,ge)=>A+ge.brightness,0)/Ae.length):v.current;for(const A of i.current){if(Math.hypot(A.x-se,A.y-We)<ze)continue;const ge=k?Si:Math.min(Si,A.brightness),Le=14+ge*110,Ue=d.createRadialGradient(A.x,A.y,0,A.x,A.y,Le);Ue.addColorStop(0,`rgba(255, 224, 155, ${.62*ge})`),Ue.addColorStop(.15,`rgba(252, 208, 128, ${.4*ge})`),Ue.addColorStop(.4,`rgba(250, 199, 117, ${.16*ge})`),Ue.addColorStop(.7,`rgba(250, 199, 117, ${.05*ge})`),Ue.addColorStop(1,"rgba(250, 199, 117, 0)"),d.fillStyle=Ue,d.beginPath(),d.arc(A.x,A.y,Le,0,Math.PI*2),d.fill(),d.fillStyle=`rgba(255, 230, 170, ${.5+.5*ge})`,d.beginPath(),d.arc(A.x,A.y,2.4,0,Math.PI*2),d.fill(),d.fillStyle="#22222a",d.beginPath(),d.arc(A.x,A.y,1,0,Math.PI*2),d.fill()}{const A=14+Me*110,ge=d.createRadialGradient(se,We,0,se,We,A);ge.addColorStop(0,`rgba(255, 224, 155, ${.62*Me})`),ge.addColorStop(.15,`rgba(252, 208, 128, ${.4*Me})`),ge.addColorStop(.4,`rgba(250, 199, 117, ${.16*Me})`),ge.addColorStop(.7,`rgba(250, 199, 117, ${.05*Me})`),ge.addColorStop(1,"rgba(250, 199, 117, 0)"),d.fillStyle=ge,d.beginPath(),d.arc(se,We,A,0,Math.PI*2),d.fill(),d.fillStyle=`rgba(255, 230, 170, ${.5+.5*Me})`,d.beginPath(),d.arc(se,We,2.4,0,Math.PI*2),d.fill(),d.fillStyle="#22222a",d.beginPath(),d.arc(se,We,1,0,Math.PI*2),d.fill()}for(const A of s.current){const ge=k?Si:Math.min(Si,te(A.x,A.y));A.type==="car"?J(d,A,ge):H(d,A,ge)}const dt=d.createRadialGradient($/2,ce/2,$*.28,$/2,ce/2,$*.78);dt.addColorStop(0,"rgba(0,0,0,0)"),dt.addColorStop(1,"rgba(0,0,0,0.48)"),d.fillStyle=dt,d.fillRect(0,0,$,ce)}function Ce(d){const{W:k,H:$}=a.current;if(!o.current&&(o.current=s.current.find(X=>X.type==="ped")||Q(k*.5,$*.5,"ped"),!o.current))return;const ce=o.current,re=Math.max(.1,Math.hypot(ce.vx,ce.vy)),de=d.createLinearGradient(0,0,0,$*.45);de.addColorStop(0,"#020205"),de.addColorStop(1,"#0b0914"),d.fillStyle=de,d.fillRect(0,0,k,$);const Ve=ss(777);d.fillStyle="#ffffff";for(let X=0;X<40;X++){const ie=Ve()*k,q=Ve()*($*.45-20),ee=.5+Ve()*1;d.globalAlpha=.15+Ve()*.7,d.fillRect(ie,q,ee,ee)}d.globalAlpha=1;const Fe=$*.45,se=k/2,We=Math.sin(ce.stride*1)*3,ze=.5,Ae=(X,ie)=>{const q=1/ie;return se+X*q*k},Me=(X,ie)=>{const q=1/ie;return Fe-(X-ze)*q*$+We},dt=60;d.fillStyle="#101018",d.beginPath(),d.moveTo(Ae(-.4,dt),Me(0,dt)),d.lineTo(Ae(.4,dt),Me(0,dt)),d.lineTo(Ae(.4,.3),Me(0,.3)),d.lineTo(Ae(-.4,.3),Me(0,.3)),d.closePath(),d.fill(),d.fillStyle="#151520",d.beginPath(),d.moveTo(Ae(-.65,dt),Me(0,dt)),d.lineTo(Ae(-.4,dt),Me(0,dt)),d.lineTo(Ae(-.4,.3),Me(0,.3)),d.lineTo(Ae(-.65,.3),Me(0,.3)),d.closePath(),d.fill(),d.fillStyle="#151520",d.beginPath(),d.moveTo(Ae(.4,dt),Me(0,dt)),d.lineTo(Ae(.65,dt),Me(0,dt)),d.lineTo(Ae(.65,.3),Me(0,.3)),d.lineTo(Ae(.4,.3),Me(0,.3)),d.closePath(),d.fill(),d.strokeStyle="#222232",d.lineWidth=1.5,d.beginPath(),d.moveTo(Ae(-.4,10),Me(0,10)),d.lineTo(Ae(-.4,.3),Me(0,.3)),d.moveTo(Ae(.4,10),Me(0,10)),d.lineTo(Ae(.4,.3),Me(0,.3)),d.stroke();const ge=1.5/(Math.min(k,$)*.11*1.2),Le=ce.t*(re/Ll)*ge;d.strokeStyle="rgba(255, 255, 255, 0.03)",d.lineWidth=1;const Ue=(10-Le%.5)%.5;for(let X=Ue;X<dt;X+=.5)X<.3||(d.beginPath(),d.moveTo(Ae(-.65,X),Me(0,X)),d.lineTo(Ae(-.4,X),Me(0,X)),d.stroke(),d.beginPath(),d.moveTo(Ae(.4,X),Me(0,X)),d.lineTo(Ae(.65,X),Me(0,X)),d.stroke());d.fillStyle="rgba(255, 255, 255, 0.22)";const oe=(10-Le%1)%1;for(let X=oe;X<dt;X+=1)X<.3||(d.beginPath(),d.moveTo(Ae(-.012,X+.3),Me(0,X+.3)),d.lineTo(Ae(.012,X+.3),Me(0,X+.3)),d.lineTo(Ae(.012,X),Me(0,X)),d.lineTo(Ae(-.012,X),Me(0,X)),d.closePath(),d.fill());const Mt=[],R=Math.floor(Le/1.5)-1;for(let X=0;X<40;X++){const ie=R+X,ee=ie*1.5-Le;ee>=.3&&ee<=60&&Mt.push({type:"building",z:ee,bldIndex:ie})}const y=1.6,z=Math.floor(Le/y)-1;for(let X=0;X<30;X++){const ie=z+X,ee=ie*y-Le;if(ee>=.3&&ee<=45){const he=ie%2===0?"left":"right";Mt.push({type:"lamp",z:ee,lamp:i.current[0],relativeSide:he})}}Mt.sort((X,ie)=>Math.abs(X.z-ie.z)<.01?X.type==="lamp"?1:-1:ie.z-X.z);const Z=(X,ie,q)=>({x:X.x+(ie.x-X.x)*q,y:X.y+(ie.y-X.y)*q});Mt.forEach(X=>{if(X.type==="building"){const ie=X.bldIndex||0,ee=3.5+ss(ie*59+7)()*2.5,he=X.z,be=X.z+1.5;{const qe=ee,$e={x:Ae(-.45,he),y:Me(qe,he)},I={x:Ae(-.45,he),y:Me(0,he)},ue={x:Ae(-.45,be),y:Me(qe,be)},K={x:Ae(-.45,be),y:Me(0,be)},Pe={x:Ae(-2.2,he),y:Me(qe,he)},_e={x:Ae(-2.2,he),y:Me(0,he)};d.fillStyle="#09080f",d.beginPath(),d.moveTo($e.x,$e.y),d.lineTo(ue.x,ue.y),d.lineTo(K.x,K.y),d.lineTo(I.x,I.y),d.closePath(),d.fill(),d.strokeStyle="rgba(255,255,255,0.02)",d.lineWidth=.5,d.stroke();const ne=3,De=5;for(let Be=0;Be<ne;Be++)for(let _t=0;_t<De;_t++){const Ke=(Be+.25)/ne,Ut=(_t+.22)/De,Bt=.5/ne,pn=.55/De,si=Z(Z(I,K,Ke),Z($e,ue,Ke),Ut),yn=Z(Z(I,K,Ke),Z($e,ue,Ke),Ut+pn),Yn=Z(Z(I,K,Ke+Bt),Z($e,ue,Ke+Bt),Ut+pn),en=Z(Z(I,K,Ke+Bt),Z($e,ue,Ke+Bt),Ut),Mn=ss(ie*47+Be*13+_t*19);d.fillStyle=Mn()<.15?"rgba(250, 199, 117, 0.52)":"rgba(8, 8, 14, 0.8)",d.beginPath(),d.moveTo(si.x,si.y),d.lineTo(yn.x,yn.y),d.lineTo(Yn.x,Yn.y),d.lineTo(en.x,en.y),d.closePath(),d.fill()}d.fillStyle="#050508",d.beginPath(),d.moveTo(Pe.x,Pe.y),d.lineTo($e.x,$e.y),d.lineTo(I.x,I.y),d.lineTo(_e.x,_e.y),d.closePath(),d.fill()}{const qe=ee,$e={x:Ae(.45,he),y:Me(qe,he)},I={x:Ae(.45,he),y:Me(0,he)},ue={x:Ae(.45,be),y:Me(qe,be)},K={x:Ae(.45,be),y:Me(0,be)},Pe={x:Ae(2.2,he),y:Me(qe,he)},_e={x:Ae(2.2,he),y:Me(0,he)};d.fillStyle="#09080f",d.beginPath(),d.moveTo($e.x,$e.y),d.lineTo(ue.x,ue.y),d.lineTo(K.x,K.y),d.lineTo(I.x,I.y),d.closePath(),d.fill(),d.strokeStyle="rgba(255,255,255,0.02)",d.lineWidth=.5,d.stroke();const ne=3,De=5;for(let Be=0;Be<ne;Be++)for(let _t=0;_t<De;_t++){const Ke=(Be+.25)/ne,Ut=(_t+.22)/De,Bt=.5/ne,pn=.55/De,si=Z(Z(I,K,Ke),Z($e,ue,Ke),Ut),yn=Z(Z(I,K,Ke),Z($e,ue,Ke),Ut+pn),Yn=Z(Z(I,K,Ke+Bt),Z($e,ue,Ke+Bt),Ut+pn),en=Z(Z(I,K,Ke+Bt),Z($e,ue,Ke+Bt),Ut),Mn=ss(ie*47+Be*13+_t*19+11);d.fillStyle=Mn()<.15?"rgba(250, 199, 117, 0.52)":"rgba(8, 8, 14, 0.8)",d.beginPath(),d.moveTo(si.x,si.y),d.lineTo(yn.x,yn.y),d.lineTo(Yn.x,Yn.y),d.lineTo(en.x,en.y),d.closePath(),d.fill()}d.fillStyle="#050508",d.beginPath(),d.moveTo($e.x,$e.y),d.lineTo(Pe.x,Pe.y),d.lineTo(_e.x,_e.y),d.lineTo(I.x,I.y),d.closePath(),d.fill()}}else if(X.type==="lamp"){const ie=1/X.z,q=X.relativeSide;X.lamp;const ee=M.current*1.6,he=Math.max(1.5,ee),be=1.2;let pe=Si;if(X.z>he){const Yn=X.z-he,en=Math.max(0,Math.min(1,Yn/be)),Mn=v.current*Si;pe=Si*(1-en)+Mn*en}const fe=Math.max(.08,Math.min(1,4.5/X.z)),Ze=q==="left",qe=Ze?-.38:.38,$e=Ae(qe,X.z),I=Me(0,X.z),ue=1.8,K=Me(ue,X.z);d.strokeStyle=`rgba(140, 140, 160, ${.6+.4*ie})`,d.lineWidth=Math.max(2,4*ie),d.beginPath(),d.moveTo($e,I),d.lineTo($e,K),d.stroke();const _e=Ae(qe+(Ze?.1:-.1),X.z),ne=Me(ue+.04,X.z);d.beginPath(),d.moveTo($e,K),d.lineTo(_e,ne),d.stroke();const De=Ae(qe*.3,X.z),Be=Me(0,X.z),_t=.22*ie*k,Ke=d.createLinearGradient(_e,ne,De,Be);Ke.addColorStop(0,`rgba(255, 235, 190, ${.45*pe*fe})`),Ke.addColorStop(.5,`rgba(250, 215, 150, ${.22*pe*fe})`),Ke.addColorStop(1,`rgba(250, 199, 117, ${.1*pe*fe})`),d.fillStyle=Ke,d.beginPath(),d.moveTo(_e-2*ie,ne),d.lineTo(_e+2*ie,ne),d.lineTo(De+_t,Be),d.lineTo(De-_t,Be),d.closePath(),d.fill();const Ut=(.1+.36*pe)*ie*k,Bt=Ut*.35,pn=d.createRadialGradient(De,Be,0,De,Be,Ut);pn.addColorStop(0,`rgba(255, 224, 155, ${.7*pe*fe})`),pn.addColorStop(.3,`rgba(250, 199, 117, ${.4*pe*fe})`),pn.addColorStop(.7,`rgba(250, 199, 117, ${.12*pe*fe})`),pn.addColorStop(1,"rgba(250, 199, 117, 0)"),d.fillStyle=pn,d.beginPath(),d.ellipse(De,Be,Ut,Bt,0,0,Math.PI*2),d.fill();const si=(8+pe*32)*ie,yn=d.createRadialGradient(_e,ne,0,_e,ne,si);yn.addColorStop(0,`rgba(255, 240, 200, ${.95*pe*fe})`),yn.addColorStop(.2,`rgba(255, 224, 155, ${.55*pe*fe})`),yn.addColorStop(.5,`rgba(250, 199, 117, ${.18*pe*fe})`),yn.addColorStop(1,"rgba(250, 199, 117, 0)"),d.fillStyle=yn,d.beginPath(),d.arc(_e,ne,si,0,Math.PI*2),d.fill(),d.fillStyle=`rgba(255, 250, 235, ${.7+.3*pe*fe})`,d.beginPath(),d.arc(_e,ne,Math.max(1.5,2.5*ie),0,Math.PI*2),d.fill()}});const ae=d.createRadialGradient(k/2,$/2,k*.35,k/2,$/2,k*.85);ae.addColorStop(0,"rgba(0,0,0,0)"),ae.addColorStop(1,"rgba(0,0,0,0.35)"),d.fillStyle=ae,d.fillRect(0,0,k,$),d.fillStyle="rgba(255,255,255,0.45)",d.font="12px sans-serif",d.textAlign="center",d.fillText("the corridor stays ahead — the citizen never notices",k/2,$-24)}function ot(d){const{W:k,H:$}=a.current,ce=l.current;ce==="compare"?(d.save(),d.beginPath(),d.rect(0,0,k/2,$),d.clip(),Ee(d,!0),d.restore(),d.save(),d.beginPath(),d.rect(k/2,0,k/2,$),d.clip(),Ee(d,!1),d.restore(),d.strokeStyle="rgba(255,255,255,0.18)",d.lineWidth=1,d.beginPath(),d.moveTo(k/2,0),d.lineTo(k/2,$),d.stroke()):ce==="fpv"?Ce(d):Ee(d,ce==="baseline")}function ft(d){P.current!=="manual"&&(x.current-=d,!(x.current>0)&&(P.current==="quiet"?(x.current=4+Math.random()*5,F(Math.random()<.85?"ped":"car")):P.current==="busy"?(x.current=.4+Math.random()*.6,F(Math.random()<.55?"car":"ped")):P.current==="mixed"&&(x.current=1.2+Math.random()*1.5,F(Math.random()<.5?"car":"ped"))))}gt.useEffect(()=>{const d=e.current,k=n.current;if(!d||!k)return;const $=d.getContext("2d"),ce=window.devicePixelRatio||1,re=()=>{const ze=k.getBoundingClientRect(),Ae=ze.width,Me=ze.height;a.current={W:Ae,H:Me},d.width=Ae*ce,d.height=Me*ce,$.setTransform(ce,0,0,ce,0,0),O(Ae,Me)};re();const de=new ResizeObserver(re);de.observe(k);let Ve=performance.now(),Fe=0,se=0;const We=ze=>{Fe=requestAnimationFrame(We);const Ae=Math.min(.1,(ze-Ve)/1e3);if(Ve=ze,T.current)return;ft(Ae);const Me=Y(Ae);if(ot($),se+=Ae,se>.1){se=0;const A=i.current.length*sf,ge=A>0?Math.round(Me.luminationPower/A*100):0,Ue=(A-Me.luminationPower)/1e3*dA;p({powerNow:Math.round(Me.luminationPower),powerPct:ge,kwhSaved:C.current,eurSaved:Math.round(Ue*uA),co2Saved:Math.round(Ue*fA),peds:s.current.filter(oe=>oe.type==="ped").length,cars:s.current.filter(oe=>oe.type==="car").length})}};return Fe=requestAnimationFrame(We),()=>{cancelAnimationFrame(Fe),de.disconnect()}},[]);const et=d=>{const k=e.current.getBoundingClientRect(),$=d.clientX-k.left,ce=d.clientY-k.top,re=Q($,ce,d.shiftKey?"car":"ped");re&&re.type==="ped"&&!o.current&&(o.current=re)};return xe.jsxs("div",{className:"main",children:[xe.jsxs("div",{className:"stage",ref:n,children:[xe.jsx("canvas",{ref:e,onClick:et,style:{display:t==="fpv"?"none":void 0}}),t==="fpv"&&xe.jsx(cA,{lampsRef:i,trackedRef:o,lookaheadRef:M,baselineRef:v,agentsRef:s,pausedRef:T,spawnPed:()=>{const{W:d,H:k}=a.current;return Q(d*.5,k*.5,"ped")}}),t==="compare"&&xe.jsxs("div",{className:"stage-label-row",children:[xe.jsx("span",{children:"Always-on"}),xe.jsx("span",{children:"LumiNation"})]}),t!=="fpv"&&xe.jsx("div",{className:"stage-hint",children:"click a street to add a pedestrian · shift+click for a car"})]}),xe.jsxs("aside",{className:"sidebar",children:[xe.jsxs("div",{className:"card",children:[xe.jsx("div",{className:"card-label",children:"Power now"}),xe.jsxs("div",{className:"metric-row",children:[xe.jsx("span",{className:"metric-value",children:u.powerNow.toLocaleString()}),xe.jsx("span",{className:"metric-unit",children:"W"}),xe.jsxs("span",{className:"metric-aux",children:[u.powerPct,"% of always-on"]})]})]}),xe.jsxs("div",{className:"card",children:[xe.jsx("div",{className:"card-label",children:"Energy saved (session)"}),xe.jsxs("div",{className:"metric-row",children:[xe.jsx("span",{className:"metric-value",children:u.kwhSaved.toFixed(3)}),xe.jsx("span",{className:"metric-unit",children:"kWh"})]})]}),xe.jsxs("div",{className:"card",children:[xe.jsx("div",{className:"card-label",children:"Projected annual savings"}),xe.jsxs("div",{className:"metric-row",children:[xe.jsx("span",{className:"metric-unit",children:"€"}),xe.jsx("span",{className:"metric-value",children:u.eurSaved.toLocaleString()}),xe.jsxs("span",{className:"metric-aux",children:[u.co2Saved.toLocaleString()," kg CO₂/yr"]})]})]}),xe.jsxs("div",{className:"card",children:[xe.jsx("div",{className:"card-label",children:"Agents"}),xe.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginTop:4},children:[xe.jsx("span",{children:"Pedestrians"}),xe.jsx("span",{style:{fontWeight:500},children:u.peds})]}),xe.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginTop:4},children:[xe.jsx("span",{children:"Vehicles"}),xe.jsx("span",{style:{fontWeight:500},children:u.cars})]})]}),xe.jsxs("div",{className:"card controls",children:[xe.jsx("div",{className:"card-label",children:"Scenario"}),xe.jsxs("select",{value:g,onChange:d=>S(d.target.value),children:[xe.jsx("option",{value:"manual",children:"Manual (click to add)"}),xe.jsx("option",{value:"quiet",children:"Quiet residential · 3am"}),xe.jsx("option",{value:"busy",children:"Busy avenue · 8pm"}),xe.jsx("option",{value:"mixed",children:"Mixed traffic · 11pm"})]}),xe.jsxs("div",{className:"row",children:[xe.jsx("span",{children:"Baseline brightness"}),xe.jsxs("span",{children:[Math.round(c*100),"%"]})]}),xe.jsx("input",{type:"range",min:15,max:100,step:1,value:Math.round(c*100),onChange:d=>h(parseInt(d.target.value,10)/100)}),xe.jsxs("div",{className:"row",children:[xe.jsx("span",{children:"Lookahead"}),xe.jsxs("span",{children:[m.toFixed(1),"s"]})]}),xe.jsx("input",{type:"range",min:20,max:80,step:1,value:Math.round(m*10),onChange:d=>f(parseInt(d.target.value,10)/10)}),xe.jsxs("div",{className:"button-row",children:[xe.jsx("button",{onClick:()=>{s.current=[],o.current=null,C.current=0},children:"Clear"}),xe.jsx("button",{onClick:()=>_(d=>!d),children:w?"Resume":"Pause"})]})]})]})]})}function yA(){const[t,e]=gt.useState("lumination");return xe.jsxs("div",{className:"app",children:[xe.jsxs("header",{className:"topbar",children:[xe.jsxs("div",{className:"brand",children:[xe.jsx("div",{className:"brand-mark",children:"L"}),xe.jsxs("div",{children:[xe.jsx("div",{className:"brand-name",children:"LumiNation"}),xe.jsx("div",{className:"brand-tag",children:"The adaptive light corridor · live simulator"})]})]}),xe.jsxs("div",{className:"mode-bar",children:[xe.jsx("button",{className:t==="lumination"?"active":"",onClick:()=>e("lumination"),children:"LumiNation"}),xe.jsx("button",{className:t==="baseline"?"active":"",onClick:()=>e("baseline"),children:"Always-on"}),xe.jsx("button",{className:t==="compare"?"active":"",onClick:()=>e("compare"),children:"Compare"}),xe.jsx("button",{className:t==="fpv"?"active":"",onClick:()=>e("fpv"),children:"Citizen view"})]})]}),xe.jsx(SA,{mode:t}),xe.jsxs("footer",{className:"footer",children:[xe.jsx("span",{children:"LumiNation · Red Bull Basement Portugal 2026 · Instituto Superior Técnico"}),xe.jsx("span",{children:"v0.1 · early prototype"})]})]})}of.createRoot(document.getElementById("root")).render(xe.jsx(Uv.StrictMode,{children:xe.jsx(yA,{})}));
