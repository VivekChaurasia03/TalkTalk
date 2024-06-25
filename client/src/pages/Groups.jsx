import { memo, useEffect, useState, lazy, Suspense } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
    Backdrop,
    Box,
    Button,
    Drawer,
    Grid,
    IconButton,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import {
    Add as AddIcon,
    Delete as DeleteIcon,
    Done as DoneIcon,
    Edit as EditIcon,
    Group as GroupIcon,
    KeyboardBackspace as KeyboardBackspaceIcon,
    Menu as MenuIcon,
} from "@mui/icons-material";
import { mateBlack } from "../components/constants/color";
import { Link } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats, sampleUsers } from "../components/constants/sampleData";
import UserItem from "../components/shared/UserItem";
import { bgGradient } from "../components/constants/color";
const ConfirmDeleteDialog = lazy(() =>
    import("../components/dialogs/ConfirmDeleteDialog")
);
const AddMemberDialog = lazy(() =>
    import("../components/dialogs/AddMemberDialog")
);

const isAddMember = false;

const Groups = () => {
    const chatId = useSearchParams()[0].get("group");

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

    const [groupName, setGroupName] = useState("");
    const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");

    const navigate = useNavigate();

    const navigateBack = () => {
        navigate("/");
    };

    const handleMobile = () => {
        setIsMobileMenuOpen((prevState) => !prevState);
    };
    const handleMobileClose = () => {
        setIsMobileMenuOpen(false);
    };
    const updateGroupName = () => {
        setIsEdit(false);
        setGroupName(groupNameUpdatedValue);
        console.log("GroupName Updated");
    };

    const openAddMemberHandler = () => {};

    const openConfirmDeleteHandler = () => {
        setConfirmDeleteDialog(true);
        console.log("Delete Group");
    };

    const closeConfirmDeleteHandler = () => {
        setConfirmDeleteDialog(false);
    };

    const deleteHandler = () => {
        console.log("Delete Handler");
        closeConfirmDeleteHandler();
    };

    const removeMemberHandler = (id) => {
        console.log(id);
    };

    useEffect(() => {
        if (chatId) {
            setGroupName(`Group Name ${chatId ? chatId : ""}`);
            setGroupNameUpdatedValue(`Group Name ${chatId ? chatId : ""}`);
        }

        // CleanUp logic - everything back to sqaure one when component unmounts
        return () => {
            setGroupName("");
            setGroupNameUpdatedValue("");
            setIsMobileMenuOpen(false);
        };
    }, [chatId]);

    const IconBtns = (
        <>
            <Box
                sx={{
                    display: {
                        xs: "block",
                        sm: "none",
                    },
                    position: "fixed",
                    right: "1rem",
                    top: "2rem",
                }}
            >
                <Tooltip title="menu">
                    <IconButton onClick={handleMobile}>
                        <MenuIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Tooltip title="back">
                <IconButton
                    sx={{
                        position: "absolute",
                        top: "2rem",
                        left: "2rem",
                        bgcolor: mateBlack,
                        color: "white",
                        ":hover": {
                            bgcolor: "rgba(0,0,0,0.7)",
                        },
                    }}
                    onClick={navigateBack}
                >
                    <KeyboardBackspaceIcon />
                </IconButton>
            </Tooltip>
        </>
    );

    const GroupName = (
        <Stack
            direction={"row"}
            alignItems={"center"}
            justifyItems={"center"}
            spacing={"1rem"}
            padding={"1rem"}
            paddingLeft={"3rem"}
        >
            {isEdit ? (
                <>
                    <TextField
                        value={groupNameUpdatedValue}
                        onChange={(e) =>
                            setGroupNameUpdatedValue(e.target.value)
                        }
                        style={{ width: "200px" }}
                    />
                    <IconButton onClick={updateGroupName}>
                        <DoneIcon />
                    </IconButton>
                </>
            ) : (
                <>
                    <Typography variant="h4">{groupName}</Typography>
                    <IconButton onClick={() => setIsEdit(true)}>
                        <EditIcon />
                    </IconButton>
                </>
            )}
        </Stack>
    );

    const ButtonGroup = (
        <Stack
            direction={{
                sm: "row",
                xs: "column",
            }}
            spacing={"1rem"}
            padding={{ xs: "1rem", sm: "1rem", md: "1rem 4rem" }}
        >
            <Button
                size="large"
                variant="contained"
                startIcon={<AddIcon />}
                onClick={openAddMemberHandler}
            >
                Add Member
            </Button>
            <Button
                size="large"
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={openConfirmDeleteHandler}
            >
                Delete Group
            </Button>
        </Stack>
    );

    return (
        <Grid container height={"100vh"}>
            <Grid
                item
                sx={{
                    display: {
                        xs: "none",
                        sm: "block",
                    },
                }}
                sm={3}
            >
                <GroupsList myGroups={sampleChats} chatId={chatId} />
            </Grid>
            <Grid
                item
                xs={12}
                sm={9}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    padding: "1rem 3rem",
                }}
            >
                {IconBtns}
                {!chatId && (
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        style={{ minHeight: "90vh" }}
                    >
                        <Box
                            sx={{
                                padding: "1rem 2rem",
                                backgroundColor: "#f0f0f0",
                                borderRadius: "8px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                textAlign: "center",
                            }}
                        >
                            <Typography variant="h4">
                                Please Select a group <GroupIcon />
                            </Typography>
                        </Box>
                    </Grid>
                )}
                {groupName && (
                    <>
                        {GroupName}
                        <Typography
                            margin={"2rem"}
                            alignSelf={"flex-start"}
                            variant="body1"
                        ></Typography>
                        <Stack
                            maxWidth={"45rem"}
                            width={"100%"}
                            boxSizing={"border-box"}
                            padding={{
                                sm: "1rem",
                                xs: "0",
                                md: "1rem 4rem",
                            }}
                            spacing={"2rem"}
                            height={"50vh"}
                            overflow={"auto"}
                        >
                            {sampleUsers.length > 0 ? (
                                sampleUsers.map((user) => (
                                    <UserItem
                                        user={user}
                                        key={user._id}
                                        isAdded
                                        styling={{
                                            boxShadow:
                                                "0 0 0.5rem rgb(0,0,0,0.2)",
                                            padding: "1rem 2rem",
                                            borderRadius: "1rem",
                                        }}
                                        handler={removeMemberHandler}
                                    />
                                ))
                            ) : (
                                <Typography>No Users</Typography>
                            )}
                        </Stack>
                        {ButtonGroup}
                    </>
                )}
            </Grid>
            {isAddMember && (
                <Suspense fallback={<Backdrop open />}>
                    <AddMemberDialog />
                </Suspense>
            )}
            {confirmDeleteDialog && (
                <Suspense fallback={<Backdrop open />}>
                    <ConfirmDeleteDialog
                        open={confirmDeleteDialog}
                        handleClose={closeConfirmDeleteHandler}
                        deleteHandler={deleteHandler}
                    />
                </Suspense>
            )}
            <Drawer
                sx={{
                    display: {
                        xs: "block",
                        sm: "none",
                    },
                }}
                open={isMobileMenuOpen}
                onClose={handleMobileClose}
            >
                <GroupsList
                    width={"50vw"}
                    myGroups={sampleChats}
                    chatId={chatId}
                />
            </Drawer>
        </Grid>
    );
};

const GroupsList = ({ w = "100%", myGroups = [], chatId }) => (
    <Stack
        width={w}
        sx={{ backgroundImage: bgGradient, height: "100vh", overflow: "auto" }}
    >
        {myGroups.length > 0 ? (
            myGroups.map((group) => (
                <GroupListItem group={group} chatId={chatId} key={group._id} />
            ))
        ) : (
            <Typography textAlign={"center"} padding={"1rem"}>
                No Groups
            </Typography>
        )}
    </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
    const { name, avatar, _id } = group;
    return (
        <Link
            to={`?group=${_id}`}
            onClick={(e) => {
                if (chatId === _id) e.preventDefault();
            }}
        >
            <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
                <AvatarCard avatar={avatar} />
                <Typography>{name}</Typography>
            </Stack>
        </Link>
    );
});

export default Groups;
