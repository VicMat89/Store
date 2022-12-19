import { createContext, useContext, useState } from "react";

export const AppContextTotal = createContext();


export function AppWrapperTotal({ children }) {
    const [shareTotal, setShareTotal] = useState([{
        "totalQuantity": 0,
        "totalUnits" :0
    }]);
    return (
        <AppContextTotal.Provider value={{ shareTotal, setShareTotal }}>
            {children}
        </AppContextTotal.Provider>
    );
}
export function useAppContextTotal() {
    return useContext(AppContextTotal);
}