import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		text-decoration: none;
		border: none;
	}

	body {
		background-color: #f0f8ff;
		font-family: 'Montserrat', sans-serif;
    	color: #191970;
	}
`;

export default GlobalStyle;
