(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-student-myCourses"],{"13c3":function(t,e,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("fd3c"),n("4626"),n("c223"),n("4100");var o=a(n("a934")),i={data:function(){return{s3:null,full_name:"",currentPage:0,listData:[],deleteButtonPress:!1,uploadButtonPress:!1}},onLoad:function(t){var e=this;t&&(this.full_name=t.full_name,console.log(this.full_name),uni.request({url:"https://mbtsserver.onrender.com/api/getAWSKey?key=registeruser1739935308mbts",method:"GET",success:function(t){console.log(t),o.default.config.update({accessKeyId:t.data.accessKeyId,secretAccessKey:t.data.secretAccessKey,region:t.data.region}),e.s3=new o.default.S3},fail:function(t){console.log(t)}})),this.queryStudentCourseList()},methods:{formatTimetable:function(t){if(!t)return[];if("string"===typeof t)try{t=JSON.parse(t),console.log(t)}catch(e){return console.error("JSON 解析失败:",e),[]}return Array.isArray(t)?t.map((function(t){return{date:t,info:"上课",backgroundColor:"red",color:"#ffffff"}})):[]},onDateChange:function(t){console.log("选择的日期:",t)},getScoreClass:function(t){return t?["A+","A","A-"].includes(t)?"score-excellent":["B+","B","B-"].includes(t)?"score-good":["C+","C","C-"].includes(t)?"score-pass":"score-fail":"score-empty"},queryStudentCourseList:function(){uni.showLoading({title:"查询中..."});var t=this;uni.request({url:"https://mbtsserver.onrender.com/api/queryMBTSStudentCourseList?student_id=&full_name="+t.full_name+"&startnum="+t.currentPage+"&key=registeruser1739935308mbts",method:"GET",success:function(e){uni.hideLoading(),console.log(e),console.log(e.data.desc),200===e.data.code?t.currentPage>0?e.data.data.length>0&&(console.log(e.data.data.length),t.listData=t.listData.concat(e.data.data)):t.listData=e.data.data:uni.showModal({content:e.data.desc||"查询课程失败",showCancel:!1}),uni.stopPullDownRefresh()},fail:function(t){uni.hideLoading(),uni.stopPullDownRefresh(),console.log(t),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})},addMoreData:function(){this.currentPage+=20,this.queryStudentCourseList()},onPullDownRefresh:function(){this.currentPage=0,this.queryStudentCourseList()},gotoUploadAssignment:function(t){var e=this;console.log("item id is "+t.id),uni.chooseFile({count:1,type:"all",success:function(t){var n=t.tempFiles[0],a=n.name;console.log(a),uni.showLoading({title:"upload..."});var o=new Blob([n],{type:n.type}),i={Bucket:"mbts-assignment",Key:a,Body:o,ContentType:n.type};e.s3.upload(i,(function(t,e){uni.hideLoading(),t?console.error("上传失败",t):console.log("上传成功",e.Location)}))},fail:function(t){console.error("选择文件失败",t)}})},gotoSeeAssignment:function(t){console.log("item id is "+t.id)},gotoDeleteCourse:function(t){var e=this;console.log("item id is "+t.id);var n=t.timetable;if(console.log(n),n){if("string"===typeof n)try{n=JSON.parse(n)}catch(i){console.error("JSON 解析失败:",i)}if(console.log(n),Array.isArray(n)){var a=(new Date).toISOString().split("T")[0],o=n.sort()[0];if(a>=o)return void uni.showModal({title:"错误",content:"已经开课，不能手动删除申请，请联系管理员处理！",showCancel:!1})}}t.course_score?uni.showModal({title:"错误",content:"已有成绩，不能手动删除申请，请联系管理员处理！",showCancel:!1}):uni.showModal({title:"确认删除",content:"确定要删除"+t.course_name+"吗？",success:function(n){if(n.confirm){var a=e;uni.showLoading({title:"删除中..."}),uni.request({url:"https://mbtsserver.onrender.com/api/deleteMBTSStudentCourseById?id="+t.id+"&key=registeruser1739935308mbts",method:"GET",header:{"Content-Type":"application/json",Accept:"application/json"},success:function(t){uni.hideLoading(),console.log(t),console.log(t.data.desc),200===t.data.code?(uni.showToast({title:"删除成功",icon:"success"}),a.currentPage=0,a.queryStudentCourseList()):uni.showModal({content:t.data.desc||"获取失败",showCancel:!1})},fail:function(t){uni.hideLoading(),console.log(t),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})}}})}}};e.default=i},1776:function(t,e,n){var a=n("6e3f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("967d").default;o("54a60618",a,!0,{sourceMap:!1,shadowMode:!1})},"191b":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-navbar[data-v-1d7f90d0]{width:100%}.u-navbar-fixed[data-v-1d7f90d0]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-1d7f90d0]{width:100%}.u-navbar-inner[data-v-1d7f90d0]{display:flex;flex-direction:row;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-1d7f90d0]{display:flex;flex-direction:row;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-1d7f90d0]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-1d7f90d0]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-1d7f90d0]{flex:1}.u-title[data-v-1d7f90d0]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-1d7f90d0]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.u-slot-content[data-v-1d7f90d0]{flex:1;display:flex;flex-direction:row;align-items:center}',""]),t.exports=e},2885:function(t,e,n){"use strict";n.r(e);var a=n("13c3"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"349b":function(t,e,n){"use strict";n.r(e);var a=n("c118"),o=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"4d70":function(t,e,n){var a=n("191b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("967d").default;o("4381c943",a,!0,{sourceMap:!1,shadowMode:!1})},5468:function(t,e,n){"use strict";n.r(e);var a=n("b03c"),o=n("2885");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("982a");var s=n("828b"),r=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"551cc7f9",null,!1,a["a"],void 0);e["default"]=r.exports},"6e3f":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,".container[data-v-551cc7f9]{padding:%?20?%;background-color:#f8f9fa}.course-list[data-v-551cc7f9]{height:80vh;overflow-y:auto}.course-card[data-v-551cc7f9]{background:#fff;padding:%?20?%;border-radius:%?16?%;margin-bottom:%?20?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1)}.course-header[data-v-551cc7f9]{display:flex;justify-content:space-between;align-items:center;margin-bottom:%?10?%}.course-title[data-v-551cc7f9]{font-size:%?32?%;font-weight:700;color:#333}.course-code[data-v-551cc7f9]{font-size:%?26?%;color:#666}.course-body[data-v-551cc7f9]{margin-bottom:%?20?%}.course-info[data-v-551cc7f9]{display:flex;justify-content:space-between;font-size:%?28?%;color:#444;margin-bottom:%?5?%}\n\n/* Form Item 纵向排列 */.form-item[data-v-551cc7f9]{margin-top:%?30?%;margin-bottom:%?30?%}\n\n/* 标签样式 */.form-label[data-v-551cc7f9]{margin-top:%?10?%;font-size:%?30?%;color:#333;font-weight:700;margin-bottom:%?10?%}\n\n/* 输入框的容器 */.input-wrapper[data-v-551cc7f9]{width:50%;background-color:#fff;border-radius:%?12?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1); /* 轻微阴影 */padding:%?8?% %?30?%;border:%?1?% solid #ddd; /* 边框 */margin-top:%?10?%;margin-bottom:%?10?%}.score-display[data-v-551cc7f9]{padding:%?10?% %?20?%;border-radius:%?10?%;text-align:center;font-size:%?32?%;font-weight:700;background-color:#f5f5f5 /* 默认背景 */}.score-empty[data-v-551cc7f9]{color:#999 /* 无成绩 */}.score-excellent[data-v-551cc7f9]{color:#4caf50 /* A 级 */}.score-good[data-v-551cc7f9]{color:#2196f3 /* B 级 */}.score-pass[data-v-551cc7f9]{color:#ff9800 /* C 级 */}.score-fail[data-v-551cc7f9]{color:#ff5722 /* D, F 不及格 */}.btn-container[data-v-551cc7f9]{display:flex;justify-content:center;align-items:center;width:100%}.select-btn[data-v-551cc7f9]{width:80%;margin:%?20?% 0; /* 上下 20rpx，左右保持居中 */background:linear-gradient(45deg,#007bff,#00c6ff);color:#fff;font-weight:700;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,.2);padding:12px 16px;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.select-btn[data-v-551cc7f9]:active{-webkit-transform:scale(.95);transform:scale(.95)}.select-btn-del[data-v-551cc7f9]{width:80%;margin:%?20?% 0; /* 上下 20rpx，左右保持居中 */background:linear-gradient(45deg,#ff7e5f,#feb47b);color:#fff;font-weight:700;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,.2);padding:12px 16px;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.select-btn-del[data-v-551cc7f9]:active{-webkit-transform:scale(.95);transform:scale(.95)}",""]),t.exports=e},"8b61":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uIcon:n("2a05").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[n("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),n("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?n("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[n("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?n("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?n("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[n("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),n("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),n("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?n("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},i=[]},"982a":function(t,e,n){"use strict";var a=n("1776"),o=n.n(a);o.a},b03c:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("f9b1").default,uniCalendar:n("8129").default,uButton:n("c425").default,uLoadmore:n("09ba").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("u-navbar",{attrs:{title:"我的课程","is-back":!0}}),n("v-uni-scroll-view",{staticClass:"course-list",attrs:{"scroll-y":!0}},t._l(t.listData,(function(e,a){return n("v-uni-view",{key:a,staticClass:"course-card"},[n("v-uni-view",{staticClass:"course-header"},[n("v-uni-text",{staticClass:"course-title"},[t._v(t._s(e.course_name))])],1),n("v-uni-view",{staticClass:"course-header"},[n("v-uni-text",{staticClass:"course-code"},[t._v("课程代码: "+t._s(e.course_code))])],1),n("v-uni-view",{staticClass:"course-header"},[n("v-uni-text",{staticClass:"course-code"},[t._v("讲师: "+t._s(e.course_lecturer))])],1),n("v-uni-view",{staticClass:"course-header"},[n("v-uni-text",{staticClass:"course-code"},[t._v("学分: "+t._s(e.course_credit))])],1),n("v-uni-view",{staticClass:"course-header"},[n("v-uni-text",{staticClass:"course-code"},[t._v("面向对象: "+t._s(e.target_group_student))])],1),n("v-uni-view",{staticClass:"course-header"},[n("v-uni-text",{staticClass:"course-title"},[t._v("上课时间：")])],1),n("uni-calendar",{attrs:{selected:t.formatTimetable(e.timetable)},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onDateChange.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"btn-container"},[n("u-button",{staticClass:"select-btn",style:t.uploadButtonPress?"transform: scale(0.95);":"",attrs:{type:"primary",size:"default"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.gotoUploadAssignment(e)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadButtonPress=!0},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadButtonPress=!1}}},[t._v("📤 上传课业")])],1),n("v-uni-view",{staticClass:"btn-container"},[n("u-button",{staticClass:"select-btn",style:t.uploadButtonPress?"transform: scale(0.95);":"",attrs:{type:"primary",size:"default"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.gotoSeeAssignment(e)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadButtonPress=!0},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadButtonPress=!1}}},[t._v("📤 查看已上传课业")])],1),n("v-uni-view",{staticClass:"btn-container"},[n("u-button",{staticClass:"select-btn-del",style:t.deleteButtonPress?"transform: scale(0.95);":"",attrs:{type:"error",size:"default"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.gotoDeleteCourse(e)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteButtonPress=!0},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteButtonPress=!1}}},[t._v("⚠️ 删除课程")])],1),n("v-uni-view",{staticClass:"form-item"},[n("v-uni-text",{staticClass:"form-label"},[t._v("您的成绩：")]),n("v-uni-view",{staticClass:"input-wrapper"},[n("v-uni-view",{staticClass:"uni-input score-display",class:t.getScoreClass(e.course_score)},[t._v(t._s(e.course_score?e.course_score:"还没有成绩"))])],1)],1)],1)})),1),n("u-loadmore",{on:{loadmore:function(e){arguments[0]=e=t.$handleEvent(e),t.addMoreData.apply(void 0,arguments)}}})],1)},i=[]},c118:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa");var a=uni.getSystemInfoSync(),o={},i={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:o,statusBarHeight:a.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=i},f9b1:function(t,e,n){"use strict";n.r(e);var a=n("8b61"),o=n("349b");for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("faef");var s=n("828b"),r=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"1d7f90d0",null,!1,a["a"],void 0);e["default"]=r.exports},faef:function(t,e,n){"use strict";var a=n("4d70"),o=n.n(a);o.a}}]);