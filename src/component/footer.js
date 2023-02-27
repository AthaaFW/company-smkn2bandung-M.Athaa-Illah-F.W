import Logo from '../asset/logonav (1).png'
import Btn from './button';

const Footer = () => {
    return ( 
        <div id='footer' className="w-full bottom-0 left-0 flex flex-col items-center space-y-16">
            <div className="flex flex-row justify-center w-1/2 py-5 items-center relative space-x-14">
                <div className="flex flex-col w-1/2 space-y-2 items-end">
                    <img src={Logo} alt="" />
                    <div className='flex flex-row pr-3 space-x-2 content'>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">Privacy & Policy</a>
                    </div>
                </div>
                <div className='flex flex-col w-1/2 space-y-2'>
                    <h1 className='content'> 
                            Kami menyediakan hunian dengan kualitas tinggi untuk anda dan seluruh keluarga anda. Dengan lokasi yg strategis dekat dengan keperluan keluarga seperti Mall, Jalan Tol, kampus dan sekolah. Cicilan hanya 30% pertahun. Tunggu apa lagi? Ayo pindah sekarang!
                    </h1>
                </div>
                <div  className="absolute bottom-[-40px] right-[20px]">
                <Btn isi="Call Us!"/>
                </div>
            </div>
            <div className='flex flex-col w-full bg-zinc-800 text-white content items-center py-5 font-bold'>
                <h1>© Copyright PT. LSKK. All Rights Reserved</h1>
                <h1>Designed by PT. LSKK</h1>
            </div>
        </div>
     );
}
 
export default Footer;