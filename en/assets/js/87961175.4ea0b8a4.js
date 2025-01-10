"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[4567],{8888:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=n(4848),s=n(8453);const i={slug:"amazon-console-to-code",title:"New Console-to-Code Service for Amazon AWS",authors:["pkmita"],tags:["amazon aws","amazon","ai","aws","cli","code"]},r=void 0,a={permalink:"/en/blog/amazon-console-to-code",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-10-13-consoletocode/index.mdx",source:"@site/i18n/en/docusaurus-plugin-content-blog/2024-10-13-consoletocode/index.mdx",title:"New Console-to-Code Service for Amazon AWS",description:"AWS has introduced the Console-to-Code service, which allows users to easily convert actions performed in the AWS console into code, greatly simplifying the process of automation and application deployment. Here\u2019s how the service works and how you can use it.",date:"2024-10-13T00:00:00.000Z",tags:[{inline:!0,label:"amazon aws",permalink:"/en/blog/tags/amazon-aws"},{inline:!0,label:"amazon",permalink:"/en/blog/tags/amazon"},{inline:!0,label:"ai",permalink:"/en/blog/tags/ai"},{inline:!0,label:"aws",permalink:"/en/blog/tags/aws"},{inline:!0,label:"cli",permalink:"/en/blog/tags/cli"},{inline:!0,label:"code",permalink:"/en/blog/tags/code"}],readingTime:2.035,hasTruncateMarker:!0,authors:[{name:"Piotr Kmita",title:"Maintainer of site",url:"https://github.com/timon2013/",imageURL:"https://github.com/timon2013.png",key:"pkmita",page:null}],frontMatter:{slug:"amazon-console-to-code",title:"New Console-to-Code Service for Amazon AWS",authors:["pkmita"],tags:["amazon aws","amazon","ai","aws","cli","code"]},unlisted:!1,nextItem:{title:"Amazon Q Developer Code Challenge",permalink:"/en/blog/amazon-q-developer-code-challenge"}},l={authorsImageUrls:[void 0]},c=[{value:"How Does Console-to-Code Work?",id:"how-does-console-to-code-work",level:2},{value:"How to Use Console-to-Code?",id:"how-to-use-console-to-code",level:2},{value:"Step-by-Step:",id:"step-by-step",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Summary",id:"summary",level:2}];function d(e){const o={a:"a",br:"br",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["AWS has introduced the ",(0,t.jsx)(o.strong,{children:"Console-to-Code"})," service, which allows users to easily convert actions performed in the AWS console into code, greatly simplifying the process of automation and application deployment. Here\u2019s how the service works and how you can use it."]}),"\n",(0,t.jsx)(o.h2,{id:"how-does-console-to-code-work",children:"How Does Console-to-Code Work?"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Action Recording"}),": Console-to-Code automatically records all user actions in the AWS console, such as creating EC2 instances or configuring VPCs. The user performs standard operations in the console, and the system logs these actions."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Code Generation"}),": Once the actions are completed, the user can go to the Console-to-Code panel and select specific actions to convert into code. The service generates code in the preferred format, such as:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"AWS CloudFormation"})," (JSON or YAML)"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"AWS CDK"})," (Java, Python, TypeScript)"]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:'However, you need to enable recording first by clicking "Start recording".'}),(0,t.jsx)(o.br,{}),"\n","Below is an example of what it looks like when using the EC2 service:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsxs)(o.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(8436).A+"",children:[" ",(0,t.jsx)(o.img,{alt:"alt text",src:n(7820).A+"",width:"3795",height:"1325"})," "]})}),"\n",(0,t.jsxs)(o.ol,{start:"3",children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:"Code Customization"}),": The generated code can serve as a starting point for further customization to meet specific production needs. Users are encouraged to test and verify the generated code before deployment."]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"how-to-use-console-to-code",children:"How to Use Console-to-Code?"}),"\n",(0,t.jsx)(o.h3,{id:"step-by-step",children:"Step-by-Step:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Log in to the AWS console"}),": Make sure you're in the ",(0,t.jsx)(o.strong,{children:"US East (N. Virginia)"})," region, as this is a fairly new service and may not be available in all regions."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Open the Console-to-Code Panel"}),': Start the recording process by clicking "Start recording". You can find Console-to-Code in the top right corner.']}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Select the EC2 Service"}),": Begin the process, for example, by launching an EC2 instance."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Choose Actions to Convert"}),": Select the actions you want to include in the generated code (up to 5 actions at a time)."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Generate Code"}),": Click the generate code button and choose the preferred format."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Download or Copy Code"}),": After the code is generated, you can either copy or download it for further editing."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"The service is currently available only for actions related to Amazon EC2, Amazon VPC, and Amazon RDS."}),"\n",(0,t.jsx)(o.li,{children:"The ability to record actions is limited to five actions per session."}),"\n",(0,t.jsx)(o.li,{children:"The generated code requires further customization before being used in production."}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(o.p,{children:"AWS Console-to-Code is an innovative tool that combines the ease of using the console with the power of Infrastructure-as-Code (IaC). It allows users to easily transition from prototyping to production, making it a valuable addition for developers and DevOps engineers."})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8436:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/files/ConsoleToCode-63aa130b3160cd5a3e9da38d770364c8.png"},7820:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/ConsoleToCode-63aa130b3160cd5a3e9da38d770364c8.png"},8453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>a});var t=n(6540);const s={},i=t.createContext(s);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);