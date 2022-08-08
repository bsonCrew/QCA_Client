import SearchBar from "../Components/SearchBar";
import Header from "../Components/Header";
import Recommend from "../Components/Recommend";
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
