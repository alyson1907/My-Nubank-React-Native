import React from 'react'
import Text from './Components/Text';

export const getTotalValue = transactions => {
  if (!transactions) return { integer: 0, cents: '00' }
  const total = transactions.reduce((acc, trans) => acc += trans.value, 0)
  return {
    integer: parseInt(total / 100),
    cents: (total / 100 % 1).toFixed(2).split('.').pop()
  }
}

export const renderLoading = () => (<Text style={{fontSize: 18}}>Loading...</Text>)
