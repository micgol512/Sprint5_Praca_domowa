import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // lub podaj bezpośrednio adres IP, np. '192.168.1.x'
    port: 5173,
  },
  plugins: [react()],
});
