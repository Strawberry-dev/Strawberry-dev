module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: { min: "0px", max: "350px" },
            md: { min: "351px", max: "400px" },
            lg: { min: "401px", max: "600px" },
            xl: { min: "601px", max: "800px" },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
