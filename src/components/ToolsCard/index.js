import { useEffect, useState } from 'react';
import useToolData from '../../hooks/api/useToolsData';
import Box from './Box';
import { ToolsContent } from './style';

export default function ToolsCard({ search, setSearch }) {
    const [toolsList, setToolsList] = useState([]);
    const { tools } = useToolData();

    useEffect(() => {
        setToolsList(tools)
        if (tools && search) {
            setToolsList(() => {
                const filtered = tools.filter((tool) => {
                    if (tool.name.toLowerCase().includes(search.toLowerCase())) {
                        return tool;
                    }
                })
                return filtered;
            });
        }
    }, [tools, toolsList, search])

    return (
        <ToolsContent>
            {
                toolsList ?
                    toolsList.map((tool, index) => 
                        <Box
                            key={ index }
                            appId={ tool?.app_id }
                            name={ tool?.name }
                            color={ tool?.color }
                            icon={ tool?.icon }
                            link={ tool?.link }
                        />
                    )
                : 'Ainda não há ferramentas'
            }
        </ToolsContent>
    );
}
