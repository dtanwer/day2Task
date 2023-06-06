const checkSubstring=(word,str)=>{
    let s="";
    let window=str.length;
    for (let i = 0; i < window; i++) {
        s+=word[i];
    }
    if(s===str) return true;
    for(let i=window;i<word.length;i++)
    {
        s+=word[i];
        s=s.substring(1,s.length);
        if(s==str) return true;
    }
    return false;
}

// console.log(checkSubstring("deepak","epak"));



let words = ["mass","as","hero","superhero"];
let n=words.length;
let res=[];
for (let i = 0; i < n; i++) 
{
    for (let j = 0; j < n; j++) 
    {
        if(i!=j  && checkSubstring(words[i],words[j]))
        {
            console.log(words[j]);
            res.push(words[j]);
        } 
    }
}

console.log(res)
