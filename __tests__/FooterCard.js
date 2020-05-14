import React from 'react'
import 'react-native'
import { shallow, mount, render } from 'enzyme'
import FooterCard from '../src/Components/FooterCard'

describe('HomeScreen Footer List Tests', () => {
  it('renders single card correctly', () => {
    const text = 'random test text'
    // Mounting Component
    const wrapper = mount(<FooterCard icon='creditcard' text={text} />)
    const footerBtn = wrapper.find("[testID='footer-card']").first()
    const footerTxt = wrapper.find("[testID='footer-card-text']").first().text()

    expect(footerBtn).toBeTruthy()
    expect(footerTxt).toEqual(text)
  })
})
