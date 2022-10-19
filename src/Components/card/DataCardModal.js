import Dialog from "@mui/material/Dialog";
import linkify from "../utils/linkify";
import audits from "../../audits.json";

export default function DataCardModal(props) {
	let description = props.description?.replace(props.subheader, "");

	const AuditLabel = ({ auditId }) => {
		const auditObj = audits.audits[auditId];
		let className = "";
		switch (auditObj.class) {
			case "accessibility":
				className = "접근성";
				break;
			case "connectivity":
				className = "접속성";
				break;
			case "compatibility":
				className = "호환성";
				break;
			case "openness":
				className = "개방성";
				break;
			default:
				className = "";
		}
		return (
			<div className="mt-1 text-lg font-bold text-blue">
				{[className, auditObj.subClass, auditObj.spec, props.id].join(" > ")}
			</div>
		);
	};

	return (
		<Dialog
			open={props.open}
			onClose={props.handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			fullWidth
			maxWidth="lg"
		>
			<div className="w-fit h-100 p-12">
				<span className="text-xl font-bold">{props.title}</span>
				<AuditLabel auditId={props.id} />
				<div className="mt-4 py-6 text-lg pt-4 leading-8">
					{props.subheader}
					<br />
					{linkify(description, [])}
				</div>
				<div className="mt-8"></div>
			</div>
		</Dialog>
	);
}
