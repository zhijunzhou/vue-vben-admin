import{cA as e,b as s,d as a,g as o,h as i,o as r,i as t,w as n,j as p}from"./index.263e87c1.js";import{g as d,_ as m}from"./index.a1dae3eb.js";import"./_stringToArray.cad96220.js";import"./domUtils.842bf6df.js";import"./index.a73e59fe.js";import"./index.7af9597f.js";import"./index.9380c6e4.js";import"./index.6fa633b9.js";import"./FullscreenOutlined.f8a8dae1.js";import"./RightOutlined.d0259003.js";import"./useTimeout.4920e0e1.js";import"./index.dba68c94.js";import"./animation.3878be1e.js";import"./useScrollTo.e15f955c.js";import"./useAttrs.a43ee0a8.js";import"./useWindowSizeFn.c5c953e5.js";import"./index.a2a48fd0.js";import"./uuid.a6cec785.js";import"./download.2bed4871.js";import{u as l}from"./useForm.1ba423af.js";import{_ as c}from"./index.f7c7adf0.js";import"./usePageContext.929623d6.js";const{uploadUrl:u=""}=s();function f(s,a){return e.uploadFile({url:u,onUploadProgress:a},s)}const j=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:f}}];var g=a({components:{BasicUpload:d,BasicForm:m,PageWrapper:c},setup(){const{createMessage:e}=o(),[s]=l({labelWidth:120,schemas:j,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},uploadApi:f,register:s}}});g.render=function(e,s,a,o,d,m){const l=i("a-alert"),c=i("BasicUpload"),u=i("BasicForm"),f=i("PageWrapper");return r(),t(f,{title:"上传组件示例"},{default:n((()=>[p(l,{message:"基础示例",class:"my-5"}),p(c,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi},null,8,["onChange","api"]),p(l,{message:"嵌入表单,加入表单校验",class:"my-5"}),p(u,{onRegister:e.register},null,8,["onRegister"])])),_:1})};export default g;