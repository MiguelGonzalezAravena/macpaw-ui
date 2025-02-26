const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: async () => {
    const rehypePrism = (await import('rehype-highlight')).default; // O usa 'rehype-highlight' si prefieres
    return {
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    };
  },
});

/** @type {import('next').NextConfig} */
module.exports = withMDX({
  output: 'export',
  pageExtensions: ['js', 'md', 'mdx'],
  trailingSlash: true,
});
