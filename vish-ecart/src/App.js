import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import Nav from './components/Navbar';
import Product from './components/Product';
import {
  About,
  Cart,
  Singleproduct,
  Productpage,
  Home,
  Checkout,
} from './pages';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/products'>
          <Productpage />
        </Route>

        <Route path='/products/:id' children={<Singleproduct />} />
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
