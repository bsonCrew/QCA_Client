import * as React from "react";
import useTop5 from "../../Hooks/useTop5";
import ShortCut from "./RecommendShortcut";

export default function Recommend() {
	const [status, data] = useTop5();

	return (
		<div className="w-[max(50vw,20rem)] mt-4 flex-wrap flex items-center justify-center flex-row">
			{status === "success"
				? data.map(el => (
						<ShortCut
							key={el.homepage}
							label={el.label}
							homepage={el.homepage}
						/>
				  ))
				: null}
		</div>
	);
}
