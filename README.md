![](http://i.imgur.com/TgmKSGy.png)

# oargv
Turns an object into a bash command.

## Installation

```sh
$ npm install oargv
```

## Example

```js
// Dependencies
var OArgv = require("../lib");

// Output
console.log(OArgv({
    r: true
  , _: ["foo.zip", "foo"]
}, "zip"));
```

Output: `zip "foo.zip" "foo"`

## Documentation
### `OArgv(options, prgm)`
Stringifies the options, building a command.

#### Params
- **Object** `options`: The options that should be stringified. If it contains the `_` field, then this should be an `Array` of strings, that representing values
that will be added at the end of the command.
- **String** `prgm`: The program that executes the command (default: `""`).

#### Return
- **String** The stringified arguments.

## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
