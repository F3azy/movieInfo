import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors : {
        brand: {
            primary: "#0B090A",
            secondary: "#660708",
        }
    },
    styles: {
        global: () => ({
            body: {
                bgGradient: "linear(to-t, brand.secondary 50%, brand.primary 50%)",
                minH: "calc(100vh)",
                color: "#E8E8E8",
            },
            html: {
                bgGradient: "linear(to-t, brand.secondary 50%, brand.primary 50%)",
                minH: "calc(100vh)",
                color: "#E8E8E8",
            },
        }),
    },
});