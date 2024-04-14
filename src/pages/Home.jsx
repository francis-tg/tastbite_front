import React from 'react'
import { FiArrowRight, FiTrendingUp} from "react-icons/fi"
import ReceipeBook from '../components/ReceipeBook'
import { Link } from 'react-router-dom'
import InboxForm from '../components/InboxForm'
import Collections from '../components/Collections'
import LatesReceipe from '../components/LatesReceipe'
function Home() {
  return (
    <>
    <div className='flex justify-center items-center py-12'>
        <div className='flex items-center gap-10 bg-slate-300 w-[70%] rounded-l-xl relative'>
            <img src={require("../img/menu1.jpg")} className=' rounded-l-xl' alt="" />
            <div className='p-3 w-1/4 '>
                <p className='mb-2 flex items-center gap-5 '>
                    <FiTrendingUp className=' text-orange-500'/>
                    85% would make this again
                </p>
                <h1 className='text-4xl font-bold mb-2'>
                  Mighty Super Cheesecake
                </h1>
                <p>
                Look no further for a creamy and ultra smooth classic cheesecake recipe! no one can deny its simple decadence.
                </p>

                <Link to={""} className="absolute right-0 bottom-0 p-2">
                    <FiArrowRight className='text-orange-500 text-2xl'/>
                </Link>
            </div>
        </div>
    </div>
    <ReceipeBook/>
    <InboxForm/>
    <Collections/>
    <LatesReceipe/>
    </>
  )
}

export default Home