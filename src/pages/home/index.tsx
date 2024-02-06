import { Container, Button } from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../components";

export const HomePage: React.FC<{}> = () => {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Hola Mundo"
        description="Bien venidos a Tienda Rosso"
        element={<Button fullWidth variant="contained">Hola Mundo</Button>}
      ></HeaderComponent>
    </Container>
  );
};
