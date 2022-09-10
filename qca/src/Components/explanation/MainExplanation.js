import * as React from "react";
import mapping from "../../assets/mapping.png";
import crossBrowser from "../../assets/cross.jpeg";

const MainExplanation = () => {
	return (
		<>
			<div className="p-24">
				<p className="font-bold text-5xl">접근성, 호환성, 접속성, 개방성</p>
				<br />
				<p id="modal-modal-title" className="text-xl pb-4 font-bold mb-24">
					아래의 설명을 읽으며 접근성, 호환성, 접속성 그리고 개방성에 대해
					이해해 봅시다.
				</p>
				<div className="pb-36">
					<p id="modal-modal-description" className="text-xl pb-6">
						<p className="font-bold text-4xl">접근성</p>
						<div className="flex justify-center flex-col items-center italic my-16 text-center">
							<div
								className="hover:cursor-pointer"
								onClick={() => {
									window.open(
										"https://developer.mozilla.org/ko/docs/Web/Accessibility",
										"_blank"
									);
								}}
							>
								웹은 사람들의 하드웨어, 소프트웨어, 언어, 문화, 장소, 혹은
								신체적 물리적 능력과 관계없이
								<br />
								모든 사람을 위해 작동하도록 설계되었습니다. 웹이 이 목표를
								달성할 때, 다양한 범위의 청각, 움직임, 시각,
								<br />
								그리고 인지 능력을 가진 사람들이 웹에 접근할 수 있습니다. <br />
								<br />
								<b>- MDN web docs</b>
							</div>
						</div>{" "}
						<p>
							{" "}
							<b>웹 접근성</b>은 어떠한 사용자(장애인, 노인 등), 어떠한
							기술환경에서도 사용자가{" "}
							<b>
								전문적인 능력 없이 웹 사이트에서 제공하는 모든 정보에 접근할 수
								있도록 하는 것
							</b>
							입니다. 위 정의에 따르면 웹 접근성은 특정 대상에 한정되지 않고
							모든 사용자를 대상으로 합니다. <br />
							<br /> 접근성은 소수의 사용자만을 위한 것이 아니기 때문에 우리
							모두의 문제로 보아야 합니다. 정보통신접근성(Web Accessibility)은
							「지능정보화기본법」에 따라{" "}
							<b>
								장애인이나 고령자분들이 웹 사이트에서 제공하는 정보를 비장애인과
								동등하게 접근하고 이용
							</b>
							할 수 있도록 보장하는 것으로,{" "}
							<b>웹 접근성 준수는 법적 의무사항</b> 입니다.
						</p>
					</p>
				</div>

				<div className="pb-36">
					<p id="modal-modal-description" className="text-xl pb-6">
						<p className="font-bold text-2xl">호환성</p>
						<div className="flex justify-center flex-col items-center my-16 text-center">
							<img
								src={crossBrowser}
								alt="mapping"
								loading="lazy"
								className="w-6/12 pb-12 hover:cursor-pointer"
								onClick={() => {
									window.open(
										"http://www.smartebiz.kr/new/subpage02_02.html",
										"_blank"
									);
								}}
							/>
							모든 웹 콘텐츠에 대하여 다양한 웹브라우저 및 운영체제에서
							<br /> 동등한 호환성을 확보하기 위해 웹 표준을 준수하고 및
							호환성을 제공하는 것
						</div>{" "}
						<p>
							{" "}
							<b>웹 호환성</b>은 표준 웹 기술을 사용하여 운영체제, 브라우저 등{" "}
							<b>어느 한 쪽으로 최적화되거나 종속되지 않도록</b> 공통 요소를
							사용하여 웹 페이지를 제작하는 기법으로 웹 사이트 사용 시 운영체제
							및 브라우저 간 <b>동일한 결과가 나오도록</b> 의미하는 웹
							상호운용성의 개념에 웹 표준의 준수를 포함하는 개념입니다.
						</p>
					</p>
				</div>
				<div className="pb-36">
					<p id="modal-modal-description" className="text-xl pb-6">
						<p className="font-bold text-2xl">개방성</p>
						<br />
						웹사이트는 로봇 배제 표준에 따른{" "}
						<b>검색 로봇 접근을 제한하지 않도록</b> 개방된 정도를 측정하는
						척도입니다. 검색 로봇을 제한하면 검색 엔진의 검색 결과에 웹사이트가
						노출되지 않을 가능성이 있으며, 이는 웹 사이트 사용자들의 접근을
						제한할 수 있습니다.
						<br />
						<br />
						<p>
							웹 개방성은 웹 페이지 내 robots.txt를 확인하여 웹 페이지의
							개방성을 측정할 수 있습니다.
						</p>
					</p>
				</div>
				<div className="pb-36">
					<p id="modal-modal-description" className="text-xl pb-6">
						<p className="font-bold text-2xl">접속성</p>
						<br />
						웹사이트 메인 페이지의 <b>용량과 속도</b>에 따라 접속이 가능한
						정도를 나타내는 척도입니다.
						<p>
							지표 신설에 따른 웹사이트 내 적용 기간을 고려하여 '22년 품질진단
							시 시범 진단을 실시할 예정입니다.(향후 정식 지표 적용예정)
						</p>
					</p>
				</div>
				<div>
					<p id="modal-modal-description" className="text-xl pb-6">
						<p className="font-bold text-2xl leading-relaxed ">현재,</p>
						<br />
						행정안전부는 전자정부 웹사이트의 품질관리를 위해{" "}
						<b>7개의 품질관리 구분에 따른 총 150개 이상</b>의 세부항목을
						명시하고 있으며, 전자정부 웹사이트 품질관리 가이드는 웹사이트
						관리자가 <b>자가 및 수기로 개별 항목을 계산</b>하는 방안을 제시하고
						있습니다. <br />
						<br />
						이러한 평가방법은 평가의 공정성과 품질관리 결과의 정확성을 보장하기
						어려우며, 품질 평가에 오랜 시간이 소요될 것으로 예상됩니다. 따라서,{" "}
						<b>정부 웹사이트 품질관리를 자동화</b>하고,{" "}
						<b>품질관리 결과의 정확성과 공정성을 확보하기 위하여</b> 본
						프로젝트를 개발하였습니다.
						<br />
						<br />
						<b>Team Bson</b>은 전자정부 웹사이트 품질관리 가이드에 따른
						세부항목의 검사 방법들을 구현하였습니다. <br />
						<br />
						<b>QCA</b>는 이러한 항목들을 자동으로 검사한 후, 결과를
						도출해냅니다.
					</p>
				</div>
			</div>

			<div className="flex justify-center flex-col items-center mt-24">
				<img
					src={mapping}
					alt="mapping"
					loading="lazy"
					className="w-[140%] overflow-scroll pl-24 hover:cursor-pointer"
					onClick={() => window.open(mapping)}
				/>
			</div>
		</>
	);
};

export default MainExplanation;
