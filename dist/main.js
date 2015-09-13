/*! Sortable 1.2.1 - MIT | git://github.com/rubaxa/Sortable.git */
!function(a){"use strict";"function"==typeof define&&define.amd?define(a):"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=a():"undefined"!=typeof Package?Sortable=a():window.Sortable=a()}(function(){"use strict";function a(a,b){this.el=a,this.options=b=s({},b),a[J]=this;var d={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(a.nodeName)?"li":">*",ghostClass:"sortable-ghost",ignore:"a, img",filter:null,animation:0,setData:function(a,b){a.setData("Text",b.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0};for(var e in d)!(e in b)&&(b[e]=d[e]);var g=b.group;g&&"object"==typeof g||(g=b.group={name:g}),["pull","put"].forEach(function(a){a in g||(g[a]=!0)}),b.groups=" "+g.name+(g.put.join?" "+g.put.join(" "):"")+" ";for(var h in this)"_"===h.charAt(0)&&(this[h]=c(this,this[h]));f(a,"mousedown",this._onTapStart),f(a,"touchstart",this._onTapStart),f(a,"dragover",this),f(a,"dragenter",this),R.push(this._onDragOver),b.store&&this.sort(b.store.get(this))}function b(a){v&&v.state!==a&&(i(v,"display",a?"none":""),!a&&v.state&&w.insertBefore(v,t),v.state=a)}function c(a,b){var c=Q.call(arguments,2);return b.bind?b.bind.apply(b,[a].concat(c)):function(){return b.apply(a,c.concat(Q.call(arguments)))}}function d(a,b,c){if(a){c=c||L,b=b.split(".");var d=b.shift().toUpperCase(),e=new RegExp("\\s("+b.join("|")+")(?=\\s)","g");do if(">*"===d&&a.parentNode===c||(""===d||a.nodeName.toUpperCase()==d)&&(!b.length||((" "+a.className+" ").match(e)||[]).length==b.length))return a;while(a!==c&&(a=a.parentNode))}return null}function e(a){a.dataTransfer.dropEffect="move",a.preventDefault()}function f(a,b,c){a.addEventListener(b,c,!1)}function g(a,b,c){a.removeEventListener(b,c,!1)}function h(a,b,c){if(a)if(a.classList)a.classList[c?"add":"remove"](b);else{var d=(" "+a.className+" ").replace(I," ").replace(" "+b+" "," ");a.className=(d+(c?" "+b:"")).replace(I," ")}}function i(a,b,c){var d=a&&a.style;if(d){if(void 0===c)return L.defaultView&&L.defaultView.getComputedStyle?c=L.defaultView.getComputedStyle(a,""):a.currentStyle&&(c=a.currentStyle),void 0===b?c:c[b];b in d||(b="-webkit-"+b),d[b]=c+("string"==typeof c?"":"px")}}function j(a,b,c){if(a){var d=a.getElementsByTagName(b),e=0,f=d.length;if(c)for(;f>e;e++)c(d[e],e);return d}return[]}function k(a,b,c,d,e,f,g){var h=L.createEvent("Event"),i=(a||b[J]).options,j="on"+c.charAt(0).toUpperCase()+c.substr(1);h.initEvent(c,!0,!0),h.to=b,h.from=e||b,h.item=d||b,h.clone=v,h.oldIndex=f,h.newIndex=g,b.dispatchEvent(h),i[j]&&i[j].call(a,h)}function l(a,b,c,d,e,f){var g,h,i=a[J],j=i.options.onMove;return j&&(g=L.createEvent("Event"),g.initEvent("move",!0,!0),g.to=b,g.from=a,g.dragged=c,g.draggedRect=d,g.related=e||b,g.relatedRect=f||b.getBoundingClientRect(),h=j.call(i,g)),h}function m(a){a.draggable=!1}function n(){O=!1}function o(a,b){var c=a.lastElementChild,d=c.getBoundingClientRect();return b.clientY-(d.top+d.height)>5&&c}function p(a){for(var b=a.tagName+a.className+a.src+a.href+a.textContent,c=b.length,d=0;c--;)d+=b.charCodeAt(c);return d.toString(36)}function q(a){for(var b=0;a&&(a=a.previousElementSibling);)"TEMPLATE"!==a.nodeName.toUpperCase()&&b++;return b}function r(a,b){var c,d;return function(){void 0===c&&(c=arguments,d=this,setTimeout(function(){1===c.length?a.call(d,c[0]):a.apply(d,c),c=void 0},b))}}function s(a,b){if(a&&b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}var t,u,v,w,x,y,z,A,B,C,D,E,F,G,H={},I=/\s+/g,J="Sortable"+(new Date).getTime(),K=window,L=K.document,M=K.parseInt,N=!!("draggable"in L.createElement("div")),O=!1,P=Math.abs,Q=[].slice,R=[],S=r(function(a,b,c){if(c&&b.scroll){var d,e,f,g,h=b.scrollSensitivity,i=b.scrollSpeed,j=a.clientX,k=a.clientY,l=window.innerWidth,m=window.innerHeight;if(z!==c&&(y=b.scroll,z=c,y===!0)){y=c;do if(y.offsetWidth<y.scrollWidth||y.offsetHeight<y.scrollHeight)break;while(y=y.parentNode)}y&&(d=y,e=y.getBoundingClientRect(),f=(P(e.right-j)<=h)-(P(e.left-j)<=h),g=(P(e.bottom-k)<=h)-(P(e.top-k)<=h)),f||g||(f=(h>=l-j)-(h>=j),g=(h>=m-k)-(h>=k),(f||g)&&(d=K)),(H.vx!==f||H.vy!==g||H.el!==d)&&(H.el=d,H.vx=f,H.vy=g,clearInterval(H.pid),d&&(H.pid=setInterval(function(){d===K?K.scrollTo(K.pageXOffset+f*i,K.pageYOffset+g*i):(g&&(d.scrollTop+=g*i),f&&(d.scrollLeft+=f*i))},24)))}},30);return a.prototype={constructor:a,_onTapStart:function(a){var b=this,c=this.el,e=this.options,f=a.type,g=a.touches&&a.touches[0],h=(g||a).target,i=h,j=e.filter;if(!("mousedown"===f&&0!==a.button||e.disabled)&&(h=d(h,e.draggable,c))){if(C=q(h),"function"==typeof j){if(j.call(this,a,h,this))return k(b,i,"filter",h,c,C),void a.preventDefault()}else if(j&&(j=j.split(",").some(function(a){return a=d(i,a.trim(),c),a?(k(b,a,"filter",h,c,C),!0):void 0})))return void a.preventDefault();(!e.handle||d(i,e.handle,c))&&this._prepareDragStart(a,g,h)}},_prepareDragStart:function(a,b,c){var d,e=this,g=e.el,h=e.options,i=g.ownerDocument;c&&!t&&c.parentNode===g&&(F=a,w=g,t=c,x=t.nextSibling,E=h.group,d=function(){e._disableDelayedDrag(),t.draggable=!0,h.ignore.split(",").forEach(function(a){j(t,a.trim(),m)}),e._triggerDragStart(b)},f(i,"mouseup",e._onDrop),f(i,"touchend",e._onDrop),f(i,"touchcancel",e._onDrop),h.delay?(f(i,"mousemove",e._disableDelayedDrag),f(i,"touchmove",e._disableDelayedDrag),e._dragStartTimer=setTimeout(d,h.delay)):d())},_disableDelayedDrag:function(){var a=this.el.ownerDocument;clearTimeout(this._dragStartTimer),g(a,"mousemove",this._disableDelayedDrag),g(a,"touchmove",this._disableDelayedDrag)},_triggerDragStart:function(a){a?(F={target:t,clientX:a.clientX,clientY:a.clientY},this._onDragStart(F,"touch")):N?(f(t,"dragend",this),f(w,"dragstart",this._onDragStart)):this._onDragStart(F,!0);try{L.selection?L.selection.empty():window.getSelection().removeAllRanges()}catch(b){}},_dragStarted:function(){w&&t&&(h(t,this.options.ghostClass,!0),a.active=this,k(this,w,"start",t,w,C))},_emulateDragOver:function(){if(G){i(u,"display","none");var a=L.elementFromPoint(G.clientX,G.clientY),b=a,c=" "+this.options.group.name,d=R.length;if(b)do{if(b[J]&&b[J].options.groups.indexOf(c)>-1){for(;d--;)R[d]({clientX:G.clientX,clientY:G.clientY,target:a,rootEl:b});break}a=b}while(b=b.parentNode);i(u,"display","")}},_onTouchMove:function(a){if(F){var b=a.touches?a.touches[0]:a,c=b.clientX-F.clientX,d=b.clientY-F.clientY,e=a.touches?"translate3d("+c+"px,"+d+"px,0)":"translate("+c+"px,"+d+"px)";G=b,i(u,"webkitTransform",e),i(u,"mozTransform",e),i(u,"msTransform",e),i(u,"transform",e),a.preventDefault()}},_onDragStart:function(a,b){var c=a.dataTransfer,d=this.options;if(this._offUpEvents(),"clone"==E.pull&&(v=t.cloneNode(!0),i(v,"display","none"),w.insertBefore(v,t)),b){var e,g=t.getBoundingClientRect(),h=i(t);u=t.cloneNode(!0),i(u,"top",g.top-M(h.marginTop,10)),i(u,"left",g.left-M(h.marginLeft,10)),i(u,"width",g.width),i(u,"height",g.height),i(u,"opacity","0.8"),i(u,"position","fixed"),i(u,"zIndex","100000"),w.appendChild(u),e=u.getBoundingClientRect(),i(u,"width",2*g.width-e.width),i(u,"height",2*g.height-e.height),"touch"===b?(f(L,"touchmove",this._onTouchMove),f(L,"touchend",this._onDrop),f(L,"touchcancel",this._onDrop)):(f(L,"mousemove",this._onTouchMove),f(L,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,150)}else c&&(c.effectAllowed="move",d.setData&&d.setData.call(this,c,t)),f(L,"drop",this);setTimeout(this._dragStarted,0)},_onDragOver:function(a){var c,e,f,g=this.el,h=this.options,j=h.group,k=j.put,m=E===j,p=h.sort;if(void 0!==a.preventDefault&&(a.preventDefault(),!h.dragoverBubble&&a.stopPropagation()),E&&!h.disabled&&(m?p||(f=!w.contains(t)):E.pull&&k&&(E.name===j.name||k.indexOf&&~k.indexOf(E.name)))&&(void 0===a.rootEl||a.rootEl===this.el)){if(S(a,h,this.el),O)return;if(c=d(a.target,h.draggable,g),e=t.getBoundingClientRect(),f)return b(!0),void(v||x?w.insertBefore(t,v||x):p||w.appendChild(t));if(0===g.children.length||g.children[0]===u||g===a.target&&(c=o(g,a))){if(c){if(c.animated)return;r=c.getBoundingClientRect()}b(m),l(w,g,t,e,c,r)!==!1&&(g.appendChild(t),this._animate(e,t),c&&this._animate(r,c))}else if(c&&!c.animated&&c!==t&&void 0!==c.parentNode[J]){A!==c&&(A=c,B=i(c));var q,r=c.getBoundingClientRect(),s=r.right-r.left,y=r.bottom-r.top,z=/left|right|inline/.test(B.cssFloat+B.display),C=c.offsetWidth>t.offsetWidth,D=c.offsetHeight>t.offsetHeight,F=(z?(a.clientX-r.left)/s:(a.clientY-r.top)/y)>.5,G=c.nextElementSibling,H=l(w,g,t,e,c,r);H!==!1&&(O=!0,setTimeout(n,30),b(m),q=1===H||-1===H?1===H:z?c.previousElementSibling===t&&!C||F&&C:G!==t&&!D||F&&D,q&&!G?g.appendChild(t):c.parentNode.insertBefore(t,q?G:c),this._animate(e,t),this._animate(r,c))}}},_animate:function(a,b){var c=this.options.animation;if(c){var d=b.getBoundingClientRect();i(b,"transition","none"),i(b,"transform","translate3d("+(a.left-d.left)+"px,"+(a.top-d.top)+"px,0)"),b.offsetWidth,i(b,"transition","all "+c+"ms"),i(b,"transform","translate3d(0,0,0)"),clearTimeout(b.animated),b.animated=setTimeout(function(){i(b,"transition",""),i(b,"transform",""),b.animated=!1},c)}},_offUpEvents:function(){var a=this.el.ownerDocument;g(L,"touchmove",this._onTouchMove),g(a,"mouseup",this._onDrop),g(a,"touchend",this._onDrop),g(a,"touchcancel",this._onDrop)},_onDrop:function(b){var c=this.el,d=this.options;clearInterval(this._loopId),clearInterval(H.pid),clearTimeout(this._dragStartTimer),g(L,"drop",this),g(L,"mousemove",this._onTouchMove),g(c,"dragstart",this._onDragStart),this._offUpEvents(),b&&(b.preventDefault(),!d.dropBubble&&b.stopPropagation(),u&&u.parentNode.removeChild(u),t&&(g(t,"dragend",this),m(t),h(t,this.options.ghostClass,!1),w!==t.parentNode?(D=q(t),k(null,t.parentNode,"sort",t,w,C,D),k(this,w,"sort",t,w,C,D),k(null,t.parentNode,"add",t,w,C,D),k(this,w,"remove",t,w,C,D)):(v&&v.parentNode.removeChild(v),t.nextSibling!==x&&(D=q(t),k(this,w,"update",t,w,C,D),k(this,w,"sort",t,w,C,D))),a.active&&(k(this,w,"end",t,w,C,D),this.save())),w=t=u=x=v=y=z=F=G=A=B=E=a.active=null)},handleEvent:function(a){var b=a.type;"dragover"===b||"dragenter"===b?t&&(this._onDragOver(a),e(a)):("drop"===b||"dragend"===b)&&this._onDrop(a)},toArray:function(){for(var a,b=[],c=this.el.children,e=0,f=c.length,g=this.options;f>e;e++)a=c[e],d(a,g.draggable,this.el)&&b.push(a.getAttribute(g.dataIdAttr)||p(a));return b},sort:function(a){var b={},c=this.el;this.toArray().forEach(function(a,e){var f=c.children[e];d(f,this.options.draggable,c)&&(b[a]=f)},this),a.forEach(function(a){b[a]&&(c.removeChild(b[a]),c.appendChild(b[a]))})},save:function(){var a=this.options.store;a&&a.set(this)},closest:function(a,b){return d(a,b||this.options.draggable,this.el)},option:function(a,b){var c=this.options;return void 0===b?c[a]:void(c[a]=b)},destroy:function(){var a=this.el;a[J]=null,g(a,"mousedown",this._onTapStart),g(a,"touchstart",this._onTapStart),g(a,"dragover",this),g(a,"dragenter",this),Array.prototype.forEach.call(a.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),R.splice(R.indexOf(this._onDragOver),1),this._onDrop(),this.el=a=null}},a.utils={on:f,off:g,css:i,find:j,bind:c,is:function(a,b){return!!d(a,b,a)},extend:s,throttle:r,closest:d,toggleClass:h,index:q},a.version="1.2.1",a.create=function(b,c){return new a(b,c)},a});
/*! Isomer v0.2.5 | (c) 2014 Jordan Scales | jdan.github.io/isomer/license.txt */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):"object"==typeof exports?exports.Isomer=n():t.Isomer=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){t.exports=e(5)},function(t,n,e){function r(t,n,e){return this instanceof r?(this.x="number"==typeof t?t:0,this.y="number"==typeof n?n:0,this.z="number"==typeof e?e:0,void 0):new r(t,n,e)}r.ORIGIN=new r(0,0,0),r.prototype.translate=function(t,n,e){return new r(this.x+t,this.y+n,this.z+e)},r.prototype.scale=function(t,n,e,r){var o=this.translate(-t.x,-t.y,-t.z);return void 0===e&&void 0===r?e=r=n:r="number"==typeof r?r:1,o.x*=n,o.y*=e,o.z*=r,o.translate(t.x,t.y,t.z)},r.prototype.rotateX=function(t,n){var e=this.translate(-t.x,-t.y,-t.z),r=e.z*Math.cos(n)-e.y*Math.sin(n),o=e.z*Math.sin(n)+e.y*Math.cos(n);return e.z=r,e.y=o,e.translate(t.x,t.y,t.z)},r.prototype.rotateY=function(t,n){var e=this.translate(-t.x,-t.y,-t.z),r=e.x*Math.cos(n)-e.z*Math.sin(n),o=e.x*Math.sin(n)+e.z*Math.cos(n);return e.x=r,e.z=o,e.translate(t.x,t.y,t.z)},r.prototype.rotateZ=function(t,n){var e=this.translate(-t.x,-t.y,-t.z),r=e.x*Math.cos(n)-e.y*Math.sin(n),o=e.x*Math.sin(n)+e.y*Math.cos(n);return e.x=r,e.y=o,e.translate(t.x,t.y,t.z)},r.prototype.depth=function(){return this.x+this.y-2*this.z},r.distance=function(t,n){var e=n.x-t.x,r=n.y-t.y,o=n.z-t.z;return Math.sqrt(e*e+r*r+o*o)},t.exports=r},function(t,n,e){function r(t){this.points="[object Array]"===Object.prototype.toString.call(t)?t:Array.prototype.slice.call(arguments)}var o=e(1);r.prototype.push=function(t){this.points.push(t)},r.prototype.reverse=function(){var t=Array.prototype.slice.call(this.points);return new r(t.reverse())},r.prototype.translate=function(){var t=arguments;return new r(this.points.map(function(n){return n.translate.apply(n,t)}))},r.prototype.rotateX=function(){var t=arguments;return new r(this.points.map(function(n){return n.rotateX.apply(n,t)}))},r.prototype.rotateY=function(){var t=arguments;return new r(this.points.map(function(n){return n.rotateY.apply(n,t)}))},r.prototype.rotateZ=function(){var t=arguments;return new r(this.points.map(function(n){return n.rotateZ.apply(n,t)}))},r.prototype.scale=function(){var t=arguments;return new r(this.points.map(function(n){return n.scale.apply(n,t)}))},r.prototype.depth=function(){var t,n=0;for(t=0;t<this.points.length;t++)n+=this.points[t].depth();return n/(this.points.length||1)},r.Rectangle=function(t,n,e){void 0===n&&(n=1),void 0===e&&(e=1);var i=new r([t,new o(t.x+n,t.y,t.z),new o(t.x+n,t.y+e,t.z),new o(t.x,t.y+e,t.z)]);return i},r.Circle=function(t,n,e){e=e||20;var i,s=new r;for(i=0;e>i;i++)s.push(new o(n*Math.cos(2*i*Math.PI/e),n*Math.sin(2*i*Math.PI/e),0));return s.translate(t.x,t.y,t.z)},r.Star=function(t,n,e,i){var s,a,h=new r;for(s=0;2*i>s;s++)a=s%2===0?n:e,h.push(new o(a*Math.cos(s*Math.PI/i),a*Math.sin(s*Math.PI/i),0));return h.translate(t.x,t.y,t.z)},t.exports=r},function(t,n,e){function r(t){this.elem=t,this.ctx=this.elem.getContext("2d"),this.width=t.width,this.height=t.height}r.prototype.clear=function(){this.ctx.clearRect(0,0,this.width,this.height)},r.prototype.path=function(t,n){this.ctx.beginPath(),this.ctx.moveTo(t[0].x,t[0].y);for(var e=1;e<t.length;e++)this.ctx.lineTo(t[e].x,t[e].y);this.ctx.closePath(),this.ctx.save(),this.ctx.globalAlpha=n.a,this.ctx.fillStyle=this.ctx.strokeStyle=n.toHex(),this.ctx.stroke(),this.ctx.fill(),this.ctx.restore()},t.exports=r},function(t,n,e){function r(t,n,e,r){this.r=parseInt(t||0),this.g=parseInt(n||0),this.b=parseInt(e||0),this.a=parseFloat(Math.round(100*r)/100||1),this.loadHSL()}r.prototype.toHex=function(){var t=(256*this.r*256+256*this.g+this.b).toString(16);return t.length<6&&(t=new Array(6-t.length+1).join("0")+t),"#"+t},r.prototype.lighten=function(t,n){n=n||new r(255,255,255);var e=new r(n.r/255*this.r,n.g/255*this.g,n.b/255*this.b,this.a);return e.l=Math.min(e.l+t,1),e.loadRGB(),e},r.prototype.loadHSL=function(){var t,n,e=this.r/255,r=this.g/255,o=this.b/255,i=Math.max(e,r,o),s=Math.min(e,r,o),a=(i+s)/2;if(i===s)t=n=0;else{var h=i-s;switch(n=a>.5?h/(2-i-s):h/(i+s),i){case e:t=(r-o)/h+(o>r?6:0);break;case r:t=(o-e)/h+2;break;case o:t=(e-r)/h+4}t/=6}this.h=t,this.s=n,this.l=a},r.prototype.loadRGB=function(){var t,n,e,r=this.h,o=this.s,i=this.l;if(0===o)t=n=e=i;else{var s=.5>i?i*(1+o):i+o-i*o,a=2*i-s;t=this._hue2rgb(a,s,r+1/3),n=this._hue2rgb(a,s,r),e=this._hue2rgb(a,s,r-1/3)}this.r=parseInt(255*t),this.g=parseInt(255*n),this.b=parseInt(255*e)},r.prototype._hue2rgb=function(t,n,e){return 0>e&&(e+=1),e>1&&(e-=1),1/6>e?t+6*(n-t)*e:.5>e?n:2/3>e?t+(n-t)*(2/3-e)*6:t},t.exports=r},function(t,n,e){function r(t,n){n=n||{},this.canvas=new o(t),this.angle=Math.PI/6,this.scale=n.scale||70,this._calculateTransformation(),this.originX=n.originX||this.canvas.width/2,this.originY=n.originY||.9*this.canvas.height,this.lightPosition=n.lightPosition||new p(2,-1,3),this.lightAngle=this.lightPosition.normalize(),this.colorDifference=.2,this.lightColor=n.lightColor||new i(255,255,255)}var o=e(3),i=e(4),s=e(2),a=e(1),h=e(6),p=e(7);r.prototype.setLightPosition=function(t,n,e){this.lightPosition=new p(t,n,e),this.lightAngle=this.lightPosition.normalize()},r.prototype._translatePoint=function(t){var n=new a(t.x*this.transformation[0][0],t.x*this.transformation[0][1]),e=new a(t.y*this.transformation[1][0],t.y*this.transformation[1][1]),r=this.originX+n.x+e.x,o=this.originY-n.y-e.y-t.z*this.scale;return new a(r,o)},r.prototype.add=function(t,n){if("[object Array]"==Object.prototype.toString.call(t))for(var e=0;e<t.length;e++)this.add(t[e],n);else if(t instanceof s)this._addPath(t,n);else if(t instanceof h)for(var r=t.orderedPaths(),o=0;o<r.length;o++)this._addPath(r[o],n)},r.prototype._addPath=function(t,n){n=n||new i(120,120,120);var e=p.fromTwoPoints(t.points[1],t.points[0]),r=p.fromTwoPoints(t.points[2],t.points[1]),o=p.crossProduct(e,r).normalize(),s=p.dotProduct(o,this.lightAngle),a=n.lighten(s*this.colorDifference,this.lightColor);this.canvas.path(t.points.map(this._translatePoint.bind(this)),a)},r.prototype._calculateTransformation=function(){this.transformation=[[this.scale*Math.cos(this.angle),this.scale*Math.sin(this.angle)],[this.scale*Math.cos(Math.PI-this.angle),this.scale*Math.sin(Math.PI-this.angle)]]},r.Canvas=o,r.Color=i,r.Path=s,r.Point=a,r.Shape=h,r.Vector=p,t.exports=r},function(t,n,e){function r(t){this.paths="[object Array]"===Object.prototype.toString.call(t)?t:Array.prototype.slice.call(arguments)}var o=e(2),i=e(1);r.prototype.push=function(t){this.paths.push(t)},r.prototype.translate=function(){var t=arguments;return new r(this.paths.map(function(n){return n.translate.apply(n,t)}))},r.prototype.rotateX=function(){var t=arguments;return new r(this.paths.map(function(n){return n.rotateX.apply(n,t)}))},r.prototype.rotateY=function(){var t=arguments;return new r(this.paths.map(function(n){return n.rotateY.apply(n,t)}))},r.prototype.rotateZ=function(){var t=arguments;return new r(this.paths.map(function(n){return n.rotateZ.apply(n,t)}))},r.prototype.scale=function(){var t=arguments;return new r(this.paths.map(function(n){return n.scale.apply(n,t)}))},r.prototype.orderedPaths=function(){var t=this.paths.slice();return t.sort(function(t,n){return n.depth()-t.depth()})},r.extrude=function(t,n){n="number"==typeof n?n:1;var e,i=t.translate(0,0,n),s=new r;for(s.push(t.reverse()),s.push(i),e=0;e<t.points.length;e++)s.push(new o([i.points[e],t.points[e],t.points[(e+1)%t.points.length],i.points[(e+1)%i.points.length]]));return s},r.Prism=function(t,n,e,s){n="number"==typeof n?n:1,e="number"==typeof e?e:1,s="number"==typeof s?s:1;var a=new r,h=new o([t,new i(t.x+n,t.y,t.z),new i(t.x+n,t.y,t.z+s),new i(t.x,t.y,t.z+s)]);a.push(h),a.push(h.reverse().translate(0,e,0));var p=new o([t,new i(t.x,t.y,t.z+s),new i(t.x,t.y+e,t.z+s),new i(t.x,t.y+e,t.z)]);a.push(p),a.push(p.reverse().translate(n,0,0));var u=new o([t,new i(t.x+n,t.y,t.z),new i(t.x+n,t.y+e,t.z),new i(t.x,t.y+e,t.z)]);return a.push(u.reverse()),a.push(u.translate(0,0,s)),a},r.Pyramid=function(t,n,e,s){n="number"==typeof n?n:1,e="number"==typeof e?e:1,s="number"==typeof s?s:1;var a=new r,h=new o([t,new i(t.x+n,t.y,t.z),new i(t.x+n/2,t.y+e/2,t.z+s)]);a.push(h),a.push(h.rotateZ(t.translate(n/2,e/2),Math.PI));var p=new o([t,new i(t.x+n/2,t.y+e/2,t.z+s),new i(t.x,t.y+e,t.z)]);return a.push(p),a.push(p.rotateZ(t.translate(n/2,e/2),Math.PI)),a},r.Cylinder=function(t,n,e,i){n="number"==typeof n?n:1;var s=o.Circle(t,n,e),a=r.extrude(s,i);return a},t.exports=r},function(t,n,e){function r(t,n,e){this.i="number"==typeof t?t:0,this.j="number"==typeof n?n:0,this.k="number"==typeof e?e:0}r.fromTwoPoints=function(t,n){return new r(n.x-t.x,n.y-t.y,n.z-t.z)},r.crossProduct=function(t,n){var e=t.j*n.k-n.j*t.k,o=-1*(t.i*n.k-n.i*t.k),i=t.i*n.j-n.i*t.j;return new r(e,o,i)},r.dotProduct=function(t,n){return t.i*n.i+t.j*n.j+t.k*n.k},r.prototype.magnitude=function(){return Math.sqrt(this.i*this.i+this.j*this.j+this.k*this.k)},r.prototype.normalize=function(){var t=this.magnitude();return 0===t?new r(0,0,0):new r(this.i/t,this.j/t,this.k/t)},t.exports=r}])});
// Generated by psc-bundle 0.7.4.1
var PS = { };
(function(exports) {
  // module Analytics

  exports.analyticsEvent = function(category) {
    return function(action) {
      return function(label) {
        return function() {
          ga('send', 'event', category, action, label);
          return {};
        };
      };
    };
  };
 
})(PS["Analytics"] = PS["Analytics"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Prelude

  //- Functor --------------------------------------------------------------------

  exports.arrayMap = function (f) {
    return function (arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(arr[i]);
      }
      return result;
    };
  };

  //- Semiring -------------------------------------------------------------------

  exports.intAdd = function (x) {
    return function (y) {
      /* jshint bitwise: false */
      return x + y | 0;
    };
  };

  exports.intMul = function (x) {
    return function (y) {
      /* jshint bitwise: false */
      return x * y | 0;
    };
  };

  //- Eq -------------------------------------------------------------------------

  exports.refEq = function (r1) {
    return function (r2) {
      return r1 === r2;
    };
  };

  //- Ord ------------------------------------------------------------------------

  exports.unsafeCompareImpl = function (lt) {
    return function (eq) {
      return function (gt) {
        return function (x) {
          return function (y) {
            return x < y ? lt : x > y ? gt : eq;
          };
        };
      };
    };
  };                                          

  //- BooleanAlgebra -------------------------------------------------------------

  exports.boolOr = function (b1) {
    return function (b2) {
      return b1 || b2;
    };
  };

  exports.boolAnd = function (b1) {
    return function (b2) {
      return b1 && b2;
    };
  };

  exports.boolNot = function (b) {
    return !b;
  };

  exports.showStringImpl = function (s) {
    return JSON.stringify(s);
  };
 
})(PS["Prelude"] = PS["Prelude"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Prelude"];
  var LT = (function () {
      function LT() {

      };
      LT.value = new LT();
      return LT;
  })();
  var GT = (function () {
      function GT() {

      };
      GT.value = new GT();
      return GT;
  })();
  var EQ = (function () {
      function EQ() {

      };
      EQ.value = new EQ();
      return EQ;
  })();
  var Semigroupoid = function (compose) {
      this.compose = compose;
  };
  var Category = function (__superclass_Prelude$dotSemigroupoid_0, id) {
      this["__superclass_Prelude.Semigroupoid_0"] = __superclass_Prelude$dotSemigroupoid_0;
      this.id = id;
  };
  var Functor = function (map) {
      this.map = map;
  };
  var Apply = function (__superclass_Prelude$dotFunctor_0, apply) {
      this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
      this.apply = apply;
  };
  var Applicative = function (__superclass_Prelude$dotApply_0, pure) {
      this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
      this.pure = pure;
  };
  var Bind = function (__superclass_Prelude$dotApply_0, bind) {
      this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
      this.bind = bind;
  };
  var Monad = function (__superclass_Prelude$dotApplicative_0, __superclass_Prelude$dotBind_1) {
      this["__superclass_Prelude.Applicative_0"] = __superclass_Prelude$dotApplicative_0;
      this["__superclass_Prelude.Bind_1"] = __superclass_Prelude$dotBind_1;
  };
  var Semigroup = function (append) {
      this.append = append;
  };
  var Semiring = function (add, mul, one, zero) {
      this.add = add;
      this.mul = mul;
      this.one = one;
      this.zero = zero;
  };
  var Eq = function (eq) {
      this.eq = eq;
  };
  var Ord = function (__superclass_Prelude$dotEq_0, compare) {
      this["__superclass_Prelude.Eq_0"] = __superclass_Prelude$dotEq_0;
      this.compare = compare;
  };
  var Bounded = function (bottom, top) {
      this.bottom = bottom;
      this.top = top;
  };
  var BooleanAlgebra = function (__superclass_Prelude$dotBounded_0, conj, disj, not) {
      this["__superclass_Prelude.Bounded_0"] = __superclass_Prelude$dotBounded_0;
      this.conj = conj;
      this.disj = disj;
      this.not = not;
  };
  var Show = function (show) {
      this.show = show;
  };
  var $hash = function (x) {
      return function (f) {
          return f(x);
      };
  };
  var zero = function (dict) {
      return dict.zero;
  };
  var unsafeCompare = $foreign.unsafeCompareImpl(LT.value)(EQ.value)(GT.value);
  var unit = {};
  var top = function (dict) {
      return dict.top;
  }; 
  var showString = new Show($foreign.showStringImpl);
  var show = function (dict) {
      return dict.show;
  };                                                                            
  var semiringInt = new Semiring($foreign.intAdd, $foreign.intMul, 1, 0);
  var semigroupoidFn = new Semigroupoid(function (f) {
      return function (g) {
          return function (x) {
              return f(g(x));
          };
      };
  });                 
  var pure = function (dict) {
      return dict.pure;
  };
  var $$return = function (__dict_Applicative_2) {
      return pure(__dict_Applicative_2);
  };
  var otherwise = true;
  var one = function (dict) {
      return dict.one;
  };
  var not = function (dict) {
      return dict.not;
  };
  var mul = function (dict) {
      return dict.mul;
  };
  var map = function (dict) {
      return dict.map;
  };
  var $less$dollar$greater = function (__dict_Functor_5) {
      return map(__dict_Functor_5);
  };
  var $less$hash$greater = function (__dict_Functor_6) {
      return function (fa) {
          return function (f) {
              return $less$dollar$greater(__dict_Functor_6)(f)(fa);
          };
      };
  };
  var id = function (dict) {
      return dict.id;
  };
  var functorArray = new Functor($foreign.arrayMap);
  var flip = function (f) {
      return function (b) {
          return function (a) {
              return f(a)(b);
          };
      };
  }; 
  var eqString = new Eq($foreign.refEq);
  var ordString = new Ord(function () {
      return eqString;
  }, unsafeCompare);
  var eqOrdering = new Eq(function (_81) {
      return function (_82) {
          if (_81 instanceof LT && _82 instanceof LT) {
              return true;
          };
          if (_81 instanceof GT && _82 instanceof GT) {
              return true;
          };
          if (_81 instanceof EQ && _82 instanceof EQ) {
              return true;
          };
          return false;
      };
  });               
  var eq = function (dict) {
      return dict.eq;
  };
  var $eq$eq = function (__dict_Eq_7) {
      return eq(__dict_Eq_7);
  };
  var disj = function (dict) {
      return dict.disj;
  };
  var $$const = function (a) {
      return function (_62) {
          return a;
      };
  };
  var conj = function (dict) {
      return dict.conj;
  };
  var compose = function (dict) {
      return dict.compose;
  };
  var $greater$greater$greater = function (__dict_Semigroupoid_15) {
      return flip(compose(__dict_Semigroupoid_15));
  };
  var compare = function (dict) {
      return dict.compare;
  };
  var categoryFn = new Category(function () {
      return semigroupoidFn;
  }, function (x) {
      return x;
  });
  var boundedBoolean = new Bounded(false, true);
  var bottom = function (dict) {
      return dict.bottom;
  };
  var booleanAlgebraBoolean = new BooleanAlgebra(function () {
      return boundedBoolean;
  }, $foreign.boolAnd, $foreign.boolOr, $foreign.boolNot);
  var $div$eq = function (__dict_Eq_9) {
      return function (x) {
          return function (y) {
              return not(booleanAlgebraBoolean)($eq$eq(__dict_Eq_9)(x)(y));
          };
      };
  };
  var bind = function (dict) {
      return dict.bind;
  };
  var $greater$greater$eq = function (__dict_Bind_24) {
      return bind(__dict_Bind_24);
  }; 
  var apply = function (dict) {
      return dict.apply;
  };
  var $less$times$greater = function (__dict_Apply_25) {
      return apply(__dict_Apply_25);
  };
  var liftA1 = function (__dict_Applicative_26) {
      return function (f) {
          return function (a) {
              return $less$times$greater(__dict_Applicative_26["__superclass_Prelude.Apply_0"]())(pure(__dict_Applicative_26)(f))(a);
          };
      };
  }; 
  var append = function (dict) {
      return dict.append;
  };
  var $less$greater = function (__dict_Semigroup_28) {
      return append(__dict_Semigroup_28);
  };
  var ap = function (__dict_Monad_30) {
      return function (f) {
          return function (a) {
              return bind(__dict_Monad_30["__superclass_Prelude.Bind_1"]())(f)(function (_24) {
                  return bind(__dict_Monad_30["__superclass_Prelude.Bind_1"]())(a)(function (_23) {
                      return $$return(__dict_Monad_30["__superclass_Prelude.Applicative_0"]())(_24(_23));
                  });
              });
          };
      };
  }; 
  var add = function (dict) {
      return dict.add;
  };
  var $plus = function (__dict_Semiring_31) {
      return add(__dict_Semiring_31);
  };
  exports["LT"] = LT;
  exports["GT"] = GT;
  exports["EQ"] = EQ;
  exports["Show"] = Show;
  exports["BooleanAlgebra"] = BooleanAlgebra;
  exports["Bounded"] = Bounded;
  exports["Ord"] = Ord;
  exports["Eq"] = Eq;
  exports["Semiring"] = Semiring;
  exports["Semigroup"] = Semigroup;
  exports["Monad"] = Monad;
  exports["Bind"] = Bind;
  exports["Applicative"] = Applicative;
  exports["Apply"] = Apply;
  exports["Functor"] = Functor;
  exports["Category"] = Category;
  exports["Semigroupoid"] = Semigroupoid;
  exports["show"] = show;
  exports["not"] = not;
  exports["disj"] = disj;
  exports["conj"] = conj;
  exports["bottom"] = bottom;
  exports["top"] = top;
  exports["unsafeCompare"] = unsafeCompare;
  exports["compare"] = compare;
  exports["/="] = $div$eq;
  exports["=="] = $eq$eq;
  exports["eq"] = eq;
  exports["+"] = $plus;
  exports["one"] = one;
  exports["mul"] = mul;
  exports["zero"] = zero;
  exports["add"] = add;
  exports["<>"] = $less$greater;
  exports["append"] = append;
  exports["ap"] = ap;
  exports["return"] = $$return;
  exports[">>="] = $greater$greater$eq;
  exports["bind"] = bind;
  exports["liftA1"] = liftA1;
  exports["pure"] = pure;
  exports["<*>"] = $less$times$greater;
  exports["apply"] = apply;
  exports["<#>"] = $less$hash$greater;
  exports["<$>"] = $less$dollar$greater;
  exports["map"] = map;
  exports["id"] = id;
  exports[">>>"] = $greater$greater$greater;
  exports["compose"] = compose;
  exports["otherwise"] = otherwise;
  exports["const"] = $$const;
  exports["flip"] = flip;
  exports["#"] = $hash;
  exports["unit"] = unit;
  exports["semigroupoidFn"] = semigroupoidFn;
  exports["categoryFn"] = categoryFn;
  exports["functorArray"] = functorArray;
  exports["semiringInt"] = semiringInt;
  exports["eqString"] = eqString;
  exports["eqOrdering"] = eqOrdering;
  exports["ordString"] = ordString;
  exports["boundedBoolean"] = boundedBoolean;
  exports["booleanAlgebraBoolean"] = booleanAlgebraBoolean;
  exports["showString"] = showString;;
 
})(PS["Prelude"] = PS["Prelude"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Control.Monad.Eff

  exports.returnE = function (a) {
    return function () {
      return a;
    };
  };

  exports.bindE = function (a) {
    return function (f) {
      return function () {
        return f(a())();
      };
    };
  };

  exports.runPure = function (f) {
    return f();
  };
 
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Control.Monad.Eff"];
  var Prelude = PS["Prelude"];     
  var monadEff = new Prelude.Monad(function () {
      return applicativeEff;
  }, function () {
      return bindEff;
  });
  var bindEff = new Prelude.Bind(function () {
      return applyEff;
  }, $foreign.bindE);
  var applyEff = new Prelude.Apply(function () {
      return functorEff;
  }, Prelude.ap(monadEff));
  var applicativeEff = new Prelude.Applicative(function () {
      return applyEff;
  }, $foreign.returnE);
  var functorEff = new Prelude.Functor(Prelude.liftA1(applicativeEff));
  exports["functorEff"] = functorEff;
  exports["applyEff"] = applyEff;
  exports["applicativeEff"] = applicativeEff;
  exports["bindEff"] = bindEff;
  exports["monadEff"] = monadEff;
  exports["runPure"] = $foreign.runPure;;
 
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var mempty = function (dict) {
      return dict.mempty;
  };
  exports["mempty"] = mempty;;
 
})(PS["Data.Monoid"] = PS["Data.Monoid"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Extend = PS["Control.Extend"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Monoid = PS["Data.Monoid"];     
  var Nothing = (function () {
      function Nothing() {

      };
      Nothing.value = new Nothing();
      return Nothing;
  })();
  var Just = (function () {
      function Just(value0) {
          this.value0 = value0;
      };
      Just.create = function (value0) {
          return new Just(value0);
      };
      return Just;
  })();
  var maybe = function (b) {
      return function (f) {
          return function (_211) {
              if (_211 instanceof Nothing) {
                  return b;
              };
              if (_211 instanceof Just) {
                  return f(_211.value0);
              };
              throw new Error("Failed pattern match at Data.Maybe line 26, column 1 - line 27, column 1: " + [ b.constructor.name, f.constructor.name, _211.constructor.name ]);
          };
      };
  };                                                   
  var isJust = maybe(false)(Prelude["const"](true));
  var functorMaybe = new Prelude.Functor(function (fn) {
      return function (_213) {
          if (_213 instanceof Just) {
              return new Just(fn(_213.value0));
          };
          return Nothing.value;
      };
  });
  var fromMaybe = function (a) {
      return maybe(a)(Prelude.id(Prelude.categoryFn));
  };
  var applyMaybe = new Prelude.Apply(function () {
      return functorMaybe;
  }, function (_214) {
      return function (x) {
          if (_214 instanceof Just) {
              return Prelude["<$>"](functorMaybe)(_214.value0)(x);
          };
          if (_214 instanceof Nothing) {
              return Nothing.value;
          };
          throw new Error("Failed pattern match at Data.Maybe line 121, column 1 - line 145, column 1: " + [ _214.constructor.name, x.constructor.name ]);
      };
  });
  var bindMaybe = new Prelude.Bind(function () {
      return applyMaybe;
  }, function (_216) {
      return function (k) {
          if (_216 instanceof Just) {
              return k(_216.value0);
          };
          if (_216 instanceof Nothing) {
              return Nothing.value;
          };
          throw new Error("Failed pattern match at Data.Maybe line 180, column 1 - line 199, column 1: " + [ _216.constructor.name, k.constructor.name ]);
      };
  });
  exports["Nothing"] = Nothing;
  exports["Just"] = Just;
  exports["isJust"] = isJust;
  exports["fromMaybe"] = fromMaybe;
  exports["maybe"] = maybe;
  exports["functorMaybe"] = functorMaybe;
  exports["applyMaybe"] = applyMaybe;
  exports["bindMaybe"] = bindMaybe;;
 
})(PS["Data.Maybe"] = PS["Data.Maybe"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Data.Foldable

  exports.foldrArray = function (f) {
    return function (init) {
      return function (xs) {
        var acc = init;
        var len = xs.length;
        for (var i = len - 1; i >= 0; i--) {
          acc = f(xs[i])(acc);
        }
        return acc;
      };
    };
  };

  exports.foldlArray = function (f) {
    return function (init) {
      return function (xs) {
        var acc = init;
        var len = xs.length;
        for (var i = 0; i < len; i++) {
          acc = f(acc)(xs[i]);
        }
        return acc;
      };
    };
  };
 
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var $times$greater = function (__dict_Apply_1) {
      return function (a) {
          return function (b) {
              return Prelude["<*>"](__dict_Apply_1)(Prelude["<$>"](__dict_Apply_1["__superclass_Prelude.Functor_0"]())(Prelude["const"](Prelude.id(Prelude.categoryFn)))(a))(b);
          };
      };
  };
  exports["*>"] = $times$greater;;
 
})(PS["Control.Apply"] = PS["Control.Apply"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Data.Foldable"];
  var Prelude = PS["Prelude"];
  var Control_Apply = PS["Control.Apply"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_First = PS["Data.Maybe.First"];
  var Data_Maybe_Last = PS["Data.Maybe.Last"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Monoid_Additive = PS["Data.Monoid.Additive"];
  var Data_Monoid_Dual = PS["Data.Monoid.Dual"];
  var Data_Monoid_Disj = PS["Data.Monoid.Disj"];
  var Data_Monoid_Conj = PS["Data.Monoid.Conj"];
  var Data_Monoid_Multiplicative = PS["Data.Monoid.Multiplicative"];     
  var Foldable = function (foldMap, foldl, foldr) {
      this.foldMap = foldMap;
      this.foldl = foldl;
      this.foldr = foldr;
  };
  var foldr = function (dict) {
      return dict.foldr;
  };
  var traverse_ = function (__dict_Applicative_0) {
      return function (__dict_Foldable_1) {
          return function (f) {
              return foldr(__dict_Foldable_1)(function (_914) {
                  return Control_Apply["*>"](__dict_Applicative_0["__superclass_Prelude.Apply_0"]())(f(_914));
              })(Prelude.pure(__dict_Applicative_0)(Prelude.unit));
          };
      };
  };
  var for_ = function (__dict_Applicative_2) {
      return function (__dict_Foldable_3) {
          return Prelude.flip(traverse_(__dict_Applicative_2)(__dict_Foldable_3));
      };
  };
  var foldl = function (dict) {
      return dict.foldl;
  };
  var sum = function (__dict_Foldable_12) {
      return function (__dict_Semiring_13) {
          return foldl(__dict_Foldable_12)(Prelude["+"](__dict_Semiring_13))(Prelude.zero(__dict_Semiring_13));
      };
  }; 
  var foldableArray = new Foldable(function (__dict_Monoid_19) {
      return function (f) {
          return function (xs) {
              return foldr(foldableArray)(function (x) {
                  return function (acc) {
                      return Prelude["<>"](__dict_Monoid_19["__superclass_Prelude.Semigroup_0"]())(f(x))(acc);
                  };
              })(Data_Monoid.mempty(__dict_Monoid_19))(xs);
          };
      };
  }, $foreign.foldlArray, $foreign.foldrArray);
  var foldMap = function (dict) {
      return dict.foldMap;
  };
  var find = function (__dict_Foldable_25) {
      return function (p) {
          return foldl(__dict_Foldable_25)(function (r) {
              return function (x) {
                  var _913 = p(x);
                  if (_913) {
                      return new Data_Maybe.Just(x);
                  };
                  if (!_913) {
                      return r;
                  };
                  throw new Error("Failed pattern match at Data.Foldable line 181, column 1 - line 182, column 1: " + [ _913.constructor.name ]);
              };
          })(Data_Maybe.Nothing.value);
      };
  };
  exports["Foldable"] = Foldable;
  exports["find"] = find;
  exports["sum"] = sum;
  exports["for_"] = for_;
  exports["traverse_"] = traverse_;
  exports["foldMap"] = foldMap;
  exports["foldl"] = foldl;
  exports["foldr"] = foldr;
  exports["foldableArray"] = foldableArray;;
 
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Data.Traversable

  // jshint maxparams: 3

  exports.traverseArrayImpl = function () {
    function Cont (fn) {
      this.fn = fn;
    }

    var emptyList = {};

    var ConsCell = function (head, tail) {
      this.head = head;
      this.tail = tail;
    };

    function consList (x) {
      return function (xs) {
        return new ConsCell(x, xs);
      };
    }

    function listToArray (list) {
      var arr = [];
      while (list !== emptyList) {
        arr.push(list.head);
        list = list.tail;
      }
      return arr;
    }

    return function (apply) {
      return function (map) {
        return function (pure) {
          return function (f) {
            var buildFrom = function (x, ys) {
              return apply(map(consList)(f(x)))(ys);
            };

            var go = function (acc, currentLen, xs) {
              if (currentLen === 0) {
                return acc;
              } else {
                var last = xs[currentLen - 1];
                return new Cont(function () {
                  return go(buildFrom(last, acc), currentLen - 1, xs);
                });
              }
            };

            return function (array) {
              var result = go(pure(emptyList), array.length, array);
              while (result instanceof Cont) {
                result = result.fn();
              }

              return map(listToArray)(result);
            };
          };
        };
      };
    };
  }();
 
})(PS["Data.Traversable"] = PS["Data.Traversable"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Data.Traversable"];
  var Prelude = PS["Prelude"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_First = PS["Data.Maybe.First"];
  var Data_Maybe_Last = PS["Data.Maybe.Last"];
  var Data_Monoid_Additive = PS["Data.Monoid.Additive"];
  var Data_Monoid_Dual = PS["Data.Monoid.Dual"];
  var Data_Monoid_Multiplicative = PS["Data.Monoid.Multiplicative"];
  var Data_Monoid_Disj = PS["Data.Monoid.Disj"];
  var Data_Monoid_Conj = PS["Data.Monoid.Conj"];
  var Traversable = function (__superclass_Data$dotFoldable$dotFoldable_1, __superclass_Prelude$dotFunctor_0, sequence, traverse) {
      this["__superclass_Data.Foldable.Foldable_1"] = __superclass_Data$dotFoldable$dotFoldable_1;
      this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
      this.sequence = sequence;
      this.traverse = traverse;
  };
  var traverse = function (dict) {
      return dict.traverse;
  }; 
  var traversableArray = new Traversable(function () {
      return Data_Foldable.foldableArray;
  }, function () {
      return Prelude.functorArray;
  }, function (__dict_Applicative_11) {
      return traverse(traversableArray)(__dict_Applicative_11)(Prelude.id(Prelude.categoryFn));
  }, function (__dict_Applicative_10) {
      return $foreign.traverseArrayImpl(Prelude.apply(__dict_Applicative_10["__superclass_Prelude.Apply_0"]()))(Prelude.map((__dict_Applicative_10["__superclass_Prelude.Apply_0"]())["__superclass_Prelude.Functor_0"]()))(Prelude.pure(__dict_Applicative_10));
  });
  var stateL = function (_276) {
      return _276;
  };
  var sequence = function (dict) {
      return dict.sequence;
  }; 
  var functorStateL = new Prelude.Functor(function (f) {
      return function (k) {
          return function (s) {
              var _970 = stateL(k)(s);
              return {
                  accum: _970.accum, 
                  value: f(_970.value)
              };
          };
      };
  });
  var applyStateL = new Prelude.Apply(function () {
      return functorStateL;
  }, function (f) {
      return function (x) {
          return function (s) {
              var _979 = stateL(f)(s);
              var _980 = stateL(x)(_979.accum);
              return {
                  accum: _980.accum, 
                  value: _979.value(_980.value)
              };
          };
      };
  });
  var applicativeStateL = new Prelude.Applicative(function () {
      return applyStateL;
  }, function (a) {
      return function (s) {
          return {
              accum: s, 
              value: a
          };
      };
  });
  var mapAccumL = function (__dict_Traversable_20) {
      return function (f) {
          return function (s0) {
              return function (xs) {
                  return stateL(traverse(__dict_Traversable_20)(applicativeStateL)(function (a) {
                      return function (s) {
                          return f(s)(a);
                      };
                  })(xs))(s0);
              };
          };
      };
  };
  var scanl = function (__dict_Traversable_21) {
      return function (f) {
          return function (b0) {
              return function (xs) {
                  return (mapAccumL(__dict_Traversable_21)(function (b) {
                      return function (a) {
                          var b$prime = f(b)(a);
                          return {
                              accum: b$prime, 
                              value: b$prime
                          };
                      };
                  })(b0)(xs)).value;
              };
          };
      };
  };
  exports["Traversable"] = Traversable;
  exports["mapAccumL"] = mapAccumL;
  exports["scanl"] = scanl;
  exports["sequence"] = sequence;
  exports["traverse"] = traverse;
  exports["traversableArray"] = traversableArray;;
 
})(PS["Data.Traversable"] = PS["Data.Traversable"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Control_Biapplicative = PS["Control.Biapplicative"];
  var Control_Biapply = PS["Control.Biapply"];
  var Control_Comonad = PS["Control.Comonad"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Lazy = PS["Control.Lazy"];
  var Data_Bifoldable = PS["Data.Bifoldable"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Bitraversable = PS["Data.Bitraversable"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_First = PS["Data.Maybe.First"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Traversable = PS["Data.Traversable"];     
  var Tuple = (function () {
      function Tuple(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Tuple.create = function (value0) {
          return function (value1) {
              return new Tuple(value0, value1);
          };
      };
      return Tuple;
  })();
  exports["Tuple"] = Tuple;;
 
})(PS["Data.Tuple"] = PS["Data.Tuple"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Data.Array.ST

  exports.runSTArray = function (f) {
    return f;
  };

  exports.emptySTArray = function () {
    return [];
  };

  exports.pushAllSTArray = function (xs) {
    return function (as) {
      return function () {
        return xs.push.apply(xs, as);
      };
    };
  };
 
})(PS["Data.Array.ST"] = PS["Data.Array.ST"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Control.Monad.ST

  exports.newSTRef = function (val) {
    return function () {
      return { value: val };
    };
  };

  exports.readSTRef = function (ref) {
    return function () {
      return ref.value;
    };
  };

  exports.writeSTRef = function (ref) {
    return function (a) {
      return function () {
        /* jshint boss: true */
        return ref.value = a;
      };
    };
  };
 
})(PS["Control.Monad.ST"] = PS["Control.Monad.ST"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Control.Monad.ST"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  exports["writeSTRef"] = $foreign.writeSTRef;
  exports["readSTRef"] = $foreign.readSTRef;
  exports["newSTRef"] = $foreign.newSTRef;;
 
})(PS["Control.Monad.ST"] = PS["Control.Monad.ST"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Data.Array.ST"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_ST = PS["Control.Monad.ST"];
  var Data_Maybe = PS["Data.Maybe"];
  var pushSTArray = function (arr) {
      return function (a) {
          return $foreign.pushAllSTArray(arr)([ a ]);
      };
  };
  exports["pushSTArray"] = pushSTArray;
  exports["emptySTArray"] = $foreign.emptySTArray;
  exports["runSTArray"] = $foreign.runSTArray;;
 
})(PS["Data.Array.ST"] = PS["Data.Array.ST"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Array_ST = PS["Data.Array.ST"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_ST = PS["Control.Monad.ST"];     
  var Unfoldable = function (unfoldr) {
      this.unfoldr = unfoldr;
  };
  var unfoldr = function (dict) {
      return dict.unfoldr;
  };
  var unfoldableArray = new Unfoldable(function (f) {
      return function (b) {
          return Control_Monad_Eff.runPure(Data_Array_ST.runSTArray(function __do() {
              var _29 = Data_Array_ST.emptySTArray();
              var _28 = Control_Monad_ST.newSTRef(b)();
              (function () {
                  while (!(function __do() {
                      var _27 = Control_Monad_ST.readSTRef(_28)();
                      return (function () {
                          var _1442 = f(_27);
                          if (_1442 instanceof Data_Maybe.Nothing) {
                              return Prelude["return"](Control_Monad_Eff.applicativeEff)(true);
                          };
                          if (_1442 instanceof Data_Maybe.Just) {
                              return function __do() {
                                  Data_Array_ST.pushSTArray(_29)(_1442.value0.value0)();
                                  Control_Monad_ST.writeSTRef(_28)(_1442.value0.value1)();
                                  return Prelude["return"](Control_Monad_Eff.applicativeEff)(false)();
                              };
                          };
                          throw new Error("Failed pattern match at Data.Unfoldable line 28, column 1 - line 40, column 16: " + [ _1442.constructor.name ]);
                      })()();
                  })()) {

                  };
                  return {};
              })();
              return Prelude["return"](Control_Monad_Eff.applicativeEff)(_29)();
          }));
      };
  });
  exports["Unfoldable"] = Unfoldable;
  exports["unfoldr"] = unfoldr;
  exports["unfoldableArray"] = unfoldableArray;;
 
})(PS["Data.Unfoldable"] = PS["Data.Unfoldable"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Data_Traversable = PS["Data.Traversable"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_MonadPlus = PS["Control.MonadPlus"];     
  var Nil = (function () {
      function Nil() {

      };
      Nil.value = new Nil();
      return Nil;
  })();
  var Cons = (function () {
      function Cons(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Cons.create = function (value0) {
          return function (value1) {
              return new Cons(value0, value1);
          };
      };
      return Cons;
  })();
  var $colon = Cons.create;
  var uncons = function (_424) {
      if (_424 instanceof Nil) {
          return Data_Maybe.Nothing.value;
      };
      if (_424 instanceof Cons) {
          return new Data_Maybe.Just({
              head: _424.value0, 
              tail: _424.value1
          });
      };
      throw new Error("Failed pattern match at Data.List line 266, column 1 - line 267, column 1: " + [ _424.constructor.name ]);
  };
  var toList = function (__dict_Foldable_2) {
      return Data_Foldable.foldr(__dict_Foldable_2)(Cons.create)(Nil.value);
  };
  var tail = function (_422) {
      if (_422 instanceof Nil) {
          return Data_Maybe.Nothing.value;
      };
      if (_422 instanceof Cons) {
          return new Data_Maybe.Just(_422.value1);
      };
      throw new Error("Failed pattern match at Data.List line 248, column 1 - line 249, column 1: " + [ _422.constructor.name ]);
  };
  var span = function (p) {
      return function (_439) {
          if (_439 instanceof Cons && p(_439.value0)) {
              var _1529 = span(p)(_439.value1);
              return {
                  init: new Cons(_439.value0, _1529.init), 
                  rest: _1529.rest
              };
          };
          return {
              init: Nil.value, 
              rest: _439
          };
      };
  };
  var singleton = function (a) {
      return new Cons(a, Nil.value);
  };
  var sortBy = function (cmp) {
      var merge = function (_456) {
          return function (_457) {
              if (_456 instanceof Cons && _457 instanceof Cons) {
                  if (Prelude["=="](Prelude.eqOrdering)(cmp(_456.value0)(_457.value0))(Prelude.GT.value)) {
                      return new Cons(_457.value0, merge(_456)(_457.value1));
                  };
                  if (Prelude.otherwise) {
                      return new Cons(_456.value0, merge(_456.value1)(_457));
                  };
              };
              if (_456 instanceof Nil) {
                  return _457;
              };
              if (_457 instanceof Nil) {
                  return _456;
              };
              throw new Error("Failed pattern match at Data.List line 440, column 1 - line 441, column 1: " + [ _456.constructor.name, _457.constructor.name ]);
          };
      };
      var mergePairs = function (_455) {
          if (_455 instanceof Cons && _455.value1 instanceof Cons) {
              return new Cons(merge(_455.value0)(_455.value1.value0), mergePairs(_455.value1.value1));
          };
          return _455;
      };
      var mergeAll = function (__copy__454) {
          var _454 = __copy__454;
          tco: while (true) {
              if (_454 instanceof Cons && _454.value1 instanceof Nil) {
                  return _454.value0;
              };
              var __tco__454 = mergePairs(_454);
              _454 = __tco__454;
              continue tco;
          };
      };
      var sequences = function (_451) {
          if (_451 instanceof Cons && _451.value1 instanceof Cons) {
              if (Prelude["=="](Prelude.eqOrdering)(cmp(_451.value0)(_451.value1.value0))(Prelude.GT.value)) {
                  return descending(_451.value1.value0)(singleton(_451.value0))(_451.value1.value1);
              };
              if (Prelude.otherwise) {
                  return ascending(_451.value1.value0)(Cons.create(_451.value0))(_451.value1.value1);
              };
          };
          return singleton(_451);
      };
      var descending = function (__copy_a) {
          return function (__copy_as) {
              return function (__copy__452) {
                  var a = __copy_a;
                  var as = __copy_as;
                  var _452 = __copy__452;
                  tco: while (true) {
                      var a_1 = a;
                      var as_1 = as;
                      if (_452 instanceof Cons && Prelude["=="](Prelude.eqOrdering)(cmp(a_1)(_452.value0))(Prelude.GT.value)) {
                          var __tco_a = _452.value0;
                          var __tco_as = new Cons(a_1, as_1);
                          var __tco__452 = _452.value1;
                          a = __tco_a;
                          as = __tco_as;
                          _452 = __tco__452;
                          continue tco;
                      };
                      return new Cons(new Cons(a, as), sequences(_452));
                  };
              };
          };
      };
      var ascending = function (a) {
          return function (as) {
              return function (_453) {
                  if (_453 instanceof Cons && Prelude["/="](Prelude.eqOrdering)(cmp(a)(_453.value0))(Prelude.GT.value)) {
                      return ascending(_453.value0)(function (ys) {
                          return as(new Cons(a, ys));
                      })(_453.value1);
                  };
                  return new Cons(as(singleton(a)), sequences(_453));
              };
          };
      };
      return function (_1756) {
          return mergeAll(sequences(_1756));
      };
  };
  var sort = function (__dict_Ord_3) {
      return function (xs) {
          return sortBy(Prelude.compare(__dict_Ord_3))(xs);
      };
  };
  var showList = function (__dict_Show_4) {
      return new Prelude.Show(function (_464) {
          if (_464 instanceof Nil) {
              return "Nil";
          };
          if (_464 instanceof Cons) {
              return "Cons (" + (Prelude.show(__dict_Show_4)(_464.value0) + (") (" + (Prelude.show(showList(__dict_Show_4))(_464.value1) + ")")));
          };
          throw new Error("Failed pattern match: " + [ _464.constructor.name ]);
      });
  };
  var semigroupList = new Prelude.Semigroup(function (_470) {
      return function (ys) {
          if (_470 instanceof Nil) {
              return ys;
          };
          if (_470 instanceof Cons) {
              return new Cons(_470.value0, Prelude["<>"](semigroupList)(_470.value1)(ys));
          };
          throw new Error("Failed pattern match: " + [ _470.constructor.name, ys.constructor.name ]);
      };
  });
  var reverse = (function () {
      var go = function (__copy_acc) {
          return function (__copy__448) {
              var acc = __copy_acc;
              var _448 = __copy__448;
              tco: while (true) {
                  var acc_1 = acc;
                  if (_448 instanceof Nil) {
                      return acc_1;
                  };
                  if (_448 instanceof Cons) {
                      var __tco_acc = new Cons(_448.value0, acc);
                      var __tco__448 = _448.value1;
                      acc = __tco_acc;
                      _448 = __tco__448;
                      continue tco;
                  };
                  throw new Error("Failed pattern match at Data.List line 364, column 1 - line 365, column 1: " + [ acc.constructor.name, _448.constructor.name ]);
              };
          };
      };
      return go(Nil.value);
  })();
  var snoc = function (xs) {
      return function (x) {
          return reverse(new Cons(x, reverse(xs)));
      };
  };
  var zipWith = function (f) {
      return function (xs) {
          return function (ys) {
              var go = function (__copy__462) {
                  return function (__copy__463) {
                      return function (__copy_acc) {
                          var _462 = __copy__462;
                          var _463 = __copy__463;
                          var acc = __copy_acc;
                          tco: while (true) {
                              if (_462 instanceof Nil) {
                                  return acc;
                              };
                              if (_463 instanceof Nil) {
                                  return acc;
                              };
                              if (_462 instanceof Cons && _463 instanceof Cons) {
                                  var __tco__462 = _462.value1;
                                  var __tco__463 = _463.value1;
                                  var __tco_acc = new Cons(f(_462.value0)(_463.value0), acc);
                                  _462 = __tco__462;
                                  _463 = __tco__463;
                                  acc = __tco_acc;
                                  continue tco;
                              };
                              throw new Error("Failed pattern match at Data.List line 650, column 1 - line 651, column 1: " + [ _462.constructor.name, _463.constructor.name, acc.constructor.name ]);
                          };
                      };
                  };
              };
              return reverse(go(xs)(ys)(Nil.value));
          };
      };
  };                   
  var $$null = function (_418) {
      if (_418 instanceof Nil) {
          return true;
      };
      return false;
  };            
  var mapMaybe = function (f) {
      var go = function (__copy_acc) {
          return function (__copy__450) {
              var acc = __copy_acc;
              var _450 = __copy__450;
              tco: while (true) {
                  var acc_1 = acc;
                  if (_450 instanceof Nil) {
                      return reverse(acc_1);
                  };
                  if (_450 instanceof Cons) {
                      var _1606 = f(_450.value0);
                      if (_1606 instanceof Data_Maybe.Nothing) {
                          var __tco_acc = acc;
                          var __tco__450 = _450.value1;
                          acc = __tco_acc;
                          _450 = __tco__450;
                          continue tco;
                      };
                      if (_1606 instanceof Data_Maybe.Just) {
                          var __tco_acc = new Cons(_1606.value0, acc);
                          var __tco__450 = _450.value1;
                          acc = __tco_acc;
                          _450 = __tco__450;
                          continue tco;
                      };
                      throw new Error("Failed pattern match at Data.List line 416, column 1 - line 417, column 1: " + [ _1606.constructor.name ]);
                  };
                  throw new Error("Failed pattern match at Data.List line 416, column 1 - line 417, column 1: " + [ acc.constructor.name, _450.constructor.name ]);
              };
          };
      };
      return go(Nil.value);
  };
  var last = function (__copy__421) {
      var _421 = __copy__421;
      tco: while (true) {
          if (_421 instanceof Cons && _421.value1 instanceof Nil) {
              return new Data_Maybe.Just(_421.value0);
          };
          if (_421 instanceof Cons) {
              var __tco__421 = _421.value1;
              _421 = __tco__421;
              continue tco;
          };
          return Data_Maybe.Nothing.value;
      };
  };
  var init = function (_423) {
      if (_423 instanceof Nil) {
          return Data_Maybe.Nothing.value;
      };
      var go = function (__copy__446) {
          return function (__copy_acc) {
              var _446 = __copy__446;
              var acc = __copy_acc;
              tco: while (true) {
                  if (_446 instanceof Cons && _446.value1 instanceof Nil) {
                      return acc;
                  };
                  if (_446 instanceof Cons) {
                      var __tco__446 = _446.value1;
                      var __tco_acc = new Cons(_446.value0, acc);
                      _446 = __tco__446;
                      acc = __tco_acc;
                      continue tco;
                  };
                  throw new Error("Failed pattern match at Data.List line 255, column 1 - line 256, column 1: " + [ _446.constructor.name, acc.constructor.name ]);
              };
          };
      };
      return Data_Maybe.Just.create(reverse(go(_423)(Nil.value)));
  };                     
  var head = function (_420) {
      if (_420 instanceof Nil) {
          return Data_Maybe.Nothing.value;
      };
      if (_420 instanceof Cons) {
          return new Data_Maybe.Just(_420.value0);
      };
      throw new Error("Failed pattern match at Data.List line 233, column 1 - line 234, column 1: " + [ _420.constructor.name ]);
  };
  var functorList = new Prelude.Functor(function (f) {
      return function (lst) {
          var go = function (__copy__471) {
              return function (__copy_acc) {
                  var _471 = __copy__471;
                  var acc = __copy_acc;
                  tco: while (true) {
                      if (_471 instanceof Nil) {
                          return acc;
                      };
                      if (_471 instanceof Cons) {
                          var __tco__471 = _471.value1;
                          var __tco_acc = new Cons(f(_471.value0), acc);
                          _471 = __tco__471;
                          acc = __tco_acc;
                          continue tco;
                      };
                      throw new Error("Failed pattern match at Data.List line 717, column 1 - line 724, column 1: " + [ _471.constructor.name, acc.constructor.name ]);
                  };
              };
          };
          return reverse(go(lst)(Nil.value));
      };
  });
  var fromList = function (__dict_Unfoldable_15) {
      return Data_Unfoldable.unfoldr(__dict_Unfoldable_15)(function (xs) {
          return Prelude["<$>"](Data_Maybe.functorMaybe)(function (rec) {
              return new Data_Tuple.Tuple(rec.head, rec.tail);
          })(uncons(xs));
      });
  };
  var foldableList = new Data_Foldable.Foldable(function (__dict_Monoid_16) {
      return function (f) {
          return Data_Foldable.foldl(foldableList)(function (acc) {
              return function (_1758) {
                  return Prelude.append(__dict_Monoid_16["__superclass_Prelude.Semigroup_0"]())(acc)(f(_1758));
              };
          })(Data_Monoid.mempty(__dict_Monoid_16));
      };
  }, (function () {
      var go = function (__copy_o) {
          return function (__copy_b) {
              return function (__copy__473) {
                  var o = __copy_o;
                  var b = __copy_b;
                  var _473 = __copy__473;
                  tco: while (true) {
                      var b_1 = b;
                      if (_473 instanceof Nil) {
                          return b_1;
                      };
                      if (_473 instanceof Cons) {
                          var __tco_o = o;
                          var __tco_b = o(b)(_473.value0);
                          var __tco__473 = _473.value1;
                          o = __tco_o;
                          b = __tco_b;
                          _473 = __tco__473;
                          continue tco;
                      };
                      throw new Error("Failed pattern match: " + [ o.constructor.name, b.constructor.name, _473.constructor.name ]);
                  };
              };
          };
      };
      return go;
  })(), function (o) {
      return function (b) {
          return function (_472) {
              if (_472 instanceof Nil) {
                  return b;
              };
              if (_472 instanceof Cons) {
                  return o(_472.value0)(Data_Foldable.foldr(foldableList)(o)(b)(_472.value1));
              };
              throw new Error("Failed pattern match: " + [ o.constructor.name, b.constructor.name, _472.constructor.name ]);
          };
      };
  });
  var length = Data_Foldable.foldl(foldableList)(function (acc) {
      return function (_415) {
          return acc + 1 | 0;
      };
  })(0);
  var traversableList = new Data_Traversable.Traversable(function () {
      return foldableList;
  }, function () {
      return functorList;
  }, function (__dict_Applicative_1) {
      return function (_476) {
          if (_476 instanceof Nil) {
              return Prelude.pure(__dict_Applicative_1)(Nil.value);
          };
          if (_476 instanceof Cons) {
              return Prelude["<*>"](__dict_Applicative_1["__superclass_Prelude.Apply_0"]())(Prelude["<$>"]((__dict_Applicative_1["__superclass_Prelude.Apply_0"]())["__superclass_Prelude.Functor_0"]())(Cons.create)(_476.value0))(Data_Traversable.sequence(traversableList)(__dict_Applicative_1)(_476.value1));
          };
          throw new Error("Failed pattern match: " + [ _476.constructor.name ]);
      };
  }, function (__dict_Applicative_0) {
      return function (f) {
          return function (_475) {
              if (_475 instanceof Nil) {
                  return Prelude.pure(__dict_Applicative_0)(Nil.value);
              };
              if (_475 instanceof Cons) {
                  return Prelude["<*>"](__dict_Applicative_0["__superclass_Prelude.Apply_0"]())(Prelude["<$>"]((__dict_Applicative_0["__superclass_Prelude.Apply_0"]())["__superclass_Prelude.Functor_0"]())(Cons.create)(f(_475.value0)))(Data_Traversable.traverse(traversableList)(__dict_Applicative_0)(f)(_475.value1));
              };
              throw new Error("Failed pattern match: " + [ f.constructor.name, _475.constructor.name ]);
          };
      };
  });
  var findIndex = function (fn) {
      var go = function (__copy_n) {
          return function (__copy__447) {
              var n = __copy_n;
              var _447 = __copy__447;
              tco: while (true) {
                  if (_447 instanceof Cons) {
                      if (fn(_447.value0)) {
                          return new Data_Maybe.Just(n);
                      };
                      if (Prelude.otherwise) {
                          var __tco_n = n + 1 | 0;
                          var __tco__447 = _447.value1;
                          n = __tco_n;
                          _447 = __tco__447;
                          continue tco;
                      };
                  };
                  if (_447 instanceof Nil) {
                      return Data_Maybe.Nothing.value;
                  };
                  throw new Error("Failed pattern match at Data.List line 297, column 1 - line 298, column 1: " + [ n.constructor.name, _447.constructor.name ]);
              };
          };
      };
      return go(0);
  };
  var filter = function (p) {
      var go = function (__copy_acc) {
          return function (__copy__449) {
              var acc = __copy_acc;
              var _449 = __copy__449;
              tco: while (true) {
                  var acc_1 = acc;
                  if (_449 instanceof Nil) {
                      return reverse(acc_1);
                  };
                  if (_449 instanceof Cons) {
                      if (p(_449.value0)) {
                          var __tco_acc = new Cons(_449.value0, acc);
                          var __tco__449 = _449.value1;
                          acc = __tco_acc;
                          _449 = __tco__449;
                          continue tco;
                      };
                      if (Prelude.otherwise) {
                          var __tco_acc = acc;
                          var __tco__449 = _449.value1;
                          acc = __tco_acc;
                          _449 = __tco__449;
                          continue tco;
                      };
                  };
                  throw new Error("Failed pattern match at Data.List line 387, column 1 - line 388, column 1: " + [ acc.constructor.name, _449.constructor.name ]);
              };
          };
      };
      return go(Nil.value);
  };
  var eqList = function (__dict_Eq_21) {
      return new Prelude.Eq(function (xs) {
          return function (ys) {
              var go = function (__copy__465) {
                  return function (__copy__466) {
                      return function (__copy__467) {
                          var _465 = __copy__465;
                          var _466 = __copy__466;
                          var _467 = __copy__467;
                          tco: while (true) {
                              if (!_467) {
                                  return false;
                              };
                              if (_465 instanceof Nil && _466 instanceof Nil) {
                                  return _467;
                              };
                              if (_465 instanceof Cons && _466 instanceof Cons) {
                                  var __tco__465 = _465.value1;
                                  var __tco__466 = _466.value1;
                                  var __tco__467 = _467 && Prelude["=="](__dict_Eq_21)(_466.value0)(_465.value0);
                                  _465 = __tco__465;
                                  _466 = __tco__466;
                                  _467 = __tco__467;
                                  continue tco;
                              };
                              return false;
                          };
                      };
                  };
              };
              return go(xs)(ys)(true);
          };
      });
  };
  var elemIndex = function (__dict_Eq_23) {
      return function (x) {
          return findIndex(function (_8) {
              return Prelude["=="](__dict_Eq_23)(_8)(x);
          });
      };
  };
  var dropWhile = function (p) {
      var go = function (__copy__461) {
          var _461 = __copy__461;
          tco: while (true) {
              if (_461 instanceof Cons && p(_461.value0)) {
                  var __tco__461 = _461.value1;
                  _461 = __tco__461;
                  continue tco;
              };
              return _461;
          };
      };
      return go;
  };
  var concatMap = function (f) {
      return function (_435) {
          if (_435 instanceof Nil) {
              return Nil.value;
          };
          if (_435 instanceof Cons) {
              return Prelude["<>"](semigroupList)(f(_435.value0))(concatMap(f)(_435.value1));
          };
          throw new Error("Failed pattern match: " + [ f.constructor.name, _435.constructor.name ]);
      };
  };                                                       
  var applyList = new Prelude.Apply(function () {
      return functorList;
  }, function (_477) {
      return function (xs) {
          if (_477 instanceof Nil) {
              return Nil.value;
          };
          if (_477 instanceof Cons) {
              return Prelude["<>"](semigroupList)(Prelude["<$>"](functorList)(_477.value0)(xs))(Prelude["<*>"](applyList)(_477.value1)(xs));
          };
          throw new Error("Failed pattern match: " + [ _477.constructor.name, xs.constructor.name ]);
      };
  });
  var bindList = new Prelude.Bind(function () {
      return applyList;
  }, Prelude.flip(concatMap));
  var concat = function (_10) {
      return Prelude[">>="](bindList)(_10)(Prelude.id(Prelude.categoryFn));
  };
  exports["Nil"] = Nil;
  exports["Cons"] = Cons;
  exports["zipWith"] = zipWith;
  exports["span"] = span;
  exports["dropWhile"] = dropWhile;
  exports["sortBy"] = sortBy;
  exports["sort"] = sort;
  exports["mapMaybe"] = mapMaybe;
  exports["filter"] = filter;
  exports["concatMap"] = concatMap;
  exports["concat"] = concat;
  exports["reverse"] = reverse;
  exports["findIndex"] = findIndex;
  exports["elemIndex"] = elemIndex;
  exports["uncons"] = uncons;
  exports["init"] = init;
  exports["tail"] = tail;
  exports["last"] = last;
  exports["head"] = head;
  exports["snoc"] = snoc;
  exports[":"] = $colon;
  exports["length"] = length;
  exports["null"] = $$null;
  exports["singleton"] = singleton;
  exports["toList"] = toList;
  exports["fromList"] = fromList;
  exports["showList"] = showList;
  exports["eqList"] = eqList;
  exports["semigroupList"] = semigroupList;
  exports["functorList"] = functorList;
  exports["foldableList"] = foldableList;
  exports["traversableList"] = traversableList;
  exports["applyList"] = applyList;
  exports["bindList"] = bindList;;
 
})(PS["Data.List"] = PS["Data.List"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Extend = PS["Control.Extend"];
  var Data_Bifoldable = PS["Data.Bifoldable"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Bitraversable = PS["Data.Bitraversable"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Traversable = PS["Data.Traversable"];     
  var Left = (function () {
      function Left(value0) {
          this.value0 = value0;
      };
      Left.create = function (value0) {
          return new Left(value0);
      };
      return Left;
  })();
  var Right = (function () {
      function Right(value0) {
          this.value0 = value0;
      };
      Right.create = function (value0) {
          return new Right(value0);
      };
      return Right;
  })();
  var functorEither = new Prelude.Functor(function (f) {
      return function (_296) {
          if (_296 instanceof Left) {
              return new Left(_296.value0);
          };
          if (_296 instanceof Right) {
              return new Right(f(_296.value0));
          };
          throw new Error("Failed pattern match at Data.Either line 52, column 1 - line 56, column 1: " + [ f.constructor.name, _296.constructor.name ]);
      };
  });
  var applyEither = new Prelude.Apply(function () {
      return functorEither;
  }, function (_298) {
      return function (r) {
          if (_298 instanceof Left) {
              return new Left(_298.value0);
          };
          if (_298 instanceof Right) {
              return Prelude["<$>"](functorEither)(_298.value0)(r);
          };
          throw new Error("Failed pattern match at Data.Either line 92, column 1 - line 116, column 1: " + [ _298.constructor.name, r.constructor.name ]);
      };
  });
  var applicativeEither = new Prelude.Applicative(function () {
      return applyEither;
  }, Right.create);
  exports["Left"] = Left;
  exports["Right"] = Right;
  exports["functorEither"] = functorEither;
  exports["applyEither"] = applyEither;
  exports["applicativeEither"] = applicativeEither;;
 
})(PS["Data.Either"] = PS["Data.Either"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Data.Maybe.Unsafe

  exports.unsafeThrow = function (msg) {
    throw new Error(msg);
  };
 
})(PS["Data.Maybe.Unsafe"] = PS["Data.Maybe.Unsafe"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Data.Maybe.Unsafe"];
  var Prelude = PS["Prelude"];
  var Data_Maybe = PS["Data.Maybe"];     
  var fromJust = function (_274) {
      if (_274 instanceof Data_Maybe.Just) {
          return _274.value0;
      };
      if (_274 instanceof Data_Maybe.Nothing) {
          return $foreign.unsafeThrow("Data.Maybe.Unsafe.fromJust called on Nothing");
      };
      throw new Error("Failed pattern match at Data.Maybe.Unsafe line 10, column 1 - line 11, column 1: " + [ _274.constructor.name ]);
  };
  exports["fromJust"] = fromJust;;
 
})(PS["Data.Maybe.Unsafe"] = PS["Data.Maybe.Unsafe"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_Char = PS["Data.Char"];
  var Data_Either = PS["Data.Either"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_Unsafe = PS["Data.Maybe.Unsafe"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Enum = function (__superclass_Prelude$dotBounded_0, cardinality, fromEnum, pred, succ, toEnum) {
      this["__superclass_Prelude.Bounded_0"] = __superclass_Prelude$dotBounded_0;
      this.cardinality = cardinality;
      this.fromEnum = fromEnum;
      this.pred = pred;
      this.succ = succ;
      this.toEnum = toEnum;
  };
  var toEnum = function (dict) {
      return dict.toEnum;
  };
  var succ = function (dict) {
      return dict.succ;
  };
  var pred = function (dict) {
      return dict.pred;
  };
  var intStepFromTo = function (step) {
      return function (from) {
          return function (to) {
              return Data_Unfoldable.unfoldr(Data_Unfoldable.unfoldableArray)(function (e) {
                  var _1450 = e <= to;
                  if (_1450) {
                      return Data_Maybe.Just.create(new Data_Tuple.Tuple(e, e + step | 0));
                  };
                  if (!_1450) {
                      return Data_Maybe.Nothing.value;
                  };
                  throw new Error("Failed pattern match at Data.Enum line 103, column 1 - line 104, column 1: " + [ _1450.constructor.name ]);
              })(from);
          };
      };
  };
  var intFromTo = intStepFromTo(1);
  var fromEnum = function (dict) {
      return dict.fromEnum;
  };
  var enumFromTo = function (__dict_Enum_8) {
      return function (a) {
          return function (b) {
              var b$prime = fromEnum(__dict_Enum_8)(b);
              var a$prime = fromEnum(__dict_Enum_8)(a);
              return Prelude["<$>"](Prelude.functorArray)(Prelude[">>>"](Prelude.semigroupoidFn)(toEnum(__dict_Enum_8))(Data_Maybe_Unsafe.fromJust))(intFromTo(a$prime)(b$prime));
          };
      };
  };
  var defaultSucc = function (toEnum$prime) {
      return function (fromEnum$prime) {
          return function (a) {
              return toEnum$prime(fromEnum$prime(a) + 1 | 0);
          };
      };
  };
  var defaultPred = function (toEnum$prime) {
      return function (fromEnum$prime) {
          return function (a) {
              return toEnum$prime(fromEnum$prime(a) - 1);
          };
      };
  };                                                                                                                
  var cardinality = function (dict) {
      return dict.cardinality;
  };
  exports["Enum"] = Enum;
  exports["enumFromTo"] = enumFromTo;
  exports["intStepFromTo"] = intStepFromTo;
  exports["intFromTo"] = intFromTo;
  exports["defaultPred"] = defaultPred;
  exports["defaultSucc"] = defaultSucc;
  exports["toEnum"] = toEnum;
  exports["succ"] = succ;
  exports["pred"] = pred;
  exports["fromEnum"] = fromEnum;
  exports["cardinality"] = cardinality;;
 
})(PS["Data.Enum"] = PS["Data.Enum"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  exports._copyEff = function (m) {
    return function () {
      var r = {};
      for (var k in m) {
        if (m.hasOwnProperty(k)) {
          r[k] = m[k];
        }
      }
      return r;
    };
  };

  exports.empty = {};

  exports.runST = function (f) {
    return f;
  };

  // jshint maxparams: 2
  exports._fmapStrMap = function (m0, f) {
    var m = {};
    for (var k in m0) {
      if (m0.hasOwnProperty(k)) {
        m[k] = f(m0[k]);
      }
    }
    return m;
  };

  // jshint maxparams: 1
  exports._foldM = function (bind) {
    return function (f) {
      return function (mz) {
        return function (m) {
          function g (k) {
            return function (z) {
              return f(z)(k)(m[k]);
            };
          }
          for (var k in m) {
            if (m.hasOwnProperty(k)) {
              mz = bind(mz)(g(k));
            }
          }
          return mz;
        };
      };
    };
  };

  // jshint maxparams: 4
  exports._lookup = function (no, yes, k, m) {
    return k in m ? yes(m[k]) : no;
  };

  function _collect (f) {
    return function (m) {
      var r = [];
      for (var k in m) {
        if (m.hasOwnProperty(k)) {
          r.push(f(k)(m[k]));
        }
      }
      return r;
    };
  }

  exports._collect = _collect;

  exports.keys = Object.keys || _collect(function (k) {
    return function () { return k; };
  });
 
})(PS["Data.StrMap"] = PS["Data.StrMap"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  exports.runFn3 = function (fn) {
    return function (a) {
      return function (b) {
        return function (c) {
          return fn(a, b, c);
        };
      };
    };
  };

  exports.runFn4 = function (fn) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return fn(a, b, c, d);
          };
        };
      };
    };
  };

  exports.runFn8 = function (fn) {
    return function (a) {
      return function (b) {
        return function (c) {
          return function (d) {
            return function (e) {
              return function (f) {
                return function (g) {
                  return function (h) {
                    return fn(a, b, c, d, e, f, g, h);
                  };
                };
              };
            };
          };
        };
      };
    };
  };
 
})(PS["Data.Function"] = PS["Data.Function"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Data.Function"];
  var Prelude = PS["Prelude"];
  exports["runFn8"] = $foreign.runFn8;
  exports["runFn4"] = $foreign.runFn4;
  exports["runFn3"] = $foreign.runFn3;;
 
})(PS["Data.Function"] = PS["Data.Function"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Data.StrMap.ST

  exports["new"] = function () {
    return {};
  };

  exports.poke = function (m) {
    return function (k) {
      return function (v) {
        return function () {
          m[k] = v;
          return m;
        };
      };
    };
  };

  exports["delete"] = function (m) {
    return function (k) {
      return function () {
        delete m[k];
        return m;
      };
    };
  };
 
})(PS["Data.StrMap.ST"] = PS["Data.StrMap.ST"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Data.StrMap.ST"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_ST = PS["Control.Monad.ST"];
  exports["delete"] = $foreign["delete"];
  exports["poke"] = $foreign.poke;
  exports["new"] = $foreign["new"];;
 
})(PS["Data.StrMap.ST"] = PS["Data.StrMap.ST"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Data.StrMap"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_List = PS["Data.List"];
  var Control_Monad_ST = PS["Control.Monad.ST"];
  var Data_StrMap_ST = PS["Data.StrMap.ST"];
  var thawST = $foreign._copyEff;
  var pureST = function (f) {
      return Control_Monad_Eff.runPure($foreign.runST(f));
  };
  var mutate = function (f) {
      return function (m) {
          return pureST(function __do() {
              var _35 = thawST(m)();
              f(_35)();
              return Prelude["return"](Control_Monad_Eff.applicativeEff)(_35)();
          });
      };
  };
  var member = Data_Function.runFn4($foreign._lookup)(false)(Prelude["const"](true));
  var lookup = Data_Function.runFn4($foreign._lookup)(Data_Maybe.Nothing.value)(Data_Maybe.Just.create);
  var insert = function (k) {
      return function (v) {
          return mutate(function (s) {
              return Data_StrMap_ST.poke(s)(k)(v);
          });
      };
  };
  var functorStrMap = new Prelude.Functor(function (f) {
      return function (m) {
          return $foreign._fmapStrMap(m, f);
      };
  });
  var fromList = function (l) {
      return pureST(function __do() {
          var _37 = Data_StrMap_ST["new"]();
          Data_Foldable.for_(Control_Monad_Eff.applicativeEff)(Data_List.foldableList)(l)(function (_507) {
              return Data_StrMap_ST.poke(_37)(_507.value0)(_507.value1);
          })();
          return Prelude["return"](Control_Monad_Eff.applicativeEff)(_37)();
      });
  };
  var foldM = function (__dict_Monad_3) {
      return function (f) {
          return function (z) {
              return $foreign._foldM(Prelude[">>="](__dict_Monad_3["__superclass_Prelude.Bind_1"]()))(f)(Prelude.pure(__dict_Monad_3["__superclass_Prelude.Applicative_0"]())(z));
          };
      };
  };
  var union = function (m) {
      return mutate(function (s) {
          return foldM(Control_Monad_Eff.monadEff)(Data_StrMap_ST.poke)(s)(m);
      });
  };
  var unions = Data_Foldable.foldl(Data_List.foldableList)(union)($foreign.empty);
  var fold = $foreign._foldM(Prelude["#"]);
  var $$delete = function (k) {
      return mutate(function (s) {
          return Data_StrMap_ST["delete"](s)(k);
      });
  };
  exports["thawST"] = thawST;
  exports["foldM"] = foldM;
  exports["fold"] = fold;
  exports["unions"] = unions;
  exports["union"] = union;
  exports["member"] = member;
  exports["delete"] = $$delete;
  exports["fromList"] = fromList;
  exports["lookup"] = lookup;
  exports["insert"] = insert;
  exports["functorStrMap"] = functorStrMap;
  exports["keys"] = $foreign.keys;
  exports["empty"] = $foreign.empty;;
 
})(PS["Data.StrMap"] = PS["Data.StrMap"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_List = PS["Data.List"];
  var Data_Enum = PS["Data.Enum"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_StrMap = PS["Data.StrMap"];     
  var Easy = (function () {
      function Easy() {

      };
      Easy.value = new Easy();
      return Easy;
  })();
  var Medium = (function () {
      function Medium() {

      };
      Medium.value = new Medium();
      return Medium;
  })();
  var Hard = (function () {
      function Hard() {

      };
      Hard.value = new Hard();
      return Hard;
  })();
  var Cyan = (function () {
      function Cyan() {

      };
      Cyan.value = new Cyan();
      return Cyan;
  })();
  var Brown = (function () {
      function Brown() {

      };
      Brown.value = new Brown();
      return Brown;
  })();
  var Red = (function () {
      function Red() {

      };
      Red.value = new Red();
      return Red;
  })();
  var Orange = (function () {
      function Orange() {

      };
      Orange.value = new Orange();
      return Orange;
  })();
  var Yellow = (function () {
      function Yellow() {

      };
      Yellow.value = new Yellow();
      return Yellow;
  })();
  var showDifficulty = new Prelude.Show(function (_569) {
      if (_569 instanceof Easy) {
          return "Easy";
      };
      if (_569 instanceof Medium) {
          return "Medium";
      };
      if (_569 instanceof Hard) {
          return "Hard";
      };
      throw new Error("Failed pattern match at Types line 70, column 1 - line 75, column 1: " + [ _569.constructor.name ]);
  });
  var showCube = new Prelude.Show(function (_568) {
      if (_568 instanceof Cyan) {
          return "Cyan";
      };
      if (_568 instanceof Brown) {
          return "Brown";
      };
      if (_568 instanceof Red) {
          return "Red";
      };
      if (_568 instanceof Orange) {
          return "Orange";
      };
      if (_568 instanceof Yellow) {
          return "Yellow";
      };
      throw new Error("Failed pattern match at Types line 13, column 1 - line 20, column 1: " + [ _568.constructor.name ]);
  });
  var cubeToEnum = function (_567) {
      if (_567 === 0) {
          return new Data_Maybe.Just(Cyan.value);
      };
      if (_567 === 1) {
          return new Data_Maybe.Just(Brown.value);
      };
      if (_567 === 2) {
          return new Data_Maybe.Just(Red.value);
      };
      if (_567 === 3) {
          return new Data_Maybe.Just(Orange.value);
      };
      if (_567 === 4) {
          return new Data_Maybe.Just(Yellow.value);
      };
      return Data_Maybe.Nothing.value;
  };
  var cubeFromEnum = function (_566) {
      if (_566 instanceof Cyan) {
          return 0;
      };
      if (_566 instanceof Brown) {
          return 1;
      };
      if (_566 instanceof Red) {
          return 2;
      };
      if (_566 instanceof Orange) {
          return 3;
      };
      if (_566 instanceof Yellow) {
          return 4;
      };
      throw new Error("Failed pattern match at Types line 37, column 1 - line 38, column 1: " + [ _566.constructor.name ]);
  };
  var boundedCube = new Prelude.Bounded(Cyan.value, Yellow.value);
  var enumCube = new Data_Enum.Enum(function () {
      return boundedCube;
  }, 5, cubeFromEnum, Data_Enum.defaultPred(cubeToEnum)(cubeFromEnum), Data_Enum.defaultSucc(cubeToEnum)(cubeFromEnum), cubeToEnum);
  var eqCube = new Prelude.Eq(function (a) {
      return function (b) {
          return Data_Enum.fromEnum(enumCube)(a) === Data_Enum.fromEnum(enumCube)(b);
      };
  });
  exports["Easy"] = Easy;
  exports["Medium"] = Medium;
  exports["Hard"] = Hard;
  exports["Cyan"] = Cyan;
  exports["Brown"] = Brown;
  exports["Red"] = Red;
  exports["Orange"] = Orange;
  exports["Yellow"] = Yellow;
  exports["cubeToEnum"] = cubeToEnum;
  exports["cubeFromEnum"] = cubeFromEnum;
  exports["showCube"] = showCube;
  exports["eqCube"] = eqCube;
  exports["boundedCube"] = boundedCube;
  exports["enumCube"] = enumCube;
  exports["showDifficulty"] = showDifficulty;;
 
})(PS["Types"] = PS["Types"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Analytics"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var DOM = PS["DOM"];
  var Types = PS["Types"];     
  var analyticsLevelChanged = $foreign.analyticsEvent("level")("changed");
  exports["analyticsLevelChanged"] = analyticsLevelChanged;;
 
})(PS["Analytics"] = PS["Analytics"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var $eq$less$less = function (__dict_Bind_1) {
      return function (f) {
          return function (m) {
              return Prelude[">>="](__dict_Bind_1)(m)(f);
          };
      };
  };
  exports["=<<"] = $eq$less$less;;
 
})(PS["Control.Bind"] = PS["Control.Bind"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];     
  var when = function (__dict_Monad_0) {
      return function (_101) {
          return function (m) {
              if (_101) {
                  return m;
              };
              if (!_101) {
                  return Prelude["return"](__dict_Monad_0["__superclass_Prelude.Applicative_0"]())(Prelude.unit);
              };
              throw new Error("Failed pattern match at Control.Monad line 8, column 1 - line 9, column 1: " + [ _101.constructor.name, m.constructor.name ]);
          };
      };
  };
  exports["when"] = when;;
 
})(PS["Control.Monad"] = PS["Control.Monad"] || {});
(function(exports) {
  /* global exports, console */
  "use strict";

  // module Control.Monad.Eff.Console

  exports.log = function (s) {
    return function () {
      console.log(s);
      return {};
    };
  };
 
})(PS["Control.Monad.Eff.Console"] = PS["Control.Monad.Eff.Console"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Control.Monad.Eff.Console"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];     
  var print = function (__dict_Show_0) {
      return function (_605) {
          return $foreign.log(Prelude.show(__dict_Show_0)(_605));
      };
  };
  exports["print"] = print;
  exports["log"] = $foreign.log;;
 
})(PS["Control.Monad.Eff.Console"] = PS["Control.Monad.Eff.Console"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module DOM.Event.EventTarget

  exports.eventListener = function (fn) {
    return function (event) {
      return fn(event)();
    };
  };

  exports.addEventListener = function (type) {
    return function (listener) {
      return function (useCapture) {
        return function (target) {
          return function () {
            target.addEventListener(type, listener, useCapture);
            return {};
          };
        };
      };
    };
  };
 
})(PS["DOM.Event.EventTarget"] = PS["DOM.Event.EventTarget"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // jshint maxparams: 1
  exports.toForeign = function (value) {
    return value;
  };

  exports.unsafeFromForeign = function (value) {
    return value;
  };

  exports.tagOf = function (value) {
    return Object.prototype.toString.call(value).slice(8, -1);
  };
 
})(PS["Data.Foreign"] = PS["Data.Foreign"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  exports.toNumber = function (n) {
    return n;
  };
 
})(PS["Data.Int"] = PS["Data.Int"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Data.Int"];
  var Prelude = PS["Prelude"];
  var Data_Int_Bits = PS["Data.Int.Bits"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_Unsafe = PS["Data.Maybe.Unsafe"];
  var $$Math = PS["Math"];
  var even = function (x) {
      return (x & 1) === 0;
  };
  exports["even"] = even;
  exports["toNumber"] = $foreign.toNumber;;
 
})(PS["Data.Int"] = PS["Data.Int"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  exports._indexOf = function (just) {
    return function (nothing) {
      return function (x) {
        return function (s) {
          var i = s.indexOf(x);
          return i === -1 ? nothing : just(i);
        };
      };
    };
  };
 
})(PS["Data.String"] = PS["Data.String"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Data.String"];
  var Prelude = PS["Prelude"];
  var Data_Char = PS["Data.Char"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_String_Unsafe = PS["Data.String.Unsafe"];                                          
  var indexOf = $foreign._indexOf(Data_Maybe.Just.create)(Data_Maybe.Nothing.value);
  var contains = function (x) {
      return function (s) {
          return Data_Maybe.isJust(indexOf(x)(s));
      };
  };
  exports["indexOf"] = indexOf;
  exports["contains"] = contains;;
 
})(PS["Data.String"] = PS["Data.String"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Data.Foreign"];
  var Prelude = PS["Prelude"];
  var Data_Either = PS["Data.Either"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Function = PS["Data.Function"];
  var Data_Int = PS["Data.Int"];
  var Data_String = PS["Data.String"];     
  var TypeMismatch = (function () {
      function TypeMismatch(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      TypeMismatch.create = function (value0) {
          return function (value1) {
              return new TypeMismatch(value0, value1);
          };
      };
      return TypeMismatch;
  })();
  var unsafeReadTagged = function (tag) {
      return function (value) {
          if (Prelude["=="](Prelude.eqString)($foreign.tagOf(value))(tag)) {
              return Prelude.pure(Data_Either.applicativeEither)($foreign.unsafeFromForeign(value));
          };
          return new Data_Either.Left(new TypeMismatch(tag, $foreign.tagOf(value)));
      };
  };
  exports["TypeMismatch"] = TypeMismatch;
  exports["unsafeReadTagged"] = unsafeReadTagged;
  exports["toForeign"] = $foreign.toForeign;;
 
})(PS["Data.Foreign"] = PS["Data.Foreign"] || {});
(function(exports) {
  "use strict";

  // module Unsafe.Coerce

  exports.unsafeCoerce = function(x) { return x; }
 
})(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Unsafe.Coerce"];
  exports["unsafeCoerce"] = $foreign.unsafeCoerce;;
 
})(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["DOM.Event.Types"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Either = PS["Data.Either"];
  var Data_Foreign = PS["Data.Foreign"];
  var Data_Foreign_Class = PS["Data.Foreign.Class"];
  var Data_Maybe_Unsafe = PS["Data.Maybe.Unsafe"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];
  var DOM = PS["DOM"];
  var DOM_Event_EventPhase = PS["DOM.Event.EventPhase"];                       
  var readKeyboardEvent = Data_Foreign.unsafeReadTagged("KeyboardEvent");
  exports["readKeyboardEvent"] = readKeyboardEvent;;
 
})(PS["DOM.Event.Types"] = PS["DOM.Event.Types"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["DOM.Event.EventTarget"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Exception = PS["Control.Monad.Eff.Exception"];
  var DOM = PS["DOM"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  exports["addEventListener"] = $foreign.addEventListener;
  exports["eventListener"] = $foreign.eventListener;;
 
})(PS["DOM.Event.EventTarget"] = PS["DOM.Event.EventTarget"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var keydown = "keydown";  
  var click = "click";
  var change = "change";
  exports["keydown"] = keydown;
  exports["click"] = click;
  exports["change"] = change;;
 
})(PS["DOM.Event.EventTypes"] = PS["DOM.Event.EventTypes"] || {});
(function(exports) {
  /* global exports, window */
  "use strict";

  // module DOM.HTML

  exports.window = function () {
    return window;
  };
 
})(PS["DOM.HTML"] = PS["DOM.HTML"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module DOM.HTML.Types

  exports._readHTMLElement = function (failure) {
    return function (success) {
      return function (value) {
        var tag = Object.prototype.toString.call(value);
        if (tag.indexOf("[object HTML") === 0 && tag.indexOf("Element]") === tag.length - 8) {
          return success(value);
        } else {
          return failure(tag);
        }
      };
    };
  };
 
})(PS["DOM.HTML.Types"] = PS["DOM.HTML.Types"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];                     
  var elementToParentNode = Unsafe_Coerce.unsafeCoerce;              
  var elementToNode = Unsafe_Coerce.unsafeCoerce;
  var elementToEventTarget = Unsafe_Coerce.unsafeCoerce;
  var documentToNonElementParentNode = Unsafe_Coerce.unsafeCoerce;
  exports["elementToEventTarget"] = elementToEventTarget;
  exports["elementToNode"] = elementToNode;
  exports["elementToParentNode"] = elementToParentNode;
  exports["documentToNonElementParentNode"] = documentToNonElementParentNode;;
 
})(PS["DOM.Node.Types"] = PS["DOM.Node.Types"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["DOM.HTML.Types"];
  var Prelude = PS["Prelude"];
  var Data_Either = PS["Data.Either"];
  var Data_Foreign = PS["Data.Foreign"];
  var Data_Foreign_Class = PS["Data.Foreign.Class"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Unsafe_Coerce = PS["Unsafe.Coerce"];     
  var windowToEventTarget = Unsafe_Coerce.unsafeCoerce;
  var readHTMLElement = $foreign._readHTMLElement(function (_1500) {
      return Data_Either.Left.create(Data_Foreign.TypeMismatch.create("HTMLElement")(_1500));
  })(Data_Either.Right.create);                      
  var htmlElementToEventTarget = Unsafe_Coerce.unsafeCoerce;
  var htmlElementToElement = Unsafe_Coerce.unsafeCoerce;     
  var htmlDocumentToDocument = Unsafe_Coerce.unsafeCoerce;
  exports["readHTMLElement"] = readHTMLElement;
  exports["htmlElementToEventTarget"] = htmlElementToEventTarget;
  exports["htmlElementToElement"] = htmlElementToElement;
  exports["htmlDocumentToDocument"] = htmlDocumentToDocument;
  exports["windowToEventTarget"] = windowToEventTarget;;
 
})(PS["DOM.HTML.Types"] = PS["DOM.HTML.Types"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["DOM.HTML"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var DOM = PS["DOM"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  exports["window"] = $foreign.window;;
 
})(PS["DOM.HTML"] = PS["DOM.HTML"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module DOM.HTML.Window

  exports.document = function (window) {
    return function () {
      return window.document;
    };
  };
 
})(PS["DOM.HTML.Window"] = PS["DOM.HTML.Window"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["DOM.HTML.Window"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var DOM = PS["DOM"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  exports["document"] = $foreign.document;;
 
})(PS["DOM.HTML.Window"] = PS["DOM.HTML.Window"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  exports.createElement = function (localName) {
    return function (doc) {
      return function () {
        return doc.createElement(localName);
      };
    };
  };
 
})(PS["DOM.Node.Document"] = PS["DOM.Node.Document"] || {});
(function(exports) {
  /* global exports */
  "use strict";          

  exports.nullable = function(a, r, f) {
      return a == null ? r : f(a);
  }; 
 
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Data.Nullable"];
  var Prelude = PS["Prelude"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Function = PS["Data.Function"];                              
  var toMaybe = function (n) {
      return $foreign.nullable(n, Data_Maybe.Nothing.value, Data_Maybe.Just.create);
  };
  exports["toMaybe"] = toMaybe;;
 
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["DOM.Node.Document"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Nullable = PS["Data.Nullable"];
  var DOM = PS["DOM"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  exports["createElement"] = $foreign.createElement;;
 
})(PS["DOM.Node.Document"] = PS["DOM.Node.Document"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  exports.setAttribute = function (name) {
    return function (value) {
      return function (element) {
        return function () {
          element.setAttribute(name, value);
          return {};
        };
      };
    };
  };

  exports.getAttribute = function (name) {
    return function (element) {
      return function () {
        return element.getAttribute(name);
      };
    };
  };
 
})(PS["DOM.Node.Element"] = PS["DOM.Node.Element"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["DOM.Node.Element"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Nullable = PS["Data.Nullable"];
  var DOM = PS["DOM"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  exports["getAttribute"] = $foreign.getAttribute;
  exports["setAttribute"] = $foreign.setAttribute;;
 
})(PS["DOM.Node.Element"] = PS["DOM.Node.Element"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module DOM.Node.Node

  var getEffProp = function (name) {
    return function (node) {
      return function () {
        return node[name];
      };
    };
  };                                            

  exports.parentElement = getEffProp("parentElement");

  exports.textContent = getEffProp("textContent");

  exports.setTextContent = function (value) {
    return function (node) {
      return function () {
        node.textContent = value;
        return {};
      };
    };
  };

  exports.appendChild = function (node) {
    return function (parent) {
      return function () {
        return parent.appendChild(node);
      };
    };
  };
 
})(PS["DOM.Node.Node"] = PS["DOM.Node.Node"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["DOM.Node.Node"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Enum = PS["Data.Enum"];
  var Data_Nullable = PS["Data.Nullable"];
  var Data_Maybe_Unsafe = PS["Data.Maybe.Unsafe"];
  var DOM = PS["DOM"];
  var DOM_Node_NodeType = PS["DOM.Node.NodeType"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  exports["appendChild"] = $foreign.appendChild;
  exports["setTextContent"] = $foreign.setTextContent;
  exports["parentElement"] = $foreign.parentElement;;
 
})(PS["DOM.Node.Node"] = PS["DOM.Node.Node"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module DOM.Node.NonElementParentNode

  exports.getElementById = function (id) {
    return function (node) {
      return function () {
        return node.getElementById(id);
      };
    };
  };
 
})(PS["DOM.Node.NonElementParentNode"] = PS["DOM.Node.NonElementParentNode"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["DOM.Node.NonElementParentNode"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Nullable = PS["Data.Nullable"];
  var DOM = PS["DOM"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  exports["getElementById"] = $foreign.getElementById;;
 
})(PS["DOM.Node.NonElementParentNode"] = PS["DOM.Node.NonElementParentNode"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module DOM.Node.ParentNode

  var getEffProp = function (name) {
    return function (node) {
      return function () {
        return node[name];
      };
    };
  };

  exports.children = getEffProp("children");
 
})(PS["DOM.Node.ParentNode"] = PS["DOM.Node.ParentNode"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["DOM.Node.ParentNode"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Nullable = PS["Data.Nullable"];
  var DOM = PS["DOM"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  exports["children"] = $foreign.children;;
 
})(PS["DOM.Node.ParentNode"] = PS["DOM.Node.ParentNode"] || {});
(function(exports) {
  // module DOMHelper

  exports.getSelectedValue = function (src) {
      return function() {
          return src.options[src.selectedIndex].value;
      };
  };

  exports.setInnerHTML = function (value) {
    return function (element) {
      return function () {
        element.innerHTML = value;
        return {};
      };
    };
  };

  exports.htmlCollectionToArray = function (collection) {
    return Array.prototype.slice.call(collection);
  };

  exports.keyCode = function (ev) {
    return ev.keyCode;
  };

  exports.ctrlKey = function (ev) {
    return ev.ctrlKey;
  };

  exports.setStyleAttribute = function (name) {
    return function (value) {
      return function (element) {
        return function () {
          element.style[name] = value;
          return {};
        };
      };
    };
  };


  exports.classAdd = function (value) {
    return function (element) {
      return function () {
        element.classList.add(value);
        return {};
      };
    };
  };

  exports.classRemove = function (value) {
    return function (element) {
      return function () {
        element.classList.remove(value);
        return {};
      };
    };
  };
 
})(PS["DOMHelper"] = PS["DOMHelper"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Data.Either.Unsafe

  exports.unsafeThrow = function (msg) {
    throw new Error(msg);
  };
 
})(PS["Data.Either.Unsafe"] = PS["Data.Either.Unsafe"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Data.Either.Unsafe"];
  var Prelude = PS["Prelude"];
  var Data_Either = PS["Data.Either"];     
  var fromRight = function (_317) {
      if (_317 instanceof Data_Either.Right) {
          return _317.value0;
      };
      return $foreign.unsafeThrow("Data.Either.Unsafe.fromLeft called on Left value");
  };
  exports["fromRight"] = fromRight;;
 
})(PS["Data.Either.Unsafe"] = PS["Data.Either.Unsafe"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["DOMHelper"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var DOM = PS["DOM"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var DOM_Event_EventTarget = PS["DOM.Event.EventTarget"];
  var DOM_HTML = PS["DOM.HTML"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  var DOM_HTML_Window = PS["DOM.HTML.Window"];
  var DOM_Node_Element = PS["DOM.Node.Element"];
  var DOM_Node_NonElementParentNode = PS["DOM.Node.NonElementParentNode"];
  var DOM_Node_ParentNode = PS["DOM.Node.ParentNode"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Either_Unsafe = PS["Data.Either.Unsafe"];
  var Data_Foreign = PS["Data.Foreign"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Maybe_Unsafe = PS["Data.Maybe.Unsafe"];
  var Data_Nullable = PS["Data.Nullable"];     
  var unsafeGetAttribute = function (key) {
      return function (el) {
          return Prelude["<$>"](Control_Monad_Eff.functorEff)(function (_1502) {
              return Data_Maybe_Unsafe.fromJust(Data_Nullable.toMaybe(_1502));
          })(DOM_Node_Element.getAttribute(key)(el));
      };
  };
  var unsafeEventToKeyboardEvent = function (_1503) {
      return Data_Either_Unsafe.fromRight(DOM_Event_Types.readKeyboardEvent(Data_Foreign.toForeign(_1503)));
  };
  var unsafeElementToHTMLElement = function (_1504) {
      return Data_Either_Unsafe.fromRight(DOM_HTML_Types.readHTMLElement(Data_Foreign.toForeign(_1504)));
  };
  var getElementById$prime = function (id) {
      return function (doc) {
          var docNode = DOM_Node_Types.documentToNonElementParentNode(doc);
          return function __do() {
              var _30 = DOM_Node_NonElementParentNode.getElementById(id)(docNode)();
              return Prelude["return"](Control_Monad_Eff.applicativeEff)(Data_Nullable.toMaybe(_30))();
          };
      };
  };
  var withElementById = function (id) {
      return function (doc) {
          return function (action) {
              return Prelude[">>="](Control_Monad_Eff.bindEff)(getElementById$prime(id)(doc))(Data_Maybe.maybe(Prelude["return"](Control_Monad_Eff.applicativeEff)(Prelude.unit))(action));
          };
      };
  };
  var getDocument = Prelude["<#>"](Control_Monad_Eff.functorEff)(Prelude[">>="](Control_Monad_Eff.bindEff)(DOM_HTML.window)(DOM_HTML_Window.document))(DOM_HTML_Types.htmlDocumentToDocument);
  var children$prime = function (el) {
      return Prelude["<$>"](Control_Monad_Eff.functorEff)($foreign.htmlCollectionToArray)(DOM_Node_ParentNode.children(DOM_Node_Types.elementToParentNode(el)));
  };
  var addEventListener$prime = function (etype) {
      return function (listener) {
          return function (target) {
              return DOM_Event_EventTarget.addEventListener(etype)(DOM_Event_EventTarget.eventListener(listener))(true)(target);
          };
      };
  };
  exports["unsafeGetAttribute"] = unsafeGetAttribute;
  exports["unsafeEventToKeyboardEvent"] = unsafeEventToKeyboardEvent;
  exports["unsafeElementToHTMLElement"] = unsafeElementToHTMLElement;
  exports["addEventListener'"] = addEventListener$prime;
  exports["children'"] = children$prime;
  exports["withElementById"] = withElementById;
  exports["getElementById'"] = getElementById$prime;
  exports["getDocument"] = getDocument;
  exports["classRemove"] = $foreign.classRemove;
  exports["classAdd"] = $foreign.classAdd;
  exports["setStyleAttribute"] = $foreign.setStyleAttribute;
  exports["ctrlKey"] = $foreign.ctrlKey;
  exports["keyCode"] = $foreign.keyCode;
  exports["setInnerHTML"] = $foreign.setInnerHTML;
  exports["getSelectedValue"] = $foreign.getSelectedValue;;
 
})(PS["DOMHelper"] = PS["DOMHelper"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  exports["regex'"] = function (s1) {
    return function (s2) {
      return new RegExp(s1, s2);
    };
  };

  exports.replace = function (r) {
    return function (s1) {
      return function (s2) {
        return s2.replace(r, s1);
      };
    };
  };
 
})(PS["Data.String.Regex"] = PS["Data.String.Regex"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Data.String.Regex"];
  var Prelude = PS["Prelude"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_String = PS["Data.String"];                                            
  var renderFlags = function (f) {
      return (function () {
          if (f.global) {
              return "g";
          };
          if (!f.global) {
              return "";
          };
          throw new Error("Failed pattern match at Data.String.Regex line 63, column 1 - line 64, column 1: " + [ f.global.constructor.name ]);
      })() + ((function () {
          if (f.ignoreCase) {
              return "i";
          };
          if (!f.ignoreCase) {
              return "";
          };
          throw new Error("Failed pattern match at Data.String.Regex line 63, column 1 - line 64, column 1: " + [ f.ignoreCase.constructor.name ]);
      })() + ((function () {
          if (f.multiline) {
              return "m";
          };
          if (!f.multiline) {
              return "";
          };
          throw new Error("Failed pattern match at Data.String.Regex line 63, column 1 - line 64, column 1: " + [ f.multiline.constructor.name ]);
      })() + ((function () {
          if (f.sticky) {
              return "y";
          };
          if (!f.sticky) {
              return "";
          };
          throw new Error("Failed pattern match at Data.String.Regex line 63, column 1 - line 64, column 1: " + [ f.sticky.constructor.name ]);
      })() + (function () {
          if (f.unicode) {
              return "u";
          };
          if (!f.unicode) {
              return "";
          };
          throw new Error("Failed pattern match at Data.String.Regex line 63, column 1 - line 64, column 1: " + [ f.unicode.constructor.name ]);
      })())));
  };
  var regex = function (s) {
      return function (f) {
          return $foreign["regex'"](s)(renderFlags(f));
      };
  };
  var parseFlags = function (s) {
      return {
          global: Data_String.contains("g")(s), 
          ignoreCase: Data_String.contains("i")(s), 
          multiline: Data_String.contains("m")(s), 
          sticky: Data_String.contains("y")(s), 
          unicode: Data_String.contains("u")(s)
      };
  };
  exports["parseFlags"] = parseFlags;
  exports["renderFlags"] = renderFlags;
  exports["regex"] = regex;
  exports["replace"] = $foreign.replace;;
 
})(PS["Data.String.Regex"] = PS["Data.String.Regex"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_List = PS["Data.List"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_StrMap = PS["Data.StrMap"];
  var Types = PS["Types"];
  var Data_Foldable = PS["Data.Foldable"];     
  var $colon$greater = function (a) {
      return function (b) {
          return new Data_Tuple.Tuple(a, b);
      };
  };
  var fromArray = function (_2520) {
      return Data_StrMap.fromList(Data_List.toList(Data_Foldable.foldableArray)(_2520));
  };
  var convert = function (_2521) {
      return Data_List.toList(Data_Foldable.foldableArray)(Prelude.map(Prelude.functorArray)(Data_List.toList(Data_Foldable.foldableArray))(_2521));
  };
  var $colon$minus$greater = function (lid) {
      return function (entry) {
          return $colon$greater(lid)({
              name: entry.name, 
              help: entry.help, 
              difficulty: entry.difficulty, 
              initial: convert(entry.initial), 
              target: convert(entry.target)
          });
      };
  };
  exports[":->"] = $colon$minus$greater;
  exports["convert"] = convert;
  exports[":>"] = $colon$greater;
  exports["fromArray"] = fromArray;;
 
})(PS["Helper"] = PS["Helper"] || {});
(function(exports) {
  // module Isomer

  exports.getIsomerInstance = (function () {
    var instances = {};

    return function(canvasId) {
      return function() {
        if (!instances.hasOwnProperty(canvasId)) {
          var canvas = document.getElementById(canvasId);
          instances[canvasId] = new Isomer(canvas);
        }
        return instances[canvasId];
      };
    };
  })();

  exports._renderBlock = function (isomer, x, y, z, dx, dy, dz, color) {
    return function() {
      isomer.add(
        new Isomer.Shape.Prism(new Isomer.Point(x, y, z), dx, dy, dz),
        color
        );
      return {};
    };
  };

  exports.clearCanvas = function (isomer) {
    return function() {
      isomer.canvas.clear();
      return {};
    };
  };

  exports._setIsomerConfig = function (isomer, scale, originX, originY) {
    return function() {
      isomer.scale = scale;
      isomer.originX = originX;
      isomer.originY = originY;
      isomer._calculateTransformation();
      return {};
    };
  };

  exports._colorFromRGB = function (r, g, b) {
    return new Isomer.Color(r, g, b);
  };
 
})(PS["Isomer"] = PS["Isomer"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Isomer"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Function = PS["Data.Function"];     
  var setIsomerConfig = Data_Function.runFn4($foreign._setIsomerConfig);
  var renderBlock = Data_Function.runFn8($foreign._renderBlock);
  var renderCube = function (isomer) {
      return function (x) {
          return function (y) {
              return function (z) {
                  return function (col) {
                      return renderBlock(isomer)(x)(y)(z)(0.9)(0.9)(0.9)(col);
                  };
              };
          };
      };
  };
  var colorFromRGB = Data_Function.runFn3($foreign._colorFromRGB);
  exports["colorFromRGB"] = colorFromRGB;
  exports["setIsomerConfig"] = setIsomerConfig;
  exports["renderCube"] = renderCube;
  exports["renderBlock"] = renderBlock;
  exports["clearCanvas"] = $foreign.clearCanvas;
  exports["getIsomerInstance"] = $foreign.getIsomerInstance;;
 
})(PS["Isomer"] = PS["Isomer"] || {});
(function(exports) {
  // module Unsafe

  exports.unsafeError = function(msg) {
      // Try to recover from this error by resetting the global state.
      if (confirm(msg + ". Clear localStorage and reload?")) {
          localStorage.clear();
          location.reload();
      }

      // Abort execution
      throw new Error(msg);
  };
 
})(PS["Unsafe"] = PS["Unsafe"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Unsafe"];
  exports["unsafeError"] = $foreign.unsafeError;;
 
})(PS["Unsafe"] = PS["Unsafe"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_List = PS["Data.List"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Traversable = PS["Data.Traversable"];
  var Types = PS["Types"];
  var Data_StrMap = PS["Data.StrMap"];
  var replaceMultiple = function (a) {
      return function (bs) {
          var replace = function (x) {
              var _2522 = Prelude["=="](Types.eqCube)(x)(a);
              if (_2522) {
                  return bs;
              };
              if (!_2522) {
                  return Data_List.singleton(x);
              };
              throw new Error("Failed pattern match at Transformer line 48, column 11 - line 48, column 56: " + [ _2522.constructor.name ]);
          };
          return Prelude.map(Data_List.functorList)(Data_List.concatMap(replace));
      };
  };
  var reject = function (f) {
      return Data_List.filter(function (_2524) {
          return !f(_2524);
      });
  };
  var mapStack = function (c) {
      return Prelude.map(Data_List.functorList)(function (_13) {
          return Data_List.snoc(_13)(c);
      });
  };
  var map2d = function (_2525) {
      return Prelude.map(Data_List.functorList)(Prelude.map(Data_List.functorList)(_2525));
  };
  var replaceSingle = function (a) {
      return function (b) {
          var replace = function (x) {
              var _2523 = Prelude["=="](Types.eqCube)(x)(a);
              if (_2523) {
                  return b;
              };
              if (!_2523) {
                  return x;
              };
              throw new Error("Failed pattern match at Transformer line 43, column 11 - line 46, column 1: " + [ _2523.constructor.name ]);
          };
          return map2d(replace);
      };
  };
  var clearEmpty = reject(Data_List["null"]);
  var mapReject = function (c) {
      return Prelude[">>>"](Prelude.semigroupoidFn)(Prelude.map(Data_List.functorList)(reject(function (_12) {
          return Prelude["=="](Types.eqCube)(_12)(c);
      })))(clearEmpty);
  };
  var allSteps = function (ts) {
      return function (initial) {
          return Data_List[":"](initial)(Data_Traversable.scanl(Data_List.traversableList)(Prelude["#"])(initial)(ts));
      };
  };
  exports["replaceMultiple"] = replaceMultiple;
  exports["replaceSingle"] = replaceSingle;
  exports["mapStack"] = mapStack;
  exports["mapReject"] = mapReject;
  exports["clearEmpty"] = clearEmpty;
  exports["allSteps"] = allSteps;
  exports["reject"] = reject;
  exports["map2d"] = map2d;;
 
})(PS["Transformer"] = PS["Transformer"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_List = PS["Data.List"];
  var Data_Maybe = PS["Data.Maybe"];
  var Helper = PS["Helper"];
  var Transformer = PS["Transformer"];
  var Types = PS["Types"];     
  var chapter0 = {
      name: "Introduction", 
      transformers: Helper.fromArray([ Helper[":>"]("replaceYbyR")({
          name: "map {Yellow}\xd4\xe5\xaa{Red}", 
          "function": Transformer.replaceSingle(Types.Yellow.value)(Types.Red.value)
      }), Helper[":>"]("stackY")({
          name: "map (stack {Yellow})", 
          "function": Prelude.map(Data_List.functorList)(function (_14) {
              return Data_List.snoc(_14)(Types.Yellow.value);
          })
      }), Helper[":>"]("replaceYbyYR")({
          name: "map {Yellow}\xd4\xe5\xaa[{Red}{Yellow}]", 
          "function": Transformer.replaceMultiple(Types.Yellow.value)(Data_List[":"](Types.Yellow.value)(Data_List[":"](Types.Red.value)(Data_List.Nil.value)))
      }), Helper[":>"]("rejectY")({
          name: "map (reject {Yellow})", 
          "function": Transformer.mapReject(Types.Yellow.value)
      }) ]), 
      levels: Helper.fromArray([ Helper[":->"]("0.1")({
          name: "Transformation", 
          help: new Data_Maybe.Just("In this game, your goal is to create a sequence of functions which\n                          transforms the colored cubes into the desired pattern (shown above).\n                          To change yellow cubes to red cubes, add the function `replaceYbyR` to your program.\n                          You can do so by clicking on the function or by dragging it to the\n                          program on the right."), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ] ], 
          target: [ [ Types.Red.value, Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Red.value, Types.Red.value ] ]
      }), Helper[":->"]("0.2")({
          name: "Rejection", 
          help: new Data_Maybe.Just("To remove all cubes of a specified color, use the <code>reject</code>\n                          function."), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ] ], 
          target: [ [ Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ] ]
      }), Helper[":->"]("0.3")({
          name: "Composition", 
          help: new Data_Maybe.Just("Most levels require a combination of two or more functions. Try to\n                          add the functions `stackY` and `rejectY` to your program. Note that\n                          you can change the order of the functions by drag and drop. Try to\n                          understand the effect of `stackY` by observing how the cubes change."), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ] ], 
          target: [ [ Types.Red.value, Types.Yellow.value ], [ Types.Red.value, Types.Yellow.value ], [ Types.Red.value, Types.Yellow.value ], [ Types.Red.value, Types.Yellow.value ], [ Types.Red.value, Types.Yellow.value ], [ Types.Red.value, Types.Yellow.value ] ]
      }), Helper[":->"]("0.4")({
          name: "Spanish flag", 
          help: new Data_Maybe.Just("Try this on your own. You need to compose three\n                          functions."), 
          difficulty: Types.Medium.value, 
          initial: [ [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Red.value ], [ Types.Red.value ], [ Types.Yellow.value, Types.Red.value ], [ Types.Yellow.value, Types.Yellow.value, Types.Red.value ] ], 
          target: [ [ Types.Red.value, Types.Yellow.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value, Types.Red.value ] ]
      }) ])
  };
  exports["chapter0"] = chapter0;;
 
})(PS["Levels.Chapter0"] = PS["Levels.Chapter0"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_List = PS["Data.List"];
  var Data_Maybe = PS["Data.Maybe"];
  var Helper = PS["Helper"];
  var Transformer = PS["Transformer"];
  var Types = PS["Types"];     
  var contains = function (__dict_Eq_0) {
      return function (x) {
          return function (xs) {
              return Data_Maybe.isJust(Data_List.elemIndex(__dict_Eq_0)(x)(xs));
          };
      };
  };
  var chapter1 = {
      name: "Chapter 1", 
      transformers: Helper.fromArray([ Helper[":>"]("mapYtoYR")({
          name: "map {Yellow}\xd4\xe5\xaa[{Red}{Yellow}]", 
          "function": Transformer.replaceMultiple(Types.Yellow.value)(Data_List[":"](Types.Yellow.value)(Data_List[":"](Types.Red.value)(Data_List.Nil.value)))
      }), Helper[":>"]("mapCtoRC")({
          name: "map {Cyan}\xd4\xe5\xaa[{Cyan}{Red}]", 
          "function": Transformer.replaceMultiple(Types.Cyan.value)(Data_List[":"](Types.Red.value)(Data_List[":"](Types.Cyan.value)(Data_List.Nil.value)))
      }), Helper[":>"]("rejectY")({
          name: "map (reject {Yellow})", 
          "function": Transformer.mapReject(Types.Yellow.value)
      }), Helper[":>"]("rejectC")({
          name: "map (reject {Cyan})", 
          "function": Transformer.mapReject(Types.Cyan.value)
      }), Helper[":>"]("filterContainsR")({
          name: "filter (contains {Red})", 
          "function": Prelude[">>>"](Prelude.semigroupoidFn)(Data_List.filter(contains(Types.eqCube)(Types.Red.value)))(Transformer.clearEmpty)
      }), Helper[":>"]("stackR")({
          name: "map (stack {Red})", 
          "function": Prelude.map(Data_List.functorList)(function (_15) {
              return Data_List.snoc(_15)(Types.Red.value);
          })
      }), Helper[":>"]("mapReverse")({
          name: "map reverse", 
          "function": Prelude.map(Data_List.functorList)(Data_List.reverse)
      }) ]), 
      levels: Helper.fromArray([ Helper[":->"]("1.1")({
          name: "Mercury", 
          help: new Data_Maybe.Just("There are some new types of functions in this chapter. We will\n                          introduce them when they are needed."), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value ], [ Types.Cyan.value, Types.Yellow.value ], [ Types.Cyan.value, Types.Cyan.value ] ], 
          target: [ [ Types.Red.value, Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value, Types.Red.value ], [ Types.Red.value, Types.Red.value, Types.Red.value ] ]
      }), Helper[":->"]("1.2")({
          name: "Venus", 
          help: new Data_Maybe.Just("The function `filterContainsR` removes colums without a red cube."), 
          difficulty: Types.Medium.value, 
          initial: [ [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value ], [ Types.Cyan.value, Types.Yellow.value ], [ Types.Cyan.value, Types.Cyan.value ] ], 
          target: [ [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Red.value ] ]
      }), Helper[":->"]("1.3")({
          name: "Earth", 
          help: new Data_Maybe.Just("You can flip each column vertically with `mapReverse`."), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Cyan.value, Types.Cyan.value, Types.Yellow.value ], [ Types.Cyan.value, Types.Red.value ], [ Types.Cyan.value, Types.Red.value ], [ Types.Cyan.value, Types.Cyan.value, Types.Yellow.value ] ], 
          target: [ [ Types.Red.value, Types.Cyan.value, Types.Cyan.value ], [ Types.Red.value, Types.Cyan.value ], [ Types.Red.value, Types.Cyan.value ], [ Types.Red.value, Types.Cyan.value, Types.Cyan.value ] ]
      }), Helper[":->"]("1.4")({
          name: "Mars", 
          help: new Data_Maybe.Just("In case you were wondering: the level names <s>have a rather deep\n                          philosophical meaning</s> are chosen randomly."), 
          difficulty: Types.Medium.value, 
          initial: [ [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Yellow.value ], [ Types.Cyan.value, Types.Yellow.value ], [ Types.Cyan.value, Types.Cyan.value ] ], 
          target: [ [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Red.value ], [ Types.Red.value, Types.Red.value ] ]
      }) ])
  };
  exports["chapter1"] = chapter1;
  exports["contains"] = contains;;
 
})(PS["Levels.Chapter1"] = PS["Levels.Chapter1"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_List = PS["Data.List"];
  var Data_Maybe = PS["Data.Maybe"];
  var Helper = PS["Helper"];
  var Transformer = PS["Transformer"];
  var Types = PS["Types"];     
  var stackEqualColumns = function (_570) {
      if (_570 instanceof Data_List.Nil) {
          return Data_List.Nil.value;
      };
      if (_570 instanceof Data_List.Cons) {
          var split = Data_List.span(function (_16) {
              return Prelude["=="](Data_List.eqList(Types.eqCube))(_16)(_570.value0);
          })(_570.value1);
          return Data_List[":"](Data_List.concat(Data_List[":"](_570.value0)(split.init)))(stackEqualColumns(split.rest));
      };
      throw new Error("Failed pattern match: " + [ _570.constructor.name ]);
  };
  var chapter2 = {
      name: "Chapter 2", 
      transformers: Helper.fromArray([ Helper[":>"]("replaceYbyB")({
          name: "map {Yellow}\xd4\xe5\xaa{Brown}", 
          "function": Transformer.replaceSingle(Types.Yellow.value)(Types.Brown.value)
      }), Helper[":>"]("replaceYbyBY")({
          name: "map {Yellow}\xd4\xe5\xaa[{Yellow}{Brown}]", 
          "function": Transformer.replaceMultiple(Types.Yellow.value)(Data_List[":"](Types.Brown.value)(Data_List[":"](Types.Yellow.value)(Data_List.Nil.value)))
      }), Helper[":>"]("replaceBbyOO")({
          name: "map {Brown}\xd4\xe5\xaa[{Orange}{Orange}]", 
          "function": Transformer.replaceMultiple(Types.Brown.value)(Data_List[":"](Types.Orange.value)(Data_List[":"](Types.Orange.value)(Data_List.Nil.value)))
      }), Helper[":>"]("rejectO")({
          name: "map (reject {Orange})", 
          "function": Transformer.mapReject(Types.Orange.value)
      }), Helper[":>"]("stackY")({
          name: "map (stack {Yellow})", 
          "function": Transformer.mapStack(Types.Yellow.value)
      }), Helper[":>"]("stackEqualColumns")({
          name: "stackEqualColumns", 
          "function": stackEqualColumns
      }) ]), 
      levels: Helper.fromArray([ Helper[":->"]("2.1")({
          name: "Bricklayer", 
          help: new Data_Maybe.Just("This chapter introduces a new function `stackEqualColumns`. It\n                          takes <i>adjacent equal columns</i> and stacks them on top of\n                          each other. Try it!"), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Brown.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Brown.value ] ], 
          target: [ [ Types.Brown.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Brown.value, Types.Brown.value, Types.Brown.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Brown.value ] ]
      }), Helper[":->"]("2.2")({
          name: "Gizeh", 
          help: new Data_Maybe.Just("You are on your own now..."), 
          difficulty: Types.Medium.value, 
          initial: [ [ Types.Brown.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Brown.value ] ], 
          target: [ [ Types.Brown.value, Types.Brown.value ], [ Types.Orange.value, Types.Brown.value, Types.Orange.value, Types.Brown.value ], [ Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Brown.value ], [ Types.Orange.value, Types.Brown.value, Types.Orange.value, Types.Brown.value ], [ Types.Brown.value, Types.Brown.value ] ]
      }), Helper[":->"]("2.3")({
          name: "Poseidon", 
          help: Data_Maybe.Nothing.value, 
          difficulty: Types.Hard.value, 
          initial: [ [ Types.Brown.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Brown.value ] ], 
          target: [ [ Types.Brown.value, Types.Brown.value ], [ Types.Brown.value ], [ Types.Brown.value, Types.Brown.value, Types.Brown.value, Types.Brown.value ], [ Types.Brown.value ], [ Types.Brown.value, Types.Brown.value ] ]
      }), Helper[":->"]("2.4")({
          name: "Bowl", 
          help: Data_Maybe.Nothing.value, 
          difficulty: Types.Hard.value, 
          initial: [ [ Types.Brown.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Brown.value ] ], 
          target: [ [ Types.Orange.value, Types.Orange.value, Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Orange.value, Types.Orange.value, Types.Orange.value ] ]
      }), Helper[":->"]("2.5")({
          name: "Stamp", 
          help: Data_Maybe.Nothing.value, 
          difficulty: Types.Hard.value, 
          initial: [ [ Types.Brown.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Orange.value ], [ Types.Orange.value ], [ Types.Brown.value ] ], 
          target: [ [ Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Yellow.value, Types.Yellow.value, Types.Yellow.value, Types.Yellow.value ], [ Types.Yellow.value ], [ Types.Yellow.value ] ]
      }) ])
  };
  exports["chapter2"] = chapter2;
  exports["stackEqualColumns"] = stackEqualColumns;;
 
})(PS["Levels.Chapter2"] = PS["Levels.Chapter2"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Int = PS["Data.Int"];
  var Data_Int_Bits = PS["Data.Int.Bits"];
  var Data_List = PS["Data.List"];
  var Data_Maybe = PS["Data.Maybe"];
  var $$Math = PS["Math"];
  var Data_StrMap = PS["Data.StrMap"];
  var Helper = PS["Helper"];
  var Transformer = PS["Transformer"];
  var Types = PS["Types"];     
  var toDigit = function (_571) {
      if (_571 instanceof Types.Orange) {
          return 0;
      };
      if (_571 instanceof Types.Brown) {
          return 1;
      };
      throw new Error("Failed pattern match at Levels.Chapter3 line 16, column 1 - line 17, column 1: " + [ _571.constructor.name ]);
  };
  var toInt = function (w) {
      return Data_Foldable.sum(Data_List.foldableList)(Prelude.semiringInt)(Data_List.zipWith(function (f) {
          return function (c) {
              return f * toDigit(c) | 0;
          };
      })(Data_List[":"](1)(Data_List[":"](2)(Data_List[":"](4)(Data_List.Nil.value))))(w));
  };
  var toCube = function (_572) {
      if (_572 === 0) {
          return Types.Orange.value;
      };
      if (_572 === 1) {
          return Types.Brown.value;
      };
      throw new Error("Failed pattern match at Levels.Chapter3 line 20, column 1 - line 21, column 1: " + [ _572.constructor.name ]);
  };
  var digits = function (n) {
      var bit = function (m) {
          var _2531 = (n & m) === m;
          if (_2531) {
              return 1;
          };
          if (!_2531) {
              return 0;
          };
          throw new Error("Failed pattern match at Levels.Chapter3 line 30, column 11 - line 32, column 1: " + [ _2531.constructor.name ]);
      };
      return Prelude.map(Prelude.functorArray)(bit)([ 1, 2, 4 ]);
  };
  var toAStack = function (num) {
      return Prelude.map(Prelude.functorArray)(toCube)(digits(num));
  };
  var toStack = function (_2532) {
      return Data_List.toList(Data_Foldable.foldableArray)(toAStack(_2532));
  };
  var mapNumbers = function (f) {
      return Prelude.map(Data_List.functorList)(Prelude[">>>"](Prelude.semigroupoidFn)(toInt)(Prelude[">>>"](Prelude.semigroupoidFn)(f)(toStack)));
  };
  var chapter3 = {
      name: "Chapter 3", 
      transformers: Helper.fromArray([ Helper[":>"]("mapAdd1")({
          name: "map (+1)", 
          "function": mapNumbers(function (_17) {
              return _17 + 1 | 0;
          })
      }), Helper[":>"]("mapSub1")({
          name: "map (-1)", 
          "function": mapNumbers(function (x) {
              return x - 1;
          })
      }), Helper[":>"]("mapMul2")({
          name: "map (\u251c\xf92)", 
          "function": mapNumbers(function (_18) {
              return _18 * 2 | 0;
          })
      }), Helper[":>"]("mapPow2")({
          name: "map (^2)", 
          "function": mapNumbers(function (x) {
              return x * x | 0;
          })
      }), Helper[":>"]("filterEven")({
          name: "filter even", 
          "function": Data_List.filter(Prelude[">>>"](Prelude.semigroupoidFn)(toInt)(Data_Int.even))
      }) ]), 
      levels: Helper.fromArray([ Helper[":->"]("3.1")({
          name: "0b0 .. 0b111", 
          help: new Data_Maybe.Just("What could be the meaning of the title <code>0b0 .. 0b111</code>? Calculate modulo eight."), 
          difficulty: Types.Medium.value, 
          initial: Prelude.map(Prelude.functorArray)(toAStack)([ 0, 1, 2, 3, 4, 5, 6, 7 ]), 
          target: Prelude.map(Prelude.functorArray)(toAStack)([ 1, 3, 5, 7, 1, 3, 5, 7 ])
      }), Helper[":->"]("3.2")({
          name: "Odd..", 
          help: Data_Maybe.Nothing.value, 
          difficulty: Types.Easy.value, 
          initial: Prelude.map(Prelude.functorArray)(toAStack)([ 0, 1, 2, 3, 4, 5, 6, 7 ]), 
          target: Prelude.map(Prelude.functorArray)(toAStack)([ 1, 3, 5, 7 ])
      }), Helper[":->"]("3.3")({
          name: "Zero", 
          help: Data_Maybe.Nothing.value, 
          difficulty: Types.Hard.value, 
          initial: Prelude.map(Prelude.functorArray)(toAStack)([ 0, 1, 2, 3, 4, 5, 6, 7 ]), 
          target: Prelude.map(Prelude.functorArray)(toAStack)([ 0, 0, 0, 0, 0, 0, 0, 0 ])
      }), Helper[":->"]("3.4")({
          name: "Don't panic", 
          help: new Data_Maybe.Just("Life, the Universe and Everything..."), 
          difficulty: Types.Hard.value, 
          initial: Prelude.map(Prelude.functorArray)(toAStack)([ 0, 1, 2, 3, 4, 5, 6, 7 ]), 
          target: Prelude.map(Prelude.functorArray)(toAStack)([ 4, 2, 4, 2, 4, 2, 4, 2 ])
      }) ])
  };
  exports["chapter3"] = chapter3;
  exports["mapNumbers"] = mapNumbers;
  exports["toStack"] = toStack;
  exports["toAStack"] = toAStack;
  exports["digits"] = digits;
  exports["toInt"] = toInt;
  exports["toCube"] = toCube;
  exports["toDigit"] = toDigit;;
 
})(PS["Levels.Chapter3"] = PS["Levels.Chapter3"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_List = PS["Data.List"];
  var Data_Maybe = PS["Data.Maybe"];
  var Helper = PS["Helper"];
  var Transformer = PS["Transformer"];
  var Types = PS["Types"];     
  var ooToC = function (_30) {
      if (_30 instanceof Data_List.Nil) {
          return Data_List.Nil.value;
      };
      if (_30 instanceof Data_List.Cons && (_30.value0 instanceof Types.Orange && (_30.value1 instanceof Data_List.Cons && _30.value1.value0 instanceof Types.Orange))) {
          return Data_List[":"](Types.Cyan.value)(ooToC(_30.value1.value1));
      };
      if (_30 instanceof Data_List.Cons) {
          return Data_List[":"](_30.value0)(ooToC(_30.value1));
      };
      throw new Error("Failed pattern match: " + [ _30.constructor.name ]);
  };
  var cxToX = function (_29) {
      if (_29 instanceof Data_List.Nil) {
          return Data_List.Nil.value;
      };
      if (_29 instanceof Data_List.Cons && (_29.value0 instanceof Types.Cyan && _29.value1 instanceof Data_List.Cons)) {
          return Data_List[":"](_29.value1.value0)(cxToX(_29.value1.value1));
      };
      if (_29 instanceof Data_List.Cons) {
          return Data_List[":"](_29.value0)(cxToX(_29.value1));
      };
      throw new Error("Failed pattern match: " + [ _29.constructor.name ]);
  };
  var chapter4 = {
      name: "Chapter 4", 
      transformers: Helper.fromArray([ Helper[":>"]("mapXtoOX")({
          name: "map {X}\xd4\xe5\xaa[{X}{Orange}]", 
          "function": Prelude.map(Data_List.functorList)(Data_List.concatMap(function (x) {
              return Data_List[":"](Types.Orange.value)(Data_List[":"](x)(Data_List.Nil.value));
          }))
      }), Helper[":>"]("mapCXtoX")({
          name: "map [{X}{Cyan}]\xd4\xe5\xaa{X}", 
          "function": Prelude.map(Data_List.functorList)(cxToX)
      }), Helper[":>"]("mapOOtoC")({
          name: "map [{Orange}{Orange}]\xd4\xe5\xaa{Cyan}", 
          "function": Prelude.map(Data_List.functorList)(ooToC)
      }), Helper[":>"]("mapCtoO")({
          name: "map {Cyan}\xd4\xe5\xaa{Orange}", 
          "function": Transformer.replaceSingle(Types.Cyan.value)(Types.Orange.value)
      }), Helper[":>"]("rejectSizeG2")({
          name: "reject (size > 2)", 
          "function": Transformer.reject(function (x) {
              return Data_List.length(x) > 2;
          })
      }) ]), 
      levels: Helper.fromArray([ Helper[":->"]("4.1")({
          name: "Brick", 
          help: new Data_Maybe.Just("This chapter introduces wildcard cubes: {X}."), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Cyan.value, Types.Orange.value ], [ Types.Cyan.value, Types.Cyan.value, Types.Orange.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Cyan.value, Types.Cyan.value, Types.Orange.value ], [ Types.Cyan.value, Types.Orange.value ] ], 
          target: [ [ Types.Cyan.value ], [ Types.Cyan.value, Types.Orange.value ], [ Types.Cyan.value ], [ Types.Cyan.value, Types.Orange.value ], [ Types.Cyan.value ] ]
      }), Helper[":->"]("4.2")({
          name: "Fort", 
          help: new Data_Maybe.Just("This is the last level ... for now. You can help to create new puzzles!\n                          Send a pull request on\n                          <a href=\"https://github.com/sharkdp/cube-composer\">Github</a>. Either way,\n                          I hope you enjoyed the game."), 
          difficulty: Types.Hard.value, 
          initial: [ [ Types.Cyan.value, Types.Orange.value ], [ Types.Cyan.value, Types.Cyan.value, Types.Orange.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Cyan.value, Types.Cyan.value, Types.Orange.value ], [ Types.Cyan.value, Types.Orange.value ] ], 
          target: [ [ Types.Orange.value, Types.Cyan.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Cyan.value ], [ Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Cyan.value ] ]
      }), Helper[":->"]("4.3")({
          name: "Okok", 
          help: new Data_Maybe.Just("Just do it."), 
          difficulty: Types.Easy.value, 
          initial: [ [ Types.Orange.value, Types.Cyan.value, Types.Orange.value, Types.Cyan.value ], [ Types.Brown.value, Types.Orange.value, Types.Cyan.value ], [ Types.Orange.value, Types.Brown.value, Types.Brown.value ], [ Types.Brown.value, Types.Orange.value, Types.Cyan.value ], [ Types.Orange.value, Types.Cyan.value, Types.Orange.value, Types.Cyan.value ] ], 
          target: [ [ Types.Orange.value, Types.Orange.value ], [ Types.Brown.value, Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Brown.value, Types.Brown.value ], [ Types.Brown.value, Types.Orange.value, Types.Orange.value ], [ Types.Orange.value, Types.Orange.value ] ]
      }) ])
  };
  exports["chapter4"] = chapter4;
  exports["ooToC"] = ooToC;
  exports["cxToX"] = cxToX;;
 
})(PS["Levels.Chapter4"] = PS["Levels.Chapter4"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_List = PS["Data.List"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_StrMap = PS["Data.StrMap"];
  var Types = PS["Types"];
  var Unsafe = PS["Unsafe"];
  var Levels_Chapter0 = PS["Levels.Chapter0"];
  var Levels_Chapter1 = PS["Levels.Chapter1"];
  var Levels_Chapter2 = PS["Levels.Chapter2"];
  var Levels_Chapter3 = PS["Levels.Chapter3"];
  var Levels_Chapter4 = PS["Levels.Chapter4"];     
  var levelTitle = function (lid) {
      return function (level) {
          return lid + (" - " + (level.name + (" (" + (Prelude.show(Types.showDifficulty)(level.difficulty) + ")"))));
      };
  };
  var getTransformerRecord = function (chapter) {
      return function (tid) {
          return Data_StrMap.lookup(tid)(chapter.transformers);
      };
  };
  var getTransformer = function (ch) {
      return function (tid) {
          return Prelude["<$>"](Data_Maybe.functorMaybe)(function (_2) {
              return _2["function"];
          })(getTransformerRecord(ch)(tid));
      };
  };
  var allChapters = Data_List[":"](Levels_Chapter0.chapter0)(Data_List[":"](Levels_Chapter1.chapter1)(Data_List[":"](Levels_Chapter2.chapter2)(Data_List[":"](Levels_Chapter3.chapter3)(Data_List[":"](Levels_Chapter4.chapter4)(Data_List.Nil.value)))));
  var allLevelIds = Prelude[">>="](Data_List.bindList)(allChapters)(Prelude[">>>"](Prelude.semigroupoidFn)(Prelude[">>>"](Prelude.semigroupoidFn)(function (_1) {
      return _1.levels;
  })(Prelude[">>>"](Prelude.semigroupoidFn)(Data_StrMap.keys)(Data_List.toList(Data_Foldable.foldableArray))))(Data_List.sort(Prelude.ordString)));
  var firstLevel = Data_Maybe.fromMaybe("")(Data_List.head(allLevelIds));
  var allLevels = Data_StrMap.unions(Prelude.map(Data_List.functorList)(function (_0) {
      return _0.levels;
  })(allChapters));
  var getLevel = function (lid) {
      var _50 = Data_StrMap.lookup(lid)(allLevels);
      if (_50 instanceof Data_Maybe.Just) {
          return _50.value0;
      };
      if (_50 instanceof Data_Maybe.Nothing) {
          return Unsafe.unsafeError("Could not find level " + Prelude.show(Prelude.showString)(lid));
      };
      throw new Error("Failed pattern match at Levels line 35, column 1 - line 36, column 1: " + [ _50.constructor.name ]);
  };
  var getChapter = function (lid) {
      var hasLevel = function (ch) {
          return Data_StrMap.member(lid)(ch.levels);
      };
      var _52 = Data_Foldable.find(Data_List.foldableList)(hasLevel)(allChapters);
      if (_52 instanceof Data_Maybe.Just) {
          return _52.value0;
      };
      if (_52 instanceof Data_Maybe.Nothing) {
          return Unsafe.unsafeError("Could not find chapter " + Prelude.show(Prelude.showString)(lid));
      };
      throw new Error("Failed pattern match at Levels line 46, column 1 - line 47, column 1: " + [ _52.constructor.name ]);
  };
  exports["getTransformer"] = getTransformer;
  exports["getTransformerRecord"] = getTransformerRecord;
  exports["getChapter"] = getChapter;
  exports["levelTitle"] = levelTitle;
  exports["getLevel"] = getLevel;
  exports["firstLevel"] = firstLevel;
  exports["allLevelIds"] = allLevelIds;
  exports["allLevels"] = allLevels;
  exports["allChapters"] = allChapters;;
 
})(PS["Levels"] = PS["Levels"] || {});
(function(exports) {
  // module Sortable

  exports.installSortable = function (el) {
    return function(sortHandler) {
      return function() {
        new Sortable(el, {
          group: 'function-lists',
          ghostClass: 'sortable-ghost',
          animation: 150,
          onSort: sortHandler
        });
      };
    };
  };
 
})(PS["Sortable"] = PS["Sortable"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Sortable"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var DOM = PS["DOM"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  exports["installSortable"] = $foreign.installSortable;;
 
})(PS["Sortable"] = PS["Sortable"] || {});
(function(exports) {
  // module Storage

  exports.unsafeLoadGameState = function (just) {
      return function(nothing) {
          return function() {
              var data = localStorage.getItem('gameState');
              if (!data) {
                  return nothing;
              }
              return just(JSON.parse(data));
          };
      };
  };

  exports.unsafeSaveGameState = function (gs) {
      return function() {
          localStorage.setItem('gameState', JSON.stringify(gs));
          return {};
      };
  };
 
})(PS["Storage"] = PS["Storage"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Storage"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_List = PS["Data.List"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_StrMap = PS["Data.StrMap"];
  var Types = PS["Types"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Data_Foldable = PS["Data.Foldable"];     
  var toSaveable = function (gs) {
      return {
          currentLevel: gs.currentLevel, 
          levelState: Prelude["<$>"](Data_StrMap.functorStrMap)(Data_List.fromList(Data_Unfoldable.unfoldableArray))(gs.levelState)
      };
  };
  var saveGameState = Prelude[">>>"](Prelude.semigroupoidFn)(toSaveable)($foreign.unsafeSaveGameState);
  var fromSaveable = function (sgs) {
      return {
          currentLevel: sgs.currentLevel, 
          levelState: Prelude["<$>"](Data_StrMap.functorStrMap)(Data_List.toList(Data_Foldable.foldableArray))(sgs.levelState)
      };
  };
  var loadGameState = Prelude["<$>"](Control_Monad_Eff.functorEff)(Prelude.map(Data_Maybe.functorMaybe)(fromSaveable))($foreign.unsafeLoadGameState(Data_Maybe.Just.create)(Data_Maybe.Nothing.value));
  exports["saveGameState"] = saveGameState;
  exports["loadGameState"] = loadGameState;
  exports["fromSaveable"] = fromSaveable;
  exports["toSaveable"] = toSaveable;;
 
})(PS["Storage"] = PS["Storage"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Prelude = PS["Prelude"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad = PS["Control.Monad"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var DOM = PS["DOM"];
  var DOM_Event_EventTypes = PS["DOM.Event.EventTypes"];
  var DOM_Event_Types = PS["DOM.Event.Types"];
  var DOM_HTML = PS["DOM.HTML"];
  var DOM_HTML_Types = PS["DOM.HTML.Types"];
  var DOM_Node_Document = PS["DOM.Node.Document"];
  var DOM_Node_Element = PS["DOM.Node.Element"];
  var DOM_Node_Node = PS["DOM.Node.Node"];
  var DOM_Node_Types = PS["DOM.Node.Types"];
  var Data_Enum = PS["Data.Enum"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Int = PS["Data.Int"];
  var Data_List = PS["Data.List"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Nullable = PS["Data.Nullable"];
  var Data_String_Regex = PS["Data.String.Regex"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_StrMap = PS["Data.StrMap"];
  var Analytics = PS["Analytics"];
  var DOMHelper = PS["DOMHelper"];
  var Isomer = PS["Isomer"];
  var Levels = PS["Levels"];
  var Sortable = PS["Sortable"];
  var Storage = PS["Storage"];
  var Transformer = PS["Transformer"];
  var Types = PS["Types"];     
  var traverseWithKey_ = function (__dict_Monad_0) {
      return function (f) {
          return function (sm) {
              return Data_StrMap.foldM(__dict_Monad_0)(Prelude["const"](f))(Prelude.unit)(sm);
          };
      };
  };
  var traverseWithIndex_ = function (__dict_Applicative_1) {
      return function (f) {
          return function (xs) {
              var go = function (_34) {
                  return function (i) {
                      if (_34 instanceof Data_List.Nil) {
                          return Prelude["return"](__dict_Applicative_1)(Prelude.unit);
                      };
                      if (_34 instanceof Data_List.Cons) {
                          return Control_Apply["*>"](__dict_Applicative_1["__superclass_Prelude.Apply_0"]())(f(i)(_34.value0))(go(_34.value1)(i + 1 | 0));
                      };
                      throw new Error("Failed pattern match at Main line 55, column 1 - line 56, column 1: " + [ _34.constructor.name, i.constructor.name ]);
                  };
              };
              return go(xs)(0);
          };
      };
  };
  var spacing = 5.5;
  var replaceAll = function (pattern) {
      return function (replacement) {
          var flags = Data_String_Regex.parseFlags("g");
          return Data_String_Regex.replace(Data_String_Regex.regex(pattern)(flags))(replacement);
      };
  };
  var replaceColors = function (s) {
      var replacement = function (c) {
          return "<div class=\"cube " + (c + "\"> </div>");
      };
      var pattern = function (c) {
          return "{" + (c + "}");
      };
      var replaceColor = function (s_1) {
          return function (c) {
              return replaceAll(pattern(c))(replacement(c))(s_1);
          };
      };
      return Data_Foldable.foldl(Data_List.foldableList)(replaceColor)(s)(Data_List[":"]("X")(Prelude.map(Data_List.functorList)(Prelude.show(Types.showCube))(Data_List.toList(Data_Foldable.foldableArray)(Data_Enum.enumFromTo(Types.enumCube)(Types.Cyan.value)(Types.Yellow.value)))));
  };
  var replaceStacks = function (_120) {
      return replaceAll("\\[")("<div class=\"stack\">")(replaceAll("\\]")("</div>")(_120));
  };
  var replaceTransformers = function (ch) {
      return function (initial) {
          var replacement = function (tr) {
              return "<span class=\"transformer\">" + (tr.name + "</span>");
          };
          var pattern = function (id) {
              return "`" + (id + "`");
          };
          var replaceT = function (text) {
              return function (id) {
                  return function (tr) {
                      return replaceAll(pattern(id))(replacement(tr))(text);
                  };
              };
          };
          return Data_StrMap.fold(replaceT)(initial)(ch.transformers);
      };
  };
  var nameToHTML = function (_121) {
      return replaceColors(replaceStacks(_121));
  };
  var initialGS = {
      currentLevel: Levels.firstLevel, 
      levelState: Data_StrMap.empty
  };
  var getCurrentIds = function (gs) {
      var _58 = Data_StrMap.lookup(gs.currentLevel)(gs.levelState);
      if (_58 instanceof Data_Maybe.Just) {
          return _58.value0;
      };
      if (_58 instanceof Data_Maybe.Nothing) {
          return Data_List.Nil.value;
      };
      throw new Error("Failed pattern match at Main line 90, column 1 - line 91, column 1: " + [ _58.constructor.name ]);
  };
  var cubeColor = function (_31) {
      if (_31 instanceof Types.Cyan) {
          return Isomer.colorFromRGB(0)(160)(176);
      };
      if (_31 instanceof Types.Brown) {
          return Isomer.colorFromRGB(106)(74)(60);
      };
      if (_31 instanceof Types.Red) {
          return Isomer.colorFromRGB(204)(51)(63);
      };
      if (_31 instanceof Types.Orange) {
          return Isomer.colorFromRGB(235)(104)(65);
      };
      if (_31 instanceof Types.Yellow) {
          return Isomer.colorFromRGB(237)(201)(81);
      };
      throw new Error("Failed pattern match at Main line 43, column 1 - line 44, column 1: " + [ _31.constructor.name ]);
  };
  var renderStack = function (isomer) {
      return function (y) {
          return function (x) {
              return function (stack) {
                  return traverseWithIndex_(Control_Monad_Eff.applicativeEff)(function (z) {
                      return Isomer.renderCube(isomer)(x)(-spacing * y)(Data_Int.toNumber(z));
                  })(Prelude.map(Data_List.functorList)(cubeColor)(stack));
              };
          };
      };
  };
  var renderWall = function (isomer) {
      return function (y) {
          return function (_32) {
              if (_32 instanceof Data_List.Nil) {
                  return Isomer.renderBlock(isomer)(1.0)(-spacing * y)(0.0)(5.0)(0.9)(0.1)(Isomer.colorFromRGB(100)(100)(100));
              };
              return traverseWithIndex_(Control_Monad_Eff.applicativeEff)(function (x) {
                  return renderStack(isomer)(y)(Data_Int.toNumber(Data_List.length(_32) - x));
              })(Data_List.reverse(_32));
          };
      };
  };
  var renderTarget = function (isomer) {
      return function (target) {
          return function __do() {
              Isomer.setIsomerConfig(isomer)(30.0)(1280.0)(550.0)();
              return renderWall(isomer)(0.0)(target)();
          };
      };
  };
  var renderWalls = function (isomer) {
      return function (walls) {
          return function __do() {
              Isomer.setIsomerConfig(isomer)(40.0)(40.0)(400.0)();
              return traverseWithIndex_(Control_Monad_Eff.applicativeEff)(function (y) {
                  return renderWall(isomer)(Data_Int.toNumber(y));
              })(walls)();
          };
      };
  };
  var appendTransformerElement = function (ul) {
      return function (id) {
          return function (t) {
              return function __do() {
                  var _15 = DOMHelper.getDocument();
                  var _14 = DOM_Node_Document.createElement("li")(_15)();
                  DOM_Node_Element.setAttribute("id")(id)(_14)();
                  DOMHelper.setInnerHTML(nameToHTML(t.name))(_14)();
                  DOM_Node_Node.appendChild(DOM_Node_Types.elementToNode(_14))(DOM_Node_Types.elementToNode(ul))();
                  return Prelude["return"](Control_Monad_Eff.applicativeEff)(Prelude.unit)();
              };
          };
      };
  };
  var appendLevelElement = function (select) {
      return function (currentId) {
          return function (lid) {
              var level = Levels.getLevel(lid);
              var chapter = Levels.getChapter(lid);
              return function __do() {
                  var _17 = DOMHelper.getDocument();
                  var _16 = DOM_Node_Document.createElement("option")(_17)();
                  DOM_Node_Element.setAttribute("value")(lid)(_16)();
                  Control_Monad.when(Control_Monad_Eff.monadEff)(Prelude["=="](Prelude.eqString)(currentId)(lid))(DOM_Node_Element.setAttribute("selected")("selected")(_16))();
                  DOM_Node_Node.setTextContent(Levels.levelTitle(lid)(level))(DOM_Node_Types.elementToNode(_16))();
                  DOM_Node_Node.appendChild(DOM_Node_Types.elementToNode(_16))(DOM_Node_Types.elementToNode(select))();
                  return Prelude["return"](Control_Monad_Eff.applicativeEff)(Prelude.unit)();
              };
          };
      };
  };
  var render = function (setupUI) {
      return function (gs) {
          return function __do() {
              var _9 = DOMHelper.getDocument();
              var _8 = Isomer.getIsomerInstance("canvas")();
              return (function () {
                  var tids = getCurrentIds(gs);
                  var level = Levels.getLevel(gs.currentLevel);
                  var chapter = Levels.getChapter(gs.currentLevel);
                  return function __do() {
                      Control_Monad.when(Control_Monad_Eff.monadEff)(setupUI)(function __do() {
                          var _7 = DOMHelper["getElementById'"]("available")(_9)();
                          if (_7 instanceof Data_Maybe.Just) {
                              var _6 = DOMHelper["getElementById'"]("program")(_9)();
                              if (_6 instanceof Data_Maybe.Just) {
                                  DOMHelper.setInnerHTML("")(_7.value0)();
                                  DOMHelper.setInnerHTML("")(_6.value0)();
                                  var unused = Data_Foldable.foldl(Data_List.foldableList)(Prelude.flip(Data_StrMap["delete"]))(chapter.transformers)(tids);
                                  var insert = function (sm) {
                                      return function (id) {
                                          var _72 = Levels.getTransformerRecord(chapter)(id);
                                          if (_72 instanceof Data_Maybe.Just) {
                                              return Data_StrMap.insert(id)(_72.value0)(sm);
                                          };
                                          if (_72 instanceof Data_Maybe.Nothing) {
                                              return sm;
                                          };
                                          throw new Error("Failed pattern match: " + [ _72.constructor.name ]);
                                      };
                                  };
                                  var active = Data_Foldable.foldl(Data_List.foldableList)(insert)(Data_StrMap.empty)(tids);
                                  traverseWithKey_(Control_Monad_Eff.monadEff)(appendTransformerElement(_7.value0))(unused)();
                                  traverseWithKey_(Control_Monad_Eff.monadEff)(appendTransformerElement(_6.value0))(active)();
                                  var installClickHandler = function (li) {
                                      return DOMHelper["addEventListener'"](DOM_Event_EventTypes.click)(clickLi(DOM_HTML_Types.htmlElementToElement(li)))(DOM_HTML_Types.htmlElementToEventTarget(li));
                                  };
                                  Prelude[">>="](Control_Monad_Eff.bindEff)(DOMHelper["children'"](_7.value0))(Data_Foldable.traverse_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableArray)(installClickHandler))();
                                  Prelude[">>="](Control_Monad_Eff.bindEff)(DOMHelper["children'"](_6.value0))(Data_Foldable.traverse_(Control_Monad_Eff.applicativeEff)(Data_Foldable.foldableArray)(installClickHandler))();
                                  return DOMHelper.withElementById("levels")(_9)(function (selectLevel) {
                                      return function __do() {
                                          DOMHelper.setInnerHTML("")(selectLevel)();
                                          return Data_Foldable.traverse_(Control_Monad_Eff.applicativeEff)(Data_List.foldableList)(appendLevelElement(selectLevel)(gs.currentLevel))(Levels.allLevelIds)();
                                      };
                                  })();
                              };
                              throw new Error("Failed pattern match: " + [ _6.constructor.name ]);
                          };
                          throw new Error("Failed pattern match: " + [ _7.constructor.name ]);
                      })();
                      var transformers = Data_List.mapMaybe(Levels.getTransformer(chapter))(tids);
                      var steps = Transformer.allSteps(transformers)(level.initial);
                      Isomer.clearCanvas(_8)();
                      renderWalls(_8)(steps)();
                      renderTarget(_8)(level.target)();
                      var solved = Data_Maybe.maybe(false)(function (_3) {
                          return Prelude["=="](Data_List.eqList(Data_List.eqList(Types.eqCube)))(_3)(level.target);
                      })(Data_List.last(steps));
                      var visibility = (function () {
                          if (solved) {
                              return "visible";
                          };
                          if (!solved) {
                              return "hidden";
                          };
                          throw new Error("Failed pattern match: " + [ solved.constructor.name ]);
                      })();
                      var cssAction = (function () {
                          if (solved) {
                              return DOMHelper.classAdd("flash");
                          };
                          if (!solved) {
                              return DOMHelper.classRemove("flash");
                          };
                          throw new Error("Failed pattern match: " + [ solved.constructor.name ]);
                      })();
                      DOMHelper.withElementById("message")(_9)(function (_122) {
                          return DOMHelper.setStyleAttribute("visibility")(visibility)(DOMHelper.unsafeElementToHTMLElement(_122));
                      })();
                      DOMHelper.withElementById("solved")(_9)(cssAction)();
                      var helpHTML = Data_Maybe.maybe("")(function (_123) {
                          return nameToHTML(replaceTransformers(chapter)(_123));
                      })(level.help);
                      DOMHelper.withElementById("help")(_9)(DOMHelper.setInnerHTML(helpHTML))();
                      Control_Monad_Eff_Console.log("Program: " + Prelude.show(Data_List.showList(Prelude.showString))(tids))();
                      Control_Monad_Eff_Console.log("Initial: " + Prelude.show(Data_List.showList(Data_List.showList(Types.showCube)))(level.initial))();
                      Control_Monad_Eff_Console.log("Steps:")();
                      Data_Foldable.traverse_(Control_Monad_Eff.applicativeEff)(Data_List.foldableList)(Control_Monad_Eff_Console.print(Data_List.showList(Data_List.showList(Types.showCube))))(steps)();
                      Control_Monad_Eff_Console.log("---")();
                      Control_Monad_Eff_Console.log("Target: " + Prelude.show(Data_List.showList(Data_List.showList(Types.showCube)))(level.target))();
                      return Control_Monad_Eff_Console.log("")();
                  };
              })()();
          };
      };
  };
  var modifyGameStateAndRender = function (setupUI) {
      return function (modifyGS) {
          return function __do() {
              var _18 = Storage.loadGameState();
              return (function () {
                  var gs = Data_Maybe.fromMaybe(initialGS)(_18);
                  var gs$prime = modifyGS(gs);
                  return function __do() {
                      render(setupUI)(gs$prime)();
                      return Storage.saveGameState(gs$prime)();
                  };
              })()();
          };
      };
  };
  var clickLi = function (liEl) {
      return function (event) {
          var modify = function (ulId) {
              return function (clicked) {
                  return function (gs) {
                      var program = getCurrentIds(gs);
                      var program$prime = (function () {
                          var _79 = Prelude["=="](Prelude.eqString)(ulId)("available");
                          if (_79) {
                              return Data_List.snoc(program)(clicked);
                          };
                          if (!_79) {
                              return Data_List.filter(function (_5) {
                                  return Prelude["/="](Prelude.eqString)(_5)(clicked);
                              })(program);
                          };
                          throw new Error("Failed pattern match at Main line 238, column 11 - line 246, column 1: " + [ _79.constructor.name ]);
                      })();
                      var _80 = {};
                      for (var _81 in gs) {
                          if (gs.hasOwnProperty(_81)) {
                              _80[_81] = gs[_81];
                          };
                      };
                      _80.levelState = Data_StrMap.insert(gs.currentLevel)(program$prime)(gs.levelState);
                      return _80;
                  };
              };
          };
          return function __do() {
              var _13 = DOMHelper.unsafeGetAttribute("id")(liEl)();
              var _12 = Prelude["<$>"](Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)(DOM_Node_Node.parentElement(DOM_Node_Types.elementToNode(liEl)))();
              if (_12 instanceof Data_Maybe.Just) {
                  var _11 = DOMHelper.unsafeGetAttribute("id")(_12.value0)();
                  return modifyGameStateAndRender(true)(modify(_11)(_13))();
              };
              throw new Error("Failed pattern match: " + [ _12.constructor.name ]);
          };
      };
  };
  var levelChangeHandler = function (selectLevel) {
      return function (_33) {
          return function __do() {
              var _19 = DOMHelper.getSelectedValue(selectLevel)();
              Analytics.analyticsLevelChanged(_19)();
              return modifyGameStateAndRender(true)(function (gs) {
                  var _87 = {};
                  for (var _88 in gs) {
                      if (gs.hasOwnProperty(_88)) {
                          _87[_88] = gs[_88];
                      };
                  };
                  _87.currentLevel = _19;
                  return _87;
              })();
          };
      };
  };
  var nextLevel = (function () {
      var next = function (cur) {
          return Data_Maybe.fromMaybe(cur)(Control_Bind["=<<"](Data_Maybe.bindMaybe)(Data_List.head)(Data_List.tail(Data_List.dropWhile(function (_4) {
              return Prelude["/="](Prelude.eqString)(_4)(cur);
          })(Levels.allLevelIds))));
      };
      var mod = function (gs) {
          var _89 = {};
          for (var _90 in gs) {
              if (gs.hasOwnProperty(_90)) {
                  _89[_90] = gs[_90];
              };
          };
          _89.currentLevel = next(gs.currentLevel);
          return _89;
      };
      return modifyGameStateAndRender(true)(mod);
  })();
  var prevLevel = (function () {
      var before = function (__copy_x) {
          return function (__copy__35) {
              var x = __copy_x;
              var _35 = __copy__35;
              tco: while (true) {
                  if (_35 instanceof Data_List.Nil) {
                      return Data_Maybe.Nothing.value;
                  };
                  if (_35 instanceof Data_List.Cons && _35.value1 instanceof Data_List.Nil) {
                      return Data_Maybe.Nothing.value;
                  };
                  if (_35 instanceof Data_List.Cons && _35.value1 instanceof Data_List.Cons) {
                      var _95 = Prelude["=="](Prelude.eqString)(x)(_35.value1.value0);
                      if (_95) {
                          return new Data_Maybe.Just(_35.value0);
                      };
                      if (!_95) {
                          var __tco_x = x;
                          var __tco__35 = Data_List[":"](_35.value1.value0)(_35.value1.value1);
                          x = __tco_x;
                          _35 = __tco__35;
                          continue tco;
                      };
                      throw new Error("Failed pattern match at Main line 194, column 1 - line 204, column 1: " + [ _95.constructor.name ]);
                  };
                  throw new Error("Failed pattern match at Main line 194, column 1 - line 204, column 1: " + [ x.constructor.name, _35.constructor.name ]);
              };
          };
      };
      var prev = function (cur) {
          return Data_Maybe.fromMaybe(cur)(before(cur)(Levels.allLevelIds));
      };
      var mod = function (gs) {
          var _100 = {};
          for (var _101 in gs) {
              if (gs.hasOwnProperty(_101)) {
                  _100[_101] = gs[_101];
              };
          };
          _100.currentLevel = prev(gs.currentLevel);
          return _100;
      };
      return modifyGameStateAndRender(true)(mod);
  })();
  var reprogramHandler = function __do() {
      var _23 = DOMHelper.getDocument();
      var _22 = DOMHelper["getElementById'"]("program")(_23)();
      if (_22 instanceof Data_Maybe.Just) {
          var _21 = DOMHelper["children'"](_22.value0)();
          return (function () {
              var getId = function (_124) {
                  return DOMHelper.unsafeGetAttribute("id")(DOM_HTML_Types.htmlElementToElement(_124));
              };
              return function __do() {
                  var _20 = Prelude["<$>"](Control_Monad_Eff.functorEff)(Data_List.toList(Data_Foldable.foldableArray))(Data_Traversable.traverse(Data_Traversable.traversableArray)(Control_Monad_Eff.applicativeEff)(getId)(_21))();
                  return modifyGameStateAndRender(false)(function (gs) {
                      var _106 = {};
                      for (var _107 in gs) {
                          if (gs.hasOwnProperty(_107)) {
                              _106[_107] = gs[_107];
                          };
                      };
                      _106.levelState = Data_StrMap.insert(gs.currentLevel)(_20)(gs.levelState);
                      return _106;
                  })();
              };
          })()();
      };
      throw new Error("Failed pattern match at Main line 300, column 1 - line 301, column 1: " + [ _22.constructor.name ]);
  };
  var resetLevel = (function () {
      var mod = function (gs) {
          var _109 = {};
          for (var _110 in gs) {
              if (gs.hasOwnProperty(_110)) {
                  _109[_110] = gs[_110];
              };
          };
          _109.levelState = Data_StrMap.insert(gs.currentLevel)(Data_List.Nil.value)(gs.levelState);
          return _109;
      };
      return modifyGameStateAndRender(true)(mod);
  })();
  var keyPress = function (event) {
      return function __do() {
          var _10 = DOMHelper.getDocument();
          return (function () {
              var kev = DOMHelper.unsafeEventToKeyboardEvent(event);
              var ctrlPressed = DOMHelper.ctrlKey(kev);
              var code = DOMHelper.keyCode(kev);
              return function __do() {
                  Control_Monad.when(Control_Monad_Eff.monadEff)(!ctrlPressed)((function () {
                      if (code === 82) {
                          return resetLevel;
                      };
                      if (code === 37) {
                          return prevLevel;
                      };
                      if (code === 80) {
                          return prevLevel;
                      };
                      if (code === 39) {
                          return nextLevel;
                      };
                      if (code === 78) {
                          return nextLevel;
                      };
                      return Prelude["return"](Control_Monad_Eff.applicativeEff)(Prelude.unit);
                  })())();
                  return Prelude["return"](Control_Monad_Eff.applicativeEff)(Prelude.unit)();
              };
          })()();
      };
  };
  var main = function __do() {
      var _28 = DOMHelper.getDocument();
      var _27 = DOMHelper["getElementById'"]("available")(_28)();
      if (_27 instanceof Data_Maybe.Just) {
          var _26 = DOMHelper["getElementById'"]("program")(_28)();
          if (_26 instanceof Data_Maybe.Just) {
              Sortable.installSortable(_27.value0)(Prelude["return"](Control_Monad_Eff.applicativeEff)(Prelude.unit))();
              Sortable.installSortable(_26.value0)(reprogramHandler)();
              var _25 = Prelude["<$>"](Control_Monad_Eff.functorEff)(DOM_HTML_Types.windowToEventTarget)(DOM_HTML.window)();
              DOMHelper["addEventListener'"](DOM_Event_EventTypes.keydown)(keyPress)(_25)();
              DOMHelper.withElementById("levels")(_28)(function (selectLevel) {
                  return DOMHelper["addEventListener'"](DOM_Event_EventTypes.change)(levelChangeHandler(selectLevel))(DOM_Node_Types.elementToEventTarget(selectLevel));
              })();
              DOMHelper.withElementById("reset")(_28)(function (button) {
                  return DOMHelper["addEventListener'"](DOM_Event_EventTypes.click)(Prelude["const"](resetLevel))(DOM_Node_Types.elementToEventTarget(button));
              })();
              DOMHelper.withElementById("nextlevel")(_28)(function (button) {
                  return DOMHelper["addEventListener'"](DOM_Event_EventTypes.click)(Prelude["const"](nextLevel))(DOM_Node_Types.elementToEventTarget(button));
              })();
              var _24 = Prelude["<$>"](Control_Monad_Eff.functorEff)(Data_Maybe.fromMaybe(initialGS))(Storage.loadGameState)();
              Storage.saveGameState(_24)();
              return render(true)(_24)();
          };
          throw new Error("Failed pattern match at Main line 313, column 1 - line 314, column 1: " + [ _26.constructor.name ]);
      };
      throw new Error("Failed pattern match at Main line 313, column 1 - line 314, column 1: " + [ _27.constructor.name ]);
  };
  exports["main"] = main;;
 
})(PS["Main"] = PS["Main"] || {});

PS["Main"].main();