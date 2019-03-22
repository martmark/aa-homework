// madLib

function madLib(verb, adjective, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`)
}

madLib('make', 'best', 'guac');


// isSubstring

function isSubstring(searchString, subString) {
  console.log(searchString.includes(subString));
}

isSubstring('time to program', 'time');


// fizzBuzz

function fizzBuzz(nums) {
  filtered = nums.filter(function(x) { 
    return ((x % 3 === 0 || x % 5 === 0) && !(x % 3 === 0 && x % 5 === 0))
  });
  console.log(filtered);
}

fizzBuzz([9, 10, 15]);

// isPrime

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return console.log(false); 
    }
  }
  console.log(num > 1);
}

isPrime(11);

// sumOfNPrimes

function sumOfNPrimes(n) {
  
}