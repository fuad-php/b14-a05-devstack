import Logo from "../../assets/logo-text.png"

const DesktopNav = () => {
    return (
        <div className="hidden lg:flex items-center justify-between">                
            <img src={Logo} alt="Logo" className="w-40" />
            <ul className="flex items-center gap-6">
                <li className="text-pink-600 font-semibold cursor-pointer">
                    Home
                </li>
                <li className="cursor-pointer hover:text-pink-600">
                    Technologies
                </li>
                <li className="cursor-pointer hover:text-pink-600">
                    Projects
                </li>
                <li className="cursor-pointer hover:text-pink-600">
                    About
                </li>
                <li className="cursor-pointer hover:text-pink-600">
                    Contact
                </li>
            </ul>

            <div className="flex gap-3">
                <button className="btn">
                    Sign In
                </button>

                <button className="btn px-5 bg-pink-600 rounded-3xl text-white border-0">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default DesktopNav;