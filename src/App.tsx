import React from "react";
import { Grid, Image, VStack, Heading, Text } from "@chakra-ui/react";
import { Proyecto } from "./components/proyecto";

function App() {
  return (
    <Grid
      bg="paleta1.soporte2"
      color="paleta1.primario"
      placeItems="center"
      p="5"
    >
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://avatars.githubusercontent.com/u/48705030?v=4"
        alt="Kedap foto perfil"
        fallbackSrc="https://via.placeholder.com/150"
      />

      <VStack>
        <Heading>Kedap Avellana</Heading>
        <Text>Portafolio del Kedap</Text>
      </VStack>

      <Proyecto texto="Proyecto 1" />
      <Proyecto texto="Proyecto 2" />
      <Proyecto texto="Proyecto 3" />
      <Proyecto texto="Proyecto 4" />
      <Proyecto texto="Proyecto 5" />
      <Proyecto texto="Proyecto 6" />
      <Proyecto texto="Proyecto 7" />
    </Grid>
  );
}

export default App;
