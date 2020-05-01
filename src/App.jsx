import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// THEMES
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles';

// USER DEFINED
import Website from "./Components/Website";
import { THEME_SETTINGS } from "./themeSettings";
import { UtilityStyles } from './Styles/Utils'
import { store } from "./Redux/Store";

const theme = createMuiTheme(THEME_SETTINGS);

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter basename={process.env.REACT_APP_BASE_PATH}>
				<MuiThemeProvider theme={theme}>
					<Website />
					<UtilityStyles />
				</MuiThemeProvider>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
