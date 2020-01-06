import React from 'react';
import { shallow } from 'enzyme';
import validator from '../HomePage/validator';

describe('Testing utility functions', () => {
    let data;
    beforeEach(() => {
        data = { link: 2, name: "test2", summary: "Summary Test 2", year: "2002", country: "uk", price: "2000", description: "Desc 2" }
    });
});
   
it('Test for validateInputs()', () => {
    const validatorModal = shallow(
      <validator />);
      validatorModal.instance().validateInputs(data)
  });