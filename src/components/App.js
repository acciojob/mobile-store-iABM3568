import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/admin">ADMIN</Link>
      </nav>

      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/admin" component={AdminPanel} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
