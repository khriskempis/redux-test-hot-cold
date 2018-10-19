import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import { makeGuess } from '../actions';

describe('<GuessForm />', ()=> {
  it('renders component', ()=> {
    const dispatch = jest.fn();
    shallow(<GuessForm dispatch={dispatch}/>)
  });

  it('calls makeGuess on submit', ()=> {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm dispatch={callback}/>);
    const value = "12"
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(makeGuess(value));
  });
});