
import {
    Button,
    MegaMenu,
    MegaMenuDropdown,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
function Navbar() {
    return (
        <div >
            <MegaMenu>
                <NavbarBrand href="/">
                    <img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
                </NavbarBrand>
                <div className="order-2 hidden items-center md:flex">
                    <a
                        href="#"
                        className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 md:mr-2 md:px-5 md:py-2.5 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Login
                    </a>
                    <Button href="#">Sign up</Button>
                </div>
                <NavbarToggle />
                <NavbarCollapse className="text-white">
                    <Link href="/">Home</Link>
                    <Link href={"/listed-books"}>Listed Books</Link>
                    <Link href={"/page-to-read"}>Pages to Read</Link>
                </NavbarCollapse>
            </MegaMenu>
        </div>
    );
}



export default Navbar;