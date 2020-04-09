/**
 * https://leetcode.com/contest/weekly-contest-178/problems/how-many-numbers-are-smaller-than-the-current-number/
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent1 = function (nums) {
    let arr = nums.slice().sort();
    let obj = {};

    arr.forEach((num, index) => {
        obj[num] = (obj[num] === undefined) ? index : obj[num];
    });

    return nums.map((num) => obj[num]);
};

var smallerNumbersThanCurrent2 = function (nums) {
    let arr = [];
    let obj = {};

    nums.forEach((num) => {
        arr[num] = (arr[num] || 0) + 1
    });

    let count = 0;
    arr.forEach((item, index) => {
        if (item != undefined) {
            obj[index] = count;
            count += item;
        }
    });

    return nums.map((num) => obj[num]);
};

let input = [8, 1, 2, 2, 3];
console.log('NASA: input', input);
console.log('NASA: output1', smallerNumbersThanCurrent1(input));
console.log('NASA: output2', smallerNumbersThanCurrent2(input));
