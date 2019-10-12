import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./header/Header";
import CategoriesList from "./CategoriesList";
import Subscription from './Subscription';
import Footer from './footer/Footer';
import Home from './views/Home';
import Products from './views/Products';

function App() {   
    return (
        <div className="App">
            <Header />
            <CategoriesList />

            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/products" component={Products} />
                </Switch>
            </ BrowserRouter>

            <Subscription />
            <Footer />
        </div>
    );
}

export default App;
