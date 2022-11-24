import Dialog from "@mui/material/Dialog";
import linkify from "../utils/linkify";
import audits from "../../audits.json";

import styled from "@emotion/styled";
import config from "../../config.json";
import AuditLabel from "./AuditLabel";

const AuditValueWrapper = styled.div({
  backgroundColor: config.colors.blue,
  color: config.colors.white,
  fontSize: "1.2rem",
  fontWeight: "bold",
  maxHeight: "3rem",
  maxWidth: "20vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  padding: "1rem",
});

const ModalHeader = styled.div({
  fontSize: "1.5rem",
  fontWeight: "bold",
});

const StyledDialog = styled(Dialog)({
  arialabelledby: "점수를 설명하는 모달입니다",
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      maxWidth: "80%",
      padding: "4vh 3vw 4vh 3vw",
      marginBottom: -10,
      marginTop: -10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
});

export default function DataCardModal(props) {
  let description = props.description?.replace(props.subheader, "");

  return (
    <StyledDialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      fullWidth
      maxWidth='lg'
    >
      <div>
        <ModalHeader>{props.title}</ModalHeader>
        <div className='py-6 text-lg pt-4 leading-8'>
          <AuditLabel auditId={props.id} />
          {props.subheader}
          <br />
          {!props.subheader.includes(description) ? linkify(description) : null}
        </div>
      </div>
      {props.item?.displayValue ? (
        <AuditValueWrapper>{props.item.displayValue}</AuditValueWrapper>
      ) : null}
    </StyledDialog>
  );
}
