import{S as t,i as n,s as e,E as s,j as a,k as o,m as $,I as c,t as r,o as p,p as l,U as f,q as m,u as i,f as u,d as g,r as d,v as x,h,c as k,b as y,e as w,g as v,n as E,L as D,w as b,x as O,a1 as A,O as C}from"./client.debb95b0.js";import{B as j}from"./button.53dc1e9d.js";import"./classes.325c8763.js";import"./pagination.6bdeda35.js";import"./card.23bb1e4d.js";import{A as T,a as P}from"./accordion-section.9c3bc18e.js";import"./label.2e72a0ff.js";import"./copyable-code.6598f196.js";import{C as S}from"./ChevronDownIcon.350eec28.js";import{L as N,H as B,P as H}from"./layout.98399e55.js";import{M as F}from"./mark.697669b2.js";import{T as I,a as R,b as G,c as L}from"./table.962e1d27.js";import{H as V}from"./h3.3f223557.js";import{H as Y}from"./h2.8b5449f6.js";import{S as z}from"./showcase.6e8a179e.js";import{R as M}from"./related-components.b6f26832.js";function q(t,n,e){const s=t.slice();return s[1]=n[e],s}function U(t){let n;return{c(){n=d("Accordion")},l(t){n=x(t,"Accordion")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function J(t){let n;return{c(){n=d("A controller for multiple collapsible elements, allowing either one open panel at a time or infinite.")},l(t){n=x(t,"A controller for multiple collapsible elements, allowing either one open panel at a time or infinite.")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function K(t){let n,e,s,c,f;return c=new S({props:{size:"20",class:"ml accordion-chevron"}}),{c(){n=d("open panel "),e=d(t[1]),s=m(),a(c.$$.fragment)},l(a){n=x(a,"open panel "),e=x(a,t[1]),s=i(a),o(c.$$.fragment,a)},m(t,a){u(t,n,a),u(t,e,a),u(t,s,a),$(c,t,a),f=!0},p:E,i(t){f||(r(c.$$.fragment,t),f=!0)},o(t){p(c.$$.fragment,t),f=!1},d(t){t&&g(n),t&&g(e),t&&g(s),l(c,t)}}}function Q(t){let n,e,s;return e=new j({props:{$$slots:{default:[K]},$$scope:{ctx:t}}}),e.$on("click",(function(){C(t[4])&&t[4].apply(this,arguments)})),{c(){n=h("div"),a(e.$$.fragment),this.h()},l(t){n=k(t,"DIV",{slot:!0});var s=y(n);o(e.$$.fragment,s),s.forEach(g),this.h()},h(){w(n,"slot","handle")},m(t,a){u(t,n,a),$(e,n,null),s=!0},p(n,s){t=n;const a={};32&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){s||(r(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){t&&g(n),l(e)}}}function W(t){let n,e,s;return{c(){n=d("\n          Content of panel "),e=d(t[1]),s=m()},l(a){n=x(a,"\n          Content of panel "),e=x(a,t[1]),s=i(a)},m(t,a){u(t,n,a),u(t,e,a),u(t,s,a)},p:E,i:E,o:E,d(t){t&&g(n),t&&g(e),t&&g(s)}}}function X(t){let n,e;return n=new P({props:{$$slots:{default:[W,({toggle:t})=>({4:t}),({toggle:t})=>t?16:0],handle:[Q,({toggle:t})=>({4:t}),({toggle:t})=>t?16:0]},$$scope:{ctx:t}}}),n.$on("panel-open",(function(){C(t[0])&&t[0].apply(this,arguments)})),{c(){a(n.$$.fragment)},l(t){o(n.$$.fragment,t)},m(t,s){$(n,t,s),e=!0},p(e,s){t=e;const a={};48&s&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){e||(r(n.$$.fragment,t),e=!0)},o(t){p(n.$$.fragment,t),e=!1},d(t){l(n,t)}}}function Z(t){let n,e,s=[0,1,2,3,4],a=[];for(let n=0;n<5;n+=1)a[n]=X(q(t,s,n));const o=t=>p(a[t],1,1,(()=>{a[t]=null}));return{c(){for(let t=0;t<5;t+=1)a[t].c();n=D()},l(t){for(let n=0;n<5;n+=1)a[n].l(t);n=D()},m(t,s){for(let n=0;n<5;n+=1)a[n].m(t,s);u(t,n,s),e=!0},p(t,e){if(17&e){let $;for(s=[0,1,2,3,4],$=0;$<5;$+=1){const o=q(t,s,$);a[$]?(a[$].p(o,e),r(a[$],1)):(a[$]=X(o),a[$].c(),r(a[$],1),a[$].m(n.parentNode,n))}for(b(),$=5;$<5;$+=1)o($);O()}},i(t){if(!e){for(let t=0;t<5;t+=1)r(a[t]);e=!0}},o(t){a=a.filter(Boolean);for(let t=0;t<5;t+=1)p(a[t]);e=!1},d(t){A(a,t),t&&g(n)}}}function _(t){let n,e,s;return e=new T({props:{$$slots:{default:[Z,({closeOtherPanels:t})=>({0:t}),({closeOtherPanels:t})=>t?1:0]},$$scope:{ctx:t}}}),{c(){n=h("div"),a(e.$$.fragment),this.h()},l(t){n=k(t,"DIV",{slot:!0,class:!0});var s=y(n);o(e.$$.fragment,s),s.forEach(g),this.h()},h(){w(n,"slot","showcase"),w(n,"class","svelte-8ojrkt")},m(t,a){u(t,n,a),$(e,n,null),s=!0},p(t,n){const s={};33&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){s||(r(e.$$.fragment,t),s=!0)},o(t){p(e.$$.fragment,t),s=!1},d(t){t&&g(n),l(e)}}}function tt(t){let n,e;return{c(){n=h("div"),e=h("pre"),this.h()},l(t){n=k(t,"DIV",{slot:!0});var s=y(n);e=k(s,"PRE",{class:!0}),y(e).forEach(g),s.forEach(g),this.h()},h(){w(e,"class","language-svelte"),w(n,"slot","source")},m(t,s){u(t,n,s),v(n,e),e.innerHTML='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span> <span class="token attr-name"><span class="token namespace">let:</span>closeOtherPanels</span><span class="token punctuation">></span></span>\n  <span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript"><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span> </span><span class="token keyword">as</span> <span class="token language-javascript">idx<span class="token punctuation">&#125;</span></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionSection</span> <span class="token attr-name"><span class="token namespace">on:</span>panel-open=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>closeOtherPanels<span class="token punctuation">&#125;</span></span> <span class="token attr-name"><span class="token namespace">let:</span>toggle</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>handle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>toggle<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>\n          open panel <span class="token language-javascript"><span class="token punctuation">&#123;</span>idx<span class="token punctuation">&#125;</span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChevronDownIcon</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ml accordion-chevron<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      Content of panel <span class="token language-javascript"><span class="token punctuation">&#123;</span>idx<span class="token punctuation">&#125;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionSection</span><span class="token punctuation">></span></span>\n  <span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span></code>'},p:E,d(t){t&&g(n)}}}function nt(t){let n;return{c(){n=m()},l(t){n=i(t)},m(t,e){u(t,n,e)},p:E,i:E,o:E,d(t){t&&g(n)}}}function et(t){let n;return{c(){n=d("Properties")},l(t){n=x(t,"Properties")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function st(t){let n;return{c(){n=d("Functional Properties")},l(t){n=x(t,"Functional Properties")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function at(t){let n;return{c(){n=d("Name")},l(t){n=x(t,"Name")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function ot(t){let n;return{c(){n=d("Default")},l(t){n=x(t,"Default")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function $t(t){let n;return{c(){n=d("Type")},l(t){n=x(t,"Type")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function ct(t){let n;return{c(){n=d("Description")},l(t){n=x(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function rt(t){let n,e,s,c,f,d,x,h;return n=new G({props:{$$slots:{default:[at]},$$scope:{ctx:t}}}),s=new G({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),f=new G({props:{$$slots:{default:[$t]},$$scope:{ctx:t}}}),x=new G({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment),d=m(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t),d=i(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),u(t,d,a),$(x,t,a),h=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),f.$set($);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),r(x.$$.fragment,t),h=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(x.$$.fragment,t),h=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t),t&&g(d),l(x,t)}}}function pt(t){let n,e,s;return{c(){n=h("strong"),e=h("code"),s=d("multiple")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var o=y(e);s=x(o,"multiple"),o.forEach(g),a.forEach(g)},m(t,a){u(t,n,a),v(n,e),v(e,s)},d(t){t&&g(n)}}}function lt(t){let n,e;return{c(){n=h("code"),e=d("false")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"false"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function ft(t){let n,e;return{c(){n=h("code"),e=d("boolean")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"boolean"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function mt(t){let n,e,s,a;return{c(){n=d("Setting this to "),e=h("code"),s=d("true"),a=d(" allows multiple panels to be open at the same time.")},l(t){n=x(t,"Setting this to "),e=k(t,"CODE",{});var o=y(e);s=x(o,"true"),o.forEach(g),a=x(t," allows multiple panels to be open at the same time.")},m(t,o){u(t,n,o),u(t,e,o),v(e,s),u(t,a,o)},d(t){t&&g(n),t&&g(e),t&&g(a)}}}function it(t){let n,e,s,c,f,d,x,h;return n=new L({props:{$$slots:{default:[pt]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),f=new L({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}}),x=new L({props:{$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment),d=m(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t),d=i(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),u(t,d,a),$(x,t,a),h=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),f.$set($);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),r(x.$$.fragment,t),h=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(x.$$.fragment,t),h=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t),t&&g(d),l(x,t)}}}function ut(t){let n,e,s;return{c(){n=h("strong"),e=h("code"),s=d("...")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var o=y(e);s=x(o,"..."),o.forEach(g),a.forEach(g)},m(t,a){u(t,n,a),v(n,e),v(e,s)},d(t){t&&g(n)}}}function gt(t){let n,e;return{c(){n=h("code"),e=d("any")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"any"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function dt(t){let n,e,s,a;return{c(){n=d("Everything else will be passed to the underlying "),e=h("code"),s=d("<ul>"),a=d(" element.")},l(t){n=x(t,"Everything else will be passed to the underlying "),e=k(t,"CODE",{});var o=y(e);s=x(o,"<ul>"),o.forEach(g),a=x(t," element.")},m(t,o){u(t,n,o),u(t,e,o),v(e,s),u(t,a,o)},d(t){t&&g(n),t&&g(e),t&&g(a)}}}function xt(t){let n,e,s,c,f,d,x,h;return n=new L({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),s=new L({}),f=new L({props:{$$slots:{default:[gt]},$$scope:{ctx:t}}}),x=new L({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment),d=m(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t),d=i(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),u(t,d,a),$(x,t,a),h=!0},p(t,e){const s={};32&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s);const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),f.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),x.$set(o)},i(t){h||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),r(x.$$.fragment,t),h=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(x.$$.fragment,t),h=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t),t&&g(d),l(x,t)}}}function ht(t){let n,e,s,c,f,d,x,w;return e=new R({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),f=new R({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),x=new R({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){n=h("thead"),a(e.$$.fragment),s=m(),c=h("tbody"),a(f.$$.fragment),d=m(),a(x.$$.fragment)},l(t){n=k(t,"THEAD",{});var a=y(n);o(e.$$.fragment,a),a.forEach(g),s=i(t),c=k(t,"TBODY",{});var $=y(c);o(f.$$.fragment,$),d=i($),o(x.$$.fragment,$),$.forEach(g)},m(t,a){u(t,n,a),$(e,n,null),u(t,s,a),u(t,c,a),$(f,c,null),v(c,d),$(x,c,null),w=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),f.$set(a);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),x.$set(o)},i(t){w||(r(e.$$.fragment,t),r(f.$$.fragment,t),r(x.$$.fragment,t),w=!0)},o(t){p(e.$$.fragment,t),p(f.$$.fragment,t),p(x.$$.fragment,t),w=!1},d(t){t&&g(n),l(e),t&&g(s),t&&g(c),l(f),l(x)}}}function kt(t){let n;return{c(){n=d("Class Properties")},l(t){n=x(t,"Class Properties")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function yt(t){let n,e,s,a,o,$,c;return{c(){n=d("All "),e=h("code"),s=d("<Accordion>"),a=d(" components use the "),o=h("code"),$=d(".accordion"),c=d(" class.")},l(t){n=x(t,"All "),e=k(t,"CODE",{});var r=y(e);s=x(r,"<Accordion>"),r.forEach(g),a=x(t," components use the "),o=k(t,"CODE",{});var p=y(o);$=x(p,".accordion"),p.forEach(g),c=x(t," class.")},m(t,r){u(t,n,r),u(t,e,r),v(e,s),u(t,a,r),u(t,o,r),v(o,$),u(t,c,r)},d(t){t&&g(n),t&&g(e),t&&g(a),t&&g(o),t&&g(c)}}}function wt(t){let n;return{c(){n=d("Falsy values passed to classes will be disregarded.")},l(t){n=x(t,"Falsy values passed to classes will be disregarded.")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function vt(t){let n;return{c(){n=d("Name")},l(t){n=x(t,"Name")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Et(t){let n;return{c(){n=d("Default")},l(t){n=x(t,"Default")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Dt(t){let n;return{c(){n=d("Type")},l(t){n=x(t,"Type")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function bt(t){let n;return{c(){n=d("Description")},l(t){n=x(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Ot(t){let n,e,s,c,f,d,x,h;return n=new G({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),s=new G({props:{$$slots:{default:[Et]},$$scope:{ctx:t}}}),f=new G({props:{$$slots:{default:[Dt]},$$scope:{ctx:t}}}),x=new G({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment),d=m(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t),d=i(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),u(t,d,a),$(x,t,a),h=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),f.$set($);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),r(x.$$.fragment,t),h=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(x.$$.fragment,t),h=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t),t&&g(d),l(x,t)}}}function At(t){let n,e,s;return{c(){n=h("strong"),e=h("code"),s=d("class")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var o=y(e);s=x(o,"class"),o.forEach(g),a.forEach(g)},m(t,a){u(t,n,a),v(n,e),v(e,s)},d(t){t&&g(n)}}}function Ct(t){let n,e;return{c(){n=h("code"),e=d("null")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"null"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function jt(t){let n,e;return{c(){n=h("code"),e=d("string")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"string"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function Tt(t){let n;return{c(){n=d("A class string to add to the component.")},l(t){n=x(t,"A class string to add to the component.")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Pt(t){let n,e,s,c,f,d,x,h;return n=new L({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),f=new L({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),x=new L({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment),d=m(),a(x.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t),d=i(t),o(x.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),u(t,d,a),$(x,t,a),h=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),f.$set($);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c)},i(t){h||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),r(x.$$.fragment,t),h=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(x.$$.fragment,t),h=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t),t&&g(d),l(x,t)}}}function St(t){let n,e,s,c,f,d;return e=new R({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),f=new R({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){n=h("thead"),a(e.$$.fragment),s=m(),c=h("tbody"),a(f.$$.fragment)},l(t){n=k(t,"THEAD",{});var a=y(n);o(e.$$.fragment,a),a.forEach(g),s=i(t),c=k(t,"TBODY",{});var $=y(c);o(f.$$.fragment,$),$.forEach(g)},m(t,a){u(t,n,a),$(e,n,null),u(t,s,a),u(t,c,a),$(f,c,null),d=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),f.$set(a)},i(t){d||(r(e.$$.fragment,t),r(f.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){t&&g(n),l(e),t&&g(s),t&&g(c),l(f)}}}function Nt(t){let n;return{c(){n=d("Slots")},l(t){n=x(t,"Slots")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Bt(t){let n;return{c(){n=d("Default slot")},l(t){n=x(t,"Default slot")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Ht(t){let n,e;return{c(){n=h("code"),e=d("AccordionSection")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"AccordionSection"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function Ft(t){let n,e,s,c,f;return s=new F({props:{$$slots:{default:[Ht]},$$scope:{ctx:t}}}),{c(){n=d("The content of the Accordion. Pass one or more "),e=h("a"),a(s.$$.fragment),c=d(" components or something miscellaneous."),this.h()},l(t){n=x(t,"The content of the Accordion. Pass one or more "),e=k(t,"A",{href:!0});var a=y(e);o(s.$$.fragment,a),a.forEach(g),c=x(t," components or something miscellaneous."),this.h()},h(){w(e,"href","./docs/components/accordion-section")},m(t,a){u(t,n,a),u(t,e,a),$(s,e,null),u(t,c,a),f=!0},p(t,n){const e={};32&n&&(e.$$scope={dirty:n,ctx:t}),s.$set(e)},i(t){f||(r(s.$$.fragment,t),f=!0)},o(t){p(s.$$.fragment,t),f=!1},d(t){t&&g(n),t&&g(e),l(s),t&&g(c)}}}function It(t){let n;return{c(){n=d("Prop Name")},l(t){n=x(t,"Prop Name")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Rt(t){let n;return{c(){n=d("Type")},l(t){n=x(t,"Type")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Gt(t){let n;return{c(){n=d("Description")},l(t){n=x(t,"Description")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Lt(t){let n,e,s,c,f,d;return n=new G({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),s=new G({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),f=new G({props:{$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),d=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),f.$set($)},i(t){d||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),d=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t)}}}function Vt(t){let n,e,s;return{c(){n=h("strong"),e=h("code"),s=d("closeOtherPanels")},l(t){n=k(t,"STRONG",{});var a=y(n);e=k(a,"CODE",{});var o=y(e);s=x(o,"closeOtherPanels"),o.forEach(g),a.forEach(g)},m(t,a){u(t,n,a),v(n,e),v(e,s)},d(t){t&&g(n)}}}function Yt(t){let n,e;return{c(){n=h("code"),e=d("Function")},l(t){n=k(t,"CODE",{});var s=y(n);e=x(s,"Function"),s.forEach(g)},m(t,s){u(t,n,s),v(n,e)},d(t){t&&g(n)}}}function zt(t){let n;return{c(){n=d("A callback to force-close all panels except for the calling one.")},l(t){n=x(t,"A callback to force-close all panels except for the calling one.")},m(t,e){u(t,n,e)},d(t){t&&g(n)}}}function Mt(t){let n,e,s,c,f,d;return n=new L({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),s=new L({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),f=new L({props:{$$slots:{default:[zt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),d=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),f.$set($)},i(t){d||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),d=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t)}}}function qt(t){let n,e,s,c,f,d;return e=new R({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),f=new R({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){n=h("thead"),a(e.$$.fragment),s=m(),c=h("tbody"),a(f.$$.fragment)},l(t){n=k(t,"THEAD",{});var a=y(n);o(e.$$.fragment,a),a.forEach(g),s=i(t),c=k(t,"TBODY",{});var $=y(c);o(f.$$.fragment,$),$.forEach(g)},m(t,a){u(t,n,a),$(e,n,null),u(t,s,a),u(t,c,a),$(f,c,null),d=!0},p(t,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:t}),f.$set(a)},i(t){d||(r(e.$$.fragment,t),r(f.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(f.$$.fragment,t),d=!1},d(t){t&&g(n),l(e),t&&g(s),t&&g(c),l(f)}}}function Ut(t){let n,e,s,c,f,d,x,h,k,y,w,v,E,D,b,O,A,C,j,T,P,S,N,F,R,G,L,q,K,Q;return n=new B({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),s=new H({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),f=new M({props:{components:Wt}}),x=new z({props:{$$slots:{default:[nt],source:[tt],showcase:[_]},$$scope:{ctx:t}}}),k=new Y({props:{id:"properties",$$slots:{default:[et]},$$scope:{ctx:t}}}),w=new V({props:{$$slots:{default:[st]},$$scope:{ctx:t}}}),E=new I({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),b=new V({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),A=new H({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),j=new H({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),P=new I({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),N=new Y({props:{id:"slots",$$slots:{default:[Nt]},$$scope:{ctx:t}}}),R=new V({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),L=new H({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),K=new I({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){a(n.$$.fragment),e=m(),a(s.$$.fragment),c=m(),a(f.$$.fragment),d=m(),a(x.$$.fragment),h=m(),a(k.$$.fragment),y=m(),a(w.$$.fragment),v=m(),a(E.$$.fragment),D=m(),a(b.$$.fragment),O=m(),a(A.$$.fragment),C=m(),a(j.$$.fragment),T=m(),a(P.$$.fragment),S=m(),a(N.$$.fragment),F=m(),a(R.$$.fragment),G=m(),a(L.$$.fragment),q=m(),a(K.$$.fragment)},l(t){o(n.$$.fragment,t),e=i(t),o(s.$$.fragment,t),c=i(t),o(f.$$.fragment,t),d=i(t),o(x.$$.fragment,t),h=i(t),o(k.$$.fragment,t),y=i(t),o(w.$$.fragment,t),v=i(t),o(E.$$.fragment,t),D=i(t),o(b.$$.fragment,t),O=i(t),o(A.$$.fragment,t),C=i(t),o(j.$$.fragment,t),T=i(t),o(P.$$.fragment,t),S=i(t),o(N.$$.fragment,t),F=i(t),o(R.$$.fragment,t),G=i(t),o(L.$$.fragment,t),q=i(t),o(K.$$.fragment,t)},m(t,a){$(n,t,a),u(t,e,a),$(s,t,a),u(t,c,a),$(f,t,a),u(t,d,a),$(x,t,a),u(t,h,a),$(k,t,a),u(t,y,a),$(w,t,a),u(t,v,a),$(E,t,a),u(t,D,a),$(b,t,a),u(t,O,a),$(A,t,a),u(t,C,a),$(j,t,a),u(t,T,a),$(P,t,a),u(t,S,a),$(N,t,a),u(t,F,a),$(R,t,a),u(t,G,a),$(L,t,a),u(t,q,a),$(K,t,a),Q=!0},p(t,e){const a={};32&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};32&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o);const $={};32&e&&($.$$scope={dirty:e,ctx:t}),x.$set($);const c={};32&e&&(c.$$scope={dirty:e,ctx:t}),k.$set(c);const r={};32&e&&(r.$$scope={dirty:e,ctx:t}),w.$set(r);const p={};32&e&&(p.$$scope={dirty:e,ctx:t}),E.$set(p);const l={};32&e&&(l.$$scope={dirty:e,ctx:t}),b.$set(l);const f={};32&e&&(f.$$scope={dirty:e,ctx:t}),A.$set(f);const m={};32&e&&(m.$$scope={dirty:e,ctx:t}),j.$set(m);const i={};32&e&&(i.$$scope={dirty:e,ctx:t}),P.$set(i);const u={};32&e&&(u.$$scope={dirty:e,ctx:t}),N.$set(u);const g={};32&e&&(g.$$scope={dirty:e,ctx:t}),R.$set(g);const d={};32&e&&(d.$$scope={dirty:e,ctx:t}),L.$set(d);const h={};32&e&&(h.$$scope={dirty:e,ctx:t}),K.$set(h)},i(t){Q||(r(n.$$.fragment,t),r(s.$$.fragment,t),r(f.$$.fragment,t),r(x.$$.fragment,t),r(k.$$.fragment,t),r(w.$$.fragment,t),r(E.$$.fragment,t),r(b.$$.fragment,t),r(A.$$.fragment,t),r(j.$$.fragment,t),r(P.$$.fragment,t),r(N.$$.fragment,t),r(R.$$.fragment,t),r(L.$$.fragment,t),r(K.$$.fragment,t),Q=!0)},o(t){p(n.$$.fragment,t),p(s.$$.fragment,t),p(f.$$.fragment,t),p(x.$$.fragment,t),p(k.$$.fragment,t),p(w.$$.fragment,t),p(E.$$.fragment,t),p(b.$$.fragment,t),p(A.$$.fragment,t),p(j.$$.fragment,t),p(P.$$.fragment,t),p(N.$$.fragment,t),p(R.$$.fragment,t),p(L.$$.fragment,t),p(K.$$.fragment,t),Q=!1},d(t){l(n,t),t&&g(e),l(s,t),t&&g(c),l(f,t),t&&g(d),l(x,t),t&&g(h),l(k,t),t&&g(y),l(w,t),t&&g(v),l(E,t),t&&g(D),l(b,t),t&&g(O),l(A,t),t&&g(C),l(j,t),t&&g(T),l(P,t),t&&g(S),l(N,t),t&&g(F),l(R,t),t&&g(G),l(L,t),t&&g(q),l(K,t)}}}function Jt(t){let n,e;const m=[Kt];let i={$$slots:{default:[Ut]},$$scope:{ctx:t}};for(let t=0;t<m.length;t+=1)i=s(i,m[t]);return n=new N({props:i}),{c(){a(n.$$.fragment)},l(t){o(n.$$.fragment,t)},m(t,s){$(n,t,s),e=!0},p(t,[e]){const s=0&e?c(m,[f(Kt)]):{};32&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(r(n.$$.fragment,t),e=!0)},o(t){p(n.$$.fragment,t),e=!1},d(t){l(n,t)}}}const Kt={name:"Accordion",relatedComponents:[{name:"AccordionSection",link:"./docs/components/accordion-section"}]},{name:Qt,relatedComponents:Wt}=Kt;export default class extends t{constructor(t){super(),n(this,t,null,Jt,e,{})}}export{Kt as metadata};
