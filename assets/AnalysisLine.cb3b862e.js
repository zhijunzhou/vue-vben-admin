import{d as e,r as t,aI as i,o as a,i as r}from"./index.263e87c1.js";import"./useTimeout.4920e0e1.js";import{u as o}from"./useECharts.35e827bc.js";import{b as n}from"./props.f48aca0b.js";var s=e({name:"AnalysisLine",props:n,setup(){const e=t(null),{setOptions:a}=o(e);return i((()=>{a({tooltip:{trigger:"axis",padding:3,backgroundColor:"rgba(0, 0, 0, .6)",borderColor:"#777",borderWidth:1},legend:{icon:"rect",itemWidth:15,itemHeight:4,left:80,top:0,orient:"horizontal",data:["产品一","产品二"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisTick:{inside:!0},data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},yAxis:{type:"value",axisTick:{inside:!0}},series:[{name:"产品一",type:"line",itemStyle:{normal:{color:"#5B8FF9"}},data:[330,132,101,134,90,230,210,150,232,234,230,400],animationDuration:4e3},{name:"产品二",type:"line",itemStyle:{normal:{color:"#55D187"}},data:[220,182,191,234,290,330,310,330,232,201,330,190],animationDuration:4e3}]})})),{chartRef:e}}});s.render=function(e,t,i,o,n,s){return a(),r("div",{ref:"chartRef",style:{height:e.height,width:e.width}},null,4)};export default s;