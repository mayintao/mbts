(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-student-myFees"],{"1ec0":function(n,t,e){"use strict";var i=e("8a9c"),a=e.n(i);a.a},"5f23":function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return i}));var i={uForm:e("2515").default,uButton:e("c425d").default},a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"title-wrapper"},[e("v-uni-text",{staticClass:"title"},[n._v("我的费用")])],1),e("v-uni-view",{staticClass:"subtitle-wrapper"},[e("v-uni-text",{staticClass:"subtitle"},[n._v("费用包括学费及学杂费。")])],1)],1),e("v-uni-view",{staticClass:"form-card"},[e("u-form",[e("v-uni-text",{staticClass:"section-title"},[n._v("👤 个人信息")]),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-text",{staticClass:"form-label"},[n._v("Full Name")]),e("v-uni-view",{staticClass:"input-wrapper"},[e("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.full_name))])],1)],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-text",{staticClass:"form-label"},[n._v("学生ID")]),e("v-uni-view",{staticClass:"input-wrapper"},[e("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.student_id))])],1)],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-text",{staticClass:"form-label"},[n._v("录取状态")]),e("v-uni-view",{staticClass:"input-wrapper"},[e("v-uni-view",{staticClass:"uni-input",style:{color:0===n.offer_status?"green":"red",fontWeight:"bold"}},[n._v(n._s(0===n.offer_status?"🎉 恭喜，已录取":"⚠️ 尚未录取"))])],1)],1),e("v-uni-text",{staticClass:"section-title"},[n._v("💵 待缴学费")]),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"input-wrapper"},[e("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.fees))])],1)],1),e("v-uni-text",{staticClass:"section-title"},[n._v("💰 其他费用")]),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"input-wrapper"},[e("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.other_fee))])],1),e("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.other_fee_detail))])],1)],1),e("v-uni-view",{staticClass:"btn-container"},[e("u-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gotoPay.apply(void 0,arguments)}}},[n._v("去缴费")])],1)],1)],1)},s=[]},7395:function(n,t,e){"use strict";e("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{full_name:"",student_id:"0000",offer_status:1,fees:0,other_fee:0,other_fee_detail:"费用明细：费用明细费用明细费用明细费用明细费用明细费用明细费用明细费用明细费用明细"}},onLoad:function(n){n&&(this.full_name=n.full_name,console.log(this.full_name)),this.full_name&&this.queryUserDetail()},methods:{queryUserDetail:function(){var n=this;uni.showLoading({title:"处理中..."}),uni.request({url:"https://mbtsserver.onrender.com/api/queryMBTSRegisterUserDetail?id=0&student_id=&full_name="+n.full_name+"&key=registeruser1739935308mbts",method:"GET",header:{"Content-Type":"application/json",Accept:"application/json"},success:function(t){uni.hideLoading(),console.log(t),console.log(t.data.desc),200===t.data.code?(uni.showToast({title:"成功",icon:"success"}),n.student_id=t.data.data[0].student_id,n.offer_status=t.data.data[0].offer_status,n.fees=t.data.data[0].fees,n.other_fee=t.data.data[0].other_fee,n.other_fee_detail=t.data.data[0].other_fee_detail):uni.showModal({content:t.data.desc||"获取失败",showCancel:!1})},fail:function(n){uni.hideLoading(),console.log(n),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})},gotoPay:function(){window.location.href="https://payment.ipay88.com.my/VirtualLink/PaymentDetail.asp?Merchant=A608%2fCnM%2bwGeLgF%2bU7dBfKPdkdo%3dM43191_S0001"}}};t.default=i},7537:function(n,t,e){var i=e("c86c");t=i(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 容器 */.container[data-v-06b30330]{display:flex;flex-direction:column;background-color:#f8f9fa;min-height:100vh;padding:%?20?%;align-items:center;background-image:url(/static/web_student_bg.png) /* 替换为你的背景图片路径 */}\n/* 标题区域 */.header[data-v-06b30330]{text-align:center;margin-bottom:%?40?% /* 保持整体下边距 */}\n/* 标题样式 */.title-wrapper[data-v-06b30330]{margin-bottom:%?20?% /* 🔥 让标题和副标题分开 */}.title[data-v-06b30330]{font-size:%?42?%;font-weight:700;color:#333}\n/* 副标题样式 */.subtitle-wrapper[data-v-06b30330]{margin-top:%?10?% /* 确保副标题和标题有适当间距 */}.subtitle[data-v-06b30330]{font-size:%?30?%;color:#666; /* 颜色更柔和 */line-height:1.5}\n/* 表单卡片 */.form-card[data-v-06b30330]{width:92%;background:#fff;padding:%?30?%;border-radius:%?20?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1)}\n/* 分区标题 */.section-title[data-v-06b30330]{font-size:%?32?%;font-weight:700;color:#444;margin:%?20?% 0;border-bottom:%?2?% solid #ddd;padding-bottom:%?10?%}\n/* 按钮 */.btn-container[data-v-06b30330]{margin-top:%?40?%;display:flex;justify-content:center}\n/* Form Item 纵向排列 */.form-item[data-v-06b30330]{margin-top:%?30?%;margin-bottom:%?30?%}\n/* 标签样式 */.form-label[data-v-06b30330]{margin-top:%?10?%;font-size:%?30?%;color:#333;font-weight:700;margin-bottom:%?10?%}\n/* 输入框的容器 */.input-wrapper[data-v-06b30330]{width:50%;background-color:#fff;border-radius:%?12?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1); /* 轻微阴影 */padding:%?8?% %?30?%;border:%?1?% solid #ddd; /* 边框 */margin-top:%?10?%;margin-bottom:%?10?%}\n/* 输入框 */.input-field[data-v-06b30330]{width:100%;height:%?80?%;font-size:%?30?%;color:#333;background-color:initial;border:none;outline:none}.uni-input[data-v-06b30330]{height:%?50?%;padding:%?15?% %?25?%;line-height:%?50?%;font-size:%?28?%;background:#fff;flex:1}",""]),n.exports=t},8347:function(n,t,e){"use strict";e.r(t);var i=e("7395"),a=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(s);t["default"]=a.a},"84d9":function(n,t,e){"use strict";e.r(t);var i=e("5f23"),a=e("8347");for(var s in a)["default"].indexOf(s)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(s);e("1ec0");var o=e("828b"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"06b30330",null,!1,i["a"],void 0);t["default"]=r.exports},"8a9c":function(n,t,e){var i=e("7537");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("967d").default;a("2eb6d646",i,!0,{sourceMap:!1,shadowMode:!1})}}]);