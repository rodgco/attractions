import{S as s,i as e,s as t,a,c as n,b as r,d as i,e as o,f as l,g as c,n as f,h,r as p,q as m,j as d,v as $,u,k as g,m as v,y as x,t as w,o as y,p as j,M as k}from"./client.aa6666a1.js";import{B as E}from"./button.b7636582.js";import"./pagination.6bdeda35.js";import{f as b}from"./format-file-size.ca1db56d.js";function V(s){let e,t,h,p,m;return{c(){e=a("svg"),t=a("polyline"),h=a("path"),p=a("line"),m=a("line"),this.h()},l(s){e=n(s,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0},1);var a=r(e);t=n(a,"polyline",{points:!0},1),r(t).forEach(i),h=n(a,"path",{d:!0},1),r(h).forEach(i),p=n(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),r(p).forEach(i),m=n(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0},1),r(m).forEach(i),a.forEach(i),this.h()},h(){o(t,"points","3 6 5 6 21 6"),o(h,"d","M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"),o(p,"x1","10"),o(p,"y1","11"),o(p,"x2","10"),o(p,"y2","17"),o(m,"x1","14"),o(m,"y1","11"),o(m,"x2","14"),o(m,"y2","17"),o(e,"xmlns","http://www.w3.org/2000/svg"),o(e,"width","24"),o(e,"height","24"),o(e,"viewBox","0 0 24 24"),o(e,"fill","none"),o(e,"stroke","currentColor"),o(e,"stroke-width","2"),o(e,"stroke-linecap","round"),o(e,"stroke-linejoin","round")},m(s,a){l(s,e,a),c(e,t),c(e,h),c(e,p),c(e,m)},p:f,i:f,o:f,d(s){s&&i(e)}}}class z extends s{constructor(s){super(),e(this,s,null,V,t,{})}}function B(s){const e=s.split(".");return e[e.length-1].toUpperCase()}function D(s){let e,t;return e=new z({}),{c(){d(e.$$.fragment)},l(s){g(e.$$.fragment,s)},m(s,a){v(e,s,a),t=!0},i(s){t||(w(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){j(e,s)}}}function I(s){let e,t,a,f,k,V,z,I,C,M,q,F=s[0].name+"",H=b(s[0].size)+"",S=B(s[0].name)+"";return M=new E({props:{danger:!0,round:!0,$$slots:{default:[D]},$$scope:{ctx:s}}}),M.$on("click",s[2]),{c(){e=h("div"),t=h("div"),a=p(F),f=m(),k=h("div"),V=p(H),z=p(" • "),I=p(S),C=m(),d(M.$$.fragment),this.h()},l(s){e=n(s,"DIV",{class:!0});var o=r(e);t=n(o,"DIV",{class:!0});var l=r(t);a=$(l,F),l.forEach(i),f=u(o),k=n(o,"DIV",{class:!0});var c=r(k);V=$(c,H),z=$(c," • "),I=$(c,S),c.forEach(i),C=u(o),g(M.$$.fragment,o),o.forEach(i),this.h()},h(){o(t,"class","filename svelte-42jah1"),o(k,"class","properties svelte-42jah1"),o(e,"class","file-tile svelte-42jah1")},m(s,n){l(s,e,n),c(e,t),c(t,a),c(e,f),c(e,k),c(k,V),c(k,z),c(k,I),c(e,C),v(M,e,null),q=!0},p(s,[e]){(!q||1&e)&&F!==(F=s[0].name+"")&&x(a,F),(!q||1&e)&&H!==(H=b(s[0].size)+"")&&x(V,H),(!q||1&e)&&S!==(S=B(s[0].name)+"")&&x(I,S);const t={};8&e&&(t.$$scope={dirty:e,ctx:s}),M.$set(t)},i(s){q||(w(M.$$.fragment,s),q=!0)},o(s){y(M.$$.fragment,s),q=!1},d(s){s&&i(e),j(M)}}}function C(s,e,t){let{file:a}=e;const n=k();return s.$$set=s=>{"file"in s&&t(0,a=s.file)},[a,n,()=>n("delete",a)]}class M extends s{constructor(s){super(),e(this,s,C,I,t,{file:0})}}export{M as F,B as f};
