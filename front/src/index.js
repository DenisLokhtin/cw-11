import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/configureStore";
import {ToastContainer} from "react-toastify";
import history from "./history";
import App from './App';

const app = (
    <Provider store={store}>
        <BrowserRouter history={history}>
            <ToastContainer/>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));