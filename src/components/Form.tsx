import { FormEvent, useState } from "react";
import { doc, collection, addDoc } from "firebase/firestore";
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

async function submitEmail(email: string) {
	const docRef = await addDoc(collection(db, "Waitlist"), {
		email: email,
	});
}

function Form() {
	const [email, setEmail] = useState<string>("");
	const [error, setError] = useState<string>("");
	const regex =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	const SubmitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (email === "" || regex.test(email) === false) {
			setError("Email is Invalid!");
		} else {
			setError("");
			submitEmail(email);
			alert(`${email} is added to the waiting list!`);
			setEmail("");
		}
	};

	return (
		<form
			action=""
			className="py-5"
			onSubmit={(e) => SubmitForm(e)}
		>
			<div className="flex flex-col md:flex-row items-center">
				<div className="w-[90%] md:w-[65%] mb-0 md:-mb-[29px]">
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className={`${
							error !== "" ? "border-red-600" : "border-gray-500"
						} select-all w-full placeholder:text-gray-500 rcorners1 py-3 px-6 bg-transparent dark:text-white`}
						placeholder="Your email address..."
						// rounded-full css
					/>
					<p className="text-left h-7 pt-1 text-sm pl-5 text-red-600">{error}</p>
				</div>
				<button
					type="submit"
					className="w-[90%] md:w-[30%] py-3 px-6 bg-blue text-white hover:opacity-70 rcorners1 mx-auto shadow-xl shadow-light-blue"
				>
					Notify me
				</button>
			</div>
		</form>
	);
}

export default Form;
