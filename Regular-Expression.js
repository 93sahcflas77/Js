/***********************************************************************Regular expressions************************************************/
// Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.

// The “long” syntax:
// const regex = new RegExp("pattern", "flags")

// And the “short” one, using slashes "/":

// const regexp = /pattern/  ->  no flags
// const regex = /pattern/gmi   ->  with flags g,m and i (to be covered soon)


//Flags
//1.  i
 const text = "We will, we will rock you";
 const i = text.match(/we/).join("");
 console.log(i);  //we

const i1 = text.match(/we/gi).join(" ");
console.log(i1);  //We we


//2.   g
const g = text.match(/we/g);
console.log(g);  //['we']


//3.    m

const str2 = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

//Without the flag m only the first digit is matched:
console.log(str2.match(/^\d/g)); //1


//Out the flag m only the first digit is matched:
console.log(str2.match(/^\d/gm).join(",")); //1,2,3


// Searching: str.match

let str = "We will, we will rock you";

console.log(str.match(/we/gi));

// // If there’s no such flag it returns only the first match in the form of an array, 
// // with the full match at index 0 and some additional details in properties:

let str1 = "We will, we will rock you";

let result1 = str1.match(/we/i);
console.log(result1);  //['We', index: 0, input: 'We will, we will rock you', groups: undefined]

console.log(result1[0]);  //we
console.log(result1.length);  //1



// Replacing: str.replace

let str3 = "We will, we will rock you";

// no flag g
let result2 = str3.replace(/we/i,"I");
console.log(result2);  //I will, we will rock you

// with flag g
let result3 = str3.replace(/we/gi , "I");
console.log(result3);  //I will, I will rock you


const str4 = "I love HTML";
const result4 = str4.replace(/HTML/ , "$& and JavaScript");
console.log(result4);  //I love HTML and JavaScript


const str5 = "I love HTML";
const result5 = str5.replace(/HTML/ , "$` $& and JavaScript");
console.log(result5);  //I love I love  HTML and JavaScript


const str6 = "I love HTML";
const result6 = str6.replace(/HTML/ , "$' and JavaScript");
console.log(result6);  //I love  and JavaScript


const str7 = "I love HTML ";
const result7 = str7.replace(/HTML/ , "$$ and JavaScript");
console.log(result7);  //I love $ and JavaScript 



// Character classes

const str8 = "+7(903)-123-45-67";
const regex = /\d/;
console.log(str8.match(regex).join(""));  //7

const str9 = "+7(903)-123-45-67";
const regex1 = /\d/g;
console.log(str9.match(regex1));  //['7', '9', '0', '3', '1', '2', '3', '4', '5', '6', '7']
console.log(str9.match(regex1).join(""));  //79031234567


const str10 = "Is there CSS4?";
const regex2 = /CSS\d/;
console.log(str10.match(regex2).join(""));  //CSS4


// Also we can use many character classes:
console.log("I Love  HTML5".match(/\s\w\w\w\w\d/).join(""));  //HTML5


// An alternative, shorter way is to find non-digits \D and remove them from the string:
let str11 = "+7(903)-123-45-67";

console.log( str11.replace(/\D/g, "") ); // 79031234567


// A dot is “any character”
console.log("Z".match(/./).join(""));  //Z

const regexp1 = /CS.4/;

console.log( "CSS4".match(regexp1).join("")); // CSS4
console.log( "CS-4".match(regexp1).join("")); // CS-4
console.log( "CS 4".match(regexp1).join("")); // CS 4 (space is also a character)
console.log( "CS4".match(regexp1));  //null

// Pay attention to spaces
console.log("1 - 5".match(/\d-\d/));  //null
console.log("1 - 5".match(/\d - \d/).join(""));  //1 - 5
console.log("1 - 5".match(/\d\s-\s\d/).join(""));  //1 - 5



// Unicode: flag "u" and class \p{...}

console.log('😄'.length); // 2
console.log('𝒳'.length);  //2

