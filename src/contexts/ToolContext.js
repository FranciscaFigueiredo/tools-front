import { createContext, useEffect, useState } from 'react';

const ToolContext = createContext();
export default ToolContext;

export function ToolProvider({ children }) {
    const [toolInfo, setToolInfo] = useState({
        appId: null,
        name: null,
        color: null,
        icon: null,
        link: null,
    });

    useEffect(() => {}, [toolInfo]);
    console.log(toolInfo);
    function handleChange(tool) {
        setToolInfo({ ...tool });
    }

    return <ToolContext.Provider value={{ toolInfo, setToolInfo, handleChange }}>{children}</ToolContext.Provider>;
}
