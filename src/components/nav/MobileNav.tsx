import type { Dispatch, SetStateAction } from "react";
import Logo from "../../assets/logo-text.png"
import hamburger from "../../assets/hamburger.png"

const MobileNav = ({isMenuOpen,setIsMenuOpen}:{isMenuOpen: boolean, setIsMenuOpen:Dispatch<SetStateAction<boolean>>}) => {
    return (
        <div className="lg:hidden">
                <div className="grid grid-cols-3 items-center justify-between">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl"><img src={hamburger} alt="mobile hamburger" /></button>
                    <img src={Logo} alt="Logo" className="w-32" />
                    <div className="flex items-center gap-2 ml-auto">
                        <button className="btn btn-sm">Sign In</button>
                        <button className="btn btn-sm bg-pink-600 text-white border-0 rounded-3xl">Sign Up</button>
                    </div>
                </div>
                
                {isMenuOpen && (
                    <ul className="flex flex-col gap-4 mt-5 pt-4 border-t">
                        <li className="text-pink-600 font-semibold">Home</li>
                        <li className="hover:text-pink-600">Technologies</li>
                        <li className="hover:text-pink-600">Projects</li>
                        <li className="hover:text-pink-600">About</li>
                        <li className="hover:text-pink-600">Contact</li>
                    </ul>
                )}

            </div>
    );
};

export default MobileNav;