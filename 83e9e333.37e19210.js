(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{136:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(177),c=(t(104),t(170));a.default=function(){var e=Object(c.a)().siteConfig;return(void 0===e?{}:e).customFields.metadata.team,l.a.createElement(r.a,{title:"Contact",description:"Contact the Gnet author"},l.a.createElement("header",{className:"hero"},l.a.createElement("div",{className:"container container--fluid"},l.a.createElement("h1",null,"Contact"),l.a.createElement("div",{className:"hero--subtitle"},"Gnet is an open-source software developed by ",l.a.createElement("a",{href:"https://github.com/panjf2000"},"Andy Pan"),". You can contact the author using any of the options below."))),l.a.createElement("main",null,l.a.createElement("section",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"mailto:panjf2000@gmail.com",className:"panel text--center"},l.a.createElement("div",{className:"panel--icon"},l.a.createElement("i",{className:"feather icon-mail"})),l.a.createElement("div",{className:"panel--title"},"panjf2000@gmail.com"),l.a.createElement("div",{className:"panel--description"},"Shoot me an email"))),l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"https://twitter.com/_andy_pan",target:"_blank",className:"panel text--center"},l.a.createElement("div",{className:"panel--icon"},l.a.createElement("i",{className:"feather icon-twitter"})),l.a.createElement("div",{className:"panel--title"},"@_andy_pan"),l.a.createElement("div",{className:"panel--description"},"Tweet at me"))),l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"https://gitter.im/gnet-framework/community",target:"_blank",className:"panel text--center"},l.a.createElement("div",{className:"panel--icon"},l.a.createElement("i",{className:"feather icon-message-circle"})),l.a.createElement("div",{className:"panel--title"},"Chat"),l.a.createElement("div",{className:"panel--description"},"Join our chat"))))))))}},176:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return r}));var n=t(170);function l(){const e=Object(n.a)(),{siteConfig:a={}}=e,{metadata:{latest_highlight:t}}=a.customFields,l=Date.parse(t.date),r=new Date,c=Math.abs(r-l),i=Math.ceil(c/864e5);let m=null;return"undefined"!=typeof window&&(m=new Date(parseInt(window.localStorage.getItem("highlightsViewedAt")||"0"))),i<30&&(!m||m<l)?t:null}function r(){"undefined"!=typeof window&&window.localStorage.setItem("highlightsViewedAt",(new Date).getTime())}},177:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(182),c=t(174),i=t(1),m=(t(183),t(171)),o=t(184),s=t(175),d=t.n(s),h=t(185),u=t.n(h),b=t(170),g=t(169),E=t.n(g),p=t(93),f=t.n(p);const v=()=>l.a.createElement("span",{className:E()(f.a.toggle,f.a.moon)}),N=()=>l.a.createElement("span",{className:E()(f.a.toggle,f.a.sun)});var _=function(e){const{isClient:a}=Object(b.a)();return l.a.createElement(u.a,Object(i.a)({disabled:!a,icons:{checked:l.a.createElement(v,null),unchecked:l.a.createElement(N,null)}},e))},k=t(176),w=t(173),y=t(189),j=t(180),O=t(181),C=t(179),x=t(94),T=t.n(x);function S({href:e,hideIcon:a,label:t,onClick:n,position:r,right:c,to:o}){let s=function(e,a){let t={label:e};switch(e.toLowerCase()){case"chat":return t.hideText=1==a,t.icon="message-circle",t;case"community":return t.hideText=1==a,t.icon="users",t;case"github":return t.badge="3k",t.hideText=!1,t.icon="github",t;case"highlights":return Object(k.a)()&&(t.badge="new",t.badgeStyle="primary"),t.hideText=1==a,t.icon="gift",t;default:return t}}(t,c)||{};const d=Object(w.a)(o);return l.a.createElement(m.a,Object(i.a)({className:E()("navbar__item navbar__link",s.className,{navbar__item__icon_only:s.hideText}),title:s.hideText?t:null,onClick:n},e?{target:"_blank",rel:"noopener noreferrer",href:e}:{activeClassName:"navbar__link--active",to:d}),!a&&s.icon&&l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"feather icon-"+s.icon})," ",s.iconLabel),!s.hideText&&s.label,s.badge&&l.a.createElement("span",{className:E()("badge","badge--"+(s.badgeStyle||"secondary"))},s.badge))}var I=function(){const{siteConfig:{themeConfig:{navbar:{title:e,links:a=[],hideOnScroll:t=!1}={},disableDarkMode:r=!1}},isClient:c}=Object(b.a)(),[s,h]=Object(n.useState)(!1),[u,g]=Object(n.useState)(!1),{isDarkTheme:p,setLightTheme:f,setDarkTheme:v}=Object(C.a)(),{navbarRef:N,isNavbarVisible:k}=Object(y.a)(t),{logoLink:w,logoLinkProps:x,logoImageUrl:I,logoAlt:L}=Object(O.a)();Object(j.a)(s);const D=Object(n.useCallback)(()=>{h(!0)},[h]),M=Object(n.useCallback)(()=>{h(!1)},[h]),A=Object(n.useCallback)(e=>e.target.checked?v():f(),[f,v]);return l.a.createElement("nav",{ref:N,className:E()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":s,[T.a.navbarHideable]:t,[T.a.navbarHidden]:!k})},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(m.a,Object(i.a)({className:"navbar__brand",to:w},x),null!=I&&l.a.createElement(d.a,{className:"navbar__logo",src:I,alt:L}),null!=e&&l.a.createElement("strong",{className:u?T.a.hideLogoText:""},e)),a.filter(e=>"right"!==e.position).map((e,a)=>l.a.createElement(S,Object(i.a)({},e,{left:!0,key:a})))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},a.filter(e=>"right"===e.position).map((e,a)=>l.a.createElement(S,Object(i.a)({},e,{right:!0,key:a}))),!r&&l.a.createElement(_,{className:T.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:p,onChange:A}),l.a.createElement(o.a,{handleSearchBarToggle:g,isSearchBarExpanded:u}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:M}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(m.a,Object(i.a)({className:"navbar__brand",onClick:M,to:w},x),null!=I&&l.a.createElement(d.a,{className:"navbar__logo",src:I,alt:L}),null!=e&&l.a.createElement("strong",null,e)),!r&&s&&l.a.createElement(_,{"aria-label":"Dark mode toggle in sidebar",checked:p,onChange:A})),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},a.map((e,a)=>l.a.createElement("li",{className:"menu__list-item",key:a},l.a.createElement(S,Object(i.a)({className:"menu__link"},e,{hideIcon:!0,onClick:M})))))))))};t(95);var L=function({block:e,buttonClass:a,center:t,description:n,size:r,width:c}){return l.a.createElement("div",{className:E()("mailing-list",{"mailing-list--block":e,"mailing-list--center":t,["mailing-list--"+r]:r})},!1!==n&&l.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),l.a.createElement("form",{action:"https://app.getvero.com/forms/a748ded7ce0da69e6042fa1e21042506",method:"post",className:"mailing-list--form"},l.a.createElement("input",{className:E()("input","input--"+r),name:"email",placeholder:"you@email.com",type:"email",style:{width:c}}),l.a.createElement("button",{className:E()("button","button--"+(a||"primary"),"button--"+r),type:"submit"},"Subscribe")))},D=t(96),M=t.n(D);function A({to:e,href:a,label:t,...n}){const r=Object(w.a)(e);return l.a.createElement(m.a,Object(i.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:r},n),t)}const G=({url:e,alt:a})=>l.a.createElement(d.a,{className:"footer__logo",alt:a,src:e});var P=function(){const e=Object(b.a)(),{siteConfig:a={}}=e,{themeConfig:t={}}=a,{footer:n}=t,{copyright:r,links:c=[],logo:i={}}=n||{},m=Object(w.a)(i.src);return n?l.a.createElement("footer",{className:E()("footer",{"footer--dark":"dark"===n.style})},l.a.createElement("div",{className:"container"},c&&c.length>0&&l.a.createElement("div",{className:"row footer__links"},l.a.createElement("div",{className:"col col--5 footer__col"},l.a.createElement("div",{className:"margin-bottom--md"},l.a.createElement(d.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"Gnet",width:"150",height:"auto"})),l.a.createElement("div",{className:"margin-bottom--md"},l.a.createElement(L,{description:!1,width:"150px"})),l.a.createElement("div",null,l.a.createElement("a",{href:"https://twitter.com/_andy_pan",target:"_blank"},l.a.createElement("i",{className:"feather icon-twitter",alt:"Gnet's Twitter"})),"\xa0\xa0\xa0\xa0",l.a.createElement("a",{href:"https://github.com/panjf2000/gnet",target:"_blank"},l.a.createElement("i",{className:"feather icon-github",alt:"Gnet's Github Repo"})),"\xa0\xa0\xa0\xa0",l.a.createElement("a",{href:"https://taohuawu.club/rss.xml",target:"_blank"},l.a.createElement("i",{className:"feather icon-rss",alt:"Gnet's RSS feed"})))),c.map((e,a)=>l.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((e,a)=>e.html?l.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(A,e)))):null))),(i||r)&&l.a.createElement("div",{className:"text--center"},i&&i.src&&l.a.createElement("div",{className:"margin-bottom--sm"},i.href?l.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:M.a.footerLogoLink},l.a.createElement(G,{alt:i.alt,url:m})):l.a.createElement(G,{alt:i.alt,url:m})),r,l.a.createElement("br",null),l.a.createElement("small",null,l.a.createElement("a",{href:"https://github.com/panjf2000/gnet/security/policy"},"Security Policy"),"\xa0\u2022\xa0",l.a.createElement("a",{href:"https://github.com/panjf2000/gnet/blob/master/PRIVACY.md"},"Privacy Policy")),l.a.createElement("br",null),l.a.createElement("small",null,"Acknowledgement for Timber, Inc.")))):null},V=t(190),F=t(191),R=t(2);t(97);a.a=function(e){const{siteConfig:a={}}=Object(b.a)(),{favicon:t,tagline:n,title:i,themeConfig:{image:m},url:o}=a,{children:s,title:d,noFooter:h,description:u,image:g,keywords:E,permalink:p,version:f}=e,v=d?`${d} | ${i}`:i,N=g||m,_=o+Object(w.a)(N),k=Object(w.a)(t),y=Object(R.h)();let j=y?"https://gnet.host"+(y.pathname.endsWith("/")?y.pathname:y.pathname+"/"):null;return l.a.createElement(F.a,null,l.a.createElement(V.a,null,l.a.createElement(c.a,null,l.a.createElement("html",{lang:"en"}),l.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),v&&l.a.createElement("title",null,v),v&&l.a.createElement("meta",{property:"og:title",content:v}),t&&l.a.createElement("link",{rel:"shortcut icon",href:k}),u&&l.a.createElement("meta",{name:"description",content:u}),u&&l.a.createElement("meta",{property:"og:description",content:u}),f&&l.a.createElement("meta",{name:"docsearch:version",content:f}),E&&E.length&&l.a.createElement("meta",{name:"keywords",content:E.join(",")}),N&&l.a.createElement("meta",{property:"og:image",content:_}),N&&l.a.createElement("meta",{property:"twitter:image",content:_}),N&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+v}),N&&l.a.createElement("meta",{name:"twitter:site",content:"@vectordotdev"}),N&&l.a.createElement("meta",{name:"twitter:creator",content:"@vectordotdev"}),j&&l.a.createElement("meta",{property:"og:url",content:j}),l.a.createElement("meta",{name:"twitter:card",content:"summary"}),j&&l.a.createElement("link",{rel:"canonical",href:j})),l.a.createElement(r.a,null),l.a.createElement(I,null),l.a.createElement("div",{className:"main-wrapper"},s),!h&&l.a.createElement(P,null)))}}}]);