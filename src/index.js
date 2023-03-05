import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
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
  if (Action.type === "alertClose") {
    state = false;
    return state;
  } else {
    return state;
  }
}

let shopBase = [
  {
    id: 1,
    name: "IAB Studio T-Shirt White Light Green",
    quan: 0,
  },
  {
    id: 2,
    name: "IAB Studio Knit Black",
    quan: 0,
  },
  {
    id: 3,
    name: "IAB Studio Hoodie Brown",
    quan: 0,
  },
];

function reducer(state = shopBase, Action) {
  if (Action.type === "CategoryAdd") {
    let found = state.findIndex((a) => {
      return a.id === Action.payload.id;
    });
    if (found >= 0) {
      let shopBaseCopy = [...state];
      shopBaseCopy[found].quan++;
      return shopBaseCopy;
    } else {
      let shopBaseCopy = [...state];
      shopBaseCopy.push(Action.payload);
      return shopBaseCopy;
    }
  } else if (Action.type === "MountAdd") {
    let shopBaseCopy = [...state];
    let found = state.findIndex((a) => {
      return a.id === Action.Data;
    });
    shopBaseCopy[found].quan++;
    return shopBaseCopy;
  } else if (Action.type === "MountSubtract") {
    let shopBaseCopy = [...state];
    let found = state.findIndex((a) => {
      return a.id === Action.Data;
    });
    if (shopBaseCopy[found].quan <= 0) {
      shopBaseCopy[found].quan = 0;
    } else {
      shopBaseCopy[found].quan--;
    }
    return shopBaseCopy;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({ reducer, reducer2 }));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
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
