import image from "../assets/illustration-dashboard.png";
import contacts from "../assets/contacts.png";
import social from "../assets/social.png";
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
			<p className="text-sm md:text-lg py-5 text-gray-500 dark:text-white">Join the waitlist and get notified!</p>

			<Form />

			{/* <div class="row">
				<div class="column">
					<img
						src={contacts}
						alt="contacts"
						// className="w-[90%] md:w-[80%] mx-auto mt-10"
						style="width:100%"
					/>
				</div>
				<div class="column">
					<img
						src={social}
						alt="social"
						// className="w-[90%] md:w-[80%] mx-auto mt-10"
						style="width:100%"
					/>
				</div>
				<div class="column">
					<img
						src={business}
						alt="business"
						className="w-[90%] md:w-[80%] mx-auto mt-10"
					/>
				</div>
			</div> */}
			{/* <div className="productsContainer">
				<img
					src={contacts}
					alt="contacts"
					className="w-[90%] md:w-[80%] mx-auto mt-10 products.img"
					// style="width:100%"
				/>
				<img
					src={social}
					alt="social"
					className="w-[90%] md:w-[80%] mx-auto mt-10"
					// style="width:100%"
				/>
				<img
					src={business}
					alt="business"
					className="w-[90%] md:w-[80%] mx-auto mt-10"
				/>
			</div> */}

			<div class="scroll-container">
				<img
					src={contacts}
					alt="contacts"
					// className="w-[90%] md:w-[80%] mx-auto mt-10 products.img"
					// style="width:100%"
				/>
				<img
					src={social}
					alt="social"
					// className="w-[90%] md:w-[80%] mx-auto mt-10"
					// style="width:100%"
				/>
				<img
					src={business}
					alt="business"
					// className="w-[90%] md:w-[80%] mx-auto mt-10"
				/>
			</div>
		</header>
	);
}

export default Header;
