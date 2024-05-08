(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{2783:function(t,e,n){},2863:function(t,e,n){"use strict";n(2783)},3049:function(t,e,n){"use strict";n.r(e);n(34),n(40),n(5),n(32),n(8),n(24);var a=n(77),o=n(61),r=n(315),s=n(87);function i(t,e,n,a,o,r,s){try{var i=t[r](s),l=i.value}catch(E){return void n(E)}i.done?e(l):Promise.resolve(l).then(a,o)}var l={components:{CategoryNameIconInput:n(1983).a},mixins:[a.a],props:{show:{type:Boolean,default:!0},portalName:{type:String,default:""},locale:{type:String,default:""},category:{type:Object,default:function(){}},selectedPortalSlug:{type:String,default:""}},data:function(){return{id:this.category.id,name:"",icon:"",slug:"",description:""}},validations:{name:{required:o.required,minLength:Object(o.minLength)(2)},slug:{required:o.required}},computed:{slugError:function(){return this.$v.slug.$error?this.$t("HELP_CENTER.CATEGORY.ADD.SLUG.ERROR"):""}},mounted:function(){this.updateDataFromStore()},methods:{updateDataFromStore:function(){var t=this.category;this.name=t.name,this.icon=t.icon,this.slug=t.slug,this.description=t.description},changeName:function(t){this.name=t,this.slug=Object(r.b)(this.name)},onClickInsertEmoji:function(t){this.icon=t},onUpdate:function(){this.$emit("update")},onClose:function(){this.$emit("cancel")},editCategory:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var n,a,o,r,i,l,E;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.id,a=e.name,o=e.slug,r=e.icon,i=e.description,l={id:n,name:a,icon:r,slug:o,description:i},e.$v.$touch(),!e.$v.$invalid){t.next=5;break}return t.abrupt("return");case 5:return t.prev=5,t.next=8,e.$store.dispatch("categories/update",{portalSlug:e.selectedPortalSlug,categoryId:n,categoryObj:l});case 8:e.alertMessage=e.$t("HELP_CENTER.CATEGORY.EDIT.API.SUCCESS_MESSAGE"),e.$track(s.i.EDIT_CATEGORY),e.onClose(),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(5),E=null===t.t0||void 0===t.t0?void 0:t.t0.message,e.alertMessage=E||e.$t("HELP_CENTER.CATEGORY.EDIT.API.ERROR_MESSAGE");case 17:return t.prev=17,e.showAlert(e.alertMessage),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[5,13,17,20]])})),function(){var e=this,n=arguments;return new Promise((function(a,o){var r=t.apply(e,n);function s(t){i(r,a,o,s,l,"next",t)}function l(t){i(r,a,o,s,l,"throw",t)}s(void 0)}))})()}}},E=l,c=(n(2863),n(7)),u=Object(c.a)(E,(function(){var t=this,e=t._self._c;return e("woot-modal",{attrs:{show:t.show,"on-close":t.onClose},on:{"update:show":function(e){t.show=e}}},[e("woot-modal-header",{attrs:{"header-title":t.$t("HELP_CENTER.CATEGORY.EDIT.TITLE"),"header-content":t.$t("HELP_CENTER.CATEGORY.EDIT.SUB_TITLE")}}),t._v(" "),e("form",{staticClass:"w-full",on:{submit:function(e){return e.preventDefault(),t.onUpdate.apply(null,arguments)}}},[e("div",{staticClass:"w-full"},[e("div",{staticClass:"flex flex-row w-full mt-0 mx-0 mb-4"},[e("div",{staticClass:"w-[50%]"},[e("label",[e("span",[t._v(t._s(t.$t("HELP_CENTER.CATEGORY.EDIT.PORTAL")))]),t._v(" "),e("p",{staticClass:"text-slate-600 dark:text-slate-400"},[t._v(t._s(t.portalName))])])]),t._v(" "),e("div",{staticClass:"w-[50%]"},[e("label",[e("span",[t._v(t._s(t.$t("HELP_CENTER.CATEGORY.EDIT.LOCALE")))]),t._v(" "),e("p",{staticClass:"text-slate-600 dark:text-slate-400"},[t._v(t._s(t.locale))])])])]),t._v(" "),e("category-name-icon-input",{attrs:{label:t.$t("HELP_CENTER.CATEGORY.EDIT.NAME.LABEL"),placeholder:t.$t("HELP_CENTER.CATEGORY.EDIT.NAME.PLACEHOLDER"),"help-text":t.$t("HELP_CENTER.CATEGORY.EDIT.NAME.HELP_TEXT"),"has-error":t.$v.name.$error,"error-message":t.$t("HELP_CENTER.CATEGORY.ADD.NAME.ERROR"),"existing-name":t.category.name,"saved-icon":t.category.icon},on:{"name-change":t.changeName,"icon-change":t.onClickInsertEmoji}}),t._v(" "),e("woot-input",{staticClass:"w-full",class:{error:t.$v.slug.$error},attrs:{error:t.slugError,label:t.$t("HELP_CENTER.CATEGORY.EDIT.SLUG.LABEL"),placeholder:t.$t("HELP_CENTER.CATEGORY.EDIT.SLUG.PLACEHOLDER"),"help-text":t.$t("HELP_CENTER.CATEGORY.EDIT.SLUG.HELP_TEXT")},on:{input:t.$v.slug.$touch},model:{value:t.slug,callback:function(e){t.slug="string"===typeof e?e.trim():e},expression:"slug"}}),t._v(" "),e("label",[t._v("\n        "+t._s(t.$t("HELP_CENTER.CATEGORY.EDIT.DESCRIPTION.LABEL"))+"\n        "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{rows:"3",type:"text",placeholder:t.$t("HELP_CENTER.CATEGORY.EDIT.DESCRIPTION.PLACEHOLDER")},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"w-full"},[e("div",{staticClass:"flex flex-row justify-end gap-2 py-2 px-0 w-full"},[e("woot-button",{staticClass:"button clear",on:{click:function(e){return e.preventDefault(),t.onClose.apply(null,arguments)}}},[t._v("\n            "+t._s(t.$t("HELP_CENTER.CATEGORY.EDIT.BUTTONS.CANCEL"))+"\n          ")]),t._v(" "),e("woot-button",{on:{click:t.editCategory}},[t._v("\n            "+t._s(t.$t("HELP_CENTER.CATEGORY.EDIT.BUTTONS.CREATE"))+"\n          ")])],1)])],1)])],1)}),[],!1,null,"164550a9",null);e.default=u.exports}}]);
//# sourceMappingURL=88-fe5e5584d17cea9b67ab.chunk.js.map