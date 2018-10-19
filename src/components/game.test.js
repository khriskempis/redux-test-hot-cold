import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', ()=> {
  it('should render component', ()=> {
    shallow(<Game />);
  });

  it('should render all components', ()=> {
    const wrapper = shallow(<Game />);
    expect(wrapper.find('Header')).toHaveLength(1);
    expect(wrapper.find('GuessSection')).toHaveLength(1);
    expect(wrapper.find('StatusSection')).toHaveLength(1);
    expect(wrapper.find('InfoSection')).toHaveLength(1);
  });

});