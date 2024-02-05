import {
  Container,
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import React from "react";

type LoginType = {
  username: string;
  password: string;
};
export const LoginPage: React.FC<{}> = () => {
  const [loginData, setLoginData] = React.useState<LoginType>({
    username: "",
    password: "",
  });
  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(loginData);
  };
  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
              Iniciar Sesión
            </Typography>
            <Box component="form" onSubmit={handelSubmit}>
              <TextField
                name="username"
                margin="normal"
                type="email"
                fullWidth
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                required
                onChange={dataLogin}
              ></TextField>
              <TextField
                name="password"
                margin="normal"
                type="password"
                fullWidth
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                onChange={dataLogin}
              ></TextField>
              <Button
                fullWidth
                type="submit"
                sx={{ mt: 2, mb: 1.5 }}
                variant="contained"
              >
                Iniciar Sesión
              </Button>
              <Button fullWidth type="submit" sx={{ mb: 3 }}>
                Registrarse
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
