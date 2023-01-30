"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[63489],{39966:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var s=a(87462),n=(a(67294),a(3905));const r={id:"va-cluster-status-change",title:"VA Cluster Status Change",pagination_label:"VA Cluster Status Change",sidebar_label:"VA Cluster Status Change",sidebar_class_name:"vaClusterStatusChange",keywords:["event","trigger","va","cluster","status","change","available"],description:"Fires after the status of a VA cluster has changed.",slug:"/docs/event-triggers/triggers/va-cluster-status-change",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},l=void 0,i={unversionedId:"docs/identity-now/event-triggers/available/va-cluster-status-change",id:"docs/identity-now/event-triggers/available/va-cluster-status-change",title:"VA Cluster Status Change",description:"Fires after the status of a VA cluster has changed.",source:"@site/products/idn/docs/identity-now/event-triggers/available/va-cluster-status-change.md",sourceDirName:"docs/identity-now/event-triggers/available",slug:"/docs/event-triggers/triggers/va-cluster-status-change",permalink:"/idn/docs/event-triggers/triggers/va-cluster-status-change",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/available/va-cluster-status-change.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/idn/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"Philip Ellis",lastUpdatedAt:1675096946,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{id:"va-cluster-status-change",title:"VA Cluster Status Change",pagination_label:"VA Cluster Status Change",sidebar_label:"VA Cluster Status Change",sidebar_class_name:"vaClusterStatusChange",keywords:["event","trigger","va","cluster","status","change","available"],description:"Fires after the status of a VA cluster has changed.",slug:"/docs/event-triggers/triggers/va-cluster-status-change",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Source Updated",permalink:"/idn/docs/event-triggers/triggers/source-updated"},next:{title:"Early Access Event Triggers",permalink:"/idn/docs/event-triggers/early-access"}},u={},o=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],g={toc:o};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"event-context"},"Event Context"),(0,n.kt)("p",null,"VA (Virtual Appliance) Cluster Status Change Events occur when a health check is run on a VA cluster and the health status is different from the previous health check. Customers can use this trigger to monitor all the health status changes of their VA clusters."),(0,n.kt)("p",null,"Some uses cases for this trigger include the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create real-time health dashboards for VA clusters."),(0,n.kt)("li",{parentName:"ul"},"Notify an administrator or system to take the appropriate actions when a health status changes.")),(0,n.kt)("p",null,"Additional notes about VA Cluster Status Changes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"VA cluster health checks run every 30 minutes."),(0,n.kt)("li",{parentName:"ul"},"This trigger will invoke on any VA cluster health status change (i.e. healthy -> unhealthy, unhealthy -> healthy)."),(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"https://community.sailpoint.com/t5/IdentityNow-Connectors/Virtual-Appliance-Troubleshooting-Guide/ta-p/78735"},"troubleshooting virtual appliances")," for more information.")),(0,n.kt)("p",null,"Healthy Cluster Source"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"VA cluster source healthy",src:a(63573).Z,width:"1732",height:"284"})),(0,n.kt)("p",null,"Unhealthy Cluster Source"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"VA cluster source unhealthy",src:a(71862).Z,width:"1735",height:"278"})),(0,n.kt)("p",null,"Warning - Unhealthy Cluster"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Warning unhealthy cluster",src:a(32663).Z,width:"1733",height:"80"})),(0,n.kt)("p",null,"Failed - Unhealthy Cluster"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Failed unhealthy cluster",src:a(65458).Z,width:"1733",height:"171"})),(0,n.kt)("p",null,"This is an example input from this trigger:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "created": "2020-06-29T22:01:50.474Z",\n  "type": "CLUSTER",\n  "application": {\n    "id": "2c9180866166b5b0016167c32ef31a66",\n    "name": "Production VA Cluster",\n    "attributes": null\n  },\n  "healthCheckResult": {\n    "message": "Test Connection failed with exception. Error message - java.lang Exception",\n    "resultType": "SOURCE_STATE_ERROR_CLUSTER",\n    "status": "Succeeded"\n  },\n  "previousHealthCheckResult": {\n    "message": "Test Connection failed with exception. Error message - java.lang Exception",\n    "resultType": "SOURCE_STATE_ERROR_CLUSTER",\n    "status": "Failed"\n  }\n}\n')),(0,n.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,n.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.sailpoint.com/apis/beta/#section/VA-Cluster-Status-Change-Event-Event-Trigger-Input"},"Input schema"))))}c.isMDXComponent=!0},65458:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/va-cluster-failed-1ad33e8a3010a710dc33dd59a60ce87d.png"},63573:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/va-cluster-healthy-source-06cde26711ac139fbb06f23f06346f44.png"},71862:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/va-cluster-unhealthy-source-2f17fe0a45d52e1d84560ff4949f8a8d.png"},32663:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/va-cluster-warning-52a694ddf6d82c82af39e843c073ee42.png"}}]);