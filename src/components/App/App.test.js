import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from '../App';
import Counter from './Counter';

it('renders without crashing', () => {
  shallow(<App />);
});
