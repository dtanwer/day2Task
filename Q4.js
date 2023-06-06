let nums = [3, 2, 3];
let n = nums.length;
let frq = new Map();
let res = new Set();
for (let i = 0; i < n; i++) {
    if (frq.has(nums[i])) {
        frq.set(nums[i], frq.get(nums[i]) + 1);
        // console.log(nums[i], frq.get(nums[i]));
    }
    else {
        frq.set(nums[i], 1);
    }
}
for (let i = 0; i < n; i++) {
    if (frq.get(nums[i]) > Math.floor(n / 3)) {
        res.add(nums[i]);
    }
}

let myresult = [...res];
console.log(myresult);