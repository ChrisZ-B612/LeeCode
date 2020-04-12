/**
 * https://leetcode.com/contest/weekly-contest-178/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function (grid) {
    let ti = grid.length - 1;
    let tj = grid[0].length - 1;

    grid = grid.map((row, i) => row.map((value, j) => ({ i, j, cost: -1, value })));

    let bugArr = [grid[0][0]];
    let curCost = 0;
    let targetCost = -1;
    let footArr = []

    const getBlankCell = (i, j) => (i >= 0) && (j >= 0) && (i <= ti) && (j <= tj) && (grid[i][j].cost === -1) && grid[i][j];

    while (true) {
        for (const cell of bugArr) {
            let cur = cell;
            let ni = cell.i;
            let nj = cell.j;

            if (cur.cost !== -1) continue;

            while (true) {
                cur.cost = curCost;
                footArr.push(cur);

                if (ni === ti && nj === tj) {
                    targetCost = curCost;
                    break;
                }

                switch (cur.value) {
                    case 1:
                        nj += 1;
                        break;
                    case 2:
                        nj -= 1;
                        break;
                    case 3:
                        ni += 1;
                        break;
                    case 4:
                        ni -= 1;
                        break;
                }

                let next = getBlankCell(ni, nj);

                if (next) {
                    cur = next;
                } else {
                    break;
                }
            }
        }

        if (~targetCost) break;

        bugArr = [];
        for (const cell of footArr) {
            let blank;

            if (blank = getBlankCell(cell.i, cell.j + 1)) {
                bugArr.push(blank);
            }

            if (blank = getBlankCell(cell.i, cell.j - 1)) {
                bugArr.push(blank);
            }

            if (blank = getBlankCell(cell.i + 1, cell.j)) {
                bugArr.push(blank);
            }

            if (blank = getBlankCell(cell.i - 1, cell.j)) {
                bugArr.push(blank);
            }
        }

        curCost += 1;
        footArr = [];
    }

    return targetCost;
};

let grid = [[1, 1, 1, 1], [2, 2, 2, 2], [1, 1, 1, 1], [2, 2, 2, 2]];
console.log('NASA: ', minCost(grid));