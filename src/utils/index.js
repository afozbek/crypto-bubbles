const currencyFormat = (num, fixedCount = 2) => {
  return '$' + num.toFixed(fixedCount).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export {
  currencyFormat
}