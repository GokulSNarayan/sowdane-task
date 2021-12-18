import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'
import Header from '../components/header'
import Avatar from '@mui/material/Avatar';


export default function Layout({ children }) {
    return (
        <div className='layoutGrid'>
            <Header />
            <div className='topNav bg-slate-100'>
                <span>
                    <Avatar alt="Remy Sharp" sx={{ bgcolor: '#423591' }}>G</Avatar>
                </span>
            </div>
            <main className='content'>
                {children}
            </main>
            <Footer />
        </div>
    )
}