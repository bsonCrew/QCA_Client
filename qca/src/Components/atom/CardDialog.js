import * as React from "react";
import Dialog from "@mui/material/Dialog";

const RE_URL = /\[[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\s]+|[a-z]+\](w+:\/\/\S+)/;

function linkify(str) {
	const results = [];
	let match, match2;
	while ((match = RE_URL.exec(str))) {
		match2 = match.input;
		console.log(match.input);

		results.push(
			<a key={match2.length} href={match2}>
				{match2}
			</a>
		);
	}

	return results;
}

export default function CardDialog(props) {
	let description = props.description.replace(props.subheader, "");

	return (
		<Dialog
			open={props.open}
			onClose={props.handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			// disableAutoFocus={true}
			fullWidth
			// selectedValue={selectedValue}
			// fullScreen={true}
			maxWidth="lg"
			// onClose={handleClose}
		>
			<div className="w-fit h-96 p-12">
				<span className="text-4xl font-bold">{props.title}</span>
				<br />
				<br />
				<span className="text-xl pt-4 leading-8">{props.subheader}</span>
				<br />
				<br />
				{linkify(description)}
				<br />

				<p className="text-lg pt-4"></p>
			</div>
		</Dialog>
	);
}
