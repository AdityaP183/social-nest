import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/auth/register/Register";
import Layout from "./components/layout/Layout";
import { Box } from "@mui/material";

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
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
	]);
	return (
		<Box
			sx={{
				width: "100%",
				height: "100vh",
			}}
		>
			<RouterProvider router={router} />
		</Box>
	);
}
