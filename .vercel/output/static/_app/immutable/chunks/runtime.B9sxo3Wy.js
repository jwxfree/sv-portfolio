var kn=Array.isArray,nt=Array.from,tt=Object.isFrozen,et=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,Cn=Object.getOwnPropertyDescriptors,st=Object.prototype,ot=Array.prototype,xn=Object.getPrototypeOf;const I=2,on=4,P=8,un=16,m=32,$=64,S=128,M=256,y=512,A=1024,D=2048,x=4096,g=8192,Pn=16384,ln=32768,ut=65536,J=Symbol("$state"),lt=Symbol("$state.frozen"),it=Symbol("");function fn(n){return n===this.v}function gn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function an(n){return!gn(n,this.v)}const ft=1,at=2,ct=4,_t=8,pt=16,vt=64,dt=1,ht=2,Et=4,yt=8,Tt=1,mt=2,At="[",qn="]",wt="",Ot=`${qn}!`,St={},Ln=Symbol(),Rt=["touchstart","touchmove","touchend"];function Fn(n){throw new Error("effect_in_teardown")}function bn(){throw new Error("effect_in_unowned_derived")}function Mn(n){throw new Error("effect_orphan")}function Hn(){throw new Error("effect_update_depth_exceeded")}function It(){throw new Error("hydration_failed")}function Dt(n){throw new Error("props_invalid_value")}function Yn(){throw new Error("state_unsafe_mutation")}function cn(n){return{f:0,reactions:null,equals:fn,v:n,version:0}}function Nt(n){var e;const t=cn(n);return t.equals=an,d!==null&&d.l!==null&&((e=d.l).s??(e.s=[])).push(t),t}function kt(n,t){var e=n.v!==Ln;return!T&&e&&h!==null&&K()&&h.f&I&&Yn(),n.equals(t)||(n.v=t,n.version++,K()&&e&&i!==null&&i.f&y&&!(i.f&m)&&(_!==null&&_.includes(n)?(E(i,A),U(i)):O===null?Gn([n]):O.push(n)),W(n,A,!0)),t}function Ct(n){var t=document.createElement("template");return t.innerHTML=n,t.content}function jn(n){if(kn(n))for(var t=0;t<n.length;t++){var e=n[t];e.isConnected&&e.remove()}else n.isConnected&&n.remove()}function _n(n){i===null&&h===null&&Mn(),Z&&Fn()}function nn(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function q(n,t,e){var r=(n&$)!==0,s={ctx:d,deps:null,dom:null,f:n|A,first:null,fn:t,last:null,next:null,parent:r?null:i,prev:null,teardown:null,transitions:null};if(e){var u=k;try{tn(!0),j(s),s.f|=Pn}finally{tn(u)}}else t!==null&&U(s);var a=e&&s.deps===null&&s.first===null&&s.dom===null&&s.teardown===null;if(!a&&h!==null&&!r){var p=h.f;p&I&&(p&S&&bn(),i!==null&&nn(s,i)),nn(s,h)}return s}function xt(n){const t=q(P,null,!1);return E(t,y),t.teardown=n,t}function Pt(n){_n();var t=i!==null&&(i.f&P)!==0&&d!==null&&!d.m;if(t){var e=d;(e.e??(e.e=[])).push(n)}else{var r=pn(n);return r}}function gt(n){return _n(),vn(n)}function qt(n){const t=q($,n,!0);return()=>{G(t)}}function pn(n){return q(on,n,!1)}function vn(n){return q(P,n,!0)}function Lt(n){return vn(n)}function Ft(n,t=0){return q(P|un|t,n,!0)}function bt(n){return q(P|m,n,!0)}function dn(n){var t=n.teardown;if(t!==null){const e=Z,r=T;en(!0),rn(!0);try{t.call(null)}finally{en(e),rn(r)}}}function G(n,t=!0){var e=n.dom;if(e!==null&&t&&jn(e),Q(n,t),Y(n,0),E(n,g),n.transitions)for(const s of n.transitions)s.stop();dn(n);var r=n.parent;r!==null&&n.f&m&&r.first!==null&&hn(n),n.next=n.prev=n.teardown=n.ctx=n.dom=n.deps=n.parent=n.fn=null}function hn(n){var t=n.parent,e=n.prev,r=n.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),t!==null&&(t.first===n&&(t.first=r),t.last===n&&(t.last=e))}function Mt(n,t){var e=[];En(n,e,!0),Un(e,()=>{G(n),t&&t()})}function Un(n,t){var e=n.length;if(e>0){var r=()=>--e||t();for(var s of n)s.out(r)}else t()}function En(n,t,e){if(!(n.f&x)){if(n.f^=x,n.transitions!==null)for(const a of n.transitions)(a.is_global||e)&&t.push(a);for(var r=n.first;r!==null;){var s=r.next,u=(r.f&ln)!==0||(r.f&m)!==0;En(r,t,u?e:!1),r=s}}}function Ht(n){yn(n,!0)}function yn(n,t){if(n.f&x){n.f^=x,F(n)&&j(n);for(var e=n.first;e!==null;){var r=e.next,s=(e.f&ln)!==0||(e.f&m)!==0;yn(e,s?t:!1),e=r}if(n.transitions!==null)for(const u of n.transitions)(u.is_global||t)&&u.in()}}const Yt=()=>{};function jt(n){return n()}function Bn(n){for(var t=0;t<n.length;t++)n[t]()}let H=!1,z=[];function Tn(){H=!1;const n=z.slice();z=[],Bn(n)}function Ut(n){H||(H=!0,queueMicrotask(Tn)),z.push(n)}function zn(){H&&Tn()}function Kn(n){let t=I|A;i===null&&(t|=S);const e={deps:null,deriveds:null,equals:fn,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(h!==null&&h.f&I){var r=h;r.deriveds===null?r.deriveds=[e]:r.deriveds.push(e)}return e}function Bt(n){const t=Kn(n);return t.equals=an,t}function mn(n){Q(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var e=0;e<t.length;e+=1)Vn(t[e])}}function An(n,t){mn(n);var e=On(n),r=(N||n.f&S)&&n.deps!==null?D:y;E(n,r);var s=n.equals(e);return s||(n.v=e,W(n,A,t)),s}function Vn(n){mn(n),Y(n,0),E(n,g),n.first=n.last=n.deps=n.reactions=n.fn=null}const wn=0,$n=1;let b=wn,L=!1,k=!1,Z=!1;function tn(n){k=n}function en(n){Z=n}function rn(n){T=n}let R=[],C=0,h=null,i=null,_=null,c=0,O=null;function Gn(n){O=n}let T=!1,N=!1,d=null;function K(){return d!==null&&d.l===null}function F(n){var w;var t=n.f,e=(t&A)!==0,r=(t&S)!==0;if(e&&!r)return!0;var s=(t&M)!==0;if(t&D||e&&r){var u=n.deps;if(u!==null)for(var a=u.length,p,o,l=0;l<a;l++){var f=u[l];!e&&F(f)&&(p=An(f,!0));var v=f.version;if(r){if(v>n.version)return n.version=v,!p;!N&&!((w=f==null?void 0:f.reactions)!=null&&w.includes(n))&&(o=f.reactions,o===null?f.reactions=[n]:o.push(n))}else{if(n.f&A)return!0;s&&(v>n.version&&(n.version=v,e=!0),o=f.reactions,o===null?f.reactions=[n]:o.includes(n)||o.push(n))}}r||E(n,y),s&&(n.f^=M)}return e}function Zn(n,t,e){throw n}function On(n){const t=_,e=c,r=O,s=h,u=N,a=T;_=null,c=0,O=null,h=n,N=!k&&(n.f&S)!==0,T=!1;try{let p=(0,n.fn)(),o=n.deps;if(_!==null){let l;if(o!==null){const f=o.length,v=c===0?_:o.slice(0,c).concat(_),X=v.length>16&&f-c>1?new Set(v):null;for(l=c;l<f;l++){const B=o[l];(X!==null?!X.has(B):!v.includes(B))&&Sn(n,B)}}if(o!==null&&c>0)for(o.length=c+_.length,l=0;l<_.length;l++)o[c+l]=_[l];else n.deps=o=_;if(!N)for(l=c;l<o.length;l++){const f=o[l],v=f.reactions;v===null?f.reactions=[n]:v[v.length-1]!==n&&v.push(n)}}else o!==null&&c<o.length&&(Y(n,c),o.length=c);return p}finally{_=t,c=e,O=r,h=s,N=u,T=a}}function Sn(n,t){const e=t.reactions;let r=0;if(e!==null){r=e.length-1;const s=e.indexOf(n);s!==-1&&(r===0?t.reactions=null:(e[s]=e[r],e.pop()))}r===0&&t.f&I&&(E(t,D),t.f&(S|M)||(t.f^=M),Y(t,0))}function Y(n,t){const e=n.deps;if(e!==null){const r=t===0?null:e.slice(0,t);let s;for(s=t;s<e.length;s++){const u=e[s];(r===null||!r.includes(u))&&Sn(n,u)}}}function Q(n,t=!0){let e=n.first;n.first=null,n.last=null;for(var r;e!==null;)r=e.next,G(e,t),e=r}function j(n){var t=n.f;if(!(t&g)){E(n,y);var e=n.ctx,r=i,s=d;i=n,d=e;try{t&un||Q(n),dn(n);var u=On(n);n.teardown=typeof u=="function"?u:null}catch(a){Zn(a)}finally{i=r,d=s}}}function Rn(){C>1e3&&(C=0,Hn()),C++}function In(n){var t=n.length;if(t!==0){Rn();var e=k;k=!0;try{for(var r=0;r<t;r++){var s=n[r];if(s.first===null&&!(s.f&m))sn([s]);else{var u=[];Dn(s,u),sn(u)}}}finally{k=e}}}function sn(n){var t=n.length;if(t!==0)for(var e=0;e<t;e++){var r=n[e];!(r.f&(g|x))&&F(r)&&(j(r),r.deps===null&&r.first===null&&r.dom===null&&(r.teardown===null?hn(r):r.fn=null))}}function Qn(){if(L=!1,C>1001)return;const n=R;R=[],In(n),L||(C=0)}function U(n){b===wn&&(L||(L=!0,queueMicrotask(Qn)));for(var t=n;t.parent!==null;){t=t.parent;var e=t.f;if(e&m){if(!(e&y))return;E(t,D)}}R.push(t)}function Dn(n,t){var e=n.first,r=[];n:for(;e!==null;){var s=e.f,u=(s&(g|x))===0,a=s&m,p=(s&y)!==0,o=e.first;if(u&&(!a||!p)){if(a&&E(e,y),s&P){if(!a&&F(e)&&(j(e),o=e.first),o!==null){e=o;continue}}else if(s&on)if(a||p){if(o!==null){e=o;continue}}else r.push(e)}var l=e.next;if(l===null){let w=e.parent;for(;w!==null;){if(n===w)break n;var f=w.next;if(f!==null){e=f;continue n}w=w.parent}}e=l}for(var v=0;v<r.length;v++)o=r[v],t.push(o),Dn(o,t)}function Nn(n,t=!0){var e=b,r=R;try{Rn();const u=[];b=$n,R=u,L=!1,t&&In(r);var s=n==null?void 0:n();return zn(),(R.length>0||u.length>0)&&Nn(),C=0,s}finally{b=e,R=r}}async function zt(){await Promise.resolve(),Nn()}function Wn(n){const t=n.f;if(t&g)return n.v;if(h!==null&&!(h.f&(m|$))&&!T){const e=(h.f&S)!==0,r=h.deps;_===null&&r!==null&&r[c]===n&&!(e&&i!==null)?c++:(r===null||c===0||r[c-1]!==n)&&(_===null?_=[n]:_[_.length-1]!==n&&_.push(n)),O!==null&&i!==null&&i.f&y&&!(i.f&m)&&O.includes(n)&&(E(i,A),U(i))}return t&I&&F(n)&&An(n,!1),n.v}function W(n,t,e){var r=n.reactions;if(r!==null)for(var s=K(),u=r.length,a=0;a<u;a++){var p=r[a],o=p.f;if(!(o&A||(!e||!s)&&p===i)){E(p,t);var l=(o&D)!==0,f=(o&S)!==0;(o&y||l&&f)&&(p.f&I?W(p,D,e):U(p))}}}function Kt(n){const t=T;try{return T=!0,n()}finally{T=t}}const Xn=~(A|D|y);function E(n,t){n.f=n.f&Xn|t}function Jn(n){return typeof n=="object"&&n!==null&&typeof n.f=="number"}function Vt(n,t=!1,e){d={p:d,c:null,e:null,m:!1,s:n,x:null,l:null},t||(d.l={s:null,u:null,r1:[],r2:cn(!1)})}function $t(n){const t=d;if(t!==null){const r=t.e;if(r!==null){t.e=null;for(var e=0;e<r.length;e++)pn(r[e])}d=t.p,t.m=!0}return{}}function Gt(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(J in n)V(n);else if(!Array.isArray(n))for(let t in n){const e=n[t];typeof e=="object"&&e&&J in e&&V(e)}}}function V(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let r in n)try{V(n[r],t)}catch{}const e=xn(n);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=Cn(e);for(let s in r){const u=r[s].get;if(u)try{u.call(n)}catch{}}}}}function Zt(n){return Jn(n)?Wn(n):n}export{pt as $,dt as A,yt as B,xt as C,Ut as D,ln as E,et as F,kn as G,Ot as H,Nn as I,At as J,St as K,ut as L,It as M,nt as N,qt as O,ht as P,Rt as Q,vn as R,x as S,ft as T,Ln as U,at as V,vt as W,cn as X,En as Y,Un as Z,G as _,Pt as a,tt as a0,J as a1,ct as a2,_t as a3,it as a4,Zt as a5,qn as a6,wt as a7,i as a8,Ct as a9,Tt as aa,mt as ab,lt as ac,st as ad,ot as ae,xn as af,zt as ag,Kt as b,d as c,jt as d,Gt as e,$t as f,Wn as g,pn as h,Ft as i,jn as j,Ht as k,bt as l,Nt as m,Yt as n,Mt as o,Vt as p,rt as q,Bn as r,kt as s,Lt as t,gt as u,Dt as v,Kn as w,Bt as x,Et as y,an as z};
