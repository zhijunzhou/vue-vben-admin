import{a as e,h as n,i as o,o as s,j as a,k as r,w as l,p as c}from"./index.e622111d.js";import"./xlsx.a48e520c.js";import"./Trigger.bf7f3a72.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.fffd3e40.js";import"./index.b6070937.js";import{a as t}from"./index.35d539fd.js";import"./RightOutlined.7bff01db.js";import"./useTimeout.06b16bcc.js";import"./tsxHelper.43604373.js";import"./index.e25a806a.js";import"./animation.755a04b8.js";import"./useScrollTo.132bb25e.js";var i=e({components:{CollapseContainer:t},setup(){const{createMessage:e,createConfirm:o,createSuccessModal:s,createInfoModal:a,createErrorModal:r,createWarningModal:l,notification:c}=n(),{info:t,success:i,warning:d,error:f}=e;return{infoMsg:t,successMsg:i,warningMsg:d,errorMsg:f,handleLoading:function(){e.loading("Loading...")},handleConfirm:function(e){o({iconType:e,title:"Tip",content:"content message..."})},handleSuccessModal:function(){s({title:"Tip",content:"content message..."})},handleErrorModal:function(){r({title:"Tip",content:"content message..."})},handleWarningModal:function(){l({title:"Tip",content:"content message..."})},handleInfoModal:function(){a({title:"Tip",content:"content message..."})},handleNotify:function(){c.success({message:"Tip",description:"content message..."})}}}});const d={class:"p-4"},f=c(" Info "),m=c(" Success "),u=c(" Warning "),g=c(" Error "),p=c(" Loading "),C=c("Info"),h=c("Warning"),M=c("Success"),k=c("Error"),_=c("Info"),b=c("Success"),w=c("Error"),j=c("Warning"),x=c("Success");i.render=function(e,n,c,t,i,T){const S=o("a-button"),E=o("CollapseContainer");return s(),a("div",d,[r(E,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Message"},{default:l((()=>[r(S,{onClick:n[1]||(n[1]=n=>e.infoMsg("Info message")),class:"mr-2"},{default:l((()=>[f])),_:1}),r(S,{onClick:n[2]||(n[2]=n=>e.successMsg("Success message")),class:"mr-2",color:"success"},{default:l((()=>[m])),_:1}),r(S,{onClick:n[3]||(n[3]=n=>e.warningMsg("Warning message")),class:"mr-2",color:"warning"},{default:l((()=>[u])),_:1}),r(S,{onClick:n[4]||(n[4]=n=>e.errorMsg("Error message")),class:"mr-2",color:"error"},{default:l((()=>[g])),_:1}),r(S,{onClick:e.handleLoading,class:"mr-2",type:"primary"},{default:l((()=>[p])),_:1},8,["onClick"])])),_:1}),r(E,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Comfirm"},{default:l((()=>[r(S,{onClick:n[5]||(n[5]=n=>e.handleConfirm("info")),class:"mr-2"},{default:l((()=>[C])),_:1}),r(S,{onClick:n[6]||(n[6]=n=>e.handleConfirm("warning")),color:"warning",class:"mr-2"},{default:l((()=>[h])),_:1}),r(S,{onClick:n[7]||(n[7]=n=>e.handleConfirm("success")),color:"success",class:"mr-2"},{default:l((()=>[M])),_:1}),r(S,{onClick:n[8]||(n[8]=n=>e.handleConfirm("error")),color:"error",class:"mr-2"},{default:l((()=>[k])),_:1})])),_:1}),r(E,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Modal"},{default:l((()=>[r(S,{onClick:e.handleInfoModal,class:"mr-2"},{default:l((()=>[_])),_:1},8,["onClick"]),r(S,{onClick:e.handleSuccessModal,color:"success",class:"mr-2"},{default:l((()=>[b])),_:1},8,["onClick"]),r(S,{onClick:e.handleErrorModal,color:"error",class:"mr-2"},{default:l((()=>[w])),_:1},8,["onClick"]),r(S,{onClick:e.handleWarningModal,color:"warning",class:"mr-2"},{default:l((()=>[j])),_:1},8,["onClick"])])),_:1}),r(E,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Notification 用法与上面一致"},{default:l((()=>[r(S,{onClick:e.handleNotify,color:"success",class:"mr-2"},{default:l((()=>[x])),_:1},8,["onClick"])])),_:1})])};export default i;