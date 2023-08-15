import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";
// import { cjsInterop } from "vite-plugin-cjs-interop";
import vercel from "vite-plugin-vercel";
import vercelSsr from "@magne4000/vite-plugin-vercel-ssr";

const isProd = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/ssr-options.html#ssr-noexternal
const noExternal: string[] = [];
if (isProd) {
  noExternal.push(
    ...[
      // MUI needs to be pre-processed by Vite in production: https://github.com/brillout/vite-plugin-ssr/discussions/901
      "@mui/base",
      "@mui/icons-material",
      "@mui/material",
      "@mui/utils",
    ]
  );
}

const config: UserConfig = {
  plugins: [
    react(),
    ssr({
      // Use the default pre-render config:
      prerender: true,
    }),
    // cjsInterop({
    //   // List of CJS dependencies that require interop
    //   dependencies: [
    //     "@mui/material/*",
    //   ],
    // }),
    vercel(),
    vercelSsr(),
  ],
  ssr: {
    noExternal,
  },
};

export default config;
