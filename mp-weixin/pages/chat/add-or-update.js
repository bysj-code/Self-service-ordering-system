(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/add-or-update"],{"0f6f":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,a,i,u){try{var s=e[i](u),o=s.value}catch(c){return void n(c)}s.done?t(o):Promise.resolve(o).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function s(e){i(u,r,a,s,o,"next",e)}function o(e){i(u,r,a,s,o,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("b7aa"))}.bind(null,n)).catch(n.oe)},o={data:function(){return{cross:"",ro:{yonghuId:!1,chatIssue:!1,issueTime:!1,chatReply:!1,replyTime:!1,zhuangtaiTypes:!1,chatTypes:!1,insertTime:!1},ruleForm:{yonghuId:"",chatIssue:"",issueTime:"",chatReply:"",replyTime:"",zhuangtaiTypes:"",zhuangtaiValue:"",chatTypes:"",chatValue:"",insertTime:""},user:{},zhuangtaiTypesOptions:[],zhuangtaiTypesIndex:0,chatTypesOptions:[],chatTypesIndex:0}},components:{wPicker:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var t=this;return u(r.default.mark((function n(){var a,i,u,s,o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={page:1,limit:100,dicCode:"zhuangtai_types"},n.next=3,t.$api.page("dictionary",a);case 3:return i=n.sent,t.zhuangtaiTypesOptions=i.data.list,u={page:1,limit:100,dicCode:"chat_types"},n.next=8,t.$api.page("dictionary",u);case 8:if(s=n.sent,t.chatTypesOptions=s.data.list,!e.id){n.next=16;break}return t.ruleForm.id=e.id,n.next=14,t.$api.info("chat",t.ruleForm.id);case 14:o=n.sent,t.ruleForm=o.data;case 16:e.chatId&&(t.ruleForm.chatId=e.chatId);case 17:case"end":return n.stop()}}),n)})))()},methods:{zhuangtaiTypesChange:function(e){this.zhuangtaiTypesIndex=e.target.value,this.ruleForm.zhuangtaiValue=this.zhuangtaiTypesOptions[this.zhuangtaiTypesIndex].indexName,this.ruleForm.zhuangtaiTypes=this.zhuangtaiTypesOptions[this.zhuangtaiTypesIndex].codeIndex},chatTypesChange:function(e){this.chatTypesIndex=e.target.value,this.ruleForm.chatValue=this.chatTypesOptions[this.chatTypesIndex].indexName,this.ruleForm.chatTypes=this.chatTypesOptions[this.chatTypesIndex].codeIndex},issueTimeConfirm:function(e){console.log(e),this.ruleForm.issueTime=e.result,this.$forceUpdate()},replyTimeConfirm:function(e){console.log(e),this.ruleForm.replyTime=e.result,this.$forceUpdate()},insertTimeConfirm:function(e){console.log(e),this.ruleForm.insertTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return u(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.ruleForm.chatIssue){n.next=3;break}return t.$utils.msg("问题不能为空"),n.abrupt("return");case 3:if(t.ruleForm.issueTime){n.next=6;break}return t.$utils.msg("问题时间不能为空"),n.abrupt("return");case 6:if(t.ruleForm.chatReply){n.next=9;break}return t.$utils.msg("回复不能为空"),n.abrupt("return");case 9:if(t.ruleForm.replyTime){n.next=12;break}return t.$utils.msg("回复时间不能为空"),n.abrupt("return");case 12:if(t.ruleForm.zhuangtaiTypes){n.next=15;break}return t.$utils.msg("状态不能为空"),n.abrupt("return");case 15:if(!t.ruleForm.id){n.next=20;break}return n.next=18,t.$api.update("chat",t.ruleForm);case 18:n.next=22;break;case 20:return n.next=22,t.$api.save("chat",t.ruleForm);case 22:e.setStorageSync("pingluenStateState",!0),t.$utils.msgBack("提交成功");case 24:case"end":return n.stop()}}),n)})))()},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(n,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o}).call(this,n("543d")["default"])},4072:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"b7aa"))}},a=function(){var e=this,t=e.$createElement;e._self._c},i=[]},4264:function(e,t,n){},7485:function(e,t,n){"use strict";n.r(t);var r=n("0f6f"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},"9ba2":function(e,t,n){"use strict";n.r(t);var r=n("4072"),a=n("7485");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("c445");var u,s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"25a52fe4",null,!1,r["a"],u);t["default"]=o.exports},b02d:function(e,t,n){"use strict";(function(e){n("48e8");r(n("66fd"));var t=r(n("9ba2"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},c445:function(e,t,n){"use strict";var r=n("4264"),a=n.n(r);a.a}},[["b02d","common/runtime","common/vendor"]]]);