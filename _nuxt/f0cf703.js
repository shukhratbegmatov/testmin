(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{394:function(e,n,r){"use strict";var t=r(10),o=r(23),l=r(15),c=r(47),f=r(24),w=r(56),h=r(137),d=r(34),v=r(70),x=r(179),k=r(244),A=r(27),J=r(48),m=A("replace"),y=TypeError,E=l("".indexOf),M=l("".replace),O=l("".slice),S=Math.max,T=function(e,n,r){return r>e.length?-1:""===n?r:E(e,n,r)};t({target:"String",proto:!0},{replaceAll:function(e,n){var r,t,l,A,j,z,B,C,D,F=c(this),G=0,H=0,I="";if(!w(e)){if((r=h(e))&&(t=d(c(x(e))),!~E(t,"g")))throw y("`.replaceAll` does not allow non-global regexes");if(l=v(e,m))return o(l,e,F,n);if(J&&r)return M(d(F),e,n)}for(A=d(F),j=d(e),(z=f(n))||(n=d(n)),B=j.length,C=S(1,B),G=T(A,j,0);-1!==G;)D=z?d(n(j,G,A)):k(j,A,G,[],void 0,n),I+=O(A,H,G)+D,H=G+B,G=T(A,j,G+C);return H<A.length&&(I+=O(A,H)),I}})},397:function(e,n,r){r(394)}}]);