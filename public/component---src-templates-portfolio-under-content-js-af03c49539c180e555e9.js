(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{230:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),s=a(221),r=a(250),l=a(84),i=a(36),c=i.b.div.withConfig({displayName:"PortfolioItems__PortfolioItemsWrapper",componentId:"y7pzkc-0"})(["display:grid;grid-template-columns:1fr 1fr;@media (max-width:550px){display:block;}"]),p=i.b.div.withConfig({displayName:"PortfolioItems__PortfolioItem",componentId:"y7pzkc-1"})(["width:60%;border:3px solid lightblue;padding:16px;margin:16px;border-radius:15px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;&:hover{box-shadow:0 16px 32px 0 rgba(0,0,0,0.2);}"]),h=i.b.img.withConfig({displayName:"PortfolioItems__PortfolioImage",componentId:"y7pzkc-2"})(["max-width:100%;"]),d=Object(i.b)(l.a).withConfig({displayName:"PortfolioItems__ButtonStyle",componentId:"y7pzkc-3"})(['@import url("https://fonts.googleapis.com/css?family=Raleway:800,900&display=swap");font-family:"Raleway",sans-serif;font-weight:100;color:white;font-size:1rem;border:1px #ef6f6c solid;border-radius:15px;padding:10px 10px;text-decoration:none;background-color:#ef6f6c;display:flex;justify-content:center;']),u=function(){return n.a.createElement(l.b,{query:"2766520823",render:function(t){return n.a.createElement(c,null,t.allWordpressWpPortfolio.edges.map(function(t){return n.a.createElement(p,{key:t.node.id},n.a.createElement("h2",null,t.node.title),n.a.createElement(h,{src:t.node.featured_media.source_url,alt:"Thumnail"}),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.node.excerpt}}),n.a.createElement(d,{to:"/portfolio/"+t.node.slug},"Read More"))}))},data:r})},g=a(235),A=(a(251),a(231)),b=a.n(A),f=i.b.div.withConfig({displayName:"portfolioUnderContent__LineBreak",componentId:"z1ht7o-0"})(["width:78%;height:100px;border-top:1px solid black;word-break:break-all;margin:0 auto;margin-top:5rem;"]);e.default=function(t){var e=t.pageContext;return n.a.createElement(s.a,null,n.a.createElement(g.a,null),n.a.createElement(b.a,{bottom:!0},n.a.createElement("h1",{dangerouslySetInnerHTML:{__html:e.title}}),n.a.createElement(f,null),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}),n.a.createElement(u,null)))}},231:function(t,e,a){"use strict";function o(t,e){var a=e.distance,o=e.left,n=e.right,s=e.up,r=e.down,i=e.top,c=e.bottom,p=e.big,d=e.mirror,u=e.opposite,g=(a?a.toString():0)+((o?1:0)|(n?2:0)|(i||r?4:0)|(c||s?8:0)|(d?16:0)|(u?32:0)|(t?64:0)|(p?128:0));if(h.hasOwnProperty(g))return h[g];var A=o||n||s||r||i||c,b=void 0,f=void 0;if(A){if(!d!=!(t&&u)){var w=[n,o,c,i,r,s];o=w[0],n=w[1],i=w[2],c=w[3],s=w[4],r=w[5]}var m=a||(p?"2000px":"100%");b=o?"-"+m:n?m:"0",f=r||i?"-"+m:s||c?m:"0"}return h[g]=(0,l.animation)((t?"to":"from")+" {opacity: 0;"+(A?" transform: translate3d("+b+", "+f+", 0);":"")+"}\n     "+(t?"from":"to")+" {opacity: 1;transform: none;} "),h[g]}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=t.children,n=(t.out,t.forever),s=t.timeout,r=t.duration,i=void 0===r?l.defaults.duration:r,p=t.delay,h=void 0===p?l.defaults.delay:p,d=t.count,u=void 0===d?l.defaults.count:d,g=function(t,e){var a={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(a[o]=t[o]);return a}(t,["children","out","forever","timeout","duration","delay","count"]),A={make:o,duration:void 0===s?i:s,delay:h,forever:n,count:u,style:{animationFillMode:"both"},reverse:g.left};return e?(0,c.default)(g,A,A,a):A}a(27),a(29),a(64),a(4),a(232),a(23),Object.defineProperty(e,"__esModule",{value:!0});var s,r=a(37),l=a(158),i=a(222),c=(s=i)&&s.__esModule?s:{default:s},p={out:r.bool,left:r.bool,right:r.bool,top:r.bool,bottom:r.bool,big:r.bool,mirror:r.bool,opposite:r.bool,duration:r.number,timeout:r.number,distance:r.string,delay:r.number,count:r.number,forever:r.bool},h={};n.propTypes=p,e.default=n,t.exports=e.default},232:function(t,e,a){"use strict";a(159)("big",function(t){return function(){return t(this,"big","","")}})},235:function(t,e,a){"use strict";var o=a(236),n=a(0),s=a.n(n),r=a(84),l=a(36),i=a(223),c=a.n(i),p=Object(l.b)(function(t){var e=t.SideImage;return s.a.createElement(r.b,{query:"2954062797",render:function(t){var a=t.desktop.childImageSharp.fluid;return s.a.createElement(c.a,{style:{width:"40%",height:"100vh",top:0,left:0,position:"fixed"},Tag:"section",className:e,fluid:a})},data:o})}).withConfig({displayName:"portfolioImage__StyledBackgroundSection",componentId:"sc-1u5m0o9-0"})(["width:100%;background-position:bottom center;background-repeat:repeat-y;background-size:cover;"]);e.a=p},236:function(t){t.exports=JSON.parse('{"data":{"desktop":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUDBP/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAHq2mouI4f/xAAaEAACAwEBAAAAAAAAAAAAAAABAgMREgAU/9oACAEBAAEFAhHQoAJeWkbWyI/S69//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPwGn/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8Bh//EABkQAAIDAQAAAAAAAAAAAAAAAAAhARARYf/aAAgBAQAGPwITqI4IWYf/xAAbEAACAwADAAAAAAAAAAAAAAABIQARYTFBUf/aAAgBAQABPyEIO7yMg8RDgHIdeUsEqoUqtOf/2gAMAwEAAgADAAAAEOTv/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERQf/aAAgBAwEBPxDMLf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/EGP/xAAbEAEBAAMBAQEAAAAAAAAAAAABEQAhMVGBcf/aAAgBAQABPxBs2RZ0fcklSgBJX3A6G4Jxc1HMUP1xTsm+tb3fzEN4VAUb9z//2Q==","aspectRatio":1.5,"src":"/static/119f192f2c72459d5211cc555863a902/6c026/neonbrand-kdwahpWYfQo-unsplash.jpg","srcSet":"/static/119f192f2c72459d5211cc555863a902/92b76/neonbrand-kdwahpWYfQo-unsplash.jpg 375w,\\n/static/119f192f2c72459d5211cc555863a902/76e6e/neonbrand-kdwahpWYfQo-unsplash.jpg 750w,\\n/static/119f192f2c72459d5211cc555863a902/6c026/neonbrand-kdwahpWYfQo-unsplash.jpg 1500w,\\n/static/119f192f2c72459d5211cc555863a902/a7490/neonbrand-kdwahpWYfQo-unsplash.jpg 2250w,\\n/static/119f192f2c72459d5211cc555863a902/8c6c5/neonbrand-kdwahpWYfQo-unsplash.jpg 3000w,\\n/static/119f192f2c72459d5211cc555863a902/e9c99/neonbrand-kdwahpWYfQo-unsplash.jpg 4896w","srcWebp":"/static/119f192f2c72459d5211cc555863a902/60d59/neonbrand-kdwahpWYfQo-unsplash.webp","srcSetWebp":"/static/119f192f2c72459d5211cc555863a902/8c0db/neonbrand-kdwahpWYfQo-unsplash.webp 375w,\\n/static/119f192f2c72459d5211cc555863a902/26cc2/neonbrand-kdwahpWYfQo-unsplash.webp 750w,\\n/static/119f192f2c72459d5211cc555863a902/60d59/neonbrand-kdwahpWYfQo-unsplash.webp 1500w,\\n/static/119f192f2c72459d5211cc555863a902/6371c/neonbrand-kdwahpWYfQo-unsplash.webp 2250w,\\n/static/119f192f2c72459d5211cc555863a902/b0079/neonbrand-kdwahpWYfQo-unsplash.webp 3000w,\\n/static/119f192f2c72459d5211cc555863a902/c6654/neonbrand-kdwahpWYfQo-unsplash.webp 4896w","sizes":"(max-width: 1500px) 100vw, 1500px"}}}}}')},250:function(t){t.exports=JSON.parse('{"data":{"allWordpressWpPortfolio":{"edges":[{"node":{"id":"6b188d2c-56c1-5e42-9a45-af22be67c79a","title":"A/C and HVAC Systems","slug":"a-c-and-hvac-systems","excerpt":"<p>HVAC is an important part of residential structures. Keeping interior building air circulating helps prevent stagnation of the interior air. Healthy conditions are regulated with respect to temperature and humidity, using fresh air from outdoors</p>\\n","content":"\\n<figure class=\\"wp-block-image\\"><img src=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/dan-lefebvre-RFAHj4tI37Y-unsplash-1024x683.jpg\\" alt=\\"\\" class=\\"wp-image-132\\" srcset=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/dan-lefebvre-RFAHj4tI37Y-unsplash-1024x683.jpg 1024w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/dan-lefebvre-RFAHj4tI37Y-unsplash-300x200.jpg 300w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/dan-lefebvre-RFAHj4tI37Y-unsplash-768x512.jpg 768w\\" sizes=\\"(max-width: 1024px) 100vw, 1024px\\" /></figure>\\n\\n\\n\\n<p style=\\"text-align:center\\">HVAC is an important part of residential structures.&nbsp;Keeping interior building air circulating helps prevent stagnation of the interior air. Healthy conditions are regulated with respect to temperature and humidity, using fresh air from outdoors</p>\\n\\n\\n\\n<p style=\\"text-align:center\\">The three major functions of heating, ventilation, and air conditioning are interrelated, especially with the need to provide thermal comfort and acceptable indoor air quality within reasonable installation, operation</p>\\n\\n\\n\\n<figure class=\\"wp-block-image\\"><img src=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/taylor-vick-qVXFewdVWn4-unsplash-1024x683.jpg\\" alt=\\"\\" class=\\"wp-image-131\\" srcset=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/taylor-vick-qVXFewdVWn4-unsplash-1024x683.jpg 1024w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/taylor-vick-qVXFewdVWn4-unsplash-300x200.jpg 300w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/taylor-vick-qVXFewdVWn4-unsplash-768x512.jpg 768w\\" sizes=\\"(max-width: 1024px) 100vw, 1024px\\" /></figure>\\n","featured_media":{"source_url":"http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/ricardo-gomez-angel-5JrUYMWGp7A-unsplash.jpg"}}},{"node":{"id":"35fd6d2f-94e3-5356-aff8-09b330e220fd","title":"Lighting Design","slug":"lighting-design","excerpt":"<p>Accent lighting focuses light on a particular area or object. It is often used to highlight art or other artifacts. Common types of accent lights include wall sconces, floodlights, recessed lights, torchère lamps, or track lighting. The brighter light from the accent lamp creates visual interest to a room.</p>\\n","content":"\\n<figure class=\\"wp-block-image\\"><img src=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/nastuh-abootalebi-JdcJn85xD2k-unsplash-1024x684.jpg\\" alt=\\"\\" class=\\"wp-image-129\\" srcset=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/nastuh-abootalebi-JdcJn85xD2k-unsplash-1024x684.jpg 1024w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/nastuh-abootalebi-JdcJn85xD2k-unsplash-300x200.jpg 300w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/nastuh-abootalebi-JdcJn85xD2k-unsplash-768x513.jpg 768w\\" sizes=\\"(max-width: 1024px) 100vw, 1024px\\" /></figure>\\n\\n\\n\\n<p style=\\"text-align:center\\">3 Main types of lighting include: Ambient or general lighting, Accent lighting, and Task lighting. Full Spectrum Electric recommends accent lighting in renovation plans to add new features and brighten up rooms to be more warm and welcome.</p>\\n\\n\\n\\n<p style=\\"text-align:center\\">Accent lighting focuses light on a particular area or object. It is often used to highlight art or other artifacts. Common types of accent lights include wall sconces, floodlights, recessed lights, torchère lamps, or track lighting. The brighter light from the accent lamp creates visual interest to a room.</p>\\n\\n\\n\\n<figure class=\\"wp-block-image\\"><img src=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/jason-briscoe-UV81E0oXXWQ-unsplash-683x1024.jpg\\" alt=\\"\\" class=\\"wp-image-130\\" srcset=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/jason-briscoe-UV81E0oXXWQ-unsplash-683x1024.jpg 683w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/jason-briscoe-UV81E0oXXWQ-unsplash-200x300.jpg 200w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/jason-briscoe-UV81E0oXXWQ-unsplash-768x1152.jpg 768w\\" sizes=\\"(max-width: 683px) 100vw, 683px\\" /></figure>\\n","featured_media":{"source_url":"http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/aaron-huber-G7sE2S4Lab4-unsplash.jpg"}}},{"node":{"id":"84db36c8-5128-5a58-9afe-e41290b10e59","title":"Home Renovations","slug":"home-renovations","excerpt":"<p>cardigan taiyaki banh mi, man braid jianbing whatever skateboard. Keytar keffiyeh tilde, post-ironic brooklyn swag street art vinyl shoreditch cardigan pitchfork edison bulb whatever. Narwhal chia scenester occupy, ugh waistcoat trust fund chartreuse jianbing cronut. Pour-over vice messenger bag blue bottle mixtape 90&#8217;s. Iceland 90&#8217;s poutine coloring book pok pok. Migas sartorial 90&#8217;s whatever tbh.</p>\\n","content":"\\n<figure class=\\"wp-block-image\\"><img src=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/08/charles-wlGyssxSMs-unsplash-683x1024.jpg\\" alt=\\"\\" class=\\"wp-image-125\\" srcset=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/08/charles-wlGyssxSMs-unsplash-683x1024.jpg 683w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/08/charles-wlGyssxSMs-unsplash-200x300.jpg 200w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/08/charles-wlGyssxSMs-unsplash-768x1152.jpg 768w\\" sizes=\\"(max-width: 683px) 100vw, 683px\\" /></figure>\\n\\n\\n\\n<p>Yr cardigan taiyaki banh mi, man braid jianbing whatever skateboard. Keytar keffiyeh tilde, post-ironic brooklyn swag street art vinyl shoreditch cardigan pitchfork edison bulb whatever. Narwhal chia scenester occupy, ugh waistcoat trust fund chartreuse jianbing cronut. Pour-over vice messenger bag blue bottle mixtape 90&#8217;s. Iceland 90&#8217;s poutine coloring book pok pok. Migas sartorial 90&#8217;s whatever tbh.</p>\\n\\n\\n\\n<p>Godard chicharrones pinterest, selvage bushwick mustache everyday carry hashtag brooklyn letterpress poke cray. Shabby chic flannel migas raclette occupy. You probably haven&#8217;t heard of them scenester locavore, meh godard taxidermy chicharrones la croix pour-over tattooed lomo raclette. Cred meditation pabst quinoa celiac glossier polaroid vinyl williamsburg literally.</p>\\n\\n\\n\\n<figure class=\\"wp-block-image\\"><img src=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/08/charles-Za9oagRJNLM-unsplash-683x1024.jpg\\" alt=\\"\\" class=\\"wp-image-127\\" srcset=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/08/charles-Za9oagRJNLM-unsplash-683x1024.jpg 683w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/08/charles-Za9oagRJNLM-unsplash-200x300.jpg 200w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/08/charles-Za9oagRJNLM-unsplash-768x1152.jpg 768w\\" sizes=\\"(max-width: 683px) 100vw, 683px\\" /></figure>\\n","featured_media":{"source_url":"http://localhost:8888/greatGatsby/wp-content/uploads/2019/08/milivoj-kuhar-Te48TPzdcU8-unsplash-1.jpg"}}},{"node":{"id":"f7cc185c-f5a7-59b7-bb06-034a3b6027e4","title":"Renewable Energy Systems","slug":"renewable-energy","excerpt":"<p>Lorem ipsum dolor amet air plant church-key photo booth hot chicken chia. Cold-pressed subway tile tousled tote bag flexitarian man bun mumblecore chambray cliche. Kickstarter tattooed hoodie offal meggings poutine pork belly slow-carb cray bitters flexitarian aesthetic. Mlkshk freegan selvage, kinfolk raclette truffaut vinyl actually. Four dollar toast taiyaki hoodie wolf. Taiyaki mumblecore shabby chic whatever umami gastropub. Poke synth deep v subway tile austin.</p>\\n","content":"\\n<figure class=\\"wp-block-image\\"><img src=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/karsten-wurth-karsten-wuerth-tzkyLKPvL4-unsplash-1024x620.jpg\\" alt=\\"\\" class=\\"wp-image-118\\" srcset=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/karsten-wurth-karsten-wuerth-tzkyLKPvL4-unsplash-1024x620.jpg 1024w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/karsten-wurth-karsten-wuerth-tzkyLKPvL4-unsplash-300x182.jpg 300w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/karsten-wurth-karsten-wuerth-tzkyLKPvL4-unsplash-768x465.jpg 768w\\" sizes=\\"(max-width: 1024px) 100vw, 1024px\\" /></figure>\\n\\n\\n\\n<p>Lorem ipsum dolor amet air plant church-key photo booth hot chicken chia. Cold-pressed subway tile tousled tote bag flexitarian man bun mumblecore chambray cliche. Kickstarter tattooed hoodie offal meggings poutine pork belly slow-carb cray bitters flexitarian aesthetic. Mlkshk freegan selvage, kinfolk raclette truffaut vinyl actually. Four dollar toast taiyaki hoodie wolf. Taiyaki mumblecore shabby chic whatever umami gastropub. Poke synth deep v subway tile austin.</p>\\n\\n\\n\\n<p><strong>Ugh single-origin coffee adaptogen everyday carry deep v. Portland af mumblecore, disrupt williamsburg +1 before they sold out gluten-free wayfarers farm-to-table activated charcoal schlitz master cleanse whatever. Jianbing tacos everyday carry raclette +1 bushwick. YOLO knausgaard chicharrones, poke franzen ugh fingerstache crucifix drinking vinegar pok pok messenger bag. Glossier whatever unicorn artisan hell of pork belly.</strong></p>\\n\\n\\n\\n<figure class=\\"wp-block-image\\"><img src=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/mariana-proenca-_h0xG4s6NFg-unsplash-1024x768.jpg\\" alt=\\"\\" class=\\"wp-image-121\\" srcset=\\"http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/mariana-proenca-_h0xG4s6NFg-unsplash-1024x768.jpg 1024w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/mariana-proenca-_h0xG4s6NFg-unsplash-300x225.jpg 300w, http://localhost:8888/greatGatsby/wp-content/uploads/2019/10/mariana-proenca-_h0xG4s6NFg-unsplash-768x576.jpg 768w\\" sizes=\\"(max-width: 1024px) 100vw, 1024px\\" /></figure>\\n","featured_media":{"source_url":"http://localhost:8888/greatGatsby/wp-content/uploads/2019/08/chelsea-WvusC5M-TM8-unsplash.jpg"}}}]}}}')}}]);
//# sourceMappingURL=component---src-templates-portfolio-under-content-js-af03c49539c180e555e9.js.map