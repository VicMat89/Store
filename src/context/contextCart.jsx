import { createContext, useContext, useState } from "react";

export const AppContext = createContext();


export function AppWrapper({ children }) {
    const [sharedState, setSharedState] = useState([]);
    return (
        <AppContext.Provider value={{ sharedState, setSharedState }}>
            {children}
        </AppContext.Provider>
    );
}
export function useAppContext() {
    return useContext(AppContext);
}