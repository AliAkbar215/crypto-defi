import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './redux/store'
import MainApp from './MainApp';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <MainApp />
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
