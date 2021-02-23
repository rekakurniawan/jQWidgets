/*
jQWidgets v12.0.0 (2021-Feb)
Copyright (c) 2011-2021 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(b){b.extend(b.jqx._jqxGrid.prototype,{_exportData:function(R,L,I){var Z=this;var P=typeof L==="string"?L:L.fileName;if(!P){P="jqxGrid"}if(!L||typeof L==="string"){L={header:true,filterBy:null,groupBy:null,style:null,fileName:P,pageOrientation:"portrait",expandChart:"+",collapseChar:"-"}}var ag=new b.jqx.dataAdapter.DataExporter({exportHeader:L.header});var V=[];ag.expandChar=L.expandChar;ag.collapseChar=L.collapseChar;ag.pageOrientation=L.pageOrientation;ag.style=L.style;ag.filterBy=L.filterBy;ag.groupBy=L.groupBy;var N=[];var X=Z.columngroups||[];var aa=0;for(var W=0;W<Z.columns.records.length;W++){var af=Z.columns.records[W];if(!af.exportable){continue}if(Z.columns.records[W].datafield!==null){N[aa++]={label:Z.columns.records[W].text,dataField:Z.columns.records[W].datafield}}}ag.header={columns:N,columngroups:X};if(!L.style){var ac=window.getComputedStyle(Z.element);var J=window.getComputedStyle(Z.columns.records.length>0&&Z.columns.records[0].element?Z.columns.records[0].element:Z.host.find(".jqx-grid-header")[0]);var j=window.getComputedStyle(Z.host.find(".jqx-grid-header")[0]);var ad=Z.offsetWidth===0||Z.offsetHeight===0;if(!ad){var ae=function(h){var g="Helvetica";var e=h.fontSize;var m=h.borderRightColor;var f=h.backgroundColor;var k=h.color;var d=new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");var l=function(n){return isNaN(n)?"00":d[(n-n%16)/16]+d[n%16]};var c=function(r){if(r.toString().indexOf("rgba")!=-1){var t=k.split(",");var p=parseInt(t[0].substring(5));var q=parseInt(t[1]);var u=parseInt(t[2]);var s=parseFloat(t[3].substring(1,4));var o={r:p,g:q,b:u};var n=Z._rgbToHex(o);if(p==0&&q==0&&u==0&&s==0){return"#ffffff"}return"#"+n}r=r.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);if(!r){return"#ffffff"}return"#"+l(r[1])+l(r[2])+l(r[3]).toUpperCase()};return{borderColor:c(m),fontSize:e,fontFamily:g,color:c(k),backgroundColor:c(f)}};var T=ae(ac);var Y=ae(J);var O=ae(j);var a={height:"30px",border:"1px solid "+T.borderColor,fontFamily:O.fontFamily,fontSize:O.fontSize,color:O.color,backgroundColor:Y.backgroundColor,fontWeight:"400"};var ai={border:"1px solid "+T.borderColor,fontFamily:T.fontFamily,fontSize:T.fontSize};var Q={height:Z.rowsheight+"px"};for(var W=0;W<Z.columns.records.length;W++){var af=Z.columns.records[W];if(!af.exportable){continue}a[af.datafield]={textAlign:af.align,width:af.width+"px",format:af.cellsformat||""};var aj=af.cellsformat||"";if(af.dataType==="date"){aj="d"}else{if(af.dataType==="dateTime"){aj="D"}else{if(af.dataType==="time"){aj="t"}}}var U={textAlign:af.cellsalign,format:aj};ai[af.datafield]=U}if(Z.altrows){Q.alternationCount=2;Q.alternationStart=0;Q.alternationEnd=0;Q.alternationIndex0Color=T.color;Q.alternationIndex0BackgroundColor=T.backgroundColor;Q.alternationIndex1Color=T.color;Q.alternationIndex1BackgroundColor="#F5F5F5"}ag.style={border:"1px solid "+T.borderColor,borderCollapse:"collapse",header:a,columns:ai,rows:Q}}}var ah=I||this.getrows();var M=[];for(var W=0;W<ah.length;W++){var ab=ah[W];if(ab.hidden){continue}var K={};for(var i=0;i<Z.columns.records.length;i++){var af=Z.columns.records[i];if(!af.exportable){continue}K[af.datafield]=ab[af.datafield]}M.push(K)}if(!L.groupBy&&Z.groups){ag.groupBy=Z.groups.slice(0)}var S=ag.exportData(M,R,L.fileName,null);return S},exportview:function(h,a,f){var g=this;g._exportData(h,a,f)},exportdata:function(Z,ab,ac,ad,X,T,al){if(!b.jqx.dataAdapter.ArrayExporter){throw"jqxGrid: Missing reference to jqxdata.export.js!"}if(Z==="xlsx"){this._exportData("xlsx",ab);return}if(ac==undefined){ac=true}var a=this;if(ad==undefined){var ad=this.getrows();if(ad.length==0){throw"No data to export."}}this.exporting=true;if(!this.pageable){this.loadondemand=true}if(this.altrows){this._renderrows(this.virtualsizeinfo)}var ae=this.hScrollInstance.value;this.hScrollInstance.setPosition(0);this._renderrows(this.virtualsizeinfo);var M=X!=undefined?X:false;var R={};var af={};var P=[];var ah=this.host.find(".jqx-grid-cell:first");var N=this.host.find(".jqx-grid-cell-alt:first");ah.removeClass(this.toThemeProperty("jqx-grid-cell-selected"));ah.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));N.removeClass(this.toThemeProperty("jqx-grid-cell-selected"));N.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));ah.removeClass(this.toThemeProperty("jqx-grid-cell-hover"));ah.removeClass(this.toThemeProperty("jqx-fill-state-hover"));N.removeClass(this.toThemeProperty("jqx-grid-cell-hover"));N.removeClass(this.toThemeProperty("jqx-fill-state-hover"));var ak="cell";var am=1;var O="column";var ao=1;var aj=[];for(var W=0;W<this.columns.records.length;W++){var an=this.columns.records[W];if(an.cellclassname!=""){an.customCellStyles=new Array();if(typeof an.cellclassname=="string"){for(var V=0;V<ad.length;V++){an.customCellStyles[V]=an.cellclassname}}else{for(var V=0;V<ad.length;V++){var Q=this.getrowboundindex(V);var ap=an.cellclassname(Q,an.displayfield,ad[V][an.displayfield],ad[V]);if(ap){an.customCellStyles[V]=ap}}}}}var j=new Array();var i=null;var aq=null;var ar=null;b.each(this.columns.records,function(l){var d=b(a.table[0].rows[0].cells[l]);if(a.table[0].rows.length>1){var e=b(a.table[0].rows[1].cells[l]);if(!ar){ar=e}}if(!aq){aq=d}var m=this;var k=function(p){p.removeClass(a.toThemeProperty("jqx-grid-cell-selected"));p.removeClass(a.toThemeProperty("jqx-fill-state-pressed"));p.removeClass(a.toThemeProperty("jqx-grid-cell-hover"));p.removeClass(a.toThemeProperty("jqx-fill-state-hover"));if(m.customCellStyles){for(var o in m.customCellStyles){p.removeClass(m.customCellStyles[o])}}};k(d);if(e){k(e)}if(this.displayfield==null){return true}if(a.showaggregates){if(a.getcolumnaggregateddata){aj.push(a.getcolumnaggregateddata(this.displayfield,this.aggregates,true,ad))}}var g=a._getexportcolumntype(this);if(this.exportable&&(!this.hidden||M)){R[this.displayfield]={};R[this.displayfield].text=this.text;R[this.displayfield].width=parseInt(this.width);if(isNaN(R[this.displayfield].width)){R[this.displayfield].width=60}R[this.displayfield].formatString=this.cellsformat;R[this.displayfield].localization=a.gridlocalization;R[this.displayfield].type=g;R[this.displayfield].cellsAlign=this.cellsalign;R[this.displayfield].hidden=!ac;R[this.displayfield].displayfield=this.displayfield;j.push(R[this.displayfield])}ak="cell"+am;var c=b(this.element);if(this.element==undefined){c=b(this.uielement)}if(!i){i=c}else{if(!m._rendered){c=i;d=aq;e=ar;var h=a.toTP("jqx-grid-cell")+" "+a.toTP("jqx-item");d[0].className=h;h+=a.toTP("jqx-grid-cell-alt");if(e){e[0].className=h}}}O="column"+ao;if(Z=="html"||Z=="xls"||Z=="pdf"){var f=function(u,v,w,t,o,r,s,q,p){af[u]={};if(v==undefined){return}if(v[0].offsetWidth==0||v[0].offsetHeight==0){if(!w){af[u]["dataType"]=g}return}af[u]["font-size"]=v.css("font-size");af[u]["font-weight"]=v.css("font-weight");af[u]["font-style"]=v.css("font-style");af[u]["background-color"]=r._getexportcolor(v.css("background-color"));af[u]["color"]=r._getexportcolor(v.css("color"));af[u]["border-color"]=r._getexportcolor(v.css("border-top-color"));if(w){af[u]["text-align"]=o.align}else{af[u]["text-align"]=o.cellsalign;af[u]["formatString"]=o.cellsformat;af[u]["dataType"]=g}if(Z=="html"||Z=="pdf"){af[u]["border-top-width"]=v.css("border-top-width");af[u]["border-left-width"]=v.css("border-left-width");af[u]["border-right-width"]=v.css("border-right-width");af[u]["border-bottom-width"]=v.css("border-bottom-width");af[u]["border-top-style"]=v.css("border-top-style");af[u]["border-left-style"]=v.css("border-left-style");af[u]["border-right-style"]=v.css("border-right-style");af[u]["border-bottom-style"]=v.css("border-bottom-style");if(w){if(s==0){af[u]["border-left-width"]=v.css("border-right-width")}af[u]["border-top-width"]=v.css("border-right-width");af[u]["border-bottom-width"]=v.css("border-bottom-width")}else{if(s==0){af[u]["border-left-width"]=v.css("border-right-width")}}af[u]["height"]=v.css("height")}if(o.exportable&&(!o.hidden||M)){if(q==true){if(!R[o.displayfield].customCellStyles){R[o.displayfield].customCellStyles=new Array()}R[o.displayfield].customCellStyles[p]=u}else{if(w){R[o.displayfield].style=u}else{if(!t){R[o.displayfield].cellStyle=u}else{R[o.displayfield].cellAltStyle=u}}}}};f(O,c,true,false,this,a,l);ao++;f(ak,d,false,false,this,a,l);if(a.altrows){ak="cellalt"+am;f(ak,e,false,true,this,a,l)}if(this.customCellStyles){for(var n in m.customCellStyles){d.removeClass(m.customCellStyles[n])}for(var n in m.customCellStyles){d.addClass(m.customCellStyles[n]);f(ak+m.customCellStyles[n],d,false,false,this,a,l,true,n);d.removeClass(m.customCellStyles[n])}}am++}});b.each(this.columns.records,function(c){if(R[this.displayfield]){R[this.displayfield].columnsDataFields=j}});if(this.showaggregates){var S=[];var Y=Z=="xls"?"_AG":"";var ai=this.groupable?this.groups.length:0;if(this.rowdetails){ai++}if(this.selectionmode==="checkbox"){ai++}if(aj.length>0){b.each(this.columns.records,function(c){if(this.aggregates){for(var f=0;f<this.aggregates.length;f++){if(!S[f]){S[f]={}}if(S[f]){var e=a._getaggregatename(this.aggregates[f]);var d=a._getaggregatetype(this.aggregates[f]);var g=aj[c-ai];if(g){S[f][this.displayfield]=Y+e+": "+g[d]}}}}});b.each(this.columns.records,function(c){for(var d=0;d<S.length;d++){if(S[d][this.displayfield]==undefined){S[d][this.displayfield]=Y}}})}b.each(S,function(){ad.push(this)})}var ag=this;var U=b.jqx.dataAdapter.ArrayExporter(ad,R,af);if(ab==undefined){this._renderrows(this.virtualsizeinfo);var aa=U.exportTo(Z);if(this.showaggregates){b.each(S,function(){ad.pop(this)})}setTimeout(function(){ag.exporting=false},50);this.hScrollInstance.setPosition(ae);this._renderrows(this.virtualsizeinfo);return aa}else{U.exportToFile(Z,ab,T,al)}if(this.showaggregates){b.each(S,function(){ad.pop(this)})}this._renderrows(this.virtualsizeinfo);setTimeout(function(){ag.exporting=false},50);this.hScrollInstance.setPosition(ae);this._renderrows(this.virtualsizeinfo)},_getexportcolor:function(g){var r=g;if(g=="transparent"){r="#FFFFFF"}if(!r||!r.toString()){r="#FFFFFF"}if(r.toString().indexOf("rgb")!=-1){var p=r.split(",");if(r.toString().indexOf("rgba")!=-1){var t=parseInt(p[0].substring(5));var q=parseInt(p[1]);var o=parseInt(p[2]);var n=parseFloat(p[3].substring(1,4));var a={r:t,g:q,b:o};var s=this._rgbToHex(a);if(t==0&&q==0&&o==0&&n==0){return"#ffffff"}return"#"+s}var t=parseInt(p[0].substring(4));var q=parseInt(p[1]);var o=parseInt(p[2].substring(1,4));var a={r:t,g:q,b:o};var s=this._rgbToHex(a);return"#"+s}else{if(r.toString().indexOf("#")!=-1){if(r.toString().length==4){var u=r.toString().substring(1,4);r+=u}}}return r},_rgbToHex:function(a){return this._intToHex(a.r)+this._intToHex(a.g)+this._intToHex(a.b)},_intToHex:function(d){var a=(parseInt(d).toString(16));if(a.length==1){a=("0"+a)}return a.toUpperCase()},_getexportcolumntype:function(m){var l=this;var n="string";var o=l.source.datafields||((l.source._source)?l.source._source.datafields:null);if(o){var j="";b.each(o,function(){if(this.name==m.displayfield){if(this.type){j=this.type}return false}});if(j){return j}}if(m!=null){if(this.dataview.cachedrecords==undefined){return n}var a=null;if(!this.virtualmode){if(this.dataview.cachedrecords.length==0){return n}a=this.dataview.cachedrecords[0][m.displayfield];if(a!=null&&a.toString()==""){return"string"}}else{b.each(this.dataview.cachedrecords,function(){a=this[m.displayfield];return false})}if(a!=null){if(m.cellsformat.indexOf("c")!=-1){return"number"}if(m.cellsformat.indexOf("n")!=-1){return"number"}if(m.cellsformat.indexOf("p")!=-1){return"number"}if(m.cellsformat.indexOf("d")!=-1){return"date"}if(m.cellsformat.indexOf("y")!=-1){return"date"}if(m.cellsformat.indexOf("M")!=-1){return"date"}if(m.cellsformat.indexOf("m")!=-1){return"date"}if(m.cellsformat.indexOf("t")!=-1){return"date"}if(typeof a=="boolean"){n="boolean"}else{if(b.jqx.dataFormat.isNumber(a)){n="number"}else{var k=new Date(a);if(k.toString()=="NaN"||k.toString()=="Invalid Date"){if(b.jqx.dataFormat){k=b.jqx.dataFormat.tryparsedate(a);if(k!=null){if(k&&k.getFullYear()){if(k.getFullYear()==1970&&k.getMonth()==0&&k.getDate()==1){var p=new Number(a);if(!isNaN(p)){return"number"}return"string"}}return"date"}else{n="string"}}else{n="string"}}else{n="date"}}}}}return n}})})(jqxBaseFramework);

