import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list';

describe('<GuessList />', ()=> {
  const guessList = [];
  beforeAll(()=> {
    for(let i=0; i<10; i++){
      guessList.push(`${i}`);
    };
  });

  it('should render component', ()=> {
    shallow(<GuessList guesses={guessList}/>);
  });

  it('should render guess list', ()=> {
    const wrapper = shallow(<GuessList guesses={guessList}/>)
    expect(wrapper.find('li').length).toEqual(guessList.length)
  });
});