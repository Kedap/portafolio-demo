import React from "react";
import { Box } from "@chakra-ui/react";

export const Proyecto: React.FC<any> = ({ texto }) => {
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
};

export default Proyecto;
