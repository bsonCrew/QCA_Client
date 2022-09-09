import * as React from "react";
import config from "../../config.json";
import Card from "./Card";

export function StatCards({ data, status, classificationData }) {
	const cardRows = data.rows;

	return (
		<div className="flex flex-col justify-center pt-8">
			<div className="w-full h-9">
				<span className="text-2xl font-bold">지금 누리집은</span>
			</div>
			<div className="mt-4 flex flex-row flex-wrap justify-between">
				{status === "success"
					? Object.entries(classificationData).map(([key, val]) => {
							return (
								<React.Fragment key={key + " divider"}>
									<span className="text-2xl w-full">{key}</span>
									<Card
										iconIdx={key.resultScore > 0 ? 0 : 1}
										title={key}
										key={key}
										name={key}
										status={status}
										subheader={val.toString()}
										// value={classificationData[key]}
									/>
								</React.Fragment>
							);
					  })
					: null}
				{status === "success"
					? cardRows.map(row => {
							return (
								<Card
									title={row.title}
									iconIdx={0}
									subheader={row.description.split(". ")[0] + "."}
									description={row.description}
									score={row.score}
									bgcolor={config.warningcolors[0]}
									key={row.id}
									id={row.id}
									status={status}
								/>
							);
					  })
					: Array(10)
							.fill(0)
							.map((row, idx) => {
								return <Card key={row + idx} status={status} />;
							})}
			</div>
		</div>
	);
}
