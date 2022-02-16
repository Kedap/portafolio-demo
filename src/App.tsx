import React from "react";
import {
  Grid,
  Image,
  VStack,
  Heading,
  Text,
  Link,
  Icon,
} from "@chakra-ui/react";
import { Proyecto } from "./components/proyecto";

// Iconitos
import { BiPackage, BiSync } from "react-icons/bi";
import { ImGithub, ImTelegram, ImMail4 } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiChatbot } from "react-icons/si";
import { GrVirtualMachine } from "react-icons/gr";

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
        <Heading color="paleta1.terceario">Kedap Avellana</Heading>
        <Text>Portafolio del Kedap o alguna informacion relevante</Text>
        <Text>
          <Link href="https://github.com/kedap">
            <Icon h={6} w={6} as={ImGithub} />
          </Link>
          <Link href="https://t.me/Kedap_Develop">
            {" "}
            <Icon h={6} w={6} as={ImTelegram} />
          </Link>
          <Link href="mailto:kedap.dev@protonmail.com">
            {" "}
            <Icon h={6} w={6} as={ImMail4} />
          </Link>
          <Link href="https://twitter.com/kedap_avellana">
            {" "}
            <Icon h={6} w={6} as={AiFillTwitterCircle} />
          </Link>
        </Text>
      </VStack>

      <Proyecto
        texto="ApmPKG"
        gridArea="p1"
        srcPro="https://github.com/kedap/apmpkg"
        icono={BiPackage}
      />
      <Proyecto
        texto="Syncre"
        gridArea="p2"
        srcPro="https://github.com/Kedap/syncre"
        icono={BiSync}
      />
      <Proyecto
        texto="Shashi-bot"
        gridArea="p3"
        srcPro="https://github.com/kedap/shashi-bot"
        icono={SiChatbot}
      />
      <Proyecto
        texto="Makechine"
        gridArea="p4"
        srcPro="https://github.com/Kedap/makechine"
        icono={GrVirtualMachine}
      />
      <Proyecto texto="Proyecto 5" gridArea="p5" />
      <Proyecto texto="Proyecto 6" gridArea="p6" />
      <Proyecto texto="Proyecto 7" gridArea="p7" />
      <Proyecto texto="Proyecto 8" gridArea="p8" />
      <Proyecto texto="Proyecto 9" gridArea="p9" />
      <Proyecto texto="Proyecto 10" gridArea="p10" />
    </Grid>
  );
}

export default App;
