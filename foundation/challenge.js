// challenge

function myRange(...nums) {
  let arrLength = nums.length;
  let result = [];

  if (arrLength == 0) {
    console.log('No numbers informed');
  } else if (arrLength == 1) {
    let last = nums[arrLength - 1];
    for (let i = 1; i <= last; i++) {
      result.push(i);
    }
  } else if (arrLength == 2) {
    let elem01 = nums[0];
    let elem02 = nums[1];

    if (elem01 > elem02) {
      for (let i = elem01; i >= elem02; i--) {
        result.push(i);
      }
    } else if (elem01 < elem02) {
      for (let i = elem01; i <= elem02; i++) {
        result.push(i);
      }
    } else {
      console.log('Type different numbers');
    }
  } else if (arrLength == 3) {
    let elem01 = nums[0];
    let elem02 = nums[1];
    let step = nums[arrLength - 1];

    if (elem01 > elem02) {
      for (let i = elem01; i >= elem02; i -= step) {
        result.push(i);
      }
    } else if (elem01 < elem02) {
      for (let i = elem01; i <= elem02; i += step) {
        result.push(i);
      }
    } else {
      console.log('The first two numbers should be different');
    }
  }
  console.log(result);
}

myRange(10);
myRange(5);

myRange(6, 11);
myRange(6, 2);

myRange(5, 8);
myRange(10, 2);

myRange(10, 19, 2);
myRange(8, -3, 4);

myRange(50, 1, 3);
