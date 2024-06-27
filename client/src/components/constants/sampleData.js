import { Dashboard } from "@mui/icons-material";

export const sampleChats = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Boi Group",
        _id: "2",
        groupChat: false,
        members: ["1", "2"],
    },
];

export const sampleUsers = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Boi Group",
        _id: "2",
    },
];

export const sampleNotifications = [
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Doe",
        },
        _id: "1",
    },
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Boi",
        },
        _id: "2",
    },
];

export const sampleMessages = [
    {
        attachments: [],
        content: "Hello My name is vivek Chaurasia",
        _id: "sdffdgdfgdsfgfg",
        sender: {
            _id: "user._id",
            name: "Nikhil",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:41:30.630Z",
    },
    {
        attachments: [
            {
                public_id: "asdsad 2",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            },
        ],
        content: "",
        _id: "sdffdgdfgdsfgfg",
        sender: {
            _id: "sddsfdg",
            name: "Neel",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:41:50.630Z",
    },
];

export const dashboardData = {
    users: [
        {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "John Doe",
            _id: "1",
            username: "abcded",
            friends: 20,
            groups: 5,
        },
        {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "John Boi",
            _id: "2",
            username: "abcded",
            friends: 22,
            groups: 5,
        },
        {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "Bohn Doe",
            _id: "3",
            username: "abcded",
            friends: 15,
            groups: 5,
        },
        {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "Bohn Boi",
            _id: "4",
            username: "abcded",
            friends: 2,
            groups: 5,
        },
        {
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: "Bohn Boi",
            _id: "5",
            username: "abcded",
            friends: 2,
            groups: 5,
        },
    ],
    chats: [
        {
            name: "ABCDE",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "1",
            groupChat: false,
            members: [
                {
                    _id: "1",
                    avatar: "https://www.w3schools.com/howto/img_avatar.png",
                },
                {
                    _id: "2",
                    avatar: "https://www.w3schools.com/howto/img_avatar.png",
                },
            ],
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: "Bohn Boi",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        },
        {
            name: "EFGH",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "2",
            groupChat: true,
            members: [
                {
                    _id: "1",
                    avatar: "https://www.w3schools.com/howto/img_avatar.png",
                },
                {
                    _id: "2",
                    avatar: "https://www.w3schools.com/howto/img_avatar.png",
                },
            ],
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: "John Boi",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        },
    ],
    messages: [
        {
            _id: "1",
            attachments: [],
            content: "Hello My name is vivek Chaurasia",
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Nikhil",
            },
            chat: "chatId",
            groupChat: false,
            createdAt: "2024-02-12T10:41:30.630Z",
        },
        {
            _id: "2",
            attachments: [
                {
                    public_id: "asdsad 2",
                    url: "https://www.w3schools.com/howto/img_avatar.png",
                },
            ],
            content: "",
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Neel",
            },
            chat: "chatId",
            groupChat: true,
            createdAt: "2024-02-12T10:41:50.630Z",
        },
    ],
};
