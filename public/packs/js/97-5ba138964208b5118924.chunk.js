(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{3154:function(e,t,n){e.exports=n.p+"media/dashboard/assets/images/flag-2fe41f128623199c8388d77dfc4cff4e.svg"},3376:function(e,t,n){"use strict";n.r(t);n(34),n(43),n(40),n(11),n(5),n(9),n(12),n(10),n(13),n(8),n(24);var o=n(27),s=n(3301),i=n(242),a=n(305),l=n(241);function r(e,t,n,o,s,i,a){try{var l=e[i](a),r=l.value}catch(c){return void n(c)}l.done?t(r):Promise.resolve(r).then(o,s)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h={components:{Settings:s.default},mixins:[i.a,a.a,l.a],data:function(){return{loading:{},showSettings:!1,showDeletePopup:!1,selectedInbox:{}}},computed:p(p({},Object(o.mapGetters)({inboxesList:"inboxes/getInboxes",globalConfig:"globalConfig/get"})),{},{deleteConfirmText:function(){return"".concat(this.$t("INBOX_MGMT.DELETE.CONFIRM.YES")," ").concat(this.selectedInbox.name)},deleteRejectText:function(){return"".concat(this.$t("INBOX_MGMT.DELETE.CONFIRM.NO")," ").concat(this.selectedInbox.name)},confirmDeleteMessage:function(){return"".concat(this.$t("INBOX_MGMT.DELETE.CONFIRM.MESSAGE")," ").concat(this.selectedInbox.name,"?")},confirmPlaceHolderText:function(){return"".concat(this.$t("INBOX_MGMT.DELETE.CONFIRM.PLACE_HOLDER",{inboxName:this.selectedInbox.name}))}}),methods:{twilioChannelName:function(e){var t=e.medium;return"whatsapp"===(void 0===t?"":t)?"WhatsApp":"Twilio SMS"},openSettings:function(e){this.showSettings=!0,this.selectedInbox=e},closeSettings:function(){this.showSettings=!1,this.selectedInbox={}},deleteInbox:function(e){var t,n=this;return(t=regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.id,t.prev=1,t.next=4,n.$store.dispatch("inboxes/delete",o);case 4:bus.$emit("newToastMessage",n.$t("INBOX_MGMT.DELETE.API.SUCCESS_MESSAGE")),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),bus.$emit("newToastMessage",n.$t("INBOX_MGMT.DELETE.API.ERROR_MESSAGE"));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})),function(){var e=this,n=arguments;return new Promise((function(o,s){var i=t.apply(e,n);function a(e){r(i,o,s,a,l,"next",e)}function l(e){r(i,o,s,a,l,"throw",e)}a(void 0)}))})()},confirmDeletion:function(){this.deleteInbox(this.selectedInbox),this.closeDelete()},openDelete:function(e){this.showDeletePopup=!0,this.selectedInbox=e},closeDelete:function(){this.showDeletePopup=!1,this.selectedInbox={}}}},_=h,m=n(7),d=Object(m.a)(_,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex-1 overflow-auto"},[t("div",{staticClass:"flex flex-row gap-4 p-8"},[t("div",{staticClass:"w-full lg:w-3/5"},[e.inboxesList.length?e._e():t("p",{staticClass:"flex h-full items-center flex-col justify-center"},[e._v("\n        "+e._s(e.$t("INBOX_MGMT.LIST.404"))+"\n        "),e.isAdmin?t("router-link",{attrs:{to:e.addAccountScoping("settings/inboxes/new")}},[e._v("\n          "+e._s(e.$t("SETTINGS.INBOXES.NEW_INBOX"))+"\n        ")]):e._e()],1),e._v(" "),e.inboxesList.length?t("table",{staticClass:"woot-table"},[t("tbody",e._l(e.inboxesList,(function(o){return t("tr",{key:o.id},[t("td",[o.avatar_url?t("img",{staticClass:"woot-thumbnail",attrs:{src:o.avatar_url,alt:"No Page Image"}}):t("img",{staticClass:"woot-thumbnail",attrs:{src:n(3154),alt:"No Page Image"}})]),e._v(" "),t("td",[t("span",{staticClass:"agent-name"},[e._v(e._s(o.name))]),e._v(" "),"Channel::FacebookPage"===o.channel_type?t("span",[e._v("\n                Facebook\n              ")]):e._e(),e._v(" "),"Channel::WebWidget"===o.channel_type?t("span",[e._v("\n                Website\n              ")]):e._e(),e._v(" "),"Channel::TwitterProfile"===o.channel_type?t("span",[e._v("\n                Twitter\n              ")]):e._e(),e._v(" "),"Channel::TwilioSms"===o.channel_type?t("span",[e._v("\n                "+e._s(e.twilioChannelName(o))+"\n              ")]):e._e(),e._v(" "),"Channel::Whatsapp"===o.channel_type?t("span",[e._v("\n                Whatsapp\n              ")]):e._e(),e._v(" "),"Channel::Sms"===o.channel_type?t("span",[e._v(" Sms ")]):e._e(),e._v(" "),"Channel::Email"===o.channel_type?t("span",[e._v("\n                Email\n              ")]):e._e(),e._v(" "),"Channel::Telegram"===o.channel_type?t("span",[e._v("\n                Telegram\n              ")]):e._e(),e._v(" "),"Channel::Line"===o.channel_type?t("span",[e._v("Line")]):e._e(),e._v(" "),"Channel::Api"===o.channel_type?t("span",[e._v("\n                "+e._s(e.globalConfig.apiChannelName||"API")+"\n              ")]):e._e()]),e._v(" "),t("td",[t("div",{staticClass:"button-wrapper"},[t("router-link",{attrs:{to:e.addAccountScoping(`settings/inboxes/${o.id}`)}},[e.isAdmin?t("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("INBOX_MGMT.SETTINGS"),expression:"$t('INBOX_MGMT.SETTINGS')",modifiers:{top:!0}}],attrs:{variant:"smooth",size:"tiny",icon:"settings","color-scheme":"secondary","class-names":"grey-btn"}}):e._e()],1),e._v(" "),e.isAdmin?t("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("INBOX_MGMT.DELETE.BUTTON_TEXT"),expression:"$t('INBOX_MGMT.DELETE.BUTTON_TEXT')",modifiers:{top:!0}}],attrs:{variant:"smooth","color-scheme":"alert",size:"tiny","class-names":"grey-btn","is-loading":e.loading[o.id],icon:"dismiss-circle"},on:{click:function(t){return e.openDelete(o)}}}):e._e()],1)])])})),0)]):e._e()]),e._v(" "),t("div",{staticClass:"w-1/3 hidden lg:block"},[t("span",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:e.useInstallationName(e.$t("INBOX_MGMT.SIDEBAR_TXT"),e.globalConfig.installationName),expression:"\n          useInstallationName(\n            $t('INBOX_MGMT.SIDEBAR_TXT'),\n            globalConfig.installationName\n          )\n        "}]})])]),e._v(" "),e.showSettings?t("settings",{attrs:{show:e.showSettings,"on-close":e.closeSettings,inbox:e.selectedInbox},on:{"update:show":function(t){e.showSettings=t}}}):e._e(),e._v(" "),e.showDeletePopup?t("woot-confirm-delete-modal",{attrs:{show:e.showDeletePopup,title:e.$t("INBOX_MGMT.DELETE.CONFIRM.TITLE"),message:e.confirmDeleteMessage,"confirm-text":e.deleteConfirmText,"reject-text":e.deleteRejectText,"confirm-value":e.selectedInbox.name,"confirm-place-holder-text":e.confirmPlaceHolderText},on:{"update:show":function(t){e.showDeletePopup=t},"on-confirm":e.confirmDeletion,"on-close":e.closeDelete}}):e._e()],1)}),[],!1,null,null,null);t.default=d.exports}}]);
//# sourceMappingURL=97-5ba138964208b5118924.chunk.js.map