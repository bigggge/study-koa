import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Router from './router'
import { Provider } from "react-redux";
import create from "./redux/store/create";

const store = create(window.__STORE__ || {});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

render(<App />, document.getElementById('app'));
