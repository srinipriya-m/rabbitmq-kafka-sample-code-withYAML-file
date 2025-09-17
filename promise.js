
// const fn3 = async () => {
//   return new Promise((resolve) => {
//     console.log("Starting task");
//     setTimeout(
//       async () => {
//         console.log("Completed task");
//         resolve();
//       },
//       Math.random() * 1000 * 2,
//     );
//   });
// };


// const clothing = [fn3, fn3, fn3, fn3, fn3, fn3, fn3, fn3,, fn3, fn3];

// async function concurrencyEvaluation(callFn3, coucurrency = 3){
//    const batches = [];
//    for(let i = 0; i < callFn3.length; i += coucurrency){
//     console.log(i);
//     batches.push(callFn3.slice(i,i+coucurrency));
//    }
   
//    for( const batch of batches) {
//     await Promise.all( batch.map(item => processItem(item) ))
//    }
// }

// function processItem(item){
//      const  itemVal = item();
//      return itemVal;
// }

// concurrencyEvaluation(clothing,4);


// function x(){
//   for (var i = 1; i <= 10; i++){
//     function close(i){
//       setTimeout(() =>
//       console.log(i)
//       , i * 1000);
//     }
//     close(i);  
//   }
//   console.log("Learn")
// }
// x();


// function countChar(str, char) 
// {
//   return str.split(char).length - 1;

// }

// console.log(countChar('SBHGDWESUIJNSVVVAERS', 'S'));


function fun(str) {
    const charCount = {};

    // count the occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    //console.log(charCount);

    // // find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

//console.log(fun('GeeksForGeeks'));


// const app = (function(){
//   let count = 0;
//   function fs(){
//     return count += 1
//   }
//   return fs;
// })();

// console.log(app())
// console.log(app())


Array.prototype.flatten = function (){
    let output = [];
    let arr = this;
    const flat = (arr) => {
      for(let i =0 ; i < arr.length; i++) {
         if(Array.isArray(arr[i])) flat(arr[i])
         else output.push(arr[i]);
      }
    }
    flat(arr);
    return output;
  }

// let arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]];
// 

// let arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]];
// console.log(arr.length);
// console.log(arr.flatten()) 

async function sum(){
//Promise.then(console.log("here"));
let a = await this.getDataFromDB();
console.log(a);
let c = 534 * a ;
console.log(c);
}

sum();