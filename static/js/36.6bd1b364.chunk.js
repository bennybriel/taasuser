(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[36],{147:function(t,e,a){"use strict";var s=a(38),c=(a(0),a(8));e.a=t=>{let{title:e="",description:a="",children:r=null}=t;return Object(c.jsxs)(s.a,{children:[e&&Object(c.jsx)("title",{children:e}),a&&Object(c.jsx)("meta",{name:"description",content:a}),r&&r]})}},149:function(t,e,a){"use strict";var s=a(0),c=a(28),r=a(39),i=a(37);const n={config:{attributes:!0,childList:!1,subtree:!1}};var o=()=>{const t=Object(c.b)(),e=Object(s.useCallback)((e=>{Array.isArray(e)&&e.map((e=>{"attributes"===e.type&&"style"===e.attributeName&&t(Object(i.h)(e.target.style.paddingRight.indexOf("px")>-1?parseInt(e.target.style.paddingRight.replace("px",""),10):""))}))}),[t]);return function(t,e){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;const[c,r]=Object(s.useState)(null);Object(s.useEffect)((()=>{const t=new MutationObserver(e);r(t)}),[e,a,r]),Object(s.useEffect)((()=>{if(!c)return;const{config:e}=a;return c.observe(t,e),()=>{c&&c.disconnect()}}),[c,t,a])}(document.body,e),!0};e.a=()=>{const{color:t,layout:e,radius:a,navColor:i}=Object(c.c)((t=>t.settings)),n=Object(c.b)(),{attrMenuAnimate:l,attrMobile:d,placementStatus:{placementHtmlData:b,dimensionHtmlData:u},behaviourStatus:{behaviourHtmlData:m}}=Object(c.c)((t=>t.menu));o();const j=document.documentElement;return Object(s.useEffect)((()=>(setTimeout((()=>{n(Object(r.b)()),j.setAttribute("data-show","true")}),30),j.setAttribute("data-color",t),j.setAttribute("data-layout",e),j.setAttribute("data-radius",a),j.setAttribute("data-navcolor",i),j.setAttribute("data-placement",b),j.setAttribute("data-dimension",u),j.setAttribute("data-behaviour",m),()=>{j.removeAttribute("data-color"),j.removeAttribute("data-layout"),j.removeAttribute("data-radius"),j.removeAttribute("data-navcolor"),j.removeAttribute("data-show"),j.removeAttribute("data-placement"),j.removeAttribute("data-behaviour"),j.removeAttribute("data-dimension")})),[]),Object(s.useEffect)((()=>{j.setAttribute("data-placement",b),j.setAttribute("data-dimension",u),j.setAttribute("data-behaviour",m),j.setAttribute("data-navcolor",i),j.setAttribute("data-radius",a),j.setAttribute("data-color",t),j.setAttribute("data-layout",e)}),[j,b,u,m,i,a,t,e]),Object(s.useEffect)((()=>{l?j.setAttribute("data-menu-animate",l):j.removeAttribute("data-menu-animate")}),[j,l]),Object(s.useEffect)((()=>{d?j.setAttribute("data-mobile",d):j.removeAttribute("data-mobile")}),[j,d]),!0}},151:function(t,e,a){"use strict";var s=a(0),c=a(149),r=a(8);e.a=t=>{let{left:e,right:a}=t;return Object(c.a)(),Object(s.useEffect)((()=>{document.body.classList.add("h-100");const t=document.getElementById("root");return t&&t.classList.add("h-100"),()=>{document.body.classList.remove("h-100"),t&&t.classList.remove("h-100")}}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"fixed-background"}),Object(r.jsx)("div",{className:"container-fluid p-0 h-100 position-relative",children:Object(r.jsxs)("div",{className:"row g-0 h-100",children:[Object(r.jsx)("div",{className:"offset-0 col-12 d-none d-lg-flex offset-md-1 col-lg h-lg-100",children:e}),Object(r.jsx)("div",{className:"col-12 col-lg-auto h-100 pb-4 px-4 pt-0 p-lg-0",children:a})]})})]})}},402:function(t,e,a){"use strict";a.r(e);a(0);var s=a(29),c=a(151),r=a(146),i=a(147),n=a(8);e.default=()=>{const t=Object(n.jsx)("div",{className:"sw-lg-80 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border",children:Object(n.jsxs)("div",{className:"sw-lg-60 px-5",children:[Object(n.jsx)("div",{className:"sh-11",children:Object(n.jsx)(s.c,{to:"/",children:Object(n.jsx)("div",{className:"logo-default"})})}),Object(n.jsxs)("div",{className:"mb-5",children:[Object(n.jsx)("h2",{className:"cta-1 mb-0 text-primary",children:"Ooops, it looks like an error!"}),Object(n.jsx)("h2",{className:"display-2 text-primary",children:"Unauthorized"})]}),Object(n.jsxs)("div",{className:"mb-5",children:[Object(n.jsx)("p",{className:"h6",children:"It looks like the page you are looking for is not available."}),Object(n.jsxs)("p",{className:"h6",children:["If you think that is a mistake, please ",Object(n.jsx)(s.c,{to:"/",children:"contact"})," us."]})]}),Object(n.jsx)("div",{children:Object(n.jsxs)(s.c,{to:"/",className:"btn btn-icon btn-icon-start btn-primary",children:[Object(n.jsx)(r.a,{icon:"arrow-left"})," ",Object(n.jsx)("span",{children:"Back to Home"})]})})]})});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i.a,{title:"Unauthorized",description:"Unauthorized Page"}),Object(n.jsx)(c.a,{right:t})]})}}}]);