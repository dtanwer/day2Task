let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let m = mat.length;
let n = mat.length;

let ans = new Array(n * m);
let i = 0; j = 0;
let top = true;

let index = 0;
ans[index++] = mat[i][j];
while (index != n * m) {
    if (top) {
        j += 1;

        while (j != 0 && i != m - 1) {
            if (j < n) {
                ans[index++] = mat[i][j];
            }
            i++;
            j--;
        }

        ans[index++] = mat[i][j];
        top = false;
    } else {
        i += 1;

        while (i != 0 && j != n - 1) {
            if (i < m) {
                ans[index++] = mat[i][j];
            }
            i--;
            j++;
        }

        ans[index++] = mat[i][j];
        top = true;
    }
}

console.log(ans);