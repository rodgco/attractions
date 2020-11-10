import{_ as t,a as e,b as n,c as s,i as a,s as $,d as o,S as r,e as c,f as p,g as l,h as f,j as i,k as m,l as u,m as d,n as g,J as h,p as x,q as w,r as k,N as y,Z as v,u as b,v as E,w as D,x as j,z as T,y as B,A as O,o as C}from"./client.1993fda3.js";import{B as S}from"./button.ca9a7865.js";import"./classes.5b4c3c94.js";import"./pagination.1abb547f.js";import"./label.0153a2ad.js";import"./popover.092c623d.js";import"./asyncToGenerator.756dab92.js";import{B as R}from"./badge.214a4ca5.js";import"./copyable-code.5c476e26.js";import{L as A,H as N,P}from"./layout.cfe3d6f9.js";import{M as z}from"./mark.b6fa0e33.js";import{T as H,a as F,b as M,c as W}from"./table.f34fe394.js";import{H as G}from"./h3.df2289ac.js";import{H as I}from"./h2.add4f21d.js";import{S as V}from"./showcase.8a969abe.js";import"./color-preview.72edcca8.js";import{C as Y}from"./color-preview.4d4e076c.js";import"./shadow-preview.d36d4835.js";import{S as L}from"./shadow-preview.c78cc26b.js";function U(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,$=e(t);if(s){var o=e(this).constructor;a=Reflect.construct($,arguments,o)}else a=$.apply(this,arguments);return n(this,a)}}function q(t){var e,n,s,a;return{c:function(){e=c("svg"),n=c("path"),s=c("path"),this.h()},l:function(t){e=p(t,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var a=l(e);n=p(a,"path",{d:!0},1),l(n).forEach(f),s=p(a,"path",{d:!0},1),l(s).forEach(f),a.forEach(f),this.h()},h:function(){i(n,"d","M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"),i(s,"d","M13.73 21a2 2 0 0 1-3.46 0"),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"width",t[0]),i(e,"height",t[0]),i(e,"fill","none"),i(e,"viewBox","0 0 24 24"),i(e,"stroke","currentColor"),i(e,"stroke-width",t[1]),i(e,"stroke-linecap","round"),i(e,"stroke-linejoin","round"),i(e,"class",a="feather feather-bell "+t[2])},m:function(t,a){m(t,e,a),u(e,n),u(e,s)},p:function(t,n){var s=d(n,1)[0];1&s&&i(e,"width",t[0]),1&s&&i(e,"height",t[0]),2&s&&i(e,"stroke-width",t[1]),4&s&&a!==(a="feather feather-bell "+t[2])&&i(e,"class",a)},i:g,o:g,d:function(t){t&&f(e)}}}function J(t,e,n){var s=e.size,a=void 0===s?"100%":s,$=e.strokeWidth,o=void 0===$?2:$,r=e.class,c=void 0===r?"":r;return"100%"!==a&&(a="x"===a.slice(-1)?a.slice(0,a.length-1)+"em":parseInt(a)+"px"),t.$$set=function(t){"size"in t&&n(0,a=t.size),"strokeWidth"in t&&n(1,o=t.strokeWidth),"class"in t&&n(2,c=t.class)},[a,o,c]}var Z=function(e){t(c,r);var n=U(c);function c(t){var e;return s(this,c),e=n.call(this),a(o(e),t,J,q,$,{size:0,strokeWidth:1,class:2}),e}return c}();function _(t){let e;return{c(){e=B("Badge")},l(t){e=O(t,"Badge")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function K(t){let e;return{c(){e=B("A distinctive colored circle to bring attention to an element.")},l(t){e=O(t,"A distinctive colored circle to bring attention to an element.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Q(t){let e;return{c(){e=B("used on some text")},l(t){e=O(t,"used on some text")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function X(t){let e,n;return e=new Z({props:{size:"20",class:"icon"}}),{c(){x(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){k(e,t,s),n=!0},p:g,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function tt(t){let e,n;return e=new R({props:{hidden:t[0],$$slots:{default:[X]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){k(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.hidden=t[0]),4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function et(t){let e,n,s,a,$;return n=new R({props:{$$slots:{default:[Q]},$$scope:{ctx:t}}}),a=new S({props:{round:!0,$$slots:{default:[tt]},$$scope:{ctx:t}}}),a.$on("click",t[1]),{c(){e=C("div"),x(n.$$.fragment),s=j(),x(a.$$.fragment),this.h()},l(t){e=p(t,"DIV",{slot:!0,class:!0});var $=l(e);w(n.$$.fragment,$),s=T($),w(a.$$.fragment,$),$.forEach(f),this.h()},h(){i(e,"slot","showcase"),i(e,"class","padded")},m(t,o){m(t,e,o),k(n,e,null),u(e,s),k(a,e,null),$=!0},p(t,e){const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const $={};5&e&&($.$$scope={dirty:e,ctx:t}),a.$set($)},i(t){$||(b(n.$$.fragment,t),b(a.$$.fragment,t),$=!0)},o(t){E(n.$$.fragment,t),E(a.$$.fragment,t),$=!1},d(t){t&&f(e),D(n),D(a)}}}function nt(t){let e,n;return{c(){e=C("div"),n=C("pre"),this.h()},l(t){e=p(t,"DIV",{slot:!0});var s=l(e);n=p(s,"PRE",{class:!0}),l(n).forEach(f),s.forEach(f),this.h()},h(){i(n,"class","language-svelte"),i(e,"slot","source")},m(t,s){m(t,e,s),u(e,n),n.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> hidden <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span><span class="token punctuation">></span></span>used on some text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">round</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> hidden <span class="token operator">=</span> <span class="token operator">!</span>hidden<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>hidden<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BellIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span></code>'},p:g,d(t){t&&f(e)}}}function st(t){let e;return{c(){e=j()},l(t){e=T(t)},m(t,n){m(t,e,n)},p:g,i:g,o:g,d(t){t&&f(e)}}}function at(t){let e;return{c(){e=B("Properties")},l(t){e=O(t,"Properties")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function $t(t){let e;return{c(){e=B("Functional Properties")},l(t){e=O(t,"Functional Properties")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function ot(t){let e;return{c(){e=B("Name")},l(t){e=O(t,"Name")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function rt(t){let e;return{c(){e=B("Default")},l(t){e=O(t,"Default")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function ct(t){let e;return{c(){e=B("Type")},l(t){e=O(t,"Type")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function pt(t){let e;return{c(){e=B("Description")},l(t){e=O(t,"Description")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function lt(t){let e,n,s,a,$,o,r,c;return e=new M({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),r=new M({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=j(),x(s.$$.fragment),a=j(),x($.$$.fragment),o=j(),x(r.$$.fragment)},l(t){w(e.$$.fragment,t),n=T(t),w(s.$$.fragment,t),a=T(t),w($.$$.fragment,t),o=T(t),w(r.$$.fragment,t)},m(t,p){k(e,t,p),m(t,n,p),k(s,t,p),m(t,a,p),k($,t,p),m(t,o,p),k(r,t,p),c=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const c={};4&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const p={};4&n&&(p.$$scope={dirty:n,ctx:t}),r.$set(p)},i(t){c||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t),t&&f(o),D(r,t)}}}function ft(t){let e,n,s;return{c(){e=C("strong"),n=C("code"),s=B("hidden")},l(t){e=p(t,"STRONG",{});var a=l(e);n=p(a,"CODE",{});var $=l(n);s=O($,"hidden"),$.forEach(f),a.forEach(f)},m(t,a){m(t,e,a),u(e,n),u(n,s)},d(t){t&&f(e)}}}function it(t){let e,n;return{c(){e=C("code"),n=B("false")},l(t){e=p(t,"CODE",{});var s=l(e);n=O(s,"false"),s.forEach(f)},m(t,s){m(t,e,s),u(e,n)},d(t){t&&f(e)}}}function mt(t){let e,n;return{c(){e=C("code"),n=B("boolean")},l(t){e=p(t,"CODE",{});var s=l(e);n=O(s,"boolean"),s.forEach(f)},m(t,s){m(t,e,s),u(e,n)},d(t){t&&f(e)}}}function ut(t){let e;return{c(){e=B("Whether the badge is shown or hidden. Useful for controlling its appearance without modifying the DOM tree.")},l(t){e=O(t,"Whether the badge is shown or hidden. Useful for controlling its appearance without modifying the DOM tree.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function dt(t){let e,n,s,a,$,o,r,c;return e=new W({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),s=new W({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),$=new W({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),r=new W({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=j(),x(s.$$.fragment),a=j(),x($.$$.fragment),o=j(),x(r.$$.fragment)},l(t){w(e.$$.fragment,t),n=T(t),w(s.$$.fragment,t),a=T(t),w($.$$.fragment,t),o=T(t),w(r.$$.fragment,t)},m(t,p){k(e,t,p),m(t,n,p),k(s,t,p),m(t,a,p),k($,t,p),m(t,o,p),k(r,t,p),c=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const c={};4&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const p={};4&n&&(p.$$scope={dirty:n,ctx:t}),r.$set(p)},i(t){c||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t),t&&f(o),D(r,t)}}}function gt(t){let e,n,s,a,$,o;return n=new F({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){e=C("thead"),x(n.$$.fragment),s=j(),a=C("tbody"),x($.$$.fragment)},l(t){e=p(t,"THEAD",{});var o=l(e);w(n.$$.fragment,o),o.forEach(f),s=T(t),a=p(t,"TBODY",{});var r=l(a);w($.$$.fragment,r),r.forEach(f)},m(t,r){m(t,e,r),k(n,e,null),m(t,s,r),m(t,a,r),k($,a,null),o=!0},p(t,e){const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),$.$set(a)},i(t){o||(b(n.$$.fragment,t),b($.$$.fragment,t),o=!0)},o(t){E(n.$$.fragment,t),E($.$$.fragment,t),o=!1},d(t){t&&f(e),D(n),t&&f(s),t&&f(a),D($)}}}function ht(t){let e;return{c(){e=B("Class Properties")},l(t){e=O(t,"Class Properties")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function xt(t){let e,n,s,a,$,o,r;return{c(){e=B("All "),n=C("code"),s=B("<Badge>"),a=B(" components use the "),$=C("code"),o=B(".badge"),r=B(" class.")},l(t){e=O(t,"All "),n=p(t,"CODE",{});var c=l(n);s=O(c,"<Badge>"),c.forEach(f),a=O(t," components use the "),$=p(t,"CODE",{});var i=l($);o=O(i,".badge"),i.forEach(f),r=O(t," class.")},m(t,c){m(t,e,c),m(t,n,c),u(n,s),m(t,a,c),m(t,$,c),u($,o),m(t,r,c)},d(t){t&&f(e),t&&f(n),t&&f(a),t&&f($),t&&f(r)}}}function wt(t){let e;return{c(){e=B("Falsy values passed to classes will be disregarded.")},l(t){e=O(t,"Falsy values passed to classes will be disregarded.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function kt(t){let e;return{c(){e=B("Name")},l(t){e=O(t,"Name")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function yt(t){let e;return{c(){e=B("Default")},l(t){e=O(t,"Default")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function vt(t){let e;return{c(){e=B("Type")},l(t){e=O(t,"Type")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function bt(t){let e;return{c(){e=B("Description")},l(t){e=O(t,"Description")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Et(t){let e,n,s,a,$,o,r,c;return e=new M({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),r=new M({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=j(),x(s.$$.fragment),a=j(),x($.$$.fragment),o=j(),x(r.$$.fragment)},l(t){w(e.$$.fragment,t),n=T(t),w(s.$$.fragment,t),a=T(t),w($.$$.fragment,t),o=T(t),w(r.$$.fragment,t)},m(t,p){k(e,t,p),m(t,n,p),k(s,t,p),m(t,a,p),k($,t,p),m(t,o,p),k(r,t,p),c=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const c={};4&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const p={};4&n&&(p.$$scope={dirty:n,ctx:t}),r.$set(p)},i(t){c||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t),t&&f(o),D(r,t)}}}function Dt(t){let e,n,s;return{c(){e=C("strong"),n=C("code"),s=B("class")},l(t){e=p(t,"STRONG",{});var a=l(e);n=p(a,"CODE",{});var $=l(n);s=O($,"class"),$.forEach(f),a.forEach(f)},m(t,a){m(t,e,a),u(e,n),u(n,s)},d(t){t&&f(e)}}}function jt(t){let e,n;return{c(){e=C("code"),n=B("null")},l(t){e=p(t,"CODE",{});var s=l(e);n=O(s,"null"),s.forEach(f)},m(t,s){m(t,e,s),u(e,n)},d(t){t&&f(e)}}}function Tt(t){let e,n;return{c(){e=C("code"),n=B("string")},l(t){e=p(t,"CODE",{});var s=l(e);n=O(s,"string"),s.forEach(f)},m(t,s){m(t,e,s),u(e,n)},d(t){t&&f(e)}}}function Bt(t){let e;return{c(){e=B("A class string to add to the handle.")},l(t){e=O(t,"A class string to add to the handle.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Ot(t){let e,n,s,a,$,o,r,c;return e=new W({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),s=new W({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),$=new W({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),r=new W({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=j(),x(s.$$.fragment),a=j(),x($.$$.fragment),o=j(),x(r.$$.fragment)},l(t){w(e.$$.fragment,t),n=T(t),w(s.$$.fragment,t),a=T(t),w($.$$.fragment,t),o=T(t),w(r.$$.fragment,t)},m(t,p){k(e,t,p),m(t,n,p),k(s,t,p),m(t,a,p),k($,t,p),m(t,o,p),k(r,t,p),c=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const c={};4&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const p={};4&n&&(p.$$scope={dirty:n,ctx:t}),r.$set(p)},i(t){c||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t),t&&f(o),D(r,t)}}}function Ct(t){let e,n,s,a,$,o;return n=new F({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){e=C("thead"),x(n.$$.fragment),s=j(),a=C("tbody"),x($.$$.fragment)},l(t){e=p(t,"THEAD",{});var o=l(e);w(n.$$.fragment,o),o.forEach(f),s=T(t),a=p(t,"TBODY",{});var r=l(a);w($.$$.fragment,r),r.forEach(f)},m(t,r){m(t,e,r),k(n,e,null),m(t,s,r),m(t,a,r),k($,a,null),o=!0},p(t,e){const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),$.$set(a)},i(t){o||(b(n.$$.fragment,t),b($.$$.fragment,t),o=!0)},o(t){E(n.$$.fragment,t),E($.$$.fragment,t),o=!1},d(t){t&&f(e),D(n),t&&f(s),t&&f(a),D($)}}}function St(t){let e;return{c(){e=B("Bonus")},l(t){e=O(t,"Bonus")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Rt(t){let e,n,s,a,$,o,r,c,i;return e=new z({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=B(": use the "),s=C("code"),a=B(".icon"),$=B(" class for the icons inside the badge to set "),o=C("code"),r=B("display: block"),c=B(" on them and avoid unexpected space at the bottom.")},l(t){w(e.$$.fragment,t),n=O(t,": use the "),s=p(t,"CODE",{});var i=l(s);a=O(i,".icon"),i.forEach(f),$=O(t," class for the icons inside the badge to set "),o=p(t,"CODE",{});var m=l(o);r=O(m,"display: block"),m.forEach(f),c=O(t," on them and avoid unexpected space at the bottom.")},m(t,p){k(e,t,p),m(t,n,p),m(t,s,p),u(s,a),m(t,$,p),m(t,o,p),u(o,r),m(t,c,p),i=!0},p(t,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){i||(b(e.$$.fragment,t),i=!0)},o(t){E(e.$$.fragment,t),i=!1},d(t){D(e,t),t&&f(n),t&&f(s),t&&f($),t&&f(o),t&&f(c)}}}function At(t){let e;return{c(){e=B("Slots")},l(t){e=O(t,"Slots")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Nt(t){let e;return{c(){e=B("Default slot")},l(t){e=O(t,"Default slot")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Pt(t){let e;return{c(){e=B("The element to attach a badge to.")},l(t){e=O(t,"The element to attach a badge to.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function zt(t){let e;return{c(){e=B("SCSS Variables")},l(t){e=O(t,"SCSS Variables")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Ht(t){let e;return{c(){e=B("Name")},l(t){e=O(t,"Name")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Ft(t){let e;return{c(){e=B("Description")},l(t){e=O(t,"Description")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Mt(t){let e;return{c(){e=B("Default")},l(t){e=O(t,"Default")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Wt(t){let e,n,s,a,$,o;return e=new M({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),s=new M({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),$=new M({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=j(),x(s.$$.fragment),a=j(),x($.$$.fragment)},l(t){w(e.$$.fragment,t),n=T(t),w(s.$$.fragment,t),a=T(t),w($.$$.fragment,t)},m(t,r){k(e,t,r),m(t,n,r),k(s,t,r),m(t,a,r),k($,t,r),o=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){o||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),o=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t)}}}function Gt(t){let e,n,s;return{c(){e=C("strong"),n=C("code"),s=B("$shadow-raised")},l(t){e=p(t,"STRONG",{});var a=l(e);n=p(a,"CODE",{});var $=l(n);s=O($,"$shadow-raised"),$.forEach(f),a.forEach(f)},m(t,a){m(t,e,a),u(e,n),u(n,s)},d(t){t&&f(e)}}}function It(t){let e;return{c(){e=B("The shadow of the badge.")},l(t){e=O(t,"The shadow of the badge.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function Vt(t){let e,n;return e=new L({props:{value:te}}),{c(){x(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){k(e,t,s),n=!0},p:g,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Yt(t){let e,n,s,a,$,o;return e=new W({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),s=new W({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),$=new W({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=j(),x(s.$$.fragment),a=j(),x($.$$.fragment)},l(t){w(e.$$.fragment,t),n=T(t),w(s.$$.fragment,t),a=T(t),w($.$$.fragment,t)},m(t,r){k(e,t,r),m(t,n,r),k(s,t,r),m(t,a,r),k($,t,r),o=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){o||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),o=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t)}}}function Lt(t){let e,n,s;return{c(){e=C("strong"),n=C("code"),s=B("$badge-default")},l(t){e=p(t,"STRONG",{});var a=l(e);n=p(a,"CODE",{});var $=l(n);s=O($,"$badge-default"),$.forEach(f),a.forEach(f)},m(t,a){m(t,e,a),u(e,n),u(n,s)},d(t){t&&f(e)}}}function Ut(t){let e;return{c(){e=B("The default color of the badge.")},l(t){e=O(t,"The default color of the badge.")},m(t,n){m(t,e,n)},d(t){t&&f(e)}}}function qt(t){let e,n;return e=new Y({props:{value:"#FF5757"}}),{c(){x(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){k(e,t,s),n=!0},p:g,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}function Jt(t){let e,n,s,a,$,o;return e=new W({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),s=new W({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),$=new W({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=j(),x(s.$$.fragment),a=j(),x($.$$.fragment)},l(t){w(e.$$.fragment,t),n=T(t),w(s.$$.fragment,t),a=T(t),w($.$$.fragment,t)},m(t,r){k(e,t,r),m(t,n,r),k(s,t,r),m(t,a,r),k($,t,r),o=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const r={};4&n&&(r.$$scope={dirty:n,ctx:t}),$.$set(r)},i(t){o||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),o=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t)}}}function Zt(t){let e,n,s,a,$,o,r,c;return n=new F({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),$=new F({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),r=new F({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){e=C("thead"),x(n.$$.fragment),s=j(),a=C("tbody"),x($.$$.fragment),o=j(),x(r.$$.fragment)},l(t){e=p(t,"THEAD",{});var c=l(e);w(n.$$.fragment,c),c.forEach(f),s=T(t),a=p(t,"TBODY",{});var i=l(a);w($.$$.fragment,i),o=T(i),w(r.$$.fragment,i),i.forEach(f)},m(t,p){m(t,e,p),k(n,e,null),m(t,s,p),m(t,a,p),k($,a,null),u(a,o),k(r,a,null),c=!0},p(t,e){const s={};4&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};4&e&&(a.$$scope={dirty:e,ctx:t}),$.$set(a);const o={};4&e&&(o.$$scope={dirty:e,ctx:t}),r.$set(o)},i(t){c||(b(n.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),c=!0)},o(t){E(n.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),c=!1},d(t){t&&f(e),D(n),t&&f(s),t&&f(a),D($),D(r)}}}function _t(t){let e,n,s,a,$,o,r,c,p,l,i,u,d,g,h,y,v,B,O,C,S,R,A,z,F,M,W,Y,L,U,q,J;return e=new N({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),s=new P({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),$=new V({props:{$$slots:{default:[st],source:[nt],showcase:[et]},$$scope:{ctx:t}}}),r=new I({props:{id:"properties",$$slots:{default:[at]},$$scope:{ctx:t}}}),p=new G({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),i=new H({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),d=new G({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),h=new P({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),v=new P({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),O=new H({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),S=new P({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),A=new I({props:{id:"slots",$$slots:{default:[At]},$$scope:{ctx:t}}}),F=new G({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),W=new P({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),L=new I({props:{id:"scss-variables",$$slots:{default:[zt]},$$scope:{ctx:t}}}),q=new H({props:{$$slots:{default:[Zt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),n=j(),x(s.$$.fragment),a=j(),x($.$$.fragment),o=j(),x(r.$$.fragment),c=j(),x(p.$$.fragment),l=j(),x(i.$$.fragment),u=j(),x(d.$$.fragment),g=j(),x(h.$$.fragment),y=j(),x(v.$$.fragment),B=j(),x(O.$$.fragment),C=j(),x(S.$$.fragment),R=j(),x(A.$$.fragment),z=j(),x(F.$$.fragment),M=j(),x(W.$$.fragment),Y=j(),x(L.$$.fragment),U=j(),x(q.$$.fragment)},l(t){w(e.$$.fragment,t),n=T(t),w(s.$$.fragment,t),a=T(t),w($.$$.fragment,t),o=T(t),w(r.$$.fragment,t),c=T(t),w(p.$$.fragment,t),l=T(t),w(i.$$.fragment,t),u=T(t),w(d.$$.fragment,t),g=T(t),w(h.$$.fragment,t),y=T(t),w(v.$$.fragment,t),B=T(t),w(O.$$.fragment,t),C=T(t),w(S.$$.fragment,t),R=T(t),w(A.$$.fragment,t),z=T(t),w(F.$$.fragment,t),M=T(t),w(W.$$.fragment,t),Y=T(t),w(L.$$.fragment,t),U=T(t),w(q.$$.fragment,t)},m(t,f){k(e,t,f),m(t,n,f),k(s,t,f),m(t,a,f),k($,t,f),m(t,o,f),k(r,t,f),m(t,c,f),k(p,t,f),m(t,l,f),k(i,t,f),m(t,u,f),k(d,t,f),m(t,g,f),k(h,t,f),m(t,y,f),k(v,t,f),m(t,B,f),k(O,t,f),m(t,C,f),k(S,t,f),m(t,R,f),k(A,t,f),m(t,z,f),k(F,t,f),m(t,M,f),k(W,t,f),m(t,Y,f),k(L,t,f),m(t,U,f),k(q,t,f),J=!0},p(t,n){const a={};4&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a);const o={};4&n&&(o.$$scope={dirty:n,ctx:t}),s.$set(o);const c={};5&n&&(c.$$scope={dirty:n,ctx:t}),$.$set(c);const l={};4&n&&(l.$$scope={dirty:n,ctx:t}),r.$set(l);const f={};4&n&&(f.$$scope={dirty:n,ctx:t}),p.$set(f);const m={};4&n&&(m.$$scope={dirty:n,ctx:t}),i.$set(m);const u={};4&n&&(u.$$scope={dirty:n,ctx:t}),d.$set(u);const g={};4&n&&(g.$$scope={dirty:n,ctx:t}),h.$set(g);const x={};4&n&&(x.$$scope={dirty:n,ctx:t}),v.$set(x);const w={};4&n&&(w.$$scope={dirty:n,ctx:t}),O.$set(w);const k={};4&n&&(k.$$scope={dirty:n,ctx:t}),S.$set(k);const y={};4&n&&(y.$$scope={dirty:n,ctx:t}),A.$set(y);const b={};4&n&&(b.$$scope={dirty:n,ctx:t}),F.$set(b);const E={};4&n&&(E.$$scope={dirty:n,ctx:t}),W.$set(E);const D={};4&n&&(D.$$scope={dirty:n,ctx:t}),L.$set(D);const j={};4&n&&(j.$$scope={dirty:n,ctx:t}),q.$set(j)},i(t){J||(b(e.$$.fragment,t),b(s.$$.fragment,t),b($.$$.fragment,t),b(r.$$.fragment,t),b(p.$$.fragment,t),b(i.$$.fragment,t),b(d.$$.fragment,t),b(h.$$.fragment,t),b(v.$$.fragment,t),b(O.$$.fragment,t),b(S.$$.fragment,t),b(A.$$.fragment,t),b(F.$$.fragment,t),b(W.$$.fragment,t),b(L.$$.fragment,t),b(q.$$.fragment,t),J=!0)},o(t){E(e.$$.fragment,t),E(s.$$.fragment,t),E($.$$.fragment,t),E(r.$$.fragment,t),E(p.$$.fragment,t),E(i.$$.fragment,t),E(d.$$.fragment,t),E(h.$$.fragment,t),E(v.$$.fragment,t),E(O.$$.fragment,t),E(S.$$.fragment,t),E(A.$$.fragment,t),E(F.$$.fragment,t),E(W.$$.fragment,t),E(L.$$.fragment,t),E(q.$$.fragment,t),J=!1},d(t){D(e,t),t&&f(n),D(s,t),t&&f(a),D($,t),t&&f(o),D(r,t),t&&f(c),D(p,t),t&&f(l),D(i,t),t&&f(u),D(d,t),t&&f(g),D(h,t),t&&f(y),D(v,t),t&&f(B),D(O,t),t&&f(C),D(S,t),t&&f(R),D(A,t),t&&f(z),D(F,t),t&&f(M),D(W,t),t&&f(Y),D(L,t),t&&f(U),D(q,t)}}}function Kt(t){let e,n;const s=[Qt];let a={$$slots:{default:[_t]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)a=h(a,s[t]);return e=new A({props:a}),{c(){x(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){k(e,t,s),n=!0},p(t,[n]){const a=0&n?y(s,[v(Qt)]):{};5&n&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){D(e,t)}}}const Qt={name:"Badge",shadowRaised:"0 2px 4px -1px rgba(0, 0, 0, .2), 0 3px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);"},{name:Xt,shadowRaised:te}=Qt;function ee(t,e,n){let s=!1;return[s,()=>n(0,s=!s)]}export default class extends r{constructor(t){super(),a(this,t,ee,Kt,$,{})}}export{Qt as metadata};
