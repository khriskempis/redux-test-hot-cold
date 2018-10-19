import React from 'react';
import {shallow} from 'enzyme';

import {restartGame} from '../actions'

import {TopNav} from './top-nav';

describe('<TopNav >', ()=>{
  it('renders without crashing', () => {
      shallow(<TopNav />);
  });

  it('renders three links', () =>{
      const wrapper = shallow(<TopNav />)
      expect(wrapper.contains(<a 
      href="#what" 
      className="what"
      aria-label="How to play">What?</a>)).toEqual(true);
      expect(wrapper.find('a')).toHaveLength(3);
  });

  it('restarts game when clicked', ()=> {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav dispatch={callback}/>)
    const link = wrapper.find('.new')
    link.simulate('click');
    expect(callback).toHaveBeenCalled();
  });

});