const book = {
    "main title": "JavaScript",
    'sub-title': "The Guide",
    "for": "all audiences",
    author: {
        firstname: "David",
        surname: "Flanagan"
    }
};
const { author } = book;
console.log(author);

function f(...mesEntiers) {
    console.log(mesEntiers.reduce((som, accum) => som+=accum));
}

f(1,2,3,4,5);
const array1 = [1,2,3];
const array2 = [4,5, ...array1, 9,10];
console.log(array2);

const ktab = {...book};
console.log(ktab);
