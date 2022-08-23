import { useContext } from 'react';
import ToolsHistoricContext from '../../contexts/ToolsHistoricContext';
import Box from '../ToolsCard/Box';
import { ToolIcon, ToolsContainer, ToolsContent } from '../ToolsCard/style';
import { HistoricContent, Title } from './style';

export default function Historic() {
    const { historicInfo } = useContext(ToolsHistoricContext);

    return (
        <HistoricContent>
            <Title>Últimas ferramentas visualizadas</Title>
            <ToolsContent>
                {
                    historicInfo ?
                        historicInfo.map((info, index) => (
                            <Box
                            key={ index }
                            appId={ info?.app_id }
                            name={ info?.name }
                            color={ info?.color }
                            icon={ info?.icon }
                            link={ info?.link }
                        />
                        ))
                        : 'Sem dados no histórico de visualizações'
                }
            </ToolsContent>
        </HistoricContent>
    );
}
