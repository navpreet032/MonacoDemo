import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vsixPlugin from '@codingame/monaco-vscode-rollup-vsix-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    vsixPlugin()], 
})
