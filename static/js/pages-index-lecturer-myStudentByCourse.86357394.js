(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-lecturer-myStudentByCourse"],{"42cc":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uIcon:n("2a05").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?n("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[n("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[n("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[n("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},i=[]},"5fdd":function(t,e,n){"use strict";n.r(e);var o=n("623d"),a=n("9ec6");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("8195");var s=n("828b"),r=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"a7ff38d2",null,!1,o["a"],void 0);e["default"]=r.exports},"623d":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uNavbar:n("f9b1").default,uButton:n("c425").default,uPopup:n("3741").default,uInput:n("7d3b").default,uLoadmore:n("09ba").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("u-navbar",{attrs:{title:t.course_code,"is-back":!0}}),n("v-uni-view",{staticClass:"btn-container"},[n("v-uni-text",{staticClass:"course-title"},[t._v(t._s(t.course_name))])],1),n("v-uni-scroll-view",{staticClass:"course-list",attrs:{"scroll-y":!0}},t._l(t.listData,(function(e,o){return n("v-uni-view",{key:o,staticClass:"course-card"},[n("v-uni-view",{staticClass:"course-header"},[n("v-uni-text",{staticClass:"form-label"},[t._v("学生姓名："+t._s(e.full_name))])],1),n("v-uni-view",{staticClass:"course-header"},[n("v-uni-text",{staticClass:"form-label"},[t._v("学生ID："+t._s(e.student_id))])],1),n("v-uni-view",{staticClass:"course-header"},[n("v-uni-text",{staticClass:"form-label"},[t._v("所属校区："+t._s(e.student_campus))])],1),n("v-uni-view",{staticClass:"form-item"},[n("v-uni-text",{staticClass:"form-label"},[t._v("学生成绩：")]),n("v-uni-view",{staticClass:"input-wrapper"},[n("v-uni-view",{staticClass:"uni-input score-display",class:t.getScoreClass(e.course_score)},[t._v(t._s(e.course_score?e.course_score:"还没有成绩"))])],1)],1),n("v-uni-view",{staticClass:"btn-container"},[n("u-button",{staticClass:"see-assignment-btn",attrs:{size:"default"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.gotoSeeAssignment(e)}}},[t._v("📖 点击查看课业")])],1),n("v-uni-view",{staticClass:"btn-container"},[n("u-button",{staticClass:"update-score-btn",attrs:{type:"error",size:"default"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.gotoUpdateScore(e)}}},[t._v("⚠️ 点击修改成绩")])],1),n("u-popup",{attrs:{mode:"center","border-radius":"20",closeable:!0},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},[n("v-uni-view",{staticClass:"popup-container"},[n("v-uni-text",{staticClass:"popup-title"},[t._v("修改成绩")]),n("u-input",{staticClass:"input-score",attrs:{placeholder:"请输入成绩",type:"text"},model:{value:t.newScore,callback:function(e){t.newScore=e},expression:"newScore"}}),n("v-uni-view",{staticClass:"popup-buttons"},[n("u-button",{attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelUpdate.apply(void 0,arguments)}}},[t._v("取消")]),n("u-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmUpdate.apply(void 0,arguments)}}},[t._v("确认修改")])],1)],1)],1)],1)})),1),n("u-loadmore",{on:{loadmore:function(e){arguments[0]=e=t.$handleEvent(e),t.addMoreData.apply(void 0,arguments)}}})],1)},i=[]},7255:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("4626"),n("c223"),n("0c26");var o={data:function(){return{full_name:"",course_name:"",course_code:"",currentPage:0,listData:[],showPopup:!1,newScore:"",selectedStudent:null}},onLoad:function(t){t&&(this.full_name=t.full_name,console.log(this.full_name),this.course_name=t.course_name,console.log(this.course_name),this.course_code=t.course_code,console.log(this.course_code)),this.queryMBTSCourseListByCourseCode()},methods:{getScoreClass:function(t){return t?["A+","A","A-"].includes(t)?"score-excellent":["B+","B","B-"].includes(t)?"score-good":["C+","C","C-"].includes(t)?"score-pass":"score-fail":"score-empty"},queryMBTSCourseListByCourseCode:function(){uni.showLoading({title:"查询中..."});var t=this;uni.request({url:"https://mbtsserver.onrender.com/api/queryMBTSCourseListByCourseCode?course_code="+t.course_code+"&startnum="+t.currentPage+"&key=registeruser1739935308mbts",method:"GET",success:function(e){uni.hideLoading(),console.log(e),console.log(e.data.desc),200===e.data.code?t.currentPage>0?e.data.data.length>0&&(console.log(e.data.data.length),t.listData=t.listData.concat(e.data.data)):t.listData=e.data.data:uni.showModal({content:e.data.desc||"查询课程失败",showCancel:!1}),uni.stopPullDownRefresh()},fail:function(t){uni.hideLoading(),uni.stopPullDownRefresh(),console.log(t),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})},addMoreData:function(){this.currentPage+=20,this.queryMBTSCourseListByCourseCode()},onPullDownRefresh:function(){this.currentPage=0,this.queryMBTSCourseListByCourseCode()},gotoSeeAssignment:function(t){console.log("item id is "+t.id),console.log("item full_name is "+t.full_name),console.log("item course_name is "+t.course_name),console.log("item course_code is "+t.course_code)},gotoUpdateScore:function(t){var e=this;console.log("item id is "+t.id),console.log("item full_name is "+t.full_name),console.log("item course_name is "+t.course_name),console.log("item course_code is "+t.course_code),uni.showModal({title:"确认更新",content:"确定要更新成绩吗？",success:function(n){n.confirm&&(e.selectedStudent=t,e.showPopup=!0)}})},confirmUpdate:function(){if(this.newScore.trim())if(this.selectedStudent){console.log("item id is "+this.selectedStudent.id),console.log("item full_name is "+this.selectedStudent.full_name),console.log("item course_name is "+this.selectedStudent.course_name),console.log("item course_code is "+this.selectedStudent.course_code);var t=this;uni.showLoading({title:"提交中..."}),uni.request({url:"https://mbtsserver.onrender.com/api/updateMBTSStudentCourseScore",method:"POST",data:{full_name:t.selectedStudent.full_name,course_code:t.selectedStudent.course_code,course_score:t.newScore,key:"registeruser1739935308mbts"},header:{"Content-Type":"application/json",Accept:"application/json"},success:function(e){uni.hideLoading(),console.log(e),console.log(e.data.desc),200===e.data.code?(uni.showToast({title:"修改成功",icon:"success"}),t.showPopup=!1,t.newScore="",t.selectedStudent=null,t.currentPage=0,t.queryMBTSCourseListByCourseCode()):uni.showModal({content:e.data.desc||"提交失败",showCancel:!1})},fail:function(t){uni.hideLoading(),console.log(t),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})}else uni.showToast({title:"未选择学生",icon:"none"});else uni.showToast({title:"成绩不能为空",icon:"none"})},cancelUpdate:function(){this.showPopup=!1,this.newScore=""}}};e.default=o},7707:function(t,e,n){"use strict";n.r(e);var o=n("b0e0"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"7d3b":function(t,e,n){"use strict";n.r(e);var o=n("42cc"),a=n("7707");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("c2ee");var s=n("828b"),r=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"23939e4b",null,!1,o["a"],void 0);e["default"]=r.exports},8195:function(t,e,n){"use strict";var o=n("ed77"),a=n.n(o);a.a},9100:function(t,e,n){var o=n("c86c");e=o(!1),e.push([t.i,".container[data-v-a7ff38d2]{padding:%?20?%;background-color:#f8f9fa}.course-list[data-v-a7ff38d2]{height:80vh;overflow-y:auto}.course-card[data-v-a7ff38d2]{background:#fff;padding:%?20?%;border-radius:%?16?%;margin-bottom:%?20?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1)}.course-header[data-v-a7ff38d2]{display:flex;justify-content:space-between;align-items:center;margin-bottom:%?10?%}.course-title[data-v-a7ff38d2]{font-size:%?32?%;font-weight:700;color:#333}.course-code[data-v-a7ff38d2]{font-size:%?26?%;color:#666}.course-body[data-v-a7ff38d2]{margin-bottom:%?20?%}.course-info[data-v-a7ff38d2]{display:flex;justify-content:space-between;font-size:%?28?%;color:#444;margin-bottom:%?5?%}.select-btn[data-v-a7ff38d2]{width:80%;margin:%?20?%}\n\n/* Form Item 纵向排列 */.form-item[data-v-a7ff38d2]{margin-top:%?30?%;margin-bottom:%?30?%}\n\n/* 标签样式 */.form-label[data-v-a7ff38d2]{margin-top:%?10?%;font-size:%?30?%;color:#333;font-weight:700;margin-bottom:%?10?%}\n\n/* 输入框的容器 */.input-wrapper[data-v-a7ff38d2]{width:30%;background-color:#fff;border-radius:%?12?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1); /* 轻微阴影 */padding:%?8?% %?30?%;border:%?1?% solid #ddd; /* 边框 */margin-top:%?10?%;margin-bottom:%?10?%}.score-display[data-v-a7ff38d2]{padding:%?10?% %?20?%;border-radius:%?10?%;text-align:center;font-size:%?32?%;font-weight:700;background-color:#f5f5f5 /* 默认背景 */}.score-empty[data-v-a7ff38d2]{color:#999 /* 无成绩 */}.score-excellent[data-v-a7ff38d2]{color:#4caf50 /* A 级 */}.score-good[data-v-a7ff38d2]{color:#2196f3 /* B 级 */}.score-pass[data-v-a7ff38d2]{color:#ff9800 /* C 级 */}.score-fail[data-v-a7ff38d2]{color:#ff5722 /* D, F 不及格 */}.update-score-btn[data-v-a7ff38d2]{font-size:%?36?%; /* 加大字体 */font-weight:700; /* 加粗 */background-color:#ff4d4f!important; /* 红色背景 */color:#fff!important; /* 白色字体 */border-radius:%?16?%; /* 圆角 */padding:%?20?% %?40?%; /* 增加内边距 */text-shadow:%?2?% %?2?% %?5?% rgba(0,0,0,.2); /* 文字阴影 */-webkit-animation:blink-data-v-a7ff38d2 1.5s infinite alternate;animation:blink-data-v-a7ff38d2 1.5s infinite alternate /* 闪烁动画 */}\n\n/* 添加一个轻微闪烁动画，提升注意力 */@-webkit-keyframes blink-data-v-a7ff38d2{from{opacity:1}to{opacity:.7}}@keyframes blink-data-v-a7ff38d2{from{opacity:1}to{opacity:.7}}\n\n/* 按钮样式 */.see-assignment-btn[data-v-a7ff38d2]{width:80%;margin:%?20?% 0; /* 上下 20rpx，左右保持居中 */background:linear-gradient(45deg,#ff994f,#f90);color:#fff;font-weight:700;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,.2);padding:12px 16px;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}\n\n/* 按钮样式 */.update-score-btn[data-v-a7ff38d2]{width:80%;margin:%?20?% 0; /* 上下 20rpx，左右保持居中 */background:linear-gradient(45deg,#ff4d4f,#ff4d00);color:#fff;font-weight:700;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,.2);padding:12px 16px;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}\n\n/* 弹窗整体样式 */.popup-container[data-v-a7ff38d2]{width:%?600?%;background:rgba(119,0,0,0);padding:%?40?%;border-radius:%?20?%;text-align:center;box-shadow:0 %?10?% %?30?% rgba(0,0,0,.1)}\n\n/* 标题样式 */.popup-title[data-v-a7ff38d2]{font-size:%?38?%;font-weight:700;margin-bottom:%?30?%;color:#333}\n\n/* 输入框 */.input-score[data-v-a7ff38d2]{width:100%;font-size:%?34?%;padding:%?20?%;border-radius:%?12?%;background:#f5f5f5;margin-bottom:%?30?%}\n\n/* 按钮组 */.popup-buttons[data-v-a7ff38d2]{display:flex;justify-content:space-between;margin-top:%?20?%}.btn-container[data-v-a7ff38d2]{display:flex;justify-content:center;align-items:center;width:100%}",""]),t.exports=e},"9ec6":function(t,e,n){"use strict";n.r(e);var o=n("7255"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},aa17:function(t,e,n){var o=n("c985");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("967d").default;a("0256f989",o,!0,{sourceMap:!1,shadowMode:!1})},b0e0:function(t,e,n){"use strict";n("6a54");var o=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa"),n("0c26");var a=o(n("93af")),i={name:"u-input",mixins:[a.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,n=t.detail.value;this.trim&&(n=this.$u.trim(n)),this.$emit("input",n),this.defaultValue=n,setTimeout((function(){e.dispatch("u-form-item","on-form-change",n)}),40)},handleBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t.detail.value),setTimeout((function(){e.dispatch("u-form-item","on-form-blur",t.detail.value)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=i},c2ee:function(t,e,n){"use strict";var o=n("aa17"),a=n.n(o);a.a},c985:function(t,e,n){var o=n("c86c");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-input[data-v-23939e4b]{position:relative;flex:1;display:flex;flex-direction:row}.u-input__input[data-v-23939e4b]{font-size:%?28?%;color:#303133;flex:1}.u-input__textarea[data-v-23939e4b]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;flex:1}.u-input--border[data-v-23939e4b]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-23939e4b]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-23939e4b]{margin-left:%?10?%}.u-input__right-icon--select[data-v-23939e4b]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-23939e4b]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},ed77:function(t,e,n){var o=n("9100");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("967d").default;a("262bb88a",o,!0,{sourceMap:!1,shadowMode:!1})}}]);