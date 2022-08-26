import SearchBar from "../Components/layout/SearchBar";
import Header from "../Components/layout/Header";
import Recommend from "../Components/atom/Recommend";
import bkgImage from "../Themes/bkg.svg";

function Landing() {
	return (
		<div
			style={{
				backgroundImage: `url(${bkgImage})`,
				backgroundSize: "cover",
				height: "100vh",
			}}
			className="w-full h-full flex flex-col align-center items-center"
		>
			<Header />
			<SearchBar />
			<Recommend />
		</div>
	);
}
export default Landing;
