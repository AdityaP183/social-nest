import { createTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material";

export const customTheme = createTheme({
	palette: {
		text: {
			50: "#eae9fc",
			100: "#d4d2f9",
			200: "#a9a5f3",
			300: "#7e78ed",
			400: "#534be7",
			500: "#281fe0",
			600: "#2018b4",
			700: "#181287",
			800: "#100c5a",
			900: "#08062d",
			950: "#040316",
		},
		background: {
			50: "#ebebfa",
			100: "#d6d6f5",
			200: "#adadeb",
			300: "#8585e0",
			400: "#5c5cd6",
			500: "#3333cc",
			600: "#2929a3",
			700: "#1f1f7a",
			800: "#141452",
			900: "#0a0a29",
			950: "#050514",
		},
		primary: {
			50: "#eaeafb",
			100: "#d6d4f7",
			200: "#ada9ef",
			300: "#847ee7",
			400: "#5b54de",
			500: "#3129d6",
			600: "#2821ab",
			700: "#1e1881",
			800: "#141056",
			900: "#0a082b",
			950: "#050415",
		},
		secondary: {
			50: "#e7e5ff",
			100: "#cfccff",
			200: "#9e99ff",
			300: "#6e66ff",
			400: "#3d33ff",
			main: "#0d00ff",
			600: "#0a00cc",
			700: "#080099",
			800: "#050066",
			900: "#030033",
			950: "#01001a",
		},
		accent: {
			50: "#e6e5ff",
			100: "#ceccff",
			200: "#9c99ff",
			300: "#6b66ff",
			400: "#3a33ff",
			500: "#0800ff",
			600: "#0700cc",
			700: "#050099",
			800: "#030066",
			900: "#020033",
			950: "#01001a",
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
				"--TextField-brandBorderHoverColor": customTheme.palette.text[300],
				"--TextField-brandBorderFocusedColor": customTheme.palette.text[200],
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