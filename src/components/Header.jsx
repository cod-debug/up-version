import { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Container from "./Container";
import { ArrowRight } from "./Icons/Arrow";

const links = [
    {
        path: '/',
        displayName: 'HOME'
    },
    {
        path: '/projects',
        displayName: 'PROJECTS'
    },
    {
        path: '/about-us',
        displayName: 'ABOUT US'
    }
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navLinkClassName = "w-full md:w-fit text-left";

    // Close the navbar when the route changes
    useEffect(() => {
      setIsOpen(false);
    }, [location]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sticky top-0 z-50 bg-white px-4 md:px-12">
            <Container>
                <Navbar fluid rounded>
                    <div className="flex justify-between w-full">
                        <Link to="/" className="block md:hidden">
                            <img src="./web-assets/logo.png" className="mr-3 h-16 sm:h-[53px]" alt="Flowbite React Logo" id="brandImg" />
                        </Link>
                        <Navbar.Toggle onClick={handleToggle} />
                    </div>
                    <Navbar.Collapse className={`w-[100%!important] ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-12">
                            <Link to="/" className="hidden md:block">
                                <img src="./web-assets/logo.png" className="mr-3 h-20 sm:h-[82px]" alt="Flowbite React Logo" id="brandImg2" />
                            </Link>
                            <div className="flex items-center gap-10">
                                <div className="flex flex-col md:flex-row gap-6 sm:gap-12">
                                    {
                                        links.map((i) => (
                                            <NavLink key={i.path} to={i.path} className={({ isActive }) => isActive ? navLinkClassName + ' active' : navLinkClassName}>{ i.displayName }</NavLink>
                                        ))
                                    }
                                </div>
                                <div className="font-light flex gap-4">
                                    <button className="px-8 py-2 rounded-3xl text-dark border bg-primary text-white hover:text-white hover:border-transparent">
                                        <div className="flex items-center gap-2">
                                            <span>Login</span> 
                                            <span className="w-full">
                                                <ArrowRight />
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}
