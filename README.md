<!---------------------------------------------------------------------------->
<!-- STOP, LOOK & LISTEN!                                                   -->
<!-- ====================                                                   -->
<!-- Do NOT edit this file directly since it's generated from a template    -->
<!-- file, using https://github.com/IonicaBizau/node-blah                   -->
<!--                                                                        -->
<!-- If you found a typo in documentation, fix it in the source files       -->
<!-- (`lib/*.js`) and make a pull request.                                  -->
<!--                                                                        -->
<!-- If you have any other ideas, open an issue.                            -->
<!--                                                                        -->
<!-- Please consider reading the contribution steps (CONTRIBUTING.md).      -->
<!-- * * * Thanks! * * *                                                    -->
<!---------------------------------------------------------------------------->

![oargv](http://i.imgur.com/TgmKSGy.png)

# oargv [![Donate now][donate-now]][paypal-donations]

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
}, "zip"));
// => zip -r "target.zip" "somedir"

console.log(OArgv({
    d: "http://ionicabizau.net"
  , tt: true
  , size: "600x800"
}, "bat"));
// => bat -d "http://ionicabizau.net" --tt --size "600x800"

console.log(OArgv({
    escaping: "She said: \"Hello World\"!"
}, "foo"));
// => foo --escaping "She said: \"Hello World\"!"

console.log(OArgv({
    noCommand: "foo",
    b: true
}));
// => --noCommand "foo" -b

console.log(OArgv({
    __: "=",
    custom: "Separator"
}, "foo"));
// => foo --custom="Separator"

```

## Documentation

### `OArgv(options, prgm)`
Stringifies the options, building a command.

#### Params
- **Object** `options`: The options that should be stringified. If it contains the `_` field, then this should be an `Array` of strings, that representing values
that will be added at the end of the command. The `__` field is the separator (default: `" "`).
- **String** `prgm`: The program that executes the command (default: `""`).

#### Return
- **String** The stringified arguments.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## License
[KINDLY][license] © [Ionică Bizău][website]–The [LICENSE](/LICENSE) file contains
a copy of the license.

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015
[contributing]: /CONTRIBUTING.md
[website]: http://ionicabizau.net
[docs]: /DOCUMENTATION.md
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MG98D7NPFZ3MG
[donate-now]: http://i.imgur.com/jioicaN.png