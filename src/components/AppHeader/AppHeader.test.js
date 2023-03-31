import React from 'react';
import renderer from 'react-test-renderer';

import AppHeader from "./AppHeader";
import {BrowserRouter as Router} from 'react-router-dom';

it('Шапка рендерится без ошибок', () => {
  const tree = renderer
    .create(<Router><AppHeader/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})