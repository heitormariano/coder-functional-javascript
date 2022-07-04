function randomIntFromInterval(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise(function (resolve) {
    const result = Math.floor(Math.random() * (max - min + 1) + min);
    resolve(result);
  });
}

randomIntFromInterval(10, 50).then(value => console.log(`Result: ${value}`));

//testing...
randomIntFromInterval(10, 30)
  .then(value => value + 10)
  .then(value => value + 20)
  .then(console.log);
