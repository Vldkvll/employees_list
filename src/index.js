import React from "react";
import ReactDom from "react-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import App from "App";
import { Provider } from "react-redux";
import store from "redux/store";

ReactDom.render(
    <Provider store={store}>
        <CssBaseline />
        <App />
    </Provider>,
    document.getElementById("root")
);
