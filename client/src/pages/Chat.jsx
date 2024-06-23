import { Fragment, useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { orange, greyColor } from "../components/constants/color";
import {
    AttachFile as AttachFileIcon,
    Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialogs/FileMenu";
import { sampleMessages } from "../components/constants/sampleData";
import MessageComponent from "../components/shared/MessageComponent";

const user = {
    _id: "sddsfdg",
    name: "Abhishek Chavan",
};

const Chat = () => {
    const containerRef = useRef(null);

    return (
        <Fragment>
            <Stack
                ref={containerRef}
                boxSizing={"border-box"}
                padding={"1rem"}
                spacing={"1rem"}
                bgcolor={greyColor}
                height={"90%"}
                sx={{
                    overflowX: "hidden",
                    overflowY: "auto",
                }}
            >
                {sampleMessages.map((message, index) => (
                    <MessageComponent
                        key={index}
                        message={message}
                        user={user}
                    />
                ))}
            </Stack>
            <form
                style={{
                    height: "10%",
                }}
            >
                <Stack
                    direction={"row"}
                    height={"100%"}
                    padding={"1rem"}
                    alignItems={"center"}
                    position={"relative"}
                >
                    <IconButton
                        sx={{
                            backgroundColor: orange,
                            left: "1.5rem",
                            position: "absolute",
                            color: "white",
                            "&:hover": {
                                bgcolor: "error.dark",
                            },
                        }}
                    >
                        <AttachFileIcon />
                    </IconButton>
                    <InputBox placeholder="Type Message here..." />
                    <IconButton
                        type="submit"
                        sx={{
                            backgroundColor: orange,
                            color: "white",
                            marginLeft: "1rem",
                            padding: "0.5rem",
                            "&:hover": {
                                bgcolor: "error.dark",
                            },
                        }}
                    >
                        <SendIcon />
                    </IconButton>
                </Stack>
            </form>
            <FileMenu />
        </Fragment>
    );
};

export default AppLayout()(Chat);
