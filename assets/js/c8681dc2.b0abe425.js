"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[8826],{23069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>h,toc:()=>y});var i=a(87462),s=(a(67294),a(3905)),o=a(26389),n=a(94891),r=(a(75190),a(47507)),l=a(24310),c=a(63303),d=(a(75035),a(85162));const p={id:"get-password-dictionary-file-status",sidebar_label:"Get Password Dictionary Status",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getPasswordDictionaryFileStatus",tags:["Password Dictionary"],description:"Used to check the status of password dictionary.\nA token with ORG_ADMIN authority is required to call this API.",responses:{200:{description:"Password dictionary exists"},404:{description:"Password dictionary does not exist"},500:{description:"Internal Server Error - Returned if there is an unexpected error.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{500:{summary:"An example of a 500 response object",value:{detailCode:"500.0 Internal Fault",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"An internal fault occurred."}]}}}}}}},method:"head",path:"/password-dictionary",servers:[{url:"https://{tenant}.api.identitynow.com/beta",description:"This is the beta API server.",variables:{tenant:{default:"sailpoint",description:"This is the name of your tenant, typically your company's name."}}}],security:[{oauth2:[]}],securitySchemes:{oauth2:{type:"oauth2",description:"OAuth2 Bearer token (JWT). See [IdentityNow REST API Authentication](https://developer.sailpoint.com/idn/api/authentication) for more information.\n- Directions for generating a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens)\n- Directions using [client credentials flow](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow)\n- Directions for using [authorization code flow](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow)\n\nWhich authentication method should I choose?  See our [guide](https://developer.sailpoint.com/idn/api/authentication#which-oauth-20-grant-flow-should-i-use)\n\nLearn more about how to find your `tokenUrl` and `authorizationUrl` [in our docs](https://developer.sailpoint.com/idn/api/authentication#find-your-tenants-oauth-details)\n",flows:{clientCredentials:{tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}},authorizationCode:{authorizationUrl:"https://tenant.identitynow.com/oauth/authorize",tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}}}}},info:{title:"IdentityNow Beta API",description:"Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. These APIs are in beta and are subject to change. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",termsOfService:"https://developer.sailpoint.com/discuss/tos",contact:{name:"Developer Relations",url:"https://developer.sailpoint.com/discuss/api-help"},license:{name:"MIT",url:"https://opensource.org/licenses/MIT"},version:"3.1.0-beta"},postman:{name:"Get Password Dictionary Status",description:{content:"Used to check the status of password dictionary.\nA token with ORG_ADMIN authority is required to call this API.",type:"text/plain"},url:{path:["password-dictionary"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"HEAD"}},sidebar_class_name:"head api-method",info_path:"idn/api/beta/identitynow-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get Password Dictionary Status' (get-password-dictionary-file-status)"},u=void 0,h={unversionedId:"api/beta/get-password-dictionary-file-status",id:"api/beta/get-password-dictionary-file-status",title:"get-password-dictionary-file-status",description:"Get Password Dictionary Status",source:"@site/products/idn/api/beta/get-password-dictionary-file-status.api.mdx",sourceDirName:"api/beta",slug:"/api/beta/get-password-dictionary-file-status",permalink:"/idn/api/beta/get-password-dictionary-file-status",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get Password Dictionary Status' (get-password-dictionary-file-status)",tags:[],version:"current",frontMatter:{id:"get-password-dictionary-file-status",sidebar_label:"Get Password Dictionary Status",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getPasswordDictionaryFileStatus",tags:["Password Dictionary"],description:"Used to check the status of password dictionary.\nA token with ORG_ADMIN authority is required to call this API.",responses:{200:{description:"Password dictionary exists"},404:{description:"Password dictionary does not exist"},500:{description:"Internal Server Error - Returned if there is an unexpected error.",content:{"application/json":{schema:{type:"object",properties:{detailCode:{type:"string",description:"Fine-grained error code providing more detail of the error.",example:"400.1 Bad Request Content"},trackingId:{type:"string",description:"Unique tracking id for the error.",example:"e7eab60924f64aa284175b9fa3309599"},messages:{type:"array",description:"Generic localized reason for error",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}},causes:{type:"array",description:"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field",items:{type:"object",properties:{locale:{type:"string",description:"The locale for the message text, a BCP 47 language tag.",example:"en-US"},localeOrigin:{type:"string",enum:["DEFAULT","REQUEST"],description:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",example:"DEFAULT"},text:{type:"string",description:"Actual text of the error message in the indicated locale.",example:"The request was syntactically correct but its content is semantically invalid."}}}}}},examples:{500:{summary:"An example of a 500 response object",value:{detailCode:"500.0 Internal Fault",trackingId:"b21b1f7ce4da4d639f2c62a57171b427",messages:[{locale:"en-US",localeOrigin:"DEFAULT",text:"An internal fault occurred."}]}}}}}}},method:"head",path:"/password-dictionary",servers:[{url:"https://{tenant}.api.identitynow.com/beta",description:"This is the beta API server.",variables:{tenant:{default:"sailpoint",description:"This is the name of your tenant, typically your company's name."}}}],security:[{oauth2:[]}],securitySchemes:{oauth2:{type:"oauth2",description:"OAuth2 Bearer token (JWT). See [IdentityNow REST API Authentication](https://developer.sailpoint.com/idn/api/authentication) for more information.\n- Directions for generating a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens)\n- Directions using [client credentials flow](https://developer.sailpoint.com/idn/api/authentication#client-credentials-grant-flow)\n- Directions for using [authorization code flow](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow)\n\nWhich authentication method should I choose?  See our [guide](https://developer.sailpoint.com/idn/api/authentication#which-oauth-20-grant-flow-should-i-use)\n\nLearn more about how to find your `tokenUrl` and `authorizationUrl` [in our docs](https://developer.sailpoint.com/idn/api/authentication#find-your-tenants-oauth-details)\n",flows:{clientCredentials:{tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}},authorizationCode:{authorizationUrl:"https://tenant.identitynow.com/oauth/authorize",tokenUrl:"https://tenant.api.identitynow.com/oauth/token",scopes:{"sp:scopes:default":"default scope","sp:scopes:all":"access to all scopes"}}}}},info:{title:"IdentityNow Beta API",description:"Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. These APIs are in beta and are subject to change. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",termsOfService:"https://developer.sailpoint.com/discuss/tos",contact:{name:"Developer Relations",url:"https://developer.sailpoint.com/discuss/api-help"},license:{name:"MIT",url:"https://opensource.org/licenses/MIT"},version:"3.1.0-beta"},postman:{name:"Get Password Dictionary Status",description:{content:"Used to check the status of password dictionary.\nA token with ORG_ADMIN authority is required to call this API.",type:"text/plain"},url:{path:["password-dictionary"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"HEAD"}},sidebar_class_name:"head api-method",info_path:"idn/api/beta/identitynow-beta-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get Password Dictionary Status' (get-password-dictionary-file-status)"},sidebar:"openApiSidebar",previous:{title:"Get Password Dictionary",permalink:"/idn/api/beta/get-password-dictionary"},next:{title:"Update Password Dictionary",permalink:"/idn/api/beta/update-password-dictionary"}},m={},y=[{value:"Get Password Dictionary Status",id:"get-password-dictionary-status",level:2}],g={toc:y};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-password-dictionary-status"},"Get Password Dictionary Status"),(0,s.kt)("p",null,"Used to check the status of password dictionary.\nA token with ORG_ADMIN authority is required to call this API."),(0,s.kt)("div",null,(0,s.kt)(o.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Password dictionary exists")),(0,s.kt)("div",null)),(0,s.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Password dictionary does not exist")),(0,s.kt)("div",null)),(0,s.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error - Returned if there is an unexpected error.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"detailCode",required:!1,deprecated:void 0,schemaDescription:"Fine-grained error code providing more detail of the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"trackingId",required:!1,deprecated:void 0,schemaDescription:"Unique tracking id for the error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"messages"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Generic localized reason for error")),(0,s.kt)(l.Z,{collapsible:!1,name:"locale",required:!1,deprecated:void 0,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"localeOrigin",required:!1,deprecated:void 0,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"causes"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Plain-text descriptive reasons to provide additional detail to the text provided in the messages field")),(0,s.kt)(l.Z,{collapsible:!1,name:"locale",required:!1,deprecated:void 0,schemaDescription:"The locale for the message text, a BCP 47 language tag.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"localeOrigin",required:!1,deprecated:void 0,schemaDescription:"An indicator of how the locale was selected. *DEFAULT* means the locale is the system default. *REQUEST* means the locale was selected from the request context (i.e., best match based on the *Accept-Language* header). Additional values may be added in the future without notice.",schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `REQUEST`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:"Actual text of the error message in the indicated locale.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "detailCode": "400.1 Bad Request Content",\n  "trackingId": "e7eab60924f64aa284175b9fa3309599",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ],\n  "causes": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "The request was syntactically correct but its content is semantically invalid."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("p",null," An example of a 500 response object"),(0,s.kt)(r.Z,{responseExample:'{\n  "detailCode": "500.0 Internal Fault",\n  "trackingId": "b21b1f7ce4da4d639f2c62a57171b427",\n  "messages": [\n    {\n      "locale": "en-US",\n      "localeOrigin": "DEFAULT",\n      "text": "An internal fault occurred."\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);