import L from"./DocumentDrivenEmpty.751daebf.js";import h from"./ContentRenderer.5f1bf6a0.js";import x from"./DocumentDrivenNotFound.1579134c.js";import{b as F,a as m,av as C,q as k,aw as R,J as w,u as o,ax as d,ay as N,az as i,T as g,Y as B,a0 as D,al as E,o as c,i as T,m as l,w as p,c as _}from"./entry.69ae9c5b.js";import"./ContentRendererMarkdown.049aab04.js";import"./ButtonLink.5897c010.js";import"./ContentSlot.ffaed5e6.js";const j=m({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const n=await d[s.name]().then(e=>e.default||e);return()=>B(n,t.attrs,t.slots)}}),q=m({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const n=C("_route"),e=n===k()?R():n,a=w(()=>o(s.name)??e.meta.layout??"default");return()=>{const u=a.value&&a.value in d,r=e.meta.layoutTransition??N;return i(g,u&&r,{default:()=>i(j,u&&{key:a.value,name:a.value,...t.attrs},t.slots).default()}).default()}}}),A={class:"document-driven-page"},O=m({__name:"document-driven",setup(s){const{page:t,layout:n}=D();return t.value,E(t),(e,a)=>{const u=L,r=h,f=x,y=q;return c(),T("div",A,[l(y,{name:o(n)||"default"},{default:p(()=>[o(t)?(c(),_(r,{key:o(t)._id,value:o(t)},{empty:p(({value:v})=>[l(u,{value:v},null,8,["value"])]),_:1},8,["value"])):(c(),_(f,{key:1}))]),_:1},8,["name"])])}}});export{O as default};