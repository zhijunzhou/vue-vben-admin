import{a as r,i as e,o as i,j as o,k as s,w as t,p as a}from"./index.e622111d.js";import"./xlsx.a48e520c.js";import"./index.158b65b7.js";import"./Trigger.bf7f3a72.js";import"./omit.fd7b21c8.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6318737e.js";import"./CheckOutlined.187bc1d1.js";import"./index.caa0d6dc.js";import{A as n}from"./index.5a632863.js";import"./colors.346e189f.js";import"./RightOutlined.f0169d6f.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.fffd3e40.js";import"./index.dc4111a7.js";import"./index.a172b251.js";import"./index.b6070937.js";import"./index.6ab39c74.js";import"./UpOutlined.bb04ec26.js";import"./index.317398e2.js";import"./index.d4063b66.js";import"./index.12af9319.js";import"./index.180cf33d.js";import"./index.d1df10b7.js";import"./index.f932c3b2.js";import"./index.35d539fd.js";import{u as p}from"./index.33601a5f.js";import"./CloseOutlined.3b0881b7.js";import"./FullscreenOutlined.4ae67d7b.js";import"./LoadingOutlined.2e17b41f.js";import"./RightOutlined.7bff01db.js";import"./useTimeout.06b16bcc.js";import"./tsxHelper.43604373.js";import"./index.e25a806a.js";import"./animation.755a04b8.js";import"./useScrollTo.132bb25e.js";import"./useAttrs.f2161018.js";import m from"./Drawer1.5ff147f4.js";import d from"./Drawer2.c833774d.js";import c from"./Drawer3.d2435403.js";import"./index.5c7fcd9f.js";import"./index.86609f4c.js";import"./useWindowSizeFn.84aec3d2.js";import"./useForm.9d445dc3.js";import l from"./Drawer4.271e92cf.js";import f from"./Drawer5.134748e3.js";var j=r({components:{Alert:n,Drawer1:m,Drawer2:d,Drawer3:c,Drawer4:l,Drawer5:f},setup(){const[r,{openDrawer:e,setDrawerProps:i}]=p(),[o,{openDrawer:s}]=p(),[t,{openDrawer:a}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:c}]=p();return{register1:r,openDrawer1:e,register2:o,openDrawer2:s,register3:t,openDrawer3:a,register4:n,register5:d,openDrawer5:c,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){e(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const w={class:"px-10 py-4"},D=a("打开Drawer"),u=a("打开Drawer"),g=a("打开Drawer"),b=a("打开Drawer并传递数据"),x=a("打开详情Drawer");j.render=function(r,a,n,p,m,d){const c=e("Alert"),l=e("a-button"),f=e("Drawer1"),j=e("Drawer2"),y=e("Drawer3"),R=e("Drawer4"),k=e("Drawer5");return i(),o("div",w,[s(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:r.openDrawerLoading},{default:t((()=>[D])),_:1},8,["onClick"]),s(c,{message:"内外同时控制显示隐藏","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:a[1]||(a[1]=e=>r.openDrawer2(!0))},{default:t((()=>[u])),_:1}),s(c,{message:"自适应高度/显示footer","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:a[2]||(a[2]=e=>r.openDrawer3(!0))},{default:t((()=>[g])),_:1}),s(c,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:r.send},{default:t((()=>[b])),_:1},8,["onClick"]),s(c,{message:"详情页模式","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:a[3]||(a[3]=e=>r.openDrawer5(!0))},{default:t((()=>[x])),_:1}),s(f,{onRegister:r.register1},null,8,["onRegister"]),s(j,{onRegister:r.register2},null,8,["onRegister"]),s(y,{onRegister:r.register3},null,8,["onRegister"]),s(R,{onRegister:r.register4},null,8,["onRegister"]),s(k,{onRegister:r.register5},null,8,["onRegister"])])};export default j;