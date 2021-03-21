import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/app';


const store = createStore(reducer);


// const {inc, dec, res} =  bindActionCreators(actions, dispatch);

    ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));



