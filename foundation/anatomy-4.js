// IIFE (Immediately Invoked Function Expression)

(function (a, b, c) {
  let value = 100;
  console.log(`Result: ${a + b + c}`);
  console.log(`Value in local scope: ${value}`);
})(2, 3, 4);

(function () {
  let value = 500;
  console.log(`Value in local scope: ${value}`);
})();

(() => {
  let version = '1.0';
  console.log('Arrow version ' + version);
})();

(() => console.log('Arrow function man!'))();
