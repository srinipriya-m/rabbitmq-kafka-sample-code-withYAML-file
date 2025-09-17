// function maxSubarray(arr) {
//     if (arr.length === 0) return { maxSum: 0, subarray: [] };
    
//     let maxSum = arr[0];
//     let currentSum = arr[0];
//     let start = 0;
//     let end = 0;
//     let tempStart = 0;
    
//     for (let i = 1; i < arr.length; i++) {
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

// const sampleArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// console.log(maxSubarray(sampleArray));


const user = {
    firstName : 'srini',
    pincode : '636453',
    address(){
        street : 'Eragundapatti'
        distict: 'Salem'
        name : this.firstName
    }
};

//console.log(global);
const userAddress = user.address;
console.log(userAddress.name)