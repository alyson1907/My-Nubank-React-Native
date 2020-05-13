import React from 'react'
import { Text } from 'react-native';

export const getTotalValue = transactions => {
  const total = transactions.reduce((acc, trans) => acc += trans.value, 0)
  return {
    integer: parseInt(total / 100),
    cents: (total / 100 % 1).toFixed(2).split('.').pop()
  }
}

export const renderLoading = () => (<Progress.Bar progress={0.4} size={50} />)
