import { useState } from "react";
import {
    Avatar,
    Button,
    Container,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from "../utils/validators";
import { bgGradient } from "../components/constants/color";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin((prevState) => !prevState);
    };

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const password = useInputValidation("");
    const avatar = useFileHandler("single");

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        // Add sign-up logic
    };

    return (
        <div
            style={{
                backgroundImage: bgGradient,
            }}
        >
            <Container
                component={"main"}
                maxWidth="xs"
                sx={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {isLogin ? (
                        <LoginForm
                            username={username}
                            password={password}
                            onSubmit={handleLogin}
                            toggleForm={toggleForm}
                        />
                    ) : (
                        <SignUpForm
                            name={name}
                            bio={bio}
                            username={username}
                            password={password}
                            avatar={avatar}
                            onSubmit={handleSignUp}
                            toggleForm={toggleForm}
                        />
                    )}
                </Paper>
            </Container>
        </div>
    );
};

const LoginForm = ({ username, password, onSubmit, toggleForm }) => (
    <>
        <Typography variant="h5">Login</Typography>
        <form
            style={{
                width: "100%",
                marginTop: "1rem",
            }}
            onSubmit={onSubmit}
        >
            <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
            />
            <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
            />
            <Button
                sx={{
                    marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
            >
                Login
            </Button>
            <Typography textAlign={"center"} m={"1rem"}>
                OR
            </Typography>
            <Button
                fullWidth
                variant="text"
                color="primary"
                onClick={toggleForm}
            >
                Register
            </Button>
        </form>
    </>
);

const SignUpForm = ({
    name,
    bio,
    username,
    password,
    avatar,
    onSubmit,
    toggleForm,
}) => (
    <>
        <Typography variant="h5">Sign Up</Typography>
        <form
            style={{
                width: "100%",
                marginTop: "1rem",
            }}
            onSubmit={onSubmit}
        >
            <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                    sx={{
                        width: "10rem",
                        height: "10rem",
                        objectFit: "contain",
                    }}
                    src={avatar.preview}
                />
                <IconButton
                    sx={{
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        color: "white",
                        bgcolor: "rgb(0, 0, 0, 0.5)",
                        ":hover": {
                            bgcolor: "rgb(0, 0, 0, 0.7)",
                        },
                    }}
                    component="label"
                >
                    <>
                        <CameraAltIcon />
                        <VisuallyHiddenInput
                            type="file"
                            onChange={avatar.changeHandler}
                        />
                    </>
                </IconButton>
            </Stack>
            {avatar.error && (
                <Typography
                    m={"1rem auto"}
                    width={"fit-content"}
                    display={"block"}
                    color="error"
                    variant="caption"
                >
                    {avatar.error}
                </Typography>
            )}
            <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
            />
            <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
            />
            <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
            />
            {username.error && (
                <Typography color="error" variant="caption">
                    {username.error}
                </Typography>
            )}
            <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
            />
            <Button
                sx={{
                    marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
            >
                Register
            </Button>
            <Typography textAlign={"center"} m={"1rem"}>
                OR
            </Typography>
            <Button
                fullWidth
                variant="text"
                color="primary"
                onClick={toggleForm}
            >
                Login
            </Button>
        </form>
    </>
);

export default Login;
