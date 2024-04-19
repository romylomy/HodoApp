'use client'
import Link from 'next/link'; 
import React from 'react'; 
import {UserButton, useUser} from '@clerk/nextjs'

export default function Nav(){
    const {user, isLoaded} = useUser();

    return(
        <header>
            <nav
                className='flex items-center justify-between p-6 lg:px-8 h-20 border order-t-0 border-l-0 border-r-0 border-gray-600'
                aria-label="global"
                >
                <div className='flex lg:flex-1'>
                    <a href="/" className="-m-1.5 p-1.5">
                        dashboard
                    </a>

                </div>
                <>

                    
                    <UserButton/>
                        
                </>
                    

            </nav>
        </header>
    )
}