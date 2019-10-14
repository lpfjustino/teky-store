import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./header/Header";
import CategoriesList from "./CategoriesList";
import Subscription from './Subscription';
import Footer from './footer/Footer';
import Home from './views/Home';
import Products from './views/Products';
import Product from './views/Product';

function App() {   
    return (
        <div className="App">
            <BrowserRouter>
            <Header />
            <CategoriesList />

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products" exact component={Products} />
                <Route path="/products/:id" component={Product} />
            </Switch>

            <Subscription />
            <Footer />
            </ BrowserRouter>
        </div>
    );
}

export default App;
