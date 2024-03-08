import { createTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material";

const lightmode = {
	text: {
		50: "#000000",
		100: "#060708",
		200: "#1E2229",
		300: "#353E4A",
		400: "#4D596A",
		500: "#64748B",
		600: "#79899F",
		700: "#919EB0",
		800: "#A9B3C1",
		900: "#C0C8D2",
		950: "#CCD2DA",
	},
	background: {
		50: "#000000",
		100: "#060708",
		200: "#1E2229",
		300: "#353E4A",
		400: "#4D596A",
		500: "#64748B",
		600: "#79899F",
		700: "#919EB0",
		800: "#A9B3C1",
		900: "#C0C8D2",
		950: "#CCD2DA",
	},
	primary: {
		50: "#000000",
		100: "#17000E",
		200: "#4E002F",
		300: "#860151",
		400: "#BE0173",
		500: "#F60195",
		600: "#FE22A7",
		700: "#FE4AB7",
		800: "#FE73C7",
		900: "#FF9CD7",
		950: "#FFB0DF",
	},
	accent: {
		50: "#071013",
		100: "#0d2026",
		200: "#1b414b",
		300: "#286171",
		400: "#358297",
		500: "#42a2bd",
		600: "#68b5ca",
		700: "#8ec7d7",
		800: "#b4dae4",
		900: "#d9ecf2",
		950: "#ecf6f8",
	},
	secondary: {
		50: "#efecf8",
		100: "#ded9f2",
		200: "#bdb4e4",
		300: "#9c8ed7",
		400: "#7c68ca",
		main: "#5b42bd",
		600: "#493597",
		700: "#362871",
		800: "#241b4b",
		900: "#120d26",
		950: "#090713",
	},
};

const darkmode = {
	text: {
		50: "#CCD2DA",
		100: "#C0C8D2",
		200: "#A9B3C1",
		300: "#919EB0",
		400: "#79899F",
		500: "#64748B",
		600: "#4D596A",
		700: "#353E4A",
		800: "#1E2229",
		900: "#060708",
		950: "#000000",
	},
	background: {
		50: "#CCD2DA",
		100: "#C0C8D2",
		200: "#A9B3C1",
		300: "#919EB0",
		400: "#79899F",
		500: "#64748B",
		600: "#4D596A",
		700: "#353E4A",
		800: "#1E2229",
		900: "#060708",
		950: "#000000",
	},
	primary: {
		50: "#FFB0DF",
		100: "#FF9CD7",
		200: "#FE73C7",
		300: "#FE4AB7",
		400: "#FE22A7",
		500: "#F60195",
		600: "#BE0173",
		700: "#860151",
		800: "#4E002F",
		900: "#17000E",
		950: "#000000",
	},
	accent: {
		50: "#ecf6f8",
		100: "#d9ecf2",
		200: "#b4dae4",
		300: "#8ec7d7",
		400: "#68b5ca",
		500: "#42a2bd",
		600: "#358297",
		700: "#286171",
		800: "#1b414b",
		900: "#0d2026",
		950: "#071013",
	},
	secondary: {
		50: "#efecf8",
		100: "#ded9f2",
		200: "#bdb4e4",
		300: "#9c8ed7",
		400: "#7c68ca",
		main: "#5b42bd",
		600: "#493597",
		700: "#362871",
		800: "#241b4b",
		900: "#120d26",
		950: "#090713",
	},
};

export const lightTheme = createTheme({
	palette: lightmode,
	typography: {
		fontFamily: ["Nunito", "sans-serif"].join(","),
	},
});

lightTheme.components = {
	MuiTextField: {
		styleOverrides: {
			root: {
				"--TextField-brandBorderColor": lightTheme.palette.text[200],
				"--TextField-brandBorderHoverColor":
					lightTheme.palette.text[300],
				"--TextField-brandBorderFocusedColor":
					lightTheme.palette.text[200],
				"& label": {
					color: lightTheme.palette.text[200],
				},
				"& label.Mui-focused": {
					color: "var(--TextField-brandBorderFocusedColor)",
				},
				"& label.MuiFormHelperText-root": {
					color: lightTheme.palette.text[200],
				},
			},
		},
	},
	MuiOutlinedInput: {
		styleOverrides: {
			notchedOutline: {
				borderColor: "var(--TextField-brandBorderColor)",
				place: "var(--TextField-brandBorderColor)",
			},
			root: {
				color: lightTheme.palette.text[100],
				[`&:hover .${outlinedInputClasses.notchedOutline}`]: {
					borderColor: "var(--TextField-brandBorderHoverColor)",
				},
				[`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
					borderColor: "var(--TextField-brandBorderFocusedColor)",
					color: lightTheme.palette.text[100],
				},
			},
		},
	},
	MuiFilledInput: {
		styleOverrides: {
			root: {
				"&::before, &::after": {
					borderBottom: "2px solid var(--TextField-brandBorderColor)",
				},
				"&:hover:not(.Mui-disabled, .Mui-error):before": {
					borderBottom:
						"2px solid var(--TextField-brandBorderHoverColor)",
				},
				"&.Mui-focused:after": {
					borderBottom:
						"2px solid var(--TextField-brandBorderFocusedColor)",
				},
			},
		},
	},
	MuiInput: {
		styleOverrides: {
			root: {
				"&::before": {
					borderBottom: "2px solid var(--TextField-brandBorderColor)",
				},
				"&:hover:not(.Mui-disabled, .Mui-error):before": {
					borderBottom:
						"2px solid var(--TextField-brandBorderHoverColor)",
				},
				"&.Mui-focused:after": {
					borderBottom:
						"2px solid var(--TextField-brandBorderFocusedColor)",
				},
			},
		},
	},
};

export const darkTheme = createTheme({
	palette: darkmode,
	typography: {
		fontFamily: ["Nunito", "sans-serif"].join(","),
	},
});

darkTheme.components = {
	MuiTextField: {
		styleOverrides: {
			root: {
				"--TextField-brandBorderColor": darkTheme.palette.text[200],
				"--TextField-brandBorderHoverColor":
					darkTheme.palette.text[300],
				"--TextField-brandBorderFocusedColor":
					darkTheme.palette.text[200],
				"& label": {
					color: darkTheme.palette.text[200],
				},
				"& label.Mui-focused": {
					color: "var(--TextField-brandBorderFocusedColor)",
				},
				"& label.MuiFormHelperText-root": {
					color: darkTheme.palette.text[200],
				},
			},
		},
	},
	MuiOutlinedInput: {
		styleOverrides: {
			notchedOutline: {
				borderColor: "var(--TextField-brandBorderColor)",
				place: "var(--TextField-brandBorderColor)",
			},
			root: {
				color: darkTheme.palette.text[100],
				[`&:hover .${outlinedInputClasses.notchedOutline}`]: {
					borderColor: "var(--TextField-brandBorderHoverColor)",
				},
				[`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
					borderColor: "var(--TextField-brandBorderFocusedColor)",
					color: darkTheme.palette.text[100],
				},
			},
		},
	},
	MuiFilledInput: {
		styleOverrides: {
			root: {
				"&::before, &::after": {
					borderBottom: "2px solid var(--TextField-brandBorderColor)",
				},
				"&:hover:not(.Mui-disabled, .Mui-error):before": {
					borderBottom:
						"2px solid var(--TextField-brandBorderHoverColor)",
				},
				"&.Mui-focused:after": {
					borderBottom:
						"2px solid var(--TextField-brandBorderFocusedColor)",
				},
			},
		},
	},
	MuiInput: {
		styleOverrides: {
			root: {
				"&::before": {
					borderBottom: "2px solid var(--TextField-brandBorderColor)",
				},
				"&:hover:not(.Mui-disabled, .Mui-error):before": {
					borderBottom:
						"2px solid var(--TextField-brandBorderHoverColor)",
				},
				"&.Mui-focused:after": {
					borderBottom:
						"2px solid var(--TextField-brandBorderFocusedColor)",
				},
			},
		},
	},
};