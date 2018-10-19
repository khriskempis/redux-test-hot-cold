import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', ()=> {
  it('should render component', ()=> {
    shallow(<GuessCount />);
  });

  it('should include h2', ()=> {
    const guess = 3
    const wrapper = shallow(<GuessCount guessCount={guess}/>);
    expect(wrapper.find('#guessCount')).toHaveLength(1);
  });
});