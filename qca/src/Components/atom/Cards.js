import * as React from "react";
import config from "../../config.json";
import Card from "./Card";

export function StatCards(props) {
	const cardRows = props.data.rows;

	return (
		<div className="flex flex-col justify-center">
			<span className="mt-8 text-2xl font-bold">지금 누리집은</span>
			<div className="mt-4 mx-4 flex flex-row flex-wrap justify-between">
				{cardRows?.map(row => {
					return (
						// <div
						// 	key={index}
						// 	className="max-w-[320px] min-w-[180px] flex-wrap mx-4 my-4 justify-center"
						// >
						<Card
							title={row.title}
							iconIdx={0}
							subheader={row.description.split(". ")[0] + "."}
							description={row.description}
							score={row.score}
							bgcolor={config.warningcolors[0]}
							key={row.id}
							id={row.id}
						/>
						// </div>
					);
				})}
			</div>
		</div>
	);
}

export default function MainCards(props) {
	let cardData = Array(4).fill(0);

	return (
		<div className="flex flex-col justify-center">
			<span className="mt-8 text-2xl font-bold">지금 누리집은</span>
			<div className="mt-4 mx-4 flex flex-row flex-wrap justify-between">
				{cardData.map((data, index) => {
					return (
						<div
							key={index}
							className="max-w-[400px] min-w-[180px] w-5/12 flex-wrap mx-7 my-4"
						>
							<Card
								title={config.catchPhrase[index]}
								iconIdx={index}
								subheader={config.subheaderPhrase[index]}
								bgcolor={config.warningcolors[index]}
								key={index}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
