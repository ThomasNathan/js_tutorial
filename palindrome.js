// Reveses a string.

// Adds 'reverse' to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Adds a 'blank' boolean to all strings.
String.prototype.blank = function() {
  return this == '';
}

Array.prototype.last = function() {
  return this[this.length - 1];
}

// // Returns an array of username and domain
// function emailParts(email) {
//   let processedContent = email.toLowerCase();
//   return Array.from(processedContent);
// }

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  // this.louder = function() {
  //   let processedContent = this.content.toUpperCase();
  //   return processedContent;
  // }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }

}

TranslatedPhrase.prototype = new Phrase();
