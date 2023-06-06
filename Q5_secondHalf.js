

const check=(s)=>{
    let stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const c = s.charAt(i);
  
      if (c === '(' || c === '*')
      {
        stack.push(c);
      } 
      else if (c === ')') 
      {
        if (stack.length === 0) {
          return false;
        }
  
        if (stack[stack.length - 1] === '(') {
          stack.pop();
        } else if (stack[stack.length - 1] === '*') {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  
    let count = 0;
  
    while (stack.length > 0) {
      const c = stack.pop();
  
      if (c === '(') {
        count++;
      } else if (c=== '*') {
        if (count > 0) {
          count--;
        }
      } else {
        return false;
      }
    }
  
    return count === 0;
}

let s = "(*))"
console.log(check(s))