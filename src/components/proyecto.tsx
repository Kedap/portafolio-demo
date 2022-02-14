import React from "react";
import { Box } from "@chakra-ui/react";

export function Proyecto({ texto }: { texto: string }) {
  return (
    <Box
      w="full"
      h="100px"
      p="5"
      _hover={{ background: "rgba(255,255,255,0.3)" }}
      borderRadius="lg"
    >
      {texto}
    </Box>
  );
}

export default Proyecto;
