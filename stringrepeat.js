///////////////////////// EXECUTION /////////////////////////
let input = `

this this this is this is is is a this is test is a test is a
  `;

let wordsArray = buildInputArray(input);

console.log(method1(wordsArray));
//findMatches(wordsArray);
// let time1 = timeFunction(theThing1);
// let time2 = timeFunction(findMatches);
// console.log(time1, time2);

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

function iPair(i, j, word) {
  this.i = i;
  this.j = j;
  this.phrase = word + " ";
}

function findWordMatches(mainArray) {
  let start = 0;
  let is = [];
  for (let i = start; i < mainArray.length; i++) {
    for (let j = i + 1; j < mainArray.length; j++) {
      if (mainArray[i] === mainArray[j]) {
        is.push(new iPair(i, j, mainArray[i]));
      }
    }
  }
}

function buildMatches() {}

function checkNextWord(match, i, j, r) {
  if (wordsArray[match.inds[i].end + 1] === wordsArray[match.inds[j].end + 1]) {
    r += " " + wordsArray[match.inds[i].end + 1];
    match.inds[i].end++;
    match.inds[j].end++;
    checkNextWord(match, i, j, r);
  } else {
    results.push(r);
    return false;
  }
}

///////////////////////// GENERAL /////////////////////////

function buildInputArray(input) {
  input = input.toUpperCase();
  input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"\[\]]/g, "");
  input = input.replace(/[\n]/g, " ");
  input = input.replace(/\s{2,}/g, " ");
  input = input.split(" ");
  return input;
}

function cleanUpResults(array) {
  let uniques = getUnique(array);
  uniques.sort(function(a, b) {
    return b.length - a.length;
  });
  let final = removePartials(uniques);
  return final;
}

function removePartials(array) {
  return array;
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
  fn(wordsArray);
  let e = new Date();
  return e - s;
}
