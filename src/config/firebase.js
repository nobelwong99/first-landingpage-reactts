import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCkyQ0S6POATK7AZN933MxUozyM__Jz7H0",
	authDomain: "thecontacts-co.firebaseapp.com",
	databaseURL: "https://thecontacts-co-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "thecontacts-co",
	storageBucket: "thecontacts-co.appspot.com",
	messagingSenderId: "184167649934",
	appId: "1:184167649934:web:18523c51c997ff2733afdf",
	measurementId: "G-0FT11BWRGM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
