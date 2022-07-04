// promises
// resolve and reject are callbacks (functions)
const myPromise = new Promise(function (resolve, reject) {
  resolve('Testing my promise....');
});

myPromise.then(function (data) {
  console.log(data);
});

const myPromise02 = new Promise(resolve => resolve('Using promises'));

const getUpperCase = data => data.toUpperCase();
const getFirstWord = dataUpperCase => {
  const words = dataUpperCase.split(' ');
  return words[0];
};
const getFirstLetter = firstWord => firstWord[0];
const getFinalResult = firstLetter => console.log(`Result: ${firstLetter}`);

myPromise02.then(getUpperCase).then(getFirstWord).then(getFirstLetter).then(getFinalResult);
