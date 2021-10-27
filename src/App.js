import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import NavBar from "./components/nav/NavBar";
import SignUp from "./components/auth/SignUp";
import { AuthProvider } from "./components/util/AuthContex";
import PrivateRoute from "./components/util/PrivateRoute";
import Login from "./components/auth/Login";
import FeedBack from "./components/promo/promo/singlePromo/Feedback";
import ForgotPass from "./components/auth/ForgotPass";
import Footer from "./components/footer/Footer";
import PromoHome from "./components/promo/promo/PromoHome";
import Sk002split from "./components/promo/promo/singlePromo/Sk002split";
import Sk003split from "./components/promo/promo/singlePromo/Sk003split";
import Sk019d from "./components/promo/promo/singlePromo/Sk019d";
import Sk020d from "./components/promo/promo/singlePromo/Sk020d";

const NoMatch = ({ location }) => (
	<h3>
		No match for <code>{location.pathname}</code>
	</h3>
);

const App = () => {
	return (
		<HashRouter>
			<AuthProvider>
				<div className="app_container">
					<header className="app_header">
						<NavBar />
					</header>
					<section className="app_content">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route
								exact
								path="/C82SaCpJZ3vYGNKg"
								component={SignUp}
							/>
							<Route exact path="/login" component={Login} />
							<Route
								exact
								path="/reset-password"
								component={ForgotPass}
							/>
							<PrivateRoute
								exact
								path="/promo"
								component={PromoHome}
							/>
							<PrivateRoute
								exact
								path="/SK002SPLT"
								component={Sk002split}
							/>
							<PrivateRoute
								exact
								path="/SK003SPLT"
								component={Sk003split}
							/>
							<PrivateRoute
								exact
								path="/SK019D"
								component={Sk019d}
							/>
							<PrivateRoute
								exact
								path="/SK020D"
								component={Sk020d}
							/>
							<PrivateRoute
								exact
								path="/Ez68uCCbqC7QcE4x"
								component={FeedBack}
							/>
							<Route component={NoMatch} />
						</Switch>
					</section>
					<footer>
						<Footer />
					</footer>
				</div>
			</AuthProvider>
		</HashRouter>
	);
};

export default App;
