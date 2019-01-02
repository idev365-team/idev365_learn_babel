class Test {
    constructor(name) {
        this.name = name;
    }

    logger () {
        console.log("Hello", this.name);
    }
}

var test = new Test("山地人")
test.logger()