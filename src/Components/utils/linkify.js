import * as React from "react";
import config from "../../config.json";

const RE_LEARNMORE = /\[[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\s]+\]|\[[a-zA-Z\s]+\]/g;
const RE_URL =
	/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;

export default function linkify(str) {
	let results = [];
	str?.split(". ").forEach(spl => {
		const matchesLearnmore = [...spl.matchAll(RE_LEARNMORE)][0];
		const matchesURL = [...spl.matchAll(RE_URL)][0];

		if (matchesLearnmore !== undefined && matchesURL !== undefined) {
			const beforeLink = matchesLearnmore.input.slice(0, spl.indexOf("["));
			const afterLink = matchesLearnmore.input.slice(
				spl.indexOf(")") + 1,
				spl.length
			);

			const URL = matchesURL[0].slice(
				matchesURL[0].indexOf("(") + 1,
				matchesURL[0].indexOf(")")
			);
			results.push(
				<React.Fragment key={spl.length}>
					{beforeLink}
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
					{afterLink}
					{afterLink.length > 0 ? ". " : ""}
				</React.Fragment>
			);
		} else results.push(<span key={spl.length}>{spl}.&nbsp;</span>);
	});

	return results;
}
