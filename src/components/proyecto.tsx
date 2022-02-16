import React from "react";
import { useState, useRef, useEffect } from "react";
import { Box, SlideFade, Grid, Link, Icon } from "@chakra-ui/react";

export const Proyecto: React.FC<any> = ({ texto, srcPro, icono }) => {
  const [isOpen, setIsOpen] = useState(false);
  const referencia = useRef(document.createElement("a"));
  useEffect(() => {
    referencia.current.addEventListener("mouseenter", () => setIsOpen(true));
    referencia.current.addEventListener("mouseleave", () => setIsOpen(false));
  }, []);

  return (
    <Link
      href={srcPro}
      w="full"
      h="full"
      minH="100px"
      target="_blank"
      ref={referencia}
      _hover={{ background: "rgba(255,255,255,0.3)" }}
      position="relative"
    >
      {icono && (
        <Icon
          boxSize="80px"
          as={icono}
          position="absolute"
          top="50%"
          left="50%"
          transform="translateX(-50%) translateY(-50%)"
        />
      )}
      <Grid
        placeItems="center"
        w="full"
        h="100px"
        p="5"
        borderRadius="lg"
        position="relative"
      >
        <SlideFade in={isOpen} offsetY="20px">
          <Box
            p="2.7px"
            color="paleta1.primario"
            mt="4"
            bg="paleta1.secundarioTransparente"
            rounded="md"
            shadow="md"
          >
            {texto}
          </Box>
        </SlideFade>
      </Grid>
    </Link>
  );
};

export default Proyecto;
