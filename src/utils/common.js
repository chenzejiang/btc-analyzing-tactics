/**
 * 自动化保留小数点N位
 * @param {number} num
 */
export const numberToFixed = (_num, _fixNum) => {
  var num1 = Number(_num)
  var fixed_num = 0
  if (num1 >= 1000 || num1 <= -1000) {
    fixed_num = 2
  } else if ((num1 < 1000 && num1 >= 100) || (num1 > -1000 && num1 <= -100)) {
    fixed_num = 3
  } else if ((num1 < 100 && num1 >= 10) || (num1 > -100 && num1 <= -10)) {
    fixed_num = 4
  } else if ((num1 < 10 && num1 >= 1) || (num1 > -10 && num1 <= -1)) {
    fixed_num = 5
  } else if ((num1 < 1 && num1 >= 0.1) || (num1 > -1 && num1 <= -0.1)) {
    fixed_num = 6
  } else if ((num1 < 0.1 && num1 >= 0.01) || (num1 > -0.1 && num1 <= -0.01)) {
    fixed_num = 7
  } else {
    fixed_num = 8
  }
  /* 如果有传多少位 */
  if (_fixNum) {
    fixed_num = _fixNum
  }
  return num1.toFixed(fixed_num)
}

/**
 * 市值转换中文可读
 * @param {number} number
 * @param {number} format
 */
export const numberFormat = (number, format = 3) => {
  let result
  if (Math.abs(number / 100000000) >= 1) {
    result = `${parseFloat((number / 100000000).toFixed(format))}亿`
  } else if (Math.abs(number / 10000) >= 1) {
    result = `${parseFloat((number / 10000).toFixed(format))}万`
  } else {
    result = number.toString()
  }
  return result
}
