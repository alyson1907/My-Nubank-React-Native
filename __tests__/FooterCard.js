import React from 'react'
import 'react-native'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import FooterCard from '../src/Components/FooterCard'

const globals = {
  text: 'random test text',
  icon: 'creditcard'
}

describe('Footer Card Tests', () => {
  it('evaluates the rendered card with snapshot', () => {
    const tree = renderer.create(<FooterCard  icon={globals.icon} text={globals.text} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders single card correctly', () => {
    // Mounting Component
    const wrapper = mount(<FooterCard icon={globals.icon} text={globals.text} />)
    const footerBtn = wrapper.find("[testID='footer-card']").first()
    const footerTxt = wrapper.find("[testID='footer-card-text']").first().text()

    expect(footerBtn).toBeTruthy()
    expect(footerTxt).toEqual(globals.text)
  })
})
