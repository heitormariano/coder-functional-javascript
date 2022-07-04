// using callbacks

setTimeout(() => {
  console.log('Executing callback 1...');
  setTimeout(() => {
    console.log('Executing callback 2...');
    setTimeout(() => {
      console.log('Executing callback 3...');
    }, 2000);
  }, 2000);
}, 2000);

// using promises

// function that returns a promise
function WaitFor(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log('Using a new promise');
      resolve();
    }, time);
  });
}

WaitFor().then(WaitFor).then(WaitFor).then(WaitFor);
