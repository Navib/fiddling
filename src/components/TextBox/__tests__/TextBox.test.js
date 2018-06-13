import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TextBox from '../TextBox';
import Root from '../../../root';

let wrapped;

beforeEach(() => {
  wrapped = shallow(
    <Root>
      <TextBox />
    </Root>
  );
});

it('renders TextBox correctly', () => {
  expect(wrapped.length).toEqual(1);
});
