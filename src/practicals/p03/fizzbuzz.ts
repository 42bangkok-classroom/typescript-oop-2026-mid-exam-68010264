// Write your code below
const s = process.argv[2];
for (let i = 1; i <= s; i ++) {
if(s % 3 == 0) {
    console.log("Fizz");
} else if (s % 5 == 0) {
    console.log("Buzz");

} else if (s % 5 == 0 && s % 3 == 0) {
    console.log("FizzBuzz");
} else if ( input <= -1 || !isNaN(input)) {
    console.log("");
}
} 