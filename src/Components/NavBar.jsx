import Logo from "./Logo.jsx";
import {useEffect, useRef, useState} from "react";


export default function NavBar({items}) {

    let [scrollPosition, setScrollPosition] = useState(0);

    const [menuIsOpen, setMenuState] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", pageScroll);
    });

    const animateBurger = () => {

        const burgerBar1 = document.getElementById('burger-bar-1');
        const burgerBar2 = document.getElementById('burger-bar-2');
        const burgerBar3 = document.getElementById('burger-bar-3');

        burgerBar1.classList.toggle('-rotate-45');
        burgerBar1.classList.toggle('absolute');

        burgerBar2.classList.toggle('opacity-0');

        burgerBar3.classList.toggle('rotate-45');
        burgerBar3.classList.toggle('absolute');
    };

    const pageScroll = () => {
        // eslint-disable-next-line no-restricted-globals
        setScrollPosition(scrollPosition = scrollY);
    }

    const setHeaderFixedOnScroll = () => {
        return (scrollPosition > 0) ? 'fixed' : '';
    }

    const toggleMenu = () => {

        setMenuState(!menuIsOpen)

        const navMenu = document.getElementById('nav-menu-mobile');
        navMenu.classList.toggle('hidden');

        animateBurger();
    }

    const handleClick = (e) => {
        const elementHeader = document.getElementById(e.target.innerText.split(" ").join("-").toLowerCase());
        elementHeader.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    const navItems = items.map((item) =>
        <li
            onClick={handleClick}
            className='py-4 cursor-pointer w-full text-center mx-3 transition-all hover:scale-110 md:py-0'
            key={item}
        >
            {item}
        </li>);

    return (
        <>
            {/* Desktop Nav */}
            <nav className={`w-full bg-primary py-2 z-50 border-b-2 border-white ${setHeaderFixedOnScroll()}`}>
                <div className='container mx-auto flex flex-row justify-between'>
                    <Logo className={`w-1/2 border-3 border-green flex items-center`}/>
                    <div
                        className='z-10 group md:hidden flex flex-col w-2/12 justify-center items-center relative cursor-pointer'
                        onClick={toggleMenu}
                    >
                        <div
                            id='burger-bar-1'
                            className='w-1/2 bg-white h-1 origin-center transition-all ease-in-out duration-500'></div>
                        <div
                            id='burger-bar-2'
                            className='w-1/2 bg-white h-1 my-2 sm:my-4 transition-all ease-in duration-200'></div>
                        <div
                            id='burger-bar-3'
                            className='w-1/2 bg-white h-1 origin-center transition-all ease-in-out duration-500'></div>
                    </div>
                    <ul className='hidden md:flex flex-row items-center w-3/4 lg:w-1/2'>
                        {navItems}
                    </ul>
                </div>
            </nav>

            {/* Mobile Nav */}
            <div className='relative'>

            <nav className={`w-full flex justify-end relative ${setHeaderFixedOnScroll()} text-lightPrimary`}>
                <ul
                    onClick={() => toggleMenu()}
                    id='nav-menu-mobile'
                    className={`hidden md:hidden fixed top-20 flex-col items-center w-3/4 bg-secondary z-50`}
                >
                    {navItems}
                </ul>
            </nav>
            </div>
        </>
    )
}