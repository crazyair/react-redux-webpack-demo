import React from 'react';
import { shallow } from 'enzyme';
import Items from 'components/Items.js';

describe('<Items />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Items />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "items-component"', function () {
      expect(component.hasClass('items-component')).to.equal(true);
    });
  });
});
