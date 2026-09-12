import { useState } from "react";
import MobileNav from "./nav/MobileNav";
import DesktopNav from "./nav/DesktopNav";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="max-w-7xl mx-auto px-4 py-4">
            <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen = {setIsMenuOpen} />
            <DesktopNav />
        </nav>
    );
};

export default Nav;
