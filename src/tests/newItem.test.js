import React from 'react';
import { shallow } from 'enzyme';
import newitem from '../HomePage/new-item'

it('Test for component exists', () => {
    const newitemModal = shallow(
        <newitem  />);
    expect(newitemModal.exists()).toBe(true);
  });
  