!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){var n,r,o,u,i,a,c=(a={},{update:function(){i=a[32],n=a[38],r=a[37],o=a[39],u=a[40]},init:function(){window.addEventListener("keydown",(function(t){a[t.keyCode]=!0}),!1),window.addEventListener("keyup",(function(t){a[t.keyCode]=!1}),!1)},UP:function(){return n},LEFT:function(){return r},RIGHT:function(){return o},DOWN:function(){return u},SPACE:function(){return i}});c.init();function d(){var t;document.getElementById("canvas").getContext("2d");return t=function(t,e){var n=document.getElementById("canvas").getContext("2d"),r={x:t,y:e},o=(t=r.x,e=r.y,0),u=0;return{draw:function(){n.save(),n.translate(t,e),n.rotate(o*Math.PI/180),n.beginPath(),n.arc(0,-20,5,0,2*Math.PI),n.stroke(),n.beginPath(),n.arc(0,0,20,0,2*Math.PI),n.restore()},update:function(){c.LEFT()&&(o<=0?o=0:o-=1*u),c.RIGHT()&&(o>=360?o=360:o+=1*u),c.DOWN()&&u--,c.UP()&&u++}}}(100,100),{draw:function(){t.draw()},update:function(){t.update()}}}window.onload=function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),n=d();!function r(){window.requestAnimationFrame(r),e.clearRect(0,0,t.width,t.height),e.rect(0,0,300,300),e.stroke(),c.update(),n.update(),n.draw()}()}}]);
//# sourceMappingURL=main.js.map