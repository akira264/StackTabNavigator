import React, { Component } from 'react';
//Redux
import { createStore , applyMiddleware} from 'redux';
import allReducers from '../Reducers/index';
// Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../Sagas/rootSaga';



const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers , applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;