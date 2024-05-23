import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./Booking.css";

export default function BookingDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment className="booking">
      <button className="booking-button" onClick={handleClickOpen}>
        Book an appointment to<br></br> visit our current exhibition
      </button>
      <Dialog
        scroll="body"
        // fullWidth="true"
        PaperProps={{ sx: { width: "100%", height: "100%" } }}
        className="booking-dialog"
        open={open}
        onClose={handleClose}
        aria-labelledby="booking-dialog-title"
        aria-describedby="booking-dialog-description"
      >
        <DialogTitle id="booking-dialog-title">
          {"ENTRETEMPS - Book an appointment"}
        </DialogTitle>
        <DialogContent className="booking-dialog-content">
          <iframe
            src="https://booking.setmore.com/scheduleappointment/3ab330b8-e7af-4596-b77b-ee54e85b857c"
            width="100%"
            height="100%"
          ></iframe>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
