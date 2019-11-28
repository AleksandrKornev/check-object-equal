# check-object-equal

[![NPM Version][npm-image]][npm-url]

# Example

``` js
let objectEquals = require('check-object-equal');
console.dir([
    objectEquals(
        { a : [ 2, 3 ], b : [ 4 ] },
        { a : [ 2, 3 ], b : [ 4 ] }
    ),
    objectEquals(
        { x : 5, y : [6] },
        { x : 5, y : 6 }
    )
]);
```

# methods

``` js
let objectEquals = require('check-object-equal');
```

## objectEquals(a, b)

Compare objects `a` and `b`, returning whether they are equal according to a
recursive equality algorithm.

# install

With [npm](http://npmjs.org) do:

```
npm install check-object-equal
```

# test

With [npm](http://npmjs.org) do:

```
npm test
```

## License

[MIT](LICENSE)

[npm-url]: https://npmjs.org/package/check-object-equal