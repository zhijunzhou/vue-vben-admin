import{a as t,r as e,X as a,i as s,o as r,j as o,w as i,k as n}from"./index.f774190a.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.7ad475f3.js";import{a as p}from"./index.aa1eff48.js";import"./RightOutlined.03811c7b.js";import"./useTimeout.04d2c2bd.js";import"./tsxHelper.d9af66ea.js";import"./index.4ac354fa.js";import"./domUtils.697d239b.js";import"./index.b93bb98e.js";import"./animation.e1ae5215.js";import"./useScrollTo.5921c7fb.js";import{u as d}from"./useApexCharts.27840609.js";var c=t({components:{CollapseContainer:p},setup(){const t=e(null),{setOptions:s}=d(t);return a((()=>{s({series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},chart:{height:350,type:"radar",dropShadow:{enabled:!0,blur:1,left:1,top:1}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},title:{show:!1},tooltip:{x:{show:!1}},markers:{size:0},xaxis:{categories:["2011","2012","2013","2014","2015","2016"]},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}}})})),{chartRef:t}}});const l={ref:"chartRef",style:{width:"100%"}};c.render=function(t,e,a,p,d,c){const m=s("CollapseContainer");return r(),o(m,{title:"销售统计",canExpan:!1},{default:i((()=>[n("div",l,null,512)])),_:1})};export default c;