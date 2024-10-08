import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem({link ,title , name , icon , activeNavName , setActiveNavName}) {
    return (
        <NavLink to={link} className={`${name === activeNavName ? "font-bold text-primary" : "font-semibold text-[#a5a5a5]"} flex items-center gap-x-2 py-2 text-lg`}
        onClick={()=> setActiveNavName(name)}>
                {icon}
                {title}

        </NavLink>
    )
}

export default NavItem