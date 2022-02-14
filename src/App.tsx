import React from "react";
import { Grid, Image, VStack, Heading, Text, Link } from "@chakra-ui/react";
import { Proyecto } from "./components/proyecto";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function App() {
  return (
    <Grid
      bg="paleta1.soporte2"
      color="paleta1.primario"
      placeItems="center"
    p="5"
    templateAreas={[
      '"i" "t" "p1" "p2" "p3" "p4" "p5" "p6" "p7" "p8" "p9" "p10"',
      '"i t" "p1 p2" "p3 p4" "p5 p6" "p7 p8" "p9 p10"',
      '"p1 p2 p3 p4" "p5 i t p6" "p7 p8 p9 p10"',
    ]}
    >
      <Image
        borderRadius="full"
        boxSize="150px"
        src="https://avatars.githubusercontent.com/u/48705030?v=4"
        alt="Kedap foto perfil"
        fallbackSrc="https://via.placeholder.com/150"
        gridArea="i"
      />

      <VStack gridArea="t">
        <Heading>
          <Link href="https://github.com/kedap" color="paleta1.terceario">
            Kedap<ExternalLinkIcon mx="0.1px"/></Link> Avellana
        </Heading>
        <Text>Portafolio del Kedap</Text>
      </VStack>

      <Proyecto texto="Proyecto 1" gridArea="p1"/>
      <Proyecto texto="Proyecto 2" gridArea="p2"/>
      <Proyecto texto="Proyecto 3" gridArea="p3"/>
      <Proyecto texto="Proyecto 4" gridArea="p4"/>
      <Proyecto texto="Proyecto 5" gridArea="p5"/>
      <Proyecto texto="Proyecto 6" gridArea="p6"/>
      <Proyecto texto="Proyecto 7" gridArea="p7"/>
      <Proyecto texto="Proyecto 8" gridArea="p8"/>
      <Proyecto texto="Proyecto 9" gridArea="p9"/>
      <Proyecto texto="Proyecto 10" gridArea="p10"/>
    </Grid>
  );
}

export default App;
