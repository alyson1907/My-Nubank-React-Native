import 'react-native'
import React from 'react'
import AppHeader from '../src/Components/AppHeader.js'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(<AppHeader />).toJSON()
  expect(tree).toMatchSnapshot()
})
