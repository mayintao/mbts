(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-pdf"],{"332e":function(e,t,n){"use strict";var i=n("9dd7"),s=n.n(i);s.a},"4c76":function(e,t,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(n("a934")),a={data:function(){return{s3:null,pdfText:"",speechSynthesis:null,utterance:null,isPaused:!1}},onLoad:function(e){var t=this;uni.request({url:"https://mbtsserver.onrender.com/api/getAWSKey?key=registeruser1739935308mbts",method:"GET",success:function(e){console.log(e),s.default.config.update({accessKeyId:e.data.accessKeyId,secretAccessKey:e.data.secretAccessKey,region:e.data.region}),t.s3=new s.default.S3},fail:function(e){console.log(e)}})},methods:{fetchPDFText:function(){var e=this;uni.chooseFile({count:1,type:"all",success:function(t){var n=t.tempFiles[0],i=n.name;console.log(i),uni.showLoading({title:"upload..."});var s=new Blob([n],{type:n.type}),a={Bucket:"mbts-pdf",Key:i,Body:s,ContentType:n.type};e.s3.upload(a,(function(t,n){uni.hideLoading(),t?console.error("上传失败",t):(console.log(n),n.Location&&e.uploadToServer(n.Location))}))},fail:function(e){console.error("选择文件失败",e)}})},uploadToServer:function(e){var t=this;uni.showLoading({title:"解析中..."}),uni.request({url:"https://mbtsserver.onrender.com/api/PDFReader",method:"POST",data:{file_url:e,key:"registeruser1739935308mbts"},header:{"Content-Type":"application/json",Accept:"application/json"},success:function(e){uni.hideLoading(),console.log(e),t.pdfText=e.data,uni.showToast({title:"PDF 文字获取成功",icon:"success"})},fail:function(e){uni.hideLoading(),console.log(e)}})},startReading:function(){this.pdfText?(this.speechSynthesis||(this.speechSynthesis=window.speechSynthesis),this.utterance=new SpeechSynthesisUtterance(this.pdfText),this.utterance.lang="zh-CN",this.utterance.rate=1,this.utterance.pitch=1,this.speechSynthesis.speak(this.utterance)):uni.showToast({title:"请先获取 PDF 文字",icon:"none"})},pauseReading:function(){this.speechSynthesis&&this.speechSynthesis.speaking&&(this.speechSynthesis.pause(),this.isPaused=!0)},resumeReading:function(){this.speechSynthesis&&this.isPaused&&(this.speechSynthesis.resume(),this.isPaused=!1)},stopReading:function(){this.speechSynthesis&&this.speechSynthesis.cancel()}}};t.default=a},"823d":function(e,t,n){var i=n("c86c");t=i(!1),t.push([e.i,"uni-textarea[data-v-53a37463]{width:100%;height:200px;margin-top:10px;padding:10px;font-size:16px;border:1px solid #ddd;border-radius:5px}uni-button[data-v-53a37463]{margin:5px}.main-view[data-v-53a37463]{flex-direction:column;margin:%?30?%;display:flex;justify-content:center;align-items:center}.btn-view[data-v-53a37463]{flex-direction:row;margin:%?30?%;display:flex;justify-content:center;align-items:center}.content[data-v-53a37463]{margin:%?30?%;width:90%;min-height:400px; /* 设置初始高度 */padding:20px;border:2px solid #ddd;border-radius:8px;font-size:18px;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,.1)}",""]),e.exports=t},"9dd7":function(e,t,n){var i=n("823d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=n("967d").default;s("069d06b8",i,!0,{sourceMap:!1,shadowMode:!1})},a013:function(e,t,n){"use strict";n.r(t);var i=n("4c76"),s=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=s.a},a223:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"main-view"},[n("v-uni-view",{staticClass:"btn-view"},[n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.fetchPDFText.apply(void 0,arguments)}}},[e._v("上传PDF文件并获取文字")])],1),n("v-uni-textarea",{staticClass:"content",attrs:{rows:"10",placeholder:"这里显示PDF文字"},model:{value:e.pdfText,callback:function(t){e.pdfText=t},expression:"pdfText"}}),n("v-uni-view",{staticClass:"btn-view"},[n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.startReading.apply(void 0,arguments)}}},[e._v("开始朗读")]),n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pauseReading.apply(void 0,arguments)}}},[e._v("暂停朗读")]),n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.resumeReading.apply(void 0,arguments)}}},[e._v("继续朗读")]),n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.stopReading.apply(void 0,arguments)}}},[e._v("停止朗读")])],1)],1)},s=[]},b8a8:function(e,t,n){"use strict";n.r(t);var i=n("a223"),s=n("a013");for(var a in s)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(a);n("332e");var o=n("828b"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"53a37463",null,!1,i["a"],void 0);t["default"]=c.exports}}]);