(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{3370:function(e,t,r){"use strict";r.r(t);r(34),r(153),r(53),r(68),r(11),r(5),r(9),r(12),r(10),r(13),r(8),r(24);var n=r(275),o=r(27);function a(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(u){return void r(u)}c.done?t(l):Promise.resolve(l).then(n,o)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function c(e){a(i,n,o,c,l,"next",e)}function l(e){a(i,n,o,c,l,"throw",e)}c(void 0)}))}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u={mixins:[n.a],computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(o.mapGetters)({portals:"portals/allPortals"})),mounted:function(){this.performRouting()},methods:{isPortalPresent:function(e){return!!this.portals.find((function(t){return t.slug===e}))},performRouting:function(){var e=this;return i(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("portals/index");case 2:e.$nextTick((function(){return e.routeToLastActivePortal()}));case 3:case"end":return t.stop()}}),t)})))()},routeToView:function(e,t){this.$router.replace({name:e,params:t,replace:!0})},routeToLastActivePortal:function(){var e=this;return i(regeneratorRuntime.mark((function t(){var r,n,o,a,i,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.uiSettings||{},n=r.last_active_portal_slug,o=r.last_active_locale_code,e.isPortalPresent(n)?e.routeToView("list_all_locale_articles",{portalSlug:n,locale:o}):e.portals.length>0?(a=e.portals[0],i=a.slug,c=a.meta,l=(c=void 0===c?{}:c).default_locale,e.routeToView("list_all_locale_articles",{portalSlug:i,locale:l})):e.$router.replace({name:"list_all_portals",replace:!0});case 2:case"end":return t.stop()}}),t)})))()}}},s=u,p=r(7),f=Object(p.a)(s,(function(){return(0,this._self._c)("div",{staticClass:"text-slate-600 dark:text-slate-200 flex items-center justify-center w-full"},[this._v("\n  Loading...\n")])}),[],!1,null,null,null);t.default=f.exports}}]);
//# sourceMappingURL=105-e0de62471cf372ffa748.chunk.js.map