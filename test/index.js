// Dependencies
var OArgv = require("../lib");

// Tests
var tests = [
    [{ r: true, _: ["target.zip", "somedir"]}, "zip"]
  , [{ d: "http://ionicabizau.net", tt: true, size: "600x800" }, "bat"]
  , [{ escaping: "She said: \"Hello World\"!" }, "foo"]
  , [{ noCommand: "foo", b: true }]
  , [{ __: "=", custom: "Separator"}, "foo"]
];

// Run tests
tests.forEach(function (c, i) {
    console.log(">> Test " + i);
    console.log("  " + JSON.stringify(c) + " ---> " + OArgv.apply(this, c));
});
