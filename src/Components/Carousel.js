import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './Styles/Carousel'

export const getPageBullets = (numberOfItems, selectedBullet) => {
  const dots = []
  for (let idx = 0; idx < numberOfItems; idx++) {
    idx === selectedBullet
      ? dots.push(<View key={idx} style={styles.selectedBullet} />)
      : dots.push(<View key={idx} style={styles.bullet} />)
  }
  return (
    <View style={styles.bulletsContainer}>
      {dots}
    </View>
  )
}

const Carousel = (props) => {
  const hasChildren = !!props.children
  const numberOfItems = hasChildren && props.children.length || 0

  const [selectedBullet, setSelectedBullet] = useState(0)
  const [width, setWidth] = useState(Dimensions.get('window').width)

  const handleBullet = e => {
    const getItemIndex = e => {
      const contentWidth = width
      // const { width: contentWidth } = e.nativeEvent.contentSize
      const { x: contentOffset } = e.nativeEvent.contentOffset

      const pageWidth = parseInt(contentWidth / numberOfItems)
      const currentPage = Math.round(contentOffset / pageWidth)

      return currentPage
    }
    const currentBullet = getItemIndex(e)
    // TODO add Animation to bullet change
    setSelectedBullet(currentBullet)
  }

  return (
    <View style={props.style}>
      <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ width: `${100 * numberOfItems}%`, justifyContent: 'space-around' }}
        onContentSizeChange={(width, height) => setWidth(width)}
        decelerationRate="normal"
        pagingEnabled
        onScroll={handleBullet}
      >
        {props.children}
      </ScrollView>
      {props.bullets && getPageBullets(numberOfItems, selectedBullet)}
    </View>
  )
}

export default Carousel
