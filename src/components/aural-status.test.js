import React from 'react';
import {shallow} from 'enzyme';

import {AuralStatus} from './aural-status';

describe('<AuralStatus />', () => {
  it('should render component', ()=> {
    const auralstatus = "test 1";
    shallow(<AuralStatus auralStatus={auralstatus}/>)
  }); 

  it('should have a p element', ()=> {
    const wrapper = shallow(<AuralStatus />);
    expect(wrapper.find('.visuallyhidden')).toHaveLength(1);
  });

  it('should have the proper status', ()=> {
    const testStatus = "test"
    const wrapper = shallow(<AuralStatus auralStatus={testStatus}/>)
    expect(wrapper.find('p').text()).toEqual(testStatus)
  })
});