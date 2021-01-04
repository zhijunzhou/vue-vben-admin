import{a as e,i as t,o as i,j as o,k as n,w as s,p as r}from"./index.e4b88f60.js";import"./xlsx.a48e520c.js";import"./useSortable.a227f6d3.js";import"./index.63df68f8.js";import"./Trigger.e3ee00d7.js";import"./omit.fa5f69c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06f8d2e0.js";import"./CheckOutlined.7eddd459.js";import"./index.ee856824.js";import"./colors.4a59113e.js";import"./index.e9c76b61.js";import"./RightOutlined.8b7faa82.js";import"./index.874dac81.js";import"./types.0b2024d5.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.d92ff7b8.js";import"./_baseFor.f4e5f03f.js";import"./index.157e5b0f.js";import"./index.a172b251.js";import"./index.49f51c29.js";import"./index.c7a723bb.js";import"./UpOutlined.3eedcb1d.js";import"./LeftOutlined.22980e9b.js";import"./index.0a2c42e4.js";import"./index.12e9aa85.js";import"./index.2eedb6b3.js";import"./index.5f2b7f1b.js";import"./index.cb3cff10.js";import"./zh_CN.0242bd16.js";import"./index.4d00a526.js";import"./index.e6dc8920.js";import"./CaretDownFilled.22ce7fec.js";import"./index.8d1e8c32.js";import"./CheckOutlined.3708797f.js";import"./CloseOutlined.bfc223d0.js";import{s as d,a}from"./index.efd70534.js";import"./FullscreenOutlined.bef0f37b.js";import"./LeftOutlined.5c049255.js";import"./LoadingOutlined.0e06bc81.js";import{s as l}from"./TableAction.3c60fdb8.js";import"./RightOutlined.536370f6.js";import"./SettingOutlined.2787675f.js";import"./useTimeout.f29a1845.js";import"./tsxHelper.c30fb80c.js";import"./index.f8ee4236.js";import"./animation.dc344f03.js";import"./useScrollTo.800fbd0c.js";import"./useAttrs.75b03407.js";import"./index.431d78e6.js";import"./index.c0c9b6ac.js";import"./useWindowSizeFn.b44974f1.js";import"./useForm.78921f4a.js";import"./uuid.40269c00.js";import"./useExpose.a7bd01cb.js";import{u as c}from"./useTable.cf8f4be4.js";const m=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],p=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var j=e({components:{BasicTable:d,EditTableHeaderIcon:a,TableAction:l},setup(){const[e,{getDataSource:t}]=c({columns:m,showIndexColumn:!1,dataSource:p,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){var t;null==(t=e.onEdit)||t.call(e,!0)}function o(e){var i;if(null==(i=e.onEdit)||i.call(e,!1),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){var t;null==(t=e.onEdit)||t.call(e,!1,!0)}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){t().push({name:"",no:"",dept:"",editable:!0,isNew:!0})},getDataSource:t}}});const f=r("新增成员");j.render=function(e,r,d,a,l,c){const m=t("TableAction"),p=t("BasicTable"),j=t("a-button");return i(),o("div",null,[n(p,{onRegister:e.registerTable},{action:s((({record:t,column:i})=>[n(m,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"]),n(j,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:s((()=>[f])),_:1},8,["onClick"])])};export default j;