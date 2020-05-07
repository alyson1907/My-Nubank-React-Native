import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './Styles/FooterCard'

const FooterCard = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.img} style={styles.contentImg} />
      <Text style={styles.contentText}>{props.text}</Text>
    </View>
  )
}

export default FooterCard
