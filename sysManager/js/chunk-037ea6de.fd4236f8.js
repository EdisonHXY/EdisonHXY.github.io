(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-037ea6de"],{"1b92":function(e,t,i){"use strict";i("f78b")},9231:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:5}},[i("div",{staticClass:"fullHeight borderDes"},[i("el-tree",{ref:"tree",attrs:{"highlight-current":!0,data:e.treeData,props:e.props,load:e.loadNode,lazy:"","node-key":"id","expand-on-click-node":!1},on:{"node-contextmenu":e.rightClick,"node-click":e.clickFunc},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data;return i("span",{staticClass:"custom-tree-node"},[i("span",[i("svg-icon",{staticClass:"treeICon",attrs:{"icon-class":n.icon}}),e._v(e._s(n.name)+" ")],1)])}}])})],1)]),i("el-col",{attrs:{span:19}},[i("div",{staticClass:"fullHeight"},[e.sideShow_allLine?i("allLineVue"):e.sideShow_station?i("stationinfoVue",{attrs:{code:e.trsfData.id,isStation:e.trsfType,isAdd:e.isAdd},on:{add:e.addStaAction,change:e.changeStationName}}):e.sideShow_line?i("lineInfoVue",{attrs:{code:e.trsfData.id,isAdd:e.isAdd},on:{change:e.changeLineName,add:e.addLinAction}}):e._e()],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.menuVisible,expression:"menuVisible"}],staticClass:"menu",attrs:{id:"menu"}},[i("div",{staticClass:"menu__item"},[i("el-button",{attrs:{type:"success",icon:"el-icon-plus",size:"mini",disabled:!e.showAddLine},on:{click:e.addLine}},[e._v("新增线路")])],1),i("div",{staticClass:"menu__item"},[i("el-button",{attrs:{type:"success",icon:"el-icon-delete",size:"mini",disabled:!e.showDeleteLine},on:{click:e.deleteLinAction}},[e._v("删除线路")])],1),i("div",{staticClass:"menu__item"},[i("el-button",{attrs:{type:"warning",icon:"el-icon-plus",size:"mini",disabled:!e.showAddStation},on:{click:function(t){return e.addStation(!0)}}},[e._v("新增车站")])],1),i("div",{staticClass:"menu__item"},[i("el-button",{attrs:{type:"warning",icon:"el-icon-delete",size:"mini",disabled:!e.showDeleteStation},on:{click:e.deleteStation}},[e._v("删除车站")])],1),i("div",{staticClass:"menu__item"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-plus",size:"mini",disabled:!e.showAddTrain},on:{click:function(t){return e.addStation(!1)}}},[e._v("新增列车")])],1),i("div",{staticClass:"menu__item",staticStyle:{"margin-bottom":"5px"}},[i("el-button",{attrs:{type:"primary",icon:"el-icon-delete",size:"mini",disabled:!e.showDeleteTrain},on:{click:e.deleteStation}},[e._v("删除列车")])],1)]),i("el-dialog",{attrs:{center:"",title:"提示",visible:e.dialog.visible,width:"20%"},on:{"update:visible":function(t){return e.$set(e.dialog,"visible",t)}}},[i("span",[e._v(e._s(e.dialog.tipMsg))]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialog.visible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.dialogOkClick}},[e._v("确 定")])],1)])],1)],1)},s=[],a=(i("b0c0"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticStyle:{"margin-right":"20px","margin-left":"20px"}},[i("div",[i("el-table",{staticStyle:{width:"100%"},attrs:{"highlight-current-row":"",border:"",data:e.tableData_type,"max-height":"500px"}},[i("el-table-column",{attrs:{label:"线路编号",prop:"id"}}),i("el-table-column",{attrs:{label:"线路名称",prop:"name"}}),i("el-table-column",{attrs:{label:"英文名称",prop:"enName"}}),i("el-table-column",{attrs:{label:"数据服务器",prop:"dataServer"}}),i("el-table-column",{attrs:{label:"命令服务器",prop:"cmdServer"}}),i("el-table-column",{attrs:{label:"支线路数",prop:"subLineNum"}})],1)],1)])])}),o=[],l={name:"allLineVue",data:function(){return{tableData_type:[]}},mounted:function(){console.log("获取全部线路信息");var e=this;this.$httpApi.lineInfo("0").then((function(t){"0"==t.data.code&&(console.log(JSON.stringify(t.data.dataList)),e.tableData_type=t.data.dataList)}))}},d=l,r=(i("d32e"),i("2877")),c=Object(r["a"])(d,a,o,!1,null,null,null),h=c.exports,u=i("7bb0"),p=i("2c2f"),f=i("5c96"),m={components:{allLineVue:h,stationinfoVue:u["a"],lineInfoVue:p["a"]},data:function(){return{node:null,treeData:[],props:{label:"name",children:"children",isLeaf:"leaf",id:"id",type:"type",parentId:"parentId"},menuVisible:!1,showAddLine:!1,showAddStation:!1,showDeleteLine:!1,showDeleteStation:!1,showDeleteTrain:!1,showAddTrain:!1,currentData:null,currentNode:null,sideShow_allLine:!1,sideShow_line:!1,sideShow_station:!1,trsfData:"",trsfType:!0,isAdd:!1,dialog:{visible:!1,tipMsg:"",isLine:!1,id:""}}},methods:{changeStationName:function(e,t){this.trsfData.name=e+"  "+t},changeLineName:function(e,t){console.log(e+"  "+t),this.trsfData.name=e+"  "+t},loadNode:function(e,t){return 0===e.level?(this.node=e,t([{name:"OCC及车站",type:1,id:"parentID",icon:"occ"}])):e.level>=1?(console.log(JSON.stringify(e.data)),this.$httpApi.lineList(e.data.id).then((function(e){if("0"==e.data.code)return console.log(JSON.stringify(e.data.dataList)),t(e.data.dataList)})),t([])):void 0},rightClick:function(e,t,i){this.menuVisible=!1,this.currentData=t,this.$refs.tree.setCurrentKey(t.id),this.currentNode=i,console.log("right click level=",i.level,JSON.stringify(t)),this.showDeleteLine=this.showAddTrain=this.showAddStation=1!=i.level&&3==t.type,this.showDeleteStation=1!=i.level&&4==t.type,this.showDeleteTrain=1!=i.level&&5==t.type,this.showAddLine=1==i.level||t.type<4,this.menuVisible=!0,document.addEventListener("click",this.foo);var n=document.querySelector("#menu");n.style.left=e.clientX-150+"px",n.style.top=e.clientY-60+"px",this.clickFunc(t,i,null)},foo:function(){this.menuVisible=!1,document.removeEventListener("click",this.foo)},clickFunc:function(e){console.log("获取信息："+JSON.stringify(e)),this.sideShow_allLine=1==e.type,this.sideShow_line=3==e.type,this.sideShow_station=2==e.type||4==e.type||5==e.type,this.trsfData=e,this.trsfType=5!=e.type,this.isAdd=!1},addLine:function(){this.isAdd=!0,this.sideShow_allLine=this.sideShow_station=!1,this.sideShow_line=!0,this.trsfData=this.currentData,this.trsfType=!1},addStaAction:function(e,t,i){console.log("添加完成站点",e,t);var n={id:e,type:i?5:4,name:e+" "+t,leaf:!0},s=this.$refs.tree.getCurrentNode(),a=this.$refs.tree.getNode(s);a.isLeaf?(a.loaded=!1,a.expand(),console.log("调用expand")):(this.$refs.tree.append(n,s),console.log("直接增加")),this.$refs.tree.setCurrentKey(e);var o=this.$refs.tree.getNode(n);this.clickFunc(n,o,null)},addLinAction:function(e,t){console.log(e,t);var i={id:e,type:3,name:e+" "+t,leaf:!0};this.$refs.tree.append(i,this.node.childNodes[0]),this.$refs.tree.setCurrentKey(e);var n=this.$refs.tree.getNode(i);this.clickFunc(i,n,null)},dialogOkClick:function(){var e=this,t=e.$refs.tree.getCurrentNode();console.log("删除"+t.id),this.dialog.isLine?this.$httpApi.deleteLine(t.id).then((function(i){"0"==i.data.code?t&&e.$refs.tree.remove(t):f["Message"].error(i.data.message)})):this.$httpApi.deleteSta(t.id).then((function(i){"0"==i.data.code?t&&e.$refs.tree.remove(t):f["Message"].error(i.data.message)})),this.dialog.visible=!1},deleteLinAction:function(){var e=this,t=e.$refs.tree.getCurrentNode();this.dialog.tipMsg="是否删除"+t.id+"?",this.dialog.isLine=!0,this.dialog.visible=!0},deleteStation:function(){var e=this,t=e.$refs.tree.getCurrentNode();this.dialog.tipMsg="是否删除"+t.id+"?",this.dialog.isLine=!1,this.dialog.visible=!0},addStation:function(e){this.isAdd=!0,this.sideShow_allLine=!1,this.sideShow_station=!0,this.sideShow_line=!1,this.trsfData=this.currentData,this.trsfType=e,console.log(this.trsfData,this.trsfType)}},mounted:function(){var e=this.node.childNodes[0];e.expanded=!0,e.loadData()}},g=m,v=(i("1b92"),Object(r["a"])(g,n,s,!1,null,null,null));t["default"]=v.exports},bada:function(e,t,i){},d32e:function(e,t,i){"use strict";i("bada")},f78b:function(e,t,i){}}]);
//# sourceMappingURL=chunk-037ea6de.fd4236f8.js.map