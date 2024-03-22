
import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'

import rootReducer from "./reducer";
import rootsaga from "./saga/index";

    const sagaMiddleware=createSagaMiddleware ();

 const Store = createStore(rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      ));
      sagaMiddleware.run(rootsaga)
export default Store;





