(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{224:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),a=o(221),i=(o(234),o(36)),l=(o(249),o(231)),d=o.n(l),u=i.b.div.withConfig({displayName:"contact__LineBreak",componentId:"wom3ym-0"})(["width:78%;height:100px;border-top:1px solid black;word-break:break-all;margin:0 auto;margin-top:5rem;"]),c=i.b.img.withConfig({displayName:"contact__FeaturedImage",componentId:"wom3ym-1"})(["max-width:300px;margin:16px 0;padding-top:5rem;"]),m=Object(i.b)(a.a).withConfig({displayName:"contact__NewLayout",componentId:"wom3ym-2"})(["position:absolute;left:0;"]),s=i.b.div.withConfig({displayName:"contact__FeaturedLogo",componentId:"wom3ym-3"})(["display:flex;justify-content:center;"]);e.default=function(t){var e=t.pageContext;t.data;return r.a.createElement(m,{className:"map"},r.a.createElement(d.a,{bottom:!0},r.a.createElement("h1",{dangerouslySetInnerHTML:{__html:e.title}}),r.a.createElement(u,null)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}),r.a.createElement(s,null,r.a.createElement(c,{src:e.featured_media.source_url})))}},231:function(t,e,o){"use strict";function n(t,e){var o=e.distance,n=e.left,r=e.right,a=e.up,i=e.down,d=e.top,u=e.bottom,c=e.big,s=e.mirror,p=e.opposite,f=(o?o.toString():0)+((n?1:0)|(r?2:0)|(d||i?4:0)|(u||a?8:0)|(s?16:0)|(p?32:0)|(t?64:0)|(c?128:0));if(m.hasOwnProperty(f))return m[f];var b=n||r||a||i||d||u,v=void 0,y=void 0;if(b){if(!s!=!(t&&p)){var g=[r,n,u,d,i,a];n=g[0],r=g[1],d=g[2],u=g[3],a=g[4],i=g[5]}var h=o||(c?"2000px":"100%");v=n?"-"+h:r?h:"0",y=i||d?"-"+h:a||u?h:"0"}return m[f]=(0,l.animation)((t?"to":"from")+" {opacity: 0;"+(b?" transform: translate3d("+v+", "+y+", 0);":"")+"}\n     "+(t?"from":"to")+" {opacity: 1;transform: none;} "),m[f]}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=t.children,r=(t.out,t.forever),a=t.timeout,i=t.duration,d=void 0===i?l.defaults.duration:i,c=t.delay,m=void 0===c?l.defaults.delay:c,s=t.count,p=void 0===s?l.defaults.count:s,f=function(t,e){var o={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}(t,["children","out","forever","timeout","duration","delay","count"]),b={make:n,duration:void 0===a?d:a,delay:m,forever:r,count:p,style:{animationFillMode:"both"},reverse:f.left};return e?(0,u.default)(f,b,b,o):b}o(27),o(29),o(64),o(4),o(232),o(23),Object.defineProperty(e,"__esModule",{value:!0});var a,i=o(37),l=o(158),d=o(222),u=(a=d)&&a.__esModule?a:{default:a},c={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,big:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,distance:i.string,delay:i.number,count:i.number,forever:i.bool},m={};r.propTypes=c,e.default=r,t.exports=e.default},232:function(t,e,o){"use strict";o(159)("big",function(t){return function(){return t(this,"big","","")}})}}]);
//# sourceMappingURL=component---src-templates-contact-js-a47c187541d6901ca251.js.map