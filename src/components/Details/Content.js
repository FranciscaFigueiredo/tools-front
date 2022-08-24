import { ToolNameDescription } from '../ToolsCard/style';
import Historic from '../Historic';
import { DetailContent, ToolAccessButton, ToolDetail, ToolContent, ToolDetailContainer, ToolDetailIcon } from './style';

export default function Content({ name, color, icon, link }) {
    return (
        <DetailContent>
            <ToolContent type='modal'>
                <ToolDetailContainer color={ color }>
                    <ToolDetailIcon src={ icon } />
                </ToolDetailContainer>
                <ToolDetail>
                    <ToolNameDescription>{ name }</ToolNameDescription>
                    <ToolAccessButton onClick={ ()=> window.open(link, '_blank') } disabled={ !link }>
                        {
                            link ?
                                'Acessar'
                                : 'Link indisponível'
                        }
                    </ToolAccessButton>
                </ToolDetail>
            </ToolContent>
            <Historic />
        </DetailContent>
    );
}
