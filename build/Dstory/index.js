!function(){var t=function(){return function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=52)}({1:function(t,e,i){var o=i(2),n=i(3),r=i(4);$app_define$("@app-component/gslist",[],(function(t,e,i){r(i,e,t),e.__esModule&&e.default&&(i.exports=e.default),i.exports.template=o,i.exports.style=n}))},2:function(t,e){t.exports={type:"div",attr:{},classList:["demo-page"],children:[{type:"div",attr:{},style:{width:"690px",display:"flex",flexWrap:"wrap"},children:[{type:"div",attr:{},style:{width:"690px",display:"flex",justifyContent:"space-between",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"#eeeeee",paddingTop:"30px",paddingBottom:"30px"},repeat:function(){return this.list},events:{click:function(t){this.tiaoAbout(this.$item.id,t)}},children:[{type:"div",attr:{},style:{width:"300px",display:"flex",justifyContent:"flex-end"},children:[{type:"image",attr:{src:function(){return"https://dudu-image-1253462148.image.myqcloud.com/story/"+this.$item.picture}},style:{width:"300px"}}]},{type:"div",attr:{},style:{width:"350px",display:"flex",flexWrap:"wrap"},children:[{type:"div",attr:{},style:{width:"350px",height:"44px"},children:[{type:"text",attr:{value:function(){return this.$item.title}},style:{fontSize:"34px",display:"flex",justifyContent:"flex-end"}}]},{type:"div",attr:{},style:{width:"350px",alignItems:"flex-start"},children:[{type:"text",attr:{value:function(){return this.$item.guide}},style:{fontSize:"24px",color:"#9E9E9E"}}]},{type:"div",attr:{},style:{width:"350px",display:"flex",alignContent:"center"},children:[{type:"div",attr:{},repeat:{exp:function(){return this.$item.tags},key:"i",value:"personItem"},style:{paddingLeft:"15px",paddingRight:"15px",borderRadius:"20px",backgroundColor:"#F6F6F6",marginRight:"10px"},children:[{type:"text",attr:{value:function(){return this.personItem.name}},style:{fontSize:"18px"}}]}]}]}]}]}]}},3:function(t,e){t.exports={".demo-page":{flexDirection:"column",justifyContent:"center",alignItems:"center"},".title":{fontSize:"40px",textAlign:"center"},".liDiv":{width:"648px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"#aaaaaa"},".yuan":{width:"80px",height:"80px",backgroundColor:"#ff6454",borderRadius:"40px",display:"flex",justifyContent:"center",alignItems:"center"},".yuana":{width:"80px",height:"80px",backgroundColor:"#51a284",borderRadius:"40px",display:"flex",justifyContent:"center",alignItems:"center"},".flex":{display:"flex",alignItems:"center"},".flex_w":{display:"flex",alignItems:"center",flexWrap:"wrap"}}},4:function(t,e){t.exports=function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,n=(o=i("@app-module/system.router"))&&o.__esModule?o:{default:o};var r={props:["list"],private:{},onMenuPress(){this.$app.$def.showMenu()},public:{action:null},onInit(){console.log()},onShow(){},chuFun(t){this.$emit("delFun",{isBool:!0,val:t})},tiaoAbout(t){n.default.push({uri:"/About",params:{id:t}})}};e.default=r}},52:function(t,e,i){i(1);var o=i(53),n=i(54),r=i(55);$app_define$("@app-component/index",[],(function(t,e,i){r(i,e,t),e.__esModule&&e.default&&(i.exports=e.default),i.exports.template=o,i.exports.style=n})),$app_bootstrap$("@app-component/index",{packagerVersion:"0.5.6"})},53:function(t,e){t.exports={type:"div",attr:{},classList:["demo-page"],children:[{type:"div",attr:{},style:{width:"750px"},classList:["flex","flex_wrap"],children:[{type:"div",attr:{},events:{click:function(t){this.tianSerialize(1,t)}},style:{width:"690px",backgroundColor:"#ffffff",borderRadius:"10px",marginLeft:"30px",paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px",marginTop:"40px"},classList:["flex","flex_alignc","flex_justifysb"],children:[{type:"text",attr:{value:"专题故事"},style:{fontSize:"35px",fontWeight:"bold"}},{type:"image",attr:{src:"/Common/left-arrow.png"},style:{width:"40px"}}]},{type:"div",attr:{},events:{click:function(t){this.tianSerialize(2,t)}},style:{width:"690px",backgroundColor:"#ffffff",borderRadius:"10px",marginLeft:"30px",paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px",marginTop:"40px"},classList:["flex","flex_alignc","flex_justifysb"],children:[{type:"text",attr:{value:"连载故事"},style:{fontSize:"35px",fontWeight:"bold"}},{type:"image",attr:{src:"/Common/left-arrow.png"},style:{width:"40px"}}]},{type:"div",attr:{},style:{width:"690px",backgroundColor:"#ffffff",borderRadius:"10px",marginLeft:"30px",marginTop:"40px"},classList:["flex","flex_wrap","flex_alignc","flex_justifysb"],repeat:function(){return this.classification},children:[{type:"div",attr:{},style:{width:"690px",backgroundColor:"#ffffff",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"#999999",paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px"},classList:["flex","flex_alignc","flex_justifysb"],children:[{type:"text",attr:{value:function(){return this.$item.name}},style:{fontSize:"35px",fontWeight:"bold"}}]},{type:"div",attr:{},style:{width:"690px",backgroundColor:"#ffffff",paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px"},classList:["flex","flex_wrap","flex_alignc"],children:[{type:"div",attr:{},repeat:{exp:function(){return this.$item.tag_list},key:"index",value:"i"},style:{marginBottom:"20px"},events:{click:function(t){this.tianCardDemo(this.i.id,t)}},children:[{type:"text",attr:{value:function(){return this.i.name}},style:{fontSize:"24px",marginRight:"30px"}}]}]}]}]}]}},54:function(t,e){t.exports={".flex":{display:"flex"},".flex_wrap":{flexWrap:"wrap"},".flex_alignc":{alignContent:"center"},".flex_justifyc":{justifyContent:"center"},".flex_justifysb":{justifyContent:"space-between"},".flex_justifyst":{justifyContent:"flex-start"},".flex_justifyse":{justifyContent:"flex-end"},".positionR":{position:"relative"},".positionA":{position:"absolute"},".positionF":{position:"fixed"},".pwidth":{width:"750px"},".load-more":{justifyContent:"center"},".demo-page":{flexDirection:"column",alignItems:"center",display:"flex",flexWrap:"wrap",backgroundColor:"#f4f4f4",paddingBottom:"40px"},".tabsa":{width:"750px",backgroundColor:"#ffffff",position:"fixed",bottom:"10px",top:"0px",left:"0px"},".bei":{position:"fixed",top:"0px",left:"0px",display:"flex",justifyContent:"space-between",height:"80px",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"#999999",width:"750px",alignItems:"center",paddingLeft:"30px",paddingRight:"30px"},".beia":{position:"fixed",top:"0px",left:"0px",display:"flex",justifyContent:"flex-end",height:"80px",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"#999999",width:"750px",alignItems:"center",paddingLeft:"30px",paddingRight:"30px"},".flex_sb":{display:"flex",justifyContent:"space-between"},".flex_a":{display:"flex",flexWrap:"wrap"},".flext":{display:"flex",justifyContent:"center"},".neir":{position:"fixed",bottom:"0px",right:"0px",left:"0px",top:"0px",backgroundColor:"#ffffff"},".tianj":{width:"300px",marginTop:"30px",marginRight:"auto",marginBottom:"auto",marginLeft:"auto",height:"80px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",borderTopWidth:"1px",borderRightWidth:"1px",borderBottomWidth:"1px",borderLeftWidth:"1px",borderStyle:"solid",borderTopColor:"#000000",borderRightColor:"#000000",borderBottomColor:"#000000",borderLeftColor:"#000000"},".mask":{position:"fixed",left:"0px",right:"0px",top:"0px",bottom:"0px",zIndex:1001,backgroundColor:"rgba(0,0,0,0.7)"},".gong_div":{width:"750px",display:"flex",justifyContent:"space-between",flexWrap:"wrap",paddingBottom:"150px"}}},55:function(t,e){t.exports=function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(i("@app-module/system.router")),n=(r(i("@app-module/system.storage")),r(i("@app-module/system.prompt")),r(i("@app-module/system.fetch")));function r(t){return t&&t.__esModule?t:{default:t}}var a={protected:{classification:[]},onInit(){this.history()},onShow(){},createShortcut(){},tianSerialize(t){o.default.push({uri:"/Serialize",params:{id:t}})},tianCardDemo(t){o.default.push({uri:"/CardDemo",params:{id:t}})},history(){var t=this;n.default.fetch({url:"https://www.dudugushi.com/anonymous/tag/classification/",method:"get",resphonseType:"json",header:{"Content-Type":"application/json"},success:function(e){var i=JSON.parse(e.data);t.classification=i.classification},fail:function(t){}})}};e.default=a;const p=e.default||t.exports,l=["public","protected","private"];if(p.data&&l.some((function(t){return p[t]})))throw new Error('页面VM对象中的属性data不可与"'+l.join(",")+'"同时存在，请使用private替换data名称');p.data||(p.data={},p._descriptor={},l.forEach((function(t){const e=typeof p[t];if("object"===e){p.data=Object.assign(p.data,p[t]);for(const e in p[t])p._descriptor[e]={access:t}}else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能是函数，请使用对象")})))}}})};if("undefined"==typeof window)return t();window.createPageHandler=t}();