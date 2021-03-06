import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
	palette: {
		type: 'light',
		primary: { main: '#FFDD29', contrastText: '#381608', dark: '#FFF967' },
		secondary: { main: '#F2A52B', contrastText: '#FFF' },
		// background: {
		// 	default: "#181818",
		// 	paper: "#2b2b2b"
		// },
		grey: {
			800: '#2b2b2b',
		},
		success: {
			contrastText: '#181818',
			main: '#7FD1B9',
		},
		info: {
			contrastText: '#FFFFFF',
			main: '#381608',
		},
		error: {
			contrastText: '#ffffff',
			main: '#F4442E',
		},
		warning: {
			contrastText: '#181818',
			main: '#F2A52B',
		},
	},
	typography: {
		// fontSize: 16,
		fontFamily: "'P2P'",
		// h1: { fontSize: "1.8rem", fontWeight: 700 },
		// h2: { fontFamily: "'Press Start 2P'", fontSize: "2rem" },
		// h3: { fontFamily: "'Press Start 2P'", fontSize: "1.8rem" },
		// h4: { fontFamily: "'Press Start 2P'", fontSize: "1rem" },
		h5: { fontWeight: 500 },
		body1: { fontWeight: 500 },
		// h6: { fontFamily: "'Press Start 2P'" },
	},
	shape: {
		borderRadius: 8,
	},
	overrides: {
		MuiTooltip: {
			tooltip: {
				fontSize: '1rem',
				backgroundColor: '#F2A52B',
				color: '#181818',
			},
			arrow: {
				color: '#F2A52B',
			},
		},
		MuiDrawer: {
			paper: {
				// background: "#121212",
			},
			paperAnchorDockedLeft: {
				borderRight: 0,
			},
		},
		MuiPaper: {
			outlined: {
				border: 0,
			},
		},
	},
});
