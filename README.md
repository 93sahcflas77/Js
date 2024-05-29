# Javavscript all function and method list

## F/M:- Function and method 

### 1. String

F/M | Syntax | Prarmeters | Return value | Example
--- | --- | ---- | ---- | ------
at() | at(index) | **index:-** The index position of the string character to be retured. Indexing form the end of the string when passed a negative vale | A new string, index can not be found return undefined | ``` string.at(2) ```
charAt() | charAt(index) | **index:-** Zero-based index of the character to be returned | A new string, first character access: ```charAt(0)```, last characters access: ```charAt(string.length-1)``` | ```string.charAt(str.length-1)```
concat() |concat(str1, str2 ...strN) | **str1**, **str2**, **strN** **:-** One or more string to concatinate to str | A new String | ```string.concat(str1,str2)```
includes() | includes(searchString, position) | **searchString:-** A string to be searched for within string. **position:-** The position within the string at which to begin searching for searchString. | A boolean value true and false | ```string.includes(serarchString, position)```
startsWith() | startsWith(searchString, position) | **searchString:-** The character to be searched for all the start if this string. **position:-** The start position at which searchString is expected to be found. | A boolean value true and false | ```string.startsWith(serarchString, position)```
endsWith() | startsWith(searchString, position) | **searchString:-** The character to be searched for all the end if this string. **position:-** The end position at which searchString is expected to be found. | A boolean value true and false | ```string.startsWith(serarchString, position)```
indexOf() | indexOf(searchString, position) | **searchString:-** Substring to search for. **position:-** The method return the index of the first accurrence of the specified substring at a position greaaten than or aqual to position, which defaut to 0. | The index of the first accurrence of searchString found, or -1 if not found. | ```string.indexOf(searchString, positon)```
lastindexOf() | lastindexOf(searchString, position) | **searchString:-** Substring to search for.  **position:-** The method returs the index of the last accurrence of the specified substring at a position less thn or equal to position, which defaults to + Infinity. | The index of the last accurrence of searchString found or -1 if not found | ```lastindexOf(searchString, position)```
match() | match(regexp) | **regexp:-** A regular expression object or any object that has a symbol match method. | String / Array or null if no matches are found | ```string.match(/[A-Z]/g)```
matchAll() | matchAll(regexp) | **regexp:-** A regular expression object or any object that has a symbol matchAll method. | An iterable iterator object of matches or an empty iterator if no matches are found | ```string.matchAll(/[A-Z]/g)```
repeat() | repeat(count) | **count:-** An integer between 0 and + Infinity | A new string | ```string.repeat(5)```
replace() | replace(pattern, replacement) | **pattern:-** A string value and regExp. **replacement:-** It's a string and it's a function | A new string | ```string.replace(pattern,replacement)```
replaceAll() | replaceAll(pattern, replacement) | **pattern:-** A string value and regExp. **replacement:-** It's a string and it's a function | A new string | ```string.replaceAll(pattern, replacement)```
search() | serach(regexp) |**regexp:-** A regular expression | The index of the first match between the regular expression and the given string or -1 if no match was found. | ```string.search(regexp)```
slice() | slice(indexstart, indexend) | **indexstart:-** The index of the first character to include in the retured substring. **indexend:-** The index of the first character to excelude from the returned substring. | A new string | ```string.slice(indexstart, indexend)```
split() | split(separator, limit) | **separator:-** The pattern describling where ech split should occurrence. A string or an object. **limit:-** A non-negative integer specifying a limit on the number of substring to be included in the array. | A new string | ```string.split(separator, limit)```
padStart() | padStart(targetLength, padString) | **targetLength:-** The length of the resulting string onc the current str has been padded. **padStart:-** The string to pad the current str with. | A string to pad specidied taretLength with pdstring appliced from the start. | ```string.padStart(targetLength, limit)```
padEnd() | padEnd(targetLength, padString) | **targetLength:-** The length of the resulting string onc the current str has been padded. **padStart:-** The string to pad the current str with. | A string to pad specidied taretLength with pdstring appliced at the current str. | ```string.padEnd(targetLength, limit)```
