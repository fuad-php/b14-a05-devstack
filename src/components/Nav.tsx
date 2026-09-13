import { useEffect, useState } from "react";
import MobileNav from "./nav/MobileNav";
import DesktopNav from "./nav/DesktopNav";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`
                sticky top-0 z-50 w-full
                transition-all duration-300
                ${isScrolled ? "bg-base-100 shadow-md" : "bg-transparent"}
            `}
        >
            <div className="mx-auto max-w-7xl px-4 py-4">
                <MobileNav
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                />

                <DesktopNav />
            </div>
        </nav>
    );
};

export default Nav;