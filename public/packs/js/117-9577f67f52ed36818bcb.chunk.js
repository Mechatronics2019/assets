(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{3379:function(t,n,s){"use strict";s.r(n);s(43);var o=s(366),e={components:{EmptyState:s(1914).a},mixins:[o.a],computed:{currentInbox:function(){return this.$store.getters["inboxes/getInbox"](this.$route.params.inbox_id)},isATwilioInbox:function(){return"Channel::TwilioSms"===this.currentInbox.channel_type},isAEmailInbox:function(){return"Channel::Email"===this.currentInbox.channel_type},isALineInbox:function(){return"Channel::Line"===this.currentInbox.channel_type},isASmsInbox:function(){return"Channel::Sms"===this.currentInbox.channel_type},isWhatsAppCloudInbox:function(){return"Channel::Whatsapp"===this.currentInbox.channel_type&&"whatsapp_cloud"===this.currentInbox.provider},message:function(){return this.isATwilioInbox?"".concat(this.$t("INBOX_MGMT.FINISH.MESSAGE"),". ").concat(this.$t("INBOX_MGMT.ADD.TWILIO.API_CALLBACK.SUBTITLE")):this.isASmsInbox?"".concat(this.$t("INBOX_MGMT.FINISH.MESSAGE"),". ").concat(this.$t("INBOX_MGMT.ADD.SMS.BANDWIDTH.API_CALLBACK.SUBTITLE")):this.isALineInbox?"".concat(this.$t("INBOX_MGMT.FINISH.MESSAGE"),". ").concat(this.$t("INBOX_MGMT.ADD.LINE_CHANNEL.API_CALLBACK.SUBTITLE")):this.isWhatsAppCloudInbox?"".concat(this.$t("INBOX_MGMT.FINISH.MESSAGE"),". ").concat(this.$t("INBOX_MGMT.ADD.WHATSAPP.API_CALLBACK.SUBTITLE")):this.isAEmailInbox&&!this.currentInbox.provider?this.$t("INBOX_MGMT.ADD.EMAIL_CHANNEL.FINISH_MESSAGE"):this.currentInbox.web_widget_script?this.$t("INBOX_MGMT.FINISH.WEBSITE_SUCCESS"):this.$t("INBOX_MGMT.FINISH.MESSAGE")}}},i=s(7),a=Object(i.a)(e,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"border border-slate-25 dark:border-slate-800/60 bg-white dark:bg-slate-900 h-full p-6 w-full max-w-full md:w-3/4 md:max-w-[75%] flex-shrink-0 flex-grow-0"},[n("empty-state",{attrs:{title:t.$t("INBOX_MGMT.FINISH.TITLE"),message:t.message,"button-text":t.$t("INBOX_MGMT.FINISH.BUTTON_TEXT")}},[n("div",{staticClass:"w-full text-center"},[n("div",{staticClass:"my-4 mx-auto max-w-[70%]"},[t.currentInbox.web_widget_script?n("woot-code",{attrs:{script:t.currentInbox.web_widget_script}}):t._e()],1),t._v(" "),n("div",{staticClass:"w-[50%] max-w-[50%] ml-[25%]"},[t.isATwilioInbox?n("woot-code",{attrs:{lang:"html",script:t.currentInbox.callback_webhook_url}}):t._e()],1),t._v(" "),t.isWhatsAppCloudInbox?n("div",{staticClass:"w-[50%] max-w-[50%] ml-[25%]"},[n("p",{staticClass:"text-slate-700 dark:text-slate-200 font-medium mt-8"},[t._v("\n          "+t._s(t.$t("INBOX_MGMT.ADD.WHATSAPP.API_CALLBACK.WEBHOOK_URL"))+"\n        ")]),t._v(" "),n("woot-code",{attrs:{lang:"html",script:t.currentInbox.callback_webhook_url}}),t._v(" "),n("p",{staticClass:"text-slate-700 dark:text-slate-200 font-medium mt-8"},[t._v("\n          "+t._s(t.$t("INBOX_MGMT.ADD.WHATSAPP.API_CALLBACK.WEBHOOK_VERIFICATION_TOKEN"))+"\n        ")]),t._v(" "),n("woot-code",{attrs:{lang:"html",script:t.currentInbox.provider_config.webhook_verify_token}})],1):t._e(),t._v(" "),n("div",{staticClass:"w-[50%] max-w-[50%] ml-[25%]"},[t.isALineInbox?n("woot-code",{attrs:{lang:"html",script:t.currentInbox.callback_webhook_url}}):t._e()],1),t._v(" "),n("div",{staticClass:"w-[50%] max-w-[50%] ml-[25%]"},[t.isASmsInbox?n("woot-code",{attrs:{lang:"html",script:t.currentInbox.callback_webhook_url}}):t._e()],1),t._v(" "),t.isAEmailInbox&&!t.currentInbox.provider?n("div",{staticClass:"w-[50%] max-w-[50%] ml-[25%]"},[n("woot-code",{attrs:{lang:"html",script:t.currentInbox.forward_to_email}})],1):t._e(),t._v(" "),n("div",{staticClass:"flex justify-center gap-2 mt-4"},[n("router-link",{staticClass:"button hollow primary rounded",attrs:{to:{name:"settings_inbox_show",params:{inboxId:t.$route.params.inbox_id}}}},[t._v("\n          "+t._s(t.$t("INBOX_MGMT.FINISH.MORE_SETTINGS"))+"\n        ")]),t._v(" "),n("router-link",{staticClass:"button success rounded",attrs:{to:{name:"inbox_dashboard",params:{inboxId:t.$route.params.inbox_id}}}},[t._v("\n          "+t._s(t.$t("INBOX_MGMT.FINISH.BUTTON_TEXT"))+"\n        ")])],1)])])],1)}),[],!1,null,null,null);n.default=a.exports}}]);
//# sourceMappingURL=117-9577f67f52ed36818bcb.chunk.js.map