
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
        if