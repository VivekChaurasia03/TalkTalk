import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import Table from "../../components/shared/Table";
import { Avatar } from "@mui/material";
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
        cellClassName: "avatar-cell",
        renderCell: (params) => (
            <Avatar alt={params.row.name} src={params.row.avatar} />
        ),
    },
    {
        field: "name",
        headerName: "Name",
        headerClassName: "table-header",
        width: 200,
    },
    {
        field: "username",
        headerName: "Username",
        headerClassName: "table-header",
        width: 200,
    },
    {
        field: "friends",
        headerName: "Friends",
        headerClassName: "table-header",
        width: 150,
    },
    {
        field: "groups",
        headerName: "Groups",
        headerClassName: "table-header",
        width: 200,
    },
];
const UserManagement = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows(
            dashboardData.users.map((user) => ({
                ...user,
                id: user._id,
                avatar: transformImage(user.avatar, 50),
            }))
        );
    }, []);

    return (
        <AdminLayout>
            <Table heading={"All Users"} rows={rows} columns={columns} />
        </AdminLayout>
    );
};

export default UserManagement;
