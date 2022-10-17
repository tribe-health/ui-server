var Se=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},he={exports:{}},xe={exports:{}},me={exports:{}};(function(_){(function(D){var L,A=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,b=Math.ceil,j=Math.floor,R="[BigNumber Error] ",v=R+"Number primitive has more than 15 significant digits: ",H=1e14,N=14,C=9007199254740991,X=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],B=1e7,I=1e9;function K(E){var m,F,q,g=h.prototype={constructor:h,toString:null,valueOf:null},$=new h(1),M=20,U=4,Q=-7,Z=21,ue=-1e7,te=1e7,se=!1,ce=1,oe=0,we={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xA0",suffix:""},le="0123456789abcdefghijklmnopqrstuvwxyz",de=!0;function h(e,r){var t,s,i,o,c,n,f,l,u=this;if(!(u instanceof h))return new h(e,r);if(r==null){if(e&&e._isBigNumber===!0){u.s=e.s,!e.c||e.e>te?u.c=u.e=null:e.e<ue?u.c=[u.e=0]:(u.e=e.e,u.c=e.c.slice());return}if((n=typeof e=="number")&&e*0==0){if(u.s=1/e<0?(e=-e,-1):1,e===~~e){for(o=0,c=e;c>=10;c/=10,o++);o>te?u.c=u.e=null:(u.e=o,u.c=[e]);return}l=String(e)}else{if(!A.test(l=String(e)))return q(u,l,n);u.s=l.charCodeAt(0)==45?(l=l.slice(1),-1):1}(o=l.indexOf("."))>-1&&(l=l.replace(".","")),(c=l.search(/e/i))>0?(o<0&&(o=c),o+=+l.slice(c+1),l=l.substring(0,c)):o<0&&(o=l.length)}else{if(w(r,2,le.length,"Base"),r==10&&de)return u=new h(e),ee(u,M+u.e+1,U);if(l=String(e),n=typeof e=="number"){if(e*0!=0)return q(u,l,n,r);if(u.s=1/e<0?(l=l.slice(1),-1):1,h.DEBUG&&l.replace(/^0\.0*|\./,"").length>15)throw Error(v+e)}else u.s=l.charCodeAt(0)===45?(l=l.slice(1),-1):1;for(t=le.slice(0,r),o=c=0,f=l.length;c<f;c++)if(t.indexOf(s=l.charAt(c))<0){if(s=="."){if(c>o){o=f;continue}}else if(!i&&(l==l.toUpperCase()&&(l=l.toLowerCase())||l==l.toLowerCase()&&(l=l.toUpperCase()))){i=!0,c=-1,o=0;continue}return q(u,String(e),n,r)}n=!1,l=F(l,r,10,u.s),(o=l.indexOf("."))>-1?l=l.replace(".",""):o=l.length}for(c=0;l.charCodeAt(c)===48;c++);for(f=l.length;l.charCodeAt(--f)===48;);if(l=l.slice(c,++f)){if(f-=c,n&&h.DEBUG&&f>15&&(e>C||e!==j(e)))throw Error(v+u.s*e);if((o=o-c-1)>te)u.c=u.e=null;else if(o<ue)u.c=[u.e=0];else{if(u.e=o,u.c=[],c=(o+1)%N,o<0&&(c+=N),c<f){for(c&&u.c.push(+l.slice(0,c)),f-=N;c<f;)u.c.push(+l.slice(c,c+=N));c=N-(l=l.slice(c)).length}else c-=f;for(;c--;l+="0");u.c.push(+l)}}else u.c=[u.e=0]}h.clone=K,h.ROUND_UP=0,h.ROUND_DOWN=1,h.ROUND_CEIL=2,h.ROUND_FLOOR=3,h.ROUND_HALF_UP=4,h.ROUND_HALF_DOWN=5,h.ROUND_HALF_EVEN=6,h.ROUND_HALF_CEIL=7,h.ROUND_HALF_FLOOR=8,h.EUCLID=9,h.config=h.set=function(e){var r,t;if(e!=null)if(typeof e=="object"){if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(t=e[r],w(t,0,I,r),M=t),e.hasOwnProperty(r="ROUNDING_MODE")&&(t=e[r],w(t,0,8,r),U=t),e.hasOwnProperty(r="EXPONENTIAL_AT")&&(t=e[r],t&&t.pop?(w(t[0],-I,0,r),w(t[1],0,I,r),Q=t[0],Z=t[1]):(w(t,-I,I,r),Q=-(Z=t<0?-t:t))),e.hasOwnProperty(r="RANGE"))if(t=e[r],t&&t.pop)w(t[0],-I,-1,r),w(t[1],1,I,r),ue=t[0],te=t[1];else if(w(t,-I,I,r),t)ue=-(te=t<0?-t:t);else throw Error(R+r+" cannot be zero: "+t);if(e.hasOwnProperty(r="CRYPTO"))if(t=e[r],t===!!t)if(t)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))se=t;else throw se=!t,Error(R+"crypto unavailable");else se=t;else throw Error(R+r+" not true or false: "+t);if(e.hasOwnProperty(r="MODULO_MODE")&&(t=e[r],w(t,0,9,r),ce=t),e.hasOwnProperty(r="POW_PRECISION")&&(t=e[r],w(t,0,I,r),oe=t),e.hasOwnProperty(r="FORMAT"))if(t=e[r],typeof t=="object")we=t;else throw Error(R+r+" not an object: "+t);if(e.hasOwnProperty(r="ALPHABET"))if(t=e[r],typeof t=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(t))de=t.slice(0,10)=="0123456789",le=t;else throw Error(R+r+" invalid: "+t)}else throw Error(R+"Object expected: "+e);return{DECIMAL_PLACES:M,ROUNDING_MODE:U,EXPONENTIAL_AT:[Q,Z],RANGE:[ue,te],CRYPTO:se,MODULO_MODE:ce,POW_PRECISION:oe,FORMAT:we,ALPHABET:le}},h.isBigNumber=function(e){if(!e||e._isBigNumber!==!0)return!1;if(!h.DEBUG)return!0;var r,t,s=e.c,i=e.e,o=e.s;e:if({}.toString.call(s)=="[object Array]"){if((o===1||o===-1)&&i>=-I&&i<=I&&i===j(i)){if(s[0]===0){if(i===0&&s.length===1)return!0;break e}if(r=(i+1)%N,r<1&&(r+=N),String(s[0]).length==r){for(r=0;r<s.length;r++)if(t=s[r],t<0||t>=H||t!==j(t))break e;if(t!==0)return!0}}}else if(s===null&&i===null&&(o===null||o===1||o===-1))return!0;throw Error(R+"Invalid BigNumber: "+e)},h.maximum=h.max=function(){return ve(arguments,g.lt)},h.minimum=h.min=function(){return ve(arguments,g.gt)},h.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return j(Math.random()*e)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(t){var s,i,o,c,n,f=0,l=[],u=new h($);if(t==null?t=M:w(t,0,I),c=b(t/N),se)if(crypto.getRandomValues){for(s=crypto.getRandomValues(new Uint32Array(c*=2));f<c;)n=s[f]*131072+(s[f+1]>>>11),n>=9e15?(i=crypto.getRandomValues(new Uint32Array(2)),s[f]=i[0],s[f+1]=i[1]):(l.push(n%1e14),f+=2);f=c/2}else if(crypto.randomBytes){for(s=crypto.randomBytes(c*=7);f<c;)n=(s[f]&31)*281474976710656+s[f+1]*1099511627776+s[f+2]*4294967296+s[f+3]*16777216+(s[f+4]<<16)+(s[f+5]<<8)+s[f+6],n>=9e15?crypto.randomBytes(7).copy(s,f):(l.push(n%1e14),f+=7);f=c/7}else throw se=!1,Error(R+"crypto unavailable");if(!se)for(;f<c;)n=r(),n<9e15&&(l[f++]=n%1e14);for(c=l[--f],t%=N,c&&t&&(n=X[N-t],l[f]=j(c/n)*n);l[f]===0;l.pop(),f--);if(f<0)l=[o=0];else{for(o=-1;l[0]===0;l.splice(0,1),o-=N);for(f=1,n=l[0];n>=10;n/=10,f++);f<N&&(o-=N-f)}return u.e=o,u.c=l,u}}(),h.sum=function(){for(var e=1,r=arguments,t=new h(r[0]);e<r.length;)t=t.plus(r[e++]);return t},F=function(){var e="0123456789";function r(t,s,i,o){for(var c,n=[0],f,l=0,u=t.length;l<u;){for(f=n.length;f--;n[f]*=s);for(n[0]+=o.indexOf(t.charAt(l++)),c=0;c<n.length;c++)n[c]>i-1&&(n[c+1]==null&&(n[c+1]=0),n[c+1]+=n[c]/i|0,n[c]%=i)}return n.reverse()}return function(t,s,i,o,c){var n,f,l,u,a,p,d,S,k=t.indexOf("."),z=M,y=U;for(k>=0&&(u=oe,oe=0,t=t.replace(".",""),S=new h(s),p=S.pow(t.length-k),oe=u,S.c=r(W(x(p.c),p.e,"0"),10,i,e),S.e=S.c.length),d=r(t,s,i,c?(n=le,e):(n=e,le)),l=u=d.length;d[--u]==0;d.pop());if(!d[0])return n.charAt(0);if(k<0?--l:(p.c=d,p.e=l,p.s=o,p=m(p,S,z,y,i),d=p.c,a=p.r,l=p.e),f=l+z+1,k=d[f],u=i/2,a=a||f<0||d[f+1]!=null,a=y<4?(k!=null||a)&&(y==0||y==(p.s<0?3:2)):k>u||k==u&&(y==4||a||y==6&&d[f-1]&1||y==(p.s<0?8:7)),f<1||!d[0])t=a?W(n.charAt(1),-z,n.charAt(0)):n.charAt(0);else{if(d.length=f,a)for(--i;++d[--f]>i;)d[f]=0,f||(++l,d=[1].concat(d));for(u=d.length;!d[--u];);for(k=0,t="";k<=u;t+=n.charAt(d[k++]));t=W(t,l,n.charAt(0))}return t}}(),m=function(){function e(s,i,o){var c,n,f,l,u=0,a=s.length,p=i%B,d=i/B|0;for(s=s.slice();a--;)f=s[a]%B,l=s[a]/B|0,c=d*f+l*p,n=p*f+c%B*B+u,u=(n/o|0)+(c/B|0)+d*l,s[a]=n%o;return u&&(s=[u].concat(s)),s}function r(s,i,o,c){var n,f;if(o!=c)f=o>c?1:-1;else for(n=f=0;n<o;n++)if(s[n]!=i[n]){f=s[n]>i[n]?1:-1;break}return f}function t(s,i,o,c){for(var n=0;o--;)s[o]-=n,n=s[o]<i[o]?1:0,s[o]=n*c+s[o]-i[o];for(;!s[0]&&s.length>1;s.splice(0,1));}return function(s,i,o,c,n){var f,l,u,a,p,d,S,k,z,y,P,V,ge,Ee,Oe,ie,ae,re=s.s==i.s?1:-1,Y=s.c,G=i.c;if(!Y||!Y[0]||!G||!G[0])return new h(!s.s||!i.s||(Y?G&&Y[0]==G[0]:!G)?NaN:Y&&Y[0]==0||!G?re*0:re/0);for(k=new h(re),z=k.c=[],l=s.e-i.e,re=o+l+1,n||(n=H,l=O(s.e/N)-O(i.e/N),re=re/N|0),u=0;G[u]==(Y[u]||0);u++);if(G[u]>(Y[u]||0)&&l--,re<0)z.push(1),a=!0;else{for(Ee=Y.length,ie=G.length,u=0,re+=2,p=j(n/(G[0]+1)),p>1&&(G=e(G,p,n),Y=e(Y,p,n),ie=G.length,Ee=Y.length),ge=ie,y=Y.slice(0,ie),P=y.length;P<ie;y[P++]=0);ae=G.slice(),ae=[0].concat(ae),Oe=G[0],G[1]>=n/2&&Oe++;do{if(p=0,f=r(G,y,ie,P),f<0){if(V=y[0],ie!=P&&(V=V*n+(y[1]||0)),p=j(V/Oe),p>1)for(p>=n&&(p=n-1),d=e(G,p,n),S=d.length,P=y.length;r(d,y,S,P)==1;)p--,t(d,ie<S?ae:G,S,n),S=d.length,f=1;else p==0&&(f=p=1),d=G.slice(),S=d.length;if(S<P&&(d=[0].concat(d)),t(y,d,P,n),P=y.length,f==-1)for(;r(G,y,ie,P)<1;)p++,t(y,ie<P?ae:G,P,n),P=y.length}else f===0&&(p++,y=[0]);z[u++]=p,y[0]?y[P++]=Y[ge]||0:(y=[Y[ge]],P=1)}while((ge++<Ee||y[0]!=null)&&re--);a=y[0]!=null,z[0]||z.splice(0,1)}if(n==H){for(u=1,re=z[0];re>=10;re/=10,u++);ee(k,o+(k.e=u+l*N-1)+1,c,a)}else k.e=l,k.r=+a;return k}}();function Ne(e,r,t,s){var i,o,c,n,f;if(t==null?t=U:w(t,0,8),!e.c)return e.toString();if(i=e.c[0],c=e.e,r==null)f=x(e.c),f=s==1||s==2&&(c<=Q||c>=Z)?ne(f,c):W(f,c,"0");else if(e=ee(new h(e),r,t),o=e.e,f=x(e.c),n=f.length,s==1||s==2&&(r<=o||o<=Q)){for(;n<r;f+="0",n++);f=ne(f,o)}else if(r-=c,f=W(f,o,"0"),o+1>n){if(--r>0)for(f+=".";r--;f+="0");}else if(r+=o-n,r>0)for(o+1==n&&(f+=".");r--;f+="0");return e.s<0&&i?"-"+f:f}function ve(e,r){for(var t,s=1,i=new h(e[0]);s<e.length;s++)if(t=new h(e[s]),t.s)r.call(i,t)&&(i=t);else{i=t;break}return i}function Ae(e,r,t){for(var s=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,s++);return(t=s+t*N-1)>te?e.c=e.e=null:t<ue?e.c=[e.e=0]:(e.e=t,e.c=r),e}q=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,t=/^\.([^.]+)$/,s=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,c,n,f){var l,u=n?c:c.replace(i,"");if(s.test(u))o.s=isNaN(u)?null:u<0?-1:1;else{if(!n&&(u=u.replace(e,function(a,p,d){return l=(d=d.toLowerCase())=="x"?16:d=="b"?2:8,!f||f==l?p:a}),f&&(l=f,u=u.replace(r,"$1").replace(t,"0.$1")),c!=u))return new h(u,l);if(h.DEBUG)throw Error(R+"Not a"+(f?" base "+f:"")+" number: "+c);o.s=null}o.c=o.e=null}}();function ee(e,r,t,s){var i,o,c,n,f,l,u,a=e.c,p=X;if(a){e:{for(i=1,n=a[0];n>=10;n/=10,i++);if(o=r-i,o<0)o+=N,c=r,f=a[l=0],u=f/p[i-c-1]%10|0;else if(l=b((o+1)/N),l>=a.length)if(s){for(;a.length<=l;a.push(0));f=u=0,i=1,o%=N,c=o-N+1}else break e;else{for(f=n=a[l],i=1;n>=10;n/=10,i++);o%=N,c=o-N+i,u=c<0?0:f/p[i-c-1]%10|0}if(s=s||r<0||a[l+1]!=null||(c<0?f:f%p[i-c-1]),s=t<4?(u||s)&&(t==0||t==(e.s<0?3:2)):u>5||u==5&&(t==4||s||t==6&&(o>0?c>0?f/p[i-c]:0:a[l-1])%10&1||t==(e.s<0?8:7)),r<1||!a[0])return a.length=0,s?(r-=e.e+1,a[0]=p[(N-r%N)%N],e.e=-r||0):a[0]=e.e=0,e;if(o==0?(a.length=l,n=1,l--):(a.length=l+1,n=p[N-o],a[l]=c>0?j(f/p[i-c]%p[c])*n:0),s)for(;;)if(l==0){for(o=1,c=a[0];c>=10;c/=10,o++);for(c=a[0]+=n,n=1;c>=10;c/=10,n++);o!=n&&(e.e++,a[0]==H&&(a[0]=1));break}else{if(a[l]+=n,a[l]!=H)break;a[l--]=0,n=1}for(o=a.length;a[--o]===0;a.pop());}e.e>te?e.c=e.e=null:e.e<ue&&(e.c=[e.e=0])}return e}function fe(e){var r,t=e.e;return t===null?e.toString():(r=x(e.c),r=t<=Q||t>=Z?ne(r,t):W(r,t,"0"),e.s<0?"-"+r:r)}return g.absoluteValue=g.abs=function(){var e=new h(this);return e.s<0&&(e.s=1),e},g.comparedTo=function(e,r){return T(this,new h(e,r))},g.decimalPlaces=g.dp=function(e,r){var t,s,i,o=this;if(e!=null)return w(e,0,I),r==null?r=U:w(r,0,8),ee(new h(o),e+o.e+1,r);if(!(t=o.c))return null;if(s=((i=t.length-1)-O(this.e/N))*N,i=t[i])for(;i%10==0;i/=10,s--);return s<0&&(s=0),s},g.dividedBy=g.div=function(e,r){return m(this,new h(e,r),M,U)},g.dividedToIntegerBy=g.idiv=function(e,r){return m(this,new h(e,r),0,1)},g.exponentiatedBy=g.pow=function(e,r){var t,s,i,o,c,n,f,l,u,a=this;if(e=new h(e),e.c&&!e.isInteger())throw Error(R+"Exponent not an integer: "+fe(e));if(r!=null&&(r=new h(r)),n=e.e>14,!a.c||!a.c[0]||a.c[0]==1&&!a.e&&a.c.length==1||!e.c||!e.c[0])return u=new h(Math.pow(+fe(a),n?2-J(e):+fe(e))),r?u.mod(r):u;if(f=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new h(NaN);s=!f&&a.isInteger()&&r.isInteger(),s&&(a=a.mod(r))}else{if(e.e>9&&(a.e>0||a.e<-1||(a.e==0?a.c[0]>1||n&&a.c[1]>=24e7:a.c[0]<8e13||n&&a.c[0]<=9999975e7)))return o=a.s<0&&J(e)?-0:0,a.e>-1&&(o=1/o),new h(f?1/o:o);oe&&(o=b(oe/N+2))}for(n?(t=new h(.5),f&&(e.s=1),l=J(e)):(i=Math.abs(+fe(e)),l=i%2),u=new h($);;){if(l){if(u=u.times(a),!u.c)break;o?u.c.length>o&&(u.c.length=o):s&&(u=u.mod(r))}if(i){if(i=j(i/2),i===0)break;l=i%2}else if(e=e.times(t),ee(e,e.e+1,1),e.e>14)l=J(e);else{if(i=+fe(e),i===0)break;l=i%2}a=a.times(a),o?a.c&&a.c.length>o&&(a.c.length=o):s&&(a=a.mod(r))}return s?u:(f&&(u=$.div(u)),r?u.mod(r):o?ee(u,oe,U,c):u)},g.integerValue=function(e){var r=new h(this);return e==null?e=U:w(e,0,8),ee(r,r.e+1,e)},g.isEqualTo=g.eq=function(e,r){return T(this,new h(e,r))===0},g.isFinite=function(){return!!this.c},g.isGreaterThan=g.gt=function(e,r){return T(this,new h(e,r))>0},g.isGreaterThanOrEqualTo=g.gte=function(e,r){return(r=T(this,new h(e,r)))===1||r===0},g.isInteger=function(){return!!this.c&&O(this.e/N)>this.c.length-2},g.isLessThan=g.lt=function(e,r){return T(this,new h(e,r))<0},g.isLessThanOrEqualTo=g.lte=function(e,r){return(r=T(this,new h(e,r)))===-1||r===0},g.isNaN=function(){return!this.s},g.isNegative=function(){return this.s<0},g.isPositive=function(){return this.s>0},g.isZero=function(){return!!this.c&&this.c[0]==0},g.minus=function(e,r){var t,s,i,o,c=this,n=c.s;if(e=new h(e,r),r=e.s,!n||!r)return new h(NaN);if(n!=r)return e.s=-r,c.plus(e);var f=c.e/N,l=e.e/N,u=c.c,a=e.c;if(!f||!l){if(!u||!a)return u?(e.s=-r,e):new h(a?c:NaN);if(!u[0]||!a[0])return a[0]?(e.s=-r,e):new h(u[0]?c:U==3?-0:0)}if(f=O(f),l=O(l),u=u.slice(),n=f-l){for((o=n<0)?(n=-n,i=u):(l=f,i=a),i.reverse(),r=n;r--;i.push(0));i.reverse()}else for(s=(o=(n=u.length)<(r=a.length))?n:r,n=r=0;r<s;r++)if(u[r]!=a[r]){o=u[r]<a[r];break}if(o&&(i=u,u=a,a=i,e.s=-e.s),r=(s=a.length)-(t=u.length),r>0)for(;r--;u[t++]=0);for(r=H-1;s>n;){if(u[--s]<a[s]){for(t=s;t&&!u[--t];u[t]=r);--u[t],u[s]+=H}u[s]-=a[s]}for(;u[0]==0;u.splice(0,1),--l);return u[0]?Ae(e,u,l):(e.s=U==3?-1:1,e.c=[e.e=0],e)},g.modulo=g.mod=function(e,r){var t,s,i=this;return e=new h(e,r),!i.c||!e.s||e.c&&!e.c[0]?new h(NaN):!e.c||i.c&&!i.c[0]?new h(i):(ce==9?(s=e.s,e.s=1,t=m(i,e,0,3),e.s=s,t.s*=s):t=m(i,e,0,ce),e=i.minus(t.times(e)),!e.c[0]&&ce==1&&(e.s=i.s),e)},g.multipliedBy=g.times=function(e,r){var t,s,i,o,c,n,f,l,u,a,p,d,S,k,z,y=this,P=y.c,V=(e=new h(e,r)).c;if(!P||!V||!P[0]||!V[0])return!y.s||!e.s||P&&!P[0]&&!V||V&&!V[0]&&!P?e.c=e.e=e.s=null:(e.s*=y.s,!P||!V?e.c=e.e=null:(e.c=[0],e.e=0)),e;for(s=O(y.e/N)+O(e.e/N),e.s*=y.s,f=P.length,a=V.length,f<a&&(S=P,P=V,V=S,i=f,f=a,a=i),i=f+a,S=[];i--;S.push(0));for(k=H,z=B,i=a;--i>=0;){for(t=0,p=V[i]%z,d=V[i]/z|0,c=f,o=i+c;o>i;)l=P[--c]%z,u=P[c]/z|0,n=d*l+u*p,l=p*l+n%z*z+S[o]+t,t=(l/k|0)+(n/z|0)+d*u,S[o--]=l%k;S[o]=t}return t?++s:S.splice(0,1),Ae(e,S,s)},g.negated=function(){var e=new h(this);return e.s=-e.s||null,e},g.plus=function(e,r){var t,s=this,i=s.s;if(e=new h(e,r),r=e.s,!i||!r)return new h(NaN);if(i!=r)return e.s=-r,s.minus(e);var o=s.e/N,c=e.e/N,n=s.c,f=e.c;if(!o||!c){if(!n||!f)return new h(i/0);if(!n[0]||!f[0])return f[0]?e:new h(n[0]?s:i*0)}if(o=O(o),c=O(c),n=n.slice(),i=o-c){for(i>0?(c=o,t=f):(i=-i,t=n),t.reverse();i--;t.push(0));t.reverse()}for(i=n.length,r=f.length,i-r<0&&(t=f,f=n,n=t,r=i),i=0;r;)i=(n[--r]=n[r]+f[r]+i)/H|0,n[r]=H===n[r]?0:n[r]%H;return i&&(n=[i].concat(n),++c),Ae(e,n,c)},g.precision=g.sd=function(e,r){var t,s,i,o=this;if(e!=null&&e!==!!e)return w(e,1,I),r==null?r=U:w(r,0,8),ee(new h(o),e,r);if(!(t=o.c))return null;if(i=t.length-1,s=i*N+1,i=t[i]){for(;i%10==0;i/=10,s--);for(i=t[0];i>=10;i/=10,s++);}return e&&o.e+1>s&&(s=o.e+1),s},g.shiftedBy=function(e){return w(e,-C,C),this.times("1e"+e)},g.squareRoot=g.sqrt=function(){var e,r,t,s,i,o=this,c=o.c,n=o.s,f=o.e,l=M+4,u=new h("0.5");if(n!==1||!c||!c[0])return new h(!n||n<0&&(!c||c[0])?NaN:c?o:1/0);if(n=Math.sqrt(+fe(o)),n==0||n==1/0?(r=x(c),(r.length+f)%2==0&&(r+="0"),n=Math.sqrt(+r),f=O((f+1)/2)-(f<0||f%2),n==1/0?r="5e"+f:(r=n.toExponential(),r=r.slice(0,r.indexOf("e")+1)+f),t=new h(r)):t=new h(n+""),t.c[0]){for(f=t.e,n=f+l,n<3&&(n=0);;)if(i=t,t=u.times(i.plus(m(o,i,l,1))),x(i.c).slice(0,n)===(r=x(t.c)).slice(0,n))if(t.e<f&&--n,r=r.slice(n-3,n+1),r=="9999"||!s&&r=="4999"){if(!s&&(ee(i,i.e+M+2,0),i.times(i).eq(o))){t=i;break}l+=4,n+=4,s=1}else{(!+r||!+r.slice(1)&&r.charAt(0)=="5")&&(ee(t,t.e+M+2,1),e=!t.times(t).eq(o));break}}return ee(t,t.e+M+1,U,e)},g.toExponential=function(e,r){return e!=null&&(w(e,0,I),e++),Ne(this,e,r,1)},g.toFixed=function(e,r){return e!=null&&(w(e,0,I),e=e+this.e+1),Ne(this,e,r)},g.toFormat=function(e,r,t){var s,i=this;if(t==null)e!=null&&r&&typeof r=="object"?(t=r,r=null):e&&typeof e=="object"?(t=e,e=r=null):t=we;else if(typeof t!="object")throw Error(R+"Argument not an object: "+t);if(s=i.toFixed(e,r),i.c){var o,c=s.split("."),n=+t.groupSize,f=+t.secondaryGroupSize,l=t.groupSeparator||"",u=c[0],a=c[1],p=i.s<0,d=p?u.slice(1):u,S=d.length;if(f&&(o=n,n=f,f=o,S-=o),n>0&&S>0){for(o=S%n||n,u=d.substr(0,o);o<S;o+=n)u+=l+d.substr(o,n);f>0&&(u+=l+d.slice(o)),p&&(u="-"+u)}s=a?u+(t.decimalSeparator||"")+((f=+t.fractionGroupSize)?a.replace(new RegExp("\\d{"+f+"}\\B","g"),"$&"+(t.fractionGroupSeparator||"")):a):u}return(t.prefix||"")+s+(t.suffix||"")},g.toFraction=function(e){var r,t,s,i,o,c,n,f,l,u,a,p,d=this,S=d.c;if(e!=null&&(n=new h(e),!n.isInteger()&&(n.c||n.s!==1)||n.lt($)))throw Error(R+"Argument "+(n.isInteger()?"out of range: ":"not an integer: ")+fe(n));if(!S)return new h(d);for(r=new h($),l=t=new h($),s=f=new h($),p=x(S),o=r.e=p.length-d.e-1,r.c[0]=X[(c=o%N)<0?N+c:c],e=!e||n.comparedTo(r)>0?o>0?r:l:n,c=te,te=1/0,n=new h(p),f.c[0]=0;u=m(n,r,0,1),i=t.plus(u.times(s)),i.comparedTo(e)!=1;)t=s,s=i,l=f.plus(u.times(i=l)),f=i,r=n.minus(u.times(i=r)),n=i;return i=m(e.minus(t),s,0,1),f=f.plus(i.times(l)),t=t.plus(i.times(s)),f.s=l.s=d.s,o=o*2,a=m(l,s,o,U).minus(d).abs().comparedTo(m(f,t,o,U).minus(d).abs())<1?[l,s]:[f,t],te=c,a},g.toNumber=function(){return+fe(this)},g.toPrecision=function(e,r){return e!=null&&w(e,1,I),Ne(this,e,r,2)},g.toString=function(e){var r,t=this,s=t.s,i=t.e;return i===null?s?(r="Infinity",s<0&&(r="-"+r)):r="NaN":(e==null?r=i<=Q||i>=Z?ne(x(t.c),i):W(x(t.c),i,"0"):e===10&&de?(t=ee(new h(t),M+i+1,U),r=W(x(t.c),t.e,"0")):(w(e,2,le.length,"Base"),r=F(W(x(t.c),i,"0"),10,e,s,!0)),s<0&&t.c[0]&&(r="-"+r)),r},g.valueOf=g.toJSON=function(){return fe(this)},g._isBigNumber=!0,E!=null&&h.set(E),h}function O(E){var m=E|0;return E>0||E===m?m:m-1}function x(E){for(var m,F,q=1,g=E.length,$=E[0]+"";q<g;){for(m=E[q++]+"",F=N-m.length;F--;m="0"+m);$+=m}for(g=$.length;$.charCodeAt(--g)===48;);return $.slice(0,g+1||1)}function T(E,m){var F,q,g=E.c,$=m.c,M=E.s,U=m.s,Q=E.e,Z=m.e;if(!M||!U)return null;if(F=g&&!g[0],q=$&&!$[0],F||q)return F?q?0:-U:M;if(M!=U)return M;if(F=M<0,q=Q==Z,!g||!$)return q?0:!g^F?1:-1;if(!q)return Q>Z^F?1:-1;for(U=(Q=g.length)<(Z=$.length)?Q:Z,M=0;M<U;M++)if(g[M]!=$[M])return g[M]>$[M]^F?1:-1;return Q==Z?0:Q>Z^F?1:-1}function w(E,m,F,q){if(E<m||E>F||E!==j(E))throw Error(R+(q||"Argument")+(typeof E=="number"?E<m||E>F?" out of range: ":" not an integer: ":" not a primitive number: ")+String(E))}function J(E){var m=E.c.length-1;return O(E.e/N)==m&&E.c[m]%2!=0}function ne(E,m){return(E.length>1?E.charAt(0)+"."+E.slice(1):E)+(m<0?"e":"e+")+m}function W(E,m,F){var q,g;if(m<0){for(g=F+".";++m;g+=F);E=g+E}else if(q=E.length,++m>q){for(g=F,m-=q;--m;g+=F);E+=g}else m<q&&(E=E.slice(0,m)+"."+E.slice(m));return E}L=K(),L.default=L.BigNumber=L,_.exports?_.exports=L:(D||(D=typeof self<"u"&&self?self:window),D.BigNumber=L)})(Se)})(me);(function(_){var D=me.exports,L=_.exports;(function(){var A=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,b,j,R={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},v;function H(C){return A.lastIndex=0,A.test(C)?'"'+C.replace(A,function(X){var B=R[X];return typeof B=="string"?B:"\\u"+("0000"+X.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+C+'"'}function N(C,X){var B,I,K,O,x=b,T,w=X[C],J=w!=null&&(w instanceof D||D.isBigNumber(w));switch(w&&typeof w=="object"&&typeof w.toJSON=="function"&&(w=w.toJSON(C)),typeof v=="function"&&(w=v.call(X,C,w)),typeof w){case"string":return J?w:H(w);case"number":return isFinite(w)?String(w):"null";case"boolean":case"null":case"bigint":return String(w);case"object":if(!w)return"null";if(b+=j,T=[],Object.prototype.toString.apply(w)==="[object Array]"){for(O=w.length,B=0;B<O;B+=1)T[B]=N(B,w)||"null";return K=T.length===0?"[]":b?`[
`+b+T.join(`,
`+b)+`
`+x+"]":"["+T.join(",")+"]",b=x,K}if(v&&typeof v=="object")for(O=v.length,B=0;B<O;B+=1)typeof v[B]=="string"&&(I=v[B],K=N(I,w),K&&T.push(H(I)+(b?": ":":")+K));else Object.keys(w).forEach(function(ne){var W=N(ne,w);W&&T.push(H(ne)+(b?": ":":")+W)});return K=T.length===0?"{}":b?`{
`+b+T.join(`,
`+b)+`
`+x+"}":"{"+T.join(",")+"}",b=x,K}}typeof L.stringify!="function"&&(L.stringify=function(C,X,B){var I;if(b="",j="",typeof B=="number")for(I=0;I<B;I+=1)j+=" ";else typeof B=="string"&&(j=B);if(v=X,X&&typeof X!="function"&&(typeof X!="object"||typeof X.length!="number"))throw new Error("JSON.stringify");return N("",{"":C})})})()})(xe);var pe=null;const _e=/(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,Ie=/(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;var Pe=function(_){var D={strict:!1,storeAsString:!1,alwaysParseAsBig:!1,useNativeBigInt:!1,protoAction:"error",constructorAction:"error"};if(_!=null){if(_.strict===!0&&(D.strict=!0),_.storeAsString===!0&&(D.storeAsString=!0),D.alwaysParseAsBig=_.alwaysParseAsBig===!0?_.alwaysParseAsBig:!1,D.useNativeBigInt=_.useNativeBigInt===!0?_.useNativeBigInt:!1,typeof _.constructorAction<"u")if(_.constructorAction==="error"||_.constructorAction==="ignore"||_.constructorAction==="preserve")D.constructorAction=_.constructorAction;else throw new Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${_.constructorAction}`);if(typeof _.protoAction<"u")if(_.protoAction==="error"||_.protoAction==="ignore"||_.protoAction==="preserve")D.protoAction=_.protoAction;else throw new Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${_.protoAction}`)}var L,A,b={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},j,R=function(O){throw{name:"SyntaxError",message:O,at:L,text:j}},v=function(O){return O&&O!==A&&R("Expected '"+O+"' instead of '"+A+"'"),A=j.charAt(L),L+=1,A},H=function(){var O,x="";for(A==="-"&&(x="-",v("-"));A>="0"&&A<="9";)x+=A,v();if(A===".")for(x+=".";v()&&A>="0"&&A<="9";)x+=A;if(A==="e"||A==="E")for(x+=A,v(),(A==="-"||A==="+")&&(x+=A,v());A>="0"&&A<="9";)x+=A,v();if(O=+x,!isFinite(O))R("Bad number");else return pe==null&&(pe=me.exports),x.length>15?D.storeAsString?x:D.useNativeBigInt?BigInt(x):new pe(x):D.alwaysParseAsBig?D.useNativeBigInt?BigInt(O):new pe(O):O},N=function(){var O,x,T="",w;if(A==='"')for(var J=L;v();){if(A==='"')return L-1>J&&(T+=j.substring(J,L-1)),v(),T;if(A==="\\"){if(L-1>J&&(T+=j.substring(J,L-1)),v(),A==="u"){for(w=0,x=0;x<4&&(O=parseInt(v(),16),!!isFinite(O));x+=1)w=w*16+O;T+=String.fromCharCode(w)}else if(typeof b[A]=="string")T+=b[A];else break;J=L}}R("Bad string")},C=function(){for(;A&&A<=" ";)v()},X=function(){switch(A){case"t":return v("t"),v("r"),v("u"),v("e"),!0;case"f":return v("f"),v("a"),v("l"),v("s"),v("e"),!1;case"n":return v("n"),v("u"),v("l"),v("l"),null}R("Unexpected '"+A+"'")},B,I=function(){var O=[];if(A==="["){if(v("["),C(),A==="]")return v("]"),O;for(;A;){if(O.push(B()),C(),A==="]")return v("]"),O;v(","),C()}}R("Bad array")},K=function(){var O,x=Object.create(null);if(A==="{"){if(v("{"),C(),A==="}")return v("}"),x;for(;A;){if(O=N(),C(),v(":"),D.strict===!0&&Object.hasOwnProperty.call(x,O)&&R('Duplicate key "'+O+'"'),_e.test(O)===!0?D.protoAction==="error"?R("Object contains forbidden prototype property"):D.protoAction==="ignore"?B():x[O]=B():Ie.test(O)===!0?D.constructorAction==="error"?R("Object contains forbidden constructor property"):D.constructorAction==="ignore"?B():x[O]=B():x[O]=B(),C(),A==="}")return v("}"),x;v(","),C()}}R("Bad object")};return B=function(){switch(C(),A){case"{":return K();case"[":return I();case'"':return N();case"-":return H();default:return A>="0"&&A<="9"?H():X()}},function(O,x){var T;return j=O+"",L=0,A=" ",T=B(),C(),A&&R("Syntax error"),typeof x=="function"?function w(J,ne){var W,E=J[ne];return E&&typeof E=="object"&&Object.keys(E).forEach(function(m){W=w(E,m),W!==void 0?E[m]=W:delete E[m]}),x.call(J,ne,E)}({"":T},""):T}},Re=Pe,Be=xe.exports.stringify,ye=Re;he.exports=function(_){return{parse:ye(_),stringify:Be}};he.exports.parse=ye();he.exports.stringify=Be;const Te=_=>he.exports.parse(_,{useNativeBigInt:!0}),De=(_,D,L)=>he.exports.stringify(_,D,L);export{Te as p,De as s};
