import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BsChevronDown } from 'react-icons/bs';
import logo from '../../assets/logo.png';
import './navbar.css';

const Menu = () => (
    <>
        <p><a href="https://mikenyambe.com/">home</a></p>
        <p><a href="https://mikenyambe.com/">about</a></p>
        <div class="dropdown">
            <button class="dropbtn">programs <BsChevronDown className='shev' color='#fff' size={18} /></button>
            <div class="dropdown-content">
                <a href="https://mikenyambe.com/">degree</a>
                <a href="https://mikenyambe.com/">diploma</a>
                <a href="https://mikenyambe.com/">certificate</a>
                <a href="https://mikenyambe.com/">professional</a>
            </div>
        </div>
        <p><a href="#admission">admissions</a></p>
        <div class="dropdown">
            <button class="dropbtn">pages <BsChevronDown className='shev' color='#fff' size={18} /></button>
            <div class="dropdown-content">
                <a href="https://mikenyambe.com/">about</a>
                <a href="https://mikenyambe.com/">blog</a>
                <a href="https://mikenyambe.com/">find a talent</a>
                <a href="https://mikenyambe.com/">procurement</a>
            </div>
        </div>
    </>
)
const Navbar = () =>{
    const [toggleMenu, setToggleMenu] = useState (false); 
    return(
        <div>
            <div className="app__navbar">
                <div className="app__navbar-links">
                    <div className="app__navbar-links_logo">
                        <img src={logo} alt="main logo" />
                    </div>
                    <div className="app__navbar-links_container">
                        <Menu />
                    </div>
                </div> 
                <div className="app__navbar-sign">
                    <p>sign in</p>
                    <button className='apply-now' type="button">Apply Now</button>
                </div>
                <div className="app_navbar-menu">
                    {
                        toggleMenu? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)} />
                        :<RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)} />
                    }
                    {
                        toggleMenu && (
                            <div className="app__navbar-menu_container scale-up-center">
                                <div className="app__navbar-menu_container-links">
                                    <Menu />
                                    <div className="app__navbar-menu_container-links-sign">
                                        <p>sign in</p>
                                        <button type="button" className='apply-now'>Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div> 
        </div>
    )
}

export default Navbar;