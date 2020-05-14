import React from 'react'
import { View, Text } from 'react-native'

const handleBulletTestSet = [
  {
    input: {
      width: 800,
      event: {
        nativeEvent: {
          contentOffset: {
            x: 1000
          }
        }
      },
      numberOfItems: 3
    },
    expected: {
      currentBullet: 4
    }
  },
  {
    input: {
      width: 800,
      event: {
        nativeEvent: {
          contentOffset: {
            x: 360
          }
        }
      },
      numberOfItems: 3
    },
    expected: {
      currentBullet: 1
    }
  }
]

const carouselChildren = [
  (<View data-test-id='first-child'>
    <Text>first child</Text>
  </View>),
  (<Text data-test-id='second-child'>second child</Text>)
]

module.exports = {
  handleBulletTestSet,
  carouselChildren
}
