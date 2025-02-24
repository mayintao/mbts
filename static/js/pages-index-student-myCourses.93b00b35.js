(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-student-myCourses"],{"0065":function(t,e,o){var a=o("c86c");e=a(!1),e.push([t.i,".container[data-v-070b3ac2]{padding:%?20?%;background-color:#f8f9fa}.course-list[data-v-070b3ac2]{height:80vh;overflow-y:auto}.course-card[data-v-070b3ac2]{background:#fff;padding:%?20?%;border-radius:%?16?%;margin-bottom:%?20?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1)}.course-header[data-v-070b3ac2]{display:flex;justify-content:space-between;align-items:center;margin-bottom:%?10?%}.course-title[data-v-070b3ac2]{font-size:%?32?%;font-weight:700;color:#333}.course-code[data-v-070b3ac2]{font-size:%?26?%;color:#666}.course-body[data-v-070b3ac2]{margin-bottom:%?20?%}.course-info[data-v-070b3ac2]{display:flex;justify-content:space-between;font-size:%?28?%;color:#444;margin-bottom:%?5?%}.select-btn[data-v-070b3ac2]{width:100%}\n\n/* Form Item 纵向排列 */.form-item[data-v-070b3ac2]{margin-top:%?30?%;margin-bottom:%?30?%}\n\n/* 标签样式 */.form-label[data-v-070b3ac2]{margin-top:%?10?%;font-size:%?30?%;color:#333;font-weight:700;margin-bottom:%?10?%}\n\n/* 输入框的容器 */.input-wrapper[data-v-070b3ac2]{width:30%;background-color:#fff;border-radius:%?12?%;box-shadow:0 %?4?% %?10?% rgba(0,0,0,.1); /* 轻微阴影 */padding:%?8?% %?30?%;border:%?1?% solid #ddd; /* 边框 */margin-top:%?10?%;margin-bottom:%?10?%}.score-display[data-v-070b3ac2]{padding:%?10?% %?20?%;border-radius:%?10?%;text-align:center;font-size:%?32?%;font-weight:700;background-color:#f5f5f5 /* 默认背景 */}.score-empty[data-v-070b3ac2]{color:#999 /* 无成绩 */}.score-excellent[data-v-070b3ac2]{color:#4caf50 /* A 级 */}.score-good[data-v-070b3ac2]{color:#2196f3 /* B 级 */}.score-pass[data-v-070b3ac2]{color:#ff9800 /* C 级 */}.score-fail[data-v-070b3ac2]{color:#ff5722 /* D, F 不及格 */}",""]),t.exports=e},"0709":function(t,e,o){"use strict";var a=o("b507"),n=o.n(a);n.a},"13c3":function(t,e,o){"use strict";o("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("4626"),o("c223");var a={data:function(){return{full_name:"",currentPage:0,listData:[]}},onLoad:function(t){t&&(this.full_name=t.full_name,console.log(this.full_name)),this.queryStudentCourseList()},methods:{getScoreClass:function(t){return t?["A+","A","A-"].includes(t)?"score-excellent":["B+","B","B-"].includes(t)?"score-good":["C+","C","C-"].includes(t)?"score-pass":"score-fail":"score-empty"},queryStudentCourseList:function(){uni.showLoading({title:"查询中..."});var t=this;uni.request({url:"https://localhost:8848/api/queryMBTSStudentCourseList?student_id=&full_name="+t.full_name+"&startnum="+t.currentPage+"&key=registeruser1739935308mbts",method:"GET",success:function(e){uni.hideLoading(),console.log(e),console.log(e.data.desc),200===e.data.code?t.currentPage>0?e.data.data.length>0&&(console.log(e.data.data.length),t.listData=t.listData.concat(e.data.data)):t.listData=e.data.data:uni.showModal({content:e.data.desc||"查询课程失败",showCancel:!1}),uni.stopPullDownRefresh()},fail:function(t){uni.hideLoading(),uni.stopPullDownRefresh(),console.log(t),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})},addMoreData:function(){this.currentPage+=20,this.queryStudentCourseList()},onPullDownRefresh:function(){this.currentPage=0,this.queryStudentCourseList()},gotoDeleteCourse:function(t){var e=this;console.log("item id is "+t.id),t.course_score?uni.showModal({title:"错误",content:"已有成绩，不能手动删除申请，请联系管理员处理！",showCancel:!1}):uni.showModal({title:"确认删除",content:"确定要删除该课程吗？",success:function(o){if(o.confirm){var a=e;uni.showLoading({title:"删除中..."}),uni.request({url:"https://localhost:8848/api/deleteMBTSStudentCourseById?id="+t.id+"&key=registeruser1739935308mbts",method:"GET",header:{"Content-Type":"application/json",Accept:"application/json"},success:function(t){uni.hideLoading(),console.log(t),console.log(t.data.desc),200===t.data.code?(uni.showToast({title:"删除成功",icon:"success"}),a.currentPage=0,a.queryStudentCourseList()):uni.showModal({content:t.data.desc||"获取失败",showCancel:!1})},fail:function(t){uni.hideLoading(),console.log(t),uni.showModal({title:"错误",content:"请求失败，请检查网络连接",showCancel:!1})}})}}})}}};e.default=a},2885:function(t,e,o){"use strict";o.r(e);var a=o("13c3"),n=o.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){o.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"414a":function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return s})),o.d(e,"a",(function(){return a}));var a={uNavbar:o("f9b1").default,uButton:o("c425").default,uLoadmore:o("09ba").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"container"},[o("u-navbar",{attrs:{title:"我的课程","is-back":!0}}),o("v-uni-scroll-view",{staticClass:"course-list",attrs:{"scroll-y":!0}},t._l(t.listData,(function(e,a){return o("v-uni-view",{key:a,staticClass:"course-card"},[o("v-uni-view",{staticClass:"course-header"},[o("v-uni-text",{staticClass:"course-title"},[t._v(t._s(e.course_name))]),o("v-uni-text",{staticClass:"course-code"},[t._v("课程代码: "+t._s(e.course_code))])],1),o("v-uni-view",{staticClass:"form-item"},[o("v-uni-text",{staticClass:"form-label"},[t._v("您的成绩：")]),o("v-uni-view",{staticClass:"input-wrapper"},[o("v-uni-view",{staticClass:"uni-input score-display",class:t.getScoreClass(e.course_score)},[t._v(t._s(e.course_score?e.course_score:"还没有成绩"))])],1)],1),o("v-uni-view",{staticClass:"course-body"},[o("v-uni-view",{staticClass:"course-info"},[o("v-uni-text",[t._v("学分: "+t._s(e.course_credit))]),o("v-uni-text",[t._v("讲师: "+t._s(e.course_lecturer))])],1),o("v-uni-view",{staticClass:"course-info"},[o("v-uni-text",[t._v("面向对象: "+t._s(e.target_group_student))]),o("v-uni-text",[t._v("时间表: "+t._s(e.timetable))])],1)],1),o("u-button",{staticClass:"select-btn",attrs:{type:"primary",size:"mini"},on:{click:function(o){o.stopPropagation(),arguments[0]=o=t.$handleEvent(o),t.gotoDeleteCourse(e)}}},[t._v("点击删除该课程")])],1)})),1),o("u-loadmore",{attrs:{status:t.loadStatus},on:{loadmore:function(e){arguments[0]=e=t.$handleEvent(e),t.addMoreData.apply(void 0,arguments)}}})],1)},s=[]},5468:function(t,e,o){"use strict";o.r(e);var a=o("414a"),n=o("2885");for(var s in n)["default"].indexOf(s)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(s);o("0709");var i=o("828b"),c=Object(i["a"])(n["default"],a["b"],a["c"],!1,null,"070b3ac2",null,!1,a["a"],void 0);e["default"]=c.exports},b507:function(t,e,o){var a=o("0065");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("967d").default;n("7c38bbd5",a,!0,{sourceMap:!1,shadowMode:!1})}}]);