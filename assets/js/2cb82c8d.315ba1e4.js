"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[46582],{39793:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=i(87462),o=(i(67294),i(3905));const a={id:"provisioning-action-completed",title:"Provisioning Action Completed",pagination_label:"Provisioning Action Completed",sidebar_label:"Provisioning Action Completed",sidebar_class_name:"provisioningActionCompleted",keywords:["event","trigger","provisioning","action","completed","available"],description:"Fires after a provisioning action completed on a source.",slug:"/docs/event-triggers/triggers/provisioning-action-completed",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},r=void 0,s={unversionedId:"docs/identity-now/event-triggers/available/provisioning-action-completed",id:"docs/identity-now/event-triggers/available/provisioning-action-completed",title:"Provisioning Action Completed",description:"Fires after a provisioning action completed on a source.",source:"@site/products/idn/docs/identity-now/event-triggers/available/provisioning-action-completed.md",sourceDirName:"docs/identity-now/event-triggers/available",slug:"/docs/event-triggers/triggers/provisioning-action-completed",permalink:"/idn/docs/event-triggers/triggers/provisioning-action-completed",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/available/provisioning-action-completed.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/idn/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"Philip Ellis",lastUpdatedAt:1675096946,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{id:"provisioning-action-completed",title:"Provisioning Action Completed",pagination_label:"Provisioning Action Completed",sidebar_label:"Provisioning Action Completed",sidebar_class_name:"provisioningActionCompleted",keywords:["event","trigger","provisioning","action","completed","available"],description:"Fires after a provisioning action completed on a source.",slug:"/docs/event-triggers/triggers/provisioning-action-completed",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Identity Created",permalink:"/idn/docs/event-triggers/triggers/identity-created"},next:{title:"Saved Search Complete",permalink:"/idn/docs/event-triggers/triggers/saved-search-completed"}},l={},c=[{value:"Event Context",id:"event-context",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Access Request",id:"access-request",level:3},{value:"Certification",id:"certification",level:3},{value:"Role Membership",id:"role-membership",level:3},{value:"Lifecycle Management",id:"lifecycle-management",level:3},{value:"Password Management",id:"password-management",level:3},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"event-context"},"Event Context"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flow",src:i(50051).Z,width:"721",height:"255"})),(0,o.kt)("p",null,"The Provisioning Action Completed event trigger notifies subscribed applications after the action is completed. This event trigger provides a flexible way to extend the Provisioning workflow after access has changed for an identity within SailPoint. This provides more proactive governance and ensures users can quickly get necessary access."),(0,o.kt)("p",null,"Some uses cases for this trigger include the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Notify the requester that the access request has been fulfilled."),(0,o.kt)("li",{parentName:"ul"},"Notify an application user and/or access certifier that access has been revoked."),(0,o.kt)("li",{parentName:"ul"},"Notify an administrator or system that provisioning has been completed."),(0,o.kt)("li",{parentName:"ul"},"Notify a third party system to trigger another action, like continuing additional provisioning actions or auditing of provisioning activities, for example.")),(0,o.kt)("p",null,"This is an example input from this trigger:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "trackingNumber": "4b4d982dddff4267ab12f0f1e72b5a6d",\n  "sources": "Corp AD, Corp LDAP, Corp Salesforce",\n  "action": "IdentityRefresh",\n  "errors": ["Connector AD Failed"],\n  "warnings": ["Notification Skipped due to invalid email"],\n  "recipient": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "requester": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "accountRequests": [\n    {\n      "source": {\n        "id": "4e4d982dddff4267ab12f0f1e72b5a6d",\n        "type": "SOURCE",\n        "name": "Corporate Active Directory"\n      },\n      "accountId": "CN=Chewy.Bacca,ou=hardcorefigter,ou=wookies,dc=starwars,dc=com",\n      "accountOperation": "Modify",\n      "provisioningResult": "SUCCESS",\n      "provisioningTarget": "Corp AD",\n      "ticketId": "72619262",\n      "attributeRequests": [\n        {\n          "attributeName": "memberOf",\n          "attributeValue": "CN=jedi,DC=starwars,DC=com",\n          "operation": "Add"\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before consuming this event trigger, the following prerequesites must be met:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An oAuth Client configured with authority as ",(0,o.kt)("inlineCode",{parentName:"li"},"ORG_ADMIN"),"."),(0,o.kt)("li",{parentName:"ul"},"An org enabled with the ",(0,o.kt)("inlineCode",{parentName:"li"},"ARSENAL_ALLOW_POSTPROVISIONING_TRIGGERS")," feature flag."),(0,o.kt)("li",{parentName:"ul"},"Configure connectors for provisioning into target applications."),(0,o.kt)("li",{parentName:"ul"},"An org configured for automated provisioning. See the Event Context section for specific setup.")),(0,o.kt)("p",null,"To provision to a target application, the connector for the source must support the following connector features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ENABLE")," - Can enable or disable accounts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UNLOCK")," - Can lock or unlock accounts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PROVISIONING")," - Can write to accounts. Currently, the trigger does not include attribute synchronization."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PASSWORD")," - Can update password for accounts.")),(0,o.kt)("p",null,"For a list of supported connectors and features, see ",(0,o.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/t5/Connectors/Supported-Sources-Connectors-for-IdentityNow/ta-p/80019"},"Supported Connectors for IdentityNow"),"."),(0,o.kt)("p",null,"For information about configuring sources for provisioning, see ",(0,o.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/t5/Connectors/How-can-I-edit-the-Create-Profile-on-a-source/ta-p/74429"},"How can I edit the Create Profile on a source?"),"."),(0,o.kt)("p",null,"Provisioning events occur in these workflows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#access-request"},"Access Request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#certification"},"Certification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#role-membership"},"Role Membership")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#lifecycle-management"},"Lifecycle Management")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#password-management"},"Password Management"))),(0,o.kt)("h3",{id:"access-request"},"Access Request"),(0,o.kt)("p",null,"When an Access Request approval process has completed with all positive approvals, the access request is fulfilled with provisioning to the target application with requested access."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flow",src:i(71875).Z,width:"1058",height:"234"})),(0,o.kt)("p",null,"Access acquired through a role request can also be revoked, and those changes can be provisioned to an account."),(0,o.kt)("p",null,"The following steps must be completed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Source Connector configured for ",(0,o.kt)("inlineCode",{parentName:"li"},"PROVISIONING"),". Access requests in SailPoint SaaS currently do not support ",(0,o.kt)("inlineCode",{parentName:"li"},"ACCOUNT_ONLY_REQUEST")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"ADDITIONAL_ACCOUNT_REQUEST"),"."),(0,o.kt)("li",{parentName:"ul"},"Source entitlements mapped in Account Schema."),(0,o.kt)("li",{parentName:"ul"},"Access profile using source entitlements. Role setup is optional."),(0,o.kt)("li",{parentName:"ul"},"Application enabled for Access Request.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," There is no indication to the approver in the IdentityNow UI that the approval is for a revoke action. This must be considered for all usage of these APIs.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flow",src:i(41203).Z,width:"834",height:"215"})),(0,o.kt)("h3",{id:"certification"},"Certification"),(0,o.kt)("p",null,"Provisioning removal of accounts acquired through Access Request occurs through certifications."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Certifications cannot revoke access acquired via role membership or lifecycle Changes.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flow",src:i(7919).Z,width:"1062",height:"213"})),(0,o.kt)("h3",{id:"role-membership"},"Role Membership"),(0,o.kt)("p",null,"Access defined in access profiles can be grouped into roles, and roles can be assigned to identities using ",(0,o.kt)("inlineCode",{parentName:"p"},"COMPLEX_CRITERION")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"IDENTITY_LIST"),". See ",(0,o.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/t5/Admin-Help/Standard-Role-Membership-Criteria-Options/ta-p/74392"},"Admin UI")," for information on how to set ",(0,o.kt)("inlineCode",{parentName:"p"},"COMPLEX_CRITERION"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"CUSTOM")," role membership through rules is no longer supported.")),(0,o.kt)("p",null,"Roles can also be mapped from an authoritative source."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flow",src:i(785).Z,width:"1060",height:"233"})),(0,o.kt)("h3",{id:"lifecycle-management"},"Lifecycle Management"),(0,o.kt)("p",null,"This trigger fires when an account has been provisioned, enabled, or disabled."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flow",src:i(43324).Z,width:"1082",height:"208"})),(0,o.kt)("p",null,"To provision access with lifecycle states, the prerequisites must be met:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Source connector configured for ",(0,o.kt)("inlineCode",{parentName:"li"},"ENABLE")," to enable/disable accounts and/or ",(0,o.kt)("inlineCode",{parentName:"li"},"PROVISIONING")," to create/update/delete accounts."),(0,o.kt)("li",{parentName:"ul"},"Source entitlements mapped from an authoritative source."),(0,o.kt)("li",{parentName:"ul"},"Source entitlements mapped to access profiles."),(0,o.kt)("li",{parentName:"ul"},"Identity profile using an authoritative source."),(0,o.kt)("li",{parentName:"ul"},"Lifecycle states configured. To set them up, follow this ","[guide]",".")),(0,o.kt)("h3",{id:"password-management"},"Password Management"),(0,o.kt)("p",null,"Password changes can be provisioned to target applications through password reset or password interception. Also, unlocking of accounts can be provisioned via password change within SailPoint SaaS."),(0,o.kt)("p",null,"For password management setup, you must configure the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Source connector configured for ",(0,o.kt)("inlineCode",{parentName:"li"},"PASSWORD")," for password changes and/or ",(0,o.kt)("inlineCode",{parentName:"li"},"UNLOCK")," for unlocking changes."),(0,o.kt)("li",{parentName:"ul"},"Password sync group")),(0,o.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,o.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}d.isMDXComponent=!0},41203:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/provisioning-access-request-2-63c142eeabf475de11931df3c4a1b3f0.png"},7919:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/provisioning-access-request-certification-800d859d967b0b82327132d5f3d18318.png"},71875:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/provisioning-access-request-378caa66780b3481447337b329fe2af5.png"},50051:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/provisioning-action-e557c26a6ce76486985701a999697b8c.png"},43324:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/provisioning-lifecycle-management-147b9d7ec1b080ae20b6b9891bef7da8.png"},785:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/provisioning-role-membership-d6448a84dc81db9c527a8b1dffd4b0ea.png"}}]);