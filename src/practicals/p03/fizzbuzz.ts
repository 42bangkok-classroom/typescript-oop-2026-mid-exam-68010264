// Write your code below
const i = process.argv[2];
for (let i = 1; i <= size; i ++){
if(i % 3 == 0) {
    console.log("Fizz");
} else if (i % 5 == 0) {
    console.log("Buzz");

} else if (i % 5 == 0 || i % 3 == 0) {
    console.log("FizzBuzz");
}    
}