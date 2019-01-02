const code =`
    var foo = {
        // changed
        "bar": function () {},
        "1": function () {},
    
        // not changed
        "default": 1,
        [a]: 2,
        foo: 1
    };
`

const result = require("@babel/core").transform(code, {
    plugins: ["babel-plugin-transform-property-literals"]
});

console.log(code)
console.log("========================================")
console.log(result.code)