// import { defineConfig } from "vite";
// import laravel from "laravel-vite-plugin";
// import react from "@vitejs/plugin-react";
// // import { transformRuntime } from '@babel/plugin-transform-runtime';
// import transformRuntime from "@babel/plugin-transform-runtime";

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: "resources/js/app.jsx",
//             refresh: true,
//         }),
//         react(),
//         transformRuntime({
//             absoluteRuntime: false,
//             corejs: false,
//             helpers: true,
//             regenerator: true,
//             useESModules: true,
//         }),
//     ],
// });

// import { defineConfig } from "vite";
// import laravel from "laravel-vite-plugin";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: "resources/js/app.jsx",
//             refresh: true,
//         }),
//         react(),
//         // Remove transformRuntime from here
//     ],
// });


import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.js', 'resources/css/app.css'],
      refresh: true,
    }),
    react(),
  ],
});
