import { memo, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
    Box,
    Drawer,
    Grid,
    IconButton,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import {
    Done as DoneIcon,
    Edit as EditIcon,
    KeyboardBackspace as KeyboardBackspaceIcon,
    Menu as MenuIcon,
} from "@mui/icons-material";
import { mateBlack } from "../components/constants/color";
import { Link } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats } from "../components/constants/sampleData";

const Groups = () => {
    const chatId = useSearchParams()[0].get("group");

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
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

    useEffect(() => {
        setGroupName(`Group Name ${chatId}`);
        setGroupNameUpdatedValue(`Group Name ${chatId}`);

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
                sm={4}
                bgcolor={"bisque"}
            >
                <GroupsList myGroups={sampleChats} chatId={chatId} />
            </Grid>
            <Grid
                item
                xs={12}
                sm={8}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    padding: "1rem 3rem",
                }}
            >
                {IconBtns}
                {groupName && GroupName}
            </Grid>
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
    <Stack width={w}>
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
