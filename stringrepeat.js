let input = `


  `;
input = input.toUpperCase();
input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"\[\]]/g, "");
input = input.replace(/[\n]/g, " ");
input = input.replace(/\s{2,}/g, " ");
console.log(input.length);
let wordsArray = input.split(" ");
let wordMatches = [];
let results = [];

// start with two word phrases,
// see if a third matches, if not add to final return array etc
// cuts out a lot of bullshit

function getPhrases(n, array) {
  if (n === 2) {
    let asdf;
  }
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
  for (let i = index + 1; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
}

function already(phrase, ret) {
  let pWordArray = phrase.split(" ");
  let rete = false;
  ret.forEach(element => {
    let phs = getPhrases(pWordArray.length - 1, element.split(" "));

    phs.forEach(e => {
      if (e === phrase) {
        rete = true;
        return;
      }
    });
  });

  return rete;
}

function theThing1(array) {
  let ret = [];
  let match = true;
  for (let i = 1; match; i++) {
    let sameBef;
    let sameAft;

    sameBef = ret.length;

    let sames = comparePhrases(getPhrases(i, wordsArray));

    for (let j = 0; j < sames.length; j++) {
      // if (!already(sames[j], ret)) {
      ret.push(sames[j]);

      // }
    }
    sameAft = ret.length;
    if (sameAft === sameBef) {
      match = false;
    }
  }
  sResults = getUnique(ret);
  sResults.sort(function(a, b) {
    b.length - a.length;
    return b.length - a.length;
  });

  console.log(removePartials(sResults));
  // console.log(ret);
}
function Inds(start) {
  this.start = start;
  this.end = start;
  this.phrase = "";
}
function Match(word, i1, i2) {
  this.word = word;
  this.length = 1;
  this.inds = [];
  if (i1 !== undefined) {
    this.inds.push(new Inds(i1));
    if (i2) {
      this.inds.push(new Inds(i2));
    }
  }
}

function findMatches(mainArray) {
  let start = 0;
  let is = [];
  for (let i = start; i < mainArray.length; i++) {
    for (let j = i + 1; j < mainArray.length; j++) {
      if (mainArray[i] === mainArray[j]) {
        let addNewMatch = true;
        wordMatches.forEach(e => {
          if (e.word === mainArray[i]) {
            let addI = true;
            e.inds.forEach(i => {
              if (i.start === j) {
                addI = false;
              }
            });
            if (addI) {
              e.inds.push(new Inds(j));
            }
            addNewMatch = false;
          }
        });
        if (addNewMatch) {
          wordMatches.push(new Match(mainArray[i], i, j));
        }
      }
    }
  }

  wordMatches.forEach(singleMatch => {
    for (let i = 0; i < singleMatch.inds.length; i++) {
      for (let j = i + 1; j < singleMatch.inds.length; j++) {
        if (i < singleMatch.inds.length && j < singleMatch.inds.length) {
          singleMatch.inds[i].end = singleMatch.inds[i].start;
          singleMatch.inds[j].end = singleMatch.inds[j].start;
          checkNextWord(singleMatch, i, j, singleMatch.word);
        }
      }
    }
  });
  let refinedResults = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i].includes(" ")) {
      refinedResults.push(results[i]);
    }
  }
  soloResults = getUnique(refinedResults);
  soloResults.sort(function(a, b) {
    b.length - a.length;
    return b.length - a.length;
  });
  let basicResults = removePartials(soloResults);
  console.log(basicResults);
}

function checkNextWord(match, i, j, r) {
  if (r === "A") {
    let asdff;
  }
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

function getUnique(array) {
  var uniqueArray = [];

  // Loop through array values
  for (i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
function removePartials(array) {
  return array;
}
function timeFunction(fn) {
  let s = new Date();
  fn(wordsArray);
  let e = new Date();
  return e - s;
}

///theThing1(wordsArray);
//findMatches(wordsArray);
// let time1 = timeFunction(theThing1);
// let time2 = timeFunction(findMatches);
// console.log(time1, time2);
