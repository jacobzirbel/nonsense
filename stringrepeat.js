///////////////////////// EXECUTION /////////////////////////
let input = `

The unanimous Declaration of the thirteen united States of America, When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.

We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.--Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world.

He has refused his Assent to Laws, the most wholesome and necessary for the public good.

He has forbidden his Governors to pass Laws of immediate and pressing importance, unless suspended in their operation till his Assent should be obtained; and when so suspended, he has utterly neglected to attend to them.

He has refused to pass other Laws for the accommodation of large districts of people, unless those people would relinquish the right of Representation in the Legislature, a right inestimable to them and formidable to tyrants only.

He has called together legislative bodies at places unusual, uncomfortable, and distant from the depository of their public Records, for the sole purpose of fatiguing them into compliance with his measures.

He has dissolved Representative Houses repeatedly, for opposing with manly firmness his invasions on the rights of the people.

He has refused for a long time, after such dissolutions, to cause others to be elected; whereby the Legislative powers, incapable of Annihilation, have returned to the People at large for their exercise; the State remaining in the mean time exposed to all the dangers of invasion from without, and convulsions within.

He has endeavoured to prevent the population of these States; for that purpose obstructing the Laws for Naturalization of Foreigners; refusing to pass others to encourage their migrations hither, and raising the conditions of new Appropriations of Lands.

He has obstructed the Administration of Justice, by refusing his Assent to Laws for establishing Judiciary powers.

He has made Judges dependent on his Will alone, for the tenure of their offices, and the amount and payment of their salaries.

He has erected a multitude of New Offices, and sent hither swarms of Officers to harrass our people, and eat out their substance.

He has kept among us, in times of peace, Standing Armies without the Consent of our legislatures.

He has affected to render the Military independent of and superior to the Civil power.

He has combined with others to subject us to a jurisdiction foreign to our constitution, and unacknowledged by our laws; giving his Assent to their Acts of pretended Legislation:

For Quartering large bodies of armed troops among us:

For protecting them, by a mock Trial, from punishment for any Murders which they should commit on the Inhabitants of these States:

For cutting off our Trade with all parts of the world:

For imposing Taxes on us without our Consent:

For depriving us in many cases, of the benefits of Trial by Jury:

For transporting us beyond Seas to be tried for pretended offences

For abolishing the free System of English Laws in a neighbouring Province, establishing therein an Arbitrary government, and enlarging its Boundaries so as to render it at once an example and fit instrument for introducing the same absolute rule into these Colonies:

For taking away our Charters, abolishing our most valuable Laws, and altering fundamentally the Forms of our Governments:

For suspending our own Legislatures, and declaring themselves invested with power to legislate for us in all cases whatsoever.

He has abdicated Government here, by declaring us out of his Protection and waging War against us.

He has plundered our seas, ravaged our Coasts, burnt our towns, and destroyed the lives of our people.

He is at this time transporting large Armies of foreign Mercenaries to compleat the works of death, desolation and tyranny, already begun with circumstances of Cruelty & perfidy scarcely paralleled in the most barbarous ages, and totally unworthy the Head of a civilized nation.

He has constrained our fellow Citizens taken Captive on the high Seas to bear Arms against their Country, to become the executioners of their friends and Brethren, or to fall themselves by their Hands.

He has excited domestic insurrections amongst us, and has endeavoured to bring on the inhabitants of our frontiers, the merciless Indian Savages, whose known rule of warfare, is an undistinguished destruction of all ages, sexes and conditions.

In every stage of these Oppressions We have Petitioned for Redress in the most humble terms: Our repeated Petitions have been answered only by repeated injury. A Prince whose character is thus marked by every act which may define a Tyrant, is unfit to be the ruler of a free people.

Nor have We been wanting in attentions to our Brittish brethren. We have warned them from time to time of attempts by their legislature to extend an unwarrantable jurisdiction over us. We have reminded them of the circumstances of our emigration and settlement here. We have appealed to their native justice and magnanimity, and we have conjured them by the ties of our common kindred to disavow these usurpations, which, would inevitably interrupt our connections and correspondence. They too have been deaf to the voice of justice and of consanguinity. We must, therefore, acquiesce in the necessity, which denounces our Separation, and hold them, as we hold the rest of mankind, Enemies in War, in Peace Friends.

We, therefore, the Representatives of the united States of America, in General Congress, Assembled, appealing to the Supreme Judge of the world for the rectitude of our intentions, do, in the Name, and by Authority of the good People of these Colonies, solemnly publish and declare, That these United Colonies are, and of Right ought to be Free and Independent States; that they are Absolved from all Allegiance to the British Crown, and that all political connection between them and the State of Great Britain, is and ought to be totally dissolved; and that as Free and Independent States, they have full Power to levy War, conclude Peace, contract Alliances, establish Commerce, and to do all other Acts and Things which Independent States may of right do. And for the support of this Declaration, with a firm reliance on the protection of divine Providence, we mutually pledge to each other our Lives, our Fortunes and our sacred Honor.


`;

let wordsArray = buildInputArray(input);

// let time1 = timeFunction(method1);
// let time2 = timeFunction(method2);
// console.log(time1, time2);

method33(wordsArray);

///////////////////////// METHOD 3 /////////////////////////
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

    matches.forEach(e=>{
      let c = 0;
      phrasesOfiLength.forEach(ee =>
        {
          if(e == ee){
            c++;
          }
        }
      );
        obj[e] = c;
    }
      );
      console.log(obj)
;
    //only continue if there is a new match
    let after = ret.length;
    if (after === before) {
      match = false;
    }
  }

  let finalResults = cleanUpResults(ret);
  return finalResults;
}



function method3(array){
  allPhrasesArray = [];
  for(let i = 2 ; i<array.length/2+1;i++){
    let temp = getPhrases(i, array);
    temp.forEach(
      e => {
        allPhrasesArray.push(e);
      }
    )
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
