import{a as t,u as s,i as e,o as i,j as o,w as r,k as a,J as m}from"./index.e622111d.js";import"./xlsx.a48e520c.js";import"./Trigger.bf7f3a72.js";import"./omit.fd7b21c8.js";import"./_baseSlice.1123a25b.js";import"./colors.346e189f.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.fffd3e40.js";import"./index.b6070937.js";import"./index.d4063b66.js";import"./index.35d539fd.js";import"./CloseOutlined.3b0881b7.js";import"./FullscreenOutlined.4ae67d7b.js";import"./RightOutlined.7bff01db.js";import"./index.fef0436d.js";import"./useTimeout.06b16bcc.js";import"./tsxHelper.43604373.js";import"./index.e25a806a.js";import"./animation.755a04b8.js";import"./useScrollTo.132bb25e.js";import{D as n}from"./index.68f0b179.js";import{u as p}from"./useDescription.b2922e59.js";import"./useAttrs.f2161018.js";import{s as d}from"./index.86609f4c.js";import"./useWindowSizeFn.84aec3d2.js";import{getDescSchema as f}from"./data.1ae8f13c.js";var j=t({name:"ErrorLogDetailModal",components:{BasicModal:d,Description:n},props:{info:{type:Object,default:null}},setup(){const{t:t}=s(),[e]=p({column:2,schema:f()});return{register:e,useI18n:s,t:t}}});j.render=function(t,s,n,p,d,f){const j=e("Description"),l=e("BasicModal");return i(),o(l,m({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:r((()=>[a(j,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default j;