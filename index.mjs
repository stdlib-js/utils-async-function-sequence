// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.3-esm/index.mjs";function n(){var n,s,o;if((n=arguments.length)<2)throw new Error(t("1RB1Z"));for(s=[],o=0;o<n;o++)if(s.push(arguments[o]),!r(s[o]))throw new TypeError(t("1RBAj",s[o]));return function(){var r,t,o,e;for(t=arguments[r=arguments.length-1],o=[],e=0;e<r;e++)o.push(arguments[e]);o.push((function r(o,i){return o?t(o):(e+=1)===n?t(null,i):void s[e](i,r)})),e=0,s[e].apply(null,o)}}export{n as default};
//# sourceMappingURL=index.mjs.map
