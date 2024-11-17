import{c as G,r as x,j as n,P as K,a as T,b as Q,C as V,d as Y,S as N,L as M,T as Z,e as ee,f as A,g as k,h as P,i as O,k as te,B as re,J as L}from"./index-DIvKE4Z3.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=G("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);var se="Separator",$="horizontal",ne=["horizontal","vertical"],F=x.forwardRef((e,r)=>{const{decorative:o,orientation:s=$,...a}=e,d=ae(s)?s:$,f=o?{role:"none"}:{"aria-orientation":d==="vertical"?d:void 0,role:"separator"};return n.jsx(K.div,{"data-orientation":d,...f,...a,ref:r})});F.displayName=se;function ae(e){return ne.includes(e)}var J=F;const _=x.forwardRef(({className:e,orientation:r="horizontal",decorative:o=!0,...s},a)=>n.jsx(J,{ref:a,decorative:o,orientation:r,className:T("shrink-0 bg-border",r==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",e),...s}));_.displayName=J.displayName;const D=(()=>{if(typeof self>"u")return!1;if("top"in self&&self!==top)try{top.window.document._=0}catch{return!1}return"showOpenFilePicker"in self})();D?Promise.resolve().then(function(){return de}):Promise.resolve().then(function(){return xe});D?Promise.resolve().then(function(){return fe}):Promise.resolve().then(function(){return ve});const ie=D?Promise.resolve().then(function(){return me}):Promise.resolve().then(function(){return je});async function oe(...e){return(await ie).default(...e)}const le=async e=>{const r=await e.getFile();return r.handle=e,r};var ce=async(e=[{}])=>{Array.isArray(e)||(e=[e]);const r=[];e.forEach((a,d)=>{r[d]={description:a.description||"Files",accept:{}},a.mimeTypes?a.mimeTypes.map(l=>{r[d].accept[l]=a.extensions||[]}):r[d].accept["*/*"]=a.extensions||[]});const o=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:r,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),s=await Promise.all(o.map(le));return e[0].multiple?s:s[0]},de={__proto__:null,default:ce};function g(e){function r(o){if(Object(o)!==o)return Promise.reject(new TypeError(o+" is not an object."));var s=o.done;return Promise.resolve(o.value).then(function(a){return{value:a,done:s}})}return g=function(o){this.s=o,this.n=o.next},g.prototype={s:null,n:null,next:function(){return r(this.n.apply(this.s,arguments))},return:function(o){var s=this.s.return;return s===void 0?Promise.resolve({value:o,done:!0}):r(s.apply(this.s,arguments))},throw:function(o){var s=this.s.return;return s===void 0?Promise.reject(o):r(s.apply(this.s,arguments))}},new g(e)}const H=async(e,r,o=e.name,s)=>{const a=[],d=[];var l,f=!1,u=!1;try{for(var m,v=function(p){var h,y,w,j=2;for(typeof Symbol<"u"&&(y=Symbol.asyncIterator,w=Symbol.iterator);j--;){if(y&&(h=p[y])!=null)return h.call(p);if(w&&(h=p[w])!=null)return new g(h.call(p));y="@@asyncIterator",w="@@iterator"}throw new TypeError("Object is not async iterable")}(e.values());f=!(m=await v.next()).done;f=!1){const p=m.value,h=`${o}/${p.name}`;p.kind==="file"?d.push(p.getFile().then(y=>(y.directoryHandle=e,y.handle=p,Object.defineProperty(y,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>h})))):p.kind!=="directory"||!r||s&&s(p)||a.push(H(p,r,h,s))}}catch(p){u=!0,l=p}finally{try{f&&v.return!=null&&await v.return()}finally{if(u)throw l}}return[...(await Promise.all(a)).flat(),...await Promise.all(d)]};var ue=async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";const r=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await(await r.values()).next()).done?[r]:H(r,e.recursive,void 0,e.skipDirectory)},fe={__proto__:null,default:ue},pe=async(e,r=[{}],o=null,s=!1,a=null)=>{Array.isArray(r)||(r=[r]),r[0].fileName=r[0].fileName||"Untitled";const d=[];let l=null;if(e instanceof Blob&&e.type?l=e.type:e.headers&&e.headers.get("content-type")&&(l=e.headers.get("content-type")),r.forEach((m,v)=>{d[v]={description:m.description||"Files",accept:{}},m.mimeTypes?(v===0&&l&&m.mimeTypes.push(l),m.mimeTypes.map(p=>{d[v].accept[p]=m.extensions||[]})):l?d[v].accept[l]=m.extensions||[]:d[v].accept["*/*"]=m.extensions||[]}),o)try{await o.getFile()}catch(m){if(o=null,s)throw m}const f=o||await window.showSaveFilePicker({suggestedName:r[0].fileName,id:r[0].id,startIn:r[0].startIn,types:d,excludeAcceptAllOption:r[0].excludeAcceptAllOption||!1});!o&&a&&a(f);const u=await f.createWritable();return"stream"in e?(await e.stream().pipeTo(u),f):"body"in e?(await e.body.pipeTo(u),f):(await u.write(await e),await u.close(),f)},me={__proto__:null,default:pe},he=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((r,o)=>{const s=document.createElement("input");s.type="file";const a=[...e.map(u=>u.mimeTypes||[]),...e.map(u=>u.extensions||[])].join();s.multiple=e[0].multiple||!1,s.accept=a||"",s.style.display="none",document.body.append(s);const d=u=>{typeof l=="function"&&l(),r(u)},l=e[0].legacySetup&&e[0].legacySetup(d,()=>l(o),s),f=()=>{window.removeEventListener("focus",f),s.remove()};s.addEventListener("click",()=>{window.addEventListener("focus",f)}),s.addEventListener("change",()=>{window.removeEventListener("focus",f),s.remove(),d(s.multiple?Array.from(s.files):s.files[0])}),"showPicker"in HTMLInputElement.prototype?s.showPicker():s.click()})),xe={__proto__:null,default:he},ye=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((r,o)=>{const s=document.createElement("input");s.type="file",s.webkitdirectory=!0;const a=l=>{typeof d=="function"&&d(),r(l)},d=e[0].legacySetup&&e[0].legacySetup(a,()=>d(o),s);s.addEventListener("change",()=>{let l=Array.from(s.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(l=l.filter(f=>f.webkitRelativePath.split("/").every(u=>!e[0].skipDirectory({name:u,kind:"directory"})))):l=l.filter(f=>f.webkitRelativePath.split("/").length===2),a(l)}),"showPicker"in HTMLInputElement.prototype?s.showPicker():s.click()})),ve={__proto__:null,default:ye},we=async(e,r={})=>{Array.isArray(r)&&(r=r[0]);const o=document.createElement("a");let s=e;"body"in e&&(s=await async function(l,f){const u=l.getReader(),m=new ReadableStream({start:h=>async function y(){return u.read().then(({done:w,value:j})=>{if(!w)return h.enqueue(j),y();h.close()})}()}),v=new Response(m),p=await v.blob();return u.releaseLock(),new Blob([p],{type:f})}(e.body,e.headers.get("content-type"))),o.download=r.fileName||"Untitled",o.href=URL.createObjectURL(await s);const a=()=>{typeof d=="function"&&d()},d=r.legacySetup&&r.legacySetup(a,()=>d(),o);return o.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(o.href),3e4),a()}),o.click(),null},je={__proto__:null,default:we};const U="threat_models_export.json",ge=async e=>{try{const r=new Blob([JSON.stringify(e,null,2)],{type:"application/json"});await oe(r,{fileName:U,extensions:[".json"]})}catch(r){throw console.error("Error downloading file:",r),r}};function Se({threatModels:e,setThreatModels:r,selectedModelId:o,setSelectedModelId:s}){const[a,d]=x.useState({}),[l,f]=x.useState(()=>e.reduce((t,i)=>({...t,[i.id]:!1}),{})),[u,m]=x.useState(!1),[v,p]=x.useState(!1),[h,y]=x.useState(!0),[w,j]=x.useState(!1),[C,b]=x.useState(!1);x.useEffect(()=>{const t=e.reduce((i,c)=>(i[c.id]=!0,i),{});d(t)},[]),x.useEffect(()=>{if(!v)return;const t={...l};Object.keys(a).forEach(i=>{a[i]&&(t[i]=u)}),f(t),p(!1)},[u,a]),x.useEffect(()=>{f(e.reduce((t,i)=>({...t,[i.id]:!1}),{}))},[e]),x.useEffect(()=>{if(!w)return;const t={...a},i={...l};Object.keys(a).forEach(c=>{t[c]=h,h||(i[c]=!1)}),d(t),f(i),j(!1)},[h]),x.useEffect(()=>{if(h||C)return;Object.values(a).every(i=>i)&&(j(!1),y(!0))},[a,h]),x.useEffect(()=>{C&&b(!1)},[a]),x.useEffect(()=>{Object.values(a).some(i=>i)||m(!1)},[a]),x.useEffect(()=>{if(u)return;const t=Object.entries(a).filter(([,c])=>c).every(([c])=>l[c]),i=Object.values(a).some(c=>c);t&&i&&(p(!1),m(!0))},[l,a,u]),x.useEffect(()=>{Object.entries(a).some(([i,c])=>c&&!l[i])&&u&&(p(!1),m(!1))},[a,l]);const E=(t,i)=>{try{const c=localStorage.getItem(t);return c?JSON.parse(c):i}catch(c){return console.error(`Error parsing JSON for key ${t}:`,c),i}},B=async()=>{const t={};e.forEach(i=>{a[i.id]&&(t[i.id]={model:i,drawingElements:E(`${i.id}-drawingelements`,[]),systemModelData:E(`${i.id}-systemModelData`,{}),threatTree:E(`${i.id}-threattree`,[])})});try{if(await ge(t),L.success(`${Object.keys(t).length} models exported successfully, filename: ${U}`),u||Object.values(l).some(i=>i)){e.forEach(c=>{(u&&a[c.id]||l[c.id])&&[`${c.id}-drawingelements`,`${c.id}-systemModelData`,`${c.id}-threattree`].forEach(S=>{const I=localStorage.getItem(S);I&&(localStorage.setItem(`removed-${S}`,I),localStorage.removeItem(S))})});const i=e.filter(c=>!(u&&a[c.id]||l[c.id]));localStorage.setItem("threatModels",JSON.stringify(i)),r(i),o&&!i.some(c=>c.id===o)&&s(null)}}catch(i){console.error("Error exporting models:",i),L.error("Models were not exported. No models were deleted.")}},z=t=>{b(!0),p(!0),m(t)},q=(t,i)=>{f(c=>({...c,[t]:i})),u&&!i&&(p(!1),m(!1))},W=t=>{b(!0),j(!0),y(t)},X=(t,i)=>{d(c=>({...c,[t]:i})),h&&!i&&(j(!1),y(!1))};return n.jsx(Q,{className:"w-[400px] max-h-[80vh] overflow-y-auto",align:"start",side:"bottom",children:n.jsxs("div",{className:"space-y-4",children:[n.jsx(V,{children:n.jsxs(Y,{className:"flex items-center space-x-4 pt-6",children:[n.jsx(R,{className:"h-8 w-8 text-muted-foreground flex-shrink-0"}),n.jsx("div",{className:"text-sm text-muted-foreground",children:"Select threat models currently in the browser's local storage to be saved as a file on your computer. One or more threat models will be bundled in within the exported file."})]})}),n.jsx(_,{className:"my-2"}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"flex items-center space-x-2",children:[n.jsx(R,{className:"h-4 w-4 text-muted-foreground"}),n.jsx(N,{id:"export-all",checked:h,onCheckedChange:W}),n.jsx(M,{htmlFor:"export-all",className:"text-sm font-medium",children:"Export all threat models"})]}),n.jsxs("div",{className:"flex items-center space-x-2",children:[n.jsx(Z,{className:"h-4 w-4 text-muted-foreground"}),n.jsx(N,{id:"delete-all",checked:u,onCheckedChange:z,disabled:!Object.values(a).some(t=>t)}),n.jsx(M,{htmlFor:"delete-all",className:T("text-sm font-medium",!Object.values(a).some(t=>t)&&"text-muted-foreground"),children:"Select all models for deletion"})]})]}),n.jsx(_,{className:"my-4"}),n.jsxs("div",{className:"grid grid-cols-[1fr,50px,50px] gap-2 px-4 text-sm font-medium text-muted-foreground",children:[n.jsx("div",{children:"Threat Model"}),n.jsx("div",{className:"text-center",children:"Delete"}),n.jsx("div",{className:"text-center",children:"Export"})]}),n.jsx(ee,{className:T("w-full rounded-md border",e.length===0?"h-[80px]":"h-[200px]"),children:e.length===0?n.jsx("div",{className:"h-full flex items-center justify-center text-sm text-muted-foreground p-4",children:"No threat models found in browser's local storage"}):n.jsx("div",{className:"space-y-2 p-4",children:e.map(t=>n.jsxs("div",{className:"grid grid-cols-[1fr,50px,50px] gap-2 items-center py-2 border-b last:border-b-0",children:[n.jsx(A,{children:n.jsxs(k,{children:[n.jsx(P,{asChild:!0,children:n.jsxs("div",{className:"truncate",children:[n.jsx("span",{className:"font-medium",children:t.name}),t.description&&n.jsx("div",{className:"text-muted-foreground text-sm",children:t.description})]})}),n.jsx(O,{children:n.jsxs("p",{children:[t.name,t.description&&` - ${t.description}`]})})]})}),n.jsx(A,{children:n.jsxs(k,{children:[n.jsx(P,{asChild:!0,children:n.jsx("div",{className:"flex justify-center",children:n.jsx(te,{id:`delete-${t.id}`,checked:l[t.id],onCheckedChange:i=>q(t.id,i),disabled:!a[t.id]})})}),n.jsx(O,{children:n.jsx("p",{children:"Delete this threat model from browser local storage after export"})})]})}),n.jsx(A,{children:n.jsxs(k,{children:[n.jsx(P,{asChild:!0,children:n.jsx("div",{className:"flex justify-center",children:n.jsx(N,{id:`export-${t.id}`,checked:a[t.id],onCheckedChange:i=>{X(t.id,i),i||f(c=>({...c,[t.id]:!1}))}})})}),n.jsx(O,{children:n.jsx("p",{children:"Select this threat model to be exported in file"})})]})})]},t.id))})}),n.jsx(re,{onClick:B,className:"w-full",disabled:!Object.values(a).some(t=>t),children:"Export Selected Models"})]})})}export{Se as default};
