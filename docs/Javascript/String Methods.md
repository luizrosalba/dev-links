##

[String Methods](https://github.com/luizrosalba/resumo/blob/master/javascript.md#string-methods)

```
charAt()	Returns the character at the specified index (position)
charCodeAt()	Returns the Unicode of the character at the specified index
concat()	Joins two or more strings, and returns a new joined strings
endsWith()	Checks whether a string ends with specified string/characters
fromCharCode()	Converts Unicode values to characters
includes()	Checks whether a string contains the specified string/characters
indexOf()	Returns the position of the first found occurrence of a specified value in a string
lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a match against a regular expression, and returns the matches
repeat()	Returns a new string with a specified number of copies of an  string
replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
search()	Searches a string for a specified value, or regular expression, and returns the position of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
substring()	Extracts the characters from a string, between two specified indices
toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale /// imutavel
toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
toLowerCase()	Converts a string to lowercase letters/// imutavel
toString()	Returns the value of a String object
toUpperCase()	Converts a string to uppercase letters/// imutavel
trim()	Removes whitespace from both ends of a string
valueOf()	Returns the primitive value of a String object
```

### concat

```JS
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

### fromCharCode

```Js
String.fromCharCode(65, 66, 67);  // "ABC"
```

### localeCompare

```JS
const a = 'réservé'; // with accents, lowercase
const b = 'RESERVE'; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1 false
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// expected output: 0 true
```

### match()

Searches a string for a match against a regular expression, and returns the matches

```JS
var str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
    str3 = "The contract was declared null and void.";
str1.match("number");   // "number" is a string. returns ["number"]
str1.match(NaN);        // the type of NaN is the number. returns ["NaN"]
str1.match(Infinity);   // the type of Infinity is the number. returns ["Infinity"]
str1.match(+Infinity);  // returns ["Infinity"]
str1.match(-Infinity);  // returns ["-Infinity"]
str2.match(65);         // returns ["65"]
str2.match(+65);        // A number with a positive sign. returns ["65"]
str3.match(null);       // returns ["null"]
```

### repeat()

Returns a new string with a specified number of copies of an string

```JS
'abc'.repeat(-1);   // RangeError
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (o número será convertido para inteiro)
'abc'.repeat(1/0);  // RangeError

({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() é um método genérico)
```

### replace()

Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced

```JS
var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.
```

### search()

Searches a string for a specified value, or regular expression, and returns the position of the match

```JS
function testinput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = ' contem ';
  } else {
    midstring = ' nao contem ';
  }
  console.log(str + midstring + re);
}
```

slice() Extracts a part of a string and returns a new string
split() Splits a string into an array of substrings
startsWith() Checks whether a string begins with specified characters

substr() Extracts the characters from a string, beginning at a specified start position, and through the specified number of character

```JS
var str = 'abcdefghij';
console.log('(1, 2): '   + str.substr(1, 2));   // '(1, 2): bc'
console.log('(-3, 2): '  + str.substr(-3, 2));  // '(-3, 2): hi'
console.log('(-3): '     + str.substr(-3));     // '(-3): hij'
console.log('(1): '      + str.substr(1));      // '(1): bcdefghij'
console.log('(-20, 2): ' + str.substr(-20, 2)); // '(-20, 2): ab'
console.log('(20, 2): '  + str.substr(20, 2));  // '(20, 2): '
```

### includes()

Checks whether a string contains the specified string/characters

```JS
'A big phrase with word1 but not word3'.includes('word1'); /// true
'A big phrase with word1 but not word3'.includes('word2'); /// false
['word3', 'word2'].includes('word3'); /// true at least one includes
```
