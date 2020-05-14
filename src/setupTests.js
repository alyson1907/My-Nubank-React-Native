/* eslint-env jest */
jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon')
jest.mock('react-native-vector-icons/FontAwesome5', () => 'Icon')
jest.mock('react-native-vector-icons/AntDesign', () => 'Icon')

// ENZYME
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jsdom-global/register'

Enzyme.configure({ adapter: new Adapter() })
