import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography, hexToRgb } from "@mui/material";

const Home = () => {
    return (
        <Box bgcolor={"rgba(250, 249, 246)"} height={"100%"}>
            <Typography variant="h5" padding={"2rem"} textAlign={"center"}>
                Select a friend to chat
            </Typography>
        </Box>
    );
};

export default AppLayout()(Home);
