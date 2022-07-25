import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";

const initialValue = "";
export const SearchContext = createContext<{search: string, request?: any}>({ search: initialValue, request: null });

export const SearchProvider = ({ children }: any) => {
    const { query: { q } } = useRouter();    
    const [search, setSearch] = useState(q as string);

    useEffect(() =>{
        q && setSearch(q as string);
    },[q]);
    
    return(
        <SearchContext.Provider value={ {search, request: (s: string) => {} } }>
            {children}
        </SearchContext.Provider>
    )
}