import{cT as e,b as i,d as s,g as o,h as t,o as r,i as a,w as n,j as p}from"./index.06f3ee29.js";import{A as d}from"./index.316663d4.js";import{h as m,_ as j}from"./index.46e5b397.js";import{_ as l}from"./index.192de65f.js";import{u as c}from"./useForm.bc255b70.js";import"./vendor.0d1494f4.js";import"./index.33949cd9.js";import"./responsiveObserve.c545f1cc.js";import"./index.ca107bc6.js";import"./findIndex.e0eb9451.js";import"./isEqual.74a158b4.js";import"./_baseProperty.74f89655.js";import"./toInteger.c1d92202.js";import"./index.980e8b38.js";import"./index.6f563249.js";import"./SearchOutlined.80b97ace.js";import"./CheckOutlined.170c5a81.js";import"./DownOutlined.a2b62231.js";import"./index.05074f4c.js";import"./index.a3e88181.js";import"./UpOutlined.c18e08b2.js";import"./index.5f26cfb9.js";import"./EyeOutlined.9c30adbb.js";import"./index.1856500c.js";import"./colors.150c899a.js";import"./RightOutlined.3a6167aa.js";import"./RedoOutlined.8be832f0.js";import"./index.7729c420.js";import"./EllipsisOutlined.9da6daab.js";import"./types.ea4e42e6.js";import"./Tree.918118f3.js";import"./util.6f4aed49.js";import"./useAttrs.75e4bdd4.js";import"./index.95c10fda.js";import"./uuid.0357dfa3.js";import"./index.51a23a15.js";import"./DeleteOutlined.084cf4d3.js";import"./index.894ac7ce.js";import"./useTimeout.6f68f351.js";import"./useWindowSizeFn.c470727d.js";import"./index.6ff2b8a1.js";import"./index.de8bd41e.js";import"./domUtils.8545414a.js";import"./_stringToArray.de50b038.js";import"./useScrollTo.0454a233.js";import"./animation.557dbdd5.js";import"./FullscreenOutlined.bbb91eb1.js";import"./index.33e2796b.js";import"./index.be890f15.js";import"./index.2b3a1b55.js";import"./LeftOutlined.117bdb10.js";import"./download.0962c71e.js";import"./index.c2c2071e.js";import"./index.3617ac63.js";import"./usePageContext.5934f257.js";import"./transButton.0234a19c.js";import"./ArrowLeftOutlined.8c726f84.js";const{uploadUrl:u=""}=i();function f(i,s){return e.uploadFile({url:u,onUploadProgress:s},i)}const b=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:f}}];var x=s({components:{BasicUpload:m,BasicForm:j,PageWrapper:l,[d.name]:d},setup(){const{createMessage:e}=o(),[i]=c({labelWidth:120,schemas:b,actionColOptions:{span:16}});return{handleChange:i=>{e.info(`已上传文件${JSON.stringify(i)}`)},uploadApi:f,register:i}}});x.render=function(e,i,s,o,d,m){const j=t("a-alert"),l=t("BasicUpload"),c=t("BasicForm"),u=t("PageWrapper");return r(),a(u,{title:"上传组件示例"},{default:n((()=>[p(j,{message:"基础示例",class:"my-5"}),p(l,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi},null,8,["onChange","api"]),p(j,{message:"嵌入表单,加入表单校验",class:"my-5"}),p(c,{onRegister:e.register},null,8,["onRegister"])])),_:1})};export default x;