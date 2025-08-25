
interface NavigationItem {
    name :string;
    href :string;
}

/** The navigation list items */
const navigation :NavigationItem[] = 
    [
        { name: "Home",         href: "/" },
        //{ name: "My Todo",      href: "/todo" },
        { name: "Login",        href: "/login" },
        //{ name: "Register",     href: "/register" }
    ];

export default navigation;
