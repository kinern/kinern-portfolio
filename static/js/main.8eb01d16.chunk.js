(this["webpackJsonpkinern-portfolio"]=this["webpackJsonpkinern-portfolio"]||[]).push([[0],{22:function(e,a,t){e.exports=t(36)},29:function(e,a,t){e.exports=t.p+"static/media/portfolio-portrait.2664ff02.png"},33:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),i=t.n(l),c=t(2),o=t(3),s=t(5),m=t(4),u=function(){return r.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg navbar-light bg-light",id:"navbar"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("a",{className:"navbar-brand",href:"#top"},"Natalie Kiner"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"nav nav-item"},r.a.createElement("a",{className:"nav nav-link",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav nav-link",href:"#projects"},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav nav-link",href:"#contact"},"Contact")))))},d=t(6),p=t.n(d),f=(t(9),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){p.a.init({duration:1500})}},{key:"render",value:function(){return r.a.createElement("div",{className:"fluid-container landing",id:"top"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center","data-aos":"fade-up"},"Natalie Kiner"),r.a.createElement("h4",{className:"text-center","data-aos":"fade-up"},"Software Engineer & Illustrator"),r.a.createElement("a",{href:"#about","data-aos":"fade-up"},r.a.createElement("span",{"data-aos":"fade-up",className:"down-arrow"},r.a.createElement("i",{className:"fas fa-chevron-down"})))))}}]),t}(n.Component)),h=t(11),g=t.n(h),E=t(12),v=[{icon:"mdi-tea",title:"Tea",text:"I start every morning with a hot cup of tea. My current favorites are Lupicia's Cookie Black Flavored Tea and Amanatsu Oolong Tea"},{icon:"mdi-tennis",title:"Tennis and Badminton",text:"I enjoy playing Badminton and other racket sports, and was an active member of the badminton club while I was working as an Assistant Language Teacher."},{icon:"hiragana-a",title:"Japanese Language and Culture",text:"I have taught in Japan for two years in a small village in Southern Japan. Some of my greatest experiences and came from there."},{icon:"laptop-code",title:"Web, Game and Mobile Development",text:"I started programming on my own while I was in Junior Highschool. I decided to pursue my interest further in uniersity and graduated with a degree in Computer Science."},{icon:"pencil-ruler",title:"Lineart Illustration",text:"I enjoy participating in events like Inktober and 24-Hour Comic."},{icon:"palette",title:"Watercolor and Goauche Painting",text:"Painting has become a new hobby of mine. You can see my artwork on my instagram profile."},{icon:"th",title:"Pixel Artwork",text:"Going hand-in-hand with game development, creating artwork by pixels is a great way to understand composition on a smaller scale."}],b=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var t=arguments.length,l=new Array(t),i=0;i<t;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={},e.renderInterests=function(){return r.a.createElement("div",{className:"interest-icons"},v.map((function(a){var t="interest-icon ".concat(e.state.interestIcon===a.icon?"active":"");switch(a.icon){case"hiragana-a":return r.a.createElement("div",{key:a.icon,className:t,onClick:function(){return e.changeInterestText(a)}},"\u3042");case"mdi-tennis":return r.a.createElement("div",{key:a.icon,className:t},r.a.createElement(g.a,{path:E.b,size:1.4,className:"mdi-icon",onClick:function(){return e.changeInterestText(a)}}));case"mdi-tea":return r.a.createElement("div",{key:a.icon,className:t},r.a.createElement(g.a,{path:E.a,size:1.4,className:"mdi-icon",onClick:function(){return e.changeInterestText(a)}}));default:return r.a.createElement("div",{key:a.icon,className:t,onClick:function(){return e.changeInterestText(a)}},r.a.createElement("i",{className:"fa fa-".concat(a.icon)}))}})))},e}return Object(o.a)(n,[{key:"changeInterestText",value:function(e){var a=e.title,t=e.text,n=e.icon;this.state.interestIcon===n?this.setState({interestTitle:"",interestText:"",interestIcon:""}):this.setState({interestTitle:a,interestText:t,interestIcon:n})}},{key:"componentDidMount",value:function(){p.a.init({duration:1500})}},{key:"render",value:function(){return r.a.createElement("div",{className:"fluid-container about",id:"about"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row","data-aos":"fade-left"},r.a.createElement("div",{className:"col-sm about-title"},r.a.createElement("h2",null,"About Me"),r.a.createElement("img",{className:"profile-img",alt:"Profile",src:t(29)})),r.a.createElement("div",{className:"col-lg"},r.a.createElement("hr",null),r.a.createElement("div",null,"Hello! my name is Natalie. I am a Software Engineer living in the PNW. Programming is something I have enjoyed doing for many years. Recently I have been working as a Full Stack Web Developer. I like collaborating with others on large software projects, but I also delve into solo projects from time to time."),r.a.createElement("br",null),r.a.createElement("div",null,"My other creating outlet in my artwork, which I have been producing since I was a kid. I am accustomed to colored pencil and lineart, but I have also recently picked up watercolors painting. You can see a glimpse of my artwork on my Instragram profile. I enjoy drawing wildlife and natural landscapes."),r.a.createElement("br",null),r.a.createElement("div",null,"Something people may not know about is my interest in Japanese language and culture. After I graduated university, I was an assistant language teacher for two years Southern Japan. I have fond memories of giving students English lessons and being a part of the community. I started learning Japanese in high school and hope to pass the N2 Japanese Language Proficiency Test (JLPT) at the end of 2021.")))))}}]),n}(n.Component),y=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).renderTags=function(){var a=e.props.project.tags;return r.a.createElement("div",null,r.a.createElement("div",{className:"project-tags"},a.map((function(e){return r.a.createElement("div",{key:e,className:"project-tool"},e)}))))},e.renderLinks=function(){var a=e.props.project,t=a.url,n=a.repo;return r.a.createElement("div",{className:"card-buttons"},t?r.a.createElement("a",{className:"project-btn btn btn-primary",target:"_blank",rel:"noopener noreferrer",href:t},"View Site"):"",n?r.a.createElement("a",{className:"project-btn btn btn-primary",target:"_blank",rel:"noopener noreferrer",href:n},"View Repo"):"")},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){p.a.init({duration:1500})}},{key:"renderHeaderImage",value:function(){var e=this.props.project,a=e.title,t=e.headerImage;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"card-img-top",src:t,alt:a}),r.a.createElement("div",{className:"card-img-overlay"},r.a.createElement("h1",{className:"card-title"},a))):r.a.createElement("h1",{className:"card-title"},a)}},{key:"render",value:function(){var e=this.props.project,a=e.title,t=e.headline,n=e.description;e.headerImage;return r.a.createElement("div",{key:a,className:"card","data-aos":"fade-up"},r.a.createElement("div",{className:"card-header"},this.renderHeaderImage()),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text"},r.a.createElement("h4",{className:"text-center"},t),r.a.createElement("hr",null),this.renderTags(),n),this.renderLinks()))}}]),t}(n.Component),N=t(8),w=t(7),k=[{title:"JTrack",headline:"Mobile Fitness Tracking Application",description:r.a.createElement("div",null,r.a.createElement("p",null,'JTtrack is a fitness tracking mobile application. I had originally built this tool as a way to track jump rope exercise routines, hence the "J" in the name.'),r.a.createElement("h5",null,"Overview Of Project"),r.a.createElement("ul",null,r.a.createElement("li",null,"Daily fitness tracker using Jerry Seinfeld's \"Don't Break The Chain\" method"),r.a.createElement("li",null,"Interactive calendar and local weather using OpenWeatherMap API"),r.a.createElement("li",null,"Statistics page with monthly graph of recorded exercises."),r.a.createElement("li",null,"Bright layout with colorful icons"))),icon:r.a.createElement(w.a,{icon:N.e}),tags:["React Native","Javascript","SQLite","Android","HTML5","CSS3"],url:null,repo:"https://github.com/kinern/jtrack",headerImage:""},{title:"React Porfolio",headline:"New Design For Portfolio Website",description:r.a.createElement("div",null,r.a.createElement("p",null,"One of my first projects created with ReactJS. It was originally a crash course for learning the language, but has been gradually improved upon. My most recent updates include adding more imagery and small changes to the style of the site."),r.a.createElement("h5",null,"Overview Of Project"),r.a.createElement("ul",null,r.a.createElement("li",null,"Compact projects page with snippet of recent project information"),r.a.createElement("li",null,"Contact page with integrated external form"),r.a.createElement("li",null,"Clean and easy to navigate layout"),r.a.createElement("li",null,"Fixed background sections and engaging animations."))),icon:r.a.createElement(w.a,{icon:N.c}),tags:["ReactJS","Javascript","Bootstrap","HTML5","CSS3"],url:null,repo:"https://github.com/kinern/kinern-portfolio",headerImage:""},{title:"PSP Pilot",headline:"CRM For Small Businesses",description:r.a.createElement("div",null,r.a.createElement("p",null,"PSP Pilot is a CRM web application for small business. It is a product of the company Pacific Software Publishing LCC. As a lead developer, I was in control of creating the backend functionality."),r.a.createElement("h5",null," Major Features "),r.a.createElement("ul",null,r.a.createElement("li",null,"Initial setup and backend design of the web application."),r.a.createElement("li",null,"Address books for company employee and contact information and recent activity."),r.a.createElement("li",null,"Assignment tracking tool for projects."),r.a.createElement("li",null,"Feedback - Survey forms for sending out to clients"),r.a.createElement("li",null,"Helpdesk - Online email client for support teams"))),tags:[],icon:r.a.createElement(w.a,{icon:N.d}),url:"https://pilot.pspinc.com",repo:null,headerImage:""},{title:"Helpdesk",headline:"Online Email Client Tool for Support Teams",description:r.a.createElement("div",null,r.a.createElement("p",null,"Helpesk is an online email client specifically catered for support teams in small businesses. This web application was built for Pacific Software Publishing LCC. I was the lead developer for the project, and worked with closely in a small team to create the interface and functionality."),r.a.createElement("h5",null,"Major Features"),r.a.createElement("ul",null,r.a.createElement("li",null,"Designed to allow multiple users to use client smoothly simultaneously."),r.a.createElement("li",null,"Integrates with the PSP Pilot web application contact directory to save and add new email contacts."),r.a.createElement("li",null,"Sleek and easy to use interface."))),tags:[],icon:r.a.createElement(w.a,{icon:N.a}),url:"https://pilot.pspinc.com/helpdesk",repo:null,headerImage:""},{title:"Bloguru",headline:"Bilingual Blogging Hub",description:r.a.createElement("div",null,r.a.createElement("p",null,"Bloguru is an established English | Japanese Bilingual blogging hub. It is a free application from Pacific Software Publishing LCC. I worked with a small team to add new features and resolve issues on the website."),r.a.createElement("h5",null,"Major Features"),r.a.createElement("ul",null,r.a.createElement("li",null,"Designed and created backend system for video upload and management service"),r.a.createElement("li",null,"Updated admin side of new customizable themes for blogs"),r.a.createElement("li",null,"Revised email notification system"))),tags:[],icon:r.a.createElement(w.a,{icon:N.b}),url:"https://www.bloguru.com",repo:null,headerImage:""}].map((function(e){return r.a.createElement(y,{key:e.title,project:e})})),j=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"fluid-container projects"},r.a.createElement("div",{className:"projects-title",id:"projects"},r.a.createElement("h1",null,"Recent Projects")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container"},k)))}}]),t}(n.Component),I=function(){return r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{className:"btn",href:"https://www.linkedin.com/in/natalie-kiner/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-linkedin-square fa-3x",rel:"noopener noreferrer","aria-hidden":"true"})),r.a.createElement("a",{className:"btn",href:"https://github.com/kinern",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github-square fa-3x",rel:"noopener noreferrer","aria-hidden":"true"})),r.a.createElement("a",{className:"btn",href:"https://www.instagram.com/natalie_art7/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-instagram fa-3x",rel:"noopener noreferrer","aria-hidden":"true"})),r.a.createElement("a",{className:"btn",href:"https://dribbble.com/natalie_kiner",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-dribbble fa-3x",rel:"noopener noreferrer","aria-hidden":"true"})))},x=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){p.a.init({duration:1500})}},{key:"render",value:function(){return r.a.createElement("div",{className:"fluid-container contact"},r.a.createElement("div",{className:"fixed-bg fluid-container",id:"contact"},r.a.createElement("h1",{className:"contact-title"},"Contact Me")),r.a.createElement("div",{className:"container contact-main","data-aos":"fade-up"},r.a.createElement("div",null,r.a.createElement("p",null,"If you have inquiries or would like to know more about a project, feel free to send me a message below! I can also be contacted through any of my social media profiles.")),r.a.createElement("h3",{className:"text-center"},"Social Media"),r.a.createElement(I,null),r.a.createElement("div",{className:"contact-form"},r.a.createElement("h2",{className:"text-center"},"Get In Touch"),r.a.createElement("hr",null),r.a.createElement("form",{action:"https://formspree.io/mqkyjqwn",method:"POST",className:"form"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-2 col-form-label"},"Name"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",type:"text",name:"name"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-2 col-form-label"},"E-mail"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("input",{className:"form-control",type:"text",name:"_replyto"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-2 col-form-label"},"Message"),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("textarea",{className:"form-control",name:"message"}))),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Send")))))}}]),t}(n.Component),O=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{href:"#top",className:"return-top-a"},r.a.createElement("div",{className:"return-top"},r.a.createElement("i",{className:"fa fa-arrow-up"}))),r.a.createElement("div",{className:"fluid-container footer"},r.a.createElement("p",null,"Copyright \xa9 2020 Natalie Kiner")))}}]),t}(n.Component),C=(t(33),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(f,null),r.a.createElement(b,null),r.a.createElement(j,null),r.a.createElement(x,null),r.a.createElement(O,null))}}]),t}(r.a.Component)),S=t(38);i.a.render(r.a.createElement(S.a,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8eb01d16.chunk.js.map