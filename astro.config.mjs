// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import { satteri } from '@astrojs/markdown-satteri';
import expressiveCode from 'astro-expressive-code';

import { satteriPele } from './src/plugins/satteri-pele.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.rick.me.uk/',
    integrations: [
        react(),
        expressiveCode({
            themes: ['material-theme-palenight', 'github-light'],
            styleOverrides: {
                codeFontFamily: 'JetBrains Mono, monospace',
                codeFontSize: '1em',
                frames: {
                    shadowColor: 'none'
                },
                uiFontFamily: 'SourceSans 3, sans-serif',
                uiFontSize: '.8em',
            }
        }),
        mdx()
    ],
    markdown: {
        syntaxHighlight: { type: "shiki", excludeLangs: ["mermaid", "math"] },
        processor: satteri({
            mdastPlugins: [satteriPele]
        })
    },
    image: {
        remotePatterns: [{ protocol: "https" }],
    }
});
