import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { fetchUser } from '../utils/user';
// import axios from 'axios';

const Model = () => {

  const { modelId } = useParams();
  console.log(modelId)

  const [data, setData] = useState([{}]);
  const [file, setFile] = useState(null);
  const [user] = fetchUser();

  // console.log(user);




  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    console.log(file)

  }


  return (
    <div >
      {!user ? (<div>Please Login to continue further</div>):(<div></div>)}
      <div>
      <Navbar />
      <div className=' flex flex-col items-center justify-center min-h-screen'>
        <div >
          {(typeof data.members === 'undefined') ? (
            <p>Loading...</p>
          ) : (
            data.members.map((member, i) => (
              <p key={i} className='text-black'>{member}</p>
            ))
          )}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          {file ? (
            <img src={file}
              height={400}
              width={400}
              className="border-4 border-b-gray-950 border-opacity-5 rounded-lg"
            />
          ) : (

            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center h-64 w-3/4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleChange} />
            </label>
          )}
          
          <div className='flex items-center gap-4'>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={() => setFile(null)}
          >
            <svg className="fill-current w-4 h-4 mr-2" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><title /><g data-name="Layer 5" id="Layer_5"><path className="cls-1" d="M20.94,9.88V5H11V9.88H5V27H27V9.88ZM13,7h5.91V9.88H13ZM25,25H7V11.88H25Z" /><rect className="cls-1" height="8" width="2" x="11.03" y="14.25" /><rect className="cls-1" height="8" width="2" x="18.94" y="14.17" /></g></svg>
            <span>Delete</span>
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            
          >
            <span>Submit</span>
          </button>
          </div>

        </div>
      </div>
      <Footer />
      </div>
    </div>
  )
}

export default Model