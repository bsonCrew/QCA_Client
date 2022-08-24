import Dialog from "@mui/material/Dialog";

export default function CardDialog(props) {
	return (
		<Dialog
			// selectedValue={selectedValue}

			open={props.open}
			// onClose={handleClose}
			onClick={props.handleClick}
		>
			<div className="h-96 p-6 px-12">
				<p className="text-4xl w-96 font-bold">{props.title}</p>
				<p className="text-xl w-96 pt-4">{props.subheader}</p>
				<p className="text-lg w-96 pt-4"></p>
			</div>
		</Dialog>
	);
}
