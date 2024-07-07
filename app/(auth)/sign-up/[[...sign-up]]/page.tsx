import { SignIn, SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <SignUp />
        </div>
    )
}

export default page
