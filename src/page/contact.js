import Navbar from "../component/nav"
import {AiFillFacebook, AiFillInstagram, AiOutlineTwitter} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import Btn from "../component/button"
import Footer from "../component/footer"
import { useState } from "react"

const Contact = () => {
    const[home, setHome]=useState(false)
    const[about, setAbout]=useState(false) 
    const[contact, setContact]=useState(true) 
    return ( 
        <div className="flex flex-col space-y-[40px] pt-[60px] items-center">
            <Navbar home={home} about={about} contact={contact}/>
            <div className="flex flex-col space-y-[10px] items-center">
                <h1 className="header">Kontak Kami</h1>
                <div className="flex flex-row items-center">
                    <div className="flex flex-col text-end pr-[10px] w-1/2 space-y-[5px]">
                        <p className="text-lg">Pelajar Pejuang, 1827382, Bandung</p>
                        <p className="text-lg">+62 982 098 090</p>
                    </div>
                    <div className="flex flex-row w-1/2 flex-wrap pl-[10px] space-y-[5px] border-l-4 border-black">
                        <div className="flex flex-row w-1/2 space-x-[5px] items-center">
                            <AiFillFacebook/>
                            <p className="text-lg">rooftop@yahoo.com</p>
                        </div>
                        <div className="flex flex-row w-1/2 space-x-[5px] items-center">
                            <AiFillInstagram/>
                            <p className="text-lg">@TopRoofTop</p>
                        </div>
                        <div className="flex flex-row w-1/2 space-x-[5px] items-center">
                            <BsWhatsapp/>
                            <p className="text-lg">+62 392 203 293</p>
                        </div>
                        <div className="flex flex-row w-1/2 space-x-[5px] items-center">
                            <AiOutlineTwitter/>
                            <p className="text-lg">@TopRoofTop  </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-[10px] w-[50%]">
                <h1 className="text-xl font-semibold">Kirim pesan langsung</h1>
                <textarea name="" id="" cols="30" rows="5" className="resize-none px-2 py-2 rounded border-2 bg-zinc-400 border-zinc-500 focus:outline-zinc-600 focus:bg-white"></textarea>
                <div className="flex flex-row justify-end w-full">
                    <Btn isi="Kirim"/>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Contact;