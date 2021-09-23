const wordSearch = (letters, word) => {
    let obj = {};
    for (let i = 0; i < letters.length; i++) {
      const row = letters[i];
      for (let j = 0; j < row.length; j++) {
        if (obj[j]) {
          obj[j].push(row[j]);
        } else {
          obj[j] = [row[j]];
        }
      }
    }
  
    const verticalJoin = Object.values(obj).map((ls) => ls.join(""));
    const horizontalJoin = letters.map((ls) => ls.join(""));
  
    for (l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    for (l of verticalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
  
    return false;
  };
  
  wordSearch(
    [
      ["F", "R", "A", "N", "K", "U", "A", "L"],
      ["S", "E", "I", "N", "F", "E", "L", "D"],
      ["Y", "F", "C", "F", "Q", "U", "A", "L"],
      ["H", "M", "J", "T", "E", "V", "R", "G"],
      ["W", "H", "C", "S", "Y", "E", "R", "L"],
      ["B", "F", "R", "E", "N", "E", "Y", "B"],
      ["U", "B", "T", "W", "A", "P", "A", "I"],
      ["O", "D", "C", "A", "K", "U", "A", "S"],
      ["E", "Z", "K", "F", "Q", "U", "A", "L"],
    ],
    "FRANK"
  );
  
  wordSearch(
    [
      ["S", "H", "C", "F", "Q", "U", "A", "L"],
      ["E", "E", "I", "N", "F", "E", "L", "D"],
      ["I", "L", "C", "F", "Q", "U", "A", "L"],
      ["N", "L", "J", "T", "E", "V", "R", "G"],
      ["F", "O", "C", "S", "Y", "E", "R", "L"],
      ["E", "W", "R", "E", "N", "E", "Y", "B"],
      ["L", "O", "T", "W", "A", "P", "A", "I"],
      ["D", "R", "C", "A", "K", "U", "A", "S"],
      ["E", "L", "K", "F", "Q", "U", "A", "L"],
    ],
    "SEINFELD"
  );
  module.exports = wordSearch;
  