import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';

const DashboardLayout = ({ children }) => (
	<div>
		<Navbar />
		<div className="App">
			<Sidebar />
			{children}
		</div>
	</div>
);

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(matchProps) => (
				<DashboardLayout>
					<Component {...matchProps} />
				</DashboardLayout>
			)}
		/>
	);
};

export default DashboardLayoutRoute;
