import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ToolsHistoricContext = createContext();
export default ToolsHistoricContext;

export function ToolsHistoricProvider({ children }) {
    const [historicInfo, setHistoricInfo] = useLocalStorage('toolHistoricData', []);

    function handleChange(tool) {
        let tools = JSON.parse(localStorage.getItem('toolHistoricData'));

        if (tools?.length && tools.find((t) => t.name === tool.name)) {
            return tools
        }
        if (tools?.length) {
            tools?.unshift(tool);
        } else {
            tools = [tool];
        }

        if (tools?.length > 3) {
            tools.pop();
        }

        localStorage.setItem('toolHistoricData', JSON.stringify(tools ? tools : [tool]));
        setHistoricInfo(tools);
    }

    return <ToolsHistoricContext.Provider value={{ historicInfo, setHistoricInfo, handleChange }}>{children}</ToolsHistoricContext.Provider>;
}
