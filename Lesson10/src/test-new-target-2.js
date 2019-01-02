class Foo {}

class Bar extends Foo {
  constructor() {
    // This will be a problem if classes aren't transformed to ES5
    new.target;
    super();
  }
}
