// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// nums = [2,7,11,15];
// var output;
// var target = 9;
// const rand = nums => Math.floor(Math.random() * nums.length);
// randnum = rand(nums);
// console.log(`random number = ${randnum}`);
// var tempnums = nums;
// var tempnumber = nums[randnum];
// tempnums.splice([randnum], 1);
// console.log(`Temporary number array ; ${tempnums}`);
// console.log(`Temporary number ${tempnumber}`);
// console.log(tempnums.length);
// for(i=0; i <= tempnums.length - 1; i++){
//     console.log(i)
//     if((tempnums[i] + tempnumber) == target){
//         output = (tempnums[i] + tempnumber)
//         console.log(`sucessful output: ${output}`);
//         break;
//     }
//     else{
//      console.log(`rerun forloop`);   
//     }
// };
// console.log(`out of loop undefined outputt check; ${output}`);







var twoSum = function(nums, target) {
        var output = 0;
        var nums;
        var target;
        var tempnums;
        const rand = nums => Math.floor(Math.random() * nums.length);
        const tempset = nums => nums;
        tempnums = tempset(nums);
        randnum = rand(nums);
        console.log(`random number = ${randnum}`);
       // var tempnums = nums;
        var tempnumber = nums[randnum];
        tempnums.splice([randnum], 1);
        console.log(`Temporary number array ; ${tempnums}`);
        console.log(`Temporary number ${tempnumber}`);
        console.log(tempnums.length);
        for(i=0; i <= tempnums.length - 1; i++){
            console.log(i)
            if((tempnums[i] + tempnumber) == target){
                output = (tempnums[i] + tempnumber)
                console.log(`sucessful output: ${output}`);
                break;
            }
            else{
             console.log(`rerun forloop`);   
            }
        };
        if(output == 0){
            twoSum(nums,target);
            tempnums = nums;
            console.log(`restart`);
        }
        else{
            return output;
        }
    }




// nums           target
//twoSum([2,7,11,15], 9);