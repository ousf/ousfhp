(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2sLu":function(e,t,o){"use strict";o.r(t),o.d(t,"pageQuery",(function(){return f}));var n=o("q1tI"),a=o.n(n),r=o("vOnD"),i=o("tC44"),c=o("qx5a"),l=o("Q4RR"),p=o("BQrF"),s=r.b.div.withConfig({displayName:"basicbook__Content",componentId:"t1ruen-0"})(["margin-right:auto;box-sizing:border-box;padding:20px;color:",';font-family:"Noto Sans JP";& h1{font-size:1.4rem;line-height:1.7rem;margin:30px 0 20px 0;padding-left:15px;box-sizing:border-box;font-weight:600;position:relative;&::before{content:"";width:5px;height:100%;background-color:',";position:absolute;left:0;top:0.1rem;}}& p{font-size:0.9rem;line-height:1.5rem;}"],i.a.BLACK,i.a.PRIMARY),d=r.b.img.withConfig({displayName:"basicbook__MainImg",componentId:"t1ruen-1"})(["width:300px;"]),m=r.b.div.withConfig({displayName:"basicbook__Container",componentId:"t1ruen-2"})(["display:flex;flex-direction:column;align-items:center;"]),x=r.b.span.withConfig({displayName:"basicbook__BookName",componentId:"t1ruen-3"})(["color:",';font-family:"Noto Sans JP";font-weight:500;font-size:2rem;letter-spacing:0.5rem;margin-right:-0.5rem;line-height:2.5rem;'],i.a.BLACK),b=Object(r.b)("div").withConfig({displayName:"basicbook___StyledDiv",componentId:"t1ruen-4"})(["margin:20px 0;"]),u=Object(r.b)("a").withConfig({displayName:"basicbook___StyledA",componentId:"t1ruen-5"})(["text-decoration:none;margin:10px 0;"]);t.default=function(e){var t=e.data.markdownRemark,o=t.frontmatter,n=t.html,r=o.bookimg.childImageSharp.fluid.src;return a.a.createElement("div",null,a.a.createElement(c.a,{title:o.title,theme:"primary",seemoreShow:"false",barShow:"false"}),a.a.createElement(c.a,{titleShow:"false",barShow:"false",seemoreShow:"false"},a.a.createElement(m,null,a.a.createElement(d,{src:r}),a.a.createElement(b,null,a.a.createElement(l.a,null,o.badge)),a.a.createElement(x,null,o.title),a.a.createElement(u,{href:o.booth},a.a.createElement(p.a,{textcolor:i.a.BOOTH},"BOOTHで購入")),a.a.createElement(s,{dangerouslySetInnerHTML:{__html:n}}))))};var f="3755510442"},BQrF:function(e,t,o){"use strict";var n=o("q1tI"),a=o.n(n),r=o("vOnD"),i=o("ZMKu"),c=o("tC44"),l=Object(r.b)(i.b.div).withConfig({displayName:"button__Wrapper",componentId:"sc-1yykufd-0"})(["width:auto;box-sizing:border-box;padding:10px 20px;margin:5px;background-color:",";box-shadow:3px 3px 10px ",",-5px -5px 10px ",";border-radius:10px;text-align:center;transition-duration:150ms;&:hover{box-shadow:5px 5px 12px ",",-8px -8px 12px ",";transform:scale(1.05);transition-duration:150ms;}"],c.a.BASE,c.a.SHADOW_B,c.a.SHADOW_W,c.a.SHADOW_B,c.a.SHADOW_W);l.defaultProps={textcolor:c.a.PRIMARY};var p=r.b.span.withConfig({displayName:"button__Content",componentId:"sc-1yykufd-1"})(['text-decoration:none;font-size:0.9rem;font-family:"Roboto";color:',";font-weight:300;"],(function(e){return function(e,t){switch(e){case"primary":case"reverse":return c.a.BASE;default:return t}}(e.theme,e.textcolor)}));p.defaultProps={textcolor:c.a.PRIMARY};t.a=function(e){return a.a.createElement(l,{whileHover:{scale:1.05},whileTap:{scale:.95}},a.a.createElement(p,{textcolor:e.textcolor,theme:e.theme},e.children))}},Q4RR:function(e,t,o){"use strict";var n=o("q1tI"),a=o.n(n),r=o("vOnD"),i=o("tC44"),c=r.b.div.withConfig({displayName:"badge__Wrapper",componentId:"sc-106jppv-0"})(["box-sizing:border-box;color:",";background-color:",';padding:7px 20px;font-family:"Noto Sans JP";border-radius:5px;font-size:0.8rem;font-weight:500;display:inline-block;'],(function(e){return e.textcolor}),(function(e){return e.color}));c.defaultProps={textcolor:i.a.BASE,color:i.a.PRIMARY};t.a=function(e){return a.a.createElement(c,{color:e.color,textcolor:e.textcolor},e.children)}},qx5a:function(e,t,o){"use strict";var n=o("q1tI"),a=o.n(n),r=o("vOnD"),i=o("Wbzz"),c=o("tC44"),l=(r.b.div.withConfig({displayName:"seemorebutton__Wrapper",componentId:"sc-1s243z3-0"})(["width:100px;box-sizing:border-box;padding:10px;background-color:",";box-shadow:3px 3px 10px ",",-5px -5px 10px ",";border-radius:10px;text-align:center;transition-duration:150ms;&:hover{box-shadow:5px 5px 12px ",",-8px -8px 12px ",";transform:scale(1.05);transition-duration:150ms;}"],c.a.BASE,c.a.SHADOW_B,c.a.SHADOW_W,c.a.SHADOW_B,c.a.SHADOW_W),r.b.span.withConfig({displayName:"seemorebutton__Content",componentId:"sc-1s243z3-1"})(['font-size:0.9rem;font-family:"Roboto";color:',";font-weight:300;"],c.a.PRIMARY),o("BQrF")),p=function(e,t){switch(e){case"primary":case"reverse":return c.a.BASE;default:return t}},s=r.b.div.withConfig({displayName:"card__Wrapper",componentId:"sc-1vdm5bs-0"})(["border-radius:10px;background:",";box-shadow:5px 5px 10px ",",-5px -5px 10px ",";width:90vw;max-width:900px;margin:40px 0px;display:flex;padding:20px;box-sizing:border-box;flex-direction:column;align-items:center;"],(function(e){return function(e,t){switch(e){case"primary":return c.a.PRIMARY;case"reverse":return c.a.BLACK;default:return t}}(e.theme,e.bgcolor)}),c.a.SHADOW_B,c.a.SHADOW_W);s.defaultProps={bgcolor:c.a.BASE};var d=r.b.span.withConfig({displayName:"card__Title",componentId:"sc-1vdm5bs-1"})(['font-family:"Noto Sans JP";color:',";font-size:1.4rem;letter-spacing:0.5rem;margin-right:-0.5rem;font-weight:500;line-height:1.7rem;text-align:center;"],(function(e){return p(e.theme,e.color)}));d.defaultProps={color:c.a.BLACK};var m=r.b.div.withConfig({displayName:"card__Bar",componentId:"sc-1vdm5bs-2"})(["width:40px;height:2px;background-color:",";margin:20px 0;"],(function(e){return p(e.theme,e.color)}));m.defaultProps={color:c.a.BLACK};var x=r.b.div.withConfig({displayName:"card__SeeMoreWrapper",componentId:"sc-1vdm5bs-3"})(["margin-top:10px;margin-left:auto;"]),b=Object(r.b)(i.a).withConfig({displayName:"card__LinkT",componentId:"sc-1vdm5bs-4"})(["text-decoration:none;color:",";"],c.a.PRIMARY);t.a=function(e){return a.a.createElement(s,{bgcolor:e.bgcolor,theme:e.theme},a.a.createElement(d,{style:{display:e.titleShow?"none":""},color:e.textcolor,theme:e.theme},e.title),a.a.createElement(m,{style:{display:e.barShow?"none":""},color:e.textcolor,theme:e.theme}),e.children,a.a.createElement(x,{style:{display:e.seemoreShow?"none":""}},a.a.createElement(b,{to:e.linkto},a.a.createElement(l.a,null,"SEE MORE"))))}}}]);
//# sourceMappingURL=component---src-templates-basicbook-jsx-33054eb6b2553afd9324.js.map