// Dependencies
var OArgv = require("../lib");

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
