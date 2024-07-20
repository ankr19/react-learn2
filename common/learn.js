//    index ->   0         1        2        3
const fruit = ["Apple", "Grape", "Banana", "Green"];
let numbers = [1, 3, 8, 4, 9, 8];



// fruit.map((val)=>{
//     console.log("value -> ",val)
// })

// // const val = fruit.filter()
// const value = fruit.filter((doc)=>{
//     console.log('executing')
//     // if(doc.length == 6){
//     //     return doc;
//     // }
//     if(doc == "Apple"){
//         return doc;
//     }
//     console.log('executing end')
// })
// // console.log(value)

// console.log(fruit.length)
// console.log(fruit[0])
// console.log(fruit[2])
// console.log(fruit[4])

// let numbers = [1, 3, 8, 4, 9, 8];

// let value2 = numbers.find((doc)=> {
//     return doc % 2 == 0;
// })

// console.log("find method ", value2)


console.log(numbers);
console.log(fruit);
numbers.pop()
fruit.pop()
console.log(numbers)
console.log(fruit);

fruit.push('Array')
numbers.push(32)
console.log(numbers)
console.log(fruit);


let value2 = numbers.some((doc)=> {
        return doc % 2 == 0;
    })
    console.log(value2)