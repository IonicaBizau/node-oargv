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
    }), ["--custom=Separator"])
    cb();
});

it("should support arrays and duplicate the args", function (cb) {
    Assert.deepEqual(OArgv({
        author: ["foo@bar.com", "bar@foo.com"]
    }), ["--author", "foo@bar.com", "--author", "bar@foo.com"])
    cb();
});

it("should support arrays and custom separators", function (cb) {
    Assert.deepEqual(OArgv({
        author: ["foo@bar.com", "bar@foo.com", "Bob Smith"]
      , __: "="
    }), ["--author=foo@bar.com", "--author=bar@foo.com", "--author=Bob Smith"])
    cb();
});

it("should support arrays and custom separators and exec", function (cb) {
    Assert.deepEqual(OArgv({
        author: ["foo@bar.com", "bar@foo.com", "Bob Smith"]
      , __: "="
    }, "log"), ["log", "--author=foo@bar.com", "--author=bar@foo.com", "--author=Bob Smith"])
    cb();
});

it("should support arrays and duplicate the args and then stringify the result", function (cb) {
    Assert.deepEqual(OArgv({
        author: ["foo@bar.com", "bar@foo.com", "Bob Smith"]
    }, true), "\"--author\" \"foo@bar.com\" \"--author\" \"bar@foo.com\" \"--author\" \"Bob Smith\"")
    cb();
});

it("should support arrays, stringify the result and escape args", function (cb) {
    Assert.deepEqual(OArgv({
        author: ["foo@bar.com", "bar@foo.com", "Bob Smith"]
      , __: "="
    }, true), "\"--author=foo@bar.com\" \"--author=bar@foo.com\" \"--author=Bob Smith\"")
    cb();
});

it("should support arrays with exec, stringify the result and escape args", function (cb) {
    Assert.deepEqual(OArgv({
        author: ["foo@bar.com", "bar@foo.com", "Bob Smith"]
      , __: "="
    }, "git log", true), "git log \"--author=foo@bar.com\" \"--author=bar@foo.com\" \"--author=Bob Smith\"")
    cb();
});
