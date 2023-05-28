import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return (
    <div className='w-full flex flex-col justify-center items-center'>
        <Header/>
        <div>
            <button 
            className="border-2 border-gray-300 py-1 px-4 rounded-md absolute left-[455px] top-[85px]"
            onClick={() => navigation(-1)}
            >
                back
            </button>
            <h2 className='border rounded-md px-5 py-2 bg-blue-200 text-xl mt-[80px] mb-[-50px] '>
                Blogs Tagged <span className="font-bold ">#{tag}</span>
            </h2>
        </div>
        <div className='w-11/12 max-w-[670px]'>
            <Blogs/>
        </div>
        
        <Pagination/>

    </div>
    )
}

export default TagPage
