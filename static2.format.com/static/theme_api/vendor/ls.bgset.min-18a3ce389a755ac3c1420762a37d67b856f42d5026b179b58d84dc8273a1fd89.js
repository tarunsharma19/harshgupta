/*! lazysizes - v1.5.0-rc3 */
!function(){"use strict";if(window.addEventListener){var e,t=/\s+/g,a=/\s*\|\s+|\s+\|\s*/g,i=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,s={contain:1,cover:1},r=window.requestAnimationFrame||setTimeout,n=function(e){var t=e._bgsetReadCache&&"width"in e._bgsetReadCache?e._bgsetReadCache.width:lazySizes.gW(e,e.parentNode);return(!e._lazysizesWidth||t>e._lazysizesWidth)&&(e._lazysizesWidth=t),e._lazysizesWidth},d=function(e){var t;return e._bgsetReadCache?t=e._bgsetReadCache.bgSize:(t=(getComputedStyle(e)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!s[t]&&s[e.style.backgroundSize]&&(t=e.style.backgroundSize)),t},l=function(e,r,n){var l=document.createElement("picture"),o=r.getAttribute(lazySizesConfig.sizesAttr),g=r.getAttribute("data-ratio"),z=r.getAttribute("data-optimumx"),u=d(r);!s[u]||"auto"!=o&&o||(n.setAttribute("data-parent-fit",u),o="auto"),r._lazybgset&&r._lazybgset.parentNode==r&&r.removeChild(r._lazybgset),Object.defineProperty(n,"_lazybgset",{value:r,writable:!0}),Object.defineProperty(r,"_lazybgset",{value:l,writable:!0}),e=e.replace(t," ").split(a),l.style.display="none",n.className=lazySizesConfig.lazyClass,1!=e.length||o||(o="auto"),e.forEach(function(e){var t=document.createElement("source");o&&"auto"!=o&&t.setAttribute("sizes",o),e.match(i)&&(t.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&t.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),l.appendChild(t)}),o&&(n.setAttribute(lazySizesConfig.sizesAttr,o),r.removeAttribute(lazySizesConfig.sizesAttr),r.removeAttribute("sizes")),z&&n.setAttribute("data-optimumx",z),g&&n.setAttribute("data-ratio",g),l.appendChild(n),r.appendChild(l)},o=function(e){if(e.target._lazybgset){var t=e.target,a=t._lazybgset,i=t.currentSrc||t.src;i&&(a.style.backgroundImage="url("+i+")"),t._lazybgsetLoading&&(lazySizes.fire(a,"_lazyloaded",{},!1,!0),delete t._lazybgsetLoading)}};window.lazySizesConfig=window.lazySizesConfig||{},e=window.lazySizesConfig.rC,window.lazySizesConfig.rC=function(t,a){var i;return e&&(a=e.apply(this,arguments)||a),t.getAttribute("data-bgset")&&(i=d(t),(s[i]||t.getAttribute(lazySizesConfig.sizesAttr))&&(a=n(t)),t._bgsetReadCache={bgSize:i,width:a}),t._bgsetReadCache&&t._bgsetReadCache.width||a},addEventListener("lazybeforeunveil",function(e){var t,a,i;!e.defaultPrevented&&(t=e.target.getAttribute("data-bgset"))&&(i=e.target,a=document.createElement("img"),a.alt="",a._lazybgsetLoading=!0,e.detail.firesLoad=!0,l(t,i,a),a._bgsetReadCache=i._bgsetReadCache,setTimeout(function(){lazySizes.loader.unveil(a),r(function(){lazySizes.fire(a,"_lazyloaded",{},!0,!0),a.complete&&o({target:a}),i._bgsetReadCache&&delete i._bgsetReadCache,a._bgsetReadCache&&delete a._bgsetReadCache})}))}),document.addEventListener("load",o,!0),document.documentElement.addEventListener("lazybeforesizes",function(e){!e.defaultPrevented&&e.target._lazybgset&&(e.detail.width=n(e.target._lazybgset))})}}();