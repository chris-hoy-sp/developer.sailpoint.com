"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[24145],{42323:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>g});var n=i(87462),a=(i(67294),i(3905));const r={id:"identity-attribute-changed",title:"Identity Attributes Changed",pagination_label:"Identity Attributes Changed",sidebar_label:"Identity Attributes Changed",sidebar_class_name:"identityAttributesChanged",keywords:["event","trigger","identity","attributes","changed","available"],description:"Fires after one or more identity attributes changed.",slug:"/docs/event-triggers/triggers/identity-attribute-changed",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},s=void 0,d={unversionedId:"docs/identity-now/event-triggers/available/identity-attribute-changed",id:"docs/identity-now/event-triggers/available/identity-attribute-changed",title:"Identity Attributes Changed",description:"Fires after one or more identity attributes changed.",source:"@site/products/idn/docs/identity-now/event-triggers/available/identity-attribute-changed.md",sourceDirName:"docs/identity-now/event-triggers/available",slug:"/docs/event-triggers/triggers/identity-attribute-changed",permalink:"/idn/docs/event-triggers/triggers/identity-attribute-changed",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/available/identity-attribute-changed.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/idn/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"Philip Ellis",lastUpdatedAt:1675096946,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{id:"identity-attribute-changed",title:"Identity Attributes Changed",pagination_label:"Identity Attributes Changed",sidebar_label:"Identity Attributes Changed",sidebar_class_name:"identityAttributesChanged",keywords:["event","trigger","identity","attributes","changed","available"],description:"Fires after one or more identity attributes changed.",slug:"/docs/event-triggers/triggers/identity-attribute-changed",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Account Aggregation Completed",permalink:"/idn/docs/event-triggers/triggers/account-aggregation-completed"},next:{title:"Identity Created",permalink:"/idn/docs/event-triggers/triggers/identity-created"}},o={},g=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],l={toc:g};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"event-context"},"Event Context"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Flow",src:i(80318).Z,width:"1195",height:"237"})),(0,a.kt)("p",null,"Identity Attribute Changed events occur when any attributes aggegrated from an authoritative source differ from the current attributes for an identity during an identity refresh. See ",(0,a.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/t5/Connectors/Configuring-Correlation/ta-p/74045"},"Configuring Correlation")," for more information."),(0,a.kt)("p",null,"This event trigger provides a flexible way to extend Joiner-Mover-Leaver processes. This provides more proactive governance and ensures users can quickly get necessary access when they enter your organization."),(0,a.kt)("p",null,"Some uses cases for this trigger include the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Notify an administrator or system to take the appropriate provisioning actions as part of the Mover workflow."),(0,a.kt)("li",{parentName:"ul"},"Notify a system to trigger another action, like triggering a certification campaign when an identity's manager changes, for example.")),(0,a.kt)("p",null,"This is an example input from this trigger:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "identity": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "changes": [\n    {\n      "attribute": "department",\n      "oldValue": "sales",\n      "newValue": "marketing"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,a.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}c.isMDXComponent=!0},80318:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/trigger-path-a49a87df200b8fea737b95faf2eac61a.png"}}]);