/*
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(aN,D){var a=function(aZ,a0){return new a.fn.init(aZ,a0)
},o=aN.jQuery,S=aN.$,ac=aN.document,Y,Q=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,aX=/^.[^:#\[\.,]*$/,ay=/\S/,N=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,e=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,b=navigator.userAgent,v,L=false,ae=[],aH,au=Object.prototype.toString,aq=Object.prototype.hasOwnProperty,g=Array.prototype.push,G=Array.prototype.slice,t=Array.prototype.indexOf;
a.fn=a.prototype={init:function(aZ,a2){var a1,a3,a0,a4;if(!aZ){return this}if(aZ.nodeType){this.context=this[0]=aZ;
this.length=1;return this}if(aZ==="body"&&!a2){this.context=ac;this[0]=ac.body;this.selector="body";
this.length=1;return this}if(typeof aZ==="string"){a1=Q.exec(aZ);if(a1&&(a1[1]||!a2)){if(a1[1]){a4=(a2?a2.ownerDocument||a2:ac);
a0=e.exec(aZ);if(a0){if(a.isPlainObject(a2)){aZ=[ac.createElement(a0[1])];a.fn.attr.call(aZ,a2,true)
}else{aZ=[a4.createElement(a0[1])]}}else{a0=K([a1[1]],[a4]);aZ=(a0.cacheable?a0.fragment.cloneNode(true):a0.fragment).childNodes
}return a.merge(this,aZ)}else{a3=ac.getElementById(a1[2]);if(a3){if(a3.id!==a1[2]){return Y.find(aZ)
}this.length=1;this[0]=a3}this.context=ac;this.selector=aZ;return this}}else{if(!a2&&/^\w+$/.test(aZ)){this.selector=aZ;
this.context=ac;aZ=ac.getElementsByTagName(aZ);return a.merge(this,aZ)}else{if(!a2||a2.jquery){return(a2||Y).find(aZ)
}else{return a(a2).find(aZ)}}}}else{if(a.isFunction(aZ)){return Y.ready(aZ)}}if(aZ.selector!==D){this.selector=aZ.selector;
this.context=aZ.context}return a.makeArray(aZ,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length
},toArray:function(){return G.call(this,0)},get:function(aZ){return aZ==null?this.toArray():(aZ<0?this.slice(aZ)[0]:this[aZ])
},pushStack:function(a0,a2,aZ){var a1=a();if(a.isArray(a0)){g.apply(a1,a0)}else{a.merge(a1,a0)
}a1.prevObject=this;a1.context=this.context;if(a2==="find"){a1.selector=this.selector+(this.selector?" ":"")+aZ
}else{if(a2){a1.selector=this.selector+"."+a2+"("+aZ+")"}}return a1},each:function(a0,aZ){return a.each(this,a0,aZ)
},ready:function(aZ){a.bindReady();if(a.isReady){aZ.call(ac,a)}else{if(ae){ae.push(aZ)
}}return this},eq:function(aZ){return aZ===-1?this.slice(aZ):this.slice(aZ,+aZ+1)
},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(G.apply(this,arguments),"slice",G.call(arguments).join(","))
},map:function(aZ){return this.pushStack(a.map(this,function(a1,a0){return aZ.call(a1,a0,a1)
}))},end:function(){return this.prevObject||a(null)},push:g,sort:[].sort,splice:[].splice};
a.fn.init.prototype=a.fn;a.extend=a.fn.extend=function(){var a4=arguments[0]||{},a3=1,a2=arguments.length,a6=false,a7,a1,aZ,a0;
if(typeof a4==="boolean"){a6=a4;a4=arguments[1]||{};a3=2}if(typeof a4!=="object"&&!a.isFunction(a4)){a4={}
}if(a2===a3){a4=this;--a3}for(;a3<a2;a3++){if((a7=arguments[a3])!=null){for(a1 in a7){aZ=a4[a1];
a0=a7[a1];if(a4===a0){continue}if(a6&&a0&&(a.isPlainObject(a0)||a.isArray(a0))){var a5=aZ&&(a.isPlainObject(aZ)||a.isArray(aZ))?aZ:a.isArray(a0)?[]:{};
a4[a1]=a.extend(a6,a5,a0)}else{if(a0!==D){a4[a1]=a0}}}}}return a4};a.extend({noConflict:function(aZ){aN.$=S;
if(aZ){aN.jQuery=o}return a},isReady:false,ready:function(){if(!a.isReady){if(!ac.body){return setTimeout(a.ready,13)
}a.isReady=true;if(ae){var a0,aZ=0;while((a0=ae[aZ++])){a0.call(ac,a)}ae=null}if(a.fn.triggerHandler){a(ac).triggerHandler("ready")
}}},bindReady:function(){if(L){return}L=true;if(ac.readyState==="complete"){return a.ready()
}if(ac.addEventListener){ac.addEventListener("DOMContentLoaded",aH,false);aN.addEventListener("load",a.ready,false)
}else{if(ac.attachEvent){ac.attachEvent("onreadystatechange",aH);aN.attachEvent("onload",a.ready);
var aZ=false;try{aZ=aN.frameElement==null}catch(a0){}if(ac.documentElement.doScroll&&aZ){y()
}}}},isFunction:function(aZ){return au.call(aZ)==="[object Function]"},isArray:function(aZ){return au.call(aZ)==="[object Array]"
},isPlainObject:function(a0){if(!a0||au.call(a0)!=="[object Object]"||a0.nodeType||a0.setInterval){return false
}if(a0.constructor&&!aq.call(a0,"constructor")&&!aq.call(a0.constructor.prototype,"isPrototypeOf")){return false
}var aZ;for(aZ in a0){}return aZ===D||aq.call(a0,aZ)},isEmptyObject:function(a0){for(var aZ in a0){return false
}return true},error:function(aZ){throw aZ},parseJSON:function(aZ){if(typeof aZ!=="string"||!aZ){return null
}aZ=a.trim(aZ);if(/^[\],:{}\s]*$/.test(aZ.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return aN.JSON&&aN.JSON.parse?aN.JSON.parse(aZ):(new Function("return "+aZ))()
}else{a.error("Invalid JSON: "+aZ)}},noop:function(){},globalEval:function(a1){if(a1&&ay.test(a1)){var a0=ac.getElementsByTagName("head")[0]||ac.documentElement,aZ=ac.createElement("script");
aZ.type="text/javascript";if(a.support.scriptEval){aZ.appendChild(ac.createTextNode(a1))
}else{aZ.text=a1}a0.insertBefore(aZ,a0.firstChild);a0.removeChild(aZ)}},nodeName:function(a0,aZ){return a0.nodeName&&a0.nodeName.toUpperCase()===aZ.toUpperCase()
},each:function(a2,a6,a1){var a0,a3=0,a4=a2.length,aZ=a4===D||a.isFunction(a2);if(a1){if(aZ){for(a0 in a2){if(a6.apply(a2[a0],a1)===false){break
}}}else{for(;a3<a4;){if(a6.apply(a2[a3++],a1)===false){break}}}}else{if(aZ){for(a0 in a2){if(a6.call(a2[a0],a0,a2[a0])===false){break
}}}else{for(var a5=a2[0];a3<a4&&a6.call(a5,a3,a5)!==false;a5=a2[++a3]){}}}return a2
},trim:function(aZ){return(aZ||"").replace(N,"")},makeArray:function(a1,a0){var aZ=a0||[];
if(a1!=null){if(a1.length==null||typeof a1==="string"||a.isFunction(a1)||(typeof a1!=="function"&&a1.setInterval)){g.call(aZ,a1)
}else{a.merge(aZ,a1)}}return aZ},inArray:function(a1,a2){if(a2.indexOf){return a2.indexOf(a1)
}for(var aZ=0,a0=a2.length;aZ<a0;aZ++){if(a2[aZ]===a1){return aZ}}return -1},merge:function(a3,a1){var a2=a3.length,a0=0;
if(typeof a1.length==="number"){for(var aZ=a1.length;a0<aZ;a0++){a3[a2++]=a1[a0]}}else{while(a1[a0]!==D){a3[a2++]=a1[a0++]
}}a3.length=a2;return a3},grep:function(a0,a4,aZ){var a1=[];for(var a2=0,a3=a0.length;
a2<a3;a2++){if(!aZ!==!a4(a0[a2],a2)){a1.push(a0[a2])}}return a1},map:function(a0,a5,aZ){var a1=[],a4;
for(var a2=0,a3=a0.length;a2<a3;a2++){a4=a5(a0[a2],a2,aZ);if(a4!=null){a1[a1.length]=a4
}}return a1.concat.apply([],a1)},guid:1,proxy:function(a1,a0,aZ){if(arguments.length===2){if(typeof a0==="string"){aZ=a1;
a1=aZ[a0];a0=D}else{if(a0&&!a.isFunction(a0)){aZ=a0;a0=D}}}if(!a0&&a1){a0=function(){return a1.apply(aZ||this,arguments)
}}if(a1){a0.guid=a1.guid=a1.guid||a0.guid||a.guid++}return a0},uaMatch:function(a0){a0=a0.toLowerCase();
var aZ=/(webkit)[ \/]([\w.]+)/.exec(a0)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a0)||/(msie) ([\w.]+)/.exec(a0)||!/compatible/.test(a0)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a0)||[];
return{browser:aZ[1]||"",version:aZ[2]||"0"}},browser:{}});v=a.uaMatch(b);if(v.browser){a.browser[v.browser]=true;
a.browser.version=v.version}if(a.browser.webkit){a.browser.safari=true}if(t){a.inArray=function(aZ,a0){return t.call(a0,aZ)
}}Y=a(ac);if(ac.addEventListener){aH=function(){ac.removeEventListener("DOMContentLoaded",aH,false);
a.ready()}}else{if(ac.attachEvent){aH=function(){if(ac.readyState==="complete"){ac.detachEvent("onreadystatechange",aH);
a.ready()}}}}function y(){if(a.isReady){return}try{ac.documentElement.doScroll("left")
}catch(aZ){setTimeout(y,1);return}a.ready()}function aW(aZ,a0){if(a0.src){a.ajax({url:a0.src,async:false,dataType:"script"})
}else{a.globalEval(a0.text||a0.textContent||a0.innerHTML||"")}if(a0.parentNode){a0.parentNode.removeChild(a0)
}}function ao(aZ,a7,a5,a1,a4,a6){var a0=aZ.length;if(typeof a7==="object"){for(var a2 in a7){ao(aZ,a2,a7[a2],a1,a4,a5)
}return aZ}if(a5!==D){a1=!a6&&a1&&a.isFunction(a5);for(var a3=0;a3<a0;a3++){a4(aZ[a3],a7,a1?a5.call(aZ[a3],a3,a4(aZ[a3],a7)):a5,a6)
}return aZ}return a0?a4(aZ[0],a7):D}function aQ(){return(new Date).getTime()}(function(){a.support={};
var a5=ac.documentElement,a4=ac.createElement("script"),aZ=ac.createElement("div"),a0="script"+aQ();
aZ.style.display="none";aZ.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var a7=aZ.getElementsByTagName("*"),a6=aZ.getElementsByTagName("a")[0];if(!a7||!a7.length||!a6){return
}a.support={leadingWhitespace:aZ.firstChild.nodeType===3,tbody:!aZ.getElementsByTagName("tbody").length,htmlSerialize:!!aZ.getElementsByTagName("link").length,style:/red/.test(a6.getAttribute("style")),hrefNormalized:a6.getAttribute("href")==="/a",opacity:/^0.55$/.test(a6.style.opacity),cssFloat:!!a6.style.cssFloat,checkOn:aZ.getElementsByTagName("input")[0].value==="on",optSelected:ac.createElement("select").appendChild(ac.createElement("option")).selected,parentNode:aZ.removeChild(aZ.appendChild(ac.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};
a4.type="text/javascript";try{a4.appendChild(ac.createTextNode("window."+a0+"=1;"))
}catch(a2){}a5.insertBefore(a4,a5.firstChild);if(aN[a0]){a.support.scriptEval=true;
delete aN[a0]}try{delete a4.test}catch(a2){a.support.deleteExpando=false}a5.removeChild(a4);
if(aZ.attachEvent&&aZ.fireEvent){aZ.attachEvent("onclick",function a8(){a.support.noCloneEvent=false;
aZ.detachEvent("onclick",a8)});aZ.cloneNode(true).fireEvent("onclick")}aZ=ac.createElement("div");
aZ.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var a1=ac.createDocumentFragment();
a1.appendChild(aZ.firstChild);a.support.checkClone=a1.cloneNode(true).cloneNode(true).lastChild.checked;
a(function(){var a9=ac.createElement("div");a9.style.width=a9.style.paddingLeft="1px";
ac.body.appendChild(a9);a.boxModel=a.support.boxModel=a9.offsetWidth===2;ac.body.removeChild(a9).style.display="none";
a9=null});var a3=function(a9){var bb=ac.createElement("div");a9="on"+a9;var ba=(a9 in bb);
if(!ba){bb.setAttribute(a9,"return;");ba=typeof bb[a9]==="function"}bb=null;return ba
};a.support.submitBubbles=a3("submit");a.support.changeBubbles=a3("change");a5=a4=aZ=a7=a6=null
})();a.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};
var aJ="jQuery"+aQ(),aI=0,aU={};a.extend({cache:{},expando:aJ,noData:{embed:true,object:true,applet:true},data:function(a1,a0,a3){if(a1.nodeName&&a.noData[a1.nodeName.toLowerCase()]){return
}a1=a1==aN?aU:a1;var a4=a1[aJ],aZ=a.cache,a2;if(!a4&&typeof a0==="string"&&a3===D){return null
}if(!a4){a4=++aI}if(typeof a0==="object"){a1[aJ]=a4;a2=aZ[a4]=a.extend(true,{},a0)
}else{if(!aZ[a4]){a1[aJ]=a4;aZ[a4]={}}}a2=aZ[a4];if(a3!==D){a2[a0]=a3}return typeof a0==="string"?a2[a0]:a2
},removeData:function(a1,a0){if(a1.nodeName&&a.noData[a1.nodeName.toLowerCase()]){return
}a1=a1==aN?aU:a1;var a3=a1[aJ],aZ=a.cache,a2=aZ[a3];if(a0){if(a2){delete a2[a0];if(a.isEmptyObject(a2)){a.removeData(a1)
}}}else{if(a.support.deleteExpando){delete a1[a.expando]}else{if(a1.removeAttribute){a1.removeAttribute(a.expando)
}}delete aZ[a3]}}});a.fn.extend({data:function(aZ,a1){if(typeof aZ==="undefined"&&this.length){return a.data(this[0])
}else{if(typeof aZ==="object"){return this.each(function(){a.data(this,aZ)})}}var a2=aZ.split(".");
a2[1]=a2[1]?"."+a2[1]:"";if(a1===D){var a0=this.triggerHandler("getData"+a2[1]+"!",[a2[0]]);
if(a0===D&&this.length){a0=a.data(this[0],aZ)}return a0===D&&a2[1]?this.data(a2[0]):a0
}else{return this.trigger("setData"+a2[1]+"!",[a2[0],a1]).each(function(){a.data(this,aZ,a1)
})}},removeData:function(aZ){return this.each(function(){a.removeData(this,aZ)})}});
a.extend({queue:function(a0,aZ,a2){if(!a0){return}aZ=(aZ||"fx")+"queue";var a1=a.data(a0,aZ);
if(!a2){return a1||[]}if(!a1||a.isArray(a2)){a1=a.data(a0,aZ,a.makeArray(a2))}else{a1.push(a2)
}return a1},dequeue:function(a2,a1){a1=a1||"fx";var aZ=a.queue(a2,a1),a0=aZ.shift();
if(a0==="inprogress"){a0=aZ.shift()}if(a0){if(a1==="fx"){aZ.unshift("inprogress")
}a0.call(a2,function(){a.dequeue(a2,a1)})}}});a.fn.extend({queue:function(aZ,a0){if(typeof aZ!=="string"){a0=aZ;
aZ="fx"}if(a0===D){return a.queue(this[0],aZ)}return this.each(function(a2,a3){var a1=a.queue(this,aZ,a0);
if(aZ==="fx"&&a1[0]!=="inprogress"){a.dequeue(this,aZ)}})},dequeue:function(aZ){return this.each(function(){a.dequeue(this,aZ)
})},delay:function(a0,aZ){a0=a.fx?a.fx.speeds[a0]||a0:a0;aZ=aZ||"fx";return this.queue(aZ,function(){var a1=this;
setTimeout(function(){a.dequeue(a1,aZ)},a0)})},clearQueue:function(aZ){return this.queue(aZ||"fx",[])
}});var ap=/[\n\t]/g,T=/\s+/,aw=/\r/g,aR=/href|src|style/,d=/(button|input)/i,A=/(button|input|object|select|textarea)/i,k=/^(a|area)$/i,J=/radio|checkbox/;
a.fn.extend({attr:function(aZ,a0){return ao(this,aZ,a0,true,a.attr)},removeAttr:function(aZ,a0){return this.each(function(){a.attr(this,aZ,"");
if(this.nodeType===1){this.removeAttribute(aZ)}})},addClass:function(a6){if(a.isFunction(a6)){return this.each(function(a9){var a8=a(this);
a8.addClass(a6.call(this,a9,a8.attr("class")))})}if(a6&&typeof a6==="string"){var aZ=(a6||"").split(T);
for(var a2=0,a1=this.length;a2<a1;a2++){var a0=this[a2];if(a0.nodeType===1){if(!a0.className){a0.className=a6
}else{var a3=" "+a0.className+" ",a5=a0.className;for(var a4=0,a7=aZ.length;a4<a7;
a4++){if(a3.indexOf(" "+aZ[a4]+" ")<0){a5+=" "+aZ[a4]}}a0.className=a.trim(a5)}}}}return this
},removeClass:function(a4){if(a.isFunction(a4)){return this.each(function(a8){var a7=a(this);
a7.removeClass(a4.call(this,a8,a7.attr("class")))})}if((a4&&typeof a4==="string")||a4===D){var a5=(a4||"").split(T);
for(var a1=0,a0=this.length;a1<a0;a1++){var a3=this[a1];if(a3.nodeType===1&&a3.className){if(a4){var a2=(" "+a3.className+" ").replace(ap," ");
for(var a6=0,aZ=a5.length;a6<aZ;a6++){a2=a2.replace(" "+a5[a6]+" "," ")}a3.className=a.trim(a2)
}else{a3.className=""}}}}return this},toggleClass:function(a2,a0){var a1=typeof a2,aZ=typeof a0==="boolean";
if(a.isFunction(a2)){return this.each(function(a4){var a3=a(this);a3.toggleClass(a2.call(this,a4,a3.attr("class"),a0),a0)
})}return this.each(function(){if(a1==="string"){var a5,a4=0,a3=a(this),a6=a0,a7=a2.split(T);
while((a5=a7[a4++])){a6=aZ?a6:!a3.hasClass(a5);a3[a6?"addClass":"removeClass"](a5)
}}else{if(a1==="undefined"||a1==="boolean"){if(this.className){a.data(this,"__className__",this.className)
}this.className=this.className||a2===false?"":a.data(this,"__className__")||""}}})
},hasClass:function(aZ){var a2=" "+aZ+" ";for(var a1=0,a0=this.length;a1<a0;a1++){if((" "+this[a1].className+" ").replace(ap," ").indexOf(a2)>-1){return true
}}return false},val:function(a6){if(a6===D){var a0=this[0];if(a0){if(a.nodeName(a0,"option")){return(a0.attributes.value||{}).specified?a0.value:a0.text
}if(a.nodeName(a0,"select")){var a4=a0.selectedIndex,a7=[],a8=a0.options,a3=a0.type==="select-one";
if(a4<0){return null}for(var a1=a3?a4:0,a5=a3?a4+1:a8.length;a1<a5;a1++){var a2=a8[a1];
if(a2.selected){a6=a(a2).val();if(a3){return a6}a7.push(a6)}}return a7}if(J.test(a0.type)&&!a.support.checkOn){return a0.getAttribute("value")===null?"on":a0.value
}return(a0.value||"").replace(aw,"")}return D}var aZ=a.isFunction(a6);return this.each(function(bb){var ba=a(this),bc=a6;
if(this.nodeType!==1){return}if(aZ){bc=a6.call(this,bb,ba.val())}if(typeof bc==="number"){bc+=""
}if(a.isArray(bc)&&J.test(this.type)){this.checked=a.inArray(ba.val(),bc)>=0}else{if(a.nodeName(this,"select")){var a9=a.makeArray(bc);
a("option",this).each(function(){this.selected=a.inArray(a(this).val(),a9)>=0});if(!a9.length){this.selectedIndex=-1
}}else{this.value=bc}}})}});a.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a0,aZ,a5,a8){if(!a0||a0.nodeType===3||a0.nodeType===8){return D
}if(a8&&aZ in a.attrFn){return a(a0)[aZ](a5)}var a1=a0.nodeType!==1||!a.isXMLDoc(a0),a4=a5!==D;
aZ=a1&&a.props[aZ]||aZ;if(a0.nodeType===1){var a3=aR.test(aZ);if(aZ==="selected"&&!a.support.optSelected){var a6=a0.parentNode;
if(a6){a6.selectedIndex;if(a6.parentNode){a6.parentNode.selectedIndex}}}if(aZ in a0&&a1&&!a3){if(a4){if(aZ==="type"&&d.test(a0.nodeName)&&a0.parentNode){a.error("type property can't be changed")
}a0[aZ]=a5}if(a.nodeName(a0,"form")&&a0.getAttributeNode(aZ)){return a0.getAttributeNode(aZ).nodeValue
}if(aZ==="tabIndex"){var a7=a0.getAttributeNode("tabIndex");return a7&&a7.specified?a7.value:A.test(a0.nodeName)||k.test(a0.nodeName)&&a0.href?0:D
}return a0[aZ]}if(!a.support.style&&a1&&aZ==="style"){if(a4){a0.style.cssText=""+a5
}return a0.style.cssText}if(a4){a0.setAttribute(aZ,""+a5)}var a2=!a.support.hrefNormalized&&a1&&a3?a0.getAttribute(aZ,2):a0.getAttribute(aZ);
return a2===null?D:a2}return a.style(a0,aZ,a5)}});var aD=/\.(.*)$/,B=function(aZ){return aZ.replace(/[^\w\s\.\|`]/g,function(a0){return"\\"+a0
})};a.event={add:function(a2,a6,bb,a4){if(a2.nodeType===3||a2.nodeType===8){return
}if(a2.setInterval&&(a2!==aN&&!a2.frameElement)){a2=aN}var a0,ba;if(bb.handler){a0=bb;
bb=a0.handler}if(!bb.guid){bb.guid=a.guid++}var a7=a.data(a2);if(!a7){return}var bc=a7.events=a7.events||{},a5=a7.handle,a5;
if(!a5){a7.handle=a5=function(){return typeof a!=="undefined"&&!a.event.triggered?a.event.handle.apply(a5.elem,arguments):D
}}a5.elem=a2;a6=a6.split(" ");var a9,a3=0,aZ;while((a9=a6[a3++])){ba=a0?a.extend({},a0):{handler:bb,data:a4};
if(a9.indexOf(".")>-1){aZ=a9.split(".");a9=aZ.shift();ba.namespace=aZ.slice(0).sort().join(".")
}else{aZ=[];ba.namespace=""}ba.type=a9;ba.guid=bb.guid;var a1=bc[a9],a8=a.event.special[a9]||{};
if(!a1){a1=bc[a9]=[];if(!a8.setup||a8.setup.call(a2,a4,aZ,a5)===false){if(a2.addEventListener){a2.addEventListener(a9,a5,false)
}else{if(a2.attachEvent){a2.attachEvent("on"+a9,a5)}}}}if(a8.add){a8.add.call(a2,ba);
if(!ba.handler.guid){ba.handler.guid=bb.guid}}a1.push(ba);a.event.global[a9]=true
}a2=null},global:{},remove:function(be,a9,a0,a5){if(be.nodeType===3||be.nodeType===8){return
}var bh,a4,a6,bc=0,a2,a7,ba,a3,a8,aZ,bg,bd=a.data(be),a1=bd&&bd.events;if(!bd||!a1){return
}if(a9&&a9.type){a0=a9.handler;a9=a9.type}if(!a9||typeof a9==="string"&&a9.charAt(0)==="."){a9=a9||"";
for(a4 in a1){a.event.remove(be,a4+a9)}return}a9=a9.split(" ");while((a4=a9[bc++])){bg=a4;
aZ=null;a2=a4.indexOf(".")<0;a7=[];if(!a2){a7=a4.split(".");a4=a7.shift();ba=new RegExp("(^|\\.)"+a.map(a7.slice(0).sort(),B).join("\\.(?:.*\\.)?")+"(\\.|$)")
}a8=a1[a4];if(!a8){continue}if(!a0){for(var bb=0;bb<a8.length;bb++){aZ=a8[bb];if(a2||ba.test(aZ.namespace)){a.event.remove(be,bg,aZ.handler,bb);
a8.splice(bb--,1)}}continue}a3=a.event.special[a4]||{};for(var bb=a5||0;bb<a8.length;
bb++){aZ=a8[bb];if(a0.guid===aZ.guid){if(a2||ba.test(aZ.namespace)){if(a5==null){a8.splice(bb--,1)
}if(a3.remove){a3.remove.call(be,aZ)}}if(a5!=null){break}}}if(a8.length===0||a5!=null&&a8.length===1){if(!a3.teardown||a3.teardown.call(be,a7)===false){ah(be,a4,bd.handle)
}bh=null;delete a1[a4]}}if(a.isEmptyObject(a1)){var bf=bd.handle;if(bf){bf.elem=null
}delete bd.events;delete bd.handle;if(a.isEmptyObject(bd)){a.removeData(be)}}},trigger:function(aZ,a3,a1){var a8=aZ.type||aZ,a2=arguments[3];
if(!a2){aZ=typeof aZ==="object"?aZ[aJ]?aZ:a.extend(a.Event(a8),aZ):a.Event(a8);if(a8.indexOf("!")>=0){aZ.type=a8=a8.slice(0,-1);
aZ.exclusive=true}if(!a1){aZ.stopPropagation();if(a.event.global[a8]){a.each(a.cache,function(){if(this.events&&this.events[a8]){a.event.trigger(aZ,a3,this.handle.elem)
}})}}if(!a1||a1.nodeType===3||a1.nodeType===8){return D}aZ.result=D;aZ.target=a1;
a3=a.makeArray(a3);a3.unshift(aZ)}aZ.currentTarget=a1;var a4=a.data(a1,"handle");
if(a4){a4.apply(a1,a3)}var a9=a1.parentNode||a1.ownerDocument;try{if(!(a1&&a1.nodeName&&a.noData[a1.nodeName.toLowerCase()])){if(a1["on"+a8]&&a1["on"+a8].apply(a1,a3)===false){aZ.result=false
}}}catch(a6){}if(!aZ.isPropagationStopped()&&a9){a.event.trigger(aZ,a3,a9,true)}else{if(!aZ.isDefaultPrevented()){var a5=aZ.target,a0,ba=a.nodeName(a5,"a")&&a8==="click",a7=a.event.special[a8]||{};
if((!a7._default||a7._default.call(a1,aZ)===false)&&!ba&&!(a5&&a5.nodeName&&a.noData[a5.nodeName.toLowerCase()])){try{if(a5[a8]){a0=a5["on"+a8];
if(a0){a5["on"+a8]=null}a.event.triggered=true;a5[a8]()}}catch(a6){}if(a0){a5["on"+a8]=a0
}a.event.triggered=false}}}},handle:function(aZ){var a7,a1,a0,a2,a8;aZ=arguments[0]=a.event.fix(aZ||aN.event);
aZ.currentTarget=this;a7=aZ.type.indexOf(".")<0&&!aZ.exclusive;if(!a7){a0=aZ.type.split(".");
aZ.type=a0.shift();a2=new RegExp("(^|\\.)"+a0.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")
}var a8=a.data(this,"events"),a1=a8[aZ.type];if(a8&&a1){a1=a1.slice(0);for(var a4=0,a3=a1.length;
a4<a3;a4++){var a6=a1[a4];if(a7||a2.test(a6.namespace)){aZ.handler=a6.handler;aZ.data=a6.data;
aZ.handleObj=a6;var a5=a6.handler.apply(this,arguments);if(a5!==D){aZ.result=a5;if(a5===false){aZ.preventDefault();
aZ.stopPropagation()}}if(aZ.isImmediatePropagationStopped()){break}}}}return aZ.result
},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a2){if(a2[aJ]){return a2
}var a0=a2;a2=a.Event(a0);for(var a1=this.props.length,a4;a1;){a4=this.props[--a1];
a2[a4]=a0[a4]}if(!a2.target){a2.target=a2.srcElement||ac}if(a2.target.nodeType===3){a2.target=a2.target.parentNode
}if(!a2.relatedTarget&&a2.fromElement){a2.relatedTarget=a2.fromElement===a2.target?a2.toElement:a2.fromElement
}if(a2.pageX==null&&a2.clientX!=null){var a3=ac.documentElement,aZ=ac.body;a2.pageX=a2.clientX+(a3&&a3.scrollLeft||aZ&&aZ.scrollLeft||0)-(a3&&a3.clientLeft||aZ&&aZ.clientLeft||0);
a2.pageY=a2.clientY+(a3&&a3.scrollTop||aZ&&aZ.scrollTop||0)-(a3&&a3.clientTop||aZ&&aZ.clientTop||0)
}if(!a2.which&&((a2.charCode||a2.charCode===0)?a2.charCode:a2.keyCode)){a2.which=a2.charCode||a2.keyCode
}if(!a2.metaKey&&a2.ctrlKey){a2.metaKey=a2.ctrlKey}if(!a2.which&&a2.button!==D){a2.which=(a2.button&1?1:(a2.button&2?3:(a2.button&4?2:0)))
}return a2},guid:100000000,proxy:a.proxy,special:{ready:{setup:a.bindReady,teardown:a.noop},live:{add:function(aZ){a.event.add(this,aZ.origType,a.extend({},aZ,{handler:W}))
},remove:function(a0){var aZ=true,a1=a0.origType.replace(aD,"");a.each(a.data(this,"events").live||[],function(){if(a1===this.origType.replace(aD,"")){aZ=false;
return false}});if(aZ){a.event.remove(this,a0.origType,W)}}},beforeunload:{setup:function(a1,a0,aZ){if(this.setInterval){this.onbeforeunload=aZ
}return false},teardown:function(a0,aZ){if(this.onbeforeunload===aZ){this.onbeforeunload=null
}}}}};var ah=ac.removeEventListener?function(a0,aZ,a1){a0.removeEventListener(aZ,a1,false)
}:function(a0,aZ,a1){a0.detachEvent("on"+aZ,a1)};a.Event=function(aZ){if(!this.preventDefault){return new a.Event(aZ)
}if(aZ&&aZ.type){this.originalEvent=aZ;this.type=aZ.type}else{this.type=aZ}this.timeStamp=aQ();
this[aJ]=true};function aS(){return false}function f(){return true}a.Event.prototype={preventDefault:function(){this.isDefaultPrevented=f;
var aZ=this.originalEvent;if(!aZ){return}if(aZ.preventDefault){aZ.preventDefault()
}aZ.returnValue=false},stopPropagation:function(){this.isPropagationStopped=f;var aZ=this.originalEvent;
if(!aZ){return}if(aZ.stopPropagation){aZ.stopPropagation()}aZ.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=f;
this.stopPropagation()},isDefaultPrevented:aS,isPropagationStopped:aS,isImmediatePropagationStopped:aS};
var R=function(a0){var aZ=a0.relatedTarget;try{while(aZ&&aZ!==this){aZ=aZ.parentNode
}if(aZ!==this){a0.type=a0.data;a.event.handle.apply(this,arguments)}}catch(a1){}},az=function(aZ){aZ.type=aZ.data;
a.event.handle.apply(this,arguments)};a.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a0,aZ){a.event.special[a0]={setup:function(a1){a.event.add(this,aZ,a1&&a1.selector?az:R,a0)
},teardown:function(a1){a.event.remove(this,aZ,a1&&a1.selector?az:R)}}});if(!a.support.submitBubbles){a.event.special.submit={setup:function(a0,aZ){if(this.nodeName.toLowerCase()!=="form"){a.event.add(this,"click.specialSubmit",function(a3){var a2=a3.target,a1=a2.type;
if((a1==="submit"||a1==="image")&&a(a2).closest("form").length){return aB("submit",this,arguments)
}});a.event.add(this,"keypress.specialSubmit",function(a3){var a2=a3.target,a1=a2.type;
if((a1==="text"||a1==="password")&&a(a2).closest("form").length&&a3.keyCode===13){return aB("submit",this,arguments)
}})}else{return false}},teardown:function(aZ){a.event.remove(this,".specialSubmit")
}}}if(!a.support.changeBubbles){var ar=/textarea|input|select/i,aT,j=function(a0){var aZ=a0.type,a1=a0.value;
if(aZ==="radio"||aZ==="checkbox"){a1=a0.checked}else{if(aZ==="select-multiple"){a1=a0.selectedIndex>-1?a.map(a0.options,function(a2){return a2.selected
}).join("-"):""}else{if(a0.nodeName.toLowerCase()==="select"){a1=a0.selectedIndex
}}}return a1},P=function P(a1){var aZ=a1.target,a0,a2;if(!ar.test(aZ.nodeName)||aZ.readOnly){return
}a0=a.data(aZ,"_change_data");a2=j(aZ);if(a1.type!=="focusout"||aZ.type!=="radio"){a.data(aZ,"_change_data",a2)
}if(a0===D||a2===a0){return}if(a0!=null||a2){a1.type="change";return a.event.trigger(a1,arguments[1],aZ)
}};a.event.special.change={filters:{focusout:P,click:function(a1){var a0=a1.target,aZ=a0.type;
if(aZ==="radio"||aZ==="checkbox"||a0.nodeName.toLowerCase()==="select"){return P.call(this,a1)
}},keydown:function(a1){var a0=a1.target,aZ=a0.type;if((a1.keyCode===13&&a0.nodeName.toLowerCase()!=="textarea")||(a1.keyCode===32&&(aZ==="checkbox"||aZ==="radio"))||aZ==="select-multiple"){return P.call(this,a1)
}},beforeactivate:function(a0){var aZ=a0.target;a.data(aZ,"_change_data",j(aZ))}},setup:function(a1,a0){if(this.type==="file"){return false
}for(var aZ in aT){a.event.add(this,aZ+".specialChange",aT[aZ])}return ar.test(this.nodeName)
},teardown:function(aZ){a.event.remove(this,".specialChange");return ar.test(this.nodeName)
}};aT=a.event.special.change.filters}function aB(a0,a1,aZ){aZ[0].type=a0;return a.event.handle.apply(a1,aZ)
}if(ac.addEventListener){a.each({focus:"focusin",blur:"focusout"},function(a1,aZ){a.event.special[aZ]={setup:function(){this.addEventListener(a1,a0,true)
},teardown:function(){this.removeEventListener(a1,a0,true)}};function a0(a2){a2=a.event.fix(a2);
a2.type=aZ;return a.event.handle.call(this,a2)}})}a.each(["bind","one"],function(a0,aZ){a.fn[aZ]=function(a6,a7,a5){if(typeof a6==="object"){for(var a3 in a6){this[aZ](a3,a7,a6[a3],a5)
}return this}if(a.isFunction(a7)){a5=a7;a7=D}var a4=aZ==="one"?a.proxy(a5,function(a8){a(this).unbind(a8,a4);
return a5.apply(this,arguments)}):a5;if(a6==="unload"&&aZ!=="one"){this.one(a6,a7,a5)
}else{for(var a2=0,a1=this.length;a2<a1;a2++){a.event.add(this[a2],a6,a4,a7)}}return this
}});a.fn.extend({unbind:function(a3,a2){if(typeof a3==="object"&&!a3.preventDefault){for(var a1 in a3){this.unbind(a1,a3[a1])
}}else{for(var a0=0,aZ=this.length;a0<aZ;a0++){a.event.remove(this[a0],a3,a2)}}return this
},delegate:function(aZ,a0,a2,a1){return this.live(a0,a2,a1,aZ)},undelegate:function(aZ,a0,a1){if(arguments.length===0){return this.unbind("live")
}else{return this.die(a0,null,a1,aZ)}},trigger:function(aZ,a0){return this.each(function(){a.event.trigger(aZ,a0,this)
})},triggerHandler:function(aZ,a1){if(this[0]){var a0=a.Event(aZ);a0.preventDefault();
a0.stopPropagation();a.event.trigger(a0,a1,this[0]);return a0.result}},toggle:function(a1){var aZ=arguments,a0=1;
while(a0<aZ.length){a.proxy(a1,aZ[a0++])}return this.click(a.proxy(a1,function(a2){var a3=(a.data(this,"lastToggle"+a1.guid)||0)%a0;
a.data(this,"lastToggle"+a1.guid,a3+1);a2.preventDefault();return aZ[a3].apply(this,arguments)||false
}))},hover:function(aZ,a0){return this.mouseenter(aZ).mouseleave(a0||aZ)}});var ax={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};
a.each(["live","die"],function(a0,aZ){a.fn[aZ]=function(a8,a5,ba,a3){var a9,a6=0,a7,a2,bb,a4=a3||this.selector,a1=a3?this:a(this.context);
if(a.isFunction(a5)){ba=a5;a5=D}a8=(a8||"").split(" ");while((a9=a8[a6++])!=null){a7=aD.exec(a9);
a2="";if(a7){a2=a7[0];a9=a9.replace(aD,"")}if(a9==="hover"){a8.push("mouseenter"+a2,"mouseleave"+a2);
continue}bb=a9;if(a9==="focus"||a9==="blur"){a8.push(ax[a9]+a2);a9=a9+a2}else{a9=(ax[a9]||a9)+a2
}if(aZ==="live"){a1.each(function(){a.event.add(this,n(a9,a4),{data:a5,selector:a4,handler:ba,origType:a9,origHandler:ba,preType:bb})
})}else{a1.unbind(n(a9,a4),ba)}}return this}});function W(aZ){var a9,a0=[],bc=[],a8=arguments,bb,a7,ba,a2,a4,a6,a3,a5,bd=a.data(this,"events");
if(aZ.liveFired===this||!bd||!bd.live||aZ.button&&aZ.type==="click"){return}aZ.liveFired=this;
var a1=bd.live.slice(0);for(a4=0;a4<a1.length;a4++){ba=a1[a4];if(ba.origType.replace(aD,"")===aZ.type){bc.push(ba.selector)
}else{a1.splice(a4--,1)}}a7=a(aZ.target).closest(bc,aZ.currentTarget);for(a6=0,a3=a7.length;
a6<a3;a6++){for(a4=0;a4<a1.length;a4++){ba=a1[a4];if(a7[a6].selector===ba.selector){a2=a7[a6].elem;
bb=null;if(ba.preType==="mouseenter"||ba.preType==="mouseleave"){bb=a(aZ.relatedTarget).closest(ba.selector)[0]
}if(!bb||bb!==a2){a0.push({elem:a2,handleObj:ba})}}}}for(a6=0,a3=a0.length;a6<a3;
a6++){a7=a0[a6];aZ.currentTarget=a7.elem;aZ.data=a7.handleObj.data;aZ.handleObj=a7.handleObj;
if(a7.handleObj.origHandler.apply(a7.elem,a8)===false){a9=false;break}}return a9}function n(a0,aZ){return"live."+(a0&&a0!=="*"?a0+".":"")+aZ.replace(/\./g,"`").replace(/ /g,"&")
}a.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "),function(a0,aZ){a.fn[aZ]=function(a1){return a1?this.bind(aZ,a1):this.trigger(aZ)
};if(a.attrFn){a.attrFn[aZ]=true}});if(aN.attachEvent&&!aN.addEventListener){aN.attachEvent("onunload",function(){for(var a0 in a.cache){if(a.cache[a0].handle){try{a.event.remove(a.cache[a0].handle.elem)
}catch(aZ){}}}});
/*
 * Sizzle CSS Selector Engine - v1.0
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
}(function(){var ba=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,bb=0,bd=Object.prototype.toString,a5=false,a4=true;
[0,0].sort(function(){a4=false;return 0});var a1=function(bm,bh,bp,bq){bp=bp||[];
var bs=bh=bh||ac;if(bh.nodeType!==1&&bh.nodeType!==9){return[]}if(!bm||typeof bm!=="string"){return bp
}var bn=[],bj,bu,bx,bi,bl=true,bk=a2(bh),br=bm;while((ba.exec(""),bj=ba.exec(br))!==null){br=bj[3];
bn.push(bj[1]);if(bj[2]){bi=bj[3];break}}if(bn.length>1&&a6.exec(bm)){if(bn.length===2&&a7.relative[bn[0]]){bu=be(bn[0]+bn[1],bh)
}else{bu=a7.relative[bn[0]]?[bh]:a1(bn.shift(),bh);while(bn.length){bm=bn.shift();
if(a7.relative[bm]){bm+=bn.shift()}bu=be(bm,bu)}}}else{if(!bq&&bn.length>1&&bh.nodeType===9&&!bk&&a7.match.ID.test(bn[0])&&!a7.match.ID.test(bn[bn.length-1])){var bt=a1.find(bn.shift(),bh,bk);
bh=bt.expr?a1.filter(bt.expr,bt.set)[0]:bt.set[0]}if(bh){var bt=bq?{expr:bn.pop(),set:a9(bq)}:a1.find(bn.pop(),bn.length===1&&(bn[0]==="~"||bn[0]==="+")&&bh.parentNode?bh.parentNode:bh,bk);
bu=bt.expr?a1.filter(bt.expr,bt.set):bt.set;if(bn.length>0){bx=a9(bu)}else{bl=false
}while(bn.length){var bw=bn.pop(),bv=bw;if(!a7.relative[bw]){bw=""}else{bv=bn.pop()
}if(bv==null){bv=bh}a7.relative[bw](bx,bv,bk)}}else{bx=bn=[]}}if(!bx){bx=bu}if(!bx){a1.error(bw||bm)
}if(bd.call(bx)==="[object Array]"){if(!bl){bp.push.apply(bp,bx)}else{if(bh&&bh.nodeType===1){for(var bo=0;
bx[bo]!=null;bo++){if(bx[bo]&&(bx[bo]===true||bx[bo].nodeType===1&&a8(bh,bx[bo]))){bp.push(bu[bo])
}}}else{for(var bo=0;bx[bo]!=null;bo++){if(bx[bo]&&bx[bo].nodeType===1){bp.push(bu[bo])
}}}}}else{a9(bx,bp)}if(bi){a1(bi,bs,bp,bq);a1.uniqueSort(bp)}return bp};a1.uniqueSort=function(bi){if(bc){a5=a4;
bi.sort(bc);if(a5){for(var bh=1;bh<bi.length;bh++){if(bi[bh]===bi[bh-1]){bi.splice(bh--,1)
}}}}return bi};a1.matches=function(bh,bi){return a1(bh,null,null,bi)};a1.find=function(bo,bh,bp){var bn,bl;
if(!bo){return[]}for(var bk=0,bj=a7.order.length;bk<bj;bk++){var bm=a7.order[bk],bl;
if((bl=a7.leftMatch[bm].exec(bo))){var bi=bl[1];bl.splice(1,1);if(bi.substr(bi.length-1)!=="\\"){bl[1]=(bl[1]||"").replace(/\\/g,"");
bn=a7.find[bm](bl,bh,bp);if(bn!=null){bo=bo.replace(a7.match[bm],"");break}}}}if(!bn){bn=bh.getElementsByTagName("*")
}return{set:bn,expr:bo}};a1.filter=function(bs,br,bv,bl){var bj=bs,bx=[],bp=br,bn,bh,bo=br&&br[0]&&a2(br[0]);
while(bs&&br.length){for(var bq in a7.filter){if((bn=a7.leftMatch[bq].exec(bs))!=null&&bn[2]){var bi=a7.filter[bq],bw,bu,bk=bn[1];
bh=false;bn.splice(1,1);if(bk.substr(bk.length-1)==="\\"){continue}if(bp===bx){bx=[]
}if(a7.preFilter[bq]){bn=a7.preFilter[bq](bn,bp,bv,bx,bl,bo);if(!bn){bh=bw=true}else{if(bn===true){continue
}}}if(bn){for(var bm=0;(bu=bp[bm])!=null;bm++){if(bu){bw=bi(bu,bn,bm,bp);var bt=bl^!!bw;
if(bv&&bw!=null){if(bt){bh=true}else{bp[bm]=false}}else{if(bt){bx.push(bu);bh=true
}}}}}if(bw!==D){if(!bv){bp=bx}bs=bs.replace(a7.match[bq],"");if(!bh){return[]}break
}}}if(bs===bj){if(bh==null){a1.error(bs)}else{break}}bj=bs}return bp};a1.error=function(bh){throw"Syntax error, unrecognized expression: "+bh
};var a7=a1.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bh){return bh.getAttribute("href")
}},relative:{"+":function(bn,bi){var bk=typeof bi==="string",bm=bk&&!/\W/.test(bi),bo=bk&&!bm;
if(bm){bi=bi.toLowerCase()}for(var bj=0,bh=bn.length,bl;bj<bh;bj++){if((bl=bn[bj])){while((bl=bl.previousSibling)&&bl.nodeType!==1){}bn[bj]=bo||bl&&bl.nodeName.toLowerCase()===bi?bl||false:bl===bi
}}if(bo){a1.filter(bi,bn,true)}},">":function(bn,bi){var bl=typeof bi==="string";
if(bl&&!/\W/.test(bi)){bi=bi.toLowerCase();for(var bj=0,bh=bn.length;bj<bh;bj++){var bm=bn[bj];
if(bm){var bk=bm.parentNode;bn[bj]=bk.nodeName.toLowerCase()===bi?bk:false}}}else{for(var bj=0,bh=bn.length;
bj<bh;bj++){var bm=bn[bj];if(bm){bn[bj]=bl?bm.parentNode:bm.parentNode===bi}}if(bl){a1.filter(bi,bn,true)
}}},"":function(bk,bi,bm){var bj=bb++,bh=bf;if(typeof bi==="string"&&!/\W/.test(bi)){var bl=bi=bi.toLowerCase();
bh=aZ}bh("parentNode",bi,bj,bk,bl,bm)},"~":function(bk,bi,bm){var bj=bb++,bh=bf;if(typeof bi==="string"&&!/\W/.test(bi)){var bl=bi=bi.toLowerCase();
bh=aZ}bh("previousSibling",bi,bj,bk,bl,bm)}},find:{ID:function(bi,bj,bk){if(typeof bj.getElementById!=="undefined"&&!bk){var bh=bj.getElementById(bi[1]);
return bh?[bh]:[]}},NAME:function(bj,bm){if(typeof bm.getElementsByName!=="undefined"){var bi=[],bl=bm.getElementsByName(bj[1]);
for(var bk=0,bh=bl.length;bk<bh;bk++){if(bl[bk].getAttribute("name")===bj[1]){bi.push(bl[bk])
}}return bi.length===0?null:bi}},TAG:function(bh,bi){return bi.getElementsByTagName(bh[1])
}},preFilter:{CLASS:function(bk,bi,bj,bh,bn,bo){bk=" "+bk[1].replace(/\\/g,"")+" ";
if(bo){return bk}for(var bl=0,bm;(bm=bi[bl])!=null;bl++){if(bm){if(bn^(bm.className&&(" "+bm.className+" ").replace(/[\t\n]/g," ").indexOf(bk)>=0)){if(!bj){bh.push(bm)
}}else{if(bj){bi[bl]=false}}}}return false},ID:function(bh){return bh[1].replace(/\\/g,"")
},TAG:function(bi,bh){return bi[1].toLowerCase()},CHILD:function(bh){if(bh[1]==="nth"){var bi=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(bh[2]==="even"&&"2n"||bh[2]==="odd"&&"2n+1"||!/\D/.test(bh[2])&&"0n+"+bh[2]||bh[2]);
bh[2]=(bi[1]+(bi[2]||1))-0;bh[3]=bi[3]-0}bh[0]=bb++;return bh},ATTR:function(bl,bi,bj,bh,bm,bn){var bk=bl[1].replace(/\\/g,"");
if(!bn&&a7.attrMap[bk]){bl[1]=a7.attrMap[bk]}if(bl[2]==="~="){bl[4]=" "+bl[4]+" "
}return bl},PSEUDO:function(bl,bi,bj,bh,bm){if(bl[1]==="not"){if((ba.exec(bl[3])||"").length>1||/^\w/.test(bl[3])){bl[3]=a1(bl[3],null,null,bi)
}else{var bk=a1.filter(bl[3],bi,bj,true^bm);if(!bj){bh.push.apply(bh,bk)}return false
}}else{if(a7.match.POS.test(bl[0])||a7.match.CHILD.test(bl[0])){return true}}return bl
},POS:function(bh){bh.unshift(true);return bh}},filters:{enabled:function(bh){return bh.disabled===false&&bh.type!=="hidden"
},disabled:function(bh){return bh.disabled===true},checked:function(bh){return bh.checked===true
},selected:function(bh){bh.parentNode.selectedIndex;return bh.selected===true},parent:function(bh){return !!bh.firstChild
},empty:function(bh){return !bh.firstChild},has:function(bj,bi,bh){return !!a1(bh[3],bj).length
},header:function(bh){return/h\d/i.test(bh.nodeName)},text:function(bh){return"text"===bh.type
},radio:function(bh){return"radio"===bh.type},checkbox:function(bh){return"checkbox"===bh.type
},file:function(bh){return"file"===bh.type},password:function(bh){return"password"===bh.type
},submit:function(bh){return"submit"===bh.type},image:function(bh){return"image"===bh.type
},reset:function(bh){return"reset"===bh.type},button:function(bh){return"button"===bh.type||bh.nodeName.toLowerCase()==="button"
},input:function(bh){return/input|select|textarea|button/i.test(bh.nodeName)}},setFilters:{first:function(bi,bh){return bh===0
},last:function(bj,bi,bh,bk){return bi===bk.length-1},even:function(bi,bh){return bh%2===0
},odd:function(bi,bh){return bh%2===1},lt:function(bj,bi,bh){return bi<bh[3]-0},gt:function(bj,bi,bh){return bi>bh[3]-0
},nth:function(bj,bi,bh){return bh[3]-0===bi},eq:function(bj,bi,bh){return bh[3]-0===bi
}},filter:{PSEUDO:function(bn,bj,bk,bo){var bi=bj[1],bl=a7.filters[bi];if(bl){return bl(bn,bk,bj,bo)
}else{if(bi==="contains"){return(bn.textContent||bn.innerText||a0([bn])||"").indexOf(bj[3])>=0
}else{if(bi==="not"){var bm=bj[3];for(var bk=0,bh=bm.length;bk<bh;bk++){if(bm[bk]===bn){return false
}}return true}else{a1.error("Syntax error, unrecognized expression: "+bi)}}}},CHILD:function(bh,bk){var bn=bk[1],bi=bh;
switch(bn){case"only":case"first":while((bi=bi.previousSibling)){if(bi.nodeType===1){return false
}}if(bn==="first"){return true}bi=bh;case"last":while((bi=bi.nextSibling)){if(bi.nodeType===1){return false
}}return true;case"nth":var bj=bk[2],bq=bk[3];if(bj===1&&bq===0){return true}var bm=bk[0],bp=bh.parentNode;
if(bp&&(bp.sizcache!==bm||!bh.nodeIndex)){var bl=0;for(bi=bp.firstChild;bi;bi=bi.nextSibling){if(bi.nodeType===1){bi.nodeIndex=++bl
}}bp.sizcache=bm}var bo=bh.nodeIndex-bq;if(bj===0){return bo===0}else{return(bo%bj===0&&bo/bj>=0)
}}},ID:function(bi,bh){return bi.nodeType===1&&bi.getAttribute("id")===bh},TAG:function(bi,bh){return(bh==="*"&&bi.nodeType===1)||bi.nodeName.toLowerCase()===bh
},CLASS:function(bi,bh){return(" "+(bi.className||bi.getAttribute("class"))+" ").indexOf(bh)>-1
},ATTR:function(bm,bk){var bj=bk[1],bh=a7.attrHandle[bj]?a7.attrHandle[bj](bm):bm[bj]!=null?bm[bj]:bm.getAttribute(bj),bn=bh+"",bl=bk[2],bi=bk[4];
return bh==null?bl==="!=":bl==="="?bn===bi:bl==="*="?bn.indexOf(bi)>=0:bl==="~="?(" "+bn+" ").indexOf(bi)>=0:!bi?bn&&bh!==false:bl==="!="?bn!==bi:bl==="^="?bn.indexOf(bi)===0:bl==="$="?bn.substr(bn.length-bi.length)===bi:bl==="|="?bn===bi||bn.substr(0,bi.length+1)===bi+"-":false
},POS:function(bl,bi,bj,bm){var bh=bi[2],bk=a7.setFilters[bh];if(bk){return bk(bl,bj,bi,bm)
}}}};var a6=a7.match.POS;for(var a3 in a7.match){a7.match[a3]=new RegExp(a7.match[a3].source+/(?![^\[]*\])(?![^\(]*\))/.source);
a7.leftMatch[a3]=new RegExp(/(^(?:.|\r|\n)*?)/.source+a7.match[a3].source.replace(/\\(\d+)/g,function(bi,bh){return"\\"+(bh-0+1)
}))}var a9=function(bi,bh){bi=Array.prototype.slice.call(bi,0);if(bh){bh.push.apply(bh,bi);
return bh}return bi};try{Array.prototype.slice.call(ac.documentElement.childNodes,0)[0].nodeType
}catch(bg){a9=function(bl,bk){var bi=bk||[];if(bd.call(bl)==="[object Array]"){Array.prototype.push.apply(bi,bl)
}else{if(typeof bl.length==="number"){for(var bj=0,bh=bl.length;bj<bh;bj++){bi.push(bl[bj])
}}else{for(var bj=0;bl[bj];bj++){bi.push(bl[bj])}}}return bi}}var bc;if(ac.documentElement.compareDocumentPosition){bc=function(bi,bh){if(!bi.compareDocumentPosition||!bh.compareDocumentPosition){if(bi==bh){a5=true
}return bi.compareDocumentPosition?-1:1}var bj=bi.compareDocumentPosition(bh)&4?-1:bi===bh?0:1;
if(bj===0){a5=true}return bj}}else{if("sourceIndex" in ac.documentElement){bc=function(bi,bh){if(!bi.sourceIndex||!bh.sourceIndex){if(bi==bh){a5=true
}return bi.sourceIndex?-1:1}var bj=bi.sourceIndex-bh.sourceIndex;if(bj===0){a5=true
}return bj}}else{if(ac.createRange){bc=function(bk,bi){if(!bk.ownerDocument||!bi.ownerDocument){if(bk==bi){a5=true
}return bk.ownerDocument?-1:1}var bj=bk.ownerDocument.createRange(),bh=bi.ownerDocument.createRange();
bj.setStart(bk,0);bj.setEnd(bk,0);bh.setStart(bi,0);bh.setEnd(bi,0);var bl=bj.compareBoundaryPoints(Range.START_TO_END,bh);
if(bl===0){a5=true}return bl}}}}function a0(bh){var bi="",bk;for(var bj=0;bh[bj];
bj++){bk=bh[bj];if(bk.nodeType===3||bk.nodeType===4){bi+=bk.nodeValue}else{if(bk.nodeType!==8){bi+=a0(bk.childNodes)
}}}return bi}(function(){var bi=ac.createElement("div"),bj="script"+(new Date).getTime();
bi.innerHTML="<a name='"+bj+"'/>";var bh=ac.documentElement;bh.insertBefore(bi,bh.firstChild);
if(ac.getElementById(bj)){a7.find.ID=function(bl,bm,bn){if(typeof bm.getElementById!=="undefined"&&!bn){var bk=bm.getElementById(bl[1]);
return bk?bk.id===bl[1]||typeof bk.getAttributeNode!=="undefined"&&bk.getAttributeNode("id").nodeValue===bl[1]?[bk]:D:[]
}};a7.filter.ID=function(bm,bk){var bl=typeof bm.getAttributeNode!=="undefined"&&bm.getAttributeNode("id");
return bm.nodeType===1&&bl&&bl.nodeValue===bk}}bh.removeChild(bi);bh=bi=null})();
(function(){var bh=ac.createElement("div");bh.appendChild(ac.createComment(""));if(bh.getElementsByTagName("*").length>0){a7.find.TAG=function(bi,bm){var bl=bm.getElementsByTagName(bi[1]);
if(bi[1]==="*"){var bk=[];for(var bj=0;bl[bj];bj++){if(bl[bj].nodeType===1){bk.push(bl[bj])
}}bl=bk}return bl}}bh.innerHTML="<a href='#'></a>";if(bh.firstChild&&typeof bh.firstChild.getAttribute!=="undefined"&&bh.firstChild.getAttribute("href")!=="#"){a7.attrHandle.href=function(bi){return bi.getAttribute("href",2)
}}bh=null})();if(ac.querySelectorAll){(function(){var bh=a1,bj=ac.createElement("div");
bj.innerHTML="<p class='TEST'></p>";if(bj.querySelectorAll&&bj.querySelectorAll(".TEST").length===0){return
}a1=function(bn,bm,bk,bl){bm=bm||ac;if(!bl&&bm.nodeType===9&&!a2(bm)){try{return a9(bm.querySelectorAll(bn),bk)
}catch(bo){}}return bh(bn,bm,bk,bl)};for(var bi in bh){a1[bi]=bh[bi]}bj=null})()}(function(){var bh=ac.createElement("div");
bh.innerHTML="<div class='test e'></div><div class='test'></div>";if(!bh.getElementsByClassName||bh.getElementsByClassName("e").length===0){return
}bh.lastChild.className="e";if(bh.getElementsByClassName("e").length===1){return}a7.order.splice(1,0,"CLASS");
a7.find.CLASS=function(bi,bj,bk){if(typeof bj.getElementsByClassName!=="undefined"&&!bk){return bj.getElementsByClassName(bi[1])
}};bh=null})();function aZ(bi,bn,bm,bq,bo,bp){for(var bk=0,bj=bq.length;bk<bj;bk++){var bh=bq[bk];
if(bh){bh=bh[bi];var bl=false;while(bh){if(bh.sizcache===bm){bl=bq[bh.sizset];break
}if(bh.nodeType===1&&!bp){bh.sizcache=bm;bh.sizset=bk}if(bh.nodeName.toLowerCase()===bn){bl=bh;
break}bh=bh[bi]}bq[bk]=bl}}}function bf(bi,bn,bm,bq,bo,bp){for(var bk=0,bj=bq.length;
bk<bj;bk++){var bh=bq[bk];if(bh){bh=bh[bi];var bl=false;while(bh){if(bh.sizcache===bm){bl=bq[bh.sizset];
break}if(bh.nodeType===1){if(!bp){bh.sizcache=bm;bh.sizset=bk}if(typeof bn!=="string"){if(bh===bn){bl=true;
break}}else{if(a1.filter(bn,[bh]).length>0){bl=bh;break}}}bh=bh[bi]}bq[bk]=bl}}}var a8=ac.compareDocumentPosition?function(bi,bh){return !!(bi.compareDocumentPosition(bh)&16)
}:function(bi,bh){return bi!==bh&&(bi.contains?bi.contains(bh):true)};var a2=function(bh){var bi=(bh?bh.ownerDocument||bh:0).documentElement;
return bi?bi.nodeName!=="HTML":false};var be=function(bh,bo){var bk=[],bl="",bm,bj=bo.nodeType?[bo]:bo;
while((bm=a7.match.PSEUDO.exec(bh))){bl+=bm[0];bh=bh.replace(a7.match.PSEUDO,"")}bh=a7.relative[bh]?bh+"*":bh;
for(var bn=0,bi=bj.length;bn<bi;bn++){a1(bh,bj[bn],bk)}return a1.filter(bl,bk)};a.find=a1;
a.expr=a1.selectors;a.expr[":"]=a.expr.filters;a.unique=a1.uniqueSort;a.text=a0;a.isXMLDoc=a2;
a.contains=a8;return;aN.Sizzle=a1})();var O=/Until$/,Z=/^(?:parents|prevUntil|prevAll)/,aM=/,/,G=Array.prototype.slice;
var aj=function(a2,a1,aZ){if(a.isFunction(a1)){return a.grep(a2,function(a4,a3){return !!a1.call(a4,a3,a4)===aZ
})}else{if(a1.nodeType){return a.grep(a2,function(a4,a3){return(a4===a1)===aZ})}else{if(typeof a1==="string"){var a0=a.grep(a2,function(a3){return a3.nodeType===1
});if(aX.test(a1)){return a.filter(a1,a0,!aZ)}else{a1=a.filter(a1,a0)}}}}return a.grep(a2,function(a4,a3){return(a.inArray(a4,a1)>=0)===aZ
})};a.fn.extend({find:function(aZ){var a1=this.pushStack("","find",aZ),a4=0;for(var a2=0,a0=this.length;
a2<a0;a2++){a4=a1.length;a.find(aZ,this[a2],a1);if(a2>0){for(var a5=a4;a5<a1.length;
a5++){for(var a3=0;a3<a4;a3++){if(a1[a3]===a1[a5]){a1.splice(a5--,1);break}}}}}return a1
},has:function(a0){var aZ=a(a0);return this.filter(function(){for(var a2=0,a1=aZ.length;
a2<a1;a2++){if(a.contains(this,aZ[a2])){return true}}})},not:function(aZ){return this.pushStack(aj(this,aZ,false),"not",aZ)
},filter:function(aZ){return this.pushStack(aj(this,aZ,true),"filter",aZ)},is:function(aZ){return !!aZ&&a.filter(aZ,this).length>0
},closest:function(a8,aZ){if(a.isArray(a8)){var a5=[],a7=this[0],a4,a3={},a1;if(a7&&a8.length){for(var a2=0,a0=a8.length;
a2<a0;a2++){a1=a8[a2];if(!a3[a1]){a3[a1]=a.expr.match.POS.test(a1)?a(a1,aZ||this.context):a1
}}while(a7&&a7.ownerDocument&&a7!==aZ){for(a1 in a3){a4=a3[a1];if(a4.jquery?a4.index(a7)>-1:a(a7).is(a4)){a5.push({selector:a1,elem:a7});
delete a3[a1]}}a7=a7.parentNode}}return a5}var a6=a.expr.match.POS.test(a8)?a(a8,aZ||this.context):null;
return this.map(function(a9,ba){while(ba&&ba.ownerDocument&&ba!==aZ){if(a6?a6.index(ba)>-1:a(ba).is(a8)){return ba
}ba=ba.parentNode}return null})},index:function(aZ){if(!aZ||typeof aZ==="string"){return a.inArray(this[0],aZ?a(aZ):this.parent().children())
}return a.inArray(aZ.jquery?aZ[0]:aZ,this)},add:function(aZ,a0){var a2=typeof aZ==="string"?a(aZ,a0||this.context):a.makeArray(aZ),a1=a.merge(this.get(),a2);
return this.pushStack(z(a2[0])||z(a1[0])?a1:a.unique(a1))},andSelf:function(){return this.add(this.prevObject)
}});function z(aZ){return !aZ||!aZ.parentNode||aZ.parentNode.nodeType===11}a.each({parent:function(a0){var aZ=a0.parentNode;
return aZ&&aZ.nodeType!==11?aZ:null},parents:function(aZ){return a.dir(aZ,"parentNode")
},parentsUntil:function(a0,aZ,a1){return a.dir(a0,"parentNode",a1)},next:function(aZ){return a.nth(aZ,2,"nextSibling")
},prev:function(aZ){return a.nth(aZ,2,"previousSibling")},nextAll:function(aZ){return a.dir(aZ,"nextSibling")
},prevAll:function(aZ){return a.dir(aZ,"previousSibling")},nextUntil:function(a0,aZ,a1){return a.dir(a0,"nextSibling",a1)
},prevUntil:function(a0,aZ,a1){return a.dir(a0,"previousSibling",a1)},siblings:function(aZ){return a.sibling(aZ.parentNode.firstChild,aZ)
},children:function(aZ){return a.sibling(aZ.firstChild)},contents:function(aZ){return a.nodeName(aZ,"iframe")?aZ.contentDocument||aZ.contentWindow.document:a.makeArray(aZ.childNodes)
}},function(aZ,a0){a.fn[aZ]=function(a3,a1){var a2=a.map(this,a0,a3);if(!O.test(aZ)){a1=a3
}if(a1&&typeof a1==="string"){a2=a.filter(a1,a2)}a2=this.length>1?a.unique(a2):a2;
if((this.length>1||aM.test(a1))&&Z.test(aZ)){a2=a2.reverse()}return this.pushStack(a2,aZ,G.call(arguments).join(","))
}});a.extend({filter:function(a1,aZ,a0){if(a0){a1=":not("+a1+")"}return a.find.matches(a1,aZ)
},dir:function(a1,a0,a3){var aZ=[],a2=a1[a0];while(a2&&a2.nodeType!==9&&(a3===D||a2.nodeType!==1||!a(a2).is(a3))){if(a2.nodeType===1){aZ.push(a2)
}a2=a2[a0]}return aZ},nth:function(a3,aZ,a1,a2){aZ=aZ||1;var a0=0;for(;a3;a3=a3[a1]){if(a3.nodeType===1&&++a0===aZ){break
}}return a3},sibling:function(a1,a0){var aZ=[];for(;a1;a1=a1.nextSibling){if(a1.nodeType===1&&a1!==a0){aZ.push(a1)
}}return aZ}});var U=/ jQuery\d+="(?:\d+|null)"/g,aa=/^\s+/,I=/(<([\w:]+)[^>]*?)\/>/g,am=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,c=/<([\w:]+)/,u=/<tbody/i,M=/<|&#?\w+;/,F=/<script|<object|<embed|<option|<style/i,m=/checked\s*(?:[^=]|=\s*.checked.)/i,q=function(a0,a1,aZ){return am.test(aZ)?a0:a1+"></"+aZ+">"
},ad={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};
ad.optgroup=ad.option;ad.tbody=ad.tfoot=ad.colgroup=ad.caption=ad.thead;ad.th=ad.td;
if(!a.support.htmlSerialize){ad._default=[1,"div<div>","</div>"]}a.fn.extend({text:function(aZ){if(a.isFunction(aZ)){return this.each(function(a1){var a0=a(this);
a0.text(aZ.call(this,a1,a0.text()))})}if(typeof aZ!=="object"&&aZ!==D){return this.empty().append((this[0]&&this[0].ownerDocument||ac).createTextNode(aZ))
}return a.text(this)},wrapAll:function(aZ){if(a.isFunction(aZ)){return this.each(function(a1){a(this).wrapAll(aZ.call(this,a1))
})}if(this[0]){var a0=a(aZ,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){a0.insertBefore(this[0])
}a0.map(function(){var a1=this;while(a1.firstChild&&a1.firstChild.nodeType===1){a1=a1.firstChild
}return a1}).append(this)}return this},wrapInner:function(aZ){if(a.isFunction(aZ)){return this.each(function(a0){a(this).wrapInner(aZ.call(this,a0))
})}return this.each(function(){var a0=a(this),a1=a0.contents();if(a1.length){a1.wrapAll(aZ)
}else{a0.append(aZ)}})},wrap:function(aZ){return this.each(function(){a(this).wrapAll(aZ)
})},unwrap:function(){return this.parent().each(function(){if(!a.nodeName(this,"body")){a(this).replaceWith(this.childNodes)
}}).end()},append:function(){return this.domManip(arguments,true,function(aZ){if(this.nodeType===1){this.appendChild(aZ)
}})},prepend:function(){return this.domManip(arguments,true,function(aZ){if(this.nodeType===1){this.insertBefore(aZ,this.firstChild)
}})},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(a0){this.parentNode.insertBefore(a0,this)
})}else{if(arguments.length){var aZ=a(arguments[0]);aZ.push.apply(aZ,this.toArray());
return this.pushStack(aZ,"before",arguments)}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(a0){this.parentNode.insertBefore(a0,this.nextSibling)
})}else{if(arguments.length){var aZ=this.pushStack(this,"after",arguments);aZ.push.apply(aZ,a(arguments[0]).toArray());
return aZ}}},remove:function(aZ,a2){for(var a0=0,a1;(a1=this[a0])!=null;a0++){if(!aZ||a.filter(aZ,[a1]).length){if(!a2&&a1.nodeType===1){a.cleanData(a1.getElementsByTagName("*"));
a.cleanData([a1])}if(a1.parentNode){a1.parentNode.removeChild(a1)}}}return this},empty:function(){for(var aZ=0,a0;
(a0=this[aZ])!=null;aZ++){if(a0.nodeType===1){a.cleanData(a0.getElementsByTagName("*"))
}while(a0.firstChild){a0.removeChild(a0.firstChild)}}return this},clone:function(a0){var aZ=this.map(function(){if(!a.support.noCloneEvent&&!a.isXMLDoc(this)){var a2=this.outerHTML,a1=this.ownerDocument;
if(!a2){var a3=a1.createElement("div");a3.appendChild(this.cloneNode(true));a2=a3.innerHTML
}return a.clean([a2.replace(U,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(aa,"")],a1)[0]
}else{return this.cloneNode(true)}});if(a0===true){r(this,aZ);r(this.find("*"),aZ.find("*"))
}return aZ},html:function(a1){if(a1===D){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(U,""):null
}else{if(typeof a1==="string"&&!F.test(a1)&&(a.support.leadingWhitespace||!aa.test(a1))&&!ad[(c.exec(a1)||["",""])[1].toLowerCase()]){a1=a1.replace(I,q);
try{for(var a0=0,aZ=this.length;a0<aZ;a0++){if(this[a0].nodeType===1){a.cleanData(this[a0].getElementsByTagName("*"));
this[a0].innerHTML=a1}}}catch(a2){this.empty().append(a1)}}else{if(a.isFunction(a1)){this.each(function(a5){var a4=a(this),a3=a4.html();
a4.empty().append(function(){return a1.call(this,a5,a3)})})}else{this.empty().append(a1)
}}}return this},replaceWith:function(aZ){if(this[0]&&this[0].parentNode){if(a.isFunction(aZ)){return this.each(function(a2){var a1=a(this),a0=a1.html();
a1.replaceWith(aZ.call(this,a2,a0))})}if(typeof aZ!=="string"){aZ=a(aZ).detach()}return this.each(function(){var a1=this.nextSibling,a0=this.parentNode;
a(this).remove();if(a1){a(a1).before(aZ)}else{a(a0).append(aZ)}})}else{return this.pushStack(a(a.isFunction(aZ)?aZ():aZ),"replaceWith",aZ)
}},detach:function(aZ){return this.remove(aZ,true)},domManip:function(a5,ba,a9){var a2,a3,a8=a5[0],a0=[],a4,a7;
if(!a.support.checkClone&&arguments.length===3&&typeof a8==="string"&&m.test(a8)){return this.each(function(){a(this).domManip(a5,ba,a9,true)
})}if(a.isFunction(a8)){return this.each(function(bc){var bb=a(this);a5[0]=a8.call(this,bc,ba?bb.html():D);
bb.domManip(a5,ba,a9)})}if(this[0]){a7=a8&&a8.parentNode;if(a.support.parentNode&&a7&&a7.nodeType===11&&a7.childNodes.length===this.length){a2={fragment:a7}
}else{a2=K(a5,this,a0)}a4=a2.fragment;if(a4.childNodes.length===1){a3=a4=a4.firstChild
}else{a3=a4.firstChild}if(a3){ba=ba&&a.nodeName(a3,"tr");for(var a1=0,aZ=this.length;
a1<aZ;a1++){a9.call(ba?a6(this[a1],a3):this[a1],a1>0||a2.cacheable||this.length>1?a4.cloneNode(true):a4)
}}if(a0.length){a.each(a0,aW)}}return this;function a6(bb,bc){return a.nodeName(bb,"table")?(bb.getElementsByTagName("tbody")[0]||bb.appendChild(bb.ownerDocument.createElement("tbody"))):bb
}}});function r(a1,aZ){var a0=0;aZ.each(function(){if(this.nodeName!==(a1[a0]&&a1[a0].nodeName)){return
}var a6=a.data(a1[a0++]),a5=a.data(this,a6),a2=a6&&a6.events;if(a2){delete a5.handle;
a5.events={};for(var a4 in a2){for(var a3 in a2[a4]){a.event.add(this,a4,a2[a4][a3],a2[a4][a3].data)
}}}})}function K(a4,a2,a0){var a3,aZ,a1,a5=(a2&&a2[0]?a2[0].ownerDocument||a2[0]:ac);
if(a4.length===1&&typeof a4[0]==="string"&&a4[0].length<512&&a5===ac&&!F.test(a4[0])&&(a.support.checkClone||!m.test(a4[0]))){aZ=true;
a1=a.fragments[a4[0]];if(a1){if(a1!==1){a3=a1}}}if(!a3){a3=a5.createDocumentFragment();
a.clean(a4,a5,a3,a0)}if(aZ){a.fragments[a4[0]]=a1?a3:1}return{fragment:a3,cacheable:aZ}
}a.fragments={};a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(aZ,a0){a.fn[aZ]=function(a1){var a4=[],a7=a(a1),a6=this.length===1&&this[0].parentNode;
if(a6&&a6.nodeType===11&&a6.childNodes.length===1&&a7.length===1){a7[a0](this[0]);
return this}else{for(var a5=0,a2=a7.length;a5<a2;a5++){var a3=(a5>0?this.clone(true):this).get();
a.fn[a0].apply(a(a7[a5]),a3);a4=a4.concat(a3)}return this.pushStack(a4,aZ,a7.selector)
}}});a.extend({clean:function(a1,a3,ba,a5){a3=a3||ac;if(typeof a3.createElement==="undefined"){a3=a3.ownerDocument||a3[0]&&a3[0].ownerDocument||ac
}var bb=[];for(var a9=0,a4;(a4=a1[a9])!=null;a9++){if(typeof a4==="number"){a4+=""
}if(!a4){continue}if(typeof a4==="string"&&!M.test(a4)){a4=a3.createTextNode(a4)}else{if(typeof a4==="string"){a4=a4.replace(I,q);
var bc=(c.exec(a4)||["",""])[1].toLowerCase(),a2=ad[bc]||ad._default,a8=a2[0],a0=a3.createElement("div");
a0.innerHTML=a2[1]+a4+a2[2];while(a8--){a0=a0.lastChild}if(!a.support.tbody){var aZ=u.test(a4),a7=bc==="table"&&!aZ?a0.firstChild&&a0.firstChild.childNodes:a2[1]==="<table>"&&!aZ?a0.childNodes:[];
for(var a6=a7.length-1;a6>=0;--a6){if(a.nodeName(a7[a6],"tbody")&&!a7[a6].childNodes.length){a7[a6].parentNode.removeChild(a7[a6])
}}}if(!a.support.leadingWhitespace&&aa.test(a4)){a0.insertBefore(a3.createTextNode(aa.exec(a4)[0]),a0.firstChild)
}a4=a0.childNodes}}if(a4.nodeType){bb.push(a4)}else{bb=a.merge(bb,a4)}}if(ba){for(var a9=0;
bb[a9];a9++){if(a5&&a.nodeName(bb[a9],"script")&&(!bb[a9].type||bb[a9].type.toLowerCase()==="text/javascript")){a5.push(bb[a9].parentNode?bb[a9].parentNode.removeChild(bb[a9]):bb[a9])
}else{if(bb[a9].nodeType===1){bb.splice.apply(bb,[a9+1,0].concat(a.makeArray(bb[a9].getElementsByTagName("script"))))
}ba.appendChild(bb[a9])}}}return bb},cleanData:function(a0){var a3,a1,aZ=a.cache,a6=a.event.special,a5=a.support.deleteExpando;
for(var a4=0,a2;(a2=a0[a4])!=null;a4++){a1=a2[a.expando];if(a1){a3=aZ[a1];if(a3.events){for(var a7 in a3.events){if(a6[a7]){a.event.remove(a2,a7)
}else{ah(a2,a7,a3.handle)}}}if(a5){delete a2[a.expando]}else{if(a2.removeAttribute){a2.removeAttribute(a.expando)
}}delete aZ[a1]}}}});var at=/z-?index|font-?weight|opacity|zoom|line-?height/i,V=/alpha\([^)]*\)/,ab=/opacity=([^)]*)/,ai=/float/i,aA=/-([a-z])/ig,w=/([A-Z])/g,aP=/^-?\d+(?:px)?$/i,aV=/^-?\d/,aL={position:"absolute",visibility:"hidden",display:"block"},X=["Left","Right"],aF=["Top","Bottom"],al=ac.defaultView&&ac.defaultView.getComputedStyle,aO=a.support.cssFloat?"cssFloat":"styleFloat",l=function(aZ,a0){return a0.toUpperCase()
};a.fn.css=function(aZ,a0){return ao(this,aZ,a0,true,function(a2,a1,a3){if(a3===D){return a.curCSS(a2,a1)
}if(typeof a3==="number"&&!at.test(a1)){a3+="px"}a.style(a2,a1,a3)})};a.extend({style:function(a3,a0,a4){if(!a3||a3.nodeType===3||a3.nodeType===8){return D
}if((a0==="width"||a0==="height")&&parseFloat(a4)<0){a4=D}var a2=a3.style||a3,a5=a4!==D;
if(!a.support.opacity&&a0==="opacity"){if(a5){a2.zoom=1;var aZ=parseInt(a4,10)+""==="NaN"?"":"alpha(opacity="+a4*100+")";
var a1=a2.filter||a.curCSS(a3,"filter")||"";a2.filter=V.test(a1)?a1.replace(V,aZ):aZ
}return a2.filter&&a2.filter.indexOf("opacity=")>=0?(parseFloat(ab.exec(a2.filter)[1])/100)+"":""
}if(ai.test(a0)){a0=aO}a0=a0.replace(aA,l);if(a5){a2[a0]=a4}return a2[a0]},css:function(a2,a0,a4,aZ){if(a0==="width"||a0==="height"){var a6,a1=aL,a5=a0==="width"?X:aF;
function a3(){a6=a0==="width"?a2.offsetWidth:a2.offsetHeight;if(aZ==="border"){return
}a.each(a5,function(){if(!aZ){a6-=parseFloat(a.curCSS(a2,"padding"+this,true))||0
}if(aZ==="margin"){a6+=parseFloat(a.curCSS(a2,"margin"+this,true))||0}else{a6-=parseFloat(a.curCSS(a2,"border"+this+"Width",true))||0
}})}if(a2.offsetWidth!==0){a3()}else{a.swap(a2,a1,a3)}return Math.max(0,Math.round(a6))
}return a.curCSS(a2,a0,a4)},curCSS:function(a5,a0,a1){var a8,aZ=a5.style,a2;if(!a.support.opacity&&a0==="opacity"&&a5.currentStyle){a8=ab.test(a5.currentStyle.filter||"")?(parseFloat(RegExp.$1)/100)+"":"";
return a8===""?"1":a8}if(ai.test(a0)){a0=aO}if(!a1&&aZ&&aZ[a0]){a8=aZ[a0]}else{if(al){if(ai.test(a0)){a0="float"
}a0=a0.replace(w,"-$1").toLowerCase();var a7=a5.ownerDocument.defaultView;if(!a7){return null
}var a9=a7.getComputedStyle(a5,null);if(a9){a8=a9.getPropertyValue(a0)}if(a0==="opacity"&&a8===""){a8="1"
}}else{if(a5.currentStyle){var a4=a0.replace(aA,l);a8=a5.currentStyle[a0]||a5.currentStyle[a4];
if(!aP.test(a8)&&aV.test(a8)){var a3=aZ.left,a6=a5.runtimeStyle.left;a5.runtimeStyle.left=a5.currentStyle.left;
aZ.left=a4==="fontSize"?"1em":(a8||0);a8=aZ.pixelLeft+"px";aZ.left=a3;a5.runtimeStyle.left=a6
}}}}return a8},swap:function(a2,a1,a3){var aZ={};for(var a0 in a1){aZ[a0]=a2.style[a0];
a2.style[a0]=a1[a0]}a3.call(a2);for(var a0 in a1){a2.style[a0]=aZ[a0]}}});if(a.expr&&a.expr.filters){a.expr.filters.hidden=function(a2){var a0=a2.offsetWidth,aZ=a2.offsetHeight,a1=a2.nodeName.toLowerCase()==="tr";
return a0===0&&aZ===0&&!a1?true:a0>0&&aZ>0&&!a1?false:a.curCSS(a2,"display")==="none"
};a.expr.filters.visible=function(aZ){return !a.expr.filters.hidden(aZ)}}var ag=aQ(),aK=/<script(.|\s)*?\/script>/gi,p=/select|textarea/i,aC=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,s=/=\?(&|$)/,E=/\?/,aY=/(\?|&)_=.*?(&|$)/,C=/^(\w+:)?\/\/([^\/?#]+)/,h=/%20/g,x=a.fn.load;
a.fn.extend({load:function(a1,a4,a5){if(typeof a1!=="string"){return x.call(this,a1)
}else{if(!this.length){return this}}var a3=a1.indexOf(" ");if(a3>=0){var aZ=a1.slice(a3,a1.length);
a1=a1.slice(0,a3)}var a2="GET";if(a4){if(a.isFunction(a4)){a5=a4;a4=null}else{if(typeof a4==="object"){a4=a.param(a4,a.ajaxSettings.traditional);
a2="POST"}}}var a0=this;a.ajax({url:a1,type:a2,dataType:"html",data:a4,complete:function(a7,a6){if(a6==="success"||a6==="notmodified"){a0.html(aZ?a("<div />").append(a7.responseText.replace(aK,"")).find(aZ):a7.responseText)
}if(a5){a0.each(a5,[a7.responseText,a6,a7])}}});return this},serialize:function(){return a.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){return this.elements?a.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||p.test(this.nodeName)||aC.test(this.type))
}).map(function(aZ,a0){var a1=a(this).val();return a1==null?null:a.isArray(a1)?a.map(a1,function(a3,a2){return{name:a0.name,value:a3}
}):{name:a0.name,value:a1}}).get()}});a.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(aZ,a0){a.fn[a0]=function(a1){return this.bind(a0,a1)
}});a.extend({get:function(aZ,a1,a2,a0){if(a.isFunction(a1)){a0=a0||a2;a2=a1;a1=null
}return a.ajax({type:"GET",url:aZ,data:a1,success:a2,dataType:a0})},getScript:function(aZ,a0){return a.get(aZ,null,a0,"script")
},getJSON:function(aZ,a0,a1){return a.get(aZ,a0,a1,"json")},post:function(aZ,a1,a2,a0){if(a.isFunction(a1)){a0=a0||a2;
a2=a1;a1={}}return a.ajax({type:"POST",url:aZ,data:a1,success:a2,dataType:a0})},ajaxSetup:function(aZ){a.extend(a.ajaxSettings,aZ)
},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:aN.XMLHttpRequest&&(aN.location.protocol!=="file:"||!aN.ActiveXObject)?function(){return new aN.XMLHttpRequest()
}:function(){try{return new aN.ActiveXObject("Microsoft.XMLHTTP")}catch(aZ){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(be){var a9=a.extend(true,{},a.ajaxSettings,be);
var bj,bd,bi,bk=be&&be.context||a9,a1=a9.type.toUpperCase();if(a9.data&&a9.processData&&typeof a9.data!=="string"){a9.data=a.param(a9.data,a9.traditional)
}if(a9.dataType==="jsonp"){if(a1==="GET"){if(!s.test(a9.url)){a9.url+=(E.test(a9.url)?"&":"?")+(a9.jsonp||"callback")+"=?"
}}else{if(!a9.data||!s.test(a9.data)){a9.data=(a9.data?a9.data+"&":"")+(a9.jsonp||"callback")+"=?"
}}a9.dataType="json"}if(a9.dataType==="json"&&(a9.data&&s.test(a9.data)||s.test(a9.url))){bj=a9.jsonpCallback||("jsonp"+ag++);
if(a9.data){a9.data=(a9.data+"").replace(s,"="+bj+"$1")}a9.url=a9.url.replace(s,"="+bj+"$1");
a9.dataType="script";aN[bj]=aN[bj]||function(bl){bi=bl;a4();a7();aN[bj]=D;try{delete aN[bj]
}catch(bm){}if(a2){a2.removeChild(bg)}}}if(a9.dataType==="script"&&a9.cache===null){a9.cache=false
}if(a9.cache===false&&a1==="GET"){var aZ=aQ();var bh=a9.url.replace(aY,"$1_="+aZ+"$2");
a9.url=bh+((bh===a9.url)?(E.test(a9.url)?"&":"?")+"_="+aZ:"")}if(a9.data&&a1==="GET"){a9.url+=(E.test(a9.url)?"&":"?")+a9.data
}if(a9.global&&!a.active++){a.event.trigger("ajaxStart")}var bc=C.exec(a9.url),a3=bc&&(bc[1]&&bc[1]!==location.protocol||bc[2]!==location.host);
if(a9.dataType==="script"&&a1==="GET"&&a3){var a2=ac.getElementsByTagName("head")[0]||ac.documentElement;
var bg=ac.createElement("script");bg.src=a9.url;if(a9.scriptCharset){bg.charset=a9.scriptCharset
}if(!bj){var bb=false;bg.onload=bg.onreadystatechange=function(){if(!bb&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){bb=true;
a4();a7();bg.onload=bg.onreadystatechange=null;if(a2&&bg.parentNode){a2.removeChild(bg)
}}}}a2.insertBefore(bg,a2.firstChild);return D}var a6=false;var a5=a9.xhr();if(!a5){return
}if(a9.username){a5.open(a1,a9.url,a9.async,a9.username,a9.password)}else{a5.open(a1,a9.url,a9.async)
}try{if(a9.data||be&&be.contentType){a5.setRequestHeader("Content-Type",a9.contentType)
}if(a9.ifModified){if(a.lastModified[a9.url]){a5.setRequestHeader("If-Modified-Since",a.lastModified[a9.url])
}if(a.etag[a9.url]){a5.setRequestHeader("If-None-Match",a.etag[a9.url])}}if(!a3){a5.setRequestHeader("X-Requested-With","XMLHttpRequest")
}a5.setRequestHeader("Accept",a9.dataType&&a9.accepts[a9.dataType]?a9.accepts[a9.dataType]+", */*":a9.accepts._default)
}catch(bf){}if(a9.beforeSend&&a9.beforeSend.call(bk,a5,a9)===false){if(a9.global&&!--a.active){a.event.trigger("ajaxStop")
}a5.abort();return false}if(a9.global){ba("ajaxSend",[a5,a9])}var a8=a5.onreadystatechange=function(bl){if(!a5||a5.readyState===0||bl==="abort"){if(!a6){a7()
}a6=true;if(a5){a5.onreadystatechange=a.noop}}else{if(!a6&&a5&&(a5.readyState===4||bl==="timeout")){a6=true;
a5.onreadystatechange=a.noop;bd=bl==="timeout"?"timeout":!a.httpSuccess(a5)?"error":a9.ifModified&&a.httpNotModified(a5,a9.url)?"notmodified":"success";
var bn;if(bd==="success"){try{bi=a.httpData(a5,a9.dataType,a9)}catch(bm){bd="parsererror";
bn=bm}}if(bd==="success"||bd==="notmodified"){if(!bj){a4()}}else{a.handleError(a9,a5,bd,bn)
}a7();if(bl==="timeout"){a5.abort()}if(a9.async){a5=null}}}};try{var a0=a5.abort;
a5.abort=function(){if(a5){a0.call(a5)}a8("abort")}}catch(bf){}if(a9.async&&a9.timeout>0){setTimeout(function(){if(a5&&!a6){a8("timeout")
}},a9.timeout)}try{a5.send(a1==="POST"||a1==="PUT"||a1==="DELETE"?a9.data:null)}catch(bf){a.handleError(a9,a5,null,bf);
a7()}if(!a9.async){a8()}function a4(){if(a9.success){a9.success.call(bk,bi,bd,a5)
}if(a9.global){ba("ajaxSuccess",[a5,a9])}}function a7(){if(a9.complete){a9.complete.call(bk,a5,bd)
}if(a9.global){ba("ajaxComplete",[a5,a9])}if(a9.global&&!--a.active){a.event.trigger("ajaxStop")
}}function ba(bm,bl){(a9.context?a(a9.context):a.event).trigger(bm,bl)}return a5},handleError:function(a0,a2,aZ,a1){if(a0.error){a0.error.call(a0.context||a0,a2,aZ,a1)
}if(a0.global){(a0.context?a(a0.context):a.event).trigger("ajaxError",[a2,a0,a1])
}},active:0,httpSuccess:function(a0){try{return !a0.status&&location.protocol==="file:"||(a0.status>=200&&a0.status<300)||a0.status===304||a0.status===1223||a0.status===0
}catch(aZ){}return false},httpNotModified:function(a2,aZ){var a1=a2.getResponseHeader("Last-Modified"),a0=a2.getResponseHeader("Etag");
if(a1){a.lastModified[aZ]=a1}if(a0){a.etag[aZ]=a0}return a2.status===304||a2.status===0
},httpData:function(a4,a2,a1){var a0=a4.getResponseHeader("content-type")||"",aZ=a2==="xml"||!a2&&a0.indexOf("xml")>=0,a3=aZ?a4.responseXML:a4.responseText;
if(aZ&&a3.documentElement.nodeName==="parsererror"){a.error("parsererror")}if(a1&&a1.dataFilter){a3=a1.dataFilter(a3,a2)
}if(typeof a3==="string"){if(a2==="json"||!a2&&a0.indexOf("json")>=0){a3=a.parseJSON(a3)
}else{if(a2==="script"||!a2&&a0.indexOf("javascript")>=0){a.globalEval(a3)}}}return a3
},param:function(aZ,a2){var a0=[];if(a2===D){a2=a.ajaxSettings.traditional}if(a.isArray(aZ)||aZ.jquery){a.each(aZ,function(){a4(this.name,this.value)
})}else{for(var a3 in aZ){a1(a3,aZ[a3])}}return a0.join("&").replace(h,"+");function a1(a5,a6){if(a.isArray(a6)){a.each(a6,function(a8,a7){if(a2||/\[\]$/.test(a5)){a4(a5,a7)
}else{a1(a5+"["+(typeof a7==="object"||a.isArray(a7)?a8:"")+"]",a7)}})}else{if(!a2&&a6!=null&&typeof a6==="object"){a.each(a6,function(a8,a7){a1(a5+"["+a8+"]",a7)
})}else{a4(a5,a6)}}}function a4(a5,a6){a6=a.isFunction(a6)?a6():a6;a0[a0.length]=encodeURIComponent(a5)+"="+encodeURIComponent(a6)
}}});var H={},af=/toggle|show|hide/,av=/^([+-]=)?([\d+-.]+)(.*)$/,aG,ak=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
a.fn.extend({show:function(a0,a8){if(a0||a0===0){return this.animate(aE("show",3),a0,a8)
}else{for(var a5=0,a2=this.length;a5<a2;a5++){var aZ=a.data(this[a5],"olddisplay");
this[a5].style.display=aZ||"";if(a.css(this[a5],"display")==="none"){var a7=this[a5].nodeName,a6;
if(H[a7]){a6=H[a7]}else{var a1=a("<"+a7+" />").appendTo("body");a6=a1.css("display");
if(a6==="none"){a6="block"}a1.remove();H[a7]=a6}a.data(this[a5],"olddisplay",a6)}}for(var a4=0,a3=this.length;
a4<a3;a4++){this[a4].style.display=a.data(this[a4],"olddisplay")||""}return this}},hide:function(a4,a5){if(a4||a4===0){return this.animate(aE("hide",3),a4,a5)
}else{for(var a3=0,a0=this.length;a3<a0;a3++){var aZ=a.data(this[a3],"olddisplay");
if(!aZ&&aZ!=="none"){a.data(this[a3],"olddisplay",a.css(this[a3],"display"))}}for(var a2=0,a1=this.length;
a2<a1;a2++){this[a2].style.display="none"}return this}},_toggle:a.fn.toggle,toggle:function(a1,a0){var aZ=typeof a1==="boolean";
if(a.isFunction(a1)&&a.isFunction(a0)){this._toggle.apply(this,arguments)}else{if(a1==null||aZ){this.each(function(){var a2=aZ?a1:a(this).is(":hidden");
a(this)[a2?"show":"hide"]()})}else{this.animate(aE("toggle",3),a1,a0)}}return this
},fadeTo:function(aZ,a1,a0){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:a1},aZ,a0)
},animate:function(a3,a0,a2,a1){var aZ=a.speed(a0,a2,a1);if(a.isEmptyObject(a3)){return this.each(aZ.complete)
}return this[aZ.queue===false?"each":"queue"](function(){var a6=a.extend({},aZ),a8,a7=this.nodeType===1&&a(this).is(":hidden"),a4=this;
for(a8 in a3){var a5=a8.replace(aA,l);if(a8!==a5){a3[a5]=a3[a8];delete a3[a8];a8=a5
}if(a3[a8]==="hide"&&a7||a3[a8]==="show"&&!a7){return a6.complete.call(this)}if((a8==="height"||a8==="width")&&this.style){a6.display=a.css(this,"display");
a6.overflow=this.style.overflow}if(a.isArray(a3[a8])){(a6.specialEasing=a6.specialEasing||{})[a8]=a3[a8][1];
a3[a8]=a3[a8][0]}}if(a6.overflow!=null){this.style.overflow="hidden"}a6.curAnim=a.extend({},a3);
a.each(a3,function(ba,be){var bd=new a.fx(a4,a6,ba);if(af.test(be)){bd[be==="toggle"?a7?"show":"hide":be](a3)
}else{var bc=av.exec(be),bf=bd.cur(true)||0;if(bc){var a9=parseFloat(bc[2]),bb=bc[3]||"px";
if(bb!=="px"){a4.style[ba]=(a9||1)+bb;bf=((a9||1)/bd.cur(true))*bf;a4.style[ba]=bf+bb
}if(bc[1]){a9=((bc[1]==="-="?-1:1)*a9)+bf}bd.custom(bf,a9,bb)}else{bd.custom(bf,be,"")
}}});return true})},stop:function(a0,aZ){var a1=a.timers;if(a0){this.queue([])}this.each(function(){for(var a2=a1.length-1;
a2>=0;a2--){if(a1[a2].elem===this){if(aZ){a1[a2](true)}a1.splice(a2,1)}}});if(!aZ){this.dequeue()
}return this}});a.each({slideDown:aE("show",1),slideUp:aE("hide",1),slideToggle:aE("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(aZ,a0){a.fn[aZ]=function(a1,a2){return this.animate(a0,a1,a2)
}});a.extend({speed:function(a1,a2,a0){var aZ=a1&&typeof a1==="object"?a1:{complete:a0||!a0&&a2||a.isFunction(a1)&&a1,duration:a1,easing:a0&&a2||a2&&!a.isFunction(a2)&&a2};
aZ.duration=a.fx.off?0:typeof aZ.duration==="number"?aZ.duration:a.fx.speeds[aZ.duration]||a.fx.speeds._default;
aZ.old=aZ.complete;aZ.complete=function(){if(aZ.queue!==false){a(this).dequeue()}if(a.isFunction(aZ.old)){aZ.old.call(this)
}};return aZ},easing:{linear:function(a1,a2,aZ,a0){return aZ+a0*a1},swing:function(a1,a2,aZ,a0){return((-Math.cos(a1*Math.PI)/2)+0.5)*a0+aZ
}},timers:[],fx:function(a0,aZ,a1){this.options=aZ;this.elem=a0;this.prop=a1;if(!aZ.orig){aZ.orig={}
}}});a.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)
}(a.fx.step[this.prop]||a.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style){this.elem.style.display="block"
}},cur:function(a0){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]
}var aZ=parseFloat(a.css(this.elem,this.prop,a0));return aZ&&aZ>-10000?aZ:parseFloat(a.curCSS(this.elem,this.prop))||0
},custom:function(a3,a2,a1){this.startTime=aQ();this.start=a3;this.end=a2;this.unit=a1||this.unit||"px";
this.now=this.start;this.pos=this.state=0;var aZ=this;function a0(a4){return aZ.step(a4)
}a0.elem=this.elem;if(a0()&&a.timers.push(a0)&&!aG){aG=setInterval(a.fx.tick,13)}},show:function(){this.options.orig[this.prop]=a.style(this.elem,this.prop);
this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());
a(this.elem).show()},hide:function(){this.options.orig[this.prop]=a.style(this.elem,this.prop);
this.options.hide=true;this.custom(this.cur(),0)},step:function(a2){var a7=aQ(),a3=true;
if(a2||a7>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;
this.update();this.options.curAnim[this.prop]=true;for(var a4 in this.options.curAnim){if(this.options.curAnim[a4]!==true){a3=false
}}if(a3){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;
var a1=a.data(this.elem,"olddisplay");this.elem.style.display=a1?a1:this.options.display;
if(a.css(this.elem,"display")==="none"){this.elem.style.display="block"}}if(this.options.hide){a(this.elem).hide()
}if(this.options.hide||this.options.show){for(var aZ in this.options.curAnim){a.style(this.elem,aZ,this.options.orig[aZ])
}}this.options.complete.call(this.elem)}return false}else{var a0=a7-this.startTime;
this.state=a0/this.options.duration;var a5=this.options.specialEasing&&this.options.specialEasing[this.prop];
var a6=this.options.easing||(a.easing.swing?"swing":"linear");this.pos=a.easing[a5||a6](this.state,a0,0,1,this.options.duration);
this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};
a.extend(a.fx,{tick:function(){var a0=a.timers;for(var aZ=0;aZ<a0.length;aZ++){if(!a0[aZ]()){a0.splice(aZ--,1)
}}if(!a0.length){a.fx.stop()}},stop:function(){clearInterval(aG);aG=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(aZ){a.style(aZ.elem,"opacity",aZ.now)
},_default:function(aZ){if(aZ.elem.style&&aZ.elem.style[aZ.prop]!=null){aZ.elem.style[aZ.prop]=(aZ.prop==="width"||aZ.prop==="height"?Math.max(0,aZ.now):aZ.now)+aZ.unit
}else{aZ.elem[aZ.prop]=aZ.now}}}});if(a.expr&&a.expr.filters){a.expr.filters.animated=function(aZ){return a.grep(a.timers,function(a0){return aZ===a0.elem
}).length}}function aE(a0,aZ){var a1={};a.each(ak.concat.apply([],ak.slice(0,aZ)),function(){a1[this]=a0
});return a1}if("getBoundingClientRect" in ac.documentElement){a.fn.offset=function(a8){var a1=this[0];
if(a8){return this.each(function(a9){a.offset.setOffset(this,a8,a9)})}if(!a1||!a1.ownerDocument){return null
}if(a1===a1.ownerDocument.body){return a.offset.bodyOffset(a1)}var a3=a1.getBoundingClientRect(),a7=a1.ownerDocument,a4=a7.body,aZ=a7.documentElement,a2=aZ.clientTop||a4.clientTop||0,a5=aZ.clientLeft||a4.clientLeft||0,a6=a3.top+(self.pageYOffset||a.support.boxModel&&aZ.scrollTop||a4.scrollTop)-a2,a0=a3.left+(self.pageXOffset||a.support.boxModel&&aZ.scrollLeft||a4.scrollLeft)-a5;
return{top:a6,left:a0}}}else{a.fn.offset=function(ba){var a4=this[0];if(ba){return this.each(function(bb){a.offset.setOffset(this,ba,bb)
})}if(!a4||!a4.ownerDocument){return null}if(a4===a4.ownerDocument.body){return a.offset.bodyOffset(a4)
}a.offset.initialize();var a1=a4.offsetParent,a0=a4,a9=a4.ownerDocument,a7,a2=a9.documentElement,a5=a9.body,a6=a9.defaultView,aZ=a6?a6.getComputedStyle(a4,null):a4.currentStyle,a8=a4.offsetTop,a3=a4.offsetLeft;
while((a4=a4.parentNode)&&a4!==a5&&a4!==a2){if(a.offset.supportsFixedPosition&&aZ.position==="fixed"){break
}a7=a6?a6.getComputedStyle(a4,null):a4.currentStyle;a8-=a4.scrollTop;a3-=a4.scrollLeft;
if(a4===a1){a8+=a4.offsetTop;a3+=a4.offsetLeft;if(a.offset.doesNotAddBorder&&!(a.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(a4.nodeName))){a8+=parseFloat(a7.borderTopWidth)||0;
a3+=parseFloat(a7.borderLeftWidth)||0}a0=a1,a1=a4.offsetParent}if(a.offset.subtractsBorderForOverflowNotVisible&&a7.overflow!=="visible"){a8+=parseFloat(a7.borderTopWidth)||0;
a3+=parseFloat(a7.borderLeftWidth)||0}aZ=a7}if(aZ.position==="relative"||aZ.position==="static"){a8+=a5.offsetTop;
a3+=a5.offsetLeft}if(a.offset.supportsFixedPosition&&aZ.position==="fixed"){a8+=Math.max(a2.scrollTop,a5.scrollTop);
a3+=Math.max(a2.scrollLeft,a5.scrollLeft)}return{top:a8,left:a3}}}a.offset={initialize:function(){var aZ=ac.body,a0=ac.createElement("div"),a3,a5,a4,a6,a1=parseFloat(a.curCSS(aZ,"marginTop",true))||0,a2="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.extend(a0.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});
a0.innerHTML=a2;aZ.insertBefore(a0,aZ.firstChild);a3=a0.firstChild;a5=a3.firstChild;
a6=a3.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(a5.offsetTop!==5);
this.doesAddBorderForTableAndCells=(a6.offsetTop===5);a5.style.position="fixed",a5.style.top="20px";
this.supportsFixedPosition=(a5.offsetTop===20||a5.offsetTop===15);a5.style.position=a5.style.top="";
a3.style.overflow="hidden",a3.style.position="relative";this.subtractsBorderForOverflowNotVisible=(a5.offsetTop===-5);
this.doesNotIncludeMarginInBodyOffset=(aZ.offsetTop!==a1);aZ.removeChild(a0);aZ=a0=a3=a5=a4=a6=null;
a.offset.initialize=a.noop},bodyOffset:function(aZ){var a1=aZ.offsetTop,a0=aZ.offsetLeft;
a.offset.initialize();if(a.offset.doesNotIncludeMarginInBodyOffset){a1+=parseFloat(a.curCSS(aZ,"marginTop",true))||0;
a0+=parseFloat(a.curCSS(aZ,"marginLeft",true))||0}return{top:a1,left:a0}},setOffset:function(a4,a0,a1){if(/static/.test(a.curCSS(a4,"position"))){a4.style.position="relative"
}var a3=a(a4),a6=a3.offset(),aZ=parseInt(a.curCSS(a4,"top",true),10)||0,a5=parseInt(a.curCSS(a4,"left",true),10)||0;
if(a.isFunction(a0)){a0=a0.call(a4,a1,a6)}var a2={top:(a0.top-a6.top)+aZ,left:(a0.left-a6.left)+a5};
if("using" in a0){a0.using.call(a4,a2)}else{a3.css(a2)}}};a.fn.extend({position:function(){if(!this[0]){return null
}var a1=this[0],a0=this.offsetParent(),a2=this.offset(),aZ=/^body|html$/i.test(a0[0].nodeName)?{top:0,left:0}:a0.offset();
a2.top-=parseFloat(a.curCSS(a1,"marginTop",true))||0;a2.left-=parseFloat(a.curCSS(a1,"marginLeft",true))||0;
aZ.top+=parseFloat(a.curCSS(a0[0],"borderTopWidth",true))||0;aZ.left+=parseFloat(a.curCSS(a0[0],"borderLeftWidth",true))||0;
return{top:a2.top-aZ.top,left:a2.left-aZ.left}},offsetParent:function(){return this.map(function(){var aZ=this.offsetParent||ac.body;
while(aZ&&(!/^body|html$/i.test(aZ.nodeName)&&a.css(aZ,"position")==="static")){aZ=aZ.offsetParent
}return aZ})}});a.each(["Left","Top"],function(a0,aZ){var a1="scroll"+aZ;a.fn[a1]=function(a4){var a2=this[0],a3;
if(!a2){return null}if(a4!==D){return this.each(function(){a3=an(this);if(a3){a3.scrollTo(!a0?a4:a(a3).scrollLeft(),a0?a4:a(a3).scrollTop())
}else{this[a1]=a4}})}else{a3=an(a2);return a3?("pageXOffset" in a3)?a3[a0?"pageYOffset":"pageXOffset"]:a.support.boxModel&&a3.document.documentElement[a1]||a3.document.body[a1]:a2[a1]
}}});function an(aZ){return("scrollTo" in aZ&&aZ.document)?aZ:aZ.nodeType===9?aZ.defaultView||aZ.parentWindow:false
}a.each(["Height","Width"],function(a0,aZ){var a1=aZ.toLowerCase();a.fn["inner"+aZ]=function(){return this[0]?a.css(this[0],a1,false,"padding"):null
};a.fn["outer"+aZ]=function(a2){return this[0]?a.css(this[0],a1,false,a2?"margin":"border"):null
};a.fn[a1]=function(a2){var a3=this[0];if(!a3){return a2==null?null:this}if(a.isFunction(a2)){return this.each(function(a5){var a4=a(this);
a4[a1](a2.call(this,a5,a4[a1]()))})}return("scrollTo" in a3&&a3.document)?a3.document.compatMode==="CSS1Compat"&&a3.document.documentElement["client"+aZ]||a3.document.body["client"+aZ]:(a3.nodeType===9)?Math.max(a3.documentElement["client"+aZ],a3.body["scroll"+aZ],a3.documentElement["scroll"+aZ],a3.body["offset"+aZ],a3.documentElement["offset"+aZ]):a2===D?a.css(a3,a1):this.css(a1,typeof a2==="string"?a2:a2+"px")
}});aN.jQuery=aN.$=a})(window);if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/jquery");
/* @license
==========================================================================
SproutCore Costello -- Property Observing Library
Copyright ©2006-2009, Sprout Systems, Inc. and contributors.
Portions copyright ©2008-2009 Apple Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a 
copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the 
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in 
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
DEALINGS IN THE SOFTWARE.

For more information about SproutCore, visit http://www.sproutcore.com

==========================================================================
@license */
}var require=require||function require(){};
var sc_require=sc_require||require;var sc_resource=sc_resource||function sc_resource(){};
sc_require("license");var YES=true;var NO=false;if(typeof console==="undefined"){window.console={};
console.log=console.info=console.warn=console.error=function(){}}var SC=SC||{};var SproutCore=SproutCore||SC;
SC._baseMixin=function(c){var f=Array.prototype.slice.call(arguments,1),a,e=f[0]||{},g=1,d=f.length,j,b,h;
if(d===1){e=this||{};g=0}for(;g<d;g++){if(!(j=f[g])){continue}for(h in j){if(!j.hasOwnProperty(h)){continue
}b=j[h];if(e===b){continue}if(b!==undefined&&(c||(e[h]===undefined))){e[h]=b}}}return e
};SC.mixin=function(){var a=Array.prototype.slice.call(arguments);a.unshift(true);
return SC._baseMixin.apply(this,a)};SC.supplement=function(){var a=Array.prototype.slice.call(arguments);
a.unshift(false);return SC._baseMixin.apply(this,a)};SC.extend=SC.mixin;SC.mixin({T_ERROR:"error",T_OBJECT:"object",T_NULL:"null",T_CLASS:"class",T_HASH:"hash",T_FUNCTION:"function",T_UNDEFINED:"undefined",T_NUMBER:"number",T_BOOL:"boolean",T_ARRAY:"array",T_STRING:"string",typeOf:function(b){if(b===undefined){return SC.T_UNDEFINED
}if(b===null){return SC.T_NULL}var a=typeof(b);if(a=="object"){if(b instanceof Array){a=SC.T_ARRAY
}else{if(b instanceof Function){a=b.isClass?SC.T_CLASS:SC.T_FUNCTION}else{if(SC.Error&&(b instanceof SC.Error)){a=SC.T_ERROR
}else{if(b.isObject===true){a=SC.T_OBJECT}else{a=SC.T_HASH}}}}}else{if(a===SC.T_FUNCTION){a=(b.isClass)?SC.T_CLASS:SC.T_FUNCTION
}}return a},none:function(a){return a===null||a===undefined},empty:function(a){return a===null||a===undefined||a===""
},isArray:function(c){if(c&&c.objectAt){return YES}var a=(c?c.length:null),b=SC.typeOf(c);
return !(SC.none(a)||(b===SC.T_FUNCTION)||(b===SC.T_STRING)||c.setInterval)},makeArray:function(a){return SC.isArray(a)?a:SC.A(a)
},A:function(c){if(SC.none(c)){return[]}if(c.slice instanceof Function){if(typeof(c)==="string"){return[c]
}else{return c.slice()}}if(c.toArray){return c.toArray()}if(!SC.isArray(c)){return[c]
}var b=[],a=c.length;while(--a>=0){b[a]=c[a]}return b},guidKey:"_sc_guid_"+new Date().getTime(),_nextGUID:0,_numberGuids:[],_stringGuids:{},_keyCache:{},guidFor:function(b){if(b===undefined){return"(undefined)"
}if(b===null){return"(null)"}if(b===Object){return"(Object)"}if(b===Array){return"(Array)"
}var a=this.guidKey;if(b[a]){return b[a]}switch(typeof b){case SC.T_NUMBER:return(this._numberGuids[b]=this._numberGuids[b]||("nu"+b));
case SC.T_STRING:return(this._stringGuids[b]=this._stringGuids[b]||("st"+b));case SC.T_BOOL:return(b)?"(true)":"(false)";
default:return SC.generateGuid(b)}},keyFor:function(d,c){var b,a=this._keyCache[d];
if(!a){a=this._keyCache[d]={}}b=a[c];if(!b){b=a[c]=d+"_"+c}return b},generateGuid:function(b){var a=("sc"+(this._nextGUID++));
if(b){b[this.guidKey]=a}return a},hashFor:function(a){return(a&&a.hash&&(typeof a.hash===SC.T_FUNCTION))?a.hash():this.guidFor(a)
},isEqual:function(d,c){if(d===null){return c===null}else{if(d===undefined){return c===undefined
}else{return this.hashFor(d)===this.hashFor(c)}}},compare:function(s,p){if(s===p){return 0
}var j=SC.typeOf(s);var g=SC.typeOf(p);var b=SC.ORDER_DEFINITION_MAPPING;if(!b){var d=SC.ORDER_DEFINITION;
b=SC.ORDER_DEFINITION_MAPPING={};var q,n;for(q=0,n=d.length;q<n;++q){b[d[q]]=q}delete SC.ORDER_DEFINITION
}var t=b[j];var c=b[g];if(t<c){return -1}if(t>c){return 1}switch(j){case SC.T_BOOL:case SC.T_NUMBER:if(s<p){return -1
}if(s>p){return 1}return 0;case SC.T_STRING:var k=s.localeCompare(p);if(k<0){return -1
}if(k>0){return 1}return 0;case SC.T_ARRAY:var o=s.length;var m=p.length;var e=Math.min(o,m);
var a=0;var h=0;var f=arguments.callee;while(a===0&&h<e){a=f(s[h],p[h]);h++}if(a!==0){return a
}if(o<m){return -1}if(o>m){return 1}return 0;case SC.T_OBJECT:if(s.constructor.isComparable===YES){return s.constructor.compare(s,p)
}return 0;default:return 0}},K:function(){return this},EMPTY_ARRAY:[],EMPTY_HASH:{},EMPTY_RANGE:{start:0,length:0},beget:function(c){if(SC.none(c)){return null
}var a=SC.K;a.prototype=c;var b=new a();a.prototype=null;if(SC.typeOf(c.didBeget)===SC.T_FUNCTION){b=c.didBeget(b)
}return b},copy:function(b){var a=b;if(b&&b.isCopyable){return b.copy()}switch(SC.typeOf(b)){case SC.T_ARRAY:if(b.clone&&SC.typeOf(b.clone)===SC.T_FUNCTION){a=b.clone()
}else{a=b.slice()}break;case SC.T_HASH:case SC.T_OBJECT:if(b.clone&&SC.typeOf(b.clone)===SC.T_FUNCTION){a=b.clone()
}else{a={};for(var c in b){a[c]=b[c]}}}return a},merge:function(){var c={},b=arguments.length,a;
for(a=0;a<b;a++){SC.mixin(c,arguments[a])}return c},keys:function(c){var a=[];for(var b in c){a.push(b)
}return a},inspect:function(d){var a,b=[];for(var c in d){a=d[c];if(a==="toString"){continue
}if(SC.typeOf(a)===SC.T_FUNCTION){a="function() { ... }"}b.push(c+": "+a)}return"{"+b.join(" , ")+"}"
},tupleForPropertyPath:function(e,a){if(SC.typeOf(e)===SC.T_ARRAY){return e}var c;
var b=e.indexOf("*");if(b<0){b=e.lastIndexOf(".")}c=(b>=0)?e.slice(b+1):e;var d=this.objectForPropertyPath(e,a,b);
return(d&&c)?[d,c]:null},objectForPropertyPath:function(f,c,d){var g,b,e,a;if(!c){c=window
}if(SC.typeOf(f)===SC.T_STRING){if(d===undefined){d=f.length}g=0;while((c)&&(g<d)){b=f.indexOf(".",g);
if((b<0)||(b>d)){b=d}e=f.slice(g,b);c=c.get?c.get(e):c[e];g=b+1}if(g<d){c=undefined
}}else{g=0;a=f.length;e=null;while((g<a)&&c){e=f[g++];if(e){c=(c.get)?c.get(e):c[e]
}}if(g<a){c=undefined}}return c},STRINGS:{},stringsFor:function(b,a){SC.mixin(SC.STRINGS,a);
return this}});SC.clone=SC.copy;SC.$A=SC.A;SC.didLoad=SC.K;SC.ORDER_DEFINITION=[SC.T_ERROR,SC.T_UNDEFINED,SC.T_NULL,SC.T_BOOL,SC.T_NUMBER,SC.T_STRING,SC.T_ARRAY,SC.T_HASH,SC.T_OBJECT,SC.T_FUNCTION,SC.T_CLASS];
SC.mixin(Function.prototype,{property:function(){this.dependentKeys=SC.$A(arguments);
var a=SC.guidFor(this);this.cacheKey="__cache__"+a;this.lastSetValueKey="__lastValue__"+a;
this.isProperty=YES;return this},cacheable:function(a){this.isProperty=YES;if(!this.dependentKeys){this.dependentKeys=[]
}this.isCacheable=(a===undefined)?YES:a;return this},idempotent:function(a){this.isProperty=YES;
if(!this.dependentKeys){this.dependentKeys=[]}this.isVolatile=(a===undefined)?YES:a;
return this},observes:function(a){var e=arguments.length,b=null,d=null;while(--e>=0){var c=arguments[e];
if((c.indexOf(".")<0)&&(c.indexOf("*")<0)){if(!b){b=this.localPropertyPaths=[]}b.push(c)
}else{if(!d){d=this.propertyPaths=[]}d.push(c)}}return this}});String.prototype.fmt=function(){var b=arguments,a=0;
return this.replace(/%@([0-9]+)?/g,function(c,d){d=(d)?parseInt(d,0)-1:a++;c=b[d];
return((c===null)?"(null)":(c===undefined)?"":c).toString()})};String.prototype.loc=function(){var a=SC.STRINGS[this]||this;
return a.fmt.apply(a,arguments)};String.prototype.w=function(){var c=[],d=this.split(" "),b=d.length,e,a=0;
for(a=0;a<b;++a){e=d[a];if(e.length!==0){c.push(e)}}return c};if(!Date.now){Date.now=function(){return new Date().getTime()
}}SC.ObserverSet={targets:0,_membersCacheIsValid:NO,add:function(d,f,b){var c=(d)?SC.guidFor(d):"__this__";
var a=this[c];if(!a){a=this[c]=SC.CoreSet.create();a.target=d;a.isTargetSet=YES;this.targets++
}a.add(f);if(b!==undefined){var e=a.contexts;if(!e){e=a.contexts={}}e[SC.guidFor(f)]=b
}this._membersCacheIsValid=NO},remove:function(c,d){var b=(c)?SC.guidFor(c):"__this__";
var a=this[b];if(!a){return NO}a.remove(d);if(a.length<=0){a.target=null;a.isTargetSet=NO;
a.contexts=null;delete this[b];this.targets--}else{if(a.contexts){delete a.contexts[SC.guidFor(d)]
}}this._membersCacheIsValid=NO;return YES},invokeMethods:function(){var b,c,a,d,e;
for(b in this){if(!this.hasOwnProperty(b)){continue}c=this[b];if(c&&c.isTargetSet){a=c.length;
d=c.target;while(--a>=0){e=c[a];if(e){e.call(d)}}}}},getMembers:function(){if(this._membersCacheIsValid){return this._members
}if(!this._members){this._members=[]}else{this._members.length=0}var b=this._members;
for(var c in this){if(!this.hasOwnProperty(c)){continue}var d=this[c];if(d&&d.isTargetSet){var a=d.length;
var e=d.target;var g=d.contexts;if(g){while(--a>=0){var f=d[a];b.push([e,f,g[SC.guidFor(f)]])
}}else{while(--a>=0){b.push([e,d[a]])}}}}this._membersCacheIsValid=YES;return b},clone:function(){var b,d,c,a=SC.ObserverSet.create();
for(c in this){if(!this.hasOwnProperty(c)){continue}b=this[c];if(b&&b.isTargetSet){d=b.clone();
d.target=b.target;if(b.contexts){d.contexts=SC.clone(b.contexts)}a[c]=d}}a.targets=this.targets;
a._membersCacheIsValid=NO;return a},create:function(){return SC.beget(this)}};SC.ObserverSet.slice=SC.ObserverSet.clone;
require("private/observer_set");SC.LOG_OBSERVERS=NO;SC.Observable={isObservable:YES,automaticallyNotifiesObserversFor:function(a){return YES
},get:function(c){var b=this[c],a;if(b===undefined){return this.unknownProperty(c)
}else{if(b&&b.isProperty){if(b.isCacheable){a=this._kvo_cache;if(!a){a=this._kvo_cache={}
}return(a[b.cacheKey]!==undefined)?a[b.cacheKey]:(a[b.cacheKey]=b.call(this,c))}else{return b.call(this,c)
}}else{return b}}},set:function(h,f){var b=this[h],j=this.automaticallyNotifiesObserversFor(h),e=f,c,a,g,d;
if(!j&&this._kvo_cacheable&&(a=this._kvo_cache)){c=this._kvo_cachedep;if(!c||(c=c[h])===undefined){c=this._kvo_computeCachedDependentsFor(h)
}if(c){g=c.length;while(--g>=0){d=c[g];a[d.cacheKey]=a[d.lastSetValueKey]=undefined
}}}if(b&&b.isProperty){a=this._kvo_cache;if(b.isVolatile||!a||(a[b.lastSetValueKey]!==f)){if(!a){a=this._kvo_cache={}
}a[b.lastSetValueKey]=f;if(j){this.propertyWillChange(h)}e=b.call(this,h,f);if(b.isCacheable){a[b.cacheKey]=e
}if(j){this.propertyDidChange(h,e,YES)}}}else{if(b===undefined){if(j){this.propertyWillChange(h)
}this.unknownProperty(h,f);if(j){this.propertyDidChange(h,e)}}else{if(this[h]!==f){if(j){this.propertyWillChange(h)
}e=this[h]=f;if(j){this.propertyDidChange(h,e)}}}}return this},unknownProperty:function(a,b){if(!(b===undefined)){this[a]=b
}return b},beginPropertyChanges:function(){this._kvo_changeLevel=(this._kvo_changeLevel||0)+1;
return this},endPropertyChanges:function(){this._kvo_changeLevel=(this._kvo_changeLevel||1)-1;
var b=this._kvo_changeLevel,a=this._kvo_changes;if((b<=0)&&a&&(a.length>0)&&!SC.Observers.isObservingSuspended){this._notifyPropertyObservers()
}return this},propertyWillChange:function(a){return this},propertyDidChange:function(m,k,c){this._kvo_revision=(this._kvo_revision||0)+1;
var b=this._kvo_changeLevel||0,g,l,h,a,d,f=SC.LOG_OBSERVERS&&!(this.LOG_OBSERVING===NO);
if(a=this._kvo_cache){if(!c){d=this[m];if(d&&d.isProperty){a[d.cacheKey]=a[d.lastSetValueKey]=undefined
}}if(this._kvo_cacheable){g=this._kvo_cachedep;if(!g||(g=g[m])===undefined){g=this._kvo_computeCachedDependentsFor(m)
}if(g){l=g.length;while(--l>=0){h=g[l];a[h.cacheKey]=a[h.lastSetValueKey]=undefined
}}}}var e=SC.Observers.isObservingSuspended;if((b>0)||e){var j=this._kvo_changes;
if(!j){j=this._kvo_changes=SC.CoreSet.create()}j.add(m);if(e){if(f){console.log("%@%@: will not notify observers because observing is suspended".fmt(SC.KVO_SPACES,this))
}SC.Observers.objectHasPendingChanges(this)}}else{this._notifyPropertyObservers(m)
}return this},registerDependentKey:function(h,c){var e=this._kvo_dependents,b=this[h],j,g,a,f,d;
if(SC.typeOf(c)===SC.T_ARRAY){j=c;a=0}else{j=arguments;a=1}g=j.length;if(!e){this._kvo_dependents=e={}
}while(--g>=a){f=j[g];d=e[f];if(!d){d=e[f]=[]}d.push(h)}},_kvo_addCachedDependents:function(b,f,h,c){var a=f.length,e,d,g;
while(--a>=0){d=f[a];c.add(d);e=this[d];if(e&&(e instanceof Function)&&e.isProperty){if(e.isCacheable){b.push(e)
}if((g=h[d])&&g.length>0){this._kvo_addCachedDependents(b,g,h,c)}}}},_kvo_computeCachedDependentsFor:function(c){var d=this._kvo_cachedep,f=this._kvo_dependents,e=f?f[c]:null,a,b;
if(!d){d=this._kvo_cachedep={}}if(!e||e.length===0){return d[c]=null}a=d[c]=[];b=SC._TMP_SEEN_SET=(SC._TMP_SEEN_SET||SC.CoreSet.create());
b.add(c);this._kvo_addCachedDependents(a,e,f,b);b.clear();if(a.length===0){a=d[c]=null
}return a},_kvo_for:function(c,b){var a=this[c];if(!this._kvo_cloned){this._kvo_cloned={}
}if(!a){a=this[c]=(b===undefined)?[]:b.create();this._kvo_cloned[c]=YES}else{if(!this._kvo_cloned[c]){a=this[c]=a.copy();
this._kvo_cloned[c]=YES}}return a},addObserver:function(c,f,h,b){var d,a,e,g;if(h===undefined){h=f;
f=this}if(!f){f=this}if(SC.typeOf(h)===SC.T_STRING){h=f[h]}if(!h){throw"You must pass a method to addObserver()"
}c=c.toString();if(c.indexOf(".")>=0){a=SC._ChainObserver.createChain(this,c,f,h,b);
a.masterTarget=f;a.masterMethod=h;this._kvo_for(SC.keyFor("_kvo_chains",c)).push(a)
}else{if((this[c]===undefined)&&(c.indexOf("@")===0)){this.get(c)}if(f===this){f=null
}d=SC.keyFor("_kvo_observers",c);this._kvo_for(d,SC.ObserverSet).add(f,h,b);this._kvo_for("_kvo_observed_keys",SC.CoreSet).add(c)
}if(this.didAddObserver){this.didAddObserver(c,f,h)}return this},removeObserver:function(c,f,h){var d,e,b,g,a;
if(h===undefined){h=f;f=this}if(!f){f=this}if(SC.typeOf(h)===SC.T_STRING){h=f[h]}if(!h){throw"You must pass a method to removeObserver()"
}c=c.toString();if(c.indexOf(".")>=0){d=SC.keyFor("_kvo_chains",c);if(e=this[d]){e=this._kvo_for(d);
a=e.length;while(--a>=0){b=e[a];if(b&&(b.masterTarget===f)&&(b.masterMethod===h)){e[a]=b.destroyChain()
}}}}else{if(f===this){f=null}d=SC.keyFor("_kvo_observers",c);if(g=this[d]){g=this._kvo_for(d);
g.remove(f,h);if(g.targets<=0){this._kvo_for("_kvo_observed_keys",SC.CoreSet).remove(c)
}}}if(this.didRemoveObserver){this.didRemoveObserver(c,f,h)}return this},hasObserverFor:function(b){SC.Observers.flush(this);
var d=this[SC.keyFor("_kvo_observers",b)],c=this[SC.keyFor("_kvo_local",b)],a;if(c&&c.length>0){return YES
}if(d&&d.getMembers().length>0){return YES}return NO},initObservable:function(){if(this._observableInited){return
}this._observableInited=YES;var f,n,l,k,h,e,m,g,c,o,b,j,d,a;if(n=this._observers){g=n.length;
for(f=0;f<g;f++){l=n[f];h=this[l];e=h.propertyPaths;m=(e)?e.length:0;for(c=0;c<m;
c++){o=e[c];b=o.indexOf(".");if(b<0){this.addObserver(o,this,h)}else{if(o.indexOf("*")===0){this.addObserver(o.slice(1),this,h)
}else{j=null;if(b===0){j=this;o=o.slice(1)}else{if(b===4&&o.slice(0,5)==="this."){j=this;
o=o.slice(5)}else{if(b<0&&o.length===4&&o==="this"){j=this;o=""}}}SC.Observers.addObserver(o,this,h,j)
}}}}}this.bindings=[];if(n=this._bindings){for(f=0,a=n.length;f<a;f++){l=n[f];k=this[l];
d=l.slice(0,-7);this[l]=this.bind(d,k)}}if(n=this._properties){for(f=0,a=n.length;
f<a;f++){l=n[f];if(k=this[l]){if(k.isCacheable){this._kvo_cacheable=YES}if(k.dependentKeys&&(k.dependentKeys.length>0)){this.registerDependentKey(l,k.dependentKeys)
}}}}},observersForKey:function(a){var b=this._kvo_for("_kvo_observers",a);return b.getMembers()||[]
},_notifyPropertyObservers:function(u){if(!this._observableInited){this.initObservable()
}SC.Observers.flush(this);var g=SC.LOG_OBSERVERS&&!(this.LOG_OBSERVING===NO),p,s,n,d,o,m,r,q,k,a,f,t,c,j,e,b,h,l;
if(g){h=SC.KVO_SPACES=(SC.KVO_SPACES||"")+"  ";console.log('%@%@: notifying observers after change to key "%@"'.fmt(h,this,u))
}d=this["_kvo_observers_*"];this._kvo_changeLevel=(this._kvo_changeLevel||0)+1;while(((s=this._kvo_changes)&&(s.length>0))||u){r=++this.propertyRevision;
if(!s){s=SC.CoreSet.create()}this._kvo_changes=null;if(u==="*"){s.add("*");s.addEach(this._kvo_for("_kvo_observed_keys",SC.CoreSet))
}else{if(u){s.add(u)}}if(n=this._kvo_dependents){for(o=0;o<s.length;o++){u=s[o];m=n[u];
if(m&&(j=m.length)){if(g){console.log("%@...including dependent keys for %@: %@".fmt(h,u,m))
}l=this._kvo_cache;if(!l){l=this._kvo_cache={}}while(--j>=0){s.add(u=m[j]);if(e=this[u]){this[e.cacheKey]=undefined;
l[e.cacheKey]=l[e.lastSetValueKey]=undefined}}}}}while(s.length>0){u=s.pop();p=this[SC.keyFor("_kvo_observers",u)];
if(p){q=p.getMembers();k=q.length;for(f=0;f<k;f++){a=q[f];if(a[3]===r){continue}t=a[0]||this;
c=a[1];b=a[2];a[3]=r;if(g){console.log('%@...firing observer on %@ for key "%@"'.fmt(h,t,u))
}if(b!==undefined){c.call(t,this,u,null,b,r)}else{c.call(t,this,u,null,r)}}}q=this[SC.keyFor("_kvo_local",u)];
if(q){k=q.length;for(f=0;f<k;f++){a=q[f];c=this[a];if(c){if(g){console.log('%@...firing local observer %@.%@ for key "%@"'.fmt(h,this,a,u))
}c.call(this,this,u,null,r)}}}if(d&&u!=="*"){q=d.getMembers();k=q.length;for(f=0;
f<k;f++){a=q[f];t=a[0]||this;c=a[1];b=a[2];if(g){console.log('%@...firing * observer on %@ for key "%@"'.fmt(h,t,u))
}if(b!==undefined){c.call(t,this,u,null,b,r)}else{c.call(t,this,u,null,r)}}}if(this.propertyObserver){if(g){console.log('%@...firing %@.propertyObserver for key "%@"'.fmt(h,this,u))
}this.propertyObserver(this,u,null,r)}}if(s){s.destroy()}u=null}this._kvo_changeLevel=(this._kvo_changeLevel||1)-1;
if(g){SC.KVO_SPACES=h.slice(0,-2)}return YES},bind:function(a,c,e){var d,b;if(e!==undefined){c=[c,e]
}b=SC.typeOf(c);if(b===SC.T_STRING||b===SC.T_ARRAY){d=this[a+"BindingDefault"]||SC.Binding;
d=d.beget().from(c)}else{d=c}d=d.to(a,this).connect();this.bindings.push(d);return d
},didChangeFor:function(a){var b,f,e,k,d,c,h,j,g;a=SC.hashFor(a);b=this._kvo_didChange_valueCache;
if(!b){b=this._kvo_didChange_valueCache={}}f=this._kvo_didChange_revisionCache;if(!f){f=this._kvo_didChange_revisionCache={}
}e=b[a]||{};k=f[a]||{};d=false;c=this._kvo_revision||0;h=arguments.length;while(--h>=1){j=arguments[h];
if(k[j]!=c){g=this.get(j);if(e[j]!==g){d=true;e[j]=g}}k[j]=c}b[a]=e;f[a]=k;return d
},setIfChanged:function(a,b){return(this.get(a)!==b)?this.set(a,b):this},getPath:function(b){var a=SC.tupleForPropertyPath(b,this);
if(a===null||a[0]===null){return undefined}return a[0].get(a[1])},setPath:function(c,b){if(c.indexOf(".")>=0){var a=SC.tupleForPropertyPath(c,this);
if(!a||!a[0]){return null}a[0].set(a[1],b)}else{this.set(c,b)}return this},setPathIfChanged:function(c,b){if(c.indexOf(".")>=0){var a=SC.tupleForPropertyPath(c,this);
if(!a||!a[0]){return null}if(a[0].get(a[1])!==b){a[0].set(a[1],b)}}else{this.setIfChanged(c,b)
}return this},getEach:function(){var d=SC.A(arguments),c=[],a,b;for(a=0,b=d.length;
a<b;a++){c[c.length]=this.getPath(d[a])}return c},incrementProperty:function(b,a){if(!a){a=1
}this.set(b,(this.get(b)||0)+a);return this.get(b)},decrementProperty:function(b,a){if(!a){a=1
}this.set(b,(this.get(b)||0)-a);return this.get(b)},toggleProperty:function(a,b,c){if(b===undefined){b=true
}if(c===undefined){c=false}b=(this.get(a)==b)?c:b;this.set(a,b);return this.get(a)
},notifyPropertyChange:function(a,b){this.propertyWillChange(a);this.propertyDidChange(a,b);
return this},allPropertiesDidChange:function(){this._kvo_cache=null;this._notifyPropertyObservers("*");
return this},addProbe:function(a){this.addObserver(a,SC.logChange)},removeProbe:function(a){this.removeObserver(a,SC.logChange)
},logProperty:function(){var b=SC.$A(arguments),d,c,a;for(a=0,c=b.length;a<c;a++){d=b[a];
console.log("%@:%@: ".fmt(SC.guidFor(this),d),this.get(d))}},propertyRevision:1};
SC.logChange=function logChange(c,a,b){console.log("CHANGE: %@[%@] =>".fmt(c,a),c.get(a))
};SC.mixin(SC,{get:function(a,b){if(!a){return undefined}if(b===undefined){return this[a]
}if(a.get){return a.get(b)}return a[b]}});SC.mixin(Array.prototype,SC.Observable);
SC.Enumerator=function(a){this.enumerable=a;this.reset();return this};SC.Enumerator.prototype={nextObject:function(){var c=this._index;
var a=this._length;if(c>=a){return undefined}var b=this.enumerable.nextObject(c,this._previousObject,this._context);
this._previousObject=b;this._index=c+1;if(c>=a){this._context=SC.Enumerator._pushContext(this._context)
}return b},reset:function(){var b=this.enumerable;if(!b){throw SC.$error("Enumerator has been destroyed")
}this._length=b.get?b.get("length"):b.length;var a=this._length;this._index=0;this._previousObject=null;
this._context=(a>0)?SC.Enumerator._popContext():null},destroy:function(){this.enumerable=this._length=this._index=this._previousObject=this._context=null
}};SC.Enumerator.create=function(a){return new SC.Enumerator(a)};SC.Enumerator._popContext=function(){var a=this._contextCache?this._contextCache.pop():null;
return a||{}};SC.Enumerator._pushContext=function(b){this._contextCache=this._contextCache||[];
var a=this._contextCache;a.push(b);return null};require("core");require("system/enumerator");
SC.Enumerable={isEnumerable:YES,nextObject:function(a,c,b){return this.objectAt?this.objectAt(a):this[a]
},firstObject:function(){if(this.get("length")===0){return undefined}if(this.objectAt){return this.objectAt(0)
}var b=SC.Enumerator._popContext(),a;a=this.nextObject(0,null,b);b=SC.Enumerator._pushContext(b);
return a}.property(),lastObject:function(){var a=this.get("length");if(a===0){return undefined
}if(this.objectAt){return this.objectAt(a-1)}}.property(),enumerator:function(){return SC.Enumerator.create(this)
},forEach:function(g,f){if(typeof g!=="function"){throw new TypeError()}var b=this.get?this.get("length"):this.length;
if(f===undefined){f=null}var e=null;var c=SC.Enumerator._popContext();for(var a=0;
a<b;a++){var d=this.nextObject(a,e,c);g.call(f,d,a,this);e=d}e=null;c=SC.Enumerator._pushContext(c);
return this},getEach:function(a){return this.map(function(b){return b?(b.get?b.get(a):b[a]):null
},this)},setEach:function(a,b){this.forEach(function(c){if(c){if(c.set){c.set(a,b)
}else{c[a]=b}}},this);return this},map:function(h,g){if(typeof h!=="function"){throw new TypeError()
}var b=this.get?this.get("length"):this.length;if(g===undefined){g=null}var c=[];
var f=null;var d=SC.Enumerator._popContext();for(var a=0;a<b;a++){var e=this.nextObject(a,f,d);
c[a]=h.call(g,e,a,this);f=e}f=null;d=SC.Enumerator._pushContext(d);return c},mapProperty:function(a){return this.map(function(b){return b?(b.get?b.get(a):b[a]):null
})},filter:function(h,g){if(typeof h!=="function"){throw new TypeError()}var b=this.get?this.get("length"):this.length;
if(g===undefined){g=null}var c=[];var f=null;var d=SC.Enumerator._popContext();for(var a=0;
a<b;a++){var e=this.nextObject(a,f,d);if(h.call(g,e,a,this)){c.push(e)}f=e}f=null;
d=SC.Enumerator._pushContext(d);return c},sortProperty:function(b){var c=(typeof b===SC.T_STRING)?arguments:b,a=c.length,d;
if(this instanceof Array){d=this}else{d=[];this.forEach(function(e){d.push(e)})}if(!d){return[]
}return d.sort(function(g,f){var e,j,l,k,h=0;for(e=0;h===0&&e<a;e++){j=c[e];l=g?(g.get?g.get(j):g[j]):null;
k=f?(f.get?f.get(j):f[j]):null;h=SC.compare(l,k)}return h})},filterProperty:function(k,f){var d=this.get?this.get("length"):this.length;
var e=[];var j=null;var b=SC.Enumerator._popContext();for(var g=0;g<d;g++){var c=this.nextObject(g,j,b);
var h=c?(c.get?c.get(k):c[k]):null;var a=(f===undefined)?!!h:SC.isEqual(h,f);if(a){e.push(c)
}j=c}j=null;b=SC.Enumerator._pushContext(b);return e},find:function(h,d){var c=this.get?this.get("length"):this.length;
if(d===undefined){d=null}var g=null,b,j=NO,e=null;var a=SC.Enumerator._popContext();
for(var f=0;f<c&&!j;f++){b=this.nextObject(f,g,a);if(j=h.call(d,b,f,this)){e=b}g=b
}b=g=null;a=SC.Enumerator._pushContext(a);return e},findProperty:function(j,f){var c=this.get?this.get("length"):this.length;
var k=NO,d=null,h=null,b,g;var a=SC.Enumerator._popContext();for(var e=0;e<c&&!k;
e++){b=this.nextObject(e,h,a);g=b?(b.get?b.get(j):b[j]):null;k=(f===undefined)?!!g:SC.isEqual(g,f);
if(k){d=b}h=b}h=b=null;a=SC.Enumerator._pushContext(a);return d},every:function(h,g){if(typeof h!=="function"){throw new TypeError()
}var b=this.get?this.get("length"):this.length;if(g===undefined){g=null}var c=YES;
var f=null;var d=SC.Enumerator._popContext();for(var a=0;c&&(a<b);a++){var e=this.nextObject(a,f,d);
if(!h.call(g,e,a,this)){c=NO}f=e}f=null;d=SC.Enumerator._pushContext(d);return c},everyProperty:function(j,e){var c=this.get?this.get("length"):this.length;
var d=YES;var h=null;var a=SC.Enumerator._popContext();for(var f=0;d&&(f<c);f++){var b=this.nextObject(f,h,a);
var g=b?(b.get?b.get(j):b[j]):null;d=(e===undefined)?!!g:SC.isEqual(g,e);h=b}h=null;
a=SC.Enumerator._pushContext(a);return d},some:function(h,g){if(typeof h!=="function"){throw new TypeError()
}var b=this.get?this.get("length"):this.length;if(g===undefined){g=null}var c=NO;
var f=null;var d=SC.Enumerator._popContext();for(var a=0;(!c)&&(a<b);a++){var e=this.nextObject(a,f,d);
if(h.call(g,e,a,this)){c=YES}f=e}f=null;d=SC.Enumerator._pushContext(d);return c},someProperty:function(j,e){var c=this.get?this.get("length"):this.length;
var d=NO;var h=null;var a=SC.Enumerator._popContext();for(var f=0;!d&&(f<c);f++){var b=this.nextObject(f,h,a);
var g=b?(b.get?b.get(j):b[j]):null;d=(e===undefined)?!!g:SC.isEqual(g,e);h=b}h=null;
a=SC.Enumerator._pushContext(a);return d},reduce:function(g,h,j){if(typeof g!=="function"){throw new TypeError()
}var c=this.get?this.get("length"):this.length;if(c===0&&h===undefined){throw new TypeError()
}var d=h;var f=null;var a=SC.Enumerator._popContext();for(var e=0;e<c;e++){var b=this.nextObject(e,f,a);
if(b!==null){if(d===undefined){d=b}else{d=g.call(null,d,b,e,this,j)}}f=b}f=null;a=SC.Enumerator._pushContext(a);
if(d===undefined){throw new TypeError()}return d},invoke:function(h){var e=this.get?this.get("length"):this.length;
if(e<=0){return[]}var j;var g=[];var c=arguments.length;if(c>1){for(j=1;j<c;j++){g.push(arguments[j])
}}var f=[];var k=null;var b=SC.Enumerator._popContext();for(j=0;j<e;j++){var d=this.nextObject(j,k,b);
var a=d?d[h]:null;if(a){f[j]=a.apply(d,g)}k=d}k=null;b=SC.Enumerator._pushContext(b);
return f},invokeWhile:function(d,j){var f=this.get?this.get("length"):this.length;
if(f<=0){return null}var k;var h=[];var c=arguments.length;if(c>2){for(k=2;k<c;k++){h.push(arguments[k])
}}var g=d;var l=null;var b=SC.Enumerator._popContext();for(k=0;(g===d)&&(k<f);k++){var e=this.nextObject(k,l,b);
var a=e?e[j]:null;if(a){g=a.apply(e,h)}l=e}l=null;b=SC.Enumerator._pushContext(b);
return g},toArray:function(){var a=[];this.forEach(function(b){a.push(b)},this);return a
},groupBy:function(k){var d=this.get?this.get("length"):this.length,e=[],j=null,a=SC.Enumerator._popContext(),f=[],l=[];
for(var g=0;g<d;g++){var c=this.nextObject(g,j,a);var h=c?(c.get?c.get(k):c[k]):null;
if(SC.none(f[h])){f[h]=[];l.push(h)}f[h].push(c);j=c}j=null;a=SC.Enumerator._pushContext(a);
for(var g=0,b=l.length;g<b;g++){e.push(f[l[g]])}return e}};SC._buildReducerFor=function(a,b){return function(d,e){var f=this[a];
if(SC.typeOf(f)!==SC.T_FUNCTION){return this.unknownProperty?this.unknownProperty(d,e):null
}else{var c=SC.Enumerable.reduce.call(this,f,null,b);return c}}.property("[]")};SC.Reducers={"[]":function(a,b){return this
}.property(),enumerableContentDidChange:function(b,a){this.notifyPropertyChange("[]");
return this},reducedProperty:function(j,g,f){if(!j||j.charAt(0)!=="@"){return undefined
}var d=j.match(/^@([^(]*)(\(([^)]*)\))?$/);if(!d||d.length<2){return undefined}var h=d[1];
var k=d[3];h="reduce"+h.slice(0,1).toUpperCase()+h.slice(1);var a=this[h];if(SC.typeOf(a)!==SC.T_FUNCTION){return undefined
}if(f===NO){return SC.Enumerable.reduce.call(this,a,null,k)}var c=SC._buildReducerFor(h,k);
var b=this.constructor.prototype;if(b){b[j]=c;var e=b._properties||[];e.push(j);b._properties=e;
this.registerDependentKey(j,"[]")}return SC.Enumerable.reduce.call(this,a,null,k)
},reduceMax:function(a,d,b,f,c){if(c&&d){d=d.get?d.get(c):d[c]}if(a===null){return d
}return(d>a)?d:a},reduceMaxObject:function(b,f,c,g,d){var a=b,h=f;if(d){if(f){h=f.get?f.get(d):f[d]
}if(b){a=b.get?b.get(d):b[d]}}if(a===null){return f}return(h>a)?f:b},reduceMin:function(a,d,b,f,c){if(c&&d){d=d.get?d.get(c):d[c]
}if(a===null){return d}return(d<a)?d:a},reduceMinObject:function(b,f,c,g,d){var a=b,h=f;
if(d){if(f){h=f.get?f.get(d):f[d]}if(b){a=b.get?b.get(d):b[d]}}if(a===null){return f
}return(h<a)?f:b},reduceAverage:function(b,g,d,h,f){if(f&&g){g=g.get?g.get(f):g[f]
}var c=(b||0)+g;var a=h.get?h.get("length"):h.length;if(d>=a-1){c=c/a}return c},reduceSum:function(a,d,b,f,c){if(c&&d){d=d.get?d.get(c):d[c]
}return(a===null)?d:a+d}};SC.mixin(SC.Enumerable,SC.Reducers);SC.mixin(Array.prototype,SC.Reducers);
Array.prototype.isEnumerable=YES;(function(){var a={nextObject:SC.Enumerable.nextObject,enumerator:SC.Enumerable.enumerator,firstObject:SC.Enumerable.firstObject,lastObject:SC.Enumerable.lastObject,sortProperty:SC.Enumerable.sortProperty,mapProperty:function(g){var e=this.length;
var f=[];for(var d=0;d<e;d++){var h=this[d];f[d]=h?(h.get?h.get(g):h[g]):null}return f
},filterProperty:function(h,k){var f=this.length;var g=[];for(var e=0;e<f;e++){var j=this[e];
var l=j?(j.get?j.get(h):j[h]):null;var d=(k===undefined)?!!l:SC.isEqual(l,k);if(d){g.push(j)
}}return g},groupBy:function(l){var f=this.length,g=[],h=[],m=[];for(var j=0;j<f;
j++){var e=this[j];var k=e?(e.get?e.get(l):e[l]):null;if(SC.none(h[k])){h[k]=[];m.push(k)
}h[k].push(e)}for(var j=0,d=m.length;j<d;j++){g.push(h[m[j]])}return g},find:function(k,j){if(typeof k!=="function"){throw new TypeError()
}var e=this.length;if(j===undefined){j=null}var g,f=null,h=NO;for(var d=0;d<e&&!h;
d++){g=this[d];if(h=k.call(j,g,d,this)){f=g}}g=null;return f},findProperty:function(g,k){var e=this.length;
var h,l,j=NO,f=null;for(var d=0;d<e&&!j;d++){l=(h=this[d])?(h.get?h.get(g):h[g]):null;
j=(k===undefined)?!!l:SC.isEqual(l,k);if(j){f=h}}h=null;return f},everyProperty:function(g,j){var e=this.length;
var f=YES;for(var d=0;f&&(d<e);d++){var h=this[d];var k=h?(h.get?h.get(g):h[g]):null;
f=(j===undefined)?!!k:SC.isEqual(k,j)}return f},someProperty:function(g,j){var e=this.length;
var f=NO;for(var d=0;!f&&(d<e);d++){var h=this[d];var k=h?(h.get?h.get(g):h[g]):null;
f=(j===undefined)?!!k:SC.isEqual(k,j)}return f},invoke:function(f){var e=this.length;
if(e<=0){return[]}var d;var h=[];var k=arguments.length;if(k>1){for(d=1;d<k;d++){h.push(arguments[d])
}}var g=[];for(d=0;d<e;d++){var j=this[d];var l=j?j[f]:null;if(l){g[d]=l.apply(j,h)
}}return g},invokeWhile:function(f,l){var h=this.length;if(h<=0){return null}var m;
var k=[];var e=arguments.length;if(e>2){for(m=2;m<e;m++){k.push(arguments[m])}}var j=f;
for(m=0;(j===f)&&(m<h);m++){var g=this[m];var d=g?g[l]:null;if(d){j=d.apply(g,k)}}return j
},toArray:function(){var e=this.length;if(e<=0){return[]}var f=[];for(var d=0;d<e;
d++){var g=this[d];f.push(g)}return f},getEach:function(g){var f=[];var e=this.length;
for(var d=0;d<e;d++){var h=this[d];f[d]=h?(h.get?h.get(g):h[g]):null}return f},setEach:function(f,g){var e=this.length;
for(var d=0;d<e;d++){var h=this[d];if(h){if(h.set){h.set(f,g)}else{h[f]=g}}}return this
}};var c={forEach:function(h,g){if(typeof h!=="function"){throw new TypeError()}var e=this.length;
if(g===undefined){g=null}for(var d=0;d<e;d++){var f=this[d];h.call(g,f,d,this)}return this
},map:function(j,h){if(typeof j!=="function"){throw new TypeError()}var e=this.length;
if(h===undefined){h=null}var f=[];for(var d=0;d<e;d++){var g=this[d];f[d]=j.call(h,g,d,this)
}return f},filter:function(j,h){if(typeof j!=="function"){throw new TypeError()}var e=this.length;
if(h===undefined){h=null}var f=[];for(var d=0;d<e;d++){var g=this[d];if(j.call(h,g,d,this)){f.push(g)
}}return f},every:function(j,h){if(typeof j!=="function"){throw new TypeError()}var e=this.length;
if(h===undefined){h=null}var f=YES;for(var d=0;f&&(d<e);d++){var g=this[d];if(!j.call(h,g,d,this)){f=NO
}}return f},some:function(j,h){if(typeof j!=="function"){throw new TypeError()}var e=this.length;
if(h===undefined){h=null}var f=NO;for(var d=0;(!f)&&(d<e);d++){var g=this[d];if(j.call(h,g,d,this)){f=YES
}}return f},reduce:function(k,f,j){if(typeof k!=="function"){throw new TypeError()
}var e=this.length;if(e===0&&f===undefined){throw new TypeError()}var g=f;for(var d=0;
d<e;d++){var h=this[d];if(h!==null){if(g===undefined){g=h}else{g=k.call(null,g,h,d,this,j)
}}}if(g===undefined){throw new TypeError()}return g}};for(var b in c){if(!c.hasOwnProperty(b)){continue
}if(!Array.prototype[b]||((typeof Prototype==="object")&&Prototype.Version.match(/^1\.6/))){Array.prototype[b]=c[b]
}}SC.mixin(Array.prototype,a)})();SC.RangeObserver={isRangeObserver:YES,toString:function(){var a=this.indexes?this.indexes.toString():"SC.IndexSet<..>";
return a.replace("IndexSet","RangeObserver(%@)".fmt(SC.guidFor(this)))},create:function(d,f,e,g,c,a){var b=SC.beget(this);
b.source=d;b.indexes=f?f.frozenCopy():null;b.target=e;b.method=g;b.context=c;b.isDeep=a||NO;
b.beginObserving();return b},extend:function(e){var d=SC.beget(this),c=arguments,b=c.length,a;
for(a=0;a<b;a++){SC.mixin(d,c[a])}return d},destroy:function(a){this.endObserving();
return this},update:function(a,b){if(this.indexes&&this.indexes.isEqual(b)){return this
}this.indexes=b?b.frozenCopy():null;this.endObserving().beginObserving();return this
},beginObserving:function(){if(!this.isDeep){return this}var b=this.observing;if(!b){b=this.observing=SC.CoreSet.create()
}var a=this._beginObservingForEach;if(!a){a=this._beginObservingForEach=function(c){var d=this.source.objectAt(c);
if(d&&d.addObserver){b.push(d);d._kvo_needsRangeObserver=YES}}}this.indexes.forEach(a,this);
this.isObserving=NO;SC.Observers.addPendingRangeObserver(this);return this},setupPending:function(a){var d=this.observing;
if(this.isObserving||!d||(d.get("length")===0)){return YES}if(d.contains(a)){this.isObserving=YES;
var b=this._setupPendingForEach;if(!b){var c=this.source,e=this.objectPropertyDidChange;
b=this._setupPendingForEach=function(f){var j=this.source.objectAt(f),g=SC.guidFor(j),h;
if(j&&j.addObserver){d.push(j);j.addObserver("*",this,e);h=this[g];if(h===undefined||h===null){this[g]=f
}else{if(h.isIndexSet){h.add(f)}else{h=this[g]=SC.IndexSet.create(h).add(f)}}}}}this.indexes.forEach(b,this);
return YES}else{return NO}},endObserving:function(){if(!this.isDeep){return this}var e=this.observing;
if(this.isObserving){var b=this.objectPropertyDidChange,c=this.source,a,f,d;if(e){f=e.length;
for(a=0;a<f;a++){d=e[a];d.removeObserver("*",this,b);this[SC.guidFor(d)]=null}e.length=0
}this.isObserving=NO}if(e){e.clear()}return this},rangeDidChange:function(b){var a=this.indexes;
if(!b||!a||a.intersects(b)){this.endObserving();this.method.call(this.target,this.source,null,"[]",b,this.context);
this.beginObserving()}return this},objectPropertyDidChange:function(d,f,g,a){var e=this.context,h=this.method,c=SC.guidFor(d),b=this[c];
if(b&&!b.isIndexSet){b=this[c]=SC.IndexSet.create(b).freeze()}if(e){h.call(this.target,this.source,d,f,b,e,a)
}else{h.call(this.target,this.source,d,f,b,a)}}};sc_require("mixins/observable");
sc_require("mixins/enumerable");sc_require("system/range_observer");SC.OUT_OF_RANGE_EXCEPTION="Index out of range";
SC.Array={isSCArray:YES,replace:function(a,c,b){throw"replace() must be implemented to support SC.Array"
},objectAt:function(a){if(a<0){return undefined}if(a>=this.get("length")){return undefined
}return this.get(a)},"[]":function(a,b){if(b!==undefined){this.replace(0,this.get("length"),b)
}return this}.property(),insertAt:function(a,b){if(a>this.get("length")){throw SC.OUT_OF_RANGE_EXCEPTION
}this.replace(a,0,[b]);return this},removeAt:function(d,a){var c=0,b=[];if(typeof d===SC.T_NUMBER){if((d<0)||(d>=this.get("length"))){throw SC.OUT_OF_RANGE_EXCEPTION
}if(a===undefined){this.replace(d,1,b);return this}else{d=SC.IndexSet.create(d,a)
}}this.beginPropertyChanges();d.forEachRange(function(f,e){f-=c;c+=e;this.replace(f,e,b)
},this);this.endPropertyChanges();return this},removeObject:function(b){var c=this.get("length")||0;
while(--c>=0){var a=this.objectAt(c);if(a==b){this.removeAt(c)}}return this},removeObjects:function(a){this.beginPropertyChanges();
a.forEach(function(b){this.removeObject(b)},this);this.endPropertyChanges();return this
},pushObject:function(a){this.insertAt(this.get("length"),a);return a},pushObjects:function(a){this.beginPropertyChanges();
a.forEach(function(b){this.pushObject(b)},this);this.endPropertyChanges();return this
},popObject:function(){var a=this.get("length");if(a===0){return null}var b=this.objectAt(a-1);
this.removeAt(a-1);return b},shiftObject:function(){if(this.get("length")===0){return null
}var a=this.objectAt(0);this.removeAt(0);return a},unshiftObject:function(a){this.insertAt(0,a);
return a},unshiftObjects:function(a){this.beginPropertyChanges();a.forEach(function(b){this.unshiftObject(b)
},this);this.endPropertyChanges();return this},isEqual:function(a){if(!a){return false
}if(a==this){return true}var b=a.get("length");if(b!=this.get("length")){return false
}while(--b>=0){if(!SC.isEqual(a.objectAt(b),this.objectAt(b))){return false}}return true
},compact:function(){return this.without(null)},without:function(b){if(this.indexOf(b)<0){return this
}var a=[];this.forEach(function(c){if(c!==b){a[a.length]=c}});return a},uniq:function(){var a=[];
this.forEach(function(b){if(a.indexOf(b)<0){a[a.length]=b}});return a},max:function(){return Math.max.apply(Math,this)
},min:function(){return Math.min.apply(Math,this)},rangeObserverClass:SC.RangeObserver,contains:function(a){return this.indexOf(a)>=0
},addRangeObserver:function(d,f,h,e){var a=this._array_rangeObservers;if(!a){a=this._array_rangeObservers=SC.CoreSet.create()
}if(this._array_oldLength===undefined){this._array_oldLength=this.get("length")}var g=this.rangeObserverClass;
var b=NO;var c=g.create(this,d,f,h,e,b);a.add(c);if(!this._array_isNotifyingRangeObservers){this._array_isNotifyingRangeObservers=YES;
this.addObserver("[]",this,this._array_notifyRangeObservers)}return c},updateRangeObserver:function(b,a){return b.update(this,a)
},removeRangeObserver:function(c){var b=c.destroy(this);var a=this._array_rangeObservers;
if(a){a.remove(c)}return b},enumerableContentDidChange:function(h,g,f){var a=this._array_rangeObservers,d=this._array_oldLength,e,c,b;
this.beginPropertyChanges();this.notifyPropertyChange("length");if(a&&a.length>0){if(d===undefined){d=0
}this._array_oldLength=e=this.get("length");if(h===undefined){h=0}if(f===undefined){f=e-d
}if(f!==0||g===undefined){c=e-h;if(f<0){c-=f}}else{c=g}b=this._array_rangeChanges;
if(!b){b=this._array_rangeChanges=SC.IndexSet.create()}b.add(h,c)}this.notifyPropertyChange("[]");
this.endPropertyChanges();return this},_array_notifyRangeObservers:function(){var c=this._array_rangeObservers,d=this._array_rangeChanges,b=c?c.length:0,a,e;
if(b>0&&d&&d.length>0){for(a=0;a<b;a++){c[a].rangeDidChange(d)}d.clear()}}};SC.mixin(Array.prototype,SC.Array);
SC.Array=SC.mixin({},SC.Enumerable,SC.Array);SC.Array.slice=function(b,d){var a=[];
var c=this.get("length");if(SC.none(b)){b=0}if(SC.none(d)||(d>c)){d=c}while(b<d){a[a.length]=this.objectAt(b++)
}return a};SC.Array.indexOf=function(d,c){var b,a=this.get("length");if(c===undefined){c=0
}else{c=(c<0)?Math.ceil(c):Math.floor(c)}if(c<0){c+=a}for(b=c;b<a;b++){if(this.objectAt(b)===d){return b
}}return -1};if(!Array.prototype.indexOf){Array.prototype.indexOf=SC.Array.indexOf
}SC.Array.lastIndexOf=function(d,c){var b,a=this.get("length");if(c===undefined){c=a-1
}else{c=(c<0)?Math.ceil(c):Math.floor(c)}if(c<0){c+=a}for(b=c;b>=0;b--){if(this.objectAt(b)===d){return b
}}return -1};if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=SC.Array.lastIndexOf
}(function(){SC.mixin(Array.prototype,{replace:function(d,g,f){if(this.isFrozen){throw SC.FROZEN_ERROR
}if(!f||f.length===0){this.splice(d,g)}else{var e=[d,g].concat(f);this.splice.apply(this,e)
}var c=f?(f.get?f.get("length"):f.length):0;this.enumerableContentDidChange(d,g,c-g);
return this},unknownProperty:function(d,e){var c=this.reducedProperty(d,e);if((e!==undefined)&&c===undefined){c=this[d]=e
}return c}});var b=Array.prototype.indexOf;if(!b||(b===SC.Array.indexOf)){Array.prototype.indexOf=function(f,e){var d,c=this.length;
if(e===undefined){e=0}else{e=(e<0)?Math.ceil(e):Math.floor(e)}if(e<0){e+=c}for(d=e;
d<c;d++){if(this[d]===f){return d}}return -1}}var a=Array.prototype.lastIndexOf;if(!a||(a===SC.Array.lastIndexOf)){Array.prototype.lastIndexOf=function(f,e){var d,c=this.length;
if(e===undefined){e=c-1}else{e=(e<0)?Math.ceil(e):Math.floor(e)}if(e<0){e+=c}for(d=e;
d>=0;d--){if(this[d]===f){return d}}return -1}}})();SC.Comparable={isComparable:YES,compare:function(d,c){throw"%@.compare() is not implemented".fmt(this.toString())
}};SC.Copyable={isCopyable:YES,copy:function(){throw"%@.copy() is not implemented"
},frozenCopy:function(){var a=this.get?this.get("isFrozen"):this.isFrozen;if(a===YES){return this
}else{if(a===undefined){throw"%@ does not support freezing".fmt(this)}else{return this.copy().freeze()
}}}};SC.mixin(Array.prototype,SC.Copyable);Array.prototype.copy=Array.prototype.slice;
SC.DelegateSupport={delegateFor:function(c){var b=1,a=arguments.length,d;while(b<a){d=arguments[b];
if(d&&d[c]!==undefined){return d}b++}return(this[c]!==undefined)?this:null},invokeDelegateMethod:function(c,a,b){b=SC.A(arguments);
b=b.slice(2,b.length);if(!c||!c[a]){c=this}var d=c[a];return d?d.apply(c,b):null},getDelegateProperty:function(d,e){var b=1,a=arguments.length,c;
while(b<a){c=arguments[b++];if(c&&c[d]!==undefined){return c.get?c.get(d):c[d]}}return(this[d]!==undefined)?this.get(d):undefined
}};SC.FROZEN_ERROR=new Error("Cannot modify a frozen object");SC.Freezable={isFreezable:YES,isFrozen:NO,freeze:function(){if(this.set){this.set("isFrozen",YES)
}else{this.isFrozen=YES}return this}};SC.mixin(Array.prototype,SC.Freezable);sc_require("mixins/enumerable");
sc_require("mixins/observable");sc_require("mixins/freezable");sc_require("mixins/copyable");
SC.Set=SC.mixin({},SC.Enumerable,SC.Observable,SC.Freezable,{create:function(b){var c,a,d=SC.Set._pool,e=this.isObservable;
if(!e&&b===undefined&&d.length>0){c=d.pop()}else{c=SC.beget(this);if(e){c.initObservable()
}if(b&&b.isEnumerable&&b.get("length")>0){c.isObservable=NO;if(b.isSCArray){a=b.get?b.get("length"):b.length;
while(--a>=0){c.add(b.objectAt(a))}}else{if(b.isSet){a=b.length;while(--a>=0){c.add(b[a])
}}else{b.forEach(function(f){c.add(f)},this)}}c.isObservable=e}}return c},isSet:YES,length:0,firstObject:function(){return(this.length>0)?this[0]:undefined
}.property(),clear:function(){if(this.isFrozen){throw SC.FROZEN_ERROR}this.length=0;
return this},contains:function(b){if(b===null){return NO}var a=this[SC.hashFor(b)];
return(!SC.none(a)&&(a<this.length)&&(this[a]===b))},isEqual:function(a){if(!a||!a.isSet||(a.get("length")!==this.get("length"))){return NO
}var b=this.get("length");while(--b>=0){if(!a.contains(this[b])){return NO}}return YES
},add:function(d){if(this.isFrozen){throw SC.FROZEN_ERROR}if(d===null||d===undefined){return this
}var c=SC.hashFor(d);var b=this[c];var a=this.length;if((b===null||b===undefined)||(b>=a)||(this[b]!==d)){this[a]=d;
this[c]=a;this.length=a+1}if(this.isObservable){this.enumerableContentDidChange()
}return this},addEach:function(c){if(this.isFrozen){throw SC.FROZEN_ERROR}if(!c||!c.isEnumerable){throw"%@.addEach must pass enumerable".fmt(this)
}var a,b=this.isObservable;if(b){this.beginPropertyChanges()}if(c.isSCArray){a=c.get("length");
while(--a>=0){this.add(c.objectAt(a))}}else{if(c.isSet){a=c.length;while(--a>=0){this.add(c[a])
}}else{c.forEach(function(d){this.add(d)},this)}}if(b){this.endPropertyChanges()}return this
},remove:function(d){if(this.isFrozen){throw SC.FROZEN_ERROR}if(SC.none(d)){return this
}var c=SC.hashFor(d);var b=this[c];var a=this.length;if(SC.none(b)||(b>=a)||(this[b]!==d)){return this
}delete this[c];if(b<(a-1)){d=this[b]=this[a-1];this[SC.hashFor(d)]=b}this.length=a-1;
if(this.isObservable){this.enumerableContentDidChange()}return this},pop:function(){if(this.isFrozen){throw SC.FROZEN_ERROR
}var a=(this.length>0)?this[this.length-1]:null;if(a){this.remove(a)}return a},removeEach:function(c){if(this.isFrozen){throw SC.FROZEN_ERROR
}if(!c||!c.isEnumerable){throw"%@.addEach must pass enumerable".fmt(this)}var a,b=this.isObservable;
if(b){this.beginPropertyChanges()}if(c.isSCArray){a=c.get("length");while(--a>=0){this.remove(c.objectAt(a))
}}else{if(c.isSet){a=c.length;while(--a>=0){this.remove(c[a])}}else{c.forEach(function(d){this.remove(d)
},this)}}if(b){this.endPropertyChanges()}return this},copy:function(){return this.constructor.create(this)
},destroy:function(){this.isFrozen=NO;if(!this.isObservable){SC.Set._pool.push(this.clear())
}return this},forEach:function(c,d){var b=this.length;if(!d){d=this}for(var a=0;a<b;
a++){c.call(d,this[a],a,this)}return this},toString:function(){var b=this.length,a,c=[];
for(a=0;a<b;a++){c[a]=this[a]}return"SC.Set<%@>".fmt(c.join(","))},_pool:[],isObservable:YES});
SC.Set.constructor=SC.Set;SC.Set.clone=SC.Set.copy;SC.Set.push=SC.Set.unshift=SC.Set.add;
SC.Set.shift=SC.Set.pop;SC.Set.addObject=SC.Set.add;SC.Set.removeObject=SC.Set.remove;
SC.Set._pool=[];SC.CoreSet=SC.beget(SC.Set);SC.CoreSet.isObservable=NO;SC.CoreSet.constructor=SC.CoreSet;
sc_require("core");sc_require("mixins/observable");sc_require("mixins/array");sc_require("system/set");
SC.BENCHMARK_OBJECTS=NO;SC._object_extend=function _object_extend(g,f){if(!f){throw"SC.Object.extend expects a non-null value.  Did you forget to 'sc_require' something?  Or were you passing a Protocol to extend() as if it were a mixin?"
}g._kvo_cloned=null;var x,n,t,e,h=g.concatenatedProperties,l=SC.K;var c,b;n=(h)?h.length:0;
var a=(n>0)?{}:null;while(--n>=0){x=h[n];c=g[x];b=f[x];if(c){if(!(c instanceof Array)){c=SC.$A(c)
}a[x]=(b)?c.concat(b):b}else{if(!(b instanceof Array)){b=SC.$A(b)}a[x]=b}}var w=g._bindings,m=NO;
var u=g._observers,v=NO;var j=g._properties,d=NO;var q,k,o;var s=g.outlets,r=NO;if(f.outlets){s=(s||SC.EMPTY_ARRAY).concat(f.outlets);
r=YES}for(x in f){if(x==="_kvo_cloned"){continue}if(!f.hasOwnProperty(x)){continue
}var p=(a.hasOwnProperty(x)?a[x]:null)||f[x];if(x.slice(-7)==="Binding"){if(!m){w=(w||SC.EMPTY_ARRAY).slice();
m=YES}if(w===null){w=(g._bindings||SC.EMPTY_ARRAY).slice()}w[w.length]=x}else{if(p&&(p instanceof Function)){if(!p.superclass&&(p!==(e=g[x]))){p.superclass=p.base=e||l
}if(p.propertyPaths){if(!v){u=(u||SC.EMPTY_ARRAY).slice();v=YES}u[u.length]=x}else{if(q=p.localPropertyPaths){k=q.length;
while(--k>=0){o=g._kvo_for(SC.keyFor("_kvo_local",q[k]),SC.Set);o.add(x);g._kvo_for("_kvo_observed_keys",SC.CoreSet).add(q[k])
}}else{if(p.dependentKeys){if(!d){j=(j||SC.EMPTY_ARRAY).slice();d=YES}j[j.length]=x
}else{if(p.autoconfiguredOutlet){if(!r){s=(s||SC.EMPTY_ARRAY).slice();r=YES}s[s.length]=x
}}}}}}g[x]=p}if(f.hasOwnProperty("toString")){x="toString";p=(a.hasOwnProperty(x)?a[x]:null)||f[x];
if(!p.superclass&&(p!==(e=g[x]))){p.superclass=p.base=e||l}g[x]=p}g._bindings=w||[];
g._observers=u||[];g._properties=j||[];g.outlets=s||[];return g};SC.Object=function(a){return this._object_init(a)
};SC.mixin(SC.Object,{mixin:function(b){var a=arguments.length,c;for(c=0;c<a;c++){SC.mixin(this,arguments[c])
}return this},superclass:null,extend:function(e){var d=SC.BENCHMARK_OBJECTS;if(d){SC.Benchmark.start("SC.Object.extend")
}var g,c=function(h){return this._object_init(h)};for(g in this){if(!this.hasOwnProperty(g)){continue
}c[g]=this[g]}if(this.hasOwnProperty("toString")){c.toString=this.toString}c.superclass=this;
SC.generateGuid(c);c.subclasses=SC.Set.create();this.subclasses.add(c);var f=(c.prototype=SC.beget(this.prototype));
var b,a=arguments.length;for(b=0;b<a;b++){SC._object_extend(f,arguments[b])}f.constructor=c;
if(d){SC.Benchmark.end("SC.Object.extend")}return c},create:function(){var b=this,a=new b(arguments);
if(SC.ObjectDesigner){SC.ObjectDesigner.didCreateObject(a,SC.$A(arguments))}return a
},isClass:YES,subclasses:SC.Set.create(),toString:function(){return SC._object_className(this)
},subclassOf:function(b){if(this===b){return NO}var a=this;while(a=a.superclass){if(a===b){return YES
}}return NO},hasSubclass:function(a){return(a&&a.subclassOf)?a.subclassOf(this):NO
},kindOf:function(a){return(this===a)||this.subclassOf(a)},design:function(){if(this.isDesign){return this
}var a=this.extend.apply(this,arguments);a.isDesign=YES;if(SC.ObjectDesigner){SC.ObjectDesigner.didLoadDesign(a,this,SC.A(arguments))
}return a}});SC.Object.prototype={_kvo_enabled:YES,_object_init:function(c){var b,a=(c)?c.length:0;
for(b=0;b<a;b++){SC._object_extend(this,c[b])}SC.generateGuid(this);this.init();var d=this.initMixin;
a=(d)?d.length:0;for(b=0;b<a;b++){d[b].call(this)}return this},mixin:function(){var b,a=arguments.length;
for(b=0;b<a;b++){SC.mixin(this,arguments[b])}for(b=0;b<a;b++){var c=arguments[b].initMixin;
if(c){c.call(this)}}return this},init:function(){this.initObservable();return this
},isDestroyed:NO,destroy:function(){if(this.get("isDestroyed")){return this}this.set("isDestroyed",YES);
var b,c=this.destroyMixin,a=(c)?c.length:0;for(b=0;b<a;b++){c[b].call(this)}return this
},isObject:true,respondsTo:function(a){return !!(SC.typeOf(this[a])===SC.T_FUNCTION)
},tryToPerform:function(b,c,a){return this.respondsTo(b)&&(this[b](c,a)!==NO)},superclass:function(b){var a=arguments.callee.caller;
if(!a){throw"superclass cannot determine the caller method"}return a.superclass?a.superclass.apply(this,arguments):null
},instanceOf:function(a){return this.constructor===a},kindOf:function(a){return this.constructor.kindOf(a)
},toString:function(){if(!this._object_toString){var a=SC._object_className(this.constructor);
var b="%@:%@".fmt(a,SC.guidFor(this));if(a){this._object_toString=b}else{return b
}}return this._object_toString},awake:function(c){var e=this.outlets,b,a,d;for(b=0,a=e.length;
b<a;++b){d=e[b];this.get(d)}this.bindings.invoke("sync")},invokeOnce:function(a){SC.RunLoop.currentRunLoop.invokeOnce(this,a);
return this},invokeLast:function(a){SC.RunLoop.currentRunLoop.invokeLast(this,a);
return this},concatenatedProperties:["concatenatedProperties","initMixin","destroyMixin"]};
SC.Object.prototype.constructor=SC.Object;SC.mixin(SC.Object.prototype,SC.Observable);
function findClassNames(){if(SC._object_foundObjectClassNames){return}SC._object_foundObjectClassNames=true;
var b=[];var a=function(c,d,g){g--;if(b.indexOf(d)>=0){return}b.push(d);for(var e in d){if(e=="__scope__"){continue
}if(e=="superclass"){continue}if(!e.match(/^[A-Z0-9]/)){continue}var h=(c)?[c,e].join("."):e;
var f=d[e];switch(SC.typeOf(f)){case SC.T_CLASS:if(!f._object_className){f._object_className=h
}if(g>=0){a(h,f,g)}break;case SC.T_OBJECT:if(g>=0){a(h,f,g)}break;case SC.T_HASH:if(((c)||(h==="SC"))&&(g>=0)){a(h,f,g)
}break;default:break}}};a(null,window,2)}SC.instanceOf=function(a,b){return !!(a&&a.constructor===b)
};SC.kindOf=function(a,b){if(a&&!a.isClass){a=a.constructor}return !!(a&&a.kindOf&&a.kindOf(b))
};SC._object_className=function(b){if(!SC.isReady){return""}if(!b._object_className){findClassNames()
}if(b._object_className){return b._object_className}var a=b;while(a&&!a._object_className){a=a.superclass
}return(a&&a._object_className)?a._object_className:"Anonymous"};require("system/object");
SC._ChainObserver=function(a){this.property=a};SC._ChainObserver.createChain=function(d,k,f,a,b){var c=k.split("."),h=new SC._ChainObserver(c[0]),g=h,e=c.length;
for(var j=1;j<e;j++){g=g.next=new SC._ChainObserver(c[j])}h.objectDidChange(d);g.target=f;
g.method=a;g.context=b;return h};SC._ChainObserver.prototype={isChainObserver:true,object:null,property:null,next:null,target:null,method:null,objectDidChange:function(a){if(a===this.object){return
}if(this.object&&this.object.removeObserver){this.object.removeObserver(this.property,this,this.propertyDidChange)
}this.object=a;if(this.object&&this.object.addObserver){this.object.addObserver(this.property,this,this.propertyDidChange)
}this.propertyDidChange()},propertyDidChange:function(){var b=this.object;var e=this.property;
var d=(b&&b.get)?b.get(e):null;if(this.next){this.next.objectDidChange(d)}var f=this.target,g=this.method,c=this.context;
if(f&&g){var a=b?b.propertyRevision:null;if(c){g.call(f,b,e,d,c,a)}else{g.call(f,b,e,d,a)
}}},destroyChain:function(){var a=this.object;if(a&&a.removeObserver){a.removeObserver(this.property,this,this.propertyDidChange)
}if(this.next){this.next.destroyChain()}this.next=this.target=this.method=this.object=this.context=null;
return null}};sc_require("mixins/observable");sc_require("system/set");SC.Observers={queue:[],addObserver:function(c,d,e,b){var a;
if(SC.typeOf(c)===SC.T_STRING){a=SC.tupleForPropertyPath(c,b)}else{a=c}if(a){a[0].addObserver(a[1],d,e)
}else{this.queue.push([c,d,e,b])}},removeObserver:function(f,g,h,d){var c,b,a,e;a=SC.tupleForPropertyPath(f,d);
if(a){a[0].removeObserver(a[1],g,h)}c=this.queue.length;b=this.queue;while(--c>=0){e=b[c];
if((e[0]===f)&&(e[1]===g)&&(e[2]==h)&&(e[3]===d)){b[c]=null}}},addPendingRangeObserver:function(a){var b=this.rangeObservers;
if(!b){b=this.rangeObservers=SC.CoreSet.create()}b.add(a);return this},_TMP_OUT:[],flush:function(a){var e=this.queue;
if(e&&e.length>0){var h=(this.queue=[]);var j=e.length;while(--j>=0){var k=e[j];if(!k){continue
}var f=SC.tupleForPropertyPath(k[0],k[3]);if(f){f[0].addObserver(f[1],k[1],k[2])}else{h.push(k)
}}}if(a._kvo_needsRangeObserver){var g=this.rangeObservers,d=g?g.get("length"):0,b=this._TMP_OUT,c;
for(j=0;j<d;j++){c=g[j];if(c.setupPending(a)){b.push(c)}}if(b.length>0){g.removeEach(b)
}b.length=0;a._kvo_needsRangeObserver=NO}},isObservingSuspended:0,_pending:SC.CoreSet.create(),objectHasPendingChanges:function(a){this._pending.add(a)
},suspendPropertyObserving:function(){this.isObservingSuspended++},resumePropertyObserving:function(){var c;
if(--this.isObservingSuspended<=0){c=this._pending;this._pending=SC.CoreSet.create();
var b,a=c.length;for(b=0;b<a;b++){c[b]._notifyPropertyObservers()}c.clear();c=null
}}};sc_require("system/object");SC.LOG_BINDINGS=NO;SC.BENCHMARK_BINDING_NOTIFICATIONS=NO;
SC.BENCHMARK_BINDING_SETUP=NO;SC.MULTIPLE_PLACEHOLDER="@@MULT@@";SC.NULL_PLACEHOLDER="@@NULL@@";
SC.EMPTY_PLACEHOLDER="@@EMPTY@@";SC.Binding={beget:function(b){var a=SC.beget(this);
a.parentBinding=this;if(b!==undefined){a=a.from(b)}return a},builder:function(){var b=this,a=function(c){return b.beget().from(c)
};a.beget=function(){return b.beget()};return a},from:function(b,a){if(!b){return this
}var c=(this===SC.Binding)?this.beget():this;c._fromPropertyPath=b;c._fromRoot=a;
c._fromTuple=null;return c},to:function(b,a){var c=(this===SC.Binding)?this.beget():this;
c._toPropertyPath=b;c._toRoot=a;c._toTuple=null;return c},connect:function(){if(this.isConnected){return this
}this.isConnected=YES;this._connectionPending=YES;this._syncOnConnect=YES;SC.Binding._connectQueue.add(this);
return this},_connect:function(){if(!this._connectionPending){return}this._connectionPending=NO;
var c,a,b=SC.BENCHMARK_BINDING_SETUP;if(b){SC.Benchmark.start("SC.Binding.connect()")
}c=this._fromPropertyPath;a=this._fromRoot;if(SC.typeOf(c)===SC.T_STRING){if(c.indexOf(".")===0){c=c.slice(1);
if(!a){a=this._toRoot}}else{if(c.indexOf("*")===0){c=[this._fromRoot||this._toRoot,c.slice(1)];
a=null}}}SC.Observers.addObserver(c,this,this.fromPropertyDidChange,a);if(!this._oneWay){c=this._toPropertyPath;
a=this._toRoot;SC.Observers.addObserver(c,this,this.toPropertyDidChange,a)}if(b){SC.Benchmark.end("SC.Binding.connect()")
}if(this._syncOnConnect){this._syncOnConnect=NO;if(b){SC.Benchmark.start("SC.Binding.connect().sync")
}this.sync();if(b){SC.Benchmark.end("SC.Binding.connect().sync")}}},disconnect:function(){if(!this.isConnected){return this
}if(this._connectionPending){this._connectionPending=NO}else{SC.Observers.removeObserver(this._fromPropertyPath,this,this.fromPropertyDidChange,(this._fromRoot||this._toRoot));
if(!this._oneWay){SC.Observers.removeObserver(this._toPropertyPath,this,this.toPropertyDidChange,this._toRoot)
}}this.isConnected=NO;return this},fromPropertyDidChange:function(c,b){var a=c?c.get(b):null;
if(a!==this._bindingValue||b==="[]"){this._setBindingValue(c,b);this._changePending=YES;
SC.Binding._changeQueue.add(this)}},toPropertyDidChange:function(c,b){if(this._oneWay){return
}var a=c.get(b);if(a!==this._transformedBindingValue){this._setBindingValue(c,b);
this._changePending=YES;SC.Binding._changeQueue.add(this)}},_setBindingValue:function(b,a){this._bindingSource=b;
this._bindingKey=a},_computeBindingValue:function(){var g=this._bindingSource,e=this._bindingKey,c,b;
this._bindingValue=c=(g?g.getPath(e):null);var f=this._transforms;if(f){var a=f.length,d;
for(b=0;b<a;b++){d=f[b];c=d(c,this)}}if(this._noError&&SC.typeOf(c)===SC.T_ERROR){c=null
}this._transformedBindingValue=c},_connectQueue:SC.CoreSet.create(),_alternateConnectQueue:SC.CoreSet.create(),_changeQueue:SC.CoreSet.create(),_alternateChangeQueue:SC.CoreSet.create(),_changePending:NO,flushPendingChanges:function(){if(this._isFlushing){return NO
}this._isFlushing=YES;SC.Observers.suspendPropertyObserving();var b=NO,c=SC.LOG_BINDINGS,a,d;
while((a=this._connectQueue).length>0){this._connectQueue=this._alternateConnectQueue;
this._alternateConnectQueue=a;while(d=a.pop()){d._connect()}}while((a=this._changeQueue).length>0){if(c){console.log("Begin: Trigger changed bindings")
}b=YES;this._changeQueue=this._alternateChangeQueue;this._alternateChangeQueue=a;
while(d=a.pop()){d.applyBindingValue()}if(c){console.log("End: Trigger changed bindings")
}}this._isFlushing=NO;SC.Observers.resumePropertyObserving();return b},applyBindingValue:function(){this._changePending=NO;
this._computeBindingTargets();this._computeBindingValue();var a=this._bindingValue,b=this._transformedBindingValue,c=SC.BENCHMARK_BINDING_NOTIFICATIONS,d=SC.LOG_BINDINGS;
if(!this._oneWay&&this._fromTarget){if(d){console.log("%@: %@ -> %@".fmt(this,a,b))
}if(c){SC.Benchmark.start(this.toString()+"->")}this._fromTarget.setPathIfChanged(this._fromPropertyKey,a);
if(c){SC.Benchmark.end(this.toString()+"->")}}if(this._toTarget){if(d){console.log("%@: %@ <- %@".fmt(this,a,b))
}if(c){SC.Benchmark.start(this.toString()+"<-")}this._toTarget.setPathIfChanged(this._toPropertyKey,b);
if(c){SC.Benchmark.start(this.toString()+"<-")}}},sync:function(){if(!this.isConnected){return this
}if(this._connectionPending){this._syncOnConnect=YES}else{this._computeBindingTargets();
var c=this._fromTarget,b=this._fromPropertyKey;if(!c||!b){return this}var a=c.getPath(b);
if(a!==this._bindingValue||b==="[]"){this._setBindingValue(c,b);this._changePending=YES;
SC.Binding._changeQueue.add(this)}}return this},_syncOnConnect:NO,_computeBindingTargets:function(){if(!this._fromTarget){var c,b,a;
c=this._fromPropertyPath;b=this._fromRoot;if(SC.typeOf(c)===SC.T_STRING){if(c.indexOf(".")===0){c=c.slice(1);
if(!b){b=this._toRoot}}else{if(c.indexOf("*")===0){c=[b||this._toRoot,c.slice(1)];
b=null}}}a=SC.tupleForPropertyPath(c,b);if(a){this._fromTarget=a[0];this._fromPropertyKey=a[1]
}}if(!this._toTarget){c=this._toPropertyPath;b=this._toRoot;a=SC.tupleForPropertyPath(c,b);
if(a){this._toTarget=a[0];this._toPropertyKey=a[1]}}},oneWay:function(c,a){if((a===undefined)&&(SC.typeOf(c)===SC.T_BOOL)){a=c;
c=null}var b=this.from(c);if(b===SC.Binding){b=b.beget()}b._oneWay=(a===undefined)?YES:a;
return b},transform:function(b){var c=(this===SC.Binding)?this.beget():this;var a=c._transforms;
if(a&&(a===c.parentBinding._transform)){a=c._transforms=a.slice()}if(!a){a=c._transforms=[]
}a.push(b);return c},resetTransforms:function(){var a=(this===SC.Binding)?this.beget():this;
a._transforms=null;return a},noError:function(c,a){if((a===undefined)&&(SC.typeOf(c)===SC.T_BOOL)){a=c;
c=null}var b=this.from(c);if(b===SC.Binding){b=b.beget()}b._noError=(a===undefined)?YES:a;
return b},single:function(b,a){if(a===undefined){a=SC.MULTIPLE_PLACEHOLDER}return this.from(b).transform(function(e,d){if(e&&e.isEnumerable){var c=e.get("length");
e=(c>1)?a:(c<=0)?null:e.firstObject()}return e})},notEmpty:function(b,a){if(a===undefined){a=SC.EMPTY_PLACEHOLDER
}return this.from(b).transform(function(d,c){if(SC.none(d)||(d==="")||(SC.isArray(d)&&d.length===0)){d=a
}return d})},notNull:function(b,a){if(a===undefined){a=SC.EMPTY_PLACEHOLDER}return this.from(b).transform(function(d,c){if(SC.none(d)){d=a
}return d})},multiple:function(a){return this.from(a).transform(function(b){if(!SC.isArray(b)){b=(b==null)?[]:[b]
}return b})},bool:function(a){return this.from(a).transform(function(b){var c=SC.typeOf(b);
if(c===SC.T_ERROR){return b}return(c==SC.T_ARRAY)?(b.length>0):(b==="")?NO:!!b})},and:function(b,a){var c=SC.Object.create({valueABinding:b,valueBBinding:a,and:function(){return(this.get("valueA")&&this.get("valueB"))
}.property("valueA","valueB").cacheable()});return this.from("and",c).oneWay()},or:function(b,a){var c=SC.Object.create({valueABinding:b,valueBBinding:a,or:function(){return(this.get("valueA")||this.get("valueB"))
}.property("valueA","valueB").cacheable()});return this.from("or",c).oneWay()},not:function(a){return this.from(a).transform(function(b){var c=SC.typeOf(b);
if(c===SC.T_ERROR){return b}return !((c==SC.T_ARRAY)?(b.length>0):(b==="")?NO:!!b)
})},isNull:function(a){return this.from(a).transform(function(b){var c=SC.typeOf(b);
return(c===SC.T_ERROR)?b:SC.none(b)})},toString:function(){var c=this._fromRoot?"<%@>:%@".fmt(this._fromRoot,this._fromPropertyPath):this._fromPropertyPath;
var b=this._toRoot?"<%@>:%@".fmt(this._toRoot,this._toPropertyPath):this._toPropertyPath;
var a=this._oneWay?"[oneWay]":"";return"SC.Binding%@(%@ -> %@)%@".fmt(SC.guidFor(this),c,b,a)
}};SC.binding=function(b,a){return SC.Binding.from(b,a)};SC.Cookie=SC.Object.extend({name:null,value:"",expires:null,path:null,domain:null,secure:NO,isCookie:YES,destroy:function(){this.set("expires",-1);
this.write();arguments.callee.base.apply(this,arguments)},write:function(){var b=this.get("name"),j=this.get("value"),c=this.get("expires"),l=this.get("path"),e=this.get("domain"),a=this.get("secure");
var h="";if(c&&(SC.typeOf(c)===SC.T_NUMBER||(SC.DateTime&&c.get&&c.get("milliseconds"))||SC.typeOf(c.toUTCString)===SC.T_FUNCTION)){var d;
if(SC.typeOf(c)===SC.T_NUMBER){d=new Date();d.setTime(d.getTime()+(c*24*60*60*1000))
}else{if(SC.DateTime&&c.get&&c.get("milliseconds")){d=new Date(c.get("milliseconds"))
}else{if(SC.typeOf(c.toUTCString)===SC.T_FUNCTION){d=c}}}if(d){h="; expires="+d.toUTCString()
}}var k=l?"; path="+l:"";var g=e?"; domain="+e:"";var f=a?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),h,k,g,f].join("");
return this}});SC.Cookie.mixin({find:function(a){if(document.cookie&&document.cookie!=""){var d=document.cookie.split(";");
for(var c=0;c<d.length;c++){var b=String(d[c]).trim();if(b.substring(0,a.length+1)===(a+"=")){return SC.Cookie.create({name:a,value:decodeURIComponent(b.substring(a.length+1))})
}}}return null}});SC.Error=SC.Object.extend({code:-1,message:"",errorValue:null,errorObject:function(){return this
}.property().cacheable(),label:null,toString:function(){return"SC.Error:%@:%@ (%@)".fmt(SC.guidFor(this),this.get("message"),this.get("code"))
},isError:YES});SC.Error.desc=function(d,a,e,c){var b={message:d};if(a!==undefined){b.label=a
}if(c!==undefined){b.code=c}if(e!==undefined){b.errorValue=e}return this.create(b)
};SC.$error=function(b,a,d,e){return SC.Error.desc(b,a,d,e)};SC.ok=function(a){return(a!==false)&&!(a&&a.isError)
};SC.$ok=SC.ok;SC.val=function(a){if(a&&a.isError){return a.get?a.get("errorValue"):null
}else{return a}};SC.$val=SC.val;SC.Error.HAS_MULTIPLE_VALUES=-100;sc_require("mixins/enumerable");
sc_require("mixins/observable");sc_require("mixins/freezable");sc_require("mixins/copyable");
SC.IndexSet=SC.mixin({},SC.Enumerable,SC.Observable,SC.Freezable,SC.Copyable,{_sc_sliceContent:function(e){if(e.length<1000){return e.slice()
}var d=0,a=[],b=e[0];while(b!==0){a[d]=b;d=(b<0)?(0-b):b;b=e[d]}a[d]=0;this._hint(0,d,a);
return a},create:function(c,b){var a=SC.beget(this);a.initObservable();a.registerDependentKey("min","[]");
if(c&&c.isIndexSet){a._content=this._sc_sliceContent(c._content);a.max=c.max;a.length=c.length;
a.source=c.source}else{a._content=[0];if(c!==undefined){a.add(c,b)}}return a},isIndexSet:YES,HINT_SIZE:256,length:0,max:0,min:function(){var a=this._content,b=a[0];
return(b===0)?-1:(b>0)?0:Math.abs(b)}.property("[]").cacheable(),firstObject:function(){return(this.get("length")>0)?this.get("min"):undefined
}.property(),rangeStartForIndex:function(c){var f=this._content,a=this.get("max"),b,e,d;
if(c>=a){return a}if(Math.abs(f[c])>c){return c}d=c-(c%SC.IndexSet.HINT_SIZE);b=f[d];
if(b<0||b>c){b=d}e=Math.abs(f[b]);while(e<c){b=e;e=Math.abs(f[b])}return b},isEqual:function(c){if(c===this){return YES
}if(!c||!c.isIndexSet||(c.max!==this.max)||(c.length!==this.length)){return NO}var e=this._content,b=c._content,d=0,a=e[d];
do{if(b[d]!==a){return NO}d=Math.abs(a);a=e[d]}while(d!==0);return YES},indexBefore:function(b){if(b===0){return -1
}b--;var c=this._content,a=this.get("max"),d=this.rangeStartForIndex(b);if(!c){return null
}while((d===a)||(c[d]<0)){if(d===0){return -1}b=d-1;d=this.rangeStartForIndex(b)}return b
},indexAfter:function(b){var d=this._content,a=this.get("max"),e,c;if(!d||(b>=a)){return -1
}b++;e=this.rangeStartForIndex(b);c=d[e];while(c<0){if(c===0){return -1}b=e=Math.abs(c);
c=d[e]}return b},contains:function(g,c){var b,f,a,e,d;if(c===undefined){if(g===null||g===undefined){return NO
}if(typeof g===SC.T_NUMBER){c=1}else{if(g&&g.isIndexSet){if(g===this){return YES}b=g._content;
f=0;a=b[f];while(a!==0){if((a>0)&&!this.contains(f,a-f)){return NO}f=Math.abs(a);
a=b[f]}return YES}else{c=g.length;g=g.start}}}e=this.rangeStartForIndex(g);d=this._content[e];
return(d>0)&&(e<=g)&&(d>=(g+c))},intersects:function(f,c){var b,e,a,d;if(c===undefined){if(typeof f===SC.T_NUMBER){c=1
}else{if(f&&f.isIndexSet){if(f===this){return YES}b=f._content;e=0;a=b[e];while(a!==0){if((a>0)&&this.intersects(e,a-e)){return YES
}e=Math.abs(a);a=b[e]}return NO}else{c=f.length;f=f.start}}}e=this.rangeStartForIndex(f);
b=this._content;a=b[e];d=f+c;while(e<d){if(a===0){return NO}if((a>0)&&(a>f)){return YES
}e=Math.abs(a);a=b[e]}return NO},without:function(b,a){if(b===this){return SC.IndexSet.create()
}return this.clone().remove(b,a)},replace:function(c,a){if(a===undefined){if(typeof c===SC.T_NUMBER){a=1
}else{if(c&&c.isIndexSet){this._content=this._sc_sliceContent(c._content);this.beginPropertyChanges().set("max",c.max).set("length",c.length).set("source",c.source).enumerableContentDidChange().endPropertyChanges();
return this}else{a=c.length;c=c.start}}}var b=this.length;this._content.length=1;
this._content[0]=0;this.length=this.max=0;return this.add(c,a)},add:function(a,b){if(this.isFrozen){throw SC.FROZEN_ERROR
}var e,j,d;if(a&&a.isIndexSet){e=a._content;if(!e){return this}j=0;d=e[0];while(d!==0){if(d>0){this.add(j,d-j)
}j=d<0?0-d:d;d=e[j]}return this}else{if(b===undefined){if(a===null||a===undefined){return this
}else{if(typeof a===SC.T_NUMBER){b=1}else{b=a.length;a=a.start}}}else{if(b===null){b=1
}}}if(b<=0){return this}var f=this.get("max"),c=f,h,g;e=this._content;if(a===f){if(a>0){j=this.rangeStartForIndex(a-1);
d=e[j];if(d>0){delete e[f];e[j]=f=a+b;a=j}else{e[f]=f=a+b}}else{e[a]=f=b}e[f]=0;this.set("max",f);
this.set("length",this.length+b);b=f-a}else{if(a>f){e[f]=0-a;e[a]=a+b;e[a+b]=0;this.set("max",a+b);
this.set("length",this.length+b);b=a+b-f;a=f}else{j=this.rangeStartForIndex(a);d=e[j];
f=a+b;h=0;if((a>0)&&(j===a)&&(d<=0)){j=this.rangeStartForIndex(a-1);d=e[j]}if(d<0){e[j]=0-a;
if(Math.abs(d)>f){e[a]=0-f;e[f]=d}else{e[a]=d}}else{a=j;if(d>f){f=d}}j=a;while(j<f){g=e[j];
if(g===0){e[f]=0;d=f;h+=f-j}else{d=Math.abs(g);if(d>f){e[f]=g;d=f}if(g<0){h+=d-j}}delete e[j];
j=d}if((j=e[f])>0){delete e[f];f=j}e[a]=f;if(f>c){this.set("max",f)}this.set("length",this.get("length")+h);
b=f-a}}this._hint(a,b);if(h!==0){this.enumerableContentDidChange()}return this},remove:function(a,b){if(this.isFrozen){throw SC.FROZEN_ERROR
}if(b===undefined){if(a===null||a===undefined){return this}else{if(typeof a===SC.T_NUMBER){b=1
}else{if(a.isIndexSet){a.forEachRange(this.remove,this);return this}else{b=a.length;
a=a.start}}}}if(b<=0){return this}var f=this.get("max"),c=f,e=this._content,k,d,j,g,h;
if(a>=f){return this}k=this.rangeStartForIndex(a);d=e[k];h=a+b;j=0;if((a>0)&&(k===a)&&(d>0)){k=this.rangeStartForIndex(a-1);
d=e[k]}if(d>0){e[k]=a;if(d>h){e[a]=h;e[h]=d}else{e[a]=d}}else{a=k;d=Math.abs(d);if(d>h){h=d
}}k=a;while(k<h){g=e[k];if(g===0){e[h]=0;d=h}else{d=Math.abs(g);if(d>h){e[h]=g;d=h
}if(g>0){j+=d-k}}delete e[k];k=d}if((k=e[h])<0){delete e[h];h=Math.abs(k)}if(e[h]===0){delete e[h];
e[a]=0;this.set("max",a)}else{e[a]=0-h}this.set("length",this.get("length")-j);b=h-a;
this._hint(a,b);if(j!==0){this.enumerableContentDidChange()}return this},_hint:function(g,d,c){if(c===undefined){c=this._content
}var b=SC.IndexSet.HINT_SIZE,a=Math.abs(c[g]),f=g-(g%b)+b,e=g+d;while(f<e){while((a!==0)&&(a<=f)){g=a;
a=Math.abs(c[g])}if(a===0){delete c[f]}else{if(f!==g){c[f]=g}}f+=b}},clear:function(){if(this.isFrozen){throw SC.FROZEN_ERROR
}var a=this.length;this._content.length=1;this._content[0]=0;this.set("length",0).set("max",0);
if(a>0){this.enumerableContentDidChange()}},addEach:function(b){if(this.isFrozen){throw SC.FROZEN_ERROR
}this.beginPropertyChanges();var a=b.get("length");if(b.isSCArray){while(--a>=0){this.add(b.objectAt(a))
}}else{if(b.isEnumerable){b.forEach(function(c){this.add(c)},this)}}this.endPropertyChanges();
return this},removeEach:function(b){if(this.isFrozen){throw SC.FROZEN_ERROR}this.beginPropertyChanges();
var a=b.get("length");if(b.isSCArray){while(--a>=0){this.remove(b.objectAt(a))}}else{if(b.isEnumerable){b.forEach(function(c){this.remove(c)
},this)}}this.endPropertyChanges();return this},clone:function(){return SC.IndexSet.create(this)
},inspect:function(){var e=this._content,b=e.length,a=0,c=[],d;for(a=0;a<b;a++){d=e[a];
if(d!==undefined){c.push("%@:%@".fmt(a,d))}}return"SC.IndexSet<%@>".fmt(c.join(" , "))
},forEachRange:function(f,d){var b=this._content,e=0,a=b[e],c=this.source;if(d===undefined){d=null
}while(a!==0){if(a>0){f.call(d,e,a-e,this,c)}e=Math.abs(a);a=b[e]}return this},forEachIn:function(b,c,k,f){var g=this._content,j=0,h=0,d=b+c,a=this.source,e=g[j];
if(f===undefined){f=null}while(e!==0){if(j<b){j=b}while((j<e)&&(j<d)){k.call(f,j++,h++,this,a)
}if(j>=d){j=e=0}else{j=Math.abs(e);e=g[j]}}return this},lengthIn:function(g,d){var a=0;
if(d===undefined){if(g===null||g===undefined){return 0}else{if(typeof g===SC.T_NUMBER){d=1
}else{if(g.isIndexSet){g.forEachRange(function(j,h){a+=this.lengthIn(j,h)},this);
return a}else{d=g.length;g=g.start}}}}if(this.get("length")===0){return 0}var c=this._content,f=0,b=c[f],e=g+d;
while(f<e&&b!==0){if(b>0){a+=(b>e)?e-f:b-f}f=Math.abs(b);b=c[f]}return a},source:null,indexOf:function(d,c){var f=this.source;
if(!f){throw"%@.indexOf() requires source".fmt(this)}var b=f.get("length"),e=this._content,g=e[0]<0?Math.abs(e[0]):0,a;
while(g>=0&&g<b){a=f.indexOf(d,g);if(a<0){return -1}if(this.contains(a)){return a
}g=a+1}return -1},lastIndexOf:function(d,c){var e=this.source;if(!e){throw"%@.lastIndexOf() requires source".fmt(this)
}var b=e.get("length"),f=this.max-1,a;if(f>=b){f=b-1}while(f>=0){a=e.lastIndexOf(d,f);
if(a<0){return -1}if(this.contains(a)){return a}f=a+1}return -1},forEachObject:function(g,e){var d=this.source;
if(!d){throw"%@.forEachObject() requires source".fmt(this)}var c=this._content,f=0,a=0,b=c[f];
if(e===undefined){e=null}while(b!==0){while(f<b){g.call(e,d.objectAt(f),f,d,this);
f++}f=Math.abs(b);b=c[f]}return this},addObject:function(c,d){var e=this.source;if(!e){throw"%@.addObject() requires source".fmt(this)
}var b=e.get("length"),f=0,a;while(f>=0&&f<b){a=e.indexOf(c,f);if(a>=0){this.add(a);
if(d){return this}f=a++}else{return this}}return this},addObjects:function(b,a){b.forEach(function(c){this.addObject(c,a)
},this);return this},removeObject:function(c,d){var e=this.source;if(!e){throw"%@.removeObject() requires source".fmt(this)
}var b=e.get("length"),f=0,a;while(f>=0&&f<b){a=e.indexOf(c,f);if(a>=0){this.remove(a);
if(d){return this}f=a+1}else{return this}}return this},removeObjects:function(b,a){b.forEach(function(c){this.removeObject(c,a)
},this);return this},LOG_OBSERVING:NO,forEach:function(g,e){var c=this._content,f=0,a=0,d=this.source,b=c[f];
if(e===undefined){e=null}while(b!==0){while(f<b){g.call(e,f++,a++,this,d)}f=Math.abs(b);
b=c[f]}return this},nextObject:function(f,b,c){var e=this._content,d=c.next,a=this.get("max");
if(b===null){b=d=0}else{if(b>=a){delete c.next;return null}else{b++}}if(b===d){do{b=Math.abs(d);
d=e[b]}while(d<0);c.next=d}return b},toString:function(){var a=[];this.forEachRange(function(c,b){a.push(b===1?c:"%@..%@".fmt(c,c+b-1))
},this);return"SC.IndexSet<%@>".fmt(a.join(","))},max:0});SC.IndexSet.slice=SC.IndexSet.copy=SC.IndexSet.clone;
SC.IndexSet.EMPTY=SC.IndexSet.create().freeze();SC.LOGGER_LOG_DELIMITER=", ";SC.LOGGER_LOG_ERROR="ERROR: ";
SC.LOGGER_LOG_INFO="INFO: ";SC.LOGGER_LOG_WARN="WARNING: ";SC.LOGGER_LOG_DEBUG="DEBUG: ";
SC.Logger=SC.Object.create({debugEnabled:NO,exists:function(){return typeof(this.get("reporter"))!=="undefined"&&this.get("reporter")!=null
}.property("reporter").cacheable(),fallBackOnAlert:NO,fallBackOnLog:YES,format:YES,reporter:console,log:function(){var a=this.get("reporter");
if(this.get("exists")&&typeof(a.log)==="function"){if(this.get("format")){a.log(this._argumentsToString.apply(this,arguments))
}else{a.log.apply(a,arguments)}return true}else{if(this.fallBackOnAlert){var b=this.get("format")?this._argumentsToString.apply(this,arguments):arguments;
if(this.get("exists")&&typeof(a.alert)==="function"){a.alert(b)}else{alert(b)}return true
}}return false},debug:function(){var c=this.get("reporter");if(this.get("debugEnabled")!==YES){return false
}if(this.get("exists")&&(typeof c.debug==="function")){c.debug.apply(c,arguments);
return true}else{if(this.fallBackOnLog){var b=this._argumentsToArray(arguments);if(typeof(b.unshift)==="function"){b.unshift(SC.LOGGER_LOG_DEBUG)
}return this.log.apply(this,b)}}return false},dir:function(){var a=this.get("reporter");
if(this.get("exists")&&typeof(a.dir)==="function"){a.dir.apply(a,arguments);return true
}return(this.fallBackOnLog)?this.log.apply(this,arguments):false},dirxml:function(){var a=this.get("reporter");
if(this.get("exists")&&typeof(a.dirxml)==="function"){a.dirxml.apply(a,arguments);
return true}return(this.fallBackOnLog)?this.log.apply(this,arguments):false},error:function(){var c=this.get("reporter");
if(this.get("exists")&&typeof(c.error)==="function"){c.error.apply(c,arguments);return true
}else{if(this.fallBackOnLog){var b=this._argumentsToArray(arguments);if(typeof(b.unshift)==="function"){b.unshift(SC.LOGGER_LOG_ERROR)
}return this.log.apply(this,b)}}return false},group:function(b){var a=this.get("reporter");
if(this.get("exists")&&typeof(a.group)==="function"){a.group(b);return true}return false
},groupEnd:function(){var a=this.get("reporter");if(this.get("exists")&&typeof(a.groupEnd)==="function"){a.groupEnd();
return true}return false},info:function(){var c=this.get("reporter");if(this.get("exists")&&typeof(c.info)==="function"){c.info.apply(c,arguments);
return true}else{if(this.fallBackOnLog){var b=this._argumentsToArray(arguments);if(typeof(b.unshift)==="function"){b.unshift(SC.LOGGER_LOG_INFO)
}return this.log.apply(this,b)}}return false},profile:function(){var a=this.get("reporter");
if(this.get("exists")&&typeof(a.profile)==="function"){a.profile();return true}return false
},profileEnd:function(){var a=this.get("reporter");if(this.get("exists")&&typeof(a.profileEnd)==="function"){a.profileEnd();
return true}return false},time:function(b){var a=this.get("reporter");if(this.get("exists")&&typeof(a.time)==="function"){a.time(b);
return true}return false},timeEnd:function(b){var a=this.get("reporter");if(this.get("exists")&&typeof(a.timeEnd)==="function"){a.timeEnd(b);
return true}return false},trace:function(){var a=this.get("reporter");if(this.get("exists")&&typeof(a.trace)==="function"){a.trace();
return true}return false},warn:function(){var c=this.get("reporter");if(this.get("exists")&&typeof(c.warn)==="function"){c.warn.apply(c,arguments);
return true}else{if(this.fallBackOnLog){var b=this._argumentsToArray(arguments);if(typeof(b.unshift)==="function"){b.unshift(SC.LOGGER_LOG_WARN)
}return this.log.apply(this,b)}}return false},_argumentsToArray:function(d){if(!d){return[]
}var b=[];for(var c=0;c<d.length;c++){b[c]=d[c]}return b},_argumentsToString:function(){var b="";
for(var a=0;a<arguments.length-1;a++){b+=arguments[a]+SC.LOGGER_LOG_DELIMITER}b+=arguments[arguments.length-1];
return b}});sc_require("private/observer_set");SC.RunLoop=SC.Object.extend({beginRunLoop:function(){this._start=new Date().getTime();
if(SC.LOG_BINDINGS||SC.LOG_OBSERVERS){console.log("-- SC.RunLoop.beginRunLoop at %@".fmt(this._start))
}this._runLoopInProgress=YES;return this},isRunLoopInProgress:function(){return this._runLoopInProgress
}.property(),endRunLoop:function(){var a;if(SC.LOG_BINDINGS||SC.LOG_OBSERVERS){console.log("-- SC.RunLoop.endRunLoop ~ flushing application queues")
}do{a=this.flushApplicationQueues();if(!a){a=this._flushinvokeLastQueue()}}while(a);
this._start=null;if(SC.LOG_BINDINGS||SC.LOG_OBSERVERS){console.log("-- SC.RunLoop.endRunLoop ~ End")
}SC.RunLoop.lastRunLoopEnd=Date.now();this._runLoopInProgress=NO;return this},invokeOnce:function(a,b){if(b===undefined){b=a;
a=this}if(SC.typeOf(b)===SC.T_STRING){b=a[b]}if(!this._invokeQueue){this._invokeQueue=SC.ObserverSet.create()
}this._invokeQueue.add(a,b);return this},invokeLast:function(a,b){if(b===undefined){b=a;
a=this}if(SC.typeOf(b)===SC.T_STRING){b=a[b]}if(!this._invokeLastQueue){this._invokeLastQueue=SC.ObserverSet.create()
}this._invokeLastQueue.add(a,b);return this},flushApplicationQueues:function(){var b=NO,a=this._invokeQueue;
if(a&&a.targets>0){this._invokeQueue=null;b=YES;a.invokeMethods()}return SC.Binding.flushPendingChanges()||b
},_flushinvokeLastQueue:function(){var a=this._invokeLastQueue,b=NO;if(a&&a.targets>0){this._invokeLastQueue=null;
b=YES;if(b){a.invokeMethods()}}return b}});SC.RunLoop.currentRunLoop=null;SC.RunLoop.runLoopClass=SC.RunLoop;
SC.RunLoop.begin=function(){var a=this.currentRunLoop;if(!a){a=this.currentRunLoop=this.runLoopClass.create()
}a.beginRunLoop();return this};SC.RunLoop.end=function(){var a=this.currentRunLoop;
if(!a){throw"SC.RunLoop.end() called outside of a runloop!"}a.endRunLoop();return this
};SC.RunLoop.isRunLoopInProgress=function(){if(this.currentRunLoop){return this.currentRunLoop.get("isRunLoopInProgress")
}return NO};SC.run=function(d,c,b){if(b){var a=SC.RunLoop.isRunLoopInProgress();if(!a){SC.RunLoop.begin()
}d.call(c);if(!a){SC.RunLoop.end()}}else{SC.RunLoop.begin();d.call(c);SC.RunLoop.end()
}};sc_require("system/object");sc_require("mixins/enumerable");sc_require("mixins/copyable");
sc_require("mixins/freezable");SC.SelectionSet=SC.Object.extend(SC.Enumerable,SC.Freezable,SC.Copyable,{isSelectionSet:YES,length:function(){var a=0,b=this._sets,c=this._objects;
if(c){a+=c.get("length")}if(b){b.forEach(function(d){a+=d.get("length")})}return a
}.property().cacheable(),sources:function(){var c=[],d=this._sets,b=d?d.length:0,a,f,e;
for(a=0;a<b;a++){f=d[a];if(f&&f.get("length")>0&&f.source){c.push(f.source)}}return c
}.property().cacheable(),indexSetForSource:function(e){if(!e||!e.isSCArray){return null
}var b=this._indexSetCache,d=this._objects,c,a;if(!b){b=this._indexSetCache={}}c=b[SC.guidFor(e)];
if(c&&c._sourceRevision&&(c._sourceRevision!==e.propertyRevision)){c=null}if(!c){c=this._indexSetForSource(e,NO);
if(c&&c.get("length")===0){c=null}if(d){if(c){c=c.copy()}d.forEach(function(f){if((a=e.indexOf(f))>=0){if(!c){c=SC.IndexSet.create()
}c.add(a)}},this)}if(c){c=b[SC.guidFor(e)]=c.frozenCopy();c._sourceRevision=e.propertyRevision
}}return c},_indexSetForSource:function(f,g){if(g===undefined){g=YES}var d=SC.guidFor(f),c=this[d],e=this._sets,a=e?e.length:0,b=null;
if(c>=a){c=null}if(SC.none(c)){if(g&&!this.isFrozen){this.propertyWillChange("sources");
if(!e){e=this._sets=[]}b=e[a]=SC.IndexSet.create();b.source=f;this[d]=a;this.propertyDidChange("sources")
}}else{b=e?e[c]:null}return b},add:function(a,b,d){if(this.isFrozen){throw SC.FROZEN_ERROR
}var g,f,k,j,c,e,h,l;if(b===undefined&&d===undefined){if(!a){throw"Must pass params to SC.SelectionSet.add()"
}if(a.isIndexSet){return this.add(a.source,a)}if(a.isSelectionSet){g=a._sets;l=a._objects;
f=g?g.length:0;this.beginPropertyChanges();for(k=0;k<f;k++){j=g[k];if(j&&j.get("length")>0){this.add(j.source,j)
}}if(l){this.addObjects(l)}this.endPropertyChanges();return this}}j=this._indexSetForSource(a,YES);
c=this.get("length");h=j.get("length");e=c-h;j.add(b,d);this._indexSetCache=null;
e+=j.get("length");if(e!==c){this.propertyDidChange("length");this.enumerableContentDidChange();
if(h===0){this.notifyPropertyChange("sources")}}return this},remove:function(a,b,d){if(this.isFrozen){throw SC.FROZEN_ERROR
}var g,f,k,j,c,e,h,l;if(b===undefined&&d===undefined){if(!a){throw"Must pass params to SC.SelectionSet.remove()"
}if(a.isIndexSet){return this.remove(a.source,a)}if(a.isSelectionSet){g=a._sets;l=a._objects;
f=g?g.length:0;this.beginPropertyChanges();for(k=0;k<f;k++){j=g[k];if(j&&j.get("length")>0){this.remove(j.source,j)
}}if(l){this.removeObjects(l)}this.endPropertyChanges();return this}}j=this._indexSetForSource(a,YES);
c=this.get("length");e=c-j.get("length");if(j&&(l=this._objects)){if(d!==undefined){b=SC.IndexSet.create(b,d);
d=undefined}l.forEach(function(m){k=a.indexOf(m);if(b.contains(k)){l.remove(m);e--
}},this)}j.remove(b,d);h=j.get("length");e+=h;this._indexSetCache=null;if(e!==c){this.propertyDidChange("length");
this.enumerableContentDidChange();if(h===0){this.notifyPropertyChange("sources")}}return this
},contains:function(b,d,a){if(d===undefined&&a===undefined){return this.containsObject(b)
}var c=this.indexSetForSource(b);if(!c){return NO}return c.contains(d,a)},intersects:function(b,d,a){var c=this.indexSetForSource(b,NO);
if(!c){return NO}return c.intersects(d,a)},_TMP_ARY:[],addObject:function(b){var c=this._TMP_ARY,a;
c[0]=b;a=this.addObjects(c);c.length=0;return a},addObjects:function(a){var d=this._objects,b,c;
if(!d){d=this._objects=SC.CoreSet.create()}b=d.get("length");d.addEach(a);c=d.get("length");
this._indexSetCache=null;if(c!==b){this.propertyDidChange("length");this.enumerableContentDidChange()
}return this},removeObject:function(b){var c=this._TMP_ARY,a;c[0]=b;a=this.removeObjects(c);
c.length=0;return a},removeObjects:function(b){var e=this._objects,c,d,a;if(!e){return this
}c=e.get("length");e.removeEach(b);d=e.get("length");if(a=this._sets){a.forEach(function(f){c+=f.get("length");
f.removeObjects(b);d+=f.get("length")},this)}this._indexSetCache=null;if(d!==c){this.propertyDidChange("length");
this.enumerableContentDidChange()}return this},containsObject:function(c){var e=this._objects;
if(e&&e.contains(c)){return YES}var d=this._sets,b=d?d.length:0,a,f;for(a=0;a<b;a++){f=d[a];
if(f&&f.indexOf(c)>=0){return YES}}return NO},constrain:function(d){var e,b,a,c;this.beginPropertyChanges();
this.get("sources").forEach(function(f){if(f===d){return}var g=this._indexSetForSource(d,NO);
if(g){this.remove(d,g)}},this);e=this._indexSetForSource(d,NO);if(e&&((a=e.get("max"))>(b=d.get("length")))){this.remove(d,b,a-b)
}if(c=this._objects){c.forEach(function(f){if(d.indexOf(f)<0){this.removeObject(f)
}},this)}this.endPropertyChanges();return this},isEqual:function(g){var f,d,b,a,c,e;
if(!g||!g.isSelectionSet){return NO}if(g===this){return YES}if((this._sets===g._sets)&&(this._objects===g._objects)){return YES
}if(this.get("length")!==g.get("length")){return NO}f=this._objects;d=g._objects;
if(f||d){if((f?f.get("length"):0)!==(d?d.get("length"):0)){return NO}if(f&&!f.isEqual(d)){return NO
}}c=this.get("sources");a=c.get("length");for(b=0;b<a;b++){e=c.objectAt(b);f=this._indexSetForSource(e,NO);
d=this._indexSetForSource(e,NO);if(!!d!==!!f){return NO}if(f&&!f.isEqual(d)){return NO
}}return YES},clear:function(){if(this.isFrozen){throw SC.FROZEN_ERROR}if(this._sets){this._sets.length=0
}if(this._objects){this._objects=null}this._indexSetCache=null;this.propertyDidChange("length");
this.enumerableContentDidChange();this.notifyPropertyChange("sources");return this
},copy:function(){var c=this.constructor.create(),d=this._sets,b=d?d.length:0,a,e;
if(d&&b>0){d=c._sets=d.slice();for(a=0;a<b;a++){if(!(e=d[a])){continue}e=d[a]=e.copy();
c[SC.guidFor(e.source)]=a}}if(this._objects){c._objects=this._objects.copy()}return c
},freeze:function(){if(this.isFrozen){return this}var a=this._sets,b=a?a.length:0,c;
while(--b>=0){if(c=a[b]){c.freeze()}}if(this._objects){this._objects.freeze()}return arguments.callee.base.apply(this,arguments)
},toString:function(){var a=this._sets||[];a=a.map(function(b){return b.toString().replace("SC.IndexSet",SC.guidFor(b.source))
},this);if(this._objects){a.push(this._objects.toString())}return"SC.SelectionSet:%@<%@>".fmt(SC.guidFor(this),a.join(","))
},firstObject:function(){var b=this._sets,c=this._objects;if(b&&b.get("length")>0){var e=b?b[0]:null,d=e?e.source:null,a=e?e.firstObject():-1;
if(d&&a>=0){return d.objectAt(a)}}return c?c.firstObject():undefined}.property(),nextObject:function(c,e,b){var d,a;
if(c===0){d=b.objects=[];this.forEach(function(f){d.push(f)},this);b.max=d.length
}d=b.objects;a=d[c];if(c+1>=b.max){b.objects=b.max=null}return a},forEach:function(g,e){var c=this._sets,d=this._objects,b=c?c.length:0,f,a;
for(a=0;a<b;a++){f=c[a];if(f){f.forEachObject(g,e)}}if(d){d.forEach(g,e)}return this
}});SC.SelectionSet.prototype.clone=SC.SelectionSet.prototype.copy;SC.SelectionSet.EMPTY=SC.SelectionSet.create().freeze();
sc_require("mixins/enumerable");sc_require("mixins/array");sc_require("mixins/observable");
sc_require("mixins/delegate_support");SC.SparseArray=SC.Object.extend(SC.Observable,SC.Enumerable,SC.Array,SC.DelegateSupport,{_requestingLength:0,_requestingIndex:0,length:function(){var a=this.delegate;
if(a&&SC.none(this._length)&&a.sparseArrayDidRequestLength){this._requestingLength++;
a.sparseArrayDidRequestLength(this);this._requestingLength--}return this._length||0
}.property().cacheable(),provideLength:function(a){if(SC.none(a)){this._sa_content=null
}if(a!==this._length){this._length=a;if(this._requestingLength<=0){this.enumerableContentDidChange()
}}return this},rangeWindowSize:1,requestedRangeIndex:[],objectAt:function(a){var c=this._sa_content,b;
if(!c){c=this._sa_content=[]}if((b=c[a])===undefined){this.requestIndex(a);b=c[a]
}return b},definedIndexes:function(d){var c=SC.IndexSet.create(),e=this._sa_content,b,a;
if(!e){return c.freeze()}if(d){d.forEach(function(f){if(e[f]!==undefined){c.add(f)
}})}else{a=e.length;for(b=0;b<a;b++){if(e[b]!==undefined){c.add(b)}}}return c.freeze()
},_TMP_RANGE:{},requestIndex:function(b){var c=this.delegate;if(!c){return this}var a=this.get("rangeWindowSize"),e=b;
if(a>1){e=e-Math.floor(e%a)}if(a<1){a=1}this._requestingIndex++;if(c.sparseArrayDidRequestRange){var d=this._TMP_RANGE;
if(this.wasRangeRequested(e)===-1){d.start=e;d.length=a;c.sparseArrayDidRequestRange(this,d);
this.requestedRangeIndex.push(e)}}else{if(c.sparseArrayDidRequestIndex){while(--a>=0){c.sparseArrayDidRequestIndex(this,e+a)
}}}this._requestingIndex--;return this},wasRangeRequested:function(c){var b,a;for(b=0,a=this.requestedRangeIndex.length;
b<a;b++){if(this.requestedRangeIndex[b]===c){return b}}return -1},rangeRequestCompleted:function(b){var a=this.wasRangeRequested(b);
if(a>=0){this.requestedRangeIndex.removeAt(a,1);return YES}return NO},provideObjectsInRange:function(b,e){var c=this._sa_content;
if(!c){c=this._sa_content=[]}var d=b.start,a=b.length;while(--a>=0){c[d+a]=e[a]}if(this._requestingIndex<=0){this.enumerableContentDidChange()
}return this},_TMP_PROVIDE_ARRAY:[],_TMP_PROVIDE_RANGE:{length:1},provideObjectAtIndex:function(c,b){var d=this._TMP_PROVIDE_ARRAY,a=this._TMP_PROVIDE_RANGE;
d[0]=b;a.start=c;return this.provideObjectsInRange(a,d)},objectsDidChangeInRange:function(a){var b=this._sa_content;
if(b){if(a.start===0&&SC.maxRange(a)>=b.length){this._sa_content=null}else{var d=a.start,c=Math.min(d+a.length,b.length);
while(--c>=d){b[c]=undefined}}}this.enumerableContentDidChange(a);return this},indexOf:function(c){var a=this.delegate;
if(a&&a.sparseArrayDidRequestIndexOf){return a.sparseArrayDidRequestIndexOf(this,c)
}else{var b=this._sa_content;if(!b){b=this._sa_content=[]}return b.indexOf(c)}},replace:function(b,g,e){e=e||[];
var c=this.delegate;if(c){if(!c.sparseArrayShouldReplace||!c.sparseArrayShouldReplace(this,b,g,e)){return this
}}var d=this._sa_content;if(!d){d=this._sa_content=[]}d.replace(b,g,e);var a=e?(e.get?e.get("length"):e.length):0;
var f=a-g;if(!SC.none(this._length)){this.propertyWillChange("length");this._length+=f;
this.propertyDidChange("length")}this.enumerableContentDidChange(b,g,f);return this
},reset:function(){this._sa_content=null;this._length=null;this.enumerableContentDidChange();
this.invokeDelegateMethod(this.delegate,"sparseArrayDidReset",this);return this}});
SC.SparseArray.array=function(a){return this.create({_length:a||0})};if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/runtime")
}SC.Locale=SC.Object.extend({init:function(){if(!this.language){SC.Locale._assignLocales()
}if(!this.hasStrings){var c=this._deprecatedLanguageCodes||[];c.push(this.language);
var b=c.length;var a=null;while(!a&&--b>=0){a=String[c[b]]}if(a){this.hasStrings=YES;
this.strings=a}}},hasStrings:NO,strings:{},toString:function(){if(!this.language){SC.Locale._assignLocales()
}return"SC.Locale["+this.language+"]"+SC.guidFor(this)},locWithDefault:function(b,c){var a=this.strings[b];
if(SC.typeOf(a)===SC.T_STRING){return a}else{if(SC.typeOf(c)===SC.T_STRING){return c
}}return b}});SC.Locale.mixin({useAutodetectedLanguage:NO,preferredLanguage:null,createCurrentLocale:function(){var c=(String.useAutodetectedLanguage!==undefined)?String.useAutodetectedLanguage:this.useAutodetectedLanguage;
var b=(String.preferredLanguage!==undefined)?String.preferredLanguage:this.preferredLanguage;
var d=((c)?SC.browser.language:null)||b||SC.browser.language||"en";d=SC.Locale.normalizeLanguage(d);
var a=this.localeClassFor(d);if(d!=this.currentLanguage){this.currentLanguage=d;this.currentLocale=a.create()
}return this.currentLocale},localeClassFor:function(c){c=SC.Locale.normalizeLanguage(c);
var b,a=this.locales[c];if(!a&&((b=c.split("-")[0])!==c)&&(a=this.locales[b])){a=this.locales[c]=a.extend()
}if(!a){a=this.locales[c]=this.locales.en.extend()}return a},define:function(b,c){var a;
if(c===undefined&&(SC.typeOf(b)!==SC.T_STRING)){a=this;c=b}else{a=SC.Locale.localeClassFor(b)
}SC.mixin(a.prototype,c);return a},options:function(){return this.prototype},addStrings:function(b){var a=this.prototype.strings;
if(a){if(!this.prototype.hasOwnProperty("strings")){this.prototype.strings=SC.clone(a)
}}else{a=this.prototype.strings={}}if(b){this.prototype.strings=SC.mixin(a,b)}this.prototype.hasStrings=YES;
return this},_map:{english:"en",french:"fr",german:"de",japanese:"ja",jp:"ja",spanish:"es"},normalizeLanguage:function(a){if(!a){return"en"
}return SC.Locale._map[a.toLowerCase()]||a},_assignLocales:function(){for(var a in this.locales){this.locales[a].prototype.language=a
}},toString:function(){if(!this.prototype.language){SC.Locale._assignLocales()}return"SC.Locale["+this.prototype.language+"]"
},extend:function(){var a=SC.Object.extend.apply(this,arguments);a.addStrings=SC.Locale.addStrings;
a.define=SC.Locale.define;a.options=SC.Locale.options;a.toString=SC.Locale.toString;
return a}});SC.Locale.locales={en:SC.Locale.extend({_deprecatedLanguageCodes:["English"]}),fr:SC.Locale.extend({_deprecatedLanguageCodes:["French"]}),de:SC.Locale.extend({_deprecatedLanguageCodes:["German"]}),ja:SC.Locale.extend({_deprecatedLanguageCodes:["Japanese","jp"]}),es:SC.Locale.extend({_deprecatedLanguageCodes:["Spanish"]})};
SC.stringsFor=function(c,b){var a=SC.Locale.localeClassFor(c);a.addStrings(b);return this
};sc_require("system/locale");SC.stringsFor("English",{"_SC.DateTime.dayNames":"Sunday Monday Tuesday Wednesday Thursday Friday Saturday","_SC.DateTime.abbreviatedDayNames":"Sun Mon Tue Wed Thu Fri Sat","_SC.DateTime.monthNames":"January February March April May June July August September October November December","_SC.DateTime.abbreviatedMonthNames":"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec"});
SC.DROP_ON=1;SC.DROP_BEFORE=2;SC.DROP_AFTER=4;SC.DROP_ANY=7;SC.ALIGN_LEFT="left";
SC.ALIGN_RIGHT="right";SC.ALIGN_CENTER="center";SC.ALIGN_TOP="top";SC.ALIGN_MIDDLE="middle";
SC.ALIGN_BOTTOM="bottom";SC.SAFARI_FOCUS_BEHAVIOR=YES;SC.mixin({data:function(c,b,d){c=(c===window)?"@window":c;
var e=SC.hashFor(c);var a=SC._data_cache;if(!a){SC._data_cache=a={}}var f=a[e];if(b&&!f){a[e]=f={}
}if(f&&(d!==undefined)){f[b]=d}return(b)?f[b]:f},removeData:function(d,c){d=(d===window)?"@window":d;
var e=SC.hashFor(d);var a=SC._data_cache;if(!a){return undefined}var f=a[e];if(!f){return undefined
}var b=(c)?f[c]:f;if(c){delete f[c]}else{delete a[e]}return b}});SC.mixin(Function.prototype,{invokeLater:function(e,a){if(a===undefined){a=1
}var d=this;if(arguments.length>2){var b=SC.$A(arguments).slice(2,arguments.length);
b.unshift(e);var c=d;d=function(){return c.apply(this,b.slice(1))}}return SC.Timer.schedule({target:e,action:d,interval:a})
}});SC.Controller=SC.Object.extend({isEditable:YES});SC.SelectionSupport={hasSelectionSupport:YES,allowsSelection:YES,allowsMultipleSelection:YES,allowsEmptySelection:YES,firstSelectableObject:function(){return this.get("firstObject")
}.property(),selection:function(c,f){var b=this._scsel_selection,g=b?b.get("length"):0,d,e,a;
if((f===undefined)||!this.get("allowsSelection")){f=b}a=(f&&f.isEnumerable)?f.get("length"):0;
if((a>1)&&!this.get("allowsMultipleSelection")){if(g>1){f=SC.SelectionSet.create().addObject(b.get("firstObject")).freeze();
a=1}else{f=b;a=g}}if((a===0)&&!this.get("allowsEmptySelection")){if(g===0){f=this.get("firstSelectableObject");
if(f){f=SC.SelectionSet.create().addObject(f).freeze()}else{f=SC.SelectionSet.EMPTY
}a=f.get("length")}else{f=b;a=g}}if(a===0){f=SC.SelectionSet.EMPTY}f=f.frozenCopy();
this._scsel_selection=f;return f}.property("arrangedObjects","allowsEmptySelection","allowsMultipleSelection","allowsSelection").cacheable(),hasSelection:function(){var a=this.get("selection");
return !!a&&(a.get("length")>0)}.property("selection").cacheable(),selectObjects:function(b,c){if(!b||b.get("length")===0){if(!c){this.set("selection",SC.SelectionSet.EMPTY)
}return this}var a=this.get("selection");if(c&&a){a=a.copy()}else{a=SC.SelectionSet.create()
}a.addObjects(b).freeze();this.set("selection",a);return this},selectObject:function(a,b){if(a===null){if(!b){this.set("selection",null)
}return this}else{return this.selectObjects([a],b)}},deselectObjects:function(b){if(!b||b.get("length")===0){return this
}var a=this.get("selection");if(!a||a.get("length")===0){return this}a=a.copy().removeObjects(b).freeze();
this.set("selection",a.freeze());return this},deselectObject:function(a){if(!a){return this
}else{return this.deselectObjects([a])}},updateSelectionAfterContentChange:function(){var a=this.get("arrangedObjects");
var b=this.get("selection");var d=this.get("allowsEmptySelection");var c;c=b.indexSetForSource(a);
if((c&&(c.get("length")!==b.get("length")))||(!c&&(b.get("length")>0))){b=b.copy().constrain(a).freeze();
this.set("selection",b)}if((b.get("length")===0)&&(a.get("length")>0)&&!d){this.selectObject(this.get("firstSelectableObject"),NO)
}return this}};sc_require("controllers/controller");sc_require("mixins/selection_support");
SC.ArrayController=SC.Controller.extend(SC.Array,SC.SelectionSupport,{content:null,isEditable:YES,orderBy:null,allowsSingleContent:YES,destroyOnRemoval:NO,arrangedObjects:function(){return this
}.property().cacheable(),canRemoveContent:function(){var b=this.get("content"),a;
a=!!b&&this.get("isEditable")&&this.get("hasContent");if(a){return !b.isEnumerable||(SC.typeOf(b.removeObject)===SC.T_FUNCTION)
}else{return NO}}.property("content","isEditable","hasContent"),canReorderContent:function(){var b=this.get("content"),a;
a=!!b&&this.get("isEditable")&&!this.get("orderBy");return a&&!!b.isSCArray}.property("content","isEditable","orderBy"),canAddContent:function(){var b=this.get("content"),a;
a=b&&this.get("isEditable")&&b.isEnumerable;if(a){return(SC.typeOf(b.addObject)===SC.T_FUNCTION)||(SC.typeOf(b.pushObject)===SC.T_FUNCTION)
}else{return NO}}.property("content","isEditable"),hasContent:function(){var a=this.get("content");
return !!a&&(!!a.isEnumerable||!!this.get("allowsSingleContent"))}.property("content","allowSingleContent"),status:function(){var b=this.get("content"),a=b?b.get("status"):null;
return a?a:SC.Record.READY}.property().cacheable(),addObject:function(a){if(!this.get("canAddContent")){throw"%@ cannot add content".fmt(this)
}var b=this.get("content");if(b.isSCArray){b.pushObject(a)}else{if(b.addObject){b.addObject(a)
}else{throw"%@.content does not support addObject".fmt(this)}}return this},removeObject:function(a){if(!this.get("canRemoveContent")){throw"%@ cannot remove content".fmt(this)
}var b=this.get("content");if(b.isEnumerable){b.removeObject(a)}else{this.set("content",null)
}if(this.get("destroyOnRemoval")&&a.destroy){a.destroy()}return this},length:function(){var a=this._scac_observableContent();
return a?a.get("length"):0}.property().cacheable(),objectAt:function(a){var b=this._scac_observableContent();
return b?b.objectAt(a):undefined},replace:function(g,f,d){if(!d||d.get("length")===0){if(!this.get("canRemoveContent")){throw"%@ cannot remove objects from the current content".fmt(this)
}}else{if(!this.get("canReorderContent")){throw"%@ cannot add or reorder the current content".fmt(this)
}}var c=this.get("content");var b=[],a,e;if(this.get("destroyOnRemoval")){for(a=0;
a<f;a++){b.push(c.objectAt(a+g))}}if(c){c.replace(g,f,d)}for(a=0,e=b.length;a<e;a++){b[a].destroy()
}b=null;return this},indexOf:function(b,a){var c=this._scac_observableContent();return c?c.indexOf(b,a):-1
},init:function(){arguments.callee.base.apply(this,arguments);this._scac_contentDidChange()
},_scac_cached:NO,_scac_observableContent:function(){var b=this._scac_cached;if(b!==NO){return b
}var e=this.get("content"),f,d,c,a;if(SC.none(e)){return this._scac_cached=[]}if(!e.isEnumerable){b=this.get("allowsSingleContent")?[e]:[];
return(this._scac_cached=b)}f=this.get("orderBy");if(!f){if(e.isSCArray){return(this._scac_cached=e)
}else{throw"%@.orderBy is required for unordered content".fmt(this)}}switch(SC.typeOf(f)){case SC.T_STRING:f=[f];
break;case SC.T_FUNCTION:d=f;break;case SC.T_ARRAY:break;default:throw"%@.orderBy must be Array, String, or Function".fmt(this)
}if(!d){a=f.get("length");d=function(k,h){var g=0,j=0,l,n,m,o;for(g=0;(g<a)&&(j===0);
g++){l=f.objectAt(g);o=NO;if(l.indexOf("ASC")>-1){l=l.split("ASC ")[1]}else{if(l.indexOf("DESC")>-1){l=l.split("DESC ")[1];
o=YES}}if(!k){n=k}else{if(k.isObservable){n=k.get(l)}else{n=k[l]}}if(!h){m=h}else{if(h.isObservable){m=h.get(l)
}else{m=h[l]}}j=SC.compare(n,m);if(o){j=(-1)*j}}return j}}b=[];e.forEach(function(g){b.push(g)
});b.sort(d);d=null;return(this._scac_cached=b)},_scac_contentDidChange:function(){this._scac_cached=NO;
var h=this.get("content"),d=!!this.get("orderBy"),j=this._scac_content,a=this._scac_length||0,g=this._scac_rangeObserver,b=this._scac_rangeDidChange,f=this._scac_enumerableDidChange,c=this._scac_contentStatusDidChange,e;
if(j===h){return this}if(j){if(g&&j.isSCArray){j.removeRangeObserver(g)}else{if(j.isEnumerable){j.removeObserver("[]",this,f)
}}j.removeObserver("status",this,c)}g=null;this._scac_cached=NO;this._scac_content=h;
if(h){if(!d&&h.isSCArray){g=h.addRangeObserver(null,this,b)}else{if(h.isEnumerable){h.addObserver("[]",this,f)
}}e=h.isEnumerable?h.get("length"):1;h.addObserver("status",this,c)}else{e=SC.none(h)?0:1
}this._scac_rangeObserver=g;this._scac_length=e;this._scac_contentStatusDidChange();
this.enumerableContentDidChange(0,e,e-a);this.updateSelectionAfterContentChange()
}.observes("content"),_scac_enumerableDidChange:function(){var a=this.get("content"),c=a?a.get("length"):0,b=this._scac_length;
this._scac_length=c;this.beginPropertyChanges();this._scac_cached=NO;this.enumerableContentDidChange(0,c,c-b);
this.endPropertyChanges();this.updateSelectionAfterContentChange()}.observes("orderBy"),_scac_rangeDidChange:function(e,d,b,a){if(b!=="[]"){return
}var c=this.get("content");this._scac_length=c.get("length");this._scac_cached=NO;
if(a){this.beginPropertyChanges();a.forEachRange(function(g,f){this.enumerableContentDidChange(g,f,0)
},this);this.endPropertyChanges();this.updateSelectionAfterContentChange()}},_scac_contentStatusDidChange:function(){this.notifyPropertyChange("status")
}});require("controllers/controller");SC.ObjectController=SC.Controller.extend({content:null,allowsMultipleContent:NO,hasContent:function(){return !SC.none(this.get("observableContent"))
}.property("observableContent"),isEditable:YES,observableContent:function(){var b=this.get("content"),a,c;
if(b&&b.isEnumerable){a=b.get("length");c=this.get("allowsMultipleContent");if(a===1){b=b.firstObject()
}else{if(a===0||!c){b=null}}if(b&&!c&&b.isEnumerable){b=null}}return b}.property("content","allowsMultipleContent").cacheable(),destroy:function(){var a=this.get("observableContent");
if(a&&SC.typeOf(a.destroy)===SC.T_FUNCTION){a.destroy()}this.set("content",null);
return this},contentPropertyDidChange:function(b,a){if(a==="*"){this.allPropertiesDidChange()
}else{this.notifyPropertyChange(a)}},unknownProperty:function(b,d){if(b==="content"){if(d!==undefined){this.content=d
}return this.content}var c=this.get("observableContent"),f,e,a;if(c===null||c===undefined){return undefined
}if(d===undefined){if(c.isEnumerable){d=c.getEach(b);f=d.get("length");if(f>0){a=YES;
e=d.objectAt(0);while((--f>0)&&a){if(e!==d.objectAt(f)){a=NO}}if(a){d=e}}else{d=undefined
}}else{d=(c.isObservable)?c.get(b):c[b]}}else{if(!this.get("isEditable")){throw"%@.%@ is not editable".fmt(this,b)
}if(c.isEnumerable){c.setEach(b,d)}else{if(c.isObservable){c.set(b,d)}else{c[b]=d
}}}return d},init:function(){arguments.callee.base.apply(this,arguments);if(this.get("content")){this._scoc_contentDidChange()
}if(this.get("observableContent")){this._scoc_observableContentDidChange()}},_scoc_contentDidChange:function(){var b=this._scoc_content,c=this.get("content");
if(b!==c){this._scoc_content=c;var a=this._scoc_enumerableContentDidChange;if(b&&b.isEnumerable){b.removeObserver("[]",this,a)
}if(c&&c.isEnumerable){c.addObserver("[]",this,a)}}}.observes("content"),_scoc_observableContentDidChange:function(){var b=this._scoc_observableContent,d=this.get("observableContent"),a=this.contentPropertyDidChange,c=this._scoc_enumerableContentDidChange;
if(b===d){return this}this._scoc_observableContent=d;if(b){if(b.isEnumerable){b.removeObserver("[]",this,c)
}else{if(b.isObservable){b.removeObserver("*",this,a)}}}if(d){if(d.isEnumerable){d.addObserver("[]",this,c)
}else{if(d.isObservable){d.addObserver("*",this,a)}}}if((b&&b.isEnumerable)||(d&&d.isEnumerable)){this._scoc_enumerableContentDidChange()
}else{this.contentPropertyDidChange(d,"*")}}.observes("observableContent"),_scoc_enumerableContentDidChange:function(){var b=this.get("observableContent"),c=this._scoc_observableContentItems,a=this.contentPropertyDidChange;
if(c){c.forEach(function(d){if(d.isObservable){d.removeObserver("*",this,a)}},this);
c.clear()}if(b&&b.isEnumerable){if(!c){c=SC.Set.create()}b.forEach(function(d){if(c.contains(d)){return
}c.add(d);if(d.isObservable){d.addObserver("*",this,a)}},this)}else{c=null}this._scoc_observableContentItems=c;
this.contentPropertyDidChange(b,"*");return this}});SC.TreeItemContent={isTreeItemContent:YES,treeItemChildren:null,treeItemIsExpanded:YES,treeItemIsGrouped:NO,treeItemDisclosureState:function(b,a){return this.get("treeItemIsExpanded")?SC.BRANCH_OPEN:SC.BRANCH_CLOSED
},treeItemCollapse:function(b,a){this.setIfChanged("treeItemIsExpanded",NO)},treeItemExpand:function(b,a){this.setIfChanged("treeItemIsExpanded",YES)
},treeItemBranchIndexes:function(e,c){var d=this.get("treeItemChildren"),b,g,a,f;
if(!d){return null}b=SC.IndexSet.create();g=d.get("length");for(a=0;a<g;a++){if(!(f=d.objectAt(a))){continue
}if(!f.get("treeItemChildren")){continue}if(f.treeItemDisclosureState(this,a)!==SC.LEAF_NODE){b.add(a)
}}return b.get("length")>0?b:null}};SC.BRANCH_OPEN=17;SC.BRANCH_CLOSED=18;SC.LEAF_NODE=32;
SC.CollectionContent={isCollectionContent:YES,contentIndexIsSelected:function(b,c,a){var d=b.get("selection");
return d?d.contains(c,a):NO},contentIndexIsEnabled:function(b,c,a){return b.get("isEnabled")
},contentGroupIndexes:function(a,b){return null},contentIndexIsGroup:function(b,c,a){return NO
},contentIndexOutlineLevel:function(b,c,a){return -1},contentIndexDisclosureState:function(b,c,a){return SC.LEAF_NODE
},contentIndexExpand:function(b,c,a){console.log("contentIndexExpand(%@, %@, %@)".fmt(b,c,a))
},contentIndexCollapse:function(b,c,a){console.log("contentIndexCollapse(%@, %@, %@)".fmt(b,c,a))
}};sc_require("mixins/tree_item_content");sc_require("mixins/collection_content");
SC.TreeItemObserver=SC.Object.extend(SC.Array,SC.CollectionContent,{item:null,delegate:null,parentObserver:null,parentItem:function(){var a=this.get("parentObserver");
return a?a.get("item"):null}.property("parentObserver").cacheable(),index:null,outlineLevel:0,children:null,disclosureState:SC.BRANCH_OPEN,branchIndexes:function(){var e=this.get("item"),b,f,a,d,c;
if(!e){return SC.IndexSet.EMPTY}else{if(e.isTreeItemContent){f=this.get("parentItem");
a=this.get("index");return e.treeItemBranchIndexes(f,a)}else{d=this.get("children");
if(!d){return null}c=SC.IndexSet.create();b=d.get("length");f=e;for(a=0;a<b;a++){if(!(e=d.objectAt(a))){continue
}if(!this._computeChildren(e,f,a)){continue}if(this._computeDisclosureState(e,f,a)!==SC.LEAF_NODE){c.add(a)
}}return c.get("length")>0?c:null}}}.property("children").cacheable(),isHeaderVisible:function(){return !!this.get("parentObserver")
}.property("parentObserver").cacheable(),length:0,objectAt:function(d){var a=this.get("length"),f=this.get("item"),b=this._objectAtCache,h=d,g=0,c,e;
if(d>=a){return undefined}if(this.get("isHeaderVisible")){if(d===0){return f}else{h--
}}f=null;if(!b){b=this._objectAtCache=[]}if((f=b[d])!==undefined){return f}e=this.get("children");
if(!e){return undefined}if(c=this.get("branchIndexes")){c.forEach(function(l){if(f||(l>h)){return
}var k=this.branchObserverAt(l),j;if(!k){return}j=k.get("length");if(l+j>h){f=k.objectAt(h-l);
h=-1}else{h-=j-1}},this)}if(h>=0){f=e.objectAt(h)}b[d]=f;return f},replace:function(a,b,k,d){var j=a,g=null,e,f,h;
if(d===undefined){d=SC.DROP_BEFORE}if(this.get("isHeaderVisible")){j--}if(j<0){throw"Tree Item cannot replace itself"
}if(e=this.get("branchIndexes")){e.forEach(function(l){if(g||(l>=j)){return}if(!(g=this.branchObserverAt(l))){return
}f=g.get("length");if((l+f===j)&&d===SC.DROP_AFTER){j-=l}else{if(l+f>j){j-=l}else{j-=f-1;
g=null}}},this)}if(g){g.replace(j,b,k,d);return this}h=j+b;if(b>1&&e){e.forEachIn(j,e.get("max")-j,function(l){if(l>h){return
}if(!(g=this.branchObserverAt(l))){return}f=g.get("length");h-=f-1},this)}b=h-j;var c=this.get("children");
if(!c){throw"cannot replace() tree item with no children"}if((b<0)||(h>c.get("length"))){throw"replace() range must lie within a single tree item"
}c.replace(j,b,k,d);return this},observerContentDidChange:function(g,f,e){this.invalidateBranchObserversAt(g);
this._objectAtCache=this._outlineLevelCache=null;this._disclosureStateCache=null;
this._contentGroupIndexes=NO;this.notifyPropertyChange("branchIndexes");var b=this.get("length"),c=this._computeLength(),a=this.get("parentObserver"),d;
if(b!==c){this.set("length",c)}if(!this._notifyParent){return this}if(a){d=SC.IndexSet.create(this.get("index"));
a._childrenRangeDidChange(a.get("children"),null,"[]",d)}else{if(b===c){f=this.expandChildIndex(g+f);
g=this.expandChildIndex(g);f=f-g;e=0}else{g=this.expandChildIndex(g);f=c-g;e=c-b}this.enumerableContentDidChange(g,f,e)
}},expandChildIndex:function(c){var b=c;if(this.get("isHeaderVisible")){c++}var a=this.get("branchIndexes");
if(!a||a.get("length")===0){return b}a.forEachIn(0,c,function(d){b+=this.branchObserverAt(d).get("length")-1
},this);return b},_contentGroupIndexes:NO,contentGroupIndexes:function(g,e){if(e!==this){return null
}var f=this._contentGroupIndexes;if(f!==NO){return f}if(this.get("parentObserver")){return null
}var k=this.get("item"),j,b,d,h,c,a;if(k&&k.isTreeItemContent){j=k.get("treeItemIsGrouped")
}else{j=!!this.delegate.get("treeItemIsGrouped")}if(j){f=SC.IndexSet.create();b=this.get("branchIndexes");
a=this.get("children");d=a?a.get("length"):0;h=c=0;if(b){b.forEach(function(m){f.add(h,(m+1)-c);
h+=(m+1)-c;c=m+1;var l=this.branchObserverAt(m);if(l){h+=l.get("length")-1}},this)
}if(c<d){f.add(h,d-c)}}else{f=null}this._contentGroupIndexes=f;return f},contentIndexIsGroup:function(b,d,a){var c=this.contentGroupIndexes(b,d);
return c?c.contains(a):NO},contentIndexOutlineLevel:function(k,g,e){if(g!==this){return -1
}var a=this._outlineLevelCache;if(a&&(a[e]!==undefined)){return a[e]}if(!a){a=this._outlineLevelCache=[]
}var f=this.get("length"),l=e,d=0,h=null,c,b,j;if(e>=f){return -1}if(this.get("isHeaderVisible")){if(e===0){return a[0]=this.get("outlineLevel")-1
}else{l--}}if(c=this.get("branchIndexes")){c.forEach(function(o){if((h!==null)||(o>l)){return
}var n=this.branchObserverAt(o),m;if(!n){return}m=n.get("length");if(o+m>l){h=n.contentIndexOutlineLevel(k,n,l-o);
l=-1}else{l-=m-1}},this)}if(l>=0){h=this.get("outlineLevel")}a[e]=h;return h},contentIndexDisclosureState:function(k,g,e){if(g!==this){return -1
}var a=this._disclosureStateCache;if(a&&(a[e]!==undefined)){return a[e]}if(!a){a=this._disclosureStateCache=[]
}var f=this.get("length"),l=e,d=0,h=null,c,b,j;if(e>=f){return SC.LEAF_NODE}if(this.get("isHeaderVisible")){if(e===0){return a[0]=this.get("disclosureState")
}else{l--}}if(c=this.get("branchIndexes")){c.forEach(function(o){if((h!==null)||(o>l)){return
}var n=this.branchObserverAt(o),m;if(!n){return}m=n.get("length");if(o+m>l){h=n.contentIndexDisclosureState(k,n,l-o);
l=-1}else{l-=m-1}},this)}if(l>=0){h=SC.LEAF_NODE}a[e]=h;return h},contentIndexExpand:function(b,f,a){var c,g=a,d,e;
if(f!==this){return}if(this.get("isHeaderVisible")){if(a===0){this._expand(this.get("item"));
return}else{g--}}if(c=this.get("branchIndexes")){c.forEach(function(k){if(k>=g){return
}var j=this.branchObserverAt(k),h;if(!j){return}h=j.get("length");if(k+h>g){j.contentIndexExpand(b,j,g-k);
g=-1}else{g-=h-1}},this)}if(g>=0){d=this.get("children");e=d?d.objectAt(g):null;if(e){this._expand(e,this.get("item"),g)
}}},contentIndexCollapse:function(b,f,a){var c,d,e,g=a;if(f!==this){return}if(this.get("isHeaderVisible")){if(a===0){this._collapse(this.get("item"));
return}else{g--}}if(c=this.get("branchIndexes")){c.forEach(function(k){if(k>=g){return
}var j=this.branchObserverAt(k),h;if(!j){return}h=j.get("length");if(k+h>g){j.contentIndexCollapse(b,j,g-k);
g=-1}else{g-=h-1}},this)}if(g>=0){d=this.get("children");e=d?d.objectAt(g):null;if(e){this._collapse(e,this.get("item"),g)
}}},branchObserverAt:function(d){var g=this._branchObserversByIndex,c=this._branchObserverIndexes,e,h,b,k,a,f,j;
if(!g){g=this._branchObserversByIndex=[]}if(!c){c=this._branchObserverIndexes=SC.IndexSet.create()
}if(e=g[d]){return e}a=this.get("children");k=a?a.objectAt(d):null;if(!k){return null
}g[d]=e=SC.TreeItemObserver.create({item:k,delegate:this.get("delegate"),parentObserver:this,index:d,outlineLevel:this.get("outlineLevel")+1});
c.add(d);return e},invalidateBranchObserversAt:function(c){var b=this._branchObserversByIndex,a=this._branchObserverIndexes;
if(!b||b.length<=c){return this}if(c<0){c=0}a.forEachIn(c,a.get("max")-c,function(e){var d=b[e];
if(d){d.destroy()}},this);b.length=c;return this},init:function(){arguments.callee.base.apply(this,arguments);
var a=this.get("item");if(!a){throw"SC.TreeItemObserver.item cannot be null"}a.addObserver("*",this,this._itemPropertyDidChange);
this._itemPropertyDidChange(a,"*");this._notifyParent=YES},destroy:function(){this.invalidateBranchObserversAt(0);
this._objectAtCache=null;var c=this.get("item");if(c){c.removeObserver("*",this,this._itemPropertyDidChange)
}var a=this._children,b=this._childrenRangeObserver;if(a&&b){a.removeRangeObserver(b)
}arguments.callee.base.apply(this,arguments)},_itemPropertyDidChange:function(f,b){var a=this.get("children"),e=this.get("disclosureState"),d=this.get("item"),c;
this.beginPropertyChanges();c=this._computeDisclosureState(d);if(e!==c){this.set("disclosureState",c)
}c=this._computeChildren(d);if(a!==c){this.set("children",c)}this.endPropertyChanges()
},_childrenDidChange:function(){var c=this.get("disclosureState"),d=c===SC.BRANCH_OPEN?this.get("children"):null,b=this._children,a=this._childrenRangeObserver;
if(b===d){return this}if(a){b.removeRangeObserver(a)}if(d){this._childrenRangeObserver=d.addRangeObserver(null,this,this._childrenRangeDidChange)
}else{this._childrenRangeObserver=null}this._children=d;this._childrenRangeDidChange(d,null,"[]",null)
}.observes("children","disclosureState"),_childrenRangeDidChange:function(f,j,h,d){var a=this.get("children"),e=a?a.get("length"):0,c=d?d.get("min"):0,g=d?d.get("max"):e,b=this._childrenLen||0;
this._childrenLen=e;this.observerContentDidChange(c,g-c,e-b)},_computeDisclosureState:function(d,e,b){var c,a;
if(!d||!this._computeChildren(d)){return SC.LEAF_NODE}else{if(d.isTreeItemContent){if(e===undefined){e=this.get("parentItem")
}if(b===undefined){b=this.get("index")}return d.treeItemDisclosureState(e,b)}else{c=this._treeItemIsExpandedKey;
if(!c){a=this.get("delegate");c=a?a.get("treeItemIsExpandedKey"):"treeItemIsExpanded";
this._treeItemIsExpandedKey=c}return d.get(c)?SC.BRANCH_OPEN:SC.BRANCH_CLOSED}}},_collapse:function(d,e,b){var c,a;
if(!d||!this._computeChildren(d)){return this}else{if(d.isTreeItemContent){if(e===undefined){e=this.get("parentItem")
}if(b===undefined){b=this.get("index")}d.treeItemCollapse(e,b)}else{c=this._treeItemIsExpandedKey;
if(!c){a=this.get("delegate");c=a?a.get("treeItemIsExpandedKey"):"treeItemIsExpanded";
this._treeItemIsExpandedKey=c}d.setIfChanged(c,NO)}}return this},_expand:function(d,e,b){var c,a;
if(!d||!this._computeChildren(d)){return this}else{if(d.isTreeItemContent){if(e===undefined){e=this.get("parentItem")
}if(b===undefined){b=this.get("index")}d.treeItemExpand(e,b)}else{c=this._treeItemIsExpandedKey;
if(!c){a=this.get("delegate");c=a?a.get("treeItemIsExpandedKey"):"treeItemIsExpanded";
this._treeItemIsExpandedKey=c}d.setIfChanged(c,YES)}}return this},_computeChildren:function(c){var a,b;
if(!c){return null}else{if(c.isTreeItemContent){return c.get("treeItemChildren")}else{b=this._treeItemChildrenKey;
if(!b){a=this.get("delegate");b=a?a.get("treeItemChildrenKey"):"treeItemChildren";
this._treeItemChildrenKey=b}return c.get(b)}}},_computeLength:function(){var b=this.get("isHeaderVisible")?1:0,d=this.get("disclosureState"),c=this.get("children"),a;
if((d===SC.BRANCH_OPEN)&&c){b+=c.get("length");if(a=this.get("branchIndexes")){a.forEach(function(e){var f=this.branchObserverAt(e);
b+=f.get("length")-1},this)}}return b}});sc_require("controllers/object");sc_require("mixins/selection_support");
sc_require("private/tree_item_observer");SC.TreeController=SC.ObjectController.extend(SC.SelectionSupport,{treeItemIsGrouped:NO,treeItemIsExpandedKey:"treeItemIsExpanded",treeItemChildrenKey:"treeItemChildren",arrangedObjects:function(){var a,b=this.get("content");
if(b){a=SC.TreeItemObserver.create({item:b,delegate:this})}else{a=null}this._sctc_arrangedObjects=a;
return a}.property().cacheable(),_sctc_invalidateArrangedObjects:function(){this.propertyWillChange("arrangedObjects");
var a=this._sctc_arrangedObjects;if(a){a.destroy()}this._sctc_arrangedObjects=null;
this.propertyDidChange("arrangedObjects")}.observes("content","treeItemIsExpandedKey","treeItemChildrenKey","treeItemIsGrouped"),_sctc_arrangedObjectsContentDidChange:function(){this.updateSelectionAfterContentChange()
}.observes("*arrangedObjects.[]"),firstSelectableObject:function(){var d=this.get("arrangedObjects"),c,b,a=0;
if(!d){return null}c=d.contentGroupIndexes(null,d);b=d.get("length");while(c.contains(a)&&(a<b)){a++
}return a>=b?null:d.objectAt(a)}.property()});SC.mixin(SC.Object.prototype,{invokeLater:function(b,a){if(a===undefined){a=1
}var e=b,c,d;if(arguments.length>2){c=SC.$A(arguments).slice(2);if(SC.typeOf(e)===SC.T_STRING){e=this[b]
}d=e;e=function(){return d.apply(this,c)}}return SC.Timer.schedule({target:this,action:e,interval:a})
},invokeWith:function(b,c,d){if(d===undefined){d=c;c=this}if(!c){c=this}if(SC.typeOf(d)===SC.T_STRING){d=c[d]
}var a=this.getPath(b);d.call(c,a,this);return this}});SC.RunLoop=SC.RunLoop.extend({startTime:function(){if(!this._start){this._start=Date.now()
}return this._start}.property(),endRunLoop:function(){this.fireExpiredTimers();var a=arguments.callee.base.apply(this,arguments);
this.scheduleNextTimeout();return a},scheduleTimer:function(b,a){this._timerQueue=b.removeFromTimerQueue(this._timerQueue);
this._timerQueue=b.scheduleInTimerQueue(this._timerQueue,a);return this},cancelTimer:function(a){this._timerQueue=a.removeFromTimerQueue(this._timerQueue);
return this},TIMER_ARRAY:[],fireExpiredTimers:function(){if(!this._timerQueue||this._firing){return NO
}var d=this.get("startTime"),e=this.TIMER_ARRAY,c,b,a;this._firing=YES;this._timerQueue=this._timerQueue.collectExpiredTimers(e,d);
b=e.length;for(c=0;c<b;c++){e[c].fire()}a=e.length>0;e.length=0;this._firing=NO;return a
},scheduleNextTimeout:function(){var d=this._timerQueue;var b=NO;if(!d){if(this._timeout){clearTimeout(this._timeout)
}}else{var c=d._timerQueueRunTime;if(this._timeoutAt!==c){if(this._timeout){clearTimeout(this._timeout)
}var a=Math.max(0,c-Date.now());this._timeout=setTimeout(this._timeoutDidFire,a);
this._timeoutAt=c}b=YES}return b},_timeoutDidFire:function(){var a=SC.RunLoop.currentRunLoop;
a._timeout=a._timeoutAt=null;SC.RunLoop.begin().end()}});SC.RunLoop.currentRunLoop=SC.RunLoop.create();
SC.Gesture=SC.Object.extend({name:"gesture",touchIsInGesture:function(b,a){return NO
},touchStart:function(a){},touchesDragged:function(a,b){},touchEnd:function(a){},start:function(){if(!this.get("isActive")){this.set("isActive",YES);
var b=SC.$A(arguments);b.unshift(this);var a=this.name+"Start";if(this.view[a]){this.view[a].apply(this.view,b)
}}},end:function(){if(this.get("isActive")){this.set("isActive",NO);var b=SC.$A(arguments);
b.unshift(this);var a=this.name+"End";if(this.view[a]){this.view[a].apply(this.view,b)
}}},change:function(){if(this.get("isActive")){var b=SC.$A(arguments);b.unshift(this);
var a=this.name+"Changed";if(this.view[a]){this.view[a].apply(this.view,b)}}},cancel:function(){if(this.get("isActive")){this.set("isActive",NO);
var b=SC.$A(arguments);b.unshift(this);var a=this.name+"Cancelled";if(this.view[a]){this.view[a].apply(this.view,b)
}}},take:function(a){this.invokeLater("_take",0,a)},_take:function(a){a.isTaken=YES;
if(a.touchResponder&&a.touchResponder!==this){a.makeTouchResponder(this,YES)}},release:function(a){a.isTaken=NO;
a.makeTouchResponder(a.nextTouchResponder)},trigger:function(){var b=SC.$A(arguments);
b.unshift(this);var a=this.name;if(this.view[a]){this.view[a].apply(this.view,b)}},discardTouch:function(a){a.isTaken=YES;
a.makeTouchResponder(null)},statusForTouch:function(c){var b=SC.guidFor(c.view)+this.name;
var a=c[b];if(!a){a=c[b]={}}return a},unassignedTouchDidStart:function(a){if(a.isTaken){return
}if(this.touchIsInGesture(a,this.statusForTouch(a))){this.take(a)}},unassignedTouchesDidChange:function(a,b){b.forEach(function(c){if(c.isTaken){return
}if(this.touchIsInGesture(c,this.statusForTouch(c))){this.take(c)}},this)},unassignedTouchDidEnd:function(a){},interestedInTouch:function(b){var a=this.statusForTouch(b);
if(a.isInterested){return}a.isInterested=YES;b.isInteresting++},uninterestedInTouch:function(b){var a=this.statusForTouch(b);
if(!a.isInterested){return}a.isInterested=NO;b.isInteresting--}});sc_require("system/gesture");
SC.PinchGesture=SC.Gesture.extend({name:"pinch",acceptsMultitouch:YES,scale:1,unassignedTouchesDidChange:function(a,b){if(b.length==2){this.take(b[0]);
this.take(b[1])}},touchStart:function(b){var a=b.touchesForResponder(this);if(!a||a.length==0){return YES
}else{if(a.length==1){this.start([a[0],b]);return YES}else{return NO}}},touchesDragged:function(a,c){var d=c.firstObject(),b=d.averagedTouchesForView(this);
if(b.touchCount==2){if(!this._startDistance){this._startDistance=b.d}this.scale=b.d/this._startDistance;
this.change(c,this.scale)}},touchEnd:function(b){this._startDistance=null;var a=b.touchesForResponder(this);
this.trigger(a,this.scale);this.end(a,this.scale);if(a){a.forEach(function(c){this.release(c)
},this)}}});sc_require("system/gesture");SC.SWIPE_HORIZONTAL="X";SC.SWIPE_VERTICAL="Y";
SC.SWIPE_ANY="XY";SC.SWIPE_LEFT="LEFT";SC.SWIPE_RIGHT="RIGHT";SC.SWIPE_UP="UP";SC.SWIPE_DOWN="DOWN";
SC.SwipeGesture=SC.Gesture.extend({name:"swipe",acceptsMultitouch:YES,direction:SC.SWIPE_HORIZONTAL,currentDirection:null,startDistance:5,swipeDistance:40,tolerance:0.5,touchIsInGesture:function(g,e){if(!e.flunked){var h=this.get("direction"),b=this.get("currentDirection"),a=this.get("startDistance"),f=g.pageX-g.startX,c=g.pageY-g.startY;
if(Math.abs(f)>a||Math.abs(c)>a){if(!b){if(h==SC.SWIPE_ANY){if(f>c){b=SC.SWIPE_HORIZONTAL
}else{if(c>f){b=SC.SWIPE_VERTICAL}else{return NO}}}else{b=h}this.set("currentDirection",b)
}var k=(b==SC.SWIPE_HORIZONTAL)?f:c,j=(b==SC.SWIPE_HORIZONTAL)?c:f;if(Math.abs(k)*this.get("tolerance")>Math.abs(j)){return YES
}}}return NO},touchStart:function(e){var b=this.get("currentDirection"),c=e["page"+b]-e["start"+b],a;
if(c<0){a=(b===SC.SWIPE_HORIZONTAL)?SC.SWIPE_LEFT:SC.SWIPE_UP}else{a=(b===SC.SWIPE_HORIZONTAL)?SC.SWIPE_RIGHT:SC.SWIPE_DOWN
}this.start(e,a,c);return YES},touchesDragged:function(k,e){var c=e.firstObject();
var f=this.get("currentDirection"),a=(f===SC.SWIPE_HORIZONTAL?"Y":"X"),j=c["page"+f]-c["start"+f],g=c["page"+a]-c["start"+a],h;
if(j<0){h=(f===SC.SWIPE_HORIZONTAL)?SC.SWIPE_LEFT:SC.SWIPE_UP}else{h=(f===SC.SWIPE_HORIZONTAL)?SC.SWIPE_RIGHT:SC.SWIPE_DOWN
}if(Math.abs(j)<this.get("startDistance")||Math.abs(j)*this.get("tolerance")<Math.abs(g)){this.release(c);
var b=c.touchesForResponder(this);if(!b||b.length==0){this.end(c,h,j)}}else{this.change(c,h,j)
}},touchEnd:function(h){var f=this.get("currentDirection"),e=(f===SC.SWIPE_HORIZONTAL?"Y":"X"),g=h["page"+f]-h["start"+f],b=h["page"+e]-h["start"+e],a;
if(g<0){a=(f===SC.SWIPE_HORIZONTAL)?SC.SWIPE_LEFT:SC.SWIPE_UP}else{a=(f===SC.SWIPE_HORIZONTAL)?SC.SWIPE_RIGHT:SC.SWIPE_DOWN
}if(Math.abs(g)>this.get("swipeDistance")||Math.abs(g)*this.get("tolerance")<Math.abs(b)){this.trigger(h,a)
}this.end(h,a,g);this.set("currentDirection",null);var c=h.touchesForResponder(this);
if(c){c.forEach(function(d){this.release(d)},this)}},cancel:function(){arguments.callee.base.apply(this,arguments);
this.set("currentDirection",null)}});
/* @license

Portions of this software are copyright Yahoo, Inc, used under the following license:

Software License Agreement (BSD License)
Copyright (c) 2009, Yahoo! Inc.
All rights reserved.
Redistribution and use of this software in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the
following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of Yahoo! Inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission of Yahoo! Inc.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

Sources of Intellectual Property Included in the YUI Library
Where not otherwise indicated, all YUI content is authored by Yahoo! engineers and consists of Yahoo!-owned intellectual property. YUI is issued by Yahoo! under the BSD license above. In some specific instances, YUI will incorporate work done by developers outside of Yahoo! with their express permission.

*/
SC.AutoMixin={autoMixins:[],createChildView:function(b,c){if(!c){c={}
}c.owner=c.parentView=this;c.isVisibleInWindow=this.get("isVisibleInWindow");if(!c.page){c.page=this.page
}var a=this.get("autoMixins");a.push(c);b=b.create.apply(b,a);return b}};SC.AutoResize={autoResizeField:"value",shouldAutoResize:YES,shouldMeasureSize:YES,shouldResizeWidth:YES,shouldResizeHeight:NO,measuredSize:{width:0,height:0},autoSizePadding:10,initMixin:function(){this.addObserver(this.get("autoResizeField"),this,"_scar_valueDidChange")
},measureSize:function(){if(!this.get("shouldMeasureSize")){return}var a=this.get("layer");
if(!a){return}var b=SC.metricsForString(this.get(this.get("autoResizeField")),a);
this.set("measuredSize",b);if(this.get("shouldAutoResize")){if(this.get("shouldResizeWidth")){this.adjust("width",b.width+this.get("autoSizePadding"))
}if(this.get("shouldResizeHeight")){this.adjust("height",b.height+this.get("autoSizePadding"))
}}},_scar_valueDidChange:function(){arguments.callee.base.apply(this,arguments);this.measureSize()
},didAppendToDocument:function(){arguments.callee.base.apply(this,arguments);this.invokeLast("measureSize")
},didCreateLayer:function(){arguments.callee.base.apply(this,arguments);this.invokeLast("measureSize")
}};SC.Button={value:null,toggleOnValue:YES,toggleOffValue:NO,localize:NO,localizeBindingDefault:SC.Binding.bool(),title:"",contentTitleKey:null,icon:null,contentIconKey:null,needsEllipsis:YES,displayTitle:function(){var a=this.get("title");
return(a&&this.get("localize"))?a.loc():(a||"")}.property("title","localize").cacheable(),keyEquivalent:null,renderTitle:function(b,a){var g=this.get("icon"),d="",h=this.get("displayTitle"),j=(!SC.none(h)&&h.length>0),c,k,e;
if(this.get("escapeHTML")){h=SC.RenderContext.escapeHTML(h)}if(g){var f=SC.BLANK_IMAGE_URL;
if(g.indexOf("/")>=0){d='<img src="'+g+'" alt="" class="icon" />'}else{d='<img src="'+f+'" alt="" class="'+g+'" />'
}j=YES}e=d+h;if(a){if(this.get("needsEllipsis")){b.push('<label class="sc-button-label ellipsis">'+e+"</label>")
}else{b.push('<label class="sc-button-label">'+e+"</label>")}this._ImageTitleCached=e
}else{c=this.$("label");if((k=c[0])){if(j){if(this.get("needsEllipsis")){c.addClass("ellipsis");
if(this._ImageTitleCached!==e){this._ImageTitleCached=e;k.innerHTML=e}}else{c.removeClass("ellipsis");
if(this._ImageTitleCached!==e){this._ImageTitleCached=e;k.innerHTML=e}}}else{k.innerHTML=""
}}}return b},contentPropertyDidChange:function(h,c){var b=this.get("displayDelegate"),e=this.get("content"),g;
var d=this.getDelegateProperty("contentValueKey",b);if(d&&(c===d||c==="*")){this.set("value",e?e.get(d):null)
}var a=this.getDelegateProperty("contentTitleKey",b);if(a&&(c===a||c==="*")){this.set("title",e?e.get(a):null)
}var f=this.getDelegateProperty("contentIconKey",b);if(f&&(c===f||c==="*")){this.set("icon",e?e.get(f):null)
}return this},_button_displayObserver:function(){this.displayDidChange()}.observes("title","icon","value"),performKeyEquivalent:function(c,b){if(!this.get("isEnabled")){return NO
}var a=this.get("keyEquivalent");if(a){if(a===c){return this.triggerAction(b)}}else{if((this.get("isDefault")&&(c==="return"))||(this.get("isCancel")&&(c==="escape"))){return this.triggerAction(b)
}}return NO},triggerAction:function(a){throw"SC.Button.triggerAction() is not defined in %@".fmt(this)
},computeIsSelectedForValue:function(d){var b=this.get("toggleOnValue"),c,a;if(SC.typeOf(d)===SC.T_ARRAY){if(d.length===1){c=(d[0]==b)
}else{c=null;d.find(function(e){a=(e==b);if(c===null){c=a}else{if(a!==c){c=SC.MIXED_STATE
}}return c===SC.MIXED_STATE})}}else{if(d===SC.MIXED_STATE){c=SC.MIXED_STATE}else{c=(d===b)
}}return c},initMixin:function(){if(!SC.none(this.get("value"))){this._button_valueDidChange()
}},_button_valueDidChange:function(){var b=this.get("value"),a=this.computeIsSelectedForValue(b);
this.set("isSelected",a)}.observes("value"),_button_isSelectedDidChange:function(){var c=this.get("isSelected"),b=this.computeIsSelectedForValue(this.get("value"));
if((c!==SC.MIXED_STATE)&&(b!==c)){var a=(c)?"toggleOnValue":"toggleOffValue";this.set("value",this.get(a))
}}.observes("isSelected")};SC.ContentDisplay={concatenatedProperties:"contentDisplayProperties",displayProperties:["content"],contentDisplayProperties:[],_display_contentDidChange:function(e,a,d){if((d=this.get("content"))!=this._display_content){var c=this._display_contentPropertyDidChange;
var b=this._display_content;if(b){if(SC.isArray(b)){b.invoke("removeObserver","*",this,c)
}else{if(b.removeObserver){b.removeObserver("*",this,c)}}}b=this._display_content=d;
if(b){if(SC.isArray(b)){b.invoke("addObserver","*",this,c)}else{if(b.addObserver){b.addObserver("*",this,c)
}}}this.allPropertiesDidChange();this.endPropertyChanges()}}.observes("content","contentDisplayProperties"),_display_contentPropertyDidChange:function(e,c,d,b){if(c==="*"){this.displayDidChange()
}else{var a=this.get("contentDisplayProperties");if(a&&a.indexOf(c)>=0){this.displayDidChange()
}}}};sc_require("system/locale");SC.STRING_TITLEIZE_REGEXP=(/([\s|\-|\_|\n])([^\s|\-|\_|\n]?)/g);
SC.STRING_DECAMELIZE_REGEXP=(/([a-z])([A-Z])/g);SC.STRING_DASHERIZE_REGEXP=(/[ _]/g);
SC.STRING_HUMANIZE_REGEXP=(/[\-_]/g);SC.STRING_TRIM_REGEXP=(/^\s+|\s+$/g);SC.STRING_TRIM_LEFT_REGEXP=(/^\s+/g);
SC.STRING_TRIM_RIGHT_REGEXP=(/\s+$/g);SC.STRING_REGEXP_ESCAPED_REGEXP=(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g);
SC.STRING_DASHERIZE_CACHE={top:"top",left:"left",right:"right",bottom:"bottom",width:"width",height:"height",minWidth:"min-width",maxWidth:"max-width"};
SC.INFLECTION_CONSTANTS={PLURAL:[[/(quiz)$/i,"$1zes"],[/^(ox)$/i,"$1en"],[/([m|l])ouse$/i,"$1ice"],[/(matr|vert|ind)ix|ex$/i,"$1ices"],[/(x|ch|ss|sh)$/i,"$1es"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(hive)$/i,"$1s"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/sis$/i,"ses"],[/([ti])um$/i,"$1a"],[/(buffal|tomat)o$/i,"$1oes"],[/(bu)s$/i,"$1ses"],[/(alias|status)$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(ax|test)is$/i,"$1es"],[/s$/i,"s"],[/$/,"s"]],SINGULAR:[[/(quiz)zes$/i,"$1"],[/(matr)ices$/i,"$1ix"],[/(vert|ind)ices$/i,"$1ex"],[/^(ox)en/i,"$1"],[/(alias|status)es$/i,"$1"],[/(octop|vir)i$/i,"$1us"],[/(cris|ax|test)es$/i,"$1is"],[/(shoe)s$/i,"$1"],[/(o)es$/i,"$1"],[/(bus)es$/i,"$1"],[/([m|l])ice$/i,"$1ouse"],[/(x|ch|ss|sh)es$/i,"$1"],[/(m)ovies$/i,"$1ovie"],[/(s)eries$/i,"$1eries"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/([lr])ves$/i,"$1f"],[/(tive)s$/i,"$1"],[/(hive)s$/i,"$1"],[/([^f])ves$/i,"$1fe"],[/(^analy)ses$/i,"$1sis"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i,"$1$2sis"],[/([ti])a$/i,"$1um"],[/(n)ews$/i,"$1ews"],[/s$/i,""]],IRREGULAR:[["move","moves"],["sex","sexes"],["child","children"],["man","men"],["person","people"]],UNCOUNTABLE:["sheep","fish","series","species","money","rice","information","info","equipment"]};
SC.String={loc:function(){if(!SC.Locale.currentLocale){SC.Locale.createCurrentLocale()
}var a=SC.Locale.currentLocale.locWithDefault(this);if(SC.typeOf(a)!==SC.T_STRING){a=this
}return a.fmt.apply(a,arguments)},locWithDefault:function(b){if(!SC.Locale.currentLocale){SC.Locale.createCurrentLocale()
}var c=SC.Locale.currentLocale.locWithDefault(this,b);if(SC.typeOf(c)!==SC.T_STRING){c=this
}var a=SC.$A(arguments);a.shift();return c.fmt.apply(c,a)},capitalize:function(){return this.charAt(0).toUpperCase()+this.slice(1)
},capitalizeEach:function(){return this.replace(SC.STRING_TITLEIZE_REGEXP,function(c,a,b){return(b)?(a+b.toUpperCase()):a
}).capitalize()},titleize:function(){var a=this.replace(SC.STRING_DECAMELIZE_REGEXP,"$1_$2");
return a.replace(SC.STRING_TITLEIZE_REGEXP,function(c,d,b){return(b)?(" "+b.toUpperCase()):" "
}).capitalize()},camelize:function(){var b=this.replace(SC.STRING_TITLEIZE_REGEXP,function(e,f,d){return(d)?d.toUpperCase():""
});var c=b.charAt(0),a=c.toLowerCase();return(c!==a)?(a+b.slice(1)):b},classify:function(){var a=this.replace(SC.STRING_TITLEIZE_REGEXP,function(e,f,d){return(d)?d.toUpperCase():""
});var c=a.charAt(0),b=c.toUpperCase();return(c!==b)?(b+a.slice(1)):a},decamelize:function(){return this.replace(SC.STRING_DECAMELIZE_REGEXP,"$1_$2").toLowerCase()
},dasherize:function(){var a=SC.STRING_DASHERIZE_CACHE,b=a[this];if(b){return b}else{b=this.decamelize().replace(SC.STRING_DASHERIZE_REGEXP,"-");
a[this]=b}return b},humanize:function(){return this.decamelize().replace(SC.STRING_HUMANIZE_REGEXP," ")
},escapeForRegExp:function(){return this.replace(SC.STRING_REGEXP_ESCAPED_REGEXP,"\\$1")
},removeDiacritics:function(){var a=SC.diacriticMappingTable;if(!a){SC.diacriticMappingTable={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ā":"A","Ă":"A","Ą":"A","Ǎ":"A","Ǟ":"A","Ǡ":"A","Ǻ":"A","Ȁ":"A","Ȃ":"A","Ȧ":"A","Ḁ":"A","Ạ":"A","Ả":"A","Ấ":"A","Ầ":"A","Ẩ":"A","Ẫ":"A","Ậ":"A","Ắ":"A","Ằ":"A","Ẳ":"A","Ẵ":"A","Ặ":"A","Å":"A","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ç":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ḉ":"C","Ď":"D","Ḋ":"D","Ḍ":"D","Ḏ":"D","Ḑ":"D","Ḓ":"D","È":"E","É":"E","Ê":"E","Ë":"E","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ȩ":"E","Ḕ":"E","Ḗ":"E","Ḙ":"E","Ḛ":"E","Ḝ":"E","Ẹ":"E","Ẻ":"E","Ẽ":"E","Ế":"E","Ề":"E","Ể":"E","Ễ":"E","Ệ":"E","Ḟ":"F","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","Ǧ":"G","Ǵ":"G","Ḡ":"G","Ĥ":"H","Ȟ":"H","Ḣ":"H","Ḥ":"H","Ḧ":"H","Ḩ":"H","Ḫ":"H","Ì":"I","Í":"I","Î":"I","Ï":"I","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ḭ":"I","Ḯ":"I","Ỉ":"I","Ị":"I","Ĵ":"J","Ķ":"K","Ǩ":"K","Ḱ":"K","Ḳ":"K","Ḵ":"K","Ĺ":"L","Ļ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ḻ":"L","Ḽ":"L","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ñ":"N","Ń":"N","Ņ":"N","Ň":"N","Ǹ":"N","Ṅ":"N","Ṇ":"N","Ṉ":"N","Ṋ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ō":"O","Ŏ":"O","Ő":"O","Ơ":"O","Ǒ":"O","Ǫ":"O","Ǭ":"O","Ȍ":"O","Ȏ":"O","Ȫ":"O","Ȭ":"O","Ȯ":"O","Ȱ":"O","Ṍ":"O","Ṏ":"O","Ṑ":"O","Ṓ":"O","Ọ":"O","Ỏ":"O","Ố":"O","Ồ":"O","Ổ":"O","Ỗ":"O","Ộ":"O","Ớ":"O","Ờ":"O","Ở":"O","Ỡ":"O","Ợ":"O","Ṕ":"P","Ṗ":"P","Ŕ":"R","Ŗ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṙ":"R","Ṛ":"R","Ṝ":"R","Ṟ":"R","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","Ș":"S","Ṡ":"S","Ṣ":"S","Ṥ":"S","Ṧ":"S","Ṩ":"S","Ţ":"T","Ť":"T","Ț":"T","Ṫ":"T","Ṭ":"T","Ṯ":"T","Ṱ":"T","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","Ư":"U","Ǔ":"U","Ǖ":"U","Ǘ":"U","Ǚ":"U","Ǜ":"U","Ȕ":"U","Ȗ":"U","Ṳ":"U","Ṵ":"U","Ṷ":"U","Ṹ":"U","Ṻ":"U","Ụ":"U","Ủ":"U","Ứ":"U","Ừ":"U","Ử":"U","Ữ":"U","Ự":"U","Ṽ":"V","Ṿ":"V","Ŵ":"W","Ẁ":"W","Ẃ":"W","Ẅ":"W","Ẇ":"W","Ẉ":"W","Ẋ":"X","Ẍ":"X","Ý":"Y","Ŷ":"Y","Ÿ":"Y","Ȳ":"Y","Ẏ":"Y","Ỳ":"Y","Ỵ":"Y","Ỷ":"Y","Ỹ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","Ẑ":"Z","Ẓ":"Z","Ẕ":"Z","`":"`","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ā":"a","ă":"a","ą":"a","ǎ":"a","ǟ":"a","ǡ":"a","ǻ":"a","ȁ":"a","ȃ":"a","ȧ":"a","ḁ":"a","ạ":"a","ả":"a","ấ":"a","ầ":"a","ẩ":"a","ẫ":"a","ậ":"a","ắ":"a","ằ":"a","ẳ":"a","ẵ":"a","ặ":"a","ḃ":"b","ḅ":"b","ḇ":"b","ç":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ḉ":"c","ď":"d","ḋ":"d","ḍ":"d","ḏ":"d","ḑ":"d","ḓ":"d","è":"e","é":"e","ê":"e","ë":"e","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","ȅ":"e","ȇ":"e","ȩ":"e","ḕ":"e","ḗ":"e","ḙ":"e","ḛ":"e","ḝ":"e","ẹ":"e","ẻ":"e","ẽ":"e","ế":"e","ề":"e","ể":"e","ễ":"e","ệ":"e","ḟ":"f","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","ǧ":"g","ǵ":"g","ḡ":"g","ĥ":"h","ȟ":"h","ḣ":"h","ḥ":"h","ḧ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ì":"i","í":"i","î":"i","ï":"i","ĩ":"i","ī":"i","ĭ":"i","į":"i","ǐ":"i","ȉ":"i","ȋ":"i","ḭ":"i","ḯ":"i","ỉ":"i","ị":"i","ĵ":"j","ǰ":"j","ķ":"k","ǩ":"k","ḱ":"k","ḳ":"k","ḵ":"k","ĺ":"l","ļ":"l","ľ":"l","ḷ":"l","ḹ":"l","ḻ":"l","ḽ":"l","ḿ":"m","ṁ":"m","ṃ":"m","ñ":"n","ń":"n","ņ":"n","ň":"n","ǹ":"n","ṅ":"n","ṇ":"n","ṉ":"n","ṋ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ō":"o","ŏ":"o","ő":"o","ơ":"o","ǒ":"o","ǫ":"o","ǭ":"o","ȍ":"o","ȏ":"o","ȫ":"o","ȭ":"o","ȯ":"o","ȱ":"o","ṍ":"o","ṏ":"o","ṑ":"o","ṓ":"o","ọ":"o","ỏ":"o","ố":"o","ồ":"o","ổ":"o","ỗ":"o","ộ":"o","ớ":"o","ờ":"o","ở":"o","ỡ":"o","ợ":"o","ṕ":"p","ṗ":"p","ŕ":"r","ŗ":"r","ř":"r","ȑ":"r","ȓ":"r","ṙ":"r","ṛ":"r","ṝ":"r","ṟ":"r","ś":"s","ŝ":"s","ş":"s","š":"s","ș":"s","ṡ":"s","ṣ":"s","ṥ":"s","ṧ":"s","ṩ":"s","ţ":"t","ť":"t","ț":"t","ṫ":"t","ṭ":"t","ṯ":"t","ṱ":"t","ẗ":"t","ù":"u","ú":"u","û":"u","ü":"u","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","ư":"u","ǔ":"u","ǖ":"u","ǘ":"u","ǚ":"u","ǜ":"u","ȕ":"u","ȗ":"u","ṳ":"u","ṵ":"u","ṷ":"u","ṹ":"u","ṻ":"u","ụ":"u","ủ":"u","ứ":"u","ừ":"u","ử":"u","ữ":"u","ự":"u","ṽ":"v","ṿ":"v","ŵ":"w","ẁ":"w","ẃ":"w","ẅ":"w","ẇ":"w","ẉ":"w","ẘ":"w","ẋ":"x","ẍ":"x","ý":"y","ÿ":"y","ŷ":"y","ȳ":"y","ẏ":"y","ẙ":"y","ỳ":"y","ỵ":"y","ỷ":"y","ỹ":"y","ź":"z","ż":"z","ž":"z","ẑ":"z","ẓ":"z","ẕ":"z"};
a=SC.diacriticMappingTable}var d,e,b="",f=this.length;for(var c=0;c<=f;++c){d=this.charAt(c);
e=a[d];if(e){b+=e}else{b+=d}}return b},trim:function(){return this.replace(SC.STRING_TRIM_REGEXP,"")
},trimLeft:function(){return this.replace(SC.STRING_TRIM_LEFT_REGEXP,"")},trimRight:function(){return this.replace(SC.STRING_TRIM_RIGHT_REGEXP,"")
},pluralize:function(){var k,e,b=this.split(/\s/).pop(),g=this.replace(b,""),a=b.charAt(0).match(/[A-Z]/)?true:false;
b=b.toLowerCase();for(k=0,e=SC.INFLECTION_CONSTANTS.UNCOUNTABLE.length;k<e;k++){var f=SC.INFLECTION_CONSTANTS.UNCOUNTABLE[k];
if(b==f){return this.toString()}}for(k=0,e=SC.INFLECTION_CONSTANTS.IRREGULAR.length;
k<e;k++){var c=SC.INFLECTION_CONSTANTS.IRREGULAR[k][0],j=SC.INFLECTION_CONSTANTS.IRREGULAR[k][1];
if((b==c)||(b==j)){if(a){j=j.capitalize()}return g+j}}for(k=0,e=SC.INFLECTION_CONSTANTS.PLURAL.length;
k<e;k++){var h=SC.INFLECTION_CONSTANTS.PLURAL[k][0],d=SC.INFLECTION_CONSTANTS.PLURAL[k][1];
if(h.test(b)){return this.replace(h,d)}}},singularize:function(){var k,e,b=this.split(/\s/).pop(),g=this.replace(b,""),a=b.charAt(0).match(/[A-Z]/)?true:false;
b=b.toLowerCase();for(k=0,e=SC.INFLECTION_CONSTANTS.UNCOUNTABLE.length;k<e;k++){var f=SC.INFLECTION_CONSTANTS.UNCOUNTABLE[k];
if(b==f){return this.toString()}}for(k=0,e=SC.INFLECTION_CONSTANTS.IRREGULAR.length;
k<e;k++){var c=SC.INFLECTION_CONSTANTS.IRREGULAR[k][0],j=SC.INFLECTION_CONSTANTS.IRREGULAR[k][1];
if((b==c)||(b==j)){if(a){c=c.capitalize()}return g+c}}for(k=0,e=SC.INFLECTION_CONSTANTS.SINGULAR.length;
k<e;k++){var h=SC.INFLECTION_CONSTANTS.SINGULAR[k][0],d=SC.INFLECTION_CONSTANTS.SINGULAR[k][1];
if(h.test(b)){return this.replace(h,d)}}}};SC.String.strip=SC.String.trim;SC.supplement(String.prototype,SC.String);
String.prototype.loc=SC.String.loc;SC.String.fmt=String.prototype.fmt;sc_require("mixins/string");
SC.MIXED_STATE="__MIXED__";SC.AUTO_CONTROL_SIZE="__AUTO__";SC.CALCULATED_CONTROL_SIZE="__CALCULATED__";
SC.JUMBO_CONTROL_SIZE="sc-jumbo-size";SC.HUGE_CONTROL_SIZE="sc-huge-size";SC.LARGE_CONTROL_SIZE="sc-large-size";
SC.REGULAR_CONTROL_SIZE="sc-regular-size";SC.SMALL_CONTROL_SIZE="sc-small-size";SC.TINY_CONTROL_SIZE="sc-tiny-size";
SC.Control={initMixin:function(){this._control_contentDidChange()},isSelected:NO,isSelectedBindingDefault:SC.Binding.oneWay().bool(),isActive:NO,isActiveBindingDefault:SC.Binding.oneWay().bool(),value:null,content:null,contentValueKey:null,contentPropertyDidChange:function(b,a){return this.updatePropertyFromContent("value",a,"contentValueKey")
},updatePropertyFromContent:function(f,b,e,d){var c=b==="*";if(e===undefined){e="content"+f.capitalize()+"Key"
}if(d===undefined){d=this.get("content")}e=this[e]?this.get(e):this.getDelegateProperty(e,this.displayDelegate);
if(e&&(c||b===e)){var a=(d)?(d.get?d.get(e):d[e]):null;this.set(f,a)}return this},updateContentWithValueObserver:function(){var a=this.contentValueKey?this.get("contentValueKey"):this.getDelegateProperty("contentValueKey",this.displayDelegate),b=this.get("content");
if(!a||!b){return}var c=this.get("value");if(typeof b.setIfChanged===SC.T_FUNCTION){b.setIfChanged(a,c)
}else{if(b[a]!==c){b[a]=c}}}.observes("value"),fieldKey:null,fieldLabel:null,errorLabel:function(){var a,c,b;
if(a=this.get("fieldLabel")){return a}c=this.get("fieldKey")||this.constructor.toString();
b=(c||"").humanize().capitalize();return"ErrorLabel."+c.locWithDefault(("FieldKey."+c).locWithDefault(b))
}.property("fieldLabel","fieldKey").cacheable(),controlSize:SC.REGULAR_CONTROL_SIZE,displayProperties:"isEnabled isSelected isActive controlSize".w(),_CONTROL_TMP_CLASSNAMES:{},renderMixin:function(b,g){var d=this.get("isSelected"),c=!this.get("isEnabled"),e=this._CONTROL_TMP_CLASSNAMES;
e.mixed=d===SC.MIXED_STATE;e.sel=d&&(d!==SC.MIXED_STATE);e.active=this.get("isActive");
var f=this.get("controlSize");if(f===SC.AUTO_CONTROL_SIZE||f===SC.CALCULATED_CONTROL_SIZE){f=SC.REGULAR_CONTROL_SIZE
}b.setClass(e).addClass(f);if(!g&&this.$input){var a=this.$input();if(a.attr("type")!=="radio"){this.$input().attr("disabled",c)
}}},updateRendererMixin:function(a){a.attr({isSelected:this.get("isSelected"),isEnabled:this.get("isEnabled"),isActive:this.get("isActive")});
var c=this.get("controlSize");if(c===SC.AUTO_CONTROL_SIZE||c===SC.CALCULATED_CONTROL_SIZE){c=this.get("layout");
if(SC.none(c.height)){if(this.get("controlSize")!==SC.CALCULATED_CONTROL_SIZE){SC.Logger.warn("PERFORMANCE WARNING!!! When your control lacks a height, but is set to automatically calculate what theme control size to use, it can impact performance. To hide this warning, set controlSize on this control to SC.CALCULATED_CONTROL_SIZE, or if you know the control size, set controlSize to the numeric or string control size.")
}var b=SC.clone(this.get("frame"));if(b){c.width=b.width;c.height=b.height}}}a.attr("controlSize",c)
},_control_content:null,_control_contentDidChange:function(){var b=this.get("content");
if(this._control_content===b){return}var c=this.contentPropertyDidChange,a=this._control_content;
if(a&&a.removeObserver){a.removeObserver("*",this,c)}this._control_content=b;if(b&&b.addObserver){b.addObserver("*",this,c)
}this.contentPropertyDidChange(b,"*")}.observes("content")};SC.Editable={isEditable:NO,isEditing:NO,beginEditing:function(){if(!this.get("isEditable")){return NO
}if(this.get("isEditing")){return YES}this.beginPropertyChanges();this.set("isEditing",YES);
this.becomeFirstResponder();this.endPropertyChanges();return YES},discardEditing:function(){return !this.get("isEditing")
},commitEditing:function(){if(!this.get("isEditing")){return YES}this.set("isEditing",NO);
this.resignFirstResponder();return YES}};SC.ALIGN_JUSTIFY="justify";SC.FlowedLayout={layoutDirection:SC.LAYOUT_HORIZONTAL,autoResize:YES,align:SC.ALIGN_LEFT,canWrap:YES,defaultFlowSpacing:{left:0,bottom:0,top:0,right:0},flowPadding:{left:0,bottom:0,right:0,top:0},concatenatedProperties:["childMixins"],initMixin:function(){this._scfl_tile()
},_scfl_childViewsDidChange:function(a){this.invokeOnce("_scfl_tile")}.observes("childViews"),_scfl_layoutPropertyDidChange:function(){this.invokeOnce("_scfl_tile")
},layoutChildViews:function(){this.invokeOnce("_scfl_tile")},layoutDidChangeFor:function(b){if(b.get("useAbsoluteLayout")){return arguments.callee.base.apply(this,arguments)
}if(!this._scfl_itemLayouts){return arguments.callee.base.apply(this,arguments)}var a=this._scfl_itemLayouts[SC.guidFor(b)];
if(!a){return arguments.callee.base.apply(this,arguments)}if(b.layout.width!==a.width||b.layout.height!==a.height){return arguments.callee.base.apply(this,arguments)
}},_scfl_observeChild:function(a){if(a._scfl_isBeingObserved){return}a._scfl_isBeingObserved=YES;
a.addObserver("isVisible",this,"_scfl_layoutPropertyDidChange");a.addObserver("calculatedWidth",this,"_scfl_layoutPropertyDidChange");
a.addObserver("calculatedHeight",this,"_scfl_layoutPropertyDidChange")},_scfl_unobserveChild:function(a){a._scfl_isBeingObserved=NO;
a.removeObserver("isVisible",this,"_scfl_layoutPropertyDidChange");a.removeObserver("calculatedWidth",this,"_scfl_layoutPropertyDidChange");
a.removeObserver("calculatedHeight",this,"_scfl_layoutPropertyDidChange")},flowSpacingForView:function(a,b){if(b.get("isSpacer")){return{left:0,top:0,right:0,bottom:0}
}var c=b.get("flowSpacing");if(!SC.none(c)){return c}return this.get("defaultFlowSpacing")
},flowSizeForView:function(l,j){var e=SC.clone(j.get("flowSize"));if(!SC.none(e)){var b=this.get("frame"),k=this.get("flowPadding"),h=this.flowSpacingForView(l,j);
var d=(this.get("layoutDirection")===SC.LAYOUT_HORIZONTAL&&!this.get("canWrap"))||(this.get("layoutDirection")===SC.LAYOUT_VERTICAL&&this.get("canWrap"));
if(!SC.none(e.widthPercentage)&&!d){e.width=(b.width-k.left-k.right)*e.widthPercentage-h.left-h.right
}if(!SC.none(e.heightPercentage)&&d){e.height=(b.height-k.top-k.bottom)*e.heightPercentage-h.top-h.bottom
}if(SC.none(e.width)){e.width=j.get("frame").width}if(SC.none(e.height)){e.height=j.get("frame").height
}return e}var c=j.get("calculatedWidth"),a=j.get("calculatedHeight");if(!SC.none(c)&&!SC.none(a)){return{width:c,height:a}
}var g=j.get("frame");return{width:g.width,height:g.height}},flowRow:function(c,t,h,q,a,m,k,o){q+=h[k];
var r,p=c.length,j,s,l=0,b=0,n=0;for(j=0;j<p;j++){r=c[j];if(r.get("isSpacer")){b+=r.get("spaceUnits")||1
}l+=r._scfl_cachedSpacedSize[m==="left"?"width":"height"]}if(p>1&&o===SC.ALIGN_JUSTIFY){b+=p-1
}if(b>0){n=(t-l)/b;l=t}var f,e,d=0;if(o===SC.ALIGN_RIGHT||o===SC.ALIGN_BOTTOM){d=(t-l)
}else{if(o===SC.ALIGN_CENTER||o===SC.ALIGN_MIDDLE){d=(t-l)/2}}for(j=0;j<p;j++){r=c[j];
if(m=="left"){f=d+h.left;e=q+h.top}else{f=q+h.left;e=d+h.top}if(r.get("fillHeight")&&k==="top"){r._scfl_cachedFlowSize.height=a
}if(r.get("fillWidth")&&k==="left"){r._scfl_cachedFlowSize.width=a}if(r.get("isSpacer")){var g=r._scfl_cachedSpacedSize[m==="left"?"width":"height"];
g=Math.max(g,n*(r.get("spaceUnits")||1));d+=g;r._scfl_cachedFlowSize[m==="left"?"width":"height"]=g;
r._scfl_cachedFlowSize[k==="left"?"width":"height"]=a}else{d+=r._scfl_cachedSpacedSize[m==="left"?"width":"height"]
}this.flowPositionView(j,r,f,e);if(o===SC.ALIGN_JUSTIFY){d+=n}}},flowPositionView:function(b,f,a,h){var g=f._scfl_cachedFlowSpacing,d=f._scfl_cachedFlowSize;
var e=this._scfl_itemLayouts[SC.guidFor(f)];var c={left:a+g.left,top:h+g.top,width:d.width,height:d.height};
this._scfl_itemLayouts[SC.guidFor(f)]=c;if(e&&e.left==c.left&&e.top==c.top&&e.width==c.width&&e.height==c.height){return
}f.set("layout",c);f.updateLayout()},_scfl_tile:function(){if(!this._scfl_itemLayouts){this._scfl_itemLayouts={}
}var h=this._scfl_isObserving||{},A={};var d=this.get("childViews"),e,o,x=d.length,k=[],f=[],a=0,y=0,j=0,s=this.get("frame").width,p=this.get("frame").height,m=this.get("canWrap"),z=this.get("layoutDirection"),n=this.get("flowPadding"),b,v,w=this.get("align");
var u,r,g,q,c,l,t;if(z===SC.LAYOUT_HORIZONTAL){t=s-n.right-n.left;u="left";q="top";
r="right";c="bottom";g="width";l="height"}else{t=p-n.bottom-n.top;u="top";q="left";
r="bottom";c="right";g="height";l="width"}for(o=0;o<x;o++){e=d[o];if(e.get("useAbsoluteLayout")){continue
}delete h[SC.guidFor(e)];A[SC.guidFor(e)]=e;if(!e.get("isVisible")){continue}b=this.flowSizeForView(o,e);
if(e.get("isSpacer")){b[g]=0}e._scfl_cachedFlowSize={width:b.width,height:b.height};
v=this.flowSpacingForView(o,e);b.width+=v.left+v.right;b.height+=v.top+v.bottom;e._scfl_cachedFlowSpacing=v;
e._scfl_cachedSpacedSize=b;if(m&&f.length>0){if(j+b[g]>=t){this.flowRow(f,t,n,y,a,u,q,w);
f=[];k.push(f);y+=a;a=0;j=0}}f.push(e);a=Math.max(b[l],a);j+=b[g]}this.flowRow(f,t,n,y,a,u,q,w);
this._scfl_lastFrameSize=this.get("frame");if(!m&&this.get("autoResize")){this._scfl_lastFrameSize[g]=j+n[u]+n[r];
this.adjust(g,j+n[u]+n[r])}else{if(this.get("autoResize")){this._scfl_lastFrameSize[l]=y+a+n[q]+n[c];
this.adjust(l,y+a+n[q]+n[c])}}for(o in h){this._scfl_unobserveChild(h[o])}for(o in A){this._scfl_observeChild(A[o])
}this._scfl_isObserving=A},_scfl_frameDidChange:function(){var b=this.get("frame"),a=this._scfl_lastFrameSize;
this._scfl_lastFrameSize=b;if(a&&a.width==b.width&&a.height==b.height){return}this.invokeOnce("_scfl_tile")
}.observes("frame"),destroyMixin:function(){var b=this._scfl_isObserving||SC.CoreSet.create();
for(var a in b){this._scfl_unobserveChild(b[a])}}};SC.Gesturable={concatenatedProperties:["gestures"],gestures:[],initMixin:function(){this.createGestures()
},createGestures:function(){var e=this.get("gestures"),b,a=e.length,c,d=[];for(b=0;
b<a;b++){if(SC.typeOf(e[b])===SC.T_STRING){c=this.get(e[b])}else{c=e[b]}if(!c){throw"Could not find gesture named '"+e[b]+"' on view."
}if(c.isClass){c=c.create({view:this})}if(SC.typeOf(e[b])===SC.T_STRING){this[e[b]]=c
}d.push(c)}this.set("gestures",d)},touchStart:function(a){this.gestureTouchStart(a)
},touchesDragged:function(a,b){this.gestureTouchesDragged(a,b)},touchEnd:function(a){this.gestureTouchEnd(a)
},gestureTouchStart:function(e){e.isInteresting=0;var d=this.get("gestures"),b,a=d.length,c;
for(b=0;b<a;b++){c=d[b];c.unassignedTouchDidStart(e)}},gestureTouchesDragged:function(c,e){var f=this.get("gestures"),b,a=f.length,d;
for(b=0;b<a;b++){d=f[b];d.unassignedTouchesDidChange(c,e)}},gestureTouchEnd:function(e){var d=this.get("gestures"),b,a=d.length,c;
for(b=0;b<a;b++){c=d[b];c.unassignedTouchDidEnd(e)}}};SC.mixin(SC.browser,(function(){var a=window.innerWidth,c=SC.browser,b=navigator.standalone;
SC.extend(c,{isOpera:!!c.opera,isIe:!!c.msie,isIE:!!c.msie,isSafari:!!c.safari,isMobileSafari:(!!c.mobileSafari||!!c.standalone),isMozilla:!!c.mozilla,isWindows:!!c.windows,isMac:!!c.mac,isiPhone:((!!c.mobileSafari||!!c.standalone)&&(a==320||a==480)),current:c.msie?"msie":c.mozilla?"mozilla":c.safari?"safari":c.opera?"opera":"unknown",compareVersion:function(){if(this._versionSplit===undefined){var g=function(h){return Number(h.match(/^[0-9]+/))
};this._versionSplit=SC.A(this.version.split(".")).map(g)}var f=SC.A(arguments).map(Number);
for(var e=0;e<f.length;e++){var d=this._versionSplit[e]-f[e];if(isNaN(d)){return 0
}if(d!==0){return d}}return 0}});return c})());SC.Builder=function(a){return SC.Builder.create(a)
};SC.Builder.create=function create(c){var b=SC.mixin(SC.beget(this.fn),c||{});if(c.hasOwnProperty("toString")){b.toString=c.toString
}var a=function(){var d=SC.beget(b);d.defaultClass=this;d.constructor=a;return d.init.apply(d,arguments)
};a.fn=a.prototype=b;a.extend=SC.Builder.create;a.mixin=SC.Builder.mixin;return a
};SC.Builder.mixin=function(){var b=arguments.length,a;for(a=0;a<b;a++){SC.mixin(this,arguments[a])
}return this};SC.Builder.fn={init:function(a){if(a!==undefined){if(SC.typeOf(a)===SC.T_ARRAY){var b=a.length;
while(--b>=0){this[b]=a.objectAt?a.objectAt(b):a[b]}this.length=a.length}else{this[0]=a;
this.length=1}}return this},size:function(){return this.length},pushStack:function(){var a=this.constructor.apply(this,arguments);
a.prevObject=this;return a},end:function(){return this.prevObject||this.constructor()
},toString:function(){return"%@$(%@)".fmt(this.defaultClass.toString(),SC.A(this).invoke("toString").join(","))
},mixin:SC.Builder.mixin};(function(){var a=SC.Enumerable,c=SC.Builder.fn,b,d;for(b in a){if(!a.hasOwnProperty(b)){continue
}d=Array.prototype[b]||a[b];c[b]=d}})();require("system/builder");SC.CoreQuery=(function(){var E=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,j=/^.[^:#\[\.]*$/;
var w=/ CQ\d+="(?:\d+|null)"/g,e=/(<(\w+)[^>]*?)\/>/g,q=/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i,b=/\s+/,f=/^\s+/,h=/^body|html$/i,C=/href|src|style/,k=/(button|input|object|select|textarea)/i,x=/alpha\([^)]*\)/,s=/opacity=([^)]*)/;
var B=SC.browser.msie?"styleFloat":"cssFloat";var t=(SC.browser.safari&&parseInt(SC.browser.version,0)<417)?"(?:[\\w*_-]|\\\\.)":"(?:[\\w\u0128-\uFFFF*_-]|\\\\.)";
var y=new RegExp("^("+t+"+)(#)("+t+"+)");var o=new RegExp("^([#.]?)("+t+"*)");var g=new RegExp("([#.]?)("+t+"*)","g");
var n=["Left","Right"];var d=["Top","Bottom"];var p={position:"absolute",visibility:"hidden",display:"block"};
var A=function A(H,G,M){var L=G==="width"?H.offsetWidth:H.offsetHeight;var J=0,F=0,K=M.length,I;
while(--K>=0){I=M[K];J+=parseFloat(c.curCSS(H,"padding"+I,true))||0;F+=parseFloat(c.curCSS(H,"border"+I+"Width",true))||0
}L-=Math.round(J+F);return L};var l=SC.guidKey,z=0,D={},a=/z-?index|font-?weight|opacity|zoom|line-?height/i,u=document.defaultView||{};
var r=function r(G){if(!SC.browser.safari){return false}var F=u.getComputedStyle(G,null);
return !F||F.getPropertyValue("color")===""};function m(F,G){return F[0]&&parseInt(c.curCSS(F[0],G,true),10)||0
}var v,c;c=v=SC.Builder.create({jquery:"SC.CoreQuery",init:function(F,H){F=F||document;
if(F.nodeType){this[0]=F;this.length=1;return this}else{if(typeof F==="string"){var G=E.exec(F);
if(G&&(G[1]||!H)){if(G[1]){F=c.clean([G[1]],H)}else{var I=document.getElementById(G[3]);
if(I){if(I.id!=G[3]){return c().find(F)}return c(I)}F=[]}}else{return c(H).find(F)
}}else{if(SC.typeOf(F)===SC.T_FUNCTION){return SC.ready(F)}}}return this.setArray(c.makeArray(F))
},size:function(){return this.length},get:function(F){return F===undefined?c.makeArray(this):this[F]
},find:function(F){var G=c.map(this,function(H){return c.find(F,H)});return this.pushStack(G)
},filter:function(F){return this.pushStack((SC.typeOf(F)===SC.T_FUNCTION)&&c.grep(this,function(H,G){return F.call(H,G)
})||c.multiFilter(F,this))},not:function(F){if(typeof F==="string"){if(j.test(F)){return this.pushStack(c.multiFilter(F,this,true))
}else{F=c.multiFilter(F,this)}}var G=F.length&&F[F.length-1]!==undefined&&!F.nodeType;
return this.filter(function(){return G?c.inArray(this,F)<0:this!=F})},setArray:function(F){this.length=0;
Array.prototype.push.apply(this,F);return this},map:function(F){return this.pushStack(c.map(this,function(H,G){return F.call(H,G,H)
}))},each:function(G,F){return c.each(this,G,F)},index:function(F){if(F&&F.jquery){F=F[0]
}return Array.prototype.indexOf.call(this,F)},eq:function(F){return this.slice(F,+F+1)
},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments))
},add:function(F){return this.pushStack(c.merge(this.get(),typeof F==="string"?c(F):c.makeArray(F)).uniq())
},attr:function(G,I,H){var F=G;if(typeof G==="string"){if(I===undefined){return this[0]&&c[H||"attr"](this[0],G)
}else{F={};F[G]=I}}return this.each(function(J){for(G in F){c.attr((H)?this.style:this,G,c.prop(this,F[G],H,J,G))
}})},html:function(F){return F===undefined?(this[0]?this[0].innerHTML.replace(w,""):null):this.empty().append(F)
},andSelf:function(){return this.add(this.prevObject)},is:function(F){return !!F&&c.multiFilter(F,this).length>0
},hasClass:function(F){return Array.prototype.every.call(this,function(G){return(G.nodeType===1)&&c.className.has(G,F)
})},val:function(L){if(L===undefined){var F=this[0];if(F){if(c.nodeName(F,"option")){return(F.attributes.value||{}).specified?F.value:F.text
}if(c.nodeName(F,"select")){var J=F.selectedIndex,M=[],N=F.options,I=F.type==="select-one",H;
if(J<0){return null}var G,K=I?J+1:N.length;for(G=I?J:0;G<K;G++){H=N[G];if(H.selected){L=c(H).val();
if(I){return L}M.push(L)}}return M}return(F.value||"").replace(/\r/g,"")}return undefined
}else{if(typeof L==="number"){L+=""}this.each(function(){if(this.nodeType!==1){return
}if(SC.typeOf(L)===SC.T_ARRAY&&(/radio|checkbox/).test(this.type)){this.checked=(c.inArray(this.value,L)>=0||c.inArray(this.name,L)>=0)
}else{if(c.nodeName(this,"select")){var O=c.makeArray(L);c("option",this).each(function(){this.selected=(c.inArray(this.value,O)>=0||c.inArray(this.text,O)>=0)
});if(!O.length){this.selectedIndex=-1}}else{this.value=L}}})}return this},clone:function(){var F=this.map(function(){if(SC.browser.msie&&!c.isXMLDoc(this)){var I=this.cloneNode(true),H=document.createElement("div");
H.appendChild(I);return c.clean([H.innerHTML])[0]}else{return this.cloneNode(true)
}});var G=F.find("*").andSelf().each(function(){if(this[SC.guidKey]!==undefined){this[SC.guidKey]=null
}});return F},css:function(F,G){if((F==="width"||F==="height")&&parseFloat(G,0)<0){G=undefined
}return this.attr(F,G,"curCSS")},text:function(G){if(G!==undefined&&typeof G!=="object"&&G!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(G))
}var F="";c.each(G||this,function(){c.each(this.childNodes,function(){if(this.nodeType!==8){F+=this.nodeType!==1?this.nodeValue:c.fn.text([this])
}})});return F},show:function(){var F=SC.$.isVisible;this.each(function(){if(!F(this)){this.style.display=this.oldblock||"";
if(c.css(this,"display")==="none"){var G=c("<"+this.tagName+"/>");c("body").append(G);
this.style.display=G.css("display");if(this.style.display==="none"){this.style.display="block"
}G.remove();G=null}}});return this},hide:function(){var F=SC.$.isVisible;this.each(function(){if(F(this)){this.oldblock=this.oldblock||c.css(this,"display");
this.style.display="none"}});return this},domManip:function(H,I,G,K){var J=this.length>1,F;
return this.each(function(){if(!F){F=c.clean(H,this.ownerDocument);if(G){F.reverse()
}}var L=this;if(I&&c.nodeName(this,"table")&&c.nodeName(F[0],"tr")){L=this.getElementsByTagName("tbody")[0]||this.appendChild(this.ownerDocument.createElement("tbody"))
}c.each(F,function(){var M=J?c(this).clone(true)[0]:this;K.call(L,M)})})},append:function(){return this.domManip(arguments,true,false,function(F){if(this.nodeType===1){this.appendChild(F)
}})},prepend:function(){return this.domManip(arguments,true,true,function(F){if(this.nodeType===1){this.insertBefore(F,this.firstChild)
}})},before:function(){return this.domManip(arguments,false,false,function(F){this.parentNode.insertBefore(F,this)
})},after:function(){return this.domManip(arguments,false,true,function(F){this.parentNode.insertBefore(F,this.nextSibling)
})},replaceWith:function(F){return this.after(F).remove()},removeData:function(F){return this.each(function(){SC.removeData(this,F)
})}});v.mixin({nodeName:function(G,F){return G.nodeName&&G.nodeName.toUpperCase()===F.toUpperCase()
},map:function(F,K){var G=[],J,H,I;for(H=0,I=F.length;H<I;H++){J=K(F[H],H);if(J!=null){G[G.length]=J
}}return G.concat.apply([],G)},each:function(H,L,G){var F,I=0,J=H.length;if(G){if(J===undefined){for(F in H){if(L.apply(H[F],G)===false){break
}}}else{for(;I<J;){if(L.apply(H[I++],G)===false){break}}}}else{if(J===undefined){for(F in H){if(L.call(H[F],F,H[F])===false){break
}}}else{for(var K=H[0];I<J&&L.call(K,I,K)!==false;K=H[++I]){}}}return H},isXMLDoc:function(F){return F.documentElement&&!F.body||F.tagName&&F.ownerDocument&&!F.ownerDocument.body
},clean:function(F,H){var G=[];H=H||document;if(typeof H.createElement=="undefined"){H=H.ownerDocument||H[0]&&H[0].ownerDocument||document
}c.each(F,function(L,N){if(typeof N==="number"){N+=""}if(!N){return}if(typeof N==="string"){N=N.replace(e,function(Q,R,P){return P.match(q)?Q:R+"></"+P+">"
});var K=N.replace(f,"").substring(0,10).toLowerCase(),O=H.createElement("div");var M=!K.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!K.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||K.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!K.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!K.indexOf("<td")||!K.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!K.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||SC.browser.msie&&[1,"div<div>","</div>"]||[0,"",""];
O.innerHTML=M[1]+N+M[2];while(M[0]--){O=O.lastChild}if(SC.browser.msie){var J=!K.indexOf("<table")&&K.indexOf("<tbody")<0?O.firstChild&&O.firstChild.childNodes:M[1]==="<table>"&&K.indexOf("<tbody")<0?O.childNodes:[];
for(var I=J.length-1;I>=0;--I){if(c.nodeName(J[I],"tbody")&&!J[I].childNodes.length){J[I].parentNode.removeChild(J[I])
}}if(/^\s/.test(N)){O.insertBefore(H.createTextNode(N.match(/^\s*/)[0]),O.firstChild)
}}N=c.makeArray(O.childNodes)}if(N.length===0&&(!c.nodeName(N,"form")&&!c.nodeName(N,"select"))){return
}if(N[0]===undefined||c.nodeName(N,"form")||N.options){G.push(N)}else{G=c.merge(G,N)
}});return G},find:function(S,G){var N;if(typeof S!=="string"){return[S]}if(S.indexOf(",")>=0){N=S.split(",").map(function(U){return c.find(U,G)
});return N.concat.apply([],N).uniq()}if(G&&G.nodeType!==1&&G.nodeType!==9){return[]
}G=G||document;N=[G];var P,F=YES,J=S.match(g),M=J.length,I;for(var Q=0;Q<M;Q++){S=J[Q];
if(S===" "||S===""){F=YES}else{if(F){I=o.exec(S);if((I[1]==="")&&(Q<(M-1))&&(J[Q+1].charAt(0)==="#")){S=J[Q+1];
J[Q+1]=J[Q];I=o.exec(S)}var L=[],K=N.length,O,R,H=I[2],T;for(O=0;O<K;O++){R=N[O];
switch(I[1]){case"":if(!H){H="*"}if(H==="*"&&R.nodeName.toLowerCase()==="object"){H="param"
}L=c.merge(L,R.getElementsByTagName(H));break;case"#":if(R===document){T=document.getElementById(H);
if(SC.browser.msie&&T&&T.getAttribute("id")!==H){T=NO}else{if(T){L.push(T)}T=YES}}else{T=NO
}if(!T){T=R.getElementsByTagName("*");T=Array.prototype.find.call(T,function(U){return U.getAttribute&&(U.getAttribute("id")===H)
});if(T){L.push(T)}}break;case".":if(R.getElementsByClassName){L=c.merge(L,R.getElementsByClassName(H))
}else{L=c.merge(L,c.classFilter(R.getElementsByTagName("*"),H))}break;default:}}delete N;
N=L;F=NO}else{N=c.filter(S,N)}}}if(N&&N[0]==G){N.shift()}return N.uniq()},classFilter:function(K,F,J){F=" "+F+" ";
var H=[],I;for(var G=0;K[G];G++){I=(" "+K[G].className+" ").indexOf(F)>=0;if(!J&&I||J&&!I){H.push(K[G])
}}return H},filter:function(G,K,J){var F=o.exec(G),L=F[2],I=F[1],H;if(I==="."){return c.classFilter(c.makeArray(K),L,J)
}else{if(I==="#"){H=function(N){var M=N&&N.getAttribute&&(N.getAttribute("id")===L);
return(J)?!M:M}}else{H=function(N){var M=c.nodeName(N,L);return(J)?!M:M}}return Array.prototype.filter.call(c.makeArray(K),H)
}},multiFilter:function(I,F,H){I=I.indexOf(",")?I.split(","):[I];var K=I.length,J,G=[];
while(--K>=0){J=c.filter(I[K].trim(),F,H);G=H?F=J:c.merge(J,G)}return G},merge:function(I,F){var G=0,H,J=I.length;
if(SC.browser.msie){while(H=F[G++]){if(H.nodeType!==8){I[J++]=H}}}else{while(H=F[G++]){I[J++]=H
}}return I},makeArray:function(H){var F=[];if(!SC.none(H)){var G=H.length;if(G==null||typeof H==="string"||H.setInterval){F[0]=H
}else{while(G){F[--G]=H[G]}}}return F},inArray:function(F,G){return G.indexOf?G.indexOf(F):Array.prototype.indexOf.call(G,F)
},boxModel:!SC.browser.msie||document.compatMode==="CSS1Compat",props:{"for":"htmlFor","class":"className","float":B,cssFloat:B,styleFloat:B,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan"},prop:function(I,J,H,G,F){if(SC.typeOf(J)===SC.T_FUNCTION){J=J.call(I,G)
}return J&&(typeof J==="number")&&H==="curCSS"&&!a.test(F)?J+"px":J},grep:function(G,K,F){var H=[];
for(var I=0,J=G.length;I<J;I++){if(!F!=!K(G[I],I)){H.push(G[I])}}return H},className:{add:function(G,H){var F=c.className.has;
c.each((H||"").split(b),function(I,J){if(G.nodeType===1&&!F(G.className,J)){G.className+=(G.className?" ":"")+J
}})},remove:function(F,G){if(F.nodeType===1){F.className=G!==undefined?c.grep(F.className.split(b),function(H){return !c.className.has(G,H)
}).join(" "):""}},has:function(G,F){return G&&c.inArray(F,(G.className||G).toString().split(b))>-1
}},swap:function(K,J,M,L,F){var G={},I;for(I in J){G[I]=K.style[I];K.style[I]=J[I]
}var H=M(K,L,F);for(I in J){K.style[I]=G[I]}return H},css:function(H,F,I){if(F==="width"||F==="height"){var K,J=(F==="width")?n:d,G=p;
K=SC.$.isVisible(H)?A(H,F,J):c.swap(H,G,A,F,J);return Math.max(0,K)}return c.curCSS(H,F,I)
},curCSS:function(L,G,H){var Q,F=L.style;if(G==="opacity"&&SC.browser.msie){Q=c.attr(F,"opacity");
return Q===""?"1":Q}if(SC.browser.opera&&G==="display"){var R=F.outline;F.outline="0 solid black";
F.outline=R}var I=G.match(/float/i);if(I){G=B}if(!H&&F&&F[G]){Q=F[G]}else{if(u.getComputedStyle){if(I){G="float"
}G=G.replace(/([A-Z])/g,"-$1").toLowerCase();var S=u.getComputedStyle(L,null);if(S&&!r(L,u)){Q=S.getPropertyValue(G)
}else{var K=[],T=[],U=L,N=0,P,M;for(;U&&r(U);U=U.parentNode){T.unshift(U)}for(M=T.length;
N<M;N++){if(r(T[N])){K[N]=T[N].style.display;T[N].style.display="block"}}Q=(G==="display"&&K[T.length-1]!==null)?"none":(S&&S.getPropertyValue(G))||"";
for(N=0,P=K.length;N<P;N++){if(K[N]!==null){T[N].style.display=K[N]}}}if(G==="opacity"&&Q===""){Q="1"
}}else{if(L.currentStyle){Q=L.currentStyle[G]||L.currentStyle[G.camelize()];if(!(/^\d+(px)?$/i).test(Q)&&(/^\d/).test(Q)){var J=F.left,O=L.runtimeStyle.left;
L.runtimeStyle.left=L.currentStyle.left;F.left=Q||0;Q=F.pixelLeft+"px";F.left=J;L.runtimeStyle.left=O
}}}}return Q},dir:function(H,G){var F=[],I=H[G];while(I&&I!=document){if(I.nodeType===1){F.push(I)
}I=I[G]}return F},nth:function(J,F,H,I){F=F||1;var G=0;for(;J;J=J[H]){if(J.nodeType===1&&++G==F){break
}}return J},sibling:function(H,G){var F=[];for(;H;H=H.nextSibling){if(H.nodeType===1&&H!=G){F.push(H)
}}return F},attr:function(G,F,M){if(!G||G.nodeType===3||G.nodeType===8){return undefined
}var H=!c.isXMLDoc(G),L=M!==undefined,J=SC.browser.msie;F=H&&c.props[F]||F;if(G.tagName){var K=C.test(F);
if(F==="selected"&&G.parentNode){G.parentNode.selectedIndex}if(F in G&&H&&!K){if(L){if(F==="type"&&c.nodeName(G,"input")&&G.parentNode){throw"type property can't be changed"
}G[F]=M}if(c.nodeName(G,"form")&&G.getAttributeNode(F)){return G.getAttributeNode(F).nodeValue
}if(F==="tabIndex"){var N=G.getAttributeNode("tabIndex");return N&&N.specified?N.value:G.nodeName.match(k)?0:G.nodeName.match(/^(a|area)$/i)&&G.href?0:undefined
}return G[F]}if(J&&H&&F==="style"){return c.attr(G.style,"cssText",M)}if(L){G.setAttribute(F,""+M)
}var I=(J&&H&&K)?G.getAttribute(F,2):G.getAttribute(F);return I===null?undefined:I
}if(J&&F==="opacity"){if(L){G.zoom=1;G.filter=(G.filter||"").replace(x,"")+(parseInt(M,0)+""=="NaN"?"":"alpha(opacity="+M*100+")")
}return G.filter&&G.filter.indexOf("opacity=")>=0?(parseFloat(G.filter.match(s)[1])/100)+"":""
}F=F.camelize();if(L){G[F]=M}return G[F]}});c.fn.init.prototype=c.fn;c.each({parent:function(F){return F.parentNode
},parents:function(F){return c.dir(F,"parentNode")},next:function(F){return c.nth(F,2,"nextSibling")
},prev:function(F){return c.nth(F,2,"previousSibling")},nextAll:function(F){return c.dir(F,"nextSibling")
},prevAll:function(F){return c.dir(F,"previousSibling")},siblings:function(F){return c.sibling(F.parentNode.firstChild,F)
},children:function(F){return c.sibling(F.firstChild)},contents:function(F){return c.nodeName(F,"iframe")?F.contentDocument||F.contentWindow.document:c.makeArray(F.childNodes)
}},function(F,G){c.fn[F]=function(H){var I=c.map(this,G);if(H&&typeof H==="string"){I=c.multiFilter(H,I)
}return this.pushStack(I.uniq())}});c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(F,G){c.fn[F]=function(){var H=arguments;
return this.each(function(){for(var I=0,J=H.length;I<J;I++){c(H[I])[G](this)}})}});
c.each({removeAttr:function(F){c.attr(this,F,"");if(this.nodeType===1){this.removeAttribute(F)
}},addClass:function(F){c.className.add(this,F)},removeClass:function(F){c.className.remove(this,F)
},toggleClass:function(F){c.className[c.className.has(this,F)?"remove":"add"](this,F)
},remove:function(F){if(!F||c.filter(F,[this]).length){if(this.parentNode){this.parentNode.removeChild(this)
}}},empty:function(){while(this.firstChild){this.removeChild(this.firstChild)}}},function(F,G){c.fn[F]=function(){return this.each(G,arguments)
}});c.each(["Height","Width"],function(J,H){var K=H.toLowerCase(),G;c.fn[K]=function(L){if(this[0]===window){if(SC.browser.opera){G=document.body["client"+H]
}else{if(SC.browser.safari){G=window["inner"+H]}else{if(document.compatMode){G=documentElement["client"+H]
}else{G=document.body["client"+H]}}}}else{if(this[0]===document){G=Math.max(Math.max(document.body["scroll"+H],document.documentElement["scroll"+H]),Math.max(document.body["offset"+H],document.documentElement["offset"+H]))
}else{if(L===undefined){return this.length?c.css(this[0],K):null}else{return this.css(K,(typeof L==="string")?L:L+"px")
}}}return G};var F=J?"Left":"Top",I=J?"Right":"Bottom";c.fn["inner"+H]=function(){return this[H.toLowerCase()]()+m(this,"padding"+F)+m(this,"padding"+I)
};c.fn["outer"+H]=function(L){return this["inner"+H]()+m(this,"border"+F+"Width")+m(this,"border"+I+"Width")+(L?m(this,"margin"+F)+m(this,"margin"+I):0)
}});v.fn.offset=function(){var G=0,O=0,H=this[0],T=SC.browser,K;if(!H){return undefined
}function J(U){S(c.curCSS(U,"borderLeftWidth",true),c.curCSS(U,"borderTopWidth",true))
}function S(U,V){G+=parseInt(U,10)||0;O+=parseInt(V,10)||0}var Q=H.parentNode,N=H,F=H.offsetParent,P=H.ownerDocument,R=T.safari&&parseInt(T.version,0)<522&&!(/adobeair/i).test(T.userAgent),M=c.curCSS,I=c.css(H,"position")==="fixed";
if(!(T.mozilla&&H==document.body)&&H.getBoundingClientRect){var L=H.getBoundingClientRect();
S(L.left+Math.max(P.documentElement.scrollLeft,P.body.scrollLeft),L.top+Math.max(P.documentElement.scrollTop,P.body.scrollTop));
S(-P.documentElement.clientLeft,-P.documentElement.clientTop)}else{S(H.offsetLeft,H.offsetTop);
while(F){S(F.offsetLeft,F.offsetTop);if(T.mozilla&&!(/^t(able|d|h)$/i).test(F.tagName)||T.safari&&!R){J(F)
}if(!I&&M(F,"position")==="fixed"){I=true}N=(/^body$/i).test(F.tagName)?N:F;F=F.offsetParent
}while(Q&&Q.tagName&&!(h).test(Q.tagName)){if(!(/^inline|table.*$/i).test(M(Q,"display"))){S(-Q.scrollLeft,-Q.scrollTop)
}if(T.mozilla&&M(Q,"overflow")!=="visible"){J(Q)}Q=Q.parentNode}if((R&&(I||M(N,"position")==="absolute"))||(T.mozilla&&M(N,"position")!=="absolute")){S(-P.body.offsetLeft,-P.body.offsetTop)
}if(I){S(Math.max(P.documentElement.scrollLeft,P.body.scrollLeft),Math.max(P.documentElement.scrollTop,P.body.scrollTop))
}}K={top:O,left:G};return K};v.fn.mixin({position:function(){var J=0,I=0,G;if(this[0]){var H=this.offsetParent(),K=this.offset(),F=h.test(H[0].tagName)?{top:0,left:0}:H.offset();
K.top-=m(this,"marginTop");K.left-=m(this,"marginLeft");F.top+=m(H,"borderTopWidth");
F.left+=m(H,"borderLeftWidth");G={top:K.top-F.top,left:K.left-F.left}}return G},offsetParent:function(){var F=this[0].offsetParent||document.body;
while(F&&(!(h).test(F.tagName)&&c.css(F,"position")==="static")){F=F.offsetParent
}return c(F)}});c.each(["Left","Top"],function(G,F){var H="scroll"+F;c.fn[H]=function(I){if(!this[0]){return
}return I!==undefined?this.each(function(){this==window||this==document?window.scrollTo(!G?I:c(window).scrollLeft(),G?I:c(window).scrollTop()):this[H]=I
}):this[0]==window||this[0]==document?self[G?"pageYOffset":"pageXOffset"]||c.boxModel&&document.documentElement[H]||document.body[H]:this[0][H]
}});return v}());SC.$=(typeof jQuery=="undefined")?SC.CoreQuery:jQuery;SC.mixin(SC.$.fn,{isCoreQuery:YES,toString:function(){var c=[],b=this.length,a=0;
for(a=0;a<b;a++){c[a]="%@: %@".fmt(a,this[a]?this[a].toString():"(null)")}return"<$:%@>(%@)".fmt(SC.guidFor(this),c.join(" , "))
},isVisible:function(){return Array.prototype.every.call(this,function(a){return SC.$.isVisible(a)
})},first:function(){return this.pushStack([this[0]])},last:function(){return this.pushStack([this[this.length-1]])
},view:function(){return this.map(function(){var b=null,a=SC.viewKey,d=this,c;while(!b&&d&&(d!==document)){if(d.nodeType===1&&(c=d.getAttribute("id"))){b=SC.View.views[c]
}d=d.parentNode}d=null;return b})},setClass:function(d,c){if(SC.none(d)){return this
}var e=SC.typeOf(d)!==SC.T_STRING,a=this._fixupClass,b;this.each(function(){if(this.nodeType!==1){return
}var h=this.className.split(/\s+/),g=NO;if(e){for(var f in d){if(!d.hasOwnProperty(f)){continue
}g=a(h,f,d[f])||g}}else{g=a(h,d,c)}if(g){this.className=h.join(" ")}});return this
},_fixupClass:function(d,a,c){var b=d.indexOf(a);if(c){if(b<0){d.push(a);return YES
}}else{if(b>=0){d[b]=null;return YES}}return NO},within:function(e){e=SC.$(e);var d,c,g,b,a=e.length,f=this.length;
while(!d&&(--f>=0)){g=this[f];for(b=0;!d&&(b<a);b++){c=e[b];while(c&&(c!==g)){c=c.parentNode
}d=c===g}}g=c=null;return d}});(function(){var c={},f={find:function(j,h){return(h!==undefined)?SC.Enumerable.find.call(this,j,h):c.find.call(this,j)
},filter:function(j,h){return(h!==undefined)?this.pushStack(SC.Enumerable.filter.call(this,j,h)):c.filter.call(this,j)
},filterProperty:function(h,j){return this.pushStack(SC.Enumerable.filterProperty.call(this,h,j))
},indexOf:SC.$.index,map:function(j,h){return(h!==undefined)?SC.Enumerable.map.call(this,j,h):c.map.call(this,j)
}};var g=SC.$.jquery==="SC.CoreQuery",d=SC.$.fn,a=g?f:SC.Enumerable,e;for(var b in a){if(!a.hasOwnProperty(b)){continue
}e=a[b];if(b in f){c[b]=d[b];e=f[b]}d[b]=e}})();SC.mixin(SC.$,{isVisible:function(a){var b=SC.$;
return("hidden"!=a.type)&&(b.css(a,"display")!="none")&&(b.css(a,"visibility")!="hidden")
}});sc_require("system/core_query");SC.Event=function(d){var c,b;if(d){this.originalEvent=d;
var g=SC.Event._props,e;b=g.length;c=b;while(--c>=0){e=g[c];this[e]=d[e]}}this.timeStamp=this.timeStamp||Date.now();
if(!this.target){this.target=this.srcElement||document}if(this.target.nodeType===3){this.target=this.target.parentNode
}if(!this.relatedTarget&&this.fromElement){this.relatedTarget=(this.fromElement===this.target)?this.toElement:this.fromElement
}if(SC.none(this.pageX)&&!SC.none(this.clientX)){var h=document.documentElement,a=document.body;
this.pageX=this.clientX+(h&&h.scrollLeft||a&&a.scrollLeft||0)-(h.clientLeft||0);this.pageY=this.clientY+(h&&h.scrollTop||a&&a.scrollTop||0)-(h.clientTop||0)
}if(!this.which&&((this.charCode||d.charCode===0)?this.charCode:this.keyCode)){this.which=this.charCode||this.keyCode
}if(!this.metaKey&&this.ctrlKey){this.metaKey=this.ctrlKey}if(!this.which&&this.button){this.which=((this.button&1)?1:((this.button&2)?3:((this.button&4)?2:0)))
}if(SC.browser.safari&&d.wheelDelta!==undefined){this.wheelDelta=0-(d.wheelDeltaY||d.wheelDeltaX);
this.wheelDeltaY=0-(d.wheelDeltaY||0);this.wheelDeltaX=0-(d.wheelDeltaX||0)}else{if(!SC.none(d.detail)){var f=Math.floor(d.detail*40);
if(d.axis&&(d.axis===d.HORIZONTAL_AXIS)){this.wheelDeltaX=f;this.wheelDeltaY=this.wheelDelta=0
}else{this.wheelDeltaY=this.wheelDelta=f;this.wheelDeltaX=0}}else{this.wheelDelta=this.wheelDeltaY=SC.browser.msie?0-d.wheelDelta:d.wheelDelta;
this.wheelDeltaX=0}}return this};SC.mixin(SC.Event,{create:function(a){return new SC.Event(a)
},add:function(e,d,f,g,c){if(e&&e.isCoreQuery){if(e.length>0){e.forEach(function(h){this.add(h,d,f,g,c)
},this);return this}else{e=e[0]}}if(!e){return this}if(e.nodeType===3||e.nodeType===8){return SC.Event
}if(SC.browser.msie&&e.setInterval){e=window}if(SC.typeOf(f)===SC.T_FUNCTION){c=g;
g=f;f=null}else{if(f&&SC.typeOf(g)===SC.T_STRING){g=f[g]}}var b=SC.data(e,"events")||SC.data(e,"events",{}),a=b[d];
if(!a){a=b[d]={};this._addEventListener(e,d)}a[SC.guidFor(g)]=[f,g,c];SC.Event._global[d]=YES;
e=b=a=null;return this},remove:function(f,e,g,h){if(f&&f.isCoreQuery){if(f.length>0){f.forEach(function(j){this.remove(j,e,g,h)
},this);return this}else{f=f[0]}}if(!f){return this}if(f.nodeType===3||f.nodeType===8){return SC.Event
}if(SC.browser.msie&&f.setInterval){f=window}var a,d,c=SC.data(f,"events");if(!c){return this
}if(e===undefined){for(e in c){this.remove(f,e)}}else{if(a=c[e]){var b=NO;if(g||h){if(SC.typeOf(g)===SC.T_FUNCTION){h=g;
g=null}else{if(SC.typeOf(h)===SC.T_STRING){h=g[h]}}delete a[SC.guidFor(h)];d=null;
for(d in a){break}if(d===null){b=YES}}else{b=YES}if(b){delete c[e];this._removeEventListener(f,e)
}d=null;for(d in c){break}if(!d){SC.removeData(f,"events");delete this._elements[SC.guidFor(f)]
}}}f=c=a=null;return this},NO_BUBBLE:["blur","focus","change"],simulateEvent:function(d,c,b){var a=SC.Event.create({type:c,target:d,preventDefault:function(){this.cancelled=YES
},stopPropagation:function(){this.bubbles=NO},allowDefault:function(){this.hasCustomEventHandling=YES
},timeStamp:Date.now(),bubbles:(this.NO_BUBBLE.indexOf(c)<0),cancelled:NO,normalized:YES});
if(b){SC.mixin(a,b)}return a},trigger:function(c,b,j,k){if(c&&c.isCoreQuery){if(c.length>0){c.forEach(function(n){this.trigger(n,b,j,k)
},this);return this}else{c=c[0]}}if(!c){return this}if(c.nodeType===3||c.nodeType===8){return undefined
}j=SC.A(j);var h,l=SC.typeOf(c[b]||null)===SC.T_FUNCTION,a,g,d,m;a=j[0];if(!a||!a.preventDefault){a=this.simulateEvent(c,b);
j.unshift(a)}a.type=b;g=c;do{h=SC.Event.handle.apply(g,j);g=(g===document)?null:(g.parentNode||document)
}while(!h&&a.bubbles&&g);g=null;d=c["on"+b];m=SC.CoreQuery.nodeName(c,"a")&&b==="click";
if((!l||m)&&d&&d.apply(c,j)===NO){h=NO}if(l&&k!==NO&&h!==NO&&!m){this.triggered=YES;
try{c[b]()}catch(f){}}this.triggered=NO;return h},handle:function(b){if((typeof SC==="undefined")||SC.Event.triggered){return YES
}var c,g,e,j,d,h,k,l,a,f;h=SC.A(arguments);h[0]=b=SC.Event.normalizeEvent(b||window.event);
d=(SC.data(this,"events")||{})[b.type];if(!d){return NO}for(k in d){l=d[k];a=l[1];
b.handler=a;b.data=b.context=l[2];f=l[0]||this;g=a.apply(f,h);if(c!==NO){c=g}if(g===NO){b.preventDefault();
b.stopPropagation()}}return c},unload:function(){var a,b=this._elements;for(a in b){this.remove(b[a])
}for(a in b){delete b[a]}delete this._elements},special:{ready:{setup:function(){SC._bindReady();
return},teardown:function(){return}},mouseenter:{setup:function(){if(SC.browser.msie){return NO
}SC.Event.add(this,"mouseover",SC.Event.special.mouseenter.handler);return YES},teardown:function(){if(SC.browser.msie){return NO
}SC.Event.remove(this,"mouseover",SC.Event.special.mouseenter.handler);return YES
},handler:function(a){if(SC.Event._withinElement(a,this)){return YES}a.type="mouseenter";
return SC.Event.handle.apply(this,arguments)}},mouseleave:{setup:function(){if(SC.browser.msie){return NO
}SC.Event.add(this,"mouseout",SC.Event.special.mouseleave.handler);return YES},teardown:function(){if(SC.browser.msie){return NO
}SC.Event.remove(this,"mouseout",SC.Event.special.mouseleave.handler);return YES},handler:function(a){if(SC.Event._withinElement(a,this)){return YES
}a.type="mouseleave";return SC.Event.handle.apply(this,arguments)}}},KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,KEY_HOME:36,KEY_END:35,KEY_PAGEUP:33,KEY_PAGEDOWN:34,KEY_INSERT:45,_withinElement:function(d,c){var b=d.relatedTarget;
while(b&&b!=c){try{b=b.parentNode}catch(a){b=c}}return b===c},_addEventListener:function(d,c){var e,b=this.special[c];
if(!b||b.setup.call(d)===NO){var a=SC.guidFor(d);this._elements[a]=d;e=SC.data(d,"listener")||SC.data(d,"listener",function(){return SC.Event.handle.apply(SC.Event._elements[a],arguments)
});if(d.addEventListener){d.addEventListener(c,e,NO)}else{if(d.attachEvent){d.attachEvent("on"+c,e)
}}}d=b=e=null},_removeEventListener:function(c,b){var d,a=SC.Event.special[b];if(!a||(a.teardown.call(c)===NO)){d=SC.data(c,"listener");
if(d){if(c.removeEventListener){c.removeEventListener(b,d,NO)}else{if(c.detachEvent){c.detachEvent("on"+b,d)
}}}}c=a=d=null},_elements:{},normalizeEvent:function(a){if(a===window.event){return SC.Event.create(a)
}else{return a.normalized?a:SC.Event.create(a)}},_global:{},_props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target timeStamp toElement type view which touches targetTouches changedTouches animationName elapsedTime".split(" ")});
SC.Event.prototype={hasCustomEventHandling:NO,touchesForView:function(a){if(this.touchContext){return this.touchContext.touchesForView(a)
}},touchesForResponder:function(a){if(this.touchContext){return this.touchContext.touchesForView(a)
}},averagedTouchesForView:function(a){if(this.touchContext){return this.touchContext.averagedTouchesForView(a)
}return null},allowDefault:function(){this.hasCustomEventHandling=YES;return this
},preventDefault:function(){var a=this.originalEvent;if(a){if(a.preventDefault){a.preventDefault()
}a.returnValue=NO}this.hasCustomEventHandling=YES;return this},stopPropagation:function(){var a=this.originalEvent;
if(a){if(a.stopPropagation){a.stopPropagation()}a.cancelBubble=YES}this.hasCustomEventHandling=YES;
return this},stop:function(){return this.preventDefault().stopPropagation()},normalized:YES,getCharString:function(){if(SC.browser.msie){if(this.keyCode==8||this.keyCode==9||(this.keyCode>=37&&this.keyCode<=40)){return String.fromCharCode(0)
}else{return(this.keyCode>0)?String.fromCharCode(this.keyCode):null}}else{return(this.charCode>0)?String.fromCharCode(this.charCode):null
}},commandCodes:function(){var e=this.keyCode,b=null,c=null,a="",d;if(e){b=SC.FUNCTION_KEYS[e];
if(!b&&(this.altKey||this.ctrlKey||this.metaKey)){b=SC.PRINTABLE_KEYS[e]}if(b){if(this.altKey){a+="alt_"
}if(this.ctrlKey||this.metaKey){a+="ctrl_"}if(this.shiftKey){a+="shift_"}}}if(!b){e=this.which;
c=b=String.fromCharCode(e);d=b.toLowerCase();if(this.metaKey){a="meta_";b=d}else{b=null
}}if(b){b=a+b}return[b,c]}};SC.Event.observe=SC.Event.add;SC.Event.stopObserving=SC.Event.remove;
SC.Event.fire=SC.Event.trigger;if(SC.browser.msie){SC.Event.add(window,"unload",SC.Event.prototype,SC.Event.unload)
}SC.MODIFIER_KEYS={16:"shift",17:"ctrl",18:"alt"};SC.FUNCTION_KEYS={8:"backspace",9:"tab",13:"return",19:"pause",27:"escape",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",44:"printscreen",45:"insert",46:"delete",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scrolllock"};
SC.PRINTABLE_KEYS={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",107:"+",109:"-",110:".",188:",",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:'"'};
SC.SYSTEM_CURSOR="default";SC.AUTO_CURSOR=SC.DEFAULT_CURSOR="auto";SC.CROSSHAIR_CURSOR="crosshair";
SC.HAND_CURSOR=SC.POINTER_CURSOR="pointer";SC.MOVE_CURSOR="move";SC.E_RESIZE_CURSOR="e-resize";
SC.NE_RESIZE_CURSOR="ne-resize";SC.NW_RESIZE_CURSOR="nw-resize";SC.N_RESIZE_CURSOR="n-resize";
SC.SE_RESIZE_CURSOR="se-resize";SC.SW_RESIZE_CURSOR="sw-resize";SC.S_RESIZE_CURSOR="s-resize";
SC.W_RESIZE_CURSOR="w-resize";SC.IBEAM_CURSOR=SC.TEXT_CURSOR="text";SC.WAIT_CURSOR="wait";
SC.HELP_CURSOR="help";SC.Cursor=SC.Object.extend({init:function(){arguments.callee.base.apply(this,arguments);
var a=this.get("cursorStyle")||SC.DEFAULT_CURSOR,c=this.constructor.sharedStyleSheet(),b=SC.guidFor(this);
if(c.insertRule){c.insertRule("."+b+" {cursor: "+a+";}",c.cssRules?c.cssRules.length:0)
}else{if(c.addRule){c.addRule("."+b,"cursor: "+a)}}this.cursorStyle=a;this.className=b;
return this},className:null,cursorStyle:SC.DEFAULT_CURSOR,cursorStyleDidChange:function(){var d,f,c,e,g,b,a;
d=this.get("cursorStyle")||SC.DEFAULT_CURSOR;f=this._rule;if(f){f.style.cursor=d;
return}c="."+this.get("className");e=this.constructor.sharedStyleSheet();g=(e.cssRules?e.cssRules:e.rules)||[];
for(b=0,a=g.length;b<a;++b){f=g[b];if(f.selectorText===c){this._rule=f;f.style.cursor=d;
break}}}.observes("cursorStyle")});SC.Cursor.sharedStyleSheet=function(){var b,a=this._styleSheet;
if(!a){a=document.createElement("style");a.type="text/css";b=document.getElementsByTagName("head")[0];
if(!b){b=document.documentElement}b.appendChild(a);a=document.styleSheets[document.styleSheets.length-1];
this._styleSheet=a}return a};SC.Responder=SC.Object.extend({isResponder:YES,pane:null,responderContext:null,nextResponder:null,isFirstResponder:NO,hasFirstResponder:NO,acceptsFirstResponder:YES,becomingFirstResponder:NO,becomeFirstResponder:function(){var a=this.get("pane")||this.get("responderContext")||this.pane();
if(a&&this.get("acceptsFirstResponder")){if(a.get("firstResponder")!==this){a.makeFirstResponder(this)
}}return this},resignFirstResponder:function(a){var b=this.get("pane")||this.get("responderContext");
if(b&&(b.get("firstResponder")===this)){b.makeFirstResponder(null,a)}return YES},willLoseFirstResponder:function(a){},didBecomeFirstResponder:function(a){}});
SC.Theme=SC.Object.extend({concatenatedProperties:"classNames".w(),isTheme:YES,classNames:[],find:function(a){var c=this.themeClass,b=null;
while(c&&!b){b=c.find(a);c=c.baseTheme}return b}});SC.mixin(SC.Theme,{extend:function(){var a=SC.Object.extend.apply(this,arguments);
a.themes={};a.baseTheme=this;a.prototype.themeClass=a;a.renderers=a.prototype;return a
},subtheme:function(a,c){var b=this.extend({classNames:SC.$A(c)});this.register(a,b);
return b},themes:{},find:function(a){var b=this.themes[a];if(SC.none(b)){return null
}return b},register:function(b,c){var a=c.create();this.themes[b]=a;return a}});SC.BaseTheme=SC.Theme.extend({classNames:[]});
SC.Theme.register("sc-base",SC.BaseTheme);sc_require("system/browser");sc_require("system/event");
sc_require("system/cursor");sc_require("system/responder");sc_require("system/theme");
sc_require("mixins/string");SC.viewKey=SC.guidKey+"_view";SC.LAYOUT_HORIZONTAL="sc-layout-horizontal";
SC.LAYOUT_VERTICAL="sc-layout-vertical";SC._VIEW_DEFAULT_DIMS="marginTop marginLeft".w();
SC.ANCHOR_TOP={top:0};SC.ANCHOR_LEFT={left:0};SC.ANCHOR_TOP_LEFT={top:0,left:0};SC.ANCHOR_BOTTOM={bottom:0};
SC.ANCHOR_RIGHT={right:0};SC.ANCHOR_BOTTOM_RIGHT={bottom:0,right:0};SC.FULL_WIDTH={left:0,right:0};
SC.FULL_HEIGHT={top:0,bottom:0};SC.ANCHOR_CENTER={centerX:0,centerY:0};SC.LAYOUT_AUTO="auto";
SC.CONTEXT_MENU_ENABLED=NO;SC.TABBING_ONLY_INSIDE_DOCUMENT=YES;SC.FROM_THEME="__FROM_THEME__";
SC.EMPTY_CHILD_VIEWS_ARRAY=[];SC.EMPTY_CHILD_VIEWS_ARRAY.needsClone=YES;SC.View=SC.Responder.extend(SC.DelegateSupport,{concatenatedProperties:"outlets displayProperties layoutProperties classNames renderMixin didCreateLayerMixin willDestroyLayerMixin createRendererMixin updateRendererMixin".w(),pane:function(){var a=this;
while(a&&!a.isPane){a=a.get("parentView")}return a}.property("parentView").cacheable(),page:null,splitView:function(){var a=this;
while(a&&!a.isSplitView){a=a.get("parentView")}return a}.property("parentView").cacheable(),parentView:null,backgroundColor:null,useStaticLayout:NO,_baseThemeName:false,baseTheme:null,_baseThemeProperty:function(a,c){if(SC.typeOf(c)===SC.T_STRING){this.set("_baseThemeName",c)
}if(this.get("_baseThemeName")){var d=SC.Theme.find(this.get("_baseThemeName"));if(d){return d
}}var b=this.get("parentView");if(b){return b.get("theme")}return SC.Theme.find("sc-base")
}.property().cacheable(),_last_theme:null,_themeName:false,_baseThemeDidChange:function(){this.notifyPropertyChange("theme")
}.observes("baseTheme"),_themeProperty:function(a,c){if(SC.typeOf(c)===SC.T_STRING){this.set("_themeName",c)
}var b=this.get("baseTheme");if(this.get("_themeName")){var d;if(b){d=b.find(this.get("_themeName"));
if(d){return d}}d=SC.Theme.find(this.get("_themeName"));if(d){return d}}return b}.property().cacheable(),_notifyThemeDidChange:function(){var b,a,c=this.get("childViews");
b=c.length;for(a=0;a<b;a++){c[a].notifyPropertyChange("baseTheme");c[a].notifyPropertyChange("theme")
}},theme:null,_themeDidChange:function(){var a=this.get("theme");if(a===this._last_theme){return
}this._last_theme=a;if(this.get("layer")){this.replaceLayer()}if(this._hasCreatedChildViews){this._notifyThemeDidChange()
}this._generateRenderer()}.observes("theme"),themed:function(a){var b=this.get(a);
if(b===SC.FROM_THEME){if(this.renderer){return this.renderer[a]}else{return this.get(a+"Default")
}}return b},_generateRenderer:function(){var d=this.get("theme");this._destroyRenderer();
if(d&&d.isTheme){this._viewRenderer=d.view();if(this.createRenderer){this.renderer=this.createRenderer(d);
if(this.renderer){var c,b,a;this.renderer.contentProvider=this;if(c=this.createRendererMixin){a=c.length;
for(b=0;b<a;b++){c[b].call(this,d)}}}}}this._updateViewRenderer();this._updateRenderer()
},_updateRenderer:function(){var c,b,a;if(this.renderer){this.updateRenderer(this.renderer);
if(c=this.updateRendererMixin){a=c.length;for(b=0;b<a;b++){c[b].call(this,this.renderer)
}}}},_destroyRenderer:function(){if(!this.renderer){return}this.renderer.destroy();
this.renderer=null},isEnabled:YES,isEnabledBindingDefault:SC.Binding.oneWay().bool(),isEnabledInPane:function(){var a=this.get("isEnabled"),b;
if(a&&(b=this.get("parentView"))){a=b.get("isEnabledInPane")}return a}.property("parentView","isEnabled"),_sc_view_isEnabledDidChange:function(){if(!this.get("isEnabled")&&this.get("isFirstResponder")){this.resignFirstResponder()
}}.observes("isEnabled"),acceptsMultitouch:NO,hasTouch:NO,routeTouch:YES,isVisible:YES,isVisibleBindingDefault:SC.Binding.bool(),isVisibleInWindow:NO,isContextMenuEnabled:function(){return SC.CONTEXT_MENU_ENABLED
}.property(),recomputeIsVisibleInWindow:function(c){var e=this.get("isVisibleInWindow"),g=this.get("isVisible"),d;
if(g){if(c===undefined){d=this.get("parentView");c=d?d.get("isVisibleInWindow"):NO
}g=g&&c}this.set("isVisibleInWindow",g);var f=this.get("childViews"),b=f.length,a;
for(a=0;a<b;a++){f[a].recomputeIsVisibleInWindow(g)}if(g){this.displayDidChange();
if(this.get("childViewsNeedLayout")){this.invokeOnce(this.layoutChildViewsIfNeeded)
}}else{this._forceLayerUpdateDueToVisibilityChange=YES;this.displayDidChange();if(this.get("isFirstResponder")){this.resignFirstResponder()
}}return this},_sc_isVisibleDidChange:function(){this.recomputeIsVisibleInWindow()
}.observes("isVisible"),childViews:SC.EMPTY_CHILD_VIEWS_ARRAY,insertBefore:function(b,d){b.beginPropertyChanges();
if(b.get("parentView")){b.removeFromParent()}if(this.willAddChild){this.willAddChild(b,d)
}if(b.willAddToParent){b.willAddToParent(this,d)}b.set("parentView",this);var a,c=this.get("childViews");
if(c.needsClone){this.set(c=[])}a=(d)?c.indexOf(d):c.length;if(a<0){a=c.length}c.insertAt(a,b);
b.parentViewDidChange();b.layoutDidChange();var e=b.get("pane");if(e&&e.get("isPaneAttached")){b._notifyDidAppendToDocument()
}if(this.didAddChild){this.didAddChild(b,d)}if(b.didAddToParent){b.didAddToParent(this,d)
}b.endPropertyChanges();return this},removeChild:function(b){if(!b){return this}if(b.parentView!==this){throw"%@.removeChild(%@) must belong to parent".fmt(this,b)
}if(b.willRemoveFromParent){b.willRemoveFromParent()}if(this.willRemoveChild){this.willRemoveChild(b)
}b.set("parentView",null);var c=this.get("childViews"),a=c.indexOf(b);if(a>=0){c.removeAt(a)
}b.parentViewDidChange();if(this.didRemoveChild){this.didRemoveChild(b)}if(b.didRemoveFromParent){b.didRemoveFromParent(this)
}return this},removeAllChildren:function(){var b=this.get("childViews"),a;while(a=b.objectAt(b.get("length")-1)){this.removeChild(a)
}return this},removeFromParent:function(){var a=this.get("parentView");if(a){a.removeChild(this)
}return this},replaceChild:function(a,b){a.beginPropertyChanges();b.beginPropertyChanges();
this.beginPropertyChanges();this.insertBefore(a,b).removeChild(b);this.endPropertyChanges();
b.endPropertyChanges();a.endPropertyChanges();return this},replaceAllChildren:function(c){var b=c.get("length"),a;
this.beginPropertyChanges();this.destroyLayer().removeAllChildren();for(a=0;a<b;a++){this.appendChild(c.objectAt(a))
}this.replaceLayer();this.endPropertyChanges();return this},appendChild:function(a){return this.insertBefore(a,null)
},parentViewDidChange:function(){this.recomputeIsVisibleInWindow();this.resetBuildState();
this.notifyPropertyChange("baseTheme");this.set("layerLocationNeedsUpdate",YES);this.invokeOnce(this.updateLayerLocationIfNeeded);
this._invalidatePaneCacheForSelfAndAllChildViews();return this},_invalidatePaneCacheForSelfAndAllChildViews:function(){var d,c=this.get("childViews"),b=c.length,a;
this.notifyPropertyChange("pane");for(a=0;a<b;++a){d=c[a];if(d._invalidatePaneCacheForSelfAndAllChildViews){d._invalidatePaneCacheForSelfAndAllChildViews()
}}},layer:function(a,c){if(c!==undefined){this._view_layer=c}else{c=this._view_layer;
if(!c){var b=this.get("parentView");if(b){b=b.get("layer")}if(b){this._view_layer=c=this.findLayerInParentLayer(b)
}b=null}}return c}.property("isVisibleInWindow").cacheable(),$:function(c){var a,b=this.get("layer");
a=!b?SC.$([]):(c===undefined)?SC.$(b):SC.$(c,b);b=null;return a},containerLayer:function(){return this.get("layer")
}.property("layer").cacheable(),layerId:function(){return SC.guidFor(this)}.property().cacheable(),_lastLayerId:null,layerIdDidChange:function(){var a=this.get("layer");
if(a&&this.get("layerId")!==this._lastLayerId){if(this._lastLayerId){delete SC.View.views[this._lastLayerId]
}this._lastLayerId=this.get("layerId");SC.View.views[this.get("layerId")]=this;a.id=this.get("layerId")
}}.observes("layerId"),findLayerInParentLayer:function(d){var a=this.get("layerId"),f,c,b,h,e;
if(d.getElementById){e=d.getElementById(a)}else{e=document.getElementById(a)}if(SC.browser.msie&&e&&e.id!==a){e=null
}if(!e&&d.querySelector){e=d.querySelector("#"+a)}if(!e){e=d.firstChild;var g=[];
g.push(d);while(g.length!==0){f=g[0];g.shift();if(f.id===a){h=true;e=f;break}for(c=0,b=f.childNodes.length;
c<b;c++){g.push(f.childNodes[c])}}if(!h){e=null}}return e},isDescendantOf:function(a){var b=this.get("parentView");
if(this===a){return YES}else{if(b){return b.isDescendantOf(a)}else{return NO}}},displayDidChange:function(){this.set("layerNeedsUpdate",YES);
return this},layerNeedsUpdate:NO,_view_layerNeedsUpdateDidChange:function(){if(this.get("layerNeedsUpdate")){this.invokeOnce(this.updateLayerIfNeeded)
}}.observes("layerNeedsUpdate"),updateLayerIfNeeded:function(){var b=this._forceLayerUpdateDueToVisibilityChange,a=(b||this.get("isVisibleInWindow"))&&this.get("layerNeedsUpdate");
if(a){if(this.get("layer")){this.beginPropertyChanges();this.set("layerNeedsUpdate",NO);
this.updateLayer();this.endPropertyChanges()}}else{this.set("layerNeedsUpdate",NO)
}this._forceLayerUpdateDueToVisibilityChange=NO;return this},updateLayer:function(e){var c,b,a,f=this.renderer,g=this._viewRenderer;
this.updateViewSettings();this._updateViewRenderer();this._updateRenderer();if(!this._useRenderFirst&&this.createRenderer){if(f){f.update()
}if(g){g.update()}}else{var d=e||this.renderContext(this.get("layer"));this.render(d,NO);
if(c=this.renderMixin){a=c.length;for(b=0;b<a;++b){c[b].call(this,d,NO)}}d.update();
if(d._innerHTMLReplaced){var h=this.get("pane");if(h&&h.get("isPaneAttached")){this._notifyDidAppendToDocument()
}}}if(this.useStaticLayout){this.viewDidResize()}if(this.didUpdateLayer){this.didUpdateLayer()
}if(this.designer&&this.designer.viewDidUpdateLayer){this.designer.viewDidUpdateLayer()
}return this},renderContext:function(a){return SC.RenderContext(a)},createLayer:function(){if(this.get("layer")){return this
}var a=this.renderContext(this.get("tagName"));this.renderToContext(a);this.set("layer",a.element());
this._notifyDidCreateLayer();return this},_notifyDidCreateLayer:function(){this.notifyPropertyChange("layer");
this._viewRenderer.attachLayer(this);if(this.renderer){this.renderer.attachLayer(this)
}if(this.didCreateLayer){this.didCreateLayer()}var c=this.didCreateLayerMixin,b,a,d=this.get("childViews");
if(c){b=c.length;for(a=0;a<b;++a){c[a].call(this)}}b=d.length;for(a=0;a<b;++a){if(!d[a]){continue
}d[a]._notifyDidCreateLayer()}},destroyLayer:function(){var a=this.get("layer");if(a){this._notifyWillDestroyLayer();
if(this._viewRenderer){this._viewRenderer.detachLayer()}if(this.renderer){this.renderer.detachLayer()
}if(a.parentNode){a.parentNode.removeChild(a)}a=null}return this},replaceLayer:function(){this.destroyLayer();
this.set("layerLocationNeedsUpdate",YES);this.invokeOnce(this.updateLayerLocationIfNeeded)
},_notifyWillDestroyLayer:function(){if(this.willDestroyLayer){this.willDestroyLayer()
}var c=this.willDestroyLayerMixin,b,a,d=this.get("childViews");if(c){b=c.length;for(a=0;
a<b;++a){c[a].call(this)}}b=d.length;for(a=0;a<b;++a){d[a]._notifyWillDestroyLayer()
}this.set("layer",null)},isLayerProvider:YES,getLayer:function(){return this.get("layer")
},renderToContext:function(d,e){var c,b,a;this.beginPropertyChanges();this.set("layerNeedsUpdate",NO);
this.renderViewSettings(d);if(this.createRenderer){this._updateRenderer()}if(!this._useRenderFirst&&this.createRenderer){if(this.renderer){this.renderer.render(d)
}}else{if(SC.none(e)){e=YES}this.render(d,e);if(c=this.renderMixin){a=c.length;for(b=0;
b<a;++b){c[b].call(this,d,e)}}}this.endPropertyChanges()},_updateViewRenderer:function(){if(!this._viewRenderer){return
}var a=this.get("classNames");if(this.get("theme")){a=a.concat(this.get("theme").classNames)
}this._viewRenderer.attr({layerId:this.layerId?this.get("layerId"):SC.guidFor(this),classNames:a,backgroundColor:this.get("backgroundColor"),cursor:this.get("cursor"),layoutStyle:this.get("layoutStyle"),isTextSelectable:this.get("isTextSelectable"),isEnabled:this.get("isEnabled"),isVisible:this.get("isVisible"),isFirstResponder:this.get("isFirstResponder"),hasStaticLayout:this.get("hasStaticLayout")&&this.get("useStaticLayout")})
},renderViewSettings:function(a){this._updateViewRenderer();this.renderLayout(a,YES);
this._viewRenderer.render(a)},updateViewSettings:function(){this._updateViewRenderer();
this._viewRenderer.update()},prepareContext:function(a,b){if(SC.none(b)){b=YES}if(b){this.renderToContext(a)
}else{this.updateLayer(a)}},renderChildViews:function(a,b){if(b||a){this.renderContent(a,b)
}else{this.updateContent(a)}return a},renderContent:function(e,f){var d=this.get("childViews"),b=d.length,a,c;
for(a=0;a<b;++a){c=d[a];if(!c){continue}e=e.begin(c.get("tagName"));c.renderToContext(e,f);
e=e.end()}},updateContent:function(e){var d=this.get("childViews"),b=d.length,a,c;
for(a=0;a<b;++a){c=d[a];if(!c){continue}c.updateLayer(e)}},render:function(a,c){var b=this.renderer;
if(this.createRenderer&&b){if(c){b.render(a)}else{b.update()}}else{if(c){this.renderChildViews(a,c)
}}},_notifyDidAppendToDocument:function(){if(this.didAppendToDocument){this.didAppendToDocument()
}var c=0,d,a,b=this.get("childViews");for(c=0,a=b.length;c<a;c++){d=b[c];if(d._notifyDidAppendToDocument){d._notifyDidAppendToDocument()
}}},tagName:"div",classNames:["sc-view"],toolTip:null,isTextSelectable:NO,displayProperties:["isFirstResponder","isVisible"],cursor:null,shouldInheritCursor:YES,layerLocationNeedsUpdate:NO,updateLayerLocationIfNeeded:function(a){if(this.get("layerLocationNeedsUpdate")){this.set("layerLocationNeedsUpdate",NO);
this.updateLayerLocation()}return this},updateLayerLocation:function(){var e=this.get("layer"),d=this.get("parentView"),b=d?d.get("containerLayer"):null;
if(e&&e.parentNode&&e.parentNode!==b){e.parentNode.removeChild(e)}if(!d){if(e&&e.parentNode){e.parentNode.removeChild(e)
}}else{if(!b){if(e){if(e.parentNode){e.parentNode.removeChild(e)}this.destroyLayer()
}}else{if(!e){this.createLayer();e=this.get("layer");if(!e){return}}var f=d.get("childViews"),c=f.objectAt(f.indexOf(this)+1),a=(c)?c.get("layer"):null;
if(c&&(!a||a.parentNode!==b)){c.updateLayerLocationIfNeeded();a=c.get("layer")}if((e.parentNode!==b)||(e.nextSibling!==a)){b.insertBefore(e,a)
}}}b=d=e=a=null;return this},nextResponder:function(){return this.get("parentView")
}.property("parentView").cacheable(),acceptsFirstResponder:NO,isKeyResponder:NO,willLoseKeyResponderTo:function(a){},willBecomeKeyResponderFrom:function(a){},didLoseKeyResponderTo:function(a){},didBecomeKeyResponderFrom:function(a){},interpretKeyEvents:function(b){var a=b.commandCodes(),d=a[0],e=a[1],g;
if(!d&&!e){return null}if(d){var h=SC.MODIFIED_KEY_BINDINGS[d]||SC.BASE_KEY_BINDINGS[d.match(/[^_]+$/)[0]];
if(h){var f=this,c=this.get("pane"),j=null;while(f&&!(j=f.tryToPerform(h,b))){f=(f===c)?null:f.get("nextResponder")
}return j}}if(e&&this.respondsTo("insertText")){g=this.insertText(e,b);return g?(g===YES?this:g):null
}return null},insertText:function(a){return NO},performKeyEquivalent:function(e,c){var d=NO,f=this.get("childViews"),b=f.length,a=-1;
while(!d&&(++a<b)){d=f[a].performKeyEquivalent(e,c)}return d},nextKeyView:null,nextValidKeyView:function(){var a=[],c=this.pane(),b=this.get("nextKeyView");
if(!b){b=c._computeNextValidKeyView(this,a)}if(SC.TABBING_ONLY_INSIDE_DOCUMENT&&!b){b=c._computeNextValidKeyView(c,a)
}return b}.property("nextKeyView"),_computeNextValidKeyView:function(g,b){var c=this.get("nextKeyView"),e,d,a,f;
if(this!==g&&b.indexOf(g)!=-1&&this.get("acceptsFirstResponder")&&this.get("isVisibleInWindow")){return this
}b.push(this);if(!c){e=this.get("childViews");for(d=0,a=e.length;d<a;d++){f=e[d];
if(f.get("isVisibleInWindow")&&f.get("isVisible")){c=f._computeNextValidKeyView(g,b)
}if(c){return c}}c=null}return c},previousKeyView:null,previousValidKeyView:function(){var a=[],c=this.pane(),b=this.get("previousKeyView");
if(!b){b=c._computePreviousValidKeyView(this,a)}return b}.property("previousKeyView"),_computePreviousValidKeyView:function(f,a){var b=this.get("previousKeyView"),d,c,e;
if(this!==f&&a.indexOf(f)!=-1&&this.get("acceptsFirstResponder")&&this.get("isVisibleInWindow")){return this
}a.push(this);if(!b){d=this.get("childViews");for(c=d.length-1;0<=c;c--){e=d[c];if(e.get("isVisibleInWindow")&&e.get("isVisible")){b=e._computePreviousValidKeyView(f,a)
}if(b){return b}}b=null}return b},init:function(){var o,p,l,n,f,e,a;arguments.callee.base.apply(this,arguments);
var g=this.baseTheme;this.baseTheme=this._baseThemeProperty;this.set("baseTheme",g);
var b=this.theme;this.theme=this._themeProperty;this.set("theme",b);var m=-1,d=-1,k=0,h=this.constructor;
while(h&&h.prototype.render){if(m<0&&h.prototype.render!==this.render){m=k}if(d<0&&h.prototype.createRenderer!==this.createRenderer){d=k
}if(d>=0&&m>=0){break}k=k+1;h=h.superclass}if(m<d&&m>=0){this._useRenderFirst=YES
}else{this._useRenderFirst=NO}if(!this.get("isMaterialized")){SC.View.views[this.get("layerId")]=this
}var j=this.get("childViews");this.childViews=j?j.slice():[];this.createChildViews();
this._hasCreatedChildViews=YES;a=this.get("displayProperties");n=a.length;while(--n>=0){this.addObserver(a[n],this,this.displayDidChange)
}if(this.get("isDropTarget")){SC.Drag.addDropTarget(this)}if(this.get("isScrollable")){SC.Drag.addScrollableView(this)
}},awake:function(){arguments.callee.base.apply(this,arguments);var c=this.get("childViews"),b=c.length,a;
for(a=0;a<b;++a){if(!c[a]){continue}c[a].awake()}},destroy:function(){if(this.get("isDestroyed")){return this
}this._destroy();this.removeFromParent();if(this.get("isDropTarget")){SC.Drag.removeDropTarget(this)
}if(this.get("isScrollable")){SC.Drag.removeScrollableView(this)}arguments.callee.base.apply(this,arguments);
return this},_destroy:function(){if(this.get("isDestroyed")){return this}this.destroyLayer();
var c=this.get("childViews"),b=c.length,a;if(b){c=c.slice();for(a=0;a<b;++a){c[a].destroy()
}}delete SC.View.views[this.get("layerId")];delete this._CQ;delete this.page;return this
},createChildViews:function(){var f=this.get("childViews"),b=f.length,a,e,d,c;this.beginPropertyChanges();
for(a=0;a<b;++a){if(e=(c=f[a])){if(typeof e===SC.T_STRING){c=this[e]}else{e=null}if(!c){console.error("No view with name "+e+" has been found in "+this.toString());
continue}if(c.isClass){c=this.createChildView(c);if(e){this[e]=c}}}f[a]=c}this.endPropertyChanges();
return this},createChildView:function(a,b){if(!b){b={}}b.owner=b.parentView=this;
b.isVisibleInWindow=this.get("isVisibleInWindow");if(!b.page){b.page=this.page}a=a.create(b);
return a},propertyDidChange:function(a,c,b){if(a==="layout"){this.layoutDidChange()
}arguments.callee.base.apply(this,arguments)},adjust:function(a,d){var b=SC.clone(this.get("layout")),c=NO,f;
if(a===undefined){return this}if(SC.typeOf(a)===SC.T_STRING){f=b[a];if(SC.none(d)){if(f!==undefined){c=YES
}delete b[a]}else{if(f!==d){c=YES}b[a]=d}}else{var e=a;for(a in e){if(!e.hasOwnProperty(a)){continue
}d=e[a];f=b[a];if(d===null){if(f!==undefined){c=YES}delete b[a]}else{if(d!==undefined){if(f!==d){c=YES
}b[a]=d}}}}if(c){this.set("layout",b)}return this},layout:{top:0,left:0,bottom:0,right:0},convertFrameToView:function(j,d){var c=0,b=0,g=0,e=0,a=this,h;
while(a){h=a.get("frame");c+=h.x;b+=h.y;a=a.get("layoutView")}if(d){a=d;while(a){h=a.get("frame");
g+=h.x;e+=h.y;a=a.get("layoutView")}}c=j.x+c-g;b=j.y+b-e;return{x:c,y:b,width:j.width,height:j.height}
},convertFrameFromView:function(j,d){var c=0,b=0,g=0,e=0,a=this,h;while(a&&(h=a.get("frame"))){c+=h.x;
b+=h.y;a=a.get("parentView")}if(d){a=d;while(a){h=a.get("frame");g+=h.x;e+=h.y;a=a.get("parentView")
}}c=j.x-c+g;b=j.y-b+e;return{x:c,y:b,width:j.width,height:j.height}},scrollToVisible:function(){var a=this.get("parentView");
while(a&&!a.get("isScrollable")){a=a.get("parentView")}if(a){a.scrollToVisible();
return a.scrollToVisible(this)}else{return NO}},frame:function(){return this.computeFrameWithParentFrame(null)
}.property("useStaticLayout").cacheable(),computeFrameWithParentFrame:function(h){var s=this.get("layout"),r={},p,v,o=SC.LAYOUT_AUTO,q=this.get("useStaticLayout"),n=this.get("parentView"),j,d,m,b,a=s.right,c=s.left,u=s.top,g=s.bottom,t=s.width,e=s.height,l=s.centerX,k=s.centerY;
if(t!==undefined&&t===SC.LAYOUT_AUTO&&q!==undefined&&!q){p=SC.Error.desc(("%@.layout() cannot use width:auto if staticLayout is disabled").fmt(this),"%@".fmt(this),-1);
console.error(p.toString());throw p}if(e!==undefined&&e===SC.LAYOUT_AUTO&&q!==undefined&&!q){p=SC.Error.desc(("%@.layout() cannot use height:auto if staticLayout is disabled").fmt(this),"%@".fmt(this),-1);
console.error(p.toString());throw p}if(q){if(v=this.get("layer")){r=SC.viewportOffset(v);
if(n){r=n.convertFrameFromView(r,null)}r.width=v.offsetWidth;r.height=v.offsetHeight;
return r}return null}if(!h){h=this.computeParentDimensions(s)}j=h.height;d=h.width;
if(!SC.none(c)){if(SC.isPercentage(c)){r.x=d*c}else{r.x=c}if(t!==undefined){if(t===o){r.width=o
}else{if(SC.isPercentage(t)){r.width=d*t}else{r.width=t}}}else{r.width=d-r.x;if(a&&SC.isPercentage(a)){r.width=r.width-(a*d)
}else{r.width=r.width-(a||0)}}}else{if(!SC.none(a)){if(SC.none(t)){if(SC.isPercentage(c)){r.width=d-(d*a)
}else{r.width=d-a}r.x=0}else{if(t===o){r.width=o}else{if(SC.isPercentage(t)){r.width=d*t
}else{r.width=(t||0)}}if(SC.isPercentage(t)){r.x=d-(a*d)-r.width}else{r.x=d-a-r.width
}}}else{if(!SC.none(l)){if(t===o){r.width=o}else{if(SC.isPercentage(t)){r.width=t*d
}else{r.width=(t||0)}}if(SC.isPercentage(l)){r.x=(d-r.width)/2+(l*d)}else{r.x=(d-r.width)/2+l
}}else{r.x=0;if(SC.none(t)){r.width=d}else{if(t===o){r.width=o}if(SC.isPercentage(t)){r.width=t*d
}else{r.width=(t||0)}}}}}if(!SC.none(u)){if(SC.isPercentage(u)){r.y=u*j}else{r.y=u
}if(e!==undefined){if(e===o){r.height=o}else{if(SC.isPercentage(e)){r.height=e*j}else{r.height=e
}}}else{if(g&&SC.isPercentage(g)){r.height=j-r.y-(g*j)}else{r.height=j-r.y-(g||0)
}}}else{if(!SC.none(g)){if(SC.none(e)){if(SC.isPercentage(g)){r.height=j-(g*j)}else{r.height=j-g
}r.y=0}else{if(e===o){r.height=o}if(e&&SC.isPercentage(e)){r.height=e*j}else{r.height=(e||0)
}if(SC.isPercentage(g)){r.y=j-(g*j)-r.height}else{r.y=j-g-r.height}}}else{if(!SC.none(k)){if(e===o){r.height=o
}if(e&&SC.isPercentage(e)){r.height=e*j}else{r.height=(e||0)}if(SC.isPercentage(k)){r.y=(j-r.height)/2+(k*j)
}else{r.y=(j-r.height)/2+k}}else{r.y=0;if(SC.none(e)){r.height=j}else{if(e===o){r.height=o
}if(SC.isPercentage(e)){r.height=e*j}else{r.height=e||0}}}}}r.x=Math.floor(r.x);r.y=Math.floor(r.y);
if(r.height!==o){r.height=Math.floor(r.height)}if(r.width!==o){r.width=Math.floor(r.width)
}if(r.height===o||r.width===o){v=this.get("layer");if(r.height===o){r.height=v?v.clientHeight:0
}if(r.width===o){r.width=v?v.clientWidth:0}}if(this.get("hasBorder")){m=this.get("borderTop");
b=this.get("borderLeft");r.height-=m+this.get("borderBottom");r.y+=m;r.width-=b+this.get("borderRight");
r.x+=b}if(n&&n.isScrollContainer){n=n.get("parentView");r.x-=n.get("horizontalScrollOffset");
r.y-=n.get("verticalScrollOffset")}if(!SC.none(s.maxHeight)&&(r.height>s.maxHeight)){r.height=s.maxHeight
}if(!SC.none(s.minHeight)&&(r.height<s.minHeight)){r.height=s.minHeight}if(!SC.none(s.maxWidth)&&(r.width>s.maxWidth)){r.width=s.maxWidth
}if(!SC.none(s.minWidth)&&(r.width<s.minWidth)){r.width=s.minWidth}if(r.height<0){r.height=0
}if(r.width<0){r.width=0}return r},computeParentDimensions:function(e){var b,c=this.get("parentView"),a=(c)?c.get("frame"):null;
if(a){b={width:a.width,height:a.height}}else{var d=e;b={width:(d.left||0)+(d.width||0)+(d.right||0),height:(d.top||0)+(d.height||0)+(d.bottom||0)}
}return b},clippingFrame:function(){var d=this.get("frame"),a=d,b,c;if(!d){return null
}b=this.get("parentView");if(b){c=b.get("contentClippingFrame");if(!c){return d}a=SC.intersectRects(c,d)
}a.x-=d.x;a.y-=d.y;return a}.property("parentView","frame").cacheable(),contentClippingFrame:function(){return this.get("clippingFrame")
}.property("clippingFrame").cacheable(),_sc_view_clippingFrameDidChange:function(){var d=this.get("childViews"),b=d.length,a,c;
for(a=0;a<b;++a){c=d[a];if(!c.hasStaticLayout){c.notifyPropertyChange("clippingFrame");
c._sc_view_clippingFrameDidChange()}}},parentViewDidResize:function(){var b=this.get("layout"),a,d,c;
c=((b.left!==undefined)&&(b.top!==undefined)&&(b.width!==undefined)&&(b.height!==undefined));
a=SC.isPercentage;d=(a(b.left)||a(b.top)||a(b.width)||a(b.right)||a(b.centerX)||a(b.centerY));
if(!c||d){this.viewDidResize()}},viewDidResize:function(){this._viewFrameDidChange();
var d=this.childViews,b=d.length,a,c;for(a=0;a<b;++a){c=d[a];c.parentViewDidResize()
}},_viewFrameDidChange:function(){this.notifyPropertyChange("frame");this._sc_view_clippingFrameDidChange()
},beginLiveResize:function(){if(this.willBeginLiveResize){this.willBeginLiveResize()
}var d=this.get("childViews"),b=d.length,a,c;for(a=0;a<b;++a){c=d[a];if(c.beginLiveResize){c.beginLiveResize()
}}return this},endLiveResize:function(){var d=this.get("childViews"),b=d.length,a,c;
for(a=b-1;a>=0;--a){c=d[a];if(c.endLiveResize){c.endLiveResize()}}if(this.didEndLiveResize){this.didEndLiveResize()
}return this},wantsAcceleratedLayer:NO,hasAcceleratedLayer:function(){return this.get("wantsAcceleratedLayer")&&SC.platform.supportsCSSTransforms
}.property("wantsAcceleratedLayer").cacheable(),layoutStyle:function(){var y=this.get("layout"),C={},l=null,u,q=SC.LAYOUT_AUTO,s=SC._VIEW_DEFAULT_DIMS,k=s.length,m,t,D,v=this.get("useStaticLayout"),a=y.right,f=y.left,B=y.top,h=y.bottom,z=y.width,g=y.height,d=y.maxWidth,j=y.maxHeight,p=y.centerX,o=y.centerY,e=this.get("hasAcceleratedLayer"),c=0,w=0;
if(z!==undefined&&z===SC.LAYOUT_AUTO&&!v){u=SC.Error.desc("%@.layout() you cannot use width:auto if ".fmt(this)+"staticLayout is disabled","%@".fmt(this),-1);
console.error(u.toString());throw u}if(g!==undefined&&g===SC.LAYOUT_AUTO&&!v){u=SC.Error.desc("%@.layout() you cannot use height:auto if ".fmt(this)+"staticLayout is disabled","%@".fmt(this),-1);
console.error(u.toString());throw u}if(!SC.none(f)){if(SC.isPercentage(f)){C.left=(f*100)+"%"
}else{if(e&&!SC.empty(z)){w=Math.floor(f);C.left=0}else{C.left=Math.floor(f)}}C.marginLeft=0;
if(z!==undefined){if(z===SC.LAYOUT_AUTO){C.width=SC.LAYOUT_AUTO}else{if(SC.isPercentage(z)){C.width=(z*100)+"%"
}else{C.width=Math.floor(z)}}C.right=null}else{C.width=null;if(a&&SC.isPercentage(a)){C.right=(a*100)+"%"
}else{C.right=Math.floor(a||0)}}}else{if(!SC.none(a)){if(SC.isPercentage(a)){C.right=Math.floor(a*100)+"%"
}else{C.right=Math.floor(a)}C.marginLeft=0;if(SC.none(z)){if(SC.none(d)){C.left=0
}C.width=null}else{C.left=null;if(z===SC.LAYOUT_AUTO){C.width=SC.LAYOUT_AUTO}else{if(z&&SC.isPercentage(z)){C.width=(z*100)+"%"
}else{C.width=Math.floor(z||0)}}}}else{if(!SC.none(p)){C.left="50%";if(z&&SC.isPercentage(z)){C.width=(z*100)+"%"
}else{C.width=Math.floor(z||0)}if(z&&SC.isPercentage(z)&&(SC.isPercentage(p)||SC.isPercentage(p*-1))){C.marginLeft=Math.floor((p-z/2)*100)+"%"
}else{if(z&&z>=1&&!SC.isPercentage(p)){C.marginLeft=Math.floor(p-C.width/2)}else{console.warn("You have to set width and centerX using both percentages or pixels");
C.marginLeft="50%"}}C.right=null}else{if(!SC.none(z)){C.left=0;C.right=null;if(z===SC.LAYOUT_AUTO){C.width=SC.LAYOUT_AUTO
}else{if(SC.isPercentage(z)){C.width=(z*100)+"%"}else{C.width=Math.floor(z)}}C.marginLeft=0
}else{C.left=0;C.right=0;C.width=null;C.marginLeft=0}}}}C.minWidth=(y.minWidth===undefined)?null:y.minWidth;
C.maxWidth=(y.maxWidth===undefined)?null:y.maxWidth;if(!SC.none(B)){if(SC.isPercentage(B)){C.top=(B*100)+"%"
}else{if(e&&!SC.empty(g)){c=Math.floor(B);C.top=0}else{C.top=Math.floor(B)}}if(g!==undefined){if(g===SC.LAYOUT_AUTO){C.height=SC.LAYOUT_AUTO
}else{if(SC.isPercentage(g)){C.height=(g*100)+"%"}else{C.height=Math.floor(g)}}C.bottom=null
}else{C.height=null;if(h&&SC.isPercentage(h)){C.bottom=(h*100)+"%"}else{C.bottom=Math.floor(h||0)
}}C.marginTop=0}else{if(!SC.none(h)){C.marginTop=0;if(SC.isPercentage(h)){C.bottom=(h*100)+"%"
}else{C.bottom=Math.floor(h)}if(SC.none(g)){if(SC.none(j)){C.top=0}C.height=null}else{C.top=null;
if(g===SC.LAYOUT_AUTO){C.height=SC.LAYOUT_AUTO}else{if(g&&SC.isPercentage(g)){C.height=(g*100)+"%"
}else{C.height=Math.floor(g||0)}}}}else{if(!SC.none(o)){C.top="50%";C.bottom=null;
if(g&&SC.isPercentage(g)){C.height=(g*100)+"%"}else{C.height=Math.floor(g||0)}if(g&&SC.isPercentage(g)&&(SC.isPercentage(o)||SC.isPercentage(o*-1))){C.marginTop=Math.floor((o-g/2)*100)+"%"
}else{if(g&&g>=1&&!SC.isPercentage(o)){C.marginTop=Math.floor(o-C.height/2)}else{console.warn("You have to set height and centerY to use both percentages or pixels");
C.marginTop="50%"}}}else{if(!SC.none(g)){C.top=0;C.bottom=null;if(g===SC.LAYOUT_AUTO){C.height=SC.LAYOUT_AUTO
}else{if(g&&SC.isPercentage(g)){C.height=(g*100)+"%"}else{C.height=Math.floor(g||0)
}}C.marginTop=0}else{C.top=0;C.bottom=0;C.height=null;C.marginTop=0}}}}C.minHeight=(y.minHeight===undefined)?null:y.minHeight;
C.maxHeight=(y.maxHeight===undefined)?null:y.maxHeight;C.zIndex=SC.none(y.zIndex)?null:y.zIndex.toString();
C.backgroundPosition=SC.none(y.backgroundPosition)?null:y.backgroundPosition.toString();
while(--k>=0){m=s[k];if(C[m]===0){C[m]=null}}if(e){var r=SC.platform.domCSSPrefix+"Transform",A=this.get("layer"),b=A?A.style[r]:"";
if(this._lastAcceleratedTransform){b=b.replace(this._lastAcceleratedTransform,"")
}var n="translateX("+w+"px) translateY("+c+"px)";if(SC.platform.supportsCSS3DTransforms&&!b.match("translateZ")){n+=" translateZ(0px)"
}if(!SC.empty(b)){n=" "+n}this._lastAcceleratedTransform=n;C[r]=b+n}for(D in C){t=C[D];
if(typeof t===SC.T_NUMBER){C[D]=(t+"px")}}return C}.property().cacheable(),layoutView:function(){return this.get("parentView")
}.property("parentView").cacheable(),layoutDidChange:function(){var c=this._previousLayout,e=this.get("layout"),a=YES,h,f,d,g;
if(c&&c!==e){h=c.width;if(h!==undefined){d=e.width;if(h===d){f=c.height;if(c!==undefined){g=e.height;
if(f===g){a=NO}}}}}this.beginPropertyChanges();this.notifyPropertyChange("layoutStyle");
if(a){this.viewDidResize()}else{this._viewFrameDidChange()}this.endPropertyChanges();
var b=this.get("layoutView");if(b){b.set("childViewsNeedLayout",YES);b.layoutDidChangeFor(this);
if(b.get("childViewsNeedLayout")){b.invokeOnce(b.layoutChildViewsIfNeeded)}}return this
},childViewsNeedLayout:NO,layoutDidChangeFor:function(b){var a=this._needLayoutViews;
if(!a){a=this._needLayoutViews=SC.CoreSet.create()}a.add(b)},layoutChildViewsIfNeeded:function(a){if(!a){a=this.get("isVisibleInWindow")
}if(a&&this.get("childViewsNeedLayout")){this.set("childViewsNeedLayout",NO);this.layoutChildViews()
}return this},layoutChildViews:function(){var c=this._needLayoutViews,a=c?c.length:0,b;
for(b=0;b<a;++b){c[b].updateLayout()}c.clear()},updateLayout:function(){var b=this.get("layer"),a;
if(b){a=this.renderContext(b);this.renderLayout(a);a.update();if(this.useStaticLayout){this.viewDidResize()
}}b=null;return this},renderLayout:function(a,b){this._viewRenderer.attr({layoutStyle:this.get("layoutStyle")});
this._viewRenderer.render(a)},isView:YES,selectStart:function(a){return this.get("isTextSelectable")
},contextMenu:function(a){if(!this.get("isContextMenuEnabled")){a.stop()}return true
},touchBoundary:{left:50,right:50,top:50,bottom:50},_touchBoundaryFrame:function(){return this.get("parentView").convertFrameToView(this.get("frame"),null)
}.property("frame","parentView").cacheable(),touchIsInBoundary:function(h){var c=this.get("_touchBoundaryFrame"),d=0,b=0,g=this.get("touchBoundary");
var a=h.pageX,e=h.pageY;if(a<c.x){a=c.x-a;d=g.left}else{if(a>c.x+c.width){a=a-(c.x+c.width);
d=g.right}else{a=0;d=1}}if(e<c.y){e=c.y-e;b=g.top}else{if(e>c.y+c.height){e=e-(c.y+c.height);
b=g.bottom}else{e=0;b=1}}if(a>100||e>100){return NO}return YES},buildInChild:function(a){a.willBuildInToView(this);
this.appendChild(a);a.buildInToView(this)},buildOutChild:function(a){a.buildOutFromView(this)
},buildInDidFinishFor:function(a){},buildOutDidFinishFor:function(a){this.removeChild(a)
},isBuildingIn:NO,isBuildingOut:NO,buildIn:function(){this.buildInDidFinish()},buildOut:function(){this.buildOutDidFinish()
},resetBuild:function(){},buildOutDidCancel:function(){},buildInDidCancel:function(){},buildInDidFinish:function(){this.isBuildingIn=NO;
this._buildingInTo.buildInDidFinishFor(this);this._buildingInTo=null},buildOutDidFinish:function(){this.isBuildingOut=NO;
this._buildingOutFrom.buildOutDidFinishFor(this);this._buildingOutFrom=null},resetBuildState:function(){if(this.isBuildingIn){this.buildInDidCancel();
this.isBuildingIn=NO}if(this.isBuildingOut){this.buildOutDidCancel();this.isBuildingOut=NO
}this.buildingInTo=null;this.buildingOutFrom=null;this.resetBuild()},willBuildInToView:function(a){if(this.isBuildingOut){this.buildOutDidCancel()
}},buildInToView:function(a){if(this.isBuildingIn){return}this._buildingInTo=a;this.isBuildingOut=NO;
this.isBuildingIn=YES;this.buildIn()},buildOutFromView:function(a){if(this.isBuildingOut){return
}if(this.isBuildingIn){this.buildInDidCancel()}this.isBuildingOut=YES;this.isBuildingIn=NO;
this._buildingOutFrom=a;this.buildOut()}});SC.View.mixin({isViewClass:YES,design:function(){if(this.isDesign){return this
}var a=this.extend.apply(this,arguments);a.isDesign=YES;if(SC.ViewDesigner){SC.ViewDesigner.didLoadDesign(a,this,SC.A(arguments))
}return a},layout:function(a){this.prototype.layout=a;return this},convertLayoutToAnchoredLayout:function(f,n){var h={top:0,left:0,width:n.width,height:n.height},d=n.width,l=n.height,m=f.right,a=f.left,k=f.top,g=f.bottom,j=f.width,e=f.height,c=f.centerX,b=f.centerY;
if(!SC.none(a)){if(SC.isPercentage(a)){h.left=a*d}else{h.left=a}if(j!==undefined){if(j===SC.LAYOUT_AUTO){h.width=SC.LAYOUT_AUTO
}else{if(SC.isPercentage(j)){h.width=j*d}else{h.width=j}}}else{if(m&&SC.isPercentage(m)){h.width=d-h.left-(m*d)
}else{h.width=d-h.left-(m||0)}}}else{if(!SC.none(m)){if(SC.none(j)){h.left=0;if(m&&SC.isPercentage(m)){h.width=d-(m*d)
}else{h.width=d-(m||0)}}else{if(j===SC.LAYOUT_AUTO){h.width=SC.LAYOUT_AUTO}else{if(SC.isPercentage(j)){h.width=j*d
}else{h.width=j}if(SC.isPercentage(m)){h.left=d-(h.width+m)}else{h.left=d-(h.width+m)
}}}}else{if(!SC.none(c)){if(j&&SC.isPercentage(j)){h.width=(j*d)}else{h.width=(j||0)
}h.left=((d-h.width)/2);if(SC.isPercentage(c)){h.left=h.left+c*d}else{h.left=h.left+c
}}else{if(!SC.none(j)){h.left=0;if(j===SC.LAYOUT_AUTO){h.width=SC.LAYOUT_AUTO}else{if(SC.isPercentage(j)){h.width=j*d
}else{h.width=j}}}else{h.left=0;h.width=0}}}}if(f.minWidth!==undefined){h.minWidth=f.minWidth
}if(f.maxWidth!==undefined){h.maxWidth=f.maxWidth}if(!SC.none(k)){if(SC.isPercentage(k)){h.top=k*l
}else{h.top=k}if(e!==undefined){if(e===SC.LAYOUT_AUTO){h.height=SC.LAYOUT_AUTO}else{if(SC.isPercentage(e)){h.height=e*l
}else{h.height=e}}}else{h.height=l-h.top;if(g&&SC.isPercentage(g)){h.height=h.height-(g*l)
}else{h.height=h.height-(g||0)}}}else{if(!SC.none(g)){if(SC.none(e)){h.top=0;if(g&&SC.isPercentage(g)){h.height=l-(g*l)
}else{h.height=l-(g||0)}}else{if(e===SC.LAYOUT_AUTO){h.height=SC.LAYOUT_AUTO}else{if(SC.isPercentage(e)){h.height=e*l
}else{h.height=e}h.top=l-h.height;if(SC.isPercentage(g)){h.top=h.top-(g*l)}else{h.top=h.top-g
}}}}else{if(!SC.none(b)){if(e&&SC.isPercentage(e)){h.height=(e*l)}else{h.height=(e||0)
}h.top=((l-h.height)/2);if(SC.isPercentage(b)){h.top=h.top+b*l}else{h.top=h.top+b
}}else{if(!SC.none(e)){h.top=0;if(e===SC.LAYOUT_AUTO){h.height=SC.LAYOUT_AUTO}else{if(SC.isPercentage(e)){h.height=e*l
}else{h.height=e}}}else{h.top=0;h.height=0}}}}if(h.top){h.top=Math.floor(h.top)}if(h.bottom){h.bottom=Math.floor(h.bottom)
}if(h.left){h.left=Math.floor(h.left)}if(h.right){h.right=Math.floor(h.right)}if(h.width!==SC.LAYOUT_AUTO){h.width=Math.floor(h.width)
}if(h.height!==SC.LAYOUT_AUTO){h.height=Math.floor(h.height)}if(f.minHeight!==undefined){h.minHeight=f.minHeight
}if(f.maxHeight!==undefined){h.maxHeight=f.maxHeight}return h},convertLayoutToCustomLayout:function(b,a,c){},classNames:function(a){a=(this.prototype.classNames||[]).concat(a);
this.prototype.classNames=a;return this},tagName:function(a){this.prototype.tagName=a;
return this},childView:function(a){var b=this.prototype.childViews||[];if(b===this.superclass.prototype.childViews){b=b.slice()
}b.push(a);this.prototype.childViews=b;return this},bind:function(b,d){var c=this.prototype,a=this.superclass.prototype;
var e=c._bindings;if(!e||e===a._bindings){e=c._bindings=(e||[]).slice()}b=b+"Binding";
c[b]=d;e.push(b);return this},prop:function(a,b){this.prototype[a]=b;return this},localization:function(b,a){if(a){b.rootElement=SC.$(a)[0]
}return b},viewFor:function(d,c){var b=SC.$A(arguments);if(SC.none(d)){b.shift()}else{b[0]={rootElement:SC.$(d)[0]}
}var a=this.create.apply(this,arguments);b=b[0]=null;return a},create:function(){var b=this,a=new b(arguments);
if(SC.ViewDesigner){SC.ViewDesigner.didCreateView(a,SC.$A(arguments))}return a},loc:function(e){var b=e.childViews;
delete e.childViews;this.applyLocalizedAttributes(e);if(SC.ViewDesigner){SC.ViewDesigner.didLoadLocalization(this,SC.$A(arguments))
}var d=this.prototype.childViews,a=d.length,c;while(--a>=0){c=d[a];e=b[a];if(e&&c&&c.loc){c.loc(e)
}}return this},applyLocalizedAttributes:function(a){SC.mixin(this.prototype,a)},views:{}});
SC.outlet=function(b,a){return function(c){return(this[c]=SC.objectForPropertyPath(b,(a!==undefined)?a:this))
}.property()};SC.View.unload=function(){var a=SC.View.views;if(a){for(var b in a){if(!a.hasOwnProperty(b)){continue
}delete a[b]}}};if(SC.browser.msie){SC.Event.add(window,"unload",SC.View,SC.View.unload)
}SC.Validatable={initMixin:function(){this._validatable_validatorDidChange()},validator:null,errorLabel:null,isValid:function(){return SC.typeOf(this.get("value"))!==SC.T_ERROR
}.property("value"),ownerForm:null,performValidate:function(c){var a=SC.VALIDATE_OK;
if(this._validator){var b=this.get("ownerForm");if(c){a=this._validator.validatePartial(b,this);
if((a==SC.VALIDATE_NO_CHANGE)&&(this._validator.validateChange(b,this)==SC.VALIDATE_OK)){a=SC.VALIDATE_OK
}}else{a=this._validator.validateChange(b,this)}}return a},performValidateSubmit:function(){return this._validator?this._validator.validateSubmit(this.get("ownerForm"),this):SC.VALIDATE_OK
},performValidateKeyDown:function(a){var b=a.getCharString();if(!b){return YES}return this._validator?this._validator.validateKeyDown(this.get("ownerForm"),this,b):YES
},validatorObject:function(){return this._validator}.property(),validateSubmit:function(){return this.performValidateSubmit()
},objectForFieldValue:function(b,a){return this._validator?this._validator.objectForFieldValue(b,this.get("ownerForm"),this):b
},fieldValueForObject:function(a){return this._validator?this._validator.fieldValueForObject(a,this.get("ownerForm"),this):a
},_validatable_displayObserver:function(){this.displayDidChange()}.observes("isValid"),renderMixin:function(a){a.setClass("invalid",!this.get("isValid"))
},_validatable_validatorDidChange:function(){var a=this.get("ownerForm");var b=SC.Validator.findFor(a,this,this.get("validator"));
if(b!=this._validator){this.propertyWillChange("validatorObject");if(this._validator){this._validator.detachFrom(a,this)
}this._validator=b;if(this._validator){this._validator.attachTo(a,this)}this.propertyDidChange("validatorObject")
}}.observes("validator","ownerForm")};sc_require("views/view");sc_require("mixins/control");
sc_require("mixins/validatable");SC.FieldView=SC.View.extend(SC.Control,SC.Validatable,{isTextArea:NO,_field_isMouseDown:NO,fieldValue:function(){var a=this.get("value");
if(SC.typeOf(a)===SC.T_ERROR){a=a.get("errorValue")}return this.fieldValueForObject(a)
}.property("value","validator").cacheable(),$input:function(){if(this.get("isTextArea")){return this.$("textarea").andSelf().filter("textarea")
}else{return this.$("input").andSelf().filter("input")}},setFieldValue:function(b){if(SC.none(b)){b=""
}var a=this.$input();if(a.val()!==b){a.val(b)}return this},getFieldValue:function(){return this.$input().val()
},_field_fieldValueDidChange:function(a){SC.RunLoop.begin();this.fieldValueDidChange(NO);
SC.RunLoop.end()},fieldValueDidChange:function(a){var c=this.getFieldValue();var b=this.objectForFieldValue(c,a);
this.setIfChanged("value",b)},_field_valueDidChange:function(){this.setFieldValue(this.get("fieldValue"))
}.observes("fieldValue"),didCreateLayer:function(){this.setFieldValue(this.get("fieldValue"));
SC.Event.add(this.$input(),"change",this,this._field_fieldValueDidChange)},didAppendToDocument:function(){if(this.get("isTextArea")){this.setFieldValue(this.get("fieldValue"));
SC.Event.add(this.$input(),"change",this,this._field_fieldValueDidChange)}},willDestroyLayer:function(){SC.Event.remove(this.$input(),"change",this,this._field_fieldValueDidChange)
},mouseDown:function(a){this._field_isMouseDown=YES;a.allowDefault();return YES},mouseOut:function(a){if(this._field_isMouseDown){this.set("isActive",NO)
}a.allowDefault();return YES},mouseOver:function(a){this.set("isActive",this._field_isMouseDown);
a.allowDefault();return YES},mouseUp:function(a){if(this._field_isMouseDown){this.set("isActive",NO)
}this._field_isMouseDown=NO;a.allowDefault();return YES},keyDown:function(b){if(b.which===9){var a=b.shiftKey?this.get("previousValidKeyView"):this.get("nextValidKeyView");
if(a){a.becomeFirstResponder()}else{b.allowDefault()}return YES}if(this.performValidateKeyDown(b)){this._isKeyDown=YES;
b.allowDefault()}else{b.stop()}return YES},acceptsFirstResponder:function(){if(!SC.SAFARI_FOCUS_BEHAVIOR){return this.get("isEnabled")
}else{return NO}}.property("isEnabled"),willBecomeKeyResponderFrom:function(a){if(!this._isFocused){this._isFocused=YES;
this.becomeFirstResponder();if(this.get("isVisibleInWindow")){this.$input()[0].focus()
}}},willLoseKeyResponderTo:function(a){if(this._isFocused){this._isFocused=NO}},_field_setFieldValue:function(b){this.propertyWillChange("fieldValue");
if(this.fieldValueForObject){b=this.fieldValueForObject(b)}var a=this.setFieldValue(b);
this.propertyDidChange("fieldValue");return a},_field_getFieldValue:function(){var a=this.getFieldValue();
if(this.objectForFieldValue){a=this.objectForFieldValue(a)}return a}});SC.TextSelection=SC.Object.extend(SC.Copyable,SC.Freezable,{start:-1,end:-1,length:function(){var b=this.get("start");
var a=this.get("end");if((b)===-1||(a===-1)){return -1}else{return a-b}}.property("start","end").cacheable(),init:function(){arguments.callee.base.apply(this,arguments);
this.freeze()},copy:function(){return SC.TextSelection.create({start:this.get("start"),end:this.get("end")})
},toString:function(){var a=this.get("length");if(a&&a>0){if(a===1){return"[%@ character selected: {%@, %@}]".fmt(a,this.get("start"),this.get("end"))
}else{return"[%@ characters selected: {%@, %@}]".fmt(a,this.get("start"),this.get("end"))
}}else{return"[no text selected; caret at %@]".fmt(this.get("start"))}}});SC.StaticLayout={hasStaticLayout:YES};
sc_require("views/field");sc_require("system/text_selection");sc_require("mixins/static_layout");
SC.TextFieldView=SC.FieldView.extend(SC.StaticLayout,SC.Editable,{tagName:"label",classNames:["sc-text-field-view"],applyImmediately:YES,isPassword:NO,isTextArea:NO,hint:"",isEditing:NO,hintON:YES,defaultTabbingEnabled:YES,isContextMenuEnabled:YES,continuouslyUpdatesValue:YES,allowsErrorAsValue:YES,leftAccessoryView:null,rightAccessoryView:null,spellCheckEnabled:YES,maxLength:5096,_isFocused:NO,init:function(){var a=this.get("hintON"),b=this.get("value");
if(!b||b&&b.length===0){this.set("hintON",YES)}else{this.set("hintON",NO)}return arguments.callee.base.apply(this,arguments)
},isEditable:function(){return this.get("isEnabled")}.property("isEnabled").cacheable(),selection:function(k,h){var d=this.$input()[0],e,a,c;
if(h===undefined){if(d){a=null;c=null;if(!d.value){a=c=0}else{if("selectionStart" in d){a=d.selectionStart
}if("selectionEnd" in d){c=d.selectionEnd}if(a===null||c===null){var j=document.selection;
if(j){var g=j.type;if(g&&(g==="None"||g==="Text")){e=j.createRange();if(!this.get("isTextArea")){var b=e.text.length;
a=Math.abs(e.moveStart("character",0-(d.value.length+1)));c=a+b}else{var f=e.duplicate();
f.moveToElementText(d);f.setEndPoint("EndToStart",e);a=f.text.length;c=a+e.text.length
}}}}}return SC.TextSelection.create({start:a,end:c})}else{return null}}else{if(!h||!h.kindOf||!h.kindOf(SC.TextSelection)){throw"When setting the selection, you must specify an SC.TextSelection instance."
}if(d){if(d.setSelectionRange){d.setSelectionRange(h.get("start"),h.get("end"))}else{e=d.createTextRange();
a=h.get("start");e.move("character",a);e.moveEnd("character",h.get("end")-a);e.select()
}}return h}}.property("fieldValue").cacheable(),displayProperties:"hint fieldValue isEditing leftAccessoryView rightAccessoryView isTextArea".w(),createChildViews:function(){arguments.callee.base.apply(this,arguments);
this.accessoryViewObserver()},acceptsFirstResponder:function(){return this.get("isEnabled")
}.property("isEnabled"),accessoryViewObserver:function(){var f,h=["leftAccessoryView","rightAccessoryView"],a=h.length,b,e,d,g;
for(b=0;b<a;b++){e=h[b];d=this["_"+e];g=this.get(e);if(!(d&&g&&(d===g))){if(d){f=d.get("classNames");
f=f.without("sc-text-field-accessory-view");d.set("classNames",f);this.removeChild(d);
d=null;this["_"+e]=null}if(g){if(g.isClass){g=g.create({layoutView:this})}f=g.get("classNames");
var c="sc-text-field-accessory-view";if(f.indexOf(c)<0){f=SC.clone(f);f.push(c);g.set("classNames",f)
}this.appendChild(g);this["_"+e]=g}}}}.observes("leftAccessoryView","rightAccessoryView"),layoutChildViewsIfNeeded:function(a){if(!a){a=this.get("isVisibleInWindow")
}if(a&&this.get("childViewsNeedLayout")){var b=this.get("rightAccessoryView");if(b&&b.get){var c=b.get("layout");
if(c){c.left=null;if(!c.right){c.right=0}b.adjust({layout:c})}}}arguments.callee.base.apply(this,arguments)
},render:function(e,f){arguments.callee.base.apply(this,arguments);var a,d,c,b;a=this.get("fieldValue");
if(SC.none(a)){a=""}a=String(a);e.setClass("not-empty",a.length>0);d=this._getAccessoryViewWidths();
c=d.left;b=d.right;if(c){c+="px"}if(b){b+="px"}this._renderField(e,f,a,c,b);if(SC.browser.mozilla){this.invokeLast(this._applyFirefoxCursorFix)
}},_forceRenderFirstTime:NO,_renderFieldLikeFirstTime:function(){this.set("_forceRenderFirstTime",YES)
}.observes("isTextArea"),_renderField:function(b,h,n,f,k){var l=this.get("hint"),d,s,o,c,p,a,j,e,m=this.get("spellCheckEnabled"),r,g=this.get("maxLength");
b.setClass("text-area",this.get("isTextArea"));r=m?' spellcheck="true"':' spellcheck="false"';
if(h||this._forceRenderFirstTime){this._forceRenderFirstTime=NO;d=this.get("isEnabled")?"":'disabled="disabled"';
s=this.get("layerId");b.push('<span class="border"></span>');o="";if(f||k){o='style="';
if(f){o+="left: "+f+"; "}if(k){o+="right: "+k+";"}o+='"'}b.push('<span class="padding" '+o+">");
n=this.get("escapeHTML")?SC.RenderContext.escapeHTML(n):n;if(!this.get("_supportsPlaceHolder")&&(!n||(n&&n.length===0))){n=this.get("hint");
b.setClass("sc-hint",YES)}e=(SC.browser.mozilla&&(parseFloat(SC.browser.mozilla)<1.9||SC.browser.mozilla.match(/1\.9\.0|1\.9\.1/)))?"field oldGecko":"field";
if(this.get("isTextArea")){b.push('<textarea class="',e,'" name="',s,'" ',d,' placeholder="',l,'"',r,' maxlength="',g,'">',n,"</textarea></span>")
}else{c=this.get("isPassword")?"password":"text";b.push('<input class="',e,'" type="',c,'" name="',s,'" ',d,' value="',n,'" placeholder="',l,'"',r,' maxlength="',g,'" /></span>')
}}else{if(!this.get("_supportsPlaceHolder")){var q=this.get("value");if((!q||(q&&q.length===0))){if(this.get("hintON")&&!this.get("isFirstResponder")){b.setClass("sc-hint",YES);
this.$input().val(l)}else{b.setClass("sc-hint",NO);this.$input().val("")}}}a=this.$input()[0];
if(a){if(!this.get("isEnabled")){a.disabled="true"}else{a.disabled=null}j=a.parentNode.style;
if(f){if(j.left!==f){j.left=f}}else{j.left=null}if(k){if(j.right!==k){j.right=k}}else{j.right=null
}}}},_getAccessoryViewWidths:function(){var c={},k=["left","right"],d=k.length,f,g,l,j,a,h,e,b;
for(f=0;f<d;f++){g=k[f];l=this.get(g+"AccessoryView");if(l){if(l.isClass){l=l.create({layoutView:this})
}if(l.get){b=l.get("frame");if(b){a=b.width;if(a){h=l.get("layout");if(h){e=h[g];
a+=e}c[g]=a}}}}}return c},didCreateLayer:function(){arguments.callee.base.apply(this,arguments);
if(!this.get("_supportsPlaceHolder")&&this.get("hintON")){var b=this.$input().val();
if(!b||(b&&b.length===0)){this.$input().val(this.get("hint"))}}if(this.get("isTextArea")){this.invokeLast(this._addTextAreaEvents)
}else{this._addTextAreaEvents();if(SC.browser.mozilla){var a=this.$input();SC.Event.add(a,"keypress",this,this._firefox_dispatch_keypress)
}}},_addTextAreaEvents:function(){var a=this.$input();SC.Event.add(a,"focus",this,this._textField_fieldDidFocus);
SC.Event.add(a,"blur",this,this._textField_fieldDidBlur);SC.Event.add(a,"select",this,this._textField_selectionDidChange);
if(SC.browser.mozilla){this._cacheInputElement=this.$input();this._cachePaddingElement=this.$(".padding")
}},willDestroyLayer:function(){arguments.callee.base.apply(this,arguments);var a=this.$input();
SC.Event.remove(a,"focus",this,this._textField_fieldDidFocus);SC.Event.remove(a,"blur",this,this._textField_fieldDidBlur);
SC.Event.remove(a,"select",this,this._textField_selectionDidChange);SC.Event.remove(a,"focus",this,this._firefox_dispatch_keypress)
},_textField_fieldDidFocus:function(a){SC.RunLoop.begin();this.set("focused",YES);
this.fieldDidFocus(a);var b=this.get("value");if(!this.get("_supportsPlaceHolder")&&((!b)||(b&&b.length===0))){this.set("hintON",NO)
}SC.RunLoop.end()},_textField_fieldDidBlur:function(a){SC.RunLoop.begin();this.set("focused",NO);
this.fieldDidBlur(this._origEvent);var b=this.get("value");if(!this.get("_supportsPlaceHolder")&&((!b)||(b&&b.length===0))){this.set("hintON",YES)
}SC.RunLoop.end()},fieldDidFocus:function(a){this.beginEditing(a);if(this.getPath("pane.usingTouchIntercept")){this.get("pane").hideTouchIntercept()
}},fieldDidBlur:function(a){this.commitEditing(a);if(this.getPath("pane.usingTouchIntercept")){this.get("pane").showTouchIntercept()
}},_field_fieldValueDidChange:function(a){if(this.get("focused")){SC.RunLoop.begin();
this.fieldValueDidChange(NO);SC.RunLoop.end()}},_topOffsetForFirefoxCursorFix:3,_applyFirefoxCursorFix:function(){if(parseFloat(SC.browser.mozilla)<1.9&&!this.get("useStaticLayout")){var h,d,c,j,b,g,e,f;
e=this._cacheInputElement;f=this._cachePaddingElement;if(f&&f[0]){g=f[0];b=SC.$(g).offset();
if(SC.browser.compareVersion(1,9,2)<0&&e[0].tagName.toLowerCase()==="input"){h=b.top+this._topOffsetForFirefoxCursorFix
}else{h=b.top}d=b.left;c=g.offsetWidth;j=g.offsetHeight;var a="position: fixed; top: %@px; left: %@px; width: %@px; height: %@px;".fmt(h,d,c,j);
if(!this._prevStyle||this._prevStyle!=a){e.attr("style",a)}this._prevStyle=a}}return this
},_firefox_dispatch_keypress:function(a){var d=this.get("selection"),e=this.get("value"),c=e?e.length:0,b;
if(!d||((d.get("length")===0&&(d.get("start")===0)||d.get("end")===c))){b=SC.RootResponder.responder;
b.keypress.call(b,a);a.stopPropagation()}},_textField_selectionDidChange:function(){this.notifyPropertyChange("selection")
},willBecomeKeyResponderFrom:function(a){if(this.get("isVisibleInWindow")){var b=this.$input()[0];
try{if(b){b.focus()}}catch(c){}if(!this._txtFieldMouseDown){this.invokeLast(this._selectRootElement)
}}},willLoseKeyResponderTo:function(a){},_selectRootElement:function(){var a=this.$input()[0];
if(a){a.select()}else{this._textField_selectionDidChange()}},didLoseKeyResponderTo:function(a){var b=this.$input()[0];
if(b){b.blur()}},parentViewDidResize:function(){if(SC.browser.mozilla){this.invokeLast(this._applyFirefoxCursorFix)
}arguments.callee.base.apply(this,arguments)},keyDown:function(b){var c=b.which;if((c===13&&!b.isIMEInput)&&!this.get("isTextArea")){return NO
}if(c===27){return NO}if(b.which===9&&this.get("defaultTabbingEnabled")){var a=b.shiftKey?this.get("previousValidKeyView"):this.get("nextValidKeyView");
if(a){a.becomeFirstResponder()}else{b.allowDefault()}return YES}if(this.performValidateKeyDown(b)){this._isKeyDown=YES;
b.allowDefault()}else{b.stop()}if(this.get("applyImmediately")){this.invokeLater(this.fieldValueDidChange,1)
}return YES},keyUp:function(a){if(SC.browser.mozilla&&a.keyCode===13){this.fieldValueDidChange()
}this.notifyPropertyChange("selection");this._isKeyDown=NO;a.allowDefault();return YES
},mouseDown:function(a){var b=this.get("fieldValue");this._txtFieldMouseDown=YES;
if(!this.get("isEnabled")){a.stop();return YES}else{return arguments.callee.base.apply(this,arguments)
}},mouseUp:function(a){this._txtFieldMouseDown=NO;this.notifyPropertyChange("selection");
if(!this.get("isEnabled")){a.stop();return YES}return arguments.callee.base.apply(this,arguments)
},mouseWheel:function(a){a.allowDefault();return YES},selectStart:function(a){return YES
},_supportsPlaceHolder:function(){return SC.browser.safari&&!this.get("isTextArea")
}.property("isTextArea").cacheable(),valueObserver:function(){var a=this.get("value");
if(a&&a.length>0){this.set("hintON",NO)}else{this.set("hintON",YES)}}.observes("value")});
sc_require("views/text_field");SC.InlineTextFieldView=SC.TextFieldView.extend(SC.DelegateSupport,{_topOffsetForFirefoxCursorFix:0,beginEditing:function(b){if(!b){throw"InlineTextField.beginEditing() requires options"
}if(this.get("isEditing")){return NO}var d={},f,c,e,a;a=this._delegate=b.delegate;
this.set("delegate",this._delegate);if(!this.invokeDelegateMethod(a,"inlineEditorShouldBeginEditing",this)){SC.Logger.warn("InlineTextField.beginEditing() cannot begin without inlineEditorShouldBeginEditing() on the delegate.");
return NO}this.beginPropertyChanges();this.set("isEditing",YES);this.set("escapeHTML",b.escapeHTML);
this._optframe=b.frame;this._optIsCollection=b.isCollection;this._exampleElement=b.exampleElement;
if(!this._optframe||!this._delegate){throw"At least frame and delegate options are required for inline editor"
}this._originalValue=b.value||"";this._multiline=(b.multiline!==undefined)?b.multiline:NO;
if(this._multiline){this.set("isTextArea",YES)}else{this.set("isTextArea",NO)}this._commitOnBlur=(b.commitOnBlur!==undefined)?b.commitOnBlur:YES;
this.set("validator",b.validator);this.set("value",this._originalValue);f=this._delegate.pane();
d.height=this._optframe.height;d.width=this._optframe.width;c=this._delegate.get("layout");
e=f.$()[0];if(this._optIsCollection&&c.left){d.left=this._optframe.x-c.left-e.offsetLeft-1;
if(SC.browser.msie==7){d.left--}}else{d.left=this._optframe.x-e.offsetLeft-1;if(SC.browser.msie==7){d.left--
}}if(this._optIsCollection&&c.top){d.top=this._optframe.y-c.top-e.offsetTop;if(SC.browser.msie==7){d.top=d.top-2
}}else{d.top=this._optframe.y-e.offsetTop;if(SC.browser.msie==7){d.top=d.top-2}}this.set("layout",d);
this.set("parentNode",f);f.appendChild(this);a=this._delegate;this._className=this.getDelegateProperty(a,"inlineEditorClassName");
if(this._className&&!this.hasClassName(this._className)){this.setClassName(this._className,true)
}this.invokeDelegateMethod(a,"inlineEditorWillBeginEditing",this);this._previousFirstResponder=f?f.get("firstResponder"):null;
this.becomeFirstResponder();this.endPropertyChanges();this.invokeLast(function(){this.invokeDelegateMethod(a,"inlineEditorDidBeginEditing",this)
})},commitEditing:function(a){if(!SC.$ok(this.validateSubmit())){return NO}return this._endEditing(this.get("value"),a)
},discardEditing:function(){return this._endEditing(this._originalValue,null,YES)
},blurEditor:function(a){if(!this.get("isEditing")){return YES}return this._commitOnBlur?this.commitEditing(a):this.discardEditing(a)
},_endEditing:function(d,b,c){if(!this.get("isEditing")){return YES}var a=this._delegate;
if(!this.invokeDelegateMethod(a,"inlineEditorShouldEndEditing",this,d,b,c)){SC.Logger.warn("InlineTextField._endEditing() cannot end without inlineEditorShouldEndEditing() on the delegate.");
return NO}this.invokeDelegateMethod(a,"inlineEditorDidEndEditing",this,d,b,c);if(this._className){this.setClassName(this._className,false)
}this._originalValue=this._delegate=this._exampleElement=this._optframe=this._className=null;
this.set("isEditing",NO);if(this.get("isFirstResponder")){var e=this.get("pane");
if(e&&this._previousFirstResponder){e.makeFirstResponder(this._previousFirstResponder)
}else{this.resignFirstResponder()}}this._previousFirstResponder=null;if(this.get("parentNode")){this.removeFromParent()
}return YES},isEditing:NO,mouseDown:function(a){arguments.callee.base.call(this,a);
return this.get("isEditing")},touchStart:function(a){this.mouseDown(a)},keyDown:function(a){var b=this.interpretKeyEvents(a);
this.fieldValueDidChange(true);return !b?NO:b},insertText:null,_scitf_blurInput:function(){var a=this.$input()[0];
if(a){a.blur()}a=null},willRemoveFromParent:function(){return this._scitf_blurInput()
},willLoseFirstResponder:function(b,a){if(b!==this){return}this._previousFirstResponder=null;
this._origEvent=a;this._scitf_blurInput();return this.blurEditor(a)},cancel:function(){this.discardEditing();
return YES},fieldValueDidChange:function(a){arguments.callee.base.call(this,a)},insertNewline:function(a){if(this._multiline){a.allowDefault();
return arguments.callee.base.call(this,a)}else{if(this.get("value")!=this.$input().val()){this.set("value",this.$input().val())
}this.commitEditing();return YES}},insertTab:function(a){this.resignFirstResponder();
this.commitEditing();if(this._delegate){var b=this._delegate.nextValidKeyView();if(b&&b.beginEditing){b.beginEditing()
}}return YES},insertBacktab:function(a){this.commitEditing();if(this._delegate){var b=this._delegate.previousValidKeyView();
if(b){b.beginEditing()}}return YES},deleteForward:function(a){a.allowDefault();return YES
},deleteBackward:function(a){a.allowDefault();return YES}});SC.InlineTextFieldView.mixin({beginEditing:function(b){this._exampleElement=b.exampleElement;
var a=b.exampleInlineTextFieldView?b.exampleInlineTextFieldView:this,f=b.delegate.get("layout"),e=this.updateViewStyle(),g=this.updateViewPaddingStyle();
var h=".inline-editor input{"+e+"} ";h=h+".inline-editor textarea{"+e+"} .inline-editor .padding{"+g+"}";
var d=document.getElementsByTagName("head")[0],c=document.createElement("style");
c.type="text/css";c.media="screen";if(c.styleSheet){c.styleSheet.cssText=h}else{c.appendChild(document.createTextNode(h))
}d.appendChild(c);this.editor=a.create({classNames:"inline-editor",layout:f});return this.editor.beginEditing(b)
},commitEditing:function(){return this.editor?this.editor.commitEditing():YES},discardEditing:function(){return this.editor?this.editor.discardEditing():YES
},updateViewStyle:function(){var b=this._exampleElement[0],c="",a=SC.getStyle(b,"font-size");
if(a&&a.length>0){c=c+"font-size: "+a+" !important; "}a=SC.getStyle(b,"font-family");
if(a&&a.length>0){c=c+"font-family: "+a+" !important; "}a=SC.getStyle(b,"font-weight");
if(a&&a.length>0){c=c+"font-weight: "+a+" !important; "}a=SC.getStyle(b,"z-index");
if(a&&a.length>0){c=c+"z-index: "+a+" !important; "}a=SC.getStyle(b,"line-height");
if(a&&a.length>0){c=c+"line-height: "+a+" !important; "}a=SC.getStyle(b,"text-align");
if(a&&a.length>0){c=c+"text-align: "+a+" !important; "}a=SC.getStyle(b,"top-margin");
if(a&&a.length>0){c=c+"top-margin: "+a+" !important; "}a=SC.getStyle(b,"bottom-margin");
if(a&&a.length>0){c=c+"bottom-margin: "+a+" !important; "}a=SC.getStyle(b,"left-margin");
if(a&&a.length>0){c=c+"left-margin: "+a+" !important; "}a=SC.getStyle(b,"right-margin");
if(a&&a.length>0){c=c+"right-margin: "+a+" !important; "}return c},updateViewPaddingStyle:function(){var b=this._exampleElement[0];
var c="";var a=SC.getStyle(b,"padding-top");if(a&&a.length>0){c=c+"top: "+a+" !important; "
}a=SC.getStyle(b,"padding-bottom");if(a&&a.length>0){c=c+"bottom: "+a+" !important; "
}a=SC.getStyle(b,"padding-left");if(a&&a.length>0){c=c+"left: "+a+" !important; "
}a=SC.getStyle(b,"padding-right");if(a&&a.length>0){c=c+"right: "+a+" !important; "
}return c},editor:null});sc_require("system/responder");SC.ResponderContext={isResponderContext:YES,trace:NO,defaultResponder:null,nextResponder:function(){return this.get("defaultResponder")
}.property("defaultResponder").cacheable(),firstResponder:null,nextResponderFor:function(a){var b=a.get("nextResponder");
if(typeof b===SC.T_STRING){b=SC.objectForPropertyPath(b,this)}else{if(!b&&(a!==this)){b=this
}}return b},responderNameFor:function(a){if(!a){return"(No Responder)"}else{if(a._scrc_name){return a._scrc_name
}}var b=this.NAMESPACE;this._findResponderNamesFor(this,3,b?[this.NAMESPACE]:[]);
return a._scrc_name||a.toString()},_findResponderNamesFor:function(a,e,d){var b,c;
for(b in a){if(b==="nextResponder"){continue}c=a[b];if(c&&c.isResponder){if(c._scrc_name){continue
}d.push(b);c._scrc_name=d.join(".");if(e>0){this._findResponderNamesFor(c,e-1,d)}d.pop()
}}},makeFirstResponder:function(b,a){var f=this.get("firstResponder"),d=this.get("nextResponder"),e=this.get("trace"),c;
if(this._locked){if(e){console.log("%@: AFTER ACTION: makeFirstResponder => %@".fmt(this,this.responderNameFor(b)))
}this._pendingResponder=b;return}if(e){console.log("%@: makeFirstResponder => %@".fmt(this,this.responderNameFor(b)))
}if(b){b.set("becomingFirstResponder",YES)}this._locked=YES;this._pendingResponder=null;
c=b?b:null;while(c){if(c.get("hasFirstResponder")){break}c=(c===d)?null:this.nextResponderFor(c)
}if(!c){c=d}this._notifyWillLoseFirstResponder(f,f,c,a);if(f){f.set("isFirstResponder",NO)
}this.beginPropertyChanges();this.set("firstResponder",b);if(b){b.set("isFirstResponder",YES)
}this._notifyDidBecomeFirstResponder(b,b,c);this.endPropertyChanges();this._locked=NO;
if(this._pendingResponder){this.makeFirstResponder(this._pendingResponder);this._pendingResponder=null
}if(b){b.set("becomingFirstResponder",NO)}return this},_notifyWillLoseFirstResponder:function(c,e,b,a){if(e===b){return
}e.willLoseFirstResponder(c,a);e.set("hasFirstResponder",NO);var d=this.nextResponderFor(e);
if(d){this._notifyWillLoseFirstResponder(c,d,b)}},_notifyDidBecomeFirstResponder:function(b,d,a){if(d===a){return
}var c=this.nextResponderFor(d);if(c){this._notifyDidBecomeFirstResponder(b,c,a)}d.set("hasFirstResponder",YES);
d.didBecomeFirstResponder(b)},resetFirstResponder:function(){var a=this.get("firstResponder");
if(!a){return}a.willLoseFirstResponder();a.didBecomeFirstResponder()},sendAction:function(g,d,c){var a=this.get("firstResponder"),e=this.get("nextResponder"),f=this.get("trace"),h=NO,b;
this._locked=YES;if(f){console.log("%@: begin action '%@' (%@, %@)".fmt(this,g,d,c))
}if(!h&&!a&&this.tryToPerform){h=this.tryToPerform(g,d,c)}while(!h&&a){if(a.tryToPerform){h=a.tryToPerform(g,d,c)
}if(!h){a=(a===e)?null:this.nextResponderFor(a)}}if(f){if(!h){console.log("%@:  action '%@' NOT HANDLED".fmt(this,g))
}else{console.log("%@: action '%@' handled by %@".fmt(this,g,this.responderNameFor(a)))
}}this._locked=NO;if(b=this._pendingResponder){this._pendingResponder=null;this.makeFirstResponder(b)
}return a}};sc_require("views/view");sc_require("mixins/responder_context");SC.Pane=SC.View.extend(SC.ResponderContext,{isPane:YES,page:null,baseTheme:"sc-base",rootResponder:null,currentWindowSize:null,computeParentDimensions:function(c){if(this.get("designer")&&SC.suppressMain){return arguments.callee.base.apply(this,arguments)
}var b=this.get("currentWindowSize");var d={x:0,y:0,width:1000,height:1000};if(b){d.width=b.width;
d.height=b.height}else{if(SC.RootResponder.responder){var a=SC.RootResponder.responder.get("currentWindowSize");
if(a){d.width=a.width;d.height=a.height}}else{if(window.innerHeight){d.width=window.innerWidth;
d.height=window.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){d.width=document.documentElement.clientWidth;
d.height=document.documentElement.clientHeight}else{if(document.body){d.width=document.body.clientWidth;
d.height=document.body.clientHeight}}}this.windowSizeDidChange(null,d)}}return d},frame:function(){if(this.get("designer")&&SC.suppressMain){return arguments.callee.base.apply(this,arguments)
}return this.computeFrameWithParentFrame(null)}.property(),windowSizeDidChange:function(b,a){this.set("currentWindowSize",a);
this.parentViewDidResize();return this},paneLayoutDidChange:function(){this.invokeOnce(this.updateLayout)
}.observes("layout"),sendEvent:function(c,a,d){var b;if(!d){d=this.get("firstResponder")
}while(d){if(c==="touchStart"){if(a.touchResponder===d){d=null;break}if(!d.get("hasTouch")||d.get("acceptsMultitouch")){if(d.tryToPerform("touchStart",a)){break
}}}else{if(c==="touchEnd"&&!d.get("acceptsMultitouch")){if(!d.get("hasTouch")){if(d.tryToPerform("touchEnd",a)){break
}}}else{if(d.tryToPerform(c,a)){break}}}d=(d===this)?null:d.get("nextResponder")}if(!d&&(d=this.get("defaultResponder"))){if(typeof d===SC.T_STRING){d=SC.objectForPropertyPath(d)
}if(!d){d=null}d=d.tryToPerform(c,a)?d:null}return a.mouseHandler||d},sendTouchEvent:function(e,a,f){var d,b,g=NO,c=[];
if(!f){f=this.get("firstResponder")}while(f){if(f.respondsTo(e)){switch(f[e](a)){case SC.MIXED_STATE:c.push(f);
break;case YES:c=[f];f=null;g=YES;continue}}f=(f===this)?null:f.get("nextResponder")
}if(!g&&(f=this.get("defaultResponder"))){if(typeof f===SC.T_STRING){f=SC.objectForPropertyPath(f)
}if(f){if(f.isResponderContext){c=c.concat(f.sendTouchAction(e,this,a))}else{if(f.respondsTo(e)){b=f[e](a)
}switch(b){case SC.MIXED_STATE:c.push(f);break;case YES:c=[f]}}}}f=null;return c},performKeyEquivalent:function(c,a){var b=arguments.callee.base.apply(this,arguments);
if(!b){var d=this.get("defaultResponder");if(d){if(d.performKeyEquivalent){b=d.performKeyEquivalent(c,a)
}if(!b&&d.tryToPerform){b=d.tryToPerform(c,a)}}}return b},nextResponder:function(){return null
}.property().cacheable(),firstResponder:null,acceptsKeyPane:YES,isKeyPane:NO,becomeKeyPane:function(){if(this.get("isKeyPane")){return this
}if(this.rootResponder){this.rootResponder.makeKeyPane(this)}return this},resignKeyPane:function(){if(!this.get("isKeyPane")){return this
}if(this.rootResponder){this.rootResponder.makeKeyPane(null)}return this},makeFirstResponder:function(b,a){var d=this.get("firstResponder"),c=this.get("isKeyPane");
if(d===b){return this}if(SC.platform.touch&&b&&b.kindOf(SC.TextFieldView)&&!b.get("focused")){return this
}if(d){d.willLoseFirstResponder(d,a)}if(c){if(d){d.willLoseKeyResponderTo(b)}if(b){b.willBecomeKeyResponderFrom(d)
}}if(d){d.beginPropertyChanges().set("isFirstResponder",NO).set("isKeyResponder",NO).endPropertyChanges()
}this.set("firstResponder",b);if(b){b.beginPropertyChanges().set("isFirstResponder",YES).set("isKeyResponder",c).endPropertyChanges()
}if(c){if(b){b.didBecomeKeyResponderFrom(d)}if(d){d.didLoseKeyResponderTo(b)}}if(b){b.didBecomeFirstResponder(b)
}return this},_forwardKeyChange:function(d,b,g,f){var c,a,e;if(d&&(a=this.get("firstResponder"))){e=(g)?g.get("firstResponder"):null;
c=this.get("firstResponder");if(c){c[b](e)}if((f!==undefined)&&a){a.set("isKeyResponder",f)
}}},willLoseKeyPaneTo:function(a){this._forwardKeyChange(this.get("isKeyPane"),"willLoseKeyResponderTo",a,NO);
return this},willBecomeKeyPaneFrom:function(a){this._forwardKeyChange(!this.get("isKeyPane"),"willBecomeKeyResponderFrom",a,YES);
return this},didLoseKeyPaneTo:function(b){var a=this.get("isKeyPane");this.set("isKeyPane",NO);
this._forwardKeyChange(a,"didLoseKeyResponderTo",b);return this},didBecomeKeyPaneFrom:function(b){var a=this.get("isKeyPane");
this.set("isKeyPane",YES);this._forwardKeyChange(!a,"didBecomeKeyResponderFrom",b,YES);
return this},isMainPane:NO,focusFrom:function(a){},blurTo:function(a){},blurMainTo:function(a){this.set("isMainPane",NO)
},focusMainFrom:function(a){this.set("isMainPane",YES)},append:function(){return this.appendTo(document.body)
},remove:function(){if(!this.get("isVisibleInWindow")){return this}if(!this.get("isPaneAttached")){return this
}this.set("isVisibleInWindow",NO);var b=this.get("layer");if(b&&b.parentNode){b.parentNode.removeChild(b)
}b=null;this._removeIntercept();this.resignKeyPane();var a=this.rootResponder;if(this.get("isMainPane")){a.makeMainPane(null)
}a.panes.remove(this);this.rootResponder=null;this.set("isPaneAttached",NO);return this
},appendTo:function(b){var a=this.get("layer");if(!a){a=this.createLayer().get("layer")
}if(this.get("isPaneAttached")&&(a.parentNode===b)){return this}b.insertBefore(a,null);
b=a=null;return this.paneDidAttach()},prependTo:function(b){if(this.get("isPaneAttached")){return this
}var a=this.get("layer");if(!a){a=this.createLayer().get("layer")}if(this.get("isPaneAttached")&&(a.parentNode===b)){return this
}b.insertBefore(a,b.firstChild);b=a=null;return this.paneDidAttach()},before:function(c){if(this.get("isPaneAttached")){return this
}var a=this.get("layer");if(!a){a=this.createLayer().get("layer")}var b=c.parentNode;
if(this.get("isPaneAttached")&&(a.parentNode===b)){return this}b.insertBefore(a,c);
b=c=a=null;return this.paneDidAttach()},after:function(c){var a=this.get("layer");
if(!a){a=this.createLayer().get("layer")}var b=c.parentNode;if(this.get("isPaneAttached")&&(a.parentNode===b)){return this
}b.insertBefore(a,c.nextSibling);b=c=a=null;return this.paneDidAttach()},removeFromParent:function(){},paneDidAttach:function(){var a=(this.rootResponder=SC.RootResponder.responder);
a.panes.add(this);this.set("currentWindowSize",a.computeWindowSize());this.set("isPaneAttached",YES);
this.parentViewDidChange();this._notifyDidAppendToDocument();this._addIntercept();
return this},isPaneAttached:NO,hasTouchIntercept:NO,zIndex:0,touchZ:99,_addIntercept:function(){if(this.get("hasTouchIntercept")&&SC.platform.touch){this.set("usingTouchIntercept",YES);
var a=document.createElement("div");a.style.position="absolute";a.style.left="0px";
a.style.top="0px";a.style.right="0px";a.style.bottom="0px";a.style.webkitTransform="translateZ(0px)";
a.style.zIndex=this.get("zIndex")+this.get("touchZ");a.className="touch-intercept";
a.id="touch-intercept-"+SC.guidFor(this);this._touchIntercept=a;document.body.appendChild(a)
}},_removeIntercept:function(){if(this._touchIntercept){document.body.removeChild(this._touchIntercept);
this._touchIntercept=null}},hideTouchIntercept:function(){if(this._touchIntercept){this._touchIntercept.style.display="none"
}},showTouchIntercept:function(){if(this._touchIntercept){this._touchIntercept.style.display="block"
}},recomputeIsVisibleInWindow:function(){if(this.get("designer")&&SC.suppressMain){return arguments.callee.base.apply(this,arguments)
}var c=this.get("isVisibleInWindow"),e=this.get("isVisible");if(c!==e){this.set("isVisibleInWindow",e);
var d=this.get("childViews"),b=d.length,a;for(a=0;a<b;a++){d[a].recomputeIsVisibleInWindow(e)
}if(e){this.displayDidChange();if(this.get("childViewsNeedLayout")){this.invokeOnce(this.layoutChildViewsIfNeeded)
}}else{this._forceLayerUpdateDueToVisibilityChange=YES;this.displayDidChange();if(this.get("isFirstResponder")){this.resignFirstResponder()
}}}return this},updateLayerLocation:function(){if(this.get("designer")&&SC.suppressMain){return arguments.callee.base.apply(this,arguments)
}return this},init:function(){var a=!!this.get("layer");arguments.callee.base.apply(this,arguments);
if(a){this.paneDidAttach()}},classNames:"sc-pane".w()});sc_require("system/theme");
SC.Renderer={classNames:{},render:function(a){a.setClass(this.classNames)},update:function(){this.$().setClass(this.classNames)
},destroy:function(){},didAttachLayer:function(a){},willDetachLayer:function(){},$:function(c){var a,b=this.layer();
a=!b?SC.$([]):(c===undefined)?SC.$(b):SC.$(c,b);b=null;return a},applyContextToLayer:function(c,d){var e=SC.$(c.join()),a,b;
d.addClass(c.classNames().join(" "));a=e.attr();for(b in a){if(!a.hasOwnProperty(b)){continue
}d.attr(b,a[b])}d.append(e.children())},causedEvent:function(a){return this.$().within(a.target)
},attachLayer:function(a){if(this._layer||this._layerProvider){this.detachLayer()
}if(a.isLayerProvider){this._layerProvider=a}else{this._layer=a}this.didAttachLayer(a)
},detachLayer:function(){this.willDetachLayer();this._layer=null;this._layerProvider=null
},layer:function(a){if(this._layer){return this._layer}if(this._layerProvider){this._layer=this._layerProvider.getLayer();
return this._layer}return null},extend:function(c){var a=SC.mixin(SC.beget(this),c),b,d,e;
a.classNames=SC.mixin({},this.classNames,c.classNames);a.superclass=this;for(b in a){d=a[b];
if(d instanceof Function&&!d.base&&(d!==(e=this[b]))){d.base=e}}return a},create:function(a){a=a?SC.mixin(SC.beget(this),a):this;
return function(c){var b=SC.beget(a);b.theme=this;if(b.init){b.init(c)}else{b.attr(c)
}return b}},init:function(a){this.classNames=SC.mixin({},this.classNames);if(a){this.attr(a)
}},attr:function(c,g){var d=this.changes,f,e,a,b;if(typeof c===SC.T_STRING){if(g===undefined){return this[c]
}if(c!=="classNames"||!g.isEnumerable){if(this[c]===g){return this}this[c]=g}else{a=g.length;
for(b=0;b<a;b++){this.classNames[g[b]]=YES}}if(!d){d=this.changes=SC.CoreSet.create()
}d.add(c);return this}else{e=c;for(c in e){if(!e.hasOwnProperty(c)){continue}g=e[c];
if(c!=="classNames"||!g.isEnumerable){if(this[c]!==g){this[c]=g;f=YES}}else{a=g.length;
for(b=0;b<a;b++){this.classNames[g[b]]=YES}f=YES}if(f){if(!d){d=this.changes=SC.CoreSet.create()
}d.add(c)}}return this}},hasChanges:function(){if(!this.changes||this.changes.length===0){return NO
}return YES},didChange:function(a){if(!this.changes){return NO}return this.changes.contains(a)
},resetChanges:function(){this.changes=null},_layerFinder:function(){var a=this.renderer.$(this.selector);
return a[0]},provide:function(a){return{isLayerProvider:YES,renderer:this,getLayer:this._layerFinder,selector:a}
},toString:function(){return"SC.Renderer#"+SC.guidFor(this)}};sc_require("renderers/renderer");
SC.BaseTheme.renderers.Control=SC.Renderer.extend({controlSizeForSize:function(d){var f=this.controlSizeArray,e=this.controlSizes;
if(!f){var c;f=[];for(c in e){f.push(Number(c))}f=f.sort();this.controlSizeArray=f
}if(e[d]){return e[d]}var b,a,g=null;a=f.length;if(a===0){return null}for(b=0;b<a;
b++){if(f[b]>d){break}g=f[b]}if(!g){return null}return e[g]},controlSizeForLayout:function(a){if(!SC.none(a.height)){return this.controlSizeForSize(a.height)
}return null},resolveControlSize:function(){var a=this.controlSize;if(!a){return null
}if(SC.typeOf(a)===SC.T_STRING){return a}if(SC.typeOf(a)===SC.T_NUMBER){return this.controlSizeForSize(a)
}if(SC.typeOf(a)===SC.T_HASH){return this.controlSizeForLayout(a)}return null},calculateClasses:function(){var b=this.isSelected,a=!this.isEnabled,c=this._TMP_CLASSNAMES?this._TMP_CLASSNAMES:this._TMP_CLASSNAMES={};
c.mixed=b===SC.MIXED_STATE;c.sel=b&&(b!==SC.MIXED_STATE);c.active=this.isActive;return c
},render:function(a){a.setClass(this.calculateClasses());var b=this.resolveControlSize();
if(!b){b=SC.REGULAR_CONTROL_SIZE}if(b){a.addClass(b)}this._last_control_size=b},update:function(){if(this.didChange("controlSize")){var a=this.resolveControlSize();
if(!a){a=SC.REGULAR_CONTROL_SIZE}if(this._last_control_size!=this.controlSize){this.$().setClass(this._last_control_size,NO)
}if(a){this.$().setClass(a,YES)}}this.$().setClass(this.calculateClasses())}});SC.BaseTheme.renderers.control=SC.BaseTheme.renderers.Control.create();
sc_require("renderers/renderer");SC.BaseTheme.renderers.Image=SC.Renderer.extend({render:function(b){var d=this.src,a=this.toolTip||"",c="";
if((this.isSprite!==YES&&d.indexOf("/")>=0)||this.isSprite===NO){b.attr("src",d);
this._last_sprite_class=NO}else{b.attr("src",SC.BLANK_IMAGE_URL);b.addClass(d);this._last_sprite_class=d
}b.attr("title",a);b.attr("alt",a)},update:function(){var b=this.$();var d=this.src,a=this.toolTip||"",c="";
if((this.isSprite!==YES&&d.indexOf("/")>=0)||this.isSprite===NO){b.attr("src",d);
this._last_sprite_class=NO}else{if(this._last_sprite_class){b.setClass(this._last_sprite_class,NO)
}b.attr("src",SC.BLANK_IMAGE_URL);b.setClass(d,YES);this._last_sprite_class=d}b.attr("title",a);
b.attr("alt",a)}});SC.BaseTheme.renderers.image=SC.BaseTheme.renderers.Image.create();
sc_require("renderers/renderer");SC.BaseTheme.renderers.Label=SC.Renderer.extend({init:function(a){this.titleRenderer=this.theme.title();
this.controlRenderer=this.theme.control();this.attr(a)},updateControlRenderer:function(){this.controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize})
},updateTitleRenderer:function(){var f=this.value,e=this.hint,b=this.icon,c=this.escapeHTML,a,d;
this.titleRenderer.attr({title:f,icon:b,escapeHTML:c,hint:e})},render:function(a){this.updateTitleRenderer();
this.updateControlRenderer();a.addStyle({textAlign:this.textAlign,fontWeight:this.fontWeight,opacity:this.isEditing?0:1});
a.setClass("icon",!!this.icon);this.renderTitle(a);this.controlRenderer.render(a)
},renderTitle:function(a){this.titleRenderer.render(a)},update:function(){var a=this.$();
this.updateTitleRenderer();if(this.didChange("text-align")){a.css("text-align",this.textAlign)
}if(this.didChange("font-weight")){a.css("font-weight",this.fontWeight)}if(this.didChange("opacity")){a.css("opacity",this.isEditing?0:1)
}if(this.didChange("icon")){a.setClass("icon",!!this.icon)}this.resetChanges();this.updateTitle();
this.controlRenderer.update()},updateTitle:function(){this.titleRenderer.update()
},didAttachLayer:function(a){this.titleRenderer.attachLayer(a);this.controlRenderer.attachLayer(a)
},didDetachLayer:function(){this.titleRenderer.detachLayer();this.controlRenderer.detachLayer()
}});SC.BaseTheme.renderers.label=SC.BaseTheme.renderers.Label.create();sc_require("renderers/renderer");
SC.BaseTheme.renderers.Title=SC.Renderer.extend({render:function(b){var c=this.icon,e="",g=this.title,f=this.hint,a=(!SC.none(g)&&g.length>0),d;
if(this.escapeHTML){g=SC.RenderContext.escapeHTML(g)}if(c){var h=SC.BLANK_IMAGE_URL;
if(c.indexOf("/")>=0){e='<img src="'+c+'" alt="" class="icon" />'}else{e='<img src="'+h+'" alt="" class="'+c+'" />'
}a=YES}if(f&&(!g||g==="")){if(this.escapeHTML){f=SC.RenderContext.escapeHTML(f)}g="<span class='sc-hint'>"+f+"</span>"
}d=e+g;if(this.needsEllipsis){b.addClass("ellipsis")}b.push(d);this._ImageTitleCached=d
},update:function(){var f=this.icon,b="",g=this.title,c=this.hint,h=(!SC.none(g)&&g.length>0),d,a,j;
if(this.escapeHTML){g=SC.RenderContext.escapeHTML(g)}if(f){var e=SC.BLANK_IMAGE_URL;
if(f.indexOf("/")>=0){b='<img src="'+f+'" alt="" class="icon" />'}else{b='<img src="'+e+'" alt="" class="'+f+'" />'
}h=YES}if(c&&(!g||g==="")){if(this.escapeHTML){c=SC.RenderContext.escapeHTML(c)}g="<span class='sc-hint'>"+c+"</span>"
}d=b+g;a=this.$();if((j=a[0])){if(h){if(this.needsEllipsis){a.addClass("ellipsis");
if(this._ImageTitleCached!==d){this._ImageTitleCached=d;j.innerHTML=d}}else{a.removeClass("ellipsis");
if(this._ImageTitleCached!==d){this._ImageTitleCached=d;j.innerHTML=d}}}else{this._ImageTitleCached=d;
j.innerHTML=""}}}});SC.BaseTheme.renderers.title=SC.BaseTheme.renderers.Title.create();
sc_require("renderers/renderer");SC.BaseTheme.renderers.View=SC.Renderer.extend({render:function(a){a.id(this.layerId).setClass(this.calculateClassNames()).addStyle(this.layoutStyle);
if(this.backgroundColor){a.addStyle("backgroundColor",this.backgroundColor)}this.resetChanges()
},update:function(){var a=this.$();a.setClass(this.calculateClassNames()).css(this.layoutStyle);
if(this.didChange("backgroundColor")){a.css("backgroundColor",this.backgroundColor)
}this.resetChanges()},calculateClassNames:function(){var a=this.classNames;if(this.didChange("isTextSelectable")){a["allow-select"]=this.isTextSelectable
}if(this.didChange("isEnabled")){a.disabled=!this.isEnabled}if(this.didChange("isVisible")){a.hidden=!this.isVisible
}if(this.didChange("isFirstResponder")){a.focus=this.isFirstResponder}if(this.didChange("hasStaticLayout")){a["sc-static-layout"]=this.hasStaticLayout
}if(this.didChange("cursor")&&this.cursor){a[this.cursor.get("className")]=YES}this.classNames=a;
return a}});SC.BaseTheme.renderers.view=SC.BaseTheme.renderers.View.create();sc_require("mixins/responder_context");
SC.Application=SC.Responder.extend(SC.ResponderContext,{});sc_require("core");SC.Benchmark={verbose:NO,enabled:YES,stats:{},globalStartTime:null,start:function(b,a,e,d){if(!this.enabled){return
}var f=(e||Date.now()),c;if(a){c=this._subStatFor(b,a)}else{c=this._statFor(b)}if(d&&c._starts.length>0){c._starts.push("ignore")
}else{c._starts.push(f)}c._times.push({start:f,_subStats:{}});return b},end:function(c,b,f){var e;
if(!this.enabled){return}if(b){e=this._subStatFor(c,b)}else{e=this._statFor(c)}var g=e._starts.pop();
if(!g){console.log('SC.Benchmark "%@" ended without a matching start.  No information was saved.'.fmt(c));
return}if(g=="ignore"){return}var a=(f||Date.now());var d=a-g;e._times[e._times.length-1].end=a;
e._times[e._times.length-1].dur=d;e.amt+=d;e.runs++;if(this.verbose){this.log(c)}},setGlobalStartTime:function(a){this.globalStartTime=a
},bench:function(e,d,a){if(!d){d="bench%@".fmt(this._benchCount++)}if(!a){a=1}var b;
while(--a>=0){var c=SC.Benchmark.start(d);b=e();SC.Benchmark.end(c)}return b},install:function(a,d,b){a["b__"+d]=a[d];
var c=a["b__"+d];a[d]=function(){var f="%@(%@)".fmt(d,$A(arguments).join(", "));SC.Benchmark.start(f,b);
var e=c.apply(this,arguments);SC.Benchmark.end(f);return e}},restore:function(a,b){a[b]=a["b__"+b]
},report:function(c){if(c){return this._genReport(c)}var b=[];for(var a in this.stats){if(!this.stats.hasOwnProperty(a)){continue
}b.push(this._genReport(a))}return b.join("\n")},timelineReport:function(a){a=(a)?"SproutCore Application":a;
var b=[a,"User-Agent: %@".fmt(navigator.userAgent),"Report Generated: %@ (%@)".fmt(new Date().toString(),Date.now()),""];
var d=this._compileChartData(true);for(var c=0;c<d.length;c++){if(d[c][4]){b.push(this._timelineGenSubReport(d[c]))
}else{b.push(this._timelineGenReport(d[c]))}}return b.join("\n")},timelineChart:function(s){var o=0;
this.hideChart();var m=this._compileChartData(false);var j=m.length;if(j===0){return
}var b=this.globalStartTime?this.globalStartTime:m[0][1];var d=m[j-1][2]-b;var n=50+j*30;
var p=Math.ceil(d/200)+1;var r=p*50;var c=document.createElement("div");c.className="sc-benchmark-graph";
document.body.appendChild(c);var t=document.createElement("div");t.innerHTML=((s)?s:"SproutCore Application")+(" - Total Captured Time: "+d+" ms - Points Captured: "+j)+' [<a href="javascript:SC.Benchmark.hideChart();">Hide Chart</a>]';
t.className="sc-benchmark-title";c.appendChild(t);var f=document.createElement("div");
f.className="sc-benchmark-top";f.style.width=r+"px";c.appendChild(f);for(o=0;o<p;
o++){var q=document.createElement("div");q.className="sc-benchmark-tick";q.style.left=(o*50)+"px";
q.style.height=n+"px";var e=document.createElement("div");e.className="sc-benchmark-tick-label";
e.style.left=(o*50)+"px";e.innerHTML=o*200+" ms";c.appendChild(q);c.appendChild(e)
}for(o=0;o<j;o++){var k=document.createElement("div");k.style.top=(75+(o*30))+"px";
k.style.width=r+"px";k.className=(o%2===0)?"sc-benchmark-row even":"sc-benchmark-row";
c.appendChild(k);var l=document.createElement("div");var h=m[o][1];var g=m[o][2];
var a=m[o][3];l.innerHTML="&nbsp;"+(m[o][0]+" <span class='sc-benchmark-emphasis'>"+a+"ms</span>");
l.className="sc-benchmark-bar";l.style.cssText="left:"+(((h-b)/4))+"px; width: "+((a/4))+"px; top: "+(53+(o*30))+"px;";
l.title="start: "+(h-b)+" ms, end: "+(g-b)+" ms, duration: "+a+" ms";c.appendChild(l)
}this._graph=c},hideChart:function(){if(this._graph){try{document.body.removeChild(this._graph)
}catch(a){}}},log:function(d){var c=this.report(d).split("\n"),b=c.length,a;for(a=0;
a<b;a++){console.log(c[a])}},startProfile:function(a){if(!this.enabled){return}if(console&&console.profile){console.profile(a)
}},endProfile:function(a){if(!this.enabled){return}if(console&&console.profileEnd){console.profileEnd(a)
}},_compileChartData:function(g){var l=[],a;for(var m in this.stats){var e=this.stats[m];
for(var f=0;f<e._times.length;f++){var n=e._times[f];a=(e._times.length>1)?(f+1)+" - "+m:m;
l.push([a,n.start,n.end,n.dur,false]);if(g){var b=n._subStats;for(var c in b){var h=b[c];
for(var d=0;d<h._times.length;d++){var o=h._times[d];a=(h._times.length>1)?(d+1)+" - "+c:c;
l.push([a,o.start,o.end,o.dur,true])}}}}}l.sort(function(k,j){if(k[1]<j[1]){return -1
}else{if(k[1]==j[1]){if(k[3]&&!j[3]){return -1}if(!k[3]&&j[3]){return 1}return 0}}return 1
});return l},_genReport:function(a){var b=this._statFor(a);var c=(b.runs>0)?(Math.floor(b.amt*1000/b.runs)/1000):0;
return"BENCH %@ msec: %@ (%@x)".fmt(c,(b.name||a),b.runs)},_timelineGenReport:function(a){if(this.globalStartTime){return"BENCH start: %@ msec, duration: %@ msec,  %@".fmt((a[1]-this.globalStartTime),a[3],a[0])
}else{return"BENCH duration: %@ msec, %@".fmt(a[3],a[0])}},_timelineGenSubReport:function(a){if(this.globalStartTime){return"   CHECKPOINT BENCH start: %@ msec, duration: %@ msec,  %@".fmt((a[1]-this.globalStartTime),a[3],a[0])
}else{return"   CHECKPOINT BENCH duration: %@ msec, %@".fmt(a[3],a[0])}},_subStatFor:function(d,c){var e=this.stats[c]._times.length;
if(e===0){return}var a=this.stats[c]._times[this.stats[c]._times.length-1]._subStats;
var b=a[d];if(!b){a[d]={runs:0,amt:0,name:d,_starts:[],_times:[]};b=a[d]}return b
},_statFor:function(b){var a=this.stats[b];if(!a){a=this.stats[b]={runs:0,amt:0,name:b,_starts:[],_times:[]};
a=this.stats[b]}return a},reset:function(){this.stats={}},_bench:function(b,a){SC.Benchmark.bench(b,a,1)
},_benchCount:1};SC.Benchmark=SC.Benchmark;SC.mixin({logBundleLoading:NO,bundleIsLoaded:function(a){var b=SC.BUNDLE_INFO[a];
return b?!!b.loaded:NO},_scb_bundleDidLoad:function(b,h,a,j){var d=a,n=h;if(SC.typeOf(h)===SC.T_STRING){n=SC.objectForPropertyPath(h)
}if(SC.typeOf(a)===SC.T_STRING){d=SC.objectForPropertyPath(a,n)}if(!d){if(SC.LAZY_INSTANTIATION[b]){var l=SC.LAZY_INSTANTIATION[b];
if(SC.logBundleLoading){console.log("SC.loadBundle(): Bundle '%@' is marked for lazy instantiation, instantiating it now…".fmt(b))
}for(var f=0,c=l.length;f<c;f++){try{l[f]()}catch(g){console.log("SC.loadBundle(): Failted to lazily instatiate entry for  '%@'".fmt(b))
}}delete SC.LAZY_INSTANTIATION[b];if(SC.typeOf(h)===SC.T_STRING){n=SC.objectForPropertyPath(h)
}if(SC.typeOf(a)===SC.T_STRING){d=SC.objectForPropertyPath(a,n)}if(!a){throw"SC.loadBundle(): could not find callback for lazily instantiated bundle '%@'".fmt(b)
}}else{throw"SC.loadBundle(): could not find callback for '%@'".fmt(b)}}if(!j){j=[]
}j.push(b);var k=!!SC.RunLoop.currentRunLoop;if(k){SC.RunLoop.begin()}d.apply(n,j);
if(k){SC.RunLoop.end()}},tryToLoadBundle:function(d,e,f,b){var a,c;if(SC.typeOf(e)===SC.T_STRING){c=SC.objectForPropertyPath(e)
}if(SC.typeOf(f)===SC.T_STRING){a=SC.objectForPropertyPath(f,c)}if(a||SC.LAZY_INSTANTIATION[d]){if(SC.logBundleLoading){console.log("SC.loadBundle(): Bundle '%@' found through other means, will attempt to load…".fmt(d))
}SC.BUNDLE_INFO[d]={loaded:YES};return SC.BUNDLE_INFO[d]}return NO},loadBundle:function(u,y,d){var s,v;
if(d===undefined&&SC.typeOf(y)===SC.T_FUNCTION){d=y;y=null}var o=SC.BUNDLE_INFO[u],x,w,c=SC.A(arguments).slice(3),k=SC.logBundleLoading;
if(k){console.log("SC.loadBundle(): Attempting to load '%@'".fmt(u))}if(!o){if(k){console.log("SC.loadBundle(): Attemping to load %@ without SC.BUNDLE_INFO entry… could be loaded through other means.".fmt(u))
}o=this.tryToLoadBundle(u,y,d,c)}if(!o){throw"SC.loadBundle(): could not find bundle '%@'".fmt(u)
}else{if(o.loaded){if(k){console.log("SC.loadBundle(): Bundle '%@' already loaded, skipping.".fmt(u))
}if(d){if(SC.isReady){SC._scb_bundleDidLoad(u,y,d,c)}else{SC.ready(SC,function(){SC._scb_bundleDidLoad(u,y,d,c)
})}}}else{if(k){console.log("SC.loadBundle(): Bundle '%@' is not loaded, loading now.".fmt(u))
}x=o.callbacks||[];if(d){x.push(function(){SC._scb_bundleDidLoad(u,y,d,c)});o.callbacks=x
}if(!o.loading){var b=o.requires||[];var g=YES;for(s=0,v=b.length;s<v;++s){var p=b[s];
var l=SC.BUNDLE_INFO[p];if(!l){throw"SC.loadBundle(): could not find required bundle '%@' for bundle '%@'".fmt(p,u)
}else{if(l.loading){g=NO;break}else{if(l.loaded){continue}else{g=NO;var r=l.dependents;
if(!r){l.dependents=r=[]}r.push(u);if(k){console.log("SC.loadBundle(): '%@' depends on '%@', loading dependency…".fmt(u,p))
}SC.loadBundle(p);break}}}}if(g){var m,e,f,a,h,n;h=document.getElementsByTagName("head")[0];
if(!h){h=document.documentElement}m=o.styles||[];for(s=0,v=m.length;s<v;++s){f=m[s];
if(f.length>0){a=document.createElement("link");a.setAttribute("href",f);a.setAttribute("rel","stylesheet");
a.setAttribute("type","text/css");h.appendChild(a)}}var j=this._jsBundleLoadQueue;
if(!j){this._jsBundleLoadQueue=j={}}j[u]=[];var t=j[u];e=o.scripts||[];for(s=0,v=e.length;
s<v;++s){f=e[s];if(f.length>0){t.push(f)}}o.loading=YES;this.scriptDidLoad(u)}}}}},scriptDidLoad:function(c){var a=this._jsBundleLoadQueue;
if(a){var e=a[c];if(e){var b=e.shift();if(SC.logBundleLoading){console.log("SC.scriptDidLoad(): Loading next file in '%@' -> '%@'".fmt(c,b))
}var d=document.createElement("script");d.setAttribute("type","text/javascript");
d.setAttribute("src",b);document.body.appendChild(d)}}},bundleDidLoad:function(d){var g=SC.BUNDLE_INFO[d],e=SC.logBundleLoading,f,c;
if(!g){g=SC.BUNDLE_INFO[d]={loaded:YES};return}if(g.loaded&&e){console.log("SC.bundleDidLoad() called more than once for bundle '%@'. Skipping.".fmt(d));
return}delete g.loading;g.loaded=YES;if(SC.isReady){SC._invokeCallbacksForBundle(d)
}else{SC.ready(SC,function(){SC._invokeCallbacksForBundle(d)})}var h=g.dependents||[];
for(var b=0,a=h.length;b<a;++b){if(e){console.log("SC.loadBundle(): Bundle '%@' has completed loading, loading '%@' that depended on it.".fmt(d,h[b]))
}SC.loadBundle(h[b])}},_invokeCallbacksForBundle:function(c){var e=SC.BUNDLE_INFO[c],d;
if(!e){return}if(SC.logBundleLoading){console.log("SC.loadBundle(): Bundle '%@' has completed loading, invoking callbacks.".fmt(c))
}d=e.callbacks||[];SC.RunLoop.begin();for(var b=0,a=d.length;b<a;++b){d[b]()}SC.RunLoop.end()
}});SC.SCANNER_OUT_OF_BOUNDS_ERROR=new Error("Out of bounds.");SC.SCANNER_INT_ERROR=new Error("Not an int.");
SC.SCANNER_SKIP_ERROR=new Error("Did not find the string to skip.");SC.SCANNER_SCAN_ARRAY_ERROR=new Error("Did not find any string of the given array to scan.");
SC.DATETIME_COMPAREDATE_TIMEZONE_ERROR=new Error("Can't compare the dates of two DateTimes that don't have the same timezone.");
SC.DATETIME_ISO8601="%Y-%m-%dT%H:%M:%S%Z";SC.Scanner=SC.Object.extend({string:null,scanLocation:0,scan:function(a){if(this.scanLocation+a>this.length){throw SC.SCANNER_OUT_OF_BOUNDS_ERROR
}var b=this.string.substr(this.scanLocation,a);this.scanLocation+=a;return b},scanInt:function(a){var c=this.scan(a);
var b=new RegExp("\\d{"+a+"}");if(!c.match(b)){throw SC.SCANNER_INT_ERROR}return parseInt(c,10)
},skipString:function(a){if(this.scan(a.length)!==a){throw SC.SCANNER_SKIP_ERROR}return YES
},scanArray:function(c){for(var b=0,a=c.length;b<a;b++){if(this.scan(c[b].length)===c[b]){return b
}this.scanLocation-=c[b].length}throw SC.SCANNER_SCAN_ARRAY_ERROR}});SC.DateTime=SC.Object.extend(SC.Freezable,SC.Copyable,{_ms:0,timezone:0,isFrozen:YES,adjust:function(b,a){var c;
b=b?SC.clone(b):{};c=(b.timezone!==undefined)?b.timezone:(this.timezone!==undefined)?this.timezone:0;
return this.constructor._adjust(b,this._ms,c,a)._createFromCurrentState()},advance:function(a){return this.constructor._advance(a,this._ms,this.timezone)._createFromCurrentState()
},unknownProperty:function(a){return this.constructor._get(a,this._ms,this.timezone)
},toFormattedString:function(a){return this.constructor._toFormattedString(a,this._ms,this.timezone)
},toISO8601:function(){return this.constructor._toFormattedString(SC.DATETIME_ISO8601,this._ms,this.timezone)
},toString:function(){return"UTC: "+new Date(this._ms).toUTCString()+", timezone: "+this.timezone
},isEqual:function(a){return SC.DateTime.compare(this,a)===0},copy:function(){return this
},toTimezone:function(a){if(a===undefined){a=0}return this.advance({timezone:a-this.timezone})
}});SC.DateTime.mixin(SC.Comparable,{recordFormat:SC.DATETIME_ISO8601,dayNames:"_SC.DateTime.dayNames".loc().w(),_englishDayNames:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".w(),abbreviatedDayNames:"_SC.DateTime.abbreviatedDayNames".loc().w(),monthNames:"_SC.DateTime.monthNames".loc().w(),abbreviatedMonthNames:"_SC.DateTime.abbreviatedMonthNames".loc().w(),_date:new Date(),_tz:0,timezone:new Date().getTimezoneOffset(),_dt_cache:{},_dt_cache_index:-1,_DT_CACHE_MAX_LENGTH:1000,_setCalcState:function(a,c){var b={milliseconds:this._date.getTime(),timezone:this._tz};
if(a!==undefined){this._date.setTime(a)}if(c!==undefined){this._tz=c}return b},_setCalcStateFromHash:function(c,b){var d=(b!==undefined)?b:this._tz;
var a=this._toMilliseconds(c,this._ms,d);return this._setCalcState(a,d)},_get:function(w,b,o){var n,t,h,p,e,k,l,f,q,a;
var c,j;var s=this._date;var r,g=null;r=this._setCalcState(b,o);if(w==="milliseconds"){g=s.getTime()
}else{if(w==="timezone"){g=this._tz}}if(g===null){q=w.slice(0,4);a=w.slice(4);if(q==="last"||q==="next"){c=this._get("dayOfWeek");
j=this._englishDayNames.indexOf(a);if(j>=0){var u=j-c;if(q==="last"&&u>=0){u-=7}if(q==="next"&&u<0){u+=7
}this._advance({day:u},b,o);g=this._createFromCurrentState()}}}if(g===null){if(o!==undefined){this._setCalcState(s.getTime()-(o*60000),0)
}switch(w){case"year":g=s.getUTCFullYear();break;case"month":g=s.getUTCMonth()+1;
break;case"day":g=s.getUTCDate();break;case"dayOfWeek":g=s.getUTCDay();break;case"hour":g=s.getUTCHours();
break;case"minute":g=s.getUTCMinutes();break;case"second":g=s.getUTCSeconds();break;
case"millisecond":g=s.getUTCMilliseconds();break}if((g===null)&&(w==="isLeapYear")){e=this._get("year");
g=(e%4===0&&e%100!==0)||e%400===0}if((g===null)&&(w==="daysInMonth")){switch(this._get("month")){case 4:case 6:case 9:case 11:g=30;
break;case 2:g=this._get("isLeapYear")?29:28;break;default:g=31;break}}if((g===null)&&(w==="dayOfYear")){n=s.getTime();
h=this._get("day");this._setCalcStateFromHash({day:1});for(p=this._get("month")-1;
p>0;p--){this._setCalcStateFromHash({month:p});h+=this._get("daysInMonth")}s.setTime(n);
g=h}if((g===null)&&(w.slice(0,4)==="week")){k=w.length===4?1:parseInt(w.slice("4"),10);
l=this._get("dayOfWeek");f=this._get("dayOfYear")-1;if(k===0){g=parseInt((f-l+7)/7,10)
}else{g=parseInt((f-(l-1+7)%7+7)/7,10)}}}this._setCalcState(r.milliseconds,r.timezone);
return g},_adjust:function(c,f,e,a){var d=c?SC.clone(c):{};var b=this._toMilliseconds(c,f,e,a);
this._setCalcState(b,e);return this},_advance:function(a,f,d){var c=a?SC.clone(a):{};
var e;for(var b in c){c[b]+=this._get(b,f,d)}e=(c.timezone!==undefined)?c.timezone:d;
return this._adjust(c,f,e,NO)},_toMilliseconds:function(k,c,h,f){var a=k?SC.clone(k):{};
var j=this._date;var g=j.getTime();var b,e;if(!SC.none(c)){j.setTime(c)}e=(h!==undefined)?h:(this.timezone!==undefined)?this.timezone:0;
j.setTime(j.getTime()-(e*60000));if(f===undefined||f===YES){if(!SC.none(a.hour)&&SC.none(a.minute)){a.minute=0
}if(!(SC.none(a.hour)&&SC.none(a.minute))&&SC.none(a.second)){a.second=0}if(!(SC.none(a.hour)&&SC.none(a.minute)&&SC.none(a.second))&&SC.none(a.millisecond)){a.millisecond=0
}}if(SC.none(a.year)){a.year=j.getUTCFullYear()}if(SC.none(a.month)){a.month=j.getUTCMonth()+1
}if(SC.none(a.day)){a.day=j.getUTCDate()}if(SC.none(a.hour)){a.hour=j.getUTCHours()
}if(SC.none(a.minute)){a.minute=j.getUTCMinutes()}if(SC.none(a.second)){a.second=j.getUTCSeconds()
}if(SC.none(a.millisecond)){a.millisecond=j.getUTCMilliseconds()}b=Date.UTC(a.year,a.month-1,a.day,a.hour,a.minute,a.second,a.millisecond);
j.setTime(b+(e*60000));b=j.getTime();j.setTime(g);return b},create:function(){var j=arguments.length===0?{}:arguments[0];
var d;if(SC.typeOf(j)===SC.T_NUMBER){j={milliseconds:j}}d=(j.timezone!==undefined)?j.timezone:this.timezone;
if(d===undefined){d=0}if(!SC.none(j.milliseconds)){var h="nu"+j.milliseconds+d,a=this._dt_cache;
var e=a[h];if(!e){var f,g=this._dt_cache_index,b=this;e=a[h]=new b([{_ms:j.milliseconds,timezone:d}]);
g=this._dt_cache_index=(g+1)%this._DT_CACHE_MAX_LENGTH;f=a[g];if(f!==undefined&&a[f]){delete a[f]
}a[g]=h}return e}else{var c=new Date();return this.create({milliseconds:this._toMilliseconds(j,c.getTime(),d,j.resetCascadingly),timezone:d})
}},_createFromCurrentState:function(){return this.create({milliseconds:this._date.getTime(),timezone:this._tz})
},parse:function(p,c){var q=/(?:\%([aAbBcdHIjmMpSUWwxXyYZ\%])|(.))/g;var o,k,a={},b={},j=SC.Scanner.create({string:p});
try{while((k=q.exec(c))!==null){switch(k[1]){case"a":b.dayOfWeek=j.scanArray(this.abbreviatedDayNames);
break;case"A":b.dayOfWeek=j.scanArray(this.dayNames);break;case"b":a.month=j.scanArray(this.abbreviatedMonthNames)+1;
break;case"B":a.month=j.scanArray(this.monthNames)+1;break;case"c":throw"%c is not implemented";
case"d":a.day=j.scanInt(2);break;case"H":a.hour=j.scanInt(2);break;case"I":a.hour=j.scanInt(2);
break;case"j":throw"%j is not implemented";case"m":a.month=j.scanInt(2);break;case"M":a.minute=j.scanInt(2);
break;case"p":a.meridian=j.scanArray(["AM","PM"]);break;case"S":a.second=j.scanInt(2);
break;case"U":throw"%U is not implemented";case"W":throw"%W is not implemented";case"w":throw"%w is not implemented";
case"x":throw"%x is not implemented";case"X":throw"%X is not implemented";case"y":a.year=j.scanInt(2);
a.year+=(a.year>70?1900:2000);break;case"Y":a.year=j.scanInt(4);break;case"Z":var g=j.scan(1);
if(g==="Z"){a.timezone=0}else{if(g==="+"||g==="-"){var l=j.scanInt(2);if(j.scan(1)!==":"){j.scan(-1)
}var f=j.scanInt(2);a.timezone=(g==="+"?-1:1)*(l*60+f)}}break;case"%":j.skipString("%");
break;default:j.skipString(k[0]);break}}}catch(n){console.log("SC.DateTime.createFromString "+n.toString());
return null}if(!SC.none(a.meridian)&&!SC.none(a.hour)){if(a.meridian===1){a.hour=(a.hour+12)%24
}delete a.meridian}o=SC.DateTime.create(a);if(!SC.none(b.dayOfWeek)&&o.get("dayOfWeek")!==b.dayOfWeek){return null
}return o},_pad:function(b,a){var c=""+b;if(a===undefined){a=2}while(c.length<a){c="0"+c
}return c},__toFormattedString:function(b,e,c){var a,d;switch(b[1]){case"a":return this.abbreviatedDayNames[this._get("dayOfWeek")];
case"A":return this.dayNames[this._get("dayOfWeek")];case"b":return this.abbreviatedMonthNames[this._get("month")-1];
case"B":return this.monthNames[this._get("month")-1];case"c":return this._date.toString();
case"d":return this._pad(this._get("day"));case"D":return this._get("day");case"h":return this._get("hour");
case"H":return this._pad(this._get("hour"));case"i":a=this._get("hour");return(a===12||a===0)?12:(a+12)%12;
case"I":a=this._get("hour");return this._pad((a===12||a===0)?12:(a+12)%12);case"j":return this._pad(this._get("dayOfYear"),3);
case"m":return this._pad(this._get("month"));case"M":return this._pad(this._get("minute"));
case"p":return this._get("hour")>11?"PM":"AM";case"S":return this._pad(this._get("second"));
case"u":return this._pad(this._get("utc"));case"U":return this._pad(this._get("week0"));
case"W":return this._pad(this._get("week1"));case"w":return this._get("dayOfWeek");
case"x":return this._date.toDateString();case"X":return this._date.toTimeString();
case"y":return this._pad(this._get("year")%100);case"Y":return this._get("year");
case"Z":d=-1*c;return(d>=0?"+":"-")+this._pad(parseInt(Math.abs(d)/60,10))+":"+this._pad(Math.abs(d)%60);
case"%":return"%"}},_toFormattedString:function(c,e,b){var a=this;var d=(b!==undefined)?b:(this.timezone!==undefined)?this.timezone:0;
this._setCalcState(e-(b*60000),0);return c.replace(/\%([aAbBcdDHiIjmMpSUWwxXyYZ\%])/g,function(){var f=a.__toFormattedString.call(a,arguments,e,b);
return f})},compare:function(d,c){var f=d.get("milliseconds");var e=c.get("milliseconds");
return f<e?-1:f===e?0:1},compareDate:function(d,c){if(d.get("timezone")!==c.get("timezone")){throw SC.DATETIME_COMPAREDATE_TIMEZONE_ERROR
}var f=d.adjust({hour:0}).get("milliseconds");var e=c.adjust({hour:0}).get("milliseconds");
return f<e?-1:f===e?0:1}});SC.Binding.dateTime=function(a){return this.transform(function(b,c){return b?b.toFormattedString(a):null
})};if(SC.RecordAttribute&&!SC.RecordAttribute.transforms[SC.guidFor(SC.DateTime)]){SC.RecordAttribute.registerTransform(SC.DateTime,{to:function(c,a){if(SC.none(c)||SC.instanceOf(c,SC.DateTime)){return c
}var b=a.get("format");return SC.DateTime.parse(c,b?b:SC.DateTime.recordFormat)},from:function(b,a){if(SC.none(b)){return b
}var c=a.get("format");return b.toFormattedString(c?c:SC.DateTime.recordFormat)}})
}sc_require("system/event");SC.mixin({_isReadyBound:NO,_bindReady:function(){if(this._isReadyBound){return
}this._isReadyBound=YES;if(document.addEventListener&&!SC.browser.opera){document.addEventListener("DOMContentLoaded",SC._didBecomeReady,NO)
}if(SC.browser.msie&&(window===top)){(function(){if(SC.isReady){return}try{document.documentElement.doScroll("left")
}catch(a){setTimeout(arguments.callee,0);return}SC._didBecomeReady()})()}if(SC.browser.opera){document.addEventListener("DOMContentLoaded",function(){if(SC.isReady){return
}for(var a=0;a<document.styleSheets.length;a++){if(document.styleSheets[a].disabled){setTimeout(arguments.callee,0);
return}}SC._didBecomeReady()},NO)}if(SC.browser.safari&&SC.browser.safari<530){console.error("ready() is not yet supported on Safari 3.1 and earlier")
}SC.Event.add(window,"load",SC._didBecomeReady)},_readyQueue:[],_afterReadyQueue:[],isReady:NO,_didBecomeReady:function(){if(SC.isReady){return
}if(typeof SC.mapDisplayNames===SC.T_FUNCTION){SC.mapDisplayNames()}if(typeof SC.addInvokeOnceLastDebuggingInfo===SC.T_FUNCTION){SC.addInvokeOnceLastDebuggingInfo()
}SC.Locale.createCurrentLocale();if(document&&document.getElementsByTagName){var d=document.getElementsByTagName("body")[0];
if(d){var g=d.className;var c=SC.Locale.currentLanguage.toLowerCase();d.className=(g&&g.length>0)?[g,c].join(" "):c
}}SC.Benchmark.start("ready");SC.RunLoop.begin();var j,b,h,e;do{b=SC._readyQueue;
SC._readyQueue=[];for(h=0,e=b.length;h<e;h++){j=b[h];var f=j[0]||document;var a=j[1];
if(a){a.call(f)}}}while(SC._readyQueue.length>0);SC.isReady=YES;SC._readyQueue=null;
SC.Event.trigger(document,"ready",null,NO);if(SC.removeLoading){SC.$("#loading").remove()
}if(SC.userDefaults.get("ready")){if((SC.mode===SC.APP_MODE)&&(typeof main!="undefined")&&(main instanceof Function)&&!SC.suppressMain){main()
}}else{SC.userDefaults.readyCallback(window,main)}SC.RunLoop.end();SC.Benchmark.end("ready");
SC.Benchmark.log()},ready:function(b,c){var a=this._readyQueue;if(c===undefined){c=b;
b=null}else{if(SC.typeOf(c)===SC.T_STRING){c=b[c]}}if(!c){return this}if(this.isReady){return c.call(b||document)
}a.push([b,c]);return this}});SC._bindReady();SC.removeLoading=YES;SC.APP_MODE="APP_MODE";
SC.TEST_MODE="TEST_MODE";SC.mode=SC.APP_MODE;require("system/ready");SC.CAPTURE_BACKSPACE_KEY=NO;
SC.RootResponder=SC.Object.extend({panes:null,init:function(){arguments.callee.base.apply(this,arguments);
this.panes=SC.Set.create()},mainPane:null,makeMainPane:function(b){var a=this.get("mainPane");
if(a===b){return this}this.beginPropertyChanges();if(this.get("keyPane")===a){this.makeKeyPane(b)
}this.set("mainPane",b);if(a){a.blurMainTo(b)}if(b){b.focusMainFrom(a)}this.endPropertyChanges();
return this},menuPane:null,makeMenuPane:function(b){if(b&&!b.get("acceptsMenuPane")){return this
}else{var a=this.get("menuPane");if(a===b){return this}this.set("menuPane",b)}return this
},keyPane:null,previousKeyPanes:[],makeKeyPane:function(f){var e,a,d;if(f){if(!f.get("acceptsKeyPane")){return this
}else{a=this.get("keyPane");if(a===f){return this}else{if(a){d=this.get("previousKeyPanes");
d.push(a)}e=f}}}else{a=this.get("keyPane");d=this.get("previousKeyPanes");e=null;
while(d.length>0){var c=d.pop();if(c.get("isPaneAttached")&&c.get("acceptsKeyPane")){e=c;
break}}}if(!e){var b=this.get("mainPane");if(b&&b.get("acceptsKeyPane")){e=b}}if(a){a.willLoseKeyPaneTo(e)
}if(e){e.willBecomeKeyPaneFrom(a)}this.set("keyPane",e);if(e){e.didBecomeKeyPaneFrom(a)
}if(a){a.didLoseKeyPaneTo(e)}return this},currentWindowSize:null,computeWindowSize:function(){var a;
if(window.innerHeight){a={width:window.innerWidth,height:window.innerHeight}}else{if(document.documentElement&&document.documentElement.clientHeight){a={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}
}else{if(document.body){a={width:document.body.clientWidth,height:document.body.clientHeight}
}}}return a},resize:function(){this._resize();return YES},_resize:function(){var b=this.computeWindowSize(),c=this.get("currentWindowSize");
this.set("currentWindowSize",b);if(!SC.rectsEqual(b,c)){if(SC.platform.touch){var a=SC.$(document.body);
if(b.height>=b.width){SC.device.set("orientation","portrait")}else{SC.device.set("orientation","landscape")
}}if(this.panes){SC.RunLoop.begin();this.panes.invoke("windowSizeDidChange",c,b);
SC.RunLoop.end()}}},hasFocus:NO,focus:function(){if(!this.get("hasFocus")){SC.$("body").addClass("sc-focus").removeClass("sc-blur");
SC.RunLoop.begin();this.set("hasFocus",YES);SC.RunLoop.end()}return YES},focusin:function(){this.focus()
},focusout:function(){this.blur()},blur:function(){if(this.get("hasFocus")){SC.$("body").addClass("sc-blur").removeClass("sc-focus");
SC.RunLoop.begin();this.set("hasFocus",NO);SC.RunLoop.end()}return YES},dragDidStart:function(a){this._mouseDownView=a;
this._drag=a},defaultResponder:null,sendAction:function(d,e,c,f,b,a){e=this.targetForAction(d,e,c,f,a);
if(e&&e.isResponderContext){return !!e.sendAction(d,c,b,a)}else{return e&&e.tryToPerform(d,c)
}},_responderFor:function(d,b,a){var c=d?d.get("defaultResponder"):null;if(d){d=a||d.get("firstResponder")||d;
do{if(d.respondsTo(b)){return d}}while((d=d.get("nextResponder")))}if(typeof c===SC.T_STRING){c=SC.objectForPropertyPath(c)
}if(!c){return null}else{if(c.isResponderContext){return c}else{if(c.respondsTo(b)){return c
}else{return null}}}},targetForAction:function(c,f,e,g,a){if(!c||(SC.typeOf(c)!==SC.T_STRING)){return null
}if(f){if(SC.typeOf(f)===SC.T_STRING){f=SC.objectForPropertyPath(f)||SC.objectForPropertyPath(f,e)
}if(f){if(f.respondsTo&&!f.respondsTo(c)){f=null}else{if(SC.typeOf(f[c])!==SC.T_FUNCTION){f=null
}}}return f}if(g){return this._responderFor(g,c,a)}var b=this.get("keyPane"),d=this.get("mainPane");
if(b&&(b!==g)){f=this._responderFor(b,c)}if(!f&&d&&(d!==b)){f=this._responderFor(d,c)
}if(!f&&(f=this.get("defaultResponder"))){if(SC.typeOf(f)===SC.T_STRING){f=SC.objectForPropertyPath(f);
if(f){this.set("defaultResponder",f)}}if(f){if(f.respondsTo&&!f.respondsTo(c)){f=null
}else{if(SC.typeOf(f[c])!==SC.T_FUNCTION){f=null}}}}return f},targetViewForEvent:function(a){return a.target?SC.$(a.target).view()[0]:null
},sendEvent:function(c,a,d){var e,b;SC.RunLoop.begin();if(d){e=d.get("pane")}else{e=this.get("menuPane")||this.get("keyPane")||this.get("mainPane")
}b=(e)?e.sendEvent(c,a,d):null;SC.RunLoop.end();return b},listenFor:function(c,b,a){a=a?a:this;
c.forEach(function(d){var e=a[d];if(e){SC.Event.add(b,d,a,e)}},this);b=null;return a
},setup:function(){this.listenFor("touchstart touchmove touchend touchcancel".w(),document);
this.listenFor("keydown keyup beforedeactivate mousedown mouseup click dblclick mouseout mouseover mousemove selectstart contextmenu".w(),document).listenFor("resize".w(),window);
if(SC.browser.msie){this.listenFor("focusin focusout".w(),document)}else{this.listenFor("focus blur".w(),window)
}this.listenFor("webkitAnimationStart webkitAnimationIteration webkitAnimationEnd".w(),document);
if(this.keypress){if(SC.CAPTURE_BACKSPACE_KEY&&SC.browser.mozilla){var b=this;document.onkeypress=function(f){f=SC.Event.normalizeEvent(f);
return b.keypress.call(b,f)}}else{SC.Event.add(document,"keypress",this,this.keypress)
}}"drag selectstart".w().forEach(function(f){var g=this[f];if(g){if(SC.browser.msie){var e=this;
document.body["on"+f]=function(h){return g.call(e,SC.Event.normalizeEvent(event||window.event))
};SC.Event.add(window,"unload",this,function(){document.body["on"+f]=null})}else{SC.Event.add(document,f,this,g)
}}},this);var a=SC.browser.mozilla?"DOMMouseScroll":"mousewheel";SC.Event.add(document,a,this,this.mousewheel);
this.set("currentWindowSize",this.computeWindowSize());this.focus();if(SC.browser.mobileSafari){var c=SC.RunLoop.prototype.endRunLoop,d;
d=function(){if(c){c.apply(this,arguments)}var j=SC.RootResponder.responder._touches,h,e,k,f,m,n=NO;
if(j){for(h in j){if(j[h]._rescuedElement){continue}k=e=j[h].target;while(e&&(e=e.parentNode)&&!n){n=(e===document.body)
}if(!n&&k){if(k.parentNode&&k.cloneNode){var l=k.cloneNode(true);k.parentNode.replaceChild(l,k);
k.swapNode=l}var g=SC.touchHoldingPen;if(!g){g=SC.touchHoldingPen=document.createElement("div");
g.style.display="none";document.body.appendChild(g)}g.appendChild(k);j[h]._rescuedElement=k
}}}};SC.RunLoop.prototype.endRunLoop=d}},_touchedViews:{},_touches:{},touchesForView:function(a){if(this._touchedViews[SC.guidFor(a)]){return this._touchedViews[SC.guidFor(a)].touches
}},averagedTouchesForView:function(f,e){var k=this.touchesForView(f);if((!k||k.length===0)&&!e){return{x:0,y:0,d:0,touchCount:0}
}var c;if(k){c=k.toArray()}else{c=[]}if(e){c.push(e)}var g,d=c.length,b,a=0,m=0,l,j,h=0;
for(g=0;g<d;g++){b=c[g];a+=b.pageX;m+=b.pageY}a/=d;m/=d;for(g=0;g<d;g++){b=c[g];l=Math.abs(b.pageX-a);
j=Math.abs(b.pageY-m);h+=Math.pow(l*l+j*j,0.5)}h/=d;return{x:a,y:m,d:h,touchCount:d}
},assignTouch:function(b,a){if(b.hasEnded){throw"This touch is done for! Yet something tried to assign it."
}if(b.view===a){return}if(b.view){this.unassignTouch(b)}if(!this._touchedViews[SC.guidFor(a)]){this._touchedViews[SC.guidFor(a)]={view:a,touches:SC.CoreSet.create([]),touchCount:0};
a.set("hasTouch",YES)}b.view=a;this._touchedViews[SC.guidFor(a)].touches.add(b);this._touchedViews[SC.guidFor(a)].touchCount++
},unassignTouch:function(c){var a,b;if(!c.view){return}a=c.view;b=this._touchedViews[SC.guidFor(a)];
b.touches.remove(c);b.touchCount--;if(b.touchCount<1){a.set("hasTouch",NO);b.view=null;
delete this._touchedViews[SC.guidFor(a)]}c.view=undefined},makeTouchResponder:function(f,d,c,l){var h=f.touchResponders,b;
if(f.touchResponder===d){return}var a;if(d){a=d.get("pane")}else{a=this.get("keyPane")||this.get("mainPane")
}if(h.indexOf(d)<0){if(l){try{d=(a)?a.sendEvent("touchStart",f,d):null}catch(g){SC.Logger.error("Error in touchStart: "+g);
d=null}}else{if((d.get?d.get("acceptsMultitouch"):d.acceptsMultitouch)||!d.hasTouch){if(!d.touchStart(f)){d=null
}}else{}}}if(!c||(h.indexOf(d)>-1&&h[h.length-1]!==d)){this.unassignTouch(f);var j=h.length-1,k=h[j];
while(k&&k!==d){b=this.touchesForView(k);if((k.get?k.get("acceptsMultitouch"):k.acceptsMultitouch)||!b){if(k.touchCancelled){k.touchCancelled(f)
}}j--;k=h[j];h.pop();f.touchResponder=h[j];f.nextTouchResponder=h[j-1]}}if(d){this.assignTouch(f,d);
if(d!==f.touchResponder){h.push(d);f.touchResponder=d;f.nextTouchResponder=h[h.length-2]
}}},captureTouch:function(h,e,g){if(!e){e=this}var f=h.targetView,c=f,d=[],b,a;if(SC.LOG_TOUCH_EVENTS){SC.Logger.info("  -- Received one touch on %@".fmt(f.toString()))
}while(c&&(c!==e)){d.unshift(c);c=c.get("nextResponder")}for(a=d.length,b=0;b<a;b++){c=d[b];
if(SC.LOG_TOUCH_EVENTS){SC.Logger.info("  -- Checking %@ for captureTouch response…".fmt(c.toString()))
}if(c.tryToPerform("captureTouch",h)){if(SC.LOG_TOUCH_EVENTS){SC.Logger.info("   -- Making %@ touch responder because it returns YES to captureTouch".fmt(c.toString()))
}this.makeTouchResponder(h,c,g,YES);return}}if(SC.LOG_TOUCH_EVENTS){SC.Logger.info("   -- Didn't find a view that returned YES to captureTouch, so we're calling touchStart")
}this.makeTouchResponder(h,f,g,YES)},endMissingTouches:function(e){var b,a=e.length,d={},c=[];
for(b=0;b<a;b++){d[e[b].identifier]=YES}for(b in this._touches){var f=this._touches[b].identifier;
if(!d[f]){c.push(this._touches[b])}}for(b=0,a=c.length;b<a;b++){this.endTouch(c[b]);
this.finishTouch(c[b])}},_touchCount:0,endTouch:function(b,g,c){if(!g){g="touchEnd"
}var a,f,d,e;this.unassignTouch(b);if(b.touchResponder){e=b.touchResponder;f=b.touchResponders;
a=f.length-1;d=f[a];while(d){if(d[g]){d[g](b,c)}if(b.touchResponder!==e){break}a--;
d=f[a];g="touchCancelled"}}},finishTouch:function(a){this.unassignTouch(a);a.touchResponders=null;
a.touchResponder=null;a.nextTouchResponder=null;a.hasEnded=YES;if(this._touches[a.identifier]){delete this._touches[a.identifier]
}},touchstart:function(k){SC.RunLoop.begin();this.endMissingTouches(k.touches);try{var j,b=k.changedTouches,d=b.length,g,h,a,l,c=NO;
k.touchContext=this;for(j=0;j<d;j++){a=b[j];l=SC.Touch.create(a,this);if(l.hidesTouchIntercept){c=YES
}l.timeStamp=k.timeStamp;this._touches[a.identifier]=l;a.event=k;this.captureTouch(l,this);
a.event=null}}catch(f){SC.Logger.warn("Exception during touchStart: %@".fmt(f));SC.RunLoop.end();
return NO}SC.RunLoop.end();if(c){k.allowDefault();return YES}return NO},touchmove:function(o){SC.RunLoop.begin();
try{var b=o.changedTouches,a,q,n,f=b.length,m,l,k,p,h={},d,j,c=NO;if(this._drag){a=SC.Touch.create(o.changedTouches[0],this);
this._drag.tryToPerform("mouseDragged",a)}for(n=0;n<f;n++){a=b[n];q=this._touches[a.identifier];
if(q.hidesTouchIntercept){c=YES}if(!q){SC.Logger.log("Received a touchmove for a touch we don't know about. This is bad.");
continue}q.pageX=a.pageX;q.pageY=a.pageY;q.timeStamp=o.timeStamp;q.event=o;if(q.touchResponder){m=q.touchResponder;
j=SC.guidFor(m);if(!h[j]){h[j]={view:m,touches:[]}}h[j].touches.push(q)}}if(c){o.allowDefault();
return YES}for(n in h){m=h[n].view;l=h[n].touches;o.viewChangedTouches=l;k=this.touchesForView(m);
p=k.firstObject();o.pageX=p.pageX;o.pageY=p.pageY;o.touchContext=this;if(m.touchesDragged){m.touchesDragged(o,k)
}}b=o.changedTouches;f=b.length;for(n=0;n<f;n++){a=b[n];q=this._touches[a.identifier];
q.event=null}}catch(g){SC.Logger.warn("Exception during touchMove: %@".fmt(g))}SC.RunLoop.end();
return NO},touchend:function(p){SC.RunLoop.begin();try{var h=p.changedTouches,g,r,o,k=h.length,m,b,f=p.isCancel?"touchCancelled":"touchEnd",n,q,c,d,j=NO;
for(o=0;o<k;o++){g=h[o];g.type="touchend";r=this._touches[g.identifier];r.timeStamp=p.timeStamp;
r.pageX=g.pageX;r.pageY=g.pageY;r.type="touchend";if(r.hidesTouchIntercept){r.unhideTouchIntercept();
j=YES}if(this._drag){this._drag.tryToPerform("mouseUp",g);this._drag=null}this.endTouch(r,f,p);
this.finishTouch(r)}}catch(l){SC.Logger.warn("Exception during touchEnd: %@".fmt(l));
SC.RunLoop.end();return NO}SC.RunLoop.end();if(j){p.allowDefault();return YES}return NO
},touchcancel:function(a){a.isCancel=YES;this.touchend(a)},attemptKeyEquivalent:function(b){var d=null;
var c=b.commandCodes()[0];if(!c){return NO}var f=this.get("menuPane"),a=this.get("keyPane"),e=this.get("mainPane");
if(f){d=f.performKeyEquivalent(c,b);if(d){return d}}if(a){d=a.performKeyEquivalent(c,b);
if(d||a.get("isModal")){return d}}if(!d&&e&&(e!==a)){d=e.performKeyEquivalent(c,b);
if(d||e.get("isModal")){return d}}return d},_lastModifiers:null,_handleModifierChanges:function(b){var a;
a=this._lastModifiers=(this._lastModifiers||{alt:false,ctrl:false,shift:false});var c=false;
if(b.altKey!==a.alt){a.alt=b.altKey;c=true}if(b.ctrlKey!==a.ctrl){a.ctrl=b.ctrlKey;
c=true}if(b.shiftKey!==a.shift){a.shift=b.shiftKey;c=true}b.modifiers=a;return(c)?(this.sendEvent("flagsChanged",b)?b.hasCustomEventHandling:YES):YES
},_isFunctionOrNonPrintableKey:function(a){return !!(a.altKey||a.ctrlKey||a.metaKey||((a.charCode!==a.which)&&SC.FUNCTION_KEYS[a.which]))
},_isModifierKey:function(a){return !!SC.MODIFIER_KEYS[a.charCode]},keydown:function(a){if(SC.none(a)){return YES
}if(a.keyCode===229){this._IMEInputON=YES;return this.sendEvent("keyDown",a)}if(SC.browser.mozilla&&(a.which===8)){return true
}var b=this._handleModifierChanges(a),d=a.target||a.srcElement,c=(a.which===8)&&!SC.allowsBackspaceToPreviousPage&&(d===document.body);
if(this._isModifierKey(a)){return(c?NO:b)}b=YES;if(this._isFunctionOrNonPrintableKey(a)){if(a.keyCode>=37&&a.keyCode<=40&&SC.browser.mozilla){return YES
}b=this.sendEvent("keyDown",a);if(!b){b=!this.attemptKeyEquivalent(a)}else{b=a.hasCustomEventHandling;
if(b){c=NO}}}return c?NO:b},keypress:function(b){var c,e=b.keyCode,f=!!SC.browser.mozilla;
if(f&&(b.which===8)){b.which=e;c=this.sendEvent("keyDown",b);return c?(SC.allowsBackspaceToPreviousPage||b.hasCustomEventHandling):YES
}else{var d=(e>=37&&e<=40&&f),a=b.charCode;if((a!==undefined&&a===0)&&!d){return YES
}if(d){b.which=e}return this.sendEvent("keyDown",b)?b.hasCustomEventHandling:YES}},keyup:function(a){if(this._ffevt){this._ffevt=null
}var b=this._handleModifierChanges(a);if(this._isModifierKey(a)){return b}if(this._IMEInputON&&a.keyCode===13){a.isIMEInput=YES;
this.sendEvent("keyDown",a);this._IMEInputON=NO}return this.sendEvent("keyUp",a)?a.hasCustomEventHandling:YES
},beforedeactivate:function(c){var b=c.toElement;if(b&&b.tagName&&b.tagName!=="IFRAME"){var a=SC.$(b).view()[0];
if(a&&a.get("blocksIEDeactivate")){return NO}}return YES},mousedown:function(f){try{if(!SC.browser.msie){window.focus()
}this._clickCount+=1;if(!this._lastMouseUpAt||((Date.now()-this._lastMouseUpAt)>200)){this._clickCount=1
}else{var d=this._lastMouseDownX-f.clientX,a=this._lastMouseDownY-f.clientY,h=Math.sqrt(d*d+a*a);
if(h>8){this._clickCount=1}}f.clickCount=this._clickCount;this._lastMouseDownX=f.clientX;
this._lastMouseDownY=f.clientY;var c,b=this.targetViewForEvent(f);if(b){c=b.getPath("pane.firstResponder")
}if(c&&c.kindOf(SC.InlineTextFieldView)&&c!==b){c.resignFirstResponder()}b=this._mouseDownView=this.sendEvent("mouseDown",f,b);
if(b&&b.respondsTo("mouseDragged")){this._mouseCanDrag=YES}}catch(g){SC.Logger.warn("Exception during mousedown: %@".fmt(g));
this._mouseDownView=null;this._mouseCanDrag=NO;throw g}return b?f.hasCustomEventHandling:YES
},mouseup:function(b){this.targetViewForEvent(b);try{if(this._drag){this._drag.tryToPerform("mouseUp",b);
this._drag=null}var d=null,a=this._mouseDownView,c=this.targetViewForEvent(b);this._lastMouseUpAt=Date.now();
b.clickCount=this._clickCount;if(a){d=this.sendEvent("mouseUp",b,a);if(!d&&(this._clickCount===2)){d=this.sendEvent("doubleClick",b,a)
}if(!d){d=this.sendEvent("click",b,a)}}if(!d){if(this._clickCount===2){d=this.sendEvent("doubleClick",b,c)
}if(!d){d=this.sendEvent("click",b,c)}}this._mouseCanDrag=NO;this._mouseDownView=null
}catch(f){this._drag=null;this._mouseCanDrag=NO;this._mouseDownView=null;throw f}return(d)?b.hasCustomEventHandling:YES
},dblclick:function(a){if(SC.browser.isIE){this._clickCount=2;this.mouseup(a)}},mousewheel:function(b){try{var a=this.targetViewForEvent(b),c=this.sendEvent("mouseWheel",b,a)
}catch(d){throw d}return(c)?b.hasCustomEventHandling:YES},_lastHovered:null,mousemove:function(d){if(SC.browser.msie){if(this._lastMoveX===d.clientX&&this._lastMoveY===d.clientY){return
}}this._lastMoveX=d.clientX;this._lastMoveY=d.clientY;SC.RunLoop.begin();try{if(this._drag){if(SC.browser.msie){if(this._lastMouseDownX!==d.clientX||this._lastMouseDownY!==d.clientY){this._drag.tryToPerform("mouseDragged",d)
}}else{this._drag.tryToPerform("mouseDragged",d)}}else{var c=this._lastHovered||[],f=[],j,h,a,b=this.targetViewForEvent(d);
while(b&&(b!==this)){if(c.indexOf(b)!==-1){b.tryToPerform("mouseMoved",d);f.push(b)
}else{b.tryToPerform("mouseEntered",d);f.push(b)}b=b.get("nextResponder")}for(h=0,a=c.length;
h<a;h++){b=c[h];j=b.respondsTo("mouseExited");if(j&&!(f.indexOf(b)!==-1)){b.tryToPerform("mouseExited",d)
}}this._lastHovered=f;if(this._mouseDownView){if(SC.browser.msie){if(this._lastMouseDownX!==d.clientX&&this._lastMouseDownY!==d.clientY){this._mouseDownView.tryToPerform("mouseDragged",d)
}}else{this._mouseDownView.tryToPerform("mouseDragged",d)}}}}catch(g){throw g}SC.RunLoop.end()
},_mouseCanDrag:YES,selectstart:function(b){var c=this.targetViewForEvent(b),a=this.sendEvent("selectStart",b,c);
if(c&&c.respondsTo("mouseDragged")){return(a!==null?YES:NO)&&!this._mouseCanDrag}else{return(a!==null?YES:NO)
}},drag:function(){return false},contextmenu:function(b){var a=this.targetViewForEvent(b);
return this.sendEvent("contextMenu",b,a)},webkitAnimationStart:function(b){try{var a=this.targetViewForEvent(b);
this.sendEvent("animationDidStart",b,a)}catch(c){console.warn("Exception during animationDidStart: %@".fmt(c));
throw c}return a?b.hasCustomEventHandling:YES},webkitAnimationIteration:function(b){try{var a=this.targetViewForEvent(b);
this.sendEvent("animationDidIterate",b,a)}catch(c){console.warn("Exception during animationDidIterate: %@".fmt(c));
throw c}return a?b.hasCustomEventHandling:YES},webkitAnimationEnd:function(b){try{var a=this.targetViewForEvent(b);
this.sendEvent("animationDidEnd",b,a)}catch(c){console.warn("Exception during animationDidEnd: %@".fmt(c));
throw c}return a?b.hasCustomEventHandling:YES}});SC.Touch=function(d,a){this.touchContext=a;
this.identifier=d.identifier;var c=d.target,b;if(c&&SC.$(c).hasClass("touch-intercept")){d.target.style.webkitTransform="translate3d(0px,-5000px,0px)";
c=document.elementFromPoint(d.pageX,d.pageY);if(c){b=SC.$(c).view()[0]}this.hidesTouchIntercept=NO;
if(c.tagName==="INPUT"){this.hidesTouchIntercept=d.target}else{d.target.style.webkitTransform="translate3d(0px,0px,0px)"
}}else{b=d.target?SC.$(d.target).view()[0]:null}this.targetView=b;this.target=c;this.hasEnded=NO;
this.type=d.type;this.clickCount=1;this.view=undefined;this.touchResponder=this.nextTouchResponder=undefined;
this.touchResponders=[];this.startX=this.pageX=d.pageX;this.startY=this.pageY=d.pageY
};SC.Touch.prototype={unhideTouchIntercept:function(){var a=this.hidesTouchIntercept;
if(a){setTimeout(function(){a.style.webkitTransform="translate3d(0px,0px,0px)"},500)
}},allowDefault:function(){this.hasCustomEventHandling=YES},preventDefault:function(){if(this.event){this.event.preventDefault()
}},stopPropagation:function(){if(this.event){this.event.stopPropagation()}},stop:function(){if(this.event){this.event.stop()
}},end:function(){this.touchContext.endTouch(this)},makeTouchResponder:function(b,c,a){this.touchContext.makeTouchResponder(this,b,c,a)
},captureTouch:function(a,b){this.touchContext.captureTouch(this,a,b)},touchesForView:function(a){return this.touchContext.touchesForView(a)
},touchesForResponder:function(a){return this.touchContext.touchesForView(a)},averagedTouchesForView:function(a,b){return this.touchContext.averagedTouchesForView(a,(b?this:null))
}};SC.mixin(SC.Touch,{create:function(b,a){return new SC.Touch(b,a)}});SC.ready(SC.RootResponder,SC.RootResponder.ready=function(){var a;
a=SC.RootResponder.responder=SC.RootResponder.create();a.setup()});SC.platform={touch:("createTouch" in document),bounceOnScroll:(/iPhone|iPad|iPod/).test(navigator.platform),pinchToZoom:(/iPhone|iPad|iPod/).test(navigator.platform),input:{placeholder:(function(){return"placeholder" in document.createElement("input")
})()},input:function(d){var e={},c=d.length,f=document.createElement("input"),b,a;
for(a=0;a<c;a++){b=d[a];e[b]=!!(b in f)}return e}(("autocomplete readonly list size required multiple maxlength pattern min max step placeholder").w()),standalone:navigator.standalone,cssPrefix:null,domCSSPrefix:null,removeEvents:function(d){var b,a=d.length,c;
for(b=0;b<a;b++){c=d[b];SC.Event.remove(document,c,SC.RootResponder.responder,SC.RootResponder.responder[c])
}},replaceEvent:function(a,b){SC.Event.remove(document,a,SC.RootResponder.responder,SC.RootResponder.responder[a]);
SC.Event.add(document,a,this,b)},supportsCSSTransitions:NO,supportsCSSTransforms:NO,understandsCSS3DTransforms:NO,supportsCSS3DTransforms:NO,supportsHashChange:function(){return("onhashchange" in window)&&(document.documentMode===undefined||document.documentMode>7)
}()};(function(){var a=navigator.userAgent.toLowerCase();if((/webkit/).test(a)){SC.platform.cssPrefix="webkit";
SC.platform.domCSSPrefix="Webkit"}else{if((/opera/).test(a)){SC.platform.cssPrefix="opera";
SC.platform.domCSSPrefix="O"}else{if((/msie/).test(a)&&!(/opera/).test(a)){SC.platform.cssPrefix="ms";
SC.platform.domCSSPrefix="ms"}else{if((/mozilla/).test(a)&&!(/(compatible|webkit)/).test(a)){SC.platform.cssPrefix="moz";
SC.platform.domCSSPrefix="Moz"}}}}})();(function(){var d=document.createElement("div");
var e=["-moz-","-moz-","-o-","-ms-","-webkit-"];var a=["moz","Moz","o","ms","webkit"];
var c="",b=null;for(b=0;b<e.length;b++){c+=e[b]+"transition:all 1s linear;";c+=e[b]+"transform: translate(1px, 1px);";
c+=e[b]+"perspective: 500px;"}d.style.cssText=c;for(b=0;b<a.length;b++){if(d.style[a[b]+"TransitionProperty"]!==undefined){SC.platform.supportsCSSTransitions=YES
}if(d.style[a[b]+"Transform"]!==undefined){SC.platform.supportsCSSTransforms=YES}if(d.style[a[b]+"Perspective"]!==undefined||d.style[a[b]+"PerspectiveProperty"]!==undefined){SC.platform.understandsCSS3DTransforms=YES;
SC.platform.supportsCSS3DTransforms=YES}}if(window.media&&window.media.matchMedium){if(!window.media.matchMedium("(-webkit-transform-3d)")){SC.platform.supportsCSS3DTransforms=NO
}}else{if(window.styleMedia&&window.styleMedia.matchMedium){if(!window.styleMedia.matchMedium("(-webkit-transform-3d)")){SC.platform.supportsCSS3DTransforms=NO
}}}})();require("system/ready");require("system/root_responder");require("system/platform");
SC.device=SC.Object.create({orientation:"desktop",isOffline:NO,mouseLocation:function(){var a=SC.RootResponder.responder,c=a._lastMoveX,b=a._lastMoveY;
if(SC.empty(c)||SC.empty(b)){return null}return{x:c,y:b}}.property(),init:function(){arguments.callee.base.apply(this,arguments);
if(SC.platform.touch){this.orientationchange()}if(navigator&&navigator.onLine===false){this.set("isOffline",YES)
}this.panes=SC.Set.create()},setup:function(){var a=SC.RootResponder.responder;a.listenFor("orientationchange".w(),window,this);
a.listenFor("online offline".w(),document,this)},orientationchange:function(a){if(window.orientation===0||window.orientation===180){this.set("orientation","portrait")
}else{this.set("orientation","landscape")}},orientationObserver:function(){var a=SC.$(document.body),b=this.get("orientation");
if(b==="portrait"){a.setClass("portrait",YES);a.setClass("landscape",NO)}if(b==="landscape"){a.setClass("portrait",NO);
a.setClass("landscape",YES)}}.observes("orientation"),online:function(a){this.set("isOffline",NO)
},offline:function(a){this.set("isOffline",YES)}});SC.ready(function(){SC.device.setup()
});sc_require("system/locale");SC.IMAGE_ABORTED_ERROR=SC.$error("SC.Image.AbortedError","Image",-100);
SC.IMAGE_FAILED_ERROR=SC.$error("SC.Image.FailedError","Image",-101);SC.imageCache=SC.Object.create({loadLimit:4,activeRequests:0,loadImage:function(a,e,f,d){var b=SC.typeOf(e);
if(SC.none(f)&&SC.typeOf(e)===SC.T_FUNCTION){e=null;f=e}if(SC.typeOf(f)===SC.T_STRING){f=e[f]
}if(SC.none(d)){d=SC.none(e)&&SC.none(f)}var c=this._imageEntryFor(a);if(c.status===this.IMAGE_LOADED){if(f){f.call(e||c.image,c.url,c.image)
}}else{if(e||f){this._addCallback(c,e,f)}c.retainCount++;this._scheduleImageEntry(c,d)
}},releaseImage:function(a,d,e){var c=this._imageEntryFor(a,NO);if(!c){return this
}if(--c.retainCount<=0){this._deleteEntry(c)}else{if(d||e){var b=SC.typeOf(d);if(SC.none(e)&&SC.typeOf(d)===SC.T_FUNCTION){d=null;
e=d}if(SC.typeOf(e)===SC.T_STRING){e=d[e]}this._removeCallback(c,d,e)}}},reloadImage:function(a){var b=this._imageEntryFor(a,NO);
if(b&&b.status===this.IMAGE_LOADED){b.status=this.IMAGE_WAITING}},loadNextImage:function(){var c=null,a;
if(this.get("activeRequests")>=this.get("loadLimit")){return}a=this._foregroundQueue;
while(a.length>0&&!c){c=a.shift()}if(!c){a=this._backgroundQueue;while(a.length>0&&!c){c=a.shift()
}}this.set("isLoading",!!c);if(c){var b=c.image;b.onabort=this._imageDidAbort;b.onerror=this._imageDidError;
b.onload=this._imageDidLoad;b.src=c.url;this._loading.push(c);this.incrementProperty("activeRequests");
this.loadNextImage()}},_imageEntryFor:function(c,a){if(a===undefined){a=YES}var d=this._images[c];
if(!d&&a){var b=new Image();d=this._images[c]={url:c,status:this.IMAGE_WAITING,callbacks:[],retainCount:0,image:b};
b.entry=d}return d},_deleteEntry:function(a){this._unscheduleImageEntry(a);delete this._images[a.url]
},_addCallback:function(c,d,e){var b=c.callbacks;var a=b.find(function(f){return f[0]===d&&f[1]===e
},this);if(!a){b.push([d,e])}b=null;return this},_removeCallback:function(b,c,d){var a=b.callbacks;
a.forEach(function(f,e){if(f[0]===c&&f[1]===d){a[e]=null}},this);a=null;return this
},_scheduleImageEntry:function(d,c){var b=this._backgroundQueue;var e=this._foregroundQueue;
if(d.status===this.IMAGE_LOADED){return this}if((d.status===this.IMAGE_QUEUED)&&!c&&d.isBackground){b[b.indexOf(d)]=null;
d.status=this.IMAGE_WAITING}if(d.status!==this.IMAGE_QUEUED){var a=(c)?b:e;a.push(d);
d.status=this.IMAGE_QUEUED;d.isBackground=c}if(!this.isLoading){this.invokeLater(this.loadNextImage,100)
}this.set("isLoading",YES);return this},_unscheduleImageEntry:function(b){if(b.status!==this.IMAGE_QUEUED){return this
}var a=b.isBackground?this._backgroundQueue:this._foregroundQueue;a[a.indexOf(b)]=null;
if(this._loading.indexOf(b)>=0){a.image.abort();this.imageStatusDidChange(b,this.ABORTED)
}return this},_imageDidAbort:function(){SC.RunLoop.begin();SC.imageCache.imageStatusDidChange(this.entry,SC.imageCache.ABORTED);
SC.RunLoop.end()},_imageDidError:function(){SC.RunLoop.begin();SC.imageCache.imageStatusDidChange(this.entry,SC.imageCache.ERROR);
SC.RunLoop.end()},_imageDidLoad:function(){SC.RunLoop.begin();SC.imageCache.imageStatusDidChange(this.entry,SC.imageCache.LOADED);
SC.RunLoop.end()},imageStatusDidChange:function(c,a){if(!c){return}var b=c.url;var d;
switch(a){case this.LOADED:d=c.image;break;case this.ABORTED:d=SC.IMAGE_ABORTED_ERROR;
break;case this.ERROR:d=SC.IMAGE_FAILED_ERROR;break;default:d=SC.IMAGE_FAILED_ERROR;
break}c.callbacks.forEach(function(f){var g=f[0],h=f[1];h.call(g,b,d)},this);c.callbacks=[];
c.status=(a===this.LOADED)?this.IMAGE_LOADED:this.IMAGE_WAITING;var e=c.image;if(e){e.onload=e.onerror=e.onabort=null;
if(a!==this.LOADED){c.image=null}}this._loading[this._loading.indexOf(c)]=null;if(this._loading.length>this.loadLimit*2){this._loading=this._loading.compact()
}this.decrementProperty("activeRequests");this.loadNextImage()},init:function(){arguments.callee.base.apply(this,arguments);
this._images={};this._loading=[];this._foregroundQueue=[];this._backgroundQueue=[]
},IMAGE_LOADED:"loaded",IMAGE_QUEUED:"queued",IMAGE_WAITING:"waiting",ABORTED:"aborted",ERROR:"error",LOADED:"loaded"});
SC.json={encode:function(a){return JSON.stringify(a)},decode:function(a){return JSON.parse(a)
}};if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()
}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);
case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;
i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space
}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)
}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")
}}}());SC.Math=SC.Object.create({near:function(c,b,a){if(!a){a=0.00001}return Math.abs(c-b)<=a
},round:function(d,a){if(!a){a=0}var b=Math.pow(10,a);if(a<0){var c=b.toString();
b=c.substring(0,c.indexOf("1")+1)}d=d.valueOf();return Math.round(d*b)/b}});SC.Page=SC.Object.extend({owner:null,get:function(a){var b=this[a];
if(b&&b.isClass){this[a]=b=b.create({page:this});if(!this.get("inDesignMode")){b.awake()
}return b}else{return arguments.callee.base.apply(this,arguments)}},awake:function(){var b,a;
for(a in this){if(!this.hasOwnProperty(a)){continue}b=this[a];if(b&&b.isViewClass){this[a]=b=b.create({page:this})
}}return this},getIfConfigured:function(b){var a=this[b];return(a&&a.isViewClass)?null:this.get(b)
},loc:function(c){var a,b;for(b in c){if(!c.hasOwnProperty(b)){continue}a=this[b];
if(!a||!a.isViewClass){continue}a.loc(c[b])}return this}});SC.Page.design=SC.Page.create;
SC.Page.localization=function(a){return a};sc_require("system/builder");SC.MODE_REPLACE="replace";
SC.MODE_APPEND="append";SC.MODE_PREPEND="prepend";SC.RenderContext=SC.Builder.create({SELF_CLOSING:SC.CoreSet.create().addEach("area base basefront br hr input img link meta".w()),init:function(e,d){var b,a;
if(d){this.prevObject=d;this.strings=d.strings;this.offset=d.length+d.offset}if(!this.strings){this.strings=[]
}if(e===undefined){e="div";a=YES}else{if(e==="div"||e==="label"||e==="a"){a=YES}else{if(SC.typeOf(e)===SC.T_STRING){e=e.toLowerCase();
a=YES}}}if(a){this._tagName=e;this._needsTag=YES;this.needsContent=YES;var f=this;
while(f){f.length++;f=f.prevObject}this.strings.push(null);this._selfClosing=this.SELF_CLOSING.contains(e)
}else{this._elem=e;this._needsTag=NO;this.length=0;this.needsContent=NO}return this
},strings:null,offset:0,length:0,updateMode:SC.MODE_REPLACE,needsContent:NO,get:function(b){var a=this.strings||[];
return(b===undefined)?a.slice(this.offset,this.length):a[b+this.offset]},push:function(d){var b=this.strings,a=arguments.length;
if(!b){this.strings=b=[]}if(a>1){b.push.apply(b,arguments)}else{b.push(d)}var e=this;
while(e){e.length+=a;e=e.prevObject}this.needsContent=YES;return this},text:function(c){var b=arguments.length,a=0;
for(a=0;a<b;a++){this.push(SC.RenderContext.escapeHTML(arguments[a]))}return this
},join:function(b){if(this._needsTag){this.end()}var a=this.strings;return a?a.join(b||""):""
},begin:function(a){return SC.RenderContext(a,this)},element:function(){if(this._elem){return this._elem
}var a=SC.RenderContext,b=a.factory,c,d;if(!b){b=a.factory=document.createElement("div")
}b.innerHTML=this.join();if(SC.browser.msie){if(b.innerHTML.length>0){d=b.firstChild.cloneNode(true);
b.innerHTML=""}else{d=null}}else{d=b.firstChild}return d},remove:function(a){if(!a){return
}var b,c=this._elem;if(!c||!c.removeChild){return}b=document.getElementById(a);if(b){b=c.removeChild(b);
b=null}},update:function(){var a=this._elem,e=this.updateMode,g,l,j,f,n,c,k,d,h;this._innerHTMLReplaced=NO;
if(!a){return}g=SC.$(a);if(this.length>0){this._innerHTMLReplaced=YES;if(e===SC.MODE_REPLACE){a.innerHTML=this.join()
}else{c=a.cloneNode(false);c.innerHTML=this.join();h=(e===SC.MODE_APPEND)?null:a.firstChild;
k=c.firstChild;while(k){d=k.nextSibling;a.insertBefore(k,d);k=d}k=d=c=h=null}}if(this._attrsDidChange&&(j=this._attrs)){for(l in j){if(!j.hasOwnProperty(l)){continue
}f=j[l];if(f===null){a.removeAttribute(l)}else{g.attr(l,f)}}}if(this._classNamesDidChange&&(j=this._classNames)){g.attr("class",j.join(" "))
}if(this._idDidChange&&(j=this._id)){g.attr("id",j)}if(this._stylesDidChange&&(n=this._styles)){var b=this._STYLE_PAIR_ARRAY,m=this._JOIN_ARRAY;
for(l in n){if(!n.hasOwnProperty(l)){continue}j=n[l];if(j===null){continue}if(!isNaN(j)&&!(l==="zIndex"||l==="font-weight")){j+="px"
}b[0]=this._dasherizeStyleName(l);b[1]=j;m.push(b.join(": "))}g.attr("style",m.join("; "));
m.length=0}a=this._elem=null;return this.prevObject||this},_DEFAULT_ATTRS:{},_TAG_ARRAY:[],_JOIN_ARRAY:[],_STYLE_PAIR_ARRAY:[],end:function(){var n=this._TAG_ARRAY,b,l,j,g,k=this._attrs,d=this._classNames,a=this._id,m=this._styles;
n[0]="<";n[1]=this._tagName;if(k||d||m||a){if(!k){k=this._DEFAULT_ATTRS}if(a){k.id=a
}if(d){k["class"]=d.join(" ")}if(m){l=this._JOIN_ARRAY;b=this._STYLE_PAIR_ARRAY;for(j in m){if(!m.hasOwnProperty(j)){continue
}g=m[j];if(g===null){continue}if(!isNaN(g)&&!(j==="zIndex"||j==="font-weight")){g+="px"
}b[0]=this._dasherizeStyleName(j);b[1]=g;l.push(b.join(": "))}k.style=l.join("; ");
l.length=0}n.push(" ");for(j in k){if(!k.hasOwnProperty(j)){continue}g=k[j];if(g===null){continue
}n.push(j,'="',g,'" ')}if(k===this._DEFAULT_ATTRS){delete k.style;delete k["class"];
delete k.id}}var h=this.strings;var f=(this._selfClosing===NO)?NO:(this.length===1);
n.push(f?" />":">");h[this.offset]=n.join("");n.length=0;if(!f){n[0]="</";n[1]=this._tagName;
n[2]=">";h.push(n.join(""));var e=this;while(e){e.length++;e=e.prevObject}n.length=0
}this._elem=null;return this.prevObject||this},tag:function(a,b){return this.begin(a,b).end()
},tagName:function(a){if(a===undefined){if(!this._tagName&&this._elem){this._tagName=this._elem.tagName
}return this._tagName}else{this._tagName=a;this._tagNameDidChange=YES;return this
}},id:function(a){if(a===undefined){if(!this._id&&this._elem){this._id=this._elem.id
}return this._id}else{this._id=a;this._idDidChange=YES;return this}},classNames:function(b,a){if(b===undefined){if(!this._classNames&&this._elem){this._classNames=(SC.$(this._elem).attr("class")||"").split(" ")
}if(this._cloneClassNames){this._classNames=(this._classNames||[]).slice();this._cloneClassNames=NO
}if(!this._classNames){this._classNames=[]}return this._classNames}else{this._classNames=b;
this._cloneClassNames=a||NO;this._classNamesDidChange=YES;return this}},hasClass:function(a){return this.classNames().indexOf(a)>=0
},addClass:function(d){if(d===undefined||d===null){console.warn("You are adding an undefined or empty class"+this.toString());
return this}var e=this.classNames();if(SC.typeOf(d)===SC.T_STRING){if(e.indexOf(d)<0){e.push(d);
this._classNamesDidChange=YES}}else{for(var c=0,a=d.length;c<a;c++){var b=d[c];if(e.indexOf(b)<0){e.push(b);
this._classNamesDidChange=YES}}}return this},removeClass:function(b){var c=this._classNames,a;
if(!c&&this._elem){c=this._classNames=(SC.$(this._elem).attr("class")||"").split(" ")
}if(c&&(a=c.indexOf(b))>=0){if(this._cloneClassNames){c=this._classNames=c.slice();
this._cloneClassNames=NO}c[a]=null;this._classNamesDidChange=YES}return this},resetClassNames:function(){this._classNames=[];
this._classNamesDidChange=YES;return this},setClass:function(d,c){var f,a,b,e;if(c!==undefined){return c?this.addClass(d):this.removeClass(d)
}else{f=this._classNames;if(!f&&this._elem){f=this._classNames=(SC.$(this._elem).attr("class")||"").split(" ")
}if(!f){f=this._classNames=[]}if(this._cloneClassNames){f=this._classNames=f.slice();
this._cloneClassNames=NO}e=NO;for(b in d){if(!d.hasOwnProperty(b)){continue}a=f.indexOf(b);
if(d[b]){if(a<0){f.push(b);e=YES}}else{if(a>=0){f[a]=null;e=YES}}}if(e){this._classNamesDidChange=YES
}}return this},_STYLE_REGEX:/-?\s*([^:\s]+)\s*:\s*([^;]+)\s*;?/g,styles:function(d,e){var a,c,b;
if(d===undefined){if(!this._styles&&this._elem){a=SC.$(this._elem).attr("style");
if(a&&(a=a.toString()).length>0){if(SC.browser.msie){a=a.toLowerCase()}d={};c=this._STYLE_REGEX;
c.lastIndex=0;while(b=c.exec(a)){d[this._camelizeStyleName(b[1])]=b[2]}this._styles=d;
this._cloneStyles=NO}else{this._styles={}}}else{if(!this._styles){this._styles={}
}else{if(this._cloneStyles){this._styles=SC.beget(this._styles);this._cloneStyles=NO
}}}return this._styles}else{this._styles=d;this._cloneStyles=e||NO;this._stylesDidChange=YES;
return this}},addStyle:function(a,e){var b,d=NO,c=this.styles();if(typeof a===SC.T_STRING){if(e===undefined){return c[a]
}else{if(c[a]!==e){c[a]=e;this._stylesDidChange=YES}}}else{for(b in a){if(!a.hasOwnProperty(b)){continue
}e=a[b];if(c[b]!==e){c[b]=e;d=YES}}if(d){this._stylesDidChange=YES}}return this},removeStyle:function(a){if(!this._styles&&!this._elem){return this
}var b=this.styles();if(b[a]){b[a]=null;this._stylesDidChange=YES}},attr:function(a,e){var c,b=this._attrs,d=NO;
if(!b){this._attrs=b={}}if(typeof a===SC.T_STRING){if(e===undefined){return b[a]}else{if(b[a]!==e){b[a]=e;
this._attrsDidChange=YES}}}else{for(c in a){if(!a.hasOwnProperty(c)){continue}e=a[c];
if(b[c]!==e){b[c]=e;d=YES}}if(d){this._attrsDidChange=YES}}return this},_camelizeStyleName:function(a){var b=a.match(/^-(webkit|moz|o)-/),c=a.camelize();
if(b){return c.substr(0,1).toUpperCase()+c.substr(1)}else{return c}},_dasherizeStyleName:function(a){var b=a.dasherize();
if(b.match(/^(webkit|moz|ms|o)-/)){b="-"+b}return b}});SC.RenderContext.fn.html=SC.RenderContext.fn.push;
SC.RenderContext.fn.css=SC.RenderContext.fn.addStyle;if(!SC.browser.isSafari||parseInt(SC.browser.version,10)<526){SC.RenderContext._safari3=YES
}SC.RenderContext.escapeHTML=function(d){var c,b,a;if(SC.none(d)){return d}c=this.escapeHTMLElement;
if(!c){c=this.escapeHTMLElement=document.createElement("div")}b=this.escapeTextNode;
if(!b){b=this.escapeTextNode=document.createTextNode("");c.appendChild(b)}b.data=d;
a=c.innerHTML;if(SC.RenderContext._safari3){a=a.replace(/>/g,"&gt;")}b=c=null;return a
};SC.Response=SC.Object.extend({isError:NO,errorValue:function(){return this}.property().cacheable(),errorObject:null,request:null,originalRequest:function(){var a=this.get("request");
while(a.get("source")){a=a.get("source")}return a}.property("request").cacheable(),type:function(){return this.getPath("request.type")
}.property("request").cacheable(),address:function(){return this.getPath("request.address")
}.property("request").cacheable(),isJSON:function(){return this.getPath("request.isJSON")||NO
}.property("request").cacheable(),isXML:function(){return this.getPath("request.isXML")||NO
}.property("request").cacheable(),listeners:function(){return this.getPath("request.listeners")
}.property("request").cacheable(),status:-100,headers:null,encodedBody:null,body:function(){var a=this.get("encodedBody");
if(a&&this.get("isJSON")){try{a=SC.json.decode(a)}catch(b){return SC.Error.create({message:b.name+": "+b.message,label:"Response",errorValue:this})
}}return a}.property("encodedBody").cacheable(),response:function(){return this.get("body")
}.property("body").cacheable(),isCancelled:NO,timedOut:null,timeoutTimer:null,fire:function(){var a=this.get("request"),c=a?a.get("source"):null;
if(c&&c.willSend){c.willSend(a,this)}a.freeze();if(!this.get("isCancelled")){this.invokeTransport()
}var b=a.get("timeout");if(b){var d=SC.Timer.schedule({target:this,action:"timeoutReached",interval:b,repeats:NO});
this.set("timeoutTimer",d)}if(!this.get("isCancelled")&&c&&c.didSend){c.didSend(a,this)
}},invokeTransport:function(){this.receive(function(a){this.set("status",200)},this)
},receive:function(e,a){if(!this.get("timedOut")){var d=this.get("timeoutTimer");
if(d){d.invalidate()}this.set("timedOut",NO);var b=this.get("request");var c=b?b.get("source"):null;
SC.RunLoop.begin();if(c&&c.willReceive){c.willReceive(b,this)}e.call(a,!this.get("isCancelled"));
if(!this.get("isCancelled")&&c&&c.didReceive){c.didReceive(b,this)}if(!this.get("isCancelled")){this.notify()
}SC.RunLoop.end()}SC.Request.manager.transportDidClose(this);return this},cancel:function(){if(!this.get("isCancelled")){this.set("isCancelled",YES);
this.cancelTransport();SC.Request.manager.transportDidClose(this)}},timeoutReached:function(){if(this.get("timedOut")===null){this.set("timedOut",YES);
this.cancelTransport();SC.Request.manager.transportDidClose(this);var a=SC.$error("HTTP Request timed out","Request",408);
a.set("errorValue",this);this.set("isError",YES);this.set("errorObject",a);var b=this.get("request");
var c=b?b.get("source"):null;if(!this.get("isCancelled")&&c&&c.didTimeout){c.didTimeout(b,this)
}}},cancelTransport:function(){},_notifyListener:function(b,a){var e=b[a],f,d,c;if(!e){return NO
}f=(e.params||[]).copy();f.unshift(this);d=e.target;c=e.action;if(SC.typeOf(c)===SC.T_STRING){c=d[c]
}return c.apply(d,f)},notify:function(){var b=this.get("listeners"),a=this.get("status"),c=Math.floor(a/100)*100,d=NO;
if(!b){return this}d=this._notifyListener(b,a);if(!d){d=this._notifyListener(b,c)
}if(!d){d=this._notifyListener(b,0)}return this},toString:function(){var a=arguments.callee.base.apply(this,arguments);
return"%@<%@ %@, status=%@".fmt(a,this.get("type"),this.get("address"),this.get("status"))
}});SC.XHRResponse=SC.Response.extend({headers:function(){var c=this.get("rawRequest"),b=c?c.getAllResponseHeaders():null,a={};
if(!b){return a}b.split("\n").forEach(function(g){var d=g.indexOf(":"),e,f;if(d>=0){e=g.slice(0,d);
f=g.slice(d+1).trim();a[e]=f}},this);return a}.property("status").cacheable(),header:function(a){var b=this.get("rawRequest");
return b?b.getResponseHeader(a):null},encodedBody:function(){var b=this.get("rawRequest"),a;
if(!b){a=null}else{if(this.get("isXML")){a=b.responseXML}else{a=b.responseText}}return a
}.property("status").cacheable(),cancelTransport:function(){var a=this.get("rawRequest");
if(a){a.abort()}this.set("rawRequest",null)},invokeTransport:function(){var d,g,b,c,f;
function e(){for(var h=0;h<arguments.length;h++){try{var j=arguments[h]();return j
}catch(k){}}return NO}d=e(function(){return new XMLHttpRequest()},function(){return new ActiveXObject("Msxml2.XMLHTTP")
},function(){return new ActiveXObject("Microsoft.XMLHTTP")});this.set("rawRequest",d);
c=!!this.getPath("request.isAsynchronous");if(c){if(!SC.browser.msie){SC.Event.add(d,"readystatechange",this,this.finishRequest,d)
}else{g=this;b=function(){if(!g){return null}var h=g.finishRequest();if(h){g=null
}return h};d.onreadystatechange=b}}d.open(this.get("type"),this.get("address"),c);
f=this.getPath("request.headers");for(var a in f){d.setRequestHeader(a,f[a])}d.send(this.getPath("request.encodedBody"));
if(!c){this.finishRequest()}return d},finishRequest:function(c){var e=this.get("rawRequest"),a=e.readyState,d,b,f;
if(a===4){this.receive(function(g){if(!g){return}b=-1;try{b=e.status||0}catch(j){}if((b<200)||(b>=300)){try{f=e.statusText||""
}catch(h){f=""}d=SC.$error(f||"HTTP Request failed","Request",b);d.set("errorValue",this);
this.set("isError",YES);this.set("errorObject",d)}this.set("status",b)},this);e.onreadystatechange=function(){};
return YES}return NO}});sc_require("system/response");SC.Request=SC.Object.extend(SC.Copyable,SC.Freezable,{isAsynchronous:YES,isJSON:NO,isXML:NO,init:function(){arguments.callee.base.apply(this,arguments);
this.header("X-Requested-With","XMLHttpRequest");this.header("X-SproutCore-Version","1.0")
},headers:function(){var a=this._headers;if(!a){a=this._headers={}}return a}.property().cacheable(),responseClass:SC.XHRResponse,source:null,address:null,type:"GET",timeout:null,body:null,encodedBody:function(){var a=this.get("body");
if(a&&this.get("isJSON")){a=SC.json.encode(a)}return a}.property("isJSON","isXML","body").cacheable(),willSend:function(b,a){},didSend:function(b,a){},willReceive:function(b,a){},didReceive:function(b,a){},didTimeout:function(b,a){},COPY_KEYS:"isAsynchronous isJSON isXML address type timeout body responseClass willSend didSend willReceive didReceive".w(),copy:function(){var a={},d=this.COPY_KEYS,f=d.length,b,c,e;
while(--f>=0){b=d[f];if(this.hasOwnProperty(b)){a[b]=this.get(b)}}if(this.hasOwnProperty("listeners")){a.listeners=SC.copy(this.get("listeners"))
}if(this.hasOwnProperty("_headers")){a._headers=SC.copy(this._headers)}a.source=this.get("source")||this;
return this.constructor.create(a)},header:function(a,b){var c;if(SC.typeOf(a)===SC.T_STRING){c=this._headers;
if(arguments.length===1){return c?c[a]:null}else{this.propertyWillChange("headers");
if(!c){c=this._headers={}}c[a]=b;this.propertyDidChange("headers");return this}}else{if(b===undefined){c=a;
this.beginPropertyChanges();for(a in c){if(!c.hasOwnProperty(a)){continue}this.header(a,c[a])
}this.endPropertyChanges();return this}}return this},async:function(a){if(a===undefined){a=YES
}return this.set("isAsynchronous",a)},json:function(a){if(a===undefined){a=YES}if(a){this.set("isXML",NO)
}return this.set("isJSON",a)},xml:function(a){if(a===undefined){a=YES}if(a){this.set("isJSON",NO)
}return this.set("isXML",a)},_prep:function(){var a=!!this.header("Content-Type");
if(this.get("isJSON")&&!a){this.header("Content-Type","application/json")}else{if(this.get("isXML")&&!a){this.header("Content-Type","text/xml")
}}return this},send:function(a){var b=this.get("timeout");if(b){if(!this.get("isAsynchronous")){throw"Timeout values cannot be used with synchronous requests"
}}else{if(b===0){throw"The timeout value must either not be specified or must be greater than 0"
}}if(a){this.set("body",a)}return SC.Request.manager.sendRequest(this.copy()._prep())
},resend:function(){var a=this.get("source")?this:this.copy()._prep();return SC.Request.manager.sendRequest(a)
},notify:function(a,e,d,f){var c=YES;if(SC.typeOf(a)!==SC.T_NUMBER){f=SC.A(arguments).slice(2);
d=e;e=a;a=0;c=NO}else{f=SC.A(arguments).slice(3)}var b=this.get("listeners");if(!b){this.set("listeners",b={})
}b[a]={target:e,action:d,params:f};return this}});SC.Request.mixin({getUrl:function(a){return this.create().set("address",a).set("type","GET")
},postUrl:function(b,a){var c=this.create().set("address",b).set("type","POST");if(a){c.set("body",a)
}return c},deleteUrl:function(a){return this.create().set("address",a).set("type","DELETE")
},putUrl:function(b,a){var c=this.create().set("address",b).set("type","PUT");if(a){c.set("body",a)
}return c}});SC.Request.manager=SC.Object.create(SC.DelegateSupport,{maxRequests:6,inflight:[],pending:[],sendRequest:function(b){if(!b){return null
}var a=b.get("responseClass").create({request:b});this.get("pending").pushObject(a);
this.fireRequestIfNeeded();return a},cancel:function(b){var d=this.get("pending"),c=this.get("inflight"),a;
if(d.indexOf(b)>=0){this.propertyWillChange("pending");d.removeObject(b);this.propertyDidChange("pending");
return YES}else{if(c.indexOf(b)>=0){b.cancel();c.removeObject(b);this.fireRequestIfNeeded();
return YES}else{return NO}}},cancelAll:function(){if(this.get("pending").length||this.get("inflight").length){this.set("pending",[]);
this.get("inflight").forEach(function(a){a.cancel()});this.set("inflight",[]);return YES
}else{return NO}},fireRequestIfNeeded:function(){var d=this.get("pending"),c=this.get("inflight"),a=this.get("maxRequests"),b;
if((d.length>0)&&(c.length<a)){b=d.shiftObject();c.pushObject(b);b.fire()}},transportDidClose:function(a){this.get("inflight").removeObject(a);
this.fireRequestIfNeeded()}});require("system/platform");SC.routes=SC.Object.create({_didSetup:NO,_location:null,_firstRoute:null,_extractParametersAndRoute:function(c){var a={},h=c.route||"",e,b,d,g,f,j;
e=(h.indexOf("?")<0&&h.indexOf("&")>=0)?"&":"?";b=h.split(e);h=b[0];if(b.length===1){b=[]
}else{if(b.length===2){b=b[1].split("&")}else{if(b.length>2){b.shift()}}}g=b.length;
for(d=0;d<g;++d){f=b[d].split("=");a[f[0]]=f[1]}for(j in c){if(c.hasOwnProperty(j)&&j!=="route"){a[j]=""+c[j]
}}b=[];for(j in a){b.push([j,a[j]].join("="))}a.params=e+b.join("&");a.route=h;return a
},location:function(b,c){var a;if(c!==undefined){if(c===null){c=""}if(typeof(c)==="object"){a=this._extractParametersAndRoute(c);
c=a.route+a.params}if(!SC.empty(c)||(this._location&&this._location!==c)){window.location.hash=encodeURI(c)
}this._location=c;return this}return this._location}.property(),ping:function(){var a;
if(!this._didSetup){this._didSetup=YES;if(SC.platform.supportsHashChange){this.hashChange();
SC.Event.add(window,"hashchange",this,this.hashChange)}else{a=this;this._invokeHashChange=function(){a.hashChange();
setTimeout(a._invokeHashChange,100)};this._invokeHashChange()}}},hashChange:function(a){var b=window.location.hash;
b=(b&&b.length>0)?b.slice(1,b.length):"";if(!SC.browser.isMozilla){b=decodeURI(b)
}if(this.get("location")!==b){SC.RunLoop.begin();this.set("location",b);SC.RunLoop.end()
}},add:function(a,b,c){if(!this._didSetup){this.invokeLast(this.ping)}if(c===undefined&&SC.typeOf(b)===SC.T_FUNCTION){c=b;
b=null}else{if(SC.typeOf(c)===SC.T_STRING){c=b[c]}}if(!this._firstRoute){this._firstRoute=this._Route.create()
}this._firstRoute.add(a.split("/"),b,c);return this},locationDidChange:function(){this.trigger()
}.observes("location"),trigger:function(){var a=this._firstRoute,b=this.get("location"),d,c;
if(a){d=this._extractParametersAndRoute({route:b});b=d.route;delete d.route;delete d.params;
c=a.routeForParts(b.split("/"),d);if(c&&c.target&&c.method){c.method.call(c.target,d)
}}},_Route:SC.Object.extend({target:null,method:null,staticRoutes:null,dynamicRoutes:null,wildcardRoutes:null,add:function(c,b,e){var a,d;
c=SC.clone(c);if(!c||c.length===0){this.target=b;this.method=e}else{a=c.shift();switch(a.slice(0,1)){case":":a=a.slice(1,a.length);
if(!this.dynamicRoutes){this.dynamicRoutes={}}if(!this.dynamicRoutes[a]){this.dynamicRoutes[a]=this.constructor.create()
}d=this.dynamicRoutes[a];break;case"*":a=a.slice(1,a.length);if(!this.wildcardRoutes){this.wildcardRoutes={}
}d=this.wildcardRoutes[a]=this.constructor.create();break;default:if(!this.staticRoutes){this.staticRoutes={}
}if(!this.staticRoutes[a]){this.staticRoutes[a]=this.constructor.create()}d=this.staticRoutes[a]
}if(d){d.add(c,b,e)}}},routeForParts:function(d,e){var b,c,a;d=SC.clone(d);if(!d||d.length===0){return this.method?this:null
}else{b=d.shift();if(this.staticRoutes&&this.staticRoutes[b]){return this.staticRoutes[b].routeForParts(d,e)
}else{for(c in this.dynamicRoutes){a=this.dynamicRoutes[c].routeForParts(d,e);if(a){e[c]=b;
return a}}for(c in this.wildcardRoutes){d.unshift(b);e[c]=d.join("/");return this.wildcardRoutes[c].routeForParts(null,e)
}return null}}}})});SC.Task=SC.Object.extend({run:function(a){}});sc_require("tasks/task");
SC.TaskQueue=SC.Task.extend({runWhenIdle:NO,runLimit:50,interval:50,isRunning:NO,minimumIdleDuration:500,_tasks:[],hasTasks:function(){return this._tasks.length>0
}.property("taskCount").cacheable(),taskCount:function(){return this._tasks.length
}.property().cacheable(),push:function(a){this._tasks.push(a);this.notifyPropertyChange("taskCount")
},next:function(){if(this._tasks.length<1){return null}var a=this._tasks.shift();
this.notifyPropertyChange("taskCount");return a},_taskCountDidChange:function(){this._setupIdle()
}.observes("taskCount"),_setupIdle:function(){if(this.get("runWhenIdle")&&!this._idleIsScheduled&&this.get("taskCount")>0){var a=this;
setTimeout(function(){a._idleEntry()},this.get("interval"));this._idleIsScheduled=YES
}},_idleEntry:function(){this._idleIsScheduled=NO;var a=SC.RunLoop.lastRunLoopEnd;
if(Date.now()-a>this.get("minimumIdleDuration")){this.run()}else{SC.RunLoop.begin();
this._setupIdle();SC.RunLoop.end();SC.RunLoop.lastRunLoopEnd=a}},run:function(a){this.set("isRunning",YES);
if(!a){a=this.get("runLimit")}var b,c=Date.now();while(b=this.next()){b.run(this);
if(Date.now()-c>a){break}}this._setupIdle();this.set("isRunning",NO)}});SC.backgroundTaskQueue=SC.TaskQueue.create({runWhenIdle:YES});
SC.time=function(a){var b=SC.beget(fn);b.value=timeOffset;return b};(function(){var a=new Date();
SC.mixin(SC.time,{month:function(c,b){a.setTime(c);if(b===undefined){return a.getMonth()
}a.setMonth(b);return a.getTime()},utc:function(b){a.setTime(b);return b+(a.getTimezoneOffset()*60*1000)
},local:function(b){a.setTime(b);return b-(a.getTimezoneOffset()*60*1000)},parse:function(b){},format:function(b){}})
})();SC.time.fmt=SC.time.format;SC.time.fn={done:function(){return this.value}};"month day year".split(" ").forEach(function(a){SC.time.fn[a]=function(b){if(b===undefined){return SC.time[a](this.value)
}else{this.value=SC.time[a](this.value,b);return this}}});var MONTH_NAMES=new Array("January","February","March","April","May","June","July","August","September","October","November","December","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
var DAY_NAMES=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sun","Mon","Tue","Wed","Thu","Fri","Sat");
function LZ(a){return(a<0||a>9?"":"0")+a}SC.Locale.define("en",{longMonthNames:"January February March April May".split(" "),shortMonthNames:[],shortDateFormat:"dd/mm/yy",longDateFormat:""});
SC.mixin(Date,{isDate:function(c,b){var a=Date.getDateFromFormat(c,b);if(a==0){return false
}return true},compareDates:function(e,f,c,d){var b=Date.getDateFromFormat(e,f);var a=Date.getDateFromFormat(c,d);
if(b==0||a==0){return -1}else{if(b>a){return 1}}return 0},getDateFromFormat:function(z,q){z=z+"";
q=q+"";var w=0;var l=0;var s="";var f="";var v="";var h,g;var b=new Date();var j=b.getFullYear();
var u=b.getMonth()+1;var t=1;var d=b.getHours();var r=b.getMinutes();var n=b.getSeconds();
var k="";var o=SC.Locale.currentLocale;while(l<q.length){s=q.charAt(l);f="";while((q.charAt(l)==s)&&(l<q.length)){f+=q.charAt(l++)
}if(f=="yyyy"||f=="yy"||f=="y"){if(f=="yyyy"){h=4;g=4}if(f=="yy"){h=2;g=2}if(f=="y"){h=2;
g=4}j=Date._getInt(z,w,h,g);if(j==null){return 0}w+=j.length;if(j.length==2){if(j>70){j=1900+(j-0)
}else{j=2000+(j-0)}}}else{if(f=="MMM"||f=="NNN"){u=0;for(var p=0;p<MONTH_NAMES.length;
p++){var e=MONTH_NAMES[p];if(z.substring(w,w+e.length).toLowerCase()==e.toLowerCase()){if(f=="MMM"||(f=="NNN"&&p>11)){u=p+1;
if(u>12){u-=12}w+=e.length;break}}}if((u<1)||(u>12)){return 0}}else{if(f=="EE"||f=="E"){for(var p=0;
p<DAY_NAMES.length;p++){var m=DAY_NAMES[p];if(z.substring(w,w+m.length).toLowerCase()==m.toLowerCase()){w+=m.length;
break}}}else{if(f=="MM"||f=="M"){u=Date._getInt(z,w,f.length,2);if(u==null||(u<1)||(u>12)){return 0
}w+=u.length}else{if(f=="dd"||f=="d"){t=Date._getInt(z,w,f.length,2);if(t==null||(t<1)||(t>31)){return 0
}w+=t.length}else{if(f=="hh"||f=="h"){d=Date._getInt(z,w,f.length,2);if(d==null||(d<1)||(d>12)){return 0
}w+=d.length}else{if(f=="HH"||f=="H"){d=Date._getInt(z,w,f.length,2);if(d==null||(d<0)||(d>23)){return 0
}w+=d.length}else{if(f=="KK"||f=="K"){d=Date._getInt(z,w,f.length,2);if(d==null||(d<0)||(d>11)){return 0
}w+=d.length}else{if(f=="kk"||f=="k"){d=Date._getInt(z,w,f.length,2);if(d==null||(d<1)||(d>24)){return 0
}w+=d.length;d--}else{if(f=="mm"||f=="m"){r=Date._getInt(z,w,f.length,2);if(r==null||(r<0)||(r>59)){return 0
}w+=r.length}else{if(f=="ss"||f=="s"){n=Date._getInt(z,w,f.length,2);if(n==null||(n<0)||(n>59)){return 0
}w+=n.length}else{if(f=="a"){if(z.substring(w,w+2).toLowerCase()=="am"){k="AM"}else{if(z.substring(w,w+2).toLowerCase()=="pm"){k="PM"
}else{return 0}}w+=2}else{if(z.substring(w,w+f.length)!=f){return 0}else{w+=f.length
}}}}}}}}}}}}}}if(w!=z.length){return 0}if(u==2){if(((j%4==0)&&(j%100!=0))||(j%400==0)){if(t>29){return 0
}}else{if(t>28){return 0}}}if((u==4)||(u==6)||(u==9)||(u==11)){if(t>30){return 0}}if(d<12&&k=="PM"){d=d-0+12
}else{if(d>11&&k=="AM"){d-=12}}var a=new Date(j,u-1,t,d,r,n);return a.getTime()},parseDate:function(k){var g=(arguments.length==2)?arguments[1]:false;
generalFormats=new Array("E NNN dd HH:mm:ss UTC yyyy","y-M-d","y-M-d","MMM d, y","MMM d,y","y-MMM-d","d-MMM-y","MMM d","d MMM y","d.MMM.y","y MMM d","y.MMM.d");
monthFirst=new Array("M/d/y","M-d-y","M.d.y","MMM-d","M/d","M-d");dateFirst=new Array("d/M/y","d-M-y","d.M.y","d-MMM","d/M","d-M");
var b=new Array("generalFormats",g?"dateFirst":"monthFirst",g?"monthFirst":"dateFirst");
var h=null;h=0;var e=new Date().getTime();switch(k.toLowerCase()){case"yesterday".loc():h=e-(24*60*60*1000);
break;case"today".loc():case"now".loc():h=e;break;case"tomorrow".loc():h=e+(24*60*60*1000);
break}if(h>0){return new Date(h)}for(var f=0;f<b.length;f++){var a=window[b[f]];for(var c=0;
c<a.length;c++){h=Date.getDateFromFormat(k,a[c]);if(h==0){h=Date.getDateFromFormat(k,a[c]+" H:m:s")
}if(h==0){h=Date.getDateFromFormat(k,a[c]+" h:m:s a")}if(h!=0){return new Date(h)
}}}return null},_isInteger:function(c){var b="1234567890";for(var a=0;a<c.length;
a++){if(b.indexOf(c.charAt(a))==-1){return false}}return true},_getInt:function(f,d,e,c){for(var a=c;
a>=e;a--){var b=f.substring(d,d+a);if(b.length<e){return null}if(Date._isInteger(b)){return b
}}return null}});SC.mixin(Date.prototype,{format:function(F){F=F+"";var J=this;var n="";
var w=0;var I="";var f="";var l=J.getFullYear()+"";var g=J.getMonth()+1;var G=J.getDate();
var p=J.getDay();var o=J.getHours();var z=J.getMinutes();var r=J.getSeconds();var u,v,b,t,L,e,D,C,A,q,O,o,N,j,a,B;
var x=new Object();if(l.length<4){l=""+(l-0+1900)}x.y=""+l;x.yyyy=l;x.yy=l.substring(2,4);
x.M=g;x.MM=LZ(g);x.MMM=MONTH_NAMES[g-1];x.NNN=MONTH_NAMES[g+11];x.d=G;x.dd=LZ(G);
x.E=DAY_NAMES[p+7];x.EE=DAY_NAMES[p];x.H=o;x.HH=LZ(o);if(o==0){x.h=12}else{if(o>12){x.h=o-12
}else{x.h=o}}x.hh=LZ(x.h);if(o>11){x.K=o-12}else{x.K=o}x.k=o+1;x.KK=LZ(x.K);x.kk=LZ(x.k);
if(o>11){x.a="PM"}else{x.a="AM"}x.m=z;x.mm=LZ(z);x.s=r;x.ss=LZ(r);while(w<F.length){I=F.charAt(w);
f="";while((F.charAt(w)==I)&&(w<F.length)){f+=F.charAt(w++)}if(x[f]!=null){n=n+x[f]
}else{n=n+f}}return n},utcFormat:function(){return(new Date(this.getTime()+(this.getTimezoneOffset()*60*1000))).format("E NNN dd HH:mm:ss UTC yyyy")
}});SC.Timer=SC.Object.extend({target:null,action:null,isPooled:NO,interval:0,startTime:null,repeats:NO,until:null,isPaused:NO,isScheduled:NO,isValid:YES,lastFireTime:0,fireTime:function(){if(!this.get("isValid")){return -1
}var e=this.get("startTime");if(!e||e===0){return -1}var a=this.get("interval"),c=this.get("lastFireTime");
if(c<e){c=e}var b;if(this.get("repeats")){if(a===0){b=c}else{b=e+(Math.floor((c-e)/a)+1)*a
}}else{b=e+a}var d=this.get("until");if(d&&d>0&&b>d){b=d}return b}.property("interval","startTime","repeats","until","isValid","lastFireTime").cacheable(),schedule:function(){if(!this.get("isValid")){return this
}this.beginPropertyChanges();if(!this.startTime){this.set("startTime",SC.RunLoop.currentRunLoop.get("startTime"))
}var a=this.get("fireTime"),b=this.get("lastFireTime");if(a>=b){this.set("isScheduled",YES);
SC.RunLoop.currentRunLoop.scheduleTimer(this,a)}this.endPropertyChanges();return this
},invalidate:function(){this.beginPropertyChanges();this.set("isValid",NO);SC.RunLoop.currentRunLoop.cancelTimer(this);
this.action=this.target=null;this.endPropertyChanges();if(this.get("isPooled")){SC.Timer.returnTimerToPool(this)
}return this},fire:function(){var b=Date.now();this.set("lastFireTime",b);var a=this.get("fireTime");
if(!this.get("isPaused")){this.performAction()}if(a>b){this.schedule()}else{this.invalidate()
}},performAction:function(){var a=SC.typeOf(this.action);if(a==SC.T_FUNCTION){this.action.call((this.target||this),this)
}else{if(a===SC.T_STRING){if(this.action.indexOf(".")>=0){var e=this.action.split(".");
var c=e.pop();var d=SC.objectForPropertyPath(e,window);var b=d.get?d.get(c):d[c];
if(b&&SC.typeOf(b)==SC.T_FUNCTION){b.call(d,this)}else{throw"%@: Timer could not find a function at %@".fmt(this,this.action)
}}else{SC.RootResponder.responder.sendAction(this.action,this.target,this)}}}},init:function(){arguments.callee.base.apply(this,arguments);
if(this.startTime instanceof Date){this.startTime=this.startTime.getTime()}if(this.until instanceof Date){this.until=this.until.getTime()
}},RESET_DEFAULTS:{target:null,action:null,isPooled:NO,isPaused:NO,isScheduled:NO,isValid:YES,interval:0,repeats:NO,until:null,startTime:null,lastFireTime:0},reset:function(b){if(!b){b=SC.EMPTY_HASH
}this.propertyWillChange("fireTime");var c=this.RESET_DEFAULTS;for(var a in c){if(!c.hasOwnProperty(a)){continue
}this[a]=SC.none(b[a])?c[a]:b[a]}this.propertyDidChange("fireTime");return this},removeFromTimerQueue:function(c){var b=this._timerQueuePrevious,a=this._timerQueueNext;
if(!b&&!a&&c!==this){return c}if(b){b._timerQueueNext=a}if(a){a._timerQueuePrevious=b
}this._timerQueuePrevious=this._timerQueueNext=null;return(c===this)?a:c},scheduleInTimerQueue:function(c,b){this._timerQueueRunTime=b;
var a=c;var d=null;while(a&&a._timerQueueRunTime<b){d=a;a=a._timerQueueNext}if(d){d._timerQueueNext=this;
this._timerQueuePrevious=d}if(a){a._timerQueuePrevious=this;this._timerQueueNext=a
}return(a===c)?this:c},collectExpiredTimers:function(c,a){if(this._timerQueueRunTime>a){return this
}c.push(this);var b=this._timerQueueNext;this._timerQueueNext=null;if(b){b._timerQueuePrevious=null
}return b?b.collectExpiredTimers(c,a):null}});SC.Timer.schedule=function(a){var b;
if(!a||SC.none(a.isPooled)||a.isPooled){b=this.timerFromPool(a)}else{b=this.create(a)
}return b.schedule()};SC.Timer.timerFromPool=function(a){var b=this._timerPool;if(!b){b=this._timerPool=[]
}var c=b.pop();if(!c){c=this.create()}return c.reset(a)};SC.Timer.returnTimerToPool=function(a){if(!this._timerPool){this._timerPool=[]
}this._timerPool.push(a);return this};SC.UserDefaults=SC.Object.extend({ready:NO,userDomain:null,appDomain:null,_defaults:null,_safari3DB:null,defaults:function(a){this._defaults=a;
this.allPropertiesDidChange()},readDefault:function(h){var c=undefined,a,j,g,k,f;
h=this._normalizeKeyName(h);a=this._userKeyName(h);if(this._written){c=this._written[a]
}if(SC.browser.msie=="7.0"){j=document.body;try{j.load("SC.UserDefaults")}catch(b){console.err("Couldn't load userDefaults in IE7: "+b.description)
}}else{if(this.HTML5DB_noLocalStorage){f=this._safari3DB}else{j=window.localStorage;
if(!j&&window.globalStorage){j=window.globalStorage[window.location.hostname]}}}if(j||f){g=["SC.UserDefaults",a].join("-at-");
if(SC.browser.msie=="7.0"){c=j.getAttribute(g.replace(/\W/gi,""))}else{if(f){c=this.dataHash[g]
}else{c=j[g]}}if(!SC.none(c)){try{c=SC.json.decode(c)}catch(d){c=undefined}}else{c=undefined
}}k=this.delegate;if(k&&k.userDefaultsNeedsDefault){c=k.userDefaultsNeedsDefault(this,h,a)
}if((c===undefined)&&this._defaults){c=this._defaults[a]||this._defaults[h]}return c
},writeDefault:function(k,h){var d,b,l,j,m,g;k=this._normalizeKeyName(k);d=this._userKeyName(k);
b=this._written;if(!b){b=this._written={}}b[d]=h;if(SC.browser.msie=="7.0"){l=document.body
}else{if(this.HTML5DB_noLocalStorage){g=this._safari3DB}else{l=window.localStorage;
if(!l&&window.globalStorage){l=window.globalStorage[window.location.hostname]}}}j=["SC.UserDefaults",d].join("-at-");
if(l||g){var a=SC.json.encode(h);if(SC.browser.msie=="7.0"){l.setAttribute(j.replace(/\W/gi,""),a);
l.save("SC.UserDefaults")}else{if(g){var c=this;g.transaction(function(e){e.executeSql("delete from SCLocalStorage where key = ?",[j],function(){e.executeSql("insert into SCLocalStorage(key, value) VALUES ('"+j+"', '"+a+"');",[],c._nullDataHandler,c.killTransaction)
})});this.dataHash[j]=a}else{try{l[j]=a}catch(f){console.error("Failed using localStorage. "+f)
}}}}m=this.delegate;if(m&&m.userDefaultsDidChange){m.userDefaultsDidChange(this,k,h,d)
}return this},resetDefault:function(g){var f,a,b,d,e,c;f=this._normalizeKeyName(g);
a=this._userKeyName(f);this.propertyWillChange(g);this.propertyWillChange(f);b=this._written;
if(b){delete b[a]}if(SC.browser.msie=="7.0"){d=document.body}else{if(this.HTML5DB_noLocalStorage){c=this._safari3DB
}else{d=window.localStorage;if(!d&&window.globalStorage){d=window.globalStorage[window.location.hostname]
}}}e=["SC.UserDefaults",a].join("-at-");if(d){if(SC.browser.msie=="7.0"){d.setAttribute(e.replace(/\W/gi,""),null);
d.save("SC.UserDefaults")}else{if(c){var h=this;c.transaction(function(j){j.executeSql("delete from SCLocalStorage where key = ?",[e],null)
});delete this.dataHash[e]}else{delete d[e]}}}this.propertyDidChange(g);this.propertyDidChange(f);
return this},unknownProperty:function(a,b){if(b===undefined){return this.readDefault(a)
}else{this.writeDefault(a,b);return b}},_normalizeKeyName:function(a){if(a.indexOf(":")<0){var b=this.get("appDomain")||"app";
a=[b,a].join(":")}return a},_userKeyName:function(b){var a=this.get("userDomain")||"(anonymous)";
return[a,b].join("-at-")},_domainDidChange:function(){var a=NO;if(this.get("userDomain")!==this._scud_userDomain){this._scud_userDomain=this.get("userDomain");
a=YES}if(this.get("appDomain")!==this._scud_appDomain){this._scud_appDomain=this.get("appDomain");
a=YES}if(a){this.allPropertiesDidChange()}}.observes("userDomain","appDomain"),init:function(){arguments.callee.base.apply(this,arguments);
if(SC.userDefaults&&SC.userDefaults.get("dataHash")){var f=SC.userDefaults.get("dataHash");
if(f){this.dataHash=SC.userDefaults.get("dataHash")}}this._scud_userDomain=this.get("userDomain");
this._scud_appDomain=this.get("appDomain");if(SC.browser.msie=="7.0"){document.body.addBehavior("#default#userData")
}this.HTML5DB_noLocalStorage=((parseInt(SC.browser.safari,0)>523)&&(parseInt(SC.browser.safari,0)<528));
if(this.HTML5DB_noLocalStorage){var d;try{if(!window.openDatabase){console.error("Trying to load a database with safari version 3.1 to get SC.UserDefaults to work. You are either in a previous version or there is a problem with your browser.");
return}else{var a="scdb",c="1.0",b="SproutCore database",j=65536;d=openDatabase(a,c,b,j)
}}catch(h){console.error("Trying to load a database with safari version 3.1 to get SC.UserDefaults to work. You are either in a previous version or there is a problem with your browser.");
return}if(d){var g=this;d.transaction(function(e){e.executeSql("CREATE TABLE IF NOT EXISTS SCLocalStorage(key TEXT NOT NULL PRIMARY KEY, value TEXT NOT NULL);",[],g._nullDataHandler,g.killTransaction)
});d.transaction(function(e){e.parent=g;e.executeSql("SELECT * from SCLocalStorage;",[],function(p,m){var n={},o;
for(var l=0,k=m.rows.length;l<k;l++){o=m.rows.item(l);n[o.key]=o.value}p.parent.dataHash=n;
SC.run(function(){SC.userDefaults.set("ready",YES)})},g.killTransaction)});this._safari3DB=d
}}else{this.set("ready",YES)}},_killTransaction:function(b,a){return true},_nullDataHandler:function(b,a){},readyCallback:function(a,b){this.func=b;
this.ob=a},readyChanged:function(){if(this.ready===YES){var a=this.func;if(a){a.apply(this.ob)
}}}.observes("ready")});SC.userDefaults=SC.UserDefaults.create();sc_require("system/browser");
SC.mixin({_downloadFrames:0,_copy_computed_props:["maxWidth","maxHeight","paddingLeft","paddingRight","paddingTop","paddingBottom","fontFamily","fontSize","fontStyle","fontWeight","fontVariant","lineHeight","whiteSpace"],download:function(e){var a=document.createElement("iframe"),d="DownloadFrame_"+this._downloadFrames;
SC.$(a).attr("id",d);a.style.border="10px";a.style.width="0px";a.style.height="0px";
a.style.position="absolute";a.style.top="-10000px";a.style.left="-10000px";if(!SC.browser.isSafari){SC.$(a).attr("src",e)
}document.getElementsByTagName("body")[0].appendChild(a);if(SC.browser.isSafari){SC.$(a).attr("src",e)
}this._downloadFrames=this._downloadFrames+1;if(!SC.browser.isSafari){var c=function(){document.body.removeChild(document.getElementById(d));
d=null};var b=c.invokeLater(null,2000)}a=null},normalizeURL:function(a){if(a.slice(0,1)=="/"){a=window.location.protocol+"//"+window.location.host+a
}else{if((a.slice(0,5)=="http:")||(a.slice(0,6)=="https:")){}else{a=window.location.href+"/"+a
}}return a},isPercentage:function(a){return(a<1&&a>0)},minX:function(a){return a.x||0
},maxX:function(a){return(a.x||0)+(a.width||0)},midX:function(a){return(a.x||0)+((a.width||0)/2)
},minY:function(a){return a.y||0},maxY:function(a){return(a.y||0)+(a.height||0)},midY:function(a){return(a.y||0)+((a.height||0)/2)
},centerX:function(b,a){return(a.width-b.width)/2},centerY:function(b,a){return(a.height-b.height)/2
},pointInRect:function(a,b){return(a.x>=SC.minX(b))&&(a.y>=SC.minY(b))&&(a.x<=SC.maxX(b))&&(a.y<=SC.maxY(b))
},rectsEqual:function(b,a,c){if(!b||!a){return(b==a)}if(!c&&c!==0){c=0.1}if((b.y!=a.y)&&(Math.abs(b.y-a.y)>c)){return NO
}if((b.x!=a.x)&&(Math.abs(b.x-a.x)>c)){return NO}if((b.width!=a.width)&&(Math.abs(b.width-a.width)>c)){return NO
}if((b.height!=a.height)&&(Math.abs(b.height-a.height)>c)){return NO}return YES},intersectRects:function(b,a){var c={x:Math.max(SC.minX(b),SC.minX(a)),y:Math.max(SC.minY(b),SC.minY(a)),width:Math.min(SC.maxX(b),SC.maxX(a)),height:Math.min(SC.maxY(b),SC.maxY(a))};
c.width=Math.max(0,c.width-c.x);c.height=Math.max(0,c.height-c.y);return c},unionRects:function(b,a){var c={x:Math.min(SC.minX(b),SC.minX(a)),y:Math.min(SC.minY(b),SC.minY(a)),width:Math.max(SC.maxX(b),SC.maxX(a)),height:Math.max(SC.maxY(b),SC.maxY(a))};
c.width=Math.max(0,c.width-c.x);c.height=Math.max(0,c.height-c.y);return c},cloneRect:function(a){return{x:a.x,y:a.y,width:a.width,height:a.height}
},stringFromRect:function(a){if(!a){return"(null)"}else{return"{x:"+a.x+", y:"+a.y+", width:"+a.width+", height:"+a.height+"}"
}},stringFromLayout:function(e){var d=["maxHeight","maxWidth","minHeight","minWidth","centerY","centerX","width","height","bottom","right","top","left"],a=[],c,b=d.length;
while(--b>=0){c=d[b];if(e.hasOwnProperty(c)){a.push(c+":"+e[c])}}return"{"+a.join(", ")+"}"
},heightForString:function(h,e,d,g){var f=this._heightCalcElement,c,a;c=(g&&SC.typeOf(g)===SC.T_ARRAY)?g.join(" "):"";
if(!e){e=100}if(!f){f=this._heightCalcElement=document.createElement("div");document.body.insertBefore(f,null)
}d=d+"; width: "+e+"px; left: "+(-1*e)+"px; position: absolute";var b=SC.$(f);b.attr("style",d);
if(c!==""){b.attr("class",c)}f.innerHTML=h;a=f.clientHeight;f=null;return a},prepareStringMeasurement:function(m,a){var j=this._metricsCalculationElement,g,n,c;
g=SC.A(a).join(" ");if(!j){j=this._metricsCalculationElement=document.createElement("div");
document.body.insertBefore(j,null)}if(SC.typeOf(m)!=SC.T_STRING){var f=null;if(document.defaultView&&document.defaultView.getComputedStyle){f=document.defaultView.getComputedStyle(m,null)
}else{f=m.currentStyle}c=f.cssText;if(!c||c.trim()===""){var l=this._copy_computed_props;
for(var h=0;h<l.length;h++){var b=l[h],e=f[b];j.style[b]=e}var k=j.style;if(k.font===""){var d="";
if(k.fontStyle){d+=k.fontStyle+" "}if(k.fontVariant){d+=k.fontVariant+" "}if(k.fontWeight){d+=k.fontWeight+" "
}if(k.fontSize){d+=k.fontSize}else{d+="10px"}if(k.lineHeight){d+="/"+k.lineHeight
}d+=" ";if(k.fontFamily){d+=k.fontFamily}else{k+="sans-serif"}j.style.font=d}SC.mixin(j.style,{left:"0px",top:"0px",position:"absolute",bottom:"auto",right:"auto",width:"auto",height:"auto"})
}else{j.setAttribute("style",c+"; position:absolute; left: 0px; top: 0px; bottom: auto; right: auto; width: auto; height: auto;")
}f=null}else{c=m;j.setAttribute("style",c+"; position:absolute; left: 0px; top: 0px; bottom: auto; right: auto; width: auto; height: auto;")
}j.className=g;j=null},teardownStringMeasurement:function(){var a=this._metricsCalculationElement;
a.innerHTML="";a.className="";a.setAttribute("style","");a=null},measureString:function(b){var c=this._metricsCalculationElement;
if(!c){throw"measureString requires a string measurement environment to be set up. Did you mean metricsForString?"
}if(typeof c.innerText!="undefined"){c.innerText=b}else{c.textContent=b}var a={width:c.clientWidth,height:c.clientHeight};
c=null;return a},metricsForString:function(b,c,d){SC.prepareStringMeasurement(c,d);
var a=SC.measureString(b);SC.teardownStringMeasurement();return a},viewportOffset:function(c){if(c.getBoundingClientRect){var d=c.getBoundingClientRect();
return{x:d.left,y:d.top}}var j=0,e=0,k,g,f,l,b,h=c,a=SC.browser.mozilla>=3;while(h){k=SC.$(h);
e+=(h.offsetTop||0);if(!a||(h!==c)){e+=(h.clientTop||0)}j+=(h.offsetLeft||0);if(!a||(h!==c)){j+=(h.clientLeft||0)
}if(SC.browser.mozilla){g=k.attr("overflow");if(g!=="visible"){f=parseInt(k.attr("borderLeftWidth"),0)||0;
l=parseInt(k.attr("borderTopWidth"),0)||0;if(c!==h){f*=2;l*=2}j+=f;e+=l}b=h.offsetParent;
if(SC.browser.mozilla.match(/1[.]9/)&&b){e-=b.clientTop;j-=b.clientLeft}}if(h.offsetParent==document.body&&k.attr("position")==="absolute"){break
}h=h.offsetParent}h=c;while(h){if(!SC.browser.isOpera||h.tagName==="BODY"){e-=h.scrollTop||0;
j-=h.scrollLeft||0}h=h.parentNode}return{x:j,y:e}},ZERO_POINT:{x:0,y:0},ZERO_RANGE:{start:0,length:0},RANGE_NOT_FOUND:{start:0,length:-1},valueInRange:function(b,a){return(b>=0)&&(b>=a.start)&&(b<(a.start+a.length))
},minRange:function(a){return a.start},maxRange:function(a){return(a.length<0)?-1:(a.start+a.length)
},unionRanges:function(c,b){if((c==null)||(c.length<0)){return b}if((b==null)||(b.length<0)){return c
}var d=Math.min(c.start,b.start),a=Math.max(SC.maxRange(c),SC.maxRange(b));return{start:d,length:a-d}
},intersectRanges:function(c,b){if((c==null)||(b==null)){return SC.RANGE_NOT_FOUND
}if((c.length<0)||(b.length<0)){return SC.RANGE_NOT_FOUND}var d=Math.max(SC.minRange(c),SC.minRange(b)),a=Math.min(SC.maxRange(c),SC.maxRange(b));
if(a<d){return SC.RANGE_NOT_FOUND}return{start:d,length:a-d}},subtractRanges:function(c,b){if((c==null)||(b==null)){return SC.RANGE_NOT_FOUND
}if((c.length<0)||(b.length<0)){return SC.RANGE_NOT_FOUND}var a=Math.max(SC.minRange(c),SC.minRange(b)),d=Math.min(SC.maxRange(c),SC.maxRange(b));
if(a<d){return SC.RANGE_NOT_FOUND}return{start:d,length:a-d}},cloneRange:function(a){return{start:a.start,length:a.length}
},rangesEqual:function(b,a){if(b===a){return true}if(b==null){return a.length<0}if(a==null){return b.length<0
}return(b.start==a.start)&&(b.length==a.length)},convertHsvToHex:function(j,w,o){var a=0,k=0,n=0;
if(o>0){var e=(j==1)?0:Math.floor(j*6),l=(j==1)?0:(j*6)-e,d=o*(1-w),c=o*(1-(w*l)),u=o*(1-(w*(1-l))),m=[[o,u,d],[c,o,d],[d,o,u],[d,c,o],[u,d,o],[o,d,c]];
a=Math.round(255*m[e][0]);k=Math.round(255*m[e][1]);n=Math.round(255*m[e][2])}return this.parseColor("rgb("+a+","+k+","+n+")")
},convertHexToHsv:function(g){var c=this.expandColor(g),a=Math.max(Math.max(c[0],c[1]),c[2]),d=Math.min(Math.min(c[0],c[1]),c[2]);
var f=(a==d)?0:((a==c[0])?((c[1]-c[2])/(a-d)/6):((a==c[1])?((c[2]-c[0])/(a-d)/6+1/3):((c[0]-c[1])/(a-d)/6+2/3)));
f=(f<0)?(f+1):((f>1)?(f-1):f);var e=(a===0)?0:(1-d/a);var b=a/255;return[f,e,b]},PARSE_COLOR_RGBRE:/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i,PARSE_COLOR_HEXRE:/^\#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,expandColor:function(b){var c,e,d,a;
c=this.parseColor(b);if(c){e=parseInt(c.slice(1,3),16);d=parseInt(c.slice(3,5),16);
a=parseInt(c.slice(5,7),16);return[e,d,a]}},parseColor:function(d){var e=0,a="#",c;
if(c=this.PARSE_COLOR_RGBRE.exec(d)){var b;for(e=1;e<=3;e++){b=Math.max(0,Math.min(255,parseInt(c[e],0)));
a+=this.toColorPart(b)}return a}if(c=this.PARSE_COLOR_HEXRE.exec(d)){if(c[1].length==3){for(e=0;
e<3;e++){a+=c[1].charAt(e)+c[1].charAt(e)}return a}return"#"+c[1]}return false},toColorPart:function(a){if(a>255){a=255
}var b=a.toString(16);if(a<16){return"0"+b}return b},getStyle:function(a,b){var c="";
if(document.defaultView&&document.defaultView.getComputedStyle){c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b)
}else{if(a.currentStyle){b=b.replace(/\-(\w)/g,function(d,e){return e.toUpperCase()
});c=a.currentStyle[b]}}return c},uniJapaneseConvert:function(d){var a,c="",b;for(b=0;
b<d.length;b++){a=d.charCodeAt(b);a=((a>=65281&&a<=65392)?a-65248:a);a=(a===12540?45:a);
c=c+String.fromCharCode(a)}return c}});require("tasks/task");SC.didPreloadBundle=function(){};
SC.PreloadBundleTask=SC.Task.extend({bundle:null,target:"SC",action:"preloaded",run:function(a){var b;
if(b=this.get("bundle")){var c=Date.now();SC.loadBundle(this.get("bundle"),this.get("target"),this.get("action"))
}}});SC.VALIDATE_OK=YES;SC.VALIDATE_NO_CHANGE=NO;SC.Validator=SC.Object.extend({fieldValueForObject:function(b,c,a){return b
},objectForFieldValue:function(c,b,a){return c},validate:function(a,b){return true
},validateError:function(a,b){return SC.$error("Invalid.General(%@)".loc(b.get("fieldValue")),b.get("fieldKey"))
},validateChange:function(b,c,a){return this.validate(b,c)?SC.VALIDATE_OK:this.validateError(b,c)
},validateSubmit:function(a,b){return this.validate(a,b)?SC.VALIDATE_OK:this.validateError(a,b)
},validatePartial:function(a,b){if(!b.get("isValid")){return this.validate(a,b)?SC.VALIDATE_OK:this.validateError(a,b)
}else{return SC.VALIDATE_NO_CHANGE}},validateKeyDown:function(b,c,a){return true},attachTo:function(a,b){},detachFrom:function(a,b){}});
SC.Validator.mixin({OK:true,NO_CHANGE:false,findFor:function(e,g,f){var c;if(!f){return
}if(f instanceof SC.Validator){c=f}else{if(f.isClass){c=f.create()}else{if(SC.typeOf(f)===SC.T_STRING){var b=null;
var a=f.match(/^(.+)\[(.*)\]/);if(a){f=a[1];b=a[2]}f=f.classify();var d=SC.Validator[f];
if(SC.none(d)){throw"validator %@ not found for %@".fmt(f,g)}else{if(b){if(!e){throw"named validator (%@) could not be found for field %@ because the field does not belong to a form".fmt(b,g)
}if(!e._validatorHash){e._validatorHash={}}c=(b)?e._validatorHash[b]:null;if(!c){c=d.create()
}if(b){e._validatorHash[b]=c}}else{c=d.create()}}}}}return c},fieldValueForObject:function(a,b,c){if(this.prototype&&this.prototype.fieldValueForObject){return this.prototype.fieldValueForObject(a,b,c)
}else{return null}},objectForFieldValue:function(b,a,c){if(this.prototype&&this.prototype.objectForFieldValue){return this.prototype.objectForFieldValue(b,a,c)
}else{return null}}});sc_require("validators/validator");SC.Validator.CreditCard=SC.Validator.extend({fieldValueForObject:function(a,b,c){if(typeof(a)=="string"&&a.length==16){a=[a.slice(0,4),a.slice(4,8),a.slice(8,12),a.slice(12,16)].join(" ")
}return a},objectForFieldValue:function(b,a,c){return b.replace(/[\s-\.\:]/g,"")},validate:function(a,b){return this.checkNumber(b.get("fieldValue"))
},validateError:function(b,c){var a=c.get("errorLabel")||"Field";return SC.$error("Invalid.CreditCard(%@)".loc(a),a)
},validateKeyDown:function(b,c,a){return !!a.match(/[0-9\- ]/)},checkNumber:function(h){if(!h||h.length===0){return YES
}h=h.replace(/[^0-9]/g,"");var a="0123456789";var g=h.length;var f=parseInt(h,0);
var l=h.toString();l=l.replace(/^\s+|\s+$/g,"");var k=0;var n=true;var b=false;var m;
var d;for(var c=0;c<g;c++){m=""+l.substring(c,c+1);if(a.indexOf(m)=="-1"){n=false
}}if(!n){b=false}if((g===0)&&(b)){b=false}else{if(g>=15){for(var e=g;e>0;e--){d=parseInt(f,0)%10;
d=parseInt(d,0);k+=d;e--;f=f/10;d=parseInt(f,0)%10;d=d*2;switch(d){case 10:d=1;break;
case 12:d=3;break;case 14:d=5;break;case 16:d=7;break;case 18:d=9;break;default:d=d
}f=f/10;k+=d}if((k%10)===0){b=true}else{b=false}}}return b}});sc_require("validators/validator");
SC.Validator.Date=SC.Validator.extend({format:"NNN d, yyyy h:mm:ss a",fieldValueForObject:function(b,c,d){var a;
if(typeof(b)==="number"){a=new Date(b)}else{if(b instanceof Date){a=b}}if(a){b=a.format(this.get("format"))
}return b},objectForFieldValue:function(c,b,d){if(c){var a=Date.parseDate(c);c=(a)?a.getTime():null
}return c}});SC.Validator.DateTime=SC.Validator.extend({format:"%d/%m/%Y",fieldValueForObject:function(a,b,c){if(SC.kindOf(a,SC.DateTime)){a=a.toFormattedString(this.get("format"))
}else{a=null}return a},objectForFieldValue:function(b,a,c){if(b){b=SC.DateTime.parse(b,this.get("format"))
}return b}});sc_require("validators/validator");SC.Validator.Email=SC.Validator.extend({validate:function(a,b){return(b.get("fieldValue")||"").match(/.+@.+\...+/)
},validateError:function(b,c){var a=c.get("errorLabel")||"Field";return SC.$error("Invalid.Email(%@)".loc(a),a)
}});SC.Validator.EmailOrEmpty=SC.Validator.Email.extend({validate:function(a,c){var b=c.get("fieldValue");
return(b&&b.length>0)?b.match(/.+@.+\...+/):true}});sc_require("validators/validator");
SC.Validator.NotEmpty=SC.Validator.extend({validate:function(b,d){var c=d.get("fieldValue");
var a=!!c;if(a&&c.length){a=c.length>0}return a},validateError:function(b,c){var a=c.get("errorLabel")||"Field";
return SC.$error("Invalid.NotEmpty(%@)".loc(a.capitalize()),c.get("errorLabel"))}});
sc_require("validators/validator");SC.Validator.Number=SC.Validator.extend({places:0,fieldValueForObject:function(a,b,c){switch(SC.typeOf(a)){case SC.T_NUMBER:a=a.toFixed(this.get("places"));
break;case SC.T_NULL:case SC.T_UNDEFINED:a="";break}return a},objectForFieldValue:function(c,b,d){var a;
c=c.replace(/,/g,"");switch(SC.typeOf(c)){case SC.T_STRING:if(c.length===0){c=null
}else{if(this.get("places")>0){c=parseFloat(c)}else{if(c.length==1&&c.match(/-/)){c=null
}else{a=parseInt(c,0);if(isNaN(a)){c=SC.uniJapaneseConvert(c);c=parseInt(c,0);if(isNaN(c)){c=""
}}else{c=a}}}}break;case SC.T_NULL:case SC.T_UNDEFINED:c=null;break}return c},validate:function(a,c){var b=c.get("fieldValue");
return(b==="")||!(isNaN(b)||isNaN(parseFloat(b)))},validateError:function(b,c){var a=c.get("errorLabel")||"Field";
return SC.$error("Invalid.Number(%@)".loc(a),a)},validateKeyDown:function(b,c,a){var d=c.$input().val();
if(!d){d=""}d+=a;if(this.get("places")===0){if(a.length===0){return true}else{return d.match(/^[\-{0,1}]?[0-9,\0]*/)[0]===d
}}else{if(a.length===0){return true}else{return d.match(/^[\-{0,1}]?[0-9,\0]*\.?[0-9\0]+/)===d
}}}});sc_require("validators/validator");SC.Validator.Password=SC.Validator.extend({attachTo:function(a,b){arguments.callee.base.apply(this,arguments);
if(!this.fields){this.fields=[]}this.fields.push(b)},validate:function(e){if(!this.fields||this.fields.length===0){return true
}var d=false;var b=false;var a=true;var c=this.fields[0].get("fieldValue");this.fields.forEach(function(g){var f=g.get("fieldValue");
if(f!=c){a=false}if(!f||f.length===0){d=true}if(f&&f.length>0){b=true}});if(e){return(b===false)?false:a
}else{return(d===true)?true:a}},updateFields:function(c,b){if(!this.fields||this.fields.length===0){return true
}var a="Invalid.Password".loc();var d=this._field;this.fields.forEach(function(e){var g=(b)?null:((e==d)?a:"");
c.setErrorFor(e,g)});return(b)?SC.VALIDATE_OK:a},validateChange:function(b,c,a){return this.updateFields(b,this.validate(false))
},validateSubmit:function(a,b){return this.updateFields(a,this.validate(true))},validatePartial:function(b,c){var a=!this._field.get("isValid");
if(a){return this.updateFields(b,this.validate(false))}else{return SC.VALIDATE_NO_CHANGE
}}});sc_require("validators/validator");SC.Validator.PositiveInteger=SC.Validator.extend({defaultValue:null,fieldValueForObject:function(a,b,c){switch(SC.typeOf(a)){case SC.T_NUMBER:a=a.toFixed(0);
break;case SC.T_NULL:case SC.T_UNDEFINED:a=this.get("defaultValue");break}return a
},objectForFieldValue:function(b,a,c){b=b.replace(/,/g,"");switch(SC.typeOf(b)){case SC.T_STRING:if(b.length===0){b=this.get("defaultValue")
}else{b=parseInt(b,0)}break;case SC.T_NULL:case SC.T_UNDEFINED:b=this.get("defaultValue");
break}return b},validate:function(a,c){var b=c.get("fieldValue");return(b==="")||!isNaN(b)
},validateError:function(b,c){var a=c.get("errorLabel")||"Field";return SC.$error("Invalid.Number(%@)".loc(a),a)
},validateKeyDown:function(b,c,a){var d=c.$input().val();if(!d){d=""}d+=a;if(a.length===0){return true
}else{return d.match(/^[0-9\0]*/)[0]===d}}});sc_require("views/view");SC.ContainerView=SC.View.extend({classNames:["sc-container-view"],nowShowing:null,contentView:null,contentViewBindingDefault:SC.Binding.single(),replaceContent:function(a){this.removeAllChildren();
if(a){this.appendChild(a)}},createChildViews:function(){var a=this.get("contentView");
if(a){a=this.contentView=this.createChildView(a);this.childViews=[a]}},awake:function(){arguments.callee.base.apply(this,arguments);
var a=this.get("nowShowing");if(a&&a.length>0){this.nowShowingDidChange()}},nowShowingDidChange:function(){var a=this.get("nowShowing");
if(a===SC.CONTENT_SET_DIRECTLY){return}if(SC.typeOf(a)===SC.T_STRING&&a.length>0){if(a.indexOf(".")>0){a=SC.objectForPropertyPath(a)
}else{a=SC.objectForPropertyPath(a,this.get("page"))}}if(SC.typeOf(a)===SC.T_CLASS){if(a.kindOf(SC.View)){a=a.create()
}else{a=null}}if(a&&!(a instanceof SC.View)){a=null}this.set("contentView",a)}.observes("nowShowing"),contentViewDidChange:function(){this.replaceContent(this.get("contentView"))
}.observes("contentView")});sc_require("views/view");sc_require("mixins/control");
SC.IMAGE_STATE_NONE="none";SC.IMAGE_STATE_LOADING="loading";SC.IMAGE_STATE_LOADED="loaded";
SC.IMAGE_STATE_FAILED="failed";SC.IMAGE_STATE_SPRITE="sprite";SC.BLANK_IMAGE_DATAURL="data:image/gif;base64,R0lGODlhAQABAJAAAP///wAAACH5BAUQAAAALAAAAAABAAEAAAICBAEAOw==";
SC.BLANK_IMAGE_URL=SC.browser.msie&&SC.browser.msie<8?"/static/sproutcore/foundation/es/8da2f2e6ca3e0fc087fc50fd57fa316c970e07c0/blank.gif":SC.BLANK_IMAGE_DATAURL;
SC.ImageView=SC.View.extend(SC.Control,{classNames:"sc-image-view",tagName:"img",status:SC.IMAGE_STATE_NONE,value:null,useImageCache:YES,canLoadInBackground:NO,localize:YES,displayProperties:"status toolTip".w(),render:function(c,f){var a=this.get("status"),d=this.get("value");
if(a===SC.IMAGE_STATE_NONE&&d){this._image_valueDidChange()}a=this.get("status");
var e=(a===SC.IMAGE_STATE_LOADED)?d:SC.BLANK_IMAGE_URL;if(a===SC.IMAGE_STATE_SPRITE){c.addClass(d)
}c.attr("src",e);var b=this.get("toolTip");if(SC.typeOf(b)===SC.T_STRING){if(this.get("localize")){b=b.loc()
}c.attr("title",b);c.attr("alt",b)}},_image_valueDidChange:function(){var b=this.get("value"),c;
if(b&&b.isEnumerable){b=b.firstObject()}c=SC.ImageView.valueIsUrl(b);if(c&&this.get("useImageCache")){var a=this.get("isVisibleInWindow")||this.get("canLoadInBackground");
this._loadingUrl=b;SC.imageCache.loadImage(b,this,this.imageDidLoad,a);if(this._loadingUrl){this.set("status",SC.IMAGE_STATE_LOADING)
}}else{this._loadingUrl=null;this.set("status",(c)?SC.IMAGE_STATE_LOADED:SC.IMAGE_STATE_SPRITE);
this.displayDidChange()}}.observes("value"),imageDidLoad:function(a,b){if(a===this._loadingUrl){this._loadingUrl=null
}if(this.get("value")===a){this.set("status",SC.$ok(b)?SC.IMAGE_STATE_LOADED:SC.IMAGE_STATE_FAILED);
this.displayDidChange()}}});SC.ImageView.valueIsUrl=function(a){return a?a.indexOf("/")>=0:NO
};sc_require("views/view");sc_require("mixins/control");SC.REGULAR_WEIGHT="normal";
SC.BOLD_WEIGHT="bold";SC.LabelView=SC.View.extend(SC.Control,{classNames:["sc-label-view"],fontWeight:SC.REGULAR_WEIGHT,escapeHTML:true,escapeHTMLBindingDefault:SC.Binding.oneWay().bool(),localize:false,localizeBindingDefault:SC.Binding.oneWay().bool(),formatter:null,value:"",hint:null,exampleInlineTextFieldView:SC.InlineTextFieldView,icon:null,textAlign:SC.ALIGN_LEFT,isInlineEditorMultiline:NO,displayValue:function(){var g,e;
g=this.get("value");e=this.getDelegateProperty("formatter",this.displayDelegate);
if(e){var f=(SC.typeOf(e)===SC.T_FUNCTION)?e(g,this):e.fieldValueForObject(g,this);
if(!SC.none(f)){g=f}}if(SC.typeOf(g)===SC.T_ARRAY){var d=[];for(var b=0,c=g.get("length");
b<c;b++){var a=g.objectAt(b);if(!SC.none(a)&&a.toString){a=a.toString()}d.push(a)
}g=d.join(",")}if(!SC.none(g)&&g.toString){g=g.toString()}if(g&&this.getDelegateProperty("localize",this.displayDelegate)){g=g.loc()
}if(this.get("escapeHTML")){g=SC.RenderContext.escapeHTML(g)}return g}.property("value","localize","formatter","escapeHTML").cacheable(),hintValue:function(){var a=this.get("hint");
if(this.get("escapeHTML")){a=SC.RenderContext.escapeHTML(a)}return a}.property("hint","escapeHTML").cacheable(),isEditable:NO,isEditableBindingDefault:SC.Binding.bool(),isEditing:NO,validator:null,doubleClick:function(a){return this.beginEditing()
},beginEditing:function(){if(this.get("isEditing")){return YES}if(!this.get("isEditable")){return NO
}var b=this.$(),d=this.get("value")||"",c=SC.viewportOffset(b[0]),a=this.convertFrameFromView(this.get("frame"),null);
c.width=a.width;c.height=a.height;SC.InlineTextFieldView.beginEditing({frame:c,delegate:this,exampleElement:b,value:d,multiline:this.get("isInlineEditorMultiline"),isCollection:NO,validator:this.get("validator"),exampleInlineTextFieldView:this.get("exampleInlineTextFieldView")})
},discardEditing:function(){if(!this.get("isEditing")){return YES}return SC.InlineTextFieldView.discardEditing()
},commitEditing:function(){if(!this.get("isEditing")){return YES}return SC.InlineTextFieldView.commitEditing()
},inlineEditorShouldBeginEditing:function(a){return YES},inlineEditorWillBeginEditing:function(a){this.set("isEditing",YES)
},inlineEditorDidBeginEditing:function(b){var a=this.$();this._oldOpacity=a.css("opacity");
a.css("opacity",0)},inlineEditorShouldBeginEditing:function(){return this.get("isEditable")
},inlineEditorShouldEndEditing:function(a,b){return YES},inlineEditorDidEndEditing:function(a,b){this.setIfChanged("value",b);
this.$().css("opacity",this._oldOpacity);this._oldOpacity=null;this.set("isEditing",NO)
},displayProperties:"displayValue textAlign fontWeight icon".w(),_TEMPORARY_CLASS_HASH:{},createRenderer:function(a){return a.label()
},updateRenderer:function(a){a.attr({value:this.get("displayValue"),icon:this.get("icon"),hint:this.get("hint"),escapeHTML:this.get("escapeHTML"),isEditing:this.get("isEditing"),textAlign:this.get("textAlign"),fontWeight:this.get("fontWeight")})
}});require("panes/pane");SC.MainPane=SC.Pane.extend({layout:{left:0,right:0,top:0,bottom:0},paneDidAttach:function(){var b=arguments.callee.base.apply(this,arguments);
var a=this.rootResponder;a.makeMainPane(this);if(!a.get("keyRootView")){a.makeKeyPane(this)
}return b},acceptsKeyPane:YES,classNames:["sc-main"]});if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/foundation")
}SC.stringsFor("English",{"Invalid.CreditCard(%@)":"%@ is not a valid credit card number","Invalid.Email(%@)":"%@ is not a valid email address","Invalid.NotEmpty(%@)":"%@ must not be empty","Invalid.Password":"Your passwords do not match.  Please try typing them again.","Invalid.General(%@)":"%@ is invalid.  Please try again.","Invalid.Number(%@)":"%@ is not a number."});
SC.allowsBackspaceToPreviousPage=NO;SC.BORDER_BEZEL="sc-bezel-border";SC.BORDER_BLACK="sc-black-border";
SC.BORDER_GRAY="sc-gray-border";SC.BORDER_TOP="sc-top-border";SC.BORDER_BOTTOM="sc-bottom-border";
SC.BORDER_NONE=null;SC.Border={borderTop:0,borderRight:0,borderBottom:0,borderLeft:0,borderStyle:SC.BORDER_GRAY,hasBorder:YES,displayProperties:["borderStyle"],_BORDER_REGEXP:(/-border$/),initMixin:function(){this._sc_border_borderStyleDidChange()
},renderMixin:function(a,c){var b=this.get("borderStyle");if(b){if(this._BORDER_REGEXP.exec(b)){a.addClass(b)
}else{a.addStyle("border","1px "+b+" solid")}}},_sc_border_borderStyleDidChange:function(){var a=this.get("borderStyle"),b=SC.Border.dimensions[a];
if(b){this.borderTop=b;this.borderRight=b;this.borderBottom=b;this.borderLeft=b}}};
SC.mixin(SC.Border,{dimensions:{"sc-bezel-border":1,"sc-black-border":1,"sc-gray-border":1,"sc-top-border":1,"sc-bottom-border":1}});
SC.CollectionFastPath={initMixin:function(){this._indexMap={}},poolForExampleView:function(a){var b="_pool_"+SC.guidFor(a);
if(!this[b]){this[b]=[]}return this[b]},createItemViewFromExampleView:function(c,b){var a=c.create(b);
if(a.isPoolable){a.owningPool=this.poolForExampleView(c)}a.createdFromExampleView=c;
return a},configureItemView:function(b,a){b.beginPropertyChanges();b.setIfChanged("content",a.content);
b.setIfChanged("contentIndex",a.contentIndex);b.setIfChanged("parentView",a.parentView);
b.setIfChanged("layerId",a.layerId);b.setIfChanged("isEnabled",a.isEnabled);b.setIfChanged("isSelected",a.isSelected);
b.setIfChanged("outlineLevel",a.outlineLevel);b.setIfChanged("layout",a.layout);b.setIfChanged("disclosureState",a.disclosureState);
b.setIfChanged("isVisibleInWindow",a.isVisibleInWindow);b.setIfChanged("isGroupView",a.isGroupView);
b.setIfChanged("page",this.page);b.endPropertyChanges()},wakePooledView:function(b,a){this.configureItemView(b,a);
if(b.awakeFromPool){b.awakeFromPool(b.owningPool,this)}},allocateItemView:function(d,b){var a;
if(d.prototype.isPoolable){var c=this.poolForExampleView(d);if(c.length>0){a=c.pop();
this.wakePooledView(a,b)}}if(!a){a=this.createItemViewFromExampleView(d,b)}return a
},releaseItemView:function(b){if(!b.isPoolable){b.destroy();return}var a=b.owningPool;
a.push(b);if(b.hibernateInPool){b.hibernateInPool(a,this)}},contentIndexIsGroup:function(b,d){var c=this.get("contentDelegate");
var a=this.get("_contentGroupIndexes"),e=NO;e=a&&a.contains(b);if(e){e=c.contentIndexIsGroup(this,this.get("content"),b)
}return e},exampleViewForItem:function(f,d){var b=this.get("contentDelegate"),c=this.get("_contentGroupIndexes"),e,a,g=this.contentIndexIsGroup(d,f);
if(g){e=this.get("contentGroupExampleViewKey");if(e&&f){a=f.get(e)}if(!a){a=this.get("groupExampleView")||this.get("exampleView")
}}else{e=this.get("contentExampleViewKey");if(e&&f){a=f.get(e)}if(!a){a=this.get("exampleView")
}}return a},setAttributesForItem:function(f,d,c){var b=this.get("contentDelegate"),g=this.contentIndexIsGroup(d),a=this.exampleViewForItem(f,d),e=this.get("content");
c.createdFromExampleView=a;c.parentView=this.get("containerView")||this;c.contentIndex=d;
c.owner=c.displayDelegate=this;c.content=f;c.page=this.page;c.layerId=this.layerIdFor(d);
c.isEnabled=b.contentIndexIsEnabled(this,e,d);c.isSelected=b.contentIndexIsSelected(this,e,d);
c.outlineLevel=b.contentIndexOutlineLevel(this,e,d);c.disclosureState=b.contentIndexDisclosureState(this,e,d);
c.isVisibleInWindow=this.get("isVisibleInWindow");c.isGroupView=g;c.layout=this.layoutForContentIndex(d);
if(!c.layout){c.layout=a.prototype.layout}},mappedViewsForItem:function(a,b){if(!b){b=this._viewMap
}return b[SC.guidFor(a)]},mappedViewForItem:function(c,b,d){if(!d){d=this._viewMap
}var a=d[SC.guidFor(c)];if(!a){return undefined}return a[b]},mapView:function(e,c,b,f){if(!f){f=this._viewMap
}var d=SC.guidFor(e),a=f[d];if(!a){a=f[d]={_length:0}}a[c]=b;a._length++},unmapView:function(e,c,f){if(!f){f=this._viewMap
}var d=SC.guidFor(e),a=f[d];if(!a){return}if(a[c]){var b=a[c];delete a[c];a._length--;
if(a._length<=0){delete f[d]}}},itemViewForContentIndex:function(b){var a=this._indexMap[b];
if(!a){var d=this.get("content"),c;c=d.objectAt(b);if(!c){return null}var e=this.exampleViewForItem(c,b);
a=this.addItemView(e,c,b)}return a},nearestMappedViewIndexForItem:function(e,c,f){var b=this.mappedViewsForItem(e,f);
if(!b){return null}var d=null,h=-1,g=0;for(var a in b){a=parseInt(a,10);if(isNaN(a)){continue
}g=Math.abs(c-a);if(h<0||g<h){h=g;d=a}}return d},remapItemViews:function(b){var k=this._viewMap||{},a=(this._viewMap={}),j=(this._indexMap={}),l=[],h=this.get("content"),o;
if(!h){return}var f=this._itemsToAdd;b.forEach(function(p){o=h.objectAt(p);var r=this.mappedViewsForItem(o,k);
if(r){if(r[p]){var q=r[p];this.unmapView(o,p,k);this.mapView(o,p,q,a);j[p]=q}else{l.push(p)
}}else{f.push(p)}},this);for(var n=0,g=l.length;n<g;n++){var m=l[n];o=h.objectAt(m);
var e=this.nearestMappedViewIndexForItem(o,m,k),c;if(!SC.none(e)){c=this.mappedViewForItem(o,e,k);
var d=this.exampleViewForItem(o,m);if(d===c.createdFromExampleView){this.unmapView(o,e,k);
this.mapView(o,m,c,a);j[m]=c}else{f.push(m)}}else{f.push(m)}}return k},reloadIfNeeded:function(f,b){var d=this.get("content"),e;
if(!f||!f.isIndexSet){f=this.get("nowShowing")}if(!b){e=this._invalidIndexes;if(!e||!this.get("isVisibleInWindow")){return this
}this._invalidIndexes=NO;if(e.isIndexSet&&e.contains(f)){e=YES}if(this.willReload){this.willReload(e===YES?null:e)
}}var g=this._itemsToAdd||(this._itemsToAdd=[]);var a=this.remapItemViews(f);this.processRemovals(a);
if(e){this.processUpdates(e===YES?f:e)}this.processAdds();if(!b){this.clearDOMPools()
}g.length=0;if(!b){var c=this.computeLayout();if(c){this.adjust(c)}if(this.didReload){this.didReload(e===YES?null:e)
}}return this},processRemovals:function(c){var f=this.get("content");for(var d in c){var b=c[d];
for(var e in b){e=parseInt(e,10);if(isNaN(e)){continue}var a=b[e];if(this._indexMap[e]===a){delete this._indexMap[e]
}a._isInCollection=NO;this.removeItemView(a)}}},processUpdates:function(e){var b=this._itemsToUpdate,d=this.get("content"),c,a;
e.forEach(function(f){c=d.objectAt(f);if(a=this.mappedViewForItem(c,f)){if(!a._isInCollection){return
}var g=this.exampleViewForItem(c,f);this.updateItemView(a,g,c,f)}},this)},processAdds:function(){var f=this.get("content");
var g=this._itemsToAdd,b,a=g.length,e,d;for(b=0;b<a;b++){e=g[b];d=f.objectAt(e);var h=this.exampleViewForItem(d,e);
var c=this.addItemView(h,d,e)}},clearDOMPools:function(){var a=this._domPools||(this._domPools={});
for(var b in a){this.clearDOMPool(a[b])}},domPoolSize:10,clearDOMPool:function(c){var b,a=c.length,d;
for(b=this.domPoolSize;b<a;b++){d=c[b];this.removeChild(d);this.releaseItemView(d)
}c.length=Math.min(c.length,this.domPoolSize)},domPoolForExampleView:function(d){var c=this._domPools||(this._domPools={}),a=SC.guidFor(d);
var b=c[a];if(!b){b=c[a]=[]}return b},itemFromDOMPool:function(c){var b=this.domPoolForExampleView(c);
if(b.length<1){return null}var a=b.shift();if(a.wakeFromDOMPool){a.wakeFromDOMPool()
}return a},sendToDOMPool:function(a){var b=this.domPoolForExampleView(a.createdFromExampleView);
b.push(a);var c=a.get("frame");a.adjust({top:-c.height});a.set("layerId",SC.guidFor(a));
if(a.sleepInDOMPool){a.sleepInDOMPool()}},addItemView:function(e,d,c){var a,b=this._TMP_ATTRS||(this._TMP_ATTRS={});
this.setAttributesForItem(d,c,b);if(a=this.itemFromDOMPool(e)){this.configureItemView(a,b);
a._isInCollection=YES;this.mapView(d,c,a);this._indexMap[c]=a;return a}a=this.allocateItemView(e,b);
this.appendChild(a);a._isInCollection=YES;this.mapView(d,c,a);this._indexMap[c]=a;
return a},removeItemView:function(a){if(a.get("layerIsCacheable")){this.sendToDOMPool(a)
}else{this.removeChild(a)}a._isInCollection=NO},updateItemView:function(d,e,c,b){if(!d.get("layerIsCacheable")||d.createdFromExampleView!==e){console.error("BAD UPDATE");
this.unmapView(d,b);delete this._indexMap[b];this.removeItemView(d,c,b);var f=this.addItemView(e,c,b)
}else{var a=this._TMP_ATTRS||(this._TMP_ATTRS={});this.setAttributesForItem(c,b,a);
this.configureItemView(d,a)}},_lastTopUpdate:0,_lastLeftUpdate:0,_tolerance:100,touchScrollDidChange:function(g,f){var h=this.get("clippingFrame");
var e=this._inScrollClippingFrame||(this._inScrollClippingFrame={x:0,y:0,width:0,height:0});
e.x=h.x;e.y=h.y;e.width=h.width;e.height=h.height;e.x=g;e.y=f;var d=this.contentIndexesInRect(e);
if(!d){return}var b=this.get("length"),a=d.get("max"),c=d.get("min");if(a>b||c<0){d=d.copy();
d.remove(b,a-b).remove(c,0-c).freeze()}if(this._lastNowShowing){if(d.contains(this._lastNowShowing)&&this._lastNowShowing.contains(d)){return
}}this._lastNowShowing=d;this.reloadIfNeeded(d,YES)}};SC.CollectionGroup={classNames:["sc-collection-group"]};
SC.CollectionRowDelegate={isCollectionRowDelegate:YES,rowHeight:18,customRowHeightIndexes:null,contentIndexRowHeight:function(a,b,c){return this.get("rowHeight")
}};SC.CollectionViewDelegate={isCollectionViewDelegate:YES,collectionViewSelectionForProposedSelection:function(a,b){return b
},collectionViewShouldSelectIndexes:function(a,b,c){return b},collectionViewShouldDeselectIndexes:function(a,b){return b
},collectionViewShouldDeleteIndexes:function(a,b){return b},collectionViewDeleteContent:function(a,c,b){if(!c){return NO
}if(SC.typeOf(c.destroyAt)===SC.T_FUNCTION){c.destroyAt(b);a.selectPreviousItem(NO,1);
return YES}else{if(SC.typeOf(c.removeAt)===SC.T_FUNCTION){c.removeAt(b);a.selectPreviousItem(NO,1);
return YES}else{return NO}}},collectionViewShouldBeginDrag:function(a){return YES
},collectionViewDragDataTypes:function(a){return[]},collectionViewDragDataForType:function(a,c,b){return null
},collectionViewComputeDragOperations:function(a,b,c){return c},collectionViewValidateDragOperation:function(b,d,e,c,a){return(a&SC.DROP_ON)?SC.DRAG_NONE:e
},collectionViewPerformDragOperation:function(b,d,e,c,a){return SC.DRAG_NONE},collectionViewDragViewFor:function(a,b){return null
},ghostActsLikeCursor:NO};SC.NavigationBuilder={isNavigationBuilder:YES,navigationTransitions:NO,initMixin:function(){var b=SC.Animatable;
if(b&&!this.isAnimatable){this.mixin(b)}else{if(!b){console.error("SC.NavigationView and SC.NavigationBuilder require SC.Animatable to perform animations, but it is not present. Please ensure your app or framework references it.")
}}var a=this.get("navigationTransitions");if(!a&&SC.Animatable){a={left:{duration:0.25,timing:SC.Animatable.TRANSITION_EASE_IN_OUT,action:"navigationBuildDidFinish"},transform:{duration:0.25,timing:SC.Animatable.TRANSITION_EASE_IN_OUT,action:"navigationBuildDidFinish"}}
}if(SC.Animatable){SC.mixin(this.transitions,a)}},metrics:function(){var a=this.computeFrameWithParentFrame();
return a},transform:function(a){if(SC.platform.supportsCSS3DTransforms){this.adjust("transform","translate3d("+a+"px,0px,0px)")
}else{this.adjust("transform","translate("+a+"px,0px)")}},buildInNavigation:function(){var a=this.metrics();
this.disableAnimation();this.transform(this.get("buildDirection")===SC.TO_LEFT?a.width:-a.width);
this.enableAnimation();this.invokeLater("transform",10,0)},buildOutNavigation:function(){var a=this.metrics();
this.transform(this.get("buildDirection")===SC.TO_LEFT?-a.width:a.width)},buildIn:function(){this.buildInNavigation()
},buildOut:function(){this.buildOutNavigation()},resetBuild:function(){this.transform(0)
},navigationBuildDidFinish:function(){if(this.isBuildingIn){this.buildInDidFinish()
}else{if(this.isBuildingOut){this.buildOutDidFinish()}}}};SC.Scrollable={initMixin:function(){console.warn("SC.Scrollable is deprecated and will be removed in a future version of SproutCore.  Consider pulling the mixin into your own app if you want to keep using it.")
},isScrollable:true,verticalLineScroll:20,horizontalLineScroll:20,verticalPageScroll:function(){return this.get("innerFrame").height
}.property("innerFrame"),horizontalPageScroll:function(){return this.get("innerFrame").width
}.property("innerFrame"),hasVerticalScroller:function(){return this.get("scrollFrame").height>this.get("innerFrame").height
}.property("scrollFrame"),hasHorizontalScroller:function(){return this.get("scrollFrame").width>this.get("innerFrame").width
}.property("scrollFrame"),scrollBy:function(a){var b=this.get("scrollFrame");var c=this.get("innerFrame");
if(!this.get("hasVerticalScroller")){a.y=0}if(b.height<=c.height){a.y=0}if(!this.get("hasHorizontalScroller")){a.x=0
}if(b.width<=c.width){a.x=0}var d={x:b.x-(a.x||0),y:b.y-(a.y||0)};this.set("scrollFrame",d);
d=this.get("scrollFrame");return{x:d.x-b.x,y:d.y-b.y}},scrollTo:function(a,b){this.set("scrollFrame",{x:0-a,y:0-b})
},scrollToVisible:function(b){var e=this.get("innerFrame");var d=this.get("scrollFrame");
var a=this.convertFrameFromView(b.get("frame"),b);a.x-=(e.x+d.x);a.y-=(e.y+d.y);var c={x:0-d.x,y:0-d.y,width:e.width,height:e.height};
c.y-=Math.max(0,SC.minY(c)-SC.minY(a));c.x-=Math.max(0,SC.minX(c)-SC.minX(a));c.y+=Math.max(0,SC.maxY(a)-SC.maxY(c));
c.x+=Math.max(0,SC.maxX(a)-SC.maxX(c));this.scrollTo(c.x,c.y)},scrollDownLine:function(a){if(a===undefined){a=1
}return this.scrollBy({y:this.get("verticalLineScroll")*a}).y},scrollUpLine:function(a){if(a===undefined){a=1
}return 0-this.scrollBy({y:0-this.get("verticalLineScroll")*a}).y},scrollRightLine:function(a){if(a===undefined){a=1
}return this.scrollTo({y:this.get("horizontalLineScroll")*a}).x},scrollLeftLine:function(a){if(a===undefined){a=1
}return 0-this.scrollTo({y:0-this.get("horizontalLineScroll")*a}).x},scrollDownPage:function(a){if(a===undefined){a=1
}return this.scrollBy({y:this.get("verticalPageScroll")*a}).y},scrollUpPage:function(a){if(a===undefined){a=1
}return 0-this.scrollBy({y:0-this.get("verticalPageScroll")*a}).y},scrollRightPage:function(a){if(a===undefined){a=1
}return this.scrollTo({y:this.get("horizontalPageScroll")*a}).x},scrollLeftPage:function(a){if(a===undefined){a=1
}return 0-this.scrollTo({y:0-this.get("horizontalPageScroll")*a}).x}};SC.ModalPane=SC.Pane.extend({classNames:"sc-modal",layout:{top:0,left:0,bottom:0,right:0},_openPaneCount:0,paneWillAppend:function(a){this._openPaneCount++;
if(!this.get("isVisibleInWindow")){this.append()}return this},paneDidRemove:function(a){this._openPaneCount--;
if(this._openPaneCount<=0){this._openPaneCount=0;if(this.get("isVisibleInWindow")){this.remove()
}}},mouseDown:function(b){var a=this.get("owner");if(a&&a.modalPaneDidClick){a.modalPaneDidClick(b)
}},touchStart:function(a){this.mouseDown(a)}});sc_require("panes/modal");SC.PanelPane=SC.Pane.extend({layout:{left:0,right:0,top:0,bottom:0},classNames:["sc-panel"],acceptsKeyPane:YES,isModal:YES,modalPane:SC.ModalPane.extend({classNames:"for-sc-panel"}),contentView:null,contentViewBindingDefault:SC.Binding.single(),createRenderer:function(){return this.get("theme").panel()
},updateRenderer:function(){},replaceContent:function(a){this.removeAllChildren();
if(a){this.appendChild(a)}},createChildViews:function(){var a=this.contentView;if(a){a=this.contentView=this.createChildView(a);
this.childViews=[a]}},contentViewDidChange:function(){this.replaceContent(this.get("contentView"))
}.observes("contentView"),_modalPane:function(){var a=this.get("modalPane");if(a&&a.isClass){a=a.create({owner:this});
this.set("modalPane",a)}return a},appendTo:function(a){var b;if(!this.get("isVisibleInWindow")&&this.get("isModal")&&(b=this._modalPane())){this._isShowingModal=YES;
b.paneWillAppend(this)}return arguments.callee.base.apply(this,arguments)},remove:function(){var b,a=arguments.callee.base.apply(this,arguments);
if(this._isShowingModal){this._isShowingModal=NO;if(b=this._modalPane()){b.paneDidRemove(this)
}}return a},_isModalDidChange:function(){var b,a=this.get("isModal");if(a){if(!this._isShowingModal&&this.get("isVisibleInWindow")&&(b=this._modalPane())){this._isShowingModal=YES;
b.paneWillAppend(this)}}else{if(this._isShowingModal&&(b=this._modalPane())){this._isShowingModal=NO;
b.paneDidRemove(this)}}}.observes("isModal"),paneDidAttach:function(){var a=arguments.callee.base.apply(this,arguments);
this.becomeKeyPane();return a}});SC.ButtonView=SC.View.extend(SC.Control,SC.Button,SC.StaticLayout,{tagName:"div",controlSize:SC.REGULAR_CONTROL_SIZE,classNames:["sc-button-view"],controlStyle:"square",buttonBehavior:SC.PUSH_BEHAVIOR,holdInterval:100,isDefault:NO,isDefaultBindingDefault:SC.Binding.oneWay().bool(),isCancel:NO,isCancelBindingDefault:SC.Binding.oneWay().bool(),href:"",action:null,target:null,supportFocusRing:NO,triggerAction:function(a){if(!this.get("isEnabled")){return NO
}this.set("isActive",YES);this.invokeLater("_triggerActionAfterDelay",200,a);return YES
},_triggerActionAfterDelay:function(a){this._action(a,YES);this.didTriggerAction();
this.set("isActive",NO)},didTriggerAction:function(){},titleMinWidth:80,init:function(){var a=SC.clone(this.get("classNames"));
a.push(this.get("controlStyle"));this.set("classNames",a);arguments.callee.base.apply(this,arguments);
if(this.get("keyEquivalent")){this._defaultKeyEquivalent=this.get("keyEquivalent")
}},_TEMPORARY_CLASS_HASH:{},displayProperties:["href","icon","title","value","toolTip"],renderStyle:"renderDefault",createRenderer:function(c){var a,b=this.get("renderStyle");
if(b==="renderDefault"){a=c.button()}if(b==="renderImage"){a=c.imageButton()}this.updateRenderer(a);
return a},updateRenderer:function(b){var a=this.get("toolTip");if(a&&this.get("localize")){a=a.loc()
}b.attr({toolTip:a,isAnchor:this.get("tagName")==="a",href:this.get("href"),isDefault:this.get("isDefault"),isCancel:this.get("isCancel"),icon:this.get("icon"),supportFocusRing:this.get("supportFocusRing"),titleMinWidth:this.get("titleMinWidth"),title:this.get("displayTitle"),escapeHTML:this.get("escapeHTML"),needsEllipsis:this.get("needsEllipsis")})
},_defaultKeyEquivalent:null,_isDefaultOrCancelDidChange:function(){var a=!!this.get("isDefault"),b=!a&&this.get("isCancel");
if(this.didChangeFor("defaultCancelChanged","isDefault","isCancel")){this.displayDidChange();
if(a){this.set("keyEquivalent","return")}else{if(b){this.setIfChanged("keyEquivalent","escape")
}else{this.set("keyEquivalent",this._defaultKeyEquivalent)}}}}.observes("isDefault","isCancel"),isMouseDown:false,mouseDown:function(a){var b=this.get("buttonBehavior");
if(!this.get("isEnabled")){return YES}this.set("isActive",YES);this._isMouseDown=YES;
if(b===SC.HOLD_BEHAVIOR){this._action(a)}else{if(!this._isFocused&&(b!==SC.PUSH_BEHAVIOR)){this._isFocused=YES;
this.becomeFirstResponder();if(this.get("isVisibleInWindow")){this.renderer.focus()
}}}return YES},mouseExited:function(a){if(this._isMouseDown){this.set("isActive",NO)
}return YES},mouseEntered:function(a){if(this._isMouseDown){this.set("isActive",YES)
}return YES},mouseUp:function(b){if(this._isMouseDown){this.set("isActive",NO)}this._isMouseDown=false;
if(this.get("buttonBehavior")!==SC.HOLD_BEHAVIOR){var a=this.renderer.causedEvent(b);
if(a&&this.get("isEnabled")){this._action(b)}}return YES},touchStart:function(b){var a=this.get("buttonBehavior");
if(!this.get("isEnabled")){return YES}this.set("isActive",YES);if(a===SC.HOLD_BEHAVIOR){this._action(b)
}else{if(!this._isFocused&&(a!==SC.PUSH_BEHAVIOR)){this._isFocused=YES;this.becomeFirstResponder();
if(this.get("isVisibleInWindow")){this.$()[0].focus()}}}b.preventDefault();return YES
},touchesDragged:function(a,b){if(!this.touchIsInBoundary(a)){if(!this._touch_exited){this.set("isActive",NO)
}this._touch_exited=YES}else{if(this._touch_exited){this.set("isActive",YES)}this._touch_exited=NO
}a.preventDefault();return YES},touchEnd:function(a){this._touch_exited=NO;this.set("isActive",NO);
if(this.get("buttonBehavior")!==SC.HOLD_BEHAVIOR){if(this.touchIsInBoundary(a)){this._action()
}}a.preventDefault();return YES},keyDown:function(b){if(b.which===9){var a=b.shiftKey?this.get("previousValidKeyView"):this.get("nextValidKeyView");
if(a){a.becomeFirstResponder()}else{b.allowDefault()}return YES}if(b.which===13){this.triggerAction(b);
return YES}return YES},_action:function(a,c){switch(this.get("buttonBehavior")){case SC.TOGGLE_BEHAVIOR:var b=this.get("isSelected");
if(b){this.set("value",this.get("toggleOffValue"))}else{this.set("value",this.get("toggleOnValue"))
}break;case SC.TOGGLE_ON_BEHAVIOR:this.set("value",this.get("toggleOnValue"));break;
case SC.TOGGLE_OFF_BEHAVIOR:this.set("value",this.get("toggleOffValue"));break;case SC.HOLD_BEHAVIOR:this._runHoldAction(a,c);
break;default:this._runAction(a)}},_runAction:function(a){var c=this.get("action"),d=this.get("target")||null,b=this.getPath("pane.rootResponder");
if(c){if(this._hasLegacyActionHandler()){this._triggerLegacyActionHandler(a)}else{if(b){this.getPath("pane.rootResponder").sendAction(c,d,this,this.get("pane"),null,this)
}}}},_runHoldAction:function(a,b){if(this.get("isActive")){this._runAction();if(!b){SC.RunLoop.begin();
this.invokeLater("_runHoldAction",this.get("holdInterval"),a);SC.RunLoop.end()}}},_hasLegacyActionHandler:function(){var a=this.get("action");
if(a&&(SC.typeOf(a)===SC.T_FUNCTION)){return true}if(a&&(SC.typeOf(a)===SC.T_STRING)&&(a.indexOf(".")!=-1)){return true
}return false},_triggerLegacyActionHandler:function(evt){if(!this._hasLegacyActionHandler()){return false
}var action=this.get("action");if(SC.typeOf(action)===SC.T_FUNCTION){this.action(evt)
}if(SC.typeOf(action)===SC.T_STRING){eval("this.action = function(e) { return "+action+"(this, e); };");
this.action(evt)}},acceptsFirstResponder:function(){if(!SC.SAFARI_FOCUS_BEHAVIOR){return this.get("isEnabled")
}else{return NO}}.property("isEnabled"),willBecomeKeyResponderFrom:function(a){if(!this._isFocused){this._isFocused=YES;
this.becomeFirstResponder();if(this.get("isVisibleInWindow")){if(this.renderer){this.renderer.focus()
}}}},willLoseKeyResponderTo:function(a){if(this._isFocused){this._isFocused=NO}},didAppendToDocument:function(){if(parseInt(SC.browser.msie,0)===7){var c=this.get("layout");
if(this.get("useStaticLayout")&&c.width&&(c.width.indexOf&&c.width.indexOf("auto")!=-1)){var b=this.$();
if(b&&b[0]){var a=b[0].clientWidth;if(a!==0){var d=parseInt(b.css("paddingRight"),0);
this.$(".sc-button-label").css("minWidth",a-(d*2)+"px")}}}}}});SC.TOGGLE_BEHAVIOR="toggle";
SC.PUSH_BEHAVIOR="push";SC.TOGGLE_ON_BEHAVIOR="on";SC.TOGGLE_OFF_BEHAVIOR="off";SC.HOLD_BEHAVIOR="hold";
SC.ButtonView.CLICK_AND_HOLD_DELAY=300;SC.REGULAR_BUTTON_HEIGHT=24;sc_require("panes/panel");
sc_require("views/button");SC.BUTTON1_STATUS="button1";SC.BUTTON2_STATUS="button2";
SC.BUTTON3_STATUS="button3";SC.AlertPane=SC.PanelPane.extend({classNames:"sc-alert",delegate:null,icon:"sc-icon-alert-48",message:"",description:"",displayDescription:function(){var a=this.get("description");
if(!a||a.length===0){return a}a=SC.RenderContext.escapeHTML(a);return'<p class="description">'+a.split("\n").join('</p><p class="description">')+"</p>"
}.property("description").cacheable(),caption:"",displayCaption:function(){var a=this.get("caption");
if(!a||a.length===0){return a}a=SC.RenderContext.escapeHTML(a);return'<p class="caption">'+a.split("\n").join('</p><p class="caption">')+"</p>"
}.property("caption").cacheable(),buttonOne:SC.outlet("contentView.childViews.1.childViews.1"),buttonTwo:SC.outlet("contentView.childViews.1.childViews.0"),buttonThree:SC.outlet("contentView.childViews.2.childViews.0"),buttonThreeWrapper:SC.outlet("contentView.childViews.2"),layout:{top:0.3,centerX:0,width:500},contentView:SC.View.extend({useStaticLayout:YES,layout:{left:0,right:0,top:0,height:"auto"},childViews:[SC.View.extend(SC.StaticLayout,{classNames:["info"],render:function(a,d){var c=this.get("pane");
var b=SC.BLANK_IMAGE_URL;if(c.get("icon")=="blank"){a.addClass("plain")}a.push('<img src="'+b+'" class="icon '+c.get("icon")+'" />');
a.begin("h1").attr("class","header").text(c.get("message")||"").end();a.push(c.get("displayDescription")||"");
a.push(c.get("displayCaption")||"");a.push('<div class="separator"></div>')}}),SC.View.extend({layout:{bottom:13,height:24,right:18,width:466},childViews:["cancelButton","okButton"],classNames:["text-align-right"],cancelButton:SC.ButtonView.extend({useStaticLayout:YES,actionKey:SC.BUTTON2_STATUS,localize:YES,titleMinWidth:64,layout:{right:5,height:"auto",width:"auto",bottom:0},controlStyle:"capsule",title:"Cancel",isCancel:YES,action:"dismiss",isVisible:NO}),okButton:SC.ButtonView.extend({useStaticLayout:YES,actionKey:SC.BUTTON1_STATUS,localize:YES,titleMinWidth:64,layout:{left:0,height:"auto",width:"auto",bottom:0},controlStyle:"capsule",title:"OK",isDefault:YES,action:"dismiss"})}),SC.View.extend({layout:{bottom:13,height:24,left:18,width:150},isVisible:NO,childViews:[SC.ButtonView.extend({useStaticLayout:YES,actionKey:SC.BUTTON3_STATUS,localize:YES,titleMinWidth:64,layout:{left:0,height:"auto",width:"auto",bottom:0},controlStyle:"capsule",title:"Extra",action:"dismiss",isVisible:NO})]})]}),dismiss:function(b){var a=this.delegate;
if(a&&a.alertPaneDidDismiss){a.alertPaneDidDismiss(this,b.get("actionKey"))}this.remove()
},alertInfoDidChange:function(){var a=this.getPath("contentView.childViews.0");if(a){a.displayDidChange()
}}.observes("icon","message","displayDescription","displayCaption")});SC.AlertPane._normalizeArguments=function(b){b=SC.A(b);
var a=b.length,c=b[a-1];if(SC.typeOf(c)!==SC.T_STRING){b[a-1]=null}else{c=null}b[7]=c;
return b};SC.AlertPane.show=function(q,m,o,b,c,p,a,g){var f=this._normalizeArguments(arguments);
var e=this.create({message:f[0]||"",description:f[1]||null,caption:f[2]||null,icon:f[6]||"sc-icon-alert-48",delegate:f[7]});
var l="buttonOne buttonTwo buttonThree".w(),d,h;for(var k=0;k<3;k++){d=e.get(l[k]);
h=f[k+3];if(h){d.set("title",h).set("isVisible",YES);if(h=="?"){d.set("titleMinWidth",0)
}if(k==2){var n=e.get("buttonThreeWrapper");n.set("isVisible",YES)}}}var j=e.append();
e.adjust("height",e.childViews[0].$().height());e.updateLayout();return j};SC.AlertPane.warn=function(e,d,a,h,f,g,c){var b=this._normalizeArguments(arguments);
b[6]="sc-icon-alert-48";return this.show.apply(this,b)};SC.AlertPane.info=function(e,d,a,h,f,g,c){var b=this._normalizeArguments(arguments);
b[6]="sc-icon-info-48";return this.show.apply(this,b)};SC.AlertPane.error=function(e,d,a,h,f,g,c){var b=this._normalizeArguments(arguments);
b[6]="sc-icon-error-48";return this.show.apply(this,b)};SC.AlertPane.plain=function(e,d,a,h,f,g,c){var b=this._normalizeArguments(arguments);
b[6]="blank";return this.show.apply(this,b)};sc_require("panes/panel");SC.PalettePane=SC.PanelPane.extend({classNames:"sc-palette",isModal:NO,modalPane:SC.ModalPane,isAnchored:NO,_mouseOffsetX:null,_mouseOffsetY:null,mouseDown:function(a){var b=this.get("frame");
this._mouseOffsetX=b?(b.x-a.pageX):0;this._mouseOffsetY=b?(b.y-a.pageY):0;return YES
},mouseDragged:function(a){if(!this.isAnchored){this.set("layout",{width:this.layout.width,height:this.layout.height,left:this._mouseOffsetX+a.pageX,top:this._mouseOffsetY+a.pageY});
this.updateLayout()}return YES},touchStart:function(a){return this.mouseDown(a)},touchesDragged:function(a){return this.mouseDragged(a)
}});sc_require("panes/palette");SC.PICKER_MENU="menu";SC.PICKER_FIXED="fixed";SC.PICKER_POINTER="pointer";
SC.PICKER_MENU_POINTER="menu-pointer";SC.POINTER_LAYOUT=["perfectRight","perfectLeft","perfectTop","perfectBottom"];
SC.PickerPane=SC.PalettePane.extend({classNames:"sc-picker",isAnchored:YES,isModal:YES,pointerPos:"perfectRight",pointerPosX:0,pointerPosY:0,anchorElement:null,preferType:null,preferMatrix:null,pointerOffset:null,extraRightOffset:0,popup:function(d,c,e,a){var b=d.isView?d.get("layer"):d;
this.beginPropertyChanges();this.set("anchorElement",b);if(c){this.set("preferType",c)
}if(e){this.set("preferMatrix",e)}if(a){this.set("pointerOffset",a)}this.endPropertyChanges();
this.positionPane();this.append()},positionPane:function(){var b=this.get("anchorElement"),c=this.get("preferType"),d=this.get("preferMatrix"),e=this.get("layout"),a;
if(b){b=this.computeAnchorRect(b);if(b.x===0&&b.y===0){return}a=SC.cloneRect(b);if(c){switch(c){case SC.PICKER_MENU:case SC.PICKER_FIXED:if(!d||d.length!==3){this.set("preferMatrix",[1,4,3])
}a.x+=((this.preferMatrix[2]===0)?a.width:0)+this.preferMatrix[0];a.y+=((this.preferMatrix[2]===3)?a.height:0)+this.preferMatrix[1];
break;default:a.y+=a.height;break}}else{a.y+=a.height}a=this.fitPositionToScreen(a,this.get("frame"),b);
this.adjust({width:a.width,height:a.height,left:a.x,top:a.y})}else{this.adjust({width:e.width,height:e.height,centerX:0,centerY:0})
}this.updateLayout();return this},computeAnchorRect:function(c){var e,b,d,a=SC.RootResponder.responder.computeWindowSize();
if(c.getBoundingClientRect){e=c.getBoundingClientRect();b={x:e.left,y:e.top,width:e.width,height:e.height};
if(b.width===undefined||b.height===undefined){d=SC.$(c);b.width=d.outerWidth();b.height=d.outerHeight()
}}else{b=SC.viewportOffset(c);d=SC.$(c);b.width=d.outerWidth();b.height=d.outerHeight()
}b.height=(a.height-b.y)<b.height?(a.height-b.y):b.height;return b},fitPositionToScreen:function(e,c,b){var a=SC.RootResponder.responder.computeWindowSize();
var d={x:0,y:0,width:a.width,height:a.height};c.x=e.x;c.y=e.y;if(this.preferType){switch(this.preferType){case SC.PICKER_MENU:c=this.fitPositionToScreenMenu(d,c,this.get("isSubMenu"));
break;case SC.PICKER_MENU_POINTER:this.setupPointer(b);c=this.fitPositionToScreenMenuPointer(d,c,b);
break;case SC.PICKER_POINTER:this.setupPointer(b);c=this.fitPositionToScreenPointer(d,c,b);
break;case SC.PICKER_FIXED:break;default:break}}else{c=this.fitPositionToScreenDefault(d,c,b)
}this.displayDidChange();return c},fitPositionToScreenDefault:function(c,d,b){if(SC.maxX(d)>c.width){var e=Math.max(SC.maxX(b),d.width);
d.x=Math.min(e,c.width)-d.width}if(SC.minX(d)<0){d.x=SC.minX(Math.max(b,0));if(SC.maxX(d)>c.width){d.x=Math.max(0,c.width-d.width)
}}if(SC.maxY(d)>c.height){e=Math.max((b.y-d.height),0);if(e>c.height){d.y=Math.max(0,c.height-d.height)
}else{d.y=e}}if(SC.minY(d)<0){e=Math.min(SC.maxY(b),(c.height-b.height));d.y=Math.max(e,0)
}return d},fitPositionToScreenMenu:function(c,b,a){if(a){b.x-=this.get("submenuOffsetX");
b.y-=Math.floor(this.get("menuHeightPadding")/2)}if((b.x+b.width)>(c.width-20)){if(a){b.x=b.x-(b.width*2)
}else{b.x=c.width-b.width-20}}if(b.x<7){b.x=7}if(b.y<7){b.height+=b.y;b.y=7}if(b.height+b.y+35>=c.height){if(b.height+50>=c.height){b.y=SC.MenuPane.VERTICAL_OFFSET;
b.height=c.height-(SC.MenuPane.VERTICAL_OFFSET*2)}else{b.y+=(c.height-(b.height+b.y+35))
}}return b},fitPositionToScreenMenuPointer:function(c,d,b){d=this.fitPositionToScreenPointer(c,d,b);
if(d.height+d.y+35>=c.height){d.height=c.height-d.y-(SC.MenuPane.VERTICAL_OFFSET*2)
}return d},fitPositionToScreenPointer:function(o,l,n){var h=[this.pointerOffset[0],this.pointerOffset[1],this.pointerOffset[2],this.pointerOffset[3]];
var e=[[n.x+n.width+h[0],n.y+parseInt(n.height/2,0)-40],[n.x-l.width+h[1],n.y+parseInt(n.height/2,0)-40],[n.x+parseInt((n.width/2)-(l.width/2),0),n.y-l.height+h[2]],[n.x+parseInt((n.width/2)-(l.width/2),0),n.y+n.height+h[3]]];
var c=[[n.x+n.width+l.width+h[0],n.y+parseInt(n.height/2,0)+l.height-24],[n.x+h[1],n.y+parseInt(n.height/2,0)+l.height-24],[n.x+parseInt((n.width/2)-(l.width/2),0)+l.width,n.y+h[2]],[n.x+parseInt((n.width/2)-(l.width/2),0)+l.width,n.y+n.height+l.height+h[3]]];
var g=[[e[0][1]>0?0:0-e[0][1],c[0][0]<o.width?0:c[0][0]-o.width,c[0][1]<o.height?0:c[0][1]-o.height,e[0][0]>0?0:0-e[0][0]],[e[1][1]>0?0:0-e[1][1],c[1][0]<o.width?0:c[1][0]-o.width,c[1][1]<o.height?0:c[1][1]-o.height,e[1][0]>0?0:0-e[1][0]],[e[2][1]>0?0:0-e[2][1],c[2][0]<o.width?0:c[2][0]-o.width,c[2][1]<o.height?0:c[2][1]-o.height,e[2][0]>0?0:0-e[2][0]],[e[3][1]>0?0:0-e[3][1],c[3][0]<o.width?0:c[3][0]-o.width,c[3][1]<o.height?0:c[3][1]-o.height,e[3][0]>0?0:0-e[3][0]]];
var d=this.preferMatrix;if(d[4]===-1){l.x=n.x+parseInt(n.width/2,0);l.y=n.y+parseInt(n.height/2,0)-parseInt(l.height/2,0);
this.set("pointerPos",SC.POINTER_LAYOUT[0]+" fallback");this.set("pointerPosY",parseInt(l.height/2,0)-40)
}else{l.x=e[d[4]][0];l.y=e[d[4]][1];this.set("pointerPos",SC.POINTER_LAYOUT[d[4]]);
this.set("pointerPosY",0)}this.set("pointerPosX",0);for(var j=0,b,k=SC.POINTER_LAYOUT.length;
j<k;j++){b=d[j];if(g[b][0]===0&&g[b][1]===0&&g[b][2]===0&&g[b][3]===0){if(d[4]!==b){l.x=e[b][0];
l.y=e[b][1];this.set("pointerPosY",0);this.set("pointerPos",SC.POINTER_LAYOUT[b])
}j=SC.POINTER_LAYOUT.length}else{if((b===0||b===1)&&g[b][0]===0&&g[b][1]===0&&g[b][2]<l.height-91&&g[b][3]===0){if(d[4]!==b){l.x=e[b][0];
this.set("pointerPos",SC.POINTER_LAYOUT[b])}l.y=e[b][1]-g[b][2];this.set("pointerPosY",g[b][2]);
j=SC.POINTER_LAYOUT.length}else{if((b===0||b===1)&&g[b][0]===0&&g[b][1]===0&&g[b][2]<=l.height-51&&g[b][3]===0){if(d[4]!==b){l.x=e[b][0]
}l.y=e[b][1]-(l.height-51);this.set("pointerPosY",(l.height-53));this.set("pointerPos",SC.POINTER_LAYOUT[b]+" extra-low");
j=SC.POINTER_LAYOUT.length}else{if((b===2||b===3)&&g[b][0]===0&&g[b][1]<=parseInt(l.width/2,0)-this.get("extraRightOffset")&&g[b][2]===0&&g[b][3]===0){if(d[4]!==b){l.y=e[b][1]
}l.x=e[b][0]-(parseInt(l.width/2,0)-this.get("extraRightOffset"));this.set("pointerPos",SC.POINTER_LAYOUT[b]+" extra-right");
j=SC.POINTER_LAYOUT.length}else{if((b===2||b===3)&&g[b][0]===0&&g[b][1]===0&&g[b][2]===0&&g[b][3]<=parseInt(l.width/2,0)-this.get("extraRightOffset")){if(d[4]!==b){l.y=e[b][1]
}l.x=e[b][0]+(parseInt(l.width/2,0)-this.get("extraRightOffset"));this.set("pointerPos",SC.POINTER_LAYOUT[b]+" extra-left");
j=SC.POINTER_LAYOUT.length}}}}}}return l},setupPointer:function(f){var g=this.pointerOffset,e=SC.PickerPane;
if(!g||g.length!==4){if(this.get("preferType")==SC.PICKER_MENU_POINTER){switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:this.set("pointerOffset",e.TINY_PICKER_MENU_POINTER_OFFSET);
this.set("extraRightOffset",e.TINY_PICKER_MENU_EXTRA_RIGHT_OFFSET);break;case SC.SMALL_CONTROL_SIZE:this.set("pointerOffset",e.SMALL_PICKER_MENU_POINTER_OFFSET);
this.set("extraRightOffset",e.SMALL_PICKER_MENU_EXTRA_RIGHT_OFFSET);break;case SC.REGULAR_CONTROL_SIZE:this.set("pointerOffset",e.REGULAR_PICKER_MENU_POINTER_OFFSET);
this.set("extraRightOffset",e.REGULAR_PICKER_MENU_EXTRA_RIGHT_OFFSET);break;case SC.LARGE_CONTROL_SIZE:this.set("pointerOffset",e.LARGE_PICKER_MENU_POINTER_OFFSET);
this.set("extraRightOffset",e.LARGE_PICKER_MENU_EXTRA_RIGHT_OFFSET);break;case SC.HUGE_CONTROL_SIZE:this.set("pointerOffset",e.HUGE_PICKER_MENU_POINTER_OFFSET);
this.set("extraRightOffset",e.HUGE_PICKER_MENU_EXTRA_RIGHT_OFFSET);break}}else{var d=(f.width<16)?((f.width<4)?9:6):0,b=(f.height<16)?((f.height<4)?9:6):0,c=e.PICKER_POINTER_OFFSET;
var h=[c[0]+d,c[1]-d,c[2]-b,c[3]+b];this.set("pointerOffset",h);this.set("extraRightOffset",e.PICKER_EXTRA_RIGHT_OFFSET)
}}if(!this.preferMatrix||this.preferMatrix.length!==5){this.set("preferMatrix",this.get("preferType")==SC.PICKER_MENU_POINTER?[3,0,1,2,3]:[0,1,2,3,2])
}},displayProperties:["pointerPosY"],render:function(b,d){var a=arguments.callee.base.apply(this,arguments);
if(b.needsContent){if(this.get("preferType")==SC.PICKER_POINTER||this.get("preferType")==SC.PICKER_MENU_POINTER){b.push('<div class="sc-pointer '+this.get("pointerPos")+'" style="margin-top: '+this.get("pointerPosY")+'px"></div>');
b.addClass(this.get("pointerPos"))}}else{if(this.get("preferType")==SC.PICKER_POINTER||this.get("preferType")==SC.PICKER_MENU_POINTER){var c=this.$(".sc-pointer");
c.attr("class","sc-pointer "+this.get("pointerPos"));c.attr("style","margin-top: "+this.get("pointerPosY")+"px");
b.addClass(this.get("pointerPos"))}}return a},modalPaneDidClick:function(a){var b=this.get("frame");
if(!this.clickInside(b,a)){this.remove()}return YES},mouseDown:function(a){return this.modalPaneDidClick(a)
},clickInside:function(b,a){return SC.pointInRect({x:a.pageX,y:a.pageY},b)},windowSizeDidChange:function(b,a){this.positionPane()
}});SC.PickerPane.PICKER_POINTER_OFFSET=[9,-9,-18,18];SC.PickerPane.PICKER_EXTRA_RIGHT_OFFSET=20;
SC.PickerPane.TINY_PICKER_MENU_POINTER_OFFSET=[9,-9,-18,18];SC.PickerPane.TINY_PICKER_MENU_EXTRA_RIGHT_OFFSET=12;
SC.PickerPane.SMALL_PICKER_MENU_POINTER_OFFSET=[9,-9,-8,8];SC.PickerPane.SMALL_PICKER_MENU_EXTRA_RIGHT_OFFSET=11;
SC.PickerPane.REGULAR_PICKER_MENU_POINTER_OFFSET=[9,-9,-12,12];SC.PickerPane.REGULAR_PICKER_MENU_EXTRA_RIGHT_OFFSET=13;
SC.PickerPane.LARGE_PICKER_MENU_POINTER_OFFSET=[9,-9,-16,16];SC.PickerPane.LARGE_PICKER_MENU_EXTRA_RIGHT_OFFSET=17;
SC.PickerPane.HUGE_PICKER_MENU_POINTER_OFFSET=[9,-9,-18,18];SC.PickerPane.HUGE_PICKER_MENU_EXTRA_RIGHT_OFFSET=12;
SC.SeparatorView=SC.View.extend({classNames:["sc-separator-view"],tagName:"span",layoutDirection:SC.LAYOUT_HORIZONTAL,render:function(a,b){if(b){a.push("<span></span>")
}a.addClass(this.get("layoutDirection"))}});sc_require("views/button");sc_require("views/separator");
SC.MenuItemView=SC.View.extend(SC.ContentDisplay,{classNames:["sc-menu-item"],escapeHTML:YES,acceptsFirstResponder:YES,blocksIEDeactivate:YES,blocksIEDeactivate:YES,content:null,isSeparator:function(){return this.getContentProperty("itemSeparatorKey")===YES
}.property("content").cacheable(),isEnabled:function(){return this.getContentProperty("itemIsEnabledKey")!==NO&&this.getContentProperty("itemSeparatorKey")!==YES
}.property("content.isEnabled").cacheable(),subMenu:function(){var c=this.get("content"),b,a;
if(!c){return null}a=this.get("parentMenu");b=c.get(a.itemSubMenuKey);if(b){if(SC.kindOf(b,SC.MenuPane)){b.set("isModal",NO);
b.set("isSubMenu",YES);b.set("parentMenu",a);return b}else{return SC.MenuPane.create({layout:{width:200},items:b,isModal:NO,isSubMenu:YES,parentMenu:a,controlSize:a.get("controlSize")})
}}return null}.property("content").cacheable(),hasSubMenu:function(){return !!this.get("subMenu")
}.property("subMenu").cacheable(),init:function(){arguments.callee.base.apply(this,arguments);
this.contentDidChange()},render:function(b,h){var c=this.get("content"),a,f,e=this.get("parentMenu"),d=this.get("itemWidth")||e.layout.width,g=this.get("itemHeight")||SC.DEFAULT_MENU_ITEM_HEIGHT;
this.set("itemWidth",d);this.set("itemHeight",g);b=b.begin("a").addClass("menu-item");
if(c.get(e.itemSeparatorKey)){b.push('<span class="separator"></span>');b.addClass("disabled")
}else{f=c.get(e.itemIconKey);if(f){this.renderImage(b,f);b.addClass("has-icon")}f=this.get("title");
if(SC.typeOf(f)!==SC.T_STRING){f=f.toString()}this.renderLabel(b,f);if(this.getContentProperty("itemCheckboxKey")){b.push('<div class="checkbox"></div>')
}if(this.get("hasSubMenu")){this.renderBranch(b)}f=this.getContentProperty("itemShortCutKey");
if(f){this.renderShortcut(b,f)}}b=b.end()},renderImage:function(b,d){var a,c;if(d&&SC.ImageView.valueIsUrl(d)){a=d;
c=""}else{c=d;a=SC.BLANK_IMAGE_URL}b.begin("img").addClass("image").addClass(c).attr("src",a).end()
},renderLabel:function(b,a){if(this.get("escapeHTML")){a=SC.RenderContext.escapeHTML(a)
}b.push("<span class='value ellipsis'>"+a+"</span>")},renderBranch:function(a){a.push('<span class="has-branch"></span>')
},renderShortcut:function(b,a){b.push('<span class = "shortcut">'+a+"</span>")},showSubMenu:function(){var a=this.get("subMenu");
if(a){a.set("mouseHasEntered",NO);a.popup(this,[0,0,0])}this._subMenuTimer=null},title:function(){var b=this.getContentProperty("itemTitleKey"),a=this.getPath("parentMenu.localize");
if(a&&b){b=b.loc()}return b||""}.property("content.title").cacheable(),getContentProperty:function(b){var a=this.get("content"),c=this.get("parentMenu");
if(a){return a.get(c.get(b))}},mouseUp:function(b){var a;a=this.getPath("parentMenu.rootMenu.targetMenuItem");
if(a){a.performAction()}return YES},performAction:function(){if(!this.get("isEnabled")||this.get("hasSubMenu")){return NO
}var b=this.getContentProperty("itemDisableMenuFlashKey"),a;if(b){this.sendAction()
}else{this._flashCounter=0;a=this.getPath("parentMenu.rootMenu");a._isFlashing=YES;
this.invokeLater(this.flashHighlight,25);this.invokeLater(this.sendAction,150)}return YES
},sendAction:function(){var c=this.getContentProperty("itemActionKey"),d=this.getContentProperty("itemTargetKey"),b=this.getPath("parentMenu.rootMenu"),a;
this.getPath("parentMenu.rootMenu").remove();b._isFlashing=NO;c=(c===undefined)?b.get("action"):c;
d=(d===undefined)?b.get("target"):d;b.set("selectedItem",this.get("content"));if(SC.typeOf(c)===SC.T_FUNCTION){c.apply(d,[b]);
SC.Logger.warn("Support for menu item action functions has been deprecated. Please use target and action.")
}else{a=this.getPath("pane.rootResponder")||SC.RootResponder.responder;if(a){a.sendAction(c,d,this)
}}},flashHighlight:function(){var a=this._flashCounter,b=this.$();if(a%2===0){b.addClass("focus")
}else{b.removeClass("focus")}if(a<=2){this.invokeLater(this.flashHighlight,50);this._flashCounter++
}},mouseDown:function(a){return YES},mouseEntered:function(a){var c=this.get("parentMenu"),b=c.get("rootMenu");
if(b._isFlashing){return}c.set("mouseHasEntered",YES);this.set("mouseHasEntered",YES);
c.set("currentMenuItem",this);if(this.get("isEnabled")){this.becomeFirstResponder()
}if(this.get("hasSubMenu")){this._subMenuTimer=this.invokeLater(this.showSubMenu,100)
}return YES},mouseExited:function(a){var b,c;if(this.get("hasSubMenu")){c=this._subMenuTimer;
if(c){c.invalidate()}else{this.invokeLater(this.checkMouseLocation,100)}}else{b=this.get("parentMenu");
if(b.get("currentMenuItem")===this){b.set("currentMenuItem",null)}}return YES},touchStart:function(a){this.mouseEntered(a);
return YES},touchEnd:function(a){return this.mouseUp(a)},touchEntered:function(a){return this.mouseEntered(a)
},touchExited:function(a){return this.mouseExited(a)},checkMouseLocation:function(){var b=this.get("subMenu"),c=this.get("parentMenu"),a,d;
if(!b.get("mouseHasEntered")){a=c.get("currentMenuItem");if(a===this||a===null){d=c.get("previousMenuItem");
if(d){d.resignFirstResponder()}this.resignFirstResponder();b.remove()}}},moveUp:function(b,a){var c=this.get("parentMenu");
if(c){c.moveUp(this)}return YES},moveDown:function(b,a){var c=this.get("parentMenu");
if(c){c.moveDown(this)}return YES},moveRight:function(b,a){this.showSubMenu();return YES
},insertText:function(b,a){var c=this.get("parentMenu");if(c){c.insertText(b,a)}},keyDown:function(a){return this.interpretKeyEvents(a)
},keyUp:function(a){return YES},cancel:function(a){this.getPath("parentMenu.rootMenu").remove();
return YES},didBecomeFirstResponder:function(a){if(a!==this){return}var b=this.get("parentMenu");
if(b){b.set("currentSelectedMenuItem",this)}},willLoseFirstResponder:function(a){if(a!==this){return
}var b=this.get("parentMenu");if(b){b.set("currentSelectedMenuItem",null);b.set("previousSelectedMenuItem",this)
}},insertNewline:function(b,a){this.mouseUp(a)},closeParent:function(){this.$().removeClass("focus");
var a=this.get("parentMenu");if(a){a.remove()}},clickInside:function(b,a){return SC.pointInRect({x:a.pageX,y:a.pageY},b)
},contentDidChange:function(){var b=this.get("content"),a=this._content;if(b===a){return
}var c=this.contentPropertyDidChange;if(a&&a.removeObserver){a.removeObserver("*",this,c)
}this._content=b;if(b&&b.addObserver){b.addObserver("*",this,c)}this.contentPropertyDidChange(b,"*")
}.observes("content"),contentPropertyDidChange:function(g,j){var b=this.get("parentMenu");
if(!b){return}var a=SC.MenuItemView._contentPropertyToMenuItemPropertyMapping,h=SC.keys(a),e,f,d,c;
if(j==="*"){for(e=0,f=h.length;e<f;++e){d=h[e];c=a[d];this.notifyPropertyChange(c)
}}else{for(e=0,f=h.length;e<f;++e){d=h[e];if(b.get(d)===j){c=a[d];this.notifyPropertyChange(c)
}}}}});SC.MenuItemView._contentPropertyToMenuItemPropertyMapping={itemTitleKey:"title",itemIsEnabledKey:"isEnabled",itemSeparatorKey:"isSeparator",itemSubMenuKey:"subMenu"};
require("panes/picker");require("views/menu_item");SC.MenuPane=SC.PickerPane.extend({classNames:["sc-menu"],items:[],controlSize:SC.REGULAR_CONTROL_SIZE,itemHeight:null,itemSeparatorHeight:null,menuHeight:0,menuHeightPadding:null,submenuOffsetX:null,selectedItem:null,exampleView:SC.MenuItemView,anchor:null,isSubMenu:NO,localize:YES,acceptsMenuPane:YES,popup:function(b,c){var a;
this.beginPropertyChanges();if(b){a=b.isView?b.get("layer"):b}this.set("anchorElement",a);
this.set("anchor",b);if(c){this.set("preferMatrix",c)}this.adjust("height",this.get("menuHeight"));
this.positionPane();this.set("defaultResponder",this);this.endPropertyChanges();if(parseInt(SC.browser.msie,0)===7){this.invokeLast(this.append)
}else{this.append()}},remove:function(){var a=this.get("parentMenu");this.set("currentMenuItem",null);
this.closeOpenMenus();this.resignMenuPane();if(a){a.becomeMenuPane()}return arguments.callee.base.apply(this,arguments)
},itemTitleKey:"title",itemIsEnabledKey:"isEnabled",itemValueKey:"value",itemIconKey:"icon",itemHeightKey:"height",itemSubMenuKey:"subMenu",itemSeparatorKey:"separator",itemTargetKey:"target",itemActionKey:"action",itemCheckboxKey:"checkbox",itemShortCutKey:"shortcut",itemKeyEquivalentKey:"keyEquivalent",itemDisableMenuFlashKey:"disableMenuFlash",menuItemKeys:"itemTitleKey itemValueKey itemIsEnabledKey itemIconKey itemSeparatorKey itemActionKey itemCheckboxKey itemShortCutKey itemBranchKey itemHeightKey itemSubMenuKey itemKeyEquivalentKey itemTargetKey".w(),preferType:SC.PICKER_MENU,isModal:YES,_menuView:null,init:function(){switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:this.setIfNull("itemHeight",SC.MenuPane.TINY_MENU_ITEM_HEIGHT);
this.setIfNull("itemSeparatorHeight",SC.MenuPane.TINY_MENU_ITEM_SEPARATOR_HEIGHT);
this.setIfNull("menuHeightPadding",SC.MenuPane.TINY_MENU_HEIGHT_PADDING);this.setIfNull("submenuOffsetX",SC.MenuPane.TINY_SUBMENU_OFFSET_X);
break;case SC.SMALL_CONTROL_SIZE:this.setIfNull("itemHeight",SC.MenuPane.SMALL_MENU_ITEM_HEIGHT);
this.setIfNull("itemSeparatorHeight",SC.MenuPane.SMALL_MENU_ITEM_SEPARATOR_HEIGHT);
this.setIfNull("menuHeightPadding",SC.MenuPane.SMALL_MENU_HEIGHT_PADDING);this.setIfNull("submenuOffsetX",SC.MenuPane.SMALL_SUBMENU_OFFSET_X);
break;case SC.REGULAR_CONTROL_SIZE:this.setIfNull("itemHeight",SC.MenuPane.REGULAR_MENU_ITEM_HEIGHT);
this.setIfNull("itemSeparatorHeight",SC.MenuPane.REGULAR_MENU_ITEM_SEPARATOR_HEIGHT);
this.setIfNull("menuHeightPadding",SC.MenuPane.REGULAR_MENU_HEIGHT_PADDING);this.setIfNull("submenuOffsetX",SC.MenuPane.REGULAR_SUBMENU_OFFSET_X);
break;case SC.LARGE_CONTROL_SIZE:this.setIfNull("itemHeight",SC.MenuPane.LARGE_MENU_ITEM_HEIGHT);
this.setIfNull("itemSeparatorHeight",SC.MenuPane.LARGE_MENU_ITEM_SEPARATOR_HEIGHT);
this.setIfNull("menuHeightPadding",SC.MenuPane.LARGE_MENU_HEIGHT_PADDING);this.setIfNull("submenuOffsetX",SC.MenuPane.LARGE_SUBMENU_OFFSET_X);
break;case SC.HUGE_CONTROL_SIZE:this.setIfNull("itemHeight",SC.MenuPane.HUGE_MENU_ITEM_HEIGHT);
this.setIfNull("itemSeparatorHeight",SC.MenuPane.HUGE_MENU_ITEM_SEPARATOR_HEIGHT);
this.setIfNull("menuHeightPadding",SC.MenuPane.HUGE_MENU_HEIGHT_PADDING);this.setIfNull("submenuOffsetX",SC.MenuPane.HUGE_SUBMENU_OFFSET_X);
break}return arguments.callee.base.apply(this,arguments)},setIfNull:function(a,b){if(this.get(a)===null){this.set(a,b)
}},render:function(a,b){a.addClass(this.get("controlSize"));return arguments.callee.base.apply(this,arguments)
},createChildViews:function(){var b,a,c;b=this.createChildView(SC.MenuScrollView,{borderStyle:SC.BORDER_NONE,controlSize:this.get("controlSize")});
a=this._menuView=SC.View.create();c=this.get("menuItemViews");a.set("layout",{top:0,left:0,height:this.get("menuHeight")});
a.replaceAllChildren(c);b.set("contentView",a);this.childViews=[b];return this},paneDidAttach:function(){var a=(this.rootResponder=SC.RootResponder.responder);
a.panes.add(this);this.set("currentWindowSize",a.computeWindowSize());this.set("isPaneAttached",YES);
this.parentViewDidChange();this._notifyDidAppendToDocument();this.becomeMenuPane();
return this},becomeMenuPane:function(){if(this.rootResponder){this.rootResponder.makeMenuPane(this)
}return this},resignMenuPane:function(){if(this.rootResponder){this.rootResponder.makeMenuPane(null)
}return this},menuItemViews:function(){var p=[],m=this.get("displayItems"),k=this.get("exampleView"),r,n,q,c,l,b,f,e,h,a,g,d,o,j;
if(!m){return p}c=this.get("itemHeightKey");l=this.get("itemSeparatorKey");b=this.get("itemHeight");
a=this.get("itemKeyEquivalentKey");f=this.get("itemSeparatorHeight");h=Math.floor(this.get("menuHeightPadding")/2);
e=h;d=this.menuItemKeys.map(SC._menu_fetchKeys,this);j=m.get("length");for(o=0;o<j;
o++){r=m[o];q=r.get(c);if(!q){q=r.get(l)?f:b}n=this._menuView.createChildView(k,{layout:{height:q,top:e},contentDisplayProperties:d,content:r,parentMenu:this});
p[o]=n;e+=q;g=r.get(a);if(g){this._keyEquivalents[g]=n}}this.set("menuHeight",e+h);
return p}.property("displayItems").cacheable(),menuItemViewForContentIndex:function(a){var b=this.get("menuItemViews");
if(!b){return undefined}return b.objectAt(a)},_keyEquivalents:{},rootMenu:function(){if(this.get("isSubMenu")){return this.getPath("parentMenu.rootMenu")
}return this}.property("isSubMenu").cacheable(),windowSizeDidChange:function(b,a){this.remove();
return arguments.callee.base.apply(this,arguments)},displayItems:function(){var d=this.get("items"),c=this.get("localize"),h=this.get("itemHeight"),b,e=[],a,f,g;
if(!d){return null}b=d.get("length");for(a=0;a<b;a++){f=d.objectAt(a);if(!f){continue
}g=SC.typeOf(f);if(g===SC.T_STRING){f=SC.Object.create({title:f,value:f,isEnabled:YES})
}else{if(g===SC.T_HASH){f=SC.Object.create(f)}else{if(g===SC.T_ARRAY){f=this.convertArrayMenuItemToObject(f)
}}}f.contentIndex=a;e.push(f)}return e}.property("items").cacheable(),_sc_menu_itemsDidChange:function(){var a=this.get("menuItemViews");
this._menuView.replaceAllChildren(a);this._menuView.adjust("height",this.get("menuHeight"))
}.observes("items"),convertArrayMenuItemToObject:function(f){SC.Logger.warn("Support for Array-based menu items has been deprecated.  Please update your menus to use a hash.");
var e,c=SC._menu_fetchKeys,b=SC._menu_fetchItem,h,d=SC.Object.create(),a,g;e=this.menuItemKeys.map(c,this);
d[e[0]]=f[0];d[e[1]]=f[1];d[e[2]]=f[2];d[e[3]]=f[3];d[e[4]]=f[4];d[e[5]]=f[5];d[e[6]]=f[6];
d[e[7]]=f[7];d[e[8]]=f[8];d[e[9]]=f[9];d[e[10]]=f[10];d[e[11]]=f[11];d[e[12]]=f[12];
return d},currentMenuItem:function(a,b){if(b!==undefined){if(this._currentMenuItem!==null){this.set("previousMenuItem",this._currentMenuItem)
}this._currentMenuItem=b;this.setPath("rootMenu.targetMenuItem",b);return b}return this._currentMenuItem
}.property().cacheable(),_sc_menu_currentMenuItemDidChange:function(){var a=this.get("currentMenuItem"),b=this.get("previousMenuItem");
if(b){if(b.get("hasSubMenu")&&a===null){}else{b.resignFirstResponder();this.closeOpenMenusFor(b)
}}if(a&&a.get("isEnabled")){a.scrollToVisible()}}.observes("currentMenuItem"),closeOpenMenusFor:function(a){if(!a){return
}var b=a.get("parentMenu");while(b&&a){b=a.get("subMenu");if(b){b.remove();a.resignFirstResponder();
a=b.get("previousMenuItem")}}},closeOpenMenus:function(){this.closeOpenMenusFor(this.get("previousMenuItem"))
},mouseDown:function(a){this.modalPaneDidClick();return YES},mouseEntered:function(a){this.set("mouseHasEntered",YES)
},keyUp:function(a){var b=this.interpretKeyEvents(a);return !b?NO:b},moveUp:function(){var c=this.get("currentMenuItem"),d=this.get("menuItemViews"),b,e,a;
if(!c){a=d.get("length")-1}else{b=c.getPath("content.contentIndex");if(b===0){return YES
}a=b-1}while(a>=0){if(d[a].get("isEnabled")){this.set("currentMenuItem",d[a]);d[a].becomeFirstResponder();
break}a--}return YES},moveDown:function(){var d=this.get("currentMenuItem"),e=this.get("menuItemViews"),b=e.get("length"),c,f,a;
if(!d){a=0}else{c=d.getPath("content.contentIndex");if(c===b){return YES}a=c+1}while(a<b){if(e[a].get("isEnabled")){this.set("currentMenuItem",e[a]);
e[a].becomeFirstResponder();break}a++}return YES},insertText:function(b,a){var d=this._timer,c=this._keyBuffer;
if(d){d.invalidate()}d=this._timer=SC.Timer.schedule({target:this,action:"clearKeyBuffer",interval:500,isPooled:NO});
c=c||"";c+=b.toUpperCase();this.selectMenuItemForString(c);this._keyBuffer=c;return YES
},performKeyEquivalent:function(b){var a=this._keyEquivalents[b];if(a){a.performAction(YES);
return YES}if(b==="escape"){this.remove();return YES}if(b==="return"){return YES}return NO
},selectMenuItemForString:function(c){var d=this.get("menuItemViews"),f,g,b,a,e;if(!d){return
}e=c.length;a=d.get("length");for(b=0;b<a;b++){f=d.objectAt(b);g=f.get("title");if(!g){continue
}g=g.replace(/ /g,"").substr(0,e).toUpperCase();if(g===c){this.set("currentMenuItem",f);
f.becomeFirstResponder();break}}},clearKeyBuffer:function(){this._keyBuffer=""},modalPaneDidClick:function(a){this.remove();
return YES}});SC._menu_fetchKeys=function(a){return this.get(a)};SC._menu_fetchItem=function(a){if(!a){return null
}return this.get?this.get(a):this[a]};SC.MenuPane.TINY_MENU_ITEM_HEIGHT=10;SC.MenuPane.TINY_MENU_ITEM_SEPARATOR_HEIGHT=2;
SC.MenuPane.TINY_MENU_HEIGHT_PADDING=2;SC.MenuPane.TINY_SUBMENU_OFFSET_X=0;SC.MenuPane.SMALL_MENU_ITEM_HEIGHT=16;
SC.MenuPane.SMALL_MENU_ITEM_SEPARATOR_HEIGHT=7;SC.MenuPane.SMALL_MENU_HEIGHT_PADDING=4;
SC.MenuPane.SMALL_SUBMENU_OFFSET_X=2;SC.MenuPane.REGULAR_MENU_ITEM_HEIGHT=20;SC.MenuPane.REGULAR_MENU_ITEM_SEPARATOR_HEIGHT=9;
SC.MenuPane.REGULAR_MENU_HEIGHT_PADDING=6;SC.MenuPane.REGULAR_SUBMENU_OFFSET_X=2;
SC.MenuPane.LARGE_MENU_ITEM_HEIGHT=60;SC.MenuPane.LARGE_MENU_ITEM_SEPARATOR_HEIGHT=20;
SC.MenuPane.LARGE_MENU_HEIGHT_PADDING=0;SC.MenuPane.LARGE_SUBMENU_OFFSET_X=4;SC.MenuPane.HUGE_MENU_ITEM_HEIGHT=20;
SC.MenuPane.HUGE_MENU_ITEM_SEPARATOR_HEIGHT=9;SC.MenuPane.HUGE_MENU_HEIGHT_PADDING=0;
SC.MenuPane.HUGE_SUBMENU_OFFSET_X=0;SC.MenuPane.VERTICAL_OFFSET=23;sc_require("views/button");
SC.SelectButtonView=SC.ButtonView.extend({escapeHTML:YES,objects:[],objectsBindingDefault:SC.Binding.multiple(),nameKey:null,sortKey:null,valueKey:null,iconKey:null,isEnabledKey:"isEnabled",localize:YES,disableSort:YES,classNames:["select-button"],menu:null,itemList:[],itemIdx:null,value:null,checkboxEnabled:YES,separatorPostion:null,_defaultVal:null,_defaultTitle:null,_defaultIcon:null,controlStyle:"popup",displayProperties:["icon","value","controlSize","objects"],preferMatrix:null,SELECT_BUTTON_SPRITE_WIDTH:28,isActiveBinding:"*menu.isVisibleInWindow",isDefaultPosition:NO,lastMenuWidth:null,customView:null,customViewClassName:null,customViewMenuOffsetWidth:0,needsEllipsis:YES,menuPaneHeightPadding:0,supportFocusRing:YES,leftAlign:function(){switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:return SC.SelectButtonView.TINY_OFFSET_X;
case SC.SMALL_CONTROL_SIZE:return SC.SelectButtonView.SMALL_OFFSET_X;case SC.REGULAR_CONTROL_SIZE:return SC.SelectButtonView.REGULAR_OFFSET_X;
case SC.LARGE_CONTROL_SIZE:return SC.SelectButtonView.LARGE_OFFSET_X;case SC.HUGE_CONTROL_SIZE:return SC.SelectButtonView.HUGE_OFFSET_X
}return 0}.property("controlSize"),sortObjects:function(b){if(!this.get("disableSort")){var a=this.get("sortKey")||this.get("nameKey");
b=b.sort(function(d,c){if(a){d=d.get?d.get(a):d[a];c=c.get?c.get(a):c[a]}return(d<c)?-1:((d>c)?1:0)
})}return b},render:function(b,e){arguments.callee.base.apply(this,arguments);var c,a,o,r,u,f,t,g,m,p,l,d,j,v,q,n,s,k,h;
c=this.layout.width;if(e&&c){this.adjust({width:c-this.SELECT_BUTTON_SPRITE_WIDTH})
}a=this.get("objects");a=this.sortObjects(a);o=a.length;r=this.get("nameKey");u=this.get("iconKey");
f=this.get("valueKey");h=this.get("isEnabledKey");t=this.get("checkboxEnabled");g=this.get("value");
m=this.get("localize");p=this.get("separatorPostion");l=[];d=YES;j=0;a.forEach(function(w){if(w){v=r?(w.get?w.get(r):w[r]):w.toString();
v=m?v.loc():v;q=u?(w.get?w.get(u):w[u]):null;if(SC.none(w[u])){q=null}n=(f)?(w.get?w.get(f):w[f]):w;
if(!SC.none(g)&&!SC.none(n)){if(g===n){this.set("title",v);this.set("icon",q)}}if(n===this.get("value")){this.set("itemIdx",j);
d=!t?NO:YES}else{d=NO}k=(h)?(w.get?w.get(h):w[h]):w;if(NO!==k){k=YES}if(j===0){this._defaultVal=n;
this._defaultTitle=v;this._defaultIcon=q}var x=SC.Object.create({title:v,icon:q,value:n,isEnabled:k,checkbox:d,target:this,action:"displaySelectedItem"});
l.push(x)}j+=1;if(p&&j===(o-p)){var y=SC.Object.create({separator:YES});l.push(y)
}this.set("itemList",l)},this);if(e){this.invokeLast(function(){var w=this.get("value");
if(SC.none(w)){this.set("value",this._defaultVal);this.set("title",this._defaultTitle);
this.set("icon",this._defaultIcon)}})}this.changeSelectButtonPreferMatrix(this.itemIdx)
},_action:function(o){var j,a,l,m,t,q,A,e,z,c,p,u,r,x,f,g,n,b,y,h,k;j=this.$(".sc-button-label")[0];
var B=SC.SelectButtonView.MENU_WIDTH_OFFSET;if(!this.get("isDefaultPosition")){switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:B+=SC.SelectButtonView.TINY_POPUP_MENU_WIDTH_OFFSET;
break;case SC.SMALL_CONTROL_SIZE:B+=SC.SelectButtonView.SMALL_POPUP_MENU_WIDTH_OFFSET;
break;case SC.REGULAR_CONTROL_SIZE:B+=SC.SelectButtonView.REGULAR_POPUP_MENU_WIDTH_OFFSET;
break;case SC.LARGE_CONTROL_SIZE:B+=SC.SelectButtonView.LARGE_POPUP_MENU_WIDTH_OFFSET;
break;case SC.HUGE_CONTROL_SIZE:B+=SC.SelectButtonView.HUGE_POPUP_MENU_WIDTH_OFFSET;
break}}a=this.get("layer").offsetWidth+B;l=j.scrollWidth;m=this.get("lastMenuWidth");
if(l){t=j.offsetWidth;if(l&&t){a=a+l-t}}if(!m||(a>m)){m=a}q=this.get("itemList");
var v=this.get("customViewClassName");var s=this.get("customViewMenuOffsetWidth");
var d="sc-view sc-pane sc-panel sc-palette sc-picker sc-menu select-button sc-scroll-view sc-menu-scroll-view sc-container-view menuContainer sc-button-view sc-menu-item sc-regular-size";
d=v?(d+" "+v):d;h=(this.get("customView")||SC.MenuItemView).create();k=h.get("escapeHTML");
for(p=0,y=q.length;p<y;++p){z=q.objectAt(p);c=document.createElement("div");c.style.cssText="top:-10000px; left: -10000px;  position: absolute;";
c.className=d;c.innerHTML=k?SC.RenderContext.escapeHTML(z.title):z.title;document.body.appendChild(c);
A=c.offsetWidth+s;if(!e||(A>e)){e=A}document.body.removeChild(c)}e=(e>m)?e:m;var w=SC.RootResponder.responder.get("currentWindowSize").width;
if(e>w){e=(w-25)}this.set("lastMenuWidth",m);u=this.get("value");r=this.get("itemList");
x=this.get("controlSize");g=this.get("customView");n=g?g:SC.MenuItemView;b=SC.MenuPane.create({classNames:["select-button"],items:r,exampleView:n,isEnabled:YES,preferType:SC.PICKER_MENU,itemHeightKey:"height",layout:{width:e},controlSize:x,itemWidth:m});
if(!b){return NO}b.popup(this,this.preferMatrix);this.set("menu",b);g=b.menuItemViewForContentIndex(this.get("itemIdx"));
b.set("currentMenuItem",g);g.becomeFirstResponder();this.set("isActive",YES);return YES
},displaySelectedItem:function(a){var b=this.getPath("menu.selectedItem");if(!b){return NO
}this.set("value",b.get("value"));this.set("title",b.get("title"));this.set("itemIdx",b.get("contentIndex"));
return YES},changeSelectButtonPreferMatrix:function(){var c=0,g=0;switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:c=SC.SelectButtonView.TINY_OFFSET_Y;
g=SC.MenuPane.TINY_MENU_ITEM_HEIGHT;break;case SC.SMALL_CONTROL_SIZE:c=SC.SelectButtonView.SMALL_OFFSET_Y;
g=SC.MenuPane.SMALL_MENU_ITEM_HEIGHT;break;case SC.REGULAR_CONTROL_SIZE:c=SC.SelectButtonView.REGULAR_OFFSET_Y;
g=SC.MenuPane.REGULAR_MENU_ITEM_HEIGHT;break;case SC.LARGE_CONTROL_SIZE:c=SC.SelectButtonView.LARGE_OFFSET_Y;
g=SC.MenuPane.LARGE_MENU_ITEM_HEIGHT;break;case SC.HUGE_CONTROL_SIZE:c=SC.SelectButtonView.HUGE_OFFSET_Y;
g=SC.MenuPane.HUGE_MENU_ITEM_HEIGHT;break}var e=c,b=this.get("itemIdx"),a=this.get("leftAlign"),f,d;
if(this.get("isDefaultPosition")){f=[1,0,3];this.set("preferMatrix",f)}else{if(b){e=b*g+c
}d=[a,-e,2];this.set("preferMatrix",d)}},mouseDown:function(a){if(!this.get("isEnabled")){return YES
}this.set("isActive",YES);this._isMouseDown=YES;this.becomeFirstResponder();this._action();
this.invokeLast(this._recordMouseDownTimestamp);return YES},_recordMouseDownTimestamp:function(){this._menuRenderedTimestamp=new Date().getTime()
},mouseUp:function(b){var d=new Date().getTime(),c=this._menuRenderedTimestamp,e=this.get("menu"),f=SC.platform.touch,a;
if(e){a=e.getPath("rootMenu.targetMenuItem");if(a&&a.get("mouseHasEntered")){if(!a.performAction()){e.remove()
}}else{if(!f&&(d-c>SC.ButtonView.CLICK_AND_HOLD_DELAY)){if(!e.get("mouseHasEntered")&&!this.get("isDefaultPosition")){a=e.get("currentMenuItem");
if(a&&!a.performAction()){e.remove()}}else{e.remove()}}}}this._isMouseDown=NO;this.set("isActive",NO);
return YES},mouseExited:function(){return YES},keyDown:function(a){if(this.interpretKeyEvents(a)){return YES
}else{arguments.callee.base.apply(this,arguments)}},interpretKeyEvents:function(a){if(a){if((a.keyCode===38||a.keyCode===40)){this._action()
}else{if(a.keyCode===27){this.resignFirstResponder()}}}return arguments.callee.base.apply(this,arguments)
},acceptsFirstResponder:function(){return this.get("isEnabled")}.property("isEnabled"),_button_isSelectedDidChange:function(){}.observes("isSelected")});
SC.SelectButtonView.TINY_OFFSET_X=0;SC.SelectButtonView.TINY_OFFSET_Y=0;SC.SelectButtonView.TINY_POPUP_MENU_WIDTH_OFFSET=0;
SC.SelectButtonView.SMALL_OFFSET_X=-18;SC.SelectButtonView.SMALL_OFFSET_Y=3;SC.SelectButtonView.SMALL_POPUP_MENU_WIDTH_OFFSET=7;
SC.SelectButtonView.REGULAR_OFFSET_X=-17;SC.SelectButtonView.REGULAR_OFFSET_Y=3;SC.SelectButtonView.REGULAR_POPUP_MENU_WIDTH_OFFSET=4;
SC.SelectButtonView.LARGE_OFFSET_X=-17;SC.SelectButtonView.LARGE_OFFSET_Y=6;SC.SelectButtonView.LARGE_POPUP_MENU_WIDTH_OFFSET=3;
SC.SelectButtonView.HUGE_OFFSET_X=0;SC.SelectButtonView.HUGE_OFFSET_Y=0;SC.SelectButtonView.HUGE_POPUP_MENU_WIDTH_OFFSET=0;
SC.SelectButtonView.MENU_WIDTH_OFFSET=-2;sc_require("panes/panel");SC.SheetPane=SC.PanelPane.extend({classNames:"sc-sheet",modalPane:SC.ModalPane,transitionDuration:200,_state:"NO_VIEW",init:function(){arguments.callee.base.apply(this,arguments);
if(SC.Animatable){SC.SheetPane.ANIMATABLE_AVAILABLE=YES;this.mixin(SC.Animatable);
if(!this.transitions){this.transitions={}}if(!this.transitions.top){this.transitions.top={duration:this.transitionDuration===200?0.3:this.transitionDuration/1000,action:"_complete",target:this}
}}},append:function(){var a=this.get("layout");if(!a.height||!a.top){a=SC.View.convertLayoutToAnchoredLayout(a,this.computeParentDimensions())
}a.top=-1*a.height;if(this.disableAnimation){this.disableAnimation()}this.adjust(a);
this.updateLayout();if(this.enableAnimation){this.enableAnimation()}return arguments.callee.base.apply(this,arguments)
},remove:function(){var b=this,a=arguments;this.invokeLater(function(){a.callee.base.apply(b,a)
},this.transitionDuration);this.slideUp();return this},paneDidAttach:function(){var a=arguments.callee.base.apply(this,arguments);
this.slideDown();return a},slideDown:function(){this._state=SC.SheetPane.ANIMATING;
this._direction=SC.SheetPane.SLIDE_DOWN;if(SC.SheetPane.ANIMATABLE_AVAILABLE){this.transitions.top.timing=SC.Animatable.TRANSITION_EASE_OUT;
this.adjust("top",0)}else{this._start=Date.now();this._end=this._start+this.get("transitionDuration");
this.tick()}},slideUp:function(){this._state=SC.SheetPane.ANIMATING;this._direction=SC.SheetPane.SLIDE_UP;
if(SC.SheetPane.ANIMATABLE_AVAILABLE){var a=this.get("layout");this.transitions.top.timing=SC.Animatable.TRANSITION_EASE_IN;
this.adjust("top",-1*a.height)}else{this._start=Date.now();this._end=this._start+this.get("transitionDuration");
this.tick()}},_complete:function(){var a=this._direction;if(a===SC.SheetPane.SLIDE_DOWN){if(!SC.SheetPane.ANIMATABLE_AVAILABLE){this.adjust("top",0)
}this.adjust({centerX:0,left:null});if(SC.browser.mozilla){this.parentViewDidChange()
}}else{var b=this.get("layout");if(!SC.SheetPane.ANIMATABLE_AVAILABLE){this.adjust("top",-1*b.height)
}}this._state=SC.SheetPane.READY;this.updateLayout()},blurTo:function(a){this.setFirstResponder("")
},tick:function(){this._timer=null;var b=Date.now();var e=(b-this._start)/(this._end-this._start),g=this,a=this._direction,c=this.get("layout"),d,f;
if(e<0){e=0}if(e>=1){this._complete();return this}f=Math.floor(c.height*e);if(a==SC.SheetPane.SLIDE_DOWN){g.adjust("top",0-(c.height-f))
}else{if(a==SC.SheetPane.SLIDE_UP){g.adjust("top",0-f)}}this._timer=this.invokeLater(this.tick,20);
g.updateLayout();return this}});SC.SheetPane.mixin({ANIMATABLE_AVAILABLE:NO,NO_VIEW:"NO_VIEW",ANIMATING:"ANIMATING",READY:"READY",SLIDE_DOWN:"SLIDEDOWN",SLIDE_UP:"SLIDEUP"});
SC.BaseTheme.renderers.Button=SC.Renderer.extend({controlSizeArray:[18,24,30,44],controlSizes:{18:SC.SMALL_CONTROL_SIZE,24:SC.REGULAR_CONTROL_SIZE,30:SC.HUGE_CONTROL_SIZE,44:SC.JUMBO_CONTROL_SIZE},init:function(a){this._controlRenderer=this.theme.control({controlSizes:this.controlSizes,controlSizeArray:this.controlSizeArray});
this._titleRenderer=this.theme.title();this.attr(a)},render:function(d){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._titleRenderer.attr({title:this.title,icon:this.icon,needsEllipsis:this.needsEllipsis,escapeHTML:this.escapeHTML});
this._controlRenderer.render(d);var a,b,c,e;if(this.isAnchor){a=this.href;if(!a||(a.length===0)){a="javascript:;"
}d.attr("href",a)}b=this.toolTip;if(SC.typeOf(b)===SC.T_STRING){d.attr("title",b);
d.attr("alt",b)}c=this._TEMPORARY_CLASS_HASH?this._TEMPORARY_CLASS_HASH:this._TEMPORARY_CLASS_HASH={};
c.def=this.isDefault;c.cancel=this.isCancel;c.icon=!!this.icon;d.attr("role","button").setClass(c);
e=this.oldButtonTheme;if(e){d.addClass(e)}this.renderContents(d)},renderContents:function(a){var b=(this.titleMinWidth?"style='min-width: "+this.titleMinWidth+"px'":"");
a=a.push("<span class='sc-button-inner' "+b+">");a=a.begin("label").addClass("sc-button-label");
this._titleRenderer.render(a);a=a.end();a.push("</span>");if(this.supportFocusRing){a.push('<div class="focus-ring">','<div class="focus-left"></div>','<div class="focus-middle"></div>','<div class="focus-right"></div></div>')
}},update:function(){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._titleRenderer.attr({title:this.title,icon:this.icon,needsEllipsis:this.needsEllipsis,escapeHTML:this.escapeHTML});
this._controlRenderer.update();var a,c,b=this.$();a=this._TEMPORARY_CLASS_HASH?this._TEMPORARY_CLASS_HASH:this._TEMPORARY_CLASS_HASH={};
a.def=this.isDefault;a.cancel=this.isCancel;a.icon=!!this.icon;b.setClass(a);this.updateContents()
},updateContents:function(){this._titleRenderer.update()},focus:function(){var a=this.$()[0];
a.focus()},didAttachLayer:function(a){this._titleRenderer.attachLayer(this.provide("label"));
this._controlRenderer.attachLayer(a)},willDetachLayer:function(){this._titleRenderer.detachLayer();
this._controlRenderer.detachLayer()}});SC.BaseTheme.renderers.button=SC.BaseTheme.renderers.Button.create();
SC.BaseTheme.renderers.Checkbox=SC.Renderer.extend({classNames:{"sc-checkbox":YES},controlSizeArray:[14,16],controlSizes:{14:SC.SMALL_CONTROL_SIZE,16:SC.REGULAR_CONTROL_SIZE},init:function(a){this._controlRenderer=this.theme.control({controlSizes:this.controlSizes,controlSizeArray:this.controlSizeArray});
this.attr(a)},render:function(a){arguments.callee.base.apply(this,arguments);this.renderControlRenderer(a);
a.attr("role","checkbox");if(SC.browser.msie){a.attr("for",this.guid)}a.attr("name",this.name);
a.attr("aria-checked",this.ariaValue);a.push('<span class="button"></span>');this.resetChanges()
},update:function(){arguments.callee.base.apply(this,arguments);this.updateControlRenderer();
if(this.didChange("ariaValue")){this.$().attr("aria-checked",this.ariaValue)}this.resetChanges()
},renderControlRenderer:function(a){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.render(a)},updateControlRenderer:function(){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.update()},didAttachLayer:function(a){this._controlRenderer.attachLayer(a)
},willDetachLayer:function(){this._controlRenderer.detachLayer()}});SC.BaseTheme.renderers.checkbox=SC.BaseTheme.renderers.Checkbox.create();
SC.BaseTheme.renderers.CheckboxControl=SC.Renderer.extend({classNames:{"sc-checkbox-control":YES},init:function(a){this._checkboxRenderer=this.theme.checkbox();
this._titleRenderer=this.theme.title();this.attr(a)},render:function(a){arguments.callee.base.apply(this,arguments);
this.renderCheckboxRenderer(a);this.renderTitleRenderer(a);this.resetChanges()},update:function(){arguments.callee.base.apply(this,arguments);
this.updateCheckboxRenderer();this.updateTitleRenderer();this.resetChanges()},renderCheckboxRenderer:function(a){this._checkboxRenderer.attr({ariaValue:this.ariaValue,isActive:this.isActive,isEnabled:this.isEnabled,isSelected:this.isSelected,controlSize:this.controlSize,name:this.name});
this._checkboxRenderer.render(a)},updateCheckboxRenderer:function(){this._checkboxRenderer.attr({ariaValue:this.ariaValue,isActive:this.isActive,isEnabled:this.isEnabled,isSelected:this.isSelected,controlSize:this.controlSize,name:this.name});
this._checkboxRenderer.update()},renderTitleRenderer:function(a){this._titleRenderer.attr({title:this.title,icon:this.icon,needsEllipsis:this.needsEllipsis,escapeHTML:this.escapeHTML});
a=a.begin("span").addClass("label");this._titleRenderer.render(a);a=a.end()},updateTitleRenderer:function(){this._titleRenderer.attr({title:this.title,icon:this.icon,needsEllipsis:this.needsEllipsis,escapeHTML:this.escapeHTML});
this._titleRenderer.update()},didAttachLayer:function(a){this._checkboxRenderer.attachLayer(a);
this._titleRenderer.attachLayer(this.provide("span.label"))},willDetachLayer:function(){this._checkboxRenderer.detachLayer();
this._titleRenderer.detachLayer()}});SC.BaseTheme.renderers.checkboxControl=SC.BaseTheme.renderers.CheckboxControl.create();
SC.BaseTheme.renderers.Disclosure=SC.Renderer.extend({classNames:{"sc-disclosure":YES},init:function(a){this._controlRenderer=this.theme.control();
this.attr(a)},render:function(a){arguments.callee.base.apply(this,arguments);this.renderControlRenderer(a);
var b=this.state?"open":"closed";a.push('<img src="'+SC.BLANK_IMAGE_URL+'" class="disclosure button '+b+'" />')
},update:function(a){arguments.callee.base.apply(this,arguments);this.updateControlRenderer();
var c=this.state,b=this.$("img");b.setClass("open",c);b.setClass("closed",!c);b.setClass("active",this.isActive)
},renderControlRenderer:function(a){this._controlRenderer.attr({controlSize:this.controlSize,isActive:this.isActive,isEnabled:this.isEnabled,isSelected:this.isSelected});
this._controlRenderer.render(a)},updateControlRenderer:function(){this._controlRenderer.attr({controlSize:this.controlSize,isActive:this.isActive,isEnabled:this.isEnabled,isSelected:this.isSelected});
this._controlRenderer.update()},focus:function(){var a=this.$()[0];a.focus()},didAttachLayer:function(a){this._controlRenderer.attachLayer(a)
},willDetachLayer:function(){this._controlRenderer.detachLayer()}});SC.BaseTheme.renderers.disclosure=SC.BaseTheme.renderers.Disclosure.create();
SC.BaseTheme.renderers.DisclosureControl=SC.Renderer.extend({classNames:{"sc-disclosure-control":YES},init:function(a){this._disclosureRenderer=this.theme.disclosure();
this._titleRenderer=this.theme.title();this.attr(a)},render:function(a){arguments.callee.base.apply(this,arguments);
this.renderDisclosureRenderer(a);this.renderTitleRenderer(a)},update:function(a){arguments.callee.base.apply(this,arguments);
this.updateDisclosureRenderer();this.updateTitleRenderer()},renderTitleRenderer:function(a){this._titleRenderer.attr({title:this.title,icon:this.icon,needsEllipsis:this.needsEllipsis,escapeHTML:this.escapeHTML});
a=a.begin("span").addClass("sc-button-label");this._titleRenderer.render(a);a=a.end()
},updateTitleRenderer:function(){this._titleRenderer.attr({title:this.title,icon:this.icon,needsEllipsis:this.needsEllipsis,escapeHTML:this.escapeHTML});
this._titleRenderer.update()},renderDisclosureRenderer:function(a){this._disclosureRenderer.attr({controlSize:this.controlSize,isActive:this.isActive,isEnabled:this.isEnabled,isSelected:this.isSelected,state:this.state});
this._disclosureRenderer.render(a)},updateDisclosureRenderer:function(){this._disclosureRenderer.attr({controlSize:this.controlSize,isActive:this.isActive,isEnabled:this.isEnabled,isSelected:this.isSelected,state:this.state});
this._disclosureRenderer.update()},focus:function(){var a=this.$()[0];a.focus()},didAttachLayer:function(a){this._disclosureRenderer.attachLayer(a);
this._titleRenderer.attachLayer(this.provide("span.sc-button-label"))},willDetachLayer:function(){this._disclosureRenderer.detachLayer();
this._titleRenderer.detachLayer()}});SC.BaseTheme.renderers.disclosureControl=SC.BaseTheme.renderers.DisclosureControl.create();
SC.BaseTheme.renderers.ImageButton=SC.Renderer.extend({render:function(a){var b=this.icon;
a.addClass("no-min-width");if(b){a.push("<div class='img "+b+"'></div>")}else{a.push("<div class='img'></div>")
}},update:function(){var a=this.$("img"),b=this.icon;if(b){a.attr("class","img "+b)
}else{a.attr("class","img")}}});SC.BaseTheme.renderers.imageButton=SC.BaseTheme.renderers.ImageButton.create();
SC.LIST_ITEM_COUNT_DIGITS=["zero","one","two","three","four","five"];SC.BaseTheme.renderers.ListItem=SC.Renderer.extend({init:function(a){this._controlRenderer=this.theme.control();
this.attr(a)},render:function(b){var a=this.outlineIndent,c=this.outlineLevel;this.renderControlRenderer(b);
b.setClass(this.calculateClassNames());b=b.begin("div").addClass("sc-outline");if(c>=0&&a>0){b.addStyle("left",a*(c+1))
}this.renderDisclosure(b);this.renderCheckbox(b);this.renderIcon(b);this.renderLabel(b);
this.renderRightIcon(b);this.renderCount(b);this.renderBranch(b);b=b.end();this.resetChanges()
},update:function(){this.updateControlRenderer();this.$().setClass(this.calculateClassNames());
this.updateDisclosure();this.updateCheckbox();this.updateIcon();this.updateLabel();
this.updateRightIcon();this.updateCount();this.updateBranch();this.resetChanges()
},didAttachLayer:function(a){this._controlRenderer.attachLayer(a);if(this._disclosureRenderer){this._disclosureRenderer.attachLayer(this.provide(".sc-disclosure-view"))
}if(this._checkboxRenderer){this._checkboxRenderer.attachLayer(this.provide(".sc-checkbox-view"))
}},willDetachLayer:function(){this._controlRenderer.detachLayer();if(this._disclosureRenderer){this._disclosureRenderer.detachLayer()
}if(this._checkboxRenderer){this._checkboxRenderer.detachLayer()}},calculateClassNames:function(){var f=this.classNames,d=SC.LIST_ITEM_COUNT_DIGITS,e=this.contentIndex%2===0,a,b,g;
f.even=e;f.odd=!e;f.disabled=!SC.none(this.isEnabled)&&!this.isEnabled;f["has-disclosure"]=!SC.none(this.disclosureState);
f["has-checkbox"]=!SC.none(this.checkbox);f["has-icon"]=!SC.none(this.icon);f["has-right-icon"]=!SC.none(this.rightIcon);
f["has-branch"]=!SC.none(this.branch);a=d.length;if(this.count){f["has-count"]=YES;
var c=this.count.toString().length;g=(c<a)?d[c]:d[a-1]}else{f["has-count"]=NO}for(b=0;
b<a;b++){f[d[b]+"-digit"]=d[b]===g}this.classNames=f;return f},renderControlRenderer:function(a){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.render(a)},updateControlRenderer:function(){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.update()},renderDisclosure:function(a){var c=this.disclosureState,b;
if(!SC.none(c)){if(!(b=this._disclosureRenderer)){b=this._disclosureRenderer=this.theme.disclosure()
}b.attr({isActive:this.disclosureActive||NO,isEnabled:this.isEnabled,isSelected:c,state:c});
a=a.begin("div").addClass("sc-disclosure-view");b.render(a);a=a.end()}},renderDisclosureViaQuery:function(){var a=SC.RenderContext();
this.renderDisclosure(a);this.applyContextToLayer(a,this.$(".sc-outline"));this._disclosureRenderer.attachLayer(this.provide(".sc-disclosure-view"))
},updateDisclosure:function(){var b,a=NO;if(this.didChange("disclosureState")){if(!(b=this._disclosureRenderer)){b=this._disclosureRenderer=this.theme.disclosure();
a=YES}b.attr({isActive:this.disclosureActive||NO,isEnabled:this.isEnabled,isSelected:this.disclosureState,state:this.disclosureState});
if(!SC.none(this.disclosureState)){if(!a){b.update()}else{this.renderDisclosureViaQuery()
}}else{if(!a){this._disclosureRenderer.detachLayer();this.$(".sc-disclosure-view").remove();
this._disclosureRenderer=null}}}},renderCheckbox:function(a){var c=this.checkbox,b;
if(!SC.none(c)){if(!(b=this._checkboxRenderer)){b=this._checkboxRenderer=this.theme.checkbox()
}b.attr({ariaValue:c?"true":"false",isActive:this.checkboxActive||NO,isEnabled:this.isEnabled&&this.contentIsEditable,isSelected:c,name:SC.guidFor(this)});
a=a.begin("div").addClass("sc-checkbox-view");b.render(a);a=a.end()}},renderCheckboxViaQuery:function(){var a=SC.RenderContext();
this.renderCheckbox(a);this.applyContextToLayer(a,this.$(".sc-outline"));this._checkboxRenderer.attachLayer(this.provide(".sc-checkbox-view"))
},updateCheckbox:function(b){var c,a=NO;if(!this.didChange("checkbox")&&!this.didChange("checkboxActive")){return
}if(!(c=this._checkboxRenderer)){c=this._checkboxRenderer=this.theme.checkbox();a=YES
}c.attr({ariaValue:this.checkbox?"true":"false",isActive:this.checkboxActive||NO,isEnabled:this.isEnabled&&this.contentIsEditable,isSelected:this.checkbox,name:SC.guidFor(this)});
if(!SC.none(this.checkbox)){if(!a){c.update()}else{this.renderCheckboxViaQuery()}}else{if(!a){this._checkboxRenderer.detachLayer();
this.$(".sc-checkbox-view").remove();this._checkboxRenderer=null}}},renderIcon:function(d,f,b){f=f||this.icon;
if(f){var c=null,e=null,a=[];if(f&&SC.ImageView.valueIsUrl(f)){e="";c=f}else{e=f;
c=SC.BLANK_IMAGE_URL}a.push(e,b||"icon");d.begin("img").addClass(a).attr("src",c).end()
}},updateIcon:function(a){},renderLabel:function(b){var a=this.escapeHTML?SC.RenderContext.escapeHTML(this.label):this.label;
b.push("<label>",a,"</label>")},updateLabel:function(){var a=this.escapeHTML?SC.RenderContext.escapeHTML(this.label):this.label;
this.$("label")[0].innerHTML=a},renderRightIcon:function(a){if(this.rightIcon){this.renderIcon(a,this.rightIcon,"right-icon")
}},updateRightIcon:function(){if(this.rightIcon){this.updateIcon(this.rightIcon,"right-icon")
}},renderCount:function(a){var b=this.count;if(!SC.none(b)&&(b!==0)){a.push('<span class="count"><span class="inner">',b.toString(),"</span></span>")
}},updateCount:function(){var a=this.count,b=this.$(".count");if(!SC.none(a)&&(a!==0)){b.find(".inner").text(a.toString())
}else{if(b.size()>0){b[0].parentNode.removeChild(b[0])}}},renderBranch:function(a){var b=this.branch;
if(!SC.none(b)){a.push('<span class="branch '+(b?"branch-visible":"branch-hidden")+'">&nbsp;</span>')
}},updateBranch:function(){var a=this.branch;if(!SC.none(a)){var b=this.$("span.branch");
b.setClass("branch-visible",a);b.setClass("branch-hidden",!a)}}});SC.BaseTheme.renderers.listItem=SC.BaseTheme.renderers.ListItem.create();
SC.BaseTheme.renderers.MasterDetail=SC.Renderer.extend({BORDER:1,render:function(a){if(this.contentProvider){this.contentProvider.renderContent(a)
}},update:function(){}});SC.BaseTheme.renderers.masterDetail=SC.BaseTheme.renderers.MasterDetail.create();
SC.BaseTheme.renderers.Panel=SC.Renderer.extend({render:function(a){if(this.contentProvider){this.contentProvider.renderContent(a)
}a.push("<div class='middle'></div>","<div class='top-left-edge'></div>","<div class='top-edge'></div>","<div class='top-right-edge'></div>","<div class='right-edge'></div>","<div class='bottom-right-edge'></div>","<div class='bottom-edge'></div>","<div class='bottom-left-edge'></div>","<div class='left-edge'></div>")
},update:function(){}});SC.BaseTheme.renderers.panel=SC.BaseTheme.renderers.Panel.create();
SC.BaseTheme.renderers.Picker=SC.Renderer.extend({init:function(a){this.attr(a);this.panelRenderer=this.theme.panel()
},render:function(a){this.panelRenderer.attr("contentProvider",this.contentProvider);
this.panelRenderer.render(a);if(this.preferType==SC.PICKER_POINTER||this.preferType==SC.PICKER_MENU_POINTER){a.push('<div class="sc-pointer '+this.pointerPos+'" style="margin-top: '+this.pointerPosY+'px"></div>');
a.addClass(this.pointerPos)}},update:function(){this.panelRenderer.attr("contentProvider",this.contentProvider);
this.panelRenderer.update();if(this.preferType==SC.PICKER_POINTER||this.preferType==SC.PICKER_MENU_POINTER){var a=this.$(".sc-pointer");
a.attr("class","sc-pointer "+this.pointerPos);a.attr("style","margin-top: "+this.pointerPosY+"px");
this.$().addClass(this.pointerPos)}},didAttachLayer:function(a){this.panelRenderer.attachLayer(a)
},willDetachLayer:function(){this.panelRenderer.detachLayer()}});SC.BaseTheme.renderers.picker=SC.BaseTheme.renderers.Picker.create();
SC.BaseTheme.renderers.Segment=SC.Renderer.extend({init:function(a){this._buttonRenderer=this.theme.button();
this.attr(a)},updateButtonRenderer:function(){this._buttonRenderer.attr({title:this.title,icon:this.icon,toolTip:this.toolTip,isEnabled:this.isEnabled,isSelected:this.isSelected,isActive:this.isActive,controlSize:this.controlSize})
},computeClasses:function(){var a=this._class_hash||{};a["sc-first-segment"]=this.isFirstSegment;
a["sc-middle-segment"]=this.isMiddleSegment;a["sc-last-segment"]=this.isLastSegment;
a["sc-segment"]=YES;this._class_hash=a;return a},render:function(a){this.updateButtonRenderer();
this._buttonRenderer.render(a);a.setClass(this.computeClasses());if(this.width){a.addStyle("width",this.width+"px")
}if(this.layoutDirection===SC.LAYOUT_HORIZONTAL){a.addStyle("display","inline-block")
}this.resetChanges()},update:function(){if(!this.hasChanges()){return}this.updateButtonRenderer();
this._buttonRenderer.update();this.$().setClass(this.computeClasses());if(this.didChange("width")){this.$().css("width",this.width?this.width+"px":"")
}if(this.didChange("layoutDirection")){this.$().css("display",this.layoutDirection==SC.LAYOUT_HORIZONTAL?"inline-block":"")
}this.resetChanges()},didAttachLayer:function(a){this._buttonRenderer.attachLayer(a)
},willDetachLayer:function(){this._buttonRenderer.detachLayer()}});SC.BaseTheme.renderers.segment=SC.BaseTheme.renderers.Segment.create();
SC.BaseTheme.renderers.Segmented=SC.Renderer.extend({controlSizeArray:[18,24,30,44],controlSizes:{18:SC.SMALL_CONTROL_SIZE,24:SC.REGULAR_CONTROL_SIZE,30:SC.HUGE_CONTROL_SIZE,44:SC.JUMBO_CONTROL_SIZE},init:function(a){this._controlRenderer=this.theme.control({controlSizes:this.controlSizes,controlSizeArray:this.controlSizeArray});
this._segments=[];this.attr(a)},render:function(e){var d=this.segments,b,a,c=[],h=this._segments,f,g;
this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.render(e);for(b=0,a=h.length;b<a;b++){h[b].detachLayer()}for(b=0,a=d.length;
b<a;b++){f=d[b];e=e.begin("a");e.addClass("segment-"+b);if(h.length>b){g=h[b]}else{g=this.theme.segment()
}g.attr(f);g.attr("layoutDirection",this.layoutDirection);g.attr("isFirstSegment",b===0);
g.attr("isLastSegment",b===a-1);g.attr("isMiddleSegment",b<a-1&&b>0);g.attr("controlSize",this.controlSize);
g.render(e);e=e.end();c.push(g);g.attachLayer(this.provide(".segment-"+b))}this._segments=c
},update:function(){if(this._segments.length!==this.segments.length){var f=this.layer();
if(!f){return}var e=SC.RenderContext(f);this.render(e);e.update();return}var d=this.segments,b,a=d.length,c=this._segments,g,h;
this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.update();for(b=0;b<a;b++){g=d[b];h=c[b];h.attr(g);h.attr("layoutDirection",this.layoutDirection);
h.attr("controlSize",this.controlSize);h.update()}},didAttachLayer:function(d){var c=this._segments,e,b,a=c.length;
this._controlRenderer.attachLayer(d);for(b=0;b<a;b++){e=c[b];e.attachLayer(this.provide(".segment-"+b))
}},willDetachLayer:function(){var c=this._segments,d,b,a=c.length;this._controlRenderer.detachLayer();
for(b=0;b<a;b++){c[b].detachLayer()}},indexForEvent:function(c){var f=c.pageX,e=c.pageY;
var d=this.$(".sc-segment"),b=d.length,a,h,g;for(a=0;a<b;a++){h=d[a];g=h.getBoundingClientRect();
if(this.layoutDirection==SC.LAYOUT_VERTICAL){if(e>g.top&&e<g.bottom){return a}}else{if(f>g.left&&f<g.right){return a
}}}return -1}});SC.BaseTheme.renderers.segmented=SC.BaseTheme.renderers.Segmented.create();
SC.BaseTheme.renderers.Slider=SC.Renderer.extend({controlSizeArray:[14,16,22],controlSizes:{14:SC.SMALL_CONTROL_SIZE,16:SC.REGULAR_CONTROL_SIZE,22:SC.JUMBO_CONTROL_SIZE},init:function(a){this._controlRenderer=this.theme.control({controlSizes:this.controlSizes,controlSizeArray:this.controlSizeArray});
this.attr(a)},render:function(a){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.render(a);this.renderSlider(a);this.resetChanges()},renderSlider:function(b){var a=SC.BLANK_IMAGE_URL;
b.push('<span class="sc-inner">','<span class="sc-leftcap"></span>','<span class="sc-rightcap"></span>','<img src="',a,'" class="sc-handle" style="left: ',this.value,'%" />',"</span>")
},update:function(){this._controlRenderer.attr({isEnabled:this.isEnabled,isActive:this.isActive,isSelected:this.isSelected,controlSize:this.controlSize});
this._controlRenderer.update();this.updateSlider();this.resetChanges()},updateSlider:function(){if(this.didChange("value")){this.$(".sc-handle").css("left",this.value+"%")
}},focus:function(){var a=this.$()[0];a.focus()},didAttachLayer:function(a){this._controlRenderer.attachLayer(a)
},willDetachLayer:function(){this._controlRenderer.detachLayer()}});SC.BaseTheme.renderers.slider=SC.BaseTheme.renderers.Slider.create();
SC.BaseTheme.renderers.Workspace=SC.Renderer.extend({render:function(a){if(this.contentProvider){this.contentProvider.renderContent(a)
}},update:function(){}});SC.BaseTheme.renderers.workspace=SC.BaseTheme.renderers.Workspace.create();
SC.DRAG_LINK=4;SC.DRAG_COPY=1;SC.DRAG_MOVE=2;SC.DRAG_NONE=0;SC.DRAG_ANY=7;SC.DRAG_AUTOSCROLL_ZONE_THICKNESS=20;
SC.Drag=SC.Object.extend({source:null,ghostView:null,ghostActsLikeCursor:NO,dragView:null,ghost:YES,slideBack:YES,ghostOffset:{x:0,y:0},location:{},dataTypes:function(){if(this.dataSource){return this.dataSource.get("dragDataTypes")||[]
}var d=this.data;if(d){var a=[];for(var b in d){if(d.hasOwnProperty(b)){a.push(b)
}}return a}var c=this.get("source");if(c&&c.dragDataTypes){return c.get("dragDataTypes")||[]
}return[]}.property().cacheable(),hasDataType:function(a){return(this.get("dataTypes").indexOf(a)>=0)
},dataForType:function(a){if(this.dataSource){return this.dataSource.dragDataForType(this,a)
}else{if(this.data){return this.data[a]}else{var b=this.get("source");if(b&&SC.typeOf(b.dragDataForType)==SC.T_FUNCTION){return b.dragDataForType(this,a)
}else{return null}}}},dataSource:null,data:null,allowedDragOperations:SC.DRAG_ANY,_dragInProgress:YES,_dragViewWasVisible:null,startDrag:function(){this._createGhostView();
var h=this.event;var e={x:h.pageX,y:h.pageY};this.set("location",e);var b=this._getDragView();
var j=b.get("parentView");var g=j?j.convertFrameToView(b.get("frame"),null):b.get("frame");
if(this.get("ghost")){this._dragViewWasVisible=b.get("isVisible");b.set("isVisible",NO)
}if(this.ghostActsLikeCursor){this.ghostOffset={x:14,y:14}}else{this.ghostOffset={x:(e.x-g.x),y:(e.y-g.y)}
}if(!this._ghostViewHidden){this._positionGhostView(h)}if(h.makeTouchResponder){var k=this;
SC.Timer.schedule({target:h,action:function(){if(!h.hasEnded){h.makeTouchResponder(k,YES)
}},interval:1})}else{this.ghostView.rootResponder.dragDidStart(this,h)}var a=this.source;
if(a&&a.dragDidBegin){a.dragDidBegin(this,e)}var c=this._dropTargets();for(var f=0,d=c.length;
f<d;f++){c[f].tryToPerform("dragStarted",this,h)}},touchStart:function(a){return YES
},mouseDragged:function(a){var b=this._autoscroll(a);var f=this.get("location");if(!b&&(a.pageX===f.x)&&(a.pageY===f.y)){return
}f={x:a.pageX,y:a.pageY};this.set("location",f);var d=this.source;var c=this._lastTarget;
var e=this._findDropTarget(a);var g=SC.DRAG_NONE;while(e&&(e!==c)&&(g===SC.DRAG_NONE)){if(e&&d&&d.dragSourceOperationMaskFor){g=d.dragSourceOperationMaskFor(this,e)
}else{g=SC.DRAG_ANY}if((g!==SC.DRAG_NONE)&&e&&e.computeDragOperations){g=g&e.computeDragOperations(this,a,g)
}else{g=SC.DRAG_NONE}this.allowedDragOperations=g;if(g===SC.DRAG_NONE){e=this._findNextDropTarget(e)
}}if(e!==c){if(c&&c.dragExited){c.dragExited(this,a)}if(e){if(e.dragEntered){e.dragEntered(this,a)
}if(e.dragUpdated){e.dragUpdated(this,a)}}this._lastTarget=e}else{if(e&&e.dragUpdated){e.dragUpdated(this,a)
}}if(d&&d.dragDidMove){d.dragDidMove(this,f)}if(!this._ghostViewHidden){this._positionGhostView(a)
}},touchesDragged:function(a){this.mouseDragged(a)},mouseUp:function(m){var g={x:m.pageX,y:m.pageY},h=this._lastTarget,d=this.allowedDragOperations;
this.set("location",g);try{if(h&&h.acceptDragOperation&&h.acceptDragOperation(this,d)){d=h.performDragOperation?h.performDragOperation(this,d):SC.DRAG_NONE
}else{d=SC.DRAG_NONE}}catch(j){console.error("Exception in SC.Drag.mouseUp(acceptDragOperation|performDragOperation): %@".fmt(j))
}try{if(h&&h.dragExited){h.dragExited(this,m)}}catch(k){console.error("Exception in SC.Drag.mouseUp(target.dragExited): %@".fmt(k))
}var c=this._dropTargets();for(var l=0,f=c.length;l<f;l++){try{c[l].tryToPerform("dragEnded",this,m)
}catch(b){console.error("Exception in SC.Drag.mouseUp(dragEnded on %@): %@".fmt(c[l],b))
}}this._destroyGhostView();if(this.get("ghost")){if(this._dragViewWasVisible){this._getDragView().set("isVisible",YES)
}this._dragViewWasVisible=null}var a=this.source;if(a&&a.dragDidEnd){a.dragDidEnd(this,g,d)
}this._lastTarget=null;this._dragInProgress=NO},touchEnd:function(a){this.mouseUp(a)
},_getDragView:function(){if(!this.dragView){if(!this.source||!this.source.isView){throw"Source can't be used as dragView, because it's not a view."
}this.dragView=this.source}return this.dragView},_createGhostView:function(){var c=this,b=this._getDragView(),d=b.get("frame"),a;
a=this.ghostView=SC.Pane.create({classNames:["sc-ghost-view"],layout:{top:d.y,left:d.x,width:d.width,height:d.height},owner:this,didCreateLayer:function(){if(b){var e=b.get("layer");
if(e){e=e.cloneNode(true);e.style.top="0px";e.style.left="0px";this.get("layer").appendChild(e)
}}}});a.append()},_positionGhostView:function(a){var c=this.get("location");c.x-=this.ghostOffset.x;
c.y-=this.ghostOffset.y;var b=this.ghostView;if(b){b.adjust({top:c.y,left:c.x});b.invokeOnce("updateLayout")
}},_ghostViewHidden:NO,hideGhostView:function(){if(this.ghostView&&!this._ghostViewHidden){this.ghostView.remove();
this._ghostViewHidden=YES}},unhideGhostView:function(){if(this._ghostViewHidden){this._ghostViewHidden=NO;
this._createGhostView()}},_destroyGhostView:function(){if(this.ghostView){this.ghostView.remove();
this.ghostView=null;this._ghostViewHidden=NO}},_dropTargets:function(){if(this._cachedDropTargets){return this._cachedDropTargets
}var b=[];var d=SC.Drag._dropTargets;for(var c in d){if(d.hasOwnProperty(c)){b.push(d[c])
}}var f={};var e=SC.Drag._dropTargets;var a=function(g){if(!g){return 0}var j=SC.guidFor(g);
var h=f[j];if(!h){h=1;while(g=g.get("parentView")){if(e[SC.guidFor(g)]!==undefined){h++
}}f[j]=h}return h};b.sort(function(h,g){if(h===g){return 0}h=a(h);g=a(g);return(h>g)?-1:1
});this._cachedDropTargets=b;return b},_findDropTarget:function(c){var g={x:c.pageX,y:c.pageY};
var e,f;var d=this._dropTargets();for(var b=0,a=d.length;b<a;b++){e=d[b];if(!e.get("isVisibleInWindow")){continue
}f=e.convertFrameToView(e.get("clippingFrame"),null);if(SC.pointInRect(g,f)){return e
}}return null},_findNextDropTarget:function(a){var b=SC.Drag._dropTargets;while(a=a.get("parentView")){if(b[SC.guidFor(a)]){return a
}}return null},_autoscroll:function(m){if(!m){m=this._lastAutoscrollEvent}if(!this._dragInProgress){return NO
}var g=m?{x:m.pageX,y:m.pageY}:this.get("location"),h=this._findScrollableView(g),n=null,l,c,d,j,b,a,e;
while(h&&!n){l=h.get("canScrollVertical")?1:0;c=h.get("canScrollHorizontal")?1:0;
if(l||c){a=h.get("containerView");if(a){e=h.convertFrameToView(a.get("frame"),null)
}else{l=c=0}}if(l){j=SC.maxY(e);d=j-SC.DRAG_AUTOSCROLL_ZONE_THICKNESS;if(g.y>=d&&g.y<=j){l=1
}else{d=SC.minY(e);j=d+SC.DRAG_AUTOSCROLL_ZONE_THICKNESS;if(g.y>=d&&g.y<=j){l=-1}else{l=0
}}}if(c){j=SC.maxX(e);d=j-SC.DRAG_AUTOSCROLL_ZONE_THICKNESS;if(g.x>=d&&g.x<=j){c=1
}else{d=SC.minX(e);j=d+SC.DRAG_AUTOSCROLL_ZONE_THICKNESS;if(g.x>=d&&g.x<=j){c=-1}else{c=0
}}}if(l||c){n=h}else{h=this._findNextScrollableView(h)}}if(n&&(this._lastScrollableView===n)){if((Date.now()-this._hotzoneStartTime)>100){this._horizontalScrollAmount*=1.05;
this._verticalScrollAmount*=1.05}}else{this._lastScrollableView=n;this._horizontalScrollAmount=15;
this._verticalScrollAmount=15;this._hotzoneStartTime=(n)?Date.now():null;c=l=0}if(n&&(c||l)){var k={x:c*this._horizontalScrollAmount,y:l*this._verticalScrollAmount};
n.scrollBy(k)}if(n){if(m){this._lastAutoscrollEvent={pageX:m.pageX,pageY:m.pageY}
}this.invokeLater(this._autoscroll,100,null);return YES}else{this._lastAutoscrollEvent=null;
return NO}},_scrollableViews:function(){if(this._cachedScrollableView){return this._cachedScrollableView
}var a=[];var c=SC.Drag._scrollableViews;for(var b in c){if(c.hasOwnProperty(b)){a.push(c[b])
}}a=a.sort(function(f,d){var e=f;while(e=e.get("parentView")){if(d==e){return -1}}return 1
});this._cachedScrollableView=a;return a},_findScrollableView:function(f){var c=this._scrollableViews(),b=c?c.length:0,d,e,a;
for(a=0;a<b;a++){d=c[a];if(!d.get("isVisibleInWindow")){continue}e=d.convertFrameToView(d.get("clippingFrame"),null);
if(SC.pointInRect(f,e)){return d}}return null},_findNextScrollableView:function(a){var b=SC.Drag._scrollableViews;
while(a=a.get("parentView")){if(b[SC.guidFor(a)]){return a}}return null}});SC.Drag.mixin({start:function(b){var a=this.create(b);
a.startDrag();return a},_dropTargets:{},_scrollableViews:{},addDropTarget:function(a){this._dropTargets[SC.guidFor(a)]=a
},removeDropTarget:function(a){delete this._dropTargets[SC.guidFor(a)]},addScrollableView:function(a){this._scrollableViews[SC.guidFor(a)]=a
},removeScrollableView:function(a){delete this._scrollableViews[SC.guidFor(a)]}});
SC.MODIFIED_KEY_BINDINGS={"ctrl_.":"cancel",shift_tab:"insertBacktab",shift_left:"moveLeftAndModifySelection",shift_right:"moveRightAndModifySelection",shift_up:"moveUpAndModifySelection",shift_down:"moveDownAndModifySelection",alt_left:"moveLeftAndModifySelection",alt_right:"moveRightAndModifySelection",alt_up:"moveUpAndModifySelection",alt_down:"moveDownAndModifySelection",ctrl_a:"selectAll"};
SC.BASE_KEY_BINDINGS={escape:"cancel",backspace:"deleteBackward","delete":"deleteForward","return":"insertNewline",tab:"insertTab",left:"moveLeft",right:"moveRight",up:"moveUp",down:"moveDown",home:"moveToBeginningOfDocument",end:"moveToEndOfDocument",pagedown:"pageDown",pageup:"pageUp"};
require("core");SC.UndoManager=SC.Object.extend({undoActionName:function(){return this.undoStack?this.undoStack.name:null
}.property("undoStack"),redoActionName:function(){return this.redoStack?this.redoStack.name:null
}.property("redoStack"),canUndo:function(){return this.undoStack!=null}.property("undoStack"),canRedo:function(){return this.redoStack!=null
}.property("redoStack"),undo:function(){this._undoOrRedo("undoStack","isUndoing")
},redo:function(){this._undoOrRedo("redoStack","isRedoing")},isUndoing:false,isRedoing:false,groupingLevel:0,registerUndo:function(b,a){this.beginUndoGroup(a);
this._activeGroup.actions.push(b);this.endUndoGroup(a)},beginUndoGroup:function(b){if(this._activeGroup){this.groupingLevel++
}else{var a=this.isUndoing?"redoStack":"undoStack";this._activeGroup={name:b,actions:[],prev:this.get(a)};
this.set(a,this._activeGroup);this.groupingLevel=1}},endUndoGroup:function(a){if(!this._activeGroup){raise("endUndoGroup() called outside group.")
}if(this.groupingLevel>1){this.groupingLevel--}else{this._activeGroup=null;this.groupingLevel=0
}this.propertyDidChange(this.isUndoing?"redoStack":"undoStack")},setActionName:function(a){if(!this._activeGroup){raise("setActionName() called outside group.")
}this._activeGroup.name=a},_activeGroup:null,undoStack:null,redoStack:null,_undoOrRedo:function(a,c){if(this._activeGroup){return false
}if(this.get(a)==null){return true}this.set(c,true);var e=this.get(a);this.set(a,e.prev);
var b;var d=e.actions.length>1;if(d){this.beginUndoGroup(e.name)}while(b=e.actions.pop()){b()
}if(d){this.endUndoGroup(e.name)}this.set(c,false)}});SC.CheckboxView=SC.ButtonView.extend(SC.StaticLayout,SC.Button,{classNames:["sc-checkbox-view","sc-checkbox-control"],tagName:"label",controlStyle:"",needsEllipsis:NO,routeTouch:NO,createRenderer:function(a){return a.checkboxControl()
},updateRenderer:function(a){var b=this.get("value");a.attr({title:this.get("displayTitle"),name:SC.guidFor(this),ariaValue:b===SC.MIXED_MODE?"mixed":(b===this.get("toggleOnValue")?"true":"false"),needsEllipsis:this.get("needsEllipsis"),escapeHTML:this.get("escapeHTML"),icon:this.get("icon")})
},acceptsFirstResponder:function(){if(!SC.SAFARI_FOCUS_BEHAVIOR){return this.get("isEnabled")
}else{return NO}}.property("isEnabled"),mouseDown:function(a){if(!this.get("isEnabled")){return YES
}this.set("isActive",YES);this._isMouseDown=YES;if(a){a.allowDefault()}return YES
},mouseUp:function(a){if(!this.get("isEnabled")||(a&&a.target&&!this.$().within(a.target))){return YES
}var b=this.get("value");if(b===this.get("toggleOnValue")){this.renderer.attr("ariaValue","false");
this.renderer.update();this.set("value",this.get("toggleOffValue"))}else{this.renderer.attr("ariaValue","true");
this.renderer.update();this.set("value",this.get("toggleOnValue"))}this.set("isActive",NO);
this._isMouseDown=NO;return YES},touchStart:function(a){return this.mouseDown(a)},touchEnd:function(a){return this.mouseUp(a)
}});SC.LIST_ITEM_ACTION_CANCEL="sc-list-item-cancel-action";SC.LIST_ITEM_ACTION_REFRESH="sc-list-item-cancel-refresh";
SC.LIST_ITEM_ACTION_EJECT="sc-list-item-cancel-eject";SC.ListItemView=SC.View.extend(SC.StaticLayout,SC.Control,{classNames:["sc-list-item-view"],displayProperties:["disclosureState","escapeHTML"],init:function(){arguments.callee.base.apply(this,arguments);
if(this.render!==SC.View.prototype.render){this.render.base=this.__DEPRECATED__render
}},content:null,hasContentIcon:NO,hasContentRightIcon:NO,hasContentBranch:NO,contentCheckboxKey:null,icon:null,contentIconKey:null,rightIcon:null,contentRightIconKey:null,contentValueKey:null,escapeHTML:YES,contentUnreadCountKey:null,contentIsBranchKey:null,isEditing:NO,outlineIndent:16,outlineLevel:0,disclosureState:SC.LEAF_NODE,validator:null,contentPropertyDidChange:function(){if(this.get("contentIsEditable")!==this.contentIsEditable()){this.notifyPropertyChange("contentIsEditable")
}this.displayDidChange()},contentIsEditable:function(){var a=this.get("content");
return a&&(a.get?a.get("isEditable")!==NO:NO)}.property("content").cacheable(),createRenderer:function(b){var a=b.listItem();
this.updateRenderer(a);return a},updateRenderer:function(f){var d=this.get("content"),a=this.displayDelegate,c,e;
var b={contentIndex:this.get("contentIndex"),contentIsEditable:this.get("contentIsEditable"),escapeHTML:this.get("escapeHTML"),isEnabled:this.get("isEnabled"),outlineIndent:this.get("outlineIndent"),outlineLevel:this.get("outlineLevel")};
e=this.get("disclosureState");if(e!==SC.LEAF_NODE){b.disclosureState=e===SC.BRANCH_OPEN?YES:NO
}else{b.disclosureState=null}if(c=this.getDelegateProperty("contentCheckboxKey",a)){e=d?(d.get?d.get(c):d[c]):NO;
b.checkbox=e}if(this.getDelegateProperty("hasContentIcon",a)){c=this.getDelegateProperty("contentIconKey",a);
e=(c&&d)?(d.get?d.get(c):d[c]):null;b.icon=e}else{if(!SC.none(this.icon)){b.icon=this.get("icon")
}}c=this.getDelegateProperty("contentValueKey",a);e=(c&&d)?(d.get?d.get(c):d[c]):d;
if(e&&SC.typeOf(e)!==SC.T_STRING){e=e.toString()}b.label=e;if(this.getDelegateProperty("hasContentRightIcon",a)){c=this.getDelegateProperty("contentRightIconKey",a);
e=(c&&d)?(d.get?d.get(c):d[c]):null;b.rightIcon=e}else{if(!SC.none(this.rightIcon)){b.rightIcon=this.get("rightIcon")
}}c=this.getDelegateProperty("contentUnreadCountKey",a);e=(c&&d)?(d.get?d.get(c):d[c]):null;
b.count=e;if(this.getDelegateProperty("hasContentBranch",a)){c=this.getDelegateProperty("contentIsBranchKey",a);
e=(c&&d)?(d.get?d.get(c):d[c]):NO;b.branch=e}f.attr(b)},$label:function(){return this.$("label")
},renderAction:function(a,b){a.push('<img src="',SC.BLANK_IMAGE_URL,'" class="action" />')
},_isInsideElementWithClassName:function(e,a){var c=this.get("layer");if(!c){return NO
}var d=SC.$(a.target);var b=NO,f;while(!b&&d.length>0&&(d[0]!==c)){if(d.hasClass(e)){b=YES
}d=d.parent()}d=c=null;return b},_isInsideCheckbox:function(b){var a=this.displayDelegate;
var c=this.getDelegateProperty("contentCheckboxKey",a);return c&&this._isInsideElementWithClassName("sc-checkbox-view",b)
},_isInsideDisclosure:function(a){if(this.get("disclosureState")===SC.LEAF_NODE){return NO
}return this._isInsideElementWithClassName("disclosure",a)},_isInsideRightIcon:function(c){var b=this.displayDelegate;
var a=this.getDelegateProperty("hasContentRightIcon",b);return a&&this._isInsideElementWithClassName("right-icon",c)
},mouseDown:function(a){if(!this.get("contentIsEditable")){return NO}if(this._isInsideCheckbox(a)){this._addCheckboxActiveState();
this._isMouseDownOnCheckbox=YES;this._isMouseInsideCheckbox=YES;return YES}else{if(this._isInsideDisclosure(a)){this._addDisclosureActiveState();
this._isMouseDownOnDisclosure=YES;this._isMouseInsideDisclosure=YES;return YES}else{if(this._isInsideRightIcon(a)){this._addRightIconActiveState();
this._isMouseDownOnRightIcon=YES;this._isMouseInsideRightIcon=YES;return YES}}}return NO
},mouseUp:function(h){var c=NO,j,d,b,a,g,f;if(this._isMouseDownOnCheckbox){if(this._isInsideCheckbox(h)){j=this.displayDelegate;
d=this.getDelegateProperty("contentCheckboxKey",j);b=this.get("content");if(b&&b.get){var e=b.get(d);
e=(e===SC.MIXED_STATE)?YES:!e;b.set(d,e);this.displayDidChange()}}this._removeCheckboxActiveState();
c=YES}else{if(this._isMouseDownOnDisclosure){if(this._isInsideDisclosure(h)){a=this.get("disclosureState");
g=this.get("contentIndex");f=(!SC.none(g))?SC.IndexSet.create(g):null;j=this.get("displayDelegate");
if(a===SC.BRANCH_OPEN){if(f&&j&&j.collapse){j.collapse(f)}else{this.set("disclosureState",SC.BRANCH_CLOSED)
}this.displayDidChange()}else{if(a===SC.BRANCH_CLOSED){if(f&&j&&j.expand){j.expand(f)
}else{this.set("disclosureState",SC.BRANCH_OPEN)}this.displayDidChange()}}}this._removeDisclosureActiveState();
c=YES}else{if(this._isMouseDownOnRightIcon){this._removeRightIconActiveState();c=YES
}}}this._isMouseInsideCheckbox=this._isMouseDownOnCheckbox=NO;this._isMouseDownOnDisclosure=this._isMouseInsideDisclosure=NO;
this._isMouseInsideRightIcon=this._isMouseDownOnRightIcon=NO;return c},mouseMoved:function(a){if(this._isMouseDownOnCheckbox&&this._isInsideCheckbox(a)){this._addCheckboxActiveState();
this._isMouseInsideCheckbox=YES}else{if(this._isMouseDownOnCheckbox){this._removeCheckboxActiveState();
this._isMouseInsideCheckbox=NO}else{if(this._isMouseDownOnDisclosure&&this._isInsideDisclosure(a)){this._addDisclosureActiveState();
this._isMouseInsideDisclosure=YES}else{if(this._isMouseDownOnDisclosure){this._removeDisclosureActiveState();
this._isMouseInsideDisclosure=NO}else{if(this._isMouseDownOnRightIcon&&this._isInsideRightIcon(a)){this._addRightIconActiveState();
this._isMouseInsideRightIcon=YES}else{if(this._isMouseDownOnRightIcon){this._removeRightIconActiveState();
this._isMouseInsideRightIcon=NO}}}}}}return NO},touchStart:function(a){return this.mouseDown(a)
},touchEnd:function(a){return this.mouseUp(a)},touchEntered:function(a){return this.mouseEntered(a)
},touchExited:function(a){return this.mouseExited(a)},_addCheckboxActiveState:function(){if(this.get("isEnabled")){this.renderer.attr({checkboxActive:YES});
this.displayDidChange()}},_removeCheckboxActiveState:function(){this.renderer.attr({checkboxActive:NO});
this.displayDidChange()},_addDisclosureActiveState:function(){if(this.get("isEnabled")){this.renderer.attr({disclosureActive:YES});
this.displayDidChange()}},_removeDisclosureActiveState:function(){this.renderer.attr({disclosureActive:NO});
this.displayDidChange()},_addRightIconActiveState:function(){this.$("img.right-icon").setClass("active",YES)
},_removeRightIconActiveState:function(){this.$("img.right-icon").removeClass("active")
},contentHitTest:function(b){var a=this.displayDelegate;var c=this.getDelegateProperty("contentValueKey",a);
if(!c){return NO}var e=this.$label()[0];if(!e){return NO}var f=b.target,d=this.get("layer");
while(f&&(f!==d)&&(f!==window)){if(f===e){return YES}f=f.parentNode}return NO},beginEditing:function(){if(this.get("isEditing")){return YES
}return this._beginEditing(YES)},_beginEditing:function(w){var q=this.get("content"),h=this.get("displayDelegate"),g=this.getDelegateProperty("contentValueKey",h),j=this.get("parentView"),u=j?j.get("frame"):null,a=this.$label(),d=this.get("validator"),s,l,e,m,b,o,c,p,t,r,x;
if(w&&this.scrollToVisible()){var k=this.get("owner"),n=this.get("contentIndex");
this.invokeLast(function(){var f=k.itemViewForContentIndex(n);if(f&&f._beginEditing){f._beginEditing(NO)
}});return YES}if(!j||!a||a.get("length")===0){return NO}l=(g&&q&&q.get)?q.get(g):null;
s=this.computeFrameWithParentFrame(null);e=SC.viewportOffset(a[0]);m=a.css("lineHeight");
b=a.css("fontSize");o=this.$().css("top");if(o){o=parseInt(o.substring(0,o.length-2),0)
}else{o=0}c=m;t=0;if(b&&c){r=b*1.5;if(r<c){a.css({lineHeight:"1.5"});t=(c-r)/2}else{m=null
}}s.x=e.x;s.y=e.y+o+t;s.height=a[0].offsetHeight;s.width=a[0].offsetWidth;p=this.get("escapeHTML");
x=SC.InlineTextFieldView.beginEditing({frame:s,exampleElement:a,delegate:this,value:l,multiline:NO,isCollection:YES,validator:d,escapeHTML:p});
if(m){a.css({lineHeight:m})}return x},commitEditing:function(){if(!this.get("isEditing")){return YES
}return SC.InlineTextFieldView.commitEditing()},discardEditing:function(){if(!this.get("isEditing")){return YES
}return SC.InlineTextFieldView.discardEditing()},inlineEditorShouldBeginEditing:function(a){return YES
},inlineEditorWillBeginEditing:function(a){this.set("isEditing",YES)},inlineEditorDidBeginEditing:function(b){var a=this.$label();
this._oldOpacity=a.css("opacity");a.css("opacity",0)},inlineEditorShouldBeginEditing:function(a){return YES
},inlineEditorShouldBeginEditing:function(a,b){return YES},inlineEditorShouldEndEditing:function(a,b){return YES
},inlineEditorDidEndEditing:function(c,e){this.set("isEditing",NO);var d=this.get("content");
var a=this.displayDelegate;var b=this.getDelegateProperty("contentValueKey",a);if(b&&d&&d.set){d.set(b,e)
}this.displayDidChange()},deprecatedRenderWarning:function(){if(!SC.ListItemView._deprecatedRenderWarningHasBeenIssued){SC.ListItemView._deprecatedRenderWarningHasBeenIssued=true;
SC.Logger.warn("!!!DEPRECATED LIST ITEM RENDER METHODS BEING USED!!!\nQuilmes comes with a new Renderer system, please consider using it in your custom views to future-proof your application!")
}},__DEPRECATED__render:function(c,a){this.deprecatedRenderWarning();var f=this.get("content"),n=this.displayDelegate,b=this.get("outlineLevel"),e=this.get("outlineIndent"),m,k,j,o=[];
o.push((this.get("contentIndex")%2===0)?"even":"odd");c.setClass("disabled",!this.get("isEnabled"));
j=c.begin("div").addClass("sc-outline");if(b>=0&&e>0){j.addStyle("left",e*(b+1))}k=this.get("disclosureState");
if(k!==SC.LEAF_NODE){this.renderDisclosure(j,k);o.push("has-disclosure")}m=this.getDelegateProperty("contentCheckboxKey",n);
if(m){k=f?(f.get?f.get(m):f[m]):NO;this.renderCheckbox(j,k);o.push("has-checkbox")
}if(this.getDelegateProperty("hasContentIcon",n)){m=this.getDelegateProperty("contentIconKey",n);
k=(m&&f)?(f.get?f.get(m):f[m]):null;this.renderIcon(j,k);o.push("has-icon")}m=this.getDelegateProperty("contentValueKey",n);
k=(m&&f)?(f.get?f.get(m):f[m]):f;if(k&&SC.typeOf(k)!==SC.T_STRING){k=k.toString()
}if(this.get("escapeHTML")){k=SC.RenderContext.escapeHTML(k)}this.renderLabel(j,k);
if(this.getDelegateProperty("hasContentRightIcon",n)){m=this.getDelegateProperty("contentRightIconKey",n);
k=(m&&f)?(f.get?f.get(m):f[m]):null;this.renderRightIcon(j,k);o.push("has-right-icon")
}m=this.getDelegateProperty("contentUnreadCountKey",n);k=(m&&f)?(f.get?f.get(m):f[m]):null;
if(!SC.none(k)&&(k!==0)){this.renderCount(j,k);var d=["zero","one","two","three","four","five"];
var l=k.toString().length;var h=d.length;var g=(l<h)?d[l]:d[h-1];o.push("has-count "+g+"-digit")
}m=this.getDelegateProperty("listItemActionProperty",n);k=(m&&f)?(f.get?f.get(m):f[m]):null;
if(k){this.renderAction(j,k);o.push("has-action")}if(this.getDelegateProperty("hasContentBranch",n)){m=this.getDelegateProperty("contentIsBranchKey",n);
k=(m&&f)?(f.get?f.get(m):f[m]):NO;this.renderBranch(j,k);o.push("has-branch")}c.addClass(o);
c=j.end()},renderDisclosure:function(e,f){this.deprecatedRenderWarning();var d=(f===SC.BRANCH_OPEN)?"open":"closed",a=this._scli_disclosureHtml,c,b;
if(!a){a=this.constructor.prototype._scli_disclosureHtml={}}c=a[d];if(!c){c=a[d]='<img src="'+SC.BLANK_IMAGE_URL+'" class="disclosure button '+d+'" />'
}e.push(c)},renderCheckbox:function(f,h){this.deprecatedRenderWarning();var e=(h===SC.MIXED_STATE)?"mixed":h?"sel":"nosel",b=this._scli_checkboxHtml,g=this.get("contentIsEditable")&&this.get("isEnabled"),d,c,a=[];
if(!g){e=SC.keyFor("disabled",e)}if(!b){b=this.constructor.prototype._scli_checkboxHtml={}
}d=b[e];if(!d){c=SC.RenderContext("div").attr("role","button").classNames(SC.clone(SC.CheckboxView.prototype.classNames));
if(h===SC.MIXED_STATE){a.push("mixed")}else{if(h){a.push("sel")}}if(!g){a.push("disabled")
}c.addClass(a);c.push('<span class="button"></span>');d=b[e]=c.join()}f.push(d)},renderIcon:function(c,e){this.deprecatedRenderWarning();
var b=null,d=null,a=[];if(e&&SC.ImageView.valueIsUrl(e)){b=e;d=""}else{d=e;b=SC.BLANK_IMAGE_URL
}a.push(d,"icon");c.begin("img").addClass(a).attr("src",b).end()},renderLabel:function(b,a){this.deprecatedRenderWarning();
b.push("<label>",a||"","</label>")},renderRightIcon:function(c,e){this.deprecatedRenderWarning();
var b=null,d=null,a=[];if(e&&SC.ImageView.valueIsUrl(e)){b=e;d=""}else{d=e;b=SC.BLANK_IMAGE_URL
}a.push("right-icon",d);c.begin("img").addClass(a).attr("src",b).end()},renderCount:function(a,b){this.deprecatedRenderWarning();
a.push('<span class="count"><span class="inner">',b.toString(),"</span></span>")},renderAction:function(a,b){this.deprecatedRenderWarning();
a.push('<img src="',SC.BLANK_IMAGE_URL,'" class="action" />')},renderBranch:function(c,b){this.deprecatedRenderWarning();
var a=[];a.push("branch",b?"branch-visible":"branch-hidden");c.begin("span").addClass(a).push("&nbsp;").end()
}});SC.ListItemView._deprecatedRenderWarningHasBeenIssued=false;sc_require("mixins/collection_view_delegate");
sc_require("views/list_item");SC.DRAG_REORDER=16;SC.HORIZONTAL_ORIENTATION="horizontal";
SC.VERTICAL_ORIENTATION="vertical";SC.BENCHMARK_RELOAD=NO;SC.CollectionView=SC.View.extend(SC.CollectionViewDelegate,SC.CollectionContent,{classNames:["sc-collection-view"],ACTION_DELAY:200,useFastPath:NO,content:null,contentBindingDefault:SC.Binding.multiple(),length:0,nowShowing:function(){return this.computeNowShowing()
}.property("length","clippingFrame").cacheable(),selection:null,isSelectable:YES,isSelectableBindingDefault:SC.Binding.bool(),isEnabled:YES,isEnabledBindingDefault:SC.Binding.bool(),isEditable:YES,isEditableBindingDefault:SC.Binding.bool(),canReorderContent:NO,canReorderContentBindingDefault:SC.Binding.bool(),canDeleteContent:NO,canDeleteContentBindingDefault:SC.Binding.bool(),canEditContent:NO,canEditContentBindingDefault:SC.Binding.bool(),isDropTarget:NO,useToggleSelection:NO,actOnSelect:NO,selectOnMouseDown:YES,exampleView:SC.ListItemView,contentExampleViewKey:null,groupExampleView:null,contentGroupExampleViewKey:null,action:null,target:null,contentValueKey:null,acceptsFirstResponder:NO,isActive:NO,calculatedHeight:0,calculatedWidth:0,computeLayout:function(){return null
},layoutForContentIndex:function(a){return null},allContentIndexes:function(){return SC.IndexSet.create(0,this.get("length")).freeze()
}.property("length").cacheable(),contentIndexesInRect:function(a){return null},computeNowShowing:function(){var c=this.contentIndexesInRect(this.get("clippingFrame"));
if(!c){c=this.get("allContentIndexes")}else{var b=this.get("length"),a=c.get("max");
if(a>b){c=c.copy().remove(b,a-b).freeze()}}return c},showInsertionPoint:function(a,b){},hideInsertionPoint:function(){},delegate:null,selectionDelegate:function(){var a=this.get("delegate"),b=this.get("content");
return this.delegateFor("isCollectionViewDelegate",a,b)}.property("delegate","content").cacheable(),contentDelegate:function(){var a=this.get("delegate"),b=this.get("content");
return this.delegateFor("isCollectionContent",a,b)}.property("delegate","content").cacheable(),_contentGroupIndexes:function(){return this.get("contentDelegate").contentGroupIndexes(this,this.get("content"))
}.property("contentDelegate","content").cacheable(),contentRangeDidChange:function(d,b,c,a){if(!b&&(c==="[]")){this.notifyPropertyChange("_contentGroupIndexes");
this.reload(a)}else{this.contentPropertyDidChange(b,c,a)}},contentPropertyDidChange:function(c,b,a){},updateContentRangeObserver:function(){var d=this.get("nowShowing"),a=this._cv_contentRangeObserver,c=this.get("content");
if(!c){return}if(a){c.updateRangeObserver(a,d)}else{var b=this.contentRangeDidChange;
a=c.addRangeObserver(d,this,b,null);this._cv_contentRangeObserver=a}},removeContentRangeObserver:function(){var b=this.get("content"),a=this._cv_contentRangeObserver;
if(a){if(b){b.removeRangeObserver(a)}this._cv_contentRangeObserver=null}},contentLengthDidChange:function(){var a=this.get("content");
this.set("length",a?a.get("length"):0)},_cv_contentDidChange:function(){var b=this.get("content"),a=this.contentLengthDidChange;
if(b===this._content){return}this.removeContentRangeObserver();if(this._content){this._content.removeObserver("length",this,a)
}this._content=b;if(b){b.addObserver("length",this,a)}this.contentLengthDidChange();
this.contentRangeDidChange(b,null,"[]",null)}.observes("content"),_invalidIndexes:NO,reload:function(a){var b=this._invalidIndexes;
if(a&&b!==YES){if(b){b.add(a)}else{b=this._invalidIndexes=a.clone()}}else{this._invalidIndexes=YES
}if(this.get("isVisibleInWindow")){this.invokeOnce(this.reloadIfNeeded)}return this
},reloadIfNeeded:function(){var x=this._invalidIndexes;if(!x||!this.get("isVisibleInWindow")){return this
}this._invalidIndexes=NO;var u=this.get("content"),v,w,n,z=this.computeLayout(),y=SC.BENCHMARK_RELOAD,c=this.get("nowShowing"),A=this._sc_itemViews,o=this.get("containerView")||this,a,r,t,s,l,p,h,q,e,m,k,B,d,b,g,j,f;
if(x.isIndexSet&&x.contains(c)){x=YES}if(this.willReload){this.willReload(x===YES?null:x)
}a=this.get("exampleView");t=a?a.isReusableInCollections:NO;r=this.get("groupExampleView");
s=r?r.isReusableInCollections:NO;if(x.isIndexSet){if(y){SC.Benchmark.start(y="%@#reloadIfNeeded (Partial)".fmt(this),YES)
}p=[];h=[];q=[];x.forEach(function(C){n=A?A[C]:null;if(c.contains(C)){if(n&&n.parentView===o){h.push(C)
}else{q.push(C)}}else{if(n&&n.parentView===o){p.push(C)}}},this);for(v=0,w=p.length;
v<w;++v){m=p[v];n=A?A[m]:null;delete A[m];g=this.get("contentDelegate");j=this.get("_contentGroupIndexes");
f=j&&j.contains(m);if(f){f=g.contentIndexIsGroup(this,u,m)}l=f?s:t;if(l){b=f?this._GROUP_VIEW_POOL:this._VIEW_POOL;
b.push(n);n.destroyLayer()}o.removeChild(n)}for(v=0,w=h.length;v<w;++v){m=h[v];n=A?A[m]:null;
k=this.itemViewForContentIndex(m,YES);n.destroyLayer();o.replaceChild(k,n)}for(v=0,w=q.length;
v<w;++v){m=q[v];k=this.itemViewForContentIndex(m,YES);o.insertBefore(k,null)}if(y){SC.Benchmark.end(y)
}}else{if(y){SC.Benchmark.start(y="%@#reloadIfNeeded (Full)".fmt(this),YES)}if(A){A.length=0
}e=o.get("childViews");if(e){e=e.copy()}o.beginPropertyChanges();if(this.willRemoveAllChildren){this.willRemoveAllChildren()
}o.destroyLayer().removeAllChildren();if(e){for(v=0,w=e.length;v<w;++v){k=e[v];f=k.get("isGroupView");
l=f?s:t;if(l){b=f?this._GROUP_VIEW_POOL:this._VIEW_POOL;b.push(k);k.destroyLayer()
}}}e=[];c.forEach(function(C){e.push(this.itemViewForContentIndex(C,YES))},this);
o.set("childViews",e);o.replaceLayer();o.endPropertyChanges();if(y){SC.Benchmark.end(y)
}}if(z){this.adjust(z)}if(this.didReload){this.didReload(x===YES?null:x)}return this
},displayProperties:"isFirstResponder isEnabled isActive".w(),render:function(a,b){a.setClass("focus",this.get("isFirstResponder"));
a.setClass("disabled",!this.get("isEnabled"));a.setClass("active",this.get("isActive"));
return arguments.callee.base.apply(this,arguments)},_TMP_ATTRS:{},_COLLECTION_CLASS_NAMES:"sc-collection-item".w(),_GROUP_COLLECTION_CLASS_NAMES:"sc-collection-item sc-group-item".w(),_VIEW_POOL:null,_GROUP_VIEW_POOL:null,itemViewForContentIndex:function(m,a){var w;
var v=this._sc_itemViews;if(!v){v=this._sc_itemViews=[]}else{if(!a&&(w=v[m])){return w
}}var o=this.get("content"),q=o.objectAt(m),h=this.get("contentDelegate"),k=this.get("_contentGroupIndexes"),j=NO,x,l,r,f,s,d,b,c,u,g,e,p,t;
j=k&&k.contains(m);if(j){j=h.contentIndexIsGroup(this,o,m)}if(j){x=this.get("contentGroupExampleViewKey");
if(x&&q){l=q.get(x)}if(!l){l=this.get("groupExampleView")||this.get("exampleView")
}s="_GROUP_VIEW_POOL"}else{x=this.get("contentExampleViewKey");if(x&&q){l=q.get(x)
}if(!l){l=this.get("exampleView")}s="_VIEW_POOL"}c=this.get("containerView")||this;
f=this.layerIdFor(m);u=h.contentIndexIsEnabled(this,o,m);g=h.contentIndexIsSelected(this,o,m);
e=h.contentIndexOutlineLevel(this,o,m);p=h.contentIndexDisclosureState(this,o,m);
t=this.isVisibleInWindow;r=this.layoutForContentIndex(m);if(l&&l.isReusableInCollections){d=this[s];
if(!d){d=this[s]=[]}if(d.length>0){w=d.pop();b=w.prepareForReuse;if(b){b.call(w)}w.beginPropertyChanges();
w.set("contentIndex",m);w.set("layerId",f);w.set("isEnabled",u);w.set("isSelected",g);
w.set("outlineLevel",e);w.set("disclosureState",p);w.set("isVisibleInWindow",t);w.set("parentView",c);
SC.View.views[f]=w;if(r){w.set("layout",r)}else{w.set("layout",l.prototype.layout)
}w.set("content",q);w.endPropertyChanges()}}if(!w){var n=this._TMP_ATTRS;n.contentIndex=m;
n.content=q;n.owner=n.displayDelegate=this;n.parentView=c;n.page=this.page;n.layerId=f;
n.isEnabled=u;n.isSelected=g;n.outlineLevel=e;n.disclosureState=p;n.isGroupView=j;
n.isVisibleInWindow=t;if(j){n.classNames=this._GROUP_COLLECTION_CLASS_NAMES}else{n.classNames=this._COLLECTION_CLASS_NAMES
}if(r){n.layout=r}else{delete n.layout}w=this.createItemView(l,m,n)}v[m]=w;return w
},itemViewForContentObject:function(a){return this.itemViewForContentIndex(this.get("content").indexOf(a))
},_TMP_LAYERID:[],createItemView:function(c,a,b){return c.create(b)},layerIdFor:function(a){var b=this._TMP_LAYERID;
b[0]=SC.guidFor(this);b[1]=a;return b.join("-")},contentIndexForLayerId:function(c){if(!c||!(c=c.toString())){return null
}var b=this._baseLayerId;if(!b){b=this._baseLayerId=SC.guidFor(this)+"-"}if((c.length<=b.length)||(c.indexOf(b)!==0)){return null
}var a=Number(c.slice(c.lastIndexOf("-")+1));return isNaN(a)?null:a},itemViewForEvent:function(k){var d=this.getPath("pane.rootResponder");
if(!d){return null}var c=SC.guidFor(this)+"-",a=c.length,e=k.target,g=this.get("layer"),f=null,b,j,h;
while(e&&e!==document&&e!==g){b=e?SC.$(e).attr("id"):null;if(b&&(f=this.contentIndexForLayerId(b))!==null){break
}e=e.parentNode}if(f===null||(e===g)){e=g=null;return null}if(f>=this.get("length")){throw"layout for item view %@ was found when item view does not exist (%@)".fmt(b,this)
}return this.itemViewForContentIndex(f)},expand:function(b){if(!b){return this}var a=this.get("contentDelegate"),c=this.get("content");
b.forEach(function(d){var e=a.contentIndexDisclosureState(this,c,d);if(e===SC.BRANCH_CLOSED){a.contentIndexExpand(this,c,d)
}},this);return this},collapse:function(b){if(!b){return this}var a=this.get("contentDelegate"),c=this.get("content");
b.forEach(function(d){var e=a.contentIndexDisclosureState(this,c,d);if(e===SC.BRANCH_OPEN){a.contentIndexCollapse(this,c,d)
}},this);return this},_cv_selectionDidChange:function(){var c=this.get("selection"),b=this._cv_selection,a=this._cv_selectionContentDidChange;
if(c===b){return}if(b){b.removeObserver("[]",this,a)}if(c){c.addObserver("[]",this,a)
}this._cv_selection=c;this._cv_selectionContentDidChange()}.observes("selection"),_cv_selectionContentDidChange:function(){var c=this.get("selection"),b=this._cv_selindexes,a=this.get("content"),d;
this._cv_selindexes=c?c.frozenCopy():null;if(b){b=b.indexSetForSource(a)}if(c){c=c.indexSetForSource(a)
}if(c&&b){d=c.without(b).add(b.without(c))}else{d=c||b}if(d&&d.get("length")>0){this.reloadSelectionIndexes(d)
}},_invalidSelection:NO,reloadSelectionIndexes:function(a){var b=this._invalidSelection;
if(a&&(b!==YES)){if(b){b.add(a)}else{b=this._invalidSelection=a.copy()}}else{this._invalidSelection=YES
}if(this.get("isVisibleInWindow")){this.invokeOnce(this.reloadSelectionIndexesIfNeeded)
}return this},reloadSelectionIndexesIfNeeded:function(){var e=this._invalidSelection;
if(!e||!this.get("isVisibleInWindow")){return this}var d=this.get("nowShowing"),b=this._invalidIndexes,a=this.get("content"),c=this.get("selection");
this._invalidSelection=NO;if(b===YES||!d){return this}if(e===YES){e=d}if(b&&b.isIndexSet){e=e.without(b)
}e.forEach(function(f){if(!d.contains(f)){return}var g=this.itemViewForContentIndex(f,NO);
if(g){g.set("isSelected",c?c.contains(a,f):NO)}},this);return this},select:function(c,f){var d=this.get("content"),a=this.get("selectionDelegate"),b=this.get("_contentGroupIndexes"),e;
if(!this.get("isSelectable")){return this}if(SC.typeOf(c)===SC.T_NUMBER){c=SC.IndexSet.create(c,1)
}if(c&&c.get("length")>0){if(b&&b.get("length")>0){c=c.copy().remove(b)}c=a.collectionViewShouldSelectIndexes(this,c,f);
if(!c||c.get("length")===0){return this}}else{c=null}if(f&&(e=this.get("selection"))){e=e.copy()
}else{e=SC.SelectionSet.create()}if(c&&c.get("length")>0){if(c.get("length")===1){e.addObject(d.objectAt(c.get("firstObject")))
}else{e.add(d,c)}}e=a.collectionViewSelectionForProposedSelection(this,e);if(!e){e=SC.SelectionSet.create()
}this._selectionAnchor=null;this.set("selection",e.freeze());return this},deselect:function(b){var d=this.get("selection"),c=this.get("content"),a=this.get("selectionDelegate");
if(!this.get("isSelectable")){return this}if(!d||d.get("length")===0){return this
}if(SC.typeOf(b)===SC.T_NUMBER){b=SC.IndexSet.create(b,1)}b=a.collectionViewShouldDeselectIndexes(this,b);
if(!b||b.get("length")===0){return this}d=d.copy().remove(c,b);d=a.collectionViewSelectionForProposedSelection(this,d);
if(!d){d=SC.SelectionSet.create()}this.set("selection",d.freeze());return this},_findNextSelectableItemFromIndex:function(h,a){var c=this.get("length"),d=SC.IndexSet.create(),e=this.get("content"),j=this.get("selectionDelegate"),g=this.get("_contentGroupIndexes"),f,b;
if(!g&&(j.collectionViewShouldSelectIndexes===this.collectionViewShouldSelectIndexes)){return h
}while(h<c){if(!g||!g.contains(h)){d.add(h);f=j.collectionViewShouldSelectIndexes(this,d);
if(f&&f.get("length")>=1){return h}d.remove(h)}h++}if(a===undefined){b=this.get("selection");
a=b?b.get("max"):-1}return a},_findPreviousSelectableItemFromIndex:function(b,h){var c=SC.IndexSet.create(),f=this.get("content"),a=this.get("selectionDelegate"),e=this.get("_contentGroupIndexes"),d;
if(SC.none(b)){b=-1}if(!e&&(a.collectionViewShouldSelectIndexes===this.collectionViewShouldSelectIndexes)){return b
}while(b>=0){if(!e||!e.contains(b)){c.add(b);d=a.collectionViewShouldSelectIndexes(this,c);
if(d&&d.get("length")>=1){return b}c.remove(b)}b--}if(h===undefined){var g=this.get("selection");
h=g?g.get("min"):-1}if(SC.none(h)){h=-1}return h},selectPreviousItem:function(h,b){if(SC.none(b)){b=1
}if(SC.none(h)){h=false}var f=this.get("selection"),e=this.get("content");if(f){f=f.indexSetForSource(e)
}var g=f?f.get("min"):-1,a=f?f.get("max")-1:-1,d=this._selectionAnchor;if(SC.none(d)){d=g
}if(h){if(a>d){a=a-b}else{g=this._findPreviousSelectableItemFromIndex(g-b)}if(SC.none(g)||(g<0)){g=0
}if(a<g){a=g}}else{g=this._findPreviousSelectableItemFromIndex(g-b);if(SC.none(g)||(g<0)){g=0
}a=g;d=null}var c=g;f=SC.IndexSet.create(g,a+1-g);this.scrollToContentIndex(c);this.select(f);
this._selectionAnchor=d;return this},selectNextItem:function(h,j){if(SC.none(j)){j=1
}if(SC.none(h)){h=false}var b=this.get("selection"),g=this.get("content");if(b){b=b.indexSetForSource(g)
}var a=b?b.get("min"):-1,d=b?b.get("max")-1:-1,e=this._selectionAnchor,c=this.get("length");
if(SC.none(e)){e=a}if(h){if(a<e){a=a+j}else{d=this._findNextSelectableItemFromIndex(d+j,d)
}if(d>=c){d=c-1}if(a>d){a=d}}else{d=this._findNextSelectableItemFromIndex(d+j,d);
if(d>=c){d=c-1}a=d;e=null}var f=d;b=SC.IndexSet.create(a,d-a+1);this.scrollToContentIndex(f);
this.select(b);this._selectionAnchor=e;return this},deleteSelection:function(){if(!this.get("canDeleteContent")){return NO
}var d=this.get("selection"),c=this.get("content"),a=this.get("selectionDelegate"),b=d&&c?d.indexSetForSource(c):null;
if(!c||!b||b.get("length")===0){return NO}b=a.collectionViewShouldDeleteIndexes(this,b);
if(!b||b.get("length")===0){return NO}a.collectionViewDeleteContent(this,this.get("content"),b);
return YES},scrollToContentIndex:function(b){var a=this.itemViewForContentIndex(b);
if(a){this.scrollToItemView(a)}return this},scrollToItemView:function(a){if(a){a.scrollToVisible()
}return this},keyDown:function(a){var b=this.interpretKeyEvents(a);return !b?NO:b
},keyUp:function(){return true},insertText:function(b,a){if(b===" "){var c=this.get("selection");
if(c&&c.get("length")>0){this.invokeLater(this._cv_action,0,null,a)}return YES}else{return NO
}},selectAll:function(a){var b=this.get("content"),c=b?SC.IndexSet.create(0,b.get("length")):null;
this.select(c,NO);return YES},deleteBackward:function(a){return this.deleteSelection()
},deleteForward:function(a){return this.deleteSelection()},moveDown:function(b,a){this.selectNextItem(false,this.get("itemsPerRow")||1);
this._cv_performSelectAction(null,a,this.ACTION_DELAY);return true},moveUp:function(b,a){this.selectPreviousItem(false,this.get("itemsPerRow")||1);
this._cv_performSelectAction(null,a,this.ACTION_DELAY);return true},moveLeft:function(l){if(l.ctrlKey||l.metaKey){return NO
}if((this.get("itemsPerRow")||1)>1){this.selectPreviousItem(false,1);this._cv_performSelectAction(null,l,this.ACTION_DELAY)
}else{var c=this.get("selection"),j=this.get("content"),g=c?c.indexSetForSource(j):null;
if(g){var m=undefined,f=false,h=undefined;if(g.get("length")===1){h=g.get("firstObject");
m=this.get("contentDelegate");var b=m.contentIndexDisclosureState(this,j,h);if(b!==SC.BRANCH_OPEN){f=true
}}if(f){var a=m.contentIndexOutlineLevel(this,j,h)-1;if(a>=0){var e=-1;while(e<0){var d=this._findPreviousSelectableItemFromIndex(h-1);
if(d<0){return false}h=d;var k=m.contentIndexOutlineLevel(this,j,h);if(k===a){e=d
}}if(e!==-1){this.select(h)}}}else{this.collapse(g)}}}return true},moveRight:function(a){if(a.ctrlKey||a.metaKey){return NO
}if((this.get("itemsPerRow")||1)>1){this.selectNextItem(false,1);this._cv_performSelectAction(null,a,this.ACTION_DELAY)
}else{var d=this.get("selection"),c=this.get("content"),b=d?d.indexSetForSource(c):null;
if(b){this.expand(b)}}return true},moveDownAndModifySelection:function(b,a){this.selectNextItem(true,this.get("itemsPerRow")||1);
this._cv_performSelectAction(null,a,this.ACTION_DELAY);return true},moveUpAndModifySelection:function(b,a){this.selectPreviousItem(true,this.get("itemsPerRow")||1);
this._cv_performSelectAction(null,a,this.ACTION_DELAY);return true},moveLeftAndModifySelection:function(b,a){if((this.get("itemsPerRow")||1)>1){this.selectPreviousItem(true,1);
this._cv_performSelectAction(null,a,this.ACTION_DELAY)}return true},moveRightAndModifySelection:function(b,a){if((this.get("itemsPerRow")||1)>1){this.selectNextItem(true,1);
this._cv_performSelectAction(null,a,this.ACTION_DELAY)}return true},insertNewline:function(d,c){var b=this.get("isEditable")&&this.get("canEditContent"),g,f,h,a,e;
if(b){g=this.get("selection");f=this.get("content");if(g&&g.get("length")===1){h=g.indexSetForSource(f);
a=h?h.get("min"):-1;b=a>=0}}if(b){e=this.itemViewForContentIndex(a);b=e&&SC.typeOf(e.beginEditing)===SC.T_FUNCTION
}if(b){this.scrollToContentIndex(a);e=this.itemViewForContentIndex(a);e.beginEditing()
}else{this.invokeLater(this._cv_action,0,e,null)}return YES},mouseDown:function(j){var g=this.itemViewForEvent(j),f=this.get("content"),e=g?g.get("contentIndex"):-1,c,d,b,a,k,h=f.get("allowsMultipleSelection");
c=this.mouseDownInfo={event:j,itemView:g,contentIndex:e,at:Date.now()};this.becomeFirstResponder();
if(this.get("useToggleSelection")){if(this.get("selectOnMouseDown")){if(!g){return
}b=this.get("selection");a=b&&b.containsObject(g.get("content"));if(a){this.deselect(e)
}else{if(!h){this.select(e,NO)}else{this.select(e,YES)}}}return YES}if(!g){if(this.get("allowDeselectAll")){this.select(null,false)
}return YES}b=this.get("selection");if(b){b=b.indexSetForSource(f)}a=b?b.contains(e):NO;
c.modifierKeyPressed=k=j.ctrlKey||j.metaKey;if(k&&a){c.shouldDeselect=e>=0}else{if(j.shiftKey&&b&&b.get("length")>0&&h){b=this._findSelectionExtendedByShift(b,e);
d=this._selectionAnchor;this.select(b);this._selectionAnchor=d}else{if(!k&&a){c.shouldReselect=e>=0
}else{if((j.shiftKey||k)&&!h){this.select(null,false)}if(this.get("selectOnMouseDown")){this.select(e,k)
}else{c.shouldSelect=e>=0}}}}c.previousContentIndex=e;return YES},mouseUp:function(j){var k=this.itemViewForEvent(j),d=this.mouseDownInfo,f=this.get("content"),e,c,a,b,g,l,h=f.get("allowsMultipleSelection");
if(this.get("useToggleSelection")){if(!k||this.get("selectOnMouseDown")){return NO
}c=this.get("selection");e=(k)?k.get("contentIndex"):-1;a=c&&c.containsObject(k.get("content"));
if(a){this.deselect(e)}else{if(!h){this.select(e,NO)}else{this.select(e,YES)}}}else{if(d){l=d.contentIndex;
e=(k)?k.get("contentIndex"):-1;if(d.shouldSelect){this.select(l,d.modifierKeyPressed)
}if(d.shouldDeselect){this.deselect(l)}if(d.shouldReselect){b=this.get("isEditable")&&this.get("canEditContent");
if(b){c=this.get("selection");b=c&&(c.get("length")===1)}if(b){g=this.itemViewForContentIndex(l);
b=g&&(!g.contentHitTest||g.contentHitTest(j));b=(b&&g.beginEditing)?g.beginEditing():NO
}if(!b){if(this._cv_reselectTimer){this._cv_reselectTimer.invalidate()}this._cv_reselectTimer=this.invokeLater(this.select,300,l,false)
}}this._cleanupMouseDown()}}this._cv_performSelectAction(k,j,0,j.clickCount);return NO
},_cleanupMouseDown:function(){var b=this.mouseDownInfo,a;if(b){for(a in b){if(!b.hasOwnProperty(a)){continue
}delete b[a]}}this.mouseDownInfo=null},mouseMoved:function(c){var a=this.itemViewForEvent(c),b=this._lastHoveredItem;
if(a!==b){if(b&&b.mouseOut){b.mouseOut(c)}if(a&&a.mouseOver){a.mouseOver(c)}}this._lastHoveredItem=a;
if(a&&a.mouseMoved){a.mouseMoved(c)}return YES},mouseOut:function(b){var a=this._lastHoveredItem;
this._lastHoveredItem=null;if(a&&a.mouseOut){a.mouseOut(b)}return YES},touchStart:function(g,a){if(this.get("useToggleSelection")){return true
}var c=this.itemViewForEvent(g),d=this.get("content"),f=c?c.get("contentIndex"):-1,e,b;
this.becomeFirstResponder();this.invokeLater("select",1,f);return YES},touchesDragged:function(a,b){b.forEach(function(c){if(Math.abs(c.pageX-c.startX)>5||Math.abs(c.pageY-c.startY)>5){this.select(null,NO);
c.makeTouchResponder(c.nextTouchResponder)}},this)},touchEnd:function(b){var a=this.itemViewForEvent(b);
this._cv_performSelectAction(a,b,0)},touchCancelled:function(a){this.select(null,NO)
},_findSelectionExtendedByShift:function(e,h){if(!e||e.get("length")===0){return SC.IndexSet.create(h)
}var d=this.get("content"),g=d.get("length")-1,c=e.get("min"),a=e.get("max")-1,f=this.mouseDownInfo,b=this._selectionAnchor;
if(SC.none(b)){b=-1}if(h<c){c=h;if(b<0){this._selectionAnchor=b=a}}else{if(h>a){a=h;
if(b<0){this._selectionAnchor=b=c}}else{if(h>=c&&h<=a){if(b<0){this._selectionAnchor=b=c
}if(h===b){c=a=h}else{if(h>b){c=b;a=h}else{if(h<b){c=h;a=b}}}}}}return SC.IndexSet.create(c,a-c+1)
},reorderDataType:function(){return"SC.CollectionView.Reorder."+SC.guidFor(this)}.property().cacheable(),dragContent:null,proposedInsertionIndex:null,proposedDropOperation:null,mouseDragged:function(h){var j=this.get("selectionDelegate"),e=this.get("content"),a=this.get("selection"),c=this.mouseDownInfo,f=this.get("_contentGroupIndexes"),d,b,g;
if(!c||c.contentIndex<0){return YES}if((Date.now()-c.at)<123){return YES}if(j.collectionViewShouldBeginDrag(this)){if(!this.get("selectOnMouseDown")){d=SC.IndexSet.create(c.contentIndex)
}else{d=a?a.indexSetForSource(e):null}if(d&&f&&f.get("length")>0){d=d.copy().remove(f);
if(d.get("length")===0){d=null}else{d.freeze()}}if(!d){return YES}else{d=d.frozenCopy()
}d={content:e,indexes:d};this.set("dragContent",d);b=this.get("dragDataTypes");if(b&&b.get("length")>0){g=j.collectionViewDragViewFor(this,d.indexes);
if(!g){g=this._cv_dragViewFor(d.indexes)}g.createLayer();SC.Drag.start({event:c.event,source:this,dragView:g,ghost:NO,ghostActsLikeCursor:j.ghostActsLikeCursor,slideBack:YES,dataSource:this});
this._cleanupMouseDown();this._lastInsertionIndex=null}else{this.set("dragContent",null)
}return YES}},_cv_dragViewFor:function(d){var b=this.get("nowShowing").without(d);
b=this.get("nowShowing").without(b);var c=this.get("layer").cloneNode(false);var a=SC.View.create({layer:c,parentView:this});
SC.$(c).css("backgroundColor","transparent").css("border","none").css("top",0).css("left",0);
b.forEach(function(g){var h=this.itemViewForContentIndex(g),e,f;if(h){e=h.get("isSelected");
h.set("isSelected",NO);h.updateLayerIfNeeded();f=h.get("layer");if(f){f=f.cloneNode(true)
}h.set("isSelected",e);h.updateLayerIfNeeded()}if(f){c.appendChild(f)}f=null},this);
c=null;return a},dragDataTypes:function(){var a=this.get("selectionDelegate"),b=a.collectionViewDragDataTypes(this),c;
if(this.get("canReorderContent")){b=b?b.copy():[];c=this.get("reorderDataType");if(b.indexOf(c)<0){b.push(c)
}}return b?b:[]}.property(),dragDataForType:function(c,b){if(this.get("canReorderContent")){if(b===this.get("reorderDataType")){return this.get("dragContent")
}}var a=this.get("selectionDelegate");return a.collectionViewDragDataForType(this,c,b)
},computeDragOperations:function(c,b){var d=SC.DRAG_NONE,a=this.get("selectionDelegate");
if(this.get("canReorderContent")){if(c.get("dataTypes").indexOf(this.get("reorderDataType"))>=0){d=SC.DRAG_REORDER
}}d=a.collectionViewComputeDragOperations(this,c,d);if(d&SC.DRAG_REORDER){d=SC.DRAG_MOVE
}return d},_computeDropOperationState:function(c,m,e){var g=this.convertFrameFromView(c.get("location"),null),l=SC.DROP_BEFORE,n=this.get("selectionDelegate"),d=this.get("canReorderContent"),o,h,a,j,f,b;
var k=this.insertionIndexForLocation(g,SC.DROP_ON);if(SC.typeOf(k)===SC.T_ARRAY){l=k[1];
k=k[0]}if(l===SC.DROP_ON){this.set("proposedInsertionIndex",k);this.set("proposedDropOperation",l);
b=n.collectionViewValidateDragOperation(this,c,e,k,l);k=this.get("proposedInsertionIndex");
l=this.get("proposedDropOperation");this._dropInsertionIndex=this._dropOperation=null;
if(b!==SC.DRAG_NONE){return[k,l,b]}else{l=SC.DROP_BEFORE;k=this.insertionIndexForLocation(g,SC.DROP_BEFORE);
if(SC.typeOf(k)===SC.T_ARRAY){l=k[1];k=k[0]}}}if((k>=0)&&d&&(l!==SC.DROP_ON)){o=c.dataForType(this.get("reorderDataType"));
if(o){h=this.get("content");if(l===SC.DROP_BEFORE){a=o.indexes.contains(k-1);j=o.indexes.contains(k)
}else{a=o.indexes.contains(k);j=o.indexes.contains(k-1)}if(a&&j){if(SC.none(this._lastInsertionIndex)){if(l===SC.DROP_BEFORE){while((k>=0)&&o.indexes.contains(k)){k--
}}else{f=h?h.get("length"):0;while((k<f)&&o.indexes.contains(k)){k++}}}else{k=this._lastInsertionIndex
}}if(k>=0){e=SC.DRAG_REORDER}}}this.set("proposedInsertionIndex",k);this.set("proposedDropOperation",l);
e=n.collectionViewValidateDragOperation(this,c,e,k,l);k=this.get("proposedInsertionIndex");
l=this.get("proposedDropOperation");this._dropInsertionIndex=this._dropOperation=null;
return[k,l,e]},dragUpdated:function(f,b){var h=f.get("allowedDragOperations"),g=this._computeDropOperationState(f,b,h),a=g[0],c=g[1],e=g[2];
if(e!==SC.DRAG_NONE){if((this._lastInsertionIndex!==a)||(this._lastDropOperation!==c)){var d=this.itemViewForContentIndex(a);
this.showInsertionPoint(d,c)}this._lastInsertionIndex=a;this._lastDropOperation=c
}else{this.hideInsertionPoint();this._lastInsertionIndex=this._lastDropOperation=null
}return(e&SC.DRAG_REORDER)?SC.DRAG_MOVE:e},dragExited:function(){this.hideInsertionPoint();
this._lastInsertionIndex=this._lastDropOperation=null},acceptDragOperation:function(a,b){return YES
},performDragOperation:function(e,g){var a=this._computeDropOperationState(e,null,g),l=a[0],k=a[1],h=a[2],m=this.get("selectionDelegate"),c,n,d,j,b,f;
if(h&SC.DRAG_REORDER){g=(g&SC.DRAG_MOVE)?SC.DRAG_REORDER:SC.DRAG_NONE}else{g=g&h}if(g===SC.DRAG_NONE){return g
}c=m.collectionViewPerformDragOperation(this,e,g,l,k);if((c===SC.DRAG_NONE)&&(g&SC.DRAG_REORDER)){d=e.dataForType(this.get("reorderDataType"));
if(!d){return SC.DRAG_NONE}j=this.get("content");f=d.indexes;if(f.get("length")===1){if(((k===SC.DROP_BEFORE)||(k===SC.DROP_AFTER))&&(f.get("min")===l)){return SC.DRAG_MOVE
}}j.beginPropertyChanges();n=[];b=0;d.indexes.forEach(function(o){n.push(j.objectAt(o-b));
j.removeAt(o-b);b++;if(o<l){l--}},this);if(k===SC.DROP_AFTER){l++}j.replace(l,0,n,k);
this.select(SC.IndexSet.create(l,n.length));j.endPropertyChanges();g=SC.DRAG_MOVE
}return g},collectionViewShouldBeginDrag:function(a){return this.get("canReorderContent")
},insertionIndexForLocation:function(a,b){return -1},_cv_isVisibleInWindowDidChange:function(){if(this.get("isVisibleInWindow")){if(this._invalidIndexes){this.invokeOnce(this.reloadIfNeeded)
}if(this._invalidSelection){this.invokeOnce(this.reloadSelectionIndexesIfNeeded)}}}.observes("isVisibleInWindow"),collectionViewShouldSelectItem:function(a,b){return this.get("isSelectable")
},_TMP_DIFF1:SC.IndexSet.create(),_TMP_DIFF2:SC.IndexSet.create(),_cv_nowShowingDidChange:function(){var b=this.get("nowShowing"),a=this._sccv_lastNowShowing,d,e,c;
if(a!==b){if(a&&b){e=this._TMP_DIFF1.add(a).remove(b);c=this._TMP_DIFF2.add(b).remove(a);
d=e.add(c)}else{d=a||b}}if(d&&d.get("length")>0){this._sccv_lastNowShowing=b?b.frozenCopy():null;
this.updateContentRangeObserver();this.reload(d)}if(e){e.clear()}if(c){c.clear()}}.observes("nowShowing"),init:function(){arguments.callee.base.apply(this,arguments);
if(this.useFastPath){this.mixin(SC.CollectionFastPath)}if(this.get("canReorderContent")){this._cv_canReorderContentDidChange()
}this._sccv_lastNowShowing=this.get("nowShowing").clone();if(this.content){this._cv_contentDidChange()
}if(this.selection){this._cv_selectionDidChange()}},_cv_canReorderContentDidChange:function(){if(this.get("canReorderContent")){if(!this.get("isDropTarget")){this.set("isDropTarget",YES)
}SC.Drag.addDropTarget(this)}}.observes("canReorderContent"),_cv_performSelectAction:function(b,d,c,a){var e;
if(c===undefined){c=0}if(a===undefined){a=1}if((a>1)||this.get("actOnSelect")){if(this._cv_reselectTimer){this._cv_reselectTimer.invalidate()
}e=this.get("selection");e=e?e.toArray():[];if(this._cv_actionTimer){this._cv_actionTimer.invalidate()
}this._cv_actionTimer=this.invokeLater(this._cv_action,c,b,d,e)}},_cv_action:function(b,a,c){var d=this.get("action");
var e=this.get("target")||null;this._cv_actionTimer=null;if(d){if(SC.typeOf(d)===SC.T_FUNCTION){return this.action(b,a)
}var f=this.get("pane");if(f){f.rootResponder.sendAction(d,e,this,f,c)}}else{if(!b){return
}else{if(SC.typeOf(b._action)==SC.T_FUNCTION){return b._action(a)}else{if(SC.typeOf(b.action)==SC.T_FUNCTION){return b.action(a)
}}}}}});SC.DateFieldView=SC.TextFieldView.extend({value:null,showDate:YES,showTime:NO,formatTime:"%I:%M %p",formatDate:"%d/%m/%Y",formatDateTime:"%d/%m/%Y %I:%M %p",_dtConstants:"%a %b %d %H %I %j %m %M %p %S %U %W %y %Y".w(),_wtConstants:[3,3,2,2,2,3,2,2,2,2,2,2,2,4],activeSelection:0,format:function(){var a=this.get("showTime");
var b=this.get("showDate");if(a===YES&&b===YES){return this.get("formatDateTime")
}if(a===YES){return this.get("formatTime")}return this.get("formatDate")}.property("showTime","showDate").cacheable(),validator:function(){return SC.Validator.DateTime.extend({format:this.get("format")})
}.property("format").cacheable(),tabsSelections:function(){var f=[];var d=this.get("format");
var j=this.get("_dtConstants");var b=this.get("_wtConstants");if(SC.empty(d)){throw"The format string is empty, and must be a valid string."
}var g,k,c,e=0,a=0,h=0;while(e<d.length&&d.indexOf("%",e)!==-1){g=d.indexOf("%",e);
k=d.substring(g,g+2);e=g+2;c=j.indexOf(k);if(c===-1){throw"SC.DateFieldView: The format's key '%@' is not supported.".fmt(k)
}a=a+g-h;f.push(SC.Object.create({key:k,textSelection:SC.TextSelection.create({start:a,end:a+b[c]})}));
a=a+b[c];h=e}g=k=c=null;return f}.property("format").cacheable(),updateTextSelecitonObserver:function(){var a=this.get("activeSelection");
var b=this.get("tabsSelections");if(this.get("isEditing")){this.selection(null,b[a].get("textSelection"))
}}.observes("activeSelection","value"),updateValue:function(b,c){var e=(c===0)?-1:1;
var d=this.get("value"),a;switch(b){case"%a":case"%d":case"%j":this.set("value",d.advance({day:e}));
break;case"%b":case"%m":this.set("value",d.advance({month:e}));break;case"%H":case"%I":this.set("value",d.advance({hour:e}));
break;case"%M":this.set("value",d.advance({minute:e}));break;case"%p":a=d.get("hour")>=12?-12:12;
this.set("value",d.advance({hour:a}));break;case"%S":this.set("value",d.advance({second:e}));
break;case"%U":this.set("value",d.advance({week1:e}));break;case"%W":this.set("value",d.advance({week0:e}));
break;case"%y":case"%Y":this.set("value",d.advance({year:e}));break}},_selectRootElement:function(){},keyDown:function(a){if(this.interpretKeyEvents(a)){a.stop();
return YES}return arguments.callee.base.apply(this,arguments)},ctrl_a:function(){return YES
},moveUp:function(b){var a=this.get("activeSelection");var c=this.get("tabsSelections");
this.updateValue(c[a].get("key"),1);return YES},moveDown:function(b){var a=this.get("activeSelection");
var c=this.get("tabsSelections");this.updateValue(c[a].get("key"),0);return YES},insertText:function(a){return YES
},moveRight:function(a){var c=this.get("tabsSelections");var b=this.get("activeSelection")+1;
if(b===c.length){b=0}this.set("activeSelection",b);return YES},moveLeft:function(a){var c=this.get("tabsSelections");
var b=this.get("activeSelection")-1;if(b===-1){b=c.length-1}this.set("activeSelection",b);
return YES},insertTab:function(a){var c=this.get("tabsSelections");var b=this.get("activeSelection")+1;
if(b<c.length){this.set("activeSelection",b);return YES}return NO},insertBacktab:function(a){var b=this.get("activeSelection")-1;
if(b!==-1){this.set("activeSelection",b);return YES}return NO},mouseUp:function(b){var c=arguments.callee.base.apply(this,arguments);
var e=this.get("selection");if(SC.none(e)){this.set("activeSelection",0)}else{var h=e.get("start");
var g=this.get("tabsSelections");var a=g.length,f;for(var d=0;d<a;d++){f=g[d].get("textSelection");
if(h>=f.get("start")&&h<=f.get("end")){this.set("activeSelection",d)}}}return c},deleteBackward:function(a){return YES
},deleteForward:function(a){return YES}});SC.DisclosureView=SC.ButtonView.extend({classNames:["sc-disclosure-view"],controlStyle:"disclosure",buttonBehavior:SC.TOGGLE_BEHAVIOR,toggleOnValue:YES,toggleOffValue:NO,valueBindingDefault:SC.Binding.bool(),createRenderer:function(b){var a=b.disclosureControl();
this.updateRenderer(a);return a},updateRenderer:function(a){a.attr({icon:this.get("icon"),isActive:this.get("isActive"),isEnabled:this.get("isEnabled"),isSelected:this.get("isSelected"),needsEllipsis:this.get("needsEllipsis"),state:this.value===this.get("toggleOnValue")?YES:NO,title:this.get("displayTitle")})
},keyDown:function(a){if(a.which===37||a.which===38){this.set("value",this.get("toggleOffValue"));
return YES}if(a.which===39||a.which===40){this.set("value",this.get("toggleOnValue"));
return YES}arguments.callee.base.apply(this,arguments)}});SC.FileView=SC.FieldView.extend({classNames:"sc-file-view".w(),autoSubmit:YES,action:"uploadImage",target:null,childViews:"button form".w(),button:SC.ButtonView.design({title:"Choose File",theme:"capsule"}),form:SC.View.design({tagName:"form",render:function(a,b){a.attr("method","post").attr("action","javascript:;").attr("enctype","multipart/form-data");
arguments.callee.base.apply(this,arguments)},childViews:"input".w(),input:SC.View.design({tagName:"input",render:function(a,b){a.attr("type","file").end();
arguments.callee.base.apply(this,arguments)}})}),title:"Choose File",setFieldValue:function(a){console.log("SC.FileView: setFieldValue: %@ does nothing".fmt(a))
},fieldValueDidChange:function(a){arguments.callee.base.apply(this,arguments);if(this.get("autoSubmit")){var b=SC.Request.postUrl("/proxy/user/update_image").json().async(NO).send({picture:this.get("value")})
}}});sc_require("views/collection");sc_require("mixins/collection_row_delegate");
SC.ListView=SC.CollectionView.extend(SC.CollectionRowDelegate,{classNames:["sc-list-view"],acceptsFirstResponder:YES,showAlternatingRows:NO,render:function(a,b){a.setClass("alternating",this.get("showAlternatingRows"));
return arguments.callee.base.apply(this,arguments)},rowDelegate:function(){var a=this.delegate,b=this.get("content");
return this.delegateFor("isCollectionRowDelegate",a,b)}.property("delegate","content").cacheable(),_sclv_rowDelegateDidChange:function(){var d=this._sclv_rowDelegate,b=this.get("rowDelegate"),c=this._sclv_rowHeightDidChange,a=this._sclv_customRowHeightIndexesDidChange;
if(d===b){return this}this._sclv_rowDelegate=b;if(d){d.removeObserver("rowHeight",this,c);
d.removeObserver("customRowHeightIndexes",this,a)}if(!b){throw"Internal Inconsistancy: ListView must always have CollectionRowDelegate"
}b.addObserver("rowHeight",this,c);b.addObserver("customRowHeightIndexes",this,a);
this._sclv_rowHeightDidChange()._sclv_customRowHeightIndexesDidChange();return this
}.observes("rowDelegate"),_sclv_rowHeightDidChange:function(){var b=this.get("rowDelegate"),a=b.get("rowHeight"),c;
if(a===this._sclv_rowHeight){return this}this._sclv_rowHeight=a;c=SC.IndexSet.create(0,this.get("length"));
this.rowHeightDidChangeForIndexes(c);return this},_sclv_customRowHeightIndexesDidChange:function(){var a=this.get("rowDelegate"),b=a.get("customRowHeightIndexes"),d=this._sclv_customRowHeightIndexes,c=this._sclv_customRowHeightIndexesContentDidChange;
if((b===d)||(d&&d.isEqual(b))){return this}if(d&&this._sclv_isObservingCustomRowHeightIndexes){d.removeObserver("[]",this,c)
}if(this._sclv_isObservingCustomRowHeightIndexes=b&&!b.get("isFrozen")){b.addObserver("[]",this,c)
}this._sclv_customRowHeightIndexesContentDidChange();return this},_sclv_customRowHeightIndexesContentDidChange:function(){var a=this.get("rowDelegate"),b=a.get("customRowHeightIndexes"),c=this._sclv_customRowHeightIndexes,d;
if(b&&c){d=b.copy().add(c)}else{d=b||c}this._sclv_customRowHeightIndexes=b?b.frozenCopy():null;
this.rowHeightDidChangeForIndexes(d);return this},rowOffsetForContentIndex:function(h){if(h===0){return 0
}var k=this.get("rowDelegate"),a=k.get("rowHeight"),f,e,c,b,j,g,d;e=h*a;f=this.get("rowSpacing");
if(f){e+=h*f}if(k.customRowHeightIndexes&&(c=k.get("customRowHeightIndexes"))){b=this._sclv_offsetCache;
if(!b){b=this._sclv_offsetCache=[];j=g=0;c.forEach(function(l){j+=this.rowHeightForContentIndex(l)-a;
b[l+1]=j;g=l},this);this._sclv_max=g+1}j=b[h];if(j===undefined){j=b[h]=b[h-1];if(j===undefined){g=this._sclv_max;
if(h<g){g=c.indexBefore(h)+1}j=b[h]=b[g]||0}}e+=j}return e},rowHeightForContentIndex:function(a){var b=this.get("rowDelegate"),e,c,f,d;
if(b.customRowHeightIndexes&&(d=b.get("customRowHeightIndexes"))){c=this._sclv_heightCache;
if(!c){c=this._sclv_heightCache=[];f=this.get("content");d.forEach(function(g){c[g]=b.contentIndexRowHeight(this,f,g)
},this)}e=c[a];if(e===undefined){e=b.get("rowHeight")}}else{e=b.get("rowHeight")}return e
},rowHeightDidChangeForIndexes:function(b){var a=this.get("length");this._sclv_heightCache=this._sclv_offsetCache=null;
if(b&&b.isIndexSet){b=b.get("min")}this.reload(SC.IndexSet.create(b,a-b));return this
},computeLayout:function(){var a=this._sclv_layout;if(!a){a=this._sclv_layout={}}a.minHeight=this.rowOffsetForContentIndex(this.get("length"));
this.set("calculatedHeight",a.minHeight);return a},layoutForContentIndex:function(a){return{top:this.rowOffsetForContentIndex(a),height:this.rowHeightForContentIndex(a),left:0,right:0}
},contentIndexesInRect:function(h){var a=this.get("rowDelegate").get("rowHeight"),g=SC.minY(h),b=SC.maxY(h),j=h.height||0,f=this.get("length"),e,c,d;
c=(g-(g%a))/a;e=this.rowOffsetForContentIndex(c);while(c>0&&e>g){c--;e-=this.rowHeightForContentIndex(c)
}e+=this.rowHeightForContentIndex(c);while(c<f&&e<=g){c++;e+=this.rowHeightForContentIndex(c)
}if(c<0){c=0}if(c>=f){c=f}d=c+((j-(j%a))/a);if(d>f){d=f}e=this.rowOffsetForContentIndex(d);
while(d>=c&&e>=b){d--;e-=this.rowHeightForContentIndex(d)}e+=this.rowHeightForContentIndex(d);
while(d<f&&e<b){d++;e+=this.rowHeightForContentIndex(d)}d++;if(d<c){d=c}if(d>f){d=f
}return SC.IndexSet.create(c,d-c)},insertionPointView:SC.View.extend({classNames:"sc-list-insertion-point",render:function(a,b){if(b){a.push('<div class="anchor"></div>')
}}}),showInsertionPoint:function(g,f){var h=this._insertionPointView;if(!h){h=this._insertionPointView=this.get("insertionPointView").create()
}var d=g.get("contentIndex"),e=this.get("length"),c=SC.clone(g.get("layout")),a=g.get("outlineLevel"),b=g.get("outlineIndent")||0,j;
if((d>=e)&&d>0){j=this.itemViewForContentIndex(e-1);if(j.get("isGroupView")){a=1;
b=j.get("outlineIndent")}}if(SC.none(a)){a=-1}if(f&SC.DROP_ON){this.hideInsertionPoint();
g.set("isSelected",YES);this._lastDropOnView=g}else{if(this._lastDropOnView){this._lastDropOnView.set("isSelected",NO);
this._lastDropOnView=null}if(f&SC.DROP_AFTER){c.top+=c.height}c.height=2;c.right=0;
c.left=((a+1)*b)+12;delete c.width;h.set("layout",c);this.appendChild(h)}},hideInsertionPoint:function(){if(this._lastDropOnView){this._lastDropOnView.set("isSelected",NO);
this._lastDropOnView=null}var a=this._insertionPointView;if(a){a.removeFromParent().destroy()
}this._insertionPointView=null},insertionIndexForLocation:function(g,l){var b={x:g.x,y:g.y,width:1,height:1},f=this.contentIndexesInRect(b),h=f.get("min"),j=this.get("length"),c,m,n,e,p,d,o,k,a;
if(SC.none(h)||h<0){if((j===0)||(g.y<=this.rowOffsetForContentIndex(0))){h=0}else{if(g.y>=this.rowOffsetForContentIndex(j)){h=j
}}}c=this.rowOffsetForContentIndex(h);m=c+this.rowHeightForContentIndex(h);if(l==SC.DROP_ON){if(this.get("isEditable")){n=Math.min(Math.floor((m-c)*0.2),5)
}else{n=0}if(g.y>=(c+n)||g.y<=(m+n)){return[h,SC.DROP_ON]}}if((h<j)&&(g.y>=m-10)){h++
}if(h>0){k=this.itemViewForContentIndex(h-1);o=(k?k.get("outlineIndent"):0)||0;d=k?k.get("outlineLevel"):0;
if(h<j){k=this.itemViewForContentIndex(h);e=k?k.get("outlineLevel"):0;p=(k?k.get("outlineIndent"):0)||0;
p*=e}else{e=k.get("isGroupView")?1:0;p=o*e}o*=d;if((e!==d)&&(p!==o)){if(o>p){h--;
l=SC.DROP_AFTER}}}if(l===SC.DROP_BEFORE){k=(h<j)?this.itemViewForContentIndex(h):null;
if(!k||k.get("isGroupView")){if(h>0){k=this.itemViewForContentIndex(h-1);if(!k.get("isGroupView")||(k.get("disclosureState")===SC.BRANCH_OPEN)){h=h-1;
l=SC.DROP_AFTER}else{h=-1}}else{h=-1}}if(h<0){l=SC.DRAG_NONE}}return[h,l]},mouseWheel:function(a){var b=SC.InlineTextFieldView.editor;
if(b&&b.get("isEditing")){if(b.get("delegate").get("displayDelegate")===this){SC.InlineTextFieldView.commitEditing()
}}return NO},init:function(){arguments.callee.base.apply(this,arguments);this._sclv_rowDelegateDidChange()
}});require("views/list");SC.GridView=SC.ListView.extend({classNames:["sc-grid-view"],layout:{left:0,right:0,top:0,bottom:0},rowHeight:48,columnWidth:64,exampleView:SC.LabelView,insertionOrientation:SC.HORIZONTAL_ORIENTATION,itemsPerRow:function(){var b=this.get("frame"),a=this.get("columnWidth")||0;
return(a<=0)?1:Math.floor(b.width/a)}.property("clippingFrame","columnWidth").cacheable(),contentIndexesInRect:function(e){var d=this.get("rowHeight")||48,b=this.get("itemsPerRow"),c=Math.floor(SC.minY(e)/d)*b,a=Math.ceil(SC.maxY(e)/d)*b;
return SC.IndexSet.create(c,a-c)},layoutForContentIndex:function(g){var d=this.get("rowHeight")||48,a=this.get("clippingFrame").width,b=this.get("itemsPerRow"),e=Math.floor(a/b),f=Math.floor(g/b),c=g-(b*f);
return{left:c*e,top:f*d,height:d,width:e}},computeLayout:function(){var e=this.get("content"),d=(e)?e.get("length"):0,c=this.get("rowHeight")||48,a=this.get("itemsPerRow"),f=Math.ceil(d/a);
var b=this._cachedLayoutHash;if(!b){b=this._cachedLayoutHash={}}b.minHeight=f*c;this.calculatedHeight=b.minHeight;
return b},insertionPointClass:SC.View.extend({classNames:["grid-insertion-point"],render:function(a,b){if(b){a.push('<span class="anchor"></span>')
}}}),showInsertionPoint:function(c,e){if(!c){return}if(e===SC.DROP_ON){if(c!==this._dropOnInsertionPoint){this.hideInsertionPoint();
this._dropOnInsertionPoint=c}}else{if(this._dropOnInsertionPoint){this._dropOnInsertionPoint=null
}if(!this._insertionPointView){this._insertionPointView=this.insertionPointClass.create()
}var b=this._insertionPointView;var a=c.get("frame");var d={height:a.height-6,x:a.x,y:a.y+6,width:0};
if(!SC.rectsEqual(b.get("frame"),d)){b.set("frame",d)}if(b.parentNode!==c.parentNode){c.parentNode.appendChild(b)
}}},hideInsertionPoint:function(){var a=this._insertionPointView;if(a){a.removeFromParent()
}if(this._dropOnInsertionPoint){this._dropOnInsertionPoint=null}},insertionIndexForLocation:function(d,k){var e=this.get("frame"),g=this.get("clippingFrame"),l=this.get("itemsPerRow"),a=Math.floor(e.width/l),n=Math.floor((d.y-e.y-g.y)/this.get("rowHeight"));
var j=SC.DROP_BEFORE,c=(d.x-e.x-g.x),b=Math.floor(c/a),m=(c/a)-b;if(k===SC.DROP_ON){if(m>0.8){b++
}if((m>=0.2)&&(m<=0.8)){j=SC.DROP_ON}}else{if(m>0.45){b++}}var h=(n*l)+b;return[h,j]
},_gv_clippingFrameDidChange:function(){var d=this.get("nowShowing"),c,b,a;this.notifyPropertyChange("itemsPerRow");
a=d.get("length");for(b=0;b<a;b++){c=this.itemViewForContentIndex(b);c.adjust(this.layoutForContentIndex(b))
}}.observes("clippingFrame")});SC.ToolbarView=SC.View.extend({classNames:["sc-toolbar-view"],anchorLocation:null,layout:{left:0,height:32,right:0},init:function(){if(this.anchorLocation){this.layout=SC.merge(this.layout,this.anchorLocation)
}arguments.callee.base.apply(this,arguments)}});require("views/toolbar");SC.VERTICAL_ORIENTATION="vertical";
SC.HORIZONTAL_ORIENTATION="horizontal";SC.WorkspaceView=SC.View.extend({classNames:["sc-workspace-view"],topToolbar:SC.ToolbarView.extend(),bottomToolbar:null,contentView:SC.View.extend(),autoResizeToolbars:NO,defaultToolbarSize:44,largeToolbarSize:44,smallToolbarSize:30,toolbarSize:function(){if(!this.get("autoResizeToolbars")){return this.get("defaultToolbarSize")
}if(this.get("orientation")===SC.HORIZONTAL_ORIENTATION){return this.get("smallToolbarSize")
}return this.get("largeToolbarSize")}.property("autoHideMaster","orientation"),orientation:function(){var a=this.get("frame");
if(a.width>a.height){return SC.HORIZONTAL_ORIENTATION}else{return SC.VERTICAL_ORIENTATION
}}.property("frame").cacheable(),masterIsHidden:NO,masterIsHiddenDidChange:function(){var a,b=this.get("masterIsHidden");
if(a=this.get("topToolbar")){a.set("masterIsHidden",b)}if(a=this.get("bottomToolbar")){a.set("masterIsHidden",b)
}}.observes("masterIsHidden"),_scmd_tilePropertyDidChange:function(){this.invokeOnce("_scws_tile")
}.observes("toolbarSize"),createChildViews:function(){arguments.callee.base.apply(this,arguments);
var a=this.get("topToolbar");if(a){a=this.topToolbar=this.activeTopToolbar=this.createChildView(a);
this.appendChild(a)}var c=this.get("bottomToolbar");if(c){c=this.bottomToolbar=this.activeBottomToolbar=this.createChildView(c);
this.appendChild(c)}var b=this.get("contentView");b=this.contentView=this.activeContentView=this.createChildView(b);
this.appendChild(b);this.invokeOnce("_scws_tile")},_scws_tile:function(){var b=0,e=0,a=this.get("topToolbar"),f=this.get("bottomToolbar"),d=this.get("contentView"),c=this.get("toolbarSize");
if(a){a.set("layout",{left:0,right:0,top:0,height:c});b+=c}if(f){f.set("layout",{left:0,right:0,bottom:0,height:c});
e+=c}this.contentView.set("layout",{left:0,right:0,top:b,bottom:e})},hasTopToolbar:function(){if(this.get("topToolbar")){return YES
}return NO}.property("topToolbar").cacheable(),hasBottomToolbar:function(){if(this.get("bottomToolbar")){return YES
}return NO}.property("bottomToolbar").cacheable(),childDidChange:function(){this._scws_tile()
},activeTopToolbar:null,activeBottomToolbar:null,activeContentView:null,topToolbarDidChange:function(){var b=this.activeTopToolbar,a=this.get("topToolbar");
if(b){this.removeChild(b)}if(a){this.appendChild(a)}this.activeTopToolbar=a;this.invokeLast("childDidChange")
}.observes("topToolbar"),bottomToolbarDidChange:function(){var b=this.activeBottomToolbar,a=this.get("bottomToolbar");
if(b){this.removeChild(b)}if(a){this.appendChild(a)}this.activeBottomToolbar=a;this.invokeLast("childDidChange")
}.observes("bottomToolbar"),contentViewDidChange:function(){var b=this.activeContentView,a=this.get("contentView");
if(b){this.removeChild(b)}if(a){this.appendChild(a)}this.activeContentView=a;this.invokeLast("childDidChange")
}.observes("contentView"),displayProperties:"hasTopToolbar hasBottomToolbar".w(),createRenderer:function(a){return a.workspace()
},updateRenderer:function(a){a.attr({hasTopToolbar:!!this.get("topToolbar"),hasBottomToolbar:!!this.get("bottomToolbar")})
}});require("views/workspace");require("views/toolbar");SC.VERTICAL_ORIENTATION="vertical";
SC.HORIZONTAL_ORIENTATION="horizontal";SC.MasterDetailView=SC.View.extend({classNames:["sc-master-detail-view"],masterView:SC.WorkspaceView.extend({topToolbar:SC.ToolbarView.extend({}),contentView:SC.View.extend({backgroundColor:"white"})}),detailView:SC.WorkspaceView.extend({topToolbar:SC.ToolbarView.extend({childViews:"showHidePicker".w(),showHidePicker:SC.ButtonView.extend({layout:{left:7,centerY:0,height:30,width:100},controlSize:SC.AUTO_CONTROL_SIZE,title:"Picker",action:"toggleMasterPicker",isVisible:NO,isVisibleBinding:".parentView.masterIsHidden"})})}),autoHideMaster:function(){if(SC.platform.touch){return YES
}return NO}.property().cacheable(),masterWidth:250,masterIsHidden:function(){if(!this.get("autoHideMaster")){return NO
}if(this.get("orientation")===SC.HORIZONTAL_ORIENTATION){return NO}return YES}.property("autoHideMaster","orientation"),orientation:function(){var a=this.get("frame");
if(a.width>a.height){return SC.HORIZONTAL_ORIENTATION}else{return SC.VERTICAL_ORIENTATION
}}.property("frame").cacheable(),toggleMasterPicker:function(a){if(!this.get("masterIsHidden")){return
}if(this._picker&&this._picker.get("isVisibleInWindow")){this.hideMasterPicker()}else{this.showMasterPicker(a)
}},showMasterPicker:function(b){if(this._picker&&this._picker.get("isVisibleInWindow")){return
}if(!this._picker){var a=this.get("pickerPane");this._picker=a.create({});this._picker.set("contentView",this.get("masterView"));
this._picker.set("extraRightOffset",this.get("pointerDistanceFromEdge"))}this.showPicker(this._picker,b)
},hideMasterPicker:function(){if(this._picker&&this._picker.get("isVisibleInWindow")){this.hidePicker(this._picker)
}},showPicker:function(b,a){b.popup(a,SC.PICKER_POINTER,[3,0,1,2,3],[9,-9,-18,18])
},hidePicker:function(a){a.remove()},pickerPane:SC.PickerPane.extend({layout:{width:250,height:480},theme:"popover"}),_picker:null,pointerDistanceFromEdge:46,_scmd_masterIsHiddenDidChange:function(){var a=this.get("masterIsHidden");
this.get("masterView").set("masterIsHidden",a);this.get("detailView").set("masterIsHidden",a)
}.observes("masterIsHidden"),_scmd_orientationDidChange:function(){this.invokeOnce("_scmd_tile")
}.observes("orientation"),_scmd_retileProperties:function(){this.invokeOnce("_scmd_tile")
}.observes("masterIsHidden","masterWidth"),createChildViews:function(){var b=this.get("masterView");
b=this.masterView=this.createChildView(b);var a=this.get("detailView");a=this.detailView=this.createChildView(a);
this.appendChild(a);this.invokeOnce("_scmd_tile")},_masterIsDrawn:NO,_scmd_tile:function(){var b=!this.get("masterIsHidden");
var e=this.get("masterWidth"),d=this.get("masterView"),c=this.get("detailView");if(b){this.hideMasterPicker();
if(!this._masterIsDrawn){this.appendChild(d);this._masterIsDrawn=YES}d.set("layout",{left:0,top:0,bottom:0,width:e});
var a=this.renderer?this.renderer.BORDER:0;c.set("layout",{left:e+a,right:0,top:0,bottom:0})
}else{if(this._masterIsDrawn){this.removeChild(d);this._masterIsDrawn=NO}c.set("layout",{left:0,right:0,top:0,bottom:0})
}},createRenderer:function(a){return a.masterDetail()},updateRenderer:function(a){}});
SC.ScrollerView=SC.View.extend({classNames:["sc-scroller-view"],_touchScrollValue:NO,value:function(a,c){var b=this.get("minimum");
if(c!==undefined){this._scs_value=c}c=this._scs_value||b;return Math.max(Math.min(c,this.get("maximum")),b)
}.property("maximum","minimum").cacheable(),displayValue:function(){var a;if(this.get("_touchScrollValue")){a=this.get("_touchScrollValue")
}else{a=this.get("value")}return a}.property("value","_touchScrollValue").cacheable(),proportion:0,maximum:100,minimum:0,isEnabled:YES,layoutDirection:SC.LAYOUT_VERTICAL,hasButtons:YES,scrollbarThickness:14,capLength:18,capOverlap:14,buttonLength:41,buttonOverlap:11,displayProperties:"thumbPosition thumbLength isEnabled controlsHidden".w(),render:function(c,a){var b=[],j="",e,l,g,f,m,k,h,d,n;
switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:b.push("sc-vertical");
break;case SC.LAYOUT_HORIZONTAL:b.push("sc-horizontal");break}if(!this.get("isEnabled")){b.push("disabled")
}if(this.get("controlsHidden")){b.push("controls-hidden")}c.addClass(b);l=this.get("thumbLength");
e=this.get("thumbPosition");if(a){if(this.get("hasButtons")){j='<div class="button-bottom"></div><div class="button-top"></div>'
}else{j='<div class="endcap"></div>'}switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:c.push('<div class="track"></div>','<div class="cap"></div>',j,'<div class="thumb" style="height: '+l+'px;">','<div class="thumb-center"></div>','<div class="thumb-top"></div>','<div class="thumb-bottom"></div></div>');
break;case SC.LAYOUT_HORIZONTAL:c.push('<div class="track"></div>','<div class="cap"></div>',j,'<div class="thumb" style="width: '+l+'px;">','<div class="thumb-center"></div>','<div class="thumb-top"></div>','<div class="thumb-bottom"></div></div>')
}}else{if(this.get("controlsHidden")){return}f=this.$(".thumb");this.adjustThumb(f,e,l)
}},touchScrollDidStart:function(a){this.set("_touchScrollValue",a)},touchScrollDidEnd:function(a){this.set("_touchScrollValue",NO)
},touchScrollDidChange:function(a){this.set("_touchScrollValue",a)},adjustThumb:function(b,a,c){this.adjustThumbPosition(b,a);
this.adjustThumbSize(b,c)},adjustThumbPosition:function(b,a){if(this._thumbPosition===a){return
}switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:b.css("top",a);break;
case SC.LAYOUT_HORIZONTAL:b.css("left",a);break}this._thumbPosition=a},adjustThumbSize:function(a,b){if(this._thumbSize===b){return
}switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:a.css("height",Math.max(b,20));
break;case SC.LAYOUT_HORIZONTAL:a.css("width",Math.max(b,20));break}this._thumbSize=b
},trackLength:function(){var a=this.get("scrollerLength");a-=this.capLength-this.capOverlap;
a-=this.buttonLength-this.buttonOverlap;return a}.property("scrollerLength").cacheable(),scrollerLength:function(){switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:return this.get("frame").height;
case SC.LAYOUT_HORIZONTAL:return this.get("frame").width}return 0}.property("frame").cacheable(),thumbLength:function(){var a;
a=Math.floor(this.get("trackLength")*this.get("proportion"));a=isNaN(a)?0:a;return Math.max(a,20)
}.property("trackLength","proportion").cacheable(),thumbPosition:function(){var g=this.get("displayValue"),c=this.get("maximum"),b=this.get("trackLength"),d=this.get("thumbLength"),f=this.get("capLength"),e=this.get("capOverlap"),a;
a=(g/c)*(b-d);a+=f-e;return Math.floor(isNaN(a)?0:a)}.property("displayValue","maximum","trackLength","thumbLength").cacheable(),controlsHidden:function(){return this.get("proportion")>=1
}.property("proportion").cacheable(),mouseDown:function(h){if(!this.get("isEnabled")){return NO
}var d=h.target,b=this.get("thumbPosition"),g,c,f;if(d.className.indexOf("thumb")>=0){c=this.convertFrameFromView({x:h.pageX,y:h.pageY});
c.x-=b;c.y-=b;this._thumbDragging=YES;this._thumbOffset=c;this._mouseDownLocation={x:h.pageX,y:h.pageY};
this._thumbPositionAtDragStart=this.get("thumbPosition")}else{if(d.className.indexOf("button-top")>=0){this.decrementProperty("value",30);
this.makeButtonActive(".button-top");this.startMouseDownTimer("scrollUp")}else{if(d.className.indexOf("button-bottom")>=0){this.incrementProperty("value",30);
this.makeButtonActive(".button-bottom");this.startMouseDownTimer("scrollDown")}else{var e=this.get("scrollerLength"),a=this.convertFrameFromView({x:h.pageX,y:h.pageY}),j;
switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:this._mouseDownLocation=j=a.y;
break;case SC.LAYOUT_HORIZONTAL:this._mouseDownLocation=j=a.x;break}if(j<b){this.decrementProperty("value",e);
this.startMouseDownTimer("page")}else{this.incrementProperty("value",e);this.startMouseDownTimer("page")
}}}}return YES},mouseUp:function(a){var c=this._scs_buttonActive,b=NO,d;if(c){c.removeClass("active");
b=YES}d=this._mouseDownTimer;if(d){d.invalidate();this._mouseDownTimer=null}this._thumbDragging=NO;
return b},mouseDragged:function(a){var d,c,f,b,e=this._thumbPositionAtDragStart;if(!this._thumbDragging){return NO
}switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:f=(a.pageY-this._mouseDownLocation.y);
break;case SC.LAYOUT_HORIZONTAL:f=(a.pageX-this._mouseDownLocation.x);break}b=e+f;
c=this.get("trackLength")-this.get("thumbLength");this.set("value",Math.round((b/c)*this.get("maximum")));
return YES},startMouseDownTimer:function(a){var b;this._mouseDownTimerAction=a;this._mouseDownTimer=SC.Timer.schedule({target:this,action:this.mouseDownTimerDidFire,interval:300})
},mouseDownTimerDidFire:function(){var d=this.get("scrollerLength"),a=SC.device.get("mouseLocation"),c=this.get("thumbPosition"),b=this.get("thumbLength"),e=50;
switch(this.get("layoutDirection")){case SC.LAYOUT_VERTICAL:a=this.convertFrameFromView(a).y;
break;case SC.LAYOUT_HORIZONTAL:a=this.convertFrameFromView(a).x;break}switch(this._mouseDownTimerAction){case"scrollDown":this.incrementProperty("value",30);
break;case"scrollUp":this.decrementProperty("value",30);break;case"page":e=150;if(a<c){this.decrementProperty("value",d)
}else{if(a>c+b){this.incrementProperty("value",d)}}}this._mouseDownTimer=SC.Timer.schedule({target:this,action:this.mouseDownTimerDidFire,interval:e})
},makeButtonActive:function(a){this._scs_buttonActive=this.$(a).addClass("active")
}});sc_require("views/scroller");sc_require("mixins/border");SC.NORMAL_SCROLL_DECELERATION=0.95;
SC.FAST_SCROLL_DECELERATION=0.85;SC.ScrollView=SC.View.extend(SC.Border,{classNames:["sc-scroll-view"],isScrollable:YES,contentView:null,horizontalAlign:SC.ALIGN_LEFT,verticalAlign:SC.ALIGN_TOP,horizontalScrollOffset:function(b,d){if(d!==undefined){var c=this.minimumHorizontalScrollOffset(),a=this.get("maximumHorizontalScrollOffset");
this._scroll_horizontalScrollOffset=Math.max(c,Math.min(a,d))}return this._scroll_horizontalScrollOffset||0
}.property().cacheable(),verticalScrollOffset:function(b,d){if(d!==undefined){var c=this.get("minimumVerticalScrollOffset"),a=this.get("maximumVerticalScrollOffset");
this._scroll_verticalScrollOffset=Math.max(c,Math.min(a,d))}return this._scroll_verticalScrollOffset||0
}.property().cacheable(),maximumScrollOffset:function(b,a,c){if(b>=a){return b-a}if(c===SC.ALIGN_LEFT||c===SC.ALIGN_TOP){return 0
}else{if(c===SC.ALIGN_MIDDLE||c===SC.ALIGN_CENTER){return 0-Math.round((a-b)/2)}else{return 0-(a-b)
}}},minimumScrollOffset:function(b,a,c){if(b>a){return 0}if(c===SC.ALIGN_LEFT||c===SC.ALIGN_TOP){return 0
}else{if(c===SC.ALIGN_MIDDLE||c===SC.ALIGN_CENTER){return 0-Math.round((a-b)/2)}else{return 0-(a-b)
}}},maximumHorizontalScrollOffset:function(){var c=this.get("contentView"),b=0,a=0;
if(c&&c.get("frame")){b=c.get("frame").width}if(c){a=c.calculatedWidth||0}if(c&&c.calculatedWidth&&c.calculatedWidth!==0){b=c.calculatedWidth
}b*=this._scale;var d=this.get("containerView").get("frame").width;if(!this.get("canScrollHorizontal")){b=Math.min(b,d)
}return this.maximumScrollOffset(b,d,this.get("horizontalAlign"))}.property(),maximumVerticalScrollOffset:function(){var a=this.get("contentView"),c=0,b=0;
if(a&&a.get("frame")){c=a.get("frame").height}if(a){b=a.calculatedHeight||0}if(a&&a.calculatedHeight&&a.calculatedHeight!==0){c=a.calculatedHeight
}c*=this._scale;var d=this.get("containerView").get("frame").height;if(!this.get("canScrollVertical")){c=Math.min(c,d)
}return this.maximumScrollOffset(c,d,this.get("verticalAlign"))}.property(),minimumHorizontalScrollOffset:function(){var b=this.get("contentView");
var a=b?b.get("frame").width:0;if(b&&b.calculatedWidth&&b.calculatedWidth!==0){a=b.calculatedWidth
}a*=this._scale;var c=this.get("containerView").get("frame").width;if(!this.get("canScrollHorizontal")){a=Math.min(a,c)
}return this.minimumScrollOffset(a,c,this.get("horizontalAlign"))}.property(),minimumVerticalScrollOffset:function(){var a=this.get("contentView");
var b=(a&&a.get("frame"))?a.get("frame").height:0;if(a&&a.calculatedHeight&&a.calculatedHeight!==0){b=a.calculatedHeight
}b*=this._scale;var c=this.get("containerView").get("frame").height;if(!this.get("canScrollVertical")){b=Math.min(b,c)
}return this.minimumScrollOffset(b,c,this.get("verticalAlign"))}.property(),verticalLineScroll:20,horizontalLineScroll:20,verticalPageScroll:function(){return this.get("frame").height
}.property("frame"),horizontalPageScroll:function(){return this.get("frame").width
}.property("frame"),hasHorizontalScroller:YES,horizontalScrollerView:function(){return SC.ScrollerView
}.property().cacheable(),isHorizontalScrollerVisible:YES,canScrollHorizontal:function(){return !!(this.get("hasHorizontalScroller")&&this.get("horizontalScrollerView")&&this.get("isHorizontalScrollerVisible"))
}.property("isHorizontalScrollerVisible").cacheable(),autohidesHorizontalScroller:YES,hasVerticalScroller:YES,verticalScrollerView:function(){return SC.ScrollerView
}.property().cacheable(),isVerticalScrollerVisible:YES,canScrollVertical:function(){return !!(this.get("hasVerticalScroller")&&this.get("verticalScrollerView")&&this.get("isVerticalScrollerVisible"))
}.property("isVerticalScrollerVisible").cacheable(),autohidesVerticalScroller:YES,verticalScrollerBottom:0,verticalOverlay:function(){if(SC.platform.touch){return YES
}return NO}.property().cacheable(),horizontalOverlay:function(){if(SC.platform.touch){return YES
}return NO}.property().cacheable(),verticalScrollerLayout:null,horizontalScrollerLayout:null,containerView:SC.ContainerView.extend({}),scrollTo:function(a,b){if(b===undefined&&SC.typeOf(a)===SC.T_HASH){b=a.y;
a=a.x}if(!SC.none(a)){a=Math.max(this.get("minimumHorizontalScrollOffset"),Math.min(this.get("maximumHorizontalScrollOffset"),a));
this.set("horizontalScrollOffset",a)}if(!SC.none(b)){b=Math.max(this.get("minimumVerticalScrollOffset"),Math.min(this.get("maximumVerticalScrollOffset"),b));
this.set("verticalScrollOffset",b)}return this},scrollBy:function(a,b){if(b===undefined&&SC.typeOf(a)===SC.T_HASH){b=a.y;
a=a.x}a=(a)?this.get("horizontalScrollOffset")+a:null;b=(b)?this.get("verticalScrollOffset")+b:null;
return this.scrollTo(a,b)},scrollToVisible:function(b){if(arguments.length===0){return arguments.callee.base.apply(this,arguments)
}var c=this.get("contentView");if(!c){return NO}var a=b.get("frame");if(!a){return NO
}a=c.convertFrameFromView(a,b.get("parentView"));return this.scrollToRect(a)},scrollToRect:function(b){var a=SC.cloneRect(this.get("containerView").get("frame"));
a.x=this.get("horizontalScrollOffset");a.y=this.get("verticalScrollOffset");var d=a.x,c=a.y;
a.y-=Math.max(0,SC.minY(a)-SC.minY(b));a.x-=Math.max(0,SC.minX(a)-SC.minX(b));a.y+=Math.max(0,SC.maxY(b)-SC.maxY(a));
a.x+=Math.max(0,SC.maxX(b)-SC.maxX(a));if((d!==a.x)||(c!==a.y)){this.scrollTo(a.x,a.y);
return YES}else{return NO}},scrollDownLine:function(a){if(a===undefined){a=1}return this.scrollBy(null,this.get("verticalLineScroll")*a)
},scrollUpLine:function(a){if(a===undefined){a=1}return this.scrollBy(null,0-this.get("verticalLineScroll")*a)
},scrollRightLine:function(a){if(a===undefined){a=1}return this.scrollTo(this.get("horizontalLineScroll")*a,null)
},scrollLeftLine:function(a){if(a===undefined){a=1}return this.scrollTo(0-this.get("horizontalLineScroll")*a,null)
},scrollDownPage:function(a){if(a===undefined){a=1}return this.scrollBy(null,this.get("verticalPageScroll")*a)
},scrollUpPage:function(a){if(a===undefined){a=1}return this.scrollBy(null,0-(this.get("verticalPageScroll")*a))
},scrollRightPage:function(a){if(a===undefined){a=1}return this.scrollBy(this.get("horizontalPageScroll")*a,null)
},scrollLeftPage:function(a){if(a===undefined){a=1}return this.scrollBy(0-(this.get("horizontalPageScroll")*a),null)
},tile:function(){var g=SC.platform.touch;var c=this.get("hasHorizontalScroller")?this.get("horizontalScrollerView"):null;
var j=c&&!g&&this.get("isHorizontalScrollerVisible");var l=this.get("hasVerticalScroller")?this.get("verticalScrollerView"):null;
var f=l&&!g&&this.get("isVerticalScrollerVisible");var e=this.get("containerView");
var o={left:0,top:0};var n,h,b,p,d,a;var k=((j)?c.get("scrollbarThickness"):0);var m=(f)?l.get("scrollbarThickness"):0;
if(j){a=this.get("horizontalScrollerLayout");h={left:(a?a.left:0),bottom:(a?a.bottom:0),right:(a?a.right+m-1:m-1),height:k};
c.set("layout",h);p=this.get("horizontalOverlay");o.bottom=p?0:(h.bottom+k)}else{o.bottom=0
}if(c){c.set("isVisible",j)}if(f){k=k+this.get("verticalScrollerBottom");d=this.get("verticalScrollerLayout");
h={top:(d?d.top:0),bottom:(d?d.bottom+k:k),right:(d?d.right:0),width:m};l.set("layout",h);
b=this.get("verticalOverlay");o.right=b?0:(h.right+m)}else{o.right=0}if(l){l.set("isVisible",f)
}e.adjust(o)},scrollerVisibilityDidChange:function(){this.tile()}.observes("isVerticalScrollerVisible","isHorizontalScrollerVisible"),_scroll_wheelDeltaX:0,_scroll_wheelDeltaY:0,mouseWheel:function(a){var b=(SC.browser.safari&&SC.browser.version>533)?120:1;
this._scroll_wheelDeltaX+=a.wheelDeltaX/b;this._scroll_wheelDeltaY+=a.wheelDeltaY/b;
this.invokeLater(this._scroll_mouseWheel,10);return this.get("canScrollHorizontal")||this.get("canScrollVertical")
},_scroll_mouseWheel:function(){this.scrollBy(this._scroll_wheelDeltaX,this._scroll_wheelDeltaY);
if(SC.WHEEL_MOMENTUM&&this._scroll_wheelDeltaY>0){this._scroll_wheelDeltaY=Math.floor(this._scroll_wheelDeltaY*0.95);
this._scroll_wheelDeltaY=Math.max(this._scroll_wheelDeltaY,0);this.invokeLater(this._scroll_mouseWheel,10)
}else{if(SC.WHEEL_MOMENTUM&&this._scroll_wheelDeltaY<0){this._scroll_wheelDeltaY=Math.ceil(this._scroll_wheelDeltaY*0.95);
this._scroll_wheelDeltaY=Math.min(this._scroll_wheelDeltaY,0);this.invokeLater(this._scroll_mouseWheel,10)
}else{this._scroll_wheelDeltaY=0;this._scroll_wheelDeltaX=0}}},canScale:NO,_scale:1,scale:function(a,b){if(b!==undefined){this._scale=Math.min(Math.max(this.get("minimumScale"),b),this.get("maximumScale"))
}return this._scale}.property().cacheable(),minimumScale:0.25,maximumScale:2,autoScaleRange:NO,_scale_css:"",updateScale:function(b){var a=this.get("contentView");
if(!a){return}if(a.isScalable){this.get("contentView").applyScale(b);this._scale_css=""
}else{this._scale_css="scale3d("+b+", "+b+", 1)"}},acceptsMultitouch:YES,decelerationRate:SC.NORMAL_SCROLL_DECELERATION,alwaysBounceHorizontal:NO,alwaysBounceVertical:YES,delaysContentTouches:YES,_touchScrollDidChange:function(){if(this.get("contentView").touchScrollDidChange){this.get("contentView").touchScrollDidChange(this._scroll_horizontalScrollOffset,this._scroll_verticalScrollOffset)
}if(this.verticalScrollerView&&this.verticalScrollerView.touchScrollDidChange){this.verticalScrollerView.touchScrollDidChange(this._scroll_verticalScrollOffset)
}if(this.horizontalScrollerView&&this.horizontalScrollerView.touchScrollDidChange){this.horizontalScrollerView.touchScrollDidChange(this._scroll_horizontalScrollOffset)
}},_touchScrollDidStart:function(){if(this.get("contentView").touchScrollDidStart){this.get("contentView").touchScrollDidStart(this._scroll_horizontalScrollOffset,this._scroll_verticalScrollOffset)
}if(this.verticalScrollerView&&this.verticalScrollerView.touchScrollDidStart){this.verticalScrollerView.touchScrollDidStart(this._touch_verticalScrollOffset)
}if(this.horizontalScrollerView&&this.horizontalScrollerView.touchScrollDidStart){this.horizontalScrollerView.touchScrollDidStart(this._touch_horizontalScrollOffset)
}},_touchScrollDidEnd:function(){if(this.get("contentView").touchScrollDidEnd){this.get("contentView").touchScrollDidEnd(this._scroll_horizontalScrollOffset,this._scroll_verticalScrollOffset)
}if(this.verticalScrollerView&&this.verticalScrollerView.touchScrollDidEnd){this.verticalScrollerView.touchScrollDidEnd(this._touch_verticalScrollOffset)
}if(this.horizontalScrollerView&&this.horizontalScrollerView.touchScrollDidEnd){this.horizontalScrollerView.touchScrollDidEnd(this._touch_horizontalScrollOffset)
}},_applyCSSTransforms:function(b){var a="";this.updateScale(this._scale);a+="translate3d("+-this._scroll_horizontalScrollOffset+"px, "+-Math.round(this._scroll_verticalScrollOffset)+"px,0) ";
a+=this._scale_css;if(b){b.style.webkitTransform=a;b.style.webkitTransformOrigin="top left"
}},captureTouch:function(a){return YES},touchGeneration:0,touchStart:function(b){var a=++this.touchGeneration;
if(!this.tracking&&this.get("delaysContentTouches")){this.invokeLater(this.beginTouchesInContent,150,a)
}else{if(!this.tracking){this.invokeLater(this.beginTouchesInContent,1,a)}}this.beginTouchTracking(b,YES);
return YES},beginTouchesInContent:function(b){if(b!==this.touchGeneration){return
}var c=this.touch,a;if(c&&this.tracking&&!this.dragging&&!c.touch.scrollHasEnded){c.touch.captureTouch(this,YES);
if(!c.touch.touchResponder){c.touch.makeTouchResponder(this)}}},beginTouchTracking:function(d,n){var f=d.averagedTouchesForView(this,n);
var b=this._scroll_verticalScrollOffset||0,c=this._scroll_horizontalScrollOffset||0,h=c,g=b;
if(this.touch&&this.touch.timeout){clearTimeout(this.touch.timeout);this.touch.timeout=null;
h=this.touch.startClipOffset.x;g=this.touch.startClipOffset.y}var j=this.get("contentView");
var a=j?j.get("frame").width:0,l=j?j.get("frame").height:0;if(j.calculatedWidth&&j.calculatedWidth!==0){a=j.calculatedWidth
}if(j.calculatedHeight&&j.calculatedHeight!==0){l=j.calculatedHeight}var k=this.get("containerView").get("frame").width,p=this.get("containerView").get("frame").height;
var e=this.convertFrameToView(this.get("frame"),null),o=(c+(f.x-e.x))/this._scale,m=(b+(f.y-e.y))/this._scale;
this.touch={startTime:d.timeStamp,notCalculated:YES,enableScrolling:{x:a*this._scale>k||this.get("alwaysBounceHorizontal"),y:l*this._scale>p||this.get("alwaysBounceVertical")},scrolling:{x:NO,y:NO},enableBouncing:SC.platform.bounceOnScroll,startClipOffset:{x:h,y:g},lastScrollOffset:{x:c,y:b},startTouchOffset:{x:f.x,y:f.y},scrollVelocity:{x:0,y:0},startTouchOffsetInContent:{x:o,y:m},containerSize:{width:k,height:p},contentSize:{width:a,height:l},startScale:this._scale,startDistance:f.d,canScale:this.get("canScale")&&SC.platform.pinchToZoom,minimumScale:this.get("minimumScale"),maximumScale:this.get("maximumScale"),globalFrame:e,layer:this.get("contentView").get("layer"),resistanceCoefficient:0.998,resistanceAsymptote:320,decelerationFromEdge:0.05,accelerationToEdge:0.1,scrollTolerance:{x:15,y:15},scaleTolerance:5,secondaryScrollTolerance:30,scrollLock:500,decelerationRate:this.get("decelerationRate"),lastEventTime:d.timeStamp,touch:(n?d:(this.touch?this.touch.touch:null))};
if(!this.tracking){this.tracking=YES;this.dragging=NO}},_adjustForEdgeResistance:function(f,d,b,c,a){var e;
if(f<d){e=f-d}else{if(f>b){e=b-f}else{return f}}e=Math.pow(c,Math.abs(e))*a;if(f<d){e=e-a
}else{e=-e+a}return Math.min(Math.max(d,f),b)+e},touchesDragged:function(a,c){var b=a.averagedTouchesForView(this);
this.updateTouchScroll(b.x,b.y,b.d,a.timeStamp)},updateTouchScroll:function(k,j,d,g){var f=this.touch,a=k-f.globalFrame.x,l=j-f.globalFrame.y,t,m,u,n,A,y;
var c=((this._scroll_horizontalScrollOffset||0)+a)/this._scale,b=((this._scroll_verticalScrollOffset||0)+l)/this._scale;
var x=c-f.startTouchOffset.x,w=b-f.startTouchOffset.y;var h=f.dragging;if(!f.scrolling.x&&Math.abs(x)>f.scrollTolerance.x&&f.enableScrolling.x){h=YES;
f.scrolling.x=YES;f.scrollTolerance.y=f.secondaryScrollTolerance;f.startTouchOffset.x=k;
x=0}if(!f.scrolling.y&&Math.abs(w)>f.scrollTolerance.y&&f.enableScrolling.y){h=YES;
f.scrolling.y=YES;f.scrollTolerance.x=f.secondaryScrollTolerance;f.startTouchOffset.y=j;
w=0}if(h&&!f.dragging){f.dragging=YES;this.dragging=YES;this._touchScrollDidStart()
}if(!f.scrolling.x&&!f.scrolling.y&&!f.canScale){return}if(f.scrolling.x&&!f.scrolling.y){if(x>f.scrollLock&&!f.scrolling.y){f.enableScrolling.y=NO
}}if(f.scrolling.y&&!f.scrolling.x){if(w>f.scrollLock&&!f.scrolling.x){f.enableScrolling.x=NO
}}if(f.canScale){var p=f.startDistance,v=d-p;if(Math.abs(v)>f.scaleTolerance){f.scrolling.y=YES;
f.scrolling.x=YES;var z=f.startScale*(d/Math.max(p,50));var q=this._adjustForEdgeResistance(z,f.minimumScale,f.maximumScale,f.resistanceCoefficient,f.resistanceAsymptote);
this.dragging=YES;this._scale=q;var s=c*this._scale,r=b*this._scale}}A=this.minimumScrollOffset(f.contentSize.width*this._scale,f.containerSize.width,this.get("horizontalAlign"));
y=this.minimumScrollOffset(f.contentSize.height*this._scale,f.containerSize.height,this.get("verticalAlign"));
n=this.maximumScrollOffset(f.contentSize.width*this._scale,f.containerSize.width,this.get("horizontalAlign"));
m=this.maximumScrollOffset(f.contentSize.height*this._scale,f.containerSize.height,this.get("verticalAlign"));
u=f.startTouchOffsetInContent.x*this._scale-a;t=f.startTouchOffsetInContent.y*this._scale-l;
if(f.enableBouncing){u=this._adjustForEdgeResistance(u,A,n,f.resistanceCoefficient,f.resistanceAsymptote);
t=this._adjustForEdgeResistance(t,y,m,f.resistanceCoefficient,f.resistanceAsymptote)
}else{u=Math.max(A,Math.min(n,u));t=Math.max(y,Math.min(m,t))}if(f.scrolling.x){this._scroll_horizontalScrollOffset=u
}if(f.scrolling.y){this._scroll_verticalScrollOffset=t}this._applyCSSTransforms(f.layer);
this._touchScrollDidChange();if(g-f.lastEventTime>=1||f.notCalculated){f.notCalculated=NO;
var e=this._scroll_horizontalScrollOffset;var o=this._scroll_verticalScrollOffset;
f.scrollVelocity.x=((e-f.lastScrollOffset.x)/Math.max(1,g-f.lastEventTime));f.scrollVelocity.y=((o-f.lastScrollOffset.y)/Math.max(1,g-f.lastEventTime));
f.lastScrollOffset.x=e;f.lastScrollOffset.y=o;f.lastEventTime=g}},touchEnd:function(c){var a=this.touch,b=c.averagedTouchesForView(this);
c.scrollHasEnded=YES;if(b.touchCount>0){this.beginTouchTracking(c,NO)}else{if(this.dragging){a.dragging=NO;
a.lastEventTime=c.timeStamp;this.startDecelerationAnimation()}else{c.captureTouch(this,YES);
if(c.touchResponder&&c.touchResponder!==this){c.end()}if(!c.touchResponder||c.touchResponder===this){if(c.nextTouchResponder){c.makeTouchResponder(c.nextTouchResponder)
}}else{}}this.tracking=NO;this.dragging=NO}},touchCancelled:function(a){this.beginPropertyChanges();
this.set("scale",this._scale);this.set("verticalScrollOffset",this._scroll_verticalScrollOffset);
this.set("horizontalScrollOffset",this._scroll_horizontalScrollOffset);this.endPropertyChanges();
this.tracking=NO;if(this.dragging){this._touchScrollDidEnd()}this.dragging=NO;this.touch=null
},startDecelerationAnimation:function(a){var b=this.touch;b.decelerationVelocity={x:b.scrollVelocity.x*10,y:b.scrollVelocity.y*10};
this.decelerateAnimation()},bouncyBounce:function(c,e,d,f,g,b,a){if(e<d){if(c<0){c=c+((d-e)*g)
}else{c=Math.min((d-e)*b+a,d-e-0.01)}}else{if(e>f){if(c>0){c=c-((e-f)*g)}else{c=-Math.min((e-f)*b+a,e-f-0.01)
}}}return c},decelerateAnimation:function(){var b=this.touch,u=this._scale,s=this.minimumScrollOffset(b.contentSize.width*this._scale,b.containerSize.width,this.get("horizontalAlign")),r=this.minimumScrollOffset(b.contentSize.height*this._scale,b.containerSize.height,this.get("verticalAlign")),g=this.maximumScrollOffset(b.contentSize.width*this._scale,b.containerSize.width,this.get("horizontalAlign")),f=this.maximumScrollOffset(b.contentSize.height*this._scale,b.containerSize.height,this.get("verticalAlign")),a=Date.now(),d=Math.max(a-b.lastEventTime,1),o=this._scroll_horizontalScrollOffset+b.decelerationVelocity.x*(d/10),l=this._scroll_verticalScrollOffset+b.decelerationVelocity.y*(d/10);
var n=b.decelerationFromEdge,p=b.accelerationToEdge;var k=!b.enableBouncing,j=!b.enableBouncing;
if(o>=s&&o<=g){k=YES}if(l>=r&&l<=f){j=YES}o/=this._scale;l/=this._scale;var h=0;h=this.bouncyBounce(h,u,b.minimumScale,b.maximumScale,n,p,0);
this._scale=u=u+h;o*=this._scale;l*=this._scale;s=this.minimumScrollOffset(b.contentSize.width*this._scale,b.containerSize.width,this.get("horizontalAlign"));
r=this.minimumScrollOffset(b.contentSize.height*this._scale,b.containerSize.height,this.get("verticalAlign"));
g=this.maximumScrollOffset(b.contentSize.width*this._scale,b.containerSize.width,this.get("horizontalAlign"));
f=this.maximumScrollOffset(b.contentSize.height*this._scale,b.containerSize.height,this.get("verticalAlign"));
if(k&&(o<s||o>g)){o=Math.max(s,Math.min(o,g));b.decelerationVelocity.x=0}if(j&&(l<r||l>f)){l=Math.max(r,Math.min(l,f));
b.decelerationVelocity.y=0}this._scroll_horizontalScrollOffset=o;this._scroll_verticalScrollOffset=l;
this._applyCSSTransforms(b.layer);SC.RunLoop.begin();this._touchScrollDidChange();
SC.RunLoop.end();var q=b.decelerationRate;b.decelerationVelocity.y*=Math.pow(q,(d/10));
b.decelerationVelocity.x*=Math.pow(q,(d/10));b.decelerationVelocity.x=this.bouncyBounce(b.decelerationVelocity.x,o,s,g,n,p,0.3);
b.decelerationVelocity.y=this.bouncyBounce(b.decelerationVelocity.y,l,r,f,n,p,0.3);
var m=Math.abs(b.decelerationVelocity.x);var c=Math.abs(b.decelerationVelocity.y);
if(c<0.01&&m<0.01&&Math.abs(h)<0.01){b.timeout=null;this.touch=null;SC.RunLoop.begin();
this._touchScrollDidEnd();this.beginPropertyChanges();this.set("scale",this._scale);
this.set("verticalScrollOffset",this._scroll_verticalScrollOffset);this.set("horizontalScrollOffset",this._scroll_horizontalScrollOffset);
this.endPropertyChanges();SC.RunLoop.end();return}var e=this;b.lastEventTime=Date.now();
this.touch.timeout=setTimeout(function(){SC.RunLoop.begin();e.decelerateAnimation();
SC.RunLoop.end()},10)},createChildViews:function(){var b=[],a;if(SC.none(a=this.containerView)){a=SC.ContainerView
}b.push(this.containerView=this.createChildView(a,{contentView:this.contentView,isScrollContainer:YES}));
this.contentView=this.containerView.get("contentView");a=this.get("horizontalScrollerView");
if(a){if(this.get("hasHorizontalScroller")){a=this.horizontalScrollerView=this.createChildView(a,{layoutDirection:SC.LAYOUT_HORIZONTAL,valueBinding:"*owner.horizontalScrollOffset"});
b.push(a)}else{this.horizontalScrollerView=null}}a=this.get("verticalScrollerView");
if(a){if(this.get("hasVerticalScroller")){a=this.verticalScrollerView=this.createChildView(a,{layoutDirection:SC.LAYOUT_VERTICAL,valueBinding:"*owner.verticalScrollOffset"});
b.push(a)}else{this.verticalScrollerView=null}}this.childViews=b;this.contentViewDidChange();
this.tile()},init:function(){arguments.callee.base.apply(this,arguments);this._scroll_contentView=this.get("contentView");
var a=this._scroll_contentView;if(a){a.addObserver("frame",this,this.contentViewFrameDidChange)
}if(this.get("isVisibleInWindow")){this._scsv_registerAutoscroll()}},_scsv_registerAutoscroll:function(){if(this.get("isVisibleInWindow")){SC.Drag.addScrollableView(this)
}else{SC.Drag.removeScrollableView(this)}}.observes("isVisibleInWindow"),contentViewDidChange:function(){var d=this.get("contentView"),a=this._scroll_contentView,b=this.contentViewFrameDidChange,c=this.contentViewLayerDidChange;
if(d!==a){if(a){a.removeObserver("frame",this,b);a.removeObserver("layer",this,c)
}this._scroll_contentView=d;if(d){d.addObserver("frame",this,b);d.addObserver("layer",this,c)
}this.containerView.set("contentView",d);this.contentViewFrameDidChange()}}.observes("contentView"),render:function(a,b){this.invokeLast(this.adjustElementScroll);
if(b){a.push('<div class="corner"></div>')}return arguments.callee.base.apply(this,arguments)
},oldMaxHOffset:0,oldMaxVOffset:0,contentViewFrameDidChange:function(b){var o=this.get("contentView"),m=(o)?o.get("frame"):null,h=this._scale,c=(m)?m.width*h:0,q=(m)?m.height*h:0,k,j,n;
if(!b&&(c===this._scroll_contentWidth)&&(q===this._scroll_contentHeight)){return}this._scroll_contentWidth=c;
this._scroll_contentHeight=q;k=this.get("frame");j=k.width;n=k.height;if(this.get("hasHorizontalScroller")&&(o=this.get("horizontalScrollerView"))){if(this.get("autohidesHorizontalScroller")){this.set("isHorizontalScrollerVisible",c>j)
}o.setIfChanged("maximum",c-j);o.setIfChanged("proportion",j/c)}if(this.get("hasVerticalScroller")&&(o=this.get("verticalScrollerView"))){if(this.get("autohidesVerticalScroller")){this.set("isVerticalScrollerVisible",q>n)
}q-=this.get("verticalScrollerBottom");o.setIfChanged("maximum",q-n);o.setIfChanged("proportion",n/q)
}if(!this.get("isVerticalScrollerVisible")&&(this.get("verticalScrollOffset")!==0)&&this.get("autohidesVerticalScroller")){this.set("verticalScrollOffset",0)
}if(!this.get("isHorizontalScrollerVisible")&&(this.get("horizontalScrollOffset")!==0)&&this.get("autohidesHorizontalScroller")){this.set("horizontalScrollOffset",0)
}var p=this.get("maximumVerticalScrollOffset"),l=this.get("verticalScrollOffset"),g=this.get("maximumHorizontalScrollOffset"),a=this.get("horizontalScrollOffset"),e=p<l,d=g<a;
if(e||d){this.forceDimensionsRecalculation(d,e,l,a)}},frameDidChange:function(){this.contentViewFrameDidChange(YES)
}.observes("frame"),contentViewLayerDidChange:function(){if(this._verticalScrollOffset!==0){this._verticalScrollOffset=-1
}if(this._horizontalScrollOffset!==0){this._horizontalScrollOffset=-1}this.invokeLast(this.adjustElementScroll)
},_scroll_horizontalScrollOffsetDidChange:function(){this.invokeLast(this.adjustElementScroll)
}.observes("horizontalScrollOffset"),_scroll_verticalScrollOffsetDidChange:function(){this.invokeLast(this.adjustElementScroll)
}.observes("verticalScrollOffset"),adjustElementScroll:function(){var a=this.get("containerView"),d=this.get("contentView"),c=this.get("verticalScrollOffset"),b=this.get("horizontalScrollOffset");
if(d){SC.RunLoop.begin();d._viewFrameDidChange();SC.RunLoop.end();if(SC.platform.touch){this._applyCSSTransforms(d.get("layer"))
}}if(a&&!SC.platform.touch){a=a.$()[0];if(a){if(c!==this._verticalScrollOffset){a.scrollTop=c;
this._verticalScrollOffset=c}if(b!==this._horizontalScrollOffset){a.scrollLeft=b;
this._horizontalScrollOffset=b}}}},forceDimensionsRecalculation:function(b,c,e,a){var f=a;
var d=e;this.scrollTo(0,0);if(b&&c){this.scrollTo(this.get("maximumHorizontalScrollOffset"),this.get("maximumVerticalScrollOffset"))
}if(b&&!c){this.scrollTo(this.get("maximumHorizontalScrollOffset"),d)}if(!b&&c){this.scrollTo(f,this.get("maximumVerticalScrollOffset"))
}},_scroll_verticalScrollOffset:0,_scroll_horizontalScrollOffset:0});sc_require("views/scroll");
SC.MenuScrollerView=SC.ScrollerView.extend({classNames:["sc-menu-scroller-view"],scrollDown:NO,value:function(a,c){if(c!==undefined){this._value=c
}else{var b=this._value||0;return Math.min(b,this.get("maximum"))}}.property("maximum").cacheable(),maximum:0,isEnabled:YES,layoutDirection:SC.LAYOUT_VERTICAL,verticalLineScroll:20,ownerScrollValueKey:function(){return"verticalScrollOffset"
}.property("layoutDirection").cacheable(),init:function(){switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:this.set("scrollerThickness",SC.MenuScrollerView.TINY_SCROLLER_THICKNESS);
break;case SC.SMALL_CONTROL_SIZE:this.set("scrollerThickness",SC.MenuScrollerView.SMALL_SCROLLER_THICKNESS);
break;case SC.REGULAR_CONTROL_SIZE:this.set("scrollerThickness",SC.MenuScrollerView.REGULAR_SCROLLER_THICKNESS);
break;case SC.LARGE_CONTROL_SIZE:this.set("scrollerThickness",SC.MenuScrollerView.LARGE_SCROLLER_THICKNESS);
break;case SC.HUGE_CONTROL_SIZE:this.set("scrollerThickness",SC.MenuScrollerView.HUGE_SCROLLER_THICKNESS);
break}return arguments.callee.base.apply(this,arguments)},render:function(a,c){a.addClass("sc-vertical");
a.addClass(this.get("controlSize"));if(c){var b=this.get("scrollDown")?"arrowDown":"arrowUp";
a.push('<span class="scrollArrow '+b+'">&nbsp;</span>')}a.setClass("disabled",!this.get("isEnabled"))
},didCreateLayer:function(){},willDestroyLayer:function(){var a=this._sc_scroller_scrollDidChange;
SC.Event.remove(this.$(),"scroll",this,a)},mouseEntered:function(a){this.set("isMouseOver",YES);
this._invokeScrollOnMouseOver()},mouseExited:function(a){this.set("isMouseOver",NO)
},_sc_scroller_valueDidChange:function(){}.observes("value"),_sc_scroller_armScrollTimer:function(){if(!this._sc_scrollTimer){SC.RunLoop.begin();
var a=this._sc_scroller_scrollDidChange;this._sc_scrollTimer=this.invokeLater(a,50);
SC.RunLoop.end()}},_sc_scroller_scrollDidChange:function(){var b=Date.now(),d=this._sc_lastScroll,c=this.get("layer"),a=0;
if(d&&(b-d)<50){return this._sc_scroller_armScrollTimer()}this._sc_scrollTimer=null;
this._sc_lastScroll=b;SC.RunLoop.begin();if(!this.get("isEnabled")){return}this._sc_scrollValue=a=c.scrollTop;
this.set("value",a);SC.RunLoop.end()},_scrollMenu:function(){var b=this.get("value"),a;
if(this.get("scrollDown")){a=b+this.verticalLineScroll;if(a<=this.get("maximum")){this.set("value",a)
}}else{a=b-this.verticalLineScroll;if(a>=0){this.set("value",a)}else{if(b<=this.verticalLineScroll&&b>0){this.set("value",0)
}}}return YES},_invokeScrollOnMouseOver:function(){this._scrollMenu();if(this.get("isMouseOver")){this.invokeLater(this._invokeScrollOnMouseOver,100)
}}});SC.MenuScrollerView.REGULAR_SCROLLER_THICKNESS=18;SC.MenuScrollerView.TINY_SCROLLER_THICKNESS=10;
SC.MenuScrollerView.SMALL_SCROLLER_THICKNESS=14;SC.MenuScrollerView.LARGE_SCROLLER_THICKNESS=23;
SC.MenuScrollerView.HUGE_SCROLLER_THICKNESS=26;SC.MenuScrollView=SC.ScrollView.extend({classNames:["sc-menu-scroll-view"],maximumHorizontalScrollOffset:0,hasHorizontalScroller:NO,horizontalScrollerView:SC.MenuScrollerView,isHorizontalScrollerVisible:NO,canScrollHorizontal:NO,autohidesHorizontalScroller:NO,hasVerticalScroller:YES,verticalScrollerView:SC.MenuScrollerView,verticalScrollerView2:SC.MenuScrollerView,isVerticalScrollerVisible:YES,canScrollVertical:YES,autohidesVerticalScroller:YES,verticalScrollerBottom:0,controlSize:SC.REGULAR_CONTROL_SIZE,containerView:SC.ContainerView,tile:function(){var g,t,h,b,r,j,c;
g=this.get("hasVerticalScroller");t=g?this.get("verticalScrollerView"):null;h=g?this.get("verticalScrollerView2"):null;
b=t&&this.get("isVerticalScrollerVisible");r=this.get("containerView");j={left:0,top:0};
if(b){c=0;var a=t.get("scrollerThickness")||h.get("scrollerThickness");var k=this.get("contentView"),p,q=(k)?k.get("frame"):null,l=(q)?q.height:0,s=this.containerView.$()[0],m=this.get("verticalScrollOffset"),e={height:0,top:0,right:0,left:0},o={height:a,top:0,right:0,left:0},d={height:a,bottom:0,right:0,left:0},n={height:0,bottom:0,right:0,left:0};
if(s){c=s.offsetHeight}if(m===0){j.top=0;j.bottom=a;t.set("layout",e);h.set("layout",d)
}else{if(m>=(l-c-a)){j.top=a;j.bottom=0;t.set("layout",o);h.set("layout",n)}else{j.top=a;
j.bottom=a;t.set("layout",o);h.set("layout",d)}}}if(t){t.set("isVisible",b);h.set("isVisible",b)
}r.set("layout",j)},scrollerVisibilityDidChange:function(){this.tile()}.observes("isVerticalScrollerVisible","isHorizontalScrollerVisible","verticalScrollOffset"),createChildViews:function(){var c=[],b,a,d=this.get("controlSize");
if(SC.none(b=this.containerView)){b=SC.ContainerView}c.push(this.containerView=this.createChildView(b,{contentView:this.contentView}));
this.contentView=this.containerView.get("contentView");if((b=this.verticalScrollerView)&&(a=this.verticalScrollerView2)){if(this.get("hasVerticalScroller")){b=this.verticalScrollerView=this.createChildView(b,{layout:{top:0,left:0,right:0},controlSize:d,valueBinding:"*owner.verticalScrollOffset"});
c.push(b);a=this.verticalScrollerView2=this.createChildView(a,{scrollDown:YES,layout:{bottom:0,left:0,right:0},controlSize:d,valueBinding:"*owner.verticalScrollOffset"});
c.push(a)}else{this.verticalScrollerView=null;this.verticalScrollerView2=null}}this.childViews=c;
this.contentViewFrameDidChange();this.tile()},init:function(){arguments.callee.base.apply(this,arguments);
this._scroll_contentView=this.get("contentView");var a=this._scroll_contentView;if(a){a.addObserver("frame",this,this.contentViewFrameDidChange)
}if(this.get("isVisibleInWindow")){this._scsv_registerAutoscroll()}},_scsv_registerAutoscroll:function(){if(this.get("isVisibleInWindow")){SC.Drag.addScrollableView(this)
}else{SC.Drag.removeScrollableView(this)}}.observes("isVisibleInWindow"),contentViewFrameDidChange:function(){var c=this.get("contentView"),b,h=(c)?c.get("frame"):null,e=(h)?h.width:0,a=(h)?h.height:0,j=this.get("frame"),d,g;
this._scroll_contentWidth=e;this._scroll_contentHeight=a;if(this.get("hasVerticalScroller")&&(c=this.get("verticalScrollerView"))&&(b=this.get("verticalScrollerView2"))){a-=1;
if(this.get("autohidesVerticalScroller")){this.set("isVerticalScrollerVisible",a>j.height)
}a-=this.get("verticalScrollerBottom");d=0;g=this.containerView.$()[0];if(g){d=g.offsetHeight
}a=a-d;c.setIfChanged("maximum",a);b.setIfChanged("maximum",a)}},_scroll_horizontalScrollOffsetDidChange:function(){},_scroll_verticalScrollOffsetDidChange:function(){var b=this.get("verticalScrollOffset");
var a=this.get("contentView");if(a){a.adjust("top",0-b)}}.observes("verticalScrollOffset")});
SC.TO_LEFT="TOLEFT";SC.TO_RIGHT="TORIGHT";sc_require("views/workspace");SC.NavigationView=SC.WorkspaceView.extend({_views:null,_current:null,navigationContentView:SC.View.extend(),init:function(){arguments.callee.base.apply(this,arguments);
this._views=[]},createChildViews:function(){arguments.callee.base.apply(this,arguments);
var a=this.get("navigationContentView");if(a.isClass){a=this.createChildView(a)}this._defaultContent=this.navigationContentView=a;
this.contentView.appendChild(a)},changeNavigationContent:function(a){var c=null,b=null;
if(a){c=a.get("topToolbar");b=a.get("bottomToolbar")}if(c&&c.isClass){a.set("topToolbar",c=c.create())
}if(b&&b.isClass){a.set("bottomToolbar",b=b.create())}this.beginPropertyChanges();
this._current=a;this.set("navigationContentView",a?a:this._defaultContent);this.set("topToolbar",c);
this.set("bottomToolbar",b);this.endPropertyChanges()},push:function(a){this._currentDirection=this._current?SC.TO_LEFT:null;
if(this._current){this._views.push(this._current)}this.changeNavigationContent(a)
},pop:function(){this._currentDirection=SC.TO_RIGHT;var a=this._views.pop();this.changeNavigationContent(a)
},popToView:function(b){this._currentDirection=SC.TO_RIGHT;var d=this._views,a=d.length-1,c=d[a];
while(c&&c!==b){this._views.pop();a--;c=d[a]}this.changeNavigationContent(c)},topToolbarDidChange:function(){var b=this.activeTopToolbar,a=this.get("topToolbar");
if(b){if(this._currentDirection!==null){b.set("buildDirection",this._currentDirection);
this.buildOutChild(b)}else{this.removeChild(b)}}if(a){if(this._currentDirection!==null){a.set("buildDirection",this._currentDirection);
this.buildInChild(a)}else{this.appendChild(a)}}this.activeTopToolbar=a;this.invokeOnce("childDidChange")
}.observes("topToolbar"),bottomToolbarDidChange:function(){var b=this.activeBottomToolbar,a=this.get("bottomToolbar");
if(b){if(this._currentDirection!==null){b.set("buildDirection",this._currentDirection);
this.buildOutChild(b)}else{this.removeChild(b)}}if(a){if(this._currentDirection!==null){a.set("buildDirection",this._currentDirection);
this.buildInChild(a)}else{this.appendChild(a)}}this.activeBottomToolbar=a;this.invokeOnce("childDidChange")
}.observes("topToolbar"),contentViewDidChange:function(){var b=this.activeNavigationContentView,a=this.get("navigationContentView");
if(!a.isNavigationBuilder){a.mixin(SC.NavigationBuilder)}this._pendingBuildOut=b;
this._pendingBuildIn=a;this.activeNavigationContentView=a;this.invokeOnce("childDidChange")
}.observes("navigationContentView"),childDidChange:function(){var a=this._pendingBuildIn,b=this._pendingBuildOut;
if(b){if(this._currentDirection!==null){b.set("buildDirection",this._currentDirection);
this.contentView.buildOutChild(b)}else{this.contentView.removeChild(b)}}this._scws_tile();
if(a){if(this._currentDirection!==null){a.set("buildDirection",this._currentDirection);
this.contentView.buildInChild(a)}else{this.contentView.appendChild(a)}}}});sc_require("views/toolbar");
SC.NavigationBarView=SC.ToolbarView.extend(SC.Gesturable,{gestures:["swipeGesture"],swipeGesture:SC.SwipeGesture,init:function(){arguments.callee.base.apply(this,arguments);
if(!SC.Animatable){SC.Logger.error("NavigationBarView requires SC.Animatable. Please make your app or framework require the animation framework. CRASH.")
}},mixinAnimatable:function(){this.mixin(SC.Animatable);this.transitions=this.navigationTransitions
},navigationTransitions:{opacity:{duration:0.25,action:"didFinishTransition"}},style:{opacity:1},swipe:function(d,h,f){var e=(f===SC.SWIPE_LEFT)?"isSwipeLeft":"isSwipeRight",c=this.get("childViews"),g,b,a=c.get("length");
for(b=0;b<a;b++){g=c[b];if(g.get(e)){h.makeTouchResponder(g);h.end();return}}},resetBuild:function(){if(!this.isAnimatable){this.mixinAnimatable()
}},didFinishTransition:function(){if(this.isBuildingIn){this.buildInDidFinish()}else{if(this.isBuildingOut){this.buildOutDidFinish()
}}},preBuildIn:function(){this.disableAnimation();this.adjust("opacity",0).updateLayout();
this.enableAnimation();var c=this.get("childViews"),d,b,a=c.get("length");for(b=0;
b<a;b++){d=c[b];if(d.disableNavigationTransition){continue}if(!d._nv_mixedIn){this.mixinNavigationChild(d)
}d.disableAnimation();d.transform(this.buildDirection===SC.TO_LEFT?100:-100);d.enableAnimation()
}},buildIn:function(){this.preBuildIn();this.invokeLater("startBuildIn",10)},startBuildIn:function(){this.adjust("opacity",1);
var c=this.get("childViews"),d,b,a=c.get("length");for(b=0;b<a;b++){d=c[b];if(d.disableNavigationTransition){continue
}d.transform(0)}},buildOut:function(){this.adjust("opacity",0);var c=this.get("childViews"),d,b,a=c.get("length");
for(b=0;b<a;b++){d=c[b];if(d.disableNavigationTransition){continue}if(!d._nv_mixedIn){this.mixinNavigationChild(d)
}d.transform(this.buildDirection===SC.TO_LEFT?-100:100)}},mixinNavigationChild:function(a){if(a.isAnimatable){return
}a.mixin(SC.Animatable);a.mixin({transitions:{transform:{timing:SC.Animatable.TRANSITION_EASE_IN_OUT,duration:0.25}},naturalLayout:a.get("layout"),transform:function(b){if(SC.platform.supportsCSS3DTransforms){this.adjust("transform","translate3d("+b+"px,0px,0px)")
}else{this.adjust("transform","translate("+b+"px,0px)")}}});a._nv_mixedIn=YES}});
sc_require("views/button");SC.PopupButtonView=SC.ButtonView.extend({classNames:["sc-popup-button"],preferMatrix:null,menu:null,isActiveBinding:"*menu.isVisibleInWindow",action:function(a){var b=this.get("menu");
if(!b){SC.Logger.warn("SC.PopupButton - Unable to show menu because the menu property is set to %@.".fmt(b));
return NO}b.popup(this,this.get("preferMatrix"));return YES},mouseDown:function(a){if(!this.get("isEnabled")){return YES
}this._isMouseDown=YES;this._action();this.invokeLast(this._recordMouseDownTimestamp);
return YES},_recordMouseDownTimestamp:function(){this._menuRenderedTimestamp=new Date().getTime()
},mouseUp:function(b){var d=new Date().getTime(),c=this._menuRenderedTimestamp,e=this.get("menu"),f=SC.platform.touch,a;
if(e){a=e.getPath("rootMenu.targetMenuItem");if(a){if(!a.performAction()){e.remove()
}}else{if(!f&&(d-c>SC.ButtonView.CLICK_AND_HOLD_DELAY)){e.remove()}}}this._isMouseDown=NO;
arguments.callee.base.apply(this,arguments);return YES},mouseExited:function(a){return YES
},performKeyEquivalent:function(b,a){if(!this.get("isEnabled")){return NO}var c=this.get("menu");
return(!!c&&c.performKeyEquivalent(b,a))},acceptsFirstResponder:function(){if(!SC.SAFARI_FOCUS_BEHAVIOR){return this.get("isEnabled")
}else{return NO}}.property("isEnabled")});SC.ProgressView=SC.View.extend(SC.Control,{value:0.5,valueBindingDefault:SC.Binding.single().notEmpty(),minimum:0,minimumBindingDefault:SC.Binding.single().notEmpty(),contentMinimumKey:null,maximum:1,maximumBindingDefault:SC.Binding.single().notEmpty(),offsetRange:24,contentMaximumKey:null,isIndeterminate:NO,isIndeterminateBindingDefault:SC.Binding.bool(),isRunning:NO,isRunningBindingDefault:SC.Binding.bool(),animatedBackgroundMatrix:[],contentIsIndeterminateKey:null,classNames:"sc-progress-view",_backgroundOffset:0,_currentBackground:1,_nextBackground:1,init:function(){arguments.callee.base.apply(this,arguments);
this.animateProgressBar()},animateProgressBar:function(){if(this.get("isRunning")&&this.get("isVisibleInWindow")){this._animateProgressBar(500)
}}.observes("isRunning","isVisibleInWindow"),_animateProgressBar:function(a){if(a===0){a=1000/30
}if(this.get("isRunning")&&this.get("isVisibleInWindow")){this.displayDidChange();
this.invokeLater(this._animateProgressBar,a,600)}},displayProperties:"value minimum maximum isIndeterminate".w(),render:function(c,b){var o,e,l,d,h,f=this.get("isIndeterminate"),n=this.get("isRunning"),k=this.get("isEnabled"),m=this.get("offsetRange"),g=(f&&n)?(Math.floor(Date.now()/75)%m-m):0;
if(!k){l="0%"}else{if(f){l="120%"}else{l=(this.get("_percentageNumeric")*100)+"%"
}}var a={"sc-indeterminate":f,"sc-empty":(l<=0),"sc-complete":(l>=100)};if(b){var j=this._createClassNameString(a);
c.push('<div class="sc-inner ',j,'" style="width: ',l,";left: ",g,'px;">','<div class="sc-inner-head">',"</div>",'<div class="sc-inner-tail"></div></div>','<div class="sc-outer-head"></div>','<div class="sc-outer-tail"></div>')
}else{c.setClass(a);o=this.$(".sc-inner");e=this.get("animatedBackgroundMatrix");
d="width: "+l+"; ";d=d+"left: "+g+"px; ";if(e.length===3){o.css("backgroundPosition","0px -"+(e[0]+e[1]*this._currentBackground)+"px");
if(this._currentBackground===e[2]-1||this._currentBackground===0){this._nextBackground*=-1
}this._currentBackground+=this._nextBackground;d=d+"backgroundPosition: "+h+"px; ";
o.attr("style",d)}else{o.attr("style",d)}}},contentPropertyDidChange:function(c,a){var b=this.get("content");
this.beginPropertyChanges().updatePropertyFromContent("value",a,"contentValueKey",b).updatePropertyFromContent("minimum",a,"contentMinimumKey",b).updatePropertyFromContent("maximum",a,"contentMaximumKey",b).updatePropertyFromContent("isIndeterminate",a,"contentIsIndeterminateKey",b).endPropertyChanges()
},_percentageNumeric:function(){var b=this.get("minimum")||0,c=this.get("maximum")||1,a=this.get("value")||0;
a=(a-b)/(c-b);if(a>1){a=1}if(isNaN(a)){a=0}if(a<b){a=0}if(a>c){a=1}return a}.property("value").cacheable(),_createClassNameString:function(c){var b=[],a;
for(a in c){if(!c.hasOwnProperty(a)){continue}if(c[a]){b.push(a)}}return b.join(" ")
}});SC.RadioView=SC.View.extend(SC.Control,{classNames:["sc-radio-view"],value:null,layoutDirection:SC.LAYOUT_VERTICAL,escapeHTML:YES,items:[],itemTitleKey:null,itemValueKey:null,itemIsEnabledKey:null,itemIconKey:null,itemsDidChange:function(){if(this._items){this._items.removeObserver("[]",this,this.itemContentDidChange)
}this._items=this.get("items");if(this._items){this._items.addObserver("[]",this,this.itemContentDidChange)
}this.itemContentDidChange()}.observes("items"),itemContentDidChange:function(){this._renderAsFirstTime=YES;
this.notifyPropertyChange("_displayItems")},displayProperties:["value","_displayItems"],render:function(e,a){var q,p,m,c,r,d,l,h,f,g,n,b,k=this.get("_displayItems"),o=this.get("value"),j=SC.isArray(o);
e.addClass(this.get("layoutDirection"));if(j&&o.length<=0){o=o[0];j=NO}if(this._renderAsFirstTime){a=YES;
this._renderAsFirstTime=NO}if(a){e.attr("role","radiogroup");c=SC.guidFor(this);r=k.length;
for(p=0;p<r;p++){q=k[p];m=q[3];if(m){d=(m.indexOf("/")>=0)?m:SC.BLANK_IMAGE_URL;l=(d===m)?"":m;
m='<img src="'+d+'" class="icon '+l+'" alt="" />'}else{m=""}if(q){f=(j)?(o.indexOf(q[1])>=0):(o===q[1])
}else{f=NO}b=this._getSelectionStateClassNames(q,f,o,j,false);g=this.escapeHTML?SC.RenderContext.escapeHTML(q[0]):q[0];
e.push('<div class="sc-radio-button ',b,'" ','aria-checked="',f?"true":"false",'" ','role="radio"',' index="',p,'">','<span class="button"></span>','<span class="sc-button-label">',m,g,"</span></div>")
}}else{this.$(".sc-radio-button").forEach(function(s){s=this.$(s);p=parseInt(s.attr("index"),0);
q=(p>=0)?k[p]:null;if(q){f=(j)?(o.indexOf(q[1])>=0):(o===q[1])}else{f=NO}n=this._getSelectionStateClassNames(q,f,o,j,true);
s.attr("aria-checked",f?"true":"false");s.setClass(n);p=n=null},this)}},_displayItems:function(){var e=this.get("items"),b=this.get("localize"),p=this.get("itemTitleKey"),o=this.get("itemValueKey"),c=this.get("itemIsEnabledKey"),m=this.get("itemIconKey"),d=[],g=(e)?e.get("length"):0,n,h,l,k,a,j,f;
for(k=0;k<g;k++){n=e.objectAt(k);if(SC.typeOf(n)===SC.T_ARRAY){h=n[0];l=n[1]}else{if(n){if(p){h=n.get?n.get(p):n[p]
}else{h=(n.toString)?n.toString():null}if(o){l=n.get?n.get(o):n[o]}else{l=n}if(c){j=n.get?n.get(c):n[c]
}else{j=YES}if(m){f=n.get?n.get(m):n[m]}else{f=null}}else{h=l=f=null;j=NO}}if(b){h=h.loc()
}d.push([h,l,j,f])}return d}.property("items","itemTitleKey","itemValueKey","itemIsEnabledKey","localize","itemIconKey").cacheable(),_getSelectionStateClassNames:function(d,f,e,a,b){var h,c;
h={sel:(f&&!a),mixed:(f&&a),disabled:(!d[2])};if(b){return h}else{var g=[];for(c in h){if(!h.hasOwnProperty(c)){continue
}if(h[c]){g.push(c)}}return g.join(" ")}},mouseDown:function(a){if(!this.get("isEnabled")){return YES
}var b=a.target;while(b){if(b.className&&b.className.indexOf("sc-radio-button")>-1){break
}b=b.parentNode}if(!b){return NO}b=this.$(b);if(b.hasClass("disabled")){return YES
}b.addClass("active");this._activeRadioButton=b;a.allowDefault();return YES},mouseUp:function(a){if(!this.get("isEnabled")){return YES
}var f=this._activeRadioButton,e=a.target,b=this.get("_displayItems"),c,d;if(f){f.removeClass("active");
this._activeRadioButton=null}else{return YES}while(e){if(e.className&&e.className.indexOf("sc-radio-button")>-1){break
}e=e.parentNode}e=this.$(e);if(e[0]!==f[0]||e.hasClass("disabled")){return YES}c=parseInt(e.attr("index"),0);
d=b[c];this.set("value",d[1])},touchStart:function(a){return this.mouseDown(a)},touchEnd:function(a){return this.mouseUp(a)
}});SC.SceneView=SC.ContainerView.extend({scenes:["master","detail"],nowShowing:null,transitionDuration:200,_state:"NO_VIEW",replaceContent:function(a){if(a&&this._state===this.READY){this.animateScene(a)
}else{this.replaceScene(a)}return this},replaceScene:function(c){var d=this._targetView,e=this.STANDARD_LAYOUT,b=this.get("scenes"),a=b?b.indexOf(this.get("nowShowing")):-1;
this._targetView=c;this._targetIndex=a;if(this._timer){this._timer.invalidate()}this._leftView=this._rightView=this._start=this._end=null;
this._timer=null;this.removeAllChildren();if(d){d.set("layout",e)}if(c){c.set("layout",e)
}if(c){this.appendChild(c)}this._state=c?this.READY:this.NO_VIEW},animateScene:function(b){var c=this._targetView,f=this._targetIndex,a=this.get("scenes"),e=a?a.indexOf(this.get("nowShowing")):-1,d;
if(f<0||e<0||f===e){return this.replaceScene(b)}this._targetView=b;this._targetIndex=e;
if(e>f){this._leftView=c;this._rightView=b;this._target=-1}else{this._leftView=b;
this._rightView=c;this._target=1}this.removeAllChildren();if(c){this.appendChild(c)
}if(b){this.appendChild(b)}this._start=Date.now();this._end=this._start+this.get("transitionDuration");
this._state=this.ANIMATING;this.tick()},tick:function(){this._timer=null;var a=Date.now(),d=(a-this._start)/(this._end-this._start),g=this._target,f=this._leftView,b=this._rightView,c,e;
if(d<0){d=0}if(!this.get("isVisibleInWindow")||(d>=1)){return this.replaceScene(this._targetView)
}c=SC.clone(this.get("frame"));e=Math.floor(c.width*d);if(g>0){c.left=0-(c.width-e);
f.set("layout",c);c=SC.clone(c);c.left=e;b.set("layout",c)}else{c.left=0-e;f.set("layout",c);
c=SC.clone(c);c.left=c.width-e;b.set("layout",c)}this._timer=this.invokeLater(this.tick,20);
return this},NO_VIEW:"NO_VIEW",ANIMATING:"ANIMATING",READY:"READY",STANDARD_LAYOUT:{top:0,left:0,bottom:0,right:0}});
SC.SegmentedView=SC.View.extend(SC.Control,{classNames:["sc-segmented-view"],controlStyle:"square",value:null,isEnabled:YES,allowsEmptySelection:NO,allowsMultipleSelection:NO,localize:YES,align:SC.ALIGN_CENTER,layoutDirection:SC.LAYOUT_HORIZONTAL,items:[],itemTitleKey:null,itemValueKey:null,itemIsEnabledKey:null,itemIconKey:null,itemWidthKey:null,itemActionKey:null,itemTargetKey:null,itemKeyEquivalentKey:null,itemKeys:"itemTitleKey itemValueKey itemIsEnabledKey itemIconKey itemWidthKey itemToolTipKey".w(),displayItems:function(){var f=this.get("items"),c=this.get("localize"),l=null,d,j,e=[],g=f.get("length"),h,k,b=SC._segmented_fetchKeys,a=SC._segmented_fetchItem;
for(h=0;h<g;h++){k=f.objectAt(h);if(SC.none(k)){continue}d=SC.typeOf(k);if(d===SC.T_STRING){j={title:k.humanize().titleize(),value:k,isEnabled:YES,icon:null,width:null,toolTip:null,index:h}
}else{if(d!==SC.T_ARRAY){if(l===null){l=this.itemKeys.map(b,this)}j=l.map(a,k);j={title:j[0],value:j[1],isEnabled:j[2],icon:j[3],width:j[4],toolTip:j[5],index:h};
if(!l[0]&&k.toString){j.title=k.toString()}if(!l[1]){j.value=k}if(!l[2]){j.isEnabled=YES
}}}if(c&&j.title){j.title=j.title.loc()}if(c&&j.toolTip&&SC.typeOf(j.toolTip)===SC.T_STRING){j.toolTip=j.toolTip.loc()
}e[e.length]=j}return e}.property("items","itemTitleKey","itemValueKey","itemIsEnabledKey","localize","itemIconKey","itemWidthKey","itemToolTipKey"),itemsDidChange:function(){if(this._items){this._items.removeObserver("[]",this,this.itemContentDidChange)
}this._items=this.get("items");if(this._items){this._items.addObserver("[]",this,this.itemContentDidChange)
}this.itemContentDidChange()}.observes("items"),itemContentDidChange:function(){this.set("renderLikeFirstTime",YES);
this.notifyPropertyChange("displayItems")},init:function(){var a=SC.clone(this.get("classNames"));
a.push(this.get("controlStyle"));this.set("classNames",a);arguments.callee.base.apply(this,arguments);
this.itemsDidChange()},displayProperties:["displayItems","value","activeIndex"],createRenderer:function(a){return a.segmented()
},updateRenderer:function(g){var e=this.get("displayItems"),h=this.get("value"),d=SC.isArray(h),c=this.get("activeIndex"),f;
for(var b=0,a=e.length;b<a;b++){f=e[b];if(c==b){f.isActive=YES}else{f.isActive=NO
}if(d?h.indexOf(f.value):h===f.value){f.isSelected=YES}else{f.isSelected=NO}}g.attr({segments:e,align:this.get("align"),layoutDirection:this.get("layoutDirection")})
},displayItemIndexForEvent:function(a){if(this.renderer){return this.renderer.indexForEvent(a)
}},keyDown:function(d){var f,g,e,a,h,c;if(d.which===9){var b=d.shiftKey?this.get("previousValidKeyView"):this.get("nextValidKeyView");
if(b){b.becomeFirstResponder()}else{d.allowDefault()}return YES}if(!this.get("allowsMultipleSelection")&&!this.get("allowsEmptySelection")){e=this.get("displayItems");
a=e.length;h=this.get("value");c=SC.isArray(h);if(d.which===39||d.which===40){for(f=0;
f<a-1;f++){g=e[f];if(c?(h.indexOf(g.value)>=0):(g.value===h)){this.triggerItemAtIndex(f+1)
}}return YES}else{if(d.which===37||d.which===38){for(f=1;f<a;f++){g=e[f];if(c?(h.indexOf(g.value)>=0):(g.value===h)){this.triggerItemAtIndex(f-1)
}}return YES}}}return YES},mouseDown:function(b){if(!this.get("isEnabled")){return YES
}var a=this.displayItemIndexForEvent(b);if(a>=0){this._isMouseDown=YES;this.set("activeIndex",a)
}return YES},mouseUp:function(b){var a=this.displayItemIndexForEvent(b);if(this._isMouseDown&&(a>=0)){this.triggerItemAtIndex(a)
}this._isMouseDown=NO;this.set("activeIndex",-1);return YES},mouseMoved:function(b){if(this._isMouseDown){var a=this.displayItemIndexForEvent(b);
this.set("activeIndex",a)}return YES},mouseExited:function(b){if(this._isMouseDown){var a=this.displayItemIndexForEvent(b);
this.set("activeIndex",a)}return YES},mouseEntered:function(b){if(this._isMouseDown){var a=this.displayItemIndexForEvent(b);
this.set("activeIndex",-1)}return YES},touchStart:function(b){if(!this.get("isEnabled")){return YES
}var a=this.displayItemIndexForEvent(b);if(a>=0){this._isTouching=YES;this.set("activeIndex",a)
}return YES},touchEnd:function(b){var a=this.displayItemIndexForEvent(b);if(this._isTouching&&(a>=0)){this.triggerItemAtIndex(a)
}this._isTouching=NO;this.set("activeIndex",-1);return YES},touchesDragged:function(b,c){var d=this.touchIsInBoundary(b);
if(d){if(!this._isTouching){this._touchDidEnter(b)}var a=this.displayItemIndexForEvent(b);
this.set("activeIndex",a)}else{if(this._isTouching){this._touchDidExit(b)}}this._isTouching=d;
return YES},_touchDidExit:function(b){var a=this.displayItemIndexForEvent(b);this.set("activeIndex",-1);
return YES},_touchDidEnter:function(b){var a=this.displayItemIndexForEvent(b);this.set("activeIndex",a);
return YES},triggerItemAtIndex:function(l){var j=this.get("displayItems"),m=j.objectAt(l),b,k,c,g,f;
if(!m.isEnabled){return this}g=this.get("allowsEmptySelection");f=this.get("allowsMultipleSelection");
b=m.value;k=c=this.get("value");if(!SC.isArray(k)){k=[k]}if(!f){if(g&&(k.get("length")===1)&&(k.objectAt(0)===b)){k=[]
}else{k=[b]}}else{if(k.indexOf(b)>=0){if(k.get("length")>1||(k.objectAt(0)!==b)||g){k=k.without(b)
}}else{k=k.concat([b])}}switch(k.get("length")){case 0:k=null;break;case 1:k=k.objectAt(0);
break;default:break}var n=this.get("itemActionKey"),a=this.get("itemTargetKey"),e,h=null,d=this.getPath("pane.rootResponder");
if(n&&(m=this.get("items").objectAt(m.index))){e=m.get?m.get(n):m[n];if(a){h=m.get?m.get(a):m[a]
}if(d){d.sendAction(e,h,this,this.get("pane"))}}if(!e&&c!==undefined){this.set("value",k)
}e=this.get("action");if(e&&d){d.sendAction(e,this.get("target"),this,this.get("pane"))
}},acceptsFirstResponder:function(){if(!SC.SAFARI_FOCUS_BEHAVIOR){return this.get("isEnabled")
}else{return NO}}.property("isEnabled"),willBecomeKeyResponderFrom:function(a){if(!this._isFocused){this._isFocused=YES;
this.becomeFirstResponder();if(this.get("isVisibleInWindow")){this.$()[0].focus()
}}},willLoseKeyResponderTo:function(a){if(this._isFocused){this._isFocused=NO}}});
SC._segmented_fetchKeys=function(a){return this.get(a)};SC._segmented_fetchItem=function(a){if(!a){return null
}return this.get?this.get(a):this[a]};sc_require("views/button");SC.SelectView=SC.ButtonView.extend({items:[],itemsBindingDefault:SC.Binding.multiple(),itemTitleKey:null,itemSortKey:null,itemValueKey:null,itemIconKey:null,itemSeparatorKey:"separator",itemIsEnabledKey:"isEnabled",localize:YES,disableSort:YES,classNames:["sc-select-view"],menu:null,_itemList:[],_itemIdx:null,value:null,checkboxEnabled:YES,showCheckbox:YES,_defaultVal:null,_defaultTitle:null,_defaultIcon:null,controlStyle:"popup",displayProperties:["icon","value","controlSize","items"],preferMatrix:null,CUSTOM_MENU_ITEM_HEIGHT:20,isActiveBinding:"*menu.isVisibleInWindow",isDefaultPosition:NO,lastMenuWidth:null,exampleView:null,customViewMenuOffsetWidth:0,needsEllipsis:YES,menuPaneHeightPadding:0,menuItemPadding:35,supportFocusRing:YES,leftAlign:function(){switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:return SC.SelectView.TINY_OFFSET_X;
case SC.SMALL_CONTROL_SIZE:return SC.SelectView.SMALL_OFFSET_X;case SC.REGULAR_CONTROL_SIZE:return SC.SelectView.REGULAR_OFFSET_X;
case SC.LARGE_CONTROL_SIZE:return SC.SelectView.LARGE_OFFSET_X;case SC.HUGE_CONTROL_SIZE:return SC.SelectView.HUGE_OFFSET_X
}return 0}.property("controlSize"),sortObjects:function(b){if(!this.get("disableSort")){var a=this.get("itemSortKey")||this.get("itemTitleKey");
b=b.sort(function(d,c){if(a){d=d.get?d.get(a):d[a];c=c.get?c.get(a):c[a]}return(d<c)?-1:((d>c)?1:0)
})}return b},render:function(b,f){arguments.callee.base.apply(this,arguments);var c,l,q,s,v,g,e,u,h,o,a,n,d,k,w,r,p,t,m,j;
l=this.get("items");l=this.sortObjects(l);q=l.length;s=this.get("itemTitleKey");v=this.get("itemIconKey");
g=this.get("itemValueKey");e=this.get("itemSeparatorKey");u=this.get("showCheckbox");
j=this.get("isEnabledKey");h=this.get("value");o=this.get("localize");n=[];d=YES;
k=0;l.forEach(function(x){if(x){w=s?(x.get?x.get(s):x[s]):x.toString();w=o?w.loc():w;
r=v?(x.get?x.get(v):x[v]):null;if(SC.none(x[v])){r=null}p=(g)?(x.get?x.get(g):x[g]):x;
if(!SC.none(h)&&!SC.none(p)){if(h===p){this.set("title",w);this.set("icon",r)}}if(p===this.get("value")){this.set("_itemIdx",k);
d=!u?NO:YES}else{d=NO}m=(x.get?x.get(j):x[j]);if(NO!==m){m=YES}a=e?(x.get?x.get(e):x[e]):NO;
if(k===0){this._defaultVal=p;this._defaultTitle=w;this._defaultIcon=r}var y=SC.Object.create({separator:a,title:w,icon:r,value:p,isEnabled:m,checkbox:d,target:this,action:this.displaySelectedItem});
n.push(y)}k+=1;this.set("_itemList",n)},this);if(f){this.invokeLast(function(){var x=this.get("value");
if(SC.none(x)){this.set("value",this._defaultVal);this.set("title",this._defaultTitle);
this.set("icon",this._defaultIcon)}})}this.changeSelectPreferMatrix(this.get("_itemIdx"))
},_action:function(m){var h,a,j,k,r,o,y,e,x,c,n,s,p,v,f,g,l,b,w;h=this.$(".sc-button-label")[0];
var z=SC.SelectView.MENU_WIDTH_OFFSET;if(!this.get("isDefaultPosition")){switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:z+=SC.SelectView.TINY_POPUP_MENU_WIDTH_OFFSET;
break;case SC.SMALL_CONTROL_SIZE:z+=SC.SelectView.SMALL_POPUP_MENU_WIDTH_OFFSET;break;
case SC.REGULAR_CONTROL_SIZE:z+=SC.SelectView.REGULAR_POPUP_MENU_WIDTH_OFFSET;break;
case SC.LARGE_CONTROL_SIZE:z+=SC.SelectView.LARGE_POPUP_MENU_WIDTH_OFFSET;break;case SC.HUGE_CONTROL_SIZE:z+=SC.SelectView.HUGE_POPUP_MENU_WIDTH_OFFSET;
break}}a=this.get("layer").offsetWidth+z;a=this.get("layer").offsetWidth;j=h.scrollWidth;
k=this.get("lastMenuWidth");if(j){r=h.offsetWidth;if(j&&r){a=a+j-r}}if(!k||(a>k)){k=a
}o=this.get("_itemList");var t=this.get("customViewClassName");var q=this.get("customViewMenuOffsetWidth");
var d="sc-view sc-pane sc-panel sc-palette sc-picker sc-menu select-button sc-scroll-view sc-menu-scroll-view sc-container-view menuContainer sc-button-view sc-menu-item sc-regular-size";
d=t?(d+" "+t):d;SC.prepareStringMeasurement("",d);for(n=0,w=o.length;n<w;++n){x=o.objectAt(n);
y=SC.measureString(x.title).width;if(!e||(y>e)){e=y}}SC.teardownStringMeasurement();
k=(e+this.menuItemPadding>k)?e+this.menuItemPadding:k;var u=SC.RootResponder.responder.get("currentWindowSize").width;
if(k>u){k=(u-25)}this.set("lastMenuWidth",k);s=this.get("value");p=this.get("_itemList");
v=this.get("controlSize");f=this.get("menuPaneHeightPadding");g=this.get("exampleView");
l=g?g:SC.MenuItemView;b=SC.MenuPane.create({classNames:["select-button"],items:p,exampleView:l,isEnabled:YES,menuHeightPadding:f,preferType:SC.PICKER_MENU,itemHeightKey:"height",layout:{width:k},controlSize:v,itemWidth:k});
if(!b){return NO}b.popup(this,this.preferMatrix);this.set("menu",b);g=b.menuItemViewForContentIndex(this.get("_itemIdx"));
g.becomeFirstResponder();this.set("isActive",YES);return YES},displaySelectedItem:function(a){var b=a.get("selectedItem");
this.set("value",b.get("value"));this.set("title",b.get("title"));this.set("_itemIdx",b.get("contentIndex"))
},changeSelectPreferMatrix:function(){var c=0,g=0;switch(this.get("controlSize")){case SC.TINY_CONTROL_SIZE:c=SC.SelectView.TINY_OFFSET_Y;
g=SC.MenuPane.TINY_MENU_ITEM_HEIGHT;break;case SC.SMALL_CONTROL_SIZE:c=SC.SelectView.SMALL_OFFSET_Y;
g=SC.MenuPane.SMALL_MENU_ITEM_HEIGHT;break;case SC.REGULAR_CONTROL_SIZE:c=SC.SelectView.REGULAR_OFFSET_Y;
g=SC.MenuPane.REGULAR_MENU_ITEM_HEIGHT;break;case SC.LARGE_CONTROL_SIZE:c=SC.SelectView.LARGE_OFFSET_Y;
g=SC.MenuPane.LARGE_MENU_ITEM_HEIGHT;break;case SC.HUGE_CONTROL_SIZE:c=SC.SelectView.HUGE_OFFSET_Y;
g=SC.MenuPane.HUGE_MENU_ITEM_HEIGHT;break}var e=c,b=this.get("_itemIdx"),a=this.get("leftAlign"),f,d;
if(this.get("isDefaultPosition")){f=[1,0,3];this.set("preferMatrix",f)}else{if(b){e=b*g+c
}d=[a,-e,2];this.set("preferMatrix",d)}},mouseDown:function(a){if(!this.get("isEnabled")){return YES
}this.set("isActive",YES);this._isMouseDown=YES;this.becomeFirstResponder();this._action();
return YES},mouseUp:function(b){var d=this.get("menu"),a,c;if(d){a=d.getPath("rootMenu.targetMenuItem");
if(a&&d.get("mouseHasEntered")){if(!a.performAction()){d.remove()}}else{if(b.timeStamp-this._mouseDownTimestamp>400){d.remove()
}}}this._isMouseDown=NO;this.set("isActive",NO);return YES},mouseExited:function(){return YES
},keyDown:function(a){if(this.interpretKeyEvents(a)){return YES}else{arguments.callee.base.apply(this,arguments)
}},interpretKeyEvents:function(a){if(a){if((a.keyCode===38||a.keyCode===40)){this._action()
}else{if(a.keyCode===27){this.resignFirstResponder()}}}return arguments.callee.base.apply(this,arguments)
},acceptsFirstResponder:function(){return this.get("isEnabled")}.property("isEnabled"),_button_isSelectedDidChange:function(){}.observes("isSelected")});
SC.SelectView.TINY_OFFSET_X=0;SC.SelectView.TINY_OFFSET_Y=0;SC.SelectView.TINY_POPUP_MENU_WIDTH_OFFSET=0;
SC.SelectView.SMALL_OFFSET_X=-18;SC.SelectView.SMALL_OFFSET_Y=3;SC.SelectView.SMALL_POPUP_MENU_WIDTH_OFFSET=7;
SC.SelectView.REGULAR_OFFSET_X=-17;SC.SelectView.REGULAR_OFFSET_Y=3;SC.SelectView.REGULAR_POPUP_MENU_WIDTH_OFFSET=4;
SC.SelectView.LARGE_OFFSET_X=-17;SC.SelectView.LARGE_OFFSET_Y=6;SC.SelectView.LARGE_POPUP_MENU_WIDTH_OFFSET=3;
SC.SelectView.HUGE_OFFSET_X=0;SC.SelectView.HUGE_OFFSET_Y=0;SC.SelectView.HUGE_POPUP_MENU_WIDTH_OFFSET=0;
SC.SelectView.MENU_WIDTH_OFFSET=-2;SC.SelectFieldView=SC.FieldView.extend({tagName:"select",classNames:["sc-select-field-view"],objects:[],objectsBindingDefault:SC.Binding.multiple(),nameKey:null,sortKey:null,valueKey:null,emptyName:null,localize:false,cpDidChange:YES,disableSort:NO,validateMenuItem:function(b,a){return true
},sortObjects:function(b){if(!this.get("disableSort")){var a=this.get("sortKey")||this.get("nameKey");
b=b.sortProperty(a)}return b},render:function(c,a){if(this.get("cpDidChange")){this.set("cpDidChange",NO);
var f=this.get("nameKey");var k=this.get("valueKey");var j=this.get("objects");var b=this.get("value");
var d,g;var h=this.get("localize");if(!k&&b){b=SC.guidFor(b)}if((b===null)||(b==="")){b="***"
}if(j){j=this.sortObjects(j);if(!a){g=this.$input()[0];g.innerHTML=""}var e=this.get("emptyName");
if(e){if(h){e=e.loc()}if(a){c.push('<option value="***">'+e+"</option>",'<option disabled="disabled"></option>')
}else{d=document.createElement("option");d.value="***";d.innerHTML=e;g.appendChild(d);
d=document.createElement("option");d.disabled="disabled";g.appendChild(d)}}j.forEach(function(o,n){if(o){var m=f?(o.get?o.get(f):o[f]):o.toString();
if(h){m=m.loc()}var p=(k)?(o.get?o.get(k):o[k]):o;if(!e&&n===0&&b==="***"){this.set("value",p)
}if(p){p=(SC.guidFor(p))?SC.guidFor(p):p.toString()}var l=(this.validateMenuItem&&this.validateMenuItem(p,m))?"":'disabled="disabled" ';
if(a){c.push("<option "+l+'value="'+p+'">'+m+"</option>")}else{d=document.createElement("option");
d.value=p;d.innerHTML=m;if(l.length>0){d.disable="disabled"}g.appendChild(d)}}else{if(a){c.push('<option disabled="disabled"></option>')
}else{d=document.createElement("option");d.disabled="disabled";g.appendChild(d)}}},this);
this.setFieldValue(b)}else{this.set("value",null)}}},displayProperties:["objects","nameKey","valueKey"],_objectsObserver:function(){this.set("cpDidChange",YES)
}.observes("objects"),_nameKeyObserver:function(){this.set("cpDidChange",YES)}.observes("nameKey"),_valueKeyObserver:function(){this.set("cpDidChange",YES)
}.observes("valueKey"),$input:function(){return this.$()},mouseDown:function(a){if(!this.get("isEnabled")){a.stop();
return YES}else{return arguments.callee.base.apply(this,arguments)}},getFieldValue:function(){var f=arguments.callee.base.apply(this,arguments);
var c=this.get("valueKey");var e=this.get("objects");var d,a;if(f=="***"){f=null}else{if(f&&e){var g=(SC.typeOf(e.length)===SC.T_FUNCTION)?e.length():e.length;
d=null;while(!d&&(--g>=0)){a=e.objectAt?e.objectAt(g):e[g];if(!a){continue}if(c){a=(a.get)?a.get(c):a[c]
}var b=(a)?(SC.guidFor(a)?SC.guidFor(a):a.toString()):null;if(f==b){d=a}}}}return(c||d)?d:f
},setFieldValue:function(a){if(SC.none(a)){a="***"}else{a=((a)?(SC.guidFor(a)?SC.guidFor(a):a.toString()):null)
}this.$input().val(a);return this},fieldDidFocus:function(){var a=this.get("isFocused");
if(!a){this.set("isFocused",true)}},fieldDidBlur:function(){var a=this.get("isFocused");
if(a){this.set("isFocused",false)}},_isFocusedObserver:function(){this.$().setClass("focus",this.get("isFocused"))
}.observes("isFocused"),didCreateLayer:function(){var a=this.$input();if(this.get("isEnabled")===false){this.$()[0].disabled=true
}SC.Event.add(a,"blur",this,this.fieldDidBlur);SC.Event.add(a,"focus",this,this.fieldDidFocus);
return arguments.callee.base.apply(this,arguments)},willDestroyLayer:function(){var a=this.$input();
SC.Event.remove(a,"focus",this,this.fieldDidFocus);SC.Event.remove(a,"blur",this,this.fieldDidBlur);
return arguments.callee.base.apply(this,arguments)}});SC.SliderView=SC.View.extend(SC.Control,{classNames:"sc-slider-view",value:0.5,valueBindingDefault:SC.Binding.single().notEmpty(),minimum:0,minimumBindingDefault:SC.Binding.single().notEmpty(),contentMinimumKey:null,maximum:1,maximumBindingDefault:SC.Binding.single().notEmpty(),contentMaximumKey:null,step:0.1,displayProperties:"value minimum maximum".w(),createRenderer:function(a){return a.slider()
},updateRenderer:function(d){var b=this.get("minimum"),a=this.get("maximum"),e=this.get("value"),c=this.get("step");
e=Math.min(Math.max(e,b),a);if(!SC.none(c)&&c!==0){e=Math.round(e/c)*c}if(e!==0){e=Math.floor((e-b)/(a-b)*100)
}d.attr({value:e})},_isMouseDown:NO,mouseDown:function(a){if(!this.get("isEnabled")){return YES
}this.set("isActive",YES);this._isMouseDown=YES;return this._triggerHandle(a,YES)
},mouseDragged:function(a){return this._isMouseDown?this._triggerHandle(a):YES},mouseUp:function(a){if(this._isMouseDown){this.set("isActive",NO)
}var b=this._isMouseDown?this._triggerHandle(a):YES;this._isMouseDown=NO;return b
},mouseWheel:function(b){if(!this.get("isEnabled")){return YES}var d=this.get("minimum"),a=this.get("maximum"),c=this.get("value")+((b.wheelDeltaX+b.wheelDeltaY)*0.01),e=this.get("step"),f=Math.round(c/e)*e;
if(c<d){this.setIfChanged("value",d)}else{if(c>a){this.setIfChanged("value",a)}else{this.setIfChanged("value",c)
}}return YES},touchStart:function(a){return this.mouseDown(a)},touchEnd:function(a){return this.mouseUp(a)
},touchesDragged:function(a){return this.mouseDragged(a)},_triggerHandle:function(j,e){var a=this.get("frame").width,c=this.get("minimum"),f=this.get("maximum"),b=this.get("step"),h=this.get("value"),d;
if(e){d=this.convertFrameFromView({x:j.pageX}).x;this._evtDiff=j.pageX-d}else{d=j.pageX-this._evtDiff
}d=Math.max(0,Math.min(d/a,1));if(e){var g=this.get("value");g=(g-c)/(f-c);if(Math.abs(g*a-d*a)<16){this._offset=g-d
}else{this._offset=0}}d=d+this._offset;d=c+((f-c)*d);if(b!==0){d=Math.round(d/b)*b
}if(Math.abs(h-d)>=0.01){this.set("value",d)}return YES},acceptsFirstResponder:function(){if(!SC.SAFARI_FOCUS_BEHAVIOR){return this.get("isEnabled")
}else{return NO}}.property("isEnabled"),willBecomeKeyResponderFrom:function(a){if(!this._isFocused){this._isFocused=YES;
this.becomeFirstResponder();if(this.get("isVisibleInWindow")){if(this.renderer){this.renderer.focus()
}}}},willLoseKeyResponderTo:function(a){if(this._isFocused){this._isFocused=NO}},keyDown:function(c){if(c.which===9){var b=c.shiftKey?this.get("previousValidKeyView"):this.get("nextValidKeyView");
if(b){b.becomeFirstResponder()}else{c.allowDefault()}return YES}if(c.which===37||c.which===38||c.which===39||c.which===40){var e=this.get("minimum"),a=this.get("maximum"),f=this.get("step"),d=a-e,h=0,g;
if(c.which===37||c.which===38){if(f===0){if(d<100){h=this.get("value")-1}else{g=Math.abs(d/100);
if(g<2){g=2}h=this.get("value")-Math.abs(d/100)}}else{h=this.get("value")-f}}if(c.which===39||c.which===40){if(f===0){if(d<100){h=this.get("value")+2
}else{g=Math.abs(d/100);if(g<2){g=2}h=this.get("value")+g}}else{h=this.get("value")+f
}}if(h>=e&&h<=a){this.set("value",h)}}SC.RunLoop.begin().end();return YES},contentPropertyDidChange:function(c,a){var b=this.get("content");
this.beginPropertyChanges().updatePropertyFromContent("value",a,"contentValueKey",b).updatePropertyFromContent("minimum",a,"contentMinimumKey",b).updatePropertyFromContent("maximum",a,"contentMaximumKey",b).updatePropertyFromContent("isIndeterminate",a,"contentIsIndeterminateKey",b).endPropertyChanges()
}});sc_require("mixins/collection_group");sc_require("views/disclosure");SC.SourceListGroupView=SC.View.extend(SC.Control,SC.CollectionGroup,{classNames:["sc-source-list-group"],content:null,isGroupVisible:YES,hasGroupTitle:YES,groupTitleKey:null,groupVisibleKey:null,render:function(a,b){a.push('<div role="button" class="sc-source-list-label sc-disclosure-view sc-button-view button disclosure no-disclosure">','<img src="'+SC.BLANK_IMAGE_URL+'" class="button" />','<span class="label"></span></div>')
},createChildViews:function(){},contentPropertyDidChange:function(f,c){var e=this.get("content");
var h=this.outlet("labelView");if(e===null){h.setIfChanged("isVisible",NO);this.setIfChanged("hasGroupTitle",NO);
return}else{h.setIfChanged("isVisible",YES);this.setIfChanged("hasGroupTitle",YES)
}var b=this.getDelegateProperty("groupTitleKey",this.displayDelegate);if((c=="*")||(b&&(c==b))){var g=(e&&e.get&&b)?e.get(b):e;
if(g!=this._title){this._title=g;if(g){g=g.capitalize()}h.set("title",g)}}var d=this.getDelegateProperty("groupVisibleKey",this.displayDelegate);
if((c=="*")||(d&&(c==d))){if(d){h.removeClassName("no-disclosure");var a=(e&&e.get)?!!e.get(d):YES;
if(a!=this.get("isGroupVisible")){this.set("isGroupVisible",a);h.set("value",a)}}else{h.addClassName("no-disclosure")
}}},disclosureValueDidChange:function(c){if(c==this.get("isGroupVisible")){return
}var b=this.get("content");var a=this.getDelegateProperty("groupVisibleKey",this.displayDelegate);
if(b&&b.set&&a){b.set(a,c)}this.set("isGroupVisible",c);if(this.owner&&this.owner.updateChildren){this.owner.updateChildren(true)
}},labelView:SC.DisclosureView.extend({value:YES,_valueObserver:function(){if(this.owner){this.owner.disclosureValueDidChange(this.get("value"))
}}.observes("value")})});sc_require("views/list");sc_require("views/source_list_group");
SC.BENCHMARK_SOURCE_LIST_VIEW=YES;SC.SourceListView=SC.ListView.extend({classNames:["sc-source-list"],rowHeight:32,selectOnMouseDown:NO,actOnSelect:YES});
sc_require("views/split");SC.SplitDividerView=SC.View.extend({classNames:["sc-split-divider-view"],prepareContext:function(a,c){var b=this.get("splitView");
if(b){this.set("cursor",b.get("thumbViewCursor"))}return arguments.callee.base.apply(this,arguments)
},mouseDown:function(a){var b=this.get("splitView");return(b)?b.mouseDownInThumbView(a,this):arguments.callee.base.apply(this,arguments)
},doubleClick:function(a){var b=this.get("splitView");return(b)?b.doubleClickInThumbView(a,this):arguments.callee.base.apply(this,arguments)
},touchStart:function(a){return this.mouseDown(a)}});sc_require("views/split_divider");
SC.RESIZE_BOTH="resize-both";SC.RESIZE_TOP_LEFT="resize-top-left";SC.RESIZE_BOTTOM_RIGHT="resize-bottom-right";
SC.SplitView=SC.View.extend({classNames:["sc-split-view"],displayProperties:["layoutDirection"],delegate:null,layoutDirection:SC.LAYOUT_HORIZONTAL,canCollapseViews:YES,autoresizeBehavior:SC.RESIZE_BOTTOM_RIGHT,defaultThickness:0.5,topLeftMinThickness:null,topLeftMaxThickness:null,bottomRightMinThickness:null,bottomRightMaxThickness:null,dividerThickness:null,isSplitView:YES,topLeftView:SC.View,dividerView:SC.SplitDividerView,bottomRightView:SC.View,topLeftThickness:function(){var a=this.get("topLeftView");
return a?this.thicknessForView(a):0}.property("topLeftView").cacheable(),bottomRightThickness:function(){var a=this.get("bottomRightView");
return a?this.thicknessForView(a):0}.property("bottomRightView").cacheable(),thumbViewCursor:null,canCollapseView:function(a){return this.invokeDelegateMethod(this.delegate,"splitViewCanCollapse",this,a)
},thicknessForView:function(a){var c=this.get("layoutDirection"),b=a.get("frame");
return(c===SC.LAYOUT_HORIZONTAL)?b.width:b.height},createChildViews:function(){var e=[],c=["topLeftView","dividerView","bottomRightView"],b=c.length,a,d;
for(d=0;d<b;++d){if(a=this.get(c[d])){a=this[c[d]]=this.createChildView(a,{layoutView:this,rootElementPath:[d]});
e.push(a)}}this.set("childViews",e);return this},updateChildLayout:function(){var b=this.get("topLeftView"),c=this.get("bottomRightView"),j=this.get("dividerView"),e=this.get("autoresizeBehavior"),k=this.get("layoutDirection"),a=this.get("frame"),d=this._desiredTopLeftThickness,l=this.get("dividerThickness"),h=(k===SC.LAYOUT_HORIZONTAL)?a.width:a.height,m=h-l-d,g,f;
l=(!SC.none(l))?l:7;f=b.get("isCollapsed")||NO;b.setIfChanged("isVisible",!f);g=SC.clone(b.get("layout"));
if(k===SC.LAYOUT_HORIZONTAL){g.top=0;g.left=0;g.bottom=0;switch(e){case SC.RESIZE_BOTH:throw"SC.RESIZE_BOTH is currently unsupported.";
case SC.RESIZE_TOP_LEFT:g.right=m+l;delete g.width;break;case SC.RESIZE_BOTTOM_RIGHT:delete g.right;
delete g.height;g.width=d;break}}else{g.top=0;g.left=0;g.right=0;switch(e){case SC.RESIZE_BOTH:throw"SC.RESIZE_BOTH is currently unsupported.";
case SC.RESIZE_TOP_LEFT:g.bottom=m+l;delete g.height;break;case SC.RESIZE_BOTTOM_RIGHT:g.height=d;
delete g.bottom;delete g.width;break}}b.set("layout",g);if(j){g=SC.clone(j.get("layout"));
if(k===SC.LAYOUT_HORIZONTAL){g.width=l;g.top=0;g.bottom=0;delete g.height;switch(e){case SC.RESIZE_BOTH:throw"SC.RESIZE_BOTH is currently unsupported.";
case SC.RESIZE_TOP_LEFT:g.right=m;delete g.left;delete g.centerX;delete g.centerY;
break;case SC.RESIZE_BOTTOM_RIGHT:g.left=d;delete g.right;delete g.centerX;delete g.centerY;
break}}else{g.height=l;g.left=0;g.right=0;delete g.width;switch(e){case SC.RESIZE_BOTH:throw"SC.RESIZE_BOTH is currently unsupported.";
case SC.RESIZE_TOP_LEFT:g.bottom=m;delete g.top;delete g.centerX;delete g.centerY;
break;case SC.RESIZE_BOTTOM_RIGHT:g.top=d;delete g.bottom;delete g.centerX;delete g.centerY;
break}}j.set("layout",g)}f=c.get("isCollapsed")||NO;c.setIfChanged("isVisible",!f);
g=SC.clone(c.get("layout"));if(k===SC.LAYOUT_HORIZONTAL){g.top=0;g.bottom=0;g.right=0;
switch(e){case SC.RESIZE_BOTH:throw"SC.RESIZE_BOTH is currently unsupported.";case SC.RESIZE_BOTTOM_RIGHT:g.left=d+l;
delete g.width;break;case SC.RESIZE_TOP_LEFT:g.width=m;delete g.left;break}}else{g.left=0;
g.right=0;g.bottom=0;switch(e){case SC.RESIZE_BOTH:throw"SC.RESIZE_BOTH is currently unsupported.";
case SC.RESIZE_BOTTOM_RIGHT:g.top=d+l;delete g.height;break;case SC.RESIZE_TOP_LEFT:delete g.top;
g.height=m;break}}c.set("layout",g);this.notifyPropertyChange("topLeftThickness").notifyPropertyChange("bottomRightThickness")
},renderLayout:function(b,a){if(a||this._recalculateDivider){var f=this.get("layoutDirection"),c=this.get("frame"),e=this.$(),j=this.get("defaultThickness"),d=this.get("autoresizeBehavior"),h=this.get("dividerThickness"),g;
if(!this.get("thumbViewCursor")){this.set("thumbViewCursor",SC.Cursor.create())}h=!SC.none(h)?h:7;
if(this._recalculateDivider===undefined&&j<1){this._recalculateDivider=YES}else{if(this._recalculateDivider){this._recalculateDivider=NO
}}if(e[0]){g=(f===SC.LAYOUT_HORIZONTAL)?e[0].offsetWidth:e[0].offsetHeight}else{g=(f===SC.LAYOUT_HORIZONTAL)?c.width:c.height
}if(SC.none(j)||(j>0&&j<1)){j=Math.floor((g-(h))*(j||0.5))}if(d===SC.RESIZE_BOTTOM_RIGHT){this._desiredTopLeftThickness=j
}else{this._desiredTopLeftThickness=g-h-j}this._topLeftView=this.get("topLeftView");
this._bottomRightView=this.get("bottomRightView");this._topLeftViewThickness=this.thicknessForView(this.get("topLeftView"));
this._bottomRightThickness=this.thicknessForView(this.get("bottomRightView"));this._dividerThickness=this.get("dividerThickness");
this._layoutDirection=this.get("layoutDirection");this._updateTopLeftThickness(0);
this._setCursorStyle();this.updateChildLayout()}arguments.callee.base.apply(this,arguments)
},render:function(a,b){arguments.callee.base.apply(this,arguments);if(this._inLiveResize){this._setCursorStyle()
}if(this.get("layoutDirection")===SC.LAYOUT_HORIZONTAL){a.addClass("sc-horizontal")
}else{a.addClass("sc-vertical")}},mouseDownInThumbView:function(a,c){var b=this.getPath("pane.rootResponder");
if(!b){return NO}b.dragDidStart(this);this._mouseDownX=a.pageX;this._mouseDownY=a.pageY;
this._thumbView=c;this._topLeftView=this.get("topLeftView");this._bottomRightView=this.get("bottomRightView");
this._topLeftViewThickness=this.thicknessForView(this.get("topLeftView"));this._bottomRightThickness=this.thicknessForView(this.get("bottomRightView"));
this._dividerThickness=this.get("dividerThickness");this._layoutDirection=this.get("layoutDirection");
this.beginLiveResize();this._inLiveResize=YES;return YES},mouseDragged:function(a){var b=(this._layoutDirection===SC.LAYOUT_HORIZONTAL)?a.pageX-this._mouseDownX:a.pageY-this._mouseDownY;
this._updateTopLeftThickness(b);return YES},mouseUp:function(a){if(this._inLiveResize===YES){this._thumbView=null;
this._inLiveResize=NO;this.endLiveResize();return YES}return NO},touchesDragged:function(a){return this.mouseDragged(a)
},touchEnd:function(a){return this.mouseUp(a)},doubleClickInThumbView:function(b,d){var a=this._topLeftView,c=a.get("isCollapsed")||NO;
if(!c&&!this.canCollapseView(a)){a=this._bottomRightView;c=a.get("isCollapsed")||NO;
if(!c&&!this.canCollapseView(a)){return NO}}if(!c){this._uncollapsedThickness=this.thicknessForView(a);
if(a===this._topLeftView){this._updateTopLeftThickness(this.topLeftThickness()*-1)
}else{this._updateBottomRightThickness(this.bottomRightThickness()*-1)}if(!a.get("isCollapsed")){this._uncollapsedThickness=null
}}else{if(a===this._topLeftView){this._updateTopLeftThickness(this._uncollapsedThickness)
}else{this._updateBottomRightThickness(this._uncollapsedThickness)}a._uncollapsedThickness=null
}this._setCursorStyle();return true},_updateTopLeftThickness:function(e){var a=this._topLeftView,c=this._bottomRightView,f=this.thicknessForView(a),g=this.thicknessForView(c),k=this._dividerThickness,j=0,b=this._topLeftViewThickness+e,n=this._layoutDirection,p=this.canCollapseView(c),m=b,l=this.get("topLeftMaxThickness"),d=this.get("topLeftMinThickness"),o,h,q;
if(!a.get("isCollapsed")){j+=f}if(!c.get("isCollapsed")){j+=g}if(!SC.none(l)){m=Math.min(l,m)
}if(!SC.none(d)){m=Math.max(d,m)}l=this.get("bottomRightMaxThickness");d=this.get("bottomRightMinThickness");
o=j-m;if(!SC.none(l)){o=Math.min(l,o)}if(!SC.none(d)){o=Math.max(d,o)}m=j-o;m=this.invokeDelegateMethod(this.delegate,"splitViewConstrainThickness",this,a,m);
m=Math.min(m,j);m=Math.max(0,m);h=a.get("collapseAtThickness");if(!h){h=0}q=c.get("collapseAtThickness");
q=SC.none(q)?j:(j-q);if((b<=h)&&this.canCollapseView(a)){l=c.get("maxThickness");
if(!l||(k+j)<=l){m=0}}else{if(b>=q&&this.canCollapseView(c)){l=a.get("maxThickness");
if(!l||(k+j)<=l){m=j}}}if(m!=this.thicknessForView(a)){this._desiredTopLeftThickness=m;
a.set("isCollapsed",m===0);c.set("isCollapsed",m>=j);this.updateChildLayout();this.displayDidChange()
}},_updateBottomRightThickness:function(e){var a=this._topLeftView,c=this._bottomRightView,f=this.thicknessForView(a),g=this.thicknessForView(c),k=this._dividerThickness,j=0,b=this._topLeftViewThickness+e,n=this._layoutDirection,p=this.canCollapseView(c),m=b,l=this.get("topLeftMaxThickness"),d=this.get("topLeftMinThickness"),o,h,q;
if(!a.get("isCollapsed")){j+=f}if(!c.get("isCollapsed")){j+=g}if(!SC.none(l)){m=Math.min(l,m)
}if(!SC.none(d)){m=Math.max(d,m)}l=this.get("bottomRightMaxThickness");d=this.get("bottomRightMinThickness");
o=j-m;if(!SC.none(l)){o=Math.min(l,o)}if(!SC.none(d)){o=Math.max(d,o)}m=j-o;m=this.invokeDelegateMethod(this.delegate,"splitViewConstrainThickness",this,a,m);
m=Math.min(m,j);m=Math.max(0,m);h=a.get("collapseAtThickness");if(!h){h=0}q=c.get("collapseAtThickness");
q=SC.none(q)?j:(j-q);if((b<=h)&&this.canCollapseView(a)){l=c.get("maxThickness");
if(!l||(k+j)<=l){m=0}}else{if(b>=q&&this.canCollapseView(c)){l=a.get("maxThickness");
if(!l||(k+j)<=l){m=j}}}if(m!=this.thicknessForView(a)){this._desiredTopLeftThickness=m;
a.set("isCollapsed",m===0);c.set("isCollapsed",m>=j);this.updateChildLayout();this.displayDidChange()
}},_setCursorStyle:function(){var d=this._topLeftView,e=this._bottomRightView,a=this.get("thumbViewCursor"),b=this.thicknessForView(d),c=this.thicknessForView(e);
this._layoutDirection=this.get("layoutDirection");if(d.get("isCollapsed")||b===this.get("topLeftMinThickness")||c==this.get("bottomRightMaxThickness")){a.set("cursorStyle",this._layoutDirection===SC.LAYOUT_HORIZONTAL?"e-resize":"s-resize")
}else{if(e.get("isCollapsed")||b===this.get("topLeftMaxThickness")||c==this.get("bottomRightMinThickness")){a.set("cursorStyle",this._layoutDirection===SC.LAYOUT_HORIZONTAL?"w-resize":"n-resize")
}else{if(SC.browser.msie){a.set("cursorStyle",this._layoutDirection===SC.LAYOUT_HORIZONTAL?"e-resize":"n-resize")
}else{a.set("cursorStyle",this._layoutDirection===SC.LAYOUT_HORIZONTAL?"ew-resize":"ns-resize")
}}}}.observes("layoutDirection"),splitViewCanCollapse:function(b,a){if(b.get("canCollapseViews")===NO){return NO
}if(a.get("canCollapse")===NO){return NO}return YES},splitViewConstrainThickness:function(c,a,b){return b
},_forceSplitCalculation:function(){this.updateLayout()}.observes("*pane.isPaneAttached"),viewDidResize:function(){arguments.callee.base.apply(this,arguments);
this.notifyPropertyChange("topLeftThickness").notifyPropertyChange("bottomRightThickness")
}.observes("layout")});sc_require("views/collection");SC.StackedView=SC.CollectionView.extend({classNames:["sc-stacked-view"],layout:{top:0,left:0,right:0,height:1},computeNowShowing:function(a){return this.get("allContentIndexes")
},updateHeight:function(a){if(a){this._updateHeight()}else{this.invokeLast(this._updateHeight)
}return this},_updateHeight:function(){var e=this.get("childViews"),b=e.get("length"),c,d,a;
if(b===0){a=1}else{c=e.objectAt(b-1);d=c?c.get("layer"):null;a=d?(d.offsetTop+d.offsetHeight):1;
d=null}this.adjust("height",a)},didReload:function(a){return this.updateHeight()},didCreateLayer:function(){return this.updateHeight()
}});SC.StaticContentView=SC.View.extend(SC.StaticLayout,{classNames:["sc-static-content-view"],displayProperties:["content"],content:null,contentLayoutDidChange:function(){this._viewFrameDidChange()
},useStaticLayout:YES,frame:function(){var a=this.get("layer"),b;if(!a){return{x:0,y:0,width:0,height:0}
}if(a.getBoundingClientRect){b=a.getBoundingClientRect();return{x:0,y:0,width:b.width,height:b.height}
}else{return{x:0,y:0,width:a.clientWidth,height:a.clientHeight}}}.property("content").cacheable(),parentViewDidResize:function(){this.contentLayoutDidChange()
},didUpdateLayer:function(){this.contentLayoutDidChange()},render:function(a,c){var b=this.get("content");
if(b){a.push(b||"")}}});sc_require("views/segmented");SC.TOP_LOCATION="top";SC.TOP_TOOLBAR_LOCATION="top-toolbar";
SC.BOTTOM_LOCATION="bottom";SC.TabView=SC.View.extend({classNames:["sc-tab-view"],displayProperties:["nowShowing"],nowShowing:null,items:[],isEnabled:YES,itemTitleKey:null,itemValueKey:null,itemIsEnabledKey:null,itemIconKey:null,itemWidthKey:null,itemToolTipKey:null,tabHeight:SC.REGULAR_BUTTON_HEIGHT,tabLocation:SC.TOP_LOCATION,userDefaultKey:null,_tab_nowShowingDidChange:function(){var a=this.get("nowShowing");
this.get("containerView").set("nowShowing",a);this.get("segmentedView").set("value",a);
return this}.observes("nowShowing"),_tab_saveUserDefault:function(){var a=this.get("nowShowing");
var b=this.get("userDefaultKey");if(b){SC.userDefaults.set([b,"nowShowing"].join(":"),a)
}}.observes("nowShowing"),_tab_itemsDidChange:function(){this.get("segmentedView").set("items",this.get("items"));
return this}.observes("items"),init:function(){arguments.callee.base.apply(this,arguments);
this._tab_nowShowingDidChange()._tab_itemsDidChange()},awake:function(){arguments.callee.base.apply(this,arguments);
var a=this.get("userDefaultKey");if(a){a=[a,"nowShowing"].join(":");var b=SC.userDefaults.get(a);
if(!SC.none(b)){this.set("nowShowing",b)}}},createChildViews:function(){var f=[],a,e,d,c=this.get("tabLocation"),b=this.get("tabHeight");
d=(c===SC.TOP_LOCATION)?{top:b/2+1,left:0,right:0,bottom:0}:(c===SC.TOP_TOOLBAR_LOCATION)?{top:b+1,left:0,right:0,bottom:0}:{top:0,left:0,right:0,bottom:b-1};
e=this.containerView.extend(SC.Border,{layout:d,borderStyle:SC.BORDER_BLACK});a=this.containerView=this.createChildView(e);
f.push(a);d=(c===SC.TOP_LOCATION||c===SC.TOP_TOOLBAR_LOCATION)?{height:b,left:0,right:0,top:0}:{height:b,left:0,right:0,bottom:0};
this.segmentedView=this.get("segmentedView").extend({layout:d,_sc_tab_segmented_valueDidChange:function(){var g=this.get("parentView");
if(g){g.set("nowShowing",this.get("value"))}this.set("layerNeedsUpdate",YES);this.invokeOnce(this.updateLayerIfNeeded)
}.observes("value"),init:function(){var g=this.get("parentView");if(g){SC._TAB_ITEM_KEYS.forEach(function(h){this[h]=g.get(h)
},this)}return arguments.callee.base.apply(this,arguments)}});a=this.segmentedView=this.createChildView(this.segmentedView);
f.push(a);this.set("childViews",f);return this},containerView:SC.ContainerView,segmentedView:SC.SegmentedView});
SC._TAB_ITEM_KEYS="itemTitleKey itemValueKey itemIsEnabledKey itemIconKey itemWidthKey itemToolTipKey itemActionKey itemTargetKey".w();
SC.ThumbView=SC.View.extend({classNames:["sc-thumb-view"],isEnabled:YES,isEnabledBindingDefault:SC.Binding.bool(),prepareContext:function(a,c){var b=this.get("splitView");
if(b){this.set("cursor",b.get("thumbViewCursor"))}return arguments.callee.base.apply(this,arguments)
},mouseDown:function(a){if(!this.get("isEnabled")){return NO}var b=this.get("splitView");
return(b)?b.mouseDownInThumbView(a,this):arguments.callee.base.apply(this,arguments)
},touchStart:function(a){return this.mouseDown(a)}});SC.WebView=SC.View.extend(SC.Control,{classNames:"sc-web-view",displayProperties:["value","shouldAutoResize"],shouldAutoResize:NO,render:function(a,d){var c=this.get("value");
if(d){a.push('<iframe src="'+c+'" style="position: absolute; width: 100%; height: 100%; border: 0px; margin: 0px; padding: 0px;"></iframe>')
}else{var b=this.$("iframe");b.attr("src","javascript:;");b.attr("src",c)}},didCreateLayer:function(){var a=this.$("iframe");
SC.Event.add(a,"load",this,this.iframeDidLoad)},iframeDidLoad:function(){if(this.get("shouldAutoResize")===YES){var a;
var c=this.$("iframe")[0];if(c&&c.contentWindow){a=c.contentWindow;if(a&&a.document&&a.document.documentElement){var b=a.document.documentElement;
if(!SC.browser.isIE){this.$().width(b.scrollWidth);this.$().height(b.scrollHeight)
}else{this.$().width(b.scrollWidth+12);this.$().height(b.scrollHeight+5)}}}}}});SC.WELL_CONTAINER_PADDING=15;
SC.WellView=SC.ContainerView.extend({classNames:"sc-well-view",contentLayout:{top:SC.WELL_CONTAINER_PADDING,bottom:SC.WELL_CONTAINER_PADDING,left:SC.WELL_CONTAINER_PADDING,right:SC.WELL_CONTAINER_PADDING},createChildViews:function(){var a=this.get("contentView");
if(a){a=this.contentView=this.createChildView(a);a.set("layout",this.contentLayout);
this.childViews=[a]}},render:function(a,b){if(b){a.push("<div class='top-left-edge'></div>","<div class='top-edge'></div>","<div class='top-right-edge'></div>","<div class='right-edge'></div>","<div class='bottom-right-edge'></div>","<div class='bottom-edge'></div>","<div class='bottom-left-edge'></div>","<div class='left-edge'></div>","<div class='content-background'></div>")
}arguments.callee.base.apply(this,arguments)},contentViewDidChange:function(){var a=this.get("contentView");
a.set("layout",this.contentLayout);this.replaceContent(a)}.observes("contentView")});
if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/desktop")
}SC.DataSource=SC.Object.extend({fetch:function(a,b){return NO},retrieveRecords:function(a,c,b){return this._handleEach(a,c,this.retrieveRecord,b)
},commitRecords:function(c,b,g,f,h){var d,e,a;if(b.length>0){d=this.createRecords.call(this,c,b,h)
}if(g.length>0){e=this.updateRecords.call(this,c,g,h)}if(f.length>0){a=this.destroyRecords.call(this,c,f,h)
}return((d===e)&&(d===a))?d:SC.MIXED_STATE},cancel:function(a,b){return NO},updateRecords:function(a,b,c){return this._handleEach(a,b,this.updateRecord,null,c)
},createRecords:function(a,b,c){return this._handleEach(a,b,this.createRecord,null,c)
},destroyRecords:function(a,b,c){return this._handleEach(a,b,this.destroyRecord,null,c)
},_handleEach:function(g,d,c,a,b){var e=d.length,h,f,j,k;if(!a){a=[]}for(h=0;h<e;
h++){k=a[h]?a[h]:b;j=c.call(this,g,d[h],k,b);if(f===undefined){f=j}else{if(f===YES){f=(j===YES)?YES:SC.MIXED_STATE
}else{if(f===NO){f=(j===NO)?NO:SC.MIXED_STATE}}}}return f?f:null},updateRecord:function(a,b,c){return NO
},retrieveRecord:function(a,b,c){return NO},createRecord:function(a,b,c){return NO
},destroyRecord:function(a,b,c){return NO}});sc_require("data_sources/data_source");
SC.CascadeDataSource=SC.DataSource.extend({dataSources:null,from:function(a){var b=this.get("dataSources");
if(!b){this.set("dataSources",b=[])}b.push(a);return this},fetch:function(c,g){var e=this.get("dataSources"),b=e?e.length:0,d=NO,h,f,a;
for(a=0;(d!==YES)&&a<b;a++){f=e.objectAt(a);h=f.fetch?f.fetch.call(f,c,g):NO;d=this._handleResponse(d,h)
}return d},retrieveRecords:function(c,f){var e=this.get("dataSources"),b=e?e.length:0,d=NO,h,g,a;
for(a=0;(d!==YES)&&a<b;a++){g=e.objectAt(a);h=g.retrieveRecords.call(g,c,f);d=this._handleResponse(d,h)
}return d},commitRecords:function(j,c,g,d){var b=this.get("dataSources"),e=b?b.length:0,f=NO,k,a,h;
for(h=0;(f!==YES)&&h<e;h++){a=b.objectAt(h);k=a.commitRecords.call(a,j,c,g,d);f=this._handleResponse(f,k)
}return f},cancel:function(c,f){var e=this.get("dataSources"),b=e?e.length:0,d=NO,h,g,a;
for(a=0;(d!==YES)&&a<b;a++){g=e.objectAt(a);h=g.cancel.call(g,c,f);d=this._handleResponse(d,h)
}return d},init:function(){arguments.callee.base.apply(this,arguments);var b=this.get("dataSources"),a=b?b.get("length"):0,c;
while(--a>=0){c=b[a];if(SC.typeOf(c)===SC.T_STRING){b[a]=this.get(c)}}},_handleResponse:function(b,a){if(a===YES){return YES
}else{if(b===NO){return(a===NO)?NO:SC.MIXED_STATE}else{return SC.MIXED_STATE}}}});
SC.Record=SC.Object.extend({isRecord:YES,primaryKey:"guid",id:function(a,b){if(b!==undefined){this.writeAttribute(this.get("primaryKey"),b);
return b}else{return SC.Store.idFor(this.storeKey)}}.property("storeKey").cacheable(),status:function(){return this.store.readStatus(this.storeKey)
}.property("storeKey").cacheable(),store:null,storeKey:null,isDestroyed:function(){return !!(this.get("status")&SC.Record.DESTROYED)
}.property("status").cacheable(),isEditable:function(a,b){if(b!==undefined){this._screc_isEditable=b
}if(this.get("status")&SC.Record.READY){return this._screc_isEditable}else{return NO
}}.property("status").cacheable(),_screc_isEditable:YES,isLoaded:function(){var b=SC.Record,a=this.get("status");
return !((a===b.EMPTY)||(a===b.BUSY_LOADING)||(a===b.ERROR))}.property("status").cacheable(),relationships:null,attributes:function(){var a=this.get("store"),b=this.storeKey;
return a.readEditableDataHash(b)}.property(),readOnlyAttributes:function(){var a=this.get("store"),c=this.storeKey,b=a.readDataHash(c);
if(b){b=SC.clone(b)}return b}.property(),childRecords:null,childRecordNamespace:null,refresh:function(){this.get("store").refreshRecord(null,null,this.get("storeKey"));
return this},destroy:function(){this.get("store").destroyRecord(null,null,this.get("storeKey"));
this.notifyPropertyChange("status");this.propagateToAggregates();return this},recordDidChange:function(a){this.get("store").recordDidChange(null,null,this.get("storeKey"),a);
this.notifyPropertyChange("status");this.propagateToAggregates();return this},_editLevel:0,beginEditing:function(){this._editLevel++;
return this},endEditing:function(a){if(--this._editLevel<=0){this._editLevel=0;this.recordDidChange(a)
}return this},readAttribute:function(c){var a=this.get("store"),d=this.storeKey;var b=a.readDataHash(d);
return b?b[c]:undefined},writeAttribute:function(d,g,f){var b=this.get("store"),e=this.storeKey,a=b.peekStatus(e),c;
c=b.readEditableDataHash(e);if(!c){throw SC.Record.BAD_STATE_ERROR}if(g!==c[d]){if(!f){this.beginEditing()
}c[d]=g;if(d===this.get("primaryKey")){SC.Store.replaceIdFor(e,g);this.propertyDidChange("id")
}if(!f){this.endEditing(d)}}return this},propagateToAggregates:function(){var p=this.get("storeKey"),d=SC.Store.recordTypeFor(p),n,h,o,b,m;
var g=d.aggregates;if(!g){var f=this.get("store").readDataHash(p);g=[];for(var c in f){if(this[c]&&this[c].get&&this[c].get("aggregate")===YES){g.push(c)
}}d.aggregates=g}var l=SC.Record,a=l.DIRTY,e=l.READY_NEW,q=l.DESTROYED,r=l.READY_CLEAN,j;
j=function(t){var k,s;if(t){k=this.get("status");if((k&a)||(k&e)||(k&q)){s=t.get("status");
if(s===r){t.get("store").recordDidChange(t.constructor,null,t.get("storeKey"),null,YES)
}}}};for(n=0,h=g.length;n<h;++n){o=g[n];b=this.get(o);m=SC.kindOf(b,SC.ManyArray)?b:[b];
m.forEach(j,this)}},storeDidChangeProperties:function(a,b){if(a){this.notifyPropertyChange("status")
}else{if(b){this.beginPropertyChanges();b.forEach(function(e){this.notifyPropertyChange(e)
},this);this.notifyPropertyChange("status");this.endPropertyChanges()}else{this.allPropertiesDidChange()
}var d=this.relationships,c=d?d.length:0;while(--c>=0){d[c].recordPropertyDidChange(b)
}}},normalize:function(e){var k=this.primaryKey,c=this.get("id"),l=this.get("store"),n=this.get("storeKey"),m,h,d,q,g,p,b,a,j,o;
var f=l.readEditableDataHash(n)||{};f[k]=c;q=l.readDataHash(n);for(m in this){h=this[m];
if(h){d=h.typeClass;if(d){o=h.get("key")||m;b=SC.typeOf(d.call(h))===SC.T_CLASS;a=h.isChildRecordTransform;
if(!b&&!a){g=this.get(m);if(g!==undefined||(g===null&&e)){f[o]=g}}else{if(a){g=this.get(m);
if(g&&g.normalize){g.normalize()}}else{if(b){g=q[m];if(g!==undefined){f[o]=g}else{j=h.get("defaultValue");
if(SC.typeOf(j)===SC.T_FUNCTION){f[o]=j(this,m,j)}else{f[o]=j}}}}}}}}return this},unknownProperty:function(b,d){if(d!==undefined){var c=this.get("storeKey"),e=SC.Store.recordTypeFor(c);
if(e.ignoreUnknownProperties===YES){this[b]=d;return d}var a=this.get("primaryKey");
this.writeAttribute(b,d);if(b===a){SC.Store.replaceIdFor(c,d)}}return this.readAttribute(b)
},commitRecord:function(b){var a=this.get("store");a.commitRecord(undefined,undefined,this.get("storeKey"),b);
return this},isError:function(){return this.get("status")&SC.Record.ERROR}.property("status").cacheable(),errorValue:function(){return this.get("isError")?SC.val(this.get("errorObject")):null
}.property("isError").cacheable(),errorObject:function(){if(this.get("isError")){var a=this.get("store");
return a.readError(this.get("storeKey"))||SC.Record.GENERIC_ERROR}else{return null
}}.property("isError").cacheable(),toString:function(){var a=this.get("store").readDataHash(this.get("storeKey"));
return"%@(%@) %@".fmt(this.constructor.toString(),SC.inspect(a),this.statusString())
},statusString:function(){var b=[],a=this.get("status");for(var c in SC.Record){if(c.match(/[A-Z_]$/)&&SC.Record[c]===a){b.push(c)
}}return b.join(" ")},registerChildRecord:function(f,e){var c=f.primaryKey||"childRecordKey";
var d=e[c];var b=null;var a=this.get("childRecords");if(d&&a){b=a[d]}if(SC.none(b)){b=this.createChildRecord(f,e)
}return b},createChildRecord:function(g,h){SC.RunLoop.begin();var d=SC.Record._generateChildKey();
h=h||{};var c=g.primaryKey||"childRecordKey";var f=h[c];h[c]=d;var b=this.get("store");
if(SC.none(b)){throw"Error: during the creation of a child record: NO STORE ON PARENT!"
}var e=b.createRecord(g,h);e._parentRecord=this;if(this.generateIdForChild){this.generateIdForChild(e)
}var a=this.get("childRecords");if(SC.none(a)){a=SC.Object.create();this.set("childRecords",a)
}a[d]=e;SC.RunLoop.end();return e},generateIdForChild:function(a){}});SC.Record.mixin({ignoreUnknownProperties:NO,CLEAN:1,DIRTY:2,EMPTY:256,ERROR:4096,READY:512,READY_CLEAN:513,READY_DIRTY:514,READY_NEW:515,DESTROYED:1024,DESTROYED_CLEAN:1025,DESTROYED_DIRTY:1026,BUSY:2048,BUSY_LOADING:2052,BUSY_CREATING:2056,BUSY_COMMITTING:2064,BUSY_REFRESH:2080,BUSY_REFRESH_CLEAN:2081,BUSY_REFRESH_DIRTY:2082,BUSY_DESTROYING:2112,BAD_STATE_ERROR:SC.$error("Internal Inconsistency"),RECORD_EXISTS_ERROR:SC.$error("Record Exists"),NOT_FOUND_ERROR:SC.$error("Not found "),BUSY_ERROR:SC.$error("Busy"),GENERIC_ERROR:SC.$error("Generic Error"),_nextChildKey:0,attr:function(a,b){return SC.RecordAttribute.attr(a,b)
},fetch:function(b,a){return SC.FetchedAttribute.attr(b,a)},toMany:function(d,b){b=b||{};
var c=b.nested;var a;if(c){a=SC.ChildrenAttribute.attr(d,b)}else{a=SC.ManyAttribute.attr(d,b)
}return a},toOne:function(d,b){b=b||{};var c=b.nested;var a;if(c){a=SC.ChildAttribute.attr(d,b)
}else{a=SC.SingleAttribute.attr(d,b)}return a},storeKeysById:function(){var b=SC.keyFor("storeKey",SC.guidFor(this)),a=this[b];
if(!a){a=this[b]={}}return a},storeKeyFor:function(c){var b=this.storeKeysById(),a=b[c];
if(!a){a=SC.Store.generateStoreKey();SC.Store.idsByStoreKey[a]=c;SC.Store.recordTypesByStoreKey[a]=this;
b[c]=a}return a},storeKeyExists:function(c){var b=this.storeKeysById(),a=b[c];return a
},find:function(a,b){return a.find(this,b)},extend:function(){var a=SC.Object.extend.apply(this,arguments);
SC.Query._scq_didDefineRecordType(a);return a},_generateChildKey:function(){var a=SC.Record._nextChildKey+1;
SC.Record._nextChildKey=a;return a}});sc_require("data_sources/data_source");sc_require("models/record");
SC.FixturesDataSource=SC.DataSource.extend({simulateRemoteResponse:NO,latency:50,cancel:function(a,b){return NO
},fetch:function(a,b){if(b.get("location")!==SC.Query.LOCAL){throw SC.$error("SC.Fixture data source can only fetch local queries")
}if(!b.get("recordType")&&!b.get("recordTypes")){throw SC.$error("SC.Fixture data source can only fetch queries with one or more record types")
}if(this.get("simulateRemoteResponse")){this.invokeLater(this._fetch,this.get("latency"),a,b)
}else{this._fetch(a,b)}},_fetch:function(a,c){var d=c.get("recordType"),b=c.get("recordTypes")||[d];
b.forEach(function(e){if(SC.typeOf(e)===SC.T_STRING){e=SC.objectForPropertyPath(e)
}if(e){this.loadFixturesFor(a,e)}},this);a.dataSourceDidFetchQuery(c)},retrieveRecords:function(a,c){var d=this.get("latency"),b=this.hasFixturesFor(c);
if(!b){return b}if(this.get("simulateRemoteResponse")){this.invokeLater(this._retrieveRecords,d,a,c)
}else{this._retrieveRecords(a,c)}return b},_retrieveRecords:function(a,b){b.forEach(function(d){var c=[],g=SC.Store.recordTypeFor(d),f=a.idFor(d),e=this.fixtureForStoreKey(a,d);
c.push(d);a.dataSourceDidComplete(d,e,f)},this)},updateRecords:function(a,c,e){var d=this.get("latency"),b=this.hasFixturesFor(c);
if(!b){return b}if(this.get("simulateRemoteResponse")){this.invokeLater(this._updateRecords,d,a,c)
}else{this._updateRecords(a,c)}return b},_updateRecords:function(a,b){b.forEach(function(c){var d=a.readDataHash(c);
this.setFixtureForStoreKey(a,c,d);a.dataSourceDidComplete(c)},this)},createRecords:function(a,b,d){var c=this.get("latency");
if(this.get("simulateRemoteResponse")){this.invokeLater(this._createRecords,c,a,b)
}else{this._createRecords(a,b)}return YES},_createRecords:function(a,b){b.forEach(function(e){var g=a.idFor(e),f=a.recordTypeFor(e),d=a.readDataHash(e),c=this.fixturesFor(f);
if(!g){g=this.generateIdFor(f,d,a,e)}this._invalidateCachesFor(f,e,g);c[g]=d;a.dataSourceDidComplete(e,null,g)
},this)},destroyRecords:function(a,c,e){var d=this.get("latency"),b=this.hasFixturesFor(c);
if(!b){return b}if(this.get("simulateRemoteResponse")){this.invokeLater(this._destroyRecords,d,a,c)
}else{this._destroyRecords(a,c)}return b},_destroyRecords:function(a,b){b.forEach(function(d){var f=a.idFor(d),e=a.recordTypeFor(d),c=this.fixturesFor(e);
this._invalidateCachesFor(e,d,f);if(f){delete c[f]}a.dataSourceDidDestroy(d)},this)
},loadFixturesFor:function(a,g,c){var b=[],e,d,f;e=this.fixturesFor(g);for(d in e){f=g.storeKeyFor(d);
if(a.peekStatus(f)===SC.Record.EMPTY){b.push(e[d])}if(c){c.push(f)}}if(b&&b.length>0){a.loadRecords(g,b)
}return this},generateIdFor:function(d,b,a,c){return"@id%@".fmt(SC.Store.generateStoreKey())
},fixtureForStoreKey:function(a,c){var e=a.idFor(c),d=a.recordTypeFor(c),b=this.fixturesFor(d);
return b?b[e]:null},setFixtureForStoreKey:function(a,d,c){var f=a.idFor(d),e=a.recordTypeFor(d),b=this.fixturesFor(e);
this._invalidateCachesFor(e,d,f);b[f]=c;return this},fixturesFor:function(h){if(!this._fixtures){this._fixtures={}
}var f=this._fixtures[SC.guidFor(h)];if(f){return f}var e=h?h.FIXTURES:null,b=e?e.length:0,c=h?h.prototype.primaryKey:"guid",a,d,g;
this._fixtures[SC.guidFor(h)]=f={};for(a=0;a<b;a++){d=e[a];g=d[c];if(!g){g=this.generateIdFor(h,d)
}f[g]=d}return f},fixturesLoadedFor:function(c){if(!this._fixtures){return NO}var a=[],b=this._fixtures[SC.guidFor(c)];
return b?YES:NO},hasFixturesFor:function(b){var a=NO;b.forEach(function(d){if(a!==SC.MIXED_STATE){var e=SC.Store.recordTypeFor(d),c=e?e.FIXTURES:null;
if(c&&c.length&&c.length>0){if(a===NO){a=YES}}else{if(a===YES){a=SC.MIXED_STATE}}}},this);
return a},_invalidateCachesFor:function(d,b,c){var a=this._storeKeyCache;if(a){delete a[SC.guidFor(d)]
}return this}});SC.Record.fixtures=SC.FixturesDataSource.create();sc_require("core");
sc_require("models/record");SC.Query=SC.Object.extend(SC.Copyable,SC.Freezable,{isQuery:YES,conditions:null,orderBy:null,recordType:null,recordTypes:null,expandedRecordTypes:function(){var b=SC.CoreSet.create(),a,c;
if(a=this.get("recordType")){this._scq_expandRecordType(a,b)}else{if(a=this.get("recordTypes")){a.forEach(function(d){this._scq_expandRecordType(d,b)
},this)}else{this._scq_expandRecordType(SC.Record,b)}}c=SC.Query._scq_queriesWithExpandedRecordTypes;
if(!c){c=SC.Query._scq_queriesWithExpandedRecordTypes=SC.CoreSet.create()}c.add(this);
return b.freeze()}.property("recordType","recordTypes").cacheable(),_scq_expandRecordType:function(b,a){if(a.contains(b)){return
}a.add(b);if(SC.typeOf(b)===SC.T_STRING){b=SC.objectForPropertyPath(b)}b.subclasses.forEach(function(c){this._scq_expandRecordType(c,a)
},this)},parameters:null,location:"local",scope:null,isRemote:function(){return this.get("location")===SC.Query.REMOTE
}.property("location").cacheable(),isLocal:function(){return this.get("location")===SC.Query.LOCAL
}.property("location").cacheable(),isEditable:NO,contains:function(a,d){var e,b=YES;
if(e=this.get("recordTypes")){b=e.find(function(f){return SC.kindOf(a,f)})}else{if(e=this.get("recordType")){b=SC.kindOf(a,e)
}}if(!b){return NO}var c=this.get("scope");if(c&&!c.contains(a)){return NO}if(!this._isReady){this.parse()
}if(!this._isReady){return NO}if(d===undefined){d=this.parameters||this}return this._tokenTree.evaluate(a,d)
},containsRecordTypes:function(a){var b=this.get("recordType");if(b){return !!a.find(function(c){return SC.kindOf(c,b)
})}else{if(b=this.get("recordTypes")){return !!b.find(function(c){return !!a.find(function(d){return SC.kindOf(d,c)
})})}else{return YES}}},compare:function(f,d){var c=0,e,b,a,g;if(f===d){return 0}if(!this._isReady){this.parse()
}if(!this._isReady){return SC.compare(f.get("id"),d.get("id"))}b=this._order;if(SC.typeOf(b)===SC.T_FUNCTION){c=b.call(null,f,d)
}else{a=b?b.length:0;for(g=0;c===0&&(g<a);g++){e=b[g].propertyName;if(SC.Query.comparisons[e]){c=SC.Query.comparisons[e](f.get(e),d.get(e))
}else{c=SC.compare(f.get(e),d.get(e))}if((c!==0)&&b[g].descending){c=(-1)*c}}}if(c!==0){return c
}else{return SC.compare(f.get("id"),d.get("id"))}},_isReady:NO,parse:function(){var c=this.get("conditions"),d=this.get("queryLanguage"),b,a;
b=this._tokenList=this.tokenizeString(c,d);a=this._tokenTree=this.buildTokenTree(b,d);
this._order=this.buildOrder(this.get("orderBy"));this._isReady=!!a&&!a.error;if(a&&a.error){throw a.error
}return this._isReady},queryWithScope:function(c){var b=SC.keyFor("__query__",SC.guidFor(this)),a=c[b];
if(!a){c[b]=a=this.copy();a.set("scope",c);a.freeze()}return a},copyKeys:"conditions orderBy recordType recordTypes parameters location scope".w(),concatenatedProperties:"copyKeys".w(),copy:function(){var d={},c=this.get("copyKeys"),f=c?c.length:0,b,e,a;
while(--f>=0){b=c[f];e=this.get(b);if(e!==undefined){d[b]=e}}a=this.constructor.create(d);
d=null;return a},queryLanguage:{UNKNOWN:{firstCharacter:/[^\s'"\w\d\(\)\{\}]/,notAllowed:/[\s'"\w\d\(\)\{\}]/},PROPERTY:{firstCharacter:/[a-zA-Z_]/,notAllowed:/[^a-zA-Z_0-9]/,evalType:"PRIMITIVE",evaluate:function(b,a){return b.get(this.tokenValue)
}},NUMBER:{firstCharacter:/[\d\-]/,notAllowed:/[^\d\-\.]/,format:/^-?\d+$|^-?\d+\.\d+$/,evalType:"PRIMITIVE",evaluate:function(b,a){return parseFloat(this.tokenValue)
}},STRING:{firstCharacter:/['"]/,delimeted:true,evalType:"PRIMITIVE",evaluate:function(b,a){return this.tokenValue
}},PARAMETER:{firstCharacter:/\{/,lastCharacter:"}",delimeted:true,evalType:"PRIMITIVE",evaluate:function(b,a){return a[this.tokenValue]
}},"%@":{rememberCount:true,reservedWord:true,evalType:"PRIMITIVE",evaluate:function(b,a){return a[this.tokenValue]
}},OPEN_PAREN:{firstCharacter:/\(/,singleCharacter:true},CLOSE_PAREN:{firstCharacter:/\)/,singleCharacter:true},AND:{reservedWord:true,leftType:"BOOLEAN",rightType:"BOOLEAN",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return d&&b}},OR:{reservedWord:true,leftType:"BOOLEAN",rightType:"BOOLEAN",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return d||b}},NOT:{reservedWord:true,rightType:"BOOLEAN",evalType:"BOOLEAN",evaluate:function(c,a){var b=this.rightSide.evaluate(c,a);
return !b}},"=":{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return SC.isEqual(d,b)}},"!=":{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return !SC.isEqual(d,b)}},"<":{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return SC.compare(d,b)==-1}},"<=":{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return SC.compare(d,b)!=1}},">":{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return SC.compare(d,b)==1}},">=":{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return SC.compare(d,b)!=-1}},BEGINS_WITH:{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var b=this.leftSide.evaluate(c,a);
var d=this.rightSide.evaluate(c,a);return(b&&b.indexOf(d)===0)}},ENDS_WITH:{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(d,b){var c=this.leftSide.evaluate(d,b);
var a=this.rightSide.evaluate(d,b);return(c&&c.indexOf(a)===(c.length-a.length))}},CONTAINS:{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(d,a){var c=this.leftSide.evaluate(d,a)||[];
var f=this.rightSide.evaluate(d,a);switch(SC.typeOf(c)){case SC.T_STRING:return(c.indexOf(f)!==-1);
case SC.T_ARRAY:var e=false;var b=0;while(e===false&&b<c.length){if(f==c[b]){e=true
}b++}return e;default:break}}},ANY:{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(d,a){var f=this.leftSide.evaluate(d,a);
var b=this.rightSide.evaluate(d,a);var e=false;var c=0;while(e===false&&c<b.length){if(f==b[c]){e=true
}c++}return e}},MATCHES:{reservedWord:true,leftType:"PRIMITIVE",rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(c,a){var d=this.leftSide.evaluate(c,a);
var b=this.rightSide.evaluate(c,a);return b.test(d)}},TYPE_IS:{reservedWord:true,rightType:"PRIMITIVE",evalType:"BOOLEAN",evaluate:function(d,a){var c=SC.Store.recordTypeFor(d.storeKey);
var b=this.rightSide.evaluate(d,a);var e=SC.objectForPropertyPath(b);return c==e}},"null":{reservedWord:true,evalType:"PRIMITIVE",evaluate:function(b,a){return null
}},"undefined":{reservedWord:true,evalType:"PRIMITIVE",evaluate:function(b,a){return undefined
}},"false":{reservedWord:true,evalType:"PRIMITIVE",evaluate:function(b,a){return false
}},"true":{reservedWord:true,evalType:"PRIMITIVE",evaluate:function(b,a){return true
}},YES:{reservedWord:true,evalType:"PRIMITIVE",evaluate:function(b,a){return true
}},NO:{reservedWord:true,evalType:"PRIMITIVE",evaluate:function(b,a){return false
}}},tokenizeString:function(v,q){var k=[],s=null,h=null,f=null,u=null,a=null,j=null,d=null,g=null,r=false,b=false,m=false,n=false,o={};
function e(w,c){h=q[w];if(h.format&&!h.format.test(c)){w="UNKNOWN"}if(h.delimeted){n=true
}if(!h.delimeted){for(var t in q){if(q[t].reservedWord&&t==c){w=t}}}h=q[w];if(h&&h.rememberCount){if(!o[w]){o[w]=0
}c=o[w];o[w]+=1}k.push({tokenType:w,tokenValue:c});a=null;j=null;d=null}if(!v){return[]
}var l=v.length;for(var p=0;p<l;p++){r=(p===l-1);s=v.charAt(p);n=false;if(a){h=q[a];
b=h.delimeted?s===g:h.notAllowed.test(s);if(!b){d+=s}if(b||r){e(a,d)}if(r&&!b){n=true
}}if(!a&&!n){for(f in q){h=q[f];if(h.firstCharacter&&h.firstCharacter.test(s)){a=f
}}if(a){h=q[a];d=s;if(h.delimeted){d="";if(h.lastCharacter){g=h.lastCharacter}else{g=s
}}if(h.singleCharacter||r){e(a,d)}}}}return k},buildTokenTree:function(k,a){var o=k.slice();
var q=0;var s=[];var c=false;var p=[];if(!k||k.length===0){return{evaluate:function(){return true
}}}function r(l){var w=l;if(w<0){return false}var v=a[o[w].tokenType];if(!v){p.push("logic for token '"+o[w].tokenType+"' is not defined");
return false}o[w].evaluate=v.evaluate;return v}function b(w,l){var x=l;var v=r(x);
if(!v){return false}if(w=="left"){return v.leftType}if(w=="right"){return v.rightType
}}function n(l){var w=l;var v=r(w);if(!v){return false}else{return v.evalType}}function f(l){o.splice(l,1);
if(l<=q){q--}}function t(l){var v=l||q;if(v>0){return true}else{return false}}function j(l){var v=l;
if(v<0){return true}return(b("left",v)&&!o[v].leftSide)||(b("right",v)&&!o[v].rightSide)
}function h(v,w){var l=(w<v)?"left":"right";if(v<0||w<0){return false}if(!b(l,v)){return false
}if(!n(w)){return false}if(b(l,v)==n(w)){return true}else{return false}}function m(l){var v=l;
if(!j(v)){return false}if(!t(v)){return false}if(h(v,v-1)){return true}else{return false
}}function d(l){var v=l;if(j(v)){return false}if(!t(v)){return false}if(!j(v-1)){return false
}if(h(v-1,v)){return true}else{return false}}function g(l){var v=l;if(v<1){return false
}o[v].leftSide=o[v-1];f(v-1)}function u(l){var v=l;if(v<1){return false}o[v-1].rightSide=o[v];
f(v)}function e(l){f(l);f(s.pop())}for(q=0;q<o.length;q++){c=false;if(o[q].tokenType=="UNKNOWN"){p.push("found unknown token: "+o[q].tokenValue)
}if(o[q].tokenType=="OPEN_PAREN"){s.push(q)}if(o[q].tokenType=="CLOSE_PAREN"){e(q)
}if(m(q)){g(q)}if(d(q)){u(q);c=true}if(c){q--}}if(o.length==1){o=o[0]}else{p.push("string did not resolve to a single tree")
}if(p.length>0){return{error:p.join(",\n"),tree:o}}else{return o}},buildOrder:function(a){if(!a){return[]
}else{if(SC.typeOf(a)===SC.T_FUNCTION){return a}else{var d=a.split(",");for(var b=0;
b<d.length;b++){var c=d[b];c=c.replace(/^\s+|\s+$/,"");c=c.replace(/\s+/,",");c=c.split(",");
d[b]={propertyName:c[0]};if(c[1]&&c[1]=="DESC"){d[b].descending=true}}return d}}}});
SC.Query.mixin({LOCAL:"local",REMOTE:"remote",storeKeyFor:function(a){return a?a.get("storeKey"):null
},containsRecords:function(g,e,d){var f=[];for(var b=0,a=e.get("length");b<a;b++){var c=e.objectAt(b);
if(c&&g.contains(c)){f.push(c.get("storeKey"))}}f=SC.Query.orderStoreKeys(f,g,d);
return f},orderStoreKeys:function(e,f,b){if(e){var a=SC.Query,d=a._TMP_STORES,g=a._TMP_QUERIES;
if(!d){d=a._TMP_STORES=[]}if(!g){g=a._TMP_QUERIES=[]}d.push(b);g.push(f);var c=e.sort(SC.Query.compareStoreKeys);
a._TMP_STORES.pop();a._TMP_QUERIES.pop()}return e},compareStoreKeys:function(h,f){var n=SC.Query,l=n._TMP_STORES,b=n._TMP_QUERIES,o=l[l.length-1],m=b[b.length-1],c=m.compare,d=o.materializeRecord(h),a=o.materializeRecord(f);
if(c!==n.prototype.compare){return c.call(m,d,a)}else{var p=0,k,e,j,g;if(d===a){return 0
}if(!m._isReady){m.parse()}if(!m._isReady){return SC.compare(d.get("id"),a.get("id"))
}e=m._order;if(SC.typeOf(e)===SC.T_FUNCTION){p=e.call(null,d,a)}else{j=e?e.length:0;
for(g=0;p===0&&(g<j);g++){k=e[g].propertyName;if(SC.Query.comparisons[k]){p=SC.Query.comparisons[k](d.get(k),a.get(k))
}else{p=SC.compare(d.get(k),a.get(k))}if((p!==0)&&e[g].descending){p=(-1)*p}}}if(p!==0){return p
}else{return SC.compare(d.get("id"),a.get("id"))}}},build:function(h,c,g,d){var a=null,f,b,j,e;
if(c&&c.isQuery){if(c.get("location")===h){return c}else{return c.copy().set("location",h).freeze()
}}if(typeof c===SC.T_STRING){f=SC.objectForPropertyPath(c);if(!f){throw"%@ did not resolve to a class".fmt(c)
}c=f}else{if(c&&c.isEnumerable){f=[];c.forEach(function(k){if(typeof k===SC.T_STRING){k=SC.objectForPropertyPath(k)
}if(!k){throw"cannot resolve record types: %@".fmt(c)}f.push(k)},this);c=f}else{if(!c){c=SC.Record
}}}if(d===undefined){d=null}if(g===undefined){g=null}if(!d&&(typeof g!==SC.T_STRING)){a=g;
g=null}if(!d&&!a){e=SC.Query._scq_recordTypeCache;if(!e){e=SC.Query._scq_recordTypeCache={}
}b=e[h];if(!b){b=e[h]={}}if(c.isEnumerable){j=c.map(function(l){return SC.guidFor(l)
});j=j.sort().join(":")}else{j=SC.guidFor(c)}if(g){j=[j,g].join("::")}f=b[j];if(!f){if(c.isEnumerable){a={recordTypes:c.copy()}
}else{a={recordType:c}}a.location=h;a.conditions=g;f=b[j]=SC.Query.create(a).freeze()
}}else{if(!a){a={}}if(!a.location){a.location=h}if(c&&c.isEnumerable){a.recordsTypes=c
}else{a.recordType=c}if(g){a.conditions=g}if(d){a.parameters=d}f=SC.Query.create(a).freeze()
}return f},local:function(c,a,b){return this.build(SC.Query.LOCAL,c,a,b)},remote:function(c,a,b){return this.build(SC.Query.REMOTE,c,a,b)
},_scq_didDefineRecordType:function(){var a=SC.Query._scq_queriesWithExpandedRecordTypes;
if(a){a.forEach(function(b){b.notifyPropertyChange("expandedRecordTypes")},this);
a.clear()}}});SC.Query.comparisons={};SC.Query.registerComparison=function(a,b){SC.Query.comparisons[a]=b
};SC.Query.registerQueryExtension=function(b,a){SC.Query.prototype.queryLanguage[b]=a
};SC.Q=SC.Query.from;sc_require("core");sc_require("models/record");sc_require("system/query");
SC.ChildRecord=SC.Record.extend({isChildRecord:YES,type:null,primaryKey:"childRecordKey",_parentRecord:null,status:function(){var a=SC.Record.EMPTY;
if(this._parentRecord){a=this._parentRecord.get("status");this.store.writeStatus(this.storeKey,a);
this.store.dataHashDidChange(this.storeKey)}else{a=this.store.readStatus(this.storeKey)
}return a}.property("storeKey").cacheable(),recordDidChange:function(){if(this._parentRecord&&this._parentRecord.recordDidChange){this._parentRecord.recordDidChange()
}else{arguments.callee.base.apply(this,arguments)}},createChildRecord:function(d,c){var a,b=this._parentRecord;
if(b){a=b.createChildRecord(d,c)}else{a=arguments.callee.base.apply(this,arguments)
}return a}});sc_require("models/record");sc_require("models/child_record");SC.RecordAttribute=SC.Object.extend({defaultValue:null,type:String,key:null,isRequired:NO,isEditable:YES,useIsoDate:YES,aggregate:NO,typeClass:function(){var a=this.get("type");
if(SC.typeOf(a)===SC.T_STRING){a=SC.objectForPropertyPath(a)}return a}.property("type").cacheable(),transform:function(){var a=this.get("typeClass")||String,c=SC.RecordAttribute.transforms,b;
while(a&&!(b=c[SC.guidFor(a)])){if(a.superclass.hasOwnProperty("create")){a=a.superclass
}else{a=SC.T_FUNCTION}}return b}.property("typeClass").cacheable(),toType:function(a,c,e){var b=this.get("transform"),d=this.get("typeClass");
if(b&&b.to){e=b.to(e,this,d,a,c)}return e},fromType:function(a,c,e){var b=this.get("transform"),d=this.get("typeClass");
if(b&&b.from){e=b.from(e,this,d,a,c)}return e},call:function(a,b,c){var d=this.get("key")||b,e;
if((c!==undefined)&&this.get("isEditable")){e=this.fromType(a,b,c);a.writeAttribute(d,e)
}e=c=a.readAttribute(d);if(SC.none(c)&&(c=this.get("defaultValue"))&&a.get("status")&SC.Record.READY_NEW){if(typeof c===SC.T_FUNCTION){e=this.defaultValue(a,b,this);
if((e!==c)&&a.get("store").readDataHash(a.get("storeKey"))){c=e;a.writeAttribute(d,c,true)
}}else{if(SC.kindOf(c,SC.DateTime)){a.writeAttribute(d,c.toISO8601(),true)}else{a.writeAttribute(d,c,true)
}}}else{c=this.toType(a,b,c)}return c},isProperty:YES,isCacheable:YES,dependentKeys:[],init:function(){arguments.callee.base.apply(this,arguments);
this.cacheKey="__cache__"+SC.guidFor(this);this.lastSetValueKey="__lastValue__"+SC.guidFor(this)
}});SC.RecordAttribute.attr=function(a,b){if(!b){b={}}if(!b.type){b.type=a||String
}return this.create(b)};SC.RecordAttribute.transforms={};SC.RecordAttribute.registerTransform=function(a,b){SC.RecordAttribute.transforms[SC.guidFor(a)]=b
};SC.RecordAttribute.registerTransform(Boolean,{to:function(a){return SC.none(a)?null:!!a
}});SC.RecordAttribute.registerTransform(Number,{to:function(a){return SC.none(a)?null:Number(a)
}});SC.RecordAttribute.registerTransform(String,{to:function(a){if(!(typeof a===SC.T_STRING)&&!SC.none(a)&&a.toString){a=a.toString()
}return a}});SC.RecordAttribute.registerTransform(Array,{to:function(a){if(!SC.isArray(a)&&!SC.none(a)){a=[]
}return a}});SC.RecordAttribute.registerTransform(Object,{to:function(a){if(!(typeof a==="object")&&!SC.none(a)){a={}
}return a}});SC.RecordAttribute.registerTransform(SC.Record,{to:function(e,a,d,c){var b=c.get("store");
if(SC.none(e)||(e==="")){return null}else{return b.find(d,e)}},from:function(a){return a?a.get("id"):null
}});SC.RecordAttribute.registerTransform(SC.T_FUNCTION,{to:function(e,a,d,c){d=d.apply(c);
var b=c.get("store");return b.find(d,e)},from:function(a){return a.get("id")}});SC.RecordAttribute.registerTransform(Date,{to:function(j,a){if(j===null){return null
}var c;j=j.toString()||"";if(a.get("useIsoDate")){var e="([0-9]{4})(-([0-9]{2})(-([0-9]{2})(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\\.([0-9]+))?)?(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?",h=j.match(new RegExp(e)),g=0,b=new Date(h[1],0,1),f;
if(h[3]){b.setMonth(h[3]-1)}if(h[5]){b.setDate(h[5])}if(h[7]){b.setHours(h[7])}if(h[8]){b.setMinutes(h[8])
}if(h[10]){b.setSeconds(h[10])}if(h[12]){b.setMilliseconds(Number("0."+h[12])*1000)
}if(h[14]){g=(Number(h[16])*60)+Number(h[17]);g*=((h[15]=="-")?1:-1)}g-=b.getTimezoneOffset();
f=(Number(b)+(g*60*1000));c=new Date();c.setTime(Number(f))}else{c=new Date(Date.parse(j))
}return c},_dates:{},_zeropad:function(a){return((a<0)?"-":"")+((a<10)?"0":"")+Math.abs(a)
},from:function(b){var a=this._dates[b.getTime()];if(a){return a}var d=this._zeropad,c=0-b.getTimezoneOffset()/60;
c=(c===0)?"Z":"%@:00".fmt(d(c));this._dates[b.getTime()]=a="%@-%@-%@T%@:%@:%@%@".fmt(d(b.getFullYear()),d(b.getMonth()+1),d(b.getDate()),d(b.getHours()),d(b.getMinutes()),d(b.getSeconds()),c);
return a}});if(SC.DateTime&&!SC.RecordAttribute.transforms[SC.guidFor(SC.DateTime)]){SC.RecordAttribute.registerTransform(SC.DateTime,{to:function(c,a){if(SC.none(c)||SC.instanceOf(c,SC.DateTime)){return c
}var b=a.get("format");return SC.DateTime.parse(c,b?b:SC.DateTime.recordFormat)},from:function(b,a){if(SC.none(b)){return b
}var c=a.get("format");return b.toFormattedString(c?c:SC.DateTime.recordFormat)}})
}sc_require("models/record");sc_require("models/record_attribute");SC.ChildAttribute=SC.RecordAttribute.extend({isChildRecordTransform:YES,toType:function(d,c,e){var b=null,f=SC.keyFor("__kid__",SC.guidFor(this)),g=this.get("typeClass");
if(d[f]){return d[f]}if(!d){throw"SC.Child: Error during transform: Unable to retrieve parent record."
}if(e){var a=d.get("childRecordNamespace");if(e.type&&!SC.none(a)){g=a[e.type]}if(!g||SC.typeOf(g)!==SC.T_CLASS){throw"SC.Child: Error during transform: Invalid record type."
}b=d[f]=d.registerChildRecord(g,e)}return b},fromType:function(a,b,c){return c},call:function(a,b,c){var d=this.get("key")||b,f=SC.keyFor("__kid__",SC.guidFor(this)),e;
if(c!==undefined){this.orphan(a);e=this.fromType(a,b,c);a[f]=null;a.writeAttribute(d,e);
c=this.toType(a,b,c)}else{c=a.readAttribute(d);if(SC.none(c)&&(c=this.get("defaultValue"))){if(typeof c===SC.T_FUNCTION){c=this.defaultValue(a,b,this);
if(a.attributes()){a.writeAttribute(d,c,true)}}}else{c=this.toType(a,b,c)}}return c
},orphan:function(e){var h=SC.keyFor("__kid__",SC.guidFor(this)),b,f,c,d,g,a;a=e?e[h]:null;
if(a){c=a.get("readOnlyAttributes");for(d in c){g=a[d];if(g&&g.isChildRecordTransform){g.orphan(e)
}}b=a.get("store");if(b){f=a.storeKey}if(f){b.unloadRecord(undefined,undefined,f)
}}}});sc_require("models/record");sc_require("models/record_attribute");sc_require("models/child_attribute");
SC.ChildrenAttribute=SC.ChildAttribute.extend({toType:function(b,d,e){var g=this.get("key")||d,f=SC.keyFor("__kidsArray__",SC.guidFor(this)),c=b[f],h=this.get("typeClass"),a;
if(!c){c=SC.ChildArray.create({record:b,propertyName:g,defaultRecordType:h});b[f]=this._cachedRef=c;
a=b.get("relationships");if(!a){b.set("relationships",a=[])}a.push(c)}return c},orphan:function(a){var e=this._cachedRef,f,j,h,g,c,b,d;
if(e){e.forEach(function(k){h=k.get("readOnlyAttributes");for(g in h){b=k[g];if(b&&b.isChildRecordTransform){b.orphan(a)
}}f=k.get("store");if(f){j=k.storeKey}if(j){f.unloadRecord(undefined,undefined,j)
}},this)}}});sc_require("models/record");sc_require("models/record_attribute");SC.FetchedAttribute=SC.RecordAttribute.extend({paramValueKey:"link",paramOwnerKey:"owner",paramRelKey:"rel",queryKey:null,isEditable:NO,toType:function(d,j,g){var h=d.get("store");
if(!h){return null}var b=this.get("paramValueKey"),a=this.get("paramOwnerKey"),f=this.get("paramRelKey"),e=this.get("queryKey")||this.get("typeClass"),c={};
if(b){c[b]=g}if(a){c[a]=d}if(f){c[f]=this.get("key")||j}return h.findAll(e,c)},fromType:function(a,b,c){return c
}});sc_require("models/record");sc_require("models/record_attribute");SC.ManyAttribute=SC.RecordAttribute.extend({inverse:null,isMaster:YES,orderBy:null,toType:function(b,d,f){var e=this.get("typeClass"),h=this.get("key")||d,g=SC.keyFor("__manyArray__",SC.guidFor(this)),c=b[g],a;
if(!c){c=SC.ManyArray.create({recordType:e,record:b,propertyName:h,manyAttribute:this});
b[g]=c;a=b.get("relationships");if(!a){b.set("relationships",a=[])}a.push(c)}return c
},fromType:function(b,e,f){var c=[];if(!SC.isArray(f)){throw"Expects toMany attribute to be an array"
}var a=f.get("length");for(var d=0;d<a;d++){c[d]=f.objectAt(d).get("id")}return c
},inverseDidRemoveRecord:function(a,b,c,d){var e=a.get(b);if(e){e.removeInverseRecord(c)
}},inverseDidAddRecord:function(a,b,c,d){var e=a.get(b);if(e){e.addInverseRecord(c)
}}});sc_require("models/record");sc_require("models/record_attribute");SC.SingleAttribute=SC.RecordAttribute.extend({inverse:null,isMaster:YES,call:function(c,j,b){var a=this.get("key")||j,h,g,k,f,e,d;
if(b!==undefined){if(b&&!SC.kindOf(b,SC.Record)){throw"%@ is not an instance of SC.Record".fmt(b)
}h=this.get("inverse");if(h){k=this._scsa_call(c,j)}d=this.fromType(c,j,b);c.writeAttribute(a,d,!this.get("isMaster"));
e=b;if(h&&(k!==b)){if(k&&(f=k[h])){f.inverseDidRemoveRecord(k,h,c,j)}if(b&&(f=b[h])){f.inverseDidAddRecord(b,h,c,j)
}}}else{e=this._scsa_call(c,j,b)}return e},_scsa_call:SC.RecordAttribute.prototype.call,inverseDidRemoveRecord:function(c,f,g,h){var b=this.get("inverse"),e=this._scsa_call(c,f),d=this.get("isMaster"),a;
c.writeAttribute(f,null,!d);c.notifyPropertyChange(f);if((e!==g)||(h!==b)){if(e&&(a=e[b])){a.inverseDidRemoveRecord(e,b,c,f)
}}},inverseDidAddRecord:function(a,h,c,g){var e=this.get("inverse"),j=this._scsa_call(a,h),f=this.get("isMaster"),d,b;
b=this.fromType(a,h,c);a.writeAttribute(h,b,!f);a.notifyPropertyChange(h);if((j!==c)||(g!==e)){if(j&&(d=j[e])){d.inverseDidRemoveRecord(j,e,a,h)
}}}});SC.ChildArray=SC.Object.extend(SC.Enumerable,SC.Array,{defaultRecordType:null,record:null,propertyName:null,children:null,store:function(){return this.get("record").get("store")
}.property("record").cacheable(),storeKey:function(){return this.get("record").get("storeKey")
}.property("record").cacheable(),readOnlyChildren:function(){return this.get("record").readAttribute(this.get("propertyName"))
}.property(),editableChildren:function(){var a=this.get("store"),d=this.get("storeKey"),c=this.get("propertyName"),b,e;
b=a.readEditableProperty(d,c);if(!b){e=a.readEditableDataHash(d);b=e[c]=[]}if(b!==this._prevChildren){this.recordPropertyDidChange()
}return b}.property(),length:function(){var a=this.get("readOnlyChildren");return a?a.length:0
}.property("readOnlyChildren"),objectAt:function(b){var e=this._records,d=this.get("readOnlyChildren"),f,c;
var a=d?d.length:0;if(!d){return undefined}if(e&&(c=e[b])){return c}if(!e){this._records=e=[]
}if(b>=a){return undefined}f=d.objectAt(b);if(!f){return undefined}e[b]=c=this._materializeChild(f);
return c},replace:function(k,a,j){var b=this.get("editableChildren"),g=j?(j.get?j.get("length"):j.length):0,f=this.get("record"),d=this.get("propertyName"),h,c;
b.replace(k,a,j);for(var e=k;e<=k+a;e+=1){this.objectAt(e)}f.recordDidChange(d);return this
},normalize:function(){this.forEach(function(b,a){if(b.normalize){b.normalize()}})
},_materializeChild:function(e){var h=this.get("store"),b=this.get("record"),d=this.get("defaultRecordType"),a,f,j,c;
if(!b){return undefined}var g=b.get("childRecordNamespace");if(e.type&&!SC.none(g)){d=g[e.type]
}if(!d||SC.typeOf(d)!==SC.T_CLASS){throw"ChildrenArray: Error during transform: Invalid record type."
}c=d.prototype.primaryKey||"childRecordKey";a=e[c];j=h.storeKeyExists(d,a);if(j){f=h.materializeRecord(j)
}else{f=b.registerChildRecord(d,e)}return f},recordPropertyDidChange:function(d){if(d&&!d.contains(this.get("propertyName"))){return this
}var b=this.get("readOnlyChildren");var c=this._prevChildren,e=this._childrenContentDidChange;
if(b===c){return this}if(c){c.removeObserver("[]",this,e)}this._prevChildren=b;if(b){b.addObserver("[]",this,e)
}var a=(b)?b.propertyRevision:-1;this._childrenContentDidChange(b,"[]",b,a)},_childrenContentDidChange:function(d,b,c,a){this._records=null;
this.enumerableContentDidChange()},init:function(){arguments.callee.base.apply(this,arguments);
this.recordPropertyDidChange()}});SC.ManyArray=SC.Object.extend(SC.Enumerable,SC.Array,{recordType:null,record:null,propertyName:null,manyAttribute:null,store:function(){return this.get("record").get("store")
}.property("record").cacheable(),storeKey:function(){return this.get("record").get("storeKey")
}.property("record").cacheable(),readOnlyStoreIds:function(){return this.get("record").readAttribute(this.get("propertyName"))
}.property(),editableStoreIds:function(){var a=this.get("store"),d=this.get("storeKey"),c=this.get("propertyName"),b,e;
b=a.readEditableProperty(d,c);if(!b){e=a.readEditableDataHash(d);b=e[c]=[]}if(b!==this._prevStoreIds){this.recordPropertyDidChange()
}return b}.property(),isEditable:function(){var a=this.manyAttribute;return a?a.get("isEditable"):NO
}.property("manyAttribute").cacheable(),inverse:function(){var a=this.manyAttribute;
return a?a.get("inverse"):null}.property("manyAttribute").cacheable(),isMaster:function(){var a=this.manyAttribute;
return a?a.get("isMaster"):null}.property("manyAttribute").cacheable(),orderBy:function(){var a=this.manyAttribute;
return a?a.get("orderBy"):null}.property("manyAttribute").cacheable(),length:function(){var a=this.get("readOnlyStoreIds");
return a?a.get("length"):0}.property("readOnlyStoreIds"),objectAt:function(a){var g=this._records,f=this.get("readOnlyStoreIds"),c=this.get("store"),h=this.get("recordType"),e,d,b;
if(!f||!c){return undefined}if(g&&(d=g[a])){return d}if(!g){this._records=g=[]}b=f.objectAt(a);
if(b){e=c.storeKeyFor(h,b);if(c.readStatus(e)===SC.Record.EMPTY){c.retrieveRecord(h,null,e)
}g[a]=d=c.materializeRecord(e)}return d},replace:function(n,d,m){if(!this.get("isEditable")){throw"%@.%@[] is not editable".fmt(this.get("record"),this.get("propertyName"))
}var c=this.get("editableStoreIds"),k=m?(m.get?m.get("length"):m.length):0,h=this.get("record"),e=this.get("propertyName"),g,o,a,b,f,l,j;
a=[];for(g=0;g<k;g++){a[g]=m.objectAt(g).get("id")}f=this.get("inverse");if(f&&d>0){b=SC.ManyArray._toRemove;
if(b){SC.ManyArray._toRemove=null}else{b=[]}for(g=0;g<d;g++){b[g]=this.objectAt(g)
}}c.replace(n,d,a);if(f){for(g=0;g<d;g++){j=b[g];l=j?j[f]:null;if(l&&l.inverseDidRemoveRecord){l.inverseDidRemoveRecord(j,f,h,e)
}}if(b){b.length=0;if(!SC.ManyArray._toRemove){SC.ManyArray._toRemove=b}}for(g=0;
g<k;g++){j=m.objectAt(g);l=j?j[f]:null;if(l&&l.inverseDidAddRecord){l.inverseDidAddRecord(j,f,h,e)
}}}if(h&&(!f||this.get("isMaster"))){h.recordDidChange(e)}return this},removeInverseRecord:function(c){if(!c){return this
}var e=c.get("id"),d=this.get("editableStoreIds"),a=(d&&e)?d.indexOf(e):-1,b;if(a>=0){d.removeAt(a);
if(this.get("isMaster")&&(b=this.get("record"))){b.recordDidChange(this.get("propertyName"))
}}return this},addInverseRecord:function(d){if(!d){return this}var g=d.get("id"),e=this.get("editableStoreIds"),f=this.get("orderBy"),b=e.get("length"),a,c;
if(f){a=this._findInsertionLocation(d,0,b,f)}else{a=b}e.insertAt(a,d.get("id"));if(this.get("isMaster")&&(c=this.get("record"))){c.recordDidChange(this.get("propertyName"))
}return this},_findInsertionLocation:function(g,d,c,f){var b=d+Math.floor((c-d)/2),e=this.objectAt(b),a=this._compare(g,e,f);
if(a<0){if(b===0){return b}else{return this._findInsertionLocation(g,0,b,f)}}else{if(a>0){if(b>=c){return b
}else{return this._findInsertionLocation(g,b,c,f)}}else{return b}}},_compare:function(f,e,j){var h=SC.typeOf(j),g,d,c;
if(h===SC.T_FUNCTION){g=j(f,e)}else{if(h===SC.T_STRING){g=SC.compare(f,e)}else{c=j.get("length");
g=0;for(d=0;(g===0)&&(d<c);d++){g=SC.compare(f,e)}}}return g},recordPropertyDidChange:function(c){if(c&&!c.contains(this.get("propertyName"))){return this
}var e=this.get("readOnlyStoreIds");var b=this._prevStoreIds,d=this._storeIdsContentDidChange;
if(e===b){return this}if(b){b.removeObserver("[]",this,d)}this._prevStoreIds=e;if(e){e.addObserver("[]",this,d)
}var a=(e)?e.propertyRevision:-1;this._storeIdsContentDidChange(e,"[]",e,a)},_storeIdsContentDidChange:function(d,b,c,a){this._records=null;
this.enumerableContentDidChange()},unknownProperty:function(b,c){var a=this.reducedProperty(b,c);
return a===undefined?arguments.callee.base.apply(this,arguments):a},init:function(){arguments.callee.base.apply(this,arguments);
this.recordPropertyDidChange()}});sc_require("models/record");SC.Store=SC.Object.extend({name:null,nestedStores:null,dataSource:null,isNested:NO,commitRecordsAutomatically:NO,from:function(a){this.set("dataSource",a);
return this},_getDataSource:function(){var a=this.get("dataSource");if(typeof a===SC.T_STRING){a=SC.objectForPropertyPath(a);
if(a){a=a.create()}if(a){this.set("dataSource",a)}}return a},cascade:function(a){var b=SC.A(arguments);
a=SC.CascadeDataSource.create({dataSources:b});return this.from(a)},chain:function(b,c){if(!b){b={}
}b.parentStore=this;if(c){if(SC.typeOf(c)!=="class"){throw new Error("%@ is not a valid class".fmt(c))
}if(!SC.kindOf(c,SC.NestedStore)){throw new Error("%@ is not a type of SC.NestedStore".fmt(c))
}}else{c=SC.NestedStore}var a=c.create(b),d=this.nestedStores;if(!d){d=this.nestedStores=[]
}d.push(a);return a},willDestroyNestedStore:function(a){if(this.nestedStores){this.nestedStores.removeObject(a)
}return this},hasNestedStore:function(a){while(a&&(a!==this)){a=a.get("parentStore")
}return a===this},dataHashes:null,statuses:null,revisions:null,editables:null,changelog:null,recordArraysWithQuery:null,recordErrors:null,queryErrors:null,storeKeyEditState:function(b){var c=this.editables,a=this.locks;
return(c&&c[b])?SC.Store.EDITABLE:SC.Store.LOCKED},readDataHash:function(a){return this.dataHashes[a]
},readEditableDataHash:function(b){var a=this.dataHashes[b];if(!a){return a}var c=this.editables;
if(!c){c=this.editables=[]}if(!c[b]){c[b]=1;a=this.dataHashes[b]=SC.clone(a)}return a
},readEditableProperty:function(c,a){var e=this.readEditableDataHash(c),d=this.editables[c],b=e[a];
if(d===1){d=this.editables[c]={}}if(!d[a]){b=e[a];if(b&&b.isCopyable){b=e[a]=b.copy()
}d[a]=YES}return b},writeDataHash:function(b,d,a){if(d){this.dataHashes[b]=d}if(a){this.statuses[b]=a
}var c=this.editables;if(!c){c=this.editables=[]}c[b]=1;return this},removeDataHash:function(c,b){var a;
this.dataHashes[c]=null;this.statuses[c]=b||SC.Record.EMPTY;a=this.revisions[c]=this.revisions[c];
var d=this.editables;if(d){d[c]=0}return this},readStatus:function(a){this.readDataHash(a);
return this.statuses[a]||SC.Record.EMPTY},peekStatus:function(a){return this.statuses[a]||SC.Record.EMPTY
},writeStatus:function(b,a){return this.writeDataHash(b,null,a)},dataHashDidChange:function(h,d,e,f){if(!d){d=SC.Store.generateStoreKey()
}var c,b,a,g;c=SC.typeOf(h)===SC.T_ARRAY;if(c){b=h.length}else{b=1;g=h}for(a=0;a<b;
a++){if(c){g=h[a]}this.revisions[g]=d;this._notifyRecordPropertyChange(g,e,f)}return this
},_notifyRecordPropertyChange:function(n,e,m){var a=this.records,g=this.get("nestedStores"),h=SC.Store,c,b,f,l,k,d,o;
f=g?g.length:0;for(l=0;l<f;l++){k=g[l];d=k.peekStatus(n);b=k.storeKeyEditState(n);
if(b===h.INHERITED){k._notifyRecordPropertyChange(n,e,m)}else{if(d&SC.Record.BUSY){if(k.get("hasChanges")){throw h.CHAIN_CONFLICT_ERROR
}k.reset()}}}var j=this.recordPropertyChanges;if(!j){j=this.recordPropertyChanges={storeKeys:SC.CoreSet.create(),records:SC.CoreSet.create(),hasDataChanges:SC.CoreSet.create(),propertyForStoreKeys:{}}
}j.storeKeys.add(n);if(a&&(c=a[n])){j.records.push(n);if(!e){j.hasDataChanges.push(n)
}if(m){if(!(o=j.propertyForStoreKeys[n])){o=j.propertyForStoreKeys[n]=SC.CoreSet.create()
}if(o!=="*"){o.add(m)}}else{j.propertyForStoreKeys[n]="*"}}this.invokeOnce(this.flush);
return this},flush:function(){if(!this.recordPropertyChanges){return this}var j=this.recordPropertyChanges,h=j.storeKeys,m=j.hasDataChanges,a=j.records,f=j.propertyForStoreKeys,d=SC.CoreSet.create(),c,b,e,k,g,l,n;
h.forEach(function(o){if(a.contains(o)){e=m.contains(o)?NO:YES;c=this.records[o];
n=f?f[o]:null;if(n==="*"){n=null}a.remove(o);if(c){c.storeDidChangeProperties(e,n)
}}b=SC.Store.recordTypeFor(o);d.add(b)},this);if(h.get("length")>0){this._notifyRecordArrays(h,d)
}h.clear();m.clear();a.clear();this.recordPropertyChanges.propertyForStoreKeys={};
return this},reset:function(){this.dataHashes={};this.revisions={};this.statuses={};
this.chainedChanges=this.locks=this.editables=null;this.changelog=null;this.recordErrors=null;
this.queryErrors=null;var a=this.records,b;if(a){for(b in a){if(!a.hasOwnProperty(b)){continue
}this._notifyRecordPropertyChange(parseInt(b,10),NO)}}this.set("hasChanges",NO)},commitChangesFromNestedStore:function(k,l,c){if(!c){this._verifyLockRevisions(l,k.locks)
}var g=l.length,e,o,f,a,n,b,d,m,j;b=this.revisions;f=this.dataHashes;a=this.statuses;
n=this.editables;if(!n){n=this.editables=[]}d=k.dataHashes;j=k.revisions;m=k.statuses;
for(e=0;e<g;e++){o=l[e];f[o]=d[o];a[o]=m[o];b[o]=j[o];n[o]=0;this._notifyRecordPropertyChange(o,NO)
}var p=this.changelog,h=k.changelog;if(h){if(!p){p=this.changelog=SC.CoreSet.create()
}p.addEach(h)}this.changelog=p;if(!this.get("parentStore")){this.flush()}return this
},_verifyLockRevisions:function(f,h){var a=f.length,c=this.revisions,e,g,d,b;if(h&&c){for(e=0;
e<a;e++){g=f[e];d=h[g]||1;b=c[g]||1;if(d<b){throw SC.Store.CHAIN_CONFLICT_ERROR}}}return this
},find:function(b,a){if(SC.typeOf(b)===SC.T_STRING){b=SC.objectForPropertyPath(b)
}if((arguments.length===1)&&!(b&&b.get&&b.get("isRecord"))){if(!b){throw new Error("SC.Store#find() must pass recordType or query")
}if(!b.isQuery){b=SC.Query.local(b)}return this._findQuery(b,YES,YES)}else{return this._findRecord(b,a)
}},findAll:function(c,a,b){console.warn("SC.Store#findAll() will be removed in a future version of SproutCore.  Use SC.Store#find() instead");
if(!c||!c.isQuery){c=SC.Query.local(c,a,b)}return this._findQuery(c,YES,YES)},_findQuery:function(f,a,e){var b=this._scst_recordArraysByQuery,d=SC.guidFor(f),c,g;
if(!b){b=this._scst_recordArraysByQuery={}}c=b[d];if(!c&&a){b[d]=c=SC.RecordArray.create({store:this,query:f});
g=this.get("recordArrays");if(!g){this.set("recordArrays",g=SC.Set.create())}g.add(c);
if(e){this.refreshQuery(f)}}this.flush();return c},_findRecord:function(c,b){var a;
if(c&&c.get&&c.get("isRecord")){a=c.get("storeKey")}else{a=b?c.storeKeyFor(b):null
}if(a&&(this.readStatus(a)===SC.Record.EMPTY)){a=this.retrieveRecord(c,b)}return a?this.materializeRecord(a):null
},recordArrayWillDestroy:function(b){var a=this._scst_recordArraysByQuery,c=this.get("recordArrays");
if(a){delete a[SC.guidFor(b.get("query"))]}if(c){c.remove(b)}return this},refreshQuery:function(d){if(!d){throw new Error("refreshQuery() requires a query")
}var a=this._scst_recordArraysByQuery,c=a?a[SC.guidFor(d)]:null,b=this._getDataSource();
if(b&&b.fetch){if(c){c.storeWillFetchQuery(d)}b.fetch.call(b,this,d)}return this},_notifyRecordArrays:function(b,a){var c=this.get("recordArrays");
if(!c){return this}c.forEach(function(d){if(d){d.storeDidChangeStoreKeys(b,a)}},this);
return this},recordsFor:function(f){var d=[],a=f.storeKeysById(),e,c,b;for(e in a){c=a[e];
if(this.readStatus(c)!==SC.RECORD_EMPTY){d.push(c)}}if(d.length>0){b=SC.RecordArray.create({store:this,storeKeys:d})
}else{b=d}return b},_TMP_REC_ATTRS:{},materializeRecord:function(d){var a=this.records,c,e,b;
if(!a){a=this.records={}}c=a[d];if(c){return c}e=SC.Store.recordTypeFor(d);if(!e){return null
}b=this._TMP_REC_ATTRS;b.storeKey=d;b.store=this;c=a[d]=e.create(b);return c},createRecord:function(b,d,a){var j,k,c,h=SC.Record,e,g,f;
if(!a&&(j=b.prototype.primaryKey)){a=d[j];g=b.prototype[j]?b.prototype[j].defaultValue:null;
if(!a&&SC.typeOf(g)===SC.T_FUNCTION){a=d[j]=g()}}k=a?b.storeKeyFor(a):SC.Store.generateStoreKey();
c=this.readStatus(k);if((c&h.BUSY)||(c&h.READY)||(c==h.DESTROYED_DIRTY)){throw a?h.RECORD_EXISTS_ERROR:h.BAD_STATE_ERROR
}else{if(!a&&(c==SC.DESTROYED_CLEAN||c==SC.ERROR)){throw h.BAD_STATE_ERROR}}this.writeDataHash(k,(d?d:{}),h.READY_NEW);
SC.Store.replaceRecordTypeFor(k,b);this.dataHashDidChange(k);e=this.changelog;if(!e){e=SC.Set.create()
}e.add(k);this.changelog=e;if(this.get("commitRecordsAutomatically")){this.invokeLast(this.commitRecords)
}f=this.materializeRecord(k);if(f){f.propagateToAggregates()}return f},createRecords:function(d,j,a){var g=[],c,b,e,f=j.length,h;
e=SC.typeOf(d)===SC.T_ARRAY;if(!e){c=d}for(h=0;h<f;h++){if(e){c=d[h]||SC.Record}b=a?a[h]:undefined;
g.push(this.createRecord(c,j[h],b))}return g},unloadRecord:function(f,e,d,c){if(d===undefined){d=f.storeKeyFor(e)
}var b=this.readStatus(d),a=SC.Record;c=c||a.EMPTY;if((b===a.BUSY_DESTROYING)||(b&a.DESTROYED)){return this
}else{if(b&a.BUSY){throw a.BUSY_ERROR}else{b=c}}this.removeDataHash(d,b);this.dataHashDidChange(d);
return this},unloadRecords:function(d,a,g,e){var h,f,j,b,c,k;if(g===undefined){h=a.length;
f=SC.typeOf(d)===SC.T_ARRAY;if(!f){c=d}for(j=0;j<h;j++){if(f){c=d[j]||SC.Record}b=a?a[j]:undefined;
this.unloadRecord(c,b,undefined,e)}}else{h=g.length;for(j=0;j<h;j++){k=g?g[j]:undefined;
this.unloadRecord(undefined,undefined,k,e)}}return this},destroyRecord:function(f,e,d){if(d===undefined){d=f.storeKeyFor(e)
}var b=this.readStatus(d),c,a=SC.Record;if((b===a.BUSY_DESTROYING)||(b&a.DESTROYED)){return this
}else{if(b==a.EMPTY){throw a.NOT_FOUND_ERROR}else{if(b&a.BUSY){throw a.BUSY_ERROR
}else{if(b==a.READY_NEW){b=a.DESTROYED_CLEAN}else{b=a.DESTROYED_DIRTY}}}}this.writeStatus(d,b);
this.dataHashDidChange(d);c=this.changelog;if(!c){c=this.changelog=SC.Set.create()
}((b&a.DIRTY)?c.add(d):c.remove(d));this.changelog=c;if(this.get("commitRecordsAutomatically")){this.invokeLast(this.commitRecords)
}return this},destroyRecords:function(d,a,f){var g,e,h,b,c,j;if(f===undefined){g=a.length;
e=SC.typeOf(d)===SC.T_ARRAY;if(!e){c=d}for(h=0;h<g;h++){if(e){c=d[h]||SC.Record}b=a?a[h]:undefined;
this.destroyRecord(c,b,undefined)}}else{g=f.length;for(h=0;h<g;h++){j=f?f[h]:undefined;
this.destroyRecord(undefined,undefined,j)}}return this},recordDidChange:function(h,g,f,d,c){if(f===undefined){f=h.storeKeyFor(g)
}var b=this.readStatus(f),e,a=SC.Record;if(b&a.BUSY){throw a.BUSY_ERROR}else{if(!(b&a.READY)){throw a.NOT_FOUND_ERROR
}else{if(b!=a.READY_NEW){this.writeStatus(f,a.READY_DIRTY)}}}this.dataHashDidChange(f,null,c,d);
e=this.changelog;if(!e){e=this.changelog=SC.Set.create()}e.add(f);this.changelog=e;
if(this.get("commitRecordsAutomatically")){this.invokeLast(this.commitRecords)}return this
},recordsDidChange:function(d,a,f){var g,e,h,b,c,j;if(f===undefined){g=a.length;e=SC.typeOf(d)===SC.T_ARRAY;
if(!e){c=d}for(h=0;h<g;h++){if(e){c=d[h]||SC.Record}b=a?a[h]:undefined;j=f?f[h]:undefined;
this.recordDidChange(c,b,j)}}else{g=f.length;for(h=0;h<g;h++){j=f?f[h]:undefined;
this.recordDidChange(undefined,undefined,j)}}return this},retrieveRecords:function(f,b,j,c){var a=this._getDataSource(),h=SC.typeOf(f)===SC.T_ARRAY,k=(!j)?b.length:j.length,l=[],g=SC.Store.generateStoreKey(),n=SC.Record,d,o,p,e,m;
if(!h){d=f}for(o=0;o<k;o++){if(j){p=j[o]}else{if(h){d=f[o]}p=d.storeKeyFor(b[o])}e=this.readStatus(p);
if((e==n.EMPTY)||(e==n.ERROR)||(e==n.DESTROYED_CLEAN)){this.writeStatus(p,n.BUSY_LOADING);
this.dataHashDidChange(p,g,YES);l.push(p)}else{if(c){if(e&n.READY){this.writeStatus(p,n.BUSY_REFRESH|(e&3));
this.dataHashDidChange(p,g,YES);l.push(p)}else{if((e==n.BUSY_DESTROYING)||(e==n.BUSY_CREATING)||(e==n.BUSY_COMMITTING)){throw n.BUSY_ERROR
}else{if(e==n.DESTROYED_DIRTY){throw n.BAD_STATE_ERROR}}}}}}m=NO;if(a){m=a.retrieveRecords.call(a,this,l,b)
}if(!m){k=l.length;g=SC.Store.generateStoreKey();for(o=0;o<k;o++){p=l[o];e=this.readStatus(p);
if(e===n.BUSY_LOADING){this.writeStatus(p,n.ERROR);this.dataHashDidChange(p,g,YES)
}else{if(e&n.BUSY_REFRESH){this.writeStatus(p,n.READY|(e&3));this.dataHashDidChange(p,g,YES)
}}}l.length=0}return l},_TMP_RETRIEVE_ARRAY:[],retrieveRecord:function(f,e,b,c){var d=this._TMP_RETRIEVE_ARRAY,a;
if(b){d[0]=b;b=d;e=null}else{d[0]=e;e=d}a=this.retrieveRecords(f,e,b,c);d.length=0;
return a[0]},refreshRecord:function(c,b,a){return !!this.retrieveRecord(c,b,a,YES)
},refreshRecords:function(b,c,d){var a=this.retrieveRecords(b,c,d,YES);return a&&a.length>0
},commitRecords:function(e,m,b,p){var l=this._getDataSource(),g=SC.typeOf(e)===SC.T_ARRAY,c=[],j=[],k=[],q=SC.Store.generateStoreKey(),f=SC.Record,a,h,d,n,s,r,o;
if(!e&&!m&&!b){b=this.changelog}o=b?b.get("length"):(m?m.get("length"):0);for(h=0;
h<o;h++){if(b){d=b[h]}else{if(g){a=e[h]||SC.Record}else{a=e}d=a.storeKeyFor(m[h])
}n=this.readStatus(d);if((n==f.EMPTY)||(n==f.ERROR)){throw f.NOT_FOUND_ERROR}else{if(n==f.READY_NEW){this.writeStatus(d,f.BUSY_CREATING);
this.dataHashDidChange(d,q,YES);c.push(d)}else{if(n==f.READY_DIRTY){this.writeStatus(d,f.BUSY_COMMITTING);
this.dataHashDidChange(d,q,YES);j.push(d)}else{if(n==f.DESTROYED_DIRTY){this.writeStatus(d,f.BUSY_DESTROYING);
this.dataHashDidChange(d,q,YES);k.push(d)}else{if(n==f.DESTROYED_CLEAN){this.dataHashDidChange(d,q,YES)
}}}}}}if(l&&(o>0||p)){r=l.commitRecords.call(l,this,c,j,k,p)}if(r&&!e&&!m){if(b===this.changelog){this.changelog=null
}else{this.changelog.removeEach(b)}}return r},commitRecord:function(f,e,b,c){var d=this._TMP_RETRIEVE_ARRAY,a;
if(e===undefined&&b===undefined){return NO}if(b!==undefined){d[0]=b;b=d;e=null}else{d[0]=e;
e=d}a=this.commitRecords(f,e,b,c);d.length=0;return a},cancelRecords:function(e,b,j){var a=this._getDataSource(),g=SC.typeOf(e)===SC.T_ARRAY,l=SC.Record,k=[],f,h,m,c,d,n;
h=(j===undefined)?b.length:j.length;for(m=0;m<h;m++){if(g){d=e[m]||SC.Record}else{d=e||SC.Record
}c=b?b[m]:undefined;if(j===undefined){n=d.storeKeyFor(c)}else{n=j?j[m]:undefined}if(n){f=this.readStatus(n);
if((f==l.EMPTY)||(f==l.ERROR)){throw l.NOT_FOUND_ERROR}k.push(n)}}if(a){a.cancel.call(a,this,k)
}return this},cancelRecord:function(e,d,b){var c=this._TMP_RETRIEVE_ARRAY,a;if(b!==undefined){c[0]=b;
b=c;d=null}else{c[0]=d;d=c}a=this.cancelRecords(e,d,b);c.length=0;return this},loadRecord:function(g,d,f){var a=SC.Record,c,b,e;
g=g||SC.Record;b=g.prototype.primaryKey;f=f||d[b];c=e=g.storeKeyFor(f);if(this.readStatus(e)&a.BUSY){this.dataSourceDidComplete(e,d,f)
}else{this.pushRetrieve(g,f,d,e)}return c},loadRecords:function(d,n,a){var f=SC.typeOf(d)===SC.T_ARRAY,g=n.get("length"),h=[],j=SC.Record,c,b,l,k,e,m;
if(!f){c=d||SC.Record;l=c.prototype.primaryKey}for(k=0;k<g;k++){e=n.objectAt(k);if(f){c=d.objectAt(k)||SC.Record;
l=c.prototype.primaryKey}b=(a)?a.objectAt(k):e[l];h[k]=this.loadRecord(c,e,b)}return h
},readError:function(a){var b=this.recordErrors;return b?b[a]:undefined},readQueryError:function(a){var b=this.queryErrors;
return b?b[SC.guidFor(a)]:undefined},dataSourceDidCancel:function(c){var b=this.readStatus(c),a=SC.Record;
if(!(b&a.BUSY)){throw a.BAD_STATE_ERROR}switch(b){case a.BUSY_LOADING:b=a.EMPTY;break;
case a.BUSY_CREATING:b=a.READY_NEW;break;case a.BUSY_COMMITTING:b=a.READY_DIRTY;break;
case a.BUSY_REFRESH_CLEAN:b=a.READY_CLEAN;break;case a.BUSY_REFRESH_DIRTY:b=a.READY_DIRTY;
break;case a.BUSY_DESTROYING:b=a.DESTROYED_DIRTY;break;default:throw a.BAD_STATE_ERROR
}this.writeStatus(c,b);this.dataHashDidChange(c,null,YES);return this},dataSourceDidComplete:function(f,e,d){var b=this.readStatus(f),a=SC.Record,c;
if(!(b&a.BUSY)){throw a.BAD_STATE_ERROR}if(b===a.BUSY_DESTROYING){throw a.BAD_STATE_ERROR
}else{b=a.READY_CLEAN}this.writeStatus(f,b);if(e){this.writeDataHash(f,e,b)}if(d){SC.Store.replaceIdFor(f,d)
}c=e||d?NO:YES;this.dataHashDidChange(f,null,c);return this},dataSourceDidDestroy:function(c){var b=this.readStatus(c),a=SC.Record;
if(!(b&a.BUSY)){throw a.BAD_STATE_ERROR}else{b=a.DESTROYED_CLEAN}this.removeDataHash(c,b);
this.dataHashDidChange(c);return this},dataSourceDidError:function(d,c){var b=this.readStatus(d),e=this.recordErrors,a=SC.Record;
if(!(b&a.BUSY)){throw a.BAD_STATE_ERROR}else{b=a.ERROR}if(c&&c.isError){if(!e){e=this.recordErrors=[]
}e[d]=c}this.writeStatus(d,b);this.dataHashDidChange(d,null,YES);return this},pushRetrieve:function(f,e,c,d){var b=SC.Record,a;
if(d===undefined){d=f.storeKeyFor(e)}a=this.readStatus(d);if(a==b.EMPTY||a==b.ERROR||a==b.READY_CLEAN||a==b.DESTROYED_CLEAN){a=b.READY_CLEAN;
if(c===undefined){this.writeStatus(d,a)}else{this.writeDataHash(d,c,a)}this.dataHashDidChange(d);
return d}return NO},pushDestroy:function(e,d,c){var b=SC.Record,a;if(c===undefined){c=e.storeKeyFor(d)
}a=this.readStatus(c);if(a==b.EMPTY||a==b.ERROR||a==b.READY_CLEAN||a==b.DESTROYED_CLEAN){a=b.DESTROYED_CLEAN;
this.removeDataHash(c,a);this.dataHashDidChange(c);return c}return NO},pushError:function(g,f,c,d){var b=SC.Record,a,e=this.recordErrors;
if(d===undefined){d=g.storeKeyFor(f)}a=this.readStatus(d);if(a==b.EMPTY||a==b.ERROR||a==b.READY_CLEAN||a==b.DESTROYED_CLEAN){a=b.ERROR;
if(c&&c.isError){if(!e){e=this.recordErrors=[]}e[d]=c}this.writeStatus(d,a);this.dataHashDidChange(d,null,YES);
return d}return NO},loadQueryResults:function(c,a){if(c.get("location")===SC.Query.LOCAL){throw new Error("Cannot load query results for a local query")
}var b=this._findQuery(c,YES,NO);if(b){b.set("storeKeys",a)}this.dataSourceDidFetchQuery(c);
return this},dataSourceDidFetchQuery:function(a){return this._scstore_dataSourceDidFetchQuery(a,YES)
},_scstore_dataSourceDidFetchQuery:function(d,a){var c=this._findQuery(d,a,NO),b=this.get("nestedStores"),e=b?b.get("length"):0;
if(c){c.storeDidFetchQuery(d)}while(--e>=0){b[e]._scstore_dataSourceDidFetchQuery(d,NO)
}return this},dataSourceDidCancelQuery:function(a){return this._scstore_dataSourceDidCancelQuery(a,YES)
},_scstore_dataSourceDidCancelQuery:function(d,a){var c=this._findQuery(d,a,NO),b=this.get("nestedStores"),e=b?b.get("length"):0;
if(c){c.storeDidCancelQuery(d)}while(--e>=0){b[e]._scstore_dataSourceDidCancelQuery(d,NO)
}return this},dataSourceDidErrorQuery:function(b,a){var c=this.queryErrors;if(a&&a.isError){if(!c){c=this.queryErrors={}
}c[SC.guidFor(b)]=a}return this._scstore_dataSourceDidErrorQuery(b,YES)},_scstore_dataSourceDidErrorQuery:function(d,a){var c=this._findQuery(d,a,NO),b=this.get("nestedStores"),e=b?b.get("length"):0;
if(c){c.storeDidErrorQuery(d)}while(--e>=0){b[e]._scstore_dataSourceDidErrorQuery(d,NO)
}return this},init:function(){arguments.callee.base.apply(this,arguments);this.reset()
},toString:function(){var b=this.get("name");if(!b){return arguments.callee.base.apply(this,arguments)
}else{var a=arguments.callee.base.apply(this,arguments);return"%@ (%@)".fmt(b,a)}},idFor:function(a){return SC.Store.idFor(a)
},recordTypeFor:function(a){return SC.Store.recordTypeFor(a)},storeKeyFor:function(b,a){return b.storeKeyFor(a)
},storeKeyExists:function(b,a){return b.storeKeyExists(a)},storeKeysFor:function(f){var a=[],e=f&&f.isEnumerable,c,d,b;
if(!this.statuses){return a}for(d in SC.Store.recordTypesByStoreKey){c=SC.Store.recordTypesByStoreKey[d];
if(e){b=f.contains(c)}else{b=c===f}if(b&&this.statuses[d]){a.push(parseInt(d,10))
}}return a},storeKeys:function(){var a=[],b;if(!this.statuses){return a}for(b in this.statuses){if(this.statuses[b]!=SC.Record.EMPTY){a.push(parseInt(b,10))
}}return a},statusString:function(a){var b=this.materializeRecord(a);return b.statusString()
}});SC.Store.mixin({CHAIN_CONFLICT_ERROR:new Error("Nested Store Conflict"),NO_PARENT_STORE_ERROR:new Error("Parent Store Required"),NESTED_STORE_UNSUPPORTED_ERROR:new Error("Unsupported In Nested Store"),NESTED_STORE_RETRIEVE_DIRTY_ERROR:new Error("Cannot Retrieve Dirty Record in Nested Store"),EDITABLE:"editable",LOCKED:"locked",INHERITED:"inherited",idsByStoreKey:[],recordTypesByStoreKey:{},queriesByStoreKey:[],nextStoreKey:1,generateStoreKey:function(){return this.nextStoreKey++
},idFor:function(a){return this.idsByStoreKey[a]},queryFor:function(a){return this.queriesByStoreKey[a]
},recordTypeFor:function(a){return this.recordTypesByStoreKey[a]},replaceIdFor:function(c,a){var d=this.idsByStoreKey[c],e,b;
if(d!==a){e=this.recordTypeFor(c);if(!e){throw new Error("replaceIdFor: storeKey %@ does not exist".fmt(c))
}this.idsByStoreKey[c]=a;b=e.storeKeysById();delete b[d];b[a]=c}return this},replaceRecordTypeFor:function(a,b){this.recordTypesByStoreKey[a]=b;
return this}});SC.Store.prototype.nextStoreIndex=1;SC.Store._getDefaultStore=function(){var a=this._store;
if(!a){this._store=a=SC.Store.create()}return a};SC.Store.updateRecords=function(f,g,h,c){console.warn("SC.Store.updateRecords() is deprecated.  Use loadRecords() instead");
var d=this._getDefaultStore(),b=f.length,a,e;if(!h){h=[];for(a=0;a<b;a++){h[a]=f[a].recordType
}}e=d.loadRecords(h,f);b=e.length;for(a=0;a<b;a++){e[a]=d.materializeRecord(e[a])
}return e};SC.Store.find=function(a,b){return this._getDefaultStore().find(b,a)};
SC.Store.findAll=function(a,b){return this._getDefaultStore().findAll(a,b)};sc_require("system/store");
SC.NestedStore=SC.Store.extend({hasChanges:NO,parentStore:null,isNested:YES,lockOnRead:YES,locks:null,chainedChanges:null,find:function(a){if(a&&a.isQuery&&a.get("location")!==SC.Query.LOCAL){throw"SC.Store#find() can only accept LOCAL queries in nested stores"
}return arguments.callee.base.apply(this,arguments)},commitChanges:function(b){if(this.get("hasChanges")){var a=this.get("parentStore");
a.commitChangesFromNestedStore(this,this.chainedChanges,b)}this.reset();return this
},discardChanges:function(){var c,f;if((c=this.records)&&(f=this.locks)){var b=this.get("parentStore"),h=b.revisions;
var g=this.revisions,e,d,a;for(e in c){if(!c.hasOwnProperty(e)){continue}if(!(d=f[e])){continue
}a=h[e];if((a!==d)||(g[e]>a)){this._notifyRecordPropertyChange(parseInt(e,10))}}}this.reset();
this.flush();return this},destroy:function(){this.discardChanges();var a=this.get("parentStore");
if(a){a.willDestroyNestedStore(this)}arguments.callee.base.apply(this,arguments);
return this},reset:function(){var a=this.get("parentStore");if(!a){throw SC.Store.NO_PARENT_STORE_ERROR
}this.dataHashes=SC.beget(a.dataHashes);this.revisions=SC.beget(a.revisions);this.statuses=SC.beget(a.statuses);
this.chainedChanges=this.locks=this.editables=null;this.changelog=null;this.set("hasChanges",NO)
},refreshQuery:function(b){var a=this.get("parentStore");if(a){a.refreshQuery(b)}return this
},readError:function(b){var a=this.get("parentStore");return a?a.readError(b):null
},readQueryError:function(b){var a=this.get("parentStore");return a?a.readQueryError(b):null
},storeKeyEditState:function(b){var c=this.editables,a=this.locks;return(c&&c[b])?SC.Store.EDITABLE:(a&&a[b])?SC.Store.LOCKED:SC.Store.INHERITED
},_lock:function(e){var d=this.locks,a,f;if(d&&d[e]){return this}if(!d){d=this.locks=[]
}f=this.editables;if(f){f[e]=0}var c=this.get("parentStore"),b;while(c&&(b=c.storeKeyEditState(e))===SC.Store.INHERITED){c=c.get("parentStore")
}if(c&&b===SC.Store.EDITABLE){this.dataHashes[e]=SC.clone(c.dataHashes[e]);if(!f){f=this.editables=[]
}f[e]=1}else{this.dataHashes[e]=this.dataHashes[e]}this.statuses[e]=this.statuses[e];
a=this.revisions[e]=this.revisions[e];d[e]=a||1;return this},readDataHash:function(a){if(this.get("lockOnRead")){this._lock(a)
}return this.dataHashes[a]},readEditableDataHash:function(a){this._lock(a);return arguments.callee.base.apply(this,arguments)
},writeDataHash:function(d,f,b){var c=this.locks,g=NO,a;if(f){this.dataHashes[d]=f
}else{this._lock(d);g=YES}if(b){this.statuses[d]=b}else{if(!g){this.statuses[d]=(this.statuses[d]||SC.Record.READY_NEW)
}}if(!g){a=this.revisions[d]=this.revisions[d];if(!c){c=this.locks=[]}if(!c[d]){c[d]=a||1
}}var e=this.editables;if(!e){e=this.editables=[]}e[d]=1;return this},removeDataHash:function(c,a){var b=this.locks;
if(!b){b=this.locks=[]}if(!b[c]){b[c]=this.revisions[c]||1}return arguments.callee.base.apply(this,arguments)
},dataHashDidChange:function(d,b,a,h){if(!b){b=SC.Store.generateStoreKey()}var c,e,g,j;
c=SC.typeOf(d)===SC.T_ARRAY;if(c){e=d.length}else{e=1;j=d}var f=this.chainedChanges;
if(!f){f=this.chainedChanges=SC.Set.create()}for(g=0;g<e;g++){if(c){j=d[g]}this._lock(j);
this.revisions[j]=b;f.add(j);this._notifyRecordPropertyChange(j,a,h)}this.setIfChanged("hasChanges",YES);
return this},commitChangesFromNestedStore:function(e,f,a){arguments.callee.base.apply(this,arguments);
var b=this.get("parentStore"),h=b.revisions,c;var k=this.locks,g=this.chainedChanges,d,j;
if(!k){k=this.locks=[]}if(!g){g=this.chainedChanges=SC.Set.create()}d=f.length;for(c=0;
c<d;c++){j=f[c];if(!k[j]){k[j]=h[j]||1}g.add(j)}this.setIfChanged("hasChanges",g.get("length")>0);
this.flush();return this},queryFor:function(c,a,b){return this.get("parentStore").queryFor(c,a,b)
},findAll:function(e,b,d,c,a){if(!a){a=this}return this.get("parentStore").findAll(e,b,d,c,a)
},retrieveRecords:function(f,n,b,c){var a=this.get("parentStore"),l,d,q,p=(!b)?n.length:b.length,j=SC.Record,o;
if(c){for(l=0;l<p;l++){d=!b?a.storeKeyFor(f,n[l]):b[l];o=this.peekStatus(d);if(o&j.DIRTY){throw SC.Store.NESTED_STORE_RETRIEVE_DIRTY_ERROR
}else{var g=this.dataHashes,k=this.revisions,h=this.statuses,m=this.editables,s=this.locks;
var e=NO;var r=NO;if(g&&g.hasOwnProperty(d)){delete g[d];e=YES}if(k&&k.hasOwnProperty(d)){delete k[d];
e=YES}if(m){delete m[d]}if(s){delete s[d]}if(h&&h.hasOwnProperty(d)){delete h[d];
if(!e){r=YES}e=YES}if(e){this._notifyRecordPropertyChange(d,r)}}}}return a.retrieveRecords(f,n,b,c)
},commitRecords:function(a,b,c){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR},commitRecord:function(c,b,a){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR
},cancelRecords:function(a,b,c){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR},cancelRecord:function(c,b,a){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR
},dataSourceDidCancel:function(a){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR},dataSourceDidComplete:function(c,b,a){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR
},dataSourceDidDestroy:function(a){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR},dataSourceDidError:function(b,a){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR
},pushRetrieve:function(d,c,a,b){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR},pushDestroy:function(c,b,a){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR
},pushError:function(d,c,a,b){throw SC.Store.NESTED_STORE_UNSUPPORTED_ERROR}});sc_require("models/record");
SC.RecordArray=SC.Object.extend(SC.Enumerable,SC.Array,{store:null,query:null,storeKeys:null,status:SC.Record.EMPTY,isEditable:function(){var a=this.get("query");
return a?a.get("isEditable"):NO}.property("query").cacheable(),length:function(){this.flush();
var a=this.get("storeKeys");return a?a.get("length"):0}.property("storeKeys").cacheable(),_scra_records:null,objectAt:function(a){this.flush();
var f=this._scra_records,e=this.get("storeKeys"),b=this.get("store"),d,c;if(!e||!b){return undefined
}if(f&&(c=f[a])){return c}if(!f){this._scra_records=f=[]}d=e.objectAt(a);if(d){if(b.peekStatus(d)===SC.Record.EMPTY){b.retrieveRecord(null,null,d)
}f[a]=c=b.materializeRecord(d)}return c},forEach:function(h,d){this.flush();var e=this._scra_records,b=this.get("storeKeys"),f=this.get("store"),c=b?b.get("length"):0,g,j,a;
if(!b||!f){return this}if(!e){e=this._scra_records=[]}if(!d){d=this}for(g=0;g<c;g++){a=e[g];
if(!a){a=e[g]=f.materializeRecord(b.objectAt(g))}h.call(d,a,g,this)}return this},replace:function(b,h,g){this.flush();
var e=this.get("storeKeys"),a=g?(g.get?g.get("length"):g.length):0,c,d;if(!e){throw"storeKeys required"
}var f=this.get("query");if(f&&!f.get("isEditable")){throw SC.RecordArray.NOT_EDITABLE
}d=[];for(c=0;c<a;c++){d[c]=g.objectAt(c).get("storeKey")}e.replace(b,h,d);return this
},contains:function(a){return this.indexOf(a)>=0},indexOf:function(b,a){if(!SC.kindOf(b,SC.Record)){return NO
}this.flush();var d=b.get("storeKey"),c=this.get("storeKeys");return c?c.indexOf(d,a):-1
},lastIndexOf:function(b,a){if(!SC.kindOf(b,SC.Record)){return NO}this.flush();var d=b.get("storeKey"),c=this.get("storeKeys");
return c?c.lastIndexOf(d,a):-1},add:function(a){if(!SC.kindOf(a,SC.Record)){return this
}if(this.indexOf(a)<0){this.pushObject(a)}return this},remove:function(a){if(!SC.kindOf(a,SC.Record)){return this
}this.removeObject(a);return this},find:function(a,b){if(a&&a.isQuery){return this.get("store").find(a.queryWithScope(this))
}else{return arguments.callee.base.apply(this,arguments)}},refresh:function(){this.get("store").refreshQuery(this.get("query"));
return this},reload:function(){this.flush(YES);return this},destroy:function(){if(!this.get("isDestroyed")){this.get("store").recordArrayWillDestroy(this)
}arguments.callee.base.apply(this,arguments)},storeWillFetchQuery:function(c){var b=this.get("status"),a=SC.Record;
if((b===a.EMPTY)||(b===a.ERROR)){b=a.BUSY_LOADING}if(b&a.READY){b=a.BUSY_REFRESH}this.setIfChanged("status",b);
return this},storeDidFetchQuery:function(a){this.setIfChanged("status",SC.Record.READY_CLEAN);
return this},storeDidCancelQuery:function(c){var b=this.get("status"),a=SC.Record;
if(b===a.BUSY_LOADING){b=a.EMPTY}else{if(b===a.BUSY_REFRESH){b=a.READY_CLEAN}}this.setIfChanged("status",b);
return this},storeDidErrorQuery:function(a){this.setIfChanged("status",SC.Record.ERROR);
return this},storeDidChangeStoreKeys:function(b,a){var c=this.get("query");if(c.get("location")!==SC.Query.LOCAL){return this
}if(!c.containsRecordTypes(a)){return this}var d=this._scq_changedStoreKeys;if(!d){d=this._scq_changedStoreKeys=SC.IndexSet.create()
}d.addEach(b);this.set("needsFlush",YES);this.enumerableContentDidChange();return this
},flush:function(a){if(this._insideFlush){this.set("needsFlush",YES);return this}if(!this.get("needsFlush")&&!a){return this
}this.set("needsFlush",NO);var j=this.get("query"),m=this.get("store");if(!m||!j||j.get("location")!==SC.Query.LOCAL){return this
}this._insideFlush=YES;var g=this.get("storeKeys"),e=this._scq_changedStoreKeys,f=NO,k=SC.Record,c,d,b,o,n,h;
var l=g;if(g&&!a){if(e){e.forEach(function(p){d=m.peekStatus(p);if(!(d&k.EMPTY)&&!((d&k.DESTROYED)||(d===k.BUSY_DESTROYING))){c=m.materializeRecord(p);
h=!!(c&&j.contains(c))}else{h=NO}if(h){if(g.indexOf(p)<0){if(!f){g=g.copy()}g.pushObject(p)
}}else{if(g.indexOf(p)>=0){if(!f){g=g.copy()}g.removeObject(p)}}},this);f=YES}}else{if(n=j.get("scope")){o=n.flush().get("storeKeys")
}else{if(b=j.get("expandedRecordTypes")){o=SC.IndexSet.create();b.forEach(function(p){o.addEach(m.storeKeysFor(b))
})}}g=[];o.forEach(function(p){d=m.peekStatus(p);if(!(d&k.EMPTY)&&!((d&k.DESTROYED)||(d===k.BUSY_DESTROYING))){c=m.materializeRecord(p);
if(c&&j.contains(c)){g.push(p)}}});f=YES}if(e){e.clear()}if(f){if(g&&(g===l)){g=g.copy()
}g=SC.Query.orderStoreKeys(g,j,m);if(SC.compare(l,g)!==0){this.set("storeKeys",SC.clone(g))
}}this._insideFlush=NO;return this},needsFlush:YES,isError:function(){return this.get("status")&SC.Record.ERROR
}.property("status").cacheable(),errorValue:function(){return this.get("isError")?SC.val(this.get("errorObject")):null
}.property("isError").cacheable(),errorObject:function(){if(this.get("isError")){var a=this.get("store");
return a.readQueryError(this.get("query"))||SC.Record.GENERIC_ERROR}else{return null
}}.property("isError").cacheable(),_storeKeysDidChange:function(){var d=this.get("storeKeys");
var c=this._prevStoreKeys,e=this._storeKeysContentDidChange,a=this._storeKeysStateDidChange;
if(d===c){return}if(c){c.removeObserver("[]",this,e)}this._prevStoreKeys=d;if(d){d.addObserver("[]",this,e)
}var b=(d)?d.propertyRevision:-1;this._storeKeysContentDidChange(d,"[]",d,b)}.observes("storeKeys"),_storeKeysContentDidChange:function(d,b,c,a){if(this._scra_records){this._scra_records.length=0
}this.beginPropertyChanges().notifyPropertyChange("length").enumerableContentDidChange().endPropertyChanges()
},init:function(){arguments.callee.base.apply(this,arguments);this._storeKeysDidChange()
}});SC.RecordArray.mixin({NOT_EDITABLE:SC.Error.desc("SC.RecordArray is not editable")});
if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/datastore");
/* @license
==========================================================================
SproutCore -- JavaScript Application Framework
copyright 2006-2009, Sprout Systems Inc., Apple Inc. and contributors.

Permission is hereby granted, free of charge, to any person obtaining a 
copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the 
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in 
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
DEALINGS IN THE SOFTWARE.

SproutCore and the SproutCore logo are trademarks of Sprout Systems, Inc.

For more information about SproutCore, visit http://www.sproutcore.com


==========================================================================
@license */
}if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore")
}SC.TableDelegate={isTableDelegate:YES,tableShouldResizeColumnTo:function(e,d,b){var c=d.get("minWidth")||0,a=d.get("maxWidth")||b;
b=Math.max(c,b);b=Math.min(a,b);return b},tableShouldResizeWidthTo:function(d,b){var c=d.get("minWidth")||0,a=d.get("maxWidth")||b;
b=Math.max(c,b);b=Math.min(a,b);return b}};SC.SORT_ASCENDING="ascending";SC.SORT_DESCENDING="descending";
SC.TableColumn=SC.Object.extend({key:null,title:null,width:100,minWidth:16,maxWidth:700,escapeHTML:NO,formatter:null,isVisible:YES,isFlexible:NO,isReorderable:YES,isSortable:YES,icon:null,tableHeader:null,sortState:null,tableContent:null});
sc_require("views/list");SC.TableRowView=SC.View.extend({classNames:["sc-table-row"],cells:[],acceptsFirstResponder:YES,tableView:null,init:function(){this._sctrv_handleChildren()
},columns:function(){return this.get("tableView").get("columns")}.property(),prepareContext:function(a,b){arguments.callee.base.apply(this,arguments);
a.setClass("sel",this.get("isSelected"))},render:function(b,c){var a=[];a.push((this.get("contentIndex")%2===0)?"even":"odd");
b.addClass(a);arguments.callee.base.apply(this,arguments)},renderChildViews:function(d,e){var c=this.get("cells"),b,a;
for(a=0;a<c.get("length");a++){b=c.objectAt(a);d=d.begin(b.get("tagName"));b.prepareContext(d,e);
d=d.end()}return d},layoutChildViews:function(){var c=this.get("cells"),d=this.get("columns"),b,f,a;
var h=0,e,g=this.get("tableView").get("rowHeight");for(a=0;a<c.get("length");a++){b=c.objectAt(a);
f=d.objectAt(a);e=f.get("width");b.adjust({left:h,width:e,height:g});h+=e;b.updateLayout()
}},_sctrv_layoutForChildAtColumnIndex:function(b){var c=this.get("columns"),e=this.get("tableView").get("rowHeight"),d={},f=0,a;
for(a=0;a<b;a++){f+=c.objectAt(a).get("width")}return{left:f,width:c.objectAt(b).get("width"),height:e}
},_sctrv_createTableCell:function(b,c){var a=SC.TableCellView.create({column:b,content:c});
return a},_sctrv_handleSelection:function(){this.displayDidChange()}.observes("isSelected"),_sctrv_handleChildren:function(){var g=this.get("content"),e=this.get("columns");
this.removeAllChildren();var f,d,h,c=[],b,a;for(a=0;a<e.get("length");a++){f=e.objectAt(a);
d=f.get("key");h=g?g.getPath(d):"";b=this._sctrv_createTableCell(f,h);c.push(b);this.appendChild(b)
}this.set("cells",c)}});sc_require("views/table");SC.TableHeaderView=SC.View.extend({classNames:["sc-table-header"],displayProperties:["sortState","isInDragMode"],acceptsFirstResponder:YES,isInDragMode:NO,hasHorizontalScroller:NO,hasVerticalScroller:NO,childViews:["dragModeView"],dragModeView:SC.ListView.design({isVisible:NO,layout:{left:0,right:0,bottom:0},init:function(){var a=this.get("parentView");
if(a){a.addObserver("isInDragMode",this,"_scthv_dragModeDidChange")}},_scthv_dragModeDidChange:function(){}}),column:null,render:function(b,f){var e=this.get("column"),d=e.get("icon"),a;
var c=b.begin("span");if(d){a='<img src="%@" class="icon" />'.fmt(d);c.push(a)}else{c.push(this.get("label"))
}c.end()},init:function(){var a=this.get("column");a.addObserver("width",this,"_scthv_layoutDidChange");
a.addObserver("maxWidth",this,"_scthv_layoutDidChange");a.addObserver("minWidth",this,"_scthv_layoutDidChange");
a.addObserver("sortState",this,"_scthv_sortStateDidChange");a.addObserver("tableContent",this,"_scthv_tableContentDidChange");
return arguments.callee.base.apply(this,arguments)},sortState:function(){return this.get("column").get("sortState")
}.property(),mouseDown:function(b){var a=this.get("tableView");return a?a.mouseDownInTableHeaderView(b,this):arguments.callee.base.apply(this,arguments)
},mouseUp:function(b){var a=this.get("tableView");return a?a.mouseUpInTableHeaderView(b,this):arguments.callee.base.apply(this,arguments)
},mouseDragged:function(b){var a=this.get("tableView");return a?a.mouseDraggedInTableHeaderView(b,this):arguments.callee.base.apply(this,arguments)
},_scthv_dragViewForHeader:function(){var b=this.get("layer").cloneNode(true);var a=SC.View.create({layer:b,parentView:this});
SC.$(b).css("backgroundColor","transparent").css("border","none").css("top",0).css("left",0);
return a},_scthv_enterDragMode:function(){this.set("isInDragMode",YES)},_scthv_exitDragMode:function(){this.set("isInDragMode",NO)
},_scthv_dragModeViewDidChange:function(){var a=this.get("dragModeView");if(a&&a.set){a.set("tableHeadView",this);
a.set("tableView",this.get("tableView"))}}.observes("dragModeView"),_scthv_layoutDidChange:function(c,b,f,a){var e=this.get("parentView");
e.invokeOnce(e.layoutChildViews);var d=this.get("layout")},_scthv_tableContentDidChange:function(){var b=this.get("column").get("tableContent");
var a=this.get("parentView")._scthv_columnContentFromTableContent(b,this.get("columnIndex"));
this.set("content",a)},_scthv_sortStateDidChange:function(){SC.RunLoop.begin();var a=this.get("column").get("sortState");
var b=this.get("classNames");b.removeObject("sc-table-header-sort-asc");b.removeObject("sc-table-header-sort-desc");
b.removeObject("sc-table-header-sort-active");if(a!==null){b.push("sc-table-header-sort-active")
}if(a===SC.SORT_ASCENDING){b.push("sc-table-header-sort-asc")}if(a===SC.SORT_DESCENDING){b.push("sc-table-header-sort-desc")
}this.displayDidChange();this.invokeOnce("updateLayer");SC.RunLoop.end()}});sc_require("views/table");
sc_require("views/table_header");SC.TableHeadView=SC.View.extend({layout:{height:18,left:0,right:0,top:0},classNames:["sc-table-head"],cells:[],acceptsFirstResponder:YES,dragOrder:null,init:function(){this._scthv_handleChildren()
},columns:function(){return this.get("parentView").get("columns")}.property(),renderChildViews:function(d,e){var c=this.get("cells"),b,a;
for(a=0;a<c.get("length");a++){b=c.objectAt(a);d=d.begin(b.get("tagName"));b.prepareContext(d,e);
d=d.end()}return d},layoutChildViews:function(){var c=this.get("cells"),b,a;for(a=0;
a<c.get("length");a++){b=c.objectAt(a);b.adjust(this._scthv_layoutForHeaderAtColumnIndex(a));
b.updateLayout()}},_scthv_enterDragMode:function(){var b=[],c=this.get("columns"),a;
for(a=0;a<c.get("length");a++){b.push(c.objectAt(a).get("key"))}this.set("dragOrder",b)
},_scthv_changeDragOrder:function(c,d){var b=this.get("dragOrder"),a=b.objectAt(c);
b.removeAt(idx);b.insertAt(d,a)},_scthv_reorderDragColumnViews:function(){}.observes("dragOrder"),_scthv_columnContentFromTableContent:function(d,g){var f=this.get("columns").objectAt(g),e=f.get("key"),c=[],b;
if(!d){return c}var a=this.get("parentView"),h=d.get("length");for(b=0;b<h;b++){c.push(d.objectAt(b).get(e))
}return c},_scthv_layoutForHeaderAtColumnIndex:function(b){var c=this.get("columns"),e=this.get("parentView").get("rowHeight"),d={},f=0,a;
for(a=0;a<b;a++){f+=c.objectAt(a).get("width")}return{left:f,width:c.objectAt(b).get("width"),height:e}
},_scthv_handleChildren:function(){var b=this.get("columns");var d=this.get("parentView");
var c=d.get("content");var a,j,f,e,k=[],h,g;for(g=0;g<b.get("length");g++){a=b.objectAt(g);
j=a.get("key");f=a.get("label");e=this._scthv_columnContentFromTableContent(c,g);
h=this._scthv_createTableHeader(a,f,e,g);k.push(h)}this.set("cells",k);if(k.length>0){this.replaceAllChildren(k)
}},_scthv_createTableHeader:function(e,d,f,c){var b=this.get("parentView");var a=SC.TableHeaderView.create({column:e,label:d,content:f,tableView:b,columnIndex:c});
return a}});sc_require("views/list");sc_require("views/table_row");sc_require("views/table_head");
sc_require("mixins/table_delegate");SC.TableView=SC.ListView.extend(SC.TableDelegate,{classNames:["sc-table-view"],childViews:"tableHeadView scrollView".w(),scrollView:SC.ScrollView.design({isVisible:YES,layout:{left:-1,right:0,bottom:0,top:19},hasHorizontalScroller:NO,borderStyle:SC.BORDER_NONE,contentView:SC.View.design({}),_sv_offsetDidChange:function(){this.get("parentView")._sctv_scrollOffsetDidChange()
}.observes("verticalScrollOffset","horizontalScrollOffset")}),hasHorizontalScroller:NO,hasVerticalScroller:NO,selectOnMouseDown:NO,containerView:function(){var a=this.get("scrollView");
return(a&&a.get)?a.get("contentView"):null}.property("scrollView"),layout:{left:0,right:0,top:0,bottom:0},init:function(){window.table=this;
return arguments.callee.base.apply(this,arguments)},canReorderContent:NO,isInDragMode:NO,mouseDownInTableHeaderView:function(a,c){var b=c.get("column");
if(!b.get("isReorderable")&&!b.get("isSortable")){return NO}this._mouseDownEvent=a;
this._mouseDownTimer=SC.Timer.schedule({target:this,action:"_scthv_enterDragMode",interval:300});
return YES},mouseUpInTableHeaderView:function(b,f){var d=this.get("isInDragMode");
if(!d){var c=f.get("column");this.set("sortedColumn",c);var a=c.get("sortState");
var e=a===SC.SORT_ASCENDING?SC.SORT_DESCENDING:SC.SORT_ASCENDING;c.set("sortState",e)
}this._dragging=false;if(this._mouseDownTimer){this._mouseDownTimer.invalidate()}},mouseDraggedInTableHeaderView:function(a,c){SC.RunLoop.begin();
var b=this.get("isInDragMode");if(!b){return NO}if(!this._dragging){SC.Drag.start({event:this._mouseDownEvent,source:c,dragView:this._scthv_dragViewForHeader(),ghost:YES});
this._dragging=true}return arguments.callee.base.apply(this,arguments);SC.RunLoop.end()
},columns:[],flexibleColumn:null,sortedColumn:null,hasTableHead:YES,tableHeadView:SC.TableHeadView.design({layout:{top:0,left:0,right:0}}),tableHeadHeight:18,hasUniformRowHeights:YES,rowHeight:18,exampleView:SC.TableRowView,isInColumnDragMode:NO,filterKey:null,rowOffsetForContentIndex:function(c){var b=0,a;
if(this.get("hasUniformRowHeights")){return b+(this.get("rowHeight")*c)}else{for(a=0;
a<c;i++){b+=this.rowHeightForContentIndex(a)}return b}},rowHeightForContentIndex:function(a){if(this.get("hasUniformRowHeights")){return this.get("rowHeight")
}else{}},layoutForContentIndex:function(a){return{top:this.rowOffsetForContentIndex(a),height:this.rowHeightForContentIndex(a),left:0,right:0}
},createItemView:function(c,a,b){b.tableView=this;return c.create(b)},clippingFrame:function(){var b=this.get("containerView"),a=this.get("scrollView"),c=this.get("frame");
if(!a.get){return c}return{height:c.height,width:c.width,x:a.get("horizontalScrollOffset"),y:a.get("verticalScrollOffset")}
}.property("frame","content").cacheable(),_sctv_scrollOffsetDidChange:function(){this.notifyPropertyChange("clippingFrame")
},computeLayout:function(){var b=arguments.callee.base.apply(this,arguments),a=this.get("containerView"),d=this.get("frame");
var c=b.minHeight;delete b.minHeight;a.adjust("minHeight",c);a.layoutDidChange();
this.notifyPropertyChange("clippingFrame");return b},_sctv_columnsDidChange:function(){var b=this.get("columns"),c=this.get("content"),a;
for(a=0;a<b.get("length");a++){b.objectAt(a).set("tableContent",c)}this.get("tableHeadView")._scthv_handleChildren();
this.reload()}.observes("columns"),_sctv_adjustColumnWidthsOnResize:function(){var f=this.get("frame").width;
var g=this.get("content"),c=this.delegateFor("isTableDelegate",this.delegate,g);if(this.get("columns").length==0){return
}f=c.tableShouldResizeWidthTo(this,f);var e=this.get("columns"),h=0,a;for(var a=0;
a<e.length;a++){h+=e.objectAt(a).get("width")}if(f===0){f=h}var b=this.get("flexibleColumn")||this.get("columns").objectAt(this.get("columns").length-1);
var d=b.get("width")+(f-h);b.set("width",d)}.observes("frame"),_sctv_sortContent:function(){var b=this.get("sortedColumn");
var a=b.get("key");this.set("orderBy",a)},_sctv_sortedColumnDidChange:function(){var b=this.get("columns"),d=this.get("sortedColumn"),c,a;
for(a=0;a<b.get("length");a++){c=b.objectAt(a);if(c!==d){c.set("sortState",null)}}this.invokeOnce("_sctv_sortContent")
}.observes("sortedColumn")});sc_require("views/table_row");SC.TableCellView=SC.View.extend({classNames:["sc-table-cell"],column:null,escapeHTMLBinding:SC.Binding.oneWay(".column.escapeHTML"),formatter:SC.Binding.oneWay(".column.formatter"),displayValue:function(){var f=this.get("content");
var d=this.get("column").get("formatter");if(d){var e=(SC.typeOf(d)===SC.T_FUNCTION)?d(f,this):d.fieldValueForObject(f,this);
if(!SC.none(e)){f=e}}if(SC.typeOf(f)===SC.T_ARRAY){var c=[];for(var b=0;b<f.get("length");
b++){var a=f.objectAt(b);if(!SC.none(a)&&a.toString){a=a.toString()}c.push(a)}f=c.join(",")
}if(!SC.none(f)&&f.toString){f=f.toString()}if(this.get("escapeHTML")){f=SC.RenderContext.escapeHTML(f)
}return f}.property("content","escapeHTML","formatter").cacheable(),render:function(a,b){a.push(this.get("displayValue"))
},init:function(){var a=this.get("column");a.addObserver("width",this,"_sctcv_layoutDidChange");
a.addObserver("maxWidth",this,"_sctcv_layoutDidChange");a.addObserver("minWidth",this,"_sctcv_layoutDidChange")
},_sctcv_layoutDidChange:function(c,b,e,a){var d=this.get("parentView");SC.run(function(){d.layoutChildViews()
})}});if((typeof SC!=="undefined")&&SC&&SC.bundleDidLoad){SC.bundleDidLoad("sproutcore/table")
};