(this.webpackJsonp=this.webpackJsonp||[]).push([[1],{12:function(t,n,e){"use strict";e.r(n);var r=e(37);function i(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}var o=function(t){function n(){var t,e,r;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,u=Array(o),s=0;s<o;s++)u[s]=arguments[s];return e=r=i(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(u))),r.mount=function(){},r.unmount=function(){},i(r,e)}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}(n,r["a"]),n}();n.default=o},37:function(t,n,e){"use strict";var r=e(7),i=e(6),o=e(1),u=e(36),s=e.n(u),a=e(0),c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},f=function(){return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var u,s=t[Symbol.iterator]();!(r=(u=s.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return e}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=a.a(a.u(/'|"/g,""),function(t){return t.getPropertyValue("content")}),l=a.a(h,function(){return window.getComputedStyle(document.body,":after")}),v=function(t){return window.matchMedia(t).matches};function w(){return{width:window.innerWidth,height:window.innerHeight,query:l()}}function d(t){return a.a(a.n(function(t){var n=f(t,2),e=n[0],r=n[1],i=function(t,n){!function t(n,e){t.value!==n&&(e(c({match:n},w())),t.value=n)}(v(t),n)}.bind(null,e,r);return v(e)&&i(),o.a.on("window:resize",i),i}),Object.entries)(t)}var p=function(){var t=void 0,n=l();function e(){var t=w(),e=t.width,r=t.height,i=t.query;o.a.emit("window:resize",{width:e,height:r,query:i}),i!==n&&(n=i,o.a.emit("window:breakpoint",{width:e,height:r,query:i}))}function r(){if(!r.isRunning)return r.isRunning=!0,t=s.a.bind(null,e),window.addEventListener("resize",t,!1),{destroy:function(){r.isRunning&&(r.isRunning=!1,window.removeEventListener("resize",t,!1),t.cancel())}}}return r.isRunning=!1,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r();var n=d(t);return c({get breakpoint(){return l()},get width(){return window.innerWidth},get height(){return window.innerHeight},destroy:function(){n.forEach(function(t){return o.a.off("window:resize",t)}),n=[]}},o.a)}}(),y=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},b=a.b(function(t,n,e){if(n){var r=y({rootMargin:"0px",threshold:0},e||{}),i=function(){return o.unobserve(t)},o=new IntersectionObserver(function(t){var e=a.h(t),r=e.isIntersecting?"enter":"exit";n[r]&&n[r](y({},e,{destroy:i}))},r);return o.observe(t),{destroy:i}}}),g=e(2),O=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};n.a=function t(){var n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,u=arguments[1];!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.registerObserverOptions={},this.routes={enter:function(){},exit:function(){}},this.viewport={enter:function(){},exit:function(){}},this.screens={},this.init=function(){return n.$observer=b(n.$el,n.viewport,n.registerObserverOptions),n.$eventBus.on(g.e,n.routes.enter),n.$eventBus.on(g.f,n.routes.exit),n.$refs=Object(i.b)(n.$el),n.$screen=p(n.screens),n.events&&(n.$events=r.a.call(n,n.$el,n.events)),n},this.updateRefs=function(){n.$refs=O({},n.$refs,Object(i.b)(n.$el))},this.mount=function(){},this.unmount=function(){},this.destroy=function(){n.unmount(),n.$eventBus.off(g.e,n.routes.enter),n.$eventBus.off(g.f,n.routes.exit),n.$screen.destroy(),n.viewport&&n.$observer.destroy(),n.events&&n.$events.destroy()},this.$name=u,this.$el=e,this.$eventBus=o.a,this.$data=Object(i.a)([].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}(this.$el.attributes)))}}}]);
//# sourceMappingURL=1.bundle.1528066777683.js.map