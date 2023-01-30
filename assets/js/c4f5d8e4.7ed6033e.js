"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[64195],{5258:(e,t,a)=>{a.r(t),a.d(t,{default:()=>he});var i=a(67294),n=a(39960),l=a(52263),s=a(56866);const r="mainCard_QViT",o="gettingStartedText_vlIS",c="gettingStartedOne_mmwA",m="gettingStartedTwo_qqzt",d="gettingStartedThree_l06L",p="bold_Lt4a",u="gridContainer_Ovbj",g="video_L9wR",E="carousel_yjhq",h="contentContainer_7iTj",v="card_HZkK",_="cardText_oigx",k="cardIcon_hRze",N="cardArrow_d11t",w="product_YWgL",f="idn_k7x1",y="iiq_Evz0";var T=a(44996),Z=a(50941),S=a(23625);function b(e){let{link:t,title:a,image:l,product:s}=e;const r="idn"===s?f:y;return i.createElement(n.Z,{to:t},i.createElement("div",{className:v},i.createElement(Z.Z,{className:k,sources:{light:(0,T.Z)(l),dark:(0,T.Z)((0,S.Z)(l))}}),i.createElement(Z.Z,{className:N,sources:{light:(0,T.Z)("/homepage/arrow-right.png"),dark:(0,T.Z)("/homepage/arrow-right-dark.png")}}),i.createElement("div",{className:_},a),i.createElement("div",{className:`${w} ${r}`},s)))}function C(){return i.createElement("div",null,i.createElement("div",{className:r},i.createElement("div",{className:h},i.createElement("div",{className:o},i.createElement("div",{className:c},"SailPoint Developer Community"),i.createElement("div",{className:m},"Don't know where to get started?"),i.createElement("div",{className:d},"Jump into our"," ",i.createElement("span",{className:p},"Get Started Guides")," for more information.")),i.createElement("div",{className:u},i.createElement(b,{link:"/idn/docs",title:"Get Started with IdentityNow",image:"/homepage/cloud.png"}),i.createElement(b,{link:"https://documentation.sailpoint.com/identityiq/help/iiqlandingpage.html",title:"Get Started with IdentityIQ",image:"/homepage/cloud.png"}))),i.createElement("div",{className:E},i.createElement("iframe",{className:g,src:"https://www.youtube.com/embed/N-JG8xjpKaI",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))))}const x="gettingStartedText_Ltc2",I="gettingStartedOne_LO6b",O="gettingStartedThree__DAE",D="gettingStartedCardIcon_fScg",L="button_H6Dm",A="link_j1mR";function R(e){let{link:t,title:a,image:l,description:s,buttonText:r}=e,o=i.createElement("div",null);return r&&(o=i.createElement("div",{className:L},i.createElement(n.Z,{className:A,to:t},r))),i.createElement("div",{className:x},i.createElement(Z.Z,{className:D,sources:{light:(0,T.Z)(l),dark:(0,T.Z)((0,S.Z)(l))}}),i.createElement("div",{className:I},a),i.createElement("div",{className:O,dangerouslySetInnerHTML:{__html:s}}),o)}const V="gridContainer_jZDJ",P="center_pCl3";function j(){return i.createElement("div",{className:P},i.createElement("div",{className:V},i.createElement(b,{product:"idn",link:"/idn/api/getting-started",title:"Make Your First API Call",image:"/homepage/cloud.png"}),i.createElement(b,{product:"idn",link:"/idn/docs/transforms/guides/your-first-transform",title:"Build a Transform",image:"/homepage/cloud.png"}),i.createElement(b,{product:"idn",link:"/idn/docs/saas-connectivity",title:"Build a SaaS Connector",image:"/homepage/cloud.png"}),i.createElement(b,{product:"iiq",link:"https://documentation.sailpoint.com/identityiq/help/plugins/identityiq_plugins.html",title:"Build an IIQ Plugin",image:"/homepage/cloud.png"})))}const G="gridContainer_IjGS",q="center_TbGI",W="card_wDSk",M="cardText_govp",F="linkText_OnCs",B="linkSolvedText_nPXY",J="cardIcon_Wr_A",K="cardArrow_zV_U",U="cardViews_ci3W",Y="cardLikes_V1Gu",H="cardSolved_dhLK",z="cardDiscuss_bwQk",Q="cardEye_iPYo",X="cardLiked_vdNj",$="tag_TvhU",ee="tags_LskV";function te(e){let{link:t,title:a,tags:l,views:s,liked:r,solution:o}=e,c=i.createElement("img",{className:z,src:(0,T.Z)("/homepage/edit.png")}),m=i.createElement("div",{className:F},"Join the Discussion");return o&&(c=i.createElement(Z.Z,{className:H,sources:{light:(0,T.Z)("/homepage/solved.png"),dark:(0,T.Z)((0,S.Z)("/homepage/solved.png"))}}),m=i.createElement("div",{className:B},"View the Solution")),i.createElement(n.Z,{to:t},i.createElement("div",{className:W},i.createElement(Z.Z,{className:J,sources:{light:(0,T.Z)("/homepage/quotes.png"),dark:(0,T.Z)((0,S.Z)("/homepage/quotes.png"))}}),i.createElement(Z.Z,{className:K,sources:{light:(0,T.Z)("/homepage/arrow-right.png"),dark:(0,T.Z)("/homepage/arrow-right-dark.png")}}),i.createElement(Z.Z,{className:Q,sources:{light:(0,T.Z)("/homepage/eyeball.png"),dark:(0,T.Z)((0,S.Z)("/homepage/eyeball.png"))}}),i.createElement("img",{className:X,src:(0,T.Z)("/homepage/liked.png")}),c,i.createElement("div",{className:M},a),i.createElement("div",{className:U},s),i.createElement("div",{className:Y},r),m,i.createElement("div",{className:ee},l?.map(((e,t)=>t>2?"":i.createElement("div",{className:$},e))))))}function ae(){const[e,t]=i.useState(),a=async()=>{const e=await async function(){try{const e=await fetch("https://developer.sailpoint.com/discuss/top.json");return await e.json()}catch(e){return[]}}(),a=[ie(e,0),ie(e,1),ie(e,2),ie(e,ne(e.topic_list.topics))];t(a)};return i.useEffect((()=>{a()}),[]),e?i.createElement("div",{className:q},i.createElement("div",{className:G},i.createElement(te,{solution:e[0].solution,liked:e[0].liked,tags:e[0].tags,link:e[0].link,title:e[0].title,views:e[0].views}),i.createElement(te,{solution:e[1].solution,liked:e[1].liked,tags:e[1].tags,link:e[1].link,title:e[1].title,views:e[1].views}),i.createElement(te,{solution:e[2].solution,liked:e[2].liked,tags:e[2].tags,link:e[2].link,title:e[2].title,views:e[2].views}),i.createElement(te,{solution:e[3].solution,liked:e[3].liked,tags:e[3].tags,link:e[3].link,title:e[3].title,views:e[3].views}))):i.createElement("div",null)}function ie(e,t){return{tags:e.topic_list.topics[t].tags,link:"https://developer.sailpoint.com/discuss/t/"+e.topic_list.topics[t].slug+"/"+e.topic_list.topics[t].id,title:e.topic_list.topics[t].title,views:e.topic_list.topics[t].views,liked:e.topic_list.topics[t].like_count,solution:e.topic_list.topics[t].has_accepted_answer}}function ne(e){let t=0;for(const a of e){if(a.has_accepted_answer&&t>2)return t;t++}return t}const le="gridContainer_BkfM",se="center_Akb6",re="card_X33p",oe="cardText_OCKP",ce="titleText_wIpi",me="expertiseText_vtDU",de="cardArrow_wUbr",pe="cardFaceContainer_em_e",ue="cardFace_jWL8";function ge(e){let{link:t,title:a,name:l,expertise:s,image:r}=e;return i.createElement(n.Z,{to:t},i.createElement("div",{className:re},i.createElement("div",{className:pe},i.createElement("img",{className:ue,src:(0,T.Z)(r)})),i.createElement(Z.Z,{className:de,sources:{light:(0,T.Z)("/homepage/arrow-right.png"),dark:(0,T.Z)("/homepage/arrow-right-dark.png")}}),i.createElement("div",{className:oe},l),i.createElement("div",{className:ce},a),i.createElement("div",{className:me},s)))}function Ee(){return i.createElement("div",{className:se},i.createElement("div",{className:le},i.createElement(ge,{link:"https://developer.sailpoint.com/discuss/u/colin_mckibben/summary",name:"Colin McKibben",title:"DEVELOPER ADVOCATE",expertise:"API, WORKFLOWS, EVENT TRIGGERS",image:"/homepage/colin-mckibben.png"}),i.createElement(ge,{link:"https://developer.sailpoint.com/discuss/u/tyler_mairose/summary",name:"Tyler Mairose",title:"DEVELOPER ADVOCATE",expertise:"RULES, TRANSFORMS",image:"/homepage/tyler-mairose.png"}),i.createElement(ge,{link:"https://developer.sailpoint.com/discuss/u/philip-ellis/summary",name:"Philip Ellis",title:"DEVELOPER ADVOCATE",expertise:"DEVELOPER TOOLS, SAAS CONNECTIVITY",image:"/homepage/phil-ellis.png"}),i.createElement(ge,{link:"https://developer.sailpoint.com/discuss/u/jthaytko/summary",name:"James Haytko",title:"TECHNICAL WRITER",expertise:"DEVELOPER DOCUMENTATION",image:"/homepage/james-haytko.png"})))}function he(){const{siteConfig:e}=(0,l.Z)();return i.createElement(s.Z,{description:"The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions."},i.createElement("main",null,i.createElement(C,null),i.createElement(R,{description:"If you still aren't sure where to get started, try one of the <b>Getting Started Guides</b> below, or see what our platform has to offer.",link:"https://www.sailpoint.com/products/IdentityNow/",title:"Start With the Basics",image:"/homepage/person-head.png",buttonText:"Explore our platform"}),i.createElement(j,null),i.createElement(R,{description:"The SailPoint Developer Forums are a great place to find solutions to common development problems.",link:"https://developer.sailpoint.com/discuss/",title:"What is the Community saying?",image:"/homepage/discuss.png",buttonText:"Join the Discussion"}),i.createElement(ae,null),i.createElement(R,{description:"The Developer Relations team is responsible for creating a better developer experience on our platform. Click on someone to reach out to them, or <a href='https://developer.sailpoint.com/discuss/new-message?groupname=developer_relations/'>contact our team directly</a>.",title:"Meet Our Team",image:"/homepage/team.png",buttonText:""}),i.createElement(Ee,null)))}},23625:(e,t,a)=>{function i(e){const t=e.split(".");return t[0]+"-dark."+t[1]}a.d(t,{Z:()=>i})}}]);