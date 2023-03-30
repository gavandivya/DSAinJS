let master = [1, 2, 3, 4, 5, 6, 7, 8];
const selected = [1, 3, 4, 5];

const filter = () => {
    let stored = [];
    for (let i = 0; i < selected.length; i++) {
        master = master.filter((ele) => ele != selected[i]);
    }
    return master
}

console.log(filter())