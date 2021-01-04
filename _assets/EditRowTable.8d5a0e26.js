import{a as e,r as t,i,o,j as n,k as d,w as a}from"./index.e4b88f60.js";import"./xlsx.a48e520c.js";import"./useSortable.a227f6d3.js";import"./index.63df68f8.js";import"./Trigger.e3ee00d7.js";import"./omit.fa5f69c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06f8d2e0.js";import"./CheckOutlined.7eddd459.js";import"./index.ee856824.js";import"./colors.4a59113e.js";import"./index.e9c76b61.js";import"./RightOutlined.8b7faa82.js";import"./index.874dac81.js";import"./types.0b2024d5.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.d92ff7b8.js";import"./_baseFor.f4e5f03f.js";import"./index.157e5b0f.js";import"./index.a172b251.js";import"./index.49f51c29.js";import"./index.c7a723bb.js";import"./UpOutlined.3eedcb1d.js";import"./LeftOutlined.22980e9b.js";import"./index.0a2c42e4.js";import"./index.12e9aa85.js";import"./index.2eedb6b3.js";import"./index.5f2b7f1b.js";import"./index.cb3cff10.js";import"./zh_CN.0242bd16.js";import"./index.4d00a526.js";import"./index.e6dc8920.js";import"./CaretDownFilled.22ce7fec.js";import"./index.8d1e8c32.js";import"./CheckOutlined.3708797f.js";import"./CloseOutlined.bfc223d0.js";import{s,a as r}from"./index.efd70534.js";import"./FullscreenOutlined.bef0f37b.js";import"./LeftOutlined.5c049255.js";import"./LoadingOutlined.0e06bc81.js";import{s as l}from"./TableAction.3c60fdb8.js";import"./RightOutlined.536370f6.js";import"./SettingOutlined.2787675f.js";import"./useTimeout.f29a1845.js";import"./tsxHelper.c30fb80c.js";import"./index.f8ee4236.js";import"./animation.dc344f03.js";import"./useScrollTo.800fbd0c.js";import"./useAttrs.75b03407.js";import"./index.431d78e6.js";import"./index.c0c9b6ac.js";import"./useWindowSizeFn.b44974f1.js";import"./useForm.78921f4a.js";import"./uuid.40269c00.js";import"./useExpose.a7bd01cb.js";import{u as m}from"./useTable.cf8f4be4.js";import{o as p}from"./select.b359de48.js";import{d as c}from"./table.e50f0dc7.js";const u=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:200},{title:"输入框校验",dataIndex:"name1",editRow:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:p},width:200},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var j=e({components:{BasicTable:s,EditTableHeaderIcon:r,TableAction:l},setup(){const e=t(""),[i]=m({title:"可编辑行示例",api:c,columns:u,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function o(t){var i;e.value=t.key,null==(i=t.onEdit)||i.call(t,!0)}function n(t){var i;e.value="",null==(i=t.onEdit)||i.call(t,!1,!0)}async function d(t){var i;await(null==(i=t.onEdit)?void 0:i.call(t,!1,!0))&&(e.value="")}return{registerTable:i,handleEdit:o,createActions:function(t,i){return t.editable?[{label:"保存",onClick:d.bind(null,t,i)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:n.bind(null,t,i)}}]:[{label:"编辑",disabled:!!e.value&&e.value!==t.key,onClick:o.bind(null,t)}]}}}});const b={class:"p-4"};j.render=function(e,t,s,r,l,m){const p=i("TableAction"),c=i("BasicTable");return o(),n("div",b,[d(c,{onRegister:e.registerTable},{action:a((({record:t,column:i})=>[d(p,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"])])};export default j;