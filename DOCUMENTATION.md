## Documentation

You can see below the API reference of this module.

### `OArgv(options, prgm, stringify)`
Stringifies the options, building a command.

#### Params

- **Object** `options`: The options that should be stringified. If it contains the `_` field, then this should be an `Array` of strings, that representing values
that will be added at the end of the command. The `__` field is the separator (default: `" "`).
- **String** `prgm`: The program that executes the command (default: `""`).
- **Boolean** `stringify`: If `true`, the result array will be stringified (default: `false`).

#### Return
- **String|Array** The stringified arguments (if `stringify` is `true`) or the array of arguments.

