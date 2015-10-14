// Dependencies
var OArgv = require("../lib")
  , Assert = require("assert")
  ;

it("should support commands and args and stringify the result", function (cb) {
    Assert.equal(OArgv({
        r: true
      , _: ["target.zip", "somedir"]
    }, "zip", true), "zip \"-r\" \"target.zip\" \"somedir\"");
    cb();
});

it("should support boolean args and stringify the result", function (cb) {
    Assert.equal(OArgv({
        d: "http://ionicabizau.net"
      , tt: true
      , size: "600x800"
    }, "bat", true), "bat \"-d\" \"http://ionicabizau.net\" \"--tt\" \"--size\" \"600x800\"");
    cb();
});

it("should escape arguments", function (cb) {
    Assert.equal(OArgv({
        escaping: "She said: \"Hello World\"!"
    }, "foo", true), "foo \"--escaping\" \"She said: \\\"Hello World\\\"!\"");
    cb();
});

it("should work without commands", function (cb) {
    Assert.deepEqual(OArgv({
        noCommand: "foo",
        b: true
    }), ["--noCommand", "foo", "-b"]);
    cb();
});

it("should support custom separators", function (cb) {
    Assert.deepEqual(OArgv({
        __: "=",
        custom: "Separator"
    }), ["--custom=\"Separator\""])
    cb();
});
