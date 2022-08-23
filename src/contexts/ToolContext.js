import { createContext, useState } from 'react';

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
    function handleChange(tool) {
        setToolInfo({ ...tool });
    }

    return <ToolContext.Provider value={{ toolInfo, setToolInfo, handleChange }}>{children}</ToolContext.Provider>;
}
