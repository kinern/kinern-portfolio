(this["webpackJsonpkinern-portfolio"]=this["webpackJsonpkinern-portfolio"]||[]).push([[0],{31:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),i=t.n(r),c=t(2),o=t(3),s=t(5),m=t(4),u=function(){return l.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg navbar-light bg-light",id:"navbar"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("a",{className:"navbar-brand",href:"#top"},"Natalie Kiner"),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement("li",{className:"nav nav-item"},l.a.createElement("a",{className:"nav nav-link",href:"#about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav nav-link",href:"#projects"},"Projects")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav nav-link",href:"#contact"},"Contact")))))},d=t(9),p=t.n(d),h=t(10),f=t(6),E=t.n(f),g=(t(11),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){E.a.init({duration:1500})}},{key:"render",value:function(){return l.a.createElement("div",{className:"fluid-container landing",id:"top"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"text-center","data-aos":"fade-up"},"Natalie Kiner"),l.a.createElement("h4",{className:"text-center","data-aos":"fade-up"},"Software Engineer & Illustrator"),l.a.createElement("a",{href:"#about","data-aos":"fade-up"},l.a.createElement(p.a,{path:h.a,size:2,className:"down-arrow"}))))}}]),t}(n.Component)),b=t.p+"static/media/portfolio-portrait.aa3c9082.png",v=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){E.a.init({duration:1500})}},{key:"render",value:function(){return l.a.createElement("div",{className:"fluid-container about",id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row","data-aos":"fade-left"},l.a.createElement("div",{className:"col-sm about-title"},l.a.createElement("h2",null,"Hello!"),l.a.createElement("img",{className:"profile-img",alt:"Profile",src:b})),l.a.createElement("div",{className:"col-lg"},l.a.createElement("hr",null),l.a.createElement("div",null,"My name is Natalie. I am a Full Stack Web Developer living in the Pacific Northwest. I have built a variety of web applications, ranging from creating reliable websites for clients to integrating tools such as online vector graphic editors and mail services to existing webpages. In my spare time I have built mobile applications and games. I am always eager to work with the latest technologies."),l.a.createElement("br",null),l.a.createElement("div",null,"I am an illustrator as well, and enjoy drawing with traditional mediums. You can view my watercolor artwork on my Instagram page."),l.a.createElement("br",null),l.a.createElement("div",null,"Previously, I worked as an assistant language teacher for a small town in Southern Japan. Being part of the community and helping students learn English has had a large impact on my life. I always find the time to practice Japanese, and I plan on taking the JLPT exam next year.")))))}}]),t}(n.Component),N=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).renderTags=function(){var a=e.props.project.tags;return l.a.createElement("div",null,l.a.createElement("div",{className:"project-tags"},a.map((function(e){return l.a.createElement("div",{key:e,className:"project-tool"},e)}))))},e.renderLinks=function(){var a=e.props.project,t=a.url,n=a.repo;return l.a.createElement("div",{className:"card-buttons"},t?l.a.createElement("a",{className:"project-btn btn btn-primary",target:"_blank",rel:"noopener noreferrer",href:t},"Website"):"",n?l.a.createElement("a",{className:"project-btn btn btn-primary",target:"_blank",rel:"noopener noreferrer",href:n},"Repository"):"")},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){E.a.init({duration:1500})}},{key:"renderHeaderImage",value:function(){var e=this.props.project,a=e.title,t=e.headerImage;return t?l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{className:"card-img-top",src:t,alt:a}),l.a.createElement("div",{className:"card-img-overlay"},l.a.createElement("h1",{className:"card-title"},a))):l.a.createElement("h1",{className:"card-title"},a)}},{key:"render",value:function(){var e=this.props.project,a=e.title,t=e.headline,n=e.description;e.headerImage;return l.a.createElement("div",{key:a,className:"card","data-aos":"fade-up"},l.a.createElement("div",{className:"card-header"},this.renderHeaderImage()),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"card-text"},l.a.createElement("h4",{className:"text-center"},t),l.a.createElement("hr",null),this.renderTags(),n),this.renderLinks()))}}]),t}(n.Component),y=t(8),k=t(7),w=[{title:"JTrack",headline:"Streamlined Mobile App For Tracking Workouts",description:l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null,"JTrack"),' is a mobile application for tracking daily workout routines. It includes a monthly calendar with the ability to add in minutes of exercise. There is a statistics page for visually showing the progress being made. Originally, it was created as a way to manage daily jump rope routines, hence the "J" in the name.'),l.a.createElement("h5",null,"Features"),l.a.createElement("ul",null,l.a.createElement("li",null,"Implements Jerry Seinfeld's \"Don't Break The Chain\" method"),l.a.createElement("li",null,"Displays local weather using OpenWeatherMap API"),l.a.createElement("li",null,"Generates graph of recorded exercises on Statistics screen"),l.a.createElement("li",null,"Bright layout with colorful icons"))),icon:l.a.createElement(k.a,{icon:y.e}),tags:["React Native","Javascript","SQLite","Android","HTML5","CSS3"],url:"https://kinern.github.io/jtrack",repo:"https://github.com/kinern/jtrack",headerImage:""},{title:"React Porfolio",headline:"Single-Scroll Portfolio with Colorful Design",description:l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null,"This website")," is a simple single-scrolling portfolio to show who I am and what I do. It contains an overview about myself and my projects, along with a section to contact me by."),l.a.createElement("p",null)),icon:l.a.createElement(k.a,{icon:y.c}),tags:["ReactJS","Javascript","Bootstrap","HTML5","CSS3"],url:null,repo:"https://github.com/kinern/kinern-portfolio",headerImage:""},{title:"PSP Pilot",headline:"Launching Businesses In The Right Direction",description:l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null,"PSP Pilot")," is a CRM tool for small businesses. Employee, client and project tracking are all combined within the application. I was a lead developer in the creation of PSP Pilot, and had an essential role in the back-end development of the product."),l.a.createElement("p",null,"Additional services for PSP Pilot include Feedback and Help Desk."),l.a.createElement("p",null,l.a.createElement("strong",null,"Feedback")," is a survey generating tool that connects to the client section of PSP Pilot. As a team member for Feedback, my role included updating the survey retrieval and display system, improving overall performance.",l.a.createElement("p",null),l.a.createElement("strong",null,"Help Desk")," is an online email tool that allows support teams to quickly handle requests and record email threads into PSP Pilot. I played a major role in the creation and development for this project. More information can be found in the next project section."),l.a.createElement("p",null,"PSP Pilot, Feedback, and Help Desk are products of Pacific Software Publishing Inc.")),tags:[],icon:l.a.createElement(k.a,{icon:y.d}),url:"https://pilot.pspinc.com",repo:null,headerImage:""},{title:"Helpdesk",headline:"Building Strong Connections Between Clients And Support Teams",description:l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null,"Helpdesk")," is an online email client specifically catered for support teams in small businesses. This tool connects directly to the client section of PSP Pilot. Email threads are kept track of and displayed in an organized fashion. New clients can be added on Helpdesk, which then get generated on PSP Pilot automatically."),l.a.createElement("p",null,"Helpdesk is a product of Pacific Software Publishing Inc.")),tags:[],icon:l.a.createElement(k.a,{icon:y.a}),url:"https://pilot.pspinc.com/helpdesk",repo:null,headerImage:""},{title:"Bloguru",headline:"Bilingual Blogging Hub",description:l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null,"Bloguru")," is a long-established bilingual blogging website for English & Japanese speakers."),l.a.createElement("p",null,"I was the go-to back end developer for:",l.a.createElement("ul",null,l.a.createElement("li",null,"Video Upload And Management"),l.a.createElement("li",null,"Custom Themes 2.0")),"As well as updating a multitude of features:",l.a.createElement("ul",null,l.a.createElement("li",null,"Blog Post Aggregator"),l.a.createElement("li",null,"Email Notifications"),l.a.createElement("li",null,"Generating Posts Via Email"),l.a.createElement("li",null,"Sharing On Social Media"))),l.a.createElement("p",null,"Bloguru is a product of Pacific Software Publishing Inc.")),tags:[],icon:l.a.createElement(k.a,{icon:y.b}),url:"https://www.bloguru.com",repo:null,headerImage:""}].map((function(e){return l.a.createElement(N,{key:e.title,project:e})})),j=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"fluid-container projects"},l.a.createElement("div",{className:"projects-title",id:"projects"},l.a.createElement("h1",null,"Work")),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"container"},w)))}}]),t}(n.Component),P=function(){return l.a.createElement("div",{className:"social-container"},l.a.createElement("div",{className:"social-links"},l.a.createElement("a",{className:"btn",href:"https://www.linkedin.com/in/natalie-kiner/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-linkedin-square fa-3x",rel:"noopener noreferrer","aria-hidden":"true"})),l.a.createElement("a",{className:"btn",href:"https://github.com/kinern",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-github-square fa-3x",rel:"noopener noreferrer","aria-hidden":"true"})),l.a.createElement("a",{className:"btn",href:"https://www.instagram.com/natalie_art7/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-instagram fa-3x",rel:"noopener noreferrer","aria-hidden":"true"})),l.a.createElement("a",{className:"btn",href:"https://dribbble.com/natalie_kiner",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-dribbble fa-3x",rel:"noopener noreferrer","aria-hidden":"true"}))))},I=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){E.a.init({duration:1500})}},{key:"render",value:function(){return l.a.createElement("div",{className:"fluid-container contact"},l.a.createElement("div",{className:"fixed-bg fluid-container",id:"contact"},l.a.createElement("h1",{className:"contact-title"},"Contact")),l.a.createElement("div",{className:"container contact-main","data-aos":"fade-up"},l.a.createElement("div",null,l.a.createElement("p",null,"If you have inquiries or would like to know more about a project, feel free to send me a message below! I can also be contacted through any of my social media profiles.")),l.a.createElement("h3",{className:"text-center"},"Social Media"),l.a.createElement(P,null),l.a.createElement("div",{className:"contact-form"},l.a.createElement("h2",{className:"text-center"},"Get In Touch"),l.a.createElement("hr",null),l.a.createElement("form",{action:"https://formspree.io/mqkyjqwn",method:"POST",className:"form"},l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-2 col-form-label"},"Name"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{className:"form-control",type:"text",name:"name"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-2 col-form-label"},"E-mail"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{className:"form-control",type:"text",name:"_replyto"}))),l.a.createElement("div",{className:"form-group row"},l.a.createElement("label",{className:"col-sm-2 col-form-label"},"Message"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("textarea",{className:"form-control",name:"message"}))),l.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Send")))))}}]),t}(n.Component),S=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("a",{href:"#top",className:"return-top-a"},l.a.createElement("div",{className:"return-top"},l.a.createElement(p.a,{path:h.b,size:1.5}))),l.a.createElement("div",{className:"fluid-container footer"},l.a.createElement("p",null,"Copyright \xa9 2020 Natalie Kiner")))}}]),t}(n.Component),O=(t(31),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(g,null),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null,"Loading...")},l.a.createElement(v,null),l.a.createElement(j,null),l.a.createElement(I,null),l.a.createElement(S,null)))}}]),t}(l.a.Component)),x=t(36);i.a.render(l.a.createElement(x.a,null,l.a.createElement(O,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.be66ca98.chunk.js.map