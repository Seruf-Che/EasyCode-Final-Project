import React from "react";
import {Switch, Route} from "react-router-dom";
import ScrollToTop from "../wrappers-components/scroll-to-top/scroll-to-top";

import Modal from "../modal/modal"
import Header from "../header/header";
import HomePage from "../pages/home-page/home-page";
import Page404 from "../pages/page-404/page-404";
import CategoryPage from "../pages/category-page/category-page";
import ProductPage from "../pages/product-page/product-page";
import AccountPage from "../pages/account-page/account-page";
import CartPage from "../pages/cart-page/cart-page";
import Footer from "../footer/footer";
import LoggedRouter from "../wrappers-components/logged-router/logged-router";

const App = () => {
  return(
    <>
      <Modal />
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/product/:id" exact
          render={({match}) =>
            <ScrollToTop>
              <ProductPage id={match.params.id}/>
            </ScrollToTop>
          }/>
        <Route path="/category/:id" exact
          render={({match}) => <CategoryPage id={match.params.id}/>} />
        <LoggedRouter path="/cart" exact>
          <CartPage />
        </LoggedRouter>
        <LoggedRouter path="/account" exact>
          <AccountPage />
        </LoggedRouter>
        <Route path="">
          <Page404 />
        </Route>
      </Switch>
      <Footer />
    </>
  )
};

export default App;
