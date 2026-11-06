import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:'https://json-csv.guidehollow.com',output:'static',trailingSlash:'always',integrations:[sitemap({filter:url=>new URL(url).pathname==='/'})]});
