import { defineConfig } from 'vitest/config';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'path';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/shared-state',
  plugins: [nxViteTsPaths()],
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
  build: {
    outDir: '../../packages/shared-state/dist', // ✅ matches project.json outputPath
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // ✅ absolute entry path
      name: 'shared-state',
      fileName: 'index',
      formats: ['es', 'cjs'], // ✅ esm + commonjs build
    },
    rollupOptions: {
      external: [], // add react, react-dom here if you import them
    },
  }

});