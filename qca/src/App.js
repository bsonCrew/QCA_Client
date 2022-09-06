import React from "react";
import theme from "./Themes/MUIThemeOptions";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Views/Landing";
import NotFound from "./Views/NotFound";
import Dashboard from "./Views/Dashboard";
import MainView from "./Views/MainView";

function App() {
	const [targetWebsite, setTargetWebsite] = React.useState("");

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Landing setTargetWebsite={setTargetWebsite} />}
					/>
					<Route
						path="/dashboard/*"
						element={<Dashboard targetWebsite={targetWebsite} />}
					></Route>
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
