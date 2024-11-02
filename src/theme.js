import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    msn: {
      50: "#e0ffe4",
      100: "#b3f3b7",
      200: "#83e988",
      300: "#51dd58",
      400: "#800000", // >>primary color 3AB54A
      500: "#80000020",
      600: "#1e6d28",
      700: "#12491a",
      800: "#002600",
      900: "#000a00",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Roboto, sans-serif",
  },
  components: {
    Button: {
      variants: {
        join: {
          border: "2px solid", // Thicker border
          bg: "blue.150",
          color: "white",
          _hover: {
            bg: "blue.600",
            boxShadow: "0 0 0 3px blue.600",
          },
        },
        donate: { 
          border: "2px solid", 
          bg: "blue.400",
          color: "white",
          _hover: {
            bg: "blue.600", 
            color: "white",
          },
        },
      },
    },
  },
});

export default theme;
