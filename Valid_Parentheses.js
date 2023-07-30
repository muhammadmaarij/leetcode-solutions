/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 == 1){
        return false
    } 

    if (s[0] === "]" || s[0] === ")" || s[0] === "}"){

     return false
    }
    
    
    let stack = []
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === "[" || s[i] === "(" || s[i] === "{") {
            stack.push(s[i])
        } 

    if (stack.length == 0)
            return false;

        let check;
        switch (s[i]){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
  
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
  
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        
        }
    }
    return stack.length === 0
};
