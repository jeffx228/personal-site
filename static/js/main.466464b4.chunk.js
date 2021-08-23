(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),a=n(1),i=n(16),l=n(3),r=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"/personal-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),j=s.NODE_ENV,o=s.REACT_APP_GA_TRACKING_ID;"production"===j&&r.a.initialize(o);var b=function(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){"production"===j&&(r.a.set({page:e}),r.a.pageview(e))}),[e]),null},u=n(5),d=n(22),h=[{index:!0,label:"Jeffrey Xu",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects and Work",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(a.lazy)((function(){return n.e(4).then(n.t.bind(null,169,7))})),f=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return i(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(f,{})]})},m=n(25),p=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/personal-site","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Jeffrey Xu"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:jeffreyxu@college.harvard.edu",children:"jeffreyxu@college.harvard.edu"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Jeffrey. I'm currently studying",Object(c.jsx)("a",{href:"https://handbook.fas.harvard.edu/book/computer-science",children:" CS and Statistics at Harvard"}),". My main interests include natural language processing and full-stack development, and I have internship experience working as a Data Science Intern ThinkCerca. I'm also interested in quantitative finance and trading."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(m.a,{}),Object(c.jsx)("p",{className:"copyright",children:"\xa9 Jeffrey Xu."})]})]})},v=function(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},g=function(e){return Object(c.jsxs)(i.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(v,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Jeffrey Xu",defaultTitle:"Jeffrey Xu",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(p,{})]})]})};g.defaultProps={children:null,fullPage:!1,title:null,description:"Jeffrey Xu's personal website."};t.a=g},25:function(e,t,n){"use strict";var c=n(0),a=(n(1),n(29)),i=n(30),l=n(31),r=n(32),s=n(33),j=n(34),o=[{link:"https://github.com/jeffx228",label:"Github",icon:i.faGithub},{link:"https://www.facebook.com/jeffrey.xu.37",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/jeff.reyxu/",label:"Instagram",icon:r.faInstagram},{link:"https://www.linkedin.com/in/jeffrey-xu-975418168/",label:"LinkedIn",icon:s.faLinkedinIn},{link:"mailto:jeffreyxu@college.harvard.edu",label:"Email",icon:j.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:o.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(a.a,{icon:e.icon})})},e.label)}))})}},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),l=n(15),r=n(5),s=n(3),j=n(21),o=(n(47),Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(7)]).then(n.bind(null,165))}))),b=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,172))})),u=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,166))})),d=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,167))})),h=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,168))})),O=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,170))})),f=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,171))})),x=function(){return Object(c.jsx)(r.a,{basename:"/personal-site",children:Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(s.a,{path:"/about",component:o}),Object(c.jsx)(s.a,{path:"/projects",component:h}),Object(c.jsx)(s.a,{path:"/stats",component:f}),Object(c.jsx)(s.a,{path:"/contact",component:b}),Object(c.jsx)(s.a,{path:"/resume",component:O}),Object(c.jsx)(s.a,{component:d,status:404})]})})})},m=function(){return Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})})},p=document.getElementById("root");p.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(m,{}),p):Object(l.render)(Object(c.jsx)(m,{}),p)}},[[48,1,3]]]);
//# sourceMappingURL=main.466464b4.chunk.js.map