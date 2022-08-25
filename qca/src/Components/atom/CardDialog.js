import * as React from "react";
import Dialog from "@mui/material/Dialog";

const RE_LEARNMORE = /\[[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\s]+\]|\[[a-zA-Z\s]+\]/g;
const RE_URL =
	/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
function linkify(str) {
	let results = [];
	const matchesLearnmore = [...str.matchAll(RE_LEARNMORE)];
	const matchesURL = [...str.matchAll(RE_URL)];
	// console.log(matchesLearnmore, matchesURL);

	if (matchesLearnmore !== null) {
		matchesLearnmore.forEach((match, idx) => {
			console.log(matchesURL[0]);
			// if (matchesURL[idx][0] !== null && matchesURL[idx][0] !== 0) {
			results.push(
				<a href={matchesURL[0][0]} target="_blank" rel="noopener noreferrer">
					{match[0]}
				</a>
			);
			// }
		});
	}

	// match2 = match.input;
	// if (match !== null) {
	// 	console.log(match);

	// console.log("str: ", str);
	// console.log("beforeText: ", beforeText);
	// console.log("linkHref: ", linkHref);
	// console.log("linkText: ", match[0]);
	// console.log("afterText: ", afterText);

	// results.unshift(
	// 	<span key={str.length}>
	// 		{beforeText}
	// 		<a
	// 			style={{
	// 				color: "red",
	// 			}}
	// 			key={match[0].length}
	// 			href={linkHref}
	// 		>
	// 			{match[0]}
	// 		</a>
	// 		{afterText}
	// 	</span>
	// );
	// } else results.push(<span key={str.length}>{str}</span>);

	return results;
}

export default function CardDialog(props) {
	// console.log(props.subheader);
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
				{linkify(description, [])}
				<br />

				<p className="text-lg pt-4"></p>
			</div>
		</Dialog>
	);
}
