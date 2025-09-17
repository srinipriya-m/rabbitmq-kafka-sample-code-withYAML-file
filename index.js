// function maxSubarray(arr) {
//     if (arr.length === 0) return { maxSum: 0, subarray: [] };
    
//     let maxSum = arr[0];
//     let currentSum = arr[0];
//     let start = 0;
//     let end = 0;
//     let tempStart = 0;
    
//     for (let i = 1; i < arr.length; i++) {
//       console.log(arr[i]);
//         if (currentSum + arr[i] < arr[i]) {
//             currentSum = arr[i];
//             tempStart = i;
//         } else {
//             currentSum += arr[i];
//         }
        
//         if (currentSum > maxSum) {
//             maxSum = currentSum;
//             start = tempStart;
//             end = i;
//         }
//     }
    
//     const subarray = arr.slice(start, end + 1);
//     return { maxSum, subarray };
// }


// function maxSubarray(arr){
//    if(arr.length === 0) return { currentSum : 0 , subArray : [] }

//    let currentSum = arr[0];
//    let maxSum = arr[0];
//    let tempStart = 0;
//    let start = 0;
//    let end = 0;

//    for(let i = 1 ; i < arr.length; i++){
//        if(currentSum + arr[i] < arr[i]){
//            currentSum = arr[i];
//            tempStart = i;
//        }else{
//            currentSum += arr[i]
//        }

//        if(currentSum > maxSum) {
//           maxSum = currentSum;
//           start = tempStart;
//           end = i;
//        }
//    }

//    const subArray = arr.slice(start, end+1);
//    return {maxSum,subArray};

// }

// const sampleArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// console.log(maxSubarray(sampleArray));

/*
 ######
 Flatten Array
 ######
*/

// const flattenArray = (arr) => {
//    let flatten = [];
//    arr.forEach(item => {
//       if(Array.isArray(item)){
//             flatten.push(...flattenArray(item))
//         }else{
//             flatten.push(item);
//         }
//    });
//    return flatten;
// }

// const nested = [1, [2,[3],4, [5,[6,[7, [8]]],9]]];


// console.log(flattenArray(nested));


/*
 ######
 Non Repeated character to find given array
 ######
*/

// const word = 'instaprep';

// function findGivenStringNonReapetCharacter(str){
//     let results = {};
//     const convertArr = [...str]
//     for(let i=0;i<convertArr.length; i++){
//         if(results[convertArr[i]]){
//             results[convertArr[i]] = ( results[convertArr[i]] + 1) || 0;
//         }else{
//             results[convertArr[i]] = 1;
//         }
//     }

//     for(const count in results) {
//         /*
//          First non repeat character 
//         */
//         if(results[count] ===  1 ){
//             return  count;
//         }
//         /*
//          First repeated character 
//         */
//         if(results[count] > 1 ){
//             return  count;
//         }
//     }

//     return 'Nothing...';
// }

// console.log(findGivenStringNonReapetCharacter(word));


const people = [
 {name: "Alice", city: "Delhi"},
{name: "Bob", city: "Delhi"},
{name: "Charlie", city: "Mumbai"},
];


function reArrangeStructure(arr){
    let results = {}
    for(const data of arr){
        //console.log(data);
        if(results[data.city]){
            results[data.city].push({ name : data.name});
        }else{
          results[data.city] = [{ name : data.name}];
        }
    }

    return results;
}

//console.log(reArrangeStructure(people));


let res = 5 + "3";
console.log(res);  //"53"
 
let res1 = 5 + + "3";
console.log(res1); //8
 
let res2 = 5 - "3";
console.log(res2); //2
 
 
let res3 = 5 - - "3";
console.log(res3); //2