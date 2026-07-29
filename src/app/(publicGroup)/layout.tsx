import NavBar from '@/components/shared/Navbar/NavBar';
import React from 'react';
import { getMe } from '../(authGroup)/_actions/authAction';

const PublicLayout = async ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
    const user=await getMe()
    return (
        <div>
            <NavBar user={user}/>
            {children}
        </div>
    );
};

export default PublicLayout;