let e=document.createElement("style");e.innerHTML=".vben-setting-theme-picker{display:flex;flex-wrap:wrap;margin:16px 0;justify-content:space-around}.vben-setting-theme-picker__item{width:20px;height:20px;cursor:pointer;border:1px solid #ddd;border-radius:2px}.vben-setting-theme-picker__item svg{display:none}.vben-setting-theme-picker__item--active{border:1px solid #31a5fe}.vben-setting-theme-picker__item--active svg{display:inline-block;margin:0 0 3px 3px;font-size:12px;fill:#fff!important}",document.head.appendChild(e);import{a as t,aV as i,i as r,o as s,j as n,aM as o,aW as p,k as a}from"./index.e4b88f60.js";import"./xlsx.a48e520c.js";import"./Trigger.e3ee00d7.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.d92ff7b8.js";import"./index.49f51c29.js";import"./index.2eedb6b3.js";import"./index.e90c3e4e.js";import"./index.8d1e8c32.js";import"./index.d1c04ec7.js";import{C as d}from"./CheckOutlined.3708797f.js";import"./RightOutlined.536370f6.js";import"./SettingOutlined.2787675f.js";import"./useTimeout.f29a1845.js";import"./tsxHelper.c30fb80c.js";import"./index.f8ee4236.js";import"./animation.dc344f03.js";import"./useScrollTo.800fbd0c.js";import"./useAttrs.75b03407.js";import"./useHeaderSetting.d8375fc6.js";import{b as m}from"./index.bc81a4d8.js";var c=t({name:"ThemePicker",components:{CheckOutlined:d},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:t}=i("setting-theme-picker");return{prefixCls:t,handleClick:function(t){e.event&&m(e.event,t)}}}});c.render=function(e,t,i,d,m,c){const l=r("CheckOutlined");return s(),n("div",{class:e.prefixCls},[(s(!0),n(o,null,p(e.colorList||[],(t=>(s(),n("span",{key:t,onClick:i=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[a(l)],14,["onClick"])))),128))],2)};export default c;