(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/caipinOrder/list"],{3316:function(e,n,r){"use strict";r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return t}));var t={mescrollUni:function(){return Promise.all([r.e("common/vendor"),r.e("components/mescroll-uni/mescroll-uni")]).then(r.bind(null,"aa08"))},uniPopup:function(){return r.e("components/uni-popup/uni-popup").then(r.bind(null,"7c44"))},uniRate:function(){return r.e("uni_modules/uni-rate/components/uni-rate/uni-rate").then(r.bind(null,"3bbb"))}},i=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"5ecb":function(e,n,r){"use strict";var t=r("76b7"),i=r.n(t);i.a},"76b7":function(e,n,r){},"843e":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=i(r("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,r,t,i,a,u){try{var c=e[a](u),s=c.value}catch(o){return void r(o)}c.done?n(s):Promise.resolve(s).then(t,i)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var u=e.apply(n,r);function c(e){a(u,t,i,c,s,"next",e)}function s(e){a(u,t,i,c,s,"throw",e)}c(void 0)}))}}var c={data:function(){return{navlist:[],currentIndex:0,pages:1,list:[],mescroll:null,downOption:{auto:!1},upOption:{page:{},noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,caipinLiuyanText:"",user:"",caipinId:null,caipinCommentbackText:null,caipinCommentbackPingfenNumber:0,deliverId:null,caipinOrderCourierName:null,caipinOrderCourierNumber:null}},onShow:function(){var n=this;return u(t.default.mark((function r(){var i,a,u,c;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=e.getStorageSync("nowTable"),r.next=3,n.$api.session(i);case 3:return a=r.sent,n.user=a.data,n.hasNext=!0,u={page:1,limit:100,dicCode:"caipin_order_types"},r.next=9,n.$api.page("dictionary",u);case 9:c=r.sent,n.navlist=c.data.list,n.mescroll&&n.mescroll.resetUpScroll();case 12:case"end":return r.stop()}}),r)})))()},methods:{navselect:function(e){this.currentIndex=e,this.caipinOrderTypes=e,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(e){var n=this;return u(t.default.mark((function r(){var i,a;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={page:e.num,limit:e.size},n.caipinOrderTypes&&(i["caipinOrderTypes"]=n.caipinOrderTypes),r.next=4,n.$api.page("caipinOrder",i);case 4:a=r.sent,1==e.num&&(n.list=[]),n.list=n.list.concat(a.data.list),0==a.data.list.length&&(n.hasNext=!1),e.endSuccess(e.size,n.hasNext);case 9:case"end":return r.stop()}}),r)})))()},refund:function(n){var r=this;return u(t.default.mark((function i(){var a;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:a=r,e.showModal({title:"提示",content:"是否确认退款",success:function(){var e=u(t.default.mark((function e(r){var i;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r.confirm){e.next=7;break}return i=[{key:"id",val:n.id}],e.next=4,a.$api.requestCondition("caipinOrder","refund",i);case 4:e.sent,a.$utils.msg("退款成功"),a.mescroll&&a.mescroll.resetUpScroll();case 7:case"end":return e.stop()}}),e)})));function r(n){return e.apply(this,arguments)}return r}()});case 2:case"end":return i.stop()}}),i)})))()},openDeliver:function(e){var n=this;return u(t.default.mark((function r(){return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n.deliverId=null,n.caipinOrderCourierName=null,n.caipinOrderCourierNumber=null,n.deliverId=e,n.$refs.deliver.open();case 5:case"end":return r.stop()}}),r)})))()},closeDeliver:function(){this.$refs.deliver.close()},deliver:function(n){var r=this;return u(t.default.mark((function n(){var i;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=r,null!=i.caipinOrderCourierName&&""!=i.caipinOrderCourierName&&"null"!=i.caipinOrderCourierName){n.next=3;break}return n.abrupt("return",i.$utils.msg("配送员名称不能为空"));case 3:if(null!=i.caipinOrderCourierNumber&&""!=i.caipinOrderCourierNumber&&"null"!=i.caipinOrderCourierNumber){n.next=5;break}return n.abrupt("return",i.$utils.msg("联系方式不能为空"));case 5:e.showModal({title:"提示",content:"是否确认发货",success:function(){var e=u(t.default.mark((function e(n){var r;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.confirm){e.next=8;break}return r=[{key:"id",val:i.deliverId},{key:"caipinOrderCourierName",val:i.caipinOrderCourierName},{key:"caipinOrderCourierNumber",val:i.caipinOrderCourierNumber}],e.next=4,i.$api.requestCondition("caipinOrder","deliver",r);case 4:e.sent,i.$refs.deliver.close(),i.$utils.msg("成功发货"),i.mescroll&&i.mescroll.resetUpScroll();case 8:case"end":return e.stop()}}),e)})));function n(n){return e.apply(this,arguments)}return n}()});case 6:case"end":return n.stop()}}),n)})))()},receiving:function(n){var r=this;return u(t.default.mark((function i(){var a;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:a=r,e.showModal({title:"提示",content:"是否确认要取餐吗？",success:function(){var e=u(t.default.mark((function e(r){var i;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r.confirm){e.next=7;break}return i=[{key:"id",val:n}],e.next=4,a.$api.requestCondition("caipinOrder","receiving",i);case 4:e.sent,a.$utils.msg("操作成功"),a.mescroll&&a.mescroll.resetUpScroll();case 7:case"end":return e.stop()}}),e)})));function r(n){return e.apply(this,arguments)}return r}()});case 2:case"end":return i.stop()}}),i)})))()},commentback:function(e){this.caipinId=null,this.caipinId=e,this.$refs.popup.open()},pingfen:function(e){this.caipinCommentbackPingfenNumber=e.value},onFinishTap:function(){var e=this;return u(t.default.mark((function n(){var r,i;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e,r.caipinCommentbackText){n.next=4;break}return r.$utils.msg("请填写评价内容"),n.abrupt("return");case 4:if(!(r.caipinCommentbackPingfenNumber<=0)){n.next=7;break}return r.$utils.msg("请评分"),n.abrupt("return");case 7:return i=[{key:"id",val:r.caipinId},{key:"commentbackText",val:r.caipinCommentbackText},{key:"caipinCommentbackPingfenNumber",val:r.caipinCommentbackPingfenNumber}],n.next=10,r.$api.requestCondition("caipinOrder","commentback",i);case 10:r.$utils.msg("评论成功"),r.$refs.popup.close(),r.mescroll&&r.mescroll.resetUpScroll();case 13:case"end":return n.stop()}}),n)})))()},onCloseWinTap:function(){this.$refs.popup.close()}}};n.default=c}).call(this,r("543d")["default"])},"893d":function(e,n,r){"use strict";r.r(n);var t=r("3316"),i=r("d18d");for(var a in i)"default"!==a&&function(e){r.d(n,e,(function(){return i[e]}))}(a);r("5ecb");var u,c=r("f0c5"),s=Object(c["a"])(i["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],u);n["default"]=s.exports},d18d:function(e,n,r){"use strict";r.r(n);var t=r("843e"),i=r.n(t);for(var a in t)"default"!==a&&function(e){r.d(n,e,(function(){return t[e]}))}(a);n["default"]=i.a},d205:function(e,n,r){"use strict";(function(e){r("48e8");t(r("66fd"));var n=t(r("893d"));function t(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=r,e(n.default)}).call(this,r("543d")["createPage"])}},[["d205","common/runtime","common/vendor"]]]);