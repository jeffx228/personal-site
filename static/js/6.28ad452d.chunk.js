(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{172:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),i=n(5),c=n(21),s=function(e){var t=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"degree",children:t.degree}),Object(r.jsxs)("p",{className:"school",children:[Object(r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(r.jsx)(s,{data:e},e.school)}))]})};o.defaultProps={data:[]};var l=o,u=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y(this,n)}}var g=n(56),v=n(55),O=function(e){var t=e.handleClick,n=e.active,a=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:function(){return t(a)},children:a})},x=function(e){var t=e.data,n=e.categories,a=t.category,i=t.competency,c=t.title,s={background:n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.color}))[0]},o=Object(v.a)(Object(v.a)({},s),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return Object(r.jsxs)("div",{className:"skillbar clearfix",children:[Object(r.jsx)("div",{className:"skillbar-title",style:s,children:Object(r.jsx)("span",{children:c})}),Object(r.jsx)("div",{className:"skillbar-bar",style:o}),Object(r.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};x.defaultProps={categories:[]};var k=x,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(c,e);var t,n,a,i=j(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(v.a)(Object(v.a)({},n),{},Object(g.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(g.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=c,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"skills"}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Skills"}),Object(r.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&b(t.prototype,n),a&&b(t,a),c}(a.Component);S.defaultProps={skills:[],categories:[]};var D=S,N=function(e){var t=e.data,n=e.last;return Object(r.jsxs)("li",{className:"course-container",children:[Object(r.jsxs)("a",{href:t.link,children:[Object(r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(r.jsx)("div",{className:"course-dot",children:Object(r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};N.defaultProps={last:!1};var P=N,w=function(e){var t,n=e.data;return Object(r.jsxs)("div",{className:"courses",children:[Object(r.jsx)("div",{className:"link-to",id:"courses"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Selected Courses"})}),Object(r.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(r.jsx)(P,{data:e,last:n===t.length-1},e.title)})))})]})};w.defaultProps={data:[]};var C=w,A=function(){return Object(r.jsxs)("div",{className:"references",children:[Object(r.jsx)("div",{className:"link-to",id:"references"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)(i.b,{to:"/contact",children:Object(r.jsx)("h3",{children:"References are available upon request"})})})]})},E=[{title:"Introduction to Computer Science",number:"CS 50",link:"http://stanford.edu/class/ee364a/",university:"Harvard"},{title:"Introduction to Data Structures and Algorithms",number:"CS 124",link:"http://cs229.stanford.edu/",university:"Harvard"},{title:"Introduction to Probability",number:"Stat 110",link:"http://cs231n.stanford.edu/",university:"Harvard"},{title:"Introduction to Statistical Inference",number:"Stat 111",link:"http://scpd.stanford.edu/search/publicCourseSearchDetails.do;jsessionid=561188A06434D7D97953C4706DE12831?method=load&courseId=11685",university:"Harvard"},{title:"Linear Algebra and Vector Analysis",number:"Math 22a",link:"http://web.stanford.edu/class/cme304/",university:"Harvard"},{title:"Vector Calculus and Linear Algebra",number:"Math 22b",link:"http://ee263.stanford.edu/",university:"Harvard"},{title:"Introduction to Machine Learning",number:"Coursera",link:"http://stanford.edu/~rezab/discrete/",university:"Stanford Coursera"}],M=[{school:"Harvard University",degree:"B.S. Computer Science and Statistics",link:"https://buffalo.edu",year:2024}],R=[{company:"ThinkCERCA",position:"Data Science Intern",link:"https://matroid.com",daterange:"June 2021 - Present",points:["Developed end to end machine learning pipeline to train visual classifiers from keywords using Node.JS, Express, Keystone, MongoDB, AWS, S3, Caffe, and other technologies.","Received Series A term sheets for 20M+ valuations."]},{company:"Axon[Bytes]",position:"Software Engineer Intern",link:"https://matroid.com",daterange:"May 2021 - Present",points:["Developed end to end machine learning pipeline to train visual classifiers from keywords using Node.JS, Express, Keystone, MongoDB, AWS, S3, Caffe, and other technologies.","Received Series A term sheets for 20M+ valuations."]},{company:"Inspirit AI",position:"Instructor",link:"https://matroid.com",daterange:"May 2021 - Present",points:["Developed end to end machine learning pipeline to train visual classifiers from keywords using Node.JS, Express, Keystone, MongoDB, AWS, S3, Caffe, and other technologies.","Received Series A term sheets for 20M+ valuations."]},{company:"Harvard Consulting on Business and the Environment (CBE)",position:"Associate",link:"https://arthena.com",daterange:"August 2020 - Present",points:["Deployed quantitative strategies to predict the value of fine art in various pricing contexts.","Built production, on-line, end-to-end optimized machine learning pipelines with Pandas, Numpy, Scikit, Tensorflow, Dagster, Postgres, etc. on GCP with Kubernetes.","Designed micro-service architecture around: data collection, data integrity, feature engineering, research, strategy, backtesting, deployment, and reporting.","YC Alumn. Worked on everything. Built a 16-person team. Operated company for 6+ years."]},{company:"Harvard Undergraduate Data Analytics Group (HUDAG)",position:"Data Analyst",link:"http://skepticalinvestments.biz",daterange:"January 2021 - Present",points:["Founded a micro-vc fund to throw token amounts of money at problems I find interesting.","Created the InstaSafe. Fast, automated investment docs for YC companies."]},{company:"Mission: Mentor",position:"Software Engineer",link:"http://enveritas.org",daterange:"December 2020 - Present",points:["Trained a model for the Brazilian Coffee Scenes Dataset with better than state of the art accuracy.","Collected training sets on the ground in Uganda. Built dashboards to visualize work of surveyors using Flask, React, and D3.","Performed supporting analysis to ensure data integrity using Pandas, t-SNE, SVM\u2019s, and other techniques."]},{company:"Stanford University",position:"Research Intern",link:"https://zenysis.com",daterange:"August 2018 - June 2020",points:["Worked in Addis Ababa for the Ethiopian Ministry of Health and built data visualization tools in React and Flask.","Ingested multiple databases with different alphabets, calendars, and without official spellings of geographic locations."]}],I=n(17);var L=n(24);var B,J=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:2,category:["Web Development","Tools"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Data Mining",competency:2,category:["Data Science"]},{title:"Flask",competency:3,category:["Web Development","Python"]},{title:"Git",competency:4,category:["Tools"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"HTML + CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"C++",competency:5,category:["Languages"]},{title:"MATLAB",competency:4,category:["Languages"]},{title:"R",competency:4,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"Pandas",competency:4,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"SpaCy",competency:4,category:["Data Engineering","Python"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),H=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],W=(B=new Set(J.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(I.a)(e)}(B)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(B)||Object(L.a)(B)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:H[t]}})),T=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(r.jsx)(c.a,{title:"Resume",description:"Michael D'Angelo's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook.",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(i.b,{to:"resume",children:"Resume"})}),Object(r.jsx)("div",{className:"link-container",children:T.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(l,{data:M}),Object(r.jsx)(p,{data:R}),Object(r.jsx)(D,{skills:J,categories:W}),Object(r.jsx)(C,{data:E}),Object(r.jsx)(A,{})]})})}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(56);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},56:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=6.28ad452d.chunk.js.map