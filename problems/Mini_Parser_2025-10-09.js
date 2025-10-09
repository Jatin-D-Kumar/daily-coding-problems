
/**
 * Remove all tags from the string and return concatenated text.
 * @param {string} s
 * @return {string}
 */
function miniParser(s) {
  /**
   * Recursively parse the string starting at index `pos`.
   * @param {number} pos - current index
   * @return {[string, number]} - [extracted text, index after
   *                               current closing tag (or end)]
   */
  function parse(pos) {
    let res = '';
    while (pos < s.length) {
      if (s[pos] !== '<') {          // normal character
        res += s[pos++];
      } else {                       // a tag starts
        // find the matching '>'
        const closeIdx = s.indexOf('>', pos);
        if (s[pos + 1] === '/') {   // closing tag
          return [res, closeIdx + 1];
        } else {                     // opening tag
          const [inner, nextPos] = parse(closeIdx + 1);
          res += inner;
          pos = nextPos;             // skip over the closing tag
        }
      }
    }
    return [res, pos];
  }

  return parse(0)[0];
}

// ------------- example usage -----------------
const examples = [
  "<div>hello</div>",
  "<div><p>ab</p>cd</div>",
  "<a><b>hi</b><c>world</c></a>",
  "<foo><bar>Text</bar>More</foo>"
];

for (const ex of examples) {
  console.log(`Input : ${ex}`);
  console.log(`Output: ${miniParser(ex)}`);
  console.log('---');
}
