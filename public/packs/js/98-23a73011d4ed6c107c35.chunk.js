(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{2656:function(t,e,a){"use strict";a(51);var n=a(6),s={__name:"TableFooterResults",props:{firstIndex:{type:Number,default:0},lastIndex:{type:Number,default:0},totalCount:{type:Number,default:0}},setup:function(t){return{__sfc:!0}}},r=a(7),o=Object(r.a)(s,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"text-sm text-slate-700 dark:text-slate-200 font-medium"},[t._v("\n  "+t._s(t.$t("GENERAL.SHOWING_RESULTS",{firstIndex:t.firstIndex,lastIndex:t.lastIndex,totalCount:t.totalCount}))+"\n")])}),[],!1,null,null,null).exports,i={__name:"TableFooterPagination",props:{currentPage:{type:Number,default:1},totalCount:{type:Number,default:0},totalPages:{type:Number,default:0}},emits:["page-change"],setup:function(t,e){var a=e.emit,s=t,r=Object(n.computed)((function(){return s.currentPage===s.totalPages||1===s.totalPages})),o=Object(n.computed)((function(){return 1===s.currentPage})),i=Object(n.computed)((function(){return s.currentPage===s.totalPages})),u=Object(n.computed)((function(){return 1===s.currentPage}));function l(t){a("page-change",t)}return{__sfc:!0,props:s,hasLastPage:r,hasFirstPage:o,hasNextPage:i,hasPrevPage:u,emit:a,buttonClass:function(t){return t?"hover:!bg-slate-50 dark:hover:!bg-slate-800":"dark:hover:!bg-slate-700/50"},onPageChange:l,onNextPage:function t(){t.value||l(s.currentPage+1)},onPrevPage:function(){u.value||l(s.currentPage-1)},onFirstPage:function(){o.value||l(1)},onLastPage:function(){r.value||l(s.totalPages)}}}},u=Object(r.a)(i,(function(){var t=this,e=t._self._c,a=t._self._setupProxy;return e("div",{staticClass:"flex items-center bg-slate-50 dark:bg-slate-800 h-8 rounded-lg"},[e("woot-button",{class:a.buttonClass(a.hasFirstPage),attrs:{size:"small",variant:"smooth","color-scheme":"secondary","is-disabled":a.hasFirstPage,"class-names":"dark:!bg-slate-800 !opacity-100 ltr:rounded-l-lg ltr:rounded-r-none rtl:rounded-r-lg rtl:rounded-l-none"},on:{click:a.onFirstPage}},[e("fluent-icon",{class:a.hasFirstPage&&"opacity-40",attrs:{icon:"chevrons-left",size:"20","icon-lib":"lucide"}})],1),t._v(" "),e("div",{staticClass:"bg-slate-75 dark:bg-slate-700/50 w-px rounded-sm h-4"}),t._v(" "),e("woot-button",{class:a.buttonClass(a.hasPrevPage),attrs:{size:"small",variant:"smooth","color-scheme":"secondary","is-disabled":a.hasPrevPage,"class-names":"dark:!bg-slate-800 !opacity-100 rounded-none"},on:{click:a.onPrevPage}},[e("fluent-icon",{class:a.hasPrevPage&&"opacity-40",attrs:{icon:"chevron-left-single",size:"20","icon-lib":"lucide"}})],1),t._v(" "),e("div",{staticClass:"flex px-3 items-center gap-3 tabular-nums bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-100"},[e("span",{staticClass:"text-sm text-slate-800 dark:text-slate-75"},[t._v("\n      "+t._s(t.currentPage)+"\n    ")]),t._v(" "),e("span",{staticClass:"text-slate-600 dark:text-slate-500"},[t._v("/")]),t._v(" "),e("span",{staticClass:"text-sm text-slate-600 dark:text-slate-500"},[t._v("\n      "+t._s(t.totalPages)+"\n    ")])]),t._v(" "),e("woot-button",{class:a.buttonClass(a.hasNextPage),attrs:{size:"small",variant:"smooth","color-scheme":"secondary","is-disabled":a.hasNextPage,"class-names":"dark:!bg-slate-800 !opacity-100 rounded-none"},on:{click:a.onNextPage}},[e("fluent-icon",{class:a.hasNextPage&&"opacity-40",attrs:{icon:"chevron-right-single",size:"20","icon-lib":"lucide"}})],1),t._v(" "),e("div",{staticClass:"bg-slate-75 dark:bg-slate-700/50 w-px rounded-sm h-4"}),t._v(" "),e("woot-button",{class:a.buttonClass(a.hasLastPage),attrs:{size:"small",variant:"smooth","color-scheme":"secondary","class-names":"dark:!bg-slate-800 !opacity-100 ltr:rounded-r-lg ltr:rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none","is-disabled":a.hasLastPage},on:{click:a.onLastPage}},[e("fluent-icon",{class:a.hasLastPage&&"opacity-40",attrs:{icon:"chevrons-right",size:"20","icon-lib":"lucide"}})],1)],1)}),[],!1,null,null,null).exports,l={__name:"TableFooter",props:{currentPage:{type:Number,default:1},pageSize:{type:Number,default:25},totalCount:{type:Number,default:0}},setup:function(t){var e=t,a=Object(n.computed)((function(){return Math.ceil(e.totalCount/e.pageSize)})),s=Object(n.computed)((function(){return e.pageSize*(e.currentPage-1)+1})),r=Object(n.computed)((function(){return Math.min(e.totalCount,e.pageSize*e.currentPage)})),i=Object(n.computed)((function(){return e.totalCount&&!(s.value>e.totalCount)}));return{__sfc:!0,props:e,totalPages:a,firstIndex:s,lastIndex:r,isFooterVisible:i,TableFooterResults:o,TableFooterPagination:u}}},c=Object(r.a)(l,(function(){var t=this,e=t._self._c,a=t._self._setupProxy;return a.isFooterVisible?e("footer",{staticClass:"h-12 flex items-center justify-between px-6"},[e(a.TableFooterResults,{attrs:{"first-index":a.firstIndex,"last-index":a.lastIndex,"total-count":t.totalCount}}),t._v(" "),t.totalCount?e(a.TableFooterPagination,{attrs:{"current-page":t.currentPage,"total-pages":a.totalPages,"total-count":t.totalCount,"page-size":t.pageSize},on:{"page-change":function(e){return t.$emit("page-change",e)}}}):t._e()],1):t._e()}),[],!1,null,null,null);e.a=c.exports},3350:function(t,e,a){"use strict";a.r(e);a(43),a(11),a(5),a(9),a(12),a(10),a(13);var n=a(27),s=a(2656),r=a(1907),o=a(77),i=(a(153),a(40),a(19),a(8),a(22),{0:"agent",1:"administrator"}),u={0:"online",1:"offline",2:"busy"},l={"automationrule:create":"AUDIT_LOGS.AUTOMATION_RULE.ADD","automationrule:update":"AUDIT_LOGS.AUTOMATION_RULE.EDIT","automationrule:destroy":"AUDIT_LOGS.AUTOMATION_RULE.DELETE","webhook:create":"AUDIT_LOGS.WEBHOOK.ADD","webhook:update":"AUDIT_LOGS.WEBHOOK.EDIT","webhook:destroy":"AUDIT_LOGS.WEBHOOK.DELETE","inbox:create":"AUDIT_LOGS.INBOX.ADD","inbox:update":"AUDIT_LOGS.INBOX.EDIT","inbox:destroy":"AUDIT_LOGS.INBOX.DELETE","user:sign_in":"AUDIT_LOGS.USER_ACTION.SIGN_IN","user:sign_out":"AUDIT_LOGS.USER_ACTION.SIGN_OUT","team:create":"AUDIT_LOGS.TEAM.ADD","team:update":"AUDIT_LOGS.TEAM.EDIT","team:destroy":"AUDIT_LOGS.TEAM.DELETE","macro:create":"AUDIT_LOGS.MACRO.ADD","macro:update":"AUDIT_LOGS.MACRO.EDIT","macro:destroy":"AUDIT_LOGS.MACRO.DELETE","accountuser:create":"AUDIT_LOGS.ACCOUNT_USER.ADD","accountuser:update:self":"AUDIT_LOGS.ACCOUNT_USER.EDIT.SELF","accountuser:update:other":"AUDIT_LOGS.ACCOUNT_USER.EDIT.OTHER","inboxmember:create":"AUDIT_LOGS.INBOX_MEMBER.ADD","inboxmember:destroy":"AUDIT_LOGS.INBOX_MEMBER.REMOVE","teammember:create":"AUDIT_LOGS.TEAM_MEMBER.ADD","teammember:destroy":"AUDIT_LOGS.TEAM_MEMBER.REMOVE","account:update":"AUDIT_LOGS.ACCOUNT.EDIT"};function c(t){return Array.isArray(t)?t[t.length-1]:t}function d(t,e){var a;return null===t?"System":(null===(a=e.find((function(e){return e.id===t})))||void 0===a?void 0:a.name)||t}function g(t,e,a){t.user_id!==t.auditable.user_id&&(e.user=d(t.auditable.user_id,a));var n,s,r,o=(n=t.audited_changes,s=[],r=[],n.role&&n.role.length&&(s.push("role"),r.push(i[c(n.role)])),n.availability&&n.availability.length&&(s.push("availability"),r.push(u[c(n.availability)])),{changes:s,values:r});return o&&(e.attributes=o.changes,e.values=o.values),e}function _(t,e,a){return t.audited_changes&&(e=function(t,e,a){var n=t.audited_changes.user_id;return n&&void 0!==n&&(e.user=d(n,a)),e}(t,e,a),e=function(t,e){return t.audited_changes.team_id&&(e.team_id=t.audited_changes.team_id),e}(t,e),e=function(t,e){return t.audited_changes.inbox_id&&(e.inbox_id=t.audited_changes.inbox_id),e}(t,e)),e}function b(t,e,a,n){return"create"===n?function(t,e,a){e.invitee=d(t.audited_changes.user_id,a);var n=t.audited_changes.role;return e.role=i[n]||"unknown",e}(t,e,a):"update"===n?g(t,e,a):e}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function f(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var h={components:{TableFooter:s.a},mixins:[o.a,r.a],beforeRouteEnter:function(t,e,a){a((function(t){t.fetchAuditLogs()}))},data:function(){return{loading:{},auditLogsAPI:{message:""}}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){f(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(n.mapGetters)({records:"auditlogs/getAuditLogs",uiFlags:"auditlogs/getUIFlags",meta:"auditlogs/getMeta",agentList:"agents/getAgents"})),mounted:function(){this.$store.dispatch("agents/get")},methods:{fetchAuditLogs:function(){var t,e=this,a=null!==(t=this.$route.query.page)&&void 0!==t?t:1;this.$store.dispatch("auditlogs/fetch",{page:a}).catch((function(t){var a=(null===t||void 0===t?void 0:t.message)||e.$t("AUDIT_LOGS.API.ERROR_MESSAGE");e.showAlert(a)}))},generateLogText:function(t){var e=function(t,e){var a={agentName:d(t.user_id,e),id:t.auditable_id},n=t.auditable_type.toLowerCase(),s=t.action.toLowerCase();return"accountuser"===n&&(a=b(t,a,e,s)),"inboxmember"!==n&&"teammember"!==n||(a=_(t,a,e)),a}(t,this.agentList),a=function(t){var e=t.auditable_type.toLowerCase(),a=t.action.toLowerCase(),n="".concat(e,":").concat(a);return"accountuser"===e&&"update"===a&&(n+=t.user_id===t.auditable.user_id?":self":":other"),l[n]||""}(t);return this.$t(a,e)},onPageChange:function(t){window.history.pushState({},null,"".concat(this.$route.path,"?page=").concat(t));try{this.$store.dispatch("auditlogs/fetch",{page:t})}catch(a){var e=(null===a||void 0===a?void 0:a.message)||this.$t("AUDIT_LOGS.API.ERROR_MESSAGE");this.showAlert(e)}}}},m=h,v=a(7),O=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-1 overflow-auto p-4 flex justify-between flex-col"},[e("div",[e("div",[t.uiFlags.fetchingList||t.records.length?t._e():e("p",{staticClass:"flex h-full items-center flex-col justify-center"},[t._v("\n        "+t._s(t.$t("AUDIT_LOGS.LIST.404"))+"\n      ")]),t._v(" "),t.uiFlags.fetchingList?e("woot-loading-state",{attrs:{message:t.$t("AUDIT_LOGS.LOADING")}}):t._e(),t._v(" "),!t.uiFlags.fetchingList&&t.records.length?e("table",{staticClass:"woot-table w-full"},[t._m(0),t._v(" "),e("thead",t._l(t.$t("AUDIT_LOGS.LIST.TABLE_HEADER"),(function(a){return e("th",{key:a},[t._v("\n            "+t._s(a)+"\n          ")])})),0),t._v(" "),e("tbody",t._l(t.records,(function(a){return e("tr",{key:a.id},[e("td",{staticClass:"whitespace-nowrap break-all"},[t._v("\n              "+t._s(t.generateLogText(a))+"\n            ")]),t._v(" "),e("td",{staticClass:"whitespace-nowrap break-all"},[t._v("\n              "+t._s(t.messageTimestamp(a.created_at,"MMM dd, yyyy hh:mm a"))+"\n            ")]),t._v(" "),e("td",{staticClass:"w-[8.75rem]"},[t._v("\n              "+t._s(a.remote_address)+"\n            ")])])})),0)]):t._e()],1)]),t._v(" "),e("table-footer",{staticClass:"!bg-slate-25 dark:!bg-slate-900 border-t border-slate-75 dark:border-slate-700/50",attrs:{"current-page":Number(t.meta.currentPage),"total-count":t.meta.totalEntries,"page-size":t.meta.perPage},on:{"page-change":t.onPageChange}})],1)}),[function(){var t=this,e=t._self._c;return e("colgroup",[e("col",{staticClass:"w-3/5"}),t._v(" "),e("col"),t._v(" "),e("col")])}],!1,null,null,null);e.default=O.exports}}]);
//# sourceMappingURL=98-23a73011d4ed6c107c35.chunk.js.map