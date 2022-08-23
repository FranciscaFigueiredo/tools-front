import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToolProvider } from './contexts/ToolContext';
import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
