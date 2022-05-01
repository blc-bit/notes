"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[6040],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6533:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_label:"Internet Fundamental and Applications",sidebar_position:1},s="Internet Fundamental and Applications",u={unversionedId:"Semester-1/internet-fundamentals",id:"Semester-1/internet-fundamentals",title:"Internet Fundamental and Applications",description:"This is Internet Fundamental and Applications",source:"@site/docs/Semester-1/internet-fundamentals.md",sourceDirName:"Semester-1",slug:"/Semester-1/internet-fundamentals",permalink:"/notes/docs/Semester-1/internet-fundamentals",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Semester-1/internet-fundamentals.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Internet Fundamental and Applications",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Table of contents",permalink:"/notes/docs/intro"},next:{title:"Basic Computer Architecture",permalink:"/notes/docs/Semester-1/basic-computer-architecture"}},p={},c=[{value:"Internet And Its History",id:"internet-and-its-history",level:2},{value:"Network &amp; Internet",id:"network--internet",level:3},{value:"How does internet work?",id:"how-does-internet-work",level:3},{value:"Internet, Intranet &amp; Extranet",id:"internet-intranet--extranet",level:3},{value:"Network Architecture",id:"network-architecture",level:3},{value:"TCP / IP",id:"tcp--ip",level:3}],d={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"internet-fundamental-and-applications"},"Internet Fundamental and Applications"),(0,i.kt)("p",null,"This is ",(0,i.kt)("strong",{parentName:"p"},"Internet Fundamental and Applications")),(0,i.kt)("h2",{id:"internet-and-its-history"},"Internet And Its History"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In mid 60's ARPA in DOD was interested in finding a way to connect computers together just so, that researchers they funded could share their findings, thereby reducing costs and eliminating duplication of effort."),(0,i.kt)("li",{parentName:"ul"},"In 1969 Four nodes at university of california at los angeles , university of california, stanford research institute and university of utah were connected."),(0,i.kt)("li",{parentName:"ul"},"Arpa connected multiple other universities by the end but still it was not called internet, it was still a network."),(0,i.kt)("li",{parentName:"ul"},"In 1972, Vint cerf and Bob Kahn both of whom were part of core ARPANET group collaborated in what they called Internetting project,"),(0,i.kt)("li",{parentName:"ul"},"They wanted to link different networks together so that one host network could communicate with second host in different network."),(0,i.kt)("li",{parentName:"ul"},"They developed a gateway to connected multiple network. TCP IP was also introduced which became standard protocol to share data over internet."),(0,i.kt)("li",{parentName:"ul"},"In 1981 CSNET was introduced by NSF. Only those who were tied up with DOD used Arpanet , CSNET allowed other universities to use internet."),(0,i.kt)("li",{parentName:"ul"},"In 1983 ARPANET Splits to MILNET AND ARPANET."),(0,i.kt)("li",{parentName:"ul"},"IN 1986 NSFNET was introduced as a successor of CSNET that connected 5 supercomputers centers located throughout US with speed of 1.544 Mbps."),(0,i.kt)("li",{parentName:"ul"},"In 1990 ARPANET was dismantled because it was slow to use."),(0,i.kt)("li",{parentName:"ul"},"In 1991 ANSNET was introduced by 3 different companies like IBM, Merit and MCI came together to form ANSNET as NSFNET was slow. ANSNET became commercial and many companies started using it.")),(0,i.kt)("h3",{id:"network--internet"},"Network & Internet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Network is simply just connecting computers to share resources."),(0,i.kt)("li",{parentName:"ul"},"The global networks of network is called internet.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"history-of-internet",src:n(5005).Z,width:"1169",height:"557"})),(0,i.kt)("h3",{id:"how-does-internet-work"},"How does internet work?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"how-does-internet-works",src:n(766).Z,width:"995",height:"681"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"what-happen-when-you-surf-the-internet-1",src:n(2145).Z,width:"995",height:"597"}),"\n",(0,i.kt)("img",{alt:"what-happen-when-you-surf-the-internet-2",src:n(7732).Z,width:"999",height:"589"}),"\n",(0,i.kt)("img",{alt:"what-happen-when-you-surf-the-internet-3",src:n(4275).Z,width:"999",height:"865"})),(0,i.kt)("h3",{id:"internet-intranet--extranet"},"Internet, Intranet & Extranet"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Internet")),(0,i.kt)("p",null,"The network formed by the co-operative interconnection of millions of computers, linked together is called Internet. Internet comprises of :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"People : People use and develop the network."),(0,i.kt)("li",{parentName:"ul"},"Resources : A collection of resources that can be reached from those networks."),(0,i.kt)("li",{parentName:"ul"},"A setup for collaboration : It includes the member of the research and educational committees worldwide.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Intranet")),(0,i.kt)("p",null,"It is an internal private network built within an organization using Internet and World Wide Web standards and products that allows employees of an organization to gain access to corporate information. The main purpose of intranet is to share company information and computing resources among employees. Firewall is used to prohibit external users. Only authenticated users are allow to use the internet."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Extranet")),(0,i.kt)("p",null,"It is a private network that uses internet technology and public telecommunication system to securely share part of business information or operation with suppliers, vendors, partners, customers or other business. It can be viewed as a company's intranet that is extended and accessible to users outside the company."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Point of difference"),(0,i.kt)("th",{parentName:"tr",align:null},"Internet"),(0,i.kt)("th",{parentName:"tr",align:null},"Intranet"),(0,i.kt)("th",{parentName:"tr",align:null},"Extranet"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Accessibility of network"),(0,i.kt)("td",{parentName:"tr",align:null},"Public"),(0,i.kt)("td",{parentName:"tr",align:null},"Private"),(0,i.kt)("td",{parentName:"tr",align:null},"Private")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Availability"),(0,i.kt)("td",{parentName:"tr",align:null},"Global system."),(0,i.kt)("td",{parentName:"tr",align:null},"Specific to an organization."),(0,i.kt)("td",{parentName:"tr",align:null},"To share information with suppliers and vendors it makes the use of public network.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Coverage"),(0,i.kt)("td",{parentName:"tr",align:null},"All over the world."),(0,i.kt)("td",{parentName:"tr",align:null},"Restricted area upto an organization."),(0,i.kt)("td",{parentName:"tr",align:null},"Restricted area upto an organization and some of its stakeholders or so.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Accessibility of content"),(0,i.kt)("td",{parentName:"tr",align:null},"It is accessible to everyone connected."),(0,i.kt)("td",{parentName:"tr",align:null},"It is accessible only to the members of organization."),(0,i.kt)("td",{parentName:"tr",align:null},"Accessible only to the members of organization and external members with logins.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Owner"),(0,i.kt)("td",{parentName:"tr",align:null},"No one."),(0,i.kt)("td",{parentName:"tr",align:null},"Single organization."),(0,i.kt)("td",{parentName:"tr",align:null},"Single/ Multiple organization.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Purpose of the network"),(0,i.kt)("td",{parentName:"tr",align:null},"It\u2019s purpose is to share information throughout the world."),(0,i.kt)("td",{parentName:"tr",align:null},"It\u2019s purpose is to share information throughout the organization."),(0,i.kt)("td",{parentName:"tr",align:null},"It\u2019s purpose is to share information between members and external, members.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Security"),(0,i.kt)("td",{parentName:"tr",align:null},"It is dependent on the user of the device connected to network."),(0,i.kt)("td",{parentName:"tr",align:null},"It is enforced via firewall."),(0,i.kt)("td",{parentName:"tr",align:null},"It is enforced via firewall that separates internet and extranet.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Users"),(0,i.kt)("td",{parentName:"tr",align:null},"General public."),(0,i.kt)("td",{parentName:"tr",align:null},"Employees of the organization."),(0,i.kt)("td",{parentName:"tr",align:null},"Employees of the organization which are connected.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Maintenance"),(0,i.kt)("td",{parentName:"tr",align:null},"It is maintained by ISP."),(0,i.kt)("td",{parentName:"tr",align:null},"It is maintained by CIO. HR or communication department of an organization."),(0,i.kt)("td",{parentName:"tr",align:null},"It is maintained by CIO. HR or communication department of an organization.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Economical"),(0,i.kt)("td",{parentName:"tr",align:null},"It is more economical to use."),(0,i.kt)("td",{parentName:"tr",align:null},"It is less economical."),(0,i.kt)("td",{parentName:"tr",align:null},"It is also less economical.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"internet-intranet-extranet",src:n(1690).Z,width:"1536",height:"807"})),(0,i.kt)("h3",{id:"network-architecture"},"Network Architecture"),(0,i.kt)("p",null,"Computer Network Architecture is defined as the physical and logical design of the software, hardware, protocols, and media of the transmission of data. Simply we can say that how computers are organized and how tasks are allocated to the computer."),(0,i.kt)("p",null,"The two types of network architectures are used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Peer-To-Peer network"),(0,i.kt)("li",{parentName:"ul"},"Client/Server network")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Peer to Peer Network Architecture")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"peer-to-peer-network-architecture",src:n(5517).Z,width:"225",height:"225"})),(0,i.kt)("p",null,"Peer-To-Peer network links all computers together with equal privilege processing. Peer-To-Peer network is mostly useful for small environments, usually up to 10 computers. Peer-To-Peer network do not have centralized server."),(0,i.kt)("p",null,"Advantages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is inexpensive."),(0,i.kt)("li",{parentName:"ul"},"No other computers are affected if any one gets harm."),(0,i.kt)("li",{parentName:"ul"},"Easy to setup and manage.")),(0,i.kt)("p",null,"Disadvantages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No Backup"),(0,i.kt)("li",{parentName:"ul"},"A big security issue")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Client Server Network Architecture")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"client-server-network-architecture",src:n(1616).Z,width:"882",height:"678"})),(0,i.kt)("p",null,"Client/Server network is a network model where client computer try to access the resources from a central computer known as Server. Request from clients are resolve with a response from the server. Computer that resolve the request is called server while the computer that request for data is called client."),(0,i.kt)("p",null,"Advantage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Processing of data is done on the centralized server which"),(0,i.kt)("li",{parentName:"ul"},"improves network performance."),(0,i.kt)("li",{parentName:"ul"},"Better Security"),(0,i.kt)("li",{parentName:"ul"},"Easy backup")),(0,i.kt)("p",null,"Disadvantages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Expensive since it required large processing & memory capability."),(0,i.kt)("li",{parentName:"ul"},"NOS cost is high."),(0,i.kt)("li",{parentName:"ul"},"Requires a dedicated network administrator.")),(0,i.kt)("h3",{id:"tcp--ip"},"TCP / IP"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tcp-ip",src:n(1658).Z,width:"1000",height:"600"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TCP stands for Transmission Control Protocol, deals with ensuring that the data packets are delivered in a reliable manner from one computer to another. You could say that TCP sits on top of IP."),(0,i.kt)("li",{parentName:"ul"},"IP stands for the Internet Protocol that deals with routing packets of data from one computer to another or from one router to another.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Four Layers of TCP/IP")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"layers-of-tcp-ip",src:n(6423).Z,width:"1600",height:"1147"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"application layer")," provides applications with standardized data exchange. Its protocols include HTTP, FTP, Post Office Protocol 3, Simple Mail Transfer Protocol and Simple Network Management Protocol."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"transport layer")," is responsible for maintaining end-to-end communications across the network. TCP handles communications between hosts and provides flow control, multiplexing and reliability."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"network layer"),", also called the internet layer, deals with packets and connects independent networks to transport the packets across network boundaries."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"physical layer"),", also known as the network interface layer or data link layer, consists of protocols that operate only on a link the network component that interconnects nodes or hosts in the network")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Vulnerabilities Of TCP/IP")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"vul-of-tcp-ip",src:n(7495).Z,width:"575",height:"315"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transfers are done in plain text"),(0,i.kt)("li",{parentName:"ul"},"Weak authentication between client and web server"),(0,i.kt)("li",{parentName:"ul"},"No solution to syn packet flooding"),(0,i.kt)("li",{parentName:"ul"},"IP layer susceptible to many vulnerabilities due to IP spoofing attacks")))}m.isMDXComponent=!0},1616:function(e,t,n){t.Z=n.p+"assets/images/client-server-network-architecture-ad6443a5ea6e971e55dffcc6a6070c32.jpg"},5005:function(e,t,n){t.Z=n.p+"assets/images/history-of-internet-6f1102aeae1131d2d555f888c8751142.png"},766:function(e,t,n){t.Z=n.p+"assets/images/how-does-internet-works-6fb43578e364dee6b8890666ee79a9be.jpg"},1690:function(e,t,n){t.Z=n.p+"assets/images/internet-intranet-extranet-1bd548a8886fa4331afa8c607aacbefe.jpg"},6423:function(e,t,n){t.Z=n.p+"assets/images/layers-of-tcp-ip-21e98f64b3dbf44495823ae84edbb3f8.jpg"},5517:function(e,t,n){t.Z=n.p+"assets/images/peer-to-peer-network-architecture-4306aa864d5a2d98def19496e046c324.jpg"},1658:function(e,t,n){t.Z=n.p+"assets/images/tcp-ip-ad17bbf8e8104c37d980b6d93c4ddc01.jpg"},7495:function(e,t,n){t.Z=n.p+"assets/images/vul-of-tcp-ip-1695f28ad5f86aa43a92fa4f2234e5ae.png"},2145:function(e,t,n){t.Z=n.p+"assets/images/what-happen-when-you-surf-the-internet-1-267c3c003b76e9b5d9c8dcaae2ecb7e6.jpg"},7732:function(e,t,n){t.Z=n.p+"assets/images/what-happen-when-you-surf-the-internet-2-07e76fd1e2bfc0323e35ac97c5072c02.jpg"},4275:function(e,t,n){t.Z=n.p+"assets/images/what-happen-when-you-surf-the-internet-3-ac17c6a3eec6392ec2bef6acf16079b8.jpg"}}]);