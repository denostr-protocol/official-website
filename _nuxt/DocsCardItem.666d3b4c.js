import r from"./ContentSlot.befb8b78.js";import{a as _,o as l,f as o,s as e,t as i,w as c,v as d,x as a,k as u}from"./entry.dae6f34c.js";const f={class:"docs-card-item"},m=["href"],h=["src"],g={class:"text-box"},k={class:"title"},p={class:"link"},b=["href"],y=["src"],x={class:"text-box"},v={class:"title"},w={class:"link"},C=_({__name:"DocsCardItem",props:{link:{type:String,default:""},img:{type:String,default:""},linkDisable:{type:Boolean,default:!1}},setup(t){return(s,D)=>{const n=r;return l(),o("section",f,[t.linkDisable?(l(),o("a",{key:1,href:t.link,target:"_blank",class:"w-full h-full relative group",tabindex:"-1",onclick:"return false;"},[e("img",{src:t.img,alt:"",loading:"lazy",class:"img"},null,8,y),e("div",x,[e("h2",v,[i(n,{use:s.$slots.title,unwrap:"p"},{default:c(()=>[d(a(s.title),1)]),_:1},8,["use"])]),e("p",w,a(t.link),1)])],8,b)):(l(),o("a",{key:0,href:t.link,target:"_blank",class:"w-full h-full relative group",tabindex:"-1"},[e("img",{src:t.img,alt:"",loading:"lazy",class:"img"},null,8,h),e("div",g,[e("h2",k,[i(n,{use:s.$slots.title,unwrap:"p"},{default:c(()=>[d(a(s.title),1)]),_:1},8,["use"])]),e("p",p,a(t.link),1)])],8,m))])}}});const S=u(C,[["__scopeId","data-v-8e7b4a31"]]);export{S as default};