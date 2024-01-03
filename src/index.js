import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import redux
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";

// Import data from root reducer
import rootReducer from "./services/reducers/indexRootReducer";

// To create a store
const store = legacy_createStore(rootReducer);
console.log("index js",store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //  1. The Provider component, imported from react-redux, is designed to make the Redux store accessible to components throughout a React application.
  //  2.  It acts as a bridge between the Redux store and React components, enabling them to interact with the global application state.
  //  3. Wraps Application: You typically place the Provider component at the top level of your React component tree, wrapping your main application component.
  //  4. Provides Store: You pass the Redux store as a prop to the Provider component (store={store}).
  //  5. Context: Internally, Provider uses React's Context API to make the store available to all components that are descendants of it.
  //  6. Connected Components: Components that need to access the store can do so using either the connect function (for class components) or the useSelector and useDispatch hooks (for functional components).

  // Provider will always have a value as a store..
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
