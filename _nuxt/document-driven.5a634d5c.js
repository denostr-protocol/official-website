import L from"./DocumentDrivenEmpty.5b36b061.js";import h from"./ContentRenderer.7965c0a9.js";import C from"./DocumentDrivenNotFound.1fa7cc1f.js";import{a5 as F,a as m,aq as x,K as k,ar as R,e as D,u as o,as as d,at as N,au as i,T as g,D as w,I as B,ae as E,o as c,f as T,t as p,w as l,c as _}from"./entry.dae6f34c.js";import"./ContentRendererMarkdown.a6ac06fd.js";import"./ButtonLink.e63c84de.js";import"./ContentSlot.befb8b78.js";const j=m({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const n=await d[s.name]().then(e=>e.default||e);return()=>w(n,t.attrs,t.slots)}}),q=m({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const n=x("_route"),e=n===k()?R():n,a=D(()=>o(s.name)??e.meta.layout??"default");return()=>{const u=a.value&&a.value in d,r=e.meta.layoutTransition??N;return i(g,u&&r,{default:()=>i(j,u&&{key:a.value,name:a.value,...t.attrs},t.slots).default()}).default()}}}),A={class:"document-driven-page"},P=m({__name:"document-driven",setup(s){const{page:t,layout:n}=B();return t.value,E(t),(e,a)=>{const u=L,r=h,f=C,y=q;return c(),T("div",A,[p(y,{name:o(n)||"default"},{default:l(()=>[o(t)?(c(),_(r,{key:o(t)._id,value:o(t)},{empty:l(({value:v})=>[p(u,{value:v},null,8,["value"])]),_:1},8,["value"])):(c(),_(f,{key:1}))]),_:1},8,["name"])])}}});export{P as default};