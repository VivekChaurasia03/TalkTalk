import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useInputValidation } from "6pp";
import { bgGradient } from "../../components/constants/color";
import { Navigate } from "react-router-dom";

const isAdmin = true;

const AdminLogin = () => {
    const secretKey = useInputValidation("");

    const submitHandler = () => {
        e.preventDefault();
        console.log("Submit Handler");
    };

    if (isAdmin) return <Navigate to="/admin/dashboard" />;

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
                    <LoginForm secretKey={secretKey} onSubmit={submitHandler} />
                </Paper>
            </Container>
        </div>
    );
};

const LoginForm = ({ secretKey, submitHandler }) => (
    <>
        <Typography variant="h5">Admin Login</Typography>
        <form
            style={{
                width: "100%",
                marginTop: "1rem",
            }}
            onSubmit={submitHandler}
        >
            <TextField
                required
                fullWidth
                label="Secret Key"
                type="password"
                margin="normal"
                variant="outlined"
                value={secretKey.value}
                onChange={secretKey.changeHandler}
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
        </form>
    </>
);

export default AdminLogin;
