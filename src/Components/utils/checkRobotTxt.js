const checkRobotTxt = robot => {
	let score = 100;
	if (robot !== undefined && robot !== null && robot.length !== 0) {
		for (const el of robot) {
			if (el?.type.toLowerCase().includes("disallow")) {
				score = 0;
				break;
			}
		}
	}

	return {
		score: score,
		description:
			"정부는 모든 하위 페이지에 대해 검색 로봇의 완전허용을 권장하고 있습니다. robots.txt 파일은 검색 로봇이 웹 사이트 내에서 액세스할 수 있는 URL을 알려 줍니다.  [자세히 알아보기](https://developers.google.com/search/docs/advanced/robots/intro?hl=ko)",
		id: "robots-txt",
		title:
			score !== 0
				? "robots.txt에 검색 로봇이 접근이 불가능한(Disallow) 항목이 존재하지 않음"
				: "robots.txt에 검색 로봇이 접근이 불가능한(Disallow) 항목이 존재함",
		scoreDisplayMode: "notApplicable",
	};
};

export default checkRobotTxt;
