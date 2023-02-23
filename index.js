// let fnCheckDatatype_Every = (arr, sDatatype) => {
//   return arr.every((e) => {
//     return typeof e === sDatatype;
//   }, sDatatype);
// };
// console.log(fnCheckDatatype_Every(['H', 'I', 'H'], 'string'));
// console.log(fnCheckDatatype_Every(['H', 4, 'H'], 'string'));

// let fnIsEven_loop = (arr) => {
//   return arr.some((el) => {
//     return el % 2 == 0;
//   });
// };

// console.log(fnIsEven_loop([1, 3, 5]));

// let fnIsEven_loop = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(fnIsEven_loop([1, 3, 5]));
// console.log(fnIsEven_loop([1, 3, 5, 6]));

// let highestMarks = (arr) => {
//   let tempArray = [];

//   return arr.filter((s) => {
//     return s.fPercentage > 90;
//   });
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].fPercentage > 90.0) {
//       tempArray.push(arr[i]);
//     }
// };

//   return tempArray;
// };
// aStudent = [
//   { sStudentId: '001', fPercentage: 91.2 }, //arr[o]
//   { sStudentId: '002', fPercentage: 78.7 }, //arr[1]
//   { sStudentId: '003', fPercentage: 62.9 }, //arr[2]
//   { sStudentId: '004', fPercentage: 81.4 }, //arr[3]
// ];
// console.log(highestMarks(aStudent));

// let removeUndefined = (arr) => {
//   return arr.filter((uf) => {
//     return uf;
//   });
// };

// var arr = [1, undefined, 3, undefined, 5];

// console.log(removeUndefined(arr));

// const fnAddDistinction_loop = (arr) => {
//   // for (i = 0; i < arr.length; i++) {
//   //   arr[i].isDistinction = arr[i].fPercentage >= 75 ? true : false;
//   // }
//   // return arr;

// //   return arr.map((i, student, arr) => {
// //     return (student.isDistinction = student.fPercentage >= 75 ? false : true);
// //     return student;
// //   });
// // };

// // aStudent = [
// //   { sStudentId: '001', fPercentage: 91.2 },
// //   { sStudentId: '002', fPercentage: 78.7 },
// //   { sStudentId: '003', fPercentage: 62.9 },
// //   { sStudentId: '004', fPercentage: 81.4 },
// // ];

// // console.log(fnAddDistinction_loop(aStudent));'

// let arr1 = [5, 4, 2, 1];
// let arr2 = [2];
// // let result = arr1.concat(arr2);
// // let result = arr1.sort();
// let result = arr1.reverse();
// console.log(result);

// let arr = [
//   { name: 'customer 1', sales: 500, location: 'NY' },
//   { name: 'customer 1', sales: 200, location: 'NJ' },
//   { name: 'customer 1', sales: 700, location: 'NY' },
//   { name: 'customer 1', sales: 200, location: 'ORD' },
//   { name: 'customer 1', sales: 300, location: 'NY' },
// ];
// function reduceFunc(prev, curr, index, arr) {
//   if (curr.location === 'NY') {
//     prev = prev.sales + Number(curr.sales);
//     console.log(prev);
//   }

//   return prev;
// }

// let totalSales = arr.reduce(reduceFunc);
// console.log(totalSales.sales);

// let emptyArray = [];
// let nonExistantArray = undefined;
// let fineArray = [1, 2, 3, 4, 5];

// if (Array.isArray(emptyArray) && emptyArray.length) output = true;
// else output = false;
// console.log('before push op ' + numberArr);
// numberArr.push('sumit1');
// numberArr.unshift('sumit1', 'anil');
// numberArr.shift();
// console.log('After push op ' + numberArr);

// (Array.isArray(em) && em.length)

// let findElement = (arr, pos) => {
//   let result;
//   for (i = 0; i > 5; i--) {
//     console.log(arr[i]);
//   }
//   console.log((result = arr[i + 1] = arr[i]));
//   // arr[pos] = value;
//   // arr[pos] = value;
//   // arr[] = key
//   // let i;
//   // if (key) {
//   //   arr[i] = key;
//   //   return [i + 1];
//   // }

//   // arr.push(key);
//   // return arr;
// };

// // let arr = [12, 34, 10, 6, 40];

// // // Using a last element as search element
// // let pos = 3;
// // let value = 70;
// // let position = findElement(arr, pos);
// // // for (i = 0; i < arr.length; i++) console.log(arr[i] + ' ');

// let largestThree = (arr) => {
//   let first = (second = third = 0);
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > first) {
//       third = second;
//       second = first;
//       first = arr[i];
//     } else if (arr[i] > second && arr[i] !== first) {
//       third = second;
//       second = arr[i];
//     } else if (arr[i] > third && arr[i] !== second) {
//       third = arr[i];
//     }
//   }
//   // third = first = second = 0;
//   // console.log(third);
//   // for (let i = 0; i < arr.length; i++) {
//   //   // If current element is
//   //   // greater than first
//   //   if (arr[i] > first) {
//   //     third = second;
//   //     second = first;
//   //     first = arr[i];
//   //   }

//   //   // If arr[i] is in between first
//   //   // and second then update second
//   //   else if (arr[i] > second) {
//   //     third = second;
//   //     second = arr[i];
//   //   } else if (arr[i] > third) third = arr[i];
//   // }

//   console.log(
//     'Three largest elements are ' + first + ' ' + second + ' ' + third + '<br>'
//   );
// };

// let arr = [10, 4, 3, 50, 23, 89, 3783, 092928, 6252542, 90];
// largestThree(arr);

// let = secondLargest = (arr) => {
//   let largest = Number.MAX_VALUE;
//   let second = Number.MAX_VALUE;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = a[i];
//     } else if (arr[i] > second && a[i] !== first) {
//       second = a[i];
//     } else {
//       console.log('the second largest element is ' + Math.floor(second));
//       return;
//     }
//   }

// let temp = [];
// let sorted = arr.sort();
// for (i = sorted.length - 2; i > 0; i--) {
//   if (sorted[i] != sorted.length - 1)
//     console.log('second largest element', sorted[i]);
//   return;
// }
// let s = [];
// for (i = 0; i < arr.length; i++) {
//   temp.push(Array[i]);
//   temp.sort();

//   temp.forEach((e) => {
//     temp.push(e);
//   });
//   // }
// };

// let pushZero = (arr) => {
//   //1,  5, 0, 0,0 0,0,8
//   let count = 0;
//   for (i = 0; i < arr.length; i++) if (arr[i] != 0) arr[count++] = arr[i];

//   while (count < arr.length) arr[count++] = 0;
// };

// var arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
// pushZero(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] + ' ');
// }

//  Find ways to get smallest Element
// let minNumber = (arr) => {
//   // // let first = Number(Math.max);
//   // let smallest = Math.max(...arr);
//   let smallest = Math.max.apply(Math, arr);
//   console.log(smallest);
//   // return smallest;
//   // for (i = 0; i < arr.length; i++) {
//   //   if (arr[i] < first) {
//   //     first = arr[i];
//   //   }
//   // }
// };

// var arr = [1, 9, 2, 4, 8];
// minNumber(arr);

// // for (i = 0; i < arr.length; i++) {
// //   console.log('smallest number', arr[i], arr[2], arr[3]);
// // }
// const myAwesomeArray = [
//   { id: 1, name: 'john' },
//   { id: 2, name: 'Ali' },
//   { id: 3, name: 'Mass' },
// ];
// const myAwesomeArray = [1, 2, 3, 4];
// const myAwesomeArray1 = [1, 2, 3, 4];
// const result1 = myAwesomeArray1.forEach((e) => {
//   return e + e;
// });

// const result = myAwesomeArray.map((i) => {
//   return i * i;
// });

// console.log('mAP', result);
// console.log('For each', result1);

// const myAwesomeArray = [1, 2, 3, 4];
// myAwesomeArray.forEach((e) => {
//   return e + e;
// });
// (********call *pas as parameter
// const obj = {
//   firstName: 'Himanshu',
//   lastName: 'pandey',
// };
// const obj2 = {
//   firstName: '10',
//   lastName: 'Computer',
// };
// function fullName(m, f) {
//   console.log(this.firstName + '' + this.lastName + '' + f + '' + m);
// }
// fullName.apply(obj2, ['himanshu', 'pandey']);

// let result = fullName.bind(obj2, 'name', 'name');
// setTimeout(result, 1000);
// const countOccurence = (a) => {
//   let newArr = [];
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       if (a[i] == a[j]) {
//         newArr.push(a[i]);
//         index++;
//       }
//     }
//   }

//   return newArr;
// };

// let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8, 8, 9, 9, 8];

// console.log(countOccurence(arr));

// let countOccurence = (arr) => {
//   // arr.filter((cv, ci) => {
//   //   arr.indexOf(cv !== ci);
//   //   return cv;
//   // });

//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i + 1]) count++;
//   }
//   return count;
// };

// let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8, 8, 9, 9, 8];

// console.log(countOccurence(arr));

// let missingNumber = (nums) => {
//   nums.sort((a, b) => {
//     return a - b;
//   });
//   console.log(nums);

//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] !== i) {
//       console.log(nums[i]);
//       return i;
//     }
//   }
//   return nums.length;
// };

// let nums = [0, 1];

// missingNumber(nums);

// let reverseIt = (nums) => {
//   let rev = [];
//   for (i = nums.length; i > 0; i--) rev.push(nums[i]);

//   for (i = 0; i < rev.length; i++) {
//     console.log(rev[i]);
//   }
// };

// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// reverseIt(nums);

//swapping

// let reverseItSwap = (nums) => {
//   let len = nums.length;
//   let rest;
//   for (i = 0; i < len / 2; i++) {
//     rest = nums[i];
//     nums[i] = nums[len - i - 1];
//     nums[len - i - 1] = rest;
//   }
//   for (let i = 0; i < len; i++) {
//     console.log(nums[i]);
//   }
// };

// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// reverseItSwap(nums);

//rotate array left

// class rotateL {
//   static first = [];
//   eat() {
//     rotateL.first.push('f');
//   }
//   // arr.push(first);
//   // console.log(arr);
// }

// let arr = new rotateL();
// arr.eat();
// // rotateL.first = 90;
// // console.log(arr.first);
// // [1, 2, 3, 4, 5, 6, 7];
// // rotateL(arr);

// const myHeading = document.querySelector('h1');
// console.log(myHeading);

// const para = document.querySelector('p');

// let updateName = () => {
//   let name = prompt('Enter the name ');
//   let prev = document.querySelector('p').innerHTML;

//   para.textContent = `Name  ${prev}  ${name}`;
// };
// para.addEventListener('click', updateName());
// const replaceIT = 'my name is ';
// myHeading.textContent = replaceIT;

// console.log(replaceIT);
// const calculateAll = () => {
//   let total = 3;
//   let calculate = true;

//   if (!calculate) {
//     console.log('THis is seven so  what will you do ');
//   } else {
//     console.log('in else');
//   }
// };
// calculateAll();

// let iceCream = 23;
// let kids = 'Jack';
// let transform = kids.toLocaleUpperCase();

// // let pushStrawberry = iceCream + kids;
// if (iceCream == '23') console.log(transform);
// else console.log('not strawbery');

const calculateTax = () => {
  const hra = document.getElementById('Hr').value;
  const rentPaid = document.getElementById('rp').value;
  const metro = document.getElementById('metro').value;
  const nonMetro = document.getElementById('nonMetro').value;

  let totalSalary = Number(hra);
  let rentCalculate = Math.floor((rentPaid * 10) / 100);
  console.log(rentCalculate);
  let metroCost = Number((hra * 50) / 100);
  let nonMetroCost = Number((hra * 40) / 100);
  let total = totalSalary + rentCalculate + metroCost;
  document.getElementById('taxSummary').textContent = total.toLocaleString(
    'en-US',
    {
      style: 'currency',
      currency: 'inr',
    }
  );
  if (metro) {
    let total = totalSalary + rentCalculate + metroCost;
    Math.floor(total);
    return total;
  } else if (nonMetro) {
    let total = totalSalary + rentCalculate + nonMetroCost;
    Math.floor(total);
    return total;
  }

  const validateUser = () => {
    const hra = document.getElementById('Hr').value;
    const rentPaid = document.getElementById('rp').value;
    const metro = document.getElementById('metro').value;
    const nonMetro = document.getElementById('nonMetro').value;
    if (hra === '' || rentPaid === '' || metro === '' || nonMetro === '') {
      alert('Enter all values');
    }
    return validateUser;
  };
  validateUser();
};

const handleChange = () => {
  let selectArea = document.getElementById('selectOne');
  if (selectArea.value === 'metro') {
    metro.style.display = 'block';
    nonMetro.style.display = 'none';
  } else if (selectArea.value === 'nonMetro') {
    nonMetro.style.display = 'block';
    metro.style.display = 'none';
  } else {
    metro.style.display = 'block';
  }
};
