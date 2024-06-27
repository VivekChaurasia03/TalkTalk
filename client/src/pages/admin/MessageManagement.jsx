import { useState, useEffect } from "react";
import { Avatar, Box, Stack } from "@mui/material";
import AdminLayout from "../../components/layout/AdminLayout";
import RenderAttachment from "../../components/shared/RenderAttachment";
import Table from "../../components/shared/Table";
import { fileFormat, transformImage } from "../../lib/Features";
import { dashboardData } from "../../components/constants/sampleData";
import moment from "moment";

const columns = [
    {
        field: "id",
        headerName: "ID",
        headerClassName: "table-header",
        width: 200,
    },
    {
        field: "attachments",
        headerName: "Attachments",
        headerClassName: "table-header",
        cellClassName: "attachments-cell",
        width: 200,
        renderCell: (params) => {
            const { attachments } = params.row;
            return attachments?.length > 0
                ? attachments.map((attachment) => {
                      const url = attachment.url;
                      const file = fileFormat(url);
                      return (
                          <Box
                              key={url}
                              sx={{
                                  paddingTop: "2rem",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  width: "100%",
                                  height: "100%",
                              }}
                          >
                              <a
                                  href={url}
                                  target="_blank"
                                  download
                                  style={{
                                      color: "black",
                                  }}
                              >
                                  {RenderAttachment(file, url, "50px", "50px")}
                              </a>
                          </Box>
                      );
                  })
                : "No Attachments";
        },
    },
    {
        field: "content",
        headerName: "Content",
        headerClassName: "table-header",
        width: 400,
    },
    {
        field: "sender",
        headerName: "Send By",
        headerClassName: "table-header",
        width: 200,
        renderCell: (params) => (
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                <Avatar
                    alt={params.row.sender.name}
                    src={params.row.sender.avatar}
                />
                <span>{params.row.sender.name}</span>
            </Stack>
        ),
    },
    {
        field: "chat",
        headerName: "Chat",
        headerClassName: "table-header",
        width: 220,
    },
    {
        field: "groupChat",
        headerName: "Group Chat",
        headerClassName: "table-header",
        width: 100,
    },
    {
        field: "createdAt",
        headerName: "Time",
        headerClassName: "table-header",
        width: 250,
    },
];

const MessageManagement = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows(
            dashboardData.messages.map((message) => ({
                ...message,
                id: message._id,
                sender: {
                    name: message.sender.name,
                    avatar: transformImage(message.sender.avatar, 50),
                },
                createdAt: moment(message.createdAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                ),
            }))
        );
    }, []);

    return (
        <AdminLayout>
            <Table
                heading={"All Messages"}
                rows={rows}
                columns={columns}
                rowHeight={80}
            />
        </AdminLayout>
    );
};

export default MessageManagement;
