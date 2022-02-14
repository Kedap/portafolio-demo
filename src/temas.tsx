import React from "react";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    paleta1: {
      primario: "#FDFFFC",
      secundario: "#FF0022",
      terceario: "#41EAD4",
      soporte1: "#011627",
      soporte2: "#B91372",
    },
  },

  styles: {
    global: {
      margin: 0,
      padding: 0,
      minWeight: "100vh",
    },
    a: {
      color: "violet",
    },
  },
});

export default theme;
