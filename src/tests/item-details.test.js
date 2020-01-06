import React from 'react';
import { shallow } from 'enzyme';
import itemdetails from '../HomePage/itemdetails';

it('Test for component exists', () => {
    const itemdetailsModal = shallow(
        <itemdetails  />);
    expect(itemdetailsModal.exists()).toBe(true);
  });
  