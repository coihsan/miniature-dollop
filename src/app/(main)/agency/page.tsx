// import AgencyDetails from '@/components/forms/agency-details'
import { getAuthUserDetails, verifyAndAcceptInvitation } from '@/lib/queries'
import { currentUser } from '@clerk/nextjs'
// import { Plan } from '@prisma/client'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async () =>{
    const authUser = await currentUser()
    if(!authUser) return redirect('/sign-in')
    const user = getAuthUserDetails()
    const agencyId = await verifyAndAcceptInvitation()
    console.log('login')
    return(
        <div>
        <h1>Agency</h1>
        </div>
    )
}

export default Page