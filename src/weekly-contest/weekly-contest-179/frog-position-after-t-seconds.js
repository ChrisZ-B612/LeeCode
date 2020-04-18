/**
 * https://leetcode.com/contest/weekly-contest-179/problems/frog-position-after-t-seconds/
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function (n, edges, t, target) {
    function TreeNode(value, level, parent = null) {
        this.value = value;
        this.level = level;
        this.parent = parent;
        this.prob = 0;
        this.sub = [];
    }

    const getTree = (edges) => {
        let map = {};
        let root;

        for (const item of edges) {
            let parent = item[0];
            let child = item[1];
            map[parent] = map[parent] || new TreeNode(parent);
            map[child] = map[child] || new TreeNode(child);
            map[parent].sub.push(map[child]);
            map[child].parent = map[parent];
        }

        for (const item of Object.values(map)) {
            do {
                root = item.parent;
            } while (root);
            root = item;
            root.prob = 1;
            root.level = 0;
            break;
        }

        return {
            root,
            map,
        };
    }

    const infoTree = (node) => {
        if (!node.sub.length) return;

        let prob = 1 / node.sub.length;

        for (const child of node.sub) {
            child.prob = prob * node.prob;
            child.level = node.level + 1;
            infoTree(child);
        }
    }

    let { root, map } = getTree(edges);
    infoTree(root);
    target = map[target];
    return target.level <= t ? target.prob : 0;
};

let n = 7, edges = [[1, 2], [1, 3], [1, 7], [2, 4], [2, 6], [3, 5]], t = 5, target = 6;
console.log(`NASA: ${frogPosition(n, edges, t, target)}`);