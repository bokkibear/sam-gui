import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const storeReducer = combineReducers({
    iconStyle: ( state = "small", action ) => {
        if ( action.type === "UPDATE_ICON_STYLE" ) return action.iconStyle;
        return state;
    }
});

const store = createStore(storeReducer);

const appElementToRender = (
    <Provider store={ store }>
        <App />
    </Provider>
);

ReactDOM.render(appElementToRender, document.getElementById('root'));
registerServiceWorker();
