import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors : {
        brand: {
            base: "#BA181B",
            bright: "#DC3A3D",
            dark: "#660708",
        },
        white: "#E8E8E8",
        dark: "#0B090A",
    },
    styles: {
        global: () => ({
            body: {
                bgGradient: "linear(to-t, brand.bright 50%, dark 50%)",
                minH: "calc(100vh)",
                color: "white",
            },
            html: {
                bgGradient: "linear(to-t, brand.bright 50%, dark 50%)",
                minH: "calc(100vh)",
                color: "white",
            },
        }),
    },
});