// example extracted in MDN web docs page

function resolveAfter2Second() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Promise resolved!');
    }, 2000);
  });
}

async function myAsyncCall() {
  console.log('Start...');
  const data = await resolveAfter2Second();
  console.log(data);
  console.log('End...');
}

myAsyncCall();
