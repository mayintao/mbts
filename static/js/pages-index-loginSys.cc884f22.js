(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-loginSys"],{"191b":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-navbar[data-v-1d7f90d0]{width:100%}.u-navbar-fixed[data-v-1d7f90d0]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-1d7f90d0]{width:100%}.u-navbar-inner[data-v-1d7f90d0]{display:flex;flex-direction:row;justify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-1d7f90d0]{display:flex;flex-direction:row;align-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-1d7f90d0]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-1d7f90d0]{display:flex;flex-direction:row;align-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-1d7f90d0]{flex:1}.u-title[data-v-1d7f90d0]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-1d7f90d0]{flex:1;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.u-slot-content[data-v-1d7f90d0]{flex:1;display:flex;flex-direction:row;align-items:center}',""]),t.exports=e},"349b":function(t,e,n){"use strict";n.r(e);var i=n("c118"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"3ac1":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,".container[data-v-d8168fae]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background-image:url(/static/web_bg.png) /* 替换为你的背景图片路径 */}.form-container[data-v-d8168fae]{width:50%;background:#fff;padding:%?40?%;border-radius:%?20?%;box-shadow:0 %?4?% %?20?% rgba(0,0,0,.1)}.input-group[data-v-d8168fae]{margin-bottom:%?30?%}.input-wrapper[data-v-d8168fae]{display:flex;align-items:center;background:#f5f5f5;border-radius:%?12?%;padding:%?30?%;margin-top:%?60?%;margin-bottom:%?80?%}.input[data-v-d8168fae]{flex:1;margin-left:%?10?%;font-size:%?32?%;border:none;background:none}.btn[data-v-d8168fae]{width:100%;height:%?90?%;font-size:%?36?%;border-radius:%?12?%;margin-top:%?70?%}.login-btn[data-v-d8168fae]{background:#007aff;color:#fff}.register-btn[data-v-d8168fae]{background:#fff;color:#007aff;border:%?2?% solid #007aff}.text-tips[data-v-d8168fae]{text-align:center;font-size:%?28?%;color:#666;margin-top:%?20?%}",""]),t.exports=e},"3d6b":function(t,e,n){"use strict";var i=n("9909"),a=n.n(i);a.a},"4d70":function(t,e,n){var i=n("191b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("967d").default;a("4381c943",i,!0,{sourceMap:!1,shadowMode:!1})},"4fe8":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uNavbar:n("f9b1").default,uIcon:n("2a05").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("u-navbar",{attrs:{"is-back":!1,title:"登录系统",titleStyle:"flex: 1; text-align: center; display: flex; justify-content: center; align-items: center;"}}),n("v-uni-view",{staticClass:"form-container"},[n("v-uni-view",{staticClass:"input-group"},[n("v-uni-view",{staticClass:"input-wrapper"},[n("u-icon",{attrs:{name:"account",size:"22"}}),n("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"Passport Name"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onKeyNameInput.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"input-wrapper"},[n("u-icon",{attrs:{name:"lock",size:"22"}}),n("v-uni-input",{staticClass:"input",attrs:{maxlength:"8",password:"true",placeholder:"请输入8位密码"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onKeyPasswordInput.apply(void 0,arguments)}}})],1)],1),n("v-uni-button",{staticClass:"btn login-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoLogin.apply(void 0,arguments)}}},[t._v("登录")]),n("v-uni-button",{staticClass:"btn register-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoRegister.apply(void 0,arguments)}}},[t._v("去注册")]),n("v-uni-view",{staticClass:"text-tips"},[n("v-uni-text",[t._v("注意：用户名请输入学申请时使用的名称，请妥善保管密码，避免泄露。")])],1)],1)],1)},o=[]},"534f":function(t,e,n){"use strict";n.r(e);var i=n("54c2"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"54c2":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("0c26");var i={data:function(){return{name:"",password:""}},methods:{onKeyNameInput:function(t){this.name=t.target.value},onKeyPasswordInput:function(t){this.password=t.detail.value},gotoLogin:function(){if(this.name.trim())if(this.password&&8===this.password.length){var t=this;uni.showLoading({title:"登录中..."}),uni.request({url:"https://mbtsserver.onrender.com/api/loginMBTSCommonUser",method:"POST",data:{full_name:t.name,password:t.password,key:"registeruser1739935308mbts"},header:{"Content-Type":"application/json",Accept:"application/json"},success:function(e){if(uni.hideLoading(),console.log(e),console.log(e.data.desc),200===e.data.code){uni.showToast({title:"登录成功",icon:"success"});var n=e.data.data[0].role;console.log("角色："+n),uni.setStorageSync("student_info",{full_name:t.name}),0===n?uni.redirectTo({url:"studentMain"}):1===n?uni.redirectTo({url:"lecturerMain"}):2===n?uni.redirectTo({url:"financeMain"}):3===n&&uni.redirectTo({url:"administratorMain"})}else uni.showModal({content:e.data.desc||"登录失败",showCancel:!1})},fail:function(t){uni.hideLoading(),console.log(t),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})}else uni.showToast({title:"请输入8位密码",icon:"none"});else uni.showToast({title:"名称不能为空",icon:"none"})},gotoRegister:function(){uni.redirectTo({url:"registerSys"})}}};e.default=i},"8b61":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("2a05").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[n("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),n("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?n("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[n("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?n("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?n("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[n("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),n("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),n("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?n("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},o=[]},9909:function(t,e,n){var i=n("3ac1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("967d").default;a("6792a68f",i,!0,{sourceMap:!1,shadowMode:!1})},c118:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa");var i=uni.getSystemInfoSync(),a={},o={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:a,statusBarHeight:i.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(i.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(i.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=o},d909:function(t,e,n){"use strict";n.r(e);var i=n("4fe8"),a=n("534f");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("3d6b");var r=n("828b"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"d8168fae",null,!1,i["a"],void 0);e["default"]=s.exports},f9b1:function(t,e,n){"use strict";n.r(e);var i=n("8b61"),a=n("349b");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("faef");var r=n("828b"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"1d7f90d0",null,!1,i["a"],void 0);e["default"]=s.exports},faef:function(t,e,n){"use strict";var i=n("4d70"),a=n.n(i);a.a}}]);