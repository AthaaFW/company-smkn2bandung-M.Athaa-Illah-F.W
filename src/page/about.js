import Navbar from "../component/nav";
import Logo from "../asset/Free_Sample_By_Wix-removebg-preview.png"
import tim1 from "../asset/pp.jpg"
import tim2 from "../asset/c4969aaedbc096c09b35e31abd11e2ec.jpg"
import tim3 from "../asset/8d19dbd553325810e258425adc28e0c1.jpg"
import tim4 from "../asset/236f68cead5b48b98fb77af8aadb519b.jpg"
import tim5 from "../asset/bc5d173a3001839b5f4ec29efad072ae.jpg"
import tim6 from "../asset/3afd658ff9862ead1d2c3d8a2bae2a73.jpg"
import img1 from "../asset/ralph-ravi-kayden-2d4lAQAlbDA-unsplash.jpg"
import img2 from "../asset/webaliser-_TPTXZd9mOo-unsplash.jpg"
import Footer from "../component/footer";
import { useState } from "react";

const About = () => {
    const[home, setHome]=useState(false)
    const[about, setAbout]=useState(true) 
    const[contact, setContact]=useState(false) 
    return ( 
        <div id="About" className="w-full flex flex-col items-center space-y-[20px] pt-[80px]">
            <Navbar home={home} about={about} contact={contact}/>
            <div className="flex flex-row  w-1/2  items-center justify-center">
                <img src={Logo} alt="" className="w-1/3"/>
                <div className="w-1/2 flex flex-col space-y-[15px]">
                    <h1 className="header">Tentang Kami</h1>
                    <h1 className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus exercitationem adipisci ad quas porro quae consectetur, inventore reiciendis dolorum temporibus aliquid fuga fugit assumenda. Maiores sunt quia, praesentium atque ipsa cumque.</h1>
                </div>
            </div>
            <div className="flex flex-col w-[80%] space-y-[15px]">
            <h1 className="header">Tim Kami</h1>
            <div className="flex flex-row w-full space-x-[20px]" id="tim">
                <div className="flex flex-row w-1/3 shadow-xl rounded-lg border-2 border-gray-900">
                    <img src={tim1} alt="" className="w-1/2"/>
                    <div className="flex flex-col pl-5 justify-start pt-[10px]">
                        <h1 className="text-2xl font-semibold">Athaa</h1>
                        <h1 className="text-xl">CEO</h1>
                    </div>
                </div>
                <div className="flex flex-row w-1/3 shadow-xl rounded-lg border-2 border-gray-900">
                    <img src={tim2} alt="" className="w-1/2 bg-green-400"/>
                    <div className="flex flex-col pl-5 justify-start pt-[10px]">
                        <h1 className="text-2xl font-semibold">Hj Bobi</h1>
                        <h1 className="text-xl">Keuangan</h1>
                    </div>
                </div>
                <div className="flex flex-row w-1/3 shadow-xl rounded-lg border-2 border-gray-900">
                    <img src={tim3} alt="" className="w-1/2"/>
                    <div className="flex flex-col pl-5 justify-start pt-[10px]">
                        <h1 className="text-2xl font-semibold">Doge Thumb</h1>
                        <h1 className="text-xl">CO-CEO</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full space-x-[20px]" id="tim">
                <div className="flex flex-row w-1/3 shadow-xl rounded-lg border-2 border-gray-900">
                    <img src={tim4} alt="" className="w-1/2"/>
                    <div className="flex flex-col pl-5 justify-start pt-[10px]">
                        <h1 className="text-2xl font-semibold">Exsemash</h1>
                        <h1 className="text-xl">Investor</h1>
                    </div>
                </div>
                <div className="flex flex-row w-1/3 shadow-xl rounded-lg border-2 border-gray-900">
                    <img src={tim5} alt="" className="w-1/2"/>
                    <div className="flex flex-col pl-5 justify-start pt-[10px]">
                        <h1 className="text-2xl font-semibold">M. Ibnu</h1>
                        <h1 className="text-xl">SDM & Mandor</h1>
                    </div>
                </div>
                <div className="flex flex-row w-1/3 shadow-xl rounded-lg border-2 border-gray-900">
                    <img src={tim6} alt="" className="w-1/2"/>
                    <div className="flex flex-col pl-5 justify-start pt-[10px]">
                        <h1 className="text-2xl font-semibold">Stocks</h1>
                        <h1 className="text-xl">Investor</h1>
                    </div>
                </div>
            </div>
            </div>
            <div className="flex flex-row w-[80%] items-center pt-[40px] space-x-[15px]">
                <div className="flex flex-col justify-between items-end text-end">
                    <h1 className="header">Visi</h1>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolores reprehenderit labore dolorum ipsam hic, cum quam aliquam culpa molestiae obcaecati nobis fugiat sint sed magni dolore illo sapiente temporibus eligendi assumenda ullam, cupiditate asperiores. Aperiam rem quia consectetur earum nisi. Eaque qui nisi suscipit harum inventore eius dolores, provident possimus non temporibus commodi unde consectetur maiores vero atque. Dolore dolor at, quo pariatur facilis doloribus ducimus omnis perspiciatis fuga.</p>
                </div>
                <img src={img1} alt="" className="w-[25%]"/>
            </div>
            <div className="flex flex-row w-[80%] items-center pt-[40px] space-x-[15px]">
            <img src={img1} alt="" className="w-[25%]"/>
                <div className="flex flex-col justify-between">
                    <h1 className="header">Visi</h1>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolores reprehenderit labore dolorum ipsam hic, cum quam aliquam culpa molestiae obcaecati nobis fugiat sint sed magni dolore illo sapiente temporibus eligendi assumenda ullam, cupiditate asperiores. Aperiam rem quia consectetur earum nisi. Eaque qui nisi suscipit harum inventore eius dolores, provident possimus non temporibus commodi unde consectetur maiores vero atque. Dolore dolor at, quo pariatur facilis doloribus ducimus omnis perspiciatis fuga.</p>
                </div>
            </div>
            <div className="flex flex-col w-[80%] items-start pt-[20px] space-y-[20px] pb-[20px]">
                <h1 className="header">Sejarah</h1>
                <div className="flex flex-row space-x-[15px]">
                    <img src={img2} alt="" className="w-[30%]"/>
                    <div className="flex flex-col items-start space-y-[20px]">
                        <h1 className="header">2022</h1>
                        <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint labore, repellendus autem sed soluta sequi beatae vitae nobis harum voluptas, minus inventore unde error molestias possimus fugit suscipit. Pariatur repellendus impedit vitae qui quo minima tempore! Ducimus aperiam pariatur non dolores culpa fugit recusandae mollitia aut impedit in ex quibusdam laboriosam est, praesentium quasi ad repellendus facilis neque eveniet repellat accusantium molestias similique iure et. Beatae perferendis enim excepturi facere?q, Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam temporibus enim earum laborum ducimus autem, amet neque maxime nemo! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum repudiandae autem adipisci. Atque, assumenda animi ipsum est saepe eligendi deleniti nam, dolor iusto ad tempore. Molestias quam quos saepe possimus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium architecto veniam perferendis in cum ut nemo aliquid atque dolore, maiores ipsam illum? Quam ullam, voluptatem id delectus temporibus dolorem placeat molestiae vitae reiciendis sunt, ratione officiis veniam aliquam! Repellendus repudiandae ducimus voluptatibus perspiciatis animi soluta facilis deserunt non, enim placeat?</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default About;