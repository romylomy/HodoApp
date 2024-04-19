'use client'
import Link from 'next/link'; 
import React from 'react'; 

export default function Dashboard(){

    return(
        <header>
            <nav
                className='flex items-center justify-between p-6 lg:px-8 h-20 border order-t-0 border-l-0 border-r-0 border-gray-600'
                aria-label="global"
                >
              

                    <Link href="/create">Create Route</Link>                        
                    

            </nav>
        </header>
    )
}