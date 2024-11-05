"use strict";(self.webpackChunkYohann_Pereira=self.webpackChunkYohann_Pereira||[]).push([[221],{6947:function(e,r,t){var n=t(4705),a=t(557),o=t(1163),f=t(8007),i=t(196),u=t(978);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const p=["64px","32px","16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.15) 0px ${e} ${e} 0px`));r.A=e=>{let{item:r,overlay:t="#000",shadow:n=p,eager:l}=e;return(0,a.Y)(f.Link,{"aria-label":`Visit ${r.title} project page`,sx:e=>{var r;return s(s({},null===(r=e.styles)||void 0===r?void 0:r.a),{},{outline:"none","&:focus":{boxShadow:`${n.join(", ")}, ${(0,i.B3)(t,.5)} 0px 0px 0px 10px`},"&:hover, &:focus":{"[data-name='card-overlay']":{opacity:1}},boxShadow:n.join(", "),position:"relative"})},to:r.slug},(0,a.Y)("div",{sx:{zIndex:20,display:"flex",justifyContent:"center",alignItems:"center",opacity:0,transition:"all 0.3s ease-in-out",color:"white",backgroundColor:(0,i.B3)(t,.9),position:"absolute",top:0,left:0,right:0,bottom:0},"data-name":"card-overlay"},(0,a.Y)(o.DZ,{variant:"styles.h2",sx:{textAlign:"center",my:0,textShadow:"rgba(0, 0, 0, 0.2) 0px 2px 12px",color:"white"}},r.title)),(0,a.Y)(u.G,{style:{maxHeight:"20rem"},loading:l?"eager":"lazy",image:r.cover.childImageSharp.gatsbyImageData,alt:""}))}},196:function(e,r,t){t.d(r,{B3:function(){return Y}});var n=t(8168);var a=t(7387);function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}var f=t(3662);function i(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(i=function(){return!!e})()}function u(e){var r="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(r){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return function(e,r,t){if(i())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,r);var a=new(e.bind.apply(e,n));return t&&(0,f.A)(a,t.prototype),a}(e,arguments,o(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),(0,f.A)(t,e)},u(e)}var l=function(e){function r(r){return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+r+" for more information.")||this)}return(0,a.A)(r,e),r}(u(Error));function s(e,r){return e.substr(-r.length)===r}var p=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;function c(e){return"string"!=typeof e?e:e.match(p)?parseFloat(e):e}var d=function(e){return function(r,t){void 0===t&&(t="16px");var n=r,a=t;if("string"==typeof r){if(!s(r,"px"))throw new l(69,e,r);n=c(r)}if("string"==typeof t){if(!s(t,"px"))throw new l(70,e,t);a=c(t)}if("string"==typeof n)throw new l(71,r,e);if("string"==typeof a)throw new l(72,t,e);return""+n/a+e}};d("em");d("rem");function b(e){return Math.round(255*e)}function h(e,r,t){return b(e)+","+b(r)+","+b(t)}function g(e,r,t,n){if(void 0===n&&(n=h),0===r)return n(t,t,t);var a=(e%360+360)%360/60,o=(1-Math.abs(2*t-1))*r,f=o*(1-Math.abs(a%2-1)),i=0,u=0,l=0;a>=0&&a<1?(i=o,u=f):a>=1&&a<2?(i=f,u=o):a>=2&&a<3?(u=o,l=f):a>=3&&a<4?(u=f,l=o):a>=4&&a<5?(i=f,l=o):a>=5&&a<6&&(i=o,l=f);var s=t-o/2;return n(i+s,u+s,l+s)}var y={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var m=/^#[a-fA-F0-9]{6}$/,v=/^#[a-fA-F0-9]{8}$/,w=/^#[a-fA-F0-9]{3}$/,k=/^#[a-fA-F0-9]{4}$/,x=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,I=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,F=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,O=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function j(e){if("string"!=typeof e)throw new l(3);var r=function(e){if("string"!=typeof e)return e;var r=e.toLowerCase();return y[r]?"#"+y[r]:e}(e);if(r.match(m))return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16)};if(r.match(v)){var t=parseFloat((parseInt(""+r[7]+r[8],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16),alpha:t}}if(r.match(w))return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16)};if(r.match(k)){var n=parseFloat((parseInt(""+r[4]+r[4],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16),alpha:n}}var a=x.exec(r);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var o=I.exec(r.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var f=F.exec(r);if(f){var i="rgb("+g(parseInt(""+f[1],10),parseInt(""+f[2],10)/100,parseInt(""+f[3],10)/100)+")",u=x.exec(i);if(!u)throw new l(4,r,i);return{red:parseInt(""+u[1],10),green:parseInt(""+u[2],10),blue:parseInt(""+u[3],10)}}var s=O.exec(r.substring(0,50));if(s){var p="rgb("+g(parseInt(""+s[1],10),parseInt(""+s[2],10)/100,parseInt(""+s[3],10)/100)+")",c=x.exec(p);if(!c)throw new l(4,r,p);return{red:parseInt(""+c[1],10),green:parseInt(""+c[2],10),blue:parseInt(""+c[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])}}throw new l(5)}function A(e){return function(e){var r,t=e.red/255,n=e.green/255,a=e.blue/255,o=Math.max(t,n,a),f=Math.min(t,n,a),i=(o+f)/2;if(o===f)return void 0!==e.alpha?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var u=o-f,l=i>.5?u/(2-o-f):u/(o+f);switch(o){case t:r=(n-a)/u+(n<a?6:0);break;case n:r=(a-t)/u+2;break;default:r=(t-n)/u+4}return r*=60,void 0!==e.alpha?{hue:r,saturation:l,lightness:i,alpha:e.alpha}:{hue:r,saturation:l,lightness:i}}(j(e))}var $=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function M(e){var r=e.toString(16);return 1===r.length?"0"+r:r}function P(e){return M(Math.round(255*e))}function S(e,r,t){return $("#"+P(e)+P(r)+P(t))}function q(e,r,t){return g(e,r,t,S)}function C(e,r,t){if("number"==typeof e&&"number"==typeof r&&"number"==typeof t)return q(e,r,t);if("object"==typeof e&&void 0===r&&void 0===t)return q(e.hue,e.saturation,e.lightness);throw new l(1)}function D(e,r,t,n){if("number"==typeof e&&"number"==typeof r&&"number"==typeof t&&"number"==typeof n)return n>=1?q(e,r,t):"rgba("+g(e,r,t)+","+n+")";if("object"==typeof e&&void 0===r&&void 0===t&&void 0===n)return e.alpha>=1?q(e.hue,e.saturation,e.lightness):"rgba("+g(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new l(2)}function E(e,r,t){if("number"==typeof e&&"number"==typeof r&&"number"==typeof t)return $("#"+M(e)+M(r)+M(t));if("object"==typeof e&&void 0===r&&void 0===t)return $("#"+M(e.red)+M(e.green)+M(e.blue));throw new l(6)}function Y(e,r,t,n){if("string"==typeof e&&"number"==typeof r){var a=j(e);return"rgba("+a.red+","+a.green+","+a.blue+","+r+")"}if("number"==typeof e&&"number"==typeof r&&"number"==typeof t&&"number"==typeof n)return n>=1?E(e,r,t):"rgba("+e+","+r+","+t+","+n+")";if("object"==typeof e&&void 0===r&&void 0===t&&void 0===n)return e.alpha>=1?E(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new l(7)}function _(e){if("object"!=typeof e)throw new l(8);if(function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha}(e))return Y(e);if(function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)}(e))return E(e);if(function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha}(e))return D(e);if(function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)}(e))return C(e);throw new l(8)}function B(e,r,t){return function(){var n=t.concat(Array.prototype.slice.call(arguments));return n.length>=r?e.apply(this,n):B(e,r,n)}}function z(e){return B(e,e.length,[])}z((function(e,r){if("transparent"===r)return r;var t=A(r);return _((0,n.A)({},t,{hue:t.hue+parseFloat(e)}))}));function R(e,r,t){return Math.max(e,Math.min(r,t))}z((function(e,r){if("transparent"===r)return r;var t=A(r);return _((0,n.A)({},t,{lightness:R(0,1,t.lightness-parseFloat(e))}))}));z((function(e,r){if("transparent"===r)return r;var t=A(r);return _((0,n.A)({},t,{saturation:R(0,1,t.saturation-parseFloat(e))}))}));z((function(e,r){if("transparent"===r)return r;var t=A(r);return _((0,n.A)({},t,{lightness:R(0,1,t.lightness+parseFloat(e))}))}));var H=z((function(e,r,t){if("transparent"===r)return t;if("transparent"===t)return r;if(0===e)return t;var a=j(r),o=(0,n.A)({},a,{alpha:"number"==typeof a.alpha?a.alpha:1}),f=j(t),i=(0,n.A)({},f,{alpha:"number"==typeof f.alpha?f.alpha:1}),u=o.alpha-i.alpha,l=2*parseFloat(e)-1,s=((l*u==-1?l:l+u)/(1+l*u)+1)/2,p=1-s;return Y({red:Math.floor(o.red*s+i.red*p),green:Math.floor(o.green*s+i.green*p),blue:Math.floor(o.blue*s+i.blue*p),alpha:o.alpha*parseFloat(e)+i.alpha*(1-parseFloat(e))})}));z((function(e,r){if("transparent"===r)return r;var t=j(r),a="number"==typeof t.alpha?t.alpha:1;return Y((0,n.A)({},t,{alpha:R(0,1,(100*a+100*parseFloat(e))/100)}))}));z((function(e,r){if("transparent"===r)return r;var t=A(r);return _((0,n.A)({},t,{saturation:R(0,1,t.saturation+parseFloat(e))}))}));z((function(e,r){return"transparent"===r?r:_((0,n.A)({},A(r),{hue:parseFloat(e)}))}));z((function(e,r){return"transparent"===r?r:_((0,n.A)({},A(r),{lightness:parseFloat(e)}))}));z((function(e,r){return"transparent"===r?r:_((0,n.A)({},A(r),{saturation:parseFloat(e)}))}));z((function(e,r){return"transparent"===r?r:H(parseFloat(e),"rgb(0, 0, 0)",r)}));z((function(e,r){return"transparent"===r?r:H(parseFloat(e),"rgb(255, 255, 255)",r)}));z((function(e,r){if("transparent"===r)return r;var t=j(r),a="number"==typeof t.alpha?t.alpha:1;return Y((0,n.A)({},t,{alpha:R(0,1,+(100*a-100*parseFloat(e)).toFixed(2)/100)}))}))},454:function(e,r,t){function n(e){if(null==e)throw new TypeError("Cannot destructure "+e)}t.d(r,{A:function(){return n}})}}]);
//# sourceMappingURL=66b32394d72d6541d7619afa7e37fa582365d3ce-81a945e19bbbf97c7cfb.js.map