import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Portal from "@mui/material/Portal";

import config from "../../config.json";

import Phrase from "../layout/Phrase";

import BeautifulBar from "../layout/BeautifulBar";

const ClassStepper = ({ criteriaClass }) => {
	const [activeStep, setActiveStep] = React.useState(0);
	const specContainer = React.useRef(null);

	const handleActiveStep = idx => {
		if (idx === activeStep) {
			setActiveStep(-1);
		} else setActiveStep(idx);
	};
	return (
		<div className="w-full flex flex-row flex-wrap">
			<Stepper
				activeStep={activeStep}
				orientation="vertical"
				className="flex-1 flex flex-row max-h-96"
			>
				{Object.entries(criteriaClass)
					.filter(
						([subClass, val]) =>
							subClass !== "resultScore" && subClass !== "totalScore"
					)
					.map(([subClass, val], idx) => (
						<Step key={idx}>
							<StepLabel onClick={() => handleActiveStep(idx)}>
								<span className="text-lg">
									{subClass} : {val.resultScore}점
								</span>
							</StepLabel>
							<Portal container={specContainer.current}>
								<StepContent TransitionProps={{ unmountOnExit: false }}>
									{subClass !== "resultScore" && (
										<div key={subClass} className="flex flex-row">
											<SubClassStepper subClass={val} />
										</div>
									)}
								</StepContent>
							</Portal>
						</Step>
					))}
			</Stepper>
			<Box className="flex-3 flex-wrap" ref={specContainer}></Box>
		</div>
	);
};
const SubClassStepper = ({ subClass }) => {
	const [activeStep, setActiveStep] = React.useState(0);
	const specElContainer = React.useRef(null);

	const handleActiveStep = idx => {
		if (idx === activeStep) {
			setActiveStep(-1);
		} else setActiveStep(idx);
	};
	return (
		<div className="w-full flex flex-row">
			<Stepper
				activeStep={activeStep}
				orientation="vertical"
				className="flex-1 flex-wrap "
			>
				{Object.entries(subClass)
					.filter(
						([subClass, val]) =>
							subClass !== "resultScore" && subClass !== "totalScore"
					)
					.map(([spec, val], idx) => (
						<Step key={idx}>
							<StepLabel onClick={() => handleActiveStep(idx)}>
								<span className="text-lg">
									{spec}: {val.resultScore}점
								</span>
							</StepLabel>
							<Portal container={specElContainer.current}>
								<StepContent TransitionProps={{ unmountOnExit: false }}>
									{spec !== "resultScore" && (
										<div key={spec} className="w-full flex flex-col">
											<span className="text-2xl p-2 font-bold">
												{val.title}
											</span>
											{val.items.map((item, idx) => (
												<div key={idx} className="flex flex-row">
													{/* {console.log(item)} */}
													<span className="w-full p-2">- {item.title}</span>
												</div>
											))}
										</div>
									)}
								</StepContent>
							</Portal>
						</Step>
					))}
			</Stepper>
			<Box className="flex-2 flex-wrap" ref={specElContainer}></Box>
		</div>
	);
};

export default function StatDataStepper({ classification, data, status }) {
	const [activeStep, setActiveStep] = React.useState(0);
	const subClassContainer = React.useRef(null);

	const handleActiveStep = idx => {
		if (idx === activeStep) {
			setActiveStep(-1);
		} else setActiveStep(idx);
	};

	return (
		<>
			<Phrase
				title={"전체 점수는 이렇게 나왔어요"}
				subtitle={
					"간단히 요약된 점수입니다. 자세한 점수는 왼쪽 대시보드에서 확인할 수 있어요."
				}
			/>
			<div className="w-full flex flex-col justify-center pt-4">
				<div className="flex flex-col w-full max-w-full pr-4 mt-11">
					<BeautifulBar height={2} />
					<div className="w-full flex flex-row flex-wrap">
						{status === "success" ? (
							<>
								<div className="flex-2">
									<Stepper activeStep={activeStep} orientation="vertical">
										{classification.map((classification, idx) => (
											<Step key={idx}>
												<StepLabel
													onClick={() => handleActiveStep(idx)}
													sx={{
														"&:hover": {
															color: "primary.main",
															cursor: "pointer",
														},
													}}
												>
													<span className="text-lg">
														{config.evaluation[idx]}:{" "}
														{classification.resultScore} 점
													</span>
												</StepLabel>
												<Portal container={subClassContainer.current}>
													<StepContent
														TransitionProps={{ unmountOnExit: false }}
													>
														<ClassStepper criteriaClass={classification} />
													</StepContent>
												</Portal>
											</Step>
										))}
									</Stepper>
								</div>
								<Box
									className="flex-10 flex-wrap"
									ref={subClassContainer}
								></Box>
							</>
						) : (
							<Skeleton
								variant="rounded"
								sx={{
									width: "100%",
								}}
								height={270}
							/>
						)}
						<BeautifulBar height={2} />
					</div>
				</div>
			</div>
		</>
	);
}
