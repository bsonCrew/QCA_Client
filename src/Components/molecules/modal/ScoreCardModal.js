import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import config from "../../../config.json";
import ScoreCardModalContent from "../modalContent/ScoreCardModalContent";

import algorithmDesc from "../../../assets/algorithmDesc.png";

export default function ScoreCardModal({ open, handleClose, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      disableAutoFocus={true}
      fullWidth
      maxWidth='sm'
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "lg",
          },
        },
      }}
    >
      <Button
        onClick={handleClose}
        color='primary'
        autoFocus
        sx={{
          width: 100,
          backgroundColor: config.colors["gray-light"],
          "&:hover": {
            backgroundColor: config.colors.main,
          },
          position: "sticky",
          left: "90%",
          top: "2%",
          // top: 30,
        }}
      >
        <p className='font-bold text-md'>이해했어요</p>
      </Button>
      <div className='w-fit h-[95vh] p-16 overflow-y-scroll'>
        <img alt='매핑 알고리즘을 도식화한 이미지' src={algorithmDesc} />
        <hr />
        <div id='markdown' className='h-full '>
          <ScoreCardModalContent />
        </div>
      </div>
    </Dialog>
  );
}
