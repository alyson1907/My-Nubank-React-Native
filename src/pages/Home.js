import React from 'react'
import { View, Animated } from "react-native"
import Text from '../Components/Text'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
// Components
import AppHeader from '../Components/AppHeader'
import Carousel from '../Components/Carousel'
import Menu from '../Components/Menu'
import MainCard from '../Components/MainCard'
import FooterCard from '../Components/FooterCard'
import styles from './Styles/Home'

const Home = () => {
  const mainCards = [
    {
      header: {
        icon: 'credit-card',
        text: 'Cartão de Crédito',
      },
      footer: {
        icon: 'shopping-cart',
        // TODO, fetch last transaction
        text: 'Compra mais recente em McDonald\'s no valor de R$39,90',
      },
      content: () => (
        // TODO, fetch last transaction
        <View>
          <Text style={styles.creditCard}>FATURA ATUAL</Text>
          <Text style={styles.creditCardValue}>
            R$
            <Text style={{ fontWeight: 'bold' }}>135</Text>
            ,50
          </Text>
          <Text style={styles.creditCardLimit}>Limite disponível <Text style={styles.creditCardLimitValue}>R$ 600,00</Text></Text>
        </View>
      )
    },
    {
      header: {
        icon: 'coins',
        text: 'Conta',
      },
      footer: {
        icon: 'piggy-bank',
        // TODO, fetch savings
        text: 'Dinheiro guardado no valor de RS 1600,00',
      },
      content: () => (
        <View>
          <Text style={styles.accountCard}>Saldo disponível</Text>
          <Text style={styles.accountCardLarge}>R$ 420,00</Text>
        </View>
      )
    },
    {
      header: {
        icon: 'gift',
        text: 'Nubank Rewards'
      },
      content: () => (
        <View style={styles.rewardsContainer}>
          <Text style={styles.rewardsTxt}>Acumule pontos que nunca expiram e troque por passagens aéreas ou serviços que você realmente usa</Text>
          <TouchableOpacity style={styles.rewardsBtn}><Text style={styles.rewardsBtnTxt}>ATIVE O SEU REWARDS</Text></TouchableOpacity>
        </View>
      )
    }
  ]

  const footerCards = [
    { icon: 'creditcard', text: 'Cartão de Crédito' },
    { icon: 'adduser', text: 'Indicar Amigo' },
    { icon: 'arrowup', text: 'Depositar' },
    { icon: 'barcode', text: 'Pagar' },
    { icon: 'adduser', text: 'Indicar Amigo2' },
    { icon: 'adduser', text: 'Indicar Amigo3' },
  ]

  return (
    <View style={styles.container}>
      <AppHeader />
      <Menu />

      {/* Content in Center of HomeScreen */}
      <Carousel style={styles.content} bullets>
        {mainCards.map(card => {
          return (
            <MainCard header={card.header} footer={card.footer}>
              {card.content()}
            </MainCard>
          )
        })}
      </Carousel>

      {/* Footer Menu */}
      <View style={styles.footer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {footerCards.map(({ icon, text }) => (
            <FooterCard key={text} icon={icon} text={text} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default Home
