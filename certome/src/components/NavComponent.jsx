import React, { useState } from 'react';
import { BiCaretDown } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';
import { NavLink } from 'react-router-dom';

const NavComponent = ({ name, nested_route, route }) => {


    const [open, setOpen] = useState(false);


    return (
        <div>


            <div className='flex flex-col relative py-5 px-10 items-center ' >

                <OutsideClickHandler onOutsideClick={() => { setOpen(false) }} >

                    <div className="flex items-center text-white xl:text-primary cursor-pointer " onClick={() => { setOpen(!open) }} >
                        <NavLink className='' to={route} >{name}</NavLink>
                        {nested_route.length > 0 ?
                            <BiCaretDown className={` ${open ? '-rotate-180' : 'rotate-0'} mx-2 duration-300 transition-all ease-in `} /> :
                            ''}
                    </div>

                </OutsideClickHandler>

                <div className={` ${open ? ' scale-100 ' : ' scale-0 '}  z-[9999] rounded-xl xl:-right-10 sm:right-56 bg-[#21218f] sm:bg-primary py-2 my-10 text-white flex flex-col absolute duration-700 transition-all ease-in-out  `} >
                    {nested_route.map(data => (
                        <NavLink to={data.route} >
                            <div className=' hover:border-l-8 h-12 flex items-center py-8 border-l-[#3030bd] px-10 ' >{data.name}</div>
                        </NavLink>
                    ))}
                </div>

            </div>

        </div>
    );
}

export default NavComponent;
