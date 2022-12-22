import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContextUsers = createContext();


export function AppUsers({ children }) {
    const [sharedUsers, setSharedUsers] = useState([]);


    useEffect(() => {
        const getUsers = async () => {
            const info = await axios.get("https://fakestoreapi.com/users")
            const info1 = info.data.map((i) => info.data[0].id === 1 ? { ...i, isLogin: false } : i)
            setSharedUsers(info1)
            console.log(sharedUsers)
        }
        getUsers()


    }, [])


    return (
        <AppContextUsers.Provider value={{ sharedUsers, setSharedUsers }}>
            {children}
        </AppContextUsers.Provider>
    );
}
export function useAppContextUsers() {
    return useContext(AppContextUsers);
}