"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[86404],{80781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var o=r(87462),i=(r(67294),r(3905)),a=r(52991),n=r(53438);const s={id:"workflows",title:"Workflows",description:"Workflows",custom_edit_url:null},l=void 0,c={unversionedId:"api/beta/workflows",id:"api/beta/workflows",title:"Workflows",description:"Workflows",source:"@site/products/idn/api/beta/workflows.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/workflows",permalink:"/idn/api/beta/workflows",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"workflows",title:"Workflows",description:"Workflows",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Submit Account Selections",permalink:"/idn/api/beta/submit-account-selection"},next:{title:"Create Workflow",permalink:"/idn/api/beta/create-workflow"}},d={},m=[],p={toc:m};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Workflows allow administrators to create custom automation scripts directly within IdentityNow.  These automation scripts respond to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/docs/event-triggers#how-to-get-started-with-event-triggers"},"event triggers")," and perform a series of actions to perform tasks that are either too cumbersome or not available in the IdentityNow UI.  Workflows can be configured via a graphical user interface within IdentityNow, or by creating and uploading a JSON formatted script to the Workflow service.  The Workflows API collection provides the necessary functionality to create, manage, and test your workflows via REST."),(0,i.kt)("p",null,"Workflows is currently in Beta, and is not generally available to all customer tenants.  If you would like to participate in the beta program, please ",(0,i.kt)("a",{parentName:"p",href:"https://app.smartsheet.com/b/form/e758ab109dc649589f57b4b5c41d4373"},"submit an application"),".  You must be a customer or partner to participate."),(0,i.kt)("p",null,"Refer to ","[Creating and Managing Workflows]"," for more information about how to build workflows in the visual builder in the IdentityNow UI."),(0,i.kt)(a.Z,{items:(0,n.jA)().items,mdxType:"DocCardList"}))}u.isMDXComponent=!0},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var o=r(67294),i=r(86010),a=r(53438),n=r(39960),s=r(13919),l=r(95999);const c="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return o.createElement(n.Z,{href:t,className:(0,i.Z)("card padding--lg",c)},r)}function u(e){let{href:t,icon:r,title:a,description:n}=e;return o.createElement(p,{href:t},o.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:a},r," ",a),n&&o.createElement("p",{className:(0,i.Z)("text--truncate",m),title:n},n))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?o.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function w(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return o.createElement(u,{href:t.href,icon:r,title:t.label,description:i?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(w,{item:t});case"category":return o.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,a.jA)();return o.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return o.createElement(h,e);const n=(0,a.MN)(t);return o.createElement("section",{className:(0,i.Z)("row",r)},n.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(k,{item:e})))))}}}]);