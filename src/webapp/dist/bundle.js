!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=11)}([function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map(function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(a=t,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=t.sources.map(function(n){return"/*# sourceURL="+t.sourceRoot+n+" */"});return[e].concat(i).concat([o]).join("\n")}var a;return[e].join("\n")}(r,n);return r[2]?"@media "+r[2]+"{"+e+"}":e}).join("")},r.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(t[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&t[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),r.push(a))}},r}},function(n,r,e){var t,o,i={},a=(t=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=t.apply(this,arguments)),o}),s=function(n){var r={};return function(n,e){if("function"==typeof n)return n();if(void 0===r[n]){var t=function(n,r){return r?r.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}}(),d=null,c=0,l=[],p=e(4);function f(n,r){for(var e=0;e<n.length;e++){var t=n[e],o=i[t.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](t.parts[a]);for(;a<t.parts.length;a++)o.parts.push(b(t.parts[a],r))}else{var s=[];for(a=0;a<t.parts.length;a++)s.push(b(t.parts[a],r));i[t.id]={id:t.id,refs:1,parts:s}}}}function u(n,r){for(var e=[],t={},o=0;o<n.length;o++){var i=n[o],a=r.base?i[0]+r.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};t[a]?t[a].parts.push(s):e.push(t[a]={id:a,parts:[s]})}return e}function m(n,r){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var t=l[l.length-1];if("top"===n.insertAt)t?t.nextSibling?e.insertBefore(r,t.nextSibling):e.appendChild(r):e.insertBefore(r,e.firstChild),l.push(r);else if("bottom"===n.insertAt)e.appendChild(r);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,e);e.insertBefore(r,o)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var r=l.indexOf(n);r>=0&&l.splice(r,1)}function g(n){var r=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=function(){0;return e.nc}();t&&(n.attrs.nonce=t)}return v(r,n.attrs),m(n,r),r}function v(n,r){Object.keys(r).forEach(function(e){n.setAttribute(e,r[e])})}function b(n,r){var e,t,o,i;if(r.transform&&n.css){if(!(i="function"==typeof r.transform?r.transform(n.css):r.transform.default(n.css)))return function(){};n.css=i}if(r.singleton){var a=c++;e=d||(d=g(r)),t=x.bind(null,e,a,!1),o=x.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var r=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",v(r,n.attrs),m(n,r),r}(r),t=function(n,r,e){var t=e.css,o=e.sourceMap,i=void 0===r.convertToAbsoluteUrls&&o;(r.convertToAbsoluteUrls||i)&&(t=p(t));o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([t],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,r),o=function(){h(e),e.href&&URL.revokeObjectURL(e.href)}):(e=g(r),t=function(n,r){var e=r.css,t=r.media;t&&n.setAttribute("media",t);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){h(e)});return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(r=r||{}).attrs="object"==typeof r.attrs?r.attrs:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=a()),r.insertInto||(r.insertInto="head"),r.insertAt||(r.insertAt="bottom");var e=u(n,r);return f(e,r),function(n){for(var t=[],o=0;o<e.length;o++){var a=e[o];(s=i[a.id]).refs--,t.push(s)}n&&f(u(n,r),r);for(o=0;o<t.length;o++){var s;if(0===(s=t[o]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete i[s.id]}}}};var y,w=(y=[],function(n,r){return y[n]=r,y.filter(Boolean).join("\n")});function x(n,r,e,t){var o=e?"":t.css;if(n.styleSheet)n.styleSheet.cssText=w(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}},function(n,r,e){var t=e(3);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(t,o);t.locals&&(n.exports=t.locals)},function(n,r,e){(n.exports=e(0)(!1)).push([n.i,"*{\r\n  padding: 0;\r\n  margin: 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\nmain>h1{\r\n  color: #4A148C;\r\n}\r\n\r\n.header>h1,h2,h3,h4{\r\n    color: #4A148C;\r\n}\r\n\r\n\r\n.grid-container{\r\n  display: grid;\r\n  grid-template-areas:\r\n  'nav nav nav nav nav nav'\r\n  'hd hd hd hd share share'\r\n  '. main main main main .'\r\n  'dash dash dash dash dash dash'\r\n  'rost rost rost rost rost rost'\r\n  'footer footer footer footer footer footer'\r\n  ;\r\n  grid-gap: 10px;\r\n}\r\n\r\n\r\n.grid-container > div {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  text-align: center;\r\n}\r\n\r\n.test{\r\n  grid-area: nav;\r\n}\r\n\r\n/* Main sections */\r\n.top-nav{\r\n  grid-area: nav;\r\n  background: purple;\r\n  color: white;\r\n  font-weight: bolder;\r\n  padding: 2em;\r\n}\r\n\r\n.header{\r\n  grid-area: hd;\r\n  background: white;\r\n  border-radius: 2em;\r\n  padding: 1em 2em;\r\n}\r\n\r\n.social{\r\n  grid-area: share;\r\n  margin: 1px auto;\r\n  padding: 0.5em;\r\n}\r\n\r\n.main-content{\r\n  grid-area: main;\r\n  text-align: center;\r\n  margin: 3em auto;\r\n  background: white;\r\n  padding: 2em;\r\n  border-radius: 2em;\r\n}\r\n\r\n.dashboard{\r\n  grid-area: dash;\r\n  background: white;\r\n}\r\n\r\n.social-icon{\r\n  font-size: 1.5em;\r\n  color: purple;\r\n  transition: all 100ms ease-out;\r\n}\r\n\r\n.social-icon:hover{\r\n  font-size: 2em;\r\n  color: purple;\r\n}\r\n\r\n\r\n/* Roster gen form */\r\n.centered-form{\r\n  display: grid;\r\n  grid-row-gap: 1em;\r\n  margin-top: 2em;\r\n }\r\n \r\n input{\r\n   padding: 1em;\r\n   border: 0.5px solid #B0BEC5;\r\n   border-radius: 0.5em;\r\n }\r\n \r\n hr{\r\n   width: 20%;\r\n   border:1px solid deeppink;\r\n   margin: 0.5em auto;\r\n }\r\n \r\n button{\r\n  padding: 1em;\r\n  border: 1px solid purple;\r\n  background: purple;\r\n  border-radius: 0.5em;\r\n  color: white;\r\n }\r\n\r\n button:hover{\r\n   font-weight: bolder;\r\n }\r\n \r\n .fa-plus-circle{\r\n   font-size: 2em;\r\n }\r\n\r\n .fa-plus-circle:hover{\r\n   color: purple;\r\n }\r\n\r\n/* End */\r\n\r\n\r\n.roster-container{\r\n  grid-area: rost;\r\n  display: none;\r\n  margin: 2em auto;\r\n  padding: 3em;\r\n}\r\n\r\n.footer{\r\n  grid-area: footer;\r\n  margin: 5em auto;\r\n}\r\n\r\n/* ..End main sections */\r\n\r\n\r\n\r\n/* Mobile */\r\n@media only screen and(max-width:768px){\r\n  .grid-container{\r\n    grid-template-areas:\r\n    'nav nav nav nav nav nav'\r\n    'hd hd hd hd hd hd'\r\n    'share share share share share share'\r\n    'main main main main main main'\r\n    'dash dash dash dash dash dash'\r\n    'rost rost rost rost rost rost'\r\n    'footer footer footer footer footer footer'\r\n    ;\r\n    grid-gap: 5px;\r\n  }\r\n}",""])},function(n,r){n.exports=function(n){var r="undefined"!=typeof window&&window.location;if(!r)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=r.protocol+"//"+r.host,t=e+r.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,r){var o,i=r.trim().replace(/^"(.*)"$/,function(n,r){return r}).replace(/^'(.*)'$/,function(n,r){return r});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:t+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,r,e){var t=e(6);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(t,o);t.locals&&(n.exports=t.locals)},function(n,r,e){(n.exports=e(0)(!1)).push([n.i,"i{\r\n  color: #F3E5F5;\r\n}\r\n\r\n\r\n.heading {\r\n  color: #4a148c;\r\n}\r\n\r\n.mr-1 {\r\n  margin-right: 8px;\r\n}\r\n\r\n.mb-1 {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.shadow {\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.shadow-md {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\r\n}\r\n.shadow-lg {\r\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),\r\n    0 5px 15px 0 rgba(0, 0, 0, 0.08);\r\n}\r\n",""])},function(n,r,e){var t=e(8);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(t,o);t.locals&&(n.exports=t.locals)},function(n,r,e){(n.exports=e(0)(!1)).push([n.i,'.content-wrapper {\r\n  background: white;\r\n  padding: 4em;\r\n  border-radius: 4em;\r\n  text-align: center;\r\n  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;\r\n}\r\n\r\n#calender-view {\r\n  margin: 3em auto;\r\n  text-align: center;\r\n  justify-self: center;\r\n}\r\n\r\n.stepper {\r\n  margin-top: 5em;\r\n  background: white;\r\n  padding: 2.5em;\r\n  border-radius: 1.5em;\r\n  overflow-x: auto;\r\n}\r\n\r\n\r\ntable{\r\n  width: 100%;\r\n}\r\n\r\nth{\r\n  background-color: purple;\r\n  color: white;\r\n  font-weight: bolder;\r\n  padding: 0.5em;\r\n  border-radius: 2em;\r\n}\r\n\r\n td{\r\n   padding: 1.5em;\r\n   transition: all 80ms ease-in;\r\n }\r\n\r\ntr:nth-child(even) {\r\n  background-color: #F3E5F5;\r\n}\r\n\r\ntr:nth-child(odd) {\r\n  background-color: #e495e4;\r\n}\r\n\r\ntd:hover{\r\n  background: white;\r\n}\r\n\r\n/* Stepper styles */\r\n.md-stepper-horizontal {\r\n  display: table;\r\n  width: 100%;\r\n  margin: 4em auto;\r\n  background-color: #ffffff;\r\n  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.5);\r\n}\r\n.md-stepper-horizontal .md-step {\r\n  display: table-cell;\r\n  position: relative;\r\n  padding: 24px;\r\n}\r\n.md-stepper-horizontal .md-step:hover,\r\n.md-stepper-horizontal .md-step:active {\r\n  background-color: rgba(0, 0, 0, 0.04);\r\n}\r\n.md-stepper-horizontal .md-step:active {\r\n  border-radius: 15% / 75%;\r\n}\r\n.md-stepper-horizontal .md-step:first-child:active {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.md-stepper-horizontal .md-step:last-child:active {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.md-stepper-horizontal .md-step:hover .md-step-circle {\r\n  background-color: #757575;\r\n}\r\n.md-stepper-horizontal .md-step:first-child .md-step-bar-left,\r\n.md-stepper-horizontal .md-step:last-child .md-step-bar-right {\r\n  display: none;\r\n}\r\n.md-stepper-horizontal .md-step .md-step-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 0 auto;\r\n  background-color: #999999;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: #ffffff;\r\n}\r\n.md-stepper-horizontal.green .md-step.active .md-step-circle {\r\n  background-color: #00ae4d;\r\n}\r\n.md-stepper-horizontal.orange .md-step.active .md-step-circle {\r\n  background-color: #f96302;\r\n}\r\n.md-stepper-horizontal .md-step.active .md-step-circle {\r\n  background-color: rgb(33, 150, 243);\r\n}\r\n.md-stepper-horizontal .md-step.done .md-step-circle:before {\r\n  font-family: "FontAwesome";\r\n  font-weight: 100;\r\n  content: "\\f00c";\r\n}\r\n.md-stepper-horizontal .md-step.done .md-step-circle *,\r\n.md-stepper-horizontal .md-step.editable .md-step-circle * {\r\n  display: none;\r\n}\r\n.md-stepper-horizontal .md-step.editable .md-step-circle {\r\n  -moz-transform: scaleX(-1);\r\n  -o-transform: scaleX(-1);\r\n  -webkit-transform: scaleX(-1);\r\n  transform: scaleX(-1);\r\n}\r\n.md-stepper-horizontal .md-step.editable .md-step-circle:before {\r\n  font-family: "FontAwesome";\r\n  font-weight: 100;\r\n  content: "\\f040";\r\n}\r\n.md-stepper-horizontal .md-step .md-step-title {\r\n  margin-top: 16px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n}\r\n.md-stepper-horizontal .md-step .md-step-title,\r\n.md-stepper-horizontal .md-step .md-step-optional {\r\n  text-align: center;\r\n  color: rgba(0, 0, 0, 0.26);\r\n}\r\n.md-stepper-horizontal .md-step.active .md-step-title {\r\n  font-weight: 600;\r\n  color: rgba(0, 0, 0, 0.87);\r\n}\r\n.md-stepper-horizontal .md-step.active.done .md-step-title,\r\n.md-stepper-horizontal .md-step.active.editable .md-step-title {\r\n  font-weight: 600;\r\n}\r\n.md-stepper-horizontal .md-step .md-step-optional {\r\n  font-size: 12px;\r\n}\r\n.md-stepper-horizontal .md-step.active .md-step-optional {\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n.md-stepper-horizontal .md-step .md-step-bar-left,\r\n.md-stepper-horizontal .md-step .md-step-bar-right {\r\n  position: absolute;\r\n  top: 36px;\r\n  height: 1px;\r\n  border-top: 1px solid #dddddd;\r\n}\r\n.md-stepper-horizontal .md-step .md-step-bar-right {\r\n  right: 0;\r\n  left: 50%;\r\n  margin-left: 20px;\r\n}\r\n.md-stepper-horizontal .md-step .md-step-bar-left {\r\n  left: 0;\r\n  right: 50%;\r\n  margin-right: 20px;\r\n}\r\n\r\n/* End stepper styles */\r\n',""])},function(n,r,e){var t=e(10);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(t,o);t.locals&&(n.exports=t.locals)},function(n,r,e){(n.exports=e(0)(!1)).push([n.i,"#staff-input-div>input, #section-input-div>input{\r\n    margin: 0.3em 0.5em;\r\n}\r\n\r\n#form-err-msg{\r\n    color: red;\r\n    margin: 2.5em auto;\r\n    font-size: 0.8em;\r\n    font-weight: bolder;\r\n}",""])},function(n,r,e){"use strict";e.r(r);e(2);e(5);e(7);const t=n=>{console.log(`Roster ${typeof n} model: ${n.data}`);const r=new Date,e=n.rawInputs.staff,t=o(n.data,e);return`\n    <article class="content-wrapper">\n        <h1 class="heading mb-1" onclick="createStepper()">Your ${n.rawInputs.span} day roster</h1>\n        <section id="daily-view">\n            Starting from today : ${r}\n        </section>\n\n        <section id="calender-view">\n            <table id="shedule-table">\n                <tr>\n                <th>Day</th>\n                <th>CASUALTY</th>\n                <th>MATERNITY</th>\n                <th>WARDS</th></tr>\n                ${t}\n            </table>\n            \n        </section>\n        <button class="btn-primary" id="export_to_pdf">Export to pdf</button>\n        <button class="btn-outline-primary" id="create-another">Create new roster</button>\n    </article>\n\n    <div class="stepper shadow-md">\n    <setion>\n        <h4 class="heading">Detailed View - <small>Mr ....</small></h4>\n    </section>\n\n    \x3c!--Begin stepper--\x3e\n    <div class="md-stepper-horizontal orange">\n      <div class="md-step active done">\n        <div class="md-step-circle"><span>1</span></div>\n        <div class="md-step-title">Day ..</div>\n        <div class="md-step-bar-left"></div>\n        <div class="md-step-bar-right"></div>\n      </div>\n      <div class="md-step active editable">\n        <div class="md-step-circle"><span>2</span></div>\n        <div class="md-step-title">Day ..</div>\n        <div class="md-step-optional">Optional</div>\n        <div class="md-step-bar-left"></div>\n        <div class="md-step-bar-right"></div>\n      </div>\n      <div class="md-step active">\n        <div class="md-step-circle"><span>3</span></div>\n        <div class="md-step-title">Day ..</div>\n        <div class="md-step-bar-left"></div>\n        <div class="md-step-bar-right"></div>\n      </div>\n      <div class="md-step">\n        <div class="md-step-circle"><span>4</span></div>\n        <div class="md-step-title">Day ..</div>\n        <div class="md-step-bar-left"></div>\n        <div class="md-step-bar-right"></div>\n      </div>\n    </div>\n    \x3c!--End stepper--\x3e\n    </div>\n    `},o=(n,r)=>{let e="";for(let t in n){e+=`\n        <tr>\n            <td>${i(parseInt(t))}</td>\n            <td>${r[n[t][0]]}</td>\n            <td>${r[n[t][1]]}</td>\n            <td>${r[n[t][2]]}</td>\n        </tr>\n        `}return e};function i(n){const r=new Date;return r.setDate(r.getDate()+n),r.toDateString()}const a=n=>(console.log("Rost controller data",n),function(n){try{console.log("Received from parent: ",n);const r=t(n);return r}catch(n){return alert(n),null}}(n));e(9);const s=()=>'\n    <main>\n    <h1>Getting started</h1>\n    <small>\n        Simply fill in the required fields \n        below to generate your new roster.\n    </small>\n    <form class="centered-form" id="roster-form-container" onsubmit="event.preventDefault();" novalidate>\n        <input class="span" type="text" placeholder="Rooste span in days" id="span" name="span" required/>\n        <hr>\n\n        <section id="staff-input-div">\n        <input class="staff-input" placeholder="Name of staff memeber" id="staff1" required/>\n        <input class="staff-input" placeholder="Name of staff member" id="staff2" required/>\n        <input class="staff-input" placeholder="Name of staff member" id="staff3" required/>\n        </section>\n        <i id="staff-input-add" class="fas fa-plus-circle"></i>\n        <hr>\n\n        <section id="section-input-div">\n        <input class="section-input" placeholder="Name of work section e.g. Packaging" id="section1" required/>\n        <input class="section-input" placeholder="Name of work section e.g. Operations" id="section2" required/>\n        </section>\n        <i  id="section-input-add" class="fas fa-plus-circle"></i>\n        <button type="submit" id="generate-rooster">Generate roster</button>\n\n        <small id="form-err-msg"></small>\n    </form>\n    </main>\n        ';class d{constructor(){}render(){return s()}}function c(){document.getElementById("staff-input-add").addEventListener("click",()=>{p("staff-input-div","staff-input")}),document.getElementById("section-input-add").addEventListener("click",()=>{p("section-input-div","section-input")})}function l(n){const r=document.getElementsByClassName(n);return Array.from(r)}function p(n,r){const e=l(r).length,t=document.getElementById(n),o=document.createElement("INPUT");o.setAttribute("placeholder",function(n){return"section-input"==n?"Name of work section":"Name of staff memeber"}(r)),o.setAttribute("class",r),"section-input"==r?o.setAttribute("id",`section${e+1}`):o.setAttribute("id",`staff${e+1}`),t.appendChild(o)}"loading"!==document.readyState?c():document.addEventListener("DOMContentLoaded",function(){c()});function f(n){const r={};for(let e in n)r[parseInt(e)+1]=n[e];return r}function u(){const n=document.getElementById("main-content"),r=document.getElementById("roster-container");document.getElementById("generate-rooster").addEventListener("click",async()=>{const e=function(){const n=document.getElementById("span").value,r=l("section-input"),e=l("staff-input");return{spanIndays:n,sections:r.map(n=>n.value),staff:e.map(n=>n.value)}}();if(function(n){return null==n||""==n||0===Number(n)}(e.spanIndays)||0===e.sections.length||0==e.staff.length)return document.getElementById("form-err-msg").innerText="You need to fill in all fields.",null;(function(n,r,e){const t=new XMLHttpRequest,o=`${n}?${function(n){let r="";for(let e in n)r+=`${e}=${n[e]}&`;return r.slice(0,-1)}(r)}`;return console.log("AWS lambda service caller - Check url: ",o),t.open("GET",o),t.send(),new Promise((n,r)=>{t.onreadystatechange=function(){if(200==this.status){const r=JSON.parse(t.responseText);console.log("Remote Api response: ",r),n(r)}else r(`Sever error: Data not available at this moment. ${t.response}`)}})})("https://3ttpf1otke.execute-api.us-west-2.amazonaws.com/qa/rota_geb_roster_api",{span:e.spanIndays,sections:e.sections.length,staff:e.staff.length}).then(t=>{!function(n,r){console.log("render roster called with: ",n);const e=f(r.staff),t=f(r.sections);document.getElementById("roster-container").innerHTML+=a({data:n,rawInputs:{span:parseInt(r.spanIndays),staff:e,sections:t}});const o=document.getElementById("main-content"),i=document.getElementById("roster-container");document.getElementById("export_to_pdf").addEventListener("click",()=>{alert("Starting pdf export...")}),document.getElementById("create-another").addEventListener("click",()=>{o.style.display="initial",i.style.display="none"})}(t,e),n.style.display="none",r.style.display="initial"}).catch(n=>alert(n))}),document.querySelectorAll("#shedule-table td").forEach(n=>n.addEventListener("click",function(n){alert(`Clicked: ${n.target.innerHTML}`)}))}(()=>{const n=document.querySelector("#root");try{n.innerHTML='\n    <div class="grid-container">\n        <section class="top-nav">\n            <h1>Rota App</h1>\n        </section>\n\n        <section class="header shadow-lg">\n            <p>\n            <h2>What is rota?</h2>\n            <span>\n              Rota is a simple web app that \n              helps you create fair rosters\n              within a few seconds.\n            </p>\n        </section>\n\n        <section class="social">\n            <small>Share</small>\n            <br>\n            <i class="fab fa-twitter social-icon mr-1"></i>\n            <i class="fab fa-facebook social-icon mr-1"></i>\n            <i class="fab fa-linkedin social-icon"></i>\n        </section>\n\n\n        <section id="main-content" class="main-content shadow-md">\n        ....\n        </section>\n\n        <section id="roster-container" class="roster-container shadow-md">\n        </section>\n\n        <section class="footer">\n            &copy <a href="https:/twitter.com/Banzyme2">Peculia.dev</a>\n        </section>\n\n\n    </div>\n    '}catch(n){console.error("Failed to initialise app: ",n)}const r=new d;document.getElementById("main-content").innerHTML+=r.render()})(),"loading"!==document.readyState?u():document.addEventListener("DOMContentLoaded",function(){u()})}]);