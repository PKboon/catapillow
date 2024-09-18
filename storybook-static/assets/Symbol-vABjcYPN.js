import{j as z,c as Ne,a as Ae}from"./index-DUMt_cWD.js";import{r as I}from"./index-CDs2tPxN.js";const ye=Object.freeze({left:0,top:0,width:16,height:16}),_=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),W=Object.freeze({...ye,..._}),B=Object.freeze({...W,body:"",hidden:!1});function _e(e,t){const o={};!e.hFlip!=!t.hFlip&&(o.hFlip=!0),!e.vFlip!=!t.vFlip&&(o.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(o.rotate=r),o}function oe(e,t){const o=_e(e,t);for(const r in B)r in _?r in e&&!(r in o)&&(o[r]=_[r]):r in t?o[r]=t[r]:r in e&&(o[r]=e[r]);return o}function De(e,t){const o=e.icons,r=e.aliases||Object.create(null),n=Object.create(null);function i(s){if(o[s])return n[s]=[];if(!(s in n)){n[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(n[s]=[c].concat(l))}return n[s]}return Object.keys(o).concat(Object.keys(r)).forEach(i),n}function Re(e,t,o){const r=e.icons,n=e.aliases||Object.create(null);let i={};function s(c){i=oe(r[c]||n[c],i)}return s(t),o.forEach(s),oe(e,i)}function be(e,t){const o=[];if(typeof e!="object"||typeof e.icons!="object")return o;e.not_found instanceof Array&&e.not_found.forEach(n=>{t(n,null),o.push(n)});const r=De(e);for(const n in r){const i=r[n];i&&(t(n,Re(e,n,i)),o.push(n))}return o}const E=/^[a-z0-9]+(-[a-z0-9]+)*$/,D=(e,t,o,r="")=>{const n=e.split(":");if(e.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;r=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const c=n.pop(),l=n.pop(),f={provider:n.length>0?n[0]:r,prefix:l,name:c};return t&&!N(f)?null:f}const i=n[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!N(c)?null:c}if(o&&r===""){const c={provider:r,prefix:"",name:i};return t&&!N(c,o)?null:c}return null},N=(e,t)=>e?!!((e.provider===""||e.provider.match(E))&&(t&&e.prefix===""||e.prefix.match(E))&&e.name.match(E)):!1,Ve={provider:"",aliases:{},not_found:{},...ye};function q(e,t){for(const o in t)if(o in e&&typeof e[o]!=typeof t[o])return!1;return!0}function xe(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!q(e,Ve))return null;const o=t.icons;for(const n in o){const i=o[n];if(!n.match(E)||typeof i.body!="string"||!q(i,B))return null}const r=t.aliases||Object.create(null);for(const n in r){const i=r[n],s=i.parent;if(!n.match(E)||typeof s!="string"||!o[s]&&!r[s]||!q(i,B))return null}return t}const re=Object.create(null);function ze(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function k(e,t){const o=re[e]||(re[e]=Object.create(null));return o[t]||(o[t]=ze(e,t))}function X(e,t){return xe(t)?be(t,(o,r)=>{r?e.icons[o]=r:e.missing.add(o)}):[]}function qe(e,t,o){try{if(typeof o.body=="string")return e.icons[t]={...o},!0}catch{}return!1}let O=!1;function we(e){return typeof e=="boolean"&&(O=e),O}function ie(e){const t=typeof e=="string"?D(e,!0,O):e;if(t){const o=k(t.provider,t.prefix),r=t.name;return o.icons[r]||(o.missing.has(r)?null:void 0)}}function He(e,t){const o=D(e,!0,O);if(!o)return!1;const r=k(o.provider,o.prefix);return qe(r,o.name,t)}function Be(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),O&&!t&&!e.prefix){let n=!1;return xe(e)&&(e.prefix="",be(e,(i,s)=>{s&&He(i,s)&&(n=!0)})),n}const o=e.prefix;if(!N({provider:t,prefix:o,name:"a"}))return!1;const r=k(t,o);return!!X(r,e)}const Se=Object.freeze({width:null,height:null}),Ie=Object.freeze({...Se,..._}),Qe=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Ue=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function se(e,t,o){if(t===1)return e;if(o=o||100,typeof e=="number")return Math.ceil(e*t*o)/o;if(typeof e!="string")return e;const r=e.split(Qe);if(r===null||!r.length)return e;const n=[];let i=r.shift(),s=Ue.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?n.push(i):n.push(Math.ceil(c*t*o)/o)}else n.push(i);if(i=r.shift(),i===void 0)return n.join("");s=!s}}function $e(e,t="defs"){let o="";const r=e.indexOf("<"+t);for(;r>=0;){const n=e.indexOf(">",r),i=e.indexOf("</"+t);if(n===-1||i===-1)break;const s=e.indexOf(">",i);if(s===-1)break;o+=e.slice(n+1,i).trim(),e=e.slice(0,r).trim()+e.slice(s+1)}return{defs:o,content:e}}function Ge(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Je(e,t,o){const r=$e(e);return Ge(r.defs,t+r.content+o)}const Ke=e=>e==="unset"||e==="undefined"||e==="none";function We(e,t){const o={...W,...e},r={...Ie,...t},n={left:o.left,top:o.top,width:o.width,height:o.height};let i=o.body;[o,r].forEach(b=>{const u=[],d=b.hFlip,v=b.vFlip;let x=b.rotate;d?v?x+=2:(u.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),u.push("scale(-1 1)"),n.top=n.left=0):v&&(u.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),u.push("scale(1 -1)"),n.top=n.left=0);let w;switch(x<0&&(x-=Math.floor(x/4)*4),x=x%4,x){case 1:w=n.height/2+n.top,u.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:u.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:w=n.width/2+n.left,u.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}x%2===1&&(n.left!==n.top&&(w=n.left,n.left=n.top,n.top=w),n.width!==n.height&&(w=n.width,n.width=n.height,n.height=w)),u.length&&(i=Je(i,'<g transform="'+u.join(" ")+'">',"</g>"))});const s=r.width,c=r.height,l=n.width,f=n.height;let a,p;s===null?(p=c===null?"1em":c==="auto"?f:c,a=se(p,l/f)):(a=s==="auto"?l:s,p=c===null?se(a,f/l):c==="auto"?f:c);const m={},h=(b,u)=>{Ke(u)||(m[b]=u.toString())};h("width",a),h("height",p);const y=[n.left,n.top,l,f];return m.viewBox=y.join(" "),{attributes:m,viewBox:y,body:i}}const Xe=/\sid="(\S+)"/g,Ye="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ze=0;function et(e,t=Ye){const o=[];let r;for(;r=Xe.exec(e);)o.push(r[1]);if(!o.length)return e;const n="suffix"+(Math.random()*16777216|Date.now()).toString(16);return o.forEach(i=>{const s=typeof t=="function"?t(i):t+(Ze++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+n+"$3")}),e=e.replace(new RegExp(n,"g"),""),e}const Q=Object.create(null);function tt(e,t){Q[e]=t}function U(e){return Q[e]||Q[""]}function Y(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Z=Object.create(null),j=["https://api.simplesvg.com","https://api.unisvg.com"],A=[];for(;j.length>0;)j.length===1||Math.random()>.5?A.push(j.shift()):A.push(j.pop());Z[""]=Y({resources:["https://api.iconify.design"].concat(A)});function nt(e,t){const o=Y(t);return o===null?!1:(Z[e]=o,!0)}function ee(e){return Z[e]}const ot=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let ce=ot();function rt(e,t){const o=ee(e);if(!o)return 0;let r;if(!o.maxURL)r=0;else{let n=0;o.resources.forEach(s=>{n=Math.max(n,s.length)});const i=t+".json?icons=";r=o.maxURL-n-o.path.length-i.length}return r}function it(e){return e===404}const st=(e,t,o)=>{const r=[],n=rt(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},c=0;return o.forEach((l,f)=>{c+=l.length+1,c>=n&&f>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function ct(e){if(typeof e=="string"){const t=ee(e);if(t)return t.path}return"/"}const lt=(e,t,o)=>{if(!ce){o("abort",424);return}let r=ct(t.provider);switch(t.type){case"icons":{const i=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=t.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:o("abort",400);return}let n=503;ce(e+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{o(it(s)?"abort":"next",s)});return}return n=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?o("abort",i):o("next",n)});return}setTimeout(()=>{o("success",i)})}).catch(()=>{o("next",n)})},ft={prepare:st,send:lt};function at(e){const t={loaded:[],missing:[],pending:[]},o=Object.create(null);e.sort((n,i)=>n.provider!==i.provider?n.provider.localeCompare(i.provider):n.prefix!==i.prefix?n.prefix.localeCompare(i.prefix):n.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return e.forEach(n=>{if(r.name===n.name&&r.prefix===n.prefix&&r.provider===n.provider)return;r=n;const i=n.provider,s=n.prefix,c=n.name,l=o[i]||(o[i]=Object.create(null)),f=l[s]||(l[s]=k(i,s));let a;c in f.icons?a=t.loaded:s===""||f.missing.has(c)?a=t.missing:a=t.pending;const p={provider:i,prefix:s,name:c};a.push(p)}),t}function ve(e,t){e.forEach(o=>{const r=o.loaderCallbacks;r&&(o.loaderCallbacks=r.filter(n=>n.id!==t))})}function ut(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let o=!1;const r=e.provider,n=e.prefix;t.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==n)return!0;const f=l.name;if(e.icons[f])s.loaded.push({provider:r,prefix:n,name:f});else if(e.missing.has(f))s.missing.push({provider:r,prefix:n,name:f});else return o=!0,!0;return!1}),s.pending.length!==c&&(o||ve([e],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let dt=0;function pt(e,t,o){const r=dt++,n=ve.bind(null,o,r);if(!t.pending.length)return n;const i={id:r,icons:t,callback:e,abort:n};return o.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),n}function ht(e,t=!0,o=!1){const r=[];return e.forEach(n=>{const i=typeof n=="string"?D(n,t,o):n;i&&r.push(i)}),r}var gt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function mt(e,t,o,r){const n=e.resources.length,i=e.random?Math.floor(Math.random()*n):e.index;let s;if(e.random){let g=e.resources.slice(0);for(s=[];g.length>1;){const S=Math.floor(Math.random()*g.length);s.push(g[S]),g=g.slice(0,S).concat(g.slice(S+1))}s=s.concat(g)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let l="pending",f=0,a,p=null,m=[],h=[];typeof r=="function"&&h.push(r);function y(){p&&(clearTimeout(p),p=null)}function b(){l==="pending"&&(l="aborted"),y(),m.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),m=[]}function u(g,S){S&&(h=[]),typeof g=="function"&&h.push(g)}function d(){return{startTime:c,payload:t,status:l,queriesSent:f,queriesPending:m.length,subscribe:u,abort:b}}function v(){l="failed",h.forEach(g=>{g(void 0,a)})}function x(){m.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),m=[]}function w(g,S,T){const F=S!=="success";switch(m=m.filter(C=>C!==g),l){case"pending":break;case"failed":if(F||!e.dataAfterTimeout)return;break;default:return}if(S==="abort"){a=T,v();return}if(F){a=T,m.length||(s.length?V():v());return}if(y(),x(),!e.random){const C=e.resources.indexOf(g.resource);C!==-1&&C!==e.index&&(e.index=C)}l="completed",h.forEach(C=>{C(T)})}function V(){if(l!=="pending")return;y();const g=s.shift();if(g===void 0){if(m.length){p=setTimeout(()=>{y(),l==="pending"&&(x(),v())},e.timeout);return}v();return}const S={status:"pending",resource:g,callback:(T,F)=>{w(S,T,F)}};m.push(S),f++,p=setTimeout(V,e.rotate),o(g,t,S.callback)}return setTimeout(V),d}function Ce(e){const t={...gt,...e};let o=[];function r(){o=o.filter(c=>c().status==="pending")}function n(c,l,f){const a=mt(t,c,l,(p,m)=>{r(),f&&f(p,m)});return o.push(a),a}function i(c){return o.find(l=>c(l))||null}return{query:n,find:i,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function le(){}const H=Object.create(null);function yt(e){if(!H[e]){const t=ee(e);if(!t)return;const o=Ce(t),r={config:t,redundancy:o};H[e]=r}return H[e]}function bt(e,t,o){let r,n;if(typeof e=="string"){const i=U(e);if(!i)return o(void 0,424),le;n=i.send;const s=yt(e);s&&(r=s.redundancy)}else{const i=Y(e);if(i){r=Ce(i);const s=e.resources?e.resources[0]:"",c=U(s);c&&(n=c.send)}}return!r||!n?(o(void 0,424),le):r.query(t,n,o)().abort}const fe="iconify2",M="iconify",ke=M+"-count",ae=M+"-version",Te=36e5,xt=168,wt=50;function $(e,t){try{return e.getItem(t)}catch{}}function te(e,t,o){try{return e.setItem(t,o),!0}catch{}}function ue(e,t){try{e.removeItem(t)}catch{}}function G(e,t){return te(e,ke,t.toString())}function J(e){return parseInt($(e,ke))||0}const R={local:!0,session:!0},je={local:new Set,session:new Set};let ne=!1;function St(e){ne=e}let L=typeof window>"u"?{}:window;function Ee(e){const t=e+"Storage";try{if(L&&L[t]&&typeof L[t].length=="number")return L[t]}catch{}R[e]=!1}function Pe(e,t){const o=Ee(e);if(!o)return;const r=$(o,ae);if(r!==fe){if(r){const c=J(o);for(let l=0;l<c;l++)ue(o,M+l.toString())}te(o,ae,fe),G(o,0);return}const n=Math.floor(Date.now()/Te)-xt,i=c=>{const l=M+c.toString(),f=$(o,l);if(typeof f=="string"){try{const a=JSON.parse(f);if(typeof a=="object"&&typeof a.cached=="number"&&a.cached>n&&typeof a.provider=="string"&&typeof a.data=="object"&&typeof a.data.prefix=="string"&&t(a,c))return!0}catch{}ue(o,l)}};let s=J(o);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,G(o,s)):je[e].add(c))}function Oe(){if(!ne){St(!0);for(const e in R)Pe(e,t=>{const o=t.data,r=t.provider,n=o.prefix,i=k(r,n);if(!X(i,o).length)return!1;const s=o.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function It(e,t){const o=e.lastModifiedCached;if(o&&o>=t)return o===t;if(e.lastModifiedCached=t,o)for(const r in R)Pe(r,n=>{const i=n.data;return n.provider!==e.provider||i.prefix!==e.prefix||i.lastModified===t});return!0}function vt(e,t){ne||Oe();function o(r){let n;if(!R[r]||!(n=Ee(r)))return;const i=je[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=J(n),s>=wt||!G(n,s+1))return;const c={cached:Math.floor(Date.now()/Te),provider:e.provider,data:t};return te(n,M+s.toString(),JSON.stringify(c))}t.lastModified&&!It(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),o("local")||o("session"))}function de(){}function Ct(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,ut(e)}))}function kt(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:o,prefix:r}=e,n=e.iconsToLoad;delete e.iconsToLoad;let i;if(!n||!(i=U(o)))return;i.prepare(o,r,n).forEach(c=>{bt(o,c,l=>{if(typeof l!="object")c.icons.forEach(f=>{e.missing.add(f)});else try{const f=X(e,l);if(!f.length)return;const a=e.pendingIcons;a&&f.forEach(p=>{a.delete(p)}),vt(e,l)}catch(f){console.error(f)}Ct(e)})})}))}const Tt=(e,t)=>{const o=ht(e,!0,we()),r=at(o);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,de)}),()=>{l=!1}}const n=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:f,prefix:a}=l;if(a===c&&f===s)return;s=f,c=a,i.push(k(f,a));const p=n[f]||(n[f]=Object.create(null));p[a]||(p[a]=[])}),r.pending.forEach(l=>{const{provider:f,prefix:a,name:p}=l,m=k(f,a),h=m.pendingIcons||(m.pendingIcons=new Set);h.has(p)||(h.add(p),n[f][a].push(p))}),i.forEach(l=>{const{provider:f,prefix:a}=l;n[f][a].length&&kt(l,n[f][a])}),t?pt(t,r,i):de};function jt(e,t){const o={...e};for(const r in t){const n=t[r],i=typeof n;r in Se?(n===null||n&&(i==="string"||i==="number"))&&(o[r]=n):i===typeof o[r]&&(o[r]=r==="rotate"?n%4:n)}return o}const Et=/[\s,]+/;function Pt(e,t){t.split(Et).forEach(o=>{switch(o.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Ot(e,t=0){const o=e.replace(/^-?[0-9.]*/,"");function r(n){for(;n<0;)n+=4;return n%4}if(o===""){const n=parseInt(e);return isNaN(n)?0:r(n)}else if(o!==e){let n=0;switch(o){case"%":n=25;break;case"deg":n=90}if(n){let i=parseFloat(e.slice(0,e.length-o.length));return isNaN(i)?0:(i=i/n,i%1===0?r(i):0)}}return t}function Mt(e,t){let o=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)o+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+o+">"+e+"</svg>"}function Ft(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Lt(e){return"data:image/svg+xml,"+Ft(e)}function Nt(e){return'url("'+Lt(e)+'")'}let P;function At(){try{P=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{P=null}}function _t(e){return P===void 0&&At(),P?P.createHTML(e):e}const Me={...Ie,inline:!1},Dt={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Rt={display:"inline-block"},K={backgroundColor:"currentColor"},Fe={backgroundColor:"transparent"},pe={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},he={WebkitMask:K,mask:K,background:Fe};for(const e in he){const t=he[e];for(const o in pe)t[e+o]=pe[o]}const Vt={...Me,inline:!0};function ge(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const zt=(e,t,o)=>{const r=t.inline?Vt:Me,n=jt(r,t),i=t.mode||"svg",s={},c=t.style||{},l={...i==="svg"?Dt:{}};if(o){const u=D(o,!1,!0);if(u){const d=["iconify"],v=["provider","prefix"];for(const x of v)u[x]&&d.push("iconify--"+u[x]);l.className=d.join(" ")}}for(let u in t){const d=t[u];if(d!==void 0)switch(u){case"icon":case"style":case"children":case"onLoad":case"mode":case"ssr":break;case"_ref":l.ref=d;break;case"className":l[u]=(l[u]?l[u]+" ":"")+d;break;case"inline":case"hFlip":case"vFlip":n[u]=d===!0||d==="true"||d===1;break;case"flip":typeof d=="string"&&Pt(n,d);break;case"color":s.color=d;break;case"rotate":typeof d=="string"?n[u]=Ot(d):typeof d=="number"&&(n[u]=d);break;case"ariaHidden":case"aria-hidden":d!==!0&&d!=="true"&&delete l["aria-hidden"];break;default:r[u]===void 0&&(l[u]=d)}}const f=We(e,n),a=f.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),i==="svg"){l.style={...s,...c},Object.assign(l,a);let u=0,d=t.id;return typeof d=="string"&&(d=d.replace(/-/g,"_")),l.dangerouslySetInnerHTML={__html:_t(et(f.body,d?()=>d+"ID"+u++:"iconifyReact"))},I.createElement("svg",l)}const{body:p,width:m,height:h}=e,y=i==="mask"||(i==="bg"?!1:p.indexOf("currentColor")!==-1),b=Mt(p,{...a,width:m+"",height:h+""});return l.style={...s,"--svg":Nt(b),width:ge(a.width),height:ge(a.height),...Rt,...y?K:Fe,...c},I.createElement("span",l)};we(!0);tt("",ft);if(typeof document<"u"&&typeof window<"u"){Oe();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Be(r))&&console.error(o)}catch{console.error(o)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let o in t){const r="IconifyProviders["+o+"] is invalid.";try{const n=t[o];if(typeof n!="object"||!n||n.resources===void 0)continue;nt(o,n)||console.error(r)}catch{console.error(r)}}}}function Le(e){const[t,o]=I.useState(!!e.ssr),[r,n]=I.useState({});function i(h){if(h){const y=e.icon;if(typeof y=="object")return{name:"",data:y};const b=ie(y);if(b)return{name:y,data:b}}return{name:""}}const[s,c]=I.useState(i(!!e.ssr));function l(){const h=r.callback;h&&(h(),n({}))}function f(h){if(JSON.stringify(s)!==JSON.stringify(h))return l(),c(h),!0}function a(){var h;const y=e.icon;if(typeof y=="object"){f({name:"",data:y});return}const b=ie(y);if(f({name:y,data:b}))if(b===void 0){const u=Tt([y],a);n({callback:u})}else b&&((h=e.onLoad)===null||h===void 0||h.call(e,y))}I.useEffect(()=>(o(!0),l),[]),I.useEffect(()=>{t&&a()},[e.icon,t]);const{name:p,data:m}=s;return m?zt({...W,...m},e,p):e.children?e.children:I.createElement("span",{})}const qt=I.forwardRef((e,t)=>Le({...e,_ref:t}));I.forwardRef((e,t)=>Le({inline:!0,...e,_ref:t}));const Ht=Ae([],{variants:{size:{sm:"text-xs",md:"text-base",lg:"text-xl"}},defaultVariants:{size:"md"}}),me=I.forwardRef(({size:e,symbol:t,className:o,style:r,...n},i)=>z.jsx(z.Fragment,{children:t&&z.jsx(qt,{ref:i,icon:t,className:Ne(Ht({size:e,className:o})),style:{lineHeight:"0",...r},...n})}));try{me.displayName="Symbol",me.__docgenInfo={description:"",displayName:"Symbol",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"sm" | "md" | "lg" | null'}},symbol:{defaultValue:null,description:"",name:"symbol",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{me as S};