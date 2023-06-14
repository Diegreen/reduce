import { products } from './data.js'

const numbers = [20, 13, 50, 36, 97];

function sumNumbers(array) {
  const sumAll = array.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
  })
  return sumAll
}
console.log(sumNumbers(numbers));

function totalProducts(array) {
  const totalProductPrice = array.map(function (array) {
    return array.price
  })

  const arrayPrice = totalProductPrice.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
  })

  return arrayPrice
}
console.log(totalProducts(products));

function totalProductsSize(array) {
  const ggProducts = array.filter((array) => array.size === "GG")
  const allGgProductsSum = ggProducts.reduce((firstValue, lastValue) => firstValue + lastValue.price, 0)

  return allGgProductsSum;
}

console.log(totalProductsSize(products));

function totalProductsSale(array) {
     const filterProductsSale = array.filter((array) => array.sale === true)
     const productDiscount = filterProductsSale.map(function(array) {
      return array.price * 0.5
     })  
     const sumOffAllDiscounts = productDiscount.reduce((value1, value2) => value1 + value2)
     console.log(productDiscount)
    return sumOffAllDiscounts;
}
 console.log(totalProductsSale(products));
