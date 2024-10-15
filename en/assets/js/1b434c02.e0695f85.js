"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[9772],{564:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var i=s(4848),r=s(8453);const t={},o="Basic Concepts",c={id:"Docker/basic-concepts",title:"Basic Concepts",description:"Container",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Docker/02-basic-concepts.md",sourceDirName:"Docker",slug:"/Docker/basic-concepts",permalink:"/en/docs/Docker/basic-concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/02-basic-concepts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker - Basic Information",permalink:"/en/docs/Docker/introduction"},next:{title:"Docker Architecture",permalink:"/en/docs/Docker/architecture"}},a={},l=[{value:"Container",id:"container",level:4},{value:"Image",id:"image",level:4},{value:"Dockerfile",id:"dockerfile",level:4},{value:"Docker Engine",id:"docker-engine",level:4},{value:"Docker Registry",id:"docker-registry",level:4},{value:"Volumes",id:"volumes",level:4},{value:"Networks",id:"networks",level:4}];function d(e){const n={code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"basic-concepts",children:"Basic Concepts"})}),"\n",(0,i.jsx)(n.h4,{id:"container",children:"Container"}),"\n",(0,i.jsx)(n.p,{children:"Containers are lightweight, portable, and self-sufficient units that include everything needed to run an application, such as code, runtime, operating system, libraries, and dependencies."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Isolation"}),": Containers run in isolation from each other and from the host, ensuring that changes in one container do not affect other containers or the host operating system."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Efficiency"}),": Since containers share the same host operating system, they are more resource-efficient than traditional virtual machines."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"image",children:"Image"}),"\n",(0,i.jsx)(n.p,{children:"A Docker image is a static file that contains a filesystem and all the resources required to run a container. It serves as a blueprint for a container."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Layering"}),": Images are built in layers, allowing for the reuse of layers and reducing the amount of data needed for storage and transmission."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Creation"}),": Images are created from Dockerfiles, which contain a set of instructions on how to build the image."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"dockerfile",children:"Dockerfile"}),"\n",(0,i.jsx)(n.p,{children:"A Dockerfile is a text file script that contains a set of instructions to build a Docker image. Each instruction in the Dockerfile adds a new layer to the image."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Example"}),":"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dockerfile",children:'FROM python:3.8-slim\nWORKDIR /app\nCOPY . /app\nRUN pip install -r requirements.txt\nCMD ["python", "app.py"]\n'})}),"\n",(0,i.jsx)(n.p,{children:"In the example above:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FROM"})," specifies the base image."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"WORKDIR"})," sets the working directory inside the container."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"COPY"})," copies files from the host to the container."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"RUN"})," executes a command during the image build."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CMD"})," specifies the default command to run when the container starts."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"docker-engine",children:"Docker Engine"}),"\n",(0,i.jsx)(n.p,{children:"Docker Engine is the core of the Docker platform, consisting of several key components."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Components"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Docker Daemon"}),": A background process that manages containers and images on the host."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"REST API"}),": An interface that allows communication with the daemon using HTTP."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CLI (Command Line Interface)"}),": A command-line tool that enables users to interact with Docker."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"docker-registry",children:"Docker Registry"}),"\n",(0,i.jsx)(n.p,{children:"A Docker registry is a service for storing and distributing Docker images. The most well-known public registry is Docker Hub."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Public vs Private"}),": Docker Hub offers both public and private image repositories. Organizations can also create their own private registries for internal use."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"volumes",children:"Volumes"}),"\n",(0,i.jsx)(n.p,{children:"Volumes are a mechanism for managing data in containers. They allow persistent storage of data independent of the container's lifecycle."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Types"}),": There are three main types of volumes:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Named Volumes"}),": Managed by Docker and can be shared between containers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Anonymous Volumes"}),": Created dynamically without a name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Host Volumes"}),": Mapped directly to directories on the host."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"networks",children:"Networks"}),"\n",(0,i.jsx)(n.p,{children:"Docker offers various types of networks to connect containers to each other and to external networks."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Types"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Bridge Network"}),": The default network that allows communication between containers on the same host."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Host Network"}),": Uses the host's network without network isolation between the container and the host."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Overlay Network"}),": Enables communication between containers on different hosts, useful in Docker Swarm clusters."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var i=s(6540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);