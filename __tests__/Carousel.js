import 'react-native'
import React from 'react'
import { View } from 'react-native'
import Carousel, { getPageBullets } from '../src/Components/Carousel.js'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<Carousel />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders carousel bullets with 3 items correctly', () => {
  // 3 items, the 1 is selected
  const tree = renderer.create(getPageBullets(3, 1)).toJSON()
  expect(tree).toMatchSnapshot()
})
