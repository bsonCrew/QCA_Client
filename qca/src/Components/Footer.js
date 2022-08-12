import sub from "../assets/Subbb.png";
import Bin from "../assets/Bin.png";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
	return (
		<div className="z-2 px-24 py-6 flex w-screen h-24 bg-main justify-center">
			<span className="text-center font-bold flex align-middle justify-center ">
				Project contributor:
				<a
					href="https://github.com/bsonCrew"
					target="_blank"
					rel="noopener noreferrer"
					className="mx-1 text-main decoration-[#50d71e]"
				>
					<h2 class="line-through line text-4xl decoration-[#ff4949]">
						bson crew.
					</h2>
				</a>
				All rights reserved © 2022 - {new Date().getFullYear()}
			</span>
		</div>
	);
}
