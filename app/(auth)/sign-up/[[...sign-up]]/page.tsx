import { SignIn, SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    return (
        <div className="flex items-center justify-center h-screen"><SignUp /></div>
    )
}

export default page