import {
    Button,
    Dialog,
    DialogTitle,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../constants/sampleData";
import { useInputValidation } from "6pp";

const NewGroup = () => {
    const groupName = useInputValidation("");

    const [members, setMembers] = useState(sampleUsers);
    const [selectedMembers, setSelectedMembers] = useState([]);

    const selectMemberHandler = (id) => {
        setSelectedMembers((prevState) =>
            prevState.includes(id)
                ? prevState.filter((currentId) => currentId !== id)
                : [...prevState, id]
        );
    };

    const submitHandler = async () => {};

    const closeHandler = () => {};

    return (
        <Dialog open onClose={closeHandler}>
            <Stack p={{ xs: "1rem", sm: "2rem" }} width={"25rem"}>
                <DialogTitle textAlign={"center"} variant="h4">
                    New Group
                </DialogTitle>
                <TextField
                    label="Group Name"
                    value={groupName.value}
                    onChange={groupName.changeHandler}
                />
                <Typography
                    paddingTop={"1rem"}
                    paddingBottom={"1rem"}
                    textAlign={"center"}
                    variant="h5"
                >
                    Members
                </Typography>
                <Stack>
                    {members.map((user) => (
                        <UserItem
                            user={user}
                            key={user._id}
                            handler={selectMemberHandler}
                            isAdded={selectedMembers.includes(user._id)}
                        />
                    ))}
                </Stack>
                {groupName.error && (
                    <Typography
                        color="error"
                        textAlign="center"
                        variant="body2"
                    >
                        {groupName.error}
                    </Typography>
                )}
                <Stack
                    direction={"row"}
                    textAlign={"center"}
                    justifyContent={"center"}
                    paddingTop={"2rem"}
                    spacing={"1rem"}
                >
                    <Button variant="contained" onClick={submitHandler}>
                        Create
                    </Button>
                    <Button variant="contained" color="error">
                        Cancel
                    </Button>
                </Stack>
            </Stack>
        </Dialog>
    );
};

export default NewGroup;
