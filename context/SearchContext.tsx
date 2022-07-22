import React, { createContext, useState } from "react";

const initialValue = "";
export const SearchContext = createContext<{search: string, request?: any}>({ search: initialValue, request: null });

export const SearchProvider = ({ children }: any) => {
    const [search, setSearch] = useState(initialValue);

    return(
        <SearchContext.Provider value={ {search, request: (s: string) => {setSearch(s)}} }>
            {children}
        </SearchContext.Provider>
    )
}