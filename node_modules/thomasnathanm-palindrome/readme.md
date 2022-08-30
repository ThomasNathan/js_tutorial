# Phrase object (with palindrome detector)

This is a sample NPM module created in [*Learn Enough JavaScript to Be Dangerous*](https://www.learnenough.com/javascript-tutorial) by Michael Hartl.

The module can be used as follows:

$ npm install --global thomasnathan-palindrome
$vim test.js

let Phrase = require("thomasnathan-palindrome");

let napoleanslament = new Phrase("Able was I, ere I saw Elba.");

console.log(napoleanslament.palindrome());

$ node test.js

true

```
