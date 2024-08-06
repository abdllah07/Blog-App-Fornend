import React, { useState } from 'react'
import { images } from '../constants'
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/user';
import { useNavigate } from 'react-router-dom';


const navItemsInfo = [
    {name : "Home" , type: "link"},
    {name : "Articles", type: "link"},
    {name : "Pages" , type: "dropdown" , items: ['About us' , 'Contact us ']},
    {name : "Pricing", type: "link"},
    {name : "Faq", type: "link"},

]

const NavItem = ({item}) => {

    const  [dropDown , setDropDown] = useState(false);

    const toggleDropDownHandler = () => {
        setDropDown(!dropDown);
    }

    return <li className=' relative group '>
            {
                item.type === "link" ? (
                    <>
                    <a href="/" className='px-4 py-2'>
                    {item.name}
                    </a>
                    <span className='cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100'>/</span>
                </> 
                )
                :  (
                    <div className='flex flex-col items-center'>
                    <button  className='px-4 py-2 flex items-center' onClick={toggleDropDownHandler}>
                  
                    <span className='text-blue-500'> {item.name}</span>
                    <MdKeyboardArrowDown/> 
                    </button>
                    <div className={`${dropDown ? 'block' : 'hidden'} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
                        <ul className='bg-dark-soft lg:bg-transparent text-center  flex flex-col shadow-lg rounded-lg overflow-hidden'>
                            {item.items.map((page , index) => ( 
                                    <a key={index} href='/' className='px-4 py-2 hover:text-white hover:bg-dark-hard text-white lg:text-dark-soft'>{page}</a>
                            ))}
                        </ul>

                    </div>

                    </div> 
                )
            }
            </li>
}

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [navIsVisible , setNavIsVisible] = useState(false);
    const userState = useSelector(state=> state.user)
    const [profileDropDown, setProfileDropDown] = useState(false)
    const navVisibilityHandler = ()=> {
        setNavIsVisible((curState) => {
            return !curState;
        })
    }
    
    const logoutHandler = ()=> {
        dispatch(logout())
    }

    return (
        <section className='sticky top-0 left-0 right-0 z-50 bg-white '>
            <header className='container mx-auto px-5 flex justify-between py-4 items-center '>
                <div>
                    <img className='w-16 ' src={images.Logo}  alt="" />
                </div>
                <div className='z-50 lg:hidden'>{navIsVisible ? <IoMdClose className='w-6 h-6 ' onClick={navVisibilityHandler}/> : <IoIosMenu className='w-6 h-6' onClick={navVisibilityHandler}/> }</div>
                    <div className={`${navIsVisible ? "right-0" : "-right-full"} 
                                    transition-all duration-300 bg-dark-hard lg:bg-transparent mt-[56px] lg:mt-0  z-[49] flex flex-col w-full lg:w-auto lg:flex-row justify-center lg:justify-end fixed  top-0 bottom-0 lg:static gap-x-9 items-center `}>
                            <ul className='text-white lg:text-dark-soft items-center gap-y-5 flex flex-col lg:flex-row gap-x-2  font-semibold'>
                            {
                                navItemsInfo.map((item) => (
                                    <NavItem key={item.name} item = {item} />
                                ))}
                            </ul>
                            {
                                userState.userInfo ? (
                                    <div className='text-white lg:text-dark-soft items-center gap-y-5 flex flex-col lg:flex-row gap-x-2  font-semibold'>
                                        <div className="relative group">
                                            <div className='flex flex-col items-center'>
                                                <button
                                                className='mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white 
                                                    transition-all duration-300 gap-x-1 flex items-center' onClick={() => setProfileDropDown(!profileDropDown)}>
                                                    Account
                                                <MdKeyboardArrowDown />
                                                </button>

                                                <div className={`${profileDropDown ? 'block' : 'hidden'} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
                                                    <ul className='bg-dark-soft lg:bg-transparent text-center  flex flex-col shadow-lg rounded-lg overflow-hidden'>
                                                        <button  
                                                        onClick={() => {navigate('/profile')}} 
                                                        type='button' 
                                                        className='px-4 py-2 hover:text-white hover:bg-dark-hard text-white lg:text-dark-soft'>
                                                            Profile Page
                                                        </button>
                                                        <button  
                                                        onClick={logoutHandler}
                                                        type='button' 
                                                        className='px-4 py-2 hover:text-white hover:bg-dark-hard text-white lg:text-dark-soft'>Logout
                                                        </button>
                                                    
                                                
                                                    </ul>

                                                </div>

                                            </div> 
                                        </div>
                                    </div>
                                ) : (
                                    <button 
                                    onClick={() => {navigate('/login')}} 
                                    className='mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white 
                                    transition-all duration-300'>
                                        Sign ing
                                    </button>
                                )  
                            }
                    </div>

            </header>
        </section>
    )
}

export default Header