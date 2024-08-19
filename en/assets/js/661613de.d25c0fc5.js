"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[8831],{3824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(4848),s=t(8453);const o={},i="Types of Networks in Docker",c={id:"Docker/network-types",title:"Types of Networks in Docker",description:"Docker offers various network types that enable containers to communicate with each other and with external networks. Below, three main network types are discussed: bridge, host, and overlay.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Docker/04-network-types.md",sourceDirName:"Docker",slug:"/Docker/network-types",permalink:"/en/docs/Docker/network-types",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/04-network-types.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker Architecture",permalink:"/en/docs/Docker/architecture"},next:{title:"Docker Use Cases",permalink:"/en/docs/Docker/applications-of-docker"}},a={},d=[{value:"Bridge Network",id:"bridge-network",level:4},{value:"Host Network",id:"host-network",level:4},{value:"Overlay Network",id:"overlay-network",level:4},{value:"Summary",id:"summary",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"types-of-networks-in-docker",children:"Types of Networks in Docker"}),"\n",(0,r.jsxs)(n.p,{children:["Docker offers various network types that enable containers to communicate with each other and with external networks. Below, three main network types are discussed: ",(0,r.jsx)(n.code,{children:"bridge"}),", ",(0,r.jsx)(n.code,{children:"host"}),", and ",(0,r.jsx)(n.code,{children:"overlay"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"bridge-network",children:"Bridge Network"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Bridge"})," is the default network type that Docker creates during installation. It allows communication between containers on the same host while isolating them from external networks."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Use Case"}),": Ideal for running multiple containers on a single host that need to communicate with each other. Each container connected to the ",(0,r.jsx)(n.code,{children:"bridge"})," network receives a private IP address."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Usage Example"}),":"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker network create my_bridge_network\ndocker run -d --name my_container --network my_bridge_network my_image\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The above commands create a bridge network named ",(0,r.jsx)(n.code,{children:"my_bridge_network"})," and start a container named ",(0,r.jsx)(n.code,{children:"my_container"})," connected to this network."]}),"\n",(0,r.jsx)(n.h4,{id:"host-network",children:"Host Network"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Host"})," is a network type where the container shares the network stack with the host. The container uses the host's IP address, eliminating the network virtualization layer."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Use Case"}),": Used when maximum network performance is required or when the container needs direct access to the host's network. It can be applied to applications that need direct access to the host's network interfaces."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Usage Example"}),":"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -d --name my_container --network host my_image\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The above command starts a container named ",(0,r.jsx)(n.code,{children:"my_container"})," that uses the host's network."]}),"\n",(0,r.jsx)(n.h4,{id:"overlay-network",children:"Overlay Network"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Overlay"})," is a network type that allows communication between containers on different hosts. It is often used in Docker Swarm and Kubernetes clusters."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Use Case"}),": Ideal for creating distributed applications that need to communicate across multiple hosts. It uses tunneling technology to connect different hosts into a single logical network."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Usage Example"}),":"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker network create -d overlay my_overlay_network\ndocker service create --name my_service --network my_overlay_network my_image\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The above commands create an overlay network named ",(0,r.jsx)(n.code,{children:"my_overlay_network"})," and start a service named ",(0,r.jsx)(n.code,{children:"my_service"})," connected to this network."]}),"\n",(0,r.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bridge Network"}),": Enables communication between containers on the same host while providing isolation from external networks."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Host Network"}),": Uses the host's network, providing maximum performance but without isolation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Overlay Network"}),": Enables communication between containers on different hosts, ideal for distributed applications."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Each network type has specific use cases and benefits, depending on the needs of the application and system architecture."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var r=t(6540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);