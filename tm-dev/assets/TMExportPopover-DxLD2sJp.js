import{c as X,r as x,j as s,P as z,C as G,a as K,S as M,b as k,L as I,T as Q,d as L,e as Y,f as A,g as P,h as O,i as _,k as Z,B as V,J as $}from"./index-BCoAgi16.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=X("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),D=(()=>{if(typeof self>"u")return!1;if("top"in self&&self!==top)try{top.window.document._=0}catch{return!1}return"showOpenFilePicker"in self})();D?Promise.resolve().then(function(){return ne}):Promise.resolve().then(function(){return de});D?Promise.resolve().then(function(){return le}):Promise.resolve().then(function(){return fe});const ee=D?Promise.resolve().then(function(){return oe}):Promise.resolve().then(function(){return me});async function te(...e){return(await ee).default(...e)}const se=async e=>{const r=await e.getFile();return r.handle=e,r};var re=async(e=[{}])=>{Array.isArray(e)||(e=[e]);const r=[];e.forEach((a,u)=>{r[u]={description:a.description||"Files",accept:{}},a.mimeTypes?a.mimeTypes.map(o=>{r[u].accept[o]=a.extensions||[]}):r[u].accept["*/*"]=a.extensions||[]});const i=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:r,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),n=await Promise.all(i.map(se));return e[0].multiple?n:n[0]},ne={__proto__:null,default:re};function b(e){function r(i){if(Object(i)!==i)return Promise.reject(new TypeError(i+" is not an object."));var n=i.done;return Promise.resolve(i.value).then(function(a){return{value:a,done:n}})}return b=function(i){this.s=i,this.n=i.next},b.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(i){var n=this.s.return;return n===void 0?Promise.resolve({value:i,done:!0}):r(n.apply(this.s,arguments))},throw:function(i){var n=this.s.return;return n===void 0?Promise.reject(i):r(n.apply(this.s,arguments))}},new b(e)}const J=async(e,r,i=e.name,n)=>{const a=[],u=[];var o,f=!1,c=!1;try{for(var m,w=function(p){var h,y,j,g=2;for(typeof Symbol<"u"&&(y=Symbol.asyncIterator,j=Symbol.iterator);g--;){if(y&&(h=p[y])!=null)return h.call(p);if(j&&(h=p[j])!=null)return new b(h.call(p));y="@@asyncIterator",j="@@iterator"}throw new TypeError("Object is not async iterable")}(e.values());f=!(m=await w.next()).done;f=!1){const p=m.value,h=`${i}/${p.name}`;p.kind==="file"?u.push(p.getFile().then(y=>(y.directoryHandle=e,y.handle=p,Object.defineProperty(y,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>h})))):p.kind!=="directory"||!r||n&&n(p)||a.push(J(p,r,h,n))}}catch(p){c=!0,o=p}finally{try{f&&w.return!=null&&await w.return()}finally{if(c)throw o}}return[...(await Promise.all(a)).flat(),...await Promise.all(u)]};var ae=async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";const r=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await(await r.values()).next()).done?[r]:J(r,e.recursive,void 0,e.skipDirectory)},le={__proto__:null,default:ae},ie=async(e,r=[{}],i=null,n=!1,a=null)=>{Array.isArray(r)||(r=[r]),r[0].fileName=r[0].fileName||"Untitled";const u=[];let o=null;if(e instanceof Blob&&e.type?o=e.type:e.headers&&e.headers.get("content-type")&&(o=e.headers.get("content-type")),r.forEach((m,w)=>{u[w]={description:m.description||"Files",accept:{}},m.mimeTypes?(w===0&&o&&m.mimeTypes.push(o),m.mimeTypes.map(p=>{u[w].accept[p]=m.extensions||[]})):o?u[w].accept[o]=m.extensions||[]:u[w].accept["*/*"]=m.extensions||[]}),i)try{await i.getFile()}catch(m){if(i=null,n)throw m}const f=i||await window.showSaveFilePicker({suggestedName:r[0].fileName,id:r[0].id,startIn:r[0].startIn,types:u,excludeAcceptAllOption:r[0].excludeAcceptAllOption||!1});!i&&a&&a(f);const c=await f.createWritable();return"stream"in e?(await e.stream().pipeTo(c),f):"body"in e?(await e.body.pipeTo(c),f):(await c.write(await e),await c.close(),f)},oe={__proto__:null,default:ie},ce=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((r,i)=>{const n=document.createElement("input");n.type="file";const a=[...e.map(c=>c.mimeTypes||[]),...e.map(c=>c.extensions||[])].join();n.multiple=e[0].multiple||!1,n.accept=a||"",n.style.display="none",document.body.append(n);const u=c=>{typeof o=="function"&&o(),r(c)},o=e[0].legacySetup&&e[0].legacySetup(u,()=>o(i),n),f=()=>{window.removeEventListener("focus",f),n.remove()};n.addEventListener("click",()=>{window.addEventListener("focus",f)}),n.addEventListener("change",()=>{window.removeEventListener("focus",f),n.remove(),u(n.multiple?Array.from(n.files):n.files[0])}),"showPicker"in HTMLInputElement.prototype?n.showPicker():n.click()})),de={__proto__:null,default:ce},ue=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((r,i)=>{const n=document.createElement("input");n.type="file",n.webkitdirectory=!0;const a=o=>{typeof u=="function"&&u(),r(o)},u=e[0].legacySetup&&e[0].legacySetup(a,()=>u(i),n);n.addEventListener("change",()=>{let o=Array.from(n.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(o=o.filter(f=>f.webkitRelativePath.split("/").every(c=>!e[0].skipDirectory({name:c,kind:"directory"})))):o=o.filter(f=>f.webkitRelativePath.split("/").length===2),a(o)}),"showPicker"in HTMLInputElement.prototype?n.showPicker():n.click()})),fe={__proto__:null,default:ue},pe=async(e,r={})=>{Array.isArray(r)&&(r=r[0]);const i=document.createElement("a");let n=e;"body"in e&&(n=await async function(o,f){const c=o.getReader(),m=new ReadableStream({start:h=>async function y(){return c.read().then(({done:j,value:g})=>{if(!j)return h.enqueue(g),y();h.close()})}()}),w=new Response(m),p=await w.blob();return c.releaseLock(),new Blob([p],{type:f})}(e.body,e.headers.get("content-type"))),i.download=r.fileName||"Untitled",i.href=URL.createObjectURL(await n);const a=()=>{typeof u=="function"&&u()},u=r.legacySetup&&r.legacySetup(a,()=>u(),i);return i.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(i.href),3e4),a()}),i.click(),null},me={__proto__:null,default:pe};const R="threat_models_export.json",he=async e=>{try{const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),i=await te(r,{fileName:R,extensions:[".json"]});return(i==null?void 0:i.name)||R}catch(r){throw console.error("Error downloading file:",r),r}};function we({threatModels:e,setThreatModels:r,selectedModelId:i,setSelectedModelId:n}){const[a,u]=x.useState({}),[o,f]=x.useState(()=>e.reduce((t,l)=>({...t,[l.id]:!1}),{})),[c,m]=x.useState(!1),[w,p]=x.useState(!1),[h,y]=x.useState(!0),[j,g]=x.useState(!1),[T,E]=x.useState(!1);x.useEffect(()=>{const t=e.reduce((l,d)=>(l[d.id]=!0,l),{});u(t)},[]),x.useEffect(()=>{if(!w)return;const t={...o};Object.keys(a).forEach(l=>{a[l]&&(t[l]=c)}),f(t),p(!1)},[c,a]),x.useEffect(()=>{f(e.reduce((t,l)=>({...t,[l.id]:!1}),{}))},[e]),x.useEffect(()=>{if(!j)return;const t={...a},l={...o};Object.keys(a).forEach(d=>{t[d]=h,h||(l[d]=!1)}),u(t),f(l),g(!1)},[h]),x.useEffect(()=>{if(h||T)return;Object.values(a).every(l=>l)&&(g(!1),y(!0))},[a,h]),x.useEffect(()=>{T&&E(!1)},[a]),x.useEffect(()=>{Object.values(a).some(l=>l)||m(!1)},[a]),x.useEffect(()=>{if(c)return;const t=Object.entries(a).filter(([,d])=>d).every(([d])=>o[d]),l=Object.values(a).some(d=>d);t&&l&&(p(!1),m(!0))},[o,a,c]),x.useEffect(()=>{Object.entries(a).some(([l,d])=>d&&!o[l])&&c&&(p(!1),m(!1))},[a,o]);const S=(t,l)=>{try{const d=localStorage.getItem(t);return d?JSON.parse(d):l}catch(d){return console.error(`Error parsing JSON for key ${t}:`,d),l}},H=async()=>{const t={};e.forEach(l=>{a[l.id]&&(t[l.id]={model:l,drawingElements:S(`${l.id}-drawingelements`,[]),systemModelData:S(`${l.id}-systemModelData`,{}),threatTree:S(`${l.id}-threattree`,[])})});try{const l=await he(t);if($.success(`${Object.keys(t).length} models exported successfully, filename: ${l}`),c||Object.values(o).some(d=>d)){e.forEach(v=>{(c&&a[v.id]||o[v.id])&&[`${v.id}-drawingelements`,`${v.id}-systemModelData`,`${v.id}-threattree`].forEach(N=>{const C=localStorage.getItem(N);C&&(localStorage.setItem(`removed-${N}`,C),localStorage.removeItem(N))})});const d=e.filter(v=>!(c&&a[v.id]||o[v.id]));localStorage.setItem("threatModels",JSON.stringify(d)),r(d),i&&!d.some(v=>v.id===i)&&n(null)}}catch(l){console.error("Error exporting models:",l),$.error("Models were not exported. No models were deleted.")}},U=t=>{E(!0),p(!0),m(t)},B=(t,l)=>{f(d=>({...d,[t]:l})),c&&!l&&(p(!1),m(!1))},q=t=>{E(!0),g(!0),y(t)},W=(t,l)=>{u(d=>({...d,[t]:l})),h&&!l&&(g(!1),y(!1))};return s.jsx(z,{className:"w-[400px] max-h-[80vh] overflow-y-auto",align:"start",side:"bottom",children:s.jsxs("div",{className:"space-y-4",children:[s.jsx(G,{children:s.jsxs(K,{className:"flex items-center space-x-4 pt-6",children:[s.jsx(F,{className:"h-8 w-8 text-muted-foreground flex-shrink-0"}),s.jsx("div",{className:"text-sm text-muted-foreground",children:"Select threat models currently in the browser's local storage to be saved as a file on your computer. One or more threat models will be bundled in within the exported file."})]})}),s.jsx(M,{className:"my-2"}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(F,{className:"h-4 w-4 text-muted-foreground"}),s.jsx(k,{id:"export-all",checked:h,onCheckedChange:q}),s.jsx(I,{htmlFor:"export-all",className:"text-sm font-medium",children:"Export all threat models"})]}),s.jsxs("div",{className:"flex items-center space-x-2",children:[s.jsx(Q,{className:"h-4 w-4 text-muted-foreground"}),s.jsx(k,{id:"delete-all",checked:c,onCheckedChange:U,disabled:!Object.values(a).some(t=>t)}),s.jsx(I,{htmlFor:"delete-all",className:L("text-sm font-medium",!Object.values(a).some(t=>t)&&"text-muted-foreground"),children:"Select all models for deletion"})]})]}),s.jsx(M,{className:"my-4"}),s.jsxs("div",{className:"grid grid-cols-[1fr,50px,50px] gap-2 px-4 text-sm font-medium text-muted-foreground",children:[s.jsx("div",{children:"Threat Model"}),s.jsx("div",{className:"text-center",children:"Delete"}),s.jsx("div",{className:"text-center",children:"Export"})]}),s.jsx(Y,{className:L("w-full rounded-md border",e.length===0?"h-[80px]":"h-[200px]"),children:e.length===0?s.jsx("div",{className:"h-full flex items-center justify-center text-sm text-muted-foreground p-4",children:"No threat models found in browser's local storage"}):s.jsx("div",{className:"space-y-2 p-4",children:e.map(t=>s.jsxs("div",{className:"grid grid-cols-[1fr,50px,50px] gap-2 items-center py-2 border-b last:border-b-0",children:[s.jsx(A,{children:s.jsxs(P,{children:[s.jsx(O,{asChild:!0,children:s.jsxs("div",{className:"truncate",children:[s.jsx("span",{className:"font-medium",children:t.name}),t.description&&s.jsx("div",{className:"text-muted-foreground text-sm",children:t.description})]})}),s.jsx(_,{children:s.jsxs("p",{children:[t.name,t.description&&` - ${t.description}`]})})]})}),s.jsx(A,{children:s.jsxs(P,{children:[s.jsx(O,{asChild:!0,children:s.jsx("div",{className:"flex justify-center",children:s.jsx(Z,{id:`delete-${t.id}`,checked:o[t.id],onCheckedChange:l=>B(t.id,l),disabled:!a[t.id]})})}),s.jsx(_,{children:s.jsx("p",{children:"Delete this threat model from browser local storage after export"})})]})}),s.jsx(A,{children:s.jsxs(P,{children:[s.jsx(O,{asChild:!0,children:s.jsx("div",{className:"flex justify-center",children:s.jsx(k,{id:`export-${t.id}`,checked:a[t.id],onCheckedChange:l=>{W(t.id,l),l||f(d=>({...d,[t.id]:!1}))}})})}),s.jsx(_,{children:s.jsx("p",{children:"Select this threat model to be exported in file"})})]})})]},t.id))})}),s.jsx(V,{onClick:H,className:"w-full",disabled:!Object.values(a).some(t=>t),children:"Export Selected Models"})]})})}export{we as default};
