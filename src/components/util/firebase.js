import firebase from "firebase/app";
import "@firebase/database";
import "@firebase/auth";
import "@firebase/firestore";

const config = {
	apiKey:
		process.env.REACT_APP_FIREBASE_KEY ||
		"AIzaSyAatfANGlMILDuoFkDMSwRj7pdodhVIFRc",
	authDomain:
		process.env.REACT_APP_FIREBASE_DOMAIN || "promo-5c16e.firebaseapp.com",
	databaseURL:
		process.env.REACT_APP_FIREBASE_REACT_DATABASE ||
		"https://promo-5c16e-default-rtdb.europe-west1.firebasedatabase.app/",
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "promo-5c16e",
	storageBucket:
		process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ||
		"promo-5c16e.appspot.com",
	messagingSenderId:
		process.env.REACT_APP_FIREBASE_SENDER_ID || "382006548063",
	appId:
		process.env.REACT_APP_FIREBASE_APP_ID ||
		"1:382006548063:web:b35634fd9a50b41ef76dea",
};

let firebaseCache;

export const getFirebase = () => {
	if (firebaseCache) {
		return firebaseCache;
	}

	firebase.initializeApp(config);
	firebaseCache = firebase;
	return firebase;
};
export const auth = getFirebase().auth();
const firestore = getFirebase().firestore();
export { firestore };
