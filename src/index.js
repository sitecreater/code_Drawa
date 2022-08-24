import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {combineReducers, createStore} from 'redux';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

if ("serviceWorker" in navigator) {
    navigator
        .serviceWorker
        .register("../firebase-messaging-sw.js")
        .then(function (registration) {
            console.log("Registration successful, scope is:", registration.scope);
        })
        .catch(function (err) {
            console.log("Service worker registration failed, error:", err);
        });
}
let alertBase = true;

function reducer2(state = alertBase, Action) {
    if (Action.type === 'alertClose') {
        state = false;
        return state;
    } else {
        return state;
    }
}

let Base = [
    {
        id: 1,
        name: 'IAB Studio T-Shirt White Light Green',
        quan: 0
    }, {
        id: 2,
        name: 'IAB Studio Knit Black',
        quan: 0
    }, {
        id: 3,
        name: 'IAB Studio Hoodie Brown',
        quan: 0
    }
];

function reducer(state = Base, Action) {
    if (Action.type === "CategoryAdd") {
        let found = state.findIndex((a) => {
            return a.id === Action.payload.id;
        });
        if (found >= 0) {
            let Basecopy = [...state];
            Basecopy[found].quan++;
            return Basecopy;
        } else {
            let Basecopy = [...state];
            Basecopy.push(Action.payload);
            return Basecopy;
        }
    } else if (Action.type === "MountAdd") {
        let Basecopy = [...state];
        let found = state.findIndex((a) => {
            return a.id === Action.Data;
        });
        Basecopy[found].quan++;
        return Basecopy;

    } else if (Action.type === "MountSubtract") {
        let Basecopy = [...state];
        let found = state.findIndex((a) => {
            return a.id === Action.Data;
        });
        if (Basecopy[found].quan <= 0) {
            Basecopy[found].quan = 0;
        } else {
            Basecopy[found].quan--;
        }
        return Basecopy;
    } else {
        return state;
    }
}

let store = createStore(combineReducers({reducer, reducer2}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register(); //pwa update

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
