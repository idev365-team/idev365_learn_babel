function test(param = throw new Error('required!')) {
    const test = param === true || throw new Error('Falsey!');
}