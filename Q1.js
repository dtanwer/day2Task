//Search in a sorted matrix

const findTarget=(matrix,target,n,m)=>{
    for(let i=0;i<=m;i++)
    {
        let j=n;
        while(j>=0)
        {
            if(matrix[i][j]==target)
            {
                
                return true;
            }
            if(matrix[i][j]<target)
            {
                break;
            }
            j--;
        }

        return false;
    }
}
const findTargetBinary=(matrix,target,n,m)=>{
    let start=0;
    let end=n*m-1;
    while(start<=end)
    {
        const mid=Math.floor(start-(start-end)/2);  
        const row=Math.floor(mid/n);
        const col=mid%n;
        if(matrix[row][col]==target) return true;
        else if(matrix[row][col]<target) start=mid+1;
        else end=mid-1;
    }
    return false;
}


let matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,60]];
let target=30;
let m=matrix.length;
let n=matrix[0].length;
console.log(findTargetBinary(matrix,target,n,m));