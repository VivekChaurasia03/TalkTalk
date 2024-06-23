import { Avatar, Stack, Typography } from "@mui/material";
import {
    Face as FaceIcon,
    AlternateEmail as UsernameIcon,
    CalendarMonth as CalendarMonthIcon,
} from "@mui/icons-material";
import moment from "moment";
import React from "react";

const Profile = () => {
    return (
        <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
            <Avatar
                sx={{
                    width: 200,
                    height: 200,
                    objectFit: "contain",
                    marginBottom: "1rem",
                    border: "5px solid white",
                }}
            />
            <ProfileCard heading={"Bio"} text={"Testing this Chat App"} />
            <ProfileCard
                heading={"Username"}
                text={"quillnskull"}
                Icon={<UsernameIcon />}
            />
            <ProfileCard
                heading={"Name"}
                text={"Vivek Chaurasia"}
                Icon={<FaceIcon />}
            />
            <ProfileCard
                heading={"Joined"}
                text={moment("2024-01-21T00:00:00.000Z").fromNow()}
                Icon={<CalendarMonthIcon />}
            />
            ;
        </Stack>
    );
};

const ProfileCard = ({ text, Icon, heading }) => {
    return (
        <Stack
            spacing={"1rem"}
            direction={"row"}
            alignItems={"center"}
            color={"white"}
            textAlign={"center"}
        >
            {Icon && Icon}
            <Stack>
                <Typography variant="body1">{text}</Typography>
                <Typography variant="caption" color={"grey"}>
                    {heading}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Profile;
