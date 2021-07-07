!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.lodash},function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)){if(o.length){var c=r.apply(null,o);c&&e.push(c)}}else if("object"===i)if(o.toString===Object.prototype.toString)for(var a in o)n.call(o,a)&&o[a]&&e.push(a);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.i18n},function(e){e.exports=JSON.parse('{"apiVersion":2,"name":"snow-monkey-blocks/accordion","title":"Accordion","description":"You can set up a content area that expands and contracts like the accordion.","category":"smb","example":{"innerBlocks":[{"name":"snow-monkey-blocks/accordion--item","attributes":{"title":"Lorem ipsum dolor sit amet","initialState":true},"innerBlocks":[{"name":"core/paragraph","attributes":{"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu"}}]},{"name":"snow-monkey-blocks/accordion--item","attributes":{"title":"consectetur adipiscing elit","initialState":false},"innerBlocks":[{"name":"core/paragraph","attributes":{"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu"}}]}]}}')},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.richText},function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"metadata",(function(){return l})),n.d(o,"name",(function(){return k})),n.d(o,"settings",(function(){return y}));var r=n(4),i=n.n(r),c=n(0),a=(n(2),n(7)),s=(n(8),n(5)),l=n(6),u=n(3),d=n.n(u),p=n(1),m=["snow-monkey-blocks/accordion--item"],f=[["snow-monkey-blocks/accordion--item"]],b=[{save:function(){return Object(c.createElement)("div",{className:"smb-accordion"},Object(c.createElement)(p.InnerBlocks.Content,null))}}],k=l.name,y={icon:{foreground:"#cd162c",src:"editor-justify"},edit:function(e){var t=e.className,n=d()("smb-accordion",t),o=Object(p.useBlockProps)({className:n}),r=Object(p.__experimentalUseInnerBlocksProps)(o,{allowedBlocks:m,template:f,templateLock:!1,renderAppender:p.InnerBlocks.ButtonBlockAppender});return Object(c.createElement)("div",r)},save:function(e){var t=e.className,n=d()("smb-accordion",t);return Object(c.createElement)("div",p.useBlockProps.save({className:n}),Object(c.createElement)(p.InnerBlocks.Content,null))},deprecated:b};!function(e){if(e){var t=e.metadata,n=e.settings,o=e.name;t&&(t.title&&(t.title=Object(s.__)(t.title,"snow-monkey-blocks"),n.title=t.title),t.description&&(t.description=Object(s.__)(t.description,"snow-monkey-blocks"),n.description=t.description),t.keywords&&(t.keywords=Object(s.__)(t.keywords,"snow-monkey-blocks"),n.keywords=t.keywords),Object(a.unstable__bootstrapServerSideBlockDefinitions)(i()({},o,t))),Object(a.registerBlockType)(o,n)}}(o)}]);