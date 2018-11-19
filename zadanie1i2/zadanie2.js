let arr = [{
    country: 'Poland',
    population: 400000,
    language: 'PL'
  },
  {
    country: 'United States',
    population: 3000000,
    language: 'EN'
  }
]

function filterMyArr(myArr, condition) {
  return myArr.map(element => element[condition])
}

console.log(filterMyArr(arr, 'population'))