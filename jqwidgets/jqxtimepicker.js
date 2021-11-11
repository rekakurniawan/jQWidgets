/*
jQWidgets v13.0.0 (2021-Nov)
Copyright (c) 2011-2021 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxTimePicker","",{});a.extend(a.jqx._jqxTimePicker.prototype,{defineInstance:function(){var b={autoSwitchToMinutes:false,footer:false,footerTemplate:null,format:"12-hour",minuteInterval:1,selection:"hour",value:new Date(),view:"portrait",width:500,height:500,animation:true,disabled:false,readonly:false,unfocusable:false,name:"",_events:["change"]};if(this===a.jqx._jqxTimePicker.prototype){return b}a.extend(true,this,b);return b},createInstance:function(){var b=this;b._createTimePicker()},_createTimePicker:function(){this.widgetID=this.element.id;var c=this;var b='<div class="'+c.toThemeProperty("jqx-container jqx-rc-all jqx-widget")+'"><div class="'+c.toThemeProperty("jqx-header jqx-unselectable jqx-widget-header")+'"><div class="'+c.toThemeProperty("jqx-hour-minute-container")+'"><div class ="'+c.toThemeProperty("jqx-hour-container")+'"></div><div>:</div><div class="'+c.toThemeProperty("jqx-minute-container")+'"></div></div><div class="'+c.toThemeProperty("jqx-am-pm-container")+'"><div class="'+c.toThemeProperty("jqx-am-container")+'">AM</div><div class="'+c.toThemeProperty("jqx-pm-container")+'">PM</div></div></div><div class="'+c.toThemeProperty("jqx-main-container jqx-widget-content")+'"><div class="'+c.toThemeProperty("jqx-svg-container jqx-item")+'"><div class="'+c.toThemeProperty("jqx-svg-picker jqx-fill-state-normal jqx-item")+'"></div></div><div class="'+c.toThemeProperty("jqx-footer")+'"></div></div><input name="'+this.name+'" type="hidden"></div>';c.element.innerHTML=b;c.element.className+=c.toThemeProperty("jqx-time-picker jqx-rc-all jqx-widget");c.element.setAttribute("view",c.view);c._container=c.element.getElementsByTagName("div")[0];c._header=c.element.getElementsByClassName("jqx-header")[0];c._hourMinuteContainer=c.element.getElementsByClassName("jqx-hour-minute-container")[0];c._hourContainer=c.element.getElementsByClassName("jqx-hour-container")[0];c._minuteContainer=c.element.getElementsByClassName("jqx-minute-container")[0];c._ampmContainer=c.element.getElementsByClassName("jqx-am-pm-container")[0];c._amContainer=c.element.getElementsByClassName("jqx-am-container")[0];c._pmContainer=c.element.getElementsByClassName("jqx-pm-container")[0];c._main=c.element.getElementsByClassName("jqx-main-container")[0];c._svgContainer=c.element.getElementsByClassName("jqx-svg-container")[0];c._picker=c.element.getElementsByClassName("jqx-svg-picker")[0];c._footer=c.element.getElementsByClassName("jqx-footer")[0];c._hiddenInput=c.element.getElementsByTagName("input")[0];if(c.footer){c.element.setAttribute("footer","")}if(c.readonly){c.element.setAttribute("readonly","")}if(c.disabled){c.element.setAttribute("disabled","")}c.coerce=true;c.min=0;c._drawMin="0";c.startAngle=-270;c.endAngle=90;c._angleDifference=c.endAngle-c.startAngle;c.ticksVisibility="none";c._tickIntervalHandler={};c._tickIntervalHandler.labelsSize={};c._distance={majorTickDistance:0,minorTickDistance:0,labelDistance:10};c._measurements={};a(c.element).css({width:c.width,height:c.height});a.jqx.utilities.resize(c.host,function(){c._resizeHandler()});c._validateInitialPropertyValues();c._applyInitialSettings();if(!c._isVisible()){c._renderingSuspended=true;return}c._setPickerSize();a(c._picker).jqxDraw();c._draw=a(c._picker).jqxDraw("getInstance");c._getMeasurements();c._getAngleRangeCoefficient();c._renderSVG();c._setFocusable();c._addEventHandlers()},_getAngleRangeCoefficient:function(){var b=this;b._angleRangeCoefficient=b._angleDifference/b._range},_getAngleByValue:function(e,g,c){var d=this;if(g!==false&&d.logarithmicScale){e=Math.log10(e)}var b=(e-d._drawMin)*d._angleRangeCoefficient;var f;if(!d.inverted){f=d.endAngle-b}else{f=d.startAngle+b}if(c){return f}return f*Math.PI/180+Math.PI/2},_addGaugeTicksAndLabels:function(){var f=this,m=Math.max(f._tickIntervalHandler.labelsSize.minLabelSize,f._tickIntervalHandler.labelsSize.maxLabelSize),u=f._majorTicksInterval,o=f._minorTicksInterval,l={},b=f._distance,c=f._measurements.radius,v=c-b.majorTickDistance,k=c-b.minorTickDistance;var r,d,e,h,q,s;if(f.ticksVisibility!=="none"&&f._plotTicks!==false){r=function(i){f._drawTick(i,v,"major")};d=function(i){f._drawTick(f._getAngleByValue(i,true),k,"minor")}}else{r=function(){};d=function(){}}if(f.labelsVisibility!=="none"&&f._plotLabels!==false){e=function(w,i,j){f._drawLabel(w,i,b.labelDistance,j)}}else{e=function(){}}if(!f.inverted){q=f.endAngle;s=f.startAngle}else{q=f.startAngle;s=f.endAngle}h=f._getAngleByValue(f._drawMin,false);r(h);l[f._drawMin]=true;e(h,f.min,false);var t=f._drawMin-f._drawMin%u,g;if(f._drawMin>=0){t+=u}for(var p=t;p>=f._drawMin;p=p-o){g=p}h=f._getAngleByValue(t,false);r(h);l[t]=true;if(2*Math.PI*f._measurements.innerRadius*(this._getAngleDifference(q,f._getAngleByValue(t,false,true))/360)>m){e(h,f._getActualValue(t),t<f._drawMax)}var p;for(p=t+u;p<f._drawMax-u;p+=u){h=f._getAngleByValue(p,false);r(h);l[p]=true;e(h,f._getActualValue(p),true)}if(l[p]===undefined&&p<=f._drawMax){h=f._getAngleByValue(p,false);r(h);l[p]=true;if(2*Math.PI*f._measurements.innerRadius*(this._getAngleDifference(s,f._getAngleByValue(p,false,true))/360)>=m){e(h,f._getActualValue(p),true)}if(f._normalizedStartAngle!==f.endAngle){h=f._getAngleByValue(f._drawMax,false);r(h);l[f._drawMax]=true;if(2*Math.PI*f._measurements.innerRadius*(this._getAngleDifference(s,q)/360)>=m){e(h,f.max,false)}}}if(!f.logarithmicScale){for(var n=g;n<f._drawMax;n+=o){if(l[n]){continue}d(n)}}else{this.drawGaugeLogarithmicScaleMinorTicks(l,u,d)}},_getAngleDifference:function(d,c){var b=Math.abs(c-d)%360,e=b>180?360-b:b;return e},_getActualValue:function(b){if(!this.logarithmicScale){return b}else{return Math.pow(10,b)}},_computeArrowBodyPoints:function(m,g,d,f){var l=this,n=Math.sin(g),p=Math.cos(g),k=m-d*p+f*n,e=m+d*n+f*p,j=m+d*p+f*n,c=m-d*n+f*p,i=m+d*p,b=m-d*n,h=m-d*p,q=m+d*n,o="M "+i+","+b+" L "+h+","+q+" L "+k+","+e+" "+j+","+c;l._headCenter={x:(k+j)/2,y:(e+c)/2};return o},_documentMoveHandler:function(c){var b=this;if(b._dragging){b._changeSelection(c,true)}},_documentUpHandler:function(){var b=this;if(b._dragging){b._inInnerCircle=false;b._dragging=false;if(b.autoSwitchToMinutes&&b.selection==="hour"){if(b.animation){a(b._picker).addClass("animate");setTimeout(function(){b.selection="minute";b._changeToMinuteSelection()},250);setTimeout(function(){a(b._picker).removeClass("animate")},550)}else{b.selection="minute";b._changeToMinuteSelection()}}}},_drawArrow:function(e,m,f){var h=this,g=h.selection==="hour",j=h.format==="12-hour";var i=h._oldTimePart;delete h._oldTimePart;if(m===undefined){if(g){m=h.value.getHours();if(j&&m>12){m-=12}}else{m=h.value.getMinutes()}}if(i===undefined||f||!h.animation){h._drawArrowSVG(e,m);return}if(g&&!j){h._animate24HourView(i,m);return}var d,l;if(g){d=0.2;l=12;m=m%l;i=i%l}else{d=1;l=60}var c=m-i,k=i-m;if(c<0){c+=l}if(k<0){k+=l}if(k<c){d*=-1}function b(){i+=d;i=parseFloat((i%l).toFixed(1));if(i<0){i+=l}h._drawArrowSVG(e,i);if(i!==m%l){h._animationFrameId=requestAnimationFrame(b)}}h._animationFrameId=requestAnimationFrame(b)},_animate24HourView:function(i,l){var h=this;var e=0.2;h._inInnerCircle=false;var j=i===0||i>12,f=l===0||l>12;if(j!==f){if(j){i=Math.abs(i-12)}else{i=(i+12)%24}h._inInnerCircle=f;h._drawArrowSVG(true,i);if(i===l){return}}else{h._inInnerCircle=f}var d=i,g=l;if(h._inInnerCircle){if(g===0&&d<18){g=12}else{if(d===0&&g<18){d=12}}}var c=g-d,k=d-g;if(c<0){c+=12}if(k<0){k+=12}if(k<c){e*=-1}function b(m){h._inInnerCircle=m;if(m){i=parseFloat((i+e).toFixed(1));if(i<0){i+=24}else{if(i<1){i=i+12}}if(i===12||i===24){i=0}}else{i+=e;if(i!==12){i=parseFloat((i%12).toFixed(1))}if(i<=0){i+=12}}h._drawArrowSVG(true,i);if(i!==l){h._animationFrameId=requestAnimationFrame(function(){b(m)})}else{h._inInnerCircle=false}}h._animationFrameId=requestAnimationFrame(function(){b(h._inInnerCircle)})},_drawArrowSVG:function(g,e){var c=this,b=c._measurements,f=c._getAngleByValue(e);var d;if(!c._inInnerCircle){d=c._computeArrowBodyPoints(b.radius,f,1,b.innerRadius-c._largestLabelSize/2)}else{d=c._computeArrowBodyPoints(b.radius,f,1,b.innerRadius-c._largestLabelSize/2-45)}if(g){c._arrow.setAttribute("d",d);c._head.setAttribute("cx",c._headCenter.x);c._head.setAttribute("cy",c._headCenter.y);c._head.setAttribute("r",c._largestLabelSize);c._headRect=c._head.getBoundingClientRect();if(e%1===0){c._highlightLabel(e)}}else{c._arrow=c._draw.path(d,{"class":c.toThemeProperty("jqx-needle jqx-widget-header")});c._head=c._draw.circle(c._headCenter.x,c._headCenter.y,c._largestLabelSize,{"class":c.toThemeProperty("jqx-needle-central-circle jqx-widget-header")});c._headRect=c._head.getBoundingClientRect()}},_drawLabel:function(f,m,d){var g=this,e=g._measurements,c=e.radius,h={"class":g.toThemeProperty("jqx-label jqx-unselectable jqx-item"),"font-size":e.fontSize,"font-family":e.fontFamily,"font-weight":e.fontWeight,"font-style":e.fontStyle};if(g.selection==="hour"){if(g._plotInnerCircle){if(m>0){m+=12}else{m="00"}}else{if(m===0){m=12}}}else{if(m.toString().length===1){m="0"+m}}var b=g._draw.measureText(m,0,h),l=c-d-g._largestLabelSize/2,k=c+l*Math.sin(f),i=c+l*Math.cos(f),j=g._draw.text(m,Math.round(k)-b.width/2,Math.round(i)-b.height/2,b.width,b.height,0,h);j.setAttribute("value",parseFloat(m))},_getCenterCoordinates:function(){var c=this,f=c._picker.getBoundingClientRect(),b=c._measurements.radius,e=document.body.scrollLeft||document.documentElement.scrollLeft,d=document.body.scrollTop||document.documentElement.scrollTop;return{x:f.left+e+b,y:f.top+d+b}},_headerClickHandler:function(d){var c=this;if(c.disabled||c.readonly){return}switch(d.target){case c._hourContainer:if(c.selection!=="hour"){c.selection="hour";c._changeToHourSelection()}break;case c._minuteContainer:if(c.selection!=="minute"){c.selection="minute";c._changeToMinuteSelection()}break;case c._amContainer:if(!a(c._amContainer).hasClass("jqx-selected")){c._selectAmPm("am");var b=new Date(c.value.getTime());c.value.setHours(c.value.getHours()-12);c._hiddenInput.value=c.value;c._raiseEvent("0",{value:c.value,oldValue:b})}break;case c._pmContainer:if(!a(c._pmContainer).hasClass("jqx-selected")){c._selectAmPm("pm");var b=new Date(c.value.getTime());c.value.setHours(c.value.getHours()+12);c._hiddenInput.value=c.value;c._raiseEvent("0",{value:c.value,oldValue:b})}break}},_highlightLabel:function(f){var c=this;if(c._highlightedLabel){if(parseFloat(c._highlightedLabel.getAttribute("value"))===f){return}var h=function(l,j){var k=new RegExp("\\s?"+j+"\\s?","gm");var i=l.replace(k,"");return i};if(c._highlightedLabel.className.baseVal.indexOf(c.toThemeProperty("jqx-selected"))>-1){var e=c._highlightedLabel.className.baseVal;var b=h(e,c.toThemeProperty("jqx-selected"));c._highlightedLabel.className.baseVal=b}c._highlightedLabel=undefined}var g;if(c.selection==="hour"){if(f===undefined){f=c.value.getHours()}if(c.format==="12-hour"){if(f===0){f=12}else{if(f>12){f-=12}}}g=f}else{if(f===undefined){f=c.value.getMinutes()}g=Math.round(f/5)*5;if(g===60){g=0}}var d=c._picker.querySelector('.jqx-label[value="'+g+'"]');if(d&&(g===f||c._overlapsLabel(d))){c._highlightedLabel=d;d.className.baseVal+=" "+c.toThemeProperty("jqx-selected")}},_isVisible:function(){var b=this.host[0];return !!(b.offsetWidth||b.offsetHeight||b.getClientRects().length)},_getMeasurements:function(){var h=this,c=h._measurements,k=document.createElement("div");var i,g,j,b,e,f;k.className="jqx-label";k.style.position="absolute";k.style.visibility="hidden";h._svgContainer.appendChild(k);if(h.selection==="hour"){i="1";g="23";h.max=12;h._drawMax="12";h._range=12}else{i="00";g="55";h.max=60;h._drawMax="60";h._range=60}k.innerHTML=i;j=k.offsetWidth;e=k.offsetHeight;k.innerHTML=g;b=k.offsetWidth;f=k.offsetHeight;h._largestLabelSize=Math.max(j,e,b,f);h._tickIntervalHandler.labelsSize.minLabelSize=e;h._tickIntervalHandler.labelsSize.maxLabelSize=f;var d=window.getComputedStyle(k);c.fontSize=d.fontSize;c.fontFamily=d.fontFamily;c.fontWeight=d.fontWeight;c.fontStyle=d.fontStyle;h._svgContainer.removeChild(k)},_renderHours:function(){var b=this;b._highlightedLabel=undefined;b._majorTicksInterval=1;b._addGaugeTicksAndLabels();if(b.format==="24-hour"){b._plotInnerCircle=true;b._distance.labelDistance=55;b._addGaugeTicksAndLabels();b._plotInnerCircle=false;b._distance.labelDistance=10}},_renderMinutes:function(){var b=this;b._highlightedLabel=undefined;b._majorTicksInterval=5;b._addGaugeTicksAndLabels()},_renderSVG:function(){var c=this;if(!c._isVisible()||c._renderingSuspended){c._renderingSuspended=true;return}c._centralCircle=c._draw.circle(c._measurements.radius,c._measurements.radius,4,{"class":c.toThemeProperty("jqx-needle-central-circle jqx-widget-header")});if(c.selection==="hour"&&c.format==="24-hour"&&(c.value.getHours()===0||c.value.getHours()>12)){c._inInnerCircle=true}c._drawArrow(false);c._inInnerCircle=false;if(c.selection==="hour"){c.interval=1;c._renderHours();var b=c.value.getHours();if(c.format==="12-hour"&&b>12){b-=12}c._highlightLabel(b)}else{c.interval=c.minuteInterval;c._renderMinutes();c._highlightLabel(c.value.getMinutes())}},_selectAmPm:function(c){var b=this;if(c==="am"){b._ampm="am";a(b._pmContainer).removeClass(b.toThemeProperty("jqx-selected"));a(b._amContainer).addClass(b.toThemeProperty("jqx-selected"))}else{b._ampm="pm";a(b._amContainer).removeClass(b.toThemeProperty("jqx-selected"));a(b._pmContainer).addClass(b.toThemeProperty("jqx-selected"))}},_setFocusable:function(){var c=this;if(c.disabled||c.unfocusable){c._hourContainer.removeAttribute("tabindex");c._minuteContainer.removeAttribute("tabindex");c._amContainer.removeAttribute("tabindex");c._pmContainer.removeAttribute("tabindex");c._picker.removeAttribute("tabindex");return}var b=c.tabIndex>0?c.tabIndex:0;c._hourContainer.tabIndex=b;c._minuteContainer.tabIndex=b;c._amContainer.tabIndex=b;c._pmContainer.tabIndex=b;c._picker.tabIndex=b},_setPickerSize:function(){var e=this,d=e._svgContainer.offsetWidth,c=e._svgContainer.offsetHeight;var b=Math.min(d,c)*0.9;if(e._pickerSize!==undefined&&e._pickerSize!==b){e._sizeChanged=true}else{e._sizeChanged=false}e._pickerSize=b;e._measurements.radius=b/2;e._measurements.innerRadius=e._measurements.radius-10;b+="px";e._picker.style.width=b;e._picker.style.height=b},refresh:function(c){var b=this;if(c!==true){b.render()}},setHours:function(b){var c=this;if(b==undefined||(isNaN(b)&&Object.keys(b).length==0)){throw"The setHours method required a parameter. Its type should be number."}if(b===24){b=0}else{b=Math.max(0,Math.min(b,23))}if(b<12){c._selectAmPm("am")}else{c._selectAmPm("pm")}if(c.format==="12-hour"){if(b===0){b=12}else{if(b>12){b-=12}}}c._updateHours(b,arguments[1]);if(c.selection==="hour"){c._inInnerCircle=c.format==="24-hour"&&(b===0||b>12);c._drawArrow(true,b,arguments[2]);if(!c.animation){c._inInnerCircle=false}}},setMinutes:function(b){var c=this;if(b==undefined||(isNaN(b)&&Object.keys(b).length==0)){throw"The setMinutes method required a parameter. Its type should be number."}if(b===60){b=0}else{b=Math.max(0,Math.min(b,59))}c._updateMinutes(b);if(c.selection==="minute"){c._drawArrow(true,b,arguments[1])}},propertyChangedHandler:function(d,j,b,i){var f=d;if(b!=i||i instanceof Object){switch(j){case"disabled":if(f.disabled){f.host.addClass(f.toThemeProperty("jqx-fill-state-disabled"));f.element.setAttribute("disabled","")}else{f.host.removeClass(f.toThemeProperty("jqx-fill-state-disabled"));f.element.removeAttribute("disabled")}f._setFocusable();break;case"footer":case"view":f._resizeHandler();break;case"footerTemplate":f._validateFooterTemplate();break;case"format":var h=f.value.getHours();if(i==="12-hour"){f._ampmContainer.removeClass("jqx-hidden");if(f.value.getHours()<12){f._selectAmPm("am")}else{f._selectAmPm("pm")}if(h===0){h=12}else{if(h>12){h-=12}}}else{f._ampmContainer.addClass("jqx-hidden")}f._hourContainer.innerHTML=h;if(f.selection==="hour"){f._draw.clear();f._renderSVG()}break;case"minuteInterval":var c=Math.max(1,Math.min(i,60));if(c!==i){f.minuteInterval=c}if(f.selection==="minute"){f.interval=c}break;case"selection":if(i==="hour"){f._changeToHourSelection()}else{f._changeToMinuteSelection()}break;case"value":f._oldValue=b;f._validateValue();var g=f.value.getHours()===b.getHours(),e=f.value.getMinutes()===b.getMinutes();if(!(g&&e)){if(e){f.setHours(f.value.getHours())}else{if(!g){f.setHours(f.value.getHours(),true)}f.setMinutes(f.value.getMinutes())}}delete f._oldValue;break}}},_applyInitialSettings:function(){var d=this,e=d.value;var b,c;b=e.getHours();c=e.getMinutes();if(d.format==="12-hour"){if(b<12){d._ampm="am";d._amContainer.className+=" "+d.toThemeProperty("jqx-selected");if(b===0){b=12}}else{d._ampm="pm";d._pmContainer.className+=" "+d.toThemeProperty("jqx-selected");if(b>12){b-=12}}}else{d._ampmContainer.className+=" "+d.toThemeProperty("jqx-hidden")}c=c.toString();if(c.length===1){c="0"+c}d._hourContainer.innerHTML=b;d._minuteContainer.innerHTML=c;if(d.selection==="hour"){d._hourContainer.className+=" "+d.toThemeProperty("jqx-selected")}else{d._minuteContainer.className+=" "+d.toThemeProperty("jqx-selected")}},_getValueByAngle:function(g,c){var d=this;var f,b,e;if(!d.inverted){f=d.endAngle;b=g}else{f=g;b=d._normalizedStartAngle}while(f<b){f+=360}e=((f-b)/d._angleDifference)*d._range+parseFloat(d._drawMin);if(d.logarithmicScale){if(d.customInterval){return parseFloat(Math.pow(10,this.getCoercedValue(e,true)).toFixed(12))}e=Math.pow(10,e)}if(c&&!d.coerce){return Math.round(e)}return this._getCoercedValue(e,false)},_getCoercedValue:function(m,h,k){var g=this;if(!g.coerce){return m}var b=!g.logarithmicScale,l,f;l=parseFloat(g.min);f=parseFloat(g.max);var p=m-l,o=p%parseFloat(g.interval),j=12;if(o===0){return m}var e=parseFloat((p-o).toFixed(j)),d=e+parseFloat(g.interval);if(((g.max-g.min)<=parseFloat(g.interval))&&b){var c=l,i=f;return m>=c+(i-c)/2?i:c}if(Math.abs(p-e)<Math.abs(p-d)){return e+l}else{var n=d+l;return n>f?e+l:n}},_changeSelection:function(c,g){var h=this,j=c.pageX,i=c.pageY,b=h._getCenterCoordinates(),e=Math.sqrt(Math.pow(b.x-j,2)+Math.pow(b.y-i,2));h._measurements.center=b;if(c.type==="mousedown"){if(e>h._measurements.radius){c.stopPropagation();return}else{h._dragging=true}}if(h.format==="24-hour"&&h.selection==="hour"&&e<h._measurements.radius-50){h._inInnerCircle=true}else{h._inInnerCircle=false}var k=Math.atan2(i-b.y,j-b.x);var f=-1*k*180/Math.PI;if(f<0){f+=360}h._angle=f;var d=h._getValueByAngle(h._angle);if(h.selection==="hour"){if(h.format==="24-hour"){if(h._inInnerCircle){if(d!==0&&d!==12){d+=12}else{d=0}}else{if(d===0){d=12}}}else{if(d===0){d=12}}h._updateHours(d)}else{if(d===60){d=0}h._updateMinutes(d)}if(h._oldTimePart===undefined){return}cancelAnimationFrame(h._animationFrameId);h._drawArrow(true,d,g)},_changeToHourSelection:function(){var c=this,b=c._centralCircle.parentElement||c._centralCircle.parentNode;cancelAnimationFrame(c._animationFrameId);c.interval=1;a(c._hourContainer).addClass(c.toThemeProperty("jqx-selected"));a(c._minuteContainer).removeClass(c.toThemeProperty("jqx-selected"));b.removeChild(c._centralCircle);b.removeChild(c._arrow);b.removeChild(c._head);c._getMeasurements();c._getAngleRangeCoefficient();c._draw.clear();b.appendChild(c._centralCircle);b.appendChild(c._arrow);b.appendChild(c._head);c._renderHours();if(c.format==="24-hour"&&(c.value.getHours()===0||c.value.getHours()>12)){c._inInnerCircle=true}c._drawArrow(true,undefined,true);c._inInnerCircle=false},_changeToMinuteSelection:function(){var c=this,b=c._centralCircle.parentElement||c._centralCircle.parentNode;c._inInnerCircle=false;cancelAnimationFrame(c._animationFrameId);c.interval=c.minuteInterval;a(c._hourContainer).removeClass(c.toThemeProperty("jqx-selected"));a(c._minuteContainer).addClass(c.toThemeProperty("jqx-selected"));b.removeChild(c._centralCircle);b.removeChild(c._arrow);b.removeChild(c._head);c._getMeasurements();c._getAngleRangeCoefficient();c._draw.clear();b.appendChild(c._centralCircle);b.appendChild(c._arrow);b.appendChild(c._head);c._renderMinutes();c._drawArrow(true,undefined,true)},_overlapsLabel:function(d){var f=this,c=d.getBoundingClientRect(),e=f._headRect,b=!(c.right-10<e.left||c.left+10>e.right||c.bottom-10<e.top||c.top+10>e.bottom);return b},_parseDateString:function(e,g){var d=e.indexOf("Date("),f=e.indexOf(")");var b=e;if(d!==-1&&f!==-1){b=e.slice(d+5,f);b=b.replace(/'/g,"").replace(/"/g,"").replace(/^\s+|\s+$|\s+(?=\s)/g,"");if(b.trim()===""){return new Date()}if(new RegExp(/(^(\d+)(\s*,\s*\d+)+$)/g).test(b)){b=b.replace(/\s/g,"");b=b.split(",");b.map(function(i,h){b[h]=parseInt(i)});b.unshift(null);b=new (Function.prototype.bind.apply(Date,b));return b}}if(b.trim()===""){return g}if(!isNaN(b)){return new Date(parseInt(b,10))}try{b=new Date(b)}catch(c){b=g}if(isNaN(b.getTime())){return g}return b},_updateHours:function(b,c){var f=this;var e=b;if(f.format==="12-hour"){if(f._ampm==="am"){if(e===12){e=0}}else{if(e<12){e+=12}}}else{e=b}var d=f._oldValue!==undefined?f._oldValue:new Date(f.value.getTime()),g=d.getHours();if(e===g){delete f._oldTimePart;return}f._oldTimePart=g;if(f._oldValue===undefined){f.value.setHours(e)}f._hourContainer.innerHTML=b;if(c!==true){f._hiddenInput.value=f.value;f._raiseEvent("0",{value:f.value,oldValue:d})}},_updateMinutes:function(d){var e=this,c=e._oldValue!==undefined?e._oldValue:new Date(e.value.getTime()),b=c.getMinutes();if(d===b){delete e._oldTimePart;return}e._oldTimePart=b;if(e._oldValue===undefined){e.value.setMinutes(d)}d=d.toString();if(d.length===1){d="0"+d}e._minuteContainer.innerHTML=d;e._hiddenInput.value=e.value;e._raiseEvent("0",{value:e.value,oldValue:c})},_validateFooterTemplate:function(){var d=this,b=d.footerTemplate;var f=window.navigator.userAgent;var c=f.indexOf("MSIE")>-1||f.indexOf("NET")>-1;if(b===null||c){d._footer.innerHTML="";return}var e;if(b instanceof HTMLTemplateElement){e=b}else{if(typeof b==="string"){e=document.getElementById(b);if(!(e instanceof HTMLTemplateElement)){e=undefined}}}if(e===undefined){d.footerTemplate=null;d._footer.innerHTML="";return}var g=document.importNode(e.content,true);d._footer.appendChild(g)},_validateInitialPropertyValues:function(){var b=this;b._validateFooterTemplate();b.minuteInterval=Math.max(1,Math.min(b.minuteInterval,60));b._validateValue()},_validateValue:function(){var c=this,d=c.value,e=c._oldValue!==undefined?this._oldValue:new Date();if(d instanceof Date){return}else{if(typeof d==="string"){if(/^\d{1,2}:\d{1,2}$/.test(d)){var b=d.split(":");c.value=new Date(e.getFullYear(),e.getMonth(),e.getDate(),parseFloat(b[0]),parseFloat(b[1]));return}c.value=c._parseDateString(d,e)}else{c.value=e}}},destroy:function(){var b=this;b._removeEventHandlers();b._draw.clear();b.host.removeData();b.host.removeClass();b.host.remove();delete b.element;delete b.host},_keydownHandler:function(h){var g=this;if(g._dragging){return}var f=g.enableShadowDOM?(g.shadowRoot.activeElement||document.activeElement):document.activeElement,e=h.key;if(g._header.contains(f)&&(e==="Enter"||e===" ")){h.preventDefault();g._headerClickHandler({target:f})}else{if(f===g._picker&&!h.altKey){var c;if(e==="ArrowRight"||e==="ArrowUp"){c=1}else{if(e==="ArrowLeft"||e==="ArrowDown"){c=-1}}if(c){h.preventDefault();if(g.selection==="hour"){var b=g.value.getHours();if(b===0&&c===-1){b=23}else{if(b===23&&c===1){b=0}else{b+=c}}if(g.format==="12-hour"){if(b>=12&&a(g._amContainer).hasClass("jqx-selected")){b-=12}else{if(b<12&&a(g._pmContainer).hasClass("jqx-selected")){b+=12}}}g.setHours(b,undefined,true)}else{var d=g.value.getMinutes();c*=g.minuteInterval;if(d+c>=60){d=0}else{if(d<c*-1){if(60%c===0){d=60+c}else{d=60-(60%c)}}else{d+=c}}g.setMinutes(d,true)}}}}},_resizeHandler:function(){var c=this;var b=false;if(!c._isVisible()){c._renderingSuspended=true;return}else{c._renderingSuspended=false;b=true;c._getMeasurements();c._getAngleRangeCoefficient()}c._setPickerSize();if(c._sizeChanged||b){c._draw.clear();c._renderSVG();c._sizeChanged=false;c._draw.refresh()}else{c._headRect=c._head.getBoundingClientRect();c._highlightLabel()}},_pickerDownHandler:function(c){var b=this;if(b.disabled||b.readonly||!jqx.mobile.isTouchDevice()&&c.which!==1){return}b._changeSelection(c)},_pickerMoveHandler:function(b){},_addEventHandlers:function(){var b=this;b.addHandler(a(b.element),"keydown.timepicker"+b.widgetID,b._keydownHandler.bind(this));b.addHandler(a(b.element),"resize.timepicker"+b.widgetID,b._resizeHandler.bind(this));b.addHandler(a(b._header),"click.timepicker"+b.widgetID,b._headerClickHandler.bind(this));b.addHandler(a(b._picker),"mousedown.timepicker"+b.widgetID,b._pickerDownHandler.bind(this));b.addHandler(a(document),"mousemove.timepicker"+b.widgetID,b._documentMoveHandler.bind(this));b.addHandler(a(document),"mouseup.timepicker"+b.widgetID,b._documentUpHandler.bind(this))},_removeEventHandlers:function(){var b=this;b.removeHandler(a(b.element),"keydown.timepicker"+b.widgetID);b.removeHandler(a(b.element),"resize.timepicker"+b.widgetID);b.removeHandler(a(b._header),"click.timepicker"+b.widgetID);b.removeHandler(a(b._picker),"mousedown.timepicker"+b.widgetID);b.removeHandler(a(b._picker),"mousemove.timepicker"+b.widgetID);b.removeHandler(a(document),"mousemove.timepicker"+b.widgetID);b.removeHandler(a(document),"mouseup.timepicker"+b.widgetID)},_raiseEvent:function(g,e){var c=this._events[g];var f=new a.Event(c);f.owner=this;f.args=e;var b;try{b=this.host.trigger(f)}catch(d){}return b},_getEvent:function(c){var b=this;if(b._isTouchDevice){return b._touchEvents[c]}else{return c}}})})(jqxBaseFramework);

