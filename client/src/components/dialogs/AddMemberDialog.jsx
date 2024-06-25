import { useState } from "react";
import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import { Close as CloseIcon, Done as DoneIcon } from "@mui/icons-material";
import { sampleUsers } from "../constants/sampleData";
import UserItem from "../shared/UserItem";

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
    const [members, setMembers] = useState(sampleUsers);
    const [selectedMembers, setSelectedMembers] = useState([]);

    const selectMemberHandler = (id) => {
        setSelectedMembers((prevState) =>
            prevState.includes(id)
                ? prevState.filter((currentId) => currentId !== id)
                : [...prevState, id]
        );
    };

    const closeHandler = () => {
        setSelectedMembers([]);
        setMembers([]);
    };

    const addMemberSubmitHandler = () => {
        closeHandler();
    };

    return (
        <Dialog open onClose={closeHandler}>
            <Stack p={"2rem"} spacing={"2rem"}>
                <DialogTitle textAlign={"center"}>
                    Add Members to Group
                </DialogTitle>
                <Stack spacing={"1rem"}>
                    {members.length > 0 ? (
                        members.map((user) => (
                            <UserItem
                                key={user._id}
                                user={user}
                                handler={selectMemberHandler}
                                isAdded={selectedMembers.includes(user._id)}
                            />
                        ))
                    ) : (
                        <Typography textAlign={"center"}>No Friends</Typography>
                    )}
                </Stack>
                <Stack
                    direction={"row"}
                    spacing={"1rem"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                >
                    <Button
                        size="large"
                        variant="contained"
                        disabled={isLoadingAddMember}
                        onClick={addMemberSubmitHandler}
                        startIcon={<DoneIcon />}
                    >
                        Yes
                    </Button>
                    <Button
                        size="large"
                        variant="contained"
                        color="error"
                        onClick={closeHandler}
                        startIcon={<CloseIcon />}
                    >
                        Cancel
                    </Button>
                </Stack>
            </Stack>
        </Dialog>
    );
};

export default AddMemberDialog;
