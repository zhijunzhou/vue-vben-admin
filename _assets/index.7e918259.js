import{P as t,q as e,a as i,B as o,v as r,x as n,R as s,ak as a,S as c,k as l,an as d,V as p,ao as f,aU as u,b9 as m,i as g,o as b,j,m as h,aM as v}from"./index.e622111d.js";import"./xlsx.a48e520c.js";import{s as x,g as k}from"./useSortable.ba81b9b5.js";import"./index.158b65b7.js";import"./Trigger.bf7f3a72.js";import"./omit.fd7b21c8.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6318737e.js";import"./CheckOutlined.187bc1d1.js";import"./colors.346e189f.js";import"./index.9ae6b6bd.js";import"./RightOutlined.f0169d6f.js";import"./index.843b5b7a.js";import"./types.59bd5472.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.fffd3e40.js";import"./_baseFor.f4e5f03f.js";import"./index.dc4111a7.js";import"./index.a172b251.js";import"./index.b6070937.js";import"./index.6ab39c74.js";import"./LeftOutlined.80992f5f.js";import"./index.d4063b66.js";import"./index.4dcad1d3.js";import"./zh_CN.0242bd16.js";import"./CaretDownFilled.47dfacc6.js";import"./index.5c7fcd9f.js";function T(){return(T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t}).apply(this,arguments)}function y(){return window}var S=i({name:"ABackTop",mixins:[o],inheritAttrs:!1,props:T(T({},{visibilityHeight:t.number,target:t.func,prefixCls:t.string,onClick:t.func}),{visibilityHeight:t.number.def(400)}),emits:["click"],setup:function(){return{configProvider:r("configProvider",n)}},data:function(){return{visible:!1,scrollEvent:null}},mounted:function(){var t=this;s((function(){var e=t.target||y;t.scrollEvent=a(e(),"scroll",t.handleScroll),t.handleScroll()}))},beforeUnmount:function(){this.scrollEvent&&this.scrollEvent.remove()},methods:{getCurrentScrollTop:function(){var t=(this.target||y)();return t===window?window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop:t.scrollTop},scrollToTop:function(t){var e=this.target;x(0,{getContainer:void 0===e?y:e}),this.$emit("click",t)},handleScroll:function(){var t=this.visibilityHeight,e=this.target,i=k((void 0===e?y:e)(),!0);this.setState({visible:i>t})}},render:function(){var t,e,i=this.prefixCls,o=this.$slots,r=(0,this.configProvider.getPrefixCls)("back-top",i),n=c(r,this.$attrs.class),s=l("div",{class:"".concat(r,"-content")},[l("div",{class:"".concat(r,"-icon")},null)]),a=T(T({},this.$attrs),{onClick:this.scrollToTop,class:n}),u=this.visible?l("div",a,[(null===(t=o.default)||void 0===t?void 0:t.call(o))||s]):null,m=d("fade");return l(f,m,"function"==typeof(e=u)||"[object Object]"===Object.prototype.toString.call(e)&&!p(e)?u:{default:function(){return[u]}})}}),w=i({name:"LayoutFeatures",components:{BackTop:e(S),LayoutLockPage:u((()=>import("./index.2c1f2ffa.js"))),SettingDrawer:u((()=>import("./index.d019784c.js").then((function(t){return t.i}))))},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e}=m();return{getTarget:()=>document.body,getUseOpenBackTop:t,getShowSettingButton:e}}});w.render=function(t,e,i,o,r,n){const s=g("LayoutLockPage"),a=g("BackTop"),c=g("SettingDrawer");return b(),j(v,null,[l(s),t.getUseOpenBackTop?(b(),j(a,{key:0,target:t.getTarget},null,8,["target"])):h("v-if",!0),t.getShowSettingButton?(b(),j(c,{key:1})):h("v-if",!0)],64)};export default w;