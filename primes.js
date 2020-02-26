function findPrimes(amount) {
  let primes = [];
  for (let i = 1; i < amount; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function timer(fn, amount) {
  let start = new Date();
  console.log(fn(amount));
  let end = new Date();
  return end - start;
}

console.log(timer(findPrimes, 200));
