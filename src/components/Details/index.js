import ModalBlur from '../ModalBlurBackground';
import Content from './Content';

export default function Details({ appId, name, color, icon, link }) {
    return (
        <>
            <ModalBlur />
            <Content
                name={ name }
                color={ color }
                icon={ icon }
                link={ link }
            />
        </>
    );
}
