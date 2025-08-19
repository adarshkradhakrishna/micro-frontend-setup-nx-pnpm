import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'remote_product_hero',
  exposes: {
    './Module': './src/features/Products/components/ProductHero.tsx',
  },
  shared:(name,config)=>{
     return false
  },
  additionalShared: [
    {
      libraryName: 'react',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '19.0.0',
      },
    },
    {
      libraryName: 'react-dom',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: '19.0.0',
      },
    },
  ],
  library: { type: "var", name: "remote_product_hero" },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
