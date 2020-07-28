/*! lazysizes - v1.5.0-rc3 */
!function(t,e){"use strict";if(t.addEventListener){var i,a=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,r=/^picture$/i,n={getFit:function(t){var e={fit:t.getAttribute("data-parent-fit")};return e.fit?(e.parent=t.parentNode,e.parent&&r.test(e.parent.nodeName||"")&&(e.parent=e.parent.parentNode)):e.fit=(getComputedStyle(t)||{getPropertyValue:function(){}}).getPropertyValue("object-fit"),e},getImageRatio:function(e){var i,n,o,d={},f=e.parentNode,c=f&&r.test(f.nodeName||"")?f.querySelectorAll("source, img"):[e];for(i=0;i<c.length;i++)if(e=c[i],n=e.getAttribute(lazySizesConfig.srcsetAttr)||e.getAttribute("srcset")||e.getAttribute("data-pfsrcset")||e.getAttribute("data-risrcset")||"",o=e.getAttribute("media"),o=lazySizesConfig.customMedia[e.getAttribute("data-media")||o]||o,n&&(!o||(t.matchMedia&&matchMedia(o)||{}).matches)){n.match(a)&&("w"==RegExp.$2?(d.w=RegExp.$1,d.h=RegExp.$3):(d.w=RegExp.$3,d.h=RegExp.$1));break}return d.w/d.h},calculateSize:function(t,e){if(t._parentfitWidthCache)return t._parentfitWidthCache;var i,a,r,n,o=this.getFit(t),d=o.fit,f=o.parent;return"width"==d||("contain"==d||"cover"==d)&&(r=this.getImageRatio(t))?(f?e=f.offsetWidth:f=t,n=e,"width"==d?n=e:(a=f.offsetHeight)>40&&(i=e/a)&&("cover"==d&&r>i||"contain"==d&&i>r)&&(n=e*(r/i)),n):e}},o=function(){t.lazySizes&&(lazySizes.parentFit||(lazySizes.parentFit=n),t.removeEventListener("lazybeforeunveil",o,!0))};t.lazySizesConfig=t.lazySizesConfig||{},i=t.lazySizesConfig.rC,t.lazySizesConfig.rC=function(t,e){return i&&(e=i.apply(this,arguments)||e),t._parentfitWidthCache=n.calculateSize(t,e)||e,t._parentfitWidthCache},t.addEventListener("lazybeforeunveil",o,!0),e.addEventListener("lazybeforesizes",function(t){if(!t.defaultPrevented){var e=t.target;t.detail.width=n.calculateSize(e,t.detail.width),e._parentfitWidthCache&&delete e._parentfitWidthCache}}),setTimeout(o)}}(window,document);