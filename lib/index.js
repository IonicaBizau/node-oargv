// Dependencies
var Ul = require("ul")
  , IterateObject = require("iterate-object")
  ;

/**
 * OArgv
 * Stringifies the options, building a command.
 *
 * @name OArgv
 * @function
 * @param {Object} options The options that should be stringified. If it contains
 * the `_` field, then this should be an `Array` of strings, that representing values
 * that will be added at the end of the command. The `__` field is the separator (default: `" "`).
 * @param {String} prgm The program that executes the command (default: `""`).
 * @param {Boolean} stringify If `true`, the result array will be stringified (default: `false`).
 * @return {String|Array} The stringified arguments (if `stringify` is `true`) or the array of arguments.
 */
var OArgv = module.exports = function (options, prgm, stringify) {

    // Variables
    var sOpts = []
      , c = null
      , escape = JSON.stringify
      ;

    // Defaults
    prgm = prgm || "";
    options = Ul.merge(options, {
        _: []
      , __: OArgv.separator
    });

    if (typeof options._ === "string") {
        options._ = [options._];
    }

    // Options
    IterateObject(options, function (c, k) {
        if (k === "_" || k === "__") { return; }
        var cArg = (k.length === 1 ? "-" : "--") + k;
        if (typeof c === "string") {
            if (options.__ !== " ") {
                cArg += options.__ + escape(c);
                sOpts.push(cArg);
            } else {
                sOpts.push(cArg, c);
            }
        } else {
            sOpts.push(cArg);
        }
    });


    if (stringify) {
        return (prgm ? prgm + " " : "") + sOpts.map(function (c) {
            return escape(c);
        }).join(" ") + (options._.length ? " " + options._.map(function (c) {
            return escape(c);
        }).join(" ") : "");
    } else {
        sOpts = sOpts.concat(options._);
        return sOpts;
    }
};

// Defaults
OArgv.separator = " ";
