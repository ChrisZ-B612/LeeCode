/**
 * https://leetcode.com/contest/weekly-contest-179/problems/bulb-switcher-iii/
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function (light) {
    let leftIndex = 0;
    let rightIndex = -1;
    let blueCount = 0;

    let bulbArr = Array(light.length).fill(0);

    for (const bulb of light) {
        bulbArr[bulb - 1] = 1;
        rightIndex = Math.max(rightIndex, bulb);

        if (bulbArr[leftIndex]) {
            while (bulbArr[++leftIndex]) continue;

            if (leftIndex === rightIndex) {
                blueCount++;
            }
        }
    }

    return blueCount;
};

let light = [2, 1, 3, 5, 4];
console.log(`NASA: ${numTimesAllBlue(light)}`);