import React from 'react'

import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


async function Auth() {
    // Kinde.......................................
    const { isAuthenticated } = getKindeServerSession();



    return (
        <div>
            <div className='hidden md:flex flex-row gap-4'>


                {
                    await isAuthenticated() ?
                        <button className='scroll-animate-up styled-button bg-[#e7a5e3] hover:bg-[#d269cc] text-gray-900 px-4 font-semibold py-2 rounded-md'>
                            <LogoutLink>Log out</LogoutLink>
                        </button> :
                        <>
                            <button className='scroll-animate-down tyled-button bg-[#e7a5e3] hover:bg-[#d269cc] text-gray-900 px-4 font-semibold py-2 rounded-md'>
                                <LoginLink orgCode='org_2e2f9512321'>Sign in</LoginLink>
                            </button>
                            <button className='scroll-animate-up styled-button bg-[#e7a5e3] hover:bg-[#d269cc] text-gray-900 px-4 font-semibold py-2 rounded-md'>
                                <RegisterLink orgCode='org_2e2f9512321'>Sign up</RegisterLink>
                            </button></>
                }

              
            </div>



        </div>
    )
}

export default Auth