import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Blog from "./pages/blog";

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/page/detail" component={Detail} />
    <Route exact path="/page/blog/:id" component={Blog} />
  </Switch>
)

