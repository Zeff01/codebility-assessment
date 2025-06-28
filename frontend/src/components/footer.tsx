export default function Footer() {
    const footerLinks = [
        { label: "Privacy Policy", path: "/" },
        { label: "Winter", path: "/" },
        { label: "How It Works", path: "/" },
        { label: "Refer & Earn", path: "/" },
        { label: "Merchant Solutions", path: "/" },
    ];

    const socialLinks = [
        { label: "Instagram", path: "https://instagram.com" },
        { label: "Twitter", path: "https://twitter.com" },
        { label: "Facebook", path: "https://facebook.com" },
        { label: "YouTube", path: "https://youtube.com" },
        { label: "LinkedIn", path: "https://linkedin.com" },
    ];

    return (
        <footer className="bg-gradient">
            <div className="container mx-auto text-white px-6 grid py-10 gap-10 sm:grid-cols-3">
                <div className="col-span-1 sm:col-span-3 md:col-span-1">
                    <h1 className="text-2xl font-bold text-primary mb-4">Moola</h1>
                    <p className="text-sm">
                        Designated trademarks and brands are the property of their respective owners. Moola Inc. and its products are not affiliated or endorsed by such owners.
                    </p>
                </div>

                <div>
                    <h2 className="font-semibold text-md mb-3">Explore</h2>
                    <ul className="space-y-2">
                        {footerLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.path}
                                    className="hover:text-purple-300 transition"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="font-semibold text-md mb-3">Follow Us</h2>
                    <ul className="space-y-2">
                        {socialLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-purple-300 transition"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-10 bg-white text-center text-purple-600 text-xs px-4 py-2">
                <p>
                    &copy; {new Date().getFullYear()} Moola Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
