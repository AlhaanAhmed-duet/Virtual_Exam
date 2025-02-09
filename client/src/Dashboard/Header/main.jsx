import React from "react";
import 
    { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs'

function Header({OpenSidebar}){
    return (
        <header className="header">
            <div className="menu-icon">
                <BsJustify className="icon" onClick={OpenSidebar}/>
            </div>

            <div className="header-left">
                <BsSearch className="icon"/>
            </div>

            <div className="header-right">
                <BsFillBellFill className="icon"/>
                <BsFillEnvelopeFill className="icon"/>
                <BsPersonCircle className="icon"/>
                <button className="create-test-button">Create Test</button>
                <button className="take-test-button">Take Test</button>
            </div>
        </header>
    );
}

export default Header