const Phrase = ({ title, subtitle }) => {
	return (
		<div className="w-full my-12">
			<div className="text-2xl font-bold">{title}</div>
			<div className="mt-2 text-lg">{subtitle}</div>
		</div>
	);
};

export default Phrase;
