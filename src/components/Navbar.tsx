import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from '../config/firebase'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response  = await signInWithPopup(auth, provider);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

    return (
        <nav className='flex flex-wrap items-center justify-between rounded bg-orange-200 p-5'>
            <div className='flex items-center flex-shrink-0  text-black mr-20'>
                <Link to='/' className='font-bold text-3xl mb-5 px-4 py-2 mt-5 tracking-tight'>THE BURGER BLISS</Link>
                <FastfoodOutlinedIcon sx={{ m:1, bgcolor: 'primary', fontSize:50 }}>
              <FastfoodOutlinedIcon />
            </FastfoodOutlinedIcon>
            </div>
            <div className='block'>
                <button 
                onClick={dropDown} 
                className='flex items-center px-4 py-2 ml-10 mb-5 mt-3 text-black 
                border rounded border-black hover:text-white hover:border-white'
                >
                  My Dashboard
                    <i className='fas fa-bars'></i>
                    <DehazeOutlinedIcon sx={{ m:1, bgcolor: 'primary', fontSize:20 }}>
              <DehazeOutlinedIcon />
            </DehazeOutlinedIcon>
                </button>
                
            </div>
           
            { isVisible ? (
     <div className='w-full block flex-grow items-center'>
     <div className="text-sm lg:flex-grow">
         <Button className='p-2 ml-20 border-black border rounded font-bold justify-center'>
             <div>
                 <Link to='/' onClick={ clicked } className='flex place-itmes-center  lg:inline-block lg:mt-0
                  text-black hover:text-white mr-4 ml-2'>
                    Home
                    </Link>
                    <HomeOutlinedIcon sx={{ m:1, bgcolor: 'primary', fontSize:20 }}>
              <HomeOutlinedIcon />
            </HomeOutlinedIcon>
             </div>
         </Button>
         <Button className='p-2 ml-20 border-black font-bold border rounded justify-center'>
             <div>
                 <Link to='/dashboard' onClick={ clicked } className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                  text-black-200 hover:text-white mr-4 ml-2'>
                    Sign In/Order Now
                    </Link>
                    <LoginIcon sx={{ m:1, bgcolor: 'primary', fontSize:20 }}>
              <LoginIcon />
            </LoginIcon>
             </div>
         </Button>
         <Button className='p-2 ml-20 border-black font-bold border rounded justify-center'>
             <div>
                 <Link to='/menu' onClick={ clicked } className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                  text-black-200 hover:text-white mr-4 ml-2'>
                    View Menu
                    </Link>
                    <LunchDiningOutlinedIcon sx={{ m:1, bgcolor: 'primary', fontSize:20 }}>
              <LunchDiningOutlinedIcon />
            </LunchDiningOutlinedIcon>
             </div>
         </Button>
         <Button className='p-2 ml-20 border-black font-bold border rounded justify-center'>
             <div>
                 <Link to='/About' onClick={ clicked } className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                  text-black-200 hover:text-white mr-4 ml-2'>
                    About Us
                    </Link>
                    <ArticleOutlinedIcon sx={{ m:1, bgcolor: 'primary', fontSize:20 }}>
              <ArticleOutlinedIcon />
            </ArticleOutlinedIcon>
             </div>
         </Button>
         {
            !auth.currentUser ?
            <Button className='p-2 ml-20 font-bold border rounded border-black justify-center'>
            <div>
                <Link to="/" onClick={signInOnClick} className='flex place-items-center mr-4 ml-2 lg:inline-block lg:mt-0 
                text-black-200 border-black hover:text-white'>
                    Sign Out
                </Link>
                <LogoutIcon sx={{ m:1, bgcolor: 'primary', fontSize:20 }}>
              <LogoutIcon />
            </LogoutIcon>
            </div>
        </Button>
        :
        <Button className='p-2 ml-20 font-bold border rounded border-black justify-center'>
            <div>
                <Link to="/home" onClick={signOutOnClick} className='flex place-items-center mr-4 ml-2 lg:inline-block lg:mt-0 text-black-200 border-black hover:text-white'>
                    Sign Out
                </Link>
                <LogoutIcon sx={{ m:1, bgcolor: 'primary', fontSize:20 }}>
              <LogoutIcon />
            </LogoutIcon>
            </div>
        </Button>
    }
</div>
</div>
) : (
<></>
)}
</nav>
    )
}


export default Navbar