//From https://medium.freecodecamp.org/how-to-implement-a-simple-hash-table-in-javascript-cb3b9c1f2997

// class DumbMap {
//     get(x) {
//         console.log(`get ${x}`);
//     }

//     set(x, y){
//         console.log(`set ${x} to ${y}`)
//     }
// }

// let m = new DumbMap();

// m.set('a', 1);
// m.get('a');

/*
    And let’s implement a very simple, inefficient way to store these key-value pairs and 
    retrieve them later on. We first start by storing them in an internal array (remember, 
    we can’t use {} since we are implementing {} — mind blown!):
*/

// class DumbMap {
//     constructor(){
//         this.list = [];
//     }

//     get(x) {
//         let result;
//         this.list.forEach(pairs => {
//             if(pairs[0] === x){
//                 result = pairs[1]
//             }
//         })
//         return result;
//     }

//     set(x, y){
//         this.list.push([x, y])
//     }
// }

// let m = new DumbMap();
// m.set('a', 1);
// console.log(m.get('a'));
// console.log(m.get('I_DONT_EXIST'));

/*
    Our DumbMap is amazing! It works right out of the box, but how will it perform when we add a large 
    amount of key-value pairs?

    Let’s try a simple benchmark. We will first try to find a non-existing element in a hash table with 
    very few elements, and then try the same in one with a large quantity of elements:
*/

// let m = new DumbMap()
// m.set('x', 1)
// m.set('y', 2)

// console.time('with very few records in the map')
// m.get('I_DONT_EXIST')
// console.timeEnd('with very few records in the map')

// m = new DumbMap()

// for (x = 0; x < 1000000; x++) {
//   m.set(`element${x}`, x)
// }

// console.time('with lots of records in the map')
// m.get('I_DONT_EXIST')
// console.timeEnd('with lots of records in the map')

//RESULTS:
//with very few records in the map: 0.132ms 
//with lots of records in the map: 36.401ms 

// It's O(n). We want O(1). We need a hashing function.


let hash = require('string-hash'); //converts a string to a numeric hash

class DumbMap {
    constructor(){
        this.list= []
    }

    get(x) {
        return this.list[hash(x)]
    }

    set(x,y){
        this.list[hash(x)] = y
    }
}

let m = new DumbMap()
m.set('x', 1)
m.set('y', 2)

console.time('with very few records in the map')
m.get('I_DONT_EXIST')
console.timeEnd('with very few records in the map')

m = new DumbMap()

for (x = 0; x < 1000000; x++) {
  m.set(`element${x}`, x)
}

console.time('with lots of records in the map')
m.get('I_DONT_EXIST')
console.timeEnd('with lots of records in the map')

//RESULTS:
//with very few records in the map: 0.028ms 
//with lots of records in the map: 0.014ms 

//Wow. We don't have to loop through all elements in the list.
