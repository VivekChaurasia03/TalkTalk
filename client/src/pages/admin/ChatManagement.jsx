import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import Table from "../../components/shared/Table";
import { Avatar, Stack } from "@mui/material";
import AvatarCard from "../../components/shared/AvatarCard";
import { dashboardData } from "../../components/constants/sampleData";
import { transformImage } from "../../lib/Features";

const columns = [
    {
        field: "id",
        headerName: "ID",
        headerClassName: "table-header",
        width: 200,
    },
    {
        field: "avatar",
        headerName: "Avatar",
        headerClassName: "table-header",
        width: 150,
        renderCell: (params) => <AvatarCard avatar={params.row.avatar} />,
    },
    {
        field: "name",
        headerName: "Name",
        headerClassName: "table-header",
        width: 300,
    },
    {
        field: "totalMembers",
        headerName: "Total Members",
        headerClassName: "table-header",
        width: 120,
    },
    {
        field: "member",
        headerName: "Members",
        headerClassName: "table-header",
        width: 400,
        renderCell: (params) => (
            <AvatarCard max={100} avatar={params.row.members} />
        ),
    },
    {
        field: "totalMessages",
        headerName: "Total Messages",
        headerClassName: "table-header",
        width: 200,
    },
    {
        field: "creator",
        headerName: "Created By",
        headerClassName: "table-header",
        width: 250,
        renderCell: (params) => (
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                <Avatar
                    alt={params.row.creator.name}
                    src={params.row.creator.avatar}
                />
                <span>{params.row.creator.name}</span>
            </Stack>
        ),
    },
];

const ChatManagement = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows(
            dashboardData.chats.map((chat) => ({
                ...chat,
                id: chat._id,
                avatar: chat.avatar.map((i) => transformImage(i, 50)),
                members: chat.members.map((i) => transformImage(i.avatar, 50)),
                creator: {
                    name: chat.creator.name,
                    avatar: transformImage(chat.creator.avatar, 50),
                },
            }))
        );
    }, []);

    return (
        <AdminLayout>
            <Table heading={"All Chats"} rows={rows} columns={columns} />
        </AdminLayout>
    );
};

export default ChatManagement;
