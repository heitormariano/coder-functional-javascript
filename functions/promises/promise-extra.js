const myPromise = new Promise((resolve, reject) => {
  const name = 'Heitor';
  if (name === 'Heitor') {
    resolve('user Heitor found');
  } else {
    reject('user Heitor not found');
  }
});

myPromise.then(data => console.log(data));
