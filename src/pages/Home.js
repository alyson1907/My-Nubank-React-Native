import React, { useState, useEffect } from 'react'
import { View, Animated } from "react-native"
import Text from '../Components/Text'
import { ScrollView, TouchableOpacity, PanGestureHandler, State } from 'react-native-gesture-handler'
// Components
import AppHeader from '../Components/AppHeader'
import Carousel from '../Components/Carousel'
import Menu from '../Components/Menu'
import MainCard from '../Components/MainCard'
import FooterCard from '../Components/FooterCard'
import styles from './Styles/Home'
// Redux
import { connect } from 'react-redux'
import actions from '../redux/actions'

import { getTotalValue } from '../helpers'

const Home = (props) => {

  useEffect(() => {
    const loadTransactions = async () => {
      await props.fetchTransactions()
    }
    loadTransactions()
  }, [])

  // Redux (transactions)
  const totalSpent = getTotalValue(props.transactions)
  // Animations
  const maxTranslation = 256
  let lastPosition = 0

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
      <Text style={{ fontWeight: 'bold' }}>{totalSpent.integer}</Text>
            ,{totalSpent.cents}
          </Text>
          <Text style={styles.creditCardLimit}>Limite disponível <Text style={styles.creditCardLimitValue}>R$ 600,00</Text></Text>
        </View>
      ),
      navigateTo: 'TransactionHistory'
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
    { icon: 'sync', text: 'Depositar', navigateTo: 'Deposit' },
    { icon: 'barcode', text: 'Pagar', navigateTo: 'Payment' },
    { icon: 'adduser', text: 'Indicar Amigo' },
    { icon: 'adduser', text: 'Indicar Amigo2' },
    { icon: 'adduser', text: 'Indicar Amigo3' },
  ]

  // Animation and Animation Handlers
  const translateY = new Animated.Value(0)
  const animatedEvent = Animated.event([
    {
      nativeEvent: {
        translationY: translateY
      }
    }
  ])

  /* This handler us called whenever:
    - User STARTS sliding the container
    - User IS sliding the container
    - User STOPS sliding the container */
  const onHandlerStateChange = e => {
    const isMenuOpen = (translationY) => translationY > 100 // Threshold pixels
    const openMenu = () => {
      translateY.setValue(lastPosition)
      Animated.timing(translateY, {
        toValue: maxTranslation,
        duration: 300
      })
        // The callback inside `start()` is called after the animation is done
        .start(() => {
          lastPosition = maxTranslation
          translateY.setValue(maxTranslation)
          translateY.setOffset(maxTranslation)
        })
    }
    const closeMenu = () => {
      translateY.setValue(lastPosition)
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300
      })
        // The callback inside `start()` is called after the animation is done
        .start(() => {
          translateY.setValue(0)
          translateY.setOffset(0)
          lastPosition = 0
        })
    }

    // When the user stopped doing the animation, it means the PAST/OLD state was ACTIVE (not the current one)
    if (e.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = e.nativeEvent
      lastPosition += translationY
      isMenuOpen(translationY) ? openMenu() : closeMenu()
    }
  }

  const interpolatedTranslationY = (translateY) => {
    // `Animated.Value` objects has the interpolate() function
    return translateY.interpolate({
      inputRange: [-100, 0, maxTranslation],
      outputRange: [-50, 0, maxTranslation],
      /* extrapolate: used to "truncate" the input.
      Does not let the user to translate the container to a value higher than the inputRange */
      extrapolate: 'clamp'
    })
  }

  const interpolatedOpacity = translateY => {
    return translateY.interpolate({
      inputRange: [0, 128],
      outputRange: [1, 0]
    })
  }

  return (
    <View style={styles.container}>
      <AppHeader />
      <Menu translateY={translateY} navigation={props.navigation} />

      {/* Content in Center of HomeScreen */}
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View style={{
          transform: [{
            translateY: interpolatedTranslationY(translateY)
          }]
        }}>
          <Carousel style={styles.content} bullets>
            {mainCards.map((card, idx) => {
              return (
                <MainCard key={idx} header={card.header} footer={card.footer} navigateTo={card.navigateTo}>
                  {card.content()}
                </MainCard>
              )
            })}
          </Carousel>
        </Animated.View>
      </PanGestureHandler>

      {/* Footer Menu */}
      <Animated.View style={[styles.footer, { opacity: interpolatedOpacity(translateY) }]}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {footerCards.map(({ icon, text, navigateTo }) => (
            <FooterCard key={text} icon={icon} text={text} navigation={props.navigation} navigateTo={navigateTo} />
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    transactions: state.trans.transactionList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: () => dispatch(actions.transactions.fetchTransactions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
