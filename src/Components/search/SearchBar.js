import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { HBlue } from "../../Themes/CustomStyled";

import styled from "@emotion/styled";

import data from "../../file.json";

const StyledAutocomplete = styled(Autocomplete)({
	"& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
		color: "white",
		transform: "translate(34px, 20px) scale(1);",
	},
	"& .MuiAutocomplete-inputRoot": {
		color: "white",

		'&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-kind': {
			// Default left padding is 6px
			paddingLeft: 26,
		},
		"& .MuiOutlinedInput-notchedOutline": {
			borderColor: "white",
		},
		"&:hover .MuiOutlinedInput-notchedOutline": {
			borderColor: "red",
		},
		"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderColor: "green",
		},
	},
});

const SearchWrapper = styled(`div`)({
	margin: "10vh 0 0 0",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
});

export default function SearchBar({ targetWebsite, setTargetWebsite }) {
	React.useEffect(() => {
		document.addEventListener("keydown", keyDownHandler);
		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	});
	const [value, setValue] = React.useState(data.websites[0]);
	const navigate = useNavigate();
	const homepageList = data.websites.map(website => website.name);

	const handleSubmit = e => {
		value.homepage.includes("www.")
			? setTargetWebsite(value.homepage)
			: setTargetWebsite(value.label);
		// if (homepageList.includes(targetWebsite))
			navigate("/dashboard", {
				state: { targetWebsite: value.homepage },
			});
	};

	const handleChangeTab = () => {};

	const keyDownHandler = e => {
		// console.info("User pressed: ", e.key);

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
			<StyledAutocomplete
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
						autoFocus={true}
					/>
				)}
			/>
		</SearchWrapper>
	);
}

const websites = data.websites;
