class SearchSuggestionSystem {
  constructor(products) {
    // Sort the products lexicographically
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const suggestions = [];
    let prefix = '';

    for (let char of searchWord) {
      prefix += char;
      // Filter products that start with the current prefix
      const matches = this.products.filter(product => product.startsWith(prefix));
      // Add up to 3 matches for the current prefix
      suggestions.push(matches.slice(0, 3));
    }

    return suggestions;
  }
}

// Updated example usage:
const products = ["apple", "apricot", "banana", "blueberry", "blackberry", "avocado"];
const searchWord = "ap";

const system = new SearchSuggestionSystem(products);
const result = system.getSuggestions(searchWord);

// Print the result
console.log(result);
