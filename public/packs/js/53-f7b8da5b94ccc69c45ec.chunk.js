(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1905:function(e,t,r){var i=r(36),n=r(15),a=r(108),s=r(207),o=r(39).f,l=r(95).f,u=r(215),c=r(189),d=r(214),p=r(44),T=r(20),b=r(62).enforce,E=r(190),v=r(16)("match"),f=n.RegExp,_=f.prototype,h=/a/g,A=/a/g,m=new f(h)!==h,g=d.UNSUPPORTED_Y;if(i&&a("RegExp",!m||g||T((function(){return A[v]=!1,f(h)!=h||f(A)==A||"/a/i"!=f(h,"i")})))){for(var M=function(e,t){var r,i=this instanceof M,n=u(e),a=void 0===t;if(!i&&n&&e.constructor===M&&a)return e;m?n&&!a&&(e=e.source):e instanceof M&&(a&&(t=c.call(e)),e=e.source),g&&(r=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var o=s(m?new f(e,t):f(e,t),i?this:_,M);g&&r&&(b(o).sticky=!0);return o},y=function(e){e in M||o(M,e,{configurable:!0,get:function(){return f[e]},set:function(t){f[e]=t}})},R=l(f),x=0;R.length>x;)y(R[x++]);_.constructor=M,M.prototype=_,p(n,"RegExp",M)}E("RegExp")},2652:function(e,t,r){"use strict";r(1905),r(53),r(154),r(66);t.a={methods:{getRegexp:function(e){var t=e.lastIndexOf("/");return new RegExp(e.slice(1,t),e.slice(t+1))}}}},2903:function(e,t,r){},2904:function(e,t,r){},2905:function(e,t,r){},3141:function(e,t,r){"use strict";r(2903)},3142:function(e,t,r){"use strict";r(2904)},3143:function(e,t,r){"use strict";r(2905)},3327:function(e,t,r){"use strict";r.r(t);r(34),r(19),r(8),r(22),r(78),r(40),r(5),r(32),r(154),r(1905),r(53),r(11),r(9),r(12),r(10),r(13),r(24);var i=r(61),n=r(27),a=r(315),s=[{id:0,option:"Conversation"},{id:1,option:"Contact"}],o=[{id:0,option:"Text"},{id:1,option:"Number"},{id:4,option:"Link"},{id:5,option:"Date"},{id:6,option:"List"},{id:7,option:"Checkbox"}],l=r(77);function u(e,t,r,i,n,a,s){try{var o=e[a](s),l=o.value}catch(u){return void r(u)}o.done?t(l):Promise.resolve(l).then(i,n)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T={mixins:[l.a],props:{onClose:{type:Function,default:function(){}}},data:function(){return{displayName:"",description:"",attributeModel:0,attributeType:0,attributeKey:"",regexPattern:null,regexCue:null,regexEnabled:!1,models:s,types:o,values:[],options:[],show:!0,isTouched:!1}},computed:d(d({},Object(n.mapGetters)({uiFlags:"getUIFlags"})),{},{isMultiselectInvalid:function(){return this.isTouched&&0===this.values.length},isTagInputInvalid:function(){return this.isAttributeTypeList&&0===this.values.length},attributeListValues:function(){return this.values.map((function(e){return e.name}))},isButtonDisabled:function(){return this.$v.displayName.$invalid||this.$v.description.$invalid||this.uiFlags.isCreating||this.isTagInputInvalid},keyErrorMessage:function(){return this.$v.attributeKey.isKey?this.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.ERROR"):this.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.IN_VALID")},isAttributeTypeList:function(){return 6===this.attributeType},isAttributeTypeText:function(){return 0===this.attributeType},isRegexEnabled:function(){return this.regexEnabled}}),validations:{displayName:{required:i.required,minLength:Object(i.minLength)(1)},description:{required:i.required},attributeModel:{required:i.required},attributeType:{required:i.required},attributeKey:{required:i.required,isKey:function(e){return!(e.indexOf(" ")>=0)}}},methods:{addTagValue:function(e){var t={name:e};this.values.push(t),this.$refs.tagInput.$el.focus()},onTouch:function(){this.isTouched=!0},onDisplayNameChange:function(){this.attributeKey=Object(a.a)(this.displayName)},toggleRegexEnabled:function(){this.regexEnabled=!this.regexEnabled},addAttributes:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$v.$touch(),!t.$v.$invalid){e.next=3;break}return e.abrupt("return");case 3:return t.regexEnabled||(t.regexPattern=null,t.regexCue=null),e.prev=4,e.next=7,t.$store.dispatch("attributes/create",{attribute_display_name:t.displayName,attribute_description:t.description,attribute_model:t.attributeModel,attribute_display_type:t.attributeType,attribute_key:t.attributeKey,attribute_values:t.attributeListValues,regex_pattern:t.regexPattern?new RegExp(t.regexPattern).toString():null,regex_cue:t.regexCue});case 7:t.alertMessage=t.$t("ATTRIBUTES_MGMT.ADD.API.SUCCESS_MESSAGE"),t.onClose(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),r=null===e.t0||void 0===e.t0?void 0:e.t0.message,t.alertMessage=r||t.$t("ATTRIBUTES_MGMT.ADD.API.ERROR_MESSAGE");case 15:return e.prev=15,t.showAlert(t.alertMessage),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[4,11,15,18]])})),function(){var t=this,r=arguments;return new Promise((function(i,n){var a=e.apply(t,r);function s(e){u(a,i,n,s,o,"next",e)}function o(e){u(a,i,n,s,o,"throw",e)}s(void 0)}))})()}}},b=T,E=(r(3141),r(7)),v=Object(E.a)(b,(function(){var e=this,t=e._self._c;return t("woot-modal",{attrs:{show:e.show,"on-close":e.onClose},on:{"update:show":function(t){e.show=t}}},[t("div",{staticClass:"h-auto overflow-auto flex flex-col"},[t("woot-modal-header",{attrs:{"header-title":e.$t("ATTRIBUTES_MGMT.ADD.TITLE")}}),e._v(" "),t("form",{staticClass:"flex w-full",on:{submit:function(t){return t.preventDefault(),e.addAttributes.apply(null,arguments)}}},[t("div",{staticClass:"w-full"},[t("label",{class:{error:e.$v.attributeModel.$error}},[e._v("\n          "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.FORM.MODEL.LABEL"))+"\n          "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.attributeModel,expression:"attributeModel"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.attributeModel=t.target.multiple?r:r[0]}}},e._l(e.models,(function(r){return t("option",{key:r.id,domProps:{value:r.id}},[e._v("\n              "+e._s(r.option)+"\n            ")])})),0),e._v(" "),e.$v.attributeModel.$error?t("span",{staticClass:"message"},[e._v("\n            "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.FORM.MODEL.ERROR"))+"\n          ")]):e._e()]),e._v(" "),t("woot-input",{class:{error:e.$v.displayName.$error},attrs:{label:e.$t("ATTRIBUTES_MGMT.ADD.FORM.NAME.LABEL"),type:"text",error:e.$v.displayName.$error?e.$t("ATTRIBUTES_MGMT.ADD.FORM.NAME.ERROR"):"",placeholder:e.$t("ATTRIBUTES_MGMT.ADD.FORM.NAME.PLACEHOLDER")},on:{input:e.onDisplayNameChange,blur:e.$v.displayName.$touch},model:{value:e.displayName,callback:function(t){e.displayName=t},expression:"displayName"}}),e._v(" "),t("woot-input",{class:{error:e.$v.attributeKey.$error},attrs:{label:e.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.LABEL"),type:"text",error:e.$v.attributeKey.$error?e.keyErrorMessage:"",placeholder:e.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.PLACEHOLDER")},on:{blur:e.$v.attributeKey.$touch},model:{value:e.attributeKey,callback:function(t){e.attributeKey=t},expression:"attributeKey"}}),e._v(" "),t("label",{class:{error:e.$v.description.$error}},[e._v("\n          "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.FORM.DESC.LABEL"))+"\n          "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{rows:"3",type:"text",placeholder:e.$t("ATTRIBUTES_MGMT.ADD.FORM.DESC.PLACEHOLDER")},domProps:{value:e.description},on:{blur:e.$v.description.$touch,input:function(t){t.target.composing||(e.description=t.target.value)}}}),e._v(" "),e.$v.description.$error?t("span",{staticClass:"message"},[e._v("\n            "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.FORM.DESC.ERROR"))+"\n          ")]):e._e()]),e._v(" "),t("label",{class:{error:e.$v.attributeType.$error}},[e._v("\n          "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.LABEL"))+"\n          "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.attributeType,expression:"attributeType"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.attributeType=t.target.multiple?r:r[0]}}},e._l(e.types,(function(r){return t("option",{key:r.id,domProps:{value:r.id}},[e._v("\n              "+e._s(r.option)+"\n            ")])})),0),e._v(" "),e.$v.attributeType.$error?t("span",{staticClass:"message"},[e._v("\n            "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.ERROR"))+"\n          ")]):e._e()]),e._v(" "),e.isAttributeTypeList?t("div",{staticClass:"multiselect--wrap"},[t("label",[e._v("\n            "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.LIST.LABEL"))+"\n          ")]),e._v(" "),t("multiselect",{ref:"tagInput",class:{invalid:e.isMultiselectInvalid},attrs:{placeholder:e.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.LIST.PLACEHOLDER"),label:"name","track-by":"name",options:e.options,multiple:!0,taggable:!0},on:{close:e.onTouch,tag:e.addTagValue},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}}),e._v(" "),t("label",{directives:[{name:"show",rawName:"v-show",value:e.isMultiselectInvalid,expression:"isMultiselectInvalid"}],staticClass:"error-message"},[e._v("\n            "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.LIST.ERROR"))+"\n          ")])],1):e._e(),e._v(" "),e.isAttributeTypeText?t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.regexEnabled,expression:"regexEnabled"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.regexEnabled)?e._i(e.regexEnabled,null)>-1:e.regexEnabled},on:{input:e.toggleRegexEnabled,change:function(t){var r=e.regexEnabled,i=t.target,n=!!i.checked;if(Array.isArray(r)){var a=e._i(r,null);i.checked?a<0&&(e.regexEnabled=r.concat([null])):a>-1&&(e.regexEnabled=r.slice(0,a).concat(r.slice(a+1)))}else e.regexEnabled=n}}}),e._v("\n          "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.FORM.ENABLE_REGEX.LABEL"))+"\n        ")]):e._e(),e._v(" "),e.isAttributeTypeText&&e.isRegexEnabled?t("woot-input",{attrs:{label:e.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_PATTERN.LABEL"),type:"text",placeholder:e.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_PATTERN.PLACEHOLDER")},model:{value:e.regexPattern,callback:function(t){e.regexPattern=t},expression:"regexPattern"}}):e._e(),e._v(" "),e.isAttributeTypeText&&e.isRegexEnabled?t("woot-input",{attrs:{label:e.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_CUE.LABEL"),type:"text",placeholder:e.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_CUE.PLACEHOLDER")},model:{value:e.regexCue,callback:function(t){e.regexCue=t},expression:"regexCue"}}):e._e(),e._v(" "),t("div",{staticClass:"flex flex-row justify-end gap-2 py-2 px-0 w-full"},[t("woot-submit-button",{attrs:{disabled:e.isButtonDisabled,"button-text":e.$t("ATTRIBUTES_MGMT.ADD.SUBMIT")}}),e._v(" "),t("button",{staticClass:"button clear",on:{click:function(t){return t.preventDefault(),e.onClose.apply(null,arguments)}}},[e._v("\n            "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.CANCEL_BUTTON_TEXT"))+"\n          ")])],1)],1)])],1)])}),[],!1,null,"21d6cf87",null),f=v.exports,_=(r(43),r(153),r(2652));function h(e,t,r,i,n,a,s){try{var o=e[a](s),l=o.value}catch(u){return void r(u)}o.done?t(l):Promise.resolve(l).then(i,n)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var M={components:{},mixins:[l.a,_.a],props:{selectedAttribute:{type:Object,default:function(){}},isUpdating:{type:Boolean,default:!1}},data:function(){return{displayName:"",description:"",attributeType:0,regexPattern:null,regexCue:null,regexEnabled:!1,types:o,show:!0,attributeKey:"",values:[],options:[],isTouched:!0}},validations:{displayName:{required:i.required},attributeType:{required:i.required},description:{required:i.required,minLength:Object(i.minLength)(1)},attributeKey:{required:i.required,isKey:function(e){return!(e.indexOf(" ")>=0)}}},computed:m(m({},Object(n.mapGetters)({uiFlags:"attributes/getUIFlags"})),{},{setAttributeListValue:function(){return this.selectedAttribute.attribute_values.map((function(e){return{name:e}}))},updatedAttributeListValues:function(){return this.values.map((function(e){return e.name}))},isButtonDisabled:function(){return this.$v.description.$invalid||this.isMultiselectInvalid},isMultiselectInvalid:function(){return this.isAttributeTypeList&&this.isTouched&&0===this.values.length},pageTitle:function(){return"".concat(this.$t("ATTRIBUTES_MGMT.EDIT.TITLE")," - ").concat(this.selectedAttribute.attribute_display_name)},selectedAttributeType:function(){var e=this;return this.types.find((function(t){return t.option.toLowerCase()===e.selectedAttribute.attribute_display_type})).id},keyErrorMessage:function(){return this.$v.attributeKey.isKey?this.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.ERROR"):this.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.IN_VALID")},isAttributeTypeList:function(){return 6===this.attributeType},isAttributeTypeText:function(){return 0===this.attributeType},isRegexEnabled:function(){return this.regexEnabled}}),mounted:function(){this.setFormValues()},methods:{onClose:function(){this.$emit("on-close")},addTagValue:function(e){var t={name:e};this.values.push(t),this.$refs.tagInput.$el.focus()},setFormValues:function(){var e=this.selectedAttribute.regex_pattern?this.getRegexp(this.selectedAttribute.regex_pattern).source:null;this.displayName=this.selectedAttribute.attribute_display_name,this.description=this.selectedAttribute.attribute_description,this.attributeType=this.selectedAttributeType,this.attributeKey=this.selectedAttribute.attribute_key,this.regexPattern=e,this.regexCue=this.selectedAttribute.regex_cue,this.regexEnabled=null!=e,this.values=this.setAttributeListValue},editAttributes:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$v.$touch(),!t.$v.$invalid){e.next=3;break}return e.abrupt("return");case 3:return t.regexEnabled||(t.regexPattern=null,t.regexCue=null),e.prev=4,e.next=7,t.$store.dispatch("attributes/update",{id:t.selectedAttribute.id,attribute_description:t.description,attribute_display_name:t.displayName,attribute_values:t.updatedAttributeListValues,regex_pattern:t.regexPattern?new RegExp(t.regexPattern).toString():null,regex_cue:t.regexCue});case 7:t.alertMessage=t.$t("ATTRIBUTES_MGMT.EDIT.API.SUCCESS_MESSAGE"),t.onClose(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),r=null===e.t0||void 0===e.t0?void 0:e.t0.message,t.alertMessage=r||t.$t("ATTRIBUTES_MGMT.EDIT.API.ERROR_MESSAGE");case 15:return e.prev=15,t.showAlert(t.alertMessage),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[4,11,15,18]])})),function(){var t=this,r=arguments;return new Promise((function(i,n){var a=e.apply(t,r);function s(e){h(a,i,n,s,o,"next",e)}function o(e){h(a,i,n,s,o,"throw",e)}s(void 0)}))})()},toggleRegexEnabled:function(){this.regexEnabled=!this.regexEnabled}}},y=M,R=(r(3142),Object(E.a)(y,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"h-auto overflow-auto flex flex-col"},[t("woot-modal-header",{attrs:{"header-title":e.pageTitle}}),e._v(" "),t("form",{staticClass:"flex flex-col w-full",on:{submit:function(t){return t.preventDefault(),e.editAttributes.apply(null,arguments)}}},[t("div",{staticClass:"w-full"},[t("woot-input",{class:{error:e.$v.displayName.$error},attrs:{label:e.$t("ATTRIBUTES_MGMT.ADD.FORM.NAME.LABEL"),type:"text",error:e.$v.displayName.$error?e.$t("ATTRIBUTES_MGMT.ADD.FORM.NAME.ERROR"):"",placeholder:e.$t("ATTRIBUTES_MGMT.ADD.FORM.NAME.PLACEHOLDER")},on:{blur:e.$v.displayName.$touch},model:{value:e.displayName,callback:function(t){e.displayName="string"===typeof t?t.trim():t},expression:"displayName"}}),e._v(" "),t("woot-input",{class:{error:e.$v.attributeKey.$error},attrs:{label:e.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.LABEL"),type:"text",error:e.$v.attributeKey.$error?e.keyErrorMessage:"",placeholder:e.$t("ATTRIBUTES_MGMT.ADD.FORM.KEY.PLACEHOLDER"),readonly:""},on:{blur:e.$v.attributeKey.$touch},model:{value:e.attributeKey,callback:function(t){e.attributeKey="string"===typeof t?t.trim():t},expression:"attributeKey"}}),e._v(" "),t("label",{class:{error:e.$v.description.$error}},[e._v("\n        "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.FORM.DESC.LABEL"))+"\n        "),t("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.description,expression:"description",modifiers:{trim:!0}}],attrs:{rows:"5",type:"text",placeholder:e.$t("ATTRIBUTES_MGMT.ADD.FORM.DESC.PLACEHOLDER")},domProps:{value:e.description},on:{blur:[e.$v.description.$touch,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.description=t.target.value.trim())}}}),e._v(" "),e.$v.description.$error?t("span",{staticClass:"message"},[e._v("\n          "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.FORM.DESC.ERROR"))+"\n        ")]):e._e()]),e._v(" "),t("label",{class:{error:e.$v.attributeType.$error}},[e._v("\n        "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.LABEL"))+"\n        "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.attributeType,expression:"attributeType"}],attrs:{disabled:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.attributeType=t.target.multiple?r:r[0]}}},e._l(e.types,(function(r){return t("option",{key:r.id,domProps:{value:r.id}},[e._v("\n            "+e._s(r.option)+"\n          ")])})),0),e._v(" "),e.$v.attributeType.$error?t("span",{staticClass:"message"},[e._v("\n          "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.ERROR"))+"\n        ")]):e._e()]),e._v(" "),e.isAttributeTypeList?t("div",{staticClass:"multiselect--wrap"},[t("label",[e._v("\n          "+e._s(e.$t("ATTRIBUTES_MGMT.EDIT.TYPE.LIST.LABEL"))+"\n        ")]),e._v(" "),t("multiselect",{ref:"tagInput",class:{invalid:e.isMultiselectInvalid},attrs:{placeholder:e.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.LIST.PLACEHOLDER"),label:"name","track-by":"name",options:e.options,multiple:!0,taggable:!0},on:{tag:e.addTagValue},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}}),e._v(" "),t("label",{directives:[{name:"show",rawName:"v-show",value:e.isMultiselectInvalid,expression:"isMultiselectInvalid"}],staticClass:"error-message"},[e._v("\n          "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.FORM.TYPE.LIST.ERROR"))+"\n        ")])],1):e._e(),e._v(" "),e.isAttributeTypeText?t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.regexEnabled,expression:"regexEnabled"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.regexEnabled)?e._i(e.regexEnabled,null)>-1:e.regexEnabled},on:{input:e.toggleRegexEnabled,change:function(t){var r=e.regexEnabled,i=t.target,n=!!i.checked;if(Array.isArray(r)){var a=e._i(r,null);i.checked?a<0&&(e.regexEnabled=r.concat([null])):a>-1&&(e.regexEnabled=r.slice(0,a).concat(r.slice(a+1)))}else e.regexEnabled=n}}}),e._v("\n        "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.FORM.ENABLE_REGEX.LABEL"))+"\n      ")]):e._e(),e._v(" "),e.isAttributeTypeText&&e.isRegexEnabled?t("woot-input",{attrs:{label:e.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_PATTERN.LABEL"),type:"text",placeholder:e.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_PATTERN.PLACEHOLDER")},model:{value:e.regexPattern,callback:function(t){e.regexPattern=t},expression:"regexPattern"}}):e._e(),e._v(" "),e.isAttributeTypeText&&e.isRegexEnabled?t("woot-input",{attrs:{label:e.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_CUE.LABEL"),type:"text",placeholder:e.$t("ATTRIBUTES_MGMT.ADD.FORM.REGEX_CUE.PLACEHOLDER")},model:{value:e.regexCue,callback:function(t){e.regexCue=t},expression:"regexCue"}}):e._e()],1),e._v(" "),t("div",{staticClass:"flex flex-row justify-end gap-2 py-2 px-0 w-full"},[t("woot-button",{attrs:{"is-loading":e.isUpdating,disabled:e.isButtonDisabled}},[e._v("\n        "+e._s(e.$t("ATTRIBUTES_MGMT.EDIT.UPDATE_BUTTON_TEXT"))+"\n      ")]),e._v(" "),t("woot-button",{attrs:{variant:"clear"},on:{click:function(t){return t.preventDefault(),e.onClose.apply(null,arguments)}}},[e._v("\n        "+e._s(e.$t("ATTRIBUTES_MGMT.ADD.CANCEL_BUTTON_TEXT"))+"\n      ")])],1)])],1)}),[],!1,null,"21f21e82",null));function x(e,t,r,i,n,a,s){try{var o=e[a](s),l=o.value}catch(u){return void r(u)}o.done?t(l):Promise.resolve(l).then(i,n)}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var $={components:{EditAttribute:R.exports},mixins:[l.a],data:function(){return{selectedTabIndex:0,showEditPopup:!1,showDeletePopup:!1,selectedAttribute:{}}},computed:w(w({},Object(n.mapGetters)({uiFlags:"attributes/getUIFlags"})),{},{attributes:function(){var e=this.selectedTabIndex?"contact_attribute":"conversation_attribute";return this.$store.getters["attributes/getAttributesByModel"](e)},tabs:function(){return[{key:0,name:this.$t("ATTRIBUTES_MGMT.TABS.CONVERSATION")},{key:1,name:this.$t("ATTRIBUTES_MGMT.TABS.CONTACT")}]},deleteConfirmText:function(){return"".concat(this.$t("ATTRIBUTES_MGMT.DELETE.CONFIRM.YES")," ").concat(this.selectedAttribute.attribute_display_name)},deleteRejectText:function(){return this.$t("ATTRIBUTES_MGMT.DELETE.CONFIRM.NO")},confirmDeleteTitle:function(){return this.$t("ATTRIBUTES_MGMT.DELETE.CONFIRM.TITLE",{attributeName:this.selectedAttribute.attribute_display_name})},confirmPlaceHolderText:function(){return"".concat(this.$t("ATTRIBUTES_MGMT.DELETE.CONFIRM.PLACE_HOLDER",{attributeName:this.selectedAttribute.attribute_display_name}))}}),mounted:function(){this.fetchAttributes(this.selectedTabIndex)},methods:{onClickTabChange:function(e){this.selectedTabIndex=e,this.fetchAttributes(e)},fetchAttributes:function(e){this.$store.dispatch("attributes/get",e)},deleteAttributes:function(e){var t,r=this;return(t=regeneratorRuntime.mark((function t(){var i,n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.id,t.prev=1,t.next=4,r.$store.dispatch("attributes/delete",i);case 4:r.showAlert(r.$t("ATTRIBUTES_MGMT.DELETE.API.SUCCESS_MESSAGE")),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),a=(null===t.t0||void 0===t.t0||null===(n=t.t0.response)||void 0===n?void 0:n.message)||r.$t("ATTRIBUTES_MGMT.DELETE.API.ERROR_MESSAGE"),r.showAlert(a);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})),function(){var e=this,r=arguments;return new Promise((function(i,n){var a=t.apply(e,r);function s(e){x(a,i,n,s,o,"next",e)}function o(e){x(a,i,n,s,o,"throw",e)}s(void 0)}))})()},openEditPopup:function(e){this.showEditPopup=!0,this.selectedAttribute=e},hideEditPopup:function(){this.showEditPopup=!1},confirmDeletion:function(){this.deleteAttributes(this.selectedAttribute),this.closeDelete()},openDelete:function(e){this.showDeletePopup=!0,this.selectedAttribute=e},closeDelete:function(){this.showDeletePopup=!1,this.selectedAttribute={}}}},I=$,S=(r(3143),{components:{AddAttribute:f,CustomAttribute:Object(E.a)(I,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-row gap-4 p-8"},[t("div",{staticClass:"w-full lg:w-3/5"},[t("woot-tabs",{attrs:{index:e.selectedTabIndex},on:{change:e.onClickTabChange}},e._l(e.tabs,(function(e){return t("woot-tabs-item",{key:e.key,attrs:{name:e.name,"show-badge":!1}})})),1),e._v(" "),t("div",{staticClass:"w-full"},[e.uiFlags.isFetching||e.attributes.length?e._e():t("p",{staticClass:"mt-12 flex items-center justify-center"},[e._v("\n        "+e._s(e.$t("ATTRIBUTES_MGMT.LIST.EMPTY_RESULT.404"))+"\n      ")]),e._v(" "),e.uiFlags.isFetching?t("woot-loading-state",{attrs:{message:e.$t("ATTRIBUTES_MGMT.LOADING")}}):e._e(),e._v(" "),!e.uiFlags.isFetching&&e.attributes.length?t("table",{staticClass:"w-full mt-2 table-fixed woot-table"},[t("thead",e._l(e.$t("ATTRIBUTES_MGMT.LIST.TABLE_HEADER"),(function(r){return t("th",{key:r,staticClass:"pl-0 max-w-[6.25rem] min-w-[5rem]"},[e._v("\n            "+e._s(r)+"\n          ")])})),0),e._v(" "),t("tbody",e._l(e.attributes,(function(r){return t("tr",{key:r.attribute_key},[t("td",{staticClass:"pl-0 max-w-[6.25rem] min-w-[5rem] overflow-hidden whitespace-nowrap text-ellipsis"},[e._v("\n              "+e._s(r.attribute_display_name)+"\n            ")]),e._v(" "),t("td",{staticClass:"pl-0 max-w-[10rem] min-w-[6.25rem] overflow-hidden whitespace-nowrap text-ellipsis"},[e._v("\n              "+e._s(r.attribute_description)+"\n            ")]),e._v(" "),t("td",{staticClass:"pl-0 max-w-[6.25rem] min-w-[5rem] overflow-hidden whitespace-nowrap text-ellipsis"},[e._v("\n              "+e._s(r.attribute_display_type)+"\n            ")]),e._v(" "),t("td",{staticClass:"attribute-key pl-0 max-w-[6.25rem] min-w-[5rem] overflow-hidden whitespace-nowrap text-ellipsis"},[e._v("\n              "+e._s(r.attribute_key)+"\n            ")]),e._v(" "),t("td",{staticClass:"button-wrapper"},[t("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("ATTRIBUTES_MGMT.LIST.BUTTONS.EDIT"),expression:"$t('ATTRIBUTES_MGMT.LIST.BUTTONS.EDIT')",modifiers:{top:!0}}],attrs:{variant:"smooth",size:"tiny","color-scheme":"secondary","class-names":"grey-btn",icon:"edit"},on:{click:function(t){return e.openEditPopup(r)}}}),e._v(" "),t("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("ATTRIBUTES_MGMT.LIST.BUTTONS.DELETE"),expression:"$t('ATTRIBUTES_MGMT.LIST.BUTTONS.DELETE')",modifiers:{top:!0}}],attrs:{variant:"smooth","color-scheme":"alert",size:"tiny",icon:"dismiss-circle","class-names":"grey-btn"},on:{click:function(t){return e.openDelete(r)}}})],1)])})),0)]):e._e()],1)],1),e._v(" "),t("div",{staticClass:"hidden lg:block w-1/3"},[t("span",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.$t("ATTRIBUTES_MGMT.SIDEBAR_TXT"),expression:"$t('ATTRIBUTES_MGMT.SIDEBAR_TXT')"}]})]),e._v(" "),t("woot-modal",{attrs:{show:e.showEditPopup,"on-close":e.hideEditPopup},on:{"update:show":function(t){e.showEditPopup=t}}},[t("edit-attribute",{attrs:{"selected-attribute":e.selectedAttribute,"is-updating":e.uiFlags.isUpdating},on:{"on-close":e.hideEditPopup}})],1),e._v(" "),e.showDeletePopup?t("woot-confirm-delete-modal",{attrs:{show:e.showDeletePopup,title:e.confirmDeleteTitle,message:e.$t("ATTRIBUTES_MGMT.DELETE.CONFIRM.MESSAGE"),"confirm-text":e.deleteConfirmText,"reject-text":e.deleteRejectText,"confirm-value":e.selectedAttribute.attribute_display_name,"confirm-place-holder-text":e.confirmPlaceHolderText},on:{"update:show":function(t){e.showDeletePopup=t},"on-confirm":e.confirmDeletion,"on-close":e.closeDelete}}):e._e()],1)}),[],!1,null,"76aa8894",null).exports},data:function(){return{showAddPopup:!1}},methods:{openAddPopup:function(){this.showAddPopup=!0},hideAddPopup:function(){this.showAddPopup=!1}}}),P=Object(E.a)(S,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex-1 overflow-auto"},[t("woot-button",{attrs:{"color-scheme":"success","class-names":"button--fixed-top",icon:"add-circle"},on:{click:function(t){return e.openAddPopup()}}},[e._v("\n    "+e._s(e.$t("ATTRIBUTES_MGMT.HEADER_BTN_TXT"))+"\n  ")]),e._v(" "),t("custom-attribute"),e._v(" "),t("woot-modal",{attrs:{show:e.showAddPopup,"on-close":e.hideAddPopup},on:{"update:show":function(t){e.showAddPopup=t}}},[t("add-attribute",{attrs:{"on-close":e.hideAddPopup}})],1)],1)}),[],!1,null,null,null);t.default=P.exports}}]);
//# sourceMappingURL=53-f7b8da5b94ccc69c45ec.chunk.js.map