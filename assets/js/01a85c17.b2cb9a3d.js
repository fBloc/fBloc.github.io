"use strict";(self.webpackChunkbloc_doc=self.webpackChunkbloc_doc||[]).push([[4013],{1302:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(3662),r=a(2374),l=a(3082),c=a(3477),i=a(4742),s=a(8093),m="sidebar_Tq6Z",o="sidebarItemTitle_GsUE",u="sidebarItemList_aK2P",g="sidebarItem_ciD6",d="sidebarItemLink_PiIB",b="sidebarItemLinkActive_HdZz";function E(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:g},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:b},e.title))})))))}var f=a(3554);function p(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function v(e){return r.createElement(f.Zo,{component:p,props:e})}var h=a(8539);function k(e){var t=e.sidebar,a=(0,h.i)();return null!=t&&t.items.length?"mobile"===a?r.createElement(v,{sidebar:t}):r.createElement(E,{sidebar:t}):null}var N=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,n.Z)(e,N),m=t&&t.items.length>0;return r.createElement(c.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(k,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&r.createElement("div",{className:"col col--2"},a))))}},3753:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(2374),r=a(1302),l=a(9129),c=a(8093);var i="tag_fju3";function s(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:i},n.createElement(l.Z,e))}))),n.createElement("hr",null))}function m(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return n.createElement("section",{className:"margin-vert--lg"},t.map((function(e){return n.createElement(s,{key:e.letter,letterEntry:e})})))}var o=a(7456),u=a(3297),g=a(1446),d=a(3082);function b(e){var t=e.tags,a=e.sidebar,l=(0,c.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return n.createElement(o.FG,{className:(0,d.Z)(u.k.wrapper.blogPages,u.k.page.blogTagsListPage)},n.createElement(o.d,{title:l}),n.createElement(g.Z,{tag:"blog_tags_list"}),n.createElement(r.Z,{sidebar:a},n.createElement("h1",null,l),n.createElement(m,{tags:t})))}},9129:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(2374),r=a(3082),l=a(4742),c="tag_maKF",i="tagRegular_R2Lw",s="tagWithCount_wX1s";function m(e){var t=e.permalink,a=e.label,m=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(c,m?s:i)},a,m&&n.createElement("span",null,m))}}}]);