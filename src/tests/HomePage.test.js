import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../HomePage/HomePage';

describe('Testing utility functions', () => {
    let data;
    beforeEach(() => {
        data = { link: 2, name: "test2", summary: "Summary Test 2", year: "2002", country: "uk", price: "2000", description: "Desc 2" }
    });
});

it('Test for component exists', () => {
    const HomePageModal = shallow(
        <HomePage  />);
    expect(HomePageModal.exists()).toBe(true);
  });
  
  it('Test for onSelect()', () => {
    const HomePageModal = shallow(
      <HomePage />);
      HomePageModal.instance().onSelect(data)
  });

  it('Test for clearState()', () => {
    const HomePageModal = shallow(
      <HomePage />);
      HomePageModal.instance().clearState(data)
  });

  it('Test for onCancel()', () => {
    const HomePageModal = shallow(
      <HomePage />);
      HomePageModal.instance().onCancel()
  });

  it('Test for onNewItem()', () => {
    const HomePageModal = shallow(
      <HomePage />);
      HomePageModal.instance().onNewItem()
  });

  it('Test for onEditItem()', () => {
    const HomePageModal = shallow(
      <HomePage />);
      HomePageModal.instance().onEditItem()
  });
