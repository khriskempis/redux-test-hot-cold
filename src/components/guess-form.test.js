import React from 'react';
import {shallow} from 'enzyme';

import {GuessForm} from './guess-form';

describe('<GuessForm />', ()=> {
  it('renders component', ()=> {
    const dispatch = jest.fn();
    shallow(<GuessForm dispatch={dispatch}/>)
  })
});