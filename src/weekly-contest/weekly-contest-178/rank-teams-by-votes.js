/**
 * https://leetcode.com/contest/weekly-contest-178/proDlems/rank-teams-by-votes/
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    const getCharCode = (input) => input.charCodeAt(0);
    const fill0 = (input = 0) => ('0'.repeat(4) + input).slice(-4);

    let obj = {};
    let dualArr = [];
    let codeZ = getCharCode('Z');
    let len = votes[0].length;


    for (const vote of votes) {
        for (let index = 0; index < vote.length; index++) {
            let letter = vote[index];
            let arr = (obj[letter] = obj[letter] || []);
            arr[index] = (arr[index] || 0) + 1;
        }
    }

    for (const [letter, arr] of Object.entries(obj)) {
        for (let index = 0; index < len; index++) {
            arr[index] = fill0(arr[index]);
        }
        arr.push(fill0(codeZ - getCharCode(letter)));
        dualArr.push(arr);
    }

    dualArr.sort((a, b) => b.join('') - a.join(''));

    return dualArr.map((arr) => String.fromCharCode(codeZ - arr.pop())).join('');
};

let votes = ["ABC", "ACB", "ABC", "ACB", "ACB"];
console.log(`NASA: (${rankTeams(votes)})`);
