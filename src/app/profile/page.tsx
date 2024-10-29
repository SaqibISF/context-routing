"use client"

import { UserProfile } from "@/components/";
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
    const { user } = useUserContext()

    const router = useRouter()

    useEffect(() => {
        if(!user)
            router.replace("/")
    }, [user, router])


    return user ? <UserProfile /> : <></>
}

export default ProfilePage