(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var r=n("q1tI"),o=a(r),i=a(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function f(){l=e(u.map((function(e){return e.props}))),T.canUseDOM?t(l):n&&(l=n(l))}var T=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.peek=function(){return l},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var c=r.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){u.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},c.render=function(){return o.createElement(a,this.props)},r}(r.Component);return c(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),c(T,"canUseDOM",s),T}}},Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.children,n=r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark navbar-custom"},r.a.createElement("a",{className:"navbar-brand logo-text page-scroll",href:"https://www.startfitness.life"},"Start Fitness"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-awesome fas fa-bars"}),r.a.createElement("span",{className:"navbar-toggler-awesome fas fa-times"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarsExampleDefault"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link page-scroll",href:"https://www.startfitness.life"},"HOME")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link page-scroll",href:"https://www.startfitness.life/blog"},"BLOG")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link page-scroll",href:"https://www.startfitness.life/privacy-policy.html"},"PRIVACY")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link page-scroll",href:"https://www.startfitness.life/#contact"},"CONTACT"))),r.a.createElement("span",{className:"nav-item social-icons"},r.a.createElement("span",{className:"fa-stack"},r.a.createElement("a",{href:"https://www.facebook.com/Start-Fitness-105231557819606"},r.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),r.a.createElement("i",{className:"fab fa-facebook-f fa-stack-1x"}))),r.a.createElement("span",{className:"fa-stack"},r.a.createElement("a",{href:"https://twitter.com/StartFitness321"},r.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),r.a.createElement("i",{className:"fab fa-twitter fa-stack-1x"}))),r.a.createElement("span",{className:"fa-stack"},r.a.createElement("a",{href:"https://www.instagram.com/_startfitness/"},r.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),r.a.createElement("i",{className:"fab fa-instagram fa-stack-1x"})))))),a=r.a.createElement("header",{id:"header",className:"header header-blog"},r.a.createElement("div",{className:"header-content"},n));return r.a.createElement("div",null,a,r.a.createElement("main",{className:"tabs"},r.a.createElement("div",{className:"container col-8"},t)),r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"footer-col"},r.a.createElement("h4",null,"About Start Fitness"),r.a.createElement("p",null,"We're creating mobile apps for fitness training that keep workouts simple while achieving the best results."))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"footer-col middle"},r.a.createElement("h4",null,"Important Links"),r.a.createElement("ul",{className:"list-unstyled li-space-lg yellow"},r.a.createElement("li",{className:"media"},r.a.createElement("i",{className:"fas fa-square"}),r.a.createElement("div",{className:"media-body"},r.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.simplyfit.rowing&hl=en"},"Start Rowing on Android Play Store"))),r.a.createElement("li",{className:"media"},r.a.createElement("i",{className:"fas fa-square"}),r.a.createElement("div",{className:"media-body"},r.a.createElement("a",{href:"https://apps.apple.com/us/app/start-rowing/id1504306767?ls=1"},"Start Rowing on Apple App Store")))))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"footer-col last"},r.a.createElement("h4",null,"Social Media"),r.a.createElement("span",{className:"fa-stack"},r.a.createElement("a",{href:"https://www.facebook.com/Start-Fitness-105231557819606"},r.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),r.a.createElement("i",{className:"fab fa-facebook-f fa-stack-1x"}))),r.a.createElement("span",{className:"fa-stack"},r.a.createElement("a",{href:"https://twitter.com/StartFitness321"},r.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),r.a.createElement("i",{className:"fab fa-twitter fa-stack-1x"}))),r.a.createElement("span",{className:"fa-stack"},r.a.createElement("a",{href:"https://www.instagram.com/_startfitness/"},r.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),r.a.createElement("i",{className:"fab fa-instagram fa-stack-1x"})))))))),r.a.createElement("div",{className:"copyright"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("p",{className:"p-small"},"Copyright © 2020 ",r.a.createElement("a",{href:"https://www.startfitness.life"},"Start Fitness")," - All rights reserved"))))))}},C9fy:function(e,t,n){var a=Date.prototype,r=a.toString,o=a.getTime;new Date(NaN)+""!="Invalid Date"&&n("IYdN")(a,"toString",(function(){var e=o.call(this);return e==e?r.call(this):"Invalid Date"}))},Gytx:function(e,t,n){n("n7j8"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),e.exports=function(e,t,n,a){var r=n?n.call(a,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var l=o[s];if(!c(l))return!1;var u=e[l],f=t[l];if(!1===(r=n?n.call(a,u,f,l):void 0)||void 0===r&&u!==f)return!1}return!0}},IUVq:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Start Fitness","description":"","social":{"twitter":"StartFitness321"}}}}}')},R48M:function(e,t,n){var a=n("P8UN");a(a.S+a.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},TJpk:function(e,t,n){n("MIFh"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok"),n("LagC"),n("pS08"),n("sc67"),n("R48M"),n("E5k/"),t.__esModule=!0,t.Helmet=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=f(n("q1tI")),i=f(n("17x9")),c=f(n("8+s/")),s=f(n("bmMU")),l=n("v1p5"),u=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,d,A,h=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),S=(m=h,A=d=function(e){function t(){return p(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return a({},r,((t={})[n.type]=[].concat(r[n.type]||[],[a({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(r.type){case u.TAG_NAMES.TITLE:return a({},o,((t={})[r.type]=c,t.titleAttributes=a({},i),t));case u.TAG_NAMES.BODY:return a({},o,{bodyAttributes:a({},i)});case u.TAG_NAMES.HTML:return a({},o,{htmlAttributes:a({},i)})}return a({},o,((n={})[r.type]=a({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=a({},t);return Object.keys(e).forEach((function(t){var r;n=a({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,o=r.children,i=T(r,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=T(e,["children"]),r=a({},n);return t&&(r=this.mapChildrenToProps(t,r)),o.default.createElement(m,r)},r(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(o.default.Component),d.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=m.peek,d.rewind=function(){var e=m.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},A);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},bmMU:function(e,t,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("C9fy"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("MIFh");var a=Array.isArray,r=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,l,u=a(t),f=a(n);if(u&&f){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=f)return!1;var T=t instanceof Date,p=n instanceof Date;if(T!=p)return!1;if(T&&p)return t.getTime()==n.getTime();var E=t instanceof RegExp,m=n instanceof RegExp;if(E!=m)return!1;if(E&&m)return t.toString()==n.toString();var d=r(t);if((s=d.length)!==r(n).length)return!1;for(c=s;0!=c--;)if(!o.call(n,d[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(l=d[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var a=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(a).map((function(e){return a[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[a.NOSCRIPT,a.SCRIPT,a.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},klQ5:function(e,t,n){var a=n("emib"),r=n("TUPI"),o=n("rjfK").f,i=n("chL8").f,c=n("mhTz"),s=n("lb9j"),l=a.RegExp,u=l,f=l.prototype,T=/a/g,p=/a/g,E=new l(T)!==T;if(n("QPJK")&&(!E||n("96qb")((function(){return p[n("sOol")("match")]=!1,l(T)!=T||l(p)==p||"/a/i"!=l(T,"i")})))){l=function(e,t){var n=this instanceof l,a=c(e),o=void 0===t;return!n&&a&&e.constructor===l&&o?e:r(E?new u(a&&!o?e.source:e,t):u((a=e instanceof l)?e.source:e,a&&o?s.call(e):t),n?this:f,l)};for(var m=function(e){e in l||o(l,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},d=i(u),A=0;d.length>A;)m(d[A++]);f.constructor=l,l.prototype=f,n("IYdN")(a,"RegExp",l)}n("to/b")("RegExp")},v1p5:function(e,t,n){(function(e){n("wZFJ"),n("HQhv"),n("1dPr"),n("JHok"),n("MIFh"),n("sc67"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("OeI1"),n("AqHK"),n("U6Bt"),n("sC2a"),n("E5k/"),n("m210"),n("4DPX"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=s(n("q1tI")),i=s(n("MgzW")),c=n("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var l,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=d(e,c.TAG_NAMES.TITLE),n=d(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var a=d(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||a||void 0},T=function(e){return d(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return r({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var a=Object.keys(n),r=0;r<a.length;r++){var o=a[r].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},m=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&y("Helmet: "+e+' should be of type "Array". Instead found type "'+a(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],l=s.toLowerCase();-1===t.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),s=0;s<o.length;s++){var l=o[s],u=(0,i.default)({},r[l],a[l]);r[l]=u}return e}),[]).reverse()},d=function(e,t){for(var n=e.length-1;n>=0;n--){var a=e[n];if(a.hasOwnProperty(t))return a[t]}return null},A=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){A(e)}),0)}),h=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,y=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,g=function(e,t){var n=e.baseTag,a=e.bodyAttributes,r=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,T=e.title,p=e.titleAttributes;w(c.TAG_NAMES.BODY,a),w(c.TAG_NAMES.HTML,r),_(T,p);var E={baseTag:R(c.TAG_NAMES.BASE,n),linkTags:R(c.TAG_NAMES.LINK,o),metaTags:R(c.TAG_NAMES.META,i),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,s),scriptTags:R(c.TAG_NAMES.SCRIPT,u),styleTags:R(c.TAG_NAMES.STYLE,f)},m={},d={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,a=t.oldTags;n.length&&(m[e]=n),a.length&&(d[e]=E[e].oldTags)})),t&&t(),l(e,m,d)},N=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=N(e)),w(c.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var a=n.getAttribute(c.HELMET_ATTRIBUTE),r=a?a.split(","):[],o=[].concat(r),i=Object.keys(t),s=0;s<i.length;s++){var l=i[s],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===r.indexOf(l)&&r.push(l);var f=o.indexOf(l);-1!==f&&o.splice(f,1)}for(var T=o.length-1;T>=0;T--)n.removeAttribute(o[T]);r.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),a=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),r=Array.prototype.slice.call(a),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var a in t)if(t.hasOwnProperty(a))if(a===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(a===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[a]?"":t[a];n.setAttribute(a,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),r.some((function(e,t){return i=t,n.isEqualNode(e)}))?r.splice(i,1):o.push(n)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:r,newTags:o}},P=function(e){return Object.keys(e).reduce((function(t,n){var a=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+a:a}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},O=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})[c.HELMET_ATTRIBUTE]=!0,r=M(n,a),[o.default.createElement(c.TAG_NAMES.TITLE,r,e)];var e,n,a,r},toString:function(){return function(e,t,n,a){var r=P(n),o=N(t);return r?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+r+">"+u(o,a)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(o,a)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,r=((a={key:n})[c.HELMET_ATTRIBUTE]=!0,a);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var a=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:a}}else r[n]=t[e]})),o.default.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,a){var r=Object.keys(a).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var r=void 0===a[t]?t:t+'="'+u(a[t],n)+'"';return e?e+" "+r:r}),""),o=a.innerHTML||a.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+r+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){b&&v(b),e.defer?b=S((function(){g(e,(function(){b=null}))})):(g(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,a=e.encode,r=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,f=e.title,T=void 0===f?"":f,p=e.titleAttributes;return{base:O(c.TAG_NAMES.BASE,t,a),bodyAttributes:O(c.ATTRIBUTE_NAMES.BODY,n,a),htmlAttributes:O(c.ATTRIBUTE_NAMES.HTML,r,a),link:O(c.TAG_NAMES.LINK,o,a),meta:O(c.TAG_NAMES.META,i,a),noscript:O(c.TAG_NAMES.NOSCRIPT,s,a),script:O(c.TAG_NAMES.SCRIPT,l,a),style:O(c.TAG_NAMES.STYLE,u,a),title:O(c.TAG_NAMES.TITLE,{title:T,titleAttributes:p},a)}},t.reducePropsToState=function(e){return{baseTag:E([c.TAG_PROPERTIES.HREF],e),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,e),defer:d(e,c.HELMET_PROPS.DEFER),encode:d(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=S,t.warn=y}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var a=n("IUVq"),r=n("q1tI"),o=n.n(r),i=n("TJpk"),c=n.n(i),s=function(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,s=a.data.site,l=t||s.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.social.twitter},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(r)})};s.defaultProps={lang:"en",meta:[],description:""},t.a=s},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(a){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-45e4718a6e8fa8e8ce16.js.map