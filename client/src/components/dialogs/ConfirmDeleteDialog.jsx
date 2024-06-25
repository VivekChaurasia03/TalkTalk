import { Close as CloseIcon, Done as DoneIcon } from "@mui/icons-material";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import React from "react";

const ConfirmDeleteDialog = ({ open, handleClose, deleteHandler }) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this group?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    size="large"
                    variant="contained"
                    color="error"
                    startIcon={<DoneIcon />}
                    onClick={deleteHandler}
                >
                    Yes
                </Button>
                <Button
                    size="large"
                    variant="contained"
                    startIcon={<CloseIcon />}
                    onClick={handleClose}
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDeleteDialog;
