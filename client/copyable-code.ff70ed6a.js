import{S as e,i as t,s as n,a as r,c as o,b as i,d as s,e as a,f as l,g as c,n as u,D as d,h,q as f,j as p,u as v,k as m,m as w,H as g,t as y,o as x,p as $,B as b,L as k,w as C,x as E,R as D}from"./client.aa6666a1.js";import{B as z}from"./button.b7636582.js";import"./pagination.6bdeda35.js";function j(e){let t,n,d;return{c(){t=r("svg"),n=r("polyline"),this.h()},l(e){t=o(e,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var r=i(t);n=o(r,"polyline",{points:!0},1),i(n).forEach(s),r.forEach(s),this.h()},h(){a(n,"points","20 6 9 17 4 12"),a(t,"xmlns","http://www.w3.org/2000/svg"),a(t,"width",e[0]),a(t,"height",e[0]),a(t,"fill","none"),a(t,"viewBox","0 0 24 24"),a(t,"stroke","currentColor"),a(t,"stroke-width",e[1]),a(t,"stroke-linecap","round"),a(t,"stroke-linejoin","round"),a(t,"class",d="feather feather-check "+e[2])},m(e,r){l(e,t,r),c(t,n)},p(e,[n]){1&n&&a(t,"width",e[0]),1&n&&a(t,"height",e[0]),2&n&&a(t,"stroke-width",e[1]),4&n&&d!==(d="feather feather-check "+e[2])&&a(t,"class",d)},i:u,o:u,d(e){e&&s(t)}}}function W(e,t,n){let{size:r="100%"}=t,{strokeWidth:o=2}=t,{class:i=""}=t;return"100%"!==r&&(r="x"===r.slice(-1)?r.slice(0,r.length-1)+"em":parseInt(r)+"px"),e.$$set=e=>{"size"in e&&n(0,r=e.size),"strokeWidth"in e&&n(1,o=e.strokeWidth),"class"in e&&n(2,i=e.class)},[r,o,i]}class S extends e{constructor(e){super(),t(this,e,W,j,n,{size:0,strokeWidth:1,class:2})}}function T(e){let t,n,d,h;return{c(){t=r("svg"),n=r("rect"),d=r("path"),this.h()},l(e){t=o(e,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},1);var r=i(t);n=o(r,"rect",{x:!0,y:!0,width:!0,height:!0,rx:!0,ry:!0},1),i(n).forEach(s),d=o(r,"path",{d:!0},1),i(d).forEach(s),r.forEach(s),this.h()},h(){a(n,"x","9"),a(n,"y","9"),a(n,"width","13"),a(n,"height","13"),a(n,"rx","2"),a(n,"ry","2"),a(d,"d","M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"),a(t,"xmlns","http://www.w3.org/2000/svg"),a(t,"width",e[0]),a(t,"height",e[0]),a(t,"fill","none"),a(t,"viewBox","0 0 24 24"),a(t,"stroke","currentColor"),a(t,"stroke-width",e[1]),a(t,"stroke-linecap","round"),a(t,"stroke-linejoin","round"),a(t,"class",h="feather feather-copy "+e[2])},m(e,r){l(e,t,r),c(t,n),c(t,d)},p(e,[n]){1&n&&a(t,"width",e[0]),1&n&&a(t,"height",e[0]),2&n&&a(t,"stroke-width",e[1]),4&n&&h!==(h="feather feather-copy "+e[2])&&a(t,"class",h)},i:u,o:u,d(e){e&&s(t)}}}function B(e,t,n){let{size:r="100%"}=t,{strokeWidth:o=2}=t,{class:i=""}=t;return"100%"!==r&&(r="x"===r.slice(-1)?r.slice(0,r.length-1)+"em":parseInt(r)+"px"),e.$$set=e=>{"size"in e&&n(0,r=e.size),"strokeWidth"in e&&n(1,o=e.strokeWidth),"class"in e&&n(2,i=e.class)},[r,o,i]}class A extends e{constructor(e){super(),t(this,e,B,T,n,{size:0,strokeWidth:1,class:2})}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function R(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))}function I(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(function(){(console.warn||console.log).apply(console,arguments)}).bind("[clipboard-polyfill]");var L,N,H,V,q="undefined"==typeof navigator?void 0:navigator,G=null==q?void 0:q.clipboard,M=(null===(L=null==G?void 0:G.read)||void 0===L||L.bind(G),null===(N=null==G?void 0:G.readText)||void 0===N||N.bind(G),null===(H=null==G?void 0:G.write)||void 0===H||H.bind(G),null===(V=null==G?void 0:G.writeText)||void 0===V?void 0:V.bind(G)),O="undefined"==typeof window?void 0:window,P=(null==O||O.ClipboardItem,O);var F=function(){this.success=!1};function J(e,t,n){for(var r in e.success=!0,t){var o=t[r],i=n.clipboardData;i.setData(r,o),"text/plain"===r&&i.getData(r)!==o&&(e.success=!1)}n.preventDefault()}function K(e){var t=new F,n=J.bind(this,t,e);document.addEventListener("copy",n);try{document.execCommand("copy")}finally{document.removeEventListener("copy",n)}return t.success}function Q(e,t){U(e);var n=K(t);return X(),n}function U(e){var t=document.getSelection();if(t){var n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}}function X(){var e=document.getSelection();e&&e.removeAllRanges()}function Y(e){return R(this,void 0,void 0,(function(){var t;return I(this,(function(n){if(t="text/plain"in e,"undefined"==typeof ClipboardEvent&&void 0!==P.clipboardData&&void 0!==P.clipboardData.setData){if(!t)throw new Error("No `text/plain` value was specified.");if(r=e["text/plain"],P.clipboardData.setData("Text",r))return[2,!0];throw new Error("Copying failed, possibly because the user rejected it.")}var r;return K(e)||navigator.userAgent.indexOf("Edge")>-1||Q(document.body,e)||function(e){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important"),t.textContent="temporary element",document.body.appendChild(t);var n=Q(t,e);return document.body.removeChild(t),n}(e)||function(e){var t=document.createElement("div");t.setAttribute("style","-webkit-user-select: text !important");var n=t;t.attachShadow&&(n=t.attachShadow({mode:"open"}));var r=document.createElement("span");r.innerText=e,n.appendChild(r),document.body.appendChild(t),U(r);var o=document.execCommand("copy");return X(),document.body.removeChild(t),o}(e["text/plain"])?[2,!0]:[2,!1]}))}))}function Z(e){let t,n;return t=new A({props:{size:"20"}}),{c(){p(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,r){w(t,e,r),n=!0},i(e){n||(y(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function _(e){let t,n;return t=new S({props:{size:"20"}}),{c(){p(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,r){w(t,e,r),n=!0},i(e){n||(y(t.$$.fragment,e),n=!0)},o(e){x(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function ee(e){let t,n,r,o;const i=[_,Z],a=[];function c(e,t){return e[1]?0:1}return t=c(e),n=a[t]=i[t](e),{c(){n.c(),r=k()},l(e){n.l(e),r=k()},m(e,n){a[t].m(e,n),l(e,r,n),o=!0},p(e,o){let s=t;t=c(e),t!==s&&(C(),x(a[s],1,1,(()=>{a[s]=null})),E(),n=a[t],n?n.p(e,o):(n=a[t]=i[t](e),n.c()),y(n,1),n.m(r.parentNode,r))},i(e){o||(y(n),o=!0)},o(e){x(n),o=!1},d(e){a[t].d(e),e&&s(r)}}}function te(e){let t,n,r,u;const b=e[3].default,k=d(b,e,e[5],null);return r=new z({props:{small:!0,round:!0,title:"Copy",$$slots:{default:[ee]},$$scope:{ctx:e}}}),r.$on("click",e[2]),{c(){t=h("div"),k&&k.c(),n=f(),p(r.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=i(t);k&&k.l(a),n=v(a),m(r.$$.fragment,a),a.forEach(s),this.h()},h(){a(t,"class","copyable svelte-gcvs6b")},m(o,i){l(o,t,i),k&&k.m(t,null),c(t,n),w(r,t,null),e[4](t),u=!0},p(e,[t]){k&&k.p&&32&t&&g(k,b,e,e[5],t,null,null);const n={};34&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n)},i(e){u||(y(k,e),y(r.$$.fragment,e),u=!0)},o(e){x(k,e),x(r.$$.fragment,e),u=!1},d(n){n&&s(t),k&&k.d(n),$(r),e[4](null)}}}function ne(e,t,n){let r,{$$slots:o={},$$scope:i}=t,s=null,a=!1;return b((function(){s=r.children[0].textContent})),e.$$set=e=>{"$$scope"in e&&n(5,i=e.$$scope)},[r,a,async function(){if(null!=s)try{await function(e){return R(this,void 0,void 0,(function(){return I(this,(function(t){if(M)return[2,M(e)];if(!Y(function(e){var t={};return t["text/plain"]=e,t}(e)))throw new Error("writeText() failed");return[2]}))}))}(s),n(1,a=!0),setTimeout((()=>n(1,a=!1)),1e3)}catch(e){console.error(e)}},o,function(e){D[e?"unshift":"push"]((()=>{r=e,n(0,r)}))},i]}class re extends e{constructor(e){super(),t(this,e,ne,te,n,{})}}export{re as C,S as a};
