import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [tailwindcss(), react()],
  base: command === "build" ? "/react_todo_list_form/" : "/",
}));
