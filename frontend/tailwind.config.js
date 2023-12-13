// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",],
//   theme: {
//     extend: {
//       backgroundImage:{
//         'img-1':"url('./src/assets/img1.jpg')",
//         'img-2':"url('./src/assets/img2.jpg')",
//         'img-3':"url('./src/assets/img3.jpg')",
//       }

//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          colors: {
              primary: '#171717',
              secondary: '#272727',
              'dark-subtle': "rgba(255,255,255,0.5)",
              'light-subtle': "rgba(39,39,39,0.5)",

          },
          backgroundImage: {
              'img-1': "url('./src/assets/img1.jpg')",
              'img-2': "url('./src/assets/img2.jpg')",
              'img-3': "url('./src/assets/img3.jpg')",
          }
      },
  },
  plugins: [],
}

