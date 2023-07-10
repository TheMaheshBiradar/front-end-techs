const regions = ["Europe", "APAC", "BeneLux", "USA", "DACH", "ROE"];
const sortedValues = regions.toSorted();
console.log("SORTED -- ",sortedValues); 
console.log("INPUT-----",regions); 

const regionsForReversal = ["Europe", "APAC", "BeneLux", "USA", "DACH", "ROE"];

console.log(Array.prototype.toReversed.call(regionsForReversal));


const regionsForFindLast = ["Europe", "APAC", "BeneLux", "USA", "DACH", "ROE"];

const countryWithThreeLetters = regionsForFindLast.findLast((element) => element.length === 3);

console.log("countryWithThreeLetters", countryWithThreeLetters);


