(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-student-myApplications"],{"15e3":function(n,t,a){var i=a("8c67");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=a("967d").default;e("765b78ec",i,!0,{sourceMap:!1,shadowMode:!1})},"8c67":function(n,t,a){var i=a("c86c");t=i(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 容器 */.container[data-v-3a42c8ca]{display:flex;flex-direction:column;background-color:#f8f9fa;min-height:100vh;padding:%?20?%;align-items:center}\n/* 标题区域 */.header[data-v-3a42c8ca]{text-align:center;margin-bottom:%?40?% /* 保持整体下边距 */}\n/* 标题样式 */.title-wrapper[data-v-3a42c8ca]{margin-bottom:%?20?% /* 🔥 让标题和副标题分开 */}.title[data-v-3a42c8ca]{font-size:%?42?%;font-weight:700;color:#333}\n/* 副标题样式 */.subtitle-wrapper[data-v-3a42c8ca]{margin-top:%?10?% /* 确保副标题和标题有适当间距 */}.subtitle[data-v-3a42c8ca]{font-size:%?30?%;color:#666; /* 颜色更柔和 */line-height:1.5}\n/* 表单卡片 */.form-card[data-v-3a42c8ca]{width:92%;background:#fff;padding:%?30?%;border-radius:%?20?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1);background-image:url(/static/web_student_bg.png) /* 替换为你的背景图片路径 */}\n/* 分区标题 */.section-title[data-v-3a42c8ca]{font-size:%?32?%;font-weight:700;color:#444;margin:%?20?% 0;border-bottom:%?2?% solid #ddd;padding-bottom:%?10?%}\n/* 按钮 */.btn-container[data-v-3a42c8ca]{margin-top:%?40?%;display:flex;justify-content:center}\n/* Form Item 纵向排列 */.form-item[data-v-3a42c8ca]{margin-top:%?30?%;margin-bottom:%?30?%}\n/* 标签样式 */.form-label[data-v-3a42c8ca]{margin-top:%?10?%;font-size:%?30?%;color:#333;font-weight:700;margin-bottom:%?10?%}\n/* 输入框的容器 */.input-wrapper[data-v-3a42c8ca]{width:30%;background-color:#fff;border-radius:%?12?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1); /* 轻微阴影 */padding:%?8?% %?30?%;border:%?1?% solid #ddd; /* 边框 */margin-top:%?10?%;margin-bottom:%?10?%}\n/* 输入框 */.input-field[data-v-3a42c8ca]{width:100%;height:%?80?%;font-size:%?30?%;color:#333;background-color:initial;border:none;outline:none}.uni-input[data-v-3a42c8ca]{height:%?50?%;padding:%?15?% %?25?%;line-height:%?50?%;font-size:%?28?%;background:#fff;flex:1}",""]),n.exports=t},"997a":function(n,t,a){"use strict";a.r(t);var i=a("ba50"),e=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(n){a.d(t,n,(function(){return i[n]}))}(s);t["default"]=e.a},ba50:function(n,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{id:0,full_name:"",student_id:"0000",offer_status:1,form:{phoneNumber:"",currentChurch:"",nationality:"",housingStatus:"",email:""},student_campus:"",program:"",all_credit:0,program_code:"0000",type_of_programme:"",program_description:"",classification:"",year:0}},onLoad:function(n){n&&(this.full_name=n.full_name,console.log(this.full_name)),this.queryUserDetail()},methods:{queryUserDetail:function(){var n=this;uni.showLoading({title:"处理中..."}),uni.request({url:"https://mbtsserver.onrender.com/api/queryMBTSRegisterUserDetail?id=0&student_id=&full_name="+n.full_name+"&key=registeruser1739935308mbts",method:"GET",header:{"Content-Type":"application/json",Accept:"application/json"},success:function(t){uni.hideLoading(),console.log(t),console.log(t.data.desc),200===t.data.code?(uni.showToast({title:"成功",icon:"success"}),n.id=t.data.data[0].id,n.student_id=t.data.data[0].student_id,n.form.currentChurch=t.data.data[0].current_church,n.form.email=t.data.data[0].email,n.form.housingStatus=t.data.data[0].housing_status,n.form.nationality=t.data.data[0].nationality,n.form.phoneNumber=t.data.data[0].phone_number,n.student_campus=t.data.data[0].student_campus,n.program=t.data.data[0].program,n.all_credit=t.data.data[0].all_credit,n.program_code=t.data.data[0].program_code,n.type_of_programme=t.data.data[0].type_of_programme,n.program_description=t.data.data[0].program_description,n.classification=t.data.data[0].classification,n.year=t.data.data[0].year,n.offer_status=t.data.data[0].offer_status):uni.showModal({content:t.data.desc||"获取失败",showCancel:!1})},fail:function(n){uni.hideLoading(),console.log(n),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})},deleteApplication:function(){var n=this;0!==this.offer_status?uni.showModal({title:"确认删除",content:"确定要删除该申请吗？",success:function(t){if(t.confirm){var a=n;uni.showLoading({title:"删除中..."}),uni.request({url:"https://mbtsserver.onrender.com/api/deleteMBTSRegisterUserById?id="+a.id+"&key=registeruser1739935308mbts",method:"GET",header:{"Content-Type":"application/json",Accept:"application/json"},success:function(n){uni.hideLoading(),console.log(n),console.log(n.data.desc),200===n.data.code?(uni.showToast({title:"删除成功",icon:"success"}),setTimeout((function(){uni.navigateBack()}),1e3)):uni.showModal({content:n.data.desc||"获取失败",showCancel:!1})},fail:function(n){uni.hideLoading(),console.log(n),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})}}}):uni.showModal({title:"错误",content:"录取状态不能手动删除申请，请联系管理员处理！",showCancel:!1})}}};t.default=i},ccbc:function(n,t,a){"use strict";a.d(t,"b",(function(){return e})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var i={uForm:a("2515").default,uButton:a("c425").default},e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"title-wrapper"},[a("v-uni-text",{staticClass:"title"},[n._v("我的申请")])],1),a("v-uni-view",{staticClass:"subtitle-wrapper"},[a("v-uni-text",{staticClass:"subtitle"},[n._v("如需修改信息请与我们您联系。")])],1)],1),a("v-uni-view",{staticClass:"form-card"},[a("u-form",[a("v-uni-text",{staticClass:"section-title"},[n._v("👤 个人信息")]),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("Full Name")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.full_name))])],1)],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("学生ID")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.student_id))])],1)],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("录取状态")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input",style:{color:0===n.offer_status?"green":"red",fontWeight:"bold"}},[n._v(n._s(0===n.offer_status?"🎉 恭喜，已录取":"⚠️ 尚未录取"))])],1)],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("Email")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.form.email))])],1)],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("Phone Number")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.form.phoneNumber))])],1)],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("Current Church/Organization")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.form.currentChurch))])],1)],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("Nationality")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.form.nationality))])],1)],1),a("v-uni-text",{staticClass:"section-title"},[n._v("🏠 住宿信息")]),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("Housing Status")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.form.housingStatus))])],1)],1),a("v-uni-text",{staticClass:"section-title"},[n._v("🏫 学校信息")]),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("Student Category")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.student_campus))])],1)],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("Program")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.program))])],1)],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("All Credit")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input"},[n._v("总 "+n._s(n.all_credit)+" 学分")])],1)],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("Program Code")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.program_code))])],1)],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("Type Of Programme")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.type_of_programme))])],1)],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("Program Description")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.program_description))])],1)],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("Classification")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input"},[n._v(n._s(n.classification))])],1)],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-text",{staticClass:"form-label"},[n._v("Year")]),a("v-uni-view",{staticClass:"input-wrapper"},[a("v-uni-view",{staticClass:"uni-input"},[n._v("学制 "+n._s(n.year)+" 学年")])],1)],1)],1),a("v-uni-view",{staticClass:"btn-container"},[a("u-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.deleteApplication.apply(void 0,arguments)}}},[n._v("删除该入学申请")])],1)],1)],1)},s=[]},dd2d:function(n,t,a){"use strict";var i=a("15e3"),e=a.n(i);e.a},feec:function(n,t,a){"use strict";a.r(t);var i=a("ccbc"),e=a("997a");for(var s in e)["default"].indexOf(s)<0&&function(n){a.d(t,n,(function(){return e[n]}))}(s);a("dd2d");var o=a("828b"),r=Object(o["a"])(e["default"],i["b"],i["c"],!1,null,"3a42c8ca",null,!1,i["a"],void 0);t["default"]=r.exports}}]);