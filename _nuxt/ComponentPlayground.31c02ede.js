import{a as _,e as n,l as v,o as S,f as I,m as b,u as P,p as w,q as C,s as $,k as m,aa as x,z as E,D as r}from"./entry.ef0af8fe.js";import z from"./ComponentPlaygroundData.922ea5d4.js";import"./TabsHeader.e7871072.js";import"./ComponentPlaygroundProps.229c6959.js";import"./ProseH4.167a36d6.js";import"./ProseCodeInline.bc8d8d54.js";import"./Badge.83e07b3a.js";import"./ContentSlot.09133de0.js";import"./ProseP.0354f2ed.js";import"./index.90f4e598.js";import"./ComponentPlaygroundSlots.vue.4e0814b7.js";import"./ComponentPlaygroundTokens.vue.c1f0b827.js";const D=e=>(w("data-v-76a59763"),e=e(),C(),e),j=D(()=>$("div",{class:"ellipsis-item"},null,-1)),B=[j],k=_({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(e){const o=e,a=n(()=>((t=o)=>t.top)()),s=n(()=>((t=o)=>t.left)()),i=n(()=>((t=o)=>t.right)()),l=n(()=>((t=o)=>t.zIndex)()),u=n(()=>((t=o)=>t.width)()),f=n(()=>((t=o)=>t.height)()),g=n(()=>((t=o)=>`blur(${t.blur})`)()),y=n(()=>((t=o)=>{var c,p,d;return`linear-gradient(97.62deg, ${(c=t==null?void 0:t.colors)==null?void 0:c[0]} 2.27%, ${(p=t==null?void 0:t.colors)==null?void 0:p[1]} 50.88%, ${(d=t==null?void 0:t.colors)==null?void 0:d[2]} 98.48%)`})()),{$pinceau:h}=v(o,void 0,{_cCN_top:a,_eih_insetInlineStart:s,_IfB_insetInlineEnd:i,_SsE_zIndex:l,_wj8_maxWidth:u,_t33_height:f,_Jfd_filter:g,_yUj_background:y});return(t,c)=>(S(),I("div",{class:b(["ellipsis",[P(h)]])},B,2))}});const q=m(k,[["__scopeId","data-v-76a59763"]]),V=_({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(e){const o=n(()=>x(e.component)),a=E({...e.props}),s=await useComponentMeta(e.component);return{as:o,formProps:a,componentData:s}},render(e){const o=Object.entries(this.$slots).reduce((a,[s,i])=>{if(s.startsWith("component-")){const l=s.replace("component-","");a[l]=i}return a},{});return r("div",{class:"component-playground"},[r("div",{class:"component-playground-wrapper"},[r(q,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),r(e.as,{...e.formProps,class:"component-playground-component"},{...o})]),r(z,{modelValue:e.formProps,componentData:e.componentData,"onUpdate:modelValue":a=>e.formProps=a})])}});const L=m(V,[["__scopeId","data-v-a1e7fa8e"]]);export{L as default};