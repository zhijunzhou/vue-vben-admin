import{d as e,aW as t,a1 as a,e as r,h as s,o as n,i as o,w as i,m as p,l as m,j as u}from"./index.a0c33e6e.js";import{_ as c}from"./index.68673cbc.js";import"./index.24bc2e8e.js";import"./index.46e4dce7.js";import"./RightOutlined.0b237a08.js";import"./types.bc7cc0a6.js";import"./isEqual.679122bc.js";import"./toInteger.8b9af448.js";import"./DownOutlined.69023226.js";import"./index.bed999aa.js";import"./index.aea690b6.js";import"./usePageContext.a7cfbe9e.js";import"./transButton.38e67fb4.js";var l=e({name:"TestTab",components:{PageWrapper:c},setup(){const{currentRoute:e}=t();return{params:a((()=>r(e).params))}}});const d=u("br",null,null,-1),j=p(" Keep Alive "),b=u("input",null,null,-1);l.render=function(e,t,a,r,u,c){const l=s("PageWrapper");return n(),o(l,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:i((()=>[p(" Current Param : "+m(e.params)+" ",1),d,j,b])),_:1})};export default l;