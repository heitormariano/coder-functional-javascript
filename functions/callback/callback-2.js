function firstAction(callback) {
  console.log('First Action!');
  setTimeout(callback, 2000);
}

function secondAction() {
  console.log('Second Action!');
}

setTimeout(() => firstAction(secondAction), 4000);