// Example: hexadecimal numbers

let regex3 = /x\p{Hex_Digit}\p{Hex_Digit}/u;

console.log("number: xAF".match(regex3).join(""));  //xAF

// Example: Chinese hieroglyphs
// To look for characters in a given writing system we should use Script=<value>, 
// e.g. for Cyrillic letters: \p{sc=Cyrillic}, for Chinese hieroglyphs: \p{sc=Han}

let regex4 = /\p{sc=Han}/gu;

console.log(`Hello Привет 你好 123_456`.match(regex4).join(" "));   //你 好

// Example: currency

let regex5 = /\p{Sc}\d/gu;

let str12 = `Prices: $2, €1, ¥9`;
console.log(str12.match(regex5));  // ['$2', '€1', '¥9']

let regex6 = /\p{Ll}/gu;

let str13 = `prices`;
console.log(str13.match(regex6).join(""));  // prices




// Anchors: string start ^ and end $

// let’s test if the text starts with Mary:
let str14 = "Mary had a little lamb";

console.log(/^Mary/.test(str14));  //true
// ^Mary means: “string start and then Mary”.

console.log(/lamb$/.test(str14));  //true


// Testing for a full match

// In regular expressions language that’s \d\d:\d\d:

const GoodInput = "12:34";
const BadInput = "12:345";

let regex7 = /^\d\d:\d\d$/;

console.log(regex7.test(GoodInput));  //true
console.log(regex7.test(BadInput));  //false



// Multiline mode of anchors ^ $, flag "m"

const str15 = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

const regex8 = /^\d/gm;
console.log(str15.match(regex8));  //['1', '2', '3']

// Without the flag m only the first digit is matched:

let str16 = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

console.log( str16.match(/^\d/g) ); // 1

// Searching at line end $
let str19 = `Winnie: 1
Piglet: 2
Eeyore: 3`;

console.log(str19.match(/\d$/gm));  //['1', '2', '3']

// Searching for \n instead of ^ $
let str20 = `Winnie: 1
Piglet: 2
Eeyore: 3`;

console.log( str20.match(/\d\n/g) ); // 1\n,2\n



// Word boundary: \b
console.log("Hello , Java!".match(/\bJava\b/).join(""));  //Java
console.log("Hello Javascript!".match(/\bJava\b/));  //null

console.log( "Hello, Java!".match(/\bHello\b/) ); // Hello
console.log( "Hello, Java!".match(/\bJava\b/) );  // Java
console.log( "Hello, Java!".match(/\bHell\b/) );  // null (no match)
console.log( "Hello, Java!".match(/\bJava!\b/) ); // null (no match)


console.log("1 23 456 78 54".match(/\b\d\d\b/g));  //['23', '78', '54']
console.log("12,34,54".match(/\b\d\d\b/g).join(","));  //12,34,54


// Escaping, special characters

// Escaping  \.
console.log("Cheaper 5.1".match(/\d\.\d/).join(""));  //5.1
// console.log("Cheapter 511".match(/\d\.\d/).join(""));  //null (looking for a real dot \.)

// The example below looks for a string "g()"
console.log("function g()".match(/\g\(\)/).join(""));  //g()

console.log("1\\2".match(/\\/).join(""));  //  \


// A slash

