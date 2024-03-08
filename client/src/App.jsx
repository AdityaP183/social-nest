import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/auth/register/Register";
import Layout from "./components/layout/Layout";
import { Box } from "@mui/material";
import Testing from "./Testing";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./utils/theme.js";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext.jsx";

export default function App() {
	const { darkMode } = useContext(DarkModeContext);
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout mode={darkMode} />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/profile/:id",
					element: <Profile />,
				},
			],
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/register",
			element: <Register />,
		},
		{
			path: "/testing",
			element: <Testing />,
		},
	]);
	return (
		<Box
			sx={{
				width: "100%",
				height: "100vh",
			}}
		>
			<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</Box>
	);
}
