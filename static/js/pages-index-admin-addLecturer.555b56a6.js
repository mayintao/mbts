(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-admin-addLecturer"],{"0519":function(n,t,e){"use strict";var a=e("3b83"),i=e.n(a);i.a},"3b83":function(n,t,e){var a=e("ce64");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("967d").default;i("017db2c8",a,!0,{sourceMap:!1,shadowMode:!1})},a6e6:function(n,t,e){"use strict";e.r(t);var a=e("f2fc"),i=e("dc26");for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("0519");var r=e("828b"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"23bd4c69",null,!1,a["a"],void 0);t["default"]=c.exports},bc1b:function(n,t,e){"use strict";e("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{full_name:"",lecturer_name:"",email:""}},onLoad:function(n){n&&(this.full_name=n.full_name,console.log(this.full_name))},methods:{submitApplication:function(){if(this.lecturer_name&&this.email){uni.showLoading({title:"提交中..."}),uni.request({url:"https://mbtsserver.onrender.com/api/insertMBTSLecturer",method:"POST",data:{lecturer_name:this.lecturer_name,email:this.email,key:"registeruser1739935308mbts"},header:{"Content-Type":"application/json",Accept:"application/json"},success:function(n){uni.hideLoading(),console.log(n),console.log(n.data.desc),200===n.data.code?uni.showToast({title:"提交成功",icon:"success"}):uni.showModal({content:n.data.desc||"提交失败",showCancel:!1})},fail:function(n){uni.hideLoading(),console.log(n),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})}else uni.showToast({title:"请填写讲师信息",icon:"none"})}}};t.default=a},ce64:function(n,t,e){var a=e("c86c");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 容器 */.container[data-v-23bd4c69]{display:flex;flex-direction:column;background-color:#f8f9fa;min-height:100vh;padding:%?20?%;align-items:center}\n/* 标题区域 */.header[data-v-23bd4c69]{text-align:center;margin-bottom:%?40?% /* 保持整体下边距 */}\n/* 标题样式 */.title-wrapper[data-v-23bd4c69]{margin-bottom:%?20?% /* 🔥 让标题和副标题分开 */}.title[data-v-23bd4c69]{font-size:%?42?%;font-weight:700;color:#333}\n/* 副标题样式 */.subtitle-wrapper[data-v-23bd4c69]{margin-top:%?10?% /* 确保副标题和标题有适当间距 */}.subtitle[data-v-23bd4c69]{font-size:%?30?%;color:#666; /* 颜色更柔和 */line-height:1.5}\n/* 表单卡片 */.form-card[data-v-23bd4c69]{width:92%;background:#fff;padding:%?30?%;border-radius:%?20?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1);background-image:url(/static/web_student_bg.png) /* 替换为你的背景图片路径 */}\n/* 分区标题 */.section-title[data-v-23bd4c69]{font-size:%?32?%;font-weight:700;color:#444;margin:%?20?% 0;border-bottom:%?2?% solid #ddd;padding-bottom:%?10?%}\n/* 按钮 */.btn-container[data-v-23bd4c69]{margin-top:%?40?%;display:flex;justify-content:center}\n/* Form Item 纵向排列 */.form-item[data-v-23bd4c69]{margin-top:%?30?%;margin-bottom:%?30?%}\n/* 标签样式 */.form-label[data-v-23bd4c69]{margin-top:%?10?%;font-size:%?30?%;color:#333;font-weight:700;margin-bottom:%?10?%}\n/* 输入框的容器 */.input-wrapper[data-v-23bd4c69]{width:30%;background-color:#fff;border-radius:%?12?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1); /* 轻微阴影 */padding:%?8?% %?30?%;border:%?1?% solid #ddd; /* 边框 */margin-top:%?10?%;margin-bottom:%?10?%}\n/* 输入框 */.input-field[data-v-23bd4c69]{width:100%;height:%?80?%;font-size:%?30?%;color:#333;background-color:initial;border:none;outline:none}.text-wrap[data-v-23bd4c69]{white-space:normal;word-wrap:break-word}.scroll-text[data-v-23bd4c69]{white-space:nowrap;overflow-x:auto;width:100%}.picker-container[data-v-23bd4c69]{width:100%; /* 让 picker 占满父级 */display:flex;align-items:center;justify-content:left}.uni-input[data-v-23bd4c69]{height:%?50?%;padding:%?15?% %?25?%;line-height:%?50?%;font-size:%?28?%;background:#fff;flex:1}.popup-content[data-v-23bd4c69]{padding:%?20?%}",""]),n.exports=t},dc26:function(n,t,e){"use strict";e.r(t);var a=e("bc1b"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},f2fc:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var a={uForm:e("2515").default,uButton:e("c425").default},i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"title-wrapper"},[e("v-uni-text",{staticClass:"title"},[n._v("新增讲师")])],1)],1),e("v-uni-view",{staticClass:"form-card"},[e("u-form",[e("v-uni-view",{staticClass:"form-item"},[e("v-uni-text",{staticClass:"form-label"},[n._v("讲师姓名 *")]),e("v-uni-view",{staticClass:"input-wrapper"},[e("v-uni-input",{staticClass:"input-field",attrs:{placeholder:"请输入讲师姓名"},model:{value:n.lecturer_name,callback:function(t){n.lecturer_name=t},expression:"lecturer_name"}})],1)],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-text",{staticClass:"form-label"},[n._v("Email *")]),e("v-uni-view",{staticClass:"input-wrapper"},[e("v-uni-input",{staticClass:"input-field",attrs:{type:"email",placeholder:"请输入讲师邮箱"},model:{value:n.email,callback:function(t){n.email=t},expression:"email"}})],1)],1)],1),e("v-uni-view",{staticClass:"btn-container"},[e("u-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.submitApplication.apply(void 0,arguments)}}},[n._v("提交申请")])],1)],1)],1)},o=[]}}]);