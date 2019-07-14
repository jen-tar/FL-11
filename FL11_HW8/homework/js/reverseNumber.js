function reverseNumber(number) {
  var rev = 0;
  while (number !== 0) {
    rev = (rev * 10) + (number % 10);
    number = number / 10 | 0;
  }
  return rev;

}

reverseNumber(123); //=> 321
reverseNumber(-456); //=> -654
reverseNumber(10000); //=> 1
