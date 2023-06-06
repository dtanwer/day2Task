const check = (s, t) => {
    if(s.length!=t.length)
    {
        return false;
    }
    // console.log(s.length,t.length)
    let myMap1=new Array(26).fill(0);
    let myMap2=new Array(26).fill(0);

    for(let i=0;i<26;i++)
    {
        let index1=s.charCodeAt(i)-'a'.charCodeAt(0);
        let index2=t.charCodeAt(i)-'a'.charCodeAt(0);

        myMap1[index1]++;
        myMap2[index2]++;
    }
    let res1=[]
    let res2=[]
    for (let i = 0; i < 26; i++) {
        if(myMap1[i]!=0)res1.push(myMap1[i]);
        if(myMap2[i]!=0)res2.push(myMap2[i]);
    }
    res1.sort();
    res2.sort();
    return JSON.stringify(res1)===JSON.stringify(res2);

    
}



// let s = "egg", t = "add";
let s = "paper", t = "title";


console.log(check(s,t));



// console.log('abc'.charCodeAt(0));