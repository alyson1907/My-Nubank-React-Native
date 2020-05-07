import React from 'react'
import { View, Text, Image } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'
import Colors from '../Colors'
import styles from './Styles/MainCard'

const MainCard = (props) => {
  // Returns the card content to be rendered depending on received `props.type`
  const getCardBody = type => {
    switch (type) {
      case 'account':
        return (
          <View style={styles.content}>
            <Text style={styles.accountType}>Saldo disponível</Text>
            <Text style={styles.accountTypeLarge}>R$ 420,00</Text>
          </View>
        )
      case 'history':
        return (
          <View style={styles.content}>
          </View>
        )

      default: return (<View style={styles.content}><Text>Sem Conteúdo</Text></View>)
    }
  }

  return (
    <View style={styles.container}>
      {/* Card Header */}
      <View style={styles.headerContainer}>
        {props.headerIcon && (<Icon name={props.headerIcon} size={28} color={Colors.fontSecondary} />)}
        <Text style={styles.headerText}>{props.headerText}</Text>
      </View>
      {/* Card Content */}
      {getCardBody(props.type)}

      <View style={styles.footer}>
        {/* TODO update icons depending on information */}
        <Icon name='shopping-cart' size={28} color={Colors.fontSecondary} />
        <Text style={styles.footerTxt}>Compra mais recente em McDonalds no valor de R$ 39,90</Text>
        <Icon name='arrow-right' size={18} color={Colors.fontSecondary} />
      </View>
    </View>
  )
}

export default MainCard
