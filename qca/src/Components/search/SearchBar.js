import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import data from "../../file.json";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ setTargetWebsite }) {
	React.useEffect(() => {
		document.addEventListener("keydown", keyDownHandler);
		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	});
	const [value, setValue] = React.useState(data.websites[0]);
	const navigate = useNavigate();

	const handleSubmit = e => {
		value.homepage.includes("www.")
			? setTargetWebsite(value.homepage)
			: setTargetWebsite(value.label);
		navigate("/dashboard", {
			state: { targetWebsite: value.homepage },
		});
	};

	const handleChangeTab = () => {};

	const keyDownHandler = e => {
		console.info("User pressed: ", e.key);

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
			autoSelect={true}
			renderOption={(props, option) => (
				<div component="li" {...props}>
					<div className="mr-2 w-full flex justify-between">
						<div>{option.label}</div>
						<div>{option.homepage}</div>
					</div>
				</div>
			)}
			renderInput={params => (
				<TextField
					sx={{
						"& label": { paddingLeft: theme => theme.spacing(2) },
						"& input": { paddingLeft: theme => theme.spacing(3.5) },
						"& fieldset": {
							paddingLeft: theme => theme.spacing(2.5),
							borderRadius: "20px",
						},
					}}
					{...params}
					label="기관명"
					// autoFocus={true}
				/>
			)}
		/>
	);
}

const websites = data.websites;
