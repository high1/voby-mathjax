var Ot=Object.defineProperty;var _=Object.getOwnPropertySymbols;var ft=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable;var dt=(e,t,n)=>t in e?Ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j=(e,t)=>{for(var n in t||(t={}))ft.call(t,n)&&dt(e,n,t[n]);if(_)for(var n of _(t))ht.call(t,n)&&dt(e,n,t[n]);return e};var ut=(e,t)=>{var n={};for(var s in e)ft.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&_)for(var s of _(e))t.indexOf(s)<0&&ht.call(e,s)&&(n[s]=e[s]);return n};const Vt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};Vt();class Ft{constructor(t){this.props=t,this.state={}}render(t,n){throw new Error("Missing render function")}}var Dt=Ft;const B=(e,t)=>{e instanceof Array?e.forEach(t):e&&t(e)},I=(e,t,n)=>{const s=e[t];s instanceof Array?s.push(n):s?e[t]=[s,n]:e[t]=n},q=(e,t,n)=>{const s=e[t];if(s instanceof Set)s.add(n);else if(s){const i=new Set;i.add(s),i.add(n),e[t]=i}else e[t]=n},Y=(e,t,n)=>{const s=e[t];s instanceof Set?s.delete(n):s===n&&(e[t]=void 0)},Rt=(e,t)=>e instanceof Set?e.has(t):e===t,{toString:_t}=Object.prototype,At=e=>e instanceof Error?e:typeof e=="string"?new Error(e):new Error("Unknown error"),Z=e=>typeof e=="function",Bt=e=>_t.call(e)==="[object AsyncFunction]",It=(e,t)=>Math.max(e,t);class Jt{AE(t){I(this,"A4",t)}AF(t,n){this.AG||(this.AG={}),this.AG[t]=n}AH(t){I(this,"AI",t)}A8(t){I(this,"A3",t)}T(t){I(this,"A2",t)}AJ(t){q(this,"AD",t)}AK(t){Y(this,"AD",t)}context(t){const{AG:n,K:s}=this;return n&&t in n?n[t]:s==null?void 0:s.context(t)}U(t,n){const{A2:s,A3:i,A4:r,AI:a,AG:c}=this;s&&(this.A2=void 0,B(s,l=>{l.U(!0,n)})),i&&(this.A3=void 0,n?B(i,l=>{!l.disposed&&!l.L.disposed&&l.AA(this)}):this.AL=i),r&&(this.A4=void 0,this.S=!0,B(r,l=>l.call(l)),this.S=!1),a&&(this.AI=void 0),c&&(this.AG=void 0)}A0(){const t=this.AL,n=this.A3;if(!t||(this.AL=void 0,t===n))return;const s=t instanceof Array?t:[t],i=n instanceof Array?n:[n];t:for(let r=0,a=s.length;r<a;r++){const c=s[r];if(!(c.disposed||c.L.disposed)&&c!==i[r]){for(let l=0,f=i.length;l<f;l++)if(c===i[l])continue t;c.AA(this)}}}error(t,n){const{AI:s,K:i}=this;if(s)return B(s,r=>r.call(r,t)),!0;if(i!=null&&i.error(t,!0))return!0;if(n)return!1;throw t}V(t){const n=m.A,s=b.A;m.A=this,b.A=!1;let i;try{i=t()}catch(r){this.error(At(r),!1)}finally{m.A=n,b.A=s}return i}}var st=Jt;class $t extends st{constructor(){super(...arguments),this.disposed=!1}}var Gt=$t;const Pt=()=>!1,vt=Object.is,Wt=()=>{},it=new Gt,m={A:it},D={A:it},b={A:!1},Zt={A:!1},y=Symbol("Observable"),N=Symbol("Frozen"),xt=Symbol("Readable"),jt=Symbol("Writable"),Ut=Symbol("Unwrapped"),Kt=Symbol("Sampled"),kt=e=>{m.A!==it&&m.A.AE(e)};var qt=kt;const{bind:rt,prototype:ot}=Function,{setPrototypeOf:O}=Object;function St(e){if(arguments.length)throw new Error("A readonly Observable can not be updated");return this}function wt(e){if(arguments.length){if(e===y)return this;throw new Error("A readonly Observable can not be updated")}return this.E()}function Et(e){return arguments.length?e===y?this:Z(e)?this.F(e):this.G(e):this.E()}const Yt=O({[y]:!0,[N]:!0},ot),zt=O({[y]:!0,[xt]:!0},ot),te=O({[y]:!0,[jt]:!0},ot);O(St,Yt);O(wt,zt);O(Et,te);rt.bind(St);const ee=rt.bind(wt),ne=rt.bind(Et);class se extends st{constructor(t){if(super(),this.K=m.A,this.L=m.A.L||D.A,this.M=0,this.Q=0,this.R=!1,Bt(t))throw new Error("A computation is forbidden from executing an async function")}O(t){this.M+=1,this.R||(this.R=t)}P(t){!this.M||(this.M-=1,this.R||(this.R=t),!this.M&&(t=this.R,this.R=!1,!this.S&&this.F(t)))}F(t){}}var yt=se;class ie{constructor(t,n,s){this.L=m.A.L||D.A,this.D=t,s&&(this.K=s),(n==null?void 0:n.equals)!==void 0&&(this.equals=n.equals||Pt)}A5(t){t.call(t,this.D),!Rt(this.A6,t)&&q(this,"A6",t)}T(t){q(this,"A2",t)}A7(){var t;this.disposed||this.L.disposed||(!b.A&&m.A instanceof yt&&(this.T(m.A),m.A.A8(this)),!((t=this.K)===null||t===void 0)&&t.M&&(this.K.M=0,this.K.R=!1,this.K.F(!0)))}A9(t){Y(this,"A6",t)}AA(t){Y(this,"A2",t)}E(){return this.A7(),this.D}G(t){if(this.disposed)throw new Error("A disposed Observable can not be updated");{const s=!(this.equals||vt)(t,this.D);if(!this.K){if(!s)return t;this.L.disposed||this.O(s)}if(s){const i=this.D;this.D=t,this.AB(i)}return this.L.disposed||this.P(s),t}}F(t){const n=t(this.D);return this.G(n)}AB(t){if(this.disposed||this.L.disposed)return;const{A6:n}=this;if(n)if(n instanceof Set)for(const s of n)s.call(s,this.D,t);else n.call(n,this.D,t)}O(t){if(this.disposed||this.L.disposed)return;const n=this.A2;if(n)if(n instanceof Set)for(const s of n)s.O(t);else n.O(t)}P(t){if(this.disposed||this.L.disposed)return;const n=this.A2;if(n)if(n instanceof Set)for(const s of n)s.P(t);else n.P(t)}U(){this.disposed=!0}}var Lt=ie;function re(e,t){return arguments.length<2?m.A.context(e):m.A.AF(e,t)}const oe=()=>0;var ae=oe;class le extends yt{constructor(t,n){super(t),this.B=t,this.K.T(this),n&&ae()?this.O(!0):this.F(!0)}F(t){if(t&&!this.L.disposed){const n=this.Q;if(n)this.Q=t?3:It(n,2);else{this.Q=1,this.U();try{const s=this.V(this.B);this.A0(),Z(s)?this.AE(s):!this.A2&&!this.A3&&!this.A4&&this.U(!0,!0)}catch(s){this.A0(),this.error(At(s),!1)}finally{const s=this.Q;this.Q=0,s>1&&this.F(s===3)}}}}}var ce=le;function de(e){if(Z(e)){if(b.A)return e();b.A=!0;try{return e()}finally{b.A=!1}}else return e}const fe=()=>!!Zt.A;var he=fe;class ue extends st{constructor(t){super(),this.K=m.A,t&&he()&&(this.AO=!0,this.K.AJ(this))}U(t,n){this.disposed=!0,this.AO&&this.K.AK(this),super.U(t,n)}V(t){const n=this.U.bind(this,!0,!0),s=t.bind(void 0,n),i=D.A;D.A=this;try{return super.V(s)}finally{D.A=i}}}var Te=ue;const pe=e=>Z(e)&&y in e;var w=pe;const me=e=>{if(e instanceof Lt)return e;if(N in e)throw new Error;return e(y)};var at=me;const Qe=(e,t)=>{N in e||at(e).A9(t)};var Mt=Qe;const ge=(e,t)=>(N in e?t.call(t,e()):at(e).A5(t),()=>{Mt(e,t)});var Ae=ge;const xe=e=>{const t=new ce(e);return t.A3||(t.B=Wt),t.U.bind(t,!0,!0)};var S=xe;const Se=e=>N in e||xt in e?e:ee(at(e));var we=Se;const Ee=e=>new Te(!0).V(e);var ye=Ee;const Le=()=>{const e=m.A;return t=>e.V(()=>t())};var Me=Le;function be(e,t){return ne(new Lt(e,t))}const bt=Symbol("Element"),Ne=Symbol("Template Accessor"),Ce={},{prototype:He}=Function,{setPrototypeOf:Tt}=Object;function F(){return de(this)}Tt(F,Tt({[bt]:!0,[Ut]:!0,[Kt]:!0},He));const pt=document.createComment.bind(document,""),Xe=document.createElement.bind(document),Oe=document.createElementNS.bind(document,"http://www.w3.org/2000/svg"),$=document.createTextNode.bind(document),Ve=e=>H(e)?e:[e],Fe=e=>{for(let t=0,n=e.length;t<n;t++)if(!!H(e[t]))return e.flat(1/0);return e},{isArray:H}=Array,g=e=>typeof e=="function",x=e=>e==null,De=e=>e instanceof Node,E=e=>typeof e=="string",X=e=>!!e.isSVG,Re=(()=>{const e=/^(t(ext$|s)|s[vwy]|g)|^set|tad|ker|p(at|s)|s(to|c$|ca|k)|r(ec|cl)|ew|us|f($|e|s)|cu|n[ei]|l[ty]|[GOP]/,t={};return n=>n in t?t[n]:t[n]=e.test(n)&&n.indexOf("-")===-1})(),_e=e=>g(e)&&Ne in e,J=e=>e==null||typeof e=="boolean"||typeof e=="symbol",Be=e=>{const t=Me();queueMicrotask(()=>{t(e)})};var Ie=Be;const Je=e=>N in e?e:e(y);class L{constructor(t){this.observable=Je(t)}init(){Ae(this.observable,this),qt(this)}call(){arguments.length===1?this.cleanup():this.update(arguments[1],arguments[2])}cleanup(){Mt(this.observable,this)}}class $e extends L{constructor(t,n,s){super(t),this.element=n,this.key=s,this.init()}update(t){v(this.element,this.key,t)}}class Ge extends L{constructor(t,n,s){super(t),this.element=n,this.key=s,this.init()}update(t){R(this.element,this.key,t)}}class Pe extends L{constructor(t,n,s){super(t),this.element=n,this.value=s,this.init()}update(t,n){z(this.element,this.value,t,n)}}class ve extends L{constructor(t,n){super(t),this.element=n,this.init()}update(t,n){tt(this.element,t,n)}}class We extends L{constructor(t,n,s){super(t),this.element=n,this.event=s,this.init()}update(t){Xt(this.element,this.event,t)}}class Ze extends L{constructor(t,n,s){super(t),this.element=n,this.key=s,this.init()}update(t){et(this.element,this.key,t)}}class je extends L{constructor(t,n,s){super(t),this.element=n,this.key=s,this.init()}update(t){W(this.element,this.key,t)}}class Ue extends L{constructor(t,n){super(t),this.element=n,this.init()}update(t,n){nt(this.element,t,n)}}const Ke=/\s+/g,U=e=>e.split(Ke).filter(Boolean),ke=(e,t,n)=>{const{className:s}=e;if(!E(s))U(t).forEach(i=>{e.classList.toggle(i,!!n)});else if(!s)n&&(e.className=t);else if(!n&&s===t)e.className="";else{const i=new Set(U(s));U(t).forEach(r=>{n?i.add(r):i.delete(r)}),e.className=Array.from(i).join(" ")}},G=document.createComment(""),K=[G],k=[G],qe=(e,t,n,s)=>{if(t===n)return;t instanceof Node&&(K[0]=t,t=K),n instanceof Node&&(k[0]=n,n=k);const i=n.length;let r=t.length,a=i,c=0,l=0,f=null,T;for(;c<r||l<a;)if(r===c){const d=a<i?l?n[l-1].nextSibling:n[a-l]:s;for(;l<a;)e.insertBefore(n[l++],d)}else if(a===l)for(;c<r;)(!f||!f.has(t[c]))&&(T=t[c],e.removeChild(T)),c++;else if(t[c]===n[l])c++,l++;else if(t[r-1]===n[a-1])r--,a--;else if(t[c]===n[a-1]&&n[l]===t[r-1]){const d=t[--r].nextSibling;e.insertBefore(n[l++],t[c++].nextSibling),e.insertBefore(n[--a],d),t[r]=n[a]}else{if(!f){f=new Map;let d=l;for(;d<a;)f.set(n[d],d++)}if(f.has(t[c])){const d=f.get(t[c]);if(l<d&&d<a){let Q=c,h=1;for(;++Q<r&&Q<a&&f.get(t[Q])===d+h;)h++;if(h>d-l){const u=t[c];for(;l<d;)e.insertBefore(n[l++],u)}else e.replaceChild(n[l++],t[c++])}else c++}else T=t[c++],e.removeChild(T)}K[0]=G,k[0]=G};var Ye=qe;const ze=[],M={make:()=>({values:void 0,length:0}),makeWithNode:e=>({values:e,length:1}),makeWithFragment:e=>({values:e,fragmented:!0,length:1}),getChildrenFragmented:(e,t=[])=>{const{values:n,length:s}=e;if(!s)return t;if(n instanceof Array)for(let i=0,r=n.length;i<r;i++){const a=n[i];a instanceof Node?t.push(a):M.getChildrenFragmented(a,t)}else n instanceof Node?t.push(n):M.getChildrenFragmented(n,t);return t},getChildren:e=>e.length?e.fragmented?e.length===1?M.getChildren(e.values):M.getChildrenFragmented(e):e.values:ze,pushFragment:(e,t)=>{M.pushValue(e,t),e.fragmented=!0},pushNode:(e,t)=>{M.pushValue(e,t)},pushValue:(e,t)=>{const{values:n,length:s}=e;s===0?e.values=t:s===1?e.values=[n,t]:n.push(t),e.length+=1},replaceWithNode:(e,t)=>{e.values=t,delete e.fragmented,e.length=1},replaceWithFragment:(e,t)=>{e.values=t.values,e.fragmented=t.fragmented,e.length=t.length}};var p=M;const P=(e,t)=>{if(g(e))bt in e||N in e?P(e(),t):S(()=>{P(e(),t)});else if(H(e)){const n=Fe(e);n.some(w)?S(()=>{t(Nt(n,[]))}):t(n)}else t(e)},mt=e=>g(e)?e():e,Nt=(e,t)=>{for(;w(e);)e=e();if(H(e))for(let n=0,s=e.length;n<s;n++)Nt(e[n],t);else J(e)||t.push(e);return t},v=(()=>{const e=/e(r[HRWrv]|[Vawy])|Con|l(e[Tcs]|c)|s(eP|y)|a(t[rt]|u|v)|Of|Ex|f[XYa]|gt|hR|d[Pg]|t[TXYd]|[UZq]/,t={},n=/[A-Z]/g,s=i=>t[i]||(t[i]=e.test(i)?i:i.replace(n,r=>`-${r.toLowerCase()}`));return(i,r,a)=>{r=r==="className"?"class":r,X(i)?(r=r==="xlinkHref"||r==="xlink:href"?"href":s(r),i.setAttribute(r,String(a))):x(a)?i.removeAttribute(r):(a=a===!0?"":String(a),i.setAttribute(r,a))}})(),tn=(e,t,n)=>{g(n)?w(n)?new $e(n,e,t):S(()=>{v(e,t,n())}):v(e,t,n)},en=(e,t)=>{if(t.nodeType===3)return t.nodeValue=e,t;{const n=t.parentElement;if(!n)throw new Error("Invalid child replacement");const s=$(e);return n.replaceChild(s,t),s}},Ct=(e,t,n)=>{const s=p.getChildren(t),i=s instanceof Array,r=i?s.length:1,a=i?s[0]:s,c=i?s[r-1]:s,l=(c==null?void 0:c.nextSibling)||null;if(r===0){const h=typeof n;if(h==="string"||h==="number"||h==="bigint"){const u=$(n);e.appendChild(u),p.replaceWithNode(t,u);return}else if(h==="object"&&n!==null&&typeof n.nodeType=="number"){const u=n;e.insertBefore(u,null),p.replaceWithNode(t,u);return}}if(r===1){const h=typeof n;if(h==="string"||h==="number"||h==="bigint"){const u=en(String(n),a);p.replaceWithNode(t,u);return}}const f=p.make(),T=Array.isArray(n)?n:[n];for(let h=0,u=T.length;h<u;h++){const A=T[h],V=typeof A;if(V==="string"||V==="number"||V==="bigint")p.pushNode(f,$(A));else if(V==="object"&&A!==null&&typeof A.nodeType=="number")p.pushNode(f,A);else if(V==="function"){const ct=p.make();p.pushFragment(f,ct),P(A,Ct.bind(void 0,e,ct))}}let d=p.getChildren(f),Q=f.length;if(!(Q===0&&r===1&&a.nodeType===8)){if(Q===0||r===1&&a.nodeType===8){const{childNodes:h}=e;if(h.length===r){if(e.textContent="",Q===0){const u=pt();p.pushNode(f,u),d!==f.values&&(d=u,Q+=1)}if(l)if(d instanceof Array)for(let u=0,A=d.length;u<A;u++)e.insertBefore(d[u],l);else e.insertBefore(d,l);else if(d instanceof Array)for(let u=0,A=d.length;u<A;u++)e.append(d[u]);else e.append(d);p.replaceWithFragment(t,f);return}}if(Q===0){const h=pt();p.pushNode(f,h),d!==f.values&&(d=h,Q+=1)}Ye(e,s,d,l),p.replaceWithFragment(t,f)}},Ht=(e,t,n=p.make())=>{P(t,Ct.bind(void 0,e,n))},R=ke,Qt=(e,t,n)=>{g(n)?w(n)?new Ge(n,e,t):S(()=>{R(e,t,n())}):R(e,t,n)},z=(e,t,n,s)=>{s&&s!==!0&&R(e,s,!1),n&&n!==!0&&R(e,n,t)},gt=(e,t,n)=>{if(g(n))if(w(n))new Pe(n,e,t);else{let s;S(()=>{const i=n();z(e,t,i,s),s=i})}else z(e,t,n)},tt=(e,t,n)=>{if(E(t))X(e)?e.setAttribute("class",t):e.className=t;else{if(n)if(E(n))n&&(X(e)?e.setAttribute("class",""):e.className="");else if(H(n))for(let s=0,i=n.length;s<i;s++)!n[s]||gt(e,!1,n[s]);else for(const s in n)t&&s in t||Qt(e,s,!1);if(H(t))for(let s=0,i=t.length;s<i;s++)!t[s]||gt(e,!0,t[s]);else for(const s in t)Qt(e,s,t[s])}},nn=(e,t)=>{if(g(t))if(w(t))new ve(t,e);else{let n;S(()=>{const s=t();tt(e,s,n),n=s})}else tt(e,t)},sn=(e,t,n)=>{const s=Ce[t]||Symbol(),i=re(s);if(!s||!i)throw new Error(`Directive "${t}" not found`);const r=be();lt(e,a=>r(a)),i(we(r),...n)},Xt=(()=>{const e={onbeforeinput:"_onbeforeinput",onclick:"_onclick",ondblclick:"_ondblclick",onfocusin:"_onfocusin",onfocusout:"_onfocusout",oninput:"_oninput",onkeydown:"_onkeydown",onkeyup:"_onkeyup",onmousedown:"_onmousedown",onmouseup:"_onmouseup"},t={},n=s=>{const i=e[s];!i||document.addEventListener(s.slice(2),r=>{const a=r.composedPath(),c=a[0]||document;Object.defineProperty(r,"currentTarget",{configurable:!0,get(){return c}});for(let l=0,f=a.length;l<f;l++){const T=a[l][i];if(!!T&&(T(r),r.cancelBubble))break}})};return(s,i,r)=>{if(i.endsWith("capture")){const a=i.slice(2,-7),c=`_${i}`,l=s[c];l&&s.removeEventListener(a,l,{capture:!0}),r&&s.addEventListener(a,r,{capture:!0}),s[c]=r}else if(i in e){i in t||(t[i]=!0,n(i));const a=e[i];s[a]=r}else s[i]=r}})(),rn=(e,t,n)=>{w(n)?new We(n,e,t):Xt(e,t,n)},on=(e,t)=>{e.innerHTML=String(x(t)?"":t)},an=(e,t)=>{S(()=>{on(e,mt(mt(t).__html))})},et=(e,t,n)=>{e[t]=n,x(n)&&v(e,t,null)},ln=(e,t,n)=>{g(n)?w(n)?new Ze(n,e,t):S(()=>{et(e,t,n())}):et(e,t,n)},lt=(e,t)=>{if(x(t))return;const n=Ve(t);Ie(()=>n.forEach(s=>s(e)))},W=(()=>{const e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;return(t,n,s)=>{n.charCodeAt(0)===45?t.style.setProperty(n,String(s)):x(s)?t.style[n]=null:t.style[n]=E(s)||e.test(n)?s:`${s}px`}})(),cn=(e,t,n)=>{g(n)?w(n)?new je(n,e,t):S(()=>{W(e,t,n())}):W(e,t,n)},nt=(e,t,n)=>{if(E(t))e.setAttribute("style",t);else{if(n)if(E(n))n&&(e.style.cssText="");else for(const s in n)t&&s in t||W(e,s,null);for(const s in t)cn(e,s,t[s])}},dn=(e,t)=>{if(g(t))if(w(t))new Ue(t,e);else{let n;S(()=>{const s=t();nt(e,s,n),n=s})}else nt(e,t)},fn=(e,t,n)=>{if(t==="children"){const s=$("");e.insertBefore(s,null),n(e,"setChildReplacement",void 0,s)}else t==="ref"?n(e,"setRef"):t==="style"?n(e,"setStyles"):t==="class"?(X(e)||(e.className=""),n(e,"setClasses")):t==="innerHTML"||t==="outerHTML"||t==="textContent"||(t==="dangerouslySetInnerHTML"?n(e,"setHTML"):t.charCodeAt(0)===111&&t.charCodeAt(1)===110?n(e,"setEvent",t.toLowerCase()):t.charCodeAt(0)===117&&t.charCodeAt(3)===58?n(e,"setDirective",t.slice(4)):t in e&&!X(e)?(t==="className"&&(e.className=""),n(e,"setProperty",t)):(e.setAttribute(t,""),n(e,"setAttribute",t)))},hn=(e,t,n)=>{_e(n)?fn(e,t,n):t==="children"?Ht(e,n):t==="ref"?lt(e,n):t==="style"?dn(e,n):t==="class"?nn(e,n):t==="innerHTML"||t==="outerHTML"||t==="textContent"||(t==="dangerouslySetInnerHTML"?an(e,n):t.charCodeAt(0)===111&&t.charCodeAt(1)===110?rn(e,t.toLowerCase(),n):t.charCodeAt(0)===117&&t.charCodeAt(3)===58?sn(e,t.slice(4),n):t in e&&!X(e)?ln(e,t,n):tn(e,t,n))},un=(e,t)=>{for(const n in t)hn(e,n,t[n])},Tn=(e,t,...n)=>{const f=t||{},{children:s,key:i,ref:r,class:a}=f,c=ut(f,["children","key","ref","class"]),l=n.length===1?n[0]:n.length===0?s:n;if(x(a)||(c.class=a),!x(c.className)&&E(c.class))throw new Error("Invalid class prop, it can only be null, undefined, an array or an object when className is provided too");if(g(e))if(Dt.isPrototypeOf(e)){const T=c;return J(l)||(T.children=l),F.bind(()=>{const d=new e(T),Q=d.render(d.props,d.state);return x(r)||lt(d,r),Q})}else{const T=c;return J(l)||(T.children=l),x(r)||(T.ref=r),F.bind(e.bind(void 0,T))}else if(E(e)){const T=c,d=Re(e),Q=d?Oe:Xe;return J(l)||(T.children=l),x(r)||(T.ref=r),F.bind(()=>{const h=Q(e);return d&&(h.isSVG=!0),un(h,T),h})}else{if(De(e))return F.bind(e);throw new Error("Invalid component")}};var C=Tn;const pn=({children:e})=>e;var mn=pn;const Qn=(e,t)=>{if(!t)throw new Error("Invalid parent node");return t.textContent="",ye(n=>(Ht(t,e),()=>{n(),t.textContent=""}))};var gn=Qn;const o=(e,t)=>C(e,t);function An(e={}){const{wrapper:t}=e.components||{};return t?o(t,Object.assign({},e,{children:o(n,{})})):n();function n(){const s=Object.assign({h1:"h1",span:"span","mjx-container":"mjx-container",svg:"svg",defs:"defs",path:"path",g:"g",use:"use",rect:"rect",h2:"h2",style:"style"},e.components);return o(mn,{children:[o(s.h1,{children:o(s.span,{className:"math math-inline",children:o(s["mjx-container"],{className:"MathJax",jax:"SVG",children:o(s.svg,{style:{verticalAlign:"-0.212ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.838ex",height:"2.398ex",role:"img",focusable:"false",viewBox:"0 -966.5 3906.6 1060",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[o(s.defs,{children:[o(s.path,{id:"MJX-1-TEX-N-221A",d:"M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z"}),o(s.path,{id:"MJX-1-TEX-I-1D44E",d:"M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"}),o(s.path,{id:"MJX-1-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}),o(s.path,{id:"MJX-1-TEX-N-2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"}),o(s.path,{id:"MJX-1-TEX-I-1D44F",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"})]}),o(s.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:o(s.g,{"data-mml-node":"math",children:o(s.g,{"data-mml-node":"msqrt",children:[o(s.g,{transform:"translate(853,0)",children:[o(s.g,{"data-mml-node":"msup",children:[o(s.g,{"data-mml-node":"mi",children:o(s.use,{"data-c":"1D44E",xlinkHref:"#MJX-1-TEX-I-1D44E"})}),o(s.g,{"data-mml-node":"mn",transform:"translate(562,289) scale(0.707)",children:o(s.use,{"data-c":"32",xlinkHref:"#MJX-1-TEX-N-32"})})]}),o(s.g,{"data-mml-node":"mo",transform:"translate(1187.8,0)",children:o(s.use,{"data-c":"2B",xlinkHref:"#MJX-1-TEX-N-2B"})}),o(s.g,{"data-mml-node":"msup",transform:"translate(2188,0)",children:[o(s.g,{"data-mml-node":"mi",children:o(s.use,{"data-c":"1D44F",xlinkHref:"#MJX-1-TEX-I-1D44F"})}),o(s.g,{"data-mml-node":"mn",transform:"translate(462,289) scale(0.707)",children:o(s.use,{"data-c":"32",xlinkHref:"#MJX-1-TEX-N-32"})})]})]}),o(s.g,{"data-mml-node":"mo",transform:"translate(0,106.5)",children:o(s.use,{"data-c":"221A",xlinkHref:"#MJX-1-TEX-N-221A"})}),o(s.rect,{width:"3053.6",height:"60",x:"853",y:"846.5"})]})})})]})})})}),`
`,o(s.h2,{children:o(s.span,{className:"math math-inline",children:o(s["mjx-container"],{className:"MathJax",jax:"SVG",children:o(s.svg,{style:{verticalAlign:"-0.781ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.962ex",height:"2.737ex",role:"img",focusable:"false",viewBox:"0 -864.9 6171.2 1209.9",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[o(s.defs,{children:[o(s.path,{id:"MJX-2-TEX-I-1D43F",d:"M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 217 683Q271 680 344 680Q485 680 506 683H518Q524 677 524 674T522 656Q517 641 513 637H475Q406 636 394 628Q387 624 380 600T313 336Q297 271 279 198T252 88L243 52Q243 48 252 48T311 46H328Q360 46 379 47T428 54T478 72T522 106T564 161Q580 191 594 228T611 270Q616 273 628 273H641Q647 264 647 262T627 203T583 83T557 9Q555 4 553 3T537 0T494 -1Q483 -1 418 -1T294 0H116Q32 0 32 10Q32 17 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"}),o(s.path,{id:"MJX-2-TEX-N-3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}),o(s.path,{id:"MJX-2-TEX-N-31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}),o(s.path,{id:"MJX-2-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}),o(s.path,{id:"MJX-2-TEX-I-1D70C",d:"M58 -216Q25 -216 23 -186Q23 -176 73 26T127 234Q143 289 182 341Q252 427 341 441Q343 441 349 441T359 442Q432 442 471 394T510 276Q510 219 486 165T425 74T345 13T266 -10H255H248Q197 -10 165 35L160 41L133 -71Q108 -168 104 -181T92 -202Q76 -216 58 -216ZM424 322Q424 359 407 382T357 405Q322 405 287 376T231 300Q217 269 193 170L176 102Q193 26 260 26Q298 26 334 62Q367 92 389 158T418 266T424 322Z"}),o(s.path,{id:"MJX-2-TEX-I-1D463",d:"M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"}),o(s.path,{id:"MJX-2-TEX-I-1D446",d:"M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"}),o(s.path,{id:"MJX-2-TEX-I-1D436",d:"M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q484 659 454 652T382 628T299 572T226 479Q194 422 175 346T156 222Q156 108 232 58Q280 24 350 24Q441 24 512 92T606 240Q610 253 612 255T628 257Q648 257 648 248Q648 243 647 239Q618 132 523 55T319 -22Q206 -22 128 53T50 252Z"})]}),o(s.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:o(s.g,{"data-mml-node":"math",children:[o(s.g,{"data-mml-node":"mi",children:o(s.use,{"data-c":"1D43F",xlinkHref:"#MJX-2-TEX-I-1D43F"})}),o(s.g,{"data-mml-node":"mo",transform:"translate(958.8,0)",children:o(s.use,{"data-c":"3D",xlinkHref:"#MJX-2-TEX-N-3D"})}),o(s.g,{"data-mml-node":"mfrac",transform:"translate(2014.6,0)",children:[o(s.g,{"data-mml-node":"mn",transform:"translate(220,394) scale(0.707)",children:o(s.use,{"data-c":"31",xlinkHref:"#MJX-2-TEX-N-31"})}),o(s.g,{"data-mml-node":"mn",transform:"translate(220,-345) scale(0.707)",children:o(s.use,{"data-c":"32",xlinkHref:"#MJX-2-TEX-N-32"})}),o(s.rect,{width:"553.6",height:"60",x:"120",y:"220"})]}),o(s.g,{"data-mml-node":"mi",transform:"translate(2808.1,0)",children:o(s.use,{"data-c":"1D70C",xlinkHref:"#MJX-2-TEX-I-1D70C"})}),o(s.g,{"data-mml-node":"msup",transform:"translate(3325.1,0)",children:[o(s.g,{"data-mml-node":"mi",children:o(s.use,{"data-c":"1D463",xlinkHref:"#MJX-2-TEX-I-1D463"})}),o(s.g,{"data-mml-node":"mn",transform:"translate(518,363) scale(0.707)",children:o(s.use,{"data-c":"32",xlinkHref:"#MJX-2-TEX-N-32"})})]}),o(s.g,{"data-mml-node":"mi",transform:"translate(4246.7,0)",children:o(s.use,{"data-c":"1D446",xlinkHref:"#MJX-2-TEX-I-1D446"})}),o(s.g,{"data-mml-node":"msub",transform:"translate(4891.7,0)",children:[o(s.g,{"data-mml-node":"mi",children:o(s.use,{"data-c":"1D436",xlinkHref:"#MJX-2-TEX-I-1D436"})}),o(s.g,{"data-mml-node":"mi",transform:"translate(748,-150) scale(0.707)",children:o(s.use,{"data-c":"1D43F",xlinkHref:"#MJX-2-TEX-I-1D43F"})})]})]})})]})})})}),o(s.style,{children:`
mjx-container[jax="SVG"] {
  direction: ltr;
}

mjx-container[jax="SVG"] > svg {
  overflow: visible;
  min-height: 1px;
  min-width: 1px;
}

mjx-container[jax="SVG"] > svg a {
  fill: blue;
  stroke: blue;
}

mjx-container[jax="SVG"][display="true"] {
  display: block;
  text-align: center;
  margin: 1em 0;
}

mjx-container[jax="SVG"][display="true"][width="full"] {
  display: flex;
}

mjx-container[jax="SVG"][justify="left"] {
  text-align: left;
}

mjx-container[jax="SVG"][justify="right"] {
  text-align: right;
}

g[data-mml-node="merror"] > g {
  fill: red;
  stroke: red;
}

g[data-mml-node="merror"] > rect[data-background] {
  fill: yellow;
  stroke: none;
}

g[data-mml-node="mtable"] > line[data-line], svg[data-table] > g > line[data-line] {
  stroke-width: 70px;
  fill: none;
}

g[data-mml-node="mtable"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {
  stroke-width: 70px;
  fill: none;
}

g[data-mml-node="mtable"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {
  stroke-dasharray: 140;
}

g[data-mml-node="mtable"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {
  stroke-linecap: round;
  stroke-dasharray: 0,140;
}

g[data-mml-node="mtable"] > g > svg {
  overflow: visible;
}

[jax="SVG"] mjx-tool {
  display: inline-block;
  position: relative;
  width: 0;
  height: 0;
}

[jax="SVG"] mjx-tool > mjx-tip {
  position: absolute;
  top: 0;
  left: 0;
}

mjx-tool > mjx-tip {
  display: inline-block;
  padding: .2em;
  border: 1px solid #888;
  font-size: 70%;
  background-color: #F8F8F8;
  color: black;
  box-shadow: 2px 2px 5px #AAAAAA;
}

g[data-mml-node="maction"][data-toggle] {
  cursor: pointer;
}

mjx-status {
  display: block;
  position: fixed;
  left: 1em;
  bottom: 1em;
  min-width: 25%;
  padding: .2em .4em;
  border: 1px solid #888;
  font-size: 90%;
  background-color: #F8F8F8;
  color: black;
}

foreignObject[data-mjx-xml] {
  font-family: initial;
  line-height: normal;
  overflow: visible;
}

mjx-container[jax="SVG"] path[data-c], mjx-container[jax="SVG"] use[data-c] {
  stroke-width: 3;
}
`})]})}}const xn=()=>C("div",{class:"flex flex-col items-center justify-center h-full bg-amber-50"},C(An,{components:{h1:e=>C("h1",j({class:"text-sky-600"},e)),h2:e=>C("div",j({class:"text-9xl text-teal-700"},e))}}),";");gn(C(xn,null),document.querySelector("#root"));
