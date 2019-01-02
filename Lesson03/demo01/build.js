const babel = require("@babel/core")

const code = `
    const sayHi = ()=>{
        console.log("Hello,Babel")
    }

    sayHi()
`

const optionsObject = {

}

const result = babel.transform(code,optionsObject)
console.log(result.code)