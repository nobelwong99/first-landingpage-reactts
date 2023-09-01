import image from "../assets/illustration-dashboard.png";
import contacts from "../assets/contacts.png";
import contacts2 from "../assets/contacts_2.png";
import social from "../assets/social.png";
import social2 from "../assets/social_2.png";
import business from "../assets/business.png";
import Form from "./Form";

function Header() {
	return (
		<header className="text-center py-5 md:py-14">
			{/* <h1 className="text-xl md:text-4xl dark:text-white">
        We are launching <span className="font-extrabold">soon!</span>
      </h1> */}
			{/* <h1 className="text-xl md:text-4xl dark:text-white"> */}
			<h1 className="bigh1 dark:text-white">
				Contacts <span className="font-extrabold">redesigned</span>
			</h1>
			<br />
			<h3 className="mb-1 dark:text-white">Create</h3>
			<h3 className="mb-1 dark:text-white">Exchange</h3>
			<h3 className="mb-1 dark:text-white">Stay in touch</h3>
			<br />
			{/* <p className="text-sm md:text-lg py-5 text-gray-500 dark:text-white">Subscribe and get motified</p> */}
			<p className="text-sm md:text-lg py-5 text-gray-500 dark:text-white">
				Join the waitlist and get <span className="font-italics">free early access</span>!
			</p>

			<Form />

			<div className="scroll-container">
				<img
					src={contacts2}
					alt="contacts2"
				/>
				<img
					src={social2}
					alt="social"
				/>
				<img
					src={business}
					alt="business"
				/>
			</div>
		</header>
	);
}

export default Header;
