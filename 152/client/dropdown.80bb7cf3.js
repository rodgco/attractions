import{S as t,i as n,s as e,E as s,j as a,k as $,m as o,I as r,t as c,o as p,p as l,U as f,q as m,u as d,f as g,d as u,r as i,v as h,h as x,c as w,b as k,e as y,g as v,n as D,O as E}from"./client.debb95b0.js";import{B as b}from"./button.53dc1e9d.js";import"./classes.325c8763.js";import"./pagination.6bdeda35.js";import"./card.23bb1e4d.js";import{D as T,a as C}from"./dropdown.c84ef488.js";import"./label.2e72a0ff.js";import"./popover.2cfdd926.js";import"./copyable-code.6598f196.js";import{C as O}from"./ChevronDownIcon.350eec28.js";import{L as j,H as S,P as I}from"./layout.98399e55.js";import{T as A,a as N,b as R,c as B}from"./table.962e1d27.js";import{H as F}from"./h3.3f223557.js";import{H}from"./h2.8b5449f6.js";import{S as P}from"./showcase.6e8a179e.js";import"./color-preview.72edcca8.js";import{C as G}from"./color-preview.b8809eac.js";import{R as V}from"./related-components.b6f26832.js";import"./shadow-preview.d36d4835.js";import{S as M}from"./shadow-preview.227d31b5.js";function Y(t){let n;return{c(){n=i("Dropdown")},l(t){n=h(t,"Dropdown")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function z(t){let n,e,s,a,$;return{c(){n=i("Toggleable, contextual overlays for displaying additional details or actions. Must be wrapped with a "),e=x("a"),s=x("code"),a=i("DropdownShell"),$=i(" for correct behavior."),this.h()},l(t){n=h(t,"Toggleable, contextual overlays for displaying additional details or actions. Must be wrapped with a "),e=w(t,"A",{href:!0});var o=k(e);s=w(o,"CODE",{});var r=k(s);a=h(r,"DropdownShell"),r.forEach(u),o.forEach(u),$=h(t," for correct behavior."),this.h()},h(){y(e,"href","./docs/components/dropdown-shell")},m(t,o){g(t,n,o),g(t,e,o),v(e,s),v(s,a),g(t,$,o)},d(t){t&&u(n),t&&u(e),t&&u($)}}}function L(t){let n,e,s;return e=new O({props:{size:"24",class:"ml dropdown-chevron"}}),{c(){n=i("I toggle a dropdown\n        "),a(e.$$.fragment)},l(t){n=h(t,"I toggle a dropdown\n        "),$(e.$$.fragment,t)},m(t,a){g(t,n,a),o(e,t,a),s=!0},p:D,i(t){s||(c(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){t&&u(n),l(e,t)}}}function q(t){let n,e;return{c(){n=x("div"),e=i("and I am the dropdown content"),this.h()},l(t){n=w(t,"DIV",{class:!0});var s=k(n);e=h(s,"and I am the dropdown content"),s.forEach(u),this.h()},h(){y(n,"class","padded svelte-10yj616")},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function U(t){let n,e,s,r;return n=new b({props:{$$slots:{default:[L]},$$scope:{ctx:t}}}),n.$on("click",(function(){E(t[0])&&t[0].apply(this,arguments)})),s=new C({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),r=!0},p(e,a){t=e;const $={};2&a&&($.$$scope={dirty:a,ctx:t}),n.$set($);const o={};2&a&&(o.$$scope={dirty:a,ctx:t}),s.$set(o)},i(t){r||(c(n.$$.fragment,t),c(s.$$.fragment,t),r=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),r=!1},d(t){l(n,t),t&&u(e),l(s,t)}}}function J(t){let n;return{c(){n=i("look up there")},l(t){n=h(t,"look up there")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function K(t){let n,e;return{c(){n=x("div"),e=i("right here"),this.h()},l(t){n=w(t,"DIV",{class:!0});var s=k(n);e=h(s,"right here"),s.forEach(u),this.h()},h(){y(n,"class","padded svelte-10yj616")},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function Q(t){let n,e,s,r;return n=new b({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),n.$on("click",(function(){E(t[0])&&t[0].apply(this,arguments)})),s=new C({props:{top:!0,$$slots:{default:[K]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),r=!0},p(e,a){t=e;const $={};2&a&&($.$$scope={dirty:a,ctx:t}),n.$set($);const o={};2&a&&(o.$$scope={dirty:a,ctx:t}),s.$set(o)},i(t){r||(c(n.$$.fragment,t),c(s.$$.fragment,t),r=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),r=!1},d(t){l(n,t),t&&u(e),l(s,t)}}}function W(t){let n,e,s,r,f;return e=new T({props:{$$slots:{default:[U,({toggle:t})=>({0:t}),({toggle:t})=>t?1:0]},$$scope:{ctx:t}}}),r=new T({props:{$$slots:{default:[Q,({toggle:t})=>({0:t}),({toggle:t})=>t?1:0]},$$scope:{ctx:t}}}),{c(){n=x("div"),a(e.$$.fragment),s=m(),a(r.$$.fragment),this.h()},l(t){n=w(t,"DIV",{slot:!0,class:!0});var a=k(n);$(e.$$.fragment,a),s=d(a),$(r.$$.fragment,a),a.forEach(u),this.h()},h(){y(n,"slot","showcase"),y(n,"class","padded svelte-10yj616")},m(t,a){g(t,n,a),o(e,n,null),v(n,s),o(r,n,null),f=!0},p(t,n){const s={};3&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};3&n&&(a.$$scope={dirty:n,ctx:t}),r.$set(a)},i(t){f||(c(e.$$.fragment,t),c(r.$$.fragment,t),f=!0)},o(t){p(e.$$.fragment,t),p(r.$$.fragment,t),f=!1},d(t){t&&u(n),l(e),l(r)}}}function X(t){let n,e;return{c(){n=x("div"),e=x("pre"),this.h()},l(t){n=w(t,"DIV",{slot:!0});var s=k(n);e=w(s,"PRE",{class:!0}),k(e).forEach(u),s.forEach(u),this.h()},h(){y(e,"class","language-svelte"),y(n,"slot","source")},m(t,s){g(t,n,s),v(n,e),e.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownShell</span> <span class="token attr-name"><span class="token namespace">let:</span>toggle</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n    I toggle a dropdown\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChevronDownIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>24<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ml dropdown-chevron<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>padded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      and I am the dropdown content\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownShell</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DropdownShell</span> <span class="token attr-name"><span class="token namespace">let:</span>toggle</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n    look up there\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dropdown</span> <span class="token attr-name">top</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>padded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      right here\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dropdown</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DropdownShell</span><span class="token punctuation">></span></span></code>'},p:D,d(t){t&&u(n)}}}function Z(t){let n;return{c(){n=m()},l(t){n=d(t)},m(t,e){g(t,n,e)},p:D,i:D,o:D,d(t){t&&u(n)}}}function _(t){let n;return{c(){n=i("Properties")},l(t){n=h(t,"Properties")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function tt(t){let n;return{c(){n=i("Style Properties")},l(t){n=h(t,"Style Properties")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function nt(t){let n;return{c(){n=i("Name")},l(t){n=h(t,"Name")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function et(t){let n;return{c(){n=i("Default")},l(t){n=h(t,"Default")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function st(t){let n;return{c(){n=i("Type")},l(t){n=h(t,"Type")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function at(t){let n;return{c(){n=i("Description")},l(t){n=h(t,"Description")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function $t(t){let n,e,s,r,f,i,h,x;return n=new R({props:{$$slots:{default:[nt]},$$scope:{ctx:t}}}),s=new R({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),f=new R({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),h=new R({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(f.$$.fragment),i=m(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(f.$$.fragment,t),i=d(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(f,t,a),g(t,i,a),o(h,t,a),x=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){l(n,t),t&&u(e),l(s,t),t&&u(r),l(f,t),t&&u(i),l(h,t)}}}function ot(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=i("right")},l(t){n=w(t,"STRONG",{});var a=k(n);e=w(a,"CODE",{});var $=k(e);s=h($,"right"),$.forEach(u),a.forEach(u)},m(t,a){g(t,n,a),v(n,e),v(e,s)},d(t){t&&u(n)}}}function rt(t){let n,e;return{c(){n=x("code"),e=i("false")},l(t){n=w(t,"CODE",{});var s=k(n);e=h(s,"false"),s.forEach(u)},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function ct(t){let n,e;return{c(){n=x("code"),e=i("boolean")},l(t){n=w(t,"CODE",{});var s=k(n);e=h(s,"boolean"),s.forEach(u)},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function pt(t){let n;return{c(){n=i("Aligns the dropdown content with the right edge of the shell.")},l(t){n=h(t,"Aligns the dropdown content with the right edge of the shell.")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function lt(t){let n,e,s,r,f,i,h,x;return n=new B({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),s=new B({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),f=new B({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),h=new B({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(f.$$.fragment),i=m(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(f.$$.fragment,t),i=d(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(f,t,a),g(t,i,a),o(h,t,a),x=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){l(n,t),t&&u(e),l(s,t),t&&u(r),l(f,t),t&&u(i),l(h,t)}}}function ft(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=i("top")},l(t){n=w(t,"STRONG",{});var a=k(n);e=w(a,"CODE",{});var $=k(e);s=h($,"top"),$.forEach(u),a.forEach(u)},m(t,a){g(t,n,a),v(n,e),v(e,s)},d(t){t&&u(n)}}}function mt(t){let n,e;return{c(){n=x("code"),e=i("false")},l(t){n=w(t,"CODE",{});var s=k(n);e=h(s,"false"),s.forEach(u)},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function dt(t){let n,e;return{c(){n=x("code"),e=i("boolean")},l(t){n=w(t,"CODE",{});var s=k(n);e=h(s,"boolean"),s.forEach(u)},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function gt(t){let n;return{c(){n=i("Aligns the dropdown content such that it opens to the top of the shell, extending up.")},l(t){n=h(t,"Aligns the dropdown content such that it opens to the top of the shell, extending up.")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function ut(t){let n,e,s,r,f,i,h,x;return n=new B({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),s=new B({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),f=new B({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),h=new B({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(f.$$.fragment),i=m(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(f.$$.fragment,t),i=d(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(f,t,a),g(t,i,a),o(h,t,a),x=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){l(n,t),t&&u(e),l(s,t),t&&u(r),l(f,t),t&&u(i),l(h,t)}}}function it(t){let n,e,s,r,f,i,h,y;return e=new N({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),f=new N({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),h=new N({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){n=x("thead"),a(e.$$.fragment),s=m(),r=x("tbody"),a(f.$$.fragment),i=m(),a(h.$$.fragment)},l(t){n=w(t,"THEAD",{});var a=k(n);$(e.$$.fragment,a),a.forEach(u),s=d(t),r=w(t,"TBODY",{});var o=k(r);$(f.$$.fragment,o),i=d(o),$(h.$$.fragment,o),o.forEach(u)},m(t,a){g(t,n,a),o(e,n,null),g(t,s,a),g(t,r,a),o(f,r,null),v(r,i),o(h,r,null),y=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),f.$set(a);const $={};2&n&&($.$$scope={dirty:n,ctx:t}),h.$set($)},i(t){y||(c(e.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),y=!0)},o(t){p(e.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),y=!1},d(t){t&&u(n),l(e),t&&u(s),t&&u(r),l(f),l(h)}}}function ht(t){let n;return{c(){n=i("Class Properties")},l(t){n=h(t,"Class Properties")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function xt(t){let n,e,s,a,$,o,r;return{c(){n=i("All "),e=x("code"),s=i("<Dropdown>"),a=i(" components use the "),$=x("code"),o=i(".dropdown"),r=i(" class.")},l(t){n=h(t,"All "),e=w(t,"CODE",{});var c=k(e);s=h(c,"<Dropdown>"),c.forEach(u),a=h(t," components use the "),$=w(t,"CODE",{});var p=k($);o=h(p,".dropdown"),p.forEach(u),r=h(t," class.")},m(t,c){g(t,n,c),g(t,e,c),v(e,s),g(t,a,c),g(t,$,c),v($,o),g(t,r,c)},d(t){t&&u(n),t&&u(e),t&&u(a),t&&u($),t&&u(r)}}}function wt(t){let n;return{c(){n=i("Falsy values passed to classes will be disregarded.")},l(t){n=h(t,"Falsy values passed to classes will be disregarded.")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function kt(t){let n;return{c(){n=i("Name")},l(t){n=h(t,"Name")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function yt(t){let n;return{c(){n=i("Default")},l(t){n=h(t,"Default")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function vt(t){let n;return{c(){n=i("Type")},l(t){n=h(t,"Type")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Dt(t){let n;return{c(){n=i("Description")},l(t){n=h(t,"Description")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Et(t){let n,e,s,r,f,i,h,x;return n=new R({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),s=new R({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),f=new R({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),h=new R({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(f.$$.fragment),i=m(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(f.$$.fragment,t),i=d(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(f,t,a),g(t,i,a),o(h,t,a),x=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){l(n,t),t&&u(e),l(s,t),t&&u(r),l(f,t),t&&u(i),l(h,t)}}}function bt(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=i("class")},l(t){n=w(t,"STRONG",{});var a=k(n);e=w(a,"CODE",{});var $=k(e);s=h($,"class"),$.forEach(u),a.forEach(u)},m(t,a){g(t,n,a),v(n,e),v(e,s)},d(t){t&&u(n)}}}function Tt(t){let n,e;return{c(){n=x("code"),e=i("null")},l(t){n=w(t,"CODE",{});var s=k(n);e=h(s,"null"),s.forEach(u)},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function Ct(t){let n,e;return{c(){n=x("code"),e=i("string")},l(t){n=w(t,"CODE",{});var s=k(n);e=h(s,"string"),s.forEach(u)},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function Ot(t){let n,e,s,a;return{c(){n=i("A class string to add to the underlying "),e=x("code"),s=i("<div>"),a=i(" element.")},l(t){n=h(t,"A class string to add to the underlying "),e=w(t,"CODE",{});var $=k(e);s=h($,"<div>"),$.forEach(u),a=h(t," element.")},m(t,$){g(t,n,$),g(t,e,$),v(e,s),g(t,a,$)},d(t){t&&u(n),t&&u(e),t&&u(a)}}}function jt(t){let n,e,s,r,f,i,h,x;return n=new B({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),s=new B({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),f=new B({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),h=new B({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(f.$$.fragment),i=m(),a(h.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(f.$$.fragment,t),i=d(t),$(h.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(f,t,a),g(t,i,a),o(h,t,a),x=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){x||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),x=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),x=!1},d(t){l(n,t),t&&u(e),l(s,t),t&&u(r),l(f,t),t&&u(i),l(h,t)}}}function St(t){let n,e,s,r,f,i;return e=new N({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),f=new N({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){n=x("thead"),a(e.$$.fragment),s=m(),r=x("tbody"),a(f.$$.fragment)},l(t){n=w(t,"THEAD",{});var a=k(n);$(e.$$.fragment,a),a.forEach(u),s=d(t),r=w(t,"TBODY",{});var o=k(r);$(f.$$.fragment,o),o.forEach(u)},m(t,a){g(t,n,a),o(e,n,null),g(t,s,a),g(t,r,a),o(f,r,null),i=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),f.$set(a)},i(t){i||(c(e.$$.fragment,t),c(f.$$.fragment,t),i=!0)},o(t){p(e.$$.fragment,t),p(f.$$.fragment,t),i=!1},d(t){t&&u(n),l(e),t&&u(s),t&&u(r),l(f)}}}function It(t){let n;return{c(){n=i("Slots")},l(t){n=h(t,"Slots")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function At(t){let n;return{c(){n=i("Default slot")},l(t){n=h(t,"Default slot")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Nt(t){let n;return{c(){n=i("The content of the dropdown.")},l(t){n=h(t,"The content of the dropdown.")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Rt(t){let n;return{c(){n=i("SCSS Variables")},l(t){n=h(t,"SCSS Variables")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Bt(t){let n;return{c(){n=i("Name")},l(t){n=h(t,"Name")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Ft(t){let n;return{c(){n=i("Description")},l(t){n=h(t,"Description")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Ht(t){let n;return{c(){n=i("Default")},l(t){n=h(t,"Default")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Pt(t){let n,e,s,r,f,i;return n=new R({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),s=new R({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),f=new R({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(f.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(f.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(f,t,a),i=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o)},i(t){i||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),i=!1},d(t){l(n,t),t&&u(e),l(s,t),t&&u(r),l(f,t)}}}function Gt(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=i("$background")},l(t){n=w(t,"STRONG",{});var a=k(n);e=w(a,"CODE",{});var $=k(e);s=h($,"$background"),$.forEach(u),a.forEach(u)},m(t,a){g(t,n,a),v(n,e),v(e,s)},d(t){t&&u(n)}}}function Vt(t){let n;return{c(){n=i("The background color of the dropdown content")},l(t){n=h(t,"The background color of the dropdown content")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Mt(t){let n,e;return n=new G({props:{value:"#FFFFFF",bordered:!0}}),{c(){a(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p:D,i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){p(n.$$.fragment,t),e=!1},d(t){l(n,t)}}}function Yt(t){let n,e,s,r,f,i;return n=new B({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),s=new B({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),f=new B({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(f.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(f.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(f,t,a),i=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o)},i(t){i||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),i=!1},d(t){l(n,t),t&&u(e),l(s,t),t&&u(r),l(f,t)}}}function zt(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=i("$shadow-raised")},l(t){n=w(t,"STRONG",{});var a=k(n);e=w(a,"CODE",{});var $=k(e);s=h($,"$shadow-raised"),$.forEach(u),a.forEach(u)},m(t,a){g(t,n,a),v(n,e),v(e,s)},d(t){t&&u(n)}}}function Lt(t){let n;return{c(){n=i("The shadow of the dropdown content.")},l(t){n=h(t,"The shadow of the dropdown content.")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function qt(t){let n,e;return n=new M({props:{value:sn}}),{c(){a(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p:D,i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){p(n.$$.fragment,t),e=!1},d(t){l(n,t)}}}function Ut(t){let n,e,s,r,f,i;return n=new B({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),s=new B({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),f=new B({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(f.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(f.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(f,t,a),i=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o)},i(t){i||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),i=!1},d(t){l(n,t),t&&u(e),l(s,t),t&&u(r),l(f,t)}}}function Jt(t){let n,e,s;return{c(){n=x("strong"),e=x("code"),s=i("$card-radius")},l(t){n=w(t,"STRONG",{});var a=k(n);e=w(a,"CODE",{});var $=k(e);s=h($,"$card-radius"),$.forEach(u),a.forEach(u)},m(t,a){g(t,n,a),v(n,e),v(e,s)},d(t){t&&u(n)}}}function Kt(t){let n;return{c(){n=i("The curvature radius of the dropdown content.")},l(t){n=h(t,"The curvature radius of the dropdown content.")},m(t,e){g(t,n,e)},d(t){t&&u(n)}}}function Qt(t){let n,e;return{c(){n=x("code"),e=i("1.25em")},l(t){n=w(t,"CODE",{});var s=k(n);e=h(s,"1.25em"),s.forEach(u)},m(t,s){g(t,n,s),v(n,e)},d(t){t&&u(n)}}}function Wt(t){let n,e,s,r,f,i;return n=new B({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),s=new B({props:{$$slots:{default:[Kt]},$$scope:{ctx:t}}}),f=new B({props:{$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(f.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(f.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(f,t,a),i=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o)},i(t){i||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),i=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),i=!1},d(t){l(n,t),t&&u(e),l(s,t),t&&u(r),l(f,t)}}}function Xt(t){let n,e,s,r,f,i,h,y,D,E;return e=new N({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),f=new N({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),h=new N({props:{$$slots:{default:[Ut]},$$scope:{ctx:t}}}),D=new N({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){n=x("thead"),a(e.$$.fragment),s=m(),r=x("tbody"),a(f.$$.fragment),i=m(),a(h.$$.fragment),y=m(),a(D.$$.fragment)},l(t){n=w(t,"THEAD",{});var a=k(n);$(e.$$.fragment,a),a.forEach(u),s=d(t),r=w(t,"TBODY",{});var o=k(r);$(f.$$.fragment,o),i=d(o),$(h.$$.fragment,o),y=d(o),$(D.$$.fragment,o),o.forEach(u)},m(t,a){g(t,n,a),o(e,n,null),g(t,s,a),g(t,r,a),o(f,r,null),v(r,i),o(h,r,null),v(r,y),o(D,r,null),E=!0},p(t,n){const s={};2&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};2&n&&(a.$$scope={dirty:n,ctx:t}),f.$set(a);const $={};2&n&&($.$$scope={dirty:n,ctx:t}),h.$set($);const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),D.$set(o)},i(t){E||(c(e.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),c(D.$$.fragment,t),E=!0)},o(t){p(e.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),p(D.$$.fragment,t),E=!1},d(t){t&&u(n),l(e),t&&u(s),t&&u(r),l(f),l(h),l(D)}}}function Zt(t){let n,e,s,r,f,i,h,x,w,k,y,v,D,E,b,T,C,O,j,N,R,B,G,M,L,q,U,J,K,Q,nt,et;return n=new S({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),s=new I({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),f=new V({props:{components:en}}),h=new P({props:{$$slots:{default:[Z],source:[X],showcase:[W]},$$scope:{ctx:t}}}),w=new H({props:{id:"properties",$$slots:{default:[_]},$$scope:{ctx:t}}}),y=new F({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}}),D=new A({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),b=new F({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),C=new I({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),j=new I({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),R=new A({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),G=new H({props:{id:"slots",$$slots:{default:[It]},$$scope:{ctx:t}}}),L=new F({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),U=new I({props:{$$slots:{default:[Nt]},$$scope:{ctx:t}}}),K=new H({props:{id:"scss-variables",$$slots:{default:[Rt]},$$scope:{ctx:t}}}),nt=new A({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),r=m(),a(f.$$.fragment),i=m(),a(h.$$.fragment),x=m(),a(w.$$.fragment),k=m(),a(y.$$.fragment),v=m(),a(D.$$.fragment),E=m(),a(b.$$.fragment),T=m(),a(C.$$.fragment),O=m(),a(j.$$.fragment),N=m(),a(R.$$.fragment),B=m(),a(G.$$.fragment),M=m(),a(L.$$.fragment),q=m(),a(U.$$.fragment),J=m(),a(K.$$.fragment),Q=m(),a(nt.$$.fragment)},l(t){$(n.$$.fragment,t),e=d(t),$(s.$$.fragment,t),r=d(t),$(f.$$.fragment,t),i=d(t),$(h.$$.fragment,t),x=d(t),$(w.$$.fragment,t),k=d(t),$(y.$$.fragment,t),v=d(t),$(D.$$.fragment,t),E=d(t),$(b.$$.fragment,t),T=d(t),$(C.$$.fragment,t),O=d(t),$(j.$$.fragment,t),N=d(t),$(R.$$.fragment,t),B=d(t),$(G.$$.fragment,t),M=d(t),$(L.$$.fragment,t),q=d(t),$(U.$$.fragment,t),J=d(t),$(K.$$.fragment,t),Q=d(t),$(nt.$$.fragment,t)},m(t,a){o(n,t,a),g(t,e,a),o(s,t,a),g(t,r,a),o(f,t,a),g(t,i,a),o(h,t,a),g(t,x,a),o(w,t,a),g(t,k,a),o(y,t,a),g(t,v,a),o(D,t,a),g(t,E,a),o(b,t,a),g(t,T,a),o(C,t,a),g(t,O,a),o(j,t,a),g(t,N,a),o(R,t,a),g(t,B,a),o(G,t,a),g(t,M,a),o(L,t,a),g(t,q,a),o(U,t,a),g(t,J,a),o(K,t,a),g(t,Q,a),o(nt,t,a),et=!0},p(t,e){const a={};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const $={};2&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),w.$set(r);const c={};2&e&&(c.$$scope={dirty:e,ctx:t}),y.$set(c);const p={};2&e&&(p.$$scope={dirty:e,ctx:t}),D.$set(p);const l={};2&e&&(l.$$scope={dirty:e,ctx:t}),b.$set(l);const f={};2&e&&(f.$$scope={dirty:e,ctx:t}),C.$set(f);const m={};2&e&&(m.$$scope={dirty:e,ctx:t}),j.$set(m);const d={};2&e&&(d.$$scope={dirty:e,ctx:t}),R.$set(d);const g={};2&e&&(g.$$scope={dirty:e,ctx:t}),G.$set(g);const u={};2&e&&(u.$$scope={dirty:e,ctx:t}),L.$set(u);const i={};2&e&&(i.$$scope={dirty:e,ctx:t}),U.$set(i);const x={};2&e&&(x.$$scope={dirty:e,ctx:t}),K.$set(x);const k={};2&e&&(k.$$scope={dirty:e,ctx:t}),nt.$set(k)},i(t){et||(c(n.$$.fragment,t),c(s.$$.fragment,t),c(f.$$.fragment,t),c(h.$$.fragment,t),c(w.$$.fragment,t),c(y.$$.fragment,t),c(D.$$.fragment,t),c(b.$$.fragment,t),c(C.$$.fragment,t),c(j.$$.fragment,t),c(R.$$.fragment,t),c(G.$$.fragment,t),c(L.$$.fragment,t),c(U.$$.fragment,t),c(K.$$.fragment,t),c(nt.$$.fragment,t),et=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(h.$$.fragment,t),p(w.$$.fragment,t),p(y.$$.fragment,t),p(D.$$.fragment,t),p(b.$$.fragment,t),p(C.$$.fragment,t),p(j.$$.fragment,t),p(R.$$.fragment,t),p(G.$$.fragment,t),p(L.$$.fragment,t),p(U.$$.fragment,t),p(K.$$.fragment,t),p(nt.$$.fragment,t),et=!1},d(t){l(n,t),t&&u(e),l(s,t),t&&u(r),l(f,t),t&&u(i),l(h,t),t&&u(x),l(w,t),t&&u(k),l(y,t),t&&u(v),l(D,t),t&&u(E),l(b,t),t&&u(T),l(C,t),t&&u(O),l(j,t),t&&u(N),l(R,t),t&&u(B),l(G,t),t&&u(M),l(L,t),t&&u(q),l(U,t),t&&u(J),l(K,t),t&&u(Q),l(nt,t)}}}function _t(t){let n,e;const m=[tn];let d={$$slots:{default:[Zt]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)d=s(d,m[t]);return n=new j({props:d}),{c(){a(n.$$.fragment)},l(t){$(n.$$.fragment,t)},m(t,s){o(n,t,s),e=!0},p(t,[e]){const s=0&e?r(m,[f(tn)]):{};2&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(c(n.$$.fragment,t),e=!0)},o(t){p(n.$$.fragment,t),e=!1},d(t){l(n,t)}}}const tn={name:"Dropdown",relatedComponents:[{name:"DropdownShell",link:"./docs/components/dropdown-shell"}],shadowRaised:"0 2px 4px -1px rgba(0, 0, 0, .2), 0 3px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);"},{name:nn,relatedComponents:en,shadowRaised:sn}=tn;export default class extends t{constructor(t){super(),n(this,t,null,_t,e,{})}}export{tn as metadata};
