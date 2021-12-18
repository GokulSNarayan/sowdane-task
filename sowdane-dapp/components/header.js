import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


export default function Header() {
    const [show, setShow] = useState('translate-x-64');
    const toggleNav = () => {
        setShow(prev => prev==='translate-x-0' ? '-translate-x-64':'translate-x-0')
    }


    return (
        <header className={'sidenavbar shadow-lg bg-gray-800 transition-transform duration-300 '+ show}>
            <span className='flex justify-end items-center mr-4 mt-2'>
                <MenuIcon sx={{ color: '#ffffff' }} onClick={toggleNav} />
            </span>
            <nav className=''>
                <ul className='flex flex-col  list-none text-white text-xl font-bold'>
                    <li className='mx-1 p-2 hover:bg-blue-500'>Dashboard</li>
                    <li className='mx-1 p-2 hover:bg-blue-500'>Profile</li>
                    <li className='mx-1 p-2 hover:bg-blue-500'>Extras</li>
                </ul>
            </nav>
        </header>
    );
}