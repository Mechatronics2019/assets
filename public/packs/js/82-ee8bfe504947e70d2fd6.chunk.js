(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{2714:function(t,e,n){},2811:function(t,e,n){"use strict";n(2714)},2871:function(t,e,n){"use strict";n(40),n(5),n(32),n(11),n(9),n(12),n(10),n(13);var r=n(61),o=(n(314),n(53),n(68),n(355)),i=n(27);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={components:{LoadingState:o.a},props:{value:{type:String,default:""}},data:function(){return{iframeLoading:!0}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(i.mapGetters)({globalConfig:"globalConfig/get"})),mounted:function(){var t=this;window.onmessage=function(e){if("string"===typeof e.data&&e.data.startsWith("chatwoot-csml-editor:update")){var n=e.data.replace("chatwoot-csml-editor:update","");t.$emit("input",n)}}},methods:{onEditorLoad:function(){var t=document.getElementById("csml-editor--frame"),e={event:"editorContext",data:this.value||""};t.contentWindow.postMessage(JSON.stringify(e),"*"),this.iframeLoading=!1}}},l=s,u=(n(2811),n(7));function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b={components:{CsmlMonacoEditor:Object(u.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"csml-editor--container"},[t.iframeLoading?e("loading-state",{staticClass:"dashboard-app_loading-container",attrs:{message:t.$t("AGENT_BOTS.LOADING_EDITOR")}}):t._e(),t._v(" "),e("iframe",{attrs:{id:"csml-editor--frame",src:t.globalConfig.csmlEditorHost},on:{load:t.onEditorLoad}})],1)}),[],!1,null,"d9e9be14",null).exports},props:{agentBot:{type:Object,default:function(){}}},validations:{bot:{name:{required:r.required},csmlContent:{required:r.required}}},data:function(){return{bot:{name:this.agentBot.name||"",description:this.agentBot.description||"",csmlContent:this.agentBot.bot_config.csml_content||""}}},methods:{onSubmit:function(){this.$v.$touch(),this.$v.$invalid||this.$emit("submit",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({id:this.agentBot.id||""},this.bot))}}},d=b,O=Object(u.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-auto overflow-auto flex flex-col"},[e("div",{staticClass:"flex flex-row"},[e("div",{staticClass:"w-[68%]"},[e("div",{staticClass:"h-[calc(100vh-56px)] relative"},[e("csml-monaco-editor",{staticClass:"w-full h-full",model:{value:t.bot.csmlContent,callback:function(e){t.$set(t.bot,"csmlContent",e)},expression:"bot.csmlContent"}}),t._v(" "),t.$v.bot.csmlContent.$error?e("div",{staticClass:"bg-red-100 dark:bg-red-200 text-white dark:text-white absolute bottom-0 w-full p-2.5 flex items-center text-xs justify-center flex-shrink-0"},[e("span",[t._v(t._s(t.$t("AGENT_BOTS.CSML_BOT_EDITOR.BOT_CONFIG.ERROR")))])]):t._e()],1)]),t._v(" "),e("div",{staticClass:"w-[32%] overflow-auto p-4 h-[calc(100vh-56px)]"},[e("form",{staticClass:"flex flex-col justify-between h-full",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("div",[e("label",{class:{error:t.$v.bot.name.$error}},[t._v("\n            "+t._s(t.$t("AGENT_BOTS.CSML_BOT_EDITOR.NAME.LABEL"))+"\n            "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.bot.name,expression:"bot.name"}],attrs:{type:"text",placeholder:t.$t("AGENT_BOTS.CSML_BOT_EDITOR.NAME.PLACEHOLDER")},domProps:{value:t.bot.name},on:{input:function(e){e.target.composing||t.$set(t.bot,"name",e.target.value)}}}),t._v(" "),t.$v.bot.name.$error?e("span",{staticClass:"message"},[t._v("\n              "+t._s(t.$t("AGENT_BOTS.CSML_BOT_EDITOR.NAME.ERROR"))+"\n            ")]):t._e()]),t._v(" "),e("label",[t._v("\n            "+t._s(t.$t("AGENT_BOTS.CSML_BOT_EDITOR.DESCRIPTION.LABEL"))+"\n            "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bot.description,expression:"bot.description"}],attrs:{rows:"4",placeholder:t.$t("AGENT_BOTS.CSML_BOT_EDITOR.DESCRIPTION.PLACEHOLDER")},domProps:{value:t.bot.description},on:{input:function(e){e.target.composing||t.$set(t.bot,"description",e.target.value)}}})]),t._v(" "),e("woot-button",[t._v("\n            "+t._s(t.$t("AGENT_BOTS.CSML_BOT_EDITOR.SUBMIT"))+"\n          ")])],1)])])])])}),[],!1,null,null,null);e.a=O.exports},3375:function(t,e,n){"use strict";n.r(e);n(34),n(40),n(5),n(32),n(53),n(68),n(43),n(11),n(9),n(12),n(10),n(13),n(8),n(24);var r=n(77),o=n(2871),i=n(14),a=n(27);function c(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(l){return void n(l)}c.done?e(s):Promise.resolve(s).then(r,o)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={components:{CsmlBotEditor:o.a},mixins:[r.a],computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(a.mapGetters)({accountId:"getCurrentAccountId"})),methods:{saveBot:function(t){var e,n=this;return(e=regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.$store.dispatch("agentBots/create",{name:t.name,description:t.description,bot_type:"csml",bot_config:{csml_content:t.csmlContent}});case 3:(r=e.sent)&&n.$router.replace(Object(i.c)("accounts/".concat(n.accountId,"/settings/agent-bots/csml/").concat(r.id))),n.showAlert(n.$t("AGENT_BOTS.ADD.API.SUCCESS_MESSAGE")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n.showAlert(n.$t("AGENT_BOTS.ADD.API.ERROR_MESSAGE"));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(t){c(i,r,o,a,s,"next",t)}function s(t){c(i,r,o,a,s,"throw",t)}a(void 0)}))})()}}},p=u,f=n(7),b=Object(f.a)(p,(function(){return(0,this._self._c)("csml-bot-editor",{attrs:{"agent-bot":{bot_config:{}}},on:{submit:this.saveBot}})}),[],!1,null,null,null);e.default=b.exports}}]);
//# sourceMappingURL=82-ee8bfe504947e70d2fd6.chunk.js.map