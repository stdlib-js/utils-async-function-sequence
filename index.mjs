// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function e(){var e,n,i;if((e=arguments.length)<2)throw new Error("insufficient arguments. Must provide multiple functions to execute sequentially.");for(n=new Array(e),i=0;i<e;i++)if(n[i]=arguments[i],!t(n[i]))throw new TypeError(r("0iRBQ",n[i]));return s;function s(){var t,r,i;for(t=arguments[arguments.length-1],r=new Array(arguments.length-1),i=0;i<r.length;i++)r[i]=arguments[i];function s(r,o){return r?t(r):(i+=1)===e?t(null,o):void n[i](o,s)}r.push(s),n[i=0].apply(null,r)}}export{e as default};
//# sourceMappingURL=index.mjs.map
