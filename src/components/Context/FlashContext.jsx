// CONFIG IMPORTS
import React, { createContext } from "react";

const FlashContext = createContext({
  flash: {
    type: "",
    message: "",
    display: false,
  },
});

export default FlashContext;