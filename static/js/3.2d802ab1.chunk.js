(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[3],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n(148);function i(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const a=Object(o.a)(n);Object(r.useEffect)((()=>{const n="function"===typeof e?e():e;return n.addEventListener(t,a,i),()=>n.removeEventListener(t,a,i)}),[e])}},169:function(e,t,n){"use strict";var r=n(0),o=(n(155),n(152),n(148));n(156);n(157),n(158);n(165);new WeakMap;var i=n(153),a=n(8);const s=["onKeyDown"];const c=r.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,s);const[c]=Object(i.b)(Object.assign({tagName:"a"},r)),u=Object(o.a)((e=>{c.onKeyDown(e),null==n||n(e)}));return(l=r.href)&&"#"!==l.trim()&&"button"!==r.role?Object(a.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):Object(a.jsx)("a",Object.assign({ref:t},r,c,{onKeyDown:u}));var l}));c.displayName="Anchor";t.a=c},227:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,a,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,s],l=0;(c=new Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},268:function(e,t,n){"use strict";function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(e)?e:Object.keys(e).map((t=>(e[t].name=t,e[t])))}function o(e){let{enabled:t,enableEvents:n,placement:o,flip:i,offset:a,fixed:s,containerPadding:c,arrowElement:u,popperConfig:l={}}=e;var f,d,p,v,b;const m=function(e){const t={};return Array.isArray(e)?(null==e||e.forEach((e=>{t[e.name]=e})),t):e||t}(l.modifiers);return Object.assign({},l,{placement:o,enabled:t,strategy:s?"fixed":l.strategy,modifiers:r(Object.assign({},m,{eventListeners:{enabled:n,options:null==(f=m.eventListeners)?void 0:f.options},preventOverflow:Object.assign({},m.preventOverflow,{options:c?Object.assign({padding:c},null==(d=m.preventOverflow)?void 0:d.options):null==(p=m.preventOverflow)?void 0:p.options}),offset:{options:Object.assign({offset:a},null==(v=m.offset)?void 0:v.options)},arrow:Object.assign({},m.arrow,{enabled:!!u,options:Object.assign({},null==(b=m.arrow)?void 0:b.options,{element:u})}),flip:Object.assign({enabled:!!i},m.flip)}))})}n.d(t,"a",(function(){return o}))},269:function(e,t,n){"use strict";n.d(t,"b",(function(){return p}));var r=n(192),o=n(180),i=n(167),a=n(0),s=n(148),c=n(162),u=n.n(c);const l=()=>{};function f(e){return 0===e.button}function d(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const p=e=>e&&("current"in e?e.current:e),v={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};t.a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,{disabled:n,clickTrigger:c="click"}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const b=Object(a.useRef)(!1),m=Object(a.useRef)(!1),h=Object(a.useCallback)((t=>{const n=p(e);u()(!!n,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),b.current=!n||d(t)||!f(t)||!!Object(r.a)(n,t.target)||m.current,m.current=!1}),[e]),g=Object(s.a)((t=>{const n=p(e);n&&Object(r.a)(n,t.target)&&(m.current=!0)})),y=Object(s.a)((e=>{b.current||t(e)}));Object(a.useEffect)((()=>{var t,r;if(n||null==e)return;const a=Object(i.a)(p(e)),s=a.defaultView||window;let u=null!=(t=s.event)?t:null==(r=s.parent)?void 0:r.event,f=null;v[c]&&(f=Object(o.a)(a,v[c],g,!0));const d=Object(o.a)(a,c,h,!0),b=Object(o.a)(a,c,(e=>{e!==u?y(e):u=void 0}));let m=[];return"ontouchstart"in a.documentElement&&(m=[].slice.call(a.body.children).map((e=>Object(o.a)(e,"mousemove",l)))),()=>{null==f||f(),d(),b(),m.forEach((e=>e()))}}),[e,n,c,h,g,y])}},272:function(e,t,n){"use strict";var r=n(0),o=Object.prototype.hasOwnProperty;function i(e,t,n){for(n of e.keys())if(a(n,t))return n}function a(e,t){var n,r,s;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&a(e[r],t[r]););return-1===r}if(n===Set){if(e.size!==t.size)return!1;for(r of e){if((s=r)&&"object"===typeof s&&!(s=i(t,s)))return!1;if(!t.has(s))return!1}return!0}if(n===Map){if(e.size!==t.size)return!1;for(r of e){if((s=r[0])&&"object"===typeof s&&!(s=i(t,s)))return!1;if(!a(r[1],t.get(s)))return!1}return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return-1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return-1===r}if(!n||"object"===typeof e){for(n in r=0,e){if(o.call(e,n)&&++r&&!o.call(t,n))return!1;if(!(n in t)||!a(e[n],t[n]))return!1}return Object.keys(t).length===r}}return e!==e&&t!==t}var s=n(157);var c=function(e){const t=Object(s.a)();return[e[0],Object(r.useCallback)((n=>{if(t())return e[1](n)}),[t,e[1]])]};function u(e){return e.split("-")[0]}function l(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function f(e){return e instanceof l(e).Element||e instanceof Element}function d(e){return e instanceof l(e).HTMLElement||e instanceof HTMLElement}function p(e){return"undefined"!==typeof ShadowRoot&&(e instanceof l(e).ShadowRoot||e instanceof ShadowRoot)}var v=Math.max,b=Math.min,m=Math.round;function h(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function g(){return!/^((?!chrome|android).)*safari/i.test(h())}function y(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&d(e)&&(o=e.offsetWidth>0&&m(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&m(r.height)/e.offsetHeight||1);var a=(f(e)?l(e):window).visualViewport,s=!g()&&n,c=(r.left+(s&&a?a.offsetLeft:0))/o,u=(r.top+(s&&a?a.offsetTop:0))/i,p=r.width/o,v=r.height/i;return{width:p,height:v,top:u,right:c+p,bottom:u+v,left:c,x:c,y:u}}function O(e){var t=y(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function w(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&p(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function j(e){return e?(e.nodeName||"").toLowerCase():null}function x(e){return l(e).getComputedStyle(e)}function E(e){return["table","td","th"].indexOf(j(e))>=0}function C(e){return((f(e)?e.ownerDocument:e.document)||window.document).documentElement}function D(e){return"html"===j(e)?e:e.assignedSlot||e.parentNode||(p(e)?e.host:null)||C(e)}function k(e){return d(e)&&"fixed"!==x(e).position?e.offsetParent:null}function S(e){for(var t=l(e),n=k(e);n&&E(n)&&"static"===x(n).position;)n=k(n);return n&&("html"===j(n)||"body"===j(n)&&"static"===x(n).position)?t:n||function(e){var t=/firefox/i.test(h());if(/Trident/i.test(h())&&d(e)&&"fixed"===x(e).position)return null;var n=D(e);for(p(n)&&(n=n.host);d(n)&&["html","body"].indexOf(j(n))<0;){var r=x(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function A(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function P(e,t,n){return v(e,b(t,n))}function N(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function R(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var T="top",M="bottom",L="right",W="left",I="auto",B=[T,M,L,W],_="start",H="end",$="viewport",V="popper",U=B.reduce((function(e,t){return e.concat([t+"-"+_,t+"-"+H])}),[]),F=[].concat(B,[I]).reduce((function(e,t){return e.concat([t,t+"-"+_,t+"-"+H])}),[]),K=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var q={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=u(n.placement),c=A(s),l=[W,L].indexOf(s)>=0?"height":"width";if(i&&a){var f=function(e,t){return N("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:R(e,B))}(o.padding,n),d=O(i),p="y"===c?T:W,v="y"===c?M:L,b=n.rects.reference[l]+n.rects.reference[c]-a[c]-n.rects.popper[l],m=a[c]-n.rects.reference[c],h=S(i),g=h?"y"===c?h.clientHeight||0:h.clientWidth||0:0,y=b/2-m/2,w=f[p],j=g-d[l]-f[v],x=g/2-d[l]/2+y,E=P(w,x,j),C=c;n.modifiersData[r]=((t={})[C]=E,t.centerOffset=E-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&w(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function z(e){return e.split("-")[1]}var Y={top:"auto",right:"auto",bottom:"auto",left:"auto"};function J(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,f=e.roundOffsets,d=e.isFixed,p=a.x,v=void 0===p?0:p,b=a.y,h=void 0===b?0:b,g="function"===typeof f?f({x:v,y:h}):{x:v,y:h};v=g.x,h=g.y;var y=a.hasOwnProperty("x"),O=a.hasOwnProperty("y"),w=W,j=T,E=window;if(u){var D=S(n),k="clientHeight",A="clientWidth";if(D===l(n)&&"static"!==x(D=C(n)).position&&"absolute"===s&&(k="scrollHeight",A="scrollWidth"),D=D,o===T||(o===W||o===L)&&i===H)j=M,h-=(d&&D===E&&E.visualViewport?E.visualViewport.height:D[k])-r.height,h*=c?1:-1;if(o===W||(o===T||o===M)&&i===H)w=L,v-=(d&&D===E&&E.visualViewport?E.visualViewport.width:D[A])-r.width,v*=c?1:-1}var P,N=Object.assign({position:s},u&&Y),R=!0===f?function(e,t){var n=e.x,r=e.y,o=t.devicePixelRatio||1;return{x:m(n*o)/o||0,y:m(r*o)/o||0}}({x:v,y:h},l(n)):{x:v,y:h};return v=R.x,h=R.y,c?Object.assign({},N,((P={})[j]=O?"0":"",P[w]=y?"0":"",P.transform=(E.devicePixelRatio||1)<=1?"translate("+v+"px, "+h+"px)":"translate3d("+v+"px, "+h+"px, 0)",P)):Object.assign({},N,((t={})[j]=O?h+"px":"",t[w]=y?v+"px":"",t.transform="",t))}var X={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,l={placement:u(t.placement),variation:z(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,J(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,J(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},G={passive:!0};var Q={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=l(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,G)})),s&&c.addEventListener("resize",n.update,G),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,G)})),s&&c.removeEventListener("resize",n.update,G)}},data:{}},Z={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,(function(e){return Z[e]}))}var te={start:"end",end:"start"};function ne(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function re(e){var t=l(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function oe(e){return y(C(e)).left+re(e).scrollLeft}function ie(e){var t=x(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ae(e){return["html","body","#document"].indexOf(j(e))>=0?e.ownerDocument.body:d(e)&&ie(e)?e:ae(D(e))}function se(e,t){var n;void 0===t&&(t=[]);var r=ae(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=l(r),a=o?[i].concat(i.visualViewport||[],ie(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(se(D(a)))}function ce(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ue(e,t,n){return t===$?ce(function(e,t){var n=l(e),r=C(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;var u=g();(u||!u&&"fixed"===t)&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s+oe(e),y:c}}(e,n)):f(t)?function(e,t){var n=y(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):ce(function(e){var t,n=C(e),r=re(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=v(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=v(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+oe(e),c=-r.scrollTop;return"rtl"===x(o||n).direction&&(s+=v(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(C(e)))}function le(e,t,n,r){var o="clippingParents"===t?function(e){var t=se(D(e)),n=["absolute","fixed"].indexOf(x(e).position)>=0&&d(e)?S(e):e;return f(n)?t.filter((function(e){return f(e)&&w(e,n)&&"body"!==j(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=ue(e,n,r);return t.top=v(o.top,t.top),t.right=b(o.right,t.right),t.bottom=b(o.bottom,t.bottom),t.left=v(o.left,t.left),t}),ue(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function fe(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?u(o):null,a=o?z(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case T:t={x:s,y:n.y-r.height};break;case M:t={x:s,y:n.y+n.height};break;case L:t={x:n.x+n.width,y:c};break;case W:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var l=i?A(i):null;if(null!=l){var f="y"===l?"height":"width";switch(a){case _:t[l]=t[l]-(n[f]/2-r[f]/2);break;case H:t[l]=t[l]+(n[f]/2-r[f]/2)}}return t}function de(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,c=void 0===s?"clippingParents":s,u=n.rootBoundary,l=void 0===u?$:u,d=n.elementContext,p=void 0===d?V:d,v=n.altBoundary,b=void 0!==v&&v,m=n.padding,h=void 0===m?0:m,g=N("number"!==typeof h?h:R(h,B)),O=p===V?"reference":V,w=e.rects.popper,j=e.elements[b?O:p],x=le(f(j)?j:j.contextElement||C(e.elements.popper),c,l,a),E=y(e.elements.reference),D=fe({reference:E,element:w,strategy:"absolute",placement:o}),k=ce(Object.assign({},w,D)),S=p===V?k:E,A={top:x.top-S.top+g.top,bottom:S.bottom-x.bottom+g.bottom,left:x.left-S.left+g.left,right:S.right-x.right+g.right},P=e.modifiersData.offset;if(p===V&&P){var W=P[o];Object.keys(A).forEach((function(e){var t=[L,M].indexOf(e)>=0?1:-1,n=[T,M].indexOf(e)>=0?"y":"x";A[e]+=W[n]*t}))}return A}var pe={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,l=n.padding,f=n.boundary,d=n.rootBoundary,p=n.altBoundary,v=n.flipVariations,b=void 0===v||v,m=n.allowedAutoPlacements,h=t.options.placement,g=u(h),y=c||(g===h||!b?[ee(h)]:function(e){if(u(e)===I)return[];var t=ee(e);return[ne(e),t,ne(t)]}(h)),O=[h].concat(y).reduce((function(e,n){return e.concat(u(n)===I?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?F:c,f=z(r),d=f?s?U:U.filter((function(e){return z(e)===f})):B,p=d.filter((function(e){return l.indexOf(e)>=0}));0===p.length&&(p=d);var v=p.reduce((function(t,n){return t[n]=de(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[u(n)],t}),{});return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}(t,{placement:n,boundary:f,rootBoundary:d,padding:l,flipVariations:b,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,j=t.rects.popper,x=new Map,E=!0,C=O[0],D=0;D<O.length;D++){var k=O[D],S=u(k),A=z(k)===_,P=[T,M].indexOf(S)>=0,N=P?"width":"height",R=de(t,{placement:k,boundary:f,rootBoundary:d,altBoundary:p,padding:l}),H=P?A?L:W:A?M:T;w[N]>j[N]&&(H=ee(H));var $=ee(H),V=[];if(i&&V.push(R[S]<=0),s&&V.push(R[H]<=0,R[$]<=0),V.every((function(e){return e}))){C=k,E=!1;break}x.set(k,V)}if(E)for(var K=function(e){var t=O.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return C=t,"break"},q=b?3:1;q>0;q--){if("break"===K(q))break}t.placement!==C&&(t.modifiersData[r]._skip=!0,t.placement=C,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function be(e){return[T,L,M,W].some((function(t){return e[t]>=0}))}var me={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=de(t,{elementContext:"reference"}),s=de(t,{altBoundary:!0}),c=ve(a,r),u=ve(s,o,i),l=be(c),f=be(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":f})}};var he={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=F.reduce((function(e,n){return e[n]=function(e,t,n){var r=u(e),o=[W,T].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[W,L].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=a}};var ge={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=fe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var ye={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,l=n.rootBoundary,f=n.altBoundary,d=n.padding,p=n.tether,m=void 0===p||p,h=n.tetherOffset,g=void 0===h?0:h,y=de(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:f}),w=u(t.placement),j=z(t.placement),x=!j,E=A(w),C="x"===E?"y":"x",D=t.modifiersData.popperOffsets,k=t.rects.reference,N=t.rects.popper,R="function"===typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,I="number"===typeof R?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,H={x:0,y:0};if(D){if(i){var $,V="y"===E?T:W,U="y"===E?M:L,F="y"===E?"height":"width",K=D[E],q=K+y[V],Y=K-y[U],J=m?-N[F]/2:0,X=j===_?k[F]:N[F],G=j===_?-N[F]:-k[F],Q=t.elements.arrow,Z=m&&Q?O(Q):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[V],ne=ee[U],re=P(0,k[F],Z[F]),oe=x?k[F]/2-J-re-te-I.mainAxis:X-re-te-I.mainAxis,ie=x?-k[F]/2+J+re+ne+I.mainAxis:G+re+ne+I.mainAxis,ae=t.elements.arrow&&S(t.elements.arrow),se=ae?"y"===E?ae.clientTop||0:ae.clientLeft||0:0,ce=null!=($=null==B?void 0:B[E])?$:0,ue=K+ie-ce,le=P(m?b(q,K+oe-ce-se):q,K,m?v(Y,ue):Y);D[E]=le,H[E]=le-K}if(s){var fe,pe="x"===E?T:W,ve="x"===E?M:L,be=D[C],me="y"===C?"height":"width",he=be+y[pe],ge=be-y[ve],ye=-1!==[T,W].indexOf(w),Oe=null!=(fe=null==B?void 0:B[C])?fe:0,we=ye?he:be-k[me]-N[me]-Oe+I.altAxis,je=ye?be+k[me]+N[me]-Oe-I.altAxis:ge,xe=m&&ye?function(e,t,n){var r=P(e,t,n);return r>n?n:r}(we,be,je):P(m?we:he,be,m?je:ge);D[C]=xe,H[C]=xe-be}t.modifiersData[r]=H}},requiresIfExists:["offset"]};function Oe(e,t,n){void 0===n&&(n=!1);var r=d(t),o=d(t)&&function(e){var t=e.getBoundingClientRect(),n=m(t.width)/e.offsetWidth||1,r=m(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=C(t),a=y(e,o,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==j(t)||ie(i))&&(s=function(e){return e!==l(e)&&d(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:re(e);var t}(t)),d(t)?((c=y(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=oe(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function we(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function je(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var xe={placement:"bottom",modifiers:[],strategy:"absolute"};function Ee(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Ce(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?xe:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},xe,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;u(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:f(e)?se(e):e.contextElement?se(e.contextElement):[],popper:se(t)};var l=function(e){var t=we(e);return K.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=l.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),u=function(){};a.push(s||u)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(Ee(t,n)){o.rects={reference:Oe(t,S(n),"fixed"===o.options.strategy),popper:O(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,u=i.options,l=void 0===u?{}:u,f=i.name;"function"===typeof a&&(o=a({state:o,options:l,name:f,instance:c})||o)}else o.reset=!1,r=-1}}},update:je((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){u(),s=!0}};if(!Ee(e,t))return c;function u(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}const De=Ce({defaultModifiers:[me,ge,X,Q,he,pe,ye,q]}),ke=["enabled","placement","strategy","modifiers"];function Se(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}const Ae={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},Pe={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:e=>{let{state:t}=e;return()=>{const{reference:e,popper:n}=t.elements;if("removeAttribute"in e){const t=(e.getAttribute("aria-describedby")||"").split(",").filter((e=>e.trim()!==n.id));t.length?e.setAttribute("aria-describedby",t.join(",")):e.removeAttribute("aria-describedby")}}},fn:e=>{let{state:t}=e;var n;const{popper:r,reference:o}=t.elements,i=null==(n=r.getAttribute("role"))?void 0:n.toLowerCase();if(r.id&&"tooltip"===i&&"setAttribute"in o){const e=o.getAttribute("aria-describedby");if(e&&-1!==e.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",e?`${e},${r.id}`:r.id)}}},Ne=[];t.a=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{enabled:o=!0,placement:i="bottom",strategy:s="absolute",modifiers:u=Ne}=n,l=Se(n,ke);const f=Object(r.useRef)(u),d=Object(r.useRef)(),p=Object(r.useCallback)((()=>{var e;null==(e=d.current)||e.update()}),[]),v=Object(r.useCallback)((()=>{var e;null==(e=d.current)||e.forceUpdate()}),[]),[b,m]=c(Object(r.useState)({placement:i,update:p,forceUpdate:v,attributes:{},styles:{popper:{},arrow:{}}})),h=Object(r.useMemo)((()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:e=>{let{state:t}=e;const n={},r={};Object.keys(t.elements).forEach((e=>{n[e]=t.styles[e],r[e]=t.attributes[e]})),m({state:t,styles:n,attributes:r,update:p,forceUpdate:v,placement:t.placement})}})),[p,v,m]),g=Object(r.useMemo)((()=>(a(f.current,u)||(f.current=u),f.current)),[u]);return Object(r.useEffect)((()=>{d.current&&o&&d.current.setOptions({placement:i,strategy:s,modifiers:[...g,h,Ae]})}),[s,i,h,o,g]),Object(r.useEffect)((()=>{if(o&&null!=e&&null!=t)return d.current=De(e,t,Object.assign({},l,{placement:i,strategy:s,modifiers:[...g,Pe,h]})),()=>{null!=d.current&&(d.current.destroy(),d.current=void 0,m((e=>Object.assign({},e,{attributes:{},styles:{popper:{}}}))))}}),[o,e,t]),b}},273:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c}));var r=n(6),o=n(14),i=n(0);n(227);function a(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function s(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function c(e,t,n){var r=Object(i.useRef)(void 0!==e),o=Object(i.useState)(t),a=o[0],s=o[1],c=void 0!==e,u=r.current;return r.current=c,!c&&u&&a!==t&&s(t),[c?e:a,Object(i.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}function u(e,t){return Object.keys(t).reduce((function(n,i){var u,l=n,f=l[a(i)],d=l[i],p=Object(o.a)(l,[a(i),i].map(s)),v=t[i],b=c(d,f,e[v]),m=b[0],h=b[1];return Object(r.a)({},p,((u={})[i]=m,u[v]=h,u))}),e)}n(18);function l(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function f(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function d(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}l.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0,d.__suppressDeprecationWarning=!0},410:function(e,t,n){"use strict";var r=n(143),o=n.n(r),i=n(0),a=n.n(i),s=n(209),c=n(183);function u(e,t,n){const r=Object(i.useRef)(void 0!==e),[o,a]=Object(i.useState)(t),s=void 0!==e,c=r.current;return r.current=s,!s&&c&&o!==t&&a(t),[s?e:o,Object(i.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const[o,...i]=t;let s=null==n?void 0:n(o,...i);return a(o),s}),[n])]}var l=n(158);var f=n(156),d=n(148);var p=i.createContext(null),v=n(155),b=n(272),m=n(269),h=n(268),g=n(8);const y=["children","usePopper"];const O=()=>{};function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=Object(i.useContext)(p),[n,r]=Object(v.a)(),o=Object(i.useRef)(!1),{flip:a,offset:s,rootCloseEvent:c,fixed:u=!1,placement:l,popperConfig:f={},enableEventListeners:d=!0,usePopper:g=!!t}=e,y=null==(null==t?void 0:t.show)?!!e.show:t.show;y&&!o.current&&(o.current=!0);const w=e=>{null==t||t.toggle(!1,e)},{placement:j,setMenu:x,menuElement:E,toggleElement:C}=t||{},D=Object(b.a)(C,E,Object(h.a)({placement:l||j||"bottom-start",enabled:g,enableEvents:null==d?y:d,offset:s,flip:a,fixed:u,arrowElement:n,popperConfig:f})),k=Object.assign({ref:x||O,"aria-labelledby":null==C?void 0:C.id},D.attributes.popper,{style:D.styles.popper}),S={show:y,placement:j,hasShown:o.current,toggle:null==t?void 0:t.toggle,popper:g?D:null,arrowProps:g?Object.assign({ref:r},D.attributes.arrow,{style:D.styles.arrow}):{}};return Object(m.a)(E,w,{clickTrigger:c,disabled:!y}),[k,S]}function j(e){let{children:t,usePopper:n=!0}=e,r=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,y);const[o,i]=w(Object.assign({},r,{usePopper:n}));return Object(g.jsx)(g.Fragment,{children:t(o,i)})}j.displayName="DropdownMenu";var x=j;const E={prefix:String(Math.round(1e10*Math.random())),current:0},C=a.a.createContext(E),D=a.a.createContext(!1);let k=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement),S=new WeakMap;function A(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,i.useContext)(C),n=(0,i.useRef)(null);if(null===n.current&&!e){var r,o;let e=null===(o=a.a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===o||null===(r=o.ReactCurrentOwner)||void 0===r?void 0:r.current;if(e){let n=S.get(e);null==n?S.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(t.current=n.id,S.delete(e))}n.current=++t.current}return n.current}const P="function"===typeof a.a.useId?function(e){let t=a.a.useId(),[n]=(0,i.useState)("function"===typeof a.a.useSyncExternalStore?a.a.useSyncExternalStore(T,N,R):(0,i.useContext)(D));return e||`${n?"react-aria":`react-aria${E.prefix}`}-${t}`}:function(e){let t=(0,i.useContext)(C);t!==E||k||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=A(!!e),r=`react-aria${t.prefix}`;return e||`${r}-${n}`};function N(){return!1}function R(){return!0}function T(e){return()=>{}}const M=e=>{var t;return"menu"===(null==(t=e.getAttribute("role"))?void 0:t.toLowerCase())},L=()=>{};function W(){const e=P(),{show:t=!1,toggle:n=L,setToggle:r,menuElement:o}=Object(i.useContext)(p)||{},a=Object(i.useCallback)((e=>{n(!t,e)}),[t,n]),s={id:e,ref:r||L,onClick:a,"aria-expanded":!!t};return o&&M(o)&&(s["aria-haspopup"]=!0),[s,{show:t,toggle:n}]}function I(e){let{children:t}=e;const[n,r]=W();return Object(g.jsx)(g.Fragment,{children:t(n,r)})}I.displayName="DropdownToggle";var B=I;const _=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null};var H=i.createContext(null);const $=i.createContext(null);$.displayName="NavContext";var V=$,U=n(153),F=n(194);const K=["eventKey","disabled","onClick","active","as"];function q(e){let{key:t,href:n,active:r,disabled:o,onClick:a}=e;const s=Object(i.useContext)(H),c=Object(i.useContext)(V),{activeKey:u}=c||{},l=_(t,n),f=null==r&&null!=t?_(u)===l:r;return[{onClick:Object(d.a)((e=>{o||(null==a||a(e),s&&!e.isPropagationStopped()&&s(l,e))})),"aria-disabled":o||void 0,"aria-selected":f,[Object(F.a)("dropdown-item")]:""},{isActive:f}]}const z=i.forwardRef(((e,t)=>{let{eventKey:n,disabled:r,onClick:o,active:i,as:a=U.a}=e,s=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,K);const[c]=q({key:n,href:s.href,disabled:r,onClick:o,active:i});return Object(g.jsx)(a,Object.assign({},s,{ref:t},c))}));z.displayName="DropdownItem";var Y=z,J=n(184);function X(){const e=function(){const[,e]=Object(i.useReducer)((e=>!e),!1);return e}(),t=Object(i.useRef)(null),n=Object(i.useCallback)((n=>{t.current=n,e()}),[e]);return[t,n]}function G(e){let{defaultShow:t,show:n,onSelect:r,onToggle:o,itemSelector:a=`* [${Object(F.a)("dropdown-item")}]`,focusFirstItemOnShow:v,placement:b="bottom-start",children:m}=e;const h=Object(J.a)(),[y,O]=u(n,t,o),[w,j]=X(),x=w.current,[E,C]=X(),D=E.current,k=Object(l.a)(y),S=Object(i.useRef)(null),A=Object(i.useRef)(!1),P=Object(i.useContext)(H),N=Object(i.useCallback)((function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null==t?void 0:t.type;O(e,{originalEvent:t,source:n})}),[O]),R=Object(d.a)(((e,t)=>{null==r||r(e,t),N(!1,t,"select"),t.isPropagationStopped()||null==P||P(e,t)})),T=Object(i.useMemo)((()=>({toggle:N,placement:b,show:y,menuElement:x,toggleElement:D,setMenu:j,setToggle:C})),[N,b,y,x,D,j,C]);x&&k&&!y&&(A.current=x.contains(x.ownerDocument.activeElement));const L=Object(d.a)((()=>{D&&D.focus&&D.focus()})),W=Object(d.a)((()=>{const e=S.current;let t=v;if(null==t&&(t=!(!w.current||!M(w.current))&&"keyboard"),!1===t||"keyboard"===t&&!/^key.+$/.test(e))return;const n=Object(s.a)(w.current,a)[0];n&&n.focus&&n.focus()}));Object(i.useEffect)((()=>{y?W():A.current&&(A.current=!1,L())}),[y,A,L,W]),Object(i.useEffect)((()=>{S.current=null}));const I=(e,t)=>{if(!w.current)return null;const n=Object(s.a)(w.current,a);let r=n.indexOf(e)+t;return r=Math.max(0,Math.min(r,n.length)),n[r]};return Object(f.a)(Object(i.useCallback)((()=>h.document),[h]),"keydown",(e=>{var t,n;const{key:r}=e,o=e.target,i=null==(t=w.current)?void 0:t.contains(o),a=null==(n=E.current)?void 0:n.contains(o);if(/input|textarea/i.test(o.tagName)&&(" "===r||"Escape"!==r&&i||"Escape"===r&&"search"===o.type))return;if(!i&&!a)return;if("Tab"===r&&(!w.current||!y))return;S.current=e.type;const s={originalEvent:e,source:e.type};switch(r){case"ArrowUp":{const t=I(o,-1);return t&&t.focus&&t.focus(),void e.preventDefault()}case"ArrowDown":if(e.preventDefault(),y){const e=I(o,1);e&&e.focus&&e.focus()}else O(!0,s);return;case"Tab":Object(c.a)(o.ownerDocument,"keyup",(e=>{var t;("Tab"!==e.key||e.target)&&null!=(t=w.current)&&t.contains(e.target)||O(!1,s)}),{once:!0});break;case"Escape":"Escape"===r&&(e.preventDefault(),e.stopPropagation()),O(!1,s)}})),Object(g.jsx)(H.Provider,{value:R,children:Object(g.jsx)(p.Provider,{value:T,children:m})})}G.displayName="Dropdown",G.Menu=x,G.Toggle=B,G.Item=Y;var Q=G,Z=n(273);const ee=i.createContext({});ee.displayName="DropdownContext";var te=ee,ne=n(144);const re=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="hr",role:a="separator",...s}=e;return r=Object(ne.c)(r,"dropdown-divider"),Object(g.jsx)(i,{ref:t,className:o()(n,r),role:a,...s})}));re.displayName="DropdownDivider";var oe=re;const ie=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="div",role:a="heading",...s}=e;return r=Object(ne.c)(r,"dropdown-header"),Object(g.jsx)(i,{ref:t,className:o()(n,r),role:a,...s})}));ie.displayName="DropdownHeader";var ae=ie,se=n(169);const ce=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,eventKey:i,disabled:a=!1,onClick:s,active:c,as:u=se.a,...l}=e;const f=Object(ne.c)(n,"dropdown-item"),[d,p]=q({key:i,href:l.href,disabled:a,onClick:s,active:c});return Object(g.jsx)(u,{...l,...d,ref:t,className:o()(r,f,p.isActive&&"active",a&&"disabled")})}));ce.displayName="DropdownItem";var ue=ce;const le=i.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="span",...a}=e;return r=Object(ne.c)(r,"dropdown-item-text"),Object(g.jsx)(i,{ref:t,className:o()(n,r),...a})}));le.displayName="DropdownItemText";var fe=le,de=n(165),pe=n(154);n(162);const ve=i.createContext(null);ve.displayName="InputGroupContext";var be=ve;const me=i.createContext(null);me.displayName="NavbarContext";var he=me;n(227);function ge(e,t){return e}function ye(e,t,n){let r=e?n?"bottom-start":"bottom-end":n?"bottom-end":"bottom-start";return"up"===t?r=e?n?"top-start":"top-end":n?"top-end":"top-start":"end"===t?r=e?n?"left-end":"right-end":n?"left-start":"right-start":"start"===t?r=e?n?"right-end":"left-end":n?"right-start":"left-start":"down-centered"===t?r="bottom":"up-centered"===t&&(r="top"),r}const Oe=i.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,align:a,rootCloseEvent:s,flip:c=!0,show:u,renderOnMount:l,as:f="div",popperConfig:d,variant:p,...v}=e,b=!1;const m=Object(i.useContext)(he),h=Object(ne.c)(n,"dropdown-menu"),{align:y,drop:O,isRTL:j}=Object(i.useContext)(te);a=a||y;const x=Object(i.useContext)(be),E=[];if(a)if("object"===typeof a){const e=Object.keys(a);if(e.length){const t=e[0],n=a[t];b="start"===n,E.push(`${h}-${t}-${n}`)}}else"end"===a&&(b=!0);const C=ye(b,O,j),[D,{hasShown:k,popper:S,show:A,toggle:P}]=w({flip:c,rootCloseEvent:s,show:u,usePopper:!m&&0===E.length,offset:[0,2],popperConfig:d,placement:C});if(D.ref=Object(pe.a)(ge(t),D.ref),Object(de.a)((()=>{A&&(null==S||S.update())}),[A]),!k&&!l&&!x)return null;"string"!==typeof f&&(D.show=A,D.close=()=>null==P?void 0:P(!1),D.align=a);let N=v.style;return null!=S&&S.placement&&(N={...v.style,...D.style},v["x-placement"]=S.placement),Object(g.jsx)(f,{...v,...D,style:N,...(E.length||m)&&{"data-bs-popper":"static"},className:o()(r,h,A&&"show",b&&`${h}-end`,p&&`${h}-${p}`,...E)})}));Oe.displayName="DropdownMenu";var we=Oe,je=n(174);const xe=i.forwardRef(((e,t)=>{let{bsPrefix:n,split:r,className:a,childBsPrefix:s,as:c=je.a,...u}=e;const l=Object(ne.c)(n,"dropdown-toggle"),f=Object(i.useContext)(p);void 0!==s&&(u.bsPrefix=s);const[d]=W();return d.ref=Object(pe.a)(d.ref,ge(t)),Object(g.jsx)(c,{className:o()(a,l,r&&`${l}-split`,(null==f?void 0:f.show)&&"show"),...d,...u})}));xe.displayName="DropdownToggle";var Ee=xe;const Ce=i.forwardRef(((e,t)=>{const{bsPrefix:n,drop:r="down",show:a,className:s,align:c="start",onSelect:u,onToggle:l,focusFirstItemOnShow:f,as:p="div",navbar:v,autoClose:b=!0,...m}=Object(Z.a)(e,{show:"onToggle"}),h=Object(i.useContext)(be),y=Object(ne.c)(n,"dropdown"),O=Object(ne.d)(),w=Object(d.a)(((e,t)=>{var n;var r;(null==(n=t.originalEvent)||null==(n=n.target)?void 0:n.classList.contains("dropdown-toggle"))&&"mousedown"===t.source||(t.originalEvent.currentTarget!==document||"keydown"===t.source&&"Escape"!==t.originalEvent.key||(t.source="rootClose"),r=t.source,(!1===b?"click"===r:"inside"===b?"rootClose"!==r:"outside"!==b||"select"!==r)&&(null==l||l(e,t)))})),j=ye("end"===c,r,O),x=Object(i.useMemo)((()=>({align:c,drop:r,isRTL:O})),[c,r,O]),E={down:y,"down-centered":`${y}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return Object(g.jsx)(te.Provider,{value:x,children:Object(g.jsx)(Q,{placement:j,show:a,onSelect:u,onToggle:w,focusFirstItemOnShow:f,itemSelector:`.${y}-item:not(.disabled):not(:disabled)`,children:h?m.children:Object(g.jsx)(p,{...m,ref:t,className:o()(s,a&&"show",E[r])})})})}));Ce.displayName="Dropdown";t.a=Object.assign(Ce,{Toggle:Ee,Menu:we,Item:ue,ItemText:fe,Divider:oe,Header:ae})}}]);