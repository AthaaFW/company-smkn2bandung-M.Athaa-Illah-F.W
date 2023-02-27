import BlackMan from '../asset/kisspng-avenue-dental-care-team-company-innovation-organiz-people-icon-5abd937528af80.5052767615223734931667.png'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const Mitra = () => {
    return ( 
        <div className="flex flex-col w-[70%] relative space-y-5 items-center py-12" id='mitra'>
            <h1 className='header text-start w-full relative'>Mitra Kami</h1>
            <div className="flex flex-row w-full space-x-5 justify-center">
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
            </div>
            <div className="flex flex-row w-full space-x-5 justify-center">
            <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
                <img src={BlackMan} alt="" />
            </div>
            <IoIosArrowBack size={40} className='absolute top-[50%] left-[-80px]'/>
            <IoIosArrowForward size={40} className='absolute top-[50%] right-[-80px]'/>
        </div>
     );
}
 
export default Mitra;