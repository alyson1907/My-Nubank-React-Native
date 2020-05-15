import React from 'react'
import 'react-native'
import { shallow } from 'enzyme'

import Menu from '../src/Components/Menu'
// Requiring module in order to mock
import * as menuModule from '../src/Components/Menu'
import { menuTestSet } from './fixtures/menu'

const translateYMock = {
  interpolate: () => { }
}

describe('Menu Tests', () => {
  it('renders Menu and compares with snapshot', () => {
    const wrapper = shallow(<Menu translateY={translateYMock} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('asserts the onLayout handler is calls the function to update height state', () => {
    // Requiring the real implementation
    const { handleLayout } = jest.requireActual('../src/Components/Menu')

    menuTestSet.forEach(test => {
      const { input: { event } } = test
      const setHeightMock = jest.fn()
      handleLayout(event, setHeightMock)
      expect(setHeightMock).toHaveBeenCalledWith(event.nativeEvent.layout.height)
    })
  })

  it('simulates onLayout event', () => {
    const wrapper = shallow(<Menu translateY={translateYMock} />)
    menuModule.handleLayout = jest.fn()
    wrapper.find("[testID='menu-container']").simulate('layout', menuTestSet[0].input.event)
    expect(menuModule.handleLayout).toHaveBeenCalled()
  })
})
