import{a as e,i as s,o as a,j as t,k as i}from"./index.e4b88f60.js";import"./xlsx.a48e520c.js";import"./Trigger.e3ee00d7.js";import"./_baseSlice.1123a25b.js";import{A as r}from"./index.c6a6b983.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.d92ff7b8.js";import"./index.49f51c29.js";import"./index.8d1e8c32.js";import"./RightOutlined.536370f6.js";import"./index.d370ab61.js";import"./useTimeout.f29a1845.js";import"./tsxHelper.c30fb80c.js";import"./index.f8ee4236.js";import"./animation.dc344f03.js";import"./useScrollTo.800fbd0c.js";import{D as o}from"./index.0da51bc9.js";import{u as l}from"./useDescription.80208c28.js";const m={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},n=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,s)=>`${s.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var c=e({components:{Description:o,Alert:r},setup(){const[e]=l({title:"useDescription",data:m,schema:n}),[s]=l({title:"无边框",bordered:!1,data:m,schema:n});return{mockData:m,schema:n,register:e,register1:s}}});const d={class:"p-4"};c.render=function(e,r,o,l,m,n){const c=s("Description");return a(),t("div",d,[i(c,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),i(c,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),i(c,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),i(c,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])};export default c;