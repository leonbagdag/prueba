import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Login from './views/Login';
import Home from './views/Home';
import Details from './views/Details';
import Register from './views/Register';
import Post from './views/Post';

// Layouts
import DashboardLayoutRoute from './templates/Dashboard';
import PublicLayoutRoute from './templates/Public';

// Context
import injectContext from './store/appContext';

class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<div>
					<BrowserRouter>
						<Switch>
							<PublicLayoutRoute exact path="/" component={Login} />
							<PublicLayoutRoute exact path="/register" component={Register} />
							<DashboardLayoutRoute path="/tasks" component={Home} />
							<DashboardLayoutRoute path="/new" component={Post} />
							<DashboardLayoutRoute path="/tasks/:theid" component={Details} />
							<Route render={() => <h1>Esta página no existe :(</h1>} />
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default injectContext(Layout);
