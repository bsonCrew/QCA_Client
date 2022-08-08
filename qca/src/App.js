import React from "react";
import theme from "./Themes/MUIThemeOptions";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Views/Landing";
import NotFound from "./Views/NotFound";
import Header from "./Components/Header";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
