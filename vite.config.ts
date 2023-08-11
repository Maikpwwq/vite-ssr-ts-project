import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";
import { cjsInterop } from "vite-plugin-cjs-interop";
import vercel from "vite-plugin-vercel";
import vercelSsr from "@magne4000/vite-plugin-vercel-ssr";

const config: UserConfig = {
  plugins: [
    react(),
    ssr(),
    cjsInterop({
      // List of CJS dependencies that require interop
      dependencies: [
        "@mui/material/*",
      ],
    }),
    vercel(),
    vercelSsr(),
  ],
};

export default config;
