[![oargv](http://i.imgur.com/TgmKSGy.png)](#)

# oargv [![Support this project][donate-now]][paypal-donations]

Turns an object into a bash command.

## Installation

```sh
$ npm i oargv
```

## Example

```js
// Dependencies
var OArgv = require("oargv");

console.log(OArgv({
    r: true
  , _: ["target.zip", "somedir"]
}, "zip", true));
// => zip "-r" "target.zip" "somedir"

console.log(OArgv({
    d: "http://ionicabizau.net"
  , tt: true
  , size: "600x800"
}, "bat", true));
// => bat "-d" "http://ionicabizau.net" "--tt" "--size" "600x800"

console.log(OArgv({
    escaping: "She said: \"Hello World\"!"
}, "foo", true));
// => foo "--escaping" "She said: \"Hello World\"!"

console.log(OArgv({
    noCommand: "foo"
  , b: true
}));
// => [ '--noCommand', 'foo', '-b' ]

console.log(OArgv({
    __: "="
  , custom: "Separator"
}, "foo"));
// => [ 'foo', '--custom=Separator' ]

console.log(OArgv({
    author: ["foo@bar.com", "bar@foo.com"]
}));
// => [ '--author', 'foo@bar.com', '--author', 'bar@foo.com' ]

console.log(OArgv({
    author: ["foo@bar.com", "bar@foo.com"]
}, true));
// => "--author" "foo@bar.com" "--author" "bar@foo.com"

console.log(OArgv({
    author: ["foo@bar.com", "bar@foo.com"]
  , __: "="
}, true));
// => "--author=foo@bar.com" "--author=bar@foo.com"
```

## Documentation

### `OArgv(options, prgm, stringify)`
Stringifies the options, building a command.

#### Params
- **Object** `options`: The options that should be stringified. If it contains the `_` field, then this should be an `Array` of strings, that representing values
that will be added at the end of the command. The `__` field is the separator (default: `" "`).
- **String** `prgm`: The program that executes the command (default: `""`).
- **Boolean** `stringify`: If `true`, the result array will be stringified (default: `false`).

#### Return
- **String|Array** The stringified arguments (if `stringify` is `true`) or the array of arguments.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`batjs`](https://github.com/IonicaBizau/bat)

 - [`bloggify`](https://github.com/Bloggify/bloggify-tools)

 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)

 - [`cobol`](https://github.com/IonicaBizau/node-cobol)

 - [`electroner`](https://github.com/IonicaBizau/electroner#readme)

 - [`engine-tools`](https://github.com/jillix/engine-tools) by jillix

 - [`git-stats-importer`](https://github.com/IonicaBizau/git-stats-importer)

 - [`gpm`](https://github.com/IonicaBizau/node-gpm)

 - [`share-term`](https://github.com/Share-Term/share-term#readme)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md