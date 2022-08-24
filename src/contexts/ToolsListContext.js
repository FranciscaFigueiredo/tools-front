import { createContext, useContext, useEffect, useState } from 'react';
import SearchContext from './SearchContext';

const ToolListContext = createContext();
export default ToolListContext;

export function ToolListProvider({ children }) {
    const [toolListInfo, setToolListInfo] = useState([]);
    const { searchInfo: search } = useContext(SearchContext);

    useEffect(() => {}, []);

    function handleChange(toolList) {
        setToolListInfo(() => {
            if (!search) {
                return toolList;
            }

            // eslint-disable-next-line array-callback-return
            const filtered = toolListInfo?.length ? toolListInfo?.filter((tool) => {
                if (tool.name.toLowerCase().includes(search.toLowerCase())) {
                    return tool;
                }
            }) : []

            return filtered;
        });
    }

    return <ToolListContext.Provider value={{ toolListInfo, setToolListInfo, handleChange }}>{children}</ToolListContext.Provider>;
}
