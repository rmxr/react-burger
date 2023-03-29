import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from '@testing-library/react';
import ReactDOM from "react-dom";

import Modal from "./Modal";

beforeAll(() => {
  ReactDOM.createPortal = jest.fn((element, node) => {
    return element
  })
});

it('Модалка рендерится без ошибок', () => {
  const tree = renderer
    .create(<Modal onClose={() => {
      alert('Я не понимаю, что я делаю!')
    }
    }/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})

