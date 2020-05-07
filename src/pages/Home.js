import React from 'react'
import { View } from "react-native"
import { ScrollView } from 'react-native-gesture-handler'
// Components
import AppHeader from '../Components/AppHeader'
import MainCard from '../Components/MainCard'
import FooterCard from '../Components/FooterCard'
import styles from './Styles/Home'

const Home = () => {
  const footerCards = [
    { icon: 'creditcard', text: 'Cartão de Crédito' },
    { icon: 'adduser', text: 'Indicar Amigo' },
    { icon: 'arrowup', text: 'Depositar' },
    { icon: 'barcode', text: 'Pagar' },
    { icon: 'adduser', text: 'Indicar Amigo' },
    { icon: 'adduser', text: 'Indicar Amigo' },
  ]

  return (
    <View style={styles.container}>
      <AppHeader />
      {/* Content in Center of HomeScreen */}
      <View style={styles.content}>
      {/* TODO Change the ScrollView below to Carousel */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <MainCard headerIcon="coins" headerText="Conta" />
          <MainCard headerIcon="coins" headerText="Conta" />
          <MainCard headerIcon="coins" headerText="Conta" />
          <MainCard headerIcon="coins" headerText="Conta" />
          <MainCard headerIcon="coins" headerText="Conta" />
          <MainCard headerIcon="coins" headerText="Conta" />

        </ScrollView>
      </View>
      {/* Footer Menu */}
      <View style={styles.footer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {footerCards.map(({ icon, text }) => (
            <FooterCard icon={icon} text={text} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default Home
