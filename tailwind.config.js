/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",                // blue
        "primary-foreground": "#ffffff",
        secondary: "#6b7280",              // gray
        "secondary-foreground": "#ffffff",
        destructive: "#dc2626",            // red
        "destructive-foreground": "#ffffff",
        accent: "#10b981",                 // green
        "accent-foreground": "#ffffff",
      },
    },
  },
  plugins: [],
}
