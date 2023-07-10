import React from 'react';
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const NavbarItem = ({ title, classPrope }) => {
  return (
    <Link to={title.toLowerCase()}>
    <li key={title+1} className={`mx-4 cursor-pointer ${classPrope}`} onClick={() => setToggleMenu(false)}>
      {title}
    </li>
    </Link>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();


  return (
    <div className='w-full flex md:justify-center justify-between items-center p-4 navbarcolor'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <Link to="/">
        <h1 className='font-bold'>Farmeezy</h1></Link>

      </div>
      <ul className='text-black md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {['About', 'Docs','Product', 'Market'].map((item, index) => (
          <NavbarItem key={item+index} title={item} />
        ))}
        {isAuthenticated ? (
          <div className='flex items-center justify-center gap-4'>
            <div className="flex items-center justify-between gap-2">
              <img src={user.picture} alt={user.name} className="border-b-2 rounded-full w-12" />
          <h2>{user.name}</h2>
            </div>
          <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'
          onClick={() => logout()}>
            Logout
          </li>
        </div>
          
        ) : (
          <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'
          onClick={() => loginWithRedirect()}>
            Login
          </li>
        )}
      </ul>
      {/* <Link
      to="/login"
      className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'>
      Login
      </Link> */}
      <div className=' flex relative'>
        {toggleMenu 
          ? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
          : <HiMenuAlt4 fontSize={28} className='text-black md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <>
            <ul
              className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-black animate-slide-in'
            
            >
              <li className='text-xl w-full my-2'>
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {['About', 'Docs','Product', 'Market'].map((item, index) => (
          <NavbarItem key={item+index} title={item} classPrope='my-2 text-lg' />
        ))}
          {isAuthenticated ? (
          <div className='flex items-center justify-center gap-4'>
            <div className="flex items-center justify-between gap-2">
              <img src={user.picture} alt={user.name} className="border-b-2 rounded-full w-12" />
          <h2>{user.name}</h2>
            </div>
          <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'
          onClick={() => logout()}>
            Logout
          </li>
        </div>
          
        ) : (
          <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'
          onClick={() => loginWithRedirect()}>
            Login
          </li>
        )}
            </ul>
            
            </>
        )}
        {/* <div className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-white'>Login</div> */}
      </div>
    </div>
  )
}

export default Navbar