import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "store";
import App from "./App";
import Firebase, { FirebaseContext } from "components/Firebase";
import * as serviceWorker from "./serviceWorker";

const store = configureStore(/* provide initial state if any */);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <FirebaseContext.Provider value={Firebase}>
        <App />
      </FirebaseContext.Provider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();