const vowelShift = (str, n) => {
  if ((n === 0)) {
    return str;
  }

  const chars = str.split('');
  const regex = /[aeiou]/;
  const vowels = [];
  const vowelIndexes = [];
  chars.forEach((char, i) => {
    if (regex.test(char)){
      vowelIndexes.push(i);
      vowels.push(char)
    }
  })

  if (vowels.length < 2) {
    return str;
  }

  for (let j = 0; j < n; j++) {
    vowels.unshift(vowels[vowels.length-1]);
    vowels.pop();
  }
  vowels.forEach((vowel, k) => {
    chars[vowelIndexes[k]] = vowel;
  })
  return chars.join('');
};

module.exports = { vowelShift };

/*
Given a string of any length and a number n, shift every vowel 
in the string n vowel positions to the right. The final vowel in 
the string wraps round and goes back to the beginning of the string.

For example, in the string 'hello child', if each vowel was shifted 
1 vowel position to the right, the e would move to the o's position, 
the o would move to the i's position, and the i would wrap back round 
and fill the e's position, giving:

'hille chold'

Examples
You can use these examples to start building up your test suite:

vowelShift('foo', 1);
  --> 'foo'
vowelShift('hello', 1);
  --> 'holle'
vowelShift('hello child', 1);
  --> 'hille chold'
vowelShift('star nosed mole', 2);
  --> 'stor nesad mole'
vowelShift('funnily enough', 4);
  --> 'finnely onuugh'
*/
