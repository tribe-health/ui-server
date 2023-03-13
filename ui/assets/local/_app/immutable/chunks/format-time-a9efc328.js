import{i as se,a as C,h as j}from"./has-48bed8a5.js";function m(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function l(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function W(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?W=function(r){return typeof r}:W=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},W(t)}function u(t){l(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||W(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function Z(t,e){l(2,arguments);var r=u(t),a=m(e);return isNaN(a)?new Date(NaN):(a&&r.setDate(r.getDate()+a),r)}function X(t,e){l(2,arguments);var r=u(t),a=m(e);if(isNaN(a))return new Date(NaN);if(!a)return r;var n=r.getDate(),i=new Date(r.getTime());i.setMonth(r.getMonth()+a+1,0);var o=i.getDate();return n>=o?i:(r.setFullYear(i.getFullYear(),i.getMonth(),n),r)}function k(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?k=function(r){return typeof r}:k=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},k(t)}function w(t,e){if(l(2,arguments),!e||k(e)!=="object")return new Date(NaN);var r=e.years?m(e.years):0,a=e.months?m(e.months):0,n=e.weeks?m(e.weeks):0,i=e.days?m(e.days):0,o=e.hours?m(e.hours):0,s=e.minutes?m(e.minutes):0,f=e.seconds?m(e.seconds):0,d=u(t),c=a||r?X(d,a+r*12):d,v=i||n?Z(c,i+n*7):c,p=s+o*60,g=f+p*60,h=g*1e3,b=new Date(v.getTime()+h);return b}var ue={};function le(){return ue}function L(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function H(t){l(1,arguments);var e=u(t);return e.setHours(0,0,0,0),e}var fe=864e5;function de(t,e){l(2,arguments);var r=H(t),a=H(e),n=r.getTime()-L(r),i=a.getTime()-L(a);return Math.round((n-i)/fe)}function D(t,e){l(2,arguments);var r=u(t),a=u(e),n=r.getTime()-a.getTime();return n<0?-1:n>0?1:n}var z=6e4,$=36e5;function me(t,e){l(2,arguments);var r=u(t),a=u(e),n=r.getFullYear()-a.getFullYear(),i=r.getMonth()-a.getMonth();return n*12+i}function ce(t,e){l(2,arguments);var r=u(t),a=u(e);return r.getFullYear()-a.getFullYear()}function q(t,e){var r=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return r<0?-1:r>0?1:r}function ve(t,e){l(2,arguments);var r=u(t),a=u(e),n=q(r,a),i=Math.abs(de(r,a));r.setDate(r.getDate()-n*i);var o=Number(q(r,a)===-n),s=n*(i-o);return s===0?0:s}function E(t,e){return l(2,arguments),u(t).getTime()-u(e).getTime()}var J={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},he="trunc";function R(t){return t?J[t]:J[he]}function ge(t,e,r){l(2,arguments);var a=E(t,e)/$;return R(r==null?void 0:r.roundingMethod)(a)}function ye(t,e,r){l(2,arguments);var a=E(t,e)/z;return R(r==null?void 0:r.roundingMethod)(a)}function pe(t){l(1,arguments);var e=u(t);return e.setHours(23,59,59,999),e}function be(t){l(1,arguments);var e=u(t),r=e.getMonth();return e.setFullYear(e.getFullYear(),r+1,0),e.setHours(23,59,59,999),e}function we(t){l(1,arguments);var e=u(t);return pe(e).getTime()===be(e).getTime()}function De(t,e){l(2,arguments);var r=u(t),a=u(e),n=D(r,a),i=Math.abs(me(r,a)),o;if(i<1)o=0;else{r.getMonth()===1&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-n*i);var s=D(r,a)===-n;we(u(t))&&i===1&&D(t,a)===1&&(s=!1),o=n*(i-Number(s))}return o===0?0:o}function Me(t,e,r){l(2,arguments);var a=E(t,e)/1e3;return R(r==null?void 0:r.roundingMethod)(a)}function Ne(t,e){l(2,arguments);var r=u(t),a=u(e),n=D(r,a),i=Math.abs(ce(r,a));r.setFullYear(1584),a.setFullYear(1584);var o=D(r,a)===-n,s=n*(i-Number(o));return s===0?0:s}function y(t,e){for(var r=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return r+a}var Se={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Te=function(e,r,a){var n,i=Se[e];return typeof i=="string"?n=i:r===1?n=i.one:n=i.other.replace("{{count}}",r.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+n:n+" ago":n};const Pe=Te;function Y(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.width?String(e.width):t.defaultWidth,a=t.formats[r]||t.formats[t.defaultWidth];return a}}var We={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ke={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Fe={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ce={date:Y({formats:We,defaultWidth:"full"}),time:Y({formats:ke,defaultWidth:"full"}),dateTime:Y({formats:Fe,defaultWidth:"full"})};const Oe=Ce;var Ie={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ye=function(e,r,a,n){return Ie[e]};const xe=Ye;function M(t){return function(e,r){var a=r!=null&&r.context?String(r.context):"standalone",n;if(a==="formatting"&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=r!=null&&r.width?String(r.width):i;n=t.formattingValues[o]||t.formattingValues[i]}else{var s=t.defaultWidth,f=r!=null&&r.width?String(r.width):t.defaultWidth;n=t.values[f]||t.values[s]}var d=t.argumentCallback?t.argumentCallback(e):e;return n[d]}}var _e={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ae={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ze={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},$e={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ee={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Re={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ue=function(e,r){var a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},je={ordinalNumber:Ue,era:M({values:_e,defaultWidth:"wide"}),quarter:M({values:Ae,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:M({values:ze,defaultWidth:"wide"}),day:M({values:$e,defaultWidth:"wide"}),dayPeriod:M({values:Ee,defaultWidth:"wide",formattingValues:Re,defaultFormattingWidth:"wide"})};const Le=je;function N(t){return function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.width,n=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(n);if(!i)return null;var o=i[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],f=Array.isArray(s)?qe(s,function(v){return v.test(o)}):He(s,function(v){return v.test(o)}),d;d=t.valueCallback?t.valueCallback(f):f,d=r.valueCallback?r.valueCallback(d):d;var c=e.slice(o.length);return{value:d,rest:c}}}function He(t,e){for(var r in t)if(t.hasOwnProperty(r)&&e(t[r]))return r}function qe(t,e){for(var r=0;r<t.length;r++)if(e(t[r]))return r}function Je(t){return function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.match(t.matchPattern);if(!a)return null;var n=a[0],i=e.match(t.parsePattern);if(!i)return null;var o=t.valueCallback?t.valueCallback(i[0]):i[0];o=r.valueCallback?r.valueCallback(o):o;var s=e.slice(n.length);return{value:o,rest:s}}}var Ve=/^(\d+)(th|st|nd|rd)?/i,Ze=/\d+/i,Xe={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Qe={any:[/^b/i,/^(a|c)/i]},Be={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ke={any:[/1/i,/2/i,/3/i,/4/i]},Ge={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},et={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},tt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},rt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},at={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},nt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},it={ordinalNumber:Je({matchPattern:Ve,parsePattern:Ze,valueCallback:function(e){return parseInt(e,10)}}),era:N({matchPatterns:Xe,defaultMatchWidth:"wide",parsePatterns:Qe,defaultParseWidth:"any"}),quarter:N({matchPatterns:Be,defaultMatchWidth:"wide",parsePatterns:Ke,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:N({matchPatterns:Ge,defaultMatchWidth:"wide",parsePatterns:et,defaultParseWidth:"any"}),day:N({matchPatterns:tt,defaultMatchWidth:"wide",parsePatterns:rt,defaultParseWidth:"any"}),dayPeriod:N({matchPatterns:at,defaultMatchWidth:"any",parsePatterns:nt,defaultParseWidth:"any"})};const ot=it;var st={code:"en-US",formatDistance:Pe,formatLong:Oe,formatRelative:xe,localize:Le,match:ot,options:{weekStartsOn:0,firstWeekContainsDate:1}};const ut=st;var lt=["years","months","weeks","days","hours","minutes","seconds"];function ft(t,e){var r,a,n,i,o;if(arguments.length<1)throw new TypeError("1 argument required, but only ".concat(arguments.length," present"));var s=le(),f=(r=(a=e==null?void 0:e.locale)!==null&&a!==void 0?a:s.locale)!==null&&r!==void 0?r:ut,d=(n=e==null?void 0:e.format)!==null&&n!==void 0?n:lt,c=(i=e==null?void 0:e.zero)!==null&&i!==void 0?i:!1,v=(o=e==null?void 0:e.delimiter)!==null&&o!==void 0?o:" ";if(!f.formatDistance)return"";var p=d.reduce(function(g,h){var b="x".concat(h.replace(/(^.)/,function(I){return I.toUpperCase()})),T=t[h];return typeof T=="number"&&(c||t[h])?g.concat(f.formatDistance(b,T)):g},[]).join(v);return p}function Q(t,e){var r,a;l(1,arguments);var n=u(t);if(isNaN(n.getTime()))throw new RangeError("Invalid time value");var i=String((r=e==null?void 0:e.format)!==null&&r!==void 0?r:"extended"),o=String((a=e==null?void 0:e.representation)!==null&&a!==void 0?a:"complete");if(i!=="extended"&&i!=="basic")throw new RangeError("format must be 'extended' or 'basic'");if(o!=="date"&&o!=="time"&&o!=="complete")throw new RangeError("representation must be 'date', 'time', or 'complete'");var s="",f="",d=i==="extended"?"-":"",c=i==="extended"?":":"";if(o!=="time"){var v=y(n.getDate(),2),p=y(n.getMonth()+1,2),g=y(n.getFullYear(),4);s="".concat(g).concat(d).concat(p).concat(d).concat(v)}if(o!=="date"){var h=n.getTimezoneOffset();if(h!==0){var b=Math.abs(h),T=y(Math.floor(b/60),2),I=y(b%60,2),te=h<0?"+":"-";f="".concat(te).concat(T,":").concat(I)}else f="Z";var re=y(n.getHours(),2),ae=y(n.getMinutes(),2),ne=y(n.getSeconds(),2),ie=s===""?"":"T",oe=[re,ae,ne].join(c);s="".concat(s).concat(ie).concat(oe).concat(f)}return s}function dt(t){l(1,arguments);var e=u(t),r=e.getMilliseconds();return r}function U(t){l(1,arguments);var e=u(t.start),r=u(t.end);if(isNaN(e.getTime()))throw new RangeError("Start Date is invalid");if(isNaN(r.getTime()))throw new RangeError("End Date is invalid");var a={};a.years=Math.abs(Ne(r,e));var n=D(r,e),i=w(e,{years:n*a.years});a.months=Math.abs(De(r,i));var o=w(i,{months:n*a.months});a.days=Math.abs(ve(r,o));var s=w(o,{days:n*a.days});a.hours=Math.abs(ge(r,s));var f=w(s,{hours:n*a.hours});a.minutes=Math.abs(ye(r,f));var d=w(f,{minutes:n*a.minutes});return a.seconds=Math.abs(Me(r,d)),a}function mt(t,e){l(2,arguments);var r=m(e);return Z(t,-r)}function V(t,e){var r;l(1,arguments);var a=m((r=e==null?void 0:e.additionalDigits)!==null&&r!==void 0?r:2);if(a!==2&&a!==1&&a!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var n=gt(t),i;if(n.date){var o=yt(n.date,a);i=pt(o.restDateString,o.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var s=i.getTime(),f=0,d;if(n.time&&(f=bt(n.time),isNaN(f)))return new Date(NaN);if(n.timezone){if(d=wt(n.timezone),isNaN(d))return new Date(NaN)}else{var c=new Date(s+f),v=new Date(0);return v.setFullYear(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()),v.setHours(c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds()),v}return new Date(s+f+d)}var P={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},ct=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,vt=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,ht=/^([+-])(\d{2})(?::?(\d{2}))?$/;function gt(t){var e={},r=t.split(P.dateTimeDelimiter),a;if(r.length>2)return e;if(/:/.test(r[0])?a=r[0]:(e.date=r[0],a=r[1],P.timeZoneDelimiter.test(e.date)&&(e.date=t.split(P.timeZoneDelimiter)[0],a=t.substr(e.date.length,t.length))),a){var n=P.timezone.exec(a);n?(e.time=a.replace(n[1],""),e.timezone=n[1]):e.time=a}return e}function yt(t,e){var r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),a=t.match(r);if(!a)return{year:NaN,restDateString:""};var n=a[1]?parseInt(a[1]):null,i=a[2]?parseInt(a[2]):null;return{year:i===null?n:i*100,restDateString:t.slice((a[1]||a[2]).length)}}function pt(t,e){if(e===null)return new Date(NaN);var r=t.match(ct);if(!r)return new Date(NaN);var a=!!r[4],n=S(r[1]),i=S(r[2])-1,o=S(r[3]),s=S(r[4]),f=S(r[5])-1;if(a)return Tt(e,s,f)?Dt(e,s,f):new Date(NaN);var d=new Date(0);return!Nt(e,i,o)||!St(e,n)?new Date(NaN):(d.setUTCFullYear(e,i,Math.max(n,o)),d)}function S(t){return t?parseInt(t):1}function bt(t){var e=t.match(vt);if(!e)return NaN;var r=x(e[1]),a=x(e[2]),n=x(e[3]);return Pt(r,a,n)?r*$+a*z+n*1e3:NaN}function x(t){return t&&parseFloat(t.replace(",","."))||0}function wt(t){if(t==="Z")return 0;var e=t.match(ht);if(!e)return 0;var r=e[1]==="+"?-1:1,a=parseInt(e[2]),n=e[3]&&parseInt(e[3])||0;return Wt(a,n)?r*(a*$+n*z):NaN}function Dt(t,e,r){var a=new Date(0);a.setUTCFullYear(t,0,4);var n=a.getUTCDay()||7,i=(e-1)*7+r+1-n;return a.setUTCDate(a.getUTCDate()+i),a}var Mt=[31,null,31,30,31,30,31,31,30,31,30,31];function B(t){return t%400===0||t%4===0&&t%100!==0}function Nt(t,e,r){return e>=0&&e<=11&&r>=1&&r<=(Mt[e]||(B(t)?29:28))}function St(t,e){return e>=1&&e<=(B(t)?366:365)}function Tt(t,e,r){return e>=1&&e<=53&&r>=0&&r<=6}function Pt(t,e,r){return t===24?e===0&&r===0:r>=0&&r<60&&e>=0&&e<60&&t>=0&&t<25}function Wt(t,e){return e>=0&&e<=59}function _(t){if(l(1,arguments),typeof t=="string"){var e=t.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);return e?new Date(Date.UTC(+e[1],+e[2]-1,+e[3],+e[4]-(+e[9]||0)*(e[8]=="-"?-1:1),+e[5]-(+e[10]||0)*(e[8]=="-"?-1:1),+e[6],+((e[7]||"0")+"00").substring(0,3))):new Date(NaN)}return u(t)}function kt(t,e){l(2,arguments);var r=m(e);return X(t,-r)}function F(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?F=function(r){return typeof r}:F=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},F(t)}function Ft(t,e){if(l(2,arguments),!e||F(e)!=="object")return new Date(NaN);var r=e.years?m(e.years):0,a=e.months?m(e.months):0,n=e.weeks?m(e.weeks):0,i=e.days?m(e.days):0,o=e.hours?m(e.hours):0,s=e.minutes?m(e.minutes):0,f=e.seconds?m(e.seconds):0,d=kt(t,a+r*12),c=mt(d,i+n*7),v=s+o*60,p=f+v*60,g=p*1e3,h=new Date(c.getTime()-g);return h}const K=["years","months","weeks","days","hours","minutes","seconds"],At=["15 minutes","1 hour","3 hours","24 hours","3 days","7 days","30 days","90 days"],zt=["15 minutes","3 days","1 hour","7 days","3 hours","30 days","24 hours","90 days"],G=new RegExp(`(\\d+)\\s(${K.map(t=>t+"?").join("|")})`,"g"),ee=t=>{if(!C(t))return!1;for(const e of K)if(e===t)return!0;return!1},$t=t=>{if(!se(t))return!1;for(const e of Object.keys(t))if(!ee(e))return!1;return!0},Et=t=>C(t)?!!t.match(G):!1,Rt=(t=new Date)=>Q(w(t,{hours:24})),Ct=t=>{const e={},r=t.match(G);if(!r)return e;for(const a of r){const[n,i]=a.split(" "),o=parseInt(n,10);let s=i;i.endsWith("s")||(s=i+"s"),ee(s)&&(e[s]=o)}return e},Ut=t=>{const e=typeof t=="string"?Ct(t):t;return Q(Ft(new Date,e))},jt=(t,e=new Date)=>(C(t)&&(t=V(t)),C(e)&&(e=V(e)),U({start:t,end:e})),Ot=t=>{const e=parseInt(t)*1e3;if(t.endsWith("s")&&!isNaN(e))return U({start:0,end:e})};function A(t){if(!O(t))throw new TypeError("provided value is not a timestamp");const e=new Date;return e.setTime(Number(t.seconds)*1e3+(t.nanos||0)/1e3),e}function O(t){return typeof t=="object"?j(t,"seconds")&&j(t,"nanos"):!1}function It(t,e=", "){return t===null||!t?"":(typeof t=="string"&&(t=Ot(t)),ft(t,{delimiter:e}))}function Yt(t){return t?(t=t.replace(/seconds/g,"second").replace(/second/g,"s").replace(/ s/g,"s").replace(/minutes/g,"minute").replace(/minute/g,"m").replace(/ m/g,"m").replace(/hours/g,"hour").replace(/hour/g,"h").replace(/ h/g,"h").replace(/days/g,"day").replace(/day/g,"d").replace(/ d/g,"d").replace(/weeks/g,"week").replace(/week/g,"w").replace(/ w/g,"w").replace(/ month/g,"month").replace(/ months/g,"months").replace(/ year/g,"year").replace(/ years/g,"years"),t):""}function xt({start:t,end:e}){if(!t||!e)return null;try{O(t)&&(t=A(t)),O(e)&&(e=A(e));const r=_(t),a=_(e);return U({start:r,end:a})}catch{return null}}function Lt({start:t,end:e}){const r=xt({start:t,end:e}),a=It(r," ");return Yt(a)}function Ht(t){if(!t)return 0;O(t)&&(t=A(t));const e=_(t);return dt(e)}function qt(t){if(!t)return"";typeof t=="string"&&(t.includes("s")&&(t=t.replace("s","")),t=parseInt(t));const e=Math.floor(t/(60*60)),r=Math.floor(t/(24*60*60));return r===1?r+" day":r>1?r+" days":e===1?e+" hour":e+" hours"}export{zt as A,xt as B,Me as a,De as b,D as c,ut as d,le as e,A as f,L as g,It as h,O as i,$t as j,Et as k,Ut as l,Rt as m,Lt as n,qt as o,_ as p,At as q,l as r,jt as s,u as t,ft as u,K as v,Ht as w,m as x,H as y,Q as z};
