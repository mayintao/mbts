(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-student-selectCourse"],{1539:function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("fd3c"),a("c223"),a("4626"),a("5ac7");var o={data:function(){return{full_name:"",student_id:"",campus_name:"",type_of_programme:"",country_type:0,scholarship:0,currentPage:0,listData:[],buttonPress:!1}},onLoad:function(){var e=uni.getStorageSync("student_info");e&&(this.full_name=e.full_name,console.log(this.full_name),this.student_id=e.student_id,console.log(this.student_id),this.campus_name=e.campus_name,console.log(this.campus_name),this.type_of_programme=e.type_of_programme,console.log(this.type_of_programme),this.country_type=e.country_type,console.log(this.country_type),this.scholarship=e.scholarship,console.log(this.scholarship),this.queryCourseListByCampusName())},onShow:function(){this.full_name||uni.navigateTo({url:"/pages/index/loginSys"})},methods:{formatTimetable:function(e){if(!e)return[];if("string"===typeof e)try{e=JSON.parse(e),console.log(e)}catch(t){return console.error("JSON 解析失败:",t),[]}return Array.isArray(e)?e.map((function(e){return{date:e,info:"上课",backgroundColor:"red",color:"#ffffff"}})):[]},onDateChange:function(e){console.log("选择的日期:",e)},queryCourseListByCampusName:function(){uni.showLoading({title:"查询中..."});var e=this;uni.request({url:"https://mbtsserver.onrender.com/api/queryMBTSCourseListByCampusName",method:"POST",data:{campus_name:e.campus_name,startnum:e.currentPage,key:"registeruser1739935308mbts"},header:{"Content-Type":"application/json",Accept:"application/json"},success:function(t){uni.hideLoading(),console.log(t),console.log(t.data.desc),200===t.data.code?e.currentPage>0?t.data.data.length>0&&(console.log(t.data.data.length),e.listData=e.listData.concat(t.data.data)):e.listData=t.data.data:uni.showModal({content:t.data.desc||"查询可选课程失败",showCancel:!1}),uni.stopPullDownRefresh()},fail:function(e){uni.hideLoading(),uni.stopPullDownRefresh(),console.log(e),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})},addMoreData:function(){this.currentPage+=20,this.queryCourseListByCampusName()},onPullDownRefresh:function(){this.currentPage=0,this.queryCourseListByCampusName()},gotoSelectCourse:function(e){var t=this;console.log("course_name is "+e.course_name),uni.showModal({title:"再次确认",content:"确定要选择"+e.course_name+"课程吗？",success:function(a){a.confirm&&(uni.showLoading({title:"提交中..."}),uni.request({url:"https://mbtsserver.onrender.com/api/insertMBTSStudentCourse",method:"POST",data:{full_name:t.full_name,student_id:t.student_id,student_campus:t.campus_name,course_code:e.course_code,course_name:e.course_name,course_credit:e.course_credit,course_lecturer:e.course_lecturer,target_group_student:e.target_group_student,timetable:e.timetable,course_score:"",key:"registeruser1739935308mbts"},header:{"Content-Type":"application/json",Accept:"application/json"},success:function(a){uni.hideLoading(),console.log(a),console.log(a.data.desc),200===a.data.code?t.gotoUpdateFee(e.course_credit):uni.showModal({content:"抱歉："+a.data.desc||!1,showCancel:!1})},fail:function(e){uni.hideLoading(),console.log(e),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}}))}})},gotoUpdateFee:function(e){console.log("type_of_programme is "+this.type_of_programme),console.log("country_type is "+this.country_type),console.log("scholarship is "+this.scholarship);var t=0;t=0===this.country_type?this.type_of_programme.includes("Diploma")||this.type_of_programme.includes("Bachelor")?50*e*4.5*(100-this.scholarship)/100:this.type_of_programme.includes("Master")?80*e*4.5*(100-this.scholarship)/100:(this.type_of_programme.includes("Certificate"),40*e*4.5*(100-this.scholarship)/100):this.type_of_programme.includes("Diploma")||this.type_of_programme.includes("Bachelor")?100*e*(100-this.scholarship)/100:this.type_of_programme.includes("Master")?150*e*(100-this.scholarship)/100:(this.type_of_programme.includes("Certificate"),80*e*(100-this.scholarship)/100),console.log("fee",t),uni.showLoading({title:"更新Fee..."}),uni.request({url:"https://mbtsserver.onrender.com/api/updateFeeMBTSRegisterUserAfterSelectCourse",method:"POST",data:{student_id:this.student_id,fees:t,key:"registeruser1739935308mbts"},header:{"Content-Type":"application/json",Accept:"application/json"},success:function(e){uni.hideLoading(),console.log(e),console.log(e.data.desc),200===e.data.code?(uni.showToast({title:"更新费用成功",icon:"success"}),setTimeout((function(){uni.navigateBack()}),1e3)):uni.showModal({content:e.data.desc||"更新失败",showCancel:!1})},fail:function(e){uni.hideLoading(),console.log(e),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})}}};t.default=o},"37fa":function(e,t,a){var o=a("c86c");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-btn[data-v-1ea4ff2e]::after{border:none}.u-btn[data-v-1ea4ff2e]{position:relative;border:0;display:inline-flex;overflow:visible;line-height:1;display:flex;flex-direction:row;align-items:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;box-sizing:border-box;transition:all .15s}.u-btn--bold-border[data-v-1ea4ff2e]{border:1px solid #fff}.u-btn--default[data-v-1ea4ff2e]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-1ea4ff2e]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-1ea4ff2e]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-1ea4ff2e]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-1ea4ff2e]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-1ea4ff2e]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-1ea4ff2e]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-1ea4ff2e]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-1ea4ff2e]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-1ea4ff2e]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-1ea4ff2e]:after{content:" ";position:absolute;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-1ea4ff2e]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-1ea4ff2e]{opacity:0;-webkit-transform:scale(2);transform:scale(2);transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-1ea4ff2e]{border-radius:%?100?%}.u-round-circle[data-v-1ea4ff2e]::after{border-radius:%?100?%}.u-loading[data-v-1ea4ff2e]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-1ea4ff2e]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-1ea4ff2e]{display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-1ea4ff2e]{display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-1ea4ff2e]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-1ea4ff2e]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-1ea4ff2e]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-1ea4ff2e]{background:#18b566!important;color:#fff}.u-info-hover[data-v-1ea4ff2e]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-1ea4ff2e]{background:#f29100!important;color:#fff}.u-error-hover[data-v-1ea4ff2e]{background:#dd6161!important;color:#fff}',""]),e.exports=t},"4b36":function(e,t,a){"use strict";var o=a("fcb2"),n=a.n(o);n.a},"538d":function(e,t,a){var o=a("37fa");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("967d").default;n("232abad0",o,!0,{sourceMap:!1,shadowMode:!1})},"635b":function(e,t,a){var o=a("c86c");t=o(!1),t.push([e.i,".container[data-v-8e8cfb68]{padding:%?20?%;background-color:#f8f9fa}.course-list[data-v-8e8cfb68]{height:80vh;overflow-y:auto}.course-card[data-v-8e8cfb68]{background:#fff; /* 纯白色背景 */padding:%?30?%;border-radius:%?16?%;margin-bottom:%?20?%;border:%?2?% solid #e0e0e0; /* 添加浅灰色边框 */box-shadow:0 %?6?% %?12?% rgba(0,0,0,.05); /* 让阴影更柔和 */transition:all .3s ease-in-out /* 增加过渡效果 */}\n\n/* 添加交互效果，鼠标悬停时稍微提升 */.course-card[data-v-8e8cfb68]:active{-webkit-transform:scale(.98);transform:scale(.98);box-shadow:0 %?8?% %?16?% rgba(0,0,0,.08)}.course-header[data-v-8e8cfb68]{display:flex;justify-content:space-between;align-items:center;margin:%?30?%}.course-title[data-v-8e8cfb68]{font-size:%?32?%;font-weight:700;color:#333}.course-code[data-v-8e8cfb68]{font-size:%?30?%;color:#666}.course-body[data-v-8e8cfb68]{margin-bottom:%?20?%}.course-info[data-v-8e8cfb68]{display:flex;justify-content:space-between;font-size:%?28?%;color:#444;margin-bottom:%?5?%}.btn-container[data-v-8e8cfb68]{margin:%?30?%;display:flex;justify-content:center;align-items:center;width:100%}.select-btn[data-v-8e8cfb68]{width:80%;margin:%?20?% 0; /* 上下 20rpx，左右保持居中 */background:linear-gradient(45deg,#ff7e5f,#feb47b);color:#fff;font-weight:700;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,.2);padding:12px 16px;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.select-btn[data-v-8e8cfb68]:active{-webkit-transform:scale(.95);transform:scale(.95)}.calendar-header[data-v-8e8cfb68]{display:flex;justify-content:center;  /* 水平居中 */align-items:center;      /* 垂直居中 */background-color:#f3f3f3; /* 淡灰色背景 */padding:%?20?% 0;border-radius:%?16?%;box-shadow:%?2?% %?2?% %?10?% rgba(0,0,0,.05);font-weight:700}.calendar-title[data-v-8e8cfb68]{font-size:%?36?%;color:#333;font-weight:700}.calendar-container[data-v-8e8cfb68]{margin-top:%?20?%;padding:%?20?%;background-color:#fff;border-radius:%?16?%;box-shadow:0 %?4?% %?12?% rgba(0,0,0,.1)}",""]),e.exports=t},"820f":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+e.size,e.plain?"u-btn--"+e.type+"--plain":"",e.loading?"u-loading":"","circle"==e.shape?"u-round-circle":"",e.hairLine?e.showHairLineBorder:"u-btn--bold-border","u-btn--"+e.type,e.disabled?"u-btn--"+e.type+"--disabled":""],style:[e.customStyle,{overflow:e.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(e.hoverStartTime),"hover-stay-time":Number(e.hoverStayTime),disabled:e.disabled,"form-type":e.formType,"open-type":e.openType,"app-parameter":e.appParameter,"hover-stop-propagation":e.hoverStopPropagation,"send-message-title":e.sendMessageTitle,"send-message-path":"sendMessagePath",lang:e.lang,"data-name":e.dataName,"session-from":e.sessionFrom,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"hover-class":e.getHoverClass,loading:e.loading},on:{getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.getphonenumber.apply(void 0,arguments)},getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.getuserinfo.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.error.apply(void 0,arguments)},opensetting:function(t){arguments[0]=t=e.$handleEvent(t),e.opensetting.apply(void 0,arguments)},launchapp:function(t){arguments[0]=t=e.$handleEvent(t),e.launchapp.apply(void 0,arguments)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.click(t)}}},[e._t("default"),e.ripple?a("v-uni-view",{staticClass:"u-wave-ripple",class:[e.waveActive?"u-wave-active":""],style:{top:e.rippleTop+"px",left:e.rippleLeft+"px",width:e.fields.targetWidth+"px",height:e.fields.targetWidth+"px","background-color":e.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):e._e()],2)},n=[]},"840f":function(e,t,a){"use strict";a.r(t);var o=a("ef7e"),n=a.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(r);t["default"]=n.a},"9f48":function(e,t,a){"use strict";a.r(t);var o=a("e962"),n=a("b40f");for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("4b36");var i=a("828b"),s=Object(i["a"])(n["default"],o["b"],o["c"],!1,null,"8e8cfb68",null,!1,o["a"],void 0);t["default"]=s.exports},a6c1:function(e,t,a){"use strict";var o=a("538d"),n=a.n(o);n.a},b40f:function(e,t,a){"use strict";a.r(t);var o=a("1539"),n=a.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(r);t["default"]=n.a},c425:function(e,t,a){"use strict";a.r(t);var o=a("820f"),n=a("840f");for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("a6c1");var i=a("828b"),s=Object(i["a"])(n["default"],o["b"],o["c"],!1,null,"1ea4ff2e",null,!1,o["a"],void 0);t["default"]=s.exports},e962:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return o}));var o={uNavbar:a("f9b1").default,uniCalendar:a("8129").default,uButton:a("c425").default,uLoadmore:a("09ba").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"container"},[a("u-navbar",{attrs:{title:"课程列表","is-back":!0}}),a("v-uni-scroll-view",{staticClass:"course-list",attrs:{"scroll-y":!0}},e._l(e.listData,(function(t,o){return a("v-uni-view",{key:o,staticClass:"course-card"},[a("v-uni-view",{staticClass:"course-header"},[a("v-uni-text",{staticClass:"course-title"},[e._v(e._s(t.course_name))])],1),a("v-uni-view",{staticClass:"course-header"},[a("v-uni-text",{staticClass:"course-code"},[e._v("课程代码: "+e._s(t.course_code))])],1),a("v-uni-view",{staticClass:"course-header"},[a("v-uni-text",{staticClass:"course-code"},[e._v("讲师: "+e._s(t.course_lecturer))])],1),a("v-uni-view",{staticClass:"course-header"},[a("v-uni-text",{staticClass:"course-code"},[e._v("学分: "+e._s(t.course_credit))])],1),a("v-uni-view",{staticClass:"calendar-header"},[a("v-uni-text",{staticClass:"calendar-title"},[e._v("上课时间")])],1),a("v-uni-view",{staticClass:"calendar-container"},[a("uni-calendar",{attrs:{selected:e.formatTimetable(t.timetable)},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onDateChange.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"btn-container"},[a("u-button",{staticClass:"select-btn",style:e.buttonPress?"transform: scale(0.95);":"",attrs:{type:"primary",size:"default"},on:{click:function(a){a.stopPropagation(),arguments[0]=a=e.$handleEvent(a),e.gotoSelectCourse(t)},touchstart:function(t){arguments[0]=t=e.$handleEvent(t),e.buttonPress=!0},touchend:function(t){arguments[0]=t=e.$handleEvent(t),e.buttonPress=!1}}},[e._v("🚀 选择课程")])],1)],1)})),1),a("u-loadmore",{on:{loadmore:function(t){arguments[0]=t=e.$handleEvent(t),e.addMoreData.apply(void 0,arguments)}}})],1)},r=[]},ef7e:function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("64aa"),a("5ef2"),a("bf0f"),a("5c47");var o={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var e;return e=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",e},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(e){var t=this;this.$u.throttle((function(){!0!==t.loading&&!0!==t.disabled&&(t.ripple&&(t.waveActive=!1,t.$nextTick((function(){this.getWaveQuery(e)}))),t.$emit("click",e))}),this.throttleTime)},getWaveQuery:function(e){var t=this;this.getElQuery().then((function(a){var o=a[0];if(o.width&&o.width&&(o.targetWidth=o.height>o.width?o.height:o.width,o.targetWidth)){t.fields=o;var n,r;n=e.touches[0].clientX,r=e.touches[0].clientY,t.rippleTop=r-o.top-o.targetWidth/2,t.rippleLeft=n-o.left-o.targetWidth/2,t.$nextTick((function(){t.waveActive=!0}))}}))},getElQuery:function(){var e=this;return new Promise((function(t){var a="";a=uni.createSelectorQuery().in(e),a.select(".u-btn").boundingClientRect(),a.exec((function(e){t(e)}))}))},getphonenumber:function(e){this.$emit("getphonenumber",e)},getuserinfo:function(e){this.$emit("getuserinfo",e)},error:function(e){this.$emit("error",e)},opensetting:function(e){this.$emit("opensetting",e)},launchapp:function(e){this.$emit("launchapp",e)}}};t.default=o},fcb2:function(e,t,a){var o=a("635b");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=a("967d").default;n("b980ed7a",o,!0,{sourceMap:!1,shadowMode:!1})}}]);