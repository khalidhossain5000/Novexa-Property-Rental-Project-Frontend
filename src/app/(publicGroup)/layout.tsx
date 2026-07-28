import NavBar from '@/components/shared/Navbar/NavBar';
import React from 'react';

const PublicLayout = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    );
};

export default PublicLayout;