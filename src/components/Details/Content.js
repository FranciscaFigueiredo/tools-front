import { ToolIcon, ToolNameDescription, ToolsContainer } from '../ToolsCard/style';
import Historic from '../Historic';
import { DetailContent, ToolAccessButton, ToolDetail, ToolContent } from './style';

export default function Content({ name, color, icon, link }) {
    return (
        <DetailContent>
            <ToolContent>
                <ToolsContainer radius='50%' width='15vw' color={ color }>
                    <ToolIcon width='10vw' src={ icon } />
                </ToolsContainer>
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
