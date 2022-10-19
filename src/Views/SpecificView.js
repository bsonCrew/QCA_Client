import * as React from "react";
import ScoreCard from "../Components/card/ScoreCard";
import DataCard from "../Components/card/DataCard";

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
											" my-2 flex items-center mt-8 text-xl ml-16 font-semibold rounded-md p-3 " +
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
	console.log(spec, status);
	return spec.items.length > 0 ? (
		spec.items.map(item => (
			<DataCard
				item={item}
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
		))
	) : (
		<div className="w-3/12 min-w-[200px] max-w-sm mx-6 my-6 grow transition-transform ease-in-out ">
			<div
				className={
					"h-36 rounded-lg shadow-lg hover:shadow-2xl text-center flex flex-col justify-center p-4 py-7 px-8"
				}
			>
				<span className="text-lg">자세히 보여 드릴 항목이 없어요.</span>
				<span className="text-sm font-bold text-blue"></span>
			</div>
		</div>
	);
};

const RobotCard = ({ robot }) => {
	console.log(robot);
	return (
		<>
			<div className="w-full h-9 mt-12">
				<span className="text-2xl font-bold">robots.txt가 발견됐어요</span>
			</div>
			<div className="bg-main w-full font-bold text-xl h-fit rounded-lg p-12 mt-12">
				{robot?.map(r => {
					const disallowColor = r.type.includes("disallow")
						? "underline decoration-wavy text-red"
						: "";

					return (
						<React.Fragment key={r.type}>
							<span className={disallowColor}>{r.type}</span>
							<span>
								: {r.value}
								<br />
							</span>
						</React.Fragment>
					);
				})}
			</div>
		</>
	);
};

function SpecificView({ title, status, criteriaClass, robot }) {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className="my-10 pb-2 flex flex-col flex-wrap">
			<div className="flex-3 flex flex-col rounded-2xl">
				<div className="w-full h-9 mt-12 ">
					<span className="text-2xl font-bold">지금 누리집의 {title}은 </span>
				</div>
				<div className="mt-2 mb-16">
					<span className="text-lg">평가하는 데 사용된 지표들이에요.</span>
				</div>

				<ScoreCard status={status} score={criteriaClass?.resultScore} />
			</div>
			<div>{robot ? <RobotCard robot={robot} /> : null}</div>
			<div className="flex-4 mt-24 rounded-2xl">
				{status === "success" ? (
					<CriteriaCard status={status} criteriaClass={criteriaClass} />
				) : null}
			</div>
		</div>
	);
}

export default React.memo(SpecificView);
export { SpecCard, RobotCard };
