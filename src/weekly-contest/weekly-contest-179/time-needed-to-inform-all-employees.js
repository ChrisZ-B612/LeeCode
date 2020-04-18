/**
 * https://leetcode.com/contest/weekly-contest-179/problems/time-needed-to-inform-all-employees/
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
    function TreeNode(index, time = 0) {
        this.index = index;
        this.time = time;
        this.sub = [];
    }

    const getTree = (parent) => {
        for (let index = 0; index < manager.length; index++) {
            let parentIndex = manager[index];

            if (parentIndex === parent.index) {
                let node = new TreeNode(index, informTime[index]);
                parent.sub.push(node);
                getTree(node);
            }
        }
    }

    const getTime = (node) => {
        return node.sub.length && (node.time + Math.max(...node.sub.map(getTime)));
    };

    const root = new TreeNode(headID, informTime[headID]);

    getTree(root);

    return getTime(root);
};

let n = 15, headID = 0, manager = [-1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], informTime = [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(`NASA: ${numOfMinutes(n, headID, manager, informTime)}`);