import React, { useState, useEffect } from 'react'
import { Animated, View, Text, ART } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './Styles/Carousel'

const Carousel = (props) => {
  const numberOfItems = props.children.length
  const [selectedBullet, setSelectedBullet] = useState(0)

  const handleBullet = e => {
    const getItemIndex = e => {
      const { width: contentWidth } = e.nativeEvent.contentSize
      const { x: contentOffset } = e.nativeEvent.contentOffset
  
      const pageWidth = parseInt(contentWidth / numberOfItems)
      const currentPage = Math.round(contentOffset / pageWidth)
  
      return currentPage
    }
    const currentBullet = getItemIndex(e)
    // TODO add Animation to bullet change
    setSelectedBullet(currentBullet)
  }

  const getPageBullets = (numberOfItems, selectedBullet) => {
    return (
      <View style={styles.bulletsContainer}>
        {props.children.map((child, idx) => {
          return idx === selectedBullet ? (<View key={idx} style={styles.selectedBullet} />) : (<View key={idx} style={styles.bullet} />)
        })}
      </View>
    )
  }

  return (
    <View style={props.style}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
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
