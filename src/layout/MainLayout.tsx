import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

interface MainLayoutProps {
    
}

const MainLayout: React.FC<MainLayoutProps> = () => {
    return (
        <>
        <Header/>
        <main className='main'>
            <Outlet/>

        </main>
        <Footer/>
        </>
    )
}

export default MainLayout;