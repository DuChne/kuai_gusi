!function(){var t=function(){return function(t){var e={};function i(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=56)}({10:function(t,e){t.exports=function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,r=(o=i("@app-module/system.router"))&&o.__esModule?o:{default:o};var n={props:["list","type"],private:{},onMenuPress(){this.$app.$def.showMenu()},public:{action:null},onInit(){},onShow(){},chuFun(t){this.$emit("delFun",{isBool:!0,val:t})},tiaoTstory(t){console.log(t,1111),r.default.push({uri:"/Tstory",params:{id:t,type:this.type}})}};e.default=n}},56:function(t,e,i){i(7);var o=i(57),r=i(58),n=i(59);$app_define$("@app-component/index",[],(function(t,e,i){n(i,e,t),e.__esModule&&e.default&&(i.exports=e.default),i.exports.template=o,i.exports.style=r})),$app_bootstrap$("@app-component/index",{packagerVersion:"0.5.6"})},57:function(t,e){t.exports={type:"div",attr:{},classList:["demo-page"],children:[{type:"div",attr:{},style:{width:"750px"},children:[{type:"list",attr:{},classList:["tabsa"],events:{scrollbottom:"chuwallFun"},style:{paddingTop:"30px"},children:[{type:"list-item",attr:{},classList:["gong_div","flex","flex_wrap","flex_justifyc;"],children:[{type:"div",attr:{},style:{marginLeft:"30px"},children:[{type:"ztlist",attr:{list:function(){return this.xlArr},type:function(){return this.serialize}}}]}]}]}]}]}},58:function(t,e){t.exports={".flex":{display:"flex"},".flex_wrap":{flexWrap:"wrap"},".flex_alignc":{alignContent:"center"},".flex_justifyc":{justifyContent:"center"},".flex_justifysb":{justifyContent:"space-between"},".flex_justifyst":{justifyContent:"flex-start"},".flex_justifyse":{justifyContent:"flex-end"},".positionR":{position:"relative"},".positionA":{position:"absolute"},".positionF":{position:"fixed"},".pwidth":{width:"750px"},".load-more":{justifyContent:"center"},".demo-page":{flexDirection:"column",alignItems:"center",display:"flex",flexWrap:"wrap"},".tabsa":{width:"750px",backgroundColor:"#ffffff",position:"fixed",bottom:"10px",top:"0px",left:"0px"},".bei":{position:"fixed",top:"0px",left:"0px",display:"flex",justifyContent:"space-between",height:"80px",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"#999999",width:"750px",alignItems:"center",paddingLeft:"30px",paddingRight:"30px"},".beia":{position:"fixed",top:"0px",left:"0px",display:"flex",justifyContent:"flex-end",height:"80px",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"#999999",width:"750px",alignItems:"center",paddingLeft:"30px",paddingRight:"30px"},".flex_sb":{display:"flex",justifyContent:"space-between"},".flex_a":{display:"flex",flexWrap:"wrap"},".flext":{display:"flex",alignItems:"center"},".neir":{position:"fixed",bottom:"0px",right:"0px",left:"0px",top:"0px",backgroundColor:"#ffffff"},".tianj":{width:"300px",marginTop:"30px",marginRight:"auto",marginBottom:"auto",marginLeft:"auto",height:"80px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",borderTopWidth:"1px",borderRightWidth:"1px",borderBottomWidth:"1px",borderLeftWidth:"1px",borderStyle:"solid",borderTopColor:"#000000",borderRightColor:"#000000",borderBottomColor:"#000000",borderLeftColor:"#000000"},".mask":{position:"fixed",left:"0px",right:"0px",top:"0px",bottom:"0px",zIndex:1001,backgroundColor:"rgba(0,0,0,0.7)"},".gong_div":{width:"750px",display:"flex",justifyContent:"space-between",flexWrap:"wrap",paddingBottom:"150px"}}},59:function(t,e){t.exports=function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;r(i("@app-module/system.router")),r(i("@app-module/system.storage")),r(i("@app-module/system.prompt"));var o=r(i("@app-module/system.fetch"));function r(t){return t&&t.__esModule?t:{default:t}}var n={protected:{xlArr:[],serialize:"subject"},onInit(){1==this.$page.query.id?this.serialize="subject":this.serialize="series",this.history()},onShow(){},createShortcut(){},history(){var t=this;o.default.fetch({url:"https://www.dudugushi.com/anonymous/"+t.serialize,method:"get",resphonseType:"json",header:{"Content-Type":"application/json"},success:function(e){var i=JSON.parse(e.data);"page is out of range"!=i.msg&&(t.xlArr=i.data)},fail:function(t){}})}};e.default=n;const p=e.default||t.exports,s=["public","protected","private"];if(p.data&&s.some((function(t){return p[t]})))throw new Error('页面VM对象中的属性data不可与"'+s.join(",")+'"同时存在，请使用private替换data名称');p.data||(p.data={},p._descriptor={},s.forEach((function(t){const e=typeof p[t];if("object"===e){p.data=Object.assign(p.data,p[t]);for(const e in p[t])p._descriptor[e]={access:t}}else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能是函数，请使用对象")})))}},7:function(t,e,i){var o=i(8),r=i(9),n=i(10);$app_define$("@app-component/ztlist",[],(function(t,e,i){n(i,e,t),e.__esModule&&e.default&&(i.exports=e.default),i.exports.template=o,i.exports.style=r}))},8:function(t,e){t.exports={type:"div",attr:{},classList:["demo-page"],children:[{type:"div",attr:{},style:{width:"690px",display:"flex",flexWrap:"wrap"},children:[{type:"div",attr:{},style:{width:"690px",display:"flex",justifyContent:"space-between",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"#eeeeee",position:"relative",paddingTop:"30px",paddingBottom:"30px"},repeat:function(){return this.list},events:{click:function(t){this.tiaoTstory(this.$item.id,t)}},children:[{type:"div",attr:{},style:{width:"280px",display:"flex",justifyContent:"flex-end"},children:[{type:"image",attr:{src:function(){return"https://dudu-image-1253462148.image.myqcloud.com/story/"+this.$item.picture}},style:{width:"300px"}}]},{type:"div",attr:{},style:{width:"380px",display:"flex",flexWrap:"wrap"},children:[{type:"div",attr:{},style:{width:"380px",height:"44px"},children:[{type:"text",attr:{value:function(){return this.$item.title}},style:{fontSize:"34px",display:"flex",justifyContent:"flex-end"}}]},{type:"div",attr:{},style:{width:"380px",alignItems:"flex-start"},children:[{type:"text",attr:{value:function(){return this.$item.guide}},style:{fontSize:"24px",color:"#9E9E9E"}}]},{type:"div",attr:{},style:{width:"380px"},classList:["flex","flex_justifyse"],children:[{type:"div",attr:{},style:{paddingLeft:"15px",paddingRight:"15px",borderRadius:"4px",backgroundColor:"#F6F6F6"},children:[{type:"text",attr:{value:function(){return this.$item.num_stories+"个故事"}},style:{fontSize:"24px",color:"#9E9E9E"}}]}]}]},{type:"image",attr:{src:"/Common/ztImg.png"},style:{position:"absolute",top:"0px",right:"0px",width:"100px"}}]}]}]}},9:function(t,e){t.exports={".demo-page":{flexDirection:"column",justifyContent:"center",alignItems:"center"},".title":{fontSize:"40px",textAlign:"center"},".liDiv":{width:"648px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",borderBottomWidth:"1px",borderBottomStyle:"solid",borderBottomColor:"#aaaaaa"},".yuan":{width:"80px",height:"80px",backgroundColor:"#ff6454",borderRadius:"40px",display:"flex",justifyContent:"center",alignItems:"center"},".yuana":{width:"80px",height:"80px",backgroundColor:"#51a284",borderRadius:"40px",display:"flex",justifyContent:"center",alignItems:"center"},".flex_w":{display:"flex",alignItems:"center",flexWrap:"wrap"},".flex":{display:"flex"},".flex_wrap":{flexWrap:"wrap"},".flex_alignc":{alignContent:"center"},".flex_justifyc":{justifyContent:"center"},".flex_justifysb":{justifyContent:"space-between"},".flex_justifyst":{justifyContent:"flex-start"},".flex_justifyse":{justifyContent:"flex-end"}}}})};if("undefined"==typeof window)return t();window.createPageHandler=t}();