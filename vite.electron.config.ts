import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import electron from 'vite-plugin-electron/simple';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

import viteConfig from './vite.config';

export default defineConfig({
  build: viteConfig.build,
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    electron({
      main: { entry: 'electron/main.ts' },
      preload: { input: 'electron/preload.ts' },
    }),
  ],
  resolve: viteConfig.resolve,
});
