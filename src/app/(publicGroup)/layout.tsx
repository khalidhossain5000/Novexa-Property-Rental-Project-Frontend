
import Footer from '@/components/shared/Footer/Footer';
import NavBar from '@/components/shared/Navbar/Navbar';
import { getMe } from '@/service/getMe';
import React from 'react';

const PublicLayout = async ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
    const user=await getMe()
    return (
        <div>
            <NavBar user={user}/>
            {children}
            <Footer/>
        </div>
    );
};

export default PublicLayout;