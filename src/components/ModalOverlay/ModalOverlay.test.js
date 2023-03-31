import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import ModalOverlay from './ModalOverlay';
import renderer from "react-test-renderer";

test('clicking on overlay calls onClose function', () => {
  const onCloseMock = jest.fn();
  render(<ModalOverlay onClose={onCloseMock}/>);
  const overlay = screen.getByTestId('overlay');
  fireEvent.click(overlay);
  expect(onCloseMock).toHaveBeenCalled();
});

it('modalOverlay renders without mistakes', () => {
  const onCloseMock = jest.fn();
  const tree = renderer
    .create(<ModalOverlay onClose={onCloseMock}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})