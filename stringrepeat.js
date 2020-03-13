///////////////////////// EXECUTION /////////////////////////
let input = ``;

let wordsArray = buildInputArray(input);

// let time1 = timeFunction(method1);
// let time2 = timeFunction(method2);
// console.log(time1, time2);

method33(wordsArray);

///////////////////////// METHOD 3 /////////////////////////
// works, but don't include results contained in longer results

function method33(inputArray) {
  let ret = [];
  let match = true;
  let obj = {};
  for (let i = 1; match; i++) {
    let before = ret.length;
    let phrasesOfiLength = getPhrases(i, inputArray);
    let matches = comparePhrases(phrasesOfiLength);

    // add matches of length i to final
    for (let i = 0; i < matches.length; i++) {
      ret.push(matches[i]);
    }

    matches.forEach(e => {
      let c = 0;
      phrasesOfiLength.forEach(ee => {
        if (e == ee) {
          c++;
        }
      });
      obj[e] = c;
    });

    //only continue if there is a new match
    let after = ret.length;
    if (after === before) {
      match = false;
    }
  }
  console.log(obj);
  let finalResults = cleanUpResults(ret);
  return finalResults;
}

function method3(array) {
  allPhrasesArray = [];
  for (let i = 2; i < array.length / 2 + 1; i++) {
    let temp = getPhrases(i, array);
    temp.forEach(e => {
      allPhrasesArray.push(e);
    });
  }
  console.log(allPhrasesArray.length);
}

///////////////////////// METHOD 1 /////////////////////////

function method1(inputArray) {
  let ret = [];
  let match = true;
  for (let i = 1; match; i++) {
    let before = ret.length;
    let phrasesOfiLength = getPhrases(i, inputArray);
    let matches = comparePhrases(phrasesOfiLength);

    // add matches of length i to final
    for (let i = 0; i < matches.length; i++) {
      ret.push(matches[i]);
    }

    //only continue if there is a new match
    let after = ret.length;
    if (after === before) {
      match = false;
    }
  }

  let finalResults = cleanUpResults(ret);
  return finalResults;
}

function getPhrases(n, array) {
  // returns all sets of words with n words
  let ret = [];
  for (let i = 0; i < array.length; i++) {
    let str = "";
    let add = true;
    for (let j = 0; j < n; j++) {
      if (array[i + j]) {
        str += array[i + j] + " ";
      } else {
        add = false;
      }
    }
    if (add) {
      ret.push(str);
    }
  }
  return ret;
}

function comparePhrases(array) {
  // returns array of phrases that match (of cerain length)
  let ret = [];
  for (let i = 0; i < array.length; i++) {
    if (contains(array, array[i], i)) {
      ret.push(array[i]);
    }
  }
  return ret;
}

function contains(array, element, index) {
  // does array contain element after index
  for (let i = index + 1; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
}

///////////////////////// METHOD 2 /////////////////////////

function method2(array) {
  let pairs = findWordMatches(array);
  let fullMatches = buildMatches(pairs, array);
  let finalResults = cleanUpResults(fullMatches);
  return finalResults;
}

function findWordMatches(array) {
  let start = 0;
  let pairs = [];
  for (let i = start; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        pairs.push(new iPair(i, j, array[i]));
      }
    }
  }
  return pairs;
}

function buildMatches(pairs, array) {
  let ret = [];
  for (let i = 0; i < pairs.length; i++) {
    let r = array[pairs[i].I];
    let match = checkNextWord(pairs[i].I, pairs[i].J, array, r);
    ret.push(match + " ");
  }
  return ret;
}

function checkNextWord(i, j, array, r) {
  while (array[i + 1] === array[j + 1]) {
    i++;
    j++;
    r += " " + array[i];
  }
  return r;
}

function iPair(i, j, word) {
  this.I = i;
  this.J = j;
  this.phrase = word + " ";
}

///////////////////////// GENERAL /////////////////////////

function buildInputArray(input) {
  input = input.toUpperCase();
  input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"\[\]]/g, "");
  input = input.replace(/[\n]/g, " ");
  input = input.replace(/\s{2,}/g, " ");
  input = input.split(" ");
  input = input.filter(e => e);
  return input;
}

function getCounts(array) {
  var counts = {};
  array.forEach(x => {
    counts[x] = (counts[x] || 0) + 1;
  });
  return counts;
}

function cleanUpResults(array) {
  let uniques = getUnique(array);
  uniques.sort(function(a, b) {
    return a.length - b.length;
  });
  let final = removePartials(uniques);
  final.sort(function(a, b) {
    return b.length - a.length;
  });
  return final;
}

function removePartials(array) {
  let ret = [];
  for (let i = 0; i < array.length; i++) {
    let include = true;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j].includes(array[i])) {
        include = false;
        break;
      }
    }
    if (include) {
      ret.push(array[i]);
    }
  }
  return ret;
}

function getUnique(array) {
  var uniqueArray = [];
  for (i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

function timeFunction(fn) {
  let s = new Date();
  console.log(fn(wordsArray));
  let e = new Date();
  return e - s;
}
