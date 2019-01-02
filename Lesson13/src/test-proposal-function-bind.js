obj::func
// is equivalent to:
func.bind(obj)

::obj.func
// is equivalent to:
obj.func.bind(obj)

obj::func(val)
// is equivalent to:
func.call(obj, val)

::obj.func(val)
// is equivalent to:
obj.func.call(obj, val)


const box = {
    weight: 2,
    getWeight() { return this.weight; },
  };
  
  const { getWeight } = box;
  
  console.log(box.getWeight()); // prints '2'
  
  const bigBox = { weight: 10 };
  console.log(bigBox::getWeight()); // prints '10'
  
  // Can be chained:
  function add(val) { return this + val; }
  
  console.log(bigBox::getWeight()::add(5)); // prints '15'
  