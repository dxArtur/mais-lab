import Greeting from '@/app/components/Greeting'
import AboutMe from '@/app/components/About'
import React from 'react'

const weArePage = () =>{
    return (
        <div className='grid grid-cols-2 gap-3'>
            <div >
                <Greeting />
            </div>
            <div >
                <AboutMe />
            </div>
        </div>
    )
}

export default weArePage