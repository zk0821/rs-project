(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{4634:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/live",function(){return t(896)}])},6388:function(e,l,t){"use strict";t.d(l,{Z:function(){return y}});var s=t(5893),n=t(9008),r=t.n(n),a=t(7294);let i=()=>(0,s.jsx)("div",{className:"text-center bg-slate-500 h-auto py-1 text-yellow-50 h-10 absolute w-full bottom-0 z-10",children:(0,s.jsx)("span",{className:"",children:"Žiga Drab, Žan Kogovšek, David Trafela \xa9"})});var c=t(3750),d=t(9352),o=t(9583),u=t(155),x=t(3854),h=t(1664),m=t.n(h);let f=e=>{let{sidebarStatus:l,menuTitle:t,subMenu:n,subMenuArray:r,hrefLink:i,children:c}=e,[d,o]=(0,a.useState)(!1),u=()=>{o(!d)};return(0,a.useEffect)(()=>{l||o(!1)},[l]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(m(),{href:i,children:(0,s.jsxs)("span",{className:"inline-flex items-center justify-between py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-3 cursor-pointer relative group",onClick:u,children:[c,(0,s.jsx)("span",{className:"".concat(l?"text-base ml-2":"sr-only"),children:t}),(0,s.jsx)("span",{className:"".concat(l?"hidden":"hidden group-hover:block"," absolute -left-4 -bottom-5 bg-slate-500 text-white p-1 text-xs w-[88px] text-center"),children:t})]})})})},g=e=>{let{sidebarOutsideClick:l}=e,[t,n]=(0,a.useState)(!1),[r,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{l&&n(!1)},[l]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("nav",{className:"flex flex-col mx-4 my-6 space-y-4",children:[(0,s.jsx)(f,{hrefLink:"/live",sidebarStatus:t,menuTitle:"Live Feed",subMenu:!1,subMenuArray:null,children:(0,s.jsx)(c.ACo,{size:"2rem"})}),(0,s.jsx)(f,{hrefLink:"/walking",sidebarStatus:t,menuTitle:"Walking",subMenu:!1,subMenuArray:null,children:(0,s.jsx)(d.XNc,{size:"2rem"})}),(0,s.jsx)(f,{hrefLink:"/running",sidebarStatus:t,menuTitle:"Running",subMenu:!1,subMenuArray:null,children:(0,s.jsx)(o.EaM,{size:"2rem"})}),(0,s.jsx)(f,{hrefLink:"/cycling",sidebarStatus:t,menuTitle:"Cycling",subMenu:!1,subMenuArray:null,children:(0,s.jsx)(u.iEX,{size:"2rem"})}),(0,s.jsx)(f,{hrefLink:"/report",sidebarStatus:t,menuTitle:"Report",subMenu:!1,subMenuArray:null,children:(0,s.jsx)(x.rkW,{size:"2rem"})})]})})},b=()=>(0,s.jsx)(m(),{href:"/",children:(0,s.jsx)("span",{className:"inline-flex items-center justify-center h-20 w-full bg-cyan-300 hover:bg-cyan-400 focus:bg-cyan-400 cursor-pointer",children:(0,s.jsx)("img",{src:"logo.png",width:"50"})})}),j=e=>{let{mobileNavsidebar:l}=e,t=(0,a.useRef)(null),n=function(e){let[l,t]=(0,a.useState)();return(0,a.useEffect)(()=>{function l(l){e.current&&!e.current.contains(l.target)?t(!0):t(!1)}return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[e]),l}(t);return(0,s.jsxs)("aside",{className:"".concat(l?"block":"hidden"," sm:flex sm:flex-col z-50"),ref:t,children:[(0,s.jsx)(b,{}),(0,s.jsx)("div",{className:"flex-grow flex flex-col justify-between text-gray-500 bg-gray-800",children:(0,s.jsx)(g,{sidebarOutsideClick:n})})]})},p=e=>{let{children:l,title:t="Sample Title"}=e,[n,c]=(0,a.useState)(!1);return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:t}),(0,s.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("div",{className:"flex bg-gray-100 min-h-screen relative",children:[(0,s.jsx)(j,{mobileNavsidebar:n}),(0,s.jsx)("div",{className:"flex-grow text-gray-800 mb-16",children:l}),(0,s.jsx)(i,{})]})]})};var y=p},896:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return j}});var s=t(5893),n=t(7294),r=t(7757),a=t(9352),i=t(9583),c=t(155),d=t(7106);let o=(e,l,t)=>{let s=[];for(let e=0;e<t;e++)s.push(0);return e.all.forEach(e=>{let t=new Date(e.start);for(let e=0;e<l.length;e++){let n=new Date(l[e]),r=n.getDate(),a=n.getHours(),i=n.getMinutes(),c=n.getSeconds();t.getDate()-r==0&&t.getHours()-a==0&&t.getMinutes()-i==0&&t.getSeconds()-c<=10&&(s[e]+=1)}}),s},u=(e,l,t)=>{let s=[],n=new Date;for(let e=0;e<30;e++)s.push(n.toLocaleTimeString()),n.setSeconds(n.getSeconds()-10);let a=o(e,s=s.reverse(),30),i=o(l,s,30),c=o(t,s,30);var d=document.getElementById("myChart");if(d){var u=d.getContext("2d");new r.Chart(u,{type:"line",data:{labels:s,datasets:[{data:a,label:"Walking",borderColor:"#00bbf9",backgroundColor:"#00bbf9",fill:!1},{data:i,label:"Running",borderColor:"#ff4242",backgroundColor:"#ff4242",fill:!1},{data:c,label:"Cycling",borderColor:"#04e762",backgroundColor:"#04e762",fill:!1}]}})}},x=(e,l)=>Math.abs(e-l)/1e3,h=(e,l,t)=>{let s=new Date,n=null;e.all.forEach(e=>{let l=new Date(e.start);300>=x(s,l)&&(null==n||l-n>0)&&(n=l)});let r=null;l.all.forEach(e=>{let l=new Date(e.start);300>=x(s,l)&&(null==r||l-r>0)&&(r=l)});let a=null;if(t.all.forEach(e=>{let l=new Date(e.start);300>=x(s,l)&&(null==a||l-a>0)&&(a=l)}),n){if(!r)return 1;if(a){if(n-r>0&&n-a>0)return 1}else if(n-r>0)return 1}return r&&(!a||r-a>0)?2:a?3:0},m=()=>({all:[]}),f=e=>{let l={all:[]},t={total_num_steps:0,start:null,last_end:null};return e.forEach(e=>{let s=new Date(e.time);null!=t.start&&(s-t.last_end<3e5?(t.total_num_steps+=e.steps,t.last_end=s):(l.all.push(t),t={total_num_steps:0,start:null,last_end:null})),null==t.start&&(t.start=s,t.last_end=s,t.total_num_steps+=e.steps)}),null!=t.start&&l.all.push(t),l},g=()=>{let[e,l]=(0,n.useState)({walking:{all:[]},running:{all:[]},cycling:{all:[]}}),[t,r]=(0,n.useState)(!1),[o,x]=(0,n.useState)(),[g,b]=(0,n.useState)(),[j,p]=(0,n.useState)(!1),[y,w]=(0,n.useState)(!1),[v,N]=(0,n.useState)(!1),[k,C]=(0,n.useState)(!1),S=async()=>{x(!0);try{let e,t,s;r(!1);let n=await fetch("https://www.songify.si/rs/mqtt-project",{method:"GET"}),a=await n.json();e=a.walking?f(a.walking):m(),t=a.running?f(a.running):m(),s=a.cycling?f(a.cycling):m(),u(e,t,s),l({walking:e,running:t,cycling:s});let i=h(e,t,s);console.log(i),0==i?(p(!0),w(!1),N(!1),C(!1)):1==i?(p(!1),w(!0),N(!1),C(!1)):2==i?(p(!1),w(!1),N(!0),C(!1)):3==i&&(p(!1),w(!1),N(!1),C(!0)),await new Promise(e=>setTimeout(e,2e3)),b(),r(!0),x(!1)}catch(e){await new Promise(e=>setTimeout(e,2e3)),b(e.toString()),r(!1),x(!1)}};return(0,n.useEffect)(()=>{S();let e=setInterval(()=>{S()},6e4);return()=>{clearInterval(e)}},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("main",{className:"p-6 sm:p-10 space-y-6",children:[(0,s.jsx)("div",{className:"flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between",children:(0,s.jsxs)("div",{className:"mr-6",children:[(0,s.jsx)("h3",{className:"text-lg text-slate-600",children:"STM Activity Tracker"}),(0,s.jsx)("h1",{className:"text-4xl font-semibold mb-2",children:"Live Feed"}),(0,s.jsx)("h2",{className:"text-gray-600 ml-0.5",children:"Automatically refreshes every 60 seconds."})]})}),(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-4",children:[o&&(0,s.jsxs)("div",{className:"p-2 bg-blue-600 items-center text-blue-100 leading-none lg:rounded-full flex lg:inline-flex",role:"alert",children:[(0,s.jsx)("span",{className:"flex rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3",children:"INFO"}),(0,s.jsx)("span",{className:"font-semibold mr-2 text-left flex-auto",children:"Refreshing activity data"}),(0,s.jsxs)("div",{role:"status",children:[(0,s.jsxs)("svg",{"aria-hidden":"true",className:"w-4 h-4 mr-2 text-white animate-spin dark:text-gray-600 fill-white",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,s.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,s.jsx)("span",{className:"sr-only",children:"Loading..."})]})]}),g&&0!=g.length&&(0,s.jsxs)("div",{className:"p-2 bg-red-600 items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex",role:"alert",children:[(0,s.jsx)("span",{className:"flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3",children:"ERROR"}),(0,s.jsx)("span",{className:"font-semibold mr-2 text-left flex-auto",children:g})]})]}),(0,s.jsx)("h1",{className:"text-xl font-semibold mb-2",children:"Current activity"}),(0,s.jsxs)("section",{className:"grid md:grid-cols-2 xl:grid-cols-4 gap-6",children:[(0,s.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg ".concat(j?"border-4 border-red-500":""),children:[(0,s.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6",children:(0,s.jsx)(d.G4d,{size:"2rem"})}),(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:"block text-2xl ".concat(j?"font-bold":""),children:"Idle"})})]}),(0,s.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg ".concat(y?"border-4 border-red-500":""),children:[(0,s.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6",children:(0,s.jsx)(a.XNc,{size:"2rem"})}),(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:"block text-2xl ".concat(y?"font-bold":""),children:"Walking"})})]}),(0,s.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg ".concat(v?"border-4 border-red-500":""),children:[(0,s.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6",children:(0,s.jsx)(i.EaM,{size:"2rem"})}),(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:"block text-2xl ".concat(v?"font-bold":""),children:"Running"})})]}),(0,s.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg ".concat(k?"border-4 border-red-500":""),children:[(0,s.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6",children:(0,s.jsx)(c.iEX,{size:"2rem"})}),(0,s.jsx)("div",{children:(0,s.jsx)("span",{className:"block text-2xl ".concat(k?"font-bold":""),children:"Cycling"})})]})]}),(0,s.jsx)("section",{className:"grid md:grid-cols-2 xl:grid-cols-1 xl:grid-rows-1 xl:grid-flow-col gap-6",children:(0,s.jsxs)("div",{className:"flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg",children:[(0,s.jsx)("div",{className:"px-6 py-5 font-semibold border-b border-gray-100",children:"Activity chart (last 5 minutes)"}),(0,s.jsx)("div",{className:"p-4 flex-grow",children:(0,s.jsxs)("div",{className:"flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-white border-2 border-gray-200 border-dashed rounded-md",children:[(0,s.jsx)("span",{style:{display:t?"none":"block"},children:"Loading activity chart..."}),(0,s.jsx)("canvas",{id:"myChart",style:{display:t?"block":"none"}})]})})]})})]})})};var b=t(6388);function j(){return(0,s.jsx)(b.Z,{title:"STM Activity Tracker: Live Feed",children:(0,s.jsx)(g,{})})}}},function(e){e.O(0,[13,445,937,260,556,698,885,907,831,774,888,179],function(){return e(e.s=4634)}),_N_E=e.O()}]);