import 'react-native'
import React from 'react'
import { View, Text } from 'react-native'
import Carousel, { getPageBullets, handleBullet } from '../src/Components/Carousel.js'
import { shallow, mount, render } from 'enzyme'

import { handleBulletTestSet, carouselChildren } from './fixtures/carousel'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<Carousel />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Carousel with proper children', () => {
  // mount will create the component and execute its entire life cycle
  const wrapper = mount(<Carousel> {carouselChildren} </Carousel>)

  expect(wrapper.find("[testID='first-child']").at(0).text()).toEqual('first child')
  expect(wrapper.find("[testID='second-child']").at(1).text()).toEqual('second child')
})

it('asserts correct processing of bullets handler', () => {
  handleBulletTestSet.forEach(test => {
    const setSelectedBulletMock = jest.fn()
    const { input: { event, width, numberOfItems } } = test
    const { expected: { currentBullet } } = test
    handleBullet(event, width, numberOfItems, setSelectedBulletMock)
    expect(setSelectedBulletMock).toHaveBeenCalledWith(parseInt(currentBullet))
  })
})

it('renders carousel bullets with 3 items correctly', () => {
  // 3 items, the 1 is selected
  const tree = renderer.create(getPageBullets(3, 1)).toJSON()
  expect(tree).toMatchSnapshot()
})

it('handles the selected bullet/dot correctly', () => {

})
