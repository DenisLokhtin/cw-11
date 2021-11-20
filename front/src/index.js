import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/configureStore";
import {ToastContainer} from "react-toastify";
import history from "./history";
import App from './App';

import 'react-toastify/dist/ReactToastify.css';

const app = (
    <Provider store={store}>
        <Router history={history}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <App/>
        </Router>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));