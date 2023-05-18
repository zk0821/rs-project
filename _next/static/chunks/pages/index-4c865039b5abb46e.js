(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(7865)}])},6388:function(e,s,l){"use strict";l.d(s,{Z:function(){return w}});var t=l(5893),n=l(9008),a=l.n(n),i=l(7294);let r=()=>(0,t.jsx)("div",{className:"text-center bg-slate-500 h-auto py-1 text-yellow-50 h-10 absolute w-full bottom-0 z-10",children:(0,t.jsx)("span",{className:"",children:"Žiga Drab, Žan Kogovšek, David Trafela \xa9"})});var c=l(3750),d=l(9352),o=l(9583),x=l(155),h=l(3854),m=l(1664),u=l.n(m);let g=e=>{let{sidebarStatus:s,menuTitle:l,subMenu:n,subMenuArray:a,hrefLink:r,children:c}=e,[d,o]=(0,i.useState)(!1),x=()=>{o(!d)};return(0,i.useEffect)(()=>{s||o(!1)},[s]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(u(),{href:r,children:(0,t.jsxs)("span",{className:"inline-flex items-center justify-between py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-3 cursor-pointer relative group",onClick:x,children:[c,(0,t.jsx)("span",{className:"".concat(s?"text-base ml-2":"sr-only"),children:l}),(0,t.jsx)("span",{className:"".concat(s?"hidden":"hidden group-hover:block"," absolute -left-4 -bottom-5 bg-slate-500 text-white p-1 text-xs w-[88px] text-center"),children:l})]})})})},b=e=>{let{sidebarOutsideClick:s}=e,[l,n]=(0,i.useState)(!1),[a,r]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{s&&n(!1)},[s]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("nav",{className:"flex flex-col mx-4 my-6 space-y-4",children:[(0,t.jsx)(g,{hrefLink:"/live",sidebarStatus:l,menuTitle:"Live Feed",subMenu:!1,subMenuArray:null,children:(0,t.jsx)(c.ACo,{size:"2rem"})}),(0,t.jsx)(g,{hrefLink:"/walking",sidebarStatus:l,menuTitle:"Walking",subMenu:!1,subMenuArray:null,children:(0,t.jsx)(d.XNc,{size:"2rem"})}),(0,t.jsx)(g,{hrefLink:"/running",sidebarStatus:l,menuTitle:"Running",subMenu:!1,subMenuArray:null,children:(0,t.jsx)(o.EaM,{size:"2rem"})}),(0,t.jsx)(g,{hrefLink:"/cycling",sidebarStatus:l,menuTitle:"Cycling",subMenu:!1,subMenuArray:null,children:(0,t.jsx)(x.iEX,{size:"2rem"})}),(0,t.jsx)(g,{hrefLink:"/report",sidebarStatus:l,menuTitle:"Report",subMenu:!1,subMenuArray:null,children:(0,t.jsx)(h.rkW,{size:"2rem"})})]})})},f=()=>(0,t.jsx)(u(),{href:"/",children:(0,t.jsx)("span",{className:"inline-flex items-center justify-center h-20 w-full bg-cyan-300 hover:bg-cyan-400 focus:bg-cyan-400 cursor-pointer",children:(0,t.jsx)("img",{src:"/logo.png",width:"50"})})}),j=e=>{let{mobileNavsidebar:s}=e,l=(0,i.useRef)(null),n=function(e){let[s,l]=(0,i.useState)();return(0,i.useEffect)(()=>{function s(s){e.current&&!e.current.contains(s.target)?l(!0):l(!1)}return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[e]),s}(l);return(0,t.jsxs)("aside",{className:"".concat(s?"block":"hidden"," sm:flex sm:flex-col z-50"),ref:l,children:[(0,t.jsx)(f,{}),(0,t.jsx)("div",{className:"flex-grow flex flex-col justify-between text-gray-500 bg-gray-800",children:(0,t.jsx)(b,{sidebarOutsideClick:n})})]})},p=e=>{let{children:s,title:l="Sample Title"}=e,[n,c]=(0,i.useState)(!1);return(0,t.jsxs)(i.Fragment,{children:[(0,t.jsxs)(a(),{children:[(0,t.jsx)("title",{children:l}),(0,t.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("div",{className:"flex bg-gray-100 min-h-screen relative",children:[(0,t.jsx)(j,{mobileNavsidebar:n}),(0,t.jsx)("div",{className:"flex-grow text-gray-800 mb-16",children:s}),(0,t.jsx)(r,{})]})]})};var w=p},7865:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return b}});var t=l(5893),n=l(7294),a=l(7757),i=l(9352),r=l(9583),c=l(155),d=l(7106);let o=(e,s,l)=>{let t=[];for(let e=0;e<l;e++)t.push(0);return e.all.forEach(e=>{let l=new Date(e.start).getDate();for(let e=0;e<s.length;e++)l-new Date(s[e]).getDate()==0&&(t[e]+=1)}),t},x=(e,s,l)=>{let t=[],n=new Date;for(let e=0;e<7;e++)t.push(n.toISOString().substring(0,10)),n.setDate(n.getDate()-1);let i=o(e,t=t.reverse(),7),r=o(s,t,7),c=o(l,t,7);var d=document.getElementById("myChart");if(d){var x=d.getContext("2d");new a.Chart(x,{type:"line",data:{labels:t,datasets:[{data:i,label:"Walking",borderColor:"#00bbf9",backgroundColor:"#00bbf9",fill:!1},{data:r,label:"Running",borderColor:"#ff4242",backgroundColor:"#ff4242",fill:!1},{data:c,label:"Cycling",borderColor:"#04e762",backgroundColor:"#04e762",fill:!1}]}})}},h=()=>({all:[],total_steps:0,total_calories:0,total_distance:0}),m=(e,s,l)=>{let t={all:[],total_steps:0,total_calories:0,total_distance:0},n={total_num_steps:0,start:null,last_end:null,calories:0,distance:0};return e.forEach(e=>{let a=0;a=0<=e.steps<2?s/5:2<=e.steps<3?s/4:3<=e.steps<4?s/3:4<=e.steps<5?s/2:5<=e.steps<6?s/1.2:6<=e.steps<8?s:1.2*s;let i=e.steps*a/2,r=2*i,c=i*l/400,d=new Date(e.time);null!=n.start&&(d-n.last_end<3e5?(n.total_num_steps+=e.steps,n.last_end=d,n.calories+=c,n.distance+=r):(t.all.push(n),t.total_steps+=n.total_num_steps,t.total_calories+=n.calories,t.total_distance+=n.distance,n={total_num_steps:0,start:null,last_end:null,calories:0,distance:0})),null==n.start&&(n.start=d,n.last_end=d,n.total_num_steps+=e.steps,n.calories+=c,n.distance+=r)}),null!=n.start&&(t.all.push(n),t.total_steps+=n.total_num_steps,t.total_calories+=n.calories,t.total_distance+=n.distance),t},u=()=>{let e=(0,n.useRef)({}).current,[s,l]=(0,n.useState)(1.7);e.height=s;let[a,o]=(0,n.useState)(70);e.weight=a;let[u,g]=(0,n.useState)({walking:{all:[],total_steps:0,total_calories:0,total_distance:0},running:{all:[],total_steps:0,total_calories:0,total_distance:0},cycling:{all:[],total_steps:0,total_calories:0,total_distance:0}}),[b,f]=(0,n.useState)(!1),[j,p]=(0,n.useState)(),[w,y]=(0,n.useState)(),N=async()=>{p(!0);try{let s,l,t;f(!1);let n=await fetch("https://www.songify.si/rs/mqtt-project",{method:"GET"}),a=await n.json();s=a.walking?m(a.walking,e.height,e.weight):h(),l=a.running?m(a.running,e.height,e.weight):h(),t=a.cycling?m(a.cycling,e.height,e.weight):h(),x(s,l,t),g({walking:s,running:l,cycling:t}),await new Promise(e=>setTimeout(e,2e3)),y(),f(!0),p(!1)}catch(e){await new Promise(e=>setTimeout(e,2e3)),y(e.toString()),f(!1),p(!1)}};return(0,n.useEffect)(()=>{N();let e=setInterval(()=>{N()},3e5);return()=>{clearInterval(e)}},[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("main",{className:"p-6 sm:p-10 space-y-6",children:[(0,t.jsx)("div",{className:"flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between",children:(0,t.jsxs)("div",{className:"mr-6",children:[(0,t.jsx)("h3",{className:"text-lg text-slate-600",children:"STM Activity Tracker"}),(0,t.jsx)("h1",{className:"text-4xl font-semibold mb-2",children:"Dashboard"}),(0,t.jsx)("h2",{className:"text-gray-600 ml-0.5",children:"Automatically refreshes every 5 minutes."})]})}),(0,t.jsxs)("div",{className:"grid grid-cols-1 gap-4",children:[j&&(0,t.jsxs)("div",{className:"p-2 bg-blue-600 items-center text-blue-100 leading-none lg:rounded-full flex lg:inline-flex",role:"alert",children:[(0,t.jsx)("span",{className:"flex rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-bold mr-3",children:"INFO"}),(0,t.jsx)("span",{className:"font-semibold mr-2 text-left flex-auto",children:"Refreshing activity data"}),(0,t.jsxs)("div",{role:"status",children:[(0,t.jsxs)("svg",{"aria-hidden":"true",className:"w-4 h-4 mr-2 text-white animate-spin dark:text-gray-600 fill-white",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,t.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,t.jsx)("span",{className:"sr-only",children:"Loading..."})]})]}),w&&0!=w.length&&(0,t.jsxs)("div",{className:"p-2 bg-red-600 items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex",role:"alert",children:[(0,t.jsx)("span",{className:"flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3",children:"ERROR"}),(0,t.jsx)("span",{className:"font-semibold mr-2 text-left flex-auto",children:w})]})]}),(0,t.jsx)("h1",{className:"text-xl font-semibold mb-2",children:"Activities (last week)"}),(0,t.jsxs)("section",{className:"grid md:grid-cols-2 xl:grid-cols-4 gap-6",children:[(0,t.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg",children:[(0,t.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6",children:(0,t.jsx)(i.XNc,{size:"2rem"})}),(0,t.jsxs)("div",{children:[!b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:"---"}),b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:u.walking.all.length}),(0,t.jsx)("span",{className:"block text-gray-500",children:"Walking"})]})]}),(0,t.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg",children:[(0,t.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6",children:(0,t.jsx)(r.EaM,{size:"2rem"})}),(0,t.jsxs)("div",{children:[!b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:"---"}),b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:u.running.all.length}),(0,t.jsx)("span",{className:"block text-gray-500",children:"Running"})]})]}),(0,t.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg",children:[(0,t.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6",children:(0,t.jsx)(c.iEX,{size:"2rem"})}),(0,t.jsxs)("div",{children:[!b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:"---"}),b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:u.cycling.all.length}),(0,t.jsx)("span",{className:"block text-gray-500",children:"Cycling"})]})]}),(0,t.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg",children:[(0,t.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6",children:(0,t.jsx)(d.Kse,{size:"2rem"})}),(0,t.jsxs)("div",{children:[!b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:"---"}),b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:u.walking.all.length+u.running.all.length+u.cycling.all.length}),(0,t.jsx)("span",{className:"block text-gray-500",children:"All activities"})]})]})]}),(0,t.jsx)("section",{className:"grid md:grid-cols-2 xl:grid-cols-1 xl:grid-rows-1 xl:grid-flow-col gap-6",children:(0,t.jsxs)("div",{className:"flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg",children:[(0,t.jsx)("div",{className:"px-6 py-5 font-semibold border-b border-gray-100",children:"Activity chart (last week)"}),(0,t.jsx)("div",{className:"p-4 flex-grow",children:(0,t.jsxs)("div",{className:"flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-white border-2 border-gray-200 border-dashed rounded-md",children:[(0,t.jsx)("span",{style:{display:b?"none":"block"},children:"Loading activity chart..."}),(0,t.jsx)("canvas",{id:"myChart",style:{display:b?"block":"none"}})]})})]})}),(0,t.jsx)("h1",{className:"text-xl font-semibold mb-2",children:"Measurements"}),(0,t.jsxs)("section",{className:"grid md:grid-cols-2 xl:grid-cols-2 gap-6",children:[(0,t.jsxs)("div",{className:"flex items-end justify-between p-8 bg-white shadow rounded-lg",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"block text-2xl font-bold mb-4",children:"Height"}),(0,t.jsx)("label",{htmlFor:"large-input-height",className:"block mb-2 text-sm font-medium text-gray-900",children:"Please input your height (m):"}),(0,t.jsx)("input",{type:"text",id:"large-input-height",className:"block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500",value:s,onChange:e=>{l(e.target.value)}})]}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{onClick:N,className:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-2 border border-gray-400 rounded shadow",children:"Refresh"})})]}),(0,t.jsxs)("div",{className:"flex items-end justify-between p-8 bg-white shadow rounded-lg",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"block text-2xl font-bold mb-4",children:"Weight"}),(0,t.jsx)("label",{htmlFor:"large-input-weight",className:"block mb-2 text-sm font-medium text-gray-900",children:"Please input your weight (kg):"}),(0,t.jsx)("input",{type:"text",id:"large-input-weight",className:"w-auto p-4 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500",value:a,onChange:e=>{o(e.target.value)}})]}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{onClick:N,className:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 my-2 border border-gray-400 rounded shadow",children:"Refresh"})})]})]}),(0,t.jsx)("h1",{className:"text-xl font-semibold mb-2",children:"Calories (last week)"}),(0,t.jsxs)("section",{className:"grid md:grid-cols-2 xl:grid-cols-2 gap-6",children:[(0,t.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg",children:[(0,t.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6",children:(0,t.jsx)(i.XNc,{size:"2rem"})}),(0,t.jsxs)("div",{children:[!b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:"---"}),b&&(0,t.jsxs)("span",{className:"block text-2xl font-bold",children:[u.walking.total_calories.toFixed(2)," ","kcal (",u.walking.total_steps," ","steps)"]}),(0,t.jsx)("span",{className:"block text-gray-500",children:"Walking"})]})]}),(0,t.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg",children:[(0,t.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6",children:(0,t.jsx)(r.EaM,{size:"2rem"})}),(0,t.jsxs)("div",{children:[!b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:"---"}),b&&(0,t.jsxs)("span",{className:"block text-2xl font-bold",children:[u.running.total_calories.toFixed(2)," ","kcal (",u.running.total_steps," ","steps)"]}),(0,t.jsx)("span",{className:"block text-gray-500",children:"Running"})]})]}),(0,t.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg",children:[(0,t.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6",children:(0,t.jsx)(c.iEX,{size:"2rem"})}),(0,t.jsxs)("div",{children:[!b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:"---"}),b&&(0,t.jsxs)("span",{className:"inline-block text-2xl font-bold",children:[u.cycling.total_calories.toFixed(2)," ","kcal (",u.cycling.total_steps," ","steps)"]}),(0,t.jsx)("span",{className:"block text-gray-500",children:"Cycling"})]})]}),(0,t.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg",children:[(0,t.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6",children:(0,t.jsx)(d.Kse,{size:"2rem"})}),(0,t.jsxs)("div",{children:[!b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:"---"}),b&&(0,t.jsxs)("span",{className:"block text-2xl font-bold",children:[(u.walking.total_calories+u.running.total_calories+u.cycling.total_calories).toFixed(2)," ","kcal (",u.walking.total_steps+u.running.total_steps+u.cycling.total_steps," ","steps)"]}),(0,t.jsx)("span",{className:"block text-gray-500",children:"All activities"})]})]})]}),(0,t.jsx)("h1",{className:"text-xl font-semibold mb-2",children:"Distances (last week)"}),(0,t.jsxs)("section",{className:"grid md:grid-cols-2 xl:grid-cols-2 gap-6",children:[(0,t.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg",children:[(0,t.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6",children:(0,t.jsx)(i.XNc,{size:"2rem"})}),(0,t.jsxs)("div",{children:[!b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:"---"}),b&&(0,t.jsxs)("span",{className:"block text-2xl font-bold",children:[u.walking.total_distance.toFixed(2)," ","m"]}),(0,t.jsx)("span",{className:"block text-gray-500",children:"Walking"})]})]}),(0,t.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg",children:[(0,t.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6",children:(0,t.jsx)(r.EaM,{size:"2rem"})}),(0,t.jsxs)("div",{children:[!b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:"---"}),b&&(0,t.jsxs)("span",{className:"block text-2xl font-bold",children:[u.running.total_distance.toFixed(2)," ","m"]}),(0,t.jsx)("span",{className:"block text-gray-500",children:"Running"})]})]}),(0,t.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg",children:[(0,t.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6",children:(0,t.jsx)(c.iEX,{size:"2rem"})}),(0,t.jsxs)("div",{children:[!b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:"---"}),b&&(0,t.jsxs)("span",{className:"inline-block text-2xl font-bold",children:[u.cycling.total_distance.toFixed(2)," ","m"]}),(0,t.jsx)("span",{className:"block text-gray-500",children:"Cycling"})]})]}),(0,t.jsxs)("div",{className:"flex items-center p-8 bg-white shadow rounded-lg",children:[(0,t.jsx)("div",{className:"inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6",children:(0,t.jsx)(d.Kse,{size:"2rem"})}),(0,t.jsxs)("div",{children:[!b&&(0,t.jsx)("span",{className:"block text-2xl font-bold",children:"---"}),b&&(0,t.jsxs)("span",{className:"block text-2xl font-bold",children:[(u.walking.total_distance+u.running.total_distance+u.cycling.total_distance).toFixed(2)," ","m"]}),(0,t.jsx)("span",{className:"block text-gray-500",children:"All activities"})]})]})]})]})})};var g=l(6388);function b(){return(0,t.jsx)(g.Z,{title:"STM Activity Tracker: Dashboard",children:(0,t.jsx)(u,{})})}}},function(e){e.O(0,[13,445,937,260,556,698,885,907,831,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);