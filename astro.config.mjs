import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://xuanhengtech.cn',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
