/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b.default_control=a(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f="",g,h="function",i=this.escapeExpression;return f+="<strong>",(g=c.title)?g=g.call(b,{hash:{},data:e}):(g=b.title,g=typeof g===h?g.apply(b):g),f+=i(g)+"</strong>",f}),b.sound=a(function(a,b,c,d,e){function j(a,b){var d="",e;return d+='\n<audio autoplay src="',(e=c.file)?e=e.call(a,{hash:{},data:b}):(e=a.file,e=typeof e===g?e.apply(a):e),d+=h(e)+'">\n    <embed src="',(e=c.file)?e=e.call(a,{hash:{},data:b}):(e=a.file,e=typeof e===g?e.apply(a):e),d+=h(e)+'" hidden="true" autostart="true" loop="false" />\n</audio>\n',d}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f,g="function",h=this.escapeExpression,i=this;return f=c["if"].call(b,b.file,{hash:{},inverse:i.noop,fn:i.program(1,j,e),data:e}),f||f===0?f:""}),b.message=a(function(a,b,c,d,e){function n(a,b){var d="",e;return d+="<span class='n",(e=c.kindName)?e=e.call(a,{hash:{},data:b}):(e=a.kindName,e=typeof e===j?e.apply(a):e),d+=k(e)+"'>",(e=c.name)?e=e.call(a,{hash:{},data:b}):(e=a.name,e=typeof e===j?e.apply(a):e),d+=k(e)+"</span>: ",d}function o(a,b){var d,e;return e={hash:{},data:b},k((d=c.apply,d?d.call(a,a.message,"urlReplace, nl2br, allowTags",e):l.call(a,"apply",a.message,"urlReplace, nl2br, allowTags",e)))}function p(a,b){var d,e;return e={hash:{},data:b},k((d=c.apply,d?d.call(a,a.message,"urlReplace, nl2br",e):l.call(a,"apply",a.message,"urlReplace, nl2br",e)))}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f="",g,h,i,j="function",k=this.escapeExpression,l=c.helperMissing,m=this;f+="<span>",i={hash:{},data:e},f+=k((g=c.formatTime,g?g.call(b,b.created,i):l.call(b,"formatTime",b.created,i)))+"</span>\n",h=c["if"].call(b,b.name,{hash:{},inverse:m.noop,fn:m.program(1,n,e),data:e});if(h||h===0)f+=h;f+="\n<span class='m",(h=c.kindName)?h=h.call(b,{hash:{},data:e}):(h=b.kindName,h=typeof h===j?h.apply(b):h),f+=k(h)+"'>",h=c["if"].call(b,b.allowFormatting,{hash:{},inverse:m.program(5,p,e),fn:m.program(3,o,e),data:e});if(h||h===0)f+=h;return f+="</span><br/>",f})})();/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
var Mibew={};(function(a,b){b.Marionette.TemplateCache.prototype.compileTemplate=function(a){return Handlebars.compile(a)};a.Models={};a.Collections={};a.Views={};a.Objects={};a.Objects.Models={};a.Objects.Collections={}})(Mibew,Backbone);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(e,b){b.registerHelper("apply",function(a,c){var f=a,e=/^[0-9A-z_]+$/;c=c.split(/\s*,\s*/);for(var d in c)if(c.hasOwnProperty(d)&&e.test(c[d])){if("function"!=typeof b.helpers[c[d]])throw Error("Unregistered helper '"+c[d]+"'!");f=b.helpers[c[d]](f).toString()}return new b.SafeString(f)});b.registerHelper("allowTags",function(a){a=a.replace(/&lt;(span|strong)&gt;(.*?)&lt;\/\1&gt;/g,"<$1>$2</$1>");a=a.replace(/&lt;span class=&quot;(.*?)&quot;&gt;(.*?)&lt;\/span&gt;/g,'<span class="$1">$2</span>');
return new b.SafeString(a)});b.registerHelper("formatTime",function(a){var c=new Date(1E3*a);a=c.getHours().toString();var b=c.getMinutes().toString(),c=c.getSeconds().toString();return(10>a?"0"+a:a)+":"+(10>b?"0"+b:b)+":"+(10>c?"0"+c:c)});b.registerHelper("urlReplace",function(a){return new b.SafeString(a.replace(/((?:https?|ftp):\/\/\S*)/g,'<a href="$1" target="_blank">$1</a>'))});b.registerHelper("nl2br",function(a){return new b.SafeString(a.replace(/\n/g,"<br/>"))});b.registerHelper("L10n",function(a){return e.Localization.get(a)||
""})})(Mibew,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,d){b.Localization={};var c={};b.Localization.get=function(a){return!c.hasOwnProperty(a)?!1:c[a]};b.Localization.set=function(a){d.extend(c,a)}})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,f,g,e){b.Server=function(a){this.updateTimer=null;this.options=e.extend({url:"",requestsFrequency:2,reconnectPause:1,onTimeout:function(){},onTransportError:function(){},onCallError:function(){},onUpdateError:function(){},onResponseError:function(){}},a);this.callbacks={};this.callPeriodically={};this.callPeriodicallyLastId=0;this.ajaxRequest=null;this.buffer=[];this.functions={};this.functionsLastId=0;this.mibewAPI=new f(new this.options.interactionType)};b.Server.prototype.callFunctions=
function(a,c,b){try{if(!(a instanceof Array))throw Error("The first arguments must be an array");for(var d=0;d<a.length;d++)this.mibewAPI.checkFunction(a[d],!1);var e=this.generateToken();this.callbacks[e]=c;this.buffer.push({token:e,functions:a});b&&this.update()}catch(f){return this.options.onCallError(f),!1}return!0};b.Server.prototype.callFunctionsPeriodically=function(a,c){this.callPeriodicallyLastId++;this.callPeriodically[this.callPeriodicallyLastId]={functionsListBuilder:a,callbackFunction:c};
return this.callPeriodicallyLastId};b.Server.prototype.stopCallFunctionsPeriodically=function(a){a in this.callPeriodically&&delete this.callPeriodically[a]};b.Server.prototype.generateToken=function(){var a;do a="wnd"+(new Date).getTime().toString()+Math.round(50*Math.random()).toString();while(a in this.callbacks);return a};b.Server.prototype.processRequest=function(a){var c=new MibewAPIExecutionContext,b=this.mibewAPI.getResultFunction(a.functions,this.callbacks.hasOwnProperty(a.token));if(null===
b)for(var d in a.functions)a.functions.hasOwnProperty(d)&&(this.processFunction(a.functions[d],c),this.buffer.push(this.mibewAPI.buildResult(c.getResults(),a.token)));else this.callbacks.hasOwnProperty(a.token)&&(this.callbacks[a.token](b.arguments),delete this.callbacks[a.token])};b.Server.prototype.processFunction=function(a,c){if(this.functions.hasOwnProperty(a["function"])){var b=c.getArgumentsList(a),d={},f;for(f in this.functions[a["function"]])this.functions[a["function"]].hasOwnProperty(f)&&
(d=e.extend(d,this.functions[a["function"]][f](b)));c.storeFunctionResults(a,d)}};b.Server.prototype.sendRequests=function(a){this.ajaxRequest=g.ajax({url:this.options.url,timeout:5E3,async:!0,cache:!1,type:"POST",dataType:"text",data:{data:this.mibewAPI.encodePackage(a)},success:e.bind(this.receiveResponse,this),error:e.bind(this.onError,this)})};b.Server.prototype.runUpdater=function(){this.update()};b.Server.prototype.updateAfter=function(a){this.updateTimer=setTimeout(e.bind(this.update,this),
1E3*a)};b.Server.prototype.restartUpdater=function(){this.updateTimer&&clearTimeout(this.updateTimer);this.ajaxRequest&&this.ajaxRequest.abort();this.updateAfter(this.options.reconnectPause)};b.Server.prototype.update=function(){this.updateTimer&&clearTimeout(this.updateTimer);for(var a in this.callPeriodically)this.callPeriodically.hasOwnProperty(a)&&this.callFunctions(this.callPeriodically[a].functionsListBuilder(),this.callPeriodically[a].callbackFunction);if(0==this.buffer.length)this.updateAfter(this.options.requestsFrequency);
else try{this.sendRequests(this.buffer),this.buffer=[]}catch(c){this.options.onUpdateError(c)}};b.Server.prototype.receiveResponse=function(a){""==a&&this.updateAfter(this.options.requestsFrequency);try{var c=this.mibewAPI.decodePackage(a),b;for(b in c.requests)this.processRequest(c.requests[b])}catch(d){this.options.onResponseError(d)}finally{this.updateAfter(this.options.requestsFrequency)}};b.Server.prototype.registerFunction=function(a,b){this.functionsLastId++;a in this.functions||(this.functions[a]=
{});this.functions[a][this.functionsLastId]=b;return this.functionsLastId};b.Server.prototype.unregisterFunction=function(a){for(var b in this.functions)this.functions.hasOwnProperty(b)&&(a in this.functions[b]&&delete this.functions[b][a],e.isEmpty(this.functions[b])&&delete this.functions[b])};b.Server.prototype.onError=function(a,b){if("abort"!=b)if(this.restartUpdater(),"timeout"==b)this.options.onTimeout();else if("error"==b)this.options.onTransportError()}})(Mibew,MibewAPI,$,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b){b.Utils={};b.Utils.toUpperCaseFirst=function(a){return"string"!=typeof a?!1:""===a?a:a.substring(0,1).toUpperCase()+a.substring(1)};b.Utils.toDashFormat=function(a){if("string"!=typeof a)return!1;a=a.match(/((?:[A-Z]?[a-z]+)|(?:[A-Z][a-z]*))/g);for(var b=0;b<a.length;b++)a[b]=a[b].toLowerCase();return a.join("-")};b.Utils.checkEmail=function(a){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)}})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Models.Base=b.Model.extend({getModelType:function(){return""}})})(Mibew,Backbone);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Models.Control=a.Models.Base.extend({defaults:{title:"",weight:0}})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Models.Message=a.Models.Base.extend({defaults:{message:""},KIND_USER:1,KIND_AGENT:2,KIND_FOR_AGENT:3,KIND_INFO:4,KIND_CONN:5,KIND_EVENTS:6})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Models.Page=b.Model.extend()})(Mibew,Backbone);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Models.Sound=b.Model.extend({play:function(a){this.set({file:a});this.trigger("sound:play",this)}})})(Mibew,Backbone);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Models.Thread=a.Models.Base.extend({defaults:{id:0,token:0,lastId:0,state:null},STATE_QUEUE:0,STATE_WAITING:1,STATE_CHATTING:2,STATE_CLOSED:3,STATE_LOADING:4,STATE_LEFT:5})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Models.User=a.Models.Base.extend({defaults:{isAgent:!1,name:""}})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Collections.Controls=b.Collection.extend({comparator:function(a){return a.get("weight")}})})(Mibew,Backbone);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,c,d){b.Views.Control=c.Marionette.ItemView.extend({template:d.templates.default_control,modelEvents:{change:"render"},events:{mouseover:"mouseOver",mouseleave:"mouseLeave"},attributes:function(){var a=[];a.push("control");this.className&&(a.push(this.className),this.className="");var b=this.getDashedControlType();b&&a.push(b);return{"class":a.join(" ")}},mouseOver:function(){var a=this.getDashedControlType();this.$el.addClass("active"+(a?"-"+a:""))},mouseLeave:function(){var a=this.getDashedControlType();
this.$el.removeClass("active"+(a?"-"+a:""))},getDashedControlType:function(){"undefined"==typeof this.dashedControlType&&(this.dashedControlType=b.Utils.toDashFormat(this.model.getModelType())||"");return this.dashedControlType}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(c,d,e){var f={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},g=/[&<>'"`]/g;c.Views.Message=d.Marionette.ItemView.extend({template:e.templates.message,className:"message",modelEvents:{change:"render"},serializeData:function(){var a=this.model.toJSON(),b=this.model.get("kind");a.allowFormatting=b!=this.model.KIND_USER&&b!=this.model.KIND_AGENT;a.kindName=this.kindToString(b);a.message=this.escapeString(a.message);return a},kindToString:function(a){return a==this.model.KIND_USER?
"user":a==this.model.KIND_AGENT?"agent":a==this.model.KIND_FOR_AGENT?"hidden":a==this.model.KIND_INFO?"inf":a==this.model.KIND_CONN?"conn":a==this.model.KIND_EVENTS?"event":""},escapeString:function(a){return a.replace(g,function(a){return f[a]||"&amp;"})}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b,c){a.Views.Sound=b.Marionette.ItemView.extend({template:c.templates.sound,className:"sound-player",modelEvents:{"sound:play":"render"}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(d,a,f){var e=function(b,a,c){c=f.extend({model:b},c);return"function"!=typeof b.getModelType?new a(c):(b=b.getModelType())&&d.Views[b]?new d.Views[b](c):new a(c)};d.Views.CollectionBase=a.Marionette.CollectionView.extend({itemView:a.Marionette.ItemView,buildItemView:e});d.Views.CompositeBase=a.Marionette.CompositeView.extend({buildItemView:e})})(Mibew,Backbone,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Views.ControlsCollection=a.Views.CollectionBase.extend({itemView:a.Views.Control,className:"controls-collection"})})(Mibew);