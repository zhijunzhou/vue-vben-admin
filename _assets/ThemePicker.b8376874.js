let e=document.createElement("style");e.innerHTML=".vben-setting-theme-picker{display:flex;flex-wrap:wrap;margin:16px 0;justify-content:space-around}.vben-setting-theme-picker__item{width:20px;height:20px;cursor:pointer;border:1px solid #ddd;border-radius:2px}.vben-setting-theme-picker__item svg{display:none}.vben-setting-theme-picker__item--active{border:1px solid #31a5fe}.vben-setting-theme-picker__item--active svg{display:inline-block;margin:0 0 3px 3px;font-size:12px;fill:#fff!important}",document.head.appendChild(e);import{a as t,au as i,i as r,o as s,j as n,ad as p,aH as o,k as a}from"./index.46d6012c.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4de47bd7.js";import"./index.74af370d.js";import"./index.270ac0e7.js";import"./index.5dad729e.js";import"./index.078c6fe7.js";import{C as d}from"./CheckOutlined.476860fa.js";import"./RightOutlined.252275e0.js";import"./SettingOutlined.4bd05219.js";import"./useTimeout.3355995f.js";import"./tsxHelper.31dccd68.js";import"./index.104cb9e3.js";import"./domUtils.fabff8c2.js";import"./index.7ca758f2.js";import"./animation.e9fae4fd.js";import"./useScrollTo.d52fcb20.js";import"./useAttrs.bd8026f6.js";import"./useHeaderSetting.03b0d500.js";import{b as m}from"./index.44b92772.js";var c=t({name:"ThemePicker",components:{CheckOutlined:d},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:t}=i("setting-theme-picker");return{prefixCls:t,handleClick:function(t){e.event&&m(e.event,t)}}}});c.render=function(e,t,i,d,m,c){const l=r("CheckOutlined");return s(),n("div",{class:e.prefixCls},[(s(!0),n(p,null,o(e.colorList||[],(t=>(s(),n("span",{key:t,onClick:i=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[a(l)],14,["onClick"])))),128))],2)};export default c;