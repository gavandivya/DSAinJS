//O(n)
const factor = (num) => {
    let store = [];
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            store.push(i)
        }

    }
    return store;
}

//O(sqrt(n))
const factor2 = (num) => {
    let string = "";
    let string2 = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            if (num / i == i) {
                string += ` ${i}`;
            }
            else {
                string += ` ${i}`;
                string2.push(` ${num / i}`);
            }

        }

    }
    let string3 = "";
    for (let i = string2.length - 1; i >= 0; i--) {
        string3 += `${string2[i]}`
    }

    return string + string3;
}

let num = 20;
console.log(factor(num));
console.log(factor2(num));