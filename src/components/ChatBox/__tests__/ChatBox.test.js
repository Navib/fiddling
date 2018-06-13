import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ChatBox from '../ChatBox';
import Root from '../../../root';

let wrapped;

beforeEach(() => {
  wrapped = shallow(
    <Root>
      <ChatBox />
    </Root>
  );
});

it('renders ChatBox correctly', () => {
  expect(wrapped.length).toEqual(1);
});
