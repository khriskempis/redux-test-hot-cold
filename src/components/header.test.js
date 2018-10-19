import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe("<Header />", ()=> {
  it('should render component', ()=> {
    shallow(<Header />);
  });

  it('should render title', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('h1').text()).toEqual('HOT or COLD');
  });
});