import React from 'react'
import { View } from "react-native"
import { ScrollView } from 'react-native-gesture-handler'
// Components
import AppHeader from '../Components/AppHeader'
import Carousel from '../Components/Carousel'
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
      <Carousel style={styles.content} bullets>
        {/* TODO Change the ScrollView below to Carousel */}
        <MainCard headerIcon="coins" headerText="Conta" type='account' />
        <MainCard headerIcon="coins" headerText="Conta" type='account' />
        <MainCard headerIcon="coins" headerText="Conta" type='account' />
        <MainCard headerIcon="coins" headerText="Conta" type='account' />
      </Carousel>
      {/* Footer Menu */}
      <View style={styles.footer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {footerCards.map(({ icon, text }, idx) => (
            <FooterCard key={idx} icon={icon} text={text} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default Home
