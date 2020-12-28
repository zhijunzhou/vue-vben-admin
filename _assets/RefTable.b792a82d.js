import{a as e,r as i,h as t,f as o,i as s,o as n,j as a,k as l,w as r,p as c}from"./index.46d6012c.js";import"./xlsx.a48e520c.js";import"./index.64140d77.js";import"./index.4113db93.js";import"./Trigger.1760f0d3.js";import"./omit.e8d97b70.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.211ac153.js";import"./CheckOutlined.6cb39299.js";import"./index.b1472a21.js";import"./colors.357808bb.js";import"./index.20c38e9d.js";import"./RightOutlined.20ea3258.js";import"./index.1e11f442.js";import"./types.3d31dfe9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4de47bd7.js";import"./_baseFor.f4e5f03f.js";import"./index.6a991412.js";import"./index.a172b251.js";import"./index.32b369e3.js";import"./index.51deba08.js";import"./UpOutlined.21cc6fac.js";import"./LeftOutlined.f8e3b6ba.js";import"./index.74d51768.js";import"./index.176873be.js";import"./index.74af370d.js";import"./index.f6608bc6.js";import"./index.7cf13630.js";import"./zh_CN.0242bd16.js";import"./TableAction.78cddb36.js";import"./index.26d03542.js";import"./CaretDownFilled.87c9b5c9.js";import"./index.5dad729e.js";import"./CheckOutlined.476860fa.js";import"./CloseOutlined.9540ff8f.js";import{s as d}from"./EditTableHeaderIcon.4135a040.js";import"./DownOutlined.47094d14.js";import"./FullscreenOutlined.6392ddb3.js";import"./functional.97744b71.js";import"./LoadingOutlined.53bec7b5.js";import"./RedoOutlined.02659b57.js";import"./RightOutlined.252275e0.js";import"./SettingOutlined.4bd05219.js";import"./useTimeout.3355995f.js";import"./tsxHelper.31dccd68.js";import"./index.104cb9e3.js";import"./domUtils.fabff8c2.js";import"./index.7ca758f2.js";import"./animation.e9fae4fd.js";import"./useScrollTo.d52fcb20.js";import"./useAttrs.bd8026f6.js";import"./index.c1040e54.js";import"./index.7dea14a1.js";import"./useForm.8a043248.js";import"./index.91cefa6f.js";import"./useWindowSizeFn.f6909622.js";import"./useFullScreen.29729aef.js";import"./uuid.40269c00.js";import"./useExpose.4d608728.js";import"./index.c2a21fc8.js";import{getBasicColumns as m,getBasicShortColumns as p}from"./tableData.a5b9270b.js";import{d as f}from"./table.4dbe5a02.js";var u=e({components:{BasicTable:d},setup(){const e=i(null),{createMessage:s}=t();function n(){const i=o(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:f,columns:m(),changeLoading:function(){n().setLoading(!0),setTimeout((()=>{n().setLoading(!1)}),1e3)},changeColumns:function(){n().setColumns(p())},reloadTable:function(){n().setColumns(m()),n().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){n().setPagination({current:2}),n().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){n().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){n().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},C=c("还原"),g=c("开启loading"),x=c("更改Columns"),k=c("获取Columns"),w=c("获取表格数据"),R=c("跳转到第2页"),S={class:"mb-4"},_=c("获取选中行"),T=c("获取选中行Key"),O=c("设置选中行"),h=c("清空选中行"),L=c("获取分页信息");u.render=function(e,i,t,o,c,d){const m=s("a-button"),p=s("BasicTable");return n(),a("div",j,[l("div",b,[l(m,{class:"mr-2",onClick:e.reloadTable},{default:r((()=>[C])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeLoading},{default:r((()=>[g])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeColumns},{default:r((()=>[x])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getColumn},{default:r((()=>[k])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getTableData},{default:r((()=>[w])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:r((()=>[R])),_:1},8,["onClick"])]),l("div",S,[l(m,{class:"mr-2",onClick:e.getSelectRowList},{default:r((()=>[_])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:r((()=>[T])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:r((()=>[O])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.clearSelect},{default:r((()=>[h])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getPagination},{default:r((()=>[L])),_:1},8,["onClick"])]),l(p,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;