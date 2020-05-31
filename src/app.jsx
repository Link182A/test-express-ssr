import React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Loadable from 'react-loadable';

import { Provider } from 'react-redux';
import store from './store';

import { SkipServer } from './commponents/helpers';

const Home = Loadable({
	loader: () => import('./pages/home'),
	loading() {
		return <div>Loading...</div>;
	},
});

const ShowsList = Loadable({
	loader: () => import('./pages/list'),
	loading() {
		return <div>Loading...</div>;
	},
});

const SingleShow = Loadable({
	loader: () => import('./pages/single'),
	loading() {
		return <div>Loading...</div>;
	},
});

const App = () => (
	<Provider store={store}>
		<h1 className='container mt-3'><Link to='/'>Search</Link></h1>
		<Switch>
			<Route
				exact
				path='/'
				render={() => (
					<Home />
				)}
			/>

			<Route
				path='/list'
				render={() => (
					<SkipServer>
						<ShowsList />
					</SkipServer>
				)}
			/>

			<Route
				path='/single'
				render={() => (
					<SkipServer>
						<SingleShow />
					</SkipServer>
				)}
			/>
		</Switch>
	</Provider>

);

export default App;
