import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthContex";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { currentUser } = useAuth();
	return (
		<Route
			{...rest}
			render={(routeProps) =>
				!!currentUser ? (
					<Component {...routeProps} />
				) : (
					<Redirect to={"/login"} />
				)
			}
		/>
	);
};

export default PrivateRoute;
