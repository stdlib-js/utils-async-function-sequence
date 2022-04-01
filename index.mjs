// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var r=t,e=n;var i=function(){var t,n,i;if((t=arguments.length)<2)throw new Error("insufficient input arguments. Must provide multiple functions to execute sequentially.");for(n=new Array(t),i=0;i<t;i++)if(n[i]=arguments[i],!r(n[i]))throw new TypeError(e("invalid argument. All arguments must be functions. Value: `%s`.",n[i]));return s;function s(){var r,e,i;for(r=arguments[arguments.length-1],e=new Array(arguments.length-1),i=0;i<e.length;i++)e[i]=arguments[i];function s(e,u){return e?r(e):(i+=1)===t?r(null,u):void n[i](u,s)}e.push(s),n[i=0].apply(null,e)}};export{i as default};
//# sourceMappingURL=index.mjs.map
