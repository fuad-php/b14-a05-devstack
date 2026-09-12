import type { Dispatch, SetStateAction } from "react";
import Logo from "../../assets/logo-text.png"

const MobileNav = ({isMenuOpen,setIsMenuOpen}:{isMenuOpen: boolean, setIsMenuOpen:Dispatch<SetStateAction<boolean>>}) => {
    return (
        <div className="lg:hidden">
                <div className="flex items-center justify-between">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">☰</button>
                    <img src={Logo} alt="Logo" className="w-32 absolute left-1/2 -translate-x-1/2" />

                    <div className="flex items-center gap-2 ml-auto">
                        <button className="btn btn-sm">Sign In</button>
                        <button className="btn btn-sm bg-pink-600 text-white border-0 rounded-3xl">Sign Up</button>
                    </div>
                </div>
                
                {isMenuOpen && (
                    <ul className="flex flex-col gap-4 mt-5 pt-4 border-t">
                        <li className="text-pink-600 font-semibold">Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                )}

            </div>
    );
};

export default MobileNav;