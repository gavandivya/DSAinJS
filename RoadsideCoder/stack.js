//Stack Implementation
//methods - pop,peek,push,isEmpty

class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }
        this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty"
        }
        return this.stack[this.size() - 1];
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        return this.size === 0;
    }
}

const stack1 = new Stack();
stack1.push(24);
stack1.push(42);
stack1.push(55);
stack1.push(78);

console.log(stack1.peek());
console.log(stack1.pop());
console.log(stack1);

//Given a input string s, reverse a order of words
const reverseString = (str) => {
    let stack = [];
    const array = str.split(" ");
    const size = array.length;
    for (let i = 0; i < size; i++) {
        const top = array.pop();
        stack.push(top);
    }
    return stack.join(" ");
}

console.log(reverseString("The sky is blue"));

//balance parentesis
const bracket = "[({})]"
let stack = [];

const validPar = (string) => {
    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (char === '[' || char === '(' || char === '{') {
            stack.push(char);
        }
        else if (char === ']' || char === '}' || char === ')') {
            if (isEmpty(stack)) { // case where no opening bracket
                return false;
            }
            let top = stack.pop();
            if ((top === '{' && char !== '}') || (top === '(' && char !== ')') || (top === '[' && char !== ']')) {
                return false;
            }
        }

    }

    return isEmpty(stack);
}


const isEmpty = () => {
    return stack.length === 0;
}

console.log(validPar(bracket));