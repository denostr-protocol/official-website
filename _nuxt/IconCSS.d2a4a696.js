import{a as d,ao as m,A as f,e as o,o as x,f as S,ap as z,u as a,k as I}from"./entry.dae6f34c.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(_){var r;const s=_;m(n=>({c74e3be8:a(p)}));const e=f();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const l=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),p=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),c=o(()=>{var t,i,u;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const n=s.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(x(),S("span",{style:z({width:a(c),height:a(c)})},null,4))}});const b=I(y,[["__scopeId","data-v-f4a42cbd"]]);export{b as default};