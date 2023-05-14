import React from 'react';
import renderer from 'react-test-renderer';

import HeaderButton from "./HeaderButton";
import {BrowserRouter as Router} from 'react-router-dom';
import {ROUTES} from "../../constants/routes";

it('Кнопка шапки рендерится без ошибок', () => {
  const tree = renderer
    .create(<Router><HeaderButton text={"Лента заказов"} type={"list"} href={ROUTES.feed}/></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})