import{J as a,S as t,i as e,s,e as i,t as r,k as l,c as n,a as o,g as c,d as u,n as h,b as d,f,H as p,K as m,L as g,M as v,h as w,I as b,N as y,O as $,P as E,Q as I,j as x,m as k,o as D,x as N,u as L,v as U,w as V,A as O,r as T,l as z}from"../chunks/vendor-c81b9572.js";const S=a("https://bytglwkdxmghgqtwqngp.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzgwOTA3MSwiZXhwIjoxOTQzMzg1MDcxfQ.x2ywYXdbBOrOOtAr8zzEzL-XGuwG-BhybkrxLNMDYDE");function A(a){let t,e,s,$,E,I,x,k,D,N,L,U,V,O,T,z,S,A=a[0]?"Loading":"Send magic link";return{c(){t=i("div"),e=i("div"),s=i("h1"),$=r("Supabase + Next.js"),E=l(),I=i("p"),x=r("Sign in via magic link with your email below"),k=l(),D=i("div"),N=i("input"),L=l(),U=i("div"),V=i("button"),O=i("span"),T=r(A),this.h()},l(a){t=n(a,"DIV",{class:!0});var i=o(t);e=n(i,"DIV",{class:!0});var r=o(e);s=n(r,"H1",{class:!0});var l=o(s);$=c(l,"Supabase + Next.js"),l.forEach(u),E=h(r),I=n(r,"P",{class:!0});var d=o(I);x=c(d,"Sign in via magic link with your email below"),d.forEach(u),k=h(r),D=n(r,"DIV",{});var f=o(D);N=n(f,"INPUT",{class:!0,type:!0,placeholder:!0}),f.forEach(u),L=h(r),U=n(r,"DIV",{});var p=o(U);V=n(p,"BUTTON",{class:!0});var m=o(V);O=n(m,"SPAN",{});var g=o(O);T=c(g,A),g.forEach(u),m.forEach(u),p.forEach(u),r.forEach(u),i.forEach(u),this.h()},h(){d(s,"class","header"),d(I,"class","description"),d(N,"class","inputField"),d(N,"type","email"),d(N,"placeholder","Your email"),d(V,"class","button block"),V.disabled=a[0],d(e,"class","col-6 form-widget"),d(t,"class","row flex flex-center")},m(i,r){f(i,t,r),p(t,e),p(e,s),p(s,$),p(e,E),p(e,I),p(I,x),p(e,k),p(e,D),p(D,N),m(N,a[1]),p(e,L),p(e,U),p(U,V),p(V,O),p(O,T),z||(S=[g(N,"input",a[3]),g(V,"click",v(a[2]))],z=!0)},p(a,[t]){2&t&&N.value!==a[1]&&m(N,a[1]),1&t&&A!==(A=a[0]?"Loading":"Send magic link")&&w(T,A),1&t&&(V.disabled=a[0])},i:b,o:b,d(a){a&&u(t),z=!1,y(S)}}}function P(a,t,e){let s=!1,i="";return[s,i,async()=>{try{if(!i)throw new Error("Email is required!");e(0,s=!0);const{error:a}=await S.auth.signIn({email:i});if(a)throw a;alert("Check your email for the login link!")}catch(a){alert(a.error_description||a.message)}finally{e(0,s=!1)}},function(){i=this.value,e(1,i)}]}class B extends t{constructor(a){super(),e(this,a,P,A,s,{})}}function M(a){let t;return{c(){t=i("div"),this.h()},l(a){t=n(a,"DIV",{class:!0,style:!0}),o(t).forEach(u),this.h()},h(){d(t,"class","avatar no-image"),$(t,"height",a[0]+"px"),$(t,"width",a[0]+"px")},m(a,e){f(a,t,e)},p(a,e){1&e&&$(t,"height",a[0]+"px"),1&e&&$(t,"width",a[0]+"px")},d(a){a&&u(t)}}}function j(a){let t,e;return{c(){t=i("img"),this.h()},l(a){t=n(a,"IMG",{src:!0,alt:!0,class:!0,style:!0}),this.h()},h(){I(t.src,e=a[1])||d(t,"src",e),d(t,"alt","Avatar"),d(t,"class","avatar image"),$(t,"height",a[0]+"px"),$(t,"width",a[0]+"px")},m(a,e){f(a,t,e)},p(a,s){2&s&&!I(t.src,e=a[1])&&d(t,"src",e),1&s&&$(t,"height",a[0]+"px"),1&s&&$(t,"width",a[0]+"px")},d(a){a&&u(t)}}}function Y(a){let t,e,s,m,v,y,E,I,x,k=a[2]?"Uploading ...":"Upload";function D(a,t){return a[1]?j:M}let N=D(a),L=N(a);return{c(){t=i("div"),L.c(),e=l(),s=i("div"),m=i("label"),v=r(k),y=l(),E=i("input"),this.h()},l(a){t=n(a,"DIV",{});var i=o(t);L.l(i),e=h(i),s=n(i,"DIV",{style:!0});var r=o(s);m=n(r,"LABEL",{class:!0,for:!0});var l=o(m);v=c(l,k),l.forEach(u),y=h(r),E=n(r,"INPUT",{style:!0,type:!0,id:!0,accept:!0}),r.forEach(u),i.forEach(u),this.h()},h(){d(m,"class","button primary block"),d(m,"for","single"),$(E,"visibility","hidden"),$(E,"position","absolute"),d(E,"type","file"),d(E,"id","single"),d(E,"accept","image/*"),E.disabled=a[2],$(s,"width",a[0]+"px")},m(i,r){f(i,t,r),L.m(t,null),p(t,e),p(t,s),p(s,m),p(m,v),p(s,y),p(s,E),I||(x=g(E,"change",a[3]),I=!0)},p(a,[i]){N===(N=D(a))&&L?L.p(a,i):(L.d(1),L=N(a),L&&(L.c(),L.m(t,e))),4&i&&k!==(k=a[2]?"Uploading ...":"Upload")&&w(v,k),4&i&&(E.disabled=a[2]),1&i&&$(s,"width",a[0]+"px")},i:b,o:b,d(a){a&&u(t),L.d(),I=!1,x()}}}function C(a,t,e){const s=E();let{url:i}=t,{size:r}=t,l=null,n=!1;return a.$$set=a=>{"url"in a&&e(4,i=a.url),"size"in a&&e(0,r=a.size)},a.$$.update=()=>{16&a.$$.dirty&&i&&async function(a){try{const{data:t,error:s}=await S.storage.from("avatars").download(a);if(s)throw s;const i=URL.createObjectURL(t);e(1,l=i)}catch(t){console.log("Error downloading image: ",t.message)}}(i)},[r,l,n,async function(a){try{if(e(2,n=!0),!a.target.files||0===a.target.files.length)throw new Error("You must select an image to upload.");const t=a.target.files[0],i=t.name.split(".").pop(),r=`${`${Math.random()}.${i}`}`;let{error:l}=await S.storage.from("avatars").upload(r,t);if(l)throw l;s("uploaded",{filePath:r})}catch(t){alert(t.message)}finally{e(2,n=!1)}},i]}class J extends t{constructor(a){super(),e(this,a,C,Y,s,{url:4,size:0})}}function _(a){let t,e,s,v,b,$,E,I,V,O,T,z,S,A,P,B,M,j,Y,C,_,q,G,X,Q,R,W,H,F,K,Z,aa,ta=a[1]?"Loading ...":"Update";return _=new J({props:{url:a[4],size:150}}),_.$on("uploaded",a[8]),{c(){t=i("div"),e=i("div"),s=i("label"),v=r("Email"),b=l(),$=i("input"),I=l(),V=i("div"),O=i("label"),T=r("Name"),z=l(),S=i("input"),A=l(),P=i("div"),B=i("label"),M=r("Website"),j=l(),Y=i("input"),C=l(),x(_.$$.fragment),q=l(),G=i("div"),X=i("button"),Q=r(ta),R=l(),W=i("div"),H=i("button"),F=r("Sign Out"),this.h()},l(a){t=n(a,"DIV",{class:!0});var i=o(t);e=n(i,"DIV",{});var r=o(e);s=n(r,"LABEL",{for:!0});var l=o(s);v=c(l,"Email"),l.forEach(u),b=h(r),$=n(r,"INPUT",{id:!0,type:!0}),r.forEach(u),I=h(i),V=n(i,"DIV",{});var d=o(V);O=n(d,"LABEL",{for:!0});var f=o(O);T=c(f,"Name"),f.forEach(u),z=h(d),S=n(d,"INPUT",{id:!0,type:!0}),d.forEach(u),A=h(i),P=n(i,"DIV",{});var p=o(P);B=n(p,"LABEL",{for:!0});var m=o(B);M=c(m,"Website"),m.forEach(u),j=h(p),Y=n(p,"INPUT",{id:!0,type:!0}),p.forEach(u),C=h(i),k(_.$$.fragment,i),q=h(i),G=n(i,"DIV",{});var g=o(G);X=n(g,"BUTTON",{class:!0});var w=o(X);Q=c(w,ta),w.forEach(u),g.forEach(u),R=h(i),W=n(i,"DIV",{});var y=o(W);H=n(y,"BUTTON",{class:!0});var E=o(H);F=c(E,"Sign Out"),E.forEach(u),y.forEach(u),i.forEach(u),this.h()},h(){d(s,"for","email"),d($,"id","email"),d($,"type","text"),$.value=E=a[0].user.email,$.disabled=!0,d(O,"for","username"),d(S,"id","username"),d(S,"type","text"),d(B,"for","website"),d(Y,"id","website"),d(Y,"type","website"),d(X,"class","button block primary"),X.disabled=a[1],d(H,"class","button block"),d(t,"class","form-widget")},m(i,r){f(i,t,r),p(t,e),p(e,s),p(s,v),p(e,b),p(e,$),p(t,I),p(t,V),p(V,O),p(O,T),p(V,z),p(V,S),m(S,a[2]),p(t,A),p(t,P),p(P,B),p(B,M),p(P,j),p(P,Y),m(Y,a[3]),p(t,C),D(_,t,null),p(t,q),p(t,G),p(G,X),p(X,Q),p(t,R),p(t,W),p(W,H),p(H,F),K=!0,Z||(aa=[g(S,"input",a[6]),g(Y,"input",a[7]),g(X,"click",a[5]),g(H,"click",a[9])],Z=!0)},p(a,[t]){(!K||1&t&&E!==(E=a[0].user.email)&&$.value!==E)&&($.value=E),4&t&&S.value!==a[2]&&m(S,a[2]),8&t&&m(Y,a[3]);const e={};16&t&&(e.url=a[4]),_.$set(e),(!K||2&t)&&ta!==(ta=a[1]?"Loading ...":"Update")&&w(Q,ta),(!K||2&t)&&(X.disabled=a[1])},i(a){K||(N(_.$$.fragment,a),K=!0)},o(a){L(_.$$.fragment,a),K=!1},d(a){a&&u(t),U(_),Z=!1,y(aa)}}}function q(a,t,e){let{session:s}=t,i=!0,r=null,l=null,n=null;async function o(){try{e(1,i=!0);const a={id:S.auth.user().id,username:r,website:l,avatar_url:n,updated_at:new Date};let{error:t}=await S.from("profiles").upsert(a,{returning:"minimal"});if(t)throw t}catch(a){alert(a.message)}finally{e(1,i=!1)}}return a.$$set=a=>{"session"in a&&e(0,s=a.session)},a.$$.update=()=>{1&a.$$.dirty&&s&&async function(){try{e(1,i=!0);const a=S.auth.user();let{data:t,error:s,status:o}=await S.from("profiles").select("username, website, avatar_url").eq("id",a.id).single();if(s&&406!==o)throw s;t&&(e(2,r=t.username),e(3,l=t.website),e(4,n=t.avatar_url))}catch(a){alert(a.message)}finally{e(1,i=!1)}}()},[s,i,r,l,n,o,function(){r=this.value,e(2,r)},function(){l=this.value,e(3,l)},a=>{e(4,n=a.detail.filePath),o()},()=>S.auth.signOut()]}class G extends t{constructor(a){super(),e(this,a,q,_,s,{session:0})}}function X(a){let t,e,i=a[0].user.key,r=R(a);return{c(){r.c(),t=z()},l(a){r.l(a),t=z()},m(a,s){r.m(a,s),f(a,t,s),e=!0},p(a,e){1&e&&s(i,i=a[0].user.key)?(T(),L(r,1,1,b),V(),r=R(a),r.c(),N(r),r.m(t.parentNode,t)):r.p(a,e)},i(a){e||(N(r),e=!0)},o(a){L(r),e=!1},d(a){a&&u(t),r.d(a)}}}function Q(a){let t,e;return t=new B({}),{c(){x(t.$$.fragment)},l(a){k(t.$$.fragment,a)},m(a,s){D(t,a,s),e=!0},p:b,i(a){e||(N(t.$$.fragment,a),e=!0)},o(a){L(t.$$.fragment,a),e=!1},d(a){U(t,a)}}}function R(a){let t,e;return t=new G({props:{session:a[0]}}),{c(){x(t.$$.fragment)},l(a){k(t.$$.fragment,a)},m(a,s){D(t,a,s),e=!0},p(a,e){const s={};1&e&&(s.session=a[0]),t.$set(s)},i(a){e||(N(t.$$.fragment,a),e=!0)},o(a){L(t.$$.fragment,a),e=!1},d(a){U(t,a)}}}function W(a){let t,e,s,r;const l=[Q,X],c=[];function h(a,t){return a[0]?1:0}return e=h(a),s=c[e]=l[e](a),{c(){t=i("div"),s.c(),this.h()},l(a){t=n(a,"DIV",{class:!0,style:!0});var e=o(t);s.l(e),e.forEach(u),this.h()},h(){d(t,"class","container"),$(t,"padding","50px 0 100px 0")},m(a,s){f(a,t,s),c[e].m(t,null),r=!0},p(a,[i]){let r=e;e=h(a),e===r?c[e].p(a,i):(T(),L(c[r],1,1,(()=>{c[r]=null})),V(),s=c[e],s?s.p(a,i):(s=c[e]=l[e](a),s.c()),N(s,1),s.m(t,null))},i(a){r||(N(s),r=!0)},o(a){L(s),r=!1},d(a){a&&u(t),c[e].d()}}}function H(a,t,e){let s;return O((()=>{e(0,s=S.auth.session()),S.auth.onAuthStateChange(((a,t)=>{e(0,s=t)}))})),[s]}class F extends t{constructor(a){super(),e(this,a,H,W,s,{})}}export{F as default};
