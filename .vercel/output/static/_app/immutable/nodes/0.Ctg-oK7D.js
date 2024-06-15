import{s as V,y as G,n as I,r as X,o as J,h as Y,f as N,d as P,u as Q,g as Z,e as ee}from"../chunks/scheduler.DB38Afdh.js";import{S as q,i as B,e as v,s as D,c as k,a as L,k as $,f as H,d as T,l as i,B as C,g as S,h as _,z,m as W,n as A,o as F,p as j,q as O,r as R}from"../chunks/index.DhrjRYcY.js";const te=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{window:se}=te;function U(t){let e,s;return{c(){e=v("img"),this.h()},l(a){e=k(a,"IMG",{loading:!0,width:!0,height:!0,src:!0,alt:!0,class:!0}),this.h()},h(){i(e,"loading","lazy"),i(e,"width","18"),i(e,"height","18"),Y(e.src,s="./moon-solid.svg")||i(e,"src",s),i(e,"alt","Enable Light Mode"),i(e,"class","icon-moon svelte-xx474h")},m(a,l){S(a,e,l)},d(a){a&&T(e)}}}function K(t){let e,s;return{c(){e=v("img"),this.h()},l(a){e=k(a,"IMG",{loading:!0,width:!0,height:!0,src:!0,alt:!0,class:!0}),this.h()},h(){i(e,"loading","lazy"),i(e,"width","20"),i(e,"height","20"),Y(e.src,s="./sun-solid.svg")||i(e,"src",s),i(e,"alt","Enable Dark Mode"),i(e,"class","icon-sun svelte-xx474h")},m(a,l){S(a,e,l)},d(a){a&&T(e)}}}function ae(t){let e,s,a='<a href="/" class="font-bold">E<span class="text-sky-500">E</span></a>&lt;Dev ⁄&gt;',l,d,o,g='<h4 class="relative z-9">Connect <i class="fa-solid fa-arrow-right"></i></h4>',w,b,r,f,y,x,M,u=t[1]&&U(),h=!t[1]&&K();return{c(){e=v("header"),s=v("h1"),s.innerHTML=a,l=D(),d=v("div"),o=v("a"),o.innerHTML=g,w=D(),b=v("button"),r=v("div"),u&&u.c(),f=D(),h&&h.c(),this.h()},l(p){e=k(p,"HEADER",{class:!0});var c=L(e);s=k(c,"H1",{class:!0,"data-svelte-h":!0}),$(s)!=="svelte-1mfu89k"&&(s.innerHTML=a),l=H(c),d=k(c,"DIV",{class:!0});var n=L(d);o=k(n,"A",{href:!0,class:!0,"data-svelte-h":!0}),$(o)!=="svelte-zfgylv"&&(o.innerHTML=g),w=H(n),b=k(n,"BUTTON",{class:!0});var m=L(b);r=k(m,"DIV",{class:!0});var E=L(r);u&&u.l(E),f=H(E),h&&h.l(E),E.forEach(T),m.forEach(T),n.forEach(T),c.forEach(T),this.h()},h(){i(s,"class","font-medium text-3xl dark:text-white"),i(o,"href","/contact"),i(o,"class","relative overflow-hidden px-5 py-2 group rounded-full border border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 hover:border-sky-500"),i(r,"class","icon svelte-xx474h"),C(r,"spin-left",t[3]&&t[2]==="left"),C(r,"spin-right",t[3]&&t[2]==="right"),i(b,"class","svelte-xx474h"),i(d,"class","flex items-center space-x-4"),i(e,"class",y=G("sticky z-[10] top-0 ease-in duration-200 px-6 flex items-center justify-between backdrop-brightness-0 backdrop-invert dark:bg-black "+(t[0]>0?"py-4 bg-slate-950 border-black-950":"py-6 bg-transparent border-transparent"))+" svelte-xx474h")},m(p,c){S(p,e,c),_(e,s),_(e,l),_(e,d),_(d,o),_(d,w),_(d,b),_(b,r),u&&u.m(r,null),_(r,f),h&&h.m(r,null),x||(M=[z(se,"keydown",t[4]),z(b,"click",t[5])],x=!0)},p(p,[c]){p[1]?u||(u=U(),u.c(),u.m(r,f)):u&&(u.d(1),u=null),p[1]?h&&(h.d(1),h=null):h||(h=K(),h.c(),h.m(r,null)),c&12&&C(r,"spin-left",p[3]&&p[2]==="left"),c&12&&C(r,"spin-right",p[3]&&p[2]==="right"),c&1&&y!==(y=G("sticky z-[10] top-0 ease-in duration-200 px-6 flex items-center justify-between backdrop-brightness-0 backdrop-invert dark:bg-black "+(p[0]>0?"py-4 bg-slate-950 border-black-950":"py-6 bg-transparent border-transparent"))+" svelte-xx474h")&&i(e,"class",y)},i:I,o:I,d(p){p&&T(e),u&&u.d(),h&&h.d(),x=!1,X(M)}}}function le(){const t=window.sessionStorage.getItem("darkMode");return t?t==="true":window.matchMedia("(prefers-color-scheme: dark)").matches}function re(t,e,s){function a(f){f.key==="Escape"&&s(1,g=!g)}function l(f){s(3,w=!0),setTimeout(()=>s(3,w=!1),f)}function d(f=!1){const y=window.sessionStorage.getItem("darkMode");y&&f===(y==="true")||(f?(s(2,o="left"),document.body.classList.remove("light"),document.body.classList.add("dark")):(s(2,o="right"),document.body.classList.remove("dark"),document.body.classList.add("light")),l(650),sessionStorage.setItem("darkMode",g.toString()))}J(()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",f=>{s(1,g=f.matches)})});let o="right",g=le(),w=!1,{y:b=0}=e;const r=()=>s(1,g=!g);return t.$$set=f=>{"y"in f&&s(0,b=f.y)},t.$$.update=()=>{t.$$.dirty&2&&d(g)},[b,g,o,w,a,r]}class ne extends q{constructor(e){super(),B(this,e,re,ae,V,{y:0})}}function ie(t){let e,s=`<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"><div class="sm:flex sm:items-center sm:justify-between"><h1 class="font-medium text-3xl"><b class="font-bold">E<span class="text-sky-500">E</span></b>&lt;Dev ⁄&gt;</h1> <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"><li><a href="https://www.linkedin.com/in/jwxfree/" class="me-4 md:me-6" target="_blank">LinkedIn
                        <i class="fa-brands fa-linkedin"></i></a></li> <li><a href="https://github.com/jwxfree" class="me-4 md:me-6" target="_blank">Github
                        <i class="fa-brands fa-github"></i></a></li> <li><a href="https://www.instagram.com/hi_jeilron/" class="me-4 md:me-6" target="_blank">Instagram
                        <i class="fa-brands fa-instagram"></i></a></li></ul></div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/> <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">2024 <a href="https://flowbite.com/" class="hover:underline">EEDev</a>. Made with Svelte+TailwindCSS.</span></div>`;return{c(){e=v("footer"),e.innerHTML=s,this.h()},l(a){e=k(a,"FOOTER",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-k38yo1"&&(e.innerHTML=s),this.h()},h(){i(e,"class","dark:bg-black dark:text-white m-4")},m(a,l){S(a,e,l)},p:I,i:I,o:I,d(a){a&&T(e)}}}class oe extends q{constructor(e){super(),B(this,e,null,ie,V,{})}}function ce(t){let e=!1,s=()=>{e=!1},a,l,d,o,g='<i class="fa-solid fa-arrow-up grid place-teims-center aspect-square"></i>',w,b,r,f,y,x,M,u,h;N(t[5]),N(t[6]),r=new ne({});const p=t[4].default,c=P(p,t,t[3],null);return x=new oe({}),{c(){l=v("div"),d=v("div"),o=v("button"),o.innerHTML=g,b=D(),W(r.$$.fragment),f=D(),c&&c.c(),y=D(),W(x.$$.fragment),this.h()},l(n){l=k(n,"DIV",{class:!0});var m=L(l);d=k(m,"DIV",{class:!0});var E=L(d);o=k(E,"BUTTON",{class:!0,"data-svelte-h":!0}),$(o)!=="svelte-1kagvyg"&&(o.innerHTML=g),E.forEach(T),b=H(m),A(r.$$.fragment,m),f=H(m),c&&c.l(m),y=H(m),A(x.$$.fragment,m),m.forEach(T),this.h()},h(){i(o,"class","ml-auto rounded-full px-3 py-2.5 bg-white-500 text-black-400 sm:px-4 hover:bg-sky-500 hover:text-white cursor-pointer dark:bg-sky-500 dark:hover:bg-white dark:hover:text-sky-500"),i(d,"class",w="fixed bottom-0 w-full duration-200 flex py-10 px-20 z-[10]"+(t[0]>0?"opacity-full pointer-events-auto":" pointer-events-none opacity-0")),i(l,"class","relative flex flex-col mx-auto w-full text-sm sm:text-base min-h-screen dark:bg-black ")},m(n,m){S(n,l,m),_(l,d),_(d,o),_(l,b),F(r,l,null),_(l,f),c&&c.m(l,null),_(l,y),F(x,l,null),M=!0,u||(h=[z(window,"scroll",()=>{e=!0,clearTimeout(a),a=setTimeout(s,100),t[5]()}),z(window,"resize",t[6]),z(o,"click",de)],u=!0)},p(n,[m]){m&1&&!e&&(e=!0,clearTimeout(a),scrollTo(window.pageXOffset,n[0]),a=setTimeout(s,100)),(!M||m&1&&w!==(w="fixed bottom-0 w-full duration-200 flex py-10 px-20 z-[10]"+(n[0]>0?"opacity-full pointer-events-auto":" pointer-events-none opacity-0")))&&i(d,"class",w),c&&c.p&&(!M||m&8)&&Q(c,p,n,n[3],M?ee(p,n[3],m,null):Z(n[3]),null)},i(n){M||(j(r.$$.fragment,n),j(c,n),j(x.$$.fragment,n),M=!0)},o(n){O(r.$$.fragment,n),O(c,n),O(x.$$.fragment,n),M=!1},d(n){n&&T(l),R(r),c&&c.d(n),R(x),u=!1,X(h)}}}function de(){document.body.scrollIntoView({behavior:"smooth"})}function fe(t,e,s){let{$$slots:a={},$$scope:l}=e,d,o=0,g=0;function w(){s(0,d=window.pageYOffset)}function b(){s(1,o=window.innerHeight),s(2,g=window.innerWidth)}return t.$$set=r=>{"$$scope"in r&&s(3,l=r.$$scope)},[d,o,g,l,a,w,b]}class me extends q{constructor(e){super(),B(this,e,fe,ce,V,{})}}export{me as component};