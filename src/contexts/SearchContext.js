import { createContext, useEffect, useState } from 'react';

const SearchContext = createContext();
export default SearchContext;

export function SearchProvider({ children }) {
    const [searchInfo, setSearchInfo] = useState('');

    useEffect(() => {}, [])

    function handleChange(search) {
        setSearchInfo(search);
    }

    return <SearchContext.Provider value={{ searchInfo, setSearchInfo, handleChange }}>{children}</SearchContext.Provider>;
}
