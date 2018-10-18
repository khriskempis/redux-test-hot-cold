import React from 'react';
import {shallow} from 'enzyme';

import {Feedback} from './feedback';

describe('<Feedback />', ()=> {
  it('renders component', ()=> {
    shallow(<Feedback feedback={'Hot'}/>)
  });
});