"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=m(function(x,l){"use strict";var p=require("@stdlib/assert-is-function"),v=require("@stdlib/string-format");function h(){var e,r,t;if(e=arguments.length,e<2)throw new Error("insufficient arguments. Must provide multiple functions to execute sequentially.");for(r=[],t=0;t<e;t++)if(r.push(arguments[t]),!p(r[t]))throw new TypeError(v("invalid argument. All arguments must be functions. Value: `%s`.",r[t]));return g;function g(){var i,s,u,n;for(i=arguments.length-1,s=arguments[i],u=[],n=0;n<i;n++)u.push(arguments[n]);u.push(a),n=0,r[n].apply(null,u);function a(o,f){if(o)return s(o);if(n+=1,n===e)return s(null,f);r[n](f,a)}}}l.exports=h});var q=c();module.exports=q;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
