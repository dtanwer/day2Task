// // let s = "bcabc";
// let s= "cbacdcbc";

// let myarr=s.split('');
// let mySet=new Set();
// myarr.forEach(element => {
//     mySet.add(element);
// });

// let res=[...mySet];
// // res.sort();
// let str="";
// res.forEach(element => {
//     str+=element;
// });
// console.log(str);


let heights = [1,1,4,2,1,3];
let n=heights.length;

let i=0;
let cnt=0;
while(i<n)
{
    if(i+1<n && heights[i]>heights[i+1])
    {
        cnt++;
    }
    i++;
}

console.log(cnt);


