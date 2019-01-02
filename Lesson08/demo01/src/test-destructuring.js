let obj ={x:10,y:20};
let {x, y} = obj;

let arr = [1,2,3,4,5,6];
let [a, b, ...rest] = arr;

console.log(x,y);
console.log(a,b,rest);