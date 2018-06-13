import React from 'react';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../app';
import TextBox from '../TextBox/TextBox';
import ChatBox from '../ChatBox/ChatBox';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = render(
    <Root>
      <App />
    </Root>
  );
});

it('renders App correctly', () => {
  expect(wrapped.find(ChatBox).length).toEqual(0);
  expect(wrapped.find(TextBox).length).toEqual(0);
});
