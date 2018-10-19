import React from 'react';
import {shallow} from 'enzyme';

import InfoSection from './info-section.js';

describe('<InfoSection />', ()=> {
  it('should render component', ()=> {
    shallow(<InfoSection />);
  });

  it('should contain section with id="what"', ()=> {
    const wrapper = shallow(<InfoSection />)
    expect(wrapper.find('#what')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(3);
  })
});