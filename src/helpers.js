export const getTotalValue = transactions => {
  const total = transactions.reduce((acc, trans) => acc += trans.value, 0)
  return {
    integer: parseInt(total / 100),
    cents: (total / 100 % 1).toFixed(2).split('.').pop()
  }
}
