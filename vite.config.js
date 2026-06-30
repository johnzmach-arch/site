import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração do Vite — projeto React puro (sem backend).
export default defineConfig({
  plugins: [react()],
});
