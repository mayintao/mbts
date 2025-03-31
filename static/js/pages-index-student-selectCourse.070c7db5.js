(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-student-selectCourse"],{1539:function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("fd3c"),a("c223"),a("4626"),a("5ac7"),a("4100");var n={data:function(){return{full_name:"",student_id:"",campus_name:"",type_of_programme:"",country_type:0,scholarship:0,email:"",currentPage:0,listData:[],buttonPress:!1}},onLoad:function(){var e=uni.getStorageSync("student_info");e&&(this.full_name=e.full_name,console.log(this.full_name),this.student_id=e.student_id,console.log(this.student_id),this.campus_name=e.campus_name,console.log(this.campus_name),this.type_of_programme=e.type_of_programme,console.log(this.type_of_programme),this.country_type=e.country_type,console.log(this.country_type),this.scholarship=e.scholarship,console.log(this.scholarship),this.email=e.email,console.log(this.email),this.queryAvailableCourseList())},onShow:function(){this.full_name||uni.navigateTo({url:"/pages/index/loginSys"})},methods:{formatTimetable:function(e){if(!e)return[];if("string"===typeof e)try{e=JSON.parse(e)}catch(t){return console.error("JSON 解析失败:",t),[]}return Array.isArray(e)?e.map((function(e){return{date:e,info:"上课",backgroundColor:"red",color:"#ffffff"}})):[]},onDateChange:function(e){console.log("选择的日期:",e)},queryAvailableCourseList:function(){uni.showLoading({title:"查询中..."});var e=this;uni.request({url:"https://mbtsserver.onrender.com/api/queryMBTSAvailableCourseList",method:"POST",data:{startnum:e.currentPage,key:"registeruser1739935308mbts"},header:{"Content-Type":"application/json",Accept:"application/json"},success:function(t){uni.hideLoading(),console.log(t),console.log(t.data.desc),200===t.data.code?e.currentPage>0?t.data.data.length>0&&(console.log(t.data.data.length),e.listData=e.listData.concat(t.data.data)):e.listData=t.data.data:uni.showModal({content:t.data.desc||"查询可选课程失败",showCancel:!1}),uni.stopPullDownRefresh()},fail:function(e){uni.hideLoading(),uni.stopPullDownRefresh(),console.log(e),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})},addMoreData:function(){this.currentPage+=20,this.queryAvailableCourseList()},onPullDownRefresh:function(){this.currentPage=0,this.queryAvailableCourseList()},gotoSelectCourse:function(e){var t=this;console.log("course_name is "+e.course_name);var a=this.checkCourseAvailability(e.timetable);console.log("canSelect is "+a),a?uni.showModal({title:"课程选择",content:"确定要选择"+e.course_name+"课程吗？",success:function(a){if(a.confirm){var n=0;e.campus_name.includes("PG")?n=0:e.campus_name.includes("ONL")&&(n=1),uni.showLoading({title:"提交中..."}),uni.request({url:"https://mbtsserver.onrender.com/api/insertMBTSStudentCourse",method:"POST",data:{full_name:t.full_name,student_id:t.student_id,student_campus:t.campus_name,email:t.email,course_code:e.course_code,course_name:e.course_name,course_credit:e.course_credit,course_lecturer:e.course_lecturer,target_group_student:e.target_group_student,timetable:e.timetable,course_score:"",class_method:n,is_audit:0,course_term:e.course_term,key:"registeruser1739935308mbts"},header:{"Content-Type":"application/json",Accept:"application/json"},success:function(a){uni.hideLoading(),console.log(a),console.log(a.data.desc),200===a.data.code?t.gotoUpdateFee(e.course_credit,!1):uni.showModal({content:"抱歉："+a.data.desc||!1,showCancel:!1})},fail:function(e){uni.hideLoading(),console.log(e),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})}}}):uni.showModal({title:"提示",content:"开课时间少于5天，不能选课，请联系管理员",showCancel:!1})},gotoSelectAudit:function(e){var t=this;console.log("course_name is "+e.course_name);var a=this.checkCourseAvailability(e.timetable);console.log("canSelect is "+a),a?uni.showModal({title:"旁听确认",content:"确定要旁听"+e.course_name+"课程吗？",success:function(a){if(a.confirm){var n=0;e.campus_name.includes("PG")?n=0:e.campus_name.includes("ONL")&&(n=1),uni.showLoading({title:"提交中..."}),uni.request({url:"https://mbtsserver.onrender.com/api/insertMBTSStudentCourse",method:"POST",data:{full_name:t.full_name,student_id:t.student_id,student_campus:t.campus_name,email:t.email,course_code:e.course_code,course_name:e.course_name,course_credit:0,course_lecturer:e.course_lecturer,target_group_student:e.target_group_student,timetable:e.timetable,course_score:"",class_method:n,is_audit:1,course_term:e.course_term,key:"registeruser1739935308mbts"},header:{"Content-Type":"application/json",Accept:"application/json"},success:function(a){uni.hideLoading(),console.log(a),console.log(a.data.desc),200===a.data.code?t.gotoUpdateFee(e.course_credit,!0):uni.showModal({content:"抱歉："+a.data.desc||!1,showCancel:!1})},fail:function(e){uni.hideLoading(),console.log(e),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})}}}):uni.showModal({title:"提示",content:"开课时间少于5天，不能选课，请联系管理员",showCancel:!1})},gotoUpdateFee:function(e,t){var a=this;console.log("type_of_programme is "+a.type_of_programme),console.log("country_type is "+a.country_type),console.log("scholarship is "+a.scholarship);var n=0;n=0===a.country_type?a.type_of_programme.includes("Diploma")||t||a.type_of_programme.includes("Bachelor")?50*e*4.5*(100-a.scholarship)/100:a.type_of_programme.includes("Master")?80*e*4.5*(100-a.scholarship)/100:(a.type_of_programme.includes("Certificate"),40*e*4.5*(100-a.scholarship)/100):a.type_of_programme.includes("Diploma")||t||a.type_of_programme.includes("Bachelor")?100*e*(100-a.scholarship)/100:a.type_of_programme.includes("Master")?150*e*(100-a.scholarship)/100:(a.type_of_programme.includes("Certificate"),80*e*(100-a.scholarship)/100),console.log("fee",n),uni.showLoading({title:"更新Fee..."}),uni.request({url:"https://mbtsserver.onrender.com/api/updateFeeMBTSRegisterUserAfterSelectCourse",method:"POST",data:{student_id:a.student_id,fees:n,key:"registeruser1739935308mbts"},header:{"Content-Type":"application/json",Accept:"application/json"},success:function(e){uni.hideLoading(),console.log(e),console.log(e.data.desc),200===e.data.code?(uni.showToast({title:"更新费用成功",icon:"success"}),a.currentPage=0,a.queryAvailableCourseList()):uni.showModal({content:e.data.desc||"更新失败",showCancel:!1})},fail:function(e){uni.hideLoading(),console.log(e),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})},checkCourseAvailability:function(e){if(!e)return console.error("课程时间表为空，不可选"),!1;if("string"===typeof e)try{e=JSON.parse(e)}catch(o){return console.error("课程时间JSON 解析失败:",o),!1}if(!Array.isArray(e))return console.error("课程时间非数组格式，不可选"),!1;e.sort((function(e,t){return new Date(e)-new Date(t)}));var t=new Date(e[0]),a=new Date,n=new Date(a);return n.setDate(a.getDate()+5),n<t}}};t.default=n},"191b":function(e,t,a){var n=a("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-navbar[data-v-1d7f90d0]{width:100%}.u-navbar-fixed[data-v-1d7f90d0]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-1d7f90d0]{width:100%}.u-navbar-inner[data-v-1d7f90d0]{display:flex;flex-direction:row;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-1d7f90d0]{display:flex;flex-direction:row;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-1d7f90d0]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-1d7f90d0]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-1d7f90d0]{flex:1}.u-title[data-v-1d7f90d0]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-1d7f90d0]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.u-slot-content[data-v-1d7f90d0]{flex:1;display:flex;flex-direction:row;align-items:center}',""]),e.exports=t},2734:function(e,t,a){"use strict";var n=a("9d32"),o=a.n(n);o.a},"349b":function(e,t,a){"use strict";a.r(t);var n=a("c118"),o=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=o.a},"37fa":function(e,t,a){var n=a("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-btn[data-v-1ea4ff2e]::after{border:none}.u-btn[data-v-1ea4ff2e]{position:relative;border:0;display:inline-flex;overflow:visible;line-height:1;display:flex;flex-direction:row;align-items:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;box-sizing:border-box;transition:all .15s}.u-btn--bold-border[data-v-1ea4ff2e]{border:1px solid #fff}.u-btn--default[data-v-1ea4ff2e]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-1ea4ff2e]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-1ea4ff2e]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-1ea4ff2e]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-1ea4ff2e]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-1ea4ff2e]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-1ea4ff2e]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-1ea4ff2e]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-1ea4ff2e]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-1ea4ff2e]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-1ea4ff2e]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-1ea4ff2e]:after{content:" ";position:absolute;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-1ea4ff2e]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-1ea4ff2e]{opacity:0;-webkit-transform:scale(2);transform:scale(2);transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-1ea4ff2e]{border-radius:%?100?%}.u-round-circle[data-v-1ea4ff2e]::after{border-radius:%?100?%}.u-loading[data-v-1ea4ff2e]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-1ea4ff2e]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-1ea4ff2e]{display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-1ea4ff2e]{display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-1ea4ff2e]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-1ea4ff2e]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-1ea4ff2e]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-1ea4ff2e]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-1ea4ff2e]{background:#18b566!important;color:#fff}.u-info-hover[data-v-1ea4ff2e]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-1ea4ff2e]{background:#f29100!important;color:#fff}.u-error-hover[data-v-1ea4ff2e]{background:#dd6161!important;color:#fff}',""]),e.exports=t},"4d70":function(e,t,a){var n=a("191b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("967d").default;o("4381c943",n,!0,{sourceMap:!1,shadowMode:!1})},"538d":function(e,t,a){var n=a("37fa");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("967d").default;o("232abad0",n,!0,{sourceMap:!1,shadowMode:!1})},"820f":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+e.size,e.plain?"u-btn--"+e.type+"--plain":"",e.loading?"u-loading":"","circle"==e.shape?"u-round-circle":"",e.hairLine?e.showHairLineBorder:"u-btn--bold-border","u-btn--"+e.type,e.disabled?"u-btn--"+e.type+"--disabled":""],style:[e.customStyle,{overflow:e.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(e.hoverStartTime),"hover-stay-time":Number(e.hoverStayTime),disabled:e.disabled,"form-type":e.formType,"open-type":e.openType,"app-parameter":e.appParameter,"hover-stop-propagation":e.hoverStopPropagation,"send-message-title":e.sendMessageTitle,"send-message-path":"sendMessagePath",lang:e.lang,"data-name":e.dataName,"session-from":e.sessionFrom,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"hover-class":e.getHoverClass,loading:e.loading},on:{getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.getphonenumber.apply(void 0,arguments)},getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.getuserinfo.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.error.apply(void 0,arguments)},opensetting:function(t){arguments[0]=t=e.$handleEvent(t),e.opensetting.apply(void 0,arguments)},launchapp:function(t){arguments[0]=t=e.$handleEvent(t),e.launchapp.apply(void 0,arguments)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.click(t)}}},[e._t("default"),e.ripple?a("v-uni-view",{staticClass:"u-wave-ripple",class:[e.waveActive?"u-wave-active":""],style:{top:e.rippleTop+"px",left:e.rippleLeft+"px",width:e.fields.targetWidth+"px",height:e.fields.targetWidth+"px","background-color":e.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):e._e()],2)},o=[]},"840f":function(e,t,a){"use strict";a.r(t);var n=a("ef7e"),o=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=o.a},"8b61":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uIcon:a("2a05").default},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{},[a("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":e.isFixed,"u-border-bottom":e.borderBottom},style:[e.navbarStyle]},[a("v-uni-view",{staticClass:"u-status-bar",style:{height:e.statusBarHeight+"px"}}),a("v-uni-view",{staticClass:"u-navbar-inner",style:[e.navbarInnerStyle]},[e.isBack?a("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"u-icon-wrap"},[a("u-icon",{attrs:{name:e.backIconName,color:e.backIconColor,size:e.backIconSize}})],1),e.backText?a("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[e.backTextStyle]},[e._v(e._s(e.backText))]):e._e()],1):e._e(),e.title?a("v-uni-view",{staticClass:"u-navbar-content-title",style:[e.titleStyle]},[a("v-uni-view",{staticClass:"u-title u-line-1",style:{color:e.titleColor,fontSize:e.titleSize+"rpx",fontWeight:e.titleBold?"bold":"normal"}},[e._v(e._s(e.title))])],1):e._e(),a("v-uni-view",{staticClass:"u-slot-content"},[e._t("default")],2),a("v-uni-view",{staticClass:"u-slot-right"},[e._t("right")],2)],1)],1),e.isFixed&&!e.immersive?a("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(e.navbarHeight)+e.statusBarHeight+"px"}}):e._e()],1)},r=[]},"9d32":function(e,t,a){var n=a("c515");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("967d").default;o("a92cb202",n,!0,{sourceMap:!1,shadowMode:!1})},"9f48":function(e,t,a){"use strict";a.r(t);var n=a("f7dc"),o=a("b40f");for(var r in o)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(r);a("2734");var i=a("828b"),s=Object(i["a"])(o["default"],n["b"],n["c"],!1,null,"3c5d18b6",null,!1,n["a"],void 0);t["default"]=s.exports},a6c1:function(e,t,a){"use strict";var n=a("538d"),o=a.n(n);o.a},b40f:function(e,t,a){"use strict";a.r(t);var n=a("1539"),o=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=o.a},c118:function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("64aa");var n=uni.getSystemInfoSync(),o={},r={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:o,statusBarHeight:n.statusBarHeight}},computed:{navbarInnerStyle:function(){var e={};return e.height=this.navbarHeight+"px",e},navbarStyle:function(){var e={};return e.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(e,this.background),e},titleStyle:function(){var e={};return e.left=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",e.right=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",e.width=uni.upx2px(this.titleWidth)+"px",e},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};t.default=r},c425:function(e,t,a){"use strict";a.r(t);var n=a("820f"),o=a("840f");for(var r in o)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(r);a("a6c1");var i=a("828b"),s=Object(i["a"])(o["default"],n["b"],n["c"],!1,null,"1ea4ff2e",null,!1,n["a"],void 0);t["default"]=s.exports},c515:function(e,t,a){var n=a("c86c");t=n(!1),t.push([e.i,".container[data-v-3c5d18b6]{padding:%?20?%;background-color:#f8f9fa}.course-list[data-v-3c5d18b6]{margin-top:%?20?%;height:auto;overflow-y:auto;margin-bottom:%?20?%}.course-card[data-v-3c5d18b6]{background:#fff; /* 纯白色背景 */padding:%?30?%;border-radius:%?16?%;margin-bottom:%?20?%;border:%?2?% solid #e0e0e0; /* 添加浅灰色边框 */box-shadow:0 %?6?% %?12?% rgba(0,0,0,.05); /* 让阴影更柔和 */transition:all .3s ease-in-out /* 增加过渡效果 */}\n\n/* 添加交互效果，鼠标悬停时稍微提升 */.course-card[data-v-3c5d18b6]:active{-webkit-transform:scale(.98);transform:scale(.98);box-shadow:0 %?8?% %?16?% rgba(0,0,0,.08)}.course-header[data-v-3c5d18b6]{display:flex;justify-content:space-between;align-items:center;margin:%?30?%}.course-title[data-v-3c5d18b6]{font-size:%?30?%;font-weight:700;color:#333}.selectable-text[data-v-3c5d18b6]{-webkit-user-select:text;user-select:text; /* 允许文本复制 */word-wrap:break-word}.course-code[data-v-3c5d18b6]{font-size:%?30?%;color:#666}.course-body[data-v-3c5d18b6]{margin-bottom:%?20?%}.course-info[data-v-3c5d18b6]{display:flex;justify-content:space-between;font-size:%?28?%;color:#444;margin-bottom:%?5?%}.btn-container[data-v-3c5d18b6]{margin:%?30?%;display:flex;justify-content:center;align-items:center;width:100%}.select-btn[data-v-3c5d18b6]{width:80%;margin:%?20?%; /* 上下 20rpx，左右保持居中 */background:linear-gradient(45deg,#ff7e5f,#feb47b);color:#fff;font-weight:700;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,.2);padding:12px 16px;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.select-btn[data-v-3c5d18b6]:active{-webkit-transform:scale(.95);transform:scale(.95)}.select-audit-btn[data-v-3c5d18b6]{width:80%;margin:%?20?%; /* 上下 20rpx，左右保持居中 */background:linear-gradient(45deg,#997e5f,#11b47b);color:#fff;font-weight:700;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,.2);padding:12px 16px;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.select-audit-btn[data-v-3c5d18b6]:active{-webkit-transform:scale(.95);transform:scale(.95)}.calendar-header[data-v-3c5d18b6]{display:flex;justify-content:center;  /* 水平居中 */align-items:center;      /* 垂直居中 */background-color:#f3f3f3; /* 淡灰色背景 */padding:%?20?% 0;border-radius:%?16?%;box-shadow:%?2?% %?2?% %?10?% rgba(0,0,0,.05);font-weight:700}.calendar-title[data-v-3c5d18b6]{font-size:%?30?%;color:#333}.calendar-container[data-v-3c5d18b6]{margin-top:%?20?%;padding:%?20?%;background-color:#fff;border-radius:%?16?%;box-shadow:0 %?4?% %?12?% rgba(0,0,0,.1)}.date-text[data-v-3c5d18b6]{color:red; /* 文字颜色 */text-align:center; /* 文字居中 */font-size:%?30?%; /* 增大字体，方便阅读 */font-weight:700; /* 加粗，提高可读性 */background-color:#ffecec; /* 轻微红色背景，提高可读性 */padding:%?10?% %?20?%; /* 增加内边距，让日期更易读 */border-radius:%?10?%; /* 圆角，美观 */display:inline-block; /* 让每个日期占据适当宽度 */white-space:nowrap /* 防止日期换行 */}",""]),e.exports=t},ef7e:function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("64aa"),a("5ef2"),a("bf0f"),a("5c47");var n={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var e;return e=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",e},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(e){var t=this;this.$u.throttle((function(){!0!==t.loading&&!0!==t.disabled&&(t.ripple&&(t.waveActive=!1,t.$nextTick((function(){this.getWaveQuery(e)}))),t.$emit("click",e))}),this.throttleTime)},getWaveQuery:function(e){var t=this;this.getElQuery().then((function(a){var n=a[0];if(n.width&&n.width&&(n.targetWidth=n.height>n.width?n.height:n.width,n.targetWidth)){t.fields=n;var o,r;o=e.touches[0].clientX,r=e.touches[0].clientY,t.rippleTop=r-n.top-n.targetWidth/2,t.rippleLeft=o-n.left-n.targetWidth/2,t.$nextTick((function(){t.waveActive=!0}))}}))},getElQuery:function(){var e=this;return new Promise((function(t){var a="";a=uni.createSelectorQuery().in(e),a.select(".u-btn").boundingClientRect(),a.exec((function(e){t(e)}))}))},getphonenumber:function(e){this.$emit("getphonenumber",e)},getuserinfo:function(e){this.$emit("getuserinfo",e)},error:function(e){this.$emit("error",e)},opensetting:function(e){this.$emit("opensetting",e)},launchapp:function(e){this.$emit("launchapp",e)}}};t.default=n},f7dc:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uNavbar:a("f9b1").default,uButton:a("c425").default,uLoadmore:a("09ba").default},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"container"},[a("u-navbar",{attrs:{title:"课程列表","is-back":!0}}),a("v-uni-scroll-view",{staticClass:"course-list",attrs:{"scroll-y":!0}},e._l(e.listData,(function(t,n){return a("v-uni-view",{key:n,staticClass:"course-card"},[a("v-uni-view",{staticClass:"course-header"},[a("v-uni-text",{staticClass:"course-title"},[e._v(e._s(t.course_name))])],1),a("v-uni-view",{staticClass:"course-header"},[a("v-uni-text",{staticClass:"course-code"},[e._v("课程代码: "+e._s(t.course_code))])],1),a("v-uni-view",{staticClass:"course-header"},[a("v-uni-text",{staticClass:"course-code",style:{color:"ONL"===t.campus_name?"red":"PG"===t.campus_name?"green":"black"}},[e._v(e._s("ONL"===t.campus_name?"ONL（线上）":"PG"===t.campus_name?"PG（实体）":t.campus_name))])],1),a("v-uni-view",{staticClass:"course-header"},[a("v-uni-text",{staticClass:"course-code"},[e._v("讲师: "+e._s(t.course_lecturer))])],1),a("v-uni-view",{staticClass:"course-header"},[a("v-uni-text",{staticClass:"course-code"},[e._v("学分: "+e._s(t.course_credit))])],1),a("v-uni-view",{staticClass:"course-header"},[a("v-uni-text",{staticClass:"course-code"},[e._v("学期: "+e._s(t.course_term))])],1),a("v-uni-view",{staticClass:"course-header"},[a("v-uni-text",{staticClass:"course-code"},[e._v("上课时间：")])],1),a("v-uni-view",{staticClass:"course-header"},[a("v-uni-view",{staticStyle:{display:"flex","flex-wrap":"wrap",gap:"15rpx",padding:"20rpx","justify-content":"flex-start"}},e._l(e.formatTimetable(t.timetable),(function(t,n){return a("v-uni-text",{key:n,staticClass:"date-text selectable-text",staticStyle:{"text-align":"center",color:"red"}},[e._v(e._s(t.date))])})),1)],1),a("v-uni-view",{staticClass:"btn-container"},[a("u-button",{staticClass:"select-btn",style:e.buttonPress?"transform: scale(0.95);":"",attrs:{type:"primary",size:"default"},on:{click:function(a){a.stopPropagation(),arguments[0]=a=e.$handleEvent(a),e.gotoSelectCourse(t)},touchstart:function(t){arguments[0]=t=e.$handleEvent(t),e.buttonPress=!0},touchend:function(t){arguments[0]=t=e.$handleEvent(t),e.buttonPress=!1}}},[e._v("🚀 选择课程")]),a("u-button",{staticClass:"select-audit-btn",style:e.buttonPress?"transform: scale(0.95);":"",attrs:{type:"primary",size:"default"},on:{click:function(a){a.stopPropagation(),arguments[0]=a=e.$handleEvent(a),e.gotoSelectAudit(t)},touchstart:function(t){arguments[0]=t=e.$handleEvent(t),e.buttonPress=!0},touchend:function(t){arguments[0]=t=e.$handleEvent(t),e.buttonPress=!1}}},[e._v("🚀 旁听")])],1)],1)})),1),a("u-loadmore",{on:{loadmore:function(t){arguments[0]=t=e.$handleEvent(t),e.addMoreData.apply(void 0,arguments)}}})],1)},r=[]},f9b1:function(e,t,a){"use strict";a.r(t);var n=a("8b61"),o=a("349b");for(var r in o)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return o[e]}))}(r);a("faef");var i=a("828b"),s=Object(i["a"])(o["default"],n["b"],n["c"],!1,null,"1d7f90d0",null,!1,n["a"],void 0);t["default"]=s.exports},faef:function(e,t,a){"use strict";var n=a("4d70"),o=a.n(n);o.a}}]);