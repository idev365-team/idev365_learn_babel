let obj1 = {
    say () {
      return "Hello"
    }
  }
  
let obj2 = {
    say () {
      return super.say() + "World!"
    }
}

Object.setPrototypeOf(obj2, obj1);

console.log(obj2.say())
