import React from 'react'
import { Link } from 'react-router-dom'
import { useMotionValue, useTransform, motion } from 'framer-motion'

const Card = ({ modelId, index }) => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotatey = useTransform(x, [-100, 100], [30, -30]);


  return (
    <div sytyle={{ perspective: 2000 }}
    className='hover:scale-110 transition ease-in-out delay-150 hover:transition-all'>
      <motion.div
        style={{ x, y, rotateX, rotatey, z: 100 }}
        drag
        dragElastic={0.23}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className="flex cursor-grab w-80 h-100 bg-white border border-gray-200 rounded-lg shadow-[5px_20px_28px_11px_#a0aec0] dark:bg-gray-800 dark:border-gray-700 ">
        <div>
          <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <Link to={`/model/${modelId}`}
              state={{ modelId }}
              key={index}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillfule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card