import logo from "../assets/logo.svg";

import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
	return (
		<nav className="flex items-center justify-between py-5">
			{/* <img
        src={logo}
        alt="the logo image"
        className="w-[70px] dark:filter dark:invert"
      /> */}
			<h2 className="font-extrabold dark:text-white">TheContacts Company </h2>
			<ThemeSwitcher />
		</nav>
	);
}

export default Navbar;
