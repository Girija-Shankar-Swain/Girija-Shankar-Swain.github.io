(self.webpackChunkgsswain=self.webpackChunkgsswain||[]).push([[903],{3464:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return X}});var a=r(7294),n=(r(356),r(4694)),l=r(5697),i=r.n(l);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function d(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,a=t.indexOf(":"),n=p(t.slice(0,a)),l=t.slice(a+1).trim();return n.startsWith("webkit")?e[(r=n,r.charAt(0).toUpperCase()+r.slice(1))]=l:e[n]=l,e}),{})}var y=!1;try{y=!0}catch(ee){}function h(e){return n.parse.icon?n.parse.icon(e):null===e?null:"object"===o(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function E(e){var t=e.forwardedRef,r=u(e,["forwardedRef"]),a=r.icon,l=r.mask,i=r.symbol,o=r.className,s=r.title,p=r.titleId,d=h(a),b=g("classes",[].concat(f(function(e){var t,r=e.spin,a=e.pulse,n=e.fixedWidth,l=e.inverse,i=e.border,o=e.listItem,s=e.flip,m=e.size,u=e.rotation,f=e.pull,p=(c(t={"fa-spin":r,"fa-pulse":a,"fa-fw":n,"fa-inverse":l,"fa-border":i,"fa-li":o,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(m),null!=m),c(t,"fa-rotate-".concat(u),null!=u&&0!==u),c(t,"fa-pull-".concat(f),null!=f),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(r)),f(o.split(" ")))),w=g("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),N=g("mask",h(l)),k=(0,n.icon)(d,m({},b,{},w,{},N,{symbol:i,title:s,titleId:p}));if(!k)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",d),null;var O=k.abstract,j={ref:t};return Object.keys(r).forEach((function(e){E.defaultProps.hasOwnProperty(e)||(j[e]=r[e])})),v(O[0],j)}E.displayName="FontAwesomeIcon",E.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},E.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var v=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var n=(r.children||[]).map((function(r){return e(t,r)})),l=Object.keys(r.attributes||{}).reduce((function(e,t){var a=r.attributes[t];switch(t){case"class":e.attrs.className=a,delete r.attributes.class;break;case"style":e.attrs.style=d(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[p(t)]=a}return e}),{attrs:{}}),i=a.style,o=void 0===i?{}:i,c=u(a,["style"]);return l.attrs.style=m({},l.attrs.style,{},o),t.apply(void 0,[r.tag,m({},l.attrs,{},c)].concat(f(n)))}.bind(null,a.createElement),b=r(8014),w=function(e){var t=e.footerData;return a.createElement("footer",{className:"resume-footer"},a.createElement("ul",{className:"footer-list"},t.contact.email&&a.createElement("li",{className:"footer-list-item"},a.createElement(E,{icon:b.FU$})," ",a.createElement("span",null,t.contact.email)),t.contact.mobile&&a.createElement("li",{className:"footer-list-item"},a.createElement(E,{icon:b.j1w})," ",a.createElement("span",null,t.contact.mobile)),t.portfolioUrl&&a.createElement("li",{className:"footer-list-item footer-list-item-portfolio"},a.createElement(E,{icon:b.cyx})," ",a.createElement("a",{className:"url",target:"_blank",rel:"noreferrer",href:t.portfolioUrl},t.portfolioUrl))))},N=r(7190),k=function(e){var t=e.social,r=e.preferredName;return t&&a.createElement("section",{className:"social"},t.linkedInProfileUrl&&a.createElement("span",{className:"social-linkedin"},a.createElement(E,{icon:N.D9H})," ",a.createElement("a",{className:"url",target:"_blank",rel:"noreferrer",href:t.linkedInProfileUrl,title:"See "+r+"'s Linkedin profile"},t.linkedInProfileUrl)),t.stackOverflowProfileUrl&&a.createElement("span",{className:"social-stack-overflow"},a.createElement(E,{icon:N.mGT})," ",a.createElement("a",{className:"url",target:"_blank",rel:"noreferrer",href:t.stackOverflowProfileUrl,title:"See "+r+"'s StackOverflow profile"},t.stackOverflowProfileUrl)))},O=function(e){var t=e.summary;return t&&t.length>0&&a.createElement("section",{className:"header-summary"},a.createElement("ul",{className:"header-summary-list"},t.map((function(e,t){return a.createElement("li",{className:"header-summary-list-item",key:t},e)}))))},j=function(e){var t=e.headerData;return a.createElement("section",{className:"resume-header"},a.createElement("header",null,a.createElement("span",{className:"resume-header-name"},t.name)),a.createElement(O,{summary:t.summary}),a.createElement(k,{social:t.social,preferredName:t.preferredName}))},A=function(){return a.createElement(E,{icon:b.eTv,transform:{rotate:42},size:"lg",className:"styled-bullet"})},S=function(e){var t=e.achievements;return a.createElement("section",{className:"achievements"},a.createElement("header",{className:"achievements-header"},a.createElement(A,null),"Achievements"),a.createElement("ul",{className:"achievements-list"},t.map((function(e,t){return a.createElement("li",{key:t},e)}))))},D=r(7833),P=r(9490),x=r(4898),C={"aws-sa":D.Z,"azure-fu":P.Z,"azure-d-fu":x.Z},I=function(e){var t=e.badge;return a.createElement("a",{href:t.verificationUrl,target:"_blank",rel:"noreferrer",name:t.name,title:"See "+t.name},a.createElement("img",{className:"interactive-image",src:C[t.id],alt:t.name,height:"70px",width:"70px"}))},z=function(e){var t=e.badges;return a.createElement("section",{className:"badges"},t.map((function(e,t){return a.createElement(I,{badge:e,key:t})})))},U=function(e){var t=e.interests;return a.createElement("section",{className:"interests"},a.createElement("header",{className:"interests-header"},a.createElement(A,null),"Interests"),a.createElement("ul",{className:"interest-list"},t.map((function(e,t){return a.createElement("li",{key:t},e)}))))},T=r(18),_={prefix:"far",iconName:"star",icon:[576,512,[],"f005","M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"]},L=function(e){return parseInt(e)},B=function(e){return 5-Math.ceil(e)},F=function(e){return 5-L(e)-B(e)},W=function(e){var t=e.number;return a.createElement(a.Fragment,null,L(t)>0&&(0,T.Z)(Array(L(t))).map((function(e,t){return a.createElement(E,{icon:b.Tab,key:t})})),F(t)>0&&(0,T.Z)(Array(F(t))).map((function(e,t){return a.createElement(E,{icon:b.a1Y,key:t})})),B(t)>0&&(0,T.Z)(Array(B(t))).map((function(e,t){return a.createElement(E,{icon:_,key:t})})))},M=function(e){var t=e.languages;return a.createElement("section",{className:"languages"},a.createElement("header",{className:"languages-header"},a.createElement(A,null),"Languages"),a.createElement("table",{className:"languages-list"},a.createElement("tbody",null,t.map((function(e,t){return a.createElement("tr",{key:t},a.createElement("td",{className:"languages-col-1"},e.name+": "),a.createElement("td",{className:"languages-col-2"},a.createElement(W,{number:e.proficiency})," "))})))))},R=function(e){var t=e.skills;return a.createElement("section",{className:"skills"},a.createElement("header",{className:"skills-header"},a.createElement(A,null),"Professional Skills"),a.createElement("table",{className:"skills-list"},a.createElement("tbody",null,t.map((function(e,t){return a.createElement("tr",{key:t},a.createElement("td",{className:"skills-col-1"},e.name+": "),a.createElement("td",{className:"skills-col-2"},a.createElement(W,{number:e.proficiency})))})))))},G=function(e){var t=e.education;return a.createElement("section",{className:"education-item"},a.createElement("div",{className:"education-item-qualification"},t.degree),a.createElement("div",{className:"education-item-institute"},t.institute),a.createElement("div",null,"Graduated in ",t.graduatedOn," with ",t.percentage,"%"))},Z=function(e){var t=e.education;return a.createElement("section",{className:"education"},a.createElement("header",{className:"education-header"},a.createElement(A,null),"Education"),t.map((function(e,t){return a.createElement(G,{education:e,key:t})})))},H=function(e){var t=e.otherRelevantData;return a.createElement(a.Fragment,null,t.badges&&a.createElement(z,{badges:t.badges}),t.skills&&a.createElement(R,{skills:t.skills}),t.achievements&&a.createElement(S,{achievements:t.achievements}),t.education&&a.createElement(Z,{education:t.education}),t.languages&&a.createElement(M,{languages:t.languages}),t.interests&&a.createElement(U,{interests:t.interests}))},J=function(e){var t=e.project;return t&&a.createElement("section",{className:"project-sumary"},a.createElement("div",{className:"project_detail"},a.createElement("div",null,t.for&&a.createElement("span",{class:"project_for"},t.for),a.createElement("span",{class:"project_name"},t.name),a.createElement("span",{class:"project_role"},t.role),a.createElement("span",{class:"project_duration"},t.duration)),a.createElement("span",{class:"project_description"},a.createElement("p",null," ",t.description," "))))},K=function(e){var t=e.projects;return a.createElement("section",{className:"projects-summary"},a.createElement("header",{className:"projects-summary-header"},"Projects:"),t.map((function(e){return a.createElement(J,{project:e})})))},Q=function(e){var t=e.employment;return t&&a.createElement("section",{className:"employment-item"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-sm-6"},a.createElement("span",{className:"employment-item-organization"},t.organization),a.createElement("span",{className:"employment-item-job-title"},t.title)),a.createElement("div",{className:"col-sm-6 citydate"},a.createElement("div",{className:"employment-item-date"},a.createElement("span",{"data-section":"employment"},t.duration.start.month)," ",a.createElement("span",{"data-section":"employment"},t.duration.start.year)," ","-"," ",a.createElement("span",{"data-section":"employment"},t.duration.end.month)," ",a.createElement("span",{"data-section":"employment"},t.duration.end.year)))),t.summary&&a.createElement("div",{className:"employment-item-summary",dangerouslySetInnerHTML:{__html:t.summary}}),t.projects&&a.createElement(K,{projects:t.projects}))},q=function(e){var t=e.employmentData;return t&&a.createElement("section",{className:"employment-history"},a.createElement("header",{className:"employment-history-header"},a.createElement(A,null),"Professional Summary"),t.map((function(e,t){return a.createElement(Q,{employment:e,key:t})})))},Y=function(e){var t=e.professionalSummaryData;return a.createElement(a.Fragment,null,a.createElement(q,{employmentData:t.employmentHistory}))},$=function(e){var t=e.otherRelevantData,r=e.professionalSummaryData;return a.createElement("section",{className:"main"},a.createElement("section",{className:"other-relevant-data"},a.createElement(H,{otherRelevantData:t})),a.createElement("section",{className:"professional-summary"},a.createElement(Y,{professionalSummaryData:r})))},V={header:{name:"Girija Shankar Swain",preferredName:"Girija",summary:["10+ years of professional experience in designing, developing enterprise applications","2+ years of professional experience in architecting, developing cloud native applications on AWS","AWS Certified Solutions Architect","Expertise in Microservices, Serverless, Event driven architecture and Domain Driven Design","Expertise in Java and JavaScript","Beginner in Artificial Intelligence, Python, Azure"],social:{linkedInProfileUrl:"https://www.linkedin.com/in/girija-shankar-swain",stackOverflowProfileUrl:"https://stackoverflow.com/users/4601120/gsswain"}},professionalSummary:{employmentHistory:[{organization:"Aegon Life Insurance Company",title:"Principal Engineer",duration:{start:{month:"Feb",year:"2019"},end:{month:"Dec",year:"2020"}},summary:"As a cloud solutions architect, I contributed primarily on application and technology architecture. Below are some of the highlights.\n          <ul>\n            <li> Built the cloud native platform from scratch (using SprinBoot2 and Spring-Cloud-AWS) which addressed the cross-cutting concerns like error handling, monitoring, tracing, centralized logging, distributed caching etc. </li>\n            <li> Built the core Event and Command structures for event driven architecture. </li>\n            <li> Built a multi-tenant policy administration system with the capabilities of B2B insurance sales which allowed onboarding of e-commerce platforms like PayTM, MobiKwik, Flipkart to name a few. </li>\n            <li> Architected the solution for high throughput which was one of the primary goals for the cloud native solution. </li>\n            <li> Worked with the Aegon Europe team on building the Knowledge Management System and Conversational engine (for Chatbot). </li>\n            <li> Built various patterns around the process engine (Camunda) for asynchronous execution. </li>\n            <li> Wrote the first Serverless Lambda. </li>\n            <li> Designed a cost effective Serverless PDF generation service. </li>\n            <li> Designed and developed a Serverless Communication service. </li>\n            <li> Developed a Proof of Concept for an embeddable Webcomponent for insurance sales journey. </li>\n            <li> Improved DevOps practices working with the DevOps engineers. </li>\n            <li> Initiated and facilitated Architecture Review Board for evolving the architecture. </li>\n            <li> Facilitated technology related sessions. </li>\n            <li> Kept the technology stack updated, cost effective and relevant. </li>\n            <li> Mentored and managed a team of software engineers both from Aegon Life and Saksoft (our consulting partner). </li>\n            <li> Conducted technical interviews and helped grow the team of software engineers. </li>\n          </ul>\n          "}]},otherRelevantData:{badges:[{id:"aws-sa",name:"Girija's AWS Solution Architect badge",verificationUrl:"https://www.youracclaim.com/badges/0cf97440-4089-4fab-8245-a50644451e44/public_url"},{id:"azure-fu",name:"Girija's Azure Fundamentals badge",verificationUrl:"https://www.youracclaim.com/badges/6f8283a0-a895-4d7c-8d9a-5368d1433248/public_url"},{id:"azure-d-fu",name:"Girija's Azure Data Fundamentals badge",verificationUrl:"https://www.youracclaim.com/badges/8ce8dc6e-cd1c-4dfb-8979-eea208ffd2ab/public_url"}],skills:[{name:"Solution Design",proficiency:4},{name:"Application Architecture",proficiency:4},{name:"Technology Architecture",proficiency:4},{name:"AWS",proficiency:4},{name:"Azure",proficiency:2}],education:[{institute:"Indira Gandhi National Open University",degree:"Master of Computer Applications",percentage:"63",graduatedOn:"June 2016"},{institute:"Berhampur University",degree:"Bachelors in Computer Applications",percentage:"83",graduatedOn:"June 2010"}],achievements:["Annual Team Performance Award (2019-2020)","Quarterly Team Award (2019)","Quarterly Individual Performance Award (2018)","Team Performance Award (2015)","College Topper Award"],languages:[{name:"English",proficiency:5},{name:"Odia",proficiency:5},{name:"Hindi",proficiency:4}],interests:["Following Cricket","Travelling & Capturing Landscapes"]},footer:{contact:{email:"",mobile:""},portfolioUrl:"https://gsswain.com"}},X=function(){return a.createElement("section",{className:"resume-content"},a.createElement(j,{headerData:V.header}),a.createElement($,{otherRelevantData:V.otherRelevantData,professionalSummaryData:V.professionalSummary}),a.createElement(w,{footerData:V.footer}))}}}]);
//# sourceMappingURL=component---src-pages-resume-js-73e1bad68a71b58b2c56.js.map