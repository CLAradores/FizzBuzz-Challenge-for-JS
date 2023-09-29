let log = 1;

while (log <= 100) {
  if (log % 3 === 0) {
    console.log(`${log} Fizz`);
  } else if (log % 5 === 0) {
    console.log(`${log} Buzz`);
  }
  if (log % 3 === 0 && log % 5 === 0) {
    console.log(`${log} FizzBuzz`);
  } else {
    console.log(log);
  }

  log++;
}
