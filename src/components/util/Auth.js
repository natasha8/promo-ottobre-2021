import React, { createContext, useEffect, useState } from "react";
import config from "./firebase";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		config.auth().onAuthStateChange(setCurrentUser);
	}, []);
	return (
		<AuthContext.Provider value={{ currentUser }}>
			{children}
		</AuthContext.Provider>
	);
};
