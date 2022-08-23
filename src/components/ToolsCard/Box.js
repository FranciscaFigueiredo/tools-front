import { useContext } from 'react';

import ToolContext from '../../contexts/ToolContext';
import ToolsHistoricContext from '../../contexts/ToolsHistoricContext';

import { ToolIcon, ToolName, ToolsContainer } from './style';

export default function Box({ appId, name, color, icon, link }) {
    const { handleChange } = useContext(ToolContext);
    const { handleChange: toolsHistoricHandleChange } = useContext(ToolsHistoricContext);

    return (
        <ToolsContainer color={ color } onClick={() => {
            handleChange({
                appId,
                name,
                color,
                icon,
                link
            });
            toolsHistoricHandleChange({
                appId,
                name,
                color,
                icon,
                link
            });
        }}>
            <ToolIcon src={ icon } />
            <ToolName>{ name }</ToolName>
        </ToolsContainer>
    );
}
