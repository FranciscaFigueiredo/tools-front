import { useEffect } from 'react';
import useToolData from '../../hooks/api/useToolsData';
import Box from './Box';
import { ToolsContent } from './style';

export default function ToolsCard() {
    const { tools } = useToolData();

    useEffect(() => {}, [tools])

    console.log(typeof(tools));

    return (
        <ToolsContent>
            {
                tools ?
                    tools.map((tool, index) => 
                        <Box
                            key={ index }
                            appId={ tool?.app_id }
                            name={ tool?.name }
                            color={ tool?.color }
                            icon={ tool?.icon }
                            link={ tool?.link }
                        />)
                : 'Ainda não há ferramentas'
            }
        </ToolsContent>
    );
}
