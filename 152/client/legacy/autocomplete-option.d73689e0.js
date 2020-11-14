import{S as t,i as e,s as n,J as $,p as s,q as a,r as o,N as r,Z as c,u as p,v as f,w as l,x as m,o as i,y as g,z as u,f as d,g as h,A as x,h as w,j as y,k,l as E,n as v,B as D,C as b,a9 as O}from"./client.c8133799.js";import"./button.5ed545cf.js";import"./classes.5b4c3c94.js";import"./pagination.1abb547f.js";import"./card.31c9ca36.js";import"./label.c350ec9a.js";import"./asyncToGenerator.756dab92.js";import{A as T}from"./autocomplete-option.e7ddd39e.js";import"./copyable-code.78521db6.js";import{L as j,H as A,P as C}from"./layout.fdcc922a.js";import{M as N}from"./mark.2dfb61a4.js";import{T as S,a as R,b as q,c as G}from"./table.bc4f3e5b.js";import{H as F}from"./h3.48327e85.js";import{H}from"./h2.584ee47f.js";import{S as B}from"./showcase.3302a1ec.js";import"./color-preview.72edcca8.js";import{C as P}from"./color-preview.461e8fdf.js";import{R as I}from"./related-components.182f2ebb.js";function V(t,e,n){const $=t.slice();return $[1]=e[n],$}function z(t){let e;return{c(){e=g("AutocompleteOption")},l(t){e=x(t,"AutocompleteOption")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Y(t){let e;return{c(){e=g("A list item representing an autocomplete suggestion.")},l(t){e=x(t,"A list item representing an autocomplete suggestion.")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function L(t){let e,n;return{c(){e=i("code"),n=g("Autocomplete")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"Autocomplete"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function M(t){let e,n,$,r,c;return $=new N({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),{c(){e=g("It's unlikely that this component will be used by itself, but it is a part of the larger "),n=i("a"),s($.$$.fragment),r=g(" component."),this.h()},l(t){e=x(t,"It's unlikely that this component will be used by itself, but it is a part of the larger "),n=d(t,"A",{href:!0});var s=h(n);a($.$$.fragment,s),s.forEach(w),r=x(t," component."),this.h()},h(){y(n,"href","./docs/components/autocomplete")},m(t,s){k(t,e,s),k(t,n,s),o($,n,null),k(t,r,s),c=!0},p(t,e){const n={};16&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n)},i(t){c||(p($.$$.fragment,t),c=!0)},o(t){f($.$$.fragment,t),c=!1},d(t){t&&w(e),t&&w(n),l($),t&&w(r)}}}function U(t){let e,n;return e=new T({props:{option:t[1],query:"tio"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){o(e,t,$),n=!0},p:v,i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function J(t){let e,n,$=t[0],s=[];for(let e=0;e<$.length;e+=1)s[e]=U(V(t,$,e));const a=t=>f(s[t],1,1,(()=>{s[t]=null}));return{c(){e=i("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=d(t,"DIV",{slot:!0,class:!0});var n=h(e);for(let t=0;t<s.length;t+=1)s[t].l(n);n.forEach(w),this.h()},h(){y(e,"slot","showcase"),y(e,"class","padded")},m(t,$){k(t,e,$);for(let t=0;t<s.length;t+=1)s[t].m(e,null);n=!0},p(t,n){if(1&n){let o;for($=t[0],o=0;o<$.length;o+=1){const a=V(t,$,o);s[o]?(s[o].p(a,n),p(s[o],1)):(s[o]=U(a),s[o].c(),p(s[o],1),s[o].m(e,null))}for(D(),o=$.length;o<s.length;o+=1)a(o);b()}},i(t){if(!n){for(let t=0;t<$.length;t+=1)p(s[t]);n=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)f(s[t]);n=!1},d(t){t&&w(e),O(s,t)}}}function Z(t){let e,n;return{c(){e=i("div"),n=i("pre"),this.h()},l(t){e=d(t,"DIV",{slot:!0});var $=h(e);n=d($,"PRE",{class:!0}),h(n).forEach(w),$.forEach(w),this.h()},h(){y(n,"class","language-svelte"),y(e,"slot","source")},m(t,$){k(t,e,$),E(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">\'Test Option\'</span><span class="token punctuation">,</span> details<span class="token operator">:</span> <span class="token string">\'Description\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">\'Another One\'</span><span class="token punctuation">,</span> details<span class="token operator">:</span> <span class="token string">\'Different\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#123;</span> name<span class="token operator">:</span> <span class="token string">\'No Description\'</span> <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">options </span><span class="token keyword">as</span> <span class="token language-javascript">option<span class="token punctuation">&#125;</span></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutocompleteOption</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>option<span class="token punctuation">&#125;</span></span> <span class="token attr-name">query</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tio<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>'},p:v,d(t){t&&w(e)}}}function K(t){let e;return{c(){e=m()},l(t){e=u(t)},m(t,n){k(t,e,n)},p:v,i:v,o:v,d(t){t&&w(e)}}}function Q(t){let e;return{c(){e=g("Properties")},l(t){e=x(t,"Properties")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function W(t){let e;return{c(){e=g("Functional Properties")},l(t){e=x(t,"Functional Properties")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function X(t){let e;return{c(){e=g("Name")},l(t){e=x(t,"Name")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function _(t){let e;return{c(){e=g("Default")},l(t){e=x(t,"Default")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function tt(t){let e;return{c(){e=g("Type")},l(t){e=x(t,"Type")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function et(t){let e;return{c(){e=g("Description")},l(t){e=x(t,"Description")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function nt(t){let e,n,$,r,c,i,g,d;return e=new q({props:{$$slots:{default:[X]},$$scope:{ctx:t}}}),$=new q({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),c=new q({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),g=new q({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment),i=m(),s(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(c.$$.fragment,t),i=u(t),a(g.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(c,t,s),k(t,i,s),o(g,t,s),d=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};16&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r)},i(t){d||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(g.$$.fragment,t),d=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(g.$$.fragment,t),d=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t),t&&w(i),l(g,t)}}}function $t(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("option")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"option"),a.forEach(w),s.forEach(w)},m(t,s){k(t,e,s),E(e,n),E(n,$)},d(t){t&&w(e)}}}function st(t){let e,n,$,r,c;return e=new N({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=g(" "),$=i("span"),r=g("*"),this.h()},l(t){a(e.$$.fragment,t),n=x(t," "),$=d(t,"SPAN",{class:!0});var s=h($);r=x(s,"*"),s.forEach(w),this.h()},h(){y($,"class","required")},m(t,s){o(e,t,s),k(t,n,s),k(t,$,s),E($,r),c=!0},p(t,n){const $={};16&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){c||(p(e.$$.fragment,t),c=!0)},o(t){f(e.$$.fragment,t),c=!1},d(t){l(e,t),t&&w(n),t&&w($)}}}function at(t){let e,n;return{c(){e=i("code"),n=g("Object")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"Object"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function ot(t){let e,n,$,s,a,o,r;return{c(){e=g("The option object, containing a "),n=i("code"),$=g("name"),s=g(" field and, optionally, a "),a=i("code"),o=g("details"),r=g(" field, both strings.")},l(t){e=x(t,"The option object, containing a "),n=d(t,"CODE",{});var c=h(n);$=x(c,"name"),c.forEach(w),s=x(t," field and, optionally, a "),a=d(t,"CODE",{});var p=h(a);o=x(p,"details"),p.forEach(w),r=x(t," field, both strings.")},m(t,c){k(t,e,c),k(t,n,c),E(n,$),k(t,s,c),k(t,a,c),E(a,o),k(t,r,c)},d(t){t&&w(e),t&&w(n),t&&w(s),t&&w(a),t&&w(r)}}}function rt(t){let e,n,$,r,c,i,g,d;return e=new G({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),$=new G({}),c=new G({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),g=new G({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment),i=m(),s(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(c.$$.fragment,t),i=u(t),a(g.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(c,t,s),k(t,i,s),o(g,t,s),d=!0},p(t,n){const $={};16&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),c.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),g.$set(a)},i(t){d||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(g.$$.fragment,t),d=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(g.$$.fragment,t),d=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t),t&&w(i),l(g,t)}}}function ct(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("query")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"query"),a.forEach(w),s.forEach(w)},m(t,s){k(t,e,s),E(e,n),E(n,$)},d(t){t&&w(e)}}}function pt(t){let e,n;return{c(){e=i("code"),n=g("null")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"null"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function ft(t){let e,n;return{c(){e=i("code"),n=g("string")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"string"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function lt(t){let e;return{c(){e=g("The substring to seek out and highlight among the name and the details.")},l(t){e=x(t,"The substring to seek out and highlight among the name and the details.")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function mt(t){let e,n,$,r,c,i,g,d;return e=new G({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),$=new G({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),g=new G({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment),i=m(),s(g.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(c.$$.fragment,t),i=u(t),a(g.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(c,t,s),k(t,i,s),o(g,t,s),d=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};16&n&&(r.$$scope={dirty:n,ctx:t}),g.$set(r)},i(t){d||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(g.$$.fragment,t),d=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(g.$$.fragment,t),d=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t),t&&w(i),l(g,t)}}}function it(t){let e,n,$,r,c,g,x,y;return n=new R({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),c=new R({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),x=new R({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){e=i("thead"),s(n.$$.fragment),$=m(),r=i("tbody"),s(c.$$.fragment),g=m(),s(x.$$.fragment)},l(t){e=d(t,"THEAD",{});var s=h(e);a(n.$$.fragment,s),s.forEach(w),$=u(t),r=d(t,"TBODY",{});var o=h(r);a(c.$$.fragment,o),g=u(o),a(x.$$.fragment,o),o.forEach(w)},m(t,s){k(t,e,s),o(n,e,null),k(t,$,s),k(t,r,s),o(c,r,null),E(r,g),o(x,r,null),y=!0},p(t,e){const $={};16&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};16&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const a={};16&e&&(a.$$scope={dirty:e,ctx:t}),x.$set(a)},i(t){y||(p(n.$$.fragment,t),p(c.$$.fragment,t),p(x.$$.fragment,t),y=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),y=!1},d(t){t&&w(e),l(n),t&&w($),t&&w(r),l(c),l(x)}}}function gt(t){let e;return{c(){e=g("Events")},l(t){e=x(t,"Events")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function ut(t){let e;return{c(){e=g("Name")},l(t){e=x(t,"Name")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function dt(t){let e;return{c(){e=g("Event Detail")},l(t){e=x(t,"Event Detail")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function ht(t){let e;return{c(){e=g("Description")},l(t){e=x(t,"Description")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function xt(t){let e,n,$,r,c,i;return e=new q({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),$=new q({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),c=new q({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(c,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){i||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),i=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t)}}}function wt(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("click")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"click"),a.forEach(w),s.forEach(w)},m(t,s){k(t,e,s),E(e,n),E(n,$)},d(t){t&&w(e)}}}function yt(t){let e,n;return{c(){e=i("code"),n=g("{ nativeEvent }")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"{ nativeEvent }"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function kt(t){let e,n;return{c(){e=i("code"),n=g("AutocompleteField")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"AutocompleteField"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function Et(t){let e,n,$,r,c,m;return $=new N({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c(){e=g("Fired when the element is clicked. A necessary part of conforming to the "),n=i("a"),s($.$$.fragment),r=g("'s"),c=g(" interface."),this.h()},l(t){e=x(t,"Fired when the element is clicked. A necessary part of conforming to the "),n=d(t,"A",{href:!0});var s=h(n);a($.$$.fragment,s),r=x(s,"'s"),s.forEach(w),c=x(t," interface."),this.h()},h(){y(n,"href","./docs/components/autocomplete-field")},m(t,s){k(t,e,s),k(t,n,s),o($,n,null),E(n,r),k(t,c,s),m=!0},p(t,e){const n={};16&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n)},i(t){m||(p($.$$.fragment,t),m=!0)},o(t){f($.$$.fragment,t),m=!1},d(t){t&&w(e),t&&w(n),l($),t&&w(c)}}}function vt(t){let e,n,$,r,c,i;return e=new G({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),$=new G({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(c,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){i||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),i=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t)}}}function Dt(t){let e,n,$,r,c,g;return n=new R({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),c=new R({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),{c(){e=i("thead"),s(n.$$.fragment),$=m(),r=i("tbody"),s(c.$$.fragment)},l(t){e=d(t,"THEAD",{});var s=h(e);a(n.$$.fragment,s),s.forEach(w),$=u(t),r=d(t,"TBODY",{});var o=h(r);a(c.$$.fragment,o),o.forEach(w)},m(t,s){k(t,e,s),o(n,e,null),k(t,$,s),k(t,r,s),o(c,r,null),g=!0},p(t,e){const $={};16&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};16&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s)},i(t){g||(p(n.$$.fragment,t),p(c.$$.fragment,t),g=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),g=!1},d(t){t&&w(e),l(n),t&&w($),t&&w(r),l(c)}}}function bt(t){let e;return{c(){e=g("SCSS Variables")},l(t){e=x(t,"SCSS Variables")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Ot(t){let e;return{c(){e=g("Name")},l(t){e=x(t,"Name")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Tt(t){let e;return{c(){e=g("Description")},l(t){e=x(t,"Description")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function jt(t){let e;return{c(){e=g("Default")},l(t){e=x(t,"Default")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function At(t){let e,n,$,r,c,i;return e=new q({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),$=new q({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),c=new q({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(c,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){i||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),i=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t)}}}function Ct(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("$main")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"$main"),a.forEach(w),s.forEach(w)},m(t,s){k(t,e,s),E(e,n),E(n,$)},d(t){t&&w(e)}}}function Nt(t){let e;return{c(){e=g("The background color on hover and the color of the highlight.")},l(t){e=x(t,"The background color on hover and the color of the highlight.")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function St(t){let e,n;return e=new P({props:{value:"#4300B0"}}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){o(e,t,$),n=!0},p:v,i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}function Rt(t){let e,n,$,r,c,i;return e=new G({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),$=new G({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(c,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){i||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),i=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t)}}}function qt(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("$font")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"$font"),a.forEach(w),s.forEach(w)},m(t,s){k(t,e,s),E(e,n),E(n,$)},d(t){t&&w(e)}}}function Gt(t){let e;return{c(){e=g("The font of the component.")},l(t){e=x(t,"The font of the component.")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Ft(t){let e,n;return{c(){e=i("code"),n=g("'Ubuntu'")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"'Ubuntu'"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function Ht(t){let e,n,$,r,c,i;return e=new G({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),$=new G({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(c,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){i||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),i=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t)}}}function Bt(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("$thin-font-weight")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"$thin-font-weight"),a.forEach(w),s.forEach(w)},m(t,s){k(t,e,s),E(e,n),E(n,$)},d(t){t&&w(e)}}}function Pt(t){let e;return{c(){e=g("The thin font weight to differentiate the details from the name.")},l(t){e=x(t,"The thin font weight to differentiate the details from the name.")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function It(t){let e,n;return{c(){e=i("code"),n=g("300")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"300"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function Vt(t){let e,n,$,r,c,i;return e=new G({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),$=new G({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(c,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){i||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),i=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t)}}}function zt(t){let e,n,$;return{c(){e=i("strong"),n=i("code"),$=g("$bold-font-weight")},l(t){e=d(t,"STRONG",{});var s=h(e);n=d(s,"CODE",{});var a=h(n);$=x(a,"$bold-font-weight"),a.forEach(w),s.forEach(w)},m(t,s){k(t,e,s),E(e,n),E(n,$)},d(t){t&&w(e)}}}function Yt(t){let e;return{c(){e=g("The bold font weight to emphasize the highight.")},l(t){e=x(t,"The bold font weight to emphasize the highight.")},m(t,n){k(t,e,n)},d(t){t&&w(e)}}}function Lt(t){let e,n;return{c(){e=i("code"),n=g("500")},l(t){e=d(t,"CODE",{});var $=h(e);n=x($,"500"),$.forEach(w)},m(t,$){k(t,e,$),E(e,n)},d(t){t&&w(e)}}}function Mt(t){let e,n,$,r,c,i;return e=new G({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),$=new G({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),c=new G({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment)},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(c.$$.fragment,t)},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(c,t,s),i=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o)},i(t){i||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),i=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),i=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t)}}}function Ut(t){let e,n,$,r,c,g,x,y,v,D,b,O;return n=new R({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),c=new R({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),x=new R({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),v=new R({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),b=new R({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){e=i("thead"),s(n.$$.fragment),$=m(),r=i("tbody"),s(c.$$.fragment),g=m(),s(x.$$.fragment),y=m(),s(v.$$.fragment),D=m(),s(b.$$.fragment)},l(t){e=d(t,"THEAD",{});var s=h(e);a(n.$$.fragment,s),s.forEach(w),$=u(t),r=d(t,"TBODY",{});var o=h(r);a(c.$$.fragment,o),g=u(o),a(x.$$.fragment,o),y=u(o),a(v.$$.fragment,o),D=u(o),a(b.$$.fragment,o),o.forEach(w)},m(t,s){k(t,e,s),o(n,e,null),k(t,$,s),k(t,r,s),o(c,r,null),E(r,g),o(x,r,null),E(r,y),o(v,r,null),E(r,D),o(b,r,null),O=!0},p(t,e){const $={};16&e&&($.$$scope={dirty:e,ctx:t}),n.$set($);const s={};16&e&&(s.$$scope={dirty:e,ctx:t}),c.$set(s);const a={};16&e&&(a.$$scope={dirty:e,ctx:t}),x.$set(a);const o={};16&e&&(o.$$scope={dirty:e,ctx:t}),v.$set(o);const r={};16&e&&(r.$$scope={dirty:e,ctx:t}),b.$set(r)},i(t){O||(p(n.$$.fragment,t),p(c.$$.fragment,t),p(x.$$.fragment,t),p(v.$$.fragment,t),p(b.$$.fragment,t),O=!0)},o(t){f(n.$$.fragment,t),f(c.$$.fragment,t),f(x.$$.fragment,t),f(v.$$.fragment,t),f(b.$$.fragment,t),O=!1},d(t){t&&w(e),l(n),t&&w($),t&&w(r),l(c),l(x),l(v),l(b)}}}function Jt(t){let e,n,$,r,c,v,D,b,O,T,j,N,R,q,G,P,V,L,U,X,_,tt,et,nt,$t,st,at;return e=new A({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),$=new C({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),c=new C({props:{$$slots:{default:[M]},$$scope:{ctx:t}}}),D=new I({props:{components:Wt}}),O=new B({props:{$$slots:{default:[K],source:[Z],showcase:[J]},$$scope:{ctx:t}}}),j=new H({props:{id:"properties",$$slots:{default:[Q]},$$scope:{ctx:t}}}),R=new F({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),G=new S({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),X=new H({props:{id:"events",$$slots:{default:[gt]},$$scope:{ctx:t}}}),tt=new S({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),nt=new H({props:{id:"scss-variables",$$slots:{default:[bt]},$$scope:{ctx:t}}}),st=new S({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){s(e.$$.fragment),n=m(),s($.$$.fragment),r=m(),s(c.$$.fragment),v=m(),s(D.$$.fragment),b=m(),s(O.$$.fragment),T=m(),s(j.$$.fragment),N=m(),s(R.$$.fragment),q=m(),s(G.$$.fragment),P=m(),V=i("div"),L=g("* Required"),U=m(),s(X.$$.fragment),_=m(),s(tt.$$.fragment),et=m(),s(nt.$$.fragment),$t=m(),s(st.$$.fragment),this.h()},l(t){a(e.$$.fragment,t),n=u(t),a($.$$.fragment,t),r=u(t),a(c.$$.fragment,t),v=u(t),a(D.$$.fragment,t),b=u(t),a(O.$$.fragment,t),T=u(t),a(j.$$.fragment,t),N=u(t),a(R.$$.fragment,t),q=u(t),a(G.$$.fragment,t),P=u(t),V=d(t,"DIV",{class:!0});var s=h(V);L=x(s,"* Required"),s.forEach(w),U=u(t),a(X.$$.fragment,t),_=u(t),a(tt.$$.fragment,t),et=u(t),a(nt.$$.fragment,t),$t=u(t),a(st.$$.fragment,t),this.h()},h(){y(V,"class","required")},m(t,s){o(e,t,s),k(t,n,s),o($,t,s),k(t,r,s),o(c,t,s),k(t,v,s),o(D,t,s),k(t,b,s),o(O,t,s),k(t,T,s),o(j,t,s),k(t,N,s),o(R,t,s),k(t,q,s),o(G,t,s),k(t,P,s),k(t,V,s),E(V,L),k(t,U,s),o(X,t,s),k(t,_,s),o(tt,t,s),k(t,et,s),o(nt,t,s),k(t,$t,s),o(st,t,s),at=!0},p(t,n){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};16&n&&(a.$$scope={dirty:n,ctx:t}),$.$set(a);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),c.$set(o);const r={};16&n&&(r.$$scope={dirty:n,ctx:t}),O.$set(r);const p={};16&n&&(p.$$scope={dirty:n,ctx:t}),j.$set(p);const f={};16&n&&(f.$$scope={dirty:n,ctx:t}),R.$set(f);const l={};16&n&&(l.$$scope={dirty:n,ctx:t}),G.$set(l);const m={};16&n&&(m.$$scope={dirty:n,ctx:t}),X.$set(m);const i={};16&n&&(i.$$scope={dirty:n,ctx:t}),tt.$set(i);const g={};16&n&&(g.$$scope={dirty:n,ctx:t}),nt.$set(g);const u={};16&n&&(u.$$scope={dirty:n,ctx:t}),st.$set(u)},i(t){at||(p(e.$$.fragment,t),p($.$$.fragment,t),p(c.$$.fragment,t),p(D.$$.fragment,t),p(O.$$.fragment,t),p(j.$$.fragment,t),p(R.$$.fragment,t),p(G.$$.fragment,t),p(X.$$.fragment,t),p(tt.$$.fragment,t),p(nt.$$.fragment,t),p(st.$$.fragment,t),at=!0)},o(t){f(e.$$.fragment,t),f($.$$.fragment,t),f(c.$$.fragment,t),f(D.$$.fragment,t),f(O.$$.fragment,t),f(j.$$.fragment,t),f(R.$$.fragment,t),f(G.$$.fragment,t),f(X.$$.fragment,t),f(tt.$$.fragment,t),f(nt.$$.fragment,t),f(st.$$.fragment,t),at=!1},d(t){l(e,t),t&&w(n),l($,t),t&&w(r),l(c,t),t&&w(v),l(D,t),t&&w(b),l(O,t),t&&w(T),l(j,t),t&&w(N),l(R,t),t&&w(q),l(G,t),t&&w(P),t&&w(V),t&&w(U),l(X,t),t&&w(_),l(tt,t),t&&w(et),l(nt,t),t&&w($t),l(st,t)}}}function Zt(t){let e,n;const m=[Kt];let i={$$slots:{default:[Jt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=$(i,m[t]);return e=new j({props:i}),{c(){s(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,$){o(e,t,$),n=!0},p(t,[n]){const $=0&n?r(m,[c(Kt)]):{};16&n&&($.$$scope={dirty:n,ctx:t}),e.$set($)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){l(e,t)}}}const Kt={name:"AutocompleteOption",relatedComponents:[{name:"Autocomplete",link:"./docs/components/autocomplete"},{name:"AutocompleteField",link:"./docs/components/autocomplete-field"}]},{name:Qt,relatedComponents:Wt}=Kt;function Xt(t){return[[{name:"Test Option",details:"Description"},{name:"Another One",details:"Different"},{name:"No Description"}]]}export default class extends t{constructor(t){super(),e(this,t,Xt,Zt,n,{})}}export{Kt as metadata};
