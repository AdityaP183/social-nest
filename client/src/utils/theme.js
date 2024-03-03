import { createTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material";

export const customTheme = createTheme({
	palette: {
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
		// text: {
		// 	50: "#efeef7",
		// 	100: "#e0dcef",
		// 	200: "#c1b9df",
		// 	300: "#a296cf",
		// 	400: "#8273bf",
		// 	500: "#6350af",
		// 	600: "#4f408c",
		// 	700: "#3c3069",
		// 	800: "#282046",
		// 	900: "#141023",
		// 	950: "#0a0811",
		// },
		// background: {
		// 	50: "#efedf7",
		// 	100: "#e0dcef",
		// 	200: "#c1b8e0",
		// 	300: "#a295d0",
		// 	400: "#8271c1",
		// 	500: "#634eb1",
		// 	600: "#4f3e8e",
		// 	700: "#3c2f6a",
		// 	800: "#281f47",
		// 	900: "#141023",
		// 	950: "#0a0812",
		// },
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
		// primary: {
		// 	50: "#f8f0ec",
		// 	100: "#f2e1d9",
		// 	200: "#e4c3b4",
		// 	300: "#d7a58e",
		// 	400: "#ca8768",
		// 	500: "#bd6942",
		// 	600: "#975435",
		// 	700: "#713f28",
		// 	800: "#4b2a1b",
		// 	900: "#26150d",
		// 	950: "#130b07",
		// },
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
	},
	typography: {
		fontFamily: ["Nunito", "sans-serif"].join(","),
	},
});

customTheme.components = {
	MuiTextField: {
		styleOverrides: {
			root: {
				"--TextField-brandBorderColor": customTheme.palette.text[200],
				"--TextField-brandBorderHoverColor":
					customTheme.palette.text[300],
				"--TextField-brandBorderFocusedColor":
					customTheme.palette.text[200],
				"& label": {
					color: customTheme.palette.text[200],
				},
				"& label.Mui-focused": {
					color: "var(--TextField-brandBorderFocusedColor)",
				},
				"& label.MuiFormHelperText-root": {
					color: customTheme.palette.text[200],
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
				color: customTheme.palette.text[100],
				[`&:hover .${outlinedInputClasses.notchedOutline}`]: {
					borderColor: "var(--TextField-brandBorderHoverColor)",
				},
				[`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
					borderColor: "var(--TextField-brandBorderFocusedColor)",
					color: customTheme.palette.text[100],
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
