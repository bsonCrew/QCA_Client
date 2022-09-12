import * as React from "react";
import Stat from "../Components/atom/Stat";
import Score from "../Components/atom/Score";
import { StatCards } from "../Components/atom/StatCards";
import useQualification from "../hooks/useQualification";
import Card from "../Components/atom/Card";
import config from "../config.json";

const ScoreView = ({ name, score, totalScore }) => {
	if (name === "개선해봐요" || name === "속도 향상 방안") {
		return (
			<div>
				{totalScore !== 0 ? `${name} : ${score} / ${totalScore}점` : `${name}`}
			</div>
		);
	} else {
		return (
			<div>
				{totalScore !== 0
					? `${name} : ${score} / ${totalScore}점`
					: `${name}: 시범 평가 항목입니다.`}
			</div>
		);
	}
};

const CriteriaCard = ({ criteriaClass, status }) =>
	Object.entries(criteriaClass)
		.filter(([criteria, _]) => criteria !== "resultScore")
		.map(([criteria, criteriaVal]) => {
			return (
				<div key={criteria}>
					<div className="my-6">
						<span className="font-bold text-3xl ml-6">
							<ScoreView
								name={criteria}
								score={criteriaVal.resultScore}
								totalScore={criteriaVal.totalScore}
							/>
						</span>
					</div>
					<div className="flex flex-col">
						<SubClassCard criteriaValue={criteriaVal} status={status} />
					</div>
				</div>
			);
		});

const SubClassCard = ({ criteriaValue, status }) =>
	Object.entries(criteriaValue)
		.filter(
			([subClass, _]) => subClass !== "resultScore" && subClass !== "totalScore"
		)
		.map(([subClass, subClassVal]) => {
			return (
				<div key={subClass} className="flex flex-col mx-2">
					<div className="my-2">
						<span className="text-xl ml-4">
							<ScoreView
								name={subClassVal.title}
								score={subClassVal.resultScore}
								totalScore={subClassVal.totalScore}
							/>
						</span>
					</div>
					<div className="flex flex-row flex-wrap">
						<SpecCard subClass={subClassVal} status={status} />
					</div>
				</div>
			);
		});

const SpecCard = ({ subClass, status }) => {
	return subClass.items.map(item => (
		<Card
			title={item.title}
			iconIdx={0}
			subheader={item.description.split(". ")[0] + "."}
			description={item.description}
			score={item.score}
			bgcolor={config.warningcolors[0]}
			key={item.id}
			id={item.id}
			status={status}
		/>
	));
};

export default function SpecificView({ data, status, criteriaClass }) {
	const [solvedArr, setSolvedArr] = React.useState([]);
	return (
		<div className="my-10 pb-2 flex flex-col flex-wrap">
			<div className="flex-3 flex flex-col rounded-2xl">
				<div className="w-full h-9 mt-12 mb-14">
					<span className="text-2xl font-bold">지금 누리집은</span>
				</div>
				<Score status={status} score={criteriaClass?.resultScore} />
			</div>
			<div className="flex-4 mt-24 rounded-2xl ">
				{status === "success" ? (
					<CriteriaCard status={status} criteriaClass={criteriaClass} />
				) : null}
			</div>
		</div>
	);
}
