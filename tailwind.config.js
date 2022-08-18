module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "wescolor":"#c42c44",
        "wescolordark":"#bc142c",
        "wescolor0":"#EEC5C9",
        "wescolor1":"#e0a2ac"
      },
      screens: {
        "sm" : "360px",
        "md" : "768px",
        "lg" : "1024px",
        "xl" : "1280px",
        "2xl" : "1536px",
      },
      backgroundImage: {
        'contact-back':"url('Contact/contact.jpg')",
      }
    },
  } ,
  plugins: [],
}
