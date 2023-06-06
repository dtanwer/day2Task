const findLeastIndexSum=(l1,l2)=>{
    let mp =new Map();
    for(let i=0;i<l1.length;i++)
    {
        mp.set(l1[i], i);
    }

    let leastIndexSum=Number.MAX_SAFE_INTEGER;
    let ansIndex=-1;
    for (let i = 0; i < l2.length; i++) 
    {
        if(mp.has(l2[i]))
        {
            let sum=i+mp.get(l2[i]);
            if(sum<leastIndexSum)
            {
                leastIndexSum=sum;
                ansIndex=i;
            }
        }
    }

    return l2[ansIndex];
}
let list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"];
console.log(findLeastIndexSum(list1,list2));
