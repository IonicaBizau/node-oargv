
[![oargv](http://i.imgur.com/TgmKSGy.png)](#)

# oargv

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Travis](https://img.shields.io/travis/IonicaBizau/node-oargv.svg)](https://travis-ci.org/IonicaBizau/node-oargv/) [![Version](https://img.shields.io/npm/v/oargv.svg)](https://www.npmjs.com/package/oargv) [![Downloads](https://img.shields.io/npm/dt/oargv.svg)](https://www.npmjs.com/package/oargv) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Turns an object into a bash command.

## :cloud: Installation

```sh
$ npm i --save oargv
```


## :clipboard: Example



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

## :memo: Documentation


### `OArgv(options, prgm, stringify)`
Stringifies the options, building a command.

#### Params
- **Object** `options`: The options that should be stringified. If it contains the `_` field, then this should be an `Array` of strings, that representing values
that will be added at the end of the command. The `__` field is the separator (default: `" "`).
- **String** `prgm`: The program that executes the command (default: `""`).
- **Boolean** `stringify`: If `true`, the result array will be stringified (default: `false`).

#### Return
- **String|Array** The stringified arguments (if `stringify` is `true`) or the array of arguments.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`babel-it`](https://github.com/IonicaBizau/babel-it#readme)—Babelify your code before `npm publish`.
 - [`batjs`](https://github.com/IonicaBizau/batjs)—This is the NodeJS bridge for BAT -- A minimalist tool for building native desktop applications using WEB technologies.
 - [`bloggify`](https://github.com/Bloggify/bloggify-tools)—A set of tools for Bloggify administration.
 - [`cdnjs-importer`](https://github.com/cdnjs/cdnjs-importer)—Easy way to import a library into CDNJS.
 - [`cobol`](https://github.com/IonicaBizau/node-cobol)—COBOL bridge for NodeJS which allows you to run COBOL code from NodeJS.
 - [`electroner`](https://github.com/IonicaBizau/electroner#readme)—Start ElectronJS apps from Node.js.
 - [`engine-tools`](https://github.com/jillix/engine-tools) (by jillix)—Engine Tools library and CLI app.
 - [`fortran`](https://github.com/IonicaBizau/node-fortran)—Fortran bridge for Node.js which allows you to run Fortran code from Node.js.
 - [`git-package-json`](https://github.com/IonicaBizau/git-package-json#readme)—Get the package.json contents from git repositories.
 - [`git-stats-importer`](https://github.com/IonicaBizau/git-stats-importer)—Imports your commits from a repository into git-stats history.
 - [`git-status`](https://github.com/IonicaBizau/git-status#readme)—A git-status wrapper.
 - [`gpm`](https://github.com/IonicaBizau/gpm)—npm + git = gpm - Install NPM packages and dependencies from git repositories.
 - [`initial-commit-date`](https://github.com/IonicaBizau/initial-commit-date#readme)—Get the initial commit date of a git repository.
 - [`share-term`](https://github.com/Share-Term/share-term#readme)—Share the terminal with your friends.
 - [`spawn-npm`](https://github.com/IonicaBizau/spawn-npm#readme)—Run npm commands by creating child processes.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
