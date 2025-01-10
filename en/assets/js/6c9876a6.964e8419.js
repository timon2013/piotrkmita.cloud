"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[6951],{7088:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"Docker/docker-compose","title":"Docker Compose","description":"Docker Compose is a tool that allows you to define and manage multi-container Docker applications. It enables the deployment of multiple containers defined in a single docker-compose.yml file, simplifying the management of complex containerized environments.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/Docker/09-docker-compose.md","sourceDirName":"Docker","slug":"/Docker/docker-compose","permalink":"/en/docs/Docker/docker-compose","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/09-docker-compose.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Basic Docker Commands with Example Use Cases","permalink":"/en/docs/Docker/basic-commands"},"next":{"title":"Databases","permalink":"/en/docs/Docker/databases"}}');var i=s(4848),a=s(8453);const r={},c="Docker Compose",t={},l=[{value:"Key Features of Docker Compose",id:"key-features-of-docker-compose",level:4},{value:"Docker Compose Use Cases",id:"docker-compose-use-cases",level:4},{value:"1. Simple Web Application",id:"1-simple-web-application",level:5},{value:"2. Application with a Database",id:"2-application-with-a-database",level:5},{value:"Basic Docker Compose Commands",id:"basic-docker-compose-commands",level:4},{value:"Summary",id:"summary",level:4}];function d(e){const n={br:"br",code:"code",h1:"h1",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"docker-compose",children:"Docker Compose"})}),"\n",(0,i.jsxs)(n.p,{children:["Docker Compose is a tool that allows you to define and manage multi-container Docker applications. It enables the deployment of multiple containers defined in a single ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file, simplifying the management of complex containerized environments."]}),"\n",(0,i.jsx)(n.h4,{id:"key-features-of-docker-compose",children:"Key Features of Docker Compose"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Service Definition"}),": Docker Compose allows you to define multiple services in a single YAML file. Each service can be run as a separate container."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Network and Volume Management"}),": It enables the definition of networks and volumes that can be shared between containers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Automation"}),": Allows for the automatic building and running of containers, simplifying CI/CD processes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Orchestration"}),": Enables orchestration of containers in various environments, making it easier to manage complex applications."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"docker-compose-use-cases",children:"Docker Compose Use Cases"}),"\n",(0,i.jsx)(n.h5,{id:"1-simple-web-application",children:"1. Simple Web Application"}),"\n",(0,i.jsx)(n.p,{children:"You can use Docker Compose to run a simple web application consisting of an Nginx server and a Node.js backend."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"docker-compose.yml"})," File:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"version: '3'\nservices:\n  web:\n    image: nginx:latest\n    ports:\n      - \"80:80\"\n    volumes:\n      - ./nginx.conf:/etc/nginx/nginx.conf\n  backend:\n    image: node:14\n    working_dir: /app\n    volumes:\n      - ./app:/app\n    command: npm start\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Directory Structure:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-code",children:".\n\u251c\u2500\u2500 app\n\u2502 \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 docker-compose.yml\n\u2514\u2500\u2500 nginx.conf\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Starting the Application:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker-compose up -d\n"})}),"\n",(0,i.jsx)(n.p,{children:"This command starts both the Nginx server and the Node.js backend."}),"\n",(0,i.jsx)(n.h5,{id:"2-application-with-a-database",children:"2. Application with a Database"}),"\n",(0,i.jsxs)(n.p,{children:["Docker Compose is ideal for running applications that require a database, such as a web application with a MySQL database.",(0,i.jsx)(n.br,{}),"\n","It's important to note that running databases in containers isn't always desirable, depending on the use case. Always consider whether running the database in a container is the right choice."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"docker-compose.yml"})," File:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"version: '3'\nservices:\n  db:\n    image: mysql:5.7\n    environment:\n      MYSQL_ROOT_PASSWORD: example\n  wordpress:\n    image: wordpress:latest\n    ports:\n      - \"8000:80\"\n    environment:\n      WORDPRESS_DB_HOST: db:3306\n      WORDPRESS_DB_PASSWORD: example\n    depends_on:\n      - db\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Starting the Application:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker-compose up -d\n"})}),"\n",(0,i.jsx)(n.p,{children:"This command starts MySQL and WordPress containers, automatically configuring the connection between them."}),"\n",(0,i.jsx)(n.h4,{id:"basic-docker-compose-commands",children:"Basic Docker Compose Commands"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Start Services:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker-compose up\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Start Services in the Background:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker-compose up -d\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Stop Services:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker-compose stop\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Stop and Remove Containers, Networks, and Volumes:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker-compose down\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"View Logs:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker-compose logs\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"Docker Compose is a powerful tool for managing complex containerized applications, allowing for easy definition, deployment, and management of multi-container environments. Its ability to orchestrate various services in a single YAML file makes it indispensable in the modern application lifecycle."})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var o=s(6540);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);