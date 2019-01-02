const code =`
    obj["foo"] = "isValid";

    obj.const = "isKeyword";
    obj.var = "isKeyword";
`

const result = require("@babel/core").transform(code, {
    plugins: ["transform-member-expression-literals"]
});

console.log(result.code)