// Here’s what a search for a slash '/' looks like:
console.log("/".match(/\//));  //  "/"

// a regexp using new RegExp
console.log("/".match(new RegExp("/")));  //  "/

// new RegExp
let regex9 = new RegExp("\d\.\d");
console.log("Chapter 5.1".match(regex9));  //null

let regex10 = /\d\.\d/;
console.log("Chapter 5.1".match(regex10));  //5.1

// Here’s how “\d.\d” is perceived:
console.log("\d\.\d");  //d.d

let regex11 = "\\d\\.\\d";
console.log(regex11); //\d\.\d

let regex12 = new RegExp(regex11);

console.log("Chapter 5.1".match(regex12));  //5.1



// Sets and ranges [...]


// Sets
console.log("abc".match(/[abc]/g));  //['a', 'b', 'c']

// find [t or m], and then "op"
console.log("Mop top".match(/[tm]op/gi));  //['Mop', 'top']

// find "V", then [o or i], then "la"
console.log("Voila".match(/V[oi]la/));   //null\


const regex16 = /cha[^an]dan/;
console.log("chagdan".match(regex16));  //['chagdan', index: 0, input: 'chagdan', groups: undefined]


// Ranges
console.log("Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g));  //['xAF']


// Excluding ranges
const regex13 = /[^\dA-z]/gi;
console.log("alice15@gmail.com".match(regex13).join(""));  //@.


// In the example below the regexp [-().^+] looks for one of the characters -().^+:
var regex14 = /[-().^+]/g;
console.log("1+2-(".match(regex14));  //['+', '-', '(']

regex14 = /[\-\(\)\.\^\+]/g;
console.log("1+2-(".match(regex14));  //['+', '-', '(']

// Java[^script]
// We have a regexp /Java[^script]/.

const regex15 = /Java[^script]/;

console.log("Java".match(regex15));  //null

console.log("JavaScript".match(regex15));    //'JavaS'

// Find the time as hh:mm or hh-mm
// Write a regexp to find time:
var regexp17 = /your regexp/g;
regexp17 = /\d\d[:-]\d\d/g

console.log( "Breakfast at 09:00. Dinner at 21-30".match(regexp17) ); // 09:00, 21-30



// Quantifiers +, *, ? and {n}

// Quantity {n}
// The exact count: {5}
// \d{5} denotes exactly 5 digits, the same as \d\d\d\d\d.

const regex17 = /\d{5}/;

console.log("I'm 12345 years old".match(regex17).join(""));  //12345


// The range: {3,5}, match 3-5 times
console.log("I'm not 12, but 1234 years old".match(/\d{3,5}/));  //1234

// Then a regexp \d{3,} looks for sequences of digits of length 3 or more:
console.log("I'm not 12, but 34567887655689 years old".match(/\d{3,}/));  //34567887655689

let str21 = "+7(903)-123-45-67";
let number = str21.match(/\d{1,}/g);

console.log(number.join(""));   //79031234567


// Shorthands

// + -> Means “one or more”, the same as {1,}.
let str22 = "7(903)-123-45-67 Chanda Thakur";

console.log(str22.match(/\d+/g));  //['7', '903', '123', '45', '67']
console.log(str22.match(/\D+/g)) ;  // ['(', ')-', '-', '-', ' Chanda Thakur']

let str23 = "cha@_$ dan";
console.log(str23.match(/\w/g));   //['c', 'h', 'a', '_', 'd', 'a', 'n']


//?   -> Means “zero or one”, the same as {0,1}. In other words, it makes the symbol optional.

let str24 = "Should I write color or colour?";
console.log(str24.match(/colou?r/g)); //['color', 'colour']


//*   -> Means “zero or more”, the same as {0,}. That is, the character may repeat any times or be absent.

console.log("100 10 1".match(/\d0*/g));  // ['100', '10', '1']

// Compare it with + (one or more):
console.log("100 10 1".match(/\d0+/g));   //['100', '10']


// More examples

// Regexp for decimal fractions (a number with a floating point): \d+\.\d+
console.log("0 1 123.345345ff6 7890".match(/\d+\.\d+/g));    //['123.345345']



// Regexp for an “opening HTML-tag without attributes”, such as <span> or <p>.
// The simplest one: /<[a-z]+>/i
console.log("<body>......</body>".match(/<[a-z]+>/gi));  //['<body>']

// Improved: /<[a-z][a-z0-9]*>/i
console.log("<h1>Hi!</h1>".match(/<[a-z][a-z0-9]>/gi)); //['<h1>']

// Regexp “opening or closing HTML-tag without attributes”: /<\/?[a-z][a-z0-9]*>/i
console.log("<h1>Hi!</h1>".match(/<\/?[a-z][a-z0-9]*/gi));  //['<h1', '</h1']


// Create a regexp to find ellipsis: 3 (or more?) dots in a row.
const regex18 = /your regexp/g;
const regex19 = /\.{3,}/g
console.log( "Hello!... How goes?.....".match(regex19) ); // ..., .....


// Create a regexp to search HTML-colors written as #ABCDEF: first # and then 6 hexadecimal characters.
let regex20 = /...your regexp.../

let regex21 = /#\d{6}/g
let str25 = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
// alert( str.match(regexp) )  // #121212,#AA00ef
console.log(str25.match(regex21));  //['#121212', '#123456']



// Greedy and lazy quantifiers

// Greedy search
const regex22 = /".+"/g;
const str26 = 'a "witch" and her "broom" is one';
console.log(str26.match(regex22).join(""));  //"witch" and her "broom"


// Lazy mode
// Laziness is only enabled for the quantifier with ?.
const regex23 = /".+?"/g;
const str27 = 'a "witch" and her "broom" is one';
console.log(str27.match(regex23).join(""));  //"witch""broom"



// Other quantifiers remain greedy.
console.log("123 456".match(/\d+ \d+?/g).join(""));  //123 4


// Alternative approach
// In our case we can find quoted strings without lazy mode using the regexp "[^"]+":

const regex24 = /"[^"]+"/g;
const str28 = 'a "witch" and her "broom" is one';
console.log(str28.match(regex24).join(" "));  //"witch" "broom"


// Let’s see an example where lazy quantifiers fail and this variant works right.

// The first idea might be: /<a href=".*" class="doc">/g.

const str29 = '...<a href="link" class="doc">...';
const regex25 = /<a href=".*" class="doc">/g;
console.log(str29.match(regex25));  //['<a href="link" class="doc">']

const str30 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
const regex26 = /<a href=".*" class="doc">/g;
console.log(str30.match(regex26));  //['<a href="link1" class="doc">... <a href="link2" class="doc">']


// Let’s modify the pattern by making the quantifier .*? lazy:

const str31 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
const regex27= /<a href=".*?" class="doc">/g;
console.log(str31.match(regex27).join(" "));   //<a href="link1" class="doc"> <a href="link2" class="doc">



let str32 = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
let str33 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
let regex28 = /<a href="[^"]*" class="doc">/g;

// Works!
console.log( str32.match(regex28) ); // null, no matches, that's correct
console.log( str33.match(regex28) ); // <a href="link1" class="doc">, <a href="link2" class="doc">

// A match for /d+? d+?/
console.log("123 456".match(/\d+? \d+?/g));  //123 4


// Find HTML comments
let str34 = `... <!-- My -- comment
 test --> ..  <!----> ..
`;
const regex29 = /<!--.*?-->/gs;
console.log(str34.match(regex29).join(" "));   //<!-- My -- comment test --> <!---->


// Find HTML tags
const str35 = '<> <a href="/"> <input type="radio" checked> <b>';
const regex30 = /<[^<>]+/g;
console.log(str35.match(regex30).join(" "));  //<a href="/" <input type="radio" checked <b




// Capturing groups
// A part of a pattern can be enclosed in parentheses (...). 

// Example: gogogo
// Without parentheses, the pattern go+ means g character, followed by o repeated one or more times. For instance, goooo or gooooooooo.

// Parentheses group characters together, so (go)+ means go, gogo, gogogo and so on.

const regex31 = /(go)+/gi;
const str36 = "Gogogo now!";
console.log(str36.match(regex31).join(""));  //Gogogo

// Example: domain
// mail.com
// users.mail.com
// smith.users.mail.com
// In regular expressions that’s (\w+\.)+\w+:

// We can fix it by replacing \w with [\w-] in every word except the last one: ([\w-]+\.)+\w+.

const str37 = "site.com my.site.com";
console.log(str37.match(/(\w+\.)+\w+/g).join(" "));  //site.com my.site.com


// Example: email