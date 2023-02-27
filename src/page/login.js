import img from "../asset/joel-filipe-RFDP7_80v5A-unsplash.jpg"
import logo from "../asset/Free_Sample_By_Wix-removebg-preview.png"
import { Link } from "react-router-dom"
import Btn from '../component/button'
import { useState } from "react"

const Login = () => {

    const[login, setLogin]= useState(true)
    const onLogin=()=>{
        setLogin(!login)
    }

    return ( 
        <div id="login" className="w-full h-screen flex flex-row justify-between">
            <div className="w-1/2">
            <img src={img} alt="" className="w-full h-screen sideimg"/>
            </div>
            <div className="w-1/2 flex flex-col pt-16 items-center">
            <img src={logo} alt="" className="logo"/>
            <h1 className="header">{login?"LOGIN":"REGISTER"}</h1>
            
            <form action="/" className={login?"flex flex-col w-1/2 items-center space-y-2 py-5":"hidden"}>
                <label htmlFor="" className="w-full">
                    <input type="text" name="" id="" placeholder="Username" className="w-full px-2 py-1"/>
                </label>
                <label htmlFor="" className="w-full">
                    <input type="password" placeholder="Password" className="w-full px-2 py-1"/>
                </label>
                <Link to="/" className="pt-3"><Btn isi="LOGIN"/></Link>
            </form>
            
            <form action="/" className={login?"hidden":"flex flex-col w-1/2 items-center space-y-2 py-5"}>
            <label htmlFor="" className="w-full">
                    <input type="text" name="" id="" placeholder="Email" className="w-full px-2 py-1"/>
                </label>
                <label htmlFor="" className="w-full">
                    <input type="text" name="" id="" placeholder="Username" className="w-full px-2 py-1"/>
                </label>
                <label htmlFor="" className="w-full">
                    <input type="password" placeholder="Password" className="w-full px-2 py-1"/>
                </label>
                <Link to="/" className="pt-3"><Btn isi="REGISTER"/></Link>
            </form>

            <Link className="mt-24 text-lg font-semibold" onClick={onLogin}>{login?"REGISTER":"LOGIN"}</Link>
            </div>
        </div>
     );
}
 
export default Login;