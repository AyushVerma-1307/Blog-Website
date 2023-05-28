import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Header/>
      <div>
        <button
        className="border-2 border-gray-300 py-1 px-4 rounded-md absolute left-[455px] top-[85px]"
        onClick={() => navigation(-1)}
        >
            Back
        </button>
        <h2 className='border rounded-md px-5 py-2 bg-blue-200 text-2xl mt-[80px] mb-[-50px] '> 
            Blogs on <span className="font-bold ">{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
