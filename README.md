<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# funseqAsync

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Function sequence.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import funseqAsync from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-function-sequence@deno/mod.js';
```

#### funseqAsync( ...fcn )

Returns a pipeline function. Starting from the left, the pipeline function evaluates each function and passes the result as the first argument to the next function. The result of the rightmost function is the result of the whole.

```javascript
function a( x, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, 2*x );
    }
}

function b( x, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, x+3 );
    }
}

function c( x, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, x/5 );
    }
}

var f = funseqAsync( a, b, c );

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
    // => 3
}

f( 6, done ); // ((2*x)+3)/5
```

The last argument provided to each function is a `next` callback which accepts two arguments:

-   `error`: error argument
-   `result`: function result

**Only** the leftmost function is explicitly permitted to accept multiple arguments. All other functions are evaluated as **binary** functions.

```javascript
function a( x, y, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, (x*5) + (y*3) );
    }
}

function b( r, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, r+12 );
    }
}

var f = funseqAsync( a, b );

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
    // => 50
}

f( 4, 6, done );
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function will throw if provided fewer than `2` input arguments.
-   If a provided function calls the `next` callback with a truthy `error` argument, the pipeline function suspends execution and immediately calls the `done` callback for subsequent `error` handling.
-   Execution is **not** guaranteed to be asynchronous. To guarantee asynchrony, wrap the `done` callback in a function which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
-   The difference between this function and [`composeAsync`][@stdlib/utils/async/compose] is that this function evaluates input arguments from left-to-right, rather than right-to-left.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import funseqAsync from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-function-sequence@deno/mod.js';

function a( x, y, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, x*y );
    }
}

function b( z, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, z+5 );
    }
}

function c( r, next ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        next( null, r/10 );
    }
}

var f = funseqAsync( a, b, c );

function done( error, result ) {
    if ( error ) {
        throw error;
    }
    console.log( result );
    // => 2
}

f( 5, 3, done );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/async/compose`][@stdlib/utils/async/compose]</span><span class="delimiter">: </span><span class="description">function composition.</span>
-   <span class="package-name">[`@stdlib/utils/function-sequence`][@stdlib/utils/function-sequence]</span><span class="delimiter">: </span><span class="description">function sequence.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-async-function-sequence.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-async-function-sequence

[test-image]: https://github.com/stdlib-js/utils-async-function-sequence/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-async-function-sequence/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-async-function-sequence/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-async-function-sequence?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-async-function-sequence.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-async-function-sequence/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-async-function-sequence/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-async-function-sequence/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-async-function-sequence/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-async-function-sequence/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-async-function-sequence/main/LICENSE

[@stdlib/utils/async/compose]: https://github.com/stdlib-js/utils-async-compose/tree/deno

<!-- <related-links> -->

[@stdlib/utils/async/compose]: https://github.com/stdlib-js/utils-async-compose/tree/deno

[@stdlib/utils/function-sequence]: https://github.com/stdlib-js/utils-function-sequence/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
