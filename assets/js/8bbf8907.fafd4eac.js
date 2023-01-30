"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[24791],{9709:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={id:"account-attribute",title:"Account Attribute",pagination_label:"Account Attribute",sidebar_label:"Account Attribute",sidebar_class_name:"accountAttribute",keywords:["transforms","operations","account","attribute"],description:"Look up an account for a particular source on an identity.",slug:"/docs/transforms/operations/account-attribute",tags:["Transforms","Transform Operations"]},o=void 0,s={unversionedId:"docs/identity-now/transforms/operations/account-attribute",id:"docs/identity-now/transforms/operations/account-attribute",title:"Account Attribute",description:"Look up an account for a particular source on an identity.",source:"@site/products/idn/docs/identity-now/transforms/operations/account-attribute.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/account-attribute",permalink:"/idn/docs/transforms/operations/account-attribute",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/account-attribute.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"Philip Ellis",lastUpdatedAt:1675096946,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{id:"account-attribute",title:"Account Attribute",pagination_label:"Account Attribute",sidebar_label:"Account Attribute",sidebar_class_name:"accountAttribute",keywords:["transforms","operations","account","attribute"],description:"Look up an account for a particular source on an identity.",slug:"/docs/transforms/operations/account-attribute",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Operations",permalink:"/idn/docs/transforms/operations"},next:{title:"Base64 Decode",permalink:"/idn/docs/transforms/operations/base64-decode"}},u={},l=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],c={toc:l};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Use the account attribute transform to look up an account for a particular source on an identity and return a specific attribute value from that account."),(0,r.kt)("admonition",{title:"Other Considerations",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If there are multiple accounts, then IdentityNow by default takes the value from the oldest account (based on the account created date). You can configure this behavior by specifying ",(0,r.kt)("inlineCode",{parentName:"li"},"accountSortAttribute")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"accountSortDescending")," attributes."),(0,r.kt)("li",{parentName:"ul"},"If there are multiple accounts and the oldest account has a null attribute value, by default IdentityNow moves to the next account that can have a value (if there are any). You can override this behavior with the ",(0,r.kt)("inlineCode",{parentName:"li"},"accountReturnFirstLink")," property."),(0,r.kt)("li",{parentName:"ul"},'You can filter the multiple accounts returned based on the data they contain so that you can target specific accounts. This is often used to target accounts that are "active" instead of those that are not.'))),(0,r.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,r.kt)("p",null,"The account attribute transform's configuration can take several attributes as inputs. The following example shows a fully configured transform with all required and optional attributes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "sourceName": "Workday",\n    "attributeName": "DEPARTMENT",\n    "accountSortAttribute": "created",\n    "accountSortDescending": true,\n    "accountReturnFirstLink": true,\n    "accountPropertyFilter": "(DEPARTMENT == \\"Engineering\\")",\n    "accountFilter": "!(nativeIdentity.startsWith(\\"*DELETED*\\"))"\n  },\n  "type": "accountAttribute",\n  "name": "Account Attribute Transform"\n}\n')),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Required Attributes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"accountAttribute"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sourceName")," - This is a reference to the source to search for accounts.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is a reference by a source's display name attribute (e.g., Active Directory). If the display name is updated, this reference must also be updated."),(0,r.kt)("li",{parentName:"ul"},"As an alternative, you can provide an ",(0,r.kt)("inlineCode",{parentName:"li"},"applicationId")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"applicationName")," instead.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"applicationId"),' - This is a reference by a source\'s external GUID/ID attribute (e.g., "ff8081815a8b3925015a8b6adac901ff").'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"applicationName")," - This is a reference by a source's immutable name attribute (e.g., \"Active Directory ","[","source","]",'").'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"attributeName")," - The name of the attribute on the account to return. This matches the name of the account attribute name visible in the user interface or on the source schema."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Optional Attributes"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This is a ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," value indicating whether the transform logic must be reevaluated every evening as part of the identity refresh process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"accountSortAttribute")," - This configuration's value is a string name of the attribute to use when determining the ordering of returned accounts when there are multiple entries.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Accounts can be sorted by any schema attribute."),(0,r.kt)("li",{parentName:"ul"},'If no sort attribute is defined, the transform will default to "created" (ascending sort on created date - oldest object wins).'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"accountSortDescending")," - This configuration's value is a boolean (true/false). It controls the sort order when there are multiple accounts.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If not defined, the transform will default to false (ascending order)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"accountReturnFirstLink")," - This configuration's value is a boolean (true/false). It controls which account to source a value from for an attribute. If this flag is set to true, the transform returns the value from the first account in the list, even if it is null. If this flag is set to false, the transform returns the first non-null value.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the configuration's value is not defined, the transform will default to the false setting."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"accountFilter")," - This expression queries the database to narrow search results. This configuration's value is a ",(0,r.kt)("inlineCode",{parentName:"li"},"sailpoint.object.Filter")," expression for searching against the database. The default filter always includes the source and identity, and any subsequent expressions are combined in an AND operation with the existing search criteria.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Only certain searchable attributes are available:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nativeIdentity")," - This is the account ID."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"displayName")," - This is the account name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entitlements")," - This boolean value determine whether the account has entitlements."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"accountPropertyFilter")," - Use this expression to search and filter accounts in memory. This configuration's value is a ",(0,r.kt)("inlineCode",{parentName:"li"},"sailpoint.object.Filter")," expression for searching against the returned resultset.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All account attributes are available for filtering because this operation is performed in memory."),(0,r.kt)("li",{parentName:"ul"},"Examples:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'(status != "terminated")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'(department == "Engineering")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'(groups.containsAll({"Admin"}) || location == "Austin")')))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"HR systems can have multiple HR records for a person, especially in rehire and conversion scenarios. In order to get the correct identity data, you must get data from only the latest active accounts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"sourceName"),' is "Corporate HR" because that is the name of the authoritative source.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"attributeName"),' is "HIREDATE" because that is the attribute you want from the authoritative source.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"accountSortAttribute"),' is "created" because you want to sort on created dates in case there are multiple accounts.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"accountSortDescending")," is true because you want to sort based on the newest or latest account from the HR system.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"accountReturnFirstLink")," is true because you want to return the value of HIREDATE, event if it is null.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"accountPropertyFilter")," is filtering the accounts to look at only active accounts. Terminated accounts will not appear (assuming there are no data issues)."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You cannot use ",(0,r.kt)("inlineCode",{parentName:"p"},"accountFilter")," here because WORKER_STATUS","_","_","c is not a searchable attribute, but ",(0,r.kt)("inlineCode",{parentName:"p"},"accountPropertyFilter")," works instead.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "attributeName": "HIREDATE",\n    "sourceName": "Corporate HR",\n    "accountSortAttribute": "created",\n    "accountSortDescending": true,\n    "accountReturnFirstLink": true,\n    "accountPropertyFilter": "(WORKER_STATUS__c == \\"active\\")"\n  },\n  "type": "accountAttribute",\n  "name": "Account Attribute Transform"\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,"When you are mapping values like a username, focus on primary accounts from a particular source or accounts that are not service accounts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sourceName"),' is "Active Directory" because that is the source this data is coming from.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attributeName"),' is "sAMAccountName" because you are mapping the username of the user.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accountFilter")," is an expression filtering the accounts to make sure they are not service accounts.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"accountPropertyFilter")," also would have worked here.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "attributeName": "sAMAccountName",\n    "sourceName": "Active Directory",\n    "accountFilter": "!(displayName.startsWith(\\"SVC-\\"))"\n  },\n  "type": "accountAttribute",\n  "name": "Account Attribute Transform"\n}\n')))}p.isMDXComponent=!0}}]);