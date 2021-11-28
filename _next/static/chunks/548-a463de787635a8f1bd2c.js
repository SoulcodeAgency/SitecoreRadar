"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{2962:function(e,t,o){o.d(t,{PB:function(){return c}});var r=o(9008),a=o(7294);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var i={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0,disableGooglebot:!1},l=function(e,t,o){void 0===t&&(t=[]);var r=void 0===o?{}:o,n=r.defaultWidth,p=r.defaultHeight;return t.reduce((function(t,o,r){return t.push(a.createElement("meta",{key:"og:"+e+":0"+r,property:"og:"+e,content:o.url})),o.alt&&t.push(a.createElement("meta",{key:"og:"+e+":alt0"+r,property:"og:"+e+":alt",content:o.alt})),o.secureUrl&&t.push(a.createElement("meta",{key:"og:"+e+":secure_url0"+r,property:"og:"+e+":secure_url",content:o.secureUrl.toString()})),o.type&&t.push(a.createElement("meta",{key:"og:"+e+":type0"+r,property:"og:"+e+":type",content:o.type.toString()})),o.width?t.push(a.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:o.width.toString()})):n&&t.push(a.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:n.toString()})),o.height?t.push(a.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:o.height.toString()})):p&&t.push(a.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:p.toString()})),t}),[])},h=function(e){var t,o,r,p=[];e.titleTemplate&&(i.templateTitle=e.titleTemplate);var h="";e.title?(h=e.title,i.templateTitle&&(h=i.templateTitle.replace(/%s/g,(function(){return h})))):e.defaultTitle&&(h=e.defaultTitle),h&&p.push(a.createElement("title",{key:"title"},h));var c,s,d=e.noindex||i.noindex||e.dangerouslySetAllPagesToNoIndex,u=e.nofollow||i.nofollow||e.dangerouslySetAllPagesToNoFollow,m=e.disableGooglebot||i.disableGooglebot||e.dangerouslyDisableGooglebot,g="";if(e.robotsProps){var f=e.robotsProps,y=f.nosnippet,G=f.maxSnippet,k=f.maxImagePreview,b=f.maxVideoPreview,v=f.noarchive,E=f.noimageindex,w=f.notranslate,O=f.unavailableAfter;g=(y?",nosnippet":"")+(G?",max-snippet:"+G:"")+(k?",max-image-preview:"+k:"")+(v?",noarchive":"")+(O?",unavailable_after:"+O:"")+(E?",noimageindex":"")+(b?",max-video-preview:"+b:"")+(w?",notranslate":"")}(e.dangerouslyDisableGooglebot&&(i.disableGooglebot=!0),d||u?(e.dangerouslySetAllPagesToNoIndex&&(i.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(i.nofollow=!0),p.push(a.createElement("meta",{key:"robots",name:"robots",content:(d?"noindex":"index")+","+(u?"nofollow":"follow")+g})),m||p.push(a.createElement("meta",{key:"googlebot",name:"googlebot",content:(d?"noindex":"index")+","+(u?"nofollow":"follow")+g}))):(p.push(a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+g})),m||p.push(a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+g}))),e.description&&p.push(a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&p.push(a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){p.push(a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&p.push(a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&p.push(a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&p.push(a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&p.push(a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||e.title)&&p.push(a.createElement("meta",{key:"og:title",property:"og:title",content:(null==(c=e.openGraph)?void 0:c.title)||h}));(null!=(o=e.openGraph)&&o.description||e.description)&&p.push(a.createElement("meta",{key:"og:description",property:"og:description",content:(null==(s=e.openGraph)?void 0:s.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&p.push(a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var _=e.openGraph.type.toLowerCase();p.push(a.createElement("meta",{key:"og:type",property:"og:type",content:_})),"profile"===_&&e.openGraph.profile?(e.openGraph.profile.firstName&&p.push(a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&p.push(a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&p.push(a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&p.push(a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===_&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){p.push(a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&p.push(a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&p.push(a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){p.push(a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===_&&e.openGraph.article?(e.openGraph.article.publishedTime&&p.push(a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&p.push(a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&p.push(a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){p.push(a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&p.push(a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){p.push(a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==_&&"video.episode"!==_&&"video.tv_show"!==_&&"video.other"!==_||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&p.push(a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&p.push(a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){p.push(a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){p.push(a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&p.push(a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&p.push(a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){p.push(a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&p.push(a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(i.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(i.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&p.push.apply(p,l("image",e.openGraph.images,{defaultWidth:i.defaultOpenGraphImageWidth,defaultHeight:i.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(i.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(i.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&p.push.apply(p,l("video",e.openGraph.videos,{defaultWidth:i.defaultOpenGraphVideoWidth,defaultHeight:i.defaultOpenGraphVideoHeight})),e.openGraph.locale&&p.push(a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&p.push(a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&p.push(a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,o,r;p.push(a.createElement("meta",n({key:"meta:"+(null!=(t=null!=(o=null!=(r=e.keyOverride)?r:e.name)?o:e.property)?t:e.httpEquiv)},e)))})),null!=(r=e.additionalLinkTags)&&r.length&&e.additionalLinkTags.forEach((function(e){var t;p.push(a.createElement("link",n({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),p},c=(a.Component,function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.title,o=e.noindex,n=void 0!==o&&o,p=e.nofollow,i=e.robotsProps,l=e.description,c=e.canonical,s=e.openGraph,d=e.facebook,u=e.twitter,m=e.additionalMetaTags,g=e.titleTemplate,f=e.mobileAlternate,y=e.languageAlternates,G=e.additionalLinkTags,k=e.disableGooglebot;return a.createElement(r.default,null,h({title:t,noindex:n,nofollow:p,robotsProps:i,description:l,canonical:c,facebook:d,openGraph:s,additionalMetaTags:m,twitter:u,titleTemplate:g,mobileAlternate:f,languageAlternates:y,additionalLinkTags:G,disableGooglebot:k}))},t}(a.Component))},159:function(e,t,o){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}o.d(t,{Z:function(){return r}})},219:function(e,t,o){function r(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}o.d(t,{Z:function(){return r}})}}]);