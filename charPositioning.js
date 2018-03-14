function countLetters (string) {
  var chars = string.replace(/ /g, '').split('');
  var numOfChars = {};

  chars.forEach(function(letter, index) {
    if (!numOfChars[letter]) {
      numOfChars[letter] = [index];
    } else {
      numOfChars[letter] = numOfChars[letter].concat(index) ;
      }
  });
  console.log(numOfChars);
}

countLetters("lighthouse in the house");