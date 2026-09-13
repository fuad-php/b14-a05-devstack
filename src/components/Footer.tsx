import footerLogo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="w-full mt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
                    <div className="flex flex-col">
                        <img className="w-[120px]" src={footerLogo} alt="footer logo" />
                        <p className="text-gray-400 my-4 max-w-md">
                            Curated tools, technologies and resources for
                            developers building modern software
                        </p>
                        <div className="flex flex-wrap gap-4 font-bold text-gray-400">
                            <a href="#" className="hover:text-pink-400 transition">Github</a>
                            <a href="#" className="hover:text-pink-400 transition">Twitter</a>
                            <a href="#" className="hover:text-pink-400 transition">Linkedin</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl font-semibold">Product</h3>
                            <ul className="flex flex-col gap-2 text-gray-400">
                                <li>Home</li>
                                <li>Technologies</li>
                                <li>Projects</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl font-semibold">Company</h3>
                            <ul className="flex flex-col gap-2 text-gray-400">
                                <li>About</li>
                                <li>Contact</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
                            <h3 className="text-xl font-semibold">Legal</h3>
                            <ul className="flex flex-col gap-2 text-gray-400">
                                <li>Privacy Policy</li>
                                <li>Terms of Conditions</li>
                            </ul>
                        </div>
                    </div>
                </div>                
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6 text-sm text-gray-400 border-t">
                    <p className="text-center sm:text-left">© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-pink-400 transition">Privacy</a>
                        <a href="#" className="hover:text-pink-400 transition">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
