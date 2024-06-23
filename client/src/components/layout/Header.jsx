import {
    AppBar,
    Backdrop,
    Box,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
    CircularProgress,
} from "@mui/material";
import {
    Add as AddIcon,
    Menu as MenuIcon,
    Search as SearchIcon,
    Group as GroupIcon,
    Notifications as NotificationsIcon,
    Logout as LogoutIcon,
} from "@mui/icons-material";
import { Suspense, useState, lazy } from "react";
import { orange } from "../constants/color";
import { useNavigate } from "react-router-dom";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
    const navigate = useNavigate();

    const [isMobile, setIsMobile] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);

    const handleMobile = () => {
        setIsMobile((prevState) => !prevState);
    };
    const openSearch = () => {
        setIsSearch((prevState) => !prevState);
    };
    const openNewGroup = () => {
        setIsNewGroup((prevState) => !prevState);
    };
    const openNotification = () => {
        setIsNotification((prevState) => !prevState);
    };
    const navigateToGroup = () => navigate("/groups");
    const logoutHandler = () => {
        console.log("Clicked");
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }} height={"4rem"}>
                <AppBar
                    position="static"
                    sx={{
                        bgcolor: orange,
                    }}
                >
                    <Toolbar>
                        <Typography
                            variant="h6"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        >
                            TalkTalk
                        </Typography>
                        <Box sx={{ display: { xs: "block", sm: "none" } }}>
                            <IconButton color="inherit" onClick={handleMobile}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box>
                            <IconBtn
                                title={"Search"}
                                icon={<SearchIcon />}
                                onClick={openSearch}
                            />
                            <IconBtn
                                title={"New group"}
                                icon={<AddIcon />}
                                onClick={openNewGroup}
                            />
                            <IconBtn
                                title={"Manage groups"}
                                icon={<GroupIcon />}
                                onClick={navigateToGroup}
                            />
                            <IconBtn
                                title={"Notifications"}
                                icon={<NotificationsIcon />}
                                onClick={openNotification}
                            />
                            <IconBtn
                                title={"Logout"}
                                icon={<LogoutIcon />}
                                onClick={logoutHandler}
                            />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {isSearch && (
                <Suspense
                    fallback={
                        <Backdrop open>
                            <CircularProgress />
                        </Backdrop>
                    }
                >
                    <SearchDialog />
                </Suspense>
            )}
            {isNotification && (
                <Suspense
                    fallback={
                        <Backdrop open>
                            <CircularProgress />
                        </Backdrop>
                    }
                >
                    <NotificationDialog />
                </Suspense>
            )}
            {isNewGroup && (
                <Suspense
                    fallback={
                        <Backdrop open>
                            <CircularProgress />
                        </Backdrop>
                    }
                >
                    <NewGroupDialog />
                </Suspense>
            )}
        </>
    );
};

const IconBtn = ({ title, icon, onClick }) => {
    return (
        <Tooltip title={title}>
            <IconButton color="inherit" size="large" onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    );
};

export default Header;
