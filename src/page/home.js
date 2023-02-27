import Navbar from "../component/nav";
import Carousel from "../component/carousel" 
import img1 from '../asset/ralph-ravi-kayden-2d4lAQAlbDA-unsplash.jpg'
import img2 from '../asset/webaliser-_TPTXZd9mOo-unsplash.jpg'
import Btn from '../component/button'
import Mitra from '../component/mitra'
import Footer from '../component/footer'
import { useState } from "react";

const Home = () => {
    const[home, setHome]=useState(true)
    const[about, setAbout]=useState(false) 
    const[contact, setContact]=useState(false) 
    return ( 
        <div className="w-full h-screen flex flex-col items-center space-y-[20px] pt-[80px]">
            <Navbar home={home} about={about} contact={contact}/>
            <Carousel/>
            <div className="flex flex-row justify-center space-x-10 w-[70%] pt-[100px] pb-14">
                <img src={img1} className="w-1/2"/>
                <div className="w-1/2 flex flex-col space-y-10">
                    <h1 className="header">Regular House</h1>
                    <h1 className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsum nihil porro suscipit saepe facere maiores voluptas, sapiente deleniti? Hic rerum alias corrupti molestiae! Sint, facilis veritatis iure ut corrupti possimus nisi facere mollitia quae harum, praesentium, earum consequuntur nemo ad voluptatibus vitae provident! Autem voluptatum corrupti deserunt voluptate eligendi praesentium rerum quisquam consequatur nemo, quae voluptates. Dicta officiis, vitae, consequuntur molestiae temporibus dolores aut nemo ipsam, repellendus ab libero laboriosam voluptate voluptatum natus ipsa impedit et quis? Itaque impedit quo vel quos, praesentium quod nam temporibus totam ratione id suscipit maxime error dolore dignissimos voluptas architecto, enim dolor iure?
                    </h1>
                    <Btn isi='Buy now!'/>
                </div>
            </div>
            <div className="flex flex-row justify-center space-x-10 w-[70%] pt-[100px] pb-14">
                <div className="w-1/2 flex flex-col space-y-10 items-end">
                    <h1 className="header text-end">Big House</h1>
                    <h1 className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsum nihil porro suscipit saepe facere maiores voluptas, sapiente deleniti? Hic rerum alias corrupti molestiae! Sint, facilis veritatis iure ut corrupti possimus nisi facere mollitia quae harum, praesentium, earum consequuntur nemo ad voluptatibus vitae provident! Autem voluptatum corrupti deserunt voluptate eligendi praesentium rerum quisquam consequatur nemo, quae voluptates. Dicta officiis, vitae, consequuntur molestiae temporibus dolores aut nemo ipsam, repellendus ab libero laboriosam voluptate voluptatum natus ipsa impedit et quis? Itaque impedit quo vel quos, praesentium quod nam temporibus totam ratione id suscipit maxime error dolore dignissimos voluptas architecto, enim dolor iure?
                    </h1>
                    <Btn isi='Buy now!'/>
                </div>
                <img src={img2} className="w-1/2"/>
            </div>
            <Mitra/>
            <Footer/>
        </div>
     );
}
 
export default Home;