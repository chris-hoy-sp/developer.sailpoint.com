"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[78055],{6100:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>r,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),c=(n(67294),n(3905));const o={id:"account-enable",title:"Account Enable",pagination_label:"Account Enable",sidebar_label:"Account Enable",keywords:["connectivity","connectors","account enable"],description:"Enable an account on the source.",slug:"/docs/saas-connectivity/commands/account-enable",tags:["Connectivity","Connector Command"]},i=void 0,l={unversionedId:"docs/identity-now/saas-connectivity/connector-commands/account-enable",id:"docs/identity-now/saas-connectivity/connector-commands/account-enable",title:"Account Enable",description:"Enable an account on the source.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-commands/account-enable.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-commands",slug:"/docs/saas-connectivity/commands/account-enable",permalink:"/idn/docs/saas-connectivity/commands/account-enable",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-commands/account-enable.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Command",permalink:"/idn/tags/connector-command"}],version:"current",lastUpdatedBy:"Philip Ellis",lastUpdatedAt:1675096946,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{id:"account-enable",title:"Account Enable",pagination_label:"Account Enable",sidebar_label:"Account Enable",keywords:["connectivity","connectors","account enable"],description:"Enable an account on the source.",slug:"/docs/saas-connectivity/commands/account-enable",tags:["Connectivity","Connector Command"]},sidebar:"idnDocs",previous:{title:"Account Discover",permalink:"/idn/docs/saas-connectivity/commands/account-discover"},next:{title:"Account List",permalink:"/idn/docs/saas-connectivity/commands/account-list"}},s={},u=[{value:"Example StdAccountEnableInput/StdAccountDisableInput",id:"example-stdaccountenableinputstdaccountdisableinput",level:3},{value:"Example StdAccountEnableOutput/StdAccountDisableOutput",id:"example-stdaccountenableoutputstdaccountdisableoutput",level:3},{value:"Description",id:"description",level:2}],d={toc:u};function r(t){let{components:e,...n}=t;return(0,c.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,c.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},"Input - Enable"),(0,c.kt)("td",{parentName:"tr",align:"center"},"StdAccountEnableInput")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},"Output - Enable"),(0,c.kt)("td",{parentName:"tr",align:"center"},"StdAccountEnableOutput")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},"Input - Disable"),(0,c.kt)("td",{parentName:"tr",align:"center"},"StdAccountDisableInput")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:"left"},"Output -Disable"),(0,c.kt)("td",{parentName:"tr",align:"center"},"StdAccountDisableOutput")))),(0,c.kt)("h3",{id:"example-stdaccountenableinputstdaccountdisableinput"},"Example StdAccountEnableInput/StdAccountDisableInput"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},'"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n}\n')),(0,c.kt)("h3",{id:"example-stdaccountenableoutputstdaccountdisableoutput"},"Example StdAccountEnableOutput/StdAccountDisableOutput"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n')),(0,c.kt)("h2",{id:"description"},"Description"),(0,c.kt)("p",null,"You typically invoke the account enable and account disable commands during the joiner, mover, leaver (JML) lifecycle. An identity\u2019s leaving from the organization or change to a role that does not require access to one or more accounts triggers the account disable command. An identity\u2019s rejoining the organization or move to a role that grants access to a previously disabled account triggers the account enable command."),(0,c.kt)("p",null,"Disabling accounts is generally preferred if the source supports account disabling so the account data remains for later reactivation or inspection. If the source does not support account disabling or deleting accounts is preferred when an identity leaves the organization, the connector performs the necessary steps to delete an account with the account disable function."),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"\ud83d\udea7 It is important to note that although SaaS Connectivity supports the account delete command, IDN never sends the account delete command, only the account enable command. The connector\u2019s developer determines the appropriate action for account disable on the source.")),(0,c.kt)("p",null,"Account enable/disable is similar to implementing the account update command. If you have implemented your source call to modify any of the values on your source, then you can use the same method to implement the command. The following code implements enable and disable:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},".stdAccountDisable(async (context: Context, input: StdAccountDisableInput, res: Response<StdAccountDisableOutput>) => {\n    let account = await airtable.getAccount(input.key)\n    const change: AttributeChange = {\n        op: AttributeChangeOp.Set,\n        attribute: 'enabled',\n        value: 'false'\n    }\n    account = await airtable.changeAccount(account, change)\n    res.send(account.toStdAccountDisableOutput())\n})\n\n.stdAccountEnable(async (context: Context, input: StdAccountEnableInput, res: Response<StdAccountEnableOutput>) => {\n    let account = await airtable.getAccount(input.key)\n    const change: AttributeChange = {\n        op: AttributeChangeOp.Set,\n        attribute: 'enabled',\n        value: 'true'\n    }\n    account = await airtable.changeAccount(account, change)\n    res.send(account.toStdAccountEnableOutput())\n})\n")))}r.isMDXComponent=!0}}]);