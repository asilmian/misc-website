(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{300:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c})),a.d(t,"postQuery",(function(){return u}));var r=a(1),i=a.n(r),n=a(81),s=a(319),l=a.n(s),o=a(297),d=a(296);a(301);function c(e){var t=e.data,a=e.pageContext,r=t.markdownRemark,s=a.prev,c=a.next;return i.a.createElement(o.a,null,i.a.createElement("div",{className:"blog-post-container"},i.a.createElement(d.a,{title:"MISC - "+r.frontmatter.title}),i.a.createElement("div",{className:"blog-post"},i.a.createElement("br",null),i.a.createElement("div",{className:"blog-post-header"},i.a.createElement(l.a,{fluid:r.frontmatter.image.childImageSharp.fluid}),i.a.createElement("h1",{className:"title"},r.frontmatter.title)),i.a.createElement("hr",{className:"blog-header-separator"}),i.a.createElement("br",null),i.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:r.html}}),i.a.createElement("hr",null),i.a.createElement("div",{className:"blog-post-footer"},s&&i.a.createElement(n.Link,{to:s.frontmatter.path,rel:"prev",className:"prev-link"},"← ",s.frontmatter.title),c&&i.a.createElement(n.Link,{to:c.frontmatter.path,rel:"next",className:"next-link"},c.frontmatter.title," →")))))}var u="71250472"},319:function(e,t,a){"use strict";a(7),a(5),a(3),a(80),a(173),a(320);var r=a(4);t.__esModule=!0,t.default=void 0;var i,n=r(a(39)),s=r(a(33)),l=r(a(29)),o=r(a(18)),d=r(a(1)),c=r(a(24)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(V,(0,o.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},V=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,L=e.loading,I=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,o.default)({opacity:z?1:0,transition:N?"opacity "+b+"ms":"none"},l),C="boolean"==typeof h?"lightgray":h,T={transitionDelay:b+"ms"},x=(0,o.default)({opacity:this.state.imgLoaded?0:1},N&&T,{},l,{},f),j={title:t,alt:this.state.isVisible?"":a,style:x,className:g};if(p){var P=p,M=P[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),C&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&T)}),M.base64&&d.default.createElement(R,{src:M.base64,spreadProps:j,imageVariants:P,generateSources:w}),M.tracedSVG&&d.default.createElement(R,{src:M.tracedSVG,spreadProps:j,imageVariants:P,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(P),d.default.createElement(V,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:L},M,{imageVariants:P}))}}))}if(m){var W=m,q=W[0],_=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete _.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},C&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:C,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},N&&T)}),q.base64&&d.default.createElement(R,{src:q.base64,spreadProps:j,imageVariants:W,generateSources:w}),q.tracedSVG&&d.default.createElement(R,{src:q.tracedSVG,spreadProps:j,imageVariants:W,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(W),d.default.createElement(V,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:L},q,{imageVariants:W}))}}))}return null},t}(d.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),k=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});z.propTypes={resolutions:N,sizes:k,fixed:c.default.oneOfType([N,c.default.arrayOf(N)]),fluid:c.default.oneOfType([k,c.default.arrayOf(k)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=z;t.default=C},320:function(e,t,a){"use strict";a(174)("fixed",(function(e){return function(){return e(this,"tt","","")}}))}}]);
//# sourceMappingURL=component---src-templates-event-post-js-873877a80818a46d3e15.js.map