const findDistance=(arr1,arr2,d)=>{
    let n=arr1.length;
    let m=arr2.length;
    let ans=0;
    for(let i = 0;i<n;i++) 
    {   
        let cnt=0;
        for (let j = 0; j < m; j++) {
            if(Math.abs(arr1[i]-arr2[j])>d) cnt++;
        }
        if(cnt==m) ans++;
    }

    return ans;
}


// let arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2;
// let arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3;
let  arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6;
console.log(findDistance(arr1,arr2,d));
