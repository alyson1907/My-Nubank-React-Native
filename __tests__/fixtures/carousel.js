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

module.exports = {
  handleBulletTestSet
}
