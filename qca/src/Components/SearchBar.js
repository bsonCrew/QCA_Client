import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import data from "../file.json";

export default function SearchBar() {
	React.useEffect(() => {
		document.addEventListener("keydown", keyDownHandler);
		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	});

	const [value, setValue] = React.useState(data.websites[0]);

	const handleSubmit = e => {
		console.log("submit");
		window.open(value.homepage, "_blank");
	};

	const handleChangeTab = () => {};

	const keyDownHandler = e => {
		console.log("User pressed: ", e.key);

		if (e.key === "Enter") {
			e.preventDefault();
			handleSubmit();
		}
		if (e.key === "Tab") {
			e.preventDefault();
			handleChangeTab();
		}
	};

	return (
		<Autocomplete
			value={value}
			// inputValue={inputValue}
			onChange={(e, newValue) => {
				setValue(newValue);
			}}
			disablePortal
			autoHighlight
			id="search-bar"
			options={websites}
			className="w-[max(40vw,20rem)] mt-4"
			groupBy={option => option.firstLetter}
			renderOption={(props, option) => (
				<Box className="mr-2 flex-shrink" component="li" {...props}>
					{option.label}
				</Box>
			)}
			renderInput={params => (
				<TextField
					{...params}
					label="기관명"
					inputProps={{
						...params.inputProps,
						autoComplete: "new-password", // disable autocomplete and autofill
					}}
				/>
			)}
		/>
	);
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const websites = data.websites;
