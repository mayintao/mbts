(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-admin-offerSystem"],{"03ab":function(n,t,e){var a=e("73b7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=e("967d").default;o("ee758eee",a,!0,{sourceMap:!1,shadowMode:!1})},"1ccf":function(n,t,e){"use strict";e.r(t);var a=e("7157"),o=e("3b20");for(var i in o)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(i);e("f8c2");var s=e("828b"),r=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"0298f924",null,!1,a["a"],void 0);t["default"]=r.exports},"3b20":function(n,t,e){"use strict";e.r(t);var a=e("d270"),o=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(i);t["default"]=o.a},7157:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return a}));var a={uForm:e("2515").default,uButton:e("c425").default,uLoadmore:e("09ba").default},o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"title-wrapper"},[e("v-uni-text",{staticClass:"title"},[n._v("学生管理-录取系统")])],1)],1),e("v-uni-view",{staticClass:"form-card"},[e("u-form",[e("v-uni-text",{staticClass:"section-title"},[n._v("请选择校区")]),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-text",{staticClass:"form-label"},[n._v("Student Campus *")]),e("v-uni-picker",{attrs:{value:n.campusIndex,range:n.campusList,"range-key":"name"},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.onCampusChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",attrs:{title:n.campusList[n.campusIndex].name}},[n._v(n._s(n.campusList[n.campusIndex].name))])],1)],1),e("v-uni-text",{staticClass:"section-title"},[n._v("请选择学生群体")]),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-text",{staticClass:"form-label"},[n._v("Student Offer Status *")]),e("v-uni-picker",{attrs:{value:n.offerStatusIndex,range:n.offerStatusList,"range-key":"name"},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.onOfferStatusChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input",attrs:{title:n.offerStatusList[n.offerStatusIndex].name}},[n._v(n._s(n.offerStatusList[n.offerStatusIndex].name))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"btn-container"},[e("u-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.getRegisterUserList.apply(void 0,arguments)}}},[n._v("查询")])],1),e("v-uni-scroll-view",{staticClass:"course-list",attrs:{"scroll-y":!0}},n._l(n.listData,(function(t,a){return e("v-uni-view",{key:a,staticClass:"course-card",on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.gotoDetail(t)}}},[e("v-uni-view",{staticClass:"course-header"},[e("v-uni-text",{staticClass:"course-title selectable-text"},[n._v(n._s(t.full_name))])],1),e("v-uni-view",{staticClass:"course-header"},[e("v-uni-text",{staticClass:"course-code selectable-text"},[n._v("学号: "+n._s(t.student_id))])],1),e("v-uni-view",{staticClass:"course-header"},[e("v-uni-view",{staticClass:"uni-input",style:{color:0===t.offer_status?"green":"red",fontWeight:"bold"}},[n._v(n._s(0===t.offer_status?"已录取":"尚未录取"))])],1),e("v-uni-view",{staticClass:"course-header"},[e("v-uni-text",{staticClass:"course-code"},[n._v(n._s(t.time))])],1)],1)})),1),e("u-loadmore",{on:{loadmore:function(t){arguments[0]=t=n.$handleEvent(t),n.addMoreData.apply(void 0,arguments)}}})],1)},i=[]},"73b7":function(n,t,e){var a=e("c86c");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 容器 */.container[data-v-0298f924]{display:flex;flex-direction:column;background-color:#f8f9fa;min-height:100vh;padding:%?20?%;align-items:center}\n/* 标题区域 */.header[data-v-0298f924]{text-align:center;margin-bottom:%?40?% /* 保持整体下边距 */}\n/* 标题样式 */.title-wrapper[data-v-0298f924]{margin-bottom:%?20?% /* 🔥 让标题和副标题分开 */}.title[data-v-0298f924]{font-size:%?42?%;font-weight:700;color:#333}\n/* 副标题样式 */.subtitle-wrapper[data-v-0298f924]{margin-top:%?10?% /* 确保副标题和标题有适当间距 */}.subtitle[data-v-0298f924]{font-size:%?30?%;color:#666; /* 颜色更柔和 */line-height:1.5}\n/* 表单卡片 */.form-card[data-v-0298f924]{width:92%;background:#fff;padding:%?30?%;border-radius:%?20?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1);background-image:url(/static/web_student_bg.png) /* 替换为你的背景图片路径 */}.selectable-text[data-v-0298f924]{-webkit-user-select:text;user-select:text; /* 允许文本复制 */word-wrap:break-word}\n/* 分区标题 */.section-title[data-v-0298f924]{font-size:%?32?%;font-weight:700;color:#444;margin:%?20?% 0;border-bottom:%?2?% solid #ddd;padding-bottom:%?10?%}\n/* 按钮 */.btn-container[data-v-0298f924]{margin-top:%?40?%;display:flex;justify-content:center}\n/* Form Item 纵向排列 */.form-item[data-v-0298f924]{margin-top:%?30?%;margin-bottom:%?30?%}\n/* 标签样式 */.form-label[data-v-0298f924]{margin-top:%?10?%;font-size:%?30?%;color:#333;font-weight:700;margin-bottom:%?10?%}\n/* 输入框的容器 */.input-wrapper[data-v-0298f924]{width:50%;background-color:#fff;border-radius:%?12?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1); /* 轻微阴影 */padding:%?8?% %?30?%;border:%?1?% solid #ddd; /* 边框 */margin-top:%?10?%;margin-bottom:%?10?%}\n/* 输入框 */.input-field[data-v-0298f924]{width:100%;height:%?80?%;font-size:%?30?%;color:#333;background-color:initial;border:none;outline:none}.text-wrap[data-v-0298f924]{white-space:normal;word-wrap:break-word}.scroll-text[data-v-0298f924]{white-space:nowrap;overflow-x:auto;width:100%}.picker-container[data-v-0298f924]{width:100%; /* 让 picker 占满父级 */display:flex;align-items:center;justify-content:left}.uni-input[data-v-0298f924]{height:%?50?%;padding:%?15?% %?25?%;line-height:%?50?%;font-size:%?28?%;background:#fff;flex:1}.popup-content[data-v-0298f924]{padding:%?20?%}.course-list[data-v-0298f924]{margin:%?40?%;height:80vh;overflow-y:auto}.course-card[data-v-0298f924]{background:#fff;padding:%?20?%;border-radius:%?16?%;margin-bottom:%?20?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1)}.course-header[data-v-0298f924]{display:flex;justify-content:space-between;align-items:center;margin-bottom:%?10?%}.course-title[data-v-0298f924]{font-size:%?32?%;font-weight:700;color:#333}.course-code[data-v-0298f924]{font-size:%?26?%;color:#666}.course-body[data-v-0298f924]{margin-bottom:%?20?%}.course-info[data-v-0298f924]{display:flex;justify-content:space-between;font-size:%?28?%;color:#444;margin-bottom:%?5?%}\n/* Form Item 纵向排列 */.form-item[data-v-0298f924]{margin-top:%?30?%;margin-bottom:%?30?%}\n/* 标签样式 */.form-label[data-v-0298f924]{margin-top:%?10?%;font-size:%?30?%;color:#333;font-weight:700;margin-bottom:%?10?%}\n/* 输入框的容器 */.input-wrapper[data-v-0298f924]{width:30%;background-color:#fff;border-radius:%?12?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1); /* 轻微阴影 */padding:%?8?% %?30?%;border:%?1?% solid #ddd; /* 边框 */margin-top:%?10?%;margin-bottom:%?10?%}.score-display[data-v-0298f924]{padding:%?10?% %?20?%;border-radius:%?10?%;text-align:center;font-size:%?32?%;font-weight:700;background-color:#f5f5f5 /* 默认背景 */}.score-empty[data-v-0298f924]{color:#999 /* 无成绩 */}.score-excellent[data-v-0298f924]{color:#4caf50 /* A 级 */}.score-good[data-v-0298f924]{color:#2196f3 /* B 级 */}.score-pass[data-v-0298f924]{color:#ff9800 /* C 级 */}.score-fail[data-v-0298f924]{color:#ff5722 /* D, F 不及格 */}.btn-container[data-v-0298f924]{display:flex;justify-content:center;align-items:center;width:100%}.select-btn[data-v-0298f924]{width:80%;margin:%?20?% 0; /* 上下 20rpx，左右保持居中 */background:linear-gradient(45deg,#007bff,#00c6ff);color:#fff;font-weight:700;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,.2);padding:12px 16px;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.select-btn[data-v-0298f924]:active{-webkit-transform:scale(.95);transform:scale(.95)}.select-btn-del[data-v-0298f924]{width:80%;margin:%?20?% 0; /* 上下 20rpx，左右保持居中 */background:linear-gradient(45deg,#ff7e5f,#feb47b);color:#fff;font-weight:700;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,.2);padding:12px 16px;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.select-btn-del[data-v-0298f924]:active{-webkit-transform:scale(.95);transform:scale(.95)}",""]),n.exports=t},d270:function(n,t,e){"use strict";e("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("c223");var a={data:function(){return{campusList:[{name:"ONL"},{name:"PG"}],campusIndex:0,selectedCampus:"",offerStatusList:[{name:"全部",num:2},{name:"未录取",num:1},{name:"录取",num:0}],offerStatusIndex:0,selectedOfferStatus:2,currentPage:0,listData:[]}},onLoad:function(){this.selectedCampus=this.campusList[0].name,console.log(this.selectedCampus)},onShow:function(){var n,t=uni.getStorageSync("student_info");t&&(console.log(t),n=t.full_name,console.log("123456789-----"),console.log(n)),n||(console.log("12312"),uni.navigateTo({url:"/pages/index/loginSys"}))},methods:{onCampusChange:function(n){console.log(n),this.campusIndex=n.detail.value,this.selectedCampus=this.campusList[this.campusIndex].name,console.log(this.selectedCampus)},onOfferStatusChange:function(n){console.log(n),this.offerStatusIndex=n.detail.value,this.selectedOfferStatus=this.offerStatusList[this.offerStatusIndex].num,console.log(this.selectedOfferStatus)},getRegisterUserList:function(){var n=this;uni.showLoading({title:"处理中..."}),uni.request({url:"https://mbtsserver.onrender.com/api/queryMBTSRegisterUserList?campus="+n.selectedCampus+"&offer_status="+n.selectedOfferStatus+"&startnum="+n.currentPage+"&key=registeruser1739935308mbts",method:"GET",header:{"Content-Type":"application/json",Accept:"application/json"},success:function(t){uni.hideLoading(),console.log(t),console.log(t.data.desc),200===t.data.code?n.currentPage>0?t.data.data.length>0&&(console.log(t.data.data.length),n.listData=n.listData.concat(t.data.data)):n.listData=t.data.data:uni.showModal({content:t.data.desc||"查询失败",showCancel:!1}),uni.stopPullDownRefresh()},fail:function(n){uni.hideLoading(),uni.stopPullDownRefresh(),console.log(n),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})},addMoreData:function(){this.currentPage+=20,this.getRegisterUserList()},onPullDownRefresh:function(){this.currentPage=0,this.getRegisterUserList()},gotoDetail:function(n){uni.setStorageSync("student_info",{full_name:n.full_name,student_id:n.student_id}),uni.navigateTo({url:"/pages/index/admin/studentDetail"})}}};t.default=a},f8c2:function(n,t,e){"use strict";var a=e("03ab"),o=e.n(a);o.a}}]);