/**
 * https://leetcode.com/contest/weekly-contest-178/problems/linked-list-in-binary-tree/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }

    const getTree = (root) => {
        let treeIndex = 0;
        let rootIndex = 0;
        let rootLen = root.length;

        root = root.slice(0);

        let treeNode = root[rootIndex] = new TreeNode(root[rootIndex]);

        while ((rootIndex < rootLen) && (treeIndex < rootLen)) {
            if ((++rootIndex < rootLen) && (root[rootIndex] !== null)) {
                treeNode.left = root[rootIndex] = new TreeNode(root[rootIndex]);
            }
            if ((++rootIndex < rootLen) && (root[rootIndex] !== null)) {
                treeNode.right = root[rootIndex] = new TreeNode(root[rootIndex]);
            }

            while ((++treeIndex < rootLen) && (root[treeIndex] == null)) continue;
            treeNode = root[treeIndex];
        }

        return root[0];
    };

    const gotyou = (treeNode, head) => {
        if (head.length === 0) return true;
        if (treeNode === null) return false;

        let next = head.slice(1);
        return (treeNode.val === head[0]) ? (gotyou(treeNode.left, next) || gotyou(treeNode.right, next)) : (gotyou(treeNode.left, head)) || (gotyou(treeNode.right, head));
    };

    let rootNode = getTree(root);
    return gotyou(rootNode, head);
};

let head = [1, 4, 2, 6];
let root = [1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3];
console.log(`NASA: (${isSubPath(head, root)})`);
