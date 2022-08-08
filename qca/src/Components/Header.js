import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();

	const onLogoClick = () => {
		navigate("/");
	};

	return (
		<div className="h-16 mb-12 mt-48 flex flex-row space-x-4 drop-shadow-md">
			<div
				onClick={onLogoClick}
				className="text-7xl font-semibold h-12 hover:cursor-pointer"
			>
				QCA
			</div>
		</div>
	);
}
