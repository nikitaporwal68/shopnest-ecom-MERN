import React from "react";
import ReactDOM from "react-dom/client";
import './styles/global.css'
import store from "./redux/store";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </Provider>
    </React.StrictMode>
);