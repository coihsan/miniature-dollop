// import AgencyDetails from '@/components/forms/agency-details'
import { getAuthUserDetails, verifyAndAcceptInvitation } from '@/lib/queries'
import { currentUser } from '@clerk/nextjs'
import { Plan } from '@prisma/client'
import { redirect } from 'next/navigation'
import React, { use } from 'react'

const Page = async () =>{
    const authUser = await currentUser()
    const agencyId = await verifyAndAcceptInvitation()
    const user = getAuthUserDetails()
    
    console.log(agencyId)
    if(authUser){
        if(user?.role === "SUBACCOUT_GUEST" || user.role)
    }
    return(
        <div>
        <h1>Agency</h1>
        </div>
    )
}

export default Page