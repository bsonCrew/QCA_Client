import * as React from "react";
import Score from "../Components/atom/Score";
import Card from "../Components/atom/Card";

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

const CriteriaCard = ({ criteriaClass, status }) => {
	return (
		<div>
			{Object.entries(criteriaClass)
				.filter(
					([criteria, _]) =>
						criteria !== "resultScore" && criteria !== "totalScore"
				)
				.map(([criteria, criteriaVal]) => {
					return (
						<SubClassCard
							key={criteria}
							criteria={criteria}
							criteriaVal={criteriaVal}
							status={status}
							className="my-12"
						/>
					);
				})}
		</div>
	);
};

const SubClassCard = ({ criteria, criteriaVal, status }) => {
	const [backgroundColor, setBackgroundColor] = React.useState("bg-main");

	const selectBackgroundColor = (score, totalScore) => {
		if (totalScore === 0) {
			return "bg-blue";
		} else if (score === totalScore) {
			return "bg-green";
		} else if (score === 0) {
			return "bg-red";
		} else {
			return "bg-yellow";
		}
	};

	return (
		<>
			<div className="font-bold text-2xl bg-main rounded-t-md p-5 w-fit">
				<ScoreView
					name={criteria}
					score={criteriaVal.resultScore}
					totalScore={criteriaVal.totalScore}
				/>
			</div>
			<div className="flex flex-col mb-16">
				{Object.entries(criteriaVal)
					.filter(
						([subClass, _]) =>
							subClass !== "resultScore" && subClass !== "totalScore"
					)
					.map(([subClass, subClassVal]) => {
						return (
							<div
								key={subClass}
								className={"flex flex-col p-4 " + backgroundColor}
							>
								<div className="my-2 flex items-center mt-8">
									<div
										className={
											"text-xl ml-16 font-semibold rounded-md p-3 " +
											selectBackgroundColor(
												subClassVal.resultScore,
												subClassVal.totalScore
											)
										}
									>
										<ScoreView
											name={subClassVal.title}
											score={subClassVal.resultScore}
											totalScore={subClassVal.totalScore}
										/>
									</div>
								</div>
								<div className="flex flex-row flex-wrap justify-start px-12">
									<SpecCard spec={subClassVal} status={status} />
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};

const SpecCard = ({ spec, status }) => {
	return spec.items.map(item => (
		<Card
			score={item.score}
			calcFunctionType={spec.calcFunctionType}
			title={item.title}
			totalScore={spec.totalScore}
			resultScore={spec.resultScore}
			subheader={item.description.split(". ")[0] + "."}
			description={item.description}
			key={item.id}
			id={item.id}
			status={status}
		/>
	));
};

export default function SpecificView({ status, criteriaClass }) {
	console.log(criteriaClass);
	return (
		<div className="my-10 pb-2 flex flex-col flex-wrap">
			<div className="flex-3 flex flex-col rounded-2xl">
				<div className="w-full h-9 mt-12 mb-16">
					<span className="text-2xl font-bold">지금 누리집은</span>
				</div>
				<Score status={status} score={criteriaClass?.resultScore} />
			</div>
			<div className="flex-4 mt-24 rounded-2xl">
				{status === "success" ? (
					<CriteriaCard status={status} criteriaClass={criteriaClass} />
				) : null}
			</div>
		</div>
	);
}
