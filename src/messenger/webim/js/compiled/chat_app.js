/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Regions={};a.Layouts={};a.Application=new Backbone.Marionette.Application})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
MibewAPIChatInteraction=function(){this.obligatoryArguments={"*":{threadId:null,token:null,"return":{},references:{}},result:{errorCode:0}};this.reservedFunctionNames=["result"]};MibewAPIChatInteraction.prototype=new MibewAPIInteraction;
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,c){b.Models.Status=b.Models.Base.extend({defaults:{visible:!0,weight:0,hideTimeout:4E3,title:""},initialize:function(){this.hideTimer=null},autoHide:function(a){a=a||this.get("hideTimeout");this.hideTimer&&clearTimeout(this.hideTimer);this.hideTimer=setTimeout(c.bind(function(){this.set({visible:!1})},this),a)}})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Models.BaseSurveyForm=a.Models.Base.extend({defaults:{name:"",email:"",message:"",info:"",referrer:"",groupId:null,groups:null}})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,c){b.Models.Avatar=b.Models.Base.extend({defaults:{imageLink:!1},initialize:function(){this.registeredFunctions=[];this.registeredFunctions.push(b.Objects.server.registerFunction("setupAvatar",c.bind(this.apiSetupAvatar,this)))},finalize:function(){for(var a=0;a<this.registeredFunctions.length;a++)b.Objects.server.unregisterFunction(this.registeredFunctions[a])},apiSetupAvatar:function(a){a.imageLink&&this.set({imageLink:a.imageLink})}})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Models.ChatUser=a.Models.User.extend({defaults:b.extend({},a.Models.User.prototype.defaults,{canPost:!0,typing:!1,canChangeName:!1,dafaultName:!0})})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Models.CloseControl=a.Models.Control.extend({getModelType:function(){return"CloseControl"},closeThread:function(){var b=a.Objects.Models.thread,c=a.Objects.Models.user;a.Objects.server.callFunctions([{"function":"close",arguments:{references:{},"return":{closed:"closed"},threadId:b.get("id"),token:b.get("token"),lastId:b.get("lastId"),user:!c.get("isAgent")}}],function(b){b.closed?window.close():a.Objects.Models.Status.message.setMessage(b.errorMessage||"Cannot close")},!0)}})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Models.HistoryControl=a.Models.Control.extend({defaults:b.extend({},a.Models.Control.prototype.defaults,{link:!1,windowParams:""}),getModelType:function(){return"HistoryControl"}})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Models.RedirectControl=a.Models.Control.extend({defaults:b.extend({},a.Models.Control.prototype.defaults,{link:!1}),getModelType:function(){return"RedirectControl"}})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Models.RefreshControl=a.Models.Control.extend({getModelType:function(){return"RefreshControl"},refresh:function(){a.Objects.server.restartUpdater()}})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Models.SecureModeControl=a.Models.Control.extend({defaults:b.extend({},a.Models.Control.prototype.defaults,{link:!1}),getModelType:function(){return"SecureModeControl"}})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Models.SendMailControl=a.Models.Control.extend({defaults:b.extend({},a.Models.Control.prototype.defaults,{link:!1,windowParams:""}),getModelType:function(){return"SendMailControl"}})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Models.SoundControl=a.Models.Control.extend({defaults:b.extend({},a.Models.Control.prototype.defaults,{enabled:!0}),getModelType:function(){return"SoundControl"}})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b){b.Models.UserNameControl=b.Models.Control.extend({getModelType:function(){return"UserNameControl"},changeName:function(a){var c=b.Objects.Models.user,d=b.Objects.Models.thread,e=c.get("name");a&&e!=a&&(b.Objects.server.callFunctions([{"function":"rename",arguments:{references:{},"return":{},threadId:d.get("id"),token:d.get("token"),name:a}}],function(a){a.errorCode&&(b.Objects.Models.Status.message.setMessage(a.errorMessage||"Cannot rename"),c.set({name:e}))},!0),c.set({name:a}))}})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(c,e){var d=c.Models.BaseSurveyForm;c.Models.LeaveMessageForm=d.extend({defaults:e.extend({},d.prototype.defaults,{showCaptcha:!1,captcha:""}),validate:function(a){var b=c.Localization;if("undefined"!=typeof a.email){if(!a.email)return b.get("leavemessage.error.email.required");if(!c.Utils.checkEmail(a.email))return b.get("leavemessage.error.wrong.email")}if("undefined"!=typeof a.name&&!a.name)return b.get("leavemessage.error.name.required");if("undefined"!=typeof a.message&&!a.message)return b.get("leavemessage.error.message.required");
if(this.get("showCaptcha")&&"undefined"!=typeof a.captcha&&!a.captcha)return b.get("errors.captcha")},submit:function(){if(!this.validate(this.attributes)){var a=this;c.Objects.server.callFunctions([{"function":"processLeaveMessage",arguments:{references:{},"return":{},groupId:a.get("groupId"),name:a.get("name"),info:a.get("info"),email:a.get("email"),message:a.get("message"),referrer:a.get("referrer"),captcha:a.get("captcha"),threadId:null,token:null}}],function(b){0==b.errorCode?a.trigger("submit:complete",
a):a.trigger("submit:error",a,{code:b.errorCode,message:b.errorMessage||""})},!0)}},ERROR_WRONG_CAPTCHA:10})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Models.MessageForm=a.Models.Base.extend({defaults:{predefinedAnswers:[],ignoreCtrl:!1},postMessage:function(e){var b=a.Objects.Models.thread,c=a.Objects.Models.user;if(c.get("canPost")){this.trigger("before:post",this);var d=this;a.Objects.server.callFunctions([{"function":"post",arguments:{references:{},"return":{},message:e,threadId:b.get("id"),token:b.get("token"),user:!c.get("isAgent")}}],function(){d.trigger("after:post",d)},!0)}}})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Models.StatusMessage=a.Models.Status.extend({defaults:b.extend({},a.Models.Status.prototype.defaults,{message:"",visible:!1}),getModelType:function(){return"StatusMessage"},setMessage:function(a){this.set({message:a,visible:!0});this.autoHide()}})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Models.StatusTyping=a.Models.Status.extend({defaults:b.extend({},a.Models.Status.prototype.defaults,{visible:!1,hideTimeout:2E3}),getModelType:function(){return"StatusTyping"},show:function(){this.set({visible:!0});this.autoHide()}})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,e){var d=b.Models.BaseSurveyForm;b.Models.SurveyForm=d.extend({defaults:e.extend({},d.prototype.defaults,{showEmail:!1,showMessage:!1,canChangeName:!1}),validate:function(a){if(this.get("showEmail")&&"undefined"!=typeof a.email&&!b.Utils.checkEmail(a.email))return b.Localization.get("presurvey.error.wrong_email")},submit:function(){if(!this.validate(this.attributes)){var a=this;b.Objects.server.callFunctions([{"function":"processSurvey",arguments:{references:{},"return":{next:"next",options:"options"},
groupId:a.get("groupId"),name:a.get("name"),info:a.get("info"),email:a.get("email"),message:a.get("message"),referrer:a.get("referrer"),threadId:null,token:null}}],function(c){if(0==c.errorCode)switch(a.trigger("submit:complete",a),b.Application.Survey.stop(),c.next){case "chat":b.Application.Chat.start(c.options);break;case "leaveMessage":b.Application.LeaveMessage.start(c.options);break;default:throw Error("Do not know how to continue!");}else a.trigger("submit:error",a,{code:c.errorCode,message:c.errorMessage||
""})},!0)}}})})(Mibew,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,d,f){b.Collections.Messages=d.Collection.extend({model:b.Models.Message,initialize:function(){this.periodicallyCalled=[];this.periodicallyCalled.push(b.Objects.server.callFunctionsPeriodically(f.bind(this.updateMessagesFunctionBuilder,this),f.bind(this.updateMessages,this)))},finalize:function(){for(var a=0;a<this.periodicallyCalled.length;a++)b.Objects.server.stopCallFunctionsPeriodically(this.periodicallyCalled[a])},updateMessages:function(a){a.lastId&&b.Objects.Models.thread.set({lastId:a.lastId});
for(var c=[],e=0,d=a.messages.length;e<d;e++)c.push(new b.Models.Message(a.messages[e]));0<c.length&&this.add(c)},updateMessagesFunctionBuilder:function(){var a=b.Objects.Models.thread,c=b.Objects.Models.user;return[{"function":"updateMessages",arguments:{"return":{messages:"messages",lastId:"lastId"},references:{},threadId:a.get("id"),token:a.get("token"),lastId:a.get("lastId"),user:!c.get("isAgent")}}]},add:function(){var a=Array.prototype.slice.apply(arguments),a=d.Collection.prototype.add.apply(this,
a);this.trigger("multiple:add");return a}})})(Mibew,Backbone,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Collections.Status=b.Collection.extend({comparator:function(a){return a.get("weight")}})})(Mibew,Backbone);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b,c){a.Views.Status=b.Marionette.ItemView.extend({template:c.templates.status,className:"status",modelEvents:{change:"render"},onBeforeRender:function(){this.model.get("visible")?this.$el.show():this.$el.hide()}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(c,d){c.Views.BaseSurveyForm=d.Marionette.ItemView.extend({events:{'change select[name="group"]':"changeGroupDescription","submit form":"preventSubmit"},ui:{groupSelect:'select[name="group"]',groupDescription:"#groupDescription",name:'input[name="name"]',email:'input[name="email"]',message:'textarea[name="message"]',errors:".errors"},modelEvents:{invalid:"showError","submit:error":"showError"},preventSubmit:function(b){b.preventDefault()},changeGroupDescription:function(){var b=this.ui.groupSelect.prop("selectedIndex"),
a=this.model.get("groups").descriptions||[];this.ui.groupDescription.text(a[b]||"")},showError:function(b,a){this.ui.errors.html("string"==typeof a?a:a.message)}})})(Mibew,Backbone);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b,c){a.Views.Avatar=b.Marionette.ItemView.extend({template:c.templates.avatar,className:"avatar",modelEvents:{change:"render"}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,c,d){a.Views.CloseControl=a.Views.Control.extend({template:c.templates.close_control,events:d.extend({},a.Views.Control.prototype.events,{click:"closeThread"}),closeThread:function(){var b=a.Localization.get("chat.close.confirmation");(!1===b||confirm(b))&&this.model.closeThread()}})})(Mibew,Handlebars,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,d,e){b.Views.HistoryControl=b.Views.Control.extend({template:d.templates.history_control,events:e.extend({},b.Views.Control.prototype.events,{click:"showHistory"}),showHistory:function(){var c=b.Objects.Models.user,a=this.model.get("link");c.get("isAgent")&&a&&(c=this.model.get("windowParams"),a=a.replace("&amp;","&","g"),a=window.open(a,"UserHistory",c),null!==a&&(a.focus(),a.opener=window))}})})(Mibew,Handlebars,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,d,e){a.Views.RedirectControl=a.Views.Control.extend({template:d.templates.redirect_control,events:e.extend({},a.Views.Control.prototype.events,{click:"redirect"}),initialize:function(){a.Objects.Models.user.on("change",this.render,this)},serializeData:function(){var b=this.model.toJSON();b.user=a.Objects.Models.user.toJSON();return b},redirect:function(){var b=a.Objects.Models.user;if(b.get("isAgent")&&b.get("canPost")&&(b=this.model.get("link"))){var c=a.Objects.Models.page.get("style");
window.location.href=b.replace(/\&amp\;/g,"&")+(c?"&style="+c:"")}}})})(Mibew,Handlebars,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b,c){a.Views.RefreshControl=a.Views.Control.extend({template:b.templates.refresh_control,events:c.extend({},a.Views.Control.prototype.events,{click:"refresh"}),refresh:function(){this.model.refresh()}})})(Mibew,Handlebars,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,d,e){a.Views.SecureModeControl=a.Views.Control.extend({template:d.templates.secure_mode_control,events:e.extend({},a.Views.Control.prototype.events,{click:"secure"}),secure:function(){var b=this.model.get("link");if(b){var c=a.Objects.Models.page.get("style");window.location.href=b.replace(/\&amp\;/g,"&")+(c?"&style="+c:"")}}})})(Mibew,Handlebars,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,d,e){b.Views.SendMailControl=b.Views.Control.extend({template:d.templates.send_mail_control,events:e.extend({},b.Views.Control.prototype.events,{click:"sendMail"}),sendMail:function(){var a=this.model.get("link"),c=b.Objects.Models.page;if(a){var d=this.model.get("windowParams"),c=c.get("style"),a=a.replace(/\&amp\;/g,"&")+(c?"&style="+c:""),a=window.open(a,"ForwardMail",d);null!==a&&(a.focus(),a.opener=window)}}})})(Mibew,Handlebars,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b,c){a.Views.SoundControl=a.Views.Control.extend({template:b.templates.sound_control,events:c.extend({},a.Views.Control.prototype.events,{click:"toggle"}),toggle:function(){this.model.set({enabled:!this.model.get("enabled")})}})})(Mibew,Handlebars,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,c,d){b.Views.UserNameControl=b.Views.Control.extend({template:c.templates.user_name_control,events:d.extend({},b.Views.Control.prototype.events,{"click .user-name-control-set":"changeName","click .user-name-control-change":"showNameInput","keydown #user-name-control-input":"inputKeyDown"}),ui:{nameInput:"#user-name-control-input"},initialize:function(){b.Objects.Models.user.on("change:name",this.hideNameInput,this);this.nameInput=b.Objects.Models.user.get("defaultName")},serializeData:function(){var a=
this.model.toJSON();a.user=b.Objects.Models.user.toJSON();a.nameInput=this.nameInput;return a},inputKeyDown:function(a){a=a.which;(13==a||10==a)&&this.changeName()},hideNameInput:function(){this.nameInput=!1;this.render()},showNameInput:function(){this.nameInput=!0;this.render()},changeName:function(){var a=this.ui.nameInput.val();this.model.changeName(a)}})})(Mibew,Handlebars,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b,c){a.Views.LeaveMessageDescription=b.Marionette.ItemView.extend({template:c.templates.leave_message_description,serializeData:function(){return{page:a.Objects.Models.page.toJSON()}}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(d,e,b){var c=d.Views.BaseSurveyForm;d.Views.LeaveMessageForm=c.extend({template:e.templates.leave_message_form,events:b.extend({},c.prototype.events,{"click #send-message":"submitForm"}),ui:b.extend({},c.prototype.ui,{captcha:'input[name="captcha"]',captchaImg:"#captcha-img"}),modelEvents:b.extend({},c.prototype.modelEvents,{"submit:error":"showError submitError"}),submitForm:function(){var a={};this.model.get("groups")&&(a.groupId=this.ui.groupSelect.val());a.name=this.ui.name.val()||"";
a.email=this.ui.email.val()||"";a.message=this.ui.message.val()||"";this.model.get("showCaptcha")&&(a.captcha=this.ui.captcha.val()||"");this.model.set(a,{validate:!0});this.model.submit()},submitError:function(a,c){if(c.code==a.ERROR_WRONG_CAPTCHA&&a.get("showCaptcha")){var b=this.ui.captchaImg.attr("src"),b=b.replace(/\?d\=[0-9]+/,"");this.ui.captchaImg.attr("src",b+"?d="+(new Date).getTime())}}})})(Mibew,Handlebars,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b,c){a.Views.LeaveMessageSentDescription=b.Marionette.ItemView.extend({template:c.templates.leave_message_sent_description,serializeData:function(){return{page:a.Objects.Models.page.toJSON()}}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,d,e){b.Views.MessageForm=d.Marionette.ItemView.extend({template:e.templates.message_form,events:{"click #send-message":"postMessage","keydown #message-input":"messageKeyDown","keyup #message-input":"checkUserTyping","change #message-input":"checkUserTyping","change #predefined":"selectPredefinedAnswer","focus #message-input":"setFocus","blur #message-input":"dropFocus"},modelEvents:{change:"render"},ui:{message:"#message-input",send:"#send-message",predefinedAnswer:"#predefined"},initialize:function(){b.Objects.Models.user.on("change:canPost",
this.render,this)},serializeData:function(){var a=this.model.toJSON();a.user=b.Objects.Models.user.toJSON();return a},postMessage:function(){var a=this.ui.message.val();""!=a&&(this.disableInput(),this.model.postMessage(a));b.Objects.Collections.messages.on("multiple:add",this.postMessageComplete,this)},messageKeyDown:function(a){var c=a.which;a=a.ctrlKey;(13==c&&(a||this.model.get("ignoreCtrl"))||10==c)&&this.postMessage()},enableInput:function(){this.ui.message.removeAttr("disabled")},disableInput:function(){this.ui.message.attr("disabled",
"disabled")},clearInput:function(){this.ui.message.val("").change()},postMessageComplete:function(){this.clearInput();this.enableInput();this.focused&&this.ui.focus();b.Objects.Collections.messages.off("multiple:add",this.postMessageComplete,this)},selectPredefinedAnswer:function(){var a=this.ui.message,c=this.ui.predefinedAnswer,b=c.get(0).selectedIndex;b&&(a.val(this.model.get("predefinedAnswers")[b-1].full).change(),a.focus(),c.get(0).selectedIndex=0)},checkUserTyping:function(){var a=b.Objects.Models.user,
c=""!=this.ui.message.val();c!=a.get("typing")&&a.set({typing:c})},setFocus:function(){this.focused=!0},dropFocus:function(){this.focused=!1}})})(Mibew,Backbone,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Views.StatusMessage=a.Views.Status.extend({template:b.templates.status_message})})(Mibew,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Views.StatusTyping=a.Views.Status.extend({template:b.templates.status_typing})})(Mibew,Handlebars);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(b,d,e){var c=b.Views.BaseSurveyForm;b.Views.SurveyForm=c.extend({template:d.templates.survey_form,events:e.extend({},c.prototype.events,{"click #submit-survey":"submitForm"}),submitForm:function(){var a={};this.model.get("groups")&&(a.groupId=this.ui.groupSelect.val());this.model.get("canChangeName")&&(a.name=this.ui.name.val()||"");this.model.get("showEmail")&&(a.email=this.ui.email.val()||"");this.model.get("showMessage")&&(a.message=this.ui.message.val()||"");this.model.set(a,{validate:!0});
this.model.submit()}})})(Mibew,Handlebars,_);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Views.MessagesCollection=a.Views.CollectionBase.extend({itemView:a.Views.Message,className:"messages-collection",initialize:function(){this.collection.on("multiple:add",this.messagesAdded,this);a.Objects.Models.messageForm.on("before:post",this.messagePost,this)},skipNextSound:!0,messagePost:function(){this.skipNextSound=!0},messagesAdded:function(){if(!this.skipNextSound&&a.Objects.Models.Controls.sound.get("enabled")){var b=a.Objects.Models.page.get("webimRoot");b&&a.Objects.Models.sound.play(b+
"/sounds/new_message.wav")}this.skipNextSound=!1}})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Views.StatusCollection=a.Views.CollectionBase.extend({itemView:a.Views.Status,className:"status-collection"})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Regions.Messages=b.Marionette.Region.extend({onShow:function(a){a.on("after:item:added",this.scrollToBottom,this)},scrollToBottom:function(){this.$el.scrollTop(this.$el.prop("scrollHeight"))}})})(Mibew,Backbone);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,c){a.Layouts.Chat=c.Marionette.Layout.extend({template:Handlebars.templates.chat_layout,regions:{controlsRegion:"#controls-region",avatarRegion:"#avatar-region",messagesRegion:{selector:"#messages-region",regionType:a.Regions.Messages},statusRegion:"#status-region",messageFormRegion:"#message-form-region",soundRegion:"#sound-region"},serializeData:function(){var b=a.Objects.Models;return{page:b.page.toJSON(),user:b.user.toJSON()}}})})(Mibew,Backbone);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Layouts.LeaveMessage=b.Marionette.Layout.extend({template:Handlebars.templates.leave_message_layout,regions:{leaveMessageFormRegion:"#content-wrapper",descriptionRegion:"#description-region"},serializeData:function(){return{page:a.Objects.Models.page.toJSON()}}})})(Mibew,Backbone);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,b){a.Layouts.Survey=b.Marionette.Layout.extend({template:Handlebars.templates.survey_layout,regions:{surveyFormRegion:"#content-wrapper"},serializeData:function(){return{page:a.Objects.Models.page.toJSON()}}})})(Mibew,Backbone);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){a.Objects.Models.Controls={};a.Objects.Models.Status={};var j=[],k=a.Application,l=k.module("Chat",{startWithParent:!1});l.addInitializer(function(b){var g=a.Objects,d=a.Objects.Models,c=a.Objects.Models.Controls,h=a.Objects.Models.Status;b.page&&d.page.set(b.page);d.thread=new a.Models.Thread(b.thread);d.user=new a.Models.ChatUser(b.user);var f=new a.Layouts.Chat;g.chatLayout=f;k.mainRegion.show(f);var e=new a.Collections.Controls;d.user.get("isAgent")||(c.userName=new a.Models.UserNameControl({weight:220}),
e.add(c.userName),c.sendMail=new a.Models.SendMailControl({weight:200,link:b.links.mail,windowParams:b.windowsParams.mail}),e.add(c.sendMail));d.user.get("isAgent")&&(c.redirect=new a.Models.RedirectControl({weight:200,link:b.links.redirect}),e.add(c.redirect),c.history=new a.Models.HistoryControl({weight:180,link:b.links.history,windowParams:b.windowsParams.history}),e.add(c.history));c.sound=new a.Models.SoundControl({weight:160});e.add(c.sound);c.refresh=new a.Models.RefreshControl({weight:140});
e.add(c.refresh);b.links.ssl&&(c.secureMode=new a.Models.SecureModeControl({weight:120,link:b.links.ssl}),e.add(c.secureMode));c.close=new a.Models.CloseControl({weight:100});e.add(c.close);g.Collections.controls=e;f.controlsRegion.show(new a.Views.ControlsCollection({collection:e}));h.message=new a.Models.StatusMessage({hideTimeout:5E3});h.typing=new a.Models.StatusTyping({hideTimeout:5E3});g.Collections.status=new a.Collections.Status([h.message,h.typing]);f.statusRegion.show(new a.Views.StatusCollection({collection:g.Collections.status}));
d.user.get("isAgent")||(d.avatar=new a.Models.Avatar,f.avatarRegion.show(new a.Views.Avatar({model:d.avatar})));g.Collections.messages=new a.Collections.Messages;d.messageForm=new a.Models.MessageForm(b.messageForm);f.messageFormRegion.show(new a.Views.MessageForm({model:d.messageForm}));f.messagesRegion.show(new a.Views.MessagesCollection({collection:g.Collections.messages}));d.sound=new a.Models.Sound;f.soundRegion.show(new a.Views.Sound({model:d.sound}));j.push(g.server.callFunctionsPeriodically(function(){var b=
a.Objects.Models.thread,c=a.Objects.Models.user;return[{"function":"update",arguments:{"return":{typing:"typing",canPost:"canPost"},references:{},threadId:b.get("id"),token:b.get("token"),lastId:b.get("lastId"),typed:c.get("typing"),user:!c.get("isAgent")}}]},function(b){b.errorCode?a.Objects.Models.Status.message.setMessage(b.errorMessage||"refresh failed"):(b.typing&&a.Objects.Models.Status.typing.show(),a.Objects.Models.user.set({canPost:b.canPost||!1}))}))});l.addFinalizer(function(){a.Objects.chatLayout.close();
for(var b=0;b<j.length;b++)a.Objects.server.stopCallFunctionsPeriodically(j[b]);"undefined"!=typeof a.Objects.Models.avatar&&a.Objects.Models.avatar.finalize();a.Objects.Collections.messages.finalize();delete a.Objects.chatLayout;delete a.Objects.Models.thread;delete a.Objects.Models.user;delete a.Objects.Models.page;delete a.Objects.Models.avatar;delete a.Objects.Models.messageForm;delete a.Objects.Models.sound;delete a.Objects.Models.Controls;delete a.Objects.Models.Status;delete a.Objects.Collections.messages;
delete a.Objects.Collections.controls;delete a.Objects.Collections.status})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){var e=a.Application,f=e.module("LeaveMessage",{startWithParent:!1});f.addInitializer(function(d){var b=a.Objects,c=a.Objects.Models;d.page&&c.page.set(d.page);b.leaveMessageLayout=new a.Layouts.LeaveMessage;e.mainRegion.show(b.leaveMessageLayout);c.leaveMessageForm=new a.Models.LeaveMessageForm(d.leaveMessageForm);b.leaveMessageLayout.leaveMessageFormRegion.show(new a.Views.LeaveMessageForm({model:c.leaveMessageForm}));b.leaveMessageLayout.descriptionRegion.show(new a.Views.LeaveMessageDescription);
c.leaveMessageForm.on("submit:complete",function(){b.leaveMessageLayout.leaveMessageFormRegion.close();b.leaveMessageLayout.descriptionRegion.close();b.leaveMessageLayout.descriptionRegion.show(new a.Views.LeaveMessageSentDescription)})});f.addFinalizer(function(){a.Objects.leaveMessageLayout.close();delete a.Objects.Models.leaveMessageForm})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a){var d=a.Application,b=d.module("Survey",{startWithParent:!1});b.addInitializer(function(b){var c=a.Objects,e=a.Objects.Models;c.surveyLayout=new a.Layouts.Survey;d.mainRegion.show(c.surveyLayout);e.surveyForm=new a.Models.SurveyForm(b.surveyForm);c.surveyLayout.surveyFormRegion.show(new a.Views.SurveyForm({model:e.surveyForm}))});b.addFinalizer(function(){a.Objects.surveyLayout.close();delete a.Objects.Models.surveyForm})})(Mibew);
/*
 This file is part of Mibew Messenger project.
 http://mibew.org
 Copyright (c) 2005-2011 Mibew Messenger Community
 License: http://mibew.org/license.php
*/
(function(a,d){var b=a.Application;b.addRegions({mainRegion:"#main-region"});b.addInitializer(function(c){a.Objects.server=new a.Server(d.extend({interactionType:MibewAPIChatInteraction},c.server));a.Objects.Models.page=new a.Models.Page(c.page);switch(c.startFrom){case "chat":b.Chat.start(c.chatOptions);break;case "survey":b.Survey.start(c.surveyOptions);break;case "leaveMessage":b.LeaveMessage.start(c.leaveMessageOptions);break;default:throw Error("Dont know how to start!");}});b.on("start",function(){a.Objects.server.runUpdater()})})(Mibew,
_);
