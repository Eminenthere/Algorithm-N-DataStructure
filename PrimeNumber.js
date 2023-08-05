const isPrime = (n) => {
  if (n < 2) return false

  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

// BigO = O(n)

console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(4))
