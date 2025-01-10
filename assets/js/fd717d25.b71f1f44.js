"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[2963],{4690:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"SystemManager/conclusion","title":"Wnioski","description":"In this template we can:","source":"@site/docs/SystemManager/05-conclusion.md","sourceDirName":"SystemManager","slug":"/SystemManager/conclusion","permalink":"/docs/SystemManager/conclusion","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SystemManager/05-conclusion.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Serwery w sieci prywatnej bez dost\u0119pu publicznego. Czy potrzebujemy Bastion Host?","permalink":"/docs/SystemManager/Servers on a private network without public access"},"next":{"title":"Gotowy stack w Cloud Formation do uruchomienia \u015brodowiska z Session Manager.","permalink":"/docs/SystemManager/Example Cloud Formation"}}');var s=n(4848),r=n(8453);const c={},i="Wnioski",l={},o=[{value:"Creat stack",id:"creat-stack",level:2},{value:"Update stack",id:"update-stack",level:2},{value:"Delete stack",id:"delete-stack",level:2}];function d(e){const a={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"wnioski",children:"Wnioski"})}),"\n",(0,s.jsx)(a.h1,{id:"cloudformation-template",children:"CloudFormation template"}),"\n",(0,s.jsx)(a.p,{children:"In this template we can:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"apply a public or private solution"}),"\n",(0,s.jsx)(a.li,{children:"update SSM Session Manager Preferences with Lambda or EC2."}),"\n",(0,s.jsx)(a.li,{children:"automatically clean the S3 bucket before removing the stack"}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"creat-stack",children:"Creat stack"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Basic without changes for SSM Session Manager preferences, without logging and encryption and with public access:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"aws cloudformation create-stack --stack-name exampleEC2SSMSessionManager --template-body file://EC2SSMSessionManager.yml --capabilities CAPABILITY_NAMED_IAM\n"})}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"SSM Preferences update and S3 cleanup during bucket removal:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"aws cloudformation create-stack --stack-name exampleEC2SSMSessionManager --template-body file://exampleEC2SSMSessionManager.yml --capabilities CAPABILITY_NAMED_IAM  --parameters ParameterKey=UpdateSMPreferences,ParameterValue=true ParameterKey=EmptyBucketBeforeDelete,ParameterValue=true \n"})}),"\n",(0,s.jsx)(a.h2,{id:"update-stack",children:"Update stack"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"SSM Preferences update and S3 cleanup during bucket removal:"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"aws cloudformation create-stack --stack-name exampleEC2SSMSessionManager --template-body file://exampleEC2SSMSessionManager.yml --capabilities CAPABILITY_NAMED_IAM  --parameters ParameterKey=UpdateSMPreferences,ParameterValue=true ParameterKey=EmptyBucketBeforeDelete,ParameterValue=true \n"})}),"\n",(0,s.jsx)(a.h2,{id:"delete-stack",children:"Delete stack"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Delete stack"}),"\n"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"aws cloudformation delete-stack --stack-name exampleEC2SSMSessionManager\n"})})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>c,x:()=>i});var t=n(6540);const s={},r=t.createContext(s);function c(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);