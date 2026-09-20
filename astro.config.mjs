import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.xuanhengtech.cn',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
