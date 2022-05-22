"use strict";(self.webpackChunkbloc_doc=self.webpackChunkbloc_doc||[]).push([[1606],{224:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(2374);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,b=p["".concat(u,".").concat(d)]||p[d]||f[d]||c;return r?n.createElement(b,i(i({ref:t},l),{},{components:r})):n.createElement(b,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1643:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return f}});var n=r(7283),o=r(3662),c=(r(2374),r(224)),i=["components"],a={sidebar_position:4},u=void 0,s={unversionedId:"faqs/sdk",id:"faqs/sdk",title:"sdk",description:"\u4e3a\u4e86\u6fc0\u52b1\u4e0d\u540c\u8bed\u8a00\u7684\u5f00\u53d1\u8005\u53c2\u4e0e\u8fdb\u884c\u5f00\u53d1\u5bf9\u5e94\u8bed\u8a00\u7684SDK\uff0c\u4ece\u6574\u4f53\u8bbe\u8ba1\u4e0a\u9075\u5faa\u4e86\u91cdbloc-server\u3001\u8f7bclient\u7684\u7b56\u7565\uff0c\u4ece\u800c\u964d\u4f4e\u5b9e\u73b0\u65b0\u8bed\u8a00SDK\u7684\u590d\u6742\u5ea6\uff1a",source:"@site/docs/faqs/sdk.md",sourceDirName:"faqs",slug:"/faqs/sdk",permalink:"/docs/faqs/sdk",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u8c03\u5ea6",permalink:"/docs/faqs/schedule"},next:{title:"\u64cd\u4f5c\u4e0e\u4f7f\u7528",permalink:"/docs/faqs/guide"}},l={},f=[],p={toc:f};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u4e3a\u4e86\u6fc0\u52b1\u4e0d\u540c\u8bed\u8a00\u7684\u5f00\u53d1\u8005\u53c2\u4e0e\u8fdb\u884c\u5f00\u53d1\u5bf9\u5e94\u8bed\u8a00\u7684SDK\uff0c\u4ece\u6574\u4f53\u8bbe\u8ba1\u4e0a\u9075\u5faa\u4e86\u91cdbloc-server\u3001\u8f7bclient\u7684\u7b56\u7565\uff0c\u4ece\u800c\u964d\u4f4e\u5b9e\u73b0\u65b0\u8bed\u8a00SDK\u7684\u590d\u6742\u5ea6\uff1a"),(0,c.kt)("p",null,"Client SDK\u88ab\u8bbe\u8ba1\u4e3a\u201c\u65e0\u72b6\u6001\u201d\u7684\u3002\u5176\u5728\u6536\u5230function\u6267\u884c\u7684\u547d\u4ee4\u65f6\u3001\u65e0\u9700\u77e5\u9053\u5176\u5230\u5e95\u662f\u5c5e\u4e8e\u54ea\u4e2a\u5de5\u4f5c\u6d41\u91cc\u9762\u7684function\uff0c\u5176\u53ea\u7ba1\u8fdb\u884c\u8fd0\u884c\u6b64function\u5e76\u8c03\u7528bloc-server\u7684\u63a5\u53e3\u8fdb\u884c\u4e0a\u62a5\u8fd0\u884c\u7684\u4fe1\u606f\u548c\u7ed3\u679c\u3002\u72b6\u6001\u5168\u90e8\u5728bloc-server\u8fdb\u884c\u7ef4\u62a4"))}d.isMDXComponent=!0}}]);