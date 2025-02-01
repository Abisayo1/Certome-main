import { useState } from "react";
import { BiRightArrowAlt, BiMenuAltRight, BiX } from "react-icons/bi";
import logo from '../assets/certome_logo.png';
import { NavLink } from "react-router-dom";
import NavComponent from "./NavComponent";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";

function Navbar() {
    const Nav = [
        {
            name: "Resources", route: '',
            nested_routes: [
                { name: 'Features', route: '/FeaturesSession' },
                { name: 'Blog', route: '/Blogs' },
                { name: 'Company', route: '/CompanySes' },
                { name: 'FAQs', route: '/FAQ' },
                { name: 'API Integration', route: '/APISection' },
                { name: 'Tutorial', route: '/tutorial' },
                { name: 'Career', route: '/Career' }
            ]
        },
        {
            name: 'Industries', route: '/Industries',
            nested_routes: [
                { name: 'E-Learning Platform', route: '/' },
                { name: 'Schools', route: '/' },
                { name: 'Associations', route: '/' },
                { name: 'Government Organisations', route: '/' },
                { name: 'Professional Training', route: '/' },
            ]
        },
        { name: 'Pricing', route: '/Pricing', nested_routes: [] },
        { name: 'Contact us', route: '/Contact', nested_routes: [] }
    ];

    const [navOpen, setNavOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleNavClick = () => {
        setNavOpen(false);
    };

    const handleDropdownClick = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
            setNavOpen(false);
        } else {
            setActiveDropdown(index);
        }
    };

    const handleNestedItemClick = () => {
        setNavOpen(false);
    };

    return (
        <header className="flex shadow-xl relative h-24 text-l justify-between items-center w-full px-2 sm:px-20">
            <NavLink to='/home' onClick={handleNavClick}>
                <div className="logo w-32 float-start sm:w-40">
                    <img src={logo} alt="Certome Logo" />
                </div>
            </NavLink>

            <OutsideClickHandler onOutsideClick={() => setNavOpen(false)}>
                <div>
                    {navOpen ?
                        <BiX onClick={() => setNavOpen(false)} className="text-5xl xl:hidden" />
                        :
                        <BiMenuAltRight onClick={() => setNavOpen(true)} className="text-5xl xl:hidden" />
                    }
                </div>
                
                <div className={`nav-links xl:flex-row right-0 xl:right-0 flex-col xl:relative absolute xl:top-0 top-20 xl:bg-opacity-0 rounded-xl bg-primary flex items-center justify-end flex-1 xl:min-w-[900px] duration-500 transition-all ease-in-out xl:scale-100 ${navOpen ? 'scale-100' : 'scale-0'} z-[9999]`}>
                    {Nav.map((data, index) => (
                        <div key={index}>
                            <div onClick={(e) => {
                                e.stopPropagation();
                                if (data.nested_routes.length > 0) {
                                    handleDropdownClick(index);
                                } else {
                                    handleNavClick();
                                }
                            }}>
                                <NavComponent 
                                    name={data.name} 
                                    route={data.route} 
                                    nested_route={data.nested_routes} 
                                    setNavOpen={setNavOpen} 
                                    onNestedItemClick={handleNestedItemClick}
                                />
                            </div>
                        </div>
                    ))}

                    <NavLink className='py-4 px-5 bg-[#2727b3] xl:bg-primary text-white rounded-xl' to='/demo' onClick={handleNavClick}>
                        Book a demo
                    </NavLink>
                    
                    <div className="xl:text-primary text-white xl:mx-10 m-10 flex items-center">
                        <NavLink to='/contact' onClick={handleNavClick}>Sign up</NavLink>
                        <BiRightArrowAlt className="mx-2" />
                    </div>
                </div>
            </OutsideClickHandler>
        </header>
    );
}

export default Navbar;