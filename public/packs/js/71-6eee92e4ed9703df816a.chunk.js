(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1905:function(t,e,n){var r=n(36),i=n(15),o=n(108),a=n(207),s=n(39).f,c=n(95).f,u=n(215),l=n(189),f=n(214),p=n(44),h=n(20),g=n(62).enforce,d=n(190),m=n(16)("match"),v=i.RegExp,b=v.prototype,T=/a/g,I=/a/g,_=new v(T)!==T,N=f.UNSUPPORTED_Y;if(r&&o("RegExp",!_||N||h((function(){return I[m]=!1,v(T)!=T||v(I)==I||"/a/i"!=v(T,"i")})))){for(var w=function(t,e){var n,r=this instanceof w,i=u(t),o=void 0===e;if(!r&&i&&t.constructor===w&&o)return t;_?i&&!o&&(t=t.source):t instanceof w&&(o&&(e=l.call(t)),t=t.source),N&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var s=a(_?new v(t,e):v(t,e),r?this:b,w);N&&n&&(g(s).sticky=!0);return s},y=function(t){t in w||s(w,t,{configurable:!0,get:function(){return v[t]},set:function(e){v[t]=e}})},S=c(v),L=0;S.length>L;)y(S[L++]);b.constructor=w,w.prototype=b,p(i,"RegExp",w)}d("RegExp")},1906:function(t,e,n){"use strict";n(66),n(53),n(68),n(1905),n(154),n(19),n(8),n(21),n(22),n(206),n(10);var r=n(1908),i=n.n(r),o=(n(363),/mention:\/\/(user|team)\/(\d+)\/(.+)/gm);function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(t){t.children.forEach((function(t){"image"===t.type&&function(t){var e=t.attrGet("src");if(e){var n=new URL(e).searchParams.get("cw_image_height");n&&t.attrSet("style","height: ".concat(n,";"))}}(t)}))},u=n(1801)({html:!1,xhtmlOut:!0,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,quotes:"\u201c\u201d\u2018\u2019",maxNesting:20}).use((function(t){t.renderer.rules.mention=function(t,e){return'<span class="prosemirror-mention-node">'.concat(t[e].content,"</span>")},t.inline.ruler.before("link","mention",(function(t,e){var n,r,i,a,s,c,u="",l=t.posMax;return 91===t.src.charCodeAt(t.pos)&&(i=t.pos+1,!((r=t.md.helpers.parseLinkLabel(t,t.pos,!0))<0)&&(n=t.src.slice(i,r),(a=r+1)<l&&40===t.src.charCodeAt(a)&&(a+=1,(s=t.md.helpers.parseLinkDestination(t.src,a,t.posMax)).ok&&(u=t.md.normalizeLink(s.str),t.md.validateLink(u)?a=s.pos:u=""),a+=1),!!u.match(new RegExp(o))&&(e||(t.pos=i,t.posMax=r,(c=t.push("mention","")).href=u,c.content=n),t.pos=a,t.posMax=l,!0)))}))})).use((function(t){t.core.ruler.after("inline","add-image-height",(function(t){t.tokens.forEach((function(t){"inline"===t.type&&c(t)}))}))})).use(i.a,{attrs:{class:"link",rel:"noreferrer noopener nofollow",target:"_blank"}}),l=/(^|[^@\w])@(\w{1,15})\b/g,f=/(^|\s)#(\w+)/g,p=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a(this,t),this.message=e||"",this.isAPrivateNote=r,this.isATweet=n}var e,n,r;return e=t,(n=[{key:"formatMessage",value:function(){var t=this.message;return this.isATweet&&!this.isAPrivateNote&&(t=(t=t.replace(l,"$1[@$2](http://twitter.com/$2)")).replace(f,"$1[#$2](https://twitter.com/hashtag/$2)")),u.render(t)}},{key:"formattedMessage",get:function(){return this.formatMessage()}},{key:"plainText",get:function(){return(new DOMParser).parseFromString(this.formattedMessage,"text/html").body.textContent||""}}])&&s(e.prototype,n),r&&s(e,r),t}(),h=p;e.a={methods:{formatMessage:function(t,e,n){return new h(t,e,n).formattedMessage},getPlainText:function(t,e){return new h(t,e).plainText},truncateMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.length<100?t:"".concat(t.slice(0,97),"...")},highlightContent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=this.getPlainText(t),i=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return r.replace(new RegExp("(".concat(i,")"),"ig"),'<span class="'.concat(n,'">$1</span>'))}}}},1908:function(t,e,n){"use strict";function r(t,e){e=e?Array.isArray(e)?e:[e]:[],Object.freeze(e);var n=t.renderer.rules.link_open||this.defaultRender;t.renderer.rules.link_open=function(t,r,i,o,a){var s=function(t,e){var n,r,i=t.attrs[t.attrIndex("href")][1];for(n=0;n<e.length;++n){if("function"!==typeof(r=e[n]).matcher)return r;if(r.matcher(i,r))return r}}(t[r],e),c=s&&s.attrs;return c&&function(t,e,n){Object.keys(n).forEach((function(r){var i,o=n[r];"className"===r&&(r="class"),(i=e[t].attrIndex(r))<0?e[t].attrPush([r,o]):e[t].attrs[i][1]=o}))}(r,t,c),n(t,r,i,o,a)}}r.defaultRender=function(t,e,n,r,i){return i.renderToken(t,e,n)},t.exports=r},2914:function(t,e,n){},3149:function(t,e,n){"use strict";n(2914)},3342:function(t,e,n){"use strict";n.r(e);n(11),n(5),n(9),n(12),n(10),n(13),n(8),n(24),n(34);var r=n(1906),i=n(27),o=n(77),a=n(305),s={props:{title:{type:String,default:""},description:{type:String,default:""},buttonLabel:{type:String,default:""},buttonIcon:{type:String,default:"edit"}}},c=n(7);function u(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h={components:{BillingItem:Object(c.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"manage-subscription"},[e("div",[e("h6",[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"manage-subscription--description"},[t._v("\n      "+t._s(t.description)+"\n    ")])]),t._v(" "),e("div",[e("woot-button",{attrs:{variant:"smooth",icon:t.buttonIcon},on:{click:function(e){return t.$emit("click")}}},[t._v("\n      "+t._s(t.buttonLabel)+"\n    ")])],1)])}),[],!1,null,null,null).exports},mixins:[a.a,o.a,r.a],computed:f(f({},Object(i.mapGetters)({getAccount:"accounts/getAccount",uiFlags:"accounts/getUIFlags"})),{},{currentAccount:function(){return this.getAccount(this.accountId)||{}},customAttributes:function(){return this.currentAccount.custom_attributes||{}},hasABillingPlan:function(){return!!this.planName},planName:function(){return this.customAttributes.plan_name||""},subscribedQuantity:function(){return this.customAttributes.subscribed_quantity||0}}),mounted:function(){this.fetchAccountDetails()},methods:{fetchAccountDetails:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.hasABillingPlan||e.$store.dispatch("accounts/subscription");case 1:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){u(o,r,i,a,s,"next",t)}function s(t){u(o,r,i,a,s,"throw",t)}a(void 0)}))})()},onClickBillingPortal:function(){this.$store.dispatch("accounts/checkout")},onToggleChatWindow:function(){window.$chatwoot&&window.$chatwoot.toggle()}}},g=h,d=(n(3149),Object(c.a)(g,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"overflow-auto flex-1 p-6 dark:bg-slate-900"},[t.uiFlags.isFetchingItem?e("woot-loading-state"):t.hasABillingPlan?e("div",{staticClass:"w-full"},[e("div",{staticClass:"current-plan--details"},[e("h6",[t._v(t._s(t.$t("BILLING_SETTINGS.CURRENT_PLAN.TITLE")))]),t._v(" "),e("div",{directives:[{name:"dompurify-html",rawName:"v-dompurify-html",value:t.formatMessage(t.$t("BILLING_SETTINGS.CURRENT_PLAN.PLAN_NOTE",{plan:t.planName,quantity:t.subscribedQuantity})),expression:"\n          formatMessage(\n            $t('BILLING_SETTINGS.CURRENT_PLAN.PLAN_NOTE', {\n              plan: planName,\n              quantity: subscribedQuantity,\n            })\n          )\n        "}]})]),t._v(" "),e("billing-item",{attrs:{title:t.$t("BILLING_SETTINGS.MANAGE_SUBSCRIPTION.TITLE"),description:t.$t("BILLING_SETTINGS.MANAGE_SUBSCRIPTION.DESCRIPTION"),"button-label":t.$t("BILLING_SETTINGS.MANAGE_SUBSCRIPTION.BUTTON_TXT")},on:{click:t.onClickBillingPortal}}),t._v(" "),e("billing-item",{attrs:{title:t.$t("BILLING_SETTINGS.CHAT_WITH_US.TITLE"),description:t.$t("BILLING_SETTINGS.CHAT_WITH_US.DESCRIPTION"),"button-label":t.$t("BILLING_SETTINGS.CHAT_WITH_US.BUTTON_TXT"),"button-icon":"chat-multiple"},on:{click:t.onToggleChatWindow}})],1):e("div",[e("p",[t._v(t._s(t.$t("BILLING_SETTINGS.NO_BILLING_USER")))])])],1)}),[],!1,null,null,null));e.default=d.exports}}]);
//# sourceMappingURL=71-6eee92e4ed9703df816a.chunk.js.map