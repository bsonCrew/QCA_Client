import "../App.css";

export default function Header() {
	return (
		<header className="App-header">
			<h1>This is Header Area</h1>
			<div id="developer-link">
				<a
					className="App-link"
					href="https://pinkishincoloragain.me"
					target="_blank"
					rel="noopener noreferrer"
				>
					Who made this website?
				</a>
			</div>
		</header>
	);
}
