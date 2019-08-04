/////////////////Map.delete()//////////////////////
// var map1 = new Map();
// map1.set('bar', 'foo');
// console.log(map1.delete('foo'))
// // console.log(map1.delete('bar'));
// // expected result: true
// // (true indicates successful removal)

// console.log(map1.has('bar'));
// // expected result: false

// var myMap = new Map();
// myMap.set('bar', 'foo');

// console.log(myMap.delete('bar')); // Returns true. Successfully removed.
// console.log(myMap.has('bar')); // Returns false. The "bar" element is no longer present.



// var myMap = new Map();
// myMap.set('bar', 'baz');
// myMap.set(1, 'foo');

// // myMap.size;       // 2
// myMap.has('bar'); // true

// myMap.clear();

// myMap.size;       // 0
// myMap.has('bar')  // false

// console.log(myMap.size);


// const myMap = new Map();
//     myMap.set('a', 'alpa');
//     myMap.set('b', 'beta');
//     myMap.set('d', 'delta');
//     myMap.set('g', 'grama');
//     myMap.set('l', 'lemda');

//     console.log(myMap.size);

///////////////////// Map.entries ///////////////////

// var map1 = new Map();

// map1.set('0', 'foo');
// map1.set(1, 'bar');

// var iterator1 = map1.entries();

// console.log(iterator1.next().value);
// // expected output: ["0", "foo"]

// console.log(iterator1.next().value);
// // expected output: [1, "bar"]

// const Hasan = new Map();

// Hasan.set('a', 'alpa');
// Hasan.set('b', 'beta');
// Hasan.set({}, 'delta');
// Hasan.set('g', 'grama');

// const Mahmud = Hasan.entries();

// console.log(Mahmud.next().value);
// console.log(Mahmud.next().value);
// console.log(Mahmud.next().value);
// console.log(Mahmud.next().value);


///////////////// Map.forEach ///////////////////

// function logMapElements(value, key, map) {
//     console.log(`m[${key}] = ${value}`);
// }

// function logforEach(value, key, map) {
//     console.log(`Hasan[${key}] =${value}`);
// }
// new Map([['foot', 2], ['bar', {}], ['cold', undefined]])
//     .forEach(logforEach);

// new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
//     .forEach(logMapElements);


////////////////// Map.get ////////////////


// const Hasan = new Map();

// const Mahmud = Hasan.set('Hasan', 'Mahmud');

// console.log(Mahmud.get('Hasan'));
// console.log(Mahmud.get('hasan'))

///////////// JavaScript Demo: Map.prototype[@@iterator]() ///////////////

var map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

var iterator1 = map1[Symbol.iterator]();

for (let item of iterator1) {
    console.log(item);
    // expected output: Array ["0", "foo"]
    // expected output: Array [1, "bar"]
}

const myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

const mapIter = myMap[Symbol.iterator]();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]






























































































































































































































































































































