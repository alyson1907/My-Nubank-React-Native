import 'react-native'
import React from 'react'
import { View, Text } from 'react-native'
import Carousel, { getPageBullets } from '../src/Components/Carousel.js'
import { shallow, mount, render } from 'enzyme'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<Carousel />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Carousel with proper children', () => {
  const carouselChildren = [
    (<View data-test-id='first-child'>
      <Text>first child</Text>
    </View>),
    (<Text data-test-id='second-child'>second child</Text>)
  ]

  // mount will create the component and execute its entire life cycle
  const wrapper = mount( <Carousel> {carouselChildren} </Carousel>)

  expect(wrapper.find("[data-test-id='first-child']").at(0).text()).toEqual('first child')
  expect(wrapper.find("[data-test-id='second-child']").at(1).text()).toEqual('second child')
})

it('renders carousel bullets with 3 items correctly', () => {
  // 3 items, the 1 is selected
  const tree = renderer.create(getPageBullets(3, 1)).toJSON()
  expect(tree).toMatchSnapshot()
})

it('handles the selected bullet/dot correctly', () => {

})
