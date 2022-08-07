import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import data from "../file.json";

export default function ComboBox() {
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
			id="combo-box-demo"
			options={websites}
			sx={{ width: "max(40vw,20rem)", backgroundColor: "white" }}
			groupBy={option => option.firstLetter}
			renderInput={params => <TextField {...params} autoFocus label="기관명" />}
		/>
	);
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const websites = data.websites;
