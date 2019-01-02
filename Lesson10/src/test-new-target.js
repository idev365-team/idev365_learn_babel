function Foo() {
    console.log(new.target);
}
  
Foo(); // => undefined
new Foo(); // => Foo

