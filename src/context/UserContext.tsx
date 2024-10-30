"use client"
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

export type userType = {
    name: string;
    email: string;
    bio?: string;
}

type userContextType = {
    user: userType | undefined;
    setUser: Dispatch<SetStateAction<userType | undefined>>;
}

export const UserContext = createContext<userContextType | undefined>(undefined)

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<userType | undefined>(undefined)

    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}

export default UserContextProvider

export const useUserContext = () => {
    const context = useContext(UserContext)

    if(!context) 
        throw new Error("Element Wrap in UserContextProvider")

    return context
}