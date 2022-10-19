import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

import styled from "@emotion/styled";

import data from "../../file.json";
import config from "../../config.json";

const SearchWrapper = styled(`div`)({
	margin: "10vh 0 0 0",
	width: "100%",
	display: "flex",
	justifyContent: "center",
});

const SearchWithAutoComplete = styled(Autocomplete)({
	width: "60%",
	minWidth: "320px",
});

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
		<SearchWrapper>
			<SearchWithAutoComplete
				value={value}
				// inputValue={inputValue}
				onChange={(e, newValue) => {
					setValue(newValue);
				}}
				disablePortal
				autoHighlight
				id="search-bar"
				options={websites}
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
							color: "red",
							"& label": { paddingLeft: theme => theme.spacing(2) },
							"& input": { paddingLeft: theme => theme.spacing(3.5) },
							"& fieldset": {
								paddingLeft: theme => theme.spacing(2.5),
								borderRadius: "20px",
								backgroundColor: config.colors.white,
								color: "red",
							},
						}}
						{...params}
						label="기관명"
						// autoFocus={true}
					/>
				)}
			/>
		</SearchWrapper>
	);
}

const websites = data.websites;
