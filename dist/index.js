"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=m(function(y,o){"use strict";var c=require("@stdlib/assert-is-function"),v=require("@stdlib/string-format");function p(){var e,r,t;if(e=arguments.length,e<2)throw new Error("insufficient arguments. Must provide multiple functions to execute sequentially.");for(r=new Array(e),t=0;t<e;t++)if(r[t]=arguments[t],!c(r[t]))throw new TypeError(v("invalid argument. All arguments must be functions. Value: `%s`.",r[t]));return g;function g(){var i,u,n;for(i=arguments[arguments.length-1],u=new Array(arguments.length-1),n=0;n<u.length;n++)u[n]=arguments[n];u.push(a),n=0,r[n].apply(null,u);function a(s,l){if(s)return i(s);if(n+=1,n===e)return i(null,l);r[n](l,a)}}}o.exports=p});var h=f();module.exports=h;
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
