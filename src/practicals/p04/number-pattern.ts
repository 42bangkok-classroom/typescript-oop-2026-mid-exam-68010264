// Write your code below
const size = Number(process.argv[2]);

if (!isNaN(size) && size > 0) {
    for (let i = 1; i >= size; i ++){
        console.log(size.repeat(i));
    }
}