import { useContext } from 'react';
import ToolContext from '../../contexts/ToolContext';
import ToolsHistoricContext from '../../contexts/ToolsHistoricContext';
import { ToolContent, ToolDetailContainer, ToolDetailIcon } from '../Details/style';
import { HistoricContent, Title } from './style';

export default function Historic() {
    const { historicInfo } = useContext(ToolsHistoricContext);
    const { handleChange } = useContext(ToolContext);

    return (
        <HistoricContent>
            <Title>Últimas ferramentas visualizadas</Title>
            <ToolContent>
                {
                    historicInfo ?
                        historicInfo.map((info, index) => (
                            <ToolDetailContainer key={ index } type='viewed' color={ info?.color } onClick={() => {
                                handleChange({
                                    appId: info?.appId,
                                    name: info?.name,
                                    color: info?.color,
                                    icon: info?.icon,
                                    link: info?.link,
                                });
                            }}>
                                <ToolDetailIcon type='viewed' src={ info?.icon } />
                            </ToolDetailContainer>
                        ))
                        : 'Sem dados no histórico de visualizações'
                }
            </ToolContent>
        </HistoricContent>
    );
}
