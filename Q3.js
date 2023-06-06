// let nums = [2, 3, 5];
let nums = [1,4,6,8,10];
let n = nums.length;
let res = [];

for (let i = 0; i < n; i++) {
    let sum = 0;
    nums.forEach(element => {
        sum += Math.abs(element-nums[i]);
    });
    res.push(sum);
}
console.log(res);
