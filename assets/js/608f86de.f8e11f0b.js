"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[6028],{56544:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=i(87462),a=(i(67294),i(3905)),r=i(52991),s=i(53438);const o={id:"identities",title:"Identities",description:"Identities",custom_edit_url:null},c=void 0,l={unversionedId:"api/beta/identities",id:"api/beta/identities",title:"Identities",description:"Identities",source:"@site/products/idn/api/beta/identities.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/identities",permalink:"/idn/api/beta/identities",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"identities",title:"Identities",description:"Identities",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Retrieves excluded entitlements for a potential role in a role mining session",permalink:"/idn/api/beta/get-excluded-entitlements-potential-role"},next:{title:"Attribute synchronization for single identity.",permalink:"/idn/api/beta/synchronize-attributes-for-identity"}},d={},u=[],m={toc:u};function h(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use this API to implement identity functionality.\nWith this functionality in place, administrators can synchronize an identity's attributes with its various source attributes. "),(0,a.kt)("p",null,"IdentityNow uses identities as users' authoritative accounts. Identities can own other accounts, entitlements, and attributes. "),(0,a.kt)("p",null,"An identity has a variety of attributes, such as an account name, an email address, a job title, and more.\nThese identity attributes can be correlated with different attributes on different sources.\nFor example, the identity John.Smith can own an account in the GitHub source with the account name John-Smith-Org, and IdentityNow knows they are the same person with the same access and attributes. "),(0,a.kt)("p",null,"In IdentityNow, administrators often set up these synchronizations to get triggered automatically with a change or to run on a schedule.\nTo manually synchronize attributes for an identity, administrators can use the Identities drop-down menu and select Identity List to view the list of identities.\nThey can then select the identity they want to manually synchronize and use the hamburger menu to select 'Synchronize Attributes.'\nDoing so immediately begins the attribute synchronization and analyzes all accounts for the selected identity."),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/provisioning/attr_sync.html"},"Synchronizing Attributes")," for more information about synchronizing attributes."),(0,a.kt)(r.Z,{items:(0,s.jA)().items,mdxType:"DocCardList"}))}h.isMDXComponent=!0},52991:(t,e,i)=>{i.d(e,{Z:()=>g});var n=i(67294),a=i(86010),r=i(53438),s=i(39960),o=i(13919),c=i(95999);const l="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function m(t){let{href:e,children:i}=t;return n.createElement(s.Z,{href:e,className:(0,a.Z)("card padding--lg",l)},i)}function h(t){let{href:e,icon:i,title:r,description:s}=t;return n.createElement(m,{href:e},n.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:r},i," ",r),s&&n.createElement("p",{className:(0,a.Z)("text--truncate",u),title:s},s))}function p(t){let{item:e}=t;const i=(0,r.Wl)(e);return i?n.createElement(h,{href:i,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function y(t){let{item:e}=t;const i=(0,o.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.xz)(e.docId??void 0);return n.createElement(h,{href:e.href,icon:i,title:e.label,description:a?.description})}function f(t){let{item:e}=t;switch(e.type){case"link":return n.createElement(y,{item:e});case"category":return n.createElement(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function b(t){let{className:e}=t;const i=(0,r.jA)();return n.createElement(g,{items:i.items,className:e})}function g(t){const{items:e,className:i}=t;if(!e)return n.createElement(b,t);const s=(0,r.MN)(e);return n.createElement("section",{className:(0,a.Z)("row",i)},s.map(((t,e)=>n.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:t})))))}}}]);