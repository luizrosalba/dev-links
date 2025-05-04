Repository provides an invaluable resource for anyone looking to learn or explore coding with JavaScript

[https://github.com/trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)

## String

### Change All ocurrences of a given list of words

```Js
/// input : text word1 word2 word1 ghi
/// output : text abc def abc ghi
  changeAllOcurrences(inputString: string ): string {
    const givenWords = [word1: 'abc', word2: 'def']
    let immutableOutput = inputString;
    const keys = Object.keys(givenWords);
    const values = Object.values(givenWords);
    keys.forEach((value, index) => {
      const search = `${value}`;
      const replacement = values[index];
      immutableOutput = immutableOutput.split(search).join(replacement);
    });
    return immutableOutput;
  }
```
