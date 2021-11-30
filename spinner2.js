const circle = "|/-\|/-\|";
let delay = 100;
const i = 200;
  for (const char of circle) {
  
  setTimeout(() => {
    process.stdout.write(`\r ${char}     `);
  }, delay) // <= 1s delay to make it noticeable. Can dial it down later.
  delay += i;
}
