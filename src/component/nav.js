import Logo from "../asset/logonav.png"
import { Link } from "react-router-dom"; 
import { useState } from "react";

const Navbar = ({home, about, contact}) => {
    
    return ( 
        <div id="navbar" className="w-full flex flex-row px-10 py-4 text-gray-800 bg-white justify-between shadow-lg fixed top-0 left-0 z-50">
            <div className="flex flex-row">
                <Link to={"/"}><img src={Logo} alt="" /></Link>
            </div>
            <div className="flex flex-row items-center space-x-4">
                <Link to='/'><h2 className={home?"font-bold cursor-pointer":"font-semibold cursor-pointer"}>Beranda</h2></Link>
                <h2 className="font-semibold cursor-pointer">Visi</h2>
                <h2 className="font-semibold cursor-pointer">Misi</h2>
                <Link to='/About' ><h2 className={about?"font-bold cursor-pointer":"font-semibold cursor-pointer"}>Tentang</h2></Link>
                <Link to="/Contact"><h2 className={contact?"font-bold cursor-pointer":"font-semibold cursor-pointer"}>Kontak</h2></Link>
                <Link to="/Login"><button className="px-2 py-1 font-semibold bg-gray-800 text-white rounded-lg border-gray-800 border-2 hover:bg-white hover:text-gray-800">Log In</button></Link>
            </div>
        </div>
     );
}
 
export default Navbar;