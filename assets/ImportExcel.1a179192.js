import{I as e}from"./index.b19684c7.js";import{_ as t}from"./index.11f321e7.js";import{_ as i}from"./index.68673cbc.js";import{d as s,r as o,h as r,o as a,i as m,w as p,j as c,aR as n,aS as d,m as j}from"./index.a0c33e6e.js";import"./index.e8f6a548.js";import"./SearchOutlined.503f9ea6.js";import"./DownOutlined.69023226.js";import"./CheckOutlined.dc4c859a.js";import"./index.7e3a34b7.js";import"./index.1a355b4a.js";import"./responsiveObserve.c545f1cc.js";import"./index.9f30ce73.js";import"./findIndex.b72f3a96.js";import"./isEqual.679122bc.js";import"./_baseProperty.74f89655.js";import"./toInteger.8b9af448.js";import"./index.93ab6b75.js";import"./index.d6b32b90.js";import"./index.d6bcf3b6.js";import"./UpOutlined.94383fff.js";import"./index.4e5ad320.js";import"./EyeOutlined.b06a5359.js";import"./index.8983ccb8.js";import"./colors.5ad79e24.js";import"./RightOutlined.0b237a08.js";import"./index.46e4dce7.js";import"./types.bc7cc0a6.js";import"./Tree.9588fb8b.js";import"./util.57d7f00b.js";import"./useAttrs.02e0acfe.js";import"./index.bed999aa.js";import"./index.6eab8075.js";import"./uuid.a965114a.js";import"./index.e933c892.js";import"./index.5107361b.js";import"./useTimeout.131c739b.js";import"./useWindowSizeFn.760a84ec.js";import"./index.201f35c2.js";import"./index.3c33663f.js";import"./domUtils.8a0aa844.js";import"./_stringToArray.37fb13d5.js";import"./RightOutlined.520da2d9.js";import"./useScrollTo.87963a02.js";import"./animation.558feec5.js";import"./FullscreenOutlined.7cc846ae.js";import"./index.35c9450f.js";import"./index.792349ea.js";import"./index.00300e64.js";import"./LeftOutlined.662c68ae.js";import"./download.8d304dc4.js";import"./index.45038be4.js";import"./zh_CN.8094f4d6.js";import"./CaretDownFilled.41351325.js";import"./scrollTo.c9242ea7.js";import"./transButton.38e67fb4.js";import"./clickOutside.5baabbc1.js";import"./useSortable.d3f9a0f7.js";import"./CheckOutlined.cb3bea7f.js";import"./SettingOutlined.621dbb5c.js";import"./useExpose.09f50fef.js";import"./useForm.c84c148f.js";import"./index.24bc2e8e.js";import"./index.aea690b6.js";import"./usePageContext.a7cfbe9e.js";var l=s({components:{BasicTable:t,ImpExcel:e,PageWrapper:i},setup(){const e=o([]);return{loadDataSuccess:function(t){e.value=[];for(const i of t){const{header:t,results:s,meta:{sheetName:o}}=i,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:o,dataSource:s,columns:r})}},tableListRef:e}}});const u=j("导入Excel");l.render=function(e,t,i,s,o,j){const l=r("a-button"),f=r("ImpExcel"),b=r("BasicTable"),x=r("PageWrapper");return a(),m(x,{title:"excel数据导入示例"},{default:p((()=>[c(f,{onSuccess:e.loadDataSuccess},{default:p((()=>[c(l,{class:"m-3"},{default:p((()=>[u])),_:1})])),_:1},8,["onSuccess"]),(a(!0),m(n,null,d(e.tableListRef,((e,t)=>(a(),m(b,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default l;