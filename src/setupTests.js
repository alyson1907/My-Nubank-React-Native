/* eslint-env jest */
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon')
jest.mock('react-native-vector-icons/FontAwesome5', () => 'Icon')
jest.mock('react-native-vector-icons/AntDesign', () => 'Icon')

// Mocking async storage (Read: https://github.com/invertase/react-native-async-storage/blob/master/docs/Jest-integration.md)
import mockAsyncStorage  from '@react-native-community/async-storage/jest/async-storage-mock'
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
// ENZYME
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jsdom-global/register'

Enzyme.configure({ adapter: new Adapter() })
