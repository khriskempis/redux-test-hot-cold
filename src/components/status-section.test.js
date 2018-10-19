import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section';

describe('<Status Section />', () => {
  it('should render component', () => {
    shallow(<StatusSection guesses={4} auralStatus={"Test"}/>)
  })

  // it('should include other components', ()=> {
  //   const wrapper = shallow(<StatusSection guesses={4} auralStatus={"Test"}/>);
  //   expect(wrapper.find('GuessCount')).toHaveLength(1);
  //   expect(wrapper.find('GuessList')).toHaveLength(1);
  //   expect(wrapper.find('AuralStatus')).toHaveLength(1);
  // }); 
});