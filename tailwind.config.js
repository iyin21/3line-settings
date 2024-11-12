/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        white:{
          100:"#ffffff",
        },
        black:{
          100:"#000000",
          90:"#344054"
          
        },
        gray:{
          100:"#F9FAFB",
          90:"#667085"
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      "2xl": ["30px", "38px"],
      "xl": ["24px", "32px"],
        "2lg": ["18px", "28px"],
        "lg": ["16px", "24px"],
        "md": ["14px", "20px"],
        "2sm": ["16px", "24px"],
        "sm": ["12px", "22px"],
        
    },
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

