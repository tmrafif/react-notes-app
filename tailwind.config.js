/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
        },
        extend: {
            colors: {
                light: "#f5f5f5", // neutral-100
                dark: "#262626", // neutral-800
                darker: "#171717", // neutral-900
                primary: "#38bdf8", // sky-400
                secondary: "#09ACF4", // orange-300
            },
        },
    },
    plugins: [],
};
