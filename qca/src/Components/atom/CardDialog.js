import * as React from "react";
import Dialog from "@mui/material/Dialog";
import config from "../../config.json";

const RE_LEARNMORE = /\[[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\s]+\]|\[[a-zA-Z\s]+\]/g;
const RE_URL =
	/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
function linkify(str) {
	let results = [];
	str.split(". ").forEach(spl => {
		const matchesLearnmore = [...spl.matchAll(RE_LEARNMORE)][0];
		const matchesURL = [...spl.matchAll(RE_URL)][0];

		console.log(matchesLearnmore, matchesURL);

		if (matchesLearnmore !== undefined && matchesURL !== undefined) {
			const beforeText = matchesLearnmore.input.slice(0, spl.indexOf("["));
			const afterText = matchesLearnmore.input.slice(
				spl.indexOf(")") + 1,
				spl.length
			);

			const URL = matchesURL[0].slice(
				matchesURL[0].indexOf("(") + 1,
				matchesURL[0].indexOf(")")
			);
			results.push(
				<React.Fragment key={spl.length}>
					{beforeText}
					<a
						style={{
							color: config.colors.purple,
						}}
						key={URL.length}
						href={URL}
						target="_blank"
						rel="noreferrer"
					>
						{matchesLearnmore[0]}
					</a>
					{afterText}
					{afterText.length > 0 ? ". " : ""}
				</React.Fragment>
			);
		} else results.push(<span key={spl.length}>{spl}.&nbsp;</span>);

		// if (matchesLearnmore !== null) {
		// 	matchesLearnmore.forEach((match, idx) => {
		// 		if (match !== null && match !== undefined) {
		// 			match[0] = match[0].replace(")");
		// 			console.log(match, idx);
		// 		}
		// 		results.push(
		// 			<a
		// 				key={match[0]}
		// 				href={matchesURL[0][0]}
		// 				target="_blank"
		// 				rel="noopener noreferrer"
		// 			>
		// 				{match[0]}
		// 			</a>
		// 		);
		// 		// }
		// 	});
		// }
	});

	// match2 = match.input;
	// if (match !== null) {
	// 	console.log(match);

	// console.log("str: ", str);
	// console.log("beforeText: ", beforeText);
	// console.log("linkHref: ", linkHref);
	// console.log("linkText: ", match[0]);
	// console.log("afterText: ", afterText);

	//

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
				<span className="text-3xl font-bold">{props.title}</span>
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
