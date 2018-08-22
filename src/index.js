import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route} from 'react-router-dom'

import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

class Hello extends React.Component {
	render() {
		return <div>Hello!</div>
	}
}

class GoodBye extends React.Component {
	render() {
		return <div>GoodBye!</div>
	}
}


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter >
    	<div>
    		Header
    		<Route path = "/hello" component = {Hello} />
    		<Route path = "/goodbye" component = {GoodBye}/>
    	</div>
    </ BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
