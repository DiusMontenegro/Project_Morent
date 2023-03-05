import { BuAccent, BuMinimal, BuSecondary } from "../Buttons/Buttons";
import { NavSearch } from "../Forms/NavSearch";
import avatar from "../../assets/avatar.jpg"
import "./Navigation.css";
import getIcon from "../../Helpers/IconsHelper";
import { useState } from "react";


export function NavbarTop(){
    const [searchVisible,setSearchVisible] = useState(false);
    const toggleSearch = (prevstate) =>{
        setSearchVisible(!prevstate);
    }
    return (
        <nav className=" top-nav md:px-16 md:py-8 px-4 py-3 bg-white flex items-center gap-3 md:gap-5 border-b border-b-secondary-200">
            <BuSecondary className=" p-2 rounded-md md:hidden flex" LeftIcon={getIcon("search")} onClick={()=>{toggleSearch(searchVisible)}} />

            <p className="logo fw-bold md:text-3xl text-2xl text-accent">MORENT</p>
            <div data-visible={searchVisible} className="search-wrapper bg-white px-4 py-3 md:p-0 w-full flex gap-4 items-center justify-start fixed -top-full right-0 md:static">
                <NavSearch className="min-w-0 md:flex flex-1 md:flex-none"/>
                <BuMinimal LeftIcon={getIcon("close")} className="h-4 w-4 md:hidden flex" onClick={()=>{toggleSearch(searchVisible)}}/>
            </div>
                <ul className="top-nav__buttons flex gap-3 md:gap-5 ml-auto items-center">
                    <li><BuMinimal className="p-1 md:w-8  rounded-full" LeftIcon={getIcon("heart")}/></li>
                    <li><BuMinimal className = "p-1 nav-buttons__notification  rounded-full" LeftIcon={getIcon("bell")}/></li>
                    <li className="shrink-0"><img className="top-nav__pfp w-8 h-8 rounded-full" src={avatar} alt=""></img></li>
                </ul>
                
        </nav>
    );
}

export function Footer(){
    return (
        <footer className="footer bg-white">
            <nav className="bottom-nav flex flex-col md:flex-row md:gap-16 gap-6 align-start wrap md:px-16 md:py-8 px-4 py-3">
                <div className="bottom-nav__col flex-col flex  md:gap-6 gap-4 flex-1 align-start ">
                    <p className="logo fw-bold md:text-3xl text-2xl text-accent-500 ">MORENT</p>
                    <p className="text-justify">Our vision is to provide convenience<br/>and help increase your sales business.</p>
                </div>
                <div className="bottom-nav__col flex flex-col  align-start md:gap-6 gap-4">
                    <p className="text-dark fw-bold fs-xl">About</p>
                    <ul className="flex flex-col gap-2 ">
                        <li><a >How it works</a></li>
                        <li><a >Featured</a></li>
                        <li><a >Partnership</a></li>
                        <li><a >Business Relations</a></li>
                    </ul>
                </div>
                <div className="bottom-nav__col flex flex-col  align-start md:gap-6 gap-4">
                    <p className="text-dark fw-bold fs-xl">Community</p>
                    <ul className="flex flex-col gap-2">
                        <li><a >Events</a></li>
                        <li><a >Podcast</a></li>
                        <li><a >Blog</a></li>
                        <li><a >Invite a friend</a></li>
                    </ul>
                </div>
                <div className="bottom-nav__col flex flex-col  align-start md:gap-6 gap-4">
                    <p className="text-dark fw-bold fs-xl">Socials</p>
                    <ul className="flex flex-col gap-2">
                        <li><a >Discord</a></li>
                        <li><a >Instagram</a></li>
                        <li><a >Twitter</a></li>
                        <li><a >Facebook</a></li>
                    </ul>
                </div>
            </nav>
            <div className="legal flex md:flex-row flex-col md:gap-5 gap-3 wrap p-4 md:p-6">
                <p className="text-dark fw-bold flex-1 text-sm md:text-base">©2022 MORENT. All rights reserved</p>
                <a className="text-sm md:text-base">Privacy Policy</a>
                <a className="text-sm md:text-base">Terms and conditions</a>
            </div>

        </footer>
    );
}