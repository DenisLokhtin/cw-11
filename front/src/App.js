import Products from "./containers/Products/Products";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Product from "./containers/Product/Product";
import NewPost from "./containers/NewProduct/NewProduct";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import {Route, Switch} from "react-router-dom";
import React from "react";
import './App.css';

function App() {
    return (
        <div>
            <Toolbar/>
            <Switch>
                <Route path="/" exact component={Products}/>
                <Route path="/posts/new" exact component={NewPost}/>
                <Route path="/posts/:id" exact component={Product}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </div>
    );
}

export default App;