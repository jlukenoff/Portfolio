(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{138:function(e,t,a){"use strict";a.r(t);var n=a(283);a.d(t,"default",(function(){return n.a}))},139:function(e,t,a){"use strict";a.r(t);var n=a(281);a.d(t,"default",(function(){return n.a}))},140:function(e,t,a){"use strict";a.r(t);var n=a(280);a.d(t,"default",(function(){return n.a}))},284:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,o=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){o=!0,r=e}finally{try{!n&&l.return&&l.return()}finally{if(o)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=a(0),i=g(r),l=g(a(223)),s=a(77),c=g(a(301)),d=g(a(138)),u=g(a(139)),p=g(a(140)),m=g(a(62)),f=g(a(21));function g(e){return e&&e.__esModule?e:{default:e}}var v=(0,a(76).makeStyles)({panelSummary:{"& img":{marginRight:"10px"}},panelSummaryContent:{alignItems:"center"},panelsContainer:{maxWidth:"600px"},panelDetails:{flexDirection:"column"}}),y=function(e){var t=e.name,a=e.description,n=e.projectList,l=e.logoSrc,s=e.index,m=v(),g=(0,r.useState)(0===s),y=o(g,2),h=y[0],S=y[1];return i.default.createElement(d.default,{expanded:h,onChange:function(){return S(!h)}},i.default.createElement(u.default,{expandIcon:i.default.createElement(c.default,null),classes:{root:m.panelSummary,content:m.panelSummaryContent}},i.default.createElement("img",{style:{width:"35px"},alt:String(t)+" logo",src:"https://storage.cloud.google.com/john-lukenoff-portoflio/static"+String(l)}),t),i.default.createElement(p.default,{className:m.panelDetails},i.default.createElement(f.default,{variant:"body1"},"\t"+String(a)),i.default.createElement(f.default,{variant:"h6",style:{paddingTop:"10px"}},"Projects:"),i.default.createElement(f.default,{variant:"body1"},n.join(", "))))};t.default=function(e){var t=v();return i.default.createElement(l.default,{transitionName:"module",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},i.default.createElement(s.ModuleContainer,{style:{marginTop:"50px"}},i.default.createElement(m.default,{className:t.panelsContainer},i.default.createElement(f.default,{variant:"h2",style:{padding:"20px 0"}},"Front End"),[{name:"React / React Native",description:"React is my front-end framework of choice. I write very clean and modular components and exercise best practices in state management. I am fluent in modern features of React such as Hooks and Effects.",projectList:["Narvar Internal Tooling","Vacation.ly","My Portfolio (this website!)","Shopr","Home automation server"],logoSrc:"/react.svg"},{name:"Styled Components",description:"I have leveraged Styled Components primarily through EmotionJS but also have experience with other JSS alternatives. I love Styled Components for the performance, consolidated structure it brings to React, and the portability provided when server-side rendering ",projectList:["Narvar Internal Tooling","Vacation.ly","My Portfolio (this website!)","Shopr","Home Automation Server"],logoSrc:"/styled-components.png"},{name:"HTML5",description:"I am comfortable developing in simple HTML/CSS/VanillaJS when appropriate. I am a strong believer in doing more with less by only leveraging third-party libraries and modules when necessary.",projectList:["Narvar Internal Tooling","Vacation.ly","My Portfolio (this website!)","Shopr","Home Automation Server"],logoSrc:"/html5.svg"}].map((function(e,t){return i.default.createElement(y,n({},e,{index:t,key:e.name}))})))),i.default.createElement(s.ModuleContainer,null,i.default.createElement(m.default,{className:t.panelsContainer},i.default.createElement(f.default,{variant:"h2",style:{padding:"20px 0"}},"Back End"),[{name:"Typescript",description:"I prefer to write my backend code and scripts using the Typescript superset to ease development and guard the robustness of my applications. I enjoy building with Typescript because of the readability and stability throughout development it provides.",projectList:["Narvar Internal Tooling","Home Automation Server"],logoSrc:"/typescript.svg"},{name:"NodeJS",description:"I am most fluent in NodeJS as a backend language and also use NodeJS on the regular for quick scripts and making painstaking manual tasks into CLI's to automate workflows.",projectList:["Vacation.ly","Shopr","Home Automation Server"],logoSrc:"/nodejs.svg"},{name:"ExpressJS",description:"I have used ExpressJS in most of my applications that require a well-structured, scalable backend. I have a refined discipline for writing Express servers using MVC architecture. Leveraging best practices in separating of business logic, data models, and controllers",projectList:["Vacation.ly","Shopr","Home Automation Server"],logoSrc:"/nodejs.svg"},{name:"PostgreSQL",description:"I have used Postgres to add persistence to applications that require relational data models or read-heavy use-cases.",projectList:["Vacation.ly","Shopr","Home Automation Server"],logoSrc:"/postgres.png"},{name:"CassandraDB",description:"I have used Postgres to add persistence to applications that require relational data models or read-heavy use-cases.",projectList:["Narvar Internal Tooling","Shopr","Home Automation Server"],logoSrc:"/cassandra.png"},{name:"MongoDB",description:"I've used mongoDB as a quick solution for adding a persistence layer on top of my application where relational data structures are not required.",projectList:["Vacation.ly","Shopr","Home Automation Server"],logoSrc:"/mongodb.svg"}].map((function(e,t){return i.default.createElement(y,n({},e,{index:t,key:e.name}))})))),i.default.createElement(s.ModuleContainer,null,i.default.createElement(m.default,{className:t.panelsContainer},i.default.createElement(f.default,{variant:"h2",style:{padding:"20px 0"}},"Testing, Tooling, Deployment"),[{name:"Jest",description:"Jest is my go-to framework for testing. I always ensure that the modules I build are well tested with an aim for 90%+ coverage.",projectList:["Narvar Internal Tooling","Vacation.ly","My Portfolio (this website!)","Shopr","Home Automation Server"],logoSrc:"/jest.svg"},{name:"Docker",description:"I've used Docker in the deployment and development of almost every application I have developed. I choose Docker for the modularity and scalability it allows for. ",projectList:["Narvar Internal Tooling","Vacation.ly","My Portfolio (this website!)","Shopr","Home Automation Server"],logoSrc:"/docker.svg"},{name:"Git",description:"I always use git flows in my applications to manage changes and collaborate with others. I rely on best practices to organize the codebase and manage updates efficiently",projectList:["Narvar Internal Tooling","Vacation.ly","My Portfolio (this website!)","Shopr","Home Automation Server"],logoSrc:"/github.svg"},{name:"Linux",description:"I also have experience deploying on bare metal instances and Alpine Linux environments",projectList:["Narvar Internal Tooling","Vacation.ly","My Portfolio (this website!)","Home Automation Server"],logoSrc:"/linux.svg"}].map((function(e,t){return i.default.createElement(y,n({},e,{index:t,key:e.name}))})))))}},301:function(e,t,a){"use strict";var n=a(50);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(137)).default)(o.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=r}}]);
//# sourceMappingURL=2.bundle.js.map