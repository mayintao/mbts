(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-studentMain"],{"06db":function(t,e,n){"use strict";var a=n("8c33"),i=n.n(a);i.a},"191b":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-navbar[data-v-1d7f90d0]{width:100%}.u-navbar-fixed[data-v-1d7f90d0]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-1d7f90d0]{width:100%}.u-navbar-inner[data-v-1d7f90d0]{display:flex;flex-direction:row;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-1d7f90d0]{display:flex;flex-direction:row;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-1d7f90d0]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-1d7f90d0]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-1d7f90d0]{flex:1}.u-title[data-v-1d7f90d0]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-1d7f90d0]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.u-slot-content[data-v-1d7f90d0]{flex:1;display:flex;flex-direction:row;align-items:center}',""]),t.exports=e},"349b":function(t,e,n){"use strict";n.r(e);var a=n("c118"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},"4d70":function(t,e,n){var a=n("191b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("4381c943",a,!0,{sourceMap:!1,shadowMode:!1})},"6d36":function(t,e,n){var a=n("c86c");e=a(!1),e.push([t.i,".container[data-v-3a5a619f]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background-color:#f7f7f7;background-image:url(/static/web_main_bg.png) /* 替换为你的背景图片路径 */}.profile-section[data-v-3a5a619f]{position:absolute;top:%?120?%;left:%?40?%;color:#fff;font-size:%?36?%;font-weight:700}.username[data-v-3a5a619f]{font-size:%?36?%;color:#333;margin-top:%?10?%;font-weight:700}.menu-container[data-v-3a5a619f]{width:90%;display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:%?50?%}.menu-item[data-v-3a5a619f]{width:48%;background:#fff;border-radius:%?20?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1);padding:%?40?% 0;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:%?20?%}.menu-item uni-text[data-v-3a5a619f]{margin-top:%?10?%;font-size:%?32?%;color:#333}.profile-container[data-v-3a5a619f]{position:absolute;top:%?120?%;left:%?40?%;color:#fff;display:flex;flex-direction:column;gap:%?30?% /* 控制间距 */}\n\n/* 学生姓名 */.student-name[data-v-3a5a619f]{font-size:%?40?%;font-weight:700}\n\n/* 录取状态样式 */.status[data-v-3a5a619f]{font-size:%?32?%;font-weight:700;padding:%?10?% %?20?%;border-radius:%?10?%;width:-webkit-fit-content;width:fit-content}\n\n/* 录取状态颜色变化 */.status.admitted[data-v-3a5a619f]{background-color:#28a745;color:#fff}.status.pending[data-v-3a5a619f]{background-color:orange;color:#fff}\n\n/* 学号 & 校区 */.info-item[data-v-3a5a619f]{display:flex;align-items:center;font-size:%?30?%}.info-label[data-v-3a5a619f]{font-weight:700;margin-right:%?10?%}.info-value[data-v-3a5a619f]{color:#f8f8f8}",""]),t.exports=e},"8b61":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var a={uIcon:n("2a05").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[n("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),n("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?n("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[n("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?n("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?n("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[n("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),n("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),n("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?n("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},s=[]},"8c33":function(t,e,n){var a=n("6d36");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("967d").default;i("29473c30",a,!0,{sourceMap:!1,shadowMode:!1})},"8ffd":function(t,e,n){"use strict";n.r(e);var a=n("dc8b"),i=n("f801");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("06db");var o=n("828b"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"3a5a619f",null,!1,a["a"],void 0);e["default"]=u.exports},c118:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa");var a=uni.getSystemInfoSync(),i={},s={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:i,statusBarHeight:a.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=s},d8e0:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{full_name:"",offer_status:1,student_id:"",student_campus:""}},onLoad:function(t){t&&(this.full_name=t.full_name,console.log(this.full_name),this.full_name&&this.initData())},onShow:function(){this.full_name||uni.navigateTo({url:"/pages/index/loginSys"})},methods:{initData:function(){uni.showLoading({title:"初始化..."});var t=this;uni.request({url:"https://mbtsserver.onrender.com/api/queryMBTSRegisterUserDetail?id=0&student_id=&full_name="+t.full_name+"&key=registeruser1739935308mbts",method:"GET",success:function(e){uni.hideLoading(),console.log(e),console.log(e.data.desc),200===e.data.code?(t.offer_status=e.data.data[0].offer_status,console.log("offer_status is "+t.offer_status),0===t.offer_status&&(t.student_id=e.data.data[0].student_id,t.student_campus=e.data.data[0].student_campus)):uni.showModal({content:e.data.desc||"失败",showCancel:!1})},fail:function(t){uni.hideLoading(),console.log(t),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})},gotoApply:function(){uni.navigateTo({url:"/pages/index/student/apply?full_name="+this.full_name})},gotoMyApplications:function(){uni.navigateTo({url:"/pages/index/student/myApplications?full_name="+this.full_name})},gotoSelectCourse:function(){0===this.offer_status?uni.navigateTo({url:"/pages/index/student/selectCourse?full_name="+this.full_name+"&student_id="+this.student_id+"&campus_name="+this.student_campus}):uni.showModal({content:"抱歉，尚未录取，不能选课！",showCancel:!1})},gotoMyCourses:function(){uni.navigateTo({url:"/pages/index/student/myCourses?full_name="+this.full_name})},gotoPay:function(){uni.navigateTo({url:"/pages/index/student/myFees?full_name="+this.full_name})},gotoLogout:function(){var t=this;uni.showModal({title:"退出系统",content:"确定要退出系统吗？",success:function(e){e.confirm&&(t.full_name="",uni.navigateTo({url:"/pages/index/loginSys"}))}})}}};e.default=a},dc8b:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return a}));var a={uNavbar:n("f9b1").default,uIcon:n("2a05").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("u-navbar",{attrs:{"is-back":!1,title:"学生主页"}}),n("v-uni-view",{staticClass:"profile-container"},[n("v-uni-view",{staticClass:"student-name"},[t._v("欢迎您："+t._s(t.full_name))]),n("v-uni-view",{staticClass:"status",class:{admitted:0===t.offer_status,pending:1===t.offer_status}},[t._v(t._s(0===t.offer_status?"🎉 已录取":"⏳ 尚未录取"))]),0===t.offer_status?n("v-uni-view",[n("v-uni-view",{staticClass:"info-item"},[n("v-uni-text",{staticClass:"info-label"},[t._v("学号：")]),n("v-uni-text",{staticClass:"info-value"},[t._v(t._s(t.student_id))])],1),n("v-uni-view",{staticClass:"info-item"},[n("v-uni-text",{staticClass:"info-label"},[t._v("校区：")]),n("v-uni-text",{staticClass:"info-value"},[t._v(t._s(t.student_campus))])],1)],1):t._e()],1),n("v-uni-view",{staticClass:"menu-container"},[n("v-uni-view",{staticClass:"menu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoApply.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"/static/apply.png",size:"90"}}),n("v-uni-text",[t._v("入学申请")])],1),n("v-uni-view",{staticClass:"menu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoMyApplications.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"/static/myapply.png",size:"90"}}),n("v-uni-text",[t._v("我的申请")])],1),n("v-uni-view",{staticClass:"menu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoSelectCourse.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"/static/selectcourse.png",size:"90"}}),n("v-uni-text",[t._v("我要选课")])],1),n("v-uni-view",{staticClass:"menu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoMyCourses.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"/static/mycourse.png",size:"90"}}),n("v-uni-text",[t._v("我的课程")])],1),n("v-uni-view",{staticClass:"menu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoPay.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"/static/payment.png",size:"90"}}),n("v-uni-text",[t._v("费用待缴")])],1),n("v-uni-view",{staticClass:"menu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoLogout.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"/static/quitsys.png",size:"90"}}),n("v-uni-text",[t._v("退出系统")])],1)],1)],1)},s=[]},f801:function(t,e,n){"use strict";n.r(e);var a=n("d8e0"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},f9b1:function(t,e,n){"use strict";n.r(e);var a=n("8b61"),i=n("349b");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("faef");var o=n("828b"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"1d7f90d0",null,!1,a["a"],void 0);e["default"]=u.exports},faef:function(t,e,n){"use strict";var a=n("4d70"),i=n.n(a);i.a}}]);