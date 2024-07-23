"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[2474],{3123:(e,o,c)=>{c.r(o),c.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var n=c(4848),r=c(8453);const d={},s="Podstawowe Polecenia Dockera z Przyk\u0142adowymi Zastosowaniami",i={id:"Docker/basic-commands",title:"Podstawowe Polecenia Dockera z Przyk\u0142adowymi Zastosowaniami",description:"Poni\u017cej znajduje si\u0119 lista podstawowych polece\u0144 Docker wraz z przyk\u0142adami ich zastosowania.",source:"@site/docs/Docker/08-basic-commands.md",sourceDirName:"Docker",slug:"/Docker/basic-commands",permalink:"/docs/Docker/basic-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/08-basic-commands.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker Hub",permalink:"/docs/Docker/docker-hub"},next:{title:"Docker Compose",permalink:"/docs/Docker/docker-compose"}},a={},l=[{value:"1. <code>docker run</code>",id:"1-docker-run",level:4},{value:"2. <code>docker build</code>",id:"2-docker-build",level:4},{value:"3. <code>docker ps</code>",id:"3-docker-ps",level:4},{value:"4. <code>docker stop</code>",id:"4-docker-stop",level:4},{value:"5. <code>docker rm</code>",id:"5-docker-rm",level:4},{value:"6. <code>docker rmi</code>",id:"6-docker-rmi",level:4},{value:"7. <code>docker pull</code>",id:"7-docker-pull",level:4},{value:"8. <code>docker push</code>",id:"8-docker-push",level:4},{value:"9. <code>docker exec</code>",id:"9-docker-exec",level:4},{value:"10. <code>docker logs</code>",id:"10-docker-logs",level:4},{value:"11. <code>docker network create</code>",id:"11-docker-network-create",level:4},{value:"12. <code>docker network ls</code>",id:"12-docker-network-ls",level:4},{value:"13. <code>docker-compose up</code>",id:"13-docker-compose-up",level:4},{value:"14. <code>docker-compose down</code>",id:"14-docker-compose-down",level:4}];function t(e){const o={code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"podstawowe-polecenia-dockera-z-przyk\u0142adowymi-zastosowaniami",children:"Podstawowe Polecenia Dockera z Przyk\u0142adowymi Zastosowaniami"}),"\n",(0,n.jsx)(o.p,{children:"Poni\u017cej znajduje si\u0119 lista podstawowych polece\u0144 Docker wraz z przyk\u0142adami ich zastosowania."}),"\n",(0,n.jsxs)(o.h4,{id:"1-docker-run",children:["1. ",(0,n.jsx)(o.code,{children:"docker run"})]}),"\n",(0,n.jsx)(o.p,{children:"Uruchamia nowy kontener z obrazu."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker run -d --name my_container my_image\n"})}),"\n",(0,n.jsxs)(o.p,{children:["To polecenie uruchamia kontener o nazwie ",(0,n.jsx)(o.code,{children:"my_container"})," w trybie od\u0142\u0105czonym (",(0,n.jsx)(o.code,{children:"-d"}),") z obrazu ",(0,n.jsx)(o.code,{children:"my_image"}),"."]}),"\n",(0,n.jsxs)(o.h4,{id:"2-docker-build",children:["2. ",(0,n.jsx)(o.code,{children:"docker build"})]}),"\n",(0,n.jsx)(o.p,{children:"Buduje obraz Dockera z pliku Dockerfile."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker build -t my_image:latest .\n"})}),"\n",(0,n.jsxs)(o.p,{children:["To polecenie buduje obraz z bie\u017c\u0105cego katalogu (",(0,n.jsx)(o.code,{children:"."}),") i nadaje mu nazw\u0119 ",(0,n.jsx)(o.code,{children:"my_image"})," oraz tag ",(0,n.jsx)(o.code,{children:"latest"}),"."]}),"\n",(0,n.jsxs)(o.h4,{id:"3-docker-ps",children:["3. ",(0,n.jsx)(o.code,{children:"docker ps"})]}),"\n",(0,n.jsx)(o.p,{children:"Wy\u015bwietla list\u0119 uruchomionych kontener\xf3w."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker ps\n"})}),"\n",(0,n.jsx)(o.p,{children:"To polecenie wy\u015bwietla wszystkie uruchomione kontenery, ich identyfikatory, nazwy oraz status."}),"\n",(0,n.jsxs)(o.h4,{id:"4-docker-stop",children:["4. ",(0,n.jsx)(o.code,{children:"docker stop"})]}),"\n",(0,n.jsx)(o.p,{children:"Zatrzymuje uruchomiony kontener."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker stop my_container\n"})}),"\n",(0,n.jsxs)(o.p,{children:["To polecenie zatrzymuje kontener o nazwie ",(0,n.jsx)(o.code,{children:"my_container"}),"."]}),"\n",(0,n.jsxs)(o.h4,{id:"5-docker-rm",children:["5. ",(0,n.jsx)(o.code,{children:"docker rm"})]}),"\n",(0,n.jsx)(o.p,{children:"Usuwa zatrzymany kontener."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker rm my_container\n"})}),"\n",(0,n.jsxs)(o.p,{children:["To polecenie usuwa kontener o nazwie ",(0,n.jsx)(o.code,{children:"my_container"}),"."]}),"\n",(0,n.jsxs)(o.h4,{id:"6-docker-rmi",children:["6. ",(0,n.jsx)(o.code,{children:"docker rmi"})]}),"\n",(0,n.jsx)(o.p,{children:"Usuwa obraz Dockera."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker rmi my_image:latest\n"})}),"\n",(0,n.jsxs)(o.p,{children:["To polecenie usuwa obraz o nazwie ",(0,n.jsx)(o.code,{children:"my_image"})," z tagiem ",(0,n.jsx)(o.code,{children:"latest"}),"."]}),"\n",(0,n.jsxs)(o.h4,{id:"7-docker-pull",children:["7. ",(0,n.jsx)(o.code,{children:"docker pull"})]}),"\n",(0,n.jsx)(o.p,{children:"Pobiera obraz z rejestru Docker (np. Docker Hub)."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker pull ubuntu:latest\n"})}),"\n",(0,n.jsxs)(o.p,{children:["To polecenie pobiera obraz ",(0,n.jsx)(o.code,{children:"ubuntu"})," z tagiem ",(0,n.jsx)(o.code,{children:"latest"})," z Docker Hub."]}),"\n",(0,n.jsxs)(o.h4,{id:"8-docker-push",children:["8. ",(0,n.jsx)(o.code,{children:"docker push"})]}),"\n",(0,n.jsx)(o.p,{children:"Wysy\u0142a obraz do rejestru Docker."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker push myrepo/my_image:latest\n"})}),"\n",(0,n.jsxs)(o.p,{children:["To polecenie wysy\u0142a obraz ",(0,n.jsx)(o.code,{children:"my_image"})," z tagiem ",(0,n.jsx)(o.code,{children:"latest"})," do rejestru ",(0,n.jsx)(o.code,{children:"myrepo"}),"."]}),"\n",(0,n.jsxs)(o.h4,{id:"9-docker-exec",children:["9. ",(0,n.jsx)(o.code,{children:"docker exec"})]}),"\n",(0,n.jsx)(o.p,{children:"Wykonuje polecenie w uruchomionym kontenerze."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker exec -it my_container bash\n"})}),"\n",(0,n.jsxs)(o.p,{children:["To polecenie otwiera interaktywn\u0105 pow\u0142ok\u0119 bash w uruchomionym kontenerze ",(0,n.jsx)(o.code,{children:"my_container"}),"."]}),"\n",(0,n.jsxs)(o.h4,{id:"10-docker-logs",children:["10. ",(0,n.jsx)(o.code,{children:"docker logs"})]}),"\n",(0,n.jsx)(o.p,{children:"Wy\u015bwietla logi z uruchomionego kontenera."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker logs my_container\n"})}),"\n",(0,n.jsxs)(o.p,{children:["To polecenie wy\u015bwietla logi z kontenera o nazwie ",(0,n.jsx)(o.code,{children:"my_container"}),"."]}),"\n",(0,n.jsxs)(o.h4,{id:"11-docker-network-create",children:["11. ",(0,n.jsx)(o.code,{children:"docker network create"})]}),"\n",(0,n.jsx)(o.p,{children:"Tworzy now\u0105 sie\u0107 Docker."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker network create my_bridge_network\n"})}),"\n",(0,n.jsxs)(o.p,{children:["To polecenie tworzy sie\u0107 mostkow\u0105 o nazwie ",(0,n.jsx)(o.code,{children:"my_bridge_network"}),"."]}),"\n",(0,n.jsxs)(o.h4,{id:"12-docker-network-ls",children:["12. ",(0,n.jsx)(o.code,{children:"docker network ls"})]}),"\n",(0,n.jsx)(o.p,{children:"Wy\u015bwietla list\u0119 wszystkich sieci Docker."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker network ls\n"})}),"\n",(0,n.jsx)(o.p,{children:"To polecenie wy\u015bwietla wszystkie sieci Docker dost\u0119pne na ho\u015bcie."}),"\n",(0,n.jsxs)(o.h4,{id:"13-docker-compose-up",children:["13. ",(0,n.jsx)(o.code,{children:"docker-compose up"})]}),"\n",(0,n.jsxs)(o.p,{children:["Uruchamia kontenery zdefiniowane w pliku ",(0,n.jsx)(o.code,{children:"docker-compose.yml"}),"."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker-compose up -d\n"})}),"\n",(0,n.jsxs)(o.p,{children:["To polecenie uruchamia wszystkie kontenery zdefiniowane w pliku ",(0,n.jsx)(o.code,{children:"docker-compose.yml"})," w trybie od\u0142\u0105czonym (",(0,n.jsx)(o.code,{children:"-d"}),")."]}),"\n",(0,n.jsxs)(o.h4,{id:"14-docker-compose-down",children:["14. ",(0,n.jsx)(o.code,{children:"docker-compose down"})]}),"\n",(0,n.jsxs)(o.p,{children:["Zatrzymuje i usuwa kontenery, sieci i wolumeny zdefiniowane w pliku ",(0,n.jsx)(o.code,{children:"docker-compose.yml"}),"."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"docker-compose down\n"})}),"\n",(0,n.jsxs)(o.p,{children:["To polecenie zatrzymuje i usuwa wszystkie zasoby zdefiniowane w pliku ",(0,n.jsx)(o.code,{children:"docker-compose.yml"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"Te podstawowe polecenia Docker pomagaj\u0105 w codziennym zarz\u0105dzaniu kontenerami, obrazami i sieciami. Dzi\u0119ki nim mo\u017cna \u0142atwo uruchamia\u0107, zatrzymywa\u0107, usuwa\u0107 i monitorowa\u0107 aplikacje kontenerowe."})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},8453:(e,o,c)=>{c.d(o,{R:()=>s,x:()=>i});var n=c(6540);const r={},d=n.createContext(r);function s(e){const o=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(d.Provider,{value:o},e.children)}}}]);