function daysInYear(year) {
  const errorMessagge = 'exception';
  if (Number.isInteger(year)) {
    return isLeapYear(year) ? 366 : 365;
  } else {
    return errorMessagge;
  }
}

function isLeapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

console.log(daysInYear('2019'));
console.log(daysInYear(2019));
console.log(daysInYear(2020));
console.log(daysInYear(2020.2));
console.log(daysInYear(2100));
console.log(daysInYear({year: 2100}));
