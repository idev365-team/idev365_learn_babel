var foo = "abc";
var bar = "123";
var obj = {
    ["x" + foo]: "heh",
    ["y" + bar]: "noo",
    foo: "foo",
    bar: "bar"
};  
console.log(obj)