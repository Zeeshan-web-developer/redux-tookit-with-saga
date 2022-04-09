import { configureStore,compose } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./RootSaga";
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    // devTools: process.env.NODE_ENV !== "production",
    // enhancers: composeEnhancers(),
});
sagaMiddleware.run(rootSaga);
export default store;