module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cf: { base:"#0F172A", accent:"#2563EB", glow:"#22D3EE", dark:"#0B1020" } // replace with your official palette
      },
      fontFamily: { display:["Aptos Display","ui-sans-serif","system-ui"] }
    }
  },
  plugins: [],
};
