import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

import 'jest-enzyme';

Enzyme.configure({ adapter: new Adapter() });
